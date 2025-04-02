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
    "2oouVXNgudULcXo8hvvqpCaJjCWe6dCaQTzpe9CQYgedwZ6np5LRU43JmcSBsntc9qT5vykpPP6UVf8zmuNY9VBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z6pxif5UWcigaLSAwDqDj2dn6VQ72v8sAQTuQUgfiBNhsFUWTCoBUkzNZHNJt5QtwavAm97imMCbazEyLFBbCso",
  "key1": "2mqxNsy11xxVKCobJvPyPuPWq7duAR96SfSeTBM2faoyFFwPrpPAwzwtHa9M5sheEjdVxKbxMo1YKAyS8TYCS7nx",
  "key2": "3C8Ss6yh7oWmKnTtCVQhUxuGJtDusR9eaF6RhE86BZ1Rx5PaQZaaLc8q7urQTE3RS8r3vNdy3jiddgHeJjgPKFdz",
  "key3": "sTSagjNDTdNDLVJbPi474a5ScFJ7UGShGUJ3vLgEwDaUFx88yUY4armZt9mAk4RyEJpr3vRJhNd3hQKcmY5HbXB",
  "key4": "3fcQ84FcvYMYUMDgfYE5MbWiSjbR5RPfmbYZkBtw3h6R7ek7KLRjsoEidntqSUzDSFeH2j5x5MeSQXx8ZDUa86Sg",
  "key5": "3vJrKJ1KRDEhzLEJNawmN6vw3YC2upKj1AE7oSJKSJxSDcoDRpWXYha8ZUV44FPb5AtXFcKPXyN14y6XMs9pWBgu",
  "key6": "57vVrjLh6E6wv2ZSqoPypxeSSzQepKGp19eP7c47BbmjYLYzVNgAE78P6TeJkj3pZcT7gScVKTQF3gTsnD2VdGLv",
  "key7": "361snCvWBwwtq7CP3NcRov5TjY2HQoVuB9iiZAcghA7uE9SjYjPRMHKpNDknp4t73m2h1Gi9qbbZGmMfn6S5vJf8",
  "key8": "5MxxDrtxftT6ck9NrRijkuiZNgSBndizZbTiDZkpB2uBB72SU2tZdAm1DRhRFfc7YbNpS6qoyMe1aUMdqMpo2njC",
  "key9": "32jGFw8r5SZ4op2RidHHNyvVvpYfHiRNPNZkVfneb5p6etEt3m9DgfuEjLxLmm4QNCwts2iyMxnWzvdvjDHygsfh",
  "key10": "4i3zRRKxjWP3N6yPhbwPiQzxMvxUZp6fRM9rB9NGYoadfKk6huUj8UMDGt7nfAveuJK125wGYXhFyKom7aF8PAJj",
  "key11": "7g1nDA6JzNXw5Wny4rTMztirdz7WSfuWbeRk2MSpSwbPgmQYZeTvJCyfESMcWAEoGYAg4e8KepSgRKSu8gqN3A1",
  "key12": "2cHouunMvS73AF4uRfq7psWTQ1gtEftUkYE1FfzWherH9EiaLRnhNwitDHUmRQjpiX1KyuvxiDy4Xz9TgdRmvDmJ",
  "key13": "RQJx5pU7sLGwso95STp1Un4hpByyFi8d7UdsivqDBT36VZgP1Yy3dqYpMunq5qhLnCKqSuEsidbaxkXkJy8ZZQy",
  "key14": "36RmnEAvoobGKErfhLHwCw3W8X9DvF4GVwKiphS67svKLbFsDHQfknWNPWwsV4Nj2EFx5wxEXiLTGkGAcMDNYeBH",
  "key15": "4V4jRnDxUa9bXNMijDpMvJEJ81N3smoaNAvmfV8NwzPXMr2vgS4fH39KE7u1WiwrP6Coztqgzee5tFAGFmx6d4zF",
  "key16": "mebrPy3cSSC96hooi3Zna2uEECFrjb7eEN9DqF4htUo3B6EQ96tutSHpYKFt62Cd3U4CbjKBJW49WmZmaZBJCNC",
  "key17": "24m3NYBGTn48oHRroswPMigygi8BE46kdVfskyor3iXDRer3ekDgxgr2afNDAbFAW28dFL66aLb2W7Bf2YuRj1aw",
  "key18": "rURUH7NFY35XfDmF6LRbxMsw9LK4vH6jLChqa53zhjozn4mfnzHxJo73Pm5ToRXxciMJSNATbNat9xjQXPKEqYN",
  "key19": "63uhpynVtLhToz62ajL4bGRWHTV7iQd2kqTBoER2TtzJ172BFW6FWjTSmvak3qjLYiUkwRq8ELFJCRbwdTSQd6c7",
  "key20": "53Nuat961ehmdn1akZZvxrHPKNGRK3uBwYpGbSXnyCuAtjrqGBdo45u5BLHCtS2hrcQGGbaQbUw1uQyMcWYJ2xKn",
  "key21": "2F8cKxNzuPPaarPKkmvbePtRbyuadsHjoKBxRXP4F1HwbcXU96hxkaCsEeBA9mPAUVvP2mDzi21Sp6CuvAPf5Pbb",
  "key22": "1es9wdRsg4skishh7QXRV7jWYB5KEiaoK5HJzqg8jyBYLycemnKxCekAbFWkRof1whM2dy3GrDvG4xXpYtXXRVU",
  "key23": "VGSD47nBjqCjBaHkZLjiY9QVfmeHV7idA3JYSKgVsJW7SHv4q6jFQ3oCfdiwTsEcekU9R6XLY6UNRHFUqWfZtfL",
  "key24": "3hikTuY7ZHW1SEQnecQ79jzJM1UYWhcf4i85xx8Zihz8JpEvnPs2KeBR7wBWfSTGwgoFJqWFTzLafCVSQGKBWC2S",
  "key25": "3TQRJFKWrtHw5cExXfuPBRVooTeSz3LLvuTfaGDp7B76RAmJzsLwXG4p8czRtAvFhpiR7dVFsGfP5TBUp1zBX2YK",
  "key26": "4sqb1DUabgueJh1LycLvrxwcbKMZmaCUEsRsgFe439U17ScHZKMyMhTTx2JiajpQnrxuQSyca4qjbLm2GXRo3ncP",
  "key27": "2NrT5jtmgrVQenU2QHzXHWLL1vF6rBeb6LtXT3v3FbNg4hZGqpjfZX5G2AJdxFCu1wiawQCUxLFnDVAL9wPSgW4Q",
  "key28": "32xKmvBHdDeFKaGm353f7x7fNnCLRNLRrKeNK8r7MjVy1xvF4crMVnae8o7RM4bQNzqiTg5q1wxpNpSe5peMtVLh",
  "key29": "ekkCwoQpwKSJXyFs7sdQnp83GvKMHU7T61gt8JfvJ7cbEwACYtWkrR6uprxJts5G4p2k1w898ijwKrtHttVZ9Ti",
  "key30": "swxLKiqcur6pFCQwEfrAGTBX4ryvnz5JsvbpvsC5eUU1YnAyUraBYM2djtZDWcfJTbft2L4sr8rZ1yAmKSz4dAd",
  "key31": "2oNDqNGgV1a2sKPQynJwSfQmbEkDEkb8Xyebq9TnzV4uPSVPWz19Yj3vaSCyd1D9WP8xgt9Lr4Wby1VjbVnNqBvF",
  "key32": "3QT6YiteDaZbU43qwakp6HeTLqdUmJYR7ixMvyv9chT2NW5iFypmVMGhFraKEqzK7C9Y8Fb9CHQvudKqt7dkF5Mr",
  "key33": "saGnTBtnLN87MBg9Y2R2Pyxyzu7CoZZa9TuPfjkQxBPdSJc9rffBHDcdmYFsNHZyAcNjB2cPew1FRC75dCXiqDx",
  "key34": "4aRcQ2n44MESBLzhDX6Z5kzmQUyhL8drQibtCZ9pTvicqGMqDBCFDKqJYA94sAqFdLXpkBRpikYoURtV6Lns3hHt"
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
