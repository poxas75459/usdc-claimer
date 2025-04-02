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
    "4uCdgeNaBRWWAbsCcHAFbtQig3qE3d3nPdvcyp99xKSxRSR67Z5t6EoR4htVsLoVBVjocJGBGBznqQxPswSyE4gy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kNkeVwZhLWZSGaMzVLR9QoT38JSn12SNZKLBeu2FdF6xCU4gbutNhhMScimwuwRYE7bkSXRAEo3iSaZNqGLMZZg",
  "key1": "P5hm4ytQEWT22sWdYE7JHT8tCXwNzRVnnfcb5CrCHaUfymckJC3FvmfBUdCvwEUNe9SWBtm5wszxvxVoadC5kGy",
  "key2": "626KccuLvkBFbzubqGxdLk2SypRT5WD5LQ3hHkxqwDBXvNLDXAjFHUqkMgG1MbG5tTG4Xcbtt4HB1MLMRSYv9ZM4",
  "key3": "4zfSfHbDTWL4B4pS6BryQg4b5sHvgBZQAxD5XGRLGUEuUp9am2yf6mFsUDk5AngDb8mh29QqtFsNZguNjm7kAKrm",
  "key4": "5MJcdPmojwRDwQ6ZLsy5DhRFnfWeJgPADbZAivaCqPKJc1jshRVJDU6J99awWkPvEcDNLTfP5VyhCr3dFipmGYG6",
  "key5": "yQZ9rux4nvxqADjnPSEwjkK4AScQ7pRzLSqbMceNBccnrCC6R4R6oMXQ6LvEWjAqtXScTgwLv28DgCfyp2yEjX8",
  "key6": "4cVSYSxhUML2PbYwQP7qnzvaZbaKRpZHfbr1sn7Sk2zJYGFZz4btHSrswT8WhasTavreCXhsabUgvEnr5t3atVxD",
  "key7": "4Kxnrj8qAwAjvxqf8AGkZkthrf4dLUbF4XdaQGnfQ66k4zcZCSPNx24TtrGB2EUPq7KPM8rRa9o354kEPSTTEDrM",
  "key8": "5Ea5Qm25gEfNHhfj1UE5ABrX4Jj45bmvr1kjQ2PASRZXLvcgZAcLphDL7n5Myc94ZAFuWBzgBXtidzN7z5Pm5vGg",
  "key9": "31gAE1f5SFtoZNGvUc459QCoZP15TVjMVqPgnxB3v8PMYHUENGD51fKrZ6VpdSEDNLsM6NXB3FPF7JnQAcyEe9nB",
  "key10": "4KC6URRqt4dACdWXaCBs7FSYsQTtPLGjpac73oeKjekW4FxuRnScTm6B7meWQ4gDj8jVfAEdqAevQ6arM4ADcNPQ",
  "key11": "5enCqWfhKKZMptVJgA1QvtexEe4WvQzzbREoKUPDvC8EbVoYWSYxGrhmapTC12zAJZYNieAnTSKfvapt3zmwAvJr",
  "key12": "65sYBEqsnM8JyAJ43jx2vtbtbgVbPhcc45YJ1k9k6qYEAvFZDywWcxA8TmKnQLCVashU3SmcCwC2Haf8tB7kQiEf",
  "key13": "5AvgCyKfWSH6GNwVqBUXQ7ZicF2rvGsGESWpMn1Eu33TBZeE92F6YT7otrjP9Wextd2ZssfKnK6DPLokjrDWAPx4",
  "key14": "2fqXx394iJUEFHbe8Sc3JZj7YXajELz3Lg7zA7qAvNEH9B2CNMBNUFB25HjQgwki6xPRxEn38vag5G3WnrqMhvnS",
  "key15": "24EoVdffGzWq9kiwm2KmL2xCsjwDUcEU7wybPqnYdcE36aAiAfWWfrtm6vYeTno3Z1ZrXLEocw2qV3YLXBXBZCve",
  "key16": "3jZv1QV5Nw3JwkTzdmuiTuvcGyL1yZxQD9oYveqKJgEKzSyUHyPABEc4uBfEokFXEGuXuUCAumieMj2FUm4gdnsK",
  "key17": "3cJsmuYaoHheCdd7UUXpbQ6LGuBd2wmRDRQ3nvSXUTUvdAirpRFVmhLncQf9Jw75ckQkhTGGDRnPFurzJ4xx5Hg2",
  "key18": "4omwfvttakkBYgWPvbKAaoJ7htQcMJ5kZ4rakDvgvYMJGsxPHs3nKxujKLX6Y8xmrSyyw52z2ipVpXkjvbHMESLH",
  "key19": "2ufmWQQW7AiUwpWwJ769o2kUzyNmDytLtE76wjCnu6SdgvqqQjMCQY8ZtSUzqszygym3ZgfmPg6YwEEWUivqVsoJ",
  "key20": "2BtZeH1yK9pDZRfTDtN8pfcYdCC6JtLgVFREZMhc17czPj39YZjo55KRoJjo83LTbdR9YdcuqbaiPLDLXTn4qZwo",
  "key21": "5pAkGYULNvhGNLCXG8k91ELgGfZrz3UAJe8vvzgGgxavFb8YH4TKBoT6A9JXjNWzTBxTQoNWdmcZKnJ2qjgtyR7h",
  "key22": "55iNXrQJtgdXwMGhAr3f66u7p9WVimMcTockYhr5BDmD5a2EDy3jYZRWoThuv9TihDjhVE7UQGmJ9VVhcyVW9B7Y",
  "key23": "482AHEfGmF5HyWxUdgJA7Jiuuyx9TzzEkRASriP118qDqonUjfvxSSxtjAF2kMiaRBRh2P4sUh46xRKHR7dTH3Lf",
  "key24": "fTUekwBcPhMQXxxGDHnpv7CKC7jVw5MmcWEqmD7VwBEFvwBdvYJKDuTz51sX63JEbyEsKL5ozzN9eg5d7cFxFoP",
  "key25": "Adr7Ua1FakpHZkwLmnmRY8orzfEd8qN6THrxPwbERoTQ9ju4kmPmzhg2S2V1jwuP5PZA3ZnvNPLBEene4JV8aft",
  "key26": "48mMiDgFeTGCFa8qofFN6bK2hKVk9uF4xMnuqhXGwR9h2PiWBQF1xK4Zo778QMMojQNvmwYtsqQxrT21jKQNRf16",
  "key27": "226fowrJCiFpZjLgRMhXYXRtRWL6qmi3Ly7phHNimAdnseWaBATLLRK3d6jRnjB23H6wRpd1v1mJymztJtY5vfP7",
  "key28": "2j4NXqeRn3pNKwXS9RCHTNC9L9sDPQmhoZWDDrwz6mh12mFX8ywWjjDsxgtxvsJ7Jx3RPoNyLNY3isyTdhPMMqXC"
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
