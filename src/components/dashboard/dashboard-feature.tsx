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
    "5WVgAQFpahCwMuTRP7M4BpV3CbcrCeKe6pgz1hE8pK2gbURdUwKwPoWeginquELWQFqJjDSoYrqjcMP5iCvXgded"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KZTrg5jaxSXysV6WxXxZBUYjR2HQ6KD7mjNwb6PYr8Yjm2mvQ1jcRp4QLLXg7rihZ277HoTpPhwpNPN1BisABNZ",
  "key1": "5beiGjFcQpoh9UzcifE69G1wXNxbrH5y6qemqiaizL5wG91XwuUUb9brbsHwNZoubManb7diZmogu3WAn2DXga5Z",
  "key2": "2ZpfH4jbR6k6cmZau3rA48mVNav9dGcMtLQnMitVzzYHxBHP9TQBiNLDL3wbXRmGkdXkjEAENe9utVUPgEynh95e",
  "key3": "4sUs5VQ84MGfsEryvpX2Dofpp9ec3nFvg8UzjAaRPWdSUcb9vZ5p8CYia2pBJKEvw1aVRWmgptQEtSYVCDmaGoWT",
  "key4": "4zqAigTooVvH1HuUkjuVxGuP2sEVbzbSdbMbAUZW9RrrqbEqkNHpV1JXW1bfNZRE3XvyKGCnwcrZB6yCiAoFwZzC",
  "key5": "3D2FNtJdbZywLxsQy2af3wgbheyUqkVehVRTNSP3e4KHSG9Rfgu8X5tEfsqab7MCmAbcLKqc7v4mYoUnf3PktSpw",
  "key6": "zr8L58DXq5EDfpu6Q52hDk2eriCd8ym3LVbtAKgHJDiXUDaQnaoR3vzC8PKRU6ZY1hauaH5DVhz8yutKKK88AaF",
  "key7": "4ENxsupPiXrRLE24GK4uu73R7VAHo9cKjNunAzqKW4vpX8LYYWbbCFEBRFQfoNUsWBmYarosonEUFg6PwyyzH7Ap",
  "key8": "57teoHVojE8UtyERjymRyPen3wt3BRHKx4PZbbgNkG45mZB2ZZ6Gz4NgJKoj8Tt83AWzZDtyqaSS7nnoJuKXdM8T",
  "key9": "4BNeoA5k9dbnS3PxZ7tY2kyH3HhByooKfPUdeCX7cZfhSCxAouCEAo16EZh2gfD4qE5BDQAWxU9dgZV4q9aMjqSE",
  "key10": "2RcSy2oioquRyUVxrjAdDJ8s2igFU8rksFT5RiEXGT1GDv6usMhZR3sihwSkfsuu5gknVccK3TsURsa3UiDNPyH",
  "key11": "oZKGGUMGva2gdzvP5X5DsHQWdXRVAUBupNacXRqYXukobdoF7mZViE3EQindU9bM6S9wHT7w6Y33TDrhkyTnjZP",
  "key12": "5hfD9g6mSBTfB6717nYdG2bFF2chsEzbLmoEXb1PyG6KYjB2haxkC9YPDTqMqS6r5PoeNcr2s4nfN9QZ5HwbqPLh",
  "key13": "3z4mhC6v3Zv9Lg92tJdBCj5d9DbnaHc3Scg9S6b8QWficSXe3XCeLySbVE3DZddoBVMrGWR4qiXxfLMuFh2VRLi5",
  "key14": "28bREyDhnkMpkBpCv8jiQqdgBcHiG4WiWLJmTtj7tWUpWWVZb6UJBZA9XPkP2jv7nwtr3PfsYjmyYh7NHTa1YaPP",
  "key15": "3mJAfSZCNgg1TnGPSfWEydJZBg9bGbFs28NpitgJJNnQNg4Vou3pfgCB3vwyBmsDXwH6hB4oieJkVSbv1fjJ4AEv",
  "key16": "63LCVawNjxHn5x28kpNKmteEEuQREuxhW8XwbqsZ4f3PttdMfPd9HbncMBk58XdqUYnmGjoerQvr8ZmbCyEhrw2Z",
  "key17": "2SwJyfQJadoAuU11Yn35gZGqgn2MsYCbxUQz7yVeS5MHBcomTvMAB7faonax68jHWr3J5WCcv3JqFwYhjJPpYiQp",
  "key18": "3vF1sjPCHhjDTmZmmckcV6ueciLdMjUgc4kbfzZpcMYQ5cJqiy22ykaAQxrMiLoTjzZ2DKQjJ2Z6GfLnJs7D3YJU",
  "key19": "2CSW6jrU8QEPgt8kL7syBTUai9GyPx52B3t5E3yeHQit6Uz4RFtEMCDprCfoVEzyBu3mLwYG13B6vGgg9fjyDBm6",
  "key20": "5L6wWH557AYWYdg1VjBisA3meZBym7P4K2L4dK4MWkt7geFV1Ch5xzmEX9QHK3YeKgqnVuGJg7Wmv69meJu4TnbK",
  "key21": "31ZAdURMe99X161YwZY9ta52azjeHfRyv3bBfpSDdWAKS8yMk5AVfkTdqCJAhTBqx7u7jeehcMCe7Mr3PTuW3ZyH",
  "key22": "3U58QbmaZ3fneQvjKBFR2A8sUWVKZeykAmoP4LsVwdcQi7ZmF65QvTit4m2mi5oTbFsiLJPA4DzahtKX6fSyVUxe",
  "key23": "ugTFWNjcwq2Dd4XDBcaJTsHSygFvLZF8Zx7SCq5HBP9W5PtbDFf1WeG1Aw3vUcS9M2EtDzFqyJ1jb3rsSxxSTpY",
  "key24": "z7US1mUWR4LaH7EzfDca8iAtEZuBpR5CU5wa498TuGCuhdGHxFmnLGSqZ8dKdvL4HBWx4MZYASAPgymbuE994uz",
  "key25": "5f6GqCPkZhE5JUW4ek5Dc94htNuKHrPLY7q4A2KbX4uNJuGmsSNfoaEgsCbE4wysxeTGk6X7DUHXFrtfyuGDNtjE",
  "key26": "4Ab87myaARmy3b84VqWiJpNZSLc7pmtD8WdCBTMHshs3gQbzTY8hftCvDKD8712YDV7LdNoz6yD4bzwvY3GAKtst",
  "key27": "5PzzHkipwXCTc1911bmUJmXxrDmsdxLuCP8CQqvYjZvV9fjrxTWS8AGUF5RQNCBKrZp475hFcdRH1zbAKfvQWbtC",
  "key28": "3bAUnTvF21GGzk4uU8Ye7EPBFpq8r3gyBL87dPRs1nkJMkVNfZR2BmDHe8oHdmsu59hxzEHH7ejDyq2sGH86BYuV",
  "key29": "4VpR77hiHEcjghhJj53wJ7zvFmZM3Vt4hMYsT1a71UJVuGyMKCgayBxwUkVCVoKAL1SwFuxBRbVjnXzB4guUR4w9",
  "key30": "3Qcs3mfP6pEQX53cSLLNQohbM99pDTdGaEZRyXiiXrwsG9YNbrdj4UvTsj4jDh9YcZQzDDUzfgWNSb6mvMs8kB7a",
  "key31": "B1Y9FVAivjsshhBSki8XH6goVbnMYyfzsneNtPuUid7Gm5fzb1GuUzA7CyT68ALt14ZWC1iNFHhwkRb94p9wWQB",
  "key32": "3FvVJRNm9j7cNiiuKY2ZQwKxrbSMAQVGyVmjnjLC34dK7fngivSz3dypPc4DMuojfxp5mU4ebdQz8wJBdjHeHmGu",
  "key33": "2CjRpPG1xtuA5gLgb59EG6XKLtF9qpAHFSWwUM9PtPjFzABG5Z2VwDiYxsChFwGSBPwWpQvYEhWawrLYmE5H1UYP",
  "key34": "31RUkARc12yLK2EJebeA13y6Smsny3hEPCqHgmhbEVVEAdBW7A7WakN42nbXNs6o5NPxVvCd1N4G2xY1KNwQXJQG",
  "key35": "f6Unqm9fzKgE9suNhwntUvx5kgZQwwzvcfcaJdVFio7eGtvfHfUSXqFxSns1kb4DZ9MsE8aDv2t5UtZyju9PbrV",
  "key36": "aBF1dbr94tJzbPLQaGzEfPaavzCyjfqzYvdytGgoyH7PeQUuRtStNfAgHB6z8KhuNt398Y6upKkoGTtidxoGTAe",
  "key37": "3P573CHd2Chm3cYeWPqcBGUyqqM2oKVmbEpjbD393ZxZudnGUhUsR6QXyjgn5AhBzFLN7XeqyFDhd7JFRQMN8hzx",
  "key38": "3UxdCB8qnKNSLmYuqVhqUeTMbGbWUf5W4Gra5ZHcR69KxLSohKLgWd1Sb8dyNvrt8iJC11mEHQR1Q4Ngo81P73of",
  "key39": "4rbnPZYnLA4aeTvgjZ8QJP757pehmCSLoFEGEr1gH6n5XYT9bcocRDTZu8on8QwM5mE36qByvM35gdqdXNHYWhZv",
  "key40": "4DFBud6XtjNaNxwcPQXCzr75kXS4hhehGaV86cE52SvxzikT1t1QzfQf735YnM4Ho8Vu43AnQ6sBeY4JuBiGqn9d",
  "key41": "2TafdzKBCg1173DVnagwSLoHnMrFEQCBX8fHYijBAeHGfTshsgsWsAct67e7ZfuhJVs3HYPqtWEZxgE2vXL4xE9g"
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
