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
    "4UA4oYW9h4es1uGSntxa4Mjzxbfhd44buFHQpa6siEJ48SnbmoG7PCVUvRc3qZvBx1zfztRgqThaAqMSz5Ji2zxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gt8uYV9EkmnX8SimKaZwebUYRukW7geuCzW5VZR4ibDgdzL5wMAm5ZehEqeyPCqvJohBEoquF2jniiSJGxjg3mD",
  "key1": "3B68SrUZK9YR12hEw1uriVeVRJhvpecVMaYWVY3Lfm52UEwMT8KaViAs1NY8arvUTt54sp6VzTZNeU5XpNHD8CYD",
  "key2": "QYXYhzsh1T7ik67pmSWTSeMonwG1Zoa5wEAUS4cGLpJmbEva3UjR31jddgEb9fT3MXzNkv7STxyFFh5QzpLdAUA",
  "key3": "mnm476Yfc9J24PSBYaJhdAELrMQngwZq41sJznsM6PCwLtzf6V3w154PYMJstLhMrmK1Hx8rCPQVJJasL13vic8",
  "key4": "5cxZurxDpUxUP2ttwS5pHXq4T2uSCjDaBPbmeQ3PA6kquE743vb7Ar7GV4BhTfio9oFU39KKqWGM3Mc5kRsFYFF6",
  "key5": "od9kApgZxYvNxYFk5cSpBCkT2KCH6oVLMB2bGbTzYr8rKrhWQNsGkhNyxGan9vcXeEJFLq24iAq7XfdsY8SJX2i",
  "key6": "53GmaztTKGXVj9cJbg8F9VdHw5GuMD5GJL4NUEfQpQZggQbFTpYBR26zjMubVTmHR8aWRs7fQ84RqbFqtQgcvD2p",
  "key7": "3bfexxSq6A78eEg8nBFm6pwb46ysUCc2vz2ZsS9NAjcc55W24BQzXuJXQYrSBqGkGP2P1shFs4uAuakrDgqrk2aS",
  "key8": "65sBY2TTA1Dkw4qsVm5V8Wcm5pBqnZPVf4AnY5BUcRBdsdWrUaKXmdMxXLzSvmiuqyEyTRmC3os9bMwWoQhYTvog",
  "key9": "4pWGL2Rir53hJFNTCKhU2L3z6B6or3yJBi7DG15uTsxoHvtMJcc2Jo3zAjFe1RmHLHQFARps98AR7FbdwpR6XiEJ",
  "key10": "5wsfeqD9vddKANSvcNghUrKtxd8pDeMF7U7eUU6fCQ4RsDp5PeHX7zaSusUHzA8iqohKMpyuwVKHhSC3MXg6cHFR",
  "key11": "2Ub8MeHBaa1kcRHxWLfHzujMkroBiqAbLwwWhPYPwELNTMS84Qxd9FzU2dVgU9JSzCdCzbQ2ssoYjFjre9aRcrMe",
  "key12": "3mQxJD1WX7xU3bT9tsiM1svMbEEZakTVGmM4xe71Ks4rbqhQx5g4qGhDAh2ASgvYgrLCLnosUcoSjTHxYF4cxSdN",
  "key13": "5JWAFGL3bKgpjK4RaExnG2h4oj1DLYxoZXqsNbXXLSin6BisYQtCdm69hA8i8D4hnC2W4YAUrJu2FCn25zEodEeg",
  "key14": "3diKJ9TNifiEvdjviKBN38tq6QHHKXGLfPyGssW8wzcMPYMS5PPcjKnrBzJjjfZQ2pwwBHXxtXjM3TYyaziwDNve",
  "key15": "27perzQP1C9A7hBsr9ZyBr5LA678GpfAkj49rvBjnuQZgsVdTnDL5taQhRwBPxz5N7UWwULzHU23NCQzkhToJRm7",
  "key16": "3C1ncv6n9H6dVosyzT1BFggXA9EDc5cMVgJEMadLv5N5XnQSJ4nGN7JUMT15E4ii2xDx63DwabPiPnteR5zUJFnQ",
  "key17": "5sQSWoBF3iv7sSsYhEYirBCX9kAS3Aw2XWB7X6JWMeoa3D3yyCabrzH5DgL5kLKffAqFPy9YvHuiKsXzigZrJskP",
  "key18": "4YgF9MgXqCyqTavQh9TGokvL9voTXHETiXdQazcssMiLffMqDv11RpbN4SXd9TT4879TZVUsokoVSMvvHABziES2",
  "key19": "57sLdY3Tj8y1vvTBpPSENwcZBGKRQeDK3WwCB156sw6eWrA3UpYmHBDicH89TKvU2oP3UHkSDCUx9mJGYgZjbn83",
  "key20": "2ZDL5uDqKSMuk69rMkJgeB8Yah1rCxCFqmNm3SSNi5AS95BLGceh2Bh8tDEThajTyZUgQttQxJqmvgtNStsHBRS5",
  "key21": "35yLVMweKgpsXeWmupAzvqvEpkYgPAt93nqnpe3FvjmwGyzy57occp4RAsXXrNHC9eWnSDF3a4A2A8bYP4FR2vb3",
  "key22": "3pS1pyRXzBYMLjUwhUdjfFiQJiLk7Mi6LZnhUmwRPARaqXxkEntHUH6FM2mLzkHK8x3DVFTCinXRan6utBVPs6jv",
  "key23": "4qXHspBBYKKi1xSKGbPPBugZhQbHAd2V1ei3nEsZb2JN5wo1J6uPfknLTw18WnikkhwW9mjamuqeX3sL33v7Ppa",
  "key24": "uMevg5A2tccBTrhjRmCa9wqiuKjBFAabrL1VFKZCJDXEv2zQx7FLBXzzzLtTq7DjDSMc97NftzSswf4VFvp1d98",
  "key25": "4DGHQuhY7UZfQRmEpxDAFqu893HGLfbd42DW6fujHiAFenAYLncgnoA58e5dkC3EGFgbVkbcnxUqL2nofy1ojVbP",
  "key26": "2XtTYEVcxhLdHc2Ejmbsc3uS6517hBEXhuPBdfGqHRf5cLjkUopavfV6gSNT6iGKs5RSouBGMYoVv7R5bcBm793J",
  "key27": "4y5xy4aevS8am2RgzspbJJrKPjdPbpctJYgaVcNRQrs4979zDBFM4R5WZszG4BFGvGqHKNvdKGTVteEQdHZkCK4K",
  "key28": "4znL1LSdRWEjK2Ji3jC9AEtbXQqjKJeTuoH8wh9koumHiPitRvo8ZG62VKC1RwLxHzWzmdcESDJij5vBKcTLPhAZ",
  "key29": "v36JKAY6GWPPvmgiYy2buTm2rmmuqiXG5dQj5nXvP1LfHwHqadimuhYq6tNhtfBxM5rEEK9NuYwGLC1kEhRmCRx",
  "key30": "3Ats2BM8QpR9AwueUySpAyMRtacpaiZSdx5rc8L3L6aerGkeDeTD76Z8b3oVFFi954eJerGgEYMiTK2ufFXx2nAS",
  "key31": "5Q9hbCcH3vCzwAKNNitM1iT1TWuvz9ytqJqfKuXQFSdB1iFa5oKiErNmMqJJ4YvgkBSJfigkyNsbCFEPKKzaq886",
  "key32": "J56u9XmZfXBL89Tji8qYyyjas8zMJGczAf62PuPzdMAzn9gWpA1qRQAbRg1jgtd1DrHHfv2jGeWB6Ug9JQ2YUyU",
  "key33": "2DSxjy97wigcMCTSFVBEvBjXLBaaPBZP4jBrCrTNZQT91RPVCWwZY6Kntr33s1w7UiRZsnSxt4rTNY1hcVMoWRKv",
  "key34": "3dSa61vnFxjjPVHJNYoZ7arVPs6WCtA3xZrAEVaWTd3ngsDXRWy4JnRs18vNRH8CnHp2mFqrcHgmGoYJspFEeJ2r",
  "key35": "r18W1PrsWocbUFYe9gCgywAGacKCHprHVDazpJhu9ftQKEenPUcrhjtqLbJExJETfvNYB1WnFWM8KjwHaDapokg",
  "key36": "3EKN2GrEMPX8uNUEBEk9ZzmXGVEkWUGYr6yAqJgMACDu5UZV6p7JzNv6zwfvGoL7h9xNCA5HqHmDpmfiw6DJJWEs",
  "key37": "dUUuMBNiB5Er6DQgVTT4ogzLKzmkDKHDaENERjYjmaR3iR8fyYf397GZuFXMU5eNyeqG8Qc2D8gpgDvFKrDRLmg",
  "key38": "4jDqV6Ui3zKv7GABqw1zzuHBZzHYt2A7eH3FzjZHUhkkoQgheBbXLykbRmmTKW4vf7zj12CdK3BXyPeZ7SjeBS8u",
  "key39": "4wyKd3sGoF2FQQAHPfDNeAz1JDN1bGYZJshp1JrnVSAzChE5xbZKVYE6DEum2ac7fUbooToxxkGSwdeF7aS7tpE",
  "key40": "4xciWyCEP5uahFXn4VG1ubr9Vo4EnKpm4hL67qMfwkwwYDkSwQPDEKrAPjaow7Nu94mZ2VRVdib6TJYzVd7SN1Bc",
  "key41": "3dckx9gVDeJvA5M6iBuJPWACCzfJXsT3jm3B3KZSK2Hn5Rw7X1uUXU44A9SFLS9ZFMjvkGRy9frvKJQnKZQDy85h",
  "key42": "68mxcMAtTHr4qEL93SPxn3drKYwoteMLzfdg5jfRHaBi5qDuGaoFMmmNqpDcUdWaic6bysoiZFZgRRGa1AM6UUc",
  "key43": "45uCdSe2x7C3HAUgo1fsBReuuJVrd3dXgxSqM9Gnfnc7W8Hx1uxMMrFNonqPPntr3TRwzwSEyg1SfSPrzeA2R26d"
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
