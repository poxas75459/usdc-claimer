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
    "4HwgBhfVDAAUkSwpLxAwmWw52fUWc1d8Lg87JqzgmtahR7KL7vq7Fh3JHySkiHTgRB5z6sXZmXEtEnNGgitEgWLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TyyFe8fj2JbapUkrrYZGrY5MkS8bN5Zc38VrZRQ8YNiWTHwo3xJNPqP6kJNEQnPM1ynQFtcHgF6Sx9QVwPfcPsp",
  "key1": "6ghS9bVKXx3ddFTY9jHAWPbjWMkezhsbgAzqyrjzMxtbnHukorcnNApgnooWNnPer9HypfNtB9uyDiGWr9VGmjR",
  "key2": "4LXgRUdXrDop5RzvWbbVyz5Bu9QGaQHp44XFP8FuhBsrFcTd9fbiZF7jgQxTs57hffdftWHBXZxokNC6iXPx4yuj",
  "key3": "eRWUxD1pgHnZz4jHCTU8gXakgFRaCndfYXp63uDQfNtEEJxtnKvyTkos16ERwbGhGxVe2gvxXsCaZBtckSYKpVc",
  "key4": "ic2GCudQjtLgBfrngehfH3muwZSGj7gPVSfBUXPVAP5bfjS2Z56k1UPQnoYRUdrLoarwLoYHRKQoaLh57saeF7V",
  "key5": "3cL5sEQXuKg6RoRjvu4YtVQK7tNsw9SxgnkZUP58Pn6zXzjF7wRfnNeyLXa5VezrjKjwufQHWEEup4bHMt9kZJsU",
  "key6": "5s2KYY4o4SXRmDWzYmhykSwieVdssDyoxkVs9JMPMwVDDoqzrCe6c6PHnX5xQK385LNnF9z1oAkNnZL9x3egAWLn",
  "key7": "4AwiSJ8ALwDMvHvM7yMcZJ1mKxc3my4URGpBFgSmGy3rtUFrmWGNGRckPaZ1HmFbmXREvgTz9bEY32txdpbF9eKM",
  "key8": "4StgPy63SskWiBvg8qLP6wtCf15BZBT8dwXJdHwWGUBVyZp4aEbmGArLhvS3dDcC37dLSBvtmCvcrcQsM47Jo6ri",
  "key9": "3x8dWnFYwqHa27J84jJDWj2LzDTPaBCVUj5TvrGUCXmySg4pZPyxrBcyTx3rKNdapKjm3zjCkoE7GcgUSViDf4yi",
  "key10": "4wMJ1kHHhVCGtyALH1mWbgvKUmo4tt1Q4fm5zBH5fWFQKyoDvpQhpPdus5peN51raQWkWHwnYXLocosNBKPc7P6n",
  "key11": "4KSG4cTrfnbjXiE2MPM4YdYTYq2g1gQZHofXh8dRx5bE4wFQjz6E7u6XiZMRFRx7btru9qoVR1maYSb5X5EmFJdS",
  "key12": "36ivDX3nG8TrzSu8JWMqns9s11bpn4nNFW7QfkEULykHvfoDbUyH62goetmsAtHq637b6eC3XHJQ1aU77KEvVdf6",
  "key13": "4MFNNo4U4NmKMA4Qemt1VAe62NVwEdu2MF46ExrS9uP4erNbpCNdvsfiFD5Nm1uSUkfWqHAWVyZvdweLTYrJgagD",
  "key14": "S6vLZGZcwvgB2vceHZumWCN36XkGgZg8LCV88AvRBMqjsKSU8Nm1BUoYfh2PUe5E33hkkWni3amup7jZJhpSce7",
  "key15": "49bSwK8x6rB41t6ZAWPsEXp9ZRzDk3eVT39GbEfMgtbuSA97EMXP6AjWZwDrcwBo76iYzQh2Smqq7Myx9UbSrxjE",
  "key16": "RxgG2tbuMfHHxnAoKCrLnKFgtyBduZyB8SFTyqiVngv8WhYDTUvYWPWKASEbSqTrZuLUMNdLwqdJA4Zmmc73R9L",
  "key17": "5K58a7sHMAgNbtrsHymLXSfWhwr5w1ch9V4DwGVuVXy6dEJcXSPVtvYgQTawJW7YoAfv8sHbGU9RtVreHLcqA9p6",
  "key18": "3DCWovySGoUsdAwxQ3XSty2ewZRaVNi9hFTcna9thkHUuUUXktLUBDRKHxc5AcsiTHev7qU4UHhSNx5RLL1Bpfg4",
  "key19": "2q178WsW3BVmxFgF8DharqVPNrP3J5ZCk8LtK63rJb3kZWcYZbL3pA9uwZCHrRXNuNv9rmuMDT5Nj39qmWc37Qv7",
  "key20": "3Fto9MNACjjrv1wnJ16Tk9jdTkHgZHfbLsVgSubxq8ijnsgL8mXfWMq7cczCWCHMHSwaymAkRM55Qt2Kji4mTX9r",
  "key21": "AQZmKA5y27YwHFpwetvYua2VvPwxhNaaS9ZX9a6pizZyYDi7Rcmj7rJJ4gSN3ZvTiAHEwZhUfeLQQe22xy199Bp",
  "key22": "UxPra6iidNvhDhvR9nU7WmjFGpgdrebzomzhKEBbaUKnNq8LwFnuKQqnSDTYzyefLrexZU5ZRM1uYDYrsMSNxMS",
  "key23": "621o7ZtQAf7yXpE3mLELKWgXmcqxS4ySAakdotDVCxzNTemhM11Z4cSAPMQXYVzM5ri28hBpzcSiogef8hi6BhuQ",
  "key24": "opAnWyT8f8V7PPjS68pUr9Kq9oxyN3Y4eNkWtpCJ3wjmQv1QXNdN4RA6uooogn9H37c9XbPAwaUUvgDyifWW7XJ",
  "key25": "4GgsvDntwmjZhfNw1b1g6tTvHoSuPzXN5b6vH4s6nag2p61syQHwP5HwSLmPJPVTU7feDveJjmoW56zowYtp5GMd"
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
