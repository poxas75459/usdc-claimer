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
    "4wMmpsDmvzkAdwWLvPSgfhaVdHkhXGtkt5kZPDSo2Wn9jCfAo69EdDHkC9PNH8oJqu7bG3HiN48k25ymAempP7WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "syfThdAkDn85XqcNPBYdeJrKVMb2FAAHTRpSjYMRHxmde1d1RGPZmf9cDShKKQAA8Roje9pgSueNgAxTZKtyYfY",
  "key1": "z6JkJAtLQvec9Q7kxQvBggM3DonwZvfa7VYbUvNxh8TABdfGRQnjB2R6nLgheGDsDko1jpwwjbGHENeEEsuoQjA",
  "key2": "3dPX35gP3QCCafZ6nNe6fRDd6H9H3nMfkbxeCmFsYoNpvQyfvG91uSoiUsD1LtNEXPHQT3NNFeHiLmNT8FbHg33x",
  "key3": "4K5ULoGqeZYMjo2NyJHNaRs5NEg9ns7f13e1Whcc5iSLxLKQ3vcKwLJWcCpDSDzWFfqFfPew2yXNncXoEQ4rETMU",
  "key4": "3dGGykrVDQ9phghjz9T1DgdhyTtrU9NnWKJRgj9ArP9GvmLTxjJKJy2pUG3vp6G1xd5tDwf6GGz69ujMsbWKm6xz",
  "key5": "5YRtt4R79YiyWhrbJfG4mVWBQddBcgx6dyS1jVGhz65eWm7mNv49MW7rr8BM6bVS2Y4ihBjnnTskGJPYJi6bsBKV",
  "key6": "63Ynk84DU6usretFiTTFKXbp3cBnk8hknFUcWnoj6p1gQDCiXdD1RUwzAo2aTLScxfjksjUvD2B53gyEPGsb29ZL",
  "key7": "4u3VUBpJxsSkBwVTvqkjBCUEDqVbHTU4zu32oiJVBci4zJMXaBNMULPKNpnMzwPViGYYELkQMTiCLLkfYi4DTF1M",
  "key8": "2qA8q5z1zaTu2BXeyQNNJhZwYXzcEx6P9sV3zrLF8rT8MtcjhSfDEK4jW8SAgAhRVmC9dEq8usnrCanqyK353bU6",
  "key9": "4c3wuwxZtzNFh8AqFZ3uEdYcztUJGZqGHUyw7MdMd93sNjWaK23Cfc3XN6Yugpu2gD2rw3Pago6D75FfTi1FXfTt",
  "key10": "5GzHdPFugD6EijH6hMbvvCXtZoZMU5RbToFxkPbqg55GBh5RhuXwAcURT5rzYcTwchcshgNgEzrFZjjiV2koTDoW",
  "key11": "42BvvmG91NEMYoDEcykYL4n1V1VGkUjzsrAsaKsqzvSrGTMuh4164VS6W2YBY8d1bJcXKVW1eeEynmF1ujWmCtmT",
  "key12": "2atksqjaWbX1F4iQMSx48c1GjaThGHcv6TzcHrgHEyUo3FF4pB5GfYKzZCrzwWjQLTQqTk4gzzQsx7vsJM4eTsFk",
  "key13": "4dFLYMiojTNpKjgfa7MKUzRZ8tqYLjUVm8prN5z4kC2BNLKotsm96GMVbwciFV7K2dzB5Gt9gWLCdxSFQitzZd8w",
  "key14": "5PDyV9oZ7TXbGLPDDpNiW1hD7z2cwMfQRFSN28XxS3S6aiKWB2JmRANgFXDtnwyM79nbdkeZHSsANB1KygZc3WDM",
  "key15": "K1g4CEBTVz4Y9KjBAMs1FeoDcMLfciq8c6o7DeEwZDaUw4XzKyGSTCaNLNns5Bqkqm4po2toy5BoUqoJWPvbbhZ",
  "key16": "5jwyVEMc21cethbzb3qMWUaKc4UkvVfAB3Ehivzsx4KwxxnwKs53pUugfWsXZ1FG1TqtXTgo7GUsLd2pkBqy8uti",
  "key17": "2xghdW21XsFqziKa7vFD5kmTsU17fbcXRHvoDLAJ8uzv3kPvF1NXJBtGPJcBVht9iaaWYcNfg5mJByWg5wDMpvaZ",
  "key18": "2nVxuc8VEaT7kFnqNEN4mBz13iy999ATSNtDLWNcVHmjAMqKJF3EcQK84xxgPxf4n3C1u8tPoCgCoeYoBXZkN7Jh",
  "key19": "4GEL7s5nCWBWy3ZwgWdVgakjX897YBFimCCGYJfDgeokrD9UxVDhY89QdiQLXpDutdcXeJ9PtNeEe9yF2pXCPZBo",
  "key20": "5VD25ffkg2j1JhekE7K5UFfonYyUmdLhZGRoDLeW6Xi7HsTGv7fC3RNCUHhc267GDjGJBhHp3KmJW3j3TkHtUwK5",
  "key21": "4yEnauG89wMM9MqPBDKKgACn6XmFzC9ZhPWeTCir8vTFJnP4Lyfg4ok2FcsxwmXWYUXQwYx4qADG2bpALijtTotE",
  "key22": "fGa47ttBgSz2fG4WMfWbVHrdKt5tL4khD8QeCjc462j6wSiGVmKey2mhYnYk7zi2avhsPPzzAfgFNzMqH7LdcM8",
  "key23": "2J2ZUfAWQEY1N4M1yNDUgYP4RqSU7ufQzsxLZYmCnubY9QhTLQVJEBAXYnJYYhn8e95wza4dzQKoCG96FYi71Zj4",
  "key24": "48upABu9r5aaus5KsTHM8iDLdCX2Zebpc7kcpKyHF99DdQ7PsUF62fhFmTqzYoDP4yfnWcvZzUuR3eey8igrVp3C",
  "key25": "67FZ4PsZ7E9o858154XmfGeBd8CR3Ap4wKjdKvhEc9fbbWL6z315sco9vJZK5To2aA6cWsagdXybMuQYXSiByum7",
  "key26": "3joZmAHU8Lw9ba56gVNFoT2xxNszLmaPfpr593eFDLgeS1WwMbZTikFAnB8JhTSr7q3uKRbQHZ9Xk7g5Yeaa5fAo",
  "key27": "5RvEbPwEAM9mCtHqy8aR3tuvE3rGrG9apBd3rZcgP6dgbKn7WFAjD8cNNqMkgirWhi4rLN72zR9hfN37mywMR4wj",
  "key28": "2naBFEN2WhzQsEuMi4jMHruLkNYSuk2LQPnxktMWLWdmDDBakc7waBwKhCegQTEfLG4oEkoMCxkfsjqQCCV4LGDT",
  "key29": "34eccureafTxCZVUgeNMqe6KcwHyjDauriBzXQ2WUeAQH3SsrK3yr7acBJXvaSGKSbjPPuni6ZkrrUn8JcVjs33x",
  "key30": "386KgnM7CArEycM5zfCasMAqa4XhnPdH9NazvqWNHjcTivwoTsrVrH3B1UiY752jQ7qyfrjXKBRS48AFW22dryeQ",
  "key31": "4D8utrmeF6269q9vzgiePTqstjJ9KStT9953MvFtTwbhi5LWkkWkYV8gDYkgW6ngAJn4HZPpTSY93ak89YYt5onC",
  "key32": "4jZAmbsoNPPqEmiNtZqc8zhHT4JCRrJX7mDePVaXDZmj4YUJXjegEqnA59NTwkQNaRdRX26jq1rT4vJ7jwBygPvn",
  "key33": "4CYqeGWwuLhEkTF3c8SpTsenY77mNNk1MmPdv615ABg16GZsoQj5fiFz1UEKjwwECVybbacsE7zcTScZNhiJv67o",
  "key34": "2PDGxd3CTTdqyfPP5TUiT2V9ub8SYRgXETzRHj4V49RqP5YPdNzCaKD2txt44oFGzPDcPztgXJbrG8bwr3yzKBZo",
  "key35": "5GhVg6GKPyqs1xhUMZJavH8xsYeqFqEYgfGM8xhzJYERvkKSABwkh9N6tqA2pToUTPn8BhUFpYPpVF76kYWmwz6e",
  "key36": "48RxpaYKhCimPofXuqmtg1Lds1EtpB1bAX8CbGK6wzgiUrEtnS1efbcoxAxy8HJRnmqYeVNuqpD1YLsVo8ydCGZw",
  "key37": "4gCABQ3ZPkTGMhP62pBU9gDhnCqtC9fVGSw5djgeoQydjd8drAWgi1YKBSjBLkUpbNVuKHmp4tMVnGoNkgMhsHGz",
  "key38": "4eamFXr9PhZ5NEdwEzPK5ZrhsT7W8s9mT29wpoF2mV7J2df1BBW9f5X7DvHUFuxJCZtpi7Qsi7eJiPXq1DBuBxQj",
  "key39": "63ZZNjJ2sJw9QGEEzA8p9AomhvShDz6W32YMoraFSfice8pZ6b1iJE4mSGfHhxTZBkdjabGrfAKwJmrveNie3YZ5",
  "key40": "3E1SKbXnSFffLGuXdx7ftHRUgupuhWCBN2NMDmgfGS1UxJjYnS69XxMk24jSyQExB97jrgXTSQejRmKapBGBtAnV",
  "key41": "bDgK1kySFmiTDPff2gq5YPjn7fDu8BgT6axWVrwrtVDg9efVNB8YmEufohvqsyDtG1baRULE76DPDrRBng2E9Ky",
  "key42": "18xBMKAxQ7BKF5ZTwVaFu5yzNi8Q6tx9Pm1tVJNyf2wHcFaExBPSXie2mNcjTTo7LuJVTrRWFcjYgjLB4DYBv28",
  "key43": "5XDPCVGxMVNDHBeHmktbn4KU4PG5bU3UPjX8evyhgddG5wRaPTgX3cdUW8vFQ4jw7XJoiDwNjGrek72fg6Zr13KJ"
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
