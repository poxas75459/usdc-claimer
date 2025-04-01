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
    "49UssZwWNkHAb71zGsc89CpRU7C4vvzgx2Upfc5dSgRghdhwLLyQ23SCJRjCmB3YztjeWAR6spSAAC7aCfn7Bu4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVdU8WWr3SMZ3PnQ8J6BhaiG27UoKhEo2pYWPxV5wrg7UMBwBuXUiMWiwePamSXqXqBfMa2EbZYbofM3dtXT8QS",
  "key1": "gXy9tfWDXDnwepV7V46oc7RHLA1vE87KoYiirex2HsfKKGr2vG5uCDuvsAVLQHEHKupgXQSWjSAdKSQ31BJQiq5",
  "key2": "2zscsNaMZtsTf5zkBZnqSscnnQqvtNXk8D5VWFd39afxsXhtdVLZFeupPXpdTnEH7H13Uwjs7eY4LLT4fLXzyXvx",
  "key3": "3iUBs5bieaYYtbwxWbam8hWdrp6Gki9Bpsmdff4i4VAnTB5KK4AABzDhLhBk29pFxF4Q5wZ6BmJSkjsL23vYLy4f",
  "key4": "3Vv5BfACuctGPfkdyy7Xc9qGfhGEQ4r8rD7cAJQpNVejLyPEBr4Y2bVLWxa3gBFvTcdjpGdst23AE4up88Q6dhDH",
  "key5": "59Rt7fjmZUf7e2aQjgtmrgY6CteoEvwWThoRSueGwwVnDRVFCxk3UHtpcEFwW1kS71UE6yFD4D8e2B51mHo4MAdM",
  "key6": "3i5VCB2hfUvZq2J7xDawQRUPH52xshT1RKz5EW3Pr75Wy9XyLccTGadNPHaY9kHqztuiU3SB7gE7tPyz2pu1aKcH",
  "key7": "3hdM3jGba9knAiZXazzekKG8oyaDkU7JxAcvnryb9aVYVS8LWiTmDWacpX3PrFUfVfc3q5BzozkUwZ3wEBDz5Tzv",
  "key8": "5USQPoZinbY8XjR3uDegEUgjWimTWaZEb9fhtsqRwSTrV1PkEfwVLEG54BMiKeomPrLBzPhTisgLgXEi3VEYXH3w",
  "key9": "2Lgt4SjSTmeNHCcKokq1KX6GUYzzkDstxaNSgHq6MSveVYo8eUApkZADaTaNsfrDbkxnsn9PtXq668bQq2rzXHKd",
  "key10": "3UAkZUUWmCLSH8uLtSxrbeoh5sKhhZzSXsnS9DkD52t9scYY3CUDH6Hy5qMV91XF29W78hsJJWVhdjnpFhe4mmSe",
  "key11": "31sCXtqG6eJpqYRdq5zFYPnLzbdMuyEhTkA37RcHLaEasAFyaH5qdYEHjvXFtC3qy7sneqm2VSBe2w58suo93QEq",
  "key12": "2tPsGyzKZodxyijNSHobJzuecFU4rLwQ7skFgSiaTvD8TLYj5mLVHj3BRnAepKiw1UEvCELNHgD3BF8uKZ9YYB4w",
  "key13": "HemAzJkfiB31Hxa3LDrcdWSGvpNtkJzCUiqUtopXPvSvNN1VYzo695DJP4mwGUccznJqgKUug9Hgpi5XjBo2ZR7",
  "key14": "mEvZ5UiL93wgo44eGYA5R41C1cXwCs7CUP2ePBDKDDYBe8xi9qhhZ84xcuk26bgtR8i7G1enUFkuSUabirUcboq",
  "key15": "c3PcL7DLwe6ZQhFCpQdj9wwMfgMeXEpCybDQ7DxJ6phenF14Eysx8P1Cet93m7f6fCoMqa8cG4JknMyNe6XuN3b",
  "key16": "4jpR2PeYQLopBv3tueGz7w3zh1b6KEjCY83m1NFFKjhHqyqp2AgWkDrGTXMKtKm32M1zN4NVKzPuASoZss2KwK1j",
  "key17": "2Vn7KgEZuYFZwrEjo3LkFuJQFzpffexR72YxqNNW6vwRNwqiowLxXCFkiKqY5iihj7UFfnwK9C84rGHpWgr3J4uH",
  "key18": "b7xC3RRMeEiZ2AVpTV8bFZKXGJ6UQa93ojoY28CthkXW9vHm9UjtLNvPYRgUM5GMJmypZLAumaUNXGULfFhwyxC",
  "key19": "55gPmHVjzxtUBoTgv9sdue17tpe8C2GVZ4UpkvwMYRPFos7dpTA85LagAQNZ7oaByF94vqkHcPdzmKaKNUCVyh2N",
  "key20": "39e2mkS5MEzLrhFx69e4imh5JU8JwqDuQpLPM6WQ8e2qyrv6iBtFnUqXyNwPizzUPuYsDnXRdkMcsz2CZBmoTzBn",
  "key21": "5siyJWvHtjq3kTN9bnagWpPT45J8KB442tbBffySnfKY8d8HpyzpjcWqkAWYpPtDEGYb12CBKS4EVGmUW9LLpoCC",
  "key22": "3Pi46JSuH8A7oSmLZrv2mgASURWBddPNTHGVefaLTEz7sGQSFTektxDWTCqd7ZWZNgpux4p1yQJkBGJ4rZtqvxFn",
  "key23": "3uBRHN1B5Y1LCyuBHV4rc91mJ461N9JSh7FrTFRqAuyZ4a97xFcmSRn5mDwn4mrZyuPzD4ZWcMoLC3GvCsoZU2YF",
  "key24": "LWUYN14pdkmuvqeXtXgW9MjDBcx2P3KbTBnsqWrQPCNyyr3aWFaKzxyUNpkmkqebacHkDM1Nax9CWyvatNXQexT",
  "key25": "657iycd9KVMWQefnHpwS9NkNty884z4uhNz31Lp2fw6BSAvDEwfPVfANETpKrQ2kNjSbeaHGYWtnZ7mTQhZyFV7Q",
  "key26": "3wVSHZqSH1VtxqGctR3LjQkAfT2KBRCb7RNSby9XGMVFNwPxv7RXvnXdaQ9sk4e81hPFHuFkp769ikSnN826nf8E",
  "key27": "5WfUdHkiaTdMh5ZeYUmeVLci5rouQBongjTZR88N45Jho26QSjp5KpNiwtVQ9dd4BpCjbJqxyCHCEahNJecV6SDG",
  "key28": "4CgMMLgHm5EnZzBLfbK3DgZ92eBDwcDY4C5R9m5PyhndVG4Yi9DC6WLVW8nxy5td91PHLTdbsA2LVs5auEfgoGva",
  "key29": "59rPsA6ZFZnkqoE6f6i3RvqBpfTFrF7D9kT6Te8q3krpXR3KBH9JJm34P41Gka1auFkpAjrup2bt83h1jomiAktR"
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
