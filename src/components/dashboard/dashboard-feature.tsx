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
    "4tVT7b6R33hHCmebGu3J968qMhEWkvLUGvkpNznBkt6Gi7LdXZb5fVy9ENghckozcy1JWQoS7ZVdCLv5GybfcNFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DUKF6muV82TLmyLTWj4UV5KYkv6N9s4aTubzhjxoLQQYmrhRuaAciAYwobcN2e66fFg238VB8KP9Dz3Ec4vKsYU",
  "key1": "2L3DrqyZW4xqACfhgTnQrdRYTUaguLzH7AfQqBHcz3RzqPoGMh6HVzCVioKSaEqbkSMtbNJhrf2PHHuuqfhk9BnK",
  "key2": "2yx8CZ9jiDuNMLj63jhnhMvStrP7xizzeJjwuTWRWY4dzBRN4vXZFPgngN5GjGTjxPvCwk5HrZcX4Fc9G1ffrjkH",
  "key3": "4giBryEhpg2MwMWWtdneUSsvrWoQ2k4ATAgNZXXG8fpzt5AqNoPQ8WTbpqVRBbMy6jpw4q4yNWkuyzeSQKwkYCZS",
  "key4": "39EV9mZtQxTjf7vgfVmoDQp93e9FcDxTZUUiRNV7c7LVFX6sa2CPcmeWB2nh6sw59Pn9fVuQ5ysNxA15HvhSg6pw",
  "key5": "4S95ocQHWp6w1Qc3cUJ9yj2imt8ztRMNudFCaYQMn1ytCjm7nUccuzTc9uEL89QAUnmCVjrH3z6ZMtojaHd2dane",
  "key6": "4BMQ73MhB185uwCLA6uoJeLSTadd6JBfi7A5FqMucWf2HdUr3JasgYj2JYFoXs4ZAuvWVUeWX3nZMKnAHLCFsgYF",
  "key7": "5xzR6dMSCSkruGEomMBipbnYH6Vd3qnN7y6rujEsq8NFWm6c8mLcAM7fnowwumjP6GwLvmiL5tgPyMUtmVWrQkb3",
  "key8": "49sUaAKLVZZMEPNhKuMFspSecN2hsvFmN7kHzwQfVkRFCkQoaXGzr1sRe6mA84irJ6VcbZ2yebjJnpQheVct4cJn",
  "key9": "3HYithtwhrfPBZCnoa75UuYZbmCcBeveTaQW2TQwELYXGoTmdBjJuSiergbL1EnyrJhiW75Jhq91m3nkFyuScX59",
  "key10": "5WEZtpBM6eFbV3GeuDW7CVQ8XG8Wsngq6yAvR9zaPN6chH9Bg6mLM7iPiKMcAxQ1Pget2T5m7CNGnQmKeoxMTTMT",
  "key11": "2Xpfct3L5e6vfvGRRjgFRkRFanAchLPByWfiHEosEqayGyr8PNyNnnLbgBZP68DUMuFi6R3v3c7w7WL5LzpH9X6p",
  "key12": "3Qxbr35KokZhrEXPm45bHQmrs8XgW7jRfvjuEDEqDdDfWhKsEwLoP5bYMHxhFMfEDc1fRE7e7fxi3otcDuMNZZUb",
  "key13": "Wgo7T69VKgyhg21CyZPeCwsR4gL6p1d5wSKLLHhtdDfkRFi8bChtxgSrxxB2VxgCzazTrbyUSaWsE7qm8cU7gac",
  "key14": "2Tm3fAXxw51NGPJxDaDQoQX7qCKM5DWZv1fSPbwCbVKj5Zf6xn9rvQx2rFenGkTGp9oEzH9KYmhChygfjtje7EmZ",
  "key15": "5odZLtdgXrP4MXYK7eUUePvYQZeFMgL45Lawz7Y6iT7dTecxPy8bt4mhShYVjLjpoj68YaB1SZA8jRo9tWpBfMxK",
  "key16": "kA92dco2LdmvcjtftttC32KGiaA6WC4xLJBFYhqFFTNhAVRogGjidzvMLAbsWLjC7TARNrL7epJwmG3ZE3J1oVn",
  "key17": "2uibPeLY9vuQidHdeaesFoSw7ALwunCUPnoPwEEHPV7PNiht3YVoJi69qGtunuDJYUeypJ3ZkADf9Ph8GRa9thQc",
  "key18": "2PVLZ9cr5eYrTZoY72DAm7oANH8dUShvVFcDYjygeZcroqoBnGMaFjPYL4pyK9HFro6ZQ5qYGFWRqg8jAaQCfALf",
  "key19": "44r6weJGExQZXyHMeVhWB9udTjk4nG5wqoiQJngq4ApSXghkcodagw7pWTHV7DzvKYEk8xj8ybncuVj8B1Dx4epb",
  "key20": "2CSf4kqtWy646z5C2nvffks8XyP3sEJ9dQNrBghMfCiC7ebujX9MqHj6DbrcVxSMwcEnQXm6HTWtrEEtUSUfcRL2",
  "key21": "2YcZXEcv2Tv9xwEe86aXSEPw1YphtpdQSFTjJQPyXCo8pFYKgwGHcXANXSTugkhjGCo5tVnqhmuN6zipa74ycT79",
  "key22": "2i29jUwPS8yq5qDQ6crfNYaPQTo2GLKaijMWvgeR8n71GTGmq5JKFbo15NbRLCfngtZQJB9LvzEkqgFGKj6a9DLd",
  "key23": "3CVgs8YJF9LXLPXMzzVCyP3UyxEmAJvnEesdBX2EgGZQpkx85RmkTdgPpBD4GW2Rvx6vA32oaVT92FDZB1KbNMxw",
  "key24": "3sSy6smfJ4A8nn7f4yeSuhKtJRBAZ7gdVuv8AedqgQuTJacp5ocodAagZtEvFUBFCMoYwntLwPcBJn1tELBFf99s",
  "key25": "GVYjr8mFnmnge2MMR6gpefqNSTGySukETmhf8SJV9YdsR795dLF9GPe13pRrjc7qyw2SL3ALFAqGNVzXqR9UPCR",
  "key26": "roYhe2Bea3g1fJh82FpM6d6ma1vgA1fKqgtCFcefQFnotXn9KB8w67dGqPXVGSJhFbBvC8dyAWiVLZbhfYyYmQG"
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
