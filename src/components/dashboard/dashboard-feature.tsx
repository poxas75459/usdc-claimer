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
    "5Jz8xoFWkCmASxqhKsheN4pmosBSdUxkbvG2xqPMRmXt5RsFzqdKumAvcHgCRy1iMxu1tsbT9CALBe1SURDPhiHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oTQf7kuiZP9N5YMVJsFcGfc6EVXcvShcUXAvcaKCewtMUScXpGY6MuSmRze1mocqoSnRNcKmhwxnLbiKqiAZVdz",
  "key1": "xXWwMh1bQj8qnDD6g2dKLu7gCKp5a1Gqkzg4f7rEJB74uPtafcTCzMu1hJSSwQ7KV69dnhfTBTRnrCHAPXEwxe1",
  "key2": "2yVFo55baR2zaQyzdQsWbWboEGD35NXp9CMqR3u2YvGFWEbwhUDZbrAHkHV8NMgbEFwMtuPr3scwMqjQtRhfScGk",
  "key3": "2iY7GnLeSShWsAUjpY1JpwK4NuhqdmWCiBNRwg1ez8ZqDvE1ekA1sREZiw9qe2zVXaNFMaP5na5obvJturXQ81Zf",
  "key4": "4DGUDfkgHtS396aMUx2BNWbVxvFRfUaFV1V4wLh6c8CBboDpWNJPuTYf8Jg13Ppm6G3Z4o17eX9ZtrsE2B8AuG7D",
  "key5": "3UZZDPmbbLgWequbg3m74i3YvYSBAQ2KeaHYvf2FwBY6GbHAjCMEKfhmwcu7s1mxy9EYpdpNG7jETrKpaeq4uAk2",
  "key6": "tJGJ1M2bgLuzoB5jS4qx7gMQFkfGQwMzYcmJnp655Xt1pd4ED9Yq7GqrVRdyr6oAVQvrGjcKSWAjr9Gf514RRH2",
  "key7": "42bCR8SV7CXifAc2pEDDcPFn9MuRfVz3WzXXDnUDmAzDdvoXUYUS5Dkqq5GqVKg7A7GAxojFcscG4RGHPi3qtJT4",
  "key8": "5WYMMEqKUwWvBJRAnsUqP9b6zQnu6zbSU9bfdjdttajaS3qGthRJmZqZMNBebT1gwH9bAKqvRDhCjNbKsizjjjA2",
  "key9": "93hPT3vFwm5yQsuqRiGCsHob1eLVeyFkFLctqRQRAwVgasuDmwWG3iYB7F7BDCca6AatWCqrUk7NLXJWKHMqyN2",
  "key10": "VPDjCTYqvVZmJ2mzsRPZSTXTHAmy35HtmaxCrrBpeHRJQmYpGwj7V8eDCJfVBWi7KgdWw9PuXdrDzdomhQgeF8K",
  "key11": "3A6wtjXh5jVo2oh6iFqYgZaEVmMcJjrrxXVr38ciYdBYn2xVbH8aLeutDvk7Qt53H1fWghh29xKPwG8FFKpv1Zeh",
  "key12": "52eJqRGanPKQHss9534KRvCRmDA9maZfFfGGyyKTdLprupqQL5EF7PBRgZqX9Htt9XNvmKF6UX9v8zKwn2A2pJfr",
  "key13": "2hYWqMi5DZuR1JGTg7jzpj7Vx9DVnuJ9wupiHudPwQugJpEHdKneinaCX1PfgY2h43s1fq3RQ8T6isHMgPvmrs4d",
  "key14": "3gihD7Lgehou23QZ9v3UpcFQ8QojY6PdmYydxyXgCrfijFe7JGxsFKL1tqJUj35sjbX5X6ooCvUB34pVWAxZHWjq",
  "key15": "gXWum9eFVQg4NKcNFU51cbG4b48hFxQkmKJTrRf39pVPX4B1zbU9MpkuTRdm7ZE71fTYg78hqahV2jw2r5ASrXb",
  "key16": "63sri9tdTcdembd9kdJxcmuWjAhLtReduGxegSaqmHnwuU1JZdok9k4QPtvKubVU8sm584NTndZBtvEQ67LkwXxJ",
  "key17": "4xtmNT22BY4mT15ZXLbgiCBF37LonmAnbNPAmxM1bhx6yEFHG2KzQccPELVnepprnJtqKvdx1UZ2GwvytvnnmoyU",
  "key18": "4XzhMTaofpothrGVJ9F6xXKsuqaXVGo2vhAX2sBrqaErBvgr9zRtUG8G3RGNse3hYcPSHFRWmDgU36d8Kh1y2fBG",
  "key19": "4Czs8yJPmrJr2wQKWbUPTNL26zpmQHr3k7tZg2WBagoAW1Sjc5E7VuJ3VaZm9Yk6FVYsaUSDHfgjuSxaBnC9setp",
  "key20": "3cLijPRsCiGwAiSvD1imNdZkHPS9ecYYyKaibp14dFG8JmrPyaMSDsMkd4BrJ5Mdm1SRQwAJjaksPQuPPf5NjMFC",
  "key21": "2Y8LXs2r17SWojC4Egx5hpGsZ4nVBmh3G42eCiHVCtciXW8EFbZV4VHBDxwAYFbup3JqmE1TVnScdCgtBbd1iw1R",
  "key22": "5mTZxBHro4uzazi68y3nc5bG99QUvdZT3TGhUsVxMo6a2KBZ4yUiTLARiWd6DNiRg657sYfxa96ttXDGPiBS27Xz",
  "key23": "2tMJvvYWyG91fGQpFKjv5rQZAJzH2qUc66ninTptjJvJyY6zmqYVHSJ8XVc7smxkqKqKkEFCdgCoSGHDcRtypetg",
  "key24": "54tvJpqXc6NB1FAfXi7f93KG4GT6B7q9P2fh1nv3QpGmrza9brjHRqMSv44EZa1MAbeXpLbZSLU6DrVca59p9NM9",
  "key25": "3YjgQfu9D6i2WPmZBiakSim3E9qMsAtzBnMvLhws1YqXZrGKBixc6icNN73zr7CddDC1ydgZ1fuQz5r7ZY1PUAaE",
  "key26": "2QqozWWvkEhKnkQFVQC1fygzaP141VgUrhMzH7ftrFFkdHfG15jJSpFLq4PwaPnsEDPvmB7JGsbVuopyd6zYSJYz",
  "key27": "3hHjE7pFGLbWbShgQAZ1wFonWsRTABfDsLtLHRbNLZwVDiuRpZeM3ebc9gphcrUpzxtDfC1v37ssYCHnxoFsSUKP",
  "key28": "4ZXB3kPsbqf52k5D9iDpyHVytheRTPsQVSH3ivnHvhA9oNEkndahtdJoKGcbYGTKT88mZ4Fe2URiP8pcPGfqwMxm",
  "key29": "eg6g3PusjbtM9f7vSvcNtJuEBHjiTpN83PGqZK7ZWfNv8wxitDay6pcFkcpGzn6xfuxPpoo6BF1d6oATK8rSb64",
  "key30": "3x31aEigFwiukrcWBPcUSk1LXNUjzE7oeBLzTSaqtAsn2qWQ2DwSaou5zbGqKQbTbVCvqEJyAdh9QGsnGDf8CZMd",
  "key31": "3iVDwiA8NgHzZEF3iFjJczgh9QER6H3DjXSX9TfD2su4fgda7mSd3e1jMyUpgYjdwxnj6aVV7vxBmDc6kFZE9ZMZ",
  "key32": "5kRfNKuQL3ES2m9BfuhFHcsgq2gKXj2sbxakBJeoSYZgipSkUYd7ESgQqcrL2jxnv4mFY7vdaiLntvnbzC1N9cu9",
  "key33": "2zxfuhz4g6SVP4pugULMVH4sa9iJNoMN1R8ZM35xEnsLfpvRPrEkBnmsmFyoU138Ba8pEG6sfszcjAKSLA2JZsWd",
  "key34": "4rcBwQWuHh1pZKDotmgaBeq6PW6FMqNhjqb2AYmfQNDB19gZTgnVGhPWPmX1DYeZkDdJnMeFpWLH4U99yQ3myVi1",
  "key35": "31hSXARCTcuo58bpzz3G56YNQsRWgRRbrrzwUtazQGYSNRPfvCxS3cFJnz2kH1GxAJXF3xmwVf4k3AHWy6W1Quc7",
  "key36": "5ofQPXjm1wJpjJZSHWdgsEoWoSr2sSxymjonTRhhDgxSNjYUraXvyXFXnRhqWL2GEjyZUaRZoxArzLChTt1LmHLQ"
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
