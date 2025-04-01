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
    "UAd5pUPG5ACT9KAtBddKzc9unT1iDfcC8dXg5xLRmHQot434vsnC1D2p95tMxLFd5iLAKjrp3xpwMgXyddgSLGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TrwD6vxKksa3mUimN8QmrVBAXmL4UgrMoEQW2hF73MNXj7Xi4wMdbRvMpu5uk2BYopiTEDBmXD18PjjEXhWrJq",
  "key1": "4Lidwg8GEnpWExw3dmXc7hRkRhkFAC6UpyCmnGSyTLxydypWRgAL61w1Ypy5AdGbgKSwtYdN54T7wQpSJVyHtihF",
  "key2": "4aW4eSZv1UgbzA5mWyTtyfPo4BdvNi6bULzCvPjU5BiDxd7ksCzpJv2hqsbxgwCkKCd7PxvkK462Nw1DeoW9kctp",
  "key3": "5LHenddn7kuuicHQsATmtQkZ2JnKiJtCnQw8Nqsg8juKu6CpENRmVpEVQwb7UNYthkAmCYfZ8hpEBNrmaznwtjRd",
  "key4": "2A9GAJo6MNTz52My4xLueEHtzWqUW9TPRkkqSrEqEgx1WtnBg9Ac674oaKrhBwPEVA6JMChjeuSVis74M6sUt47Z",
  "key5": "N9LGBKw3sTvtUrc6yHBaT87ADXhkHPBCVLYkN4kWTXKqjwpkqBi7bUhoyqjBYbqBk1v7m7vkQ8Ui1vfEsrn8mpi",
  "key6": "3ycux8RmXDPiAaxoKKYQFkiDrq2vfpK9nVAdaRCWTVCUdHhbLYLfuwqsH1ie21VCtj5gurGUjMXKrtFYEKx6b1fw",
  "key7": "2oDNtqpR8LLbzPgxYZ39PDf9YfvTGbgky1hHVVFw9RT5HStdpzVux9tqAnRaJb4kZPcUT3moG3RSEagg8epUGZi9",
  "key8": "3JhxqGt1oX3vTuSzbLu7qbrXE77yLGytkF5FwrxtX9S8CqyoLDcDykArJFewH4zHpjvYXrVBMXriPnn7gGZtAuN9",
  "key9": "5sbaofxRTbcDRVXSs4SbVMJ4mddxqXDEtcbEDWrKmLWkUup14ffhvgywDguKLQnejuitd4k4rg8vw9xsgmp95uLa",
  "key10": "CC83DERuD7tormxwsRdByXYkuW5NWw1sBbvAdafvQzuH1X7izBn1aDjygD2YwnQ4wYatk7XrntHGX778FtEbHkp",
  "key11": "2wdip2Kwp5NH1bwW1Epwbn9saejRdD2sNDtnMqP8hYvs3Chyq3xZ5gAZAYLKFNFHLtzerPfAkXUAuG2TMr5HgZv6",
  "key12": "5D4F3pxwcFZHvfAZQrX6iV6hVqFCM5XynEGBZD6ntFUbirhLcBNYX4kUAsgsMxPQuKacyxpZN4B2xaXhDE81JZeV",
  "key13": "61D7k1kD6A6tVMrwuuo8fQ1kzPwRTaaWuoG4FEWWhGupUBPYvcmNNiTjdRKhpoWPTZ9D4qMTojDUmd4KWdRE1SW1",
  "key14": "CeRaYVjevmcBoLHNfCrXfEBj8NwuQ53KSpzwuDJyh1uarjDspf47h9BP3e3tKddkWGrqEuiSA65Zo2xBpy9Vx5K",
  "key15": "EqJLf14xP6BfMowSMfLGE7vXdCjjrRsEcfPUQSkA7Uu4fFPjroVAkEVfoVaWQs1s3Xn7HT1jwfheT9gUssykvKM",
  "key16": "23H7v37j8tBU1CfPSMoJNN5V5xWxvrJkzhMeqBUMa2VpHnszhThHhLG1GAuxAsUfyZpMwKwWuZ7yDBA9goH1WGTx",
  "key17": "4haCm7S2WmLHhEhjuVNf61JufEW5JPnYqAm8VvC1odEovccQ6U5gZKtbHntoWy9YK5g6pTgamRQn1Cd8wf1Y5Ji4",
  "key18": "4A5dGx4qr2Cd3cn71MGUaE3KYqbXVq8kC27Xfr4HaEw4LJWBQ61mJFP8QW3xKPtZKaS9hp1x8GRa5ZK4TtiSy12v",
  "key19": "3gXdyhReQ9GBkCKDihMhdpgWHigVA54XrJee7z7sJwvcpC8xhfbwazufyMudvbEpw7LpZQuUMjpk2JD2rDjrQi7A",
  "key20": "3q4qjUiocBnjQRnuqZ4ioCDqao6UP5Xg63H3H6PyxMEGXXeFYaBHizpfPZK2ebW9tbPAqhAQTHkQC986zQ9Jcu48",
  "key21": "WMiFXw7u63Rdm2eZu3HgWLy3Fa8Pz7Mhre8APizhERTTQeEkmFDVATPyZzqNuVnTkAAVXkSmZS7M4Zw5grB3HaF",
  "key22": "zDAc7aXWA3Ah52hiReZhcmAsrhXwkjXbPkkuXsDgj7pJoLRkw2Txyf51k7vGqpoTgDXjeR4jg9ENGyfzX5okRji",
  "key23": "2m56h5A2DVSnacuR2CPLsJgsRhoT1HQBdQiqHXvLm7pYUv4BmoHfau4ZGsxtsbueaBkj5xvneGA6EaC6WuE88vak",
  "key24": "5HFkAhAT3ioWN8HzUGvpfkrLb8qmC5BoYf2sXtcc5ag1UDKh7zgqFVnSr4fdE4KgfjFo4W6BTk9wauKZ5n9a5cbh",
  "key25": "2S998jtq3ajXRM21RaE6p42byV1CDTU7LqqLbDxTTuCY5g4xxHsgpXaPczHxVfFXSLNhzpVKwNLtSRAzMBBUgxt2",
  "key26": "25kg5UJz8yonAWQYYMJRE7f9NZ3YLXB6cCiE4urzckXczLvquCyN5U1RKWMmuqZ8AKjSEikFPWww8csw5edZ1vee",
  "key27": "2gV3tuv1Vf2vTyJspaQv1goRXLVdbBPRwSg5qsiUV1KEyi9jPv9hBrvPXktntAAAM3KeTYqLYL8AmWXNSQN29oDt"
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
