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
    "5Vz7L33ciMPvDi5fufphKWitS5LaMQhmmTNWXb3CnS6VLkgxAyRP4T4Xx585c3XAF7ZThtffeej76H6e9MkYejnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d2QWnpk7hpwLDXC2N4g2J1Uogsd1pgqdLDqhQdnyZ9PnSQU32SXD1gRE973btqkATkK5pRCtSQoDNrVokPDZMd5",
  "key1": "5nxM6efhARkezzn48X4b1UfiXRYRgv9ko4qqB5ewdA24ksLGQ8kib3UYZ7pHTd6Sp6Nn3YWe2MuRdYyk8nMyVA3X",
  "key2": "4uPYRBCwBaWRpXBk6FuKmxNeMKTbzPz4eMv2bS6Qrv3utUQTVQug5up9spZxTN7vMrjZZuHkPYK6ApeeCzEN9Pjy",
  "key3": "4cr75kJUuqPtgK3c4HdQXboBjqHGsrGpxLsVVRXbqm9dt9mHChy7MGQTW1JWgGSHGMbGyatGna3XKH5qTENSVYwD",
  "key4": "mppiTyDbncvgpoVeuJBNM5B54q6bK4aDoRaab1oz9K3pzGi88u2SUpRfUmHcukHVSfJhjFGuWN1Q4vPvbbXrUCd",
  "key5": "3WS4KiwKuj7rTUDBzrfMUFzfbNyRdW8cvBGcmH2DiA3P2wo6AVa4HP2k13yS1a9Fpkh2f7bYukfSYaHuziBuPvDP",
  "key6": "NgdJQL4x7nm56JkXB6ihVFieSWYyND4xszqnvHV81UUC42AkFqhK37QDphw7QA23gVe9GJuDB5fdZAgACpRRCJ8",
  "key7": "3GeqansH76EmHjcqunLcrqvLc7aTwJkVkhqUCGfPo3kSaGX9YL3dsx119DfjGHQSjti9ptRi8dn87Jr11xFpFx7A",
  "key8": "5uBeVJDxCHhRHnKKiFg1Q8dz3hqy4q5dhAVDnmtTHZ6u1KaMDWiH2YRAgmzJq6qXNVpKDF8TPKTeCYKDYZtTnvdk",
  "key9": "5s1j8zxm7kKe5dkxZdc57HZM6wwqyaB7s96UmA5Fx5towE2Q7AvRu65JXfRGVJoVJ2PtujnpnXK2z8S2tTf36LbR",
  "key10": "593Drx7n2CCoPgkYNWiNJjQJAPsXqMw7S7EcwiJ7ER2NZbeZYa7bBQazTcvwLkCZMEQSvseT99bEUTTtByVyvWLC",
  "key11": "snNuyZWm34ndzAURZVhK42Rfyo7UJC8MDzGXrW6xMVQvhX7nAx2G7y5ZyVXBUouJ5ZM3dVqKwPCfM3VNzmT8g2i",
  "key12": "5gdHhUyTryufoT1EvrSKy9ogVjp2bkZ9oPfzUwGp3kpo6Lr5LiPuDoLg24MjkviRYMq7vNj6ucSaKJRK4imF8SCZ",
  "key13": "2LASovT4aysc78tSsmGJJqJGBD7CFBV9ZytydUAYpXZn4euFxh5BtyZoxYJy7vbUKZ9qXhaA9gZGqa3kqkUk9y5c",
  "key14": "4EApxBsmztjxTadKWARixRJW3KjtvoxX7hYFv7Tq9Z8DrdQPWsDsbt9hJAUETi8QUaAgGzqJYCcEXkzdLYMWQdNu",
  "key15": "4LSgmREo5FyaRi8stp946dtetgBSVBvndP4CXoArcp8rKYZT9dzNVAimbv4m1D65xZba8EX5FXnEyJZuoAxgxBZK",
  "key16": "4zfjZFm1PjhXFawWhdPxXbtdxqebUvaj7dZkTySZHMVg4NkwUAfV4KF6VTm2gvKvnNgZt1Y332qyoDfcrkEmmBi7",
  "key17": "Mt1VbWzqUiS1pfwUzXZb4378FXi5oeerdNzkNMSfyz4b8BmWdmCky5dzBjvZ6C6JZ26nt1zC71FFEBeFni3MkJG",
  "key18": "5teZXQtarAAskMgVeCAxZjDmMsiYwHYFRozCQheKEmBXUB7Q9Lce2JY78Z6WBDc97nCf11zmDNi2uiDFMZuAigTf",
  "key19": "4AUku1cFWMtzWuBfeGmzq6kwo67286b5y8zeV89dyJxfsK4ZithEfjeK4PRKtYuRHKDf57MX3LhemfixoAjC3zgM",
  "key20": "5hL9aQcUjwAniZzwZELpgYKtgopicX37fHLSVbiT2w4PbF5TeVXP1GGyPz55gNyyLcdghx3SizddTYDf5p6FNZUM",
  "key21": "5dCRMaJW6cJuxDph4VVPFWEdrTv8VkAd3BQgaZkCrREmzTma475Nd5Bz9ASNUh5VpfDxB1PnhABNmEZof6ZGYjYo",
  "key22": "bircBoqoB3aAgiXNMWrccRExAdQ9iKBtNXWsmSb31wshoYN2RerMRbMjPqLDPNW3cdrnchTEY3qHfVGkM8KavAh",
  "key23": "2dJydR29fQwaQGRa6keo1KJAD8AaLV9hHCi3SBiL8o3SChLubsDYsv77gYnrAa9NGEawtXyk6wgFkenFJhmqTFpR",
  "key24": "4iQR4vij3Q6rChish1ca9bPSrPxWsAoRLDWJHg1mFa2igGxGwbCqrUbFNe5LRKbeTLpM9ceHWFtATCmvCp7KJqqM",
  "key25": "5FcE3Yny4wJEyxVAvPwByKrJNFkgRGLziyPVGVMjMFvgeZsx6C89qH3qvUCeVY2ozNHvaYkgHhjZMWRcBN724VYe",
  "key26": "36XXpuVENLVKaesNmdMMgMJqjjzFA8hqJgzZjsnGCV9UvQWrUqvHzTomLH97f6r38SvvLwy5iBdifAVtVZiAgUWU",
  "key27": "5Zth8QEStan3ouKXR5nR7vDLsTetEHHjJPnR9eGCi41vaktDKKkRy1EQKKpMLTyF9dAPgb8zoU5b76YevWPZcDCg",
  "key28": "56DWJGmDx9iRHj7AVBQma2Hb7DA29fksp3xUUShs216X3mxH2X1HvJKdv24xTDG2MVY8RZM1yeemccSuemYezA4a",
  "key29": "61AyzMzCnLBCnAAoufT4grYcfNjWNgHXvtPaN1mA4GFnnBdSAzyQSQ4UKbbnAX1cPDFSYTTLKnSm9CHtaNvzFrVv",
  "key30": "3tRXioD1GnSbWUErEqbv8zwURemdYJcaw5nhSVCUrLUgpoE2khVwxE7jK5agtXDPLtsYq7sRmvs6tDzo7knNWA7h",
  "key31": "BcE1VRBtpPrFAigkTmjFLJ1Fa8xUNH9xCc3YJNbYx2QVyD6qZcxJ4VjfA7jTYYTq7DrppVa1WbhD4q2VFwa5dqG",
  "key32": "3gjzeGSoGmvAgnGNArnd6bC9Bcric345fdHYSxcGPSq4ejEP2Fuq5o97tWT1Qivbt8QXVydhSavGau5LVQe1uH3S",
  "key33": "39fzY4iDyj7goF9vvo2dJ2rmorTzK6n92V2kvf4QkgZ2otNM4RybLHqFfhGbcnry5fqBfeE1vCveCWuqdYvmdfkr"
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
