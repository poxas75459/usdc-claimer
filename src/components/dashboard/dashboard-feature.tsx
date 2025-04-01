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
    "3REb52HLNYfYyHTGUzHQWB83kodQfp6pFPcEKgbxsjQNaJC7oTFXFU89PSVEeHhfK7gucTwwh187yScN3Hw7kHLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NyXS3QFbL54Dj1wxcP8sGM1hhzFDc4xZvnaRDhMg4QQXGvhoukE5u2BhU4iteUYGQxVyc4GSmW6n6vBhqTRtuiT",
  "key1": "3kEh1zdY8KbK86riRgT9PkHLdzSkNqCYaAFPc83KR65K3dpKc9HfFrThMySwEkC5uMX4JHEyyEvwiafRY9nXpUFa",
  "key2": "24FLb2QteC89c9yL8CGyggJREC3ZrJcPESRU7etyMc3PLCQJ58b4VKE8zEhzCNiePJNitCNCDmhH5qb7RjVXigb7",
  "key3": "k4SUvhHpdsDHffQbNt94ztZrjFvdzPT3bsZgf43XNr1tf1SN9PCKdREjuKBEyVWKRuNn4ToSg68Tm5Mih9PJHLu",
  "key4": "36u3dKryX66Qp44PsMqtDzn6XtrDwRVd9BBSFyozLAtjQXLg4gzwtPFiMuduNLQdJoeAfgNWCYsUrRj5gSXRNNQs",
  "key5": "2vrtmQNvz1Saf4mJBW1o4m76SzWFB1pvhX9TiKhDwE1tiFNcy2qUUSE9hjBo2t3ijZtt2hb9XQtF7CC4QVfdSBF7",
  "key6": "5GmxEXobTMiJE8boyh98bLVYEEbKnGQCcURm4rVhR33UUDBCSQtibaptwbTb9DTaFPnFLuYU6vLCtCqneKdUhENx",
  "key7": "5AhCGoWhwmugSQRGSciHPHA36BqixDep5VfbK1GpqrgoEqp8qznMnnZYb1ym9ftP9UDyGEYpFUzMxAA65LESRvwU",
  "key8": "4zA3VCCpBaLLW8z7FB9Dx4ZC653eTYMMPpdws4z514RWNTRqTraNXtAWVq3ZK1CqitvCicUM9KPsU1mYrvea5PwB",
  "key9": "4oLtsP3c5cpEye7zgg1suM5HpCoE2V5TeqjW9bzaBvQqaUqmH2fYbXgqxkypnwSQZfybnrJTc9FC7jffVtcGwqxE",
  "key10": "ezEXtoHKayvJu363FFuk4neCZhogjvoxXDvm77bWmdKXi9jkTFzpLDPTDLAYWCrutPrpx8EJJBKhmpDkXWdHHMC",
  "key11": "5gpUC6X7g9H8z9AUyqsNaoz4B5sVRZFfEGvK6rtFLAatnEAtH9xi8q75ThUuBhKeGc2ShXw4wxGVLNJfv6L2TfqM",
  "key12": "2gnZLBkjifZSd7vR8CeYwHnxQ1L2KadsDmRiHdtuMEX6uBxGHbtM58gPEqBBhJY7dCZWdmWSH8fgAsyEe5XSLfwY",
  "key13": "2nK8vV3KpfdgJwCnkkk63PsUaaUSVAfuUQfD4E8YndDjbFfSG4fndKRgoU9X1rmhTZNycbR6LDvGnDHNfuBM7phw",
  "key14": "4JZ3i9KRDGbskcba338GWgWbkC9zb9hhg7jNP2Dh2JsmiPPoircYwcKkXC4fxuyyhQ5VrcaDjLttRiG42dhhW8CC",
  "key15": "rTmEuBxRuLE6e8io33x5k6dMXVeHC2Bjak5upub49n1nV4uKSmSmJ9JDxD969VAq8gFBXNkaPqkqsbg2hfMsfXf",
  "key16": "CSkgvDo6oqRgUVEF9Mj75pKeX8TeRynHm8Tg7JL6ANNDXziNKowYtf17u82R2QJLB6sx9EThLXYuLqf4amkqXE2",
  "key17": "3DUyZKNs3dFDsuHt8gUt1txSgBLK3m8YUW1PPCXWfmcvYEPCNeSsuuUbGBG7jMdypS1F5kf5JphgDweeVf3EBTY8",
  "key18": "5PWye7cF9LNDR1abpJW9FFRgtLq24CtyB7xL3jDenZKYjfP9jvjRSYVYixZBeKdAvUyCyRbk71Ts6trKjh64Te2H",
  "key19": "3jwWwn4LFr4EUvJZD3wGeJ6oR15ftRL6etyUzrRjysj1cCBEdyLaBfqi5run7FLRAjdHVhstwyP3igJhR9CSuevs",
  "key20": "4MwCm3M6QD2yLorDPN7oM58E7zv81feW1es2RioSjRPEd8e7fCviQiwd4VAvU5XnS2P4oSc7GCJtK9E6buRSoyMs",
  "key21": "4Zoqh21iVLuVrbsdhNimYqVaM5GUJZHPbJLJeT2vY5E1AUaz4QVRBVRVQxFjm88hBjUPp7BYMbRYSSeRiEP4fNdH",
  "key22": "7in6ZzF1mhN6XmUg4FPw9MHupWDqJnqjDrrFFH9nE9Do8vZchCtf9dPvWEpJPikn441QW3fYfJWsuu1a71A7jwr",
  "key23": "U8xPoicko9SpSKUMg42kC6F9GFM39S51pQe6EQtW2DTHhdk8WAQWEVUQa8UJJdydEo9JqxyhcC7d33Mn6cv8bb2",
  "key24": "3grLpdzdmGqpvxwfrXXCnJ5WB4pqzNm3bj8b5sFDaa4zQEfhQMN4VinbWUA7jskrnBpSUbgrXmsc7UiLFremNjSx",
  "key25": "2YGEW2LwZujppDvVGed4cPo6MyVM2XWE3oKPPyeSr4VEMh8qUz5QF6WRcUz6JRgTZnKhugjzu8jeWZ5gnbZNvRuK",
  "key26": "3NPq1id73mcAPSWcZRhxihkApUVsh7xck2PJere5WfrzrDdTmXx5BCcAT2idjxJC6zLxBFPGjxinzwM9TzxbjiVD"
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
