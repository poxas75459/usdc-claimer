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
    "2xxTPUcCaYVoDXDcRwcWmH69h32XKhhV9TpF1y8x4JabdUY8AQBfZaJeW4cxBJdCzafNekj7vPGzd6y8whYDDDRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mtZD6Q84ECxESRWPYFyDmqfKYQdwmkCbaNocPJirT4FdJxGSy8deafsY7ufDnHsz3ZwPzoLc7TqwD9SEx31zU7S",
  "key1": "Z8se52jzvc5c5VtnUzbbhV8X7rwASRqdy1DdjH6vk9Vwqy8Eu3ZzZEKKmDRDDaLkjzQ14wtSKgcw8RFRPvp33uh",
  "key2": "3r4Ru2kYtFT69sr9wzijKwPLZsG7CEdHjmpLh5muw2fYpvtwbhSUn99waTU12CTcda7WxtdbxjV3cqpQTMMcY3Hm",
  "key3": "3BLXehdxCeHgfYnogJXC5zfzN1TqppUP7o5bwpWp852nTd4N4h8HHnd4Xy4xudM8QzW8iJn91tkQUb7zi2F6hbn8",
  "key4": "29waVtTzfZyMJPPRHDj1zZ23n2U6w3YaBmQ7aDJKxzEoUpjjzGmxqbfMm9pgqkyJM1w4X1aQgxAApSdx7ScCmdTD",
  "key5": "3qL2TyHZUG9fB4bgvsACbJ3WYgndprdsoxLzWxuV8HjqPQpSgb1XoFAEV9P5yrLcyeo1L4pfrreVQYFXZd4HJhSw",
  "key6": "4nRw9DH9xFoCebkGj3Bjb94HrArU28gGXj8wioAM2vnVS4ziFdmDt1sKeBSmzbZ7CLLavcc8Ns6zJkHKoDwwdTXa",
  "key7": "3cRjgHsqcL1Ur17qp64p1sxhaPpVfPfyNhBtBLkJN1K2dxYu3qmLxgmf4t3pJYaD4cQD1aH7XN5DQYzDT5Qq6GUG",
  "key8": "TbY8BDkCnyYKqWNTn6dDdvRre8m16BoU9qqYkVYmYdthjHnDMHDQBimKDLmz42gfpQ5RNerRZ4FngyBFSG6S2Da",
  "key9": "5USum8Euq9LxhRJQT6d4bzXbz4GdcdpDd3t6Xo95g6HBGuVDAbvVPWnxMShB4qav1DtP26JjSXajwYE52NydibE6",
  "key10": "4n8BejVVpxT2KvmyDHzyWpzf12sMddxiP77ch9Tfa6X2PD5wZTg4fTpoXU72voHZg7jyJpoa35MKvVuGdK3ZW3ZJ",
  "key11": "3be1kEaKFj338D7qYwk1Crht2DcvMGRzNJ2yxce3knHEybKZ8BygYtDtBtRCYtC3Rccq2fvkJ8VvfEUHgBS9xTpZ",
  "key12": "2RQJ2rvg3oy8q1r3sNG5T3nh3pKZDBYT9bxvUtDsVorhyEiSh8N6goTof4tfGX6hF5LT5VMc8XiQDXBYPFnqV7bn",
  "key13": "5JE5DwayqrKLkxaNXyk3U8yhBM3VKXpnUfLa3U9UD8rZWH8fRoGjVK9V3DpDHPmjgafNGLv4xapyuHSnBUSjtGgX",
  "key14": "PaQgYBh4ifGrEeXQLjLuLPre8jqSFPTsNyunFuhjwmW95PM2FkZAhFbEij334ZkcZzcfhzYDCU1QhvHLhjTk16J",
  "key15": "42WBNcpwWMWTwXvb9XQGtyt1VYwH4zZdgVkAuymm8E416DsimQjv2NBMEtYMvR8AtjL7hEbYiX8A1JSTCgkK2a7q",
  "key16": "ERNqd7C9L2UhqwXzvWRuGeQ2fPZqjXNBpKbafqscxLT8KN54UFeVGdZN11TfpEy7vcRPLUDYs9Nh8Mbwdj8z9SX",
  "key17": "3fyDmtbZ6eSPPHH5TghRHs2a3jgV1LHdUgwcA5LvBPC73UwtiV3tq7Wgssc7DzTwYfKtnkZwMjT92KMMykmh3F3f",
  "key18": "3DLTSZLc35ji6iWUqpbSgneV2cMUrQJmwQc8VmpHDvsTBxkqPyp63GUH8j1QywD4wyCKQ4cLUF3kspTZbAhM84R8",
  "key19": "4Y3F8qT216ubpP4PJrhhiKgg562H1Nd6ahYJ6C7exEH6PsXuAcTypuEEcjUAgokkrBwe4wgBfhapzaKxuJk68CYv",
  "key20": "5vkdjhr2LQBeQ9mcPX7PfJt5knyfc777hNzzH5SeGcSbHYV8q2CN1xjcXXFcKwAs1PzAy3rPUcCY6ziq24Q9C9iw",
  "key21": "3CWAmJdRnDxAnYU3uu7fGjDKk6EcEGMmcYbraSoZGSaBeidzSZvDS8mbB1hoMorCbnXRTJWCqKucpmeV1GPVzGz6",
  "key22": "d6Yu6KoAFUUXgkTS4NPnbQ8Xxv1cDTA9chyFckzbM8fFtBD3RGG9i6uWmx9chqQAxc29nWstrkqxYrYCRcbx9Hf",
  "key23": "2qkR2amMXaCgeHEbXRBkiofcL7konc35H6MxEKjSYM1poE9H51DWzsdEa7zBeP2eajZK4rg3tdVJeqJAX2qZ1KsQ",
  "key24": "32yg3jkKoQ6w8AvL7ZNw8vzHXGphDYbjxadBL5PDaGfBQoSZL2Zz7ipKwYiM2uhxwTVSpbSLQsDwdVmWrUzp5eE9",
  "key25": "2rF2ZzrutuUMigTjkydrKhHEXEQrmJcLgf3VfzdecoAVArsBg9qzwWJtkewKpfi1KBsCwBdqzhveFPziErCUu9f8",
  "key26": "4PL4MpLTCcT6fHU5G6PjHLQ1N5ae5mmN2vgqUVMbNwEqeSXBE5rmNZQHVpocVngmthYrhef6eTyFnfXpJv5qHufu",
  "key27": "5FDgenoGhiJ8Jv5TSPr4GQSnrXbdEScVyRiptDqTHySdzxNsv6suyGx8wQyT7kQ76S6yWHyq9dNPi3rzQ1MmtsKj",
  "key28": "62zWu2xST4VPtGS4zZu1yGfCM3krgBimV23wM1EzcVuse5L1Xhw1t82hDnyV4ExXHsPHY8p3Jc9KeBkJxKcx3MkW"
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
