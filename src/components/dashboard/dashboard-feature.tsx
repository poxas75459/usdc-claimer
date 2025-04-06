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
    "2y7WsxirxKWf5AchVX57ShNmV7GiG3oHNqs8YBvYFWfpjDdN3ppzaEq7ds341r77UaFDVs6fuYv7VubQzPUguMZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oW1ud1Z51LYEJ5FbQfHSxj2ghbrneUUCdUrm1TxTpukoH1dV79igjEHiTfF2yTTk9WrVfrMhaau7aeXpiGymrHC",
  "key1": "dvXRj1yYGHmdFwPnS7BwbveMyeEbGJN4PzParWh3kd2M9AwuaTimmVq2EjEAL6MhZBig9KeQ5PymoHLzgGu5i9p",
  "key2": "3VDj8rSgjo9NCJhFzzMzuGVJgpk59AYQnNhXXykXhUdfJ8Q2mmHGDC1rXHaXAKHfD8K7RZTNDhn9oymYYms6Zota",
  "key3": "5WSLvMWtNVFUozCoCASqz4wnpXLjfzYMH34p8tytwyk7woGwWqc1KxqoRocpGFqQzHYMU1pLMPMkkPCi4UeQZLhv",
  "key4": "2bF5bZwDpKgBGWWT94ArqCELfAUfrGx2EE4qhm2wcnBio4RPSKpJRE3HvF664iKX8CJPL7Fcsh7Nmp591afecSLi",
  "key5": "5b6muuQ3P1Ft6RGRDYg3k9ZqPX8r1AWMYk9LerbCNVNZk7xeYwwCKmYqdkhf6gAvoBRdxBBUsVPG58CF9m9cpPtU",
  "key6": "DvK8iN2oR4vWdZKNeW4Emv8BWdbmqsbBjRa6bhao3eKj6Q9mi8AfzphyuyieXUjSeZoXJu1kbDigdcjrcxfzj1c",
  "key7": "aUdoApTmwaRr178DcjjdSPfNpSkifqgEUpYe2vWe41MwvRyW7oV1PEEe49vJswBLGcAUBH4AgNeGm74eyLnFzE2",
  "key8": "5s3JiPfVV7uuPAqWvXRJDUej1mZ3bs38kk664RwhxW7VzzmvkMymtsToBxNexgmQt1KQK8tEhYC9zR29fcmExaWA",
  "key9": "x99kJ38X87iWZQVowgPmExJvbzR7nh2zUxU7F1Zk9fSCZBUou4Phng9MGVw24iQUZABt36Y3QYwjgTY6vL4mTaz",
  "key10": "2VrgqkADkDvpfnMpga7kcNhDGCd9YrZ9sPZpJaP4vEvqAicy8FUVEewdvkpio8WjUYsp8Fmd4UzybgQ8RgFo7nsR",
  "key11": "2zXWF5dMX8JLLfyNzKbkGYnvstSezekZ2Lk2dd3ZmYoDfNX2SBC5DzCHJQgwmLGzyGUz8Jx2rP7NVJPZugFQjLZV",
  "key12": "5AgW2JPRqz8Nx4A5WgN6xM5rqjvYifyZaZS8yrdxtDL3uMw3kFQ4d1HS7Ga8hN1xVtVndF7JvCYT8x2uuFPiCRVf",
  "key13": "4a3gw1MXDn3iTNNFNsQjqiY5JF6ioWyLQUsNF6KfCAjrEgMwXH9FxHGX2r7gMGp5w6ViTH1cLTbf7R2SafykNBGB",
  "key14": "4ANsUBD5JMpQ5DunVZGMERFxsLpvQLYbrBxBwcjqe2FNBMpdjApeqBfEZA98dSoAr6odWv5CGntvTHuDCHqxJ66N",
  "key15": "45kGwNusZLuzG88C4YaSY6T4QtwfnPQyS3UfmT9G6i6dyzRp12X72HvMiqn3jmJ8e5oEx8Zx6G2hsHHMQhuJ83Zc",
  "key16": "5YMbEkQkZpTDZV4ByrfqFEMUDyHanFBBhsSkheTQVdEzx6GUsddZN7aNdQ9nHVX8qWv1Xt5Tair7aGS6KrieGGNE",
  "key17": "4hjKQESrtm9qi6LQ7Wr6V6UehdD3vkebsYNXn1d5qkRvhjRhA3zRB1ZuJr8fsmadjh4LYTBfJwe3ab6feZewV2EV",
  "key18": "4mzaXEa2Y3mSvjjxBqNUsbXn4XmCqEWcr7pp7QygJ77qUgxD2e3rhhFH3r7EZqnUWYTtry8m1W2ZtQTzeZeSsDB9",
  "key19": "3mnfdsoPygr7YsMi94omXoLff9MpPRLeCJhMgnG4xrihcRTZRU1HtDCTfMsjKKqXzJPj6cZauE35KJ5uD5ih4A4h",
  "key20": "4KB3NFUEmQCxsARMU3kkTxwqEXasQRZWiURwKsyoCLJNTN6vqXx8o9MH8pEpXoSA2USkAWc75qeVG5oUpGxyvXos",
  "key21": "A2PMHC31vivDjPxComtdpem6tQPc3AefTnNG4Ay6s5deBmsdKnLAR6efkqZYGymMCmmEL3FjCy8xiULW3qwxJhB",
  "key22": "4tGQw2F62WxuyRX1M8mq4F64YhomfYccc4mCSK82AaSFTWks4ZFUgEv3SexzzL9pmWehTWCbvoaLBUfByNbrVsfq",
  "key23": "3at7Y5FW9AymjMdGTVSo5ghnTgkR1omFMvowzpXLiP3GzEcbRodsnAGeC22J9PdpY5aW8qPZSohF9oVgH8HGhHDR",
  "key24": "4Ht3hTtrQqwQrkbDZys4W4fvaTnANFgwJbr7HeRRDqYyKFDveFP8tzM3nrYiTvQ6NJpsxbxybSPY5FEjaswPnNCK",
  "key25": "3TZnEFoyQ8zxhkdqtS2Z3Ey3U7MnGXBSgf7UUmX3rcv7kbsvXwaywQxFW8xdVhBPkPxxLTRgfPSu6VzmzpLopm2b",
  "key26": "5bCq8R7dT11Xm3vME5mq7wGZpu92x85aqTWywbQLo1UHS6SYu2WY2kUmBugGvVjekVKsitkP8XU5xUvspyJbWqBq",
  "key27": "ZrCM7qhd19bzddqWzN19pRqcnN2CfUUzFCqnWanQKww1iEqj7WE7uptmUCDQvgouGiqk2oZvrfsd8KQ9GNVoy1X",
  "key28": "491mKJPk1mmi47VrA7VfNWnmA2scRShzj6pbu3ASJbPQhNws6Cz4ZFKQd5dmpdybhwW98PEWnW88E6ZfDA3ctV7G",
  "key29": "4zHokVFfPgWJjT9wacu1j45shYH9HDVkRAucCZAdeLAGgj4RhZJUDfWb6pmtqFvkGjDMFxUgE2ftLgRMzGpYN4d1",
  "key30": "2dmJ9Z1sBqwZ9HbCFGpWokbYssFuJHuiQsDTTDQAKoLj6Vbp4Wy48GmwrR2GX2wquddEKKDZEFUifDXMbJAuBN6r",
  "key31": "3H6Fw2ADzr5vHzCuPuqxFGugbfdJGR8wpHZkfCaGa6B7EAmu7aZkGmdqbPksbs19yRfDMcT2RcGgGprdATURrVCR",
  "key32": "EQABUrhCTNvJhKWKENyuphfd6aoAGNfke8TQLqSFuFyYFyQQ7W42cXRCXCj4uhVJnQuCNFDrXYN4pArVzyLK6V4",
  "key33": "5VE3yLdrPS53F3cN64biFVHrq5jGb6NrJseKK86ZfaWJ9AWFPywpPNGLYWstEUiRG12yEJ78eZNqFd8yd3KEdQAD",
  "key34": "KkivBgHHHdFYEAQnW7rXy1Ymz2waLEpnhC88SuLAPMbXx5qnEYaQvFT1uFXoDuP5RFAgRQMfiQtoHVKcAsBM1ca",
  "key35": "57rgYX5upq6oqqRPiYGrWSqWmoD9S6BFv5ncrvQT2hXbtemGBt9jAcAuSVcJKBfhaZBkWujrfHzGrQtdtzjPfjQm",
  "key36": "61SJcxWAqgmSYWBnB1kpMcGWe9x1kRFc4G6JUfXx89VLcF8V51hUbVpVsSX6YCDxqkTTcrKwYiAK9mDh3bb12gDF",
  "key37": "3YMpxscP8jgwSMTKFS2aaHMh9dErSfZUcq8RfKka38ALA1DjBfapUrNbsFh3X4ZGf7KorCvYTg45JzY1M8bbnzdS",
  "key38": "Vv3ePacMdLYz8vG7uRGspRk1SWxWQU4BJFXQLRWH2RGG54rszsR8tAEqggwVUgb6BzRHBGfLooAzicNWPkgXkRf",
  "key39": "34vRjXuNUVDBGx3EBLDyq6UedesvNKF6LxTKyBYhJtSTRF4h5g8Vyf3xSWthYdxM9YveyTK1kzr8dVALF579Lhj",
  "key40": "3S2ZGeheGiJxaj6tLpzsmHiL3CyaFSC5WV6zGpmttx4ztRR13BeA2bZTM3LgGnpXMjDUnwcXy2gkZTSyQPxPGvg2",
  "key41": "3oWaL9oQNc8GVrEbCRpVKvMA7mboCBVJdv8AfYE8J2tbegSzxGRh4GcSKVnaavwWkZeZVEp1o8zpFwpU91Cmuzw5",
  "key42": "KxTo23YTFQgpii9nG51NSS2JVsc5bMvBYgEeEVD2V6FX3aQPhfH7fqmiBpx3o6ZFPLwJMFYKGKujqTX8wXRzPjf",
  "key43": "2yvWu2moM8H7TGdw9W5x7RNSbpZu3DFKuDX3whPc2dyrpRh53woxxEHwWQ7mdUEdax9GWgom7Uo3fjdjf7tWzv8n",
  "key44": "636fehyn6tDSaSCq3hNH5DpAuSZwuAET7LTo5MS4NWiyZ8YjZhzeLPBq681DeudjN1usHAYuZzwGmYF7nSXU2SSK",
  "key45": "2bcYXH3AwE1q472suvr9S93fgkVdKDjp6yxhWqXqTygu8yy8NTZcPNvergup3JdGyvwf45wcQmSB61sUXpzcdyM6"
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
