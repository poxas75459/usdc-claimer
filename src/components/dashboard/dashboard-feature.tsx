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
    "3LeQ5D6rCZV26pkfHWhntDsG6Y8usQitkmV9szRvxSg4NNNfyDkJJTKFDpbJb5PkxoKZxDMhJGV525g2QFYRWvAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z2rQ5ajyjDfPCMS44oTTeN9dyaguk2QfmZWGbNQszf1aKnUF46NGwifmxAY6LV3CJsS1phTocfYbfZ6bUdkcdnp",
  "key1": "5JpK2Lfd6deFN8xq8n64tYaUev36WBf45ZYLBcSfZHvqoHhWKsCRFKifxuw98HRQsN63siCtbS2i4c6piL17wp3N",
  "key2": "5fdnuKzXoqu1u9urJNkpYud3HBvD1Add1caew3Gs8whNdP2JbiEses8s79fUwHPjzfKyoRnyESfFH9n7THUhtj1D",
  "key3": "mXPUmDgieGvAQsTznJ8RFtrMm6z8PczAsi5eBCjqpFYjqiAtWzDFk8HTe6x5iiGCih2GVZtCpqyimaGHNPuzT2T",
  "key4": "28xQvxSYfapACPjLs69G4gmYLdLwdv7rA6rXQxiSAugfmhtY1CAM52q3bvc3zbym7rLQ2WUdmpSS9dz1EgoS5fAK",
  "key5": "5cVnNnkR511auxWxsyTriuqYixKbCsajkpcXGLsthdN7jDS7DAdV6idBc7ScbQ4u5EodfDtsTLymuPKBPPqY144k",
  "key6": "4Kb8Rw218Eq2imjB4yeYeXEZjT4d3vLRpVCtHyDDh72AYLgQgdny5RHV4bao4Ee3JxmG9VP9LztcjPCm6uyVwsYp",
  "key7": "3EcuEUB7YKYzTeRVJ9HRabExf53yCTmq1spd6D6TH9tz63c8WGfEBnTQEbkyi6GZyKXEZaV7bTdLpToGBRb2KHEs",
  "key8": "2R1F9s93Az5qEn6rgzcCXBgepFynDaMskkeRY1VKpHp1BHz57M9g7djFGXnBmnaxL19ULd2o8zigknVR9ugLa7X6",
  "key9": "5V4np2ALvVSEe4DrAWWHcZ5ibsSSzVChdYwtPVoJXGh7DS3MuRx4qppdTDnKt3Ku7JAy9od9B3FqDqKAugff6haW",
  "key10": "9AAEesqcXyfgACHM1uVjEn2okCeyD6LQgJYLeggL1s7vyy3HMcpd2fShyTfvopNdWTV8DGYppJHMYDsdksNxtcG",
  "key11": "2UCo1guSc5LiTtJaBqBhoCzCCmaS9uxjWsoDgbtgxkjEYwiVsGTEcrJZXeAvXG3D1WkukrT6HpuULGuoSPCzKp61",
  "key12": "2e6p4hEn2RrwMJaFbzkUYcEaDL1rPzWvskf4KLG7dH2v3gDmEyA2egwzYmRiMs8DMBGsLwafpofVSkEF2pJ9u8Ag",
  "key13": "QEhLvwHZimPJrfFpmwehaovCBmebGp8uBZqJXzB7VTHNTyvfazdM63mS7ff1xVKUpZFZxewDNBWe1iFTEcg11by",
  "key14": "3m8bEjkUA28j4zzpcsrDXrGZJACg2R29brxkmvrnAWiMH7aQx4Q1AvtdtvZvgHTJtm2hgSqUHuM7kMqVkXiEzfsy",
  "key15": "3Hhm6x4dEMgPVth7JkVz8FF2p22eXWstbVZePGPEZwHe39jjyYj1abtnASS1TLjsrrXC2KH2xmiSDdUkSEcExxki",
  "key16": "nkc53SXux23o4DvSAgy9iJ36zMY7UN4jymdPGaQgXbeiANsvjV9R9b1RvoRqxUwrcvufvdJhGUVxp6C2QpcBmnK",
  "key17": "2aGw7DfHmGYGemSCKdT8va8Jcdp3SKU5bwi7eQz3AVN6CbbomjerQRFrLAvLRyKKYFHqN38VLHvhq1PNr7ZCbJe7",
  "key18": "3wzvtfNLHysygFfFuf9DqsuWrPZCu4UvLq74SFAJfdBxdDB7T34x1NFCrtb3YESRc41rmvsq7szhr1W6gozoNfSj",
  "key19": "2y3ayKB8RwGASc1q5xaai6fqQ9F6TNC2iaQ824vVXiDLwLbdJogGGAd2Zrcjmr2YX2FBAyhAWfvzDrxQvPRGiwVv",
  "key20": "3mB7HKASyvj4ncdPLXBJSUa3J2Gu7qLRPzxATwDc5adJuU77xy1yvR72WzmQBq4EtgfTmRi1MmfjSpCSvcJQaRyZ",
  "key21": "2sYRUXYuV4H12UqP5SxgFqN4CoVwLbsk9gLDMS8wCd3jmpU2Sufd4gU3nWatR43Vphh5iZBDyByeyk5nF7RRwdd4",
  "key22": "5ey7ewtCHj7vfacw91qTXg4DRzrYMSmUX2pXcBK6KcQHCP1A5kWL9yuXhpCtmRn8sw4uk9UNuTer9uXyCcbvSyj6",
  "key23": "sD4sJUpLfWHyU18c4a9YfyUgcfvq7Nov4KMpvzvuQvNzxvNYzsUdJFedkY34eau4MZpkjyATb8Tz7bKHXggXZVq",
  "key24": "2BrtmxauyX8dWQ2VNc4F2mD4Shi17dQT5EQqmHPj9Bj9wq73rLHN4ai1WtYXeciZEdBWqUSmXJr8eDwmwrpkN19Y",
  "key25": "3KstzjRQgRe8XXjHNvb8Vacj4469unkKq2es87NDyxcd5NEpt2VXDnKMohCG3iy3zifBvQ9K4eSbAaUGj6PLbgUW",
  "key26": "5rfXhePaRp4GyE3xtZ5XyUysEFVfRXwb2RDCcujGY4PaU6iVbdKiT4qnKn518hh23WDKjkb6KAPpUt2xioWPkSf9",
  "key27": "3Cmj7cfFkPQnzo1TmvmkmkLz5RXKLhv48AhpknK7cttVcAzytRVLwgFEwLU1jbarhGYE1pdhLo4Zdh43JYo4tKT9",
  "key28": "2UuePvS3zTrGADmfGNhP8JGUqiKrCuisTy857CvbkUuKuMVUB2Sc2ogWW3eCiXYoFomzwpw3p1TLLvjmgwiSueke",
  "key29": "66fg29xg93z9UbVc8Lix2HQNnCovYVtc4btfrrtPkWGpjuNnUDsUNM78GwUbUtHwm1mPhNP8GUDNZEwWLhsFD6UB",
  "key30": "3UumN8LmEKUHUp8RgP7CGkUa4oPMTet9o7EEMXankRq9Luue6LqkjxLDKXSwQSxKQHQJGRvTtMsj9S5ufnRNjZxr",
  "key31": "C2fctAqMDfcQJzuE5Rb1xZ9kBUo3Uwhd2kx5vYSxDpmbLj6rxRBkgQzjw2feLyHDuLBhBCfQYFq9Yanx6NTa2rK",
  "key32": "63V5oEo2Emgh1MPVSFCHoCVvUf2UW3YgyDgGNzgkF2Qz6bxRfLPCgERbhpbvRKK47tzsr1hkcATZXwETVpkifdrX",
  "key33": "3Rd4Q6xJFmrM2eX6Du8AXd8bgU6h4nPyj7nndzTqVV2KDrivjYUmhuyJ5cqxLAKQkMBwVj6MZMpnbzQMWnSWNijg",
  "key34": "3P1F4n5ePoumM2J9v7Dqa7uQ9rWuYKm5GSkP85Fg7kGutoEeddNTkAmhxiGVdqR9zSo9vhwGALHhnQnaFMsWJvwh",
  "key35": "3jf89vSZUwgiXGQRMUHgZiNYbVBAWxTNWf2zEdaKRvd45uQfvkN3RduVqzMiXzDfMVYFXsh5PFsaJ4Vez6ASrC8g",
  "key36": "4gFpj91a341mHUQmkzVY2MNkJmKBye1TYZuBJWXNb9fUz8AiAzsKc3GsAFqMkDm8pc7vxEJi5JJYvfBiyQAykAzr",
  "key37": "2i75ZesoH7PQEkJ5UmCgr5hSA1rq64aTwyzHKB3ggnXqxQ1LQBfCezzVzrq7qC44bpi1Y1vfpqSTKMorxsuQFmJQ",
  "key38": "4aGvdLe1usevCrxvcCGyMgcJXkMerXcMRm7YNv3eimQH6BwxtBcYTtV6TqQbKp67jXbn86ZXfGZ8VD5njwUMGVrx",
  "key39": "jip84FBkQtZTrb1S4PpeFjm7WCMtTfeMspSNmqemNKxhLz4bMtvK712tMxWh6mJfrzkPuRDbmZiGsDKSNb6H8q5",
  "key40": "4NyydvRm8x1kqq3cRuGLmaPYPRAoT136gb7Z4B3TqxoiSCnDoufHegc5DmiHa3gXRcaXyLrVPGbNcrBni7RLpSfz",
  "key41": "5h8zVcwHwrUh6V3pjqpRNtn4vk3U3QbuKPJQGUa4fEpgUVFh5ERH2FoaoVhMxzeKVtkCDYEFtc4pgB331aV8yNAE",
  "key42": "513hGnRGjHPsaGYsaTwbyYoaDiD4ApEUpNm6gUm1mvYZL4jaWkEXP6G7Vct2v1moLHK5yPTZ1QuYzHuLfu2p2Aip",
  "key43": "5DwHGrqvzZjfdbFCW4FrzcAftpHMHCvNvRCyJHcukjCnk67xsTczWaSHG2uAjJJu9nKfitYr64xLoRTcvS2hBWts",
  "key44": "4d6XMMFegFSnE1PrkZ83Yu7JgLtui3Pj58MTBMKbjtgYUJ7mVAkFp9uHZpd821bmxQbSGFZWMtqJv7BcfvXJhPY5",
  "key45": "2jm12RxvqMpUr2s1Vvj6qTVZXsXtkceQGr5qKNnAynjipiJe1TvyJ1vRMpprh8hRfb9E83MhpzAx6mwC1DEN2aKu",
  "key46": "4fy6Dy8n4ioqc6UETdyVNWevSWunJQjp5gkFTZSwtQH3vXzcfTzB4ZpxAJhP2omktb8XH9o29ajuxyVEojiryHj4",
  "key47": "5sYj8yUrpvh63Yr4f7ZenTzQFK9iXknGdXF3bioL3eNKSibeRth4PpVh2rmDtL8AeGkayrajd2kjdbkRTeKAz6m1",
  "key48": "c44H2TyFYobeBWoDv88W2wmteRWmFf4X7gsqA4uZFop6EftcUDYkGibZYxZffKjsxSGAp4JyqoWHJqy4AKpGUkA"
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
