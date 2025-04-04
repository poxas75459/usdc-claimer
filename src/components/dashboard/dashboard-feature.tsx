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
    "5k7amAaxJ7hNJHjcVztXEdSpei8YbMZeBhRF6PVDtCBRWN6pUDmnSAK2rKujH7CBhUzv8DQXUxLLehXpAnhd53Uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KMdR6zv4DgZrnKmkrQmSVhMuJW1N1xkvR3hvhNd2NrccsETM5rd4gpNfmZ2kvuaMZB9H84D6ACVEdKGcFd5p8Do",
  "key1": "STXyCGanj6L8aBHxjmKZJSwRs2tTbuXfDPmFk8tF2dQDB1CLpjfTy61BSyRu4NuZCiGA8XHjjivtkJsyLNUhpPV",
  "key2": "2JTimsiCi43NMCve6irbQVoU4iszwPRjBrpZPqcBCidS9Bw7CW4y9P3TjmQbd6v2o6Hr2mSEQ12dDV7i7yWpFhfV",
  "key3": "ShBt3Ghb4DPYp7yoaVfCQqFesuU4ekziM57D7ZDyM4ZmoNkibNj8syKyPgr2ah3mKWzHH6gvnWN7T6AU7ZjLTUS",
  "key4": "4awBfgwStvze9qMaPGoqK9ZYTH2oMQiHBnyLQR7kxatQN62MuxGywbiyPtAaDoF8SiXMHiuLH18ka4R7aBbC3tLX",
  "key5": "2SdkzKt33utz7nQeTECnPofqJ8e2TqxBo2fw5ffDpz5qnFeQXs7v8Qf3P1iWdDHX4BnTFQM12kaNbM41XdkVaYxB",
  "key6": "gNQDXNYyhMbZbSEy59WnnKGivAg7UZqZKPa1TU2XTovAWnnWPjfssEZXkfW6iThNBoCi9dmkkfeZnHkwaTTLtTo",
  "key7": "5wUFmuWPQ7pNTMzUkjHUBnaAwjEigoFfdRByDiURYiqM5XkVUa5imZ4gjSKgfQyd83ygVJWsuJGAThzmExatPsoY",
  "key8": "twboxS3B2U1Drwp3zNNBs1YkbvSUeoznn5rhjvhxhCMwJ8u3yz6G3Av5D3caDEwbEwNVkgo6pjufPfkWYF34Zv6",
  "key9": "4RkYmcnzFYJwDzBTfupTrpdfps2wKtn7iT8nm52YU5sW7GgYovV1WmDYmj69N8rYfcYGUbGESshLxa2CJWL16PgA",
  "key10": "3HFT18xHB5rGQTCqet1Mx35EDf2m7yjVNKJdrZTnKYQWhDZUN5Eb4E7EuVHimxLjQczPgjoCaTB2MXpkKK7osNz4",
  "key11": "2ck2MdS99ojVZXPE1jZwfzzRz4k6KjD7SVa7hicdzdU3QRLJCiyQkHCeuz3YBSVoKQ5q9QHdG59d5hpgfn8TcigR",
  "key12": "2GJMM4HvDN9wQFejAgWYb52CMF1kGfKz7q7rRJTBs9fhdVmtHGa2EktuYKkhAS4E68Q1CvxDEdnypf6ParYft7Tv",
  "key13": "3SuJSvWhNCtYwNMeAPUyqvz4soPtC6gL1HHBnMdgrNroUQHp7Vo5vjDm6UojtyaB1u7HfCnL5quzdXNvNRUzVat6",
  "key14": "5uzn6eDcCtTsnMTD3VDJiQcuZrNWiLkMBscsULFp3zhhgVnR6aPEdssuZapujoyTkTiSzcmyZSv6g4hqhkxX3avc",
  "key15": "m1bUjEyx3rUukj4NScBFJHSaC836VkfripgSwbebSZaJdpXChh5esACVFeuaHqQoJz6E6KMTafoAEpChHziLqJL",
  "key16": "3fC1CBi2YaBJFYp2fSCM6Bq4K313EujRkehfibWqJ5CzbDXh5bLadRsPvMCpJFdUBhx5i3dRFKY9aDbCAa16xdfq",
  "key17": "2E89YJaKvYDaEEY8ACxLBBiZFbzQhi22ywZnnBGNBh5rPREFARBQfQLNVdicyHWm9RnB4BN7vFz2EcDKaH78RanA",
  "key18": "56FuRBPwg7MeRdLJSYCdFc6XWPboJA1SnmWVWt9PPm4S6WTQiRmoDECbEfvubS5xkMMfaKBS4Tz6sbqoYnzfAret",
  "key19": "54mZQ9YA7oULYezh1xLBb4YKrUxAKJkQdLQTw5cyGtDGwFh3GRRzV8fVCSSHPi2AWK5sX2k6rr9AueTgzb1M7FfS",
  "key20": "3MeMwERuiZmL3cYWZmXaU4ZvQeLZbu5PfRCMRvyvgrN2UvBrn7exJwP743g9BF3u8WmJ6pp3gtaq54BeBrZTRbT5",
  "key21": "2oYP9ij9Knbc1Qa2W2pafdqmwrbhc8JZKsfweikqkvm5PEwZKTKSVx4VFySrfo6QrJC396964dM15ZuMA9fa4pR9",
  "key22": "4oHBu18LWSPzqy6TF1RKiKpQyup5XLvz8pZFBgqMcKj7MhfiBurCiycBG2LbGmgnTMEVoTSW2RZAWhNqJAp8R4VF",
  "key23": "44VGwMckV3zGRVRc3aViuReD8ydam6VSJd3L5Tz7XcUKNYv7RXdaN2TqKmf6idyyEcK3kmgcMH33QHvWM3RZ136M",
  "key24": "5n2kGcHtgZZ5Y7eqBNGfF5YKb3NxcrF9acvASpEiiHQt972ia8KBzwe5ZNkJzwf7PYX4aCJ9oMh2nZjrfTikT5uH",
  "key25": "5QqFLuhKWUngqv6EVBRoHrgtxzGFxT65Tz6Btm3DifT4doWq1SsfPXnNnQo2dktJGNkuiVvu7sizVb49CQZ1jzPD",
  "key26": "3bnUJpyfmH1KsZqp66PMUMMPBLxKi8uncemGjCWtS2CrozefiiTKPza6ccTXbCysB9CPj7ttX2iHn3xoWw67fxQb",
  "key27": "2PrqGQzLaNHM9HNU5ujhrksLw5VG7ioxzQ4XaHfrQVQLwzNs7XQete8WpG3qNt9h3uEcgNjjBantobkG5w8hC9FL",
  "key28": "4dbDPHTdCbN1iRoKJRc7er8kSPjiXDqR5DGVCKvLvD5rZjPQ866sSXFJWXbES9ybsTVSaGuZJDigy9jzH5DUNMZe",
  "key29": "2M72pm1aRkMjrEwSkkmrewweJiBEnvoPMzqaP5yDovwAYqswHyJGMXKVYWbuQgr7W6tSctqG3Dq2QQ1X4Ryw6DRv"
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
