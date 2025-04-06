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
    "3RmtqL8QVgqwGkUsGcRyB16QfeT81GngzbkbH8aY78sUhY9v6kbkcUDMxwUX4PnZTsV5YuJCjVF1ez8YyxYsyRqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e5s7uJYCN2gva3CkmCnacam1HfoLhZCd9WUMNGQePN4TYzut1KnDiHKrcRPDTw1pnD4i1XhUTwhwz5XfY8WPKjo",
  "key1": "V45jSeUuBHNZrpS91TDgMBLgsgGZXsgWa33eCQMMvp54VB6kvUvjRe8XT74zkUc2NzoxMoxpa6MauWRV2GKVch9",
  "key2": "5NYxpUQS8X21nE7xE56SRa9fmr4mb4aPxCuo5RgjgEWoNodugMejnmuJnfUMwdhQFisYbezaxVia3S3QhEUqpJER",
  "key3": "YAVRarQWwLjNQ1SR8FZAvLTjsuScyhjUsW7ivCNTF1vD6yJ5pGhfncaJZSU2dx3H2K2SB63M54RyUaqp9mEyvow",
  "key4": "sLCuAdCqMGQ4RQ4izBJV8adkdXTSgDQSxriePTCsvfc1VFVh8ZSvrsZ2pQgGf11tpqKuHEMPmzQYcHU8LS1ibCb",
  "key5": "611yZZecFZ86Jt6QR8enf33ahi8ncwKWqijGVmoZuBa3MG2dJLk4T6AMhRgWpFaSWy7WGBsbRt7jELc3bhHVPMaq",
  "key6": "2vWkwmeimRjp7aLbtUq9znRp9jiffet78Q2p4ScbLMt944aQgyCJVVEvoi8zLW7ZNadFcEGvPKNdtmdiQ7Z7Dhya",
  "key7": "2ri9RLMsSKMjTt4xxcL12sUUVGUxaizBvbJJPEDxahs1s1P8ry6YKcDeyJtU2g8U3GKGbBkopc5HxGefM5LFyXPy",
  "key8": "31GMhDT7TojqogEopaZngxJ7oo17zvtRwYzTF1HnwJtq5dvbSkus1Uywo6yvXSUnQPx9YgD6WM22hgPGHjpyczfg",
  "key9": "2VdZGRmoLKorEH7GtRPCY44P2CrtNEHAvawmAgeLZDb1enxMkLu9NzxcSEZgbUKeUP3Yqa8kxzFzq7ZvcHo87gZp",
  "key10": "4mfXLLtPH2i6vbECi7DH7hpoVFjgDnkeoPZ2i96adosbs4HQrVBfewPpPem5mnLEi16u5E4uLFmgswC4bCfsPczc",
  "key11": "3m3zSRA9SzEmRRe2h8ZwuTbESdx63ojv3zjh7DCbyfsY638d8cU8Zf2XsM2fFdfoJZWhgoFQs5GRv4jJ4NLnpo7L",
  "key12": "4GEiDagJiQirYEkjaT5bcem18GGH6wMpXSTwbfS5xNhxPBQiw5Zjb6tEntL8LTqe6yPMt6hYW6Q7C7wZK2upggzg",
  "key13": "4rZTCMjF3AEQsvfwrkMcQuhfVV9YnJJ6CZN3Zqhfe5sowTuTnrWfoLW11eApgL5KHyZ5eGDxuCPLj5c5N7YAAxwm",
  "key14": "fKEfPP5jis2oC5kyi5wjuakGkskLF3nY7FCjgQK51rK826pV2PpUbtpcHWo8AhDRk4TumvSd83fmBvygeunjs1G",
  "key15": "2REFaeNtYTL1G33tRFRUDbqsiXWtMY6j92zf4xU1qukY7kj4KjjeBaTDAWytqixxKn3xCaBNKsJ6ASUr9L9TGgTy",
  "key16": "5ejE4oyJMFaw57tLSSuNE2nAnW7Zgdre2MzAtLWrysa1kp9YFr1oCW9914S7chLoiKzAP5Lphig5Uo7mjaoTw6s2",
  "key17": "2ujGRk1A2ZH7ugvB52JLEu9sK7hrUG6Svcjh6rY4KrFSkRKqEcZHS2ywLRAAtshYRekP7o4mjDs9j95RLdQxqEtL",
  "key18": "BKchcGtrtwhWBvXmyMCGpy5fL5jywBA99HNV855YoAmsPeXod5k9B5iLYbDN427C3o6NTBB4i8fohA5ni6SF4yx",
  "key19": "3s7yK9W8uXU73rsZYByysuKDwS1EugZtZpMYqGHxL645RDiMvqsafFN1w1xJkJ92ZKFoaevoCDSehQnqZsi3tPVT",
  "key20": "2JVMupgcZ2UMeTHV4Hxqvkf4PHc8WsmfoSjr1McCap5WaMriP7zbtsrAB6dawBFmbXzPrRMorRQ7ZDhYkALFGPV5",
  "key21": "2KmkmZSRfcxaDdfb6Ug16WijBAiSbq5bjAVSnTfBP9cBhZt9nPCCisvW4cJQRa29Uj3Cf7YpFQcB8eUTrgsfyYiY",
  "key22": "5LfxcftmGScpXrrAKbK5SgPNxZdJc6qXch8DZXwjUgsRWrm3Xgff3adYxMDynRPPXqCUy1HsC6Jfn1SRZD4dEBQf",
  "key23": "4NJagurABGt3z5ia427YtZbuEaYJW7G1gyxiaa9y8DVwCU9hhXjaybKR7vPn3i3zbKPXzPvbuWS3YS8iZkcLUar4",
  "key24": "3mTGkhXVi6qKkQjumr1HunBWxVf3pshNqx59aHGUfiBikPaXz75cKBi4VszxxAm6gEcsxjjK3NiYUdUEc4dPyp8P",
  "key25": "39MQxb21w4fN71bMMmVDKvP7LC3FGrDTMnTPVPYwdd81P1CrEX2KixCG5SPTtDDVeSnA5VermgjMXqXW7otRkyfB",
  "key26": "4GX6tZHgUqUCanwBthDHp9PXyxhEXLnzGwPcKD7KxieroDXZS9swkZxKX4muSDUvrt3xTpssJgX2T9oh6P4kKa5C",
  "key27": "4X67KJCMRmEBetNAmYc5VN3ALFw4c4jbGHkWQGMTnVLs213eo5Er6ERFwCfMBqMsSrzjWznUsfKc6J6iD1QoWR1b",
  "key28": "2nGvaiRDjzPayvb7H4mbC2ExzLnUq6cGDhdxLPGpk7AHuTBVHQhyiEENbhJ7JCek1emPyTQg7mhzKoek3qBsKpyP",
  "key29": "61YAvjWPp4MZcNMujuLpkECrRoq3nTPUa51A3yD6dHPPSTCWbUfxW6EbyKfVvsxDvEBUcioWPLtfvAh2LUEYk8iC",
  "key30": "4xA628vpYEhTy7qSbpST56mtR2okVK5nzizi4xyk7WxUxEmVr29WcnYdx7HifAjT9iTVMc7nsxo6HJubWtr9QKEu",
  "key31": "5bSW54prap9fydE9nNzb6rwZoVHqPXvCxmUxjU5aSNsTWYyfRkDVW3SMCy5R5K7WPtEeXThv7wM18JzRAQRByhJz",
  "key32": "4P3AawNRS7T6N2soDGpQ9HkiNYSGQcX2EZ5Gsxd13CgZqiNd7mChAv3DweRsavKYJHqQ5V9NTXKiKwRMFLRB6LLS",
  "key33": "3q9WXP2d294nFY13st669YHS7AafAKg1UAJqQSVPESLSWpduA12Kb7Xyt8uv9nSa3oENuWCtfyCZScMHtHqkgqZs",
  "key34": "2ypLiymyusgjsnv2scF9wxsxFaRxw72y3dXYGfJMJdFZF2yJFV7sy54b5Y6UW9DJAgCobg2bvPJAmyMWLhvH9Jcw",
  "key35": "4Li2N5bP2wVMx2xH9hTqj5MnN3VLQCgUHopPirmLbcsxgxDzrbTkRsRaUem24gmdEJED9H4moJ8KkW585ts5BoAn"
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
