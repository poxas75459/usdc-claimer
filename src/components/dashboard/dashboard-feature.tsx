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
    "4fXBNX2bUEwz5zPycu7cPQekuWxV5tD3728yQDufWJQujhEFamdTEz8HSpbjTCAMPW8ojUoymD46U8ccBJRnHVka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WfjXA5HBPqx3p44Lb55qGAh2fqRQxsAUbaMzT9ePYwPVKNHrjjmdNixvd154Bte7zUW1HhjBDwAYLtkf3Y7P9GE",
  "key1": "3NWcKPTkUoTute2m6ebdjpimJ2gLPqqczsAk2wkpBUipXS9VdMkx7aoNaX4nBA3CScQKUDHdRjyEouwC6VF3UEJ",
  "key2": "2NvEexVmonHn9G79nXrzJz5DA6PNJudN4YYXfaad1EDCX2HGKiNh5xbmJ44Y3JfZgQzhY1qohBVMeHCJVkUYzLPo",
  "key3": "p2qbSZKZAZ74SdgLELpeYSqYKeAeTd9nLERcw3cxMuzZgQqgs9fNz95nBk9sn7gJnC44jRQGcnp72YUzML5BLM7",
  "key4": "2pMTBRvs9XJMNkYfDRmYMS7wGnDe3Ds6Kz8X7pcAQji92pmmXyyBsWf6fEqKfwYQeo1Ewe173KnhWce2Z3dbnVKG",
  "key5": "3kPGv4sMKEidZ4kp81tcptcrSqDjQ2Lxm67k2SwNviin9KzbARNocSDg5Zmauz9ar6Uk2bwEpU62xHxSWFQP6vAb",
  "key6": "5LWDgmZAiMMLfD6tW3UAgJQa4SUMWBcBSBM2vsZ9BxnKJ4CpSA2K6R5jsa6C5DQxmdkfPyf65xNA8MfsBq93w2P5",
  "key7": "2YykDV82cd1iudvNPXdvRWswaYMPifrTuw4h5a4z7A6Eq2ByG41wV8nvfc2nWAKwHFHApEkEmwCjzdNRkGnajXth",
  "key8": "57jeKg52iFdg266ugke6J5WPuKUBo7hzGU2DjN1UWgWy5Cig9y8H5eVm5KKTQtC33fSK21pn5sfSqPuq3htXSr1A",
  "key9": "XnbGFEpn97ZoLWqAeezVxhY7CyeWJ8j33v3uRvFTpDNqdw7YDkVEpPEq3Knu4kQdWowFAr8t1AUGpEU53RA2Fcw",
  "key10": "3P58jQKTzxEuyS9h1ceK6csLnn3y2wwygbLMritibZmA6K9rxcjeYXNPzsTHokDoejHF6Ljyv74XtGgFDhMZqmvD",
  "key11": "57FkfUR9YHgWbm4wCjsNxquncnapjwrrShYcmMfmNeRGDefHtWMcdYSdaq8WVxEs4iyPvVtjTrpp6TFHTcJbkH6o",
  "key12": "4s922ZLDwkv7n34PDkEePrZs6XPFGiDiForN4ouBXv9qnNHasrCFPGL7P4pAuAMTK7QKHCPB3qf5JEZojex6pDAL",
  "key13": "28SR9X8czrUGcuBSDSbvBDa7vCqeoJHtooa1a5GwXw1X1KJScCSfY4tNAGfMD3XrpPmzbnXC3tCHdaAkYXosGLXx",
  "key14": "5KCnFS9YaWN8S3x2S2ZgMdcQuX93Cs2eFh3fd7pd7DDV58DRVyfYqPAfzqJ5rQLDhypzotgRdFghAak4ErweGCN2",
  "key15": "5v9CuunaNre6ATwa3iFjd7K2wwXGV5e6fy1YtKXN1tJm4L7hPer3WmhFTGj3Kp5RsVZGddUK8aBuNo47kCDzXz2p",
  "key16": "2vdm9qyAvSFiKTSop7GHw87hiTbqKPQZ11BfmBZ9JjVnTzLWJXXXcJZPvGWfVBvJx3w2ryQTvQerwLAny6KeYZiV",
  "key17": "wTCj3EumEV39cgQ5Doq5iJjXcUqAhgebREgc52843wDAM8UhL4aHUUcyVXcZ8s86REhfZavEsQ73eMgvAzPFyj2",
  "key18": "4StPsMm3gJ2GcqZS2y59HMRXnVDpDLmqrVo3qBaQdgy7x2MNfavXqZbLgZkzgHA4URkGuLbpFxbMcEpY8LkBzRZV",
  "key19": "mvi8tSEcmJBWkGzgEDaRNxqafuNtWY8pj4RP2CgWdy6E7vD2yzLx1uPqj6cD1ypWDEjRMQ6DmdQmfnBD1RgnFqp",
  "key20": "TSFZc8fKzGVHShaGkxiv8bpbKGzoxGBk4mTtdy6EPM4ydtkswzU2hcpq8koMmDHPjffZGCJ4auaKZFN4UY8mT5U",
  "key21": "okKoY1EJYAJjbwnpqtpRCYYWtmvSJXHrBZ1WhLhxiehWkohMTSjEyVo4sPkhrDoDrhTN2WgknNv7ngRNYwJfxjV",
  "key22": "SWTVfmoiRCK4x5Ym61XtWV8AMLbqbBCcCpZHvfgVVZxMneLygwfCHvDKyzCvpj9mrKzYu9b7LEA5CWZCVYTBFS2",
  "key23": "peLV4d5WNG3FGSkiakQMw1imw4uk2MBe41tNbnM6VDGjwAeyR4DJsUNEzYkUQGUFfkFFf8FDuyL82rNEeW5F41y",
  "key24": "4eNzHJgbJi1jvM7QXjWF7DFAcivX8WdEZGtje3a41wPvThJsZHXkQKnkba3s6hdMFfqNCjfeod4u6TqFFUx4kvkG",
  "key25": "32pUbTceAYZ1We5CXQ5e3sWYin3EzyQaXcHjpST7H39PUTosWpMtKqXNPbP9jUP4pMfrHkijXX1WjqXrTWjU1h4e",
  "key26": "2nhcPy17v8yevQ8zcWfVAJhUTmpwRV6QKLVehY8h5YoyfSjgqxPfSWX1QQgD5ktizW7ACnv7qKYSib75mV7Cvoht",
  "key27": "61U4JCA4VePugBSKEUsapSZevMPsy4Huh8wMayMBWuTndEFbFtYoDaytK8qZ88e9T9vEqrzA3eitTK8YqffZYot7",
  "key28": "5nqpqqFUV6S6eRGv9L9BNmzRv19y525mRaipJGK759W6YKevgeERchpQ7YQ6ePVBFeahsMERSyZ5wen8Dq9yqPDa",
  "key29": "4X5KBNfMzkNqR1d8ZWZ7TKjcSubJGvvhxofkpPijAj7BqKpa6GrsyRNXvnFnZb6szBEqwpoqpSPKugY4iSq5TBDS",
  "key30": "5MMnDez6xRGrY8p2xAKLemFhJnjNiFyo3AGsqfEBfSbqiwoPoNmCr9zbgp3Ev9yLKQNYVMjpyqjKSPz33ztfaryN",
  "key31": "4oznkzXVUiUbuTnK5SRgqcaj3ZfgsnZ9rFimUYu31vuxshQDtGdMgGt8muNi5GPrsAWopGraYUtpA6JY6GUpihpu",
  "key32": "4S7U2PHx8iD6xdLQcBqBqF79hBkiCmy6Wfk4MgLdCKLRKMYy9kNiqXr9rSMLuzZDZ1ePbfGBeYvk2mTGLCwtRr5Q",
  "key33": "2NEMfJYPjk8Xs3opzUKobeBqQjgs6zNxiyHZEdhnBF7Kfyu3zG5pZ8Q4vy2Y87iWhGQLR4Zc9eHKuQfvvzq1w3ue",
  "key34": "23p46df41GuUpybTpHLEKS3F6nmYuZpeFVx51Z8NBsEjZqqk61KnX9FC9bMdAXMygm6jn3xw1xvoKKjC9KLeaJiP",
  "key35": "3cHmp5o34XLaMHaJSU6Arg1XkhUovMyR7CNYA7a8SzGTJiugo76ThGjwbx9xFHmbEaQREWwuEHgS6wRtuhdoZ25p",
  "key36": "HVPK7ydeGGb5Y4diZR5LVy23bTDB2uaY5c3WaQDi91ZhMLHtS2gSMrk4LD5Bdjvaib824QPmCaPx9wZcsFsiaSR",
  "key37": "3JbHSHgDuWGiR8Utrz3qVuEKNR1fT6h8Nmc7w7JHqYbPAuAA7Wtm2RL9qNnvk6vn43STaWby1EJjijByn2MtA1oX",
  "key38": "2rc3vNC2LNRKtyWiJHPFMVzCSfXhvn96CBr6f7WmcFXrjASmLyVJkScrTDNpdkyyn5oUdckqchKCAFfkhH35ud7H",
  "key39": "5JKbCvi3eqTHx5GFTs5PiGKX7BjhE1bek1CipbvMuzwBLYxA8SRCeeu55hrcA3n1fdtuj5H2VuzaLVEfYBMuYfmT",
  "key40": "4bRrVxxnqC11bdxn5xh7Y3uSpGzBMvYvfnubCef6GbKAxeDGdoA7SsB2u9xarmpZdgFGZfDz77z56ZPk7gDmgQFV",
  "key41": "4tuzPbKL7joYyHkfXQSGnTgRa1jkF8wnji2ntdCGHwgjqdPscG6J2Q8RWHqCgRegSXEKw1Fg4vYrzyVz8TE6bRtf",
  "key42": "2vBKbPpTqpSBHtwNQNXWATSGfbkdbSF5WAWZHGDbLgrVVqXwd4EA7gwGUsGutFjUnjFnEDC9tdn6JME8pk54hfqW",
  "key43": "2fYi4XT2QPtEWHP6ibm9smGj79fFMUkq1YKSoLNcLR1p7DHw17qcXkHoE4KhvJa4kdJ4mcu5zV9nYYZKU9XedxDT"
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
