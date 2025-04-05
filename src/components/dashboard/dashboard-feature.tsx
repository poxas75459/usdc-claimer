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
    "28cfVwUryCJbinkGiuV7nSNPW5P7jaw6shbnJuxh6HRG9EAhTGZkLboCG7kAB8PvnsPMsaWLBMzrS7H3mBevDvdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zkLwb6cTdPKwaXDiCpjsAuUvmA9uCvGFcJpoWUPvFq7AZVW1kWFV1uvP8uZ6efHsht2xbWPVmyE7C3bhJN26uXo",
  "key1": "2MrPhZRCaFaC2fHL2f1wfNGUaQkns4PanW4CZhCSGosAkkQGUFZ1dg7GBXTPtF4p6qf3p4Yi4TXA9iTaL38VrGwc",
  "key2": "MviGrhLNQJ7nGgseS9B4Vu2LzZDXd5exEHjSRcECxH9XAaFkHBnLYYR34qk8YwVDSNujmEw1muiDkqqESiTRyHL",
  "key3": "2J59esCtisbpvYWtGXYYtXV4Fcr3w5mv84qaN3aRqg1VFbVpaB8LJaY9YK9jjjK7mEKLqy1DSrmA8qDosgywdKbg",
  "key4": "43dkheMSStVUzqdFpcZSF62J6rrVYCeytX61tABDePnifxawpQf2kqr9Mo4dAKispux6F5iiemV8beBd3qznU31P",
  "key5": "2Kber9VmstEJtgTqw1rUzSSYuJBBMw2xUsdhWo9vsv8uoFh98xyq7GUH6Q7aWvjvC7pRYvbkqTRPGewPMBQiDdci",
  "key6": "bgd5HDTHjA6UwEoxttNm57XrkUJNSteHs1rFpf41MwYPeNBXWVY46HRDUWU2WH4FAKpVjoCaaHui91bBFXrkM9A",
  "key7": "4WJXbBzaTV77DX2j1dwEV1gwvDJJbTPqszRtD5YtMTuAytHPoLLeN1ptgnUuVq3nF9rRmXQvgtRYQgSzU79CpjD7",
  "key8": "424xzLmohkJhxJ7YGiqNYmTzgwHYf4ZQ2qGi5BYKW3HXbTn9mLw8eTEsNUpZNm9JSiyHweN4RkJpNjpwGnHBxtV9",
  "key9": "2cS5HnRdoYQJPyRTw4c3VfpQ78No3K64FRqfExNEMhMasfXtS9jmvT3TbozVacm7bDrFk8xyM3wFt5ZJzVL464RX",
  "key10": "2qRrayAuzL9bq7RPvg3TErG6CGTEdeBfrwD3ijBXUGAkmNXwCJ1UQ6HyukMfxCDRXbg4AgG2fyPpHci8FUEiQSBy",
  "key11": "4gUkVSLEkXLPNGyPjf8bsdqAFPx6knRoPfRAeXwgCUfQXLSW4V8KzqPuBFTKiV6hGCQfacixNXNiYxoFGxAL3zBS",
  "key12": "ethUUXm8UWVp15NojTipTSh4UPKLoqwGhy4ebNncuNUBmNQ9KwzBE8SxBJg48ceMRgZZPKDiGmYcf1tNSSi6pBt",
  "key13": "3VeGtVZYUvBh1iK91rcMGsvUfHsPu86LskaXasrfRo8wRRhd8F7fvJ8TdC4LmM2w4qcwSK5UzduMkU6RorLHrtBG",
  "key14": "Vjo8HcPkuuxu6YdQV9yLeSGvqrXKMvbNzYZDMShv6Cbvv7F1xGexhgYyTbctXFbCWniyRmqT3T4nyYGCndQ9A3s",
  "key15": "4AtQgWZGGkm88yjY4V2H3pDXTR4oqsMdv4fLWZocY7c8MeEvgz7JEubCyaKNVao4zD65pDU5jbfAFHX3a2tD1dYF",
  "key16": "1fBfFs33N3AchoaU4Y9a3xfQ9s57bv43qRS75TMj5DSwDpFv1T2H3XbzCccfDFd9RafmDRhL2T9bCipBPtb77Vo",
  "key17": "47q8YrMUgNCLH9kKMEBn8Ct52G6sSQUBUmsM4oADfD4XHfMPnhvjmfTe7iCm7aCUM5vWMaiVM1ndaHf5aG4JdkPH",
  "key18": "mg4CskWspVZsewggZ9YWegwsvWiuVyX8crxtpswqAVcbd8E3vSkLZZhMBVhUe1RUspaXt47qc2nNpKuzJUpBVsN",
  "key19": "2B8eSD7E6xTsqZxHrCWas6gYqRMfrLCmS1iBpPuyW7ZLqENRUJBrCmU2UQyKvVphfS3As9eeh2EvuH8ja9qTRKc6",
  "key20": "4gUHSxKUD11bdsgDtykSy4uct9gQN8RFf2htdvpehTodXrmHXY95RahNPdptmHfKrk4kwrgiHXKtDWofeSyeKtn2",
  "key21": "4emJMSGVK6NMFFS3KvU33AeV3jqgH1QXLmS4q7Wiioq7foKpGowcSWDMuVWN3QYCtHv2JRHdEoLrGYzpX8qjSzoc",
  "key22": "4S9iMYh9qVVteHJFjh6ccDD96V4VdjzAM1BD3KTNBCBUSwQNZUS4D97bBG8L4Q97g6nqHK2ozb1PbqQhfJCvZvAD",
  "key23": "2TSX1QSi8RLvrJUhbpL7tUj5MjBRqFS7RL9BtHKWXwu9fce9Py6UdCjWAwUgv1mySdxpmqaKYPSkjT8pyrc6JBrB",
  "key24": "NYNMJFiuKRjGNjH9H9pXMdCCNP2KVorLpfx1TD4yHSRDyKefZoC3eQkm579mSoNSSDVWzeSoeefVfv2RMa6w25L",
  "key25": "4cEhTzu5ShwvPkSiBn2fvMG9GpuHKfLmNGoQfrYpo2G8ra5RPKjj9wYZsP49Y3xEyBYUBUEuARHC1PwhfYsCyLR2",
  "key26": "5B4YaQHimmYLdPsyj1fYNtDAdYuXMqVtTpnhvAuFBFdEUJCYQZByfcraBk7KjPZsrVbJ2qUkjF1RFqLGeYnDpTMp",
  "key27": "2nbW4vQxgrtwFiQyEdBXzr6kyapNQd32KTViJF7dusGas422Aqf6tcxpyV4yLUwJXJ4H8qRieoWtw5v5VZyXcEGw",
  "key28": "qhQmVrzvpukJYk3xvFtETi1PRB9cpbMsHQj7XwjxWcA6SYL5uAHee9d15u1m28E8mzdf8PfeVSy7L4NLaeZMD1a",
  "key29": "5NhwQDtuVuMwSNHbxm4yKWwhZmawqEZzBdg7c4Wz8q7j9m6zQc33tqy9F1jCJ73HqtrEqf7E9DSQk2dDzjREbPzM",
  "key30": "4ocf2vbxfBUFvSJ6PXo7dHcoa3y1hJujRpS7MMnQS7Q9baBLQZqZuUXTUMJs8LWjJR1S6boKSWC4fcgPAfg4JPTv",
  "key31": "tAXhtTK2xfPfmcAwYCYGHKpcxyzdczRqHmrWr5e8FxaWYiTYqA8DYUJTxVz1Jci6BiemLWGDTck5LUSAWfAPRbA",
  "key32": "4Fe7PBryEdLmjzE9kxrqh5VTLy18U7AehA9ZnNf6BpdFK4ksxmnHJveKaMzGRNXnv1jFXQghvCN9DXkegZuExA8n",
  "key33": "3J1ctuz4jJUrvnEoLe2wHj3fsKKP3i7RUnuhAyoNXMgZ3bEKjSUB4cLMdAp4tvefxZ9CwQUNX6M7cRGUhXhdJMTo",
  "key34": "5kWUFWdR1dvXyvJf3P7qauwers9EBZrcMPYv879yn3dKYXU5r9wkKyURANbrTt7r7aLyU9U5HiizQiw95WS6yCz5",
  "key35": "5kHxdUM2e5kkt9LFjyAzfA4PpPmcnB4KSFBMV7kiQNv4zJFEABHSBZzM4KPZ8wvQPFw9AokvKgbJKediz5Nmb36b",
  "key36": "4pxzLBozh3oUuq5Lc8KMbPkKHAhz7pvjBryitUXvmXGDtesUkHVzhi9Ei9yrPVufE9hv6tTcVof6pbrsnakZgbn7",
  "key37": "jTcLqTiSnds2vnFT5x67qs9r2CJk8af6HBcZdBq4GYT7ubSydKDoGrdoX4RhkvFQURpayJ1xcwEFbfm5Urhc57b",
  "key38": "2RypET9mNJHwdifETaXxZeuq1Mg2sLC1QUd4iJ6rXT8Vom6oqHr1DXtkRZXAA73DaXCTe7DWAKnTxH9Vw7A4fBiw",
  "key39": "2PMsyBHtdCMVjBV5J3XoWzp8kr5fu1hrkKwHBAmxYcd6oYVZ7bwqBsVhzZNjTZ9vZyVUxtkZpVRq7KoLzgbUuAK2",
  "key40": "3dvxJD36Nn6rpixizg8oaUn863L5WcrTuWTwGxzseqME8UyUTFHKxzwuTN7tWdW7mZP4hes2KQEnA54FtwUEH7Uy",
  "key41": "661yfzveBX7YvLNgY8grbXvY8u7ZEgcueeMKCJWEtMaq6wAX46zA5makFRCtzeJ7WyLBdeKbeKKho5sn8fF7uUXw",
  "key42": "3s7EmyvdCf19CEBfZy64b7n7u8siecPcjnY2XQAoUJV4NLxo6Y19G2jwAojWWMByMduQ5bqdSzAATRnZf4uvANj1",
  "key43": "dhE1LVm5GNz1UjxuJfuJt5EL5pqQyaiuhgw3ftR4h6t7BAgZT7iNJ44UHXZGbnzh67Z9YngT5ksomxeBhS4SiQ5",
  "key44": "j2rf85Bosq5Zc4CAddqZfaHyFy8AUcZQTMPZtcPJMUWRogLsELa2MiM5ryU16NbVB4gqYSvKKMPCAQDEiVa3VYE",
  "key45": "4ghRdZHjD2u746pVCrN2uowdc7dDfKSFjNgGifa7iVUKCPybaxZCXCmCTjzaEFkDs5G8kyd52q2KrGDEjhH3TQ8Z"
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
