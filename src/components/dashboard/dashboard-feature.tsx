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
    "2Td7TyynYmdkGcTGjqr72T1BT2NTYfVYUW5ft2M8odh6Gyfb2TE31ze2oCkfhSDDoP3Z6kvA8BTDMX85y79BwtzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDUERnEfcPE6tCZbLeEN6fiNjojvxooSKaFDRSUVvXQhfiuH5c4RNgzbNecE9DrAGAXK3Htres5pi5JTUxq6GuC",
  "key1": "5wFwMNHbgVvkvxkHHhg5yknvWp3rCQBZdB9nD4HVKxPsnahb9o8rA5thT3mD2TUNKJ3xec2ZcoT9psZEfN4PBSVC",
  "key2": "3N4wCRpxv8mm6vvSLw9AhsrAFXZSwW54EJz58KJ8gCmMt1YwQx9veBDKujxPw9Kr45APTRwPiTxsPVvLpF5kbQij",
  "key3": "37ztZcn5xsocM4ddFtz4gnZZ2z34fjqSKSeKQx2uUkzwu1kve1qryNh6sLm6NEWmnX3cNQMWKsbDLwtqJhDVMrYz",
  "key4": "2gHjm32FTF9RbGYUomW4EuWwFWYABeS9CF7jtugPL2EZUafFmFN4V5WDxVX52UfTcUp7iZY6AFqSss3tGQA4YWvN",
  "key5": "S18QAEHhPvxTWwvujrK6L93aFF9h9gkG8fB5qdm2g6TV5na4eL48wwH3oATomZcFPSFF1Q3Ug5rV8dJ7daAANuh",
  "key6": "B1cxhupac3pLkmeoqRdk6TFaLzMEBg2LVLLdZnLvb7B8ud2Ugc4MinfvLLgS8mvjB2a4WuvkUTqD3Yw4WtfAAf2",
  "key7": "3GoL2pdBijKyXZY7iWJiz3qLLAd3mAYRtxJdZVrDpgtSFJ7eGAQqaWpgdaWJWoQBGHu2wNgWPc12P881ytnBXzM9",
  "key8": "3aXkRsfbia6ZmwpbQHyRC8zL5m8z3wbKddB9PHywCxBenr6ZWMr7Watd6F4Wmc19s1aqp9FLPu932kwkTALM9k8L",
  "key9": "57a6gmqShhbqSxMR16wny4rYTy9J9ckukRpD6C88iHzWEoF2ZZ8CeAY88bHSLEY4MR9khv7WYjHaRV6eQME9HSTv",
  "key10": "nvVxQoZDKNC7r3WmF5k1fSzvqfbfGdoPjqoRZMdYCY5gPqszATrFZe7Q2YqkDdC4dvz7ZDoNckW7DtoNKyWtApA",
  "key11": "5oZYyJQu1RNgJ3EjmfKQsmnVn6gehB3tdBp6gEPjc4gV9qxxakvLgW8TnrdLCHX67kJ9ZdreJWgppVQ4H91huUL1",
  "key12": "2cjEjKENr4N1v5y4UysxXfs42fgVZHJNtAePQurun5f23BWUxBVhKbF9uaRSfZJxPHwDkqZcE5CS8uNKLcKvTh8Z",
  "key13": "4svAruiGfcVaYmvugeXW9ACUJD2UjsCp16cZv66Zpix8zyp9JxehGcKa92vDUKxVqbiRPvqpU3LiT1XvJgAQBE4H",
  "key14": "2THLt7zyuJnSYRPj3RSfCZfRAgvvBdc76LH4Upbh8KcXTWkYqP5FZBuikhbxZpFopTCkRpuJ6LhNhdAnfYmaaDCE",
  "key15": "FPHHXsAe3Z77qUxYK9QCrwsV3kNjy919UDzV2ZHtTqGyBvafYJ6aoNHY5XfCPsAH82NNQM7gk5PR7KRUdMMU8yW",
  "key16": "3AxXTMxUi9i4KTqqvoiJFTQoq5Ce516et3cZ2kuJwytGvugZmhKs6fpVbSjBfHyrEMmQA7wQ1jkSwMdPRRnFN9FG",
  "key17": "21t9eF2WMszRKsbVDqTb1uc91xZssqFgybqLtW9kPtNJj8rC3hk9fdz9JLZsSFctdFgtmxHN3VeQVhEEwrfzVGn5",
  "key18": "3VL2n2mo7cG8iYAVHqbd8FeRC69jLRNBVFKvwzQ4RRNDC9ph9KAR8YrvntMA7BoNeM95wQzmG1NPMY6k2pdHgKWU",
  "key19": "4jq99Vk41T3YugeKXBG92udNYDvTXBmNRxeTR962HyR1Cp4jfgsZxE3s7hWJjHaqKv1nPjGwVRo48pAaGV8SHKWP",
  "key20": "8Aa3twUpCy73eLQoNrb5txMD6kpUhARebqrRQ7i3WovXUSBWgf3XNFmRedVffAyvYEsAWxY6bDXr5kziKDw54jk",
  "key21": "3ZVy7x4LSjrLM8A6x2j8izkDB53zqUxb5r428hjLTnYrKGU4hjYhmuA1Ymp2VwbKWDAp8rNWEG9i5Jw8GzDNFz3T",
  "key22": "51ejFq5cMvwJn7KxQTFnWadNFNTgSM3iF9inTQ9sSjp8yR8VZySnHqMAfE6wHxzrgS2JXtbN5KzKtBn7JNF7fDus",
  "key23": "9e9HwCm1YSNB1UgneEeJhZGmKsopYrDFmqRRFpgRWB8R1d3jzPTYVgTMMigU9WTWoL8GW3Ef4Af2AjZupMQjjzW",
  "key24": "9x8peB5aFPD5nmkmfFv8aYGhQW8SkKvecwyZ26oD3zfYDCwfN88fNhtNVFj8HxWbA1ESQTgTm19ZSz5e1m1771J",
  "key25": "3VhjRr8cqHsQtMBGkkAqFpe2BmD4fY4QseLg94SWPNnhAFtikU2xZsHqw5aTdF3CBpP3pESFY8SvK5oJHrxWgp4Z",
  "key26": "51htD5eb9TykG1FbicK6CB1EHydy3ZcyL8ZyXPoLftaTSF1ZYZbJFSwmGbTKyJWeZSkoUAn9NNW98HAo7D2roFEN",
  "key27": "dZfJTdzFfBPBV8fpcytdyQymJ6PBph7HZPXMFwAhbV98poSFCx5P7MQZX7jy95jNTV5mmcQkHQMyeCAHJ7pc5B8",
  "key28": "55Y3mtXspFMjmvd7JgYx8ub2SFCrVzd7XupEPELdS5qU3HfRuBgHRGZkyPQb4MRk8FxzWQHqxjtaa3t2ComkGpuW",
  "key29": "2RHnGdhyin1SdtJSJt5bqvpDsELsHkkde3hSS2Vj8KtQmSFRFmVyr99sYh6X2BkcKjNj5USDGdHK6QdEFswUXSFg"
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
