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
    "3Qwzz5hx7NTf26mRLinYc2aLcZ9eHBHp3cnA41tCdEvyq2vpE6FpAQqZqnSJDXSKQrr6kQrq5YvQ7gwemA6BmhDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67k2engeMra9BVkheBpmy3MqwTdA3eHsa9oRbZ2pCx6BzKuHcecoFGutoQYeGjB4LEFGs8nSS74xrbRLCr4CkqPb",
  "key1": "3WhK6ejWMiR16JJ8Su5fbePAPyoKbZYGQJqUMJKGLyFbGvo4B9XNhCgu9DAQMyNivq2WUtzgqrSXYViV89q1cPM6",
  "key2": "3mBhbzuMXritQxuLVPsAXvfJimgaLTVvVAmeBrh6uvworu3NySUPxZmF3i5EHBYqeJDWKvJPpnFkeJTaGMvpCqt",
  "key3": "4HgrS24VqUMjEFFsYeQG7JDpc6WVunZjJcPoyqDPjY1M6cLK7eRR1eUvYL1uteLfF1Dsj1vmHcqF96rVi6Li6apK",
  "key4": "XisnWAYVCx9YNWcQL64mkxEvBCCtVSQdmrevmsVXg48bbxHac4B3xpVPWgdrpFZSEqKb3jiMK3hMgshG56mBsHP",
  "key5": "32GwzhY1VaC5s6TfYM9J9DpmePaAKf96UmGD6ARB2Ro2otjE951984hGtxxcTioT74ehtDgapdKY6eMofjHQjz5k",
  "key6": "65F4yr1p7UnTDtdfN6tMHfzxbYU1Qv9Tne2NjXc8odcrptoTRpwS1eTza6HyXw8nQVy8RLVYmZt94BXCvoANtd1c",
  "key7": "5MQL2ijLJheAiSGJVFWzpUQMSQH2nY9f2iVrHq8ECR1uPLLhaWxXZrKmrAEGSjBS66UVZUNbguvCmWWyuNfKBu7K",
  "key8": "3azLkCXD68iQmYpS2pFKqwMm13a5qSHseNdfhkCyHJLgxwvmX5VKcvCsztUSbhMzaArXYCuYzszGBjcJD9sPjFZT",
  "key9": "5U2dTg1kSEFfkeidpYCbFYJEipC2apbTRydW9MzyYp7b4ci6CDvCabrDZuMkYJwoco1DhoBjdx9mUQ4mA3tuXy2U",
  "key10": "45FcNFowXLvuHKfMxXXmDaW4d4u7GD4mR8S1rSdwartN3nFd8KfpsVwcmCWN4AhKSfgFYPfoahfFfUYAjxytGznV",
  "key11": "36aFiN3d5YNmZG4FzKeb39mDXMbHArB2siJmv8m7CEkHq5F6oVuZviv2s9MND5M4ZzznzsnLFHfL3mjX9b523uZD",
  "key12": "FUptkKjA8c8GCsiujCBGUd7dwkfn8UR3naDQJb26tiamp6i7B8x5ooyCLTrXwx4XwC9adp7y1fCHPNEmNAnK9U6",
  "key13": "4fyyQWiQCNG7fxonyWKdteCuLM8Fxe57mANmES3etHCiUK4Re64EdH27NwNPUC1kuSeJTy4YrShUqVsB9BBDVYjN",
  "key14": "3fjc6rbC1NzXNN6aj8DiYrtoPdeyaCtieCEkHnRRSFz9rfxx3sebZRcFxVzkGEUjGiVH6MwDhbuKtaN45SBE3BWw",
  "key15": "wTXg6ktghZLD8YXetW2jK2sahaEQeV8ZfEjyok9xpPvjdLEmThqmSatmepP4t1WSQrsRp9vfuafyA4tMSUHf5eh",
  "key16": "2R6A6D5xEpEvZaWADokP9eNrXxe2tvqMN3brdkd3Qi6yGjs3s7ehA8mx8Gd1cimW7jof6hgMLcFmqNGg2D5SDKn5",
  "key17": "HzTNUvYaekxDCQMZsdYzafwrsyHn7Qr1YAEMLRYgvzz9i2TvKf6biW4DMx291nK33ZvyojkBEQtpd7SCacwtdc9",
  "key18": "2c2AETtrD2qG7bZ1PtW57Shpd2wV6xxZiW3tuRrzQH2uWwFGaGCWwFYfvmaAPCxc3tnnmLYWSX9h1NQpuEtyPqGd",
  "key19": "62DEtX178wAKRfXHmu9LhdgBgcTrqKYeF2qwiz3XC2tmrMR9CtHthBfZ4B6tqCFfgphSZBX5bRSoGG9JdUP6GCKx",
  "key20": "HKMTeZYoshP2NoSGjU4oESnASvqmK3vGdz3ijSKV9tzDRwb7tuGeQjjLfmzJ7u6U1LTHBxDc5e8RgKdbT4r5Fvx",
  "key21": "3cnaBWSTvtjSswJrBvF2472J4ko3N9j2K1UVxxVZoyZkubQVVDXNF7nPGPyGE9Fut1N8tDthkqUnRaXVraTYQRWC",
  "key22": "9pFXJjCbGiirvaT7pZ98KZDgWem6DCg2srThiXoEYYErHLbzze3F1EXSXgrt4EbYkXuUmjDS4bWQzRkgAvCRhZt",
  "key23": "XRN73XjxyCCuZ1PHKuXnxLQgLt42DNpSiN58RFGx7RiZJrvkmu2sy4XfTK7WUGoAiLVUShsCmLuGQ78mVbdHmeJ",
  "key24": "4CW3kx66vGh5pmevaPCqyex53ZPf9Pkf4mLVMA13aR8WGcGM5g3jXosir6PFEaDLzRT6zUfEKYVXqDrQ3Epe937x",
  "key25": "5MyuFETU4571EPth1jafyw1RJqXFqFF9U5aXQwoecymDnpTvPTP7pvTHLHVJdp4LoukFswi76hmbsCFT3gndhz8Y"
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
