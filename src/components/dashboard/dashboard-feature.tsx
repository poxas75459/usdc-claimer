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
    "2r8ArNWWvJsktsU9s2V2Wxeinwe37aecxSNQ43uwkzT3Usw7ez5dXBbGdy8A7ATwDfKa3ekcTnpaz2EXbgGK2u59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zkPJe4khbw1JAQ2JvWw17Se9UBMPUUjz7foHsGQDwTE1Rz2aoYWxs8sdVRz53vnf4AMR9N97qZkNJZQXRT7KXui",
  "key1": "4CYvrdnzSteA2sdD91Q9AkiC2n3oh6GUVyh7YKWUV3UtrdjhFoSbWC3pw4aduUhtiyihuU25iF7oFuZDLDrNjy5r",
  "key2": "64diA5rmuZKpDfuetoq3an41WyZzH4oMnSTvv1wA23XEQ9qdXUZZpUJnhxzrf56v7BdMGUm6dVCecmSrwZNsLAg3",
  "key3": "3oACxh4MZ4yeSPvm9VNRU5KR5ighhd5rT3XZnMrw5q5nAeCap8yp685vz7t49823QTQPMPseJJ2SUgg99mQzUPWV",
  "key4": "44aMf6dHz6aUrCQZ9VH6dm7uKYYk4PnxxFrfovd4oPnT1HvdXKmX3Ahdv6PJiWEWvRq7xRvU3Vr3Zn8gLcLHUmYc",
  "key5": "4A8hHZ1txhbLLEPBayNEKvNc45Lx6moSxDPTE4ciESxN1LUKqw3vRcMQ9v3SCjom4CNbvWxuXity94fQHbQFqaxj",
  "key6": "u9SbCMD9nEH5fKNWp35ECu3JkK3hdCNnPJrv6EHKoNW62WbFXN19wXzp3gq5Z4eutcvAEmC6dXzxqmyUFDy3Ab6",
  "key7": "5wZu8sGofnPQaKbK6a6ML3ZRffkiYnQRrNjDKYXCYyi2ridjouW2WsKCrgxb63vnznz633aJJpb4RiJfayt3t9vp",
  "key8": "SJWeYoT4VnyRUvjFexRTyNaZXTQyN2kKR8ZgCpPztFu8NHaomYzftmtMLVQFdbLbM2MmpcDpser1tuxDD2cNeu2",
  "key9": "TDafL5UFDEM2V2QdDZMDppTbW3zhgJ6HANkfcyQk3cfVk2ANwxSKqrySZdFTyiXDu6rtBVNGzFkZtD2X9Er7eSJ",
  "key10": "5KMod3oTtEyHHZ5u6NS9pPcRHasvMwwDMMZsscgi8F86zVF4dFfSadPfk34EponEwJuZwKSWpAkgsevTE394uDH8",
  "key11": "5BZ9RSpjedc2k3XEJMwkaNoW5PVuPm3mQCQ55zmiyoijrxJerYEC2H5WLYgdVd1A9BAGCqdBDMUR57eVGHer6pbR",
  "key12": "4kk48esKMhLESrapo7tMvCaKk81He2GzpnRS4JFJsrLrVenMxZF7ETpqC4AY64mUBdkrbnEnoeZG9fUrWUkcZZgw",
  "key13": "3qggLUCj9ouxCXS6HJQ96RGwxfE2WdadPbn4t5WGAFkE9DHPUGx6jgQ7AYjHr6tpaSe8159ZTBzFSM4Sb7XMiuWA",
  "key14": "Nq5Sw9AkTHj1mfsDuZJwDgqSdyQRrHvxxHnfuVV8SrT7rz7PPtAvAR7BB9E4PxmppwRerrBA6Y3xzUUyja8R3Fy",
  "key15": "5wpGBihnNWtwLKcehWHM5qxxWc1dBQShtyF1vv5wmwzJP9ZLsBqUByZvSwNk4SmkmQGGLNZgSeqkqPTtNRgz9EmE",
  "key16": "3xJHnBAmvnYKcph3Cixs8aDJJCDunLX4d42FfRZBZRLw77ysGgLVaScfAtqdC1ycr6JerSmp7RqZgrAYsKyySS3h",
  "key17": "A8ESKDgWSDKokCrPEDFj35EP2LeihsA1PnPW79QYyc8vZ2kiXgb9NGgUS7DYjVKW1SkcSvVaQVur11tWcnp9dhM",
  "key18": "G9sbnwi3BsLyKP1TpZkQFeX38P8t67yMKSoAKkDaskVENggFkJh6MTCri5aHF1mXXbegBSEz2Gbsz7LwePvnuHK",
  "key19": "29nuR5zRgU5k5veqJgyyGLg2MFEFRAWwM3QE7ANPjw7z98XTESxMqoVKJfARPwkNU1gLLqk3Ezs6zUCQDMCyDK4t",
  "key20": "3u5DwXqttodajBSqrBxMuC7cztTWDD2g3iWPiSoza6wZKZupKWSsjTmtjkG9fuz5KGQ46awPGuptgg7WdgJ75usd",
  "key21": "4N2w87jScmMk5JfWqpYMSVJFNoVj4sYpg2EcBUe6Zu4pCK4MrycGNPg75ixFgpCfeQ4dHH1eiaTKBahtjDPEMzZf",
  "key22": "n2V5Z1NPjf2CcRpKSL1WQPJsPWm7ipgA5KRndqW6AyBL4r39VB4b9eVXv2mSH3Rp5fB3iq16aautHKKps2p7R3M",
  "key23": "36XfXuZbX43TxBy1gJJSKGm6mvPDdFPWPDKVV4QK71bDLmDaMeZGX7dqjzdyRC2iqLmD7NoQ6EtERy9xBHc4eq2Y",
  "key24": "3zw5GRBQUzpnwf634eW6ahPpNSzSLzESQ2PouFEaHDitzeN1wK3iL9BCkjfUG1BhPahCp8oZeMpP6DmdxGWd1for",
  "key25": "3e1jxP8Wyg3gxUNDobAkev2QQXa7g2bPAQoXEpvvUvtTgY791v6sFWzybubaMoTf6YuxHTU8CtizXx1JShC1RyLY",
  "key26": "4AvLqCuAd1oYCL9TDv4QakX6rGR4RDJj3cUCjdvfTKTr7uH25M7ixAzk7knfcj1JhfaWiVn3nLJ6kszQ6St5KWV",
  "key27": "2ctJMNnWrFEzjGsfyMGJR266qbVehYYtjyCZBFoiV4QK7bnoLSwREkQaUEXVrUa4NoJMKtJnnBkBmTEqoSR6y2JU",
  "key28": "3wax2U2GbERGet2XjAmbDNBWHruAPm3ny6ZDQryKEiw5PPqVCbxvEQ5LyTyK9c6QfVG9uxf7v7mHxZu64ic4SN8M",
  "key29": "4sAUx3aooTpTrzzj162ysCAnauxonHkVwaRYbiT5r52PYpxZNsNP2HPuWKCZAX1TPUnqwkpDjLfmPgwgjiQmwU5A",
  "key30": "xK1ok536UuaikfWVTtSgSy8BqCKpWf3giCnr9DMDG4qv4rb9VjJcqWDwtngR8hJkLEipXrsThU7Z326nAH7RY9L",
  "key31": "5ZdKF1XgRtvCc5vgTCtz1b9y3W5QP8pJ6xZbmRGQv5ydkEzjmDKjfoC5TA8jq4YE3x5ie4vxU4wnHxk2mpCcpWNc",
  "key32": "3qHPM9PJNiYguayyHJAVmmgAZYQcvhauHisr6hwjtqR4C5qqBY6E7Pxg7Rr2Ey9d2RyyzMgdbx5bBnrAYr9nskJ7",
  "key33": "4HZhMkrAeo4uYkSz1oKymokiNwH5zGpsMwDAp5fwH3ChbH9bcy7UnEw1yXQMdhXbiNQEY6tiKfkXWtQgjwLwcUo5",
  "key34": "J2CQ3x355eaqqok3pNSK58a6Spoh4XGdQ4cmo1RUy69MA7segcHnop1cwtBiMWGaH8uyVW3opJLrdg3erW6mTcU",
  "key35": "3pvwqfxUF66kF3utyB3LMbRAPBxk9UCQaqq6ymtiH83qrg57yZXbdQY2PTtN2QGyD2w2gUaLs8wJpp8XjeRD7jQT",
  "key36": "3EMFAbJrNoY7dMZ6cT8ZrkniWqbJBfP65QWrgRRJvvnqkW6cPxg94qyBb3YMsffziQud28F3gGEGCp28uHyS2NMz",
  "key37": "44XJeDtb4zHmVkDTdGNaECWXGEkctFnjx5LuX5L94x2Ts5b5ufKt91rcHJyvog8744TaJ9NhHszUMEBo9vXiKRZv",
  "key38": "2HNo2mABfFu9VnJgCeW93Cpe6yC9euiMzrTVia5qgRgVj4BeXSZPs6hKjcirKicbckFLMLUiSocD6Rcdxj8pvf3G",
  "key39": "65a94LMy8PywGvbM7Rx2cr4YLzhtf2Y3YHtq5WomoGNT7pGsvjZvKciqHQcP1ou3KjrHuV5bRYui6yoqSCJQ55Zg",
  "key40": "UYJGZckfEvCXuCwxZ9K7JwKLTUcqZmrqPzVrTjP3E8ZBMU6nrhV63jd3SEKcc4LARQRfxNEVzppM7n52LiY7Vj2",
  "key41": "4UGrjTmiiofTAL2hJUKZCgXx4tVEDWABxwmM6yvaw7RJ459Ls66KgpQ5nZ5qAycdds6pz5Lr6swFVezm2MmVfkRR",
  "key42": "5qMpUst856RqD1mgxQJEzupjbzoWnguZAvg21Ehn2yzZTSVxLB9JpfA5PJNoASKQHcPK99wLTbcFxesP7GreXsdp"
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
