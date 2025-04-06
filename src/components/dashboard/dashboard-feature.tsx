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
    "jgGZc17zjmdbF4tyW3Y4XvHxyFF73QjFMwCJytzpMeWF5kV25Ny7DaPUsSEv1GQedVNEuPLwVUQb1iw166QoWmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zxwaKkbbyD3Toh3iSLSztY78wMY66bp678it6xLs1vcBCyr9RPZgBGMpLjUEbSNcJq2E4LLAAM3VKzSVoheaFao",
  "key1": "2p5kU3j82iAZUVbdTnCQBUgTnHoHjfRGxZ3qVcj4YVHdYJxUP8WLoYKLni1Y5VnEsrbJroiMmkitUMqYKCFwzzc9",
  "key2": "4gYdyarKGcTgpZfXgzJebkExjYBoRtpsGZ9hc76GFLMQKqdHqXf25vNSuPhCTsGN35qsABY3promJM34NPMb6Med",
  "key3": "2tkt1nyCfvnQdppXST3WZ1AvCooKkL8AAV28rLQZQHBJAKUe1XBX1z6ssXV8fY2p3TDcx3aizZdrLDVCeQEMGNRp",
  "key4": "3KPV4Xxyvb11aw6pVPPFbHW5RL11Sxi9JRE9KjeoiU2XjhtPFWn62ycWqLdis216oAhAS7noMUt552ai2H3owxjZ",
  "key5": "2y21Sd2RdVptjRXQduE6YVDuRaQKgmTPmcEBxvZa6eDgirbZh4DJ3vwb8vPhVDpTBxEdeEtpJ421cE42qBEbMQAM",
  "key6": "yuHhoptZf4cAGgjzMAfynFmRxTRn3wNW8oEX1VJgMEHG81fEcxGr51LcZXigqQ21du7W3FsGzoWfLBq9MtLXGmp",
  "key7": "Fohm8z85zaZGBmhzHYv1iUu4E3WuFzE8FoRjccyjj429ML3bq7hTJo5LnoKSsnZU6LDS5LXtmDq88bYpmMtnex7",
  "key8": "455TnonWNMK1Yr6VV4VS4iN8v9JgXEHJL1mE1nqBji6wnn7t2jsG6yZd5ZhutotH7nQujbeNrcfdJq9WvAKhy9ea",
  "key9": "5VDRVdszQvLsiojaL7Tb1Ptwj8JjXoZqr8wBwqAgmhJGFAJuoJCs5Gix6KYhE7tQWDEfUH7n9tECAaGyKQ1jgxvh",
  "key10": "mrXXpgdePn6EMZoBH3XLBg1NTSzQEEEoGVS3J1hYNJC8FkyvjuHz49QYf62BkGJg2ffVjJehAhucsKVSXX8Fv86",
  "key11": "3rs95JCfaVnxizQaaKxYtd9F86DPCTmsJZT2uLqgVwn8aKspE1FamcrnmQVcrkj1b5Vaa7yX6e5vossao4kFSEza",
  "key12": "5ghPaTeYxYdVNhirsvDbBCHAehhr3xDZEZmAssQ5LZBYAQeXJQudr4CRbWyzDLo2FLXfphsTU9U13JnzkVbavLQA",
  "key13": "72LtY9bEfLJT7jD8cHNcud8b84KxWNQRCXnPLYVvYjm29X3aPz5vK7zrx6dSRiKcvGB6SQZGNMv2k6JKLwrLWpn",
  "key14": "38oy6nLRnZVhTnUEH8mookp4bX8KrvAT8gEeQzMhebL5wJQ8Wi9N2oGuwFZusiLkKPJLzurKkrgutoLDk7QcpH8c",
  "key15": "4NTuSVVQLDf6xH3PRGPxGUJ92sqDCPWwTQY7MGXHBp15HDbUaqPGqnkAXbSq64t7uE5PcKJiXMcevVNAXvcjuK7f",
  "key16": "2cthPUpKGvCP4xnrmzVvpkhvkw9Rsr6bvzXqkLuEYqksWrNXLp2DwxcxrCDgethDvqNaH5TG6dF73rZvnMAkJTp1",
  "key17": "5LQ3WEHuYBBGb1HcimLxcpp5SDqTvuYWs7XakCQAHPmgDLwGmtSzGmY8AYxk16RwmyJQxtQf2Ws3UZSnea3K5Vva",
  "key18": "4t6VYXZRrPWmxb5w3LEb1XDN3FbLfvptRRP7B9Fkk9ovRdZcWbeoH2rbMKqHdTvQUWgA3W48SdvuSgGSCP8CUnXc",
  "key19": "45jpAsYD7Fuzky2W9t7yrzbRHgr96EWttnmscXbhWhkiUmDGEXC82inMeK4hdZp4yd3hYLW5apfYxHMecQvWsHN3",
  "key20": "5YSxiV7fkcEQgvHSfMiyGLK522foCsNLohDDoRKB4rbKX39fCMDnicthBJn6wC6JQSn2UTjQ67aVB4zpc6TKiwE4",
  "key21": "5zvJEh8Ke3vX9xdqq31wivEcGipJCxfGfZ4WsjPfx7aEzkzqCwFxo2Mgr1KDrTbUVRYbx62T44QVJ2AutANjAy79",
  "key22": "3pL4qyF3ijxuaAxFerikdAYff9Bxo8DoTjLKUCxXdG6q6VjmkbkmPdCAvuyggRrDBFCbG6CA4fguo4pz788j6W6o",
  "key23": "4AuBVhZ8rM6ReZambjmXNg4GmkybCvhUB2RCFgeRMjqkNoKMUGas9FrEJrQhedSzKAGjD6R8Y7ZF7wiU2QZw6rBd",
  "key24": "3sdtoKhJNPhowtSWWQXNsAv8q6wP11BLFSakWSa53nza3jqWhYGposNcTxBxwtZEW1Cr6namupycRsTNM7ixFcCm",
  "key25": "DwKfrQ6ao7eRAgXGLiC5Kw1TGkDGBQ4ut89UM2usEcYZhej5gqyb4Hp8XovdaSAuEVhgtWpwmxPqiJtVwmcmz6v",
  "key26": "2CpvnQxVdfEL9R7LCMo6jVWPRB4DFM45ew5cosanso4ky1PjKYCAHPEXEssjAcbKktmEWjzYwpkiwi3XFqH9xhPG",
  "key27": "5YmWGGMaz4sMBhFzfvC8112JUvCFhfzFiUL6U4kAo9hWvwsuK6uM9DGCy3t4JSFm5XYwvvxt9TRuR9ubeMDXYHuU",
  "key28": "5XLsxz8S2mgTgzKBTgvDPP2nn7zwpP3dD2SPE3H9brvsM5W9mkh82iE5AqkjaWpZHBF5xgbiKekrp4Ddur5gYXxf",
  "key29": "5SrFx7GqxtwQM8bdvMVuGmjhLbh8rWaAuUY5FFgEeKQzYceDQDgzV2VnUQDG7TYcvdGrKhHq8zv62Wc4J7XFcjJ5",
  "key30": "SS84ZCmgDmbRBWvwMJDVaBnHKkk75ryTGYcmy4z82Y4iS1MDx2gprgh5fnWEvT3891rbaSrdMcnnTUWYRxVfBAm",
  "key31": "2jC7tFAPnr3hfNTS8gLchuEnwHLjpRsQ76voFnHvVKjtcsQBjKLLm4tYyP42ShiCtgqpPVFTfUM91v9UgrqpKNr7",
  "key32": "5yRALAnCtheXDm9NPwz4ihAUcXrzDi6ppGWFhwquDm26PBCizeBYAxmnj3tEnp5WTZgdAdwFsswX132XGF36ZrWH",
  "key33": "2XicW6hAR3qGdL7V4n1nrVEF2R4H7dZcA7S3EtPLaovFSRRLo5kRNsXB7DUpCT1BdYc64fGSMUvZXWDR6rNszn4u",
  "key34": "4Fh3YxnC9WCBVrWAyrhcAqJUupcn9hHXGmTB7rsWDCy2Xq5XxjvDGC8PSDoTSBENaPmJAhdqtb7fUidCG1tADmYs",
  "key35": "psyr4ivX6ovaa4jRtd1rxRFaFKRmqCGNyhvxidT5JZQCS8APmjnNRa2PFZgvdeNjakqcLgvLbMQV7Ujb9yRsE7n",
  "key36": "5aNZUCkrgf8SbtkS79TMUmRbU9eSxpvn6gkADcR5RYqtdgEiqQzDPnwKLEep361rQ2uBw3iR3pdn1EZiKUG4Eby9",
  "key37": "4YPJwfv5yyq7BXU7QCaiPuC2St3NQn7zW1obcr9NnQ1Q5EfWBz54vg1npeKFmYeAfGNZMWBsS2rHKQJdgSSBTQne"
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
