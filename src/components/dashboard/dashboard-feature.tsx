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
    "NFgTUx4mLSN1M27hcRpdSciEgHzEwEP5fNA5qRpPG8A577EJXjTJmoEZfc8R57bqLLxiv4azHQjLYdK3P3pBaPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vyv2AP5hWdkmVoQzQM2Fq1j26ZwbCj28kJ9EeBWsELW6dRg9La27F21TgjzxfFK9gyKgsvL3MbkTxbW8qZ8UPVV",
  "key1": "2LxkuL5iL7Vg1xvoKHesCfLnLgPKrW8T4Y6TN8vPKMqvtJ5zSBeqqL5NzY1aPAMUU7RFTbzctanV3bP6CRYGBg81",
  "key2": "3MLwi3HCoPCY54567eGQSC6Z2hBdiy2VZqYMt7qhKHHXJoyeN2hX2DXBJS5ZEDw26uwAK7HjbptdM3F2fWH64y1C",
  "key3": "4tFSA2pMqWiqBbfVf6P5f3FFrxJqX7JzhzfWb9FYdwYcnVxDp9hKom41RMhNyTiMHWCi7hKZ5YwnnYYnS2zuFUjw",
  "key4": "5pcuthfXVzBjPj56ejka5RGMwJrLLonVChaSYZiKrYybHf1bnrhKPfoCk3B5pSH5ptactY1P1Q13d3k5aNkrwXcM",
  "key5": "2bWVCrP6xAvYquvRZ8sqxtApF4CKCV6XpCyg67HpSNZDbsHa2rGexMcoWYMFirAvmjrLogbJnUQ6avftgwU4rNNq",
  "key6": "5oGHnq51AeshhD5xYyonp7E7F224NuPJA45feLepzg2J3RnE13iPLVhjHhec3ZY4bYtb6yrwgDwVyLjLBwW8oMTi",
  "key7": "2kLsnYPRzu6QD3nphTdCEVPXzvnksXXkvyEpiHVSaj1pxRJGmZXpUDf9z1YX38vdBgrzGrb3ocfiqiKww4fC89ZV",
  "key8": "5rgXk9Y1XvFJLh7tMJZvs1reXhnPoVb3TDL2nXm5spbdofFEmEUqCVvPwZFzppXnroTAoLgdkJUq1C4Eq1zj4D6p",
  "key9": "2BHEho2LQUwk8LCUDM7C8Bohq9xaGoF7x2F2DtSQDW19BpmVNMgZ1mQYhanEQ34Xjkk5cL86rDSEe4a7iZa7TMJK",
  "key10": "4X2JPTYg9CyfdujbRFXuYuzJxuwyQ7jcdE1PMR6fZfu3nT8n9kukXG4VjXvR1RBXNjNn38aPgVefu7EQwdFaheqG",
  "key11": "kMFpWNPXzFLAS63PjFvMdDm7KXfsrKeAZP98mVnUcb5NGymcR2JrjFcp46eh2EF9aLW4HD9rtaDbNbgK369NDQL",
  "key12": "5vHzuGX1mexbQChAtDqWZowfduoGNbehX4cwiRfL79PkE9hJAMiYGRF5Uy2pxR8f89E1EFBjw8gFvcbTYTPXEATY",
  "key13": "7j3ceuQWcRcX1J4HzUBtbmXxB64AxPissmEoFoUaCYmeGAmEV83ghp34bnu3P9UC3hDJX61Ebk3nxStqoBjMVLu",
  "key14": "2ggs5uwzdAxLH62ErVXWCH7AS6k5piFbgux2ZmiYmuN5dJcEgm8jMxh7CrSqtLE9x4txNart4kjHmgnWEfXHJsbZ",
  "key15": "2EcJ1mE5BZTNVCWYgThrnuwDHAY8tooopRFXjsFqAhsJGtQLB8kNq447VpysWYEW6QmVrrRTYAKDE987no1LNNUW",
  "key16": "ET585eeYE2qr6kGwimZkvmE12J6DiLvxiTt6vnc6T2S7Ya7KCyp4vWdc6swdjgJVxVdQAf357DJZzS9r44aoUhv",
  "key17": "2aY9nz8497gJ9xwwbdJJdtL3ZC8cs9PqkQvCphgtR7XDYeJCTWrvZYozUdfz2u2ji2YeQujTXJHn1reNYq5ZRB7y",
  "key18": "4WrHtK7tQgSxMBUTNGt71tU6wK8WSFkyUFYYnb7H3M4qUEMBES9wmXYhnShtNjEsBJnk9qpDy1kMa5ayySwNu4mX",
  "key19": "2xHTbfo8BbKyWQjwVzbJYG2qtgxQK2VudfGjmf5KuVmEziqfkmxJuya8mhaVYn4ekuYSutMDgno3nLjDA7DDaEQa",
  "key20": "3Wx6yK47JfkaQqW8yNGouGj5ire9T2waU27hnkeXEe5pcWHekasDRi77fP3ksDKwREHUDKC7sq7taSmLwC3RRMRV",
  "key21": "2Q1x7RduJkZukzgnrfqgtGdGw9hoSaFn7pEvufeSHUx68UuKQChLdUtawMUvgKkweVYoMDeev53iTrErmVtwyFRd",
  "key22": "55TjUggTtGa3r5tvaBcoaAnhD2caRTFyy99yybMU3WMZ6Q4tRGUpuJj2Amot9NvNwtnKhJVwbZFAqkSyD71PSU1K",
  "key23": "fgxibAENfDQrBnoLEtHHe7aAhZVhH5CEobj6yGcZ9YEXyqi7UZyu7rCKFgWQaraWLAzrJyMexudiwEQcBjhgWzj",
  "key24": "5F9NGBNTo5a2tpgAzoDXDFTzzMZZYtrxbKJWgwqqptg7bdvXeZxAb7RzAGx5uZD5kYXpV3UxhfpcZCCNXjbukdvJ",
  "key25": "3FmKy8JWitn1EFejdaBmKxEkbgWhdbRPb63EM76E8au8doeMwG6Taqfjxt3hxXxHAhb7q2ZhTHaoQVSHrYGUuatT",
  "key26": "2eZ1qob1rhERoYXLDbe6b62t5krs3zY6wXTYebkPM6cBXWxLuA6VPjem59h4LEPprMZdy7WstvTyady4MgP2LEcj",
  "key27": "3yWee9d5ngXNMyA4MrzuR3xq7Ng5xcEb34Q9GG8H4hWzZVwuacyi4KXucRvasxM5GimphcbzKn2jeRU2My6pvnDT",
  "key28": "33RJPZ2BU4MyPV6Y99n6iPX4w9qrQZb6XGYWmJ4wPoj7AUhbZfaBNmLAWQS6K16qwEt6pxjUtsqWoxJ7BQuQimwP",
  "key29": "3jaU3d7ycPAeyXQbxLoG3kgAnXNEaoGvBs2feP2SzDpn5VmsnGg8LMRPLW86KLbGHjUaUPRvHgtQ18k4ieJyJ2Ct",
  "key30": "4NsTHkXBMe1CAJr8kLNwPHzNfEeNZnR4ZB3MeGkCdcvmVQ8sbgUFEwnGsFDvtwHBpt67nvZvNzW1MwqkajRsTJbc",
  "key31": "GsSbbDaSGS8zMoN6A8XnV14wWh7k3NFtf8QnkbbaDDShqDvVGhbpTB4ZdL2dZqYyUeVjE9bdQjiUJRFRbv6Lr3A",
  "key32": "UEv7pW71yoWYwncxwk3pKRN2fvbqsfr1DeLCUQU1CCaV8hiLs8HeDymYQonbqEvktchSF8GjgV9zJfBBkMeoeJm",
  "key33": "PVVQ4z313WPiQiVqPnMsLNWJua6yJsEDPSvKDZgbdHGytjVhgoTpN6MRGFtfApr93PbyEStnCX4PLLtybcFoNhN",
  "key34": "2S5kbV4XH4QN18vbwtES24LSFgxgYf8EfpjX9xZvMSGBNH349ZTo3gWGD8MCxjsEs1YuVnSmWcjkNpDhRv66AqYY",
  "key35": "5e4WiTVHqML8WWG1msnkSRXNjum6nujWSVTDD2gVxDGuDrYFhBBesDijrf4iMSkZ6Pes4MoF1PkmQs8Q1GoqsA9S",
  "key36": "3GDY6DNaL2A7K3C7my7KSDd9DwHxGBAmxu6Uodr4wwoBKAJTQtv2iR5A6gk3U11t4TzBQ5mTLQA8UR5UDuy7NHY2",
  "key37": "4MPjz9fPw7tki9utZNeCSKx9Z6g1K5XayHAGiyCZMxmhW2kSvP1XmcgeGhMYUiKqVEEm3yYYd3s1hjAQXrkXHU24",
  "key38": "24NdkzrtcvvRFXdD3ActV8e2RVwdPGzrHTsmBGKRggLNBcr4riGcgfWpLCcnd71FqKQJw6AGrD7aiU9idBUPqT2Z",
  "key39": "fgms4LSukCNgL2fe3B65YRWqGubrUYskS1efU132T31cg8pGUaRPyDBV61KyaGYwkreYSo7Fw4kAYw1nDDcVSWJ",
  "key40": "3Dspx8DnXkBkWTpPPcFyE7nJnd6hQhKAcSS1VkP8P3Qn5n3vtVnrVCAK79MJiziqkGTVYrdPQkK1JhmZHzQzj7oL",
  "key41": "3sXv1sVdYUmbwhP68DwARJ6S8BxhRkWE9rErBexT4qQDkSjMuUZKfpSNPxBhaiLbiX4JukKYBFokKQDRk2QLJQNL"
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
