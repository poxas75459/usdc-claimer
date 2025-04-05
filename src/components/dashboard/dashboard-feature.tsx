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
    "27BEJiJGrVfV7DcfZQpVNA9RtJDHFkuZD6YQwH7jU3TZLf8wnL1rzHYGSrxwMPbkkvzMKnn6mCNVspuqseCTP4Yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RowomYn7UrCeDq95ChLEK4M65kf1WhcpfzVbYYyQsJidSacxKR9N2ryUd8vmgyd3hb4capFK4CH8rxTArDK2SHQ",
  "key1": "CwEzJBaV4MmmbPqjYqytuDXhDWxABeLvwyNwGff1T3XuUGSR6q96w6sgDozAyNk1DXWFsaQa5bAPzRJRTqzDC5w",
  "key2": "5qYUBFrdF3cBuWM2DkoWvYVtZJYKxJBMvF3pLpBGgtVxKzBkU4JAgtEV44JHThqZ3QyqwQ21dccoWK4fRJwqSaen",
  "key3": "4WBVJLgPGs4nSwEpBrCbUNDFXUhdozkUEpyGJ56eJWJU6F29unsY8SCQLLZDu7UwWgB6iSekT8fifZpXADf289c9",
  "key4": "3kaoVR673EUAfQtfUZoRNYKLcmsc8ihRVQf63vy9LH1yKRtuHHD335pBscHntjTQ8EcPJN15jYUWmoYhgbRWnzJd",
  "key5": "26cVNma1KHLeby4pEwhR1u1HmNLmboPhYdhGPhRsTjYdLYvYx57SvU7z35BKj95UQL6Us7eZyEtwdqoy3auhFUgv",
  "key6": "4VyqxgeD6ejQEagG9hZbicFD4SZpyGmzRGLGoxUVNrPvXFVrQEHSQkBq2MfWDUVkvMjpYo9jyZLoeivrHw1cHokd",
  "key7": "WG2uDhbKgesanMzocWUP3EUFWuRQtVeoyXVCfcFYfxkEZjkr28iJsaJ6FMNyEVv9Bmcbb4G6X48krmVfZKAsSs4",
  "key8": "4ZHbBwm3cveqM6ZBTodUsAGz2weJfkdirKSSCFFwLW3PbJDULWcgyrqNNbbd39nL74Q4QcYBp2uBC4FvAgDqJaRm",
  "key9": "nKyi8fiS2nWaeXpE4mEYQT73JTo5Hj4ErypDPWZfquQzJRUHvP9PXZtzTArHZh6SXNnakLPcpP5QNCbSV2WUpz9",
  "key10": "2Mga7rvvhGVZVgFmWJzoydPzeJQAam7tpJyZvZMPBraMD6njZJjm4D5ufkumkQQ2Hkd5ru6YUX9UEDAfRMJrBeab",
  "key11": "3onLFVqcov99VRuJmhVJd6b1dDC9t6de98NhwnWzRzKwMzso2Es5kKoKwHH4GFE6vePvabM7YaKzafxKUAitFbnX",
  "key12": "3kgd4UX2F63SUdfT7KGXUsuBUQfPH79RhGEi7U9sGAB9HV4yoK3H5U9gmJpzH1dHgzwcYL5cifi7PATzhsm4piva",
  "key13": "4DrCzLdpMU6C3dm1orYZs2waYC75JFbLioVsEvTANZz1zXNL96Fh4Takc7AkTirP5mxKrTaarCv1vWBN6b9TLunX",
  "key14": "2LS58pK6meaVdsnnKccELC3i8rkPBdEM9rh5NA8xaRpZqAi21EVYwQfNghVeYVWoT9An8menRKDkV22JL3TpZZ39",
  "key15": "4A8riAVXXTybnVP9Nfz1DD4RyLTmwSyZtaDpJhmLce1VVFWfr4QM8hPevghpVjB7fWL9oeaQCVfLUyvRYY4NnQmH",
  "key16": "3wYft9FbyWsNwnf3SyPRQaT2P5GQ1VoQj1ghDDhNnQBPoS7bxn7wo37mo456SSR2L7kUWAbaMhoRTf91hntdYStT",
  "key17": "AmeGLccxZXUEMp1A97YAbTK7U9cPk5jwpT5cfaTHXZ45NGSMQQhpEkGT7YP5y1fV2FHMZ1d75mXPy1pnxNtH8wR",
  "key18": "RKrc1nLLzcAk4P8SNVmNjFpwvK1UWUwFrJX1TYsoLi33fRtKVwThqscec29MgNTz6rE12cSfkkMc8CskpYpmLfP",
  "key19": "2v3J281U87BNZFf8udpkhZzYbqYkbcLdZETPfKE4cn6g1Roig7sS6zy3dbwP1A5kYWG4Mv44ZFZJxBkG1RYhmaTZ",
  "key20": "26ep9rc5RSbPuZgMYeDjGSyicXVGicsu78jn2mozuVQPgSMu7d7AUsca5wU8WixuxGjj7Q5gHe747XRR5TkLfGe8",
  "key21": "3vtv3896cMLQzPM9aCAswdRR5sZeg8hvkvPaoPLR4iW1WpUwiNcyUbBAXMrSgtoLHoeerQDP3RRi2anRgHyeU5iv",
  "key22": "45LnXRL7539yk2wx1JX9obiEZrArHWriUXT8mBAeRY19nxH1U7PZ5wrFGELGKcRibxXKX52Z4FCU9GwH1SQcDw4g",
  "key23": "3H7WnaGoNPQ9ifCecjqtZydMCUTB6nFQxrjhFx8RbGDGs5SiMNUaQaHUTCvPdtmWx4TK5SBQT5NHMxM4LeXjfxnP",
  "key24": "VosVJ6BV8bjWGStEGNxWhEADzvVGB3V8eiNoPVjru9FoNTb1aAoGnEqvdz8uNaV9ZF5NnZCjv8N6a1taYaSAvan",
  "key25": "2c9FHdwHEs47ibgZcvY5W8cQDdQUG21VWBbriPXs62QQjiZRjh9xafDGSZo9cGeygoDLGT3Hj2Mb6RREMDjjVFkS",
  "key26": "641MjJnAi1AUXSEEEaxHjuwT7zv1gMWHRkuMHpmbv3mPdBjsZZw5uqCKej8hJxi88bRtmfatrxGkzJxNpoFiqMRF",
  "key27": "3axtmvWCpN23N7MVT228JjZJfuwnd1ymVvZphmFcPw5WH8ugKcUhGKmVnTPjgSdaCYcptJroKTuikUk46R9zUnRv",
  "key28": "2VvnGaw2EarmnkHmQgcG691PbcoFKHorsLDqUtKx1BRpr74ggp9nie76NtHegE4nQ1WTVDzRLjNf71BmJJ8U4jaV"
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
