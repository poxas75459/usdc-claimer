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
    "5V7KztHQRUVdyHwzWGyMpGNkkdrZn5JrTypsJRMRcP4M2meLtfHngK9c8Dp9vS78s24qarRCXVzf4mZsJTdRi6U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ndaJQ1DTbdCS4AGCWTha6u7zbwgYTooADbKo8n1qJUxRQBVdhSSjzsnLpS9Se567zv4ZWuRnxbdX1k1VnaCgiDY",
  "key1": "2C7S787iUNtukq8mZQaCWjzds3WaVT8bfHuBeTzp6mBftyxgWVwZZ64gzZPdwFRSTyTf97qaSoWPTbZczTU81uhT",
  "key2": "3AYAhmobDj9A15nU1SfXhEXbYNh1jiwMdZawv62Mj7wr5SnD9oruLAYvj2kCYRDVjkM3a1h1y5rBETjFXJxn5gpi",
  "key3": "59ujTwveDKavaEiDe1WNMHXzndWJVdhjovPM8CVKBoCEoyjceEdZyHkU59zmCo6eBbvjpPnnNigoTY94zC7MHixz",
  "key4": "4PECxDbuEsXX7DY9Vz7DxEaC6prZ7TTGziMpVqnQHRHHpKi1QnuEFWVyUFqqkn4xQ4eL2T5zLvJyur1o6TQ37rUU",
  "key5": "5MuumkMH9NqYwMe4D9Jo7RsKDccVEaMZVqFDDJwXjefYnGNtcDXXtkHV9DvrvYqkyXKxwDiJeNhyy4ELUSwB92Fq",
  "key6": "3wU3pWPnDdUUZVNkJrAe9Uzewh3hjbg5Rfb6KKeYmVyRfJYkiMed4oGjPPHT3hNW64LE1Dr4dUCJSK1XP6AVmxHt",
  "key7": "3XHkLK4n2zVykQ7snDVrbgHps1yjdcPZUbzc4MfBSQgY58TTCSDDSfU32RVRQHcNbBg2CaGegzDVdx713qVQiS9",
  "key8": "5oi7uNwb6jumS1LAvypuEF5FuUhfxofYDjV2fpGi7EtTUebgGagahphsX5tYXY53wsEZQvT9fZ5rfcoJXETiGN5x",
  "key9": "3aAEtAvXkhHciYxNwA7ZqgT6jMEqUCEDg2AkFFzsgH2LBuA6duCQzbUJpeHQRPBHa81M1rbCmko1eTPhXq57QgpG",
  "key10": "64qV2A7An1XnruiXStkGjk8Eaj4Yoh5sBvtzgPNGBaDaKZGJgn4VfTyNcZ4zhHtRGra8BjnWrcSBDPp3zspjmHL",
  "key11": "52A7rMc6Wy778RGcCysPvTnK47cjXXVS8wxqhdyET2yNsex8ogdsyDekbwFMtVFmUtsSmpaPsmYtNdtb3uRuMDD",
  "key12": "3iM77W3mtAam4V1dosop9R6hkJJQWfxqfxsgkBZW8PD1DuUVUAqvduHQ6iQUU2Mnrr9q51LigKcMuavQF9S87z9w",
  "key13": "3p9RpSdJBD9tAnwmPJsx2puqcDiK722291ESnE2GNh3qbCSMstGp9yhYjnuLejAHz9hDUp5JL26caahH9rmbJYyU",
  "key14": "5jPJ6yepogZFkUqk4KVdTWVLdMk2bMsDMaQTwTngNgYAHxsgrEpgxSEXLLXephur9HnsLYQkeuBAtVAERjzmRNAq",
  "key15": "5VhTNMEtpUx6LbBMrhvXWJMD3ZhoukWsb78HwR2Lb8nj7ThFwq4utPGvkVfYGQ3Aokz43bYe1jRyQRgtqomWanWe",
  "key16": "CvAhiLBJeDFBKx3AwZKkqGrZ3AEENAcnu1z3TJr9qhZL4q5V1GRrRrTjTUarbnTMSZvPXpD7MW9eXb8TLPADkCn",
  "key17": "3xM8PsGucdhfE79Dipthi8fnUJKxHfLXNJ7xn3ALvcxR4sh3KBtRn1uPkaMaykrMn7phnG4DqEYJUPKEsMQiSL9p",
  "key18": "2YXni3Unf6kMXRFLH9ZMhDtgFFDb71BT7RtWaLnMQQ9ikXe1d1M1Ybwit6u8Qq3WC9jyrcfLxJGpNiFAWX6SUTh7",
  "key19": "33w3on7XXVB7VgyweVFfkQYLSw4bsoEgRpjLrZYAYMhgWe7dtVN9pDZRUnHjv4PVq3GLw8wYquaJHiSFZvHFXa7H",
  "key20": "61ZPKC2sQbcXx7PhuA6uL9SkF7252NYDxnJJwyFP73mA7271kjjoqSrBNUpry66PoQV42wP5t4tJANJWHgNyJN1n",
  "key21": "2iH34Nc5kCE4cX8BPiFhopBfnkPrxut8AnHRPsuwNcL5nApsd5nMyjLDiuj9dMJpAbTZRfwc9XNe2ojSmxEas8ES",
  "key22": "3rJFK6Bcs4oDncNb27iHt6sYoLwgrsLWVHe5mTJ96KckJvsui2LY74B2yUCGzVvw56GxF6eCRHzW3PquLqcfEYbe",
  "key23": "2rTeofsdHFdGaBF9YNwtog7hnW1U452dezfAND9tLDoSo6CEsJEaQRQ5imRshKyJqLsm2bMdpjpUXyL3F3Nu8RSK",
  "key24": "3PPAGaCpBb9W7VGCURqotNQgvtMURxwhq1K4hP2FsNZ6i4MYcqyc9nh1VmCa5bqa6e8GPWJrV4Y1Tof9Y11NzL4w",
  "key25": "5TaUEWubfyJHo3CJgTg9w2HSAF52oRd8AfEgmdKVxuGB1xChbkNcouZ3r5DvgStDUfpXWZxRaL18UpF7xMH512KR",
  "key26": "5fhLMQZchPtey6zcS3UsYCLENQGG91GNPYQaMzLXcBaSjucHkmR75xKKmXK7jnXGuBHZ6m8nZVQGpNX41aY7EaCD"
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
