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
    "5iuntTuTvcmTwjb4xpxLHpubBjxYFuUcnG9eXVpStM7CszfxyQ5EjXDe1sjf5JqTuAe9NGEaDEvzcRPHsPFixRFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R5T8Ye8Z9KTLfotyGuymyw6w3mZREvfa2HaDqXtjwjkaj7AKVpJiFV8BBoLCweVaoJzscLdho9DgmnZzHcn388T",
  "key1": "d9W9uQcf6snn8YDbLQxEH2jZEm7DH8zd2Ps2fibugSrP6ZmHDa3p2LUdQe3SmThe1pxe4A3PB1ZicMJeGxRArWg",
  "key2": "6eMSou3d8Nup1drwymFZJVMH9HjjJvog37pvaj67UeGreaHJCKdKELo8KDnbeRvLvrXK8Q3vTXaB31yhzJ3whvk",
  "key3": "3EusXpSLsYfz59VPZXYtjmcck3uGNLScSVHbLFSgGZGVoNAR1jzFgsu12GFpPHWSn1vwwsyU3JHRYoYo1MPc1t1X",
  "key4": "65iQhTvjT8s3338aNnH9ZdZEVPcHqSA6Gg18gxkcZQ8oyXp5cKqza6M1AAELpRMRBwrV4YRQaHbAbD9RpS5RA5iH",
  "key5": "2sNndZE6r4F9FuGp3xPptdkAHetgLPmwu7cnX8xgfxfQY2ASXX7xJPrdNs8fqtMfCN8dv3mo9qYbzWjog4uKBTsb",
  "key6": "2RdEZaxnw6BxXYuTC5xbaSsaf2woV2s9ib3FxC4zVyBwiPHA11W5934jdZJXbggUR4bEJ3NQw2i8Ebp9RNZJZx5e",
  "key7": "qTeRga7UBfPGomHJJ9DCVnwoePggjjHoS7iSCfCkYBBgnkefe21RRMDStfoy2XN47MTwqMVQUsy35pJze4uaRMf",
  "key8": "M2cgBueLY7jvm5yghaP5ngM3SsGo9fqyju4YJTwZ4xpi12p37uPXXMS7VJDUeJJDxUkJxvSXk4MDvsdi8wx5kWs",
  "key9": "5KxdMH8fyMY7jNard4jAKFv2YFa6Zt4BpbW3bVd6hL1SRBr2d4pANstetmC5qr9pSW97TPc1xdN65sQvdsmS7qHB",
  "key10": "2sZPqo75bR5gPhqNDiZMvZ6zqhrFwm49QapF3a79Fvv16kQvXM33eyARyAimAQbMtYwU4sLDPYaVHG6BdXUjrJXU",
  "key11": "3Nrqtok4QpLAnFfxc5pPq7yqSRjAkmLtCPdXBKBeUXBRtmW93GPguCnyEiSoKsgoUBtzUqkAXpwLG23QcbMet97w",
  "key12": "rusZ5qhh8xWfeQ2HHvjpKD5j6xCqT5m1x5DQgoJQj32eyZ576nDnGQhSx65wrAhT33ZSAy4gLpyA6WEXXTS8QmQ",
  "key13": "4iHznjYX8w2fz6ZjmZ9reY5cFdGevRbZxNcn7L9VegBEzt7oagnCumSvqHhTDvUL6ZixncxK5wGkEsyP8YQm4mo3",
  "key14": "5NCsHgzRtH9f2u874yStjoUjhi6foD4ZnLSrfnK2PWqBsS4gnif3yzz6nA8TGmYBLpX8ckY5d2ebeUC2ZaLTVcW8",
  "key15": "2XFqsCw8RZRqwe91TqMb9UjMR3YMoiGkBMTUKCbzq9GTRCiFuj6ADYWo9Nv364P78rnzW82VYLV5ydEKcWoAEN8K",
  "key16": "9p56VV1edegMVhUehm4t8TPAJtfgt2sWBqaRqjauSxT2SdbuHPXreAsr36p2w1Uq9NawD5S2py1Q577uB6bV5pH",
  "key17": "56puv6kXNhzngFe3F6267swT1poZrfQ4KQ23JRSRfuWnUEuoH9HQ7vu2CQS5tbG76JVMbJvrggk3VsY12ttQDur8",
  "key18": "4jNTUmXnFz7c5Q7AxpwvLexRfFmZ1o83M2HXPwgwkC7fTygVLEi26HFwsdz6BUXNF1p1pnzrxsGAWeJWyoVG2jab",
  "key19": "4SzwVDrfUkbLmVaUhkuTvYKRqojvmNkU5h2oc4yLaJzk8oruv5RxAdACQpwNsf1w2H91WEKWjvF2GECwSTaHMyQg",
  "key20": "2PpGDKqj7PtxE8YFxDHgz9fhVU1DfePfsjciYHg7eDCVbd99im24E7kQAGWU7Z5Cu5x9S4vys1Bfw8a8jFVLi32x",
  "key21": "342s6YqjrMekcgG5jdbwS6Z9Shn29BQpDHf2YhRRYzwdEZmfcFKdWtDfW9Y3KXnimp1LyVsN8SRWkRzNQ8jK175c",
  "key22": "4FfEYQWQ3iQz11snDD9bttnh9aGf3kVYeFrmTbm28s8rcAps7qAijbe9teYubpXCMjAhwzFgXuAT469SiZr2UMvH",
  "key23": "2oam7R1zjJLDBLX6jtTtyY2ic7JTrJfJPvBPEQtkL3z9gBLoe96tB8kba1SFdk2QYodYHnenQq7CupsbXsRkdGdE",
  "key24": "2SWU6G48hTQ6wDrJsE7iDTMkmsouRWcJRzMUy3iiqhEECmGRV2VcE8LGbxGdfSGeQSbpMKJxAAcoxttXkBhZJQnJ",
  "key25": "2FVRkSqkshBjVRWqnFgwvrn3UoKcLBpogaKgHjRPWF4Hb13Xm124UgAECJEdZ1rSADRzCTkW7gushaw78e3KwT4B",
  "key26": "2aT4Bhsa9VjK6LkNRQStrwGW9FnGsGLQr7wSMjtbRe25YvBxKxtSU4daBspHjvjBdPZr92NYZAETcCkLMNvYbehx",
  "key27": "4jF5fPoyvX1DqGUJx89XAxyT3CKDfLtSUoqpcozb45wbY94TMjR3vMmNZpkqkHXStEMSc2HprDvDRuXG9sYhwUTE",
  "key28": "3mhZ7bgAkEG4v59uZG68oGQASR9rxm3BAED8ZdSfqBFHeCxwXtf4uyJCowVVckvQ947ddBMXYpWJmutn6U9FkyCj",
  "key29": "3m8qi24sF4akHmh1FfGyNpgN1FkTkRHmryKQTw4hxUk9DAGirdSX6PBt8Cjziu9TMhYzFxmjrTbRMcF2LPUV3bCb",
  "key30": "65kbjSgVS9SRnE9MnMuEv5JiZDx8Y75HaLo4vmRyU6qfCoeMEudhToQWNJVUG5ZNaSdRJfPGjHgnpJ3aRTPruQ9k",
  "key31": "2kbMyuuKNy1KhRufTwxUobKvvYGWWGukEqQyiXhpo3jy5oiYTGk5sbpybudKCpVVMGqNNP71XgvUfzLaRAAnhMzD",
  "key32": "4R3L2LvjmHnUR43jBHWCQ5zrw93kWeHnCNM5NM6SUtTuxfVnaDW9ZAfxTKXjMVPm8JJtm6NwEGVz6fkMs2GVoLaZ",
  "key33": "3eMSsvcnUhSD7EPyVSrUVS7DdpTJEZYhqCMB8ArAg8ydsmf3VhryqmPrReETneGxfxhNupooYtkMGVTuC1uyvVjz",
  "key34": "36MkYZgkMPBqhEDqEnQVYLLxRpDHydyeH88H1uL6oZ3fZ56QVvGtYGH4WEycvTjxHvmRySydTSKtEni5qnmSD127",
  "key35": "67XBv2KKHJS9Gd7oxWZ8jY3bhUBRD1oVRyKquXE49qdH2bimKyJjnTir9GLhrtzPH6sXEjoMKkiVFLEwEHMQsjzb",
  "key36": "2R2cV8szapbgMwD8DZLnSegYjZeDxcYRh9jWbE4tFHcWoXnk1HU41TLr8knwnzwRK2HPnA2RAfbNjcC14Wtq6uE3",
  "key37": "5Er28pypKYau8MN3LgQCfk6zt8RkvbiZUXqJSEGLtsWqkTnWYUQ7GxW3E9buV6CYTmv7su9ZzZYHSdq9FB5a7i2R",
  "key38": "4TtoRqcS21GaeZMZ6E7VYtG4tvxvriEbnTPSgrswPvkhnTDTo8ew9JtVfntDjijBQZ1Tt6QzKUqmpY2nAhvG4x11",
  "key39": "5aSH8Zy8yR8vEtDYvjnwWfiiAn4JwyQMFASyKRQ9D3fnwXc1SKVj4BjwiZyxvJzavDZ528vLsUs2Tio3pB8BCg1N"
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
