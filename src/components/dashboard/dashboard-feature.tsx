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
    "iokrtuBm1DHrPtDro6rx7r268V8rmuVWMMQXUzxYW9dp8LfiQqorkMNwNCG9wUJ2MdSJGPcXwYJg7Q8qZmoc2Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yhQnm3oKy9NUcpbmGzorghfKMcjVoBqyScmRyG31R2Stexf1euKXXNoJ8StaRSEuUozmmtFeuWscFrcdEZrNKj",
  "key1": "3povpqv7yqp2NZbHp8CjEMA1e9syWR5xksMwQs9SRj8rcLWmLQKSLaHMutbkcNtiibk1wvJ37MT8P2FY4vH1nHdW",
  "key2": "eXPV4xoNt4pA3yDxHtmxrJ4LBhmTy76mH1i1oupfoEgXxekCbSCep1Hr2issbL1rf4JPEMfvNnmEX9iwTdbKvMD",
  "key3": "z4oF7Bi59L93Z6hcrbvhrKTa8cNm3ekp3Gvz9YBbQsYuCY5e67FpJ2eaNdajvAdr8RqaAyNWudfXSd4rZWjRgJN",
  "key4": "y13LTGjcHnkSmf92cypgfrqoBcUR68gyPDH5kgF9ZbmeUofZTnApVMMwu6fFGUHH6wcwkVGRADnVY8skhYEvp2g",
  "key5": "TguqxB7WuTG5TGmewzJb1dRuaeCD4x38Tn3LkvJGYYEkA1YvoGwgzPjTaArKKXbFdqQECk2P7yCwDys2DJ53azg",
  "key6": "4yQCWgReQQWmsFgiKNwFLv8cXiqtR3yFj3f1fqnEnNypCepEHftVaNZAzyDuivU1sz63GJdLNpVq9BDyPT8rynKk",
  "key7": "3YY45QxqfoRFyJfoBTX2tT4b8Rv3VPz1JJ1gworr9GxBb2BtWSrSvq9Q9hBHUfHgjyuHDwf1QsEJMSXrHUPAGZAL",
  "key8": "4oonmQtsbY9iQMZhwmWodP3KaLjUng9HMrhYEoRykH799xs9y4HrB46nunxNN7pyPyaJndi3YFPHAt6Viedizdbv",
  "key9": "3RWvHe1bABAXttQL4ApewWwRSJhD7L2m4w8ai7N7EKNrqBEbfF4rxbY6LLD2F6iyVbY7qzNkBHA9xJQSfwFFjaSd",
  "key10": "4LUX3hwS5thYf9CXrgEJbWyZAkyvEr6a2i7tGNTkMiNSYGvthsdyXtMoUEk1RhGex1351DvRLsv1bpp5WiuaVz4y",
  "key11": "29vEQC7cXPqbCHB2mo2ywXvoFB5nQd53gYLjXCfPcFNjnpz8xSqxVZfFoQuxdAXpx4E2pRf7bmgZorMTexEF9JYK",
  "key12": "45XL6TDdAZ9wMoavQY5VxKyZd57fB4z4yUo3dJwmPJt3kAskkdXpwRBht4CJxCZbDmtie9oNSGDGWsEyRN3rTBjf",
  "key13": "mPVUMPYBP71m66QtkBQ5SSnhwwNTQQM9ejXAzw7M3rYxyadDk7MHBbRiFG6XCKskbY2UrADRDnxE8YWwjgwRrY1",
  "key14": "2xSNJHGSnVYf7etMomrewQ7278dskJxqhqxikPqWMUDQS6v8DC6k4YZXgTm4AW28FoxGiukD4gJibWX79P6M55RM",
  "key15": "2kn11pDe5jNCJJ2MWH2oPmc1KALv8YgF4fBH7kk1XTd1RbJzA4cT8BDbXjJaTj6YBmN2f7afwxY9KET4vY7n2uwk",
  "key16": "5s6e9K6rygPuUQ5UAS7xZ3feEWfL2apPciiyfush6eVaXs8k8gJyqA447fm7CHKqczSwVe8nNH4hdeFcisn8AeRG",
  "key17": "2DQkS6p8kftdgEX5AGKAXUBzQ7te5rfTc6LnuewBy37X8ccK3sCGDdokSq4jtBdeb2nLZBvnYge9tmgsmFhyaMv8",
  "key18": "4QPNmQWS1G1wxon3WguxuzkPksYbCHByLDm6puKtv6vx2sbE3VQqWzmytnW2yf3SyaePSCA8paYy5Us7fBtX9awG",
  "key19": "5cSURSDXxPytvcUiCcy1R9vnxEh1g42DrGi6sQaeKr2nRBikM8HKSFCCZUAGgtooVPkrhQC1ALnH59Aa51g5AArm",
  "key20": "64itNbtwTQMAqSksNt1PanjFn8fGQ4km5npdweLHoug1m36LRCqpjTMhrBCe5DsgjfDBUhZNcut9npwbp6ZQEjZt",
  "key21": "2oNzkxY7eFXz7kDQPD1sDXKw4bFVU2uJJkFUKsiKGGXe6bdv8ic8RdP2AZR6Fsm4T18HJRt9Th9J5sn9fRTRYiT1",
  "key22": "VBqQ1HNeHSb4ysKVtENPBcaGnqfTzA3updKMrxbVGVnzt6zqWvppgNY8wqSH697DmmYR6CPZ3m5gMRSLTsEFSXD",
  "key23": "2oFW2ta5sFpwsceM3CGe2xqZCAjdxmF51aEDNuSwka7dZP9yM7ad4Co2vD6Edacrb5JUQefCUPKE1UwHm1LXJrik",
  "key24": "5iXQkyxNXVJvuWM8tn6Mk6fiERNynjZDFkmpkidxDEh1WMvGnAK92eVFYwT36FwhT1t6wBsQuaa5uQnDTWQWPJH1",
  "key25": "4VZe3Hj1h5oFeMY5etLJNeBDTcnPZZXg9i6XkEPKijYX98U2j3aoUpCjXJymtXUxBG3mVZuB1i2CdhtBvKSn1MuP",
  "key26": "4SsWvUuH7q5vXKAuygBKWfepuB4ZkWemXTParFSKaJk59BrJTb8oaWSDtXrUZ5KNRCgt5TcJDXP7ZAmUvou8sCwq",
  "key27": "8DXaV94wmpPY5Xmu2cuy2oKQ4aLrFuibDWe3vZqZ7UBM3RmfyAUeCkCzH1YFXeCNnT3YfyZKsMgYw6DYa1uZ3Md",
  "key28": "4U3fbdbJ7xiLvEab19hhiQj1nupaJXxweCVte5zVbHN6E5XDyu1BjqyLSzfh42CmizXyZueFL6yiGw8M6nJBhwMM",
  "key29": "2YkdzEczxpZUhYFKvwo7C3xr727Yr49VKSTwmDAFaF4Vqk5uAmHuAkzE75pNQbEf9k4BpuVELTNbGU6etMNsyGyk",
  "key30": "3YeomnL3dNLskaSLKeW7SnSeB3EQ4PdNPRwvCjDMo1vRqAQnBXYDTyz4xBT7pMmWroGPZi2KpgSXy6UChWyVs9Yp"
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
