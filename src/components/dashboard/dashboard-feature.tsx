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
    "34vxfZd1FHKh6wKzuonzcYpqAz2itih8nCec1qdukZUhfEpp4fhuY8jC3J2i5hit36D3TFSfo7uC9iEVLfBNhVfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HVxwAkNwf63eotte5ACEFkdbizQJce7tWcEyyN6PgvM1dedLQRo2YRrACmH8xh11Bugxf6Jyarn2ECUH6ujhUfa",
  "key1": "65nRC83Erk3SQW6PrSf1NPqWh6buiPqY6GRbYVBo6eG7pFbBNjrYBTLCbG7rCHfCzwHAzAszNUiya1PJjhxdFqKC",
  "key2": "4FHTgEVnKZRQ9qwXCktJ2asn8qpCbkxxjMuYGZ87ia94o2inPMyfgj9LQCaFqKUZczC5rZxXDuwochM58DMf2D7X",
  "key3": "3Hi4F8TE2XyLBoX8yWDNaHFzCJHajv4JaHBcPmmguL2VjayNSssWkCwhVPzaD1koUJLNYxRX34skxNp7iPN4AnVn",
  "key4": "5AjvFAgDrwKqr6QH71YkqQ46wcNuYrNpAyZxi7HycfhuYdTt79GxHtoF3sRoaQXKGZ6eQGRai4xNneQSVcEiUpRG",
  "key5": "3d6VW6LexEnCoGTegL39JLsoyU2qQEVJ4VzQtVSkcfxAQY33SsV3Nz6REbETSEaMeUB49PeP3qSDAZoRTsmCQU67",
  "key6": "4sqgLmZAtdrKZ6m4oaa4r9S2SAAqKXyPBLTb9JTroSajb3NT6nmqmLmqd1pG1ZXhqj22agfkffUkq6pscbCptBGy",
  "key7": "53zFdNyGrcrLMi2kPsWrBh5urN2bSLfnzuyjFKSdkwUryu5FgBExaRGT6NbTgv1udXmih4nRVZk7ULe18Z2uuqS4",
  "key8": "4Z8uAWUo2UuQAgbFKbguXrRKA9Ab7Gt4Hs543qsVF79nd5bY4uptLhfcCJeYqet1XRitCjvEcRGtaa4psudiocU5",
  "key9": "XmQxjAPcqKmswEmbadFRmXRXLuGw5RrgTzaoYLydWMSnjEHANXTL2v78Vkwx2LeBJnFNJ5kKnK8cXKFffaTaTnq",
  "key10": "LVHBSmnkRRDWMWy9MouJcCUf6Ru3b9QwqkSgBkBAt4YKEQjH1t56JbLrFXDmBTJZfDsZdVMSMbgfDt43hoG4jH1",
  "key11": "5KsRRsQBV7mnvdoRcmyrNZY4kme6XunoDq8Zj6zAkFiLZUq7DawigAQ444BV7wn9mHqebmsSHtxNgtuqwddKDXo8",
  "key12": "4BVWxUiTkxdsfDSsY2Ym93DSMyWLHpnEFvoihahJK8Zs7f1oe5oDM5pxeAKmkxwnr7isk4uKRv1qysiRe8Sx14wD",
  "key13": "26B7Fsb4urBQJe4iEck5HzEK28oqkoSW4gVJJ4QAsnyUoRyXPcWwDcB1neqyfakZrUfSrDxDhfqXhUbMLcmdpATm",
  "key14": "5WNiWL4FjbU42XbDEqmYDsYc3MbNViT83NLqmTXRxm1KkdJhwP4CrTePVJMxQN3e5GAEvB2J7SbsGpnrztLduumA",
  "key15": "p61DBCmcwUo3KbRJ87VRStqXaTYLo8yPAxQbdSMfh66RggBttvDM2kUGr3K94rQDFcEueXBzNvYDqfpwM1JB8eE",
  "key16": "56oqBGoUSqk8htaNRZgG8oa7LaLixfWmLAtq1dcLZxp75qJZ8ZzEbt4QVfsdZzcESENUPtFn4tC3iheZXbJCjKhh",
  "key17": "4iAAcBsNFeHditBiNFghMteooZPQj3JDdVyN1Ejam9u2Crj7EknB7wrJKX2u4zbz7dMkcGZhuTQZUiA8pdnBQDCA",
  "key18": "34xZKd7hjqhNDVQbY58TGcGKtGj5idgsGcg8tmbVMM9QMgEbbdCsf2ZGgcLteQxGmD1gFJom9JaAyifYYT9uceDL",
  "key19": "3hNfEVCRBTem1KS1qUffDCpYBcnJ4VRecqGdYvwBViLCKpCmz1prhF6gkH9ELU8CxE6ns54jhtnho2NwgVVNPH3P",
  "key20": "wvhvKYwNmLXg92RgvfqXYYJHDecTzjMfn5EKVPtnhrjMe5PrJ7owjETiG3jvpBV8HobqsLK9tdwDLrRoLJHqjr4",
  "key21": "4zUeDoLgg5rbBpSMpUSV5s8J9R15B9JwRxG6j3DLhrbYFH4ugQ4Hv4nwqKXJXJD74FcRe2JfZcVpTS1PPstdtRy4",
  "key22": "4hiqWEu934n8J2JErdd8oujZiaRStJYLgQFQHAwaAHuGdaWorbNhcGiBxdrAKpDEoieNpBLVXaMSuyZqiF8s3fa1",
  "key23": "61KBBo1iVwkuCUBetTKukkhypR1sGKCp5gGqkgDEFAStQbgxSgYxuyqyw6Fj3Bnw48CVJuEF7g91BUXfDoZGH3Sc",
  "key24": "5f5SMRyxY8ytQJWW7iPkC8DUSR1H2ZKoaiLiyKKJcyKxep1yEwLhH3TSHtqm5Ts76uCxqseyqF2ULhyUaKKQj8SD",
  "key25": "j9bRMkLJhsCHPyuMH3dxhJDGnYaYF7Sua6CLD41JguGMw5H1qYEHFQri6KKY4dzPmL4Zq13Y7BX3j5XWyV3PFYB",
  "key26": "5EABRxUzRHDx9UQCPbMzpqkyRgU1W4qf6ix41wufVSebPGu9XnH5nPAEKARjjuNf8YMm8MGwuHGt5iHoBHX6ZmmV",
  "key27": "253Rm7nyNxPX37w5Q6DUnhpS7kHmP2WEiKczJLMkxiCehqbyq9yKLEiC24emk4VkULkpqu38hnpZ36BguEiymXAQ",
  "key28": "3UewB83aKC2vJUb9b5w47o8akVFcq4Jt8Mr2GVtbmNjob6yumsyTTAXVHsAD6iGTvcyAPMEH9EiG6E36aCt5xybq",
  "key29": "4mpXYHZ9gmg2L5h3hiFLbngaGg9qZRBaJwziKaHkio8XCm7Ct4HDckH6dR4FJyEvKiBqSVEtMUiThWskf33NkVmV",
  "key30": "bGcHvvaDC1y4QjUgicPPKStsTakfmUjY4a6jrmjoNNAiPoPCwsNHNtfRb2dp2j5ceyRcEkjesUtf3FqzTLUWaxJ",
  "key31": "6486qLMhMekRUbCoqnJRjHK6FAX78ejmq4LYetA5N1wv8HrAMrZfDg27sXsKbMoQtebWXdCXDigh5BEij3BBKQvG",
  "key32": "4JbMvcrkFPrY8PTgCGZ3xLr89Zn7NNhDB9CjgxD2rzDLYYnvkBoRw3z1u6KcS6aHNc9szDCvmJPLgwGtuXXnLpsA",
  "key33": "5xmPgKChFMw13NSojhrezFSFAVfLfR3v3anhAkk6uHRSP2CcUmv4zVrd1ndavXm15notGtXsG2KkutPedvSJV89M"
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
