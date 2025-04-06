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
    "3FJwsj2MC7BJAWBVK8z6W4YpVC1oHgBZAX2e932kazaZadL82BkoCLw1V6wB5nb3bePFJTCZyoJ8pcfpcpSkyVWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sbDfNtPttp4gkDpxxrMy5GRHwMPvVY3ohDQAV3cFMihEruPh7JgZQAnzixwhjRDGd2vZ1KFqqxhBLK7wsgpU93b",
  "key1": "5HvhaA7PUdfM5tQFAqJbBWqFvQrdskdBDfumGucVo54dkCqaTx3X1A2g3yrmgZ3ERtRzTz2kEJCA8LkANAJ4XVmT",
  "key2": "5F4oHupw674UzLS7HEcKU5PtZ7sm8EMwuMs73HL5wYHUfmam2UF7KUGdHhCxtR4a7mZn75SHFVr37K7TKcsUxpUU",
  "key3": "d2zfFN8wXHDuwkGr9vHJEhDSpiLNPqThJd8tgFN1bx5arzQHDFiKGyGPAxPdWscHpiHdXR4hNiaLW5zYpVxiA6h",
  "key4": "36GNpZTNJrV3Fuh6AAUdXy6Xp7sQy9ybqLzujBvxQ3N918BSX1RqfiXkJrYrrv9abrpPTPP1UtQymvqwXB3aZ79U",
  "key5": "3ZvNYe6R14G7is7ukrFk5DCu2Eto71RLmEdMFxjQnLUM2qBi9oC7VadcUig5Ka5KvT7FcEtR8DjxfkjQdc3YsGgV",
  "key6": "4TBTbMdajDESWN9an2t9xSQtGrwpSWixSCHGQkSwUTnthRF3Q3or2crZeyAsFgwX2eWqvSAXAcf4USv7CPzydhNE",
  "key7": "4CqeHoLuqnytacy9pHpXV7x5q5ZAjuHW8UbFGsZ3aZwnTL8ZyaHC9UVqqi58vjRimHUQNYvEquTvnDWVkA9XtRRa",
  "key8": "3NWT5uWXSXAesV5KpkmiCTKFzmj3cVYT8W8m5aao4MQMKtLPC2gWQR6W3dZDAJWSAp4jRPv7S1Pj4dgFNwcTvCZR",
  "key9": "2jezNHvMiaFnp6eDZP7mhw8ybUnwoJ41t95bBUt4RyaChGHbENJUAXDCekk3vgNXU5QDu55GsaqesdKyKnsKQjoC",
  "key10": "23hj5zVuhqKS3h48TpidGyb3RVrhuDn48V4t1Cz4YgTSkeN2BVDL2VT5pBeg17G1ZESbv46hhkhNhNkrNTgJP1ie",
  "key11": "37LmkhouPwaqN6635Kzdd33UzdcNixmRFf2hd9H9pgN3KeLM3utcSWuBsxCjy3RERYM9A6j5jQ84mrHF1iQDNafw",
  "key12": "2j6sMwrTB7shAEJGyrxQdGSm7Cqurb1zDTXYSokRWcppn5ULV4NU7aAuQrVFTo6mU9hq4i1TvLVCS98gVEwBLHHr",
  "key13": "EnuGhW92zw7jyykgXkiJCD25QzW6XiaQisYhaZekuyqrFd8wUUKDRHmPCGmMzcQK9PK26bkhWHV6J5mJmJ3svKc",
  "key14": "bLHrg4qtWgReST5uf1tMxEAvRLd9GXFxp1dwc1ngu7hGWyQeaRu5Kwtd3aYuJ7ZwC9471p4cndEZKi8rUEykETA",
  "key15": "22yNgptinW1HUVVyYQ1irqaKfj8oWjihLCogXKSRazUbug7UNewmDLMpHsjw3j7ZT1Wa8zmykVtfgQYFiExBG37S",
  "key16": "4jMHEk5pjqj5UkoNi6Bw7Q3C2BnPjjobsYDxifCrYdJBq12HZSfnKykQj6MxSaP6gXXZSeC1t8VdAtTNmsYNPRHM",
  "key17": "3HWvzT1qUtb2T3CdWknykVzNrr7YEaars2EpijLt3utzLYTawZ1fZUHyXmY8V2t98AcGFi933aSybNtjzPauvaan",
  "key18": "ieNMiPK3THzyYHdmh2wCeWnuUoUBBAmwonJAWqirzTPjrXhAp3KdSGUuq1pZAo4UPwLBgsunwVfPWWH1fy3jmFw",
  "key19": "58NbfNebC7PtCrPfrnjsCL93tvngg2YEFqCVmDRLhvzQ683SYZ8VnPBpRVhyHHBf56EwCcLnv2ELmi9sqCJ4uAq4",
  "key20": "4m3WKz7e99dsFcUQ5seaEAfQG5MDfFJsk7JSn1mJgwwdpKrnDxy8ADi53Q2qe4Unq1qH6CBRnPE7tqibikEE8FHq",
  "key21": "3KKPsJ4qixdjRwZD6JJbkwoDmiNGe4ZbYrv2zR1fH5XPBfzzHsFdE2audXBfJzPqEhBwcjm4U781AgHFPshKVZmJ",
  "key22": "mwSUuHAeaaA74xCUwXN5H26D8SPxFNsh4TrszXpiADVEWvL8a3mS7gxsmrp6h8WzKgAmSjSjymU8BWhqqBFwiYh",
  "key23": "3wMgYdJUW3xJ8BEH1j6HKrz9dSqANeCKk8sfMQS2kaC7rK22kwo6994wArzXkEaCoeRwAfqpHqFvSwkFM1QNGBMb",
  "key24": "5WtNVCK8KqbVi3Dkua4RtTBQaKRQUpX7Egz2U5JCzzEimyS3wU88x9uCMN71raa6Yz5TaZoTPQV4WgMTXbdquUP1",
  "key25": "2UKHkGiVPfpzrj2FYpGvYwVPMcgRBuDpdSSDuDv6Jo85JcVENJSruEG3aeiyU4qwGRcvFUjMFiqoUXvypSDy8m8V",
  "key26": "2Cvdzja5kPnnGgQbwKvyVTErTbKgknWCLazYDutPQbFgiJwLeMepf1bqmVmLXHxS6TevrAPK3s5WNaSzxxr54YQF",
  "key27": "438UnkJBbfTiRjNCDTzjB1MXnzesXPoKT6kBeKyoWtpZmGnHzpjdAvj3GK5Sdt5iKxQtVrRQWmJF3DcgGb2jwpNC",
  "key28": "DXojjmTqWQUA1W8XwPFNq9Bn5aQu7JrezKngN84yjKSryQF6cdeiTqxTwndbnwGvLT3fQqa6ufhxE2xa6Tfat5z",
  "key29": "4PWC3p75oEgR3LtLc5mCjQg2JwSeT5PiMyUPjszFfE3vBWshfpWGyf3sPNf9vN92GXY2wbLdNXPPFe8zKymCmkkw",
  "key30": "4nPxb4gHHAea8QGmdEjpX35By3qADDJRrgBzKe5yHUZtjutGQoHkGGzxtTn24tq5hP8VuSLgsR97WCzoUwfFe5LA",
  "key31": "5pTb4jZEb6MthPrr2AhtnHQFXoRVTUXTgT1aC8BVxZiVSjhBHEBVGW3bmDhPHtY4i8J2p5EYf3FqNtTZZwp1tiXL",
  "key32": "ofj32AFfwYMrJVhXGDd8mLTvi9kaXsqfKDmw63QXRbNA3F7LY22PoMKi2oSYECvDbHu5dYsUSoCaqukpEfYm7g3",
  "key33": "225qskT7KYgvw2PiHrsfTkPtdrp6npJ8FKow9uMW8eusDj2kfbnaYpxTR8nURboApmy9FPtNbcne9gn75in7iJZZ",
  "key34": "4AAfvuL1VAEgK7hvnHRFFVsc9zmnvDL8cs2PKYVWPRAWDvua3V3riMnvjKNKjD5s5JD8ryUHfruDCBR6EeBF5Zfy",
  "key35": "mRtigZDgdTcDhS4tFTdzGCxMDsGiyehLpqmwfidr1TNhxpaFbCvXAcvewmjriALWtr5XXwkjSrj4oNxHkM9a5aa",
  "key36": "3Z1fgsUc4gLwLMPBxpv51CQKzRKPtVHLpnuHjTqL9fbso5DUMVMGpsJaCufZXUi1cb1f4G6dgLSKKJZC7ju6spbU",
  "key37": "3nLKpJ9d8q5dpe2z23R5V8Q2rzn4bBcreoUjYZsgQz3eDNzS55qA6RFZPJqcqBNtgCjUvoGCiFY4YeSuogM2mnxe",
  "key38": "Sy31euBcZ6SxCydamcTujWBNr7UH7iUVj4kY3F9mXHLtRsB6dRgZSkSpmS3sirL7tCFGREUd5CCyDuH4a1QsViZ",
  "key39": "3j2kBgk5BEirQ2eRZrhXgjz6ma3YsqkFrzW5mJXiqjR1RMheaqKyndTvBrXFQXRsPMx3X896ay5RrnEaCg8h7qXE",
  "key40": "TxLBprkRfFg2R8PixmunFMZTDK8r3RRdQxq1vAvfgrVJiMZvxxkKHgF9kYxjUpkxBrNeUVnjfohW2BxAurDQbZA",
  "key41": "3KWv8TYzhE5EsdMGS2sgFq6VRWfo1UD1Dfq2faoW4n5XAK5Nk2NyS4Pn7EVj8Qr3V4wn83WtwAXcmv9aQivrUT1b",
  "key42": "F7HgmMGCbJZpEyrz3HT31oTeJFdAQ3oYEwgAuP4TKT8h2sRDkoPmKpBwLwgH11tsxoJoiGL1HvCSNGdAgjJ1bqH",
  "key43": "4DPNfW46BUuYd3KkYARzDB9bbWfgtqeC95CaP2pLiGgBNdgZPAqwaBxe8UyVgZw4sayeC3NKbMpKBZzSZmtWq4Zx",
  "key44": "2Tx65C9QwyKdwfaPVwU9BrhqCySgB8hjuPks4ke88tJB84hY2d99bhMQmSUKVep3ozPati8WmaKMVUgDroz4DpPu",
  "key45": "5ycfaeczkVu9hwrjP4tnje1qUnTWA4RENiewNTcZosYw6cPX9KNZ8x81tXvbLyz258w5LicpCpgaaqKmHFg3ktTs"
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
