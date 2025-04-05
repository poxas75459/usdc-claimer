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
    "5mHxTQJo1QuvdWQZwnScGKrPnY3r4jtnSZ1tZf3L4HpQpNqRUrzrSZceHEfmd7FJNUQzDNxWDCtG4yD3m17qqTUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ddFCNppqJa92JUTSesznoAwEzPErZSWfsgUkpNaq5Z9yE9ixxJUoYuiyZAhimWSaNgX38khLRPE3FMvZELZjZdx",
  "key1": "4K4zH5stvF88C2ZPcs1YS4YgfQZzrukNhVcFEKKqYyNLg7MqN4SJE2kMvD2otBVikaapjLmwTTLEoDdR4dDk6FoQ",
  "key2": "Q7uJnGvin92uA5Wex3wCJRisi1FprmKWFUCJL7jmXG4W41ry4CLjmX6QCxJsXFnbz1hhfBkLW498sNCruWk9zwg",
  "key3": "44boVPG5CPcevZjwfeSoYF6bFHhCc7gUeCS2f76YhG6xHMkaRiTgsLqE2NvuNuiFRdch87rWpjQCKQwPcWh6hDgZ",
  "key4": "2841RCdMo9TtLJBZAfug3wnVBQpfKfnxU1tuFxCz3xE9UDzhpNovjvrpEVsL2xWYG4kUNYtE4g3QNLrYRzcMg3G6",
  "key5": "EXcsw7cUWPqDPU6C41ks434FB6vCb8m39kd76eVsX2HXnCFR4pemzAwAcPpEnjxAh1edZRg28vV1bo6e3dn9Zfi",
  "key6": "3FHd2GfQZ59J1JKYtAHwfzNhPUDjd1ewx7KvvjW2XisLVuXVJpF1cprzfCsZRi65updFSEsVHrsvnHoUoGH3PGrU",
  "key7": "5vYKmzJCvKn4X9QFtFUAPUKyMqr92R6Gc9T275j6pedeLKuhcAx5VTtwVABteJNybf5xR777TNHqUqdef69QUz64",
  "key8": "4wQWuowgwAcevUTnGS3shV4JkjFPqZDDBZDXuYTkmp6P5EqLkd9FmSi3cnKnYh2uieUk2Hb21Z37LkNPTKS4i9i9",
  "key9": "2W9SuHDaCVEeVdgvSaJHhCDsEDWM16K9UY8zrbJ36MEnC8wuZtZEFqmUUdMz2tfWSRYu5Th6GLSPFf4MiXLGHDXB",
  "key10": "5PX19LCzUxJyBTpzoqP6dGkeAx4d8sEUVHJkT2T7bEj63hfup8WESbegkF1dpAokXBc1SJVPuKSSn1XFqYuzFnsU",
  "key11": "1m5F9L7nAm5RMfyQSp47xR9WgYmqYhsgeRYCSiwXZK2PJgtX5cu8acXGz4m5kBACuPZZzD6f824hiAdCbD7DpQA",
  "key12": "4eU67xCLDNNVX89D4FpKSa3ERJLjNKyYcfWiJrFxDLVzHopfceUQ4HVEjvC3B3Cae54yK1fjs61GcTfwRmvTVpU8",
  "key13": "2kTTUYTjxLG9ZAH82ESqgU7wAYJFpRe1Wi7jRvdCGePuoafsLcXCaQPcQeuMyULhf6j6oCKaJ69gWMrSTaCnShqY",
  "key14": "5LRyvM76M1fWoNQ2rEvpFD7QNC1qykjWJgPe7yn86DfQsrWZSmZTuxNkpi2iywaTcSPzXcPvtAi4VrSksubtaYe",
  "key15": "3foRwgetgpYq6TQEoTew1BcJV3AbaEdZ6ffuTdibknstawFzcyeVo7hLR8RC4Bv8ks9NHbSbywFaV2BBAn63i3Ug",
  "key16": "33DiHGFZbFx1BjWidsYivqUyNNAotmNyVEMNW3qkgr1nkj4ZXrSntJ1vyGtb94PtRHhBg6f3HShWf8CzYvgerqTt",
  "key17": "2RjniVj3JSdEnvukU9FA6r44GaY3aP417LXNAo825q3en9yoeULyYKXCs2WnHZZdGCdBNPZ4JY1TeRow7H7pJHnQ",
  "key18": "7uQnHuaQLCexJTtFxBe45zGpw1J2BXLMJAURM67QjwADTUt9DnpYToew2vaso9nt9HW6tGTEDpQjte93j4ec6tP",
  "key19": "3rb3CvX9rxUAeEUYVJzKkXpLhNbcKf24SmWxXLgQDxkR71A6SBwdsNyth9zHhmsR2DnUBxWZEtDpNWq7tbzgKRu4",
  "key20": "4qoscJzBfH41tJAXzNQmBSD3z62eRAhCgtYYKBjtWsSPozJdA38RLMtTxG4653TDTGYiA8B2Mqn7SSawWNErXMSu",
  "key21": "5Y8QHPJrrroUyUBR2qfXeAqXY9x4BNGb7yN728swT3mkuHskRJ8z6Jzm3Sk4RGz98WZJDf9FJxV3kJzpQcCnBsdB",
  "key22": "2WgKA9XHBakN3NCikcoabA6qhh9aaTe27XwJuXJ26Za4KD2W45dEXpyuREt4yg6kG2XmjAQ1wbmn7Lks1cm2PhQh",
  "key23": "4RvPXmtyZqxvcXtWorqJpzqnWsdLiyb895jAj68JLP2LKSoZoHiecx7TC4HbtqYckY3PNCvF23odVhKPHTXdFUT4",
  "key24": "5SmadTcqDd49cKsLfKnUnURuJurZg6jjDvQ1mqVHxsGnPXs64G72k8rJsBbnih2akPSZUTEgRDHocQybXbeQWuyj",
  "key25": "4FxqB31W2YtNFfjWRjvMFrBpusVwwkeqqEGanBxJ1dfmmXJ8WcGzudBaDx3q8N6cL2U9JXDTKfmmZeCYZvbktiGB",
  "key26": "3u8CWHzrHdEqkt8TMK4XeG8JZgV9XBhdYJEEVfqhrfYAf7PoWyF3mJswBMrwSbvkWdjPdNA9wSaveUxrSiZXtcPv",
  "key27": "bih9yQLCTW6YnpK2jBo8ip7a6ooBpmEuNXEFCUe7qxjrKyGokeJuEuEEMGpwE19YzkyN6MBF6HSsBLjSUEonHUV",
  "key28": "5123mDkouZuMBjkZvX5DiYCXHSqzucV1P6gZ2nY9JkFwLzKj4oqfGyC6A3x29ENwynEU1BNHEeGgotGSWKD2paM7",
  "key29": "2Bcnk5qYshPny4e1rXUmayAbPEfB9eANN56v8dWQ7hko7QE71mRGRrFNFefPpfrj1VoZNiR7otopLtiE3HxMMwoa",
  "key30": "2bN8evtisEFjQwuycTwY9R52GE4xQna89vHGyPqAtDQ3eXfFgLUWkeihFuGBnBcgyhUpPy8D5fyuzugaqhxZsC4n",
  "key31": "27jvPiQrmwQkSsYG58NrCVpphqSvRL5H4vSsw3wWvgnTB48xxvLZbSWjkBaYThoEL5JivGMQh6gDMvecQaGGjdB2",
  "key32": "3Fnai8A12qqpjKyyEpsXbRC2GMSVB7PTVPsuseyPLQcQ3bHQRQ3VC8DPR9RYu2SMpNT1njPfXMfHPe8o1zkbQinR",
  "key33": "xcraaKhFXDSywjQsEiGEVftqFSu2TTRd169WUYWs3jjeaGbEoAM5nZUsE59bBgfNYPrqAELzhJG9AaGFGk2xKZP",
  "key34": "54zot1U8ZvUFzHd4Mv26B1anVNZgB7BLQNiWbCYuXiKEC2YWTkPE6PZMJDzx6g7917moyNBcntivsuv4h9Bdx8ua",
  "key35": "5VTZvjeD5PrLny2tEQNQhL7v47S3yiUr7b6vdo9bvVykuetJksz3DCezcqVFjK3cVw5gkQncpuRxWTJVPfFuFArr",
  "key36": "4YNQMNVxBZoT55SDVNRE1dFT4CbHHBK3ECFWFdps3m2vygNJpy72fTuVppFW9jtnFLHxh6sw86BbUa84hhr4xhcS",
  "key37": "2EgCdEfuwhGCQMPYKkiCFStXqfsjYA3GUTzNXio78oGLt1wzCw7cxWQ25PN38DPe24ghcSd51Z9CoYrXLRSkB9ng"
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
