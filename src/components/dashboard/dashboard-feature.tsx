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
    "2mgqoE7CiUf9oZyy9wJ8iADUWq2yeGxEYjaBfY6bSs2agEYvev8jr5KfEfs9qBAXRySiKYnwV3rrNoU3do8s83Y3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ysMEJ6MyBdySfCwZ6DPK6RmKsRHPUXkSpRNtBfxHdQ1fYFJ7XMuhW2DuNL4X2H7VEYQUEe8wF2ngg2MrM2DcSQV",
  "key1": "5PuDT7tPEGzcqpm5jh8VRV8TQE4NLy5AkvKyaEsE2LvyYG7sMCd8uBQvxvaq5caZvub5BGz1qw44xeMuK7hoQpmh",
  "key2": "4spqbJysWskksM8s8zyzzDWvBFH3mca3CXdBSi9cGfmfqRwE5zGVPThYotBMvJf6EnPqnpMmEPFQJQd1KFeBEYiH",
  "key3": "43xJpZyWeVyPWJxnDZsUAkEpJyQypCSB81HqVNh7rJtTEcJEJeiabD4VTs67iUhcvBRG6wt7iwVPMHT8HUh2w5Jy",
  "key4": "E1hU1RGJDtV7oE8DHxJ5agnEFscXhXRbrrrMNrudkqQ4os6K6xGeVZd84UawcE8ZTJwFD1b1JhcvfxxpYwsEnTn",
  "key5": "4b4QHb8b6DNq5gN2Wp9FmywgdPFnUzaxsrjMP64GpoGrEFN2R98TL3JNFG2UKwfyvqyR4vEHEZQcQeLzrJ5eT1ay",
  "key6": "4y4TNrsNj2HNKhgpFF53ccpCYRoEaiMuHqFKgDqYqmZmdLb8vS68PggMe1dzdK55jDLA6FyBzQDYFAwDBY3Jr5wc",
  "key7": "ms1Hcj8h6pA6861okzQVNp82dLxki9BYw2BXD2TdW2oPgxqrmk98NmEJYThbwrzLKc7XbrCd5FKhgAW8po1wuGu",
  "key8": "4Z1mB6oKx6bWNZovpk5niF3tv2n2cyzE8hZKgmE8wGCVY3i9gMNiVkW2giMWNqrUmGPGAmbKtLJYXmXy7XFqfGZ",
  "key9": "5zTKWrxeHWrgDxuoLj69rck2gJWLerGkK9cVXQiKqkkC8VdPrVrfiDvQwrjif4XTkjdSfRu2yisUuqxnLTAZ5sgz",
  "key10": "yHwCK7nK1LL4MYEF8Us7A8RpfVgE1RnhKLKthQeCRqujUHsy3NxCmfSYM8S1Dhb2id5EmFfaU15wmobSRBfRrVa",
  "key11": "3CUyV7d2N1Ms8VTPQfAdBBMbqLxAZBmPx88pwbHZ4zLBYxh1wDVJvjoPbuZQREeH1CaMc4TH4nGg2N7NLwuXbEwc",
  "key12": "3StdQVTP9iWnPx1iZ4nAfPQVVsJgjjQ2H8LdiUthy4CsMqzbyFGpJPmu6LtqRoxaJE3LxPcYW1J4GCXTygfMpn2k",
  "key13": "4p3DgQrXmdNGffQZtuMVthEtdMXRU78FhRKsmVz948acXoue4Cjx9nNCAx8yuVXCSLZtrhK9SzuUpY6JHDtnPiME",
  "key14": "5ejzrShp7H5NP39CKd4QqzDJjX53kLvu55ek6CMwLiGeUaqLUAwYREi8Lq9UodZhzk6Ab3SpSkRwGqvTKxw6Zf4K",
  "key15": "3JerGvyB9YLi1WfKaeEasEo2EXzaFy7WygaW1g5KEEwwxYL2y4t5g69VhbWg3RjF2LzZvpSwktcVoZG1Ynw6mEgd",
  "key16": "5pJus9tCtcob9LauxF4x1NhWQwNfmQrJ8ghkMgxuQdZRvtHTfXykiNEXGNtSso5NLhKiBZJWss2KETbDYhMaAZFo",
  "key17": "2zfDH2GtXtx3LcpdCXEavrrwfpDZ3rHZEKV49rVTEyFpSt22iYRntRoWi7uAgG5tFoWxwvSRhaaZgCCufcHQFmyK",
  "key18": "42p471W1eutN4de5hZFeL2CfyF7NSrRhrQq6egv3J1fVoXNg4FNhX57RjiPT13DLk9tHUCxCmwdh757so1T1WWtV",
  "key19": "5iv46mVCYcWGz41iVaULTaujTaeps1zCVvAnazLEGeBoVmYRLsacXhciiUrcKwdQuECPAVBDWDHSea2rgduZZXgp",
  "key20": "ahBFPBuBmXhLHGKDfZXRBj2s9Tj2nm5UMsWhiQSFoFB9ircLTVexFSyawb5NgT5JLSWEgmrX94q84hTg6Z7PbJs",
  "key21": "2G5WRaQwYH6GQ9SwRggQMXsAC9ET6dbvWVR2JkrHxhwZPcK8VYfVmPRrDvdaRGKAqQCvNuMg9MYzoxTz2tT3Xn9S",
  "key22": "28kVvXDJbrqNVUd7RWRcLnP8tpmtWudK2UF2CrkxG4A5ET1K1J98VmZZbupB9Q4eCQ1Vo1DbVSU1uC2vHyVCDkgS",
  "key23": "2zszAsqu4qoQAFWPfVie5oFPkZezrMPi4YCc9CdvcAce6ySAey6RGmjbx3tC7LSWKNXdfmBQztxRzuFQTUYw8zDr",
  "key24": "zcofPf7T29u8owRU9ov4EMLEN87dtDsJgnhYhQHGQgdwm4byCyZRu9nv3SKi7xKmJ3W2XQbpbKPQbfoi5c5jzqg",
  "key25": "bqPBeRjdbFGV2Ny63av7GP4ZCs5hghMhFCzYSZAqFheZFwwboLLJFCKc9xs7W8xJ2vb9zgaDjR16jaKCqLkzyMz",
  "key26": "3JwB5auYVu689jVoXrD3YrYqWEGXuFg8pUhhyNXaUtZYVEq3zvBWYAqQnW7tZvGX4BVWGJmeCNs4Lm2JxUVUx85a",
  "key27": "3abA3eBZQDf8QubqQp6S2Ai52BnqVnH4ky4WKE7ZVQA4KDYdNw5f6kFGsGLTr153UDp1V2s3Q4XuaVwUQiZyW48M",
  "key28": "2YhimXpgiMSC5K1mLJABnRw9EHyujSm9sjpMAeNx3y8ipagg7wVnbf8jQbjBJhZxTZQGvaHVYeXmWUHKgtYBCVjY",
  "key29": "2tdc6gfb1tn2iSQKB9uGsnfh4e2F5JHqqSPGcEhV8FrEjZEi43CUSSJwxQtmu3tUWuxYYqTZsYdcdWCZusTpLhZT",
  "key30": "4E2Wubuvr8E5iKmxA5jAMAgH8bUGUGLy3dk17jNk7zNruaqwSzSSSTi8PQoLmaH3qGRTYbKCLLni3ZMeTiY48MnD",
  "key31": "XXpWzRhGWQsvrqFD1cWHnvLQYXgA9rRaNtDELuLfyrbKocqPSNR8c8ABiHABLR2jBNq8PnPvVHkg5AnAuLYxvJG",
  "key32": "WsioeqAZgknjXrjBrVNn92U4HCCnj2xGmheKsSagnB13hJnkYsWLe8A9Fc2WyLzDnE3FA3ECQzz59VmVVhZ1L83",
  "key33": "2AA6NzK4bjy7HTfaDcSGuZhEGS8ssSm1kcgmfqZ7kCpKbrmf9W72jD8ad3Pa13QWHAnWSenex3izzvmyeymoZGkJ"
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
