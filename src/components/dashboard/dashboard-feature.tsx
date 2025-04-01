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
    "53m4wkpFBBe8XbDiLKkAt97wJaeqfrHytyxF3zGTYxGHGdnyM1GeeyRmNroNr95vCtVfg1q3rJRmz24mRzdWHDxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pMdpjWdi1jvuCtPWdQnL9xHCRXpxbSstGjaAk3qH3v8KDUEqiJ1ov75Kbt2EqfnqeUWGFGdP9o1aJqL84h9rGHM",
  "key1": "5XJW6UVn6VA5yz1BKK5LjheW4o6iSroFCqF9PWWJRk7y6m9iE4gpkNC7pdE13WzYMfGFu3neEDxBHUZSLQYEQLr",
  "key2": "ijTA9YSLNrSRNvWZStJ9kH89evV3Su5Pmk1NK1nLDrhPr1qEV6dErhWz5RXzvvKnDhDnCHtsDVwgyafJ3HfdgrT",
  "key3": "3q1ctT6ky7a1J4iZhWqMhkC9gm9eMzjZsQaGjSQVtgNPm8bvts3jangrdw6tVFqCRG19Hnokz55sPaermsJ7p4h8",
  "key4": "29rXcJzZp8igYWV3WbtDyyc3QbouUcWP5KaZnSnNh4uguSska3gV3LgAMTzXfUfUBDipTfHQHHdBAHxinsDVkaMY",
  "key5": "4pf3oZ22srwzxbhCC2W1vJG7MLLPKxk142AYz7FUrarfbd21xwCA9othTSZZ8ppeM2bracU5hwUptYxkWA7LPb3C",
  "key6": "5VZXdT85qCfFBZWYwPoYEesBdhuXasWGkz2f7id3TboxckZasgC7qPWbNGcbmsqwGypghzxDNmjf5LZAF61oETFz",
  "key7": "phvymedsRmuYQTGgLpAJHmuSP1QuVikdHoMg49qNDaPeh15EyqV7X9W9hdCiGQ7gKF7WUYaeAXXtfHtN8wU459n",
  "key8": "4dZG6p8LXDZrarkS6WupuPF2E27tTpyMk5asn6JqnWU2eTKhtE9y1Papx4NBBXGktiddNnsjRwftYGqDTos4grSw",
  "key9": "3P8YJD8X5rA5YoYwFN5zMi7neLdLVgmgp54MYWho2p1QjwdxrcESs3ScgfG49BvuwoidT7dRjWMEqbtaHhzRutgb",
  "key10": "67NkezrUPDXFABVG7EcMWau2btPkC3f1sKJgNMxCTmAmj1c7NMiag4FU9YZi2Tha3beh3vygRYDUzJxNEJEtKa7c",
  "key11": "H8ve18guCVYYaVgdddiDnjywaBQ9Dr6F8qaA2eYCMh3JupnqBm4bvY9fu8C3JhrdqXhMTgiPZWxgkn57LtFQtR3",
  "key12": "3E2TvDPhm9kQNj6GsspnUMe1NXBr8tFsARTcDS3Ga8UkG7ayaoWQ1exwn2CbWu1xMDMeAKWyCGcgvEwbPjnaRRUS",
  "key13": "4V43vkKEynk1SZWtADBmnq8FfegkW6C7n8fwep7tB3C66qKdoeCfr3MxSDR5uxJU77p5h9fLKNrqv6mU7yM4e5F6",
  "key14": "3sHCuRwpNZu58hSgQhbgs1Pr45QpFScin1FXYrBwznxEbJ6PnsuUU2PaUM5qeeo6euC1gEMPvkLShiqRrgPPYBxF",
  "key15": "3arwFNjU65SfQN2JyZqocUmeADEcrr8TiNvJjjVVyUUKaAtkUJ3gzQCJNJcvMMeiujXVQcsv9h5cTfHSKi2pQuUB",
  "key16": "5Js4LUTQj2YGodGJy1k4r6dahNnBPwKM3bufTcjxRvkAFtagUgPXYi5BHUtb4fuMMw2ojC4rys7QLpcHWgvzU51",
  "key17": "CcbYmh5UFyFqRLVvyNyUUbxt4UqgM3xJHwDkoFybuneUr18XHn9JrtrpeCBDLN4zhwyKDYTG3wNFUQ93Hjy2x6f",
  "key18": "3Cn9F5upixn4waEv8sNpDQXPqZ6i6iwbVtsoDcpt3Trc337FDDYTCqYkf1MQo9mSDtYc3z8fhVhN68oVvtLH7J81",
  "key19": "2nocqQyJYcamDrJb8b82vWrQtRJzVsQDKoiPzKM3A2bbxc82A7UXtaQuJRAkXtrZoQhA1EaevmDH8pNpXdgECLvA",
  "key20": "3qVjT7wLppRpNGRyRDqmFcNW5oez8XhWB1AxN5PLUGcJwwkWgzuxLKPYzDYhYGHWMnfZM9DAk2GegigpSoUv3WHf",
  "key21": "2vifVT9QzkiZSbJFvP2RaU9CXQQv1c8Q5PHZHGRAGcnNRc5NXjPA7Q32cq7Hs365yJ2nk5ozoVaGez9h3PYxHeL4",
  "key22": "nib94kAGUPXwwTvRzXS76tCGJwXnNAs7ukE1ikMN7JyyAQWhWPpQnDkv4gmc4XxvU6TofVeYf8zDZLiEXc2xh6D",
  "key23": "2JxVMLatH4opswA6etE8CMtbwJ4EToVcNjp1Rfdz2uwoCKhzqWRsuTiezG7ZhWxitcnuzKz9kut8pabRAMds3EN2",
  "key24": "3B2dSedqTwgHzFv6sQKrGL8ZuasCSQCGRhCZj6Fu3o1qmcm5GsrAAX2y4aU9UartmE13hkZLQeFkYa9N7LahGeWi",
  "key25": "3vrVpsmrnnnbfNCoWLKokmQZ7iiJENYHeKT4zLnazqp9vSJtZnVEHtisBhy178E6aSmduuzvEv7AqVvGBis1ivT"
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
