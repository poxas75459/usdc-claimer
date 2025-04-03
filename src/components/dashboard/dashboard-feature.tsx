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
    "3qFWxjXgUuj9fc5F5Y823i5vTTHqsGwDposkKqqwniKcBWTbzNUBWRhG5MiGzNmTL1kjaTzPrqLEttiR1kJRLBdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QrfZwgV1QwiD6bH4bfZ6xLgwmCKrSnhR23aRDGLVveNAWaLEJzvkcQAfSfvWpY6FfscVHNfPDgkzsoeSugGtpFN",
  "key1": "cvY1JWG37qZj7qvtGhArYjp85FxXiS5UvpfR9Ts5f8uqmqdUzoMm6zxt6QL3LccAzG7UHhfVPQns2BdoCA7YCbb",
  "key2": "48Nw74jBBnBzz7u8iMEKPSsuyJCWqfkR6NGiF8RTrgfmvAKANUutFTVyuHCR2Rex6pKh1KS5tD2yAFPUm6bkKiJL",
  "key3": "46iFv6cqCvvfRZFgzKKUWKkbwjHbzBToRdJmi8fBqdhk6FMWLgKLeu2CLqoJ3SWhbnn1n8oUKeXQfeQ2coYSMebC",
  "key4": "3ffVeafykQTUkNpymMcmAgT1C4aYd84kSV6Gx61oo9o8Vs2LZkJKarJHvPcea8QC1SDvboVhLZzCRhaoY1U12NqG",
  "key5": "35gpJqMd7FoF67Efbt7A3kmJkwwZqxTT2NE6ex8CDnmUYnSuki4YAQParp6N6c8r1WUT1B4YJPMS7trd94HHuMLn",
  "key6": "4xfuTkzPEvX5FZu2wDyJMfu7CZ12uF2c3rYcZvLHrNgxaCVZLxz4FNcj27rVcSm7wz4V2ZStLmRc5AZSvDy23TVC",
  "key7": "4D6quZmaCfuuo5PCSvmfAM6sQLh1ToNUn37dAGxNpE9hVL6iayLCMbLfQ73aBbkpT3NuqY5VGTHE4NDX8aQvbjBV",
  "key8": "3NBNyiHZABBBBcyqDXGxr5qFYEwy6AmX2XMDSDyzWmAGEAWZKVpoLvgCyQ9gtWeQY3aDoabA25Ev8QZGvpNkgfix",
  "key9": "58uYE7XNgw64MCqYvN8AEFAzCo6z1pTDdchxiHdoMMj3bMcSN1LEAodHdCWeufWB76d7geWETa2LgKnb9iNmcPTG",
  "key10": "4qLfKn4zvEGUwEZgf3ezRmW3fVdirK7ebUfbyNJK1z2yr6yeY6Q5DBGkGwLoHAJy3BAMmbU8PHc9BchCjpeySSFc",
  "key11": "4udxcpZdmUc8CajHCcSSQJ84ReHp4okjH99EvSFTTPdjv8toVXy3osaiVDqfkSSMqn34Eq9vVdWKh14YeN4HhhSE",
  "key12": "4hkusHjGpzPM5HkuUvMxTqvuuApuq38PXf3zV6nLA8Q8L4uDWuZT8DdEppMyi87ZsdZAk2QnwdTyPs86AHUVQ5hP",
  "key13": "4pVY9f29jxpLww7zhhCcVbrax6sv3Rofib7jPW5VLDefgV82gmyNfaBynKvEweAdpDJZXttUtB6mSzkwq6ux4CHj",
  "key14": "TRL29jH4nHrm5r4GyBAVXxrsjgVQQCPnM9bLNbjK5F8iNPZZ7jrfTfp4rm2CaT1ieJsy2kXtJtzwvryGhucEYr9",
  "key15": "5NGUe2JAgcyHNuXrDtDJkeGGz1pJ3GuiuGJcbMuxyE1ac5bighHT5H3RSMZyju55qYxnjM5w4ci8qkK4WGVuPzy2",
  "key16": "5SoN8PjKFEvoJu51RHzZnxHXA1di9gC2KeksYNKopHRCjfySaN2ivazaZCdo7HMsJXjJeEF2Fx8TrGwhkLSTxY6M",
  "key17": "61wV98iDuM5u9sW6bXRX7Ss4cJtgyvrWM9VJgzSrZwCNt8v26zZ4K8AA8fdWPef4UsJ91keUmBtxyR4KqdAyzfef",
  "key18": "44HeT9dyU54gtGgMwg68YRoyZ6FjF1xNCJHc1MCeJLgUNRSgasDvQM4hDJNrcd9Dg26NJfE9KUJYPM9sf7MNEzQk",
  "key19": "4FsCcsDw55wbzs7wMqSb4pTGg91VYikvEQhGpvhzbjys1jJThGyefEjjRNqA7ZSi7Wx2XVLAU2sRoKHEfGNXMcau",
  "key20": "y9Q4YeotzBZwz9K5MPENnsumWJ21iHKQVtUM4dmC21C6CctgAQLWfKARHCoGQWKzjaDwVQftoo6rRaYZjCoTwTb",
  "key21": "3yyzp9KY7kecPbh7gVQN9XopPrfF8ULs2MM26e9ayP9VCZDf1jjNGkWFkJo48UwXg3krfuPr38r1v3xUph6rN9sn",
  "key22": "jhuTxtXTex4SW1nTAkHa85F7ynoc9bSm3x7WyABfTBGkMv8JrgUedLuSoZKsqUJApQj7AzHj93wVrBuaxYHEbyL",
  "key23": "L6XYodK8FhHKCquvXpRFG7qnZJuNNU67ziabsdFS5piACpLvrMXYu2j4eCCfTPCfwnSVNedqA3vDXddmXBNikck",
  "key24": "4c4oZary2LCoM8M3qFhDhgt1h9er4VhDCuoHFCtzg4LeVn4NCokQxyMxXYGPQdWYGH9T95AHh8riEQGTWF2beK19",
  "key25": "55ApwJs31nySnowjZvqXTCs4CeHk41TwjhuBDXRST2Xqb9BGZ2iG1wEJ9EjsxixLPub8cqs8ni53Kmk5U8UjdcSZ",
  "key26": "54rLwLrTjZma2Dg2wyJK2PoiXvAaWhJZxtaLN8W9Uq2f6VJBDJVT1ZiEn1tj2K58Mahkeq8syxwQ5MA1sEC6ygNH",
  "key27": "3SAFwp2QazvBBQbKfsYp5FfzUEqjCYgb9tmdeGUBB7PdbuLMhi1gtudFtQWQNyTrsHeKVXzPNUiUBD84syVcZJcn",
  "key28": "3Txpo29uQFJwJkhCRguxiuG7nrjtU9mHHp3SY9EkRnYveEKHgKEtPB4j8Pi5xdK3AZJVtwRQ5hLZnBPyUHcFb3E6",
  "key29": "3fAnffUGm4kipendSv8WS6BDiAdnpzi61ocgpRG34NpuGaD2L24g2D5jgAkVRodWM63p6cWaVUjRsRRYMdGQzPxR",
  "key30": "5kzu5obsSqYd8UdkW9c38i9AkRfDWjJyUEnEucUF87iSqmnL9TcXNstEVZVFT1K4qChuZ4jm6j3Z7VDgYHg2GBYz",
  "key31": "4QKGdWfQdQzBENAQRLn2oXRj1ffynRA4q5KN5T5WVdqoBaiuDx1FuV6fA8Z4pwZsm74zht7upH3RtHUvJGZWEKJu",
  "key32": "22Ka6Z5xYqr1hhcEqoAUwyZt7NzbHLTMs71XB1mgK7SY7eDd4GKD4dms6SwcYKGX2zoQPSYABXU9u5eEcVxaZi7A",
  "key33": "4zuRJXUYdAJ13a9feok7cTMHCSLcMzPXcfKJPVFoVkvstaNY5hQ3CpdLsEvKPqsN3m55uPcP4iekhgER6Sj794yr",
  "key34": "4758bfWZVV1rtSNgdZE7oowYmoZetU1hrCVjDR68khLFzUbP8pvymqAetEPTyBpBoRvZ6skJ77gy3ESH9bXJPTH9",
  "key35": "51QhzaA1zjjWNgaKhijDpWi3Z6uV7PZpxvkThEJRwABe5Jn7F43RqsFow87mVH5v6ZZdEhtCZyE5RCgYpJE8Yrxi",
  "key36": "2FFCanZU8PjnTN21hpkz7u9Mkj61C3KMH3vs5KyFygnJZrYnc9Qub8TjvWcKk5sAkKK8LVq1yu6XKvidMh9UjXcm",
  "key37": "5t3JXH1XiDSzYw6BdoHw21EK1KLGrX1QAsvhemAFEokbMr8w3V8i9h6uHcYocajErC5iEmyTM5Yj9VDuTTvMAKqZ",
  "key38": "4PiB6kwAZv2535aRCwuaobvXUDtzoym1ewkGHC74V56DbaWQQzK2xgovfkeyqKQaZVYbEzmEAfswRZ6E2RUMKa3s",
  "key39": "2epan1Mk2qgsF7YJ6XwdRKn6TzZ13LLGQEmNQegAhVYRbHZRPdmZRqRidTpK6QDLgqtN9SBQP8fPYwkeJXFGBQ4J",
  "key40": "4U2odLBoSbsw1vFsTig6wwY5ktgJ6uiXo57L2Dr1rNAihEbq9jwZ3SUP7KMSUU3M57VPQ45cc4EQPPxfwxk97Niy",
  "key41": "JZD9F4urizzSEwsPDV6z4e2RjFSDbCda3jUi1YoCs6iy4GKnmxqZrw1BKYnqPEyJtQvoN3NFuZyAVzn84GzYeYA",
  "key42": "3gKMvrrbTwnaDgaTrhsFWPsWKD4kNQcDCyikRD7dufAgHbYjeymBwK1yU5goP83hSs3n8jxMJPhvCA7wTBnHxVoV",
  "key43": "5kSZWvscrpPhyVLJ1ywKYgF4owgNXwVavcnYoZgkeVNmJP7c3DVpU4H4TZvGvZnV4SWkk3HCJbUM3PJedYZ87ooo",
  "key44": "4e18RipneyzfpgZwA4b432eFAEKiEsaZQ98iBkZ6qJPyaxiQNL4r3RU8K38AHxgYQRwsVYJmJvH776XMwWwsNLWr",
  "key45": "5MoPgrEkzCrVKTvmSaJpHLNDPHScut4ZtbrdrhsA9unNNNW6vN3B36tify2adBMEmgGoJQomhysdzbupzc2SZw52",
  "key46": "2NRsqwPJAdM8ZrbjLnJNpPVX6eaKULDPUhvn8advC7aLJzhV2iYLRoK8mnonEUYJaKVAqYAeKmtK3QAovR22fiSF",
  "key47": "4Ei9WSKNQ6sPACbExqR553mT31Q6TwsWs6qRQwFkSYkbhxipTeN1ptWZHuNQ9B2yqNTMz5ehDpMrubnZJqS1D7tv"
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
