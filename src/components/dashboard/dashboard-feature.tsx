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
    "28qSjPqpxX6JFnFwEnphaW9DH5jCAPBEEcun8D9isUhcCcXfqpyuez6vtKEw8tKCQyhxLJHdS5kjXtsLwjJYenSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BrE5J9ekiohfaHao7Zx8XgPpDq6ZQYNHbvDAWYfgNuez9F3uvh8d7NYEe16Mk6wYSnGgzZkkuNiYGMrnensoSc1",
  "key1": "5WXfaKcRXY3ZQywBaQiDRR6PyQjoqjcoxDny4YACsxFWGVubDMVQzdLyEwYRkf5E391fg1hxbehF6Ji59vLbWDKQ",
  "key2": "3NKnmExc33jEo3t9XLAHRwjkjQGp5hfVw2gPm9CHNTgaHk5gdVzu9WnRF7DcLc2epUhq59zNKvvpQLw2M4GBwSDM",
  "key3": "3R8WEZeuKQ1dFNHtYrtZb6pojLJFbmLizh7He5cwSq2rxVis49V36ArARSJLSPNJFsjAh6LeAp2rmorrTyuvpuoW",
  "key4": "KuxvkdTRT9EpH42oL91PVFcxhBLFno6m2JNJMDWHjmyM5t45DYheEtfvDvuewicA6f59g4geM7Wr184WpSA3QVv",
  "key5": "1fHjtFaDsfr6jVTsZ13HFpDNVCkZARbQfqWLpsNEk6wmto9BgdQJgMK9CLkkgGXfgGW9LJkNAvNCi7rufJFCWwj",
  "key6": "3yELX41EA9qPrCqCEZQoNPk98gAww9ekZGdm2oNkXQg5SsvWVjB7fHg1CzCAPoPf4tawB4jYYYWyVW7W7TLcGZud",
  "key7": "3DwMeceP36wvXGJnTwwXpfhNsFP7xTm8xGLegeen9u3uHN64KThL2Z7g65YK3S1MeQx63ePd8bkPcWbWToRvx5k",
  "key8": "2sMfudzxFLe3w2rmaCkwDRLkFLT1dQdqeRBsN7v5vp6Ey4JnPDUF4HyvYHZHyR8ZsbWbhTuJfyxN9gMAyPA31T9",
  "key9": "2EXSUopvHA4cZC84CCAQynPmEEdBe6478mJWE1pR7MkkzxmeVrJ1V2o1taeiF4TqnPWEbfk6RUcabXrFCvzj86Jc",
  "key10": "64yLAFDwRsMJo7oLNoALe2X9XoDU2Y6QoFQxbVNBYas1oTJLAVWnnMAGgvmw4foCKAxr6GAg2YcnrN1oZtzsLf8b",
  "key11": "gpGm6MxVWsGMyNn1PXH2fP3PfVLmNXy13mdSQrNVdHmMTuva6myADMP4anGhX2id9bQ1C6zw6gQ4nnziNy3s1YK",
  "key12": "2VcRG1LD95F2GfSS9wyAj7d6dnZV9532RdaKNsFeg1WBVdfU9yAWLwJuTfmhxAPmLc8YUptSrDX5f9CSGvaYK4iE",
  "key13": "3qTFUBsmzw9xaw2GCdChAxHHJn1LCCEKx6bFb2h5QsuoeyfUXSMorQpJPsyGisp1NNgU8GjS9NotKyrYBPsJHsKk",
  "key14": "5cYj83kZgutMactHwU9TdgtU9951Giw7HsB7PGi6z5he9rULwBpycy5hwD1WTdB9tE9XgbGYkD5QqgL3jSrdcoU1",
  "key15": "2PWf97dmyMsxr5mpNNMbLKLc6Vr9kSWgPcV9qKpNBVivWiTswiBR8gdhu8dvkPamnk4Zj7ieD8FY9Z16jdGx7HKH",
  "key16": "64yz8QMNL7wPByUktfG6McrHrErzbmj2uEvqWPsh7RPXZjQwLrXkZpcekEuhTS8TDmAdH5VAVmd28RgTx61evx4a",
  "key17": "4UWdAkDvAo6aSygUhsbM3QmjKSLcrCrHrW316hzPNjxbLHM8Zs3WWg3pqEuCgBVz1MJyCurev5dL46pCmG6Td9Kh",
  "key18": "5PfbtknsP3nPGutioFkgtn3jNxHTc1wHao5fN9Nh9mZ5zoMGEjoTZUacsVpvA7rCMoxa1qqRpWmrJxKDvncXaCRz",
  "key19": "YD32gPb29y57VwMpzwmJFFNWjFYzi5rUt9ASAjB83VNDeHzXVX3gXwvKq1DPKGgNZAmTBqJQvpeKnTeniEhGS8U",
  "key20": "2j9WDJxGTN88atV6GNei4JWQshaTVEm2CvQ1gj4XiMwaQRazDjmkPC6MzrKbe4dGFZbouqbecDdids3EWMbBPz9S",
  "key21": "jsk4RJ8ZVoweQF7JykCaXdAVKRYve9D963pyQEFBUvj7NDX21FpK1rHbV8QU8rdpCbeRYCMQAhUWm8DgqEE7QSG",
  "key22": "3bWkPLy19A6756foaqousHD2kAAmkAvS3mBYMdi1wCtxBkobYi997EjKht9Rw5shEQUdw1Nqk9E9iXeMQLtBLjaa",
  "key23": "2V3prGgYXNvvZtMGGU7bk8nnLi36VnQwcRqYod4WKjw5g6n4MQJBkRfv6YZmmbyQvPwVQErwFd1uCXJmr9QNcBB9",
  "key24": "4Che75gKcT63bznQGMfFuPdGd6VvGCehb1CPARYSWSZn38BpDkux3nVLV3k7tTHaDqRCNj77asfmU8iZwMmdFQ48",
  "key25": "4yVXvERMotWzgLFB1ffCuiFxbeBPuYDyYXuAS6mWM3nyE3t9ZmB12YVWbpvnutdG4RT7UUETiiakeEfxsWewVEhN"
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
