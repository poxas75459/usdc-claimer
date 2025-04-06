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
    "62ysNwXPsJKdhd5CyQJ6kdGPi1vtrDqBhVG4evBFQtzrfYhsw3RSQfAMzxQudFp2iU9XMPG4BdZ2FhiUmaAd8Aj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DcH5wdxcWu6NN9jieooSHrfqKGUmAY6NnzMAteb4aWbkejknNptENpgYdxoHYuhNWWf6WTv2uZVAmbtQ7nmJ1Yy",
  "key1": "4RYoaPYKWbfvc59jQ36Hooi4ZrJHqdtkLMoQtZNg8cAwwsPqNNdfTnbYTf7z3hQx3BcePS7j3WZ4bowbMeeAmtAU",
  "key2": "4daSKsF3MAPamTMWQwe2bJgeq9PWMA8wAEWE2uc5844FsRUEnEJm3h4AVQGW9nMPGziPrCgXTQS3RJbZVetVnwH6",
  "key3": "3BQWAgrd58LWkbuyWkZX3sHq1sfofXSruxcRApBUeuDqLCg7yprBUrK3oth28TZw9uxJEojUciGCDbwCAhMrtdB1",
  "key4": "24bqUZA7b72Cq11AZNJvSRkRYJ6HDL3RWj9GsZfnEaswpSwhhjcZkPkEs1E7uJF9GqssMUEqT7ko5343XPzzayWh",
  "key5": "31vUWmoGgMxyGK6acxcXamxQ38qeBRPSYkbMfjf1Bco7D79LD7gHSjTX3ccu6YFfMcq46A1fr1uUqUqMmLXveD3q",
  "key6": "53TvmKoh7vsnAKKxnKniE6HUBpdxK5WnpyEnDgfv2sNsanheQU3Szd7UqVKJQcgA5qwz6bszPCzbrEy2EJCHL6w7",
  "key7": "3EQFB9b3AUp2DEQHyswcLT6bRt8eBmMF4LbGpd2ZNQU86qeqvKyUgrkytbcrArZ58dHNQDRxVA3qQdhaLF41cByC",
  "key8": "4cAaPLFCCHm7dpUFtNnvrX7zaQb2KDHqSQatFSSSBb7LmEL1jXcSPboeU5oFfCJCcn6SNfN7TTo9W6iJy6vXBQWJ",
  "key9": "ZRGTFA1CHiNUZVjkJHhRLByWexY9MkRaapxu7TrrA7tPHtEw2nVmcHNNCJ3nN81gA7aezvD5ZtczHdk5WJe6Jvk",
  "key10": "5aA7aViRw6sgyMjCAdmdsm6PP6U85S6mzMmQ8wwmTsU35AmJfGH9Gn5a1d3sNpEftt5mD4DgdHHngx1DKMwHYVRA",
  "key11": "5rkW6JCkdViwRF81Up9hWYbdkn5hN7K9XyoWy24Fo1Xc4LvYPxSyFGpKBQBAkLopMdREcdG9c5UJCtWJCJ8MNALR",
  "key12": "38S4PryjtkWGopwK1EJHAP2y77yCKcNxRPh6RRWm1BdwscvGtbM8g1PoS5ScFV8eeCVqStC3vKqSj9C11gRui1TQ",
  "key13": "4rne4wdogaMMJnHNWfSThAH5fDuWxYfVGqKw3CVXDRXiKfmSa1du9H59kmLLEz81z8Z8K997rT8P3T1ykw8wisRu",
  "key14": "4GKfXpmf9J2GwHdBLn4zrpLMY8H2FJ88ej4Ke6Hym8TL2FantCVHAukT5aNsABN4dFkxyXWR63iyz8qLJxRMz7Y",
  "key15": "rRyGj7ZebFRsnX4WhG4mYByRTezchGhnHkH1uzLh2qiKUrpGA6xnBQtsjBZECY4KjFoYvZBybXhuwvKutwdzVWd",
  "key16": "66x8S1FGr4xYVRdWDc9AibkEi57U21xWSDNbRa2y1ZFpfD5r4oy5AZS3LMdLxZkXnVWmCqwfctquNUkV3Et9fS3t",
  "key17": "3KxBhnitmHXVwniLSk7hsJymoiEw6wSLbn9xSkAkQXC2jCF2oAGa6zGMw4r4P6ZwcUb7x8FXTsqjBYPZV8pjPE2U",
  "key18": "42s7iS2uXBfspFfNsHb2nnraajyLdRnGd6ZiBiDQiVzcoWtCWECuGSTJcNsEVT5EbQ2jz5gAc99PPV8MojfcJvZS",
  "key19": "2xrja3Eh67QT6dqM9fUXk6PEhUMaoctmBTxP9UgekyTQCduZVgaJbDGXL6qEpk5EDoMyfGmiC7aBN5pYPZTjRqhk",
  "key20": "PjU9q6UmBh6zt7ZWLCTrZYoy7Yyhvv8qNoizy1RXcWZ4xwsbddzTGF72WmLt76Ce8GGsF41nKWzHNeDHdtBceUi",
  "key21": "55UPmbsghSpBWh8LgBxvEzWGAkTkSVD9RbD19qmhFpVD37PAf9dfgDqsWkA9aWWLM6ckuhEq4aW9R4arUyRrY7qL",
  "key22": "4bnxWRjQ1TySp2FgJ9vDjjegY8kibxW97co35UaS3yjLX2xS4E4nFD5fcxz8RMbhMFcHsKZDahZ1WrBQrEx7Q5un",
  "key23": "4i17qanD9RcHYjCcVkNj1CGbf2jxe1AWNUAaNy82esisdxDWYbCXJtJBUeLV9mvri7pR2bpeJLgefpHDph8hL5CQ",
  "key24": "5obAnvwcBvWwakfYgYruvJuCxUHRETPeUghfdcXxDSB8nzsWxtCyF3LS4js8P13mW4Z2ruQ2FCLBuCYNud35ts8i",
  "key25": "3JtZLvEaRqF5aBVdwW978tJdJrKpQscsvuWsMJSQEsRBsuBi9MubsvCwuQNVUqPAjWKzem9rsiguSLNkKNViqSJF",
  "key26": "MLRkhS25ZdgwH3eQqMRsEdNLaDPjt1LrUqmsjSYmu3kqjq9sZ6jWLdpdEwtPg9yhz6BkUnW7rBZ98eMu3w28QAA",
  "key27": "5hTyQxhscMSDkPq2fCQD4fmc6dW2Pg1Qgc193byEzhxqi68PsaWn5btbFdLh3aPdE7reFF7MpGDETzX9u9AB9YsJ",
  "key28": "3rdAFfPLMgonaQK19KK6UVkYHpfS9KZXtGQJPwMa5w1i2uA9xUUQFvAJ6VreWCVPMSZEwuixctsGyDvaoyvDW45M",
  "key29": "45tn8BN9waY1tK5cDVG692S5y16GGHs99oYM5a86m7Gp5NdMFVSVdjGtZxetZQxQ7P6oGCyvVibkVA21cetWheRM",
  "key30": "4mVE12KCyeGZz1RTppUT2dPWGLpX4b3sEQ11WxhouWJ1QVshG4iRf4Vqe6RE3M3EYsWgp3dod51APfbFvjepCjZm",
  "key31": "4yoYCjEJPDwzgCRxddJBzj3PFnFpFzpNBdG6QpksXdgMCLDgmiMJiA54Lm6BCDmVM8eS4F4GtdqfVPfoYSoZTDoH",
  "key32": "4HPDy8s7z7v9PrCMSWDataeYvwFKGFxnqyzC9R3sGj6jRdvNtcQWdvJyTBMTqy2sDQRgji71rgn2XS9YuWXNkveR",
  "key33": "3cpE1cepcdrsLnjKYTphMmAwi31udBDuureexZrvFt2bagURucCeTczjr5PE7iHPoZ8c5JgcXM3pRvG6oojToThj",
  "key34": "4EH5kzZazoVnW2nhPecabDBWYSLWBcQYACSYXKRMPooDYyEJ4fgW1Q45doBzGRT66XihPpeykho7bU4FCrKjsRvz",
  "key35": "5zeRsx9Pg48M4XpJUrc1XGjz5vYNayFeFgxsTWWkZxkkrq3b3WSnypFoJsKPx2mVCQL8gqoPT1VmXM84XZeYqHH5",
  "key36": "ytVn9XYDTe5yqvaNtiqM3FZYiPAP4GhmeT7xknbV5Ybe1bj7b3h9Qa7FCEEqfmDi2jaKmBV6vSS5MwYKuyVXJef"
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
