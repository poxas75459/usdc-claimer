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
    "2VFFBELxiBbJErBzihtg2mKZYojVNW5fyVg1WzSK19yiqkiB5fevzgnQsvc92eVzQWnbzS2HFNn1ENMJgwvkgNXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TwWq9N2JXHkox89jh5cZKvpUPZPHMRof1h7xnRCRLkDkhPjQSzQbBkymCuiSBJ3s6SUJ8Hub8F8Mnossy8wui54",
  "key1": "3gysKSgcnw6nmBWMZb3cjbUsEdSdFztQmPRWo9eCUMVKmuKjbTqAFvTUsspDKmDqCuqwMVcYjyaneaFXWUbpeVxL",
  "key2": "59s5RPV4paxPgiQm8MXdDzRrLq3Qnjr1aGmgvxWL3KcackiTKs1kZGvWVLe7f17pdmtRqAemqWgAa5KcrpGteN7x",
  "key3": "nTMnsbXzemtaFWMJprDTfBKMFDZ4vFmVuN6MPvQRLLhKYFcz635v2tLX21jRGGqx54YKspXrGSu742AvMbgsXRB",
  "key4": "3TJZM5aWawJFqmMypGbLBG8xbkYaxupB2fn9f6yE6fMGe42joiCQ78jSHTuSiLrgN9U65XwzJZEJNP5a4Brztzko",
  "key5": "B7ueg6BJCyVSkHZeT2geS9Qz7kTraXW3Ui79QZyVtjhhPbdhTCYtz1uyAA9BZJHsWzkGBhehZV7tMZ1u58TiVpv",
  "key6": "2eSkNfegdV8X1jgRt9tEAnprDdnjKrbvrH9pKnNHkak4QysM7skz617jZZ2pj67GCNWCtKbbYHxzZgA1RT7Znsz2",
  "key7": "3NkMgFGyNtm8DEZhd8XKyUoXY2wZYTd8AXyFzepjmNBj2CnmzJAfPYTDHXdwfZ2k8VzyMLg6u2JoxZBn6q54Jye2",
  "key8": "8vK8LZZYp4A9263Nn71JWc3XWXvwseWpbbtVwUTNNVTL5pbxo8LyyJfTujV88VmzN8tPh9UKyiSg8T2UEGzWFfr",
  "key9": "5VufA9JdG5A6MeQKux71WbiWo17UwKNfj8t2Mx1b6HUJ6BGXEE4G7VVfcupye4zdFihvYkMdEwUe2B3VLd1sNV4q",
  "key10": "2f4UNckgMNU8mTo8t8F7NtNzHnaF5xtEC2MnHfM9Ke7iA6m6NcU5PTNwpXeoxHnVmSh83Jo9ukPDP2h8fWSaHzxY",
  "key11": "3hp2HxFMdyqzK5qbyZAHJpyEewmGTQkh4iEcTftkv8opNaQfuULmqW7RpGwq7m42xYMtRa2AznWEZYX6x5EAi6Lr",
  "key12": "6NfoTnD8PemuuiyiX7UWZZSXFJD3MFst77AyZ6TYEf9pGmpYcpG6sG9qmJMqrT8FxtChAqo6xdS6M6BiqyKUf4N",
  "key13": "4TCUKPdoq4NCoRq2hTgtTyTNeCWNz65NycAiBq3mRWt9zfPWSMV1xXF3j7dX16Ckfms1inHKkYTYfuwjoWVmgEjt",
  "key14": "RQVigy1mbNeiiPPcWwRjsmeT8gRmmwMgfUiCNZgJxqy5YE6TdqE3ccJ9TrmF4EZjpYkdUgxVVwdUKP1ag7BbEvc",
  "key15": "4fkx3byvaP95mBoau4t6umibCeoVivvKwoutHKEqKS6Lu7K6k2nk4bW2FBqmpiYv2Mdu9QoTHd9GdPgVsfYGDm6o",
  "key16": "3aH5ehr3aLTRTCmWYaoKZjSgJAZyGd9CHzrmDAwm1oQrb8vHW47JvCWST1WNnd6RcwDPSShQkNdQ7Uh1cQHP86Pm",
  "key17": "3zyssmmbz8gTThNdDSd43xZNUWwdqWUf9i5kYnTx4ibBL7KmvZ2T1yhYswfn9wD2NBhA9yjNd9BFUbCAfS1GwGmN",
  "key18": "36qGsnaqvA527BtUSE7qxhKgMVkL99PveAB3VfFcgoz4pLp55fnooLPJn45QDZ1bF3Gp8uvpDet5o8c2JnGnA6eF",
  "key19": "3GEQXsuHqWJdo2TpvrsJd3Nwt9pfBDSzuVwuWEf2vtafsf3sUURwtED98iKfV13TEAuPjVCxJfEbxi6zzmZMpfaC",
  "key20": "3Jk7J1xaic6Zj2spcu1Y1e9tjFA6PSpJbQxcsB43gKc6y8RSvE7NUnd4ZEGqDLQvzjpfsv6NCZnKda9APLSxnCUa",
  "key21": "RPYXQVxZRjEKRJmMA6wesxwiCeaNzK9GpfwzoiykUsGeRjBFvVhnx9Rg1KEqML146fxFbNaN3zg8LXZzFwwgkxB",
  "key22": "5RKipPZTPGFsndpbsqRqXeNuuyGNFsCC86ScxEPSEdyCFo3CjWhHCcaBrZKwqZrWJJ13SCifvsBS5uvr9L18anUL",
  "key23": "2DYRyRs5r3KdNKFfFvmfVVooV2PFC5g6BeoRuG5iSfVQJaap4JN4EthmyAQGKXRWEmwSnKPZ3EjcoQxxd69xgin4",
  "key24": "4K4yLonnqWvYj3AaSkNmvWxE8JH5dFG2iEfujPy7T61gEUey2n6itYWezqgGpG6HWPWkwvMkyoWgfrZreLzjjA32",
  "key25": "3F8J41QT4VEg92DcPLDdLRHCXbH1f49KbPB3fjdUDTSXjGEdFiHpwEUGugw6Jrm3vC7DpACNqHrHhgKs14tVoZj6",
  "key26": "4d6T1zdg69cp21XJNgBiSnu82zYUGgNJuPwbbVrwYWyyrwA3XUpchoTQn92cVdAMrXCaRrGJy2bXRWyXEdHf8bXy",
  "key27": "2z2w7mwdeYgsvUMtL7CajD7zjhoJmCBH3PfgQacok8qPiwf3pCRbKENzykDBNceEsoKpQ3kraewgBmm1tEX31sYe",
  "key28": "2CJtTqCjNw9wP4n8QVp1r5PXKEZABiXSWrJM8sCXejSXrCPoxqGRMDy1BFRgdFwggPhue8GC9oC3pPDs7gnEHwon",
  "key29": "5Y6z1JcSY2yjLt5SC1qw43KgHNUAH43VVH5zZ19QxtUMe624kVrKnTxVuH5udiHRYVWye9JJT8kQuifHZGRCkgUm",
  "key30": "4YyuK1yaV5ogSPktjXocSgUimbGUrdWUUsGTDqJWo2rMbS2727gzYr2TM4GzrRWx4Lz2TLygEFDkCHULnqNfhDN4",
  "key31": "2zNxd4FoyJSrd8KRU2F3ZMwZqmeWdY7NqmPn6Vek1kmPZJZbWAAZWwcdrNtECSZ9H7iLjsHpm3U8eJcpmoeC5pAh",
  "key32": "2RbY1YZYrwUnzbhaEh7b3wPcBY4kmiEhptFSUosPVtSp8FrsgttoDXfizBoNDspY81LJdDi6kP7HFFyNazUcdZP8",
  "key33": "3gCLVbdL9xtAkugXfLVg4KdQW16M2bs4TbVgiKV6BSrk9EoqtHxRYkLkDWC7sPXZjUun769LsNeogUE9bntza159",
  "key34": "WVoA3oynDCuh7Moa6W4G8ssV5C7REfnj55tZC1xxsWeJZtTFMhFY9SwSU538BXo9EX7fSgTyQtVSGErVgtXy1pv",
  "key35": "z28Pnt3k5VzcDgYZu783kkPL7DPzfzSd9zWVqU3Vu6qPD8sKzSoKx6KwTXCXnioob1htbdfgYm7Sjhi5GJBM5vR",
  "key36": "5oRoPkSpqtfwrSG2QrGqp6vnWUtm6Ss6ShmrHt2Da98bVz3S24knTvBq1XZ59eTQAumzagtP46eav9oVF9rvpkbH",
  "key37": "5sHeJvyU5iJs79CyWqrbPtBZdaUUXxWKUQyCcWVu553sTuUhZK7vtB8w3uawbJUs1bSPtcbkWf8WdsgLTJLxEewm",
  "key38": "5hBrc151popf4MnTvp5t1G2QHYnwLuEkQ3jjYVzms6G9rq6uTHK6PqAyoFtkykSV97sNgDmqLbj5CzHsFh4RtJxP",
  "key39": "pvBo6erhSd1KnugS4nywrjtPe5sxhABCgfsqB5pPPN3CwWCVBt69FfchwH2ExLBKz8kS1CYCtyXHEMsMpWR2rvJ",
  "key40": "Nh4CgCvsPixjDR6sQbhjULQf1M9kDHs6EoWa5qwvZhVm391eJ5NJbwxaEdwFtUEPuDsjUk52N1NYUiX1NT8b9L1",
  "key41": "5r32cYnXEP4wtEj985ZcDt52FzZmfJNGrDUnqW12suzqWh2LMsj3CDqKn7RuyxoxDZGU43CQE3pyhTh4tC22xRiT",
  "key42": "29qq3QMNnzc6GpLMYFYBUtL7JTsXbP5sakuQjgD1offtVMA1i3hUcfZuMX4r1cCv1eh945mqqwfjAiQ9d6NefEYn",
  "key43": "5Gq5jRDeiPVWEmMyDhA4i7VKmVuoWPqhR3MaAhnmJFc4Y9f13GLJe1pwdsG2g3iwE2mN9BtexFZXCyFhoQrqimAA",
  "key44": "3vqN24TYc7BcVNtEyiiSGFa5yMVSTiifatk2DkDUBwZv6miUzsvhYru1TVaTZSPDfxpNmTNwBrbQ6DCxAA9DZqEq",
  "key45": "4gSEvBWr4rc5DMVo3LqdKaNAG8yZVmr9PNGAQBsVTSz17AtK61LnGEeExwdjNGyDAxb2H681CP7kHRcJheihunrX"
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
