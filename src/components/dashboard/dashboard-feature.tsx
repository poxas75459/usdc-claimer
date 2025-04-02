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
    "zBKtu13MdbxV87pW9P5BvAJDLkoYDM3oPzxZ3adBdtbxSpbVgDqobC7RFd8GSFV7xdmQr9fjYJxLgxxasK1grzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wk69TmKQbUsBeBNJzNgVDDyChUknCq9d2ZPULkmdahtVzHP1ViKXmeRDEBra5mo54xCGgj4X3VnduKDr2Ap3uPG",
  "key1": "57t4KZpHun6fjXedUrwWx1rwBfhhHYW8rPJVfgtLbu3gYzkCegSisFxykfgxyzUa8VRZbBtgW3ALkzaZouTfsBH7",
  "key2": "3V2xMpTE1hAvGqe4hYNsdV779G8q6QVeq8dJWy8c2nr12frxqVX4FJVgFRHL62RNT1pnDyeNnRXzdhdPFkGrymy8",
  "key3": "nyXQZZUTxA2DPpe4EQtur8xEWZMrArkkyjDzou9TpE1d1KkVAWMCXL8zF2NwN2r2PAXD676TVq3n9rADh448tMY",
  "key4": "3tfdBsW9WLHxqVWHiBrugVmR1LFCj5yVsxaANEJG8WvCiLi69f6DHD2eUNk1MNqFrGJi9345RRk2kjcmC4Rd2RFz",
  "key5": "4BmMKdh6EjtDbhHYTz6y77PhZzh6G7uSXjEdBZ11em1Gh6HmpeyzmRvrrwaSX9YwZjCPsoDsUFTU4yDFhraghnTb",
  "key6": "5Rp4a3CTTsav4Nn4ECjL8ZCH834twMinncQ1HuHJL4Tw6PeHjecH1qftbFJQVwbzRV4cUQSW3k1LeoRo8wdXpP2W",
  "key7": "4uc1xfvV7gxHF5iPH3xndBvFqZry4tuKzriwHSHrKpa1D6Rc4CPgkJ7J8P6fkrQD8HXrEwGA94ToAzLvRZmeqJGS",
  "key8": "3gmvM2tv18wJiVqmVY7KrimdnQbvUmDyUWHETgK32gKoFvuEeUzzR6vL8wDc1MaSXty3mH9xXib55SF3GKTckj34",
  "key9": "3x9aPE3qdYbwBzgbg2SkXVCBjwutXHXV9SwtTTuj8B3VNDCXc4jozwCcPXZuD3ZxtsoxdFK31K2J8mwMcSMyJjqS",
  "key10": "5U6X5q65VhPi8bPs9FuoDhQNwme9uHbeovu97xYasYxfbDrZUtJCrgeXAptUfTkFEqxxoPaswFAAULjkvmmcxhcP",
  "key11": "4GxBo4JHoEnv8SAb8hdUCq6oMYcFAk2oBBFBn5xor287ftcXkGtqENPqg98ZddhAztsm81TQvd8gHJaug8EE3Sz",
  "key12": "vwyeF3EW3zju4EXabLf8eRcrrjAKR54ZPayHa5JZqKaACwNHd6DyYpJQSeNFid8r1BsDk286kdsMGFWBqnP4Euc",
  "key13": "3crsdYpQMV4gu44sbp344zRzz3xGDPnj8LY4ej3iF4hbZaz5Z1TP8jVG8PZYyFnsua6jEmkiRAMdF13yoBuK8YdB",
  "key14": "4s49ETcdupkc8P4bzx8wQamybRZcuCNWZFUG3dPnfzwcRhhFV34vSYFGTtsZWYeoKboX6uXNXXs6ftxKHHd1zryH",
  "key15": "BrY4Z6oBTz6BQtTHywtcG3pjodudEg8smdKWmEC2zHxZNH2wiFxs4borzi87EftyaJBW2XJGA2BSB2EzSMFpBVQ",
  "key16": "5JqGyoGoavZxSPpRQWMgCmaUmEP7js2xpPERZiRvvd4SxQz3d9krrb9sCp4nX5cw1jcZUw37qMabgUxfydanuP5P",
  "key17": "28zdZHkapfy3QaDUF8NVWi4AmACJrqNsZDw8bMS6ZnJAgpHKZaChH19y1PWcFx5GAAWmepUM1ik2PhBuv5csDCLn",
  "key18": "Fsx5zLtuCWkmYeJfJfnLBHgqfu98fH7HRr232pyazhhCZa1zQtEjECGjrznttpAHDT3FNUW58ehbBaaRC8p1hRD",
  "key19": "2Hn76LkDJtE2epHeHk1tVpY6CezWsVdePUS1BHGmev7rwzDpE2gEDhnauwNBvwZ7swJ7CwXaufHPubqPxYCY5UVb",
  "key20": "wWK4z3NqCGxaDMxKRDdFpwE6fB9mfR3CawM1cBgndrGyXAf78cvjoqSyfNm7UnzuvR3sKmnKGfTeVJ3knXkgUuZ",
  "key21": "2mgYxxfwo5M7VamDYMZphpXMBE8r6CDyoRGX1SGFhp2GPx62idYL6TRxxeQAcm6sWh4eUvwz1Yri35sEh3aia9aZ",
  "key22": "yEMRxXRWhA62XkfKRMfiU6FjJPb5bW12GG6pdURT9qr5gU63mLFvvYarkocRwua1Rr8Mg2YYW3EU8z4t3FN3Wqb",
  "key23": "44gDq5aVYZ13jqDGPXpv5zJFwxHvuMFZdbEcLRPbz3Rwews7dodBnKTJABAfc2qw5njyNSPBMhdJ4zzcGHsUWKPz",
  "key24": "62xsBWKwsUbQzHzdTeE3EYGwkGGwvJTT5rEuf17vuUfD2DpJfsGgzbgom3uJpav4PXn8EVQnDmjNBVD8dEEmhwFU",
  "key25": "3J4TrNBxAQBWCTUYHgvwTCPFg1zE2xwm6Q4AKjQ7tHBWCrP67rpRVwbzK23Y5cziFbKqpC7hZnXkxkZg5MmEf272",
  "key26": "4DYJTisgYaHK2QKd7T1KxeTtR5DnVaXo9V7pJDqYBEW6z6M1cGJnS4cUMVkAqUtHeqoUaTwK2D1Y75SB5RXM6M4p",
  "key27": "57ZyVqkY14C18nJqPWuBU8QDPHV79fKjGFpZL3UxruTReLBKtDmivCUywx9QK5VQ6voxC6zCb4gJu6XxZVQsHytP",
  "key28": "3UnYUzemNbVxUqnWbiu2Y8WbFKZLohwj27uyQWFXQwvbCA5oLcRJTDGeDWoLxtrW7ruAJNnQbKTkojWoLfhHTN1B",
  "key29": "5JeNaggref3GxBjUVyKVhzkRkrDCkYZ4MpuVCHLjzFjiBKPWz8npzN7dXft4ChiWm1cBQmyW8WWQL7pCX5RgP9hK",
  "key30": "2Y9gXCNCE3YwD3xcpEGWALz81xNY8zMs6dhVATK48RSxvjgmKy7vxRTcxcrpmRpSmLiJF6yAnZabnntGAKQtJxAA",
  "key31": "4hAhNEud6TwFf4ob1NCv2QcQLBA2w1SiDSd6ARznsu1fQRQ1NU99dQGwho2GfuEv27MghpJa63kgm7ZAyPnb9FLG",
  "key32": "TnMLG9Q5xApbgb3mAz1Nt3MVxR4cXnQp43eaej9KKVMsgx7FRHefadw1165MjiWJjNtzZyjTiVViuMtbMPLCMtU",
  "key33": "5YRfRRnVJ7asXdE67qitBzEeswwKSa97yiJNstx4eu7M3bfUDaUrFqYCEHogV64ppNVjomNhUjJ5tBRYCv9aja2f",
  "key34": "5jZLxTHaXSXmJu6Xqj4rS98yPv7QXQ5XXQKY4NCA2HecZYqLEXRRk4kb5bdrpHHbpGQQnvcbezh9fnuhu2Ni2XYB",
  "key35": "HLUfhARcoT5AvQZQQWqDwuDWjMCqDCe8iHt7oErDHvEsa9gxY6rBkiKdGYFJyCNCrSNUb5ZKgf9SxSmLwMm5ZEz"
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
