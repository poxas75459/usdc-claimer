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
    "5skDsigXCSR3pQezGXQvrPsEXAEJ2zuDangejA5mkLGirw4yS6uENuf6caVNQ3otduS3zuHBU42ykP4iCbJrFDDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tpwRjx9V61FA2t1DHfpww3v5HsPpLw63xnRpP3yV6AgqYwyCmZjazjhB4WcxkLDThrD8evRsTvREKsgtQe2haLZ",
  "key1": "2jkGMjDupwFvTKbySrZNvx8DCAexwM9yirjnG5btEQ7SzvSNJMkRSjEcmqxuUNrwhxzVZHpAuYLrBSESAS2jLbxu",
  "key2": "5gDfSq1poGorfvecLycD9PyF8XitYKAqZXhbwQ7MDFDTvm9EdUw1NZxwghboZQ4JqZrqvZcyxkKrdWrsmXf9QeAj",
  "key3": "ESmRBn4ZtEnnSD8HCGcNxGBHDr53zCh2ok27G4FGX17v9ek2ZaQof4RuCMg1z4dsifJ66MJEpva9DqVnLpAQnuJ",
  "key4": "2mM58SjKF5nHGD5mFqv5rTGkNn6aZUtqNfYXThaZdpoGq4cW6sZjemQKDqA4mMKw7Ha3ArhjzWHvRLBHTAjL1JTK",
  "key5": "4wGcvfaMEeckRerUVLUXUNtk8Vie6s85Reof9mrvdnjL1zdzkxaBMZKaydWWYGsB9RL8FW5LSwr5qG3A81SHiM8h",
  "key6": "5oyF7uRWrUurCJ42Gmn7HfcJcDhsZAMGq2LvPfdQTLSfmiDfizntwdgGuDroMeXx236ud8fdvg8MCDnh6CNzWeaA",
  "key7": "Xzxfxp4ECinRgVefLsq7hEZi2Ajw7UfDiSvwV178vjeP8RNxa2dMCps96oHYnEYHPwC8iQHiedHxPx5DHBsNNjy",
  "key8": "4s1nZpRNmBMqXmiP5x3UaeqReB6o8BpqDMuM1TgXRnKZyjQxM35nrpnJg8ukVsc9qkDVfVRqd6zMjkvprQq5S9ge",
  "key9": "4F7DX4ABQd7XUqGpRRXb1UgFUqNcKxS4h6wKzRcsBvjbtnHr6da6yiUburVVKGf2oPmPmKik9cKKQrTeyFWzQ4Lo",
  "key10": "z27ALtaLeFJZTeL1iFiQ9acXxcMjKDuzUJ9xdjH7aPeBZ1J9kZDZzMkc184GoS4P8RH9Zguuhyz8mWEPtFZGkzq",
  "key11": "62VU3wzCZC1XqCuTRKt22FC8Vu9AU9Ki7nCevoR9FYJpvm4TqQJLoL9kh959CBhwQtM5NxPYG1bMPtZdUsjynqcg",
  "key12": "SrjCRySdmQ884dBUnqwyj3A5C9i4tftXSoFnWwG2boepQLswUYKtEHUfNG9s8krmQbJ2ge6bkxM1oQMcpbR5Hha",
  "key13": "2VvuYKCJrA8XBW1R3wz5aLeUUhawE9VeCeAqWU9jcQCwjJv3ccs5qTAMxfCm4zsxrxw3cjVGCqyrysXsCvNVj1Hi",
  "key14": "3WPEvMkAM8xjuyrEjAS65K6VJUPSbKuH8jPcP6waFygiS3h6gvtxBGbJovTejTbAtt3SpfA6fvAZuynPNyn6iUjD",
  "key15": "4yXTfxgy7z3gZFZTRpRjZfP89UJgHu9KcqfnYi2uuVPSRbSy3kzavxyVYV2SencVokxXWWaWFte839TyQuKRniJW",
  "key16": "2a1MbxtXmxm78VF1dFDkNLh12sUzaR9wT7nmqoQCEYCiCE9fRyuanqjQVgQ2caEWGD5hzeHPb6LKp8DgTRgAZWnY",
  "key17": "4NAUAnV8PaAdHz1YeS8h6nbK76J3SuzF9iRa4Az63MnVJm4QvncT5RY5UKfVvz6erkXkJnqu9LP5zjqQkd2jeJ7u",
  "key18": "usb4WcWyTL7omwLFEM7J46Be3fqLTii87DfXZqcWg76pY6sruTB8jBnGS8ve3p8geBXoLh5TGmJLZFp1kL7GaaQ",
  "key19": "5Hr4Ljb28gbhjoj7L5T71UDJFTuSaPqjyqHKZ8GZQVj64EgtfVwPR9SfiEnjw8LpoZ1kBgGYmYwhzTMgREjx1D7R",
  "key20": "4QVNvnnz5jECXGMLtyQY2W1oTaeWuXC2RS48ru5yu3xAG6LjQnHanNfSu1yfz5hKH8wm3p8jpfsPHeEk2TaReNwu",
  "key21": "BBPfbUBHtDZJogBbnocmDbDVScsFJjqoAYqwbrQmGRi2zTzSN7HeMstAQAxBkuFxu1MZfSDfBCYr7bu7N4bBpj1",
  "key22": "kkArMDVjYo39mtmYKx57GnEskHakYHjvbkXEkEPuUVDzY1YdeS2taSedm1avmqT8JvMXJ6MydmpikuSGsmRGXXu",
  "key23": "31nhXXgmqJdC4KMA1RUb6XyLRYoSkpCj1Jf1sWbAKZGgkKazGJKzmYFfrKbLp5egr7X2R3qPqjgr74Dq7rnBn7a",
  "key24": "4heScFrwfzerFGUt6jJ4rnsHu9xAYJioFzF4cSPAVMnqa3TW7WiAwmsZNXpL1QevFQaEoSmPsSr9QM9veRVhSsry",
  "key25": "4uVXr1X4m6GdYNSCJBkhchFMBdrg3U6eEUqo8m7NJ62X8vn45P4VV9G2cwR3wRF6gRyH1tA7BoU6xemrC9dWTDnM",
  "key26": "83C58Q6EB2cdDhKAsjqhxB1zB96s8Lr3tPC2WdZ29uunUPqHDdafsAsYUk3KhFvJhm744SYXF7xfGzaX9U3jzoR",
  "key27": "2VPQC7SGGPiWT6E951LptLuoF3e4jRjUp55VvoFvQGCfNTkgFRBPrFJ3PjVs17DLmv2Ms5zVJRmVpaUvhZhnk7Ac",
  "key28": "2NJHP6PkwXmA2nZj1Kefp7FuMipop3UuBw3u7LWe6JSiJsnSxHAFrUTwJYSnzTQk8Xy3ZEhGbWmPYQiHNEh5iM1P",
  "key29": "457ojfPkcSogPzYtVcUv3NkiDwuiBLJvZJCkLfbui2duVePZcggRmk7NGYzjA6nLKWRDLn2tK2ecXY1AkuQvuzCe",
  "key30": "3vRdKtSyjL5pJ5u6Bwemkx8qdQSapXEytubtGMdCLjEc3mHo5SWrAL92defUqujnm7r5NSBw6JMmeDxkUeVrUAh7",
  "key31": "CHd1GTAs4HbBCLnCXybgAWsUkwQ5GCEpsnTfxhuWFkvq4YTmgMRmkhbi5hB1RVabEuwvrYNBRC9gDwyMUND8byP",
  "key32": "qKPkrjc8tCstauignjoUPLz2GkejD9vT7JvKaYuTaHqH2WHCiXfczdh2tUDRbsH4VCZsoZT8HX9gavWBaDg21A5",
  "key33": "XWuwVBoxF7dJZM6SpaV82ZMXDHedPQ8NSfsfAnq5nTaFhpozwnZZr6u3GxxvzYL76jxvSYxwcfDKtmYumP8TMQW",
  "key34": "3gN94tBP5f3BRA7fvGVUP37CYA97xvfeo4obw6dCYHRHQKTywkbuwwa9upD9LVtVo8NgrZm1YDRvbc5fpmYm9sV2",
  "key35": "34ND6ieggtrNHb2dwsX2kN6ExH4DaXsUaTjBkgcDXViQdv5igj2pc6MCZXqx51bRPJU7EuqL7xh4stXr49tG1vfS",
  "key36": "b9e14LoP92BQuaUHmobUQ3wt2Gm7H76xprHCRN8wq5S3JWaA8VNkQRE25ACRayZbEBvxhGrNKsWFdsLc2ob4gCj",
  "key37": "5P7mT6ePH3dR982GZYDxbFQEULvcNUpq2hNBhiWUi9YnYzQXLP7tQSnCV9bfBwACvh1DSrRz5CP1oApZ5gEPq96g",
  "key38": "ip9z6gqwDvXKUBAT19PfGXZtjGMk9BVSDcBpvEB1B6Zx9gRe9FDQJumoYppz3KWpNMEQ1KNoKsABgN4QRzu4CvA",
  "key39": "4uKLseasgguQc6nJsB63GQcByyMtmvVq4do6zmUf1s6NyCGkh7sGfXAEKpujZABjseUAFRtb8EgBxnRsM5BLiNdH",
  "key40": "3Tv5GxaJgjoocw9T8muS7UsBGisTwSdqynjsFpz1e6XvjgTCJaHnA3bojr7KWSDKgDBbJ2QeuMHsYZzunAEoaai1",
  "key41": "2X3TPBYh4monWLDq8ytDd1SfzZoYHQcsGaEM3REGp8BPiKEcJVMJvQChiMSoP9qR5nQ5dPfbdCUWC2YAumTB1W9e",
  "key42": "6VLKnAtZqTMfzc1KJHsyTpm65AUUeVy5ytCvLMhCCYxKUK2uwpV4w4wdirP9gtVMyYGFRxgDc1YjRybbUhch1dn",
  "key43": "5qpU3Pu5xKzU7EVxtzhMgDkeApkVAJPMUwn6sgtS7PaCKyB92sTmW4RoUuxrnmC86peYnkzsJHdZefghbxnaAPeJ",
  "key44": "4ArFEvwFcXTyJ9HcUA9N4qwYZKgZRG8vkCXob1rFdKSGReuXuxH4da91KV82cnb3bJA25k4pTAnJy7aWEmgNJ7Dq",
  "key45": "5n3f7Tyarb431PqfVnD5yjYSPHPbbkEvjUDqQ6EnEcj5nj8cxbg9NyoJtPMJiaawUUeedy1WF3HfAvy8f2BmCeu7",
  "key46": "29WBZV5BP9hWDdfn3tGrhxr4YEBPGqxrQaGq8y7WEHPKmwdChHVV5fgNAQS3bunGHAApk3R8XguZinqLVGx3q3aR",
  "key47": "62QwYoniLEhzJdWeuGypZEopuNFtQfqkxiz6Ru7GXbftqew1icsL6L8TtC7aXvBGWqdgRzsiT6h7uSXaHf7gxDs7",
  "key48": "4mtU8zoomQSxRRNeaP5jnfmyhG98Nwnb2fqgGGVLaxXM8bqbiP6yDHvkNRNtznbbfdja5KrYvGsdHuT639gNXguw",
  "key49": "61qtcg7mnKsqrJ6mKQK1JErAsrTVdkYVNc5JvxJ6wjPEMndnBt9sCRH7zcGG24cdtJ5P36njtKA1TMjVf2vkUHHM"
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
