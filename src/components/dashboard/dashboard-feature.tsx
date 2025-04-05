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
    "5MMcfWAd2gzavyqMNScG2JkyVv6Rp98RpcLhgikdibn85a3aZEKoQxc1b6a5rSKJWLKP12xegwkSo5d4ds2z4eFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mxYfoGxywVMWjCUtrpwJjKVGkMnCL4MxVUhXvFTCdiZG75EmdWTvnBnErULtwezs4pKT9McZCnrQsurS7pQcUso",
  "key1": "5QqfXvmFs58aW2RdTSM9nF8L4MfxeTQHpRkYWefqVGHxszW9GD6wyrzcPepYTXhrFqNu8ui5NiRmTU6ombhC9PXM",
  "key2": "2SgJrBZSfcwaEjGUtzMfH7mUUegyEByf6tygYm5Y8icPxJV8FuZhtaYfGzA2EtYwei9s1NpSpu6tDhxNtq3ohwpa",
  "key3": "4fdRGBWhmDDvbAMRkNFZp4ptCYwyvsLebuKJzAwEM2PWFp4Xr5uabWdkgm2T129TYfKg95Zz6bjU31AZ8s2umEyZ",
  "key4": "NBuxwdcZjkJJr7H9DqJThbCGeug1oEXgJmwHCj6zwtf2jA5DgWMMkgNut5HgABXhnTnDPnDaNaJnRKWAZ3SmX4L",
  "key5": "2QMZ6GY5Kh5CjGFZ6MuJRsiFjFATiYZMMpdxbTa8cQfPyHF3E3bbUBmHHnuVmqV3rogkeehkmkCQRsPzmo3ibb8j",
  "key6": "3MpftcQk7pjQMWz2DjKJqS7htm6CcejX21tmqfgSEYK7rsodr5NuuXhdE4fWBiZDpxcysP97CKDptGdEPqUiFuHD",
  "key7": "5e4bBKrzACzRk4gQBb1u7LPRF2fN6nqqp3SVTA754y4sutgUcMwFxBQmC9o29qjAW2e8sEDdVUU54AgDBeRdCNxG",
  "key8": "55PeEzXhnhpGAjbkpdQQaHdV5W7uNV8QE5NfCP89YjqEaYKaibbwHp8KwY9mspuxcHswTLLZaUNAhzhtkKziyMFj",
  "key9": "2K551KeRe1HSHWKFjrGcmpHm174xSTroXYpJ4ppgMCsSpA78ZiZ73KyK6Wk3CpJvnKHEWgjNKAhpiPQpJXq36TEw",
  "key10": "3pQqLYCzux29jLWYLZBC4yAgvDZzm5ySMRYYWBPXs1tUA8jHJY6Wm7NLnHE9AiWioimvqbwhs3x6a26wnsoqZqHx",
  "key11": "2kLGgBkXBVogV1khWcPFmhYpArx53Mgzf7uj6PazDBrfnKQMaD87un6p51fPYQpgaQag4YPcyWZyLcmApKyHsCan",
  "key12": "5ty1BaVxR5mDmeiPap8tqjebZUSkx24v6mJWB7CUHuftQ9zYRAksjZN6ZoG5gWqqA6GvcxcqFJyesNNXZYRArcWf",
  "key13": "3NBreAYSrbrAwgSsZaghE2mPsrd4Xqw2WdPg9A7rKMDf7XFEPH95BWwzwk2zEDM1P9ohMUqjMSvMxrMYRHdPXyu5",
  "key14": "3DAxtn1ttAGxYPBrV1WwZcJoXt8KcCgxr3TiPrhLSzaZvGaFz6d5GU84A9GBMsJJcXSpUM8ZaAMZp8tXnAN3RCiM",
  "key15": "8Bhj3dToMvT7FhzVYmF5EP5FXs3EH18H2tviVChWGjJu7N5zsEbHXdqKL2G4FdATK3TyexenLrYLNUXrs8UjaPy",
  "key16": "5cXPZ5eJRfTCeN7t12ka67RjSC4xuyfUXctNBcAX1vh9paWuXrZd2iyjBwPv1htNUB1bEcNQQxAvh1HYN4xLUXdd",
  "key17": "5hnRRhh5E5x1duKJXxdEbKaiwWPMuniJgKw1GrUNcHPufaYCnACJa5VttdQ18i54U7WJ151LRpHaFqSPUN9vj9Di",
  "key18": "3iUPm8tajCsvzMcmXwxrGa9tno4eBRPUssLxZjUHxszrbi5qBBgNeXunDP24vrPhExTdiEbpGPD2ioQA72qAaQZs",
  "key19": "4a8qb2V2o3tin2ndKxiopnRUGtjqMPSEz6111Suive7Haec4uwGnF5QKUK4wDrzYRnafC9HdcfZGXieLfYqP8Pj9",
  "key20": "2T2KAk8eVeVaR41gZXBCjWWq6q7CJtJa8vafUC81tq3KHD4QUdUpQNtwbWz6qTnxQjPZsHCrzdUyDE1mfKbbdPZo",
  "key21": "5LKq5v9uj9zbyfwvk7aUkQZRrh9kBrmatvww584dVL6pmrdmoPh4S6wUMcLYxLCX1JScMuQxwhnLqf7FmgYQpyPU",
  "key22": "3LmWNML7gnop3WxHvz4ewUfrcAnD3DYqiT7snQ8cosb5RigKi7VixxaL81UkN3p51M5D76gRtH614p7B6tC5Y57g",
  "key23": "3ifZ74Fkdr3hJySvnKSyo6Hjt8AgNpZwMoTirLAJR46BbdK2e1C3kkm3buqZuPpuHS4KcGtdMcue42mHyConzfYT",
  "key24": "2yPk47C1ZjVzSNB1JWgikSNwAvbcLLwDa8q51qoo2cmkp47DUShNHUidqATrNPRaVogEnao6aQCyphsaPagvL73v",
  "key25": "35rvk5MoBLQQJiH1SaiT4KE2W6P3uxRhwHqZPaW7U7n8pKfhqxCYWMp1oYQ6gTXFwz91vCsgYFZUbZVcMJBjH8uc",
  "key26": "553cXEPh9ryHynxDGf9gTbgxj2rJ62fSi5A2mvhh4vX64Zwgf1HB5aGzoVeGBEbfK24n4VpZCmX1H29z5wp2LdSn",
  "key27": "35SzuyjriKHai3FahVA9hgiUL14CuksvchtDgTGwfN3BxXBKPrbx5MsXAtgXa6QcRuv5kZHjVXLp2eF6d73XyUas",
  "key28": "kdAsFP9478jrVHTXHiD3XWkEUqW3t5qj5dVytrDdQoGzVqD7sw3tFRYKo7HqojZAsLiqFpGZbBnChVVTwQHV8XR",
  "key29": "3fGb7ZqMGB1dzRgxGWwuihhhhMXf6ZTw7CFCv6JWeQC43x87k7FDSdE5UwGJpjKrJMMAuXthysuqQnZ8jfXSyoo4",
  "key30": "4E2UShaZpWo3wFKhH5gpkTCDWuUFhKBHG2m7taZCorjMK8UwS36kFknKQKrVxRLeFHmnpCkcqujJAVQHh4pLnNiL",
  "key31": "64cgDtXCy9zhFR5vd1cs6vWwfkcBkwWbmyf88NYHg6qgCV7fQWUi9bBo37yF9nZ1Eh3Ux8VynUrzTDLqRQD4M4if",
  "key32": "cAyB2yHNbyixR7zPfkCbF1K2ifZgmY239xcdtxhfcLgFBzw7fSADi929vaYJuYxKvKDdDgCPZMsMEgbWkK2TYTn",
  "key33": "4zjcHeixF66QTEXVLVvTSveLCpeQyGSjrNaE7cWu9mxMv44jffZGuTHECvWsWgavLHgvqehd3yhNjjVVkcpYPmAw",
  "key34": "2VnijyWtgbdTtiQV2cXQAxFSYgGwcE8f8fX7bb6aY5kRt8Zvj3XaAM8aRq3RDPbLcTMvSgQDXJ5fAVYx8VCk3S7s",
  "key35": "53E4UGpdrEVnUq21D4pmarVXmApixVaFjj3tbGVtP22jtrL1Fzk7xdf2FkRkoNinm23woKfAA7qfH2uzdVR3KDYU",
  "key36": "5wqQppT8WM7ygtDoFEYP7PD2wU9Xsi3cNz8k7w7EwdPVXpzzmXk5LVMLwHqQ1DY1H3SST6GG1LUQbsDHk3bsT4cz",
  "key37": "4sQjp2ojXumTH9zCEYaDGS9fUJaWf6nuvN5vsq6e5Qqw9MbkFcgto61oq7Nd3afDvs6mF5Fvf1gJv3h1PAi8cmpr"
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
