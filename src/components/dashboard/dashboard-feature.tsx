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
    "4z3Rfyn3C5tFmf5eomgrHQawBk9HkYveM73pzgT2k1AW1xqbGK5vA8ufj67Yi8KLuxMLkFi7mvL9tepEbPdNi7Kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3Tsp1wTTMfseEjZxV9dJBcTwPbteqbGstEax2McCVJrX3aW69FUzmou95Rh7DuGkAvY7oxPu4987urEXZG9sc6",
  "key1": "WymyiPsfJp4Z6gm5kcLtAo7Lnn9jb4H8SixSrqHmH2qjJad6RdsHb9k5MqGGvy2SBdv4VNQrUE71L8wCdZmR6W5",
  "key2": "3bDk7PszrEEzGa46AF9DzuYGuGEJLY2vfnRgu5w8sq2N3MPVkamRyTLWdnNT3QiRjiPH8rGXEso4G4iQAe5gv3yv",
  "key3": "59b7YVmj8j3dB36WUVJzoxP62NV97SUPB2bYqoXtKbMCmTdb4t8AnKti9dLcwasXK5dzpcLDAK2MD73bFVWLdWbU",
  "key4": "4sajjz6KBXttp7W6Qhuu2FNhZhWxRbbYVNcY8h7oek8443i2oyy8APKZGkV6MNw4C7Gk8HiEFumRBizSBakEEeoa",
  "key5": "4x7QCHHz7LYVnMzZPL9JpGUpR4zM7DSVr6x43WGaio8HwwUrRAw9eHoPBH9vCfQQc5eQBrd9oSvjwDn2XRdryFqB",
  "key6": "62i4LPApZnJXQxWNLhcZH1y3rDUgWsL7iGZCwGXsuDfnMCfLs1QjVZveZDdeXLa4pZjcGQ7bMyvWv6rtBGVoLF3S",
  "key7": "3FzeurCnJfRjG69ac7f6b1e4eB7MDsCPq973e5PEkKBenFfAB9FmYYWGvqfo9JYHVJYR8SRiqn8xsShVUdHTb1cZ",
  "key8": "ZwtzNwTAvnu5xjzYGLDjLbe9HZcE1nRsC9rW7jbxzDAs5s2TyNzMZh6xNCG6rAg81FQJGXdSfvh76h6y5TYgZdK",
  "key9": "63KdUp9azP8fE3yEiMwJ4RhYR2LmLQe3rRnffujixLVrDBpH58K9iBFctqXaaForu9jfFP4Rj3EXphUuwwYUUW2x",
  "key10": "2KAmBLTZCP8UJgvU9DbueZ3UAFUtcWFFLq3fgkxBMKVG9a9qtc2buMgsS4qT3xjBZaRFmA3cW3SyARFStKj91wo8",
  "key11": "gta6sXcSBAbadnqDj6AFi6Y38zzhvo6g4rvo5bNw9LWxmjRZ5cuLHUf329SNP1Y2ZDXsLRqGgje4D8CG5woUK2E",
  "key12": "3rrh1WekqrJbPPTibK3mQEBTvF8VP78UgdKAMRfXSoFaaXJgruXwZcF8NL7g2WsVTw58bkboe6YyBDGRp1Y1yDd3",
  "key13": "BQoTMGAbdrnXh5PCmwtePdufGrPPjAGPCbyseW1yfB21kazwsw2DKBQCMXzdFhGScv3sEtBr1MePBGBdVVJSRpt",
  "key14": "3R89TW3HJJNdHiGN9Ugfu5GSMH43LKr7j4uj15BFNcu9m7dpXN4GB96ZGb2QsruZXm1aUcrVggD9VLnmzC9FfvkP",
  "key15": "2G7dd9bc6AJmGyAFyjoVT55kTc1UJMgHaGccnyenx9QF4waEt9kk46kry2oUyPZfKTfW84QiUbKUXSgXDPoNsPNA",
  "key16": "5BUboEtYgr8TiaS1GqTkx7GDQ8n2WiWJqMh48oBTKW8TB56XH9LypFxA1dZtXQPUnoCesNdCvR9Fr4TNLiawXNJv",
  "key17": "4Tgx3aYucKe7vfLXbF4uwFPvHpxWmM61bokpoQANLvjDGc88j3BbEjee3PF6KXLrgJS3YRdLrX2SnmMv68k4VGJV",
  "key18": "29wP3ic2T1YLigpA7NmoWN8m2746MR24B8KSGvJaJhQchHeGPsZ5PLyCRQybjwWeRYvc3Ukf7ByRzaQMujUAfQ96",
  "key19": "4aJgVJFCgH5fmdQRoqR4YbD94b2znEAEx7iZWpy2ttkejqXs9LXXKyJ2aJNe7gxmujhYx9wXRigRQ1fn2pVwTKky",
  "key20": "39Ljbv1TLLF3nd4giQfGr4baNx14V9mRGS1FenAs5MMHBVT2qvrMyzaUfB54rYZQhJDb25eRMGQpvhepYY1RvxcL",
  "key21": "4np7DGiAuumNXJJmoVNfiYwxJ6RRXx28vVbyxR2GRrsdyrBr3c5YA14Da6BenxnDipDoDLW2mqTD88sWFx9ioNSR",
  "key22": "5yoKujq2FFsWj7FmxAKsTbW2NpS3EKi9vqCaabcBxPamd6UTnrqqkiaS9AQ2d2ifg7tokpxst4saCk7svFrsTT5i",
  "key23": "3ey7XnCeYxazGFDG8CuNiuP4RWBt7akEANfz2fAqqAuGNuBUH6ufLhDzPFieA7af6guvAwzBcBw3mBMA1b39hfAx",
  "key24": "5YrWNtNdHDc91bkaioWsTv8a8EvuxVTeuD4MQfJG4JWapAjBJXueRgDDSrxp1RywBSovbfazFcyG6dkngERNP8Cp",
  "key25": "2V21rHkkYqgTsU2sae8iR8itmYmnotWtqeDNw8BSbRUNMCRYcERyjjYon8gozv4f48ZNLXucgXSiWVgcfESPWHHm",
  "key26": "5XSjqi4XPBPB4QNvsSMKYroxNzMDuakkcEhtCAwTve5jpQnhN3XDuJEgH6HwYTSpb92A4uWQQ7qFwRh1V4DrvCWZ",
  "key27": "5rrNAgrW7T75PbYN9y55QncBSKfXjoM2gbHyja5k8kerSF52u3TT4toJE522mJeuf3K6x12g62N8CFkWXG1SivKh",
  "key28": "GE4YmERan1MpMjHszpoy2MtFXN627VQHeR3ZPin15R77Arhr5rg8F6w5c8zBs6MeUXgcp1Wa1pU99bYm2KbMdav",
  "key29": "cZLwfRGA7W5WYCSbC2nV4GWq1NxWjjFPyXEaUwPsfA1SpbB3Vec9dzEZnBLtqJY9SHSnRKAUJkbfDGAotaU8NUD",
  "key30": "4wpQrMniyzLvzbBB7cXvsLpYzPiaE1eAfYeeaS3GeaVRP4EXbsMk51PHq2C39JjFu8iUTWAgQorNTmY7dPaiEhwF",
  "key31": "opvGGSUNcDx82vR5Hk4Pq5nQSYYqkRW5ABJePyZHfxsxzTnzzeBpm6tyJkKETS25f6jzZRCfH21UxdyNeXt88xC",
  "key32": "5Dr7hyKy2RKsjJNMzPJkVgePLnpoipijWpf2jUdRqxComH2U8QxoXqNXCkwU3eJdpTcQx5pAb4NwSTGpaBcRXztJ",
  "key33": "4eXNK8HVPzGiHrjSiVDUTC6dFVfda6F5yWFTmQdH39YBANYAHJLyPXNp5AhscfUhFD13c9PMPuMHQSwi7wyo8LXC",
  "key34": "218PX9H9WzueqYSzXuCnZUAGdYUFSaiJSSQv6Ne2EQnVHTYZyo4DgpSEGLj859nUV2GLQ1sMgMey6aw3s6DnHMs6",
  "key35": "3HgwnJpekqczsp3xAt2Zoa1bpbT8cQCghKpVhHhr1d3LMmnYys5SQhGgdwPe2fjeaRas3fFM3nSF2V4e3P7JX4Jf",
  "key36": "2F67nduFKgFBMsNkCYfaPm4oSJSDoYRnY6Wku4gGxhynkuvXiFMM3uSN2feQt14Vm7SHShge1y5xP7eXwrWuk5hp",
  "key37": "TjDbzkASA2bEq59q9gLMTo5bMM7bexiF4T2EHGZW9othfaMxUdMbhJyzxh2MxtDWuua2hcgJUbnyhceSzqBLkHq",
  "key38": "8sHurPAcpes63eba5ZRzq6W64x88iHx8tAW5jRanJcM7at53Ppd71ZTkbS8QrwzncapwQ4xZ3ASZAxPS1Gk7iV1",
  "key39": "24t54q5UKd6WgQdFGADts4f374GscvncbUqyxYrn2Z3e69hKqpb3n5mWcRYAHNxcujQPDWikwZRm4B7UuUFGdmD6",
  "key40": "3zK99yyGUiJFhbsQ2DsiS46zGoJhztK8yj8N4w8f49zv7imjRoWUFEEFYgwgmbNGDwTziB9UfsKsxvpEeF5N9i57",
  "key41": "zatNAjUh1Vb5P1Fd6VEHrjUQoJYwrtMFMJoehUzLQeEEeWZTkAjonevjP6iHgGtoqemeoALhnmnWxYtRN2Vds48",
  "key42": "4uSvvssgoWN7vKgBLGMmYAgDffeBANBFbNYspZd1L217pC6m2s7TUHfFFee2q9tBbkWt1rwR7zmmSyGHYdDj9ZZe",
  "key43": "2gLfsqfHAqFuyuXgwph4xxa4PUzbSjPfuCL1Utn6cYbY2d2AzPhzjp4gmCqGjMz4RyBqsUQi1g5HF6nQ6eaGtcGF",
  "key44": "4BdVjn7NHsB8KKwEhjv4apeSmQMtnoshXvsqdoZFXhYUJJWhAqiMx8cscUzUuzXRsJn5mJBKTY73LsnqRyr6jST"
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
