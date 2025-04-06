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
    "5BvJ8VmyMcCjELfCQWJ9rsUQRpaVBroqbjif3GowbYuG1W8dNtdvs1XoEpKfcrPFhvd7Pkcpcz7VDdy1D9nYdA2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gnRCjrKZCWgXd8k1y4t2rfKqxPFDkwfkw13xW5qnxVZD7GwmThHXAmp6ntdhAcL52b6zDVAd1PamYEmeWVoS9eK",
  "key1": "2xVLiqQLBBVM7ruM5HBeuBDfKnNv18zVzqoxWCoRAJ7cfiWQczbQeyrcGpfSLUgKXhd36jMxp3Z6eDKjXUhsUKr2",
  "key2": "3g6PPPtoRypyStL7pZxEBm8Ud6SC9bZjaRQeEVQ3NPvExAqnEnMN6r9GDLk9g5d9pABeR9LTEHRioXAT27oN4e3T",
  "key3": "488DbWWXCMMTz75GiasUtf1u4tAe8AujyfEiBbiyh9BxKAXQAgfbxKi5ieviFeCbsmSSKftiYmRFNB8cfDjtrjN7",
  "key4": "5W4MdcsbiidQntaq44dyc3xiBEH1x8QUzxdnZcnXkaVBDh21TvFx84QR3p34ebRPgckvJzSkCLvfYoKBHJQSeWK9",
  "key5": "61kwLAJKcg4ea6E2Lcpwkt4PH6mRSEVrZdaNchPTkADnfSdkdtYaAZ1ctszU8k4KJi8FqcpEmj7SArJkZ5YGQx5H",
  "key6": "aMcHrX6yHN7emCUa3yaTU1HhWDiEam89yyE8MSndA3scpS1FGo5UGyTStFpcnni1uC589UbfbTKf4TzxoVbJu7g",
  "key7": "5c7eFMYMZMjPiTDtrZF1MWznGGPzs6yySnW2QzZmB3k5ts8KmzZ3cDyZyExXjLzLsreqkmPH4LHdGbydwcQAnPhV",
  "key8": "3vtfpboM8eSFUr9j5rBzAw7SaPHyLK2Zwe13ByvCfgAoGkgEn5dhbCqyX426SBVcxTMAU1cBUeNJPbKvLA3FS39T",
  "key9": "4SMPS4gTNhHNCAC2LABK9u4SvnagSGgSAwTfBye5RBNoptRSER5yBbterh1AFcQceEmTiBv9n7GGyabgiQFWy3Xy",
  "key10": "5Rey87jQoDoumxjfnCKk4bVwWRs2W5ddrsXJbWoFcRCgvnPF2jSGtaF1vqCVkRCekLDNTQiXK9XzaNZiVSmPn96N",
  "key11": "4m2ASYgQVEhyca9WPStQuZXaM2DQpAtb7c4X7ZvbDEHABMbSWTJ3NMgrH4caX2ZiMU31gRTGHucroeNWt8NzH6nM",
  "key12": "5BnFGTx1iYZyrgzoKgJuFD6Kfko9wc8HsVQSAjpuo4fGvZvrYuurb59F4QECnn9CwUrJiwYcRrkmHJQos2PtJ8nK",
  "key13": "42NwffkgJS7fiuH8PGFsHKv3azMyB2Cd4THS9NHaauEc6JhgiHMQZkhSKiHaEsypJPWS1E1yyppdU24VcpQvQtPq",
  "key14": "41koPDuuBNDmGCrNf74WoLWag6JJfuGaZMuiqju6e4SDpAwJHWnoXNyGcmardvRx1xhe6G7KYLsG82VWi2bMaxWQ",
  "key15": "5zR8UYNKBpRNG2qM4b7NC8ccWXbmLPjVFnzD1WiLMA9dkqtywkbuuxSo3uERNpepbUB6ZfWrteMK4nCh7nchLPH2",
  "key16": "25x5fpxqDzaosZjnxJFJBu94j1P8odMckkSJe22k8k9ojsJ6UYBnbKDiPhCLz18HGinisK4MiFVpDRLHGnncxiR4",
  "key17": "56jMWGNEVCe7vbitwCpFnHXVm4yuihyQNaig2XpfjfxmCZNC9jgjquPsdhmsuGjFZNpHMxcizNWjynV12RjDBHGr",
  "key18": "5skSebmfxt8wiDe2uD33aYuSoaeapaGA4miCDLiLoMumWS2xNyJRsgggbsQ3zyD5rTNecRLoAypfDcAY2Uwbh8na",
  "key19": "5GP4PdEaF7uDovnkmEwDDxJRHyA5z3QHEBBTDEWRz1jpyzYYskfuDYrDxt5qpzt3XbyMpeTErefnmKX51TTxoxiM",
  "key20": "28VvQdRSJxroz6zxFwARGJ2KbdxmQKLS3e2QK9gb6yEhyPcbGngwhxKB5BjYiRN4xuc5PVdBPk8sT37W4XH21pDf",
  "key21": "2m51pyreo6tcdaSSkZ2qtXLr6cs5NdHnTCmmqoesrCJPexL9aFut4qRta2ef82tAAcs89wKgEwR5Hcjb1yFv6qaU",
  "key22": "5UWqBDtxnQaLznZKR2YVJTs16uP5kcfxCzXZvP8c9Jpi4VchCjWEPjX3QoTU4BYHoDmZ4QcVxKZPCKQCLwxxKWEx",
  "key23": "3JKFfshS5jimSYQcs9VpLxHGQfq9tbYuJbkncHJdAtWD2V9uviBcesVsbrJBJGgQwV7PWKFE5pg7VJndNeskcihY",
  "key24": "U4MUxn8sv8jUFTCiijQ8LF6oWHHoZspnMx8VYAoPkd4VDffQ5fKRY4yJKLzFVEJd1rPLvGX7Kr5fSSAjAbPKEVT",
  "key25": "5bvpzivB92FRTuUJR3D2S7H5WnhG2VmA8Fk33pbYSF6KgZXUM1jTWJmh4RevFyscNsdVsESSGCQiZ16vUXod8hSb",
  "key26": "Ai2wERZ2DdiXxLQ3ApmKc8dze9qjsbqNqb2DS44yDfbie4YRGa7A6aW4gNE5993TWgbP7ts2qp1EqmZSUApwcEs",
  "key27": "592n5JpwJ2RBRk9mERBrmgShGd4ZKd53h1XLLP2fJxLUqKEVFDsB66Gek2Z8mNkWzaVaxJQy3DFX9niC6PgPXFNX",
  "key28": "2TV5ePTbcyrrGef9QBTBVDYpWt2icF4N1QaqiQD2Czvm2946PqRfCvwuVvpBfgvGhcBdPfKa5UEgujD6mbwESMRW",
  "key29": "e3TGVw5EFiSUTUxDbWmbyEucwb7KbiAQHXZdCVF17K9XNpbonecvUYzbHUjW8rwfBM7oK76Vck3GKC6xBTFBcCh",
  "key30": "37gmpc1dQ3RxDQHtAtuuVkwCaADEErw4wyYJ8urLMvabZAA3LJhDMXeYqwrQ4fvrusjhcuou52CT3pXeNSBrxgMa",
  "key31": "45VtkJ2jNqM78fg1izkBmc7fRoo2iA592GAJFEpZWBqxAfqLJ2sLcvFehoRdg7s2EgVk4dW1KQnMByb2NHtjmmYE",
  "key32": "47aGGUGZo9jMxc72DEfaaGV19xekUv4cUHUhLNAcV11xgMHcHinKUunEHPGgDsbZoQZi2WRbZjUSeQ5pHXo1Lezu",
  "key33": "2W7uvHzYKL3sdVFBEwZQVEkd7hf5YWsWewhfLGwA3jN9JbHnjWDFM6PxN7c7hv3VW2LvveF56TjrqaTVzebVWw11",
  "key34": "P8VP52u8fbLePdpNzjZSsVfs5THuzNHnbDSTBoxFNhggKprMVdHNLGYjhdGNcRRq5JY7GU9Uw9AJsowukkQr2GH",
  "key35": "67NbCvbRV76B2oRV6MaqGph4VsBwhHYvHJPMfpYBd8zPjd2RbakHbsk3p7yn5jFT8arY8RFXs4yCwgS2WENZMkqz",
  "key36": "5svZSsR1TJhKbiNtgbce8qBueGFY5rF6meegsHGvtk7p75dMDYPttSkhu6cYZQJBy8g6EzHJPqAfYE5kyWXVQiFS",
  "key37": "3HX9Edf91P1CWoKtnCRjJ8ZZVCZo9gKjP2wWKF3vSMqqc4fc3RmRbqhRdFtHrmDt99LuN1BeWM2EjhjQK88iUxQZ",
  "key38": "mpS6ZwkUXQaEqXpvFQkrAFKoEjenQJ6iJ8yTGJhUJR3ANmCFg7fnndYZ5TPgvvVuYTrsVAYvgfoenAkyo4J3zC7"
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
