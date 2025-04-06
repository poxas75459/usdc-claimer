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
    "R7Lavr37YcNCcoAxw5KtUzjqmBXJCHKisZxAnvLqmANECKF3as8JFSMvGvpWbzmABkgCFZ3FQDrL2BKBRuN9HJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fiVSCeb4R7utpK41yXkAfvAckExnKu3VYvuNf7GqGf7bMQjmaUfUc3VuCt88uHZjWPC9awBPsBfVD815xKDswM8",
  "key1": "3VToDDSKXnEa68UfPRTeZUg2DNEYkc2Xiehcskhy3SfHjhjQTVkr2VLxfEvgufaqYqQ9A1PzokAcrZR2jgHEyCY1",
  "key2": "2w4LCn4LaqmTzDuegWuda8r8vMxC9eG1uiG3Eryrbrq7tPsiAMNiCRMdDpyiNycL3R5YN2z2KGCGSxLr5YUv59dj",
  "key3": "4rxi9xb6vBbkruzGkANBzxifCJgVoaqk7eU6SbS5QK6S8b6yPAhZ6bfbLUXFTseVE3K5dmAHhciN7nrqhiwZQf2f",
  "key4": "3Av4Eihn1W8PoKU8Lap6zGoA2BR9mEEDYPfd1s4KSwyYqwn8yzMf9nbQgmi2aPTfAya5D2JpuoNvKXieN2nPLHfU",
  "key5": "2YtRtGfHKdLZpF837B3F1Bxpp8h9s3CQymrDA42KhhTVWLJVZuufWoCK7dufAEYAbxTM8JkWWG2vuMVUAjGa5mr5",
  "key6": "228iPmwC2MeU6kC8FfxDdASDUsq6ziVNhtf9RmK8DHdcbGszqTWS2oTmeNisRNCfK2VNUnAxPx3jBfKb2YrLGaUu",
  "key7": "rM4fNs4Lsy9rBEXqv1Q31HcupkvtyVk59MF3v8G9MqQXaH3xHJnH1RAyZQdMTHqizMrkNVMRwL7RcatWVtZyCu9",
  "key8": "qtF6s59JeiaJsKVuko8SCRqR2BMkJyoKffpZ9tSDRDJHmRFXRLDtNFkowjhEwc1J4ejA7JUoEf16HThEnwumbAg",
  "key9": "2sRtkjxmZzjatzrvoVNqMgdCoXyAfRHreNwZR6hLC96MFy8RKqwkzA1djXYMhixbVSdBfBb9ViSQHQpwP7RYhTFh",
  "key10": "2ux8gLeHQDpvDkZKnB3qNeCX4wsZobSNPfcDxDgqadTpGJaeuMrx9NRiptihAHBzjD9vbwpDh8oxqZZH9oWCoFSi",
  "key11": "4fasvpBpjAYhm3PmwndjM4tQZ1FjvUfaSo4SMoyiBiXSKVcYSp8amXnetWfE9qiC9p2r5d36EMicDSWuKZbv9DjS",
  "key12": "5airRzqn87ug7UYpTwZEYTRJKmnq48Ys7pgYmhaSscDWzZWsr1FUT3tuoKNdEh66dngNPi22fRH6CkUWEqRakfsk",
  "key13": "fEN8hhke9WMgBwqKKL11hHEhh1i5gZV3JmAsU8bWL54wVf9RjwwGa5LHYv4u1irbSHyhSCZJaZVCRVS8tTWzYqT",
  "key14": "5cUKoET88wnWBgcTVthf5gLRKsTf9yVmErTP8jMdXhe7hRyryQFGBrdJSFP3ohVTrGyzu3eg9jWDNiYuxhhoZbZ4",
  "key15": "5HEFx85NB1EyySf5v3kGnU3Yjvrm1BDQFX6wkU5jSX11mEVon6MpaJrrbN6vPvePHAEBHmE55ULmNywR56iQRZNS",
  "key16": "35CjAsMYzUBGp7ZBKNJUiDqbZE5MuFPZXDS7eWivG9QDdZbRaSm5J6GQ7ZT3ptg8HP6uN27mH1x2Zptn7kR1CZvS",
  "key17": "65egj1SLhqxg3XMZgS4229xG5VDXXWMt3rath68gA4YZBamc8arhcXGkDDNkpLQUbKXXZUYPTMipb7v6VqwuRcAB",
  "key18": "63EBoddNprtPXNS8oY4VRS8hVJTRyxAXf9PDHiKmp9AbRwLUNArZkSvXuxhsrqXpBFxwbRzhDy8nsxYqZdv7nUvk",
  "key19": "oYgZt8Dahxw9PnvK9DxNRSwW5vYs3o92Jmvo9odNVFwknRGJLhuT8MpxQKHaPNr4WupA226DY9yZWX73jfyZvfJ",
  "key20": "5MMsKrkaZJtonvGwPGpwDavPcrqgc6KFhHFWt8NvKvx4rrwPLzYKRZMFgyHYXr5XjbX4shWp2xxby1jJc3vesN16",
  "key21": "3dQT8QDxxSvumQWrmjjmH5Ft3sBNTfeHCi8F9AgFtg3GHgJjfNcHm59nNidek5WWRT7QKtgi39LiQLdBJVgf6qc7",
  "key22": "26FvRGTEeQt265p1vBgLn8MLp9eUXGZMshYgr59GGcESEyhp9dxxihcGQJvcgCg61WmEfTkxBSRBkyFYvEsb3Vys",
  "key23": "5tP2QDosSwRu2NKDpAXVMRC33ZmMSqDEsMscJCmkRSnM1EeFDYKHBcdaa5hHz5EMXxwjhtpCtpxY5BHw8f65GkhV",
  "key24": "46fiuBrctpCb86wRbLXM5dzuyWrqdjizYa2y5NRGJeYE4XVdvbLA4oKmJ3bdyKGU4aFC7Ekh6VzWysnhBWtDzEDF",
  "key25": "32mkmJqrihQeu8DpXfDMV2fbqkVngFk6rivzukfqPUXG2K5z586dbn4fiG79evvdP1ZwJADyirSydAto1914VXGT",
  "key26": "gX7GntFYLKwnLriC787CbWi6FA8VyD4RiEQzmd2ne8vJBzdnW1gK7s23sCUQc5YstzB9tRvjGcEbVmXnqyu177q",
  "key27": "5gfAAW4J8dozMm2wJvd7TBxbtNBXiBgVbQJjk7cR4gF8vWtqq6G63MT8L3HLojsa9xrUfc41Cb4mvrym4JYckUq3",
  "key28": "2HTdN9JUnQwEa8HYKMRe1bVhHQGoYYxBdyMqpCBjTFmQGSTqZngvuThysyKW2HnNjNyCXqA7kSVUQKVCC12Ffuwo",
  "key29": "2NF3MbAT7iSUqQT5L9bbszD6XZVkjvabVt3BsNjVA3KA43cZNnFxfp1SHr1vWwxDWg5M81Bhxv1oK5nC3WiSWUNu",
  "key30": "2NaevNqdJDaDWptA1VvuYYZ1MjQzUZW8FibWHLzJyrAhdxVdXY5hBbGUHC6sfXsVPXLM2UJCnN3oxK1yat8TLdbh",
  "key31": "CxYh87rTowZpwzSaGqzdqvVsn4amsrWDvtuydnowGrX8Ww4U2rAmvypAAzVrZbPZzGeogQRX89TTSTnjmLDHtok",
  "key32": "3EneV2XTtJUYEesY7WQkxLnPxbAzLnZyAEmX3A5RQ9SRxH1j1thbvtCaUzMVFX9JY5t15DeGACD2u8MkJEHtsxMt",
  "key33": "3v6aHfSSG6yEPNRDbVwryf7FW8mL2KCDrPkpEjnpJUx9MVseB9oxBkCCNWpAkfHwsU94MwBhZYPrcJKWjTiH7MQu",
  "key34": "61L6npqtQL71BCCzxxHVCP26RYg895C8jL4b7zGCQ9hSrs8M4D6AGBXT456FD6euuvjVmhemd3C3sS4XvcvrZwJN",
  "key35": "53zbu1DU2pNjjEFbKgQXq4fUG9t1HLbVHucSw32xEyizPSM368UVEN2VFcksRY6RaJhuX1Jrk6AQWP6m5TBsWJEv",
  "key36": "aNHLiYJwKDd7UDqp49YgqEBWJhcKUuTZpCpj3GHye2tB984H42UZAbHKXw64HwtLTmb4iSiiQ4LouT8ndfZi3cd",
  "key37": "2vriTyLKRhvYt56ze98xXnzxvGXTgVx4QxZqDTUpsUGEHjf8dHYYsVtKXV4imqxCNVb4tZXxZQZD3svKVwAkD4dB",
  "key38": "5kUNRaK36ffkRSwhNrwyG5Q6KtryPSBk9STzhGmP463wTe7fdD7N7nZ6yKrVo85B1PDMQT9cC5pridgrtrPF1hsJ"
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
