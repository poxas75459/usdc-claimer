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
    "2eQWN4LebApqj7uPewPPAAVfTatAKAHatkfHtt9LVsVfRwUsbwjJnBzCQvFdvDVKb31er37kWqcup8DpFYZVSHdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CB9WeH7XaG3bbSb8WG8Dznf7C1cAnxW6QYonQZMU7DGjqHYSe2HBdRAo7iTNtDZbv6gGb5qS9vkWmRrZfez2DPT",
  "key1": "WHuFmszMytXwXcZZXEedpQXXFKj79LFTMoXAZ3M7jmyLssrpCjBLKiDeXkFfRGV3GrwJcXbVWHwa3yDp5HjSxmR",
  "key2": "43ZMBWn96xHWRhSaY3bp74aqWdjN6kZ6p1Du32m8x8iuYHrHsBk1fW5KWLx9fSZLnbTVNdmogxH2ZheAsmJLpXDF",
  "key3": "5QFxERV1hVYk5tFu1UWAr39WqVHjGdqekjNQYG158aV1QkgVqoigApULQG69YHjLuYXNZrzQuYoZuEoAFtYAGqPQ",
  "key4": "2KapHSY6sGLx1Duf5LfwJsPnz3Hpy7zeq2MG5aethcCM6qeUwAqs27zjqufMirwvRjEXWxz3vVmJ7EWRjQw6S415",
  "key5": "tg5uGQKhcn7kt1isW8eBERrQxbE3vrUvHusyYfnFmY3qFmFeiaWbbZgV9Numa77ZH86vVRHFgXVsPFKH7XV6VGL",
  "key6": "4xh5fL4jFRU5rRv7WeXR7SSCoNRB9Gq48Fsty8Etp1ZRLvPruoW6zZj6s7zaRQQyL8TcvCmaWwj2CbVseGxXGhs6",
  "key7": "h1iq74Gu4PcXFuNdjT7EK79jw2SnbEX1X7ydQ2Btjq6zDopmktc332rPrHKkqdxAZd5cL9ovB6AnR5q8igTN7x4",
  "key8": "67kjTeNMawRNeea8zpEu3fBYK6MuBh5fD6wqnchTTHX8dvfd4S5LQ1Xcsw9eRuq9dDeLrT1ojUThKEqouHMABRWd",
  "key9": "xjeLGYdkdHpvAFPXpDYpeFaBHj6GTXMpGqHuCRyXEETufpHPMiQK42MfQVusFU5wZ6FChvehSkragmuKr8DqqtA",
  "key10": "57MX8i9aCD2JUXaMaHwzUmxnZk4DDN6rtPU1u11c8DuPfaG862pQLNwxuWGFbyd2NHDcwz3Xh3uVun9LuRqxkB4R",
  "key11": "4biRrmLRjYtVPG95q9tS7ryW4VpnTE9HpUpm1gJhAGGJqbmJZdW9J9J7zYtG26rgmdhXFeW9KFB4TCJ9W2DrEJHJ",
  "key12": "2jufvW4FPXFEjWGVFS8Ek41zwpbamfoeRcGnyQ6kQNUg9XPYRL2sPiBPYWjz7GrZjSfBEx3iJCFeb4ZDpqmpu4Wq",
  "key13": "56b8h6LUyExRBR7MPzYAK8QR2GgpwXszg2A8QAKnYHjkofACcdh2f7WMnptR5qjL8DU4qCEkp8vQUfhk8FU9aeZd",
  "key14": "2eE8GinNRc9rL6f5UHHnqUtynGGzA1Sujc9S2se8Ka6Rix3SfDUFWknQ1pYTvig5o76N6fj68ctYgEJbLhUAY3do",
  "key15": "3kQ3PekzPAPJgK618aiw38Q6GzMUCG2JtAFoLHVUyqyhafRmZUbSHkAuXs11NdrjZSwF8AqZ3y9dbDYzEBSLfAif",
  "key16": "4DykqqTcNohHJASAB8gUrBp6dnB6XHsRU9QFvGwzhGk9J3yAWAzoQVNSBqbY7mxz43cryoP1bKe8UUDRxnNfw9tq",
  "key17": "3y92YcVKfd89m8rFExUtWgTfw7sauGrCcfbb6aJWAsvb3Bqq2vj7BdoKi2pMe9CoaCKFckga49nt12Jt4NnnmSxT",
  "key18": "4Sec4TTtVSHBa1RkAQ2gGW1qDYRfAKqomRcjjGyikTphfxbDf9ZpnwyoNavfB8ZbUKRhNo9UqHzmxM8U1KDR2qEo",
  "key19": "43ZDwPvenF3mts9VigzPsZKbpwPVhtZMdc3x1hCFiLyveLzUMuJmUyiYmSn53DvvLfns2NerDWCCbfMFrk6eZoHW",
  "key20": "42g21CVVaAbjjzJ6wBe52haw4NRnKjdjaMmhP1C5ETvNx6oru6xM8SWMmcmqC5d79oCh61KEUbWBbS4jKQNNL77b",
  "key21": "4BrcJ5xwbW97Jj5zEWy8EjZbgb72VnWWAsoEu4AQPNSWVa4GvT5B1SRDzKLfTWGQ2Tg2sEnywENRS9uLYD1TXR8j",
  "key22": "3khAaWAQyxx5G86kXfG7gNNjtK3U8h5mdzBUx5goQtEHCUVGviAa3RP3jRTaatX29hyutEi95991rJRXpNhamyBX",
  "key23": "4TMGF1zSbnxW8TfPC5gPCuc7KwuTYvWfmNDnqavAi3HJWPiVpmEKTEXb9JefmKkKuiwvyPrxbbmkdGwzTfMbm6Ph",
  "key24": "EQkYr2XXNHYTWxaCEZPPdbeTWXUkeoPiRP4SDRgQgqG6dYTZFBJ91Td9CKfXmQ8VJRHDUgoT5HVt14X91o2bffV",
  "key25": "5rUU1yNN6WVW4u7MaYAtSMVHG3eJzMBCefW4dVEzhQNeZRcsRz9J5J8C1CvncPi86998oGbYeKQq7mF8UZBV1YB9",
  "key26": "5pN3wgDNCsdNU8QfNNVb15Vmgg9A9q73bTsDhMPAvaR86RUQqqwqidwCBEAZJ6bRmiViY6JD4joLdEbgQwq6JPcb",
  "key27": "8giHZhfsmMks87xQczjahKfPcVywUxCtVUZzzZVrTFePeX9Wt8xFBJRuemLVPaYtyo4E4vCYdr2oycen5BkMEEv",
  "key28": "5VRFLhiuePz5mRLFKa6KqdiLRQrFqP9FDCFqQdYVH6pRhvWi97qcF9fM8EbSGwNEfqcKyG8hn7WwEJS1UnW7tecp",
  "key29": "rWAwJCt1rKoScxZDjh8nWtxryGLLqzgPySy6RsAdHSognkqpZkBeY8FUpiKh3ueAxF7reDeCnWDVAPRhPiqqgW4",
  "key30": "3VvcmdHuuny9MrSrVxhhZndseo9y12AX5aDWj3EzFd3KAhL6DwjEHSGbMF98G612M85ZkiUTKCjVSP6ZXNDwncXg",
  "key31": "5J7DqQwuMPkc2YZky2M135CVTAkGeQF1pbcs3HN25hG4JZMV8svkowyqb8H9tdWsMoTNJPngjscWnTpMpmqaaKWt",
  "key32": "392Xd6ncDYeZ9WfEytb2eWuNoUvfcSLjtEeoLMx7TF9Pk1uarJbC5Qq82PBcEXDtXor5Es4xTWtCvLdHW6KFGRyN",
  "key33": "2osqCHPwkPDXhQd46N12i3Vs6PcK78jnkETUR3y5WZQN8HLBimfYZmPV1CHzCqqDAA2uemgcdJFk6YvDqSTph1YZ",
  "key34": "LMkmMWx3Y5vMUAcZDp9n2EpL93mWFpHwZoRb9uXiHUcBgQuLzwgXymcDTDYnhqbeRXHGGa4U4tYu1k1Lquv9Xvj",
  "key35": "4uuyFxm2PLW1dGLZAouJ34gdbsP8j8T8UBPceJVYgKBtVo71AiZQLAkodmJwDZJGbkR6KqRcNUdrZsKshj5qzbnn",
  "key36": "65j2Hx2ZdrLLSHzmx7RRmySox8nSn69kAvp7koWuNzYgji1oSKoH8ghcBEc4ymWxHAxFUxPDqa5nUpuXLpuU6Ejf",
  "key37": "Bg4bGEJ8hxo7m13E15w48e7npBrsVBYFWDiihziW84adR4RJGbY49qptNanz2pQH41xREQkW8FZk8zYU1kT9cEC",
  "key38": "5DW5akd8oY6tBPpvKJCGCeKHWtfYNRLQLsY2v7KmM1ttzi9WQgrURpfmF56P4wcrJdZhuAWGU2n1ZbCErcSThV9G",
  "key39": "58w1mG68Jt8Stfq48Xw2x2Jp7WCc3DB5sn6aEYbqQkc787aSSL9rG1qAu38NgiUUsPMkV187wDDyzh9ZJcf8JPrR",
  "key40": "59sK9NW6bYuuFk8YYtcCKQMfZvKaKGS6vYjJYGTCYdz5ss6PhWiCm9SyxJc99Aj8tcUeRKyA6pKPM5c9p91xRb3c",
  "key41": "4mtJHLDxQGrXy5vgHUSBMFyLkxQdHTYVEaVWLK1tWvKAEw4d7ZWMu6MXzGksRzbwkAk5eSFU1hmbrKwEuEbmv4zN",
  "key42": "2PvP4mugvHvWH9h5PtQFmQvfu6Vd73hTNZRoX7vUCuYvT87TNYcBw2CrSV2bHGPjN28g2Y6XTeAGY4HMhEUM17uZ",
  "key43": "4MW2jBiCCbcu2M4DNRUJWuqWbsfa7hRTgFKD5FPY1GZYygZpGaHQF4MesodDGi5FYjVqKCm9jLkarhTze5dm3Ems",
  "key44": "4pdM2bgC2YHMCYKa1q5RdQ6wqaGgVFA3z6trjaQi6qcdnuK5qR3x7cxcKfTpQdSwtr22nrGFSmwZbQWf53nAn3jK"
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
