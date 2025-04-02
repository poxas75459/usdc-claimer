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
    "72cPyMQQayeQEXqJ2UYGXHR8YciuMfiAvQAnCUHg6WBq8kGgh62DexcbWHbfyusgZ2HbQzBS335oxUxhNFqcfGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lv3W4U5gXgHiZuYmVYaum1Gs72fMq6c3ijuDkmB2HzfAd331weU5d5uFCrvZenuuiGp2dZSGEpAaX1qHtJtvQqG",
  "key1": "2pNWh7kYKNGVvFTfmgpADpYW53Zo1i4UGkiQkyJxd2zVN291u84qA1Aity9mBCgyBhWvZhhkUVdhD1LnrpPG22EY",
  "key2": "3TQ5Rwhz7ssVv7PMWzW9EozLakc7Pb2KDCgZDj62aFnkXZc8ZQVdCEPcadru5qXmKBxtVkL7FogfCoBUxnQmgzJX",
  "key3": "4tUgcjtaeqBoVG88iNLNBkg6cztsSKBRT2LXWb2sS6fSj4p29rSGu6Cmzmiq8Asft73ypJKARP87MZJ2WGS5qVnB",
  "key4": "5XowmETcpmreH2PsEv1cK4vRLvCYiihj5b9vzhDe1Veqk6oLDQxPRrBbEyCEBdTc9gBEURGfnpk3HuwfA2qLkREH",
  "key5": "4ZwX5erZKT42531GcXTUbz8DZm3nsU4MEn8bebzwBjXCjJ1amXVUw53xvMtDLqoeZYdr8xmxZTt7LKiutfBsJHbs",
  "key6": "4TjzaRrcmbZ6G9GDWrwxkdKuUiXrzohNvaNg14Uroq4t8oUyAPYBRmxALQiZ4aem1rVmk594fiLsUyddeH6hApc3",
  "key7": "3hWWDmbD3Y178gUssC4b4VL2yGQnwCMFCafJJ2Sw9Xi1bjBSkewFoKZGg2mWVmeAi8hr2y2mwuNRFaWaqvw1qJ2d",
  "key8": "57jsqMarcDUG4BVCenfabXmvbpTaSUVcbQRydFfmtuVaJpmuigCckHhih4NYFLaABnjhQAuBMzs2aWXsrEc9fnm2",
  "key9": "4ARrcEkWDBUq3d1DrBbV5Npnava4CnCiMAtcB3dWTVkexxqDrwH2whNUchLNK3FRH8qA2tUQXeD4K2e1HyfEfdVH",
  "key10": "25nKcBWWy757BXDhq46Y6Fa5paj3oo5nDsk9Gft9zn2Ust2MxpTbdaXNnwVw7X4K2R48wNVgzaCLcHZjhYqqWWDJ",
  "key11": "7xGWLqfk9bpqTV2NvVLwDi7GKenztiHMLGza9YaW9uojFBHf3m55VTvLtXiNmtu6oHjarcWzzT3VCFQgxxZr9P7",
  "key12": "4obnFL7nV1q3gBgbbRyH5e8iyZNN23cBe2upR6bkcJ2hGPBPqivr1puUouiZtjg75K7r5bB2M19uoVDqNopYsgPf",
  "key13": "5tcteyD1uYjJ1ThwTKJreQgsN28Agmizqk1RuSU9afuTkvNnQ4qwSPDykGTszJantFfyfjNwejgHQBfafBx9CaqF",
  "key14": "5V8L35kjuAHXXpz5qG8HUZRsu64TR1edC4jW9Lmgh3WGugUn25GyNrN9tDUT1LHBpXBwpQ9HPUg2978SzBdtP7oh",
  "key15": "65CKX26Vw3XaihtVnUwr2qhAkbjuWqWaBomNXYAQ7GBm81K91yr531bDWMknZf1c39YaoCMa2fxmkJtfPjoMvLT7",
  "key16": "2rbjEzEb9FjGnChsNBCNqeycAh1pnYtGyhNhHtr6xbEcZP7AaRoJ2kSzPsYFRS8DE1McC1MEhUnkWMFxR382SXHH",
  "key17": "3G7DYz9TFeaUh9EGSi9HLUL6H3JpaS6gzzABkcWq6V3TzVbUwDhiLn5TtHnsAESH4mQzj3ZRRDkk9nLbc6z4jMYt",
  "key18": "23D3522jhoD689gSP5qEEupcR2zh9TPKEeZYTmFvCQS8wHisP9nLu4oCNZfWCV52HH62c13H3dpEoYujk7ZTZWJs",
  "key19": "2eGaDVbtRcJoo8eqKG2KF4W1GimK1Nm8MRr9hAXaCD53jtkdTw3JXVeSuVUuBdPe1GG2tN8io2JhPVWF7PnDxtDB",
  "key20": "FiReg79jcussAma58LTKaZjHpwtvG1T3HzGVUXRBQ7z9EoP1BJhPQ6KeRfQxPNgddRkJ8CuPdXdWDsoaPgFUsky",
  "key21": "2LvehDER3Jzc3ghk4VevhQFrrvkqRgxprCPUV64m4hzMx77KbybrbMzfPNs7gQ9LjN1FqaVJ6SnSZHWZ8kLegHGc",
  "key22": "2oUku3mfKfxwqwKB6kcgFFH4LbgzxrBhnH7BAL5zGbJqeLyCbFK6jGm2JPmqFciQ9Ft9GwG2VLZJdVXGwpvNXt8E",
  "key23": "2qHHHrLAtAiVTYrAq6H9njzc23UmWm66GWsZGRsXPqN6fmjigMjQp9cS4c63JHTnTp65NK1nAuKu8cAUoigccN7k",
  "key24": "2qgUK7z1YJBf7fzNc6yFhHqrFFKiULDf9qhXaGRtndAQA5xLbvbiSHG2o9TiWgNnNzHtomVpYYNbXBfcoGcwP7eo",
  "key25": "5VMPWDb4i3BQVSCyAiSbURhsrFgXpjbExoVcBCthXMrtUVdXDnrK3CBMfZMUFQx1U1RSw3vtYiGnNnVDYzE8Yk8x",
  "key26": "2jxhkanLH3vfVGUJzie5uRDR8terDE9nzs1jUzwcBMPCXSBEudSwgXCbX3U3drys7CC7vAFnALE4Hq4zb1gmBo51",
  "key27": "rCCWVoc5RV7oQoQPnbPKxN9TENJ6QGRpmUPDXE9Bu2Ajd5FFQPwoZbVnuvxkQJnwZLdyweeb18MqqgR9tLWrwqs",
  "key28": "3VWDr59W8FtxaLCTZfZLevcfaApjKxaNfdcVmwhvxep1ziDWjJgyG5nQx5ZSkRcog6i3BYC3iyxpF8FGDiDhrfZh",
  "key29": "275tVhAXJyhKDwsXrAWnx9bQznGoB4vnbCSRLTXtQpfa7HKXx7ZJHH3bWxZrajmyrT7anpaoWqDMcyLN8iBZ4Cbe",
  "key30": "3Tv7Y5VjX2qWftLets54vCbYQTgym92GnnsPN7JtoaRmz7U53B3RmBPbYvsu2ArjrdTTr2RX47wWbzjwnDoau84u",
  "key31": "4Ms7q2ybs8nckzAusvhCkK61jRuxJqLJzGEqVBhtVfAMUkcCW2maMHwdjXkKgDjBMmL65u8dQeTmCK1KNQB1NnSf",
  "key32": "5jW3nwSZseeppUhZDV8jSEWPMbKxyqa42f53k21AKcRZjxmhHfGGqrxubbfpWzBsj8YTgq3G9RwsBzNo9t3zt18p",
  "key33": "5nBYZvX16qkQ55JbqRBMy8NRjTR5HanpLd86dXP15m9hwGkXqsUaBWci1LFX6eHdZbs8eCDXs1CQVVW17DcgD9RL",
  "key34": "2pJh1RkBSPnZigj4fTXZgz97zw56zYPtEmop2iNdgWgdE88vSuD2tDrdDeBrrcsuVhC8fzi5xmyQCjEi49UKpXKB",
  "key35": "3pHFNUjaBdqARkY7xSkzvv4xv2CFZizbazM82DCeDKhNsrKtcevfZBrUdanHHeNrKeb6aS2XLVHM6Z1RRNLbJzWp",
  "key36": "Kxn8KTXNuhH9ACQbLqgX1pz3z636q35BuPJ2NAbgFcjbmAHB28QZTUX1ChppvrQ9Th89bR8thkgAXm6gomjZcTn",
  "key37": "3Ep4fcq4qaN7VbQzRXvMPSoEWfMGoSv1tsca3i5auc2Q9bnLGrZwUhRJAd7JwCMz86Nr4GHr8LEkUmq9m6EGtULp",
  "key38": "hBqCZZ3TM84atFkFBmVbHdBXsCWzYExJdHriHtGQvbpeaN9vtYRczfGfViT1NgMijFGo8AUUNRdcieCboWC5Wjr",
  "key39": "5bD2HQfP71WHBZESeGHt9JTRypPmp6U9ZrWvT7QXMviZycvrtS8Rwst56vg2uwd5or19hDGkYmaFd7PWJkgLihgP",
  "key40": "4bjrcZVtFHJ82kvWcruJcdEvXDfqPErqy7ePCL1f9kc7XSYt2ctdVP3BfnoQRiEz49rwnF7CadLULKjRouV5tpC5",
  "key41": "3DALit9DvWkEsBeDTpA8mC8uszG5j5BfTZddPXFZ2xmHKRv5wEk4SzVhLtroMAHMjAuzSVcafEVi9eHZ9srqt61Z",
  "key42": "3quw3ZdXPGixsMFgvVHkqmdAj5ReLk66Bhs5rNdEFqDarTjGvuYAtbz9Uc94z6EEz1UvypfjbF5R9nJS2zzmMvL4",
  "key43": "5xaz6SQidJ8EV7rL2b6sW3iHi7ctecpwCqU9zxNhCRxS4HnQY8RaVjMcXWTJ6rfyrTcczKy11MhFxTA9tYuckr9H",
  "key44": "2B9WmTLLB4pUuY62uKHpCFUALVFUv1waz3BrYdkkJJX4mUafxC2u7jUXyyfgCgNPnezKCxiYCd6zZdHf8Nf28Mfu"
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
