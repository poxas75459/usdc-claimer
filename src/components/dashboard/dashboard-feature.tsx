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
    "4TfeDyPwyE6nPzMbWEV34zsoqufL3vBTEBcsrDCYAb6fprchPFQxzCZQ6Arb3qgVqYti5XpYHqrqCV84daSqs1R1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A2wqJn82YPBP8N3aBrPVYgEHrtGHWMaXidrJzACBCRpY1EohzsBb1rZYHjsvTr4JZy2iFvbpwFPpuqhHhMt2jDt",
  "key1": "5YdnHRH1tkq9WzhWAcdEyU8E14QofC5UkTt3ZxNWh7aRATCuj7Z2ukLvRnGnCxqieWPLLkYuPAtZUNgwWfmBun1Q",
  "key2": "2c984Vz6vYkNaVprCKzdq6a3nJRmmC51NbJhF9cRLDSjxB4drYhGXr9qS9UGB1Liv7L9CNTNfNfuymAmDB9Q6Zy4",
  "key3": "tXxde6mmauxJnJ9e9251SaYAwDJYadWCaEUzrULLqqz2fkuBXfWrctiBtTRtmPFf17pQnbJHJjMr18tU3YbB8qr",
  "key4": "4dnTYRK5SfE5o9oPpMC7HhgteptiszuUnysPMyZFo6DDPygi5twGn1F5ty5y7wgphnketLBtfr4dibkCVpcbscYT",
  "key5": "4cTiBbiW6SdC2stjGkMUgsN43BJkV7HxFk8hNaWJ5eFup75coMB1E36M1TrteTXZpMH3ai4srb5uutF5qrDZe8ZS",
  "key6": "4zvF5yVMPKjPvQyZEX3P8sLDfgVbHdS1hncQFQ2s8jUNXUqCCtVzMQb1CyF895uhWSu8w3SKHspDXcCjitex1A9H",
  "key7": "39MRQRKxiMUoEjtMSk1udZdWScYbPsVzv7k9DV4WiVnjNWjcaaUZZSx95VfdJvhiawvPCsksDFEwyBZ72GjtpWer",
  "key8": "uW3LGKWw6VsNoYq1N9jzD8hFpwZfKFk42F1ykbPK1FBoDtCUHVX8Y8S6zpiVK7p2jM1NbLYikrc7PytWwHksDHC",
  "key9": "4DafpQXqGWgRLdEo8oAuChS9AzUio7bdBkYX49p8zBrDNqD6JRncXrwEeYkabreNxhLaw66vZN4qeXS5jcvpgKge",
  "key10": "5wKHezr8CQveRjSmjju7GvLF9N7jztUfynjmzPYCMxL97ijeKVnS9B7kvDjtJyNresf6EA5vRVKpqfAcXDttwuva",
  "key11": "59kLiHSxtw81SA2yCuHdB2QHLiZm6LZsxSLWhL4myRFSGVE4rtzUu7MSP7GC8oGBtM8ktncNU82Sre2C1ozGrXbK",
  "key12": "UDi5tSH7Wj9PEY5NajPgyvv2q2XwG9oPq6R58kPkx1omLhw51WpgvN38pVdEHW1UwSBzNcc851FQB1sM9WtCFje",
  "key13": "EwYfiXJp678XT3jRTNJy9X9q3s7FKXGCAcgd5xffJJDsVAFjBQjqcwhnFqsqVxf5ftXJL8dacfuAF9fbkG5z3We",
  "key14": "2LJtHaLV6QdvjejGRJTtSpYPJH3sUSkRPkyEZeffeuQmkjPm99DEcgczvHpuWaKGJS3vu4XhW2qH6eHsuBzEmvs4",
  "key15": "3QQgoT8EG2EMjQxpxK6LDxrSuJioskC4rCtzdg2xdXry29iqAEgHrFEUVzEygL4yaw7SxdnUSNV9mqceUvcMuDdg",
  "key16": "3NGaEoMnaxPCwd25LVyviioHqotWGj1GE7dSshdVJxBm9HFsKfDBPUXUoQf351XH4kLMZdGZd78ivra5TZGhFwKe",
  "key17": "WCEH8W8Rzsx4urv71XH5Pgi3tfrcXyY3jc18WNbF3NEouBjFvE8erwd5HEJyFMYq7myXvPLpq1RGTjytabE1VMZ",
  "key18": "5pSA9mkP5kpmWQjYoT1sD9SoxspcTKXbgVNcVu1441QLhow5fAQMDZeZTy8rhUdxvf1midvD9JqKfsLNnzPysGcG",
  "key19": "3QNv2G4a1PgeMorVpTC3KQCPryyr6wdtH4PVAkwWJzS1ZCW9KLU3YUsGhJQGXC266Vm6yZ6LZciJyy9Dtdk7iJpM",
  "key20": "Bd2ud9txPo9eQ3tbN4kGoCQrFVnktu5AAEHJvTbPVEw71FR2bcGZ3sT3s3DoCH8EatCb3HfJYBwtaSQEXmKHDsL",
  "key21": "2uA6ZDUaU7XLRPMfKbW9MRBZWJZsQegba1AyAWhaLpESoihReXAfMRNSPd8QyisZsrfQbZTeKbtqusmBBDK9b2hi",
  "key22": "4tayP2mVJvJufCPfqm8D5UcuPcbug2DKfq5s2VaxQUpECMctKMKtoWKtXJRNtVywipAcC3bicsp81E6upXMd6An5",
  "key23": "2fyWmjTa5q89gyZnH2ptFfwbCidVvsC7f1CmEzqiQCFy7CbAMAF9nVheJ574Ufpt4w7qFg9qzvvRcFCKfpb57ejY",
  "key24": "5AzTefUcyZGmFCfk9EE7b4FQmL5AEgnbpME3tXUvcCMUm3VBnC2ne8xEDSJo7sENs1tQeC5LAH9DnT4gMeWsG9sK",
  "key25": "5HHdWqaJ986qSWvPN8BUKQjEm1shdPf1rcCZT9SCMfL39VftpXjr7vRUy4Q7JpQLJb5C7n6bxXbCBWNCVmjtX2HD",
  "key26": "21yAXiy2Zho7a3Nm5TgiiS1UmLxA3h6txK7LvFyFMUBCZwniwrWDHgNNSpjmbkGH7v9nSeUTsyKNuoWmHxge6jCy",
  "key27": "4VrrAGXJFoWCeXMiiqTL2gHL8Eh9xxfbwPcG5YCpC6Kf5rRemv7xwaYS5pR9jfEFAaEXGifexvp9THrmEjpaB7mw",
  "key28": "5AwerBCG3WCKKLiK8wUNfPAoLh8FCgw2BpN7XqMbxZLNf8CgTJJUMEf4uyyz6L6E3mjVHr1e16VoLdhdAHhtT2R",
  "key29": "3EyMX48ZjGVXhZb3Sb3LgNMw2tRbogoBzptVv9yxmzdrnDn7jt9bnKas3Q6Ej9VYSX3NR7c6jSjoBqXq3cCxzQET",
  "key30": "3npvEMEgcvMC7kvXFHZ6oAe17iHqP1eYhXCVLsKu941Qf7VPsD7UqfMwistCgznRq9JuVuEaAKJB5t8wZeGDXiLe",
  "key31": "5FtaJexmPJs9DcRfo7RCyoxb5EstF38dqoyUns2RqdoMuhnzj1sLgQcsohAAeWLF1SZbkKJdgxPtgDrnGmiBVbWN",
  "key32": "4YuM5Efg3wFjtsuRV3sy6Pt66V978Z6ijqkbVV9bbDqNHWABdZeDwo4en9JSZjggexBQ2SboS2MHXwu5JxNVRdbg",
  "key33": "29CXr3G33NDjNid2pKZiCCAPda38KbgNKek5CMWUQrUgm72QJf5La6Mn2UEYzu7HW6YH51zsCKG8WfHbpVXG9iNh",
  "key34": "UMurQ5CQnpLnBKDrvwe7oB66wY8fZkdJ9HaxG7QJKTz3ysjvBrgUNQcw7d7fZp3xyDt8etLcZiYeVTEtdssVui2",
  "key35": "2Z127jEFwZeSF2ZgtPNuRQEoepXVCtGWELXEo8JYLZSH413jrwdbCGWWLTMs4icWg2nuNUgjMGjZavPY9wnMk61h",
  "key36": "2v44DVfm6RaML5yvM2eTeoviSPFCZTagHPfrXjnxcuogvM3kGpp7jF5NrjjNmP8NVS8kH6zBaW23AeDrrpYtegbT",
  "key37": "4yeRWRHnVDLiQsTHQcjNkLZqZgz6YxUkHShzN21Mytag7hdwrp4cGU9rwkPyrbWJ1YxtUDoTfdCgvmQ4XcPpWDKW",
  "key38": "3esPLACAVanaHNzq2sMSfAPJKFiCpDztmkQiAhnq7kVJZuVQhZqLyGLhFkVawQbA6yENiFxuDkanR2Lvp3p5Saed",
  "key39": "boFkdauWP3DAKSUz1rzwXtvJvTrCckoj5iQpEjUihHdh9bBN6SBfA1TfReEyXJ1pRhoxNYcSnN6QxBFfcs47z9K",
  "key40": "5MtKuLczTS3xgBVMaWotnD3TJMxcrVUdKTpRKa7TU3UhNbhv1rymN6eDZKjpU9deg3Aq1E1k5LeRncXeqm9wn6V7",
  "key41": "5Suehjxo9w3myf8wzrawNkH6ekqZ6pknGFaVaAk4bkdJLSfcHDNwjsq26wHmsNu6ub5eDHk73FXVVSiwGMUHbdfg",
  "key42": "hqqZTGkwLQs9uHoz9bKqWwxbkW9PSmYZVJ6xJSreMSJpeAqJq6Lncw8VdXWpagUaZQddUJvd5CLKqohPatkeczL",
  "key43": "sjZy2ThRDx5Ns5CAA216VSQqvnzA6zNnEaj99van6o7CuJV69n61Bz4w3y7LSej6QF7Xo2Fw4KoeuFzCBA5E1mG",
  "key44": "v7Zr8YHzt2R7jk3SmsiRPWnN78tohepMnMyV4SGmC2vRjNCzRMYUNxkzBGcMVRd5mFuLoBiNanAiCrTyh73cC9y",
  "key45": "3V3jaL2qbqoKjtYJjuAaRQFofndA2pPPDXhEWAwg8MVS6SexqQ1mVZTw1spBM4B1jHuBhaPhiWZPXtADYvjMyjot"
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
