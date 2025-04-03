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
    "4Gx8Dmqaz4ApeXzgZ8mLdSKSZtzmXx9wTa2uzCLAZJcJoSEvDWWGL4N2pQa1VAVjLvfwR7WeuPj9LBLcpcQFKkPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ScWuePHZVcFvGwiLBFdKv4uYosxL2aKb7i1nLdJiTetHB471VpiMJxAP5uAS44MHqhz3VYanF9vYDvrZs9CH45N",
  "key1": "4V5w1H9uU4kwUHKBN7kf7CiPHigWteaKP8isoesTCKVeYFBr1zSCYCGZXB18zew7MS6yj13BS2LTxsG3byMEVd5A",
  "key2": "36cheRzZJbqd1i2my8YpkM9LWBsD5iP5GLQneUTwzWQmiLzz5LG8dEeuDX3CakNzXQtyefC7QchLds5F4uLNadgt",
  "key3": "42RCu6fgg3xTRo74bsUUJaFweVBZ6fUEeS3zZ27ty3VtLtn1aHkk5StZVzGmLSgxDKb14NJzegdAGnJZnDRizFfx",
  "key4": "54Yfye8uNMzRHUbnoBvK1tNqYUaRr5kYTWMYJ1XRoi69SSSzFeABc62EfgKKr6C7ZscswLPfGxf9GZfn67mHitv",
  "key5": "2DYxNAq3EjsnYHY97hpyk81ckRXzbkeWAtARhD6WdugpoiyutSYR755CtiVUABxZrY7zXJ8R69Xwnc9y4GxXdBpF",
  "key6": "121eE7XkzghwN9skxszhbDVVfiDoXzKtEbUieuqgujNFsw2CJbRGaj9D9mBe9NzEaF3Ed5KYr9VC4xq9eqUgyKTn",
  "key7": "5BuAisGNnAzDYvmUmhtZ1CAQ59ud2oLAqnKPwrrstwqcdKPpKTs9oMg7k12xx3GjZmqmi6cCx21W4bP37uMDU9K1",
  "key8": "5JNNwHWYc44PV1KC8CnsqyZBxgMES2VFsb6YPwDfF67JqddeNboRmRXmtsKp9p51Yk6fuzekmLyKDJwcGsTUdL2n",
  "key9": "65CnXiVXYDXU9aojsSxc9QJcZhdfyNVhHon92dW8TP9xGNpCJgiWSDMK2CjELSVBgvCHZZsipGcJyMXjeengqDwy",
  "key10": "5MgRmmvN589AJHmUBDzcqRdm3TUQ8weB2hg4B3MFXasJusy3EeHPM2LNRhJrvoLU6AhbDwKqAobVN7hhmb3BBMa2",
  "key11": "39Vvw4itsyhPcqV848SRTnBitF3oMbnLH6km3YPgedaw4t6oLCVwovdhkPabX94oS4KBZG9tgs5rt1MZdgmbPEbN",
  "key12": "4DAuDJiWJ528AzUKHP1wiv9s4ttnXkaW5ZewPUFosZuaCjVCxeDUyyTa7xLps1gQ7VagqheFJQ6HwsT6yqVJu4Ck",
  "key13": "3vgu5c8ztH9popz4QVkHtH9Pb8kz6EzLuFkqLuZWiAXSLMMNfEGgGAFU3r9gcDzLtSt5qRtDfDcEG1r2yuvMCMsG",
  "key14": "2aPkbLgobqNw8pBtdhDPKVQrZZPBKooxfRtosKU543ynnzkF7ALCfsTNYQuUbTSgET1FAUvHCTFr4tbyVuG9EQY3",
  "key15": "inQjXRmqfQ98zxKpZTahSUfKhmzGviczZdyvZowPhSFDxJDjvbXXU1j5giSqZzGx61Rcm2WurLapRGB1v54eZBU",
  "key16": "Hf7BZBaDxXRent7y3GHKsZV65769J84jkksqknQbVAxiPMh9qUkgqtoGDtoJjkD876wpa8R5L98EFN759EvPA6o",
  "key17": "jtxqPQfietYic2U98oL6YeGwACqXH6Lg4k6EEXcXsjEXpZQ1AxfkTCJUMeuC5M2yVUvTJ3NNH2p1rwPtfeNJbQh",
  "key18": "5h7MZXpsaGEXvNmzrTS8JG21e4w7jVUXuvKN89w6q2vzhQNqubxo4u71K91furGx471GFXEf1i49dPDXuZ4vhiv7",
  "key19": "5gi9TumQmraN4ADT9JBdnvzZtFeTqzaExRKomxwRRS25s2VC1X9638NucyF9FJaAwgtErtYMLcypH42EWKMiBFrw",
  "key20": "3Pbo4x8hafzaph2xi6MxyDGJkddPSTrF1ta5aPiJSUqX3CuKKSpQgGnhmqd3nYScW6i2ggKwKfTPiedNt9CAj3Gs",
  "key21": "2QCCdTZGL4Zgwe9PLhWN94BEw93jTwGBuvkk9kihsTHXU1ddhieeGU2wrQPMyx1wR3qoiUjAyaUDk3MU8Q4q2yi9",
  "key22": "4u3JPHakd4JSuYGJE1gM6HT4Veeo7h9iGrCCyXhjDi5tSDBDqD7KP63rvZLhq9mXiEWDQpgaHGXenTABXXW8hErK",
  "key23": "QzdLP8itsmjPQMYQ2KJKUM7ZDA9Y77SJ3RLRUuqG7XgV3Hkp8Q1nh5xZ1WWhRfZc3UA8aLWv1YZABRuwT9cvXd6",
  "key24": "2uaHsCXgUNYpwzEYxNpuvKQ4kGsAGmWS7AqacwapWh94mpb6UUCs79pYNrUnFpPSuAo3Wqk6HP137EkZAeGFEHk4",
  "key25": "5jAjXF5DptNPQAvYjGJxQYQ5Jtti4iVJ2m2KPAttzeXNtmNksEeAYZHs3E5o2xaLEJidSayNRYunKsoA3pwoeMVs",
  "key26": "2sCCDTQ8DxFGt1rfUhmPdV8yzUYVnDuK6oXqnc9F278ANZjjHEuJtzfC7Ed7V1bLgJrQfcoNueD2y2SjGf2sZ9tF",
  "key27": "644hH4v2fFm1YVYm6bkSPZQ5qgGrkiu2vgqVQX3v18w7xbdqTjaEDyvnUeJ8dnLtczocGctczELR74JHd2V4BXFE",
  "key28": "2FVKzxHfxTaK1sikmrfPop2fH3eX8xZsBMmXDTXM2zihnBFXch4hGNK89yZP5yckxbw2ear88gjW6aVVx2pu9zyi",
  "key29": "49EW8cV8rx2aa8MZjqmJV5CJTotFYsszg7u7jVzACPPYaX7foQBTVMmC1q49GdM3PdHxv9d2sP1uC1hitM1PRerS",
  "key30": "2QdWp3HosKR1yUZyA3yVV4gp7o9ooTcVC7GhZWESAgEyKjqrQL9gac79woVoHztFvQGdWhHYAinfg9pkXR2GLWUF",
  "key31": "25G6SvYtFoBqVGQGY15zSohhx23m8ASs59gYHA5p18yCrMjQV8bKZbcDmz6xXAfN7xpSRgdk91sMLxuBzKGjdXzv",
  "key32": "4jp1UN6vvVfrjYH9cuiHfBLMdW7s4TsUUUyqi4eJcbL9zuvXnFFjdj1UL4e4kEbq1feho6jGabifkDoeC524enp5",
  "key33": "5REsFDgmiPyBUppzBhimqowaQMDJzdhiM8h1nzRJvqy4GC2MieQCx4zdaMZfTWyLewWcgam3pScQrY8jUR4LiL9Y",
  "key34": "QWFfXfSWS3GzR8WNJoGT4kCB5tHacBm1yqbYZwcitqDLMPN7aedqKbcgPSDR8x7pWqDz3TvQGHakSZ6TsCf6q6z",
  "key35": "5rezfuD2VmGa6RywcghKT7TTECvNN7LiSNRpBDeuheDx9Qz5NTrziRMZWAvhJwxA1DJWJQYaJTEmDoGB7j9hZoNd",
  "key36": "4p2vBqyRLdyvpsWVpTzSp1ASrEoEF385fn6pDzRE8dBM4kH4zGwRhpEW3otHz1LkdoBVgPN4orFNkFCtsrzAn1Fj",
  "key37": "3uHgcHnosBt8hCA86FeiFHYH8L8M9b72PiKEEcDiYMofCSHHkePsdT8pMAi1CGcbUGqqkHfcxtiMLQZh4dN6BhME",
  "key38": "z54PBYJodTLaXRp8xu1trtyq2isCXQvTjbzXbGPGQnfKjQqwo82NGUtwWaG3NN45H5go2kKtTDroNbBDGdBwmfM",
  "key39": "5Gfb36VXQdXQeazjqtHZ3bApD6tJRnWo9USaXPDX3wbdFaDzZZLvcjRgSN7cLfw9wuhyNsfLy8DSd4NpzeNFWkc5",
  "key40": "3WVuCFgtWLjWXcLYqUyRyRrUezW7ZEuviJBwWwydAXa6k66FwtghaTZwmGXX3Kdv1sqQqEWUtrFBo7ytyWH1Cw9h",
  "key41": "5SwWngL9diJwHah7g8Rg9qh1s75h2pcimPgeUaWdwcY2ssefFRRVG7bZNi82Zqcwn8eriQU4UhHtnwKYnCRxUJKo",
  "key42": "5uLQMtWyJfZwgxTM73rBNxF5inwRXJEW4TdHTtz6kzNG7nYSRVaARhcyseUb94BmqnPj7oVbAM9Dk87BxQxXwzrG",
  "key43": "3ZEzPH5b3jRi2BGMeDMFP17oX4Zs59A1hMdHoJMK1rKJdxgv6XpTzfLZwBoYdCH9njyMF2qHNZJSBdikWcR8NTBk",
  "key44": "sv2CRf7sv3v4DXjvjQoA1a9v2bZXvSVyLB3ftDopefn9HsQWgaCSgbFikoWN2bnzs5EJPUEzQvK9JiY6cs8CzfX"
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
