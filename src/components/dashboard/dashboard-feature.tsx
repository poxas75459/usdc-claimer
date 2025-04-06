/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "dVMgNTFQE285jitRTi5yo9UhAP8ZxJQfzDsiuSeosWQNXi2PBiqVZXKQWUAVHfWxGLF76NzLxspTgXqEHiXMHmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GcUEfoYmF3tiCqsJiZoSRRSgynZPcgw9acq3EkpmX22zWM5osTXgsvmGantBpb2ytuoUjGaGsU38ZcrfPpqgtvZ",
  "key1": "3LoJamNHQ5WAUpFRNEkaJL7m8sDV1kTQFgSMDdiV9jocTCVDogBLRKRroP9xAYeiVmMv9hMnKUGPgHWdV2d8qLwY",
  "key2": "5qfVZdH6oPETZBC5sFV7A6EHVYjeBtWb2YGJxgkxDDi4roXCow6j9bnKo8CT7nv3BFjoYLPkUCdRKpVFhS4oNupy",
  "key3": "sJPCcn5ePV1CE2ZYrssKMZksvM9d6SiRfgS5XxwLK152vm8qjCrATxTCC2h3vvMuCA95JsQwNLfRFBq7reTQxiM",
  "key4": "4FMyESVY75jvFJHkZEA7mAN9tcTp4RLxsQjRFEc62gQJfoJ2akDG62c85VfqDZqi6qHgu61H4v7yWoUVEQCBXTWJ",
  "key5": "QuS2UWfCWHZzUZMwu9CKJaB8wosbbhWLP3i9kGLcLoW5vwVd7sCpKyc4KBr6ELYKiWMYHXTqMCE6CC5vz62xZ9z",
  "key6": "5vgYd1tnsN8MZcTab3LtvK42PtP2xQJp5d5rPtdvggDSLRu1FbE3oeXSfL6wZCsZoZ6F9GmuL62B4ggrbfAS1ZPZ",
  "key7": "2tCa6YZUicMfdhZokuEcDoxo4j67hfi1EBF9oUtGccYJKSLiq5SEyaJDr6dYxwBto78X5THgV7L6DmL1wFA6vTxd",
  "key8": "5F3yH3T6cz2wquV65gh27rrDrAkDuYcyFHSVtSLAzMkmzm9QNykYLedwRjxJpccKKL4S34s6RhRZKQSNiKiJLUNh",
  "key9": "FUkt2aZwUbd1TNWMMEQjDLzr3VPN3E9JAhEiSprzwN8tcKzekow8HfZugeABWYBgx287LtN2d9aFQHrYA9u1sCZ",
  "key10": "3PJbJBgiugPRi5A9h8Nks59fzBsHgN7m67nGx8mv8LeZGCS3sARhvVgRgQ8dQhDHBafYTA2GNPdkyJxqCEqDNDY7",
  "key11": "5uEtrhGxnFQHKTNTHmhMX6sJt8V3aoBB6iywQSW89BanB9QnyDtV5n3edsp932Lz1N3nScnBgcYpBugtz8yyEyxD",
  "key12": "2eWc82pnDVE3QgkXki1mMX3U8hYW3pwgxALgwAZ7KTHSEKYJdrFSjLTRnTid3AbnNJsTkoUeLyUh6ECydUviVBhY",
  "key13": "4ymiZPi9VgyAxfk6Rtf2AWmzFbbi8X8p8mCPk5wQMkVGrrRu6xvoJM7wxucsnYTGDgRZDyfZAmWnw4JFT9NNHDsk",
  "key14": "5MEo7ZtH5Pqe34DLEreThvQSyWoT3kJNjrfwGKbPRd4rdwELtP1x2qS2ESc9jDUvoksnqBd3uBAj84eDRbT5h5id",
  "key15": "2EcRqjwKnuM1ZbtNDFfoeSFicJ4P1P8cKWrgDaCQyVPyt5YCGLP7tntsFnJ1qBxaDKcFGk81aHh3fy5QYBEqwaXe",
  "key16": "2cT7ow9tEq4u1zvMRXSkmMk9LhktN8t6ViEa7mAqyqJvDYjwhj9ijYgYrdjdoAHKjyQFRJwcEbypMP1fi9mLgRD1",
  "key17": "5qXmaopVDCQmZrrgjzCF1bEn1rquvtgjZ1LXy8DZN6Dr5QXeN1VsZ4PhgeBDwUF4gHXrRNZTR163Lo919SeMhgym",
  "key18": "5Nj4XWZsBLxMPDw6oubLtCEC4SN2vSkyrPXJaQrR5xo49ALBUaqNSTosD4bqm6YkQKpP4abmeTGHnnEKASm8iwJN",
  "key19": "qmHY6a6NooaZp22eMXgrS4gZsdBD98V37GGngv6UZrhVNhs5xHUijZ8MHMxC8Chviqyzr1b2HiXgpwsQG6hgQuZ",
  "key20": "4hgbesrNhTHqDEwC2QdQDM7rSukyARVnFHVPdAoHB7rVLeDeBAQqLW5iPwSzmpcud47HHp8WhnfxyQtoUU27AJqE",
  "key21": "5zLwtKZLCZjrzzdQdcuPYPHAVnUjQ2wQuWVzG8bKc1DVikrc51hWxAPczaS7h4YFt4DPVmp7jTiQGQ2ihmpv7v1d",
  "key22": "3SFmNwz8p2JgiKWZdxeUzzxqc8cPKnh7hQeSNyUarN3uoEfCbiQDo7tRnFrKyokQ2UzUbT7MTehcuDcNRXqtv2Lr",
  "key23": "4ZynkLmaNhnzTGKwm9GtiGXMGTYBF2QbikyKCpUDaagvYEEzx8qZKZTaHfKhAPfzWyaVkJ8ncjg1caaDLRN84jWJ",
  "key24": "9CmAdofWc6peUc5QtEPAwryMXBNGFT6fCYnjwW9RsZ6GoeWcMvT5zrjQmATk5X3DxHgsGgNoK331LTAcqTE92gi",
  "key25": "48zRedTpWSY6GRowzs4iPYyK7FvkuANNkm3nSQPS64xCRvVQ5fyVrTzgoV8Pca5Z7oFB44JVWtQVfYfnP3bDvvve",
  "key26": "sDUbnrGbPsVHfdXQ5fEWiBZEpRkULAmsD1yr38z6fhmx11x85ySayZVKjEzDWquE1WCtK8pXfPNVxXHWxVftMGR",
  "key27": "4eV5b7MspBC3Q54ZTvvJUYuSQVXL66qwjwRN7VveWrdQMA1hVN6rVK7SbhCrD2ovvyjXaKh3vmBsuyLR1mVdHshX",
  "key28": "4NDHPMY4SgFjkSHajGKNfsrrpA6dCUkAU9hK1oZZeuAGanGh1KUguYpeUo8gNV9eAMjTrHPzLwTF7S1Aop8QdaPb",
  "key29": "5otEGsNGwkfAGyZGZLZau5wbiGLC6hwcUCiuhJNKLMqP4CDC9Dc9pgkVGhxpSpwi5CAPGg3mrnTL8rQdVtzGX4z5",
  "key30": "2dd9uv8cG9YaNkPjk1spimE84XFhPHxpAuhjj7bYJExvey1desJWhF87u3XQ5NVCTosDA1Ssgm5mJYDbEGY1d2X5",
  "key31": "337p9AQR3J59M1XE9E9vUM6igB2BUBDTv1Xd8WRXjmews5FnQrpnfD8BQDiPriQB3FWq1jGCzPdbuwV4EHhqX3eS",
  "key32": "3Vc8PAC5zR8nc4w9faMNXceFjuDD5CtrLv33tmrUK3mdmFBsVmJCUhTu1xK6RUKe7VxnYcTv1SFWkq5LxPzSzkuZ",
  "key33": "4wdJj2R3dbhmE5Jr72XxVKPMmX8AZAqzdtFSyESBQXKXcPKrZi4N6DRyChdQKoAQntiCeXA6hgcKPLJBDWababtf",
  "key34": "5CWTA11WxKc9AppUDf6zMkhaAPi6awhcgMrb9t5pjXJg91mPaJnE19h3VERqUw1tHJ2yieh3PD5d2aAyezhBoag5",
  "key35": "47AvNE9MWkrTF5C2cTie5Hf3YkuXYcuzaqtBend7wcAHHF8bHseDyyfJZ6BThEbUQgP3o9LX6WECDxjebCiBjiGo",
  "key36": "cCcFMNrrWLwrEjKk8bbM3FnSvHDiBdMddg9h5LbdBQ6cHViQwTzZ8zgTAxYx9QEkRTAvyge5Wa6mNkQCLqLuZrt",
  "key37": "3rwwqXxF75xeYY9Vb8BugG1rJtJBggcGmWXtoVvBBYH7YfMTMLVAMbivoJ1fB3qfLjGjL718xCveWZTuSWZWUzHh",
  "key38": "5A5Lze2jwPoKiUeN493zf6S4yV8sczUxWXuDf5Uui3u26DRWK5ZQpVL28up54jFj83oxdwZJWmgi6nkyFPpWTafT",
  "key39": "3g8tFB4251U1x4AzS7UdRCFhL2npNxQTecAg7Hx8pAgpX83yWG7pCWArQcqWeKzzSbzSYheGmFMCrU4fDhgYB1EY",
  "key40": "CtYPicM6gejsnqSgtnCDhfxVpoKEPAocN61ZWrW1XdncZn8v7X28rU4ghtVsQKuprdaXMxRtPCHsfyry67hDK33",
  "key41": "5Vq4HA9VFARzhPi5JYiLTKcVXT3m6LsjAsosgK1Fi4JbWVrmTQmoTA4Zuv7E6Dv9cgstwfsbiDzztJwfCqs27URX",
  "key42": "uiLaQpxWZYb9dN4sSbCJgGuBzEMmFh8MzM9KNXfFkhufAwJdR1U1KUZyzvw59FsK9UcXsFoFzsZ1wsxjvvH2vzp",
  "key43": "5wkzeitaSddUpo8pNtf87zbdqJRxNm7aKbGkEx51oteFyeR97vH3wSkddMD9TQULrn7QVLnRuypCYECNFakWdncM",
  "key44": "4EtGA2YzD5KDBD96tyTXvXGCjerxbYXhyhtUxgBZsGbvbGopAyyeJpiXGiQjWn9s7yjmsmDjiaYuuwAPBECZXa3x",
  "key45": "3Pq2yEoowiJd9hVdWm3YhqQYnXr4fP8CEidV6yvAR2rsn7YDeRDRsq7o4xDqeF94GsimQsoPiBK59UFMhDv5QGJH",
  "key46": "4RE3dHktRcHL7mbiS6T7g7sTXdHxdAdwq2F8wLX777BnFZUzRjuqYLgSefnVqKpcSAbLtiB5KFGopV9BS31hBAym",
  "key47": "3KMcXqZjZFLRjXfbhKFjvsSRgGZmKYHUoWy2oEiM7jDjGZEiQgkRRQQZGVhZkrGiT6hqqct9sH9KJGcSuDbYaUPL",
  "key48": "41E66B6GZKYGdPMdXEBxoZU5LEBXTpXJ97PB8VsTLTysxABXM9s7SB4U6aSwjNzTboJHHXDnefwUUK3w9JSAgM54"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
