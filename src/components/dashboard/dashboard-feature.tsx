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
    "3PFuoZFz1KSLg4ZxrhszSC2KcCdFKSNzhH1oWzHEDayX7gQNDMacNy6nprgM6WzSok7yDHNimMZ1rfePELicsV8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CwSuJaH9TnW4dUZVvJo2Kco2iEv8Vg4d4xVifjQmPc8vWs6HM8MVfNQEh3Y22bxPtRrSZ69rRwqhBxTz9Kvaaxp",
  "key1": "4tvzSzJzKEAWnFUxbPHKr3xyDQAaE1A4oz3ZsNLzdaGv5CtvDJJ5Jr8Kjz8cg1Dpm8zbHi7uKYhHMEdfsnLknPN6",
  "key2": "rQjX9TGmkQ8W1mF1Rg1b2onnWuB7pGt3XVjHweTiY5Mwyq9WM4TYNgimTJGFyjqto5Po3iFgYGKUW9BqUSkWFPH",
  "key3": "2LGHYAth7KG9GNPDQSP8PFSwhi5YUg145ARh46oTaQsYR6fkWc66y8Sgp3e4gJhNoGA4Yn1WNBknrgXmKwpu9sTK",
  "key4": "2yPut5TJjzGaCnypdBifgy5cRD8u8qWF1xKaD3MBvY7RRqSw178oqHNyxSHtf3J5inHHijqHWh6UGCNPsRzypobZ",
  "key5": "4tfdCvp7qMpxJALaVuDeHQjoKK1BP833uC9dUC6BTyTYkpWXPQRrNpQJ7CoRTLeFFbhUyzjM9Ms5QPsVxzCAiyom",
  "key6": "3fmnHtUkwqWKwFTATpri2Df2SsJpVC3c69U14a5smCcYwoc3rgLsuCerW6VQB18BTbff3dSPdJcdRkgAVA3di2e6",
  "key7": "4nKWuH5ZxjDszt9kfKtqeuxyzYrb35NGFW7s38mL6FEM17nqaGVPbfEH1yDTGa7WGNF5GktwxwF6cQNQN82QxApG",
  "key8": "2auP3TsmyiVAucnUVes6SvWjbVH2wwzVTgynkUNgC3MzNfgVEqbHsdeFDn78XRF9B84eAizTaYBbJJaLrasnS7v6",
  "key9": "JN8xf3Za3WVkyLXEvorgUFeWeCwuuBLkoxujRbLn8TW32dqMfJ6zGsoz2unA9vf9jnmgQ4asLtg3QxXnwmXAQbh",
  "key10": "3oAy4DXTvzrb7KkhP3oc8fN7g9agwKpYbaQ4Cmu4Bk71V3wdjqVuGLRaR8nFpgEYdUGYRLXzP3U1RrYcohvuDgzj",
  "key11": "34HUFuiZ6Zz6QP3yBstFoDgvkQ8etdcwPg7NsbYWWQkTvytPxG2Ht1y89aG6UbmhRjrX7pkopXfF6jJLUEzNvKor",
  "key12": "54EYJveXnLXBAuiVmegj8ZhNpxqgfHLQepyzCBF46kgkwrbtvrr1vMKBE97zcyb3N2yyufXWuKi6W8AqCREFLKnN",
  "key13": "BPknzJip4zamiKAAjxacj1ffxFTWSAiLu35mD8UF5gFKwePE9MHseLCxy8EX4k54GSfZW2ZPMyQA5RSifQMPc22",
  "key14": "CBFiNXAyCvjLvCBNo71hoXeUV9PbzDquccAhjE45yoDHh85J5MbU11a1hoTMY8gqLXqUwfZCBEat4jqfGEwdbxp",
  "key15": "5MWR3RuxaudQKNzQVn7Dmee4STgcQwmH8EFuGS6FMMU8emt8G1kJhgmD6DwhWkv18WyGLKq877Dfq42UUyuy5N7W",
  "key16": "4qq756F8jzGzFDb7Sf28Rdua7KLuzzkks4B5LYg7F7Nhb9ui3VhM7QiQxLJMxYLNuXBXKGFS9NqRF1uG85GePqTG",
  "key17": "X2KqMqD8ZRU6Z9b4rZweDNqgt7TmSjMeY1ZLj7dW2ox57uZNg1TYaSRJVbyyNF6uE7SivSLvv2GWYVENwmupkR8",
  "key18": "2SMA1rKESku4n9MQCKx4fDyn3yEE29WgS6QURGU8k6d9hGpDMzKCvL8tRaDnokNWwdyW6Sv7aL7zpY3QgU9gPf1s",
  "key19": "5yMVeYdSDH2kTeSDNYiVangYNuRWf87Ko7aEYDzxGQX2N217ohGqX87oDQBkuGm53REqQochwvB2L8fkhwk6HxEL",
  "key20": "3PUMqvHNAgbw4voLnQfMqETcuwN9dNwaWLhaNX6gT2x1q2rsascqzNvtBzmfYkzsoAgKgoRCSzbAhdwhEb6gdX9Q",
  "key21": "2LN17i7Q6xQAoG6uMgJEeLNHXPxKB1xHr71LmuYQTbFbGiPft55m1PrCxR3Bqu5DF6Ct2corgdCiGSUvmgmS8ve6",
  "key22": "5ac3rRPKdQvXY39jozbN4fCJfGhJAsueebuwNHNXJr8EBg8bNCLDbXZexYZtup5TwbbrxcvGBXsbHT4vR5jcQB11",
  "key23": "2yD61GBodZMjxtCCXiELsdQvZ67s7to3Zb94mGpA7Yx1sWu8EYdjq12KbN5ErrxTbm6gXBeq6zdhsiSjiTGYHL73",
  "key24": "2kXeck8YneYKphjuvbFRzJpeesxvjf1LC6US46CHfQSEwESytLtkgptxwtxpdKwFBLJBg95NeLMUoGn4xmrPmbVP",
  "key25": "4VpkGErkW8GkmkgGvvn1s2L5hpzbgdmBoUkQuJ64vSunZ66EFTKU3bPtRi4Lfa9DbsJQdUrKMwZXhuEZVWd3y9tK",
  "key26": "4MLN4Q9LxahrNRC4cLSn7cVSQMQ5WcyK73fnfrC4keW3emUSACt9TgHo9j5CLYNvB1SBkD24FDYwkq78aYM1cdJA",
  "key27": "2m3Vash8KV1z5RqJU6rZ7cp1PBKGXtp1NSxwSvqmEkH57qFNEXcwMPj2qKReafyKdRxFjVk6kjA5N1vMY5KT6vqR",
  "key28": "2rPw8d2Uo3UamJFPKdpeqK1o5NCCMqqZe3ZRaLKwSWATrsjutd6dHEYt6uAt7jZkDoBMvu9YYSDNWJzuGXsNk6QU",
  "key29": "4A4rQ2u48YW1kwGHafDKEfN28xcSNYWuQH5JBrCkdX3kYXPHy8M4zj4BxeNFHVb6xcWrHPD35jrbCmbunBUdgcEz",
  "key30": "39tugrrKV1EsnXYbRCqPomk3aoasZXaCjiifaW5R1BiehTz85HHDoi3YuBEoPRCk5x4koNHrP7vMM8npro6H7rGb",
  "key31": "66BZdWK18LD64miASMSevpgbxqDCypWoLfMNt9LeKTEPRwe5yNe9fLGmtwfqy9RHFEDKYeoi3bSEVEQyRh472Jpx"
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
