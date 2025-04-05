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
    "24dDdvcv8ruL8r4vSr78Gb4UCVQkzx3MD6m3b1MJMqUAsfLatrB6PTMdiyNd1tgWcQjXU9AhHigTYukewFfSZLpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26JqEutmb3ERHmobU8P4b93x28HB2MLWXzApsJjGUCoYei8RxLiBhACRidqxAMjyB69ghzgxp5RVzJZozCpZoCpv",
  "key1": "yGWoo1shNvhjH3mEc3jVNwcZ8HZgTgBAcw1FnMEDG5A2M5ypT1LnSjkUow8QsdvRRpYjRjyYn84PXS5PjQSYhWS",
  "key2": "5KTUPXbpZXZwwFagBzy8q2weY4S3rb68YQ1cJ3nCJQspugPsSQjMTWqZe7HDK9YYhB9NM2aPFgPg9zUxABDXqEpP",
  "key3": "4mpV9DnCUW6cAdupw92T1D9FJuvTZWUGxHfmj314pug1aqpvg4PXBsfANQHTkSZph9oJeqyhVh4p6b2wQkrbAGQs",
  "key4": "3xowVuGBMFSDgMUGwEkmnr6U3uEwh2qcG4RqduuCfWgURH6vAmqZib7bLnzPPaHQccur9THzcy4LgKRb9WtXLYPb",
  "key5": "2GJzvvFuAVKWjDNV2F7ioaQ1rPK6kjkUNuNGiubZRWJ7GsavnMGc4iKZSGRB52Yb8xKUd9NQrZwasLHNM2iEc9VU",
  "key6": "FxqyzzSGmBmapyhW8ZmDVhTF4jLKY9J9TiimkovoPytoe3W33VNkU8P36Lv5H2irRepiJ4diAk4AdatjCipywqb",
  "key7": "4ucqNSuvwLAtuD3uy9pux9f4ufZ3mN1eTZernc9iENnTKYDC56oXyEzxraDHNoa61TRVafs19HeDAtoaL6GoyWuk",
  "key8": "XoN2wgtU5ZKpoFJXPnCFm2DwFMgo26ngsxfPhACnzUmAfNoAEnpJ1h7Ag7zVpdnGouVxKYDJ7GNKrZNvbxjJduh",
  "key9": "KavcK1iwWzf3gBfNfAjteqtN3MwHYcCf3Qtdsc3eoxC8TJywN3aij5YBkRkTdZfnmccALALoVuAYXaUXyxc2nqr",
  "key10": "omLNbEv3kFzaL1v3SZTp7DNNR1UMsx2N3o5gygM63sZahGypce3FsB6wK29RSe9NycLXcddKYUCZXWtWDX7mskw",
  "key11": "2vTHxnNrMBQcbjBUezMpDvsvjXDtRQEzPzexqScWBTJGJu4Z38n1b66xtuZLoQteW8AmuELpBCiDsa49t9beeiQZ",
  "key12": "5ysciGQPi4m6LaibSR41cdmtbHmrzJ4Sy2tqpquQto7v16GGKDT4r3HZziU43poJfDfEk9fYqzq2fcbc8bUHKhyu",
  "key13": "3g57h57ZuVnNav2m1b33YysJKGVuE4nxN2WNXn2s1aJNBy6HfQb2xU271yQSJy6cNhdfRSDUaeVqcESe7hoMqep",
  "key14": "4fuRefo67rHMms9UiieGupd2Ae6Q9iV7CdJ5Rj7DjjYtecnubLE6JeuPZqnRoSYKyHCp8qftFBrVaUb2NBPqmtvV",
  "key15": "3tncWf9WyQhdr2wtyxasKSsgVGg6sSotYBqgDNvZfxXxCspjwUD4d4R4g5LCy9r4E6Li4HyMsEeevTLNwoBiwR6i",
  "key16": "4dzoAJDkizT1QZYrgcDtZNS57CysaAY9ZWq4aBnhNjZBv9tWqYVRqnYXc2E8NieABz8Ey1inF4qRcK3eyct6f6ef",
  "key17": "257CiAxvoL5xGCEPEi9nkgudvzwQgitJwxPxWBfgMZs4irrxMLaTfmZ2MzwD2eBwQMhuo8sHBGjdrPjduyngDbip",
  "key18": "4tkn6PHNsEiUdjBcUPetWKsgrfkRHxzztXm9no78kQn8uHkhHpLfTwjrvyqydpo2xXXQmeX12WVFYbnwWyjekjaD",
  "key19": "4FL3WwpFFP7sJuDmTA5zWdvr9um9yfN3eRU1fKVnWuWvyPojP2G1FNf4114DSJQsXf5evM8z4QFwuWZPt2wBz1b7",
  "key20": "3shRcPEfMufKKEJHr6Xe8D8WbqWBwi8FLSYrjyMsaR9ZVLb6dttVdPGXoLPkR8nKMAHVK51Mit9s7tBRpHp27vP6",
  "key21": "4ktZPzEwLw82Wmr9FR6T4W41kWV96XPgberDVNYSzUCnome9bSVmE1TaEsqxKEADaZV9QCEi6tR84uuCK83d2dCY",
  "key22": "5rPPfz7VuQnmZPcNu9dcyYKeWq6KEQfCAzjn6apQCTgbCEuuLUKyxHN1pQvG3njM817yU5xbdWfZVFbwAwKTqVuz",
  "key23": "2gACmq2RYC3xu2veU1aVKz2LH2rQQhA1xTTV1TWeN7Z7xAoiaASDfD9kA7kdWQdYLXXnHdrfAt3iLiuhfUMt7XLD",
  "key24": "5V5zGmDd9LRXBMB7TqiBtLDhkVF8RDQy5AoN1yJxrjJQpVGMDsEihXXZZausiyBHRARRW1k4Lvi6r1iUkEri5sBt",
  "key25": "2nSwbxEd3RFjNCDbq5RCPi55LcWxn7HAbpsZsSJyg1u4p6ikL5WnWDeJXdcpPik1yD1FAh3JLA2ZnTdQCsbLJ3h4",
  "key26": "3FSwcbEBzRvdBVejRZrUW27KHuRHpYUUZpwZkLhFqy2H1SwLwyEZwV7396SjQEv5GTeARYSog53qr9DPR5DCYJQ3",
  "key27": "48xrZvZmwPtn7cAaLWs3nijdhj1vmUfZQRpYWyNUxNtMNZwVPh6ebQBo5uwC7JVNTNWYSV9ZRcRsYNVTpwsMGRgc",
  "key28": "5gZkSJ7syqoboYui6ayAdA9UoPw53dszBKNyT36qf151JuRYeLarCLE1C5Kxctj8t9kdvKtDRKQvEfT9u7JQiqv5",
  "key29": "3ChN5amKjGt6bF2MK591nt3ayveaTxdm2asnFRYcSEgSZ8qL6hRPAm5R5iCqHb3YrGDYEhGjnRfbcNEZ6fYiyTo6",
  "key30": "3PVfXd8JvkmomguqnhaZM5i7BdpJpyKwg7ojqnV2vD9qyb9Ns2kSEfFLaWUrAVGHc3vdaEGH8vC5CAjPbZR32f74",
  "key31": "QBLHk7uJRHa5ZTkq5vy2ZjvQLj72SFNsfZHXstxpnqYjn3mwoohNcaPf82MLrJ9AWvKejvi8krGLaPQJ3ijYcMf",
  "key32": "5iCXWR3BNdYuSWvrweXqPj8v59W5h4eoswzPsHAtjY6YYK2YP74dT2yx62PndHCDwvEsVeXHeWsy9fxQCzrYADbJ",
  "key33": "4Jd4RWnXHzRriuUsDa4H4ZQ81fN2wd8VxGPeifz9nX9814EBGSxYBDjuD4CLbLnP5htYeBVmqmgXAL6HVTsh3UeG",
  "key34": "Fd3gYrsKPuq2ZrHV57jhdzTN6J8TX47khjB89Sb9mo3tdRXrgYou5xjz27j16u8jDaKyyZxRRFwLQepsiM1V3s4",
  "key35": "37VMsSfSjvGqK3aDvk9rZo3de2iTeRfseGyewVsPuk3hMjxewMfsnRvSD2Rf7rttWAjxfECCfbKjnms6uuLihonb",
  "key36": "24rKQCWx7c8rV6dpHiCHptA78ENZFozkHWb1RnndkY6ARXoWTe6gLTmYtkSGfEpHqHy5TCo2iMV22D1VSasNxZPr",
  "key37": "3Z55wMi285swM1jfSaoS2fvB1w7FSBKL5hyxiipcpVBtyL6JXcQA6PZWDQK88NzGYj6oLvUehHdjETU1vkAczn3H",
  "key38": "2jMWyds87gkyZeejB7LiiTfEKi1Vx2WQRTbtKbRrppT1UunoVus9vqjta6xiABmvgWvcu6k9Yc1sLkHPCGr5kxsy",
  "key39": "4TYtHpNeaUAF6HfSnGHqDLmMoLVE2pRCBcCccNXS6z6XPaAbEiB61W8ZyHzW6VhiwgkRKGevNmiDmQZnKE2dWVhs",
  "key40": "5p5mtxZZYboD4fZSwpnK5ig3WLUBrrrDJMD9yKgN8s24UEWwGAfHa5ghquTbKygJKeNTtET5nMXv2JBdzQVkNace",
  "key41": "2R6JqmAoP3abMATyKroGZsSrDS7hVg1sBqLyPc6YVVnxe8fbH7sTgCg735LUHshQVs8MQeWjWwdZzFfxk9sP38a5",
  "key42": "5wJo9FkvPCyYff3q8yRLeTmNDeGdDQzom4h6Cs6tKxtWyptfue5ALuUgj9izKR4RYqxvPZ2u1YVnWjNzcJUTTKnh",
  "key43": "3NCeMbEwNDjMAPNP38NE1YVH21TM2efAk64uyPNeNu6TLKKDzt2gBgfT9ZYimYgRivirXNkC2buGXgfF8t13p8g4",
  "key44": "55bkzgUaW6poFKsYc1Hqu4Er7EF3SAW9Hew76ZubbfeLzz9iuEsCTz4jJiteGDEBAsj66LR6jPZnTHzA7K7HVTG6"
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
