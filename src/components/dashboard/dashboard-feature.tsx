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
    "xvqw2boWU955WACuLKviAbYmpBo6bur5jQXHhS2P158VJTADuP4J1ExGYq6QVLP5pspjx82ExzLEr4J7FjdxQEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gagbdX5RSGwoSsnkt8DYVHcy5DHhgSiZaTsYSVPD82CDZBVU6zNyrULBAAiDBBKwt1yMeq6JLpoadNtgT4fDTT9",
  "key1": "4Xwb1AchwQ13cAfyu5xfikTBE9qmUtSEuVCehaGScKEawbVYoD7QMTsj1t9su6H3SyhnUg3qfrzD5cNCELYPL5S4",
  "key2": "3uWbrCNWoJxyWvGCPQwbDz1114ZR4wMpkhQdfQKwwaag8UvV7fncZpDf9v8ACF5wrnW3DB9XZB5EMTqA9mtkUj11",
  "key3": "4kcm4YRvMZah8DChe9e1aBSAwG1dydNbHMkRVH9umhU6A9RTVYSU3H1tMFBBg9NQ2SwAAVthDzHxaSpBoG9dhRj4",
  "key4": "tygF2erPnP4rmC2FyDUjmy1U2UTq6CXniMrEbTQKfS9WdcupYpyQ1Y4gLpAo11TZ58Hg13VnaPDW44pE3KmNNE1",
  "key5": "2Et34ZMQCTaWFHH69f6LT1jMnC34ZeMTZgLbSLGC3iEt9UKf1T5XRLtgfnciDUQXau7KxZe2f5xdGyBKAeD9ZLWn",
  "key6": "4hdcy1NBYZcPJgvtaTBuTLb2y2mi8K19xN7dyMFKkh9urK5UmKrSjNKJipnuEPi2rxE4byMej7Wn8ASWMbJYGGUX",
  "key7": "4BRWEdQiuATDVn9vqTbX8CYYz4j6nN1bVhCqpj2wTdhbyFR3U7iHM9oHThmXnEAxaPZ8LNyveGEin1ofDTzXJVFs",
  "key8": "51QVGsHvP8PD3dDCXriWeC8XJkhDsFLciHNtsiTetzAYFj65F6ycx97GsryAJWLEEwTK2yzUguDGWWeZYH952GnM",
  "key9": "59omvesmkY3Bpby95tZd3Zkm6u72D6XEZUMvnPiXgEWmDBQXkJxtmWxsXURm4Ng725WTYKrXLoEZMNMosx8roGaA",
  "key10": "3moe6dqsiTeoqE65nGELPQadAuwWE3BVnMJ38p7E1kKy1fkfKTgRBggTqhnXMu5gCTYTbT7UHWirhx64JKn515oD",
  "key11": "2tgFLDwD8LHn37FXg7xRgU7a6qGFTxBKWvpz2Q4fcYyzNRfrZzZwCCiC9HupSVJBPAwDzz3dPxqeY9ddkHizf2jd",
  "key12": "2SLr8AzKZ6MXNshJjJGS5agMSzmndaUsC3ENYMA8EYx8Y5NqA4NL8rgqmZ2awSqTZFGk9deeyh1aTXESYzPFHPyB",
  "key13": "MBfc3RS45FTEAKqtkrnWG7dnpUJpmRpp54amzTVA6xAXFmmQEK3s7pzECPr6BDApkkHWzKPGDGoMG4cUfBDigSH",
  "key14": "2oUenxvWA21pDvLqcB3qyZQFqypYvLZgHeRdBctADgez8n4iAPxoaosdAfB5wx2uruyVAhwLNaZcvY5WHUQbtF3k",
  "key15": "3AxDPK7tno9gbE2nWsFYjMTqM7ASxjQEBXREnmzprjih97TGoHUYjY4VAP2qy1U9xGHzvLQaaAvF6E8vXiXS9DKt",
  "key16": "4ewERSYVvxZddvEknxNmEZbeBMQoYs3dez6AtnG7KUjQrvsJqYTbc9ijkrX2du2Qa9CFHGRX9u2A3QarwZkLGRz6",
  "key17": "3CisZzUsgV1NdcYwDxf6A8rryaSLd1CDgR2SuTtF6G6z7XzYRaCmgQkCHVA1DYc9FDMYumjSHq2W9dfuFdMNmPG8",
  "key18": "26nkPEPm2YxKRgmiir9j4v6AspCiGxFQUJBJfy8tJgBYErXVj9u8CWUsA5prjfvZ8SnsuCNSDkBQ2uQDsrNepna1",
  "key19": "23y3AsivxVYMuL5CpKDNKt1BP9XpuEtjiMuVFgkxCGiH5KCnhjAv2okhWvszVzVyf88zPB3nZNPixWjJmudjAGCV",
  "key20": "5XooQa12iCWJ1Sna9MU9g76JMSPvmPg8f3o7PMxvZKB9T4GWtXeVwYgfZME191Tat7usVrusrBfNY5jihijqmggC",
  "key21": "3z3uLobLdkZ7uf8KJqytzb7EBUuCvWQQsueGRwZH129CiTXzdLgKMDAVCnpDdqMPcfqRCjH55opGxhsTssYxrnTa",
  "key22": "36RxTcdHxRQLvFDC1LZPYKUVScuhapibMRznxycNRd5VBxGN6CU2qfFXEig8vw96JHKrvAKFXRHy2K3tysiQswQo",
  "key23": "3dXgCsQ9FsLuabwSuH3U1EczxPSnUAiXhe4fQ1vPDmxrFRabtRYzQa5dKuc4A8fARUkvHbbJ9pmEp3pJi7k4ZpPh",
  "key24": "4jTzm7kmt2tasXsGdekUvjL7eqvjT4yVizTuGZnJzxRbpoVpJTtfD7DLLy5gz4FL25QdakSKF1DW2eLWBZA1YsKz",
  "key25": "4y2bK6SvSctcVFz56ocaP9xnJw34Wb2fExDKrEPM82RaJJXLvCEJKtYkyUJdgV7rrU74sckYbZTajro1xbzx5Yiq",
  "key26": "fLwzeteBbRwRTVFoS4ayxoUbfYCKzxhWGz89UgevmXQUkEewKbEqDmyN9DjJJwoB6LMhckReKmBZGtrSLVLx93N",
  "key27": "2v3sbnesPZbNFLnn5SGywjEhoTtGWNdqaNZ2RnQqxCWe23nXQBQx4WxgZeyEZV7QTwwj3MnGeLgK6hkp2x4sG2Rx",
  "key28": "52k1o7KRWNwxLofrNpAYoyN7U3BEVtCePRM1wiRQuLPYupSZiSG7Ty4v14JtytNPdkwVYk5PdiiKDLjeoHtN6SRr",
  "key29": "4cc46nGUS4tpFRzhbXpSDSskYcpv86rvyAFNwmxz4Mc3yx8bspNrubgQ9GvARvdQqmGqNPEe17doudsEL676Sa7M",
  "key30": "5mNjwDWKxwQYSJEkWGNnXYqqwC6U6JnGDeHyiSchFK5hB4jjiVS3qMvtxXqyyFGHw6iFXgW5grZEj4hwNnMyMv1d",
  "key31": "3oViKKeQXivMSv4Y5NWKEtm2beaBmdbDLZLhEfUsvucVNBK2YWN2nP25RMT3eYZLJEH3j5zGmKVyhYhK3dwjoKLr",
  "key32": "ffRWVZVRhTvY2GnSohmsTFRhvG1tF5NZsT84YpjAaUfms32UUqAQU9TKHMjPs5hH1QaBaWGhY3UBDx9YcWXqKNS",
  "key33": "3CCrSsfzDd314kAebNVvp7iskH6ScJ2p91kqrbmSoFQFc79GwvYwAh4xSWkmSMNyYoR8nPnrJoXNLNy4hhLhnEjq",
  "key34": "2ddKDWzKeKfiEQjrtiwmAt9ZqngoFCZ6rcnGXSZnTsxh3CmQYGDxxkU1dztQoNASTgYULorGC4z4H74ka1Bajkh5",
  "key35": "2zZCN8QpWa5LW7JiQZ2poUsvHis3NZcU4sW7P7UKVHCnbjhC3sq27zwdpLDLXriWw27yT7LzRK3iCE2vu1MuBPR7",
  "key36": "3Q7vQ94ArKaeVVK5p9K9Mb8yiMzDQwmyRiDNA54NKiy5wfe97BHR6NiRHwCsgJDepwLteVcJa9PYxBnQbTxLpSiN"
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
