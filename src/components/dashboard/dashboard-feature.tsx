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
    "3TYv1X3HxyCMJJZa4La3sP2tqq8r41k9zmtRF5AoPg842cssmF5Jmntwa4A2GTcT288SW3aKq1FSjYwPUkecRKod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bfBAcwW9EkXzghKzXwjqTKgknADKLonkFJmGZdDV4kLY6RXu2Vm4K5g3vZQZxQfMa1h2HFwZCVka4RCCF9eXApj",
  "key1": "3r97RRCaCzTpcXoKBJodHA8ZbNeJekdsEZXVVM9cBtgUH4WV9RosvesZt2k7jAg47yN5FY2KxWrDdXbmLwTe3jpk",
  "key2": "41wyjPGSrASZ9BYnZhjw9Y8GFVPaG7QszFZNJdz5kLd2MyWSCEyLgfs9cgNrWMTbRPy2rxicJcoJDRiGepUiZD3F",
  "key3": "5FrJ6buN9Jtv94cWruGQPcug1RQAnBhDv5CconZBLnA4veq5MrBdaTjyYUHKb87b5asM7u7MASUfV2oJ72mNwGgf",
  "key4": "zxQ3xCY4nRYPP3KmE8YAqto9urUfnHos1NAPVAqixs4GJFqsMdgu46ch98WTE8wyoTHsFC7wtmxBZ8WSEQEvQ7M",
  "key5": "5YBYVQrcLEgQHj1SC5pS2QTAYpYwJZ8MN7fifZXA5r9sLyhR6FHvWbzy2krn8QHhvBRtbJfrycv9AL7dMDiUT7ro",
  "key6": "TNs5RPs7wghCfeNjZTwhu6683StvhdKsDmZjADjsA88FMV6iAzqFJKdLNKe7kvzugbxYZTGQiinpRoN2HneXbFD",
  "key7": "4pJQBGcm1LYd4xkg4dqXWNCUfQZkYQkBRbR7fnDNfdXaQf4t78HmxVGeHbANRKmGLTKdxw1pbunNbXRLqWSZPcQT",
  "key8": "3gNQCB55NorfKhMB4LXByn8UXWwEUwbzR9gKbMsA1ckntsXsakerpxoFS1PRLUB1G9ucTsH9uAiwpQoA33igHKH6",
  "key9": "3A2dCdVUzBsHSFJM7HjU1HsQAaxnTJHZmLZiHdJUHMioJmZCcLktvWHGPRJgPCHJ1SShk4dUHJZPrWH6xeXpr6F9",
  "key10": "5xvAMPmjKkYQk69f4Pv7cRLcbQFzEtmYwiE3NbyaSbAVZarkCSjparqsxNVQ9TGtyi9DV2SiMg6SYzZVvr8ArnTQ",
  "key11": "2GbpVLShoE3bH7xU6VwtogKFtHjGZP98EiDpmacgFgFBLLj1wAkvw7FFzpxwHJrq2L2rCWFtfzUfBCcJ3upNBfJD",
  "key12": "5K87j3veRN6qUZqWsefZ16DzhrJMh4aUxnRjqWFUsefKrSmFrJuR8VY88N2UBNHzWRZLXDXwEHi5BnbVCFwajS6S",
  "key13": "63NtY6BBtuCqJatb82e9oYkXJ7YECiUbyMc1nhC3nm1geS8jNXZ6kPaYeffX6HjBcMHTGUgHHDPqdqpcy6cgasd7",
  "key14": "574R18kzpbmLEH2eJQ3UGrE2RU5PNg8yXFrv7sjGoEVMQMZHwfcA8QoyHEizGdgdvpHBWkhusSpiUntdWpQzBxqJ",
  "key15": "4eDnaFPqcgNzNrTbHA6PA6TXXca9Sv2M2ufb2UUKcRJ9DV6dYiGG5G3vNkXufJXv1Czc6mQXWS7BBonR7qqasgQY",
  "key16": "2WNhFzBtJTCY7nuWT1kXReh7nnk7G7fBawCtPpHKcP1u8LfTCnEi6ujn8GAzee2SbvBE2hVh6rt4gCcLjmFsedbW",
  "key17": "3odz8BkAwbJFxM8JA5bWLpkuyrbPK88VJfCyaWDyRt4JS33EgShym1bMnLW1PUHHazUH5o7n3QYaNrTPY9QANXTQ",
  "key18": "2mc3JMENckfsVx9HQwCdFNSUfFXgConXt4gVMTr4TAWeMD1n3C9LvuCWez5Gxd18V4SdoDKYh8A1yu6PG77MJpqq",
  "key19": "2NYQV3aGe5MPUnzGufbkZ9WjbNaDw8YNXYAhq4AdhCPbdHp6DpwKB7Ry1dw41LfHu5dc3xQiopZTsrBcQs7mHGgp",
  "key20": "2zZWEDKhpt9XhppJrBYvRk3tQGu1ZVom4NuV49SveGvmwZ6RgKa5gdqmkrvZvBEZwbU5SRe4jj88f5ZM9FEhxdNe",
  "key21": "4BAokSUh9ixC7sMKmEzCncK49x9rgFfezvwtyrRpf1BRuDZev5bGX1tYKPiDJfxDK2Jcf23wd8KpKCGkETKY3Xts",
  "key22": "3Ko8jZgkUydTsbav11NR9XK1JEWyCQCFmDVZ6bVek3JqyQGXcRmRP56WjbMqGEUMA1SxdHDZXM6m1oXWgThJuPs8",
  "key23": "56sGFGrFcps3CkAtLKGEWiDP8zsu3RtuAnuaHwYvjAQkuDDsfXV9KRY7GUyq7exPnxHc8Q6sHVZRrrV7S6nK1Ek1",
  "key24": "3VmYmaEGRa2vtXsrABGt49F8vLQotQQBLVmtnVvezrvLV1Ac6To5hWG75L9VcbdkF9fxCqDN1ggeKFje936nEKgJ",
  "key25": "61q6t7KrRXv4TrAyNLsXJzzMM3bqzPHCSPf2ZhgzYvi8wHBYkx1SWHJ1SqaeT5ZZNngrGbYSZQcE45wg9YmgWQBT",
  "key26": "tzTBvGNddGt63TK36XitrzhKEF2W4mNCAMzk6QNvWuTFYqKyQZLUvSmQN5uZAXYBiAQSuwqifD4j8BSWcYeMWz3",
  "key27": "2CepPYxLFaCKxB88Jr1UttzukAMbsifp5XdCM2aSLgyZfkogGTRCwbwvnuqjrrVKWkJAvmFnLqN9yxPH4nizkvB3",
  "key28": "5aZqGL57YqX558RrcDN5rft1CUWYkpPc3ktEa7qWDknbA1ZLKCNkmt771Z647p4pPvzGqmnXcF4kXKfxJpP4mun5",
  "key29": "5PQ27VUKjQLpSiirE75wNcYnomyP7YLCQxiGX6joMs2fQDYgd42Ae8AwiN3WebBvXNPi4eRgc4wNrFPgaNPo1Ep",
  "key30": "5iiZXdaAu9sLuXDSPbZK9qZ4ga5GSH3UiM8hXUgwfcKd1fhDotactysMxif9fYnn2bwDXw8456QKnkKnbXFfAH7V"
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
