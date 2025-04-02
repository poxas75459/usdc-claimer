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
    "23VaP5UVAf7zNbuFbBL6WCE78JEeNKN61VuCGtSic36NNYBjYjxeSQarERUTTbx5TwLUwvAAatCs2W7oXcFLSXce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4URCNY6CkwcgR2FwnYxqbGH9zmPLmzu7tj8Y3gtt1FSmGZhRiCJB9WuhLVUoJ3FLG3D2ARXViFiZdaeG9G1y1QJQ",
  "key1": "3swdZLwLmneGCcYG1HX9s2qn1jK8gwL7mCRhDyUiWVM9NM37UtvHPvEaTdViT6iRLZ8nd3sdz5CLNWMgkaUSyPoP",
  "key2": "4bENVHtPoFXVayyAwnAdDjRxqueRHXQbqtnCsndzRRoXredw45drY9PakvXG7sM6msDFdjW5UmijpCXW83cFyaqZ",
  "key3": "649BVMXYmFsXnb4iB77vZoXQRR3Lmv5Pvv9BQS4rCu1KT3HkdRzGiwCw1LbwuizXJyni2QBvQUDY8xbWgkZkHF7s",
  "key4": "4yypBSno3xgRp4CdNypJ1fMLaohS7zofW72xcuNQEEibp87DGdrMatk4zfg1iUkoV7BmiTatMKYJNRsa7GYj2pBH",
  "key5": "5hWfK66z5jAVW1F7fnVRAcbPoJHz5ukHaH1ivGbt2L2GV3P6poismBNXH2hckRkcPpYfEMT3Rk72e3HVuPgC57YY",
  "key6": "5CNxBSjCZMEmfAuNtdsu1WHzPPKZkA3NRJ5gs64o6Y8RhmE2KEsCgVJwZQWBRopMvk7y5Jz2hftEVm6JNGobd6rB",
  "key7": "4r9qqcGv4ymk3gn4f88K28a3Xofm2KcdnuT5Y81i7koBGuVsL3JAPCPjgQe11yvTRUkCeSo5BGz1AhfWc4zoM3mG",
  "key8": "26YVrKSyDTUywAaqE3nMsQEFkZiCqQY641kekUHP63xJAPnawDKVGMHGjnFAJx5yeonLoC85Afg1ZYTEFXLGJpGK",
  "key9": "2YBwU9DZbiyP52ZNSLKgTjuTUENUnZy6DcEaZU3ZUPqBMtCSHgSx3KuoPNBvGzSoSG8XvFwEQLVgy6eGjNjvW5Cx",
  "key10": "y1Lb7bxyey4XHPKsYrsa9Wb7yxKYJ5bLaY9saJTwHuk9sx14pXn46AKnCjpLnBuVBUFMmGNZvcan7JWh4gYqET6",
  "key11": "qzohfwtrpmXLDDM3cjLbyQQ1fPE92fc1MFjDRnuL6QXfTfAV4ZdnMAy9sZWxpGunPjyC1qNUaHNmEiJ9nnYmNEb",
  "key12": "vcTPppXZgYunAWZ3kK4b6DtKAiH2sFcJkTXKki37tH1SigHgsh6NUzb3UdtDQmaHfM4k4Pd5niTvqtLU5eAEqFM",
  "key13": "4F3kGc4tVpyTj3wG4CWHJeXc5F3ts2avGuomNaEtmrEyFqKtauvkLwzrw3GHjNUfZMJK4cMqNszMPyFCKUm3qxK6",
  "key14": "3pdhvHYY96nHAXNGiL2yteQ2z3pfAXzCMu9ySf2JPogW5B8oJm5s6P7P3Rwi5Ft33pLyyziJt1THCdXdWXxqLcYw",
  "key15": "2vkz3LKuU4xx6bBo89P3bLq6LFcntjmyybGQ5jAdu5h1zMGbzon7FybUYiUaFFURNHWSmSFXPZz9vybjLJbnjHBV",
  "key16": "3V7EK6BCykyUUGw9DVBJf3PEzab5PJpbeCMCqkRGgpwK4uwDnhi1xygggBK2HTtH3bnwijUeFxXi2BchMNfYv6Yp",
  "key17": "5AdaNNdjtbeLxH5pED4aAtbTv31Ko7M191RYqe5UeqyNUzYcJe548taWQaWaN4VGFWGNdSa4V62ZjPk212LN84u1",
  "key18": "4jQRjJiXBXAvdBowAPF7piugmb3JssDtKTNSA9RpcS2tvqPje56VjJcLnhKJVP4dSXJoJ7EdTAoP7bgnLqEipvhd",
  "key19": "4rDLDQuHXsp5V2565zjnwx8m2HShqGDiqa8xc9qu8jFmy4m7C9eXSSQ2TekbG1wUmZXMsoWk9mVPxtVS1Vdcweh",
  "key20": "2kpFyCvLgaayQw46yfR9GZDmyWGd73xcAam8m9TpqvB3bWGoU2tTG41Smgs44L57sftkfi996Ks3BAaMpAPGizYi",
  "key21": "3c93ppDZ2Y6kxij6T75fEXEkqAxo6AeAMxQ2yJR8LsvRcXRUx1X7XxPdQewjsFUVMaF2CAohjfm7nCywbX3yutQ4",
  "key22": "3pVLebTErz7ThjUubijzP8pSawZvchRYkovECL4pJFSd3b2UuXTMoEauYKxsirngNp6VaUWukki69umvDAZA2MS5",
  "key23": "3wJ6pPufuTfceqdJehrT4mNiUjFoNYB2G1zrUj5pEyVNK5ymDrCyjoPvgzbiePeD2iqbdnb6rZekWxiR1tiDv9Ry",
  "key24": "5ypQdSKbqJxPWAVsUWLqLqyVBYey3P4xFdZ8PfqCTsmR6ao63SXwjsQcPFy2M6t27JC34VfZtubn6izEcCbPZL5E",
  "key25": "4wsvDNp4u49fM82mzPeXsYyGwZFLMkd6pJt1W43rykPMn7CbEG5U59MkN4KvKdn9cCBQACSV7cZDx3eHa28nt5YX"
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
