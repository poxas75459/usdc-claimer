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
    "2982QmoWCRMnzw9c3UivpaXGdZDBTZgv84aev8bn7KV1FPBwqC7DZzbEjZSUc9aWQTYTMR52BTAbxb4i7eJtrzpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YYpKg7e4K6u7zJCWbUnDuWC3nL8h5o7f6r7QPqcYMMRuQh5wJciLywbX76uM1hY9S2vqzhrdAyZFq9wudLanAXy",
  "key1": "DTSxhtT9E3Zr7XFwvsQogkiPjatXi9EXKuqbLRuYvjZipno18kki87KCUUMjRc4ZjUnNYQNTFcFwA6vFhLqor21",
  "key2": "53VoknNteYHcd2PSurFiakQB1MmxF1Lh3wmrDpkAEw5BUFmijmYzfMnP5oQEZCtTYDyRt92RsD7wQrJxmBQwPmQU",
  "key3": "58WcM7TB38D2wtYg8d5L2NZ4X6x2eDeVVg65SCSMRJFtNmhUBhdLkQfa9AuQG1GQokCjaWqhHUKQU68t8rfjVind",
  "key4": "2acuVVL4ZkDzaC5A9BSWH7s548rwfdW5X2T59ZN7D4wR7gZC81QKJYTHn5FzjVYQyA5ZqJ3pZ6PMZ4sgjQASKnP4",
  "key5": "vR6YBea45UnxGQ4zgxb5ckJfv6JwMKU9nk51GaxavfeiyS998UHcbWT3hWeW48PYkXgmXqbBvfKPKUwP45tW5af",
  "key6": "3f6FGNmPFyN9BFRVywGcZerJRV31M79FzMz25w8BaqLFqSX48ruzbvvG5YmioxtNnChZ5ARqP5nwv1zBhjS8T6in",
  "key7": "3rsovB7LLSd39iXi83RWunZWr4mfJ2v5gfVzbFRTDiUzmn63QJCwKzKXTYpTC4BE3ePvLY8eF3Y9twWDpkSFTL7y",
  "key8": "5a3oqK3X3aPq7diKkqdSfBpBH6T7fj9vMyyCycRXGYojRAjiSxASXKgxXDVPCPALmQ5M3ywuFYWSUEUCpBb6KfDm",
  "key9": "5PGuB9hZgPwa5yCf4x1vGkHQAVnScqnkHjRsX52GLVbocHREeTzoqbyfZyeUXPwJqwHVYF9SkDjy3rSdkc863hHM",
  "key10": "3HUNZtYAEUzNJQtxYMwZiWBv9KzTrZbAWHX5Dq39NNQiNR4SXHc7GwWh3TBhYn95PuQWRsUrdL9kpE1j9JzCeovf",
  "key11": "26wLT7yCrrWVeH1D1Qv4MP1gfcei5F8XEgS48GdQLJUoxGT1z6ibDVucwcmJSyHTUF9Au9Ujc2APc2hmfiomGpfD",
  "key12": "3TjAMiBY4FgXFV1jfE49Hgy4zWGABFzVtXtBJWoSKcBRoMLn1HVhGU3s51NgMEUKrMcnYAC9bhnmFbiMeF4YgcgQ",
  "key13": "PyStrs6Fh92tVDVRG7svpZD9zSjzaNB513aTX7jH1hmBMRHU5WKKNweRjCs8YtgFFj1rR6q8xy3gHqDxvdQ7uWX",
  "key14": "24ENzCmc2b6d8KSfQpW822FTYTZTZabTGd9Uiz2BHiQpViacdeAydVHdzFjYVEdPE6HfkAT4LiTmypnqTebVE4ui",
  "key15": "4fMk5ujBuYR1VE6EHAxMKvi9SX7nhk5gueQodd4i3nPaVeHSmWHfrRU1zhkt9shbrZLWV7nmV4GsFfztqYqXo2C",
  "key16": "rQ2Uuevh5xXu9poxxFzDdeiR8eeCkaBLUCM8bRssuW8AnRJnFCrtj8GEt6Er4Uw4N4mRo8ZPXSBTtYBi2Uo7yHd",
  "key17": "5zABTDqDCBAveD9D2rD52CP2wWsEBihCgKXLSZMbvs1mEMrPJWnmsZuNWQf4NzS9xMvwjPmTYM4i3tScbdHX9djm",
  "key18": "3tbqRocFBUBm4y6F3p1bunQF8Y1T5ErGvkTgMXvFSi4SDjiJgKePbec8ZtPWLdzzx7TQmcyhqFjxbKhki3uwKpLR",
  "key19": "3TpmcpwSwThnv9FzryvfN3xaFErPb29t9uicGgx5zT6JhuAne6LUKZJUVEE9YvKXjCJgQsf61McoPBCnZVfQSqQR",
  "key20": "2mRwCeYqnU9iNkjxXKGfSnuTb44gcnFdUQAX66NNmvVzVfMqcYstyKf43f3XLuTwUNiWkgLDXQdw4K8sicxAdoLX",
  "key21": "63SzqqTmDvinfrCoqjZK6g18kMYxsQrCyd1TzpKuR1fzysLiZg3R1r8irLjZzFkZtLvgpeh8XxYBd5UAewtjEuVC",
  "key22": "3PsTPRB2YLHD7VGwFoBsQPc71jdDwbV1rgfNjiUwz9QKUDYzGTNG84QX4Xdb49j7ocsE8wRfW778ZvaFVoUUMfmT",
  "key23": "37nqcxGyX9b9sMecn7xw1dgkP6np317gUTmhBwmr5wFdiAALXhYN7rQQuYjJUu4qfWPjXKjyvk7SWvdUyhgJo7vH",
  "key24": "2KBGSBnMDQhybjUqWET4S5wNanYgSAuy47uyXyaUzEnskWxfipVLiLpqo4zr9jJh5rWMZfKGg7x9BEgYYX5fPgbG",
  "key25": "vLPgaN25VMS1kpNfgjrBDjJrF33LFUajRidswVChq1NK7CfGNbzjCBc17AxkLvib47KCEE7hM7xZcVWU5Y2Mroq",
  "key26": "zcFBaPgS9itvn46WYG9CKwKXQr5hxSNFNB4XDrH1G91k62AHk5Y9E67XyMJcYKpKWpC5JZsigqicW61WxsNSade",
  "key27": "4htS7mDPkueXrDG8Dy4DAYaLWzvMhySTcyUQrLFG9WbtRCdmbMVQrt2vuCpmYXE224gzPnpxPa6QynUbvSn6zTab",
  "key28": "4fXjQoUFTUsF9oiDrrmk9MAnqSXi2EdSawmoxafBap4R9afz1CnZgwy9CqCvyKkkkxpKaiR92y5QJB2F6PWr3CnE",
  "key29": "2yc4T72wcdrU337R1VHkouqZ8ywkwC2eB27rvqkWhYPjeKDu13XRPrkGwSiyZfVGXcF2WeAexZAPNAtgF7kTbcf7",
  "key30": "2DeXgVJLQBktmrZsqyuYGHdETbiXC2UgLqXsBGtEHV2RPHXqz5kcDnmomWmypTV7Zy1V1y9hSdKgy1Lj3SCFNqAb",
  "key31": "5UePc9B4dmmeddUdf1Ez2Uykp4yyPT7QtcD4UxQKSxXXa8enWWs7S4GwxP3xihRhKJnm8RmG6B46jWeKRroGDi7L",
  "key32": "3TtDmDFDXwpmTy6jKkqekxz2doGXM9RwK3s3Ne7YWr3BCvHcbSVJRucDp5Pn8ey6tqjPhxrb17feQwbaM7zz1j6b",
  "key33": "2g7iBv3J1y3cC79cddyRJMFETdJ5M15VNKQS7Vw4zfqAXNadB97avnQqiZaoPW57Mq6RqAAqGCJ9CnszRNKHkeA2",
  "key34": "297BXcQFDfao4jx9Akv2t2iQZS1GQ9GWng1VhL9ZNUcGB5dmUi8efAx6p7V2Nq6a5EQ52o2eEri37bBW3vVZRqD9",
  "key35": "3ysS42Ni4u5h5XMQyZ7gc31E2yg9zPS5RFRQdJqfDseLMbgQUC3KufKhNN8bFT341GAGKLEWndWVPnFHJMgvqEXm",
  "key36": "648AnXhzRuTsDfuVS8sZAfpE27LyCnGoRWSDYUH2wMR7R5c1PCKS1MmBHhnnfxezQRVLmNjBtV8FpazJ9RYJn49Z",
  "key37": "3N5rNyCpqWCXHzJZcZMBD9wocuajKYseH3HybVhvZsa2Q41JYwrwZP7kjuzx6VadT7gFaW2YZjEu6bej7S56Fxr6",
  "key38": "63HRLKbZmRZXyD783N64jzmyvbG3nTWcfWWA93HxL4ZjsEn7PmRCFCagVdTqiAkbjQDVjNYcyo4qkCLbatM5FXB7",
  "key39": "2w51mCmTPCLJPCKinUcvRk91vGacQupFxK24KxJvXroscX91Ego8VQwsZyJjAo31n2RXrjrYxqvMtSwKRmjS6t37",
  "key40": "3KicM3uHHgoAjnpmHxD43TbGozmbxPCZg2xaGg5bnCGF5GKYTy2uXSWQnWZvBE5PRxtob3nAifBgh9kMFCWHjfjM",
  "key41": "jGiaUfVc3LAXfqSa2nMqHzZze3ZgCTQVscrd6CgtBTG6ML7jhxu4KnU9FQCQ9Y4BZMhviJ4mYCaa3SanTaic5Wy"
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
