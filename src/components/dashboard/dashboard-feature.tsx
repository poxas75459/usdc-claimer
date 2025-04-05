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
    "4BiRxqKP66dfhcpHNUjXjtA3qnLVxC9ZELU2noMdr5vfjtwserexTXU7qKyKaSUfDUAx1o1qqVn731oGKd4vU2fZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UZnuJQpwP3H68RzSfkkhvfNwUMkrUewf8zjVurgD1RVYoYr76mz5Fvj2gd6LZjdf4TG3ZeZMmSQxd3k1dY3qvnR",
  "key1": "2zBHvyJFPLM3yTKjiuSSsDGWPimCX47kN5RvNghNwBxWWZ68HikXPpnkGnCan3yKQrhsVwJ3gukbi6c3johLLvwJ",
  "key2": "5C3a5vQL5bGTWWQ6DDt91Jkk7x77ktJj8C3qUSn7RWrdczuUGUNn7LPbsfvq5PU4ryqjF3BEQVFYerHuj3cTmgHs",
  "key3": "2iZ8siT67ya5kpFKTcEY19o7j8S5qMoQkDDA3VW6DuvZZxwG8vq9vg7vcV3fEi4WQ9esEJCAE8dL57pib9xvcP78",
  "key4": "3282Dp97vwYGt35bvSBbCXADxZW1VoPnQjsrpaxJD5bkUVmDbzc1w6bPicVRo1PdKMki2g7k4ztGinoMyLwZ8Vcc",
  "key5": "VASCDNJeyrJzstRyG6Rbg7Mg78dASgeN5S7GeGJrYnFWQuKFhESfZ6o89mWTbLk65LN2e7h6kXqBiprR6VKGNhQ",
  "key6": "3BtiidJ5MRAfAgni41h8EtGY7JMQJJs46AusTGWnsJWVh8L9NDzkE5TT1b1GshKLaMDGo7b66ZHuGbzhHpuBvGco",
  "key7": "3PSRaZsWUoDX7hK6XdqbV6VbQUPrvXnakFTe8pkAmiqTRxtUTvxMYkuigsDLoRWedjdBzMv4rw6rjtMaJBEybBEg",
  "key8": "344QhRhiHUjeduxTsyb1JMAFaGBAMUpbXhCmynAjBafXarJLD8zRbcC3DrnRCvFgE9QTrnVvassGsweW91J38PYU",
  "key9": "5459KKru5G7Vd85CD7MBaYwKR7jsCZJ6VNg529U5TbZbxYWzL6oojJcVj9q8z582wjtq4bqSsnA8wCKMi1QH2NZV",
  "key10": "5izzNyqEaY46SntUzx74Ss2NDeda5M23Yx8gdVoXoejTLV8etWfr6tBMyyHoLA1LUxp8ENg6rYfia5mZ6vu2Dmds",
  "key11": "FQTx5zakRmm85522Ec3Z4Z4gB8G2qJkJ7QFiBh91G1VdvE5v8T9fCp1EHHpySGwTjFAEBngN7HoE1oMkFtxqLkw",
  "key12": "39sEKDzq4vSQc7kZxNzhkdMkKarD63BGL4jiv4ZAdZV7QvNuXWx9x21qXojjBQu7jaSzmQgZSEcCV8XqSkLSPftc",
  "key13": "2pu6REz9CaJKoD6kLfon7Ske3JRRuCGt3Kd4nz7PTBWJxHBm44eFZztE58iSCvcQpPiuP4ux9ef6xE87NSx9jJku",
  "key14": "4NNEp6THKzUDdtkhFnr2QzZY7BUQCCzhKHsuqrBWCAb5RSN7DvoG35KRHq2yus9p6z7oP9rix4ZTuhC6u4G6UffC",
  "key15": "21pmEtAL1VpxvkyBw87bgovH4z7F6kkfx5ZzqunG9VC5PkzxdwoMZyPw2F21uAJqaaYo7DL5FZnYf8dfCnaJsd8i",
  "key16": "4z9AYnUkZ2kGKnxJuHmFAN5kq9Lv8xtDtJkHLe3goavQg5ubrXC8k8DFZ5Hk8j8fRWmAu4EhDsDjrkqNbXHkXUqA",
  "key17": "64wnhoK8km2pJ8WaQtLhdQ5gZymeRgqg5omT76kYeXg2KZHxJjbK6m9LYDHMkpkpojbzFp34Th4Uj2aJw1vypnWh",
  "key18": "4s4cbA8SpePDMz6K825qAavknuMWQhCLwU7qcswBWrwpxGcKVHeScfDwynfnwZXjuv5w5aJFXdGyEwdVkCQc4H3P",
  "key19": "5ihvGEhaR5XAC18bFgwFsoMSqsDvMwj9sM6wZewgYnJBpuXXURKDRWm4p3haRRt57yeh7yDWvXDzoUg5M5FKcWxb",
  "key20": "3MvuC8YDp2GdnXAtaAwXCUtqb8kheJRGMJhbTyowSEVjkVr21qqYcZAekKNJmwXLkn1NYRQSiC5xKv2t7VgF6TyP",
  "key21": "2Jt8WyCZfB1syBoKxKL2h3ghz5zdRZ2ZamdZgGTxwaphynB4TGjRbPAmcpueWGu38cBoYD1ugDXUxY7WPrZV7EpH",
  "key22": "3vTV4ickxXZuigaq9DHzvJAiET1tEkmeF1xgFRFvNnwYpsTd6LwpEfC72WyxKf4oqaNzenNCJ8SbwUYqzHV7KwXz",
  "key23": "64PusdhcTS7AiGgwkvkQeph39RWYerzYfLdJcCJiS1dqeCZ8Jyzy1q15A7v4XkVViENioJsUu3XMS21gDx9Wug8Z",
  "key24": "2Vqq4n2xpbQPeQoHUkEQFZngtc55iFXA8SbUT3etsaiaDkvrnuUvqQCfiVeFKUQX8orn6ukN9ckBRoxVLhetHWaL",
  "key25": "4zUcLsbM7KMo65YuHHTifLezkSZ1Sg4qg6hZGidd7XynVXXjee1rhbkbMjttBqdihvnvF8hoTeFVKYJXMFKKmQqs",
  "key26": "DiDBahAJPx35HCFE94pjpXbxgJtHQMfJjH7WoJwdNtXA1FsDn3FwpxAZE8soSwpm6Grt7i5XWtVACanPJ5uztqS",
  "key27": "3Beh9hpKatyByAbahE7cgsmNy2e3sy1MGPeuZ5Vp2BkWnwj5P2dYBMFis5PAQihBg3xkmomUSHrqjbfs9ZLnBUXL",
  "key28": "5xzGDdK8oMttRccy7QNCQbFBzpV2KYhCzm2oaUJLLJxMKJ3umaZ64zFD467vRDB1EUUM2m8xpxLRZ6Q7Yyyd84o5",
  "key29": "3zPPA7Yfcuor5B5bN6CeK3xi3vanw7X3ZtMmR6Ya3jjwCUb48e2dsvV3NrDCat8j9qYGh3fU7uLWGzAyakxvKTR",
  "key30": "4LXxYuSqZAMF4cwdkZtGks5y25V55WwL52s5qqK9xhkn7SghdTNyTATP9hUHQ3rptRCX4aHMra2juon45M4mFWGB"
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
