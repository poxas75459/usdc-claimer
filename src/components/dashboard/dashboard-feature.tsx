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
    "Wicoy4FrYke6xbVbpkExjNGDxQeQDjEFEjBemFCSayE1EQats3Fg9AKnMnWyzCRo7YgzcLrFsmLyDeY4CM9YUgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZsGnHEsjUCkfq3f9Gsf39GT6jhr3YMuWj84nbgwmYHx89KMF83tHJe6Wn1QEMsxSbfYSzUu5qBZ5UazFaQq6rLZ",
  "key1": "5ppHBh377L23dZXc1dx4HHhuutPkn1pBzHRpfMKEQpFSdwfvXHKLbKTygYq7R49LpwUTdq9xR9hbUqPyjfN276Pf",
  "key2": "4etTPSniRr13NhQ55wJ8Ctcdud5AronwhhrzqVXRw8XyWL4pFHZZFKRM45p59fMY27VFB1KqpMECRHXR8FbHghZY",
  "key3": "2o3f1bhDN5Ksha69P4BzFB1xKSH8EyGsyzy4VSrn8fFhDEo1r5W3wDCyqGCRJiLG7GQvRcxDS3KpbAWPXqnZARYB",
  "key4": "MunP63HmoYgprpBHkhySL8N7qKwgA8BNU4XsCTPNjmfoUV1uqXadMEGYYvhhTD4UMSVhRPLPbBLs2FeqVP6APgd",
  "key5": "tX7uqfCZBdhmm19dzHhoWjLmAhBFTgXMVWVj7L72oqTSgFYxkUGMHEpnQVB7ujtSKZLnKYxuUxhC95DvQtQ4SmA",
  "key6": "4vS3UkKuC6D1aHekmPK2g3BENmVbsMk5oqqQXnLKv1xFo6KF7XbpmVbyAtEeeNPHnywzWynAxT1L9gaSRGNLukko",
  "key7": "4t9eSTG6utwwxgqcSTBffNKUxcnJmciBz97ApyVoEthAwjQ959ZbivWzvfywSxaSEsVfutuY9rMQNhZzsawwU3wQ",
  "key8": "2iMhvpM7XQAUhxB3RtXzGfuzpmYKg4NoSY7ivEP9fp7zE8rmmaEorRbQq25bEtcFVNqaBjUSBjQaAaRDoes3BY8X",
  "key9": "37gTjMNHtLtwRjrEkrAgZHmBebxicyAkDMBnM722X5gEz23xRB8TGQL3Qn6oeatg8mfVFBzSdtMEyJ1VfGigT6MA",
  "key10": "4cSigy4zoeJKgmVZ1LxBA9BZYZGHk1n8WddAeEgzpXypBGudV2jHhDt5FF4Aw6na8XZ1TDSnpqF25VFaRgiJ7b36",
  "key11": "vRd19gLtgxaNyfgBbvpz2EUKHgusnLfdGUfxP4xGm4c7uL4kiLxhdF2M8kq5c9xCPZtzDMQXpxfHoB1N4kSEp7d",
  "key12": "5niyyotj8eLR49X35zU4tnpdkrzYr72TwoJpXawQ5XNc1qam2rdihY8KW1Ut8xCteoJSkVaCBH71xFR1D3pA4EyU",
  "key13": "3QvrQ33g2rLMgP67nPRJJqLiuvz7bBPc9Sz67F4PoccKGhrN81gv4iddGorPge8kwwhmDdn8KyG3MSAcwQrseLts",
  "key14": "2QsUrQrh6Z9yt9jya6wgGQfH2vU6bjjSjhhTLLZX3QQxK927T9yoDddNDaYR3Y7qnTJw7jsRjuMChBRAhe2yyvQm",
  "key15": "3avzG57gtkhFMfbteXhyFeUYvi1K8sLBAgKs8gmVXPJ6ZiycxWvv2zJeGgogqU83D4AushCpwGFmzC9Mt9HSUrox",
  "key16": "4ZNkgdn1x3meEPbbaWEGzvGD3EsQh7u43KiqvbkkkLTRwJFZ83gJ4YiYMH8hUFg7Pn4Ydzuy46GqX8zwPuQUZvua",
  "key17": "DRW11CSGR6H8zd7tR6FWMGCZS2DkSn6KVkJuF2uSTq5LjA6YePQjdyzNLALkwjUEfaoPSHE3aB1SM9GArBugWxb",
  "key18": "4xWPnpixjvQSNdNtXyM25x5Coi1TC38avxFzsVbAknShxMmhYM2PQnCWpwHLCLrQhUTjVZ6YiZvrP8rfoXyBc5js",
  "key19": "4TH9gwNvkhgPYKg8Svh1UyeNsqpzE9kjvAC3rQAosnLHwYan8KuBNG3vW2zUPnPsanD7TXFahwzJ9jsXzfSUTh2N",
  "key20": "38EmCgc89iWTFLnzuarCk6H5PGCBwNW2YTXuJRPHLDX9c7MLAU7kQ6sbGCmxCaZ646Ed6xoWJNgZenxnBW3JhaJL",
  "key21": "52aJ3vmTCGTHnVmU8G46bRr1uiAoG3ccHKQJMvVMDpZ6q5wwiS9cnwq11Y4gcE9HG9kZwdj8BHPWaGjWPdYwEqaP",
  "key22": "mzde6HnUTB9S2tE9xn7xgBgvkbpAxMaFi3WAhLQkJxbqRKqNd79hxDKvSW2AiDRMD919UwiRxnMNo8ArwAb4cPd",
  "key23": "fu9uBVMpCL6u94Hkz6kVyPNtVEn9LG5xcwyGG17EieJHEnTcupstaM9DtqXXBXEwYkUkHQPhLQ7DJksQbBtpzfA",
  "key24": "2AXiMuprTtRbUDJwwLQ4fWBDTUy6wVxECMTpaCHSMD7sT2fwZkLUMEjbocajsHZKYwR7zAS6APsGCgqVXYdpFtSP",
  "key25": "24hHawvn9LmuvFW9Jw7zpvC4Jiwo1konPPWMFymRYEiKbVygTvjR4gpJ7GqGWcPK1wziUxWbRAqAeH14EthpjJeV",
  "key26": "4Mbp1ZLf6JiL1gzeK8tcX1JhNyPQFuxJW1Z5drbwwy48sRtMFmsKc5zDS9D41CW5RBdLwWFpHGJay7ZxTZ3Jf1ER",
  "key27": "5ubrentRzWPhdDwEAyYZCSf6xHoDqAkKrrkfwnFuVgMGAjrmoGsuy1qX6LMkPQ9pvCNH6FdNFG4soAbnd9hYeBsS"
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
