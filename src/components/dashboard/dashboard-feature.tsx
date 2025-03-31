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
    "Ktg3jBMPHbJi67kkTBPBFVAQWeYkc6asWjw6sf9KgRnoJ7eCNRFs5BS9i2mfsECZER9n57VztLWvFnnQmiBqEX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58UAS9KzSFig2yYANqLReaFh1NZg3PExdMMnRoQXJMDaa6fW1utPkXJQN4xXceWEsrxWBx9ZgGnpKdkF173RfSTP",
  "key1": "rx2VTSsBu7ZRSFhfknFGaMZdwZ4QGjp6JJ6zCdDD2cjPnVoNn6Pb64ZLgC4hAt8B7Xa1XDPq8CgtPEaePjg9Xqu",
  "key2": "hVWG5GJWnvcW16yQVubYkXzXoPre6fJtQyPwPrtrAgR97DQBojPW8REAzNyuU47Ta1gDEW1BTb6Lew5JYgpH8Hx",
  "key3": "5EKkhXh49azvWdN4wHty1cM1PrzaETBTGiLApeLaRcDUUVj6Ybuch7cSgDsbLieGqEXBEoRWB2hdsUnxZYh7vBuf",
  "key4": "25raspf1wAxPqWpj5qBqiY8zwuqWPRfeWKUyek1pKZsoFcj2iWtZ11uZnQSLVnLh6NEqHxhdLREXo2C9k7bUr6hK",
  "key5": "1vRmphUjsHo6bUQayAAKk8eaxPYUcjMwsWuTyqAQ2BbZS4QaPxztxdCgHAUyWc3bzwDMB2qHS8KecxGeegfaVxY",
  "key6": "5f5JAvg57tq15T7rvUpgzBNPhngWxtSWgcxc7io3Ux2jmnY8BZecRZgNK16JpDqnXMDTpPdy7dMm4qL4BC446FTS",
  "key7": "4UT4ZGBGreWB88ygvEWFS7Pe66nYjrACiTJEjPNHnLFMurocZnbuD2X1p3223Fy8T5T15HgTwgaSBkaDjqCyzXqH",
  "key8": "Dx7ysCK5Q8XHFRwhMPnFegEeWsHQZ7uge3fczivC5WkQmV3trox9Qfh4UWwpjHViLMVGu5yJWV4vNvCYc9FdJG6",
  "key9": "5LKQTApEwR9UJFC5YFpoUhTte7KDANSZzM6wyEoUVbEeSjBvE5eQ18aK9jttbtFGmeYdmgGjWm1BEtMiWww9ngXn",
  "key10": "DaShi6zME6xADV4hMMt9svGYDtG8DbEXmQwaXfwQZvPrHTQBygVPfmtDTA97skpUX8UwJFWYhP8mL57EjW3QEX5",
  "key11": "2BDX7Q2PcEitMNPXepP67vSmpERyM8pqtUWwDzTnkyVTtRRYq5uNcpKfSQVB3uw6m5i8JSvdVVdUoG3AxCi3qs9W",
  "key12": "222sV6uNkcpyhAUxSNx12qSqJEBWRxjodfjuSVQvHgUQGRGKYFvcXCCWL26jDoz6wxZWPG2trzuMWRDBYSyhLvxo",
  "key13": "5GDmLBqPCKk4NejzsupL1s4QdwFMK97Wz367PmwpDYWcmPXJ2whmuvUxSvTQxXMVsZmN9ecwZWJggYH1NP8TviT2",
  "key14": "3Mb49H9qyCtYDyRrAAHC3JBBLGftxKjfauZvHK9DWAQbsRxYFyEMhsF5Q1bNf7rpiPMcpQYsCBnbEQZG6K8e3qpq",
  "key15": "2v5XMqqyvJjg8KcAsHuCUkF2y1ef5bBxEdYBmxNqfvxKbDM7tHqmq4VQ4CZ82k6PT5exphJePW4hqz48JLsP2XLn",
  "key16": "4UpbK6x4Hxhavh6HtpxqwBFyTBZxLKKto7dewryksrQKCgwdRb3MxeGTwEkwbg9w1wWCqUFkpMRJDGFgoKxRiAYD",
  "key17": "3uFEoRMqawzwo4hHNj3SQrV7xRwbjmYvzKWxjNWj3eJXNLkBJGgRaxQM7xJvqLSgaK8riGZHa5G97XRBm9Qkdz23",
  "key18": "5gF8kxdQ7rdzHVifwnjmaF6kwZnEAKjfyEawV8AkHfxFJpdE1vhnUeKyZpaVFt2H1VpLUDztNiYLJC1aAjBS6hxm",
  "key19": "5HLaPsb1dxfX2qrgu57xqEvKg69qxqy6PR7aqtEt3CXqcAy4LoZhnY15PSU8fBkvGRJosDXvHU4JQTkBP9PetmKx",
  "key20": "5bkYMmda6Jg1RbVJAwhfkcPBJaTWfNgsSNDCteGvjtHdVfdE6iXXdmKCpS2yAiwpDHExXEfSPcCQhUKAZ4m3oKJG",
  "key21": "3MMHhcXTTyQAQZHcMvXZrKtWkW4EeSLwzzMWwmUdMnHcNfAsqL3etxNYBYjbVDVg93XwSwo3vVjCAEgzvkvGv1cN",
  "key22": "4qtFLLnsDhv1j3DBiu3uq94SJ2qaCnD9utUzQ7DsWSD1wcRJ96JxQUNK3S5hQTrp7PCQH9iAtcVfPH1RwBpm5PCf",
  "key23": "5Wd8ra5fXv9DKLm1UdMiwVuFGfxiHgsyvqefAKRiPMUXLnVYKHZRWzaUS5WDxXv9XgKDzvgb5778wYTWESCr6qAP",
  "key24": "PtRdAgev3V4g9iLBuCmHPSZsdJSa6evm1Vy531ZepAkZHrCZ469nkxyUtYMuvuHoBsoMJMZM4mBvj55v2UVEE2T",
  "key25": "3y79HzGcWn3jXwjz9uTUzLJ2uFNUCWDDRhhggRoYGHQkfVTFcxhr2e3d46jAYdpojU8FjrvyBD6adqMkSuDY7sbs",
  "key26": "dTLF7UcBTirSzcHmyfpBzNn4Ua2aPxQJH5FcamrVNBm72H4HkypNwyesmtpqEVjJB1EMYLXFtgw1LecmnarYfJa",
  "key27": "3BL77oMHh1LnSAkiZ3bzPrRtGhfcbxtBfRYCPxJqtSUpaHvgr9ach71gagamyhJgadauhi5L6QbmjTkNmPPG6HdW",
  "key28": "23uVNj62kStbVN2z6BqmMQN1i7SSA5sBQZN55u58zrwsCDmKdkmQiHnevy9RXCZDVcgRtM1qSfgbRHnkemwCpq4Y",
  "key29": "5WEctgMH8XdTsPzfzzyRGKTxLvAfVYp8vtWNsckUHS47Lbb1wieZsAG5EYshDJ27oS2U8RzuKRt2JGaRAQ4BvYn1",
  "key30": "3mnoyFxfuYYXQ2buiFQNb9kDntU9jDkLrmNbRMBwngeHvfZ4QHjoTwGc8TTEdMLiEiBT8TqBiNjvdyZfw72JRfYv",
  "key31": "4Zw1wrsTsgvh1t9GX2DogtS4coSVzdGKM2xBUcKUfUj75xCoHUSkzw57c324c2Xh32QRGvse8JSibUepKNvaBiux",
  "key32": "QQ7FEXXihQGT8vpmGYgwR8NFTZuWpdv1frqtHcLTFq8fhVXF7rAwqfg2xNyjmVt5uAHJvTfcKDsZxbAzz4Kzvcy",
  "key33": "5F3gQAaNsT4EVE9HrA5B21dkG6pQTDmixPiZQkGiPoV62pKffY2u9pAfE73WZPRJDAwwFpTs5YbLMHwgzNmvWrAB",
  "key34": "4BN2Qew17nuv858NopjDdVYD8FZuCbAkdAmFcaZQpmK1nDaPY3ztBP4a3FAGmaqKj9ucYADT3yBJNuqBvsmJ7TtY"
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
