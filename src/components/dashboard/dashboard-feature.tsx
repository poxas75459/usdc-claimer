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
    "47BwsJ6G9ADJdbiEnJugZdGrxxiCMWUqEGDYfczwTRBg1dkJocM3b5SoVLkgizRKFRLhYvrYwGHgBXKHwe5SAprE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tEVEiFPYt3rkt5hhg42uxFNS3yucE1UXbYUPw9GZovfVDQcwSdNKCinDKHuTukRKDG826RhS2oUsG9Lw6wEyCzq",
  "key1": "66ZGECCNkfAZ2GgcmkTcSmxVcoUwnFTqwtVjM2sZtPDyh5Rc8b44HZddKy4jGBzM8dHCLpmPWt25JuUiZH9wanKP",
  "key2": "59rLGKANLcZnne1kp19sRAzLFAMBcFvUfLRpMxMNud6Qv3t4AWQ5ktnGYY6TqSjGJXi5pbsjJ6C862pju9UAieh8",
  "key3": "4ngDjZKwxmNmEg5MkzNzokhG9BrZMpz2YoyAV6mF5edSADSrrAXqQspnnYYayyvU2rLntwF78xSKKwA59ThnvFY6",
  "key4": "vjGgdikFW8CRiGVsZkHN5ysS4WJNKrZ1GRsGdCXYbB6QyH1G4m69FTCfd8Xn3wv6CSiP2AjmUQkB17scyE9Zh5L",
  "key5": "DwwBno93ius6oTCU96fmpathiVyrUERsphTWkNmEWDfVmP7ZUoSMb5F5bNdHn9Q2aCd9T5hEV8SatVaCGi5BnuM",
  "key6": "4BAvA7WNRFwYDU3ZL7tV6fCAhFSuUTf4JfkaaZ6EieD2HY1qqdgyL1dmNEB4LxF1kgYTe78CQpPkzVWw2eVbTNDi",
  "key7": "4fAUBY7V8d11iRvbfnQnnsRaoDEqYRKvZ3ZznihFXiqkmgU11oiSurPPB1Kz8ErvRGSUQjrGHrNUoD1raUCgzi1U",
  "key8": "4rzGyS9jme2ShHohCPnmwhmUvEwNF9vYTM37f4ES5pqdaQmrKhWR9bYoazVHMmpmL7zzCBxD5WXvzckhY28dnJEw",
  "key9": "2T34Pia7nMCQEVtDXRTGUZJxeFon4DMqBG6aXBz1LwBMuYnhAeqvomjmDX6S276FS9GncpsYc44gra7mFdFztvXV",
  "key10": "63twwkVq2anoHPLfCnvtCtfsTfCwdehgVAQ4145q4mx13sQukRUAaeec7TBajwPZJcQadYwzZy9xne4V1xEbYCzj",
  "key11": "277PicgTsMVAypo6TkdgkQfNaFe9i55wbpdsUKABp5y7jwpmYFA1FzdmZdfro5CcoPEMvyTJfX7aEQemkiLUUZNF",
  "key12": "2aAHpMPkZWHRnZZ1zFWrjGZX1r69LzCwnyTPrH8XpAbTvkkKyb5xYG6xsC4Xjz2E6ao8sdBhWSbAq87k1HWNf3sJ",
  "key13": "2dcT9FEcmkwhHBZp4fKPyLXpbfXz7vNnrneKMdHjHs69KKiFKhEr3iffCo8XYMdSQH2EMmVPGhwgFuu1oCMaij4d",
  "key14": "5hKoXTwAYtyy73r1TcwrSbjTcQ17cj2K29cX9yyGeaBTYky214Ydh3N6vYpqTkShEVDPR18kxpopUwXks2rnD9o4",
  "key15": "4THuiscLhxaToxVDNZWfC789aDSsZG7HAyVKPxByxVvp3agUCFfD3Ha6wfTZGSToFSbTsabwPd2zb5MVh5CBbfcD",
  "key16": "6zfn5hea35Fiur8DKUHHsb2k9zSqG9NoQVkXJu22pZow4joY1YsndWuKfbApYNoStzxmxT4hBy57BYVSFFxJr3D",
  "key17": "8PgvQyr1Wi8toG2iRw75QJzA1mvVxzvoqBFGD2xECiaMvw7dFaCF26CbG25m2U6Z79Pib81S3Pqn31v8XHYGnCp",
  "key18": "63y6R3JDbe7csS6vFbGu1xw14AeLeP3nStVLXqn6eRGe3uv2vJCNxupBxwwEx8nHB13yLWqPSnHqpnbQwUmgQ64d",
  "key19": "24nRhiPaHgGxeWTNxKVQfoTmtbvcCajZVfp4iqaAihR8Thzq1Z5LwvU2695YhtvDUP3v48DKf19ABve14S8K4fJr",
  "key20": "58e7BjWrwTgGGRQJrb7nVE6Eey5sPBcf5xxahS5fmgf2vs7cnPd6wFgnmkSuM4zvuuRSeBT4w21JpxZFnyUcEvDz",
  "key21": "5QKbEKmwiyoi8AVQm7bn4jHD6ZN2vvVVRRpX6141tyubjedc6ctse2QCAKeZEQWe3tSSdXcYvBJXTnYZ6WF1XEfz",
  "key22": "56fZb2D6gWZwgpciJ2Pe3oK6wnaipoCeVnn7x55sx9i4zwVAFYocBhJHSAxmNib3RTZPFFzh41yD2DMbRbinzjgz",
  "key23": "2BBdt3FT3VmYbf7tj6Q2BjKhMFRE1HboQVr6PcpWWN4Ymrs7yEZSz6JmkMta95TWJ6RhYjHEbYG75oHpq5MHCW8g",
  "key24": "E3fT9XEMNWDfFYHHx5DYQUfCrFbrpq283Bzn2Y5rcnF3c69dp7v6xyyFaUzy9XWvZHM8TwvC7uSSEAzAuHupYZ8",
  "key25": "3VEiqZiw45LBzBCwwqxuKfzaUxhEN9KUzDGiNdAyh1HWQcvxJ1ogPw9dUKY1hEZZ4oex7t9Zd7PYxzP3oTRDst47",
  "key26": "3gWWoq349X9s23NRpCR1uwh13d5dCjZHDrGt5znPB1pZyoiQZSxPDBTsNpFo4Gb1kmC4hUTVg3ziRaX7PuHzbxUU",
  "key27": "4tVRwEKMjtWnXGvKZXZfpYZbyUPUfSTRf9bcsZx3U73zznRMTWRnAT6gZUiecQtFP4H21Dr9C7fqsJaUmdcy2PJP",
  "key28": "5fVFdTmCKDsiXcydgTgkcxL56uKajx4DBh5qfTZgCqxuKHr7mFeCYXZXyRRENv4G4RrHWAx9Rjy3nSz38DVMLFuK",
  "key29": "T7AEiX4XAjYUAkBPWDqG8BMdPupLSwJPCpqBZq3FFGa6arySzkx9PfHyr4Vkfp54pJgxzsPa984HdhMDV9eeViH",
  "key30": "5rextvxawkRSzRim42VmKiohqFuhyrPA6RtbTTvVSGmEX4wAqv9zCZVNqHCGtnnCHJQ9ki6jhwL8PAANRNsqgEd3",
  "key31": "2VzrjUSb4sBrM52akQ4KbtS4XMtdf77H1fLA5m8V8rBAsa3J58jJuHLAcTVEs6Td5waDopRzNnf4Q4Su32ZRnVh6",
  "key32": "29d2LatFbZ8WLW1hSBCq3Ng67Df3CNZZoqACK6LSW63Y3qTPTZPAeBVGqpUdu7dbEx3x5Tx4XDK8Lk3jw8Jj6xuM",
  "key33": "kFvPniHyNbrC4KBRwvkp2jsqu1ioy88JM72uxzj9e4EvUXpLsAuiTnLLptmi6jhSpSz8GUvEfTqYodXWouAdBeX",
  "key34": "KRMLxpm3vwsMuLLMUHkAZ1LQZsc8as9jv5Ugg3z3kZy3JUS3xtbKjtQ5sTvWjg1f25VaqwYwNrH1KX9vLB66B5p",
  "key35": "kNP9hPzUauRvtNm5DNBmDS45TwuWdKMtugVsG9xhZV8ULCiXbk68WPg713TtRqP3jU9XjpdCw4FoS4Z1yX7FH21",
  "key36": "3PiPc8jEYQZkTGQcmJPUVfNapApy2wmYfN6zJMQq8xK6BNSVrdGi2md9bp7Tg6QbkJsNXWj5Jv6mKnExhsTZ5YuR",
  "key37": "3PWYZyoR3vMV26QwjEWHmedBLg2z7WkKzVuLEJw7zrWGdzdh3A81T4DiuNbvJS3x9MQ8EY8mfxAgr3Y5CEnoDLYH",
  "key38": "4hhpkurtSnSLpDAvZ5G1gf3KToTQSNtoHDZXLEHgUgJsZm2vQSdjw8cpQnEV1iKGASUdCigNuN2wBWdWmFxFJSir",
  "key39": "4RzRXB2d3mDbs2EsNw8hrJPWNpUzYzGgVczzfmfoKzsdabqiqehSKpWr4TvbnmEgE727WAqF9rZUjvEFsKpagvqE",
  "key40": "53i8gjR36cgqthRt6CiUrmdhsL6vAoTMk75NLMeH1MHPReCKtnC3yTv9aEGhuvYZUAcu7gm3LZdhPUhyshYvnchx",
  "key41": "h4jVSJXR9MKyeV2VFaeJa9DGi2PNY7vTUNmLCZwMhJ4g7wzJ5esXv69oKfuaRJ5h7CarGEuWoU7D6n9UnVQP5tU",
  "key42": "5K47WFFm29mtNPKt2dKCXVNQ4264ssQAdRxkhEKuPNtbbz7j2fj3HPoJQ6CSdbtJW3X98pcVQEctT8NdNhtqKg2P",
  "key43": "3v35Mm5Fyh3Zgtq28ffz1pQHX4ZAVS1oM2x645hWBPsaS964HQhHoixPSmCqmf3KU8qLNyNnzHnGXvWGqE7Rw3HK",
  "key44": "4B1c5CQddJiHyCJEweMW9wfEqdQAG7cd7AtcF7JwbRTsjVWFFZwM8toxfyzFtWWRQR97isvchsk4XAh21yNEHNfv",
  "key45": "2PkDqDtmbUU8SwCDoeizXNMmNU47efE93xv4zY3kTCiAJtMpf6sciSreFgsJXCDj2rU1QaoanwtALLQqR5zdFcpt",
  "key46": "2AAbvDn67AYDXEHWHZkCL4jTXGghTRPShFoshjqLGBm7PxXAXYQvRj8AVa5wRSk5Y9NDEutq9dCUY7dFLX9zcy9D",
  "key47": "5kjoYKKGcqLG29gzuR6KawundRSdx4JCgpRpabMADKDgDHziW2awhDvKEsEDCDPT2pybgFnidkpvZLt2NJLf37JQ"
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
