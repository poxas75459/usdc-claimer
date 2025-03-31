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
    "3VPEzVpxbN7uMENn36jjN2yHPAT3TRsTRGYAJKZc1HsscALt3ZyL8CEweFFgWC2S8Ka535RijHaq1K4dxYB2DWft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vt8SASvocXiHgh27qpnrVQLonCwU6yqBv4davg6jXkcfWUCRE9w37ffCGWkskLvDEkyR3DqMxBo6uioVGby6Rk9",
  "key1": "47tj8DxUpCq6W3J98qiYqHmLPxiSMu1Uyob7siP9yiUymz1WWTKDmDBYYtnvG1gB7BWPBd9eUsi3bsqL4BUtLnbd",
  "key2": "VKsFh1o6H9kMyZGsjLRfTb67kEcKjABVkco2LvF3moQygswMdRQtnHJUTwEDWDrnirWCEQ7axVefuQ8Bn2EgdfG",
  "key3": "2cXoVg14566ozZxJTk6DLdMvzA732uyA6F2zWnXE7kPnsNQoxMA68RX4BAvTGTzXn2tdvB2YzFBJuDLP9bEr3q4U",
  "key4": "2kEVPyAaoy9WQtoYd5LavzP5yGpAt2zVTbXnB8TxGJTFYS99dUooYNcCeHXy6AuvNCUQpTra2WafuSCThXdFevAM",
  "key5": "g1baYnVaTkJ5rBfxXp7Fa56Xu8RE7vxbdZJrCjii2HrMxBkAXrQ28cDPWRgm67xcG4D7GWKEwcz5H35DGksgowJ",
  "key6": "3Um2Mi8pT7oEunpYMomVUj5kvi15tFqJMprF9YAzR9KMRibPgfiPXHwtezGJH9xua3CKgm1JKw6uLpKKieofykrf",
  "key7": "4EZF8gQ124zjqwMSf2kZbaxHCWxf8WgczJFQxF7ZU1gpYkDPXveLFTq4FYiL1GwcZVE8Wh96a7BUu7AEqCNAF616",
  "key8": "2iCSmRai1anGk9ysVvYnLu4cNUh2ySs1Md37LgMfxKa5FR9vHeW4vCBJfTpsq2FY5ezELni7LEGgebaCq8qngLZz",
  "key9": "2y36PR16GtLeuzUuNUe67pbRtb9ZjLrgsuQHfEK99gZghYXSaj74emMVYd2AZS1UohuxDSTAREni1uBobbZNAzi5",
  "key10": "2QcM36SB4txGsYvpRhjZUHNsPGLi9crxZSuAEgRXLT9Z3hSXXShb1XXbwFzbpwdTCpvtXmk9pwT82opEmjJz1BRD",
  "key11": "21WHPcQHg3TfZ3KPaL9c9VnYrVC76cRF6mVK29m6yWYsKELd6Gw8Rs7xMh6vGJPEN9TnRaEWfTrXiZDQG3MhFS9A",
  "key12": "2CRcmJ6aC36qhr5dTKx5A9k7NtQcWsqu29PTtU4Y5gre57eQVMAP6xxjxTLPzkcsKfrSzQpX9dh35pFZvXM242FT",
  "key13": "3gL4zzsiH9vGKTVhwHKwT9WVJ34ttnn5nFot6HAGNPTacPXL5YzNL18CtmbmYEgu9jRPisiv8zBgCC8tu83D8sjY",
  "key14": "2rMPZfAq9qoGLbV5xKYNeWUnpBD5B7ZiYKQq2Z3TD34u7c6pZb1sMtWrZMKKfmKyuoDx5Q5HPnAKpQ7Jg3QF79CF",
  "key15": "3HWXP8ZUJmngtRDnpRM3q2zoTA1eFUwKVQ6iws4PhVLZvcftZXs1B7zr6invswEKKHDwbrjM356hTuXM4LDs4WRa",
  "key16": "ThNRBbeVqGydq8woJMADhRU7mvQsPSZbZotHejVcmnJLajhRvUZNNF8mu9m5eEj9pHaPpjR6FXcWmALQxr13LMw",
  "key17": "rFPeYM4NxvN8dkatHfo3STBwHuaksFupfVUPhLTKhs8mPdZKjegCaddi71x3f6iZYAqgDwrMraxqVd4FZr3WAQL",
  "key18": "5M5BTwda479LqhGWS1DptFKXJimJYzTAEiWjvmXPxR7eZEGzz1Q11kXBfwLJdoJgRt8sBEa5ZbsZcqbV1Ws87V8q",
  "key19": "4JCd4Gb447YEYaYk1eT9oxFwgXK2ELqqT2yQizEuTGexrNaHYg48SBBHD7D8uwrMopS1vG4FfLN6pqwjpGatTEJc",
  "key20": "3jwR5bGsgswGPLFgjAMUtLchY2r1248Gq7UWCjHzH15gDVyJqTK1cqWvqGX4LFACr2dRMrZWYs1Gnvkqxtr1TGVH",
  "key21": "HEKkY6EZNeMFtapYqEAn2uevEVdungkYh2CrAUusTtmfZo4rXRYunSgvYKERxxyvYgfY8MBhkWQQBjCXpYpL8rE",
  "key22": "4do2NScKXL4NRSWzAd6F2LK52tf9QUAu92Wsp3k68978Pza3eXVHRfzgWy9Dv1xGKEYUT4UNMRFFLKoovv73LxeM",
  "key23": "2SSMV52irPVfmwQGCYxLiDN3R5q6GwJR4vYhzG6uRFMeZhX7MXxHBdoKDK8W29uua7cNM5xS3abf64XoAz8fEs13",
  "key24": "ba2JNVPsngFADmYY4pWSgFXJ4HLhRdFdNw1hdDhrg8pk6cWZyDeGuBwVs93sDSwsp9EGiB2CfuQrk6kCNeKdmR1",
  "key25": "3NDa1RN8t6Bini68kzLsbyKSvUhY4VLyEf8DAZ6HTw48FaF6TNY41BSYx8GT5bUYQkUXsiNDqGo2Aoa1A8iC6UhS",
  "key26": "3NrtVM35tL3HrSPdxXKSn9MEQNCxEVzdMhFn2x1gYrds2TRirBecVbAoTH8oxDtFBWYChFCur2mcecL9dZB3ywod"
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
