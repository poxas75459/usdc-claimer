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
    "4ZKnQiFG7o58WYEU675rRQwV7a1CGrrFJohUbdgUkKb2UbjfKfA2rR5wPD5sKgi9GQuKGDdUaeAZRwCu4g3raaEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36oBMLwHqWcjLSFSsUHdkTPfyM37eStHvfqVaG8P2tHUX4ExYRTVqJr2HmHBy5Fe45h5LGU6JunAZx59WMGXhcDE",
  "key1": "61SUN9ai6sfay7fkCDJ1jiN2jEpqpjRfxKHDy85Y6n3NznRLDJtig7mgzuEJNQWfh6KaCuRSZGPZUG2Lmqaf1S8o",
  "key2": "5sFtFTzTr94bK3BED4wVsFCjxYJSnam2BfyCrGyqYRgAqT2SY1q8LUwQd1ZYZ2nGR79arX3RMchoNQJ3WQAXf1PN",
  "key3": "4wEKQNwNrtH7fKTxeR7bA9C32YiPB6Y8eAusGvP9M6qgFoFnZ1QZHbNyPxA8Rfbr5GKT6cY3M4aj1pfymJFDMwzJ",
  "key4": "52zpBnePGB5J2p9xUmu2CdmTNUrPRkwpyYNKuvjXCrLFqj6EBK5Ci54DfhpZatxGSdoCsu2C8Ks65RjJ4yEeUEt4",
  "key5": "mTMY8RSUqMF9pgByVNyrpUQyikB7EC23suWSCB6XBMBiNttp685DpZAXDUwg7eeqcww15N2drjVsY1nHmq8juzy",
  "key6": "56BFjWp1AZxv6xsakVC8FpN1YSeLimaUwTxNaVQhrqZWebpVoVUREUy22x97NhT3uWTt296stkg4oN87MaJNd3Z6",
  "key7": "khMCxEYE6fg6bJPc5u26cusEAh2StjzTsTbFy75uTQycZzuZaPF2H5L8NuYE7pmGmCd3RjJFveeA2fFjXuTTPzY",
  "key8": "QHdco9t4MkV9j8LGCbipEASzwweExCYRHDcsmzGyTgE6mvWhZhEbe79BD9toFcR254AZogTYoNNpnnzsuUbZfxG",
  "key9": "57rgzU5XTVqThEpbXcQetzz9HxHR6YL1BDUgWz5QRMV6f6Akw4DBpfodiWfghK2Ym3v49VzQs56aezHBomh7SvpA",
  "key10": "2V18seykGiFDHTBDBBTi8R9jcmBXhyVeYCSFuaYmhK885PztrzuRQdR5nEPU4yy4jvKTR7bLkB9axzMuj3yw6ShK",
  "key11": "3ikgRLYHDQUZZ2Qs32pThiiAfJTnowwZ9Bu2K88jHqPA83nrH2PmgRHANjUuYsdHAiqbFRBcP5D8DJpk2ojVzNbN",
  "key12": "YSwPwhNcGzxYViiugemLrj9nX5sHfACLEeUp58ngWT4prtKqVVeeZvDr4c1oCCrERi3tvVxGoNaZ1xFp5uVQRKf",
  "key13": "2b4QeazBDZ4y8g9a8LP2NGkJmnKGxv8sUDZbo9FVK4xeo8M5D7ncD7QipLYaYba26eQJMYsgkGZPvfrDWhZLxKbW",
  "key14": "3SFhLVSxaLGtG3JoELvx5o3eJN5TtGJ4XSAX3wZxWMYYKzKv3KhfzYDVeafQYpa61pk6gQEeF8ynp3LT1W7iSwG8",
  "key15": "HFiXxgWZmxD2US6pYpWfvWBpkfPvCHFLXhBVpMSuMvddPcrgrqoUDk52pdevjx1BpvUhE17PGLX1RRAfd56o3do",
  "key16": "gUGgr1HJ7akMES53CiRF2AuR6uYGe8Rda7SD7yR54zC7tfMuKPM8cqBpz5nbYTe8e5Zvx9TsUWR5MPFPyxWV8Vt",
  "key17": "553w97XJ6pQ7ZZJeVk9gPzeYARy8FxcbfRVkCEGQk31hGo277FdpA3qgfWwEna4YuC8afrgnTzJXaWkSvngyCLJu",
  "key18": "3gd6DFMTZWAJWDEgQMMx7thwzmhhtEFu4NMoMtKGp9jwsFtUuckbT2RynZnYG4KjYeVoSHe5bS4CXKsU3aHuqJgx",
  "key19": "5TZafAtY17u4VmwWeFvScEpoqzGNbrk73Yw2S6xJKW7NvUVDxmGvMgNhfTY87pEdzouPjD9qQhdU4sYZiBPsP9oX",
  "key20": "2X27m4ztUGcUTPs2Fe6w3ccV8b4ygqT4oGhr9AFVWuVAstLDuRhVjTRjyWg91VcwaW7AoPq5dM7ZSsMjoeZSTWYs",
  "key21": "326Aa3mtpug31LkNPbnxkVfxRH1DPrtetbkY6LnCZL8qPseb65rmnFUnkLjRsNq4FdE7GRsPP2HfGQ1KHHm6M2id",
  "key22": "27noQChztZkxqsARCbZ1wr5P7kZJK9S6XSrAovn2MHhf7aRqPxpoEj7kPbyJZxBr6zaXK6PGt6J7rufzQ8jP4vLm",
  "key23": "UCd81Kh9GTyMUtJut8tQbpfxEcrpgzwKpGcyZZDD4bY7riHMkePTUgbyHU3fVewNdKeSW8qNjbcfJb7791DwWVb",
  "key24": "5Y69sMzxySVnwsV5X26aiboPchjsitpmVqjKn5R8Xq88Qyi7R2LXB1axGDSzou5FjjgTyAaADb24bJGVaip39TJR",
  "key25": "XDTC6Bbtq8qE3KZiHfZRcJnW96mEzHWkw9MC2EaZzN3ycaQs3Lt2sS5GuGqJ171Cyk4V8C75tdybXxtXyCJd1F2",
  "key26": "uZcTt2iXp4ooqsZ3q1dutDqNLkGk9wZBCxf1kf1J8ZcYguRDiCYkdTGs3gMWAUv2Ru6z6rN2iMGcXbdB3gvFsAj",
  "key27": "2V1Zg8AMPmzFpMkSQ6MJoNA4ApqpUWuS8ofzqv2dKrA5sB6CkMAVyGJJP2DTuHGciZkkB7vg6Qda2RzLXraQ9jYv",
  "key28": "3QgBUeed9FbmEpH3UAiF1GMBA5vjQCTKXyvHxJ338j1tb6t6zkMpb9HB1jWUErGMBaxDpqGcTJ5eSzTXauSaYVix",
  "key29": "3nh7q8FM2EFVHVsjjvhLJHXMkdPJpVUWAMPCW45JFPgPVyjcghRPyZR2t6tDkZwjk67iYVHaSyNkEG7iGSK3rmU"
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
