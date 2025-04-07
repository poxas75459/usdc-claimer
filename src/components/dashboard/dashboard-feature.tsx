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
    "5MFD3A4FMxPhNnpgMEu3uBU1H7GeJSkGcgcBp12pprKBpPHFxe2X4zUKXzf4qr5VqUsCUVP4G98AZP4igKz4PVeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28uwMVuMgee4wURwbRuaSCC2eznSm5j7wNyaHKurK2WNC3YfbM49PQCJv377Bb4RfhtVzzhisXLrQe7GyGCCYMdp",
  "key1": "46UX8pbvWSG47qEnfEgLnboBQgKggzPwTMEqWMsHkdFCwf4kohqTgfxzFxdqG6iSReU7nQqN4Dmr9WBgwWyBeqbG",
  "key2": "dgG373CxTfL2UTnPvtnRS92c6aUMf7aYStkBFTugD4zDgBDe7FgknytaS8TsaeboiwooiRSodpzaXtm3s9ZLgmm",
  "key3": "4oWHGNKdW7H63exeDjfS8vyauJn6n3YuJFbwjeeXcdDHrxSMMW6EDNtTm4YkhGphzs6SyVBwDvuB2QwCupk9iY7u",
  "key4": "5RuCFeM34DaExb4gXy53UHDEbh6mWbVaAp1fN6cSCkqqbpM2URZrFomZTM8Wx7HcoHTdU9CE9J9GxEqY8t4opRfe",
  "key5": "66RodtCwgDmkohjPgWeVyu2gDguLNLUtycKRx4VAMho9p66iqm7NLdZxCGhgwffvZqsFMnGktMe4vygM5DYGKZVo",
  "key6": "3oQs1vKfhSoixV3e94rz7EU9dVcLCVYpmrBnc35v52K3sHxMGUqffmct1A6NyUNSURLhXNje2RSkYGk9yZoKHFME",
  "key7": "3YmpaDfkJqZ1H3J2RAkYP5jxwpD934NtZdur97Z8jCcMfwhWhaxnkkaH1MMNHKD1wrccNi8fCMitAcUj9LgUC8uP",
  "key8": "4bxJUP25qbzjiDvixLiV4XaZ3BLXpt24aGwDWid8TPUBMeidseurGR2VRsfEh5ty8ixNDj4QgCpAEnGbtJST5tga",
  "key9": "Sh6hhmSusjnADGRBg4TJrd7T3XvkGqMjg2t9CDUD4TBbzERKne4YcMzXSCBiX4TyoNWCViYfqub6Fe3HK9iXGDG",
  "key10": "4QHqvJmfJQigGrT8tHdY8UbSds5qD1BKy6vRzoeFBBtYW6DDZuWYq72NoQ68kxUZMVbWrK6vmLugWrfdA9P2HAh5",
  "key11": "3cN4PVp1RzYAjM7RnCXTSgAp87MmZq51qksJywe3YPe72eBgpMgc4qB2CPiNyCgtcKAGN2gkKCmwtFFkJDknpxgG",
  "key12": "3AagsbhnQqyh6Ajm4Yvwea5UXjVkrEKfxXwcfEcaanw5yzmk5Jq4DaSNMWZsFETEq6zokbAx7BzHEr2bnM5hR9FA",
  "key13": "62y4bTkJN8TEX75D6wnAAxZLUPYNo4JXQDAULorqPiPLMGHDKYVzi77TaS8BxQh1JukMcQGCM7ep5mhvbgfWKbVJ",
  "key14": "4Jy9Rt48e5Y29gujh2BBJsLFh6g1TsmpvhXwuHNAuMycURr8Cjnysw5xhr9qZ6EZMZCMyH2cFbEUYWA4xjnP1BoN",
  "key15": "5MYqfujfMnqNuue8LhyN98NyKz9ZY6EyYgwQSPdYLMpTMbQnDhX343BzCrY1tQECMQkpDevqw3o2FZarE2XBU9da",
  "key16": "4tfdXaExXXVL19bhzw6fMZUDUjUjh4KKxLEEtrNA3S6gvbGmk4TJEXkD3By9RCaqV1u7xgjMrVVrt6V7LcCWbaWk",
  "key17": "4bqJzGxjJmxMSmzpe8nvbu15StCmeYoKaoskuowgNahFmWqLkTzxv2NeB3yuvzYYnShGiJ5nDZZZx9qFtvE2ksfU",
  "key18": "5QDs82rH9aiskeC6kwjFasdZgcrR4iK2BP89EGLCAXWkxGpZN1hftjrBrhRZMWGrqE7jV4erAgoxT8oTPmZLayir",
  "key19": "4T115M5HmvNFdQNhk999coT5ULZqFDniFoSNaeB2BQSdLinyQ6FVxp1yX98PM11PFnkqSBPdF93rFjhmfCuBwZEi",
  "key20": "4wYDt1yJ2YyjmHgp8Lk6RsG8cKrKvytztM2i4SMCSHprLegyqz8NWhQdazL4846GRWxHByKB98ZQjDnpM16ou1hM",
  "key21": "2iuhN11dZ6M2Ddno7ux6wRdtgy4cnYGmUV4mhEL5iVZQmKqQK43Ec3HCtQY9hwzFpqUnc8HbEVXs2xCwjWB8DVXu",
  "key22": "59wFQNvnFatSGKog4ETF3UXxvepUqe6aESPSB8Q25cyCzw2NoNnDnQhauc5tf3UbnPQBR9UvasYTguQKiDj5jgHu",
  "key23": "2GfTe2xqemV5kARX3ZUcrxLwT1EqKY1r99bp72wC7vAhc6iCFewE6smt5cW78fTguMXavBBaHxNr7wv3FCGroK1L",
  "key24": "HcL43Zh963pus7UvD6seamYsH5mc1hw5aUWYyGmyfkLzdUBhTXa5Mt5z1V9s46fJEcjw6fcx2sYFAEYrfsZ4RiE",
  "key25": "5C9b4WWNf2pptXxWR6eWCDKkWsqvUVgE4rPE6FQi3e3Gg3jNqpBKFtpMxJRRMVuq12xZSAvcSBLV4dR7X6YZCvAQ",
  "key26": "3rU7dTMoFf85aUmTLtksabEDySFUjiLPy8BAfvMcpicPRcotVjjw9aNBufKotMgjHy5LrMDM8gHP68VzdGnbvibw",
  "key27": "4Yxy8kDqaUMB6sZJxrXpnkwPXAdewgfrDef6UF3ztFxLytRipWgX7EGD8qZE5NfnsjSvWoExaZuv1vXFJJYLNT6N",
  "key28": "2ZgtmwoZYGhYZJkHHtjkUFnCXVkVasyBrae417TGDdomxQ2Lr6VpdgTQjbzoEnVrD1MYHDLwJAU3J9Djzh8i4Ncb",
  "key29": "4RuZyaJE792C6ZGLPXJNx5tuqrwoCf1kjXu4McXyxdax3khFJKL4rQZpDzjQsz6HCrYf8Ng68JDrYhdDyZPueoiy",
  "key30": "o5cquVKnJcQfhEP7mx2vpEUfzTL5rK9nVoMDAhKKfSY9veuzYtwKYQgrPgvoeFwdNa9ngcsshsSEpnWAbrDZrAF",
  "key31": "4UkgdyuAxEoxoLApoviBu9oySa1qXy19nXyhVjFkaZYEh9mDrgUXxiLe3a1UjaksbDjgu9b3PgvrixdL4bKShmHb",
  "key32": "Gr9gTiFCirXVKXU43XdA3F8GnWYfKiMZRQB7PKFz4FiURPBwGtfzBGawJV1jVW36hvuraCb1oD9Z4cQC35W8MfM",
  "key33": "2Kd3agyh3SjGouRQgJQ697PbvPxHG7vnWpW3tBquAw4gYR8HMrrzDcPxG7xrh9ffEAkm9oea5meF6rdTS8o9nRun",
  "key34": "532fSqvogabqfwfKYgAZ25zpFHrsffDQuto2pd1ZrLGwYnUSpnqSag1FdzEaWTFXFaYqQDAccE1pjEbwXPzDEeYW",
  "key35": "kJqwWMwWQWiShaNECZa7wfq6ai9yzpoPmpiua8EDRKw73PCgKpvfY1nG9ecLkWsgjUv9uBz9p23hQKDytyTVija",
  "key36": "STJhVeGoQv2PpVXXWK3ucyVj38UQT3t4d68KyewGjbngSVVjNf258JCjP3sLvkA4RRdoZJs23VSSvfVTRXkYVsD"
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
