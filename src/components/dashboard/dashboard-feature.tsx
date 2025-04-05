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
    "4Woyvwb7tRyMzg6BpiCkqhuo8FZhuVTYwYkWoVspAMXTnaFi56vg6CGm48aCAgj1MuRRXubtFMy9f3CGGSkTG8xo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ZDmN46nUfXmbEomH6JtyPm69wkBTzoh5batkG7XH8R9UyVRW4yYL8iwgB5aCTGQFRGPibM5gLgmgmmcmvESJPy",
  "key1": "5RYLnStgwpmkNduNmCmtgMiN6hiv8TLCiMbLFq55FpA7GLBgan6izPrYsbwrKL1gr2Ap7uhXfPqVpV9PsuvdK83j",
  "key2": "4iR97TFcCsASAzR1GEpLy8aGDDaoUze83mgg3uip7VoxxYW98CYXSaGunfSLJGzVg5gHfoqnwrRb2iUQm2GzQrij",
  "key3": "315fHWaAQHXmruFz6BQGyDNaWd9kmht1P65MHqGESS7bsJxBUqfEjGXCaLLXsMFFPqDF3ffhZjwRkj42RRfi5Cjw",
  "key4": "4Hytrud4i3qjYMRAgjEgnvPDg7163aTSB6MArchHB5wNdPkpp1EZFpr34mpGK5xCXDe9HULgBT5kgYG3KU1Npazk",
  "key5": "4yFvdfsUUhWQ2XEDx3Hgvid31byvwoTTFW4ww4F8xGQUbjX3cBih1iEUAgSVXncszxV4eguw6e664mWg1jjYDAd",
  "key6": "wQjWHcc4oiPb66E92aqzcbgpbP4uZ9jV1DZ6pLmfr4UeKTBznQFFM6TzH2fxjAivF3b34NKp6j4UBMsBbf9uYtz",
  "key7": "2X9vjrKSS9k4ejZWmKRB3EMFKViETM6DtC3bD1WVkG518zW31p7FHeruF3dbaKHaSvKihHJtvjCKbAworWypadni",
  "key8": "43KekDkq6cT7Pkza1CPCLpAtpKA8mTxhSg3Hq8zrv7ru27NxotzDYxSkQdJ4XTjmMzrPyTepW82bsPz6MsioCdHz",
  "key9": "4fRgE4FKnNrVXvCZLMNPxoXbkR3DWc1ty8oaTJ56MSQLCm8iXpicxTHTpi8mRCT1CzQtWx8oiAip3jxpUNde8urM",
  "key10": "LwWpc2xK9gxWA8xz32GQqzZu9eMjijPp8mYZsBWmZX15ScCcEiFVS6cYJ67DbYKBFkBHkqWJsqZ9KiJUNeeqcAW",
  "key11": "2AYFRnjydtVtiCTztmHvcEaBGP6k1K9DnBsJRitgsH4Uk3ML9DSzMNjrdsFfpVncnrwwJz2nWWYYt3fiKVbLzLHb",
  "key12": "sPNGRqQz1tc5468JuNfo1v8oRpEKjm5VPgyBc5vaBEJ9Rn8FArb1SEG917dx4ufHJhyjp4tSHkuH1DvftuGLm4f",
  "key13": "4EuwjPZeAR53stT7YkfAG7UTKjCr3Y4SoDwoJhEsApNwnQgMQBxF4S42o8d4HFvM1QpT9A2mUDVviX38hrbcXkGi",
  "key14": "5EZZihy47H1Usdi14h2rjGzFAhk5MKsnxw2hxc8HXecyVGrSJ1QsMweRwsfKXFXzzGF5V92avYEdUg1pEt98hkgo",
  "key15": "5cdS4ah6qJB8hS48hJAKLmN57hWwdvwwySqXbLJaF1eRAmPiscaA6M2RPpujuMMQ9nEsFNAayXc58dA956vkJBfc",
  "key16": "3pUpB3W3e5SiPaTj9HYxAV5PDGdVfzQRx7E1PzUGmnKACnTY9rr6tVHN4agTGNvR4d1fnsUfXvuhQyfAaqjg3na7",
  "key17": "KyGwSZvYiuFVKNHiWnQkhMbsvCPkRE6VSmZJgVmPkMwPcFATGKKbUebzRsMfCztBr18TpXUohwTWrj3424iK8By",
  "key18": "4XKCVV1uAMGxoRy5Xt5bjn6PFgLFrCESFBAHpyZaUWmkygPfAFRCKhLaf1Kf1S447YsCY4Dyoq4W7M9bpKGCQjEW",
  "key19": "4zN2ePkvp4tFdKPCNnduk7SHnx9UTM4BwUKiYUp9i7bFCKvAKXRHw9zYnV5N5J1ANdqD7oRuc5kB5kbKN2VZaV8y",
  "key20": "3ss64smR5GcaSyFg1uMEgiYLoDrpeSGM6QBKCDeSXfCxNVh4r3UKnVQoKn4PS4UiwqcRJeroodnfV2xpFkDocENi",
  "key21": "66WPrfBQzpTwkGxGRaUq7ZXNPvoVWR7q7xQHUVm614aqkJP5Sr6NDqsvWBPqNdZRaQSSdQ1gcVSadmNCi1JmqNWR",
  "key22": "4ksr29zx37Lnbiv1igJzbzmXypoPFaLcEmapD92vFN6fG6mSTGu6eJTRsz912WCQGPKy7oqWpYK6moyrjLTCzPGA",
  "key23": "5VxMLTnCJUG84DzBhyEUjnuevZxwnZDZGLfyeeqVLbPhLyxiKYMWawMxasSrHw2Qity4FeEMc8BZvxX7YLtx81Wz",
  "key24": "52oHfcX4ayYuQH6ihpf8pbQ6TD1ANMjxShsJHNzyHmxU3sfyZgVA2L7hLcHyhBDzm8uKfm4NBqmGH6oHVmEUcgf9",
  "key25": "266SH6iVR6rqHL8q3ddA8tyuK9tBLXKGVpZqDTUKTVeFxcSNM8Y286My4bBAjzTDdXgrJiSKpnGfUSdik4CtSJbz",
  "key26": "5qAQnAZrzFvT3pcSURq1zSLnPjxjywyykNRzZM3e4p2nfU3GVTh7tpPc9MdLCjgeACufbCLi9BCi5FjjRGEnRq5X",
  "key27": "5cjt3r6VSvCDc78jgYo3xkq2E9bfDbjs7rzSc77gYp2NHXDDeL9GErTsYvXHKLurSBKWg3pbGc8kyHMtu77bijRy",
  "key28": "5Cma8U3sRhUEhNmJJhA8PGZLAA6rHV8ZnefF5LjgYi6cdXVAWHGJhSByHjUmKveVQsA2kA8M2TnqHgDEBgPTZCB6",
  "key29": "2ALwpF5VEGZTrMTwZdneCuu6gUHqJHj5qCVfbuCdXtHpdhpgLEN6xUw7cUCG8zW4b5zAkHto2niBwQaBP6pcWR2Y",
  "key30": "VLf4ALNGxqnppTFj7yiRSXPiegS7YAPoXA5dssW9yhtxWE8Au2upVCTtXexENzf5voxBxEUTq4nKzZc7uxV86aL",
  "key31": "2e2UpacHV7kyupNE2WSufe7QwgNMzHF5UQomEX7dug93cH7dLHkyqUQGhJ7hbaVxxq935GgtACkNWrgRcxDpRTUk",
  "key32": "2rKRhT4J9kjv1hSb89btT8G7ogujxc6SF1eZnmuZhpmDo2hudD9p8djpzW8tdGohs8rEcZFxKbx9TPQFpcSGhHUV",
  "key33": "5b2cA292WPFHtY4YgGLQuUHPo2Br97D74wmWXWMBhxsNVkC7xpPxVbP1dNM45x8LVfhf4dN8sCyBobG79k5KVMtn",
  "key34": "36ntT4EaM95frEpNRyNMXzHA4itukgEP6pfvdAuT5MkNdTcH7MAS7wJkCyvSs7d7hcKWRhZvUHbHBPYWCa6crTsF",
  "key35": "39uTBs5HKu47WYcVxCZxFjwvGbAxhLggQ3dAvmUX1nixHcuPJb6HqM1XtQiMKyKj29nwAtdw5uJgUt1BisJUV2EK",
  "key36": "2Vuehg9xA7qp1m7Bf1i2QQqMcViWnp7jRgD5aJ3xtBNnMiRUhWxb7ADNLHCV4bo9gVqqGFx1ysz1DmcWFW44DGVF",
  "key37": "ce2XG228GNQFvv4zZDfK8TmordTEraADZ8qEkByn3dLPJhQaWwXjkz1PdBLWZrGcgw8gBe9BwSu2yVtHJwnrUB7",
  "key38": "271cyZgW2xRZyGKkJXRFGUxgRn3AtN6NTZ9Dj6NEHqE24HqUwqhS2aFtxtitwD1srfZ5nr5BtjJoc51JzFU8DyZ6",
  "key39": "3iBDTRn7jWtn31cA6U9BYscmMLsgu7JrTBemd4o3Jois5euKJpJYzQGYXLfmmpeoCbSjB7o8h5wo8vBkiRUErvmZ",
  "key40": "ii5EMs3YS767nW8sBammuwMb1XXAitHCjRZuDaMFM8idRaxXjhoJ7UQXivnq5iyyhpMgCz3mBJkEUhNVMoQWHHC",
  "key41": "sH7okhA2xiseyfARBKn2aJcLZF1cHXxS2KpTF51TCRNiwQPuN7N8psFVRS1SLmYBCJ8P4GcWh3GgCx8KxFXezhs",
  "key42": "CbXqSa86KRqpfEh1GctANB3etBU6Sjtoq6FMKVLyvTDUV62WXFD2D8nbbkGb8Fyi5U3eC84B3q6kpUFs81Uv1wY",
  "key43": "2bFWE2MaavmmwJPq5ZiTQkvQbpcSA79Bf5yxYPe1567U3h5pwVjHo5zZ75HSjRdE9RgqzCTgZTGeLEePGYDZgs6f"
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
