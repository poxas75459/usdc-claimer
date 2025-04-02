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
    "2SKmzd1gtYLsMSQgRMg5VYjoLMY3eWiYN8zM53UghWmknWg2cv78WihDbzP5dQgLWU1vmj9P82pWgTABGBWKvN9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zDJC8C1vsgZnJNUQyb8kjKtor1uRtUJSEwWSfHPVwrWuGBTgNAC6LJkw4LwxqfpmL8yvibBcr3CF7183uA9jRG",
  "key1": "V7vYwmz9RsL1Tct61GBFMbv9MyiD4B4EWea7xiFXpkpBrjMqRHzdfxZEezHZQ4zbAA3NaGPvqUcaHZL6DBSjtc1",
  "key2": "2wSdPTzJH5TunFqUJuoWigW7ucdvSwyA8oGwiXsy9fPvxWiaUH4sDQ9WaQ2DqxiUeFQPRdXy4cPQPhMshsGyrLk1",
  "key3": "3tA6ghsVvQZjCsbaw79CJSXV385L2krExixAMh5PKsZSSKrSUFUA5QXRwLEDa7b6PTeoXdEcsmbJBByG4ZHvut2f",
  "key4": "5WAc4QQpU1yfnxGdSpsqNGwp57oxYjAUcirP4Ui9iNpe7xWJknuru5KKecjnD93mWc5uPNMdubsMopmx8ofqzSA1",
  "key5": "3wmwiSCKHNStes9y6Jt46KuNjwDKDFbodaSEsXJjkyfb5JctmjqdfjtBhpoQjVERLtUYs3YKBnWMsSBmneuiDFb",
  "key6": "QU1NNJMRnCjkaDvy99ocArEsxt9cJKivDADXpegKpMwrKv9uACRBTWPzXmU5GTdeTaghqREqCGiDPuPaxVXZiCx",
  "key7": "2AQrTea2Ap1b1ijmBNrghq3F54L1Cm9VuS7iD6TcoxcFFYs2NzriDfYMCZYwbt45vsVfLeCCsTkQcuifcBYkFQG9",
  "key8": "4f5KvJF8gBKzrDsjZNZgDPg8Lz2df6rE5nUDBGE4Tm7Eu4gJcB4q18aYUftW8BqMqjuHWWgwfRuZxM3zQxqjB9iJ",
  "key9": "4TThjpRiEsBVZEN1GxvRnJr1SSisiohNQPM3Eextw4mEusMrXX3gBmgSJtbroUjKgKknC3ibFPRsubcY2QiD2taA",
  "key10": "3st6vikxrqzmB1nhkF7HB2qw4FtoB4BTmk6RbwD2ZFybSuBom28rXh4b6oZT2Qn1PiTSZoL3RLMWKBgVVBgT4R7R",
  "key11": "4XDp4j3AX51TrYnGrm1Ckm9jgVKkigNBvGkzLV3494xgdkA4j86Ka7sFK2sTMNcPwKvcEJZ6Gu3TR363vAeQsmja",
  "key12": "3BTFhdaVjNdM9LRZY9eaSSjTgQPx4G3pJ35LNn6dfKfcZPL1sbvkBUPkMiCrk1PPv1nwgRH2tSq12rhMhoUnvfEX",
  "key13": "5tAFdgbEDNhNAKpPyFWXd6YeZyfdah6H7qqndQnDNrTip1JeZ2VU1hVL5Hi7UarMphf6vCyhmtPHYaBXhkUc77jU",
  "key14": "5chAF5tVq97S98b2SRqpvmVgwbwoGURMtMeT9ytepzh3jJ32Jy41Vwt7uECaN8wrVtr2zdykwgBqV9tzkG4p6GbL",
  "key15": "867xzbG6Zx23HKHyKfBVFU6WNdC8pbLQNJRnDtHRyjNh6RxFW6eXtgJA4nAHysmGZfYqSnwrRMfkFL8X2nsV8ab",
  "key16": "5zxtVFdfj24jzppFBTbp5bFR7HB3mtCuLSNw55gXERVTLkYsPBfbfmvfGKGZf61jtBmrg93AEKbLZL6Jcwaj6b9j",
  "key17": "2NShbGyXnNkYuXVDMA6n8z4iehTcazXUVPjnFns2ESJkQ4JDaju5ehcQzRsjFic7YyjLAXZ3kyyLYyakrDrF4Uhh",
  "key18": "k7apXzhm2ptFFx5YUWQLpBqJDDF1iqYjJFb9WE2VVpZ6Bw7fw7iz3o9HsVgdbFzL6cZwn8T21xbiV55K8NMDccr",
  "key19": "4Rco2VYmv94xjZeVLTJ3gkJ8v9zGrd48ASQ5GUAy9KNoAbC2f8PaLw4oqdqJew9MR8RSER7xPtJY2dKrkZDerCtk",
  "key20": "3EPQFwaRgJged66H11LfJGezwRGyRyDouqaJU56d8rpCHj4hrMEVZXUP5mHQcXy4aBamefdnVNyjUrfZ54X4pm4f",
  "key21": "5wVi4Fsttii4kqYnx56FthzCvvEsB1j8eT7PWf3X7JiPMhm12Nvp4KgFAEvZAPrEjMGMWtmWwyNKEdbcct17k894",
  "key22": "4idYVMnXPXopGWS5SMPPEiuuEiQcdzaWr2cn6yimAGgaffGcSybKYrwrTPXTs9e6Kk9D6HceviR8muvPExmxtjen",
  "key23": "3rwiPMuyHfJExvFceWMVJBK1J3xQfq2fkds8MB3H5hqDekvH6CFYAH2F3aLFaSZWekXFTqVq9aNw2imgcEtghGn4",
  "key24": "5jqMjGa5kMewfXuCbRjb8DzSrgHXNvZmqKEPC6doCGm13PyirpHDurnxM2v9eqMjjYSvx6CK5WmeCZmNsyBoKTPy",
  "key25": "4L7x3RFApvjDZiAU5Z8D2ADfcNUP46pXWjkDQ53ErLPBrfYP55eyvztqtjfyQqGDLCE4asLFx3ZBd17KX6ZoLt3m",
  "key26": "4s9ch2d9nrmAZ1J1vwDVFNaVmt7mWAhJcGnnhPfXJeNpB4d75adHJHcHRiLGKQr5vq2s84ewNPqAXjWW7JvKFsnm",
  "key27": "4XJo5XqsU3mgkVa2ZjTCJ5uS6MQQ91EyHdXSVnTcUh31Aq1UvZw94UnAPdPSL9LXsp1gMKj9hN74PtF92dHt8yZX",
  "key28": "EWGCzqFFbqgtL43fyiWLWMSAUCDFTgDPCrnmPcAoGmKmvcjT4pmxBoMM5ZV14DmH3kPnMF9u8JxCu9jg8EvQndu",
  "key29": "4VviZxKa9rKZY5CHzFfmwJTdCEngRwL4r2mt1UeX9PCAbHFyxwnJgA6tqbHZja1ztuK1Ku77NYThn2k2PpHpZtHm",
  "key30": "33jtYmDL7FSWrSVgSSRWbD2cQxMzpAZe5XrUDGMiMB7gUGCpE4GgfnbiYEATc2vigVJznMBeHp9VHjtAAmCT9uiR",
  "key31": "52YU2SuVxhg6NwcrZ3mEnwJUqhxWNzH3RjXxPS7hCMsaSKNTvq7aXHHPPXL8zuZqMn8fDThFdpSehpHKEBbQ8GZa",
  "key32": "42Dt2uH8vtCL1YKkRoC7MnJCysLxFpNPkVhDmEchzZdQJeqQ6XTL5fastLpapaaQrLXaUwmg4BSFceMNmGBPaNZj",
  "key33": "53CycFgsRETs7cYqZccr6DprviUigNu1XMdjvPxPnVyrVnQWtw6B8VnWahgLitwhuLbLnVwtZ9UVRhDa9qCW7qbW",
  "key34": "4gLg8XpxjpBZ7KvKP4W59XGYZo4Ty7qCgmHBDo279cxG2cq8zJiMfMcJnqRyQxUNbgHvEugjP5Rp2CM3srmiQZz5",
  "key35": "2KvfppjwXsJNfepUX1QezHrS5dr1HbB7JjyZ8WvP52J6hF8vnhd47G2bCkufJybAATPCsTpxoX5MRMSfMDzzdu5t",
  "key36": "3PDs3XY8niytW3HwjnZzvYZay1gepwViuAPekvrdNgatktyNEjmzqAZQJ9YEVvTKqHpaUtysSn3MvtVeLZSFQowF",
  "key37": "3ytqL9hE6r3WSZkKnvCjzCzy5DnC6iSrgukw8bdWH6zMgH45PH3kB5HvJNVC5EwDPofNt2JtnTjGchyN8z2yWcf",
  "key38": "2eBjBH3Gt8148gr8So9DGvKWBGZyqcDvGopmcfNy8CpyBGLhY6J8N1micWvQSSiG9cPw7V8WdFuJA96S5stzfwGL",
  "key39": "2KuaRmVFMhkny4zCp4VfgTgzu9ppVcnRemD1a4n3b4qBwoME22eBgWaNTT1DGFmWLG1HdpTUespoRLex1JxTHqnC",
  "key40": "61hf98DWR9L4pnug7BBbdNHn5nNuT71f6ANjrLH7MqpXug2qoKwKDtchZQmz9UTkerA6sTv8fdA1obZ3qg8GbLzp",
  "key41": "4pSr4MJdjsgULi46hqGB4s5784sRpzj6QGqgkuht5R82qhiyZrkkBCNsGudUyShA2vsF7HLi25UWqyMMizU9xXvP",
  "key42": "61qyyDmrYxi7icXHvwvj9x2iHSz6bBWyxhwZvGFXzX23QEMTRC3FbvAui5ctXdney36Z1zpEKnLzVd2zuJ1mbi8J",
  "key43": "22Dqc1c4yGeuxnRBRHJXXMDYMzapBXaZkgXuMFNjUUCNAAhtnsvAEMLke6nhn2iDvyJi7dTtSoBy1tvuUfTX54Yf",
  "key44": "2ZXbJGKm8JsuK82Ptk4AFNqdLBSLAXxYh6mXSghJ5fjChQaECwCwLWLNbadtJ22cMkvwGBxGCGHSeWKTJHvVgBPF",
  "key45": "4CWeVc6rmirUqwnHj1gGKM9w6CMFY4TP49V3zFsnbmMcjNpmf9GdPxMtVG994yM1BaWfmgZWbqQUP1DdYY9BNAB9",
  "key46": "457KhuK16ALCFpQyJkHVt3d7RpsA4FmMDJXgu9uSDgxxmax5799LSkc94JhVtTVBnP2LUS6zgBtXpUFBL84GyVRD",
  "key47": "k4hbPrhYkhQUPpcLfiwBgeDufXed1xSLrKg278bczJfdDWqKGcKfvqKfSJS5arZdkCPXX1LDGhR6ty1YryhRG4Z",
  "key48": "2sjJJ2cLeCBgHmWWnHwUR9jX5GsGnxzMpbZprTPaYQGerNhY3moZps8Uo1uCszxJYLyze1zPssHZhNU88DukNpBz"
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
