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
    "2whAT42gjU29GEm9usc29sJBKgFPv4FmLnbZp8mkgiwSjzdDNxBZv7u8KcUe1kij56YZxMPy23VVPJ4BvzCPZPe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ad1ajm3HnnV29zs6NhcFuNTdfwLuoFGZX4cEJvm9g2rDfga4EiEqnr5LimLtqLjszm87AfiyMrjvhCyFN8Vhk6T",
  "key1": "4UZEZeDcPde9aJfcqxRMzySuMvjpj8GV7fhWFEskiAYTe1CMken8SieMPdCpEz67kZr6V3oaxV3LNtibBdQQRL4V",
  "key2": "4nykiWYCZ8z4ECd5qcmUjASTamfVhzcd6nZ935FTpmF5WVTuqdTaGmkWaRyGihLwcX8zrYnX7XydKpU9Uv3quoJX",
  "key3": "4mTCrrZSbgcQnfKx434WjffHZDMjpECLKoGDtfe3SFBqZ1KubcUa7F7PnrsRfL4TqEjiq1bzZzurpp18TNns2ZPB",
  "key4": "2pXjjigK8GsjPgVGzqHgv7ELgn3JxMDoqCoEFz1sktw9xik65aToJ1ikynSWLfbVnbDU5ffsSXkJwB3VXNL3A94A",
  "key5": "LsuRDnxic7Y73uCVfwMjDukyBWWaEG1g3c5we3naXSWQ2wpWNuaX3BoJbhmceULX97GefZNxFC3zBSkNfPhVUJi",
  "key6": "2PiZWeJdEwWZuFfqY9N1MW9imdNNjSHwUPMwXFT3voetdVZZx6koH2A3FocamZ3T1YUwTa1xFTU3Gx1aMPxNeu4b",
  "key7": "4nCxkMSt8wRfG1zaz18hXSFJqhKy2xwDnTPMKihqyMQ6m9SLKTxzh9N44BWFs6N8y8QDo684KPaWoKDdwTMG4423",
  "key8": "4WzWUH8wBKFVLtBgSAy7tPcVet7MFDSvovDhzAUTjNBToKYqUKFFx8n15LFLACGp16vWWCSN7pc85QRak6UDZcmW",
  "key9": "Uv2xZJ9XTLyHSEMwypX2XsUqyzySDGGtMMqK1etSNoHjrnbUV1BMfrfDyf7UDXicpCGjqjMB5sFbvchg991nH4q",
  "key10": "2gWDxAYwo6x6anP7iuK8T3GW6w5wBbGAgp2Xbh55B8eBAazN5txDHyi2ugd2Zn2yb1y5HbzoVxkvbaJkqiNH8KcY",
  "key11": "2rYXG1RXwnW1KkyeuQhdirwH8mrKyhGNRFSMAEZAnr7JpJLBaMbpYirqjEo4N7x7pEtjeGyf8Pemd7HLjNS67MqF",
  "key12": "2pkpJRKLbs8Sjvh5p19f7FM6rHiqCGXUUexsEoEzDSQUtZS5rbNvJWYCs57dgvJ9Gw2s6JzUA1ECAmE1MNVYfBLS",
  "key13": "2NLxrSzZLpAotBTnDBifmxUygtxGhoDpWkj8QhH1cCTLWNLZv1DoZwj8XaNzc19HjacvEqD2t2q8qkZA1oCKsZ8o",
  "key14": "4jAsyMhpsaZ8SfeckeS3mBqkxmPDuU6B9j5vCdKTEpqgmiyA1Mb4gcHnyLJ4bg6MM6psTbhFrBys6WLoh8Q5pS98",
  "key15": "E7G4xTTHXqS4nStCuWE7CrPsZfuSJKCv54EE3USDuSwTJiWnjEGUUPV8wd25izA5RZjJxy5uVDYtf4AyaWXx1w4",
  "key16": "3MVMpnRqBk6whyC4K6UqtxXekWCQgLG4zjy6xsSPbcDf22gQdtfwa37hyUiyU8D6j55bHcaSu3MJoGAS6d8mhiBC",
  "key17": "2k5cTh8CstEFmSAxDuoqViSnYVZHJLG4dqtkdmA6E7pS4YKaGbaLyG8cmuZodeVH3B4HoRHxWhBzCeqHwnWdmNBH",
  "key18": "feZSTnyX6kQ7HF67X99drjhXFiMkUAnu5xbJjLRDhvqwEgEEKLJXUpaMU653aJVbtLakPTJgZWqCpqXQa8YZR1q",
  "key19": "2BDzdDvvHjqPNoaqhqBGpvaeZoXZ1dUjif3pk4Uonw2CNLcMmosHND58QWaKJUieen2Rj1cuioQasSE7Zt7U9G38",
  "key20": "23yCH7s4KAHFTnDhSbpvJFmDViWqibWcM9SFffDCXUuissjPLbLJbSfmmWg1pJ2BLAxps1vC2AM6zAkmTVxCWPFc",
  "key21": "2m1DLFRJc41enkh98XmiRgDSUNMhnu8GgcozbYFKWVtEzLxnBKAFXB78CLM7bwN99dfLQYy7G3jx1wsJo2Rpb1Nb",
  "key22": "3QpmoqyVEcLEdmBVCWnESYqZ2SwBSWAexUXgfzsunVz9ymaMCF2HagCSTu1N9s5gN1ra6HMNTZKXsZM3w969HrAH",
  "key23": "5De2MEv8BgZn29Kc2ZD7Gne9K9whZP6bF32EUWKiuxebQRYCotofgLDtN2vndfn5jDrWKGuUG7qYabMfvCgqYFXB",
  "key24": "7xwxcoEEest6zrN3p4EDAniHMpjvr81Eevp6eu8NzYY1KFgBnuFNAjxHvaDnxrFRFNaNBrELKP4RLobMX5wc9UL",
  "key25": "3JJFyuaxfi1SEFHHZBUZL3f7m3nQFQQjaqGNTZ2cgBhWaA6FpMoEQwB8SBVLUZ1nbW7uKwLjn16kDVaor2hYS83g",
  "key26": "1xBdKajExYzVCEDmRWFWoUqSz445kGU4HYj2JejWeBuphg6fVDm6cT5njaK6paigZiB61NGLeLHDwhZrxQAC6zZ",
  "key27": "4Mtuxwn7AnSB2rYri526rQFZkJ4ePZ8yuezu1UX26dMVn5AHa793dGqEuMZ2MJUh9PV8fLpB7pfjtppFoNAzSkHE",
  "key28": "hqzhDcL6fZPifh2Wx9wh2arYbqH4XdL69NgBsXmgtVpNygiHFfkDpk18Jyy4K55CdCN6JQ7BrkLFMb5kp7tRQX5",
  "key29": "4vmoeKTngLExS4Y8WDhamHvSaZvVVrU2ztMTcimQNwCbnfoyiV77gYiCsiaChZGbToKq7zdjMVYZmMJiqMToL3Gm",
  "key30": "5Yax7Ps63A3aG2p1H9C4AJpFxVDF4JJ7otkkj9VEjYfdJnstsT2RVKK9PH7gcNynZMNcCMi5baAN7xMsMWDyv6Wp",
  "key31": "5eHBbMvfqYPZuqVi3nZYAD6V8bkgWYboqQrq1ZaWKfBFocJLH4jM6YJixCXEgGT3DPugbEdMY3reWAt3gMYy67zt",
  "key32": "4dktivpHQmrVubNkdJ4jeoytHPTbUK7pxP3YMb2TLGtZkWsB5i773wBiKFZLAFU4sGwEFc3HzXL7m2ZGsBtNKuY9",
  "key33": "65oBS9fzrpdxuyKkz3kZnJQkBcXY1mddyaotwNGgVd41BknqTH7dSi6C95rgVoV8aHvCaZaFe65WT88uoBVGpuPt",
  "key34": "39mkmpMC25wjWSTikbmFDuEQwfKc4Ku7yJLntifxm9syfedTG8rzmX4Mj21jBd5QLB1s8SZQgrKrEDurD9exmfCz",
  "key35": "3fEv9M4VPArDDsXZunTHp7Co4s5oY1Ym2M4Q6g19PWwY25HBHSjAXtAnPbaCg7cMD9nLGvU7zguJBtEqbg73GaT1",
  "key36": "2Q56RBdZGWrxcZM6aRjVicGmFqZQW6BJrL2s3dGsxvyoyZERK2yKa8giKF6RJfEwYjMzNSJx2hyyoCTLUmm7gwNV",
  "key37": "3svfFGZCcbrTRhpdw6RmteZ1R47bHT1qW6v1r9q2oMGQtpG5sofseSkHmSU5RHnty4Fg9XSX56eTPyi7Noo6BcEL",
  "key38": "3iNJzcCHF8zJBsbo2msQP3T4bpTkuPU1xGXES7j2jdNXUqTpTz1qWqpCanq5H3uSQUZE8fAeAfTgQQ7A8Mag8DBt",
  "key39": "2qkW8SjiSEVi72gaPnXkYLSgPiP2rewnuxSK2cG2mhdLdF6FvskSW6dhd2KzXsatnVCp25kWKGfi5Ge7qJAHCsyt",
  "key40": "56wpC6GQsuQEFJUJaYsGudSPFDvrcsRTC6W9vdZSMJKN683dniRiryzUyzSYpBeqtxSuEK1beuaaP9GtWE321sm8",
  "key41": "5Kmp2hgBTxNoFCxB3XBPWPbyTQ9qxMSMCHB8ajntLim7yHMLvHf8sypuFfQ9BuRE1kbqfLXuJZiBfp5fAigXcmbm",
  "key42": "5BcRWNu1aaDLemt2oUDvPm1VUe4QBE3wiPR3tD14S3q7yTX7rCiVarESkahtVN18JZxiUKmY8TwMCQDzDELVxR6X",
  "key43": "eZMvaPRyhXmSVwzKy4gnAghiSyrg24M5tVU55CvWgoQeYxctk1uvzA3n1m1dv1YjsJvnbbJabRicWs9AvDmrR43",
  "key44": "3EVY95GhocT7KB1rA1Sb9GsUJX1oEt3rHnJV1cgjryRzkmhzGzkVJZH25v8gnsmbhi1mjJ7FCrNckTiQNoA77PwM",
  "key45": "3HaRR38WkyBvYWM11i7WPb4aHWzx6MxxoK7qAugVSqZo6zsB8roDf8eVkrAsnxsV6Gubcy4tgP1nm2V8Srf9ersK",
  "key46": "5mNFYYmC9nSNaZeF79Qxq8zuLVJWvcFjKA9bdFTBc5u9oU2MdPZySHwGJYv4NVXbxwarRKpDx3bi5tfcNrN7EYfU",
  "key47": "2qLmxdgBWra9dS4PW2CkSSZ1YPGFpGxoa8Dvd97fJoVN9r5cDzejALX3PBfJp47KSKyLQeEePaBQ2eHrxR4N4mxG",
  "key48": "5w1VkmE1zEW7Ew8EZbyf9C93CAz3mGJ2yBQvgf2axfEXarb2jG4yT9ANx5y11EZNutZjXL5UYwXx9GeuVyau3G3t"
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
