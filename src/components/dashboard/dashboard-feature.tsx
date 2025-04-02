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
    "54Asb9ipht74y4ugoD6pXJYaWBYckhMABXevjcALuvQ6qB199of1QHGk2MFyLSrH9epcVutW34EtA4XqvL2uwMKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YBmgYNVHmEhHqTobWnSdfs6nLbCJdh9EtXXLLuz3o1SCf4JkXPH8tZtg8G4kdYAPmR24Eenzfvrhv8vvYrELqnM",
  "key1": "3utfHVbP3WpeZTWnUaZBGy5fJdTtsWrRic6sjberVHbvmUcM5PCRdsTyr5CQ4tyPs32y7fXowZrvb8cJcK3MJVGs",
  "key2": "2qtKbU1J8mwHVT4kqZpWfZ6Hkn3vqfiQTPQbfULjuVPEFXwXzXS1m7SrV2uXcYaKZjfnqLwgKaUvSaNijSGXA6xy",
  "key3": "fxQf7moC5btZY1cz43PmJcen5Jbe9HputXa165zXFXtPf8dkXBakYMVgdebbs3TorVCzBZQZnRsLEBYAAVHUbBc",
  "key4": "4KEUkG5tstpkHV6GsG9ZJD1aeKJKiXRnFoLAftr8D7LBS75PNJTcWHL2axeh5cV9R1WyptVqr4Xo3PT5NReVPYV9",
  "key5": "5M3mYHTqx2CZKj5M1EPT3u4FbJnZ28W48gR2dtJy14JbsUCgXLDiKEwvU172H3dLkEXQrcd3LiBzH6J7m25zPM85",
  "key6": "2K9t4aSPGMteqPUtCWNiiZG4qU9zWGCNgoQ4Nd6ckKcAnymXntBQd2jYgbTVPLTF3T4Ku9gm73VZbQypymuYtvdv",
  "key7": "3KGppB9bkDxtqQcdetLPj4bBNHWzPmyfU2Y4tr8nywAtn4sZZkUa2frx6US7nwyaTYLSkxSi8uiFC3mzTvdeu3ct",
  "key8": "3KKDR5Gxf67wUidQMAHWQgKfPkkmNLAMZdLJp4nz3N9h67hAZxRF34va2nH3Jch3BR6VgJ6EPt2JK47odE8GuxS",
  "key9": "5CwvtQexhy2UysVfkVwX2kVfV9FtnTMyqLgy8HFTyTvuCcnYc6PKZwNxL5AwxN2DsruxfWR1GXXwXxSuDab6iVNr",
  "key10": "5tBvj1zNMi2LnsFs3LM1FwvfbCTD5U21ZaLLXpPx6JZRARh2LtCJrGNjeKtrvpjLk8hFQTps4mfowZyA1tEpoSno",
  "key11": "5z1vgfxjq4FKpwXASiMriE7NHLg2XkZFvCrAWTWGgCRbWw5RadeUzBFvCG3dHMeWww9NSVoMDyQQ48JCQGqWGg4G",
  "key12": "eP7XfQyvXZzh2jFwGz6KDXGFxyPnRUwEdn2gAGeQs6iWe2tGB5FSwvaKNwYScvFp2zMHnTPJ5j5NKxuewNtJ8o3",
  "key13": "64MX2pWUZ7R97FG5B5fk5hTuTGif8SV1Lfv1e7bVUCrabVYw35EoVuen6L2641wfzP9VXVmreAkMNCa9pQwJYzeM",
  "key14": "TDuoTx4h4XiaUjKq9Z4KZRryJ3gmpA1WR8rWUsmnn5aB2j7swT1eTKRmv1KsAcgDtivB8KrZkwHkrZ56V5ms8o5",
  "key15": "2v6zDj5N4d8T4zeWXvmHDZWbJ1wJo8ns7QWjPrS3yv47DEaoYoimnezkCGyQHh6kA6D3B1Rn1pwEkHmjS4uwTPRW",
  "key16": "3xHBkjxSB5XQqqAERVpxuFVLrJXZZ1Xg223Z15vxEXLabWQpPjwGBpWkkZBXCM3EpLQe7m5Zd14tq6148bwaZizv",
  "key17": "24EubQRFMw2JVz3Ltp91sULp1nVAvAezVz8iKQTW3Njgiz6BeHDSGtNqc3ztGoRDnihTJHF9gm5bkRHp2o6e4An9",
  "key18": "pVeSvDfzQcBxampN6hAGHctNcggSN36UbHxCP3PfPssybYDeieKoPZJGN5RXn3A9UEDroMRsrHiRdBNqXxVSV8u",
  "key19": "5woJ89kTLNb2EeDmTQn5FzjgAhgdA9dqGTkTSpNh6W6G4H6osPKnx9onPCLw8WXfspKQt83dXgaTybjcQrxWhCP2",
  "key20": "PpbaxRZNCgwrr5j52hpNBw4PsupQpTKF5tKAE7vxNnf5wfFb5FyQBkh7bYTR89Nc8t2aw2UtyVf6m9AwMX56UEj",
  "key21": "3fb2rNJQPxeAy7Vdgn5znJ77xVE7KBEW2FvdcRVr49GnSYoktY9TEQLcByumwxyJom1BDgSocCrSTqWb7GqcG7bj",
  "key22": "4z4U6ZiEwYdk5YN9vp5KXFDf7nG8d8AAkUzDHSUsCJLpYDLLKyrGsziRYsGP4nTHQwTNkCAKmDybRYGM17n5SFXY",
  "key23": "2bMPFws2Bm1Z4dicRhnh8H8A3HRWtLDU6s3c56H3woSFGDQ2E2n5h3RZPocuzA5zcd5UbQqiH2hzM9uCNSEHNAWW",
  "key24": "2toiYM5Nsg6TSpn7VwqXQppd6e1z7NePKVBRJfreQh1CPa9TFb7JSvnqhdNbyG97HZ6h3hgYBnw2kW7XKUkkYoEi",
  "key25": "5TUsGgpkwWhCgsCG1XLaC3pEaegBmNtSY9xD9dtcW61UiDLQAoP546Mg5TvqxtyaPAzU1w3LGj5gMfndGguY2scX",
  "key26": "4Kt9uogBJ3ooXX47uxrJju7cB4DC6GF6ow68sZ33VEXHuLLFyt93sJrTpSwkhL1eE5XPxcnwuwdaazDg7xpU7kdW",
  "key27": "2tNmX8GamovJmtWSKvGhD8Wj4iTXsdVxjydiSLHUG3VsrYWn9oRzMKaE9TtRuiqQZhHNJtF8S6c3SHYcVsPu5Ycp",
  "key28": "3yUc9CRBGQCbSHFBXU7trb3eQEdegxeHUcRm6GptfSN4jPjnCVZWoWkJtRe2aTLZkJG2RonWT7KeGYbkbMwqEmo6",
  "key29": "2dbkKzHaxTaCSc7KBU2LEms4VqrLUAm6iUgA4eeBm6H9mxcFxsokast6vRQ9D1jeripoYxsPSwDoiJVtaH4ac6jL",
  "key30": "4ghiAPw348TWEjNbL8114fgS5N8VHC33tidZTFAs5TzvNUFN1mCf9oiBuFscSSU3hvpVt9Fp9TdXNWbpSKjaGpex",
  "key31": "4i2J59hobF7uhsY7SdyFsdE8yNxZ1zDTZcmFWQBtErUF53vVjGNuTEawBWpanYBsrGQVE7zacQR3rJPT1DA56RVu",
  "key32": "3YRDakZqYGauxKrb4Ux7VTnmJymcE92sPaJFdaKbkjb99P7H7HzubsQ6VHevcSypgH3sNoScrGvmnBit2gkHHqek",
  "key33": "RWKKyFMD3KxVsyukZvK9Qxyd1WuMJpduSvHoP1psRbbaDDtUTNp3N34zqoMoy9pefKeTXk5gPRazYNYQq6SESgZ",
  "key34": "25HzRGDT4H6HULK5YcTRU5PMr6jFsE61v6ZPkAK744fiQ1DABtRqxFREfRDzkj3qPsQg7Vc5RWjodHQuNzuVXxbb",
  "key35": "4zPWMnBnUzbu24jVYbKoyu5iaiM2LizjkzP2bn7EZVwcpY382JbpkQoQXjefsn7cmu5SgRocCZ6vWU1PqF7PTKSV",
  "key36": "XeeF1WMCKCGYQEyAbrPn9enFt7GCmUB3BD6VNBrU8ceD76rzrdXxmiq4PiUrx8STuLEsG74jBifYdeYkYsK7iQM",
  "key37": "3sxKTE7mw1UxJPXbaQ7Wv6KZaDw3nJ4RTnQYxLMhii9P5mc25Jir1DjhhQsKGjtmBEWJe8gHtX6m2PK8uSYoXcGs",
  "key38": "48c3JUHp5gqcEyNQkiRcPbqMkuHLVDdwWc348ittYy5zWx5wrs31Bbjr9j8NG7EpKx28gQRxgdvWDnSAWzK6s4mZ"
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
