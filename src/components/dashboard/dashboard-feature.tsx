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
    "4mDPMCJVjh4sDtXXH3xZK7R73EyUPxZpUPtKvAGGQEG2PJQoZhGAoUHY3BWwzSAuYS42sCQhQrP7MDeGMUaUzN7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LvGGyKa8iF9jc5GsyXTpqf7wCK3G4NTmtJQpG243Nn1Av2tGA8zVtbpZrmvp5bzF337dNXNgbHkhAdp1MERHNYm",
  "key1": "3mSeUWDMGyUyqEme5KbhTdyvTVH9o6GQXBeN6F7hUuP39RVe6uFRiu19AwsVPStJgQoRA4kWYLSUJt165Y1SYuQj",
  "key2": "3A5YHuSBSSqJxB9UcXACDPzbV4tJHU6HPbj8PFxTA6omKeieHEHJjNJK6KwR1gx1KtV55t8pUnaYUBAgL5EGM5M",
  "key3": "5nesNSDanB1VswQuShWZPmjRTFAACkr7Ucib4PVHsxNvX1TVCNvfnSBFu29ahTUWWjtoVEAob3qcaaq5QFKBFbJr",
  "key4": "5Y1ey2zMnLFzdbUHsd2Xtwg2u6TQiKoGWrHvoVWzi1KhJZSPLNYiJHjp97hZAYD4JHd5H8Z6DpRUpGB96ak5pk2h",
  "key5": "4wWANRnoEEmHz8CuB4CnG6G8rJzt41Tc76wxKTUGNH7aRHw6aeDvDMaX68fqRsXZRyhrATKtBAjmMN1cBM2qoo6u",
  "key6": "2DecPBARCPm7QRDmmuh1HJGXT4HCZJyeduWf1a8cnaMMWGzJmK9bZ6rud7MxecM4JBtg9zweAKDsPHx67AUwZmwP",
  "key7": "3ECiwZ6X3jD7zkHqNus14PXBdvrunsDBhv2rVke2HMmQQZSR3bVikHqgkEyPgg1ZzRUQPSvVvoHSNB7j2MwaTKYc",
  "key8": "2WhGWZzvyvRiV1m3zzfFAguK9femGgJ8hp1CquSiuzK5wqhaztG94PP1QG6cTj1rq5LDJwKdkEqJX3DqpnNJuBo6",
  "key9": "299Van6CqJuLs1pmBLTLPK3T8eymjNuL2wZAeEDCdJU9UuFyKmXMyGB2bpKgPXZJNpbL4xsjbEEj8fa8VHmf7JCL",
  "key10": "5fU9nWjss6RAjMWLqPi18ZVECH14p8Mnr6YNMw9eHuGCzBsaYMhgVnxuiLbcYBCk6WhsrHjTtX5DQzXqz4572AnV",
  "key11": "5zopZEMLPpZv7EeNfULFsfwiXUUEBubMFFQLfQgDLGXWhkDHekkKM8cCa9icjaWjhFr9hMBsPbm2yAbrXDCp7nKK",
  "key12": "5VauwiuqQJrVHCNcKdM1LgJmtjKDjPbn5dXgxaMSwkysNMmUzDf275n9Q183aocoiLgD8P3a47abM9UPKNUAJ2kN",
  "key13": "3JGJDKa9fGGmhbc8gX1tUHCRYFUyJyUY6f1oUusaUiGLyY6QWd76AiyQRG5ttz9yM7ZqBQStco2GUP1CmNDaRqQs",
  "key14": "4RT167LML7LSWSTFmSKXUfxAgU4SQDPYFvGV6X4d12rdn6gDyEoczoBe35icLx2squmdJYoBsZnaHwr3ddQRyMK2",
  "key15": "3Zz7AQZRShhybPCWMeH3rwYyTvNDQBB28wMGsV4tuJS2gXDupAVFN2uuDqYJ7oGmN3NGgRhQraRzNym3H6kVnxFD",
  "key16": "5XgeNSJzhq4d181dFMQkX2FBfcGsnMxjmwWy6o8CvqdJVH1zMApoJEmeK6TNcTaA3Bz6AxgnkhePGQuQrmF64W3M",
  "key17": "5MnVLkCX7Jepyhg2DaoZ222RP4JNmNMA9NPnu68bW9x2vav39SZAat2CVwpSy2HHptn96Ze6u6dWKWPxqB6vvRqW",
  "key18": "24nH1s8orwhTJWybV9PYj9riyHBcgPMNVnJm2hHH7T7M88GqcZVqziWJovbdJsUwxEYxT1yXWbMZqAyt9brr9RHE",
  "key19": "2aERCUkihCvcHNK2SgCcpedvSmpCAoW6AHYxFxgkv54HbHkyokhb5T7LEtZEf3Pb29QBFiJCShpusa8E7RSsyTcN",
  "key20": "4tuJ7psZyzUZQVUt6sqntPLRV2wyacq9uLtmRrK8RqnEvCJbkJ8EJgv6JJCn2Jsx8qHB2Mx7GWU6FKwSKUEJEYNP",
  "key21": "59Sgd34AktXn8rMw8EgPWwafc3VjsEQXXzZZJEWjBquHTNk9Kpc93wrMRVCUQdvWBCcUxb7SETmDjVPc2ipHcSAj",
  "key22": "2bmCVxregkmMcg9MycR8ayYR3fXPb6tFXQLUNodns6xGpKKBviNY8f7J3MkK8TJx3k7mM5HV7MULpZohr2hPLBKh",
  "key23": "qwiTgzRC6z16o2isP7VYRYhBZE2UMNy938RkXmdLDih5TCDfhPYnzs3bboLTD4S9WmePGpc3xzyEt2DUxXiEBiq",
  "key24": "3Lh1Q2B8mG5vkWveJ6iw2jCmvZRzwR3tugiqW2miN5HxcgRGcHowF8gRxZUXFESv5hMzjvbeNEKGYShgzRUv66oZ",
  "key25": "3hB8jCwnyti4X7PAW4t7kCxMUqHJfMkW8jUhDfkdyNgPQNFLyoNiF6TknhxH6gkLWN4LVmd3KRQroMZd7maSJUXc",
  "key26": "2tUUrh9QaCa1QCy4i7HdvvZMMKfFY5KdeA3JEsPBn2nLFJNKtr8tPa2QptFde6h75EMPm2jUjFBs8aFoRKjrKH5e"
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
