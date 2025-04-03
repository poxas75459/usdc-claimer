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
    "4eZThu1492PqdjixB8Umw8yetCxhZmjHA1TXHxYBb9zq3AAcDfZ2bHM87xwH7Ug4N7BfFCF4UJoqxSgZPDNv7z8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogkuGkSG65ersMLntXHgoWrGHZ7CdmncmMco31qZyotaurfRCJiTenpHwseyzYWtStTWRmeZm6WrpEfXQDgtEXe",
  "key1": "ZbsnDCpeQwm3xYbsmymMgmfYSnP1Apv4f3SDA3BMgi1PtwWUxPwwRFVuidHuBjXE28fHmBtoPLRBcR8cb6yJuua",
  "key2": "4Fbbzb6NUUCEutLJ7Tdrt2nZVP6iKBJvDjmu9QhLd9BPbCvbKpCJzvNHM2HJeJCyJHNMgFTDEHMsoghJkFat9L7M",
  "key3": "62gu3crQddibaCYTWd1JEQiMk6bKaQccTX9jXoePGqzb6TTukbBgyMZbAay3iHpqeRUfhybiDtuSmST2ciEEcmB6",
  "key4": "5aoMTz4XddM3ANBYwXMAJnpbkVXEnhgHeLf7UET83RFtoGcteB9GDux9osNU5naoxD9nP8ANGAP6DRgvsh5b99Lp",
  "key5": "41CkRjHpAm8U2nWHEgoANCRnH3PDk3ZoEEuzKD2QD3UnnCPnimXaeJ2vBzacmdPWyGfyAjhgcMgUYhZNyN3Zwjn5",
  "key6": "Y5hBtsrTn2eW7VVBFK9sAsRtB2XKiTKWKQ9mBXWPmg3LzHiHWaf9ZQpdF2BeeSib6fFhFNTcvbgUTY1GVk82hcj",
  "key7": "MYkdCxiHRj8LjjuMxdzaJSiYQz9XjqyA8NQpy5n6HY2RVeaoLSzcLzBXBPT2NcFx5oqybKDDbAGJzsUJvzNfoGC",
  "key8": "udNWdSiKYDkFbuLRBjBT7rZEzrqn1nWuUZer54BM8G5vdWEU8NKtuoBpngaaixP2qmYycAiEwi6gmcQZJTNZRVk",
  "key9": "31jixmpRtaBfX6bEyvbeVnrnTgc9hxr5cjBvPGaJ7ngJyz6c9pobaAFwmtyTyc6nxbajrUcpESzwe3gEy38ssf3m",
  "key10": "2cY8b4GHLdhDt8x1JnQM3CGWLF3K4skcC2xCxHEEpkQe3x3ptuyNqykMZpUKrstq4D6Rj1EuQzHQZVzka4yWCfg5",
  "key11": "4j37FXUx2a3fNJWL6D58QW5xwFk2bsbXffZGA6CzAXse8vcnN9uTXa4av9FyKmVrCDCrj3UDS7s8f7MRyCNwGRzC",
  "key12": "5rKvrpftbCb3rfJUMU1f4d7p9BBy1ZjqErU6EuDnVRT4RZPtEQa9UzJS4NDr7XRFbFHZ2CRHWwwUysaGvHjEPevC",
  "key13": "2STyiJrjZJ6rGMvYPoASgMVZpLgn7zE9NCdRSG1TQ1ieh1go5vV9che7t3THgiWJhY59FPgtNUoDqPVhApPRQ7kk",
  "key14": "gEkE3BA6eVwynNqygpMV7bzcVXHYE87GTiNnW6phFV89YTxDvTeUN9k2NzKdFRhngLqeS9wChMtodsbDfenpMKE",
  "key15": "2XPyYC12MAYizVvY9Um5TZsSdGDL2YiLTeKdR5vtw3bumjkvSusmfZpPK1Jkbhidin8hffH7y18sShTcvUe7WYyy",
  "key16": "22X8Nk2sqnefRSen7tDiDbHxDfiTRv1oNtfskxsjhVVLK9JHfVECer4fFppvykxooKj9KyFtCdfomd4J7zpynHE2",
  "key17": "65HnkuxijVAui5oidMKWPffVp7NAXSc4JNvqjJurXMgbiFWXPpPA5qHDp9NDdoEwPTiW1yLx3bDVBwwvKnZNVvKZ",
  "key18": "2PicxfGdTDXCx6Xekte4TgEmuKcjgjbo3bHmafj5iSYkh6184qxdz5w4SY6hUa94kPDjZQqMMp35pcujyRzQNRKe",
  "key19": "4GRWjvBnvKwp9TDk8mm2mT9NF9s5e4HUVTNAVypmFJZg4oksenouD6Y6mFh4PWrL4VUVFTqNAhd4RbVw9m3eNRwn",
  "key20": "2zYNLxTW4wufUpX7gvvZ8MEBbEEqfbwyHE3kwhuziRNxXHbef3gvAZHcY1pw5UZsCUfbSjKo2MicxwFMkF3NaL76",
  "key21": "4LR3gGp3U8svpS3Nryt29KdDtW8BX1hjW88uaH61EPaBqLavwYkDcoUFtfUjeq83LE97CMaHiFseGVimqhDY2y2E",
  "key22": "5tQj8atwcGxzcLcbcwEowQJM4DhE8e29uGFcHNrkhWttnKe7grSwaeMkPWE3B78UWFahKLNTAmSXkzA6H3Xo2F1K",
  "key23": "4qMzzhMDEo8MXYMKd1uSyH1gZNxMwo5vjFFdYs2rs8if5PyYuLpvUJrvq28zG5bdg6Uvkb1vcigmqw9AAPitJsvK",
  "key24": "3xRuPse325ff5xtG861m5h1CfYZNdqYWiB9Edg6eLXypZM2i2KoqpTHG3vRJLHFwdtKtKiCtLaWELsScx49DaB8T",
  "key25": "pLkkY4qG8ciQc61HjK4mhSSMgew4XmQPtt1qsCEGKyfdsa3iyB3g59bLAU75FYjLaGp7vCpCgBYx4PeNAAWKHnt",
  "key26": "HGBD4kd4ofngfgGvdofvxhTAiU7Q2F9KWyvj3cqiK6tZEFdAiVnTUCpNJeT59ws1MhWj7vpSAYicPFt94ELTxV6",
  "key27": "2gC5GT9L8LSRpFU8U6vLTsbAyf6YfcEDQHQFxWY9qfqeWXCe1uNEuoVEKLEt7217QT8Ef9SPaushSKH6rK9ucbLP",
  "key28": "381Joc8cU4SgJ4oGSuWVSGhj7AfYEUfsVXbJaDmPxsRx38A3gZ16UjKdDf9e5QpPmu2dNUKHPSv6fLvzFrGWrFwm",
  "key29": "3c1Hht3mzsbMXk8xt8rSX7nMFAAYP6CnW42mPhizjqQn4UXf2jtKzCxbH2oyo17qfpVwy2uHmbX89CyoQss9wvRV",
  "key30": "2r9YdpMijnTgGQHxWAWh4EvuQuj3VF4ZdZvhXBhPg7DybkMUpVmhSZLsft5cd1hKgmaCMuWpZCUa7jgjjqj8MxAh",
  "key31": "2aC9dqVfKteup2x9wnFZuHfA1CYkeEt26gjoG65VE2X1gCs9e1fjcX7SHupKTmVQPLayS8jyssbJ4HDQ8rDJmnJL",
  "key32": "2JLoUCEXknyMTTrtfQ6h6xKftVbvM8ww21UQywjngEMfxorJ1uE1kcxwFiektyvPuBSoVw7D3UtzvzuFrHCh1NmV",
  "key33": "5pHewLncvn8yrv2WF3wa2rGeog2EuTabi5mou3S4Ng6e2S2hd5TWZvbJpvRggBtGvSGofdC2wTFojuD3dXosSovd",
  "key34": "2iHsmS7rGJTuveqyoLWLUBxYG8irKWECQhotFzybVNAkmYSwky6hHVyFV8ZbW6o7u8Y7Jr8BkjMMjgrgy2Acf6Fa",
  "key35": "3SB89RJdLkYAqVe9A1ijjRVa5vve9tM9Zn4wTRg368FUxFPwLZbVQj7gBqN7oNacqm59GzFVCXqbPdnL4fQPyADf",
  "key36": "ZT8sqF7CW8hshAM5MFBPhSwxDNPVPFrNTXB4S2ma4RFxjeNmk7jwWseL3DbKZNQjZ4nGHZgEqMmjw8T6zd84aBh",
  "key37": "3beKZPt5KdnnYqR6cd6j7tmN7oZBAhx9k4AWgy7P37WvWy4nnRf4bTBrhsARkRr5YwBkTrJYdZb38c41hd5WBkJa",
  "key38": "26rYs3WLQqUjzjrLm98JuNHrKCTBbbHy2M3DC9ox1sTvxezmMtqdRTt8GHB23BB2vw6vV1tZtRCyQCD6caY7anPc",
  "key39": "3x17iwdDC9GAmPFHTu9Y8BvTsPPJ4naMUK7nPSZxRst4hiN2VZVnmofukYb5eJ49zfZRKgmwxcwZiAExc9kjckXk",
  "key40": "C2m8vvrayZEW3vsA8C2fhQ5xeQ3ibGmkXfsAqyscfhyTXbrdTrZfvKDaUd9urqUVcjF5vmtspzP5QdfCKNpjT2r",
  "key41": "42J1S6cVjGzfxSdA3A9PbYstnar4wFLcEqSmY61D2vYDPhFhdtLEqenyoWveUpHFmaRcHugxeSxnHpMwrGrUebr2",
  "key42": "3dD4as1c1NPjfsXYnueThhNdcLA5PCmniWDphPxBuBgfv7ohT71KFKDTRVFFQh2GjcestoBkusbYuqRN7N9tnGog"
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
