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
    "kF4dvJo7RncPNSmo6j1cJtP72M7oCXH5rPFqgkG5NnNrjq9oFo7MTgx72pUGFEuySuuKaT7r76uHYztVKSswETW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KvzwjSLbsPca2tk4BCgX1bCGU3JqhvNCG5H6D88f14zmKwAqzHyArNXnGgZvJ3wHCbG1sE9X9pArjeipPPDe7FU",
  "key1": "5Qz2W3VUqw8U58c3yKMnMcfVbTzNrGNaL1kQktj2EMSeFiNmBP3TC8NNsUpY56JS7fizARo21uKhzoZpbg3BE8em",
  "key2": "4p41gNEaTo9t4RKsBvoL6p6XFey12H3Duz4m7jugFKga61NdkZJbupmZJEdFPwEciMz4mu7dsWXGEz5t7gzD448k",
  "key3": "2kMQ7zseZR7xqkL3W2ZYDFkFozEpnRXVDUjL6124gJpBc8kXcM79okcZ9XpkS9Lc6BXDABKd9Gpm3DUZFek4yVtf",
  "key4": "2BeYMfyonNwPHnKfuWGptALvDHc1jR1ad66cb5dv1nVsRyF3a4CH1HoLzXYeKdipLwtG8HvJN7aPDBPZsBZWEeKx",
  "key5": "37HvT1wNRf4ASGXF7S39pE4A6QEmzwura9YdDhtj7V8nWW3QtFRL88qMJyPjVE7N4hFYcbReBL2CAFWkxc16xf8x",
  "key6": "4S86qxZFPWT7x9Zx1wDxsYypRpQ1GDY3tFcP11PXCAA5dfMNYyW7VzRGiVjS8Gdv2C2du22eZWRffiRRCM32Rpo1",
  "key7": "NbXFdAeDcUB9DEtAnhUEYZtFTqqjyPb7U8wWDoMoiQu1rTRb12rHHdMWopoiT9mN5xRAcjtCh8Mr8TSDAPhQied",
  "key8": "2Pad7aFqJb2ju4t2BSkBgY6bBeX7gFKFbcCCTB2e1yZCNKyZEEhzKSPfWQ2woFEM6ixhbQn3mZm38sB6qS1eELgH",
  "key9": "3zK9ATzpj4c4uDnUbEWAGf64mU35DohhaBbRBTe37xqoGPxMiYFonnGvBhCkTm31PQhDjY9zMew2tqFeEGTiCshC",
  "key10": "3WAg6L8ELYVWB4NTkZGzLM8dUW3mhCPoz69Ttz2PndVL5ttrQdqv4xEZCtyX7jAo31fPGoUe3zRkTPePLEhtJzQE",
  "key11": "3EhR8k9EDJPtNZBf6jWDdUkNo9Fe2WJDjNRJ1fpEnGBHJ34WgvWH9PWSWyz1sVrPTK59XhcXNvF49ioWb81MiqGe",
  "key12": "55f9dfvybXmfoPEmeFau3nhBRFhnZcdfpQEZxVcTLrwhvfiMxpYsT6z6jQ6G8HS471D3LC8BbjnPvAaY4CTgtkfm",
  "key13": "4jeMen766ratXnEXRa91UyQD9rPdgKviXWNfbjiz8hpVc6TRHbuAESGwWqKYxxLwQZDi7rEg7ia5EvPGg6cFKxDc",
  "key14": "4ey2YSSyUyfr2QVBUE3TbrQgRR7YF8ooHqQ9MgUpvnLtioTGvtZ3mWRDZe1goegonvcq2BjxTsmbEFZEip4bFfvf",
  "key15": "4aVkXfaUiQDeaxaKo61dv3XcYAVzGByd8X4NgCHE6rDqXVNxLgpFEJZAYvXBzX5LwVqd7zg5zixnEhE9MBWG3eYi",
  "key16": "3cB4cgBmtxDhwPFhRPj7aGVNkRiQmnPGHTNgRqDn2z6SSpgtipDP3BVCWS9XxcgERuffdobER4Thm8ccH5Y7dNh9",
  "key17": "2X8XgK87MtgcNN2WPeA9nYKgdjNW9RnjWz2RFDwAuofpngKn4h5FiWYtubuFsUoetzEu8SWpSMALCJP85juaDdEu",
  "key18": "ZymzkebGa6yMAzo5jf77Fw5pkj3XSjgSAizwADfERih1GDVGLR6eRZWh53bYEUEXxXi6owy7kDrx4QRcb4VmPAb",
  "key19": "3dzt5hmgJyFaT18dFqY8vVExGqF6sCWKku5Uf9bXL6iiX8RXTzeJZfTaJkRuPAv6PxadnMEC1vmK9tqdoBSJLxJz",
  "key20": "4e4F5xawt8WenkDuWr84xqtvdh7dExWgw6sY1EC7x2JUZUosaXKDsoaGADnoDW31eivFLnRNzvWwDs8Nz5CJVaUa",
  "key21": "2Da7nkfTotBeH8nis2UjzR7jBayuNeSnrgkf6i9GSGKbYcvn73RyAKaZM8FWAtecJvRMqNjM2cE26ApNET8NKatR",
  "key22": "e7sP89kZjgKZ17mYaUQsPM3Nc7YXQWrUpKeXnQ4f1piQKfGs68JEeBhiZE9CwTSiiNfvzkkf5vVFxPZN5ZGd8iP",
  "key23": "3E3cpq61JZKP4FSNTUHhrQJbuUVKdYfwJNQesW9p4QKtvpY9JY58NLLDiUwdSGFcE9nPt5P69EFAN1LaT42iE7Fw",
  "key24": "5fQAsFaNp7dGyPPD5E2SbtMnq5Qk2aSgYtA84c7MYNsPx2ktmEggf3HLcDeaeegqtuufJUGiDQxD8i1LrXaY8hXU",
  "key25": "2ydHNZvXcQZ8Siy9Wd2RzY2W9ZyWi7KdyJzua2cXqKbBgreEznzSUngK92Rt9QZp8WEFAqv3HUzf1uL5oPu87ab3",
  "key26": "2myPsjNnewKgFWzQGGT5Wfr8kXT5BW1WcovqgY3knUGBAT9bdjYtCJn986hyyWf1ZoNfKF3T7ecTJ92VgaRm2xFG"
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
