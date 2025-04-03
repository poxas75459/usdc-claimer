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
    "3rmm3LbrzzA62ZkREBeoSr9HcaVUanLBxegVmZAwLpjacQZPvXwMELhh7ckeCVhufv3DwMLekERnDS2ahtL7zEHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QVnAYxbELcLYw6yfWJosWfMmDfBan84vBbGkU1x4ePZryY1tQjujVqeQgrxpfFJj4K72BwScgqNnzm4HdWCzfi4",
  "key1": "35YBKmZshyBiwJ1EM5J5hD98Mnm76HGrVh3LBDXZ7aFCcepK9qAcUxXw1oeLiwXEd2GgCgq6hfokBTcFqsF47s2a",
  "key2": "2rdnu48wLnf8FvF8uUDDHxEfMNMfMGG2p1tg4yg9mevd7x8JGQ4PbMP7N9M33XAzsragp2x62pEicZcyqaSaGUGp",
  "key3": "4MaP4aEdaecVkUSyf8NxTqzmaihbScHwcc8TrJjw1Leh2Y3kXJ9aJATEkhQczDkrYMjRiMTkn8UskVfSa7NPFWzL",
  "key4": "3cNZuPe5gypoPhQ1NuDFLaL3eJwngH1QBGNEtwZdLDCUSLtykEQ93sPj4CiCUcBPfQaCGx6avq7JPGi1aqZX5JrE",
  "key5": "2Gy8M5nXK7pY6veAmvZhoNUsinarPBHtKWN9wbA8edsu1aiDRjokiUFLBLt4mUTLxo7ksg9gumkda156FaRWaFef",
  "key6": "2Fdiu5KB6tyDAWfuVi5gLbpsVZjLsP8E7GZuLRA7hnM6mdmKQwZmpDnHBVwA3ECTarCMyrMdbx1uxAy6sn7RZrsR",
  "key7": "3gGUGsJkZqLCRx1aqtiMweZr3mZMYzVZpeZhHWfwHRvd4JNfsEBxpyBpxESit18n24NY2ubvPRTWPgH2bS2kgKjF",
  "key8": "3qhCKGeh6WGi5Zp38BUVGPFNJFw5wh7KCWy6yUwF6FKjvsribXRSZbWJ9iLXwba5iAsFtg8YJSYirruema9b99h",
  "key9": "3DYxzXLsmkLdtwHxgKRH5JLya8BdhaRuVNticRB99JosRVnR3Jayu5nWtemiVfeBmq9BgG3CPEK5A8mLhCupwJRt",
  "key10": "33txKCgP753YgEusG1FgXCMWYuqb4We427Jyu938QqRCKrJdyVziLcaN9Y4aZizngGPgvYaKVi8NDAnkizEdRbae",
  "key11": "38KDqfmGLS4kh8rLGwniNU7jFfoWxcWwDbGVpLDZVqGbnYFaZQLF4LCRbez3S5M83gTFxQy7ZPWk67W5yUQERj5u",
  "key12": "5SDumfERRzqYNuD4eXxocjmtvVxc4LM6RmkfWXUAQ3CmPhqxxdTnBDgWvexugNLm2jLAmzY6hThDnVNLmQfiKHk1",
  "key13": "3qHkdSYYo8FxasJ4gEj4r2jS9vPVb4yLgg4qGBsp7PYmvc7z8UpYdjzezvBhvvKyFYbrVNsyUEu63CRo1uBjV1BK",
  "key14": "3U8bhruoRPWAJnvbDVyr1CwtxWZa63g1mjsi2qVa2fwYSAp4GscPJDDVtY5ntU2atnHuomBNv4c7udWz6Y53LTSq",
  "key15": "ohbX2NkgnFwPz2FArdDvFgEz54V6zTgVi3k4oLYZRcNfrd9iYvg19Vm7gNrzqPwtDvALSdk2V2t5YXRqC9C2JZS",
  "key16": "2CbcviWX8bh1KiefF2HY4tJ3eQnUvhTjqiFGaDErrtBTjnUj3FZ2vKZSLA6RQtHqL7Snm9rii29Vm3WKtx7B8SVw",
  "key17": "67onZTFNmkaErrpDHAMDzay3GjQci9s3MFtc91mUb1jqBAKUeihe2ppxoiZ4ij2tTQHG3EsEKPxYoVWcAK97KBfs",
  "key18": "kHJ1ZZBwFREBNtD6eictntzVReoNZDtceepoG5awbKzB7zCcjQVQBS444i1E2z1fCxX8NjJCaxrkWYmob9CgCXM",
  "key19": "2kKpjBzQdCJS7KoV8CPCvvPAWyzhr1Ddsrbn1JYRMNr7CTNkCJM5ffPsohoeQvuc9eHsZriRPNgGu2fpExH5x2P7",
  "key20": "2NDcqMgfcGAieLA7SVEBrwKhswKA2h8jwd2DgK5oZk6zKWTPrkDzxHoUPdccjKyqKGJfx4RAnrMttyzhinUrPhLY",
  "key21": "cektdLYUo53sgNkxsN1yN9LUwPGaqB5VDUxUFRXHHTR1wtkiDBNZHibTTgHvhhuLzcaMXMdDu3gYu361rCa4qbM",
  "key22": "4JGtknRDc479jo9NHu4MVUGu1MmmqkMU4qpvV1B1iFac8AYs2SHsXRybcU7as9s6TsnJTbaLaCJTcpYNThiwWHZ6",
  "key23": "4BqNk8a3Vvu8YNCyM9CrY3Hs9woiCvGozMkezymRf7fcyJMu5o3tYfQi7CKBoNrXMbknFsxEMLQXwDMa9StswUrM",
  "key24": "4mVcFWxXE2CkxNbPb7xLQGJm7RG4Bmh3WfmRoKEVP4afp7ep3g7tyBvW2g2tTHn1gmREBnKGDHzwwwXLG1aMGZFw",
  "key25": "3arCeUyynVsaRRJUED9foDe4AhNhC9cHjESwn6oR4VghZ69ciSzYkdiZYSG3ryrq16EfEkbir7THNRR3fYA1n149",
  "key26": "55NNnJgePtDsC2GoZxVzyCy372EoPC6QFrmjerheStBD9ucm2ik7uLPNdLsiJCpVSEkrVFAkidBmwjCzXYCdnzxQ",
  "key27": "3sVYRfPMaL6gZuuQwoZBcFygAbzZ6qYkP86tAUeCt4CLQZBLJ5zefLtdMJET7et1W1tfZWUjb9tT8TpAYJ5E4wD1",
  "key28": "21D8qvuAxEFmpoYEbPPVpLhJryUWhDB6RbZHNPFmtumB4AThvRS9BCwaiRG8gTXobRB2mMnyembs95AHYrun9kd9",
  "key29": "22CzLzvUcGmJVZNdSMLjhoFEjxYtumnTRRnnf2dBqekoeQsqnf1n5nirWh6c5E2qaRrgJr1XM9dvQ8qVRp1hEVSu",
  "key30": "368Xt8yjZ25M35MJAk3uAszJYJxk2AujeR8BMwSNHX2V1M17ZwgTLHzEhmN8yTbHFusS4A7MswUxE3FUtxQzx1A9",
  "key31": "2H4eCPeNcyRZWhYEwoiqPsJ8BdRrF1Fy3hERvookojwym69F2ymMypQjWsjzbK9nvs3f4nDxTHkrxhWe5ngptciX",
  "key32": "26WaZ3JDA3u3fUTvLMUNkMZwfAoHxGpQ3io63SZdibwT2xEtHK8tjdkM4Jru9NLEfftFJTJBmyHpLqNhufr8nz14",
  "key33": "3w3GAJgCN7bJF2ewtppyR251xTXXhRKjgkWUCjMN7RMbcqkUnrPL3ZvQewLu2ayfnmcELGvAgqxuD5nGUoAns3mP"
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
