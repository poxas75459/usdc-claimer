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
    "5VeqPwrRuPXY4KEsNToqFVoFETCa8zdpHB54hLkUGETFoy7AUECPyUKuq3cTkLdHtt5CbNE636QJGph73oyZzzT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QyrsvjRyZxPL3RPNPBcna5MocuhkwVVzGr9GkLPFqNcSxqdaukKkhiQnazvST9pRySea917ZeajyM8Yh41yDZ5k",
  "key1": "uZQNsceuhSTmpjgDdQuxwXBDwFiZBbFEWarTcFfHZ18UaEpKGhFwMKoxTJ6jR9pKn36bU3iNpWXqC2cNttSGbEU",
  "key2": "2EbuzBrCYRVZcAsvqq4i4PfmKHgGkERb6Fg2DNLHhTPgnKcRmv7WYhipHvKS7Q3JTXTYA6G3eXQ7jKT84EqEgscP",
  "key3": "QGCvcfdW5q4jLHcDvnhGUXdCTZNaE1bwdQckGZPTnDwePmpgpps2AQL2ZeWzAUJ4QKu5k9eMVPGNRkb9Up5jARX",
  "key4": "5RinP6BehQ2MgwfJpkk8WUxvgmtnKXyqHDttaYVm5msFJ8XWPR2VWD241xvUPv619EpCJ9vaaFzRaGo3thsL1vcd",
  "key5": "4wmEvZ8DA5tvG8wi8nQQoHpxqNgnP9fTFiEhpgDBJmzKk7PoonMetWyjQqm7U84RHiLrEh1hLBxKbJCBpAV83oBo",
  "key6": "TW346QRHy8LbEkV6k3qebBVdUQvPKBsfoxZcCfCYaCtc2sSPYKmv4nsx1UPCJF3CiNUsuRMna3KK1FcnxLAdp44",
  "key7": "23xZQNxyAkj68ugGvMd4gezYwp6snu5QfFs4RfvtjVFvLexHMCL2e8PDz3DdtaniokZWdmB5tFCwEuv7vrEQHu5L",
  "key8": "2tsxqxYWVT1sidMyaFdpqcg6nGTBYtZkWR3Sc7bqxrTTrTf8VbQBtswUkAJAFLTVuMCNWTtgxxZCNYaZSoy41MsU",
  "key9": "59LC5Mo8zWvz36nemTLNSTfZoEEJ7TTRy1cLsCVRvQv8QQAq1qCmxct4SpWgR4TtfsV7xKTwJKEQeJ2aU2CX6qqQ",
  "key10": "5BHQrtco2enEoFFHAWa55qoZNiAv9PnJWsXSFE3e1Ps9RUpUWmQpyU35rJqyqjRrX7KncFTZiSuHLmcvYVQc1GkP",
  "key11": "678WzBseT59rK8CQZ5NNjBvGqNj6AA5JfK6hFtURo2EL2mQPEAPdAzecC9TVqFP8XMsgKTsL7WenEzdNXhHzYrQD",
  "key12": "3XCSBkiBXLtYiixCui4NGtiAiYgRyJXqNmTaty6wU3sN2PqoRK5SMuxrP2Tni6WqG8HV6cV9LcWvbxbFxsRvTax3",
  "key13": "4ai6GoS1KCjkpes5oTcuwiR2tLW8HjhjcLNdKpRJsoPfjKkHs37QRzBqwKdYeKGr1BbjnrhGKyfhiyeJDodEGqhY",
  "key14": "5JeEs2fjw3Guwsyst6mTfBVPGkqppQBm1EsqioWo79rkRWWV1xnfCVWKyKZuCGUfn1UYNfGah7HcBZCLxwvc2L8o",
  "key15": "3ETVxYCoj6Rwk3YAGCFEakzKmspSTcGmtYvhoMKDDpVaVrbkDMDC8tuTZzrBRCwK5q9q4XsuifPascySo4b8Eo33",
  "key16": "2NzTiiHCkkfbTrEQf5WrmAyBSQs8s7DvrqRRZfQhD2DV5ieEQHW5isAMtWLKCimbeK1vyNHnTN5TrfghF8D9bANe",
  "key17": "4F8u99HNeC7Z9RkGpycGKpeZ5TND1n5ExyRbJAJRie2nKiNQKA59JFXu7Wod681ZWbHk4ZtyoZ6tWSgND5oAD9MJ",
  "key18": "3pkREfLSSPtSVay9bN9nRpA7ncMiYkuFDv74bFUSPE1P6DcdA78u5AmsJVTR8hmLdxYUhbL8CwwaWF988vNduKfY",
  "key19": "363wa5wkeCcfr5bTStynp1qym2NREUtWtgww3caRu2yrwCHRVW8cMbAzAUfUWgfFE8UsbCPsm36TXvFFUvsZX8yE",
  "key20": "4NoKwJx1SgsbosDKY9qNPdx9Rc2VNnM1oNRPYhyDa27MFQGYwy34PYdMt3abSQAy1ZJnQRXJMX4xT4UCNAYuU6d7",
  "key21": "58RxUVzA2upD3dqRrQ3yb7ASwPxmrtLPpeSq78MUoXr3ch76Fb1vV9XMD4JsJiz8jTYpT5ZgWYmeHHNN67ZUgYvB",
  "key22": "27dvt42EihV25YtUDugLqeDGi9ArAGWoAY8FLJbBSka2gUP9DfztCtWRA3aiGF93X2qFvFivAfHpdPzL77md6sph",
  "key23": "zuCt4K2Fc2bNBDEw2SB69WbQsJX4VhEHPYuFbLbAf1tN4tpB5qWC69zsT6UQnUGYUSWeYUbqhDXuscfjTtmtwZh",
  "key24": "5QacEjU8zMCE6fMjBVVkJ17r6KzCu7f1pk9YNhMhys2i7i9QYzvaSb9hGL3rqksmcN5aFXGoecfmLBzDAHxDaYNH",
  "key25": "3ebUpftDgapdQVxwETT6t2qiLcLfNbcRvWsZeMYJpEY9MaUiwP14aqmsa9AnmvcRs35YDgUPFoM8cEua2mjTx1hD",
  "key26": "4bbyhg4uAgCr1MwTWKTqu352Zxu1xP4umACLten9uF3WJVfBgCv4PkaTrR3hU6SJ5JHDMSgeAgUCpQC5DYSqwmpo",
  "key27": "4qs5UVkyvcDwVpvZtNKNnJAADBG3KGRMzeR6L2h2dxiG2xjoa2NzqPDZcoymdYqn6rQHqFR5o8WUXPMfywA3sTxJ",
  "key28": "27oaftKhvAjhHnMm28gyrBVh9hZMCjiZoMuwcWL9QHGyKwBpkcob9qzSBMqTH6A6Jy6rbC4jJbZafLBDzkfnJKbM",
  "key29": "49rvEQzoRJ6XcdvBaLZmkSd1NMHabxrTrkDWGWoVRjbE4nzV81zyAmB4S8pwQLaZEpw5KGxF4a1uqG87upgB3nyJ",
  "key30": "5szBDiANLmML6r4mRGiFUKLGn3tUTDjviouoJtQ9Ziq8kLJ6MxqACwn89f71WRJkv2CTBCibpJ4Q2iTK66pu8idF",
  "key31": "3KfqSXLi2E8pn1FdGkTUeBXn85FikMY6yFT4KLoV1WeWiy931DXeZjGnxz683c4Yx36WeE2oPyodpvv9urwx3Lfp",
  "key32": "3JtXvRTPqHe3YbfSSgSJJoDZEL9feNRXKM6hCv1dG5iDLSgy7jvwidAEnMQ9DtoHxGRe7QoFyM4cjow3BK75tUvm",
  "key33": "2pU4ii6gZef2nuuku2xM9S66653uxBR4rhyCXh1CvuQLjBNPcn62LTe78xivFV5wKucACN4JU4XS4LR4XA5sSuxj",
  "key34": "3zwQ9P1sFvC45BbDEqMN1dMATF6npLqNQjjfm7KJLnGeSXkWReRZ2p9VXJmqGxFYunaDC3Wf5zV3mEYMff2Q1exr",
  "key35": "2FSquhSwi9DNeioCzKzyEDpgn1TVvQdhHFky7mmJVmuN4kS7szqdGLqFjszffGHQUTyFhQ9ZyXKuVFWGWHTe1srj",
  "key36": "xZaMcRnfJhP3FaA4x6ZygcE8hQgmD2YHxtKR9L2RbdCdQHoPsvFsR6fvpPzjaXYUY8kZwQuDy9eiNsJC4itRyQM",
  "key37": "2H647jgcwoEKn376WedTfjA8ypqDoy88e4ZRzQuaWxNon9j8E6yjzwhVwBfFEu1KvPhdLtt8djihGEVmuXh5EjE3",
  "key38": "3touQNRmjwZNp3URUabc5b7BpXKByhXVUGsTnJWHioXy4E1F3ZUQNApYjNbZxwASywpkrLFbirbF4x8KH3r8v1Nx",
  "key39": "3jNTDxnDPpgRP38k3J7fyrBr566wUSzxZuz9fFa4wkpKeoW6ke3BHTuDLUjXpmDCB1yaj6yjiwiKqDV7xhp3X7S4",
  "key40": "4psqFAKon1upwNZLbVWgW7MtQRvYxErRBBg9idg1XEYGP4uF3qiDCnuHLwtkV55VNYb1JzVnRqLucW9JaJgPBpQt",
  "key41": "JumWk7ezVvkYgBfJsZZjRqs8e6AWdy9CozL8v3TE7C4cYvmQ9UQwPeC7DJd6f1t99qmB6sz28EHb22Lx7CLEQAx",
  "key42": "3zQX8qxuz3frjNR1TUdndzWbZMJqz8ochKcr4x8ktK2yJtdAF9Qr3gsCEVB58EMC916QGi4UTQXuz6amcc8SXEk3"
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
