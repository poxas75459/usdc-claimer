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
    "eMAtQ3nfodr3BiQpZct85jtdCd6uZ2ioSaWEDzL6teKPwiPw9ScZET9htv2zPK5QwJ7a5svqEfqRjEDxd2z6Gmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xeed3QMfiXqgwS4mhBCQtFADUgizNfSW6LAdU5tqYCvEjfXYc6pcsZP6fMAKdfyWCbAbmEVeSbguw18249g5HpY",
  "key1": "3aHoniLCBeZRmeFEnaAJrRw9CQpbUucd7q5AwEffqf5QZ5Nt6EtqDyqAUFUNCEfKyMFZCdhG6cmBtfv9hLqrBfQz",
  "key2": "3pp3vfbJFFYSKDjE8jbSsWF1d9wrcT4NK8ybUcCNAWp2zVQphbdybSiKi1jp1NAsDN9rfYTTNz9ruDufpdTQsjvM",
  "key3": "5Z1ghPZG3qZ4UKG357wGcnGw4ybHaiWN7x3ah88qoM8NMpDMwhQXKTDbnLzBSwLTzLwVEv9L9LygqxNwHBgHLTtX",
  "key4": "4tbx3VDThQ4A44dJuRfL9K4Meq1uK9BXxSksT6WnyG4Bxgs7NsHQFrBiNEZKhsp8E2pmt78bPRu7UzrAygQuqs7s",
  "key5": "4jVb7f1Eo4jDGCz5KR5T5fzXiqt7WUzHCGoW4NckiWkZGanQvCBX9czNUCGw4wktppsi4VkqBaYcLUBgfuJr5HZQ",
  "key6": "4msC1UhnbiE6EHrmVVhhg4tpPcsKH5gn5vyy9a9BEiT4wCzXK8raoqdhUsK4tDRSAk4Wgi2nmaoKyWkbXU5tDLer",
  "key7": "61pMj3eYB2vdxJSe3LXdWJr9jB7kXC47jJGveQKZASvgBRAn2pu3K43ABqSRxnXoepy91j1A6umR96eMCGRLh7bq",
  "key8": "4vTXpp6pPZPg7SxX7pYNhQZCgtFW8CsXAA6UwafaCu1EVcMa58tNMMurEUxktYi8wdQsuZWWXo71RQYb96QzosM5",
  "key9": "4U5j5ipKntv1V1ys9JmEJzPpBLvWBXxqux3VqGSw2DqXxtj8syw2VxjayUUEQisxRT6Vf4vj3r9JDgUX1aDDs3yB",
  "key10": "4e1rGc8MeYNsd8cSgoyPc1Xt6um41v4VpGuaUkucyqsmpjYZ1JQCGHAXdGGd2rAkFrW2JB1w4RCsSFzfGgroRJtc",
  "key11": "2WcuAvJbPUh87Wqk2rWeuZukhDD3b6gVWFyfEBeECwNfbcdPDUTKaHRGVuVuCzPZC9wP77JEYNem45zjm5hiBNxh",
  "key12": "3NCmuSNqVXK31EALD4VdCJbKM5q4bNviKMapanY8fGbbqRxdesseoKcvevnbs7omRn6LCyqXDJN1nTMMrWbJ8TW7",
  "key13": "64NJsJ1Sa6CY2Vpy6otspL8LXfNet2Sn6qTtx5DLmvn5AqUdRXokU8cZ5BtBmpYS8D37s4BJsFRGKhsZV47Dqrg6",
  "key14": "5e6957QR9L82QhiSuxuqjrvvqSUNKHs83kBmyG6KZQ9MoXB3d4mrbMEfjGWxDKeVAvZ25CvMK7iXzLCzSFFc5Kxb",
  "key15": "6z7m36QdKEHDgNMP1U68LomMCWUNcFu7QngbFKijXr8QjfEfJ7TDnnUVaR7mhUbNCBXDEmD2gkkJp7Pmxct6L6B",
  "key16": "3dBtacgqFRFaPtGwNiYtDBGT96xiZH29UA2hKGJ1njgGK5y1YMXP5phmvhnuKjdfyyuMmKNmHE1W7dGySSYPFwMS",
  "key17": "4EozRmtbpoC6JjL2XYfNrhcHcSKhe1PYffhqo7w7J6rZguuZrPrE33EQ5knMXFhGLHqNtcpdjMdCjNdkUfeJUY8V",
  "key18": "4fg6xux5pZSaVvq82rJ5gBLxuo6Qs4CyqTzMSZJQcNFCa6r7BHu3nJ18f2NEFwJajrXTDYT6ZtBstrDd2FXjxA6y",
  "key19": "3VJdbDJ25LoGpakB4SkSkaaWF6YhKr6vWfjUe9DcQSnbRCCCmcthaLqQgAVAsC4gL9PnaP3d2eeQA55KBtVby4Ug",
  "key20": "4pTmGfnerLfPWdkfEMqCFc2Rd3rcvGNC4RxWzSgKdg7MohtLbX3PhDvLLx8iFJ8C5uDqKEF7eyKjRYhKhy1JcsZZ",
  "key21": "3V6mTGqMSUt493xvEaVA6eiegNLfG5S2yUpkwFxJi4pbxWnz5j6h44Yru2dS6aiDpxTP4hRvFLJUgixPrQoQ7P1e",
  "key22": "1283kGFwwcVCdRCMme36VsbV6dgTNREvdp7m8i55NrxactpTT15rZsd1y3tQw4HdkkWa3ZzdbjRgM7cjRd9NGvwg",
  "key23": "4Q5xtXFGwh4SoKVs9pg9HHcWNggKsLcVeLWFTMZuRhJyTPcgsFfDxQ8tDqSfssWNWCgdGhoZV7vohYzpugkgEWGo",
  "key24": "gj4hDCHneo6mfDAus2reGTjvVPfYGChzsyZvRr5NTPHeq6L2BnRUe43EaKy7NtzcetwJw8utrMvrSHLmYodEJ2b",
  "key25": "4g7dy9ogsySee1ebZcxU4rqhrB9dcDec2j6HSb7UMeiQkjEWhdACSZdcFWP8CTqrLNb9MJBJNE2dFvBBUo2rF9Tj",
  "key26": "2hTe6Mdkf2DtPRuTeN3s55qevZ93Ah7EB22YnYGjPzhHqa7uniyMUrvZ9hWy9Szs6rTogpcywaTJXdASkFoyFvbs",
  "key27": "4yeb3ocNNamMtXEWjpWEMQnKrnZWXF6Fbqzw9hQxVygCUWqq16B8PJEJ3jRsQZEQHguyKYtN3n7J6vozN1Hh1X3Q",
  "key28": "2Y6539LdHiEdJSSf7MJDspGPYgYffJ6p2Gr3gnk39GDNkoXv8bZqfkv31Nj5SBrGkb8AHcmnssYf8bF4aqmkCajp",
  "key29": "3u2DZpD3WQWhBjLSEY1AL3uVPyxfJ65Bkp37qy8UeSkNnxgLGDDSLhSLZkc2jRUQHvZz4QhnDNCKCmoSHr2s1EJA",
  "key30": "2P7W3zeXNVsbvKJBJY7gBHKzptJ6JTKK7PRqyfHiGS2QhAie7Bv6PiBTuy3NgrEqAY2gmRr2yugK4FbSRmuTuYGy",
  "key31": "21ikDjh7CaVfQcewmnh48HBMFMHxBJYmM1pMDwWMQcRdJwLrEn4RKN1NyG6YuYpZSmSYpebh43K11u9W6Qj1mgJn",
  "key32": "23newoh93bwXQKGhi1ZuVdY5UDbhVzq7sEi46F5tLbQtcp7Qhdia4gjDirhBQWpTzzp3Z6sLpTC3jbzswhHTM2oY",
  "key33": "4m5WD5ym4N8LbSJyUHz4YLXZeSi9dN6PoB3Xz5yJzvxDCTiiZmoYzPMHrjSbmeEzt2gZjNwCXfrqtSeuY6hSWdzN",
  "key34": "58dYY4gqyL9Z8TWGmqMamq6UyEPKNenJgq77Zuc5o6vfDmdXJR1pv4q3mMpU4G88EiTmDkdUizYspYkTQaH5fmmo"
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
