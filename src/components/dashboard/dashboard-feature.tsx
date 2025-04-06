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
    "2Z223NWShzCDzT41z5LBc4jCJftEdXvAG6SbipHdKM4eeKTKovfYkNUALGevb7JBPNPAndQvBUj9rz8jidjoY2RK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7JJbaPEntKXDuWGWWihyYWBbUXwmdZJM89KBujDtFymTxWxxBYW5D9MMSvhLnod4c1kqNiafAXu8xzcf288PoEG",
  "key1": "3xijuyTG6vczeg7ehdAUojNynKz3f91u8it4mrTmTeXAaLnrBq83EHXw1tVx4qsDuT87hGeq92LCjdagGzgh3uR2",
  "key2": "5Q16CSRpZoGz86PpspdqBExqpPm8cZSA95ZkRrkfeim8x4LV2rbL9gBDwvZwWSsRZnD3QwFT2zhLQ2mtBjLbk1MZ",
  "key3": "3vMAdPKPazgiUnLffFBn8aSJWEPsDKekzNnTQkuqbq9fydZrEFDeiXgfZ5PVEiw29k63usynpnFLNGTMLim1PrYw",
  "key4": "HsiUmuckEtqrAJuy6BLUegCEpqzxps9JX3ZbqevogG2rQaKUVzNrsBbhHE2rW4bwADAjsxbgTVrYuzxbDdXPVzS",
  "key5": "5rrFdJjKERFxxVTJaK5A1ZoAUXWYmw84EaXQmNh8fKpWGSLbwCoMW9ezj1wb1Wj5V9HsjFFAnpre5utgwUeysRTY",
  "key6": "5Zr2PMN3gFxQMAUS5628Q7SnJEtFP9RNcbzkGfn9oE2xfvUpcuFpAxrLTtTYHZg1VYTpzX3pZ6jJiLZNucJ2Yjq7",
  "key7": "1DBy2x19ni6mF2KrgAw3P3EpVY3mwU1mfNtwneFjkcqxvYpmegWPEjxwR6TwYqEozkBs7aW9yAV4AcDzxqbUVGh",
  "key8": "663vXvxgpwLFzvYnGrVaMX5i6Xf4SUGgP1beM83nRvQEdkp3ZzfrhTDYe2A54hRkqEHVqCJWSrL7GiukwzYJ8LbW",
  "key9": "kSthzZNfD2BVcm1YpD3pnWxEwPgtXST9qv5gRUE7sGBfXoCzaeJd8Gc6Ao1W2oZm91mtBDnoBmdhxW5ve417VYA",
  "key10": "LP9jNgnrSLWA1DqmC8rYtfZU1mP4TMVrPk2Kw2ij761MSCcHowHG7YF2L4FLFjGnUUAfGLz5vZZJJFwgPhREeLt",
  "key11": "2XKJd7NpNEwPoomLyTp9u7ZgAma6Bej6A3Rh1GFiFsD4ym4JwvhrCc6KXfeDft9AyusRCKprHhxJFemLeaW57CYM",
  "key12": "5bxXymuvwwqLKCnJc8pDgTVzTmy1QxuQtfU1ykMkJ6YrbZmWMtHkYWkEhTP4usTHvU1jMLQAkqo2YSd4AhdKUV14",
  "key13": "KAmMAdp7V44RXdSX66esEt7NMJZUiGgf7uTDKLpXUY2BP6CKRGwbvprV72pDzZSSWDjM3iq1mJL4XWk9X6CisqW",
  "key14": "57bxmQ7yJYm2HJYbmuV52cpnb8ZWsZdme7o31PruMK4yhkrvowFnrJc3jxXG5dTdXj3eAgHseZFQiUQxms4PTjdg",
  "key15": "2iiyMoXrPaYjXqhti28zn2z7BNe7j9RXBPPbonJgFqTjppZjFyjM98GGRV3J4PXmGcY3szgg6PX6xWgBKf9PaXTX",
  "key16": "iogmtjYHEMjC58e58eUhNbDx4nKtjjLkE6LbMbPUdmUsKX4MM7THoULwpGBCkfLjoHe3qhwEuJf699Swk6PNfsW",
  "key17": "5mNbDyRg4PWbyczpkxiP2gaAgHnmPh2ejCn8aaeDgmxArPkbM7hkT9BKUHBeoTjZVuwAUcRU5DWcREc5wt4MtDbf",
  "key18": "3QWyzatqFbBMr6RVsQ6kLS6JWrr6WmQtALG4GTH6NNxAmTxSRNyMmMWtzeCeqtSMFitt95v7HzUXTj9K3mUMRPsG",
  "key19": "3Epdw3vwsscfQn7h4FNrW2xmhAWcUo7fgFKAKpEHZzCSrU9LbLygvrUwWgoai2w8nnaW5UxWhUEFsJGm16adrqMP",
  "key20": "2oxSC6XfYmo5ddNRSx6QdVCfxmGPGh91Y5PBX2gG52V8V6v5p6qCtzGXw3wveyr42dZaBrWafvNBf6SWzZ3TdtDh",
  "key21": "3KEsBsYpnG5TzVKdzaYTkVGYheBzmpJt5RFDCGYrZhmD2H3sZqbZAKQYzFRveEb85taymYx3h46sSkqArc5gi78X",
  "key22": "3rD8d1E5uyqpCJSJ5iwdWTG5tkkqpLJDNDF9VZRqtN2sgbsjvH1unNaei94R66h1dbCwJ8aGAfgPPBqVwZhJ47mD",
  "key23": "4ZD5AG8Bv3ThHKusUePXfUWgFBQmpk7AX6x3VFXK9ZnEJpoeRV2AFrx6jS6FbbfN3w6CqYAKuf2a8QgWj2daCNP7",
  "key24": "4M87jqQP2rKFGoJ9VQX31fLSwKCZtqz42oaUdFGrxYcR3LF3gjdyLW5iteJr9JkhCemBMiBaNq5gUn1KnvVDb9RK",
  "key25": "wuyyeRf6KwLvVZwKV29ME67L7dhnr9N9FWJ5zVZ8NQJ17jxp9E2zAc5eXepGutfbM3wiSmymFcbpe3JGXo4SreN",
  "key26": "2xcHiAeyExmSZjStcy3BNGn786U2WrJstDpHEnRCKxA9CiMqUcM7eyndeDQfWiREz2zs8ps2VdG8ELK7ZnF7kAsA"
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
