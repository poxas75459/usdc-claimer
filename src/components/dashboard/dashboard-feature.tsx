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
    "4rrPnuam5GwxbKgBipfX1sRoG4fnH8PUtFiiSZySUqiknmq9Ctw3PwHSSdDad8HcBA33AmpzFpJTwtg6Fi1ur8Sj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v1wFXPvrxMvHqYMAv4kZzmEfYLadi5vJP1b1CeopcTZwxsB8PsZjrjneqzLGzfwNoSizkoh63KG7W8gnBm4r4gq",
  "key1": "2J537ErT4dRQvkWSoRePs7NiF5tmD1LpdaSkgnWfYYCSdNT1YNtM8zA4Z6q4G3svQ36ZFM7PYeF4YtFCF5Miiksy",
  "key2": "wVsZVZcinnoPUiVeVXMmo6tNnuaHpxmpq25dDJcSZXGYSyKRHDYnWBfm4efkb2PJjuCq8k4CKN3k1x4wDQNKyXf",
  "key3": "4qHHCtg5TDNjgackErvaLwcwZETf97SoUEf5HUNYmv1hkry1kQjomAahVtFvme7UVmyjUmCZs5kUyYCukDG1CMaa",
  "key4": "3vNEehu2Mcc5QdcdV5t8bdtZY4cefANEeKVTxQ9BExnH6RSgUY4TgV3TFkPGYZStdGzQWqm1gr2PuxkMByZooAwD",
  "key5": "4MXkiBEnTtroHSigo2WxrgpKH1ezxXhwqgxubANmMjAkbvwB6PBKCZJkQZCGt3rEGw5HTzYwymsBKJkW4wzEhQfV",
  "key6": "tckS2tkXMekayWt3PeCaxvfGDCNCS9BtNEM9NSpjSwB4fyyGVK7an9hRvd2wzXwYKgsFC76h9Xee1mcukPggCDR",
  "key7": "3evP3D9Hnq2hPuJ1ac7sqpGBXQJcYdqMKvSPVLe1PVCP83vuV8Sf7Gh92Qq9SaRffEHKY8b6TehHoAv29Qjj6w2C",
  "key8": "2Ymz6EeYrCyBGFXH4RMH31tuw4m9nxWvQVVb5DqSBfofjyjFNCJxvZupr1pR9z46bGnDHS8yVBv3s6AjfWRbgtkw",
  "key9": "4mqQj1s7Frf3DQcssHQgMwXGWKzvz9LBLGVWgrK6GgLFA5EdMNQFwM1CzCzzwg3W8362WRkZmGvS1SaLeGhmBdBy",
  "key10": "4nCj4Xzoepg33re1Sqe14dYGwM8tJNHowikz1AYrYY23e6TeHeWb1LQmjXzyjy1N3wCPktpvRoVZR7zUvujPeqRw",
  "key11": "3BPtrAye4KPj9yxguBoHXg4qYhNvXRYG49WjnssLSmTdtesYPhAEJMnW7w8Mn2HNc6wZMEpp4mxvDNPKBFDRVKSJ",
  "key12": "5eUhHC3njppJBTwJFLQfz9jgTG9nKEdPtuEKn5HULcSQXYpRoc3yx8Dj9ZKFM5sKQYmXEDsf7R6gN3PYdXqEi5hV",
  "key13": "3pHVycU6sP39oVPbfmUxqmBXssWYprSNa9hoYDdGs5x5YMpUwewgeDHz2HA69SM4kNdk9ECubgHV22WwQzEKDd9n",
  "key14": "5CjA1PPW2JYYBpdr9r7girkmPGyaZnV4GsF5BML96JKFc2hxiquLxHqj8P3kETmitfB6ucNMmL2nKW1fUxSLvSG4",
  "key15": "4FJPwXGjw2hZgzyzdKHKV3EaEHtM9HvFH1jB6mo4TXzbphpsQvTnVjbwWgqwBH8W9XhGTqUvowCKmwnocCVLTyQR",
  "key16": "89JyurSnD2DzNuy2TF256ng1BkevF4uJapvXW1bv53AVGBVKWhsVuygtzeaWFBTPffhmvaMaLR5vTQW8JzBcei9",
  "key17": "44cEEAcJZCbbEMDovnG8VUdCkoeiDktZZfF193G9KHqAH7upnfcy2sT57GEp4rwWGHnJx34gu7iV7uPYp4bbYPfD",
  "key18": "Qx22eKKV6snYQRxjqeYr7ry5Tq3KNyT8yQqqVPz84q74L41oeoUDF4cXaeaRa6gqsEoyC36ojDrASVJ6adPBPy7",
  "key19": "WKE2wxntrd1KfVA8uK5fnkLD6jq4xXaz6k1E6VnJuuR84R86i5A82LueLTR4mX9u7oDuCd5afXdWgP12PuVCpXm",
  "key20": "9jz1b43mj3UtEhdY3mDAJHNLBJANDTb2Mz6JpNHoKuiUXe3f5MbpfrLatk4vSPkGcamTDq13JwLJZxrLdxWviEt",
  "key21": "3ygR1k8diBrBtAJyZQNcnSordpe5vUE8dGdxW92mYAxxPvEajbsmf9UyDVsQ5XzJ3ECn5pRcXmaFEJ37jDTmvSqH",
  "key22": "5RJ3USX8MBC1d5KhEYicHwbBuxAL8HvTC7rSdVmbe8xa1mbecDmPqU1n3HwR6cqkj42KehbN1JojeptrJiEeiRS8",
  "key23": "3XSznUJFxNjL4c8zFr6CAFEe7upZQCrpDvVubP8SUwLnWhRWHtKn87BfqQ6mU8x2Y86wyNCTehJWM5vZoAGhECNC",
  "key24": "4MTyyewdnDePx9BbZDg96PmSAHzfkQmo6oZNVa3NfjpVhMS7RPTaF5WcqfGeEETvhYtoLcsuxYZ35LJpPwbaY1KH"
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
