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
    "2V1JgLVNUFkxgoxyr1ztKaA4pVgn7Z5CeB7mrBAwHuSmXnSBBgihPAPW9dcA4kAKREuJ3iCD3UZvpBUByPQYFUA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T6tNNaW1v7EGhrSzRNhe8FqN7qgkoN284pDUJeqAToacSx9ppKfpPV5ApHUTQeSsF8JVsWjYLY9NXD94BXm2h5E",
  "key1": "2hSKqxzNhSRjtrtbbArp5A6jgcXgNd7bYJD1rNP8a8QWjbxd1y3DnvBQ4CUvznYtFWAcLz7ka42bKcWqmE9zH5Zt",
  "key2": "7UPLVNfycVvYPfksPPub2bJKkdU9K1rKSEuAxFfhucBuG74AxT71iZqdXFTRvpmRhiFjGrb92y9DkZQeU6Ritfx",
  "key3": "5cQ5MVVwWVDoeS2y87N5mK7fjQQRTgwUQ6eJsknfDL4AiacysXMw4pmKoBxUD9SkUDfsXoBJSpPpBBhKFD3djZnY",
  "key4": "4mzCi468s2PTDeEccgp3tqpHEsVsKNuNx3jriFVZsYN9S2uHjatjzx8AnqCi26KvJzUTFWzPVwPVpyTFZiaqfBgS",
  "key5": "5CDNYi9zj89GcMK57YjTTCjdKqFpFfL1BmcWheNGNXy3Z7kJxqNJL3YBbrpQG42DTCpYHQESWs8rZMUCa15v831M",
  "key6": "58ghPRTGgYcz9SeBy88fq25AcJmPTapu35RZYoe97gr954jpkKAePUqj9niowe95qDqUa2tB61WDbsTuY2TLKyKn",
  "key7": "4siKcxxuj73DPS9fhJbH4aQcWix96u31VLDinHU8AVRhitBHp2gnLxk7K8myN45b5aKhPac4Q3jwRuLa5j2jnGz1",
  "key8": "64DMqJUhawuUY9VXBuYNaKJobNUsqLymNQYiPGNYajsYg1X49Qay5UtCp3Zv3gmNQ4bicVowkGPUZb6yE1viqBij",
  "key9": "TWAr4TyXGNQejRvAysSS7E2fq8VRt2HRcTAiUNhBgCKxPrcA5DLSNyGkKBhNjMGGS24x2A4v5x52KgKistMivKb",
  "key10": "CwNY8EwPyDLZePkDv8iM6CwYHPUNxChtffuigM3y2UMtPNahmBLr6kUaBh9u3WzrGu8PrWGbWQhSXqsKHthVEn2",
  "key11": "4xwH1fY28XGWBotMutwYtNTFCVHzDTLjeqBMoTKij5Gb3LSM5pLCL4TkABiBpkkmGzMYCHgM27BiXtbN39sGk3MV",
  "key12": "4KAa3oKtRr1XkgwuJGaLmF6hPNVXjPDTkZGtb7oXJPgcCB9HJSfdsUvbDGJZBwiwKEXb5j2JJkg6nwhNBhPdoFjc",
  "key13": "4NGmX2nJAQKvBvZFSgio4rUn8Lwz1tqKysJuzo3TQ66GBpvFSVrwfWXLPQZEjXES6ZQuM2sCqgYDgmRokmj2AoQg",
  "key14": "2DnYp8CMf62y1uAHCrXeVei9tAsSv6N8osNNzSwXoJ7JY4kHaULK5JwsWBW4QhL3Bdngjn7KC2igF9rKR6eYUY16",
  "key15": "43gFZF4A8ovWmRRCCpahky3HZe7v3zF3zmWstAp3HQ57igUDm3VJa42dEYaQ6aG2zGYwaxVYC7pHQ4XvpwcnvcHy",
  "key16": "29RC4Lt2paTE66jcwd3DSmZgo82DcSs2HThfjLJSvk6LSVEbPinosoLiNaLNnNjS5SuT57BHhavszaBwBEVXiTWX",
  "key17": "5kCkHBwyUfBqosUREpC72R5o84dpCrhShjKYDuop2k51hQTRfSbke5drLzzc4wXPKGWbBGWcQgzsWGMah2goBPWL",
  "key18": "5VKn2uKiMWBjz55nvP333mGxS3AfJ4obHs5EmG9Locdt2SvpTAitYCPHP9n6nyA93oDojabhgEs8GTMftNNy57oM",
  "key19": "5hWtMwjnQszPWB1AjjydjzGXJbSvZ1kKwNrScTnVgLW6AwxMUJjdgsJSwH9yB5yUM2HWNdTWR241DaSaz1SKSy5T",
  "key20": "3rD51qM1FsfdsZv6EqpLpaApsCrWNtxh3rsN3fDcaPeeK4nk8yJxJHWYi6JBdSjjktfipyiRQ6M9rXi1xDhFSUjs",
  "key21": "4otZfqvJ2CGUpd1fWBwXTTYSVqqkQyFSTL25FAK17h7ZMxbLY92GDPX9xXF9hiVAo6ffaQFhgkTNwv7iBJiBNcyJ",
  "key22": "3sRn5LwTgsRvU4gyEZjY8ppTMU99vqCuMzvmiPuex8YtoHszNdyCRpcd6a24dhS3hP3dDJjtfD9eEWMRXVpe5iQz",
  "key23": "4DdpmKCWKQftsJZ5hwJjooDaeiMydn4sZUPN6xxs7DMbhqx8fJGPBs3kzZz4SLso5Tp5NpYG45Am3Kamat77fJu8",
  "key24": "4Vs8fXLiSJFZJjViUuVh7TJdpARVKrnrRMRZtApWj2LdsVcpvSuZriF6Y95NCCguKWkcZaHn6iSMPG5LvGkCxKwH",
  "key25": "ez37fiSFdBzpnSAc3Z9iq6wAW46aCGcLASpfVN2nP1n6Yk51McXTBoHYCfrUt9AqMDzJ3YnUA5SC5SksknP6BRG",
  "key26": "5y57j3P5dg44QsX1oXktjoyDgRU4x3mLb6ehYdA4JpPFn2unB1CttY9ih9LMcYSRcwwz3q3k7yzMbYT9e7hB1pyY",
  "key27": "5E7DuaEd9auHutRWTRrvMq17Lihq1873GoJMpDQWF8x9LxDpHSX1g13GSb47kXpN2efvCZEDB1X5AykTpkMZicc8",
  "key28": "2hgk3tmP6MFRtQVTJYCkGbBgPJ28A4KNqP8XmuMUJabtVa475n7sLfkH73aHkcXy48N9uqKTsCRRyjduYnWWiCEa",
  "key29": "CaPCFHvM4pDJ2DcwWdZkvXDU1P9yA48FnHfqsqZzZQ5vstefjHmxtbbDPBdQapXh6hKNdgyjkEe6tgYaFYvYH28",
  "key30": "4nXAcxzLhh9AX7qdBe9Bg3bV4Af9UyMvkQjaHMHU6WkhfHbr6ro6SgWcVEvXroFRg4rsvFEqDh4jJyTRPXp9JN2T",
  "key31": "55tTbTBShpahg6iU3EZiNgAUCwDE9neHdSMtQLQJk9otoWCVDadP8eHTcWPtDmP1NCxeyn5nPVkm4ELpdDYESwTZ",
  "key32": "4owWWWrdjdPRwnswaCG4hupZ1oWtJ5AagN5ABBT7Q4aZ8bdi26NbdPcVJ4VBVDEStKSpy4tY1hb4f2QoDWRNATmZ",
  "key33": "4zBo9ezdh2cvrt8Y2XpaE3jQ3pPRi15oE1rVq4f6pZQxEWuXvMadpC2oQRBHcV8YcpMH9nZWPTjmgSV9asg32sJe",
  "key34": "2fAHH14quvMfC2VHJTZDr76HtFc1KeaeA3hJ3BeRicferNw1yuDeobienNQBw1LMhiwRFy3xNvdZFPr27xyocoyQ"
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
