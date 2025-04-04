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
    "5kLUK22x4k2x8NNEMQUvD9E8dNzB4nbDV7YNrXhthEg2FL24exVFXbKEeX8AdEA8jh3URHxMo4kJmP7t3qHvc4kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "th2Lu1r2TzMSoT7dbdCQF2WHS5bh6V7SuivjKaPdKdjavpDkvx3hisLb3VFs1bcGfQa62xowtmXBmkzw3sAwBbF",
  "key1": "K1k7yKVsLet56x8FuCkYHguokJt5FtLuzFHQ4rAbZqGE9cwxh3pCDfPEtsi6tV9dRWobCWafKpYEVxwU9K7EmRv",
  "key2": "29JhfRBUKfsxJ1mhetnHnzwiWAzjnk2su7zhc1YMML7XM3e5g29zcTnX7kJSxmst4XjrH4vqEQdSidh6nccKAZxG",
  "key3": "4Jfexk88aQ356jkoWM5rF7iVfCetProm44vTFhbqvjVPbMuCtvw87te4UrTfsy9AWuxUUidnA5WwwGiSZty6opAP",
  "key4": "n7k7yZ7VuGjKYkvHveDBNDCo9CLzwgNXANZc7iNZPiWWphgWMJrbWasehSvQkvtKAvTp2GVhqRTAoQqX5yg83dJ",
  "key5": "3a31To1qJa1EtC7bihyANVh3hdSKo2MMCxcv8RodyXouCKhmNTAAH6WMTfDNAePcGhvmEtwz35L5Mnz9X2C2pHKG",
  "key6": "3gMXXvxyeuKLhh2jq5YqmK7SfRqC6dd3aBiSk8XBRnwVcsmZTEEEPxJLLszuy55kaVfeUjsiBsMJBPRrpWy7xdqv",
  "key7": "3Anw4yKuHbxd3oNuyspK9nP3AKXttjPZ1gk5dK3JADUPdvai1Re8cKNxcF69gnPV7UeSeTCVLqs8GSBq966CK7rw",
  "key8": "21XFnWCbcfHnFSY2Ycw4NTTJTb9defjTmoTctsBDDz3m11QWqzrXE6aNAj3ktV2HBroda5zVWEK979UrAvgQxNuu",
  "key9": "3f6wUSD6r9AwbZErFT5FT2zdTHQhz8Wkz8DfmCh5oMS4NvUzA4GqtrUwAYNV8vaLivaHvNesoZNeNYZFm7fLmpvV",
  "key10": "5EzvEt1k8q8E8c3UyPQpCrQwb1BpqJdAh5ufJRhNUnfWtmmoAcoeKH69s9ta6v4bgrCDkaCTYce7gMvdwdTfwtoz",
  "key11": "4Kp457rwdfrW8ifN4Ut4S5HcZktS7e5dMQ4MJEaWkhha12qWCXc2aJJbzupJaWD4Kvdw4DFCvqwAvc4vHGZu2RS3",
  "key12": "2xWK7oC3JsRqAKvYCzRBVDXMFnySQwNMoZ8b5D3sLoc8PVKt3p41V9Hpuu5fcQxxMxZnrVho42dYQ4WG9xNa3R4R",
  "key13": "2eeSA3HzgbiyiuRQfAQehYzT2LMEcKb3vLjrsSnxiYQsCHXk3YLCQkjQra9aFCz3g32x2yfsSSUuzoo78fN9JPdz",
  "key14": "38FUPDw81i1ABiaBoJLVo5hSjywNdP7dW13QrR6jwVwj2FFd3B8JHd4NzcKKHHSUem7d5FP6sSap5F3Dx22rWcqb",
  "key15": "dnp1gijDLaq3roa8f2JF2RBTdEt8eTbgqYRQGQLDUmxdNMSpn5shyqfFjcSmTE7GXK1BAEc7FuuiCsvo6Qp2X9s",
  "key16": "63gPU8bp6413e5JKvbWbkCFhv8Zxbb5bdajYC6NMGk8chgqsnGv9EV9dy5pA2FfaWgrNKTGD9YematCBybA1Lk3n",
  "key17": "4SPVCFAiZMqSbmSC4odxdshwBquhjRsF8qac5NniXFo9HjKYPK9YNC9fbRR8CuUEw6X2WfgDQfGkX5ZN8Ne6fsT3",
  "key18": "5QewKNAvKreFRia6GLLihhDLXBZWM6hin5c7aoR2Sd1aVj2fbjGTwsmV2cEqyZiJQ78bhqXwvaNobgVX2X13b7qD",
  "key19": "3EVQwn2HvvXa3CUjqYTVDca7ChB4ytiQHFag3pSkZu9gZHoLWpmqbEAeiCETJi9evrrxfuoRAco1zmE1TUuYVarp",
  "key20": "Wf6awvd6yWK4DY2UzWZtUNm2kcqFtL1BAjTdvKVi1qXcJoMhzEGjgnvQt4B1yA8zUZ2ML68VNi2QHoyQsThiFXT",
  "key21": "3c8YUPHJnMv5u45Ad7iKxKibvaxycfUjKYpxU4inon2nx5fNSbMmuEgiSNYwxUaeXGCYbMqMLnFiPyfJXxfhAY1z",
  "key22": "4LoVnmDGjhw5Gj8NxqdzKvMMwjSm3f4kPJbA1q7Npuh8an8bHKWEmHyR8qFkMSeU1hBsDxodgyT9xi1Bs1bWXq5q",
  "key23": "42RH52Kd36vkniYLkppr8tfJhTuaySkrvPsjd2inrnYzpBcgA4qQaii5KRZ3krVx8PXu4bT7AVEaYeeAv1WHpgLY",
  "key24": "3NbbgaYqHxWQSiMFou9XrFk6U15Nmb1HGnjHiJswY9rq9xaqQN4dVE66VUgcDTvMPuXWZmH6AV3HWisaE77iXhDr",
  "key25": "qJ5ViYsdVBsnRnq5FJV2HV6QLv8dEgznbz4fvvfEUsW5Yui8QgwHAd6bpajRw1KHJNAypgGfU84hf3eHnQ5zqa3"
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
