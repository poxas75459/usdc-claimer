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
    "58z2Wi8ABRNLdap6d2vk6Wu4h44hnkLZJXyp2YSuWCb3jKENEkwrrsNGa7aSXQLVejgheFEf5ehtNYVMJ3QJpC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9uKk72Z1PgbkaZamApMWkHU8MuDrjpVhcocUL3Fsih9fTgCzTqeQBWVjrhF1ZtbnpxAhFqKgpeJoT3Yx2ozihBp",
  "key1": "33w2y6L9MrqUzt7VrUjzGxZoqdFJSazMJbjqxt7pVW31s31LAFce6tJXta35YeR4uLe4q24viDNytJDWcBwnLjE5",
  "key2": "5ib23nnfPaYHMrVF9Tdqy5vKPKrRp5Wa3cVMu2KqC28R4WCjz6yMWyhi4mrgPPj2ut7Qf5E98X2SfarboCERzKWR",
  "key3": "qGzfUtNKJyZ4CGjtQQcMfYMHWEjLa2eUWWCz9h68yV9DxDft96L3cKXAmQAHBMbyqjbV2bQKRcLm7d72p5JfdeS",
  "key4": "2Q8UbTryYZXKeFJM92gkYThmi3sWAuzRdxykdshdm8Pxnm6upEHAUVa498hyH9shovtYXRvNYQ4WH6QJrQgpWjUN",
  "key5": "27dvTKztJA1CzwYhofEA7wyrGBBLi2o83ijUx7cVsEEc3w21vaz94arE224ytDjdmNBsUsFV3NP7vaBXZTM1JxmW",
  "key6": "22XXbNjBb6cK4e8iZ7SVqWrdRg2SHLgbsVZiTgNUrA7Hww2Dwxjdx8Ce1ZrrKwjMLQR2kThjWhp4CDErVhxZAEf9",
  "key7": "4saEjPLLz9xKMbSc9USFSRiVk7uXSXFbdTUdxtp1B5FwYnyvvZt8RS4Zefn9nNopx7AmZ2pC9Ni1JHw4L1bYootM",
  "key8": "5iPdR4T3xDKJpnzkik5cnae44cvss12w82eQ6sZzLBqZ5HPdPiAsVDFojJnND22MAuqibvbskHrwygnzB93Xqm5k",
  "key9": "3Xqo75Ba3bc1riiSKLjojxCsW7GqL9pGTWjXq3FfCUnEoCMmYc4E7e7yuZ51BfZ3pYpdzrmorkgZVwuY8NCLgAYG",
  "key10": "5aKgbi2Wz9pYJbfWujj3SaHN6DxQzs4xYT5EjZorBUt7ZK6KVfnnQv3YV4hMvLPaGUXoerkAjucZpn23YLtd8RGE",
  "key11": "37N8tjwXLJU589Acc6jTvNPnm95FcJZ6LQcgfkDYjyRgNhFYm4w2aJVjVjmBK2U9Lz2wSPDxPffwBKKzFLkwJbin",
  "key12": "PYQHCAdLhpoMtfUE96fBgS2NdSsx66AHAyNZhut9R5BG3syvuAAYjh7xiLq3fQRAcFKe7KKqCfqLkQoe8P3C17r",
  "key13": "3ttwrHj4h9NJmVjUNcvEt2DMNxDYKRMMf8sAYvDKQcnJ3kvhN2JeWXTUxPoKUXRqsNk4cLUNsuh2VQSoGf7BMUot",
  "key14": "4LXYRGSE8oBDkjXH9eV644jhiTASGrpv6VNz9jeCW2J4YMxscnXmEEsYQTMCjxX1eUB9kgjeW2uvPbvVvusYC4QG",
  "key15": "2fnzwdVkgyFwf8Xhqs9VCFMoKznSeCSU5CLLu7UqAj84NutGcVTPVrC8Asm6PM8VmgRXmw9zmHYUU2RB5nA2sTHS",
  "key16": "29BWH3q39zWcLozPpLX9PFw9b5jWserjvwUPqJ9ZN2PYuUStUsepvo7ZYNG5UTu4RB7FZyhnXSZpnV6aAjHMiM4M",
  "key17": "28x4mqB6mK1TeNgfFKEgUdVBCkVoKvn4MWTvkf8odgW9DY3uy2xPi7DEApcHriUF7o25tb5pH6dB3asp9WcZHhLG",
  "key18": "oSQdqSGzqByuWLwFAXWS6JmwuMhjnUVjLubDRuBMjwtZTRonyXLfBnhFbLpBied8HeW7B7W5WMw4MDVmgZchFpq",
  "key19": "5kCmSEamAxHLsvL33YPM1gmnFoLdKn3Zab8wV9r53aya7hAGG5BpDvEyUHSeSofQ2VLVKt1e3buV87GnrV3qMg2P",
  "key20": "3XyBK21jaWEkygKb5svSvWcA9BpaZmmzXjz2aKi9UWgaqYWfPDF4fTTTXVBVkibsEsa6UhB9YQ4wj8sNyFrCFg6Y",
  "key21": "3Vo1Hx3oAAX6eJ1vQ5ci3zT2MTpxfUBwFXKxt9xiFJVx3SPATKYvN7sbxCN1njXyimAmG3H3vFCmaDg8kKQ1SUh",
  "key22": "4ch77vRYqHWRHRPasZ1mPPDQhyot5iurnHj8UWQ6UodT7dzXhaocAUndQQaM9gtxvuQvqSiuzugGSX8oqCe83dw7",
  "key23": "5jgfwcReG1rdDwn6Bqr81viuffNteFLdNXS7qxkEQdw1mpWwigKEMtfyXi6JGn1bZHLcJpwsa8EtbkMu1GUNaMXS",
  "key24": "4EHUk1tDmDzS49FtwMzYyHBpy1J9c2mY42vhGUBbHRLHN71aEj5WRxvkLhuvrWorrWAkkxgAu4BNaL5uwsqdtq29",
  "key25": "5hnUr41qMcimyU6xjuTo8GKL4PAKidRKo75J6DxQATPLTvprkirdz3FZqJSRUVDuaMDQndo1FJMKay7Rwi7KiPx2",
  "key26": "R6hBMrgCoChtaCENRqGbVMaEYzQANsw7t6zHGRh4KeCGis6Vpv1E3x8UrdtT55gyyJuyn5vMPyab17XR9sigWVt",
  "key27": "2ewzixt4CMxwFv8kuBarbjS8fwqxyhqZw2bXDFjRQY8fM36RC3en2avUQRd2w7iPbyFmoTYxpTJZKsNhk92Ka5my",
  "key28": "67nBp9hiArAssVXz1c6ePL25LcUHthGztJXzDS3DeDwZE4XJz8W1BZpRPRDp2WmZYBAgmN1teKUnHu6nreFwrrvx",
  "key29": "5HY5a9qvbsLb7LqV9ms4rWsnzvMarHhTtJWBKHj6zaPFXCLVm2ZSVK8EQzYwes4MbuuRWMYMRTjC66YkymxVvWB9",
  "key30": "4u5cXC8LCsSdd7XJhejt26Cf2rxhcqRfg23kdnFTj9nKzHDdmmwQQ2b2CEon8CkbQw2bMmgLWbd52YFo6WAARiY9",
  "key31": "2ekJQLTvERs31SKZn6x4tK5pS8s8qSuW2rBT3G5qeaZ49jPfbxvRgVn1oVxPBWm4XzdUnADr6dRGWKqMS5o9msv3"
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
