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
    "7VTwhyXXMBd8zafJ67uD7PotPZL2fdzfxnaGGnjZ4QTvvQCheJazSujg4o2kaNM6LUvFrf7UC68MTBzYqTRbqz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sxUAz2pZAiFbSEd8yLKP1fjFd7TAEBSceWuhHftLVJimztkowXR8tVCqtw5VbkCBQvHuZvyXbtCc1bVKrCfQLaZ",
  "key1": "5Bs7e7F7wWdeouX9T92per7uzvP5CJndBu3c6Y4vyEaa4nshBJiUwf6YWzVNtnj2jQmxSieRsaikgW6pr14nNzRC",
  "key2": "3gEyMrCeGpTyq3Bm3ugGtFZi84Wf2npQ5w8spHotE5muFzvGUnaD7Qt4ZDgoGdhpMgn2cWPhsndo1vyn652f1gz1",
  "key3": "2v65Gbq6zR2GPMWRgcWrdpMxndjh5WVkTQXKDT84YXMABHR9hVoj62MiXYKh68nw3rW6L7QKyygdK6qHuCYZg4GZ",
  "key4": "2HSGezBg71rTjcXoiwBMGv338Tqbvb46smt4Wq54Ni1yG9xJx38QhQre7SApWdvBK5fQC1UvDgR9TGXTpptzzMGK",
  "key5": "McJg5YqXjgPPxRjH9oM5h8N79y8YeVRo7CMR4dwrkThJABSvaACYH5BaDunDDk8e8DFMuuYEjGowr9xHXVdVFos",
  "key6": "4tYRHWzvLF8ysBsCPY6HVLug486P8SJnFMRKbBod9k1ZemgbAxJTEutHsjZGp9Qh1Fqw2sJZACkn91xMt45LL92c",
  "key7": "B5kG4Jvyb75yzHRetnUdkhTTpcmKWV7f7MGNsMPagnvjzb5FYyYbSypuC6e3CSTRjfUvmsUv8ZYFDEUnkaTKtSu",
  "key8": "3yXgnQwnQ3RxwAJKiopXWsxP9YFrUhMxM54gqmExZsQzbLPCWi5YG68f5dqPzj3rRFofAMQJ5EZW7UiBVGPvpkeY",
  "key9": "2KD9wPWVPv2mXf7sXfwYmEWmKfDUpNdTr27JyvcTxRwKvs5XLGD7LhmhntnPz7qZkqBX7Mr2qmyvSWeUeUEe7ZSM",
  "key10": "2p1Ejz69ku8XdzwW2VqJcaTStFpLWBNZr36hd22SMH2qyxHUHcUK1ddyUsTg4KwHdDAEyPN38CuS2cQqPBEcPDtm",
  "key11": "4SiyzgQfx1e26CKXvcBhuy2DGJtp8zJHM4sUafFAJNMV32UNeJpD9ZqDQfeG8p9SYQDpgUrNQhKGNPbKGmNjLtWP",
  "key12": "vCx8kHVQFei9Nyv3SnUbDDSKoWsPGkFLVmVbbTjPDfNxhJKSCKk6Rkv52NomZrNXviiSDXu9g9mayuWKJ3wQqKn",
  "key13": "3b1mnHuZxw6fAbrTXuqsVjWUQaa15rHrE1tU7LrH7Mf7V4HFcYu1MYsb3xyAE1KaMYmck73nKygzj8HYJC77FuDz",
  "key14": "4qN77RdmWN7UcfPKTStYqC1jpcX7ZjmijPKkowdHyKsgx6R1BxAsHtFobamtopuGYjCx4yvE1Ar9bkvi4VmMtq8A",
  "key15": "qXZ9oVsM6kozuGsfC9VHnFYgwhbsnb1rvCLDnGAh24kVqEG9PZQanwk1LuHMFppvSVmiVJ2eN8GmKdAqnwreUr9",
  "key16": "3L6W3QaKJaE2hzr3rqkcE1CiN4D7VqtLGbeTFUX98u6VrwYmpBP8VD9nUF7ewGh2SbmWeQofqmWxiUt2ysyT6QLo",
  "key17": "5s7S7HFfY1eR5fvxNjSUVA2gSmuC1uxnywz2yoyshdoNcXJZKhn87hqtYtFygbVwhhFxDZWdTB9cJZcyE9mH9Qgg",
  "key18": "674CVesXZob3jZhaF7EBFkq5oxPkvULE6BZVgeL2wVHPmZ6YpvMdup22HoJb28H6RZG1fiwtFcHE5cBuSTeZpFUq",
  "key19": "3gv5byeaRdNt4XJTRB4bzVvfGy8NEaFFctF9ah463Rsx61L9zqsFjfxPMWmHW4cLEEk6CMiMgwzDfM4QJCxChc3q",
  "key20": "3TH19DmZ57CsNErHMB7Yv6JqDzXsWjkpL6mgBUSKGZA7XNdfWzgGRPspwZLcNpwQ12tuHTedfjaK6meNim15uUoc",
  "key21": "5HJc3Ma5JhdQyuqHGT7PGA21xyYgPLJSjHTtCnHpmhtiRVEmnXEqMgdDpscMDqMKP8heJwNnB2tR1UVJLSLyjMbW",
  "key22": "5c9duUo3CBmQefaSstsued4MDHCzUEcE71AKD3kcPevFRfhaFGM7yAf7TyEf5bmL21PPNmSA4BMWgLx156mDWqet",
  "key23": "5W3VzRRGrju7UDjYDVEocdpU6wjAUqPPrkzoeD6JKkf4r3EZ7DCTg4SPohVRuACLrxaHeKa5C9SK9pvRHymQrYBC",
  "key24": "3q8jL4FbmnbVhwnBP5mezDvtn1tj1ixZJ3NiZvk71KiQprUnWBZCtan3sZssmsJLseAHrmgqgxGMasX92MzSZBBg",
  "key25": "3JximhkztruJqgWv6fH36H55KpV6wMbSmwS8NfZbetG5DLX8U8K5bb5ywbX5QQ9NPHviSB2UrbpCaNrqUrMQTheG",
  "key26": "3fFVxhMoVTyt4XfMsEiRqEPsaVmEzvjJJkr4GFWyYhesCiiqSr6jKRcA7ZqiAvnYHWg14xoHcYV2XAVdTcnFMXpr",
  "key27": "5fRQ7EjELsrAazC9WuqfiH1i8GXv4Ejg3j7ZVscEzscf472dYtwmVF1UVo2U1apJuvMS9x6nLdn63zmRQ1xP5zv3",
  "key28": "zhaWecDfue7k7oc5WeQ6otg8DpmcbadREgfBNK8MUQ28hTmpbAncS7iiAKNMatHhusbbtrDiaVF5EqaVaCqH4XC",
  "key29": "W69ihPpxHqxX5C3RVWjadQhh4yG72hS8CNBTK1FdWbZhTm9nTGWokDcx4oRHX2rk6tC6iEuAEWuX5vynwwirNuB",
  "key30": "53MTWynNiSjRM34wRvfJyUSpCXTFSPuc2jJvetTWNuH7JJnqax2QXLqFZFwugr66HjNyFGe1WYGDUbQt9xuRTZbN",
  "key31": "5YXu6dqdYDJcxD7P11QFR41Yxn3GK8SwN7gqHzDuVLRuZBqbEfika3PAJpDagZQohwLHmkYg6YynSTnvJgh7uTFQ",
  "key32": "9RLEFk8JpDTFrJwZFnmXCrDf5V7GqaBmoTe79ALPuAXRbo6WHoRGQYFAhXrAWm4dDZirCnNLxTFKppStWB9SGnG"
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
