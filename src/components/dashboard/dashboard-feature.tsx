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
    "TrURSvQz1ysxBA3VBBK8whfXLU2MJeVWxEZhtT1ZagGaYKHDD1x7qXV5FwicCu6Ev3HWyafxLBDU8B4zExYNb8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QwcPTCJSPY2LDoXCSsKrhKZSwpW8Bcau7K3aGjf89XbnQh1c3cPUsCbTqC1ufU3T9XdQLjqoCKHihJNPLCAmkEv",
  "key1": "5gYX7Mghg8scEkYd62pq9wpDggTzJknP7K8gS6RbXq4XVGfC1zwrWREyusy5oCV18VrAiW9CCbtsBTLMMfD8qzCF",
  "key2": "48v7MgNYF8E4gPBcxj99B4rhuPrbSV17XVH8Y9J4cLggwsThBEYPNcfnabJPY8BVhzLVPzUPwGoBCrwi84AWH25F",
  "key3": "2juBGM9cthridgHEo9JkMHVFhAseVzbwW5vwmHC8GN9UzfyLskgty7L16Xod1A5ccnvB6eDx1pU9MicCRGGFK5ee",
  "key4": "BQYKFuvYwF42BNEyGnLHHtnSCYFRTYhc3VioqnTFJvB9dEB2KF45s9c8kXBBH6hy5KT3gLcRQepHpYqZ1SYAdm2",
  "key5": "i9qz5JdQ8jheE1uydHpbhfg9uWHgk2ZWyaC3FYA7q5r8F77rFM9CYCnWJf3kuGx1Jz54JdEFT2KiRFDbPyUXNg4",
  "key6": "3kNSud6BjZm6uwvV3t48epfQP1iipzUP7xNrNp18TZi4rH8ARkyfrVveMnx3DZpyg2vSzurBLKmCht5gyPpWATov",
  "key7": "X2YtrUGgENCTvLLNKehgRgqL817BVSLkGCqJ8KBjAZ87MqQd2ptsEZwYuqyi69q2AxS8H7b7mJVcRiVHaoWtDj1",
  "key8": "4V5BDSSLsvkrqrXRBAmX9raYuDs55TMBLCEARAg25uNoiAStKAH5TKXcFjya18oPsJiQ5TtbdxF92NifZYJrtFTB",
  "key9": "2UL2CyUH8edfJCHHwg9os9FMExFptZRN866ZLNYybB4RMedDbjoXuqXMCXdYXGTAxNnoArHNjXg3L6YbwuPYoSMe",
  "key10": "45LCY3zrszyxjwk5mvKor5648NQaYQN1FY7hjdH72zKBHNnoZWaW9KKmRmEJhXicytF5p5QmEmy19HBD4EwJJbNC",
  "key11": "3vcehapc1PRNrRUVSaGngbywH2U4PK2cDsj7WDXEXcoT1ihmgx3uNwRgzWmkmss7X1YvDoiQiaJB3VxmJqcT3dEm",
  "key12": "3ceuqNphMcr1WHd4PW5wSXnsNdn1vmp2DEBYuSagDYeb35f6DURW3BGWGs4VCH9J4o7sdry4JQGPJ6nLGrhQ1YGU",
  "key13": "JgDSkKyQyv5qtrW3bxgrJAh29HKwReVaUpTqhiykt4kBwcJsQMu9CEm7QGMskVsiQxNbLW2o2e9Qev2DADBiBaD",
  "key14": "aFg2yqjqxjzdmw9X8dGPtnmKoq88v2MFAEuFvj4raTxuiootnsAvwhgxAUzGzLn432mrDeseiR1esGCFHGVTTJz",
  "key15": "SboHJJnnMgtxeWuxLbZUE5gXyo7p3egTN4sktgjjVVseMPJBjW6njSLippUs5z2FnAapSeP8yn4VMPe9Wv2tEDL",
  "key16": "4PZVxTgXjeKp4hyEG6puQgTdTqWe3L8M4kqq79wFojspUeChHXGcpvDm3RMaH13dUqddWrwiHJunyEjSqfvEUQRz",
  "key17": "QkNepnvQUHZLohhx14da5UHezTQEBXrYAjGRNkiCz4pUb7T2LQ3Sw5G7H8KjQKm9V8qVUChtWer4TReZwdocCZY",
  "key18": "2gdo2ADiLUoA25Hb4Tk5oz1G686cozAF9JRiia1DVc5Zs6zLmmWA2bJMbPPmtkQqLkRp5mBDyMuDgdu38eQmHZgW",
  "key19": "5188vN1Uj7XcVSGWvYx5FzkwADjsxfNGxDxbGZPWjERhA2ctX5h3wQDLxHwTfLyq2NZSWBhjBNKok4W8a5xMHn3u",
  "key20": "2AHuhEQwnayKuzpzq5597zQudjTHp7kEMdCBXSMf62zVYexnJoQRo2cmjsf9RCc5ucAdgxuEnFb6zLziJq2vT4Tc",
  "key21": "5bcaB4tppbNZFmAe7LqNyKYcm8ehjztQM614ob6UhU4BuwMLMKufZLAvshGH7vk9GJHgWKizMmPgkF66iheH4fjM",
  "key22": "3EMfJ4bhXRMFdB5JXaxLZVceKQU3XFWoH41kkuZhXAv9vFEgG2B4BvaFAbX9t1y1aHbQTvytvsaqPySR6811eNvJ",
  "key23": "rn9FJexioQKVPE3R7fto9qYPxs8JiZkVfBaffM9KEvu3imenNBg9WVgYDUs2p81yE1CftCi5jxVxKVwpBzGCjqw",
  "key24": "2YK2oKsWkpdSpQ4zn8EGWgxWWE1y3a2Y3Tsphqj6vFjhYALP9mYXe6DmHucuQkr9Qysr2W7nBoxZ6imM8PELCeAi",
  "key25": "4mKRUHhWYkBCE4bibaQxAsSAoK3X4REaMfu8HJTiNRbiGVBiEiWmRrTrynYWaDsVBRvsqeuvrFVA5CAGXEtaL6fy",
  "key26": "5UWuo6uBpxKs8E88CeNWWNJTF2PQ9R6msCrkQUTx7EncnK6667BWSifa4J9PDguTpWsiPUznd7GtGAdMS3e3oErQ",
  "key27": "3URZBUzVh7jWi4sCXMiTxGDxUmJmGDyVrt23qFjuENMv4n9rvm1aVs23TKADEjDCANsAGY1nT3hpd74daNgaMdCG",
  "key28": "2RvbLV5WDydWMi9tqbDYJUoJWvz9UoRFTFYVHD56b9QbUBLhAceFLUiMX14qaXqL6WTnwugiBGjHfZuahHXGsRmf",
  "key29": "55N7vp9AtUZtcPKUCyeZr6ZFze5fvu4dxLSjfRvXNp3sJtSrjxPpy3nmkkWfiz2KipxZXYmDBxZtLL6UCcHcKgCi",
  "key30": "5y1J4A3H6H9rCWh4bXFA4wMTCDE4qvWhcKYf59CTkDCpzvWeoG6hdD9DTy8JrcjXTh99dfAWwxzutwqMxiLjkDBc",
  "key31": "tbCjYCMvCYqX5ME4QHEznX6GicV48o2NwEybULywgNrpFaZsvYoSpBRRKjewAGUVbEAHSWqUEsaB7HZUQRSswZu",
  "key32": "tUnipKMTySyuXhRT4udtvB7vM1oGPbtbsTRPBFvt8ME4sg2xKs9yzBSchbRXJEvRXvc57nnvJgr47jxJrbGSSJg",
  "key33": "4yLc2piJxcG4W2KLWTEQURDUXY9AvJWqtEteFPoaEG87xjYLZDwg2PY5kQNTtnKxqFgFJiUp7ETwnzXVm5kGqREd",
  "key34": "5EEPcWdF7WamQZYSDhCQ3CwZsh9qMp3cwVgVT3PLYfChZ5pvunWZZAiz7vL7YSosuBEC9GaybLgDG3jT6RLYdTpu",
  "key35": "5ecsNmQxw1CWsmhj15dogiyW4Dq7caBD32JoiW1BMUD9yD6ncRWr851Q3w972Dt1KfVq2toMh3X4Q1KLgXn3xS1y",
  "key36": "2xHe6tqxWAC9YLzyRoUBLJcakrwMq3ouR3P8ULdGRVS6DUMpEkoQxk5N2sii5zg9HzMAWSXxxjpjNKnHZwDjmAiz",
  "key37": "26KPNDZnPTwjzGjpFRizV7XvcYyobZ3ncjnGY4eLUyzQ23UKtWQLhS1SMADEiKvm2jXhZVeS2fXVnKTBYugQz5AF"
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
