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
    "53SoD6NA9QtzGmC3FR727HTT1b2XZG8JjYcepqMtkW6BDSXmoe6YUKBQ7N7tML9SqiaG2ATsQ6kQvoUfvXTfveU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CFg1knm7SRYcFP2bb494xmaHto8pVGDBEhQ2jJnjtYSoGWGbAfY4PTtqx1dbvPHGzPd8th8UNbnxtNmZFKjMjDX",
  "key1": "5NAAfuFiYetEjAzuz4Dx2kifM11LUkVJD9KHtLjQNKeLPyNsfusdaakaAhD8KqGJkehD8BYngYMGNuTq7MYeJvwi",
  "key2": "tGAphhEc2H7PT3ddY9Lz4c9rPj7aFnh2xbCzqRyq31yjtofFMLdKmhUXZRX56LZswm5Wq87fj1KXR8e7f6oZT9w",
  "key3": "2hfUSdCnNGfBELdy6E3CaHE7tjWV1XcdASqfBihLv3U5MiHjhYuLtzQ2Ku8wqmSRhKJMDq3r5meLxCpCFnAUEehR",
  "key4": "6dZWvGty2GvVUpqcYGsJgVSgsMg2g632y4XYiaR2yzam3zKJesSpndVZygcDDU47Z9esYbuvGdwKaYFcKSiQXu2",
  "key5": "2HvmGWTBNHXLcDswgShjiafGrpNfEqz25rHbyaq8xwos1kyHJhPiZ8Fwzp73jFLc115pW7uN2PtXkJZDDA3zqgJu",
  "key6": "4893Vjc5uUe4sT1wUWJLm8hSK9j2k1CCazNmGJwvmdnRrxmmsgkDFAemF2gPbWtpTtZTw9GrwsDN4xjtRRf9gbiT",
  "key7": "5FrjMeUXfeZoHtqN8DKyxCNZgiYbYDh3bZZFMuz3d4EVhJJb93xeGtmyZyrumFKJJ15HfqDuXiF4D6nrkC3eCfJs",
  "key8": "41WnXJpkRhvfjffQHrx4hVzSXs43RGbDg9xwH7LFS1norquUmRubGcyjcVtRLGxbUTvyVWWP18GW4bKVvNHM8SdL",
  "key9": "2uyVfrcWHt2MuJhj9oTknvraydkDAgJG9jvHbUAmwoek4td7uvnT26ndJx6WbzxSfBhXNZvDTRtivJUGA68tn9AP",
  "key10": "2CwQQWVPiSVcSHzXx5qqanCkFk5TqhbpUijHfbyUG2iyb4UEkcywof7MHExBcazjeLqcXpfGAN5wryjE119QK7Kc",
  "key11": "3pbsRkJjfbGi5C8fdXWQ2YD7SfgUcZZ93ve6UHAEyCTtYC7uxGrWQjVmjYQfxY9gxMQLfbQ36vuJZAXuaFdGkecx",
  "key12": "VuBJutMxyu1AQeQPDDWhFqmUZE17JyfCuhx5TSPXAmZbMAir6SJHoKhg5GaRWKDmtkEfKg4qU4QM364bYqAcced",
  "key13": "3rYhsAiHiEgDi1Z3YZqM2wJHvZ4gBrpubV7pU9LmLSEFASyF4jyz6unQEQbreWPtcbwEVDijxRd8a1taXtknJiAu",
  "key14": "4B7SizHui92sf1MqA9NX739hWC47NDLbeSUAptAvfnBAvBVLEeSsYhgQAa9C7aMEQCzigniYWDSqXDdJnoevssKH",
  "key15": "Jgu3Uyf1qYu3wynco6FnqvTX7eUKXSepT4CAVXVoPto7L1qGZsstoKS2PtGZYZ6VhhpAYFmwiukJZJ25KAKrhUj",
  "key16": "4sKFjjjpBLFgbgfgdtoEtTKHyiurvozYaRJrYbTCs1kwoMUmTDf623QFpwNJVXXQ44F2aLeo8qHWD1GJ52XqTKu9",
  "key17": "2mU6hurJg4Ah42qYNQdgbSFTyCW9aMuNzt9v9nVK2wu2FrEBhMECeUuVwVEqEpbScAU22cNsA66TNyF8tYGTnjvc",
  "key18": "3d84EdCWww7WwRLo9rYW9UodvfUTYLirEpX1LgPdE8ho93hHYP5QzZB9GFRvhK1xxDMEPHpccdtaVW2MUYTbEiCF",
  "key19": "vbUQVxkCSpZR2kNPCYT3jk7nEsnTVpZVyBWUdNAXupoHJReZEds6XbMZms1yNro2fbDDC8ymaAQ5FnSLeZQzQk1",
  "key20": "3NJQVKQpZMofr3Gdg5wuk1i7EEDUWbf2ndc3A9Nrc6732pvo33EeRcKDck9C1E7juzoqftHarGuqJuJXaM7BRALC",
  "key21": "Yyb42cYkqGDuw2zhL4qnkpMbBvnT2MGqmkZ2UYncr2Ep4Ms6xPD9XkCWcfs3Qy4diaPCvhzsCKnr5kGgQHzY3fF",
  "key22": "ZoJ7yUTE8Fbz4SnH8JzfjB4oetkgGrcRjqRLg1eomKGSDZ6xnr4X3sGBwntZno5myo1ezKN45LF43pYJhJAQdJ3",
  "key23": "4kDWuuF5WJKMsFvWvx7wpjtxP3kJrZwf9Nh8S8RXngDDCxjW7DDCcNfG68vVdSFjnEsbULvpboXsngVkPP5ZKFf4",
  "key24": "2s9aMfycygzGyFi2X3AKhY5T936zJGsFxzkE911VMYov6pDzZJXPSUXem9Epx85SMnmo1gHzi1Feq2cH8W8yuRF8",
  "key25": "5bjV8cM2qa8U3XnxE94sCH6xVS3JaaJHwhiQt9TWUNEJFFY75MpNrH6DM7TngawXFuLimFArPuhoGsbqFdyeibrm",
  "key26": "4hEiuAB77cs4eB7fMdgL5qWF2QaqJVg2Hu2i39wXTqFVQNgfDeavvKJu92gTrkQVT29qfZdNXFQczifpBSXGmYxC",
  "key27": "38BkfDyAZR74PvgufHG1TcDdiPZH9Fv8puocWPUzn3LKWohVp4QFfjZ5t92US7YNvtnoGSSyhMUuKzQc6s38STUv",
  "key28": "2Zy611KfdKiSDNbVJsxWVW2irVAm9n7VJ6kz5K22cTMKXSpuRjRe5eirpFKnSe8bLzFYi9YUQUBY8jFFkLcy8mxT",
  "key29": "4xEqegaRTRFPTWCJvyhMUX3hirmpAwCsmrLYegv5nHJU43troSHRMtLgHfZNY3YM8rz79Mft5zmbmDH71q7LGA63",
  "key30": "ZhwYrANdX2GNnds3gKS5aSesGwWYM33ZaubK8gjDmBJN3AHHvni7YvsXuwUm2nfriuL8Hv63JGREz8t6LFhDkPD",
  "key31": "65R7wrAXRRBXA3aKaj2ACxDBqVXqb2WWXRzhzFoctTSPpKEENP9gfkNu7yNcHT1WYhpfaWXdBFQQy2HnMJqR21TG",
  "key32": "3KzpQhsWpXC7JTRHUSGNwVXEQsW6Vq5Eyex8ozbjnKQmEPmHmK4XMWrw4R2gyJcHFwJj9hYcwBZdMS8z73SEvbyz",
  "key33": "4hjR8nZng4Wy2mwHApMzWKEr5s98HG3Mdsaa6RCbeTdqDqEziYUD29uSgBm6X4uP6gSgRkwdXRowadHA1xYpLWjp",
  "key34": "58yZ3USBYrPALCyByb2AfWub9y3khGbW5vBscj7pScKkxyVE3ESt9mH3NCqspNVSxpCuym5NhHiPuWZdiNksgjN9",
  "key35": "5K1dWdxg8VcsaSUt1vnedwPit2PWimwRUL6xxdZrHyYrK73xL2RqfYuQwy6gBHeSntdxzCAjw7HLvry7u5PDdSNT",
  "key36": "5BBdM4NndC8RJANFvuZUzJJSvf97a74h8SzW3S6uchNLtJ5aLua7Pqcs2GZtiYbhuw9Jp7jmmpyjp1m1pfrvwoWL",
  "key37": "3MJqi2rJ74M47B95o9bHPEbricBPEq3GyT7gyTCa6jauPjxneTwR672rYbCanCgLXix6XMnPMowm1LdvHUsTKDo9",
  "key38": "BDWb2QMnY742kwQU7iduQuTthhfNcmS2iHM6GQD31CLiTA2ep1bjjFjDHm8W4oGsQ61r49hENG2Yxpcvvy9eU64",
  "key39": "4CUH61eRD4CmuYwYrPrXctbnvjN8Bsd91nTsNJ6dMRLDMGQbXBaetab8ydkxHaadTY6auosgRM7JFuZXiSZcDDQE",
  "key40": "54RpnuT1ngzYE668JNfuNXdxf7zE35Sdpn9VNikAEHHKb1YTHDaaQZdT91ExX9dTzg2NqWXkQUvhh9T48HgCt5yr",
  "key41": "4TCru4ZEh6rxYv44Y1tRdBbR9emQussauSs4KzEZq4K8DrjTyi1CtyEoX7jFLu8NavwhkHJahoNPXjaLQY4HzytN",
  "key42": "3wDwNtEwXtt99Y4tAmy4d8HbK5HnUJRWCsyo5nwY5muz26kNZZ1ouPqxw4zzP78DcBgp2ByGYakdtYYq8JS5grHw",
  "key43": "5oHuEgdR4S1w2xJsbc79HDWvJPiiiK3826BHGLjPXBEXo5ZBvtMXk74cUhcYHjfVm4oTG8oMbJi962Sgpe68DSSX",
  "key44": "39RXx8tTZswn8xLTKExgzpexeYPruw3nHcTc9TneBiJoPUpMFbL9uauYFMBybqZ761c6H2woqJQkJahowxkFSFiA",
  "key45": "5BCk72ssBoPtKqxAqHi1ANjPP8apYUbQ2ZJ8H79YgLc7B4bhM5exM6CsFBknMbJ56Dz7tZ9Uri84v7Y5ciDGTZMB",
  "key46": "2xtXwtQNKEa8RH3Fo51FM898Ud6qfT6RNLLF3XEEA98nFQxjJ2n6DZhQ2u7bLSeiTVHJ8jaga2eb1rLywMzQMKtL",
  "key47": "8hpLUh8QHR6DDmvCuLr16kJSPvgVox3mFUbqtyYWhmGPAjS4vvsxtyZEW6Ba3EYTEUc6c3zQyhybPea4X3sUFQ3"
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
