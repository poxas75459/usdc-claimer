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
    "g4KDNN4mAMEqdEcHS5Z5S1j4TDu5Cmhnk4w2fgBHDf84dUG92xL2ymJbdgcoT7M3GzvJpAnWPpP1sbFaSgw23be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KxorGZUynbkrcQ3C3SmckqGVepMFAgyR1momabvF1XUyxLc34zvEMLJxiUBd4B4bRrL89g85YPnACsSVArxracL",
  "key1": "3zLrSC9oyjQP38oVJcjNGTp5cowoAK2KgPxEJQHfaYr7xzEiaq1hrHuKY2yPtPmLPEeN9wRLmcktBePbWMoGUzBk",
  "key2": "qsUkz6bVzEKVud4p6DbxzJD21hTgH977q2TbRHzaF4k9pSiBeJpWYg4Net82jFNf4WnS4TTjgLuWsL57qhGMGFf",
  "key3": "4iNqW915tsPwovnd52uN7CnoNxF57Zu7zNxd9rnwT2p2vxNjL1zmF47TZKhQ8WqPai7nD8kh58AQzJDz4cNo2LvB",
  "key4": "3JaPH9WpxoUKdjgGrcLcNdaorUQdstHMKzsAwx7qPA8n7xYJnobE5K7uSWvntAYVrPFJAdmBvRiJgUTaoQmt5c8E",
  "key5": "3xA9K18xL8qxZPCkbaxabfMBcqPBm1G3bFs6BRQRssD9w3amLBXMbS5aKpn6sKQkqHRCZdciBFsaqb4hy7migAeW",
  "key6": "2apr9twHDX5p7ptYBTJ9QdUotvuc8okUjDjajNzGvUug1DRQd6LimaLpET67eXR8amp3K2hFh3S7a2Ec2cfBd3US",
  "key7": "5b4L7G786iC7csa2NTCeBtqDXgY7Wwag3jfQT1RWkwVTJnFaf6VxMNekmXLvAAymrJynJF3VwTvB9rLZc3c99K5D",
  "key8": "5pokNV6anB3JN76yJQUvPW33DFwyVendfegfMzwcSJZQNPabH9hsakokHBMNspaEh5JW6eJqCSWjrNJmyw6vTWBD",
  "key9": "5DokUNoMTwyPDCFhqJ6RF1G6oGS7HbU1yj59bAWFXhLyspppAfuXTyM1bBoxmhro26qGD8CigcAk8xiK4Pmp9J6o",
  "key10": "4Ga3ve3fE4xUrPmwTYk3cLjFoxXQUasQB7snnL2JZmkWJSn3jD9gMNdutMM2mrgzCg6GNDbptrbbYTi9muemz9Gz",
  "key11": "2BPG5sfUvgnAtYsSpHQzWzy1bssZdbgU5wj6Aov7943SYa7Jep6S1c62piLwqDJSwHMHxYe8igFaT5B5QuDq3R6z",
  "key12": "39x6stQUQw5JgbW7HTsfd1uaGpeMkAyrLf5EcRGaLfh268F4wrgMMGTG3Wioq8vWf4YvMfURqiBQEpTNBXtT2jyf",
  "key13": "361VLbHivnBV5xd9ueLYo7Mfend8pXgiw4xyr1UFcwPX71NqXu27btGrPWSuggqDcsywtepKtTzuuEHqjUCXDrYz",
  "key14": "4DZfE7RcFvGdWYEaaeNm8Pb8WX8b7pEj2GfD4FB1r2dJ9we8yL7zZUP1rGA1wrSji7ihcq7YTJmXU9cuddQ46kYU",
  "key15": "5ByDPmywDbEsxUnjKYG3Hv3dAjZ3MbW7qHc9gcnAS8HaLtXtdMuB8ddt9s7nfHoLuCybeA5tA8PQHFXod4oqmZC6",
  "key16": "62tX5fiDquDcGUco91MXxrWWhePLj1YWBHfDUwe19FfUHeKU2DLEpUbDEdCFebKoTfPHXuUa1hNhxc5Vmoepb1m9",
  "key17": "3U8Bf5GrV7WtqWsRdax6CFGq39pG1rpiVy4zRBXbPg4w5NPpWAaZfEkk6nkp9FCMvCKBXtfGqh61oAmYGzukCnor",
  "key18": "wjdtNSt81qdGPBqYy4uxjeM85Fr8XHUuvGV6hnMQcHtPSXufnYEWYaCBwZhRgJUAJu9bQMVTDftbDsWGQZDWruG",
  "key19": "2DcBnMY1YhP4vgqBsqeKktBdKfvYZZqnqryRy728vXCAog6URkM8PEJY6gydfqzig9nKaLGbxzS8wdaPyXKmjJnd",
  "key20": "57yMGkDdCYVULZg9kLxu1AR98Jj3i3g6BXQcHoDjqxWL3eQbqaQ438USxu5QomSKTN4shgimG2CyaJqw7KrGpztq",
  "key21": "5uPyG8Au93FGgpcbxbLQez2BSaUxPHFqsHhh8oVE3xJmG6rqTHhnGaLUbBMm81ZFSVMiQF8erjz7forVoy5koZBR",
  "key22": "2TsCLtcwt5LUcGdHpzG1KYTb6f1MDHbpmxVqTwB1mykENh8RhSBRaEJNAVGsXTQ2hiNGUYSoL8CHYhKpuq1LaQxw",
  "key23": "653jDGP7UMfJM8UaVQVMxhKVoMnH1jUVCcW9nYhBkBcs5yTH4EhiBVnswaYGjHpNKrJhCEwkP83KrwnRv1Ur72ki",
  "key24": "4SgYsSkMQ6Z9247j33h2uXzca5PiLmaHjG5CLj8HyfzFbWRUmgJjqD9bsN5qrn5DkXhemNNyzT2oC8giuLgRz424",
  "key25": "Hv87ZBBtPCay4DqNjym6oSJyicxrRcSRLcXix7xgFNbBmA7fsTdjiKznPaAYMHneZHwwbGCXUprrLzs5EMfpQrz"
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
