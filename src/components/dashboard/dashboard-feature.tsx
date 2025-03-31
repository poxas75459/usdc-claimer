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
    "5LFoRb55mixdLo1KyUV4BcUK6UNpa2C1KMuMNJTJYN9nZT5R1m2SttK9GEcGhKS333Cdpms4xn6TGMAefLZ7j9iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BAtFS64pp6CPj1ZMcZevmbeksQJuTm9sVqDp9Wuh7tM8rfQQGgKM98WfpJ61PGcSr8z6x2DBcVFyXNP7b2dyZLB",
  "key1": "YSWmsjHMBfdrPmzmZgDPTdU5UVuKsa3Z7xpExvU35HKhNJWYR57BsmKpAKznQiNgL8TMsMCzERsXhPXsidmbM8E",
  "key2": "2xjURUgm3txssZrLfr9LGuoiPnLvVKjJRG5cZHEsSks44i8y6bFppcSvtxLmsa95MzvPgxt4xVsE3pGCpexrtYbS",
  "key3": "3XJzxUcTpqdqVt2sreFpVSXtuAMStGAxnFFxBkDTNz9egPnkFS1kHamQYd66Ak8wsdhpqpVowXqMg2xSkL6ZZ4tt",
  "key4": "4c3BjVCssL2tw7VesRiquZ3tihKMDKbUEJTqvwKRwdeUwNbgUnQzuEdJoM5DazS5tB1rKcxKDEE8ZbM6uKbeMrw6",
  "key5": "4ozd9F4DxpidSzF2RiLxbDEWLrTQ4h7yNj3EEtzfokC7Vo3RY1hyqGbyKkMjjj5RPHbVbyFV3wzDqVYfSyH3CY9f",
  "key6": "65QBw3oEFzdm3mMvHjS1ZoZjXkeKMLxY25BNPZKBfbupMZ5DNCLyB1hPVDV4AvKuPuJYDR4DDiPnyEqt2q3fqiJM",
  "key7": "3Pik9cVcYmE5uPQBZJx8KM2RekisASzKd65UB3d64NYEmRPED2stPnsJLuF1gwfwJ9rqygq1Xwfatc5KEXQekfmZ",
  "key8": "36vFWYjQRmhP5wz1Fu8tUz6jNk4a7vVVtZztLpBNCERqkF69ayCnUPKQd1oMuEG3W52tv6LLHrvUhCZwK681Gev5",
  "key9": "Q4znyHKnZZyRpERxwEMo1TEiWH1wzu9bCd6WSbdG4hk9u5zfQFirZu7vd4SJnuiC71TqDSKoJz5m7Li75KsKBKh",
  "key10": "3fra9EVWYBzkYt6jjK49uAhXAZG8ky7uz65RnFQA1EYuZY36LNe9q9PdhYsunWXzTtt5D1k2JA5fQX5sAUFkXAjE",
  "key11": "476rNrnSRXGFaznmSPxe6KPXfr1DzszAFDPMSw5qcU8ZjmVcK6wJf9r23SjrYRDSYuaHpW2YM8Z3GtDbq5534f5Z",
  "key12": "4XvUr6mpL6wZLUX6PSdNxpVhdpuKGKSRYq6EXSEbm7MtreQD81PhFtmt7CH9ndxKMH1URkHosuQ6MszcoBpJRsPi",
  "key13": "WgEsPEvLKTXyxoyepsnQXVcni1Qq515LX27UtUk5pa5f8vcweWYxoeEGuLXxyCPBD6Gd1ZKH5nPeijJpHFFCw5p",
  "key14": "LfnPEGTsqtZRnqGeCBVtsr6MLHZnC2CtZvaKAbSEX98u11aA18AQ2XegJAujRk2HUMo3JKfQCSzUhQg8BwswVUB",
  "key15": "5FsF63rZg3R2m2WcDzLES6wjGjRyTU5uYqdxzzU6uEnqejpFKw6Lhoku4853ekGofcUjosLevgZjqs7RaC1QGfrR",
  "key16": "4VEBvmZiva6Cg2saRbdwhTKUHFmw4oyrcj9GwSqzaNXKLqKfEziLkwBWRLUWEEtL42bfXzg6rrWTRbJys7Qy3bRp",
  "key17": "4VmrWtqWhmQ27VPEvVxxwEBte1Kb8PbwHuNSML2NyNXcGsxd8vECon1vzjTnq57FEDii9Y9mipH81fPA1GEQGwxk",
  "key18": "5PGgyb5mVw89sBjsQqS7AgHvMATAHt3sGvahnsvqrFdzshrDoFCrz8Pu9feUGTfZGAt2mGDCLta4bAxGcXdkZ3Z4",
  "key19": "4ZSGhTHxqpHdYVGAhQY5F374Hc6a38tNc8G48ycibtCnqFqXhmdcHkqVPw5kToa57xibWHZ3fVncEapWTeSuFAEn",
  "key20": "sgUhGEZw5uXx3RxrFNp5WhqkfjJc9DZANSF4pj8dxwAfJBtR89KKdyBAYrTq2Mnt1ryJeuXUR2y7XEZXiGsNMYk",
  "key21": "9Tr7MWRw4eGSynZou4queSFbKULhLejBv6KaJXposX7ayvZW4BcFn4TDtzGMhjcENfPRzctJzZ6RVuubeq7EdAo",
  "key22": "29J46NAxjg8UPgi3VE8kMCeU4Yxs6insFn1WtFfArvWBXWrrTFpzu8WEGX2EnDPNDXUehoMfhNSrguawzBnHrecU",
  "key23": "5aZc5kCngEyAFrYb1GCTxsPDyeW17Ht8H1UKyBnZF7Yh3ntn6KZtkP8hnsq9G4ouSA8NgwKqnrbU92cCf1PGBCz4",
  "key24": "UQZahKfPMiUtfZjikphnnH8sXhWeje67oi9kQuAzXnCxVhRzLDQ3FVkAcds7TeBsfwmTm7TU5tsBkvZSJT4iBmL",
  "key25": "XkA1gvG7KTu9SmPucCsSXiz6Du9gD1aF4pD6Y44qrw4JtknJnpMQBs7jW7NWx9RNvJu3URmJB1UB16kX8SdpXJ3",
  "key26": "3wVRAhRiuoBu6sNhfpoTRjw5Vx7TBRr1ZsqkWoFQrgxpiY1PyBf8QqfR6zLxNQiwwkZ5UdqCKF9PjFEVdeQX9KDr",
  "key27": "3M2orkHi7HHbaVsJVDhjPxx1rJXzEs2QNYvkv9aUGuCuKUQGStC5MbwSoHyn8KGLZ1nPPZMQAqSeRFjLkxseVpdM",
  "key28": "3D5TpqoRsr15hqsz8qe2cdpuU2Nbm9YZq8HdCo6JCRLFQgNhbzicubLjLuuDsTNtF4soMA2BBKTo9kdopohswiZ6",
  "key29": "63tLVQAXop7ZmnQzMAMiYCekgUeLT94NzZqiVqj9EvkA9VD6nnZLbjUW4xrsismyQ1TvVRsDvesH8vNgMrk8AHYw",
  "key30": "428cYvfCGz65zQ88oiiabdF2DbD36y36ybitYX3846vze59CLNL2wirUYTex92aT79Rc2a8oUeTBjXtVm2tnbou9",
  "key31": "4VTEddwjXJoQaMV23fWcwtfSMgZfjwCsF3DUaCAPyov79pqQNRBwocf28SGTwBtLt6Y65Yfiwmvp2YUqvoxkgjpn",
  "key32": "nkLeGW4iY8XUFPdmwSzvPkSXMYGQqxnQjHw6afdkH6RUDqn9ne8XAegSN5z3QjcR5t2PYVGEYncdDuBGgnzyMhC",
  "key33": "53TvdxerjKw7rntyDUTqfCwx3KBEUfQm38CbdfQi9q2BDb6xs86xdradawkV56kdx5GtpHSuw7zLzbQLh5R9gzkW",
  "key34": "4Rv4nXYZQrGrVUWhH3tuVDGoZUjNsG2t9x3MScPPaJJovYyzwf9HyTiVEDqucHfV2MZCYKBzndKsFqkQpGHp7iNc",
  "key35": "5RptiZpMNGLKX2zDtXXhSb8tcUNHKhrXBQF65hdGdTwvSWHtCG1PJVN4CuEELsny5XCXMME1cLU9SkadVA6zgGNM",
  "key36": "4VdkLUF3xLboFadVjBcZZkaLr3DUhwgS5gvwWuhLwJjaEktYHPSQhFP8UkDvmvVFB5uCgvZXBewd3Z7kY5zxddx6",
  "key37": "5yrxUT2mTH4bVcu6M1nKZxRUWXJKJRrknFAeg2be2Ys2J2aAxqAv3i8yJf7g2dybqZTg8ZteSCGGFpArD1Qeg9ZT",
  "key38": "24UiLcQQHKTWaJXgRNuemNUnhJTwy8kLGBRgVvAkmnCDrjQHda2CUL6LBrUvBstox7DSRTFXhhMfHzTjnvUjaWiG",
  "key39": "3NvUUa34A1NkxZ2QU11pPwnYi2cY5jRnpocJ3BFMsjsUuMrurRUpp7nhJ7uRETYUYAHYpSxcNhYb1GBwpRjB4V2x",
  "key40": "3zbxnZjomcopePCg9pWusqkB9hKGvQrU62EwePidaWt71NNP5EZogZvpGTeQkXPUXPkts9NEYi2WFN1gmBUDPvft",
  "key41": "4QAEXumkPddE665QuhdWCmzxvH2ZSJ8bauK9w7m98k6QbSinjy6DQBX71BtxjahnVSPNVavhDYmXdUohLJTBrmfh",
  "key42": "4mYF42vzEnXzpXuKadJSiHkY6Zv8A34dmz6obgLkVdqpkrzaopkCgTKr1bRQj5SFRNiKsErzELsNZvGgburDdm4W",
  "key43": "2hbdV9hBm1fJgEh6rSRLRhssmq38Kz1EQc55CSKwy5n84XG1FEMnr11FD1TW6VCeRNVVBLMaNzgJGyMcw6D5zXFd"
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
