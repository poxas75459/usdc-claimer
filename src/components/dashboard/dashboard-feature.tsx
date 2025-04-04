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
    "2WCqNRXuyQHRD3SxTEuSwqvEQLycPQo8L3yf3ko861ukgS9QANn6LazQDbo1vgMSH3qXNV7vPcQHPSHsFAmDu78X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4iPN8ZV6sytZfhiM5XnPtc8avFWBJfVyGnyND4QGEjCawZxckCRVq27x5bg8urkokyAUavYQWGAbRZSeF4nTAW",
  "key1": "5jRKNB5eRPGUW7WwQmwNhaVhgjJSxbfV7iHmzESXiCykmwJqTV1U2HRwH8C9N1zjAnXDgvnmSikL4mBBPwpJejjj",
  "key2": "4LFmE6sqPBTuANv4hYpjVfcNBjp3RQZKbKGR6gm1rX7g3GrB649gTsgTKZH7ecQnhHWmRABWUUPAF8ApXXqczf2q",
  "key3": "3dQdXXb3QH9FgDn7nUFnRcjoZ1SwCBMNdpGiDzNTHbrm3D19wWxt7vhhyaWtPPyjDrBUk7h3AexWptnRiXiwqZ82",
  "key4": "3CUGhr88wtKfUYBMAiu5dZ9xEbkbcjepAYuL3PiXCx9H7QWjdT6eSbr5FB4y1t1TXJcfgMXKQZpZvDhBAi5TRt7m",
  "key5": "2SyF5BRQGWVWw7FJj1QjLPNDQaSLcggkVFNNGvWvbEwraTt2HauETqj2Vz5LvAEvmjpyPFqq7mSzTZm8HCdNAUKC",
  "key6": "2nHY1UBkqYKRnQKfiGV5TWbyQLJfKRCPyjCC6VZHjqdNZgGCKb5h1ba3KyoRYJ9QL79SRQd6L4hdufSSBB3WbtZC",
  "key7": "4JZWJYEgpxcspoWFXmFiSfrXUDHwstgFgk6A3HT2buc3UYap5eK1NavQfMfhw6gbZyEP1JCA9W6RYxoe3QGhcqd7",
  "key8": "41BAnjZ14AvKPp5q547Xi2urHRt8QX6rmj3vKYrCrBRc77arx6kPkeCcjs9wExfT3DcDzy7t6Bpocvgnv76c5nvy",
  "key9": "63PRjVgPfFKo8hKQqPRcQuPfQGP5MKfJriWRDmQxiBgL8YgUUuWkXZAHuTHwF45ZAYh83Lsesi5Rgxed4gWuq1Jr",
  "key10": "2xMpdEjFUJkPUTmiJ5kSbzAfsawoZEhKi47b2S6SeAbhyFdrXehy8NamoNdx9M4WTwyWGEpNUDmbCEt24sHkJsvg",
  "key11": "65ucqkD8Myt6hk83BCMbQdt4grBMWMBGQR4TPxi55pRekhvdQryQHdpXvZyonKziukz7KPB4GXMp5TDW5SDtk5bW",
  "key12": "5ABUHx4Ya3iY3paTdwLwXZne6F4vP6SY683NJmfsLAygHMZUwVF2CNgtJenCQhs2PgEU9jPgWMmBbZi1pcqPJm9q",
  "key13": "37SA5wV5ycarqHrBeFK3APYDcUZj1HDBTy6pwSEnRKRrhxJ2kt3nBt1hgHMGfhTZR5euNHT2EgEVzcXEnAkXAwR3",
  "key14": "35o96oKhdTLzcPaen3vyzqpwgauUkA8Tu96iJ4yuif9YHUfKm4kiK2MVUvZ3KGDyuqH19aKtwyH8MmLrjKpFJUYS",
  "key15": "PZ2fix6Y8b1Z1cF5Tj43MVSqywmMmNhz5gR3aSKTq5i4SywCaehC93p3Be1oGYq1ndT2BDhxRrZ8V8KtVFb4y3i",
  "key16": "2juuMas98HdviaRsKB1hNmSLb2PjCuxq6pJq1afErXSWWszvJpUQ4b4C2SyjKzZqJpGRaov7RmVXHZu29U9KiG3s",
  "key17": "37RCtPJBVhxtLi3QH9eya88nxemZcetzR16hQTZqtiK4Cxw6uWE73NFN9NZHz5i3ErqMnm6JmwYaQnG657FK1jKC",
  "key18": "4VhNGmvX4eaQ6UJC83cZ9jHPKYi3kJaCxQreaW3e4Nj5W7TyL8CfsYnFJ4CfQwKu1qGfTtLTJZ4nYz94JBs1y6aR",
  "key19": "44WVcUD2jihySYRK9YR4jpCc5vEHt7xFATpr4qndzJ4UnR55o7t6VXgYszsVhHmGa4pqMhr78kFk6Rn21fD3vCEV",
  "key20": "5tw6NnDCuhk5EaCWbqq2chEpakZmjNDEZXaMmGP8s5Y1mGQfWeqUUGfJcU6TchCaqtgRoZxmQkRcQsP5KynJNdmk",
  "key21": "4HRjEjWb3gTSLMpbRADCkFUno5PpdzMFb4iGKuHsnbdMLkY78Lt198a5Fo4wvcxovwvV2KdtyhTzfnjsPF1U2vcg",
  "key22": "2Dknz6JkfMtM3SLFarZQyfzM3x9rT3L3TC2sCwSpxkHas2xtao3yMEDbECPqdX62HDeC2eRGdZtvoeQ7kvZP2Fxg",
  "key23": "s2xE6Rkcb8nQHyBTdV9gz9Aw5M7kRnjDGCWAwgRdsv1m6kG7cvhqsNFDwoAxo9UwpduuSoFJEi2uETrMCq4ibbv",
  "key24": "5BhKKnhwcxcHWvzQMXYeNhASqditzXUBv7Fo3TRWfetPN6CmNx7Hun1q8ajx39mBwDGnaD3f6VY6xHgJAvWmwAdC",
  "key25": "penQ7DqfvjnUTRVVP7zssXVoHSjNuMD5cfY83CeehyMP6Q6oE5PvNPuj5Dv7VNqAtkv37fBQYGPVbEwfh2Vmbtm",
  "key26": "LwAPAv4i9gjF3jL79mPNVD7VYuytLsZBLE6k952z1pFv1mUZsgLh8L8CmRJ8WGfQkeN6YKtQA44XqhHGZxeCcsT",
  "key27": "FxeF3Wn5muk5DZ3qATM5SQTLAvXDsenY8h2fSWoh929c9phazkJ8mE3kvYAiCHnoxvNFzqB6yX9dSbUVcW3ptKa",
  "key28": "659T7o4vmdfNDM4tBgs7mgZBUB8DJDrZZYFk5pPFqbgFg95sGsntuBHYQ9R78sx5KPAJGhiR6UhDkJXoFNwN75Nr",
  "key29": "2Xjv3yyBdpJwMCGqBHtwyAjpN9g7eXBSRH5mzkM8eUMrg52TGor48qPbbHCZdu9okL9u3FEs6cfWZ7NiN2XftDLr",
  "key30": "577G2smZpGQMiAineQqojXsuani7ap9bAon4PydTLmNctS5CYga6tL63e7zB3KHyDwrBT4e689LNA1ixPTJgJu9k",
  "key31": "4q8SD3qsLPPuyJd4dWkd24YTShyKHyjmeC1m7haTvGVW2xEqJ4T6RetZwzESZtAJdVF68RRSiezNcwWF8veMtoFw",
  "key32": "3xnMwR6vA4SaUnrUW15JLCU7B8FuTR88kJBQRJbcArU9QRmGxPGxWubd6a6rQWbW5kisYC6gqCS9DT4DGTzSYbDF"
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
