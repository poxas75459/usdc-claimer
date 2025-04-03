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
    "5DEuVDCbRmDE1AL33oV1Uy2dM8yc8Xr3RgbRUEjTpdrTpASPpQWzsvP8UieqK1eL1Swo23ZBFHDctcj8qbdSRP5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y3pP6XxP2DCuQ2D9VRChLjrXu1o3ZSvB8iKidcokxxPyRA19jp1Xu4H1h34duSYMLyeKXpKzqMcGnoAn3uNgWK1",
  "key1": "9fSv5NTSY15qaEwCFdkTHY4Y9MQDZ6XdHmL1MvgaVpmYV1WW1MkZtCszqistnitxJyhE9a2VE3GCTAWn9ME7xfk",
  "key2": "BYW4wHzcPF2UN3uqjUWLG9wqrxJwK99N5YzAwFTZFnkenNEtyEJ8hn7WSuvRXPA7eFHchVc5fGmMkjo7cWvQiw6",
  "key3": "3Wjvq9N69dECtpiNNzzkNUUxq4qpG9muboCexyckz9PseTHBi2cmq4bCCzmqhn2cRyRA89gczWQUTW42K1LpVoEg",
  "key4": "43qhkrRa5WCn1TqcfT5vRirztkuVh4grwaKhSPSQgcUc82oP4sJswmfaWUwxfbKo48wjDeU3VpTxsv4WueqMuSM2",
  "key5": "2UYHT2YUKAhwrwqF18WkZYjbnZbe2eKcTvvs4KQySQp78W91gcbipwNTMU47sA54Qsi5LxK3ZiZtk5jGKzaC8BDT",
  "key6": "4PUxsbGzCVWWKWndipznm5CHP4xGnqwdtD8CWh4AvRBJ1QWkXtyiFWB54RND2iNGWX2khwLw2nMboUVavVD64pyJ",
  "key7": "5dQrTtKEnVp2UyUaRk4AcAXn5rGPtGFwTTbncS7WCnKYHfyoQUW6hF2PkrnJnuvSonyfNJUhfMapudBJbPuXx7a6",
  "key8": "4TXPA9YNzuC7ojxYdWPyeAvMJMfGFWyPjUowXF5yqquvVD5iD4qY4DKAJrSTCES7Xs4vsxt6EC6uhBroY2EUD4iY",
  "key9": "Mevey1kEJoHKRNDtzPmLeJEtbEgDQ4KtF7ET5Hcyk6Kc5XMeNHV6UqAT3Y2VNYZzGcSvUHzggBJLyDho1XsZfCz",
  "key10": "4BqNDNFe52pDqscAEzP4mVUv97Tci7JNfNQz4TAzJ5rZNFQuX65K5yVdPG6WYUVeZ5N5QffrDiGmdhv8G8Pz12Xo",
  "key11": "MpxjoVLMCAiu71e2BK2xzzFo7iHXbCvaoHzjqHMr7JNrP2CNJTtGcANC39zvBS4U72XGoD1bvTdcRUPiBWCZ1cd",
  "key12": "KGWJ3YH1gTnNnYUyQJhUysGDW9rScoYXtYQc6ac79QPsS9iYxHZhNutrA1uFwjtPaPXFoEgGqhpAPBARwp8k1Kv",
  "key13": "5uhBR7SR2hDLx9p2gxrwgwuPDGV39vcspSF4SX5idEQqVPDczxWY3sGi6X3aEELKjbXML1X9mx77u6TktBQqARde",
  "key14": "5VUgqpRsxuwMYVG2cDqH1Qnyr9ss2yoM6VUevmSFQSo7E9GVsiyKowTZfdfw9aotu22YDbHXhKkbxhrUfXpw4YEa",
  "key15": "3ffBCUyfd42h4F8J6VLtBajFi6xAp4iv6hzaT75iR9hKcP2kpqyTBhe55LjFKFThoNrM1ueZw8KcHrguYHgd56eX",
  "key16": "5uWcdtwhWLkrcYSq7DJ5hik3uTeJxu7yxuRBgQyYk3J1mPi3mBcy8w8XJNuS565Cf1okybN9CasKtqdQ1hYEZHhY",
  "key17": "5Rj7SdycpwNmXFTtBHMfvK9ahJxWH3uXwciP1GqV221k3cvTfsxz4t1GVXYuJDsRPLErMkYEXEB3FSXzq6zRnMLc",
  "key18": "5DW6NsQEToGe7KSfYSy5gpcALPsYdfBKj22f7Cd3HjetY2ivtQSY8qgKCeDAiCEUcuSXMYx2to2QT77ZBXC5mPVA",
  "key19": "MkmuUn7vbdhLyw9XitHTHYwCKKN9ugJ7ycHF47jvhLiPWUppyCprqrpSYWVmQipc692zU4dfJDEGis9JW3bwXnc",
  "key20": "412jNrXVDpMNcqEmenoX6wiYCT8XtqS88SJxpxa3sovprR6gH7Vuh3GS7jKK6MjXgEuZ3CBRZyxbKatisySV3dbE",
  "key21": "55ZFbbAkDX4MDBnXhz9QJogxCVgkU4kUhF59bA7H7M2URkknF3wAqMcD2ryiUKDVSCh6ZJDGRKcGmaCnsLTtMvHZ",
  "key22": "2RG56b1WVdkiAzHYeKVJF1XAedDcFNgDP3Q4rrX4i46Rrh2VjJViWgMVN9KnaotPGGKM3Dzj68Kgc71btas8in1Y",
  "key23": "38CUpsaDMcd9j7fEH72m13mu1Km4UjhRcsBqgqgVVPztxk83yqhGTHYEMEyRqPKt2me6GbKHQTyy8vq3hD43kr8u",
  "key24": "56qP5KM7FFpdZLT68jDQQUHEGMgZybUBcXGuBYpqCUsCMggvBYXUQLkbEapprQi9TubwGVU9Qr43h73f86uwUFNV",
  "key25": "uEqxjQuF8zvHGF6PEkmspbTLmtmaJyVKcSakK8zotM9wbZkX4Eu6YP6sGZ8BCChVgW6CGukAqa2PciWUsCLioSn",
  "key26": "N2JjZP1hmXXvhX3mjaHRdS1sWas563KusZmiJgXerghWGDp2aMRMyFpxM14hGUVwLRxWKpzwk3afaqETj1dz295",
  "key27": "5aS9eG5kmSTbbdQ8iufPrwYddyC4cMFxA8UagjP62V32HTrpRXumPpfER7UK1cn6jC2LmxGp9z8AddnneW6C9p3H",
  "key28": "3Sz8dmJFvpUuphHcopwgN5pKgwvJ2DtBDh422Cq4TKKxXkGWWQXnnCCpHTvhggdZG19TpGuYKoQJThzVzheiXVG9",
  "key29": "RfXdi5tYtDcBaexJmzhab1Pn1bp5g9cchKFWiw4EBbe9HXoF4Gy1NhtEiJ7LAu1sSmN3aia5udZuCFiBgWa1ZyB",
  "key30": "3eHyzcnbwA3vsKu3ec5wScTXwJbN7MjrAPToJhnxbrUP3kERmLDV7gVSQHUSE2qH2hTYvUAAmsWjnFuug69qu2cr",
  "key31": "xcy8Di4wecsRCzYiWAjLDyQwXxGL7rs22Fiauv1y8Unxa9L938Q45tPMDmvfnVXNaZa41p9JKU4nddCsYZpX5F9",
  "key32": "3TUBdnwxEs26pgCxt1hv7B1pCYejPnYbdSimauqL2gVTxWoZR9WTwFc4Bzd2Z2zvnrTWZ5h9dgvEZCu3LTgRsqSJ",
  "key33": "WBcvu2doowbiN9zZxukmnJ7giTUVnU2VD7ZaN2u7q2xehSoodFxiDGEWq7bmF3L9Ybi5Zx2qYh2XD4sZzRNqj7M",
  "key34": "3v48DH5GZBXRBPgzYtzVNfwPTxauzKTMqAqZkmbKhxtqYr3JQ23zfVvMKoZBzgR4WaAwqKQeChRV6ogTEibRJz6Z",
  "key35": "58fuAnMDs8MVNwWJZTXe1y44wFRAkGqVj1rNsV9dnsT7u9VLsKL27HmLnnSnK58153kd1b71UbqRm8MvmuuYKw6W",
  "key36": "4ocrjH95nvyhYXKQBzhuCRaiqxzQkBn7Pz2gFMMLrEzTppw4oXab38hZnND99m4Q5B1WEijLVydVZJQgBPRE3WeV",
  "key37": "sLAe6y5jmfJF6kpZTFm52xS5XckuaKQb6xQZN6eoVpWBagjKudD9Qk81ZrYNXd6DVaXiMjsSF8jgH78xJjhsXNt",
  "key38": "4jb7JMBPqNSfZ6bQuXeT3CXEuh83bUTUG3K3Vao3wRvDxkMswjudaYT8vBp1JRnbLbYxAK3kGfFdb7QdPBC4CJ6X",
  "key39": "iZZa8RCf3dn3gQ8RRojtEECaAMTsFBtThpetUpV4ea9iLRSEb5qAp3drFfVFxTYBkBdLumGubm9Kabq3wDHc9k9",
  "key40": "5nHWrAroWd68onBwgW4vNrFCYHZnmVbixm34jfo8aiaWzN4NKDKtQaYExNoXUfYT8NxE2L4MCVkxhY2xbwgihcf4",
  "key41": "2DD1RYVzJeZmyh6BsKv35fCXKrzmHDjxu6PUVB1PUkRKLBSkmMw9tKKzTW47ct4BSAK1U6QHqYomJKqgEr7SBMhk",
  "key42": "iLNa12qr6hGsc1L9CTAHQBLX8hCW754sD66bZjRpLFSVWjcXK2VsDFTA5sHVqao8AJfnPGrCKDVVm7orpUyQmMx",
  "key43": "MLPrRw21zH4migLSouhF6ksGHMwYxffUx8a5oVxFoiFG1GJhwzk1y7iYAg5mKZmjWeKfs1zdVsLosRBbLiKrKLK",
  "key44": "28J7rj6W7i2vac1eUqEucJ45QUsngzMbhywtcNGNtVFCh2c2kWitbH3GsotZ4ySvBerYJZySZd4sQDQsjxRVYxmZ",
  "key45": "5PgRe5tNfxLDWxiT7SJw4AyhDTu9XtLhuPLkeCDVGaCNJTEtxa8HoG2hapbz8Cfu3R536rHwAL8RJoLgj775Xut3",
  "key46": "2C6Dm7oBQm1ta62rgDcaPy6J7CubRJg4YT61BmfVRLrjsDshdgwrFWRhZcxawutmVq6AJegTDQsPSC4tjHjkoTXm"
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
