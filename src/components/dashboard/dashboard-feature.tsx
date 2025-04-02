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
    "5KrGr9ckps2UkXbphrMeipBQgEXcJ4euYJQTvsg3Ks2MGDLorzGNG2RMoCscYdEzfrggVRSCwavqmRjzEk1y4Z43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45bonUjC8gWzuDmgfGU5DRSxs4JdCyPSXvZPALLsVKiR1AMj2iLRMnEbJhCvCfXNVxcdBmLimv48i6oFAUpSKTuQ",
  "key1": "TnGrDbUAy6tx3BoYNrRk39DTvDCWb5s7f4fV16kZ1X9GhDu3VBW4gFVoZenqRbejHwpNL3thH5pY2JGQoXrqbzE",
  "key2": "2GLBjcxrWbm12cQMo371WMRMdiHnA95bPLBcg6r4hZRQUf5GFQCqJuR1pStPMzPMovvzeuCUHd4sMxZRHALvoPft",
  "key3": "3udnujHur4mNMMqcFkXzr7ByvF5t3qYBztqwr7SobEn4mZmR26SLbhPQaG8DxeFmtU4S6J6towNdNfdnbbtgViHy",
  "key4": "3vQYvWPdZ58apuMdinxoxEbytvQ3kMZZ1tPSvr5ZjonmK6NoFysY2dWVh4zZSzQXmdc5UShQo8th6kbhRQRYqQ7a",
  "key5": "5caVyW1mJaeQ69CLPYBGNbFM5t3Jep6mNBgkbrC62BCetjHezif42smaefzwYJZPnJkgGnjFWdXEp6NsMZzugrbj",
  "key6": "2C8ofz6cGtpapz4DSA5hbf3zCc4A3LBJKL4WKpKtDfz7Nu2qXN2DaJ1Q1eTnx8KA7WyGkCkYvBLC3Z8dBZbPw9ED",
  "key7": "h6KnyoTfGKod7sjFnfY1LZQBuQdFw8PzajtQijCNnuZ4oTP1XwUFy9kngMWyP1nHhP29GWwN3UxniyoP4piigsv",
  "key8": "4FV8UMHVyArBS1SfKireAujXtHsZY6knTngVPRAH5KmAP3hGg2QYLNbQXtHEepGtng4LSJurUJZ4t2y9T65bPjTz",
  "key9": "3AZZKxT3imBy1gW9DQQcGiqGoFdEYzNfuwQHBAshyPCBRF39dn2vcPNfnJDVJNu1jgcMakfeWT3v74aPrcMRLDDG",
  "key10": "2Fuk88XasavWbBq4RSmKWYpUjJzQao93LrFB9CtNin6ATSGjEQJ6LLdU2V4zj3NiYkob4kNTj59zExDnGAa7TcKh",
  "key11": "2pZdCteyxJNvtQrSXrdzWkLomhAjqSw87bj7pwZk3uj16x1S7hA9d9tPK8mKjLYjnGT3kGaWgw1rMVQosfJXF2G3",
  "key12": "3ZVuFa1SkWrHrPKu167raRNpgVfVd2kpjuEP3QNTSyJpD3UbVRLQvuQMAfHDTfz5oeWTwHsgiaBhSybZ7bfhkNAY",
  "key13": "rWnWXEiZojDPWzrZTZRC56wbPsb1ri22i9Xid3mTAGnr4SGV1gtcL14uSJ2taaNkphfP8wYuQfcHahKHiqXZ7zC",
  "key14": "3A6BxYJUT7owNQAcUjcjVaVNhPitzJ6faBk143HmQEWoA76QmgsYSEKhyh9oJLixdLXSvYj9niF3rVfCvTjwTVSS",
  "key15": "39UNhTmbkb4xxZkJtfM1fa9HEjvYkBi2JU4mrv5PU3bmeJLHBXZmq6DT4TTu7hXsjnCRRYcsSgkqdnNU7zsu5gj3",
  "key16": "2oSsaYFZGUBv9jwVjf2HvaGekVHbzvHUUbw1J4QGyn7HT5ufMCXKkoN8khrRCAFKNgwmnz8hKkseVEE5NiiapJhz",
  "key17": "4LcpcHUHWhnFgjnGHxiBBAeuEEqfcNVgAv6wjA8PJnz7wS8gvG6hUwgVRgq5UwMZD6t6jbm3baAPpiZXtvKJmshV",
  "key18": "3ZMRPAipAANksUxAYFkZiNn9ZQT6H16tiPGcy9qS6HPTLAWAwSy8tU38FTB3KAkG6yQoa5rxZBtX4Ge1TpYVXQSK",
  "key19": "2QswxggYPwCiX6U2T5TSZPtnn7X2nz78K5v7yJ8qLKmPRE5FPyzsVK2ZZxVCNNimoGGw3R7DqQ2HTZuypbd7vWtM",
  "key20": "3826ixzedhEKQnMQUWxz3bJwtyMUSwGp7L67y6pbEbH7ihwy4HCNf1hJbnv2hi2TVJ42YSUvidJrMQSCEyQypErY",
  "key21": "3y18j24WZcSmerBk9avprNThwnzuQBy5fN6Kk5TRZKByMMjo1ZDsdH6F4FkYB3vgj6WWmXPuH8FYCNkctUg2DkYH",
  "key22": "421YMzgFELQWwuGp7W9LDHU66sEgGjYYNAqG3jhCyKbBRNBHZ6SeSB2rMH9Yrnp8cbr9V7jhi57yuwFMALv3wjSt",
  "key23": "41Uk8qeYdMRePXvneMURSNXzc6wpLtq5EvoSoewgSZfdNAjLZvQY3B7Dth3zhawSpTKdcBss5agtGgYVZ7ddogtK",
  "key24": "wVwRdKfwie1o6rkAtFp6AY2wnB2t7EtogVavK61dGTM3PbrNc48TfVqFipS8Qhb7vkT5sGZp22ueQY6vmQb2Y4F",
  "key25": "5QPmhz2KYSCHdJQfjFMeBU12jVDBKFmMUCWVipymEg6UrxijNivtqkQMai75Hofi4uQVXvtTPzgUBgP8PYFZMRXp",
  "key26": "bdC44Li317KpoizMfxA9ZkmJPbq5FuX9TVgNZgMNA56E9pXH6BorDWpYjk3v2tbSFG7YsLBZWfRScPNChjGbDeQ",
  "key27": "5hGi8JLDkN9iG3jFhayndpe7eKv4rHMS4vucfHYWLUecz9h2KKpgozGkQQn3zTCceNrjHck7TfGZz9oYyRWBbtyN",
  "key28": "3ceX2qiZPFCKFGxsdDwBi81pCzvL21vhMoCeH1gQ1ZLG8thLHfB6G17ez543Jg9oLP1w1y57XqqPKpPVc4r8L8Dz",
  "key29": "3QxkBHHYTXSCGn3uyuBxNFVUDwNBE6ZCzUQLfKGTDfQACMefNP4DNR2rKHETpxyGAQBn2ju2Q7nbgUZhkb19cavx",
  "key30": "2m2FV8VfpAyPV72EBVhBZbSMRFFqUEYVnM82cZvqYkudu3ij2JHCY9aFbHXfKqEMED7E6YNGNQjQXNSTd4dSwgbJ",
  "key31": "2piXQeowQr9hhYfv6j7GpKfzAVJyZaqkxzirBXbMJpZL3dirdqmgvkZiPbtWd7FtEZw558eQQM2C3XcahEFgwFSG",
  "key32": "3y9a719ExMLHAWBgNfgSJsEEoDnuX6j7BrkhRcZESPg3LRHCDQuvUit9WDNWnUkjmimjcgHTWsxoKTYrH3LFABGY",
  "key33": "ehW6S13LAaodfUJMtgG1riT2dN3e8nc4WGqrKTdide8SdVyGBpuyausBTnwmoy6GdnqnbqPp6U2dDupaWrYgfpe",
  "key34": "2xmdW8DFRPpuoq8e8wpmvXJxdz8upgGux4Q8YKSCAEhUXZB8T4Ddy14HcSZen4fhrbjCs6MCzcBZbMLwAJBr2Da8",
  "key35": "62zs5rHh9p66AEdtPBccBce3NTqxyUbeEmqsEDKFDcVrTbQB55Dpp3MEEtqbquFke45FAAyJfsYvX24iE5F7n3aJ",
  "key36": "2RtvP1FeuaSun2Bauq9ZECcoWV6ancgfwDLF3F9YNEPPhVHBjHqk3brNfMHTDKfbfnLBM7nep1wxmCxYeoYd9nr4",
  "key37": "5MSdSVzfFZUJBvMqcuztgQ5ehYyv7SHMbeniaZUhN2MFm9qRpUVkeuzjBN86bsmSK73CEEr53swQzhPNFDYsT7h8",
  "key38": "59udAajT7Rz8HhRmJrNaVw9r3b9p2X9oFYL5FqfGZKWG4Er7zGEfSPeMio1DzXR1pUAWTDUQoSH3RF8jt5Urvtro",
  "key39": "4Vmkcj7deWCvKjGPAHi2QoMemjP2dc7XucLpuc1jb23AEXc1qRh4ftKVCi7DMz4QF7n5DoEpDcjUqV2Wgr66ZS6H",
  "key40": "31sWSyBZa1YeYR2Q2oCr7JyYWcUUVYJw2R2cfuvZgQf59p45FQMQ8CqP8g1ND2RyRy9nRGjHHDKQ85N3ZtKyENe9",
  "key41": "BVoxyhSaz8Kveiqdh28q4r8v76UBCxGQvrX9Du6wijbtCBxj3bRR7waKQBzgR5N8aTFwnY9STinaXuAjmxQwJqB",
  "key42": "2eJM5AW8CGdj4BmByYrM6N5TQXWm3ThtPBZvWs2xQUFS1bAEhdTjGNX6AZgNtBKtsp4MVPKNGcQCDGwzUQXBYUvP",
  "key43": "3nYSqk6PrfeYVEuVb7dPwR1At2rgaZsdZAWBepvGSQGfgbTn6m53Np4yDrZyGNdZHbswwS2si1xLZurMKwCTJhK",
  "key44": "81foRbLNvMFU5vFZCtTcMXt64LdopN4k9BXLh31Uh7uSUDzjRXeX1V8SB1vrZDC1rphougWib3kr1CXSHcLjR9R"
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
