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
    "3nccPUAXTSbERYEn45tDWRDLGKT4xnyPTqi8sfLbmcYqN8vhShoTuLpeD8ucMSK4Q9HY3nC1mVjSRQ1MCqwJUgX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjwhApdxfvqJneLskEZ3E3jLF9nevQZLgjnk1peJVdXh3VNvGAiuAYMkoCetMkF7dU23b98w5ybbinj5CxGzNi1",
  "key1": "Cn8w2P9UY82UfvPfbnMLrApP8H4XiaJPe8MpA7ZLNBNFpfck26mVrRUGxwqhQg6cKpgRBNs1uUqN22WA65PdBNU",
  "key2": "4wHcWbs1Jyt2SNzWb9XxbowLWitNZeaepZKt5mrdK89qB1f1huEvLUM7S8iJwYuqokazayhJW2yqKVDbfyif7UG3",
  "key3": "4XjciXknrd8H5k67eajCsu3GVYCFEv2KACVS8xGvqSkg2rN87w1VRzTX4DEQfnEZvFyEjmkA7rUoj7QgRriG68YV",
  "key4": "5wbLxsz6bWfL7RY6CGaTVDciGhdQYXJK4d7Nnc4qEun5Zj6HqeTjgdLBxxCGEsdwcAzW5PTAbzkBobLGdHM1N6LM",
  "key5": "2dKuS1xGSDJToncJiAtUY82ZuCR2zCXh3MPA5J3xZAgtXsaMrP5Pd2ok5fejLkjudYs1QDK9ikaprc2rT7arqU3K",
  "key6": "54SQBfcvj8Lsbb7TaR8J7XzCXRt9XBKfNXRcpCPnsBPgmrxiMtd1dcd6TkRk6uUJaojLZU88aERn6wsXSvnuSawq",
  "key7": "yGSqdQsXAf89M749bCeg5surzBytyYJ7bKGyjMW3QPJ97qfDR4sj3sWwGQg46BkmGNLy615QR9iFd1oaSxxSa1B",
  "key8": "3MwPAhs96sgGz49aDC8TCNtyb5ZQqvvWS9Ti36g9i8dfjFj6mAZegQEWzyaPb9suZsmKWqC28j9viKWADBxMJZEN",
  "key9": "56ZiWx9HbNDYPMGzD9d6MYt7VvSncrct62TjhtY63jQXjY8qQuVZcozRBRxYuHv5tiCqAhbG33s1iK1wNjyDKJZH",
  "key10": "3bpJPWvDhg8DhX4UFShvids2pNkRrbi5nHJdnzzeUsp9N7rFsKbryy7LcZY2CftRjEtQbvo7zC7KNKEuxoZsFh8C",
  "key11": "2MTZUU1M3zu33gMXSAw4zQgLpN9EpVsm1QE2Xm59icW1Z4qcQ2JFN1M2e2xzfhhcWh7fg11UvTAHzhBKWmJE4LrC",
  "key12": "22aykZCDdMBrcFJwSjRMkVbMViohC5QybHfnG4YChiaTbbmwLb4iWSc16U9wMkbnWgyPaESAj6ncsNAoTLR6FKkf",
  "key13": "3ysp9SVS4JRzAropK8yJrmzsu4PyvHcaotECPdxoMVmdcYbuUPz1yHCjjsZ4MobWVyjwVQe988XU4L6E36DCurEU",
  "key14": "3cjTQBrNaTTPfccTk5GGn7XVEKMeDCLr8i6MCjWNBVTtGh9KokgM2uVdX2hujWB9FZnmRk8tsYftPxXBNHgu7sDs",
  "key15": "3AqFGmAfW4pnKEy19znWLkr4djE2kodX9vxLeteuWn8mezDrEdkUV7Ji7QoU1nrFC24T4zn21EpYHQXLA7wB4Wej",
  "key16": "aF7s9YhzHd7WCL2VBAqmjsJhbPvqjSPtvHdxFRdCysGrnHub1gZpBEXcqKiJMDas3B9xGRzRmaVVGxKLKSpXQmG",
  "key17": "2rsJjJYYhLn6uQ3VknKLtv5XsAX95akdqgCLNHdjWX8McaR38fcT8aq2V9NJeKCmyMUsnsc5zCPLqnCmjqJNKe6R",
  "key18": "2n4mhgsrCyu6QXLxS5u6GaNfNJbfThdtQGg4FWiyoEaVJ8EBxei8TS3TwdDdDYWWxWrGLoGit5E5aVh9FK4osnuW",
  "key19": "2zMFnHRCHLyKSPUf87ts7vhFPMjLdE2k6AmLcaz18wR72TBYkXVaKWFEoGKBb36tsbDnyRGRVPxoFw6SRRQFtYzB",
  "key20": "JeVozwhL5xUvhgR7EukXgXyntB1Mcfa1tDA6NipgB5KcGTP2QD4mpwLG4VcG6zYaLRjjd6vmJUhCxQdFRTMBrp5",
  "key21": "2B3TvvbyMVwwaEhUm2S8pCEwgLKMoJVx2d3AqALAba6BTPZ5hn6fe983ZX6exrEthNfunfVUVc9yPHmF7Wuvr3Jq",
  "key22": "4VUjebb5fg37XELqdfh56VoGPQGMYHqpAF9o1Lm72qDUnMfq9xCbRSH7cuuF5pkFcsSUH41USVJ5nobdwHABArFU",
  "key23": "psrZ7VVp2UsUTBDKu9vbwoyJ1p9rSrdpA7Y9mjCuVqyAWtSuAAwpB847Q5R9R676UU5NcLq5w7NwrCopSfduXrK",
  "key24": "4HHpCZSUaDZ7FKunnHcC24W1Rs17c24qFtzkHDyukVJy5RWqN7TJpecWo44T3JQn1WUR7aRSdBo7n5xyH3mg3Skq",
  "key25": "65mT4paYxSZtH6Aos445uRkTfA24bAP1akqQDBJsrakyhK2A9bbcEwdN7teJVbncj2qqGf8u1BsFhUszuJSGVVNP",
  "key26": "3k6apKvAWm7QT3DcDMHqjUwmqFj1otQ3mNUpbuF7pcyQ72zMmfEEENUVX7r3yHoEbmoMSE5HQGNRU7wt13KsGbqQ",
  "key27": "2w1Y9dZu5E7furp7cnb7FNQwEAVG4bNWCSn9B9meTvE7ec6WNHKT5J3CKAekdedhX2Eav463vokBTF6oYWMdax1Q",
  "key28": "2Gx2QyHhTD4VzYv9rmJc8pzjbo8puhCzdCixiZKKcBwqj8pKLswLZKjbD4vXVan3UJA2ALjo4VWtYR191m2DeBRH",
  "key29": "4wqgVTZ5GpZJHvc6DnzrhTToXbEGSCXintc9hSbyvwfcRxfh4pVk7nvqaJ5iyumdhRWyA3wsZwfvV5YZSxkiwVbB",
  "key30": "3YjwWCb1b2ckmwJJuydnSHH5RYPBvQhZYFPvLHp9QUA7zZ8KwyrYir7s39WgeSwQqVKXcyY3bJe9DixKs6adrfJd",
  "key31": "54dCJyPUR5JBtYGmaq9mqCB4PtmHx9spdEyScPkSEtP7KDiufUNZU4PxVVRjAyo315bqv4yBM35PXfDd3G9jtr1a",
  "key32": "3MYAfZZD9yVGHY4pUzhsNzTScYVc1oLisfxDNhgVid7oiijfwEL1yG8WvkJPSkS2RXJYUgCQDkYLLoVYHZhkUqtp",
  "key33": "5cb3sLPXjYrAatW55LadVZ3i47bCfcgQrszLgGHvQTDBqcfAiFagWgAu6UJ6YdiZVAVjZywWePm6Z3spKB3J8F4i",
  "key34": "5scEBCo28RenwWVi3X3H3CeYKQr4xFPKdhAHCSyJSXSKeScnP835KvafZZT6789MuYLLRBzsexLm5GMUH9hB2Gc1",
  "key35": "3jcTF8FRooXY8MdYLwVYFWeskz3RjS76FjHLVBwzFMmGYB8Pr9gG4ob8MF9kjmZoDFi8mNhTTo19XVD2ohy5c82p",
  "key36": "SQZkwfR6KonxkQMUetTyh5VtofSze9qH2v6huoRKpWwyEVpUi4DEjMiEyvryp5gzi7kAYf1K6ghQWtrbkfzJxd9",
  "key37": "31FHbJm4sZiKV51EWavZH2df7o1agJUbuSV6Y1fNKkCNrQHz4bhsHVGNbWvGmmUwJUH3HZxgwWEH7SMAMTHfpDo4",
  "key38": "4tgQdU4XhsaSS65Sa7M8C7piHtagHzZDpfp8kztH2rr83BnWtGoBhQqvgkVzVVcS4owRKz5ArJvRA2pXHtVT7iTe",
  "key39": "5Q2wthMFTJzxJDz3iRqUkFHEhzaxfuaRK7Vn34UPBfps4LYdv8PhgF461o6Z16afmXykpTognV4C5MF4v9ywt4gv",
  "key40": "4SNehPTFrsCLbbPX4Boh8nfFxgNe6bUnbvPCxgJQc6rmb1D3s95gxjsADRsLCm9TC9EXzYo32j7uyera8yC9zkGQ",
  "key41": "ibbbr9P2V3Kwy6zZsvmZojY66QjFXKoy9f3F9AqvhAzsT8mVKPEsQZQZfySUdktSVg4taYThJr6nn2MNL5w4u3H",
  "key42": "48MBoahvzyuAPKjDMaXz9ttMkS2h9DJKB55rNpcDjbJ5fiqqGSfE3GDtRA9gTY4WG6KjFJuVCqVEVR16kdUpEYJ8",
  "key43": "5ZgCxaABipm52N1LZqZ7E82eLfgPwBCucsT2dtaRfrzjDKVwM8BxPFXhmHmzMVfoBfJ8KefqmhuPtVRKC7LvC8vz",
  "key44": "PQuUSDRnq7HeNPLxoyKQuvL8P8VpdUkyvmoeNfVUVkGWhguseQrRzZNwY5bopyJYSDuSNqfWJZYvEXb6QsZbKvF",
  "key45": "53t9rD5rDiZFMjv5jpX3jrCRs2ccmsMp5GZCeqMg7WdbN5Ckjw87CzhUhVbjk2BEgSj4nTSHURTRy4LiZSQvMp8o",
  "key46": "4ViJ41TiSFdTt3N4wXD61RAFEXEq3pBoJ9sh3GP4CXT8jZ3c5F7px16jjpYutNNkm8MTmhdofpAmUzFFYkUHggJy",
  "key47": "4bDSnfH1RLPzb3heYXTtoxkNe1996L1Gy4petMALgH7vCk2EnkbpN9cMKaGLTMjMZ85sHZ6mrCksddCqkisfpb8P",
  "key48": "4HyWX48vA2NQr6sLQSthCUk5GWW9CPSA5ANEcNCA4a182qXtdzZFoviKJ3hb2rZhk5X5bx5SDEdS8ptyYLXiJzZ4",
  "key49": "2N9Y2uazG5fz9WWske9wXWX3zNuFehcaPHD9WfxeP9fydKtWh4TPmH39fgEw93yUnjyB6Sw6XMVNyx31oHKHFNA5"
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
