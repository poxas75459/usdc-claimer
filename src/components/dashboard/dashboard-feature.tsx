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
    "3xJVCPxbiZgRqBfFsWcwpanGUqTRoRCcN3jKTBz2NVaqcgnkwoZTmPL2QzN25ALr5h12g3p9oYD7BLBG4oT7LzmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Be565La2LqJoFL85AVqkLepr1nEsZToBYYb9PfHgVKKatjpR8jpqEqDUMPwEqv1KiQcDpgSGeP6NxKYiLjbuSc",
  "key1": "36wu85RuUoeLfdEtz5BmNiveLbnhKNgPVvBgfrhnGCgBGL9jtnLSv2BZ3Te59e791UGiXXi4kbibJPcHRneBRwar",
  "key2": "qQ2XPqStZEMGrE5e9t155XPm5ZzfEPiCBfECMXjd3znGMkzjhdA3Gu8VvyapGM7yHCyzmFPCncB4LnCRpPxYyov",
  "key3": "3NqkAg5FGkbqgXerd9NqKT75fEFn54U3YPjCzY62qoioDQsoyUv5ReBwbqD66E65ih3LQSSu5GveyWxSXJtnSmZc",
  "key4": "5j2cAeGM4Sfv9XXvQBVYuHHTYNjWiz5r7sxaUgra8cMCZ71qruuyEKKTrJfMJGj6UnPYtqMf93q6E11Y5FQaTZE5",
  "key5": "62q6A3rvx7geCLyfPUbuMg6AuRdmY3GyMeffrtbx5udacQSzdyYhnaTT2R3S3fqUjWpunARBb2nPVo9mUEkBmNrc",
  "key6": "2pwxz7dRQLL4GYEvNv8KtRBSRKRUD297eNfzXigTUBucvKa6ZupLX1CyVHdev2DWmBYJxW6PZPXeLqNBgN4AY8Vo",
  "key7": "56rYw57XuYbZP7ejZVSg2kBZAMCy2sdz4q4zDupkveh7kYnCEUnCvCYpW6YoBhhTriovXMom88HJaSLjRNbyJsuG",
  "key8": "PECU5fDHmPMBsunoW5sKFPrxGhFe1VmmeVX3vCVeY72oCQbY6HKDbDSn9X1gLsDpDSjhGAzdJ85xrejDXCsDWEN",
  "key9": "4fnJyTMXdUVjPjBCZWd57toF34q8kAueCZUU5C6yWjHogrmPvd9VJH256jRzohBQVY1bPUZYkb35RyQzUNHuXBbp",
  "key10": "Aa5CDtmWo5jEm5ZYY8QxiT4w7LNVA3ChwDXzN6RSLrMKddwxe4wvj1WgS3evytTmpdmUFxUVn2LWta1VQrNSQjX",
  "key11": "3DALFagoL3ET4FhuwMbeKgkfwEcGYGACieb5rYMSm9WdN6MSYbZEiKt7dG2iafBS8br3cE1bj99VM6Kqf6JCKqHZ",
  "key12": "41MAyPBSYcPsvfxm25zSjUF9LuVvscvwKaDGig5qeUogzf7ty7Hpz233GLEe12NAJsdKnBQQEdtGqCTTadCifMXH",
  "key13": "2c6ugpWevsN1LfC9tSiHSCHmmPT9LS8eqxuhhvPXdJgvmUkpiTgWJc15G19HwVmfv1J4K6XJ7vuB5yi6GWUaduNm",
  "key14": "4VqfAEa5ErkRWjNayduFgBgdpAxyZ8wn8ExfgfoXjsEywXs2TXGJBAADjFHvDGJ7snYjsZqYqFRU37k6hxej89KL",
  "key15": "27oiepzSUagipMB3sPA6FmANJGGWuhmSR6nVQdaMjqRwbQYHbEBPTSGgZf8xcYAnjXn7YKwwh8puex3QBfonQzGk",
  "key16": "53faczyrtYxw8CZHeVwLjWuRabKybcn5Rh8GsDoJNh1nU8EFrdktBMqSpoE61ap3RmRKBu4uDyohQyUN8hW8UqBP",
  "key17": "2fojoLXQ1PgmxadzYrgZ1bDwrevpGnXyw5zHoPQBUyoei6t4HayNcUMYfD2WTyPY6UgBq4yZDnT4eG2Lg3ieQivM",
  "key18": "37CYjEnQkSKJauvJVWxCQd2n4qPu8X7Az9F8KqzsG43CNTfk9zCUdSMVdh7qVek7TPPv6TfA2P4CW8sBwW9A1nwk",
  "key19": "2K3eeRegpiqmh86mwdDwA9iqkPFrNMxCxvjKdk4tNUsbWZ85nFesD4uZcWwLmQaybNt822ZKf9QGgLZVMcDKwoAC",
  "key20": "3VcmnvepTiKCJm43XkdHxbR7zx19wcE5KfhCp7L3usgYKoheDDGXHBHmiN8C3sGgZNT1iKdkmuBri3S955FSV2bX",
  "key21": "ofVCxDnTFkopJB4wr7oB638VCYJCVhS67bQqWECsfuFeiVu9HtvBm3kKDiJp9RvNmDFa3JfTBjx59yVXh1aa7k7",
  "key22": "S7JgYNrMk2yWv9gsPMn8s2XcyyMBv5KvYRy7qwgLu7MEZXVquSZ8XdQBvx3KpTG2CoZoqXt1aNM8K13ixgH58J7",
  "key23": "36s9ei6n1hoCK2LgpRtGtaScxyiPPFTgRWbuV6iegaX2fzdEWhtUvK8FFKbQQjS7VoH6WdmMBphgRnxJUV2bfwHe",
  "key24": "2ooAoX8v7TX4iqjV8v2gWtELLbShrSCHu9ikWWiXkESnQbpTaa3xo7xpG39dTWMykPFtVyfAh2ymmGjYPmKViFS9",
  "key25": "2eFNo5aJ4jdJM6ALwsKiDtcNRvHMHVbasZqCJ41cq6wytqgp5temGTUQ7pjRxY7N9Ft7MgV338iWQpk6oGeRRiqN",
  "key26": "65LqUmrWEfZ5k6FMuTtbPEfZV5SfXwhGLyTNAtZgWBLAaeSL83F5cWcketrSQM3kHWhaapPkoMVN2dMVHpfvRwzW",
  "key27": "3KEKW1AqJAgRFGjBzPbVvHkAcRiEuAa1PVVqYDs9kCPsCXP4wcz65QpuxsL27n4XDNyXDPtdCdQ49srDiiEaVcHW",
  "key28": "4DskVUnAC97Br34quGvkmCJJ3b1Nx9LseckPZqC2FC18LoZoxANWxkRKcZperJeewQatvwsVVUVcGmP43TR4tfWb",
  "key29": "3ijMRujzvtBfmckLcCMk8T3BixFtg57pfHfaUSGBcSi6nh3SVDgcSvkKoLQQg8KfnWGiG9wCkTDo9evP1nCAkeDW",
  "key30": "5g3TExFhTm3XY67vUKaDbqSibyPvDp7vNQzeDcE18iYoGXj9FihHukqw3jZqvann1uUYf3TaP5dntyeR7rjvFhg8",
  "key31": "4LFjK2aRUeiBwFDnMf1htW9biT2DyQVfZKEN2W1UW23iJXEbqR4eZ7tpEbQqNxQLj8uC6cfi3pHwUJhcbMSqXb7N",
  "key32": "3FC2t58TADhee2gyEBvkTYqey28aMGC9BPt5AhNGEwdPxESCVckbvBs25zjxHMhfcbXKJywHnkFus4oXsJLesKfj",
  "key33": "4DoC9MczTp15nwXNg82Dwu4ot7RuwFdV5hXzK7dv5yhcSqBaN9z3nfNBgGqagtc1ucWVWTokxcinxVZ6LcWGM22b",
  "key34": "4G6kDiYFwZWjv6r79Qf6vqxwXduzNuGXoZonm5K4XyvH186B3TnkD8VtRJ167Vba8xHNknmmDhEC7oFWeM2qviWJ",
  "key35": "fuPU4KxXEqEZz9dpT7u3cDkfjL5VxtyEvAuApwViGzkhoPybnB7rH6M92a2XpaFfRXuWhwUzuv7B4W6MmPgQBVW",
  "key36": "3TyndPnq4Aj9ApnEGm5Nmw8dtbsiDTgboqrfMu9R1jwMJWfhXqvF7fhv9cRStL1443syfodN3qMiPKNXEgKPf33C",
  "key37": "5sWiSAwegPDN8DFbct1Bz1jYJhvWd4riKV3ZSxvBzidoxvcZpwehhkYSkb59eLZ6b9iYW6wvqBPyr3E1uMhFuG71",
  "key38": "3Kmgw8E1CwPo1xPj2ECRrhTtR6JEQksXm2aEwmaLh7a63YyFZ3735UvSmx3LBaVAPfhd6DGWLJjTvMNwvT2REfyy",
  "key39": "3dPY88R4owWpcub8v9UMM9KBr3qpzkHL7TxavZp4gWCP1VuxoXkGPnWARzcg7StDEYKAq8L893Seo1UknFSvpFiw",
  "key40": "5Rn22db3DZFWZs3MrviAWnm6pSWK7e8dkZbfexFRx1AMqojebFvGcY67UKdjvcSttwKfauYAEhzi1PaHLF9eFuBm",
  "key41": "4mYU69RCjCjQWSko9YwKLr9HkHrBkwRAyLDhkYqVLVx9U71Hwv8ES2SRtv6UTkSErcbjp3g1TMkgd3tC4jYEG6b",
  "key42": "493n2f9s5e3QiZP2ZboQ3SBFP1AF5ZJuWdJDPBKHC1JsfWGihVpHNUu1BxckpYeZspCyCUvGcTj2W94x1aakWScj"
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
