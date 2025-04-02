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
    "2H1xeeCko2FNYiHGqE1e9vACqTAHX7e9bm1k7qmT9o13HZxuf8osgjQ4dLkwzyd6U1VgN3fDEym7cuVAn5j7mQf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9q2ZqRhkTCcLJQLjiPHKY8h7WHg6sCjZhfDaLtmyvJrcgwPij48oDcUPuKgMzt4ftfHYttc98TEizF5fmWEDjV",
  "key1": "4au6rXvAXpK7t5Aa7reTCv1Lp6MScvBhtMPZ7bfSp4zGMFYCZNMzqR1uqLeoFw9GoN78iVaVvvH5bpMujkfgFy17",
  "key2": "4g6NfDTvBpVVYkyATubP3CRKmaA8mc2dfdfqTu21eezu2Vxrwsz4T6S5mLgDyu9hdZ34s7wPyGMu5gdJZPsEEsyd",
  "key3": "33v3YtkVADoPVfuHSFpP992LfMitzhog9ZRTdc5bi3UVdyKikuxuenT3magNQvTZFJEuCHBdDqk2q3RX5JAwgykQ",
  "key4": "4tvqP7eGSo84C5fYG8uSxcYdDBad3N9dRNd2cyScNfKoAkUErx4tbggtjNnsvWZ8B6TqbBAwn292unMAzn89WAjk",
  "key5": "4YYQAV7R4dnn1qaVCGUdKWLQ1EAFddVMfc59gti35jeppndm1V6yk4koo2YVFKWHJc4eSUwHawtZDYt1sBrdHjAf",
  "key6": "pU7YyRPfAJc6vtx3NfYrNsox4KyT21vxrW1DEJqiSPBEuQ3RfZjsXa4MVrRRWzaMQWz98usPwoBUbQQc53FEZZC",
  "key7": "3K3waeU9vYVWZTdcKxQRMPaGxLEMgNVU2bvxvVA4AmX3b1PHbYrkPbsY5bZjPLcxYQgnjujsoS2QfNScjeE6ojyZ",
  "key8": "3zKpF4GRDekNRLKppj3Erd62PPr55UYjtzAab5DbbNACvygQEy6CjmjUAq9feT14kU8JegYXk4f5SUvdGTCxbW9g",
  "key9": "2sTsRhqpKniJaqiLPzTGigU6Pskw3Vg6HJFGGoujsRopkUoEj6vUCT7VMMRaoQ1ZvjDhCoNUy6e5bKPbhsfxMX3t",
  "key10": "5buUPks4ceUn2eUt4hvpHy49KVjzkXmXvSed7jkMTYxZ9H7WwoRxM14UiEgjyC6uq7Z5vEKuYxKyjXVZm3g7ggEq",
  "key11": "5yq7frwfx2nxPU4kk9GG7U7gYPKXKV2mXxpMC7LANCMNLkcUSSawxugkcRDeNjww4Ea2w1MVZ9N7ELyZJr3QJxyM",
  "key12": "4SiqRPJp7Co2VFBoSeXjTCzEWrB9qPpAQc2TqwubjP3d2oZ8kHLsDM99WX12qotngkEckitPRQ52YSfLGPL68PYY",
  "key13": "5DRq6SD42u6AuKPybL8vzvQCWv5Q1BXuLAVYrDQDQfEUZhyNVTe7oWZGjtbnHV3guJrMpzCEUPDNe5QMDyXGctzc",
  "key14": "5NJhbRWkz2KbQSJpseXSDgSW9SPrA8LcQHzHYqVV7CJA1WkR7UYQC4ZTjmqQ1q2tXdm5CEC4q2SnwAQgzHXTpivu",
  "key15": "28ABe7LVdDUrEMus9CWPDqwwFKL2yyi28k6SqAZiUfXXoGFvUU937oyYvYwMxpZ5gFj3RuroULLb7QskAMYt3hKe",
  "key16": "e9iyYj5pv1uD6omEvLkahboVqGynVeQNUyLkQojLFcY2RaVEUvoHihtp2HG1urBpMn518H599QDKs4caApRZDtY",
  "key17": "eiwVtHnmkJ2mCAPWqvUQz58yLCJfVA5YPZX1pocys2KEvehup8sZDVvRN6DGrKcEsv1rQ4rc9R7zPC1gDfePh4D",
  "key18": "2wUq9XCKLJRebTKMjLCJQtknLQb97DJegNg74ZCcGZaoTEqGU5FnoKKSCnqnwYwpRZjuL5KFE2zSXPk61citpzti",
  "key19": "ZPH9R862KxfHFhYNdemYCKaCjc7qikESPcMSUD8csSppTqrRUu5pq5MsGJoMFQAGWdFXw5HuhBBiy4t7FJziorF",
  "key20": "3Du536T5ni3TzXUQvj4LczTXYtKSBLognXAswB6FoTZWqZSG2zkDiBtCY6QmzgDBzdWRsKniDSK7h5rLdSC69LuG",
  "key21": "27ZRRNZW6NzW5QA5QGLVn6qBXmJ3xfjiTctx9KQ9rb2FfkRdY6K3a5VnFDpEyvF9u2sK9iXo29YpYquML2oq71sG",
  "key22": "2b42rw8Baz1DTpAsbnQLpbnpz2GN8fTudm3eR7ZVJ22pThqaM4vTjAs7wxZTsCS4y3ofkWEVKBdD1Ee8MLve3VNy",
  "key23": "5QeRZVpCPnsxkeqa6npDHkAoUb7uNkBhtdXBWYYHBaXuKZLwQ1447psBeT4VGr9KQX9XbUKGWyam3thL7SUwCfQy",
  "key24": "6nSw82LUr69kTY3xpskJWNhhEKv63hndxEcD2sk3JCZBzQXyDDUZ2rcnU5uLKZKoto7rwVs7YohxEvaBby9e72U",
  "key25": "5UJPw1Pr26U9vbhdUSAEXeCawpheRYXzoxYNunyXzjC2ShvwNbreMHhERZAP31o4gEhoyX2mDypdisTbom9k6koh",
  "key26": "2vaqHLxZ6zLafUkUepbiyc5fSYXp23g11P8Zw9TntoxU5Ph4eo5GBo6ynRLUNBNN82EwF9zYm2ETkzXY14Hb3u89",
  "key27": "3ZQ7vHYrjF9VdW8D4ddc29wx4Dn8M8dVjPK5WWRhvixFfbCBL3vFdXUfdXUcDtytWMYbCyEChVx5vUYWhcoKiBEi",
  "key28": "RvKNE3G3kRucdKh5qKzmzxc6LgbaxV9GuEXSKEoB7dwksigoHKCXVXbQK57wy3utNXzhsdYHx8pRBb7aSaC13bT",
  "key29": "Dc9MiFMixP59tz3ADBHC2cfmEpozysxGU4bAV6HwZB1a7MPaPEPKUSxxXch5muVbCVcHNM6ptGT8rPW5fhBhMKY",
  "key30": "3Scvff2E1kqXgDxm8msR6bVqAjKfgNS71MkVG2Pq2td3nnMWjYQ6fp1hohPz4Rg5ZzCHqjednsQo9erXdGsbeqRT",
  "key31": "4BbEPLNqP16Qj3p3oo8AE17sncv4yoDKqy3R53CfdYR8XpfDQAQ8vHgDZfCDCA584CcWyKx1BwZJrujxpTeh13ws",
  "key32": "2RphQ8tGD7gZqQMJFcaiiHSKtxxEd3eAywWHAmSLr76QfHd9fAzrzntwLfNqD17dGAqa3F5xK6ZqrGDmkbYpD9SW",
  "key33": "gLXpoS8E1si6FNCjAep3Wu1bgc2FAHpqyiMMMMXM3RkWdj8FjUn4pregimhsCsHFJgYr9ecsPQzMyuZd3Qw22qc",
  "key34": "2oyCCKtrLSLRk1wWpd3oCsc3ErJbxqDVtLJGpxzcjYVoAxg5P9Ja2ywnJUcroJ5fjSPmKQ1781SP5a6Pc3RcLFfJ",
  "key35": "48nDAdyUoh1C3xb8bT4rkPCYh4zK3cDs5AHmKbbNLWi5d6qCKKwDFh6eNB7dGpXJo341Zzdt1qeyJ32jkWZU4ey5",
  "key36": "29k9DhyxDuuBYQJZUSL31dgRvcckHNFJpMntRSqkJ7gxMXz259GS3CFMgL6tzgaseCCTsggJumTeEE52ZKcuW5td",
  "key37": "3Bm4LHNphzBFmr9HoHrGRrNtqAsANmgUxvVYXEQssMmiEdxE3xvymueFhVfkzYxpZWGD7hzXMFqJAPeSpFi4pZVt",
  "key38": "5ir1wdRypSNPoq9MHa6EKZZPYS36nW2LNuKBFyhmiVsZQad9UmoaHTNWPs3HB9Ng1G3urPB9saDBkBuNMkqmARu5",
  "key39": "mnmYYXpXaHZALm1yppNw7x1cJ8RhdoMeV9op6D3jTM1iYV5vE7xjmuYLn4hojp9yhmGptLUZfVRyhtsqzQPVZK1",
  "key40": "4CXyET31T6gAujJt6i1fcqbXar4D73Hhcy7jWaxrFxjxQhfSzJou6LDqAcr4ExvvCva8dNZMrGEi5AU8pHs9ojgJ",
  "key41": "4BJWPq1os5trNUJkCp2H6pgjCL9ZppPXGRTEHLY16hpyDYBJAFEkvctA5Ggitf4KTx5snyX1qYKVJDD8jmVAUdYw",
  "key42": "2fa7CtujetEDc7dXE24ijfeUk5M3K9mktspRSx7GUqbNujRLp6CgrG2FsYqAiFmL7NquftBxsZnBRFyQDUKbsgL3"
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
