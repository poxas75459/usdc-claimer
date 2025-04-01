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
    "HxzVSfXsupNEDJyXhyiS7u1AGMV6uNoJGVri9vsnatfTyk9JWciXnRDg35yaWouqzeAkwUcgjwPE6VzuSoHR4KL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hm8NQvESxg7bVwNLEHXMSfuFextrtJudx3KMw8vExvdju7yqEiprq384UrzZmyZA6Y9WGc9mYpbW9aFGDKjy93z",
  "key1": "3WCshy7Eu4QgaKBqWr3XBYPoVsdB85scj9nH1JRXdMGZb3AKni9AVstgFVbz63T1PTWNMw8Z2UFxMzmkCwE7q5fc",
  "key2": "3EaaGRCPyTyXAyAbszAcgEhu3P9i4EXAtduoCNaRLrEoif4bBAgeKiCFH5K2j9ow5u3xSgVXRMBqBaWivoL23Z3x",
  "key3": "3Bh8wu13VbXAZncfaAG7ed6xzWPWmmteeuE2TMhAnnAcXL1TF8jUSxc1M85P3mZxKgBx5ebHqm4jxA6LK2cfz6G7",
  "key4": "4k9Mq1Q5YSaUHLp3kwwgCi8dw5fT1xF4jd74T3wKjxowXucHnd8pnNxzeNkXGREodeybAjt8AVauKvLJkJzGoqsh",
  "key5": "42eyf6BiAAVREmiyY2tRF6jfzjWECKxSLA9TcpEhEvnhr9GuQLrxYBwRV9m11CYg1RC2gm9zgdL9u5MNmHcrBUew",
  "key6": "37n9DMT6eWSDypuiqSEgT7XHYub9xuqBT2ifUeQ81MoGaJKwYUCuUhzE8nQeBRYtWqv9FQdriomCs26mv3XmUYmM",
  "key7": "3SPLDbQkQW5GrhbV34xgtjqH5X7PUFXcg4dETbfrmKFsPE2b7QpML48EGNB4oKmid67qih6wn3sBhRGiUwquJiaX",
  "key8": "2PyDrU4A3QFskFNkSQvKp69cZDYPgU4uf7UBfQwAq6NsnPqV9Gc7FqABrLDgTjddAhT8TKJTBZ19KkkGrZ2Fx6pT",
  "key9": "2QcNe1pVrvEjGpbAC2HkaXCKL7t5KsgzscS1z4g62qn7q9e5XgwBJ4AbJ6kQ411ownov2qarShheGnu6NigvSLLM",
  "key10": "5vsXe8undLj6e7vBGVDR1rzCVcpaWR1AoeU631iBKESdQhA4buxhQ34aYagssxgmi8pzn6pnHmJ4tAG7aCyjGmBo",
  "key11": "5udoBg2Lbup8FRipYvoumWiBFXGfPAVmJnzBHCr7SFEhT4hw8JxVG1ZsSFUJWK8WggXtvtFgJ9nxxoVBxwatiCyc",
  "key12": "5qLm6GgBXSnQwLNovs9G5RQCeT1sci2wHnXv6iy3rZYL8qPAgpUdvukT4iqdZSSvNbs4RF3ZvD5i9wRy2RaFStne",
  "key13": "8j5nvqY95BFUrXQYa3q9XmWX6WCnqta1mn21nhBTfptRokgAB9SiApvbeFpCKtbY5sNUANj52BXW2dgsgVWjpQd",
  "key14": "2BWFdogcJTTCDK2DkFdBDx6X2JSVU1bmkhS717YH6hZpoBrbXAfKUkaHAtQvbtu8fht23NE4s5tSFRoasGwA51RA",
  "key15": "5kVsgKEbcpv5pPPcaVkqh7F3Kt4zkhk3oWALjDr8fdrzmcBuJMTf9NqnoSpYjHsdjmjf6GeuZujXCnTp8Qnx59FR",
  "key16": "3edyAgrqRxrfkbkvi64PEuQpAt4zeTwHVgHSp8dbGbvLGfLi29Xkjh4eVqSiNWdAH9XRqaVX8dvkcRUVe4Z6xh6r",
  "key17": "5EtHdkVL8AFxgEv56PfPJMc1PmXUDiVgiuFqMUju9b5pSPTd2LBkjQU11AWzmit8gkXTSxZJEibxD6RRnupAjUCK",
  "key18": "2HABEFyhdomgJh57DC7Grd1DvdZqy1x5rq7Pqmz3sD4Sk17A55KrCA7a7ncnZ8gyE5xefJkCMEYVrMZWL8mVUMQH",
  "key19": "3fRd7wM4T57tYLXZqjLLHE7GQdA1CvW833vTRuKQ1sGcwQJQXN1gYA7nVFyJ5eWUiVLdRFn1mavQj5x8EekxyBZR",
  "key20": "4dbrVK2qQtEL2JgHdJmAjzK4f9jmozJsAq4ddytuUyrvFQbpEd9PFXABL14XSB5MimTANLwVRxxFQ6MMwGuF9QQG",
  "key21": "3X9M7JWWQMUBPxah91Rwzo3vVwYs2rx6tCjEZ3V4NQfCyYUuoPean2h9muYNEn5UoMgkZM7HxGTLdwf4KrEFirZS",
  "key22": "24vs5S19U2Hf3NwX58TCXiMZZRvgbYf1g5SLKZTJgqXVTEvmNV1KXfgyHuWnzD7fZJWkwXfypK2Tvkkike7Vw52X",
  "key23": "5ES6vK83EaJSgxAdDfdpXJbcVo6jEddhWirVpqUUbjaSCz7vaj69nhJaA2rSinGLW9KS6iU8TF4o1U52Sieq7Kjd",
  "key24": "4AAot4iJC4iYMmwbzbS4iXMbHyGqF3xjXAt8RAwk1RrfENUpAuoZLwJmKPvzY21bz9kTq6ZFMWN4oZR2WxorJmUY",
  "key25": "GAZJKhBoA18d1QUP59J8h3v2qFNkzjFbrkpWwBRg5AZBGGL5Jmi6WAXiNvqASfH7brevrhLUWBf7RjawtGzuPwo",
  "key26": "2hNMZL997A3izdqFNtw65BVwBiqP2pVgNrEigMMhEdGknVzcDU6uRtitthWAXS1jYJvtPBMTSk1h1Aq3kWx9t7oY",
  "key27": "4WTViL1YKS722UQchwnKh4Mhexy99nSZSx6abqeV574Dxe3WeMgBCWbGUZQ7Mdqjr9zNBG1kpMG6pmW8jrVtSG7j",
  "key28": "2jPavP5FYQe8kt4ubFadCDaZbK28bxMgU31euXQj56vsYW42k2tR1uEysHTWdvmsYNUPzXx67ikwb2Ad9MWdXSAJ",
  "key29": "4ikj2RCwp4YXgqkg4Ga19jRGo8QHSF9u4dMhKWiAaCQeMuTTBLb3nRtygc1MEZUwfoFk2wNvo37au3GrxaSsKQDb",
  "key30": "2nJyTnCREtpwBWREYJnHpB5sruDzDT6uW3xQiVbejq9xU4xhSgSWKSNQLn44RG1bVjKcMwjUm3d1nSafoZwrGheF",
  "key31": "4qAt7ArvLAM2XhPsdk6SAnttXPzjC44aDV8WfZYNLuujo3rHSy92iJWmH99kthSC2a4FG8J71LVPBFfaV1jbQDQb",
  "key32": "3UitECMUhZFcLyQpoBXP6iDKfL5hbTfZKvgaaWjvQhVqC5LLm1UvZoEjTNJMfGvksf3cunUUSEKKPZHJjouyJfrs",
  "key33": "4fSGTGpswPkTSEHdDEX2y3e5a4s3bvZTSYGeWEwj6QnSTHtwVTMJ7qfbmposNdrgbUzH3U5CcFv6N98cDBJGYerf"
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
