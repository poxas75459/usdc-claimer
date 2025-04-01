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
    "671DLGYRcd2sWzzAGjYeNxEnrYeLV5tVd3rf8uTCtWXpcEuTFgSB2z8ZaHrQ82WaDLDQWLp6DSV3ivx9ocmHTS4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J6XTWZYbHh1pV7xL5sf7xWaJDd4uYma6eiSJhTvE13TEDYnC3kkWkpiU8CurbfJ2mjuEhZgRd8gRdLKah3AV61F",
  "key1": "4MEhDpouTVpyT8CBu6GuDWkYiUXPwAsZuFxmb7VMghUn2hAAKkGZUhBquaB5Prk7DMzT7fFYsz39jUvPzCXdBSpr",
  "key2": "43aYR6mHsKJZrs4quUFW5fKErWBjDTHSqkqBVSBE7jsvssjxcdEj5zU2NheTVhXCrYnYSZWxXMJMqkmpgiJ7d9y1",
  "key3": "35ZgfAW8fsAvpoGACguiB9WMSbZVijXnPGxBbXDQyFfT1jf3c7BGr6Pi9RaVTa5bZ3sWBqD5nLsP1DwVAKEAesie",
  "key4": "5z7f4q5N9RanceD8JQKmQKzeVw2cATypnirN47b2EK3Qwq3VBGHFTjoQwCkKSUnFrXngJwyd4jgGsFQjseVHLAnn",
  "key5": "3sFWz3ASVVP2AsEYuJrPcZYnXE2LkzMiKyrNtDvWNFcT47G517FPmaV71SVe6wwAYAv92EsCnzUkCLHTjcXfuwtV",
  "key6": "J5GGedGFb3Qv5ZqaSmz1qKuvxHQdnuuKBH2GYXQmBd7ZoJjoeTS9EEDaiPNPWq7AGc74DLkDutrA5qLDLUWpEdi",
  "key7": "5NeAnEpxJ44HisrYFwkS3PoUBZQHoNMWGBkC7B98RANWkerWiUKaAMusqJeLPSj6Qa6UHBxtTje8mkfAJnfGifKt",
  "key8": "4BZAZSStiDr7kX5xMFT8twMBbmauPv62jYp8Nr3i1ZNGjEPkvwPAebnEtzztQj2CoM4Gc1GqDQuypdhAEupYSNJP",
  "key9": "49JjaoD95GtEEnpCgVHM79CBczyVPoo9MNUtEdE32swoxmUhHhpVWxG6TpUw5cgXwd2VFZcWRuTBAHdQ5gv4Asov",
  "key10": "5fS2yvvDiCtxYyxvDd1w5dbxhjdWoabkmBUGUHJtv1AZuLzqfSJvmHfvxKmU2WT2GXfjmqEzXKYueccrfrhgEszn",
  "key11": "2Sx3GdokfBNjPqrVitpsM4SHdwBvJ4bx57M957BPQF9sQtxF5LjUWPgFXPC6AdrNPE4QKeetjLPR6o4PXpQLFeXm",
  "key12": "2RtXAnqm8dCQWcAvs4m5odvjcbsASrmXWfmNFf9XJjA71NTpNmVSy9h6Vmfiqf2LnMQQDeTRiY5u17P5YAbXJrG8",
  "key13": "4rfMmi6wBYX6uL8biXgtqQDD7LU8GZc4X9jDGmPHFqnJMPmF747ew2bWzhSLMkXXoEJv3qY9C79GQRu1gtJaLFhH",
  "key14": "4D9kD5hEmeQrrLEqvDidjCYDsSyMniUX4PpcKjsNvtatFh9riTFRMH6AaRHSPDEKenWuzqStwmjCN13RUzmGYuxb",
  "key15": "5D3gnm1NwKAkt2EY48H5kGYDcey2e522vauGiAtafn8VdZQFfvNU6qwmvkPHnsiRpyDJjHzo8GFEzH1RD1o8xMDU",
  "key16": "5wxeWuWcrofXqox6zrHTo4Rnng1w9JJJDYDsmTPGEwkUmoc3mVrnxYPwY92f44XCzAz2CaSjS1d975yVv9roodL5",
  "key17": "38mbzw9mEgStVndVcHjGaBKusgj7j7c6TxKJy6SkbjqSXLseXQkvAXq9KcoRadvHkYVSFTcb2n8iXQCcGwaqxHmH",
  "key18": "J6DJQ4UPfC51bVSaVHTj6QLStsswYhQbdbczjcVysnLJ1eDeXPsJSqL2FFVQGvAsoLAELNyEpw15YTVHxbVd3Py",
  "key19": "4qXxfuuaymGGAKKxpqwh5tTSbbi6gepNgnrba2rVbRnpJvKG8oN5Aea7pwAzeDhoVettoden4cXrmPS7EG5qpPxM",
  "key20": "2QZEyxdbUjd4reKfYQ1QBzAx5tNeNZRuJg15CQMUPDXVd96EsgW9KwjDx6eQSCoi7F5xYyFwXoNnkqn13zEcsq9x",
  "key21": "2ZrHcRH7fQfGHF8uiMA1y6AbKrsxGtuMgt3C16XaRBFL46ig1df69HJcTk6pJ7b78nbWVUv6tWiMbrpLJej5UsXk",
  "key22": "5fZXviJpaK7UjjMYxYkHhNZMA9gSF94gk8JEkjk6mBF32F4psehXdokgtE6zcPP6mLDakcFsniYSPhke7MofF5yu",
  "key23": "4zo7bCKmwoYUMUeNd6iMxTZ8S8bRERBrxnXXinNhkhpc1j2eD4pX32KQ5Pmy61ayhujX95JjbVCP6PfYra9wqEwy",
  "key24": "2tmQTHnxkj1VQuNQjyJ127YY2Pi9WLSwZgXkBS6NQLasHGLD3Wa4KaUGbsYKRjgNnBCtYbzmozxVaKTMaTeF6oCS",
  "key25": "5R4jdsCnbQM6aFNgUfj5DazrdTutg5jG4KdZpu9L4AsVYUqoEDDmp9mPdfg2uA5scq6m6snMHEDHTRTnRpmKb73G",
  "key26": "iV5YCGS1yXFWSeKGxe7WXeDDRzHZS8tkWdWEcHiputFkmQCv8eB8ePmhRXqhnszmBZ2CVUGW2NKPAcWdW5g53J1",
  "key27": "5u3y4rwAsSyiTMkMKRPpbd41fAGxwtkJPHRHEP9ajxPJqDGFHGpr2wVBsQKh1dUAf143ppM5T51yeyDdwmxFFCas",
  "key28": "4fQ3dbnkmmJqcZQjiBZfK2Y2g765D3wRRGeqamnX2FaNmrwuyNhQPH7Mc8ckcYzU1HNEWkeJEfmmGvur5Az3DFDY",
  "key29": "Bnxp6FGtjxPGzyHBpsYFteDAcvZLTazjLKehzqDiFBt3afL3nTv2tECmadiJ3Jy2f6nT9EWjPzyZvEsGbdwCw84",
  "key30": "2YN9VC4rSkYshhUVJ3ahMq1B8A2eAXUvp7rx6uW69m57HkSNdcShtwefqYK1DxrcCag4cgHwCduGbWwqhDnxZz1v",
  "key31": "59wkHLKjRMUqZGJ47gRmLALYeEo8FAtoshpRJHQ1UDcwxmHN7YfCQ1h6cgJgDS6FX6TND32J786ESBsiM2MPood9",
  "key32": "3LbfUFM5S6CQsGPQNVkvctDfDK4jYddEPuQiyVAVRfsZ8jgWW7XvwWSv1ScxafnL7ZC4ou72coD1eQskbuaUaFuf",
  "key33": "5M6SMom1BWmUXTX8piKHM6JFgh3aDsNCjYi3LRPDciQ8aZrB6wGS9ecsbMaYNY2BhPMzsiRFE4H98BJUyWyetMEt",
  "key34": "2hrXuRih4moi2McQnEos9XuUYxTjHK9aEEju9DiSGxhQKRQFbxju9ENm87DVJaT4Tpcbwa2WnxtvDPsHk5ExpLkK",
  "key35": "2szrvsbJjHaA9m7Wnkbsp8sgS5EZ7fpo7MsSroymtNnWUGRkvRMLG68uhukqtmyd3CCf7bgW1rG6GioTbs8Gf9by",
  "key36": "1iUCGXSubYehyZYNiPVisDF3xHFLp4aA5PQnXrMXsrjfi2gw3r9wGyigKvUwszaq3YSk5DVAMK6ddcDQRfTbiBY",
  "key37": "3CbRNB1m1BQDgwfKm6i78f9f6r2BCcqSWp2ejyvQzoPhnEqhY1hNaY9osohWF6RRv4GX9odnWoEEdLdxrYT3otTG",
  "key38": "BKD6EkkQDQivn1mrvijw1ctRMU9k7zjAdQLc5KM5Fhcjp8vstWY3RhwUEm8P6JkHDLLc5ex78cKBb5SqrP44v7e",
  "key39": "CBpd75Y4b8euAodFvWTAifWmSe2mgV6yFx4p4Ntdow5EjMzHoKHgeC97B1ByCVictrswvxNgBvrH4yANdp5cKPw",
  "key40": "ra2NNAcH8jgwUnnAuXr1BkddQweBfT9NSZbW8QCkkeqVRXEZkt71DnxNmfFohwXv6bEXCLSRoRRj2BoHGKk2ez1",
  "key41": "38qjG1MRBB42XYp4Ktdqct42i4jdVTmkBnNRUxgKEztCfcKasT3JdrxQ9HMQt5B6N2ur9uDm4N1TbR8GZktymVuL",
  "key42": "31rPsBWR2hRQAWfUtaT2wMd8y2mnRtu38xrsDD9jc4J5q6KfmFKZwnKezZQs2hkLQRsUinmiD2sRudii5Zk9wTob",
  "key43": "5xxihHytbG1hj7c2Lieh4TGGKCso2niW6Dm6GggnTnMnWPJVRwiDXvVYzYL6q219miS1HaiN6hsWh6gxKv9pTFdN",
  "key44": "3ythLkH657QGPFEni1wE92PVRvfkTnez9eqrQ6Ym5RbbvcgDKUKJfUHUd1ePQ8iEcJ2zG67MkPq7nHhGpy5p7pph",
  "key45": "3e5ycKcDbka8SF7tc1V7eKtocoxjSwcj3GjTi1DeEo9NN2J7ZeNAywZUYtAoWgBShHG3Rp74h7oTSj2mGaGtzoQh",
  "key46": "4iVEjuJDuZ8Lr1edxzps4DhxpTKrgSRFNgQw4KMGzp6dX8UtGh1YD47ZNSoj5okPQbPzH4F1QSjzACw1hTobdDZz",
  "key47": "4pognnxRBiUk4oR9k6W1UVBArq1ZtGmSh4KQCyaFu3Q35TLvJ7WbwSResnVwwsLKWyRSG1qLg16SXJrkLZ9RmUrb",
  "key48": "5JwDgCX6zoh6mvvpWcmjsWvu1ak9EUQrMWGT1kD7H3AngXdMF1THj1qxdnnEYvH3Abwye5GCBHEYCSNzfqGFfsCe",
  "key49": "52weo6XtgXAGKn6qdaZgqGpTKwCzdMQo4Q86enYX4h3qX2ijX23yiDDSdQXYVYtQUWYbWXSwwMqeU1WqHwyABWRt"
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
