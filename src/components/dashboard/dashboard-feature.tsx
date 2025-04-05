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
    "2Hegr2qTvsbQ1d82bfucpLnDBxzzh8YKA6WnDKxHMgxErbSsGG5GqTvxGDUuQhvv7fRceVS68vaBz2tTamAPh2WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KRtda7BuX3fLs4N7HRgoUZKvyZWUcoLJ9moWAXx39HfxAgotNiv44EF93qiGz5tFNXC5Lhxtozx7n3SPd5j1bJH",
  "key1": "3Gc5NNhbXmhqtqY8aPCoVdb6vwShaFRrci1EtK9MPoyKFLTheBBm64zHgzT8HuRmRfULAG3A7aZV4qVjxRn86vic",
  "key2": "3zgwgDBg9njmHWNLDRQcdMDGkUYkKo5vRRo3gm2pzgTQ96vaziN124E1SnbGQ1GapK5tSVoWzWMY95UD4C8kK28H",
  "key3": "CLV2MzBjq4jkohse4LNoNS9Tc8zyvJqjJCecJJPhuTQCoUEMgWJFEdZZjrQWExhhB8SvN4b5C9CZf2svQKKh95n",
  "key4": "5evTwkjw4U58ZTFtJFDqDH592pghsUitJQG7ftrs8DmUqK4xqyiApjaAYahDEx8aYfWV3FhFxpVQyVfcHaVBbvWc",
  "key5": "2CztaZbp4Bga6TeqPoWoiXqK466p2DmML92YMTVjxjXkxhgkBC74EpW4Woz7X2pdMgnXMg5uJFLmKTbvWKVDdJC3",
  "key6": "5rbxLUYy5MaRkFcYL3ECkMczrPxmEzbvSsZvtDGiaDHEGve9eTDoTUukNY1Zkaxmbj89S2kk7izjtg824NX8M4sQ",
  "key7": "mku4zyocb4BpVoyy7cRm1mpbe1cne2B7Yp8J4kz3ZZsr8YJiZd8Tfn1ay3AHyz3wM2KApG7cDXR3eZrRuoigmMt",
  "key8": "2VWajcnBKau1pFR5mP66zv3MmiyNtE857ZNsGJAkKyiejn6wS73KxT9X9ZZd1t1YJnh9zbs8HGaR4FmqArAMD1xP",
  "key9": "568nV9H6t2am5Dp2UgJf711JdvhKPvuq4rnYXPsaSgg4daX7CkNboncMdn9Ua4qBnFNfVVoevCq1q92eSAW6H7gj",
  "key10": "38vg4z2YfCeE344dBvd7yqs6Ba6Kos6HmyA7faB3wSEX4Yowig22mgYqutj1gbw3AHTVvci1QRTtmr9otCDoSV2t",
  "key11": "4zLw7NbusVNMLgUsaBNTFsKwLLEngRPErVKBrE8JweBdSTTdZThUmuySqpjJVZSRRATrMxdxDiuYjAa1WezpMLub",
  "key12": "nMZKwVP1WKVnvSZ9aHQ6gyP8bSVkVtcNSVAJmCCDrRE3yZyGQptTRERto5Kh6A3YcZ7cS3BcZZwPWve1gE7VSS9",
  "key13": "2WLY7tr8Pcb5sGv3wuDCe1rgLXuFZYNxXeYDVSDY6t2XoQ2JTdL4jZpAafMufiKbrJ7sMLyyFu3tCxRqouVpb7wp",
  "key14": "61rvX2YmtM2nZGypbPpBUDXVwwad41VWRbhXDqbahREqRsjFBBGNqVVZo2xGnhRnJngmSnoZeinWdVjJ3h7drJpp",
  "key15": "51bbSWAhXxCyyD6R1gNNNRKmMj2xspxWcUfnPdswsoai8DcWXGp8G2ibxJJdqtTSStD6iBvucN5e7JvBzYbuNMMe",
  "key16": "LF97c1LyxXJPPtS3hvv9aZK1UETC459n7hjWa6K2HJyyRejZeVns4fEcWPbZd7jWN9xZttm6LuJXaHgG5e8RVPf",
  "key17": "4yopKvp1bfNSesYD5NYyX4WauswWYqkhoRRv4iGXcD7RY51ozyJx9HsLkXSuVBKC9L6cdbnWY9upeC8o2ExjfeGK",
  "key18": "43JCrCfTWdid2WSSHq3qCFSc7dTbpMvUFRrqmSNqg1tYsxABmCpK8Uo7FYwCrQ77eKWAY2oosPGxhwjZETjiwyh1",
  "key19": "3qZkWy7WEyzNESh3MN3VAuPEakj4qzyz5tqHzbBN5fTQKkRFEhDWF37hic7kDSnWxuA14qNDasrWKXBsLJ3AzaKu",
  "key20": "SdLz9Kwuzs55miwgWFVQMmJbtr2FmydMH8FzrV5RwjYjU6C2uX9A7foPgk7HGHoNHKuFFDKzZjbp8gga43HjFfz",
  "key21": "32NJ7T1zs66wu6X8Lqrph6oRdV3P23i3mc329Vm3qHZ49FHNDrYAeZWCEPAapK4nkCgTSCyEYMg6BS1GECkHezte",
  "key22": "3xunuxFPCoW4a7prSM4LKDXZbDLfJ9R5QvsodRe19QHyxQb4uBNpSin4m3RQcMR6ZWFRSoPf7PUvWNNFXu3izGP4",
  "key23": "3yzHxiniEmUzBNS13J4PW11MTYdYG8Ui9p1HeWenDEpBFsYoQyEJ6uhcPPPt2hGVJQKHHzuKg7zA2UHGjrpr1BWh",
  "key24": "2az9vnyhj4umvKPfyf4Fxqtwf3aK6981hkDEe6EYCf9LLJhWGYfw3WT5Zw8VhofigVgV9mdgjfuy56qaaHRgHVNi",
  "key25": "5D6Z4efrji7KXA8W12rkrNeWQs8ENqze9T12HrRLUz7avkVrFAwkaZZYbNbiteh7CB3J35bYFknSc8USndmJyzBg",
  "key26": "63X34PkPCWSY6iKPS48TSdBvDTVqvTQLSqWzvt3ARnjmBWsNUjQMvWs59XrmUpMXmi7jjPL2yuSsQ8CuLMztuMAK",
  "key27": "5wePAkVbv2gNespcp3oiQddKoAn973byAXX2GdguMW9qrW738u42d4yth65QKo5xi8bcvkh3YT86xPECT3HtLLW1"
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
