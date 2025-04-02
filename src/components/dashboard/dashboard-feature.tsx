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
    "126VC8usujRv5oWaR8xqvXnSpkjb5igwijYccuKM3Vq6yiXZrjDEDz7pK4mv3WiVmNraDECTHmCd6BLRjfHhxkHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WxrU6zvZMjG5jMTyTfgBpUTvCh7YRCv4zwt9W6YGwyfAAdtHGfL3ijx3N8EPwMotvmNjg3rrPw97jE5q4eaU6Gs",
  "key1": "4QzvWiJipbtA8APmggY4exsihDVfgVvEPZ9T8k3h2caC9FxeuxxndWnT9TWBVEPUxjaeEZ8FV3HXtsCp88E33hxg",
  "key2": "Mx48tuqeNgP5185FWjU8toQiygjxhdgiwYj2YCezBqKQdiYY4YJzUD4LiTXMTQ9W5F6RCGWY91JK4R7ujxYSNTa",
  "key3": "3R2asCahiXLW7EsCDG551abhf6c9nKcAnuiEW7axyTfFrBq6K2UriXPY2rFdcUkxqMqCCUNzFki3VdaqVByRFn2M",
  "key4": "2vAwVVfECCXVt35x9hhu2y4mp4XGPXmuT5y5bFp7uwmodp8XiH3jVm4itczHSdgYaYmbUmxCeMWT5Tu2DJcYC8F4",
  "key5": "tfXxexvyTzJEtcYB3GXMVfrvZ8FBd3wJz1WwDA9QCyawBABDBKpd5owGZYZjA3TbKERfMpBn3eaUKGxe6X5XC8i",
  "key6": "3uphbLSq9EZyPKnd8aqrkDH93fCiLKEbGFRq5nyabHEhjpRLjankfwJ5WrtSxNuzaNeaq4df31E2jZVyyraK1Wa9",
  "key7": "291FXA5qq1ZQdcAv3oVKWWCHHL25srP1mr5wV5gdohs9QMNX9QjaEsZaU48QSp6htfd8NHLWBs5XQLgBMpfwVmt6",
  "key8": "3CAzg34oLWZ2skLnmfKpM6Z4iJV7rKWUYdHfxdZWCQ2S6uRjHetuP665f8YVMtQMba42fsNA9atE3875UwZhhsNR",
  "key9": "2RnvdvM25T4m8W6iN2vnQW8aBYJ8uZyYQF4VxYAa5WwEo3E6auvRoqJU7ZybWqrpCKGbutXDBMJDSJtyczzfUfN8",
  "key10": "3SMDf2vbQgi3NbiZiXGgxGUVGZZe6EYJw3UEbuZs2Bt2YqLMdEUvzqBeeYvt4xDpevYxMoMtf8WSseWrM48gAXj7",
  "key11": "3QZN61UHjeeuVejUnBPDDTyXqj16v5e43YSHRjggHkGqBbko2sSZjjHbYtaCtuM8tF9bF8TTbVtNheeT2JAjhQ9C",
  "key12": "3q5wq9VWAijo6t9qogrnX5hRePt3y4jWM2Kt8nr7AFcb2wHn4y6r2WSFUTjHeRcERrjf2sJmY6yK2jisCeubz9yk",
  "key13": "5JXC9afhvDTZWJ1VstZY3kD2wBvTmaJ2XAY5wabNBMY1wJbjEBJAc5UJANq583a5SVeEuPgyvaYvjhitYmbhLUHW",
  "key14": "44GtTXarpuWdYqizomeaE6zJ3HWzzsE3vLBgfE1ydkwNdjt6pfeTm6B2cfpJFQ6vYPmYFmtB7jWKRcRN9ThfXsbA",
  "key15": "3Jk6z2GprC7LGTjUjFaGzocZLQXbevooESqoB4iKidPTmMhHMNHxBqXDfPvfEzWEKnZSYctE5ZTayqJJzVU8hvkH",
  "key16": "2TT6JhmbvMdAzNfsYfyin5QSrAyBPCCGdQJ793sD2mP3MJXZ5Z6hSyVDFfVgHJpELQbzivubxKZH9uNtS4du145o",
  "key17": "3pQrBXnPsMedX1Nttv32Z6SbsgwdhAYYNs3pHABeV4NHUuh13jevxxtfJx3tioR4kypyMKSHeAv3wvhXcifxrTwn",
  "key18": "2Z8vXtTawJus7PKQVzkfF9L2xV9Fzti4rdyqd5sqTmXmth91J4HiuBLJ88PfqFboKThjorJYGJyebMJjVfE641xL",
  "key19": "4PxiKT32cGat2wDnEgvFWPZukFEAJqtdn3pqhikNks1SA1SDuEqqyDpNzCcQsPzKSp2XwVcJmqArqknnJyA5NBny",
  "key20": "4PB26bzzSS61bcbXfJgRLBeXHtC7Lh61qpHkV9XKwGvW6P8MctzsCGF1NsQEj357fRHiR4DhEPGBpdPvfmQwBFy7",
  "key21": "DkY5fYptDtZXSszzaa5jYYejd96aEbP5r7ro14ZDyEgkfybBcNncFkN4S31pZ85NXxQStohF7rbK9R2zREJ9Ki6",
  "key22": "4ypKd5LFfo6mJZr5CE4azaCn6oy4gpQXm1E4zXJyTmbWa7L2bqzuUq42HWm5aadCzxmhWUSnjgX4qVer72vSuvVB",
  "key23": "25ZAzQMccqCzGD4ozo3Sua7uzdup1GzgHXrSB5KFxFkzgnQQMAfHrd7Cb3AngGDWdmoxymz1FwQALftFfqsXnvjf",
  "key24": "5DVWqt29WhLMsDeEhdSGTEzeezkxWdf2BXTEn4gMTaokZJpnbnvgSu515tkmGspc2rgXpcYa4eUTMrZwcEqFwgi6",
  "key25": "D5iFCwdyfKH9RLDpCWwujm4Znk8f9Qn4ZFc9Tx5NwM95thy5H3eiA1PaYmrJgLDDkMhHFBJ8GtMZHfXD4oqVfi9",
  "key26": "65cLT9edC1BFxMsSLfivpbB8qM8kBt4ZmHf1P7cUFzwnkPm47Z6L7goXijtDBvAuRy99C4aWR62YK27cmBEzm1qE"
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
