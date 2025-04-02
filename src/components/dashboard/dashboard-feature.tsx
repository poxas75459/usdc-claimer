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
    "48T5WqqJ44zfSo9VqfbrLgCH8GnXf9eRucLQ18ucCnjqGYrVXGfx4R1EitePH9ncUgkrV7BypbqXoztSrDZydC6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "341YW7dLejwbxKu63sfgGDJA6KfscVsAhef4qyNTopbrj5TDRpa5xZYsc7j7K3CWY98S2yEE4ippBto2g9VjhBvo",
  "key1": "4ovXg1Sj7j5nCiKdP8jvSDBvG1Gh33DWBB8srSmHfhfhdgE1qb7yDv2Dsapj73Afon51zDSVGZK9vQDpjS92V3yQ",
  "key2": "4jJg2KjUuUXrWxHfPX4x3Luh7npoqzSDktvr8LKvtDm9HKAW8fHwkKasmwMqQgnYxVZ7fF5LbFTHsaAUGebQxWJq",
  "key3": "2nqfsGPKQMW622cxcV7bU5eKjfDB5CvAZLqutX9LxunQpQXriAwEiT76xYFzzs4dc15CPpYyz3Svc5mQ8Byzw5H8",
  "key4": "272NVLYJfk3KPvGwYKudAQXXyMjRnypAD8fSZGRh5ykSUsFMtj7jQrToQmSVNE55GSFqvUjxyTj8PvuMJadrdCJv",
  "key5": "3REXsENeWvLKr5Hs2i9cHB9oD3J8YwoTJ4Why49dk3XWvESFJb79hR4gRbDCGdtHx99XmqrHjGPtTC9jGfkqPJ1n",
  "key6": "4BqV6zeFWNvutcqkgrZNf74VeiG9Tb1HdyjANU5okxdKqJpYbwe7KSm7MrEBGmq1iSinGjv8XruBUx5C4EBw7JuR",
  "key7": "LGGb723NVz7mUsKAVc8aj6FjxqRzAaCGU73i8krhXGsjBjnZcCTJamu4Y6asjdZKsAk5Gnk3n125aqPEWgej6r2",
  "key8": "3zpQ7NmLou6QK4o6kb4kmhzZsFEpKfWxLWtEbVfEPdVbLdyZFqATWfK82zpPwRP324GNor7E4B2ob3X8QQsuj67q",
  "key9": "3SK9otenq647bEJPjZLDAiodQChpHcazvRobfjtyfso2FAYS8PkmbrYZZZraXBWMoXxQJetYr43i2DdCKo8v13Dk",
  "key10": "3YDceESryh9Z1Hi3jnU9dBVR8CscrfYDquhW6yPnVL1NWpLqvkHKm11dn2dg38dxBL9HHZ9zYa5zNUWDodn2W9oE",
  "key11": "4568bp8uNrpY7pbysWgWXjt7FoeyxBSXqKe8FQBnzPcwFHoyG9cUtqG1NyrDALsbLq4Db3NJ35AkUVP8gfjT3jGE",
  "key12": "5QW97K2G9FKzcWGhBmby95kTx1eSY54qmt83n3rEWVfVwnujzvs7ojrAxYtY1NkGiTq7gjZhFMRGtXiTai4fvQBv",
  "key13": "4tkY9jp9HT9FeCCxmoxkCFGnzs3QD4W8x5mkMt3tekZRZesEWVgbNSgixXLJemuVmBvBEwgXqKanQDvc5N73KZ27",
  "key14": "UMpHgXFuFisZyMGjq88HBPdhbmRd1NM33sNHjFBLdorJdTaePzR2h7FtWeTJgnESX78ZopKgo3BXSGPHJ8MpDvp",
  "key15": "4X8rE1PJ3KG1MXKcQcaKb7dvVy8pYjBv81hFqqSJ1GCaZvzXJAoYjyvH9pCzTTAJXtpPGwUKr6wa21RUEVJRXxx9",
  "key16": "2z5isnHGZBPBor4LvM1znkauNRbxzredeH7MKwJ4cGAFgfQQTNM213gP5MDqQxojQ6rMFpBW1kRWJdB7sV4Hmk6T",
  "key17": "2jVGwugZTLnKdsoSRqQBprfVfMCvbNEDdegiCWQarXppYqfFkXF1MUm9fsjbWj1kdW3d3qQwoSjfp8gcz9HR5Yre",
  "key18": "2p9VJ7Sfsb26n6prxpjpuErGuLrmMvkxmWTMi2K9rTKGo8w7A9cLLKGJgyLkik5w5burafMhzJVFwGmUapXGHsvr",
  "key19": "4fKh6mnpggpKUhwrSFZsqScA2HvkRjpatwPsTtongRgdae9bxzHJD3riRADq5QXhETepwrgayp6kQNKgtzvp35NB",
  "key20": "34pFqQvPE4cC8tZtivucMGtuuL7zQUK4bKqHqt7vysqLKtye7fQ7HqFW66WUb1mSCdFahz3MRwA4Vk8ifGQGQVZ4",
  "key21": "5EndycUfnN9qDXj2TVbejQ6LM4TivVWsenaM2cGNuFQe3MS794oAojevazfqWWUUKPpZhKnv6dJMgnexQb49XtLL",
  "key22": "Z1eSiDZqB4tnumcUXtwiy1xK2Net1CdXWCr5AoWLe6fbtAXqS4LtfstmaGRd5mqDKSaea2in6n1mYeEYzNuRr5h",
  "key23": "tBu3mBQNePbkT3Kb6TsqXofHxY4yVVgk7ZvGkzVBfboqh6tfBBkRDAXZrT6Yut8gYy2YeFWhoZUh1yr8e4ETcMT",
  "key24": "4Xy6dyMiLwinT8uexu19wRjCbntVZrPH2DrZQGFqf9E3LKjVGZGxV4YrbahVxKLXXnCu2FnKkD5qPV144nHS99D7",
  "key25": "C1W5rSrfbzcJE7Lv9TKRZjcanoH3Jg7G9Nw8TJE4FRt23Lrdej4UVf9QmBwJTjfpT7D6LEqJMKPYSL2dhVUR2Zf",
  "key26": "4XLWy8Cb73WiHs8CtZHnGpWD8B4hhbRXuBCwKH9VqTcwkZLRzSfsJvwk8YTi5zEjoxqt74gSMiq41TvZC4Udu2p3",
  "key27": "3D8hsuy7H1YH1RwqC7cDhwvBMp55BwUA3rp4ZASfFZZXvG1Lm1UfKzwogK19bp1TwCxzgAANRgScxReJ5DWFNFLs",
  "key28": "41FYb9oHwkMFxAYcpcBm2cCDGWSmeajGomrRELNXRqhUD95bpb2pbzuyfqNgHoCVcAEa9pNyGcDvHhYF8ugg65WA",
  "key29": "vgRcsNNoPEigJdj9dZ5guEZZcnHcWwNF2mm8Bb7tyqVJJ5dUqSTHxSsivBA63zJzd5EseypF9T1Jr311HGkmFPP",
  "key30": "4CtWMsDiEEdrRX5GaNk1h5VjpKB5xuad4eGkAPAXWVJmPw2aLKiMwrFK78jQzMQWKRJAJAxhK4HQBt4Lk51iqA8u",
  "key31": "2jHRhQE7VsZo5kAQQUeokZydkphF85ZTrR6vjBKP9nKbf8fxLNENTtemvVRxDXuPLT6w6T2Vf8BNofge62Ux7uUw",
  "key32": "2qbRh2Ux9p3JjQo68GPf6Z23GMuwh6J5LF6QLerzXX2ZpXf4U2dKDCtB8rNw5adBicpik3XJA7s9YQewQABFNHXq",
  "key33": "2tQjRwSeVB2poGpZDuQrSnMrvUFf42PYWPVVY71tmUUk7gUFb6TwhB41JHQ3A6B4zZK3mQhvwYuB1m937NKZjG7i",
  "key34": "2XPsjFrw3R52Y6oKmcx58sGYFkSCEe5fd6yCtdJN17Z6svqhJMZVPRjniJkm7aG9Ap9EWLgqyPdujrVMao5Z9yBE",
  "key35": "3vvKC1WitvnbkUVJDxrqPN16S1UMrkrCrYSxt2VwG75j8qPZ8mpV8yXXEQzyXTptQfnPET16npfmD9XN7RXZoW6k",
  "key36": "5F1EEkNoAbevuVCMPX4P3HjyAVKcyD16aFeNXqNgxLpNSpk1q8n1vtRW5oA8hH5vStCQrcYAw2mccndyVJVLmjFN",
  "key37": "Gjn8YEuEroZoLHRAichiJemEGhxrKRryYjEZnQxG2ecMi5u6CKX38y71Bg3S16s513JN84Mz8swArKz4rcYenK9",
  "key38": "3C2xSvSKyD29NhzgMNtGwfFwN2vuZkAaGPuxaZdvMxhTRgXC5oX8VnKmDofUh5SQphNNbEXckrqpj9WpAFTEAvFx",
  "key39": "2wYWZFQ4uTyS3An2qQ475fwDTuSqGY5ykayKkAGo59ZkTiSapbVqKVEAA1jcntnv2oKroBMapoKgbXjKNk6SRLE",
  "key40": "29kPbZDS788sY2Woug5Be5WfTiD4U2hNyjmgkjAWx96xrmoiAEnZ2xFBrmwJ5DYkfSJAbjHmFxN7V5rEhy7BwmK9",
  "key41": "4Snf1Ww5BYGWYifxfFqDV7zKrCjw811tMZWqPF8vLD3WAGESFe8RHBUiKanw6jE4c4HVuusTADpEuHzVgSDhhmYh",
  "key42": "2FHeQSwgKEqeJtafmu6xAr2PeNj7rw3TuMPcPefoS6KboXPPHEgww2NXnAyemC93a3KjXgNrwtiCb7UzSRV3kSe7",
  "key43": "2Nr67FhiJFckFEmuPM3q8RhiFhiWxvGSqrKooA6BVPvxh2E8hbM2R3jespo6sdrAhicbzunCAHGsRoFp6uEvj1Sy",
  "key44": "4KYfG555mvWcbE596GhFNX6FzNnL4qvZG9oFJqfLmDZeMuXy78Nkc342u8GhKAbupwvgtfqF6MFJn5mBunWKdp2v",
  "key45": "33RnwygXHL3qGPD4MUqhV8wwKTMuTAn4zUv4zDhwEZYMT6fq9aAfdfA1Vw1Bw9mEAcjFVomgwgGF358Yz14cCBU8",
  "key46": "426GMKj8F3dRmgxdmjHcnSfK3c2wMtYN5sH2ZPn1zWdVD4xiNG1uG675iPiQMmByGfLQ4eTpoQ92ZUsAVetjuqnD",
  "key47": "5qwhNkjKR7jgCcGFavki1NJa4VV8HGoxLnUD5xnS8shiTkGuG7QrvPxwYe3DUXUFxgk6RsYVXfcWxyNHYs9MAhiL",
  "key48": "373Ct4axr5YExjW4saxE2Px1ijMDPqb8NPTvPvoPZffGWdDydhnxzcHYg2XJbHoQ49RVTi7pibhsnd4cWfZYxduf",
  "key49": "4oAJmw3guLYEA4AqecVfVygGYybKRxShtxH488k8kkiNVULawtJxc15XGgKazHuh1fCci7J4mJZs3acBUFGc8a89"
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
