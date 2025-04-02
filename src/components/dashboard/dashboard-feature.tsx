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
    "3QZ9w6ZCX7SCWj4eUAB1u3xGAB6uub6EkPcyCYk11HdwhtuzbwFr2bxB65N9kjap1wvNvToUDiuuJPizXa38nTt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hkfY7Hc4VcruH6TJiAvZtUPBkW3XqZNYWRtrNph5AKVTSvQa9eJoLbiAqkTgo6K2jkmBMmnPpinsh7TnWTWDDML",
  "key1": "4XRhcq7gAjRuBdpehRmrkAcmqAmDzmk99BvTHf8F6pTCPmKF8mVzEqKSf9pxcmoCDZ8h5wH6Qz3XfGfzdckRiScS",
  "key2": "4MwSDjzBW2vhxjgaoVAaR3FMe9q5wfJcDn1N5Vc9cpUhXZ7kvcAvYcAyeefGJK5da1YPCHACT4mwVEeNTiEhsuLA",
  "key3": "2oaWELbu9HbtGTL4T6QAo1bZDRExL7XgepTGy3Q9Kd5rr2Q9mnwxNmF2hFfB6pED9xUpmGP3E6EXVQgfRoUeVQhm",
  "key4": "4u5qYbwqN4u6X5gsuEyfze6ZsFEEMtSVqsFYyrXGxBzXs32CDk2JikgbCz3EaMhsX9S1cbeifmMTWQ9FJnwUbEPu",
  "key5": "33H8uqHwQBdG154SFeMXegSJhugmetnoX9eRYqAGQZTVDD9YK5KQfdGD3VQ4cWqbEgyP3tjaxg1VE4o7FZt87Tzm",
  "key6": "66hvtjizATkSH5PpyjyXmMuvtRLJWo4DGYt8p21QmMfhQKN9g4k7mKss2yusVFtbks9WgmkLsAWUe89u5sBKzHTd",
  "key7": "5u5V2y3wgwC7dg9RhRahfsJ1Y2ABMFJ8x3TZ7nAdCzJExrFCYqTk6EuJQLWjhvM8hHJCX3D21DwpdSBbTpDkmQUC",
  "key8": "67AR66j9jBFirKuzSBBknZtPzhZmRwzuB53KkrykQzASNMwYJyk8Bq5gG458qM6P3H93aKg2iXMHTEmCSR2qXmvR",
  "key9": "31V8oN27XFWCFpDm53PAS1vKA2Ep7Lmfrea6sNfMvcKEvsosFU49dvwG5DpfwbNk7yMBc9qZYaPQiRuPDChWNUoX",
  "key10": "3uEP6V1YyANggRoyVa5gouz3FuN43ar4ZuKg3x6SofvLQzbM8fkiQKQW11EVnd9w8XyxVFgrDuFQtuorLSkthzYC",
  "key11": "XZe4vjh6fjPnsfBruWJRC5dmMkfiEVoaukk6f6R6NzEv48SCYvSALUTLHkz63JiU5zTKH6J58B8rmirEpicjvHK",
  "key12": "2bXooRKduNhyLn1uU2acuzjDTYS9GcUFKrnXykbHT1Ug1pPc159V5oEsVHj2Pe9xuS7DbcQ4q14kar3VG6NyaGdr",
  "key13": "54izZX6jH2r1rQSQT6Ju5SdAvcLWL9tVAqALS4pvbgvVycQvnKFwttjUe6DjuuWmC1cFRhBvoQ5UcrRcYDskPEqJ",
  "key14": "SXpk6dNBTNC4rBDsAUpAUNGVJgimzHS29kxdwqH7qdiBUk9EescnnNPZZfG8Ae8RgXWDtk1umrNGHemqYtSm8UR",
  "key15": "2Av2CNLGFLJ3PwZVKo13uStJHnipUU1V2dby1vyg8RMDcRQtxoEDrrAuW8pwnFyHsafHeDUW3kq36XS4zRPNMdzg",
  "key16": "5mKccY2v4y7SWV8KWYYKg52r4E2g5GnCrU7vtWDBUDuKgmXZRMgXhy3zbr6nP6v1JxJQnEBGXPRqioikJ18v5JY1",
  "key17": "ZSUa7UYqU7KYQnGmmv9AcYSm4tqT6u4bcAw8o49kwAgtiSkdDF6ETpxZS9JWpnwDQzBWxcFoqYLx9hMJ4j2z2qF",
  "key18": "2uQKjURYcjX3Q7g2oDF9SSAFgRBwq22Rmtu1ocdHXXdyhHpuGsF4QgXRgDfJoU9SbxWsTy1u24BXzqqJWPt8AVRb",
  "key19": "4fgLJzGqcFWdHWGeX8JWgNCHuyTjnPbME6xh1AhHenTCzqdKQ86kxJKMcShTAEk1e5Wbm8g6qedepC7eRtNfzi8E",
  "key20": "Jw1UQk2My9BMtxBSvT2iRRyoe1SYxffxeq1V6gwKHqtLPQBfJGqD64ThipouPLSaoHAebmCgwJXdXWLDmetx9zS",
  "key21": "5VUZPt49rP9CfMngdHNJHPnRwzcekrpN57fatuzjmVKdvyqVDCVJZWRS2knZcrugjLP9siTbL3kij6h6gsyK5DS",
  "key22": "5uU4FYKWvrWwiFG6AgtbaiPojFBtrgmMXkN68S6YpwLtjhckRvhjgPZdjhdUwyYxUazvzqqmznjmxvsTvnVT9qLD",
  "key23": "3Kg8zYBtbCBd1r1TaYYhZ1SUunfnXcyRDptuH7KYCRxmhD8n2ivGHapRF9H6npbqbd4EKdRgKVByF9z819hcxLdb",
  "key24": "38ez2DTJwqvTWNB3b8HSqbz5VW7bhmuQMJtDxnKPKhduhoqTgDrc5SgDpXVYxcJUFGPLVjj66sTuiRPAvU2CvBo8",
  "key25": "MmUP1M1u5sp21N1YhTYWnoV3P1L2PZ2p1zTgyugtcEMLMrA8s6jjBvtFBUgh6Uv6CWVP9Jqkegm4YYnrk3jfXvo",
  "key26": "5Lc5oTesTzd1kSwhEawPavE9GPsPGBNDfQBESi9PJfrKtLWUtLKwisnTbW3ygkFvT3DZNDYNetQfncXyUBs3QdHY",
  "key27": "2Utn6yiVjkTBsD11gP84v2ziytzJykRB72kXoC6SJiTK7AiRY7KnKBC4bq9WZxKsELyuZ5b8gD5AzaiNQHMKHSh6",
  "key28": "5JD5pQgTrffA9ttMYq3iqBpN3kMudfGnu9buAw1T79Q2ecpsQSYhWRZcy5vZsAq9fjNztbUxrLGkf3krtqazRGf",
  "key29": "3Gd9Qyvqj4V1qKBYjVq6CiiVqeG7hSr9773mWUEJt2aatfKs88qraRVjvZjTN2imtkn5xKD64Rh13XBvtkEY4yUE",
  "key30": "5AAiZTLxmSPo81brqKBpzW7e5ED9hLkgX3udAhQpXH3kya1KHzcERepy9Dt4ja2vHDrfECJkrWgJWcBz9xz1fmEZ",
  "key31": "3PLBNAng4VxVz9ShgT5yEvZMob9enCJWKz6mdKxKVppZm9eXJpUvLuiNRZ8R1cEGYuFHyk7Le2ihgYeJE8c4Rd1w",
  "key32": "4Z1Zip88qqNVH6YsDaSHeAxMmDUn5dta79JHpM4GveNxyyvvcPtGNC4X35T91nVaL1ef1g5RnQ3A9R8i51ii9mQU",
  "key33": "5oFsWKLfZgGy2E35DcMjGqjyari73gvbmg6frB6ZPsih4T3c23bgNA858DwP76pVyv3QVuoNPvrhBsLhQeARMNpz",
  "key34": "4kKq7nVeh7cA191RnXtDCmmTzVWENRHSYumhfqzQX3hLAeA47LNB9qGYqa7tFkVB7sLvV2cydp5TMERq5PYh9qLX",
  "key35": "KDYMdkeEKZiWq3Votepr26KvnNdpFBr2atDDNaSbvu5drBj2dKeRwH7XBKfFnmfBrjZcUoen5DN2xx5DCLQHTA6",
  "key36": "2uKYmQVWMRFzLS7XsiVwop4US9YhgTBvWxQEKv4v9rKP4JDLfEXhjvbLPZ6iFAvQ5xHvixNpKoahHCv88btjc8So"
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
