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
    "3xu8vSQDPk6hQFwMVLuS2w3qiu1KUf7yjZ373x2v7PZ8PxnwggKiSdJwkNcGkLBfhYNfqvZq7VXMGzhk3SYtdnew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uYwVbvXsWWemQy7VuZeRMA1jENHtnWYuBys6x8svd1PjpbKjyDQFGfk37B3gdSLpRwdMUj4MSxkUMZbvD9pGsZH",
  "key1": "3EM7Nji9MrgepwQd9AC5NWPECNG3RZzWt58iW8G4MG8qW7yxpXBFc5dTGvmz9GkCsgZPyQaERt1efsMHCGmeoDA6",
  "key2": "2g8Sf4t1X3pPJ7H3ZSMPFXeT4LhzeogemUsaMyWa4z49dv4cqpa1LWNJwb7mSEnaQFGpcfFBfgrVUSC6Zj5DmRsG",
  "key3": "2YQzVMT8xWn1XC8Ln7GUj4DhKvmiW7ZZVnuUpCa9KKGTAUC4rzZTAc3F29EanC4KXEYZeberdDTBeLP4YZ3yhSgm",
  "key4": "mqq2RHde7xKafNLv6ZEPE5pai8Fk7unq494pKg4pdZuog8ub2ZiuGvQXQuEThdU1hPxG5zGe7hoRJzPSaFZF1NN",
  "key5": "66KY6Guh3qjGvGjLu7zUxM6mqwxFmeoiUMiasTT578thDqWDJdSyzQK3m6amkWfmZM3YVeda8rHxmVs739iQe8z8",
  "key6": "5hnVYEmv2zgnoDX8VF2fckJxWzdtiwqT7FwDsnjii62pAGur44oKmAeb1UH9Dvz6xWEj9vDpbgDd6ExjtFGKnTHf",
  "key7": "2Av6WKoiXAi1E1DzG7jCPxwjt1mVC7apjDwnNkNJKGGKQZ9VC1B5FAsezfRBTqpMM1Bzqs9vjDar5iTxW4Tq6bKr",
  "key8": "xzujF3hZKMgHJeJVisSqizQsDgG7FrspcuZE328jYPqMW5QbAbYdJ2fgu67o85CrTpfBnBB79jrbjw1zesaGcPA",
  "key9": "QGjZ8xJLLyhMy5UkDYMsc8TrsQaZpqwnfPYfgkW3xLqwQSsNVBpbaBCS9vZsxCJwoXdPbro3NaYfqmitDduHCLy",
  "key10": "3n7cnuSov1j5ff6ABYWJdaQWGJxGkQ6gCHJZYTJpYAL3GLpigSajaBzdyEkiTaM4XEFjsyTA3qTGKwXLNWoeF6AE",
  "key11": "2P6RuiHzsBoxJtDziYqG8t4C5Qnp2Nf7hrEwh53Ldbwj8RaVuvUccSmazS1TDBMHgSECCV3ntLzZ6w95kTzxRYAX",
  "key12": "BpH77o5e39oFqpcLvEiWtqCGKDCEx6gjH2ioBZLWqvYBmBakBHNeEWPSBsSCBtfqRdtfbxNdZNdiRuwLNm2aVH1",
  "key13": "yBLoeRUFEYwEgMcYR7v1hJBf6eWVFpemr6xPC3Zj7KCZ2jSV5JNb5fTurnvZeKd5xbPA6yE7rJNr8HCaJmSbjmB",
  "key14": "Mk9c6SUkxjGCXip3uUUkRfXxyPgrP8hEY4SMvW1XmA5UoUwwy9wBE2HBgEZcezMJscgug5wFUeDKTu6s5oxZnJR",
  "key15": "3QmHSt5xuo6rE61Zg68bC7QPGRwCjTXS3S1uXFPYGyaKiPwXw4awhFLdNxUfibKJsoVu2uReXjaCSiFBbBsaKzkZ",
  "key16": "FniiK5ktCBmWBguwVenQfJ5Uf3uSfUJycEP8xacofTsQd7iXNcLrCaZaqeV8peqYzfjrDseu4Y3KGY4tv5tY72h",
  "key17": "4bTAEBorgFRyZwUf4mUj9zDUzLWQNsA5JHDX4jY7MTBUooacZvB8oQaKQhKkJPhRhdQrH6iwCTe38bk3XJGF2V85",
  "key18": "5Vp3BXYppdEQcT2JFPTcdj5AmEnWzaqeNUUiiPe88r3KgG1eEahAdaN4rHmcSbvnor6A3M2A5HS9WNsCRXhqxEtW",
  "key19": "4egHyJvbjXheGm79EFGXUhmpuxQk2UP4koqi6Vw9mzQrFwXr8Vn3VDfGXSJNuUvPiMCwpWsVxiZymB7xg8rsc7u",
  "key20": "2wBzbnJH95zuzi6f6qq5Z4cKxzwx7N3Nc2ozFmedKW8t7TWKzvKVaLjPhmPKtjTv1PbGvaBiuvkgbnppGNc63zBn",
  "key21": "5zC8W1k8HqQGdeE9FBMTDdcdM85uMDtsFoFNtyWgCtvqjFSzyS383K1E5c751mhxm7aniLbSEGEvAC9jC9PGp18f",
  "key22": "5NjTMiwK835pLq3EebQ9FWEWjP9YmCS86AQCiJG3aQc1HHNueKECH8f9Cwm8srfj185W2vogCSNYJpj1wNkkCbyC",
  "key23": "3B4JVAwhpP12xoVkEozMrGyKbtZxSGxbMUEPN4eAmwocY7M3jxzB4aYxFLz8cE6KyHQB5WhyCSKYZ5iVgNwUXtCU",
  "key24": "3C3v3Pf1BkGhhqN34FFK8SoTXzDSJRrYJLbMXS5baACr4Ro7EhA4Vry5a4iVbiGASVJHjufNA5sJSZZyQBcRNG8L",
  "key25": "5fgrrYXcnAStiFVnRL913oXzM3nB2Tn2FAAjhwGQdYS6M5H2DEf2k1dM2qV4VRvH1553zKtwjHNaBETmhX2bMQrJ",
  "key26": "4PDnDwGyS6iJ7EEWdqrbVJGyeNAeiM3xL2ahXKLnCkvkcZiRvk9Q8S2KMrATsdWL8CnE9FecEzCxSKGFWHvp6xeg",
  "key27": "2woh7YYYLxCoBUFrxnjk3uWyb8cZMiyT1za4rwABYjZ2xjhrrpDEUqi7P1YeZ4FaTiiPmEUcmGdGDFSs85Bz4Tfd",
  "key28": "5nYEMUhvVLqqdSwXXAWDm3jJvfzfs6A2vmT8GD9doXQ4CMJK6Uupmk5m4NYfbywxdBMmCbr5dsSDhmQ44XfqR1Vk",
  "key29": "4kq1ALSnNmyh12DBGCPYy3dPMcu8TSB71eHS8w5PX3keUCWLSYFMJq3qTSwv5QF3tnveJRmFzid3iY9F91P6H1wC",
  "key30": "4qjF7e4svHveCzXcbNDF4ns5QkjhuVHR6HSpnC1oNdGFtvaG3w57tDvKpzZsBUrzJZeLVDe2WbEgCWQn2vp77jjF",
  "key31": "5tXWseA1En8xwJWy4PdiQYGweCqoTVUttAmV5kqsFyTQoizcJtCG5Sr4WZUcB24GGLWApRKFzU9L9f8Xr8qSH2he",
  "key32": "4mW6836oDjfuyrLJ99wiVAwf5ysHi91yky1SB3tVckvP9PqMYpTHvFrJka45zjeg9ZB4j2zyJnZ95KPaRmBL7WTi",
  "key33": "4hWh8iax1NkC1PZZBbaiL8kJQQ94aJx7W2HopmHkSM39nPixBFBm6y3Ni7qpyeN97AcStDf6MREJnyG5SYpuBmat",
  "key34": "2158j22cKXrMmybse6MBLwfBYd8fDFnmwRoahDg92g924qEpfdSWzbXCM7RcTzi7tg6dPLqcmuVnGDgFvNBJgffh",
  "key35": "4M4edyPY27S5VnLbdKickAKfU67dn5285j4eZhm91kRTyMUW6rxioR4oEuAWXiFzA2V2XG3YtQap3YATKLfzWUdH",
  "key36": "4ydVvXmqdSX6ic5gsYz7o54akUmGR8vqi9DBawtS7QiaJwgfnPufUNB89coPo7GLh2XeFkvmHyAAns6NauA8D4Gu",
  "key37": "3wL1eamxVg6wwYVjhFpjXecw7qx1vamp3tBg4DVkMSfmzqQGZx4aJbFbNo8HfokTPmcrEaMw8BgpQJ8Nq3aYaxDz",
  "key38": "4gxCybSGhyP3VaMe69Wv7DFH9iwMs7tCJseXGbFxGvm1z5UQ54WAnjxQRzhmR5s5pzf6CfeNFUADZwAHrDLvkDF3"
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
