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
    "25yVNJFAT39E5XDiHmkaYNVbP23CLWm4ghEJxbLLermJpCa56hmEkXNJ4hoVqCow6DjD3cBbLXybd3pvK8D7zsfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41XjQWezyvTvMb82ZSB3v58s7XhQWJwksehpbBgxgjd8vHRsXXQgkBYKVm8RiJUGja7FEYWngLfQqbqajYHWDP1",
  "key1": "2teXPB6YBpeod971b4SABq7tGkp8stQZhi4YksNapJ2E9HZR4ESToDTQdqJC5tSsBej52NpWtTcLMrkUHYJQu1WG",
  "key2": "2qj4PUzsAAhzEei7pAdhnYb535683gckrMQxVAPA2ib98et4DM1QAVoXfHpXuifN2aQZgta97BQGDrWLW15CCz3v",
  "key3": "4jhCG6J2wCiGdhFgB7Como7NcgbkT2L6Ubc2ZFnzhG3LwNpLAPYkz15XR96reVohqoVySX2cuBpq5ASG9Q6fNAef",
  "key4": "2v2YVinFxhYUZFXEBitxVrrALQ2qcB22szfU5nHfEjT12YLGtNEoHQ54EG8sjUrDUE8wFGanXXkfPYZGsnk3xn1K",
  "key5": "5QJ9K3fyLsz7zQY3e8d9gCZsaTqMYiYTS1kMa46Dr5rsC5swJbXhXLgJAaLotwBpUm2ReVP44cX7XndrbBw7iRrs",
  "key6": "cu9sHrBFAmmXvewBsRPJM6FNHeadeJh3MBFxSmj9br31mEx6uYaa8CcmefUdMnrQCoGZbALeJpTsuH58CHqAHeP",
  "key7": "46uRYdC4gc8oeCYfjibwFfJ9dW5DATgzsQnT99PJxigaL45AfEcLR8VmT6r5oQQX1V7yt1B14E7s7sWMyXVfSFTU",
  "key8": "59yZDZkoVJbAi3CsK7aVKQ9KH5qMYHyKxzNv6QfEGgNtwzz1CZNc6y8DbQ9g3oFzoA5Lh8pZk4T1LgBzwd7DEs8L",
  "key9": "2VeDR8hdcNhvAu1mCktPRtGLG8i5qfLWTS7NvdAZVjxtr9qSSiDSoErFn3t7hj55tGgMfU7hYsuNVnnkTQGywPdi",
  "key10": "2keLTvyzhvVu8jy5k6tnMpbtLP3xofKowyjXdJqQq19K6kGi52o94Gnv4TT6fdw9xfNYoPqKEr2T6EyLne2J8nAQ",
  "key11": "5cWzRvheKTAZxw1KKUrZcG7d2XghN4dpuK8uvXnEPxuSdFMHnkue5x8MsMcmsZRVps6CeaA13sR7oBdoshg9jQRo",
  "key12": "Zavm5dF4vpvSE3G5xwUREu7TTAMX5ZaLxAPj8PQFXjWJAVC2LRTcC7ELFEfPn5YSxCxbxwBud4dEicGENqC7LUm",
  "key13": "3x5UBWWL9npUeWDNjX4Nv4Qjo71rvfNWPwKSWkoojGJ6JGAXkV9SE4hPfGmdvxjqZBdVngPc1YHBDPc7z8qkXzEj",
  "key14": "2GDB7sADQAfWQU5GnXJDdsFyCYwX7JMAymshfDZ1Dw62i3YaUqaxvTkVjei381JYF6Pc35KBd6rvy3EHJxpswhKW",
  "key15": "4GNcCRfng4zD2pqum1LHaXrq9JEwGkr6zrPKZJrJzrPm3exU84ymUYigNUsi8v8HuUVkQ8E7Nzmdt2nn9JKAf9Ti",
  "key16": "3HUx4MvjtW17H1728tVWSqJnaPJg9UDUxRcyTquQqbtCKAyAd6X6aDaUXXr4wsBZJ63paz4afgD8McaZkPM4EpSd",
  "key17": "4sQCi3XFNBW7J16kUENdGFxzHv7Eh78u8PDxe9owKYPD84zR6B4b1CGCXM3jMzDvy3z7tHBbzPqJnVrxefhRiTfB",
  "key18": "4WQh2zQt3kZRovGqjB14jvPtoQa5eJqkXsLx5SVGBWTjFPEtrh9kZiZRTq5eqYPQykyLL4UhYPMoMcvypt3UX32b",
  "key19": "3xRJdj6zxPJP79woTKMcuoQ2DY2KDg3dMqZMKH8aoeBu1spo1HhextEbErwyvDkxYo1z4ZppNW3xz7Sc2qfMWYrN",
  "key20": "3UbAovkQQMAAhxT1TY8H8eHXySyMgFLgyQ6nn7YjXR2F7KWuoj3E9avybiZ4ev4Gzsfib8mVSXd9BoD7SjVe2424",
  "key21": "DNijo1TZLvrxZcVP19oH1UhWk5MYXJTikoUfFkwT3uTTQa57qCDFPYy6Y2VTFzxBBhh18EaAzkYHWWZbVBDNfR3",
  "key22": "3bwMGgFgzfkTtm1Bv7EHS668ANhkFEfE3j3JnjFjcsyJPrunsR4arjs7XHmYNMFbVV61kjKb2Qm6R6pLu1LqkMn5",
  "key23": "4GfyLLe4grLXYjQmbrgfNrZoGmvNiPHf5Mt96qhggF5BhauxfpD86PhTtXoJuqdqJ2S7dLdAW9bbHHM5dzphjraa",
  "key24": "2G5MXkRqoY5xLnHnKhL4qx5SCf8ENrbpEzE6fKVpnrEY2kmpyj3rRsRGrEt3yMJUAbbzD8dF9YYdqV8nKLVXPnz1",
  "key25": "4VKmu7oSrnkMFD1oruYB72S129JGGVg1EvCH86vKQjo6fZkUZa7jyUTWCiBjcRfh8RGbwoVzhs3JGmYj6Duj2GSQ",
  "key26": "2LzJxeUSWN8jEmPeMyhGZHdK4W3f6nc2gfrLtcPJXK3MzTHmAz6vAtsBu7EWMAbWQ7p5VujrcGkvdCfJcUZT6Nb2",
  "key27": "47o3ktS7eoYuaWMyKTXn11eQbNyjzewkVMMcLaSesNSqFGQYVYXfpREgjNBzNPQNke2K5bZEpY9Bzk2JBBpjLY7s",
  "key28": "5rwBZZ5h9WoYaUKuMNRQAPMAta8a5KpDzCmGGX46TmnjJeA9sG7QdtAKTfNfknUwuaebFjL7GiuUyad5GiPpPG8v",
  "key29": "23aVXh8CZJpJwpfWW2mk831ysNZyoSKSiCGgMqdo9cavD6Mqyh5mieSreV9kzywEfurPtkCJ3Fyv7kuFxyPCoMCJ"
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
