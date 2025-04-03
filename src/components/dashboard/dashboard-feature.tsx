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
    "2XYtgGdv65qHweHiJCp1BaFFgEqaZRTLjnGFFftGiWH7XwUsQFwPHrMUAhLmsBZMomV9YKk8BY894urdBp5HcC6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ufZbNRv4tbP9qKmPiyjZyU8UwnE19WEXYxD5bc3U2VDi9B6PS25sdWTyM3wXzNg3agQMaeF1rwsKLmbFM6pSFL",
  "key1": "53eKoBdKfVPktu8iT6tuPv6bjHXHsnabivfcAAjSbs7ne6TcnVMfCtUSxEJB4p1AddkwJNrdSpkedvQScH3KiLCg",
  "key2": "4Z8kYKy9qau1oNoTV7VS8eb8Ry2i32nQdB9TtkLMJyNtwzc4tuyCQaGdeTzEJXKFTFaVwXW2spUUVFRCNMmR9i6E",
  "key3": "4sefavUA4QKpA7TNHt1t1nquEEfyGg8oEYy7pnh2kSGRF7AAiEriUBPr4Epv2a5VbzPT5VXqjsj9ck8BZawGsWxX",
  "key4": "4Z4vyN5TnFe28nDvESz85CVHgzJuGExwFgrNxxRTe6r1wciPXHsARY6WoQAkMeaN1LWErFiWQVTAUcAPqrSnzE36",
  "key5": "JfkmDzkEL1rs1r21gw93D8swiBTeeguTs2N8msifh98sgJQT9sL5WdkYNG5cU6pJhfksyW18EF1bfkGj33V3CWj",
  "key6": "4qaZyNhKZj928Jrn9BtWRZgGjj26S1k8U4a5XKZJRzH9XzuBNAMva7wCjT7pXuwFkddhPggkq54zAEqpvxECUVdm",
  "key7": "Kph8AgP1DJTpY3guDF31sETTW54eAEue6X8FzUcozJexBcNACfjNJ6bAuFMeMAWThU4ktb19Bak5v4gUjPDfrpe",
  "key8": "3S45ULTM4YixXbkfGhLv4X6QthyKPqHtF3Cn2mMmnwWmSDnLYFMCiwLiaF5Ly6WqHhciRgRUyNFmJCT4eznkpCpP",
  "key9": "5xfyvDswCD5x5orMjfc7jz8Fv87VEkGRzfHzao7WRrZCRwrYAiXND4a9EDFsqzEp4HSV4ZAPjZ4DfRmphWseNHZo",
  "key10": "5L8enVPpu3aKKxdaMyBaxbnKbf6V2oB9KQ6NuQqWzSoyNst4V8iKX1ivr5zB624rUefo1vc4evu7zfhFVk5m2D2k",
  "key11": "5iSrgwouR22D2oiUL5rsWU2ZWvwBaiXMzgMAfjDNtsvFRLbtDNuA4bFVRFWpH1NLAkZSPp7zEyfR2aApJvCvhmYS",
  "key12": "gNGrrQPVpRcH9G3UsJ5U9YZiT5RMPotK4bgCfWz77EseBouHoPgtC6nMzqJ4p8uubReahm1XkweHVWSHk5sLkNq",
  "key13": "5knBFYuzH89PS4d7P4y32RJzhTa5mud7MzG4i4v7kL6trvGYiWpcScM851xvu38ucSZiudFTbrXcsbhwE6q4uPgA",
  "key14": "qMPhwN84Fq1AJDRTSnRvHH4jwRYB7we2GaG1Hud7GHhNxvccFLb64hVgsxMqpgowoT5zyvgTydDHzgz8EQMrYAn",
  "key15": "6Ag1CJQikDsm7yphu2o2nGmVuRXRe9Rqp47nbXawkbxnYeHZSZ2XC9tTNHfqK2e7S4W1mHCd5hpZbo5su6HFutF",
  "key16": "2PePLCSW9Y9yWMjMf979LsKD9Efb2GfFrpNtkXxy9o1dDYZnjmxS3LbxN7tJXzfwV3T3KCc8LxNHTsbCqkU3iM7S",
  "key17": "36QgPdrNkLxSsdvvQQG5Ksxe5iaTviH93YRAzTgm9hkZhTDov6zeM9dRXxQ8s7FmpR4SWhm13GemtHhptPCKQwot",
  "key18": "7dNddihRNKWfc8sqxJQmXX3sUGSt94txqK4mUiWjSMMafnVfSveoykQ2zT1Z6fokMCzTVFCzGC9vRpvG4hv2dgY",
  "key19": "4d5uuRWbxkinRTw7yZPdEe8DaZsLmm2LAfY7FZF5XXdVqw4zKWDJCSEMX7pzsMUvptcu1fnCMbKP66SaS9PemXUF",
  "key20": "5EvWq5hR9YdpkcxvoGf9bKqymM4yToLJGVX5U4yU4Uf4c56puYW956viaGF3byZXY5frwoaUzkGPZoc6nbW8J9ee",
  "key21": "22RBu3SeVpJfE7ktH14dCDnorzkQB2YD7se9BksGf2gW31WVbA9gKpPdCqTj4cZQs2mnBfg3ksLrWNdDrymYYJ96",
  "key22": "4FvoQymXCjA3xy434FHxsf51aj25fkHPCU5SHMhsbb88iDmjLEP3aoo71tgjnfcdBjZeJZVeoF54w5UBBjVww81d",
  "key23": "5pFRmSUnDpLAURuL14dZkDQH2oDKKp3tKvjgFGtwWWBbceu4HEbpTodp4BTezCVYki3tzs7h5WEPHj7kmqaiyEC1",
  "key24": "5hA4xPMGCVussTaig7pKT4gff7gF1Agn4SiZDbFDMMGFXZB6Ze9DhCEBdpCw8BFr1ykhchPv5ZKqyCmG9patqoJ5",
  "key25": "1GFuKNPq8APLW6vY3f4qTDTqjgo6sMg7ZRauNo452RtZgirdGpZdtPyB9SCmBGhaiaNXwueZw95Avh2LRPHNsPz"
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
