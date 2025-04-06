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
    "j1vrKP5HkdsD22R3wNaL7fjiAE4pqdBPCPnzwW5Fic3LFJNu1ptSE7nHQgy293fyhmaGbtzzkSqGC3aQ2whvPd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W5v9gcivjKVK4D4oYnzpGhutG4Zx7CYE61b3REsNEc6ye7TRyofQfevvZF7x5fmmEVxEoPSBupAEkZ7VJ7JzH2D",
  "key1": "39jomTNLEhrr2jJuzLHNgCnU2vi4DrKmXdBrFFL5ZiFvnUPrmkG1w3Q1VnyfJKkcM5vvm1tZnntktcL247AFRT9J",
  "key2": "46h2MyziCrHQMzUC5VVziaK283JfWM9FJbLANQ156ZYozWkq5SEWUZw587DLGZYFuE1zYwQLmxP9GLxaDAyQKNv3",
  "key3": "2bJeQs8PR7xjtq1m6jgargCtorCwuCbJ9LSzazFgmM6LsAVrr459UzpXELcHTmFFiFqNHaepUnEWwZLf4YNMG7Ub",
  "key4": "2wZWpVh9oT6AVN1av16Y4xUsRgBJjo1nL7ovuj1ikfVY1pQD6nmZdkWCNymAF3mqDREGN4mDPL14EKj22G1ttntv",
  "key5": "4UVFerbChwC7kcXU1r9spgEokC1eufffCAWcKQ1seHZXhkTW2XSBmNS8rhuqkunCiSJnk8vAuLYrKLBf8k2UkbJp",
  "key6": "4jd2RjVFHrbpdrthAeYRcKxfWwXLuKQg3SKT62uy1CdSgjzhHMFNQ6WZXegPTY9Xeocfqo1xGi8QfpaJFpuSHKab",
  "key7": "3GQrWzDGnifyM6jFTUyTobeLNGuJncWS4ued5b8cNc8q7kdwrTEQmMtk9w87oeGaBvSE9jFASd7C1roDqh6arAnC",
  "key8": "4NikVQ1VcgkAVveM8Cnba4Ejj3oqvEvLS15bDmtbhhmdgStLZvnj7AWmPQrFc4W7nTywKMBLsV66EBMdFwaVLdEK",
  "key9": "2TEsh7pMYtU1JKa8bDwkdktJWANAcjKUGimkpdAjjuWQNxbX9SiKZowb1N81m21j8bfyh7d2REKbUEtfiF1xF2pz",
  "key10": "5i8Y6a7w2sbcupFEyGSE8dZcCXhzoEqxWAxuNRvpfQtHfjZnVGuo1bTqU7BKmhFkCTkoipR6ATSSxC5A9g6f5i7",
  "key11": "84pHxBHyu5kpnDu21SXqFdXgbduncoznQny83Ec2dnv8t1uMPRrjuFdizurVHVp3wbD77EuUUuZ2ooCy3qekEmx",
  "key12": "2XjVyUw5JRLiw4EVGEcQ4dezEjtkQayDx4Xikn3oV6Sbv5BR9S18TqvNemujWojkqSKPgW7TBmvkC3DmXdGm5Yvd",
  "key13": "2d44o8X8xbcRGBgdBxuSnWSgaDdBYzvu4YFv5YK6Q6oFn36grG8NDmabQEAkvVAeR5dL2Qbq3ib1VjxbEMJU1QHD",
  "key14": "3Zbk9M7fQqbhWFYbWg8pMnAMm7KZzor4kZNA55r4GT3aGuSTYo13jpanJrKuueAjxnPfZ3iBCKhdFjecJKL5kQrV",
  "key15": "5JSicjW5W76dM9WqyvyGFoGauY22F18qeHyJezu5rVLfT198JWrmBcZUGhUa3gn5i9PfJMKrRdomtsWFerZEUh93",
  "key16": "4XDzbXWSHmcrfx547jMPe2oC38eeEK1erpJipxwsxZ7p9MD6n1DLWfvXjdi2e1yueC33hW1iqAtDoKsrSEKVrjy2",
  "key17": "47e8sNftLa44E6y5WA3pfUPDBNE3mopV9VUFToypYooiSGCsSBTiPVwtNNWTgoNFTvPRmAT4Y2ygSVrW77ZuSoSu",
  "key18": "7Ugk4DKfKbw5cTUmy7WdL5e4DMeFDiy2yyjgsWnWzSqycKPLpg5VqaLfrFgQCHYSvwVBp4vhL9Xz2w6EBAGkTxr",
  "key19": "3jBRvyadYJi4NdkncheAHFeQS3mzW675c3V7FbcCXpzVErHHF5TkqzJxJfGUJS5QQYdaFgjXZ68DBN8QvqxeSvTo",
  "key20": "EH4YXne99JJ2B8v1yR6pFtjvU12A4biss9kCa1n44H4LTgSALtNfm9Uu2rVi8cDXw1aCwPHum31b2BE8AQXnvZq",
  "key21": "4ANf9F5KNXDcM4taTRZ48EWpuutDsgoNajCJTevW8YD8ACdnTRuDK3aCJNz517TcN3WdfHhWxgwNGNmra4gipXJ4",
  "key22": "55kGFictMZmcx6fqniYgr8BQyXcgwqPoMPRTCu7A9bKZi7XiJuqv9X7jDYDSX8v1CWHWe6LeSrmca6AMKtujckBz",
  "key23": "5odax3khQTq2SHmzok8rouH7XvXUSzarB1NNLNyhFuAGqGqSXmDKZMFxZhoYMSedZJN75Xnj85pPryfGD7BbHGii",
  "key24": "2yym3KdPHgzaZCxiQethatp1Jrgws8AVGJbri6fnd76AHcCmqfFDVnvLgSQH1PhvDKU721dKPQ9b6YgJVtbhA1CX",
  "key25": "4rkMtrUTjaw7UgUR9syvn7r6g6hx7yZNxhaMBCy2xFrPoUw4ajPxsu12M6FpXXdd933L7n7mLLomkZWyroPEaQ9J",
  "key26": "3JYf4VKBbTjhuFG7fMNTsjbKhVuyQRz3orMbYUEVbDjZLnudisTsD2gCriHYjmNYp3zdK923cGGNp5uMoRwPrVZs",
  "key27": "5yERRz6nKF1g9nN2ryz5gMVAHAoF5yN9zmaWuVFshJbcWxvfGXgYZVpgyY1YMiiiHCBHyNbCPrf78wq9JJq72SFc",
  "key28": "2HA8XnXz8Gr2W8Fa9KL1DGYUAc3rh4CgUrbYitdiiDaH7ZTiBpuGc7SFLXpK7NT8WNWAdZKF8LXw1rXBA4c66gQb",
  "key29": "f8mryBiGbghaDPoDqHM7cqxEwMUCHvitEBEcG4HBnCLS3osEkASZGCDsPJxeXtoswo53UqtiLuJHm5BGfhcXusX"
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
