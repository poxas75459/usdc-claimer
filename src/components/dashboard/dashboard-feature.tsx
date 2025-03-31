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
    "Tmg27fDs7nbyhATA4njuwPSnwYuNZYiQvKTSKBP2AFGkC3bb9dnwSXK66VP67jneAbTB35q9RUdoP77HbQLEHau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yE5xyXDbzyaNnhbhaRhuNYEUNWn3ownFFZS4tDx3WuZRj2Vs2gdNSGqipXQ9cDeRZMFVozPL3Kbecggwu7Mutpg",
  "key1": "3DPwjA1RWCERRKSeKoYMpjHVo8B3CSLgpMBs2r2ybbpmqyL3pBehNeV9kibjWJq4VJLpxZyEFy24dSfTYqDb8mu9",
  "key2": "4b9jRTNqSrsJDZGkSHX5qYX7MXH3HvhU597EcFmvS9Qgs1ekwSBueXRydREuYKiayEDUQNU3xK42YfkSjRQvL5ih",
  "key3": "25aU6RsGXCLSEhXaeyLhVRQbttXTVEUegoKxbFKTgxu9BLPckPcKqT9MeqtspKj8KtrGVsDSTv118gktCYuvwiDk",
  "key4": "5QmeEcnMB7sdLpY85fsiUdZYZJbSQmmha78TjAMpN3SAYxzrPv69dTJrygGd325FmeiTvdbcACyHCSRXbPEH1Tgc",
  "key5": "38zrkGDsyj8iYGRuCEW7Y8Eg67CqK9mVnNseXrfcW4WbSt7e4nJ3n75PpmQZneoAMYdWTww7XmSShyNooV8rysc6",
  "key6": "2PujgatcqPoxcUqp7EndNqzP7jNYscZPaVFETabw7bsekwEaTrr6b7TQ93vKyhYiufBaGhx4hzy8ukr43J2LRJ3Y",
  "key7": "4bTkKXW45W4XczwoMkYUjNFQZHNDbgDxnmGTcPh9oXZb9vypMr9kJw8Hh4TxgZvaxaCF9n4BSyviAnef7fqsXuZ2",
  "key8": "3JGhYHxGjqXeTM6B8tETrvW6iDHJTv6SBMppofwmb7FCBKYPPQyYYZyjk6P7aWurEZdhFFKkkNTMqEZRdkbU1j1b",
  "key9": "5ujYJY1NzTH7q8yXH7kaoYcVyfuwytDh1zqpAshnvb15cA3U6f2q1EPkyRvpkyJygbLccGnoSUBTkygdVCsiGXZM",
  "key10": "3khXpzVAo5Cp6GdwvgHJu3JkDm1zfF1nTqSMxBurXWLhAVw8iWodk8nT6LVz9oCakGAvtuQbnYkmwjJUhvg8iTJo",
  "key11": "31UMr8cH6v2MdXjzE9NKtCb7zLrr6Cq9FT8UJcaLEXUuXSKrnatjvWHaRDWypZ7T6y7dmFCs7HFdRVA7njFfou1w",
  "key12": "41rbFqBAhh14DDfbaKbtJQmmQW43bCco7KxvbRZZ4EP159gRUyjQVVfeZmEZzdPkgRFaYpYR6t6fjhu4ostX7NA9",
  "key13": "3hr8fHnYwZJ9LRrnboqtRuaifgUbv6V1kMisDVFXHvuxYcciGikUnggP3uCaJbQVcw8qmLFMHy14wDQf6QzTvN3X",
  "key14": "DtiNQjCmBYb9FnAtB9Jt51SjHzdSLB59JSqHgPSeKi3H85Ge2Zxdd6NQkYSQHuNbpzDau2ZEB4uy4s148T1bcAX",
  "key15": "2LYrcpjAedgjYBTsYfjWQx5aSwtbjmopRbEkecJx3xqMWT6zymHcSpXFCvqTWju6hvqkcM9pSvVjQkmvqB7DUE9Z",
  "key16": "TGR7iGMXtPYuUGgE8ukxAJJhuiXGB1kewgJXAjX4KoM7yayon3oq4qVn3KjgHaV4dpDPphgi7xQMPbUfSSMVpgw",
  "key17": "2ZN1gS8bn8E5KsvpPnN7uEdNdWqYviQL6BnFz1QGfRwJnKpcibbjk9arXz4deTQLPqF3JkcZrKFaHCf1uarxET1S",
  "key18": "6jypCCbaXEuNrdRoiKeHLzKSbjzVBLwJx4oga3VZNJmnNzCEszoYs4nxGL9ZSUUCnGbMfkahEYYEErwzU9Ntm97",
  "key19": "5kEnp9XnDjuJsy3utCaiSBEnJamivCt88YmNeV6VDezJ898AyoxJbwgU8HGXhGcRtHdh48WHFgfNbPGc9A5oymEi",
  "key20": "5bbGG2VLp35zaAWjpdQESnKYJKrYJxB95Hwt4HzB1tQQreCKyE5Qf44fL64mNND5e458rTdo4GLGWGRyhQcGTKzw",
  "key21": "4Ni12w3iFPMnuR8Mj2QenBxR6rxQPXxRFFywdX9X8pW6shHkUQVtaAkTi7f2mKiA3zybcCNR1AHbiauLYYQLPSvG",
  "key22": "RqvjzjiSVgsbUeLdbNGLXsW7ycUCr9u4VG7TkNyC391LhJ47vQuG1Z79Rcos1uomQzVZ23pSfaeynbEybQaxyp4",
  "key23": "3YqJKx4i4UsxVhj4e1w17srJpkg6LYyZfbhv4TnHiTrRpiYQ8hiXKpdJt4aaBjZYvCmcXh6AzWkTMTZWzUn6EJCo",
  "key24": "3CcYEXBJ2Y4t5GDKFytAGd5NafSZpcoU3gRUGg5dKoTmniAm692mdGxyrWGYC5fo1Wdouw7j2bneBcPyfCJwe4QW",
  "key25": "2bErH6e3RfUeTSmEVJRn5WVUdn8LDP3ubjqw7N1v5euX6g8wjX8SDQiimwbDfh6YCo6ZxBsU2yKuVpSnmwEKuEax",
  "key26": "3NiwZKC1z5SkudEVukf7tZGsbty6Ppswey6stV8GcxTCaFtoXv6TgbSyJznDdj4R3zEGu38T2E2Z994kzxr85vqd",
  "key27": "3vdoFGeqPyHSNfAU5NBqtnHxp8VH3SVuvF48iuQwCWNH5cuSDy2qYcd2AbeVYriHXM8ENAroa5JnfEsfJkg65pzy",
  "key28": "wpLFFMDH8eRfaco971QLeBaQaYMzoy1DWNwVmtT75Eobm2JsUtRqp9jY38bVpSF9p6E7S3Mx6vNCwdCE3TfGTn1",
  "key29": "45ocN3m6kWQP1DjVoo2ZKQvvLGjFrCwzVz7752FzX7jesNSsXXTCC26Wg8aoAmRYgweSinWBV9n3XoKXzWrGSYjf",
  "key30": "3CNarQaCSUj53CNxArru9FSk5HtzinVhUK8Fv81x77AgZ8ykG45eQM1Hyn5gXD9osa81CpdEvcV5pUjHgJSC516Y",
  "key31": "4RvzC4aCixQXueQBza61wCszMicGwaj2xj1q8wu39j4XujYuMiZUktiZQEg2KTBGS59CP113SotqZ6fyp24xTBw6",
  "key32": "4TnUxDMxyyMtRJ91AoVAdSM2TBwYPvEYGQEKMNoS1C9gNDth3ELoR9aKZAq3cYdmMmUCuZnh8idhJmb9NphuPHga",
  "key33": "5Ws9keTBp9nriMvAaHFkkmnsX5siMJczQzPhfRBV57i13zZEcChtYubMB41js9hY7fT37B6igVUeuvgCRb1AQuFg",
  "key34": "45Z381wxeHHcYhuZid4pFYnWhbuJwbqwEBPVSedsSBaLcmYbZmQzhFTGpfm3U3a6tdwciRdm9Lw88kERyqdB2XBY"
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
