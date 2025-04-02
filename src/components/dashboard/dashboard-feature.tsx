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
    "4c9u36ovnrTS3KECr2PCVciZKv7KRhTpjWfGvcFhhh2tPThUVNmRe5GeVY9gKyarPcnowyFayd6MxeCeaiouh35P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cvhsgeYMkicQ34v2SToNwB3dTQdmyozd87hRm5drew4LHk62jX5xutc3XWUbUSBHkdi1TeGGP1owvpoKaJzESrg",
  "key1": "2W3Z1NbUKpiJWsuefcxed9UaFMBn7F8FXz2WruKZkPKv5ZDPa22X15doFY8tsUbPt8dxPrD9AxjZkro1q7Zsmbdi",
  "key2": "55ksR23REnfcB1pfQczvhmWaTtK8NEy7mrqDnrzP7S5pvB5crazDednnXo5UWL95fEv8u1xNv8bX4dhhC8gDpgN",
  "key3": "ExXNXy5HE3rhGrgvkzzDEjrpx8KWqmYNkPyALmWS7rr1AY5AzkHufbbGUSWQsPgVn4hsi5Pzmq62mYqo7YRBqRx",
  "key4": "2nc3Auqyo63p5JzVfNR5LWAzriRn4qGgenHhJ9PT1eh8iPKZAFpGBRmt7YEoNexB7T7F6WBCc7bjHQgbPBagbNrK",
  "key5": "55aRqnWoo2GGuSD2xCyeP1CQWuSprSMJ7i8E6UxwpW7QocSqqR7m6zTqxNDiRuFaambtvkoEs64DQr8oQWTJjxJA",
  "key6": "3HspFSZD1b5gSuhmwjsrvvFfMuy5RzbZWXDGkVM1LuuyDs1cCs5EhFUJ38TsgqKGkgW2qYFH8n1NuspbPE6ji95L",
  "key7": "4ZtXtmwo26ej73bmRwjdUJm6HD1iZvXyi4piBFS9QucRWgbNqP3xfCwRvionxvHCC5XhjuEGtL9tfBT9idaK6mBo",
  "key8": "5QPZYvfGCeZtr18SKKCKGn4wD9QVxJJn2iDe9LLzYn73tAkP9Yx3T8mxRn2rwaeB9pGhPAzfv1FgHWzMXuNtd8ya",
  "key9": "2tgs3tv73DVAS8pycajjF3RrzkYdQ7wo9RUQAjUaA5QEGvnot9CGrSKDoymHJMKSPzHwSL5AhEJ9CZCfCMcMho93",
  "key10": "22zHexYS45bzLuvtZzuqrL18UVQBk8Y6GjPd1ud3mbMpxX4buYJs3ftAxW8jUDnm7468NAqgHZmJWaitS6oNVqLd",
  "key11": "vdt9r43xHXWGPdVD5b2Ymc5gBiHLtkoyoBq3nAHuwz3VBrwhXLakWJvjTy6G3KNR8xwRTdVi79DbQotatK9Cb2p",
  "key12": "Ww8Rp8MDYxL6UmJVgxoqT5Gm87Nw9nxvjQpYNz5ckVRoKkqTMWGhQdTCzY4KWYaAiLx9A455erBPHKZPsdJ3spc",
  "key13": "4XChNjywNV2brgMzYRDfMAEzumyyeQmTq4u9p8HmSi667a3EqtzbVQRqC15W2n3mKodpj5TPNnvDnvc1MthfsWqx",
  "key14": "5LQRHRPoZRz7TuWCBFaDseg1co78yw7H4z627cvMJMi1ogkK5XCMK5ZCryh4dxVv74Z6dsKNkQjA2tHuCb6FPZ2H",
  "key15": "5UbeV8tz92XUUMsp6iJzuhyBUpoGvvCAatBMazCaCtnPnejze5e7379M8PgTtJjtPwi6theoQcKt92zcUtN7iVkD",
  "key16": "5YqQQHnChw1vEbr9VSe2UHeZn9J2qgx19XTtnWTBkbu5p6VpbYDHMjc2hzstkT6bwkqaRkC7quqGukEPTHhgQef2",
  "key17": "47EpUtvtmfYGnbca7sRbWYViKax3v3gj1tAtbjrEicCv9MKZFBSs4nVujixVNTPMKR7EZQFfjqSmRNUbvwXcuiwd",
  "key18": "3LZMX2QBx6jSkcACsjvtxCP3R1iasTXd2pBPtn2LYqH832WeMXq22mp4jBEP4w34stFe3ni5zw2izEQjsgJcLuSj",
  "key19": "4iaeYMyc4KA9zhxf6PuDj1BMjSZ1Cmb5dPfKGwCBSE7xTE17uE77LakwMxqshkKpvFmo9s6BmUXfZarpU9xwM25q",
  "key20": "4rTdhEqyfGdeCVixyLBznXEh25jpJZTf3JtjNMUYYEovJGWD4aBWQz36gkA2Ndx4CF1NpA6njGCwPA76osJMkhGP",
  "key21": "nxg86VX6noxqCswfzZMip8PrhRqyLUXexxueFg1cTUL4eYW5cTuuufZj2GiCFLFd41BibMUnAoJCHUeNFnXFrdd",
  "key22": "3YusvTQYWfsePzJgNeusJZTa4EvQTR2nRXWDGNsveonAv61xENYkUdudjSmCam37cv81k6K1TArMZsbzuyKzUHXS",
  "key23": "vbQ4KeK7tBaZ5SmnbkKbRhyXL6jCiGy6L7n4CzR5iFYfCUyR1xVBEL7teeCdoiPHHQg6LGRG1bSjTLvACA4EJCZ",
  "key24": "2CZaS1nkgv2c6sgYF4hvQCPRTVQe9VJBFmzpceTbgNAPvLEBUWonAd6a6u4SFUaBChDE7cELNQm7v32Sx1oTQVLs",
  "key25": "55X6o6SrJmLXor3V2SMUKb4BEogtSsNanBa7UjjoeTy6zwJRVJnZM448qVKi4M8tY2hT6tGqYdsX33YweaKKxm6o",
  "key26": "4B7ywwKYNN2mjxGpJWbePtnS5ytUmxV9gFoSdcb6ADM3GDyC99KrQCZnYUzFphyRM7cGoaUJgMncJqRQGpDEvNue",
  "key27": "24D8SkUNeJcnyZArLU6rpavSj4u2qJ4UEbRKaSz9PkkRaSSewJ8BQiPp2KoqD32nReJy5izYcg7Pqh3RrVfPbpyP"
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
