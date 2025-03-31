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
    "4S87DmdDozoFzC1GREDsChWWbwZcg5t7rTQ4JjwTi8JhPbncGE9x1zWqbHsMntkEfbG7NxozzGaNahDJurhpDKKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EaEWKeZM4uS55bSsBZfM1FT1LRUCQdZ9vB4SGg9Wehm5BCNdrbahmMstUbpyrqjQF6Pt81bNLHQPkfXcGiL11kE",
  "key1": "G4R19pCa1EWTQbHmufzgfSy1YjiYX2Pf23CQLapG3hJ9RGNdAQo6T4MzqbHbQXWj2hxK5RjKpCbdwUMQzh5D1Yx",
  "key2": "4rGeSca7Qo8zhYhat9fNYM9Zerd9FYwCdgNnXoEjLxEcdMKoHi7ACetWrrTrAr7tNRf9py8tpe2M3rRJqnJ3hjys",
  "key3": "4maNDJW3sz3EmeBhKF5R2Gi3Et3GhosTymA8NB5FSYBydy8WwUddTSxctoBk5kReRLRaK3DNASUaWqns84UJ6bwJ",
  "key4": "3Y4tXnUUgyuR7LwYReoAkwShQ9mPcMahQguAsDELEzEXkUoYU1yt7GUwqbdtV2eEPYzKBS7Bq6VsawqkJ2T9vEiS",
  "key5": "43XALJnjz1VLBBygvXDmHCE2BfLq8NJ9mgFGwdCyzPp4LQu3RopZBfzuhtdPeaYGT3NQMHRRyaYyqMHWuPVRAor3",
  "key6": "GvmZPpXR4bWFcb9VC88ze495wv9ENAk5T6xiekkfDjVGwxEfZupKY3oVNBH54FfqTmsfGGAkqPxbHQhXtojiGCy",
  "key7": "65ihHVdN6Z9QjX2W2fXTZNx8GGBfHs4acDkvc28DdpJAagKxkPoyMG8qU6uNAgA7mfkGP3WRN54J5HbjShGu7qny",
  "key8": "4tznnXM8BEs37GNoJX5AaLcpAsZ5WVfWWWnMYpvPviatDH89SieyAZ8BFp3cHLopWc4rPPQsMJSd8ZE6da4gT8DK",
  "key9": "4SbB7DcxqupfKVaxAzDNFCyaT7CAtqxMM6rrabznp8rjsU7HJfSoKQTQQLF11YeJQrAJYQLRrrB8D2zVQm29bzBM",
  "key10": "JjkcBuMeg4PNnKtkRqkFVDbVCkwcjtDNegBU8hoL65cBYr5RoZNZEMqP1fUmbHVuQ1PMvuz785b2xJgCS2amCaL",
  "key11": "4GPFQVe6adjddhjnbndvuvBmUaDULSE1d28E4jSCLRyJdJTUKxf47uRq2vPuvCLNYJPsrwpoM46kohcYMsi2W6Gi",
  "key12": "2ttrRJx6pEi7V1Sgy1r32fNCvAsGJ6T9WiTiCCscUyURPxPrVfnuUtL1AvyDv2ampx5buXzpoNAeaXBtPhqFg1xi",
  "key13": "2Hxhhy1hu6HmYQQqPfnqSo2cZZFyCHxovEVPWdid63KJJxt92an8iJ4DzTTaBF8wakuSUER9wkdTWgDZvxNCSz1L",
  "key14": "M3vPxvxfrzcNnhUZMWHV2bwLZcTasLdQB12pVWBm2gHqmYaj5cPXLmXKqdu18cDWwtTR7746mpEZ7cTbpDc1zJZ",
  "key15": "ZVf1uBrHAys4mH8hQjX65qVpMas1eP18VuEZgKxkf53YaD6dvMP1grxTHxZbu2RiAJmGfKLSLXvEh32pWni322H",
  "key16": "49BMezuUXDBqB4fwZg98ahQyApsjVJosoc1JjcciWdDmHRyYccRRcp929TLDAUzFKfYjrUPnVoyoLfM53Hhw8ECu",
  "key17": "4SE2PmnnZDATr9Su39yUdv3qbhdAADvqLEyLeYaTSL8D1ovHkRL3vCZ9W9Mkbh23h1hs1eez8TZxcETfFp3QMzTD",
  "key18": "4eRyJt1ZCUaxzjYJnh366y4YKQbhtyS5qLGjEnieTEuvrCZYFZPajWTgkH6hPf6NGEBupEzSDmeESDxYeonn68Lx",
  "key19": "5PSyafJUxvky16ANZ54DTZ95SvhNh2z5B65yHKcAV6PAgtv1cfnL3LYN7XpRN2PGDYt7iphLe99Kafxeifohrdqi",
  "key20": "5fv3r9zexpCW35851V82BduQbmZRBfGT2axhnzfBSF3jm7VeeF8f9Rri1aFVeZVVVhkufuEHqj8a7unkM6A8L7Pq",
  "key21": "TVyhhtDEu6QnsmRvrEpzvXwpRXoom4EGzxjurijwE5BH7DVpXNCrTKic9toE6TZms93RS7n4Y1Bt7B9EPCnYtTx",
  "key22": "441k2K18QqGRUPrNaTv4srDKg6D41hgsSStCeEZLVnK3mZ1PcFYE7jC1S935xio1zKNJSvgH52KFXTXpsVEZ23Uy",
  "key23": "2jcyvtLqGRu3QG6bdQ7NzfsMEThgLmdJvq7hk8bGR8eCfT34k3nkp3vFM7mWZaV4kC8iY9nThnm7ptRYkzs7mxVi",
  "key24": "WyZ5uQDeb3NSMm8kxyD1a1UUcxj7CeokQ7CBkRj1mKMxAbg3y77cTDT1C5nxAnajzdXLHSJeJWy28PCZNHxv9nH",
  "key25": "4YUmPHBvvk24iu7yvxeZM6vgzegWTBsDXXCbQNJX344BpJZgsv4mqCW7Cv9jVj2dTsQy2P1i8B3cZSNCF7oYk5Ji",
  "key26": "imBGFVPBWCh1Zg3ZnQgeM7gfGyoS6HJoeujhrpW6ho9E33R7pBM54xxstPuXChcgeShN8YnQciEYyEdsjwiNyMu",
  "key27": "2zuhsnpk4gNpAK7PSxW5wAuhJZ4cbRV3xPHYjMKJ9ndTEmWjqihK8X8RHLTrcbFX5XtM45pnoZ72tLAxsyRceRbQ",
  "key28": "455iAoQmNuA3VXji3L6EWjrjHE8KsfzJEZdFq4t6argqd668hxN15MbCyECPaeY3hPzGLsJH1zVR79kKLTEpv6Z4",
  "key29": "3bb4BzqXAR2aS3Von1CvXq5BEZi1dBL3KThntyZCYvasVWJHnM2HVw2kn9wiDyi34DFrxv5SwhgeVx7axZuqBzSN",
  "key30": "eXhutVcRTnudn8nAkZmssffX7scq8CP3c8YRAYSrEn7cRAPNAyHFXZbQNeSagAjvw5mLYTH5vzjVqs2Y4RLMa6x"
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
