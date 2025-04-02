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
    "4UejLx1JJkZYMuGTttQ6HUtMGSM2SdRN6ZXZnvVr3VRvXtGUrGNV1YjKmPozcyZq9eDzZ1WsQRq17ifJ15Fy1X8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rrgDFLF3oxRwZeg9E5bX8khCpbeXb7UrJg2VoqTDFMSsZ3ccaQy1K8nmNT5fMEn9SHCdrfDjMHaMDYigTUtKXKn",
  "key1": "4pTVGnG6c7WDCRmKrRtE8vnKz5ZC247o1PqHcSjaViegftBAEAGaQarmBDLwTUZKjPWpoxaXiF3Vhhr6tP4JWaK2",
  "key2": "5cwicwSFucAGiPPobNJR9gJ7Zkg8Sz26VTarXwwzY5MeiYYFkmqSd2rT12uANQaRjVRtLhAHKq2n3mrYz3DAh7J",
  "key3": "4SCnxWaDeStXWq2BX7qSRm9CNdjLZepjrpQU3xCZcyUjGdKRpdrqNJpupHExz9JEdmyVwjTeH5TvzeXJmKh3odED",
  "key4": "3UjnzsmZ7RUL8Egw6P3Y23PnDMNybetFz6YWrhKdcSW46HCHS3URtxiktCpf9xNqe9jVQVGXFqXDLg3TZqriEASD",
  "key5": "2uCbFKafa21vSZpJGWhKjDCbvABR7mcNsckeuvE8u7pngNcqGAAeTuvaU4PQfGeAoqVGf8qc8RPA4HNRxRiMNyQE",
  "key6": "5htPU4AD3vfJiQc3qu7xu7j2xbwW7CKvg7x1s6pREwY85kUNRctEpo4ZK3JVucv6BH8hmUnXkF2pYSbp5LAML2Bb",
  "key7": "2AiyAnhJ4WX9PiWhr2DpFnpv6U7XXpNpC8vsz7Dv6FMF3LrZHhT4jKMY3oF9qbBR4oYZXUbGnzQwKeMmLasSsKLq",
  "key8": "2nW4tx5rKu5my9R3kqMaummdv6WkxwYaP5hDvnDxgzrwRmwqaqnngHb8GhZNAr9RcFLTQEKkY56FUUzA7ftCM1sg",
  "key9": "3xDH8DpjZbSMTh8Y1qursuEaTCdxdANAdSsmWAkQPeULLFTdmXcWypR5qAkCivMY4AufJ32z9u1LiPWMHE5Vci39",
  "key10": "2k5Xkzgv379D9dkSsnQv9vicZUr9UyMJntqMi3QzHAn6Q5Q7UhzWvpdQgTtZySdumJAnLNAKBfdq9MqaZuQZUiAw",
  "key11": "2D1uJdbhpYVPAR2SZsTf4B7TVhuTNeu2jZ5mo3ZuD2jUiPSzrpuCTjcrGbFukfh3b1oStfieKkRRjFfKGoAPPimp",
  "key12": "57aydVnQLBhvj8aFc6SjcK8mpQuiaB8cKxRBZDXfKZGKfumRxT1rDH2DRRr6ZFDMXyBTAgQS3ArPPSiASzZrc5jk",
  "key13": "2JH7g5wGkPSFXfYe86Tv1Pm1CZvHbfCPUEmrf3uHUvN8kW4Px2BGKVDRxQ3w3hiQQRgHoqreQK4SnFoyFLFDeMqt",
  "key14": "CwBFhJLayRcizQNNLJ6mBbfc6spgsvR9Mtx4uYdtuWpoDiUjUG3mF65D55T2DKcY8XvyWjPvTav1oAAUTkCLFX5",
  "key15": "4ZqqTSae3YgmQy3ZZYUSYLjRUmobh9MKNzYNJxVdVQnrFkGnya7FaWePKjLgTiGuJL2D9JRXWHZkYWNNckJzifFp",
  "key16": "3EuUaWb7o9YfuFSYhwyWn7xqNSeegN5yk9QZs7XfsWWejudwFFXwXptZKMJJeiik6JHSnjuzhHyxvaNNWEvzCvWe",
  "key17": "kA8TsDCmFpzUdTRbMMyhxX32LsAknVjCAPAvxBoqx4sYad6oUaCLjZToLcHjdd1LYiewFuG5AYNvesYpPzpPrJJ",
  "key18": "3NTfnY1aF1KzEfVx2xqh1zAcQ7nRQm7JzfiyVP7tzfPs8cqJDDcBepv2LzDuefR6Akki173skf77T3D18TWaw69i",
  "key19": "5dJUfQT3AJ7a2zrp1uq3Mvx4LmxFKds5J5xxS8aF9xJezVf9TQqR9YKFSHbUY18nt3jMDhTzJbaxwAfA8A5R79yb",
  "key20": "5pp7k2LuSVZCDDervmgEhwH7jXZpLmDyW8xP3ommfwqUjbhhi54GWjHYGWuMfJMoywihRg7r4iaXVJP53nmZRh1W",
  "key21": "B8Nk9UhiDijcKHds8S35TSpuU4NhyCQoFSmzw6BHPGtrqfefSymMmPxN68zwgy1N1kt42aewfSmn2bQ7DJSrxfP",
  "key22": "4L2JRhedSPZpvG7q3ViDqC7TCh1LkNDZRMK6sJxKcoDmeURHBj1stH1FpzNE6nbzcLncYuSbg1YLfzUmeZSG9xpQ",
  "key23": "3PWSL7YuxtDiXk6MCHyRUYZHZ6E3i65QwTNnedpaUYSYX4cGUVUHW2bPjPhgbzkGhsqRVLfKR7eKWCjzy39zgYXJ",
  "key24": "4r7kTXGg1GJCMBgN7ocYXTGk14xvmZXqYv3rTwXx5xHATVSpFRaumWBsXLGqd815fHJCdhfLV48CSc666ksxzZzu",
  "key25": "5V58QEtdykzGjj2sUjzejktUePDSiLffmcKtcWR1GFF3eREYCgVdyfojja2ftdmRDyn75fjru1rEC1QnoQsHRM7R",
  "key26": "3jWdP5DDMcy1kwXXhGWFBbXaktfJVv2WoNrtmKPgCmPytRvgQohppjBZhpQxWPtgXyPwGUDDHjY114MLbF7wxUjb",
  "key27": "2NJ6GBRkJ95DdhCjfUhEViKeTFGAq1cGSvZU2Fn4LLpa1B88K2iy3MyTHNAtzfLcotaPLXr3A6tDBgrQUuUfxwpm",
  "key28": "5SFnpHGebDnWigTUecXReCLa8YAByZVqnZvcQnK4DCXN7TrWbkJ1nuPiNjA2AK3TJXo6k2d9ADhHTA9WxUrbH7rw",
  "key29": "5wfbfKpfYJt728abz8Uhm21i4gN5rdUwrix9wRDPfiXuT8PKgykQxLjJ8v2QnLA2LmBQ2hrfc8EvTTpEYBPDsW1Z",
  "key30": "GySMsUXVgjTKk5aD4dTgcKNh8CfdF5LLsKQNSFBoCNiVB2wiTP7EBGL3P6HjJo7ovs7PGo6p9hu1eZFXep8aPcz"
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
