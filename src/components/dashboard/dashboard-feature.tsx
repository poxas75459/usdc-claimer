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
    "31R1cfzyY1g1gqtXQsH8FFm1gQujVZBWfajzYEsZNHuy3HUsAr64TXR4FsZ6F7TdfnCQiohUz8r4rc1rYYt6VK1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bqQnzxFRBKnc3ui64erxL7FXPWMFvrenZeHp2eWTrW15XsK4bHqVNiGEDuAD2bqNLUYDrJBT8icNHnwG9BsS4Xo",
  "key1": "2Aw1hFocEWxNuMrEiEQkxju6znFgvwP1kVkEQXyaDdaZVoD7RhDsxLZmwBDzvor247D7B1SuJKERArJLyV6TQk5J",
  "key2": "4nChRZN5H44y1YLW6k3FFWCaL8cViSd2hZ7QuDp6KVshWYdpWfw9yJF1pXQnZ2eJKzwB37amuZuwX2UMaCC6s8Vs",
  "key3": "ae3XXi553oFKr2nc94Rf67CNdN5L1pz876P12wQ5d1FmucGvgAG77ae44nAY2wdYMpZaFAbvrBsvSH1ZSgcf3Gh",
  "key4": "nE8P7Z7xYSeWyGWCmfSuTY8JVAb83RVvJrRWJgNYBHXve1kJkCtXTSze7t4B2qzQfmXPWmnZmB2bofyxKCehJFV",
  "key5": "5KL8heW5ktCbeHa82CXH4eJXXH9fo7pwY3fwXR9DBkgJRzeT83gghwJPA672G9TYcs7vNbM5TsuPXpL6uN1P35PN",
  "key6": "5XLhyxqxZCs5D1FqvHu5XjBjBSDpQ28SN7YpHvf2MCAf1yCGo64XteTRZ8o9128XxDjcz5srz6ZP2tCXBaqgiidx",
  "key7": "48y4WiDowKPorrx6R5jPY3eSBor6P4twYdbRAbkCC8apWPJ2w9izNRwRB8d8jGEDfqHTsw2R4p7GniSHCrppejDd",
  "key8": "4JWe27dgsqns8eVsWZPt96unewXrUkF2Wg2kZzYUDf4NB1mTGSWn4AqhPskJswb9aHiM3mTX71xwKgDAcArPTsP5",
  "key9": "3xWKD2HbbNtrhZbV4mJhxa6p6mqSMAT3s4qQDFL65LMy8v56BUicBAR6ro4UiEi4ZG1G3TszAXBiaY9FJeHcXoe5",
  "key10": "CcoBvuGnzUdSjmtwT8Ru6d6Xe6vG7qwP8Dy4HohGkDznh3WvAbTVDTxbhgQkEVGnMdKz9Pcj3SaXRt2PjLxCjw6",
  "key11": "5MzvrfRKsuxzHjFY6GqrMkkcykss3TCVdLYuWXdqRyPpo9zUaCpBMVueA9Z6fqvudu66BsHGAtKNndWhgPDq556M",
  "key12": "5EWutv15ZpMyJQCmmnwPKqSRnD2QQznbMedzeBhEPUEEVj8T6WWyrGD7fa862N128EK9JMqcb7rYHtQYh244jxRs",
  "key13": "5GmHqFic5Bcm7nAVyyugD1WbMiqRZgs1rAvNcZB761QYobChQJMgAYrMfoAVRv8uXgQBAejXfubf24ZjoYVeMAZi",
  "key14": "2c9QqApAzd2wVH3pcZ3EFxX6xCeuVAPDzQ9R6wX1JS4LULeiKyHwWBG3yxkmsyWNhryMENAy4w1QRKNMp1nNRLtZ",
  "key15": "5tEiTwzPZ2yCiGUmZWmx83EkzAm8d1MQqBfW7cEBFzrxgeRXk29iSaVJQHsPR9i1isV3xZm5K8tZBSqmWb61ENbA",
  "key16": "2mKgnTkGXPTgGpbk4aEV3Mi5aBfBtKjnU4KUNaEnqkW4CKi5xdBVYFprg8RN3DGr6Ric3TeTyWaw1YWCjiYdbzmC",
  "key17": "3xpPe1apy6K2AiJaRmS6z3uQ9g5mt6me6iQugypdTkJwZqkrToniyBGAPcvte5t9dvbfS3Et6gU5BtXco1hq9jEy",
  "key18": "3YQZadk4Pzup42CeovUYuw4sgDTSZKdUy83X8NdwpXbb2JiurNLuA5qenXcAkkpvc7Q6iXmTC6hZ97FTeFkignH8",
  "key19": "56E6hoWwfzeSEibeQnyw8GCZ8Pri8nMEVmRtCmtweF6v1U94YEA2U4LaTErEY7T4x5thzYV31XZDZn7aRVkk2bxP",
  "key20": "4EeKE3aQHAGAAoDtGCLSoHBNfkZSp5Jy3yEaZHmtxZrQMXnBeb7j55gKsaGq3jeEY4xt8w7x1gSEx4V2RaETUyeY",
  "key21": "5FhJf21aemSCzyVQEbuqV369Wzr84XwBxdRnUNtkAn6tty1ptkL9Jx5zw5ep3BrqeK1AYXKt6ZWTN8wgvzQxvcCK",
  "key22": "3JJw4DEx9sZgrSgU7n5GNDEcLoqQn1wxn7YfXfCZxgAbv5kgn7nYtgTTKSChaAJLcUJpkMjYtw9kDNcjouJ9LuD1",
  "key23": "2TgbGZ1tcP4qQ1fymjxMjis1NBeHUQXCSmBHXGFsuHU6qYxegpvYJvvGZq5pfiCNxxMt1Z9XLuRgMcMHUTBbDbYJ",
  "key24": "3kTemKjoihhxq39XF1Lm2pUzA7CuqfFoy7AC9571rspj7nQf11d8MtrzsizyyvKknA7W7gJn7HyGq9atq5nHX8h2"
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
