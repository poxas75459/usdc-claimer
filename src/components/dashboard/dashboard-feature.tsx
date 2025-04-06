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
    "5nz1F83cFJCtfx6RMLDqsSEciPg7Gcw5xZtAJWPtn1GzU1NnezPrfKrDbeg2BG4KQFRe9RM8fDTgzMVMDBFUMyQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TS9kyMmAt6KHFVXRAuWh1v76BV9BTUozFE4xtHCFpoBdrVzEer78oP18FGrEBbu9nujMyuST1ZHu2dfHHLay8SV",
  "key1": "3WJdNF6e2LVCnZ9W1xedh22q4LCUgPSXdcfZ8eoR9J8VTUrXNDqJNRjq7x8izkMiQz4XMgXgSEwgN8TgrfA98ck7",
  "key2": "uv6Ttib2efFCDuuLiHqQppTuN4d63mqaX2Na43yYBpjz89eWzMN4hmEAPyVDtZQJ6Dqd2unRmBdz6znn52fXCww",
  "key3": "CUmowEXbVmZnwi9G78sHgMspNysYAMtM2XUgDTe5pzJVZYordUzXLnJTwCFje6aCaK5o7V5guQnHyoBWtbnx9vs",
  "key4": "55qCWRCrfXNExzYMLR6Gb3SGLv7b1KCpapGULB6AFddPFcg54MSXhSrsCmnsDgev4QYcG5dnNz35QeJ2QiGNiDLg",
  "key5": "3KXFL9zK4q7JavvDikJiN1YexthsdhBqmyJLedesSzB8XWiU5M3Fvi5AMYFNMmcLnKBpbNEeKGjPa3Z8UkZbV4ES",
  "key6": "21Cme9ArjjtRY8yjB6vv47CK7US6JT6CSt47oV3rViYmTBH2hpPM2SQwpZHj3gBxiHwLpaM82GdJknvp5JSKaDZE",
  "key7": "3uhJDQtddUvyKVRGsQsKSTvZ2aVDqg5Xm4eQ8gCHYm9MTRQVrZjeBEFuhnpB7cUNpqkQoPRteRRn7BPgybM1MkkQ",
  "key8": "5NFDbbiWP8YkbSiBXv9j1ikwr6vdzNWesgHDRoh1MHA8jkBgx4bwMD4qhiS9Y8vPXsr4i53CLWrvBF4ZeePLdLQB",
  "key9": "2AS8QfyAb11XJSfoTW2sMj2KeJEoPMoeQ1hq3bhab43S9Q4XdcwGKWMTC2TVVK4tCn5ZfdHcYoEqiF7ZSyjyR9iP",
  "key10": "3Y5ebEoD6v35pHnBZSQikwQ4CmFJrghWBbrDehWieFmLAoYUzUM9iGVzNBhq343QLaZxFPz7SMVgQ3QKjQ1YiNwq",
  "key11": "3HUSTg2GtJ6BZY85ssqZnsDT9VUvSv7ouTZy8c3qm2a5EobQnXvdNENYaJZejHvAuNs6yHf3weNjJrP66zPF8tFo",
  "key12": "5zicynBkSRDxdZpS7J5TbCJNYi6a9UtCeYi6xQaPSsgVkiTVaDvY1VybsT6YvypQ6dpRsee1CtVVMJfY9KGVzy1g",
  "key13": "2jEcVXkGcAru3KY92opPusEXVSPCmyoBn8gnxYYdgdTUL1qE8Wrp8JBWFCPRaicBokBdgFM7ohsosh6hSSZDLBtt",
  "key14": "GUJzbaz6mdV8KrocaX2d3FvdYkPfRyUgEPrcar4RaFE1mCTBjmWC18Mdpd1vVdZb4fWrmoFx4fH4wdYM3EfNjTb",
  "key15": "5kvzzqBAbeZPmQYS7Pq6KNWLnz5JTun9gxPXiGDTHKWAHRG1v6eSFtasbq9UV5xYe3HxgtNmDUEW2XNgtB4dvoGH",
  "key16": "2c68ZyhPmfEceFTMd3LW8Hk9qiNPkZE3GtHNNotuXWuZd7vzgdLk5j595NEEBLMEfBASdgdw4dFpqXgvLpS949UV",
  "key17": "5RXpe3sCRtcgw7zncLa8Kv4vmA5dsS5VMV8cjx4uyQ66eFddftWng65QgHnUqyEQy5Fc9PuKmMr7LTcCftun5EkM",
  "key18": "5otiP8hR93xzCTXfV4Y4wAHjuvMjPqgd195ZbhPx7qiW9i3U13zuZyTPuhfn84jdAujD1ALKSZ2g4wvVVvSomP1M",
  "key19": "5F3JJ3GWFFsD62wJcQLwM1y3pLZsiEdwZr6aVtjn322eKykXvSW4VUPYBucr74nkQDMghT9D6i94apbbtBRNkCsd",
  "key20": "4VhkgQRtHoWAszn9eYHFfLddT5v9zLZo5Sp3kzWBHFcRTDVY9emA8BzLBAtsjQjrp3ndMB8fjdALmab54RZEGpra",
  "key21": "3L6BKi5bzkqDP5WbiqcrHkZddVGpTAywCbfnxFSnQDn73sK1bTrKbToNi5Jnai4Qn67bVBb7NiE74LqLyGNTysAi",
  "key22": "2ahcw1DXnvR4n8JG9LUc4TykZJowe4gPRXwBmoU6epndb1REwKhxzwjF7GJi2ViaNnwscQd9SEXPQh3tv3XvrCJQ",
  "key23": "3jMATxmLxSaPpMckSNtnveota6FWgzNcoeFssiWLCEV1ee5xEC4SwL6CqkbGrSD96cB91sSu8AStwxrJjeNGWaat",
  "key24": "5QtHTYsy2o96fdBGppwCwLoUVmCtSCG8oVDqfnL1DDCewYPhSTQgtVhBPCVZnbBDzZrkBdzGFBMHtgyfaXbu3hnH",
  "key25": "Truprzuh5hAPUU2WvGxc3pmj5ZQok29s4QtNdfcFNUpBjNJqDpFvPMr7kSwWti2VZvchiKa5hajuaBHcZyghJqQ",
  "key26": "4ZPQi7sxH8pdBvE93gBEagUDMMojokkUJx851HnGCSnhgYcc4QDTYcvzpJNtGZCCcrn6mtosZbxCQU9uskLcwRjG",
  "key27": "3HndVxRrcznqGPYXCdxcFpWCddjxkTgJyBWBWYnBKdZvubtB6SSFDMyvvJ27NZuCLFpWe4wrrP72ZizAVkTZa5tZ",
  "key28": "3Fm9EFaazLZknPXXwXUYFMynorSkSNcRXFjadokWuHKXYgC111GMEWfCpkQnGC5EPgHMDUVchytwB8iy6za5p7oH",
  "key29": "P8yviDWUdVrYRfKbCARZaae1Y5RMaEKUFDQv6AeCWm8BwLL9ZCjH4Wz7MXXt7kejWVmqCb6zGJdrmjxiPVB2ikk",
  "key30": "4bj8rYLneQBXKCbuqoGS4SANVttxAdDKEJaAn4UYZqrNfKZTGNFeSQwc1MehJPhRX5UVdRbyifWs2gKTm2tJ59dY",
  "key31": "VJ9ro8XSPVRu3FDeHs37uzMQmLR3YCkfzAoTUXZE1vVehfswtsGQJSWBmqvRef3wZifALf41nUgbsEHxnaTCnh2",
  "key32": "J3r5n7RYvPoERkepSgsEb4MiGX8wUgXajyHShXq755YsaqwRDP1iLGU2QRd4AHRqMKqwCGvwe54zN39j4CfTu7j",
  "key33": "2Z78W3JYNeZYt8UkC9UqtEPRHPpw2AAqcMYyeBT86EjUH5XNBXki8pFxttWtDp9ZSuk4iqE6FzDbS9MFnC5Cb6eN",
  "key34": "a4sBhnCmB3Rff9hcHXqX6zcJpzVyzLYZ9UzuFsaceYBuQJwkFy8DDTbPai2GZsK4ZKFyTVR7g21KUjGy8ptPvjf",
  "key35": "4uLti6Dn2sKbiZ5uP5625u1rTkdSeRViwWMA9ERgYCfV6CKwz7pJCWTVufBiSAHdz8Hf1mBcMQV9PiVfDm6X7CW4",
  "key36": "3Sf3GcMgKntyXXZpaoiEtnZ8wF25kYrcPubLeWsPQT6ypELCeBfe5uE8gYtrbxnpsn3JgD9yYPmaYPFsUpgYM1B8"
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
