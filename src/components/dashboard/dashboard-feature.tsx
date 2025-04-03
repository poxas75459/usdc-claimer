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
    "5yK4UmoiVRKcUsv22qGNBkjNUimCcDNmWUmooTeMTSKmRuEfF5z9wNVbzm1TDPXSAB4BMrAGA5rB51AUgQfNYdGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vip1D3X7khrkEwZZVmhhiC6g5CjoySyZiXpc689ZeKhgZB6ZhbuYRiq6jmtxxWGTCpi5j5EobbmXwgYfCrgqdQq",
  "key1": "3DvAWp9Jbbt4dDRNxPTQhMRPyJGRnFzdcx7C3JrrR8AJWc4pedqYiGrTmfGFxvqaBKx2feewXrjqRhGJNps5NyEe",
  "key2": "3LuuF1pRkjhnNFsTp8xFRdcBfXNegkifgsfjQ2N3L6vi8aHc5bX2KZEoMVDKjbt854nw49y66heemzZzPW2KqKMC",
  "key3": "3KtCCw3VCEdAwD2Wrfccy4M2NztgwV2bP1gutX35nhPBjsKP4E8VER5J29Q9hb554pU3JwWG9KFrUYaL5ApvaQuq",
  "key4": "2Mop5rXoKb7VQArombSGFLXSMtdvaM5pkEPHd8zkGBYfiAFRqwk3YBXf4JiCaQvxpzbE5HXpz844tRxwyks5AwWr",
  "key5": "58qu4BN53pCsvoyXC7nNR3f9s1pntfo8fViVmvpvs1pV6fKZjXXKvM8F6M9DfhC6YYj79NPJWRWvrkpc1FUtwAMB",
  "key6": "37wYG3JnTj8ih1ztL3eoFwThAhqUJXoRdHkkmK7iBrJkCs9mbjCDLoim1rc17cw3sQr8TYhxEXcGipNcgTDTeGcn",
  "key7": "25CW7anxeYvL6pj4TbWxjk1uvmsq4KFesXhxQxhgytNp6Hk71FBWbWjbb9LooRYGitmPbw9yJfDW7u6qxQXmfFjo",
  "key8": "2nMbaGsmWpmWcC53UvF2rwN9V2AGSxUcceCcNK8ezGUaq5TBBnrARMGRsitwHC3D87DFnaujxQeWtLtYyaDNTqZj",
  "key9": "4R24JpfNjT7g9Wmdpbs2AsgpKWyDDcj4dP9GjNg8uJ6qsLC3fwkEsgxKos32hs2E8syHjeCqhBjo9UjWjAibYYJV",
  "key10": "p4crJVsw29UKUW24XU5prESHaD4GbqPxPGFbrQ3icSMotdP4fuHKnAhA6QRuNDPAXnZrn4B15N3pYPd9q8BU5oq",
  "key11": "4u5LDqzZvcPgtvkjJdvt7WJzZqqMUXXeQyD2KPGKpnyAqpLADcErBu8fWiwSMNQtwuC44pqc4FGZrBJmvHBZtxDa",
  "key12": "5CqwTbLGqFP2fJo58pGxGaj3Z3fVKauWv36vthkAQo1BikUPksBKstQdkN4TRkQEbW9obWJnzHAYRr9aRC5e9mn2",
  "key13": "4o7wpiCGTZzpjz5ST2xGoZgKnTJej6Z4KxqBpShtA4LHZZZE38iuM97LZtSXQpUADwajChQLmyoZJi3eycFmDefT",
  "key14": "5pB7nnnsPVnkvaoZptAu7GbxXbvs4q73ATB3DZewZtPhinK5RG4tZA1UMCWHySdXDzy4fWpAZaAhMrPmZ9qrKABx",
  "key15": "2KFTCojaK2z2dHPTU2CnVSiFeWrA6TZ6TYra82jgq3QQeEy9ReeXp33VHhwdEBqqeqcWFYDDw2vsLYGg89PzQxFx",
  "key16": "4hufhsLeAKgPD9D1xKen5ERhHVTqcWZcbhtKd2BDtm5Ccw3puVY77jUYjdfJ3KpUw7PvLmXcXzD62dyQqpMi5Y1e",
  "key17": "42wVTeGYg5xpjxWySwCXBVWLYZ8otik12kN7XoY3gJ3xXn6A8fEfB2Le5ySirtMqhksabppJ5pJibt8XgReXPeWv",
  "key18": "58n7cgHf7dKVb5GwkSRzUUPEFBxyzmZY11EmZ2CBTjr77hEvxLiV2T7AsBLkG9TzHFwUWpFZtCDGw9GCyfRRnUZP",
  "key19": "nvf74Lr1oAx8v581xtfMXwpA9yEELTDNw5h9W5Sp58xiaUSYisMgQ6KVL3kdHoQ2qZtTiUqUHLNVAYkTsLnBQGi",
  "key20": "6SyzNZC37Eb8rBD3ida91SXgUBH7gKFnQy3yX77X7y5QWgUDkEkdP9RAKsSp1A2UojYq78h6PkFaqpNDqhJhANp",
  "key21": "4uFEXxU9PbnYdn79hrmtzxkk7NrZfnH2HLjVLf3yGetKHEiRLqwxohEKrTUbaRrBQKtSqdwSdw8RuAWjvFPuZbBP",
  "key22": "AVjq1YTTM3vVuQesP7gR86oy5hVtWhjzxUu7s1RfBQceGPGLiGY7fhjm4cscdRbJNBF9o65PDTdJWhWgHknpWzB",
  "key23": "BEcDegnTyEHxRnffnLCYC5BwyvyzjcK4w6fboqhjkp5AM7JF8AGrAMvxHab74B3RowTUjJvxrvboesrCRWT9mVk",
  "key24": "2wqtjWRsmdD3WEbuGrk4LGqApZ2LH2QhYgCMEvYBAv8S4FNoFsjVKEhDJFmZsFZTqhR4vSSvenwTd9MawgugGbUo",
  "key25": "3jF5pP2yrwL3hbS93xpThL333EH9kZJFNrtxogU62JbqvtCaXXARPhEBT65KQ3wyC2hDXHxsc5z2nm8RsS7UP7ya",
  "key26": "4TF6JQv4AF3bgCGaMMAUtQkRTb8XYPy8eNUetXfTdmPRSAKg4em3UZtHCZPkmDq4atdsvUeymJQcHavtkSRYKE2v",
  "key27": "42Ee8WaGmR2bPJGesb95cwNqQvcBAEAwAiGtLXeDbiv3KMegFJREGWQ2pfr1WDSBaRttZPnVtBC8RSpkmcat7jRT",
  "key28": "3QtbSyi9nFM57DYCigj2JvEWDBULyYtg2nAXBW9AUpeEMt4PsTyGDaNFjCNVSzsb3fvxZqgrJA4spjuDHrxgthCH",
  "key29": "4HyvtaXrp1yWtQmCBeepbVLCRyf1ZtZhgTVFs8TS4v4CMi2tmaA4Eb9nA6roqCzvQsVPRVPgqsk3sGVX14RgZzac",
  "key30": "5KJCcssNKCc7R3jTeKyyuWtgNEQSpJP6JWXfEQoexcp1jyhckAXogyjTfBVxSyutiaxfiR8Fh3Vw6zLDCJnLttEz",
  "key31": "34Ww3LSwkdLjCqr9EiERW7jAoDdhThdDXiBvz66qDxxTPq72Afrqyoa6eZgUekDDVrDuwb6AxNefvWZecACrA4rv",
  "key32": "67HbcbsS4Psmz5SuEzPWsUvpY22wefHNzURQSep941HnSZb7w3G2cgb1tPeuPSWHNGdvT7w9NhqXBzsodagnWg1m",
  "key33": "49JKAvCPGXfSJjXAJVfqAREzrhzSiXUE3p6JnLzxgH8Bp3Uy82bgBgLU85y7vtxo5q4aPtaSoRxScnFLma9gFrMT",
  "key34": "5FB55ECvh6qYZqFXwgymdkVCQJmpryH8MjXTVzaPBGSHBtdPKUwV2CjFzwuUVPcPSWo7UbxJNbuHAZyjBGihnLuw",
  "key35": "3WD3vZtEx571Sq6smEbrC8NgGEc7QrZkDwWZC4tVE786FK2xEzULdPqJKfuv2xVyTcbqdiwHZWjWzrET42DruZLu"
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
