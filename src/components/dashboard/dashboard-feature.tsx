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
    "5YFQNTbBvobzBvtWhJhWQW3HtKcUszSXfWCRn1WkX1zQXvWjF51sCi7XjWZpwBDjdPhtVMn1LLMrAFETXAvZxtHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABHm8BHTfpbiejMtc9zezdGotvRV2ggkBT2TZyjYgdWEWBRqPsK5mFYvLni1mroxrYBrwCNKD9c6gJDJRZW1NuH",
  "key1": "2Dt3Cav3XS9yfgWM9MaDnKiubg9bt5U4xqbQed7AHKNnahqmHjdJbT94nafa5NnDbmmydvQTrvxamoB3qMa3cK2C",
  "key2": "2kvysMe4utb9PDo96EzQkdG4VA1j2j1KRziBrW7XSpkPtST8CcT4pp3zA92W4Mnx49KKtjJ8AjzbEDXMpj9hxTZr",
  "key3": "5DnC9MhBR4GCFBrLkKnWQLrnFmZqPJvNHudsD9XcrC1ETvr4vdbXdQwzFniHiSTxtmWcd8YrrPrG3BzBpnqiRGVk",
  "key4": "2yF43brpmwsC9fu9SaFCY4F343RPYoGQda7QE8mjD7k3oVKK23PytUGX8z77BGVcVB4uGdGRtpq6C8PGjn5oegHv",
  "key5": "3GB1FSHZ7ii599j5mxz2DHfDLM5aUqYxD51pvM9wY2uzhtB6JtwQj3u1BpXHhP5jaWeksp1yQioJuMxMnEYE8egH",
  "key6": "3JEyGpm7RDXPCesentjQk5hWoYUveHnJZeUr8RvBWSy35TT4YrK1MjMd4VWaknjeWnw1EhgkyN5ZfTmUjGeLLd5N",
  "key7": "66n1n729my7oUfTJ5ZCF8G9p39fnogxo9kzQJv2SN1nsA9yVGh3hi936pCNTw6sDjyrHMLmRbdJd5dGK3XuVu5Nd",
  "key8": "4nPAidB5Fy9VUjkFyd7AwNJd6PuZ5hY4vBW7hsw7T8Ljk3pvHLrghGmM6PdkwzJLCnNjFERGHrtrAfrWGDi67rQC",
  "key9": "5UocMLfdQKuLa3WKPzSzoSUoLLzj1bjdMVNzgBY46WDgar15pwfQZwJAdTEeUcTKbF8zpNWJPcTTu5XJmX7yKeqJ",
  "key10": "47oApG2gyYpSix8KczymfufGJBTFqu2mjiYzgm434UoRkcYPieXzDZb2K8qjyjXrnU6bGE1xDQLMqsyo8Hdv5XKV",
  "key11": "2gfw5GZUspBs1qNDaicZWVxz122VjYxGHqGqRrVdVpJkktHZhjAXhg6tKJkYkDYbmJc8WpJRDXULuJcPjBLiVzFf",
  "key12": "46zwAxVp3ywpnsQdg93Xjniy1ykM5bMhBgmUJwFxEzHfcKugdSkML8ooS1foe83FuvMoFfRndSMnopJd44f93LbL",
  "key13": "3HiKCeG7bgZHY4gqu5P1BCNJcbHdDHAcaeFouemUPoaYTBt49trUAQ74J3PPsczUf54AWzyVPJvKUgG1L32VvSea",
  "key14": "48DEKUiBSuHnwjdrTSwodSoHoF6oPmoke8e4DcUG9fKkUuyzJQzohuissJbUirStoxfhj3oeRhQaaeg4abdkvHZz",
  "key15": "5LmudCXzs4yMe2mUVe8Kd5kS4kTkUp4DyNL3NWjVuXfvenP31k1UGEmiXi6769QWKdjpz4PEZzxrqhuAQV5zshmx",
  "key16": "rvZEaugZKjavnD1RdA9oRXc4B1gQ2DZ3W4HxGMwEyRzuBwoezdFaVnF7DMwyb3Rwvi7wwgAiBK9KARc84AgvHsK",
  "key17": "4XQyE7TAkG6bBDwCh58cQid8sm8eCLZhn94zqUbzMPwShRTb71cVqapYqAf4vJVgLx2EY1BVWQX9ZT1NfDgfzf32",
  "key18": "3zAngusuVusJaQorPvamTQpJWzsL6DzjmJufTFYXr61pT4ZjMvjvdwLAxffrapGDhiAsR5WJiybtb1RoAwGc1jfx",
  "key19": "5J7fbCnoMHLxSpE7bwpTUXNzhBNnp4r8svXwUf2AY48ikpB5TkgV7Gq11KQTsBtggMwb6EnXNeTo2EctSDXVx2eP",
  "key20": "64DxqeP7QxwhhMzjrtuN9vmpYjmpLRMZphMadF3bhoGKN3s44dsiY9RGCdJ84oiaJU2tFQJUkAc4rEDUEHixrzwV",
  "key21": "4MA9FAwZWcsTBdqWW8wMvs6umnphwryuhjNwbijddiY8urAXprr5BsEVrafsUwa8DWDLpZwbSSyRJmQDDgxR8goW",
  "key22": "5P98UsoiiQ26tuY5RadL8w9oMYjjTtq8x6uuHCKERKKJdjUxM3hDe6tkzDnNPs2NwUvfH18W9smR8FmjvoSbdaBK",
  "key23": "4SQS2ExXhYs5YhFVPWpHtnVMrX9yT8CokXWti2zLpjjxUmdEbYqdBNCoi57wHyiyTG9Y8tbqdq7yHM52Bx9UEUv4",
  "key24": "4kaSFvSnu2i79SLPks2pp1n8Q4ZG6XLDvqbFTjw3UrRC2cxLtpQBberqA5WVAHiqyZnd89veA5W2HDm9x2eproDe",
  "key25": "4ypEnFtmoqkKqnUDKcbTzkgKupSbQXDBU2nWPwBMXj9Ng5SP8Cz7ZAwsnLh5MRsZNBsF3bXssA35FnN4H4tJkJz",
  "key26": "Cw5N2iMqc66PMFSZRBeHNW6n2Pa5vZvu1QqcwwnJYvEu4DXgdtBzqLKFrmigo9924c7JoB5d2PqNAhzdcWXAESS",
  "key27": "2ycWneQ8qGDE6cyQ82RoQ3uiEf1XnA6Sf9paJcdCibyWuidDKJsdjCh3jbve3W3V6TRPXGGek1MVC6HyUeo11Kvv",
  "key28": "3eVEgkJH4bR5vTj1KV4DNiQcZxkU3vgktbfKZf93YpzSuRCDfdPV7TozGE39D3Pkuz1Sy8squs55QHYFDt7GSPmw",
  "key29": "2yujgxEtYf5ivsAwPNk79faE8diCfUQQYpq44VDU5sE2AaAANG52r2cikvSGgAp1GyBbQU9GmSR7s131y1q6NHAM",
  "key30": "5MRParNYgAF9GNe4mN5YahVzm2WoVNNMu2vZAyGnGp296u6BkJN6H44je8xcL68CrYVpiv169NvqwP1ehAim6JeS",
  "key31": "2uWoWzFgf6a95EftvSAvW5QvKmsa4USB2GHWgVfsei2xRi9NWkFMf8pjaZ6HwsePHLZSgmits6toxT8m1kLbGhSY",
  "key32": "qspA4Q6PBMraLwPpvzhFZoKBYy4mNuesXsHyQnqu9Drw7jH4hxke911BmTiexvRQr9PZ2NKxEh1n7Yetzc6BEUj"
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
