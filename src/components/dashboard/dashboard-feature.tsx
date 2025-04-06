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
    "2AqnBzevRQkvEasqbx54QLDyoYDZ8xC9CX4Wn2KbqfuoZK1tJRB7eyZT4pJwcKo4w489WSd4w93nCSpcAAxucJ2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HcGcvgqVFgxPyDeXGRmJEi1ENzaxVd1W1JjzZj9Pcpni3JvT2jFSmstZBByB9gB6rtKoj7HB7F62HC7HXa9xjU2",
  "key1": "362j1qr1s9KU3azfN7JCRThf2o2Sv5YsVvLbGDeciPLaVsMJWLcrWe7n2YAiQtxSaDw5p7vxiQNsDU33vNz9Kzq5",
  "key2": "4Xr5p4gDwiW2bBhggiABWW5hmszjVek3148pVVAaN4roshJsiF3Mh8DEnHdjeBUSgon6QkFeC9g67wgdkv9Quwqw",
  "key3": "4MTNyLeX62TnSFNm1xo7s55QgwhMRFQvh5qqXU7aye42LdCAs8piS76LYQrBwVr6EaZXW675qssUgNdvND2rtur7",
  "key4": "5oPYerSavLjXCYjUF5ozy4SFUjqQ9559DRxx3BKrrXAuCzrn8S7YJ3fGKFTz2gTLnLZacz3rN1mwQtCuoFuo9Pcp",
  "key5": "5JYgsFPypPHjyvn7XuR6RH79GM7yJFQFj8zyAFsPGoSvhHJf8R4HnxmwrcjyrhfPfnZvgpCtat7vciJUiQrbc6p3",
  "key6": "2XSYtmBHWA8KLAzYU4YfjiwRuEix6z3XTt6EbPeoufMQR8DNJ7ppHYjZuueoVzERLswrSkMYBjaCG4yMG7pUuMYP",
  "key7": "2Z1VPJyWPT7T9Jhv25R19BPWjjyzykXLnwNgZYv8cVVtqte5iARWgBRxwxCkCuPFGbYmT9ih78AReYYCPVq8DSij",
  "key8": "5RCPzSZ1KMKhvbUZv5o2qNxCyfLyoKD8mPnQr6ufTJa434EmZpsXic8CCTjicaQLg6hvUvdbGe2NcuTqqv99vUXu",
  "key9": "4w6LJmnbjEVGkYD7EAzQqPjb8711mya45FiyC33yr6FGsGPFvcUBuHsSpd1k24pxdPByDGFcTQvYq2eWhMKrWHUo",
  "key10": "DCSfoDmmKu8bxHM1FDvekEz7bEz57xMkUcP73Renj1WF4FGMnToGu3aFs8kaJgS6fxx6RgmhoUiU3TwcywuVmBL",
  "key11": "4Tx3BtvG47XyyJAyA8VDsgsatxNVAXqgXLeNLwMYuS16X3hYQtsBUFogHXUCJyLktGnko98J7KhGsNVkpbfYWQJW",
  "key12": "4t18w5NSwfvCrWFSpMbtLGj6Utc6aTvJvnwdvHEQU8atjtmFAKcjPSgJSiJ4JYi8pZENhWk7U7QZC1zXB1rxsrwT",
  "key13": "2AyBE1k24PohDfsHRvR6uDJAFTZTp8PaBRCpAV1cNTWA7edwSdf5qFCSgjsMu8yyayBQsP1qjuWf5YHUUXUxfQXc",
  "key14": "4fjnMDkpCKAxBjz4pSyynUZDBvzFqZDWHDojd6HzWG7hBF2z52EsC97nE79vcdyffPpVU4jzJLdiMhDrrwCTgkGG",
  "key15": "4RL1Tmn2ja5vGKQjBBH3sjyUbcLyKrZraQJLKZVU42bueFC5QshMSHKfuCCDVz2aCWrpD3sn5R4j32sFQZdXKQLu",
  "key16": "3xrLDMNBjX3NVDLEZZHPxrQFs38rw4pm95EsPepvbBEtuz7nSdnaaVAtA3SAWvb9h7bg121SYvGPhK4F9DATttM3",
  "key17": "2hJvTDNjgaf5rdvDuGH1aWsS8Uk8ZHLQFKvoVBaXXkcLC5tBEYFPwmBUaQ8fqdYhXyCeuYBemzbA2oUr5cnGcoWr",
  "key18": "2DsMC4FSXXMgH7E827CDyTWguLUi2eVoPDWYTneXrHcpDdiBWX7ykGJvwU5xRFNZBYJu13M7L5tbpCBqyC1eGnQH",
  "key19": "4UWamoQbtxsdPJY4wvHyQUa6oyYLV4TbY5M3jbqGRxg2LhrXTKWG1mJ8n4vbiDgJxT75gnHaHnoB5rw8NzGfS4ga",
  "key20": "QCx2R5zJxzA22G4zaxzetDcwMvzkYLPkhUgzBcBn4xq5FGaq4sUwReEEaEeDj4x7suYftCKWbLwPwdrV9xamopa",
  "key21": "uTL1vpMfUbKqSZvcmkvzTPLY7JgX157o2jmYJju927PzKNdcxQFiWPn8VDZ5JBQihZBpN3tiqtU4nFHE2dsXZfe",
  "key22": "4BH57ri314vbgKWFgxd1vjUJzQ5xTsAQgRienS9MoTZ7T2PD445a53ctf51SSngSXCBFHyzfB9Pizf1FwjJxDvC6",
  "key23": "cdBY3Yf8rdbMor144fbNmR13PZuLmpeeSmrAwXjkXETDLKhTy4tp1R2VbXe7ypfhazkq7kkGHFbYHafc9zvRPVt",
  "key24": "NgDsU4fLMNtH6U3ofMBYE2FBsKTyiUJFccCynWB17xm8mmCoujn2m8vHNqGs3uTRc1B4kwmfxdeqwHAZf65PEsj",
  "key25": "2T54Ymi64MEN4b6ppvaamPhPyxEKoBqV78CNpo9pTpEdXoAMQ2JuR7rimSwBRCSD8YH4yxYkFWo4cnhvf8PMCiaw",
  "key26": "39jtggttAwTcm9SG16RBUUKqaoMTszXMH6u13ryrPFr1gZeT2YnsK6iLcY2upUCWNNXb5wvyv3vXJHwHH3YGZu8Y",
  "key27": "28Dh1ZHjQq4Ane2XMxWEzbXCbtx59uc5gbN2ZJLwDPxeyZvvvDN62XJYPVNL7GajoSXhfWhcqZGYEih4TAHoLo9D",
  "key28": "RNjAStKPUiQRPVGf66Pxaip3F7S612KG5hkcHwtJWvCwmbypnmu7bVc4caw9B92GAweSxtPFXPid4HUNuAGWCQ1",
  "key29": "57wiHZNnBtSJBWCZMY1FC3zAeTcC9bEzgV5PtckmNLxHsRiD8R4cBH8FpttZs7dtbhGVq5giCR3LCyyYYcbrT5pK",
  "key30": "5DVHgrC57VmuCkEb21Pwfk5UfxsGd8JxcJDcSaKRNNxV1qkW2YpCZtYq3M3sHQjiCRkL5H7ddWujqZvwNkewEQtD",
  "key31": "51E6MCGRPWpvhkqmeHNsK7tXkjEUTsQ71tRAgxpwF8oqbM8RpjygzAVihZu7R9GSdjFHr5Z43m4X3vPjnWHLwPs6",
  "key32": "5S2m6NyMX1YdNbsCjM6jCTYHysa3As3qT5YggwB89kDE6DRyx8ZrNYowd9beTPxFRoNh5KDDS8zwzWru8UGnYc99"
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
