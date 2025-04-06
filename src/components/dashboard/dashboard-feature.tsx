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
    "2XZZdRKGSAMS8CAfAKACQUT6hYnF4zpRi4F1CBdWthfxVrBy1Tqv2sYYKk3mtM2MkQqLv7aB2oXVpkwsnYXAfF7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQsZ1a7TSf9nET9hXZ8dwG7dBBvZkTFroxGDwsrFLvYRP4mViaam32pGqjuUamKmQMTKSUi9xCXKMJBq5RmdqCC",
  "key1": "373KvAJMNptnkqk4Fk1rT5j3xKkaWEbVopoG1VytYATBXSB4Fad3UGokibjDLB3z61QLeZGLQoTrES7J9kr7kQVu",
  "key2": "5Bz9NxUk71VhDtTe24jRdukQARk4pqQigF4qgmymNwnpCUvaaxUJJfmbkHZFVPo611jAVo1oefQUxr5zbZAS3d59",
  "key3": "2aAxmeeuBW8X5MhmWKyNpKr85ufJo8a8RCAS8UgQH3CBNRxyVZ8V4WqGZzQqA6urkCh6DfMyN1RsCA29dRsEJKjK",
  "key4": "2csAkRv6FzUcbiWtJLb6xB8sWGpcs1LC1YHUhb4jbNL9ds84Zc44TADYyJcVL7fFws3vjD43pgfta8E3tModLi24",
  "key5": "XbjfoKjKhfLBPNw4KdugcD2LD7DqFQ6NUxim4Qd5GVCogCU1Ck9gF4VpiS8fRRN4hi72qSUwVeVw81pviWc7DcL",
  "key6": "5b8wHgKXVGK9xQ4v1z4M7VK3GREpxD2KAQ5jjRyGyW7y7FqVWDcpPfCEbNuW7F1H4SNDhg1yDhVb7micoSPCZWrZ",
  "key7": "47EhkiYNFUrAjD8712rvpRfuKxd3fMBx7u78wbgyVvTNTJRdNjtYTp88jrZWMxEiJEgB9pRCs4o7dScWxi4A1uxE",
  "key8": "tmBbU6kLPURW1vhFoB7kY526s5dYspUkaouc8ZNBMLJzz6AT6htXQ63B6kfqNVdetbtdK2DAqeL5Pi2kbc3nhTh",
  "key9": "5ahYGB5MgMEYcwUhXm3baZv45SMxJPu4oPCAxPsAGjkk1SEdQYJv6Gkpb269U7tG9e1rTKgnp9jb6C2axR1sfLwN",
  "key10": "4ecUj2KhmbGNqHcgyrfUc4dCNVAqGM7aW3fdd6irm7L8oB9XsQ2JNynnHaQr5cK8jhnfjjbReDvHzE9ow8Q3YH8W",
  "key11": "3u8fkWWdHyeGrut6QesCS2SJzZ7qcLmLvB1cESjaSMNijGRppceiFGTNc48S4zxGLufmizy9KdfD914LyZMznshD",
  "key12": "fa12fWDFazsxHnwcdhjVofSuHGoVFCZdxHQosLLi57R1HDbqwvUeosbbEDtrpU57ySHuM6vfLYjBuMP9PoVK56H",
  "key13": "43XdvP57eWe9bGZ31zmoLmTF2eLeyDmYQJSdWriwgng5P37yUJRVPo9gP5CHZxjh7BKJACmggew2XTA9x1y3dbfy",
  "key14": "2hrxdGUEWBsXUGiPGcYaxvjrSLwnCnKKyEp4i5VSP2XLQUsRE9Scu3VGytcJgbeGzoKzPTenHzrhkeSZZ3RpT83D",
  "key15": "3XPqjVZTmrUFgvArodyDAXtyxCrzRp7TyQzchgq5CN9gNgrhxRRKajRKoHGNbKTUr1vHtvg4bcoDnUBsb6Aqdbqc",
  "key16": "4m6cr6mZ8VKLCpkuXQKLGL9Uk3zLmYrE4WpmFd6WKndVq9xnWGW143at2mGNGBKLy7hmtM9Aq9SqvNJNs21YpRXj",
  "key17": "3AqYuiZcSxQaqXzG9UGcCwgVXcmdtY6afn6Es5bmp9tx4uTpQJfdNubQ3wG3mCEmE88QhKTu4KdW5s1QuJpdJpRc",
  "key18": "3ZqGsp2zR5K4hDZBcgYNUeEmyJrddvSNCxvhnWmha4jdNhhgYta7YJxgn2nzR6apyTQ5QtAVnQU4b8gbYvZrVVdh",
  "key19": "2FiFuuK8tPUHoRU1Qm9YREmUG3pAYWHnu445QBuWyoBfkVBe3WBBRHQ2pAGhm3eYsiDCVk23rTBviQaxGBnFaNnn",
  "key20": "2Yx455prQByZwmCDeEVSwiZTXk7NPDnQkvXp8vyEYD53RbFnn9o8RW38EkURVBJeLTnbaL3Hgd7R6nYwCEjehjYb",
  "key21": "5V9nMJhaYkuprt2ujyWbqp3cEothN2KqaDWHRJ28rKjcd5Z7MkGMMENATKdtTamrnNCa5wEJJZaAu4zr1MydfnAJ",
  "key22": "2sjKxZcuR7KJQXtdQJdJJZA5sdNDaMkCmMxkqj9Bow6GvncSCVVHEGgJx6FmfCR3S9ajKnKtDsY95UcSuUYwm2gi",
  "key23": "2GdoVVAmvLqKJ6aUeyUJHcLuBUMG6rwWyuPYKABM2BACrQVbddte33Ax76TsvUP6PcidzoknXZfMTdmZZZuqtXNq",
  "key24": "z9mvX6Ueidqy6T4VyL9pmBf9TekmPv938Y8vCR9ao5xrhoDtMxNcvc1xBGgwsfcJV7zqA9PwqFuqamStqj9qZnx",
  "key25": "5QijxPsms8xjYXFHVSWpJFLETWYB19eyy2CKSQ3pc1Roa1oANnULhnFy6QnnQjh2Vb7CNENnDmuZB31rEkW8ibnK",
  "key26": "4oL29wEyUyYcrfdGLg98chwJ2VC9v2dvwTuPbqKoNuCMXbK2VP2FwBoovV75zd3i2CtCs82iFbveURKs9GExXwKa",
  "key27": "5nEKtWVwPb2MuCtBRUrFtykUt1RM2zsBwhLXGPFDS6175xhX2daxt9daBeBKZYYyCYkYy2bht1GAksJfiSdJNJZy",
  "key28": "4kByK4oz912tZawcj8EQSTUx5pLUknBU4VDfggZwkuLKM1gWMNtkuUWJ1YffbQbLHeM1mNa7mmcPPf9a7Ls8UFE8",
  "key29": "2DeFrQdFCEqCrPDARTj9dmhb7bnsXLwGKMZ1cgsyPx7HxdZLvkqL4B4tT54DmHAJbNsERb2ebCoXo1oukVZKuv9D",
  "key30": "P1MXLU41qkZJwpQbqPeRe22sed1ni1pv1dMfCtJPvHbrAFe8sN5UzURcXZkru7XaBuzzps9fWjJ8gV1mLoTTaqM",
  "key31": "32F7rAwuPtZj8yirKmq4P75KpSThqLDTY9AvdKr4juZdWUF8QmKXPU3fUYrdV1vD3MYdNCBsePYhFZeF4xJC5N2L",
  "key32": "8cXqi4ZBJV99HUnqQhhaahEdPf6DXy6eDusUC9cEvKw2RBZHE3QGijAa5ZYchoRRtX2D4yKnWpnWuCvyNDDdxKF",
  "key33": "2bUr46o2vP7Q1hn3ZDVZsF5dmRzkuVvxcEff15SBHargezCz7Hruj9jHsQv8ZTn5hdD9suXWgUnGBWnRVtDbmuGJ",
  "key34": "5u5R9nVPoWnwmASGxKf6myC5Uob7ZQkj76zns3wjWJK4WXnsZUp6dJyPSoc4g2d63H2tu9ougWSj6LdfSUHC32gg",
  "key35": "x3JmuSoJmMugRVJeBBsmVhkktWkNMTFtnsoBGhbsM53qNPKPkGx667ebJ68np4n9aK4PsRTMq1Hc7Q6oBQTntw3",
  "key36": "hZ3G2B7G8DucpC1q8tRstTMLNjbZSAvsDJJLd73XiYierEdGGhwvVkHTs3Gmoi4AcZLgvRu6vq3KZdm7u1xVrSx",
  "key37": "5USu25w89dTCK7K4FLS2jkfRjxyagyPDBwhaK1dhEKt7h1PFvM6T9CS7xMDzTgxCFXCiqGs4bG8xeCk54zXzvFLk",
  "key38": "3qRhTqq9U7xe5serVb85hVjgFvsk7Ye1CSCXd25LnPu2ctZw5MX76CqhHZBUn8dL8z6yWdoNF6xDxZLtYjS763kD",
  "key39": "5s3YunShc12yhZ3ETHeE6jh1VSSGcWisa8mxKRM8gVwaLdEA5weg4TB2erW9eJRaabra2hE7JcpmQ844SRPqQqcz",
  "key40": "5r64cpSoWagb1tU7nwfefryX6XVmZVanyAsUycojBqGL3RPcpi3ecbhJbCM1x8qLA78ok6xaubZYa2JfRXe2ceS4",
  "key41": "5gc8Uy12GQ1m4Ud6zFQh1GqgGM5CyWFYc21jExBBYM2Y5VWg6SbPbDUMYPVs5GuZPrfqTGKEpu9s8gtDn8yGTV1u",
  "key42": "3BAdFPEJNNPjj14F4rcpVZAjiWLiJFxLAZvWHcpzuDC8tMhRTRE9PtczSStLjhKwkyPECC22oEg3eRa1gqWi256L",
  "key43": "4WbgyUfy7paTJT9YMNHMVJNgJQmnYuxeuB7WU8oETu4Z37QAToyfsZTDtFu1BmqY2wcN7g5iTJTVF5jSFWpN33vh",
  "key44": "2qyrj3BqwceLjBG3Bcjz5G3BiLyw2ULHT3W1eBHVDSQCHVtLTGT9Nqa4JQYQxfh1TAz4wxipdp4H8kbAUwrJr954"
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
