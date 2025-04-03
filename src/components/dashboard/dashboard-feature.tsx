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
    "5SeiLK28FUpv2ZmbuA47aSpaBeS8FQBgFtUMe9LiTQbBdKQuRiWxy1vtbEe8svBuhJymca54TSvud4YpyvCPurTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hKWFudhF7CfYhJ6e9cAfHs9U2MgvtbLryZFd6rFqGqqofqAJDHoirC78TN8Sn9jUFC9s7wGEPdprhgP4s8XgEn3",
  "key1": "5DN475ZoXxd8JenZbJD7FCv4cVbDZksHa8TFsypMDgPJ5ryYGghi9nFjqRobXCMYbiYTf5bfikiHezRcs78k7g8t",
  "key2": "2pKkxtawpAVPvArGyeWQertLmsQmvC9zbtPBhohh7fFeNrr5nsJ4EYttJHa8T1BBN34NTwSZc4Z2KdE9LzMfucdZ",
  "key3": "64t9PjC228fNoVw8W5fopao1FgL4bX33ZqPmbh28WyqCwpSJCoR8F2BZ2uiN5Gzk9LfZdwzs8xCRdGcuE1YkJFTG",
  "key4": "x6U7BrKHD9MfHgGYaWoapyeheFscZ8MxLEx9KP4nXdDokuGRDQoK4Ut2NbpPmpz3d7sCiQQiXWRJd7QPiK12R3c",
  "key5": "uCXVnwv2cjvLGDRuz9Z6u8P3UgFgQC2LrjdET1gS7TqS92EBDpx15xdF6ou5DAQHVyMexTViKkFC2FWF3w24AcL",
  "key6": "4LSxdp2ftg8W3MhEVKpLM5AmuDypsdcEoB1JE8P9npdYQp7jLaCrAQfgnbMVuoDemzeJeBiH3sND4sSYjN1X1Mtw",
  "key7": "3FbCdfgLjV2t6B4q3ZwYsEpjrRBNi8rrVgvbVyroQFh9xpocFEbkhMzDnJiuTpz13A5fmjoBdraSwcBcndjzhega",
  "key8": "2pSAJZD2dSgnuci8b2hhWAaRM2XbAXfW3KYNY9Tp7Gvsj9ZpurgG5ZY5qwStyJweH6AiHs69KDP2BVMim8XBJRGG",
  "key9": "2GXetkTEwXRhsyPAbs5qetq7soBsgRiGhs8jRBiyorincAGSfeSK2d76s3XetcYFfGnaKsuiqq7dswLWRWnbDVMk",
  "key10": "5e5PEDRykYZbh3bg5YWgMF9VH6tw29zM4NXhxSoEEQESKwREhJ68dyVy2DsB84cokZ6ktGGc4skpKGWvFBBjuxvb",
  "key11": "4K5RMCd7Vm3gmRY4uMSdochX68iPFUBZfAPTafd9DYsiZNgaagere82XCqU2s4qBGdTsgTZwUCEmzgeMujALZD8S",
  "key12": "2nGr8scLJE1uKNr8hSroipZUnEsgAdxQjkEjK6FRrJjs1cYE58WMSbM6LyHTpsravm8sAu9rZ3B3NwFxwHvHDDzE",
  "key13": "5na8wNBxqsagm5tY3q2D5JZ9E1kTaUqdM4TZLCbmZRWLRgyXGGeL5rC4w51kQVDTyguHVJnNETpJmr9PG2jmZLAA",
  "key14": "ZGv29VBZVABnTPQmBRcCCoF9Q3mwnWN5TZbwtS6FmqcaZYhfUwpFNb8qvxc9DEt69oxrKXkFN7jEEJzm2qtFbRJ",
  "key15": "4auWFn67jM94NMzU3Ccic46F9gyaAcWtNBMEUYWH6L3mxJcqnv618YkFJqVCuvwRhJVATHjAqRUBoqueMpBKY2uN",
  "key16": "LaSGqwLmG8WYt2WnSYL6B8nL6fevRRk8ywWuKzyiRUdrn8D4wVBrARPF59uf3zn7cUkevuwQgHFn9Jp2axMgHpM",
  "key17": "ViGDMRBwaj7M5pLCxsBHnvqhArzEKbBLUWGBMVgrwKQo6qhZbj9KBi1tV13oKG4EYzhcwLTFRGAUHfoCU6ySKDc",
  "key18": "3WmJ6spyKWt6Ja5pRXPeRKhMXkLWCFVQpLXJQ4Uww61Tdg6MfWvZQF6yMbsjtrCLoccxhVyPtTYSyVwhZdTJdvtg",
  "key19": "3pubmXC21Wpgra79HZm98vXvKhDxzZKERUaHnkLYsfPvQ7YX5MNK56Y2A3dnyhAS3nDowgjxBXD9WtgNGRsAZChX",
  "key20": "5ZrNGpUrYzB1CGiP4bYdhgHo7XTan51wRcaBrHTiRS1y2yHe8r1VRvrx6vsUJkj1L2A8vk52ueuAcMkS3wgKCwKD",
  "key21": "4uChp5a8QxoabYAgnHH9PLKJvm8nDgQ3sSysM9U8qyWKzFCYKV2R4JiKK52Wx5NBGofp5zxcqhLkk6cVyLRkeje6",
  "key22": "cKJzTZQRTGaxwxZp8bGLUHk1tKprL1rWiEB3EAbd2ECkibt2LRdY4YFsmTNkHVn8TgX5255pgtvED8dGwPYvuBo",
  "key23": "3XhDXRcHoi658MimM11gbYYUbaRVjxdQ5ddgKywegHqZFmokkALAT5TTAg9J5auAvbLigB5BopiyBmeN7oZ2fWCE",
  "key24": "3cpTUhvBH2nvhyfNPASCgqjCDpRcZX2xFyDwxY4ZZ87Nd7WJrtbpybKWgDCyNFhKbF6AMESqZ6PMxhm9dKCRfTkV",
  "key25": "3YvpzTnsosoMKipWKpHWjkobxxKdvwfJ8EQx7xLiDYoh7RCmFPHZQMgqVhMFEmQiQ7YETn4k6BzLpSwMF4LvG5b7",
  "key26": "57mjrU7dWCKW1ngyebP1HVqyvQMr1VjCj2Cb27QMzNSVFnJzAibcbAkAkStv89n7vr6SFJjn7ayBFwgBQ8EBo88k",
  "key27": "5Zaq2i59HSSZKuwgaYgMHums97LcNki7efqXgJqpJVKhYtsYehYQg2hMina5czuXwYjvBRKybABQPRD3C9KmreHx",
  "key28": "5YwZVMxXQcpE8nZgso9RgJtckeb9hwenWSm6xrdhGaGEGRrT3dbwRr3nuAsgrRoAwMw14undUBWbGX4yTrBj2geq",
  "key29": "5bSjucDFpPuG6bbRAxVwpMUvg15Lgd9qYB3xqCQ42h5w19H7tpHp25Ltvxx9N1M3SfR2H2mjRKusSLNm5BaXKrPf",
  "key30": "3bfcQbEMChpEcsbF2E4JUNXxauPGjPT3Gk4AvxLRSgexanJpM9eWcpiX3zxkYYLxZMRcgYXtVQGXE3kZ8zrueyQE",
  "key31": "3KpnktKGadJk8J5R38iVYNzrdJi3J7MoSPAXyW4kGZEmh7TPdk46DAenzDsYQ5Kg5Cc6xRDCiA1Ss1vmBbpsiRgH",
  "key32": "2aeuEwpC3XwL5WFLu4ZD1mwTfed6Jv5wNejTCuyexBp9fKA5Ltnm55K1f4QuT1rxJSimKiatz7VpmYZ3di6cZpWd",
  "key33": "5tqVtZv1aoLjPaLrEM7EQ6U4ZE9wsrJHrrewnei36nfzeeHyWcXNiJRfkAJWrUMtK5CzrWs2hCV3Rxi3pdg9Wggi"
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
