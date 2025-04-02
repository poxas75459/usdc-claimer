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
    "2XGbmFxRFuAuwoTgotfyQRpWNWqJL3j9hjCQsNpAGfLEoCwnAeDnBk88uqg36HNQugpVNhkRh5xqdoJDUeEfqK3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DubPcuWscoVz3GzvhiXnzVjJBXt5ik3TGARQAeYjGqA1wnX3bKJ1bXz3jeX1uoMA3esHfxaXRtHGRHhY1vLNDPL",
  "key1": "2LxwD4ekCPgKzDMfsxUGrYnqxr8XoT2LBhQNZcGmyq4QQbaeHPU2DZCHHY7PF5kavPi2jXYto7gXqD2xPxeZauBx",
  "key2": "5DkdxcTjNZV6SoR1jTX7kChb2FFAbj7GpkGSt5dsFH2NwcPG23YRCxFYXDucJtGW8MaTXxtX9BkaP4x61DCmXtp2",
  "key3": "DR6nmbpPHGjA9kBVRaaoPGgiWLWmX4iqn2q7TGUbuyUmjXn6LigPitMgpQKWbZVxyYC3rJN5gGR3ev9VLtSQPTJ",
  "key4": "2DF85u8UT26SyzAqpQxmuwsjnYK1hftFhRs3UBhg16SfFHKRwDXcL337FZWAocuvx3LGvVQQ2r5Jp1vsuktgH6n1",
  "key5": "2SrZexYUSRyEEFkoP7vQ3up9ZrCuBpynC7D8yXpK5BNhwCQrgifqyJYvuh5XTMPCPXb6hvGERyrgYh5c7ECxc9Co",
  "key6": "4qbRTLtVjLrb2dz9CtEkNQrs9siPjo7JhdrkT2ZhWDzh1jWh63TBhhppTWeJ14A8N2Z5eh9Bu5tMSyXkGC59Av5R",
  "key7": "4CE1NK1XguXTCqgfxR2Q6tP7xfr5miEW4wXydBztdvbWRLWQzYh9YbqgpcdwUcYwuPDajZt2h2n6htsdK36aDfXp",
  "key8": "652VFRZCSL8dueNU4Mes19obW9zWGTmHYpkC4V2WejotauPiAVd9zVbP4zH1D1bDi9s3cRFT8hZgcv4tRMXRgFtu",
  "key9": "2AP2zCQYwpW621painfJodKXxyhVfA6xzKmJUEG4JoibAV8UFnjqMgZvdFicQZBJ8NFUiNGn3GHYo4RWLq62Cc39",
  "key10": "Q5G5RnXFkze3L3ToZsbpMokFNPfj9YV8LDCbrXWHy4nWbaC9hxqaK9Vi4pb9qFy2xoFhd6CXSkiesTTxrbYu78F",
  "key11": "65H5Lgk3wU3PtGYLG8pNeSt9Uh4mPhpmXCt2VZLRs6akEyjh6SoHMPCYKCLbYPbfDfc7MtfNmcqX8rr7B5Z7C2Ld",
  "key12": "tc9MDrg23v9fHSPepMmnaqwXMNSHUrMvfsR8HbBXXh2SKCEz9P5caBaeHpVYrnmbbzEbJTtoJ8iGaK84Lih4DMk",
  "key13": "5y2ooapt5ZMVcH38VEXPxm6MixPCTNn7u4AagC99pS1gS5gdJKzHwXD71ARaYhTLe7VEyNmgxc7HSi27vHE48qHT",
  "key14": "4JKb6JzBM3g3TBAjocRhAmuvV5eWjSSTRfzxpnBmN8zwWNKhL8NLQF2BdJJFi6xe6fU2rhCc9zq4hd4YDQW1SGiH",
  "key15": "yjntPCzJK5CuFMDvEpqCia9gyypfdq1SEu9KbZ2LUSXve7bwVxkYFp27ZccrnThRv8dQSUto28Xt853z1SHrC6B",
  "key16": "5PTmMre6a3uL2d1kzfyFUtBdDAmBuDkfziM5GSeZ3fPusSgVzuLttM3XMJEDwuf5tq3rRWFRv1oNBR93qiixA3B1",
  "key17": "2G3Xud7cY7QaygseXsqAHwuaGVSh16WUWkc5F48uud1ACcA5BE3uCcdisCgwncYeWmvTQ9vnVwC3VWDZGr7xJSUf",
  "key18": "3o6rf7kkZcUux3RrgNbGwdTBkumjsVJPGSPL3PZjeZLxvcFkcGmfJQLcadmDuT8Z92EBhRMwHKwEzyf1NrGj7w6E",
  "key19": "mLLG8Dhy2FBZ3Mm8Yyqh4WfpGGerYjPaKm5mpq3YZcCxGevx7N6btppN3yY7Qd35rhXHhmUKmnRZ4ijyszwRUk7",
  "key20": "5WW8pNHnNFkyehiHCyi2t7vVkLAanxjGxwaULkWWiW4Ywbf7WiZ3AvrNXdmgLzt5peCidTv5Yuvp4Uow5qwfQcWY",
  "key21": "3hzmEKKvY7P1cspssoWbWoQ4juQQpjqdZuJakydham3c5VtY1y7tEVH4mAVyvr9Y5he4atHwwacTYs7QbXuQ8D3y",
  "key22": "4YLTtJen4SroZBCTPZb5iDrJEGVLrTCzREC7GrprbatzjTzX4sY2fCpgcAFcZyac3CJSe8aFfPSZPpWc64irLcR7",
  "key23": "3BBiAErRRNVLGNPdWga6AQeZDSkLndjZcx8DkQNu7veTagR15MCLBy2Pyuz7zUrHtagbidTw5whRoDm7GpoD8h6u",
  "key24": "i7aP5VSRXrWNcJYJJ21BGxv7q18Ww3GCbUYqzPPUTEgtUsS88VSc3ZWKRefEjN4G5Jb3HAn6Lo6vZotsDTK2nzQ",
  "key25": "3gycSW9ckYGyJ4aV8aCck1LJzidi622BrUFrxuY4SagHWAX9QRBXqc5bLkBeyE5pWWXCKkMG9Lm9oXLLMqZ6dB3M",
  "key26": "22zbQ2BjrbL4u7LJFnapEGxyjsR65RpsMF6VWDk7j9t2RoY5PoFLiJMTLYRzYQHuGhYjtL8XqoMsraNQXw7JruKN",
  "key27": "51UnCvj5m9n28KvQ4M2QVgQ4xRCt5qeWcKjCD1mfAo5qvQXnHgpT1xLMQyT4CGCJ6jbGbzjjPQfqaoTi7YFeB7Rp",
  "key28": "fwWWWZaF3r82LEk21CpL4YrXGeyaoU8RoKebDrRYqpSwNb4uspZkbnBdZn51wtu4BzMs3buGCZ9gpNoEr4YyToe",
  "key29": "575aNcWRyq7DszjhwhcbHcMw3qKLKvhDck8RHuYSjV3GRyr4KnttpjGuqXhr76FW1BVg1WdaXqpwc24mxrBCdLdy",
  "key30": "63mtZApHV9VFdR81WCQEb2796faVi4YhGLUC1CRqWXF2y9gaQE4gtcgipAM7cpVLmqbPpSMokaK9BvscsqBoZRLT",
  "key31": "yUUxuzLJ6jGUpmcXwgdUdZ6nh95jxFBpEmUeyXSdqhgmt7XSZszD5LwjSjruRPZoo4KfJUDx4J5dxLTMsY3Y6QA",
  "key32": "2TJgdSkWeUeBhKW8HrFnRezGFAxbvGp4VxzsuhYg5rzDqrB7Qea7KshSoNDAtdshe59wqX5H9gzvCVSTgaN16G1M",
  "key33": "4EknpMHinUoWCc8pntUQts5jtLFrB4jXAzNe8BU72NWLvuUAEfPdKGKEnMM4q3weYnPWst8AVmfpaaVE1iJ4AXwx",
  "key34": "3UQTePH7Rjn1oZbQWu9pJ8nWExPdrY1ukC6Us8wfvso6yEzFC3rNLLpKf9cyaMweMw7JVFkrCkkYEqpsmGXLWKwM",
  "key35": "4BJaJEfeFCFhppJmq1KDvzszxSghU7Jp6Uy8MciSf7XKR6fVCUPdcPQ6ZHoCGmxqNwWiM2NRuR54etGxXxtUQHxX",
  "key36": "5hKWwQhGbjBdrdfXhzP89xvcCaVxcb1vhpWWp6JzKV4J75Lxq83TdiCTUbFM5dfVmVMxTDb9MeVE79DpegVMh3oX",
  "key37": "HLt6N8Z4jYYXow16DycbnYYUBrjuAPDJCdk9oBatywfhA7wmhNuRjhFdPj9eYd1vY9kLdwxMre7YcMC35fXWHfg",
  "key38": "p7ZzGrTv9MTRNx2YCCwgfHW2uXu2hPomdZZSGtdd9g8BGeMBoxavDYE7wS8HCasdLSAdSge1TgAd8pdvnhCfrqR",
  "key39": "3oaohV1A1pNdCjeuy4CvWGcrVZvMuXJn1kYU6rjExcQEww3ZDqSPmWMBukHV3eDAxZ4ybkEJWCkjJieoj4DGYqXc",
  "key40": "5X9V9uvRcqaJ6HNcP9jPmHu2Zn8fvoFq1br25mye5h2GHPF7iR4Ws69kHVzqXJRkPfAQ5N779rivZ5ifXjJowt3V",
  "key41": "2Bfqrjt8BQgAXuZZt1XRL3szGqNDQkFs11XmVekoYYgwLRmagQqZ9Sh6fCQnUZkJD97wMsLMcqhH7iWJzLTHYo7c",
  "key42": "4U6htmingxoj11w437ZwynBF8tLrQJrU5CchbavM4JJgpxv29Sj9fSbpgqbjFb3q4thkPnxL51LapECvzKgJiixX",
  "key43": "29rK36pom3JGAheE1qtq6zYF4iKjL49NBgkeVppEywqQZ6kGP4LrcJGiDWyan2YE74BB2xGGGotn4XVnthGoMcYR",
  "key44": "zvLazK6wTzL6DDotbiKQXgxfwwfEHNEQxPSy12qxFf37Y9aUBHGaGLn65RWhZQAQp1wD7MDBesyUH4UtYdVDdqF",
  "key45": "41retPLK1pAFgiigausKNXagyPvwnFuiAsurFWiEr4dkEq3hAM6xNvNHTqiP84ZP7jia7sBaV1VE8EDqfQ1eAYDQ",
  "key46": "65HrPhVBv6JKsEzinD5zqM6VxgA8AmqBNLkuSW86CwthDVWq2pVgEL36GLwgW9ttkJa7KsCCqg1xJiwjdBryjxYA",
  "key47": "5eBabxpNE2QfqaEpQ5a84iHL648odCAS9rQTFRH7UCfej5V44hhEWPzx52QjqXzWz5p4FntPcCou9HJpKSST7xd7"
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
