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
    "451G2YwWN59cXT1GrmyWgkurSphp3iLDqvLeDvE5nESRRpJYPURgb6FKoYbdRaz6X4mTrydgYMWALFPJy5ubEvkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pwvg9hGnPgwbeFzbtQJ9qPNtcBN6sP1EXR2JCau1GQyp6MAHz6DP2xsS7LhF2q2e19skHEKkU2vNdoJGDZW36AJ",
  "key1": "63HocB6FWeKjEBNEQbyusJLR1ZpQWFJWXzFHv6FCWxfiVGhjt7EpfEZqwQHQsAB1rSkXjoB8ijegiMWbtq82pQ9P",
  "key2": "43fECxJBRFLnmiFA9APVs3kecyxyCdaC26XKtcWiaahybRsdkjtv2JrHfQ6d7YkEG7tbfsmcWKE77WgC1ioPMe4D",
  "key3": "2YEm5YfAWmLfvXQCArrKMPrK4fgkznVtyZ8fKsw9BafVLGBS69JYPzRhT19wPFkPcTMY1EsL1LWvVp6REhMpw9by",
  "key4": "59eTjwraaKXEHNQ3Lfvwz8Ma8HgLUT12JZCpHmneWWipLLTa8LYuRXNQijrLfxVdM2RUMu7muW4dLBNKotXrimb5",
  "key5": "6717ZqMcqc6AgwQMh71jGLBhGeD16h3nhvGHvLn9vMUKUvxKoBw3G91zH4ungNzUK3UnC7ZgUvvpgr1X8iFm4cZz",
  "key6": "2NfakPoKtFvB4B8uTqBhPK9izACXzbKV16tDX8ZDsMvXn8iTPywkeiNYfzncHBYg56Jqba8T13BbkGiXziubSyx",
  "key7": "4YSP7H6aBxASct9WSrdKCnve579KAf1RYSKP3FYbC7UqVsez3uwcVP9yYUQpqmo9WZezaaDgrGHExS9SgJ8jDMyk",
  "key8": "4BqV73WNSayY14Yr6Zi8aefwaY32q3ExY41zVLt1GpBNizTjP6i7Kf1sHvCsgazPPoXBDCn7MAEqncsfqd6Tb78",
  "key9": "2vBJGj2FCTA2XMV87szPoF4CdJRMKNTHzXq789tnNi3xuj1ginFwh6dA6cHdDyw9FTVVKRFexffsTV4cq6e6sQHn",
  "key10": "2UcotxKwQYMXkVDeUYnC1zPMUdbrBxmkQyRJA5L45iY6P8MFdUUuu8YMBVMvCz6dZuoCs9z3tc6wbSZrgWASCK7c",
  "key11": "5oUQzKwp5NU3aoQGcGndHYf9G2vwPD2Tm9fau7ojzXHHM8VXYmiRitRRiC1iZCbjPDqvZEhBw3D63qkt9D7MAofx",
  "key12": "74di64n5LwxXs6WqUQFChH3td5vpDnFNe21QRZ31fApPEijTQmc1c3b9eqzdCq4XuznJVMVqNB7Jd9K1FZpn1pk",
  "key13": "VMKyoBv2VsSXU6yYfdBHMNzwSEKMy3maLn9Kx4ZzviUCiADVaybfp2HCMRsPAuR8gAeYPzuvppZavM9eFUvbFUv",
  "key14": "55ArpJ3FskTYynDcT7TUzL48NdJ5ovmQQj3C3M2EaxThUAa6P4xe461yHb3ZTdBixFfo3ZizmuqQUxDYFA3kVSRH",
  "key15": "3Gt8PspziwsRZCvqyH6mqCZmBkThjL8JFrgdbct7Nm5QBMdfnVyzaFmhAzs11j5jUbZK7df5Us2LGXGkJRh5RqNr",
  "key16": "2vYZVvpwU853VMBEJoAJieWux9mkwTdVvg2YTiQz6vadbWBB7xwMptQZQsu7aPkYTTCF124NH2saRJbKDYCiXwx7",
  "key17": "PVgDnRwE8ERwWdd1WmtXmTbG1MNBstaqvf2daE6R4ESym1kfUjx177FPHgwQyrWxXajqwPGPuuCjmaNe983vVrC",
  "key18": "48a3WVjnzg3ewmWfM9gpbWNqWxcAURxegbFe2oG3bfaGXPtJhKfm4w11BNYQKidrzDPcBwf5w4XUrWs732GRsR2e",
  "key19": "5zAPQBBDnEb7epi69Y52ouZP9wewtJQAHSKyvqcp1MF6gU3JueU61Ex5xwwqfqx88pmg2o5kHUGeyRqKae8r5Ptv",
  "key20": "t3sZ8KhmQCMhuBDg3n7daN5tVR5Rih6AdjNNZZtiXz4Qei4n5KTy2BTXCjAq3qSaShGas9Nu6ofa6rCW8XNeLdz",
  "key21": "4zpy1F6f4Hz4wTCT44iJEons3KTrEFPGMAQibTSTbpnsqf3Z4vKCGEfmevnGvfqWm178STEULyQdL84AWtTYToxn",
  "key22": "3nv51jiy7VUGFEh2TELwf6KMG6fQvaQUzBsG2rZ75c5ywhsphaTCkdk356QT89P2KN211nWe5miXdXPSdD2h6Hpy",
  "key23": "444pyV3Za4Lj65HAnTVZJBL2gvVaCk22F3sgmmSVjBB4keMHq4PkUdXrGSzSyf7LS4D3o56f9tw3HgGzeCeXrnbN",
  "key24": "2KtbWRB1f3HAmy9XyWMCwBxfSdmerFqaYWdEVGoAkgv8wqyxGPaN4qmvBG8fAEPWCpFmJiNJeTfz7DLjA84QFb52",
  "key25": "4Z45frGYhUHgteH8toxjKB71UZ1J2w9jH4GwBLKuhoNw6r2wXiKMQRP92j4mCtzXVbYZTA9apKMrFbpNuBkMZCWy",
  "key26": "5wmUVv1wBued9fuyv7r4xYHZpPfvyHUNF9fWYVsqsZuxPzaJrnT7bETAi97RJzZzw79USowFgtzuHSpgKCgT3rDE",
  "key27": "atuYscf1ScivY1Cs7zERVXAkyhP8py3EVtaGczZ7Ku6UTxRQiUBawbVeAEgUndJ9N98xBjLRr9iBMLkqoMa9oDf",
  "key28": "5zZeQxxy2gitAsbVzxzQHuedj1tomNznYLtdTACZfa67tDoW67TmQSQmoieRkKDK8g5iANCxfToGCaoTwm3Er7Wj",
  "key29": "3AF2c9rwtiKfVAVj88oCEJp7vGW1wpKCZhYiAR1VMZy5Chag1j3J8QKjxkhR1Fj9YNCd8aFqksSdc7MRdYSb1k72"
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
