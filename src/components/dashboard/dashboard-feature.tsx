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
    "4T7C9ionu8BMQTELtQH7nG2eZxRCqwas3YJ2fTsUWZf8khTpwR8yGkwWPrB98MaYDxpe4VAm4QGsrK9nXkBnJkN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vdq7mmm6ok9rrcSSZ3BN4MWCgCQxCH6wjGJZRGCAwJ5bbmTWXEZ7FebufkGAwLKn9Z1pNJQy5KPDwdoCNboP7CR",
  "key1": "2JeiNteo9iTcY8oQCUh68DARYnfkEGMVcm7qVnoZRiVhHVuJuN9YMAcuLnJnBWN25mhNBjTzbz66XpHp2Xnq1DqM",
  "key2": "2CivSrp5iRbRFwBQgNuXCwSkX94gTTaTJiZdfomDsEPoKyE9QKDLpzPKnfp8G8UtyanrwmigsTyZxMH6Rz1FJ8PL",
  "key3": "3QEGBQCwPqDQePA2KQNDaprAwjU2udg1fzkC1XeqEozHPfrXK4C3cN5XY5HXrjLpQX7k5QdoUkuAgWNxTScfJBX",
  "key4": "58xqQuNCgy1UHB1cPAatKW3kRGBmxZasDbWzL7Z9fJKph89MPPRFzmqLhqWtu5GiYjrRqnTYA2ybxCLyF3ij2eVZ",
  "key5": "Htx4JaVogNN6ZJT5igyazCzxaDMijCcZCR3wgqcfDmEXFxKSLdsaVn6SLfsrPzh71j4V9B6xwpLh8SEaA86maws",
  "key6": "3myTthkinqRdSSSF2FA4PW3DeACVwauUeRcejpnNgNMKoABa4PiVddBn6SyEB5obwHepiLRcRr2e8bwRTMiiASVk",
  "key7": "CfZ66TKADr4rpu92n49mb9d5mK6HqE5oVRnhSCEDfS9ncfzuCp2pintiAWtbGNP3tTmDcDzeDW7iotrt2hxRFNC",
  "key8": "5w8EotRdpFt9dTLkSuenE23roMLci4Tt1AS39B5NQHo2kxGFwSPMviGUxSyRvCEhGZAn2ECnFTLL9uE7kzN2CWWJ",
  "key9": "2bJBQDHqhhiXD1mwdZU61dXPY2uGciVfx7hjNo3AijNwdePdf9KEpzZ4nksFw7GGGZUcsvxJoQdKZJ5FJzG97u7r",
  "key10": "3WzXZJGzFepjmSKs8b7iAQUjpnSad9kXA8CorSrvfvC6EsdsZZY4NpuuD7cKSwovnZAmJ1fd4UFt4exujDzNn7eM",
  "key11": "2ZFG7MzTFxKryzEVDJYuq1bx7cVJPCS5Z7WWfB1ubETkeiGWofPEffq7ZjHhXnWcBcWSGX71G4nuGPMjauj21nxi",
  "key12": "432e1ojVQTf9gVwwvdUJ5hjSSkWS8B1R1CVRu37aUvGxodECwEya1CXJg4dGxDiQKyayzemZfgWf4dFdNSkpg6wv",
  "key13": "3fuHsvQfuggivCc9MzJENZ1HzfN4wNnuic57PEv1ERQRGeQY9cqs7Yu8xmcsBa2L8AksYuqLM2NWfih3pTeKEpxo",
  "key14": "MWDS1ibU6fna4EdyuPn8HdnAvRBJmYZBhGZ87kr6ac9933WSK6JBzJdd3Qai1ynpRZwYnj6ASnx9qAdAcSaYH48",
  "key15": "4qtEygErMCmvBVoapp5c25qSNrj25RD94vdx8rQVutEqGZizPod26cutiUAojN6ovLhK2zHbiJuJV4dKKR9DWYTX",
  "key16": "2UJAY7FbT6usUZQ6UqjbvqFYyTpPyvbCwh6UyiWSLdcXyn7k6yh2SuGDugr87dm74Bu8qjDXusqKNvSfBf1cvgmt",
  "key17": "WMqFMVzzV79C5h9c9iZTxZALn1TJWjqfD5xbQ9hm5iivVwQr8QizNk9EWrCzvVvzmsjox2BchoLd9QFxXGoqL8p",
  "key18": "4CAUhdeABS5TRcNdJynenrh8kYpmQbwocs8CZiRM7perUHB3fri9SUSty5nBnbvfrm3uBdBz91uvdF3t6HZHLShc",
  "key19": "MVh9DKfQLbj5g6TqS8f1ZbrTe1NGaFgDTax75huezYoPJVSc8TQmPiCVmBFNEsasi2t6pTZp7xHwTFq8G4ua7zE",
  "key20": "67bXunPyAX9nXYYkb7Dukh36iEM4a5BXqsdjJZPs7VQvidtn9K393iEP3iNgAhyy2pKaFJNhqhqg4RtZKGbtqNrL",
  "key21": "2Mey7Yzggi6djrQYHdtouSEsKn9w117FDLDiitMyh57yqe5xzJnm9bJjjJjcn8KxFSgrFKQNeJDfXDKF8tuX4ZhD",
  "key22": "4GB1CWm2ubZno8WUEnpRiiaFUuzNiZyRjUy852kPAqQesRKaaeb1imWSL4DV3aoTh11cPAqkoiQ8KJHMWkJXjzwc",
  "key23": "2GZBNTaKyjr7q4c6o1tDSR2NPDf378uupNtSsfMkRJn8iBu5dMurT7yXpH4nhYk8d5rUz825eBitDMf2RDc4ktmB",
  "key24": "5bXaisJn7NgiTmyEYi1DKV5CfgCLoCpqaXci2iWo3XEM5UCVjsfnpp8nAA9LJezWBQ7529Zbt81r3aedTf4n113K",
  "key25": "5PqYB2HXwZMK7UM5KbtEBk3m47FurUNH6UjrXMBEMSXoF4RhbesYk4jpZWgfAwfynMUvYz4xbA1zswT79iwykU1r",
  "key26": "3UkTvwSFL2NP6e3xc45r6cLWBdDytzQW9qy8NvNRpUGHB5HvGjGuDDEahzTprUiywmK52F7fDr8BQydJeMCBGyeu",
  "key27": "58XGdQDtXwHXSu7Dp1KsFBQEpp5nJVwrpb42CbxYQDRQT5QVu9MaYGm3EPDhMejCmet5Hjkx8bd3C4zq9Byq1qV6",
  "key28": "3jPYKoc3DrsLpPt2gCa3hbPWYCnwopaiHfGEBhmYmoGFBFVXPSRbgyr22VPcmFyXRgsds6NhSqn9HAsjCLktZnub",
  "key29": "3QnnFbBR5KvoWj1xvKrrrPJFyiBCnFkrdFGZjWp3ppD6RgazNP3GBS7TFfGumcP3QCPBZQD7A2Dz7fzqisniL5nY",
  "key30": "2cmNRE12yDFF97Hopxc5buRU4vVjtQtpNqPWp83HgHHZScsE1SSKoFXnDUMshFZQ4bgk3FJwSG3ZsUA44Pj13LjS",
  "key31": "3E9zNeEXf2tQaLw13BedZjCB9F4GhgGokwBnnTVyXqrnZ382nPkRqwZyfEeuNswtWWoSx3tAyiy46EwD1UEW7dwC",
  "key32": "3ttR7ZGvadBuTVeCQZwYyTSmJ9ELUEePZDsJfQKV8zXeVeWvNpaLocpYpfTg554SeMnveMTycK3Bgeti8TkzrGVS",
  "key33": "4X6AuV1uUEZZ5YQVpLGjo67RxGhguPganzDA59LPpHQXJCf66cqX7Z5MgnQzYu4LF4yvs8h1LW4EKZkQ7BRuGsq2",
  "key34": "5KSsLY6PDrmwNqAF1Z7utJiuHAzDijEDZSjmvyPE6H1dhrQcV9bkHMew3ey3fZunCb5QjaEWX3qQ2XDzSzDLfDyr",
  "key35": "4pfTY3n814DC6dquetx6vnrAKgvyXYnanks5bHsCfcPN3y815rT4St7GcvaDdzSHRQzsVZ5daPtMM5G9YRu97Xew",
  "key36": "j8cCf4VoCZMTtnKq7TkUKn7aRg3eq6s1o7GVmgHNiQE6cpDE6knkBkeByvVJgLwhmqi9mohTtwv34WUPNZywAu1",
  "key37": "64ZuNr5r2nim2dXbN4LoNfsrMHyUPqNSCTJv2ZgznY2jsfgr5RRQbRhiFhyem3rFLkKwA194irGpZUcqmovVvnEZ",
  "key38": "4sDxe5p1FGkL6szvhvMLQwS1vxC4SvNxP5B28XUDGNQ59K85nfq13gJ673PKSvxMKXvZ9BtAQjdBnBXRUoCRA6jo"
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
