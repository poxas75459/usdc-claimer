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
    "4VX1GDm4NU8s6aeo5vVTTSrtBRrEjvTDaJnyu21LBPUhzZmu24J2nssYdoNaHc5ySXbaLi2Mm7ZiJzumcgKmXxcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46rMgCjNJt35sjPgebkkV9Ekhm4BSMWE7EZt3nxK9mUZndCtuRXKEgJVXhRPBUPuSGioCHBcMHampEBBEUzGtigA",
  "key1": "2Ww9zL7aSJpHjcYhayQhAeYv3zm6ruEx587Ywzp4gvmuG23p81jtH6un51Uqy2d9hegQUHxzrGrztVrawfG8rKk2",
  "key2": "7BunmEupTCLpC3CFkNeg8WWski2MsmMtAPWd59fuPcG2B3ukH2pcGRBaNVQTr1mo5vYUyveDDYQB3HSH4DU1VbF",
  "key3": "2tUbPEohz6YiPN9KN7Fyzk4gnQ1KtftaJjsxG7BFCxJ53NkPpKDJsij5cKCRqkkptcAsPDxSeX6Mj736C5jDbqNo",
  "key4": "4gu6FjavjkvV35xMLwWen4vkBCadGfuZnDB3mtb7SRHbkYC7FunaZSpdByHWevCKKzMHqNkwp4UwahZLrhYEf66Z",
  "key5": "3t1ytoomnuBMaCjdoE6ybA8AeCTToZdScRsyW6PNsvk5aHWxUUUs6UGqC1ToURoKECutpL5FpMZivQZnWgHZoFqB",
  "key6": "4fi8DzXwkGDtcLGeEzNGyYe1ARKi92g1RzkQbzUwaYEK7J9p7kh2K5kvYZUwQ7GhUvNqSo85272Rp5w2UCo88Ga8",
  "key7": "t191WfcdSAMVdZ6CnvkqGUZb2jmNwhnJdCCTn1XUG4u2d84M5M1oTYxkSkRHqHMa9jcssJ3NPw5gJGTWg4AK316",
  "key8": "onMJUPCnCknJyAvaDBjFntLzVdpGhxonhLTnbkk626249k88cuADxjmaVWUzGzPKP7DrBnrqHGiBGvXF3Ho5BTz",
  "key9": "4RaDWpADXsL3zxkEzpFgzagDYAANoAugkMLjYVqupdq8mBkUVqXMA9kFGS25noj4LGh8cT6UbGDgcD2P77cy8pYR",
  "key10": "MPCwnot93u3YqjJCW4EYuHYAqPKUYsFGRWdJHEop3AfHkVQpruj2fTr1hHgPzfENLCjJLeT7kBXAGLEuzaFjaDQ",
  "key11": "5TCoCD7YBdE1dmiXtFb5oDxKiLAGb5jcw8CAJGa1KmfVWaMvMMBTrrMV4ScHuN3oqPJfu2rBDpKB35rJ7t13JjHV",
  "key12": "5RGD3MctVyEZNRqZb4xM8FxY59XfKRUiumVRPBRdacoGGeMB4razuLb5twPARpnmittHZBvNKPPTqqvXKkpRP621",
  "key13": "4FvdLQau57x6YqfX2HHHdfTzu1cJBjuTkukp6za8HYuGuiSuYYEcbDMgZctVzfR89mVAh2Xure4dqCimgej9MFF3",
  "key14": "QpSxTFfPz8iX7paA8Bgf6u4d58FhLRmMcT8xa9SNE3Vmentjyok8Wv57t4njH9n8oFtx2wjAYXKYdjH8vpX9kxp",
  "key15": "3Bp4uY7Cw6dm5FUWj3VMK28qjZfVqCnusZpHNeSgcTs9LiQTE6evofN8ubwGzkwUVaLXU5mKYau2jDDG6e2yqN2i",
  "key16": "32QggpGswGsznDwREaHpkVbTEA75MHy4nFEf8Bjcx29zhR89gy6MPiqkfzVCTSEDBq4xV419p1tTqxnBXHxBet9w",
  "key17": "3KFSCnJQqMXvM1RbTCFxyX8eqTBWY6rxZLosYgDGMW5ESiSkm4CeNdNum4rjoL1ubdY9MnQx7YbmuXJCs2NpFwyb",
  "key18": "ycuCLc6wUHrFzMikWKDRRBvscPpiB4gHqsxi65dAdd5QFTNp7nJqtm4gbpRDaWRspaW4rSSF599pQf3RxJEP5qA",
  "key19": "3oTMVgDzfGLkK2zBBtuzWdxmaBdStzDcnnND3JtMJs52QCLFhcU5WZtUQuVrPRaYWom3j4QNQ1PLqqMRxLYWDSpS",
  "key20": "4yn5rXPuNvdJEaN5bP8KmxT2Z4E7UDqqpGX8CRREF28LtBvtGHNgp5FqmLP89gtoaXGGWMUEvMFQyJHTn2tFVnXK",
  "key21": "zt8LAef1ZQxddWcNhgsZWbySZuwLQoAxuKkP3ESte2yp5DKFDDWNYYVeyrxNan8mocKaXp1ZZPwNpCETGCH68aJ",
  "key22": "3L25UAs2J1QG1eUzzjypX83kZe9wjKiVvBaxW2q597eVcb8Q1yLwMWHRgpL2mFXo88PhFe8bSNWiHLG76HSdU2rD",
  "key23": "4ZgArfv1UoX9nnpy67KuBiKmYfSFYKW8KYwMwdKiZbwcUVSys8xDbPvBKjzeznop34MHiCaebB97EjX5mCNwZDkr",
  "key24": "47u9gxpVjJaohaohXRvoVUYderQq5FWUzNKNy2NZ5iLYXnJNBUGNPFYZftxnemboXr28r7MwLrGJq8T3ymjedepz",
  "key25": "2soTowW9GJNNTco4rdp2ZRTHJoX9PUWR7ydm8Vcukzk56Yjp324hefPgSPrAB8bfPkN4KbBA8Zsd7cM6Pmqpotzz",
  "key26": "5xuBeXaWZRCLduPVjwMWFZ8Fq32FM7AGML7BqQVaMtc2i61ynbQ8QTFJhE9ZEByEpWTwpjZNJAoz9HLPLKmBgtGm",
  "key27": "5B9qMEUdBWvXFczh95PnQh9gV3K5bQi2nMh68FLQnXkPhzjmBViqApcAf3atEMeFqZ3Ky9rQojXuz3YqCsmXJ9fA",
  "key28": "2r2HosWGKVAwYFSp4xT4xtfRU3wySWNg5ZUqcnyAcJtW5qNYtcvda3HrLRdcaXcGu5hLcTE13eA9r7D2Zr5ze5e4",
  "key29": "3BEMzUnmojTUwEJAp71rbw9pLVef7qUb6aTrRFAXCqkgYLANgdU1WHXP9e4VhTRfkm3PnD1PhZ7pjK2BgoYetPSm",
  "key30": "3Fn1tu1QZ13pETnuuZTkT2prryZAkZbFb74Z68XFbcB9wDj5pqkzGwtqYnXQpGjuciJD8BwkkvyS5HQEuMVKtCQG",
  "key31": "S5uspweXc1JAXtaNufgafhQ4oPuhyqdkBudYH2P1iuLTwgeSq1eFqBHChxeEL7dWRxRL672na77gQuqW4wJzgZR",
  "key32": "WQgCF6NmiCxNaTTVsEEQ2nHsmoM5sQ3WrR4fwqMytSjWp4k5mimfTVNotAvzPtsPGQM2PeVGFByKmRJ4RCCEgno",
  "key33": "nVJxstdDenKHoYPLRRUUVCjvcXHzRjGsiXbHCtDSdzeDjE6jnmQS6b7JcLBpYnA2hUNTjnHAfd4kZMxLySVrGSy",
  "key34": "URdz7F3nJQqT5ZpW2u6n41MrQJw9FzhfdgUrBuALqUwc8jatcFmgSSnDWVV53jQVXTAL5BcMKUgcFfgS7vUZo2y"
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
