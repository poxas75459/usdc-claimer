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
    "47WGLUaRt5Q9MnoW4kMfALKt1xjHyihw4S5u4cqXL7HdM2dTAcX7x4cesWKYKkNqyfgKMRtafvbDvodVs7ELCoB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGUcAHGpPQFdc3FVE49X9hNksea6pVADjEbcsDfarb4AZqzPLrs6bCBkYEaTQCogQmAzBwTkk7ocyLTRGGDb5Yb",
  "key1": "3upCkH2PieYjE2jD3WeizeY1gQB6Vo55taEzg8nHBgd2QtEwDERxLoc2ofjXcFkY9CddY6i9nszouc1ywMpvXSti",
  "key2": "4dxECvneWHojdv9W8Jtq6iZAQeMFbuTYFdcNn5t3Uhi6zFjkhKxn1S94hY1JEwCZK8dDqDDPG7u2L8MpcmSbw5Nc",
  "key3": "3e2us3vTxCsQkWNVVKkcXXTPv9CZDL4X4JpZyVUDFiomrc2eFceXrpXPSCDvbjLURKkVrR5TWi7feLtAASHPxRd1",
  "key4": "5B9mi5JYqfVwRVRevxg5u8pnhTNrxcjPwba6f9Pk2rzxfmDU9SVXuDAQCqoRHmfPdPCZp4tJFsh9udo6bMjoTbDq",
  "key5": "27814SfEhTXS6EbFaaL8iXKkvYM8DtrE5gPRzHkevbL5sugarLNqoDckvqc11vDKAezwtQaj3291SAPqzqo8EkU6",
  "key6": "4mNNo7gkMsp2vWXxP7d8E7uTxtgv2bKjmhXkrtztWobX17iBphuMenyi7rksHzqp3u1RiMeUBZ1PuEpQCZeD3QRg",
  "key7": "2ZY3stYxjndcpXEjdjijDUJu3yjJe5ShLJ2e4qus4TveRrAAeLb9Bbn7qdqVcyjMD3X2tAy4n6J7hoLk3dnsUx5j",
  "key8": "amqRJk9gwo6MbfrXVSncDCFQB2mpDLQBhH6jTbQAG9NoPRzMFJuxdVuoiKkqHw22EBHBsEqRSbmtrobEL8GjQB9",
  "key9": "3noPKmHwUyxBPvVVJyVei5Lo81N8cx6zEjQExLKg4uLrFaU8cYYkSEEvwwhtMMAcmfgXm9XU48GzV9NpuK1oHDMb",
  "key10": "4F1WRC5LJFqBHsxXuGQpyNjWUatDsszM8C8wU7uU3cK8oycmvGC2eKxnZ5MVrRQeqZzSjuXHcdE7jGwqj8ZGw4fB",
  "key11": "LxPwtHzpNhhURvXSyHzGT4K2T7UzUZZpuAbabTWPmydMUhsNXotP4w8SF1LbJ4uB91LvqaPCdxUVoonoV5Qu53d",
  "key12": "s1yb1ZjkhiRzjn38JGhRn8rDCzMqMewrMKQvv8RsP5NHFsq1wASE2H8ZKAXotcSHQP2BwGV4L1BtBwTUAGnNnFD",
  "key13": "3NWnb71RruDunTAp56fxjiBwU7dA52aXRuGsuc9T2fv7TGqpWj1yStk5CQaGokLTg4fWDy7wLJ8nRmDhmxaYwYT3",
  "key14": "2mK5Gpckb5cL78vECvC5GQgkCM18mKGsQRKrmWPCYvh8N7QHWFydp18Q8wMmkTXuT656Qk7Mv1txa8m3gey2SfC9",
  "key15": "3yXYghxPdCQSyj3sDNKNi7L57owvVrM9jwJp8vnQTmbEEC5MH3JhCh6mbgsQnv3c7Akf8WJ3QmWNotMwAdsGbFAj",
  "key16": "rZh1H2ZXM8XQ7dMGLQAArDncdbcGjnPCakVt9vc4soevbYz9yaoGE8TncbXJxXEF9iPND5Tnb4SB1cUz5VzhAqV",
  "key17": "4ejmdfspkZQceVVMvrjpxYbAaZzb7Bo55uY9fp7PfTdW9gQEi8NDmASnnhziecma47nXjNrrq7SRezHxYt9UCFJr",
  "key18": "35eXTKnQucGpxbk2MQ9oPHtGv7JUoxxUjnT96VFjGDfBXrddrQCgAPA48Kx13ozFXuYxkdHjp7o6u4F4NrQF3DiV",
  "key19": "3axH4giBeq5hKbKGNTBTSAwVrtmJBFW7xN62BbuQCzonHfAQXjvhebaz12wyKo3yFdt3DigieW5hgggqXLgNULAZ",
  "key20": "1nuaRgDut3ny577mr6w7oV63JoTCjarEQR5NCQjzKKpeXQ8PGs5sEfQTUt9W7BQdrzjd2bYC6HPWfjdHvGavLFb",
  "key21": "3AqreeVYGGpudvzEgZs68mrn1TkhFuBuV7Dr6QmoT8BFrPhnAeLBhzNeSLG4VU9QH1AHRhreRH123H8SWDLXkFU3",
  "key22": "RRVs5nj3nELxXgCemhDEwAC88UcTc37wV652iTvEjx24kjQBb4RyuhGdYapDfdgiR5p11vtiqGgSwvK5G5vEFcg",
  "key23": "3PmcxBB9BnhuMTR3BY6dE2NKcZvcpfNx4uo1xzT4sFT8r34Me5YEfUPHnT5rJswHxSqJBXeFpy8y1baJj1BK38eC",
  "key24": "fJe8duKp3AswK4iACk29ogJgZeBwM53Zm6zDHhv4obdakDArnWM2H6wxjZ85D7JkSzjsUhrot2zPirqd6eNmvyj",
  "key25": "43gb4kBwvNg61ds9JkGfcNwxnN8BqZQkykSbbJPE2vBkWYJwF5vmZqxTSa5M5uHw4amqujwix3w9y3nZUQJ5zH6k",
  "key26": "3FVm7NmMxmP7ydquh1CfAy6D4g5xpcF9J3y4P3dNSmdfCmhq4SRszbcG4Aa9tHBwYWb2ZmUJNTTSCkxcBXA24CYj",
  "key27": "5gEu8otviXD4GamDty4UGn3ASLupJkapYBUBf58gAmYbm97PeSN1KLKtXJ6qD6AwUnQieFrMAZGeBHsvvXSv7tRi",
  "key28": "617T78XyxK6RdAxgLgPMPPMfDvwVvvU4SFhqF7zZwrXfRuKuH8dcAyYCmE1xfBcNwkiN243M8gZzx9How3dsckyw",
  "key29": "4L5btK6w4T3KC5cHoFZucSF41QExYSDCaVcjj2bNuYV9drecAALPe79kSFipBt1gK6DGJZtxKmYmgeDKEgpn6YyP",
  "key30": "5xDZGMLZTBSZvJ7LNB7nJybbxgVcs6vjw1B9VH4b4rBFUcgqKnVMEpYu4FUNZYRqeNQpv4KS5Ah4217rF6nmz5Ge",
  "key31": "3M9kBUpTeTGJaxr6y2FzNe52sqK4NAskYihyC7pCaUMiz91d1rnJoefz4xnaFYncX1AKbUxkb81PxH7nwhxyggfw",
  "key32": "39iteM9ABc9FT5hF7WapXP4aYChpNUGDTNbuf8bg3tETESFrmkQkrwMKGC4xsHQsRE6LW47UNrfLPugCenPiYekc",
  "key33": "3Vn5cRBWJEhGkSFtwtDusjSxanMqsDsFG63vsKb1pBMagxMACg6adk1TY7V3QjfaT3d8ddUToPaowDMpka3bN4Qw"
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
