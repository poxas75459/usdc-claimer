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
    "2k7qP91hKb8S6EJV8r3JRHvEcB2aPeCGCdg6y6DdLDDGQgTH5pvUDMzG5Yd72P8eLKVB2oASinLH2Du3iMnxNvjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XhZcoSJnsJmkC5RLBKUvqz5bUGCES1Tq9jHKouiz4MESENGKgqHMCY9s4CtETUqukuNokciwST8fWdY3PoxnF1a",
  "key1": "5xaRU9KJdrSWyxqckxHhupqAU8svQne8kC29gK48ipfSH5AuuJan4m1WNLGtMJV2PrP6abzTesLQV87txrG2oRrv",
  "key2": "56WK1dvhES3rPysdwUo2Hr2NnDvhyRc9WQuJPdUtCr32uStH6nvGeaqZx5JcirKQG4skCsfUJuZQNfU7LE7eZS8u",
  "key3": "48ajWqbH4hb6XN2LXzywQbwPZoHbGuuSgCY9u6mKfrZvnw1nFBVazH3b3vUCZeyjjT1QpCuSv2TQThPQaexLqaK9",
  "key4": "NgzhqRq8CurdSpXqdGrdLJrc4vekd4YJbrMVqhWgz72p1f6fA1VtymUCHdF6Q84gAamyQb4YMJbH7krypTV2oMX",
  "key5": "5hGa7QxpkmNUJUQpD1bcDNScQm8TTCWsqtEe5eBdanaCSz61oUKYvPjj2SMh5ff2UQxS9u26fr7X39QhocaJBfMx",
  "key6": "2iSodF9Fu8r546apCEKVvFVWgpcsQRnumQrP5kVyY8XxwxUMJ6yixQyJXPwNpWj86CwpisTe5hYNp9B8TmpTGYHy",
  "key7": "36FWj8rSSMV6N3QuCA18J5ujUyYi32tpbThTNhbV2tNUyBWWd3BAhPXTGw9DM8n41b9hjuhSW3i8PkWttXs43vU6",
  "key8": "2KJPdZbrmw4F2HhkY541EB7x9sF85ESMR6ELYPemKNhW9tfwXVDjPaLsy9JqLZrnFrtw8Bw4dtK35W5JRud6VfLH",
  "key9": "KxZxW72C7KgnAavvWhUQoDycGnMYNAyibNtYkmkDC4pwU3Mxi7SXbm9285E7zJFgLttz2CbxYz1bFFbA6VBz8Mz",
  "key10": "2f4yEAXzzQnUdcdU4JxvcwNYCbCUwbajpTrDRg5qn1mCZwNNsitNTP6Hxf61Bao6m1TsKyZveTjm2XVRPdpHoT4e",
  "key11": "rMsqxbeEfe4a1FTqDPorVSMrS3L3LUtDySZV78UZDsbKtRC1Xwm5hEELR2jXzDN4noy3eEs2nZ4UXZuE4JVPtMY",
  "key12": "3TtpQd8ZHt6CsLbusNPo8NC6gDR2Uwxqfq2tWkWozqu1ApFwDnZryn3zRgR84RGo561qAMhfMCxoD2JaCwaf3WGi",
  "key13": "9LDvm11kn7nn6KJn9bNDHp7Gedu5XMBbmvUufUCvnuk8BWWy7PAiydt7ZFUy1aXiWCZLToN8vg8Js7hyFST7iXM",
  "key14": "5VkTVp6u44PqcitwBaBsT7279ocrG2V2vmgixMRgsv8puJ3cbQKoDbRA86HLGJn2QheDbidbUfNpA5oF7o8zvgxA",
  "key15": "4m5eMaKzi76BLLoc4NjvQFXhsWYsR3w1oeM8rKRgfn7hCwAgLeDCLUEYvgJCStx1P1n5p749hkykktUSZp1LLQds",
  "key16": "39udTcW19mhnSDFrhefCVbgB1TB4BoBeTpTVkXXo1GddbknKxmwy3w8drUmFhoTmRe9M4tt2rLfJU3Cg8jia5dAW",
  "key17": "3M4jurfTy3dePEBFKsAU5mk1gt8piqQGTsSgoSuFr9Vx395jj3mC5rhjzTZ4bao2gTqzSLZWbUQiW1s5tKKwNdYt",
  "key18": "4rdHE1F6t7hZUgtHmRdaxvmnwdYdVvRZnK2DHgX6zxHusGemxKjrU248cPHeaN5XRgryQzRQbboaiyrzAVh9X4jH",
  "key19": "4K5Tar5d5weZ2UzHhKrBVg5Y6yyihs6QNUm1ARFrpScM23BQVfLwkurHkMDdCkR5eEvhoFvhTWanLUgT5p42LyYH",
  "key20": "4zRtrKABPcGdqL9KnZZJQGjvofHccs166WxnzFJQRbpvwzR2rdEb1QkAD68ECUTaEPna6mgxManGQuZRkmK54Uu9",
  "key21": "5X9fK52CsXvYP4HdCNnMYWBB9zGuUUGrRut61ngFuKWUKVzTVm7W5HmKpziup3uGrSsdrubVvUVdKWhpQgj4tbNt",
  "key22": "5AA1iXpQ1QDqMCH983mTwFhMGWBQvp489SqZHm7XS8Xb99K8BqD2kWSVXEXqrf6hpvsLqate9WvD9QE8kEgR3Vum",
  "key23": "5KJqvZgFoa9jNW4QGtj1CuTBz4inzecpEc9JXg4KzARim2UA9mUfUjmgcqpGUkQ17gGkfSjgg7Js3AVx8gYwnjWe",
  "key24": "4qKjqVSL2aykFv2fE96cN9TMvSrERWoSpLhDXn61GvfciUmoShdxrYYpTF94Ai5Km8PFMPKf3PiEfhL8B2hhEPyH",
  "key25": "4PgUdPs1pQ9ibQvPdjoxgr5VnwkY3bToSUXKKaUVxnt6dfk7F4BWZJ3GeUQE6m3g8JDsT1czGqt5ezVE79CAV3nx",
  "key26": "39NxfK5Rs8FYi3VmBUrSzwJN3MNrmgbkkN9MDg1KyQwa713w1bbqyiUAF35uSXunb4T1RCUAZ2uSmwfphJf5qzvz",
  "key27": "4A1j9pzxbsz3WbUEdWt8d69nxBkk627Da6i4mdmE4keo3zHRmFidMVW5d1vDXcjJw24ur49MwLniPz1oRBGXyBNb",
  "key28": "P2MH1MMoSbLpcio4YibmZMeT7ma1f3dkL6inWytenoHHF9FBVjGLwumByB1wiEGxf3ifDKtusKjpzcAsXr2vyws",
  "key29": "2RXMzsURv1hQWYd6VxQ5m91ZmtwEBSPs5YSXenr1uJuibyxTVuMNL89UuzWASP7Zqv86wuZUHMx94nKMEK88RWad",
  "key30": "jWSJK4TY8GSckpEPVM35hMZC1rfpy1uAk6wLHX3N374D1t4WLU1JyBPuXJHezkMkpyu5HzzxssV2EiwptNWTVZK",
  "key31": "3wHB6EVfMMdWcS4bJSqrmJu8fDvjDtF41kX2gVqEQV9zHUQ8yFvP6Js1aRgCcDYVh648civspWUXuZNZoGTMKnum",
  "key32": "1t6D8LKjkvpNAJBVAnEtR7j1knfZZZMmgb655NGHAxWWRS6w9fSPKLPeQG8tyaTK838asgB4gaQMMb5sGA3EGPn",
  "key33": "3QHACiDajvW5MwVy9ErfHk6Hv52hRSUN8et9s27cqq6gTMCp624Tz7cmYmy4pHfejCrYVUg2QSomCrwooza4Zz1Q",
  "key34": "3dnAwJUHA97DvTNoq1ZYzUWNDvVBRpKDLbXaDkBPhxQ65MD2zeYHAViYB83m1K454etSrUv1fLzq6fcAHVUXp267",
  "key35": "3uzsVBNGRTkaPAeDjHFFthXeBUD8owTfaYzobUD2f4acVZrtNFoLijoSbaSyLqNrz6exnjaW9fzEj5xJNBhjng2K"
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
