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
    "2yUyqQYcFMA16MTqgiZczwSqDpye2pjNg5reoyGh6vkGSBAEDkTAMZqC1EFv3uBzup6u8Rhmh6dnsxwPF4UNGp6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2URMdyfkLAe17dbMvi4yZFZWY4MFSmgypj6wgrkE49n2u7Mj13w7mbaPNSg1gj7YGPnmfj2Jav4u7sd6CenBqdxf",
  "key1": "3aUtPdvRmQ8T8BpTcnYbr45L1zQYEL1o9AucJ6nnoFHMzrTbDprvFnUWW5M9CCJjX8ZUCXbuLpRjCDamivEPK8aJ",
  "key2": "3T34F61T1x2WjmTqRZxtakFrpKvT11sSAxAv9zm2cUoc47j47KXBjCP7w3AXXxzaefUqpm3eAJ4CeYJif9WATQcX",
  "key3": "qabM2YH897wtDPkjGLQjWk3pijgWEZZz1pp811pb94cXvEpB9uLj1FH9pQimShx5Uo9P15LSEvdbhnZAaMd28pV",
  "key4": "5PECDkfnhioFmGMwxYbL3XJqzuDP6UDSyNdn5j2JD7CSVcSUpAuaBvgTVqu6qFydTK5ToYqgrgnohjuAzJ5yxBLm",
  "key5": "65psam8Yc7cBrjJo19g6oR4xp2jTxUiD6pRvzbWErRnwYnsYCqx9zeBgVuL5YFuoKKrsJPdKQRYACAx2Coy4WPq4",
  "key6": "58F45atzQipFKE71DDRE5ejSV4oPUhbz6PmbZjj1mzmsYjQwH3D7DNq9JYHktJ9CFpoyy5ZqVrUr23W7ghqvF46Y",
  "key7": "bLBZmdxqvM22xxFqqcYj2nopGnBcM8TsZR3bAPRAQTtwEw8cfKydYuZtZ1cUB37zLCCo55sRKRMftzatJGNw2yx",
  "key8": "4QS6qM8fgpxxXBMjvjYWtpoZPEnAqEaL53mT4XzJoRar5Md3q1FTbHSceztvQ1DcFKD5MEbh8b62zq1ek9Vowsxj",
  "key9": "2GEf9qjAMYbyVadEpL1ghnKwTJLGsUKLyy2VSMnUMxAde5zh6FkeFL9uRR7znGuqpnAUKeBMQudbiHgCgo9js92j",
  "key10": "PuvdQ21YPNzuzeFGzBbrKVCvX4oDLFjfhWssxDSDu9LfjQxRJE9v6ybombCgAphheQSuMw5AUr1e6E2qeDjPa8q",
  "key11": "4ur9bweRQ2bG2NeeLkS8FZVWhhYSPsFzptiWWYts7rZfraBe68g4K8fZpCdyuZpeEXHHBBCM4WBwAh3UrHpTaDNk",
  "key12": "3BomvPbQEpNSkotikAhGzZgwNzJLMZ5XN9cAQ7tLpYQRekES3tNwxFNL84XuVGoM4HfgmuBNZDsr8ByKvUpFty2T",
  "key13": "2dv7RebN7eS8Sp6wM96p5e6pKoMHJuMXCzAQv9JwSAKrmxmcrqzdYpPBUX6qnq5CQ2cEViEPURRqk9v5FFPYm71E",
  "key14": "4EPEw1e911obSQyC2fdamrwQoJtmoMJrUjvGcZT3xsmSKCnqFfob1GCsN6e8w766Lw7HvBy3uF37ipPPR88bb2F2",
  "key15": "556zCy65ZmU6qKWEph6qAvYn9t7ZKhe5w5HQeZ8xHuHpwSSaikozkJn8nkBgJ4h7x2rET53nSsvCXuUxCA8AR23Z",
  "key16": "64BaaaZWeHe4ivr2KQV9JLxaRYGSsi2TN1PGwWi23AeTbssHp3VEMKAr2JuzfW9KFTgnvHUmH1X4S459MRWXzwG2",
  "key17": "36hFCFJkTJsgqzTN9LPPojwzF3VfbzC2VtDLT8nadZqrMteS73v6dzK4JBPgEk8FbCE5FreuuThBse2Q4tR6ewgB",
  "key18": "5fQDX6Ur9BmF2Mv3sNsLBrSryExG5aeMEbKAwBDeTdc6WTc2dThBVpude1RxQvaqAqrfcZRvtn7zv8itAypR7UbY",
  "key19": "bnDNuJJxCD8rmJLCUbCPB7z3BrrZhdPpeMrapt3FY8NXsRc9Gc3ojfR2B8hkdxz21WSn1JUzf1QJP6rMWNvTUEF",
  "key20": "54sYEsRdcdiXwM5hJTuZwKqYr4oRTD1ZzYmhxbWJiNabQ3UWjAcxyjWqCG9zivHUkwCLusRqJj8tMoqYDzhBrJ9N",
  "key21": "4qPWg6mwt8PvU7mLTXRmGujmYkBubXdFLX65u2RSiYihpvhFeUx4QyZAGJqjANoJD64GPmcJ3rJQqv2VvvNLfxFc",
  "key22": "A32na5XUHND462E21GK1ME8i11uryRUdut2Yyh3PXhvoxKUbhkPuJtocTBfEXnUcRznscPCK9iTMwNzdeLLA7ZL",
  "key23": "55vXdFGA4GaabiNSEDtE6De95fUaQmHjPgocNNhxR4MC3RQ6rSAxKdqSS3fvwePnxXYXAdk3zvG7RA5kmtZMNMm9",
  "key24": "DTbsuKamdkLUR61EHjXE2ZxFd4PBjC1j2wfPy5Pj8xbRbzEv9qKd5BGfrr1fWvSynTdX3nRNyQLpeU6NW9VwpiE",
  "key25": "5qHSiXXwhic8cYRwYjW4NKbnQUu6h39kHP8bd61dFA5jFZHrbNiWvqq12jdiS6rXbQbnppGpHGvk5rNMveUocSN2",
  "key26": "4PKXPN4pZ2shCGwamQ7T4bm6noKJUS2ByQe4iArAGkxra3ENvdCY9s5VG1tEayYTSSXguxsLGWgTzS6auY5kxfQU",
  "key27": "5mHNj19mykUxCMrVq785KggJoCskVLXnLMCQf5josTiSAjb4apMziuiPMpR28isLgS2BJ923GwyLa7bStYtjmnff",
  "key28": "J47qjUiozv6qp3ENrnVm3xJLPJtQssbZ3QcWkYwzEL3GAB5cVpnFjWkNGDjVgmU9K3j6wqeeMDx1ow59KYhRuvy",
  "key29": "wBHiuEK3Tvdkmp2shD5Zwk8JJx9curtCcFTdwrjzVsmKKgruZFjHMysLBMQGvRTqFuW48JG1VvjG8nGLiWtWMTm",
  "key30": "3CdA9pgEvsPGJP8WxYwMhsquniqd7WA6znE2WmP3RArnLpnLX3ywJNxeBw1oi8Hnczw2iYGwKdek438VsebUnPgX",
  "key31": "3Z4N4zxD3YN6jxHVUiP6QUYT1YmVVE8kaQi45JGHSyC8eLUWnjg7L75suSTa4mV6oyQnTxy8mYH9BTSdGu5LBFGG",
  "key32": "4GSCj3FpgpxPz7x2dK8fGFhBLg8MytwHeD8BLDkaoDYtD8SyHBQCLnTAEk11ibyvgbdSLwrDWReeewGPDNhUw23T",
  "key33": "44zL8t2EcDB17q6cfHSpfVUmKvUas4dXJsR2UJWv9kmFkjtqwzQ6ivJ9ht7bFRB1vgYPdcDHywDNivwrzvxduG5F",
  "key34": "2jGv8QpQD4FKdVemEuhQDJXseYF1zVUQXCuhRzmXpp3LnuCWFo2mikPNfZmgEbc1tkeDbeh7YQjoSnRyipiMJ3S6",
  "key35": "7fKmq6zKeSTxXi4c7fSdF7979tJes7Pzczj5PcVA38ZQiSzU47rE3wpnLoNkGBnR9twUJ7y6NPMj8xBrq8ySnmd",
  "key36": "iojiqGfLX8xwrDowxaWPbnHaZ2tZQPVNQWSEwTPWfhvTVjSYtMmvmFkeidy9mcyyA4BS8JiE7zLoUgN8e7VsgsU",
  "key37": "2H7eUwUgmQr7o7LnN6rXckjc4WqLegHxbDok3tvCkNUK6EC1p33JX3uz8CgALiF81MYxUWF7pYvwMNvva7xxYTC3",
  "key38": "2VVxA6G2Aar7ugANoGDAzCuzBcMmkv91HfJ1cwo22ADE9TngRqE4dY1zx5iU931nZgnHUWwBjmi9EwUALrD3V4T",
  "key39": "2aZdgADrrLEUPJkwbj1vykHjVo7Cj8VyQZKdnpuYkncALoEzxSQZam4TfNWNvu7W26ai4438o2dKFbKMtvbniQx",
  "key40": "eXBZGqJnewbBUugHTkdn8znf2NgUSFGmA3pKARWUajQQuHeLFqZUV85SycufUb3zThXtDs1WPFoqt6vFAHFPsWz"
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
