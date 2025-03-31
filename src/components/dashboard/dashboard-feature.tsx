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
    "5ohHMKDxjinWiMMrMfkKANoMBbxfFiB9xDVWkVFMYPzjdSUdziHWDY6QxR5mM4UDGWBpeiRfB7R8MEwHr6Hs1N4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cEDpVFGrtQC2S32viyLy3H3TCCeaJaXU6nfaegri1JxTGGxsQMYjE55c3LrAzAsiBHDTJi2hhfbxNSc7A4mAaMZ",
  "key1": "2kLdES7WopAGMoX2TyPPtNxdUG7MrR7bjjVLGwbvCQgYGmmEW7Ua9SNmtXVQNsqA6KjUBGPW17voZhU1kyJur5by",
  "key2": "23SjGptnimBpcSXcbBFEjeDfpaPU9m8RZ3AYpnWQEeeUBW7v4HLv5c2uDD4WDJA8CAu8JyJTHp1s9Fyr5TVzupvH",
  "key3": "5bTYJ9sRCbYjXHZ7S4zjm8stnT2obH5LH3UJCFqVsoLmXGQXv9zo2KDAcwcYDgM2E4C87ud2F9Vw3WP24w3no1Sq",
  "key4": "3XS7xj4gVX4hRuhfUEPtohxK3zJ9w41YTmjXpsprCYadGHmqYNbYxTcwHf38pYznwExVxkmxxXBY8fh4GPCSjWNi",
  "key5": "3eWipJdVAGZ1pMUihrN4cRzK7B1gW4SunxaBK27mTaizYu6xEMQYpz1xBEYEN7TGa3E59tySfTF2JnFPpH4gMuVa",
  "key6": "qfuSe9NKonE5GTayga5ofK9Qs7qeo3Y3DDZopXuzBgJvzeSjFLKUmTYXWAwzDwyqQNxt12HNvpvEZTzw5xxtCqZ",
  "key7": "4Wfnndg6t9H3P9KdQXAJDDjRUPo1BxuD6Gs73F5kE3S3SqfmR3eskfM7bEJejM8ZzGPyKnWxcKZXbQY5JVEt9VWo",
  "key8": "21iNNAi46PrL8QRkEezesaSqgvEznsqxn7XkBujtGxbzDW6mSy9ieJZRqrvD33CEptp4hE8Ha5qnZrDCWsuLH5Wo",
  "key9": "5gF1VWao5w4oEMCg8TuKxBPwYSVvHs5AUzxh2FpmYDVhM4QbdbmYpdNdpgTAtKtkCWhY88RDFediKp9q4hygumXj",
  "key10": "2TARzVeSWJLwNeNFp4bFm2DhGN4AzUeKuc13mUvmW3vCSeQ529sxB5CLBFrAm2E9TshAQ3FsgRsiFdwrtBBdUoo9",
  "key11": "4mv1rqBhybRBnb4YNfbkrFcpmG34vqMRQGNFMrzyLWUNX76vEEf7LP8hi6gLCtboWXNytqFyFSgBTRTsByp7UGbz",
  "key12": "5jcArPR1sEQ7SnS14ZZi4sPtiu7MECFkk7gawkFkDW8KT4Wnjq4zad3pqcESQjfYJe2a5CcMyhLABcjYW8PDDLaW",
  "key13": "48TxNCL2an8Pt939vD9dZhNKB4kyQdbEsLFeSkxb9CgC34SS6f4d3rqCi7sBC2fAVhcdrh1DH2woydRP1MbNvwrv",
  "key14": "5ZWq7Z2M1qXXTxLZYY1r8n3S6FLUPb6zWo8hBoPQsZ9Zn9vkGy4Rm5ZpjjcNUjxCRXk2UxtKiUGSZP3MiwJXjC2S",
  "key15": "3i3jW4y46EB9aqmkDrRuXbSKec4WRFJQ6Ngt5HRnVRAZJicE2ERDkiMG1Ks42WAnjV5XTmojNbREkdoih7a4FBsP",
  "key16": "4wi7TSD5GWFoofA2LSzAZydLMFFp4f2PpTrvuittoKSYrGxAWTtSBa486QptRFjZGTHgEMh67WTW3szBwx6hNckY",
  "key17": "5kGTU98aUSG6ZS8B244cRfvomba86NULLJridqK9mXhU7Pm8sWKkZKT8MRY36BBQq3xqX3BdNh8dQfiQ8LiRhhEW",
  "key18": "4YSR8kuPnNArgR58ntN9vMBc8YZwtL6yPomFQzwynhDUPDhhF5KkaSepbXWT9dWpdcP4pGU5PCGcKqyCXjemD4Rm",
  "key19": "3TkdwkyyzoHih6Nohb5R6DPKpyE3JpynYdb7hWSkbQ1sPTC71VX1EJJzfg9aRJhX9VkXCxfKUH5CoAfkjjPhj2wS",
  "key20": "3ctxZGysiw1frnrXquwowGurxgZFMNc3V3e61WuQaNwijEriQxQKzEtw55EkzPwH2p6W6o8Avid8sSumAxRLF9Vc",
  "key21": "5ajRBdfhCEJDWYxNqfmsmkT2Vj3zKkjL7cztQNXHWfC6eoz9siDWFJFmQUwH3rnwcqYBtofBtzaSTfFkhJ7vto1X",
  "key22": "3hAzYkw3XoQFBmd76tN8hK5b75Vy2LRq79Zgd4Vh7ZJebTuqpwCkGEw8nGgTLVxz6ZE2hrW3Fq9e5mSQjzcTu1zg",
  "key23": "5U4NTTvX7XVyMHtraEGy7hMDZVCT2i6hPTzimgnnJzUna5xxNP8yA1w4krTmwT68oGgTWqmoWKn1hyiSwHTggdGe",
  "key24": "4imKoWbqz4RHcm2VoH6J2tqDBFkmnDy81hWbXzozoZ8o2MoRxY5634Ddee7ZtoLQ3x1rRmSMWUt6taVQ9uL8S243",
  "key25": "4ax1jodBumgqx1tmrpjcAgsUDmV1RGnFhk4p8xgdKH8ewknTMXA4GxxyLUrW8SXtzbvxwAfKzF1hxN8cHtXgiFN7",
  "key26": "2jBiyWeNUz35D1NRcPULengm7rY3s5qXefdav4TRoRafZETkBB2WxDp6X8oGhsyz1WTCkytfxmhSaQarFHjLN2YB"
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
