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
    "33MWFq4cbJm8dKvGeKeY8kq5DwpFyUxxytQ26WsMif1LiU9uigCP8ddS8H3rbW6kQdGjrPXrMsgafBPKCpccgvee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TtwFDvEHTKifp5YbouiKsL4Y7AJaGPyuZffCGQiC9QRnZF6jtcyRRWs8hWuYJLAAC8jXhKsQPhWBQxvBJLaPJU7",
  "key1": "4gUhaFRH7W1d3jLioVriShLNAbHMDpohjCYqTzxLVUUNzvT75TPDvZtifpj8VnGHe75mEsunTof6LJDbPFfUCeVq",
  "key2": "i7N4DC9v8D1FkoM1sDBtV6KoyEAekQbRng2RKLns31PBsBiuVfPMDgTmJjig7LSnaSNDgysopbpgj5EEhueF9vw",
  "key3": "3wSn2YvbKSbDeWDEJLnXr995iRFgkBYaAuVkGRuDDdMPbPGXin3u5x9rcL87u6tx3vkG9xSMWfZ1EFHJEwCdubHC",
  "key4": "4Bbp1oBVTLYNBQ7izD8QnaxbopazKqHhjPr8pM7BHtjYe9YswtaLqBiARFo5k3GRooy5QoVdwq8XUfqjQXQRDGQY",
  "key5": "4KpLmvXuaokovFbJ9ceyBna3utAjG4hrK1CzcqGzXMx4go7ZTsqx1jNGxs3E5XmE8QCqKvpbW6FGfDH1YtHTUxzY",
  "key6": "5wnAx6TYin9yvnRN6sXNX7c5899BrmCyrwaphe4JPKYdjAEnwPyJQmxyaq2BJViLXZ9SEQQaCf1GZjUUoPUHNdSc",
  "key7": "pdqvMoDiPnRZPZoYWLe64GmjcTuWxsW2Lxtw5EGp3ox6bbDiLLJYaTPuNASJqRiaF7TLXkcojmGj7zmRbnSn8xH",
  "key8": "cXUg2Nc53iWrMs8iLFyssVF6L21fLVsT85GQNmHAXbVZkL3GiWtevmVEDe6jsHp87n862aeoEW8McWjiz7eQrbk",
  "key9": "GBtEUSyEYmAzNu5sgdeB8RXYNbpW14EyR7DdmjkpkaSgiwwVJV4fr88s9ovZsaZ6t8NVWX3QadzprmjF6Nw5Gp6",
  "key10": "vYnpxBJSDHex8f3EvbXWP4z2wCE8WkywLHPF8XoodfL4xNyArD8j6yZGg553Chrbd27dPZ1kvUUGuKTdSDZu5Ck",
  "key11": "3nwURxtCnj8cCHTivqE3kMqC6u4bZveofRij8RnFPS5QyMmNWXqqYEJHm1fZFAwFPV3pq6nno1mP8et1NwyBjRh2",
  "key12": "57DZRtApv9nib8KqyaDtPD2SKfnYi6DXE7u7w2QfY3pEQWq4cTpERPiFCrvt9Tyrv8jEcN6rRdUYFsXAt5qz44Wk",
  "key13": "2kZ9MPZVzViXgoDWWRSNnUbsbip1W5sFDk54udqPUCSkQBA6qGaytjvixnEK3MBSqMDrZTuzVKAz2S3az6NnSTKu",
  "key14": "2euN5Z4VsbPe6rkKNLtsosuxMZmvG2BWpYCFBC8ZkMGxjWjaiQr9APEqVSfgw5sNt9WGGTzGbLpFGBz6e4FSpq8i",
  "key15": "4iuJKGgX7FV7KZyYVWMUztgakYwxE6MkDZuJvw63d5bpmdM9MnCi9KsPWvDDV6pa7NRfrJaXdqLKkbe7g1Ktscru",
  "key16": "34d3S1mSCE6h4qbE4RKJB2fbJhnXGCUnLtvF5GKKcg6oLh1QDqRW4ySJ4foGJdq2nnB7BEKfV8Pv3YWDHgAj7LNY",
  "key17": "5UqmddhP6hrQHQ2q893QRWVqq3rRcVCKi8ZCsjccucyBmAzSJvG98y3tYeWvicQH8cUpi63eDctL9F2iVLZz9HoC",
  "key18": "2G5xwSLcgrekYYrUD6rv3hPVGyWxbzUmgBfJ3uNX4enTjM3c6jRkSBFMyVkt7gvpVpAzae6T1UctkyRsRMkJ4wkM",
  "key19": "43P6Ettgdn49ThGQr63FQosBfB3U3C1ZRZPLU9fEUPypeJQCjWX7WtpyP6jMEhFJCdCEtyC5YLh5VBoJn8Zjyrh9",
  "key20": "41HnBhxgCX3WPPCmYcx4aaE9tmfXT92Wh5HdWx3h2osZHM7cpcDsDcYTvsBc7RCqiwgDTYX6YyFXDzwT5VhTfUyB",
  "key21": "Rhp2e3QLxoMsB6NaWPYKvZPTnBr7Z1R4FWaaQ3XF8RJZo5Bh7NDWMDNEjrtNpqjvxvv67jAu38A3qiv4mUwijhX",
  "key22": "4JQ6Y1agqViQJw38PwhUHBSyLuctpggF72P1nktEaQKDgyD5PGCbAQCeZTktHzLDcg2a3Mu6zgrxQquRvzXDqQQT",
  "key23": "3CbyaWjXY2wJGzvfWQpY5vUKErXCfhZ5LoFw48uZSUQ8uoyJD9V6hxevS2BZBXmskSVeBqzar7yF474DTpkKhT9J",
  "key24": "38BewpoXPiCTtfCY9vAvap5yS2G59CwqEzpXcESQe8ss9YX8fonHVMfT1KDgmuBVJStMzA65VkrAB4mdAXEZ6p94",
  "key25": "vu8MqubYAhd7UyycSxj7YxGPwZMuZycLtw4FpFgoLBavVgJC2GuUYwVAh89rJ6g1rEo7sijWtQBt3BtSHJzs8zc",
  "key26": "5jvyBqfHimaSkeqCoeh2WWWv8wc23H6kH54MHdATJVKLpvdUdWc1cnq5Eju9zgqUhboQLnuk4oK2V1CVzXJEbT5j",
  "key27": "5h4MPPqjqxo96KZMqMf7SBQSa3vvUy8kQpE3vbMFhbe8W59waFg9jzwSH1kKNz3Gbo2vdghrj3BiCpiZoL6SprtN",
  "key28": "3P2XTD8vjL5hgMZE9DsA1G4s8ScibepCvRzuWw9h2fZkXcmYjaHzm2okbNeUTrtJMqYTH1kqEKse2XCp8NsL7g8Q",
  "key29": "2wcW1gRQrYpVyoUMWPNPNdW5j8Bv9emhosJ6RVJESLdJNgeMwDxuKizuBw1HbzxEVuZqwKRxyE2REdX5yWXa7Jae",
  "key30": "kU1mBeQLhYF716eYv49cgQDkTtb3GZ7bkCFgUBnARpdh5Hoixw4j6RZhFxoZhYbhB21XvAg3vHr2u5oykpywU4i",
  "key31": "2t4NzgGbBbZjyXCtxBGdFZWNdsp1EdNswcnGypq3Sdrg3oHGZ1aHWDWUexFfEniXUdQKswuNE9SqdyHnvwRkgdzH",
  "key32": "5FNHwTtG4pAXSufyngEp2X3Di3NV4Ecov8X9T6NDPUNW1UBTEdoGpZP4nzeiFgxBQPt8CGeShdRQMCpKkrMsvhqa",
  "key33": "2zpeNLL8BezRLrBdiJk73XYKS2nabB82TnwRzaL5UqiNYTz77HKEg69E6c1bvdHDJE6YGWR4HZCfFkiXaJ3xqYnX",
  "key34": "56s7pn1oayFDX7KzhXCVMq3R3UfjF8BtBePdMXneeK4xGKQRQdbLM6tQPwqmSND1hoXr3fQnUqXMxppYiSZ3Dnni"
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
