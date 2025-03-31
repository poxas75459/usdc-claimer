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
    "43wtnttYY6MMzirBEoj4sZwCMivJzrEJ8EAzXooV7Z1P4c5h6UNex7ycsngzfp1ZbrFVnc9qybeyHikgH1YxM4Jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36cKpyMdRBkboZ47CBsNpUNzjrbq8DL17vE4gqi9cvqvvDQwx7p9qffCMmEunQaQvaZAwLV8cpBjzZ2qQBQURkeD",
  "key1": "3redCTJCpmUXT1UAHFZXFPpVQEFaCKhzW6N7bcBaXo1o1YZPDgamjNbgMrT9j9t7v6HWHzGfN13dY8qubuCt8t2X",
  "key2": "4wUAgR23cr9u7YWaKGcK8aVFXf3RfmAG1DAGGCnyErHNGohhadfkM4K2da1u7fQvALWThkca64dyrPkix4ZKvBg4",
  "key3": "38fndaD6HSGrKpJmDvpJeCQdEtAB8uT7JeXJLNaTnEcsMJRdXPWxUfGzTndzHPbfqEd78pPus1bMPSRGzgLesnqx",
  "key4": "3sqwtxXq3xTwn3KQbXj2JgD2M4mSUJ12Hu83grvLGbVEUcCg5fpV34fYsUczNz743dQeMDqcYsAkgdHM2bCWzFpU",
  "key5": "3Mds3Cd78sZ8fYktyh3fXtg8jMdyYVRkPsU2cufmaLHRfCViqKkaQh9La6tBCF5rkTndfb9DXGD6gGfmkNBQGYD",
  "key6": "5hwCEvacXhNTknavfwmu3CfKpwTca8ZBBcvM7q4uX8f8NpxLb7E8ddL2GwGXh2qQwLUUN6XiYVUWL6Y4MEujPVks",
  "key7": "4EnJM8iBChLdeixpfRVxonbBQeWRkYu8PLQ5kCcVUH2MiJiAb8tpeXsKvdAAuBAtzgw2r9N8VTzQ6sh3HqHx2vBQ",
  "key8": "2UfQQTx4exnJKckKcpCUCrajS9Re8ZWPcKRcx3rRvAjNtZJKsbcwSBADtYqvdwyM4LV4KndTzVFYCrKRhsw9eieW",
  "key9": "XzbQhMJ67WNk7ifKjFBJNZRTsErBYCNb95Uu115dv5gKekqDJNSbWWxz9M1FV2edx59qsGz7o3yZYMkSnLMCA5V",
  "key10": "2Wmjy9Xx9dbWXWkQFK6pFy2obRKQ8v2XbQd1YcADUot1hx7sw3wK8G8KaZVWKMpdb1ykTpmCsDhUbNHJxrMwz2JB",
  "key11": "61RTQfYjsZaXHUFzjUS8DL91SF9w16xrMJQVdcAkoHbuUwzSCXeUotGpEHQz173o5YMnteQbotpDi2aSoxnfnV3Z",
  "key12": "5kN2srnSmd2zvgR8hK3a9UvdHKJstkwHALkKWdHM5XJmPRK1uLEFssXgWkoe7ANQPHE2imShCntJ9dCn4MfJxWqg",
  "key13": "5uWPtosW5VyXh7pDqbSCkqMtx8Tk4mD8bVGg4h9DKPbNLAaZb34oLh9bBm3UBrhSUfoB4HcZoizuTNrVU18Bkpby",
  "key14": "BGacpXUed3HJTpbgsQ7HL8mzBZp8dFf2mrAUsZWWime9YVX7W9F7JgFNAf6fCxYwDwmsDJf9vgpLWEh4MujG2bH",
  "key15": "3WoKEGqUFgHj2avpEqzjBYpZUMnRjPF3QRBnG87DrZyhsvv2t4LrN1XLZ3hXvm5h45FVoiy9PXD7iaD3jhBRcZx3",
  "key16": "5FgPyhDtNerMutV9ysp12cpepZW9R8aScz7c4GpReKoxtbNmJe6Qe6SPxnACnrtv8hApUE7wxfY245178SHtYCPu",
  "key17": "3uBGF6siSLY8R4Wa5SKfDAqDFKxoWQcKFQF16WowZsfvZpF364Chf6ba5DNFzXYqfZbFH44iimz9ByFrSjFN2uuR",
  "key18": "432uDTMmieegoh2Fqh2NKtUiuWjiJmX7yQr1NERnDU9EETEua92K5YwVCWnjTVMZz8UMsVPvoTgJK7W9tZTdSc1h",
  "key19": "3bqwVRv98qTgAehnuNmJqppHgSvKC8nsyFPzdaZXPrQrqDrVABmbtEftDuA1ycehD88LqZyJw7PdaY9NN8vBJd6C",
  "key20": "48oA2wzL89LQze6Q3TdgGJiCSYNZxgyJVRtbsy3JVtMrDUtr81hkW4zqZWdJ51CfGcPeDdXiSBpqnEmNy3wRWxMq",
  "key21": "2aMQAHhoLKxq2RDdc7yq5wdnCDzCu5MG7VZyN96Ky4fqKenQwAzL6ftq4om8ZtTWGsNop2ULrLVYWVvJLNsKdDXG",
  "key22": "57ew4XL5Pt1PdLrYr791oAmjBjmnMnoja1fvWcAoaBrcMFRD7cTpR6DrtiEax6jRM6w2X6nA6DFK1PLKhBArRd3",
  "key23": "3n8Zbh2k8DJ87GtgMyBDdnXCXViYXrxbbFYcGTJ6z7khCk1NFLRhEZrVsBwwBYn3BDoQTURez8jDWTNPHyJf4C4E",
  "key24": "2qFevrqN3MjXCkBjCPw8rC8BQHTYbsVa6MfGKtyPjkgDMYfi5yoVbAAVUnTeYr3WTRq34e8EuvHy5C6gMgxuiEwD",
  "key25": "2thR9BirERc2TyyHKCiw2t6L6r6aMe3eMh89yNTmTJHhcA71ndJbdcH9HTgdTwgsgqKKi8S8RhFH77S4ha64BU14",
  "key26": "4eojzVqBVaLvZNfHPuG4DpgugQXqXd51h3Z5tuNFuKFQXdGtnhWgZJrLG9TCKw1fzofcb54NPyJCQ339kiYAydAH",
  "key27": "CWAicCQbg2KFN9JiW6DTh2sK9G3fdxymMUwRNWYcpee91yhwYCadNb91qDQfoDrKkyY3ToBc5Xqybz1m3BYWzUz"
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
