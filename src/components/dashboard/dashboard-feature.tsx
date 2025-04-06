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
    "o5Yd3UYk6aqrfmVbR3pzhTyCSpHtAFAmnhhjEJvEYa84Jd9yFy6cHuHqafGbNEKkixD8kZLNVcXMgA2c7z1KSGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xu4drmcng5SP1hYDbUEX6rJMERzxyVzhNEiFJjEiQCBGj33KxZgeBDS1ZvW1d144VQMRtYTvYbmrFd4kCSYHoy8",
  "key1": "2Kf2JC79FstFvF4NkSeRSMk9hdJeUcULdwbdMhULyCSCBD5uztKyS6JqYHgH7a7je2nxFk49ahKNYNqhXHhVkmfj",
  "key2": "4CSMChvqh988saRt47ZkR5Wnp5tjd5sKXYwN2iy4MJ7G1i9tFnsMsCMpkFavAChvVMiMRP6hbZccAW32bQH9KxBv",
  "key3": "2y8fDYAUNxwDZYCsTYPKN3W3otaYgbQmTQJg9dMEdnnsvFic5K8TLtY3gjp58Q5EVkvPYUYNKEDASUUfYDzdvVZU",
  "key4": "3kJARPiCahQpEXXwbNd7MD1VSPAh7vapoiQDVwQgztZVmU2Yo5CTMBdQzn7nEkJbBJu3maoHwcVkwCQorkTYoCCJ",
  "key5": "31oxX9aSUG531v6jpKQiuaTMepBkhvqLRXExRnHV48p2SGs7NFk25943X6FBCUsPPFteM5MumMPQKc7ii7fFxgT7",
  "key6": "432FC8ktMtD35fpsNaZb3hogz62HkvGVzDipw3zEufxdAhszYWhAkorab5TCEwL4FRYYmTutX2FTG9zKxXVtvPFo",
  "key7": "49UsRExisYadpvCXFxnDCQCh14PjehXtJzW4jaiKT3ct9bw8Zg3f5WV6orTUV29DoG34r9fwFwxiJNtejNV5gEzd",
  "key8": "5DNe3P6jJivRA3C1eSqtuUywgQ3sPhcwEmNV6SpW69Dv4ptdMfWVh7K7z7ACJos7RCjrgP8JABt1RZdtLCJ1B7H4",
  "key9": "4N8E4SamGHxuTeS9UJpC2ayK4mruTF9ipfnsZjX3RZgPr5ANSM7yBHL6FLDipAzAzQ1rVE11nmabfsbUmRnVpBCB",
  "key10": "BoTtfjWERsuYttiDWcEoe4ZP8nBrcgtJ5tuLcML9kzyShX3Z2kfyQiwUM4VT15K4yzGgH2or2domCpCGj94HBEs",
  "key11": "8LMGKUYwJvBUzF269GSH8K7RX3MfNioNPPD9SH9jNnvuQwCP7oenb7t5MSmnumdjvR44rfKjHibd58uPLy9Nkvc",
  "key12": "4zQXvyMGMrV13QX8t1UTKNPX9veqa8oC8N7v3ySedqgsi4REQfoD6kovb3PwzUqVyu3x1oCQnKExhqjcbcXD8Ppa",
  "key13": "5hrq46QnWrtM3Z8smeSQ4N2SuUyAV6Fv6ooj33j2PxrtUXBiCthjphZbdMpksyWkC3WHGAbmR3gGWvPKXpJPoPL9",
  "key14": "619Y8hjcVxzbLWCzrjMvwUH3C2qJBCi9N7WrAqTw3sU4UCXU48qeCvECZFWsu9XPbKLLMKPUPjhqcxbFcWbE5F2i",
  "key15": "2pw7U8eDwCBzPF222tTJhHCKCY2wWtNvgqFiXovUnppS5RxhfJfX6RRBCAtX8JumXDNDk7STWnkCMW6HpGpNCJuw",
  "key16": "2yfzyGT57kPVJAqdZMF73RzUFk8ZRcUSEihBctux13gP8eHbiMH3YZGVxAgrq3LLS2kr1qiBeBBbrF7EuinijAku",
  "key17": "2twRK9EKmcw1J6yYBqzxT6U6aTLUiwmvfcc7Mz8cGQzxEenaWsZH9xRxaYEddyiwYQchbTomcmq7Dj7Cn7bZsJQy",
  "key18": "3CQwSBhp2D1jQwEYTAcwpM18rr6vVccnxrAqFPoE5eaih4d2REf1Eiw2xPnVSB9jRGANWBPYDZRmJufdQB1Ja1zX",
  "key19": "4HMdnz3oAiGctouLAW8oUeGjNRbF5rBTmyjqTs9vzeqrwETRzDrNJLdbo3LVbByhssnJ6ESJGJzet4U6KY3HU7Ro",
  "key20": "2YfQLNQhzK6TrjUbZnZL5P67L3CrdUrriyHEhoujrohW8ycAVg9rKZM4okAEBBA6SexDkSjg7hNZ1sxCb2eH1gGK",
  "key21": "49D9XTRpCtYfKYhw2gzdJDkkgbLSWjZupTfLxxtQKP23uZRMRw2PugGUZbkJyW1t3HxCzkULPShq85eb4eqPYDmD",
  "key22": "4R2DtymXao8Zxoi3cX8uAZmWuNhgfr5fka4mNYpDYDy2s7npWi41WjQAXCwsRYwVANjP1xWzZXiU5soRrD6RRPXL",
  "key23": "5aHdMU4t2zpSnitSDQYAQas32iH5ArmYuLpJjFMyUbZizKdujpqJoNHSiLwRKhvW2zQVq882yrZtW63Xa25PS5to",
  "key24": "66Kjz23XuA7jdN5zkiPkvjNZprMv2GKZc6H1feD9xNoZWgutRUPJBLdTBzRwppPn1N3inkiiem1LinVefHhYdMR",
  "key25": "5zW7TfjL6p2qRKyFDQD6t5uBdcnpsReKgRsDfHxwhaYCpNzZkpV77xBnACRYoAcBzruST86hm4dTSX7umnfCuS5k",
  "key26": "3E69NGQjoGzQVMYDpSFAu7EawUTonZHPVKHXYqFraPjty1J3vZWkS3HAaCJai7rM9EaWHAkss4WExWXJyyNHDf8v",
  "key27": "4oAefRG9fTzZrBK9FgaABuzX4YN3NXjnisweYZfs3RzJg7KtUVTWVkpTzkS2kjye1dHB3CuwvUWRXEaQgq1byGgn",
  "key28": "rGJYnHQstBrCQC5oiZDuW7QawntFpKEsa5MmEbfGkSftPvLAUCRHFzyZmBRsAxDKMZFSZGPeym7g4oFARHY6yTK",
  "key29": "3dBTdbTA6Ry9pmFyAugJzu7pDw9VHghmSnm8ELBP1BXrbc1oGRVFRosqbmUEPizVRWXgzm1C74iF7Y87fNnt74sA",
  "key30": "4kQLZSDQg4AWbb68MCepobVerJfFjSFRop9LNDXAqdTZq52LcPbRS6MyyKdPkt5JRE3DhX1FyvkRbr2tBsBq8ibN",
  "key31": "XMPDRwK8LaRHw8vZ72oRqLr79T4Pzt8tZxeBYpQxNMHn1jMEfxdZodjidNS1ajVPXqskMynLaz8rxqW4WmwN4bQ",
  "key32": "5RZgaffDPUdzHu31E5QqLL15v7UMXhZ1GUZHhHE9CV1rYVmYeJMY37oC9TMZxJj1E8te7CiamtBjQVD7Y6RxGpG",
  "key33": "4UskB5KyYfZKz1hLHbNDQQ4yeYkZb8TiBe4FZ3JiQRtjLEUj4vbTKZ3mwyFr9q5dAf28MFopKWWtTXQCZyDMv9pZ",
  "key34": "4UG2dkymfGRmEbEDkRn8x5fujQJkHj63y5cc3KKnvRfLz5SADU1VHRZesd6SK4ZV9ZEJag6QiZSUJqCJKhbYy1ff",
  "key35": "2Z9cA5VyfCJvB4DAfR7m8HKGQemusvJC6QSXKzeCUcvkMhXnASszaw7JpcbyD4MNQuymG1CkShFgwSECZGxWpQQB"
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
