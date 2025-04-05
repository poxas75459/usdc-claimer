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
    "vo2cauj7fWRPpWieWQp5e5XWxHaapSWtefai6KwKS5NXmfgPGRTnos6vvbaWE4uiDsX1J35D5KZnzsEKdoRYkrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YNYXYJPQtoiErh2BWXiXWz3vGhcc71BDrxNx8ARTEW6cDhjSDe7LqbJfCRzDMS7k4Lbx7Am2Us8Rj4BJ1DxanGJ",
  "key1": "4GVuepMyqENQEFsHSNEkXxDeRy5ikihZhdqcqrqt1AoNttMLiryaf1tRXo6Z5gcvDcZrRW6MfoPrDaVCchnLpKBy",
  "key2": "dBAGVsmJbffj4H8x1Eqt6SfkyNCco5kL5K51kcd1SmQ88NwLca9ZcGvsHQanVvTghbQaLv6uwvzCJPq2wmc5SD9",
  "key3": "3kYXE41198ZwKAVwbadKKs61sNkcNZYLBdB4uU46UQ2T6rhL6H7keJoXeP5xHyXix2LCPuWX7mnuyDFs2Gfw8aPa",
  "key4": "3tSm15P578gqM8spgeeawt7WNSz1QGJy2ZVNCiEvUg6MCpu8aaA49SEkLisNfcuRDnPuMkWfrSz6Gk1MZPfWpzCF",
  "key5": "5MQmvW6zsXWW7Ggc2rGYxK9F146vCPxNfH2Qam2bxpufSnQ8DEwFM2t3CLz7HBwR4jAMmxNnM61XA2X5XNUt17by",
  "key6": "26MmdeyRJ8JRhr9M25LcRzwN7K9tfZqrXE18SbWyqJr3mkWHZzcuVE9QerJeMmGr9d1tRX2PvzUaYeDEtyAKKQq9",
  "key7": "3wQQZrGajN6izyZdkQrCqgkzVQxgaY18uRVPi6ESeejuqcdterTH16fNziqiiH75ATmAUNpuRL9F1YCFpAqsavi4",
  "key8": "3wFYitWtsc5kiboCxRuNQquXGhEXqLqHrkdWkG4F5umt3Zj4Tvt3Qxas7YijfuX66Fdepokt5xNL6CSmAPAmRKf9",
  "key9": "5X9RxtVBw1Uf1cE8pQvY4Hcz2JGMoS4WjMikFeBaf2Cw3L3mun5Kz4EsDf5sexkpXuXxE3QpN8uYynsCS6UK3BAN",
  "key10": "3Bo4vVQvpKJ9K8KQ18QEGDg26qSXgzko6S2zEQFCBjVZmH2FDAfpM2Fmma6RM8A32HxsZz47EHfBhEZmZhevWSRF",
  "key11": "BGzDNfu9VZKFMsK7YHrWZANQf7GBw9MrXo7vCJy2euzFCMj9nNhWF5f3YQXViynGeE75tfKYenyC5oGfVrdoFo6",
  "key12": "5jk3WmWHJ18UPcrpe3TES6HvPMBS1u6eRQ53g2PTuxhzTuryvv4XqZQiitosVJzzePjh5jveQq4YQwNYk1djVunG",
  "key13": "ZYb2HwW2GrHzbythrr9XMPi5Dykrga9Uy4PPdtCuk652sosX39FjLhpJ6zunhssU21QuywiXnPN1F948cmp7ALL",
  "key14": "4aW46nmTwRYmNAgyEkGzqaCduF8pS2dY7imDvshrxALuXct1pyEuJqzPvhwqCdb1LQ8LAa47JHXij313tE3FR18f",
  "key15": "5QnikaJEnYu6snehUTSWzuj7hQEP55VKh1HZYVWcy4GDotQpH9eQ5g1mWDPnoPCdh1g1NW8r5M4qqVEMj6chCdLE",
  "key16": "5rLye48m7g3f8RAegKUJLdgVicYhi4z4v5JB3h7C6PUfx6Dhq4whndkxu9XVBnAjJ3s43RVxxj9g72jsDaAg5MxG",
  "key17": "aurMESDFyL9NHE5GMkifKJCrA8HX5Nz97BnJ4XKFZykrqJKY9nrkCaWujDg75eKEcbkVP2Ej6g5jN5BzJvzUaAw",
  "key18": "vmsoZJ9xMkmFM6QnZBNfMAK2fbCdcQcv89VfEfWLwNxizmYQqye1Q891YstUDs4BShbyfnyUEVzDdkvRLtrZAgJ",
  "key19": "4AXTFH99Yd9ZDx1kJxg5Tp9bDJDwD6GiajMECMHfzh51Q93if1RP2nyYG84A2QqGuCqxya9kiMjQpJct4u2qVB6G",
  "key20": "2WiMfPUvYa1gYQ6B6yT2yZ2WKdph8GELmmPYRBqZLUSfQcGM9JDgpFfvzy5wH4cD2UdQgtkQuR2GidvMf81tQ6ff",
  "key21": "4Fg8ykwBky4cRHVnY87EncRfpVq9b6cwKXBVUNyp1c28k3U7oW39Ctgmh2J5KyfAp9qHQDHpomDwmf4fQpduEpzY",
  "key22": "36H3fJLdsiiwv13rfavi8HQRcMaPoLRG1D5gurK89kibPoG7y27b6sky5QvueNq1Yq8R9qHuTMEfb2pBLvmxcVTe",
  "key23": "2s9pWEB8swMChbdBQUqygk6gGXYJ2BckpbbSy59cZv3vSi1iMNfv9JJfTpepL52c3EQv9FMwAnKZHUz4JaiEbiLt",
  "key24": "4t6aJY3vmXfeu2mwpKxyjjaptHTevXqZ9vzFQJtBmTxAWtPocLHsm3ZZbWU8w2Frise2uL6dKAMF6LZtj4oWepUU",
  "key25": "5ZqAnK541hiRgzWayRHY9TjFePQaP8eFdXgqsHACfeNKaLpYTS9yvKxbJqcCDx1oG5Xn2sZeep7sHR5rMVpCrPZD",
  "key26": "57FsjEUPKxycXd1iwNdDGNML7wAher2yG8e8HVVFvSzTWD1wncbHULecFcS877JrffPKZoR29oN57ucmQ1kSwHiB",
  "key27": "eUJUspAZwGoUHwpHcCqQeMBDxjvEUi82prvGBZ68yp3hQDc9bVnQmx4X9v1G8r5aZg8bueR6VpAqSXKKks6YU97",
  "key28": "r18Qm4WpciCzN6cuq7PRo6fGLfJzeqcTfzMEZZVrBpeXpeYKp6Af2YmKwGiu7947BPJZPiYZV7uSi4jZ3TVrRnf",
  "key29": "hzbc4TiZaVw5ruETSaEURVHnRq1t5qpAynF1oMGouKweWyJjEgjL5x4r8UgGKbMjavXByifDCkeHuhK9BNMed4D",
  "key30": "2Tu9Tw8NaFz2R2boWWNWKQeqbS2dVnCAq277mgNVqwDdWPR2qvz9vXAXkdBNuwHLbrewo3AwpbPBmVvzPErypyab",
  "key31": "2KrHLma2FBGtHe6YREhL783RnsTnvKdeCstUudK98Hjq1gZWsSP4YQ9Z4wjbGEvCVokrKj5EZJ9MUK2i6kgEFjzh",
  "key32": "5bGKjoe8vy5BpmvREp1CiavQgDRQPo2UJM6mzGMHRRDZ2iKXYLCrLctBvBimUbwHG8mjERBvX4oF3HtRHAofTDm9",
  "key33": "6135D3kmJ6JCeEg2eX9p72UXnxy46FqfskjDJFV2vEHtGYzJ7E9RguzofxxVYttaMu6PUvyp6fXf6ZW5Juq7TQXw",
  "key34": "2effKUQmWaEdQ3sE175nxfii7bSMWCNub4zVMtcxMCUN7Lmz588pdWyCJuY3Su5L1KQkN6LR3ZJkqa3A68htL6TB",
  "key35": "65uiRE5WpmprkGEgzzFhukxHTJYymksGBa9SJWzjz7krrn1RYPW646YufnLvPXeazviYmJyKrgqj5Lf6g1Lgmg6e",
  "key36": "3hdRc9Auv3TF21iUFVDU96xV2BWpn36F8bqMQua3ij9NZPE1EZqmYtXJ6CvaM6cXyPbgjqFPp4YFJBPz7Fs4b8dc",
  "key37": "5u1LJ1DL6wVq8FYVpPMRM15kq5kXxMzcyhdfmx3e3PsbtA88Qid9n1baw8ajShtwt9u9vXDHR8bj2mu7siSEtWuM",
  "key38": "33airYb1kA3mf34TWsY5wT5r9ewrTq1NhXLDFTH4Uv5ASemnyDqPK9P4JGnruQLy1w8BepxvMKuD2gQPnJhwp89P",
  "key39": "4Kc7sQYUVvTyfSf5ojMG6dLvV5c7WCsZE9Gkg3Yp3NRUtEkookKXuiQ8r5yfChC8Yz6PYVEauo38xmEsXU3Mzecj",
  "key40": "5kBt5WwZkHq1EpTF5qRhedgQX5wHSidwQW6YTVHaezwPgnNCtPYECwx6oX8bhGqqdDLmaWHzYJnwYuJqnZkcgyB1",
  "key41": "2KTCEfX7Tpc85zS5bEYQDYV7BKrnWyYf2fcF3qaDkwGgwtCmgJWCbEAEsc3stw23FDnyMA7gVpT8cfD7qcDQeUax",
  "key42": "6YbD7kLYXBtSt8wBZ9Q33iG1uJYKRushYoSo37cbqYCQtVLR8C7Xsgf5bt96J4suYAyte1ux1AydUfpdbuJL8cS",
  "key43": "3CgdECziRQZai4AsremmY1TWZDGYPtgWEJ2gq56kBYq9HrZV9YSSRDGmQdMi7f2qwcjdEW1YsL5QEUijcBvMv5h",
  "key44": "5wvyYpeg8c4gMXnqi7VifbS4khPXU3cNEPyuXPyVpsdAE3j3x94WAyWPvbSaZodV3wYcE4An79gVKhdy6yz8xSZM",
  "key45": "EqEjmRTh1UbmwdhHJVJFX2gzArN1shsBFie7Z4bhZQETwjcL96kGJ6N957niGp6ogUmLynZNCnrscCJeFh3jX9i",
  "key46": "5E3AmvMgeDoEybSQNhxmVFrMLGfaFZN4aJE7KmShBvaYQkxk1Qq8rimRRMBzxj1MM2e5vQ6jtaQBUUyrRiaLz6iS",
  "key47": "45qc9q2dKW5BNF97a9T6LqugJH57BH9byFj2U1RLqjCgNqDDum1M6h8FPmrMNSvHv9SwXLYnVk45WXpMdiPaKuc1",
  "key48": "5SDrVk2tVNSQzvdDwA5GWEkAVJAiVbXsDgqHxxME1aJgEkw5Gy8mGzZqvz3oRHwbw2aFXqmuttgXiH42GeC3Bwum",
  "key49": "5qMs2VxvPqxifQLDZ7DtPopzaTAaN9rHwdWUHM4rYd9So7ygJkGyTtQvVqmxCpvfb7qMw3SFgLxVFXzhe2mhAuyX"
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
