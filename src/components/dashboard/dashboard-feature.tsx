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
    "5kkeXm38Ze9kEswcZkAsxPExrg2PHnH3FmmRQ64uGkz9ZENcVDHD1QaKGezLfBGMsTAhTyCZXSwKdNMrAMpmHqPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFncAb2GNdtdpFCK2tY7P7VcFadXsjPRuLScsisjzoSmZta6aDEgN6vigDEdw2GAkN73LJA5HkF8ZPb1kbbR9DK",
  "key1": "4yQ1aErGPAYzGdky7RpY2izoUGE9uTSJS6vTJhY3DV4AFYpvGudt3xpGLEndbXLEERRoibNaWCLZC6Rfk9aR1DfE",
  "key2": "2qDAYs9Tpwuq7upv7tbe26hTews7i2UPQs2Uiia76NtsoqACjAsn9EQFgPofiYR8Mdfj3epGAVEUXRxWJEhUMsxK",
  "key3": "4H6FRiR4Gfw5MDRQrPp6dJKkHZ1bKHoBHGQnDoTSvJccfaRCe5gYkz4ufrLtij77P5QbQw4UZBQKB8QAu9pVFknH",
  "key4": "4aAkgSkaJ17T2cJx9MFUgaqHuMJJRmatrg34r3xaK9QTpSCBCu8P3Xz2mqNak3mvDoU5pifY2EtW8K7wgcYaYns3",
  "key5": "5bt2rWCLwuQbZeUdG99SNv3YAVjaf9SGv2JrnYQRHUpJRZVAnXECBRLSJmwdRqHme6qN8xVec4Gygp2oK5co9maz",
  "key6": "kSRbHFFmNAGYS8qcWXFVpq5ssjRmYAAjYxcSyMg6NPWj42nzhP1ePikSCC17EHSE5KbDhpSVTwJhCac5qM6Ptpf",
  "key7": "3uAjjVuyYu8K3hSNvsE6xgdpFe1UDHzoAx6t2AWmjM3mpnDkgGzyfQ41Ds6kS5pDATof2MrThCPZEWWynt6pktAc",
  "key8": "36DySCQpWBTksPYmCKzcFVoPpTCJ9b7BSCKbsdVbyhzwTb5WicpsrffTpn73V2iHoB6Rc3M37n4RuazbRTPrTTvq",
  "key9": "4DBUh9SbFLEeuDuL7szGpoCLK9iVQt5MgkPi2Pr45CBcJzTBf2UGciXViGK7dtVQ3kf4tDC2VSUXK8X5MSx5Z6id",
  "key10": "BEhVqqDHiG5jdwvFaHcWNxzAcyF5EroVSayEBTtVYBd7s1J27a4J89PoMhtyb7RF1Qga7wiWLvxu6kGGMPYwRYN",
  "key11": "572iDtifTgirzqEYE1f1jbEJWEoGL4T8HuEcTtydy8eV2E8xooRKkmCfswaB9w4AgKZkiS5MGQRT2S3e8QwwRtn8",
  "key12": "3hCN1KAu7CSSthGkfDvvuHfw6949pyAJEmxsNM55fCKCX2kk3eM8gTMCAE9jUV7RRMA3J5eB7N2vTdj9JGyrVK11",
  "key13": "GhTF71VofY5bJPS1kVqXkgLxtGDhBqPPKikVdNQs6oByBVk12LakxJQDbKZueo9B4YTrEZGVnxh3KMPT9NXJaeS",
  "key14": "5HZWDkFozEDSJxPsbXVS4x8F4V3Y7VQ8aoBEHCTzWbiqHcnBJKFmjW4gRhCAaThtHvcDFY4dvFTBU3GhsUgiWNjH",
  "key15": "WwQq7w9vH1awYgVwBCQ1kcik4b1BTi1GyHZZ2McaP8nFu648vCKnVqKNxkPParVJLG9fs8Pd3WYNbRA8bajvRnw",
  "key16": "5q3AgerCfgAGhzH7QG3EozocGvDwbieQB3LurKVXQKK1j44Tw6e7UG5dddPtiW6RDNBbr3HZTHxBcgKdLykZuhF9",
  "key17": "CkVassdJ6zFyCpnureriWkkFbF7e7bjRKAJ3qehrKyqVDN1GxCW8WWwBUwJt49eha5wFRtkQaxkCz6xcFW889KU",
  "key18": "Rp3enUVSftfnyn6H4HoLxHLFwLTCPAcwAHYPi5atP9rsLhdeA4JzzKSDNU1oEqFLb2eQdX7baeJNHfDw3oM78QG",
  "key19": "487RqtSJrSFJqJvQDYECd2CH1zr8cVh2WMzXNNvzDgaRhwB6GVU4Awf7GZxWH6R3n7Dok3cXN2B8nFojndY6vYPt",
  "key20": "23bn2HEin1E2N4WNTfHd3DN97zsdUUWy4EgcigYw1oxymCUHGyUrhMN82rAAiPXSRS6FYeejn9VM2zUUywxCAoVj",
  "key21": "yPZEMFjm2QE5vb3667pyBZxvUKjSn8Yp4bPdsYGKmGWBgmLb4Zyee65PRxf6FHdg4ws73W2BvHCPSmanEB19iVU",
  "key22": "5hU1EiFRoaprSkManUthZzcRsHEnFWAiUkQtDet3hXmFKXT3UEZkqxCEkd871cGibwoVeA4YSXHHZNSACi13PZZq",
  "key23": "5oXmHEfEJMEBUybrNNurBzVRDmqB3Kz3A6DzaqDjauZQ6LdKW95B24vkePTHcacgXb9cR7GSna7JjaTYtai3zXih",
  "key24": "5fR6SboKMqbuhi8DuQBSiMdyJUy1XmpiM7zQDZXagGKvwTaq6eA54shnXKmMkV8XkeiD4WMpfK4cHP3HpwP8efUG",
  "key25": "3a1YpmPyqLJ3b9Dx8mntf7jT1yb7UvMna1EeJzK4436145Da97Ce1pQNrcUttXzbBjkQwVN869SuAZVpvSYjzfXf",
  "key26": "bdf9RdAbEpaWTY8s8iTaS1E4u4JctLBYtuSrVWzkitMK45xhuPufXaFa6stngFQeLTCTrgxRGTo4rT62rPcsoyz",
  "key27": "51MH8RNnUPT8X4mmEHFX7VyHG5SB1rpxMSxGPsg6NeMipBzE7eb2wqEjM3BtuJoSHwMZGJJQEL61kdcWYxndi9F3",
  "key28": "3D24UdrXxfhvw4MZtHfKSjbeo7m7KdXZZzhHTjna8zPi6XBFwTHyRJguM8NgM5DdvEpJuyQgNQMpqoYV1uPZHpXb",
  "key29": "A1HazDWxcwHXLvSxZaEDA2s55kjLjuu3Cz87X4fDkKfj4koLHr7pqab2yCcQ8zbFiTJGVb5gBAA127b3biyWkLo",
  "key30": "3RVW87FY8VB8Vg1ZQ1TW1ERnTV3zmixVNrUp7iYHgSyYBvireQvXtpYa1UXZNYh81qTGsxj8hZkejuyEyL8o2wEZ",
  "key31": "64SQLyTaRb4G9wR7pqZFjchXYvNUkGCiq1vfUqVbVv7SPDFY1noQ77fQFwoa3dphSSG2CJ7ZhQCyUyqh6y81PH1m",
  "key32": "41d9cBFk5jX8BczhxpVULM78632wVN8F8S9M2sVN8DR3VLJ6hRXydKjmt92hWvQuuunzTjjCsXuhwKBh6sifzUEL",
  "key33": "2zrjimxQvtAk755D1ijEJ6WwJHxFFunUHJVeNaUwQHnE4c5ADxaWgtzv3tWTFnoSEmMc8TE9Z8HCx1c8TtYvdrc1",
  "key34": "RspSpb7HqMni6zCChXM2ADHb8ds2zc3BZEijt8L65ba6yFUhaxEWbMnneWfx6JH5uZCucUtQBA8sg7Y5zpVvvNt",
  "key35": "4opCZsdJJzYRjMNLbJfVHkgFFDELoFvKE34X7J4vV2wSN6VDr6qPcjDyaWWocoLuTL7Jnk8fFvwBgzDqeTSuhkDN",
  "key36": "2FcyBe6waKnhtcadS54DgJWQQFqaJXVvfM3pxTSMWpj3MxQb6GcG8Z2p3HS6mpknRKk5jBruHzaF8RjQ2KHSWKht",
  "key37": "5bfx9n9WdG4AeGbDGUSyjXrWPdLr4Mn82uqcx1sRbDHBYPeLLV1YMHkW467VQTuqZqAhP3WXh4m5nM945qD3zgYY",
  "key38": "398pw3eg1zHFdiAmQtSFh6dKYT2HLbuw1ncoTKGHKrr7kmGf8N8A66t5cHaD55G57bQY5ZyEUJw8mpPq995KD5Ek",
  "key39": "2ryfW73gJci1TDzk25Sp18prXWDmKd45Efn4h4X4izDWMfQjXH9pWpkkxz2CUoC742ufAyafKWY6PZKhSGFHJxTe",
  "key40": "5toHgyACzg2b23HtZWQQqvuDTaa9T5iUgzRmeYST67XxkArrCAsFKoyFXJBEbFZZFXwbR8av3SmtxgB28dfci5po",
  "key41": "5GhUoirarqZ9ThkocmcMSvtEPptbZ5RaMhWRbK23qd3WFRGtcicgvJwCXQLxh4ZKDAMtctzFWowtZYEci4NVQV93",
  "key42": "52PYBdLUDc9JnxcfwGSTwhim1uRndwhGtY6vMyaBA5Sz1Tamr32Mv2WWyprPDyNraCwcsuUqrZ4EJvLW67M2JP3j",
  "key43": "24UqbQpYibGPnHAi1kAGviVrAwzADfFerg6jbLNLWpoCEVreHTcZWNZL7RhmjXmUEurbah1tfYVftrRKFF5DWUL4",
  "key44": "2Xhnj5jbkBU6WYsfPc62xKiq6Dc84LB8hE9Lov4jRyMwEZnX3q14hXVSjmbg79e8cDr67ps6rVSdnDZAGvG3Wj7o",
  "key45": "4r2usuauciMSjt86XyXEk1m6NpJBsyB2oywizzv5N6MoRZqLA5M98nDCDqnEXtMR38inBAgiAG125FjGKhkPvd3J"
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
