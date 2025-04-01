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
    "wK2S2TdM27ao64NL2px7HuGbSUjnUrKL2wxBDKc5eLZPS5dDbEKjpAMjFdsDanyc5JABwa5GVehxpxUhxL5FHkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bydXGSNACbXZUAKiTydJ4MLzM3E9dx53BwSN1HZAVr8ph3XKmMQFXqocoQDzFzZjcX7pnqriBnER7vH7tkDLUbN",
  "key1": "3JRkrpFeN2u2cdXtf4aUJATGwSXToXMjsv92FecEmJw1xbEpkkYtMm9kRj3iyUAR7irWghDuZiMkuUEgrH6GKPfF",
  "key2": "2vQoe2TToiPBt7CLBNiugtCSXVHZgA3WVFMi51XBXBvdm5msoNk4vWFtFNtnxB6cMwP4nHEjbsSvT1NZ3VEwiyLG",
  "key3": "5Tmg9XAo24mukS7NXimBh7woXYpKhb93h9X7msMF3y6Wufd5JzyvGNviBVMSojQjYCV8wjqRADyUuwQjcJjHbwTL",
  "key4": "5jTmogxD625qYdJMi8LA54i2UQkP74111i8wh4WnANGaoUWdkEQJS8netwNzN4jkLGibARMd5149Uj3ikFt7RnkD",
  "key5": "2Wy5Yegtp8TcZPWU19mKgsS5aqZegUAHirz92Njk7WKEpAPetjbUaMu4nCTV4KocDb7fbQUbQzpVUH6rXrpjznDu",
  "key6": "4ghAZfEo1bv9VUUf3C5bKNoLdBHXsbUEd212jRzoFvc9G44rkfcLpgwqS3citWTibsTDbG22vHWqwY2s7nE9Yazc",
  "key7": "5bgusmqSQvysywzZdV8pMMU1RazUQb3X4X76sGXGjfk2YwKzgfk7SuKpxe6jh3xkWaVoAxtjaZ3h4yDArF93oKfh",
  "key8": "SEmLqTTpnRAwfL5DKt2CDZJGhcyn15poZoLAVeSDuqwhigGuiT54Cv1Vd1LvRh4vhnpZh3f9n4RcS6cuDGLS3Rg",
  "key9": "4Z8n3WvN415RKbqfCw63Pdw397GeRqGt4qaaaxuG7fiip2mmD59p8vMxnvSGLb7d4cJtbAvsCxE4cRMo53DXAnow",
  "key10": "3HqNVyLKPK9V8ZDdnUnF3izxfrgEDfBqjnL8g15eAFddboGx3681CGAUnekHwiUoD8krAFDaVFWbkJshVzHDb8Mk",
  "key11": "4SPQrQvLBbJESaUtedWeWX47FcZ8EcDwKPmGjFPQa7MiA8LeUxwksaLoMPoJ65jbfBB1yMDbNfr9dSYJomHDekCL",
  "key12": "548CKZg6DV49a9p4afZ2qFfRL4YPL1YmWdV9Zdb3Cjs2krj1LNFf8hvNqFEPD8QzPXWm9MLkmemH1VJp5uV14ReG",
  "key13": "2mZMQa2iUZQyiDZCH3WSgdMPg6A3zyJgBDA82XWqEkkG62YEpdMem6rdwJcREmaTV7LAFTrytVKGxnzLmK8ZYu2R",
  "key14": "qzynwbYyXag16YzYZfvYx2t9wJQeFDoCa2i7qeLWMRz67Zf19ef9eZNp2TibAAzksYRCicXpjUdhHtodo1vtvK9",
  "key15": "hErxS1bLdztrBupXuU2aGerVVzZMeEpab55RA9VH3sd93zJpbpwyVr6A1Ed83Xe8MwwGkwZtNKMEfVYbzD1s3B4",
  "key16": "3BHiZ83tVAtoZ7xuj72UY2uaaaD3LKJFd1NyRifnt5W8xZQmGwvBBckAH9fL1oy3bDgqX9vYJUf5UinFDRManoT7",
  "key17": "5rTJ3w6iY6z9qdzYSw6BscDtVndcbaCgHX8aLsbSHcZpQeFwbi9ev7nVsHLeYeLnMo9PyQMwL5CE2M99MgHuTKHd",
  "key18": "2WFa3Wv1CNTkDoGTaDXsEfpnGSYY7kJQ2v47yTVFCpGr3Py9Drf48avvEuuKuEYfgbRptBr1w1pxFa8CkfU8VFp5",
  "key19": "2mG31URHf7CHi6xeYsADQshwzngxErh4LiBM8PffinCfkS53qpXbY9ogxwAKLKHHrjjNbrMbyay1Jsodr2o5VgXA",
  "key20": "q38ePJBta7ZvR8b8eENKoH4LQVLMoZRky7jmcSqcYBF9SVAzeQCPq876FpU8nN1QvtvFkPjbbWQ8Y3HrJisxEPg",
  "key21": "2cwTemoPyAqziCrFeN7rYuCjj1QFyqfPdXBhsEZW2gFTgYVkexFWtRAhkeYsc6rrZS63uhWGz2BXScGWstBk7NvD",
  "key22": "5XbNbRjkJsyb38o1HMuah35yYDbYuqibeq5Ax9byHG5Bu1WgACNmreV4BBLj36KQsMww8p58u7p8JbfLbh6zEei6",
  "key23": "2tXgARyzjyZnw6DJ96b6KPVuJup53W4nrK4xfiiFMr8XBHe8UeiX9XPsmfkumd5CMKTUPHeaCB56DcBwPBeio4Kb",
  "key24": "2N1kaYGGj4o1irZvRWx3EUFQQcWNhagokj17Vsa8gP1UkCWqAvYdJhcKwYdcr1Lij5YUzpPNvV4FnFFFe61TADot",
  "key25": "1hnPmpUyBKWqczGC5UMDRehieS2bad8y4XqKn8bFHzrSYHSwZmbZcjMS6ZfURYDTbEEdDCTBQTG7MZtebrPiSEw",
  "key26": "3JYmgJXXJvhtURckMzvBSSxmVkgkBUZQQEcB6Xnxx97oygHoPqtMCGL7pQp2Lqdb6bYMmoGBBYvh3sF97hbTkHkZ",
  "key27": "7U68B1dWSExGsQLfU2mKJzasmJaz5f9xKoW6ZE6FYNPfJRrJFyEQaksE5juc7gXqWKZBYSQufAULqAAHM6K8vCh",
  "key28": "rXBPhH8312yr4wv8kzXAGjMSqHfU9Yofb2gmZNzi94sMFRot2hyBc4oQ4dma3bxkf5QfmLtVHnFhs5o5af57QVy",
  "key29": "2d9EsHqZ6sWjTBKd5VqjSphmtqgxbzZoMqsXvDo4vxYWFTK2WZP48VeuyVmvgvD4TJNhLBhTNEbNzPJKtBZBWoRR",
  "key30": "3o5mubvfJpnwT9ecXjTzTwG1xQGzuA7kX87TvizYz5oo1n7KMhUi4eWtYnhFQ3N82wqW9Uiy5uDwqJPsAimASuce",
  "key31": "LQ1d8SVcYVKb5yCqpLCByowBj35yzmp516bmwdARz8GhiNbvTqhMT8nWStC8ydR1QUr2wtW4fASxvRij6drE4au",
  "key32": "2AXrERnX5ayjPujSpcCAYFoCugMp1iJ4YnBVyVXhdwCJQcNbC71vLERzgEjRbunUmLc1VtioJ8SbmwKvLRbNKoPG",
  "key33": "4MYaNcHuaU9Amy1gKScskWqQciefAHJk7L1hahLMRkELstrMaNPbpdbb4n82yBbnrjXR6vhwW2weSL5GHJpFaFc4",
  "key34": "5jXCCxRPD8whsLewDhVdL9xDuZgPqQuAQmLVTDwkShCeRUU5NCCyao4U2i24zk5u8rBjxtPydsFi99Db7bna38qx",
  "key35": "aPFqX2iSwSMkhAGJdnfC6fUGxytFfDHC9kkVQQC3mXGNenrMV2ZWe59rXuWYtwSvNtixgazN7zhvHB4GGu2KSj8",
  "key36": "4ypkUhW4Y9dE7y7FVi4xSenpbvSzuf6hEENps3WV9CaVwXqEdmRsYb5YbUY48JpoxUsjttBMam2vSPcJ4e4NrdGD",
  "key37": "4sewZS3Yz1Xec1ytXNzy9Q8ztg3zuKgmzJH37k4cKxwhQeqkREf7zaRwHKCDq7iRsc1KgF9mpMEYWJ29niY9UaCz",
  "key38": "2NeWhYk6cZM8ggaLYcanFw1Ev1RnFaNtmPJYTQwjy3m3dDkboWyeTme8rUaZgSnR8o3gpEyJXFZ84Psosy1iY4d2",
  "key39": "5dmZhHZLcVS4B548acWPGx6TYhnkjyC5bSHBVFHuySNNybShePZH6WXAiCDeTrn98BC9wKja1zxktRtN6rZW8fGC",
  "key40": "4hPbb7Fyx2cvzsPQ5hnozUUaKVMqJEnGm8fiXtVbkbnU8P74Bjjy3Wr6sD5ceTNmisn7oDXVQT8iqRjSHSzzyBAg",
  "key41": "KpZa98G64FYXQLokUkz6bBtYWUZHYdWmnf1ous4jrCaGXLGKGFJbrY1EbMmrqP2RiDmvqLbpKkAxXsUw2SVG21p",
  "key42": "4v8JTjKT49uhpYtvGE5J1FXcuAsCdJPs2ozAnmD34owaxe9SfeogGHZWULJDk79Nnwq3ECx23A3NA9zgdPGknFN4",
  "key43": "9CHzcTfhK2V4wGfJciW8M5pQHQBJAYP3bJF3YSuAiS68zeyPtB361p4186KpW5JNxdrgbUED8fyB6yj3EJNkx8i",
  "key44": "474P8v4NexiPKkZvZCNkPnu9ALxknDb7mbjQ6ZHJS5HyDyfAyVej71yFhxkP6nq15chpvWEFEPxW7uxLr9k9DzJA",
  "key45": "23ZHvCMTHYsD6RFDTBBxbhc7ZBJms9CTRdzM24CLznoSoVQpW76CDFmEuh9ofD5MfZm2fvaedTrb9dSANLerGSPE",
  "key46": "oD5GybAaVsy7fcfPeTfS7pfAmcKWHM76mQCGbErCR2xrZUrrTjgVh2auxb7SE54qgeQ4VU1vZeDdYCuztwoezT6",
  "key47": "2e97cNAF9CwWqhKdzTUXTBC6EcenBySmr4eSRaxAdkggQv755wQXvCrtTmzCqWgtEWKBtoUe8EZsEJdfbNotJMSF"
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
