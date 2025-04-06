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
    "2mYSpaL2oVUjBr51gb3Y4oQEQKMfrCze23PsZrJ5rdbV42c3PsTzG8qLn5MBSpohdC5taHeLANGm9YGco3EXm9K4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rHXGt8un92P1BTBGMN8hsnwdfrqdgoExUJGxoRkVAdhZbpN5Av4yC3uSitnyuvEjiLoAi9H2jKQ1CWgUvF95rUU",
  "key1": "5C9X3RmiUvnEhQaeRZwahg7fmUGrUSyFzYgruL4hb9zSZwPqTeYkG6RoJjRgbmyVn3KS8MA1dXVcGzJWkFntW3Q8",
  "key2": "qonVrifEFLkYGDs7EdEVNNRNpm6soBYY6XSf2XkPwLa8nTmVbCJVC53BN2tBrbXR7CvprHZu4CvQgDkwCowuT3r",
  "key3": "3QtSao6qcxrWWQc3UTTbapJRKCk5C821pTebCU6UTx8C9rg9azA4KSkTo8w7c4KJeawhybsNjzPC1xYdevRKYAwk",
  "key4": "2pMq8oWSKuVPGYQcyR8TbgRCBgqRp6skzE151RHu3F8oFMm9oiRiKQBswgiunXBNhLchkcPFiXHVskoiMfNokHcV",
  "key5": "359GK4RpN6LanPYX2mjZ3uWkEFm5UWPr4eZimPjY5woGts95XSxX2ZceZ8doRBiC7NRASkoZvNfiZb3X4Wue7YWG",
  "key6": "38jUV43nVAUAB4reyx3TQ2NZsN7ASUyRRudxFyBbEnABMhhH7Mer8WEjvRAnuuTPDnSuKQou2LaB2dC5sn7KcSqG",
  "key7": "4VqcdmmAZLsY8evPEEJE4gkFzpacAPGkRLwSnTgHE7kuL1HGGatgYs4xspqEAX2VtxtewM56t43bmPC9ohMB5fW7",
  "key8": "nhuJyboMcBcFV2Q6Y5g7CU3dub4uk9WUcSudqR7pE5tTUi2V1g7KxWe2RMHy6pDsvFmjKTGUH7shDXShfEobMxP",
  "key9": "3ZnRxTY3cwJVHqeazz5Bj1Tgr9XPYQjqXKC2c736pXbEENc7CCtB3ueJF9pyjyFsxJFFzb9RRQNgaRixvN8DVKxQ",
  "key10": "3Srv4zyZsYTDPE5VL4u5EEVKHSXqoQDcetuZNhivi4xWLRyHufUqmtCwJG5WuS24Kvny4QxagUV4Q4ELekpdSF19",
  "key11": "4aXay3JcwzkgDrrSQSdUxb3JKukBmZRQcNFW7HT9zXsTbt5zgd3vxu8tU5p4yHwenBAtyHu1kMyaAWTU5zjsGHGm",
  "key12": "4jYpe5i26pitdVWT7BiVqTq932sVz7Qby2zNf2ib9PMAJmKfPTcV1Gcuj4fGZSMoEyvRLteUbvgPJGF7hk9hSqyy",
  "key13": "39TfzSckPyDp2C42eXwaWnaPZPV9dmNb3GT2NGoDW8i4466nVhaCgeraEBV6dvQbeCbhyUWQjhWQBqvuZ1XMJtaK",
  "key14": "t1fsyPzpYon9Mi9PwcS2pekDNN4zrwf9zaGQdT7RePGxiWtVWQPdLTyCWm4bFDnxzvPMJB3BQSeJ6AkBsBfGGtK",
  "key15": "4kzfnAtcTMzopnprPxQ4ojBsApp5T2S4ES52EXwU3Jhm229uciuuonsFBNuo26yqSMzWXEiamiyTyto5qeFMgZHh",
  "key16": "5VMLXq6QeJnoW5A2nAVR2xoStZSzZVvMz18ShSvabPPjZA8k9gAJ2oJdic5jU4rQYL3Td8phci2yVCVk98qwtzv",
  "key17": "4PxeGQ4Rx8f5x9SqLvq1AF9JSWFt8LoSKuB4CnLgsKKpQFQdsPU295XP95aF8LfWPiBvaFyL1Nbiaa5TcvbURMEc",
  "key18": "2yQDsgoaBXyWS3YAMM6nzJJ4cgoZ5g7gmLQ7SVkzYgoG7cQKcFZS3aWBssJf1joZkvNfcnsL2SEronCg5eUpE65h",
  "key19": "3cdqdMXWBe31B3timieDSGKgRyN5kfoQmxBnhzmSsVaN8cyGawULUbEqoaNTHFdKxqjnYppUw76EkH5EeogR8vsY",
  "key20": "5WscvS49nUDMzyJAk5orW5kH8QV4aEmFhVsnWzZQSt5yBce9u7DXWeJcTSXBv8WjrqgPVnZMtYUiyaQph19MpRgw",
  "key21": "3aNSaYcexpWXJbrpPkyXz8HUQwqTrzUpcgZMBHv7SWegFxFvxnC1Rz9fF7QhBSv96iAxHEyWWiEtAGYbXCxqNhxM",
  "key22": "4L7oP6agZ8QuvJU1dZLXBZxdKP2p4bj5xxActt7YA6GajxWuj7ZPRmitG93t8LNjbTKWgCGGkA5VfaCNSZnsKVBH",
  "key23": "3YeyY123afGPcEn37e4gXFv5bK6mJPrTKmwmskS3xpUZEjn1ExsyS19kDVX4vNrGLu6WJ46jcuH6FG6GvS9r6FQN",
  "key24": "437iQ9LPE7YTE3GLmZVw1quE2VLswrD54MfZ2RR33D8zsJVNjABKgSJKh91PPbPT2RPQKUTAPiKsAT7AqU1wPAkF",
  "key25": "3bYLihCCf38eRops759wpmeYDutjkrpSamCeTVZkRouoZhUfQt3nkHaELLkRHZPhgPwideMmL19JQPw4amggfGC8",
  "key26": "5eghxeU3XbTvPhuB1MprNQ5RcE2kJf5rcKGvJx9LbjaQkmTB5c7skY7mW142UGtUPqMQX3LVgbkExAfWgm3pb5wn",
  "key27": "2tqux1tKMLWxgGZRCfFPkncHfK8E9Dh4ECNg7WgERprQq8evin7tK4D3kvdqmrFp3p7y4trhe4QEnGycgCVA69Ws",
  "key28": "5rycX9zKbfmkSmUXZAKRNYYe72Bs1qgYgFfYRc7NdqJqurKuaXpnXRUc7WCK3eMYMsBPHUuJZh2WJuaGG2hsLhD2",
  "key29": "5QQ6GbSquWWJgbpUjuKNRJZx6agKYrD7JGYRfhnteLhJ9NFr1DvA8UnUJREWwWvQzsvm3nziYdUaHCGJjxLoQrXd",
  "key30": "4SLHMkD6SKFm5XACGkUykQkUcokfAgKEFAxMXhtbjJuSFJhk9DSvCjAK1pkQRmBRnpTdPztepQcARAzRoLDpZzt9",
  "key31": "5Pb2ftVuCMhBr73aL43YjpjRWakJwaSBdFSPAemFXyJ6KcwAJCzxttYsewKkUxVmkazZckejb9vQg391qSAAASq6",
  "key32": "27X5gB9d84qmVvgjSSf4E9kz3ZfdmjvNtzWb6mkbriWgveE83gKv49VspeGbsPvN7A5ewQmiDMK7bubqmanazmRY",
  "key33": "67pFkvfTnoML5gE1opcfVAQmLQSLJkG2VdDbVyw5MAHZM7ukZWuXfrAJerngpPqBzJvQ8tmviMiDUhEnUgDWVL6Z",
  "key34": "P7cBGjzX4P3F8iRzLKgFDD5DFBqbByBs5opMRyrSrEJi6F3U9h3eMQcUvaJeK5WEexgYnkqUjAZTBdaywQKGUpj",
  "key35": "3usVHeBuejXyhk2138A2DdEZihpoKGRK3remmVKLHrz7oVzkaMcLuooGRU6EP2iAmGzaGGfb2jdMreQjhvDHkf3P",
  "key36": "tzVA7peouoEVfSTijneXmvbwS89dN5GGjwSd8B4kHTiqYbM3yFvi561SDN6UDtnmbeSG7WH26pW5nPnsAZt73oM",
  "key37": "EmeUtnRJUJXGfMDnumxmKPBqePMbtdwevWN2bAhCjWueAAvZFbx7Xix35i2XdgYhFxDzJLEdRxmtkn3Adam2dqq",
  "key38": "74DpfWDwaXL6ax4EBJkKpjCvG16nqbRjs4MjADksz4btLibiE2raZvU8pCtLhQiJMbpKGQzpLhYgGHNAZ4RwZnU",
  "key39": "2KyGqRfKDoup3iWGJaES1bourFHFbmKoZNXHwfhiCAgbM5Yj7v9nRYNvd6WuJCC1pEqtZabeWVavinZCV2X22eDA",
  "key40": "4GXaPaDdxViEtyJAZV5sTnmb7oFjkrUAwPiCyes2NvDSM4YmzYPb869KFkfpgQCfPDSvqj4iRaepLz1vugvSmst3",
  "key41": "5nsPD3b8XBPC6cxTLytJELJH9J2662GUPfoSaUYwEQmWTrhWU2Z7Xgq16rdai5o7SeSmReCBMppJ9WJLfnFgXb57",
  "key42": "5zKcu1iqdtn6Y9u8akmHc42Dp67f1S9yUgaX7TM6DWKznkbLLmT2UtAVhg7AyZThDxk7U5HxpCyVB5y6mfer9any",
  "key43": "4KMHah2EYBu95JJiheTFVcZnK5oLvzwa9RMG3sK9iDdMp1XSpJNBzxj5AjHjxthBEfKEF9zzHnybhvQ8pCRLVn4A",
  "key44": "38tZNQ1UPNxrVQ94mRgDa5j81fVUbMfTAJh16KQPcM1TdfPuGFgJirLoDiq8C9iBYfkvQwZvUGRU7EWgdFngvc8i",
  "key45": "4hvQNMAJdbe15TARSD5frG5AamRPg2tEPo7tjh9HyvtiBM6WNdBpnEAzRj2wgY2uuj1LCJeumVLs1aD5b57TmqYw"
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
