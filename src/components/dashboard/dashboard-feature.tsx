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
    "5EgzBQCbvUJXDgtVti26PFDBZ4ZMs4hd9W7KgB8qirnL4x5vqSP4Sek4qDfqq5ZbVfiNLXTTHZmAUPsRgLE7f2V4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4grgtuqvhB7WaDyezvRHyAp13LAAcgWAyM14jGweEPzpAwpVhnur4iWgqAwCdrBTfjxwZhhesK4vtNbjAct44a3Y",
  "key1": "5zanFiuJLS8CuSbLmS3XVogzxn8aJF7XCqGyjGaYqu9UGJ2YtXRbmJNNfq6Y7H9kYM5CEdNbY7FhMtid3Ccnq36N",
  "key2": "3t81LQm32h5oRbY3pMoGfxxdnFF1xgekzmEYCL7rykdWxDDtNyQGhuJW24uWZRkb7id6TFYCoDALt9imAkFqsyrN",
  "key3": "47PtfGWpLmVqxamiJ3HLUn4UjCcZT8dV3A6kDkFLm1YXh2rTxYqwJ4mgq4DLMkiGoMsXmDzo857syNa3jGWPcMNk",
  "key4": "2JZaEqzkxTCWtWXADHkguLXCHRymuZf2hGkGDGFc4nWAvULVpWu53YCipvx8t6RWNukcVbzDhv73J1Z8dKpNYnL",
  "key5": "hKxvhTDnHHnd7geMnP6jJvefWfza49uv71dHBKzgESAxs6hAokkuRzhhmZxXtgFT6gJQ4sqwAvjSTK2pXSj9pqE",
  "key6": "3TwTNEvKLAYkaLzRHMfPp3MvUyrcjSPUNyULKNpFDtNMCtmGdayezdVrSjBagFTDav61YzuDpwFA2w1VU4mEukSB",
  "key7": "3FQSzhpMXBJ57YyjW97bHayibnREovqnxYaiYVPhcfxhJ6BDxJH31J1MPZaE9g8Xc1beLJnEpfU9EvMDG66Yds61",
  "key8": "3oLYEvD8upFo1xyDgfoeKJw7DuHvus8be9WZp5uzpkMPqezViEV4TPKJXXhsJ8gjqbVRAzBWSHrAV5fBEzCbHMgo",
  "key9": "2o56yMCfWycp9kmZroiVwiXEiJwFfZo9xkbyhZKQ8asijCdnkJDpKjNxGV9Gp6rBAU6uyTwU4w3JRtGm1CtGBKNG",
  "key10": "SdVEnfvHbU5PJTFPpLfX6edTpf2GkRtTa5FztiqRcirTdVbas2nv7NLyhQTbGTXe5JK4yg6TsU4rmnNVwdegGPD",
  "key11": "4TmRX7TiRGraVDPLGdjU4pKbMvDaZGJ1j7t5iE5QteCYQL2ovApXTpz2aGibUfNBXGf3N66vhcsqnznpcaB8VxTN",
  "key12": "3a5DjrppY4UkcevX5aqLo2nZnVjG2XXya7LX5hCxxJLmj9Uo3Qqz894LBDzUadF95Dnh537QbV7vczuY4LqZ6ATv",
  "key13": "3arndzmNV9PkUcwJsNe7WDvXvfkdx7mx3As7LcJUTRGbBAsrHBsN5rAiPSNzPkZjXHftgrzuL7RjTa3sY2SvdBHx",
  "key14": "3dCAVCvcmoxHBYH6UdrA2SgfS8rUqMHEMEQjBNsVRmr453JtCWm3eRoHupRgYokJsRHhudsh1o3JZuegkAsLB6uA",
  "key15": "2xAMVBaetEwg12JecAUzvFt9tNFpHbvhcH5K67QDwYZUEu26WNyyFjXYR5QM8iocDy7HM7PKcaNXF3VQob796UbX",
  "key16": "244Fwk9Eaynx4msbyhx5FRPRtodYHyqKSfAi9ama5WUQCrscRtBecyFnj6z6TXD8uk9FiXw6PmWPLR9VAphzXi9H",
  "key17": "5KuWdJoPwCemyHnm3aa1ADQrHyG7m6kywU7egiNEptARkXV7ZM8643mxSuByLXVBPktdhkSizpdhhpMrhpfpx76L",
  "key18": "66EScBH6C2EUFngUZMzPghYkFscesbrCYYvcMDibJUQ5o5msTj8jm5jKN5fTjiEoi8v9uxEujSDkLGebHAEfBQpt",
  "key19": "5WFbx3xMCMYRAigqhSUGVqEMxnstgRKHcy8ecee1PSaKWbu75Jw1kMRb7jBGHkgKMbv9y9QhVcFUHtjYaa4b1JUt",
  "key20": "5FWLCQXxnrFQzW5xeWwYVQb3YkBxQgpw6AEKttMTdktYZKJYj6MhGnqY2X3zDdLD28LToUBKnEA7MGk6p5jWhn8v",
  "key21": "QfVtcGVPVeSRpKbFEZ5Hs9asKEDYsktg1tVQYrTmtM6z63E1QeyDgxKWttkwAhceCASMqDeyLAeTBVLbrWbS1B7",
  "key22": "24NGrbjm3c3rzJ7hTAQZptNHAGHeDem82Nz5kRRjc42FzbpWXnCvYxGFm6Lrf7i7jdawouVRnBowMSWPBBtLBEw3",
  "key23": "5a1jG8xBuJNHT3D1R4kgZrm9mKqmUiYeTPTMVNCwd4G6ibpw3jpW2DYP7EChu97ihz2vjDXJKkCbHULiNJFMgVNx",
  "key24": "5qMTJdfCcYvSbCiEyTdqK8fiUgPS2xcTKsi8bxiZrwi7JLoVehCuuXAxjEQN9uAX3dPs3DmQvMytspn4PtYWFucJ",
  "key25": "2UrD4xAZvkN3gfKmxvw4xVtUm1HWBNTT9d4RFcrJqqYcQ5SKyoA3HDcYjvTcfjyRJyjMcvrXT5kNb4NLiHSuJeV5",
  "key26": "4tPN6fz7JLhkUqhQLwFBEPWmwNs51L7buNs2kdqfEQBJkWqzaN7fnXSdm7aYFWy5kv4ci1bxWaeSuNhnatqYfMPy",
  "key27": "RVUs4gExGXXGFEm5o26Qq3URuGgwwtj6SDDGiEUkJbLsAWeq8RVgdj9hSpHxYiRNirfHMKvRCWCEkFo63q4nGUq",
  "key28": "4FHkiSu5EhDcaJnE5dEeVduaq1Kxt76AvbLEcqN1hqeesqkunhf4baFR7gi1cS8ku5THpfcise4XkekpZoVSkQ1V",
  "key29": "41fYjBRnTb9gbuak2geByv1Uvt2nvpNbvzbegEaQ8Q2jok3V7SBd6rXkxyc3ZSgFZQU91QYbvXkW4FL3hZ34HNj2",
  "key30": "3cQRJGUnGkFohWFbuKraKEJEjo5tJMbCwskv44q8aXtucraHTi4G1PLMz8Zi7uBMf8zaDxWuDUW1tnCEPzPPMUsQ",
  "key31": "5JBSfoXvoLhpCaMUYptie7FRArWwGyzQVPkfre5xnrjSueP5YsmAQegyuwM6UErZXC5BchADJCFKB4Mti8xymBLS",
  "key32": "4NZe9AQ4Ddu7heRZktfC9Q6Tk1SG9F37CLXtz2EkxwsH5YNoqhxBBbnEanAWD5trLeEFKiFYL9wvdDuH6RR9DGe5",
  "key33": "bug7PNxe1VsLXEJveYG5CAbrBMSUozp7PVZNeQJS6qUGZ89HQKHdTybDwc9FF73QE3UatgzcjUgMPwDZC1tQyvL",
  "key34": "2q9FF2RthDLK1cR6JtAastu19QRCZtrqiibes2GphiYwZZhpexABNa7p2tBt9RhtdoudA7fgC7tjaGDms3AJ8tpm",
  "key35": "629omX7nRNorVzvGZXUGDAUbdddcJqVBTYp4QWrkBTr2wPSH7QTRYxZKaqqwtd2J8Q54fKRpmujp2PiDN7eNMaL9",
  "key36": "5D3yuyzTLavwgaibpxtpFgoboa5M7qQ7L6sgPeZN2hRbaxLyT57dQuphsS2P2ppLt2jjLAYEGPUyWQYseMqSsDVA",
  "key37": "2NxgEU3GwAbTPhwHmpGpLDMmpnZ5fgEfqNuQZSZmDgJhpZQ483wk4yWz6QaLBz84TXxYh3rqXBQ8b3m6Big4HLFW",
  "key38": "4pt3GwEebgKek7GTU19yw8rdMHCBP8qxKzrEdKmPttgwi6qQZc4W7HHvc6n8faZXsVNdrMZAZFDYXasJVJ9bDYVK",
  "key39": "2rmJKQbQHEdYnJnEt43HKNWzNEMgnQbpRo9s1TSDqsydtoCRJiocxCjfS6x2LwFdanrpSKkcegPzWX2Y2CmD91De",
  "key40": "3VWNUDx4NMY3SXZQgtsiQcCq4z5k2xkdodxSowEcyfDe3xwYWL9CkqQEpRG2mDHooSaYgrbr3VGA7356U4iGCvmL",
  "key41": "4RdpAA4v6AUx5fLvkkvYtfsNBm47DkdQhJKKhSjE9bF57uC2cqaaS2Wejjsf4kgvAbChSdDrotCyCHo21DjXrUR7",
  "key42": "2kt2afDkX6pJvJAWcajowkjLzUhkExkKRiFPFtecxgZ7QUvGvVcKFXBrGgBBvVzcbm6tbnmoFVCjuGmfYMpmCUpa",
  "key43": "39KQmCSR5vW68zjTNfhkBv3TuyaDkgZf7xYdjDYbpHKApFR275qrFCfaoK1sBNRzYizJHUKU3hwzoSBtL3ZZLsQH",
  "key44": "2NRApu9SvDqZE5FBHfz4AugK8f1XKBCeAXBRQqxvtkozvFPs2r3RDK8eiZxc3dzTLkgG38U9QYXYhEBzUM2sCsfB",
  "key45": "4KZaUMeA4SDnudhEBDkaAaqNcXUDBLtVqq9HfH31iuKR5KkjcQL73rmzbV4m5k2Ta64HZRjQSbZwZzwRxXiUPG8G"
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
