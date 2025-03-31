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
    "YnTpbRE7VBzkkpxpFtaNf8q7aViCirkamFbEQq3mBfGXLaR7HDoQGrYFMg65QQVdE5ttjXwAQU4E258XTc7afW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFhpnst1LmRti6nqqQAH7tAv71uvEwMkKmZFKd22u5trxjeF2Kp4Wk5yLF1PiWXaneJpRv7m76YmuaVBSJUUU6g",
  "key1": "64kKJdWdkdEUuggnpmWMfAmttsvuuG2ceAwvBYMHhMgxdRm2nqFSqQmG1Qhnc3owK8d2e9zZNZ3Li6tHuz38FrGW",
  "key2": "3Hc86DiAVechgN6CeFKd4u2WkzyuonzZrzsK3onUBizMfxgC4h8YE7EeA69FGk88eVyJdSDCSFfgPW9gbyaN5UKM",
  "key3": "45nEK3H4SBY5zYngpQwMPdeJ5NMVgMTKt2xEN2scoWjxYjh2bXvUEvE2UFCKQfmEsCtM28MuVQepbjYnChaVrtsC",
  "key4": "zPpnyRp6o8wbi3N7GUExntUMCJtarE5gHCEz1YwEdiLsSPUVhU4qfFSmX8Rj6WDrWG5Z4wYEKuE5vFajuLLMdGr",
  "key5": "4XgfqvvChTaWZVwTw4x8nPrEaWDgdawEzpgskv91pwB6GH3hZrBf3M8nGhjMS3HLKcQLLkh2JW9VAGkCpVNdMPBL",
  "key6": "2E9nop5L6P1fGgEpR4S97iCVAU8fF6QRHUjjBbNvyFnDump8k9fxWCKd64rmRvnz69zmSRArmyFsGjudN2NczAcb",
  "key7": "3mYm3hLLcL8hwRtaRog8QGecsdVeQj8q7y37ceQBwnN3mvKh2LNZJZD76FgaigcoqhoZB6VNMNX1gvhuSd8jn74R",
  "key8": "2WT2hRuQRRrsEbBT2vTynezybLRPgGdpPQ49AwkdEgg8jRUkQvNVMCDGzQKyzKsbkddNUia6GS1QhWrFr261XrgU",
  "key9": "5ruVPrK65LmULDsW1vJfdVmLRvX46Nre2VsqZ4rLUJgJ2MMxGsr5rfXpkFgbcAYrcubTipLASuUdyN1psXAoQqSA",
  "key10": "bF51EqwaqAqXZ4kqM7pGAqFNJLfvyaH7gMvy6H2FNVEJ7AxzvXEzaDJJASr2oBoPKEZECDhZ3LvjqAjvQkM8Fge",
  "key11": "5pZX8vGCq4snSfVoxc1mV6Gi94v1oktmWYzC9sZVcAhvNVwwSG35nDBvoiHmjKADi9wWmyD7WkHnF8tQE8DAECeu",
  "key12": "59fEcKYdLN8AvR3XwTTyPHNwwr89q4aGUgcWxME9t71W8hKyaUkiSz3tzmQpxau4pGY5W7jv9KtXBbMvX5AxqiXs",
  "key13": "4knNsQJTSQjWRUhg1p62zi5fEcCBezc1TNLsn3G3HTsHkuZAQWEGF1aSTmswwAjQRJjSKtZVaQiYc6ryvW7sYmVD",
  "key14": "5zdWmD1zEdLozi9BaWDFfo8pPcJvDJ2C7QbEyuVzp924TCe3PsDpAxqnCpB52Dpzfa6CvKdSGsxzsgraYCkjwJyr",
  "key15": "4GzXEXGQHJqQzCG1mnRZNqXXPgkDzotS2cAeAnh2zq5f2pRXzbwtjqxeANXJ8i13zbLtSu3CDYCXbzTzCnhuwmwZ",
  "key16": "5ZwAgykqB5gjiAGgS3pP2NcV8FpNLvoaGkJCM9iaL31gu4QAy9ZQUgu8NR6zU4sPRsPSqprUWEFnP1qfgGFGFKik",
  "key17": "4Le18pdRMKQYPfYBqyLjm4U3kP57cqywDXxV9SGCqjVhQdor6jA9KG7qqiyd5nVhpeYe7UyHUZVFrkLkeEx2xpBs",
  "key18": "3M36HSnfpxKf6PrG6NRvCrTwGGPe1ur1FDuqvDaBBjt5ebsjV4U7KbnrJVQ7iPgfuB3mZmMiLR1Egc4a86ZHvmSr",
  "key19": "4KRLpzNbQdSqqsqaVFichMuWCZvH9CKPxJcZmP5Ld4FEqU5GpU7iNhxPDDQb3459j9Etde6VNrw3GrZCZtKiawgk",
  "key20": "4gixdew73XsoixVMrkCYTfC1oiZxKPkZg4i9bXpodZpEb32kHr1c7E8uxduFg5vaGsCqi2VAp4kuoFJZSg48tdCR",
  "key21": "3Uj76XMeH8GUGMGPKuneLge9nyiDteBgH8N4bhBbVaw55HUX9XQUcdrNmj8Jp55F5ht26UGj3ehYVQpLHc2EL2PC",
  "key22": "4v4JKEmNPPo4vPo3D3oRNrVQ47Co7AUsqbakfqTjCkxxEuMjLfonnWPdB5yowfzhPDDgqaFz3X1VT63Ns24zqPLu",
  "key23": "5zD8jFV41dQeDUZkxRMEZJD73ZkyriLojAPLw5qZ3zf2NpkZJX4kKidtWdvbsAguSACvRG4LQwJEdsE34hFbszwf",
  "key24": "2Cu9UMrPvPJ35qcBJtDhouHKNJJjSkqwbsL3ad7gWtDWLUz2wNng7ayRTw32uBPUgdGNqT2VFb2ooS6ejremLPb2",
  "key25": "56A27ezasZ1jjbrnXs7uDXERqYscsaWQMxj1EGpVap5LJUBWGveFiqF1iEmPGjPcv3ehyDtVSYH1GCbad4AEYRrx",
  "key26": "3TqoETm3SFrew55YA1cZUhrJNkuSBxDnatjLDqxY4yQHGAnEvbPnTcXiaBSTvfgkDB2Fzg6EeRXWx8qDLNCxY6kc",
  "key27": "4EsRSB4Pr9V8gFLeNNGcCFidyXXZFwXALfTGeGGpxYnAFxKdEvkZ5uZxuQG8K3eMhvm8gzRkfUx6bsy8DHrC9CWn",
  "key28": "5qgMzGWrGTXTXf7hVu2c6j6VzrPUJX63aaUG9MtL17ZQn2yeSaKWr7nZSM6WWgg5GnNUi6mHV8X3bMupJMJso75C",
  "key29": "2hL6Wfb6qQXCY4fj5SAAS8yJsEB8h1iMabAECqGG4zLMZgajH3trkCYUAQWd2siMFmfSaeYi4gZB9EGzgiPeXVq7",
  "key30": "5M49fU5keG2eyrZkmRTdoDJ247RABi2V4SRAt15FAPuUQrCjVqLVoRfndqLiNg7Y9N68LJ1PYLoFvUcvwCBM1ing",
  "key31": "4jWn49WtSxaD6eCzfL54hv6UWfiSR1HTPuS9yd7rEtQQZ5szgiQWRW4U3KnM9Qg9C4C9UF789sfCmuRDL19U3v4v",
  "key32": "2Zpw52eG2oa8iQrFf7HNWkxPDvDPkZ2BCvGNhPHfmJ3gSgsmy1t1eDBmxcz9gzEqddW5mfdEVUsQN9Wdvmw65qtY",
  "key33": "2JjRmMEHns8rv15U1e1ygNPEtcrFFCzDL9iHVo155h85zJcDyVZYcBc3PXvvj3rF9SFESxtPgV4392kCAV8GaAb5",
  "key34": "2YvQ9b97KeCS13HELXQaZXDaMsp8VEhZ1frwpiGK89qh98AC95kPN4oB1nxG6kPbq8WxHJ9jMHL7GXpxpqi9YUDS",
  "key35": "wtubw2ALyyVXzFXyTfA8LS7o3umEUfjZfBjNwUU1U1GALJK8LM1xkqGdy26fj1Zrtmbrna9gg4m2ijSx8SLvtSz",
  "key36": "4my97UrgAyKsKmucZqyNWVFmeWjj2NoWNLCQSvPzEYgtE19utVmmzEMfRf4bHhFg5y1Zw2DLGi11ruQ3gQ8p79Bj",
  "key37": "21ZNv41BuPThjYu8wcTsWYMQZaLn1gFJZ13uvav3Nb5CeyHGbs9DuMGLgdn3H6VUVLnEA4qv2n7ehvvRKRQ1wrpC",
  "key38": "67CAn5Fo5XqDXoqMQXq6QeLujmvHmPJggJBiQ1UL3fMqC7JiHCs6GNf5UGV1YPjujcZ2koniRwCeGQv2kMChosey",
  "key39": "3uCqiRucFUmnvpgnb3mVJgJpxtQU4f22yZ7UpQhuNScd2y736UaV3PgrCPJHGWBaCFZpMa7Ar98jrPSrZhntscZs",
  "key40": "2aVYr4DiQ3Ewj8SXj3UzTWsNgTLMmntH8i9tu76VgwtjWdrPBgWtaBKKV4w6vpxQSiRxZ3imsd3M84mrt9MaRVjb",
  "key41": "xTWQAHEgB4U1g3SSrKWxPxQpXDrMsDqyRg8ABqd4pc8kAikbqtAG8YsJxz5dr37ou9cHrppWi1n17A6eZFcM9me"
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
