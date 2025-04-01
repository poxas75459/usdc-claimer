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
    "41sgUwPgcYxw8mxVRP84pgXGzhc7J8TgZ57R5pSTg9c5HEcq4gy6RGn4AMmt6kiusWVPdMr3bHa5ejRMXdqfyQXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55daNdTRC5c2p5sNtRMvigrB8LVvYKc13BhMoUrBrtRE6yTAErqD8qp5tspvjsth4shGfpmHyZx31H6nJHsSfWjf",
  "key1": "3H2JAff5Hef8Kw7ohn6rMmNpAksUhBd5vMYd4f5KWrssheF84TZnH3HzeuPxzftMJaucWR6u71jYD8Jx1Hu6U8rB",
  "key2": "2CqWf5ueMEp17EssQmQvaX7oYPdtU57EnNBjyuA1y6YSAVsQNbqWf8gYaALFbBHaaCY4GF2nTb2Bb93P4ssGLtYr",
  "key3": "4Bj6yq1vMYf2vbTthqdzvJLzshffxpT38pvLRM4FteAavvXGRTynaAzpnKckr9MkFiebL3FUSvrfXCufpnma1Msq",
  "key4": "3VtWT9PATszTzWqBBsdEC4DBLmHmm18B58meQyL8GP2cYXxiFrTLiakDFmve3HgKmkewnRikFWQzyUDLyDqUGyfC",
  "key5": "3cVxWFuyVWsEZgRm2i6xYkdmU38ULeLNV2Rrfv1gTdg8tbb5ojeBo8eGx5jviG4RLDNpgVjS7s5x66V1qALthM4",
  "key6": "2Poe7KttMA17k8siKHcAT9iAwqF4f45YK7QRDJchfZCmgxfscGNS7qQrzAQuXNFiNv6WU4AkskRn7EuYeDxq2n5m",
  "key7": "2CgEEkDRyLhrviPoYJz91gkASdihLjpQfhYcsxN9S4KKUuHSLEzWWzy7Kywtr8qS8UXC8ovG7hQcyQcU1VuWE9m6",
  "key8": "3oREVc7RwEmGb3v8Ma96vGE6GBFakYX8uqVnST6YfyLvBquvohUu4JrzmvPQ2WzZdBnLjhfoXuFpJpf5yCzYV4Zo",
  "key9": "47Zr6v6SrGM83ETbsCFPQzjiFsGX38AWfGYnQeukjdsG9LY3oqe8EmcQu3TmoFosGeeprBFbATMJt9LpV4AapQC4",
  "key10": "1ABG6mB68qQPdH2M6p99p4sqrf4JmdAfe8yu2sVUMo3QJZM3Sm1wA7xhVPB3jdH7v9jbkbEwpxCtrnJxmdJkDBR",
  "key11": "2BmAJKgmdJ4ozr3dEnak2qeu2T8dWKqcqo3kcqT3BKtQattyKFhNQStsoP49e7U9Wjh87Vd948ymSRkbGSCSYJhX",
  "key12": "3hiykNiXTDTKjBz1aLAkdtF4t6cRVwJumFFjdhhbZygDigqqV36ULHNrnuhvpgsf5PLJXbQuEeN7oih1bktkRZzH",
  "key13": "3AEoqxCxnj2Ki5BKwBNFuqTcpQkstLYVbJR4hioh7Xu9LcZV5QZMQ1ZuSq1WCFiQsMkbTUAMVfUpprwNgGx699iq",
  "key14": "LCa748xvpqvDdHkDRjeKM3ZqZBh5cyhtuMEmsvd93x5VEyxRvedPcVbshpvo8yMnVWhpwtNeBBmVRqbxhoy9P69",
  "key15": "4pRpGFn2LuhF5gZVJfnHCseoyzycgAcMreKBt2FsjVVGpBSvsiNzAkbwk946eJysqXvugSZhpTca8dn5Dyjtksd3",
  "key16": "aG6gTo5CwWWramWCqY11b1TUWVcGzF3S3zH4XaRVzJjqzTGxjdevXYQHGS6uYUx4mrodXkZRUVzxFkij6QdGTC4",
  "key17": "5siDm9ssddsnjrL5YmHaheb9BmcZQak3LAc531kQxnzUagPYwiNq3F5xRiRp7ZhJHrxfXXHUrPEmNWTLzwzsf8Pa",
  "key18": "5svyuqWRfoPoSAvgzUr6JEWueU6Vh8P1NbhYvjzJKW8fqcb1Ttiy9sSbPq77Fmyddf2asKucHxufbn6J4cTzA3xt",
  "key19": "5difEM7jeqjUdmD9VGfbmuDWJzmjkDzjZTQG1eLMEV9M3seEWMqyNuC8YLzK1x8qKBSkG19UD5fxVCkd5rDkxugN",
  "key20": "2LN8Q1LUT18aEfTG75Bk6kekD6Tfbg2CK9cVqdU384rfjkPosrLFEJHGangxGmC57J8mQdqKMe4iF1mSuM8JU31C",
  "key21": "A4PXpe4MJVejKfTwT2VqDrcwgMTDqb8JTSE8tMQgfAVkqAkiwhey28usxYCiJPtjjvVnC9APggy3ssudfA3C8EY",
  "key22": "4RKtnGtKh2EX1Ys3SK1qYdtpg4NsPAPCF3tzaLtgSBh2LDEpUaQewX9uVP1qdm1cPhgqCtk1SwKhWX7xuNGD7muT",
  "key23": "21uigAy3kriW39VAMs5Sk1NfX1u8HZ3Jf949AgbtrCghF4nHUwhuP8zhrPdnBS4MCVCbKYKadhSBfBGnTvU35bvG",
  "key24": "2h6UtaurLXSoKRGmaZjevGePuJhVMWTLhmXT4kDpc8TPxaJieaWhs6yCch2uBwWWsSbZCyXhYcaazkWGgigtU85E",
  "key25": "2HspX1wqf9yUp44Xdy8H5J43qrmo2osoyAQQYxksF6qR77u5Jwhcw3pM13rF94421JQfW1n3q5VrVaMwfDVZzML5",
  "key26": "3en5uv9u8bwms7f6ioperhWaHNX3ctCLbTF3va7nuy11PKfwCzGYLSLnENshgsd979pSfetX6VgfqeAjun1tFkHp",
  "key27": "45cpQFFruyarU9P5dzqgvzVQQuPdDFfxDBAt9tHygfYhUyyMhjkZZRZwSfwmfQtxAhW8L2YKQsjWpxHa9xKZoKH7",
  "key28": "2C9kBJv7yW1YhKbiSihD3mZgHF5zQhyWowqHAZkMFzajEHc2VfbryudAJ8CsYqguv2rsBhz8e5kLEYnJufGG1rUM",
  "key29": "2Yueni8MoWjM61Z7FTpRFh3tL6Bzv1ofP4dZkVRa865jGgZ4yRn4JmWz9ete6K2Md25rRydukgD72FnASsEYw5zV",
  "key30": "5SqwaAs3qgVRWWX5evdkk4BMREzjedYa8JyZgpgS8uhKZC1qSH7Hhw2J2tAYVityroQusmHrgKCsuv64tKEq7AbC",
  "key31": "2tKEmWc3fY3Q4bcrHcwtjzv1F8npMWb1sgpF6dfPuro6beyTUwnsqLg3nfNpVkbbkjVeYCiV2ZNbhCbupKhEE36T",
  "key32": "4mojrApfY7YtA1S8cSbnKXnfXPHGuYYTjK3fBwW1kSm1qCtwq2AMAwocRSDQMyEWox7DqRzfSxoimJe15ub7rFrw",
  "key33": "4ESchU1ZfGCRWAysvyYFBFCrxNeMSc3GH2QkGgUqDqyzDKbdqnMMvsSRvcEQzH9Y72JX66V1MLUPD8xtMMfeJdGT",
  "key34": "5eDEYuRni6tkoJ7hCcC81Z8ApMx6gzkic3fiFZ9uni44uJpLedgVjry3i4eTRRX7wSjGX56CZo1jP17BMBx692Hx",
  "key35": "23FW8sBnqNRrbzFA8tsrBg6huM1BRD4bMhVtcmL1v7Vpjgn9t5X422mgQzmYnNpYhMSsgoZ1eWsfiLn5oVtwGnuD",
  "key36": "2pNfxqyxydZbhxS3e5PfvvWqc4xuKJBkeVXk3BwrC46XtUS3k7rEjmQCXyvzGNEQZhBs68rEc41MYgmhfPWfN4DG",
  "key37": "5buMpDSXNM2FvMvyAPg6EYvhKRE53kDxELdxwQLsDPuBrcqSkqR7Ms9W4Dk19U1FMe48sU4kteNGUst8FJBFtHS1",
  "key38": "3gyK9yPRnvSH6G5CP6Di91uXY3AgHDd1HimeDw8p3xpiTFjgnuSJ5HsgP4iMNW3Miy1zZ9FwhSmtWZHmY87KGmGJ",
  "key39": "5W5ac75fzjECu38jJJ2NYJH42LiQ9AGWoEMF5v94SYnUdZqhaLzaS6zzobPpNLZQspSPRQ3NRhG4j5XdwszMQqxF",
  "key40": "bcaemSXAPuo4CiQxPDqbJArNpk5eUzfYBcHUiWBh2sPJeJA7M7DQdgn5nvA6pBb2N8JE11dzDYsAT1RhvmFodJs",
  "key41": "33ehFE7Vdv6Dg1YRxW7b28X1QhYMjdC8wqQeKWMdJ21zswyANFCUvE6ZjutZ1iCurr1rVsojCGMEbNLvefYoAEkc"
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
