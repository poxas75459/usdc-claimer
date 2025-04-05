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
    "4LHTkbhZuyF8MLYLCVjJKEk6Sb5FnhEMMNqVNdq5kbkvABtC5XYTLJ2b98VBeLCbxL7hkr8u2c7q2GyxaBMhXdz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Exkf6LVDr7tgLqRzE7mRGcosk3JKKRaXVtkgqYsqFVmcGp7P63cTYqFoMQC8XaypdMKAaTpDJKSrboY629CCTrX",
  "key1": "2LstHPphztttvN49zup79vf1VTyZCXuXsfa8PEeV9DCLB1irLMYMTPkLHVG13Ye5hoUGYGWtgUEwWM1nRm5zDYf9",
  "key2": "2PeeJUtUnKDF31DEMJk8nkfkvWX33k9Fi6zwUBj9sr2m2NWNB1mXCCuHh2QbnadUzyK9WYUW6HteYQfD6prgYXJQ",
  "key3": "2fs2u7pT3RmWRHAYErXUjwpyGxe3GpaiFmCWQqaTB451eac3ygzjuzt4EnGzEBqWK7pAmJ2uY5CSp1S9wPdcYAHj",
  "key4": "45J3A7iZjekk38LvirDGQanDBJkhaggbnLMszQoML8XxT15t87q2t1NT6r3tK4h244hxpowmbwnmKkfrXd3EBH7k",
  "key5": "Xq35znQrRPMHBPp6fqB6sKHLWMPfDNJFzQ9Vk7r4BrKYCePqsUvAb9XkDXYbW5e3VX1vcb6Tsu4b87D7YK6acHp",
  "key6": "3NHyqoyVeKQ72TF18vRLwsa9Ad1cFK8k84TKWh6Ty65g7KnVKS5cFeyvJT9vzZFKKwdK1GKwNzhMY2WvfPTdsr2D",
  "key7": "4LUX4Yxqf4rJWR2PtnntyFwPcrbvkG7PEupH2CnjvH9A37Dy1zbxiEMDQm7N4r1QBKDRUmZ7wPcwh2x2JPCkTfy6",
  "key8": "32WDsL3QwvcbMevnTFeSuXEaSB3QzrBdGxpp2gyVsm34DnMBL3ZeDPh13D2Rsh4kSgPbeChpnyvVzcCDcSn368uG",
  "key9": "4JzFoTBS5XbM4ZBP5nHQTi3r1Uov7NNRMD3NWFeMtVNt3y99Na8N71eRzv74sz4Yr1grpkgbfR8prMkyg7L7qba3",
  "key10": "LRiZTZKQ3ob5BQXg7eWvdHFSSkkqMJCzTttTUmrjk5WbChJBgjHcoBdN5zGAhzaWNY6jo4ZukbnbTAGNxcUhWUp",
  "key11": "J8xc8B6jn9nwmp7vpCCMp9Zr1tb57qG41d2LjopmwircQUHPJDVEnVf7uwNs3fmEDpD77c5tqrjMbXSWVY2AuCx",
  "key12": "37KBQkgpij5jozzGerqzcBmynJtD2t7AnDengdbVSfEbu4fAzefzBwRcdZdnWmJjGcTdGSK2iso6mj9RHbov2gAU",
  "key13": "TynGHFi9cKQfMPmFc4QuDVDVADTHLMCXy85evRo7raQXRcaNwQTb1qgE8Q4NWUK9wAsiShpQ3dJHKGAz1KH5ZeK",
  "key14": "3aj8MsegxZUhA65RsNDTMYv35LHoDR4oRfQbidWEssprKZrigqn7vKrQZCXhJ2FkEiMYsL2T1ywjj5UzRWhfXUnK",
  "key15": "3h5EHPzcSpNcP3DrAjJXRgxPVKQXFsN4J27iKzj3GAU5sSLAgBG2Gs8vHzpFjmNzdVHcZPPoZzsLfDc3YgsXXQda",
  "key16": "waQGX5MeQFRw1fuzEECTJX33eGfASzc2qJxuZbrpxPXF285tM3XMhZG9weUMWxmoENWqRQKAFgzdyz4iuyoZsQx",
  "key17": "2tvQXtmKwfogCJZYN7gcdFP3EhYKpNm62TrA6bh82rze8KbQfHepdCST3up5igxJWgiHJTnLpEXN7RqzPHorT6WT",
  "key18": "3WHwmMczzJYoVYJSPTQ3VZTjgSEVdKr11uVH12UVE1NZhjr4JM8pUaCLfejodzffoVtnNQUvN6iYU6NwuKDJNUXy",
  "key19": "4w6tZ7vrMmYcv3aMfHEnFd9mnncA9ecp86eHkhJ72cApZhUXia4KAyYXg5QvcBSMMYjTmnJaftN7RvRE9G9SHMR9",
  "key20": "Gdk5WvuBaLDnx58R8i8h4ou9FnjszAdYtDZgo1QCe689xMamh9qBj6v7S4RcB1uHo6zMBBuYMHbVQGu7utE52pB",
  "key21": "77YTqh17JLb9iTLkzsXVCkTP3586tpAXhNdZack8mGmuh95bHC5fZB6e8ct6ZA81LGNxkE1PTZ2zL4cfaFqgZgH",
  "key22": "4SxZtVTRK23SCbUBgJitD4Ai5x57KZJfSFXfXua3HQzvA2XoRj3rvg7BfCKAyMvN54N5L2y1xLmjFruFqNQm5ACb",
  "key23": "4FmAF69Ub55p97hGToMBVVgXKth5hFnkK7jpS3exdWVbpJx3vn2TBbe376xCmoehqKSB87LwBYakTdqbm4mEM5hT",
  "key24": "5qi44zTcemGvJZbmJg6R5HG9PMuzu7HEfnPZV93nLf7UxyqiaWv6r8Joh1twpmWo22RJCDSuTRZiW5SNy4FmSYAH",
  "key25": "2exR65R8aDbe7FEvuyRhDE1ujegTxTHMCvWNi3nBNtYC3eNXSu5bivvghT8bxsWPoLdDwPzwg4uj93CGeVHCy3ej",
  "key26": "5qXSMm943Twsc7XbJ9a3kgn73pktkKm83Hv8LRhUBNv1NvckK245eHmvoy8MQ7gZYFSfqs72vFQSkH16P5Qrtkak",
  "key27": "2aEJjqUVBUSJacbJpEjW8XHvRf6QeLnqPoecqzncTVoMews7CxD53gKc8MUezZypJxrjVzq3VqmDqWwx5CZHqpkR",
  "key28": "3X7mk3Uz7jA5H7TeLnYgf8mvEG1KhHgijMJH2QcqFL3JJkHrmNXU3tHvSfDKTjNfJhR3UH4XKCxmNNyHvRV2R5FX",
  "key29": "57tYkWRWUiqrLXkkejbbzLDH3zkyET9JiHFp9pdveKYbzm2Gng3J7S54fXQNvj5ZkHRH1m99CMenaBWEwG2rX8tK",
  "key30": "42hkPnDueefFpt5kPDJ9qKpto9Ave5JaKSwfcKitM9VGxCVGS6ih4A3aiCefrquXuydGQ2uzKUhrSLZfgxGKawab",
  "key31": "5g44gH26zEREnQUgUoBkQSFxAAcQD2D9DmyirzWvP7VKgNwVf1gof3VbgEUsVwmpx8Tc2A8KNEwQMPsZvGc9h34B",
  "key32": "4XMNrz4coFVYJ3wMjmaLwyeWpWsFrKKwHhqvgLHZXtFzHiEmkGn3Ldckw9DYYGGK3tM7PVQN3ws1GSAVzTiNJFbT",
  "key33": "58rKboKjBa8mJSjWs4UBf2eSzDRzSSmup5hxmMavxy1vf7Z8uef1DYAXYEEpwvmEpGKHbxJPJHwS2dgoHMM4F69g",
  "key34": "22WtvLXiEkHWEpuZJqiVq7cvXmjvfyHCpBLgGrAHX8wzZ935JZYfhdXWxhvDnsNRsnaeQNmPKFjNzhS7vzSsc6XT",
  "key35": "42vvDzS5segBirL1kkDhqBk3NXPmMg6bV9WBgXg3NSFsbVh2e6nukf3KhHrUL5wrdG2YsE2XKJgfPRr2NhhbiXZw",
  "key36": "kzZVCdjaMoCZAKTVWbZtGmKpMJtiNCiAWXJTzyFzwDZKF4ShufFWqWFAEcm5eaNoDjGF9aCq5cGXzfksTruwLcL",
  "key37": "4M9sYd5uNxwRZa4n5izWT38mX1xDmgXiN2S53Rg812YvXe9v3oKKZV2NNbFWVNP9oVGK7GutVbFkW2DLggrTRaGD",
  "key38": "3jdZzN9Vp3cUnrytsrg2kb6zXKsBHj1PZKMNidsCtYJ9RTpaC98kcyrj9oxB75hWkdKQAshVxpVocf5aHNK2u21K",
  "key39": "4dS3digGh73LSkTE3ubzHkmw9HKTQQL6GqxQpFqPFovMYLbDXEGx9kieDDSTDWLoMHchRDLV4riEzWadQXXBLt1Y",
  "key40": "3KkC8uNGkPiZ72DA5n2ezVRYRg2pvP6V18YRVFhhMQiRZqU8DSaP5UtqyYSDxaKiU8aXmjyMVNkobG3QuGxtrxrj",
  "key41": "2Enf77aCkVe2i4JdGFsgoDy3GryBgcfMgYU5hTTTHNXjdSJGPykUFR58apwmyxvASWtCVTVNTQmyW1VHCtckoW5D",
  "key42": "5emE2oaRZhpj8nh4PX8dhHNzun3PknwATCmkowk2JtAjYrSmm268fyw991znEqJV7DPd9PTyeBCmGvh2RbfqfVVE",
  "key43": "2przgr5K1WRLX5iAsrvuSsCdA213PwZvup81S9fATLpJwpWwHZWmm1ezwi8e1twNYWVKRfTKRMkMihupWmZ2jNEw",
  "key44": "4DUUmMFPhT6kQDQRHH9SCRVashJFEU8Adk5jDwRW2AU9WevgxercjdaY75oJP9VpKQHiQ2c9DkeZpNDjYYTsDRp5",
  "key45": "yeRd4hNpaGmgGqNAyvmC6DgEqKJM9i2x33TKuGyCiovbijcZcn1JAa7s4GzijqsXM8Y3wdZc3a76Yv7C6Aapzi7",
  "key46": "2sYJruGbJTLHvmZLx8MpVApVQKNYGH7Wk7i2uBQ8ZkxBSz2Tyy7UyPjj12Wt2a5iyPCMh8uzUo6vESaYebYJNgFx",
  "key47": "EGbgtXXD9QjjFmmnW1yafZV4vq2QSYECfAx9DBaXfcPFhL6WS7ioTBMihvaFiXdLPYrdLrqyPthCFgJMYRmar9C",
  "key48": "4vLAH82fSeF7nvvcxCHF1DgdPHvzDxc9xtJp9iKNEMtcbu4NsRU8UCe2adomzgpZqesfAgN92rWt4Vaj1hm3sm6M",
  "key49": "5Vu1iZEFfoC9trKU6st7eATzLgv7ahZoB2SUFreo3pSUeHHH3Ks56WExRVAoGJaaKMEBtKVnSL1tw9XWYHuQ5TRH"
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
