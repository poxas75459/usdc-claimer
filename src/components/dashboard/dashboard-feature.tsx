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
    "2b22WMUA2Nsv4JqXpCvbzTMJ5KBDrfrMKF6VPfkihg9V2NC2HxVUZqrqgm6aJnLt9Wp7odH7G14DczYtQLa5uYrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HGidVVmMgMMUfMCkH9DLVm9JTgxhx69Cbsyi3SakP9rfoPbKT45cKKTohW1kEEF1axBkKh1rordAHYRt8eShBLU",
  "key1": "5wyu3dLougyDJ29jHunBWUix9qM419xztrz5arArkEJLqGXyVeWZud9hSzGRQN1tYLTNoCbBQ7kaG154UrNtRm3w",
  "key2": "44doqZbnJ8HqNpAfM6mRZbKVyiSLTvdYJ3jnKCRWawCu2iHBZEmEGPxT5eNh9UWzDzZURKmqjVjRmNYfiL2YLysQ",
  "key3": "5YYLh8CPCEohnrmGtxq8GENvXh71mgCgoqa9yYzdonJHjyK3Z7f4B44xgY5Wh5tPQfFEhVsW3BinWNUe9F9AqoSc",
  "key4": "4UwrCWhXDnpFDm8efryn6T9DTt4gwfqoxGLr6GyXfivVA6WZSHQEG8jg1Vi9iyz7LMnghHpPvknEUwXH3EdPE6JB",
  "key5": "3QLzFg4j87T6NBpvonNwNL9tNja3vBUgkr74p5ZoHrmFTEkCDUtS2je6RGK35dd1bNG5AebLg4qDkWmc1iKEd9pE",
  "key6": "2JmvdCLyWrLX2Px4jHfVTJMGjemqL2zDDJTCncRrCQJZHfcayvDKs75tjtgVrnn7ShTXvEMBP9MvAFKQSHsE26kc",
  "key7": "673tRtqekSYd8gfYKozZSpE4srZ56H19u29fTDbPvNXMK36bVMZfy64Nzw6Xo3WLUj7XNkp5hCmmp5ABWhubfPzv",
  "key8": "2xZL34tBe3k7Kvf8nMLNJ6au3URRLjaztGQYun3chZKVzBepDc8VeMmDMFrwtqhZwfUNk9LEBsp632izTPFpjizB",
  "key9": "5cHArM6ARtveRaTPrrfZXzzrD17arqYRz4F3G8DEjdR238p6fEeAmvrhoysUd287vXPLqGZqnMTceMKDbyvs8eDZ",
  "key10": "ToaBRkKSGNaWJ6chyC3VC3o6RFGydzYxwxuDW5wp2chotEqYn6UgDReH3k5tsmz3EKpuCDdjRaRwh5tiRkzKY2Y",
  "key11": "52BCUXAhmJCcuQRL8f9wbAZP4BmCJoS7jPKMQ5CjCkRrRHww1TkvJwbGCnzJTi4oz6MnpSDnCooazk7FA75yTDpf",
  "key12": "3bumYpeBmR8UEUqGooaqgndWT6SJmRVyB3gntCBu1vhuidcx6KWN7bThL8eNKZpgBPiLBvCqfkhEvdbmPBBYBc92",
  "key13": "4QA1a1nkUj8nwFj7fD7CqMVx9Nc5J8fxVMP87TowGybSaAfVFhupSGd2CjsS2qqBgnQbmyVfEoEqKsD1vHFJNEwz",
  "key14": "57EZ9E8pAVddEnWZ22X9grKU4gmgDYYpBcTKhnbDNDiLWxQc65kfuAyCcSWhVXVov392gA26gD44BUNo8ujaAW4N",
  "key15": "2Ym16UMPrTNq4XMZLWSsLQeu1y49kLgY8Sur1uMteYJPt3bBEEW1zNF3qd46afRAjeo84LVcwCqVZUvQdnE3vMMK",
  "key16": "3qfFaS1TWxy1dbCad2SJsJj2vRMhYpqTjyR5fZypm61NDMdarad2eu1iZYwTMor3PC5zesuAKcARDK1JweGrc3C1",
  "key17": "5SNvcG5DKGHthZE9tHDiLMYtwgxiBUNEWZYrhoX5PBf8DHm94b8RQnkhG8zfanrRPacSRd9hnmAc1taBA3e8NuXA",
  "key18": "2ccGyz193syFCQqUHf1f81V7LbdZcwShcjVCLYjQcHmNVsPe6Kg6SCeUEQLhapfciLVAuNmRcXSyBiPrdtgWUWn8",
  "key19": "RfpMiYL4XmpYaKhb6C8yf9SMWRQ2BHTKXM6ZwM2dZe9APDjk7AU3x6EERvocxU99zdA99Mbi1ASg3JVrrMPh6jD",
  "key20": "38MTmbsGA85jmoHNQbx52a4Lc3uSR9v2Ci5ovdmtpZ5K1CsEZapa8HrUXnJ6H4HshjYJP7v1WhZ82SQvugQeWU96",
  "key21": "3LQoX67E3wCSs5Qx35foKd2CPwRghva2k7f61cYZw4D4hMM6cSDta9jZUkQQpgFuuowf5XpHGpnAGJiKfvbDjPLe",
  "key22": "41sRkRCDfBVnhwata4HQp3Gb8aYkSXmyDBFAdKBgxhQf6M1WtcbhYQsbkrxgXgsEMBRmesrhFrk5y1j22DfFwFoH",
  "key23": "29CCcebzTy5okAobSi9ozhAUXv9KGqH6PGd2bcaiSGnRtmoU6qmhv9irHykfqaYQoGuLgZJwWq1bqZ1wY8eofe8u",
  "key24": "2iJte6Qo4fjHoDgnks3GnRvT7puGrtN5JiBat3irMghg9zGi1qaKT1BrEt6YMM9KDMZ2pCKiVuLfN2xn6ar3H5Ar",
  "key25": "441TeF44ykhtXWuJVTfoFo5ThZtGMxiTDpDnv8QtBvY6SjJ44qtWvuAvH6WJFZY7D1sdsfXJF1JeBgw76PHFsGvF",
  "key26": "9faB7zE6B2sDKEG1QqQzSeRCf65acnxrYL5wjVZQkaNeLddsRkoDPtrCND19gYnQvoG4thZxN9Rgg8Ef9so82rn",
  "key27": "4ZbwMXpt2Yhxr1w9Jsbebfg8z2nDTFdejEP78uG9Rn3t8r8xjVqFi9HS1s9yfKv3654YSnXeyQpptEVR7UU4VABb",
  "key28": "27cLE89brkKXMb84yrmXjRKcmBkTiBNL4H2dptLosH8DkH5VTuftB2iBzosYtpUdCxDBiGpg2vyHbXgTCkB2AiyM",
  "key29": "FBa9yyBEn9FJxR3KfkBZxWftZQZDheP9hXwCcEZ3V15s7mK4QtxudEzPm9vkgriLzBkVhVffnoMRwBCt2ywbQj4",
  "key30": "4TJoGS4Xm39FZug2Lrzuorv3WFANiXZ5QSq6hyn5J3KUnbkbKUUnqWz5qA2q9sXZgppkgSDbsL9b1xuBh24Y1MCr",
  "key31": "41s3mjjwzTLcdVESqyY1s2nvrFNQ1kigDzGNiUApe2P7enumZTBRmfAzJQ12HJC6soX1Yf28isx8Join8txNN9FG",
  "key32": "3kwKmZH7NXiEf5gr3dajwZRsJpcC8YQhDZqLqD7KuYFCgsgy4Qswg9rW8ZEFsxBAHNwD3eqQunM6e9T4yFkTPV1T",
  "key33": "3Ji8YGGjBZKDEhhDRr2r3jiAXcM18GXhCjLAAd5QVb2PT7cnHRWPaZVFtNA4yXywz7qFQV9XeAEGfurHZvrRRXeE",
  "key34": "Noai99spVDAE5xBWtgHCwuLRhebihKqpXzCNXTFwi4dL2PLVdcC2exrZutNDqvHqjNB5nJMWeckKLvTZb6VEDvW",
  "key35": "3vuGYiLZTi7PPU1fuRLNTnXf5Y2f7mcDpFUyZNhxkQU61WyMZEjVife9wbGLfX6GVHeQKuwQmziuwjrtnd7gmV4M",
  "key36": "4oBpKidqqWC363pRo4HAqb838KCisL3AA6Syv3zEtaLcayB8iqWD1gkEQbKeVwG9HVq9ZZucGXCwcAq3mbUxkoas",
  "key37": "2aPN3vK9HrXYNXLb311dxghz6BA2hB2cyHhdZymnTyXLZWMT8ctPZ5sqfRwT8se2Lnhh9hAKedQHvGnguZrr6tXs",
  "key38": "2jUEqPpXWYRD3FCApGbgMbC1SP895firVimxWKHCH6WmYZarqh4VtA8gym6r3no5w82Qc5zTzNCY231Jm4f3W5Ac",
  "key39": "5AbdRk1PKkBfat37uMoe4hUtqjLno6wYQ11VtD4zzYm8oX8tGCv52XRMgSguhXELZWBjEHf3wnfiKs1Fg3QmXmy3",
  "key40": "qxbAarPuC4sA9kmUvDatcYqJxuTCGhpXMqwDpaqsJ4gke5QNkJnHPZeH43Su9SiBorDAnSWkgE1UDRAUUYSR4uB"
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
