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
    "37RACbmg3wwy3AfPEqCmM1S2Dex5ELFHqazvJ9ig5dm7yUQZy3fPR3p4mxEVhkefe4bETRPF4nGyyhbWQvameEMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bfFW4yGCZgEqGtSFr1YVT2RajkFvQ4A6SuEGgK7qXQorC6h7ELTkMTRHHeQjeU3g8GY9pZqUt9rTd1vC4xDEZKM",
  "key1": "4CRyhwBBpjN82LywZQ6DcBycp3cZhQboRTjVwr27EeiFG7bLuGSKEhUmrJ8WaumypGAsPsekvAg1vsK3VvSoQE1",
  "key2": "FWEGKpMgLoZL2r7j7GEq3rG6u86JBtdkM5Jj1kPUbvWCumXt2bdt6MkjzzZ9DhiZ5AoqHTxqCEwXM3on9ZbMiVM",
  "key3": "5VGJRpj9YK2ibiKfUiEfUKSmuooFnhaMtdq4iCsWhZBcv9VRfsM8ETuCqLL2Dfmhg1kY8KxZsgPqY3LrKRZ3nAGp",
  "key4": "3gK5qQoX9McCZy6CGTZ3EVjxQedrugrVu2Wudqf1d7N24iqfR7nHAftLfPVkjamBeXvAzJQ7oW3xS6jY8RDLupG3",
  "key5": "64Uw4puzQrkzWVWgXbrAQiWwJp4TxhTrHUkwXD83S5QRZejG5wXrjMeikBRrUsMMH44ibYkBeiiZ4XjFCSr2eeVg",
  "key6": "43gfEhWYWLmpsxNzrBnwFo7CokRZBkrqenvVQVow3MWV9dXDHAJqG7QPtdgfoMtbAKqW27ZHfti8PDoHneSp2xGx",
  "key7": "Ph1jj84NgmbaQeiQkhKa9wB7Tc5pKoiFeohznyHBUfUhDx2Ju9NEEK1QxLKev8dSepEnmkPBcfmMBoUyjEZ8Rpm",
  "key8": "4jh7esREQnhdjan6Y7SmQUx8tHFeSx3cTDwaVa52BgP6KoBPVnaBc4s9sTdtLaxUNR4dYHeCa28Ubq8VKaTdtPBM",
  "key9": "42UKauQAtoNvj7NrwcpG4iJZJ8vKkVjWGZVGzQ66d9ADKWKBF43Z4ukah8gTzvcc55dB7G1aH8QmK71hNihNmUYv",
  "key10": "LUrnUpWuH3qUaPUBreL5EutqvCbDMvEyACemtdcXqGJoDrs2AJ2UcEKx1oBdLAaAMPVC1JwUyvq3BKPUX2rqKjp",
  "key11": "4BijdcWwdpxXBWbRubUgkppKX5mLEPUgpR33TAvaw926mJrYToMewqJMC9bsrwxU6L7dYzBPuNUg4mKgZNPi6T51",
  "key12": "3UM9AGgAVocBeM9z66RjyT3SLcwthEEZBA9zoH89qSiG2T6vh5NA9jnXuPgDjeQeM9yeaTLQkLrQBByCN6hJAh45",
  "key13": "2PNNZqLGvRmUft84HHHm1rsK6HcAE4tPKi6yQHBNRyPuY6jJK8QSBoYgaPmARZH1vYQJoFM3RMhUCs88tEWomwQR",
  "key14": "3YAA4ixEo89auEyX4KkoGZJBT9jUkAXtiasCPvez4UZ8kvAgKNT954oGeQhmhn1bjx1jVwwtRMQyLLRqbtVZyPac",
  "key15": "2uL5bjr1JtVJSG823wJVWrHiKmzs3zKB3JfR8yzitF3Gkp5CZNBg9tujMBnt4FxDn7ZQFmWPfvTCXdCq5f34wPWJ",
  "key16": "2NxczPGQwQ1nJTwm6qSVRzvTfyWm1CWXjZFEe5vtNURHbn1rSuDbAhU44cJSJF9sgxhhA9JGYFxYRAqjRkj9DRsT",
  "key17": "2jrFvJCK5KzT5Zufz5XjoSHXcPrDFSTBiY3AKMk4hpfk6wbxAtwqgUyFrbjaAKYgSHryoVBYikFzJ263KQJYqbg",
  "key18": "5LXJ2AVrcoTafxqLJBh4YqoN6AKMzTicH83wTG3rXqX6MN4czMFd9raLhcuETmATAJL9E1cdX24wA8N3URxJx19e",
  "key19": "2a3ZEBa7kkoscek7FfRozAf9YWaHPC7eXfAgv8NwPF8BLbVJqzN6megLd8H4bbsX7sgYpXzxqmssKvrwUnDQyTXc",
  "key20": "5r9FB3dZjP47MgntqLK2A2GgD5PkxW7qSRTSVPcbPNyYJt8QcGkmnYdHjEVFFM8Y4scw8oQQ6Z5buybRew672b6x",
  "key21": "34UtwW9AqtQXmcvWVfip3ttu8whsmfzqQirHmPdBpyTjfMxgwyAEGMcyP8571rAj39zq9UB3R2DX8jNGwDPoUyTG",
  "key22": "fLh6PTJtP1n541zq9SYA2otARndKh2ZMgMiieSHbL64yK7J2SMWQCX1FpcgRKH8VueKEtC3ngQr9WufrZnmSfhT",
  "key23": "2ddvBnjQh9UmdYvRY13CWajznVf3Vswy12M4jCyFSXFtsH4jjCqqWVLrbW61t3qhb7yJkA5ZmvabCMCSG1N6PZ8P",
  "key24": "2gRCF2PpEz9E4tKsSPHod5Kjr1ugXf5x7a9MjXxqC2VCWxoeawAtxNLSso3aF8KF5UPbon4YmgzTwSH1ErbVMfu2",
  "key25": "iXxvA2uy9KX2hFVGvv7gxJjvJgCGqPedB5u5YpXrkwr7QpRaVkiaqjD29s5rogb4BKtkLxJvadGZXfUfBq4HCg4",
  "key26": "4qAbKMBjTxKhb42B9jqtcnrUmPzioNzRDUdGQkuGof2GivxsDHyeyZwAR1dfNDPunDKnu1nvpmGgZrJ2HYkzdb2q",
  "key27": "4TRHt1Qzn8oRx7ZCbrtms1K2q1gaigdo4y6wB5deeuGX414Gh72rUWbQdWSm23hfMFtJMVmgvakApkH3kLp4GJmK",
  "key28": "2mNH1ipFGVa8fGEU9brg7rANpnpLer81phEUp49HxfeNwCU1NuC52hD1v1YbUL9CriRrMVsVKafo5MDaS5QuNvKd",
  "key29": "jviv6Kz85F8aH5H7GEV3pyp4YnsRegEiZAML96ZgAKB6snpZQtFmDerSWPNrPhwzNSEXCUobPUruLEmqpwmfuTD",
  "key30": "25VLfKLj7eXotULyWCpuZxVzry252Sq2CrX3Std1tMEG1AP1e5E8kQF5ak6jcPLUH2mVXz7v1Lky5beFHyD5dEza",
  "key31": "ubkKmr8pGqxZvCBRCF5dNq7zmUNy7cVFk42pJsHUFZbutHpbwwjFqJuTdsh4gvUphvT5V3Dn4NqrFbcjewKYcad",
  "key32": "396xjnhJiESWZqnpFFT9FZ5b2yPVW6ktBZPME7HFVNp5DVRLJP35PmCWT2wUdvxxeMgJiFnDN6sSjdLQZR1k9L4K",
  "key33": "29LgD6BCU3mMpbopMHJKKHT77gZMtN3u25Jgc2dQUMju1sPqTtoD9CPSbDgsJn3CDzCv8bgFJfR9X3grUkmH4MYq",
  "key34": "4SH9BGRFZxpicAKNQAJpBHGg6JhfkL5XjXZVXjZD2iz5FRnxRGBoQ2hi6HQxsaVBx2VyA8KccHPaUVYspyMh4itA",
  "key35": "4vVKqcbhUPeTNfR6H4hWxdqKR8rEdiyMZSrjtHtMRJrGSxpDC2cAwscvH9Bu7PVQr7NVtq5YA92XtNh25MUMPgvS",
  "key36": "3faDvAEk8nDTCaDavGmr1BwytiXCXJB3F6FWhUTqanYy7Y3poEJuZUbhA8rYuRrphMUrZSrpBqSBaKtvfpQk8d7i",
  "key37": "5YCCsXbAuiWDaEisd58XvN3KzHJ4CATGr2w5us5fA9LK42yJfYJ3Fas2ZrDJyUVd8qR5YCdhTdd6h4jzYU2HPNhu",
  "key38": "62BBFtXVKnvhaRMPR5x336RCnMFZmfvrRjmAGVsKyZiFLk3v5WvKSd6dvxYA9Q9TBnXLGBS1gDMjzK5k2EcHKN29",
  "key39": "36AmTXLCx9EVJLdR8SctJbeoapJodoM1pqnTwF2rfCH6ZGg9RMUbwfBjNJAreXJaAKPxt59CFis6buhGYaS37pHw",
  "key40": "4zNcpS3wtu3GWkJJKDyc8QLznSdChRHV8qbZUB4wXMqYk3xMWtbLJwShoYbr4539V17Hqmf5zT5yE71AcF8f9oBa",
  "key41": "2z1qkDQURer4zdEQifj9znu6t3BMj7hzPCNiFwtMBkaZYDYGHBv51XB2QuA6e6ooh4Zjx9VVAuRYMv9K8SzzooqT",
  "key42": "2q6jcW19Bd6QxNsarAG2Z9j3BizLg2bXcfVnfFRCuuioauQiSaop2Wmqn5ohUhBtPo56MC1trRyE8fDB1UaVTjnW",
  "key43": "47QyFLEFa6kHn84MkpMpVKf1dfX9YqpArzTXrN4wE4YosYaCgX3u5DVUHxCCnrLrL9S3eHAutSwopTg7VqmWUDrp",
  "key44": "2meBuY8q4GLvxRn1LqX2D7eVYhvUfM31xXyWq5uNJjvhwMYTGwLwxvhSYwKhF2eMTmjAtbN81RkQiRSUmYcyRCaW",
  "key45": "5Yswpfxo93NXZchuEYWu7Z9bksSfCKjCTkHrAGvPozFvUgAhidsEGzALB2jyJ2sveej3qWCfH4UEU5ZWK2BYEtLe",
  "key46": "51Nw46wY3kPHi4e4VagcXhzgmNKD4DiN22v764HVfzEiich78pexbadGbxbCpWEpfQuydf6eoc5SKCZdcLE7kWXt",
  "key47": "38y7TJ7krLACUQX4VQB7LbYk5WQQYhwJ5WyZd255ezPY8G3Tt64671DcN9JBTMvoy47kf9uxWPfQstHFxap21Fz7",
  "key48": "5SFxcnwdVugsuBhgVdCyT38DRtQhWFNoeeythRATQvxTJiMXq4fJKRV5JL3ok3c8xmiqY3ccYxt8LQzz34dwdhGC",
  "key49": "mmCVEijRzoyAgALqEFmMAjVCEGrGhokVoH5FTXv5hAi1bJDawvehxJAh2KbuXLHXkz57RpowihqvF6BhFUetAbk"
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
