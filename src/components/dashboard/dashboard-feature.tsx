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
    "4NMgdCw3kZEtYqjq91Bb5CzMuAWoxGz9LAzfJq8MtAwcRw4oAetmXUPykEpEwyt7vJG1b7m9LJ9b1yVymTTQZ7ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Jstya2E6u75Mi3fEwcTzZ6pJfna6W6PyQyqDtxpJWKotQ8nVyamGeBXfMyFqnwV7TVFnt54PLXxiTcPGJ9kypd",
  "key1": "55i46wTXmP6nj2VQPE7DCPVsfpPVKHRSr1amz73VU8kYSkdwLFcvh3459CLNE53iZiQNFTeqJirAzXnqwgxwDcag",
  "key2": "5VBj3ptwhkgbaQA893vvxxAPMpAqC6EkX7fo48bHk65UXj7VALDhTDh4S8NZFggVRf9NZfgqKxNZJiDqfZzkGcFX",
  "key3": "3X5TwzjAMFSCVeiPXbrG2pxLugjijsgznHgpsiEpsyUEXgkBxfTVbFMt1cC5zdzsTobFb2ax6JuroV1L8HS3wac7",
  "key4": "4zySWGHrcf4aZCStVM4kVgLGAurFvuyrtYw1BVqzAJe6xh3c2BvgqDmYp6N5Ko8wQ6xQLWZ2ND8wUnSjSL4AiZtP",
  "key5": "2nmEjoJA75bLucepnX8jUDNwUUiRFAkhenG3bFMHAF5CwHZSPW6fBFaYKpQugfF1Di46UXxN782wKZw1zxjpQHat",
  "key6": "1G5etxtxRwiS59QciLcwWVRaXJGYPFJ2mKM1giiSsAnjMnKdEyeBiCi8hvtqUS3jD6KqooANtiDDyqY5GM1ZLTU",
  "key7": "3fcVeNgfpxnCY4rDvH6Te8T3zR5drSqdWzE4EtEH4x9PYJkGqJP3DtCdT1b3JXsmiWUbZvgHmpN8rnFJMwzq4aoA",
  "key8": "55GSiZSiMuhgwLAo8MgRCGXKgct2rtF5ysNP97mB3D1AjYzfwPWgX5iNpV2P1uCsbM1AY2zPfqHQi1NtADR8Vtng",
  "key9": "2mgZG87T2ofMgmQxzTznbDaWpEYJCWU4tmvMtgHmBMTJgXyiTz928Xr1ELrexCyh1rcsMiv6d1qZjE5hwehYKY9j",
  "key10": "4DEaq4tiQ2yFGwJajQcQvfMMYUaXBUKapjA52u6YDjKNsVJWPG4LFXhnySUY5G7tivSCxFgLTuJKpee9aFWpWabX",
  "key11": "5z2Rax5XYUJWxm7LdM6NtiJfhQdYTg9166NfH4DwfhW2x4Ft6FKWorvWSdW5JSexoCkJSkj9MxcUe7ETWUDt6Gv8",
  "key12": "uxaAaYF2jvMWn9cESpcizc58Q3Ai7j67nupJPqg1VMen2xT8kyWriAQYRSbFPeYkzPcWB7JxA3dcHJZELw8sXJr",
  "key13": "3iEe2pkRFqEN26JQ1kP8LRtv2RLH7xGdjWv8prnmHYmgBa8pbj4WwkMdTjcwFGda1K8MptD6D67AQitDFRQetxgu",
  "key14": "5zPHQRQ1vMwUXeYswNb8kwJj7uqqssLXKf9v8PpyFCeWzsa7xprBASsRyEKRQYozBBJUQBPAx7hDHapaBqfAne4Q",
  "key15": "5boZWkRYKZ1VQpRtQa2xMphL4ynj3L5MsTddvPhDdDYWPo2ZLq5r5qF9JXYkWtKgwbtdxNPMDAiwuJap5QtwTPxK",
  "key16": "67HBeLaGkXEEVdQjEJsAQoSyfPJpo6JHgb55fbSLkX63UpJgqUzzVCPtwKowzYJ1vgdsZVgt8Ar7kk3SEZvCzvp2",
  "key17": "4rnqheU8A5XCJ2oa4Q2Dm6Q9sJFtw7JnDNewNGYi9cRwrAQHggicTpGtE42v4uVdUfoFgzeYN1jBDv1x8ShYS6nb",
  "key18": "5uNNbdYM8qNnCnnkexPPDKEJKC8tyEwjY8TTvhNN3XtUCgibuApyPRQvZjn7z2ExcmifyMCXeNx7D74JKJx4xR2N",
  "key19": "2P14fEVst6j7KuAeH3sjerLrUGiUq7HoDWpFgH7qiWewjjegmyNrrNdNPgZQ41u74x655ajuQ4dXB2nsLJYJvsnv",
  "key20": "4vqLVK5qraYwwtsATKJkW18ufgHXEP1U3orgv9FZFioRG1GtJoS2xRwGGJXpsDDgV7KjrBDVRkWx3LA3bz7oPptt",
  "key21": "26cLiqZgqQJJc51AUeU9VKbn6TQforHM9JRCh7WwT94N9ngDb8DqQzW5PfG5d5V58Fic2D8L7fFmCAPJSEeiZM4F",
  "key22": "XkJETjYXqqRBNqZt9Qvub59ouGRQ4rrtfARNWM56GpZNayQKL1ztXHYLWB5gofGWcrpjeVeWgzsguBvduwFoDem",
  "key23": "4arY86dJNeTPuXSPcet3Mys467BJ3BW6hJ4RhY8iVLYGs1okam9CYKzr5asEn1rH5DpVYRmq6dSVE1FjLY9Nzk5a",
  "key24": "4n4eaei5r3otKSb74xy5YReLwh7UYMzYm5Qpuowam28w4iJB9Fv8QK22o9Hjfx69Xbj9tGtuxh1mBuyb1V2Kt1De",
  "key25": "4Fna6DUyQHEdkSatystcPD6g4bTXZsesfaiLNTFci3fiXGM8p3fucRGYxjsgtTX4dmN3XSxdAQpfPHGdZc4mZyaQ",
  "key26": "3dvZKuKXsFiZn4rkVbJeABVL8QKNDQKJ8nw6X1ZpJtopYAK3gc3QtuGeyw1j8W1GqTVimsLcm5LJRoMDpdsBKPqy",
  "key27": "7xQGR9t4ftQM2cjPbthzE9x56VJ3TboGdHE9Sn5HBfLAJsoMday4uFCeBQUucWf9Kb3siMbak4bwVdzC9aSCZ2g",
  "key28": "wLw5RUUL2MHBMDPywyUdbzaGjBqWPAQZyMGpXxpW4mgaKPXSszrFxgKTDcF2bPFNbB7jesqJpGMEwM3dafsFxuH",
  "key29": "5Zb6aQpXsuWKM6Uz7cTv8uo7obWSuuEcBes5AmyUZZvvgMz7BUkBC77PdfhGmWopNvon8MPbTVUq2p46UcoCbHjv",
  "key30": "3aNbA8eJhKpZVYJa122LBKfSYUxV4i8jWp1pEtCPwsacHgNymPMDHzpS8Dzb4c26FiRb3Zme2SWtcNHy7noEmYqL",
  "key31": "5ufH1bUYmyXuZjpHJmTHQtksGxF8mfn7Nk6LucsvaY8kNFWa4c8gxXwQJz8FQjRTEZUkPLDt2QsdFW5mxUXkKM46",
  "key32": "5NbXaDyZNVAPfChGVHASn61sABNdziyRFXabn8YdQKAkuCFxk8yCHcPpLrk3krA2qxPsM2TLYP6WH4UjjFeVJHHD",
  "key33": "4YFw3khFNF8oNWzKqWJf72zyjKraA8VKXwHnDiHLQi3mRhTF2Gy5NKZEUbvBqGUuJ6RDyZABmvjhUUSxAVbWWvDw",
  "key34": "4r2GG6Dd9fpEcdHXAvvZTPpN9ZZdSuB9LCXFmGsX9pevR4o429Fvr6TEHnTj2tJnXrty1HNLe7JVn7QFmxagLfAY",
  "key35": "2WhzSvCvVPbLGFTA5po129mJP8SvAxb7BknhsR352QMgN1R6RXXHLyChSVf73dZNfa6VAV731evqxpVWF6ztLTAL",
  "key36": "i8nmR698Y5sPA2wyoAL51YSrHuhD2mJ9Hn6WcVXkqb343CPSkhF21Ao8L7hj3bPzppYia2NqhwDr7CY6zYX9Fsf",
  "key37": "2gtdJUXieT3UmgjMmw732DKoT9WzDhmC3PDfs11qSr5YXpvg3PCUBE9W9SJ4cLmNn3soPXnYJUVQLP9uRvBAbPo1",
  "key38": "663fC5wjv3R7s2symggPNcYA1W4uFW3g5qSitebUAokVumPFsspaCVXJf3RGPUjSikHbaWzVJpPauBjkhJq28viX",
  "key39": "2ssaHtoYvqRjHE2yt61huapNerYFN9Zvhn1suRdGzhLZWdeHg6KCDPjxJVpERwmzpxwqEhZPERmfDmQrKghEQFbt",
  "key40": "41ZxpnUEd8SzZypSrrmCi3vkSw6DmHM7mjZvwYoEFAXgEAmETnmXokxf9jDEnPAwdixDAqk6q5QC2TMAmrreLdGP",
  "key41": "4F838b81R6fMTiT5c1s7bPrpHqB2PSq8DAj82cfrUqBLnCU8r5xTTfLnPJWEKCrv6Q6R5HmCCL776eKA3EnEPm9J",
  "key42": "4u2P28ZrSb9W9RYTSXcgGpriMPUHaZwGrg3meX4p4Lv23uZPujgYpmoZxmfQxd68VfZEnkbTbjxc2T4cJEE3kTjc",
  "key43": "53mBgWXi3e8cbB7oMFaUXgfSKS4rRJ6QkDmHEDNmnC1MG8gRBjNiJ9X8TFLDpXgbLo6vRkEAFtCUZr19aLeDy4yB",
  "key44": "28P6E474qyy15zt9Gu1McNpfQkLahumWgJ5nm4p4AYQWFhETSSDz8RwHdHb6g5TpiaZgMZs1aN1MMBR4iEAGxvHB",
  "key45": "jdSFXRhv9pKzJyCSSo7wbia8xRUd3EkyXMSHiwrBYmoU7oTZ1QimuBfZZAb8zGqkKRtfu4eTifaBDFgWpQMLdtH",
  "key46": "4hfC5rG87JNCLsMUG1piWjUarnfghbH9wNCh8jPVxh3BteRWHhE6NaEemYKyMQ8xoKAKSHEEvbdscEs8oBBxgT3Z"
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
