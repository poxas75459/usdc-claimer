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
    "3znJ2ACbjGyjNsBE5PgYGJqiQqWN9KQVrusfqYsixDhWXjtRt3vHSWeHUQpWMgCCA7q6weawXWjVCDZuQdFo2PdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EcFG7kzAVaxYcwH8juv7CHHwVXEXg3UZUnxnRKWXMUEB96YPoAp6j8zZERLULfUfCDcsorRypq62izCvTBSjtii",
  "key1": "5H8uTiqnpHLaZoyGkbWSDLS51584V7k6npQdSAXLikJ9hqUtB8GwgZ4tffr7rYdeFHnymTYBA8kRgkBH5VpNBMFa",
  "key2": "2yD6BNRoNj2JCM1tA8t6EoT2M4pbdtCpv7LjNFFWCuahYeYVE35RqK5kvu9KVjwbJLq82HRP5VN38dQafwtDJ11s",
  "key3": "5yxrNUFRXARgokDXXPpYEzCjRWJdrBqRX57hHZGniBqCWhV9LS6jiMwqLpe5G9EL9Lg3JG7XhTYFgDverpBSupxm",
  "key4": "53aDj7PXKrrUYwmTpZNEwosqfHonEw78PuLxkMD3cGR8yruHKsUrtKwYR1Mcnc6EHoY9h2233MPU1Mx4WGjHmnAf",
  "key5": "2R5qJjAnGdzsCffAhzp3RycgghXThiRSh9MZv82Gnay69mKmF9VTEjZA8RzDcXQKPFnLmKSnYqwELyySkMnjL44b",
  "key6": "39hrDuUFNEWrE21o3wLdPQKLZVmfXkTRnTWBTuygLJZQmRvqYcGhSC26Jv9cCPdW6ya6TLWqH5K8dERAbcdThvEf",
  "key7": "5HfR3tshQS468o9iUPXdt9SN6zWYTv3GvJoib6ox2mYU74BMEsNUBprHAiuQiEqVp8j2h9rvCmX3ngD2F8b3Gem7",
  "key8": "4prqePhsyvCC3bPmYhSBy89e6ktYaN4MN26ksB4rcCPib8xbsH62fgypf9XUKjoBr3KzCaCmDmR9bA6f6yjhiYzT",
  "key9": "24jVn6BbrV5XEMUUYdWwEpxw9wjGbwZn2c9c7GwyHwz5VN5etDK8KGXhMnd9bRk1xtMAQxPqfMK8hUHgfvWEouhi",
  "key10": "NrSaX4xsVvjr1rRfeMP1Pu4ciSiu8UfzBo6A5WZTLMpVuioBi5S8884CvA6BfvCiWNYE6y43GANn8cGVARkxrcE",
  "key11": "5xjTG2KVrkrVwLASDtsWorF8Xm332u94vgy1QuqMjWM95kNzu8USEGoi6gGCoitS3NmLeSLzjMTW7E7MswSyLffj",
  "key12": "2X5mqYW3HqENDegaEtJgw3cZZr7C8TeiwoxjxnEjRD4A2VT8HK7mUGWidjztpvrsVmg9dfw3yKLnExEeNeo5LJk7",
  "key13": "5cMGUnpE1soiGFjnDd9EPv5z79CZcXcWNrmpo6uxuYZvjmBMR3KHvhzAdKkmGBLsm4PxrtxnD7CfoXd9QPmKTvLd",
  "key14": "2NQ1w8yUZtxZMDzmx9Df81RnR9HhseM8CM3dBubWSqQ4yLCr96YMW7jAH7r6aGgdUrrLu1C425UCGR5QQsyKozsW",
  "key15": "2vCthNCPy6aoSpYuHmZRbLU6iqBHS1VXJcg5DZZniptyLRntB8vRwYHupdcuTQW39WLUZFqd8KXdbm3LgNr2A68W",
  "key16": "4BoPT11FNDzKqGMv6KmXL5gjnS5knVtS79FvSs86GkjXWxm3hCANXNCnd6MFcKs38wbgjFTn2Pem1XDXQkRMzLzh",
  "key17": "3uPW3URbMDWNfKRgmEYgDk5ALFFd7U7YoHKWZhLJ3YYPbbbJoMCYXVh4GTEokX7NMoJKnLUaH3KngSxnnKsw3bv",
  "key18": "5VxKMTbgF21okDYwAsJK6bKUpvYha4a4m52tT1ZuED8fqAGG17kPeJZ6qCDzdBfaHjT6ojBj4EG6WMLS1EeidmBh",
  "key19": "67RuRSdgVVtgoBkJnzExeaPURpYJZEXjZ5PojXm1BrE33maz5YXMypVegH7rgfYERSKLFEdvBNwetxwA7ES2Hg5p",
  "key20": "65y191y3xkGchbHPLG4iTydG9WknvySM9MuZ6mrPxGUUboNwbqvWZAx7qRHx9uuNicFEPKmTtCeepgXokq712qLw",
  "key21": "3wi6hm4tLgXi6wd1bSKXcY9yv2VcHMQD7yPhCT5scsA4bABNrwvf8GxXUk5tNVh51xcpSbJywjGS3EGTzeL6sxc",
  "key22": "4R7hw5niUvaPeXBFxxQv5BGpVGmeWREYvz8WRHeSGzK984cE8wCwNVaH7CWwr66JbT4KmxjCxLrEsu4J5AxAwBsU",
  "key23": "5E8Hsf3rT6JLK29imvW8yx1TazSUPtXjqHp13r8Nhe7XSfKWfkc1ZtEQYYnRxY3AiCBWhjHDkEmWyWh4NL1TP8Rn",
  "key24": "3AnBjKDqm4qTDMFE1oGa1cVL8mSAQNj9B6GReHncBP2M9aTYfGD9bFT1ifRmPMwVM4v75BMET4z4SQJqsF4n5Z2H",
  "key25": "2CV5EYdjn6qrSYKWXQg4d9MEDives2PpKXprQ3zU5rnWHK2c8gFniBWDPfNeGeNj4dsLbvPE6ud9EjYtM5RrALJw",
  "key26": "2r3rNKmJ7HTixBEA4uVNXdinBMCKbwBDy9WnPCpwANr9vzpCt2HRWc8mqC4dLtHtFtwFC2mZVcZFLxzo5vPSnyUy",
  "key27": "5QE4tByXujSpPgW7NreNu4X9rFszY54v3p4dnnKbqrVmKeSwzsvM57nuX1wMnajV3WwTAMzgg5q7PPhYrMRvX3Eh",
  "key28": "56kTfvZkNTMBrMhQGtPX8jRefdHZ3iyT7hPCkjDXLocbrq9EJ3JVBtjJYvY5cyjZtZPkPomPkmhHeNEcQzsomj6X",
  "key29": "5mg1qQjDAmnfA9JN2ksKYT4ewQiNCoBqZ2a4q3zi9zEmgvscG31u8kXSnkJLDmwhFopWHY1yTUwLiWSqKXiSL1dd",
  "key30": "2PJcnBhEFCfRJ42j6ET7DCVRKF3NEtpj7HiCdEsdPoJRUH5nNhBnQ7cfNVko621ACy8zV6SZwNjWzcXYzTCfGj8C",
  "key31": "4wRM9gT97RK3iwmye4mDbQq4PqaRtJeUHYJ5QCWF47FK1sGt1QYHGLzw1gqe7gdGqNcTvRdrajB2YVdmmeX88zD2",
  "key32": "rHdUyJBLyQxLrKfZbb7s77ryQGbzPqoUJxAEi26Vj4JY8ymonKfxAH1YTeS981EqsJ7qwjYPoBq5TfoM2pxFr1Z",
  "key33": "4xpFEPeRfYGGiaSSuXEqJpHBCEnAs3xKi2tjj4mjze3GpRwaSYMy1HZmU5BZPr5exi7Xtbf4jwtnmpg7cwr4UA6N",
  "key34": "aduA6VkegWAjtEJJp2byFXk7BM7gJ58Fokwwzuzjqubgf2vLrzuQkgxEtEEFPKrtj4RbMHX2xuMt1YEqerzQfRQ",
  "key35": "5zmURLz2gLL61qFqNR1gh3dSq3pvTCbNuA4BWdenP5yMBfNKn3pVnUNttDVfEA3Fisu6VMcD6ocdakTLdjCGWBek",
  "key36": "qHQRs4fQ5S1X8A1a2VmBZy7pdtjvzciPjdFFAs65NSopaWnG1Pj5sLnpCMTAfJ56bWy73rkaygg4fu5XA4W7UC6",
  "key37": "2ug9A23JKTDm27Y2bh7y1bqHAVmCH1W4kyL1WcjayWDqd4oQBjYJ7QPdMWTKzqdLRv6A1TP1FPmMjLCv2vy6QjD7",
  "key38": "4xZy6HPay1iHAbP69XNrKt55sQHVxAqTSiUfPKDiwXZq5Cr5zkfopZzBbma6VqGkLs2VpXvNu24J2Aku5uXKwAEg",
  "key39": "5R8VX9YrYxQhF5dvzYzTR1AHfHVjcnaMHP8a5xnyN3iYJaGfnnriPoPhYsn2vfbKknLJ4fHwp4RgxFJRQwdBE64z",
  "key40": "2wD7FZCmJS3UmVj29TyFtKGd1j7NuPhcNJaKF4mTK8zkqoKomFW7toYCgPCssWaJCwsHi6pdw1vXviyDnN91skRk",
  "key41": "3ceHSPfCj29F97Z9HHzVyybUwtpTcJM6x2gbpKDHrSPFxVen5YiE4dCwdAXH1iR1AF4ZHLnXvqs2g3CjT1s47WUF"
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
