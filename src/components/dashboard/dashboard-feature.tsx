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
    "3aDfJLjXWherRBPLtJmUtFUasaqxpwUV4fYTQcEEy3ifpo5ZRmhv2RTCWyrUyPX8BFSMxrmZ5vkx76eM97sd5gRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKAM4sNroFxyW3mXukSF3gPyaKZsT4Chc5F5Nwy1aVYzgEy6LUzkDXxdU9ZtKe2vxfz9acqA7oUizagBYpZXZBA",
  "key1": "52BYT8jcvjk9UdqpRMFucwK6oD2GJ5K7yws6SPFAvD9bbWXWUrBXH4WCvoGwLFnK93nSm8vV8ks7yvGQQgSuZnSv",
  "key2": "4p8cA2rEJgSqCLCvzKDK9NGpnPVovCSZGm9EX51A5W6GR2CaUtriytpU1YS3gFgNrtgfnUXx6VutuHTLPqgb2eLT",
  "key3": "2fkDQeSLq3cwGapTP1219m7w4TJPN1cBQAEpuQKBpsh1FS5asLpWnu5xdKGhobn81xPvk5dCiYcLjs2vqYGyuo7x",
  "key4": "3PCEcoyM9NESthuKatKcqfZRqzvFisNasQ3YEgCCJgSqVaiuTQVdeBk8UiA9RTjRx4mQi7yuX56F872ZTr75tD8T",
  "key5": "32CJ3K4NEJvRBcgJ5kM4MUsiwnXaQ621GzMbToDTm3rJ8pVg2pwvE1hjm5oppPU2KJLFsCMN6AcVhNsZLy4mc4XL",
  "key6": "533CUUu56mgypBAwY3yDNZn2rmxU2wcUXUeVvj82suTEMyXHoJpkitDY88vRyU83PLieQ5HR295KuAPbyasayRsb",
  "key7": "5GoRF7PXcPwU3TiFyrYfyZj9QjZ8GuW6WS833SGnXeyX57jafyrJYkKnLfZkyzDWhYun4XxYhDZrhWVVh3GD6Aeg",
  "key8": "FCJSFKk7QUG7BXeUsXzN6hTrjSHdY2Jg6K5zfXUrBNst2BzoFtwtmZf1RynRcoiVCLLgbLPnPY7jt7E7bijZkQN",
  "key9": "21ypvh6teVdH6GpedXLktQTWxYS3PxjYySfLbLcxCVWUGJSEmGv6VG9a19Y1N97HiD44tdNxo49AHAKvAx4Xb1pZ",
  "key10": "4HSCn9iTvSjDzUyieyZvHWHifG64gK5JYpNPz4iHsWgLzffcaS7NppeEYF7kEVudNp71UDrw2oqJiSgTrSaDGZBp",
  "key11": "5v6zT2uwWfHDNUrw7R1F4bN37VoEc4g5UmFrwk4VahsmwPjanBHwe3d5jdoDTrRiJAxKML22A18xVSmG4T2Tyv2z",
  "key12": "466Z94bfPq8zEJQfVA2BpasTqdXNq6m6UuSAfDtt36w3BU1tcFisLFNDFRaz7eMRLPQtArPyiyf7TBZuMYKyJtcN",
  "key13": "3xFcSkDfG29sDFWmd6buPaQQWsMp58GatQePdkB5cjXD9aHyEFZNJ4TubVdpNMFPH4qXzV2pMFiqdX5n5wj9bhuE",
  "key14": "3ofT8SvUpAhFFkVcsDPfUej1C8Hw25xcNZMvsDQCUHiHfXhQExkvbkheA6dv8ivt9zUPYca34BKx7Zji3avoG5NA",
  "key15": "5zj81DYVLkXYiLXh7XmN9ymiAUwBbgKBf6Z6zUoEUfBGiVeWwU5gxB9H6yvBMt6atw6SHC4axe8Tk7S1ssA2Ctgz",
  "key16": "2RWUSqGghSmkGPEDWoTR6yGPo8H9Jov79B544U8JNv1QQTAvGPqH7SvNcLXcfCrbZvSS38f5B2Gc6daEBf8sM8jM",
  "key17": "24xWQVqGJqrg43vUypCqbMUsAk9RswksRXFuPzVmCSJf3kLt1byPcresG8hTVu9EH6UF4AAyv3LCvNrcVPQwtKxi",
  "key18": "3MqkWK1RHPhwsVWyEhjM8jocaaLC99FnjXpC9VHaALoJEw5rM8YHpBxdn5jVfiy8gQ4hcPKEDhKj42kGBXwxLP9R",
  "key19": "5v7BZeeka7xQuNFqwQknefYBdTjWQJQv4AL57rQchECD77yW97FVkjMNGNkrgJZ1P6ix93aiRUKRzU33pLfb953n",
  "key20": "4UKJG3wFBQSX1wwjGRLrh6YVwMLCYFkM11ZntKaSxdo2sG3B1bxrzMyadRSHfzceEJNTX2cZkvb6M8JUafu82xqG",
  "key21": "iDqCFrE5Avr8JLo7VDm5mjLdTb7VZDmfb4K161zbnsXu9YBcuoQ4q3SpwtUubJ4RJLxMVEHuHhLHcBvqYBmvA6d",
  "key22": "4k9Hhqr3LqbWin5EXovarY7XdzaY35KTt29ij7VNZYmbh8SsrcxZcuzX9DeJxxHku842sAZSaVMuRwQg9FeqEebo",
  "key23": "G2asfpWd6NZdpimGB8AvEmSjX6heLwzZmoikcYUN4guriUrNkunfFXU5QctVDLjjJyNfoxmLRHSR6zXYZfyCMaT",
  "key24": "2xbHjdwMDVn65Uq5x7LBY9Cpf6crqPytWFHjE1k8QqDAz4sX8pXZrWDTaGSm8GW9vmVsVupCqhM5r8djHQE8KbSY",
  "key25": "5Pig7NMMkiNJCi5KErMm6NFeoAE7rpUmhoYbzJ5Eg1wmd8NpgiBpaeZenreqVFSf7FoqWhFupExE1wciunHC4nWa",
  "key26": "2nSdsJHMvthzyjtDykKKxZAoRmrYSUpsoBhmDe7CRFiBb6Qv3enm6vfi5CAYRVetzwpt3rE5bgc4w8mwZvLPj1xK",
  "key27": "hphbP1nVJMpVXzSSZ6W9A9EdrLuBFqZakFSSUzvTEd4W7RmJZqeMhXhaMq83sDCAho76Gwv9kFv49v2u6959U13"
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
