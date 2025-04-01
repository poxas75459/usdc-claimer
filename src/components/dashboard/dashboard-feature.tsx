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
    "4LbC6TEqbZfUsYNh8ksbKk5u6PS29x96FD2FAEJdrNK3at3eV9sqmAZ8ndE5UVM29291yUNdLBXLmfkrr2m2JHAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ujX1ARcN7DxAjuqnYt41xybyd9rXNQdZHTVMyUpwwpdgoQN6cqWRBZTMXKzHADefPt8mVNvDowDPtsruFyTJmKW",
  "key1": "3DASEZETso3mty3ubwurGginZcbqUHBFkY5xDFdU8RRJaWpEFhtEtURg7KHiGfQeQPD4kykcxjjj2HbwWQ9Wdpto",
  "key2": "o8wKWsLK6JL6GkWmk5qQK7EWVGPRZ795dho4p5NUEMpFDqWPKmtyVALchyH6m7VJkyUfEQJQUfCVAuJwfQicKe4",
  "key3": "2DLVn6njoP9BAY5kFCRuomu85UqMavNNp1WyF4APudcaav4BquXjgj1mpvncfJxzo33RKRY94HPTKzJJ9bLsKmxg",
  "key4": "U9b9H8jpEfswucL4HYLUZDAWoiCe2swCYrbbQvUJdirJj7mLVod6NGdqZ5PCjz5GtZJbgAjcgwnCcQLtoZyaSxG",
  "key5": "LbwWSoHc2Avwg4orsw5BgFAimLHrKHzBQ7CT1u2F31U5ZJU3zV5rqhenBYbvq7d5qiVg49nJzHrrVXVAL1DUAe6",
  "key6": "4wNmdV78trZCHZY1YLMD4J3zg42u6xX6NL39TJruDMRcVxGzqYyqJt1pKFGJ8P3HDedCd2yXp3eV2tTjSh4fhx5P",
  "key7": "4w3zGuVpy6Z21TsG3wzmj6jPCjp8z4NZ895W2gRUXqhttBzcndfE7a4oN6ccydDgapwGcBH8tzhCr8gmbzzj5yC4",
  "key8": "5AGsjJBiVMtk7ngE5B5LZGySgaXZFuWBaxN38TJEnUwvRaCCsEvUCr338NZRGBC7MRwmnFnNnczP54M98nvtiYsS",
  "key9": "3FKnFoJU42Q28RuYZTx1SNjKLqryqWR4GpHnneWWeHeSuavJKEYY3HuQMo54UrFWo34GZJJQDRS5bbnCTsmXkNg8",
  "key10": "4Nf1cgC8fiywEPxzUaKU6dAPmuzDhGCAsT4veFD7S3uVDrPvNq8ma5adUvZLi7waNJA4ymbXFiGBQeQkTS3fQG6w",
  "key11": "5rMv5wFTN9xDYMgQJRe4EBYSCMs7sEG5T8RXepA3TUGAsQNvm3wBkbZ9A1iJh3ju6vcS7uSU6jAp22VjjkBoU1zb",
  "key12": "4P9xvZBhsDuyn5fRrzjk2QmmyYEoAf3KXSXDoU2SeBUCS23qCgWw17Syku1DYrHFkFmak3YL2vhkPxQhdKKhtpt1",
  "key13": "Tb59burwEB5UHCa8AmH4e8f32SecFF53c36kEERYpNdkbUH6fmajuf2TjxQjabGrFbBuoi7R15WVz8oLV2XH47G",
  "key14": "5rsGHHQAYH1Qhwt7UqY6kar1rrG9octfMnhqq1MhTcKpyVeUYtJP4ZhRxk2AaJQDqn3uDHTa6MKEZrsnX98E5FkU",
  "key15": "Mmo7anWfSrfPZRDgSpidRaAr3GL3TuciYHDdccq2iivCpdEhHAMWGSsimWjHvRSRTeXbmTX5fppH9wcb1XhxSzi",
  "key16": "5GhBsBqURENGG5ay93uwZw7stJpEeYh3NSjfNui1g6dPEu2LJKjxEqYZWPUKbGhjwkCssaYiJVgWssCH4xtXbCWM",
  "key17": "4eEjQrXJnY6Tpp9NQ56RbQuYebUonJUaaSHeA9HYqS96YTtQbmQxRaYGmWjyjM5br4Aq8f6YZmCTSqzHHn2KPZGE",
  "key18": "2fEQbDaHtqDqZ8HgVD3mkCrtVGVdXzQX39FcGf2zqteFLRWVgEB7oGq9b4UwZWVtbMWhDWasAeXJzoES9BTtEFni",
  "key19": "5FMk9wu7yKvMafGmW1DeE1SdpUstG86G4FusQecNagFeJQp1rCe1J7NLw1bkifDYcfYZ8JXn77ZdLdQkedikuoL4",
  "key20": "2w3ax3WQdMqrFyFNf1yDg8DcpChuviMu4WSbU4m1zW8k5Z6vQunEBUd8eG9aQfuAADhhPuxEUAszCcJnWsRK1mXf",
  "key21": "3trdLo23aAPShkmq3fJBzUwHyvZj22oESVWjpAwwedMCf74UEM6nUKH8e9eyT9tibPLotFssc87odorGUyrbyH4B",
  "key22": "2cRoaUuGa4V4NmLP1yniuqsUdrGCqpbeC8PkaSQu4hUveY5zvBJAzVKdPctc7vQwrAZWhYmWCwqrqR5wfBhkTtg8",
  "key23": "3p3Ga6E5c2fWs2wRifv4ZS8AhWpnqVfkBfSMy3GwyTT3MAaVV2oDMtNaQqDXrwuAVoBmpPq1UuRjByugBFNCV5G1",
  "key24": "5Bn31LX1CXVQKCcCM7Uja8AUfEoTipgzR73LFdfNBVTTxWM3vN1MtL4tTrpmNvbt1Uk2YBrnMgA5ohBuMAuvqgqp",
  "key25": "5bxqw2NeSffA8M9K8tUCRjECAvSEmKkrF1LyYC3yHywCRhMdyR2jZuEz9Mn1hjSPwsqm2sXxE2Fghw8MgkHAEAnZ",
  "key26": "4oUXCruH8bKiiSjdMc7ghxq6y7u8Nvm7Ai1p6GEbTtJv7rw4ugyfEQAG2eQBmrtv3aa5BQyoHw4K8hjCRBGjoYuF",
  "key27": "63JDuyBs6urPjRm2UeZoY4eG5DXQEkyDkiu5STtRhL3XzQKKVeqZ3U6DzPCdW7j2KTLMdtBj57Nj1JaW1DoJMsat",
  "key28": "32xDrZXo8TQbusMA4Z1xQ7QmjDfucP351zpSToZRMgN7k782P3vmRAr4ECxthTrYViHTRppj99FjjQH95AkJJBH1",
  "key29": "5NT2n5gc2CTau55ZhtDKvVK2vEdpLrDcKBJmuNbZthGT6VDW7uCnbUWXaGKyjoUs1RRMdMk6ngxFmwydT2mjDsUz",
  "key30": "ceUCddN6gaeuwvEiDaTFaXiY8RBvtTXuX1hnyeMukE88vS6FoFoPxVmK5NMi4G4mYoVhg1t95TbkdCMAVgNxV5K",
  "key31": "3UWjYJWevLWE7A7gCYe6bHVFojZpJe641392BEySbS4btmuSqxQgHRrq2eEmrhXoYrbCpQUBhaQTA8iPhg9PbEC1",
  "key32": "24tGRmYiTLLm97h2V38tAHLCvdcFuhnApnaGG59QtvZP9jFWjXUSYKw67iC74xLSwvTJq8PKgFivbSyoamDYnUvs",
  "key33": "3puPdhw93F17nSjiDjWVChUf53uCTWKnK2yV3S9xfnLxGP9Dos7PrFCnHbiy3xLGV3fbkjNBVPyitTnNmxpREPC",
  "key34": "3aNpbgDNZTbrJt6t9dRccZrj7bCwYiz96svEPLzWek34RPrfj1JqMtDpbTdwmvhR56AksQ3Gp4heFzCbxmBRwg4n",
  "key35": "46C3kL8BHSp1erurQsvpuY94NWRQTQ11AL46beh6fNjg2UenzKNwLRzCv6YBxHk8GebRqWstHLp7sVqCJpPWxx6W",
  "key36": "4DmqMJvvcdqGPRdbkVdvruhMG7UBjgkbrN5DN1m9cEBq95TUB29Kb2i6iJHr4VzVZtysEDp2kCsxrMvexTqSQ8aR",
  "key37": "4uBALCbyfjqLoUfg74RaWtLjTpNgnbKwq8KWe3RN9muBqnQBRHJbaje828pXXMVjLqHY1XfCSD6ckGp95SvP5VBg",
  "key38": "4yeBLb5HcsoqsL9NAYeekXztv85uK8fjPjHwDJzBuigwgx52bnbcn7g4H5FV6SdK8PZdnQLZdKjzThZiQn4xDbzL",
  "key39": "3AqAuYHUgpVcavRmVfet2b5iR3HHZWQnmw2vSJ9YQS6oZMV7EA6vadfhRifdRHYaoWqyFgkYuJ4zFoJRwZqVbnBN",
  "key40": "48QgpVm9fr7F86pv8BMzV5NUmKtiUgkziuio5apFAMZikiHawy2Y1kZJYmxV7ZqhzhyXnvUqRi3q9y5LjPWXbV1m",
  "key41": "SkkwezYBUD4d2UZFmYitiuy4PUgnHt4SCUMPPpUnvpxJEdrFFXsdiL6St2LxfdyTd45S6rFTxGTtkm5J1y5QGcU",
  "key42": "2cTSFdkc7PRR4hmftZyty3WhUmy1t9WvLdo5H5qLkepPw814Ro2DHD46v5kys4mq7XdadB2mfXgHPsFfafYpmJTE",
  "key43": "5ytkxn88usLYx11tSummXfzjXH2wkZ7jgphsrxAWm1FbEwcAC5mjXVGXCP4nZ3SCbVLk9DDGrmHHq5RrGhj43q1r",
  "key44": "23qqwsjHRPtujscashPsd2tbpZjzJvgq4xvn4ACp9tJ5gwaSzQU2sA8bYiwjcBRXwsDEJ2aT3GQiPhhHmfoVr42m",
  "key45": "fELRVA1CFrRXDXpUpYygp4N9Q73QtfTcrbeRfuTNVg8qgCNxymijTPk5ENfCxm1r6N1v2pYk7M5chqzzxs5be5D",
  "key46": "4iquoi7HnzGuFnbAEYs1kasKdxzn8mcXrZg9L2Wmtk4NVPkNEJ1PDFYZ4GAaBP45kNaqBnT8gknxVxNsT8Twecdv",
  "key47": "2oaSo5wBrHf4V5b6Vf3sGGPcJe3gmcCG149imj75aPN6hmpFjFLdCht7N6rLwxSd8UAUxFXeBVUwQPGhJ3Ay2nxK"
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
