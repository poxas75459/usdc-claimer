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
    "5zKPu6g4Pj1C61MhQ49vLsbwZzzDmua3zpHyAkrxzh1KRgSWvVqLEZKiigjqLNF5KbWAtxcdWrx9uumJeWwqorFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZN267aTGoDfoTe5SDBhSvr7rmXSQiz7gkE6GfkskAEXiDKq6Uyd7P14ANxJQnFt7sxV5rRiJKgVS9GLeiwgi5zU",
  "key1": "kmrf7SWZGL2z5DeREDxTgVQJPEJf1ExjtZrai7vC9DHkXGLSAv4bqcDbR5HJfRmdaMVrdwV4jBfsifv9yKDu9bS",
  "key2": "2KWDwjbeZ5DbNVqDq1rcHwdLT7oBkQfn98PSuAFUSiwHsJXsyWfedXthfyjiA562mi1zorLoJs3iYdfKT3Dwzr9h",
  "key3": "goMfr95b7j871xh9NTxAXfaNE9dsV7vAMDjNPAKhB2fbFhPSaqETYWwaDC5WhBxNHEAQwHxRdo5vTs4gPFnR3fF",
  "key4": "2ueLBdYfuXjre6euLuDM72zWsjfxtJCMsUm5GRXQcazAnaz6qwZoK74HbyM3hmJtcu5RkG7WR3rtjBbMGpQz2XVQ",
  "key5": "5F9nJa6LMBqCQSMCRedSKDmcmy33CZwPzhmxtXnQnosxFETRF3R1UBrDv8hyDxApTaPLCZZgP17FQNYYJHEGf3N3",
  "key6": "5Ry37yKcCG5EYksPASHsPnGSEX65EgcCGtv2YQrC8w6Vgca8PbWwGsNk5sBhrCKGiZYLm2JgSDsQKMtt5bGy8zx3",
  "key7": "5kTjFzApUyfBxnKHaRo4fQLaiyVwxFu8mX9Cpdz7Ev8pNMYQaZLHapEpPta67dMmgFbwTD9FaqJ8tq2ATL4M8yZD",
  "key8": "gkKeSbi2K85HJJZe1nwEbYP9tXHih5HJ3ju8UJfhxGjkuXRk6riTweeRMNwUzvSX7kKM7G9ApHk11Fv8kxM3gtW",
  "key9": "5B3bkL2Thn4tR3eSLZNDH61X8uhTte2P7xsASDrv7nwNtYNABk5Cc3brZBoKoG59tumMWTurLuU56PGZpwrsJ9PT",
  "key10": "2YSSWknu97desDahP2nLLRqMNZPhrsWM3KrxGUvsGpSSw2RGzQhLga7AGU1p4zU6uz2qEmrficW189tLdX9o6kHj",
  "key11": "5LF2AgpjCU1nfEtL3aty8mbJmVCKinPvwJKuJZeJmG3Zz17vNTo7eG7znaLFi6YSkgCgcd68SuTTMburBtJ1AvWs",
  "key12": "3tVWaVu4QeV8YjgCC4sF5ZtnVSsmuZ5h2FD9KyrbQudrizVbhhWLnrzPnuoZYziSKTASgormnTfKCpbEVyZPmXMc",
  "key13": "3t1wUbSHHbBU5WR9FxLdvkaH1foHeFMJUgQ41ada7Z58RGFVNeu3EweGdwJHuE169pjaWPuyHNRde4mTcS8d1Vti",
  "key14": "4tXgm2QdJT6Yp9vtT4KvyFDYBqoJuHgja87qhKP1hMTuiXfgsxSPJpjvrLERnWQkgQoLY8RU4ijcjfYooG4Gqxn1",
  "key15": "2KwRedcLUohZNzMJ3GJZx7F5rTwVyY9yX2dSUnpG1B32jNJCe7YHvYx9dXpcZREsSqwSAibnrtZddLimRPTK3K2Z",
  "key16": "5wyUuekPLfeMAZr4mYA72Dutka3Z4er2w68dWiCzMxa5EXsYJwVydXjk1NoraVGcKhK3hP6nDu6Eksn64GyRsiBJ",
  "key17": "4NGRtnXrgYyesQuwJb2P2pmwo6WU5rWMy9eH1SnUyZrUXUeAZKJuWeFGiV5o3rKqrcNnH9DDk8VFPzDqje67hMMf",
  "key18": "5LkxZNcGJhuSqrwSguoogovbep1EC3EUpzZR6dQ4EvZUvc6JkfNYRNHCNHrTpPLckJ7fsX2P8KwnNzQdpXsyso6x",
  "key19": "sWynxHDBiiKaTSEKmZ569p7kjPfCTJ5QsY2bDheGP5xULgS4ZQB63YC68Drjs2xVjmTp4qoc2pteY9ZWS5yV3nh",
  "key20": "2PBMs6dJKSTZPDNQ81vfoVL7JHJJdpv9LAezBxQ11jb4XSTcjHoBYhYjVKY2DzdnkTbfqy1BEqSKwbiHSKjdji2V",
  "key21": "39jCai4NCxLQw3YvrX5A7pF9pNdpb1CeRLKWeoM6eGsELK1RkCLVuYnWy4434tMUBNyFG819LTGGhgctHoMRP9E4",
  "key22": "3rjGMrYoSK1VDAh2pZRsmaxzwkytDWjDP5TyGvA55qkc1T8n455hRunac9nDAxwv6UA6kqDd3L8GA8FtZT1nyJS",
  "key23": "37iKSKk5GZAidJU7g2VZ9wE3wGeda2zS7fKbzUJMSrK6BppjyC5ZyfW31uCCS8tGU3yrcvM5UcjCPeTXeYeSXvsw",
  "key24": "2v8LRfp7ruEQJXVcoF1zn7BosLNADw26xN48nLjVKJ8JRWJALUVbQ1EV5hyJmmiVgoyJgUGNS586MEZvwnbi5Gt8",
  "key25": "rozViWJJuSyjXGx6PSXpaC8umNMg84o3ZYsjsQZ9k3j1X7vwcycTi971z2dAZynytUcLPc9vg249cAvQXLjSmhC",
  "key26": "4HmRMo8ykPVLsT1493KxgzfXmc8TGw7hm6iazpXejxGzYCka5NQjyu7jexoYhQPNKUsKZnDYC8xVSFncHfYJx2Dt",
  "key27": "4uqcnjW7UbrEPCA6cx2rm1RYD17kL6hiFeyAGsH3kFhuiXXHcm1y22WkmVCh5YaD6vzvwatZnERCpQcdkVemaboe",
  "key28": "51Zd1KEe7awVvL9vHBhttkw3enNYKFWnfUPES9pvcGsvYLoVUFCVatHgkUKeQHsj1Tm2vsEQrzABPj1m4XyYA2iQ",
  "key29": "3diQWrkSkfLmDy8g9D42pcfNrEuvqin1yvRaCtE49wrq7BGoLTSNNQzLnJamHhdfhyLrWXHvpt7A5e6xCvqNbXqC",
  "key30": "4EAoPgnD8mfezLAyuY74DkARkNsrzyQPJzdmrnxrm9mb33bknCee6ZmDbdNffEdFyfjPYSFUzPmdLfnanCQDnfur"
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
