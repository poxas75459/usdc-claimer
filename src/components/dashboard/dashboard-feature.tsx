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
    "3un25U7XZwVNW7bDNNuw22KfBE7zaYZPUn9uQbinAh85zsWGvk1FZ1pZc4Nx9kX1VjWXkBaX8UjirwEMiHvPNnMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QiQgk1Yd3jrBwKVSbxR4Yqcu6GeoGg4dHRdJkberwMSQGsjh2DEiDvu2LDFr9nvEWdFXfhKsoQS8J8RZBeydka6",
  "key1": "5ibpqSmc2dEmDn2G1KbmHd6NQmsgNdGDPCe6sbaW2w3yYpABUa5m8EXg5P6ZQgXPpwxqbbJMaNWvvmPpZNMxs1kP",
  "key2": "3mqJinkzeTyXboMGCJBFzvtjeYhb8rMDmJ8a1Z63szNTFaHANnYchteGi5GQB8hwjGueWenQx7ch8eF7f1vJQbfF",
  "key3": "2k33JQ9pKKEAc5g6HfycYZmKrXDT9YWRBVuQvcub4s2JuMtVNpsLyaCRyQZ4DfJ6QzAPcRhww4pvycSdra1jzyAn",
  "key4": "PBM49ARRUWwwezGDfU2aWMiXc2rZxC6jTajZ4TXh9Z3jDPsEfB72kbHVtS5mbCvZ2rg167Qxf4oxheyLNek2wqQ",
  "key5": "3W8RkRqm6XacyiSM4g847m4gtNEfxrhhSNzVRxmzJ9FTPYEZcDgbpqxHrcrsCkrYQsKDzcS8ZPMVtaxPwpgjsb3q",
  "key6": "4YFkLV6tGotvF9KNe4YHzPZ8ZhTLKKtDtSbJwjJyh4V8J9AoqxZhJREPfJDk9CGaSLJRqiomWCmi7nCAqcXvy4W4",
  "key7": "2NuNWnjnnPEwWBminxSmjtqaFzPthYFJyehqMK31e6jezqFQzocoZeVATQg58TXExQ2PcH1ZLuCvzKr5FPQUPM7Z",
  "key8": "oJJ5mhdeUyCsqrniem24TYsNqYMCh59hnzGRCLGm9upGKFzo82Cts3TSizizTLPBJxsAjctNQRanHxsU172LgjS",
  "key9": "3zC1kCUn4Mz3EFq2pRMjbq2ynqxoyjpQnkCbATLNCdWzMHvsFMbq3q4YPL2XZ1FKGc8ti8j7BKLtw77DFcuRom44",
  "key10": "3FtVU6aYXDn4FbuLT7HaLB12XDnj8iDMuVQyciAGztYLB9afxFy5Smk5MiTWLFyAwYytdcKQRTsC5dSkR71T6k4B",
  "key11": "5fUeAVpCc8htcwsRroSBrLu8XALRL5zukkTtyvtHq5w4RSnbde67ksb744QiHkWY1zaovWqS9fqojpBVV77R9C8x",
  "key12": "2wBYS641EAY1kx5iLdW8yFd6cEgceYLJ4PqbiZqnGbZdfGqdCxyhFyCLAw6ySYNCreQveoVCuAKNewCvu2a6y1Uw",
  "key13": "42cg5kyvJyimFAZUJCduLszMiatYX9Kb76j4FKokubc5WMpQ5vWcRkbHC7b4dUeuhti13KDysMNaDSCsHWkCByNV",
  "key14": "D4q2ttrLTRefp3MFkVeacnpLyPffTj6idmqEQ5ShesaC3GnmQ4H9k8UMfReM2FfdQPiMqA6p791YCAomY6u28sq",
  "key15": "3he29MQGqJHur3sKEBdves7piowp31A5rrhtJBco47JjK3rxYQu2onJiNfAdcxgDqh5bPj41pn3JyL1R2YQ2as2d",
  "key16": "4yWN13ks4ssiYajrnQxytPAdkqPtzEf7PvwMefoKodgkCra8AVNdPQ6ALe8vPfKQ71NpDRPiNNHa5CZ5fPtkvyFU",
  "key17": "4K3tvze5opS3KLBsRDux7Vbhi6z3KtegrcT4S5fkSRQaXm5rhUpVMpeEiLaHeWo74mVuNjDSUSTkFVnxD4cZLDHG",
  "key18": "P8oKoep5oydcq1mef7XK28r2wwkvzxTXxxwQtV1ZD3PuJiyzGCKsepjeJswtq4MriAtnGuk1MCXxN77bAGHt3Q7",
  "key19": "5Bn6mYy79VD2eAoKub8PcwibpbLNNKVeETzbcxpdKT9Ritv3FKHuSfk35aGf8qspkYZR91w8X9XTjNVkxwKxuRRQ",
  "key20": "3VYoaQ6EYW8Nf4kjQ4giykHYnBwdD8cAutR2w1vjd1s1fZtzaReZgsrGcCimoJJUeWbdGEHooBv1j1HMXJ8vaEW9",
  "key21": "67jwiDVsxk6T5ffHFtEVyzCSZFFnd2xCNm81z4n5MYVADNSKfzkhUzcxavBjptEveteF9hYjbX7BML3dqhynttdW",
  "key22": "2hyAJwXH5vdCcC9nh5RYfT1eWUfh982fXM2EvH4gtt8iK8a2MmaGC59dhCu86CwuqUVb7WdwpuUX2HRSoLTuNPg6",
  "key23": "4nxpxqu4egSLJNBAv8ioF4aZjabN1tMhmzD3HsbukeBK4dBz2RWteJiaAKGgJTjNJnUSbEeYwBL3URJbi6jifh22",
  "key24": "63uFWZ25TpjDACN5hcH9SrCQyErCMhcEcGaXCiF4CT16bwfaJkKzesBobzuEhfppHBQmLbp3zH1V2j4ckfAkpeS7",
  "key25": "59cRqU7aHdVcPCDRFoVvvfBMMGdaRPY2TAD4FCroHA8k3ainNjmL8MoLe3ER51xMyNAGoLS4JcFivqEkSN8asCKC",
  "key26": "2SsgpZhfT1ByrYZRfkk8D7DJp4goNXZCM77BZNBQn3TTVKwem6UVys9iNfir28fFrqvRmN7QXUb4jDa6YrTJDhir",
  "key27": "3BZCdXPmEsAKffZMqCsHPxayjm2XB3aHF7F4yC6tcVdETx7hcR9neD6bziLLj11j74ByGRFseXcX1uREgbAaQKaQ",
  "key28": "2mh9Z9ziyvUxHahQ5RodKgYBM9m94RVXJaBJ4DZSgaNx1SQNhhgdMrhwZDa78mxkDSfjqjhMGeAjwRZgp2JqiKpY",
  "key29": "5yjX5C4G24CQo3GmSPasUPtVTnKnAZ3vV7XV58QiNKbxN9FbVjLMHGG4QkDkJ1FiWJSLxp1PenK2kCZQCZRDAxtJ",
  "key30": "5oingAzQjm5ej4FdQA2GLf44M5gSt6MQH3Se3ZYjzeZP6F1TRQFeLobzLGDvY3adJrrAArxHH8zQow7YdxoQoKYC",
  "key31": "5XUufVnhgjxTPaZZMwswjjHvyXVZAyQ2oHCXJq7zXxQThu2tsbUwzyd7qRBZjLDfaSioyviHRNGLtEMkN4Dih6pm",
  "key32": "YfmoaaiJkwnS6R9VEKwuNBdFrn3hFf27cHxVj455cWkB1q8uYVL1yckWu5zVcxcBaiiruEVBpZPFqDHFqZ1U7WN",
  "key33": "4pSeePfEjNXq6uRqncR1UmMT7qXVkb3KAh45pDT5zvMnmrrqtSpJMgnL1XAKEV29KZrdiKdowRjHhaCTRhBP1VZc",
  "key34": "8DYPnNEAxafBsaWXbQqWGc9kyzeix5ntiEQv52MJ4WwSJX2xHF3KoVCDhkGbEpju5FYkCxhf3acHcV3k7u664JH",
  "key35": "29jVEN5XaDKS6v3t38DxK3HP83FfxG9qu9CqHbCY446TsJrARASmaqF5rp8SLuoU2xhn5cA6DVAaypP9BN9oLDq1",
  "key36": "33yRsRnKzZNukbS5MCvfknGHwxmCYhgiADkJpYEauCot2jJr9NJKnKDHeWsGzX1T7EuVCQJkLnV425U6LcRab7KF",
  "key37": "3SAB5cVKquLHEgc58CtWkNCiCAjyg5GHpsdbi1LsMhtSzEjSYZy3jb1T33GtPYo7DwQh48xs1qYfg6BX6Veu7PNC",
  "key38": "3CQfDUq6v1vHgXafjRLkekwFLVN13mY1N6Ru2pbjXgBaR8swoEv5dEayPyBWh2mo9vMeAh1hvZMMTqgm49d51Fs",
  "key39": "C9piYwxSqgme9sGRB1Jsa9oSsAauVoEhT2tiDPNn8WdL5vYhtokGpGJDx2EkNgtb4ATRQeF1iVz3hRqVsin3NnW"
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
