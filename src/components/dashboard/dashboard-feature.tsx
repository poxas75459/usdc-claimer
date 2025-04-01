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
    "CC43yWbV9jBHvULQ3RgciZEkogsMHL7XPDefDBkfchSSeaZ3LFLgaLhzBrxnGBzgd8VT1CTSeUvUS7mSRBBQBxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4iPQK2btuV3QXqdV4QAxaovFPu8qtzE6zricc838eQur1EYCrXfB6MHooVgBZ2cYVXUJjGySCrVS6tUg3mvuRZ",
  "key1": "3XHFBht8fs3JWvJ8unzhyESjzM6kxaU99upQ3DM48XhhByy9xKbW5GEizfpAD3Ryg6VHrAe6BRhSTcdpj53jsgTW",
  "key2": "2oD22wjftkp6oc19hpUeywvymcfJASc7E3e5bM9H6zLDZSNa6g1PpQoi2TJtNz28Sk5cAhkK3GPj8A5w5JQdXWY4",
  "key3": "4AJXixKyuGFAdA5An2RNZNfVXMWui1Rmx3BTb2hrATHxq9HLEzi5jJW8F5bUc5ZFTPU2LkJuD89GhUAUUXPDXd5x",
  "key4": "2djp5y2qz6Ye1gEAhb2vvMUVLUdphDTZwAfDRdjYYvsQFHfeMfeg4txSYLQ2KafMqW5FqvQwkWzPAi9HWR2yy31k",
  "key5": "5jeHGQg2ews14VHz3ivYPeWxqHrCetq7uV3nrdeHizSQfXgwt8ewXsiTv6ewjoRsq7VqYYo99Haz6ZQ2ggZLg5Lf",
  "key6": "38CBXUSr1nUYv1LbB5fxADUPRcnAC7DD5mNvgAPzkYezhG7UZTBn41YD3BTxh9AzuvQS4cACE3EFtdqxbTJhTLRY",
  "key7": "difKGAnYoN17mr21ed42TYsBZJ4EB8gVZxikpSkA42bzFSqqXvyocb9qFVyV5t8GG5JttxbjuCLBLVRq6Ay4J4F",
  "key8": "2iSVAAEzKTTk16TeXjqSgRRXCcqBKcMeDM2q6RqrS9ymDxcUEPGE42HMXEcStFXJC965yfJWKCZQrmP4diQpd5Us",
  "key9": "5ZntYQmxBo9DechtsN51Kn1Ap8YciXLrDojNsTy69kcsseWzHcYCjVPvetxpmZxBQh9MAY5eMXuxYkgz8PndSQiH",
  "key10": "5RX8ZcyCARPx5wRCSJB9FV4rHfHezaCWghaRBhf4uqYSybsZBfxGEMehRWUB7YF36xUjEbR4TzaxVhxvb9axB7jN",
  "key11": "3uVv7Jxxk645dpeqbfsenjHy8cotMBpQ1Aj4xgFSFAfHVFRAinBrX7PCrmGjm2WFeuboXRSiCFbpCXRxNs3oEZ4J",
  "key12": "4QfWSXrqkNUh6Dhpe9Fbw9PpLirY2hiWg4HwKtZDvwrYUDuVUh6FuHiAUJ8r7kkMAUhhp3yHuaEPkDETQWcJ8LNV",
  "key13": "5H58Vyp4n2zodjy6gQSA4WHq8CJP6PE5h3pQ2o4J1DLuwbgaXLiUwbHPC1MyQCu1rUw7cUnD7wE3hAdDm3qCGTxS",
  "key14": "614YZzPWEzp9c95qkE9aYgQyxzPimrdvQ3r5bY8GgQCBvzqeezs8A9E15317RG2V8gFWeC6xHBdFyx4jF5o8TW2",
  "key15": "LXDCHdL2zfRtRxoPknedhjVVzAQZyCaTRF48qcgHEC2VPyGC17NcdXMRnTSrfAum2W6NkWubo8sxTQnzoAmJVjW",
  "key16": "28koVHnQuyNeSkMtf2EPt3VmSftgV4phg3bKshMYJHP9GPotKq8YHiBMeceaEsZXL8syG4s1y6pbSWbaCw51oEX6",
  "key17": "5aganxyFdoqDK5ccPFLf99nUDj6GYFUFhDd95tCmU4kZUR6x57fJ6AB9MH8ZWJ4HQKSoUT6j9NZ1oLchPdBbNYcf",
  "key18": "47d914CVDucxadfgNqLszSq51XyJ3QWgX5ypzsQLL1ChzugDVDTQRKvRhVE4TsP6sRxJTvGxPH5apqFTS1sbAQsc",
  "key19": "JQpynuzjQ5qZkhhqepL2LfE8QG9ehAhUkzrQhgunBfU4uTrYvhsTFET3kEkFsdiChbmvqhqCK5q2dfHaxpGkHXy",
  "key20": "7qAcUTwjbhNRdUdwujaUAnKrkzpyJDjfznwDTKQX6DCQYnJvoPFnujoMDAX78i5BHrCHzqxgDVXVfsGQSYjWskQ",
  "key21": "5arnCefpezfwKpYdzc5kM3MbewTDERf2QnQ1GphKUa1Mhw1oVraqw4ftVcXqfTghnbZyztwdD4fxkQ5BdMCJ9x7r",
  "key22": "4j33ScNiwxndaptU5yAXDygp1aGVEyEGxSBTVqP4Jv1eRjvxAzjNU4PCTp2g2ZZrmLvcsZhg2Fpp84H7wsWntFfB",
  "key23": "W25NmYEQ18RXKYvXTeeW2rrnfQ86CZGVdS57ytLEreSpyfkpLgi5G4DCbUMfvAXadS3jSxNcZEwsNmWW33rPNAU",
  "key24": "mwnGTBZRdZt7ERF6MfZWkYu5LMdzm5p5mFiFS661HXq3ypAJHRLrUKsTTnfWL5usN2ytfHp6NGMgWUnXyYNJE7f",
  "key25": "2xkn8mHvyaD4L7i2K2fd7drexy8qciVDadK8BCof95FGSoY91d4LLWiiJNezyjBsGu7WoqQuczFrAaE4K33SuZgf",
  "key26": "4XudetbjBBpLYQYCD3dcnFKmLkMTyXkXcMhmtQQ79wBPsTVrww8zoP9chQgk8MrpZJGsxm5Zj48UiyKjwa6SiRSf",
  "key27": "B9doUhq7wrK1m6PNsGXKRzndymCT1jF4nM2exhhJoPw7Yt8rsGSdhfTUwoYzzEZgAazHCA1cbhYkjhPETwhwwf5",
  "key28": "vCjjksNxsnF2f6RKAVsKW1eLiRxM9F5kH5bcWa8yT87SBcFqdvLrL6pegVVvQJqedNcPwpmrhi1sdcjqhTWDRzH",
  "key29": "3C1JbrZSB577pMvaJ1x41yV2GdaGMG1WguJvfJoh14d66TXTae9DFrqt1FWJrwV9CcRxndAMNfLGCw125Q61rYfS",
  "key30": "5hfMzd9Qf4JaejpJB9JCe1BHNptM288R52p6w9hn3pMgtkSxsaoEK1pB9vUv8sjhQmGG2nczWtDaTxGnR1QTahrg",
  "key31": "37xUTLSMsuxASCEBLxoqXoJduTLzcR6rDtCykWqdiajE5aYNic4HjiCt3WeCUDswG2ic8SQc3shqZ8Zyy9BBbPbC",
  "key32": "5sTskvaVKSQWMvAvS6U9ZMK3DTNbyAaNKa4bJ1xWQtkxbDpNqnQFEGjfCknnzqSDpgquFRNvNF4wjq1AfyHojXws",
  "key33": "413EG17pLXTBMZcwLocqqFVaWT2ddnV7QdBak3fDW8FGVZo25cUZXFZP1K1bKLFQHyUsAqMqKmiRfNf5VazugTxQ",
  "key34": "xDy3KkEw8d4HubmGcL7iG9JbJz3NFrkcqh2hFY9fdxp8PikDjLt5HmR1QaFLEixZyivdwgW6muAYZM7ZvUxH99k",
  "key35": "3bfDgN3Mu35FYZGrWngQYPBcGqXTqGrYbSccnrhkozGK69CESNnWr8YWx9R7W5FJuBFsaSobHsumkH54bhkwfhoB",
  "key36": "3nCsx5q71Lhuajdr6SNM945bjNf2zyeFWm7dBpHS9Aw2jrNFQWt8wSEEXu8r4xWEfcRZidsFynro7Chbt2SscWqv",
  "key37": "3UikCyv8Q4VyZpwRHac3vER4QWz8nHcY8fHEX8Cnt38Q3bEB7KpZsRbJmoYB5An1ADRiDvQsJGbitW3R4jycK7yY"
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
