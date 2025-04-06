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
    "yed4nS15zYD4eVWJGVXLJ6QyajZdSuioT2RvMFq9r8NrnFUpntTC7HabRwuQVVY84rKeNvRyTNqvzAkCxmtkg53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GWRZxhPpiYBLaRR1yBK1od4mxkPuCUjWVowBaVqgWW5i4iEAtUbfcJPmKp7TCn6H1pLcxjpAhrwG8vuzXm2C6wM",
  "key1": "P776cD7SEGzkDWDHXwit9CSvdUyYbnoKcpTbuGcBeNYwwb5q78q46vtdVD3C92axeQdYc5nCmbRGq2vCm4cfZpz",
  "key2": "2PJEghnAXX6F5o18udaLUZv4XQPuX38rdExusRLodAtFnqgR3LgGY3p6w3eyVNv9AaJX7XV6icGDjWR85YHPKobY",
  "key3": "3steb3XoaLzJCjPvUvnWH71F5R3C7wLE38Srbjm3mDt7JfSxyCPGb8wp6KsEBsnaKZ7PJ13aQjWdRk4HYP2scPCj",
  "key4": "3kyehSzbXcqDSRV51F15U5WKMmWmQqMKWk8Gog5rsJh58A7njdcTQrMn28CZbLxtbSvoCSUKZfLghT7QBrYDNXqu",
  "key5": "43R7EYxMi73nEVRfMDBem3gWweNqiR2sBCkWNGu9yYgnuQX2YJg59EF8kfBAMM2RGKV9PSnpmrP1AZPSvTxitP94",
  "key6": "5fiQgRZMCL9DVRz6xQFNPzosLh6BNAgyPySbRStuD3WkavS9ZqTbr2MsRYDYexFSJjScyYWPKAcizJBitC2eJ9b2",
  "key7": "2qaTJo2GfPGMsg9mL1Q14dAoMTAWEr9UBQHgQazByrKGxDHpERQxMCp2mw9haZq2DGFto4B5szusCGXYHDWhRcPF",
  "key8": "X9V3ESJ65bvNwmVH9crBDE7SwwPphmZAD2PCtY5UGqLvZhLajyGrAwuLJQBqYLzwyXri4kLzYKeGskM9XWsAyqr",
  "key9": "fusw5rg4sdCWe1z9K61HzhjJ3q7NCDAxVbbf466P6v1DXtegnZ2tJDdk3JVnX57gWZLk3mziJS4ZuhqWKZWYS23",
  "key10": "3iEb9r5kDwDntDeGfNEEvtX1xYS529A17k1zBmqj6td8Dc6g5oY4WLpVVSgGtgADRF5NQMwh44UdDcosR77xGydB",
  "key11": "5w5usnC7awpmufZgUhQgapJW3TazVXukcBnKm6i1fcSsWRgiFGgTd9RpxprWj5ZQeeESModbUJmxc5gFz4ypCQa",
  "key12": "2Lg7xdpXbFRsBsnGKDEn7TZK1YbRDWeZpgLZTZHcKgfSvxTo2e4eHYcEMQEXzMJEdQcDHnTTTeeBwLsMmU8kJkt9",
  "key13": "3i1nAJuC8rgBkNQpSKJhWhTNYrw6s1kbjerdu8KVL1RTnkafVTFjfemRgGhKi4htKUUPooyxpG5VCnqTGs4s9Btk",
  "key14": "4pZu6DEX1HvHvFTpJzrJixLCZQ7s8uogcPxob5tzKxhUV5HMRST7Z4MD1nhbLENCCuDSgWE5UxRQSgazwVAE4Apb",
  "key15": "2fDmykg4XPs6pp7YANEYmUaLK7hTcT5kKk6vzG9XUxj4pSUERymh2s9TcxSo6RCWETJqXgYAWrqNT3YAwT9V9QgF",
  "key16": "vrhetzrvUD79qS3SpJkuXAiNcBHH6wyysmHxcfaoNDfiq1x4oxngx1AFhNjU4Dqz8inmU2QS3M7SqQXa3UPzygq",
  "key17": "R5htjFmo9wMk6KxaA3GkiCeSHRro1Hu3yjApduXXzHuG1Bc2ouDXbJxMTWiZ29npuCH75UpVxZ53wZ28VvCfZ5M",
  "key18": "SVdGaHpuGQex6F5uNFkjUkYeFhQiWPccNDG6iu2W3hDHzC1nb4Fq7LMTZgTxGVujX1PmvjnH5RoGBkf8VgXYqme",
  "key19": "4X2d19wL7g4Tu6SQbBDd1eGPRM3K4UUGGxqP4vuDR8SSY29kP1JCsXNB1URqy8irRR5f11Kf2q6xXgEZydaHurtC",
  "key20": "3pJDznB7ihqdp5TiuRELhsiQECtZAUnUc1FAQ7Qtdmw6kyKVk4BHSYgaLvWtdDvKy2XPL43MD5p56Fh3jyFhXyqS",
  "key21": "3ndsGYKgjHLzSHRkKksrG8gUmE2vRhP3SXrRHKZiAbbWRQ8JWCKH3nPTF53vvTY1iUvv1Mgt52bgPQdEsiUyzgiV",
  "key22": "5jd4yey2MknahuUay2oM2jMJMaaU8sp3Siizq42hq8BkzJrrJ9D6Yp5jC444LpN1UuEPhhjRyzkXySwcwn5M69fG",
  "key23": "XqXxxQQNFpsW3hDsDHcLZ8Jv2KePkgojsAnwhDGV136oJjkWG3uwuYdwEDnT7KnUEqpkjMYqg22kUcrXJ1iUUjF",
  "key24": "4DCgi2mrCp2hcDqzAFuJd49G7fEdV9KJdjd4JpXfERoAmvwjBeBLrTBcko4W95yWHW7Cb22AwGwt6sKX7Z8vs2EC",
  "key25": "3KbC2VxyY2J1kG1pJxgKCqT7FAfh9WjfWMNmubgeM7GGuq2gzApPZhrPgPYRXAaZUaxh37DhhRRXDMmotP4uGYgX",
  "key26": "S63rE6RAkDbJxrc8Vs4i5wfJW8QXxM3uCycXLo7TsigTHgGGw8ZqChVUyraLuZeJwCvHRvsJL52jCyvTbySaJQM",
  "key27": "5rMVZftZBTMMbN566Kpn43WttizoLL91in12sp6AWj4z58izttaga1uWPRXVYv83PEqB678aeR9rw8M76qexd9b3",
  "key28": "epC93eBEVAEgSRKKLNqULFb9m4KH7AstBzodAiF7AHf8R5mbTEfEUyVM7N4sw5B2RdXGBXvqiUWWqRFmMeGg5im",
  "key29": "58RmVzPatNQ6AGHNKFEXdoY2KfbL5j6LgEtgic3rCpQCy643BHQEU2NxM2vQdtLv42FfVp9JT7iTR1pCL1WT6RER",
  "key30": "3aNg8zHj9UgPQSNRCRjXHH4NoMNdAeYD7yL23Ej5ypKTD5FXEi3XXgVnYgvdiLoBSnbyrUJ9twuv3wHRmeh2r9gD",
  "key31": "qZ27XLXwTx3U88ps13deTWFSQBaNyVujKeVnSd4EhCpVw4dXGMKb3fr3whpnqWuzKL6KdQnhX2BDjpWsGtXsJqr",
  "key32": "PbHwkww6oohrDiKBSM78nXHcQvZ5LjbN5g74GyJzHWzUCFsKcas2quJfeAXkmrSxydztSXvMk71MaKFjs3dVC7S",
  "key33": "5ypwjLKYdv9ePQ7fFiAjJRNq91zr47T7ut543Vcwoj14ZKVyNqQtYNNj5cyzhW3C2BLsevCU7i8xTDhxG5Fxxfp9"
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
