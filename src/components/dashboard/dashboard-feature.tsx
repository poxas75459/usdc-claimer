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
    "4SHb2CWtR72yMscH2GgkCcRLiy3snbqFmR6KKvGqxxRDTK6iptEX5QBfzfTD3TD2LfYTSgAweZWEA858JK49XktH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uiATJTkJqdXYfCLGMf9Q3qQ1DXzgQkeaU75YXAWvy3RHH4aJaSsMcHx5zTmxoBPsZZyaJN5FHCAHTXX1Ro2q2Jg",
  "key1": "5zQHVvryqS4YBMAUk1MfUL7mNL3YePfz6HgF5qF2XieSDSPPuiPyMLSJpSjCSsp8xj9YU8iRKLnpVBJi9e4fz18f",
  "key2": "2HJCepFph8v4xFmYQfeHdTdWquMVrt2BEucTwoaGw4aH4Y7N6TbfZJVULBfpQH3CY4F16Lj7wKRXnnVL7iurLMBi",
  "key3": "5FMxi5LPM5yWef8AbigmwMkdUA9oZqRfjJDaHfyC7mET46G2VSz2VkWjQhDeoqhDRzDEH4BsSsDkKGbkA4JFuGKY",
  "key4": "2z4hd7dqTSxT9oSeeDuEii2ThJY2UV5bVLnxH6qviRsFgUz1sQJovVHqXFwDrkhMjnWbu5pNV2GEmjawyFiDgaR8",
  "key5": "5MhJL85aPVTm32Qb5GcRFtrVuSDtpps6B2AfBXLtzEHHySxwkhnfXzQp4oCWBpCvgkiTvwfez8s2S5cJSRQittEh",
  "key6": "42giF3vKKujic6GfaCrkij3eQnhK4pUP3ULZ5PKMxHDYYc4vnjFWy5mFH3xtkdTK3Ee4fRKhQtqg1bySRLnipu7U",
  "key7": "4VSQPHqWqsmsT1ZGvvj8RExKajWRQ3QGY9ZUvUfSEZ1qTVRc5rqvDzPNRiNpX4rUoLw9c8pPYiMPoKmUHNp8gVKu",
  "key8": "mj1J6RyiyU9iULmkVti9nwGdXWwmHsbjUUEbpVwTXzCK7xtbdJK1XBdFFx1vNAJqsFDPDhZjv7gRM9TTzYhYRa4",
  "key9": "5fudrYvsWYvBMFRkNyhLdxEBrpZjPHL25vbevs49eTo8a9vLbjvw6qfR9GP2TGaAU2gnmjPdMpqjf6ERoS1kxGRa",
  "key10": "s4iAV2Y1cPW7E6urbaMHPMdxTzzXktcYJtMdek5v27d7z9ruPKaHG3VA9tPc3TN8bWFY13b9D3Ai3aWEcGV7Lq9",
  "key11": "2D8E9yYDpfM5DGy8E1Vq2VqXkmr5dKKA39CMPDPqcporxxp7WSgqQpm8cw7U639vNMPSG6dCGveBkFR4pEUqLWcM",
  "key12": "EANYXqRokRrZpZG2GBKDZYXXyqCiVtFYodGCJCGdBPUgFVyLWwDiEuo41mmQ7ynajetu3v15yYRDxPcvsubuqxa",
  "key13": "3hk377pRLS8b9Hm4fdKpGhthMKdN87AWL6kzU9wSEK31Tfu1wdMEzRbAZ6QkmCJGu3Ni2JRKvHTnYvXkCQCLLNis",
  "key14": "4txLtqaed373WDM7poWdLcvZUBapgoyeB6mXZdYQwV3UyeopEf2eNt8H9HQr96D1j5AjzHR1sH1eac1ru7Ywm1KK",
  "key15": "5AhpB5ga4FV59MVyaq4Y6oekja6jtZQZAW9EUzmXnUguTgUduxWHmKEVYRQzecQuTPTqCof59QwLeXCLK96zQfHa",
  "key16": "47tYs8suHhZ7bqhJXq9F6H5QgsNrKvYnYgVgizLxuiCHSos5ak1jugiju1KLPKfdTAj15Q7fN4sgDTLHqCvs1dFL",
  "key17": "3NbH1cKT5Wf7kgq8Leq6g2yLumH9CysfVmrB6aEyedwmtVRqU5ibJdGJLRpZzi4CGsCKDjUmNRkMQZrRaGxx2Qwi",
  "key18": "23WqEsKQhQsRfoYuCMFw2nySv2ZHsUeY3dk3gUDpTXFJWaN6aJuuP8wqcMicEynCHivZ8xsh5xzR8EMDqmmLjb58",
  "key19": "2z6m7emsAEHjYwBaRcQFvZ4EU7dLMBC2j7apEg7JSxbce6y4juSHZwuqqbVkvRXinAoG748HLcbVGsZB6aLaN8fo",
  "key20": "2iveptQBm63p5RMNj5DiAb7kuHwzenDDcvqNj2uaYQosA7rREtSPmqxNSaYd5CC61Rt32yUUDDuBebp6CpC7GYrQ",
  "key21": "5Lg6XcRWkWnyd4TFomNgcC4amLmPBih2qVQvrpaWLbKLqmVWAxUfL2zdb2jkokYtq7Sng962eABxtYoTcEviYgQ4",
  "key22": "65d3X2chUGjFnAVJC4Myyica18CF6UgGyeqqCQzr5GFFCXNABYuGpAA57h75mLy7VDahnn3LXeYSULczHXgg2WSa",
  "key23": "2uWsjbmrsZWBj2UCaJwB3xD7hEQNqUzvyLvHdULwwk6vzCe9fDmvT5xbtVEF9vE2bFTGHAHEeTbqJPc5hMFJV5K4",
  "key24": "4RAdaWhvXEtiT5WsdHGf3k5VbGZ4oVvBtmgdP72E1Yof9PnEhfwuFmdTPFXzPTmJTiqUtMEf7tZf62cWHkiaLVfM",
  "key25": "24Xi3Uv78EVxMPypsEoMae88r9gnFCGwPPDHtDB1tKeYPf4E2eiPihPeF1rjzBkXyEWU9Czy1yXB56Jdd2HDBvic",
  "key26": "5u1PkkMT7ib68hy3XLmcQaHZa6Ns4akZqwgU1kFSeo5io5gpL67TXN8JT2bD88V2mYqys2RCYtLMpbNwaqZ9on82",
  "key27": "2grSCeQhyZebgDnVRhKmzgB24z5Ms3XH8CK9UXz1QR7hUQUoEaEdbESY7DRRWY3D2CFyWhinNv7rEvnv41vzyR7f",
  "key28": "2zXMJDJg7vhuLy3nWwd1aP6Smz44FaeNeR9MFiQC61Qf7qrb7Fw21yU4pSE28wMJwtm8YdBKsizB8veXdcRj4NkF",
  "key29": "652AuDQAQgkm85UQRzxavZ6otkpAm2o5cBvHb1GmtzZZrtXR1bJ1yKAy5aGfzGaYTQQqdqRcCpMch2EpX8SrfJrq",
  "key30": "3gYzpAM3ABSsRyGF7Gb2VpDtJ3tMQoRWJxnmyQtz1mELW7YovHvx3BzB5NNRPWthT9LkKqWSq8PPzRrFRKS9UiKT",
  "key31": "2Ur7whpgaN9tWLGC3dpcSPBWczJg6aJDNNsWFCuwDG6nH31qkuaiXzyeWyCi3HVdDHJMTAEYVyHtih6rhJ2LGbCK",
  "key32": "5cWHrJ8KQrKEi58Lhby7ic8cnBK2UQjSugycreb3KdV4D4f9A458jU3mQU3TADJxsVn4HH1JGVo8qjwWz86DmzsS",
  "key33": "31K4h2ofuDWteyuFmjVkzftupC4iTdTgty2PDPAVU54rgVncYB3DvS6aqh58Ga9CS3J4SoDbgXiwswNKtV8DvUEx",
  "key34": "26PGqc7eV7gdz4uuz8bSZwPGyfXZfTJo2BN5vcaycci8UFjw6iWcYWpMc4VpQfXnguwZ3ebUeZmrZmGMgU58Z4fn",
  "key35": "4mRssA848t28A9k7cpWH3pNiyt2xLpYgyt9P2k1A22FUF84ak5mpmZUtQt2H4RNkdqEvxqeRmYdRtkjkPkuAnmoJ",
  "key36": "5FQgVrDf5isgUqxnpK9LjoLtf4nkAsYhwCWbGpvLKqBJ7VEREajBgKbc2Pdc9d41nVgFGtkjg58Z1haNMJG9J7pE",
  "key37": "5s5nJn1ZQjQ8ehft2aB95gfZURUhJ2ZnzWYXZwgTkCZEr86njLpCCynxHUY8jRgVTaRN8LY2NVuLiWEafuues4j7",
  "key38": "2bPbAztebUxfiuDGX7NbiE3f1pEc9i7wz4cUoxuPVjVkEMvhU7H6mvv1zzgTapGkJijHZi6jNvuqitsfQ2Gt98Hg",
  "key39": "9Y7dx2kZZ89phTcZysCsxKsyfKMJ85rE3GBh61nrKCsdxSxjQvwMr5A2wNPJu8CoV1TShX9nRSw9fJ37KW5hAeg",
  "key40": "KTP558z8fYnjV92axHTAjHNE17otHByKFfa8SLzQyDAhHifSCS6Kob7wyPY9wXgyizctowEbkr5bbJisFzGA9Sv",
  "key41": "43Qjt18DJ4oure2MxgTbny7H737C6BKLge473i5wsZvHpCty2ZkWSckVvhvnsxW6NC5S85owQijE75fQ6PhT398t",
  "key42": "5UL3WXXas5eSQEtgHr9zUNTRfLtHq6RXP9HLLdgqDf2rPf5YpRye8EZUpfgQ3ZWd5ozeSdomBhQFd3u8KmPJe3a7",
  "key43": "MCCFfDKZgEii65wStNXJgZzxiyd3huVVKJxTqcM7nVAfKWXWSvd5rPMSiU9fvEqYFeVfxJezeoKgUu1bkCKJ7pQ",
  "key44": "3FgXfdyUdU6hPtsDs3ek1UUCMynenqvK6DrFcVRJBryWzRikv4pgLSmkDpQWymevsRezxro7o8Tx9Nhi123KGANu",
  "key45": "2rsrF7Zqnsea9KjYY4CS3J5c2grVg2XjirKh2v1Q2dVmWvX4Xb9rthxxrcF9mPNdNpr5UVazHQbf8EnpoTMSDhsW",
  "key46": "65J1aiB7tX7DhZ7qgfmszKdhoyofM4zdev75CApqXg1CdknzZx8dGm53w672PbGrdtf3cPPrN2iHUv3LL4c2x4Jc",
  "key47": "4Tszx96dgf3uH2jS3mnnKteo7rmNUQms7NChCVaCDTcsxDp6dv1NPdj2FzwTjw2kT7c5NEcDd18WV2GKJGsGodPf",
  "key48": "2MuEb4UKgQkg1GCXyCXXqyMG7eyjfKJMuX1SaR3DJfXvarfkjod9Y8m2pev3aMZWkdhKUmnywH1rYqTgzKc6TAaX",
  "key49": "2EjQsjMRVvkRs9UvobjK9kUwbdsr3Ls1v6v1gadve8Ji4phe51oGZv4pahqEUg2h8kkAznYBxsyPri8PnZrVC7Zv"
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
