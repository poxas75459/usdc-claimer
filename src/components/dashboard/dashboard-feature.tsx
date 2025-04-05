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
    "4EgkdUk5E6SDvrkx2nRg3cvpgDc1oXVLjZtbwuys94GjWfnFhtvKnrdMqZsFG8h2jKZJrvxyxLAwmy1bAjarg5o7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmxCMTZnhxJ4Qjac6v8fz8nYXwA68QUFH6xMs6Vv7kQRTZhDdpDs1ZdmM2hJFZnhXo8SUFWk4EQWARyxcC8tVrf",
  "key1": "3Eb6XzFMdQvjSSnDqe5J6ejd3UDXmhNRELXgw4BBu7Vjy9rRKLWgf6CDgDeyrUaufGrSMoLZHUQDcjiM4WDiYwjx",
  "key2": "3tB4YJS92Gi9nxMwFnfhKgChBMcbWZRfEEzyTyMyLLCXgtFemygnb7gGhQcoAibkppkV8zzKgjfxuZAh9N1phvvS",
  "key3": "5smBSkGCKh5wADoBbjofL9LtQ7gxrcM8pCBQeFp5Q3adZu7Rbnm7crn1i67AahBfMmtjyDYyCzM5J7vXJLpHTUFk",
  "key4": "29saBf79UQu7L2KCx2dmGMjU8yEE1zFe9Uzs1j8Ky8Nn1uXnRCuqZjuhGR2gDdMzMC6YTG3Eb6749mEf9hdd6EPp",
  "key5": "676H6ptSwvSBb4QqTkW5m6RMxszyAGuJM25rC1vsP3nyUyX2qiq4nsLzimUD5zPmp59UzBYnsgp35gtgRoHgGyyg",
  "key6": "3y2FtB35e9y86k9pc23ZqbyvMQpLScmNXrxqv9Gq1SXVkgGSpG6sxte7ysKqSksEYXt3tVy9vpt9hgAdZ9vV7Xg6",
  "key7": "2sB93rV7WBqXKjxydXdppJySna7Es3VFXF1WMEfHv3fZ1CaPs5fzbVgrj2YzAM1eQnDucQZx2CN19Ts9r4uoNLGd",
  "key8": "5fcoYrJnApfin8oJ7urEUSUa42GBM1yVwFuK4Jt4ei3XFn1GiK8tdAxYsezR6WEryVcMiykykMxwToqv3nPLG7Ro",
  "key9": "3msqaPaZtUFWQh8saeTocmdzUF9hRm1awh6Rf4sYeVtggc4gP26VXq2Fr1cDZyAGX1LLZHugWiW5Mu6hYRo9E8Qy",
  "key10": "4yBkx1xXnrrBpnFmENxJqjM5gn84dewKUjpYnrp2D2GZtuPGFYte5XYaH5Ny2jdnDNrTTh8X42P1eckvym9De8pD",
  "key11": "3HNJjDqcxra9oc6XEAk9DQxenXp4PHgJiUAeptjRgzevjo1sujY7Zbig1Qnzhom3o52fsrsjmueWPEXV2LmtcV9b",
  "key12": "47cWBSVY9yCaKDJWWnykU4tnneb7k68dpE7YPfjWZuDA41dUopKfyXSNyvEWfaehmzVfUMKHtKwzEmGyRSh36BvC",
  "key13": "UKxRdAnegKi71Vvtc9TUKHMaq3uNA5gbjD2kKuHPfbjANELyrRPBYFrao6Cdeb7rDPvdKdgxpDF6MQQLerXXZqS",
  "key14": "5Ffr5exmpSjWx1isgfXYQXcLbsDmei6RWG4REtVdrxaBfvXS56XXHiuny8DKVmv1T7UhUEXaDNfpzsmvVWoxnaGA",
  "key15": "hFLThn2PSjxNNyZNjVPMkncQu2f7sGTMAASw2qhUqSRFfwAmPxn1tSWdY43J8B85hqoDGFDiuAJC1d7SvNT3Th2",
  "key16": "3v7ZKbMjDaUnS4EJ2SyBDp9boMPfT5jyZQSJdJZ2aqfgc5coLDWwJ6xK6H24heuL8QpukV7d6WoLf9hE1GQM5Qxe",
  "key17": "45mDEdiS4bbiCCY6LqmazzX3coH5pPg3G6tyczxjVCF3Y78n4p2jmfx21RafRMqSZ3Ym4aLTwEfET8sENQgfQidd",
  "key18": "4fAqsMZiwCe1UFF5io8Hptv7Z8BF5kt72CUPMxcZsG22a1dJaSSQWsQkv6vditZsAL2fi63Rw5sFhezS7USmtnMr",
  "key19": "4JTbGVrvqHA3Ssz6p7J5RvsFHq7oYMJLDyXQwSPTqmuDb2fiiJ1JzpTUPPWrRcmnsRPjGD9hkRjv71CJAKK9AjQ6",
  "key20": "pEPii4WZ7JVmWH1WtXetZz27YtGTLiXK3i5wYdmjLPCbVvfB43air2spi63P2tuRLDqCnTP2j6EpnWNXf4akFJT",
  "key21": "3hfWZghR7PuzSKK2NVEPCpyLACgedVesKtRJ6Te1L9bPaS9M4hmCb25YLei5qK2vZKNJLkHMhHb8fhyA3FjXmt1x",
  "key22": "4wGqhLMgntxYPTyaLma3LcRob8uLAohmuPUTBkPUebVhPXTEZEzXEf4haw65hhnjizgGsrBM5EoqeKYe9QhQoVqX",
  "key23": "3JkxGrjVuap8Mfowwe9guDVNmaKPRPaGfqsUyWPEWhCb2iMqmcS29FMaJk3iu79Mrwhau4pvx8gDRdFQVcuv4W8B",
  "key24": "27J9n1xeV8z3y9jusznfVjCcvu4UhKU6ZfKEihEtQ7SYByd72CmheaRgkrKJWEijaWPKkRrTFyQrxzNQL5xL65JS",
  "key25": "4W1RFjmGrZL1rCE8igYhKmpVeWgMxeV3ZjWReQtpc7WyRRfkmJhgwesgM5p9mrCA6nQju87ZwA97Z7SXounkLkp1",
  "key26": "3YB6HtAYNgaHZfNQSiKo6bsquFVpfZVX8KGLned24krHDcAJ72zERAMDQdYCn1AH9XhxavtW5rdBPo7H149GeMCx",
  "key27": "5CyFAaB17TYxM8EDpaZpptBmEpskyJJjy7uyrpceCkGHDkBYba2uj5ZksBcVxJffUBx5q7rfZnWzBT8ZUapoUW1s",
  "key28": "2u3MqRKEgyfmMSrskDrnTfUr8PKepYxv2xm5RW2GvwjxCWvU2fPvUPVrLZc53KBhXDQoKmfnrWRB8w6akyQB9SES",
  "key29": "4gu23d12EtMktFSv3V6QJEJjvhgt26vo5yhyVdB34Y2VVc2J6xCFUrdkztmcDTdvtfigKNXFZrd5b8iCy6ngi6X1",
  "key30": "38UKWjywPyjnxkYo4NuCZ2jTCvufHkugonUVKMdSRqigaUXnmpaB3YNUs1ecn8Hi54NS8dApKr8URoEwo7hevyTb",
  "key31": "3pmzLRWUV9SSxfvWhJh6die7Z56vVkwCXX8PPqnh9gKUFcmBn5617t91cran7RHiz8bbW576jEj92AGu1iNWh3Lv",
  "key32": "561bbeCgnfM9XdDkUWUKFk8cAoELxDEeJG3pkzrNLaCcL3GNE58EwzkbfaAL21T3W8LMtFrKmg7pffDLnAQpbm2F",
  "key33": "3ntBHsA6exBwzshZzLDoTP5GVCbKsHMg2Z733LpmZCJ7C3wkRap2y9jRtZphYQRPe5TvFSZqsR26Gv6DxcVB6JVT",
  "key34": "625oHZGv1EhZRnBYMCfzXjMiUVpfkoLewxaDcUv4WAKqg48nDGt3ryWWA7DMFr2EAGr1gXmWGgqPYfRT4i9m6jmp",
  "key35": "5xpRjYwQcYfeQfHRsMa1b2RZuPQGCDBkLnDR4UH3jviHXCUTsd3CXHeJp8oWcKBF6icQtiiajp9s7rVULdoxL6Hv",
  "key36": "5N1KepvSP2MyN4UCfaizr9tW1npwEdSKZ8c78fF4v861BWzh9osLMU92frnCx2hEgBRBSZfAB6gf2amcaRPy2sfo",
  "key37": "SqvtLt5Ff4YMVpMS61QcpEpchL4yeDqh1MLV2EcTwrJPFmdfs47R9arKBejbdDuL8ksJbW6vM1jAaS34tcStCVn",
  "key38": "5Y4JF1F8222e1sPSqQ8MJzCTHq9B5yjkKwHQNxNspJjsAxbDAYTpJt5EesDY7hdYP8pkVAQFFa5NgtBmyVQBpWUQ",
  "key39": "53izU7trJ9gM5638vWBr4vimezKHJDbeNNXB5qpsUhQZkMxnNYht5HExHRBjQGmX91HdyhW2CL4BZxtS8aVLJDcJ",
  "key40": "46Fakid27thzcDGgHDCpKDraefNLqg6EyXWrRAo8LzAZzfeggVFt48taUbnUeBoqSvq4uG5JYd276FN1tvBG1Qm2",
  "key41": "4oFpmJSywhLRzCbgUACav3ZdkBWqsTsMBWEH2TfETRNo9rg5ztm1NdxH28oyhwWXYSBTDKwzwFVPjJdDbRUTgZ4F",
  "key42": "4Fmv72aUDXXKbQMXtJ2UndE1FUe25V8riMWo7kmvxvmKjSxndLeo8YtkbQ8YiaTGd6BuBxqmi4Hvn4YhXgDF5Q3m",
  "key43": "4JJHGSd11X4kLSRTEa5Zv6swAqPXaBzB76Vq25fXGKhgLsf4yhCWBi31DBrfjAJWcmt7D7kruoNHAYeP7fBYAgjW",
  "key44": "2CNfEmDAsP5fBBu2ZMpDR1y1B8StQHdJ4LFJK4i2wZT3Mfb1BXNuB4keaivmq6sakXu7J3VMFi3w4S7unzSz7Ph2",
  "key45": "2pCFsgos99VeuK2gVEiiE2r3SRzE9v6NELHvAZR4Rftnk4g1wscMPojcRP6jGkooXSG4NMyWmbXbt3QY3HzSncYd",
  "key46": "29Z7NBasxbUbT34sbK8RofvWt34XYNpC1uond32B9YmaktRnL5RZsTccdsMN14XeStNG72SovsbRiVJ8ii6VMS91",
  "key47": "4LboRa21Ff4wviS3P3WWFwizSq998ZscvusABVvSUxEcoL7RkbcKAXR45wKaYD3tKS9A3CpZwPgAYNANzSk7FphN",
  "key48": "28U5k9tKDdavaubNwRV2QYMdGH4aUnPJRhFBF2S9JDVB2TnBCGG6Ap3P41i2NroGs18F4WjxoFFCPciFqnxkuB8y"
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
