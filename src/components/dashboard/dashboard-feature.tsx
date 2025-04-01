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
    "4rotvHWKwEGjL4BzcXQbRGpowNFa78GJ1iwhRC2USdGjDd61AuFDprPahyAmRL2CArJ443bYgs7dDZ1f3WLQS2Fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mofSKoCoVRWmTHY1TBr1bdKssLPDcRdGTC2wCC4z5bkpLBAJ26nxRruxw2LqCJGMyUdXu9h3BVxJi9KpGYqCRsj",
  "key1": "5DtEnicBCn19CMypxTJ7J2CNNykhyFY2h2ii84tMLRLWP9GRdoS32src3V9PTZbG9k6jGdZPKVq9kwSCSxoXYuak",
  "key2": "pgu8KSb7BsFGvqDy1QUDkgKF6MgTHvkGhMZpmmRhKBbDds49q26jL4uxNLZUhp3LbDd3x24sEj9qoamWR8JCXiU",
  "key3": "4ew6xAT2RbWWYCDq63nnS2fRA2JcoeKASdznU87w26baEpvA541BxuGDXzMhJ9e5jafFcBJiSskBcnpmCmFs4syP",
  "key4": "4E9bbvSiFv8v6nEVcgkytSe2pUrGEacB5pAHBigKf2F3P8MK1GMkF6BvqS1QNNaQwqmnjK82ibTLwS3N3JEA1Shi",
  "key5": "5taGMfVVaJHQJfVFheEP2zmPwmu9nq8YG7NZkx57mVLcHszAibeQkiXriMxEdXiiGJPpnKtK28mZWxqb7jdgyYch",
  "key6": "3DWB6DUxZkFA4VGKWn1b7gbw1R5Vzax8H7hVSdjZqq1kHg3twTyAfv7PH4Sk8LTMXkcYyQdCt8mgcWCE2D2u3Uwp",
  "key7": "2XM3QrwoqiZ68Qcs8KzZD8q4jVMnNRR3Sn3rnuUBhhA7M5wzyvq1o136ich5ksEAAzSC3BSFx5mJeZHgJGkv45Mi",
  "key8": "dEaKUaCjg6C3TpKL9ztPVgvFN94Nz82N11EDdudXNo1uKyv4pf29prC9RmksV5orSkGLWPJWyiWY26fn8mxZnhe",
  "key9": "ZS9zaJYBTsTpxmiuFsBGoYKHPfyv9NbMsp6XrRj7yHYbDjFmRTp1zD88cbuSKZs2UK2VCKfiDARWVavcfXJDDK4",
  "key10": "QocLR5TnSsnQykvFaPVDjr9s77uEVbMLgx6wgJ2N5snbzZynvNPmSkRbZPkDjF7J2cwc2kqTSQfL6wLnT2Aixo6",
  "key11": "JJcpQziPmCpwo2bnCJvY9tHPVJu8XhAtn2PRXTpNTJfbGWmqwx8rNxkHdofUnDgZHY47r3kYdthcu7wMhHNXWoi",
  "key12": "22dDJLAjKWWhuqmNuw6q88T2NWKsBUUyfJLwZSMGv861KBQmbAwARD9za7YcBwATACopec4uPn8pPGVTFD2w4idq",
  "key13": "31Dyd75TPUfUnYAs8fT7P6nNYaRFX5NuGnNssiKtjLpMXc1x86n4C3UAWKFLpyEUZJrHK2XcQ9mkt9Vc2tEcCNfZ",
  "key14": "2CiG1n8EyN3cZSJ2WPWxppP2EkkA98Xm81saVGB8V4EWPRhukgi5Vhus4KCdtggneg1JyLmdiN9BAuedR4iAR7Nh",
  "key15": "2TT1iHezz1QM5uNgSH4ugGwmoFpSev1WeevMuDSP4cy28EVeQ87p7V29SGGoMdVJ5cgxZb2zMdREbKzKFzRpbuaS",
  "key16": "3ZuQDsDZ8GZXSJdCsEQ9gb2Cv7WpXYYeMYB9iYrr73Gt1EM86UkwhGYF3bJikcpfCPNzSK2gqDcgUHmaqMjPaQms",
  "key17": "4FQxdqfcK1zjJop6jz9kAX73jtcc4r6cCe3GJayf7LabzZX4MtdNeefNfr4r3HFBk4T6J5XxZFSgZzX62JugbNPs",
  "key18": "2fZWxYuxeeMMqVzzqPwXfEfZrFvWr3XUR8Mbm8jdbQhjSS9ANbCsVPP5CQX31Pzatjx6xedCALj3EdF32ZfzQcef",
  "key19": "21LzwdAttAi6DHpQapExFDFeJ3gTjZ2S4tdHKzB9ERHmZ9ruj5maNqA29LUain7j9PDhEvngadwfzKtNcBggtL8U",
  "key20": "2GvUZExVki4dYDSC3myF7oks2mikZ3jqsjZh5gAqStnADfMKChUifwPnEGyzftBGgSctqEUuYNfk8nwh1gjLqAoK",
  "key21": "PkNHZW1qbrh6ZyJDr4bec564HruQef1vy2iqjQjoNYTnNog6cGnonmLXvebcwo66K2FaHQdvM66wqeDhMoKQXHF",
  "key22": "4X48GkVWD58Sjag54HTYXRrRrBcX3uCfVK8Kuotork2WQN2kapXhxZQVz5GkmhQ9X21j3WzypxdRbYLLdNVEDrYM",
  "key23": "3EXDUimNnPxReHN4kRHqLzFGVGvFvMus8cSKAEv2CDDxwMF7UNCg2xUq77kK8ecq14nPEXdkA5szAeC5KyFWuhxe",
  "key24": "5K98kwn85vMpqoMa3ouB22NTQTcrW9HXbky9c6Dfkiuq6UQMAyfksoJwaSKe4URWf7U3SUsHq2AmV6JE5YNqTN8s",
  "key25": "3oNSQiJbb6mrhfbHcNyxC3QaKJtFxBy8CregSPqpXMdjQ41v4i3J378UhzxVcpE8D85nJ9L77xSH1RMrVHVWnrDE",
  "key26": "5zMTmXKQQ9v8Sz3L3qAK6BsujtrQJ9sJ1kJzHMVjDD6vEM9hUBbepQCrsiCT6cWpnUkDvWp2Qcn54g5wjPEegb7a",
  "key27": "4ihE9n7zqgHiJQV82Vwh5BnNg2B3MRzFkcwWCXoT1UT4jfiw6whKkNmg9me6ryJ7bX4JnouM9u7vqwozFedV1hxM",
  "key28": "4p2Bs3RvYPDvuUUqRvNjs2LHHU3dKHzDd6oKC2FzAF59no6kxBsayb3bMEhoA9JwtUoWdQtndLFJ4GED5vXeVCuq",
  "key29": "HRxiiFkzsB8gMHpKiTMQqAwfXjt4n8YkxBmf8eNkVFeTrNktz6QWNYFyZweCitjFDUjZwrmG7xaTovxEzg5eYJu",
  "key30": "2dfqGQsoGp2HiG44awPrGKoLSnZDtgkWYLk8nr96wScFcQXnMb9Ebh6PsMMwW4ceJC7nivS1nSLEC5SQEk1wLArN"
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
