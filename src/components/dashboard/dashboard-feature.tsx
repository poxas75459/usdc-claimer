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
    "5wx2t5U8d6B7KaQEhMPxVWDTD59nirvADAu1wn66TJhMknTrk8iu6uDRY6fVzuSo1672pgfGfWATvonnZ6R6YVoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gqEZfMWVcHg6BzpNybSeWg1yFSUvLYcSPBZPYMBgwbhXx84yU9sGqSNmrcAXmBFCnXDBxFGvfXfUN7XwGw8wBNw",
  "key1": "2YwJov2pwiUK3Ai9VP4FU11DXGxVqDhgu7e6er9BmeYTM288jBkoFRMT1E5vbphAZ7evJu67CDqzydmyrL5QkK4G",
  "key2": "39p2Zg5F3fqUV1XSbwBbrNaXEFX9BQxEKVtYzpkvYSdi1Eicm3fLAsGFGortxqcttyJSdEkbFmExYy1NMau1KUqR",
  "key3": "oP4MAHNPoHtGrfh5mHXPW8RaR46xA6bxGS8igmkQF5qJBqkNQ9oyFEXMfDhxobJgzyJnupBcweJiDLqKHkQX4FG",
  "key4": "2FQWVCRMBpcC8JCTo3PjvVU3whW8n6WSW7GsaMzS9odYyZaLZYS92fEHoT4yuadT5et8zrS6N6U5qDLr6irp4bgT",
  "key5": "2j8zpqFs329CiRUooiHvhBFDo3fDpKfpgXhSgzKykNbNFBEoxgKbemp8UXHnYHaww6ZNcMxrZkDfyx6XxPRXaBs8",
  "key6": "3KWSJQw5z8guWqPojaTPJunYdChfDDZkpH5mL8bLATicfAeHN8rDfbPTP2weTfFT8uooQ7aKkH5Hz86uW2zEHhcc",
  "key7": "LQhY3JKBr1yyzcVozz6jsNnGWHPnWm4SkPZt21Sha6pYhZaMquqx9cZWwZFnVUdMMwGTqGiLZxUyFEDLWBaeGWF",
  "key8": "62HhtvhXFyVBdwJsTjCW5LANHEZVqBdAxBAqvZoFs5YQUS24YMtkZLivuuhixTTnViira6y3GzKnCqrfLDoBhEhd",
  "key9": "F3qE3AiEmaXWye1sz15Kk5FWL4heyhK2MeM2FqDGmGNKrpsyzyv1B7TbiC5WL8UFzjWhcawS3GqyomFb7aH9g9x",
  "key10": "41jmrKqS5dPAvSB9zmqiUk5eXYFWd2sLQ46ZpAayMLn1jfjYKS3TtYPtWnmF8GFNfr8R5PeKEXw1SBjQAJFoc6mW",
  "key11": "2fg5KWFc43teT4XdZBZSTXMH3TryTs7V4n3Fz5136EL5QHDJtiAa2oWaPdhGJPAwfQjK9f2pazYEgJkpmTpxRP7j",
  "key12": "4JemipPAKCKr14NcnQGZKsrAvtBZwyHB3tKZueB65jzpAMcvVK972nbSpzWvjR149dHY9wJrRyapDZyGd9CsXeaH",
  "key13": "3hMzWmm9PsipSs1E2P57pfNfRGSWbKeDRXgrnVTx2gnQXSwVuhgHxMWnsoCcq5jXV4F3ffbWqmSKtSLoBuY1i8YU",
  "key14": "5VWTRM6A6Wx7sks8fyQrAG12bhA6ff42Fn9wcw1goFi2jFLZr8TLX3AX1yEE2FRUPjH8H3wccVceE3sx7kTKHnE6",
  "key15": "4ZzotgFS7SWtZhSdQMYavyQkJV3MGeZq6Xov34YEhNrMoF1gZyfjjgi4TPMZxiyaVaXEASsk1j8cCVr1JxZpxKrM",
  "key16": "3ehJisFAcxuozEm3iNoHvJuSFSCKyiD4ks5KEafpHrnFJjCS2rvuhLqkujxb3m2eiQdznJv5EQisJ39ddYtdC4nt",
  "key17": "5HBNjCVHgyeK78w7xfj72D1fjzkDedAYZbNYJ67NXq4yTcs7TCmUtq2EombpV6n6cu9Nug3LCPqfXAe1pEfpsKqs",
  "key18": "3bCHjbro5smDtQLikS2nCCHMGvAdS7rweq7RvBFs6ypw2gUgTNJvm8YviJxVHCH5LrZSNBRQj3PTuXK7xYK6v6du",
  "key19": "5WVsLwQ79pxLKJ4eXhMdtSJAvRcPt3SWfVxNtH4f4GNfeLLVohcB995hhjYrxRN6iJcSan2HRzbNAUqqU3gP3uiZ",
  "key20": "671f6sjJh4MModnPsTWDwdpgTWD1YEBfZiA2GqeLC7wGaDrUoGhdjmuUQ4RMyhLWGxVGY7Afh2S6cWcVnSKDbKq9",
  "key21": "KwqQZJzt595iLk5CNRQw4i63q5Ey82ZZkxjkYHJdnJt2keWBh7cJQTckDowaWUktkVguiiEqLKc23Eh7XDwq1DW",
  "key22": "38rdQdoZyoosv14Lya9XU5DtG6FDUDZXHuK5VMCspbXEuSvatcdkj3ecNZq2qK6F3t7hJ4i4nFJYt3YEwEGdWndy",
  "key23": "4W6fypNn2fRxhrdzASRm88peSbXXhcPxvdcKzyVvPvPfaZLVr2kRcpHP2SdY2WvKJ3FDCQJJjPWgKrTb1eqvNnub",
  "key24": "4CMvtCK3TTjSd9thJSHgEy36aSWuad8rLKtUYMEzCbED5DwyEk9TfMuBgWgS2z5zUHqvVfQzZumuhYHSmqv3ZwMF",
  "key25": "3buffHn2t886mBijMHFdv88WdwEYywuERrUtC9dkYwmedYnFGVJgmqviw9FpYvAxfCuKa1Wr3MMp4X2YpBopHwtB",
  "key26": "eAyVriddFkbcy1MxeKAddnGuFdA5w1tdco7h31eZPvtMm52gFwZWRUfkCY8Mvz2oMavHxek7zvpmaZSxEj6qsK1",
  "key27": "uCjSULBphYw2k11fGsxQ6hrTeKHqi9JBe1EEySs5nWjVpNuStKvkxZFquCFJGFhXuT1ZbrtXpjkuPc24u75vSW4",
  "key28": "3naeURHeRcX1D7scko2rxqVF8YzrXscsuBbvRJ5pqkpGpoe7wJVRKpHkpgWzVL6w6VRNGj7DWP5PrcTCWccJdsQu",
  "key29": "4srTrgScGSLthhJzHoFJzp9WbvA2PzGw8bXPotQS2UpCj1jygdNJMnHrErntQRagbg95Ff9dWwgrbd1SkQSLgvSZ",
  "key30": "2MHdY5obqeT73LNM3yyzFF5B6rDP3fYJenLXmSpuyD9SeMEfGUtmn7YtCCmqiZGN73awQpUNKGNtmqtzLVtyneBi",
  "key31": "28nxpM2BiUShxaeuKoEpP3RuKCRUmFp6kmJgd6UHLHHJrXndhhzUnkPjNh4n9wm7s9xinN5Qkwh16PqV7CzYE8tD",
  "key32": "5ARTgqJETBdw3nnHHZzEm7djge1PhrCyu9sdzgfAX1FXHCepBq3n3BE6zrSvJg9dqWeUbCWeMYd1bBpTsBZHafji",
  "key33": "64JpSxMA1LtYmHTLQVwPm5zuTTSDwHPw8nT98BHCggtxNNfGVwH832jE5Xv3PbPnB8o6HDiWEadk51R14FpD5MA5",
  "key34": "sBpc19rtvjyJmRuwibb3sixQbCfCa85tkvy75mx6rznvsfEZni9CCBQ51XJbvkwpNG8tMQvsbSZTqXced9V28UN",
  "key35": "38Zp754wPFg7JJSfp4vEwMiFwfNq9PNUwdo5zapFL4JdBteXyRV4kUY1KQtNCnfpUcZUnDvgaFyeoUrmVGqDtEAC",
  "key36": "4K8gdoe4DEQJTnTCUM8gHGGz7NiL4sYf48EiwYU3nrKZo753wxCpV8ZFxmVDumKAZeQxXcE7fucBtkQ4ieTQ7NWS",
  "key37": "5xRoNjkbKchFjfgqh7jftfjEVnEqFSQXifAN8aLfgLGEPKPjXrhvkWf1sNQW4Ri3uxfWpP3cyxauy3MNRzDh3n35",
  "key38": "4FPwZs4jC52dfjdNWm8bq2RR1z5LE3ezXmxvDS3Hd9b7xptjV2NkXwZ9EWi8T96eXuZRhU3JHT5wdARvTXiTk1H5",
  "key39": "5YJ5Ho5NpzibQSTxY7ZsWe1L76p22kiNHDroKuL8t43kEzavMyi1MinyXwc6pUeiqob9MFgm3Mty8KFiEyMeMgNa",
  "key40": "3dkQpQ3itYRh6dmDFVcGhhYH57zXb1EhH7cR7oDwpHZTHvJ3WBy7Q9WgBnMKzmU1Kre8Bk1WU1FRqGDo1wZzmFgF",
  "key41": "kzWiDxcsa3MimsBxYXDwNvsahaeXmPKTYJWEUkCdqQiy6dspRDpKHjQ67rjPtHV2eEy6Zy5KvY5ntdbzUQPX1Rx"
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
