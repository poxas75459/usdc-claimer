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
    "2g72BYV3THCDsxxA9f1JWcRt5Vvv3nrfwqwbmDyjDHagFTZxNjt2Ud43Muj7Ue8hK4GoB7PkrZ5Cij114t27hq4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i2PVJKVzgB9VgDg1dR5AZDdUo3dXpSe96PqqSK2Tt66UhA8HqwBBURhoARyGLm5PEnGHTsY52NKkFqafa5tu3Yq",
  "key1": "61ENkJkLWSsebv5zkHJ2e2UDZNfuPYFT3h7E7zjh3Ds2Nr9tXXjYo4VFcCzCuFh1RrhC8RzH34YVobeUx49HgRUj",
  "key2": "29CEQY63E9vPzYwwWMjbhZChXHEbso9zjkYx2rGNXGukPMuNiR3SAwAuA9Gp8paikfkaSkYiqFTvHpFeWEArxG6A",
  "key3": "4fqNUGGW7WzHzhmWS6Ye9TxAnzdhJfh1fRKRXi2ZBLBAjgrGQZgAiz9bdQsYHHvpqQoUZCoDBps3K9GfWRBzLkXK",
  "key4": "4naHmPg97PaFj3qX1A4JT9sTdHQSTeiBAWFeELAXxU2uj8jCGMHwjCAcHsLPgM4jgvNsrJvYBYdYdj5SZpu6YZAu",
  "key5": "46QPgQeoYePcXE1bTC144ewgB18f5gxhzxpCgtKwvnQ8C7j7Px2pUvBWMPvt47XNa5Nwhg4bZ8riL2JxmPb3obwy",
  "key6": "tZgtjhRjyhHNzdMpt3HpgnbW6eF5eHr2GHkQkwXLxvnPL1vERox6uTFEPUH95kb8m6XGwtzqtrmBxK5krh8ktPD",
  "key7": "u7gnEaQ9e897fvzT9CaaqvCXHBwUpbvvwqezVmEjFjvr4QG3wMhzqHcASsj4gc1pfkNkx51SvjgWXHGxnZiPZGN",
  "key8": "5W3wWsCUMTP2sQiwieJcuytxFfpMrC8Z7NEjMLcDiE8pmKx8BkfS5LQGywaFh3WcxxAxEspUyozFbGiYJpwcCTAb",
  "key9": "3NuFJD6hhJEodo8qBs26H8qT3dv1fCqzVUMEYJ6zmQKixXQvVy7J6vbiZiwTLgUaMZVJyKMQmRBx57iJppJowyRZ",
  "key10": "3R1rXHorrjbSWitB5X8kQopDqi1MKK8EHe2XB6uXQ2ZV4yVsjpTgcqoNZ7EFNNJorw1aPXnt4hPH3eRJ58a8KyYG",
  "key11": "45fZR4iNUomSriBXaavq9qBmWEgPphSZUzMkHz93UtJnmcXmb7q9B69J4ZVAmEsqE5ShPCZy3UvdJtXgBguH5uun",
  "key12": "1ujPWyUZUdGpC1JthigH95kn2HXuCjyAL34dGGbwhdWDMnFCFKjoJ3AsUZJ88sKuRvboQMoPE7jK9rb3SAXibzf",
  "key13": "2FcXWkgpCXJSv1UuoZASQajBJZ3xo1D7eKuFjBLgUhth7TeCPL1TBvED5uS1YjVesz6aJtfyUjGgJe7BvgGSXYFq",
  "key14": "4NxXnsV53uQ7UFVyvjXeDxgG8tPcdCw4QbpQ9DpcV3ieumgU7qKbDpoxiTm7fuQX8LYyrZNcZRExFsi2iSbo5qCq",
  "key15": "643bdKXCpc2z372j3UkQ6577Q586SRB2hjbnsoA42EL3pHvGbtdZtS4C2DLW4FLin2cJbv5dEMb4YkjRYh4oDyE",
  "key16": "2EZx5UuPPb12C3bMEm2cRUR3P69njy8GNPsBnzDtgWLrq7ddVnXu8QZfSf6a4D8aUHYwsoxQg4njyVnpornXxqgA",
  "key17": "2JshB1cNmxbrEtPzmVwWfzrKBVf8tfPFEPAKkctD245S4yX1xa7fWRFBJkHGVZr3JabF5wX131bit7WUsG4xLerr",
  "key18": "5f1LRYmmqSiCNNaFDLZvLGkYZVYfxEwcwXbEyxR1ToF1RCTecuZ1XWnDGo5dT1V44n9UxPzKserGi3QzDJcAsDu7",
  "key19": "WtCxEzxzkmFbKBKqzxh5teMv3fRhQvAEhm8zAcv6ohYvU4NWFLRmooF26uej66K5hFaWGAqcW5kNL3ZoEozBJqL",
  "key20": "pxPkEN96sF5L1e4gLJ4KgHvBYJTGD7wsuaoNhumuPD42FHeveZHvSCpVt2cSgeZi9Y7xCc3zqXnF3RCTPgN1kQr",
  "key21": "5qDwqVdWDbtSxZdn3PpnzEUyYEQCygxSzTMWpAxqopYC6n2VPatmvoChsBMkUvAg4bjb3zzpknbZPW4En1DqX1KN",
  "key22": "mKFVuHbsNjLDQGXneixoFjitrrpaupTtAFfWgCE2tGdmz8DNe8RhZKTWSxxAzMiYAZNVVQDZB3T81agdaf5egzH",
  "key23": "3XckCSz5UCd7u3k9zaXSsBxQ7EJUp2TFZf6WFKP7p9HvTxY7jcnhgx62EeUpzDzrdL4NLcTXGPPjio2TUhZbXunC",
  "key24": "2dtgvPXoq1WicYCnQxCiEF6Tg8fTM4igDkzxNAX6FghTjErzRKNPhFhWeaENhYSfYhy17LGMXLGdTi2Vpf4ZDiXS",
  "key25": "5Lr9f9HHN99usL5imQzVnfGJrTZ3rbHhX9KCPWv6biaJafshzVFt4ZEbAMFvbcQvdTMy1DrSyURoaDePxvMXjdbh",
  "key26": "zpKpEZUrsuTuCTwW2SZpZy9dQMj3uwko393RerCabdUjHdKBd7cSFpqVFifBWVDdz6Ee3Us7A9V2QM7ywLPKaJ1",
  "key27": "5Mj63XNyFMJ8bUmPDPM8Uc9UcnbSoKEHTMHKNqBnosn3cRKvMUJnVb1zEozvqD3rmZa9xmzBZFprswEEPFUwAArq",
  "key28": "3nxKzz3Xf9cHGhC4u48mJDFNY4EFY8bBss9HsL5q8yV4ZCqgs81eXt9CKeJBHq96VTExjwFTdPNA5eP68s74LpCd",
  "key29": "4NJPHfs38vZqV4rpVCCXwfrQUHzqNdcgj23y4JvhXyBXpR97qfqmpEXXm4LLwh7coUBePZBtMk6xWZsqQwSzLpT4",
  "key30": "5TQt9DZiYYjgiyz8VqQJJx8NG5ZtLWg1HHkHkWwGVs8UNqnRCzMQB54JxqLsvGpYVAxxZJrd2dHj6XV9tbsCjiHd",
  "key31": "3ecUpfnR871p2rpUwvFYDS3Gn1Zs5G9gxNBkqj6XGL7stwKugtLDoch6xoF4HoUM9rxkMuFTQijK5G4VLBqdoz8P",
  "key32": "JTo5tuJc4dSeYCTdaZTpAoGEKRYiswp79wF5b8rhjC4mCeYJpPLqnNPcYjsd7ocVhhQmxYrC4U7XLWdtQrPWabN",
  "key33": "4nWBgDFT66T7yfE3YV4gNjqMGxbGsTkZ6Hud7vN9HJMzzj18YJ6iFooUZYHEawmbR6yeyeAgxSRvbftFUhb7H12e",
  "key34": "3HLJarypGAPuTkCeAXDCU22wvB5spamvdSsyT8hWwe5vHt74Gbktzoe2Ub6DEZUoefSv2N4UC6fdfboWYXmuePTP",
  "key35": "y4sDTG7b6TYxVYiE2z3PnmZXHXLTk8p3Zip8AsrFXUGs1p3Yfd4zPeqjCsoCifBFEfBRcaHUde4EvUFu4fyi6YR",
  "key36": "5tb8hz85eS9s1b6tHw3PG7jM6qBvXNtWsmmTdGxd6K6jkBThXM4nuY78dxfY61i7cSf3WJ1shHyzWbsiVVsc1SUA"
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
