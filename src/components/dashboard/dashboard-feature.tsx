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
    "2kjB2oGi6mVtiLu4tCzGE2k4HoB9PMBorn6HCspm6YTAMfB4eukCrBrXBSjAMKzpHsukpKEpLPAXxAfcad76X2qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jP9pgAMHgn64Ph8YdpXLwptbGe43PfPYLTjuevbiVhnuMjsKBLxC4SDovfeDR3evwY8qkVkRCMZgSN5aurmRySc",
  "key1": "31jRaGxwQqJes9MZkCG1tSStz8XM1kjfeqPWMZdvWZdicNtLfrnYATHGwBi4YJQG4R8pM85WC1cczWvAYHri8zNT",
  "key2": "4YLkMgKi4PtAe1xQgGx8tSmGMZWcU8DGzXMDrcuDTH51rn8n16WZT4FvSsr1nvKM6ouNKYy1RCaRAnNnPMF1WBRE",
  "key3": "548cXHRp972NTkKnnRCS5pHe2hPwTL6Puo4gkUyY6H5odXtKRaZQdGmHbfDa9jUecje9reh9vZd3XhRmGR789pfx",
  "key4": "27gSAqmjtC1GTXYeEXYTfYgVJjykEXLwn4iEmeiY3FKiwBe84Uc7ZYRG7jP6bAThgjuwmbbAAEHRZzXMFLihXvU2",
  "key5": "619Rteca17Ho7iFdLDMUFzMm5JUU9o2fLtvL76S1FoK3kF8Ze67JA2VrTKUCoMFddT8CsRKJQoEatE4Kv6KBaoHy",
  "key6": "3xFCUSwapRR7FcJxNwaBRm9Y9hw35G8xwT4ayZREiVxYPhbeY2hWdYGAXAFmZ228dY6BDZeaKNPp4BLsg7pigFi6",
  "key7": "4pZNdyx1zByr8N3E3Zqyq7oft79EyErcsS87dnupJGWWQARgUxqVx3nStezgwbV5ZxU2oNuwSYSgaCCKiWtb1zXG",
  "key8": "2RdRdzQkXitr7yCctbybNfmzzteJHFz96PxjwKtfhzMsKBXTyL2QcgUikjn6pvPzeyniqF2nutSRk3rGsPNo2AEi",
  "key9": "3K9RrKr5Bt85bK7VsZipz2VJZS3rfvozuu2MPDgeRreBrfT41dfH7c6US9h1FyUBzzABCZZLmf6wzZrVUhianpex",
  "key10": "4KzLsA8BrAecViidwdtzctVzjUCnxKyr6S2PWKskBYZg1Lwe1CUmuz75awGExJ5frRXVSSKMwCVvu6aYKE1LzCUJ",
  "key11": "5gVC9fR1dHeNw8LzuJDUQussqyZeyt1FxKNJVRhThPqKm8NY8kg9auKNrjxW8H9X52ay33NvEUsKbWt6g1E9U1VN",
  "key12": "4mdHvq6ahSvqFm5JvH7VmNhh5u5UJv7FRRPbP2JuFY9JVWvXAiWUNmcvhrDDJbxYYCZzeCEbzYiaShBcgV243N2L",
  "key13": "2QxNxgTBxCJzXDE1ifUxKVTmdiQDAWVeWqqYoisAkyqjiWoW3vMKZtEHmo1fW53jfEjUDV4mDWCeQzZpaSBKh75j",
  "key14": "5J9fGbprVKppYYMHGsKBxher5zheEVHHTHBSYgkNbsZLZCYrmXUdk3TFQpyzfVRrJj1FDnBRyaUmiocLrSqrK1Ls",
  "key15": "3EvAu3k7wGEUaYJwcKGdGUS67Tcae3NzqutLDBG9QfJdqnqUsCPXREoiKrFtVt5MB26hBnRLj3wMbrH5iejadECT",
  "key16": "2Ay7HakktwDtBnMVU6QFZopyyxFZmY4ptgvjTEuxh8ov6vFqMygpaj1cfxurZg2DX5AyRk67qK2F1tz7eJeebKRa",
  "key17": "2Hux8PoGksyamRDt7v9eNU8jGuGBqHWhuxvuEkM2SaQz7qPL52SMTA6SEkk9sQJnZLEpH5sRLSNSnJFzERaff5VF",
  "key18": "1oeUkUFKYtAdmLDmd9Wfmi1qUSvvQBhhTNSrc3whLhjsTj89KEArajqsoY5j3omwrZf8e5neoLux1gTstN5LmVo",
  "key19": "3AQDXqWBvGbnMTkucQvTfGkJiQXyRh8sBX1x7T8Y1Bw9Qa4s2A48g8k2UnqSNB9jvVfHcSWdXsDxtEJBcK6rA4rz",
  "key20": "62Mee5yamd13k2vgs4utx7MeLz32wK4WBSJUCNQirwWaUn6jpci2g7GzRreJkrSZ8tDVivMe9e9CqkJiNckgYA4G",
  "key21": "2hgjhrKuAEG4bnDVhk2edJ3vF3aw1AaqhWbUfFtxWp6VwSDJ4m5tetJuUokAFH6HarZeBhUJeAcZMiUb9fgJPUZp",
  "key22": "3wfS8Bdp9SD8LWBUto69ww2yy8exuUdumxNUuc5Wd3Qsnzgipqx6fgXy1w3UwxcKcvDhePpUR5ZZ8fK8BeTHiKce",
  "key23": "2b2cHFMpNENnVab7R5iuYhj9W9v3TwvS6XT71puqdE7GCsjEyo75SzhPSZ7zc4NSv3oYCcHiMHVBo61NGARBGdaz",
  "key24": "5gBa4NiwzRAYTog9FnJZe2VfGRmU83DxGBVS1avGgjQGJin98wLTBj5TutcNP2wc1rGuvonf4abM1BihRGeKc7uE",
  "key25": "2Qk91xyk4xbhnBprZMBspQVgMeo3fttFjkUZMuqzjLPCdGucZK3DsJw4TkZAVpukVyW2mndhGNprpDo6yqntTYcr",
  "key26": "4WpbaMKxmwUispcr2GqS91J2i4fHSocoYAQnmRXp8Cj2q13w3LVuzgZZ5CLmZGUY9jmvTtSYnNmHjBXjQ54PsXer",
  "key27": "WeTQkRVtXdcq1cm12py6BPTayena8RwqAD1rnugnQbHFbHJhmL2p2VjEnjj8ykmBg5mEEn7aNeq4rtYka41wCYv",
  "key28": "31bLvRmdQ1tKSiVui8CLnkqdWsjZnWjXgxT781r5ohxxkgnHhngS9V4ZQzzFKismQFiMSHELjKtDpbhuZAx1k2Uk",
  "key29": "3FVpaZK5At5Wjk4YmMDhYePxxcy8CnyWT5g1Z6sbHfZwNrLmsGhGq6tDbBQkxveYyBQYJ4M98oLbWDFbwe8dFyWK",
  "key30": "3W2knx7Th43YWnSVLW27vVJsLfzu9UmsxeKqPVr7eGJK66gaz5iEQPdhNNm2gDxwJTFyFL16rjnPxKSvpCh8VcGc",
  "key31": "2uNuzZFWLMX19vitNk9zg6qN1DaH3mNNHXSJ5z2jHY7CrRzJvoeLZ9LdiRYXpNJRVMuSnN25QafemxJu3Ktb4iKm",
  "key32": "Jre4GuX1V9Pibts83LyxwLHUSzdaVkYR3cAn38urAbe8SWvnHFDzso5M4s4C3Goq7PGoSY26TtH8mQbr7nZ5WSW",
  "key33": "4tLKV5VQq8xghQxQ1yi6VVHZYcbAiQcQKnC2RY6SgFEWNYm8Lq7KskahGJBs6U7DJ2P8SVbwVVt2dqmJ1DKzc4d",
  "key34": "2TC6xMoWyTq4w57LFBgBWXFPzhJ59fJXxiMhjwx1py3k3FvfXDh29DdbzwtexD2KdF9DDPwhoMqpcgu1CNQPcRjv",
  "key35": "3wcErKrbbvKDfGFotHUCsvwp2wiavW3kM6Bovdd1vYzbQj89ehFX6TBY3U3SEiTxxdMmTt3xCd3yQANFogVjWWe6",
  "key36": "3Sou9yQAQSQwtM7qupS36NGzzptAif4QSRoxREyHV32tPSf9H8LfVs2PojeSTDf63dEPCuX8wZTGgdEV3v2D44Fi",
  "key37": "WF31MajMe8ngYdqsoVfSjyjgnusvqGrD46rNqyZeVHbPbBa5HJ5SvbKbYrpseH31zs5sATErnKAgUPB26uwyNBZ",
  "key38": "5PGen51JzbYzY8W45ecRnedRJ2SDEL5jYPsg9WbMnK7H9nkfDp8Lq61qGQJZvE7wxzyuw9nPSrzBp5qJmNGEChfp",
  "key39": "KHRFw38B8P3deQVnT9GY59RTbp9qu8QfSeSS9Mo1T5wQkpgnCHmsuqCkru4Y9dAq1LK11vskY1w4WVVa3toxPA8",
  "key40": "3dTsh1KEHAc7KqrNoegX6uKXfq25HgGm7PWjb46xe3KnEy6Mxg6YnrEsWvoFh7C8dxyXACinxGQMhs1j4G9EANki",
  "key41": "5fh7MsDMf3iidWHCfD4G35X6cVUGXEEWRsFM6gRWdjMwSsjngpso9tA3mUM4ecSzj1o12kBKhqT82G1s7jeCzTKS",
  "key42": "63X3ucJv7SwGaJPqAem6EzgLf6thi6a82PuuPYp3wcU6uixULZBUG4pQArb2dWDyu8f4KQkJ7VFp5xRemPFLMzB3",
  "key43": "BdK6WQ4nGDsnRBR2bwUPoeKmsqan2FdoyfsE8bMqFfoHgDYwDL8vsT6QyVaPN4Ke2KrrQ8oghjoX7hvr2nvQZou",
  "key44": "54pdv8dTSouDoFWTKqq83YuBcpggXdfBR1FWcdpX29isy6j7DHMkKh323BtUH8zZit8adWv6aBRuuJ68BLxrvCUs"
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
