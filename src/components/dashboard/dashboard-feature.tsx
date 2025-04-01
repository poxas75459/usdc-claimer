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
    "eTAqwBKUU2m7MuY3SxvqxdkkWRfTcTBGwigHZ2q4j3TfbAj6tTWfuU4mnVbeBZVj9eL7DmEyJUpCa63hcdzc3J1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64gNoYrssfEiMKYTXM19GhFTzHAbJJzX7TkRUko283P1n3SCEhQwWKjWWRL5wyHnuWDkuH6cp5csfJkGeicnPV4i",
  "key1": "3vJpQF8ySBfWzYqEZPWshxaHHGkvvkN7CyNeD1bfKPYvmMjiGuSWbZQLMYdV9fKhpQjS242vxXsKmjQRhCXArj31",
  "key2": "5BLwffjQuPMwLquA3KvLCUDrcNzLa2ePEmuSq5h93FhCmoPFnk7oSrtxobjmXrD7zHeHAigpMaLiWpZruj1SR1QF",
  "key3": "B4ZycJFj1zKfAAiHzCM3RPY7hQ7MjSBLgxSYqa1jewNo1m3y1n33TYjF6De5YabAnioouVnMKh8izE17X4RnZV9",
  "key4": "5NnRvCxFXjvpugjpX8Tk8uQE3ruUEC1xWgct1nxCAy9Pvo2gjPWxmjxksbtkLQQJvdsdDrRo4SBA4j5aAPqkJ7Fp",
  "key5": "bz6Y2qjzngXo7f9gEdGrdCYqpcpGqUz5kHtXkfVCmGRjwwxR3CbRdi63fj4XuKsW7byruSHv7y45cCsSfeuMEdP",
  "key6": "3Qx9a3S4kjbDsbBDLdzx9Hjyg3nLa3DgheoXNQPDgi9aQ9schbccJakM7SXVhPZJ57rxMzgVrUcifrFfSnDueM66",
  "key7": "4eNdFHzfXJL3V1zAFgnyiAp43uzZYxCwTsxPpbiM2t2Xjua4mQFzevJAvAaVckH4abLz7DpXNPm5XYwCqJy3PVEA",
  "key8": "cfiY8efFNVfTRY9uzxgku1hsKAF6MVdyH8fCxB3C4tvK36ShGwXRyoJUrSdYTiyrSB6A9FMN2bPj8apRsKyNdSV",
  "key9": "57ksjP94y8EEsEiVDN6wMSrainTAg1Y2NFpR5SfWE4HLdRZUA4fHirVR7oucv53qwDCXug1GVRWcaB3McFVYCx1G",
  "key10": "3w1TXS7vf1wSfRGyYZZV7RLHXLzMhMJyNR3HWL3kYDUFcomWQubcTXBGV2mPtCSbhDmfpvo9YezhWCvSEUX172wL",
  "key11": "63352urePmyxoU9cnc8waSF3cyc9ftBCjHPu1NCpxXxPhXkFNoBt8pG4SMnBj7KpkKf14HmmD3FMzdAPYi7NFyXP",
  "key12": "3ZDmdm3FqA2gq1zejaxEcviTxw1BjBLxcRoSXxWgsHVGSumSZWjiCELiem9Z8eB7CVpc3MzqwBEQTL8eQfJxTjY8",
  "key13": "292Whh75ioWAXhPnzGiPx3kgBi32XRAkg4Rxo52UauoBMmkRda6vofGKx4fEcajaMDzQfB8ysZGHpeY4t6UF3EZQ",
  "key14": "EVbrE6U7zhC7iGNWP5nfjdR6vRL2TrvPCEVTj3XBMXceYbrHstwJVrmUdLerKKceZgFRNuDAoER8g2xDCPynVbQ",
  "key15": "3LJgtUhZFKyAkeULxWgzw465VVvmRYsWN4RCEgxtcK8Dw1PNLNfVJo4hncNabafBGv5Rdr187vxy1BooEEQTchvG",
  "key16": "4qDRBqupREdnmWqnJZks8jQPciX2eb7V1eeqfbb2W7WneWRruGCk91AHhEY9JhVLUcAYNQKJdqYGLyLCHb7o7Bxi",
  "key17": "36GGpTxkjA4zDJx8JYdynppvyZgVDufk6k4H2euY7oYe1NVKGMkyeT9RQn21AVyaXfEBoeDvcZNVhEqLshomuxYK",
  "key18": "3XrydYBtm4TGMuaFymazHK3A4en1GJU9AAtXs3ovVGFfwtRiK9mU7Jq52vX89UK6GbcDgASoHSbZoeftSaeCpjXL",
  "key19": "3FWcjkwpb3iUphdCB6RofoMYHUGpBDCagkjCKa9a7TSjJADbKy345wBJZhbzvLo2r4Yxcojp1LVUdQRRFUC4P9Bh",
  "key20": "FFJEq4soxhT4mP3xaL1iGGt55QGUSxj7cgG6aDod1NibFDgjozSP1KytK2TufnTjARntis8yXSdHmeW91nV8qQb",
  "key21": "4FNre5oojLMPeNuSw6NNbN75v3JPLdtMaymRDAh6MBmPtsEojVg5xnpgguidX9m6KR7tBKYhz4AYxMvJXdWH8saW",
  "key22": "2X5o6LY9w7HfrFaCmSvjJ3oXm2w4hqgFkTFC38tsG91sVhHBwvoaEbWKfQKN87SpfmZDmfHjyFhJ33SSdAq9iVMd",
  "key23": "4mgBYBs8C6tAFUr5mMZFZZvAvnrjus5oVEomLv6rVo8EGgnSphKuvvJZJcvNGeoVjdBXELRuZiKgB8oNKCBKqs5s",
  "key24": "5s2BHjD9NbKELTQqXHfKNGv816YtWuPdaFvsLz1UhJW5MppK2DLMUr4bnSt2tKBybAnboimqQ1uqwoQPQZQs6Rp1",
  "key25": "5ViqoP21oq1z3c7v2x8vDCrdie9YiVw4xmMzCdo91tCbfnBgCyji75Ndgc2fZQo6pu1Cj8tzJaTM8nwA7f9yEoL8",
  "key26": "4uWqCx2epZzscZLApjoyEbTuSNKmzLi1jQsnoAXFCAiTU3VW5gvCD8Sqgvd4XGWadEYejnjx1kR3HKxcVAQEkeUE",
  "key27": "4yJgweA1n1i2jDFyLg64rswhz1pugArv4YY3s12hEJXNfybtNKxySKHCJUQwux2v945Zyz1fBf1Usr4QBMQMbBBW",
  "key28": "31fYYc3rAtDSyuvZXjRNXExTb3koXKxfyN94ZS5Bh2sfBPUfvicbyA6ZfwdmMxu6ZkcQuJ12zpc7cemMcRuyJ4bP",
  "key29": "3rCqnukiwika4PcKDeg4kj22YgsWdroaAViw1uVQsnWJDyU6JYKfkyHGyKv726CQVup5zuzJvf6GpmeA75mGyRN9",
  "key30": "4zAihVuP1TDjdy1k8EbSqE1iTAV85iarrEKNoo3qbdAsLUqrPkwh4YDCRjCPhKGDXUvXfEfxdgH2JbZvHJz4KRDo",
  "key31": "3UzyRj53C4RUxgAnGcfgM22sDoFwsB2pGbwvYUkUknVFB9BtmgGbXJFRuzbdNTtbjF31M8i2LvtuV2miQskbUtdw",
  "key32": "6jo6WRQtrQrpqqDEwWRwc6dUZh9iUnZsRKn6sQUs2fx32eVAnTRFvXoWKmykLev1AZk2Naf4HGhDvLFx45rAANU"
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
