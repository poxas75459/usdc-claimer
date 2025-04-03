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
    "2mJsZyK2Rhpw8U9iD1QVoCtXNHEnj7uogNXmB4h9oWNdmFpp1jVhRJqjqA7gjCcN1JU5Mv7b9S3qzZt6Nf8VXxsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnuubuGRDCiBkCK6TaB8pjUW526EhTPC8p212XroWSa5vL3hw17WuTCbV76zNmsitB47yj83rKLWS2vp24vWQWL",
  "key1": "5VA13Nvh7uuCsXwoGAbou8ti6moW1LFwRzEZeLrSodU4efsjvAiTMrxWwsFbRn4Kj1FiQQ2HZPugaxWG2MHhrVfY",
  "key2": "m4zniEnTZMWh2sDGJcZFU7d8ByoxmbVsW1cnQRHXPwKDk1shDXuw2YTjuTQjUkcpuixGMG5NfijzruU4wFLoYm8",
  "key3": "gcSmdv4z8QhTrtoNXohNhwGUJYodntwBdJEH9TyF5A4y2qMySNQFqxYqqCWPVzpzcrqXTwtNPncbzf2BwyBUXgn",
  "key4": "489d7E9gtwfLvuKyrQfg7PbQpRVzjCxPoMHtfZvxU2iJ4zCQdzsX72CQCYjDfC2nSD8Fbko58XfhhWyHmE2q4rLx",
  "key5": "4U2rY4XnmF6aPTJcX6tPrTmpJ2WiDiHArgmS3qqqgFKArJaKGpXxCcEV5NLhABqdfeiMo7jcJUc6GNTMpvVemniW",
  "key6": "28RYoQsuywsyVBgJFv1a1praB3haRp2cefjCabVKG8TbArB2i3WzajvnBSy8DbdQWiQD2mwdTdNzWeneweA5Padi",
  "key7": "3MLEuA5HfLryENW9gRnwZ27PCiVsnsBAV6JDnrBsDMay3ctcg9FhGhTx2VLWKhQoaSTGEB9SzzfrVtdxpjzKGWBn",
  "key8": "51B4DY1yUJUQ6ZG4ynyYzf6EbZShyiP4sqUCs6v5yN3pvvNWVkJstHNrn85ZU8LSirMNUeXe47c4fp7CdXa9MDSL",
  "key9": "5WEYz5BowBJCEhM7xDnNZHWRhGmacbJBCx79no2o6BCStCcieLceiWEDXuVvaBhhcx8xpX9bNkbyxncNT5Yfw8kT",
  "key10": "ifUQqEJW2rUnGFTmDYYJNmDTD8SG2SbE87wKyqVtuBV1KmPntrziegYEc7XwRPKAtx7tXZe34MC9fcSWpS6inVU",
  "key11": "4P98MyvYeB5aEFuJta35GdFY9fXU3BAeL2QR85Hpr3uNrhmfTXM38z3FN1KqU28eX3r9eEfMckpqGBVQfGxMqNNE",
  "key12": "5f19sckhJVXJkHSFR6YV544YWu55k1i9aEGPDjWvg4Xm5LymHcDjzW8zX6gNBzmvLR9rGdMHkDXojcwoxfppo2xv",
  "key13": "3dWk1AVxwmRSHkkaZUWEX18a2AEbCJfvLzNdqXnbe2isrSnjRSScfZBVCkorNpbv51hhTDpkoaZiscUwjVabeBvn",
  "key14": "3nYZsymPZuCkFQiSBqHQaqgmjRGHDQbR9y4axVuvDfhg6yc8pfAUanr8FtvnjYZ33abyXbjq7LHrLnDCTcpXhn4X",
  "key15": "4u7LPWX3f269o4BHUphArxHBX9ZwRdx1hzQ7WN8ZNQauCvAQjfDPn4rQL18BQrBBucwnpyj1qNkZf3Y2qs8YqRtc",
  "key16": "6gY4ppdLZ8LiA6Cb8wea2x8d1vAE5NkJa7RvZMeoiWvPe2vKgyuUXfciHpBS1hVPQiy5B85QBmhGLGERHtrNq9H",
  "key17": "3Ke5sEUrQRNUbyLDxTcH3Mt7aUX9Dn7dH4HZsA6PQCnqxPdpNLH2sYL3Gk3rv9kJB5zGwsTQWBdcVfDoTw6vfCC7",
  "key18": "4WTPQGLZ7QoHxzr8kBTX1C6EjViZdFD3K9VSXErkVcFLQLrw4Eiivy3aHTXNNhVhk35apktfh5rQUZhfu1jnbxh1",
  "key19": "Vsq1L1qpyhvTsZo7As1SadAepk4Ew4vAnVrWYmweAAggNWp3QxgnEGywAinAzcwB8APRQ38rFcUJJR6aBqcdeh7",
  "key20": "33QuBPotUyeRiimd7G9dUiWYFjixSnzysMs9SkfWBbsA93pXkh6DYSTzNSkM8h1L9r1JNJV1kJNLthDWStJfZe62",
  "key21": "2VpzkqycSa5RfbxoeH27rYPncAebKaZPVbWAvUa7Rw5EatBqCVrZpbj5ry39DjRS87yhk588jgnRfZnqWs2WcuTH",
  "key22": "5xzZ4SN2vB8ppSSJk1uhM1kmKBkLGg5TTSyV7vR9nzCHfJQ39TG4ourZsuwauZQ7QUjBgU56ZJsTiyzWgYyfrMbr",
  "key23": "58nNR1cREVTNjFy6rc2beXyyWGTRY6o64MWkeAxq5AUY6oNzMVrEk6v5HbcTgMtbTFUBAzbddqnFBWhB4VAmtR4a",
  "key24": "5AzJR6QFcrdCU3sfBZAjTSyYCJKFMnRbtRicYhZ1YFaSoQwWvP2EvcoYxfbwkw2EwD4zJ5KYiyZTbP5J2Wqe3fNz",
  "key25": "MbwxB6VwpRfLtHyCK8rMsADWegfmFZkvuqcrtrnNUZ3QmAsU5m5sXipVj3dLRfo4GdqqXVsLukxUA57FryNgPkT",
  "key26": "4tyW9fMG739g44cA5ShjbSaAhszrodXj2mvzP6mkxVPxeVMAPLDJe2DMyKbGmMTeWpPsLP3ZnHP9sZ1Xpn3UMC2a",
  "key27": "pFj5NuQuyC1WWAv8FymEZaRJWrMZcZ9PvpxTKLjciHygDmD26tq2U6Yrddbpg8q2t6hBTPxnJtVvcE84eCpZcye",
  "key28": "4VXMdsERdhKjetyoJCCc3iUg366B9pDnHWLCnyTSexqNwcSAvC24Nt6ywcTW7D67sJXYcDna2ZBztPfSofeHwwtF",
  "key29": "5puGCk8y6cbK1Y7gFJA5wE4eigicCru3iPaYVVuf3wG4SgzGipcBrzX3QisBwKjGcfesRWsjnpcc4wUa5jz2nqkg",
  "key30": "388M2g1Qy1SBCY2nihNtR6gLG7pykM9y82g3tYyryDL1HQM7hkGFLxtaDPEiEmRU4CrBiWX2qjvVcnErWR6rf8A4",
  "key31": "mJ6uh2ZduYKC8B5Aa4dv3gv4asXpL21vxzngBPmEJHT6NmgVCJtegVt6w1u96RKR1FpcdrFZsqaHpf4AiMAC67w",
  "key32": "332xPmDKpAxQp8eyE7LsGXmWTsASpGFgcLgaJedY32Epkb4KV9cWJpRmrr6FrxSgKBJDKyP6mBCT7nzsd2exm5y5",
  "key33": "tBTsqENVMZAJ1BKiNMHZjuJFqSAvBUN8sEdjjkR1r1mLxSwrHu2B7sdDSj9MKEyB7H3PHXynRHEGN9H3KtmSpor",
  "key34": "4aADd4gaqpqkSCFKRqPw1GWhMWUvZqmLPovJk5kB8BAU2qu32ynEBuKjmettjtZPSnWRpfyvDKAGiD1ZpLGGziMM",
  "key35": "3UkNNsmTyxBpLcxRTj1weXzeJLNou7CjG9u8mgLRVA4C8BEDCVzDa7ecUhtpE8RZg8MJxhE39DRL6WvACPrn925N",
  "key36": "4eq4TkEZcxxJx7NaPCdBzoFmCEGNDjtBPrWx6aTRFtUXC5woH65KxarthaP4qD7oXsc5Wwv3ZMP2ieqVZYrBBL2C",
  "key37": "4JdXgjcb9bJETQWMbVrzi6jfY5hfu7LhFit9pMxrDVp55YiHma2XrogJGq5GsAEuYguRt5CkBWuGpZ9ZBWpj34v4",
  "key38": "25P7FwkGoCQEYWA4Yq5dum9DG3rwcEa8Y93SQt29QEMRcm5uGHK1pQEH4M8s5aKw8aPGatybRw1WQSFXUL3tPCbS",
  "key39": "4RhJfR6Bkc8ZLM1RYFFgdGEWqfRyck688MeQqkAY9LWy3gbBHSAAu7gGXeDTqwAaeYRT7TDcCj5UyWw8k3sSsGCT",
  "key40": "5vsUsaqa9WMrcP4WfHuJMmuf4sDVUGWKXjEAsLbN3GqDMAK6vLMbqbYvetN1TckM19ihW34jBF9BN5Px6pjENah8"
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
