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
    "3gzbgjby4ndhfq43kVPXYiUxXYVWUGMEQhyiGd3mYQyULdnxWyJ9ck1SPFY7fM4wfbgTZY5tbNYv6bG8abnvcVFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LZwkggg7LMnVLb9GRRHU5fLfKX52ZigbLt2BGernMZH2TcFCJVx13mhEFeTok8C8491hmhQSAAgimdqJ1DM4jWx",
  "key1": "25cVnyZgvnvSsuqq77qQ5gW7TfxkyfL7omrvWi1Y116dViRMPGXoNjF1DALVr3iLnw94xvocQr6qdgtAN1Ysbmh8",
  "key2": "57skrz8UfMyekWBxMVE2EMuiyHNsHnaDDTpF3rNrjcWFF553VRUGjUGFfic7LDxYnQ98MziJpMNShpd8gMjLSgko",
  "key3": "V8UoQpV9Y4EvvSbDDFfoqAYcYGzzx53TpkK2niho4syDfKfUVb3RyFyGVLQPX71UEk9T4MoDMXqsBZ4Ufm3Sp4T",
  "key4": "2ygyDRNq9ejrMfZuTiXH8JJWGiQ5qHsnqSrLCEhwRzjshRcbVrrUcLHT1eNy5heywSU8jKYr7Y9KfZQgNcr8xJih",
  "key5": "4DNj5WYX6ZDDJakvN9ywUhhxZY8VYj95MoLEFzhLFMJ5ns2hmnvNTjBve2UXmcoKwSwDza1zj7p4oJvbRdGeKmdN",
  "key6": "5oUjH9RwdzAj7kmyr57maXqJPQBQDZt3xwkkgohuzmwyeArSDGKchEc4yfFsB15zAe9LFpJEx5GGfUdnzVmVwHH5",
  "key7": "2pKNR2XF3yUHUh8eQcWtEGCXnHocymYDPa6Esy3vFX4ncCQTv85gduKUuKVzEYPB1HX82FEYYyerbBubVTzD6bwv",
  "key8": "4CwxU9svCrop5GMaumoWiEV5qjrYer6tSJjSByfg7f46nozgrWAqo9AGkGniJsHH4XNmbLGuV1HUnRHLELK3tAdT",
  "key9": "4UQUSbBY6CXBZaPqc93RvsLKQwkyN4WBY1J78FP8PubFgnHF4smpSDhnucNZKPTngsCWRzQFsMukYSSVcfL3UH9T",
  "key10": "k9jLkVTo8GuritwbfJdwrWKFQxjz5GLqvrAmMAdUyYWcAP1UCKvty6HkhvLk7YcngJsUd5qSDazDznPSviRjsgQ",
  "key11": "2HgxeHrHFJGMqCqBhnommYmgVb34M95dBHMCHEjyRdt1X6Bf2RK4SkTXXukbtdjfRj3Pn27qrxm7sPjL6XuYiJhX",
  "key12": "3rKQnDLfxKMUh8mK6BrzZWrPZgTEEJsm4tN5EK9RUmaCPQ1WrnsUkXwH6GpEUQLLXeRmmYyUGYhM2Fa3SQ2zDJmD",
  "key13": "3Ra7wx7CdzPQSeLSq9Ka5D58nv4nPTfpFHaKkUSW8KoknSNYAeP7SfMHAq2wguLpDFSYKg1X2f5CB5TKLLUKXuK1",
  "key14": "5mPNqtLuSxqeDKTDLoHkpbyh61VqPJcxnYfFwVFTKUURgMArtkT7zhfqMTrHoVhgyH7Ha6uCtKWK38Zysh6hTnb8",
  "key15": "5W8gQQpz4nWiUXgRZXrWL6QCmgSGhtJmD1MdJkFpddaUrZf1RMcmHuPWUBRYcs21qJwjd2NFKWZUPprAs2cskPhf",
  "key16": "56yxHw783uLsxKXhwMxpJnmpi3NqwbzryVJBdFKb5Z6CiH5VmejYDc6kS3e2rnh5wNZLPtMrDerXh4YWfDwAQhAe",
  "key17": "3qbfTzJTDrVJJLcnb5fp2RxqqVWJymAhq3YhdM7qTHxeaCBFkWjqr2LfCKusoXkfp16akDTPsJ83jc8CUXJb4aSW",
  "key18": "2DUxcmq7CBLsCPyNwdoKiPztcAbFq3SCbrcC3fCbXR4ZpNs8Bz68ry5s1ci2CkrouBASW6NEFxGrnibzeGWvajEx",
  "key19": "4zKFn7dX4XmdcTbJv6uNaHtzNsuddbmBgMiQTx7nVVSsiWx7WdS7b4GgSmv7fuRXS5SbpEMG7TGRk64LVfWZ4bsw",
  "key20": "65EpgzcWbo5Mk5hJZToVm7ayUNXmabDSmTsmAC4PdC5rDstfHbC2t19QV9pbjcUSSVRt9xDLMAsFigY273117fA9",
  "key21": "5sMBvVpWZRGZsARvFbuxUWRuvAHPLDpbwH8ZtDA52Hb5xptrtsjX7HF4onzDHSfSkE1NSeEy16y2K6iztGLJivH5",
  "key22": "5Xn1LDGJCgoTEmgrEzvrF3hNt9niNy5pdZWHcnHhf3Nx31jmaFZN9m9DWcBk1NPGwsPw1Q8ovztyN98jMCcikyuz",
  "key23": "3AVxkbRDMbeBMKAqwBRFhtA3b9uZakdVkquWiVju1UKJPoC5yqEpLKYikKKP8qV8sA7WGGdiy2z92S6KPW57qvfz",
  "key24": "3hzkg8To1TRdwUmfF91G2a9vscLzhExhrJq48gKhhVMxdNnNgyGqMUoi1eqnc2Zj81piK265uzfGizjUUtWvH8mt",
  "key25": "51xj819ZktfYNq4UcaonBbMm7vJE2fFpwzcTsT1L8NUbtZcFA8A85X7iLBfs4pm1nUitshvsg3ha22xeAgLvWwFq",
  "key26": "5B6WPt8oLG1xsX4okXph7cEBdKBErCzSFbUhPdRFSux5xjk5CPwsfhKdE7gaJGAb1nHw77aF1ZbGjgVyLeY57sFv",
  "key27": "52NtfwdNmUpx4hN5dvfLJaUr7JSznFx7Wkqd2sFaeKZiD8tWUSQoPAJqqQdGpbfG9xZ2BTq2WJHwopiykoRk12CY",
  "key28": "3LQsK6a8PrQ1VSHYBwV2dTJYVd6k69oQVrZf5VwR2MzDZeqmEhy6nbRjHrB5aedqdNFwuwTsd34dz8NQ6iKmq14N",
  "key29": "3MPXFeAwB1fkwycaNNembGdrEeDNx7Vg2awrRfCo34nYpFnfdgxmSsBYqELmFFNdEwcC2vEjg3DfdjjrUmBc1e9A",
  "key30": "5ESYaZow5o1FSjX8AG24qKDtwjNzkeusiDnKc2Bz2nyCZnYeEmfLKTV2DvVkwKjn1SLFaMfVZsxNFDcaMGmqYQ1W",
  "key31": "2XwzGXkgmxG8f5uJ6C2GwqxWdvrwtNFK4JyekBTVvP5xXMwwmkwCS8arXcEGbnrgyB675Zj9GTiZEnJDL4Qb5DK5",
  "key32": "WsCGh7zq5nWXgYxX85epAaLp5rXBpau58byxeJk1vjip3Ar2eNMqJ2MfrXmLH5fNnHj4zQSv55CC57xzKg2KKkG",
  "key33": "2C2N3iidAnY6UJHTCDGxc3ixaXuHFhitzQ6Z4fLb8ZDn481ryoFcbsau97niuWWiiHMp6tEFqwTVV9TH7TSCeTpG",
  "key34": "5WJzeYqas5RhdtvE6d2YTkzHY8bnCuyL2gesXGyjPwigwEVAxecmiUpfpx59g8W5a5yysusfAXbq641Yu2ciGLh5",
  "key35": "NDmoQqFJHteHN7KzTENZKzakjCVwinTJZd88oACh29oFqtC3Goypcum3sPKhhhe91gS74qZrsBKzKtUMxfhPqA4",
  "key36": "4RXRwboBbUwsUAdwcfNFuzucRgrVuKSTFT9A52ae8xQgUMjwbGbDCWJRoQZZdPvhNjWN2SntQd1iLn6RiTjsW2nR",
  "key37": "5Aogyf2x4K9bhkioNB7qKgtp6xH7Aaq7J78Vsc1GzatWtejrZVT4wbeWX3nLvbyHxzLxkuZNDtS5uyCME5Er2eUd",
  "key38": "3Nm12RjrcZJJuBUcX11uBzwQ5MdPoj3ppHTbP5XivPLohRJNhZpkfL91QNn3JRRKghcSkNyNnpcUx99ojdY9dCiB",
  "key39": "3GXVp7UDUZSt8ucqT69nK5Su2TQP3w11mDo8YvCHx5aFn5sXJFHTLoVzmH7UTX6P9bQwUp8iyAqz2W8SeH1cNQ7C",
  "key40": "4gW7SGWJihgygakJFcZZsQpf3FejSMTEUCe97mFLw4vTmnYvc6se4FNn8maYWQ8AN6TNd8grtweRHRifC469k7ih",
  "key41": "2CLTUAwAdv2Gte14GwMuo1csVG647pEeh3TH3QwZZvJ4yVdsVuCcrxT8WRcuJT5Aj1zTuti2tYW4wo9o64BjxSvw",
  "key42": "4UDTXQqCfeH56Upyt1vHFjK3iF4iEQRn9aUP2T4dNaFMZ2giqcB8qij6NkRo4CCCWhaLQctxDwuk6DwgU7mq5SnD"
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
