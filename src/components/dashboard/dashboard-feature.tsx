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
    "4jExs4vDd7nVegYTYCYz4b5EcHz6y7c1yfm6GM32qRwbb6hGZdRCu7R9x1tZwAZyTceyM7Y5ckMVXK6wt4irVvgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kN3qxVECnDpzn518tAfbtnWBSNBoWrCwSVhdMEyNvCbp5rZJuZAxkqJnM1QwVWdTQAxZRSCrYGwFCJEBPCGc3ty",
  "key1": "4hEsw4aQMqitkEECxRR419N4HiFg8he3ZuFU8vcLBE6basseLnwmg93yc1Wykvf5qjAVSQaEw396iVLZCJW86qf3",
  "key2": "2eAi9vsBiCyyRV9RviKZjwkfyNM9fgHYRPnJYdPHqr56FcmMaWPG9XHNYzyx5QKURZx2kcbTmdDn87DbjQT19k4B",
  "key3": "3hjt44KT5ravZWE6wBFjKMi8gED2SrRZ9V958Anu5Lebk525GM2avHztFzSfD3cYUX9R2ubJbUyATauftNNTqett",
  "key4": "37Etp2oB72fEgePFz2N3hx7R4RgNwZ1ogZwaKZRRMdYKCkcj65kk1yJ39mAo5wwruRkFyr3YwNfVnWboDM1WDvSH",
  "key5": "DLeTky4oeDVPDSB6Tz5CEPPUVF4yRDbnw7LoNqcR4k9NRbjKurcodFPtWqaJnKSiiR9jy3HgWQgeRdFKZ1579a2",
  "key6": "2GWYEmRx1E14ATJEfrw5QFwjSrrmwtde4JMSG4EV6cf6tmySNzEFJFeBifV7EGdcB6gPSJzW876L8ASk7hiYpFng",
  "key7": "3tX9iBRE1A9NfhXDcuvsaYoXHVXxxJgZyDWJRzNnmy9KQPs76YtqfKEXsD7LJXBcAyGYtbiZkmtA5ndPx87Vn4Nn",
  "key8": "5DaLtRU3zAs1fQ5jYnvupYjxWvJE1saCTjk8eBXoNeEMDZLLoRYGPU1Vedp1etbADDe6RTedRUKSuSaPZg7Vt6Fz",
  "key9": "2NRiQk4bBi1G81jg2PFUJLte2TanVBC1smtTuuPuydhyUowSSA7gt7ajEsnbsvhRDSTzpSaebiN1xJiWJsDaV7E7",
  "key10": "66hz9bLUr5UYtyzUtiA7snsHdgsgUsAfbZDjAQPADk5iTqJDWdyuzNqVZCQ6bCkSpTYupqU7PskqmbK6TFxdgVgw",
  "key11": "RYZjKEEaUH12UiQTXFpcHEg5e9Gqvp885PgZ6mRvfYuEXMrEcEgXjVjW6sXQUXZ5VRt2cHWcYjXotR48o1cYQKR",
  "key12": "5EuaHmPiU6t34dPiJiUjcb6jDkx6hV4AejgjukoRm1LYaZNKaDJfb5CGNFmsshyUnYvmBGZozbcvEM2QQzf34DJf",
  "key13": "4kuihudU2934ZtSJ1P9nQqL7W3ib4qTAeunvymnfgX9kbGqd53eKt5MUaL4F85pMQWaMzH6fcZMVCkoPtRN6nfNy",
  "key14": "5TB5EkurEbQLswxMAiSyP9ko7tXRRDc3843GvYJYw1nV8QxGABY7e4FfJKDkgsJzYPKqVnpavs9kPbfWcqYaLjEm",
  "key15": "2AcvYT2biwpQ6QRnj9NFJubZjVwKWAzYjcBozPkfAYN8Bs2dAv7bo4c91HBpHi1nhxz611dXb5r6rUr4tC9i8dfg",
  "key16": "5P4mEmziy9yY1ELuKZGy2AArAtQwMpmRf7E3ZobcNREoomUuRgrrn1w58Lx5Qy3eXxqRttXzrKtMgaxDgeDFk8XU",
  "key17": "22xRYvJrL4wnkwFqMYg2xApTtJDjqbsmxzZmp1YYKfSBkuLDY95op27hbJXrDJ6Ma4Z1s3fKnkp8uKXj8d2D2a8H",
  "key18": "3oQr2SERzF8juMRVtNDwqC7Qvg7tnuT3bNC1V6TWmyaKSLoybzvuoKPYNLN2qc6PheVidXjtVBiu2tiZ6G4HARVh",
  "key19": "24TYqsA2CFVxCmXJvF3Z1xLGt7KHUmBroKKwJZvZBUZLAupwarAMEtjTedcCsPJXaRppWeCHyk1hcTpbPxPSZJfW",
  "key20": "2ey3YzjuaQzZGjH368i6vHmzMpM2JTPzPcDDfdz7M5u1iwDvHu1Ats7D43jDJnVdjezDc79wfBHkx1CCXSzei3YC",
  "key21": "2WmQSVe8EB2oEB7DUUzpSUD1io5Zbqu45EaavSdPYTaWdVjKBosFpkAxzgQVkeSh3eJAys5iVJsD6bUjXqkFoEWp",
  "key22": "4noHMCuYQJbLFNAHerCNsfL8mMkMeDU1EWoBYDZ13WtECxGQ1fk9XD7Y49ZSp1AD6NYyEdq4yY7d3qAKcM3afvVb",
  "key23": "3y8ufSHwU57NhyLCjYhJTGYcCt86TuJzqVvWWSWMwG717A7WNE3Fp5fTNSWZYgSurSa3SDx2CKj2EfQ3GqtczxD8",
  "key24": "56QxGYr7R1z67UH7S8hnzS5rnhWwAkVKq3cakrDL4f2TTVKEyc928d5sNuAsonvQjiyf6uW5dhHfADWFDNquYb4f",
  "key25": "4QF8Vu5N9h5u7XcSsUeWmyfHK8McPG33UuBjQ6ThJiHzsdsVJ72RZUwNGMu1DeVVqKakc7nqVJndixXb6QXSqQwC",
  "key26": "2DbMeLLGWmus6ecCWTai8FHEEoT93JHKsbuSUo7tE2pbQvTa7zUNDuJQdgcogRp2Nc9itK3DBHe3mMsWD5x5soP1",
  "key27": "35NkLTHwwurSbGVk9amuCB6fCK9uMcV4k2JHFT5GaFpmsdfaq64AziGXzTHZfNTd6HEn3NhFzrfpXUbALtZgpKMp",
  "key28": "3zMkXFKyLGzhCUMk9uLmemUvr7dMGaRgmEryY43egwoN5o61qpFq2Rim3f9tDP2g9ZJeZ7mCxJL8bqcH8PvfZEfd"
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
