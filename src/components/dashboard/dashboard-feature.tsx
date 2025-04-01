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
    "4sN1Aefr5NEDBezyjET4Ze12CkR5GBgF8TaWWbi1yG8BkjnG4A2FhUMhcCiy4qGyTNsXYKmiczdwjQbcuRfh9V4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u8GqUne4SiDSTu6RoZuAun5hyxMMeHHadCCQFEwTbkzKrH8oheeTrrTPLkeYRqBHfKBP5mwx8tDxwsLBg2Mdvzq",
  "key1": "3mX5Wm2eKk96RWrCFmSpzaR8WEnd1HZMMGBEBvfcAuDMkSkgkZpxNvmJhBmYgjWS5FWDM27ZiHJCyBmuHAUV6yZ8",
  "key2": "5ixrdALEfMnEE91f6B3RHtnXAWNGVC96eWtM8JENbjBWsTbQ2CVZsdGuTKZJk3AbmfF1pv8Mgwig99zErn9xWnmJ",
  "key3": "5s1T9yiHkfDLz8qWhh1V4Gy1rcCfDQkK14tfUXsrn6u18FY7P1vVmJoo3952FVZ4JS3BZfk9QH1rGTcqGa3cfHCv",
  "key4": "2G7hw7aEwUN7M9DiQbrNNDmmdmoij7tkCf1svz65Dk3dkwYoHg3yuLMwcHVmBFD3sXA4wB44csGBC9oTfdubqcm9",
  "key5": "5EN23QzzhfhwXy7fRMZfSForrPGSAnBfL4DCjLe5RRy4SVriAcBuEDN8VVeA6DZZmh3i4z9GB3sLHz6enpSs489d",
  "key6": "5Crugf9CF3AZde2vMTMYVTCjUza6ucnZxTNmcsfNfJDnMMKcP2uDWVoiFbYCfEHN9VV8q41c6qa2tMpTX2f7gbzn",
  "key7": "2339fAfRMz8Jn6BgStBsBXZnX8LAGsHtqZqQ5yZ8qwvTQUx5Tt3qB18d8LrqC1juTLjjq158MK7f9F4rbWioy9ee",
  "key8": "22UQXS9Zpe8tu8U6rat4VRggLCWDQ8iHKgq7SN35MwcqtRgT3kpbGmSvnWz8WtsuX3bTmwzXSADBoWWTGqDibPAb",
  "key9": "4KPQJAuyhzA22h6CR6sCKnkhHcrfXjiT2V3sRbmKUbkSG7n41J81f8nmmU7cY4zzsvJft8USp1YrVUPuFf7oUPMH",
  "key10": "uFH6opVNJN92Aqcx9g2HVtcTa3aizX1QHvC8vonnfyXmYn5oJQ8YvhgdqwpeXqvM7onfhNZcWniRAvaiCRF9LvC",
  "key11": "564M8uwzxrTaxJwBpXXraggufrkBnhqt9bZLJcGLjbCgd2mTMjTQ2NzUXuCueHTxvx4cw8SeWS8gXyW6gg5D9Vuy",
  "key12": "o3rjbEwU29LdiFtQzsUzoc6xUQkRE4y6LaL9wXJeFw5fnYVe1jFFTXzuMjyFdAqgKBd3QH7xm22W8PmiA18tbqt",
  "key13": "3TvE2wkKBtpDMnyMF2KWXLvMYhkxo7D7ctwSuuyXmpzQxqE9VNsMhXyW4fFCy8Fz6TDVHns8g5TyPVdT1ZrKWsH5",
  "key14": "2yXewnqFdMEBzWfad4VnwYMC7H4yLm29XLfSzcydntA8Zk3RvYwJkKpvXbgeuzuiNnbGxu6EoY3mybbN6Sz5t9WQ",
  "key15": "3N5mAbmCcz4KKrzjugyiP3s7YaWLXQkMDwskqzxdMZWFKFtnp4rgjCd74pJ8RqkNAguzzFHnMpnjWMQfEZ1wEFum",
  "key16": "4WWiGFyP7jaUzmfvkrWTNBimufBXyzhXNy5rxvQHBHNqYJqAg4aFhRJyCTkiGjxhPV7CFyemPgWhwouFpWAErspZ",
  "key17": "mD2y2JDoy2ohEJqXmLHuYw2ZhW17BeK132vkeLxAt23kFawMDRyF36NPFvowA8M8wpdoqqQfCJZyyH9PAL1WfjN",
  "key18": "2RLE8wWheP97E7P1361stLNrqin9HJetRcFU6dfrcZm3vDmfRTdUvt3XHqH26wVymcLENda2ye4AVzdAFcGLeRM6",
  "key19": "25eL2BZxH6zGyqBSMSTDr6Ufjetw8QoTHq5tJwDFWdbqCGhhWfM8TP9BzsSXsSEQZwdRV7oG5Rqi6RbpSMtYhbZo",
  "key20": "24ChfseD9X6YLVd75hqcgCTojBVaDj5RyemhZGHPRR6i1gm9pxGmrDnSZbmJGgMz4spdd2pyXm9aLuhNZqQYkdsh",
  "key21": "2iVsdot5Xz9swK6jEfLMDteTJ5tZiriLCGNU4c8qPYf6T1sj5b4oxLv7WmJZgSkJGKAWFqQCjiNBuZQUVyyJQHNh",
  "key22": "4cZLJYiSufZ5Hg6BXub4oAGiXnCe6XNZ77mrAiwrrUtGVtGEA2mvYYzhYLb8Fydzc8B4oA85WFF1vRagWdur9RqG",
  "key23": "iRixKhAPPyCdPNrinD9kekiHDwurSDiCHbcUHGowEQUHRy5EN8einqiuWV7bMYfYZsUdPGcQSbyPYT263nuV6Fp",
  "key24": "eP23cSkbUGSSsHRxprsvfNK1R4LdFhBXrRmyQ4pYifxstG1HLvoVE4DVekqa1AMLiZDR6soffBopYEMwszWio64",
  "key25": "3TAjmTUjFChjYRR9Y88sPDfr7SMLVDKHe4hcj48dFbD1knFrXYAEzu1VHt5LrZZwguiAnRYrMJjUGGdQ2pBBegaL",
  "key26": "5CPoMBhNqk8CKYNbqwXneieMiKSKhkzgrtsoFreLvAsYQtgoEQTgg1Jw51XzedtZbRrogTvD3giQFmgAsdQsComg",
  "key27": "29DE4FpCoCjqxXc7JR2LbEpRgctNCFaSQPm61szswrw8qNcJxxdgZdnC2jXa3cVGC5v2f4s3c6tqJ3N14S71JYbL",
  "key28": "mUECFLb4EJzdBNuBsB9rwwh3oTfGbJcaotpkLxugKAxUzGi78yHHtmpMsExbS3QdUbUyQkpEDoJw6MGY9Szrio9",
  "key29": "hskqrdavB8henjtzf1sMEuQwxh6tPzjEJtwE5ti42fR95cdWD6Bu8GyjDYcPpa96bkVjgnVN92ovFJqkXG6DSCS",
  "key30": "ECfxkxUn6jeWJh7cjrzVtxEx32zec1RZEhs9U4jYRD2ikD627RU1SL6bjQj9PT4ahA8f2enxxu35gLkbxuDewh2",
  "key31": "YEd8s8G6eEQzjce6SRuk7KfBfS9amix5SckqPLj54agyL5WUkf84CfoguyiRKDfGBgMRNwCn7P5jQTyF3YAYsxx"
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
