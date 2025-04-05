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
    "3YF3k4c8UsBUW3k2mQZhtsZTbDirFYqzcrjkxaVq2iSyBb2tmohmDtYAFF1GFcwwnszUyzw1kKUCsfAwihibcdyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h1aHYDsDWNHp2hujztA8WQ1aQALeAJTWwZnk38AoHCGunxJay4WvkU7yG8PkDD71Nv9eh59Z2ovkuv5AGs5WQKy",
  "key1": "39njzSvznb8C3PBoa5WDL1otK81TsvhCczbsuaeqyDxZpuVCJ29acyaMFjPwGaaV8JVjmeqG5AT9Wau5HbvowrXA",
  "key2": "2WpNWAvKQuXrKr1DWNVojL1PbsEtoLYMUfxJD5QNyiPGqz8tphvjg3jS2n5URb5FQvtWnDdfwykRkiGAbvnFLPUf",
  "key3": "5CV8URDQPCtwjUEKU1Jx5Gv1mod2NvX3hM3y8r49deQ5huvNfXLXgbJesDunPu2fNsr3MqZc15gqnovQpikk54D4",
  "key4": "3dU1fVZXE9PsrnAouzkyDKsqEbKb9ogQrWWid6z6PYoc1vpB8ondJ54rh96kcbFfWk58sf55bWbTgtw8WDeEgxMh",
  "key5": "42TcUbFeyyTfZ9SYrj1rc57VAHhjVFfYdYefmf41ynK5eUKYN6SFRwTxBzDirEd246B9Ju2oErUC8CCErbuveLGA",
  "key6": "5986NVuQSkhq9hrFFpQ89vqBTVsyjmzgt185uCfsF1Se7hjiH8c6e4Rb8y2m8e1HkKcCKtmW6abAYfnmuGWqxCKD",
  "key7": "36xMGg8ShMUxFCGMNJdMVjpXzok4c75KNQZQn6jtGSuKHEn5yR9SyrjR4Q7oyWe1Rxb56ZAn2XCnx6bfrJhPBnhi",
  "key8": "37TFRE597LX7agkvwi5yrdiKZ4D8fmSTdu9rfPBPTYRjfGQq6GtbwvrLRQwZgSRBj1VGakUZsAK7CMeKagSxbT3n",
  "key9": "Rdx921EGamk7kPXkyp62jT7f6fvhxqHriASxahuFxiCS5yurpSPUyBAYvaLohhMavCRhdSQiwNQNDmvAiJFhYeW",
  "key10": "2jNPd68mwEScakQs48hrHgGYYZLmXKQRPPKbwwFWLZWrYPg8Z9c41UgYDKb4uEgCC9njPh4BHkNQSPe45BdL13Z9",
  "key11": "3DsmHSzYeWhCvyZqA1KkKeAJpVvTTZBiGk4BJ2DZ9yWHypK8qPHDwioD7awhZFyTDj8S8EJ6BRWHQWPzEbPsHaPv",
  "key12": "FLpwHaffdXRAg3XqeARK2RrT5LuqMr3Pakuk2BfLypkbnGByqeUiY9rsztjjbcJ6LrMAEaeKHan5LnNekyfqtsy",
  "key13": "uF6wKxHF49aJzocebfoKTHZbrwxrBP3cWwVezScuFNDFbb2xiv8kQ34hB2D5Ct35ZLfvLsssp22DAtrFqx1H93t",
  "key14": "Nsd9v6RkxXWxvKBcixqXgHFcE8524Wf4a3PrkYNDSr6zaTMrjqAPx9kxXmYR3nEzpaWWYwMXMmiCY3mLGHUJLME",
  "key15": "5FESGPemyzBB4kVAwEuAPAqW7CPDuywq4fYBdETnK4BXjomoekJYBXiVsnBFzJ1JwKdof1YBJuoM8h48d1yAPxcD",
  "key16": "4qJAgTj7VYhDAnjyeLTppYv2oP89wbZSq8AP4VocXBpiAR3zT7jtLy7odDP4YcCFnT9UDLrWSqGopxJtm1gPsuNm",
  "key17": "4tLZpdvQVbJGsVNT9F9e5tmoaaD8jLGfJhgcLfSTBGcYArqRaFRoEJUsRBfVysNHmUKC7KoaWUgMQTj56Er3FUcQ",
  "key18": "5X2p54R4XxjBxkQzrH4rZz942dftVHD3n48zJuVnNWTUmH6hjQEdLnY1ijh7FfUAC5qkKRNTiQUN2CqW2w9b34AF",
  "key19": "3bYSJ8ywboEijdxsb7KcWvKQgYHDUZY294HVTaHKey4YLFqKEsPzcf1zWSLqqUmSTeLWgtFZ7GTK5B5EFCe1R7bq",
  "key20": "2YeCEVgX9wWSkYNPZvBbWTNaG4n5BmkJ5Uisivu9HasGHvvco3V9b5VUG6ULRXteLd1KUhff2LAb1Bo5FZB8SwUQ",
  "key21": "25oQaAHpxzrUgUmspGwz7zEVzKJBuYjJmAgZky1PD4d9DvbTAyDo1gjKE8sXiyxHmoeKuKjMm4eEo8rRpED9XWGs",
  "key22": "3fWEzs3wZMa36iqdPLRfw6wM7N7nFe9B4kc7xwZysyXMXZrMN1DTJLN1aXX38M6jfcq6QGRVi3VWqcrBYMgqVQee",
  "key23": "4d74gePzPqW3oaruT6BU3z94Lv7G5XW2PXtaEYGBHxL1MbM9ZFBeZN2yPpXzuFTNG6TjEhJTDa5GWqcQHuan96eE",
  "key24": "6wz939XKrd5hG3cmqVj8zx8sdRrnMX4GBFfM6bAFgYQ2CUSCbCSKVbxJ8BpebMnC24P6Qi22NTuJHws93n2u69b"
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
