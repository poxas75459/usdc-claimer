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
    "5H51EQMh51THscU2A7qj25oj8xXsr3m1GN9MhuaZNwuYUD2NKBFDd3LYDhkjM4GUKiyLvLjhH5esPiFNTEcqy8WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZKXqaykGoxYLTUX9G2haBLD5nZqeSeT7Jqra85EuUg4bdYzyMA2Sv8XaKs1otrXu5JKrWJr1aqh6HokPXh6JYeR",
  "key1": "LhAUUZ8hdaAQNx1ewojvwcVD5k4asHVxdzZoJgm6ScjgARQD7AK2oWbahhSiPSg97BTssfs5wJo9mEh2JBQY3kt",
  "key2": "vvaDKP4LAhoXGYNuGiAoz7TvaF7WzorZGwNpMndiXKLnNJP7KKLg1KUBnfnStT4bL6XZ55XbQkja6xjWKvonqtd",
  "key3": "5rqaFeGPP5cZJC3AGnwjKmfvJYSnkVSfLqhCS8wDNpJQib5Aq8kuSJoVeKV6aPr8fx8nWuG5Koy6bssDVXuejfcM",
  "key4": "3ckyuq4GXqp4mRoZFG1zQja3EbPojMarj8ATJ1n4hEo6RW7kkR2PoTyxUBtwkcXogpKHVEy1mWcVjrtW6gkuxTNW",
  "key5": "2pwcUaXAPzbDm8dM81UAQis4GSivEat28KpkxtLAaqF2L2a8vTBHexefYiUrWTerzAjuZEPYJhAQZRW7mzCn3uWx",
  "key6": "2738if62pZYjZu6zMv3eR8RGPEaYtabRgc3WJZ75SUP1v8P36x7PaTX1UqbB48ZiFAazwixhjTLMKwn5DCTUGhN1",
  "key7": "i9xnLUTwUANYDbNZUsETuFByiT5nbJJ2txBBL6P6sDEmwVP1FErYUEVSDsfz5jc5yVfT6wUSuMwYdnj4vzQoFYD",
  "key8": "4GQGmA52Ka8ywXRcn5kuhh51iLvAEvcMKBUZ9qdbVj68zRpBV4Bcm5RauozaMM8Pt8eTkELppjaCtAyWiVXvewMw",
  "key9": "35jpavaRFVN9hdHhXCPX3KZXogJ65wsLvHEU8YyKp9dugZtp4bKEMdzvfhWvjzRA1D69eCVbtWztvzNeD7T2trL1",
  "key10": "Fzspb3BtkTCvafXaNM5hBXt1vGt9HsEd2x2YUBMbDFW8ChmARBhVXaEBmdajk6e6NPAyX82zhd1K2d8xgog2MUC",
  "key11": "42J9goGp63ot1J28yma4oSR8WgPFDhoNgZmCX15p735AHS8PytFTufPWvAUNCG9BNgLSwuJW3jTsMsXZ6sNf12in",
  "key12": "39vBvQcQCdhPLgTASSC7YVxQXw16LTff8Q4dYWqi2fNkfEP4Ef3XzYLH4grP5hsGszWg1tLC2a22BHQeaAARY16J",
  "key13": "3ixhF45LigonNJtDq5qDNvKXKpkmsVa7RPRBJJosv39VHK61QhTggg1yzVGNxcw2cJe9bheeAvKRNbZoZ3vhUzVU",
  "key14": "2CbgERv9HxobSSdA3K6LRhB4tvN5RCENA7vceFTDLY1aBRQG6rSFRYKqDs8jX9iLXNPhqdKoc7kydXeaR1odTCq4",
  "key15": "3SYdNeh2zyeRM5w3x1j4oCou5ifWDeTVqKHGi2aqP46Tv2VDsiJieFph9tvcR8CqWs5rrwwAcrfWU7RwXkx7UCHc",
  "key16": "2uuAsM3nGbrnEEhpeYMENyPXcvmBo81VF5tFj7ubfSZc77wEtyrJuu8KGuCbA1MiYMtTvTNf2M2T86SMpAopRtKw",
  "key17": "51rSwApGrSNDNxyDTSpPrL6cbcMeid1Vaj9ADFjGTFQHivtHA6nVEWGPmbJxsymgAL55edqhLhe7dngHaekB9xfW",
  "key18": "EQVgKPcJHT3c8XkjC8h81yzJa3jczEq8Hi9MsdTncVbhVGB6r1QnV2ZCcaEBZpPU6wo5CefKMMQUVfbg72c93WT",
  "key19": "3MRixoqkcSWcpBmfAZnNZAeCiQuMbnFiHJdXRPHwrvyvgWDdutPWRfmXzm9DC9jC7oXMhehsMLACyFFvBeGbggDa",
  "key20": "MZZadYsrUp8A2XCCRsbJNAsaPU5G129ng4DYaQSod845dQqasiiEBnpA65r2aAxNZDZMTZ4G3eWP8b2EqcHskeZ",
  "key21": "4M99tGTLLd2g9QufGptDigzhhAmPwGe7rsxWZBnrGoyCgzRjPLQD2XWw59WhWKvN7A1R9VEwXkcD5ik9HBeR4JFt",
  "key22": "5UdTaaXah6MZYxrjCzE2HX2r88pfg5ZQZqqM2RfoFgZv86a9kph11eg3sxJhfNqJW7XBovGbLWhexG3W2Kv1tkN4",
  "key23": "5YXs1V3f2JdCFjYyyTT5d5RV1Ey1M5fnPRS1mC2Hkh2EBCGkzavcAfBqZ3e3p7xWqBvbWTg9rFJgxh2FG5pN4pfW",
  "key24": "43iBotVGmd5WPMXt7VB2f2YPUTtAVskP7rU58miuU4P1S3PZCtrSSo5P6mMXEMt2BVtxudBKJcerjx34cvYKSLkT",
  "key25": "2KzLHm2ThbhkiCHqAjVxLJmA3ZpcHS6nZHjPGMmRA4kxk8U7KJMue1z1yrkNykFY2dVejBLL1ubXbQcMU1D5ewnF"
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
