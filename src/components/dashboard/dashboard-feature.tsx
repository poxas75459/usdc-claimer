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
    "2pNr3s4DPDq5zCU9jk3QuK3scJQVJ2Bqt65DPgEJQveNqazgiWXWVECttex4CnykGjW2mnk3BMPWBvzGGqooiDKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NqFT6iPrnw5ZvUdtX3P7yNCSJR2dH6j5eY5UQcSh4ZqYgrA1cdagwb4guvXwQqPFBWyvY9tMExts722UwtTumE1",
  "key1": "8jx5qjy2Jo3dPUd24wLbJgYptk41KqSkHf27h3QsgbQ7TtDsvtzTK1YGR7jbNmkD7ixH6tMkL7A6NuTXP2qHyFQ",
  "key2": "Cag7pj76zKxqwinSH8y4ZrrHGyFPuudbS9XS87Fi7H6wbEyzYyQRDHjSnqWxFksb2zNhSJD7ByPEoSjtzohuBe1",
  "key3": "2Wfpuo3G85FpCZT2ugJ8zMKEQ7e1oD3LxU3jeRBtktLBYYmcRJmFb8VZWVNzdnRigk9F2Hrnvz8yTKixjQBxaivA",
  "key4": "5pkgQE2BTCphTtgyVTcs8VhoyibVU52jLCSQSASfM9Ca4nBFG2F3czTZ2RXwsmCZ55kc8ty9dka18NExRXm8f8va",
  "key5": "4J84zQaQkLwem9zg7YCs6Y38j9p9ppcrt1xpRsKk3AQ9N2ZMzbBHFfALh2x7NgVkSxfqBsykNdvruFRf339BHbc4",
  "key6": "4h16x7cHQLzVGmFiNBxbGL9xVJkGG3yTv8VEYrtpLDtFNuekF9MSZQNxEiobRayS66Ct3p1FJXni3k5gWL7n1Qf1",
  "key7": "AAQnNS6RQA1T3sbMxuHQk3rXuEvs6umdPMTkcDTNiAXALXcUcuFBccm3HeJFKVmKn1WDp9NG61Gp21Y38vgdf5R",
  "key8": "2LK3UA89wBAh71SQ3UCjyjSNYSL1YfiFzXBFKeecdQbJMhwVNfg9zKAvdrhCNtHQBfJiZBgGkE6QCa6orU33eWVS",
  "key9": "2LZ2siq2nuKEbfiVbqQiQuFX1UtFZZ2erg2VdbWe9zzndez48xgYHtd94cMdQHt88yuHbv6aNiDxidk5ogkM46j5",
  "key10": "2FbKCmj78U59KMNSni1F8VeB6WD7YUQo6cgEyQp4qgAd22jPmfa7qKpvSddVBsLVaU1eQcpHmmyrfPEWrkQWw7NJ",
  "key11": "3VDvycT2ojHWrjQAjpixR5Q1cWMkuGm53cPk8g6HgxTEpJGskY5vmwssTC5seruyLNpg6JuhTLdPPfGtoWEMFkKk",
  "key12": "5WHAwLz4GHqjoqmEbcFvPM4UVKHyrxRZtMmuVx1RaGKCr4Ys4CAukLt7eBnvTZZTFXhfyZt8KbJfg9AFS2G7R7Y1",
  "key13": "37QNLxdVnA4edZnaimjNUu5Rq4EKJ84CP4UZEx1wouVCLLMhbGcV1RWJ5SpLd7Hd5Ra1fxa8f8Vgx5QhNq9iwUFJ",
  "key14": "42LKrsfBh475Ssjh6PHbuX6ehpPFtwXXyYYCsdkVHJawt9QoMNiCVULuGDkNkm5UKwH8ErmCvBnxDKfQwBFGc93h",
  "key15": "SYwBbnx2DCY896GwWDbJH98kYbQAt3rSxm1invmY4vu6Ujxtt6dkHqch51J5AqfSqqQQAUUxPMaTrVnCDMwyiPY",
  "key16": "5JbMa4MZgr87YCepp9DtvJ2B2uX8P2hqqf7UvZ1r2JGG7HiYneVMwzmbawhnAZiDT2jaUjwnQNvZjh7uEJ7sLLfv",
  "key17": "3TSaV3F1TeiFLQNsua48JYGgeoi1JzcNjxLgb3Lxws9o3MMKm5wwHbYBqi1AkEVXPcYGrm5itTcrBUZDzmAQR3aq",
  "key18": "5UkgsjWGcT28W6HiopQdmT9R3M5BorfiSmqnJrhs1Po9WjBddPwj5pjWDahytNFv4MzpxCKxfE4rd9vuVxRGY54b",
  "key19": "4816JSVGT8vM4rC6D3HParz9aRdDkCqrRaXRHcz7pbmsKQSKfwjtkoHcXiTwXqrdaFm252pWpXde6kTgw1Rg6arn",
  "key20": "2MsNc86e7UKmMh4xTSEEGVypuGHtgPqnXMMjsBPVkHXPbYsvgxpePj68r61yqUFZdyAfC63czcMyDd778Qx4xheY",
  "key21": "3R2teTGTVu8L13UaR9YmVmr82QpAbaGvThpPVeH3LUYL3mqYDDK29hLbMgCkvAFRB4aosypq1qDsomDHuevpqREJ",
  "key22": "4sTw9rZ3AafnWHziwUb5Gn9JKG2vhsWzW6zuqmmRSJnFp5Frc5wnPdiTeVR8Eh6TXHsM5jyt76PrFoYHbJSWpHrL",
  "key23": "LRCM1VYxkEFjvDApfB8D5qQvdn1qyfHJrXpQoTQqz2u6UGX39yXgsTZVQ9Ygj5g3du6iqrb557nEZihaRfUAmBy",
  "key24": "dkuQxVXMx2hRJpgvj3zb3k8pxetRFPUbwx8TSWtwVBPVCW4mxcQFj4WiQvSLdrywuTiwMfUpEwQbSfxm32KHmSE",
  "key25": "5NeAm85iWpCDdAm5wkCDZiXVtbe8Kuy9S2M4deP78gNsy4WpLm9Boyge8sXQe7oY9Y4j35s7tFUDueX3HekHvzDq",
  "key26": "34WSzbnCFbwtYDo2Vmq6hBw9KGFukQgcKFepXNeM1RVth4R8LGuvv5fKiJEPvbPr25r7M9p2DNua7nXs9rWJw9sf",
  "key27": "51bqLSW3TjTcwgr7sTBMVkbChpVD3B2VqNM36SDk41yu3aBm8md97rXviyPJAFRmdr7GRBGHzWhhrBw48iEa4MH1",
  "key28": "5bA54jLUvAS55DQsFrNsxC2sX1N9Er47tsMaoSLUrrm6B6xPivttwZkhYcp4hyvgKyRq513SAk6VQwGyoZVV2RaL",
  "key29": "3ncXhoqWRjzkhLjDa2E9jM7kycxisPcC59Y87PL9649pVUAEUo46ESDTFE3iFsbRnc4MqqyL8Y1BarFxNe7dhTtC",
  "key30": "3Zt7R5Uz9z5ATDky8j5Eh4VKHggPhDVe6Bo4Y5StsVuCic7WBPdpzY2CS9fxXGUGYBpc5WrSckBUcMPboAD6NLPG",
  "key31": "2LNCv26hy6UhgqYHYxviMXNPrNBGvMYEaxVyrCuzCuDiJkz9yLc8nCuDfi5CYk342wUMTtTxWH6Q8Uapqcdf8G6e",
  "key32": "5pTrdo5vLdENadgFLLSQHRXwKWUJE6fLi2aLgorgW478R9ZupqYsQmM7auVuJidpV4kSfvbWuhweTiun9UsEgB39",
  "key33": "3NV9BxXqk9VZKpsAiDnZdNEJE671hYPwHu61zRWKXW5jt9JFVLTGQNDV7yzsW5rpVKsyALiPwbUmZjNjNCqbCE2Z",
  "key34": "58KQUGQc3b2HaaARZAYyKwd3hjuhfZ7WZrKpTBZNRSLoEfBxApMZ934yknd3PFoXrms1eHk6F3Zd75Rc3Ge1zrPz",
  "key35": "2NZsCTwt2kt2osV7zZ4v9JXbVwactniWcfrJmNCAu7MV38s11bEPEWiekk1pK8A6DrsBo8KYvG9XUZHZFcqZLTof",
  "key36": "rFLS19bxLvhYf7Hdhuwbxqb8LqPpiLcueZaTGoSnyHKKur9YvjsZCpYwnS2YDVZgMjT1RLnFPeTiqFzy1MCXEgA",
  "key37": "3umYt71sGDxhKYKqYdTktJj81BCG4NejCqT3FgKom9oyeUbo8VehE819ZzLgpY6RYSQV5zErGQxkM6GNKzCUZ5j2",
  "key38": "Yo4MmNDqGzPZpFweXxKPWfMUhaKPACJkscfCsi5MywrEG13dv1hDdCio7CXaA1bQwxSpDLhaFneamj3kQ7YewFi",
  "key39": "2c83bdHTDuoE1GcxU5Xq2KguMWN3h62YCtuvMc23fEMaGZnWoS11t8X31UPAggggMTR12FeSyACwv1Vjtovm1E73",
  "key40": "2okiAuqG75ProoP5YEuZA55DwBNYBTxvodGtZvQRtUMAxuGrD3TMpTjLgi37E3tCmQ7j9gSpTzxqkM5k1RvMBVVH",
  "key41": "54es8EoVf5yhcat3kqfLXyaB7LXYeWwCfp8Qw5DYFH3dbXXxogTFqiq4oKsSQdWBLUAwZ8sQbfgn4hCMst1uTJ4u",
  "key42": "w51GGWsmJzJrxh6ThbYLEZKv1aXKA1FhnbSQw3aHa2WFAbvmwK7wNwxWtSAAa9Xr74VyuC8hZ6yn115C1gyfkMg",
  "key43": "3ywBatiQ53m3ktT1q1512ZBGXLBAsX7CJ7NMF6jDoNHDbWcxn923i2MQg73Fe2nEgrS9znqWvfgqvdzqah7vGtAq",
  "key44": "4Lis58QHCGUAYKCiAbigvr35Cb8W3vu7nAfRX4dcSfDNRzRU3TNehtYoop5DVovH8FknH1b6qNE1REuaSEnyptX8",
  "key45": "4mGPWfuK6F2T8QWHAv2eD9Pf3NSq393bkPajhHgTGJAuZNtwtzqpiWHNxAruL1a7i8wn2p4PW3BbxPVuPHWwLYBt",
  "key46": "3fH7qhJUL4KZgXkWSuSaCbG83fT8VnHmcKXp2bCMkBTGH1dJz698xMwTA762pAS6LoYHZbwTGHN64QL55pweY9uG"
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
