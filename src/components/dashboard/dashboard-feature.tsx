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
    "4j2pYJXmbMjVAwt6w2tCYVJPCzEQk6TPXgGAKP7z8YnLvov9Y4cmUy3upqmwwgdHeBcvTKoS7Qmv3JvQAk3YRs9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BoN3oEU8ukQUTCQyH5GajWitghJBFWvBUr8Ly7bB1FTXdS4ZgQz14rEdEnp4eXTDR3VrVYjZUnsdPUtqFYz5hcb",
  "key1": "yDD3bQPXMFAbv9nhP4F3HbkJ5uDBpbUGprKf1XPCVw2dV4CNWicrj8qzfnHbQU51nKsmWSrRhdtjxTyUd3b5HHX",
  "key2": "2cZBs7cbfVJsox9Gv9R3iNQ8ujSX8yCG3s98K3nPYotXPKYaFPxH6zShSq5t4VupPpMmoChTtvjKqHzNXeUjCMGX",
  "key3": "4PXCnYDvMXnkcmDD5291ku61t5BZPSkBTMYNMETvyG8fNy3zirynxsHk13bhwJ7fBUEpf5Uq84LASB885s8tGPiU",
  "key4": "4cYzp2LoA3oJ1yP6yTeezS3MwCFrpC57BmdoK8eugopvSjM8jrLBBdRMYnChfiCU3SShXCsuaPxsVrJEhAThkQzY",
  "key5": "2yKKHGt5JYZQrkyRYEmghX8QYXsC1eJP1Dk1awEWjcA4wRMn8pi1SGXkxicj3f6FeHhLdkdecB3eBgVknSwRcVvJ",
  "key6": "2eUnew9FVzaDJSFY5mhyjyHW12cCCoFKUfmn9GANn2685hnCQhzHhf28AZyr9hzBc6mU7Kr9uxWTTM8Ah5CLfqh7",
  "key7": "2S6ZBbGjdZeqKtEPFsHoTecojYjjgvnwiGfYtQUTvQfmAGok695vBtjQE1C47FbhPuutWjSq4xwevtY7YzGkudv2",
  "key8": "g7kJiRfTxebDbFiqL9sFfjCoZ9LUvE3c2X6GYQTdLJh5JDVZAZdBZriBeRv5KkNbLDPtgikDWAuWxKUPoqzXxhh",
  "key9": "4nHLMCkRr5qmm7JExqSNN1MzqAuwBSEadZK5SbWhkqu2fA3J6zoiuVccoT7JC1gf7ZHtEQtxgNDWvheg9TAZKztn",
  "key10": "GSVwwDcfHKnoqkSuJpZNFq3Fa89vXnkvgBGEGUvyxpMua8D97K53YcftYVuuNwFYGjrRu2s9LBih35gzc5QoChM",
  "key11": "52cXnQffruJFq53cUZMLpnfJYTAWJQdvwxAHD3abSnVtEU7UBHFxEGxCYxBtdpH4EDe5TgGEC7h6YMdVFCPs42bT",
  "key12": "5Vwm94GcPG3Bhpk2bK6YYMATitjxJZTvV5dsJfcdxntLrDkhf1m9vLViRNx5QRWCLXj8eE9V1zSSHHsBaPTNxEYF",
  "key13": "5xX5DgiPcZuaQJ5UoEC6GZLbvhLaeBKik8UostnXWGNTpRsYXsaeiwB2XQ5b58VgSnRB9fJiJGxuQ1pTdJoZYigJ",
  "key14": "4GnbHX8bXUgbYwP6w1Ackh2J95fUZQS91cKrGH8H5UFVjc88nhmKdSNPzheT2shmdeqWhpV5kctZMgwCZCpi9Mew",
  "key15": "2eSCh5wJKC1CxA4EjxHWRYbZFkdLkFrWxbpWQatdsYdVgX4Pws2o7KiangoRc1NBnm9LNc4YJpoKFGVu4eQeaMTK",
  "key16": "E69zymvxaNxoZto5L8eeBALhrz3s34HY3DKoZnMH9EHW8a9A3W9fnpr9theXUWpF4Jje35sBgRDb2TiwZWy27bK",
  "key17": "5xs1T6cayghE8onRh8mbsLt4XZVimtGmyvfhsLHTbGrTK1kSJctxCo28tSipHtpLyuoDRu3xUv8Yg7D1R6HGiGgb",
  "key18": "38TWcj1EZWD5d5M4n7HHL5nnpj1GQq1h5nnUMW7BTiGD6j34NuHUiiiXVEUxppPT1SJFo96dbnZaRVqB3dYK64ce",
  "key19": "5SneK9vTuZxzdADo7MR9W7j3dqc8HvKucHAPL9rZVuMkmozVSY6xEbRwsnXGey98YGFCLTkzjfnAVeezLWiahscV",
  "key20": "21AXyDhHASua62CwY7HHH28VJ3f3j2NY5uWK7Eic4kzmPSkBfXeACN6QX2jDXkt2ZQ8gGTmC8HNo9xSmduzcdgjU",
  "key21": "125Y65LARkwKTCPp9nxtTGyv7HtR6hFzTHs7PoxhmHSya1SRJYZqjkLzuUPXgWnfmvAmjrwDqencXSMuit7Dvtms",
  "key22": "TLY1Hr1KNdmMCFY938WobXPBD4ZvBcWy3WoJyzZcSHzxVkEqbYS2kLJKBadpMYi1WyZYRvwM5UA2CnF2ZN86VCm",
  "key23": "pG3JydaSy8mRKTzgGhC63Q4hDNKUpDYhUhEW1hthU2w8JFDHkVQr3A6559PWQtKe9RuyRtwjB11NxrTzxdkc1cK",
  "key24": "4g8ouVEcPgATprnkrpz34y4PuttQqGV1PRiCxM3DSUehAqDxooAsGbAXL5Agzy7JgvLxfjpsBVwdfiednuZfmj4p",
  "key25": "5xveUWTjSonyYow5aqpwGRajcEnhUTXDWHCjcF37wUAgqV8L4CvNh4duZKRX1xJ8eyZWUujU9noLp5DVCMRGwwzC",
  "key26": "28UVC2QFhGLGPP1Zv156Y9NbytsCf6sN7RsGNwiH6sBFtvWS8d7BHD4Hrf3PuJjevs2C1JGD7wmR1WKYAqAb5LJL",
  "key27": "2csK9SdV2StnBaYAQELURhyvU6brTe69MTfhDjqMnY32b39j5wioJMGX1wydi3wTE6MzbEvmwr4UYLSy4M4Nd46o",
  "key28": "3DfC9veD2zHAhZTTxCifSN3KST75CEezVekPs9erJAFBtuqXELmRZCzCiYMak3aHQWMkXrLV6uQWRjbGyA2Jd825",
  "key29": "2Dzuunm8dPoYz5CmpTpxbGDuKYtjLyebebKQuE9657Ah9XEDrLVKV7EKezaXmDMztu3iV46LnC7Xe5xLjQRCJemC",
  "key30": "49UUk2Rj36rtf4ye4ZCmPW3dKe8rwLZMiRowgnVnwxq54MhN6Eq8DX3nvyXU7hUE1fzWhrYspSzUNXXdaGpGpJEV",
  "key31": "5L2f7uXUdZYkqAdTgdDZ4LYXjV7ajcyogbzediNbhKfUwiNajVVfLENmfjjnCMCbZe3wWB5rWS12cNZ589ojGx5R"
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
