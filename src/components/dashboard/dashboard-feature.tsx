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
    "3FUtYPkiobxTg8MfFGpJHEjq4DebWwmqQvMAMqLpFrSJBuSf9Jr4dDw8z8RnePUMhKAvJe2jsmtGrVSvBngSp6JJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H23haxYgbc9mEkW4Z1dgaR4c6caw8xwMU4QAX3nKtJtwjR18tf85E5BjRh32XKSn7T9JLf4DiPA2yTnJ3yC7ZB8",
  "key1": "X7y5mcDYcAUUNRJjqyVztZMc6C37Vhj25vXT7oU9AEq2A86qW4jUegpueahC5VXUDZw5YwGZQPFdiUJzj5N7Sr1",
  "key2": "22RQHfbXF7te8CaJGDEEGp2dFgB9Ctx1i4PUFLMGHFogfZRwLwLyQQwiojt9eNvcLck97sFPwcX6YfnvSPfutyvK",
  "key3": "5cWtCTMRPyrm3N3hcJqJq5fmAfJNCf5nPw2onRPf8he2HkYHT7Ke4KXTVPaBwoK1pHy2y7kRWr99nn7RmQEXpadD",
  "key4": "jCxAEa3jBhrorFXvy8PRCc33LcgRbVtc4rThWfCvUcVK6ZCsxJ2gbNEB5xJRNF9WxHqToJoKpdFMY2LD8RBPuAY",
  "key5": "2uvfkFNkynBCX9LiVoMMWrB1T8oZy5q7DyPTD6ngDo9XRwumcwJxD5KjDrF4VF8b5Q1xxVz9NAeMib9J2moXzhLo",
  "key6": "64yb5YmgyNNNeoetoVSWfqk8cWZXgEnwX5e6QcnSW2U5ECG4p35XPF2SKtKpFqJYyF17Jmk4dwLv8Ej2eyzBz4tc",
  "key7": "5NT86bpmLvStniS9PPxEq6vb4uU7yUDnJfUnnUaoBCv8SaMiVXsnnz4n8UHCevujeQ1Ci88DwqSbuo19dkZHUdUV",
  "key8": "4Y6ZrCxd2maWfCqPv6sNneBkCgEMxHtLVfNzAdSxJNMz6CepfUYPYeGCjG7rGCCdFjJd5i16G6XUdYPep3PDW8jd",
  "key9": "5QnQeKT8i4Rpes5eYgknSPKSf9fYoKkQYvUezJvSyqQFMK2XRrMtQz2Q8Brp9N53fo4fFNkRMwFEJTjzq4xKZG9T",
  "key10": "67Ftiamuo4g1GSKCRnczWWP63v6LuukQsotmr1a7esFL3dtxYTMA13ys5tEkjM574k9pcFGCKRzP8TdZ37hNqYay",
  "key11": "4DBCCT6fCcwWTWYKe5iD3HyDi6kr2PfNfdfbSd2HYJA8P3xjEwknum9KRtpQet18wokJPKyH4SNd9VdQyUgsgK2t",
  "key12": "zt6dDoTKTqMEVBV3dxf2n8SE3FTQhY2aycNED7ptoz9b3pBhTbT4q8wCGkUa3ru6fcM98yFyvPRJm2dfb8dMgMP",
  "key13": "5QPjJeeeffG4k699qqBqRxsoWWMed9saP1Xz4FUNfqr2Xoiagfb6JYBVWx18Zwyhte7EWeV59aDufFzkyLdgDfMT",
  "key14": "45Jmi2JNnpB6c4GKSLnRAfarHMJwa9vVkDcGeiC2ieX9fHGg9fsVC3UiKcQUpCd86HAZufv81oho7mK1njgVhK7P",
  "key15": "3VVLfCe1e97AifxrtGcpsrGZKBMct4VEU1iLuumv1TtRjLeuc3pPJrVTEJbv98cwA82vdXWWbNj5naQzzeEXraPi",
  "key16": "3hxqxv14CNMNQV6CTUBy6rKA4PZxXCTxK3V22RrjMg6GkXi658dJPkQnp2Z4cU6hBLmYyKkCh3tMAjVTWtMnrJjP",
  "key17": "3vzPiiANCXVFp6eyQ9PTiDmbQcPWJj1qzqisgGm4WCZD4TbZnBFbwobkW9dbQJxBgoxJC4hpLockEf3i9DtzFRuN",
  "key18": "3HEki4HhMdYpxJN6fQjsGme6CR1fpZYxPiqcFRUD7P1MEMc2RWh2zw6jNqtXTrcP66LGNEYTdi944gaADmfduicb",
  "key19": "2MuY5hzcWdKNJ1cnnDdzy4T3oGckeicR1k71yR6FvtCMDDcGnUwXAw6iCpzL9VgvJBcdWY5tS8phGRMwz5dL1YMM",
  "key20": "2gX56ZsNopBcfcJqmP82uHJG8RHysMUes41dpQpcPEtV5G97bdSXstCLEvBh6mGDGD8MZhzoJDnM68yzCV8A5U4a",
  "key21": "5JfmVq9MpUaxg5Pe7BNbwC2PtNZu2ZBzgGcVmrVn4HifLWTZhTrLvHH48BP6yCkp4HrRHTZNPpS2NnZzoQPEPmM",
  "key22": "3d8GKhGwFqA5J7WUdTspCJvheEWVKrY69er37YdVgGLndK82EYYah6C8VUp9eLAf2B2s33QLYjU7xC4oLSBFSxgn",
  "key23": "2bK8Vx6CSQ2PVztREnT79dUWR9VH6eyWq7woEL9f1NhvAdn6Gjz49ATDe9JTJq8Aqwk1CF6DyzjFkEkLecFF2xgh",
  "key24": "5fyYXJz4eamb5mB74kooJ6F81Pg7XoAM7MUPSeWisscmgQ4o4V31RsSwwjAcRJfzWUt4ip2rRQQryJBJBqibe6CW",
  "key25": "3AW5PuC6WpXPA6n1sru7d6btqzQDdVYX68ZZeUTkG9m1eWqdH4wThsVSvmBEnndgg6tHDiHQJrdgTCmYaWrx6QqH",
  "key26": "2BoiAK3Wzsmf4Ak1GXFVobEeDGPzsQqK6cKwNMMs7GFR92vbRdnrNjaVaj1AKD5bCyv52b3Aquyb8fPbQiZK58m1",
  "key27": "4iwdJh6pizzJNRKEBJ9SeWZUHLSSEFFFm1xHgfR3CrMMWybwiZuGcEmRURdH5sMNm31XzDqYKenAV532jrjWqCMS",
  "key28": "4NYVm5SNywPgLGQr2De1CSQPPcgimrC9nrbRt6MpP6NsZ6WZZ8khV9V9eg8DGibKi2U4smmgxFZFk2imdVbC3pNN",
  "key29": "5kFHAa4MLQtuXf1BQf5WFAtFB9VhZxm1eseYFyvLkUCrerdvTFvQbB9h2i7orZB6Zp142ReQRsMxaU2kw4tqGuu2"
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
