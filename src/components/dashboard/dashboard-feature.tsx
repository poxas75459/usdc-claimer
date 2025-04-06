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
    "wEpYPSPK6mdXtJsWKHbzHBmSLVSUnULksjQNTBpznjDh5BKYRKPXhFqXDvA8yoV1JiUQpcVVRydXxH3H2x8Qcfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w2SZ1FBKmFtnBY3ZPyfpWdk2V7cqvL2vyjWaK3DwvCJB5qNkatTjBd1KrBowPHLJ4zRcLMkM4p9ShZFpRSePg7E",
  "key1": "5E4ieTz59QD4nkCGvMMbBPM3wYcBS8bh2A2PZrgHVQmLGgY4aWezsEYop33YroFr3tmUo3cBd9aCjTcMfRBTGoha",
  "key2": "kTqnShGSmTEANdtt9ms3iGLRrw48sdoHQUNJRHzkHKZA5FG8EDwzdsh2MPqAs737yaNdmGgSyLnJ5gLnx5grzuw",
  "key3": "5goXZmuJtZNpPQWAp2ywVR4ubSTLvVdNWVMX5KtzMQLmK3bpnF513S9AhdokpeMPNvh1U8hkkFjHDWyVimdBkQTg",
  "key4": "4nf5cgPgEBL3YQLTFhmJyePa4gympaH29bsA5CyFCBeSKXWbotVK8skEdUG2V6Tw52hNMgYtCBoQeGqK8a9AoFN5",
  "key5": "587EWN615EKnUeACXBia15B4BrxtQnaKv8J4iUiSFkJYXMQGJYFdjC5BgSKi2yM6jT7YMYjZajkFzPvTvVbgv1gE",
  "key6": "4z5JqtrBMrcXtnSZEbJ6HXB8ZQYbPxC2rFoa59NEXBX32Y72abDQEbKhqnxvSW88uM54cp2sd1V7dBCwYMMpJB5y",
  "key7": "5Spybz7hn4qeFkGWVDHUrSikUsk9VPQmRnnpmNVfSn6PNZphexnABj5mh7Z1HPTDLoGpZ9Smh7eVXRzbJNNfbLp4",
  "key8": "2HsYuC89YYyCMtpayhT1DXVLcEvxSJp1Cvi9BCNEJX14sUP9mbVkjz7UwXEbasULRzaaJJ1eMtZm3CeiH4mrCGTd",
  "key9": "5whoTeSrTeusPSbNghYWADQDG7mnmDQDCWuzw5nGqzeL3iohSrsWBx2X6tbtLSfmid7W9n1aAsJxPFpAGgnkV4E1",
  "key10": "21vFNeRk8qovzBNyC5vnZky4SeiQrcpnbr8CMggbDAcbhobX6thyj7523oAq6JpybUzxzPBQRqNgdzUVC4g8A8h5",
  "key11": "3A84YYY61vvV2nYekeAtuMGwhR7wGsRc3AJX5aDqnnpFEWox9CjGSLWjmA657mrZnbX9Df47BkXVG8C4j1n56Jfa",
  "key12": "3vwgqVRQsTcyfPpFpZAe4zfDpSoXpL6GyGVXPq6676WH7s77n2Tgag2PqFiRCLY9ThobrENNTy3G7PTjYutFN69j",
  "key13": "5kfXQdxJwSD1bZmhnRud1cf6MLgVrwPsPi9WXT5pjCdxdBvRxaumwg7Eqxrd1im3mj9SUKk4HNWwVv35Zn4Wu7L1",
  "key14": "ghtDYkvX7PSGA1zH3ZAgHaYLmTZEdVGP4BEj2z3gLhj4xhnQXqPmdijoxziFjZJaWFFt377GeBnRo3QxxoC9NcP",
  "key15": "3i5YyYvtaMMXeUvLgqbYoXgdmmWGzRPSufzc6BdVddRUDeFsWCKwfjJygg3TxKGjXqzqkAdePpMgc4X9xPFwzg9u",
  "key16": "AGiaJGCR5Mj3GUahMN7JGjJhDyMnomfw4Dwsp4sAUmj3MfVn8rsHDynA5vpuXZcKLm9kSva45LuCMNFcTEJYt1J",
  "key17": "2JMHLVbiARCTe6dPwS2rDKFM7AXW1HqGmjW1B9dpfM3MhWEHYobVWWdA1yKNLM4RyEGzkj8eWeeVmzsjW77CtHLa",
  "key18": "CfMLJztvbPfjo46ySCJ6mj4fWY6VpQArfEQeyY545JqdeVx8PYAw9TKvMAftZi9arxbWuXxNRVpz5W4osZTLQZT",
  "key19": "5T9QrQ7ZvM295WcmttrcFPCHvqAcqyEB5j1cmWAiDDUdu1C8N7v7SQtUu4hME6m3y6r5KRCwBDEMdSeaBkXzSUsj",
  "key20": "2iUWJgAsxe7mrnZknxebs38RvzmZi9h2MWWUkVN42zXUeGHJy2nX8cUHQuSTV99J7VDR79JnECgiGwjefZWMDHU3",
  "key21": "VRoWQUjdU7D3gbGW52xTcM73LF9QkkQrvWEPDx2s3C6QH662GvPG5eyxjxJxH7HKWUnoxAmwj8MzC1s3UGr2Uno",
  "key22": "5i3y5havhnQNKnjmbRcQAPyEcArMM7gT2RSq8B4yeZ3nfWnsUpxZo3Proq6ygsawgvPK4ZCUy14iBxZCTsa5DR68",
  "key23": "66dCHUUdgGhr8exowwXkSwerxoWzKieJJwrsZxnnR1c6pCbwjYE4HGLhnesQLzViKhAD9ooqsprr75R5SW741xAv",
  "key24": "3jB7uXYe9dm26Ht8uJsBDp9cjUrKUTBWrohC87ioGwb3Fq5xQyNV8BRt1JgzURP5Fbmm9sqEyT8UYwWuqsuyevX5",
  "key25": "5yQgi9ummNGQiH1bQauqt2EbsjaGA7g6uzAurnrxGmFhefASFJ31Mpdr5TdoHjfpbjpUu5bNPkxbahYDt2ndQ9WR",
  "key26": "679gRtKEqniysJQHmsmwx9SM6Ybnh9WvxkAYTHQawZUcDQu8Pr8CnJy3aEPQnUrjqfqZD9rP8sqtySmM4XppcW7h",
  "key27": "2ZijEF5YoPmx1x2GXcGJFVEwkmr3ApfoWHtHUWvE9G1Hymro6QtxZ9yD9TYMFaw5FzsMLdPdthidi7wUNz3LVuxv",
  "key28": "3Q2moHo74N6ryH8KqwSgfG7EZYKcJoBS5CKNdxSuTs33yghcdWvgx27grLt98T411K7LDyESUF7BudzyufQh28SF",
  "key29": "m6hiZ4God6RCMZtMx4TJDDdS35M4G3UzaAD8rLTRLE4XWWKuUsD6LeFkncWJqCyxUxKeqBiP5opzbAYHm1eTggq",
  "key30": "3d82sKLoKnhnBH1RkumboEHGwC7L2M6RQ6jBvzhXzLZEGAjn2K8obgD4SN1DBGDtZVNHRnq9JZjdz525qBe68xjg",
  "key31": "36FojtAjqxwpoL6pkUorsMh78FnvjBQsLKsDzJh8k9fQfGgYrR4g3sZDtWNz3oMD5xNMWiaZXAtVCGaREdRgJYQC",
  "key32": "5x5MmexpDWgKFxLrLGRELpHQ7sbFBrvb3mnGr3mAZ9sgM2VfcgFgNQSozy857c2iP1PmKrQUwKqKxistPB9szirk",
  "key33": "52bD3YWJnNbED8Ynryacfe6duh3GXdvr6pgPjCjck3mM7JfDcwkz1unoijWTYuDrKpYuZnNv6NJZeyzbMpQZRQQG"
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
