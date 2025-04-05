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
    "mdWfQ79JeGaNG1FKW7yxwY2XxUNzmt9RxMtqoE78znFx6yVrXJ8VacmbG34kqbZjzZenu9usyaTvv32mxj3sWqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UW8MWp2ExTQkwsSAqvQ1EdEgcpdZ1KZPGxwSDLeLkHTXzrStkCUpWu6rhrPct7CqV66DJTCnejxnKbJZiLthMN2",
  "key1": "fxLFsZCXqEur4vJDnMwCyMGipjQRWVyVg4PxeYoQUkkaBYxKsngZ4jupDkCcHPFQTUDHtfsAcDnChKzKRgkuUum",
  "key2": "2BDy5qaTZvwYzcYLuemqvfVAMjmbD1c336ffXFGiVmrCWPEZNqqpZbS5Va2RfJLGQqHa9wpJLqEfpW7et7muAa77",
  "key3": "657BgKbCKsQFJ6M26YWfU3ETY9fNaAhTPteJ35AevEcqp4MeqYvhtJqQm6NveZpcc1LUsHphmUC9KqTGxmLAGbQb",
  "key4": "4ke6hve8QJo2NUJj8h51JBFYK6VaaAAqnLHkvB82jqpesEKXYhjMhRNV5qtmD26Wfdg86UEqktZRdWpHjVRGcXMd",
  "key5": "3kLs88gCWxaGebHk2qQDqqYbnWVwPeZBkB53DoE6SMib9dKCzwJ1L4ntrxH9VdnjEQudmWzuCUCDNJ6PHJRihLVh",
  "key6": "2RLNZWrUmzbuYwrzdBTpo4wtpV1ufp4AsYASYQvaVBW3QMogUv81Em8BLBcXASojemYMRJgem4Y4prvDFH3n78V9",
  "key7": "53h37xucsx6FAaktQ3mqADEWoYYQtFRGMfEAZpPt2JEVR6tHuzW63hvVAmpEKVcYruv2rzEZVdvsWK6NkNKdQif9",
  "key8": "3E2YoC89kNZGcGHc8EJBV8graz3hUsyCWJ4jBq1NZEUvb8uq5N4uZF1bFHszSBi37n5cNZPQNzAjCJ4SGcHuRzYJ",
  "key9": "5PHNFgKyRPoHmMzkzLVVw3ZdouvXXrAEHR9mrCx3rfLDJ9VEwjREHgtnurPdEQWeutsvzSFLAJf8bmvL2KgawX9Q",
  "key10": "tjJ1YWUF1r3eh5E33Fq7z5GJw8HCvo8Ju2i3NExDnb3KkpDBgowtHMeAkT4wgGzDtvjP8DsiqFhE98HfHZZhsCi",
  "key11": "2vEF2MgEfZjTd4rkYmEX77iysrmVSyzgafBbXrhDZ751ozZrM6LDwixUG62791KDXD33hARki6hiVkQDLpNPdH5D",
  "key12": "4ndmrQnxEghJJnJMmbfNDXZMQ4j71kwEiRhGaCUH3T3WvL2BrwsQ9eFNn6PGDLtk318XMcTJE5m9DxnUzMAE7wWR",
  "key13": "3u1pqAq43RFvyS72pnhA31Wz3iQxnUq4biFkjDVXruWeWP5DArWyPCemW5iBVsh9WtsigbUPiBjELJU6TRPbVyke",
  "key14": "3ijHddarzvZaYE7zAv4hgATcsps9m3UNN7nmmCo9KnBFPK8C1AtAuNY84ny4ig98B9JHFovmDv31ncbXZkQyych1",
  "key15": "2LEuDpS43xx56rfDFcxLNKKpajH7BQCVsCi7AWk7A4oAiqsqB3tVpSAV73fQLdNYHX7iNDKxJjN3Z5S9R61Uy9m3",
  "key16": "3MH77NbMHGUmsc2h98LwSc1SkYifHPyqTmwVCpcc2gWkjMqnx6opYtDFmdQAAXZs9cusFXevH2MJg3hginz1G4QF",
  "key17": "5jUienBjt3Xb8osCUn4ktFoEdTixU7Nbvq9esHqx2Seiarde9wp2DVdak5ztui1aJ7FX97J4PQ6a7tUy6mWoHdbR",
  "key18": "3DpvvuumhH3rrPe1D1UerVa9SYfd5weYHpqN72RxVWqU7u9JbmxtZAPbCwZHjQKqdta9FSNjKrySwMbEVpvtE8oC",
  "key19": "2RfsoZpeJDqKSxrozTecZRLzBM6oXvzqqvj9SFmZ59gSK92G4SQjwDdSdtbsasPpX95jTs3mjgdUbeGBahf5mrZC",
  "key20": "L8krAGxcCrfAsNbEiyFtaFCx7Gdmnf1CTB2XDs2tL4kLmwTcRt753bFEqPSEagRaW2e28dw2DPHrf1sjB9Wq3NX",
  "key21": "2rvu21WGtBDrE9F2KToVHAzJ1m32Hx31Z5BjqPxKEcYWPhjCm8jFk9Y4upeU3p4cWmga9K4XhgijwbcS6qctQvBi",
  "key22": "3sFMfEvbe87DW1eJJWrVF4d9m67B4JpSKhfPeLwmBMY6nCvivhUwDHuCoChhfvWD3iXVQW6ccizyTahkvetm73Hm",
  "key23": "5NGCMSoWtTFzA6eZLr7zCDoAm3UqsDGAnJV7qwbRfE11xRcP4nB2HiZ4TB8NHk5J7jf9CTdTbDonQ42biaFCtWzY",
  "key24": "4RgGn9o6ieUhheXX6hi1mmdjx7KMeRS3zkA6kfApTSjnR6DnxRfw5nXPYiBB2vLaqUp8ULWHMLXH1tRrPQcNY74c",
  "key25": "2QZnAaWWRrTgtmTcBDw2zQ7ThGKK54G3sSMNB1HMWoj9xxzSxJmsk99whhaE3o6nUAvHxdGhGi9E9hs4Qz4Sp9ym",
  "key26": "496GfjC23P7HF8FMragiEiDh7CoCFgYgB7Q9wJxJSFwgJnhUYMAEMX9UQMHQXBEZdSJcpbavjjjSmwDQkNZbdsAu",
  "key27": "4DjuJtYbfohmr1h3jQ7FgASs1XVgn8bkSKzHVXuQgij3zD4Z2tCvWdwqJhXrPaVbk54aLmPytYAVALSB36wTLEmZ",
  "key28": "2Bs51kXEF9krNDtRzJQ8tuikEEd7gK7jvWtU3fSXw5UrvqJm7EYQxnCxrJDDQZteYFUyVjkQK4Xq4rf3KorkxxiT",
  "key29": "3XJS3bj8ctULvfhCBNm2rdedWvM8dWdEkdpZt616TXYyMVG741sXBvsnCUMCbNjjJSzCsVGBsiAqsoZ2zWcBb3Qw",
  "key30": "CbyMzPsN7AzzxxpgFS1jBnSSGBnqPzwrnPcGdDr8fUSkVJdTowkTHsJKDDhLQX4i9GQ77rcA7HZyVp5zCBA8Uav",
  "key31": "3r6P2Z884njpgthC3jb6bZBtCbzPDWaJ15HXa69jxJDCCaAXk2HBntr6WthZo6ccyf85WWaHKgt3bcpBBtpzWYSy",
  "key32": "UWKR5Qj6Zqcy2sduyRr2iCRNGbxT92YVUoRM1pw28jG1NuLsrT2ofR9ooi488z6S4e4vD7BzgYfVpiRM9hn5dC5",
  "key33": "58nV1JPAfv7wwGxH35HbN2X5PDP1AUSfY7v734DzZduGRGJhAknHs1PW89L3NVaG4Y6fnuufEpUe5rr2oz2F2jTa",
  "key34": "2DRGaRYNQxtVzZAaTmam5LHJ5ULUM95G74LLdDdBBkihKK5fCnRaYMmitdffQFe7gFNQtsbzGyEK9ofMVFw9ihCU",
  "key35": "XwWpQGypHYzt434ohEpfXywXk6WjTLNC6mndLa8xRyMsRCgmytNpPgTM2w7HnnVPY8srtptfdNEcVdJ3VWbk7Ws",
  "key36": "2Bj4DgXbN6kGrU1uzcE4tVKessX98ZwkVtM47ryE5KQxgqjmKZjpp6AtzWnoTM5TsK9VQ1cu3q7bgzdJNj5ax4ti",
  "key37": "WZcTXoSKqm8xnQ1DPNBKNE99X8Uz1r4E8Ny2vdo51o63mSByCKFp6SrcdqkiVRyyccbH8oPRW3DS2pejRvzCTe1",
  "key38": "5BcvUbTyZVUfxZpeSMKGpCJun2frkdB86z3dQkdcusuAbE7PPqfshgef1XfkBsJcmizibJeurBqtyqngnBBcjT1e",
  "key39": "46nCxM9PahacxC7A12PJpW8bVa6wMaF19jVU92CcnQ8Jgyu7s523urA43zCqSLv8jUz4WtjdQJYCaRGd2rLeCSFA",
  "key40": "JKs5236WFWpdTaoiy1PmGtKaWWDzU1Ee5K1QjZhdZEM2e3Bcj1CLdFbs6NMzR4EeP1xz8cU1oe4yuk589ECmxox",
  "key41": "25znz2SqaBy2DSGmBQx9zwgD5MUi24LZC4uykU5qarbUsHt59pfE4jEQdiKfr9kk9HcGj2opkxKKcjYzTBYSuBXJ",
  "key42": "23KoH9PcKmyEvs9yZMrEREN8ujsgnowijPNm1mco9iRj4H3ZLzAMeUqBYFzCLfKG537tjikMRLRhTsXwvQnJ4DPr",
  "key43": "4iMwejn3mKDywer56tquKV1HXTh1AGSbtNyQu2VDiUAeRomAUEehFNRAhsG6WCSji992X3cpFTKwwqCViAdhz8PZ",
  "key44": "5tDVEZWq8YePSvbqPEDDpGebqJvTAHCYAG8YuEAytEVS4BdwGaveLwrUBiABJagUhDuTesyfo3cPu6gqxm48KEda",
  "key45": "5DDjDFxnN7SjgtWquCoRTL8dk9vVdbWSggk3Xh996QBXYn7NNJpxAcqpUv8CZ7btFErwme1EQYKHhfC7AWbsLRag",
  "key46": "5PdJwkHSojLMuwndiJjeKEyYhpfmFNBZmnm989EHPcgL8PD9ey2NF8kEC5ANoCKSQSoTpzok3GWS1aEZos284hzA",
  "key47": "4wtmUUxrCgchNVBquxsngopqmjYvzB6gKdy73pyEsibsPBrcUjerwSX4a1HjFJRtwBDsyMVM9WkJ1KF5Yfsb17XN",
  "key48": "5xkiaGJDFeYwD8VLvegaWJFJiCjCyYsRm8ymkNF72MLvCoALgdS7odoz1oNxkZd94qhZwAqww5aN3769r2NJ1TPR",
  "key49": "2XQQS4Wcp2dQADgHwdR4w4suBfdC98k9GFJLdzczWqqvRbVczjYbPfLQpHKfVR7X9Q2eCAjtmzAkXZ8rncHEbUWG"
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
