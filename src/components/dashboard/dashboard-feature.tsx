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
    "2p5U9fYubWbVpoKjDXUsvjxEXET2gF2U1o36iE4DHRZjMxqUUsxUy9s9s6E4WbphQ9HXGnYmJDYkiNDaGAfKPXNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vuA62n6UjFBrNUdYToUTb5np6fhf8aZ4y6GbTJsPPL5THbHZtYmpmvDrY6wsyUAeDXw9bbunJUcFCZphSkkWxQ1",
  "key1": "3A7uRhGvzqyHpB8Q63QDuCCca4VJDm2juqB51CorA1W1TbY99rnpfh17beLDkKv2VEm5n6TTM8KArfJezDzVrUjP",
  "key2": "YX6hmYAcDsThcGc8WLVuYQWJezkCRwhHbAX4bXe3pYTCe1bEHS5Lj1LSmQNkHsGa4hJuYaMhabiTwqeXgCgAWXQ",
  "key3": "XwRE1E2MKaFRWHyHVXeRC25KamgX1uT1bwhDSsvE4KkPb8QvVMFvhyD5n9fiuRVNWowrEcYKM3wuPVYXB2VRuj4",
  "key4": "3fY4t47comYxFRyouPqLndR13bCRqfLbagXQe67UD5UJ8Lhv54zUMsST9EWYi62LG44NuDm9RQQAxjMSLV34gtQi",
  "key5": "22Djf4LmdYTXoqZrwRpSNFYBJLSsmzZhRuP4yzxxiFDPUmRSPYZhD9zC6XGx2XboDngpu5o5ZaWT2Sm7CMYM2Moa",
  "key6": "5sBMqUYiGjbm5i6MTmRuRE5o1SQSgfs51SDhsvpjuhnoVepFEtfhNsq44kfqwpg15HsMCen6BA4AuXjZ73diEHXR",
  "key7": "svNoqzQD2a1NiG3jaB2r2q3jCpVLr9BcSWLJCQh596Pey4cAJguBsmRpDiqkuxstY8UaBji1YmbaUvzFy1LaMbi",
  "key8": "eSq3X5h287v6pmTNnV9LMpnJiaAjANhpfBBxWZnkQpKWPM6fSb1gZwpwcoMbjEACh1JavtuX3S1MHnW8DoYLC9e",
  "key9": "5FAtL5pGNcnHzLUgmkZPA9EUL54wKTZKroMQGgerVtNPbPC7mZHqSrQqZWjJdtoBRiWHnLoJba4YTUvpwsqHn2JG",
  "key10": "38yit5sY1WGNrwH43Cjd2F7KXPbyYhFLhhLuLjbHX3WtiYd2crAhXesUFceD3xejaZdmsMxjvsiKzmLbvevyQyr",
  "key11": "4CSoxoN6tQ9dW4XNGNesjdCo6AckS1PnS6KHLALAUBaAMfn4SXJf8k6cmADp7dAYsvMwnVa4DRjqcTeKNbxV6msA",
  "key12": "5DygWqEhDeceDfjHYaW2Z3nZtBvWMW9z9gZ4seV4uje5a8gcbK4tRPHah1X4g4cDqCWvnin9H7bd7gv3sqs72J9B",
  "key13": "52Z9p87QXxw5fgcYU3kt5HSin971e7udTnQveFcF72n1ADXM4Qg1VNzXTGJ4Fj3wRyJhDcTxsorXqtKFAgXwz7ih",
  "key14": "5tAvaSrWV6uZgbEY1dy4ggSmmurb1ty99KnK3JCcdHbFs9Agcfmb7av3t88UjvL5QzQogsHDR1fqWB3K8fA161ys",
  "key15": "48m1BDxynwH3XFfiV3K6SSRxLmxVmLaZNGCrt94zxVjJVRvrBdJhiQfnZvmJeM3ufAa4Ehgw6otQvVXefxWWX3Mv",
  "key16": "2ssfTJduHyoZnJcmRRr4JJxpiP8xAL8FsBZgycBbyF7FKvVU3ptDkL22jLwJvZJdxzw7akUoM41zRRhvsAzyuAq8",
  "key17": "2QD2Ap7Q6GAcGSQrH7V1e4STkDYehNa8hcW52juoqoAGJtLFhgu9hLmf3G1faAQL2kW3ovXgjb9ADwjQ7ou698kZ",
  "key18": "3FRurBzuKu9pE8ZUnx41qMtaWJUgAB3GUZjWuEF2FuvidttQrJTy6HD3gejdoVpPP4W7KYedizJfUP6qG1fhygsy",
  "key19": "5VT7VcHBYUG8oBhqQiAHuWuZMT4QDEK1CqJ7dCb8epkdNoKe8WogpvAmPoHWgi2NzAZ4MBf4ZY3AW3EKgDSQNgDy",
  "key20": "5CQrAoKoKiXtcsZH8VWm7mzhpYEmEmkqFo1HLDuhc2g1wjETEJqrAJma98ThcRviEdmurU3etAcx73aPqSbJFqRZ",
  "key21": "3gv2B43kzmQbRTjYQNFd6AGeVukKBrHLEpzK8a7sVDpxoxdyjppji5MYJb2pZoCWLT1JCise2VNzx9Pjqxd3hD9W",
  "key22": "3MEQCa5QbhKikpncsQDvUcKaxr3LcWpj1v533n6dJ94cUac1cB9E6z4ff3oLi8wFfipGq7nxz9eg5mMVahWxaUBs",
  "key23": "25XsypZK4g12e8cHwRAU2VqpkngbyaEddQsvX7FEctdeYqfe1jyBJAFj52tYT5FKfKoEp2NX9RpNqkP2MJDKeiPz",
  "key24": "5Yd4K8gYc81RBn8Lhx9Mp8yWYL6H5gwYjurALDtxXvJwGSMBVUJR9kHGiLXzR9KKBV3Qtq8Voh1JRwn5EMuh1Cf",
  "key25": "22L5CnkiRcb11fsVje4pPJWJoQYBHd3QuTGG4FMTgUZAG9y91PjriSKAfwpk3xTd211wssg9KL3mC3o3R9rVG5Rk",
  "key26": "2nH8mK8PCLQRqCQ24TqdHvuy4pDUdAgmLf1GxK15bCXppyupKyYU9Qrt6Jpx1reG84Y6foyYqh3D2fYLCmRjNmSg",
  "key27": "2Uhys5cktDRUwPRDthbg3dKZpCgFaKJZeJqj4vaKEWWW9CYGtiN4HK9kHcvnF13qgu34dyHDvEWRZaWYXdVfnjBf",
  "key28": "2HBD5ZkcQ9yudrvRyyUoEigB5CKRh7KdMDC68CFcUDz7Kq496FTKyeHTM2paX1rC6h5fHQrHMbytgv3Y1gsWpqPv",
  "key29": "CqXCFT6K4GNZPU1g48ddGMSU1TBpXsQptDFpXUMS3RM2n5wUev2tkxaWwfujxVvxb2pEUry2UYz3m4EXUKS4Ur7",
  "key30": "3b52i3oo4AhTB5sCW99ouzPLavhedavssFJKjo6WFCchqTDNS6yim2pE11KutDDqb6vSjQho2wL4bY6crrF6zZ37",
  "key31": "3NNkpK7V7wTDDgqNigbttQG33KrZeDdtCmNrNbCNch8G9jqgGvAncNqwXfqWK8XXLQfLE1vnqdLJp19ShpcV5qJh",
  "key32": "58fWvhohJMKsvDyc5FqKtVK1Bt4sbnZjwfHojteQeoXoB43YCwVvUYTkMi3kqZgTscqdkQ8SJDBMknssu3XQQzDu",
  "key33": "4oQhgnoswZa2uPj17tK8qZDhMHYeg9sypASx27VUFQzmQ8YoafseCTK73eQEKJUqmqrqQRYZQCtYyvjPD9T1JJad",
  "key34": "3B7ezy61kWKuLupDHwcoswD57SFHUSsFBquuiiVc2b5ZgmCuRvL7SRbvUGipC1ZydMQTZBfYBbC7p7NfT6RSFKtv",
  "key35": "CwLW7BVZ2mP8mw997prRRHdQXM3H2sYZkGq1r9JqUsgKFCFi81xMWhkmVNcqtHn1E8maZnT62hDh7JcebsmKSrx",
  "key36": "5wsUs655RsVZEiDyqxshbtJbsf4HsEMDbJSsPJFtmmb75qBHbWo6WourXoK8UhZPA8CE5pwaqxFCtoiHWMM7cqiu",
  "key37": "sXjV9vKTp3WfFg1vv4qcSpgHP3E3DLe5wqZgqFJPKw9LpLVH3EfYfnNh3q2Kna1Ai1UbzTSKyGJrZJWpHfWZzLi",
  "key38": "9WNA4PfUmQj17FxZeKtqXYUMeLLCcdKb4aBbAVCbUMTVLmxS3ehZjmSu493pevbpQw3bb6VbxvZc8D5brmVkR4U",
  "key39": "2roFWTThwAAdV4t4TRqQV7AyxA9AhWJajM5TJMEVou83wYDVUwQyXzHd3n2YnWrEaK5kxLWnGeDRw6m4eCJ2buRE",
  "key40": "3B2wbAUrW5MbNH6zfJMRrUbd64cf7CCTB9sKcioGqT83B8nMK5qmszAUgvpuk5yVkmnakz5J6jQqqta7reoty3Hq",
  "key41": "4KmiefKFfCcjSGgJxurZS4SyHqnEY499B73AnhNYtVuEFMb2fESKLHooLqqCkkBeUvJ2pT3GSGF1FutuDbRzccnW",
  "key42": "QF1qsAmmLibePT72bXn6EnZVFiLeChfXZr5tHzGh4b2Mb3yidofJrsWp4ng6cTCMr6C78z1a8jCBwwtiCXT5cPc",
  "key43": "5SRUj3XSFL9mrmfg8aWcffiqUnyk6YF8DSTTCPJBc1hRJmw89MttbNMc3vgNfCNnQxnyooTCw9vL1k6yEXwkLxBa",
  "key44": "5PqumDUcgAteZRtU9gek8T52JDKeaXivbUJzRtL4t7m4QEmshwfS5pRPNLH9qW1hC4CSEGxPH43k5SxakAbrxepn",
  "key45": "533xvE56NewUYhVBuP8TCZfy9NjwxCNAyxkXqRcy97MZbuJ11QP8quorH7kjrSwHrZP1gjN8gBnJQKYoGijx1f8M",
  "key46": "2Zpv42mGB862yh6SWbDAE431gZ58Qo1MNchGDHC2arx1eUrUv379HdR1hDs54dzkTJAfe42vMkH7ZMAMViKUigFG"
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
