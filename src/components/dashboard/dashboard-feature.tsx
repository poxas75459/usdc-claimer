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
    "31Gc7cXK9YsqzCnpf9dTS4uHCiWVhPRxHQ9YXDQuo15zEfGeiePasJ5cGjYdY4gs5BUhYEzxGxjcEovP8ya8AC2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GxV7Jakvb5AzVokdfYVYUMvgaimQ1KRc5GMvFYsn4PufyD2cANeEzeA8BQyXEPhDvkrvCHyrUEUQPfASFi5AKP8",
  "key1": "2ED3Hg9RKNx6pg94M86u1aHEkyaJSyNCjUG7YzzB2xtTxiA4qhZkGP3KAVYA5GGHq9KNpAH6uFKR25rZ8GMVjkgJ",
  "key2": "S1wKPsHs636ohVzgQ2hHyfBrReF18xueqK4Yy28btkvzJYetsWbRwszRuTzvz8VL6u5qPY72Lte8XhZL2RG7vTm",
  "key3": "2T8JzgY7q6WK4uJ1kWSUkCzWkucJiUcPzC9CBXtzmZW9b6EERbsZZVu6cdHGPPG6LkmS1iTo7uSRVSG7VG5VgzqC",
  "key4": "95dH69Xjnz3RA8g2Ezy7wd3aiCpWY3USCmiDVwKU1GhTZAHnkqVwWGXrvxuvvhDbgRmMQ2bA5tJcf7jiWt6zcU9",
  "key5": "5sa3qh6HHHM7oki1gxJK6LDDkt5zVAk1PmZAtzjWxQLuSu8bM76pwuGcAcjsGkPtcKj2wZqHhmjuLkhkSgWpTz98",
  "key6": "3gzF2Y53fzSC4Ln1VWqK1mi648dPmWsbAprf6kfkkF8BFSDgEDjGn4Woy3iRfH7qKAbJqaWgi9dnjAdxvH5XkX8p",
  "key7": "hhmucrhFqXGw5ZGHUZBZV1M24ERwpVbY2rj13oqDTSFjnMWkS1soySNaSnSCb6dtFPAJ4xbhhmGmhqKtLYAigRK",
  "key8": "rSM77unw6AtwFyCX78mUyZzgq4fDfeSBTuCSJKwaZUS687cgWwMAQRtaZeNPZZomRazeC9oZZ5JH4d25MN9uM8c",
  "key9": "4vdrzVkr9WtAzhRxCfbR77QSZ7skt32ipZD6LbXzwN4VdX5qtJaj6xGR2PsUycEQT2r1Me5BZVmYpFayi7wz5pxM",
  "key10": "36YNzQ1WWkNrEPqcAAKbMkUdWWo1y5JCvwpgkbkT914h4b2gX9mer5H9ffpNQe217uc4ae3yRSySy1d8x89b3Den",
  "key11": "49cyDmzn7wvc2FUgGgiBsRvdGtGzWLSpVduC6jz6EEQME5tkXbrgEvisREwEAvhdsaF4LSHUccXyz4xqqfnsgyd",
  "key12": "5cKtCpZRoEfwRrArU3SH99UEguQJMk12QZmd7ijA7iGDqsg2oxbvpBiJ6MWF3z6vWiutpSh58mHRf4JDQh4QpYMP",
  "key13": "RUS7A66e2HpDtA4Jjx5sboynVkRYto8ykRcc46JfMoLQP46wb4PH7GKUXBeEp9KqPBoxmsEcEGq7gt8s4ZMMa1T",
  "key14": "3LYo6arrw4xp722fyj6Mw9kL1rPyFGQYqUrbWnwQB5gE3FJJ5Rf2PxjLuNF9P3QPcupKDQzNKBDqfT7TwQA35BJV",
  "key15": "2HwLKv1tGnAPh2hKGPR6snqMEo2dKhjDFwb2utKcAsZTXoC2MeKjWx8PTDTqQX7wQ2uTtESd8zcSySUvDs1jkJ9t",
  "key16": "3Qgd5eeDxFWiMsXzwHKYSCDNESTvEDeQXAZuDavtY8MRzTdRxPFH7Xq4VnGes2rZxERhWFFBBrvin8jFRkwS62Gm",
  "key17": "jsiArzLpgb9SF8sEQCckKGdxQk8wpHCYjfFVutQgR9PBdhVYaG2fdX3sG3aDmHME44akGnyk6A3UwYnXNVYVtdv",
  "key18": "YoKnn48ZWUtMAVwPYkX3EeJCDgLmZHMkAskQG2qQAdy5VWrbppQqTqNSnVc1vYSsGdw5AyqNbVxyripvdNrohhV",
  "key19": "3DecoMcF7KsdDq3LAFVKn6HJzx4sf9pfC3ypkqzR26VCcFo3NDESztXusPpPq21Uu2LKH8PaMpxUgYVk8tG6crfA",
  "key20": "9uBBKP5U2hktyhxcfQ5qUqKfh3NFcVTgsjovqEzvwe7c81nxpKG8PHFz8Jj4mTAbz6SgzLkogo7Ajqi86FCP7uG",
  "key21": "4JWk8h2nNuyMsmKQGVpXAvNAqu8hPrEDb68zSK5Rvfc8TUksU5SF6NLuoWebh8UWNH1dmkdd7BxDiwGukRKsMMe",
  "key22": "5TSyKPE4pfJSEpZ9Mn1XBLuiFFfwKjqDfxqPBhjrdPff8By5aeyX1jB3tMWLMETQ3HRFzcuFD1PD4hzbykzZV1uc",
  "key23": "3hi99c4vufr5XFyq3Ug62rCC642Ye9BHfZEzNpb6y1XJGZyQHq2EwLk3XRZVMfMBTHhK98DS92TA7UrT4Gd7NqFK",
  "key24": "41Nh44398ju7BRzsR1NGftW35goTEH45zrjXDmnXwWz2kns8tM5JAERCwv6KJHePJ7fuxtb5Nt2sno75T8UPbukf",
  "key25": "4wEZLa6ZJ8323Wh7RFARiUc1d9YxcUV6cpnu9GZxFzf75K2XKyJb9MSv12wv5XPbMtbJNo1MZCKzvx5Xz1po8m1L",
  "key26": "447EEJMfteCCkYG1uU5yJ27U3juaxKQbUJRtiKonoJRkRGv79pPb3VC1SGqVUs54rdU9qcYZV9FwFWAngYb7Y1Fx",
  "key27": "4xWX5vVeRrxizrP7rvWoCmnvtJJysi5o6DzAseJ9otqS2wMjnE5a5WEpAGhwSpvCuGVVopZJ6e4duiRNCKm9LkYE",
  "key28": "59MgKyfLYFW4giY1CsRtJCK2LgBgrAT5oymNVQfVLjudsfdePpu8G7F4Cfjxxr6Fj5S54gG3dJrAzzLoh2FGeNBT",
  "key29": "64CprEvN1JhioTutFcA7dmCo5GA8S6YbpsH15hao33KqtbiU1dFxVG6LPSgcAe9kFjhaLgFDmUe3ezyhbmnG8G6D",
  "key30": "2A4zLHeZ1BnCC9YJNegbfQGy5ud21Wi5dbiVt7LH4jEJD8LEUX6qUj3UoYz1EN9rtTxrmkrrBTBSaHi5jv9mcdse",
  "key31": "kBGx1pjP7F7WwUkEaE584jtFqzrvSk1Dtb4io5n8FiTRbs27VC6yNXnYcKGL1K25MK8e6PPoUERmNsUALnGmvQ3"
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
