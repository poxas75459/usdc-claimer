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
    "5JbLAodyMrgNaNMP2BNHGHnW37JVSYgHivGzTwDekuvouu5Ni99Jpq4JUwQbvA68XhFH38vPdrj3HAZTz9mwyL54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HfHfM9vWJXuCEmedjdALyzK93xvczSpGdmo24ven9uyLvczGVVMnuSiBsVL9oCsdVtbWZZVS1p9p1XDzYiwUhh5",
  "key1": "5oNTyDaUnqykwNCH1eHtGcbTkvabsYZCVNBqCdts3zfeQQs2xE3mfVXEJq7ABVdUCJv5XcCz6Mm7vXJj9esMgBZd",
  "key2": "4f3JsM9ehwTYnRtqiHjpRjyw58XhhaPGv3Bh7uZR8PKWLayaXrzPQuD6iCucsYo4FhR1xRDW6WrHoofFpDakx5RA",
  "key3": "2dz8fPEfRYWa3KHH2akZ79JDEUrgztjRRWqz2jB6pfKMDzXigevJ3vzCuvDmvnybf4Q3rXah3qZt455qXjPTCgy1",
  "key4": "3iNWPaZrH5Ee8UVM4jhQ8CrPGkrXVV3akTG3NQHexpES8J6ANE373kmRSrTZprpGLDEFqrG8MLhUNCKndtCr3B8V",
  "key5": "5hU56SAFA91kg7tPBDsWZdsR3nQ62HZgsnjbXwP5EJ4W637j7hftG2mPpFeb9vrTnnJLn8SfZAdAv9LnC1k9WNdS",
  "key6": "4uGN4NCfsw4EKZEk5BcVmwu1oU8oLRjcZYFpKmwERqFnseqTkszCFofK8RJWoEgw3V97B233t8VEqiMXu8XMEg95",
  "key7": "3mtnsQXjXBJEjnXFUgifxqv1Na3wQwtZonNDYfVZPfjH1meswc61zYRHVXYJLtQVCej9Qss82ax8WBuk8HUWpwhG",
  "key8": "wcW9a7Wf59c9cXdiZfPUvvqD4AY5yQ7bf2BPTBP19Ub6nBR8ZhHmRL3XcTPD1iA8iWF8PeSqZmgXubpWcNDmDZo",
  "key9": "5ZtsarVGcbJPyn2GwA9RfM3qcYEnY6MxR2dmyNi3DaGYTu6cyP41ECVdZWVAgs3HMAsinGWRsF6tnE7JqDV75Zjy",
  "key10": "33GzA69koJaDHbKAsCjjV9x9wW2aCxAy4TV39WyAbFMY9bmaApP6eXoqvyrT7daZg8JiPfKMbb7Msx6WMiiFofDr",
  "key11": "2HagD5pScUdZ93MHr15rNrcY82ZzaMgsrWDo5M4uspzV4RFKVSPy7sPSrhvSj7ZvhD3AJqsHxNeqkehe3i9KnNFB",
  "key12": "5YhgGB9Qgr1C2St671qdKT2UHrfUdVot4YhjNX7Wivk1FrZzsw7zCDJsTQws4NnnRiqDS4LvqJpuYxV77cPfLePP",
  "key13": "2GdQofv1Zu3otjUZ8eq6pUYj8cnohM1mjkk8SPkQ5DrRgxvyHCDfpBib7R6tL8WsbszZ2wHxd2nvaZNSkXYZhYuu",
  "key14": "5ThnxNpghaccgkUuQhoUut3bo1SZCiu3fNwUQa9jvd8wqS6WCZSVZXHsnRyAUU5nMvKkzoXrZHCYAbVxdU14ZGX8",
  "key15": "2TeTy1hgADrVmtLKCEoZKpDDifpKnv5g2cuBbuT77xabafmgS8PdBUK6824Ndjnk8hwV6yDrc5EnmNpVwZE9NSZn",
  "key16": "2iWBx4qSGoSwxcmkRkRJsiHD8FPNdERMm8V2P4HDVKQuFdXB8XM9r6WGxED9y6MdV9bWxpm9navqcHseQKvqyhLu",
  "key17": "4wx1r8k57agAizTReiqmuowVTQo3Co5rP692zzsqBe6suybopjVkbKi9YQQgcnVbRZiEFKA23ZL56GXDixwH9JbT",
  "key18": "2pBCo4oyf94swx9gjY2JKmhiarpb9GiB3mzfLS6unUpiaVmtyLrQz8TJcGmey5pEgDmPMWfvjyt1Mv3LX1UPNTKj",
  "key19": "3mDN32nfCFkemQ7Gp6HU7LY1XfeggnCxM4eKuMwmH7apyMw9jTC8cVmjfDt1kyozyDPZv2GCwD1x2BzeXwbhwKU9",
  "key20": "3Emm3NPNR3vdCEzxyogXdu4fbJci3m3wJ7u16ZLyHciqoA77ofCHdW7WDwXZ5a78YPHToewFxnwWmWzosj9f8SYw",
  "key21": "3DTqa66wdWLTu2Gb5s1PnFR5WLyFTJkFwm3DAaYyCnSDdL2JuqckGVzVLzJgN1LWnREZQrQFXMoFFa4pwfwMCEA4",
  "key22": "Daitkt8Amc7GGfEnTVPdk67oSDJQAvPdNX58gc9NRQkVeCFdbtcPzwxDwU2hMX8fY6riaRBt3y6aYz7ZRjufgMg",
  "key23": "UNfcharsp2MvJU9mbUJEYauikntQa8uFaYfoLvAyhXx7MNUCe2gZSqZPfrbHrHVZ1ocaTX4R7krVHrzR2vqwXgq",
  "key24": "2Ngsey7j8Utmbn8aFhYcKjdSJT2NhGw9YjzgfowkjMjiKDjFPiQgx79zNDpczchw9wVmUmeWF1pnigfGp8wXC1tR",
  "key25": "56uxh7pqVZkNeqZbX62HASBBpnmvisu2L8NjUwS2qLJB3K42PSQ8muaxC9MisXoimzumtzduwhVUyG8FajiPuMeU",
  "key26": "3EccE5LntomCxgfqQVg6xSxNf34bWR9fyjdNdoznJj6cZQ5bGQwpxHj2skH5rjmeeQVpDfjnLn7R65fMRTH7NPwm",
  "key27": "2DGfwnswxdoy6Gnm3vdBgwoYGBbfEtPHJBYtdXxo2JGyniSLcLhrhyVJaPoMjUDWpbufgaMNqSK1SwUKZq1YcTj9",
  "key28": "5W9SZz9yByB2yX1agfRCRFRRkJGFDaAk3X3kzeSMBnSDqZTCFJtmQ6sCvp48U2Zc7wtquJWWkvp1mYG6MJsihQSm",
  "key29": "2sP3VgYXnoKEMcMNmW33LK2nndQ4z5565t6oYaLJTkNEK2KvT7AusDeLVYXRKbEVbiRPJHtknZp5yfiZfDS5yXNC"
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
