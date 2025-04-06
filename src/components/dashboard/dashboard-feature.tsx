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
    "2m6GGY773EU25bPC8DTk5F2k9iwAWkwMZuA9vHkBkt52ZLPar9b4KEBqakdh1yhXTJomPMXF53okDJjEB3btJ7pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dYNZ5kwV3GfRqRefn7hGeV3fnJLrcGEWvtVVDxCWVD8vNf4QAmwVfn4q6Ub9uUfwhV132TonRio8ahihnNoFAn8",
  "key1": "4H9JQwWSYpzMwzNXmGtQVDXcRybkF96QWReu6eRmEmhqFGSC8tkbeDGHjGSwYNwTJbUTSQgeRJLhqRgdjGKjeZed",
  "key2": "4mgEbV6HypDxa37SVZL4eWitnxwM37171EC1VDnCFT3e9ak1FggGpo7KP4BMXHULM3CSw4jdKLerVzJPTT9AJh1H",
  "key3": "3694rA2LJwrhuxPW6n6VdtbbG9vaLZMZTH7bdvoxSRoEgLMAsjHqaMmL9WsZCwuGMwqX7EuenKLNpznjjHHMSJJi",
  "key4": "8LnE8rtnXdFxhCoMDSutQXB9ZUQ7Nd5GCCPCq3JMREGViagWXg5SnhLrxAp2WmaSoqF2K3CKSXidEB7ChvGqoDn",
  "key5": "3wEcahde4rBapf7HeekL8XwSKLwF5cBE8KhgkEHQLXAjC8r3u5eikZa6XppwUGNYdc9TfG9WrCHz1FspZEwEs4qf",
  "key6": "55ahPTS48D7aaewZRikErd5j2FPpifpajRuGRg1BY3pdEHoARG5kNLMM1CCgXH9Ae5pe9htG49JvJBakFKNTBXMD",
  "key7": "3hxMbQG2MoDd6WyX8kZmCN5eB1qpXzD78FcbV1uk9bZMG4X9Z8LVc7R1B5cvxVjE2dyqxX77vRvqeK3Zd6o3uf5F",
  "key8": "3oHQs4gqfS2rXkxBP3bSg266vpW4HFx3mnwh8ieGmdTvkkjSgqbDqpJkdDhEYEyY6BSBiUjwCRWY2EhNURMrnNqc",
  "key9": "3XaEPgmjcJ8SRLTDx2CQMoNvC3snJ3WgEuBtVzKgv1qTdBRYciLuctFxgX81q7hMM5Kzg6v9ffMqk4cNGijpyDjq",
  "key10": "4sdM6k68PUs8r2g9WPmX1GjcbA9vingfYQuFPtgCE4ne5PWFrQbGiSRWn6HEFJSDjd7GLLPNxUTDzCyevxTeLXtT",
  "key11": "3FGFFsMwa44UZschXNPX4kWN7eNLhZASVqSMYR2T5k6Gy9DJpQGVjDrSsLd6MFr65ynYw5AGMUZvvvETjLk55YH2",
  "key12": "3B2CntaQEob7B888FRyKe7LcLc6sNbYZ3xCE7zwpMWRtYxDXffnhRGboEuBHfRmZXnaD4yVY1sKMhoX4pZJ9UzuP",
  "key13": "4REwLLzfviDTjZkud9HsRZTdNh4KDjr5goNmuQRYAN7PdfD2Ud546o6dVnSh1tbNm8w5WxRtoxQotw9nDgV5QpHZ",
  "key14": "2XPVVCLYgbzSdNKU5UMpYid96Ywj8JC2YTXv7r1qv59dbgJThL29Q7ZvefE3MQiYWynuy6GySQKohCEarZSjow9w",
  "key15": "59sHfbeYHz4QBpvFzXHWYmd54dNdzFwtYiRncQyT9jLGihTUXq1ZvBrPT95rSV4UP4kdxANwXFcivFvitKt4FKxY",
  "key16": "5gzkYQNg3jxGmryzfC6gFpvahMYXLao9CJqTUNuiJeMSfXWz7cXSjDPuBSHWZfeVwFLHmCb5xLBL1X9jZiXgFnsd",
  "key17": "3jmnv9yzcrVqqZyxsi83C17wEt3i63LwQKtADZd156c7wXT1giExqmdbbftm3RYX8hRmmvmmDv9ve1eoqk1Na5Ra",
  "key18": "3nWp76FigUezX21YyPS7AUP5aXRhRRE6jLBzWt6E3oVpaxjxrXAU3ytMkeAMXBRc4rQcpo2NeETYpewptzn4gZur",
  "key19": "3LbYiPHFJpZmjDSny7cQjEG5i56GkfkhpdzfLG6KEEBDVUQTmc2S9U6vtMAsxfAFbbJnp7Dux6kJrCPkUtbxQGBZ",
  "key20": "59wiSiThbwfYx28tdpdwWBw2RwtQur8A3sEgQUxbmokd5mSSW7U4cc81f4ZuAGHGSHioDpAHKvhzDD4nvVtQJoVq",
  "key21": "4sZXnHuwVHs6UD8t8TUqKjd69ncxvuJcoK7CtyRDMpfNzaiy4mm6Nzg7d7poQC2WAEoDbDCQ3bBDeFpbtrkmDbRT",
  "key22": "3oEYF6L989hpBpFKBRjaTM4XPsEfC2t15tvq5QZaFEMKMCz6ebXt6QYdzhAdpNuyn76CHjDsiyYUDxmVFnWtARuA",
  "key23": "CQYXcJr7CPqset3FvhALhWza47tFGJHAzavbhGpEEXNfSkXdPkKoUyHZJ8xWp1UCa7UFUKS3wYmcdR7v4CRBSR8",
  "key24": "FkTHRxLRRmQk3JJjSPmqKnvz9H69fbC9VUXjKCHJU8E5zBoD2KxK5pyNcRE4kMLnAwPJ6sRVx178sJX36Ne3PeU",
  "key25": "dPpEaKoQGtCbemMeD85UWgqqJg1ykYGHKoY3ZZpP3rT37PeYw35vzpRikJ4F5BtxD6HJXknX65RBrHcp9ePDdXU",
  "key26": "2R6m4t3tALkvRuAS7e8Yi6E1MPikwfz3WuY8fJQj1K9JPvheYy94N4vRE5JygAFegZ4vzQS7UzipGGvMcreHtVVU",
  "key27": "5FxPuSUwoXHyGb1332F4eP7PBCKwnt4HBeidSHGTWHmxa2Cr8CNDshbtyELrP5QsDRfLMHH6jtaMTdvvvRXqBeCL",
  "key28": "vRm3pTanA1vYeuCqr9op655e3PvEssJLRAptoNAHymFDqEUx73aPSSWBanMTWTP8V1BaEQLtbMYrCzLf1hE5XdH",
  "key29": "5SE3e1eS5Ez6riLd5iAy9rf9uFwmCUnrz6hExU3kpfGBNesrWcuZFtFVP5ZahPC132Pwm55XczXMCziBxa3c7X9b",
  "key30": "273NxrUo3CTCed2fik8tCA36a3Twjj5dL8xA6jKPAUFPBtjBDmfT1qbcn4kiMTyTiNjEMKdv2XGmJfkGGNqnVQ7m",
  "key31": "4s8og79jFutURjFCsBVHb5DNzFQoFvmJyZKV6Q7Q8DR4FzEXkbCBRzfaevUU3GW5mD22hEm4JMbGcMoqVCZTyrbV",
  "key32": "3pqGopYVhB3NwJu23k1G5mYsShsisNYMsMgMDj2furn2N9JRrzu7wJ29pVzcAyDmn4mN48XWYZp3VNeECQkD7LTc",
  "key33": "4K89KA4Z9f3JE99g8b9TY5XfVcyMaSExib8zgG8L1HJo8GTcuPHhNNh4AQzcbAQMRkhUe4obXhfvSZ2FE7sQNtnf",
  "key34": "BwR62orXK1WmDUdq5sfpe1DQjnFimfcCd3UhfrEKCx5U5ZBsWXU9Z7yxrNbtWgmaREFsdgddXC3aLwKKvokL7uV",
  "key35": "5rT5eqzpLCiZpbWjodY75HGXsUVH39jvU7r9ohLqzfT2woZCwJXnhP4u2R4LQXyv1fDxPrNx24xA74JBwD93yAEb",
  "key36": "5x7UV2Te1r6tNS1HU75ccC4s6RBEdPDoXcVaeAEPdgkDzdx7jPZDxuM4djf9P3WcfdFTe6cJinjA2MHnMJEUQtUA",
  "key37": "2UHhQJ9SaLLWSjT8uxw5z28vGUbxZ1FFUCSUS68MRLBDErWQRzTbMCt8KovFweKVPqLSHFmQ7WwNUwYEH3E8Rh5B",
  "key38": "5QVfhDj219So9RfK8oHCzLHYU7j93B8o4sjQ62Xo1ntexZuZvqDsiuTnkXkZyyyKwWwMmQvHEDTFDJYm6soB7c4c",
  "key39": "kuKhQ922Zcg19ykWS7iXRWD2KHcxJK4fNs7qFLCo8rcrc8EMfZ3S8WTAj3jYMPdAp4gKhkpRy7nUYBVSM45oUUd",
  "key40": "kHNAUchXCHuKhXGmiEu5X7oZKxyjhNba2KJGFQ9K3agykYuVz9gD287G3KmkZLDukvssF9FeLGEdxTuR2fBibak",
  "key41": "22wCthpeo7ZAvMEyaEbTfRYeTNC3NCKZzDELta7rcJKcZcA8JJ5osjyWAvWMU8Pp7bhZXZqGMyyjvY3NacRRXjuN",
  "key42": "289iEj6KJJTvry7TbZ8dFRPY14H2DgaMap7bhoUk3YWqHw3az49Dtce7kDQr6jbZdNaWdn8hqevhZV76QVFySygV",
  "key43": "mKMuiCd7LhXVh63MdYLCVRYTLRmiWnRmW7MRWcGRAWrBJkpHbe9WxvHUCZWztyXtoUQEytur791pvgLYDHCcrCH",
  "key44": "5EUewBwRSRbeKpfGm42WycVmGthMfQoVdDLw2QKSRmSQyhBkMEvKf8F1K6osoAVrUMZ9yGZNhWzj44w9VPevxFSU",
  "key45": "2ZPfToqA2mTHSsW6xhHb2j3C9jxMmyq8hdNsxUvs5eaVLDHwvp7QXpUquzvkGvPmX8LEsGL4wLwVcta6f6JgMURs",
  "key46": "5WxESrkRVqYNVZhk3N2Qu2hjTUSUTkdDVSBgppqa8p4PcaWfCmj7oxVJLXpKg7VGXdDtJuSVx47EjgtLSDheaAJ7",
  "key47": "5v5jhu9pyxmHRVyf3vzB27cyDVk9KySBAXw5U3h9U6tB9cdzGFQMBajcVzqaatmi1bqLiBmRw3oUZENoqDz2787V",
  "key48": "45FRypGgTEkyt8BgsdNTpkqpzXiLJbaRgpWBiy96dA9ps7uL19LS5mAFTnj1s7MriuK1HMyh6GeBPdGCTW5ydV5U"
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
