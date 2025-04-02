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
    "3DtoKQpEqk6GNpkvnMN63wtD8PJ8U3odFhLPJyu9pwY9xrCxZBSXRFdarJEcx6m2r67paYRyrRjaZYghw7qMNx9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rG2XWaU8QsZaBMccZsurQEAVckKn3L2hCVLc6VapH56VbkcFm9axnzJ5LcPtwCxZVoB5PKVuq1xLLZoG12xCSaa",
  "key1": "4VaahsYzqWfjpGiBLt2iTjPAm7LVYDQAo1yT3XhyRj1KgvBMWQmgZ9YmgPfvXnN1Zg4h7r1YTzDLUUcfZXWMUR4n",
  "key2": "2Fox8gyZBLDUWzMAFwbmW7qWycTEG3PY1TCnSnZVxqXsBmWA3v7MrPqC6jUkUa8ZbQkeXXuxswk6gan7uy4ADGWP",
  "key3": "2A4hc9L3GoFmyuxt6FB428goAD33Sxz6WJ5kcGbHQv1WgC9SKr9JQmdcbXGVYg4DjrgRUCR18PCyJNStZ1482Tjg",
  "key4": "2osa7XenSPYmE7sRA6BqrYcseadJmT17PDfnjVTz3tsMGqt3Yi9Ves8zoZvr5KdVmzDBP2k3ugaXP5HVrVR7tNzJ",
  "key5": "5ursknjFTMSUTZJcEM6PocHyX2fro7x7uk53Rc4PjE8dWT9hWcnxsxkZJPyioYbKBaVZUMKgNVYfkwZtSonmdtLF",
  "key6": "9eE8pKUgXcV4kNTK8fnwaad1zwR7QK7yBs9aSypfCaLyjzkWwxcEcTXVZuaAZQDPr2HEDZgpqpzFMLdhq8pHzXa",
  "key7": "3t818USq6n19x4qT8bLX7V1wFUYVvYMVXF51haiBNEZXiR2RPTRSAy6kfWKftnNMnRE1aAHZwNKuyh99asic4nMD",
  "key8": "39Qwj9syMBN4sYm7uYG3ZwSPkHzJtKXPfSJiefxYfdnnGUPusBCat5yWm1nkgcbCKfojknHXS78b4DmWfY4QuQaY",
  "key9": "58JBTVbsBHm5Y77xQotiAt5VbCyWLhqTMuD4oFfRHKk7aUZ8SvBXe52J663ANCBQSTdcEoNyyM2c4RpfYiw6BtJ7",
  "key10": "5DZVevsFzpgCdhSbyHZv6qA54Cxs3Vu287ngAGu5qUzdcb8JdRHcKUwacDe164GCmX83RkdWVQdJ9P7F56v48rwt",
  "key11": "3GuFhuGRRAKrFBDpK586mZwEhEk7VRWj82QLkbPMP9dyhC3sgtnupdM5UtNFPJR8AscagEqpGQRNr3uGJBdkDELc",
  "key12": "2Z8L538G2o8o3DkLJAxkXxCvheLkWCLkngteaevBekUFXh2JiRtJvvtJqNMAE7eTZ2UHYwvFUkfUvncEyH2XXaSu",
  "key13": "5F6M8uApSQUiS7x4uruaTpBqDWNQZA8jjTwuP5tWUKwsYWCqX6jde7qc4w7j4mzsH84KE3gX1p1GLtKRr3pTbJJM",
  "key14": "299GMr2JRcSD4zHyMsAf8GEDm41W3sRQUYhiyXvRaRYR6SLRGKCwtWvdU2TgabNoWjrYfpvae3Lku2AZJdf53L6Z",
  "key15": "4kH4dHfR7zWY8yfbPmocKPThusMyUb5q2fs1UWhviCj9kCgeG6EAL54E76jZ8rTAQLUncVyETudzYwMiaerAMK4q",
  "key16": "VQmgr5g4Q822jqbbnA7A4hWrC95ppUCCN688hTRbGimfPbSh18T7pyUR4JKwgoGB9M5QRioc5Eq3Tvhx1QbmoFC",
  "key17": "4z8nKtEGqSJ9xW9XgjTasqpiBBDR74aQJaHQgG3uPBE7WpckUmLET5qLXxTi35Hj3SZzYNM6Kbaurmdk7iBmTxzb",
  "key18": "5a9rA6Mm1h6xPs9dY4fbCD1iSaUbtqBgrGx47gbFrHyB2djAkiBeTd2VFtvACVTFCtX5ZuKQ5shWD9HfEu243WGX",
  "key19": "36SbCSvgzjnRdKC99kabvHcWQyLPy5TANf1tdkwtC3w7CWofStnJgbksVPt14bqrA3Kn1JtsfE7xVyCUR83t9Cwe",
  "key20": "5LuuWZP45u3sA8Y4dcWGxZNgzYYSzcHC32NNX7UM9vYNLaxZiivBvKi2iw73HRk9xi9c88AW6DXqvMCPiGQ7cU91",
  "key21": "4zdCYJZRjx2KQBGszPcFSSzcMtgzNFngg1PLu5hABdLTXiGjDsPX5pmC6C7ijEcqALtF7cRYgfShsPHggwfpaavS",
  "key22": "zujWt3pHPZKWDmUtVqBT3Dyf7ccx5Nd1UB88pFFsKA2fyz89WNbQH3epdrpuwPN82aW788CdMqnHaADf57bkvnP",
  "key23": "5REEcjwmoTmh1c4sJp8Gtif3n3be3W7pBbLTrs2b6bkkGpcA2qpCiyCiP4vjRyfbLg7o76xAWgxopy4PTQcsKZzq",
  "key24": "3rWfiAxbfPsemVpNYepkh31RUdBRmbKKtQ68PidwSsQTY99B4dzCXZXEcxMVqrCrmDbjEYboKpjzxFtr4Dc4Xaqe",
  "key25": "5yfDHND7xKNBDwa2tmofixKAVVucMuSGKwrMme4p4rurS3D3fZT119coFxaWWUdsBrTTcytkxBjRtqQXPd9CkdHH",
  "key26": "3efEAeSjkSy66Qq1f5tfeFdADbFJ8he5CZu4z6U8fKH1RbMur3bGMhetwmzUyp9WEepo3JMQTDr2MfayZSZu3pbj",
  "key27": "isTbAoJvgbnBU3aYKKRVXN1L9SMb6i82DYjJkJv864APWQ7ioWKLUeaRz5Rfq8F8WjTJ5upz5StM2gVrePP8Ryn",
  "key28": "662d4wsw6PkEGi8rUjjSBXdPC1wR8wBi9LoUjfo8n5LLnqz98noaPJ3HzHSpuAMg48qnZWrrb18hLkLNQvQoTTML",
  "key29": "NN7gC5ooMhKhdLjYeYfu5AfN1ZEQeWxtWKKnsev3Vk32fSYwHmwp2xwNd83uroQvz1qdpaaJ3DxZx7AbZFMozJ6",
  "key30": "46SiY694gykxAqSHdDkHa1ri8w3yTBQKFgeihZ8E7mXhAsLb12QTTz9uRweY4UuTVu7KXev9svSe9PheeqFjw48n",
  "key31": "5jhPbcsEAW3pXSzmdbqXhsQbzTD7YikPfHLHzKbWeaZEhYWDTxpV3Sx8gFJcjST8tMcGCBHv83yfy3xjRVSnreE5",
  "key32": "2RYF2fWLRGCSeXR3D8N9GN4seHZtxYQ89DfEbTrsV5LVsPjXhoHKBKHCNGxuBjAfoDDxe8xsukR2hv4uwxs5w1vj",
  "key33": "2EnuP2WSXGvoK86n8AF987W6mUFJf8NtiGBF4TXWBtJWHiybyRvi7Fsta2oo5oAMWGNPwzhz51v3Vk6KL9YSoXu8",
  "key34": "5eu6itorpGvqUVEsXVASKUx2rB2ePpychbJfGBWRbbmaWPdMouSDkBVMWG5TSc2tpDuuReErui72w4RRqdqNsxkA",
  "key35": "67cq66Y2kAiSLfpozbMvjuL6R6bY3iynxXyvPYdYsNqHLwGpcj8uZA3rW8HXU8gYFat1H58dDKBRGbUy5VargHYH",
  "key36": "25RP8oJvAng5ft1pbnzKVcouL3EQVSV1La3PTmU3t2c1GooQro3PZyyZk8AaJuu6K9shX3HgJEVmU9EAoYNuJ3KK",
  "key37": "2hmsKrv9PtzMjLagJXaKLnqx3i4gMRiYjz5H2ACJRYmLyegvZKJrSRdNdL3gJN1JX4pb7XKeUCajEFsEs9gcgyhQ",
  "key38": "grgXNaTAgc6cYsebMiyLfYx72ZAtUdQuoAwmAstfT8ANWJTU9G5LM387Ao9ZkytMBXAxoDRWsEFatxWKVU2zJdY"
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
