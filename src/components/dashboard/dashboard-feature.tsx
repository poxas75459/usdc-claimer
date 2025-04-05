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
    "3egyuEHnnSa19Czq3qc9pLtCd7hTpjjw7osgMzcGA4edAirUJw4iXUcHkbFTe2kRf9B7p5L1ZWgmt4ZoJQaWMdVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJJPqoWWz6JeyKBCZ17kSn6V6VdgrAZLb2ZQ2Zz3kGN8iinNgJrnV7swgtbUrHjVqWj9B5pL6gEmv8pUKHSS79M",
  "key1": "62dZe5aXgsfEF3rbnB1ywf17hNiaQBLn962sDo9chA1iRbYZtUKyT8hXhC3AgRAYMuejAVsre9799gYAPENUorBL",
  "key2": "3c1rizM26M6U3Wzb3yCScsgeDJYqDKVYy5HPNY25Vq69Lp7LDfDNYPaZbaLmYeXxLvjf4U1gvgf8WLxBXc5utjSk",
  "key3": "5qjYKK3wtx6dSM9qTK2GJbbRjZXPUSW2racjwx2aFS2svuum295X78nn551bjjgRjY9mwp3eFpqFwVPqs6ezv6oR",
  "key4": "5Ums5nqoE3dYEZkije7FivT47RM9jTvu11yhLdDVvnmDwisXQfRgxZYEHc4aLQdLb35XyKFFZqKWQkNBg9VrdTBm",
  "key5": "H6BeakXEqeeqBMnrr3ihnZv9pCQXNtytxn8Eptm3buvhA8m5MCVJMMB9xaqS7xhjDmWjARmL1EzPmar4PqBMmRo",
  "key6": "3LFmMgxx1pLUANp8ENwcWMtDRW8z38BVK1QAV3r5xQyqTaADfKc574DiCFXfuTk6oBbhyKao9HAAsEDLmKSKsfya",
  "key7": "21NFusinZSLcHStkgJcMqK8xNM9uVyZc125eYTYiC618PD73z4g4uoK2Ur9iwcWskGAyBKopnUVvi3kzy979bu49",
  "key8": "5Q57aiJE73p1TiW7Rcq6GGgS3ATv8gt5UFykTMf9XXwy4Ssp26XGRkj8kxpG2ktHPC76VhzBh4GoUocSb3G2ckyQ",
  "key9": "5fg3w21WWjyJhW6L5qQLiwt2EPrg6mzU8A7dkhrsj38VFfHYPg3pcEnqxPyJNzWX2D2K312QyasDdfeoZeNHHNmV",
  "key10": "5V7QcJPcGY2JmPFCe1M1fgyshNQGbkgkrLRzxqHYPzxbZkzAvbwuryFU7qJ2k7KLzvZcAdrw7FmrsH9tvCYmYwhr",
  "key11": "CH7DpDefxvYdPkv3o27xx9zJogviRtnKqTp2qQb3UymQUwuWBJLe3NQn7iVjA5SBw4JEdHehaN5GZag73N8vm2q",
  "key12": "gxUSLf5adTJ5UHJ7QXXbtDSidW6n8D2sV8XDkYr6Rxo7McwRgY4QhnR56NVT7R7iP5MezVcPHeLYu6RrvS43Lgt",
  "key13": "4Z45YtcneVr5txdebjbkWWcZ8G4c9YBuRwgzgcf3VbBfaVx37GooPfrJDJTjbCM2VqFeBubVjQfBZgDKGcc8Ud27",
  "key14": "2wVdhjXsWQ6sbHDhd6bg6ZUNLZ7efuxme7mn5qqm24viWdNKAYLN22jHT2mhn5BivNtGTLQQKZo1MKqApJKY89oR",
  "key15": "2pZ4CnNhPQeWC61UsfqhKa5H6f2NnwSDkKWVpWxunL5c5T3T42WRqvjUqnLmZQJpVk3p91WEeK4xHhAjKSTYZMxv",
  "key16": "2SgxLwTf49hKgaa3raG4PVfuTtakRDAUbVEcPdwTgboj2LS7w671jEqejqarksWnHxu7aq8vrdK7ZFDAmvGFNJqM",
  "key17": "qBtMLzJbFVXyWghksi33csMt3cjkKekfwMZdYRu7r8jv75zPqz71ALdGLxxBNJga9dsqMFMgoRrC3hxc38VNDqc",
  "key18": "Lndfa8CrM4XH49cmPz6QPcQ44CEj6g8aFcCiUXjQWskcWDQ7sRsC39dPrXZQC3J6iLEfTEH26SJ9fKNyM4Qzi2f",
  "key19": "33xMoW2dBXQpTxBnfPKvqwqgWYomvuPdtVM3TeMhxCmuoMu3TVT2y3KkooRp2zS184hAPgXSaanbTj95WJ8GoLJq",
  "key20": "5XALDGxTzQgHbnMGjpgb2GiMNr4AxvTDJmKT6dATnrersAvdj5W2pnqkYyCN62DekcoSxzgojvnUUzgVKgRRQhWF",
  "key21": "3p8pfYSsXTot9ScZN9cBvPMtZmRKsRatUjD5Yjg62yKL85knWcsgBRvrDaLhtCDcqHDokXSpCX8TDP2CKJadeDyp",
  "key22": "4FXzv7QcHzqwTBYUbTSG2BN2g35TBUeMSWb3pELtnXwpq9PaJLhuooJx5onZVaG8ivnmGEni69pc7eGnad5dyGvK",
  "key23": "4r5S7mDr7fzk2cfmo46N6FvREUJJmcdkWxxa3aCoZ6pMiBFSDMM3jSbVFqU9HQN5qCoaD7bdBcuaJBqSj94U7xGH",
  "key24": "49NywQeMwHxq5yW133NS1yPRr34i8xMnBMDFUPCS2F4aQCmGbstqTUoA4GY4m5FtSi8rPbQauazQr2SzVDmSB8rj",
  "key25": "4mhxkgE5HqdcSGmb4WrTo9BupfbPcnX4CRVjuRUAd1joh9b8GdDcuqCueD7kzbJueWycQCWp3w14xBGCXku4JKR6",
  "key26": "4K4mQat18FDTRpWCPJ4kqid51sWE9oMsuCpZEoXiWipUG8mnF6JsViGYRzjvteTY8gNUP3rYQ8qvchY9dvKxUcdD",
  "key27": "5sAmx7vqQFhS2uNX1ULCTavod51V3yoXq5QvRr1i8eriBsQHcM49i43BkGKFaDgQDMfzWaibqPk99qSdkQoLocao",
  "key28": "3Jyb3WEWCRzCyJrZJUewTPauThZCyMCvKaiHtLAJGW7D5yR3qDwiRVkpDEf452RraAw8GQ1TAuGLjH9TZ5xbrJ56",
  "key29": "sZjAo9Umn3STtM1hNeBHt5ncQvDaA3ANMwbXT5ZMcprx9h9DYAWwFVLe53F4QeuyS2SD6omUB66XZWkaZQ8167w",
  "key30": "LSJiH4BjUcbnXjdsqbz9egnj2ckVq8qFXrSqXtVdxSKeGkzsmCyQfcdsVaYUb3keUXbU6RFJ4ZPKrqaV7FpkfkV",
  "key31": "3FFAfDZ9Hp9BASiyQmV81PNzkWjViFxfeaNja5Aht3kK2DqC6Gk7evVLK8nfZcQ9VtLuJVJpVgpP2mQxA8JFsCey"
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
