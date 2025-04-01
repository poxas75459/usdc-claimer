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
    "2UY71r2tLuUhhKwUaNDSJiMGudh39DN1cmydP22yCsLU2JnSgYV44JzvpogEtFcmRTtrSrS2VMaGZd4PDLzv8wRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25SLtJtEUoXN8ZZ2PVVUkXLjgx8g2yTWuHuUDyjDZdBfur7eXUERjJ1LNy3YZ1GoRPdJCZTK2eXoho88LhRGzrew",
  "key1": "3xc9eDx2V7whnAA6qatnNAM8ZiJSz66VeQXKvAMqxq8kMWFSfMdDytoG8NzKYzvAv7sse1wGBihJLnCFtSsYaRkQ",
  "key2": "5F9nif33oZbnEiP5RSwBVB9oZtdXF2KUWE3YpHiESqm5zmswEvawUb69BXuAcBehBWQuqkpVmJpsFh7edbaqDk24",
  "key3": "2Hs3J9V37Xmr6aZNi8X2rAKXwk9L8MjnZp1cHEQZKTTAGQXhMY9AZE5Y6LG1d4mLFN2VGQbNMfcHj6wkHgRhr7ZQ",
  "key4": "5AMb1kCoqfWsAdMTccH2QTmnBjtQzBifTFVteUmmGZ1dJkt6PJ1chQcgW1MPmuhy9kCBv44e7i7tJQJRmyV4apwo",
  "key5": "4keAGYthtw6qrrByR4mN6sTfSmudMFoFsucQUCAViDEJXe2t1HiB8s9A7PQRM4bzd88HZYqpAFsbAsmPXWHpS1fL",
  "key6": "G9BEgT4Bn4Lv7nYbXJw67rkVm9z5q4rb6HH2diudFsrCScdyMBngKcMdSyDQAoSQ1rfru7hDzuvR3KFtPz2kyDn",
  "key7": "3rwn8NvNdeSp6WhhWb7NZhUXvA79aD7rg1HdDT3RkyKntCqCR9xUfXbETqtmK95vaa1TWAbdLCAvSgkzsvUBEPu2",
  "key8": "5s43ngWKhYGVNtQT67zoZpDohr6mKh6ppF9ukMXHLvumgF4TWVvuP3bJDV6Q5heognM8uXGMJJpw48Zvb3nB2icL",
  "key9": "4UffPz4jZjv5hgpEBBRu1wPd39oSfcvRXAbz9wWHN7gxtpX2gtE7wHa2jLppqJdzSQYfPuKLRTAJnVXhXrZaUoSq",
  "key10": "4p57zrfuEoadN46SPByzd5JbfE1LV5qCjjKtNBt3AvEdMXm4gnRH3FXV7yAYSnhvienJmoqdyvBVhKifxLU2f4FD",
  "key11": "3mG9GAzpHUVeoGCRSTXMpPrt86tyCho1aJ8pY3GGaHSo9zwkfGaruCp1sRbLu25BTRFLsELHCGRtepy2W7dQoMdB",
  "key12": "2txMN8pQDNuLYKn1Zzdosbh4zgwrvPkdwW3LcjNEpfpu9zwf6ED4y82hvcyY3Kwnip4TMXwxdAMZsTpAsauVC5aa",
  "key13": "5msArokjm8PnbPfmm4XkNgpmqqyJRHFC52fJJWDrVhjE3e6YxzJftFeK3z8FEwnpgshEAXZCLCv5AKQU29Mpop3e",
  "key14": "5V1EvmeRrR6geNx9fDe57764VEjPZzA7HD3HRsdiXqMDEn2wtVLb9SahYaQ98gXUrh7SDLZ4ZtkZNNEDBLk3FWpf",
  "key15": "5mmsqmhFBJraXbkFwCDiVJBzhFu9soW4hfsr5HkvMBkmLXc8PHjmujpxxhMd2ZBuremmyQf9beNEg7VUZpNQUtK8",
  "key16": "4J6sJcK87BpJWcFmqcoQnXZhQFWn9JJ3AFZnVFiq2zBafKgoyMY7Vc9HCodeuKCmbgNJS1gnUrhcEWCd2SY774fk",
  "key17": "4GqDc2C1bAUgwShzAMiMBRYHmwPSqJXwRY9ZtTvBg3eeD9XjujEBavTf2EfewaD9SFaQtk5ASEq8kQadyGhLC8V",
  "key18": "2v7Swhvuxin11NEGJXevr4XAezX9FX2XZWUFto2tsxd8uapqa2xwEh87t3FRUc42et6qT9qiGiQe8UnTnfpSG6N1",
  "key19": "5Qtn5srJ5N2kfkrDU5g7tywoYygV6ttUXUxAQGJSNQoXxefSQ6BGmHHdYutEJgUSdvaKC6FMhpNHKjSyFw5JBpFe",
  "key20": "d6MU1GGPyXzKGiKphpcRGzg2z8nh4ppQWgA1NG89jgCpEvrjNJQ847dcL99j7DPUUVFB9SJKpLr616EjPwW7xUk",
  "key21": "46uPuNJi4WYbhpsYqSPL3tcTQw1ovxpVJ2N7TC237fuLKvXiZCEujWSrN3c3GpWj33i9hyNa2iBZjsrdiYSdK194",
  "key22": "2pBy7QJPbMttfTbs3VJ9FdWV8JDyQDMBZnzLoe8zk13tHuWxbbHMRNp8UY6LBgFgwTMEzUWvD6rZJcAtDegcMKct",
  "key23": "2fWeDh3oEqkzeAQwH1wKE8RVJCHHSdKmnQ1ZUb45wpUpdGWPFy6tXqP7hQJeBdKemYRV9x1ojLQDprL74RG9wfYP",
  "key24": "2EECxAsgVD5nCuxenNnRX8uHRftACrAqQduRkUvk2PC9r2Ds5zg6Uj8Wz8Pus6mJz6fbsLhoeYRAvziDmQsExEk6",
  "key25": "5P679AGUZ7oJ8Gv4azULeGwJ6WvTMFoXnq9mqZzA3RRfNt7UUBzZBKJB4fTZNDeknkcadhJdPX8Exhr3D2CdV6HK",
  "key26": "2jfuVjW3K7RGZQfGqnRvttD6SZ4qgczfvcgtN6fvHv34XdJTY7MYAHW4z2VaaDR9M5E9A3kXxuLWC1A9cvdnJCvq"
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
