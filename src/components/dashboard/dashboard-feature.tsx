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
    "5bShxrX642kWX46C5YYoHp2kcUb3ekkcnSPs1Yr6sYGQE5afaVU8BG8Bq4hjdmLtmW1sTkxTqQQR6NQdM3zDFjkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34p5eapijEfaHGqdb6UDcCedVtydW6NRzLh6AN5fJr1mCwDzWgeZPxkSWuz25DaiVocwhtZd4pgo3hWLweumMyvp",
  "key1": "tabgrEmUbZftSTxQxiesmP89duFM9ruN4kUXk1sbSSU6RBFFBYd7ZBaqN5Lnx29yVEHgU29hN9tPtGUc9bsirtP",
  "key2": "46YxRvd1J4B4eVe7zhTnstPgeGQ58sfwkobCWCfjjXpRwgicybkt4qGHtEbydzbQhZmybv4c3qVYJLQ7iB55kFDi",
  "key3": "2WQfqNiGHA9hD2ikjZKuf1ecvW4mos7TtCEF1tEwmCC9LyDw4D3Re6Y4Q3CJMUv7ZAgTKdR2TYEZKW3y9qAsUB4Y",
  "key4": "Y91u6vKgbMniivKR5DXEFDDXTtKCYiUCEJeSySNQEvzkCPEzyobezywrqpTuwxZUDEPUWkRkwdeWvvAD1pgx4BM",
  "key5": "53832j5wwRHs1mMgWddJpT3YnwdyqLz9iLZ1rjFMUY1huwj5ASrcSBd9pM1PpocTpjRszYdGAQijFbKvadEaoLqo",
  "key6": "2CEukoRVhCrnRTzM13CHnQ5YdfHrbKN82SNH482yikFExGcPNwiBTbFK6yNcnrzcu1hAnCMQP4tqyujcMHvu1sbK",
  "key7": "awnk1YeubsUWQ22K16ZZLTzmKyvyqWENVpiXJMFHVad6J8cYMhvv7U6rGdZzAiKxcP26pTDHfXfBqqLPAG9SyWn",
  "key8": "5p4iGqTtaFpKUgZsg9LfzCVuFTgnRAPpbagRkX1Mv7hvgFZ8dMNKMTXdsZYXWy6f59D1PYThwhV2W5a1WDxYHNsb",
  "key9": "47GRXaWciLSQWhmLwt6ktSoFsWvmMVsbeT1HBG5LbSDMdFrDqP5YGUXCdREwjivGttK8577q9uPWEJzfD6v2pp6r",
  "key10": "4Sk63hFgwnbJmBFPhdRTvXPYFo7UQ1DfLrNEguQXTZQkksz9cWQBWCgpnJytPm9eH6byxtQenf8qa6uDQ6MWyhzL",
  "key11": "qNenV3Hvn74SQjwUuf8xGCbP743Mxuvy14KFWaCnpo7iGKgL5rGNqhbRDUjtmfjFy5LC1ot8skCFNEc9xMnS2d8",
  "key12": "24HXzutazi19JEx4pWQANZKja4k423XDh1hAAa6oVjeKj2CjVX9WT92vKyvtsozf4pGbkeEES2VS7KnrfbLoKU9J",
  "key13": "4gz8WjNZUHj3FtBinfJf4ZWEws4sqGjrovhnSv939fehZ5mhhzH7PynvYjtF28J8vhJzPjVz2Y2uqFExr1ejDTAX",
  "key14": "3ssAoyHKGk2VeRfU19EYs551xq4h2eKHPdhD4wYPRGAyApgPathrAJ3qdjbZkUVoS8ZPwSua4eKaSa6Muhzx17Bp",
  "key15": "2xVAfPgaJGwXqRj8DxtzdYLvbmn4WttL2AXhhDHkReaUDNrYbdF4MN1Xogi76Sn8Z3NYhbQ5xEfRKpqcGoChZyFi",
  "key16": "5KzmD2PWgwxYADaLoW2NzAquY45nUoUYcW2W2NNiGtyJhrjuMuuPbCwaLLiCqqCi44f6db7kB15wsZfz8Crdykfn",
  "key17": "385DHmfKxcfSbr1H2GRq7C8mN35XmzsDqgzf6nBD2UsDbyui7S1o97qSeRC8jPzQ869uPm8TCKuUva3erbX3mKWS",
  "key18": "3C1iKzCZCPdQVkWnPZREmH4dZgakoynfdzoUUCiRb6xjwDGcTi6yYkUoCWRo87GgQ4BeHZeu6rCj4uTpnKZCsCXG",
  "key19": "66sZxP73368sdYDBYsqNWeFMYM6GfwFx3HC3twwrbgEYBKuc19vryTnuv9kfPLwTcAYFYnNkaPEg1XA5Yz49Ex6T",
  "key20": "5v8M1mYLe8EpF9v6t4Frb9AHw36g1yBg3s7abTGBbphowRE9ezaPmuDd6c8V6H1f2XkGW842S8KX5apNcTAeyTGV",
  "key21": "2VwasXitciPdUEBYxLAcTwdCW3Jd98iVViF9iJfbboY5giv1tv2vJyTPERC3PK9TBkzyC7SvSaaVHBaxsQfAmRiU",
  "key22": "G2SBDds3456JLCtZqaNwXMawhBGNq7DFAwduTMNnj8wpsrSg9VJq9BV58HjDbdUPWSkqnjXGXYMkZYHiGcRSUtR",
  "key23": "5hTsjCzzUVc494cD9JYE2N4ozxe6dk6JtKPJXo3kRNSDvvcbJFrmfZRDi3JKiRBLdz34YUKN958LFfHfVimNNBJB",
  "key24": "ziJxHnZLTwcxyZQCGBYCxiGqucrXtP9CUwK3DxZRR8GZ4LXusN4hqLnuRdniVdGdACoa31nJuU38jbmKGdB1stw",
  "key25": "5t1Nw6EgDTGf1jsjQjwyJaewxUWRmfzzk2UL4yLQp3fYADYTC2EDvnhZ38W1cao5FifcPbBScDG4BKrraSXkSj27",
  "key26": "3azTUhsTb2FGvaFMzVScgvBoiRM1krfruG8oQxak2gPeTf6RiTxtGty9g5xfg86NUVKCLmd8D1VMQ9v8pSxYPzua",
  "key27": "4JjcwiYbnfFCFpbprkyccvf7HoP6ELskYNYnkMsqESPg2nvRkRdmZSRSWbqBg982aiWKS5FvvRbaoUp2cE7S69H3",
  "key28": "2SoLz3GbcgzTMNxLEmCmJGTgxTqfTxC4Eh38CtYmJhGUw9Z8PnHhbyxMas2rwejsranmuXdpasrbyt6AaU82uhjt"
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
