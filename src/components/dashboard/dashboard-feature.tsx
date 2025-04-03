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
    "6UkutAUcmVusHfdmWAJnZAga68WSu3VbzcmThWAS19ZB7Kzgs5nv8hddszyifmVv2VmVkUaNu6dVMfF6Tu4K8m1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EBLWzcvcPoaB6m7Zc52jJxACA6togiddz9LckG9PRNLQXFPguvrzUP8PxTxGUgkZHX3s1B5y8fTc2CFCL4efozZ",
  "key1": "3MSiuigCk69yjrAkeyFnCRZus86i15A4ytMaKCMjBZVmEqyrKE7dRUhghFNy4YGKNzNfFQZVTvwrKweP5T3W4UeJ",
  "key2": "3FwtHDz6rFsXcjDwarH6kV5QoAPw74ZKKyyRykMx4LKhT7L36RVey8fJ8jMMSj2gS4Hr92Pps3cyhQm3bKWFA9UB",
  "key3": "4wNMvuepuopmgSt2YnjNzz7X5gGC2PTU3UmMqdg6Rxk9ydv9jzZmGbBFoEakej1nUMYi64ZGbvUpLMHpGzpjdsFF",
  "key4": "3usYbMaHiaa5eRyL87SD38dMmB67f39eTJYJD8DEAFz5av7DzwSUZEDeaqdrbjeWen979QoGBXoonSbRaHr1qreh",
  "key5": "3hmP3Zt1B79Bjhwmp6TbCVbpFGh5zg6PUAoxPy2jkVrkj3YpyvPCYhGhWDgtdEeEd2V47fTLFEgPahnFXkXHGRVG",
  "key6": "2wSGFheYVvXHvmsBz3qKAfHVsQG3qr9pCoBa9iTizpgTNMtugBS7AU3cJzeZFbLNetUtpLsapbqm6GKfK7UHzNKv",
  "key7": "56UBdgBpcf59tsdYVqJgJeNvtZwZxW64DXXzEbPnmfGdsc5EMa2Xuq2MWseq6LZu6mAY6DttcZyRsqmVCMv6jbAH",
  "key8": "43k5Db19w5CwvHhH2PDhmX9HevByGbZ6ujG91irtHxAbRmChsW4ZLpgucCR6jgu3XBYqyeVjz6DrupCDJEm1Nhtx",
  "key9": "4QSXpxPVBMiCzPHRV4ijk5CrbZHmzLYuotpy42kw2K3d9FhHmYVuYX99HaLPcyRfzRprF3NF7y2nsD5dGhq7pAz5",
  "key10": "7Yce4WyaCQjHdbJ2tRKeQLhxvDdtytFq32HaFJPJhPk14yPPdkyrQ4Dbp8WNbHbFp6E3BgV53GB3Y9bm8XYUKBR",
  "key11": "55ezpTQ8rk7j8i5JBJKfdNiGawjELNTGD9bsjHKzGmYTSeBBJSXWswWQWpvs9gn2z2wjGCyZn4x5U8fCkpTeuMj1",
  "key12": "5yv5BzfZT2FU6aWpg1982BWvjqPxSHma3iyjDaxdhTajnygJHRucNUVLaGdrLGDqRGRHTqQ98JsRbEAhUbubuSRN",
  "key13": "2NJP58WKXae5eydJj38vo7fn8zsHPgyN93rLu69AyLXEPGG3sh6VWTyTKrUuBx5dPUrsx7iiMFWoKWyJzGAh8qoz",
  "key14": "2UCUVpFf4iAJ4LnVFCZ3C52KutEp13ePcdan5V66AuX3EU259TeTadNdakBZfm2kaT3W196inUGJefXfW3cfCtah",
  "key15": "2RziNQ7QzsChzrGYcrTdeRUw45dc4FPoPjqT7TyJiH6tdcvrvAzyUsgJHPiuvLDGkwFiLznaEGs4yeZWV9Kph2VG",
  "key16": "51pDb5pvTNcGLHTrYQMLqwsM6sitioHYupU77TMYhCzyQSzHXBKzyGzPD12ATf9hsRHtL4MLZk6iFEdGXZ5PU5iZ",
  "key17": "45hFhw7QnCDqqPUziFCES4aZDXGXhN1oQgCLbfmBYUVTAJ7hpQK9RkEekWJF7S8oRk4zNi29G3XA7qYy7scWVhy4",
  "key18": "ksdubLdHont6MRyAwJ286DusC6pDXy46mVcyNn6PQHYyTxM7u2C2QKhmYrHFhpf9A9SUp2m3DwggTUCyzQH8iz2",
  "key19": "cjoEMEGBBw8QRaKxWmfudD8yNKxJFiskSimpWe4jTiBpvB2waUUScykmW9xAWpV235UEAdXxDoKitBsmFLL77Ap",
  "key20": "4CdJbQwVQPX5nP3ByAS1eNHDHFZWt7yT9gwEmV4yrsheyt9HLgVADWUwGyVdYds1F7262Rm6c4crTybAbEQRhspd",
  "key21": "J55PcmfKeFuAzNgEHRTrW9NTdLQcGFtARfekhVywxsrohnjGZQEJ8v9pTCyXuS78uSBiPU7Q6Ck8Nye9oHgNak4",
  "key22": "3988bJnBm5c94mB1mfKvUZg9t68dTT8mNfHGbhFP8pwv5qhfCoYwULvq5daLMueiH1cgW4G2PzyE4HzBuzuQDCY8",
  "key23": "5hUdetoxHSTnJ1ey1STGTwdUm6GGScf21F8MZ5ccXjmsLEr4u1gXiEkiHj3Gi7HyCJ1VEEnr1FB4VZbUawdt47RR",
  "key24": "2YarMpXR5iU99mgNcQ1AVzVvykRNZhtLQRzx3SPzcpygwogeTyjiXgn2fenggsZvAKhuCugy4fVSS3aXj8DRGdRj",
  "key25": "35hCmFpGf1u9rKKqDMNAMwH2SGWJez9k18aXCHu23vc9iNZwJ6k7SUy6J85WRKw5Poxm2nunfDp8EbYqQRU8fv3c",
  "key26": "4WMo5ujfkKaFBSMysVC6HKq64XProooCgWkrnx8az9FJ2tZ1D2ZjYneT5rTz7gaLmuMEz36te1rCxxRnhMsWHV8j",
  "key27": "4ckrhBnweHWaj1hUnEHP3ajA8Wis557NQRKsLUEnb5Lu7JJDTCoCNu2VBNbVvBWUN84u58MnqoXSW6Qkuuhp8gxg",
  "key28": "4J1DwHWbbYMnAC4ZbSKArkTEpXso8C5SwMVNuWgJ5UFug61uR7zwSnNot7j9Rmu8E73NEWKqSQ4B9NPN1MuK4jvg",
  "key29": "2PhFngzmvcJzAgRP9HR7JyscfWn2hwgSfc6dtLFuUyrNAM9RVBXMiF2MSJX9ZibhdNvdqB5QpghVriW8jGAS5C2t",
  "key30": "5KbFB2G6ZgSma2Yp8a2JCLyKHh6rZbpAPCyMUdpdQXhVC6TxC1rz7A812qismi7exGKgGaud1z3xQi6YsMwj72eo",
  "key31": "4UsEhYRDPa7oqX1UFQKjrjif9zKgAQd963pnBSFbog7JwoybVen6SXq9nit2mmCUvFsToEHKZhsmvXKdpLJZG3Fb",
  "key32": "5wGT1jRj1xi1nGiDL1TE6tCcrX8iXLvHVkf8UKBgBvAXCQDVPhEuwh6EnFKveiY8DXUzr1kxXc277prwNzHshdKG",
  "key33": "4pSs3Q3jufeHxUZ8eMqUj6GJDNQpG3rQWJeAFopSZfPDQ5hxCyD9n6ReWAYjUwTegP3qu76PMEoamtNMo55ABF6X",
  "key34": "5aBoRmuiygk9DopN67EqUtnWyg5Gmf15pbYm4LuMXgm8MYJjS3Jc13dagiR2ApoHeiSu42gAspSUZhHWD437WS62",
  "key35": "1CvC3MnkBPMyPXNsjE2GQyRhD5CaX5Uzkow4RcixK7DkJZzkppGcqEtR8wMRpVLXZyvfL1pdNhiaNq6zM5vv8LS",
  "key36": "4nYdg7DFz3hNBxQRfd3KASFzZv7HMvtTpU4hd4HKLrgYYzoHxf6uFXdRzgK73tLgteSWYtU7UKBBaAwLCeQ5qtww",
  "key37": "4iQJ5zvD5vB7CaRYm2ApbionbnVhtPHzqLJ8zVpSqRExNXq7vs283oSHBfL8pQzWuvxbTdaS2aaxZMPtg8pjAPKP",
  "key38": "5fxU4vXkruTR48Xbi7C3Adko5b9Br3CwS5NHxybanE5YtfDH8FgKGPzqanEUE4ihPrwVRosrC6QNFkjHHXzxqbj2"
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
