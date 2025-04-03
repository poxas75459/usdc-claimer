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
    "5sTsmnLmPUdRGQbLCbC2SY7Vwqab8oKJviWRrJQT9ccZFAnohyWfwb3W2TAVm5zg5aLDqxq2PS5DU5ysS83QVnGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UGQ9Tzkz7ghEVro9YC9Nu8dzJBHywS24zbWQd9JyfaQkLAr6e5FscBs6gjKUjfXGYWAnfXvqLa5ARzkZfAH9XDd",
  "key1": "4n9KLzVwSEnZLr76EBQrCocdmiJGwNW48Vz298MEHGRGXpAEvmNwTJU4jupN4HHnhcYzKjxhYyKwgfG3oxWkn6Go",
  "key2": "S7khs4ZfCejXbybCjqPBMBxwWB39YJDhMBwAfcaHYXMf77WvbWd546XTtshhnYDgqh9RJeT9kPN8KRa7DU1EJKG",
  "key3": "5cxfQT6Gv6nG7gPkx3wvGFhFdRfgwAFLf5EcAfvF51oyWFPyEjynJAzXP2DhzcNL3hSN2L1rDyVhkx8vijbC5WnF",
  "key4": "5S7zPL1Sp3F249EF9RFdCnwspkeSHrHub2JDWxgKDMLLpsPjpwpdNChfJSLdqMYpq6fGxDaP4D8fmGCPX3nrG91T",
  "key5": "4WuLh2ig3S9BFGpHZQoJ6uSjaps7Cr5FQYXdSDUVDKH5mmpyWBkzrFEYtzk3KVxatFFwSDXTipk2Vo3Sww7f1ipg",
  "key6": "3Smp6pZtLqKficusVMkDU9koeFvaZqSNQ2gejTAVsmzDr7RAxstCLcvCDb8hSzxL9pkn8zmYw7Y63PoCfkAJFwWv",
  "key7": "5X4ZLHecraJotVf2zMbjGwtQPqkJaJYfrvRDaBeYeKav9tfSm4z5oMjLhznPGhitt6XaEsZAYaju1LCD1npBLtAj",
  "key8": "26dfXkLLDfYMZ29QVMtnXRarVBP2dUrbhfPQr3cFYAUWknog42eMvdpBUgdxZ34rY1Emu6ytKejvAbagVX1Ycyzg",
  "key9": "2FobKQb5CHtpHgtuBw9Mc78DXSwva5BFAfvwsf9jDPQsCBFPt6GGnbnedsRocsZxJEqfdnoLtrifHGSSekqo7kU4",
  "key10": "55rH3TWWLh4AynKjPCccTz4aKShwiBkh4cZEPsWt5cPNpiQ7QBbPRMTrqNzuqvMfQdF7mYdBr9ApqrjvkQD9tcRw",
  "key11": "5oL24tmgx826cnJnM5cBtyDPPHVuSZiktMXfxREwo4UBp1ioEzAAMrLvfz8c6q3bpmNpG2gyMbzAaDniScT9yekk",
  "key12": "sDVbN8c3B1LXAHYbM7esTb1eSYx5M1TUAhhDY7xB5rdPFd6eidGJxEWTgFFd1DdtQEqzSEoVMRwHdBbSPSZW1q7",
  "key13": "1JFWGMnsLTfZDXEMkVntfxuj4eqmJxmegvStwat9kXsTfkw4XPnBRtqT31ipsuqZnJPzEAz6g74d15f9mcNUYYC",
  "key14": "3uDuwtcHGzABTtokPNW6TJpSuMbQdPXvUFT8zXQXWgoQFFGHEhcb4RMyFDQbnQWCm2B4jYAzkPXyQ5zMsKSe2wWX",
  "key15": "291HPG5Yp1e8n1SgfQNbV12xNKtfZAd2mpN2STkNiQaJGyWowXnZbQBC6CftznVmHum7JDqFSokwMf1anPqqrctL",
  "key16": "4FaFT79WvHutCMaGDmsie9SPFPQTYs8a25gPkJe1tavf3jMRwZCR3cEsfrgTxdYEZxv1vHepMzXYYZaHUhHRqx5Y",
  "key17": "5YxCC6XdyEMN3CcC7NeaPHzBQHW9SnDhzc41k5Jsjroqg8PfkJrfBjK67Y4MzjZbcCZpVyK1oGvWZ8FNYwk9Yh1i",
  "key18": "4jQm19aD5MFeK6BBWf1ZZEqEYcivxVT8G4yGetyjEMdRA9pvJkfBiboNoVu8YgwvT9K18txQzAyf5boZHdPTDw3N",
  "key19": "566BTAgBkPCNo3hJXR1ffDfv11RtzuCGnWHajh6oC7BD6xrJcVXmYeu9ZjNfDCPeqJtenmFnksHxsRZGo5mSMeP9",
  "key20": "3S1fSCj7coyRdjfseLXcmnUmUxcfdDifuykrVUtUA934uxSMxnszr8MrK5xrE5z1zcdhDSGF6uCCraMuw1XD6EJt",
  "key21": "4gLEyhHzmfeyXPyB2KbUknLpeuFg9qzkoHKgVVTWjLpyFyZsmmV9LvpGY9kLZGChXo7wzTdomJD1hzEjzVbBYF6o",
  "key22": "BPfBfBDQdW7TvALzXduMVQ1AwEu7Pe7vrz9CshCncqURQERLrLGURWEH4Mzbi9ksQzwsGXu6uUeQfBah8gAnwDn",
  "key23": "2e5cZgyxG1rimhHZYoQuGBKco8gYxSgqVCB1cncw3FXnxMDPFaa8FnF5nrAVbkYtThwkaMrpVXEPgRo9h2v62NXZ",
  "key24": "4QnSmc43ycXyXW5BNomhNaBxyMsMxdKvRdWmqycDdAQTbQjxbapRuGdMvnFZdt3FC7M72e5irYTtmtf4sNemCqNQ"
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
