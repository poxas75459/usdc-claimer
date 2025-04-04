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
    "nGcgm4ceHwdNAoHUyZyicyLJLKhHo7kUXhEi976ZTay9dq3rM8iybbQpnydtJc5AtFQutARjtRQE6W8z1zJ1pRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HDbPXrrHjPBEQAPpAJ4poTVraRyZSe3p1tHrHMTA9myC9YkVrrvhRUM6DXjeGQoRFshQmA9gvY9NtN7pVDLftud",
  "key1": "37ACXiPwoJ1kmCqm1r2oD1M1gwPUqDikokr4utM8wNf5wodgHEouP1yTiRzbTCkY44E4yBnnvbPmxZB2go8kA4f1",
  "key2": "gHmyhtJ7mccRSZBWKJzQk1UyLPJwwcFAgsuueWQiyEpeDZDdHKfdVbBJo1PiQRGzPzuTLciP2Zwja7iuevUmyKB",
  "key3": "3yAVQ9nzB1xRTtwPH1DHFoQrM9LXoBNtkj7xgFzTtjs5oCLRatnDomDr3ba6JA8cqzQDG3CGcgUYAn8uuqUEtPiV",
  "key4": "5Sbrh6k59C8e1GjUYgNZ6jaHMic5hwX7bbYmUjo2LBTrvv7RsQoFMjzRcQDgmpVvehUCmBmC4qKp3XHXU89SAoXJ",
  "key5": "BGCwduDpZWqHdBFfG4vgQt1dyBV9oY877M2L2wvdPnzFyC3KhYjqwGt3iAyFGSmFvyYXjtAzyz5abLRKF8GMW7r",
  "key6": "5xkC3KPhDYbF64MfQawbu9qLvJtbmQMqfhBbSFFFJZ4BdeDUecmkeobRMq3cTTXV2Qk7zqJAnKn8a4cc2vSBh1oR",
  "key7": "4qMuAtzZrB282HwHPvcokd6mbwf9QULMmiiH9575rrgdFDU9zNftPYgtbDe81XaS79YYdqcoEDrp1oDaeyRZomzt",
  "key8": "U2pMHtvGo1uKQUYHARpoDFGmkaasZXTuCry6BffmVGodNbG6ZLhyrYVMn4ANEJNGnj5HnRW55WtdBbBEoKDprVm",
  "key9": "3dJ5m1YJutn8kDaxEquJnSsbEgqJLZsg19xvd9cHjNWKnYRZpBDBqYr8mPYuTN8uNkjtQgPz7r3XFqrY1iSsPgQW",
  "key10": "3mA9vmFP8oGEMTRmpsT6JBm2UVzg3xR8EqXAyxaS1kNSbhuUGinYk8Yc8rPsGSS4zvfi2uB1ZetaAYgiykvXRLr1",
  "key11": "3uGxwQFKoZKJfF6uirFfDALVqMM52HPFLJokXfAt4VdwWLfEfCVabNyc77onjwjmwBTKS4zCMx4oatBd53nBMFiV",
  "key12": "3hGKyEtwEWxkBaucc6o4nsKhCEeAd5uk22tb5e5dXcPkg5yHo4YH9dTv2eJTmXEoDcmyS1XT1xkYd2AgFBQoQbNo",
  "key13": "5KeRemwwtgQ6WdFrdwQddn65BtQyqBQqoaAU8AaWTuL3kwhbiup8yMEjRH1sGgSqNJrwCy6nEuMYzdMEqKPgkyA6",
  "key14": "2ZL827wMBd2BHYeKb98DQtAvttw9KJucj6P4U35RJfxaBFMfSrpJvdKH2ZprpYfG2xYW42ZJf2nnj8LCTRKgAgv3",
  "key15": "33qjMxdsxuBRmVxFaj5yhUs8xJCbBqsvdEyF7vT6KrbvsPjqxsfNrWcM8yEsZnprBTeeEYBuZvqPxZkPe4Fdy2tN",
  "key16": "37rVQy8rpqioeimZoKXnDAoTbGG4zpVPGGXb3jmBPyXY154yZLqSxp4TmLsTvFHUixu8JfniqUcw6xhN5jE4pyJ",
  "key17": "56Pae29pNbXWA4YyyCCixZrxb7ganK78CocK3ayuZCPbqy8QDmBJEgNAMyVMuCxSPJK5WxfTajZzYt8jboQfJkdL",
  "key18": "53Loo6W9ebdYLVAiNbjnPVqW23cF42PtDURbvCNnBqQ9pk1bRnTvYCcq9iRqsjSmK43h8JPPpoEwTRB15pKXV9H8",
  "key19": "3eGP2N8yfE5n9pVKwRhtswZNycHDjW5QpWTXh44QDrmrJy1rZcBqyMZPyMacK9vw2rGhqukE4uZnRJTDaZULxhPS",
  "key20": "4KDQ8frnyC88ZvwKuADovqvtuWUzYMHFA553rdR3DAuFFKApCPX5FZtejPp8pT8yJhvSUMtdarXVkiGmgPj8JJEH",
  "key21": "5ScLKkcKKY6D5GTa4TXEHACav2RrxzBWFqoZr6W3AiZBECsVDgVrS6BRYGAcEQiRLZ2Vc33M97Fz7id9j9uMMtG6",
  "key22": "2NA3mrE64EgUC47fzxJid3EkFy27GEUL2EVani3ruRLCXoCDfKHfuE4AvNGXFY3p6jhP6pUyTKGCWy5wotZ6tC2q",
  "key23": "5TB4whKn6zxF9SBgTovdgSdFPhS4tAdVBTLj1etdi3Cer33RgUZsX3DFxvk4YpcyANxyiHwwtgyWWky3WFc2a8d8",
  "key24": "56p3rqkC7agdPzzm7evuZUx8exQuokMPugpJ67iRcufxrvk8Jz59TNvBn9F2khDRXrtLNN7oYLLMdKxymZvaxssp",
  "key25": "2SF6xNdc4DggBCZgEywgbhfiwHePQLbz8Ww63b4KnnFHJgpgQwaVYvu5EvtWYqeTAgMzcuKPU6M3VJ4zKcdjAVCZ",
  "key26": "2SRLQrpBauHuBZeJyzEaXMgYVJXUEhEKnVW9s9uwxEiUz6UggRRoaFM22RDGuz12S3vFesLkXzfn94G6oigB8rLu",
  "key27": "3YwAxX5s9cxk2KHTNNG9rNVgpQY2htLPoiReeEPjAQ5vV6Uo2WqHGtf3ifeWPaGzdLM8ABw4ZDH5of6Hk978Te7v",
  "key28": "5Wx5BdXw7QJCdXAfy4AztvqjEpF9XfjUfuMTZtciHbpM51Vbx37F4dPL8cW3La3PjUtkmKppVu6EvGx2Fc44qK3m",
  "key29": "3foGEfq3xzPD7h1gwjKRyjiuYemg3CjYdzjw4ixLKRpmUoinejU4g3mFcN5Nv75TRuWQZnfai2fcdFiSe2TVKwRr",
  "key30": "45EzVGWdJGvFMEKUCboDvtQQogqnYKmf6d9AYqSTtLt6e5HrPyNPzSgSmV4Zak5yo64xfagfFrYD5YzKn3amrdq2",
  "key31": "2T5aDhYSM76oCYwH2LEDcEQZt1RpAkEkEDEmwXEVPCYNAR7zgEgN3w2FNLu5J82TGu7i3q6zNCs5oaHn1taw48K4",
  "key32": "41CuEy2pB7CZJ8vFBs2XPJ8zAqQQWKZWMqiDF48yVxwSokuHoFnPPtLVqNyvSFsVezN883sib4Pc3osC1DA1Jvpa",
  "key33": "54sJKzMUF66AG2JoNi3W3khDMckSKkrCZ4rRCq5WP2ub5E5HTEiS9xvZ9ZuL9YUW4Ce7huLHar9Qc9U6orU1JnZy",
  "key34": "4jctYgVBv6QLr3nsJYnJob9NbEWE7FurEoFWGjxN38rBw19DAbiGRDCGpdiFqL87NqLVQhpc9NgtqSfksVs6NnDC",
  "key35": "4jLkzNhqCE9c1wMiHY5iWUsBKTHcUb2csqPHQPgQQzLeXdJFKiMfwECB9YFaPScWFiNZ8ZgykDbrktus5H9R2t9c",
  "key36": "5sEm1EZBffnppJ8revBqBJQbpFYDMcFFzk5AEtPCywjoyPRQam4yvBLvBGaRVUEnb7BBdbfeavVEfEykGQQsZMyc",
  "key37": "4pSXJNXrdV6bj7SB7QxYUcPbKHBnaBPa1VDBF8T7vYukANgZW4HACshiJ2sD73syrWVmzZWuSXUJhCJqYEbBewus",
  "key38": "2GJLwpGeLjL6qmzdjC17GmHBEwe13LP9wGM9DhBZoS43L6P1DhszakE6tRaU7ZCFDdVE7H1btPfjoN9RLkegiXWe",
  "key39": "Lzdp1MYwMnpJPrauZvkuzqR1SE7zgy7DGb9ySG8ApoN1yKKNGHhfDS1BALyz6iUGuBib3Vk5E5BviPzBCfVEU9i",
  "key40": "Pcta67CBuMDrsd4vVziNRy1FP7daSsTTTN1iUUqTyz7guAwxkpYSj8hRTCBgM4Jar5ZBboZYCKw9AFTsdsq9rYy",
  "key41": "je3ZY7kCYWNn5uUpePuaZFCEcqTtQaxX6q6s3viZxXuZ9ELrKpWHDVFdY6SYjVK7j5YBRfKfWbBChyka8fTvWA1",
  "key42": "Baj9V5trvwrRVhz41iuhYrdiHkqkCBD9qye22UoxrwbDezyZrD1cfzbVHqV9cBnWjuDWhQ2yfvfuQFtHivETJNt",
  "key43": "5wtMdLutLcDAqv567aSkBgkp7gFeeJZWWNmUNZMfSsPtiecXDvmgfEx4CtTNh9jZ9Jpj3drDJ67kB3vT1ssAYP5F"
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
