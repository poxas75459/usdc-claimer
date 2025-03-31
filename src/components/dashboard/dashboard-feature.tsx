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
    "a68RNqyYCQro4pvTjtownQ95qQxi1ERURZ5eRSeGLLMoxW2zj9CPwmP1Lf3rnbh3btGAmt1kPK4T5pk3EAKzr4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ww2U59xeSzPh2DAXagYnmfDSMX4caieXJ574ugwwGqeStGN1zvNzDoQo3wRtqihvdUP6i2SkZSbo7scTTHuJAb3",
  "key1": "5MP4Dvar8wjyjtsFukY8EiyBQxBMxLuGFSYNNfL7Ls2nkGW6tcPqBz3VPtsW7cHuT5KjCTtjJjGFaJUEa6uGKE3o",
  "key2": "UFDekvrZ9yHLXaxCnFdTdaug54H17tpQqd43ybp8pPGhXpspfyuygq1D5feWwkyuyP8QiWpotQkCAcjEkPiXPjR",
  "key3": "2PJcXoxT7uoKfKgj1c4E8zHwuP2CT8aXLTg7WHDo5UBJ4FnTpZvf8mNFctQd1GqiTqCToGofSEJwFCrcho6WXYxc",
  "key4": "9LJtTPPs7MTxoWvLmo1gnFWDWLfAhCnwWzvBp5AHFTqc8CUatuLcqK4AXNo2NqKfZwcknGgBbALqnaXmnSmRYTB",
  "key5": "5TFSsbKSEWKcRnLNbWbHthAEY34hsswPLEHUknBtRaQN4zjwq2pxotgCXQyYayQLxH1zvyPwYbhzj8Y2ykRocsCf",
  "key6": "3c97saDFi9ueFifwosPQygY5QykBR4qaYYpD2wHAJ4fPPNfsPDv9khZUYC6ADBu4F8NxwrZyiXP7V8XTtyQnU8Zo",
  "key7": "3vE4oB2efbFGqrqBfWCYfDnizPMQbf5uSvrwdU8bRhfN1E91DVwJgs625XDNnTyY3srgHGgdSyU6rEYydL9jiQND",
  "key8": "4DVUgb8zZy4wDJsEr1cj8j2qoCmMXhtZca63xAT3QnUWMoV7bZYmAMbkqwc2rMZLWUwodYRXBurihaNzqoz4m1QA",
  "key9": "2FzvVyTupfA1m2bDQahy4Dked9VM2RP2xAbnfpPHPty3DiQcPND8YV4CZK6jbHzV5rJcExtuDCXaVfQYMR8NiRhL",
  "key10": "5PfHFhXpw5XC71thungVy6bkPyGVEWZqgWQmrFMudQuhLF5AVVLMQzAhGqAiVxyM1NWFGSf5XjnP4b9sa3TdPpg6",
  "key11": "QVK49gZxYhNjERSjive8vRgxY6AurRbATMyEonYfQEtX4ZYk5wwevV8uzcuMRjVFtLNkcYu8N4RhUy92P9C7XEJ",
  "key12": "3j5icP7wFuxznt1vvoQGQfx3Ky833R9EqyRBmmCukSJk6cwaJnEidTPLcCLsjet2ts1JqDvoZd7bkbYg3m2RqzFS",
  "key13": "588FaFpK3WdnetEG57FJW66aWKPPQVcLX6hRLTCbg3CmPB5yDY1CXZburjQog5U5RG1KMNtJxo8LkGLPByXQXX57",
  "key14": "2JuQ85yHaMh9PuMsS2y11ZXyXziw4FpF4R8xfnWRAg8WjFcZhdx94NFuowQY5Bvds6R9VAge4HXeXPXnwQgEqZ7L",
  "key15": "2Ff6FRFJMKgJijTE93Gv7o6peACvVfPzmmyXGNK1Lws1H4HxnQzz2djHXFbgvdUsGcxtEj74ycNgrBJDGXAZimHS",
  "key16": "4pbUBU1TnhDVPFRwp9yt632xUqsu6AudUy9zJMBFzLVoXLRHkHKZggUcdd26w5codR1eeNsyhTaTqWtsXgG6PepP",
  "key17": "3dinjQz71ZLz4hNCncvcK3eXui1rPiqaKBRoDPkej4s8AhsuQ7zH6Dwu7NqUT6xG9BoMWjmtLoTgpFkMXkxWGhc8",
  "key18": "wv2kZaRQNxkTgYb1oGYsiCtDKtyV96iiRZ15qDN7Dq9JMJnXQvLVaQc7zdJHtH4UKAxNCMepXgZkBp3JxYUTPYq",
  "key19": "4tXVM3maEHz53bhojkvSvKqMEA9TGx22H7ouv3jhZR8d18ni8FSRz4mprB8QgAeB3YRkRBADaqHijH53yxcfrvQ9",
  "key20": "3S4sT7HDzvYohNt2YzAnFYvTNK4fCHjy2RrHgkVYKmSpf6F76fkWZY1GzACq1ocGwzUo7zZ3jzZdRXyf5GhhXPs3",
  "key21": "4bkjhszi18jNeNDmbNG5y8Pwwkbh4V92Bcy82W2twLdYRnhbf6jmn7MGZrQaXzfAGUHbBoe6Vga5BpHaF6hBrehZ",
  "key22": "5Tw2TQ7WhjQZFz8is9tsTvtHHfk5fDL8CHNANiC2KPiLK6YbbxQd43W5xoGqCWtV5SiGr94QEkjWwhxNjVuegT6k",
  "key23": "28hv9GBkJT51wKruEWcqpDHNeMTvTvGA2koiWPQhGJXdGFCVs2KCF2ifUKufKhZtznLP3QdcoWUQ8NshFz3RCtES",
  "key24": "Mo8wC72yqZncggvQuPob3rfWZQTUMKGd8UiJaAUgVx6x5w3tnBF3JbTtCg8zvcucvWjwbDxAiYu9vMV7VesBNqi",
  "key25": "PS5WmGpaQD6ZMoyktWC6K7jFSuSmR9aVUMELox9kom45VVVLdoY4SrtKE2txTW9qs5pXiqtW4kNnuD8impwwizt",
  "key26": "dv4V6Z3iy4cEC6mv32NwrcTFbV5DAsSKGEVrTAc7FL2oz84LEJhTcBcJpkPHXoFei1MRnikAGW1Wx58hY7fnzHD",
  "key27": "3LNeb68XZy54gMEKCjSBUfBCaShE94hiD5inLmqf3LP2dn7cDDtgmJrBWm7ryQHJoC6PB2WMmE53KN2ozBAXcTaY",
  "key28": "4xkLgyWJzv3UD4op3VYf3668E8376JL7fM8TM5fFVerDJdKzAsBSmJg7kRP93cC5yrDxojLEBxnABh3sWG46a8GK",
  "key29": "VKzi7YgvcSekGyvRpBbx1RYhAR8x3gtLGhxLpiXcqCKbYuYjc2cFAXeL3e7wkSdEU87n2ocxK2v16GdMd49kZxM",
  "key30": "jnCUJubgfuzDi7oxxa5VFt5ZtAS27MSnSkw6qFHJEpaygo2YGWYc6QP85bUauVPJAKXXwewoJQ81ygZUsZ7MkvJ",
  "key31": "5yBoyT6nhdShYcMv94hmPLVHjTS6q96sCsUefdQjx4AKGDEcvXPKrnz8xrT3MgwCXnhn6n3PirenyRPi36qC7X2G",
  "key32": "4jvka97MD18pLyTd9tbsaNSP2Zk713KQ3qPxodvAxichKGL1LQ4JbCyPkmVhqFHRA2oAxFvmMrWWC2kK8xXMmGmC",
  "key33": "2ucUtZSFyGVjq4sbecgHD2aYqkjTLyVC1poRBqU3LPELDDjLGhyyNe9dgXZp85zQjG4r83Nx1VXSy1eBRKyANpVS",
  "key34": "7a7cTDFveUMfis92TsYsswWUiWFGgoCr3usw2GZGpGj7maersb8E84pdweS8sqV432D1367ScVnYxqpPDcczyQ4",
  "key35": "3xtSaLQtm1en3nwk4bzEGaUDMafjd2h6gCX7itZ5oxb3WtAwnvFRM23zusLqvjtgUatHn4Aw91gQWarKSfpufVha",
  "key36": "2tNAkZxxHxdth9akixjoBDfY31RERC6HQ9kLpz3ngdDZa5jUMWGqbvGDWbCasf6RYy8vs2mKMoKhwNT9LJ2kKKEe",
  "key37": "2q2FbZ8Pjdgbo49kAKfDY4bgXyR2SE7zVxex8D6CfuvwaVpRHkkWcXg9gKfRcNnfAVLFEnEW5jFUBMkAbcVjkA2w",
  "key38": "23y6KpR2oA4qUaB78HEAwiypc3dfryQh4tqpGLpcckEC2pnduDossCbtuq138ZuRXt7WUm62svSZYo93fK9qMdxc",
  "key39": "4NpGsCMyxgRShwF1Dqn4GCYHimurRm3EXnwwUigoeXpg9HPUo1zwo5YPnNRPZpMVR8JWriPU5dAw6suTCQxfo6LQ",
  "key40": "22q4tLA96dhgp2tvY6a57DZ7ScPjc5HFDk2rHZt8iJsCvSHLzjP3w53M3m1sWdxyWmsXw5zuDk6neH4WEyv8Uwx5",
  "key41": "2LWXcaXDnN1DhD55PpVRYV1J65R7khyC26giRUK64JBd4sx1pYsBwP7vCWZdUpCnLK2hDeZCLRFLCfZyDGjGNM3S",
  "key42": "3zTp8hVgCNA9KyjkgKR6BsaDWvr1v4vVn3KWNDtrNdw7pmbQKH2xzDPsz7WCwndtfZKbGG57MsDsLVnkw41Sx3wK",
  "key43": "43FyHsExS4pYZF6C1jPouaQSKWrTcW6g2r2Rscf8BUWt6Jtjph1cNapvncwqcyDQGXF9x68xSDVZwdpWfT8mctqp",
  "key44": "4ivYJRsuDjxCfNapqaFERLcrTSbCTsMjMUEa8v4Vbs1SLr4XVvgQVVK9aExdkZLkdzszjjYTvUuNi2ej9Jyj1VtQ",
  "key45": "3mHXKBfKMyPYnr92KpRchesS2vajMnF7jkNBAUY5Z8YSX7Ty8EYX21uepoNFf8N3KXo7qcMaEC9RSteS2AcdYQe2",
  "key46": "2dtjSueWf2TxcinScApBj3wpxP79YwZxgWsStgnx5AGVExBRgd9WkpwZRn6WAZZMgUFe6FtyQ9eAFL6kj2ju46E2",
  "key47": "5rMspn4SEZoPm53dxZDA5asox3TMT9PqND4jDNfqWQkKNGpAabfEwqPyj6pZie2Xvc2qyEXfzYKFiGTAZtKCq137"
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
