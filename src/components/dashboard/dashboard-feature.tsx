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
    "2HwREWLe6BNb5NryYXNJbbw76sHAZBsVvKyk7DqcD8PehSNgMyWYM5MgAfSFd2jdScU5X3A8HtSi4DiSdULNNKEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a4GRA1smexMdCGahiaNQKj5wo9yKoqEJtFcbngRQuVMy6zkYpMoEjKGban2Xvk4LbUcbmBW7NCUX9jibbaK5tqj",
  "key1": "fP2GmAFgcXaRmGbFHZREpmppUL7R88mXoum8wgEBhadEtwUyXzTH3UXV7aVQu511Tg9LUPLEGaurQtWgFpS1Xi6",
  "key2": "JgmvPuTTR1ZrcZ2ux5X5kitxGa24pJ1dZh5kK46263DjJN29dHLtWfLCTuyAF3VWTexGhtYVSW4Cz8g6mbJj1gK",
  "key3": "5pwZET1tigEvrCgyBJudp66QxKGYRWv1oQFRR87FTvm9gnjyuNz3wsa91Shg5cMftRA2L6XuFPZ9z9WDft4ANqKy",
  "key4": "4d3m6WCPLyT6531eGUac5dou5vV1QjArLjU4QCNdJ4m1AxYqCv1Jfk81EBjoi8eD4TEbGUTFkJcoJGQFjPWKVvfQ",
  "key5": "XDWbtQamGAC1UxuPEXWgUQEm1yFeXidKUh41dD9sJYTA5zFZhAbWCSMRcTWxYhUiNv34tZ72LyWu7jv1KXKXbjo",
  "key6": "3YHkqxemjP2EiWzymqZE6c5ToNWBUwc2CAwt9M6YvAf4JwDbJhWb9fNXkjZfpLyUxKZ7BEfceMyuBRYU3mjvEpDG",
  "key7": "4fK1hEfxiaA3fKhbZAgfkSjD64F2MZhGnU4P9RYrhN6EvDKKEPabDhv1Z8LPoP1YYdkC3EYuhdYU2cVxyL47ibJP",
  "key8": "3DBThiWzdBqCijEBka3E62rMRq6MNsrYdKWbNyZMoFbw4LurULwuFKd5rYAwZwekjebkD5v3eAibZ4atyB7EuUxX",
  "key9": "458yLyYYGNjrNHxJPzfAHZHJZaQ849XAm6H4aHjWKczinV9rCDgDC9Li1aPrWhuZ5b7BqdaQbbSbcfFR6iPcZPrr",
  "key10": "rbhZpBLoJGKQVMUMZikppX6Ah3ApfYkN3di7sDoofvnCCg6RfqCKrcaTXGJedoH7KiCznr7AXEjk9eyb14Vdct5",
  "key11": "5ePY1WwF9kP2XiAGXNFCD5cWKH6mBRSuvFWooNTR5SEZt1Qj92uyxwVg4oByy6exX5ttjzCwWuVZ3JKMkwqRDThW",
  "key12": "5AsFCsk12SNWYMMzrXkCvkdKZjJAHfXfrFQbmZEbRk3WtQJZ8CbkiC6bv2GVUsQJPBiURgehzhVvSdndUxKeo1SU",
  "key13": "384NiEFcuUx4sE6MHxF8RoGbMTKnUxfGrcEMRepVmBN6z9EZDZJvLpc6jCgSpFqHA9wmSgFv5W5LFZWv7eZxZnAE",
  "key14": "3uJf7MMyLd2F4YmqvJQmyruyx7rHnWWgjt7VuvU451EfiPJ7CYfHuyufe2WGTvTbwJC8bine5azSRfSDto3Ec4KP",
  "key15": "22GpyBGB2CNp1AbHKoJ1xnWg9e1vyT6BbBLcsSjgShrQ3JFw5g9LKkU3sqN6DYJAbaWFZDpP2iLPabkHUh9TBaSJ",
  "key16": "512UD2waPUunTGZMnFHwH6JAknjEgwr9M8UoY9BnAevYj5Vmuwku3dHoNWSne7E7fmFeS976NMswxmnyufGv3PWH",
  "key17": "4K8JKGfig7RWpmsLJGDPMszr6PGrKCKtBLjQE79S4UMhvYQCA8X86nuKeEMkDpn2oaqrnDyeJRAAhPSxQ99k2jrv",
  "key18": "2LebiCm8TfCLWDPZoQViy8Xr4QHE4eqgAFnsneefG5D7vYJJ1zKCpRk5dzAuvJAD1XmVj413CEybgvc6Arz8R4GE",
  "key19": "3v7eUChKs5o4aYr7LhnDXheJvoxGdjVpq2RGBeUcjkKhTsWfCASwvcnmgXNpCn3Ck7zuXiaVGKNJFLMwFos1m2G2",
  "key20": "61iT1NnC89CY4rJeYJfDcCv7wWLrSKnSwZrNuWDds5fY5g8UpGc2PdbJVwq5ZHuFseGGuGYYvkabMZ35StEwLEwy",
  "key21": "knKyzX1zsviHnviNvCfG2xLD4k8Gb2bHnt5cMK6wAodAUNVbJy6iCkhZ8TWMqTKwEYJAmXVyrDJocqpHjmyTeqM",
  "key22": "5XqeJtnFfu54W2uCCtjCaHv2kS2Sh2dQqrA1i8jG9WdHqECYDLkfdZyNo9noR8ABLkkiy2ae981gs2eVZ5X7qjHJ",
  "key23": "2oNdhzdntiZU8PbYaYxcwKL1jPYzKVWRXwfP6KS7vCts97Y3W3oGYGK2xWSjU6YrLNMoK8RW8gJ5YMtnBpQaRfbm",
  "key24": "5q6nHuhH8bSNm9CMHpo3fCVqmPb7VgeLGeqAkroEN89BXUtrC9Asx9QApiJADmQ9pZvHf4i67LcKBghU8etUZCfz",
  "key25": "3QHLxJgAq1dPeLVHCfEaygzXimuof8mRjQZgZ3NPujKMMkHuXDK8c5x3oWZh9hcXvuSv2837RZ1karcwSR8yQFMU",
  "key26": "2FBqAjq22i9zPavJgqjr8xQiWcg1WP8DAQ2wi24Byp2KJk6XyyMJynyNQ9HcrcMVu1Sm9tuSXFihYAz65xThuYi8",
  "key27": "4Lxcvhiwwg46YYZh6Sj1AkWrooMFEENrJqNCtoX7q9GZYkW1Ab1bBMHEKCikgDoFC3i1gVTa4rCU9tJLhxGj5dna",
  "key28": "3q5jiVoSBsRX3JvXMFALxNWtqSWrJj6BCd1Rps6tA2amTdRLaZsvq2gNsEFE9LN6A8KfVgEv3bWHnLCEvtdZYy7Q",
  "key29": "3WqjWZQHrq3Yy2Uujss4kEzStTs3iE8WRwrfHsnqxyWSKVqc4EQgapUs9v4chybCTVxejauJQ35d4nfhuU9mBmDZ",
  "key30": "5FWyEYAMS8Ag9PUqfNHYPiF6dP83T1gETVfxNbN3qKYtB8A5UHoTtC4HeBAGKwCXsoiLAdpfwRWidAQT8Gy3UJvq",
  "key31": "5i1FhxHshT7owzxmWHyhBpKnsbi6ZcKKoAYEnFy3moLE7r8dQJc8B7ABCR61omN7Uc98tBQGSPAqgeiaKcQYQTbz",
  "key32": "UzKLeVvpSm1yb8bmzmUMkX1fPf4VYT69N11AML6ZTUd278tFgJbr7Dd9mLBF7wTmk4xhTbBduwEECRXjMmEGd9Q",
  "key33": "41YSgNQ2Nej9R1SyFAgX8pY8krc8edbtBsonZzoQcz8stn4pKMJjbjhrrXZ7qnw9GrbvfNiCGH72F47WrQQKyuid",
  "key34": "5UjKpQ9sHVohfeUHQ6RS4UgoW7zmpG75s3YFpH8iPcQnuPc9fAv4zDx1dgkFJpHqbudcJDXFPv8TVP1DDDHzUxyh",
  "key35": "3DFpFFEZevJ9goXZwmguSJ3D52MCibijBV2fKveHTWCiYTqgL4NN2GE2thWF8s6Ayw38DEE6nFzrg5otVns311w9",
  "key36": "62C2raKY5UPVDFhC96yuqWwtd6RdYKJ6sotKQ4uPpbapmHeSszx1NPgsu4ZANm8RuZexQ48Nd9RicXAmFMBr734K",
  "key37": "2eQMUVmXe7FL3P59vhaAU9zSLcJuw1AgHTwo3KahgiCPdqKW8hTYJUfLp8UFiKKcF5MzLMzwhXGkm6CtX5uLuW8d",
  "key38": "43pzALyZngsKxbz2wA3LTLJqYqqdY7GsQHYSbhebHDKkbVw1z12eJF7nU2a6kHWgZhEUuF8XkNtQsunMhuTD7Dcm",
  "key39": "4UjPrqb7RTP2Piy9VrnTz6VaeKh27rXVP1E7HfXDeuGN6zjaHM5HkHNDbkRCmMM3yik4kRfXiUsP5aJC6faGxUro",
  "key40": "4NaXfXRPDfUitxKJRkeud31zRKrxhUrpZgVXh5iwrDotdMZjrfZoCkAqngJJPJPiRyBfReKWRmBWUQFAzTJPMbHL",
  "key41": "5GUjw8GqQ5bxsEQrMbB6qWtdsGaVuQXotD3nRr9BZFzsiv2E4bAYZLjWtqZJYytm4cnGiGtACf8qhp4yafbvgZi6",
  "key42": "4P2ARgW3iLS2bBVwPuTps7irDuSoV51k5viv8XCLkQvrnnfwQTH1MVe3ofj4QZPhAfmD3UJGL1x38rfXGKGcauks",
  "key43": "5ZUCGmf9g8bzFbo2URCdWCASaetGbH1Qpqvf9DM9r566SCZe53ba8a3VWL7hNzBetwrBqxR45Kt3HDMhiiLt1v9Z",
  "key44": "3whu8GDCU48XGUP9xjdomjHnpQSuARZsvDUtYcoaz6DLPXZKnZALrvngWsHmjW3pE4uZTkT96VCKCfe3Zet3Wg1r",
  "key45": "2uz55ndVrfVeVMonvZFmKXMFCdwUWqGQkD7RvwBqMHgiJwQq8kSESKHLntvsHURHj54FN8qHaYzUpxqUMJ2fJzRx",
  "key46": "6nQ4CJp6QjGZdgAPyb7QQjvBryZSd9UTS4kYBmU6PBrXS5b8FGGtRbKfTD8PYYKvotS1K1Eyziti8hMV8eJX9gk",
  "key47": "45xL8D3ZWiFHt4s1GuKqb6xHXEApV6ZKaA972Gmr9UB43G74PZpzAwRhccEPtkW5UYsXM3ue3pgnuPw5tHNWJkwU",
  "key48": "ZgfoaVBq1qTfji4Lh1tjSXqjgVpHrqDtarCt6E13dNQNgBNrJGop9948FgQ4pm9ZuF4GgVh4nqyGLqscAMcLJ1t",
  "key49": "5NNbFxf5WKp67d16WhPBZCygruJCzyeVzyksmcUoSwgtF7caJCeLocEj7eL9RuanLPQKSYMRm3gfcSeAP7zdEqvc"
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
