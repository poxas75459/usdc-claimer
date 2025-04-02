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
    "Wn79FwqFLPz3ZWKsXsnUkKvt9ZoVSTfgiqjpuhUwqq5Rd5ccPQTMe6JkcLKnpCPUoVJ2gqMTqFZYgHufRRH1y18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sUpe6aHfZ9ssby1k4Sx6WE4xHNJ4Tzx2aAe7GMTwTLiTcmXuDHVjEWqdU6fF7opMWTSmDDKhBVGuqyySApKYetR",
  "key1": "54rCpciuoi1E6EZmDZfWbptVUWU8Zin2cjefH413WVPKkhDtr9P7aFTP4jHmxoNstqMH3obL5WJSMyxQJ1t9RRU1",
  "key2": "M7R3wYgmufQ9KN2N4dQjgSuvD8mHdY3AH4hvaEk63CsAeB1ieiU6W8pPRgN5d8JhBDVRg15znphfP3MGBVs7FM2",
  "key3": "q2cjXhcrED3SxqJKPgUFbwaVhDJ4xzq1qaxQYpHgfnmPx7LJR2Ai4Esho3cA9pG2DkYxctDJgFbYpwhzQgNFa8C",
  "key4": "5y1porHbnRVPPcjtQAspvq5Pjac4f3YUyxN45tNQvgRbjq1eY5kN46ki2tU7UQrSvFqo6FAt2bpih5edcxJ6txvG",
  "key5": "2VBcZa7idkyun96J6vQzz4r7TrZGD6u9z9MRRwnt5gkL3zjAFMqAezNtXNx4wMZ9KiXJfmHkaAjKZB4LGGV7mUMo",
  "key6": "2qxAFRknZedSQy3b94CrC2fXTUMAxUQyjEWidZg8P56BNAHp5bFsAF5hgrv66syPM5dwpSoThrNcZvAQxMXbmkiU",
  "key7": "4H4KtP5NZ4poFS1MiRawLH6Nhk1N5Yyf9oK9Edo2jLWeQD3QNPzwHmjFSGZHTGSTgcNHVAkUPksVsq1DmR3iTfoz",
  "key8": "21sKin7fFyA1Xvc57e62kr7d4Y8FQwyTSTRH9bDN1VxkVHuiMLaFHqY1UcjaZ1mTd6ZpyTdAqY3ZmkUhFto8sSQW",
  "key9": "5v6S8MwhUBLD8FQ9QqEPzwRvFFDGZrPQVadKkS1vwHQ32sCeYtymmS7TvQwS2gtFG3aoAXnoQYscRF2mFCC3vDuH",
  "key10": "2XSh5US9GxjGDDt7UooGi12yRnqAHeTfSBKiX3rppeCG57i25BYjECEZNk1QdMEPbmsH9YwALf9rbWwNzYkh2syD",
  "key11": "5VBcWMKmP3uWi43FtHSgGAMB2K5u4igjbHBveJLacDwamrZSNWgTB9Jq7aLcdKwrf8qvJpXg5911Q9Y97SEW86V7",
  "key12": "3fGJprL9FfLZkzxhor6wx9VSVWwj84rWQKJFy3rbD97gftRDAYwaMDKexD9qmsnmQiy8Apeh5u4D24Cy1EeReUvz",
  "key13": "4FF4axescBmq83AxSiBPHrhctcYYfAxVecGbCSxKDzj1ABZ2Em4ZB3XuA4puQx5sgZkaK2GfEDLPL5HXuXjFTjLq",
  "key14": "jpfDZ3Nz39qxmcMZ9zyk55Yynt7pkUji6jrQzWjZY19Xu3dMArbuDuD4kPAAVCFLGHZpynmPhkWUxYhf8q6zcQ9",
  "key15": "45unGL3z6jMHqCMfTkuPr8qh7Arimo867B6cZFFKkCs7Z53DpU1Cdyho16tYAR64uw2B8hFbeoF8y9qHBjNP1fz",
  "key16": "2qXKqna2s1Leqtc9Pn7mVYvM3mrqPdpPwH7vqqAUhsjWeZ4oCu63RxXzu69CQrnysYPxB9FAbgywWAAKg4sBDmR2",
  "key17": "4EmV5s3ibpeyaDEb28HFBu2xukQrHyjBjdPwnztE8ZCHo6G3ysJXWPcKNreSbRGnwvr39vVzxY7mLtNe5v4eNyJU",
  "key18": "2bRZPUdrGFDnyUjGDCf9JahEjgJ5VhYCm5dA7qq6VeeAdGhvBaojAEoyecoy9DpwMao9o4vqYVKjp3VhTWEkSCdB",
  "key19": "4QaFJNpNVonXrPR9zsfF1FTrfpDn7eFpyPknNZJzvPYcNYs2rKLuhmWadxKP3qzp6qonD9UYnC1yzWmHFaXYmjJW",
  "key20": "5ZGvjzC6mbVzyfa9SfUyWakbkusGtMntQVTVkkvYHsUkcHBakfXkhDrnrjyyUxp5PXPeHK1mxHTyogwT8F2p9bis",
  "key21": "Hr1pY71Uz7RcjZhmqT1z22cGhLBEvmaFyTGQLhdzbjgdxCrHqwzV9hehhq9rkEK9weiVj7yeufs3BQ2pHA5WueE",
  "key22": "51JhPEWg9iJP6u8RR5TjN66WfyaDFgGXcFov2JDaPWbF2TBBM9SUeCvrpHE6qQaR7pCCuKwUPZkKfRRTA9qQCXqJ",
  "key23": "XpfkkHgeqa4orNbcNSUy3ZT7YUScpfAy69uxcfyDFo6EUjp6kzX9xCHYrYKoE4u5yVsJoTs5ckuvGq6GZU9GBJL",
  "key24": "5gtah4gaf11DfVKA96ZT2oFFHghZE6mXWvHHMv27tEuLDb286T1hzw2JfPXQpSv3sHSbk21mgVuakfaexujzXBEZ",
  "key25": "4MvYxDyN7eExCgRtgWt2zJj4vQrmHMekyJZxSkQDVMwmPAd3LXQtRWTkcMcgHX6C844zrMptuMa4qjrsBWdmHFMf",
  "key26": "5ZdtPPo32kFbc3gYcEd3A89MBKP2XXdb3DVPVn5fjgX333T864cxixXzjRviTde4SMnAC4zdorBTyPtdu4TEL5tF",
  "key27": "HDmbmxq5WKhbeG7fddh98aZskwJSwx5scGTQv8mRsX1fhqoXNVNfFpUkcuikQcevgHTaRkwU9djbPTr3Cve7WgL",
  "key28": "4nUsh2FVHiimdT1CVbkTS6TDNBst4MJ63CQidSDpcJmdMhXPhwAJ5kowPzK8Dsks6M29xKN3xS73ns9StDpqtTex",
  "key29": "5Esy8NGSRvypAnKqjPPVL7XohyfVT2n6NrSknQ3fvtWQgyrgiew7s4QtC4FhmLvDUEQvf3CMeCfUtGQYWTkg1VAc",
  "key30": "5uEdswX2Z8Vw8hyHkgjjNGSWsC9ZgrocGbEtH16e1EwVhCtohyFRjLMK6zyiXPZSKzN5qe9uPkRqfJ8fXSvK24bT",
  "key31": "5bvM3S5Yx4MpKMQQnKk2cGDoNbXC5QRqFtkjeLLAX7vjtZtG6BbKtuDKvzPpvuRZjRrMPzcDd729THTm2HFa6Vji",
  "key32": "2VjPdktZD16EEwzZ2WsRch6uXjWT4yrLHLZzUAAge4UaVZvyhGz6m3ddYk2BsjaTuNa1khqBxchz7u4x5T3HFGrN"
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
