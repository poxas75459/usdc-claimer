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
    "25EubfgrxoMJL2eKSGhL84wCVNzGc1knorfinjpjeMMRZNxJo3PHWnCdgRBnsJedAQKUjAeeYURD2SQeSDmmS4ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28YQSNfdErggcMX8KEE59Tor7zhafvmLWXUMCPrYYFVGpzTSPbvZTQvRmUMWV8iHhqwaQD9HwutxrvNz6AHjCC7V",
  "key1": "5mLFJaf9MFXyoW6Awudo5CMPD4d7VWvD1nyB9DudfUrFhNry2Ef7hPctqd4tRMZ3tbo6GQK2ssx4apQu18VZ3Hce",
  "key2": "5etPDRF7JZUFRSR7QnbH9jYvkdT1NXP4KLYmvLunbU8J844d13WXNcHakanWJusGrLQ1sbTwuFkLF4DHimzfGzvp",
  "key3": "2rNSfkPtuK9k3BLkE8u73f4wwhST3MogAXmh4wnFxjrTeJ5UDEEYJuJppLL8EZi4aGRLpYoCHt2JmTLcGCg32zGK",
  "key4": "3a2C7pZM68zmRmRj3AAX9QRaBkrWe2Gd1Q1gSQqSpnvtbRxu5wHUp7y6urmaGRNQHpyVYmqPyrbZmZKTtJ4eqw6i",
  "key5": "2aF2wZwTh7P2avjQKSWfFj5jjYiZcHmRiVQjRngcVxbRbozuYQZjUrUNfahEJzJKurFPkj1y4N7eEW8KYky49NNY",
  "key6": "4KpzxVFHuYhh8Fj2tJikPBZ7FdvfRmWS9UEzzaHSz347k2tQyNgVGWhZJeXca5zbAbqQz7cEk5V2q1RVjk5Rf5nf",
  "key7": "3J7XKWdMRXpDk2hJYbks6W1rn347uhx2oR6QLT9kQDsxjKAk5c2HxdAzrV2U123rGvLDSjcuJWTQQadXVqecbtTx",
  "key8": "49SSarjYpaMzgTZVxs3EC2qFzSzwvqxn69ALXnUuKtV1iea9mW28gy2stdLR2eU7zw4GhXnU6nKbHGrAvsSj9geB",
  "key9": "52XfzTj4ZTZNMM8r17AKXGrbpkM4RfKJbyBDXmGKtm322r7KeM6LVkeaGQzpA8zwYg1jpphnJ6sdakEysqGPx9zt",
  "key10": "4iEfnTwnya13Rwi9KzT8JPrHm6tHoyQZ1nsA3h5eTYyXx1vvPFnPbZs52HHhswddmXWbRcKtrjkSsv3aST6wH4PP",
  "key11": "2hi1E3ifEbZuwLCZxgBy6KaWCeDpJSAz9vBFkUGp124KqLnpqjq4VYUkd8QfwwNA74SS4S6PigtWfE6htVnk5Maz",
  "key12": "Q1wyfK54iZLYXDAdcDppSPvsJ2bVtTjaD6NYmbr3Tr5VtcqvNiLJatyRHPeYkdzaW1T7s57qF5kZ16mLejQGgLQ",
  "key13": "3s152wNvTtb2tb8rKFkJyis7mc6mSNsstrghTLLnDcopr14fGAUbSqsLjWjLuMGBGyLyMvtiA7YFkAHYD3K5gxAM",
  "key14": "4uyZ9Gz22Wx8bUCA9R6T5WENA1vh9jb6hXQ3JkK3VWYViK3Pg25EpZ62TL25MqnXMXtcNmyfoLHK3V2UuSBBoLVE",
  "key15": "5QH8JCCff7LwK68uP4ygYDVStzJtUEpycD43ZMMEPVwfwqQMzBfTivu18uooJi1CLcjm4B1h228UFyYXqgxS5xdp",
  "key16": "3FLE2Bzfhwm52FXYxQyPPmH4CNdQidwGqhfWSxSXM6mJhZW38ZJQfNXFs6EuChSfzRfN4UPaHYokNABbiyGcVnCs",
  "key17": "5f4P7VDqSJyR9hEUDvJnBnAnpfmH6ZodT5R464kvxbjXgDj5osBY1MSojhmkHM1pcXsu3VYVfhGFTPpxa6Z3ms3i",
  "key18": "27ke5naQ1bE6NiMLumGgs39e5B3vn8Zt24aUtBrKn953vYmKfj6akd9qUCvPFPTQ1fSsWGiyutjh4tpyWhXrbxPZ",
  "key19": "Crih76Amo59KLVzXdzs1UD3TxB7u3QSQDBrTomccHpYAJn9ogBmAzWmprktSojstVKnJiDBMNrEJ8fqEPE25xA6",
  "key20": "5epujTA19PfE9KGeq8ZQNVNgShySY2t9um7BXXXhN3vrx8Sw3BAKR3tysTg138UPkE5PheZs1CvyY3EucZMqiie4",
  "key21": "28b7ppehZkW2JbicN7zfx9WEjnoEHhiCMRtkT4SmUPe5eMk2opRvSMdmGmRgEdyb9SdQWjzQ6h86cwiwL995bjh6",
  "key22": "3CYujbH78KC9Gnqx6DJDHaCkKcRczK3jDxPD68z6vdEr4amCQPKPDpJTWU96dFyVN5Mc4paKx7iTztnJL4yPY99S",
  "key23": "3553NCW3Mcms7KnSyL3w8oSCKXXYjSi6pApZ9FSbA6TY5LFf3FwZkiLWvSFr4k6Mfy9zmSuhFiriXZUPweLrKZ18",
  "key24": "6nT4fBA14waPhu8RL3tY2goorVgdtAYXy9DDoys7evKPLvTCeir37aVRzxRn9t1GjzF2UgLn4UF8XK444s5Hxoe",
  "key25": "3oMBh1Vq5cVcHi4gDBr7cfUZ5shrsNw6wzGCnp4PKEdHtMJzd55p21NJLtU4ouJeMqxT7SyxoPZZVCqh2naxWxMg",
  "key26": "N3j2Fiw1QUS8GrPXtKYoxCH4UbwqyySMpYPhQu2SJtW1RzLHdtgoEJuWyWv4hhRTpSe63GJeVsoductTUs9JfGe"
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
