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
    "3cigzTv7VQjbaSyRmgvtosM2nYP1atfHaSNWyegUCNekdc93w2RafiH2dL53X2PZSBwg2QYEMGvnwJnTeLAU6cRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Md4tAfA8TJaLQiSKcg4YbCtvKMkoyDF7GbenajBcj1bX3JHT9Qww9as19iMnaNumEiZNboss1Sw5XZRP85MWVZP",
  "key1": "5NsGak783wqGs8UZACjz8s8qPNWty6th7nrca7Qee5f37ueVDLym5QR7Ts34pVAvhZwbbmXtFuqQ5ZXy1gQs4U9a",
  "key2": "hZu7eKAs6eUeYfkdRwAKVZhkVMzETqPjuFTGdaBtmCcQqnZyEmvLkUtdFJxaHzHm1LiEPqCrXWQEYndY6jQLkse",
  "key3": "5fUihsqySHxHZPMpRkutWAPZQ8cxE4BE8VUgbGjh1owpTKxqM3JpAXeYd9NFwES8TSTCkAuJdshNm54UGWoV4ihh",
  "key4": "4Jpn195BdfQKPQ8eLxKqW3ZHUvE3Uz88fsCvq4DNETT4xXqP7fuUxTiH5BJVo8XEwwQTjAYtiDwAmv6rRQp9XgEG",
  "key5": "3BqanmKUBCVmowhFrPmmYS58hXzGFFVrpgydxhahTWMh1RqvyYdVAX54kY9z7CFN3F5fWWTBUPytiyPNgKzv6NhU",
  "key6": "5uANXVZ86ujw4cABaE9QbV29h4LeVzdFDvCLC67wAjXuYqM2ZzPefVk8g8vAHPmVjp121gQgyRxiqtK8C21mjRQs",
  "key7": "3SaeDjNoiGbLnwF5X6xthf41ip7PGze3jKHgdFwntQtzofzcPrhbU9dzQHxZvxaTUsaroWEfbDFZ9ENT4qmjNepU",
  "key8": "5ifEb6uGbZZXScHcAH4LQJ48CP9N9VdYzx1WY1MsX4u3osfL8RURUygF82sRd7L48ntaFH2hAfGVkXkucAZA3g1C",
  "key9": "4AmkyneWkJgDySGESo27jPpCitkDkSj75wpike69UFstzroyqxPKx35fZLWphue1CQ38jnyKjWmbH29QBwTtmb36",
  "key10": "cYTV9eJnPmV94Gr7Sk1R5SwBc6oW53gWx3uvCNHcLyXpVbiw2bQtcpgp7Zq4w7QZTG9uCiq3NAaBPGKQmk6P7C3",
  "key11": "3tzHaDa8HnLghbJKM6ErdcHUgPvhMuTAEaDh7dkoapoEkmgtjh7KMYA1UB4bvVGt8kaRZcrryXeFd3GLmaDzvJ3e",
  "key12": "5q2WCTUabsLoDnZZTSdUvcff1i3zFRR9HzFvU3tdTW8gfshF5FWrR84j2qogf6R9dJwz72pAi691tfRES9fzaQch",
  "key13": "61jFQ7ena93hsn1ejcpF91AatvfnXUBt9LtStf5t6x1r1NqRYBiBhLqfvUbSqUADZ5S4qmVrPtBoLrjvjXAZwnaM",
  "key14": "5bJUoyrm3EmfrhYVkmwVECVxchsnp1jjbiMLPFHJomLzmKRSAF2GndjvnvEuPeXXYYLWyjtiuVdrBLRYhtVVSYVe",
  "key15": "fu6TcDvCwLkXTRWrUDmgi8fdTeHLHSsVPTUN4CEF4bwVpCaJdZxG2jZ5yzGgZkDqqnETk3NxAVHRiMubJETy9Xr",
  "key16": "31QMrVhuFBV2eygjZ1GPSE3faNDF66U2V9kz3fqkfRoafeACMyyePhSP37PU3jchCdJ4a91vSedNDMUD7AdNWbSp",
  "key17": "3xEkqF5VdCa3r1F7kQzsDjcumUuNAuwZqtzEJ71AvwRpUnrWVnQV4HRfaGDpjUwBBuTibM2vVZZPX4ry4Jb53AUR",
  "key18": "2r2BvJGttM4ACMLWEyNN4wHLu2if3dYkCJWJTqqfja1c3FoiiGCkX452dMKy3DZCiQsGMk31VgRbhyegFMtLhdXw",
  "key19": "hxmNeDR3UQE9pwD7NWn28Po474QavcC25FAJQwcr3rus2ZWCeg7iRb2LkiTYjgqeseQZx4bNAVbq2ETVwojYoNr",
  "key20": "57uPCtAh6qqfWCjSKaezE2FfECBaJeujS54sQGXeeMq6tP8nQSQt8LXBUPSQf8sYwmZkBw9K7zvaCbue4dHCa9bk",
  "key21": "5v9GxDTsdPZ2h6LTUxW8FfZDJvCCCFftPiGRZBXSjmz1U98bFznojEtM7H373eWJFqEq8c1mvvJznHvzjMjQ9nk",
  "key22": "37RHiwfSJgTEhCALXvf6fHGFL49NZkzsKfoMmTvMcskfgJkLAQToDyFdXoMdjm6GUzWnbrpfb8hrTf2uTjG7yr5q",
  "key23": "3fxF94QCHcVNUoYJ3pcgeW4pXMiEPKobHPjLRG3ukYEJArEJozupqYBqTmjipbBjCcxZcvhsxTuUoTVU7FE4wuMK",
  "key24": "5WmkcBJ59CY5BUzt7W6xK5C7HKamaHWsQj34xd3xiMwb5EwXbPZwr7ndxUYxZLeQrCimmz7uUbUNXtcYaAriZjGF",
  "key25": "2bdiSGd3kNEyySCVtFgQbJHVr6KcKVNoPrgYKkofkqJVmXutGt2GKeX6QKXsu3prW5tyCPh9Le31svWvMB4h2tuq",
  "key26": "41M3etLasdk53FEEtJgJnTEAnb6duTwJXyRrDPdhf5MTD97NjQrstgQdbmQdvPWbS3uC4SgvCQ92JqvY2DcebBZi",
  "key27": "4NybYpps6yAfoLtKFoXzdLCgT16gFTHYk1s9gKRNKtgv99c5ULqPSa136y4qyAwamPG7TZAtEArSPvqyT5ZvrUkE",
  "key28": "3AYLnDRrK5u2Fk6K8jAtYdGcRdx1rp7WWd2beJVYCeiM1whULGdycvYFTJMijAk93SCF53v4m3Ln9uzuM791g3s6",
  "key29": "52sdAqt4fZfbgYDnK9pTaMxZU3LzfKxeZS1fhryEbxsQ1TXNw3BkRrKAsP7zX12UvvW58THjBkMjrReeRjHNjDDG",
  "key30": "4Fx12cisdh6SZPvbcjmiQtTx37KA4rkMCbgCqRmCT4yuk1hkSUCJUdGmWTns1YgotBcPadJqn2ka23kZTRWq2kmE",
  "key31": "4WxwfehD3M6SWzsyJ1H3EPN5KpCVUDpWgYWS4NjETL7pMDRiqp7942ZFfhzeJFeiKd7rZcwGFwNAy4GRTL4pq1tF",
  "key32": "2SceKkDocwyWW8uLNm4XgXzzT1rkSwT1hUsq3V99AwsgD59QAAi1TyGUgjfLC3szij1XFPknj9nhv7MUHU9diTCh",
  "key33": "3aU2z5SaDE25K2WSuSeMTHo2vqDTeofpgMQs8VUSrNY5F1RTzudfTcvDnKBxuJ8KWnvxMTtjmDZLx8qo551wbF9h",
  "key34": "2ZMsQt5t1Rn72Mu23MXFGJ5rbRo4uRUngKP4qbVGmV5mpzofgRp6KktYqz9qPhsPbVJwXfzz5z1j62CA6kcZpfeq",
  "key35": "5ccPMK337X9r1UmVFAURXtyF9DNhVtj7BLNJxrwE1Fw2KmwzSnuLDb6sDUigH61WmFy4ZanGZdNuGxBPUe7c7y9c",
  "key36": "3eFjobp416whqT3NjbB2RNbqRpYRCn6rBPwHfLjT6PzwejmvmErPtEdmRA2erH88WLUg21K3zAmLZN7UvkUutd5P",
  "key37": "2yF2SWtXhoiJmEoXZTR4NUGgZhA429dbJHdXjx2iq19FNvqmGhTAeBWajtpr2SaHZstJRuJuNzK1ug2dU2kB66Mb",
  "key38": "2T5zQgMTaTHLSNxSHtDmrtKXKsNe8rRb9TqDTiKAuvdbvWAWHbCw16iK4LptNGJh7RmnstvNFp4qErEdWc6Mc489",
  "key39": "3ehG12sSQqR3jfG7cLnoFkeZWSpMoXrthdAoHTMdbV4thaLWQGThWje9gcpJCBxeXJ3A3uLwuw5YJeW4mscjPTZU"
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
