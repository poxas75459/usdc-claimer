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
    "5CvkZywNJR4qiRGa6NDvYEC5HsKSELsku4C1CZoXSPKKzUaJqaJSfdcrxZEAWTsXAqd7Kc1V65nR7MiV3rvoQvhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7JtW6LmuBKFiNZb8f4BcFTRjYS2Xd3RNcY6k7PzUjxDuJS3SQW5hTyj7qQp8rkvXV7E3p2MH3SqrS4hvGszQph6",
  "key1": "422whm3pM3y5EK2QCXFAdu3KVWasuZPMhk3vMLY9h3AWZmaw9XWtVYq5NXhxXEBBmw9VPmVVyMFBrDb9CUbYCDzM",
  "key2": "3Pn5D24JHZJhfhp43znZmGwy62FuAMrErDKL8Yuytw56FBackWJZVfqUzzGc5Y8uLPGXS3PPtKt2rh178WSwBaRL",
  "key3": "2UtNpAHLcYPuVe2fYsen6pMd9tcQtwJg7cwVPCT2o8bV1gy6p9bY7Fecmhf2KT3HiBJfViiyLVZphZs4ynAFmn1B",
  "key4": "2q2fCzk5855zW4DvuQMwkUFoV9SBWt9hKbn7Zd23iZu6tmjxWJSYdjKzAds92WaUfXanWszyXJB5r4aQaieacJ7",
  "key5": "hZ8C9EH5HPGUEhoBVgt3aVkuLBA1tkaYQzNfBk62VMgRJdo6J5m44ycf1nBtM3dkhut1mR9Dt3YzCT1bTBDziBg",
  "key6": "3UpnsyBMXEQJWySNSS6Betb6uGaJ5gmCZ2AjNfV4ZxQ4c6sZzTxvkBLmsgGgv6qxsmfT8KgrB24wSD5v4UZT4Eo1",
  "key7": "2nxjg61pyXKNVK478YpLArE3oVL4VQ3Jmmf86UbEXXrYto6dkJpX6ZSmopukbJWt6rhyNHCskuKYmBd62MPiXPj4",
  "key8": "31VHSgQEcwyDBmTAvnqu9GBb9r8ud3A1wc2rAiNex4oHAYfKFHjgsigPvKWozs3LoRKA5KfdvpQfDfPjpYEBqCDg",
  "key9": "54rx6xzn5iGfKxkDUWEmQQ6m97JMLy9uAmDBYfsc6R8KiDQdgD3HD8csQTzo1ycmWWdaeM58o6hp6uHioFtZAXpG",
  "key10": "5DEoWYfPeMMBJFYQCJ67qBCwxBHp3LG4Ph1q4M7xwtLKsPZmqMGCBeryoffi2Fw6xADpXSDWDJHkc6vnZPupibv7",
  "key11": "2JxWkL4zQxUs1xsGVVjGhSC37UcxzDHcqgkF98xmXG9cyQ35zQ6VdAz2kfcro8xvXyNuATP5nQUE7VKGFvbSJ2zM",
  "key12": "4H2VJjbL6K2a1t1m7Httg5wLNiuVbyqCco13pUaFnJmuVDpdPoyzxFnW1Zi71Z5qgu8Rgn8ecBhUBQndaWSjkTRG",
  "key13": "FwjPu133zRrCz9r3BwACPG78FXA6ZtzwxN8uSmqXhj3aMSz41m1LiGH61uzSKPABCyKEpbTXyE9Nn2QYBT6sWdn",
  "key14": "4yjrAWYWFDYyPS5vA8xAUr9ZuFzKMeNziQbqca8dUw4erf4LVocYKUQaDqPm17Kh8JknSimd1EJjzwoFokhHenhL",
  "key15": "nhDhCygMSpXjRc3mE5k7P9GqBfxQ1WQz8x16wLE9y3K4K8o7yxkGsiqqSS4BVkH6GjQdXBUJ28uuyLyBRivyX2Y",
  "key16": "5iZjtSywYPo17jnAQmnDSn8y9Za2Xsvr74LmFpyN32eLLLTxTmoMxf7Td2Z8dYX1M5FFnN7s7W72qV13cRRchT7H",
  "key17": "4syZmn5JgJ4iqXivAb6TBS6igcsbwoJxd9BqLGqsQ6PHuh38UMhxV7cH47gi8ja4pyUKwdg1x4g5TBxxro3Pc33F",
  "key18": "Ns3qD1A4GDY2opFGBn4yK2fMfgGG5FGH4wpPZfk6XyLviChSyuygbnKufSDaUkikLdM8aZ8CRoVoJy6SGguzvQ4",
  "key19": "5cuyUufCLZEK5CxATnKLpTvuUnnwt79jZWai4fuxYAooadMHkbop2TMXkYxiNU4iEuSJ8Qzi1pyvi3jUKZwDZUPo",
  "key20": "3We2zXPQqAfN81wfwh61fFypAx9hVqE8XVcarLELPZoxQv6UUqB1Jmk4La5rYuFgbvmhTwcZqncihCEn1EerG7je",
  "key21": "5mZbSUBZCy1FFffZyeeeNFTJv3Nh4Ex7PACx1onmiq7RdPRSqMopW6uJmmkNEGobqEfsedR1CvuVES7waAGWW61o",
  "key22": "HCJXEAoWyQzgkZ6LAxGfEwTAkmWK3jw6oHtGyfmGMe6BcYT1HfJGGgq3S9dK1DoAPVUXJD7nuQvZzQPGsA1aVG9",
  "key23": "2uaX1xjhXdiMQvQ4k98o3SZKKQKMeEkMDQZhXypMBYYkuKdXhZXrqSSpAbnXBprurtqh6KmrWFtu6jCnFbLEDfiD",
  "key24": "4ucB5PhY3iRR4SAX1jFUHM36FFA8GstoT37nDmK1ACDzmsCyWXthDwLRBpnZNbZRGw9pD1VVLuFynS8yU2Fb5b3t",
  "key25": "5CtBNqg7bfn5PXbfwEycbrjYPF8uaVGwobpqjQhCjCPR4omngznb5U4CmSk8YGF14xE7fstouW6TuUtKZCgK7nur",
  "key26": "618EkgN63GoVUyyRWViKvHE5R3q83jT8FEBiTd7Z8yh8p1NRcvaGJUqBBowhphGEMf1eFYJhGwZojdbYJp6PZUJ7",
  "key27": "28WdMcGGXLsaWyAaPULLx85KJYAXhzxwMXT7e2LaQYJ1tJe2Nxk7kSqNodUJcz8Hc6R1fE3edVk3Dscs9P4W6Xei",
  "key28": "ZutT6UoP5DVUNFE37pX3PjnyXGo6ywajHGprtpdyThi9QccKAdg9ssfzVRnDtv1TfVtQJFLaKyCvqDtPjCS3ckj",
  "key29": "5y2zV2UxQWzVCZbQim6pp6hca6EXPhGdnsKjMQzR5jw7dcH5jFP48JoReUZFjaXgSuPPxJ881dPfZGZrH2zAN3iM",
  "key30": "42RHB88SYNp2YXArsEtGjQFpGYHhy8ddwiQK8vhvRSrLsJ8caSk8S6HbmX9SU6RGwtUjdzgfM3kYCesGSdChkznx",
  "key31": "AFesD8ShpXjhRNtWHytprnKdyeqnCHoeqr9zgdNe3hmKmbGNywBQsvBeTj3hpGHmegzqxaCJSutwur58yYuPANA",
  "key32": "2Lo14rbDqo91BhW3iUrxeyAW2FNeQezSBkNrqQw5wtyAkqueFxkbibnGE2zwHutSjpHduaPco6wYY2k5TpqggDcs"
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
