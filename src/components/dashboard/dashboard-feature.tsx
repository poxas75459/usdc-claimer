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
    "p2sb2UN6E8MJJ5B6yDotHzgv3RrUwNCrP6wfGHuriVc3uYoK2nQwLvUDn4Wf6KFtLnfYjE5KCURnghAD2fT7WeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7PJ4tPD5G2xC1gK4hpyNxmkjgFBJQGqcGa3XC3p9Kz75Gedi524BDmSJZWKKB3pWxiAoKwUd4asJzsMwL87DeLG",
  "key1": "SF6eRGGpa92vup52PmAZg473FanE5Fi4nHwE18zfh7i3LxWpnQn695vkv2bNMbVLXsZd2gvTvFD7L1uj4cW9DNB",
  "key2": "Ts3QgVS3wdE54Vkur1JSQ73VfdS6hJLRmpoxLMPfvLgBWFt28kv4wfBR9xeRBoA7J68Whri7Lpeq21bf2Js4G5a",
  "key3": "3KNb4tpx8ceF3KFx3iJKin3GpoU5hB9cJT3sWaEhBN2n834hj6yV7ePKHeZRLM4WjSPi2e2ryqDv1g1Je3qDqDPQ",
  "key4": "41zDCcknBe6Yh5zDaFKsVwzvYTLE14Ep6iwRGwtAjyC9h66VRpD3unVrJHBfa8V9MuQJpG91Qkdug8RVsbdzFq7C",
  "key5": "3duygTHMvB5mjzsoW6ukR1t81FBbos6qijpe9MMjjXKHafGAkMUq3NLP5KgvnB11iAgw2NetdArRDN3Rr1ZMDtE",
  "key6": "3z4FtCW7CqQG99aQVohnWjweDBD1pVysrZYFMg2DCi62D6TJ8EPzZuHL3ZPZWrqb3vq8bwhwwSwSDxUEHfLVaWfg",
  "key7": "3M7FNA8dDxupUfV328tpFKoFmaNKANqdGra7FVxxoU6aTsN4nezVzEhEevmfxv3w5GhNqBbn1u1tLsJimYZMVDhE",
  "key8": "5WgXcM5RvfR7pLyj9FxLncPiR36ppbgKm9fqAuvfD8fxGQgt28AeTkbCczPugP5L14M4sZjjh5ozYmmqSnzvfNfF",
  "key9": "itiUmgAn5vQ2Noi3WL69etjrVHCKQcuZwK5NdqAo6r7UQEKVNS3SHc4o39ABwDA4E5xRtUJgyKVDjdKNt96jSfo",
  "key10": "2o9ppjVeFYXvtEAVerJsPwtyYg5UBqL98TqynUAA3QTJeYLvwxyN1Uk939g3oLhpEiqdE9bwQycfS3ND1FCQHUew",
  "key11": "5nQr4r8F11iUDeaz97Q6vV1HbTPWR8sUGvgnUDNjUYfVNRmk7eGYHWV6fEstYyXXHBBd8vGTx4sP8xf7suun2q7R",
  "key12": "21HpVqPefFDq5pRNCdwCoQFiWfvUHeMXeRmmjDK3Qym2e1HWdR9Mtkz3jji3w7Y9t8FezaYpjGK8HpvpDvtjBwtS",
  "key13": "9PKEnkWLf9Hj2YcVNd7zf1hshBFJy6ap6StJdMWc9taStVkDpVqCVxz7FpHoSdKEdH4Sm4aduT7xCYiVUrH8x82",
  "key14": "4b625JKPmj8XiGnmfChyNvSz5uaoQq3RBht12eu4rnJ946LamXFGFj1AgRazPfMbh1R8VGyGwkX1ZtDsqnP17pJR",
  "key15": "4n2WhH5TZEEJDbwMMmfbre8jFeAWmP5mifWBxBLy7Ymmco4xW5w6KhL9SRoJLAx9KowwPDT48mfm6hz1QcDjyLQY",
  "key16": "4bHnArcAz6NTNn4rmQtUK8YtFpP4ab7VdMpgzcfQzcCRyz5Ag6X8AtL6AFoNMbdzNXnswZueGy9gcp3khG4SP13T",
  "key17": "4CBKquFVYCqytTRDr3btJXgLGxGSjm8dFKNdwPLF7y9DFQyeFTAKbtMoEgGHsNBa4THQ6qj3Guw2Ht9jwNuHdw66",
  "key18": "CrvRVBe8SVKvAsfT3XBDZdQFvNFBP3Ewvf3iyJcTQtyxc8VV42sRRUs4DUQMe9migoKY3gDmvSdhoKWNPEVMAVZ",
  "key19": "zjxK9N14NZRpFUqkVZaxya2SuHpn6nyVd9HaFXyoWEMao4Y2rD11VFmFPKDZZ6e3yUHifrwVFFZQtboc4LqGYbG",
  "key20": "3C55T6arVqKH288q8Nw33ryKkBh66x5WcLWRxk199DxZx5R9jqq4SNUNCzEFB3jHTkxSZksPVjW9Wjdn2jsAsHrS",
  "key21": "5zcmKij7F32Ex5qHTvQH3fJQTa7Lwf3YJjsh2HgcMU6n9tvEHf7rLzaAnf1MGaM71fiU7j619jdrYwLUjypHtKtb",
  "key22": "gS113zxycDQZdkccPMfMVuA2nfdbLiue5WEfKH42bRXbwY69Mz4GHTCUdMbtekuM35Mn7tDEwzZi2eFRQqjozgf",
  "key23": "48kaCcprxEXddCYU5W7Y1GHzDgKdjiBe2JvWP8uze17VySJjgTPrWcCHxuzcEkUsQxHep9gEZimAnQ1tzYANgNAJ",
  "key24": "4JVi78GKMSrtaAhr8PmhRGADpptTFgkcR1GHoHRj9buCuWCMeRznoXoq4xGpeCBthqh2TPDgfFWXhaCZnPBvcUmg",
  "key25": "513r3GnXj7A3n26xrhVGxqCNdnkqwQvusAbHyUHAZ3CxF7YUS9hdhFDAeUX1joGYs6j9xnT2LcpChZGweqgCq4v5",
  "key26": "2wTx2f6DcrkzTB5DNKAPJp3naYA7ornDeJViTg2iyBL6YdimmjsXTzhVVdxBEBkDYRVp2dChvhsFbdxJ1L4g3AtD",
  "key27": "2fVxdPd8qL5AN9W1sFCntHCfy3k77j52wbd3EXnistBTz9Ej3SAV31KJXeictwGSjZ1QWhEUxZGmtbdCC3CNJxEX",
  "key28": "2emhTniyjg6tfZnenyZhk1Zzzkbbnzom3vRPiquLNZqRDr8y5nXh7XSCxAHFfNZokDZKGnYv3LUryMEVaNFmvfa3",
  "key29": "e8YkqixKm7NugvDecEmLTQWoiTJZ24Js3LXThewSiUVttLHqa6tEYAwVzN2vcbKTe1UXxH3Tf7FNAjLU3sq3iyJ",
  "key30": "5gwT7bMGvQuPiBPwcrPNZGKWGYQCsZtbpFodwG6f8cVpCzoGJ8TjBU2YTGYxNDqooMiDsEcjeyYkNMy4ZM5Arusn",
  "key31": "34638LSxubGuy7Yuf92Wkpe393tawrVgbk5vhMMb61auf9ZtUzuXvTmCwDm9LwXbHH1JzzLo2ZQjRkYeALaXXVmk",
  "key32": "2uYzXfTK4wBU6tuiEZzzd3dLCY1x3QrJQjiQodhgeUeAADLYByeuFfPu5RvG6GjLyoAom8xEGhiXMFAWAtG575vq",
  "key33": "1DGixrwPznGQwVtJFMA2uU7FhKLm2VuVkX16fAQqvUK9z8TkeSSAGAM3Z2D9osDTztLLECGLLkXqx4kW1ytFAd6",
  "key34": "3iZ88NzS6Br7NVGFd8bMTi9GfoBFaavD7AC9dhEu2feXSpbj6nSrahDKfWRoERXzWQ3to7sBp8hACJMsLBVvqxSz",
  "key35": "3daiY1aMsho7nMyeD7b5zRFV9kKYcL9Uz4wVQSTYRZBB6nwhcojrR5Rhsc8SABs9yihveX9UThY9SXeA8sLeEmVV",
  "key36": "2wkejjFL4QuCigFttJq7FgWUJGNVTy1CtGbyVwKJVvYc6VjimJBbJrWUXK334VMKBC5a2d84WSF2NodVySAHPUZj",
  "key37": "4LUBXnncEMcah62oHDvHRvWUVdpP7ASXboEG2YMoAWTwwaARSAXtjVwg22GfJF3xHKpGsM45qQaxT2MbCQRP12Nm",
  "key38": "4UK1QcbujsZAUdnF9gC52J4JDyC7XZ5QcVx63JHKiNGDrP2toMEa5brNocdTKCJkHVAtz9DaNrSBnc9Sd4QLsgNG"
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
