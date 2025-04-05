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
    "4n5H9vJWf4J1EQkZsyU77GomQDvEWVeCbz5JjoTdS9uCEhoJDejsBwrZsz18uAuo8zj9gxhTKaBtVc5oj9W7Lrex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53HyhWT8ENWkePrNfZbQVcvZEmCuzFeBrxfcKjfwNj17sgthJ1LKCSz6NuhwYLkTw2AHE6NkNFodHwf1yoSaJ4T2",
  "key1": "3r61xfWxpSzBkqY4vc7yF4AoAKZaxbUUcUSwizBRk1JpRwyJczXYgbY5kHpPMpU8cBQ5rkakLuRWsmYq4FmP8dnL",
  "key2": "4Y8epmYtDLk4Ngn18RRKpsyNeToKZxUWvVphWhymv5FzisRNyeJ4agZ6a9owmztkeMHABbTzEHueVsiJ6Bx8YCnD",
  "key3": "3JGFnDzGwY8mtvf42hgxLzTGXsYetydAi4nuQPjxKR9sADcx1idH3RQ9JnvAAKNqkJs2AfLWGziuqNgapJJrUv7A",
  "key4": "3jFuEC5yXKUwGr7Escy3mikDYE95mJY6e3szLPb256kmLqHbUQG8x7goy7NESanpfJ14XQ9atxf5KZ8i31p9mftj",
  "key5": "4Mz6NzPA9QeLt7M2BouxN4PCAvv8dXijYgteP2mYBKNAD5E5iJqRGtmzY4BTX46zmZS7rrb8NtvKuKWFd3XXYpF8",
  "key6": "5SPGfP6e6kpuMDPDBBpj9er5a5ubayAxEE3SHMLdMVdPG7LkEjudqqaA4fTWCU1sLTneGkxykhV7Dc6dWfdJdwsA",
  "key7": "5akwbnTWAGowTMirxMAiMUwdesKdY8ur18uYewYijNVXVmE5UyEKxQvPxDA8wHVKdMNZtYfnsiwMm22N2TJ1MexT",
  "key8": "54jSQCdVTPz4gTzx9YXNBuBQSAJjzEFAofUt8ri1cg3gd73vqHbtG7M95En8B8BihMzNGjGH7BJtrL3ZsanWfoKQ",
  "key9": "5CubVtkgq1NbYUmRi7sv6DQcYA2qj82kUU33oAYbq3JnXTQwThBGyhC29cVVFYs1dU9h3Vv5Hax3pW4oAJgCfnDw",
  "key10": "39qvKHpzoUAgKx9doyNfTGSgTBCcGBYViKYiF3p6NfdmTa58FjNQvarhh7zQ9xaYM8gQgJ1BeSVuDXz8RWZ3stst",
  "key11": "3pY5biDdHtjzRR2kjobwdyaHjryH3G6vxAhve13PgkT4ymsdcwqJAhZi4VbULbUujCqz6CSYcheFbNAvVWrQSP8R",
  "key12": "5vrmwqbZmZ74u8u7HfFsZGk2KWUMUBcxvgcVwtNyKbFZXw7zFvV24gTE9xXBDj4hryUKocVeyZEdKuhhT3ansSpj",
  "key13": "2hwJLYy3ie7r3mD2UjkS9zXMUWf5xytrvHosHuARYxfzNpARMQ7GVuSYmeBxm2aK9o5WTR2LG5CPqc8DNV6SFrei",
  "key14": "AbaKjYV7yh1zVqbqgEEfEjywpbTCQFStRXyVDgcEfMbpqg7JCgzT7jKfBm3ZSnFDad13vbicNzPDRrcoCuURGKX",
  "key15": "3g2J4svEH7wTEGmmDhQ5Y5htEcQSMK48VzbA65MCiCr4oQzYbTrP7QzKURKkqeX5k9taPxKc1sDgWobjN8gWVPT5",
  "key16": "4XQEZyeacQCeAawLk7CZZbA5soTxJRAZtzjsQ8icUghEPJqMtK3yRWVbufZPWeRs3geKkh7dWERFtpKC3Meg5WLx",
  "key17": "38dftS8sgB79tib2PzKnfQiiHYnGk2dpL6RU6tTeK4LVZ471cPMCyRtyafa1cpn2SQrx29XqUkPjpqWcCvdgP8CM",
  "key18": "31ocAwfaL5SErdrnCYUEiVbJx1uWLviERhTg8Yu3sx5x33jh9AvH4sj3RSr8JtSdNbKkMYCXGEvRMkecVqBNnkhF",
  "key19": "nu2ivhEhZwQjR9fuuYSLV4Hga4se5oQNhixYVNGKCAANN9WdFQbgpZoroDeLZMtPDUjdzmL53T5t6KzDJHhmSYT",
  "key20": "2guXU5tMuNCrBvAhsoNrKkzey2MDYCBdaqqqMdjcDe2SjtYkHNZXbskTKatwsn1bRZ7t4371vMDM52ucqAPaWBgY",
  "key21": "3SdPMC4LUaadQBKCrjCPdHgBZFASfnpB7t3PQWDuiLHHNEuAFtzJq7VXNJzif2TBPhopfN9rFGpwCX9rUYp3jU8K",
  "key22": "3LtUBhPVmypHx1rjXP7NeveELB3v8KgnhyLa3tMVVnTNFUwrQzqp2GzDcVvfHEGz86nNcwNJfGxmNEHdcAnAQJbR",
  "key23": "3jpNam3ZjyWrr7gVoJcjjcGmaGLZTW9jMZcjUXFyayBLNcqaSxNhEteY6wV3Hna8rqvEfps5QxVXRPWbkP8YSoQo",
  "key24": "5BfKQR5mNhwgeE9u9FKPoda4S7PoMh2XEBMRGic4bBeYMcMETTdjjDWBen2DYatFs4TwLvAxv6tH1FgLURRMHvcP"
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
