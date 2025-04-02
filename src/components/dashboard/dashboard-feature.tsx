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
    "4y7uvBSRktKRGgc7Um8H7vBMeBqTLcbtPciiaRHEt7SwvcabXqmGLoKtLXuVN67jdDawgM1F7mK2xzChC1upQvRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1HK86c8FQcC2Vax6dmj9v35mUHJxPM3iotKYGpYDpp7meEHjLUZxKJdL1HQMvd9ixydC4mK1Ke45oVttdmF1JV",
  "key1": "4MFipC389ynCYNm4GWSi74nVaVtHjPNDFP7FjNLFxZrRbE9F9Ho9Z63QCEdrp9DfQPEFZSfC2Kj5sKG1Jg9PPEJW",
  "key2": "CX9kSkputc7HpHgoHHxWCkKdES24gdFw1rEW6KTy2jGfP9KeHaw5zREh5MS8WXosR8bPJeMt77UriY8GaZBBhTi",
  "key3": "4nEAHUvMssYs14QebavHz6CDPhKxDpuDXxkjehLmQNXMCrb8rmwzqqtHx5GSEKLmS75DeqtKhR7HYm2jtJiw71WU",
  "key4": "5RHEACW2KXyzZfXj9EJuTFAWxJCZnZgnSxfV9dgiZxiDnNEzyxFHE4Qo1FZybaTWXe8j95mGx9szJFSgRAnqZorX",
  "key5": "4iA7NP7DgfWaYTCAz1Q4BJhYnHTim6a1yjAk8mDwS55okm3dDGzwvFC7zv9yg8BujDVdpexrS6fCLtPKhenPr3oV",
  "key6": "4bScqw5u31zj2ADZeuPRaeNJjSyD4E562SJppn3QJfEZkfiZmLSZeLs18gdkhepsxr4PRqvX8z3pab9V2UaNdJ7r",
  "key7": "etiaSDmRpoLqrnRVtX3tS6xBUAE1raHKmckm8avcVAWTzMhJoGDxAom6LQwD1XuGsgBfCTXMpjAPfjjiaveL3ga",
  "key8": "coBx5a7fSWJMmNH5Butsz9o18dGAMCDTPjsCqSuJeyxu5JhKNosq7ZkVGBS7yPBdkFzM7CpUhUAvcaPu1XnQEoR",
  "key9": "3jk9h12ADCjKKuf86jNv5Ky1MPsjuk8NduG2f8rAaHri6eBzPVxYfsg6V3TSRx9W66od1nVKSFbGVfqwubnBhxf",
  "key10": "2Gmih7MTLmwwFrYuDEhxTQpJt6mVJYKiWvprLVwNaYqWYEx8gUK1cKsK2qivvxWjgyeEhw9UNXSVbdkASLCwhx6p",
  "key11": "sZSYfhMeXB6jjvGv2nwDJE8jK62EFFbsjegG4iYhytbuHA8KPg7ukmL1uF2yKknSDx2oy7AJd62cqgSqj3SHBxH",
  "key12": "3Ue9p2KmPX8cFT7Jyg6Mf2YjqxLeGRkEN45ApCLAUhzmjSMj2zjeBSrmdw7vHkhCEfehppNyZKt5euriUMKPi9b5",
  "key13": "377kaBGAHMNPPWCZbheCBHnKzYzkkYjvoYWV2i8eUwPqViRDLxgu5Yi2VdEyFmQMNCJG12bHo221vf6dQS6HBEKw",
  "key14": "2hSTzk5fW2GiG1bYGaRPzAzRWzYenmr6F6MS6T5eq2QYkqwxzbyTUy8exoGgWuo8VAtbL5XVrCRmheLUu3umHQz",
  "key15": "zTsjtXfb9VE6TbCNBy68G9D6pFur23XaMV5v1q5Vw1vP9rZPKgj5ZgKSMRX49ETbWY8c94eC7A8YVJsZuTFXTaS",
  "key16": "4u9RP2KDzog1swK9rYo52sGvLoHSagFCsXfVqiiQ2NxZzcjg3KLDcANBdeku9f7Zh73ktPjNEDnnouVk3rvSFPXQ",
  "key17": "4c76UPuZ4iUj8nZ8aN7KbA1rFhDjPYQEzVdo3NmjAuZBmwMsxucP2JMigbUazvsf8PyDZEQDk7NGHdsnbDXPtPuo",
  "key18": "yARV64s7XbsBW567q1gVxwVBCdpdACwB9uLm4w3Fdryu9yyLGgBd7WVBwzw8iJkKGzTzHC4tJSKnje9t3qdVeuG",
  "key19": "5mcSSyHKSuTKcEqSW7sdziE21zgNvXQN7KZDpsaYEvAULgn7qKKfjvHeQYRQs4ATFgZy772pKG3x9aC9SJmbu9PJ",
  "key20": "2oCbFcoe5kA5ty2v3tzPf9SZ2GEXPaFqgP5Ga9zSWzyNi8GoGiuDujiW4ypNkWWsf819AxG3yrvVtaZun3XDEmdp",
  "key21": "pnHA9haVKXsw5Dd59yPUsuLqSCi2yLURRhzeh1c5j74wagKkB8brcxxF9oZA6X3WY8xiYVPPt68WugXNzJifhnJ",
  "key22": "AfGwJcAHKUA9NUcsDsMgZP43GjcyP7jHMk8uswybM4LisWUiYPcmC6FPipwhbHZZ1bN2qQ3dJbTb53Yw9Zz9aGN",
  "key23": "45uC4fS1vz7mwUT4dfLemBHRsHWJSbqrz1JrV27bTLLLnXbyXGTeChLym2zMSg2SZwsgdKb9GGZhceo9nFgJ252Y",
  "key24": "4FEti7KRdbgjWRFvx4UiWUtXWeGq8AQQTYYBCf7GwxnLkmLBzF8WEvf74eg1s6wfcGBCfrKRsB2MCakagTKjp2gK",
  "key25": "gh2UhYSqa3hWmezLedYTp4fdH2VVKgJHajRCkaeEujRC6CAopC9t8HLiMDK1BAkZV1JZBckBAJS4DwkkgzgU2zR",
  "key26": "BjdRGK4Atg2WEGHxMAu8kh7djK2UG3okTXfFDiQxaZ7x68af41rTf5Eg946KYZaKtiBeXm8zSJr7jRf4ULhh8t8",
  "key27": "MCxzyjLv1FjX9W5kSEBV3DEVHSLaGrWV1Rndn6S7tqi2tmw5yuE8D6nRuzucCSb1PQ6VXBA3DK86MhNi7NjpuB1",
  "key28": "5kvBGeP6VRYH5f4Rs3YSwCLmmpHBfU5ueo6im9Xm5mY1YoSjHNSkknqRoNJoCLNujkYhEXKtcn33oHN5mVuL8xYt",
  "key29": "3vuv6LQdapSJAvxcwsePbvWakbcdo4Z13BNgGmig8zG5fRKoLP1DEhTMXECra5FKHXUxLaFUNicyaXh5v87adCb9",
  "key30": "2ZQzUn5nniDkCWMgbQQKEHtAycQQHiicPtFYhiW3pBCuFbVvzKMix6E2P8vWdsRQUd2urdu5sh9kaDpdDYWqcikG",
  "key31": "5VfdWKxjocAWduiGRthmc7M4UYMutek8sNHAcvruKNqLPg1Fs7GLndNeXQ2jHbzXzt7KsnwHsFmXyEG3ofg4TYDz",
  "key32": "QJjvzbkW6WiPFYqTePM5zYJiKjPY6C487sKvQMpkDWDB48UT7tmsrwyZUTR3joaboZ9jGTQ2CoCzaKacTmRuTUE",
  "key33": "8QTVWhkJ8SkqCnK3ANsh9JsnsBNjt5sYu11xCsMUxoYxJgpXHrSdoYqvUVd8sj3YtBiEMnuSpPf337f3JxQFseb",
  "key34": "2SHjBpDd6vJ1KMPW5nwGHGs9GdUvnWGyRRGqtC1AxQax4C77oLsNYmAMifjSpK3QkyKC5x8nnvXf8JiHBmypsZAA",
  "key35": "4UqY5GMZcS5TYoTrcUb2mMADvkH5KYyKECpdhXzNYudR176CxeTevLzjVPmNMTyP6ej6WDgQBvJJ3PytE49yr3DY",
  "key36": "4FbmJ4dV2HK5QXah1HZTA7iqWWBmbhBQar7nrZmRC3WLsV6yxwMjCxWfmD2jJJof39mFSTugsYVJK7togUBvCeDX",
  "key37": "2rTZArjqChqBVZiPP7cgSw7PSQ4wigJqQEdif651EWRCrmefNKdSG1f7wBj3Ev3h8ZWjwo1je5sQfRoqU2AVMvii",
  "key38": "wmgUMZx3aNwmbF6fp8EGAfjfTdMysu9U66yBWeabUvAgVv6nkESaMdy5kU6ed32m3BmutQPPKPTv3ctVvnVJRYF"
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
