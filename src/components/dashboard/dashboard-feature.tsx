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
    "2S7Z97HZPxi2KMGf3RfjV6fBFyb7jPefKcDapkNe43MSpXUywEs7gANf2CLT6kfPXUMCifCMbW1H5cJNYH14YLAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fmgkhKHZyZduG5Xm5ANqwpw4b3MyELmAhezcpaHp54UcSRL2rhF3xcCuAPjjMVUNrQ4P6FMKcUCEGSegVTDJuTi",
  "key1": "2jcKKBRJZtXtnzCqiaaViPzjTvbvLeRLhbTGcTQvm9djPpj6qthP7PZBGZSErzSteaMXiFu7cULUAU94uR3LbXeK",
  "key2": "5aFBove9ij3EbkqzANX8h1xp3FvCjK9FsBE3GJ9pnEiRk5fRTSbL7iqqcLMkw1S7KpvvAueovxDSgyEYms6VDFko",
  "key3": "5ZzcFhNHqw9eQS1mKQs8rwyzgMVgU3qHpsgvnqtZxyg7kPNjjcbkZBLKymxP3ieCZ14iaFTW8nmrBYxbY3z5Hvkx",
  "key4": "47uRShtHaCPhNETJvxsi1Yy6FaezuwyqvDE5aTrJQ4pEwwTQJy3rY2VovwhEmNDWknu7U8jQHGbjCcQdGVbpv5og",
  "key5": "58usuZXsMwii8BLaSzDABCajgAKzBp28h4jdnK677qiYLG9QGbX1cDZsiUZCnfRnK619aDeA3Hik3sQfdwQKK5BS",
  "key6": "4pmLm3nzmqowgw3PVgoZKgLMUBbSoLuTd3RCuR2LKfDLe5G1fh9bm4Yv3ScCwTBUu5GJF6t8WooQrcKoaAj22znS",
  "key7": "5ncvGpSo434LD6EBh8Q4YpboQ2mKbPSMKsamEvSco6dRR9At6VWMzVAiHGeBQyqFPmeUJ54CbcyYGJhNCSL6Mv1X",
  "key8": "58x3qwfyPVhCbE8ongriCEqTYyeCCJP8tNg7LSgfbvyAdnU8ZJVs4qG2YmVzRP1a5QAFgvZGU6wNuPKZXnKgFuiX",
  "key9": "43MWazXQFkJJ17ggVTMVvQZ2YxXLZ7zs4ARTSzHBxaTRmBnymkzWTaDPNEjxifPAMww7fxWmXnU6CH69HiQmUZaE",
  "key10": "3sM9V7jgSmSdAbp64zJE5j7YsEcdvb6V9yP8Xc7ausxuagZj3nPEruizPpS5EkPFZkRisAqroVyhsnSKZNXp2ksd",
  "key11": "41tmeqtmDq8pkrcnz4WreYXWmkdXAZzmDXt6tS3R8Bq547KhtZicRgq3ASAJoV8Vs39HuMsL4zahHQJRRDoU7yes",
  "key12": "3REcmNj6mJQ993wXQCAgdLtsnxAzUK5SHNPqPyWNDAhijLpH1bhXPxfM75ShYYkUY3xeqnQZNmomTLNf5NXDQXo3",
  "key13": "ic3MY7A7tPNafdUoKiecot6R24e2gn61WLSuL5oiUXHWjpPFWJgNFF9HubVVAhLid312EG3hi99rsJTY3dQf3ij",
  "key14": "3AQ1CvUkv6moDB2FVZE87SEgcxAW32UcrrVE7Tf9bVGA8UtBYBqKr9Zj9wevXZ7BX7zqHSEcrHj6VGRZNLGTxEuL",
  "key15": "51XZb8aL9Mkgi1fxgbmG49i8GY7mnCpUzT3sSgt4XsSqoGWVysKQPJ1gPqB9L5ePRunYuyqqMwntu6rtk8vYYTep",
  "key16": "EnGEsJN9QjcQX1aYmeKmyjGsydKtZgHT4icTwduXyV9FM7vCqXTPjKERRnztFwvqjpy8YTDAZaRRur2feDfuYWD",
  "key17": "3KPacCudfnFzXjRHc3nZFEGEv6twkAaEkMMSujvuE8iqZFbb7F1jJVE6X4F2JhQTYb35avTG1TY493gojBbZFjaR",
  "key18": "4Ek8y54bz7vygxQNMd23A7JmCds9jab23Hj8HrFaJXXCLFqNUk5pgqTWe9y9mRnSnsVcotS3zT6yRjuZsinPXN15",
  "key19": "4iYHgK13PKXtebXYrBsTnpfKD73CR4D1Yg9RrinzU7wvE3F3AzbsPb4cEXGV6LciAyeVVkN6D89Ek8XXcRNwZGy4",
  "key20": "21DrU77QDYjm7cDBd1ikrEfne5g7SZR5TUxZtEXFHHLxZMx3DyTSbUheemoErN7cT5Pu3CjZdxf9H7ajzed3t4Wc",
  "key21": "5Ae47Fay4sgHAhkFXNujDyWrnN58JFkeH3tX7VpRmgfkpjLfvcurmxSRFctkisJDtJHooZMVXpz8NLgt8hgg9qAi",
  "key22": "3sNhk1amDoNYh3nzHFuzkc7ErmoqCQwVvmm9JQbJHMcahq7ZVbXyARvTw7fTAGoGqQhic2ZySThTHDwtQUPUiCzq",
  "key23": "53cWPp82TiuTi1fK6qjRbJr5MbNvWnUw52p1fk1bDGdEAC1mnvWHMV1n8iFXyVW4m3n8mXf2kmns8deh3uY7vKz3",
  "key24": "3apmCSAyRn31vgfUEmXuHJzTxMkDYF58CTBaKwBorFSjkUyerJHvLgV3FMpjPqzmGXqxFG2jokHzWbBc5CumYHzE",
  "key25": "4zJp5pocN1kDzPFoPkCjntuRKHmNi9YxgcZuDMagDXGkvUCbfNg45VUpxwZxhuFCmze7EsNwnxkWHwzEwaFxxiRs",
  "key26": "T6KWM8xAh6NQ4LjWp5oGNEkUs9ntrUBi8dURqTsf3GZ8kbKyja9UU1Fq8FYfMX6DjmeWSmjoMiGsd6FEAETadxQ",
  "key27": "4TqR4avysYRr6nQ99eNoZ1DKL62pm9So486hMaKU8crwtDprC2Mki9naMb3DYUhjDtTxKDQZkkjLksd6S8L86tar",
  "key28": "29tyV6Fs9Ynyidickx6D9w7ZMyJY9ivgQvGn44zsVERhtUxmsSuAJEoUHbds8ZZ9btzq12o6pvTEK7BzWRMc1dA2",
  "key29": "2qv5xXG9gXX2qUrrvkTiio9gDkVEiHEhARd5jCAb7TMZB65VUZPTB2ht88a33qxxqB8hiXJE7CPogDw1QQkkUrDw",
  "key30": "3dfhyvKJxQqwNPdnh2R7ZvA5iQgR3C3Rswzy7G7tgxNYg9tCdVJ9P8Bqt5XqPEFBzA1qXZbqPmFfTUUKM1aEMwV6",
  "key31": "5mNSzYtQXVU8NiYQj7oHh5GrTDJDFAx83EEGdpKWVUddBg5fXDhHsT6ZGq85HHVdGoKmt2sBMpEpR76oq6WghYfr",
  "key32": "63hkFxBBbf6arpk3WNsBCBCNDGuHthmEViHRkV7jqTWHG4gP6jVaT9M8n6BgARjz2M7YaLC6oL4WEf5Nm67g9Bi6",
  "key33": "3eBSwnCkYjzARVE4VfMN2L3HP5Zfe2yCDyW7GN3ny8LxNGuEXcyR3GkN7cS3PAxCPU7tSaZVWDV15JrDmxaQ9pTu",
  "key34": "HWMh5X7bZjt9bRusooQa4oPwq341vWwyJpLNzqMrRbyCudjXvBwtVbd5YwYQ9o4KhVfzGKNLZMmRCRJXcGEBjsR",
  "key35": "3h8MmKFmXCkHmWhqgr9KPYwbzPE1qpWj9vQrURKoAK2PLbEfMwPw18LuPkMGTXHiWznwRDtQUTwmEQmkP7iiKnqJ",
  "key36": "yivkGnXe6uBTuEoGant286YUF4EJ2zJdoEL6rHwJFDZ8Ut9kWwJ6hNinQKFPPohYiMLBjwxPRox7NNjSJh2ayrt",
  "key37": "crxsukTNFa36gTNUiFW8dd9XmSgyCb6ycz8REcsfjXghP73JUANi9s3MxucXea5S1dKRqETedenMmppYKXBf2K7",
  "key38": "BwTmpJDvWDXqNwyFbTcdbPr2VydRQ6Ebt3uXirMYdPtyLmkFA5mta7roKFTmMCUpxcicZw7m2d8o22FCaoVFVD5",
  "key39": "5uX6juGLbTcGADbTmDdcD2JUGqMPfShgpZPZdW3N6R9ZVApF3hoRBEAZdYq2CkNbik4Fwx5kZ1i6M3hrr5k32Hgu",
  "key40": "44Pmr9npWGayQtFSDVQrqcPeMHr1uVZEPXYy9xawpymeELkY3KJMKajm7mCcg7eqkdVwKrH3JVJaEg6yaidHAWxh",
  "key41": "NCWm2pMm88Gb92HQiHj9D2vYcSMB9DrpUcU2F4TgcP532nfZ9NWzLzmDuacXScYFxNX883d4WmwwiWXypNnpxwv",
  "key42": "5p9tLQSjpkRdmQ5khPMm12oQDMzXfm8kGj6HRDAwJGnFv5VtwFeKNohf7zCzk8VdKtYajQrVjyZ7MvjTvYzXYBFa",
  "key43": "3hJf7masD39bXM2mJb9zLRBdLjYsVQGtkKvcBSkGywNTsrq7HuvbRvSXYk6UaFx6DZwNbtaFAuBZq9tnfwL1ywzb",
  "key44": "yH1GhM4wF5L8XkpxWDCQhGjo4cJhvwqdAz3Uu8gep5sinGqgGmhLJbKeNt1XKFD1bJkaJxnMhdXjR119bFKXuPb",
  "key45": "3eDa4LNzztHhVeZ3H846DmMWnFTjnXrGh3b6WGPN5c5BpkoxJrtm7pkjnsFEWQhorDkbaHkyuADmPFMT27BDWPax",
  "key46": "4p7Gx9Nk45hffVMh9QLNQWgrS2pXf6oVnJxCsMad5WUNdTi6WgWCoyt1zQYMw4tLffuT1sQmabiBbjWkQjGPPSP6",
  "key47": "64s2qP7FZwaknVAMpz4AVp8s9Gm4V1NLvaC4Wgv9qJ1tR7YJijvPNU7eVZHdBmKaJqRHxPpjLaEiQJV2LtK6bKcP",
  "key48": "4okvyYwf2sdHLdB5bUEZuCn1J628MziqwU2w5nNmLiriF1D9294LHtPZmTH1CqaH1bd9rABkYYH8o9u18bxGEJUJ",
  "key49": "3DHjhgH4e2DTCzTSYfnr9zLfeVowqKKquVLGPWGsh78zW9rcH9pbAXMKcv4sM1DXprL1NQb3u16W8PLwaDntkjcY"
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
