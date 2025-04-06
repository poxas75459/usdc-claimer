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
    "64n435nzBRx27g4nnv9VkrZLNkKmvGqhWdHvpozXi5fmAgbsjtPA7YmmkHz3WXLQ6zaNEa1a3yTa6sQYJkcstVjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LFE9qPwcBNRrxprf3KaxwxyUCryZNYXgj9G5U299Kesf6uNdiLwEaqDd5sHucxyXTrBUY4d6DBQwjoBW5FBUC7L",
  "key1": "43HZ9DsqsMKemoYN6NkG1CEuJERuQmCtNFV66qo4yQmcAsGffPQrGQyhqtNwLkAZZoFqcaqn6woWomPYVv3sEFrE",
  "key2": "2UAJy4c8bZb53XYPhXgrxtjrDMT4t2Z4FfKXoEH1UQsatRkg5dV2WQZEBNA7eH3jp6PCVvXazXAb5sxR5K1qwSNP",
  "key3": "g4Jg9b7X77dzvBHzin5KjXJutrTAe9BnNKQNCsP7krRG9QFGVjj8Wj849iAqbQGD1BFTyGfuyLZgeHSgLq1Mkzx",
  "key4": "J9rje53GWLJVRySEQ6HcLcGSD7GMdXSMTRbY9PTnWkcCqa3ueiCxSpRWpx8MikCJcgxiNkLLuqhq1c1RSpW74ik",
  "key5": "45H3Pmtoj83PCt3QNMfedsS3hwMV3RwkSksqiK11LMYUjQbEDNfuxDgYpamMuPmAFgJVjU2RQMHhzndEdqWuG9Zr",
  "key6": "3edXBopYKMQ6CYj1kD1GYRL1jwRMpnsDRmmvKGnAACPgaUh5Yk9WPxfsmHKqNqauNi7A1YhbWig3b6aNKUu2RcSd",
  "key7": "2EBPdPfCwX1a5qgUmRUFTbXxkpexCH6v21zpbRZMZARD6SgTQFS1ebhsJYRw7NcnQDyt362KKXNWCQeC1GJqgUpW",
  "key8": "5USPegyJfrWzam7VK73ykc3BZJXVu1pmAhPKcyVCSB9yyLSsUkLoWthishSdD5ztNsEhvvowLaX9TupcFLKYNEke",
  "key9": "35phsAHYL3Hojw5bixT7KnhsGZZ1nYeh3Csy6YD6fYA7qWEDCsFZ1gh8vvvQLawRGG57pdkCe6AjfByVyHg5Zv2W",
  "key10": "2PBTfBD25M7S7hWKKPsWZnuXoEr1LVunDX91zgcwrxrdjF4Tk4mdCxdgCdXKW9JcL1NaUN8FvCSfwU6mL6KFM6sE",
  "key11": "wojFnmWwYyPJdt56tpBJfcWfggVbRwhPeh73CDScXSBz23t4hixg4WZ3fXcWpQQ5PiruaDiv4fitY4bueU6QKtX",
  "key12": "54ej1eHXPxwSP7anuRpob5fr1gZq5xDkbV92VqtgkPPrn7BBy9DgrZWwN3qvtNGdK8o2r64U8wJwWXrY1NZ6kCNL",
  "key13": "Kz2UVKfqckCf5n3Sm5TMTQhass3vWaJQjzUEpz2eUXUjknKSF3cHiem3ppNtv74hG5KwKfRAJaTgrox6wCJqkPx",
  "key14": "4V3GXcZb3LEMrebAjTBx25ywxNRCwWSoYUFRZtaFUrgAt2eEi6ez6kqKB8grpqrzDVkhCVZxJrCC2DMkvHPwV8ah",
  "key15": "zyfZFhJyT3c2QW1UyC9i7PWp8TPERv2xgudQo3jKGvANQh1EuWB6oqC3h6DYaxFtikzdrfESM94k2ohunrmMKSz",
  "key16": "4yYVioC2Db98yyZynuvdayNQmVuHpnHCDikdfUsDDi27twSispnoZKxXef2uRkYLsBYsp74ER5AnF9b2MzegWion",
  "key17": "2HKAML7Cz2LZGaAvJG2vb5ajSz53L2VXF1pwtiiCDP66HjoXfbc1C6hJE3wtcvHYNWHo1DKXnMDzVv6k95uMBA4c",
  "key18": "64GoZUqgW8hvpcZDxkn5vdJdKVx7QFsTGoLpXJr7272UDpJUBmWFrhzeuNX6amsQt6sU6gqnsyfwWThfYVtrDAum",
  "key19": "25Rk5oUe3NoAKshwBDES8neEuNxm3KaT127o1EcberEL33aAfaHYyAjyiybNNo268sKx4WB3FwjpEn9CnyPZ5mLZ",
  "key20": "3tR8eMnkVFew6SzZDfTkm3x7jNcivfGzyyXpBWbBWDEzvtCXnFmoEdhVh9GhKb3ddrCqTytgV8gyq2rLZmc2ERJ3",
  "key21": "3azo1uL61DwkRe3QeiPkuEMEC2xpkqvfR2BQzU1GtzwavL3DLGsexfVJy8zengy2o9ZyVfvVgYmtqnkPz85phY53",
  "key22": "26uGTKgV4wL9qQkiAzbjMi6ZEZpEk7nrx1XqyvErog1hVWYzWjK1kU1PGqWt5NCvBQPK8wvpdBovZscuKLHyayoC",
  "key23": "4K9EDcW2r4oyZRh1N3LmigRRcfwx9EV18eRYHDkpWUQme18diskL6DCE2FSiqG9usf1eofUKqeexkuyXrofHZ7fz",
  "key24": "3x2ERJSExYGwju3gZy9cYrGfPXgSg7dZfGJjeyXntUZJG1TBTb9Zee1LoTykEUE9nbyLmoKfF6ySL3qbMyxXCZuX",
  "key25": "2vkx9Tk5X1Frr9nqwbdKWbpKSaMuXfc6MKCYP4fdxB6RcBuG8WtTt5btpcfFyL5hkeDqz91FEcVkebFS3zQQgmBW",
  "key26": "63iqFvbFUT9N7Ajn6LkNNeUhsa3sDwuwCYWPVTmYinkijWQDRd2PvkPt1gwA4D5ZJwRuXHzxFRDfJjAFf63CxMv5",
  "key27": "HcM4eabuuDM7b6UGQdcnQZNdzYZv6mjDHzv6ci7zFjeL46YsPXokzVwVinMzjWryZuoG3HLTF7uMcdkgT5W5FQZ",
  "key28": "2AHgMewV7thyiXPNj1np9X7Je9QVtmKJkYXQvD71hecSrPBmoQFQX9mgjC6odN7dj6qHbkDBAWY8TRCcg53MHKje",
  "key29": "3ESWae5dtY62tXbcr62oERsbgYqED6KGRLpuZosK3t6HSrPPX4XuKCv6oHCex6Z3bFa7hboTmbCxZFdeSVSLktqc",
  "key30": "2p7oHb5roEYSPdykoTpnN5mFYeivcW88m7zz5jds6UwEp5uC1y7f6gW3HijLJWuEWTGMApWtauQjyPBwDJGXAgG",
  "key31": "zvLY69kXx323RiAy88p6mJtpACh3TB2YYKSQ7cHnZvvFV82g1rwsgyRD31txWsmNvsU6QrPmAjJdk1FbW2Hursf",
  "key32": "4dq8xx2M9URWzrJEw3tFpSPZHpxj9Ey66Vi9qhaRwpV5uiWL1Rci8KaixMfDUA2Z4ZJ5u8RmrprhX21oDakzPj1L",
  "key33": "4yqVPHaX7DPp2KTNQ3b1aE9ZQMXHo2bLFfkwv7RoGCW2ssWD183X5wsN8ktiyAwa8PeGTW8FQQmnP7L5ChSz2a8Y",
  "key34": "3nPScnZMi7SWZyJYvPkhEzLW2GDjYBrJpMMbYF3AjH84p3FaitzWgsU1nRwWoGYg4ibyWe8ocUD5ZupjZyzyVXRW",
  "key35": "4Ughd73XmL1wumN9KgLFj2daMqcYCpZvBjwEdDWnqobdvNYaeckVnW3i315g5QCdpjqRRprzHUFMQapCtGqR2TjJ",
  "key36": "4DXnkmNi76NZaHuz7bTQTbYc1HJbKCRrseJR4vV9tjtsS8S5kv7m3KJgvn5n1bCqTJ8zeptmEbKtGBqmr9P44JhW",
  "key37": "WcZyhvhVr1kjmkBLZo85ppKWjkzvQ1F3A8okfQcF2bUieoNk5vdE5bw19tmdfVygasNKTrHaXNZQuEEkZNntpWj",
  "key38": "3eXZJNSD8EnH5XeTFPFYpCHMLbNfUqYpAqQjVdzQRFr8TnTmZgp2HzavFhLKrWt7acnxe2aDXsfiHMa9CShKKL9R",
  "key39": "2RJFm2c29fJrDF5dCN6mAca1ZXdVNbCtAGHnbpS1F8sxkUoxuAPZa9e7tmgVVHBsoczYeHahHsWT4R3Sk2qUiosW",
  "key40": "3zFgycYTjH5HGVKbWrhCoSKZFLtjdx83KMskUEadWRtjhCPbiU2Dzb6nyeNv7XCFVnJkHsi2GjnivemFUfuWReAV",
  "key41": "2dQcbAoz1wwFjjVTfbLmqWXeaMDRtwJka3yJqVi2gEkuZwuFVdDTeJwWdJUs5ChmXR69yjjMwWmdwj4HcdsPdm8m",
  "key42": "2maUTd8KqByAaeDQ3QafV4QfrFBoMF3EkUBjzjDb8SNHH4fkvQrfVDfNihFNrCXfSMTU4JUPYY46MhbS41tdDkQs",
  "key43": "GgxtsvCoaTwkt2h2Q4gCM5YKQDLBdAzW46ZE8VxQ4oWSgXRWn83YpRckvj1mq26kvDE2XzXoJANnzRVaKoe3WE5",
  "key44": "29ftSdtGXXQZeQxgwu6LH8YFkorFs5PMMqZrSLqyPUD3ZBCS7MfsYXe7KJUfqYFEiKELcfq18YhSmbBK9JAATjia"
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
