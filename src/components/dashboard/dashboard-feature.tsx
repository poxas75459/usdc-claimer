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
    "5xu3nUJek1DUMLnzzCkAqMquXJMnQov7cGg3ryVWRgNY1LDZKt9D4o2eQL9HWJ4knC3dYq6rSEBeVMmsbhXXL3nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62jYVqGdeobs6kuuzXdPg1dgs6MbdjNbGXHDg6xNc54UcRv7TWgTcbRbobkRx1AAupnVS2vSyTodR5rHdR5fBUjD",
  "key1": "2inXcRMawXSap9sePXVk43wJVek2ojsorZDjCcp8sbgpvMJuDKnUTLkMSAWF1Ru5MvwFrEcT47B9de7t2HPer9rE",
  "key2": "4LFgL8o45AkaHppmLY3zGkrAx217jBPd2V9xtopWCzWGFtMfRRPvqAtaL4bX53rogaWNReod1CxmSNb3ccPce4Hu",
  "key3": "4XixAcFm7C68XF4X3hGZhwMCXHEpUWxYpmHoo6d7MA4ykqX2fhcxEt4J1Q8VK7HqgpnsQi9jJxkEzKEX2ndiYyMP",
  "key4": "2UKNSx6zeTkwjcCbjQpsNGwHTH42WoCApnfkQoidvvQVXHC8oKVGfCFQ2WX77uW4SSzWodyRRTXs97KRZjSDMV5m",
  "key5": "3VcT9tbwvRk5hYVwibR3msa6Qt4JUKgoNikAXsdExDDqSF7TpQhdzkS8UcWRp6ZaEaHMEk24WmkgAiU9GCi4pqjm",
  "key6": "aVL9gXpfAdXmgYPWuby534d6JqTWL3WFLka2zFzZH31e56yoEMbdV6wxTgCDaV2vM8SbP6K8KKoeCsTkH3vmTF1",
  "key7": "xjDHHoXgipLN2rMp7MRpiFxDZvGFHEpDhgStCkRxr4VxfsBAyonHEbVAyhFnjNvuYAFS9xQpFxE4RzmpFfwmh9j",
  "key8": "tRaTVDVhmK33PZec3PeQJys4nGzQwk3LvSHcvGcCfLDRytZVJnHzvDKazXtzgdgmbYphLmG5vxWTPzQM78SS9xi",
  "key9": "5QSo1ajt68SctQVek54tzuTRHMegGvh71sUWhHwgAuUD8RPyHHaLJQeLezDqnqe8FSJbYVu93qYi67fWocmLLnBC",
  "key10": "3qEEPrd1mvNW6xRnmTVdLYhTGFA4632NwYyoeLe7r6D3eqgK14epnTJpD3uJ8TRpxwMMZeTWt9EsbdGARr5zPvqK",
  "key11": "4GiNM5FjDGvSuGtxvFtDBsTRcSEL6ebKDjLN8bSbKvJ8gSFrXDGE28NdNdEhd5D9V85ZPtm6jP32vEpH1dxfbJFX",
  "key12": "64BMjuMRU1vbcWYYXTjRJYSbeJyXrAMvfpicbq4VGmYek3wgHywnuAWXfUySCJDuN5wbF2oTq9t2EkjX2f6AWe5W",
  "key13": "4FXdXFw36oBZzAyTZkxcgWtazM6QPrHE2kVQdQG1Yi8fU2xz8uo9PNRzNTHjiU6uq6JpwYe51XqEaftXDFLTVkQw",
  "key14": "3YV4QauoXc9R1MJquvtUdcfvSucg6iFwCG8E7VEtV4m1YtYJRoRqbFZbKFaA7z8MCmpoFNJd75LF9ib2UxzpLStN",
  "key15": "2d8Zq3gwFmFwPiAZJSb9avm5iXsTXXrULBLZ87qgtxhVLbd22U1E7NZT4jr9JdARjCZchCAGqoKNj129U7sjfvBy",
  "key16": "3wQEVsHzfw7VRd6PmkzGgH9Qro9FJJLhVM1ZPRmsL24JMpHGeVKDASQM7WuS47dsb9RL7RwSX8QLXjRSig4ccjVU",
  "key17": "bx26TD6VHQMZLK1rbn49e3wTy6aurBvHTKfAgNLqZPVkEJBVX3EZh1gHr5S7J3YJQEofSFgDf8BbeENHH8rwv3H",
  "key18": "3rKZpkqGsnA7atQsPg9sptSLyvwTFuY7qFoPzuG5mm7XvYJW8ALSAamLuBiEgixX6faJH3LTm3fi5oPuDzVwhtj3",
  "key19": "5hhQqbEC2v5X3XMdnnkSEQWibiniKWfMwPTUiUa3BbEiUGFXUdzue4DaNvCUbLXSuAmvL76yFM3Tv6eKEHsf9X2D",
  "key20": "ggaFSvr5WtCWNJckoDRcWXDvL8ij4Du1hPYBqNmGc9yHEbhVzLynT3HgdytXLJSpvb7EKQonyDQBYom2oTNE9RY",
  "key21": "5ZZUC3sMToUhUVzvSXqGwsrh6Fa1e4eyyZDjZaCqnnLKCrKSviBfakH3e4KbEQEERy3YE1aBN4azKrFrccbWS5ex",
  "key22": "4WtTk48ia9kXNBLS8uwBd8YZ6xMzQn8mdCKG9hg7YdNUegoGjtLxrVL37tMMeDVdxMwhzaDsLCJZwKqqraaWBYnJ",
  "key23": "yyEAu3M2tKnMnRyWsMtNN5PGSZH1ghtgWuPomzrcHw48aGEAwGGDb23trQRAxx6jsQcMkJBkr4BKofn1wQrJ8ti",
  "key24": "4uMBkzKGpLFyMR9uaBFdUD4YwXFXurbkZoVj39zVgfQK57KiPE3GebPFFrFXQbpvJrrEJNf7YvNQu9vuh7tCoHH8",
  "key25": "vUTKMkuNMS1uTyVGLF64nQsBirPJtQkQdfumAMYGexC1vTmp5i8mid2iM29JWPry3iKQJg4xwC54YU4KvNYGH5z",
  "key26": "3NTajw2bU47pv6yRj9R3BmMXuvav4owUXmgMLM7zVxA9AaydzDgmyfxs5NRBejAv5TuxfsDDugywCuwLdZy4SgUe",
  "key27": "5toWuDBfYeTRc9u6eZuqF8RkJ7wn9EmqkSk1Lfbr4z9eRS3a3NUg5NYCVM1neFUqaZ55GxwvmpKoiyqrj9KZSC5V",
  "key28": "3MC9B5JrQwhtaws1GJRKzYnx1ZZHiNmsPe5jyjn5XhLguG2BERAq9b1pPXMsdch7mgt9oaYChy4d4yXDaMu4mg5d",
  "key29": "a67MAwLKanWC8Yts2ixgCW5P6LZoP9YkNQ9C7ZaZPXHREZ9qyBNxvL8eEGvyL223bJaLHm5LMvaF9wm2AZ9S4Pa",
  "key30": "5sYZAsji5CyKHhJt8k9zVNLYLMQWz9KnSG8kNyrQEesLjtTCg9f2FberhqqMh6vjBEwMScFBVgHSprXm7w5Hn6Mk",
  "key31": "4ZYanxbtdZWxoxUVrmbyXFxgAGR9xMqd3QSsoTWhzmuvDTPC6LZiqQa8BSmTzxMXWCV75AfESfCiWWiqFPBiUe8e",
  "key32": "TA6vzSQV2tJLW7Mi8TGcBVGDR3pikhNitPcuEDYPeVzesa3Z8TqTuj9wC6XrLd5EP5EngCRhLfkSvYFZkf95WDq",
  "key33": "5P5JJTexUSy4xBRbs2zsqfv7vXy8XDXi5nvL8w1TPQCqaE8PbzRjaHB4T3S65ubzDtvuAjm5esZzBWNafn4cYU8P",
  "key34": "tLHa7RhsVCd1jmpJZ97vojquaTW6oqLTPq9or84STgwGqTAm7PH23RNAraxY1z45s9VWBpvchuv5M9Yq6hhdjX1",
  "key35": "5qyb5rLVh2hEbJm9K6yhjPMPg7fNQTkWcC7bDn2Y2sb3T1LBAcoeM8H9gYnNov6VNUfi6Ngy1qrS4aAcD5aD926m",
  "key36": "AKtxygxQihxThiw4oyHTHdnDa3YxAgRQRT4iVAazevGAn4hWS4j5qq3M4mkCCEssuFA8jM4v4f41bqh3DjtP4dM",
  "key37": "4EqXbVeTfFqwahUATw78V1a7YCKvB7uETQkTWLBShYbWFhndDMEsRQvUtR9vKUDAL1hDE1LcpqMQz5RM2wt1zsiz",
  "key38": "5KEYVkWn6zYcDHY3wYK1uEiULDg27eFBtZBVzeGjYLPZCXUKUHH2LW97YRP9GvNuM6rnuMWwihd2Yk2exqLhk9Ft",
  "key39": "3fuBKPSjd87YGBHDzW6e75MrBzMNRZiuZ4QKuHrVtXDjgcWxuFBPAGqW3cieZppAw1KK3guFrRBt3UbR5Rs5UPaY",
  "key40": "2YZsXUE1gdRxxdZRQYRzZWfwgAvTVnzaKVocTMVRwWnPTL4sqxeKWeHDVBF4NSrYE3SRxS6T7391XX5NyDNYLTCk",
  "key41": "44Q99GKChiSoHgCjo3b7sd6BSYxgCmG1CMZUx2AGRfngR8VhgbY9o431jkFkiRSuHRCEy5PmCS9e5vdRtyBpfeW",
  "key42": "2mmG7zZkeP9sv9R3ZRtcyD5g5XvpMNet5LM9FLng2RPRnC1uTgo3ha76BTSgoKDwnvGp3rPpunCo1rW96xuxtkZ9",
  "key43": "2EctCVmppEURkDukkh6Wqz7KoK43Qqn3HNYuLLp7NTfjKjX3gydGRd4JsYK19MVZ2WnZK1m7nRLbKedtTZTsgmb4",
  "key44": "4NR5aXc5MteGaP4gjABVoGmaXDeHjNkBcS2grTwuUidFRLRvVvXFt3hqfh4H6qZuFobpNDoktNEQg7QJ3ufZxA7n",
  "key45": "4EgKfZR4qSSdjrgA5XR6mNKRhBDx2gkKDNaPK3RvbYKdcXPqqXQUGymUvyQR89ULYzX8StLWyWParwVU9hsHhMkE",
  "key46": "5XGJisPfbrAb5jpgUvGekpmGCpsqSJMnUEitAShbrUbG1W374e8TGuBCo9NntRzUxTJhnqcfRnT4avYy3TWBTsTF",
  "key47": "5pJV3ckkVP9Kh5SKxiXP72BEwDuAaNhW3Zr1xxrhYSMtG8GM7iKECN4KzemRuRUazXJ2zvzPgSAUGbGEBUduDKXB"
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
