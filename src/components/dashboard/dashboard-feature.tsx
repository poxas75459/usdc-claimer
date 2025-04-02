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
    "2XouPhbesGyZafibXKvuQWu1iB3kKY1PWPSVpQwqEjBwJAazdiQh9VPT5CSw4vDMry7rE5cQ3NBf6fjZy7RaFQkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58tefv2ZXsmHWP9T4XRTVosv3s4zGGZi2sZhVNGYY3LD8xMGjuZ8G8SgRXHdXQgtRpbyDukyqBvNHLzPyLUR2cTZ",
  "key1": "qtLrLVCiwcvnKNvd8ZpC2d8vcZ237YbAKVPFQzaSNzuCzNWpJC26FdoYwQrSybHgyLXn28sByjukKvX6HaGTuq2",
  "key2": "4BuvD9PV1arxwmhWZZDpqNxFH5R4Dq5Z3YKxq1JVyeWEwGDz4ZPhBXdRQDaRcgGvvxdxhCYGXqG122FgPwDHFKgN",
  "key3": "3auYoKN4cDWUtvkyeFKVvjuSK25NiffYvZkQ9gbujBqqvGdnwcsuvQ8fHjLxKS5mEGDX4PmpCdGAHubsP5qVrL8N",
  "key4": "5htH4pqm1HBFDoiDTL9A3jV9BPsRsZyYhXVXzXvLgbDAqqTs47FKRLeVvUm6MaVESHKnpXMTgH5YCTcTnqvTFXuZ",
  "key5": "542RNk53JXHN6PRm5DGC6pm1k1WpvUpQuMptAGEawYuchPjmCXXTvNNihqbkz6mjV47YnXEz13jQgeErjQ49EfqQ",
  "key6": "3bPVhu5Bv5EAJ8yEkSUqWDffywAcpFMVvfLNoBmAJgTUg7ATRWpSe2wUwqLFm8idgJquE4FNvD61ESEdaxxqPPM6",
  "key7": "4bAHwyU5xfLduU99ghAgvfBbpUy4KWMe2aK7Mv6GjsTY8z5CSuMtMJPPaX2pj88es2PW5bCSYDSwa5kWfeHUfAC4",
  "key8": "2DFvYGGBVx1gCjpzPFmVdceUoj2qGEF4J2UEtKNW7crSqWPa3M62KVG7ZFvZg7UCdpL6N6tWaTcy6xxFB32qnfbf",
  "key9": "RCaaA6mvkP6B2GovCeT3xTUpWxYj8yh88sEkY79VwLQKVnNWAGcEy7UR32YGCZxPrRpp2QZ1E5rXmvxPsZ9rPSC",
  "key10": "52AFNzCpHSjLDBPwErVZggfVPkJKNJoABd6oSzFr2L5pwgFA31MYbFgYujwrEsb1cHV9qZaiAJTJJXneAMDye2Au",
  "key11": "5Tv944jNwxtKGAH3XToziCtVbpUBJXHGoMsZH9Kt8RVonFhRghws88PbuQyN846SKuRUZzBoDJC6d9zkhXRfyMBS",
  "key12": "5G9odiG7DcKtiwyJkUawu7hgbttTgrT2oehrhPxhiLKaYT8P2dsoeru9H8RVGKx9hTaBkX3wxNncbahrL8Q7N1Dj",
  "key13": "2QeAwbcvcRj5a4DGh2jzstDBoRqg7R6XwAtGN3amUSTsLDDY47N6wTsZMsYghrA2n9FJPN13yDyEHkvYfn28shoj",
  "key14": "4EVWBWVmZRSmgkeB4U7Nmycs9LnD2hrZ1z5SwB3tmMrhWL3VSETNZe8jTGEf7Ps4dYF1RN2Xf4pfohGdHQgggoT1",
  "key15": "5v5AfdBsVDLMpGkjCwH6yECi8adnbSZmLcA6U6AYsZqdB87aeWXxnGRUxTmWQNqzdZKo1SMgCrxeshpaZtFpLgjP",
  "key16": "52RrMxzporFX7aKaMayYz6nrE5fPQcZwygNrv8xMCsY6ZnkWdWBM6uJ5Sd7M4UXBwFDa2mU8mUxzxEo3pJKPHogs",
  "key17": "3ioHbtedvyMztki4wTaa9m2diFhVzE37eZq6oCXpxAt8nhNKYhNgXA8okPJCmRm7ZiUuYKK131tupxihwJ6zVmmw",
  "key18": "2bG3MjNh3QeDZW2eyNX8PAs4HaKt6pPQ2VT2v8qi7NiBSdrPPSXRA1SfUyWXnaiXaRHnf1ePKFqSBXrvU4snmXub",
  "key19": "5h3sTDKUAEigUpo6cMJsHD2CSwAgPq7M7EiZx9zNDuHdTGqfuoaniZmBwyw5S3QVuws5ctRipM2pLFpSyWiESpd9",
  "key20": "4ai7mELQBw36v4VzGjraJRToayE54EbxTAcxDGrpvLBBcDDwgqyXfzDxwceiVzUrumM8RM2NiAUzdGbndvMb42HZ",
  "key21": "2HnuHhDYmxsaDjeCk6jpFeHBVYtWwmNa9cruWqYbZ5Fys6ZAWS4rwyGsgyAFiQJrffWQqcwt9HoWdoKk37QWsYQP",
  "key22": "5eXopsAyyBXC5E6h4SWVcv3jaC2MMcqeUym6Y52TfrLQvAYuo8qMomdajNFMNfaGjHfZiMrgdSFBY5Jc81UU31sE",
  "key23": "3fRXKKB45gQQaujePvPhEJHfh8CoeL6SU4EEwVVbnJWG1haBCPyNQF5jdjNsLPfRYEMkyUchZzES19nHDfTBpnUn",
  "key24": "5Ca4W6hcmiDDNPspe7vujW49cPAzjGkN2at3fRBnRhQCc1edWuzGHyDa1euxNCJGykWevWvVwj12mqTXxAHDo19m",
  "key25": "2XZFW6TvQ1nWAqUp36HVt8gsxLD9Hnm4KodvZb14RTEpYKheawU6ZKzakxev4kj8RsuL2yfQ9jpJV59h9L2zBfNA",
  "key26": "4fe5gPyWYA21Yv3NbatJnbvM6kPLjfC2buBrqkZ44j4rTw6ucxZXy8ZeDq6fxrWJAtd2VeQcdvzQ8uAXfPwTPyYx"
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
