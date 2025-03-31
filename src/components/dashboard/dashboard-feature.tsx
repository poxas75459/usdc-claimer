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
    "3mhJacBYQ3uoNQWtsHQAx2UCZy7YWMQSBvKgii1ukdruGKyVYsNkYL3LdbfCcXKXF8qns7P9ix3EUSKZd29aJo44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cX4GmyHQ3bc378BSutABQNGhHicoGxPPRHjjXStVwXo2ZhQasT4xqY1L3ZjgERYgttokZL616kMtF9qoQc46uTB",
  "key1": "jihFgTW8SzpqmKzjyJAwc5kyewVwKydCNDHwkcSBnnpscjEGhhy8jp65B3Vif5ranpWWDnQd8WHYjG36mPiMpJ2",
  "key2": "4wwXAr8fAQE6n5HpJC3pFRK8BKVFmdyHkZoWjJBDYP2sGrxBhQGVcWS1rKhsnsnBjjiNsF9KKWC1c292t97Dq4XZ",
  "key3": "3wM5zQpGqUX3xitxWFP32SMUhUWGUmVx47Qt2ztLpnADaujpecHHCkMR8TkbXxaKYKG2waii5U2RHP4U3Q2JhoWd",
  "key4": "G5Pmy6jxkWo7hHe3TzM7iwYEyCLKQeHJZBiX4P6gWeB2moi7E677ATUDBrS3HyNdizNNfv4pWxMP6d6wEjj4HmJ",
  "key5": "2Zs1gzGY88x5dnM87BU8thPR3cKanDDvN4d5HaswQnu2bdcBNC2XNzGh894hMEgcJ6yN682tqUiCnLj7oRj2hZbb",
  "key6": "4LA5yoD5DESpFwyGKyHVHztR1sYG3YBVmYZmevauvNRuACxxgmuFzcv7zxe9tmdeMVixrRXk5ymeUpw59YpQewYn",
  "key7": "5PgEQwJCyhzkV3AHpohKmgjUBAYY8Pk4fJoynxyAkfZj9qqebbwmvp4DTnUc2WMv7DKDn67MeMj3Zgo7kAyeikKG",
  "key8": "2ySGLEqfrPTesDS9jJ9pSiMCjTvYcbVCqRv9LN3xnXNxDMxLnfJacnBPTbvJF5zjbgEQHpa4EyGUhr6ADn33iTQM",
  "key9": "eUvYmvptyS2MMjpSQbgkzGiCpmA19LVLgHxHhSAuNYTYHuScP5geSGXSbPQCT7ijSF6mxijwcGceyseJNHffePM",
  "key10": "5hcXEoSos6DzM1sHZ9DuKgBKB1T5dGyav9xC2e9rGt6jyr21W8eAwMFXD9RQTV3nbx6vpurd48c8P2j9BeHJoAMK",
  "key11": "voPTV1NnG9xw4jK56GvG5q433zDvDfjeWmYYZgAnCpnebrN8WhBTG27kD81WvsPC5gkhg6hSxKMNHvUJZeGLt6K",
  "key12": "5U9DrUzrynncUrvTSEuWzNSSTK84787uH49yxEeUXqndXMvCpG3DgLGrmNKbppvyRxcsFqqLotARJBMabiM7Zb6o",
  "key13": "3UUoVuRSZaBzXY1uqYt1SWqpVmYnnsgREtvfYCxEruKq1ESzCirTyxyV3ereiphFNCUnrjRFwpY4L4wn1mz5ERWF",
  "key14": "5wKUi5VXPDDatN2MRDiEkE4KSLV3nyz48HKAoUwZQzh8eZX9B3Vu8qa5Z4AvPKB3DJmCrdJhEwaEtuRZbo6unrhX",
  "key15": "4G3r3cuq8LGAj1rCdT88MLfaafQ2nGU5GbaovuxQTYeWuhsBdX3xZnDVg8jjHxTuAVmYyZ9aDKwN4xKC9jbJZB6H",
  "key16": "23bHZhD8JXz9zCDpeuUDDjzbqi3K7u5EZ1zxRAmis8iCrg7w8WdFeGR2EeiEfNyy23YLbAzSuEgGA3JP1L4yAeyf",
  "key17": "3mNSvLAsK21aCEZrkckdJ71ST4t6xALimHxVBxJXFeqKn3BNvrUgPBp7uPvZKFXUnFGnH2RTaSVtmSNeSGKBrwyP",
  "key18": "3E4RyuDp4cxuDSDjbW6JthdsFrhEjSKCRr3vrni5D2SnuonDwbsZEuF636QmYvJBcCBrgnxj9NtZjdpG2TozsmrF",
  "key19": "32QW4LzwyEKuWaAiM2jGcGRbzx989QWDQevEnneEQSRWey9juxugyDVcU8gqL8pAcqTCZUhFBmyTCoeHkXqED4fZ",
  "key20": "UAxSSp7RwzES4yfWkGZ8g3NnSPQN42yYEEm7QoHaxC2E6uKTsZAB8XJbywFX6mNB5igeva6L3fZ3YhgMmwYJUsD",
  "key21": "4yT184BJEuxgjxZ15Q9SAujX8dr2Eqqp2gtvBLGLJSttZrSYwVba3dVea6pmUnvrqps5DRR15g6rKebYMemH8yBK",
  "key22": "2uwAJ236PVXTXMiprGn8FvdY9bvmcCXYNhxavvaedVE24nib2v31XxYevQSyfXM7hKyuq3obWZ2XHrGrwJMJvaqk",
  "key23": "46DQufzXkRGRZKEfrbqGDaNTZ5DmmSZrL6JoJ2izdLPzFCBjgQha2viBber83BLw3wApqe9qt3oGYAHRSyRiSc3",
  "key24": "eFHLaQd1agwEeRvQNFXeM2g2hofC9QdAJRm6Z3SGm65Cj9iUYRwcrvCWeX4nGpySzHTrQWZZK7Ri2twTGdGt5Re",
  "key25": "3JDrdgH6L8rvSnehk2kkX71aMDqPV9BAwWG1vUYtRS19TYvoRytRUQLPPB23Vu4onYojpP6N68eJ44Fi1yDKJabN",
  "key26": "2jChxTUyJ5UcBSFB2zZTgCuuh2f3hJ4BXwAaDnUzPgqgYpS73biVRBttfPcqoH3znbcq7JkaLZkSndYWZ4qfnQHX",
  "key27": "4YyBHTwT55h9UgXPWGK1MDg3pN9F4JvLSd5EXaSWAuwWWcg9bY2kt1FUGS59YPanBiZRFLtadqXinGXQ8dQoPzEV",
  "key28": "2zjE6w4i4PwHYt4QEvKV1pJUSatXwmtTNvZQZMvSgkVVxcAgDs4fFiRtbjNWPU2HKRxTseqdukbpqvkHQb1WVHhH",
  "key29": "wWha4KNL4ty6mrH1F58ntCs6y3xKbrf1ZUgDz1J7prFFQGHBc8dQX7mCkvHBUfH9eX57bvpjyRQnZ6UM2J3eboA",
  "key30": "4rtPopGugA74axKqQBD258HamZrJ4agvqdTA1NdPyLC84ZoubEm6s4FeoZQvZCSAAcCakDJmVaEsvJbXCYJw6REt",
  "key31": "5HQgGJpjvT9BRqYsWdGoPDq2gz5W6rEcv3X6AP9PusgTaN42sRXiVm2C7fgJbNBLekoVtjqi7XYuKASwcTpTdYrN",
  "key32": "4aogXvj94ah3SHfgKd6tspdHou1kkaHuPZWxKqaoFWFxYJsGGcb3ezKubodpqtQZfrQG1xpF9eQqAabZ2hnt6H8H",
  "key33": "2dApymFa2RPtNPiWEdg323tNqvE4jQk5pLXj2nWVGnettZXSrLKdz8Uq3D8PU1ykLon8RY3fB77LGs1grb78zzTL",
  "key34": "3EEVVXf3MecjT162ckt3kVEuqACQcQigr94aDUt8a3199FLATZzdqfVwT3zmhinP9a15J4Lwr8fYeP12yKm37QR8"
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
