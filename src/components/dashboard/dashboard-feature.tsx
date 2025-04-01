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
    "5FYv8dtWWaHM88LKoNKesypKSMBn5h3hDAnTR51AnxtaX1TfERXb989WS2obFWjQJjPiUbZwCZyyRqq5kyfA6Uv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yJtL2uen58ZDHxCMaswhDvUhBH8X38ier3zsavDe7eJkkzEUyQwriiiLtacbceg6t8bzDQkCb95HuXNUGDX2jsa",
  "key1": "36XWEJH5aPDqFbz8A5LVXDzFdzZGdLDeouPmTAj8vdzKy9mpLGoMngn8J24shcovE5NQxUApFN4YgMexdfSdyvzF",
  "key2": "4zrXyjun8vwnDPfWEKqjodnE3TyDwh1MWvKWpov2zJAkGb4R6D25bz7jdxmWkhVWPUSPWNgk29BjFaivfQVKFGFb",
  "key3": "51LjCCgSC2BeT1rbXgHnjtTLDTZRgfHzjp8LR4L9VRw6BQiBtudo5vcks7jsE6CYkgqAwftTDG62G8rEJEFgLRKj",
  "key4": "33wPP3Gu4EcNPDwuaFDntT2eTw83bKEAjwfK7JeL2uqSJFS8mrr35jkrrSTmyBD35Q7iYeQHXeW3HM6WwmGD5S5V",
  "key5": "JcB9hVovBrrMj366hjWnnBbdn1Vgw3vYT2eM7vrv5hWTL68ccnoBUwFBknLTSbHx6ToydEQz48BofRU1MJn31RB",
  "key6": "4q3u7ctiiPQ1PvTU7wmZca28Skw6kD4NJr452inyc8GsbhqkQfcF9DhZHSqygEoFDTrNLbv4HZtU9gtgDJd31zmW",
  "key7": "5m4fbVZ5317WToiAGpQRKdH6zjiHrqrLP4E9aZEyjmFq7FC9my1tKTkAuDbXBZtG9Hw1GPeJ6gXszQveZ8R8Xhri",
  "key8": "3XMYWVkyYiZYMgetRATYecnhHDfS1ET5qFfAwhcykAhJLgSAPh4mExaTD8mMmkCFRoEgXpYjpDPhrAMh5fGnVH37",
  "key9": "ZPVPDDGcUc4pZBU2qfuPVAfkBgmxf7fqatNhxtMGizRRwmGWiX37y5GV2q9Ppw9WQYb9BpFirupqggXEYhysQgp",
  "key10": "3RPWkmYRaAgwuYsVFSBmPdPHuQbv1MEPkd5sCbxxCWReu5F4Z1RCokVAiEWboqoW32Tj4Rsc7Rk9PYjpnDZ1X9Tx",
  "key11": "565PDXLptdgLgtUzKg4Mx1DF8ExHfV2hgaCEC863GkGYaWcurz5EL8PNVsSxeYFrHTtVhwqijHz8BRg8fG82CjSR",
  "key12": "2kYGK1gga2SJ5xiA3H634QiW1Pj56DxmX4bb395CZeQJRLume8BqvznZmfwDnigRvrF4BvjSnTfp8YvY9WefksiK",
  "key13": "4UFguYqea99d5bMWvTkZqGW9Ma8ZQk9JeUpjkEk3ZaMUyR9dBwKaN9xrwcUWpvstoEjsjESGpooQm6HNaNie3WHU",
  "key14": "2EtJe3WktXWFP3EsZUDAQxzp5HPd7P4jyBb8b6naBjm5Q9mqGLpYvsdJbMEnBMeRK6SpW8SztqnbNjJYM1YWbezX",
  "key15": "55D6kQcU1h3Pu7S1wMCNBZava64a2xC1F1EgBA6xk3gnAKrjEjrRDv3MuxgRy89FsA1ZMJYfcQrTcLfGCabMK774",
  "key16": "47avH2cjTVMVuzKhQtWQNDR2toVWqmpBGQ9bgf3bGtQ2M9NbDXVc8ogYtmqjjuQekL3JoM4wCtTW3gRws4bb8eLx",
  "key17": "41hKgFS4PuNDVdBWdA1P92R2Fb5Th92LUyzCCtSRUP7Rg6yfgRSAj3T3DFqigckdu3KCxYLoXYmAMF2ksJDmSTRJ",
  "key18": "5aHY1EMXvG5mEjeUywUWATiXB8XPdqYN7FibmfrCpKBchRqukGt4oxtebSMoNp7KSb28PxiBRPpzhESugmGTiZJ3",
  "key19": "57NKujpY7QrYscvZB1EG5RbDqosC7irtDnnxSvH8gXkTyStBLVKVpFrh5Du8ScF1aS2MzVTyKfqguEAmG5JYKG7W",
  "key20": "3V8yX35Pv3oL1BfkbJn6f9uvUHLiBvtfVeHyJxRuHXp2wie7dg2msR9R2QjP1uEdLLSsK7aRmnGpFu2M7682L726",
  "key21": "3gtLNi1ZEBtZh6rtT9FXcp67bSEK8Rc9tMNfo8fjBw4LDuRXQDTrqFmVfhm2nzr1fGmT2tv9hcs5g6mKjER6tr6c",
  "key22": "3RAY4ZNCaWSgTJiUiQfrfWNGewXYZWXvfBrVetB9E84PALsisivKBgZLRAdUFM3T5UEaK69WHzzSY6fLvktzSTeb",
  "key23": "UmxpVN6z1MZ1yN16W5fUVrmNSB8ydDwduhLsnLe3uqfvXQvQvRtb8b6eyaCrbp6HodTgZAtkCyfPyQdqvWXKfyB",
  "key24": "2BizEPsRbNA6B3HVTpJyCB6JC1upFBiA8j3nM9e83d9PBQJ2boyu8XiRA1ezYCHzD1CvQx7F7uDHniEbUdkuDKfX",
  "key25": "5RU17cfpTbamQwou7UsHvgqrqSZdRBQFPAku2gTinUeiLEnamKyZt2KnA1xqCgnptKnKLfMG3porwnFRxhFtagB4",
  "key26": "2tpSD9XQrtzVwKPHtcWJtAM8EuRs2BeP4qTJb9iGKuMovCLhBZ1NhoJK11btw4eLSmLAnya8QobGMpgv923Dhz2Y",
  "key27": "49GNLRa5B7GujQbWu1yUpJG5qyMmMni8SNuHPaZdrXk6WcPNthKjyYfBrEYpDAPHncRps8PZLSVJwQpJQzQiagx9",
  "key28": "JQyxGoYWLpBjcdHhrs1LeA6JbVHCzbH3VWUZnQSuQR4QqGqphd9yE4zzBDvDeN3siC7K9mTNsHW1yrYxGb4AJUE",
  "key29": "4FhHneUfWCvUKark7Kk2dx7Gy3foQv2VB8WaUX2wXdVMLV5uPsMCLtqmgQzmTGmuzV7TCWF7Ffp8pTuXMLcVcjfv",
  "key30": "49tJ7cCVLNTr9AbzyzzAvVqiKzKELsYJz6zy4JmVqh5DXcUwzVYmmfA87uZV8C6PhuWQxhmLcQQnL7i5BJwhHJZ5",
  "key31": "4QqQpSqqU9cTsK2ZR3EEbDeMFc1GMCT2RxnKTJp4avkiebCC46dV7a6sohXDqZKEXPVKnSmNdgKbicjXQmwVCEJT",
  "key32": "3rkY4LJ7qNEm6bKDmvmHGppmd8FNY845F7FdzSGr45Dd2JiFhBXnxh4eKhL3KQR9zCA7ggLmg285vyeFs4P93Z1x",
  "key33": "3u23b6FMhmmLHSzo3mqUx2BgrWDVL6q6ygdFFUkrjT98CuprzEhAYLXMB725327wtCYAHJExaRdcGeE63o1yxoar",
  "key34": "39b7j9ULRwATFBvBzuPnfinybLFgncgcZGeeJcAxufwLh76RQtyMfCDjS5eZob6mwwkhQ8s6PN5senbLMdDuMcgb"
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
