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
    "4B7BAGivTY6PZb6pcksHme22e2Pk1dqzQNMQb68gHSr2r5LNX72Pvm2P62bbWXcA7jAzgTCX9AjP5gmAbruCRTk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D15rpeodezWskBNmMey1b6Hbh5DFbQjcwSm9jtn84d2pAPWtqF7wdhSN7vEdNU6rWZtzycHRkcv8EG1CZJJQKve",
  "key1": "61XWRP3t3ZKNxNx6dgvs5fudDDUHJaNQDtKaFLTWPCsyTk3dTVj3Z41efimx1UehZc7FJfgdek5Mt3JnorC5vB8j",
  "key2": "45MfY3XUwwrbJXdYRy6Y5qB8pyuCnJAgUBWi5zgMS6epJMEiQSpnsXotHXSrjRuCKFBuZ8YuJ7tv3UrBP6qioKHG",
  "key3": "3N6HCHr47JqvZcDxn8dW4ZNHFgAMEgVvgZDftQfVC3CCUK6ZzVFcrAqBL78vEeD4c4ataTbUb8JnAGSDANPHajHm",
  "key4": "GadQAymF6iXZRzScVvYk1nLv2pnNfMttxmKJdYePBha6KBhmerPip5hTNKZdJpekZCRcop6vs4seD4WhVMK9xbf",
  "key5": "3rRrzpMYPoeRK9G3YKLK1X7D8KvY3Xsc9VvRZURwuQzgNP84cWkNRH5kQLWFVEURBeGKihir8gQhVU3a2FyGJfTt",
  "key6": "5nrKKN3d4RnFRXK8jvFRoKo5kiwxTiCYQyNaWhfgBsYtj85mqFEf7HpZj23GDy2yB32ttS5Q6rqZh8oFx5A5sFyQ",
  "key7": "2pWYutGZtwWG31ykPT13v7iK2UYKd5hoXscinSWyHM18F84YGTmw6w4zSssjBD62riWFxRRc2sEqwCWGpvkGRvnt",
  "key8": "2hGxQeEiJbcSboiXuj6X6iWFvN5uAezRA7g6qa5qM81HZFB7oWXGWsKSHzJzymemvJHJM1gLAT7pAXcT43g6Y1U9",
  "key9": "4B4RxmheKSWjdRcJgsSfp6pY1YNaXZ3TmEc5NNLrup2pScknW8tkbdMq6iadSfeDSfai6EyhVmiDJK49XVjdHR69",
  "key10": "3yjtS1wsgsM2oKbWfCc5RLEc22YMLSUgiPtMePBfHXPmPys7RNG7KHPu9BtUcme14EE8MSr56JjKe8Z911QACkmf",
  "key11": "2vxbGjaFTtUUgb8EQbG7zpcfa4zmbBzqRs3Dhpr5f4GgiTNDzECjwLgQvKgTHLWAugosD2SCtkNb8BoVwvT1nLnf",
  "key12": "3ZNvmia7Wjc3jbZhpvuHGijAojrcemKYdjeZ7W2LNrH9bPbyDabXsLBTJemoSqM1cSmq9pEcbjmUmGGLPNm68rs7",
  "key13": "2Z7TjmutGBZXvkY35PdxemUAhFz3rDtULF8fZFbt42Nt7NLfVjhMasSWdnxnze8e3yRaSY5H5jydvVjR132JCnEj",
  "key14": "37WtstR9N5eZnWa7LEKioPz9sMyx61kLR2Nh81gDrtema3jsXXxR4FHnxPSZnFQ1rZ7RKTYVexvKpWj5LfuZp4JP",
  "key15": "45ozEtqPfSrLqXN5qaQcoMoiSo4zYKy21LcFHJw8eWgQk7V9cWGTyPcpPVruAVDEKon6hVGcm9VsF71AnSNreepy",
  "key16": "N1V9LRZM9kyfhekZsKYYCzPX8LctKF46zwhM3X5iw3SDviAhpUW9HXGYiAXDReeUys96kzq4nDmyWfSGnkV75EJ",
  "key17": "4h9Kxsp8QnXMgoUEbETwSwAqHxWziCk19zjSTvKZwLomLyCf1RXDtxdakmVzf9tcAZxCA1bBKPciNW9BXyJSBfnq",
  "key18": "4UDhHu9kj8EBfXHUU9C465s769mjry8kx61ZUdYb2CVG48Mrnuk1BantgpuRPSGCWEkFp5EJDyy1S5NiXfz4P3XG",
  "key19": "3LF6Y2rMyaYLo8mgh6QpernAqK7g8wHdEPU1kZJSkeQi1kQ92z8jZLtMC85QW375DY2FB2kb3px4FJ7TybEgNiGE",
  "key20": "2EmETxjyC9SZfa9ZeznwnRczGFro5iMBVVRJq4XhkMawS35aw9rYKvhMsZJvNSXmb8GnnURAnwqbitKoX3WCMEGk",
  "key21": "5Hv5v714La1ReZbn9WNmj7KMfByvALkLSctQWvmdD6ixBfWM2H4kw2rpk2237GLofcgw49pPWEedaiaeJpEEZM5M",
  "key22": "2GM3PvM97JRFLYknK23dEK1jPrh8PVoHPcMiLirK7ArNgmT2w9Q8eNQS7CS9iNw4QWhFMquf8SKP1S95KnLZnDf3",
  "key23": "3qptqDNwGLrLi8syjSCUHFGBW1SwGuQVUdpcgcnLsZn4d3yjSLYkcRR2EYNC9WvecsBFSYAhWTxA9rKu5swr9RU3",
  "key24": "JEFy9dx14KGWdEzHARBJ6zxGT5e2xteWzgJHwSSX1Urgcjiz9qv2NcsxHvLu72GrP4pDzRtCLKy6WETaHs5aguv"
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
