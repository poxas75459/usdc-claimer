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
    "5mbYk2HqucTU4y1xyXi7BQ3JHHC2hVsstQP9rdP3yf6DegBrEjKBomzo85VA7RiZKHqqDeabbbMssjsooGyb3j7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q39qKBS9vyQ95VsAW2KpoRWhkhpghK5TPQbiyY6G1q81mprHgkN5QLuRNBZEitncDeNRmGnEZr1sgaRmvH2iaYw",
  "key1": "4vhQ2kkC7mZ5EBL26mVNL7NBUVMmuTZPN4q8UWhfjeaGYJiDarBkBkDFswRmjivTw1kxaajcMp84zRJbdcdG8CFi",
  "key2": "2Z4Z47nLL5VHzF73x9DRE1SURkHtiXf7Xz1iP2mjHhMspeuRaGKt2p5xz4DCyWtCquw4NhDjiJDJFrXrirhiyRFq",
  "key3": "2eNHK9bccJ5TrNaMd2hEzYt4SsjR9LKzeKnL4BB1XQ3KEiykPpDj4wRKsovyQjeeeeLdx5spMkpB5hU9JvKeTq3H",
  "key4": "48FxPK8T3oRgWJJCYocubWaxkaKALU58494ymJgbcDfnCu2yoPyDeP7pMw2SpNsjmrTusGKPRo75X49YGmachucw",
  "key5": "5tYkFYpHzmNfTBy9dH4XPCa4C6MKZBF7CWoBLGe5Vsiq9NqA7zJgj9NwdqoVp3FkemPt92H3gW1APVDa8HXgYxjF",
  "key6": "5FwhSBY9okDT3LSCSCEKvCukZLShFSjLoFcNZdbnG8R8DhVSZbpEJzvBMDvD6McqJZmfLgoJBjy9w7rcxj47n2wY",
  "key7": "4zaejm6CwcrxqKUTdepknsUUzy19cnk4t6SXDNrPuf4BzVkQ692PA4q4vn8U1XMdP9aV5cNcEMx9HbiMdiDAXbTf",
  "key8": "49999XHHeoGY1o22Z8hiqhm5pTQYjE7fe7MdhV4cPSkRobMGm2LvBENFiyjZg1a8UtcSLYCst2sm1DaQLfAze8WV",
  "key9": "5tXE7YxQv3noieZY4LF2uZZHJHKaSkoFk5wKX8rU4JZCNcRNr5rHL2MJhw8Z15HFjnxZqGG1J3fvCHWhkxBpUTLy",
  "key10": "zZta32quCaZp3fQ1WJroZm8CjEd9FkhFWTfEEXKAS6Uv3VUtczxxPC721d6TDvDvt2vy7G7tVsgN81qoYtrLZyf",
  "key11": "2ArPKa6hj5ZfiZKd6DB6JHwqiujK9YTWig7VPDiVimcTnfmSe6zt62YKdDyS8v6fEcehj2xPfcDWM9QDHGDEks52",
  "key12": "F8gJaYPVeSGaGpuK9dbzh1MGNVoe4VQ2SR97EF6vA3C6qnhXLqps8tj6yJm871bj5CikNNfNz2YXBHiJizDkBWV",
  "key13": "2b2qpoAD6kc5XvKoocjq9EmRi2hbM9JtMWLdJou47iujnDxBnkCXN7QpajWpb9C24KDEXNoMrPueWUm6J1AF1oEk",
  "key14": "5w86Kutsgi4n4t7Zt6mXtrPeCsBZLH3W94yCsmccEwuYvG3XiXsYoKa3UU4XuFaVkPmk93ktUyZMTzqAPrNSQaUf",
  "key15": "4XcS7r87c9uwKfRG45eoUTr8vpdzU9GiaDVnhXUKmhbbi6TH1JJ2BjLqHUnaBQy11PgNsQDdCB4fkkqXocf7rxk7",
  "key16": "3x8BZEGhkraZD3rrELBRBdogE3dXc8VogFqj7qDufwhsMqc4Vqko2PordetL96tGKu7WNuyCyBVRTdXEeGu87e4o",
  "key17": "4frwxQAr4EWv1zVfQ7zcSorEbAcPegZuLijoEwAVCC5i3YMWGwngyfRY4kCHSJLapmAzbG5sMz6fsAkPR9MD4ntq",
  "key18": "2rwmQXWZKLiGturLqE1GNaqC6ME9XbnSz46xP4mMnBh5ty3x4Za9zLLBxfuAyjtR7ewZ2QdACskh93xsXNbmLY1r",
  "key19": "2RConFDX6Hne4sEh3smeef5Jxsd9VAVR65nFF9tLGydqDSsLupZCjvCQRe7EzpfGEx2jBsnTu4WCvBEPQV36HbuK",
  "key20": "4ggJsMyjyzRyXXArWGfvBBrW4pTzDWeVRgWvU1HaDbLmPWKYTSnz87qZPpnNfwFdk49vPtFQa46A467HWXeNc1EZ",
  "key21": "3f4L128dH5kfziVmeoptxvKrZt2FFrrZ1cYwxZF75eEkLq6M8pD5JNVXxYm5vywJeVxZjpctoveRyqjy4VWGYtbv",
  "key22": "43YwCCK2rBJ2TXCarA3sFF5phcope2Xigan9Uv8MzWsqEUj2MDT5cN51RtLuQPfxmyRVsqZBTWXUUtqQiZEr1t3f",
  "key23": "62kU8dvpnL465WtGEx5GfpcokzkchGLw3WJMvtTkRxxXKCT29M2AkKot82P7RWuTH7HwUxkof4y3S2Nb42An1BvB",
  "key24": "5pnzWhF85S6FF2YZuGVAmhSzDCtVthFuaDKnXkRUdvVNmabDKT85V9Zf7W2AZLqsZVNM4SJEC6khiq2NhdVVkpzc",
  "key25": "4i2jZTjm3GU69DLzsYW2XFykqCJpYHK1MF7LdbVeFiHgcRUgL3N5fHgXbhK66amdayNjgTg9Rmb3jcFbL2GqrBHJ",
  "key26": "5PBAjeNLUA4dMGUqmhLAuFHEnNPhHeLDoTEHeWfTyG2AD6j28zrJdMsfiZ66gdCxh4Xp7xEj3nPHB5hitS6k4Vmu",
  "key27": "3D77n2X4g6AC4SFx8KKkifN1fKvRQWxNmER4qPxKASrvEWiiaBAKoHtbjGhf5Y1XJWgx9MYiYknwuC1r1hkLtgJW",
  "key28": "3WJg6aLf17uL9YQx2tWHUtgxvBxEB9zXn6k1mJvLjHLTEDqmetFTsHwEG79hNkE16h4HqnMeNm3vRxQXNqKZeuAS",
  "key29": "3HePqqtCUFnnjKQHg2FfWG7AaWUBnyXnETGVCTYk37YhPHE96QADFC4EnLpV5JMUiy6y16zLRveiMzvrFGX5MArF",
  "key30": "65Nqbr1Xp58o3qUqgWh27SqPHnbbEEtpojweQtm4r9SRruscFCktb16xfKjV5WDw3UMoqd8upMWijGRqRLajic72",
  "key31": "5oyWAKC64VnjEGpdQWJgZDXoMBV7291yo4UnJGpYPWuEqo5VoqJeSCoDdgYZfwUZwvuD1q25J1nRDkV6bUevRDbU"
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
