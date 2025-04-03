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
    "2xhUkp2GiVQDFVnrHf3SvNAgd55PUL6LyAkSq1xNog4uNNGFhvQj1ngzTuvBj5CgZBqZrhYKHo4nB4s6bb1WZfo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtrePvg2tk3a9gDTazrKRqCTrVgdTkEtBVJBfcBwBqDJnkXBZqNDdC6FEpot5ZNKNbqnFeDNpTyKMkDWPmfc4rR",
  "key1": "48WjHGTUog55agMb8LSJL8axBCXV5uV16p1MPf6t9347st56bbwK1zQ133SXtUWCbyKatKZnrXRrRRzGmGxAxmJq",
  "key2": "2Q2tp25dfiiCQ3Hg9ruABLoN5tyw76aB4mzaYKKsGuto6tdxu6fi57CoqAtshB3zX9tTaRieBbZidk2YGkidQUKw",
  "key3": "2G4W6iB86bJuUTrF3arGuqagiWMYkLM2U9KzTF8CtpPLpypA99An6dpWs17hWyjRKmV8Du6e7LJwg2zNyATW6Ugw",
  "key4": "48EwfW7FoGzu2sQMC7h9c35Y2UJqs6qCGx32Hkr5162eGKCrZmuaT3HHm4YZZMDVVddGRKi7kFdpu6tSCPUzXMfG",
  "key5": "4itb3kqESKCWamP6gHSjoJCscV4iVia93VQX4w2YjvTx5NvVUmTcYtr6Xj2YtftW63vy4Gob9WgbZqpMhTr2okg2",
  "key6": "Q3G8Wuj1ACKaRcUdsadjneJBibhYDqax2dpQKhyx6b55jq5yjkvcY1a24d2ifYT3pqA4NpqCTaKzyfaVFmUQvXv",
  "key7": "63cfo9ywrCw5zhEcw3N33nZCWSZZhfqK8uqqqFqAoUdk9YRLyCbHpmeNGP9kpwmTpnHS5GdHdnfYsUM1Cj5N4Hrp",
  "key8": "4coQzmv4W948k3r533JyzXn9N5RwaiVyN4LBdDU7fUFCKukfukmevVMTZJfxpUk4ZMKKfxXcJnDCTcZDtr67LQxK",
  "key9": "2q8Y5V9BKDmMttvokdLi6MS88uXfePi4HRVDMRCp5i2itgpes4NFDE582Re7zucKd9cfXi2zdoqPSJfVnpC3MRs2",
  "key10": "5qhLB8d8oP17D7ak44J8WtKUWda716Tbh64cPqGr3n97BLCbmYuCfn1Dw5PgACiv9dLpCLGndVn23ZoCdriCDmhp",
  "key11": "5DLdopQQQLXpEqnTWfP3DgJQS1hXeDHmdP3ycTNDy46LV3SRGf4QLFCCrtQCjymfCtLKdqpkbanNmAjSuZgrb3PF",
  "key12": "65oK4KUDD2c4QpkpN839fWUdV2MLpAtcbyKA9zaNzvHesP6YbidkYRXBCbwfqvosqehpd3Thb2smpd3tcnZTRfWs",
  "key13": "FLUwy2UMouFHijcuKgN1ot9F2GMLH94VNFRjdjWtM9mroqh4cnaUMNLpUdVUN7j2LwWXVPeSd5FU7c8vjNDxUTG",
  "key14": "3RN8kfkNNnt8S6t5aXLuMrSSW65bnyCPCDHyFKDRZ5n2tsE8b1844cyquHGc2jbhsGGGKtC3YgU88V536Fbmti67",
  "key15": "2LCqvNaJ7EJ7C2mPMx8tpddT7dRiF9Z8HFqZiEnh64PVmYgJ2enLNZXaJ1Wfw34aKVjyyjfCZVJARQJYhpnXbNxa",
  "key16": "MNNcETMvamK9PiwRMxCNag9yswZY96cRmdPKeXX1fSkahPBsQ7tiKWSry35yXMNgaBAJnSfQodq4nVJDpS8wVeF",
  "key17": "4x6ejCyDsnzB3pWrJeiCCPiBQHi1rUgMonxM8gPYDagzAkCymGDkyYbCoMcwG7EH2X8Exuox1V4y91WbeTJKd871",
  "key18": "3KtgjghXzFMwvne9b3B35S4AMiCPNBAeV4ARgUZdmGKqXJgGeXMQFZJXr9P2t5H8mjK31qwxRgQa57PTawrhbmKe",
  "key19": "535okBcAbK5XfUYwTxeNUZYw259jtVbxD95TtYYzhJ69fcXxfrmf6HBbH3THXTJMEquSYiCZKh43JeyiuaAqjFGW",
  "key20": "4FADNcN1FwzirfTUi22Qodi7oPgDaCack1zYeopWQa2TGtPb8f6DC4neRFFDnUSmWeeACLTX77CeWVLSi4KLHwkA",
  "key21": "3tgndRsKfBkCUJjrj6xfkuzrNzdnbyiAYbbULEdpLC6kziuDv2ooVGsp6c4Rpk1QYLvpC67QnSGi3z9Stkja2wK9",
  "key22": "5pykc5YE1yeFE9XS446RGYphx1NBeofMxyKky6ni7b63QKe4m1KVV683UQYdCfXcPCf6d2aqMwB4EjvuxEuq2KXn",
  "key23": "47N8ucgXT5ikGwehKtfd55F9dijgjrhqhcHqNaMZ4CTWEs2n86VSKes4V6rfkqdDjwo5TBgYbuPPioT9JvkPkZUa",
  "key24": "2eBMvZwjGmKgH65fintW8m4e4ftLBVLSkrDNnTEJVSte8Mh98cpRR8qFdrb4ERRixW9P2febZ5P7Mco7HNaD4kh2",
  "key25": "4P5Wf1832ABuPYYfvdza4fnsDUBhyvWi3S6s6odD8nHXJ3JiiEbg9nyT22quwyNvUrCEZT1Xb7LdKdzXfRinXdKo",
  "key26": "5pnx3rhu2kV8BhKTC9VVWS4DRW7PnH1Eh9djT4cnTik8UHGe5i5LmX7hYvXeUCXgGDgAvgLFq7tqC7dyT1MmCW9P"
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
