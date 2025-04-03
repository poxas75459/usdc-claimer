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
    "4U8Dmkso386ixF9Qhb3DXynx5Kion6kPk4jpVAEHb7Lu824KKSwfbSH15B9scyXPSFvQtztLBeYDp6uM6YVUNNGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5py4C6Adte9D5uUAPxyaDuyZn4N3oavJqMbUnRMQcsUBK3MgFLjLohXNUBBcPKoieFQed2d8kQD9MVcYZMTwDhX4",
  "key1": "44YSTbxQdzHN3SvThU3GvKGXiPBxRrm9A4Aqhk2GT6UoFfeEgrp4rbVLrExiQcgybxNVCtsRRWn9tDbm9s1LpxB1",
  "key2": "42HpuEgohPRFgeSzVYa57RQbQXh1FQcKS6V4qvWQEd9atvPruYPEYVhe8RT1nYdsRKAKn25U7zRtuE9uqeuqh1FV",
  "key3": "2NCj8RgCcxysjMJ7kLcp7LVbuw2D9X6LaX9t7WpLztjitfqPiE3Uai7bqXgWgPMzyBaZ8igSt5DpNz6fto4Txq3F",
  "key4": "3A1EBBfJcr6jn9g3khG3nNkPV2fUPd2cbMDKL29vsfBygpPGnp3A9FMHNBvCcE1TDT6LbSmDVq59K9nWE8gFWGgS",
  "key5": "47JFMs3csk4vWjERyCCUsgDbJ8HGD2LR8qPVPjtMCdMyFQYp94Htvqb6kHt8pUzPJA9VkGCncPd69WVQ5fwCPrJY",
  "key6": "JnhAk4vZ7ej4Xo55rVpaKi3evDNbGSm9bwYrTZCWj6VZn9QiqSSByrj6L34oKZWy8VEqe6c1tFDzwoisvUcCsxW",
  "key7": "c2RnE8nxGt7ckQ71AhcxhSofsizLGwbWraTdRyqPU1PSfw6scnRathc55CZExsp84Pjnmbc4jjzCFmCKbSFtyfG",
  "key8": "37RZtHmNBNacSuCtVMT4dQmKVPsiNe1cVaFDnYQGQ22Tf4sitRSi6uXvJ5KvPG73RvquLLi4QcHxo7zRmAbAFdZE",
  "key9": "4MZgo5XZxgNbEhdCYCZpbciGuaN1qAVUuMrsVPxDgPcqDS6RDWNgCnagHtzsU2DePpgGoENHhRYFNoiWwrmhCJ8x",
  "key10": "4b2c5XjNXMyvX3CNGaMoU24n9dnFERVNpVWSeRmjM8r6o1eRzKGwk1YhGXQGwYHRzJjsE7LBw2HWWJkFepZ3mNCX",
  "key11": "4KprU73GaixXcn7UdhzxBsgeeXi75zzRipDpn9ES8SEzk4qTWdYbY8YzVLyuQSVSjhCZ5bRmoos5DwN3vzh7TMj9",
  "key12": "4618BXrS4U7562nHk9ZE6iuWzst3RhNnurmP7LpJpQHRwkYzzcnR1swDPbZSKgG3Ranw1BJfLeDtdPCxtPR39qqe",
  "key13": "4jxjoKv2SnLybQarGY5598rCHbyxYrCVDNwBa8TQt1bMFsou3PDAVYAkz6NktfKZJUiQ1dYhqswwbH4gtjYnx3Ze",
  "key14": "27qr3jVxQWpSEjfPJ7nATxJnW9cXFzqD9d4y9pKWPmJbJv5pBmE7PkCVTqdK91CjX2SExRbgWsuhxqsKy2zqzKFy",
  "key15": "4FZp5C3Fz3Aefo4V8VqqQ5Cz8c88VBPQn8sSnxjK6qhjRhmvFwgckxwdtDvRgD57MvMXKEd3QsuB42na8oSTqxqd",
  "key16": "wVz8kk8cVa5N7NmxZQKp6DoHigbcnpStKvrS3p9k4Zn35DGwfCnpQtKWYpKMd7HrWTxC7ame4sUMkKJVrz3oyPk",
  "key17": "2cZZFcjJdWeCz2FrPFh6fjMexVwnZcwUuLG4WTjFDNvTKmfWDqniUeALwqucVD2ER7fgxBnAKyW25QmQC54HfX1C",
  "key18": "36hJmDQQdCYBd9xouDEfMSAudbS1cwbohhu9pKrHUVZ9QtDeTmGWBuadSXdrfv9Ww7k4Hr32csPUU71mfxy9PvzL",
  "key19": "5R8qNuwun5McTcozk52659oTho7zhZZUastaodQoqCUwVj378nVcarCi6e7KvP1eKBKxVE36UPr1ec6e6jg6ieZE",
  "key20": "EArAHfaW1rbJKge1C1YwBtuh9wzBQbzvfkyh8Ju4zf8GLL5zhe3LHynMf5TPfTm41YFTDCtgqMqLhUhjv8W3BTv",
  "key21": "GnL2VHBZXTBKGyEGMTgLzuv2zv9dSDo37waP8zxbyZR12FG3NQPoVqwudSf8ZzN5nKZxZ2oHGjkcMMhbY3LgJ1v",
  "key22": "4HDDVzgyCWrPSoS6ngqSgR1HHT54PBgmoijgkLRGZL16Fg15JXgnt8qAGXHY8Ur7VD4EBNrF9ArkyXR59d6ud9Xo",
  "key23": "2JyjQezmUg5Km6GmtPrxeDRUBLDvXpfMqz8tjmtfzYNSRLNJso4F4xrkmmsrHu1u4j7wLXqzNTyUZN2BarYWStzr",
  "key24": "47ZqpgvGjykk9b8UTcgghULWi8aWodVXzLxJj6jCvYhjF7aubTHUqLeJwMXzA6d8F6hjmTSQX8Dud6ZMFp2NiDE",
  "key25": "26QE2KnXwee4RdEZXB4J7svW54zrmmf9UQ3pak95FgYvYL8PAhgHTTXnBoCL1AcdYaANWj2KfbkkhY8HpsT5ZTie",
  "key26": "3GrEPe2PYjzjxf8XXQRD3KSMKUc8z2NnDZgVMEUDvbKJ9RX3CWY3KdLd8fo3LYLLaeu1XDnSquodzNDxLLnA4CUz",
  "key27": "aj9n2g5ckwYQ8bp9jYboCiveGi48dEDzEjGkCzZQ9y45yEbEeRrx3gbxsJVa7AB5dG6rWFxRT5KhkEGoqqgPtyT",
  "key28": "3ZT93NzJCeRjgkc1hfWRHgyimKDqMDXGyb7sQ3frkJ5j8WMo7DGNXBvgdxuUfKzTG7eJiN12La3RUcDwZ4euBZvW",
  "key29": "4UR8ucqScKzFGFn5gaPQX5Leny91qu3QzhsG6Ncsm1khD6zLNRFztQnTcgAgfcaa8H3ykeMhiVmzZE9bam8x7xxh",
  "key30": "4RatvonW7DKguRXG5Cnv52vXnADjKBbr6DJw1bbBZsyZxj8weGKLdJj6cYM9nqtHCgTBCEhMQBJzjR1aFvVLLJbX",
  "key31": "5hDx7cQu2eYEfRWimZdGQ8LU4WGjQtDqep3tJzh6YE41i7KwoBaRZX4Uq6ynAR3yFypYPG46JTwz46HCStrfFJkN",
  "key32": "2jkrzZAGqF8h2ZJcRK5H8JBiLssn3J4ZVcX2ytibPx5FVXU2qhwxNuLJnhEQu2RmD8XJ68qByVcxRTDWrxeGYY1V",
  "key33": "2x8juv21r4vvkGQ1ULorVCBAnTqYJwvkoBSY3ci2fj2XWsbrdm7p97wehuE7yFVRJGnXqRGwjtMoA4syrc1AGnHd",
  "key34": "3em7WMZXvB1dT2asSF18cfsmR53Uaj8SrPGt72vsjVL5agUSJ6qfs3t4jFjdNuv3hzWR5Z7rU9M1jAH56MQszB7i",
  "key35": "5fLbM5RrrJVJNFCzUNRCK5GjFjp2yzK6FY93pyNkt6pKgmoVbhXjjaPSWMEoRnWiistSUq8XWhDh8RuGY4fruaJc",
  "key36": "2BhLRpivTWg4RYPkxpPXyvDSNA9AjDepUtHDwSdJYMLGfFxry9XLfTSkvnmg2kAunGdCFqHdj4Fgd5UovGDivPoc"
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
