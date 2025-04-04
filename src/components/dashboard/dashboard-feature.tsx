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
    "4pX74sUjBGwBGZ74nGH8FZKVDQHjVEZf4t67cMMeVE5gkR7vBuY9T3TwY91E49XsTpDJQDCDqb15ACbaWvPAqkuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQj6beN7HcK8Xc5esjYDc91nqGha9G43CGhL5YpfAKoYN3mi7iNUVL3Zns85derwiFQ8gg1U4F4vsfqVQUgMMzE",
  "key1": "Tfywa2aMoorr4124cfcu7qormxxnWZyp9XcH7bdnSLTiXNDao4L818JikyrqHu9Wz6FD7EyWVDG5R9s4BHHhSba",
  "key2": "5tj36mbXCr9D3G5Mcshexfs5YP9pV4YsRqKhd7KgCivFsChEXFpaP1BEQ6CFV6z3tnXAuje6R35uCE1RhkfG3d2F",
  "key3": "3AuyNBtBFAAC2WEv8MwqSxJQ2EACgiULmHqzSY2K6bNurRVnBFkXNAHLCAH7XEW7M7NVbWRJSUmgCXBmp699e3h5",
  "key4": "4s35mVdszW8twT7XMtDgMhTAaiu7GRPmERpNTi8YZTMkj3EWnosUC2TKuxWh8nLu7DEP3aV1LbzSjeGsGiSyFgkg",
  "key5": "2q1TqSAnrFhxygdtX6mPqqNqnpwUXx7ADfJeERFL1XKMMopVnmeLbP35JVUbY36tcAae2XbUoTR2hBtiPVhch4xo",
  "key6": "3DZttsucHWJH77fbidxxgU2r9sWZMrwfRu5ZYySvnM5TSuskSaeQWkESnxjhLh6s1qbXwNdDmLjjGTvhiCfuZ4y8",
  "key7": "4Sv9p5N9xpokSUQwtsrhhPf6TTUFTu5W49Nek2zhoNzLKE6ZsjfRobSbSgDpXWwkiJqQgYp76LABe7bWGJDKexXu",
  "key8": "ttsL1oM2V73Sxy5ttYJQYf2dNJcXsRuptgZWv6ofYjhrDdeMbKxp3NcvKz3QDARguA5HeD3TxXs9Usf23xKwyGW",
  "key9": "35fDhzz1RHVA2Yc4kEXSVMPuDVBNe27iikJdqyizngdgUmLMxkeQpWMyjrRm1RTpFDjpbFtZh5HYU2Anb9juTjUm",
  "key10": "66fox99HjZcB7uaPWA5d2xkZqG8vtNMWpydXMcUXZywCdQq9XNqhtzcVxQMVwPspotz1GNeAYnVBR7io5ZRyXwd6",
  "key11": "cxNbCiY4cxNPAu1E5mhGVuL9AJErxYaFHmJYMuxLhZGJFTxAaQ2ASqiTpEVbygke6M7XS4s3K5CThCsepbRKNqy",
  "key12": "4et4oKG2aXRsaxWSWLDk2Qd6Y5kw4NdxDFoJuyMxKsegT2jiffPxxh6acdc8N9gHU2VgDVofgiMp8UosipdWFwXu",
  "key13": "39biaHLFABYBiSDr1xThZDzNKbdS7Dd6Ha8RYHseKNv1XMHaVU1CPLvvW16ZWLc5aRRNiLPtym4hk5KJU2Y9WueU",
  "key14": "5KNLZ4X5FrATSTGyezVgQU1M4AomC65yitKHUJ8fpenCMUCT2kCd58CReADAu3DHNVV4HKmoogWBkUPAUgWWRikd",
  "key15": "44YVbKwcsM2Aetk4NDJb86xYE1Sj1oYxgmVdBE6M2CkJNNEUuuCrTvrcKTgyufVRhAkqa2sMU3KLah3sXbD5Ne5h",
  "key16": "dnhQxXZyWcdTZMmVFpgL4JQ8KkVnZtAihGRYAWJtuBMk9t5km1JwjFaaQKnSybZkwM9BSAbQfpNQ1XqRvzgwghT",
  "key17": "52vCPyS56r8YKyQEUtpydJxKQc4iSK78bKK92QGBqGJ7jNyk1JNLf5hoJ4mwwm13fgdvWFiqDKyrUoq1ZqfGAp3H",
  "key18": "4HJJutQWuck18mh4U92sN7xu5LoffaQyJHcBDFrSS2XbnTrHT1fWj8EqbK9JpnZcfaNSn6YuQENzZirzL2Wb7ZeY",
  "key19": "2ExBDaVU18ma12QuTcmVE2A8Gz3uWdZpvDgMpPMDpMnWrk41o6h2pF4Z9xozNi9Cta9wQBVwNa8uAr2GjpgU59Fn",
  "key20": "e7JKn71ZUaEwJaouiQBAaSKwcmb5DYaeaubLjLE4JNWkrKjGEnRZB6XanXHQ67AmgrC7LBa7vCxifsFCF7y19nN",
  "key21": "5oHnJNL78mZY7JvYrkTtpZqxt45xE92K1CZcmLB9zDW27wJK78vRUxPagnz2fUVQ5kemqDdiByFdYzQx11Gdgjvg",
  "key22": "dW6zDYhk3iK6wmP2mxFR1mQ58hnzaszKwfENZVr1aiAyW39g1eHFhcnce6GDPsdtYGon6C2fiRRvHtuCnYmCMeD",
  "key23": "2Ke3wdx2WEord6Uf2jdadGa3NGCyDHNCwCRBsHC5Q9p7sWWDUJCVavVN1wrwYymBVFDJRk2QbCLEV3TXSEWF5ggb",
  "key24": "4pknteKwRcHLRTxCt82DCGCRxursRHVP7yN3FZug13WMKPL7fiqMPp8cye17zWVFcih8H5jKgknUwFp8abSZ5XXW",
  "key25": "EtKr47mr6JbFvXjNAA2VZa4vjUPze1cwzMeZJjUnj9KNBqTx7MUhQhsAMA2V7Bvu9yHA18cYcmR4rAEm2jWZARC",
  "key26": "61raUJ4WvistQ6pLpQDni9QG8tErDU7azxoSGKG4RB8MoAgGPC6GXcWvVUzuiL63aPjNHdyT2A89FKTmGagfQSEE",
  "key27": "3GG7VSXgyNVAMeCZi3S45d99nJXVHP1YQEHw1qYTqSLnJKWVAYk9gFThFwPzR7S4cn1gNrUnMLyyEgBCtzMWav6h",
  "key28": "hguwt3XsBWybKeFSNehvxBUY6g55Gj2EacvT5noWzzrqJdNxANRe2f3nrFbm2QryeWMvgD36ShrJmmRHGaz8KTy",
  "key29": "42JYCNxWB9DQrDSTE55BUgXFmscShV2t7tJsK8BNGpbdX4XXiQn9oJ3VewH5eoYEzkKkxehQNE5U5XgtQQBvCFob",
  "key30": "3oZfvCY4F1egLkosBbixM7dRZaKRd1UWxZXdoF1VKwcKBS8htpv3rUcxdAUZBMfhc1Cf2niH7iXx8azMRt4FUn7R",
  "key31": "5wHujMrRxqbrZV3ehGJAjYPdjuEZTxv2J88e9UhSVGQKpPJ4gSdWT5hzdTAp4zyTUWCjRk3C6X1FFzQm43AMCM8q",
  "key32": "5JF4Q1uKdRKWeZ44WzQhkZDGJoivDhhCRMjDZJe7njVQN76nXXb5qDH4RxddZbyEF79imHd7nxTT5aoQ4vgruYwD",
  "key33": "D4sZ3XnztVG5BcDCHJTQGFYmDhjCUAsYKATBWCg3PVnGJrJPVApdtupZP1oe1WXEqZ4nUGFwVbLJu3WyHThmBoF",
  "key34": "sZnLGToTG7D2dnoekXkYv5siezcwoB18mnV4rgQDUU5EHEkypB6yq5HNY6E4bJ6jtDfa6NRv9J94fwXaJBZUSei",
  "key35": "QzNjZkHWPGjJS1GfRzTXXhHuTTPfQAzySgBY5AQwDfRxLodpJ3hnp7RPHb3WMA18hW47z2o9C1we8MBihe8J5NQ",
  "key36": "5nxgRPyYyX84Y6sWcfsY6T9rVo55jd37C6Dh3oRWDwd8KrCar4gRwcDX5erKKQRr1QcVrzdJTjiiCjxbfDTKEQTp",
  "key37": "5kR4ixqjtLbDxLptbZu3Qbc9oJb2QL7vqod5XUHZB52MFewQDrCo1VTwqVkgpvZo4CMAmPYM8RuTV9mk4h9gX3Gr"
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
