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
    "67gNk2XsftSv7QUCsmTkPqW1rS4C1bXYCTCErArE4tFSLscCEf4RBtGeStLWq4vUUHVRhfkqbmcreDWALEnfLcR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y2PunzrV5sZ4jxujHDhhLQNQMNngekqJ5vNiEpsyU1Mv917eqCPrn4ByVpbdvtGNd9RE9fcasm5HAZY8F8UcWyU",
  "key1": "27YU8Bvs9tLFHbnKkF9dE52iRFX3cVqtsMW8XnULcNnara2YhCa2gg27T4BpMcZo5Qouqy1XVR1eZLfqcxTLgyLi",
  "key2": "33XnZgHFc2ZKvwkREQaJBrqcKkfyBjohNYDsDhW42gkU4fEHrtaKcac233eT1hS1cTBhy3M8x2bsDjPvCEnmpVcN",
  "key3": "5cPCY9HHn4ECfkd4PRAsmJePMAJ6x8c3vj3FgVRaejMBYDPrXvRMEpncdmVbVeBym55HQVVbqELdsTsJXwESgm7X",
  "key4": "2DdGJymogGeZiXFD1NwHdsDhtgQrxTXZM2aTCr73RyXMzUbbewbVBxVmV7sfeUG4KHjrTW4cxMS1hjXDyLWDTmeb",
  "key5": "3Tyf2HEmNywq97aAw6n9MibqwBEyLTcLvA6AB87AKyjuHr14GUd7keULeootfpomb5UENW7dyuUz664U9dCdDsF",
  "key6": "5Y6WGZtpkJhHKMTcotEK1Qhw7sAHJdYPnAM6ASnRZ2Viyz1v6F3Ke5HnDhe6H2gdFtVVWr2xZiJhWh354M23X55H",
  "key7": "21UQHnP6mgEvpwiTFQaEBQf3Encx3Jjz5A7FXkTWdCx7mBjfC6H5t8ebfZsodieWsP5o8GsGi1UaYZaR2oji6qg8",
  "key8": "5YDftBnjFdd7vAq7j7i3drGPDa6tD2ajg98iYLHDSHMYFfo1YDrHp6z1fvAE1iChbVLK9DmvzCuehb1A5ynHjuJs",
  "key9": "3sjh9mp68YwZb2scPWJVn4WQYUX5gC2uzTKFG62RWvAU334kVwpDvhUNcLwuK9Lka7fFCmC1HjqvZ4Jpuua1sUyJ",
  "key10": "nwLeR8bQU7RzibgCsHqFQvsCRPp9GQWU2sKPjBoJvMk5TqwrrmJQExwxENRi4humrCz7XMVjhwdJpac9J5HNuxy",
  "key11": "2sQtJwAxJRQN389Swh9vYGCYPN4EXHR3RPbu3nDtfbRVqHPEee6MV8CFsKQJMFCCpP3bSSJL8ugXWvDfQfLw83A5",
  "key12": "45KjC622CPWrNyXkF97CA7FAHa45yW2MgC3btr3tbJLHLALWYCNwzfUZnvdhtn52eHixXZR1UMDoJ6xY8DX66VTo",
  "key13": "3v9cmwbkvPER14uf6Get4yoQML6zPCbxmFmuuVMPugDU245VMoqcx7gVvo8qVdkDQN45HijbNwzHV3AqnYLu7MDD",
  "key14": "E33F8fYN4JEFt4UA5FWALoSDJmApdn4JrdtxXe9FvGJjYGLS8WzJTP2F68EgVpCAon3tB4DfTv7qxf4TzrSN9RU",
  "key15": "cA5rEFPenyVS7bx9yK8WJwd7RKC6NxUScNYBHwhhj866BUYDFM8PJwy87J7RXHH4PaPU9fq2fLo6XjxPtgV5BS4",
  "key16": "5f32yiqba5phff96CQvVgMWZ1otbCjKczdbaGf3XNxQxgoWgtJQnfa4jtpt9GgpsLSeVXX2w6Y1f57QExNMZ7eJS",
  "key17": "2fFb8W7HQZwdrGvbWzV2FXo9uriDyWKypbHwdREzsPfuSAKVcwbGkja49UNHnHcGs7L1boa7w9PDGoCVpnQuMiHS",
  "key18": "4STnX2MsC6VRZC8FiHcsJ6M48jxJwKjLCKno1kCH4mZKxH3Gk1eAi2o2Ct77D4N9UveyBANHDRo5S5doVivvFpty",
  "key19": "4EmC3pJPZ7TdVQD8zFLndTnAgmxVEQyXUiUbqqtdPEjHxhxHSo8ujQjxgpyeS3LPYkY6efZo8nwjNbFLX6aQRNbP",
  "key20": "2jedSTmAyXcVCaD7Fe9PndeghWAapwbe6Yo11A5KsE3CUBLajysXFfYk3Ud9hyohPrSztxQxy7A1WgTy3dzrjkJ5",
  "key21": "ceZHG184YiLCeFQahfdonhFq1oihV7MsDUkPwKmc9eHqcUAvxskVMUHRnu9D8dUM5Kqkf6R7aUqMUzeDZBmkZ32",
  "key22": "3DkaZY6dGz9ahULktGmRDKBDLRa6WdPXhv5B4m9CybYeXYE4DYFC4N9KDmDbvYTbiSkFZqq84jDXQGemATttjne1",
  "key23": "5PqybQsmxoDFY7JwZVQbRKTbqExBaq2oRryEwHuCJzacWpWthnasEZMEqj2bws83n6RoZ3qPQjXoVAkvM3aBAUP3",
  "key24": "5hmV2P52UzRtFf5qDVBx67wT2N19KLVndWvHsYFJBcnCWKgVyE2CPFomA4cArZNEkFKEjgD1zKUcQ4CcfevsgtiT",
  "key25": "3fhNquLupTiVzQZkfjry26eLtdrikTgV9sv1uoWop9nqDcqJ1fLu2gT4rHVXjub8MiZc96UYm4PguAkbmjVtE8oP",
  "key26": "zM1XzBDe4DMUJy1pdEFpZjishFwRf9ujNZcBpeCtVXuWiZka1BtTbGJhe7Kd6Aht3x33n5hMwJG1vUTmqZDZQMb",
  "key27": "4eomipWochRnE4M9SwqFhqnnUPTJUxPt6g6oS4xEQZRABTqD5BFwp3TohnEg5uiBnaUaz59SFbJeGbFFvk6ajDvU",
  "key28": "4Q4naC7EcDi6wmtriwugZBwQg54u8cyYVDjSjoRPsQMe3EMCj5ETzBqvQpGwsmcNCBBWCqrDtYQDGY7ymr89cHXJ",
  "key29": "4bVT5Z3iPsHR2EtBfhxcTiugLcZJncAwPaS2mww6xCZYxxLWr3TTxYcBETcoMrdubezStWZo8xEBMGJ46QvkYH1K",
  "key30": "57U6qpejf9BxTyP2qttVpzP36z3cebhjDuXqzdMZQHee5qCCyNShaeeRzmhzco8PSfWjfLowRY94uAH3mVdNBZVK",
  "key31": "2m1LnKP8XfbVqKr9tFnux1VaWYBUsRnTVTwYRvBnYevmGfhencGyGyuq1xd1cu6DgH6vpRLKR2t6WwmUUYaiom5v",
  "key32": "3JJCY2hJYTejAz7KLM1bUvUoisr3j2xmbv46heFNTpxHz9MWvWVVWrRtLYiq6Jc4BUHndUK5JUKbCzZDRJ6wyh9X",
  "key33": "4ThLVfYrzH3amvpcnKBsV2b3NhrXtV5HbD3S2QdNGCLTvxXSwLHHjoDYe7zrAR6NDPx3KEZRARUPYJ5J46zgv1iD",
  "key34": "4z3vL5PwmTLGvLkN9AQHLmYAfGzHjX3Sid4oSPz3sARgKpynd1XmmKvdGZou1y4WnzQABrSEcwFHtUPPBXz2SoBz",
  "key35": "gEDXQ9nLMdsy81hpmF9J4H3H52ofAT3SEYM5TDg4DE56vgSYexRugpfDPrp6ef9dKeeHqaSDkkCABHSFcoow9ej",
  "key36": "kjQVcGhsbwTWrs4HbBnCbJ1tf8yivJKLsgpFAdXsFaJoLK6mVoMoiHsAv5qYpahDtFCpBYnK6gBvBgvEtYmCcTe",
  "key37": "GsSRpqzdiywKFGwoacR2cPFSg5ycjbKg86RDpbi3msTPsYU9aUKYeiWJFLYUwuxnMQixCfUxu4c95SS5cPU7Nid",
  "key38": "4vzuEEjMwwLn1BRzyRpMnmejqomWv3Z8s7ER5Dsu9sS12Zx7S2MGi5d2zwKsWihz1xfUjsQBrY5LV1v49c7m3vyb",
  "key39": "58NQYCXwVguCe8feq1ehmvXPmsGB1w3meL9mX91ykGTqncb1Dftwv4MZSQhbKFuhWzUy4bmStBJyDFjqyt47zNeS",
  "key40": "KouFThxDmQ21KbwcpCQDwW2NDMceFSFWtbayFhUBb3yAChB7LdHxLpkiWSuonWabF1cSKTAcrehnJ5HrW6W2VH8",
  "key41": "4JZdbXFUEyPv9Zcwj3hbsriaaNpw4Sdqhex1SnZ3Ei1wqjR4Be25BXCQC3873WeruwetCL5j6Juszd9gw7SUvC3s",
  "key42": "4MmcgbySbcp7r7kn4oX5H5W1diZTkrRmasYRGrTgxitKFUgSpAF2tFxpWotqJ1YecEmAKPMGBMEoKSHqnMUKHzuF",
  "key43": "agyydw3Dz5v4DLeuFNo1iR7inHMZMxSjBQPLHhoH2Y3zCsDASQts1skTboSSxCv1Q1jxKuCn6TFfKdaE87C4fYq",
  "key44": "5sPwezpxtht5jN3ZvypmeSR3aeUNG37U9EVCRghmziSvELDqxnzbsxiHPeD9Cmz2NMVtL1bKYVGJ2j8ALhTkbMgA",
  "key45": "obNLphkFaNyWHwyQKFrzP2wmW3wqT14dhksmZnghoxCaBVBtimvmH2NwigeTwPsQZdSoEZ2kbNDPeqbmRXSc4Yj",
  "key46": "26mDVqrs8JAkL767osXzGWzJQy1aq8LEmwNu2415xFJFFzGZUs1RGQYehZLaJXLcBLxMzYqnj2pKVJMjr8tiiMBC",
  "key47": "5dBEtTAdd32RoApZskeprPjazqVupVVi4oHDGfaZ5gwcmkMFgHU43HFbXdnQH367gqbLGGYy8gYzTxwqTYF9Cw5a",
  "key48": "4jWvqiKecUeiRA2cfuc7JtBvU4EdHqT3dazze57eb7xZtekesN24fHvegiwvk1QxG1FcGc88kuvsVAe142onPyGd",
  "key49": "3aTHr3pEEPVqdEV4nV7cXEhmoWVLDYCD89tDtu9pBYuHa55d26j5aD8da5s5q7hpGXEXuWJ8mF2ZcZz9G4zTakG5"
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
