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
    "4wzBCSCLj7ZrAhbY4J8zHCyXzUVRGQrr53xCigBVYo5FfiGTzmryWgqJYBEFBcaXfXMHdHTcq5yQCAREmfJHyVrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48QWdhtaSBm12Gvy4hQYhDSfTwqRqR62CbBV5DaX3MG8nWxB21ZFdTfT8oWX8DRZDeWUuzdRnSeu4ykSnusadRu5",
  "key1": "5sgR8WrFx3txtddx7YuqVJxgqBnT4DjWTbAUfGEkAPsqGQeTEDkp8YL5YscbsNQLRakokdgfc99h3WC9qvNFVnPb",
  "key2": "3NoVMUjbtUAAT7HoyZW81E5WkkasmhzDGHpziLbt1ExxAab2odgV6uvzuaEybqXWGpDeCAvr2SnD4y17pY34PaCS",
  "key3": "5hYavDMr8FLVCyrdrSW6pXhTod4oiuw94oPQ9E8TqmF9po6VEsnt9Zy7sKaiCTWy2KVNdYuVkW9cRiazYu7hXeew",
  "key4": "21XqT3Vs45wHBWRSyMDtqeXAr7mVaKGNTsn2pMgjAiMcY5DgbgABh621GMfmasf6NQjJV1zjpuxb4kGbEC3ioy9J",
  "key5": "4Dt3AxiCapGKK99NeSzhaidmWMnRQd9aGeXZp2GghBsACjBCbhHQJK6aWRKDXMV52gs7XK8WBV1kRCmX3qAWf6za",
  "key6": "5omRbQbNqFiWWZtihbNeBXvLobcr32U8kXPrxuhy3zSSaenPCpcu8AVPf6jkwYKJQv6qbCYHRYaMir8DFoemXztg",
  "key7": "361fZJ3nSoVMM37siw8evje8ufDDEE5GC9Zqr9tDXVFA9T2FMSSUmpgfUYjyFgtMeKrFexxd1aqbdXYVEiP2Nnph",
  "key8": "3spCd3jhgC3rJNqrBiuLPfXcgfBdgNiQ3GTL4uY2yCbWf3njcn5T58b3DShKkN7htw9v1QHVM2io4Cv6WEkSHVHr",
  "key9": "3dbLfQneu8tUf2vT3GwzU3NumMckowQvGP9eRFnjb1Yotx2vs4Te3NSSWCrAPkM5MLmFq5YaEDHE83iHmTJcBtBB",
  "key10": "5NWMjggc4DdRvk3e4cpaCsQg7dzvyhYi58Yn42SQXD8GQVQ4tDsQXxuYdjy4t3fUf6uUYEKMFsXoMbpfbE3EFqP",
  "key11": "4GPcXZ6vtxwNjTL6tBuXYGnW4xwbMcyb2mwv7v3E6SuoArdnx4net6rfGuD4t8SXEzRH2tk6UvwifuL6WCjZ7URa",
  "key12": "3UHpQSd675JvmXZfvkt7ioaBKdDq1pz6TGvHxAmzovzZKUiVyo2f9Nt8UBraftuifKEzgKNURzyqYuc3o7VA1qrP",
  "key13": "2boia24uLo4ex55Fs7CPuoyBkAkfABHV5oXDpH2t9rjv8PUcVaGK5utSvhub4zXJm33YgEEK39C7eeHDZAwoJo8j",
  "key14": "5BWazL2V72a7EJs2xfjP8To6SLqnJpvA2UZ5nM59Ckq1JNrscKWChnitk5QNtReGbenavec3aPFfzrwqJZxtzDro",
  "key15": "4Sit1Ans6dkZcULw2puxHmCuyu13Rue6JwqrrgKYGAfVRitEQzZJHMeamZQgV1JgJDVkjiXmsEN6yZhj5qDcjkaY",
  "key16": "2dTSLnWYjZEXeLswGC3t8uo17TQFUuBHDPnk6rqr33dVJTcLVenLCqaGD4jvG4DebKNF8PuPTzMJtbSFhg1GMsFd",
  "key17": "4wyxWUTPMcS5W3fKh1zbz3UokdnAFLcEcQAJ7jtGXzQ8DrsaK9DY9BN7hou3xMWy8HGktiN94REpFfkDWPjNNM9Z",
  "key18": "5cXafL5DA8P3kctHT5wZwxGRiP28uX1D64eufgkpC6TYrbkqYXBytDfYfJ2SjZQf3SSKza1UJqEk6pGVhoicwbnT",
  "key19": "2sNbxA6RZc4SmNLLAMsuBi8fTSFQeqoXoazJMJiWfqybE59dVpvcyRgyYoUUcR8ZTmJ8N1P5eHhK7QQRuM47bwY8",
  "key20": "3LVohn4fzGABnqR9MaExa4LhRP2uq2Va7vxUotm5r66JNE2ASMZNoY3n4wfMGNdMSrdLAamsyai7nsrfCHtUTsqT",
  "key21": "5QMXw4nUpacHfRA98WQpeKtesdVZ56ZRyuMmT6sUZftfJEptLKmKScJYnmxBQF4HjJLCRaZDeN2HoLNuhZ9ExzaQ",
  "key22": "5c1Ud8R91h3Ubzru75SPmGS3WVosFUVsrbGqt3NUckaZ1TeoSdxeHxGGN2VRUpjHHZ3Kw6nfisBoMTzAsBDo55Fc",
  "key23": "5mY8tW1oBRDcnKK4RykS23DRgcQWmSvoLBoNQty5AM7PzosMmik6SAW51vqoYj7Byefix5jZhYsd7zpiVnXwNP9B",
  "key24": "2BETJy583QqoTkbqPncZDzWuoicukPJjkzdjRgCc3MyvTS7JhvmwqzPeWSf2d4Fn6kvHT7vzYuLkXaSi9zHkhPFG",
  "key25": "5VEBW27EF4e9JD6SWkzYDvxjunMKsib9yaRpc7Th8QfziBtJBuKc1z4sBAef8fXMiZgexCmqCNAt6JnR6okmanka",
  "key26": "t3xa5nbKLzWoq4s9Dp9eF8neefcQrz6K3PKfmsmWJedpszH9UyW8dKLMVfPCHj3UJQGBBS33kr8AxD29Sq3qsCD",
  "key27": "61fT1W7ZNBnGdhumZ3vTFTbVMPup9L5iekcriU7pk7Gv9JLrd9SCbwhWB4ZxwG6njqLDmyfMomcj2dsRWnkoora6",
  "key28": "4EXRdUEZ2DodpXRtfv2JwLS9xBTGynuEcLyMQ9GrhvZdEh4QSYTJvjvcuqcfyLc4dKDHmDDzGv1Mgfop346MFB7Q",
  "key29": "tn372nAwRfEdviM2uy3XMaeRhxCidn4nEpk2fUrMF5ATaJ4X7bWoxWRVrjQzVmP8ybNM6ZBRRKgCrGon4RbBqiw",
  "key30": "54tNtjwFw5yrdazADnUTyXgLwu1rhbHp4A1ejTrjJ5v2FJqYNuXwhur62WdsiAvBsze7bNwJXDqUq1qSdwxosuXq",
  "key31": "4AWnG5iXNkinbz8Q7x37He4KGE7uLn9thnYMCA1NU2GMJqK32va1oasrGY2gJAxgHuiENbSbtcXyDyTV3icrVj4N",
  "key32": "3n5gcUGoBS1wbkBuiV7vyN1y71rg3gJH6BV7FUB1q6x4v4on5w6VHHDapJoSfHiGhfcyWZhAKUXBWyJNoTVtYgnR",
  "key33": "4i5H4vpWoURFm1KhQX82GXK4aSMBmBRcEYaC2BkVcXxrXvNzzPCmhjAfx2q7SkTx1sd3HspYYTcxvp6KSP7SEtQw",
  "key34": "4Ec3BAjP1d4TrnyQx62RJMc9499duGN5EVKRMRwLXZgPzaEyf8BkLVuN3YW7Ri34AQtvDZhXEGHA9RQBVeHrNvEG",
  "key35": "33K6ESUve2FKG4a3nViFVZS2gMWoYnznKRfjtY2XoZaPqDr4BPjcRYjZ3j2NdCGCa7FJDUHniJMEqdv5c5a3GUt6",
  "key36": "2JZbnygmcHjkPDz9pmWZDAJVRtsRfWhoVrFSKCoHDmxdCqy34ZLpjhHQFmyk4ci4GPDqmEBhYHBWR1PAWiKzKw1N",
  "key37": "wBN6tzYHSeyqZJjy8LxYNm5XSHPivcpvZVFpmsMJrGsxxmDTGsyr4YQAbYu5Y5SaiN69zXFYdBymAcpJRqMeLj4",
  "key38": "5mA2eh5rLauAPC4BxcHWiByerwxSUAHNRCdmYUMfhG3rEmt1Prb7nTELUusXWkWxJ7iVnVLzFxQ8MVKtuafDzKy3",
  "key39": "3ptuFYuWXZSvNYhxqd4ez4Fk9hsvwskEPerCLmJ3sa8SRjAP9g2bswEAmC36kzKHHv5aMH7aYTweZUix1X329S9T",
  "key40": "5tcp9D4yrBqAWLTry6Lb32Yosco1zeieQZPLGLcEWaJXQH4dc6x9FXxGWvPf7x3JAFpbDCoKhtcF7ACvu4GNHypZ",
  "key41": "55KA2kVMyWYp6VTppeyNsT1YjVUnQyGnx9FwP6g98tUpssKg6YQryuga41pmfnNLXTKqJUqqj5GRYbCkmXv74TAo",
  "key42": "5yKYYNuHFt57Yizzcw6AqxWBR1rZyv5KHbEBTgmUPvmViYSxw1mtiYqd16NSiMdiiW6hGSkQ2mRSmuJ3xrTb2D4j",
  "key43": "5yckgozDEjReLq6rVDnSB8RjiSg6L7U5BEMZbXNpA8b8szuPedRy5qizzhXDv1nUqYTBfyufVugq6AgjRVxYkfzP"
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
