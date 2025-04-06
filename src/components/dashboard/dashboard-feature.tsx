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
    "AKrCcXvsWohApZTPJEz8You87pGdpaju7ig6FzoKg6KGmMPrTPRrcuJgaYkXCAHrm6D9ioob4BnXWozAN1yRmPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3by7ydT2tKbdi1zhZebenLkL5jiWprEbQjhmSHrm9WQQW46yB6yU2SvBwsGMP4g6t1UuZh4KnZBHfv5wGMrp8aeG",
  "key1": "3FFjdZrgpYBBGnfHusGppaqGrccyr8D7aS6t7ESuPXFKh5RN9n7n9egZMgdW5j5WSfwmLQTZ4EsJkkL5je2s1eU3",
  "key2": "3rVxNZXZtbwoJeNNjbb3fBNfTFuB3UjSaCNXwFHCmPPnhuUNTpNVKv2YwL7osCrbLiYEET8qgmE1ShniB8SrAQCX",
  "key3": "4YgjXRxAzVi3CRD84YGsVZjbm1yCea72JsujPTpP3Yn5pXjEiucs6ktdppJmHb37ixfQqgTiFXgmJREipY48S27P",
  "key4": "4DvJhvEELBezHKiSXcy83fnBbqyLr3UdMtF5cf28K2eymdzBsToVEHAcTjZafKBzwDtBdf78agbHkNDUnbAJyPmN",
  "key5": "33gfimo1SJ7cryG8r6q8xzDabsw7U7G6BVBUT5rgfS6vrMuuEZTaMyhfHvd3BB9K7xvgy8SXhNCiyQCBJWKtFbWG",
  "key6": "2LEU4ePccnjJjiVPj1C77oVmV4ZjHBYRTPMfhifd1MzqPLnhauE2gvSFGcZYrTkk16edDGK67J8Nmopa91Q7UF1b",
  "key7": "4ME7gbmrZa2tA1iThooi5DDXsZm9GnyhFiV6NV7egKZB1EY9zW8jRahXTTseiMYhtnW9TkJcLJTQEBD355XL3MWp",
  "key8": "5R4Ymb8r3R4DUZmLe8LFa4UsDKLbnJA3MVXSaKhkf8M5BftGwwbDF5sb3xbWLYqmVNNejAk44CS79LyvA9ovt42Y",
  "key9": "23rJ4AkmNKaRpJ8wgcWTPBhsdS6iJnvL5nRhdGW3KmbahwJ8W8jVNC5fBrb5FHepJqDyuV6FruRJUcgBiXvPsrKa",
  "key10": "28WfCNfVhYRp2vGjVmY6XdcTg5r3kRwrSqKQQdtGFf13rEkDLEywDxeuoAdRaroZyuDQwWaDXCSzD47irpjy2jTN",
  "key11": "2BR7UusjyXGEkzqDfNZhx5LwQ9m2LLp5SsQzop48d6rK1NUcZGn9ceoQSc16vD2HRuKk7ggS56MkZnTHjcQvPBJj",
  "key12": "5kzQUXosP4ZQrxSewsrpYdVZNdiDB6D4L5Y8fjLYeM13yrC9QECqCENY4pC6t93usosXExaNFCgLjqPn7pBLAkgN",
  "key13": "2XECExHtnJAaBNaD8QxSrdYHfnZEpxLevvz7ojbt4p2aP63BAKkjsjJAHaYgny22fmzjXbxSb4YY399ptqGjmkY8",
  "key14": "3tg5cZoiJWCpQtWrGHUGh625KDSsYXMBBm2wm2v3zjGkDNLZnLW7YHFTEvSiAW5dqFs6Hhixtvxk6PjCjxAXmqvk",
  "key15": "2PjkjuccR4nPx4g5HGJYAY7JxAGBBDn3TC8KBdgKaAfPD4C7jm9Hni6jVthyxYgPp925YPuRRqYonuTnX9QPDchh",
  "key16": "3gHv4k3DJY5cYi7pBisb939UBVKgT3C45FZPJwXbwk4SbiQA2DsztBBXK5XRoUoU1MvanvYh7WXQ8QRjzzFH2uag",
  "key17": "5FfVhV2kbKuejPwobEqUXTsa2Q9FF4AxLbKvECHph2gEMz36grChJvWPsuAwUgm8ZAnME8g22iidLKfzAKLs3Gm6",
  "key18": "RXrwwA76kYv3BW7T8CGPwNEqSUiv7qs5PRDJa5RxsfMERE2ayxntzZMWd91VgMrR2ucimHPPpoLiRsQHP2qh6hD",
  "key19": "5fCZ3GeKrsFLrUo5H3LGnYHHA3p2wDfw7EqR6Umth58vHYwAD7eCqug995FnWs1QFUb5sYCYNTz8jep7FTT5MXgX",
  "key20": "jCX8ktU4YSkUKgRKV2TT5ytF6EYjuFPGnveHXvRndLMdNHQyuPNRJvP34iHi7yixRaj9BRwgTPxraZbQRL3wn2D",
  "key21": "26zR5BkbRu657dCxrHDfTBoJDWJUXgmsYXRsRAiGychyii5Mwb3x4ZHdvwzemLxuEakLWjadMKDKaNrtvZxGmt9R",
  "key22": "5FaZaQpxL9xpTjHcUnpRcEtN5c94gu8RC41wpcBwzygdsLpSjsVye31nR6FBcYMkK7UKHAsypUm8Uhvzcrbxu2Pt",
  "key23": "MUrdgcCsyNkUEbcmjkfbNLHTtyU3bNwPyUyzwa57gNpLSGeJxziEiDsgbzbTnNDGnBwKeNP2pfHMpb546zaBJr5",
  "key24": "2y6KdA5ni9t7PhVoQhcx4wrt8LXG6Vk2aa2uF1KxmMGSJmAEXYKtirZr1kfKi2P2wmoeg8VJAdKfqRHXwpRuEFz5",
  "key25": "4ZULUWoaEUB14HQueGA6BTcBoPB94Kn6dErvpErAQ9k5LYGU9aG5KaCmkUgBAxYdmotWKh3JsXmhPtZx4QF6sqtu",
  "key26": "21oiVqYMn6spHMEEEdNJdhZeAAGbFAXsZKEjjkSRBsUMtVVwpikCsSM342kCS344WPRUB84p1GohTri65F1XBGGT",
  "key27": "2NDkKfLp9x7BXVoXxEWeoWedic25zRwjCKLHc1GRA1EYjWi92q9mvv8QXqyytkEKN1WYhUaxfsY8KsUhwPiPiNtG",
  "key28": "2yqCzK738mazqS9SBDPsTA5zeRKfjUx5CAUF5Nc72hoDRzRx4n9ce7BNbfjGK9yj4rus6ZMcUoA8W4a11g2eCudR",
  "key29": "3CJmXvSiso5aNhNkhjewkaopNNNwePGcEZEkfaE2aeBnLLpjfswysNbHxCb78JWUEgoQMAnoqvYZtWPT21Wz82GR",
  "key30": "4uCtu1MecXw83rRyCPWKUhMKxHv2RiJA8Ve5ZJoEsJYVP1ZHWXT1GGkv5uUVZGhkJspVENaNULzFnFKjXoe63zQ5",
  "key31": "5hpio9d3CcscMsaRnP5VPd5BDUECNfAeSD2pVGWHiBZexPNF2F4oe2ZRG42mqFqqDNhaUiuWT9JEVzaR3w1nQgMf",
  "key32": "4DmoDEHKCwSG1KCDjC5j3v9oMkmp7LDfRNXPjmjTj74n3rRi3X3f7MrQP6ur29xQnRZVnrwdcjCXEH5dv92y3bdx",
  "key33": "3fqDDa5J8N6bJ7iHAuXYR1E48eAEay2Ck6BUQcjgbmziq2kx8HHfdCjofGysVov5Tpb9txXucuNZUK1ANMSg4V5t",
  "key34": "4u4gt1DPKGQZowgxPo1Ze5oUhgdyYa5i7gibT73ZJEZAZZ1uYChuh1ikaooPSDuxsbeCA4se6qvf33N2ydkCpLfj"
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
