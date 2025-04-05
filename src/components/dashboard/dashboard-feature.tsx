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
    "3deFhNzzRJrQyifP8bCoHvZWjs8XZE85TAeeXxC9JskvZ2om8KmmUer4bjFeLrRXGGeqzLojEx9PS5VByqh2Yu1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HD1e2LgsyJdHNev8uczzHXgFd6ac6Libe68msgap3JST97knpCJ9r8xgnFxAtxAhrRc5h182qiaiRCgpugjrER",
  "key1": "5oZsphEh13bYw4YLDQkna7Vnh8TrjJ9HuCfqDfq5hi7VguHsHVWxzvP1xFQbwdzKCyK2jojs8Nt7k9VnpKdjL2QU",
  "key2": "25wLwJaiGBBfDjyxMDWwrCYZaq2KsUgP1HjEvwGTfAEhTHRGCU5zjcfXs2oeiBfWsumhhVh8KwkHuWhpusZ9WP1a",
  "key3": "4mwkg43E5rWxjoQgwEKyY7xjjjQzsAVH7TKuRp4CwjsqUzAMsU4yfCFiJGwCQ9VkxZ6RnWo8pqn6mCf5H4Trtkxo",
  "key4": "2xoHaFpDZDqDPXbWx6ZtnuVZhJqUe2HSPYe7YgwyvaRSrDheF9MnWowkRZmnp3iDuPgQQgH4MfPn3c1csgdssKow",
  "key5": "6qjnFk2R3UdeEMsMwFJpdBmSGqkTepMdfqY8hcBu7paAQxEjA6XUff5rQW8CMSzAWi1hbSfhqh4NG8sMrpASNt7",
  "key6": "5tCvyFEfcp8nhfX7EVsqbQt26KCciKs7f4DszxGZ2mXvx8tcPxsPWjJbm4Gdg4MQJYN4nU2tzazo9jARxcaXmYc4",
  "key7": "33uAzmY9gzZDNZKX4ntJb28tUj68RehDtQH4UKDsFgpTZUUMKKyAJEk4ihb8gtVDda564V8onQ4BtkZCsAGCp3y5",
  "key8": "CMC8qk9zCwQEGTshenLQCYnU4popMXuJQtyTeAZszJRsmHBH2wcWqBhYZLqj5GSZc6kVACQKyamZRgpM9NvwDze",
  "key9": "3EuvM1vgGSoNfYAh8fCJrb8eGiK1CQjqeNWGG9YrZP1xKuZqs9GpiaRVUXy2fiLcRDzEyYeDftuHxKnaKMN92ooN",
  "key10": "4pnha4HEYcAqSufYNbXq4YEYDKvML4cyY54PYJkuSyTWfzJEyDPrtLh7QLctC2effz4WxZqykoQZ7et4n6qLeCHU",
  "key11": "wcR54Ms5JHRcTBxmpDbTFTHDeUrco1p2ejHJ8MnLh3javHbofQ2Wjhgn8QWiZivRticchShGpnLNkVKVJ7zuW7M",
  "key12": "5SWs7buYuwHc6YKsaKbNMH71eXMseUW5N9zf1HDcMr1LikqkRTkJy72MxtWvqFXJqPsLqUBx8LNimbapLj7etvoD",
  "key13": "5bFjQMLB5ieFDB3pu8ZStYPSNMSWw2i7v3eHNvvF4d1S1hmxZ6W6dYs82B5Mydzkp84yEruKj9mzK6V3MCdZEuD6",
  "key14": "48WoBp8QVQXZAESZgFx2Pm9FFhmvQe23v9Bg7PempDxL98FFptABS7pLEjptrUPfZyHfpaV8FonVgJo8AzEhGN1r",
  "key15": "5fXe5eyDcuz35gCqwS8uzZNWUguq3n9UmP16RdreGU6P3EzhytcoFqJ4MkDGgscTcVS1PTFA875n2Kt17gR7KA4U",
  "key16": "2DuX5j1qLejWNwM83Jz4dpAK1rYAmTX8hshJeovzjei1UjFzC3Fub8S97fgQC3nZPGwHLWqHyLjVmarJnwnn7W13",
  "key17": "2v8oR6aVfTyviZ4z8zqUbnTULLBSQFqTfutiZWEzWstRHKWxnSyAD7FsMLwDiMDZscDnffjbZVkZ8yDdkH6rhykq",
  "key18": "5eXckk6PQ1rRVq2YErr11Z3rtjxaa1RBeMuSxc6YLSPDe3eqZ22bS7g6VdJZ8QgqrPHknrUkhHkLLTuUwBAGvZxE",
  "key19": "2fSRV7XNUNKaxtfie4mKZnEUDmCgahMC395EddgedniHAvZyYQ396h6EuNvLBfkZGn9YAnyLsC8AcpyFW7ZKfbve",
  "key20": "4kCRKBESe5GYaHysvzqw7rv145WfHAByzMT3Ys7HQeyT6tpwjRSav1xp5omHHteWSqLSbCtjgt4cF3AoTnDEWpVX",
  "key21": "gX7HdFFquJNiGmCoum56fQrMP2v7VjifuuhVLwvgmLUKHe7bsKA1RJj5NrUE3Et7Ri2L73A67ywc5UiiBsTzVTQ",
  "key22": "5YBX3jusfwymTMJDRmnZ1vF42rfuq6EAeJZoGHy5WWMZCpnujc4eeQDDaijcmfvUoDr5hbMizekyEWXbpSUdjaEE",
  "key23": "4Ko4mhAfa2pU2tfBdJmjAzq8tvRSCXCAx2t9o1KjLbJ3V99mLDv2NkzpKKgk5BUvDUbqAKjhmskKo7vQ4KVH9xrx",
  "key24": "3ZeeeitYb1nRc88Kh3igPv5sk9zn3amZgVaZoYZrMmuSn8U7QJtMwg2BrLCsBSQsZ1akDpCsC5iXDttEgjyz2ny5",
  "key25": "5zegsqn4gc6ayAHtYqx3cNvAX54XuQJwXCztESkzyZ3f8sS9wxTt6nvzKAxZRBm7S9G25WGVRCTgNLrw74dqzrQP",
  "key26": "2mDtmrmrTVJqbtkbYDmjd4i79yBMRMMQw6nbP5MnzgiURAZ1N9AKSQKBcvzqC2rASxQVuqVVPB3ms8vRbL43ZbCQ",
  "key27": "vZVdgx26hB8tiKe2i5sTuAkU9xNbnNedp8G46rnNaNmNmnxTRzqfudYksBMf7zAEp9XQMGbh7GDeiBX8Cr6GyGa",
  "key28": "kJie3qwrzmYnSCacdTSfcmA2CA2uy5FaLHqyH9h1d2qdzsHADDM4zczB8N6DisqZroPfxbJxBh1gh3r57eWAQrZ",
  "key29": "2if3vj6U29TUVApAiSuESSG2jaXki8AcRzSzG1BkxVjPSm18CKUGBEu3TUkXi4NFQEGrbCaMfQokf6NBbxidbjrR",
  "key30": "3hNb6HaTuEbkidmvkTFjgbGYVFRVfWMPZsL5eR9WxHKeNfTbpWB1p1nNB8HoUyMxhcqk8nF1L9NzX3tirmPDwN46",
  "key31": "4H2eDguargYYoYSsAp46jbZjsvpwmNdRdTu4sS4ztWNq5LrGzsheKNw9tysK84Eps3yg2u2idBqyZVyaJLBhEbHb",
  "key32": "4vHQ2W1xBJh66UBwdPv9cRiN5YNzF6RLdjRCGXvHU8LjZeJnw3X7X32dvJf6AS6AgTpAxAciMD2mwFSQ9xXFRw6o",
  "key33": "4TBLK55GkzDmkvd9v8t3MBhWi1rbvVK5M3xixweN73EYRDmebGBVUjKj9cYPZaPSMzYW1YBZHKMoXeczo88BKK8E",
  "key34": "8Era2DmzDjmnDae2Z4ndcLG5nh6fo8drdj8owoNXxu3X13AqL2BMMinZK6jeYsrLZaDEXBBcWFJZbEnDzP47yzb",
  "key35": "5ezeAWnZU5hgqzqo6oZw2jXNw2ZGDJw4cM4iPSuUNHtDZAND4yPMPC9d41Rnv3SCtTxDgtCW3yThyjhNpakJnRPQ",
  "key36": "KqWVnNFv69pfiXiAaW4LEWqphCCFoZCG3wqy7ZAYX6ZT52EKcWeAcQ9LGUVQT6pMAp44z6vk7G5zVNsjWmyvgxn",
  "key37": "X5VdX6R9St2xb6AUpzHyArYtYAKmJfC5EiwyoB1NSjNUfZD5xpQzQjEmUpaJ5vMXE3zajc8Nk8skQy7xuP6ynoH",
  "key38": "21dHw1qvT8dwJiHns6Vbr3nGV6gS4B8iPRp73gZTL7ptrHdWJLFnmsY8ay3AAsjXJfJT8jpTV25Jh9yLv8aEDRL9",
  "key39": "5x8e9456RA7UTEJCrg8C6hTaaHWr3yxV5LqerGMCcUkzYg8bQxJeW1JnVKBRJPQQHvG25QmivTs2s1dfkGrWBLNb",
  "key40": "437wxyaVGJErXLUk2XhNaohAHBBGYDcEyytvXNx7nX1Eeq9TSwtDXdrRrKmbjj6wefwkR4DqxyKLUGnCmAE6g6ZM",
  "key41": "3UHUcA3fMAqfQGRzfJ1X4o9GW86kqGZdiUmGRe4fdrLG34Ed3VTV5qr69tb7A2JP8dhM9Uj1HCn8vJzU7WqAamyV",
  "key42": "4p6igG2BrzpEgBU381dS89RHH3xRae43RkiYkDLTpadzPnV57pbWLr7FJY8bs7tTmF5QXBReXpeK15dVT84JZ1Zr",
  "key43": "5D1DG7YhEHoEoh7P66cpgrEP2dvxPrvxE69ar5s2H7e59WeeKCA9DoHTvkvV2SVeLJeB8uDyRn61hDssx6s36PYh",
  "key44": "2pv57Q3Gm6CfEEvtj3j8KdMGebkaKJZF5h3XAvNpWzXKwW6JDvPq3RXeY6rAhTNRhfUkf85GAq2qsQ6tyE2TkXt2",
  "key45": "4fmLe6WgwKSF8SfAQYxjn4MR2v8FntVVjKiBSemqrnN2BXLV4sVZoPCft2p4ZbsG2N3sLUCT59qKdc1uAQJ2YPzX",
  "key46": "4sJXqPtsqghM3T1uwULaYGMWKPqwhyYvKNxcVwNikTZ93Mzot72yZp51EFEbf31YbFGVVvroA6BDcsiHwNXHdh87",
  "key47": "D9QoMu5FTy8fYhNU7PRRpzoZLzj9QAnHnqGDQ3XoE3xNUgJ5pTPUB2iL6Dy5gGQzMMPpLFEa1e2PDCyK62STxyB",
  "key48": "35vXEXaeXzMMFbA2N1Lxb2HtjhEcqfWCx9qKd6P6D6bhTW4979oK5FqBTWUaejTpEzDFkMxwt7Zv779VjaWMBeZK"
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
