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
    "vp15e1ZGeBELBJBkBx56RSrjgj8eTGpjwESciTEc243EegjTjjW29w7M4mWfyGvepv9gmt7BVMNsZbQZzc6fEfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wtj8bBsdzSiD3nJ7uScux9n5FN2m6JA3sT8eFjJDuEo9GcKv5A1oQBCqPsh7xjejsNBB3KWkq2EygJM66bveM4q",
  "key1": "5v6kvJK5AK1rdot1Nk1HmJJr2TBthEFWcyR62hNLKBW5nX4X1fM7LXnjj3YLtXod4qs82UyKktJ6Y7ca9w4nFSC4",
  "key2": "3cDT8y5Ph6Vu5WsQpNgNnJ2ErVe4Xt8Y6qqA3x4g6mxaENnG7z46FHdppem98rZtCvLTJupJrA8eePxzqT4i7Yi8",
  "key3": "erD58D1mWwZZd8sL55wVv5Z4NVTfSxHyL8NN4km9jp7z6oNqNPUUHgaCsuCFaiY2gaqsY8k9NmvAyAgibyQQAm4",
  "key4": "p3azMubHfiQTaSXBWpWJyWB9RchdBnCmQDfL4UCCns3aHfCn3XNFQje1uUWsGUeooqJKeZZhu1mpDc8kZ7BLZRc",
  "key5": "2tmug9PYP8QgTuYeUiE8Fusc4KaB1k6PU44yqQa1JfHrjGR158G3mQjQB8WEatU9vsK9XTpo5tkuDgrKUtnrqfXN",
  "key6": "4gfvW5oZqD5uWW1o4QNp1EyPKaDQmb3RZ5PdVjXW91CjgXFM5QnyqpFfyPAVhTxPa8uE5bWjd7pTpxrZQenWo9fB",
  "key7": "3VP5gc3EkRgd496acYEEeU6bBs4tvVB9AvzFP7tuanQLk9JVeu39nQeNMBy5NrA5PTeXPmMtazDN2QbAyM48DQw3",
  "key8": "5FJdWVJe38UpKEKd6p7qjnpKPCY1uN9GF3U1s91zXg4qLDD65XgBCdaZMqE8NFcGnyGBdA4CtXmmB916Q3QTqKGZ",
  "key9": "3ut5BDpUJWfggG8Azvo3n5qXJYxdiSe1PYYUfbarNW7v1Avc3Li8GkDpy8AsD8STqKGLiBEY3SoVra3LakEEz1qo",
  "key10": "2ZE1vWQQbL41kk4WexJ6ize7i5eSpLwUpnky9if89PCMaKEFRD4GzJMWSZ2GbCUucZomLKG4eX1SPCVuSmWgLwRx",
  "key11": "3ZAQjF2WgmRbreJ3W7M8R4QBAjKkdpjT25ohabX1fBxfMQup7aEoWfXABbibrnE2cnJeQam2jVUJFkGdW9zNnkAo",
  "key12": "3y656BB7GwZHfNKxnszC1ZcisKzTPHy7MNGXbEBEtK5w76qcq3WzwBxJEoAPeHzeUT6UYJMTbadhQrYiHHfw58t8",
  "key13": "pEbnuWYnAFCv5wvpTyDaACS8pmWtpASDAo6BuGvh6SnkwRbofWyGFkzL7923EvM2q6u2jf9UWRxPY4hKgBdcq18",
  "key14": "65ducWgZAp9EVYTSwjULyRHDAURQmUuMWPH7S6cDNw6pPpDyvWD7bqQSiqtZ6SzwWQX76Uy1T7zne816LdJcgWNy",
  "key15": "3y4qhpepG7NcQgV3rBFyYg5vCMdRzyi4MKeaDFrMvC8DfxPMTxhh9ZJtXxAkW7PoHSDbx8wksiLRFQWCNzitMnK3",
  "key16": "5D5WntVBTZBBbHZKuQPY5qHr64tgqwX2AwS4vZKuK8caeHuGnDELG8DKSLMbe7kYMntFi4HgJSS99CGjGVwvT6AX",
  "key17": "3UPSVz9hfk3CScv8W93WM5daYrgx7jYzTX6BAkRJd5jzVKXytX6gouNvaj8gKFYVVNoQdV6P33jBYvd7KerT5CkM",
  "key18": "4DGXzRoruwCV8okvNxntjCZAKn8wm7AkDbWLNBNPWnhf9o6obsw1zp5u6ModdMJxWUw2YuoJrefjDh8wp1nu8kZo",
  "key19": "5pBD7b7hUfsGJtWpTeLVyk3eSBRP59UAr8L6cfhSgFht6RGKjJoByHdCcWPfBZVx93fkTwwjbLPE3H2Y3UwKCogY",
  "key20": "5uFpFsLVjM946698LwHxZm1CHwRDV9DK3hqL9GAi3SrzjXHXqZJeXVeALKoaL2yfZfGDDRnpFwdbEm7jae9YeS8k",
  "key21": "3SVitCDRbtoA1qnicsJYKvRmzwvDccBnbhni5yaXeSaobzxukinkYvxd3CAU1xn2CnNcX4mLo8PJuVpyx7LMSxv9",
  "key22": "453TKzhJWFke6tL4Ty1zo4bHF6McYMC4syHUkvs4t2yo7fLz7zadb8zsBMmUfmQBTmETmqd3xm9qYqV8sfmGy51Z",
  "key23": "3JKrHffMsXyvtsLNeGtud2ZF2M773C62DyX96GyTFFMgcwA75sFWRVMQPNaJQPCc9jHqkMgdaAcrCtH1dizTAaWW",
  "key24": "4Y4kFv4XnPi3d91As2e3VuiEriCtD7Hcbn79yiiX6ShvJJ1xUf3Hvq91ZdSK1fddpRRtADMFFJtt7JeUU2cHUJCX",
  "key25": "5ZQMxepTHDJetfFmHEFUffUy535cN44uPpyNgZ4hEN2b91Z7tmuj4zWhaMNoXpziUBLEdprDaUvonHW3R115Fwyn",
  "key26": "4gXnsnLX6ap6QzaVrsJHnTbrraLGyE7M8Aou53YSTBawER2Zz1mEgaLLzSbb6fWXZfbPVwQMi2wqYKL2xCbGQYXs",
  "key27": "3mp36U6nBvgABZWVD6nDLHDmAFziHDoRQDh2KssH6m9XRk5QPZBPG5keW2waXgZTU8F9XVk7TDQTRfwYY1c9FQcQ",
  "key28": "admZWLW3BRTcSvDXoKtDB2kSw9vdouEZGo7N8LCrEap4aXbLWEFtRSwJYuFN3uKxfUJDLGffzUjxnaunhfRPx6o",
  "key29": "4bZXpZJ4d55C2HvLsmQnHFNHjGQ1TAtzJnDHCpJBnsnhLezdEkwbB7p74vXBHGaAGWxijTATpUs1Ce1v6oq6Kxc1",
  "key30": "66GmD8VASn5WnK5JftT8LELBPAJpaXLHLvvQ8P93praLmp5WgePdZGm6k2bEFjQx8wt3E8Z121s3RM7e462YVZse",
  "key31": "61Mvntn71uSdSBsmgg4PutHaymW65LC5NxEkJ9MCAR6Y19FYTHJ6mGvm25dr3z3PdDjduFcWW1S2nc88bZR96KwR",
  "key32": "5z3Vd3jBPYuV7PJEkujDTomyW39CRqezrRtfEyjdvMhjsY227AR169cL8QWaceXoSZAJ1rGVCtoUqLGMHPgnVrUQ",
  "key33": "3KJCW9qkvQwGVy1V2S85YxLYSyqHMZxVg8hjQkL7UCGmFLtUyzvTPgvwHmPbkFPDy7HQ23U1zhKSHGQfEX3A9EYp",
  "key34": "52Z8RX3KzRxUHjQvABwoiN9Fa4GN35Lji2rDF8YfmfSqKUN6rZEt4CWdTAFtNNq4MCc8AyeGhcCJRNNDQriJpzee",
  "key35": "2fEdwn4XsSzaZaMc4SLnKrmbatyUDxRZ7E3Adr4MeqizBSyvWysYimFhVDC8nQQHJpAxfepPKderjsPp5bz7YcQx",
  "key36": "4NJwY6cJ2rQNTQNcdboGD4p6K4zKvsfsZfAYLVhSD6W3uhiYGAggwEwkCEnnrpJh2k4VY1kSUffU6uS6Zdg18CYX",
  "key37": "377i2oqEVZgut9jCq3yvcPhxT6ebUHh23BncfKxRvZ6inZbYuow6tE9E2YwHKDLwycWvzeQyNZvKgNNqWBQJbkPJ",
  "key38": "23uXxdSiDRHfJch4HHxFQvH72rgY1mRcEVvzv5dg4gPUQ7EuSxdGEkuGmYgFDCvvDUtP4DXXZUaHXYmMkXYtSK6H",
  "key39": "2w9ASCxrRFn1bxcZAXturLLrm6oabd1weBywjk5jYHB4N3du998Mr7JB9d9fsZHPCawARinoWeJrfaEQMh3PGG6C",
  "key40": "3t4W1i2aNCpMamPRr8Fsy5eJediun1bwx1pbf3HAyviKPSW9fbckjU5CZssGhyByCM4a93RX7xqP17znGZiNA8Q6",
  "key41": "5yEw5rSF2FK2EgwdLm67XAJ62pZ55dEEVbCPCTH8vYuGb7akfTM7nuhGpK74NUBnzfzefypKkcZEG8gXjUVLpSDd",
  "key42": "5r12MoMkLBRqYrJ1J4FQS4QGooyBPDCauvbxoDYqUyjoLLW2jPndVcbg2Vp6GTj7PiAizuLMohVifKWM7epuZcU6",
  "key43": "2Td2baMUP1fnq3KFz5JSkJhczrxEVsEEi2sEmJDksm6pEtvtnhWJUyLmCGH9q86rZGqW2A5p21kogP1QXZkVEtpM",
  "key44": "3FZKhX1JzuxFbDgmTbGhKjVM1SuS48vuGSVUoH4jsKJ5C8nA3UjH1uqNH3ZhP5hptTiDQUwHD8zZSjC8eLbipi5D"
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
