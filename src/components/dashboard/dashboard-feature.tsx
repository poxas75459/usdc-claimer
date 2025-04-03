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
    "5woN2aM5zprQi1fYwx9yrpsHq6w7drPjybdjubJcHYWTa3Hmg4dVNqKousfeAMSvQWL9kxppEV37PJPLaZrJkczW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PBpZskX1K94NKS7cdQqdjkA7fXWHobc9oisMfYzoLHts5btDzDq2kUVXPghDc9VA26DBYJfbZUm9pSShxxvh11R",
  "key1": "cE9ppX8Dfz3xGcECQWbB2XAUb6z8ySxcMn5uWjEt1bJoB5EaK9YnuDYGhmn76mYmDmSvPhhy8KPLTFBhv6BY5gP",
  "key2": "4DX8af2Trhh8XV5aDVLnJGEYMFBi44tW4HnKuuo9aQYLHJJn4xzZGDcamR3651x97UkbRKL3B6z9fyNX5Zg7aPof",
  "key3": "22ATRGesp6PJUr6yYJyYgTyCX6Xpq6AEYDUXWYM3rLjpnDskSbB2CVtGhavnaihmYBYdPa8zuMDJijbNntzt656P",
  "key4": "3cY67UNLZUJ7HRWtaxbLD9PFPbQKP4Un7hWn2ePaT86t6omQxcxGi38ow4BykxsswhGdxHupsJ3D2pnv6um9EDfs",
  "key5": "5UJtE27n9s2poVm6rXbjxHnPoAVF4N9Eme1P9SRm94sLXHhq4afioHJu47p67uHGWBPHVx2QZ1fhQytqnddFE6Hp",
  "key6": "5UZgNkgfMv8RWUsQYaeVPX42VFHK1ViJbSbvai7ZXEq1NdKBVTAsdZ3oQRUrpfHPQF6XSL4Mr1T4u719128FBUYq",
  "key7": "52xPGVsqfwaX9SJwFuv3RrWZaKAYy5v5idCdUpFpJ5qFEa55Vmh6HZevzmgHneozfgJJic1hvXDNJv6icoxp77Cx",
  "key8": "2hiWz8R2xWK3GjtHm3Hpw2kMn11irFBLD4vMsx3m4eim45bAePhuesSQ94Kiwg2NgJmuQjWGGstfjvKneknx5ozU",
  "key9": "5cYUnSRWMGgLf6Rmrwjdaz2S68erKnTJNMnPth2huno9r6DckUT86xaGGQg7JZbS6sMxkRUeWuUy3BkzN3juoUxE",
  "key10": "3q6ELyHgRoqHDUx1pbunr6fPxpiDiZyxSJWFKS4AjEaRMLGES9cazq84zcwMbqHP2ng6xZwE4SqDWCer2c4eYwfa",
  "key11": "fu3QQsenwNFjYxesUvZVELo93UgnFz8gHPbGCwTUeNYVfeGTpRcrC5k4Xq8MyVNfpinJnWk6g3rhkZcwMvVL6MV",
  "key12": "2btMkg8hJYZJe1xBUNKWWHtkFoA7cWYjbcwsRBc93ibSmv9HMS9y9ZLFWqCXRxW48e9nqi7Nhu4eJoe538i95SXp",
  "key13": "4mq8s9NMnuECRQLR5p7ZpcRCDsuQ89fL31wYwzp7ZQbpohsmZAxVoLaYdrLuPbG1FjCySDJEArG7bE8TgcaA68W8",
  "key14": "3mvpyTW3Jf5juv7HhZJjMseJyjt9Y1YAAz7iaXzyiNzZ7JqQMr8Wu6sNtJZySxsQmGt7eaLTcZo6CzTokwGx66qp",
  "key15": "2ynsiuik1jpPdmyRgzP7zk8CaM8sAittjukM34j8XgiGYKs54YBf39XCdft5UDcfQGivnaYmciSGSE6hFXJeJNbL",
  "key16": "4XDvfGdeLRbWvLHX9K7xXQfa2hFoWzpY9TJxQVbccSTDXPrJVPBCXFrmqrmMXQibd95nofBCUjKPVgEKPFvuDtju",
  "key17": "eszaA7Q2pNsyLERFgNEMDRXSU6BULVr8feBrVirtREzYEMEZsjZretLxUSr1uWYVyQiYBYct1fQcWAGcLJiA1aW",
  "key18": "K64Gome6etPYX4DXG74HGxK8KgyMzgLzZuUcudy9dewGDhwqowc2Xfps4tTAAvy3jmqWKfwZLm1zvaEVcn99cUE",
  "key19": "5qqriaLgVcDCDeToyPD9dEbmf84Y4BsREUACoVEMPkHDWHNzayW2UQQ2EXrzhJSLLBGqVde9avBjQsyETxzX7Jgv",
  "key20": "5Qpvi69N74zTWGhRzgjqpV4vLFEP3sH9QZiQyahtmfM3UMc1zGtvrrUJ5qeMwknhAcTgJBiQM1qWbsz52BF67YPR",
  "key21": "3mantw4RAqPGLvd1kh4J4zwD5L55k75vSCHueSGrv2zPaGNtX85652SjeWTyP57nDrAd8FjnqcShz1JZJ5xscdXZ",
  "key22": "2uDjD3jDB98PxP1Ft7oFSiP2URBVPnB5R94F7qZ6BW4hHAedgnaJvi2MPTyUi4KMbLxpUp7u9bCcntvtfYqsuqWm",
  "key23": "4HeourLftWeb2taubdf19CS5jQ6w9UGTHevGxmejQyCfDqPm98vdy5KoJ3XfXQCkRRnJsumsjfc7YVcLHRZQyxxv",
  "key24": "4ufbPAV2rZffgjd5XCTTBJ38AujUmPsWmLs1Yg5D7yVeDbcXcXj6UJ71t3fw7nkFNMQBnzvFu42oY9cKEvRyZ2su",
  "key25": "2sqCwmVsFAzwfWn7Q7k6pFHbVie9oQe8eeDZ7wXpSxtfSHweA8uVbmJ7s8pHPYZ2FmuGazCb38J1sAk6gm3SYUuD"
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
