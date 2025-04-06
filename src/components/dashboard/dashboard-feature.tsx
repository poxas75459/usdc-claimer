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
    "658xL9mT3W1q4fVQaFcbAHuUuqC2M68TVjVRkKrJt8u3ZXSnckcAtam6XX4aKzvxVrUNckto4wbeXaYsx2AA4ij2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BphRDDKQ7GyVbnVJEXDmepSdhBqU9kUaPn3EHoqJo79TN6oTVJDPiqLjVkKhoUUy32qBP1aWyCGrZagCYwCxdXz",
  "key1": "GgmSP6wPbonL2WNNBrosw4oUDtyXSm8LHrc3A4cXaDU1YcAbPZ3s9tFt9WvgS9HStgKfNAxozk5XBgezmYwVVqs",
  "key2": "2hFqXG6cRvaNb9ZCruSi91yY3ncAyAQYHKkMVRjjo6d3XB9CNmzHDNJq8vZyNafwmjJxKsbGVN1kjnv2aJUCDV9A",
  "key3": "2TXUaNempcAK8TtvpoiUr4igF5DnuvAvBt4wGsxQ7pwU2r94B7PaAXq5puMY56FHYn4CxnLPtfyi4oGaYNmrMcNL",
  "key4": "3AF8NyaMgJ4E9WQtC87DzzvM7o8jNogQwjvMSERiZgK6WdcRxZW9ZrEmt5nm2zWi3GXv6zvCibn2yjyXLfr6ysxx",
  "key5": "4b8HFCfonzcMTQ2XTPVvy5xhDEKaPUnhPKDsQTnTadVnFHZniy6eoyXkeR2NgoCJqKbe79Nx2rzoLZYDeVNkzhMY",
  "key6": "32hi54nNCtWjUHk3Q64zZ3RVR7XEsFBSt4NAkLji1xvSW8L5HFqtfcJJ77bsCU6EsPsYNANzMgFumoEQN4jCEqU3",
  "key7": "5wgvXNJ9dJ94go2VM9RJ4n5e3GtX7RDXR68MA1mr5SidPgh5JkC4iGTAunxY7i49JdnVhS4FHtEtCMaSpGpWQfQx",
  "key8": "5bMGuSQZCmUcuQJFHV9VjiVC1xYfKUoi3sa1ovunk1N2BGip78jyDBXuysgLjTajfqJCmLoAKSPaJR7ApjXssMSe",
  "key9": "SK7pnbBqkSybnmMLoqq71g1awDu4Fxwx3DvycyGT3Bosz9bra4VRSgb4gLpsqSRxhLErePWMknv5wk7pJRb6WXJ",
  "key10": "4ZPexcDQ74Tpo7dWd89tRvW2wPeEYNZM3iCEUAfgeHZZkgJUq2D1je4iWM6VSrBe8vffSqUCQUbBB5Zwfi25ajdY",
  "key11": "56J2yx8Xj96uXGr48EA12y6QdWsRv6rRjPRhJEGN63jWNcG2BmpDqA3rrHEA7JVjUXwZkZmYBjLfmoBDHLThpcgm",
  "key12": "41izs4XFqmkwTUHRLnY9k1vA33q6nuhrTXUbhcRcyCJJcwpNR5eYha6kL4m9vTUFMQFJNHJYsm9czGeLPXjpfMUH",
  "key13": "48uMefc9JVkUxwiFLgneU7EUNtXiTCA6WvM3XSaLXa83dpnU4b8hiuRFmsoJEh3HekrNQff9drv7XkMc1jtgQVpN",
  "key14": "4VvAvy3E8NxSCQtr4REnWtSyiaMbreXUfRXqtwkyrwztMNxrF1VyzhbWuF7Sy5ciud1w5epdbEtp7PVS8fKvF2Dd",
  "key15": "4Bwd7emXcSj3nxPQ9yXtTAPmKNtZQ3vJjykTbrzt4Dg4JTpLf4UG9GnxsxfUwYsqm84WXnveESkhRgdU2uedvnNn",
  "key16": "2VXQ6EgeuGRR4t94PEVPB4paGogz8XijhqdRsvUutxEDsvFNmn2uJeW6zZJaWSg8cdtZFs5DmkaVApxeDkc6oU4H",
  "key17": "3RGSTer9E16qgbe8ou2t3w7uGawtSoY83SP3aevp22gpF5y9yUEv8RCG5qWSvVYpiqNCA5enaGwDx825WrvBBzUu",
  "key18": "4b812VUTDuu54ggR9rbFTWerL9PQwDVaX5eemDGoNMqVFrNXKDWmhkQs69m77nanXANacSXb1FLxTYXuzUjqaR4d",
  "key19": "2K1hj1V3kVSqv19tP3MgMJmeYXSF4PM4tLVvnNPcQN7C2avRmWfPeNo6AeTiAEjWecQDNSaApB5d1cH7cvBtY7zN",
  "key20": "4p6TQ3suMmyfHLZ6CJLD8hEeZhkd9GSKxz4b8b5nmdBZNVi7514J9SJdiwAXxRtg289os9NFe11ARXit2SaR1nQn",
  "key21": "4rbKkPFkHF2w5QhHjMR8KMmHmupq9gdHyWnucG7oQJWDY9SA4voCmrd724WazNdw63KuuHwPd244DNnTjGqFJPNQ",
  "key22": "5DA6Na1meqbZgQJXcnJ1NFSUhHcnzf9TphkVP74P4koSzJXKNnYS7JArBPuLNBp1MWmaVuhuQ7aqYi6NaebrURFs",
  "key23": "3npFCqWEUBFVFVg9A4vk2yxrArSCbMVRGHPgLuvwG6GBecB5VY9p1f95vLaviKpb9LVUY3hhzKXPbbUat6g7ru6G",
  "key24": "4sp18exLxCRiSmvmcrDjBiKnQNqNaahh3nyiy94MmYPwvR6QEKDUdHFhmRtJNoeTxLcU88jhakTdTNYLYjLNBdH5",
  "key25": "5KzZxKwyXbY7G8twJNhxefPFoZbbZtzM9Kizuo1bhUoeY8P1DWGQToTF1FmfaoWVUYR99JVsbi3T6Ri7Abc6Kcv4",
  "key26": "kLA85XDNp4ouFUmSg8KCBcyziprePHiZwNjwyBT2fd8hqm3S7DKjfg39QHoLe6ecfQ1MXfwdHYKo8vchuHKC1tV",
  "key27": "5dqxpmFE6s5dv3jSZfDH8wkS82ZPJcSsKUTytZJDrsa9aM3hadXxm6kbcXm6dBmghyZoK1SWvEgqc9H1kLWrJaCC",
  "key28": "4bgAcA8xSRsUicSc2ZxXtU14SvCvKSBuw8ViYsehu9eSdQiPGBEBXoQnPf7xd1Hgnt2ccPeghfUNCGF7qvoiCd9V",
  "key29": "53wGQfWhqPvZhUDo8QvXz3oni4Wneei5ZBBLekiVcMFvDxmtmGrk4aAdUtiyBV733uD6Akuzitatxq64LGP4eirz",
  "key30": "4F5R7bY7Rj3mBXcLkcbV4w2VQ4XvYK3FALUh3dTmkvwCemcFubE7PywhHiB2Laxxj6kCfRLUnSxvrUEv5KQXezuo",
  "key31": "29dN3a6u8FGhQDzWzp8mJ5i4ueadtTYXGJJiGaTfrT7ciZrLwwowdEzh58LCDiVnKTiwLsiJ8RdDuSYLAZ8Eaa9E",
  "key32": "4Y1MwvEjVRxxAWCrS1gYRi7ZsyDAMqA1nErZKMLuXK2CBNGnJmAUAocyqXDsNsomXd2NAh8iLYBSBHjXYhTpfMjQ",
  "key33": "2yxBprfrGKa71KTu95g7JVWxh8dtYAjDUY9qXkteHkHpYTZ2rkQvM2xvWmA5jhKUtrqR4rUcCgBniHSkzPekx29t",
  "key34": "3bcjE7b6kN3ij246e7fYJDfoMBcjvmzdouhMZ5AifTFYfVq8MGy6tfTC5covsNa9CQsBfvm8JsUSuhkvFZHokQLg",
  "key35": "zbXUtc3WYHmpmG1A1HmeoitBqoxAfpBeBxnqtXcUcswDjZyDfvFNkxRUEy84zFx4csoM5Qpr8LLHURBdsHFrKsn",
  "key36": "3NSiTNAbrbwakZ6eQLPEkvqNrCznNj6DwFAUWn9FREqViNGiHUXck1mq77XQx6imTCXnhJbLS68kwidGAJLz4Qcm",
  "key37": "Ug7b23SaieZrhVPhsvewY78onnjqovp1Xn6EvfQwf5i1m2YCMPGDT4DKFcc74CUYTstGEAzq6aAdUSNqz9fL94Q"
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
