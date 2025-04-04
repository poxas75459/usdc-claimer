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
    "61Wc9d82n2vjJMygm6i2D65ZZeaiJgvaK9Xj5cHN1eyKMLWBAM7rAHYwZ8fSVFddEUmjv1ri8pfKGsUn3CkbQCDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htHffXD825hXgpkGDb2ohpm9CAwNfVcQvKAwG3d8ZA2t4PHakU6huvRdVnVzvukoghTqitZj9fgMHoarZXBgXH5",
  "key1": "3e9riRQpDT513B5EHJYckB395MKyykc5ZbmWCcnUsKdGf1F7T3dWaevVuubnXtmJHqTkCQimXLvPA1DerZmVzQGs",
  "key2": "3qiJF62Ftz5giHZfPe9mq5tJewwnn9g7XKJTEaiNu5ALJqL8fEHFRH6Zg5gKrNBRGqDNxw2MBEL3nrF6Lok5dNGg",
  "key3": "4zK8u2wpMDVUuKHTShimhTrvRPnghnfHp7M1SA4azk12zX9zGruaDUBeVZCRvctf9hDDfh1r89J8yjqqZm2saQfG",
  "key4": "3xs6haxpFv1YLuLa3bFGjvtTJZ7EKtf1BTGCSbcfHUfywKqRWZzGB5whfmXFVPxaUoWQ87Vff7Mx8QZJMbTjTdMT",
  "key5": "5dPWzdSCQ2eFBRFfEbdoeGtGjuRdnnYx6uQVni4tca6HyGcj7C1UFaxoBDM6SgwnF8Pfu78eVuPiAr9NusQDMuZh",
  "key6": "5RLLEFES3u1aNkapnHiVzPM3e7Y3YDjwa4CgYv2QUKoZXFt4p75yLD8BcN31gLqie8f3g53ggdbKHoRgsq43GMCa",
  "key7": "3CBfMBvKL1t8gvpxiDT2B694HeLzRXXb9wUgcqXaJ2djKVcoERePYaJE3TFgmaptxxfkPTsrEbYJPiMbm3MJkbLk",
  "key8": "2hLG9mqUNsMnC9z887EZ55Ph7z6ks9La1diNeBKspoegvXeLTAawh9AYqp8g7ixh86zKwCZQoCZ5xj33nY8J5xbm",
  "key9": "352gM6yUfPGDrNFkFqagMFSuN7DTKAcUFC3uAnPgRzQrxoWWsAGS45K6WoFphAK7MATQ8fHTqpNrR3VYYApaQRQ7",
  "key10": "5G3e32CBkAx4G5Xsqs9vYX7NEmYR2Aup9yx7BFWubFCzRDCLTz4UJGTPmTxtzuPdtEj9ZS5E88ftfj1E2iFBKNHt",
  "key11": "4JCSx2iCQx7BLQ9gqNnnPCWuDg7FEHG9ckgmMFFc4JN3R6y9PYAoD4HEMuhF2qhWiM8EJqfgHsyDmHosfkGq9CSM",
  "key12": "4SJieovA2pEcVQMZBcyj9DiTmyW5D7rVzaB6Pvs3Gd1ksEpHytmX1ByL8UzxXS1C1cQF6Zx4uGZTpmBHY6FDAu4n",
  "key13": "4KKN13tz49Z8g6Tx2mKNjHx5Nhg24nequLbuzTgyD6YV4iDpZjspwQcS5m37GSxtJLACrnQdgbyyUp253WyJhLuo",
  "key14": "2gHR4Lyz6BFypajhnpcV9gzD7bXRUMu716mbjYdmy7kJJfQ9pP4grKBo2DVoaJ1ikN9cQmkUcBPE7Gvv1teAMY8B",
  "key15": "3B5qPx5m8NzK6V3G7KJHGQCGptdsFMiyUAeAr8e8Xj72UUKYocJMp7E85ZeNk4NGXQdZ9etxpWELZzkmoKWzVLFZ",
  "key16": "mhnRbxHy43b9TNZ6HFx8joRCWLxpCceVWBvvjbT94AwQRfeJZcKiwmbJQsvGCei5PTSHdhgcFkqWMZzae2fdBr8",
  "key17": "2ZjtmgANZ3QJqGwjab32HUPGYkzchKaqYvmyEJhCsLkdUFV4fFnbLedxUk6mSKQKcNqJyVRZS53RmRYBVen6DTsn",
  "key18": "rCkkv2KoR5AqdQgJJsgGaTTgn9vgrpiTUwiGXjVjx7tqKWQWzvpP2nRLfUBZ93Rc9sxHMb4DD5STdgHfmpWFRDN",
  "key19": "5ZEcna5429BcMpDeL6otVaLHyujwzNG1CS1VZYGto4H8ZBUDYUCigruQB7DwG1tvnhytb6X7vQhgS2QgRnDfnGXd",
  "key20": "zpt8mCFaYfFZThcyAKUoeXpJyhHs7FPnuSNKF2ZbEbrDkFajkS7H5c6hGd6c74q12x7R5vhUrwtmHooGtku8hNN",
  "key21": "5tMy7Af85d8jFq8UaCS7MWzRpkphH6AvHBwFn5Dva8b8ppPg23JbnqEMRgntXMrfnx1DPK2nvDXKrRGrPSPzPVCP",
  "key22": "4Jfsxt3PM3z7FvDzfCHjMDt7kb5YTogYNq5Vdp8LqHfco5bCh3niYJG2FDYGGc7avG5uXCQWnm6bEDRDSoLR6U6P",
  "key23": "129czQb5TK7av9FFRZ4sRREDAgrTaBfCquzNt3J2S5ftgW7c2arW6LxJbNrdovcBu7Y2d2vcx23NPAG4QBacH9jr",
  "key24": "4HYFzhaMSZ4S3uo4bs8mViW8EJASDYJbBvaV8kyaszdLmYf8GgJHkiEvGrFnnoJ2WD8qqEzde7f6jfXra54vX5bf",
  "key25": "DiJvHUyR1FAGiydkZS6sWhz9gZehnsiMERpkC2Yv4JJyumjxee9NuZJpJcPzx22nFk7YBpAgPtkiHH7pTGgKoXu",
  "key26": "WhM2ivmrMVDrdyqB1Z58HcimrF1WecAUAsB5wvesbGpS82zw7YW36CqpGbMBS9jVcwehQ27uRppBY57jSWBC6sR",
  "key27": "qbFjdBfuqpTah155wveCtiJFFU8UMJCGipbfjjyhwXsJEjsHUGpd1LUm3E3Vtyztdi9SniVwEYDYnDs16X5Dc6v",
  "key28": "41xsp9pDxDPbG8n4StZwaAKNzwqBG2opp1p2Ho9BfsH2ENn46Nob7jfS9tUwnUcXvYZuitBodsqA3bvaz7ks6Enm",
  "key29": "67BgVpmDpC2gPRxk8LVSoa3C3Zy32SqEytYtsRxeHepV1YBxwVfJy64mG6542yg1ij19XDSWLCPkrrtbkKSoMk3P",
  "key30": "h2ifTYFvThhY62cJTPykWpt2PoLQqZmEtgkdG7o2A1jwyXXps8FcxVGXUquKarqBwvBeJ31wmFdvFwdJGYoPRZV",
  "key31": "37khLzedSEiwnuGf1pfz8to7We6CBGyccAiXkBZ2NjF6AD1USwkuPDuVnBZNa49oVAdjJG6UrqW7EbsYrmcMpXpa",
  "key32": "5Uc7rqVVw6jECGt5K2LGaGTxX2VgcSNxJd6Df5goWFR4aKjk9nb7SBQip9pZviX1FLgwdjK6R5imWEimeXEcXZkZ",
  "key33": "2r2qNP5eRPjwi2FNkYWvS3xvsqN7BWncpQ1Q5sqwv9xHirM1QF8SqZewZiBMJZHSoFrJgoRN7HWv1mA8tdzZYayC",
  "key34": "5kb8FqwKmRBMAh7chEYXGRvkwMLrTAC28qw5Tzip4DJwbyqXQcdVZBuW5VrQtqCjd1Ta6Trv4R4aMKz7bqYZY2L7",
  "key35": "3e3JvCLQMxewk36Wuuf5yr7PfH4RNWiSREZRvtDT48ZN6ETHKRos3hFPHytwbZmgeuQikSPr59jq64FYCFoMQZYs",
  "key36": "3ruCZHtfrxd9i9ZyHbF1JsfdX69tExkRphM5N4MSdpecoT9T4feNfFVoMT9w1rGzmDbtDAYqhxPe3mmSxSm2gB4q",
  "key37": "2YeMPGWzmpFYGWRujtLif5sqCaaHyVN8X5tVb8UDY2pPbkfAM2LEVL1EX7S8wh7YCWidTRE9sTq9tN3q7ykawXkU",
  "key38": "5ohWWCMAtVeE4suXFMn2BrjRoZ6JFqdFsfH9h9ARHmJ9tg3Di4MvBgKsC71YMKUKKsYKwTVxTx39V5LuEeTYUmD7",
  "key39": "2kN7ipD3WPaZiTyY4jy76zMUPy6tb6THmMG4PiRvVAVSBAzKwy1Kz2MFHwfJq4J2yWn9xKhTxnT4kcQCJfbxT3gk",
  "key40": "2L1XuLbETucLjM24DyZU4ieDC9qwN8iDK98uhifjibwMwHaDKaVHAYzspvK1CSM4pemjFPsKhT4yBTvoBYyrezfd",
  "key41": "5oMCqV6aFCgFAumnpLnQbppfz9BoJupikTb1LfYJ34EoTL9tvSG5n362rmqGbuouchbCYY62SVSfnBpP3CNVQKrf",
  "key42": "5s6Ttsop2i1k6JK7Di37GpKTGdNqTjh7x7nR3nEumAwPwhsMSk4gn5WGkbPfKfXuqyW8zcf7ZY9LwXuiGmJsDF5H",
  "key43": "2nL6gVyu3pyuLphSC75SfGANCZWwyERUYMd1eRyoCXczD1ooV4GGvNZBvGNiXJQgFdkokNCPRsrCbyA8Bet4E9QT",
  "key44": "Fb13j8dWH6gdyu114xGHaFypXkPTF4UiKA8gBsjA35GRDfm7p2LVafiTNmJqkXyihqVLY8ts8EEZQEf5bVq1rCx",
  "key45": "5aqqk7iLU9QtiXdWoChmQxgKNjuZawjMeqPN5bXrZ8HEh2oWVQwqn3yJTVsDDznKyqg2C7j7xSRtmNfChszkY21Y",
  "key46": "2owpnFb1pNgjY7vWuTo68ZFm7pqvpNhE4LzagPAwARVvSgnzXYqaJBLbv63GBnxroCB2rYhZDzSSRB68q3Ds7GLQ",
  "key47": "4ZhV7hmMS21dCht3UtCvDUNDUdxP2MBxWdb6jWMQJwSqGW1e7EVeYEsHJ4GeHPFx1WdjDhkk1PQbxzquZXHfXMJm",
  "key48": "S8YqDRSgegt4He5CEn9JTVCBG62HuEwqGKh1rWFQw5akmTZTCeUsnA84uWvihuA33pqKEDpj7Vr88qGHkusa4yd",
  "key49": "5rUy1XLGprrovMvTy3kYTZnnMfZ8SsGRaKHQu2eLF2PsKSo8WyPYVsspabV4VZyZNSetp2jBKXjw4c3JszhcuX9e"
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
