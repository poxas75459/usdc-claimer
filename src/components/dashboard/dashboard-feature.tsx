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
    "44TDTHPXwBiXwvJvpLZ87oJBnMPavp78WMX22vNwafeKa9tBKKWUb4Py4sMar7m1erBfzsQkvGH7DuivigzoYJc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3igZB8rc8Q9NrEwxkivGR7oJwqpnLPZoLjJbAtUzCqZXLUBn64KvTiX1Abm8VReLeFu6j6SMER9MCbaFPiPkoj5D",
  "key1": "5V9AKbcim9TfGFdBeQgCYivNtbmefApuHZnn688PNbUWxarwWrYHD92nRx6uRS2ycRdhMnx8py2YSPyfbirsro7D",
  "key2": "5e8jYD1o2zjSakSTXe9BgBcJRfJjRwyKkaX8hT5HZ6sVgeaeKbt4LtxnWamGaoSk3DCRMKT4rC1cbjtWriokKPzE",
  "key3": "68z287Rvdz8WJBGAVubMPYw9Zti5gVxbaZJzSJf7topd1DWZSU1V9FRu7mEg56zJfeFScqdHjE8baQny13YLzHP",
  "key4": "4uNfUGz13M6uFD2kGkCsY6t74n4cjCB4F184q5wNyZKZXCxT1GSDMVKftyLVD2yYjg2vMksYcWcJZTLgcHNBdLDY",
  "key5": "3jonDP9Yxtk4Joxd6Rp5YUVX6NNcgkUNHUrNZK9nDoqNnkDVrayR2j33ZRmUaQ14KDWfzH1WvcWmNd7nrzK8jdjr",
  "key6": "uioFoUHsag9d1idLPo3TGEDnpAXpwypJoXF7qZSYT3exugYbmB4pyehBzQmmZRd3tFRVqhpG8xLhBGUmzwtGSoN",
  "key7": "4bUGemFLWvfBZi749SFMrwoKc3AQkGW5mXHEFrS9KaxZq5DHeag5R33eT75unppcBDc93Z6SuuevTVHsvDGhyJzJ",
  "key8": "51EpPk2hbRerkSuqcMpu5Si2NrCzwx3pnmqdSrLTjQibojEc3c8ycyTHeLStFZjySoP52ZfgX85jUBxhuqugJ82Q",
  "key9": "3R4hMYGWoHsMnCD19JWd6GkXybT2SqwkcqgoRP4b4f98nS6KTxpGdA4GTKHYDX6DeaWPZKQVtXHjirpXWabvfyCu",
  "key10": "3wPiAfhJom5s9eJuzNTcSC9P8QGUoAToJtqAVHfTDQs7CWxzcD3cq7yWinxfn6M9ARWroWExyuuZhQaDN2kHa4BK",
  "key11": "4593P2nj9VqVRc6PnnVrR76AJftsv3uACsDzcpqJbxKsJh8TUXtkXUthBiTum6pxgQSTymzEP9BvAcqcS7WoryMn",
  "key12": "3QF3sA6sBY3bLMrefjc6FT79wgXoGBWdeha5uAjJjf9tyBgEtjEHfXGewiyV9zMrDwGjjwNLTMjpKRnDB2WFLrAA",
  "key13": "4jZuMNKx7yFhv3sxJ5fP4rVZS8wySyZsWUY3LDDmrQdHciz5PHBatunWz9BCXaiZKH7LGuA6bph6PF9r6f4rMUQD",
  "key14": "4t6H44or1gUTe9ZG5czumJhRUdmA7rNUJ5FAoeohXkCXf3qDPBXMFkMFGBSNySia96AxSVuybH7qJGCjuPyBPVMM",
  "key15": "62TxPdknz3m3bk54SppMQJGP2saUovgKu3R1wmy3iLzYtPR6mniCbGr8VQtGL8i9D1A4vDxES2Xfd5bUzTjx5fby",
  "key16": "5WaompveCmDEo9KjBBmfthgXkCivbvobr7aUxfxNxMvSjbLgxuXD4BCPzFavfSg88WAJNnxcaC59gR4M844S4WtM",
  "key17": "3HJS7YKQqWdPPZx1CB6CHN43tYUBoFKWLkjrcxoQyd2mv6RrFZoQqYT9o7M6Ac7r18PN5QqmnR6zYVuRW91rsx1Q",
  "key18": "3PNZfjM9ShhPH1mPD4wGiJMU7rTUjaM2NNLesksHkCZEVR2A9nc3PmFAmtzadDv58cscnwf9acgkYCLcT54hMLwa",
  "key19": "4R3KQUuZM9JF4GqkExqST5X1tJ2Z89PQ7g63v57WaGetB2juS9zphxNDA6JRsqPBThcWsdkXRh6raTCuzkiye7jQ",
  "key20": "3PKLBSb1y83JctzhnD6JAc2vou9Yrh4RjMwLHQCHmoxtJfo4nCqzqyUmzLpMPPmRZgodQ1ZWMwj3pHhLEEL712GX",
  "key21": "3NGGa2uz8sXs67FrhWGwosLheKjs7wD59fgsXVzyPXGRJeH7HmtDNxBGdHqfVvfJsYwGuHpM4qiGmBHUUHtkyGcd",
  "key22": "3ZULaPzcQGYZe2eBPMBco6hVwaVXWBRRG2myGTRcX6ftC5EpbT7DMDdVEWprySttwW1L1etzeznra8x5aMvcSoBw",
  "key23": "2gJAx5sqcrkKbkziDysB4bBLv3bdiT4HMqdHmUm96XLny4cygavgYifW4X8kRpsWMUbGtVk4NMUsRaM2exwwUWt8",
  "key24": "7gTQ4hQZ3NwPMoxANSkAzrM7uUHyGLFwpjFG6HNj6EG3Vw7jDScChELAJaEirCPsmRv1Bs5aP1ChXk5CUyL14BJ",
  "key25": "2AFAhVEQCuRKSDVPJSe3z6bCF3qMv8U6mo16FcYKEHXYtQk3jugz7ca4yFgKpj73Yb9Ud1TVzWUVzuyGHaDzmWir",
  "key26": "2iAQBxZBfS1gcaGCe9Babbsy472JaKxB687wqbUkHkwMo1383tzvajawDeyKAQeSJmruAxNVPYdG267CfA7Fhcxr",
  "key27": "5cFTcbi9Wv3YfPAGDZA9iSb9qN9CHKPTwfr3aB87V3qrZkYoHMyPGhFAgfP7gC1APNmN4WsFQJJbVwdQME8guVxV",
  "key28": "QkHHob5Uf69buXFHyEaBSvgvQq97gJtdCsPcf2cEGhg5cZQKKhXJZdRWwVDBWrbXQAQKnEy4cNS1PdsMSc1dhEn",
  "key29": "468SxW33LMRYxfLPQuVoyzc1H7VCxYuYpqxBZ3G1nAVKqJKH7Lids2xh1WG84sK1GBUnCVaqUqMVxxEsNuQ9ZB8V"
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
