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
    "5deRL2xDzti18MRoJM93ZYvkg2cgopbcxBx6t4eAUYvLb38nKWF2p8bGv34vuAcDDouMPPPr9Usw7thC6EwnGAkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SHusBRDG7Wb21k6CathiGDdRG8bE94Eg8A6ta4eztan2DVjn9UTKtX36WmfjTmz6s8UesM3GfmF6vmdTF3re9kZ",
  "key1": "449KzbA8b3Ysi1VwjCxkNkx4eeC1hZxuUAvBLsM75Cpor5zd2dyu871RaiLy4jq7Gt1zs9eWr77Db52GrJxDRVS2",
  "key2": "5AkLBBWoessTJ6cPUgNJWzYV2MU97SraYZZfLTms4fB8kzmqQvL6Cdmw2PL7aLjL21WqmfXH5DS4EVN66sWGZ3wh",
  "key3": "5RgoDV3V3uZHU7FVawSXPdP2ZnXPozeP7NsN87tijrBPM2Xw1oY9KeU4NFBnbLR6nBvYYwRYFyQoQEhdU4y2a7Gv",
  "key4": "27nmxM2BoihMaqBNs8iSJBtHfDKqv6nLmGJHwuUsL4oFtPcAVQ9Jt3HxBiKj3FjAZQ3m3YERGuoWq8cE9Nompi3X",
  "key5": "3r2m2gfH6rtTXE34zCsgDwCvYHZ5mwt3dBQGjKURkXdwVkjQvEssoUxbDbDUnjAT7M5LwbP8LFMrc98n7fKmAqBf",
  "key6": "66WaKzQywLcJnP6N1Y4iFidGjhQMFZgXuvzXartvY4jR2uX5J3nScJDM5fN7kMrbFQnLH1D9C89kSXNXCb4oBDcS",
  "key7": "5ZLM5PHbXTmq6BqP9gwLPgksyWNtAvK5d4yEC4SmVXNp3nrg5DGyxvx89ktjNspnCP9FF1E2QggaAXbezNCjArdk",
  "key8": "3qkVmELzvGCazLAR9gAuLg4A1rBPTARUqGuXgE9hpkxmdMCoG54fZM2LyKnYZEcGmFG2JnHqXL3BerA17sf47Upk",
  "key9": "3dSdTr9aFYn2acF7PYSwjGHM2FDivZC389sKutKG9WFbsCW34anyYZAtaTSC53SdexomKnBaGcGaKuKz1mpXUNed",
  "key10": "4qoaQvPKJgEmmHEbZVxZ5Y5b8VWTa5qtBSd2bDbPiMQN3X63bxfrgiXDMvwv85A7npqKzv2554jAJoZ7MG1QJZd4",
  "key11": "5ijajZGPrJhgPYi8cJ5nBPuKQp7pFZzcF7wc6gJxJ2P2X7mxBSh2P54uLx4BZH4oZnTtNBRFJKVVy6uKUrxhMHN2",
  "key12": "38KZR6HXAmwg7JbzNyk3CZSEnbn1t9aKUMJiFCxw3VwDKWRnnqjqsW6odUYWExsV9vpftXB3RJZdcvY8zpLX3C9p",
  "key13": "pv4SThRBxrziHCbVF9J45i1Aez5nQQZm4z4foj94tE5J2JPgRnZjM17n7zPaBVeErPiaDSEDWfTGuKjYBLNmFET",
  "key14": "5x8C1bZiTuRduCDgbGH1ZTvs5HYjvpgXhfHu9dRbKS5udyBXiBfFKgfmi1UAsCqij5f4sKpLh8eXBsm4CSuiN4X6",
  "key15": "4SqMMSUQTzd2TpAeYvYYVTZzVXNVuANBpMQ2QxkwLKCJi4mZJXtXG7yT5xYCwTNqBj7PRNdj1MM6JbAjsD7Xz23C",
  "key16": "49AQDfcfvsDMmaBbPoeEsVnWd3DHwP2XWvWK9t4cV9DG9mDqQ8AHcJe6mo2NsxN54Nu9uknbDeZGrPLgCxQPaLmm",
  "key17": "uKpCHBL413qZNzekAE6seuWjFKUxo1ZtdmwNSdn2rpyiK3v27Kr8AduwK7RUwci9nyveNMdaZjx1bDm3oX8jqnE",
  "key18": "3Lcs6dK2RhUm8ktB9HZ6LFKBHMC72FdHzSaZZfZxJocZH9baBRXzEzsN4qptSFWndQmaSsrkhcbcf4A9UVg2FR8b",
  "key19": "5YWGLzJ68cSvtJk7VmkitNTFkVKsgqfwpzdbaiwcBNupUjNMyZLyWzbFooMPqhEkigwLyLXJooxvPgNUVq8z2veH",
  "key20": "ViuQXxp9Yj7v2KZckpfcXEQSB9644vqHcKxHMf3Bfmv3bWMThWypi8mtsp5VuW6SvvVXWY8gyibY6Ct9CyneLs1",
  "key21": "2rAYRLCR4iDiAQuWVgjdWEeXAoKRgEj6GA9mtUDfMuUbC49uZshuWVeWevXp79dZT96dvhyjJ6s1niE3JdvpsSTu",
  "key22": "4WxWWQX9doAMQ5UKvuK69mfyPYnYgGofVPKzFHYQbYpRz5Lz7sUqaZefSeiutefaRBRV83QhY8QGtcwxuwYDSQG9",
  "key23": "56WZT5PX1jyMnssuQvC1Asx26xN8mdDF9aTGLDbpzxnE28CmGpHJBUBqR6d7u8fFMYu4BiYjGe6T7vwat1AT9yLi",
  "key24": "4oLBpnipArgNgwHRK5ead81E5tKQPK4PfkTJRkzwLwqS5rEYVzvWXrbSoJ5DQj22wX2JzS6VzPVrodSUxZK4famp",
  "key25": "4MZNn5WWiV9wBPnxGs4oX3s3FqDuy2ATNVpNX64ywYp3L4cEmP3jEobaAziJ6KZ6gWhwRaxohpvvyySr9dH8nMQ",
  "key26": "3vP9X6UD7wQKpGvDpCsMvpd2efSAE7c31WttkhZWGShJ3vSsJkFwLHyBNUUc8qGBfUxbTN16eJRLXugHeCXmhZcj",
  "key27": "P1pg48WLhfuK7q4uWUPLqhcnG5Bpx6bdFjJ7C72DY187nSwb3QawLPc9HhBN3415oEWFvK2h3qDD1HL259fEepY",
  "key28": "3EAGLf2dcUWLn4wmGMo5owUVFZUJbZSMtyDF2wfU8eWETeXZD6erzsuE5rGGHFGoDAHrySquWRBR9nbw4JibRJFm",
  "key29": "2r9kMJHVNihVSsN3JuvdcW1HWfmdLvqdGkAPYc87G7xxh7AVA5a2KKo8HbbMbii5E5LKbRs9qgeQ2DGt3RwwkvUD",
  "key30": "PLdo9HA9Eodes7Ggx8KWw93g131dNTGiwWCnRvoQtg7n9EzxWVpn7wvKQVHhAGbRzCbj15rdyKZpgAKeDbLvS1j",
  "key31": "5uUYErjx2aMLBZHmoxWQ4fF1LDMpGpR8KPJeKyr1ypFWUnXBo1EJ9CyZvbvaz8eEjvBwm3euNayGKuaWnbcoEoqk",
  "key32": "3ndZT359z9BxN68MReX9rr1hgmfgwnjvJYTCkPzbyMF9pVKd81VAN3Lu11rmcdvcn7k8Yd8eXzcZJRgBzxH4jH37",
  "key33": "4Sy3GXvjep2ADgtA2Byg18HXjggvCB1KZDeR5mLzchAdBtEFky8fxiHyDKbbgiSWMX6E2BpmW6BrZMaaUnbBcgbc",
  "key34": "3M4mZMTyyp67ghVCiZzZPoANvXWqg9C7ZgiqUPdoQ6N9FuBbe52QDARoyJWZQ6dcVuHnj1YaFj3vbwm6Y3doKmua",
  "key35": "4cgahRS675W1idh1BRozxtq7QBwGNznVTA1oYynHM8qFsJwK6qtjoRaWeUgbb5q2uKJbT8dtZCJM6uz1ALUj4g4n"
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
