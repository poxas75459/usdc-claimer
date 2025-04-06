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
    "3Nk6ZfAShGgAvrV4GVHYgdpsZvDn83ZjZ3feco8pBJSUVzwgZ15jZokhSednP45HggEDiPQJjCYjsUnGtjh3XjTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pp4icQwb27B1dC7k82roynzY6TtHGEd9B5k8EDQCX9htJ7BBKR2JzcycEMtugeacBLWCtt7J1iwE7gsjxJDzPct",
  "key1": "4j1WfghmYwQUjYrqL4i7cJYsAoRVC635BPYgGvJLJc9yBD7TWaMkHpZyiVwBonEM1Fr8uoBjrboe7nbDMs23miXt",
  "key2": "3ztQFDubJ7TrJDP5RhwNAw2WUhFSjbtTmCB7swJW8JjUJgdbD9MNT1gAnQ2fbL48vtLsxGDKMYvxLzp4hTvQsgor",
  "key3": "2hYATdL2EY7EmRbzzHqQY3vWgsn36xHhqn1Bn2h6NYmWV8PyUiUFZik6a71z1HsVGkT8RijDfYY19UxSvp4SK16q",
  "key4": "4WQfU2N6KC6wCub1amaJGd7qfrzAfJUnrtgB9LCb98JuTANvhgBvdte8JZwZ98xfF3Fr6HUEETLgen6ztnmff7SD",
  "key5": "3DfeJJzsjkBP6yMvTTmN57T2VnkQ55KseiM5esxMFmjk9jzR6mDGb5Axhk552vTyB4dJWZM3fqX8a9uuZMTukpZv",
  "key6": "5JdJAJGEnLCXFkXbaawrLtjgGktyCPuefMLZCJSYPuAzVV1zShY5tzgHf2faQnagLKnRXEEHvq18kGicgLZVKQVv",
  "key7": "69xXuSASSJ7J5LYTK9QmHWX5PXhmVAi3A97Raf1n9ZA4kKMXYwrupc3N7u44ii1SrLuZctS2emPiTPTpjGLTuZN",
  "key8": "4nY5u418XVXzwzmdxzRxZx79oBB4P9NsE3JzR4Cr9xKePkgLg5G3BTbTuh92Drs6LKU9UByyiE47gW4mhBJxYhRM",
  "key9": "4hG8M4qFc7asUa8zuweskFdjqvDivQEdrxExSr15ym5ARj1rxSveLsiTscyiGDgMBcNujzZWHVdnLhbPJ5YCrukB",
  "key10": "5T3eBctNoQkBNJhYZCQcozJKWNvi9nyiqaDUrTAr2oJV4LGipLY524QmMxJdTRWVNE7VxFamP1xnM8qSmwD7feYC",
  "key11": "3uHEsosPNx3vYB1xzmVjJ6BKuMaPavtfrb9fnNZFDYpr4GCh5N7NLkGo21iBDTyZ9JdtXpty4TyCHNNAZoMLtDmZ",
  "key12": "5mSXhE8n82iFXmbVuphudpjecDdgWKCd3QSw9msy7fUxSn65W5cJcffA1joSsLUogAAWMFbhFnQSL82eixWurACG",
  "key13": "2hJcoff91j5Woqw6xmGu7eDKhkE9FEMbCRsf48JW8ChKUejyVtdUtcMBkVFCEdjByv3YAEp5yoeCvb8hPuq9U68d",
  "key14": "2zPHk1tszC1rELB6tLJRyHi4jEujFi7SFRXKJfs2nngkCYJwsgBjKtbuXDiYwPxqsCaoWWjnuDD1f4hHAe21HGUb",
  "key15": "627A3RtSxXQuEAuMVAMFppE3LHXnjgCLM5a1qyq6CtcJWnTPkkVUQ3zSLYL3iLNTWHuaFhxJ1F1gtHrcbWXYLZhd",
  "key16": "4WUCmKje3dmPFQVikECpev3MfjG7MWr915K6HWGRGUwrNS4mLHuqUZzfpwSzxCdZV5BKSC6mm1Ldf5vDn58QoPCH",
  "key17": "3SfYWLqm69Kmv3Z3U5Pvi2W17J2pzGj7imG7hpUzzXfGphTWg9G6tDkwQaZVkDGLzqxjq3yHvRedsrY1z4K5iMTg",
  "key18": "5bvS4BuCv5yBoTLbUHbyM2vfFaLdyvfVetKk84Phi2ou4oVWXBsMWGEYww5F4qwBXzdXDBS1iYbQqQSzF24gSWCY",
  "key19": "5qaBMxWnTzBLGPUm4HUnn56Fc8BaFhEfjEvt7EEHiJyzpJFPvkum5L8VxeRtXLFR18EhuK9u8zsJ4v9LfQPqnx5W",
  "key20": "5hmQHzxPT6awE4ZddUwGkNXgQbgfgzrBtaW4LEQE3i1tYAp3DPj8cV3yi7M4Gd37zqFQM4Vq723k4V2N8mQM3gya",
  "key21": "3bTnxP6zy8t7oynuZDyrfSCZK7nQpKL5ujKaEhd9ZxGT1NuaetkhcnMsFW5sTLcRPqsuhCA5LHRsG6TsphMDyazP",
  "key22": "453cwt3j5LJPvyHFp1oXH3PQzkWGYhkYwu3M7yQgtxFg8834oHpayKQZfD3B1CzCNdb47PrNX49ovrD4namrVJGv",
  "key23": "t3uei1QKSLhcZ3X6W8pYNi7pb4rMonPnhUVfHdoTRzndFyNUbXpuSZVZBSU8iuHGLSQTEBW12u7p8H6okXhCjZP",
  "key24": "5Xmks7HEEDmNXxJRc5aBWEMKgnDs5UEtjuudtYCi4BiJm4cjVimjtpEiUJi7yinSnfyr7tbUBdog176gwQd75HfT",
  "key25": "h7fdnVJLeFaaNrbKEYkkVp2oh3iszgnevQtZJ7Dywc1hNcLp43xG4WtPFwELCWWLx2xBthgQ1i3Fwzgh5NW7tZy",
  "key26": "z2XpXxZyo3tUHFjmy1jyuqmqtsR5DDjGVKjvbW3cAswLCtgMm8CCdwVh5NcqFjsnxjLV6Bfdw4R7eyAV9ZMCXfP",
  "key27": "eJaBW77KK6Sd6xWwyDEpkBTFMkh25WibA39zWsURyeSLsRpe1BUAnr9pXM1Y5y7KMM3Ep19DzXz6jaE9Uggua8B"
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
