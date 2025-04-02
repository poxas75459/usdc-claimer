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
    "TV25iqeAf1z8ybyV8GicpRRW8uHrgFa79pPgpMkggwoB1r9PArQ7gn5muB4BCvVzp1QfRCGzgJGmH3x2BEvvt4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L67iod1c1X6vQ1d3m26kDj4GwkTt4wA4h4wj25ag4j9bhBWhx2hNuPUzi7U29GfoB4MvYkuVz8mAxGzKbaiRvct",
  "key1": "euPxNGBA1PomwUzNeGQwcLGaAp2epY92uZ7qzLih3S8d8bAG4RL4bvNsWhHNa6CXp3zeXa9gZ7KPqr4A4SNyxVY",
  "key2": "3SCYj2u7bpnjQ9EaX91QyqBt5s5cRNSt71LvVC9kchTpE99fbT4A9onbsvLJ5mV2UreJ2CqGhiph2UYA2K68LNXR",
  "key3": "4LM9LgtFuxmGfnvZGhWTcgfqTEVCsYLKoHkZqa99a5nVKSdHA6ZfjmuKWj37fCQKP61qzNJEYZHYFnQPsbpEeBEw",
  "key4": "5PowLE8Jk4XcHjUQUoDuVVVnf7BWH7hpNykzSREWJ8msZJayNJBB82xtdFt4LNCAMdZXND4fW6VEViaV6WvY3B29",
  "key5": "5sFVQSJhALiZGLGQekPUNxbdhSB1M9PdsLVNARgFEACevtzK1QAhDzq8aANNnk6Pu7J6GquWZbgUNQFjZdfDzydU",
  "key6": "4mhEtuDnyU7AoUxTeVn7P88A7o3PkC5YS2PEL3XVFV8QVFYMLMG6LDsfHG5PGxNMZvcq9fxYi8Pyf9Bspvt3zkzi",
  "key7": "5b51NqHV4PMALeAWGrDwa1W34qbuZJLFJbAVyUH5PAMaqZkkLA3aYYoHYfm3mTC6cattfvEMrqtMAfcS8D1hvPGh",
  "key8": "5fAf6kUX9uxHYqfELf6pSCLQpsRNCaw66LjD7ZGtNgq86HgEd2uv7PGwZYFRr8WUNmemspLYJ6s3vYaPcL5CvKku",
  "key9": "3SkZtwAMQM3M287JfDrqUCwfHBvaQiLZH1tDMN2dU879nCEg1njGBMnFnfMk72zkC2o2icVJJVK8rKr7H9c8JjmH",
  "key10": "4oz8HQM6iT3m2XPatNd9vkX8zrkaqX8MU7kSP7aveju5nedxkA9RH7rF9BAFUEokjhXfNdwQS2t1d3EZv3j5QnR5",
  "key11": "5kfvL1R21NB2mC9hvQudWMUnLCk4hbGNPxHzWDp5pmGsEZkNMNYciQUVuErBppj1rdzcLBybkXzYDRmKMC1nxWbc",
  "key12": "2jEMyf8vGZTLQv1Ua88wv9oVmLdyiAChpfmQWVJnPfyYYGSxgbTuH9C6ej7q41N6cc8XZUwyYBNJBgGCDavQkair",
  "key13": "CJGfRumUJ5wPP469ywWZDmUsurkVEET1YGkYB9cqG5aAdQzGxfczcTqSD8uW13GZZoCamQn2Vbg6EToXLvwCpvQ",
  "key14": "fsXTzt75xkd68xNhYMyRUn26CBNpztv92hYgkhXyr3876idDyzC8EWM6TY6zmgotfTuX3m546YQG6rXTEWAGFZJ",
  "key15": "2QJs7fqUBJbds9e7tJKbMnaLVGTgSZFrdk49YuSBxXUSdYKdJA9E9tHGu1XApuXWyrV3DPJVK6e6Wd2dbNJkgnQa",
  "key16": "JF4uT4UUzph6TBdvu1nmcimj6REGWoTu3HYe15sRjkvQYjPPcpjqaCVARbtqouKr7hXQURtQ25NGQBPgPTUiwjj",
  "key17": "D1GtfSuMvosKRExQFwZ7JNydeVJsXMCx9y3G95jC6XCnEWWsyPBChG2kJxeCwf3TTuuG23XbT5jfRmVM94nJoee",
  "key18": "473nGzg6u5AVqr7tna6nUaPXvLZnBaCcRTKEiQNfQvq9SgrJuGGJX2667PCPoiVf2bz1B36FqzMq2fkYChJSMBFL",
  "key19": "2vzmzZ6jP4MPLUbECWkv2o8dTrQN8118RcD6nJXAjXDPbv8WRdFeez2rXxxgBiwiFS7cD6eTBzKd89DHhj7EHxnv",
  "key20": "3JiQ9sf4XYsMCp1neCFbg9HxAvM44jEAJVB6XV7cmy75aMBMLa4pvbvDYNEudT89jyByhwjQpCmiqiqmN8FkPHUB",
  "key21": "3wGf37Tao4C9J5NyAbuAmwdW9TQxQT5jxdPhWdh7QEbF9qxLmNDFfsATkVBt7xWtQ2F9bTSGvgLmg1oA5p9fQ66K",
  "key22": "5yxCwH8AroRFas9wQ69D9jYUcGYmwjBLFwm6rpqvzNzZp6PaTwmgqu9pubNjBTxhuzKoY31W7thsb39KN9xEu7VA",
  "key23": "5DtMdyQYTuPNLhWompCtSmyDVgtAi6RmJZKpyhJxEHeHSx8VUJiFD3aSoDDp9KhWAjhgdrcsRnN3kgdLdw77L14q",
  "key24": "ST55uxMwTAxRyA3J5FSXEgh9ztpdppv46MtC6DsGHj2SftwY42uRz7hnih8WAHUWUYRF9pdAmcA6iJLahCpxNCP",
  "key25": "5wQdSKUWb4vzcCjqzj3KSmV2Uy3aUPLJH2sTroArpcdVMkqgYf6gZ8YuSXyXaXToSqCWnG3K1PNxksujDB2Vtfgp",
  "key26": "4YT1qeCoZQmZSx51EFrSczZauKm4Kc7VQvo3Tj1S8GrJGg6fvjWKKXZic1gLLXUKMuzbuSnAQtmi4vq5qE2rpLUz",
  "key27": "313VsqwQzMbjD6vErR4FZnvCw2oM1V56iRuKy5VqSgHHghfUPbPyFNFwpLXKffp67g2SCX7RhXJTKvo9m7dUKfha",
  "key28": "5Y4Sb63TUPAE3UTZ5zWjp7p5sXCNtmz74JFRXgryzBKnQAZ7DN1XNUVD77bEj1PqRQQs5HjnyU17YUZo6KNFieBg",
  "key29": "ZZ3gjzZimiuNVuzez3H57YrXcAZZvXYbLuzuWUagvDbV6kU4b7nETjuZhwpafEeasF99QcEucjA8Vfy27J6sW8p",
  "key30": "5uz4awkfwgWD4qsrcQ8ELgvmZUebRAGuEt6Hcf9L2W39U9EM94wTW9tT9c7gkxYp6XtSUsWSAQfXKphqqcCmewsX",
  "key31": "4UxF5Yynf3wAiUvwu3z59uQq4uRZmMrSyZ4oQD5Q7YJpJDsjjNdvc3xVyrduf8hw3Z5SzEJoSjoJEHfzyG6Tvw6b",
  "key32": "3AzsNcj6GevceE75wLhY6z72FPv99H1Ufaa6dYzJ2dWFm879FWBqcH5FkWjEjRnVvojKjLwrsbtjBaS3NTX2Gek8",
  "key33": "5q5fiW5GWLmjj6iKvLzNSwjyKZkfn1TBX7gaoLbLsZKUcGt315rBjMKgqEDH9Db6aUnhZ7aJcJDdHe6qT7iMuBub",
  "key34": "5KFaKCKRoUDd37KXBwFReT8HiBDpm4tEAKseARJiRmKxZHZQz3z1A6tuxPg3iH3ghpH9JRgmXhabTAzJcG2yT4em",
  "key35": "gDAFsT8ehoSGHHz41LtbneNNpPYMhSHfpwBGx6kxXgpjo6XMbS3bSrYbBMDK4o5ZHL2nGLTZ3waXCip6V7hB1Jz",
  "key36": "5sZiFH88fz4XypZr7nBRMiP16ECdqMZFQHdWDdCYXfeG9LcbwmhbsMw7XkhrgWaoDxjQ5e6Ac2d4CxVMW5Q3MSeM",
  "key37": "62gaGY9ztwcJegUj1JdtEPReL2fMCLur3cTVeysUeUkMh1spWN2Bt2UhQrp2MNK8KuEAJ5m9NgcJErXWvrjNnjBh",
  "key38": "2ZbZBXgJi4tUJBbfkASskAswjg32pQ8BczijJ4NPYCRYKoYfbk9XMkJAc4YpSXz7akdgkwgYQ9nEyaxbyPt6q8FW",
  "key39": "5VpzT3REKTL3b95tcMzeeuhKuqB5sENYRvJdsZS9LzQ15XJohHhj97U7W6PrGQzsRVziEjbD5jyc54A3iVyWCMhk",
  "key40": "c17GZoU1nLZD8AwzDn1XUoiAyBPR39dHGKAbXQJHvN31JZdB5HFcHFnp9iXS2ALaB3ffNs45CK37StXsMzn6Ni1",
  "key41": "3TsbPFKKZvmPf5YmsdRoT3ttXpZ71Fa4KF51RwAPT6GGZPHsCoURBhQLPYHyiiA1jmhTk8i4JijXKKr3yVMH6hAj",
  "key42": "4jh2zfy53Di7yNAk2yzpfybvNBNhG3MUz1A1XZCG4hcMbUAjyurC6Ak9bUZeWbjJmXerXfxhTUcvP1By9RCmK5Nz",
  "key43": "5EJF4ruByodKh4Yr219Xris3qdxTBHSzJTZaV6kc5gsJTCXpwnbNoBQa9E5NHJzR8B5NwzVvCHMfrLJxpoQTQLbv",
  "key44": "55hrBfkaoSSB5wj5w7rMgWtrWQpv4FzAPu7wbDmtDMqZuVHsavzTYnE1YL7z9HdiR1igkWxvK4piDkN9fTxrMcj4",
  "key45": "k2ZQnczqdZjmEcih3TVETYFJNUdpL4XZjWzfGZVSR7AYS6qPE51ibAhS8o6URRPnNqLcDxcdNzQx5xHQfZmZzoe"
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
