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
    "5qD9yn7TekwouE8NDEqiHFT2aNh2mPbaDgsmcCrA37bbcuegpcCbjS24AHa4nYiQWXEvzaC6uyvCkGhE3m56HEwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DgD8EHP5UMxLmqfSzwyGpkKU41pkNoJMRN7rLwZwX15gtfHmGyvCNqbEhDW4ezQZKL5SJkPpChm7nuVfZEF9AXj",
  "key1": "2NQt3jdsrxf15wCkFmYzWTMuJy448axcLqep3PXennFEvHGJppSpveZQjihXgb92LhhGxXJRH5ShiHTbcEoQ5a9q",
  "key2": "4DvUUZkjKTwQdmNGBGqS4AX3nVwqDfL4B2zXaCa38SDXgUNAvZ6eJD6jQVr5o9Po6Z2kZ5eDKPrZheA5V8LoG8W8",
  "key3": "CxNnDCE4rGJnqtNBA4mfErT7BGvLYfZ939DbbWuRFiN3ieWwnFBBx5oDeNr2AxtrzXwhLvYn55vY2TtmZisYZqc",
  "key4": "21REFw2VFEiJ9e2RKrFynXQqA7xu35znv4AcJprL35hs24R45Y8bQ2LzBnsFzP2wvKa28vRFoGM6DQn1zadpGset",
  "key5": "2gnm7mt1Rzb3n9LbindCVpXH9FKwEUNjs2fuwz5f4Fe87xbiXkxyK54N8gsoCVg4MRUVwRgAuPBjBagjbFcX6eox",
  "key6": "3ZQJgHtTHuU33Bjxhooe4eufnWCUFMGpZVccMhisY1MKtoQvPxeFSYHzad75kqdKTGjgryeCpwgACuF7i4c2ZoTU",
  "key7": "5XvQAKEYsE46DpZy2srg1pyhB4qwrgMNoJ6VzhxkYDGdNTfLAHo6QymtyxbWdvoDLpH8gSYTcTuEyky9HhWRpFXj",
  "key8": "2t3KmM5aisu9bE3Qzx5b1cSdMQ1Fe4Gp66YprjsPYvHD5j4wTXV9yqLr3UKj9tvqkVpA1Uus9TriVwSa4C2MgUFB",
  "key9": "5oFw93jMDeEGrQLjGBcBsmLHAQJ48RB8j64NqSPYgRwL23nLeiswMEc7HcJPxQSqnxQVjeQDNx6CLWVhMFXtUVRg",
  "key10": "4oUKeMw66GMEU19fM63LXYWAsVnm8CYBXmn3SCD6amQnMw9EQbP7yWrVsSojhFD8M3Ln8wsc2rTNzvjLRAao72s3",
  "key11": "3fsd8sCHew73qa52zwKiQDsDQ7T5TxvsK1o8cCRqfdZmapCTx8aLtDFvcfQMtU4tZidnJXiD3Rkh5o45hrbokEZ1",
  "key12": "2V7Lq7g5ygHs5sc7hAVJm6HqVVMUVVfPY42rDXpHY9vgyhdAuVQ6t5c7LmwSjRSwv7Fem5tkndd8soQFhqoz9QLQ",
  "key13": "4L3zrQYhGXan7DkgsTPSdWrcDVEU7qxQJupBuBiavWShVJJKXm2aQQjVzkcAFd3b8zLKdTCuzXeZy1LNbK33EtRV",
  "key14": "5Viq8shKpafBbm89dnQ6Qt34oY8F4K342HACBfF42iiqB4hHoZLenfXUo6VEZb4oDwraeAydv2WswFbYnP9FLKpq",
  "key15": "5p1G9cQc4iJPEKu2hrhDuaPXnGHMKrNNUodmADZWBwRc9YJvJ8919MN3PCV1WhAxP1ZwTGkQfBgvoaGEX3GXWxWU",
  "key16": "4NXueAzRFo34Q4BYe9k2Vt4QhdY7uV1h3346JXYAesaodQGUoDoohVnGiYoJWiJ9P1MYrHKKXmCESZhBXwPUumkH",
  "key17": "ikMJFxr1qQNBwCWnAN8oMz4cVy34KaPmpghfMpw2sLj3HbT1HvBxKYA8WhMPKDGSs1GteiJtaFBaF7NEE7x8CBo",
  "key18": "322SpWgqzpswT84TLrTZ2fW4G7AFnTnQKd2uSynwDJEezzyVApkMdGo3NvixNxCubNQg35zseV4ozmw8oLmFH1kj",
  "key19": "H7ifHRD8cqa1PsSek1ucZfSFJHvEP21H2Jqb1cteYMMwUkyCNkDkyNbb73LBFJw6rFvfSGn9ViPBnyWRNaVEEQw",
  "key20": "gFkLPCi2m75CxXuZpsjYnTbfgQZySdDArqMqsW9jbsCyAzxhREoeYsp2NDUEDbginuLoPB5KJPiHqy36iVNfpNG",
  "key21": "3ETkqCXyCYpM6BbBZGkmjSfwuoo3WVUQ4KoU9N1mKguvjxDZkNqhA8E4JATRQmsN2nGqnkSgDCV8FiXEfPrmXi11",
  "key22": "4Mo7j2d7iAiWSECfRQqH6rHyZVC9jBFmUg5NgkpFWLehDPTrwo4EogZw1igd5CbXrAQvv64QEczwRgKqGNxqn1oL",
  "key23": "5XYEZvUn7eycCN1fxELHKJc6TjNWLpwdek6mZ5T4V4bYALV3qJfnqpDP4T5N26MwcU1KvfaCJLBbdrtrddkaEBTY",
  "key24": "4fyqZf1gtqnymDbQeLX7vunPqe5ngGhdtkMhqYYETiAf2pLfG6xgJ7vMZLeMDofYcg8yJMvxTcztgefZ1SmgCKqM",
  "key25": "4rnCCfA36pJh8C2WjhQpyEQLnKRinMjjZ4SNcZQqMwEg1tcC1mNGgdKHaDqH57kcCNLfGdEdpAcDXRGncQdwJgsT",
  "key26": "2EjVji9gEuWw29KeFowpDieigLHwF81ov7ic3iA5GWgot2iP2YTZEnxpVes1RGhoY3znLzxiVzRxkBSghSKyuURV",
  "key27": "g4VBJzPVotATs1RqBs4rpzMyAzH61vqYm5SS4bPrFW6rKDNVBnCboErtTiqFeUmkTYhHpbzrQ4qAxrbeHPMMVEc",
  "key28": "5ttB38umshrNGjxLggqCTnZuYcqifSwAowWq6w1N4F5AQEAp2HsP5dpJfjFXg1xQZCmhMHTnEWmYttrDi9cZiKNz",
  "key29": "5GPmhre2VAk7Z6m9Jfm9BPTwed5oe3rCo7iLxAvwkfrrPb5M82NZ24mQDM6X8JBWfdfgURGE3V5GN3iPrnYkE4FR",
  "key30": "2qi7pVEdBayVBkWyXGktwK8xSgRMc23A8B1Hehh2MGET7yYSYqmJPDJrpGZ53pu7KbNqzQkLXngqHdwK55oE2x5e",
  "key31": "62LipzX6YhP4oAEmWFnhh2Aca5EvcEitDBSzKTQFCuNMoXxXWdWrfm71mLMuE4o6XHRpA9hSmjLoDxodsttzL5WA",
  "key32": "4fdSdeFzqdY7QH8YUrW1oztDUYmkbtSaQDDPKZfMT7QMaaxB8e4Vf9W4SXWquRwEzCBVhe9XGmAb15pqgDpULfzq",
  "key33": "4iMyVSCqAbUkrJzWoVUJypn6J3PMtRCsB9gqF1UPgmGGSHJHzf3Jh1R5zodTrV7swccbaYD3voquGhQwnEEwybeV",
  "key34": "3zBoFA7yGQqGCZ8RAc4HQchU9stgaK8jqV9VGgGFNy2xTNwxpXvjtsVx2GBF4ePmtqfRYBTz4xg3xXYXBu4ecP4k",
  "key35": "4cSdr3wqFfLTXLKi2tr6RWBZ1yehi5UToSPn6k3zuRhDHqrkMdFgw9FHWFsCdNFUH8xMjXaDFgiz98V4Y1Hss4Ns",
  "key36": "3fdJTSRydQ1Rv1niLYpririsRg6vPh4sMCFqGs9usWtoHexEaGkP6Hb3bscX41Skf4mZzpovGbXij2khTo8XQtgu",
  "key37": "odj9bPxA7YHGKAJ8uFYDuRfrvCRcwTcfTF5nKbGHUoJFXxmzSLPJZDg8VLnDfcSwF1hQnfanfAYTWSSLLhUb3Kg",
  "key38": "NJypPfnHbYagM5eZaDVbFzEvcYqEHJm1kVY6Btp4DjdmzkAYQrzb6SPCK6Y9RDtZoQBocoTEvqQBvTEcxRrb3NG",
  "key39": "4aKdPWrJMKrQLoZarSWWfW1Bn7Dv1neqZkcf5uBS8z4JrhmmE5HKKuSV4prowY85cUup2j3T5GHYypR35XF4aAMg",
  "key40": "1Lr9d8bGjQDNjRw6worBL3cJ3khZb1sf6YDLTQcDuTB4ixAH6qVhqUewdWw5WHNNuW6BufuiLsxkesLhJNxh8db",
  "key41": "66s4eKuebupD68Q8ZvsKxTXfHFkTht2naGXHFsfxAZgf33J3QU26mDvhBUVkaUSkmiUG2WgGFJixEyJphHN3M1Dt",
  "key42": "22CuqkYaiq8yJ4dFrwsvX4egiNGhY2ary9vKn3wREc78iNECN3reXgErouzd4vSg8dagq146daUgJup2jCjQihmP",
  "key43": "2thuYkYYomMQw3UUtLFBU6VpfTDMAwDdDYLUpB1YGZ7gr6143pnDe7FFdMyci4PRD886oPytoFpKdJTFumQTxKhn",
  "key44": "58Vbf3yfEpDa55WGDKFG7A7Vf1suYp44SKDMTmAoj88LKrfUCypMY4wFsG3kX2WTn3NXUGP6J7ubQ4oPy5BVBWW5"
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
