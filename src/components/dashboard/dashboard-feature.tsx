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
    "5frSKuLpun6mwndBWYr66tQqV3EEHjFJzjZo4FsdnrtqTfYejEcjzjRE56hYm21ARajNQipdH33U9Qn5vmFZSGP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tj33bn6RtMCUi1vWzV2c9nCSHJT2XjznNCwjM947kEanx61sghPRjvbtu2vooGAVZwqWDeaSKBXjt8aFkShtP6K",
  "key1": "3z6fH5xSuYDpzuyTBWCmGcEHQ7iupvBUN39Qb1sNBTpTwypu4JzjrEk3FeS8AsRntrC9S3osjdm3Wr9Y1ySBN9nm",
  "key2": "4vRSbaDt2CJSFWMALnwLHXt4oxjeTHwQzR19KBAK7ZjWhaF8n4rSn8Dy5d9C6KCzMbiJs91Uk2H8hRwbDhqqL4Yj",
  "key3": "4cjVovrGHpWWwKwdx9MxifkynjmacAU5kbT4VKSnPrSc6pjZFe5yeyW8hVEy8a1ttNGp5D5MDwbg51vfKvuJhuZr",
  "key4": "3zzuus7gSC95DTwAsuKEeoeG86SC1iXsbkTsxdQHooXVExkeaoiDMi1yywuezAsSVaSJLUpwhVWwMyoDTDyKQjdC",
  "key5": "3A7aDLEvYCjoGZLsMDKdjCAuoKXnkeHpgkrFpMXSLr8BUYEZknJhxPs8udBL5BYydUiZtweH2UysSdT6dmuC9f7q",
  "key6": "3CnqizGneKhp5bUdkXKzoAyKm5RLri7MiQ3uKboacXaTB3cFGvMWvsQpTLXYFMdZnXd6tZA32xVTLGGHepJyK8DJ",
  "key7": "3mZ4UsoPBDrfFPpKhivGyaVjYbwmgxmpfXDDeJCw6zWVBJ3ngAuA1aydkq6f6GWEBpDNFTtJ5bHe2Ktq3s81rwAz",
  "key8": "5x7JS8UQcnhwVFqSdmgAVpjvMdN9Yu8ZTJNDzoTAMMJ5Gh2h2YaSsXUnszVeXXSq9cTy5ZaFuZZcAtDNMCa35nbX",
  "key9": "3E27CKFpAKUmVn9NF4YTpaunqJXphj7bUdj2oXz8jhZ6ToSHxwZfGLQ6iHNegrv8Pj49BZfQWv6LHSuJVTg2Z4i6",
  "key10": "6ZopzQckiLqyZppsjvbKzG88GSqU8XJMTxc9ZasKgWSAvGBtyZqoQN91njCvzVusC8L3Rw1Vx35iqPT9nk25tDc",
  "key11": "3p1eHPzeFsNUbhKCKNssbdraux8tFpWR8wCmu3yohN4Mi6dbDrhyfsp1aSdA7RZFLTKE1ALiarTu3M86DDJWmYUW",
  "key12": "3PYJFXWsMBG3tHPAKLZZvutjAu374wJvD2qiUV94x2N1szHGRCdrQM46nQFW184McnkgUCvMrHTJoVSVd26K8UrZ",
  "key13": "Gxw61UTfePi2bXkQyd5ZiQTcUeHbbA51vrXYd9PJPGBWvXLmLDQ1FjnPj95vjJdppdbCoZz9GDK5eHgZ88rJ4WU",
  "key14": "4hJdVuSoB1Ppif8Le4Aff8LLs4gEiYDnmYoJkvxfQh7rtKxuwDubPVsrEjPWJ4Cy6xSZyhyAs6QkrBinxhBkZCKv",
  "key15": "3deuXhjixdmbscCjsg3rTuGDyMazyssL4G6LpoW6Gm8RonVSLKtZA2yf43A52tPxyHz7jqCK6QfREQoTSocVuQ7k",
  "key16": "34SJzovSXAzfcDWH2VNc6j57zBKFzi7UxrZinuS6WcgYEG1vymhCLNj9mkofsmdm8aBxVkyssUPLUhFuvH7DpzaU",
  "key17": "8ciVV2JwqtzWexBM8zBLXbvEGT5PeiLAJTRuBRc5hbazKpkJ3a83ZKX6RwE7oaNTiTqLPmPdY24k7y923HF1m9h",
  "key18": "4CPtt8toVkVmMzYhJra4q9pDeKWjmsXbPBiLveXd7gz4B3UhMtuKJNz2VexYe73JHTATcMULUsXT3EGLfTmKbuBz",
  "key19": "4bamE5qyucW4SstPuKMvAp85vwt1ZwCYKJpyJDPVhYkR2hEybo3VbxK4piuv6KxJzG5fN2sLM6RR7oXuiGfECk7G",
  "key20": "arFRDj9iaJkcitQQ97YitZ9XXng7vpY47gTA23uZiAtXDFxNSPTVRU3FhtpAyvyQEGmXn8QPFp6QYvBnuVHN2dM",
  "key21": "ELsEUkXfiTg3DLQRydKvKHgTh4p3uH1CLAEYCQJPd7Y5KjkqRoovEtUoUfNCtfHjJ5i4gz3CH2QpMQJWkdHcasC",
  "key22": "2ajsLa47VsTyMSK91DrBzBs8NfahJVavTqGjmUCDtd3uYbYrHj5a2r6fSFKu3ZEYG56QVnRwoLZarsYMyVyoY5H1",
  "key23": "2U8jaN5WzJo6WahB3QHXSpB5aysVe1b7hMEM8eNa4TiTVaWCgs9WPZcYdjagXKQ8rj2heq32tqp8Kj6hc76Z71Ly",
  "key24": "2wzbUL43NJywXMrHSEsAeJTmBruzrPQx1k1MG1YzFe5ac9WjFpwsHrZDwZn1nqBznKWq5kPD9aVdfJD2hAFKz1Up",
  "key25": "3nCWFxPASSPUK7A7V26nVMRFduUTmZ3vYzvnmnKWhYJuwrPzwTw74EdpTQiPF1osKu4w45b7uv4Dw1jT2Qk7dUuc",
  "key26": "2HnXKqTPiCNoDRityr5S57RYpJtqTguqCrmbHBDN3EcJrUpXVVFLfxRKfM7ZnGN9P9eNm1jgWToKg9EU1Gvke5PK",
  "key27": "4RAsy8Auyna9czyiXQiNKZsXxaMBpW1ZBFgaw2TRZtkoSFNbAgGBHMN1tj17XoVGvYXcsPjnQYAorUeTNbg6VPH1",
  "key28": "SSc3XTwmLyc7ySNrZU5Qf9GuNUZK6x4QcHqVYgKtxokQf78mbYM7umbfS7PLbpwtBsxzWRQ6DorfdKHuFLDHtVm",
  "key29": "56MLgkr8chDPU5vU2HFGDvZUTyDEj7knsat7aET6dp3LTyhxQnkXkahSVUKM6XYHjo9ADuKvsT27mgSewDGsCk2r",
  "key30": "65tWgSzy9HnewxCj3SNSe5egesR4fSQ8JKF4efzyYUQJz1JpSLsQnSVCAexzJf4Bkusxvu6eogA7cLJWbf2iAmZc",
  "key31": "f9UKULyHq1oWbVqSh47c2Utf3ADztxDtLjSDvL6XxTa8GNECsMx34nc15wUo49R7pZJEC6Lh1QE4zktQUsjCjAf",
  "key32": "4Z4VbycazBPzga5tKTTa1Cuqw4AnYrCEdNjJbzdfLa3Ah6ksZQf1ZPKrkaGco3vyTa8uWrsNLqNDTzKXVocbWCZF",
  "key33": "3dAWcJMYqY3JyNj9wurvkLqLrBxv2nDFtQZa4risz5f3DcR6AaGc4ojc5M9LTJRu6M9b8276FyGfB2EaV7QRu7fj",
  "key34": "5dmZKqRVi2K4rPL4weVeHH2TGikQLrhKCtzo2f71LbiujJEEH2ZYUMEf8sA372ddz9GRAt1bmyzQgzVyaoSfjfC4",
  "key35": "xHsRjnQKuiLtuTiv7w51wFPZbRhmDqMF5XNvKBNgjyCUmuU4vF94hoxudLnEHtGAYGNWjimmjGiRYcREYCRaVvf"
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
