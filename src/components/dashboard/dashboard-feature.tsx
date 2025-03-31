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
    "MycRZF4DNvmNkR7uQD4eDRovptVpKhPXeUnVrLgrVjBkBAGeTdnDrQps4VSCtLwWmcZmk5RTHUCbNyo7zVkDVKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vGFsnTrjewBvnbbwaNpAaWpP3G3rsEDiD1kVNu7pvSjLNJLUo8ogWpAK91RbnFw67yYhfzSWaY9rfoq4nYA9utS",
  "key1": "5rqchhJXLhcFQsXLt3xSN1RCLzcErUvABUUiudHfEeAAv6QdjfiNGPumxgDevaJh5E9DE4sXashiBbYy7Qqq6S5p",
  "key2": "4mDWninGK8apJURLcQrETM9nJE4Qh4vZ8GDE66AATuhVEvtMXqgcmgvqpejzCqXfknT1dafDNCGfqP85QFXRahhk",
  "key3": "Uv1hs3vgPLwbv2FWQ1SkMcuJ6StM4rPmJYS4oyWYi7pd6GhFmnS9tjUBweCuWZJmXb2GDQUxw69BSDxjZGMA8B5",
  "key4": "5rnX5cxJbBGTy54RfwzUZ6Fb18BzPEKUkkvfYvXsTYKchj8BNVuhQBKyLthwc2fAieQaormFNbqqAQwnd865g6yk",
  "key5": "4eLGDdDKkUfvo8HY9vqWbuCL87p6QqxfgQY1YHiU6C8PXmv3mkPmUL3Go8rG9XJTusVf9Bhf3GGujYFm6FAripeE",
  "key6": "53tER46okjzjTfb2FnZRSFvnFKeCwgx6T3HcmpW4iTd4vss7h7NMBcPZUGAbcok7NbQdo39M6FoXHsyCPqG44qTu",
  "key7": "4fmLo45Vv8J2zfPSisCwQBE9ncS7vZBFcPTfvhrEZ1EG8K7nMRPC4YXHwTL7JQo9RvQMxBs8gDx4UdeC2hPveKfz",
  "key8": "6Z18QkQj8HaP2AykS93kjSYQ2PFhe2EBp6TeP5pG45HfHH2Q2ZudUDib1cMZDgFgpFpUMLUfsb393dFZw62jbEU",
  "key9": "3rxEk7Jmcxy3Xtvj5WEoZGCfjs9dgwKjzCSayxJuN3MxL8gNihMddXLzFZ7wNwsZf8PR7qSJ3nXrLg2hLkdFhAnG",
  "key10": "3yBfUvutrHuXSLfLXYwtkTjcQMdpKsJ76ppT5P2UWqqT1PixTyLUFG8YLGYUH3DAra2Q9fKErwHvMuBMVFCNVyFV",
  "key11": "3wfyvS6SpnSB4tHWfS6GCXoZ29q8ufkuVWw2X62z4Ccf6iwz3zPiWpJAcpX46Ciaah13eJZmYdurHECiGuz9objK",
  "key12": "4Tf1V2bXDYPrUAeBoRUJnhq9ghWgvWdA8WptaiRQoGyAwZgTmJuH3qxwR5dDrg5LheJLketN4p63kPntwDjsnsje",
  "key13": "2Md82ZASJycvuwLYWBaAoK5Hx7Jand6BoqbkinY7T1T7aDUMGc2Zi237LQmmuhm4o6Wz8Ht7m9WPXwJo7pPwGUGZ",
  "key14": "g1wTg9c9G9Xjm8snZH5vLeFEhEbxSfcPx6t9YvnvwehpSu3Ke1WwZqHqU9ycjZ9L7iC5rDiKTY54oN3uogLEump",
  "key15": "2Z4oJkCbg4AZW9nqD9Bxa5tdT6ZhgTkGafmRLD4Ti5abNez4vaq67gXmbqg5tpApsC55iPAHFwovg4YHyFRmbQzS",
  "key16": "3vNw5Cgk74gyXYLuHPtHU7k42W4SmMhekXfKDPSmT9E7ayRpBeVBE87SUNgXd9zPxjXjm7Vk1qgVrw1hj1KAVhAA",
  "key17": "iQDyCJvLA8YkJequ4NChbSPaFQcNhPHzSAyk8LAN4PX614t7dB7kPzwFkesw6n73YQdESxXv9dVZSCvJkdmTgLL",
  "key18": "ncwdK56XG9Eyz3n1VAoQYxRz9LbJ3cDo4N51AafchDhBsKRwx3577igQgvcUZuw7YwYSwawoharbMFw2MKYMP8K",
  "key19": "DGm4Rz1uHzWxfMkqenjtpUMD5jDrybGv5gTxXweG4ED87KPQxdacg9efc2BEb3qjRcX2tkDQgQNqun69JVNFjvY",
  "key20": "48pfkHoMGzyBgPbFhP11ZoXFHfnWaUcSXDU2UAsuRNUVs9fjZX7f3WcXFfzmrSc74oX7cqYrbvrHuu8SvdSMz7B6",
  "key21": "5P4YXUYuYih35PVQaVjZCsSU56W5otbCcLgZmJwayJjtdY8p2TB4LLd8X2FNJgYuAooKxJWgSFcc7zcntvQiadMH",
  "key22": "3DPvUWDMjHDzw6wexiJtZt9b5yLAWeVYotNpA5knrs2ubLgHPCjkLt44LokonSVqCHdfEZu4JfdSfeZ62A4v3Qe2",
  "key23": "61QmPdziycH8hi4tkr2bYCsd6idfvk91vQyHqn2rMS3grK58W61GPxHa5RAsYRvczG3h3whZUo4XMbcStcA1D3U3",
  "key24": "5Q39s67pnvocKT2MvRC136NvwU4sg2sytZyyJrqZ42M6usA3oKiB1gbbkNPdDeYb8jmtuunKwZd8kDZzVfaKHGWR",
  "key25": "67pdXiYnNHMuHKFB7JA83uLD8FZn1fdYRJzYotD5HhkYpNtUzKWQfRsFtFrQr7KyunNmf2SjAx1e775H4nTmEex4",
  "key26": "2PcANSvztdbG3KUPJNYYK6razdXPAYRNikhyoc4pee7eoYb1GsW5Nh78kaxV1wwnqmkNNPJuaHsbyPE7Pbaz34kS",
  "key27": "4Apdas1ibVLWHANNVnzncvXXQ8xm2xnUViyQDUbv3mWQFUtXHGcuB3yP8sEwy52Sykqn2TRDQsmdG28gNFTUhwtS",
  "key28": "TtGGQsNNKPQHuEARdmHCUW6kGZMc86de2doUKwHBjGEY4y772x8jyiHVRsQ1HHgpYxR21StUBEZyAscYpd7qLnv",
  "key29": "3s55kRcSs2sJYXgW8f7F6taM893mWU4UxJdhHNYTNDRm5Dsfs8FUN8mw6uSdBo6CkSiKSamZruK7i2i8N2NFrVWo",
  "key30": "5S9tF3rNEqnczH95udiwotjpe4MqCGWqS5yWjqD6jxKjTBGqmBCNfr8j6sPdBS6o8yf2aPrQNZByWgAeA4UeXN2H",
  "key31": "4kFWiY4h4A6VufehLNndzsBL3Nege1Jr3MtRMFZTyxqGzuRH8tfpsAQ3Cm19wN14ubUU2M5UWAV12UPrKGWMuP1M",
  "key32": "3bPqyrwhHBuUCAgcA2PnzgH422gZbRMtTcAtvf7xbQHqSG2MqUhTEYKSXHyS33qEtMg8VL5tEPdtnnwt56Us5R5o",
  "key33": "2EWKFB31juaaeXYWJ9bM345yJE6VAgpU4ffo4Rr3pmk9fNcgKyTZ7QFbYeFmdc8Ubc9rDZspAKDyz3eSSTi4FC4x",
  "key34": "4QDtTXDDprgCYGntoyY4oKar8Ek8jumeoKWxgeC7coDLHQSB8uLkUBZhZwD68jPUe4WbyHn67P6r3pU9S7nrZMNA",
  "key35": "Wr1Cw6WjMtmv2asZKtD9yZkCLjhjDEdimUCfFZ55QniRbEYr1VaSSzhW537aiLWnYToCofsvWDnberMkzB51vB3"
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
