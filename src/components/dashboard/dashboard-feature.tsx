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
    "3sdishufASicvGxo6LnS1bZYtwNkBRic4Lq7bCJKyWWu7oygpTNSj1dAb9BfrEboY1WtvdMhenRGS2BBsVQ9sFmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34FQ5vUQhyn5oq2rmoRMtSWHAeXVS9FVxF6JLNJMp9mUCNNP4J2nnViWfW6McsmciJ43BcnVf8F7YYSnUXBo2xn3",
  "key1": "5reybuGhCf2juJJUdYTWzpAMFXSeicMBF3iNMDfVbQEL8BKE46tamNeGCBbBUxRJiiPwVNaqPF1VDd1HsjrBgvFV",
  "key2": "5XUPYSGTasJE7ieZQkBV2bw8kBqzY8f1wBtExarGTYXMG1bsQuRv64yb5hNa6XCzEeoanpG7JmYnXAXuwng9f2YB",
  "key3": "4UWD7dnFbsa7cidyfqC4tayZ9jCXEV2ejfMKBffMiL7PJ51nhUxhCE16Qc2Ysbx8ozkUbstikhdtAxzrfCwMZXZH",
  "key4": "3MYizm2oLm5QszaZWYcPXEYZhD7Fb4XqKbibVVddboP8216asRvcow5NPXNsX8JYSHfsiuSP2gM71oYdFnKv5JhP",
  "key5": "2vQPVwMxK7RarGd2BSYBmqkGGc6oth7LALS5r97oy7dqajAEDNVLLfQZi4XeZ6UtZzzb4VJwAX5bSrVWZH3ZuHva",
  "key6": "b6L8sAaD2qUvWWM7jmXEyE8LomfW3vNajzmdjhzbNRGTdU8XBnmHMng4aECJAr2fkb5PK2LDKi2jY9VBcRdgFep",
  "key7": "4RaGZx8uNch1Jd3y94ob8cz6rTtAYBEPoEoy9hDG4okqXjjwYu2QcHnDvFpgMmNcdAGWzg9ut96soiXZCqHYDa1k",
  "key8": "3i8wV8xRmFiLiAHj1qCEGr48xfR4rPN4NZKVzbuJzjooymz73t5JSSpiboqrf8TizbML8UsRFrT9V6vyXoEkXvt6",
  "key9": "56QA36XCjVXUJAqFqdjNByJCtPARZLcSq1GsA3fYJ5Vv3rV2jX13gEGWineU9VTUeBraUCVom71tN8EhMXtfKdhd",
  "key10": "365EKyPPhzRGBuau8HGGGSMcu6q8Uw6YDZvrHAVxmb5wMUv2VPm3DqJDQb56qRpUU2RpNwU21gdHqTU3GuDv3Vfv",
  "key11": "56k9zRF2LBW8PxU2CAENbFDnbyeZ7729YFupZGrzCSbRFaoVK64PPvpt1qshg6CaWf5UYfDk4vKAdAPTRveVKYNF",
  "key12": "2EXgRqhcsg5AAkHQVoC1pQd7U8Rc6dKMa1XX7kFXRH4BAHTd9PiK7DiMRAo7ZHXZXPPo1AUFSz3boTgYnZRo3sBF",
  "key13": "yz5UFuBZR3n5HeGq3fC6F7NKeTo18mzULkXeio4ZvdTTbJT474dAg1UNZZQ3LKankGqMGQZEMAjZgEtpqWVMu8U",
  "key14": "4M3o3u7D3qojvCCdQ9ewde68nsd3DcLi1cmmHdGFUDtXcEMSsghKXC76qKb9vTnmDMswVjbvJ6ovqUg5F7bidzVU",
  "key15": "47P2RZT3J8uLX9E6ZzvBCkSor3GJVSsNdcDmZDx1bRV54Hq1hgoRwvVfQN4uY9D2UFKKMpxG7Wqfphy11NvYc8cs",
  "key16": "5NJ9ckotdpAybZpjTuBALBkStTy4YkPwVp9YyFjkjJawztgCBsMDssWx3T4sRSopTddkpihxCSQbfLSNgemmYRV4",
  "key17": "2UG3YbYrr49DUXE5QeyCApi9po9WzbkpfFufcSo56L5Ko3RdXZfPGC1oL8tMcmRHhkFjJq56yLYpbWenkxSbV97S",
  "key18": "3sa1AGYGULrLeuo5mGxyaZLNBhypx5fT5e4MKnxtWy8QMZ8wu4NoGuQGu9Mmb1VHdVD2JzsarzUJiMybM6TqK5Jo",
  "key19": "5o3pnWhqcDGRHWAQiYmUNrBo39WwPVuWeXmiGCyL1JbnuwZBu6QGvMp6V3hwZV5w3yAtt3xXRBmJmhhaFNcem8CH",
  "key20": "WDYqCHsX1M9KxB8QQrbxxbc41pVNUyLaKS93aC5GwGaGAimisLN7HRdjf6cT7NXnLjo1bSwoucUAXtqU74WbGen",
  "key21": "4gPNXVN52LNoJWDiBDoqAxhb51dgmdAFaLVRHj6nHzGukixPWK5KkJ4HgmQQ7tVxFznRUQa2mwp2SUEjAvj33ZnM",
  "key22": "4BjbGiuFMohNZxM1now98JX9weWaVMMXAXwRKyqEH7kxua9S5ZZLBSi47YgPKfjb4b6fUqgpydECMq5HeViZffLM",
  "key23": "oKG3d6PtE1ojxMRWca8HbNBCtxkSWxZmSks74RfdZJnXh5vwvei4b1q2sdb3fn4v8yYRqzrhVqE2Dnx2zR8g2BJ",
  "key24": "DxwShMCesuMDPMtjKBw9DwYUYTmGCsH3VhiGViPitTacQM1GdkhJnFVH6nCoqF7oRcy817Eroi7Hm6MTDo1ondW",
  "key25": "3yaqwiY5CpkNk1zcEuvDghXWNwFMJaX7nLntD9yJDCFfZSi7NeFA8aVmZuhayNNiV17aN4LxGZUFZPNVjgs7xj4T",
  "key26": "2dYScGa9KELvsQakmzkTdxXFduLyQCiHkYwkTXtxLkPEU5giyES7UMXB8eGJYLsFUUi8ziD9Q8J5VbL2BVBRwm5u",
  "key27": "5eCrQFkppjTEssUudMkxmQ2sjCLxGNaNHKHN8gdJGLQVkbxMJuDUHRjzzRSSxQgKMjupFpchKVt2957z1Hh7DAyz"
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
