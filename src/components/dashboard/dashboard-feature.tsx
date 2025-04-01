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
    "4nkLGnvQuJTbu2JENkzXJi9vKX3CcrSQpfAa1nfHEuE2eNhVL9Kd3sRiXLVWYh1bsYMy9J4xSf86DM5M8GzPNZ5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aBknD5EnCvJ52kGwK3jYzQDujrwjyHSJP3bJRAG5y8zX2hREWVKaysxKj2mvuuaxLVkdD9oHQkfpXnzfanHbtrb",
  "key1": "52Ku6TKu4Vom6hadt5iKHXijFDcfNZt3YYTSk1ig5rNQEqQ5UV1HuLZJ72XcQUcPQqBx4yWicBD5vaXAtmuo8Xrb",
  "key2": "3EeY8Pm8jnAtSENAx8nJWu8NU6MuXVfnhLa1DT1xYB6WCikGiQsxHEHcXhuVpMa7GFbA8DKKRbbbkpn5w34zuvXL",
  "key3": "S1e8cm6Y6Dejkr3bfxshdqNf2EewXvDsLdxxVQgXnqWDKv5qTsY8VGC1DwPTCknQSyHqQ9h9DTpcEn2eatuyypS",
  "key4": "tG6vo1SQAheHBtjjLdkdXX4UhuShvt5A5FzMFC43usLh6ERe8PC2nLGh4LDuHbgParEuvfBe7ox2edd7Kn3y9cp",
  "key5": "4KaMTwBn8GDjpvNg9ST9hv2f27RAVDPF4CoiSfVyqUsgqHQwmkXVQcw7BwDVJWjxGo5MKapkWnGeCNVNqJJxamt3",
  "key6": "2nYf75c3USDWgUV1zMEAqQRw4VFmgBMWQi5DzGNjsoL22wSygtixGv6GuTGB3pmVSoSC27uQCvhEw9gyBDARUssw",
  "key7": "3CzBH8wg1tLHKUaWvZYYJmy9vdMwcdP6xxGvwpCQ8WE9qEPdya3BpkHPwtoHihGmdGNsCGJVXmVvVMLr4CNnek86",
  "key8": "916ndi6cUwaUqs99Nj2ayACK1zMyoRHC1V9GBhfjy1HyJe2ie92hcJWiuqh14JhE5v3KRvw4YL1MGWskX731y4V",
  "key9": "5jfCttyqrZMSHGdEVRuQV9ugguj1gLnVUAhtnZiZc3WTCwgcCXxT8cztYDj4rjorapc2V5zwM6F3SV7JJRry4uHV",
  "key10": "45qTaisMwGNAwqrWhJhBGCVe5viY46DTrpFHPbYkh38qpjKWVtJtgimL4owzESuwqv86R2tQd7QM5GnRDcqauuhf",
  "key11": "2mGQ2xc1uwohudXcieQFKZ2sgVNXqkuV3J9W4WqB5JZtehYMFpkFWSHBY67dHdoSnGm8da2Wc2GkR55P6RGjD5t6",
  "key12": "Sws6hW4zpshkMByJenZBygTKKsJD8yfE5b4f2joggeQnVc3HHDTams1jtFkGXL3rinLzGTybfeaa3fiswAasvv5",
  "key13": "KXLLM62F37R1f7YXeAwsDTwiXUaS2jsusGHW9mpE9paz9iCcZLHTJt3jRywxDXaBEGowM9Md3PxwkK1E3zFhJ65",
  "key14": "3KarKfrfDLbQn5eGFuhtnBBKCSM73BHxwC1LX5kehfCQJfUEYVvuAnZBNU5sGLvhCLnDSF16mjDcSgg24NG6L4WY",
  "key15": "HhcSK35vVNRvBgWTAijVb1Vc9yEKtYigjpKLdW6b4Am1ttxMNgu2pFJm4abTbEgu1qPyARACAXArm8BksLTJcS5",
  "key16": "JTvY5PNiG6K57nMHWc6AtdVYkVZo8WxCHsEomthYUiXg64AKBHf6JwQ2itqAK9qdgJ7uYZAi1RQy5zjBCAcPjmS",
  "key17": "3PnrqUinMgz7v2LnsEKTLV7XzPo6d4XwLq6NKd2yzq9dtMBtL4Fth16nFqUuhc8JN3zr92jPgStipXFF7rETECrA",
  "key18": "5oQoztiRTXbarHNWjq7YW2DxnVWGN7rNFZaXrojsMhiAobcvWUmY2vZT1JX8yJ94KoXNJQ5SY5rEGeDi4HP3E9uR",
  "key19": "4yfWDRrUMXjHS3uNjvWojRHhFfMejQhSmR2sy1T9WpF1WSzAZZ9w5qZn94AdWyFgHoteuVCq8cnXaHnBoHnizM6h",
  "key20": "2athjY6iBeupoigRVX7Bm4HYHvXzANdXE66tzXADJ1XaTLUQooR1dK85qXwkc98ZqsddcmcWjrPjJRCAk1nigQVb",
  "key21": "5XHG7PdqpoLkGrZEjB3zfV9ibB4PeCrP2U8BHcdfR2VnSXb2HVxVeEZb61Jmn46xv8iYW9FRp3tUqGjwdCvqRCxn",
  "key22": "2bYUGBZPiPWFjNCatrpa26CXSRYEoSVko4PWRm35mmcLhurtwoP4kq6Dsf1Jqrboe9GDF49STdncqz5jbmLPL2T",
  "key23": "29mg3vkR5WoeF5haJnRBm2meWtiiUyKMZZ682w3yWcrHLVA92CTvmngRpmm1dY8dpL83b6GPxiAm6K3eZNQK7NcU",
  "key24": "3WSEPitu9s4JMwqPLSofgHasFPTyNHvgt6jTbAi9Y8acxbdP83RA8kYCuYpX7qALdyjaC9NnbCunFs8F9n1e2Qj4",
  "key25": "3T1YhyUugGCsFWQ6wbWNtv3Bj84cqkmkma7LEz24HmdxoXW5AQ6xqm6Y18fRNcu39cgdwv4kV3psG4Pc2xbA3vmY",
  "key26": "3uQcVbJJpgaHc5EqhsVGjyNbPcGSv1JEyxh9GzKRVd8EDGCvD4fBJx9yMwJKBPFj9JaSoHjBEbDRhzaVRdP5CNqZ",
  "key27": "3soXd489AG4JzkMYKqR23VuBAP6ZGqrH94o7ZiiMe4BqWnbL7aKptsn2XnHDPv5tuWWAMEY2hhGRMXKf5nVHxZgb",
  "key28": "3EvoTcxm8ovb61ntcB8KGYvDf4bewn2eCm5yuX2VAKxd47mrJ6AMqX16YgbALjJghE11pRHupWrbLgLayZ8JmwPJ",
  "key29": "2QUradKMEFtdHUHctPbKsr9yBwkdScwinfdwMjGwSjr8vyPGTSRAbrGzz56TQNWV2ytTbUfveNNR9cKwodMtmRax",
  "key30": "EWuehaXcyLHAtDXkNsxmfiUG2ekhE3va9eBumAusxUNSnLD7sLej3Yw5eBG923wsQzeedGUGaJrueU6WLoVkaWm",
  "key31": "39X9a1ZqqZsynmhtoVdpHM2G3yqDq9TKLNkHvYWXL7mfmG8qoGBLK4V4XTC8E44hPQbadC9mBTR7iLsyEmBHkiG4",
  "key32": "VzVfwHyZieiLKbhXfxJ4rtiTDzRjgiBi5zqrq6zysbEMZbxboixJ7BeiPHvgfL78cMhw8ivgdZvQMvbHbaCRHNh",
  "key33": "3Sqqxqkg1FAArSkvG2gFnE12G74LWDqxzMP7XgH5dS8SJbHYjSwRQDBAYiu4KNNjegackBfLjrLDUzZSLRXJZEqN",
  "key34": "47eLjHaGrXw4FP6rzTEo41gGAKdM6dYWr5k6QuySqjSvjMpHF936QYnL1G6gSzPg7hZRworNgWevq5yQesibY3ZJ",
  "key35": "J867AcqGPumZHCL8qwj77ePpPzz4aRe4bRLacesjsWJnGJvH7WCcuJmrbHfUC3iMgoJes2sWEezx5WoNpQ5BcV8",
  "key36": "5HGTrYbNnVX3LomPqvbygHQYcDd53XqoaxWXFsm9N9NTwbbcA6qKLMKEoQK722wyp9QdNjVAcn59jewMyJW5SSXL",
  "key37": "5V8y5ZhVkTE3bEXvppjrUPFQCRjd7HouQAKAiBP7KwedMt8mVCAFTB1bnZHU24GT8LH7knBykuZNS6xxXxDavQQz",
  "key38": "2sHqizqzd8MJPL2nENrG3x76rSdMBS6qYxrHN2YEcy7KYQGNVw6jKHCrDYToc1JEVanPrwmtdwWj3VtumMiaandD",
  "key39": "2YpxAvCdES8T7gMXATQGtkYVVFSsQeGmQW62xycBTUHsoL8oxXqCEc7Yo6nX5dZ1JJw7YKyKbUv8q1fYPdNRFED5",
  "key40": "2983b1SSQ19i6xtUXNB5hYBRdMzSuQW6Sxyi654Da3dQhKx7vodxArGigyc4EGwT1oWNEJgrDt66EBdeng4SPWk9",
  "key41": "21sRe7G1t4Khr5Ea2VpbPgDn5udSBe5paiukh985cZgzecoW8sujMAzTmQqjHULPLXEszwRK4i3fJ7EY13BjaP5y",
  "key42": "2D3MVxhwzpUjia4d4GN993F8FoKQp3pfQVs4CAMwMyLtX5vjnJRRrFoRWvCmDRD46g2JriQaDYERMtQYFUgTrVwc",
  "key43": "5ZuWKjHhKqaV4qxJg3EtPFR8fXoVefVhKV8FiHDyqE5XGugpRdFLbw6Ck8x14wVw1sjHhcs8WcxH4NUN6aho9WgZ",
  "key44": "3MPe2Mp673LrjcjAzrcaJTaAJ5xvPD7rZ1BC6Vh1FhkyE3efSsqQJfFVBbH1Pmf87zsGRjHkoYgLpnupWGwcSG2J"
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
