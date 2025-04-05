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
    "2j9KJCDfC11cCe5kQCSwGfwxyc2u2x36kTtu3yjreVusX74q9Av7rPASwiTwfqyKp2t5oLmeHrrSJNzQw3zpXxQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxWddyHyWgCfSmjncbnsbLr3z8kdWmusCxgpZoeuzvGSvgm4qDLeVTNVmsMj2A9m5inm4omvUUnBeeKgHZxWCJq",
  "key1": "28bKBQjx8qdV41fDCfza1CHtaCBCfQ9cDhe3sVXjz35JqRMT19LzKoo7fWt4PrZy5W9SaZ87uR9TaKE9MjLMpTph",
  "key2": "627zxTgptaQnbrF368tadstjFGSCGzDRvejBKrNLBeRaRS5Sea7qJrkC4opDe4vDgu1MYVeEXLzn11Zw5hxDQi2C",
  "key3": "tsk55VYoqB4B5X9dFEvBDZfJq1A6aumqsuSkpGuvthzVJWeP3mEU1QsLZ5PMUuEi3Nyuc44SBPDxqK5iJ8WSQ9Z",
  "key4": "22EviRX3Pn6fXxGH5mmA1Gt1xWQgCE2FAzmsv4vFoELzBrZyZQ6ymx3YBGSt6QkTNeSyjUqNyanmMVTVpxnJd1xq",
  "key5": "29cGSXSX5HPfxqxg2j5W8hJgH44Naw9VRm7Vadqn4JTNRY5FrpjbrELorZwegBmBVQ37wDHxk12U7xCoSGMLSHin",
  "key6": "2xTdSMrb6XcCXc3yASMJ9k9kQLZQAJSvpLn4rjds2uHiFq9ioMxLNBMT4aVGKjyFKfeeeSXniL6ZARWd4WGmpJYy",
  "key7": "XG4VExLh2DmgUWWK5v39SpqCnXi5BXQSHFS9n6bMgn7dRauaz3L9QRrYeLDc46cBzA6pqf3XwXdaHhdEHx2oTXx",
  "key8": "2NL6tCWMDjw6xba7qDbjcH9EDiFYwqysUkSihcD3UiYESe4SMSeXUuR5VpRJxixiU7SYMSkGmH9gCq5cdXaGJsEC",
  "key9": "2SzJDos4Pkp6SKyJecKwm1tMyCcC5FQjtCwBoUBuLdwxmiGG5Qm4Wvy4vpJPu1NnYdVmK35cFeHbYQ6sCmibo6iK",
  "key10": "4qQAY7nS2wxJUeHbDRJXPSXdVDn6FGgG8pLtRaZddrYuaoCzLJK3YvskKJEZaU4yhVTa2wbPfLzWLR4F2daY8rjx",
  "key11": "57L1nYrmjCwmWFAqtKANab5DnB19PCXqGU6kNR2hLmn4eYmmQCm81ZNBQDjQk5sn8f5eyUxC9qrCEkhimJrFFyrP",
  "key12": "5P42aHHPGbDrzKKxymAWL4p5sJ7AsVrnZqESnf14EbhzKHd5WcXBR3mv3oRt1tQZ6Wnv4ZrSvEmWqrDZT8qTg2Sw",
  "key13": "5PzgQAs3wXhnjFGJEcBJiKcNKgmLeDfNGU6ihv69vK7a4ifwYbiHSvigqqQw9vdRzpWmgZEPe1fH2ur1GegmZWR6",
  "key14": "3Xs1vb4FTPLvBMBhZrSXnXSe6VUQD2VbBoyNDZoFBr257ipp47bUKBmgyKqhLfLbXvZxZBdhzQdFd1Pt3JEbc5DL",
  "key15": "5ms7LEgbc9TXNHKqoPjeADRFHt1JT4QLAqTtomaQQdAPZiY8eo5DVtYZfn1t3s8HXYW1E7vF19m8YPDarkDVEEiE",
  "key16": "2YdSTKDzgdjNn4PmBaVjVokjWXTmNw1QJ5tW36N6SistN4iUNQfaMmBMBYa21JDn8RhivAM1Nc7aKV6jVwmka1cc",
  "key17": "2XkcnsAuWTWw5Tfkxgn7UuykzXmqW65QV7aqAzz5754bjVsmDdaSmzaKerzqkmaEUJPWSpefkbeii9k6xoffWhSB",
  "key18": "5JCL2LfVHyFpLYuHxU21fShYukdQQUxaBVbzL71qWm2fc2QivvWmuaqbvkZhPreVHoX4d6nSRjyfeywYFyPgqss9",
  "key19": "3qs1NZLCcmxKn9oKuHu7fVjf3eVN2hSiQppGcA9r6PtQVGuiM49kuF5Yz6YXzzwhFj1S1LKFN7YUSVHNsHH2UreK",
  "key20": "2KfXDF536eAsfn4ue7xU2rHgoXAYx9XuD4MDbdkt3HaGRAusbonzhFyDLi6ZzgbFt7b5hkcoFwvddSpE2thUAYs4",
  "key21": "58dTmAVzhCm78Ut2PXKgreBQ4mjsSYbwnXWtzCBb36pzuM9nwmEcwHNFQAnEwjrjyy6sfGcTcaWh6Fd7EYFSFNgf",
  "key22": "5G33qKucZi5RxsVDQdwj2UxEuuN98yXfPjycqVzdBZYKbZwGvJybYmLoFiKEnHjb7k629KtEjjpKbjT21Gdxs8xn",
  "key23": "2xhPybqaqGEgjPmWqzoUx6HiDTyVbCT5Do2qb92JKkqhcKsyeviY8Avpr4ovkXj2SV1GcHFv1abs1hWVTrbDFY2J",
  "key24": "63hLs4YMWejrRUP9Q97XehCmE2KqDT7V6UCftEmBftDkLUMow2j6u8NRQccFnGHa5MG65ur5CezkuemYzp9LX75M",
  "key25": "5AUYM6XwKbBXXVgKfGptsaN6MjQ3wTnzsp4eNYqtr8sHCnN6eLWwmCpFNuWJHA8S1EeYRVR7W126brnPnWxmRd3W",
  "key26": "4KQMtnEQuuMtEqQsKzsPkEf3jMFiDdi6caxRmQFDo5dgajgMGjXwsxGrvFSZ2vNV7ifHniE7XZ3DCwFDR15xcpqy",
  "key27": "5xfWdKKtJEjvd8eFtmSrPwniCqzYzQkpiJLLMrBmyM3EVqkEE9XSyY1bgEmMwbvHHiaJMi164XykjgyZyrqbDhjV",
  "key28": "2YHE2Z1NUk3DdAh16YZio1Bp83hH2SfHHmEPxLAGHVTWeuTwdB3pSh5wsJJQWuzUoHrVfysxEwPBToMJmbxSubYf",
  "key29": "67J472q8HSM6KHJ91eQ7CQ96MX5teQAPaysN3sKDbcQVZCqa6n9Fc5VHN3m9AoGsEi8YWFgsLqV27p6kq8guejY8",
  "key30": "4sj9pjXn8RJveZK8n5uKUcMCSLggfs7y1jFUoTsBBzubpVKdqwdJTpHTq9JqvF4xvHeusqDwhohvmy91FJpazCGY",
  "key31": "57FTTLnDsWfuRXyedegkrxt5L2mofcQEBKHP6DFnetzG5sJi6G6QPiQBSGSRsBbtT7sgAcCke87Ndzq8FQoATmmA",
  "key32": "2LmQUbkySY3fhTuxUrfLbkxi26AMxxgeT5k8kvmKBqDYVFXWeUAzYBsDFb4xcvkdVU7XyALiU7s41cLLfq9BzDfh",
  "key33": "4DbRWDdusEUyxXua9rTmpS2WQkwa3Ub9vD6PnRHjBkywnKBEKsqdsUePW8BJVFdDM9R9vaYuR5PHouNCuE4nCLTf",
  "key34": "22765MX9Dnn4rJJqihXnt3HwS7bzS9tvUSVBxjJ51tPx22pRb2cJZZH2nHCFmYCTfroXuiAo9mAMo3YWGLPGwaJr",
  "key35": "xAwcbtC4tPKGty3iquJEy1zd2VKBVfb4UunkHMeY7geVN5yTav65VishjdsGoSxXjCzaRLts7yHUcG5T6oZ81mH",
  "key36": "344yAyy5RDF9fW25CTxrhV9Fui66cTxXSoHF6Gs9dR34j46oZwCB1NZFokaQFYbb4HSKLaX2QurTHso7GidfTMox",
  "key37": "5GGX3ZsiHURw6rFGSDRRinfbiC6X4zzUJajKCjdbsEZDExPyEUwPUoN7TFk3aWpzJGaGSagK8xBwT4wrLJLsqMns",
  "key38": "66cgYa76EKWgMyudefJPL7zCx7VH9Zgcn9fDjzeJMNGxQ3AY2yJA6jwkc5Kai77tsFU3j7w4Nx6UNv8MKgkyzqEt",
  "key39": "2iLsKDwFU8Shk8tqsvRruoAtyYtGEWVaSVXpKkHE71BagGonoWa6xUH9hHU1nYL2tp6H51GdSfQHS3sSAmEhqtHx",
  "key40": "2ef81nYeygMGCFvUjsFvu443MdBDFzegbtiLFiZsqCpaKspnQRLq4qoD3wVUG9Z7NbkWg2c3kW9NKqKGdWAPzBaQ",
  "key41": "Y8BqkSHYTVR6n1yvGtBgN7NbJXu82tvbwedPbgCGn6XhYWT54E3sXw9PN99HAywHCSh9iT8fEgip2ngwdSLt7Zy",
  "key42": "58a1HLGmmxBgq3VxigfGs5dKktnAa1stXpvMvvDU4UUxnYH54x6CF7NNLLbzvvPCjDnGra5kKxDe3cjeSE4PpnQC",
  "key43": "j54ZP6o3KF8wDgkYJr7GCdVeXufoSMJ7RvWxCuKQY3UtH2UBsKCxRXBtKNGDsCj8V7VLAKiK9FNMW2AA4QYUx95"
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
