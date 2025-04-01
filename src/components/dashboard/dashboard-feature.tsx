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
    "3vpGyA6obZ88VDCAfFYnEem6dCmaLneRVRkePoYPsSYQMgMY1VN4YAjPWroNFK7HG6SuRDVcQkyd9755AT6hRSxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tUibKi4yzaJwijvVthsUF8juLvqet7nLZRWK5sAQf71niTZnVBCW8DKgSS1q3FhdGneioFXF4p26Fr8xoypsZHG",
  "key1": "5yDtRnwMn7TLrmUnns2W6uPepVx1gYfD8ogzSaFENw7ZkCBeTy1zY1XUe6PpqcqwGki7ZwaQSNJpF9ZXwzYGLPSv",
  "key2": "3beJ6L2UKvDsKMmKNGX6nEZBtGMeyNpMuaEQjqmKkXp93pW9TccMxkguKQLH7WF9w9atUdXxuuc3uVkvAK8Gnrbh",
  "key3": "2VNK8zCVkH9t35ucc44m7ZDDWTFHaViSpDoJsnFs7ZGuHwy4tvsUeVPicxTLnChEiefgwVQyvGtcBBUXmH9jUzDx",
  "key4": "2Wirc5z1QT4zjXnhpcJzGjmC81nMD3WWfRCfQ3i9Aarth4y5UjwcvLRuyd3hMUGDLhhVMMbctu8DDT6FrxsTdpV5",
  "key5": "3QBs4763ByEcwD4p5cq9vnPpKQFHX47bH7jPT52uoD5zW6oDFxEGJwGk1ND4TKRAgYbNHC8wDiSFtmjPrbqd6r4q",
  "key6": "4Ss3pnRuyN322Jxg9zfNrabZN7ZehsF8R1EtpHy6qnJEj5RwYT5fkUV2A9ViwrrdiiWUXdUKVmb8mLzs76tKsPkG",
  "key7": "3rT8zG88DWnJsvjx8nKrbNKniJoNXBnwWRLtzzS1LD2qqFkehVYTuEbuYKP9tR4a4iaTuLYw42ge54u1WHk6xE3V",
  "key8": "2es3myt9HKrQ7im5VnzUTUJcCMuRUNnCJKNVBmCpRARK9Nx4T6V9tvUxwbBLS5uLLeUd7LTqVCNgEY3SENefpFEV",
  "key9": "62HF24YCJecVYiNo3jo7FATu9vGPAKBHGMDps5CXw9uE8Bk8HRyC2d36p2D1UTw1BiBCyzyiePi7wLLgSY7Pdmsd",
  "key10": "3zytV2oBRs5Rp5pqnjRdUX7Un1UsHBamryFfVZLfePUsZDj8R2Xwh8mqFWE1FRzNieXcXErfXJd54cyHa73BDmt1",
  "key11": "5hm6JCCYEHxBNdxiBxR8JVsvGNmPvEKM4F7ooEQfULmPe96WYTpaa4LipKz97Fv3ryioLwZPrB8hhUjK4pJFPPWa",
  "key12": "5T7Z1FYyXBifXPb1pQS6EjywLXBU7SiGsUCdXGnBR2XmFzktKXoA4DvaAAGqiLPEeqGut7C753YYtoPjCozQaow6",
  "key13": "4hp9rEUvy5JJRuR6KZjavtt99ywDjdTxXqQ1H9h6LSfj2LrkgPRLaZvFii4uCuM3tYNtYqriG58tSTpU4vX1z3cr",
  "key14": "3tbHRAZXoBrVLRqDW57HbMCHGcu51TSqJut7jWL1o2GwDHsrpnx5GfE1TeNiMYoRZbqSDgkJhti6Tc5vjdVXijXz",
  "key15": "5GMpZGhgtG6ieNHza7oANf6YHie4FsH73vKLFPWfWHrtQj4F6UM8FRw1iGifM8RT5EdHjodjj89z8CSAcqGgF5VP",
  "key16": "9zHB9MKpU4gg7u5zC5R9UZzb3ehoEwbnjebxipyLMcYHbjTyrtPHTxHzb8ooQFBoj8TVnG9j7McnD1ZEPRsUMA5",
  "key17": "5M2v9EhpQQYRvEskdYanphPPFSE3CXreL8AzfKmNxkSmEJ4TrbHyDCAY7RZ3thPAu2VXK6wiVg1xU12DurhszYjx",
  "key18": "5QT8eTenrwy8niZRRszbqJ6Ty6AW7Rc8GpsRdNcfiernyvoZdeP3YJ1Z5M88HhU4ZSqrvEtQEwGUFLKPJLHdaVyu",
  "key19": "51XS8dgH3uFvvFmvMiG1vFZXgsaLr2GizAt26Zsa8b6cauzQ3mpeG8JJrGcHjHui9HsNydaecrt3wAqSW75mkHDe",
  "key20": "2CZRCzisnNi7MhfaJbyooYSQsvb8t4HNhx5ar4LNdXd5UB2xTSvWYtjdQ5GG4rh5SuuD9zG7Q9ZVFTpQzoemBgPq",
  "key21": "5HfpzBRMNBPvmc7CLfuviuEbuLocHR3cae66siE3opRPcH63MWX9EHqRNQPwSSrf5craSk7u861QCvm6UY8ztaRg",
  "key22": "GSdJdSHEg9wApoTEXW1EcUmN2rBHpAoU3yu4v1VEE2Rj3MhA8HyHyrsdtjy6er1HYSzPjKJ9zxRYMesLLFKDzkM",
  "key23": "4x7i8Aspa3sHTyjdwVjVY763WBdCoPhFLPMBrNruf8yeKd4xDukmxMwSZBvGaLbQTMBBSafub74BXnBCv22FuRA1",
  "key24": "3UFbTtU3jBoZrE8CgR4KboyXno73m6uFAYkKaskYSZLLFw3cSSp4bQZjzXauwombMCreWha8BMJ43jAacxpMZN3n",
  "key25": "5wiwWRQxmePaNsFNEESRdgyFm4hRSaxVD2bmhTm15DVeTPKaiTdnkKAjK3atLno31QbM2jz5BVVhx2EAVc4ouia9",
  "key26": "5tE4od36goGz1yZtM4dz8gCA1EoFvU5dDgSzywKa8u7vRhYRRyAyFpC5yyrMLSVf8ziekVxVZ9MVPnn6XEjsciMT"
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
