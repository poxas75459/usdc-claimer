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
    "41gqMb72psKz6GVfvZVodHNAGRYurAY7w13p2AJFgNTGtmWxvV2zjwtN5J2h3TrjBdMza3v5Z6YMcQH86CTyP8Yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fm7MWV13b1hHQA5oUirWigcKPcHMWWbcmWrdqhyN8sPdGFGFwYBKng78v8KGWMvYKkFwKSAQ2nUpaCJUWsy8xXV",
  "key1": "4HLBDZcogkkSxmgFfZt6tC8H395bxomV269HrJpUFVyArnv1kQYBdrW5pWKjCENqqutgUP8Nkh9bk48gzzFX9FFg",
  "key2": "3QL3XLEjTA2B4JJGEJqfu7qqkfo5qz48AxBqGHpunTRfyiutjGwkdiHoQXybHSQtTAcJ6PxUSCvZFdB1YMBsW5sZ",
  "key3": "4FkW7oDoGGVvSSS8EfqdMytuaq77DB1Hjy5wuh9uCXiFo5MFJXJ32jN9HcbWYLd19irJmcZAYqe8r6YRaQrsfnNF",
  "key4": "2sEMHFZ2KDRKVhPZ7JNTCNrjsD1M7V2xjrf8UQZdFscRkKdxH3UTugCFx54WxBfXKPX1svH6r3SM1ZSUCNMfSdyK",
  "key5": "dn5ZFqEHC7caxsougHZ6n1N6DUgMJsy871rPzzcMeDb4MVF9Gu79hTo39DDus3VsTuGcQpE11tLSeKYwgjnn8o3",
  "key6": "26GYSRsQAejiiRLRpaGdUwwCTT9bJkVfdeCrfaqGHKbxtomtm3Xibus5yjZ37bH7M86JkBE9mR5JdVpYpfUqbbVv",
  "key7": "3FTeWeEWMvembabQxg3vKCGmZDmjG665QyydkNk782MVMrvzwrBuD3C6YCKkqb88CcBJvBuVTAe2LZhEUSwACM4Q",
  "key8": "3xVa6wS7H2UwsK2An8m8VtHGaD4GRGJjcuRJ7gcSxy1YXY49kjHLkivc84hCzWH591h1siF9Npo5zG8x2gkVEdNw",
  "key9": "Ypsd47ihHyyY1cQw35CSB8T59UTbnvRgWy8HDx3RAZ1USrpjK1tXqgzkmCTVpTVtsVHxSeXrbRKFx5kTTYy1qmV",
  "key10": "3DdVSaEfNi3zXkSAjjg1VtomCFpUiNydD8Ggj5ipxcm3W2Ug1JhrW4dLN8QhKG6CGqd89kcZQE7Gr4jFaVZW59cY",
  "key11": "3HvNRXfSoTmLov8hbwrVDochJjm4Fxbjsi38a3cdsgwhHUPYVy5rFhqTeupMtPzaWCKLAMvL1nA8p1GByqcCBStZ",
  "key12": "535sxuLDHTuxNcrsSGq4hnhqN9tpDDNQTnuaqVFEe6Ad3rS37nExGXtTbNhK6e61JMV2kG6kzz6aE2YLvSyx4df7",
  "key13": "zQYb3qZsXaJveQeTX2sfa8wGn9AAz1QFhtkDkPBvyyXfzTde9GbXGA5MAe44ciUBhpWxd6E8D29og5hg33DAUi7",
  "key14": "3c1EBvFjB5ogpaJNs6ZCQCP1Qq2bfi5Njs368zboATvUgKLsEoFwHV88upesMvip9jnTPNca5B98aboxWjofL8XZ",
  "key15": "3Rad2tsKfKtXbeXvapVTZEZ6BTdbHeBaJeXopkh9ahEL5ksNjVjfa7HLumcHDAHmxTSGpm5o9Jcd5PWsbYi37oEQ",
  "key16": "9sWVhwRKEnPNM856awRqBbtJviWWYWFZH5XW2K1teK1X7pBaEm6owvfNaq9hpR54x7mm7PXBT3Nm2JamZjRnoaG",
  "key17": "2YFckPRKCdJu5HQE8q6p9ARTprZ4ffeyShMgPbRHGR6Ji4iupWLfaQiuxhtWxWGEW3wtnPAiW8R1D2rxiLGETik7",
  "key18": "41CG2mTwmx5zRapgwBGajcBpcby5fTgBMETDZf5rTbrQkRGr4TMZWQ6zXEKxcihXMVB2BGCb6VV1nNCHH9XqePhL",
  "key19": "Hw44FmxTXVxvYqVqxqUFDCoTf3wEosu5eKDpLUcZg5a1wDY6cEdguU9XEzYZa7ruvf3H8Kta3mhkEJhxQAfc6KW",
  "key20": "5p4ymZHaz8QHtoHB8FGLtDy3k6JqqdaKRdwFnn3m2smNXXUx1xw4iMz9cxkXTj5RrgbnsZmVdjEPea2bBAJKvhEz",
  "key21": "22QoBiKSQw7rRym26rXWhQPWZfJeS2ro2dFkxzWPViunqCXH9YtdnG2jp19EC3YT3NFNz3UTu961j47FjtiqMHG2",
  "key22": "3GAdEhDSFmmycpBdBGkoTRgMMW4ppR37Jrr8eTdBttJqeXoApSLy4ZEi4CqyiUN6s9eGUSNcHKRyQAc1ksLeSGdz",
  "key23": "gz2uiPT2hWhQ3SKFEocMWroBLRgEvxFM3d2w2DS4kFFjnJ1pXhKUSTymdttsWhqARv2dLVffpNhcudVQsyRbQjq",
  "key24": "5XJyJyhovYuBRAxPBuKkMyV84HZzgKMH8v6WwQuwYA6HdkdBWVMH4twXCrntJWdZVwBsTQBbno6PJXH7TjsMD2H6",
  "key25": "2XeD1xogN36TMiBuZCQAT3N46H1Y6NA37dEnajJ8dL3cPKhJc82rbhNoYB9fRtN4nAVaYrmTsfwhnNEbqfGoc2qZ",
  "key26": "4roxMBxFRCK1Vwh7U8dGEnjoH4nYLF9YviBvu1Jjm6v9nC9FL7vyQ2FzPApZi1Z7HSJai2zfDFVqzcyL3NYmagHB",
  "key27": "29ftQfC5EwuZXJaHh8oXRGfWnBvXKpfGzFsjWu9V2FCmiEfjKaWtTGphmfWVbErN2ca5WNZQVsALScu9bJrhzDTi",
  "key28": "5CNDTXmQ3RugA5f248DwVSckqEdD2JsXgH4jn7JZG2e9Fp1EdVzjxkCrQZ7EMv7M6Xcbdu4wPLc3PkwwMC5nXdZe"
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
