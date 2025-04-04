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
    "446iomY3t6NFPRESBMrGabMywYZ7TX5Ky1TXLvxfSztQDy8Su2t9rnMLTCUCA8iEVv2NkVekXgzk4g46nvwzsKha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u7eUFB76Q1EoxQPRcYCSwLzp8RWgYMpV3dX8nnhKwqVvJ8BbuQC8ECMiDE4DrbG3wPU34xBfh838RFwqP5XpF4",
  "key1": "5uc8pqP3syw1tNN3sSpEY5vH1DNJQjhTYyswkxTgw1MuG9jq9jGQKcEtNyPk4yEitEWoM1mR1EtD7Vxbce369RGG",
  "key2": "2uWdhSaTgXwKkdjBkgSFBzTmewyNrQ1F5sGfFetuL3NC2N3nvpFzuvA7B9betT7fxGTAQYZ5mamKA13VrV9KFHcU",
  "key3": "4fjeBvY18q4ZV9nEP7nxkwcMnNBRQBcP8ZUJxyeuz7apX5urngfcJ34ihgSvLSrrKEss9TjnyrWRUnJSXvZ2DSnT",
  "key4": "4GAPvwnrGaw3wqoMpnKLh3qaFqujCnD2MGjVRsdxdGScaRQTuHXU8aEXR5aECAEoJL7JaPTsiHEQWGf3H5ohbVP",
  "key5": "64c3g3PPwmGpLqRhG6xETzkTVRL6ZjbSyVmBtBJwGJFZ28B7J73MYNxVjx9ArzS7UPafc7btcGHYNV9nqRWu5L8q",
  "key6": "3ZMNZSNk8gnVpwCU4kAhrU4viSXzsRCSWCSn59b8f6k24mqUGrnXwC2UThg5XmB5juDhCyt7dbUmPbZh7B24Fbhk",
  "key7": "51vqcxqJtmZGWMiMHBsZkRZ18YY9eo8Y1ZDH1bVmPK2psHhKsU5MCN4p232EPMor8pbfMGnK41pmVg2bHJXME1Ph",
  "key8": "5B4NQ8vZNxcfH6Ph3QukMNqHVeLKMeyNQ7itmxfgCToSWVANGYQDuyDHanQgA5PYHS2d7rzBF3NiUHww55VqvRe4",
  "key9": "vFvoF4ddAimj4gKcTNHbdCfyHTbBnJz1wcaZcEpVbK2xYGSANB3chCu1NHVFWu5qLgk9RDAJoPpL94tjBjqqRXo",
  "key10": "3XRGr58gv3emjYGJhVHxYxCAtsCZ2CLmLHP5GkiK6eQZXvEQmQqkQNtxyJTfKoGSp8AK9BDtb1RQJ5smZMn3mNew",
  "key11": "2YABD2RYPUbfvWhQNMYCPWeinikS8AUE9L9PPNahxirHSuXWJLgpUknnTTdcjg3EUi15KMCdFE8g3RMV44Vhd5U5",
  "key12": "5AHV19G7QCDK25ej1BEmoqtmGAkD2rMjUCXZKnqqVuviPLtJgYPGxNJhzkYCvdtxVNMFME4GDMmdChQf9qEYcPpb",
  "key13": "34JGavKDP2MUZsRYrqtN8YxLQuJ6jY3TzuwaVBJ29XwuxfVteJdVweU8znMRZyobFBRtWuaBNhd5ojZiL7B5JKXz",
  "key14": "4YgbLEX48tJEszydwCNvhB5dkvQFynFjjU8adct7uPbmr79Zia532AXt75wwHmkMUG9cZVDGZyBzR1XTzCxZcgbT",
  "key15": "4fYa9zAFPaaTVH19So2sgzEYYmMawjfxrgtHRo14VxxC3gG5P4QUyryY2m9LuRjyrpLj4UQbgACftM7MkiMASrD3",
  "key16": "3L56xDEkCtsTVHzUMx7jnxjFPhT2EG1MWL2S1EbDEEjSj4NM2swBVPFx2y62iihpsD1JZVN9iRjBqs3wdEjPc8iK",
  "key17": "5ewaTpyyzakBSjZ7cnyE3ovyd5WDNpXETrdbUxTakXk3LQs96HNHJq7deQUpn4cUPBbbBFQrXV5r2mGHkkpPoN5U",
  "key18": "4rvDSQ1w1sLUJdsc6YrFLVEZYEGxFVcE9zh4DcWT6yVPA2osrHCwVFWDREp6WSbcdD4AdebDg82KDAQDv1DRpYif",
  "key19": "4Vrm8V4CxTr4HnxCtqp5Z1fPMxoiteipGKt3ucqxPy8ELBfUByE1yxoqGp8QSU2mDNbAreKkEefKLitv3RuT9PMJ",
  "key20": "xgUPeZinC1Au8dBHnBxYX72ToBbLQrYFpucaLXnriUu1QaCVxpAKoaHNUHW91uH6TXRDstjMszJqnZDLuhSfbiF",
  "key21": "FxWakJD5ZGBjUsY9rrreWEroS946F8ACueGdSFFFtHBhHokEAiNtCT5r1QhDjsc7uE86QRv9obXdxW8t9eYvSJQ",
  "key22": "44tifSbg9wkNxNg2zFwpSst5M2FfTWkam7LPWXQxBn7KjopHr5gSJQ7h6QU4tYsTAvsnwsBt9PEimHyfrfj7hKTb",
  "key23": "Sv5vKVUdGgnpcmzpU2DMpPHJPZz9MpWSeypkDtvHk2F6QkAkKWcQxA9UwrpGhQMgRPZ3DdFQAWVF4agUeBfFWJE",
  "key24": "3EQC14YtgaGRuJZeJNiNxs4G3a3JfvaFGXnLCFnGgykXvMspoNz1f1vJ5i89j2TondhEmMVAZgWqRaEuL3TBLPfH",
  "key25": "43zT9JWjsC2iQP5wQ4QNU3qN6Dx87diKwxt41u3yN8NUZatZ9mgWkxgdrcncuKkuUqPpbqw7hjt1zoz8D7XJJTUZ",
  "key26": "2erDfg2doWSxs6W6raSkz2XEu4eCcHMEMNoQWTyKRfoCQPYH7EogP74cxeWg5hsBrT9ABmGfP35qLfaPTV3YcZ8E",
  "key27": "2oQGGuj4Qx1PGcSA41abvvsHpGV1xC1tNarz6ZHQPZQKJBw82CZdbmbWp8CR2PSpQ8zLoiWNfZbzU3h5zsQGqbcR",
  "key28": "2z2faNrhvgm5dBGPMdy4HUvhGsTfvfkJW9MNhB4KVrAgwtxVXKNWS7bLpRLYoVHqcUMxsumwnVbDCKBagubt8SHQ",
  "key29": "2q1pxNawNqv6srWYFEzuCrJqfzbeNazZuoQwsJTUoWMo3Vhor6T8Vdf13T9Ah9sfChjDRnKV6a7JyPMFFDQ6Xkf7"
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
