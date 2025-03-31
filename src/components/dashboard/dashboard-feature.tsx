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
    "3ryZnHPWd2UxoyTwHCYXpCH7KVmQYq2XzJ85MCXyC7PTFEZWLHUc3T5cLVs77Gy5KZTmfcsEqxavMh6iQcSqGsEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VVJF2RKb7haPXue5732dwq3X2EfgKv8onbZm1QrU2x8z9wYAJNw4zNLFzirZZdYNDDVdnP2qRZ9AMd54pS67tJ6",
  "key1": "5qjV15PvGbKmU6x2aFfh5AuQ2ieb51uZX7FhdjwAumHVpVcM2m51jrAfSEosYXDPgN7JF3Uj1J3veVuST8HDAPtQ",
  "key2": "5StKHYaBteJLDS8zGbi8zKXjywBxkqy9TxktGhzLqETKjgm6A2kyy9SZf1PE7m25zY7DavhuGvyCFkPHHFTDBeJT",
  "key3": "2KWYv8L8cnAanKJpo9RRajRbaVsHSZgNo1XUTSwCEpaaDUMwKB8hHQsbYYwHJeK6FocbP21uLzhnoTXuHkBi5MV8",
  "key4": "2PNyRhJGcBLMpJtAt8DkbNyfjA3RSBjU5UivbNHNKdDStKN2JjAmP2KuamTYZxM5yR57KnaD8zbxyoRVKfqKJStR",
  "key5": "59qkDYfUx1HVn4XeLsUE7FMug9hFnXoVco5ZhH4tLUVT6T18m5G47MbGySgV7YsHZNTjRaZiRnW5Bsd3KgEV9BrA",
  "key6": "24d19UowdVwf3BhREnsudQNMKw475QdvVY5FSfpEHfQukbLnhMG1DFviJykZGoEyGhUthHckMZxRvqcKJvhpfsaw",
  "key7": "zh1QTEWqVhULySixdkosn9sV45RKADuJB8Dmna2c4SiZHWakFdDR2DQUEUtgQQLLiVXktXcrMfZQi44QgDep1Vk",
  "key8": "4GwN3YTFrv6NMrgcoWASfRCi236uUvsGneAqZwX6mCjCL1bBy3dMwwmatJdshCDQyqRB7qgcbhYQhtb2BWMEmYZu",
  "key9": "3qW38r9Woc5Aap7VqrwdPeNW2SvATPv67Dd2ThWzv11JMQJR4Bbm2D64XN1u785L1hPGDuoRKzq8fCxDUnV7P5v4",
  "key10": "4yqfwiRv6W3cQ9kcQfbkD5aHk8jZvDLMK7eMWykx95VrAr9mqrKWqcDAt6QS22K8hubZANnkEYp9MN8Ax7nZsjjX",
  "key11": "32qnUMnxPVndusYQ9Ab4V8Ais4muGc4AhGLwr8v6q7BE8kEFHFUC2EPtjwKN8FteSpjw9F1rFyBzkcrWueGeVK2Q",
  "key12": "2M2jNpCw2MJ1rW8g5sdqQvbSjE51rDNFDL3d1pQY2TfiYFtWjBQvHR4RHqDksQnn7Sf5Knb3kubuuLX63bJrCqax",
  "key13": "9LDQH5TN3LSGuh53uLn5paB1kWw2oWhjBHgEAhSUmE5twJ9GxFKnQMan2DECecaRdNxDw8Bh6yWkTQBW8wmkc1H",
  "key14": "2BPPnqv29gRg6fdU2T7XzMTZsn4fpDCMnWH9kF7qQLkdepq8sgX44MKPihf86gEG7Eaneq7vifVcUZM9hnDiE8Ek",
  "key15": "23Ex5NfRTW7gn78Gz6XGMnSAq2zLpRxdY9aAhhFhiLbEXTp2vWqzcsAMVLR3BRdT7vzvLjfqW7xM2kn9Hn34iaym",
  "key16": "2oXwor8U4h8VMgC54BxkxRH46E7hH1Cxv9QAQomTALsGMkKpsYG48khkcvqMLViZigf6b938Dg49kkrCUHQRU5hM",
  "key17": "5amMzx7vsA51pnC9WG69FCYRQjYa7HnXs4BPgYyKsSUgk7ndPKc6g6ba4Z1rBwMRjtBM617jotxrrF8cexQL9jFD",
  "key18": "3BGQGcp961u5Ep51UoquSbWLpzbW9dt8yN3i5JCMKqqpXAa8Mx5mcSa6AMpWm5QPeQdrd4ToSsbNk5dPvsozdji2",
  "key19": "2Lxh7ka3UCcfZVwYTh4HyFJwaFq6EPFU97U2fbJEFrP7uqCB6uRKNbyhGEkTPcrqahGXhxjedozkowfjSshDUAjG",
  "key20": "3xbp5Qu3kDn4ci7rSKgEnYxA5d8iw13vhVBUbxTgxdCgiys8NVgi8kAfVKffewaSpN4YP5wsSzGqgrSdJWwKHS97",
  "key21": "3v7mMVzGKqs6Fx4JYummF2YysuEfRwH6ZbPstW7Ubiniaqq1vCDRm7tSfgoiSoygeXmeTd9QuxDvkmUmgx1xdPna",
  "key22": "4EiuioKertrSWfLR5w6kF6WLcFv2xbzeUCnPofiwDmvGpLhxuvSqKFoChwxV57XtbK2qADifSnzoAQqzvuX6bNdq",
  "key23": "31Ho4PCgFcYsP6D688xK6iNckxeCuq47sv877FDVDfmcMt8EAAmFfh1LfFoFYsgRN8XvoJYHdAxtwYyp43vQg5GJ",
  "key24": "ga431diVvr8cPo9CimD7hyGAfyBD5QtkPYJyQnc1avqZDTryeW2PwvnarNHReP5JcuCjzsJn44FyLEXz2rHz43U",
  "key25": "4wkdM2L3u1WyNgYpitcxcagshx1WNmQuSdKgGiGAdWn1PTQUymkqLi5GnjGnjxy566zdprDaLY3iU3mxnmxniW4k",
  "key26": "2tC9PGDwEKMzhMbNqbwoeuXSdT6g8zELtfAHXhhW55tTTL8E49asAYuPnQuzE19u5CaSmjxAPNmxb2g83T4YkcMT",
  "key27": "2YrVQGPXRLHfSwkBg2kRqqWNGakWm9HvF9gzyZfEVigmmAMU4PYWqGkzewHz3dBgX2U3UwpWz6ovJY2xuUu952Bi",
  "key28": "4yAnwQ3Km3LT8tw1bbeyBS9bgsCXvhA153Fuug4wDDhXa66FFJbd4fSH8PMcZAVw7h5HdbD2Cetv2svKmK36N5Ch",
  "key29": "2dk2YdH697hRh2aCxWUKzuxm7kZqJuXS8v7Cd6pXoiGRr2WA1uc4rzWRzYCyyySfG1aNX6veQvUMKhwwVCjSQ77B",
  "key30": "vj2F9hNNMbuwrSXQBoepWR5dUBLsWnc5sUipfyizgfXYUdo1UQAQuqNnoowHiPZaM8uvG7i3BBbFin4UuV8toEZ",
  "key31": "3MjiMX2S2Jz1dygrgtwrx93PhufRDoimmidN7xEVYEkRNqDUNAoJLd6mMRgQJoPasi98VUGCHdQwCPT78ih63QFf",
  "key32": "tzVvuK73DHua9SMpRPnE7E9sjq99okaKCokrC5k8prHyn1Pjh63W9eqHBeq2umDrB4do1SGjtUTs1FcWxZMV2LQ",
  "key33": "25mjsWRDrw3EvHZRMk3XPYR33GxWx9LfVFurYULfs3iY6YHQ6DDpcVUe4DbKpfwd5evZHXg3KvSwSw69J8h9hNB5",
  "key34": "3RaeN6scVNJtakK2ez6CgDx9A7djvmk3mx7bzSBnZ2phEJ4hrwopPen2FNXCX4WhMhuwa6CsWLsvs4vkJiwUXejQ",
  "key35": "3a9RdvLxHKUBqzTHg48FRBszNvSZ1CHdf6BQgXXSKXGKXsi2GVW7fWb7HgdvVbi3AjimZAeqnFArC4amKSeBxiVj",
  "key36": "4JAgYdqAszGQPpHafb4mtWKa3jYGEmPGuxHwjhznn8Tp9Ne9412p3s6eVcN3734sCYjRmnFLrq7xBsEb8mX5s47z",
  "key37": "5nqBiqFyn943Mqo9KKupTj14G7RCzxibVhh7sTud9WuYSHzXShcCwixo5mJgCJng7PyxjWbvpyH3iQVpZHdVsWzR",
  "key38": "488zURcfEsLryhtvs3rYa4KF9dkhcDwfAemojzw6DbvSPHWAobScdusjeJmRj5JrcokB5dmWaCwpwbXTw2szYrAK",
  "key39": "YkCBxePV3BUBcjnGPfaVCjcyS8CAaSkdnfT9yWiHJSVehMvjbMgmy9VUv2YinK3jSGyEYhGRXqZbyWqEPj1wi2d",
  "key40": "PVdG5y49Jb9mqtqmqh5f3ixhjmg3p3sS4pkvpJDqyAdzf2Q71HafxMkcycroWFqihskrYMakZ92Nkwx9Wx3SJfR",
  "key41": "3yQogjvyajpaPGuyC9ty9igdKndzqZP9gMhL1PmcbgxangUvcp9ixcxUuZy2jW1sPXR6VwemdYmPS2pEjTL635Sb",
  "key42": "5xH4HAHLMCtPjDqubNcE34kRzw6uJEazEFRB67ayPbt6eqR5rJDj4uQGRvsUkZoAWjDMv6zznub2oRikENYoxARH",
  "key43": "2J5CcwMXmhzjsZGLLEjJ8D9njXzbadgia2XmXmSVoCyry2bbJoFoLo5G5MyAyZzvmkPvVCFPPH6j7PytjBmtpBcE"
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
