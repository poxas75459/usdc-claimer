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
    "2DVLTESchGFzw7b5RRCiY4KcU4sfG692zMHS8gFftvf1QZ2CufSCDQMtk32j3JeD9JeBnLD2xK9oL9iD63AVYE39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D5YSyYWG2uSzADqzTMpbN3ynAboAEUbJB1weEUmuYyk4fiPiHj9ZBteQvYicY7n4kBs9ScaYF7PiMymgMbiJugj",
  "key1": "57zWPeDYfde7fDXKSv2uE2Yz51jtCBQt1SVuY661uAWXr3Bm9QHCM7ZEsSPLhYzabf6nUQqNhQyhTewGLBAzSE6L",
  "key2": "5ADwsTKJ2zgwDiUvq3rDyvtSBPRG9fFf2cdZkN1R83H1uPWAdDghky4V2MYxejcYR6MSYLS82oqsqToJ4qk8sBid",
  "key3": "5ximZjjm7FKPQYsy1vzKQ8RTrc4EXx4aasK6GagmzDRazBn7w4rz8rC9SVSYT1mnGAWfLf9L4DQhFNSpK32RzGxa",
  "key4": "1fvu8Nzrccf2vQrgGLifmh4p2LjxYYKZFNwU9CgLmbnQVzCYvmDnePya5Kbe5HL8rwKqirY3ZZUDHiYm5rTEdYr",
  "key5": "3qoELcLC74vvAVhRGj13F5Fo9SG4XNkCAhHABsUKWK87ggiBCCntAZ8i9Ncmom9Nie8eSS7FyYLho7FA1WDwHW2B",
  "key6": "4rUu6CwS21r6njHFAkQ3EpDWGyvJBz7sBigjm9iRjXk5myfFmyPZjYw1BpGHov9Dnqov5yZJfP9XMPz19EcjtAG8",
  "key7": "3iuuD93eekUeXAwjVYEzbT9uWFas4b19fUYY4ixyt5x4tFZT5S339n7mPXMAGaTmpUjcogvFzbeUFqzUmwzsSBak",
  "key8": "2TDYjpo1VajjpDxQp4V8HwjGDn2VbStvcvNeWBFs7KGEYrbiQeCPFKJFHrkEYzib9opEwVsnePUyUV4FAdMYMXiN",
  "key9": "xXh1SVnYayYLsxH4BvdBXLSeeTypNXz4Xq53Bx8zy4yYA42qi6YqVmwnVV4UivqAJ5uoPbzjXPeKuwQLEyDe5Lb",
  "key10": "4VbNFY8xwpmgFEnSJMExh678rLBfVLto4UR1kKHMMi41fvgYmMxzd2rVjSiDPPNt1yhHNUMw74XuYVUzQZMcpxmz",
  "key11": "3kF2Ct9yHsBpCcEJAreVZWJ7eK9gDPbPbqvUh1F6kp1DJ4hgxjZExQqUbiP7d5iZVFCcM8hUng8Vvr317pNVCX8r",
  "key12": "44TzVAXeW7cvrr9pUzjSzgCDfXTQdKr287dR6cVYHMxoumnbCZsiyW4H6jhuZ3hrsQtooUnfNhjJtxZ3ETVojJCD",
  "key13": "wzBZFqn3tjA3qWfCQaFUCNzMZVQ3XhMGEVkXzBtPx2RSrrCKd21dBzUEhPtPEgsXchoTiMTPthSFAqZe8vSb6a9",
  "key14": "2zvSGUqpXxvtZqpEKggeiewUdLwFSmdthcnAyr2G7Q5u9CGEBSWpdA7hZV8XBbCrXixhqD74s6Exu84yeatSHaQ3",
  "key15": "2YgwbDgHWWzkobWT5uk9FZKQtPmFxDAoY6ThJM2ATyi2tE1EpCvkydVvp8oxMy2PwYQvVkYkDfZEhNymKeMpjduE",
  "key16": "4q7tQsgtQ1pwxcbNhXMAPHARR9ngZREhVovHp4zb3yuMiaiE24JqrhXJ1CzZzCp6qr3ANxhq2ebyw3FUmFSc3kgM",
  "key17": "5FTbJxdnuwoy2XcPhsLvamD7SJop6Pd41F1extvCF39RSL7EUFgFGxEXVVZcMXsE3bnVGzpFEoe1CEemvLunAJ2V",
  "key18": "rerdCcB4z7gg3DCc3Q7ZFadxV8R2nVZegwA47V8nNvZzjzDjQGQVLQZNRK4cqe8beCDcohF6z68YGUt26c6Jv5G",
  "key19": "2jkUjN9UXTsxWg8JU3znVGDbJhaUy45HCbKnewZ5xNtBFELKw9mx9ePb8fFPY5qwVzYpNUWe2TtVRVTmUDCVsEmv",
  "key20": "srxLT4jGNp3xevrCpSwcZChNxJKV6BQWX67FGUwiW4hNeyAgszM5NXJdUX1BXPVLcnfDw9UsDJdH3JwhYxP6pgR",
  "key21": "5WiUsczwKnpEuVozBT8LhuW7vCcjbedPa3WZCqqioiJNiPJXA1XL48akciBJ6asGWg1Dy84AW5GeeDLCGyu9fVGK",
  "key22": "dUdrmm9owMQxPMtQMjnxZ4Ri6rdLQ2xFQ9ecynob8e7P37Gztyy7SKXSgt52m7AbqY61DDCBHkNBgggnnUj4JJD",
  "key23": "2x9SzQS5FdsC7zyDDakHY8VuxNbTkg4jk5ymnVaeJ1kDBqwhqDQdo5hs57D3F8mpHZ6FXeYod6ALpXCPoXWixfyM",
  "key24": "3xavsidBjJsLkKR7T622erDp997zMMhsXep48vH6NfQ97xg5hdziE3zo4qAkF7J4JG3JksEVpXKZHdX6TUqiLJng",
  "key25": "2dQAPDkCDY9rL9iS1btr6dzU9K6ype9e8WWxcBD38pLovfb2kj9K9VZTTuf2A7cDxJFLn4VfkjhWdG4n2kdwycXd",
  "key26": "2bvQwsMYpGVLCkA2oMkLCeoSbyuF3NcsxZ935ZzpQNhkijToxPjXomead1kiNUFygbjUxj9cnRwHGc5NJmaD3eaR",
  "key27": "5u21A22xdRr44yTcJUdG6XfHfi82Q9ebuRjsyfyud3D9VV8dUvAovDaj44rz5eJFs8qkXAVS7KGofLVLV1a5eBLS",
  "key28": "2xpvYJXMoM2wdWFhvb74uM4uwSPGrEM6164ButYbVESyb3aPV3eM8a8gUNjK5U3U4VHJpwzhSWfXoKNNh4UU1CJz",
  "key29": "5f3GVMLr3qSnVgBiHUprU2aZsBU4MdsTAvp22XQogVkHCDrSKmEpfE8iz1K53DnUsLWutFJKDrLMJL5iBRgzVeqS"
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
