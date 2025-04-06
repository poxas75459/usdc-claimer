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
    "4jmu19sccaHfEjkyB1Mr91qakf97W9N1RcmmxCAnAgKR45YRAAw7rj27HakuAsw2ARp3tJKWZScydpnk2phjKoi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nkza7zbs3GZBFqMepF4XJMjMKgcUBdzdWiZDMfJPRhdpx7qt2oX1gRZvZUFFaS1g7K285KS4qpbYShACEJfwe2S",
  "key1": "33NryabHd7XZBSFfDmdzZdtk7iR1tfdMXDBZw3aYyTThauVrth6WrVjEKKGbdGQ43iU9B9wN1khNW4TAzwBfqJfs",
  "key2": "3GE5EaEawqbJscfGvfJfayviF5MLGGKRjKkpr4D4f2eJdFV8Wd88znMW221K7WpRneGp3wtRAoQ7uDHmCu7Hu8xs",
  "key3": "37jgSnrv5fS4oN98V7M9U737KfJEzau9fJGegGbTjFVd8ZYvR7XL6zAV3qvZCd9EAB4RY8sJfMTtX8qLHPetKZFd",
  "key4": "xHaHpFdGCp5WXMoRdZKheo6kBK3t3upFfDsSdiTcYzuESdrCExCEfcZ6L3DCSX9LHnP6LaE4Ew3MSUabnvCmTVg",
  "key5": "3pBbmAYAWwH99fHBRteQiTzFpm4FJHGoA6qmjMuiThswkZ93BL8zZ6j3NMQBUTsmxGjPWKEBdhdUp6XoXmUZyHpX",
  "key6": "32WKwcCBNLGfLJFGv4VrfaGaa69QQExFnnQgvME4giV83HMc1MMWBkTJu9TtaBmzQGUKuva3hzfPaJpStcqpeave",
  "key7": "3Wqq2qdqixcKZEBMULjUrmvzz4QprZiyTtvZgiwAgHMmqwUsKNrWuoN9x6UGtNg7WKc2cn69eL4JRsr1s7PjFhQA",
  "key8": "4AVh3EygJDNeGnrRStvzqC8QKtCLJMiTqjL9TMvukEszrJaihm1AuLq5PDx2RocysEXTtPWud1pbuVaQhGszKcGq",
  "key9": "3ZmdyabeMwWoMeBre1vMdyCNT7BJAbx4FsCMVNquq14EevKywVVbwPsw7gE8VmsHkU64HajNMdZ4gU54YhdtEhN4",
  "key10": "3PRSzsBzBHzVFU2gSsjxDDvkBemUBrFKihMJ2RZjYXYgARYztqKL4FMeEFUgBb6y6q4SzscyszhoL9nSaoTi2xWj",
  "key11": "2zFHQ654Unfm7kAwrKtjdZX3FQ6mVAYx5jqoziD6Krym8YdYAywA5eZsbj313JVAhB5xHjz1aHimXc73kAYjPWX5",
  "key12": "2XayXgA4hhxiK1FjDJ9w7zYsKrA6URJaLMK63zfiNfTMgSAanQ2DhURs3BBQ3RXXbiqb4oD1xNwnLivgmpXiKESz",
  "key13": "5C51DmTRpH5i2PNTysVxo29mYkVPZQa5UEYAHZNYzCQSBUiyJed1aRaNe1hyDi7HLMMDpD97B55QPJrHSCJVoBYM",
  "key14": "4mjXJCVSuCM3obLUNh2TqymHex7zvTJk251KGB5HBbtSepBDmRDkzueHicxi3wC8M11HRKoq1BX1pw31mRMxbZiD",
  "key15": "5ucQv6fKyTZjtM8NPRGToygMPDkZeXaQarEnYmXNffFH2GrXTNxzDvnZkyTU3FvQvdWcmvY9KULr4DoPqTJUVTVj",
  "key16": "LF4fA3gaS2VucpRTu1R4pEyCMj99B888SMpUWNkmEfJqqeavveU1Qsm1wy4qcE9K1fLFSvNfSqcY8ANKUPZ9XGx",
  "key17": "5fsRM1HfYwQtYg1fwhczELo8s7mr5dnWcdSDmS69rCDjgYvCQNgCxcWcffoo2xt47vX58tcWqjvuMUVeyPwSD6nb",
  "key18": "2ab8nTX7ZmaHdkNs34KPmocDs52wFPBCxF1y9Skmek9M8GL81CXEezhcW4e4VTETPvas5kE6qDrdo5C82FLLXTRt",
  "key19": "64HkKJSvFkYjUbv4ih4bcYMoHm86jfbrNbNMhBGfWrUgP3uacFchzyxQsxJbeb4gwdw3TenMcrmueFMGtNgRhuzg",
  "key20": "2gzU7zxKeK1tYJDmybRcNcPd7KhMXbKRvNJ88yXVhLGxR9mQDkNG7Wega8wkDPbVccUKVSkkujgYSVMag2FASo85",
  "key21": "4QDZvo4Td1iBdwhgZaETjgNmuQ5YaxaDrKfREs86URfTGFutG1G2YfrgapyGMnA8MNRW6CYdo9gJTTXzDwGi18s5",
  "key22": "3qJuVsLFR7VsxkmkJZE1FBXBjGwupE8y6YzY1p2kLte8nxpghCjN2ovChPJgW6QoViZo6kC3uG6gRPzupK9Hssjh",
  "key23": "3JqzBenXzBdGaf4b32nS4qf3QLPMAUPeqpPZtUTUzxUU8VkKaogddvpmgeY2hbWFA7hn7McbvNH5SRtsbW5Px6Z5",
  "key24": "62hFzyD4ph8wqLR9Ftf55fBPodGr7L8skNJ4YTGvJWTzkAMxWaxb2E7VVC7bpYWDkh9NCDDTpUDqnDWqEWf4nT6Y",
  "key25": "3iy1p8FucwCqg2pPsJvjbHJBv6UTiKRXiXi1soECjkCmdNVReXmPbnV2ETqK9W2m2BxcvvYwYTv95nDCAzNdGKK4",
  "key26": "53xfYPon5BZZe9P75QYKT5vsZ34SgvxvKaK2BjKKkj5C7SVL7KkXTyGJDLUqFaVksNo51H9wS7RrSuVycGtPkGXx",
  "key27": "2JdwDjmqqENSkEDsAYkemreiaa34vi3w3Qu5oiWFKiRYmShLH5d3ZFsGG98GsJMNiAN3qDQk22PGHGJcfoxdqjUb",
  "key28": "2MYi3sDRT29ZiEkSqKB4LCMRBNahNKeLgFganb2UDoVnmMFSjfdXSkckoV7u7SUDjsTFtKTgLpmgdPow1KqjqmTw",
  "key29": "4S74vXHqFWmfFrDA6Qk19UBDRNQP5jabqyeFkbjHyxBJb5LSUmDbU1DZcqG4kL5o8s8hLS1GeBm78Qmhhs22hQeU",
  "key30": "5swn97LTtD7ftGGBJo5P8q3EeiVkKeFgVQChejCNhtRuaaiDcKkz95PcgoM9RPdQqTUWytjwDwVpwqRtuhhcvfgD",
  "key31": "3y35kLyYmJBMha8FCkaKz4TAKBELdF3gfgDA44Tb39UVWYtFmBviyunAbwHsPRPXWeJ5Saj8FP7F6LQHe2RAVGr7",
  "key32": "59YrXvjunhzNqiqRpLLsujnA1QgELjQPzsPSLfBBmbLCPdxmLGcRr2ykSsBfCbEF53CzciCW6kKzcXq4oAoKkCkz",
  "key33": "4SzR7tddBM4gThWzGHLWsX3YczizRwULKTHz65HQ5CVQUN8L67cBaEAvzxLBKqBqaxcvbFEJXcg8NN8msJcyTeoo",
  "key34": "3FuQTaFje7GQd3xCHoNda18fwcAZAxndt1mbp6kZAhz9DsznJRHpiTCDsbSxMicHiEXUyub7ms43XEbUsEmpxJ5t",
  "key35": "uZrvzef2hWUDDScz5tr7Hg6ujZNtXQZzqpGu1hoVkfmRCS9JzFZFkJZ4xzyzRbM2mi5Msm9mRZeJFPV7SGMwUGp",
  "key36": "Y8oeCPERtY1155YggtujRv7wcHq7YjgKouuuLY1AeWii6HhXmBfZBrgXDf6bdaqYasSiXxothnUpVxN4iPZpYJF"
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
