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
    "4vvbzrNEtnEM1vAFXsZNnC5vvs6KBeCx1STJYcM5X7gBxFHq8havfkrbJ8epdhmyJZBnikcGiqPCvM9vWBdVHunv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GDm2Yxq5xvtcBU1jFDhjvyUF76AYwy8S9jGrrHQ9PfgoyNpXWkxXedrpXUxBGqctDCwdF6cvUTmog8X1CUtGYXq",
  "key1": "5Rp7V41FQvK5uz3a2zHGQENscCKXXrSVV3GGpMnGugNymR2pTKjgqXJZU5H9WyWZDmAcVuFmzWvmcMgNdrzkyi6h",
  "key2": "64PXe698UAz2UD77s4fuSAXJWEj3HxpfnCyv9hahoLCTiJ3db1Sb2eTnGDm61sp9aWTw4nU5FEn6ERsYXHvu4CDn",
  "key3": "41tT4VnCmkSnEvsMnQpVTjcACwNgzwaDgo5Ksr3iLm9ftSj2MGQKpGw2hHnJXARS1LHQUzS7BVoXBPnDUPCGv5gh",
  "key4": "5uoAKoukC92cdTRazTcqUnDN4jAEWNyswezYnuoXpZmypPXik3SBdZahjiFS4ZYGJzMjrcDuA996rXnBE3EYwjZE",
  "key5": "4xh6SVJafxb1AT2FRhcUezyqxJc67NuxtRxrgxNNftebqGY6NUm7NJhUaixSSn1QNeTPVqiEje9CKbfnG9g8mb4w",
  "key6": "2Q7ef4SKsTi9hVGQ3Rce6tCY6B3FkH9UqcBAz3BeVjRUemzmdrW6MFwCNLXrYw6M57v5vJCC5kkkeKH3rCnhz6cJ",
  "key7": "494TsEx8LAW1XtaJgmgzJd98xPCyEZqX16ejtBkG5wj4iCcPE9ckRKigdEjjZeCfbU8TZ8jkY5nQ6y183kEYjaV4",
  "key8": "foxBU1eTavdzPCooWSFGsPDPgAEtF6bF6bc2P8ejo23KZuSPvKxX6Jw98injyoWz38qrJW38MQLLNtcDtxaaQAT",
  "key9": "4p9yX3uYrvCdJUjUEX8v4wgz1wmcYXEPskbsD6rZxCMSd8qpygL6jPqYngbKn5ac1pdeSiKy9WxaPh9iha3WurHu",
  "key10": "4t8rB794WWGXoJZ55mhFLcj4emUdR3C2YJJmdapAM1jF7iaEfGQWxX3PngwE59jZiJkse8QUxGk6HyRGeQr8Qz71",
  "key11": "3WFdPEy8e36RxwTmQWCc8Ko4kXYKmdwn1mDqJdYRzHbh4ReqJLK3MMX8GCaZwDMGfJUrhp2Gz4Y8Ps41czpZsbm4",
  "key12": "3XzGDTGdGagfiu33HG8ckFqwsjX2v7ED2VmfnNPc4opYxWfdT14H44Ut6ADVSb68sbSBKnorhm3SNZiJgJseYUqX",
  "key13": "2tJA84Ri2Bv9bbUWmBv6YDTBMenEd5atpFAiRh5P2TaWnVWH3Ncrj3nzARZMt9NhYd5jPAdaBqzrji33wpUya3V6",
  "key14": "UUd9oxajKVFwKaFMXDwKaUShzEAD5RxDXqpTMufmvMrz8bgK4zqVdsQCnuEkStvJCoTGKah4xgvNxxpKqkdnmmG",
  "key15": "3A19kcfDDUqYtqRCkuEzQdcW2S3zvRYLKLdfJLeK4bHcoaNCMtnSYmFJytkAVdihUPNq1jejPxtFBq9nkuxrVDgc",
  "key16": "tmQcWxWfacw4oAimbMyc5boQTZXjZXJAjvydtPbgSZAXFvfENqKx55NiWqJPPuo7pmhaKjCTwUY4GkNiyHGci2w",
  "key17": "4oimjowwvriifexLMEoK4EdF7ckTaiDxvwVDgmUnNxJyLebwbjQ1b9ZQZ55huxT8gEAzEWrEFjBpW5WDP1mP3xR8",
  "key18": "2QKXZyrqRP67TuywPVCp8avNXTmt99kboYSQBkRDxXutFWb7V3hQzWQLo3GaczkVAp2KfvUiqiJ8ZvU1P3Xti8co",
  "key19": "5q9cdk3HSVUe6BiRmtMw1jSLot4gCUCHyTDJj5ahs2k7GLpoYg9a9rUijsu489ikcnNQQ1e9hFA5RFBhdvfUzWce",
  "key20": "3x9pGCHpmBKiHF6fQQgoVMWeDbbEdUjqLAdRPtERBonk9Bck5EdFibUCYiRzL1VrCCUoAJKxv54Mpoi7phRyNhKK",
  "key21": "2HW3QJ1kLRiy2zjH5nLgDjLFfSjp9QXSp759zzkk3qqZk7NpV5Knoa3WMXDvKr7EVnm9THtdhNaQBm5WTUcmxUU2",
  "key22": "5wSUiRYRwQynvM55B8k34y31TEv3XsDht6FiuMa1ApNbNPKLKZTVmhitbGPmhDGTUv5gwypuvLSnyWWc1NYXYPn5",
  "key23": "fWKecekjc1bQ16kvtuJvJZdZJYXqHkhcFdfsDeDw3oAroXxEEmeTL2ZP14P2KWjAaRKMTJypMLbVHfNH9rxApDW",
  "key24": "vUSRyAmxXihgm7VXdmhgJ3YNzmtNraUiR49HX2gxngHSfrkJFpWVQcazfiP3tbQCsaCkjFybYTX2ync3urjoVUG",
  "key25": "31yZkd7gonB4d6GRBjZoMvwoBJaZ1hhxaa4gJCVYwCZQagaKo8CT12NUWssuS3uMrrB6uAqhZQiPMJQso73kFZtv",
  "key26": "2M3qwhqAwDdHK9Ekcu6Kwv3R6H4UnBVLuJri7JtsmT4gHWdHPaDBqJ6i6F6b5Mi2yCPsJfEpZiN6e1tbc1kh5mB3",
  "key27": "4FRMMZ7wexy7SWyqRGc6Gyb5YRdWyvy18ERq9vdvBSV7z79Q5BeXPkbLunSTt5teAZ6XfDy6kFEsNkEDjPUbJnpJ",
  "key28": "hsuhPKKkqvL1Yvs6qqsgMTh7uWdzURDfvNrnRfUpsaVH5TtSEDUapweekCDUyrG7UPyGqc5nW9MjpysrqrH4SfU",
  "key29": "fh32EPrSENCjFQD7e4DG53UX1n48uSLe8JXpeuyvwL4LJrW7i1fPNx2QY8sHhQtF2V9NLetgqxeqFeJ2WvsWrrv",
  "key30": "3Tc9jyzNuZ4biGdfmC6tL7BEuhJopPfQJsNGFTfckPrVpk2snS4K3E6ZJrDcb4ZkMjTsn7BKFjQL1ngzSpuDzCnB",
  "key31": "M9pbrTFgZu6BJDctA4v44hZ3E97j8T7NiD9iEkW1Q9ogGigMf6wWAkzpxGoGRF1d5BHLNsKsBP1NoPSQUnZRUAy",
  "key32": "4JuRakpAKCgfn9cSARwjhufBuR3DrrbCg3NRi3m8p83QHpDWpjLHJ6sX6oVVVMjbenwwsvohwh1VtDpuFxncWXJo",
  "key33": "4NeFFQhu5wpBdT6Gk9et6DKJKjA7SJca4Vy9PVzffQkmoSasxPB1aixiKxn8ndG1GQ1tTDRnKxWCr4bgwzyrPqJ4",
  "key34": "5ZqUJmqWQQd1qC4NaAtUYTDiy5ZYm3NWjhJLB7a5NCyudjBvhZnvaBn2Y2vWjwEtoikvnmPzX79CHNVNA9h8DeDr",
  "key35": "ayRXVXr3cgFvd67BPcL4pzv5Xq2nEQ3htKurSohWjiMnQC5heXtu4Ag3Vt3biRVDS6WPLkR1z4uSP4NbsF1nfQr",
  "key36": "2FtgERXCuTVaRCoaXbbLJdN1NqaNFKz455dMPZMhHMx6BCyZkP6tQVUGwZTXR9FJS5anytRacAUYqKmyY8zsxL2x",
  "key37": "3R5oxBgwUWJ4fLn2J8VGmGGaEn2SQz6yYQQUdXFGPnvFkbdvdghhm78vZdeCAkeoN1PuuaCkDZxHskapu8QHhwCT",
  "key38": "2KjFhP6MBVWGSgGrK6vho3DmcdGGXJEF1oHVDdwaZAkuhipvtPLQa3ijVvGx7aa5h2Hk7QZJY1hiC3A7n4cTaY8H",
  "key39": "28TJT4Tt2cv2TVxFrTzcFMc5SRGmwqut18jaNqqrRHhuNPfhJSzyKkcWS3UY6vojurxYTp5dmBDAEWxs3556WVxc",
  "key40": "5PqYbV5iUmora2yu92yfXjXYoW3ejjmY7S3uTKU6KWCFeLsYKZECpYTikpatDmLJyBk3Bpzf5oqxNHB2Z4n7DjVB",
  "key41": "5ARtvRDseD3eV2ha2nEkH8JQJJ4k9WcKTTkP3PfVatSDDDki6UoHDjiAfKTeHa3j38Ddw8M5is3HtPQxzHLwStQY",
  "key42": "3iakEWr74BWTJRmPNGJSmvtKXbennKf5g99rnzmKKGcjNYFjq3xVe2RQ6K6ijqNWkAdK5Mn2gQLVUBR3cprRpaqW",
  "key43": "4Ewq1GpBnbvKJT1yJPnTufjANiweqHELU4jH8DvyKwURneYj1xfZpzF4FrdZLJtCg75rkXDZJoxxp4ZBkMH49n5E",
  "key44": "4Co6TQyLFgmBr7ChvXKbgJVn14MMWhLqqkCBbzm7dfpMKJtZQiDMhk6BEGpmCq7wjWyb7pMiKsMJoEPt1iDKmwFi"
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
