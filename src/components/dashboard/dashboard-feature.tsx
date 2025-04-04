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
    "2ekZW6HmjLJ68kvvXpHSbWwZ8YicKNrWPwrS3ytdByEWCFUHuaUZ6gZVEjaRU7UrsocECkYUoRdRDH9FM6ysMbuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UVrzLoZjeEBWBJh1YAhCgLKQF2XCZzSmwNh9pnDdFC2ZJ9BdHwnKn2iuXvsdWCMnrmh8f8xvr2pzNwXfVm3Gp3F",
  "key1": "2hMvq3qNnCSGUYoLiJnwnGvmNjYBsJCcLTJpSD2yqUkSEG4EAqL6A7HbS8Gx9QLzsDjFbuDmxLjTmNujB2zSCdNz",
  "key2": "5Wua5uJiYjKwEgUno9qDRMYXuJYNVFEnGBEjuP6VCAr9xt4jf32R9pPzuHuaEQMY58yd4k3we2nhAKU14UEyTLqt",
  "key3": "2EC4db46Qwdyu2Ch5hy1RjFVPepfbJcVC3e3Cp6ZKNUHRFK3C8LgUwc1KrMeuGShywVQHyguz2A1vURN6c23FjUG",
  "key4": "24CSULZoukR4JFN1eQALQYKuBCXJc16uoMwBh1gDL7kWM4eifA8nTanKYCHg6Pr4XiMrZaxAVtMvstd4pVceq6M5",
  "key5": "3ovoKjtdi7JnxQq6sF5bkL77P16TxZVdCDtn1LtKzreKmnemB99DVHrVYVcHbvjxUZdBKq8RCJjKJ2T6Mbej9kEu",
  "key6": "42HPfGDkKJ9kg8334itWRys4FvaLwEHwPYrh9fXg8Vn2UhkGTQ66TDeXNUfj4mih99MBYyd3fvzPmqe7URJWHjVd",
  "key7": "2nphyqijWpmdvVKqA6LVtH9XW37NsAeatPyXvBMCvmDDJ1ou27eYw9g6bSo8pazqLeWDWXuo3AnGWXsPYJLRHGmZ",
  "key8": "39yBpdvzLQafZuKjq1U9TCL5uGAre4woQoVpaAwdRcxyC2jMpFygWhojFVAXH1PQVYJ9zxEiehE98Ji7UrB4kJhA",
  "key9": "4regefUqTYd7JkgyHzZHX5cbmXASQZyab2HAavKYKrQy5ZHErdTJibPm4VE8k7sQKRd4ippsbZWPmGEL96JvY7mU",
  "key10": "5NFEWFQanZGu9Q25fMC2nyySHBkGLWQ48C4CrFjGooU6y39b7CmopRz7LrGTg9AMGaC6V3ZEgPcrdvSuNJy3PFnj",
  "key11": "57Wvcfv6Ni77ofi4LJ3Uk6qfoJGPqsSnZb6XxuX1jt2xLi5fzb8z5bvDNjKpzuBQ6URB24AcTq4PsezQBFdR6dgX",
  "key12": "4WrDR2nEkkRjUKuLshgRbF6CzU4ziz8M1sZV7FeCdeH3NxahFs8n6T6Qx7bNU7xPgtXW52tixyGRcLMq2phgjbhh",
  "key13": "3JSXLz58awfo9h8hJ49Y7QYu2kVPpisYLdFXdoLqg8fhwFsTPPUDvXXxRTJTKVgd19CmBwtiqR54w93Xm9MTei9R",
  "key14": "5xjczAfPLYdBEDQCPzhxgb3ipTogaN1nzGZdoCvwcEyFg4Bx68xcGAycaqCCVodjFUDcfy81tFwzvmdx5B3U7cB",
  "key15": "4i8Dzp84MDDqpKxa9s6y4bqcZ1kAG6wFcr3Qfz97Gb7NDn3KhMYGGBEVZNTZrzw3s4EyQAYxgoJpaWkZpdd4bVjc",
  "key16": "37EVtb4fEkLvzhVTQsDmUtGNNAarh9hi5NKndyU1e3GtuU8sgihMzUL3feWwmwzWdt3Y3Lv5ANaHVZPGsY8i8kvW",
  "key17": "2LYmFD1cPhQn3R6Yz7tJTh9sn7Tvrx9HFw2UD6qiPuRooAZy2WAyTZBgaVdskoFpfZs1c5EdVuaFr8B81XUZPKku",
  "key18": "57kPGrVeHib4Gf33JcGnRpMCdLRNwTKweKMPpJrovoGEHHJhwEJWpAL8hgHHSDFDXPpkM7DxJL8iepZHqhFes1gC",
  "key19": "3QzWkMHLEf2ETUQj8CoVzZA3GMS5oLA4LZnmcVrnLGSokqadbwVhYWd54QHNBGkFGsLtoRDbaF92Vi4wpq4D2Pd9",
  "key20": "5zwKpnLFJdnrA5TBUJg4XRTCmMMFwgw3SmCzPTkyEqAvE4wSsBYWia3BUyc8xYkfofyyaNBab7X17qPbxWmRXzxF",
  "key21": "63BuXzsva8EqvxEiq7C4fdx3RdLL1MmVYjJCUgGxhG1QbJ4DRsj6qaLnXT6TttbMtjfTpZeCGUpeckPJQopzNbvq",
  "key22": "4SReAs7B7bBrEQwZWUPWHgUGzHBf5aDr8y71cGyDKetQ4WJUo8vstAChZvVFodHbVDKhPXNMXHQAEJNH5MRsiUk1",
  "key23": "2fBCb7AJcYwVm5zpqv9iwteEpcuPw7yGsUA8Paf6C7YCzJpL6iehw6euoV5LHQwxsEvtScaYSeMi9XGehdJNEkFx",
  "key24": "2HnZ6rBryrdhzVL5whvr76hcbRaPtCPnBfCp4GVRPXxwB2LTHfcnN1r6gtoAPFhAFcfw9d2bKS66swA9gYiBthLC",
  "key25": "5E6mdsWoDZufBAkpYVR8eKV5REd4NEMFT1e4vWHRodmj3dzKkJgqa3h9DQQrMEprsbHGowRfyBaLVHR8vZ1E6LfY"
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
