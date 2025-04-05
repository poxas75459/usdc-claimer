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
    "27CGrAmoYAXxowmaptQeirPUspBKKC9i3g5RkZtBAJiASkxHT2HmuFox7SGmg7AD1hpuHdaeNbZfTmsaKYGfTuHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQ8XDvzQS2vpFYNrLsycnQ8hZifQRYhbVu3zryYvhy5xgJTgV5FGaKXDTvxNqAAq4ewYySLRqdfDXUK7ZyV5UhN",
  "key1": "23GcwbgBEk13u8LYMczabzcRLFwCArJL4dnynLPBf1HmG7gxRaRQNUN7oknnomr3LhzxLpbB4TA7VfRXoyzWfQXi",
  "key2": "62xrvcDhFjwYWi44qqgYFNQSjsggVakEwUcdTaHDYsjyLwg5R9H2gu3qP6v9s6HMAk8r6R3ZpGUFwURC8LXrTDqw",
  "key3": "2qdUL1xGoJNTkE4V1QzSh4CXb8U9Q2ZXbVjoFfuMjD7yhBa45HBmvRkMRFTznnJv7SrrtiAT3zThTayvEJazd98j",
  "key4": "4VdWvMRQ6uahV3S1xxLzN8zhSWcFMxYkD91enEPf3h4Pb6meGpWrdYDGeVY7QCmuA2NgxSLC63imqRsc3Be1LwNw",
  "key5": "3D9mDMGh3Tb4dHaAEiwWLY2FJmPoXfhZpn3GwU7pPPQdLUdYbg37dzjJXAzD5H6Z2E9mJ8AWPn6fnpcmWFFqGqLg",
  "key6": "L1Q2arvxLvGH8b9k4mx2kASEg4MQHjeWiCkP5eu2pXHEk73RSJyLMKaEqjmrCEGQEZdKnchW2QTa1ychKS89VwL",
  "key7": "ndTw81TSvXhXMjiohap79T5GpEVA3WRrnqDS5bh2EyUohViBNr3GusNmfiprpgAzdRRHQRnjCx1FpNj9LxxgX7z",
  "key8": "5aoLjJP13pdwfdjZ8rWd4iuqhyh92Sa6HcSkztsUC9q4AmYmxihJ5Sr4a4pxj8RRMg4T5DkiNe2zwwHcJLGCBq14",
  "key9": "32UNgMXiryQXf9dutD4C6vA7DAeYyeedrFrLVbaDgxdkiraQNUGAKMzB4uWTxbFAH5issrQQcMy3oYSKVzMm23Sp",
  "key10": "3ouM4aYxLbycp6hn9fepPDZXmH9LthmfapFjDr3c1qSbbzE215r1gLRv1wjd7gLRjYyNUsjt5xpnrcQEikP2gxGV",
  "key11": "2BmMp1hXKPXmx7jvFAkWqFE8yo3Fk9zfcPng2X7RQs5vU2ZFspq5WRuvwi7pgnMpLniBcQGC7C2TstbbRvFrtjCX",
  "key12": "5AvYrcSfHCEngaMfEch3phw3NcBabLZKz2SyJkMFFtdnmFC6aCikZuWbeGWiFfc14nGovgSngDp3Lpw6b9kN4Zot",
  "key13": "yKdwrbPeTYnjFVa1oCzppsVAVAdgBidRMqwvNzkMBz6yMoSdtZSaMjjMUBLqSRKGLrAsEBArvAcqRE8bZ1XkubJ",
  "key14": "2MNPv7qK9fa5hroTaq9XVSTRjXEvqR2MW91azZyTJrBhvzNBQeyNbi4dRhrRdKVoUhEuz2SjLxZ5hJc5P8i5J92E",
  "key15": "4FvdKsBWVmaEJ2Va7KsnC3GxnQXydgUfSnEYKSNXNRmnFpLRni5PegaSdWFeDpquU78h46CMQRd9NTGbW5otkeF1",
  "key16": "2ENd1ToX5sSxiW6tL1vtRXAXrasgNZxfHuMLUv8L5fdm56HshV1ixkftKFFS697aGWU1BbZdrpMHftqBHWg2Xybk",
  "key17": "2wChthfWmFi3ue1fwsKiwTUB5sAGxcyaer22MAzn5onBwdtxbR2UhqVaebcmuUx6Vxvw8RWdCeChtehNeyManqxb",
  "key18": "7iPr6sZdP5Gqk8Yy2y2hKZ24HS5njabYZvoe9oE3i7Dj1S7uksdbyVuVMkd4R7h3YBGuzTbEQHvhPjwzNXAuGtk",
  "key19": "4M6eZp2BAVG8JBQwhdwijcLWunBgvfDG32fPvK1sF6rCDJ5ZYyqs5H87c9ZCjV8y9jSub5Z6rim98KqSm6bMLtQZ",
  "key20": "toGpwccPHaBH5dnzJyfa57EHbckjy3SRNeAMfH3nd1D7WxYTW3vARw1T3M13m27PNERcoQwfe6qKoEjMUrx72eh",
  "key21": "Pt2BtFQPUVr4qwdeiCKZgU8LGzcisQwSyUPBkhwAt8eZK7pWqKhxrjqq4JUPqQ3Jcq1i4bWD2jM2D2TzbGNT16z",
  "key22": "3686z1SZw9QumgBZb6NJE8zW5WfvYSqbJPaF3HBnairuXNRTKjM2MR7yQ9TzcwL1kkioYz24cKZDM8Y3zwQ9rJgd",
  "key23": "2UhAQ8HteLNU3fYKLq3schJducurTi9XT4EyXkn89aygS9jEeWpxc5tEEH4BP6ChSH5HthhF1h7L9DJBtEansoVF",
  "key24": "35QGU7WnarhyD1JEvy5dSC36qmUrymgmfrvxtkb7rDijhsnLJR2sms6c2M2VkDY9o8WnvAEh56hkXwsVNbBEj2T1",
  "key25": "hhnnYsfopBG2obYyTg2s2CWZSPffh1cyreim6GidCGQHU1puyTEpBDKZJnYFqqFe9HG6WsVc9E7odVe2gwKHSRy",
  "key26": "2GrABRoG1YyutWpZCpNzVCAVcWdhCb7w2XpyCFdtpD4kWxr4rL4mfLChbSyRKoaUiaZK58KwrDFRFZLxSMiUdtgA",
  "key27": "5yZDr2NhqfQYprGGddN1EH2Tmu8i7PeW8oUW3ziqFp9sQp5HUqsLTRsFHyZgobsTsiWvkXN6sG1VZfX7PgzDNAEk",
  "key28": "4oagGueqkqLPH7kgQ6EN48L8vhb3uufN5UKypMhJf8qtwqrv9pUU16CrMHT5CvGMciDz9ixEb7qPsPqrod9ff21U",
  "key29": "58P5h7KZkkewNkTCKceNngBXH4hbguByM2bXYmdKxKA4esVTFqGGDHUNiiZW4Jv1kdpgXwjuFCtTZwz1NS1yvtLC",
  "key30": "37RQfQreoyu23dcbtLKc85bki4nH87GxoY5b99GSB1KrsqrgfqtbxN1adzbsyn1gQGeL66VgPPPuqsT3aPBzh1Vz"
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
