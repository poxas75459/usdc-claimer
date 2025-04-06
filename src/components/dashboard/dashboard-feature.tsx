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
    "5wxfMwZtzkFLYosYQ9t6T5D2Msk2yKke2SAC8DJoVGxZwYqs7UDszpWT5su3wRH8PQE3fn85Qz4cQVjhyrkMJpiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDQbBhCyX3nCcqDwJTWosqz5cSka4rs8vjky1Qs56UTRgxFg7zht2EGmXZ1j4k6JdW54HLguRiWyWWguNvw9jko",
  "key1": "2DH53Ut68f42zQnpNqpcjDjEeCMR444N9wTKqDbozkBKGmWKcs1ZxEdrFS2zS1JqCQjmgcjkt5gfEvdFkXWi4sxW",
  "key2": "3MNgr9oNFLpRTbSS2mewWxXFHAUVjWEEFxJxBsatBJzD3J8dNhfGc98VhC4L16dYh4FAuQ1bCjfch4E3to36ba9b",
  "key3": "wSGaaDwSfDxG9k34GsVzsvUoStxyRrethnBHbDpdMxVkYshkjKPSNZWEKhmyYWhYbxcG4U8jdP6BkzTqSwY5ANi",
  "key4": "4mviJTqnBChF56AqE2xd426kAgNVqpfXQVsXZ6zWa4j94YFnkv2yef2QyBbzpSKDMPzhfZ81yf3S1g7knPUfMrjo",
  "key5": "5SABHbk9hfJB4n5s1xp82fRGFuBu4ekGsRsgdN3mhtRXQHqawHbt7pfJmdyqzNN9sn7GpKE5AsvsV5mAjhuf59fa",
  "key6": "3TeFZWjV69b4FpmdisBek8RbdZheetf2XastBYCvoeuB889zcqyxf3CrUb12nYpG2z1KmBV6JzCJmV5n2pXRmZX2",
  "key7": "4PpBmLAUGzrnUVbhHHtxNrRDt2ABrwShNAtF71C6MxrqVc5F4wQjyrK2HKDeABFm85GBwzcBnweyfr69yPVjFmik",
  "key8": "3mX6y5i2pxA9VQdZgKouHngoGJ8XYuCwLcyjP1wXxJrFCtLLLdayaKoAn62wzhVgRuKofCEtwTh4gAzQwgHdb2xy",
  "key9": "5hAdGC8Ys1ZzSXyAbSKL8VqCrho1aQu6eLwW5cyBNYyxhYaELuLrN9ihFVk3ERQ67wggyZXTGFgjuhaH7jQpmzzX",
  "key10": "RgUx4eXk1zKjaN5fZevGwBUwcYV8vGV6AZWTectnah2nxmRcwAsVjXeUornTP2YGCc8L8nNVDTzeX3VwBY6Gfzt",
  "key11": "5wM6EEsFhsBk3KrU3qjMEdJcRv3876CNpg6EFb1eKV5yHz232NF7mSypwTW85okDEL76t5eX3eXKGcEWnboVXExi",
  "key12": "4huEbpHMjBRvssHf6kSgfKJwpYSm47TtA5TNEYtn7jiPRVECeBEj2vhpzjUS5rM74YU5jB9Tpc7KVXAALTKt3gTZ",
  "key13": "mb8LzxGsj3SHwpRurbT1TH6FxnpEZaHDgiVrDQXcHCtBQrc8TPeFaB5URboAPxg5B2tCsLv6MeR1TT6kbSykj69",
  "key14": "3BbMAsySfwMNxBk3hSKEfaPeUM3sgkew29oiprxfWtwxuceU73xbuw43UMtRQPuGwAfXSWgAHLepYcHRxdaXhXeC",
  "key15": "N4VQ2YqFfnn8u6bZvGNfBYCTz7cQJTP9pXvEXyh9UHcUP1qpNUFQxdaKdH2NFPFwVNCsLbygXh3GeVAY2SnZPWa",
  "key16": "3uMk5EauwND6PJcTcT8DC7jTCpV6hoUGro7yLr9x8urCRFxEn76fBFn6GDY3Raj8tBZ7C1rQApd8hGMEaBnwBjn3",
  "key17": "anHGZt3BxmXJUczVkoAdEw1CDXKh3oBL1WmgCcJhTXdSEBNMbwF7W5BoQYyWhdiQcTJ5cusv44Cwt4D6DGEBzp7",
  "key18": "4zybkiLt1nZJzaDbbdfnKZ8ApNb445kGiqxJK5Bu9vrqQR3az9GYEB6jYnW5P31vZtBtv4JcYXizPUAoU4RgR53V",
  "key19": "3hq9b5Koh1PsfJGrM94wycqYtEFfQNSwf3aJZ8mgVCoMyj487jN8BhfNuYx3o1PBcgEMA6e62SGasfhtdZZ1cEJz",
  "key20": "44r9KeyAqGYfdxNvgvCCZx2GCNdr15cgFxpQUz2UqdjNe3xckk2QDFKjSQFnDsHrzzifD5DaDcYkT9kGPpWUkPHj",
  "key21": "2ahtt9tb8RSpTQ7ZrtNhpqUeZenNmqw6xCx5PvFwehxmpfqxNjRzTZs99EfA4xaGmsDZPLSrykFsdrruGwMDR729",
  "key22": "5SoTguTKkQYDSh1Ag3zRqNBbPFYjuD27PDKaZibS131AVdjrHhz1zuoaCRN4eeSAJutMJereMNXwR9RBwbsYaBqi",
  "key23": "63dtVvtpQJ5V5XBVPTXkUMRuSgiZABMuw55Gg81qHpP1kEyCsQaBvbvsh4VdfpgFQVs3R2ThcFjADA1DECAYzdKi",
  "key24": "5Rp2NHchTdDAGzexKJvbZiv2phBa3ahBVCTJBC8EQ9moAEg6JbYgU5yJV17Zc8suMBgT4VGEoEfJfsZkVzp8f5UN",
  "key25": "nQXp3KfjAKoSDr55vRLpTQ1mRnMLe4X8j74RfmjSbW41pXqT6owJruuQ4atkJEEHMEjesHYB7nwoCeNUUCTaTmg",
  "key26": "5RcotuXonToTp68xFHD6KU1cmm6vjxpihyzLRKkLuzKsaFiBcau9RsK6yjh6o7H3rJTWL7pxE284bbftA9gFoyYZ",
  "key27": "3RYML1Vio5U4TBnpwoG4vokS7VFRXgksWeNBJ8uwFK4LBwKYG3a7vL2ibvL66os5cq9m61wgKgEJBAzb3CQ8ppaw",
  "key28": "3gAPT3PTouftuWgA2mNaxWo3QWUaEkUecTyDav6G7UJt7r81xpajCW1iJbMmoF4cj58anUtWBUL19q4bn14yUXcV",
  "key29": "5yn8BMPiTofzsmmwfr8UqcczrqnwXxTvjU4bJg4UJ4Jzyf2A8wxpgw3uXmYHXiPY83LYQDAowbEZTkumrBhQVtmH",
  "key30": "38dkQ8unLtfJ4ACLjTD4HpyW9688UvYF4a1EYxQDT7jfXSbSjHrQrfVWQwqGz8bE7K2Vu3GMYxme4eTUaxv251bR",
  "key31": "67NsW5h7Dmt1qP2zxTLiFyMAgdttaowmF4S2QksBfgKPUxkyhtb772Sba9EvLeBkyhErRghHVPvWk1j5KhcknrqY",
  "key32": "2TsJUqRuZsjGYKAik6EHW17cgkGeWwjr4BqtpmH7T7SwtbSL6evpakejmWMHuA5L8SasqTtwivg8suF7zWShxZcG",
  "key33": "5uTb2mKfPbk2hSc8JxFuKUWx4tL3PxcbosEeiczFGzqKCyv6EY9Ca1qNPzvt9qfLViQKkmNy8e3rTcJf1hEtL4Zg",
  "key34": "3XyhqcXo7CeDADpMNgbGWigAkUqafMdMpE7WFiPXWyrzGeaW5F6utFyYgNRsmEWy42aNGNxXHHt5v265hVEUVhP6",
  "key35": "3p1KzDAY7chFGW8gE7dQGQCfmjfpB3K1XgSEcxtrypm1gXi7NhCR7Jk5ZJY1hYhPpCWaKWjKVZVF8FGbpnkj8CgW",
  "key36": "TN3z3v818aCwwtKD3peB2hb7hr2DF2CgRpgksUz2CKEhoB1kgSRRin2rL85nRBMZsHxDbUQZm92dmcbDs5SKy2m",
  "key37": "33EJ2TSTXTUousWnCKE4MtrSJcNAdnXE9MXGw8YCeTkuq8oV1nKYvzxDYSVogC8jAhfzoLK88MGgsZXKaBePr2M2",
  "key38": "2Ls9iNFqh1WDZvy1RCwALion1wUVHuC2S61rM7iiKXYTXpQUPxunzjrTT2ZrVNYb1itMC6kzQJ3ez9akQCtvqY2U",
  "key39": "5pAaKx8R98AjueCXFEo61YAgftt7Lhn2SAXxGUYu5ZRopBzTujKvgmYAQDL4jE3rWaa27j6hwwznPkiF6i5MBWxX",
  "key40": "63qd4BxWsDau2JCfMQPUwBNvbH8xFFq2JspKpYrJr6C7n26AFbmDym9xQHQnd74df2rsaWgL6Xqo4YDeP6H3HSyF",
  "key41": "2rYYqBY4qnhRTeRgHWoirQys6Wh94aHYopzeqakpRoedB6E5XB7Nr7RwFDJuaqhTB6m7TBy3JtqxnE4T1eaCgn7W",
  "key42": "pCgVf4NWXqFi2qEcyPeNzdzDL734yrVMsTbtWJ2yjzb49TDSHKtwtQJyMtjURbGo61p5LbD3DbDHUBNZ5ZzqyAt",
  "key43": "5KiqwXz3DQPA2x1XTnL4ikZdYP4kjUGKZ4ygehhA4rGs7G44qeEH1vAQsc4L8aMGbSY6eDThy2cp8EZf3JDLmkzQ"
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
