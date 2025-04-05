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
    "3pkQGi6axAcKT9LdPvN1UgkjeGHgH4CUR85jy1TwtrrEuyQxX36g5MC55CxucnheAfaZ6m3oy8wj2rCaEv6kg3Kd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37prof3z39beDad8nmstHuaBMmJJM7s7BDf5CNyCpVXcUegoxhcmXNVfrehCubvRAdUiGUG39ucq7sMwMNVQwDGT",
  "key1": "2xKjxK5ucwF4enCoqpdNXH8xhpUpJDqfsDTun4fad3bSJw4rbVyMvSmxZwZ2nQRxk3QsAh7iUuLJ43g8cUoMstj1",
  "key2": "5QsAtSmi7ur5u3tgURn2qPRr6g3P62HwX4F67cNpJJpKrB2eRpNzfAdKSe11AUe3rWHo8z8cN9rQazRPbHgZCuJ2",
  "key3": "4Rfu39mgn5JJ1PAzu4VRYTtHTw6Jod4QvwFQz41xGaGGj1vfAgwxmCtGbhTKeeBVu3rj4iyG7BmygAmLZjHo6EH",
  "key4": "5TXmLRTTq9HWZYtntSAmPcH9nwHgGDLiqAJgMTaqDXvPo53obbbydF1wRN8XMYqNNXdmTZNYNUrATuv15bXZcgmd",
  "key5": "29HHXBNcRsPBeNk9vM7oaaw46GeBqVghvrAFww6uTtj3m16GeeK8o8b8xMpJfsWBCGqZp2KbrvPPSfKvZy4xuTGi",
  "key6": "3dpuPGac9soyHTkLfpWr3p1LU7SGj2u6obYerXzGAntoyNMVNdhA1eaTfmMNF6N4DVJNs3sjkP8JYdXXxt7TWBos",
  "key7": "5JoRCLR4zRFEkemcx96Kac5zZi3eLr5mxiRfsaGYDH4QaMuiMWK3J8hAfnMqMoBU23qArhSWg3M7wJBuN8veCyn2",
  "key8": "5iKTjXfFUngwkiY7FcskRLoHbV3NDkJKGDr39qsrq1Ggisrchxhc2JT65Hnna6k8qJSPdGhRbudfCr87ipeERNSJ",
  "key9": "3bEY9yxpmMjUMmJY2Yci3L4MMZuhfoBvNhDHVHmwLrHXV8qeRS7e5SL4cWJqNNzao95JWL62SKF9M4j2cDBRy3g7",
  "key10": "5WP496hYGMGSFmNsZV7jpUiSLxdUNv8aFBdSGrBCVawiYXgG9ZUomSfgxdguQGwQPQezbfXnopnNBHaJB98dB5Z6",
  "key11": "3mAP6YJgnc66Bv7tGxXj6K7UhrhU2u9dm2RkLR3XbjicJsNiVLLmGZCuE6exFbb81ShfAEc6Fq9d4fBmenA5PcUu",
  "key12": "GEjaJ8qRMaTiEnKjPVppiwNXcSHcUEPUCENWJbjdezbkyD4E3gbzT87CDY6vYGq4b93rjGukZSh3S6HhzxGFsPN",
  "key13": "z8wuibEduqj3K6G86a2JjN5o9dJR2U1dt6ABAWBSozbu6LpjWYW47GP7h7JcwCfFhikDskmi7nWkof5JkENNnon",
  "key14": "VYn6JobMjSpqykQaGijRHerhp5phGppFhGTyQ5YtZm6qSwbsks61jD8G7Vg2SAu8VgBiZYsC6cuJeBAvSjGpkLn",
  "key15": "4gtrDg4D2tauEX9TEkDePaJqZs8JdDWov8vbrXQ6jJJ2JUqSWdHTKLd58e4mjGHWAcFihNszLRkKnXxEaQ95TAhx",
  "key16": "MzDQGsi9FtZrboC95HTvEHqxjAhibGnxK7MXTHR6SUx5VYHrftc3XTB5TtYWPzHo3SoTxuVmQLfQcviJ6EcmbUd",
  "key17": "5TbSXKgqbQEQawsyQ7nGcGSoSCF7D2RAuidkVFyXLpEtFGKuPyhiDk6zqsi74mz4iCdNoCBHD1SE2iQ1Uy3d8rth",
  "key18": "31TPRpNx4ng2Q9QNKVhVTLB4uTqs6XpTmtoq9tfcPVNtncyKu4Msu2furCSYWtaWVAMc34YrQCuHCpHcx2oCcNL4",
  "key19": "4fDyPhwRpzw2RDqbn1YwM1ZiyN56MnQud6HAx1seunY1C7TqJ2NSkf7PxXqe4PbtBK6eFnELR97bnkFjJxfiPCwE",
  "key20": "5dXZFaUuv5EssXAedyWTvd5qRRVWhk5zYv7epWRccgxr9qSbQqoVGV4WzkAhhPGQXhwMLH2gJsNiSC8xQAdDzGP7",
  "key21": "ZEme5vYAsZByAibsxPZkHbSF7Wu8UkBZJa7iem6QV7hcejRqcQ6WqnvgRqLQCGuazGg6jeguvnTWMZfbxjCyeZU",
  "key22": "62Ldj6M69rxSHuspeRnj76ZkLZ6kTTJcWRnicZMbS8m7NNg9ScCFNYuQLFkpviyApvDvmvZA8Qp1SCoNqaBVwW6x",
  "key23": "xRsHQChGFwiyRxLXVpXc1NeKCXtJP52krmud52oZ7TGuPPvmawduxY5MnGqDH6AZPytaprnwc3qXnWgo2ja3zEF",
  "key24": "h1uW88q6KjbqvZX8um9Q3GzvKNTcXr282b89FHdKuQ6dePxCsugi7dGKbMgUE6Z1qBWRZYgr5Dh5Kw3g9S8NyeE",
  "key25": "4rc1bGMNE5nMPDsp3iS7qD4pbpFyeuwaM1cZg3Ev8r4Xp5vdQUYCXbYSaucemUeeRX5917YgFVsyunaQbLELnEyL",
  "key26": "4MVzbco9nxZt41HoTZoSKHtZdyVYxysZwXtbTLHff11kjY99DGNRTxSYyn4NDah3ywCngknrTK2SzT2VrvRMm9Jh",
  "key27": "5t58C9dgn1uEhMcbe4W5D51iXG5Z51RSXuh2z9p13gkGCgymtB1SyNPPuCYKXhDfBKnrmkZTamYwWS5NL24fPg76",
  "key28": "39ET6fNwhz7LLwXdQdxeJP174B3Vwg423u1yqGAywYZknwW8DG9FmCCwQ8ZfoVXyRMFpZn79kLRWprEJvyLj2rEx",
  "key29": "YmUzdhu9sZqEXynZmsocqe74iuEL5zo1Ku4DjPmUgJouJAgLj13LGtLugy3HFswLbLgmyyAtJuxNkDKkJBmescj",
  "key30": "25HdcW2UMSPcJHMEbfD57vKT34bWZJHWnca3VvjcToVzFTxF2dqoev633BSEJbJvfymx5JZ7GorqVKUR4oX6Avxe",
  "key31": "3ZWnVo3GzAJQft58Ld7gZ4RadRPNHMmoksttthe9AhSsqqAsPPtDUQkEZbTYKdmifpobiSPgjouMRfG6ZZME5Qq1",
  "key32": "2t8r3m6fDjPGbenJUSWuqjhrdkW591vQc5XXa7MRc5kYHGaSmZE6H9PbHtvMGvj7DSDGy2zuRAAzTzK3fHwz37xZ",
  "key33": "ktWzV41a63xAz6AgZFv4SGMrxQLW9uhYAttiynFzckwH4RHs8kwVVxrtax1Zhh1PXT68vvhg1akqLZ7269uqeHA",
  "key34": "q3RCAAqzQJtsCpcEJ32TqA4UXA5S4hpiL1itVAbBc5tRzzBuYmbD1ukVXBKfoJS5QD94FbzFNcTPD4npXE1MrdY",
  "key35": "5veKK5mj8m1Ggs47DQGmjcErgB2imDMN98ie7JDm8F8A24B5vWTpgLV6JMqjsDywCkwnuNHMdKdfAvSTwSZvtASo",
  "key36": "4gA3TUvKWAJEXEasnoRqhMZuGz7Wo3Ttyg8eCPTJWMd7XNy18yHRYVC3BWBQ7BUp8s6Mf8eLR2JjJ8UsbjdRZ8mb",
  "key37": "38nEBL6QtVDfxY2RrwRpNaH17d41V3w4tThuvPC2tNKaqtdPwwBXrUVhWoykUGMp7ofNYomFR96JkEJFC5DX3tNX",
  "key38": "3ynjD6vhu9aNeConXGgRQZST6m7tCuB9gEJjqoghG26DkZ7QSUjkUUDWsjZNUeZuKKc1FyBmGpTUmD85M52jJ8qd",
  "key39": "43re9ZA9juUyfEsvFXBBanbaMF3RcqqTvQknN8duPwzt9sDPdxyZerrA5RXjjgnjAzw7ywGhHcgH3TQU7mZXEix9",
  "key40": "5p7Y1hfSHtGi4Ksutip9wAckfHYc2W5F6SDNrkdtiupnwiDoBCzSmKp9JDJqpARQJLTvfhGKYf9YVA2KK4HZPGg2",
  "key41": "5innS2MFSmgknjyv8ZF8m1vAgxxHpt1S6JDDpx3ucJbCDVHH1EoszHEm1EUZqpHtc8fztQMCPZRL8qLKT6TciiNh",
  "key42": "3h2MFQ23f1P7WqQNih9oTxEZ27sSDhAtSbjTguWzfBhg2BbviHWwzrbZDk1WUsq1bE7aj1fbg1vXPZdqGhpTDZ7Q",
  "key43": "29UVPfe2FttzKZD4iunrtXaWihJcygrC5WHd5Zvo3jeehq2G1zYd9h4e9cq7UuspTriRYNpy9FhgCphgdgMA8U2q"
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
