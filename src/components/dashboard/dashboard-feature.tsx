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
    "qrs2ag3iXbDzGvJLrrDtzMY2G5rJQSr76QyCn3vuKQ6QbrJNumnN3sN4xM5yWks3RdsqEPdE9uonPzPNdz6qvVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bNrcGqkxkDhqvf8nezWoULatzxquxbfpmpBBioFtk3HAqLioJpM8LT9PDAynoAA8uKFoYgVK1HciqPM4gC9F96S",
  "key1": "2LFRrwPPyF9zEFTngtDvZGxYj7WQ8yqr9k1yWRNtVG2iupf2qRnUqw6FDg6ubrt7eurQrAZgEeqKA3wZmMxevHhJ",
  "key2": "4MgM4ce92AUos56CDNq7RzctoMBirU1itYfd8X3Hu2x1qv8ezNACayNktDtBNtP4iw2zApuRzwJr7mRbJrALSQae",
  "key3": "Jg24KyZL6cnMarrdAhHF9tkVqnhMuP9YtBpQtcYkdtKZN972xfk9FA4zq3bgSyjTaANJNUoL8Q5ajYaAALH6azJ",
  "key4": "3aHGRYQv43nFyW2aCyidum9Eo84m5F5CaxiDqTLYz58VaPzCf3UwDPf4ZXdZYbdjFTBC9jZEo5p66PbbVkgCSgcL",
  "key5": "5zpfANcWRvZYWeZYFVdHPK6onnURo3eH6StFhMWTABRGPzLBWifGnvcBW48w8eDaHPddVhDkVn2FXJ8vkMuXpAon",
  "key6": "5hGeKnHYkq8Q9iWRpukaSEfyVrWpLuD4ycRHqrmgS9H5NELExMHizb7eQwK5dom4EzyrmXviQLrPeaCjJfnbmSw9",
  "key7": "5At9n3YvbXfKXGZp4j5r1YKAQgAQhNyowTrFWyAjKrwFB82LpkUBYeBcGCLJfDfMFtYSYzuAieCnxG9pmUCpBTP3",
  "key8": "3zwnxWSboUw3g1FQjemddZxHy78jHrRC9jVibLjZuUwwRYAXCLhxZJpfL26yAHET1YYAtBj7HoEYZU5LjgC2Dmzw",
  "key9": "txYmnR9jMSKoWSuHY7A6sWrxSbZnq7zyAGGD5Zkm7jVkYYN8iXKLV9a6ErbpfxRxkGJ42XbUPWcVnBv7xWveqAA",
  "key10": "5zTuzRpZhErRWTi2oZNBCo2yuJUCZsCEaLn7BnRnCcwNZSjChmevphbD9JHYgT2etU6HZi7j4t5d7uRMuZwRdrTH",
  "key11": "4x4RKtgfPMHG7tqQuQSp7Xk5vgwKF8f27HikcW8YUroExPHVrE1GMRtxgbxT2T8qBHnwrYYrnXVYHrurFah5qZhf",
  "key12": "3CMqo3mdhGuFWQSvwRYGEZe8azL5j7F3ZRcbzwmcygMxgJjRVGiD4LCLhs9453NtsFMqfyZ2CK2fUyvzjabtcmnn",
  "key13": "2tZj92EBwjo3694BWJBEkgCNxjPzMwWKVYgWajg9e4LD9M3fQxXpqZiYS4UCADdWizm3QEhJRN67EHAEQYmfn49j",
  "key14": "4NhBvwXvJk8m3w3oHLipPrhuuRKyfFwrHWtb1rfHkEaKH26uYdqRKpZcZZJVhcAAa8hNeZ3D1UY7AePhwoySNp8J",
  "key15": "4NViNeMa239B6kuzDgGd7HRasT7fir9wBfx3AAJQP3iAPmKskcaReff3pb3PRb6fD3RVEa4Mya8s2e8vkqQkw4R4",
  "key16": "4PziHbv97MG9R26smVuqmJho5oAZ71GHhEWy7Q1iZ3W6mAKFNHJMHomubgTV7EhhBpufdmQMLJeujDxNEJk5U3aE",
  "key17": "2iWyEN3GXt4Q1CikwNxdckD8WtofTBQoqXtqqr7TzxV9S6WET9hVG2P7ajT17PbVeQUKGKbptVKSPFAbLYx3dP9L",
  "key18": "4wQ1CCgDMRCKMSRiC5g8a18Nb5GAZazBB9nGSTP7joLWAqAtneAz2KD7NRJiyPFmLCUjhV4hQCdCMiQz14LJphJJ",
  "key19": "4QY4wvxTZXiC4C52EN27qt6m38onxLSzhn614rkuXdtXSjP8FckScNHWEtrURj8NvJU3wRjsNZ1B4k3i7VQM3455",
  "key20": "2EVKppJyHYkCRRYPTTaue834VrsuJvf4YAF8NUZAitSwSWMe9LAbLnDMkNF1DY5wyhP6m1pmYnxVKqcVy4fqhrA3",
  "key21": "5pgRcp6t6NYHcXp6xkMsBzjMTrH8YyN7hQmovu4vNWPK66ZpZNNdYA7rkUFP1wXwXSQXQXNFAeFGrwk2ZxSTFiFt",
  "key22": "sEW7V8zqvatVb433ifc8Ctu8iFTeNUGH6XhjqSnJz1aMaxwdzhbEi8HRW3zRcVjaQ22sQ4tsjaVPMbUix3CdiHD",
  "key23": "5vhoXcehsBJLEczUGHEJZzfrg4DriBKQ74D7bX2cnCCf5SdpurLCTKbS5KGrDUMjheEQLJe7BidewR2s4WqrJi6k",
  "key24": "fJYSyYo3xTVeqPeGc1M2NBfqgSdZvpihHQZ7uPRgJ28p5uB8yK7W7py6mJPG24qc8oAeowtJfBmwtWRaUuWeWvZ",
  "key25": "q93s5KdyGCknSMeVj2vFjwoa3oezFH3phEzhsmPzSsBENSc6iTePTszX3zvkj7CGZnUhAt17vzdWx2BUCPiRXDn"
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
