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
    "aYUNedJtpi5kaG6NCrxEWFtQgREub2rvvpMQ8DWcRnfVmDoZ7z8KtaJjaq4LYzRLihDMRReFYpotijcVqZpP33H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EgnmGWZqXGKB9c7abX3QrmKstEpq5UhtZhxgNdniC56xLtKqww13PwgLnEhoLMpdTEdjSxQ2jAQEkkxsPHaAFsw",
  "key1": "4b6zHLuuVgD78Ss8vqkeZdxdM8CUkHYPiorPUaoZ5QhfVeKvPJh6sqV86ngodDShynPELPZnc1n4XM1WvxbkSFqT",
  "key2": "4ZbkYR3k1vz6H2FYTignGEwHcYAJJNZ7NiZRvmivNiRnciSLkGfoigSYDfWfLifsJ7CHtxXxdgtZpp6r2uZzBGpK",
  "key3": "51ZqgJGnACixZ7RYQXJtWQBzR2CoWmuRtfvN7zCEtHLcsfXkJ4g7y7Pkkw5teCKqh8kgdahtXEHg63t6WrvzzzYj",
  "key4": "RQq3b9GfmksaKQDajj5XScetc1xUsW3JuRwZyvh4uwe5pJix8L1eTyfLCSdBXRjLmBMmCm4LYPjoVcjav5UfS51",
  "key5": "LZzi1d34XXPFefg7RjZTHfqkaJrYcdvqoJqhvTGhcaFXL5B9AxrNpEB3qNtMcXHRhq7imHagG4XA4VQKP7hu2Ei",
  "key6": "8UARhEg1QosG2Ldp2cTHzz5eeZvKYz2v359YMU2w6PoAM1k1564SGv1N1fKhno7oyNWERNStBRdQD66pjWHg82V",
  "key7": "52CiuoCT8sGGNT4ZkZzsr3cxBeVAk5pCKptBzpeELB8dyF7voMA5guyhTLWBjAYdEcRCP8rkfG4qHrjQt9b2vYTj",
  "key8": "2uAH9wbhX9aENo3DdDBr4RcCiFW8YCep4Z381TfL1JQQjuvBPmdub6KpqDVfWbDA4DePEfhTDSkf3hSzde5QueE3",
  "key9": "5Bk5yXgYHW9knvozs4Nk9ewiSswEdmb9Ze2VEfggcxoK4dCacD4EhLfofwx4YuP2ohJNRt5EdtEmnNLPmvuCfFfL",
  "key10": "5WqZWmBea5RMiKgA64agbeUHG446uQ5qs1KnnHx1nHXTbCfp3dc1py2sEzFcU19UNen3p34NLoWzn98aJWnq2BXo",
  "key11": "3Rr6a4KoKNU4UvGjKtXzaoTQAMFbJabuTs2BrXUYYwm1ieGKzqrAczy6qTNcwJKqmBd36iN4UG74nq92KavSHx1x",
  "key12": "49oLCZvqfSoZzUXQ4u8BX5LLmYYwSxgKHtovaoqCLng9mWtcK9wDdRYjSyu3QgyokCCsxaxe8VEPF3S3x8SFwRpE",
  "key13": "2434T7yhxzhpkucgtHDHePZfxwso8XLyDYTj1fAHFa3d8azjVMJhXZgxJv3h2C1ypZCysmV9Ed1CVUAProAWPmu4",
  "key14": "2RJjiwxLbeLJJpcBJJ7BvViTaeRHvPoN7ebNA8VLZzcLQ3zyFYa6j8Hk97iWVGWyeZoH7sGeEkuL4YgSf5soP7K8",
  "key15": "24TMXyiaEbUZ6MUbzJSXUPSNCsX7LZXcNQEa6AytMwZjnhLCDuFotiwyBLRnvFgmdeV4mMd7341VYXDE7uwNAMSL",
  "key16": "5vMX6w1VjWJQPr4FUnLtKaEJMHD78W8fpjfnMkSmci3NRsNLihdQNwQLV4geMbBUseTD9ofXH1CHgtCReTwb49Ta",
  "key17": "3uRKKZ7fysE7db5R4ZnBdzvFrxcyDMzpo3dFEJjpbZiRnnmzWxiV2oBUAqcHiyTtypT91Xyr7Cvus451DvCbWQyJ",
  "key18": "4eysitoLvGFat1DbYb6kfKztQxYL3jTHt1de63EGHvxANiBaqi5mXXu1yKh6o1kVXRhVsgiNU7mgcdKhsgou4Wmw",
  "key19": "2WPBJzQ6yENyQYnbpHgTmbZcuNfXYiAFvpRTyXW2FBdEvr7c3uuJn1sAJzDGS6pz74PToHSQzJydpNCDVT993Edh",
  "key20": "2ZP9QUqKTUvM3Hek7sgLWvjZdQbmaTdTmPZssdsa9JjjUdqb9MsYVacJH3DuTTXnBRvmoTmqV74zqB96bvTFUBXP",
  "key21": "4E69KctdMXXrs9FvCE1QobJVmDTcrPjAsWgkVnL5dUPkVec1Rmx4wtGifPyVwUngu5WWzArBCGuRN725ypzri37T",
  "key22": "2bSQuKsp2b8oRsmjWUrVyicwNEEXi1j4NSDhvfxrA3mjgD76THKoYbU3K13JjKudRGmE1PS97aFS9LEM62ftfLE1",
  "key23": "3DyvWH2QY8dV5g28pxs3MBr9V8cKEZLx6Cryb6ZGCnNFzVE6BEbr4pJ2whbfM6vcHGAKCKqvgUEKJMBxAi7dbNV1",
  "key24": "2sunbeVJzkijo26LbypsHqP2rz1zP42HjpeawwTthBg4xvEHok2WVpwGBxqWpHePdEEhbyp7d7U9skSoM8BwjCpw",
  "key25": "3esxEHbZeuAVjTnH6uKpjoD5fGbWFPC2aneY1bD9iN89RwXUKjXpUPeCdyBLCGFKSthzEDg55ZcG18SPZvwXuzaQ",
  "key26": "3yJxrTdN9JZF6GGbM6vxQFieLQvNNxd8R8Mb6b8ftDtBcfwkRm2rKS5oQNsJNAZnTgkGNYVJC1BKJ8QHEjakC1EB",
  "key27": "48dRURoWKrqWzW86CEaYu8cwaVg8caGs1NgyjMHZGoRMtvqgd2p4PfYvWbPSQX6tEXgYEjp6hpVxV9XoLA8Sh5Wq",
  "key28": "xVcshpPuhRanE1a6GAVGx3P61NJtEgoTEU8DfLhP6JD93vHvrGeHnUQCDT3dG1eAqcziNJea88CbWEGUsEXD3rs"
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
