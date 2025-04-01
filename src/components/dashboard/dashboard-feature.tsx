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
    "5AZkM5Qeca1uyHC7LY1eAML9VJiYAFH2K325HmYtajkVsn7aHxA8NFrW1hgqpYeDopjTg2vqdfZQDycDS6S3s6e5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4feFfUS6VwsQxZeTTi2Mu6dAsvokvqc9DQW6C56Zsh6JxQGqk4yE7h8L5zcmogAPXG1AhgQ2MFwjqKzXDD15QkfF",
  "key1": "Mi4GzgSfV29vFmLdFaCDKFjbMgunDB6aBbtKiDRLzCTB8SaGpe5D2CttJRjT6MPQsU7pNiFYfHPmizjHCbjaJjN",
  "key2": "2bw8YEve2QQ4deS24133PGeBRB5Y5J9L9g3qiegD72BKjPPTv4JVKKZphmobaJc5ueX8jWt3SRyXyZ5VCgoq1R3V",
  "key3": "4cisjaRXW1q6NAEtMkD15222MVhGh3Mn5nb8fDDuS4gfUT3LZK57mNCjNFZDV1FNnW4Ebg36SKRVeHRVqyze2865",
  "key4": "4XncvJKWiXdkCNyMNQNr44bnGqXcRa3DzwCKUdXQQRxFFkwKvZGH8jKieBxVDzv9ykQzDJJhrZnxTZP89wubxLNa",
  "key5": "Q3SEitzn52nJKUtyNqYRczGzA9cU6h1YNHvH6Pbyv2f52AQWG1wFbB9fxw5KSieJiRvW65UL992bB5EdcMuSttm",
  "key6": "4jSg6Q3iuLX44pGRb6WBovLuz4ggVwS5DQh2twnd6KSkfxz8yGVVwdKr9zioB86hC1ZTwBuH6Dm1Xe4GWvFRXRmK",
  "key7": "2AzDbzRNNV8u2sZX9QTGqLaQe2HnfF1A8pJ9nkmSb7JyjZj6J8gzi38q18kSSunNQHAnnCZDoRNYu5nytEu392HT",
  "key8": "dws7rS19VYrXDeZ9EfjXC2TDsrZXrQrQowWaU6ek7BPQbqk5QE8jvb3wWEHmNpowJkXP1t884GTGasGJ4g5ht12",
  "key9": "bhG4erGgdssMEzd44YstgdC9feDumZC1842UjcRW7GhqZj7bbg1ddft95ead2iEJj8aWKCiywrBaTMFHkZa3S4t",
  "key10": "5GQ5b9TMBrCfxEPwtQLoL5ikYsPfzVFrDpGXQj1qM6aZGLJ4z2wfyVH46nrQXx6gdoQfdf26CF45XJ5aw6CAEGQC",
  "key11": "3A38dcXHEdqHdwdaUxu1eBYmhQLpARZjbKFE6QKBM2TR8p71rK3ArRWfN9VxCNjXPwFCB7Aok8UnLA72kdAk3WzJ",
  "key12": "27YZFX3r8sCFr9Pv8yDNGAvwhueeD9kmW8YwZ1jzGFmJhF1S2BeX51XUuLSofdHzaZHXxsAkfGAQ55M1nWtUH1Lf",
  "key13": "23yCdKFJ4wqwYoTvtujFfgwHL9RT62Q8PVXESmHUmXMGeg5VFxRuLznfREMTobn4LX77dd6WqAhqB3D2UXAo8zs5",
  "key14": "3AycKmsN2s3tWi8AnY1JbvxDgXGWJxW2WNxQKxbyWGpc4Njt41y1skB4ft5aeaRYLzhyiiSNUQwc67XSmFmv8JYK",
  "key15": "1dXCbnwmcCD59kgoZbroFZwvQtxr2XVawUqYEA5WGVdSy4zi23HKMnxwXgQgoBgmnMDVYeqymGLYcWxbqQCCYzy",
  "key16": "4s3Wqm4WvzAE5CkPdQV2bQQZ6xUsgYQCtDu92rvxoA9SJz3CQDeRbHeFbVTK5scWGpA7mtzBMxnhSDc9pMAXNkJR",
  "key17": "hB5n6yEuxik4WX7z1JUgqTbEpYDaKdHEdWHdHYKhdcMqtrUrUN8HJFb5SaoE8pXREvzvvi6uiw31n8ivKGtZtQi",
  "key18": "55Ama5PevNpsSmB6aeCkZLyEuSBDFVwnRqKcGgA1ee3R7zGCH32JqWWMwAPswGbmaGgkjDYN3stD4Tr5krzy6VeZ",
  "key19": "2wviP6qXzcboNZuGViPUGRD9a8RMbLujBm6gwhP4w3hvn1LD2P5BEaFeFA8SHqakXdVi5txfne659AgWBJeGn3T",
  "key20": "SbhLpGkVo4gXT3GLXhHsZQxuxH5sBtTgb6KgFX6Z5CuwYV1hTga7CF43cJDfET9cQ1Bam5x21ZScdhyZCaYdyaD",
  "key21": "2NvbetCyBnCVRXDC6ZMjpqUWuekyGfdNQhY2s4RpEe8njyTf71BAh2ok6sDc4NxmUqkovF45ueFvvvJuNpggaPdG",
  "key22": "4tQQxFpzxUox49ndZgrxWEbjBWL7oH45ewPNVbquZ7bnfewsoJHWpiQA9pm4g69Tn9ApRVCrJbtcRsJkxMReoGHh",
  "key23": "4v91JePXNqGExu7CpL8eQEUtwbb7ZRqhrYBJBqKD2uZa5EdDd5bSVogP4iazZgL66ZV25DQkDjT6qYvejBSNthCQ",
  "key24": "2xRMmPoPXRocz4LAB5M8mYpGkuJmjWJV4Q1WEahERjTWySEfSgWMv86e4ghfoau1jRtFVTacGrLGbhNttsmy68HK",
  "key25": "4UsHA9j1Qm6Gr77emCGDrc69QDjcouAMXiSM29sTvcpoy4y3m8c9s2hgAgqE3wxuyrbYtWgGjpyWTiacru9u73mq",
  "key26": "49k1JD9QzVT2hqmHQVTiR1Wi6dn1imTTRjcQ7MpVHUwjm1YVTchbJF9U57hzeTTYQY4t4tsSLjijqfSh1A12ajAT",
  "key27": "HEnnVCzsp99y1PQsZsdUG5ssmS1ewUC66pD46vHC2nSw1hwx51CMs2YSCxhJH7ddCyXeW5XDRdFbMGzRHxFsc8B",
  "key28": "3rsm9hqxDbQY5rhnGtVctuZ5zAFb3YGFcFa3HoBFVpqD9zKYnJDYRbBrdr7KRvTdEz8fsgECDqG6WStdGT7XR4ab",
  "key29": "vHctNUYJDc8eUMKH8roLvNDxzjL72MAwiFvGQBUccKvboFyDRohRNk4VsfWDhctZvowE8zXyiiEFPR1KHVYoPuJ",
  "key30": "2D8tUVVNVzQaPifCMMsjUsyEk2YrocW8mzuBcKr2w84zYmmBGSVgT6vnBwviNFLmqTfqZhfVxvJxjDFGZHbRmpar",
  "key31": "4LCEhaANJrisBwfBXKQzz7NESJv9VwA1HWAquXUrhFXxkRExCmuekrpZA6819rXYwWeL3WWszyQCx4fExyyg5DZq",
  "key32": "53DadjcSxoTqMZJuuuRZTYz3n4F3EGV7P6e7V1TYuaXPQVqM5tSJ61kqgo4PCp9vMfeWu2KtxrHLdzYKxffhHsqB",
  "key33": "2R2oBQbQurQ2qtxkvH63uJeaZyHWVAkQ9LWW4BkZh89jd8nHs3NvcxB3R92fMgJEyqkrhmzRpZ9GBf5hg3CGUZGg",
  "key34": "4M29cGPEWMyYVRAKcgtH8fbCRg39H9FL5we76Rc1cmAcbMQqDJGzwPB4HPKdmHJa8mcmLMgr23U9Dh1a8ML6KSgQ",
  "key35": "4MuGz5gn4Q3LFj9hhD98fQC151Tve9RGwXNodygusWDNeeL49Z7tA6vm8cmkycuDTw9AJdyfyEgS4MckVrdm3gM9",
  "key36": "2dxebccYyVpzXf8WgbS7Tr3wPmjdZu2yLghgvFthzExuKognUHeRBHUwtyM2JQbFQmmsSUuhD1ZctaupgVSkYcxr",
  "key37": "4zJMuy8kmmJcMCkizXFKbw3JHJN7UQeW1csf7rKzf2WwDSwSU9ZHWPPRpuW1RNGi3AuyakkGvYcub1nn2pwd316P",
  "key38": "4QfFHEmj5BT8k1dQaZpAfzcf59tKirtDWLspXEEJDHwzq3nLnKFwDdTwMRKicYxxfixBHy68HXSBqdYUxMhE1WaZ",
  "key39": "5STwdb1Kz8mNvdPizZc64YYiRpAm3ERaq7jRWSCFQAkLXS4DXtGCPBDsPLcMLznPZRa24MKPFUuyV3zTQfDgqo4J",
  "key40": "3gBSxYYFodAZDwhrCXm3rVEyTjtETTYhcBKFaQ9YUtJfy1D1Ktkhr4fgaDPW4j9ygCZALkLYJPsnxmQgoi3aNFxH",
  "key41": "aydvc9pWrNjqkVujesdiqGvhbN9DDpLQdvCrLfww8ZSVpPkT97WwZjrvmvNzPWpeWyFxapmUUo5cswEoGEFFH1Y",
  "key42": "3VmPZ5gXGRuRTUvgfHMdZh7exyuyEnj87nUfbedJrWQh51p6fZxKE7fmjXafnwt2Q4ZtBumw42bAfmQLatkNLXmy",
  "key43": "4wif9RFRfZ86yvQyEMpVW3MAgbsNtiZXmHDVMUxXy59GQpezrbRSPU63f9LrMZ1dAZ16ozViyaEjL2dZYmod34hX",
  "key44": "526byvUD5RWjumnJ6QmV7eBoEFnMe7QN2sq4tXpxrAgdG8VEe2wqfMSGJyc7fLaxvujKptu8onT1S2GpK51CXmc7",
  "key45": "3tkgc1AnYEFLF5ifLwDecz72tikP3T28mwze5wPZjsvxZ2Vmfng23Hm5AXE9bDV1jYCJ1wk5njGt4ZSr9h9kmNok",
  "key46": "cZxeE7TbC5RDFmqK18AouuQB7FmhNRxGR5GXt1um37U8QPACR6NX5skEkkrwDF4o3sJKNaCDE1jQA2gGgEijBaf",
  "key47": "2opDZds3fen13GyyMFU58BdjHFW1DkDpo4A8Ws4V2xRVuYnot6nyqc4NTzre1uDtjZFcmYodePFiNQSmfW6UiUMc",
  "key48": "66CAMgGWJaBmafFtWZhN1et72gSYPLKxPmzXDEyDXamhPPd3LXMdgkbZkQiye86NmDUXgra8toE6SBd52cbkxUdn",
  "key49": "p3XLattYgu7zRZqsWSrQqbhY7nvNv7k6Nd5WjGarK7FWs7JbTqoF2HcfjJMBmgsorMTQ24n6fCr5xeSfa8J3BFx"
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
