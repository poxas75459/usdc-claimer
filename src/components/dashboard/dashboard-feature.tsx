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
    "YpiQu1FH7BR7jkxwutQMfvdYLzw9ZdH8bUNGkcHYns8rtyYNvpoNsANigCnacCbpsg1vPZWnMFT1LN2iUfMgfN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AifoNHADt1NGQoNreVNVvw9ct6MRumLx1dbUjtujLpY3qZUxboSM1xp3zPWnN3ykP2ZMjAvccGGZkAN8ruxwrme",
  "key1": "5gkF2miSGtZqvf2NXZtNKjwiyDnyGYFxXLSDsReaX9Dv9Tc37f5Wq7YPxB2N1ryRkhj7vBn4oaxwNXCKiQYn9Ccf",
  "key2": "2KeXnJZFfv8Mc3KgxeoGuw8VacTNzC7hAonv5xMkj7UWkFNGecg1ikdzzZpHAACn7a1hkfq1x2YLRv46154k8we2",
  "key3": "52bD3FPc3xc8krQNg69NgKFiFEXg1X9Dy4KeT3zWAiWzxatFuPK5iud2careLKGH2gy2CXVGLxjFeG4XfpjDd4SX",
  "key4": "2jF3ZhuChkvQR3hFJ56NyfTHYy4qFfraTH8NPuWCarVovoo36cqgVqtLy3h2Ds6b6G1zVgikxG7tpr82S6digpDH",
  "key5": "5L2orZP3vBqtwFWiWtUjXC7zn2EHnrpkW6sHZh6P3yAyQRkXGGzdzJuVAWT24nqREBCosBMLkXbcrJJS1CtAmdaX",
  "key6": "pnrrshksbFtAkfGKcRjPxKSgcd22eLrMLYfRgsDJHKcmtPR2VjqDTXsvRyPQeqPeKNKWdrQBDdAofysEwCi7jfm",
  "key7": "7c9bysv2Vytwb21dBypvw3CS5tzaaZeAEVkfasTfrXpKL6SLrMKa1dv9gDXVYCa3JkcVTfZgZAhS4fPZ6bayEfZ",
  "key8": "2nLuMboqyiDXQWZSMb8kM5uKst4ocYP8R1jeGUrU7cMx65p9MMjHjtZjah4atLG2VHe76tEHfK5EJfaoNFnJ88GX",
  "key9": "5co8dQvE7CXb32jYfHMmnFteVbD6sjsuyJPZBoTMVRspe7vst658psk5EbJndAd75pyTdbZwCfpjbBr4GEZMtqjB",
  "key10": "52pF3UumUVPCSx6kiePGwiXEqBdUHGJMvxuNwoeQbu6KJtdeeE9KdUyFL6sZMDrHVAuGzojFsAN9cXkeZMu5TBiB",
  "key11": "2z8kTBj3HvHnoPuUDhoNtb6fyigNB3N4JCHLyRc6oGVeCqZMbaAAUeAgKf3op3BaR9AXL6cu3CsZKjqAxjD4dWU",
  "key12": "5VsxNoaLMwkkkzv7vmt3DtikcuYfs6Gvjap4XEUq9qcNVNuwRy3n8iCzJcNK6Nakfr6naGinhHkYDcP7PZZCd6GW",
  "key13": "2YHKxrFFPXsUfuigbMFEVoF86JnuvRSbexzs6wKHgcN7facToQRCHmd8HfJx2S7rBsSDw1EHPB6fQ237oZ3kGPzF",
  "key14": "2smii9P3LNBzuRHFKNhpoVWXKHc3sRGwrHnNVmeH3Hsitu6RZzQPRSiJWpEXbXLs6ztWrrhfqCxDMnjULQ2AczyN",
  "key15": "3j3ssYGdYvBWaYgypB4SzjhPGTgMTRa1f3NyrzUNRTaX4PBm4vpWn49ZPb2XkQ41d79XSZEsimRrmDKjZps6tJDS",
  "key16": "47ybNh4uGcz5umYr8vZkiM1CCzjGxHhdUM43cVEfk7Kw74fmve9Bk9LmgYom9doqG1ACX5zvRZRrbF3nwXRMJUDJ",
  "key17": "3KiDchNiXSHJfsaDVC6sUNH6GR1vNrcxmVTGYRjykVgVh88k7hALKnKqDohDDxn88gBgEiXasLuCHXho67susHb6",
  "key18": "33iNrFP2mYoM6S9wcFpvTWd6hZCupw87a7uHS4PSygKtb6GEKXRv54QE22vBXoZpFX2Z812FNmSD2T8DTTbYbkcr",
  "key19": "2Kwu8TCLqUKbxEhNynKXJ1xvQzR77ueQbYw7gGpTmVJDirh3KKRi2WDEXLrhRFq5ka4HuBiT271jpTCBECYtdKEn",
  "key20": "58ZS7A6Sfnb57fiZeUPwof2gndGrZjFB5u8bKb25p3e9TGwEQBmDdr6k2gP8B9ZX8FcyH5RYfVBNaw8ZoxXM4RYa",
  "key21": "5frHJCQLZPUGbc1imivHUnjCxHx8yL89KJxi1g9R3DG68YwN57U2CNX3Z53yPdouUxTcz5Axf8qsdrnSd3vJRLuZ",
  "key22": "31eJwVtxar5x7pbXkhZ4Cz8Sp5b4KkFcT7CpLVv5pSCXjSLekLCgbMJjXAaZ3HEA2n3XBpdkfmGeCUcxddU9PVZW",
  "key23": "5ey1NTYB4ZhxznopNW5ku8S41bpJhwB3vnzirQQr8yEoMccfGNEPcw6Ud9JMPSEjrd83xEgmz1nh5MHYDjqja6F9",
  "key24": "M8ZxvroGuJHHiR9mvyC6cDzhez4i4yZ3zVGAdYBxZMpRkrPac8qgWpJ47X1279hjuBbAkvFbRbSgu4dSTjiNTQw",
  "key25": "3QrG99HN6YbmHqCcLjipZSBz7wMTu9D2ZwfqvLrE77MkPhLicbK7fvXaPeTJ54RjUJcYMBtfkjZ2SWD73e7tM9EY",
  "key26": "5jpNLF4v5SGTHdryr9kbUgrmCf3x2EwKccrZpe45kgG1VryzUe7UeHQ3SSqNYXfG5CidETswmyGhdrV9XBrEctux",
  "key27": "5cPxncJqWZZEsSaDaRBzGYZj6UcFnqE7qjw4javCe1GJq82ogKizKJv7vMSpTtpnAnk6dn6YhDvz8mUTXXu5ueTt",
  "key28": "2LwLXXKQJ4V7UYgVo3xJLAcw2GcEujrXVMc6rVZsampigi9yw7N8UdvbB88SygsteULjfynBwrGqFyYHbDRi29Rt",
  "key29": "Ug48BDaPfxniQR7afnQVRadfpo3NHX1PLvXySX6cbd4ndCKFiJm1QxbZiKcWJGVmhqbzY9JsVEbutDMiU1kFYWV",
  "key30": "3iKHW3AJVHQQSUMPMrvk3tBCTMU13Jys3jwH1RR4Y8TFRPUvQ9oiX84Eqvp51jUPd82vu7snFvpxAqPMvZ1nVoFg",
  "key31": "25KGutxmWGwF4KtLZrLfwDbAYkZgec1Hfvs1BXq2rHgC8APmmSJHDeE1EimrfTBEkGJLkDLFnpYKXHvip5N1Hu9x",
  "key32": "3o8F6EiELkTCtTzpJcJUQGQhk6H4TGPEGkGRwmQKQMLv1ee4MUT6x4ZnAUY499d3bk7v4qjkyXbrEvjwB7UpRMw1",
  "key33": "3XefKEfWcaMZzb3b5aSgFEYCzAp6EVNMHnzkdLv2L8Yxu6PaLVpLe6gfrsRC7TpoCuR5tNUFUmjQVfipGMe4nbac",
  "key34": "2cPMFdkgSLsPeVK5asWnCFFz2sH8AoFUVaKQMc8k6pKuZ7Lv2tczGpc5RkynnEi6xvKJtKGLM9UhrPpEkhGzwDQW",
  "key35": "5259AgPxvA3tEbtAnxfUUWpGYVmJ9d5WRYwmLstfLf9CohJk5nWWfVuQzjweD8hePyYkQKztNyyDXkxXGw8y4wP7",
  "key36": "4WzdcbM5jtgL2H1iQvyA5deVokvzju3rPZqFz1s3Fbvv72jm7n8zQ5xNGFDYJgiBbabD5e3av57gKCvxwLNDn1Jj",
  "key37": "C3aJGbrTXMji5GExu2gxysFHtF32tF6V7jUavLCYGW8wK96ESNMPJnzNzGMZDRhgjSrMYzv9KFPSDGAkywfaMAT",
  "key38": "aitrGe5V5h4zX7NVooNZYBoEyYwrBxGC64RqvFKq5KX1XkNtRgKAL9ggirtYHnafjx8MKD29anZM6bh78Gg1yRh"
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
