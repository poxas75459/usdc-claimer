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
    "3D8qxk3J9y3ZPT9HxzHHL5FcbFS25AH1DqQsLYZv8B6veKWNb8TX2xA9oWopFcq75kXGJAPEQ1ZdLwo6Q1Dj5AUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWwmcfrTT2TU1GP1AgwEaPS2H8hYmT4BivKxiTDAZarHLkLx3ca2LuSmnNv7GYy3dFAwNVLyKxM8XZX3LNbymc4",
  "key1": "31A5UyxvddV4GLCTHmH9urP9MXkrEfd581rLfrm8T8DTLnXUuo3HS45zS3U7YugR3SJeAJcc19Phw8hCRtB6xQNP",
  "key2": "5qPtbbMgXPvHeqZr58wZ6KfcqpMgBYmnApZqECnmkkQR6qtJ3vbu5gcyegHuytJaqbXEjiiYXjTiKPz9qucH9vHG",
  "key3": "2ZkpdC16Gs2XfeNHv6r6CiBZukqqYLvjbEP5RVvMSe3D96V1X8cFdGrSDqgVoL5m3THZLkMigEGUhczB5BQNQZWW",
  "key4": "5MKAfh9V6T9ZP4CkWUsDr2bLpVJAR6eZcQDa49op4PhTGmgarueo3XFLkEgRHkpCWkSMSqWQyYyJyDdL2rauozCm",
  "key5": "FsDJb6JGmMNBC2XiuZWL8rNNVf2rSyxseHfNzTkAJY2KeG1gVfNAr9nJtCzFpnoPYS4UjjbtVo9cZ9exNRFxESY",
  "key6": "4eQbnbihYqsBECzxEnEqgBgazs6JVueo6PerJF3w88cj8kjrYZkMhMfbLUnBv5wSmDF8pxt2wVpDk42qxCVJ4Jyo",
  "key7": "5kjWXU7Tamxg1E7J8AfM5uvDaeRYrqWdFW9NKu4JdxRYCzPfc4LH5U1zxHQpKoZidnp2iR9C5g7MbWSmytbSgtxC",
  "key8": "LgzVvnLJrusgsv8kULATBBWJ6dd9no6qWLfpTPcPNXaYQ2tLDCqcDKWrDhyTavPHvoBVDhMoZkgnhguDWNyk7C4",
  "key9": "121ZZ1aaAvtXy4P2vjzJiZArQoamPkK5pCCtMobi56bsHQnokU5rhot4we486ndW8RCCULZWVSj1K7Yj6cXPPFcu",
  "key10": "3i5SJp9HQFf7PUiaN5j5SVn921JQ3cRz4jpp5TdkCh3P4ZYubCfei6BNwgxwKKxVv3tLGDfynGp7bS2Gmwwm7jdJ",
  "key11": "4wfPyQ26NyoLQjNUhzfuq96546qpPFDLR8LFgekFRog43P7GQKnwVMJreFYpX5ud91nxXnQm19KQtR7MLxhLzD5K",
  "key12": "8RXYbKV7jLwKwoNBiJ6cjoxbkoH6fSkM2vycQogxYv5X48YaBKH3WJVP1kf1sGVdC44qPwGw8pfBxAYcV8w5MUT",
  "key13": "4BSb2wwhPYE5Txz6GZs24bZSNnoLZKD3aN8DXiL5joNBjWFACkxVSmiWKLe1daSV3mEeFKdydB9nvuR5Dhd5f766",
  "key14": "3NKStRRw5MF3iShDGHQqWzf6YdVjs4enW4pr2mjEYLrALP1a4Y3t5ezxyA9f1VsWcgqqAraTUinVLqaLn68q2XXg",
  "key15": "24ysVv8B9MuBr8SMb7Mxfspf93SErpqujsaVMzSJzrRGydbjP5MAeRCBkcXeWnahY7BNXg9gX3gP3Y7fgnV5rNeM",
  "key16": "QwtUdZXfJvLzRjw4SoQ19sNCzR5dzTXBBSqMBf8wW1G6ukjXqGUfjqV2DsUn9bYndmxve9sQhGssivaP4gsCxj6",
  "key17": "4dkfX3CbznxbSvFTjKYYTxohJfAis21dfsZ4govKHxV5P126TVqPNH54Veu9nyGXL82zydFAqLzZxFRwe4xtJWFi",
  "key18": "3okGoza9BibYUqe8AVtdkK6x65BvVbZZWmKsuhzp584Pxz1mdtoethy5nnBwbVd2NwBawd8bjwHnwoSFWhiWRazT",
  "key19": "3TquGohMM62BkWYQAxtKEzrVFECCaZUiYRDGn9tVQ71t3uQK3Lwii58a1duMch64ngUwwwBeyUcxbLVh8pfcbnyM",
  "key20": "4uH41ES7rsif46xhntRChDfeSEYUHLMMKyqGdaYtsykxJj6ALUPjPBHvCFn8rvhKeiJFaq2BcDenfc8ZwrkzySBt",
  "key21": "rrW2vbfvV1L1L4tLfzdPLEzSrdn9GPoB9ssBdE5ZRokU1qkmo3gW1tZwvqGxE31FZ9AkopVLYfpgtGgrSor55BZ",
  "key22": "5gEffTpcZxaGCxuP3noTcRtRaQY2BDDwjJEuHpwMiR51tr16ap6W76QBaFNUNGeqAadk8oJvmFyAyWYob7GDLBTC",
  "key23": "3RVdMCcUNvKXtfBEaFNBGJmngp4AYoX2K4NLLhBUjmDG1m3QWgaNp2w4KvsYZjn1bNfdPjTe3wTK9vPgLgnQb2jj",
  "key24": "4Rjdm8Zvc9oi2aYx3Ls8SnxHKgaP46ibGcZyoiFzHBvfKZjnJ7sgp2g2qPqXVF4Ym7iypxpVKfvesEYdF87vuz9E",
  "key25": "DHt1nPMmyApR31jqr5oQP9xuyPJ5zmcgK5SkxE7MpM7HePLe1wbVorbmxmN4EkFJ2wLdp5MJ6r3FivjLBQsSLZQ",
  "key26": "37xvjJxY2zd49PRqpLwZUxAVrXjrrJ3mVX7urZ19p7bDsb2zdvUN3br4haNnBvnKutbNM8nMz2ZCvM9vySaq5GPD",
  "key27": "3JoYb7Bs5QgmXj1NfEdXGPsow5KuqYP36dNRjiK82yqnYj2PdhdwfVPQgKRrmeb7dXiySUodNDmzyvomGQkrHW9S",
  "key28": "4NPihvfY4irC5nZDrzbtE2VaB319EMFE6UVybkXh3qVz5qikhwpVSudKi9XrK9vgr61qgVUdqoAjLeTSa55pybLx",
  "key29": "5wjhMksUPNEAPwThixDqTi8PvYXwunpzE86co3LM5ZLY2rqrdkLYDRKUd9We4eSSw2VcdRJnYKN9fGCshfRC3GJc",
  "key30": "2WYeUoPfMXnfHry3HmbPsugnPMaZixZRHYhUhgKySUrXvkxXo9UG8VGQPZQxMwhtU5VzNe4EBxA5PYi7z9Mheg3n",
  "key31": "65KeefEVcjad7kZP24yxYDCBjvVmmvymEb82ygCbSQJnoBrtULdkoYE7Y3WCMztQT9QsgKTwuueqrsTiZKkCY2W3",
  "key32": "5m7EpR9RECfKEpWeHPHUPUccdGefwz3PrShdMFXfF9h9hQLomRC6kQ4yKZgMS1Xuhw1i46ikuLb1cdgQKRveZ86n",
  "key33": "3EPeg6CJTTe1SCAHBykKQnDsXCiWtT29VXVq9C1UWkGanydoaZv2DzcMcfzav9rH9deiHpVcfRtzhEJSvi7CpnxH",
  "key34": "4N4mpMRRKspM1uoBp1jfqhhN2ys8oh9rbvibyNo3apj6eWdz1miVbRFPbdpkfGDpNU6KzGRYmWf7Mpxni79VsU1S",
  "key35": "5GBsNZUQJi5eSjg9f1TU5wYLjPJtfihZu4EPfGiT7bQHWPU6LmNUyZzFrBonveRxFequFWREWLFjeeQwHEsCFeDb",
  "key36": "C1i6V85TXYiDfV4UW7yE2wz93qH6Vo7F6iT1HkGV6nrpeoAgtPH8EhvezQFxgAPwjuXdWx3woC6m755HocDfkx8"
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
