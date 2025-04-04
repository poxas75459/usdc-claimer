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
    "4kaBdYZMP7tZDGZUy41X2N5A2sTEz6dH5x6TUAyksDwEkMtSYPTvT5N2csEKSMC9hpzEGSJc71ZvhECdyQ1whRf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KaiRnciSiyhLUsW7oWKfRCQaL8VhKY4cjar9Lf2YU1qxBWHxpCAHZrtafGD1XWV3KUmYA36nFHC7aYRUCh9Y9Nf",
  "key1": "39XQCcPr8aBRbG5kLbKhgej3ux9XFBE6Y67kA2yFNCatct6B4b9MNw33WkaGUy4TAXC9y2Mvn4zEn8aaMj3PResT",
  "key2": "VBDb3m3DYzKcxj2Acso2uYoVK8ySCPkMPrDdX3TWTBRHrQiBug1S5nQnnHUJVdsYJJSmqDDPL9G7w4vhvrkowZ4",
  "key3": "2J8Fsuf88SnvFdC6scY7rXrBFWJatYSYUamMynhuJKSUMNgjuox1GzN91fAjNEFxz4hme75XxMhxz2FZBjZR8dSS",
  "key4": "2k9t7JAeXvTpPiDvis3VC17XbfFAN2BcPRe8tKgovdfFZxwhpFpUfazhd7EjF36DMAhYHZ8YwmTGMkuRfbhhUtRs",
  "key5": "3EHEfEN7s1twuzGQH4jBT9NWvzxa8nRirT3raXuUpVYyzg6q6tggEp3ZfMaRLz9DvciwcXCcXZHS8ZESxh6xDWih",
  "key6": "2fDdiRo3DXZHGGaZp72g5iqUkcjo9xwa1VtQR4c87LP8PcpP2ykSujpfrZHQHjwFofR1AQkMTMuceBsmPW2Kw4WX",
  "key7": "3Xhnu4C2z4EzzLSqT8E8pKXNcXojaKR37QiR798patiQeAmXiVyRNQmGppkCQ5F3QBMLzfGtDZny93KmJQVwFMZB",
  "key8": "5XWtbA6j58YaWzHrkGWuopmvBG3QXH7KMH5Pkt2vAhD94vcLPQuLqgo92eaerDsWCvfzceAx7iDU9NWb7kckBTRC",
  "key9": "4cneR6ss9rqw2VBU41ZC4osmgwyNzbjkvpSnVXiFWmX2GK9Cc45Keegdk4tYPJ3dpWTd8XN6RErsaqPiGvgH4MSr",
  "key10": "4dqRhvsykpuHV6UZWUfFZ8Hak29omA7jMdmQCtpmW8FqwagsrS8RwLuTi6TsuAArFy7nUB7Z9PXR5DKM54qtweGY",
  "key11": "5EN46rCGcsR7KkF1ZTcP3LEw9ACWsZcPPshWZWKfqAhiACfALNF1NcKRb26PVoQRVhNm1N7duxRpfPSMymX1nmWV",
  "key12": "56KwmqqaUCZkQFto8srog9DFQdixnMd4JiK2mrSr6nSTHbmihgo3NqQQPUZsvcpeQ1YbXSYLnF6eXAn4aAonfMGk",
  "key13": "4JVyBrRLfCzzsmDvCg3aCMU41W5EogPNhptwkZYXYcX8EAmnDfR6wsdqg7TGd1rjsRESems6r1HsQUeMEsBPYJqH",
  "key14": "dx5xGKqwfHGgevX21QYTRR4bfLbYcfyEg7sWcgsQBCz3vKhQnfd1QUtoyaDnyibYdkzd8y8T5EnSAZ4CCenGGXq",
  "key15": "4SduwvjEpHGLjDkxBG2zppcsaPJeujgQMa4mv6VDYdqiHHuVFUtsGA25YiXnDDHng2ZEj3Q8MRVbuLq8r596doKJ",
  "key16": "5zv2cVQWtHWePZLXFNGBzjrhCqJCKvq1xLuEs7PauhnqD6hkYM7bmJ5Q7pqG9Rt8i3U9baPgY946xiQ8vv699aGr",
  "key17": "UMpyLDuhjNoGQCxZSJVN9AVuxHhsCs3p9GkrHPJi54oNZpYt3cTMCQV8NbdX4n6nnw4D2uLctxyRUJxiERS9g6L",
  "key18": "46psNrRAMFYs17v3wtiSUzyMPff8ZG9zPsrAeukvcvDhLdEuuEVbBD8cavCu7TqhFkiE9VGkLeVePcVpPzKK9Dcu",
  "key19": "29XK5ABMsCUaXLkWrsw786vBUFnChun4inTWn8p55J96wBQud6WryHvZ9Qnz8JiER2DvThxM1BAahxNFVrQY2VeT",
  "key20": "2QJuxHJSPw8PNVrYMx4iaQmiVmzvKS2QuKwqxSsJjw2tkvT9FGYpGwNEjnNX4FdkzRbZHNhA3gQFvnhCqf5WtDSC",
  "key21": "5uUCBGy29xivLHEi9zJ2rJP8yHNmyua7ZeMm9mpGTunBdfhNfnVnFLsGPueU4Bdz4Yn6sMXToaC51ShTxEyweTTv",
  "key22": "3e1z1eWU7Stp1wnTDoA4Z4asmjLE6QcmeWK9UfJtRb5Zzg6R45KwdSy4U2zJmRD2GG4iBiV3uDQFKWR4vQ3K6nBK",
  "key23": "rkLLxRZ8tKBKU6hU1DJGPjrWcVTH49FG8Grf1ur14hCD3jn8J6FwgpCvvaFEAgTNMZixi58jpCvf8LHDdvxPU9N",
  "key24": "2iDTFMh1u5PhPf6uVsSrRBNE7K21Kkfe73i8McmPAgme64rRwJVpsR4Q2nBuerNPKEWLezmPSYDv862hG4qGoCT1",
  "key25": "2LZNvYvdR3yGUZiffSrmDU14CyUL3WXCck83z8vpNetdB7bGMpuGST9UHjcHgD6Lj9zQWYsnpYAsPbzuSk5KXPe8",
  "key26": "2d36GKpdeC58L8Bo3ALwhHKLiHHLWuzBXChZ1kq9NDr9TaHs3CMdqWRtRiqc61PtoqUQ1s35i3we2LDgPrhdhMbM",
  "key27": "TirDDhT1JKSfUBSXiGFhp5U5TqB6xPDNuXSXd7HLLwFoYBxSNN8msGNvFdu3UPGv8HVEKohY17SwRoASda3cw77",
  "key28": "wckXnXoqnEUGqX9ttdESbFs2sR7q7WP33uQsTSsY7x7dKrNcEn2cB21tKA6zQaoXQqZh9uaMT5PRHAhrUS9aGJX",
  "key29": "52aRjB2uCPaRtPmK9g3qKc41euxc4w6PAdDR4BLgwbMtifWX8dVSZCBF3bMxMUcGqcF8havCKpUWvuA2yfu6LiiL",
  "key30": "5YdYXTTobGBS7zqE6sNNcuFmraz4CQbUE5UkPPeHjFgzySLztArPPnqana9v8BLTsRAMMS77de4pNH2uz4we721g",
  "key31": "31RG1yWR21wfMfPzf2b7D6Z7TyQ49jr1B16fvQ4a9bZqLn8tuVsHexdHVY4QRH5LczpaEkvFaBpZjWn3kmGMC3i",
  "key32": "2CqBi6wi7u7VFGrdxPq3Z7mmXLFgpoSDv64KFey82ukNHE3Q3zbfG2NFS3KekYC6J6LE1ekX2Mc97yEeaa2nWTZU",
  "key33": "22YQMYzQnAsu6R1hBYBztzVbpw3kXjqyu8RgMuUzKQaWuATq1BtM9H322JQFtD1oxpX3GUwRBY6JYMtoQFd8e1Cz",
  "key34": "4G8Lj7uj2HKuNH9YP5XxtycGGnTj6E4djp2yGEtRumXicAiNf4rPx7myE2uCJzgfvdZXCtJX1opRsd585JUcNi82",
  "key35": "t28K2WzYcN9b7zMaMb8j8JMWVCkzMJqrbc7tt4RXbz8BJTitE8e4ucmmG5N9CS34n3Fj8i2yYqVvpv9VgVk33Ae",
  "key36": "2w5n29yoqPBiKbqijiYHMpTYVgDu55HVNkX7JWdumHwtKzzwUyHeY9Zy6PNf5CirL1hphM2NMxWaMmd3YEc9Cdug",
  "key37": "5cgL7FV7FkdR9niETgbivjdSq6YtsgVtH19FoBvH8DHMnsVAQ25Gr4uLB2T4qtj9kNLRAM1KRQNbkYADLoDDKYDf",
  "key38": "5Nz67Rn3V7Kas53EqjxSYEZFoAKFpYcr2hxp3qcantDPExYkD8v3twEoYwvxTKwwA6dt53h86rtNvJRWe4dbksqp",
  "key39": "99SjV9wbX1wnbG2xvm2xUYYjWWXzNmJoRHVYSicZ8SfzwRmze2utB6Vqpz8WUePxRB8hJVVdieythMfp5wfZarj",
  "key40": "4je5cJnDvqxNttYcJuF6v6PFw2d7bHG6XMq636eg6699d8TJbfCgVS2QD7z4SHnRirTom2CKC8AGZ6uYXWX2DbFC",
  "key41": "4k5kLfiatzXtZvNjqBs7324tyKFk9XAtn3yhumv5HvozGP6o6zRxYdSpSYhRxjCzAqr7r5XdWxdGbfVt1Jn8emHm",
  "key42": "2ok6iUrZCnEMW1gobDgc7YWEgpx1wd4nf2J6ta95fqmd7CJWvWvXumDGHDrAbSf8f5gboXaCFiy7Kbr5VBDUUau9",
  "key43": "uKejNaQk9G6WL5jmvLYepc5CRenTxdvQf6BX28THCxWRNehjEHkbwrBzhW8k4fh3sLpC8HgMdUuWcygvKUUoUu4",
  "key44": "4RAR87a8E5zK1rkBxqb2C5CsLVNwbXafpwNwPX26US6PyUSxA1fFuHUioqNHxF8yYvyfsNnuUS88oSLBX2kvpLJE",
  "key45": "4PvVkqYB4iYBf5rytCASPUo7cGE4hFWYkLa67tDhbehmsLvcJpyRPGjxcj42A7jxcQpdYwWgkrohW5gfQH9cVcXV",
  "key46": "2b2koVkDBW6Re8GZwTLchPqVd1Wykx4PTESn46HtuFBDZysdsv32Cj6mKJp5JTqtYPdCn1jY9we7bQ3CRx9qeRpS",
  "key47": "W33R6ZJN9VoAyKBqBioQYKx22CwZsVkGJ6VzczT8iCvhTWfWX4hGUqG6A1JqmtZZhgFGT9e2uraRXBbNF4kZqm6"
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
