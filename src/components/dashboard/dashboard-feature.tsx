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
    "23yhWvgFxRAizmGGwfMaRy1pSSNsLPAmKQsGNsqTUrZ5V3D5R9FojXe48tkyBRdC1znomKcKDgjWatLw6DcHKL1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KoPvgQzR98kXh4JPMiM6nisgwBSVYXfm8RqDxiKBooedNZ8KtUYSP5wF9m642EkYZv6urk7KgB1ERZLtWbC3rp",
  "key1": "38BFjwQ3ia3D2ffSL3XDPvaH552jnZTptXPuneg6SnLB77tdAH8SRiUr1of6xhJw94AU6pq48RT9uH4vibnKojGv",
  "key2": "J8Y4Fp92QgwyTEUEeGzd2bAnovr32vVRjcNUPorx2SjkT6p6KmFiENp7mPMnBvzMfheuqpH4EsFszWf4hazCH3a",
  "key3": "LsVFbPLEUnSQv6XGc9pFKGKtsYN23WSAaRAEcFBDUh6F4MnZuat9KijmAJoNhwZM3MJ41152tFSkG48bXxg5qTW",
  "key4": "3AEt362oEPVR9H3xocJY5wu5XhoxVMFXiiAzbuXxJt164iyyZo28bKCeCVNNaCvEVHSw6XGV1QTBRVYYGnwchS4o",
  "key5": "2kVZPJ2hu3verH261pLHAFrmHqcbERZmvD4QNijCBUy8BS7F1DpRE5SsK4xW5fUJ4vS3yX9jgB5wSefG3n3kjNNs",
  "key6": "2Vvr1bSrZn7RDuYBTBs9kTeK7z9R5BbVaP8viiDTEFV7KRyXnprN9doG8igYVfm8yAhaxm22MC5YUtnCCErr5coz",
  "key7": "2W7WBbivyBTqL5LRbbYfHFC6cepnmFEYYNnSBereqBFradNWyaLsZYrFyNgJTW4bEoJmgbJSkQuwi9ZxFHEKocow",
  "key8": "3yMjYAYmK8aJJc2i3cbnfQ2vcoZsdwHWLDAgktsgnP2kbZ7Lgh1e4BfoyboHqKM6fTi7ZAfXYa1qX9VJmjqrEZpd",
  "key9": "3Qmi1B9cs6iptxv6eYu5ZJ12zooHsKaLpfSt69kKJDNGs6zDAxsmegtEFTMVeKUGK7UJYfC1e4eFwC7WG3FQj5fb",
  "key10": "21kWn9MGzgqAUJ6uAWeuTMcgj5pz8uvvr5aUFNEZFzaLMkitqkhKutavBjRP13cec67W8GsDDD3w7yyReyituvVu",
  "key11": "wNKiFHSwnhDhF2ivLQDSsktQUcDHZtK5nxm96cmePteN3iME3U2naF4rZFFaUcZVHu2QGbYV2UbGUugXfPFeiAY",
  "key12": "2huvyLn8wM3L5KHNFsZNTfw2mZiCh9qmiwh4Jdj6DM1Pciv5jcXBQuQj4XDwEdpXq6UheqMMg6SNFHbqVC3v1mkW",
  "key13": "SB38aD9srj4zs2PM3X1kLfZiKncFDbqPWrcoPGzEryLYh1WbEVs8pNwXBXimvEQbr3FqADQgavNPhJa67DML3sx",
  "key14": "ZVz9A3QE1F1eVKp4D3d48LNFedoTDCSjm8AAPixYurZKqNCDaHs2N5Uaz3XnznznZfq4awequsejFyFaUgofLTX",
  "key15": "jd3d3hRgJ6FWGSi1Cnp3bf3GUEaXjfDXbNvNhJWFfmaAJUnsXkxNXX6ipCCqzSwrCnLr39G4RcBNacqe2k35WE4",
  "key16": "2Jjb9i5ibsA4nUFTHK7w6abpAQ6gTW4HcU5YDG6d7SZGhCfmNkRzZUHizbgVR1RfZkWfhi5qg9pkVkSJCK45P6e6",
  "key17": "4jKkrmU2HHjQUbsxhGSQbsR3vYt3PokooaSzePQbdUzj3o1fj5JJZmRQZ8YcjaK2mb9BXqsrYoDQcFms7x3cMHLG",
  "key18": "5bWA9ikysWN7SK78pf2n56b162mAe3KNXtWwKxhdV2ZMYn8nBKL7wHUof95pU8uUJvpf8QcLDUKrfanXQxPPiumb",
  "key19": "5UuWpN54hwnd4umxvgzfb4gPZQkPAFQ9iQTPR98ymP4tvCVyBpnYTizCb6r8mu9Z4PmEB8b8eTuhfJXdSn2aqbYk",
  "key20": "mrLi7FxrfPkF5vhDqe2fFqkTf7D953nRxbVm4qV8vKr1hKNm1xdE8qukTBKYyEQ2dv9idgRNN3DETnXRdPLeAmE",
  "key21": "U78Q5bUNvCmEaTA1Td3rPhVDnD7nwxq1VySyw6idJ25bsALNYbxNDhNmHtwpcCerP44GxDBE47ovW58keeqHEGx",
  "key22": "78YeNkHJ9oD9i4HrLygo4LvxTe3sbFmhMBCWYF2jdTvoewgkpKaAoG2Aw3q9phrT2NFC97XTpF9CoEW3D5pGC98",
  "key23": "DikXhG3fqkxbgCLsP3zDGrYJ6FbaXQtZ1D6tazBqCAmRyAQy1uqExJ5Hn93osT313VdSAtJi1gWaK6MvmbSfTWn",
  "key24": "5oHbt77aWecdb2EZt2jQwyE5VSFgGZp8uJVedVNhDZ771gBn1Vpe3fNa8GPKuakqg6vjsXTacm8iMUNmJFAC2pt9",
  "key25": "5YWj9vnRWNu1wjbnUxiH7BNSXuNewD6bKk75Wg7h6kyxKwnkUtG7pomvKLwuWPuAzYnoq5NbyvyuovJAx8VNLTwJ",
  "key26": "3yHjRiWeJe1jzRwzMX5uiwRpWHBda8rv5ETcmyqZL4KF4TbfS93sWnEKvnt85dVJ5EXjWTWE1Gm8jEnG29yaXQCk",
  "key27": "2MdhTsFidz77u6uJFGuDcnV9aNYXKZeoR1ZWRQzsQZ5unNiMCtPN1zqTod9KZw2GVS6CopAhkvJPk6tNAiVBxRRx",
  "key28": "vffJbdkSNoWjd1QqHRi8QjtP9SpCCEBZgYUjVkgNgXAd8WX8vLUWYYMW8BWKrv1GEkWK6MNvqfEeCdT93dov4Px",
  "key29": "cCCpK2uYyx3fVo7VoHTdKmrYCcLu8EivFSUfgZ7fbs5e6FADycyvVWuy8Ae4fgysQhXwYJW6j7to8QDtAnPuara",
  "key30": "mcwAaVLZoNgunE6qYAC13173P8DXmrc31arhp5ZkodYuQSu2NynKQTJ2GcSVM7qb8zcwFx4bG2hKK52NYvQ8CKs",
  "key31": "2Xz4GDpU1x9cdPpk4YdUG53hbNkDLMQgCcgK4zNXP4V1PNd8fmWBSskwDBV4hjHNbCBK6Lyd56RvV14DBSxdYKiB",
  "key32": "4n54RkqKoTsgARpc1Gp4PkVWEPPCPihEm38KjySCHtfLHGsyGWGePc12TmNB2Hp2tc59NhWPWixq6zPpwFyTW8XQ",
  "key33": "3nK3xxcvWf2kxxyNtTCJib4pxE7tK5RDnBaSa3BHN4hzgNneGYNkyjMacFDnLUjMa2Vh5pghquaasptji4es2Ycy",
  "key34": "qyvrT337i1KQjs2Ey2uveDFPBg3mvtRL47RWaA28TH1x6yhvfCKnBXzsNa6coQApZkKbq4E1XGuyP4Q2Hwso4wW",
  "key35": "5C9wNH5xWurKy7docyuTBqZwfS3HHuZYn3kBRPg4XFvDsjHWe2iYSGqs9Dyj1A5DFy3hbZ2gpk4yKSJG7XXPYC1v",
  "key36": "3sxkkjJJQnuGNkM9MvYGD48ETeFD1YyjeCHWmLEJVHzQWHfsdDbSo82FjQsp3PZemxgBVFnBp4JqzpcWTp6DNSBQ"
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
