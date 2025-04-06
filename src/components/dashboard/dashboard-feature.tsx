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
    "4995zK1zV4UxVyvTh9DZmiaPySmXLYQaiR12gDZ4boKeYC2rjbEVNhgcZQAQ1XEiw6S3qfkpueJM8wDyTcKRboWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MvgTNVVzpBDCo6w7v1Z9jRGzHKNUhB2Azr7UGovRkgFhfaCKahtoeg1oPfBJ88r41Z7QdWfZE1kiWBc8QaiiDDu",
  "key1": "3T27rtW8asJieXbWEwx1WxnkD6kXWprXRkV7bamqJhjiVeyDS9myVhWEM7wRxnAwqARTDtjnjfgAbHwxNHyN88Ct",
  "key2": "6cGxya1niLx1zE8xhU4Juzkaq2AAKanScmRPj9GVbrjSpZTW8KJw7DeTWrmMcn7jrN5cmGdBegwKiY6QWqGsjnP",
  "key3": "4uP33erJEc8EY8WeUg7qrzv72EL2Bh2mzqBbJ6PvCnTSST5uKqXqsetXNoQxL5XyepizFpShBB4xXMiJXCgt8SAP",
  "key4": "445b3msVHbVZToCKU6CwimHPYaXwm2UK4iHrEveaRiEbJZrAn7wDakwfRmaapbRxA6CBrZvsiK4PCbC2o7pEzHjc",
  "key5": "5jg9XbNC5cRaEvhvNGxMqCKUHtjC1mnHW4LSzzTfoktfDtx4X3VWxcspo1aGa4vB4uoWNvXfegKDpvjKksZJYs9o",
  "key6": "36UBJDJU688o4VikXdRGUvPGgB4ScQKdjhY1H6DgyMQ7muFWz2Z5ieqeR1Zvt4NbD7aLkgB4kcqvo16jHrH8TMGq",
  "key7": "WaAqZJxom9R15iJQVgKThDm8bpKzcmTNW5EKN2xwtjwLULvzLrktYxkB52JpjpYgEWKrTLppJ78xcXtYsvNhkGJ",
  "key8": "ZiSpzMwCrTtGSnYJru3BEGphvDh99NeeAyvMGAQkqM8ADUpxGVND7Dj9xUCVcMNg15Rpm1xJmZmk48r57mCsUYS",
  "key9": "4pQBdvAUQnW34WVZFZY8Pi3HAajYdNHKfhtvh6WTZPvA6kmWbke4VPShqsT62vstP2kA3dh2itUB7tqYYnb3z7tU",
  "key10": "4AJLfGLHnJyxqr1W99nwfTnEbhEYRQBVpCUkxprMEdLTEDwHoBh8XpyEok5R1Ld8cpnETkAWpC7bKnxYWVJdwRGV",
  "key11": "4a7n97LeWUnwdcZ8KfEpeaXYqM5wUSHZATuEoh9mNbFY3nbT54JstfCamLFxWYvfmd65MdPgTL3ibhpLyaPQ45Rt",
  "key12": "5Yx2NfF7jc1VLoLKKzyWmvnsqG4wWzyv7WkTYU3niQJ2bpk8hK2YRrq9cP6PxCkJwozi3kSsGbZ5iAH6dPSMT9uW",
  "key13": "2N16YgNFAVefqrMWwwT18Py6kLk3vY4mr9CGTWShe3A6GKvc7vCNjP586X1XLGzb7umgWY6oegJVG9SDHkkCeiMH",
  "key14": "3bEdProLdm6yG9Fkr4frtXHwrLVN5S4NZFLgoQodhbfQp69MkYTGwtpaQqXuDqjps8wDWzMQpjKFWkYQP3Pxaad1",
  "key15": "2cKphodgzenRoZrenPss76DgS7ZjEuupodBWQyqNmWhitRyGdJjEskS6xC42eg9qLkDfXD4urnRcv4qm78mzy7qC",
  "key16": "64evAef7PdCDY1VQ6noNtPQQgdVqjNd8EbnzvbE8uKAatRod3cM3QvgNi7ds564SZxwngGhKmR4a4FTrcWSr5DWt",
  "key17": "2x852U7Sdf2wjzJ4gYUmS2hVgBkP5HEZSmuR1mEu6drfYzWPKMMrjMpZFf15tn96TupcxnaegemErHLJMhXBFms9",
  "key18": "3KNJynD462MX4GM4wHpwvsiJ9QkqVaopz92vyHSyCVGcYATrp91q8JCfnuWgxVSPbJdEWHkQng4YFzaCttABBAR7",
  "key19": "5V8DiZNKFunnLmf6D2DhUWPBM5gFK2b7ZpvvSnQVmyRXZQaoU68c811MqNmyfRcASM5d7BnTbxHSaecEGVg3CNHe",
  "key20": "3NbE6Zpuc3B3gNCxMsLaDDEYZXJQLurY3Kx1W4Un5LzEVFnY6m8uHvZvRt3WGPxi4R7YQa1GngjyKLtGrUkLUjoP",
  "key21": "42j9yBZEUmeEnskSBK2taXkNrD3oLYeaHEaxnsv8SmKYEB3h3JRSTvQMCXzWikiBLStSpwRDwxoPUkZwnHydcRPz",
  "key22": "2XmGMbZCiqjEcavBzxjBUnKMW3daYaTZHotQBRZW7DT312xX9rknbKAaZCnCJV4L2duKLqp3dXYazomV18AC8f4x",
  "key23": "4jzvRfiaPWVniZwCh2KxUKFjGgqWwVD3gfznuhjLBeoQUPNgUhhGwpZvDFkHvZ2aZhnVFobqakJuQ7ykLgfeA6L6",
  "key24": "4GgotGyrvtMBxR5q2TafRfRq8L6dEWs2D1GCkUmvqcb1cVEKAs78EsFB52h5sFnuk3E8cSLhbtcedCfXNvjL1xQb",
  "key25": "4TfYF9uaSWCTLHDvGBVF2EztTqmbUxccNZdKg49ZWXZSH6vA6GApLKi2Wkj3KbGSvDFN62sVUq6jn5NQJi3eeTM2",
  "key26": "hEY1dWR94ETE4RYp6AZwUbUU5gKn2pmm6Cqu4mTiBiyrVr4m8jw7dEpX5w6oFQ2v2Lq391M8ntK8w47ADfbosPm",
  "key27": "5w5J1MSWSGfd3MS1TkbtJCZAQht1Z4ge9jZoQcvFNRr9AFuDS8eodTN15h3WxY3xqzpiLPpSbTaSYiXdcfVJxLVg",
  "key28": "5H2vnwu4TL4M7HmenQKFhGJipi27SNtg41yMqdLRKBeEWEJrkE6sBr614LMWV3iuSEDTsz1E335HhFGdJK746973",
  "key29": "3KtgU1MqcepVPKcQPsuyXzfVKDGGYt9TR8W57tCFfpTqxshumhJEpGCWLyXLT5Spsf3ACnoCVzKJhWbbLU48vaJu",
  "key30": "3rCb3153r8bkYzKRCDg4bNu9gEZByt9eQg5Utay2AFdHehhmRGgCivDfmiqPJwaNzWtbp3fFUAkkRqVNAQRVazqz",
  "key31": "5oJghpSH5fqbyGpQYPP3fDKWW4T4ZTmbwGvsbA4xaMALfAP2sjFR2GKmRthRw3BXZUmRH4H4aokeaxTTmpJUiitr",
  "key32": "4yYRCAK1Y4ikJgVukihHNFZwvJ1wsDdP324qNwrRfY4WxzFGEPdzZbM5FQudfqYGEraEBAHA3LqhfBSx8vK73JTi",
  "key33": "45YtpkQSyZMxMRLkpgFmgcGY6TvZhQwbooDydwLYwPushhJJXSx7Y79bjwK3DoDDpEWcHiyGkkbCQhhWAXXgzW4W",
  "key34": "36PW4QPF1MuS5DRXNK245ngt6TFvqrf6oC61RfsUinNK7DxbvWiuADabx62vg2BtGBVzoSBjDwpzp8R7nwQtHocz",
  "key35": "4Kojrd1VFBBWWium2864BCgqHNAV3ZMamRyuNbNNwUGpEPqmQ9LPeZBRf6xwfAMXYYZxZM7ipPFSRcu8EphQywPH",
  "key36": "3XoX3VMBjUhFME5qfts1rbwttLuUC3QiirYMCLg3boCcigLSJuXhmUkLjmF7hb22SYWLdf5DFC2Yi1rsLynKmgKS",
  "key37": "2d1NXEra6MLCEoA2Gk4R2WXDoHdRidQNRxCC8XuEsGitSi2YXUn7q5oz687eAp2oSSLsmJ7hrt4CBxjgUF77k4xH",
  "key38": "37PEWCyr8iT1HLyML8wcCcfeEjTM3ewbBHHmPPCHdaLE9X1LDm6Tv3LWrL9VQ3BRayepfk1rLvhrpMjGGpgwhiA4",
  "key39": "332iF4s9EHZ7op7J3qBYUPY9Cv2WqnEnQsPsYTnv2C7B6MGrQwCySLowoRKbN94jCYHAmeZXBnw1FdhyGJ63ihy",
  "key40": "31GMjdh7gPeEa9xgGQuFd972vgEfPcdXvP6LCabyU6ghEFH8q7thqFsYK2Aq3qvXwuh64mU23Je6vK8FUrUC3ZkQ",
  "key41": "22HrFk4M8KKC7BLKaCt82oD3U9KyWpA2mCfNMEJMuRY8yFbVLRuZXi4KoJDdNfTAfbBNfHQTyNpJgXXpqpSQ2abL"
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
