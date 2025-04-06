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
    "2nVt8LHYFoLx8v7nTyn4KMwVYD9QDAEiZ1iEif2MV85DL21H6Rof5NZhD4mbAdYMebc8eNLp7wgP28ZvQ85rzmPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BJ8Asqg5HZU5e1TUkqCyRi5eJEta8hPZ2pEb2kwssY6kyLKgDxwvcS78Y4LcmcjpNQ61qqAQc7k4rJkAXdESYnb",
  "key1": "kU6JPoxhSST15fGmgJ2f4hztUcAwPfGhZjWMZ1ZynKsSfXegFkzKRoMnKdxMx7DrwFhyXK5H13pF9TnKWc5kzLx",
  "key2": "2U5xMBwUU1rVZaV8bLm4sEUvHYLQqvt9G83JseEu7hSTNfCLCbP1JHobyWCakcjMYqkaFVDttV58NbVi9sAqqSAX",
  "key3": "4hhp5iRg6gyaTnS1FzVJ2AuwCHy33M9qKQqBwBcr2DJEcVNp1rV5NWfGMQP2BqW3U12dheq7XWtq5gTAwr9TFJop",
  "key4": "5X6znWmk7LnCmbHeytsQcysbWKwzzPmMKYLFtWcCVetFk1C7Hc7NTecyJk5U56Mj3z5R9v63ovbkkFPRohkEX9Ec",
  "key5": "5THGmNCWs2YKgNePTNfnjoH6X5pMERXKpcH8fD3gvyjWntRtqLxEzefu1itz9rX9xrTtXX5zWCgCrzPrQ7fzf37",
  "key6": "22GkgKo7StFaB8yqeDvaiPfdioE2HDH3LEMHTov1KSmKwSPDo7p3nyUGpf3NNZENbsJEsvrGwsZJAbo6wqA3W8tg",
  "key7": "61ivooEE9qiRsh455usSrwJuedEyF5exA1dNEmPh5vtjbmkWDoixximBfhKAubtepzsau5FPfqx43dFYcDZGukqM",
  "key8": "nDYC7HFb4YxApMTh6eiCE29QjiCXTUM7LGNTr3yuTX25RB5br8QR8XaTMgWayoY42qezgepCuhzg3YCKAoa6sT8",
  "key9": "5Cnd5qvGwACBqBB5fFm6wkTFC6ASDJnaGbbHa2jwuvH4P1JDe2jUoRFj7kmosr51eWs7VKtrhvR4bKJtUqr1GD3D",
  "key10": "5vy79STPCTqASqwwSxRgyDYF38PSVRoVhvk6wTg7v4Yghwc8dS7pDrL3EDzU2GSVz4GXaQM4UTmvXogXcroH8UqV",
  "key11": "4gEnHY6r7Ez1Zpn2GdmhS1t6MGYEWnRXwjrUY2PDQcHYqtv2MPc6RSmkiwyHnZM7LPZa5zUWwkqkiQBkXBxKj93j",
  "key12": "4f74g2P6F6crdUzf5REqLFLi1s2tzdrFKyZBHamu8jxqzgcxvPhc35cFyiMoRFXhiUPWb7hZxMLZFkYvh3qruF2q",
  "key13": "5mFaXwZzwH5AwR5uR7KmDDgpSHfBAcrSTfrLvBEEDknRwdRsCmPFjoQEmJNN6x9sFjshQy4tXXTsHoikCWqw3i56",
  "key14": "5zPtUSAnDzirHhBF8Sga9o3oHbUPtWKSjRMjtRrCnUbMwTJxkjJtDpS6QskKCmvqfnG26eV7a2yQfp9qpf1WZmkH",
  "key15": "5gSEEBNZHTUZpSjdzbYnHPZwC82AsTmgZL8CZXzWqcsWNwKcDF8RJUAinmvaN3cmdumaZJAMVC4wUSepESjWnQGh",
  "key16": "DyD9ToCPzTnUa5rNQ4T8Nt3qxz5rKHkADad74pdP6nrhHXEe6XLgS3JhQWwdBdS714MUSN6RHxH7UXMYwpRg6u5",
  "key17": "5KwxZudk4eNW5fncTV69S8252fvfUAWmdobAGE4xTvvq8bR6GNo5Se7NPyr4L5MQ5svX6Nf818amRApK5vwmxCms",
  "key18": "SZeUR2argDC6cNXRUk1iws9sBUboSDwTVCGV3khrNds3vhv6hVGTN1CwLwwYFH4NogdQCzbz3NpBd8HsoHFc4Uj",
  "key19": "3wa2ypR3sfm3yxnvsy7K86MQuMMVuY3Jtwje1GKRtDSc4LaTA6KhnGynoiFzvvSTP52ujjGPnZGr12PL7G4DubqX",
  "key20": "3Fm8v7xMSeG1tSVA9uv7QJSppgbCq2CV3PAy5kgydRG6uqThCxkU8DiYz7un8AhEKp2F2uPaGSBWpwnJjFwvUQC3",
  "key21": "5GHjRNwk5mnRUFryGXDjLUHnmRDcYNhSKv3sC27A8te7N28iYy7L3UuNSSZ3GRbcv37tAascmHFdoQ1eo7xiuWyN",
  "key22": "NGtMzDDY9HM937cmeRo3mG2ma5VWS1w7fb4MKZgq5yEmYUJAnTEi5KHLk3h7WLyTVVvakLwtD36R4QPT8E2PRBy",
  "key23": "4tE4BFYEhaVFa9cXLGoNK2CtPoEYE3U8wnWi6nDFUopQTfSAtyTRj1dzVXjH1MxvbzvYjAtrShH7FrEfqXVnXDR4",
  "key24": "jbvBNapQRbhCr2B822T9ie77xCRN3VNQTvbRnCU5etSoeqhbrMn9JCaTVUhPaDVMbSW4DtkqAGZs9mrRKQX7zsJ",
  "key25": "56hMQ7b79aSXYe7qPRRnycKbyydecY27wTBRP8Ln8wMv8DcFppwrmcE5ndrErz4mQgEeX6mPuEdCgjseSvL8NpqM",
  "key26": "5BGQ85Wm9AudnrZ8sJa5gMEwj9BEniqvxb678LxXfaSSwRSk9m2FSCzezxrCjutAfZto9qoYXwedCne1MEyQG9zz",
  "key27": "2LYVua4RcT3M4q7RAQcwywPNktCszENZ7LAEJxtvEp33k6feuNrWDSG94mdTZKBiQhHq24eEHToWUrdh7gVexv3F",
  "key28": "2M3qkNn2riPsN93WkRn3T2aZ3EumdtCfF7hmonLFKCGYJ2EKhpxRCsp8VnDjPbyf5Phzv3hY6E7EkmNw9Yh3zTGV",
  "key29": "3FQTW77exqzVT8C62fAqs2ijQsXFBpusGBiHHhsgMQfVnXysYFAMkhV2zsnsD3xf2MSoaW8GBVmLN2ZLZmR9BYhn",
  "key30": "2kADcMCUgpDmvotAFWDBgRr392wJc77rwFFHD3cTdVJcKch157j61hViLUDNsXQQT2H6UAS7YxW8CuULTBS87Mpw",
  "key31": "Pk958QiMcxtgwotZiCadZEJJDpw7HaMii6Q47k4vuptaARegTvb27gpCBt7bghLFhHXpZfVpYAvUYDMEPi5GAGF",
  "key32": "4hySbaKc4az2FX2BeBkyv4bapUTpJ2ZV8LASC3rZPSyp4UyFVhwdq7XqtjpmEb6BfvAQDPohJecdsXuEWsS3o7jW",
  "key33": "5Hcq8BtKgEHnQ8Dmj55LuTveZqSq7FCU7sB3kkRGb7Ek7xPvUDQgxXKB6ELuzjwU7KB21egts3ZV2BCiASU5BDMj",
  "key34": "2iUcW8gRaBeUj4dSybjpgveWVrShtRrpTqwG1BBbXkVVFaFhRakiWPU4F7sMBemJ5zEXafgULpNYbHBHosT1qMDC",
  "key35": "593AWYoamTy94JctNvehNPio9GZcPZhJokHTtAbv5UbuZGwJWcQYLH3YY2PmpZxvQ5TNQgQHKGSR5Si2X6SCJTWz",
  "key36": "35obZbJgMwDHgCSzXiMFwPmWh3DWeioMV4f9VSApuHxm4iQxcfSxeqd7YHb11Bwp3Xa7SKd1H2cx8dA3FvofotbY",
  "key37": "ncrkjCWKsx6Q18xtLPjFmDmMVjq8izzeukoMKwNVyHjoSLeZ5ut9nvQffn4ZxtTXrVoJwzoi37LJrXxZNxdjjEN",
  "key38": "3HZLvxjrE7Zpkkft9i3PMPNNvEehagNbnJCbT7mE3HoYuX7kafNo2j2NWuYE6mPCtgY3umhBUjcU3LyJ766J9iga",
  "key39": "2mEL7cqWDY7CjaQ6STGr4M6SnHY2YmoJVgZVWknQgdqciiiVUGQxpKexZ4XxXAZAHZqKTUZvfEVhyfu2L7JokaPy",
  "key40": "5D8tVCmjLJJqtAWjtqde2Jm6cTYDx6JCWRv13vfXR5X3KE32f5bG9A3gs6WMcfShsbfcGyfMvuDDkGnAiSfGLddd",
  "key41": "4YMptjgUySWKQr5tGZvdTej39MKXjXgBndjp63feMTmTsoJy44cBma5QNF76zjYGj3A7Gk6TEJK2pdsFq6oQvnXC"
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
