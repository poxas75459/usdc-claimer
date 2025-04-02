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
    "21ug2G6JE6i3Jd5ZtXGckTEezLsjjSJ7FaWcCQJi6WwjoYnyAzembq9bZUC5C8oTKYG7FD69kbrCRebCp5yeemus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UV7Uy38LqdrLjSyzLVoJ2SDj53CyiYNovMT3wpnhQizWrv4AXAum9gC7WCiwknyhZunu8ETZBxrjdasgh9FK1Ds",
  "key1": "5pU78YgzyPnq6qXf6aFcRuRV2r1kj9j1XAkWGmkWnBKak7Bj55452i5Y41MR7WHV7hUHx5paH8y1vcWEamPbXb6R",
  "key2": "67NqWTzpbrXQEs45dZXANQ5KLVCADv6ZgZ1K7ECerCFMpBpgwNKucAZbH7CqRuxPc64SvmEug57LEoyGufXXerhV",
  "key3": "24EeEToRnQB7WW3s1Gkpe9MREA6XtfCXwh2GbZ9iZhbc6nMUMD6GoQYsdQgFvDWE2AjbqzBN3BwbXVffeNSYBMxU",
  "key4": "3pTsATmvHQ1ah64GgGHAVrVyP1DjChAceGZ6VHVsXGLUMRGjQtQcpWfj49y5UEu2xPFCzPPRExdc1jiKQ9NM2irA",
  "key5": "2s3nWBnAKwSjcc3AfuQMc9aJJxxKnn6AJCw6v98n8gnPPTVVbwZdEjJ2FrVw3YUSXYSaN3Ee3wBhCb3xhkVMJZUq",
  "key6": "2F3gbVNFrTUTu2VCYej8Ka7rL9F1547gad6ypxj9R4nMiyqbsZxb5s6cBJA9cSFFjMW7WA4navN9ZBWAMScYHUCJ",
  "key7": "2SbhwNJFRxrHRipW8uUNAGQiBCMet2CfN8EaEU1L91vLRMHAbeXEm6q2rRwmHqQorS4hFTVDfkuJmoU1NQKNo6Pm",
  "key8": "5TNV1F8DgLicX6mcLMDmsqifo3W8LDLDaZtPoSsLtL6PFhx9mJFmfQb8qu3bi8NvYaevddgKHojey2o4FGK7i8VF",
  "key9": "4EhWJbp41t2pwPcmJ1cnVGxLX24sCnx6ZBRSzUozSh2n3xwD4Y7GHFp3zWpALfXF93SfDi3TGyEawr4Du3m5fBp4",
  "key10": "25CYGHqrtqW6w9rb6X9Jh83RHAqFHnWHDcWbzPTkpaj3ePFvgydLD2gC4zNHVqAzmuQPqg6RWVuACLqbyAiK1pF3",
  "key11": "31ZjEn4E7vkgSh5y8Uj9heo8d61AE8rV6JLRstUhyoJHM6VMzHGYpjjoLRQPTn2UA5YqeXh7ESNQFcUywCxJbmFo",
  "key12": "4DF2U2TsKTRBzUhEFync22wDBYemhNkk2QYMFzDYLfHn5nNWBVzVYqBaCRC2Ep47aXWg6eDw5tpdacNb1GNxFJxJ",
  "key13": "Sk4ekzjsEMxXnR3tx7TKeKyoterw8wGQwbHj6ViifvZ1vkmSZiV8r2w6m9YzwK3ntqneXWxs8scLUNGzZYFXeB9",
  "key14": "AJcXQWe8BXZkk7zsw6X5fY37DNC9HCCCQqWu2hXbmL3QE5SzzDvLLHsBAmaGs8FtKdJ5rDk7HS511CG3yUnLz1J",
  "key15": "44FJT1Hd99P56zkw3NvMAUZHzhixftvJmYaUFAP3EJEGFsuoUMCKPFicAUtn9nGPbB6ubNknMcdwUKj64zQHkyza",
  "key16": "4SaXC3vUqWswvq4tLT6q4LGAcezJX8W6gDmGfk8Fg7SiTwAGPYcowhzEydNuujzQmkygjzGgKfy1EPZsyWp3Xa75",
  "key17": "29eu7b91MR32WMfi6WUNh6SwTXTYfRgoS5n7JZKfjHSHVKKc4A875ZeU5iuNZ9YMQXtNPyUDSp2kiHGBMJEwchx1",
  "key18": "yMmyRNFPDDH9wxhzgdoZEMGQ8amcxr9Y4EBR2o3XpJH4WYGCtZdF2iP9w3FpyGh6pbQkiz28vTQrTMPhNf4wMFh",
  "key19": "4UsUym8yxaD5rvGBt3hejAh9ga6Rvc3Q8tRd7mKVhffKScQgUc91Qy8unBMJjB6C572sbwfxPt8BcSGHZUHxCSPv",
  "key20": "59P8tJhGXmgoTNnWj7ADfZ9Lk11shbQP4MdXsDf4kR35b16oW4WeeVFVoRFTNs9zL75ffhj6rV9ypEeap8qE4NvB",
  "key21": "5HykPfTHWde1m4rgoF21jAKeZ7FJsiKHe7YNWYmZT7NgqZfMtX4Div2KxnhKeZSRScmTWdfAVW9FEaExh7qzzoeX",
  "key22": "5vX6VVwH7B9F7Rbp1GxDPmWB18yc4BAev6AYdgHaw2GCkiCcUWuhzQ5oiRHXH4eZdspqiU3WEUtaiAC8tByiejxP",
  "key23": "58oFRyPiiTTTKVL7TN9jymu8sniDiXBbWZXCwvTwCHTDF6WGdJ9RMyCy14Hsr8hdETFp2VrmyXjujyzQSLzTEPwq",
  "key24": "2T8y41LfHnjc4YpWqH21WPg2dz8T3fqagq31MVVQaMYheX4vWC4QWipB5PrwgQTKrfGBCP1vGRxKJWmg6gxbxKee",
  "key25": "2QUYZYom1zRUAwXdGGRuPRd9gWuFY3NpdEVGiDLzAMqo84TCN5LuWVM2y3KB8PLhVLsB8z4E7PwuzbLwCue7dLes",
  "key26": "TtjzLXbTc4hhcBEAr3AJQbxaymQ7aJDgkU8s228haaFG2or9yq5hKVGzrGDX5THvFMeYSvbL6RMA8ZhFtUcrJMj",
  "key27": "5hwSinCLmapK9ySGgjhB98hF9v4pigNVvimrQgM4mDkWqpYMqWEZc6QqsWQVCepsFUnW6FmHGur75gEzVvaDi3WH",
  "key28": "AQve7g6PGwiwnVee8zU2i5QWxgeqkZgUHRn6c8sV9dGLdPE9Vb3KNaiwnAqqSMBkQD8mD3J4HRvvMHgLrxJnQXN",
  "key29": "4PaC4G1UPG2NKPH8oCX7cSPieoFYbGa9NV9KH3wgcjCmHZ6AjbtosrT2wXrm6vNukP9mkp7ajSc2DdCMBM3ETdMZ",
  "key30": "24nibESmTBgZwszMJLv3sm2Y5xMjaveDinKZsoXUHkwNWdzgr9ikG9BUUM8PCsgAs3A3JXYKW8zNoKBYmqEo89sR",
  "key31": "5cuURAGHNnmNthD37f9P9Reoyg6dtGSg8EewgSuvgya8LgNBs2jFN8DSzTuuQdeRinS45Q8TpszijK7TSWtRtsB1",
  "key32": "ZpSi32iSdxMd6zcb1tAKRBTVrfkjXxUwND2kFGEgk6W7NcsBm5kLDnEG8aDqnvZuR1B8vG7KvBeiTDR9VaXAjRA",
  "key33": "4bidhwcJV6THW7zWwhgdPbRiQjHfmY7HWrMSt3UtoGst68PPXTy5jxdwVcDDh8n1h5AnC7F9Z6jpjRmpE2m5XUnY"
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
