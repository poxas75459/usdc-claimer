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
    "485yTE1ACqaG3YGbTCVmVrWJh1FcUoWvE3MuQn5VnVovFf9EsAjtoSXaj98df8sgNbmRyuNFkX7LbdDcMGtEaU8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DF3Zww36YYd6nwCizQzNiNhKGG2jEqPmJa4yXGRf9BRXdrgNCDdVmaPk57AwJAXAgCN6X5TSqAQGgG1q85yP37e",
  "key1": "3UQ8oPX5byfEDiTjzGVbV9iDzHauQWT6uzLchsr26zR1ecPi7vBfSvMQSLhVm4SUFKrs87S5WmNPp2r96UcBEf1B",
  "key2": "5Jf4hTh7aW816bV9oSu9o4tSicG2hj7gV35UdrAcw1DESJpwWe1PZQwiWRsfp1ehPeDC52f7wDg9ww4byXK6xV5H",
  "key3": "Yc64zfXP54z17PHAVaAcLvznYyNMUvmZMWzW2Z5JacwGjxVop9zyjCeutXByUNXQnqdAtDBPMh4W16t2W3RkwSq",
  "key4": "5ozpjmKHuY6oGSA4CKV57cCeviVn1KvH8gh6UsBnZECJEfGrfkSp2LTa6jXcWQHLfWoZWmRyHstR6z7hDs58tM5g",
  "key5": "3YeZZUgD6wE7rqwo1oE8ZpZKHiRVknPDpLW24FPux2XckwA17zVuexkUB6GnLC6icKMb4RzDESrvDLcmPAK5iYtA",
  "key6": "2FFakERMP7odZNDp4HyEsWdDQ3EL7i1yEE4yLrc7YVyfBsnDY6Zf5A3fGJs7TQj5pvEr6nE4k2sgLfEbxZbkmGSc",
  "key7": "2HCnGe8vXpx79ZTogyHD3adKuV6N94o1UVabdTbtNoLAkVWMWNJVVyQLhx4PYnVKLqTcWVG9owKw5wz7TobGPCvw",
  "key8": "56P2oPVCyRdLoGJHcDoX2UTuGZtqwjYC8r3ANpTPBNisBmvkanbrxemBpygGKegmzC2GCoY5U9cztE5ECm3LtB4W",
  "key9": "5pqEfXuiFnCtgpczbHCvr5ZvzsR3qyzq62rJp3YiuPJv1oKpGPN12JnDAJiFzBG4KghHsWjh14xuKRrvEbkQAFBe",
  "key10": "4fqCrSJFmN83BfMf5qzpCHGrnPapED1ohL5J5D7Uz6UTXHwRzVWTbjJJFUK9GRKVuDaWfL4eqRm5cpjtRUq7AieK",
  "key11": "5c1WExtjp5KyL9v4BEMs85aPrNV3DRtePndT4bHdzdkM861BBj7eeuQ3U4tABJLuR1JCCgeApLy6dXmkDtgAFPNp",
  "key12": "5fU37ZkFwAPEc7LgABwCZ6mcPrVNhdfZxLPSuyvenabuCEYV5YJs2JXjqYo1y6JrC3Zgr1dxF68GRGXifeNgTjGQ",
  "key13": "2ipRYnQs8GzbYyfVCtPYnzRNiFx5FvqszLPfPCHDta8xhnhEA8DXKWgYdiG3ViGpeMBecVBodqDR2KU8uzBZ7gLZ",
  "key14": "2V1tK4LfSR1RyBpTWDZnHTg7qQ2sL25xpGbmjfKNwYJEiEbrNcsMKwxe66sGKchcyUzHGCtE9wGMCKzfav86M4cd",
  "key15": "2DUq5iUx9F4TQePwSScjijHuJz3hgGFXim8GZnAxxGKmuLA5yPsdwtitoB1nuXVvf7PCdpA1RdSco1ZeSRJBGesL",
  "key16": "4j6DYkLQE1zdVSydb8Agagf79FAK9S5u9f8XYX6TSVDoJR8s1bMCsqtiz6iXbwjcfeScKvk43feCtLxNtHAXMVzD",
  "key17": "LsHZ7JHtmp5aQY8LbYHLr7fPNb1vJQ59AD6LG831qwQJJiq7eVjcwiCLCrGNHSaXx5H1LppaM31sQxumonWM7gs",
  "key18": "3p1BGn8w8o9wqiHE7vwHMsTsofAGCkFBW6RGMBzKBS5NWeKDY95PBDHVRwU4iRe1xisrcwujV6UfRnoptEsnfdij",
  "key19": "QZsrsYCtnEbFFNoSk5Xxbc2jktLGVsFzdM66KrnsTgYHLbLgaLrYeLujGDAVPkw7ouDuAGbNVeNDcY4ZZdDuTvk",
  "key20": "3DbXpxHgRhYRbrS6dhkJ2CTgREmvs8R3qQSzPGGJHP1oEC18cTS8coY73TXSoh63ULrXbg5PSVVZ5PDSnV2T4CC",
  "key21": "2d5NR5wRP2fymJ3DB7QCEKWvi1vjLzoTc2zKZqUrrzm1VDMMixnULDxtFmaThrfFNb8tLCmBP9Ap8SY3JQmQ5ATg",
  "key22": "4XUuRxe83aHUhdrWTFgq3nmsJdqpYp5aRWQetRL7S9cGZp9bajqHvaP6jbqqywifThKHbxrhnTn86BqwuRXaEsT9",
  "key23": "4p3H6fBkRk2sks91MA1rAfCymFUE6QNvsRoyjJnm5PjkSfKGcXN5dFizYuPDKKtw3k6V94zQDwXodTdeZTe2jejz",
  "key24": "51mC74p6tDXSjYJys1NF3HpCceM3W7FVhTqv23JQk5B9jeFD8BjEfaiJhbmMUKqmKwNGR32ebFCrHFTHzJzam2Ga",
  "key25": "4zhPGTM7jkcKA854xCGnv34c7ER65xhDCweXXURbE9SbWarywPahJC9Kr26EE8d4nf7XQyoQRjkor2XPyqhfdHXM",
  "key26": "aJwjsfryMBuaUMcrUViihRXk6UGoTXHTNy7KP9BQxHSPiUHPa2vvZoS38kcTBseX6zHnSDdxNeTfGsJj5YsS2DQ",
  "key27": "3jGwsz5YCLmyooBvHwLt9nnsbpgb9okrNj4j8uEuMU42ULj4K4kLgDnb5kpA1GuucGTFAtE9SVjCzDftsrgsB4Ab",
  "key28": "3C9QM7BEfpWj1eKEEAVkpi6ohpRVtP9M7Esigb5LmkDeEtsRGqKkxD6ckPtxrTSAedsEdhP3dEtc6iooxgSAdnfi",
  "key29": "4NpSntDZRD1uAP5mCBtesEsDycbQVdqpLotsEqrzQVPQJgYiWjhscMQ4f8zzdtA4jwhKTUqJKoRfcMe9hZow5Ub9",
  "key30": "36A8F9GVujF62fqwLLmjh9xzKAb59tn7uVwqAjuJqFGGNmaYq32ULXsytc5K2qfowf5ojdcV1mgyMHg8wSk3WWug",
  "key31": "3hi5FYXd7J5xHFkfBT7HPFEkUb2rXQWCRex6Lhxo2iPPFuuVkUm5zPzT7R7NY6vwEUGMNAvxU45W4cgqHGLzPwxz",
  "key32": "2MCV4X5MkfB2evt1KSHWNt3rtoWm5vYJTptrZkU4cDhNUn8PEBuAQUV5PcWWiV8uMehhwJaVDkB4k8CZL311BhpJ",
  "key33": "4CbTDV8MJBwQmVpWfqaQNVjdht9AzpKZ1P9dgNekTgigjH6dPVeh74VpQUfZCvHNbmoiYtwAYsoceYz8qd7UDmkN",
  "key34": "51ZFHqwPEzmpUrBeCJDXCQmpR356b2QnsS5xSabRE9nBour2aWrQqqcULmP1LAYoAgzxarC5nPRDgG8Jd1q64p6W",
  "key35": "5asUkvUuLearskf8M2Mag9zsftgt1s2XJ4AiM967e6gZ5BkaTWGtwY2kCHCV9y8RD8tsvSFVWbb3QCoUhmwgPzR8",
  "key36": "4f1BzSHofpFzkiwmx9LwzhzpKxSXqQH3y5GZvmxaqRktDTHkvZ4cdhoDrpw7ENb46F8Uj27yC5TJP5B9USEoMGqF",
  "key37": "5PiUKNTKjUdAv2Xg2qiJ6YgX4VyPyRnBMr5D8eUowsWLsCyQKLX1npqCZsVU6wAzXrzYr7qTASvisdJgNx9Gof1J",
  "key38": "4uM6opPZPXbaFRPoD6WNYhHgassaPStBwQ4hmBKRSqxArKEdyRt3oyxSPwEXcJXscuWy5NuZa5LiEfPA5nmqhaHK",
  "key39": "3P9GLH8pmwj9ksEfMm9UrWFujrBF514fDAbTk1AptkcCp2e8Ht9QdPWmpoKdeskvb11EqWYU9LJ93SjKoU9Msf7A"
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
