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
    "5qDf7vxrXQ2sgCyDuYiVfPLz5K5AsCa6WAxUYHKUsNJBZJS7CXgPmcJAjXqwtXcXbU821Pg3yurykjm8E3eb5o9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rx6PWxV1mnSjgBuyoiJCQr4PLYEEsReoprj1RSLrtmbxp3Can1Kj4GUJNY68sHB2NJgW9DF5sV92iHnyHzNegZQ",
  "key1": "4Ai9FrqxChrC3Z9zAoLExkDRfNq7V7FHZ81GGdSY8uTfFUwMs3ppMxgcSo8dMQGxRcDce3VBAEyStpEv3stHdCNn",
  "key2": "3smtG8phcQ3C7j5tsyErSStsqQjEa2KFn3oUrgU6cuTMmky7dbjMzTs37JpHZCwWGb12zU2FVdBZQ4EqcH1QbxLg",
  "key3": "2C6Mt8jG6EsbNnosnjoDvCFkEaYoB45o3xSVu75K2N2ohU3JLN7QWYbR9rkggLP7XqQ9ZcdPRgFALqfdM7aicGJT",
  "key4": "gGD8BxaQpwPwGWUxmWfgbgLy1opxFvJKUhy1ZQRQCMYdJbBizuTCn5e1EsvsMnnaw5qaG116dstftGtqAQEN9CT",
  "key5": "52nU3RjYLu6bHnVp8QqpTgcXHLrvPAiLfHQZjBQp6sAaC3gTt14PUXUZJ8CpiakqgWgh7CsQunQZcNFwWAmTBNE1",
  "key6": "afE2kPh2KPN6KjQ3RhfQgH6Vb3yx1ST8o1kY5aB4jQTCQVSasVQtQEt2JW63wYZDjMnP6wQSBfUJkn8GqBhxYHv",
  "key7": "4ewnMGqtcshSB6NwT54k97WkG3fDuzX9hZwMbRZSKVFLZVgdDkioA4yJ8pC2HkQXziPuuvvjzXyfoN2FFGpc1K66",
  "key8": "rWVYfZKq5KpU6Var4cxUQVm8Xv1KwJaNAi1RSstErvQFhjVVmxqZcv9RL5aA9fXtkAKPNzt3NaKPjj4aKQDRaux",
  "key9": "4oJ79iVVHNbtjtC3UrReWK3zsAWP7Ff9gT7SroLpKN6SdCRmwswFSMNVrcmdPuhHbMWRnNC6xB2okSCiw2SwFF9L",
  "key10": "2t7pWnxPsBfuXvkHRoURzWXN2yKbeKCYCmhr8i1V5CEmei9Ecs32AtZ2qFM9ZB1tsiavNxtrwCEsnMnjFXWDmTB6",
  "key11": "2gGcDXSZ7mgCDCboSakb6Ese1RH6Mk6AUrcVnV8qKBKMwj14S5FtGqv2Qzt5AsYPwwdKqfy7ZVaPY9zyiNMpT9cd",
  "key12": "gYcXoBDKsbej6Cgv3QL9NLkwUgC6GV4BTY33J1zMigBE35bTzXSwokGbfzT7rBKR6dccQecBSHgtDAvSjF2GKJL",
  "key13": "3LpeNAWDnjhGPkqER3kfZLyVvzywnVQK6z6KJypETUmWjckhew6pNVVxD11CGCbMmULQW1AAF6PZmt9xzzdXN4mM",
  "key14": "HVoE3h8AJiDuH7MjkAs83onD8y3cTgquPjpkYQcdAC4mzX6YVcRHRysUknKeH5rQmnzGGRCoguFoHM7HjsydvsB",
  "key15": "5E73DX1AJQW5ctf28qmsRXaetF1ex66t7mMTAYxC9SBcSGHUH7jjdtveTcAoWKjeTdFGN2pcSJYEJP23JMuir7ZR",
  "key16": "2doQ54X2HVWLvdwx5reJVD3WeQMJSJaDoPsLcWLdMpsemf16qkA5jCBJ3tYZA7DH6Yjt3FY7Pa82HKbAAzh8yr4Q",
  "key17": "2yuuwFWbpSxzdr7G4oWERJ7Tmpvp7MCnUhEg5xK5v8pJXaPPCjGzAQk9g2vVb3oNTY5hpHZwzyAfWzmSxqB1n1U7",
  "key18": "4ytisrwphVboBMEdhDTZKze64q1FHNEHTsLaLHgNitVQzcSZUiALVhftbKdaUXNtDGs23FLjSgCzNG1hUFXA2W26",
  "key19": "4cggK6HWp4UHHHMV4jRAmUpRAPpHCBvJ5e9VdR45Z7H7v6HNmwLpMVaZsBkEGCH3jD7kkjsfpNmhzYG4ddcXyBH6",
  "key20": "236oEVqiCvKsa86A57KuDtJw9UksrLy8RvxZexvFrEKr8yWE3Ncd29VDSRMxJaELehiFLckDzREDgnhUVSxcYEPf",
  "key21": "2HVh734iqgsJ3jxBB8JvfqKfortznzqbaq6t3xn2MZzaC2CfZq5YEoE9ePsPju9V6f9im4272LSwXEHgSDEWJM4z",
  "key22": "KfMiNUrxX4V9ysitnAkpVZEUzGzTJSGWSAZiPTibpdcgVNuNY9JTwYr334AiE7xHSpCHwiNnG51Wq99WuGyoKBF",
  "key23": "3r5W8TpcFAG9X5mo9tYVM611c7Ti651T23QW9XnF5qcyGYSzaum3ZFL4YeGC3A39tjbq4e56uCxuCts56BF9Mhhd",
  "key24": "5LkVgXuDDjJTDsQDNhXs4v3Nz5DkZJZHiMMsbA1qpcpiy9EkeqYN2eJdmD9ZqEiSSX2Y86jAML317bStrBZqFMts",
  "key25": "482Z15teZPt1zu2tANQ3CzY5LdjkP4C3vywF7odiq7w33Sw9jMWWe3na8rim9cWZ6covTm662iL2fbAgzJHYmzLF"
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
