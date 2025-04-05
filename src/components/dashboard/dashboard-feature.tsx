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
    "4wGWtYZZZe87C9Bx2ZXYjqNcz1pcnCCNRDZVJREqTEKS2zi8i6JZVnx9G7QxWagrWnsBz3YbMhdrEaRJqUjPXnbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E67NFXgjm54Vr6eUAaZfeT3bKfyCnD6dwZvkSX2g9xTZL4jRvgXGaLkxsZyNinq6Mya7uRjjZGVSqf8Vo3jHaDX",
  "key1": "5YJeTprPeGjoo7tbrviLAtS82tQeehjYex2HE1ftccssRFBL7T1ioCWZUiDFAVwnokpfwEcQQpHkZijppDS2W12w",
  "key2": "4qC7qs4jEsUHVLTBnTtCMyZ6Wdo1P98z2iFFaVt8Dci9FruH9cAvi3DGJxoiTPZpfZ8KGjBs8uaFjXNwpPzGeyu6",
  "key3": "3uMBft27En3jFjy1q2pq8yxVMFhp4MY2brJNovSWDhXgSKum3hBHdBhB9Pu4ZEJaoEsdhfFwsodnQACgokrugeT9",
  "key4": "3DQtMshGfJps8yP2Ds7uxJBMZd6WgfqyAtvR4MX138H2KBkGnEmmjNhSJEye1haG7GhbqTYK357EooghCkvSCYV7",
  "key5": "m6uzcjAFpudTHwvZnD5Dkk4kerRkP1x1oAtois5D9jTBSoPcLVUxZPgVKLG7UNR5QHBwJDmfSo6KeCATGFSFUWf",
  "key6": "8jjYy7DQRrzZiBWstw5kwpPq86xSiJi9taymJm2vrSTux3MdwY99hYssQA7i7werk21zW9hgDAreB4Fv9acqExv",
  "key7": "jjgezta5Uz4g8acV5MW5872C97HzHkRKu739nkLgBnW8mGyUGahdju5PVvTRR5yJzga6JfqFhsNGJBpFuhb3aiS",
  "key8": "kxQmfbfCDYqBzkxgXt7FRnYHaNqA7F2dcAUioGR1KTGdDwH5ZqsjpaKaGoyjk3SFFfmw8RKxuzhn3rKzA3rojWL",
  "key9": "48JAgfyK48KYUB2aFeTzHcJnmXA4jSnpXRvk9KSCEYdDsabE1fgoydcEBgdmX3mzddGdK9CanxaqGdAvFM8ZKBk3",
  "key10": "tdNs6KbTMmM9je4SYo9XMW7x8kuftv5feoNmvecBcK3CcrymoG5qz4mcp9TcqoUHPuYGB5sX1xExGzSP8uh4DGp",
  "key11": "3GpBZP25zcpji5DnyPhFq8jiZGkG2HGuEry26SH1ZZQiFXJ5m61PfR8WuDi9arEvpKu1jAxt6GED5WPU5paw3Phu",
  "key12": "3Xsn5kaLQENgjiX1WivjkjkasvwW2yrhEBMxMDNYcrRDFkCNKre1kdS1f9fhVGLuG68u9m1rvdv9fGT2zVD7YDHg",
  "key13": "32ZXBSJivUr2CgL4DQoN8WVV3mUAujSMDSVw5RKpTMAGLPqnZ1GLf1r3d8LzNycH4yJv5cEVwffkGXG1dfvhammE",
  "key14": "MvmXTWeYiqzfbkFfDT3RVAMQoZpSTEpTyBy5e7Np5TnwNznumR4Lmx62vpB93FcNaDoSC8osWwijwRhRMgTKVt3",
  "key15": "4YvQu4Yz6qVkDabSamuh7Y6TUfh2WwVLidHBp2sDwwaXQQ4qGdfipQ1CFZJBEaSCrQpMPmkvDd5v1XgDL8uD1Z3S",
  "key16": "5ahUeALRNy9EidpUGjVKgbxLckU1SPGgQCHsx7ys2nasYJVnyhnCUZXYeDvEGsVSmfXd4tdYkxKvx63qLu9bsWVU",
  "key17": "XgZB1LSJZVfEZj3aS1B3bFfiJn1Gth1TV4W7U8NchU7ERw5ku2JZxWoNV42fKrXef2NNSYs4LVKoi8sns4VgY6s",
  "key18": "2Kox958rRNzFeBew4Ru3y22CN4N3tFinrtw6n4mJr9yZ3mCQCS5jE1Zctn9xMggA8AKQUBtSuDjCS71vr9ufpqcP",
  "key19": "wcVaVwbizoLKghrjAhdFos2cW2zMDhrZSxAL767XZUU8L3nMuTp87L6FV3qTxpYmsfhjvaUL1V6uFxmcW1eSfP5",
  "key20": "2vRx6DhCv3v9Bcno6YALPzVqWDzEL7PBYK6eCxewYbt4bkVoB6bthmdqPnvENVNLz3LTXL3mjPHQbAzCJPCFJ9Pj",
  "key21": "2hBBYDihyHuQSt6cF2APVaE8jqqKDTmp697Ssezpiv9MH5Tq7xZMntUiYn1qtRJwEQoK1dgxjueumZ8GfKshN1Bk",
  "key22": "MsNXpMJ1o8oEzxYeXw9NaQzKDijYoHSs5ieHgZop67f3LEHbi6rjdjbGzKNsDArJXrApPf89tvXtqfShHvKo2eg",
  "key23": "63JBBryBMPMSPKW4JdZnay26bGNPKcZAYPmJyzAbnzBT9odKYCBjEmgGqYxDQafgiq2FWD9px9gCv2kpkTspnAnu",
  "key24": "4Vi7kML5RiuZ2DSYMtKivBPF2spFXwvnySGA19EYYcvmCUQnJzH98weFiSNWGtN6BauQRcRGZprv1rh74GArrhPm",
  "key25": "y77hhv32k3ZsjVjUVX2s1M3dEFJ5EnWVNs4oJYeGcqaGPv1K1dkJ5zSQostqgyUECLoQ1fkJXcZWi9fMf5bcC1H"
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
