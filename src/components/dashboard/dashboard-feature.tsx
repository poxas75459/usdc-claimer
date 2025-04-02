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
    "4Xafccum8askDPSGdayRuUu93rJ7Tbhtyb7grkvpXxWKK6XB3q9Q76p3bLpQrfN4boBymy1uzEchNPEHze8kZMYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327gtjZwMbwpMDUsZxkbgqQazirvf5zRYmvbAvKG3Pz4iEECgoKnD9yV8SowjFscdGFBVgypVEkB8mUYNbWZR35i",
  "key1": "4KVv5adRHAyjZSQmmGKBatXMLUUdFhM8tBBL4rHYfuTxhGtJm2SrSrgPUyhocctfuGWfSVMGEARfncUenVFYAh94",
  "key2": "5C9DTmwbjxRo6BXQC5HGk1mDBGWTwmWg3AQpKLZ7nAtxxPviDacfrfENp7EM6w6JA1kg7ipzekKqrGRTWw4Qk3WP",
  "key3": "35yuoRdHHojebbkxGXUfmALMxnFNUdEfGBtJSr3CkYTuGkoQvzsp1kyoGMJGTgdFSVtSi5cXFMQGsDyUwDCRodmN",
  "key4": "3br2REFRN5txtr4qa6eWWqqsZGR4P5tdyhk9csVbUnt3HZ4WbHfHwBTeuNx12g9m1dtXTVfHkXUg6pGyCbAqwGDs",
  "key5": "62fUGhAugda7CPRUHCTLEAuHkm72V2qNJojXZU7xAnUm3VRcUA8SpK1DvtG1AFwVWyGPiixAkjrEeyfEx8JVka1Y",
  "key6": "2uVp3931jd5rEXpjK9ojfeL62WCgtWS5z7Zryt2VN94UYZTHGLSpfgntZMerimsWmnHXB371AKvDCpkmibbHTgCA",
  "key7": "4EUFZwP9ZkLfJB2qvox7b4DsxMrcT8mThu2ZskdwG8y5QgHXGqeQAXy7yGymzzjx5H9jZ3pMEqBT8UnqTEzdtoZj",
  "key8": "4RESXTW7qW9dhDqyMba8p6ZL2JprsWXJL4dGpQSrcE8aGFywG1aPzhwPqfuZ5sSdG1xrqAwPkaqApjmPPhiw8vUU",
  "key9": "3otrZFrEJrZ1Ee1uqpBQnW6Y31B8w2ucm3ndL7Rv7Dbmf9FdkZUsD82twhLDqdkMu2WgZB6qhk3BHK5otycQ3wFB",
  "key10": "5X7LCwPZHbYfRu1uFrSaZ2ncLm1L65UiZqYJevw2JrXxENmR8dfKph3oToQDeVyT1VN9zAtqxx8iuzK8yQXrThUa",
  "key11": "4bvGJWGc46LeBPzJLE5NSppmfs1fjRvXivtodqrh4RktWLbBajCiACoK1DuNc9hsqBZCfmZtg41CapSGWbuE7V6E",
  "key12": "3K7oUAZvtyu6hEuhSPGdx51BaCbnWFDkxTycfeQiX4yASYMMsid3YedoBYq8UmN6443grVqKDsn1RUJAY5GNFaV",
  "key13": "oyS7k4EPsNmodX1eRpyeZ3X1RxS2j8HiX3EYviTXpkdoeiCcMetdTfMguAzzv1yN3Q6g6EzTCqV9rdPNiTT7PPf",
  "key14": "2T5rE8ACQYAQWY98U1tF5vmrZS2EA5iqs2FrBHfgR2GTBABQjBASzGkrsQwca9z41R26GG6ssd4tKtjTiXm8Sy1F",
  "key15": "2v4VYdK6FgbHTtPQS8P99HXQJ1pvPXNz3AGciW6V3Jt7Sm9tKrT7JY6dMk9ZeCAVq1azinCNsYFghUvN9sebU6of",
  "key16": "5LcQKjbfHr38Fje5FYdxcTdXxknDqkMKp1pKzWMNRWwWLyenqhJLFX5DisompQr1nmJhqk125iHY4SFqAyoU9fy6",
  "key17": "4MCg323nMBtTJwodVrKig7bdngUAzQhUu5NpaUvKktPAvZizxFV1JNpp249zdjWd11SYHCakXUGsUTtcRWpMgyLE",
  "key18": "5FwahM8KPPJ28jcd27gNkXYtvFZJAoyjQoRLpiGLMpH6GewkRPYrRW3CPGU1uNz6Tfrf3BkihQsfjXS2Go5STyZN",
  "key19": "RFEBJGKwfrnNrnjePCDmHyTw2hsNaqpmshEEbELBsPUVTqiGFzD8j3hZbo2EpPMUShcn6tZpfFLfwZHHeS65czc",
  "key20": "2UYjsJyGMAm59fSLh1Rr8spywYmSFxVufwoJTQwBwaLaPjXgXXp4iPQ3xwA6tu7GrnxQ4DEoXCFXHg7ruH5TbbtP",
  "key21": "2r55GZDGNEHZZCsiN5RVaWhEEjsmhLozoKBXCyrbrE6CEssuGpSxYqvvhgypZoLGDimTMyQfr2H1WzLprzZzd4MR",
  "key22": "2abmbFv9ogCPQAYfvQQuXqgnnjRgxoJDBFLQyfT3cii4QzxUPsNU5pr645rUj532FmpvL9MDQN8uvvWxFRYBhNht",
  "key23": "2Wb1He4epC75rn6LDFF4UfzaCUQTiuhEfVne16vygJqQC9z28GhJ61BDGWoQ3N7YwnLFLq8XhUxgRqQkeHJnwKJs",
  "key24": "3wamfKPWJycjEYQC4S6zrKSGfnU8c7vWW1UsfyzMHxjoRJPtyVWDSxQRJ3b9r2psFJtRLp1aAgQucaC4i7KAookx",
  "key25": "2du8VL85KKdRBRsGhXNkUXqy17a2ri7vQZXPcJeEzcjo9Z3ed3rWDfZ3HKJMPVDETAnmg1JY86rTZKGvhEizrbUw",
  "key26": "EjzhkJfqUn56SVCSTp4nCT7quUruu6KLKRVEEHYSyWyPnQVZSMHfSCMiEhVsp84J4ePBXDSDz61gR8nRHGrwcpV",
  "key27": "LhzyvF9Tn6Ticv33QFUGdLDcPKuwCa8uS3qhMkFw7GeNvn2tYikTL9jLtzaByZMn73yCXN69TFyjF7vDR7UbvLu"
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
