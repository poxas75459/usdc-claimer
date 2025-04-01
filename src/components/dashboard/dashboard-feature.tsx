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
    "4jYZQfMwSjk9q8BkrHC18SE6idDbz6ps7h5uMjHjzWcwxBSHfz26nzhhKH9jukvcveRZ4ZFEcuSENMkT5EUyxuz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35qbpRBaFF8WoPZxLJBV4pfUNZq87nwsnEft5vfjvV6dHZhuoZhhmcjiG8nNboN8KG9PWXmHSiS5YVaLuTtNgHVr",
  "key1": "2yvoRBqfU2b7wKiNuXfQPGeN1s65SfUbaoBshac11ynWZFJdNB7eJ9zFbhHP1Stq2FmDy3YSPejm4v2Dk2kdhP4P",
  "key2": "5aV7oRwRncFNeMZEv1Rhnjnq928erFdfDG5vuXC3emviwbFRv5pJsm9oLYimTSwqNQEMiYuNscY8oKGUCCLz7gTb",
  "key3": "PjYoEoozMyv4bQL8aZk2dMjiMGpfXBgPtrsQvUmk8h2XTn2uGZUwwmXQ8tYWZDWwrcNwTjKyQGQCGBLrg7xK7qi",
  "key4": "KDYqhpdpSUyAJBBSBvk5bau5WZt7kk4aobBLnqB4taNCM84uvBZjmWTtiocShMtA3XBoCVvaGxxHMvTVXyGMEWQ",
  "key5": "4CNLiaKHLJPd2PJQtP5HHULfbZJucQUGAFM2ptfvMZSz32peF3oDFSDy1cueAE3Ri7zszLvsUcUJnSeLnL9GgF7g",
  "key6": "5GZByY9ivUR6KR9xWyzmBQ4uc14rdB2EqnPHnPs261FtCH36SP5CntBt1rR9L7xbvZduzab4H3YMDn9ZQXi475dp",
  "key7": "45vwFMFJdpAtUjVM74dMXTgqa99M9o8E37ja99DQYKhdgPLURNaexe35WY9vJA2Cw2eJavXjaCM6kMrky1KVQ1p7",
  "key8": "22pLSDaji9yN1R94Bc5cDb5wbyZPGth9rCwg5ReuNE2a3mfCe6ZqY9u7FuPWJxUkUKbcijkXKGMY977JiusVhiKs",
  "key9": "5NhYs5nmMue6uEnyEBEgBTx7LhrPT8jSj4zkrVXxrnSpNWGzFPaRMXDkTqTYDL494QRgdnoBvHrVEEuHhHworZUG",
  "key10": "5GtC9GfcCzKLREfZUFMHCGTtDkw62avqoXpp5ph6z3FbGQ4qYZkutUochL3F3CRLnomLAhHk5ew1pjmxSGjPffvf",
  "key11": "jXThXfa3GWWEEpbpwXPuHK8LkvysJrAoQjHSLMiHLNh9vE7f8Tb1GCaAesZqzFMaSiBPPsfTqprnFypauBycNVo",
  "key12": "51taNG6Z396GnjQpEBVCtNUSVAJmZVovDAhonzTz1MdJYVyLmhr19ZyxhduzEthmBFYoTdCdCz26nPE7o5i6sUN6",
  "key13": "2wXWn959Cdu87p3qKPrEQvrinTNEnDchdkUsror4EiEKT7Z4nGgiatKBR6Gg8FsHxHEiHSKybHdoYn8hz6X6dM4k",
  "key14": "65s737gLh23kFbdafyCn5mypsT1QxhvmeaDaYxr9nhGNpYmH4vch1mi5VvDFRMKvUyWaehUYYuDV2LDPB5ce2zkb",
  "key15": "5mXZh9CSmJFSbed7XKkXMbtB1CxRD62mxHaja2gSgrcN6eK8wMEPoY9nrRzXGiGPb2KHLBMewrQkKTcK1hhFPX4N",
  "key16": "2MWYfN5GwKoJWA1HQLjsG6cE4fNTBZEmNsNbNaChkQ1TSjGMTc9pLs95bnpxEm8E5J4HqekBN4Hjpd4bmeaEJzqJ",
  "key17": "28smRLUwZbTczHMPUUQncWs46b9p8H9eHTqrXNHfzcrjpLSUqsZ28QREkdsRj2gYwkfZMPjXyjdH1ayXM2LMbGWo",
  "key18": "3XUZC7k8S3QqbP3yT4NYzCj4ME2UkdwavGZTw5DPFU66Q8isnhNtC297bSvpxphnzAvMnfe3ceLW6UuzaLm9QHQM",
  "key19": "bWgXbHaHZZGQzky8drJP9pT7rs893Pkj75cbLznsgohck58MHdJ3rUgFSLhD66GUJRZdiw3t9cDUqiA3Nc2giBf",
  "key20": "2RWp98yMpwbox84AWR3UBrq4VoHEgrWozSpaCHFXkDtSCnd3ugVrStaov4B8QuN6nN3H1biFqfzshv96iXXekDJE",
  "key21": "4uowfYGBJ7C7MxWXXdxhypGZZzzHXNSNHBSXs4s73dCommYuZAWqZjUFRnHryNVUMV4LGzCcvKEhJcmHC2Y6ZuXK",
  "key22": "2AZ1JwHxryRNi85qQXtwBzYaMRa9JVPM3e4AuFQsseeCbGq5USgvyhSth4zbxV3iH1jyJC4MhbUW1AjLaLsGLFBo",
  "key23": "39ENomHzeQNB62KTLEAujhPoMSPL68taUku5PLwDBEgFwpJUGVBoS8gC9EUf4QkcZhhV6Qg3GqPdhJk6u427qxH",
  "key24": "3wmjEVkyMbUK4kMwedSBC89hQEw82ko3zhttCgM93fGXvW4LkSMdKhcNZcTTfHXVcEmGPsEBafShS1copcfU3vzW",
  "key25": "4NC9BoTNNpy6ezfzJ8qrUrdYToAvjgaKYoBCdzSTR2t9iBzJZFUG4cwHkj9VyxEn1XYsJHzwcAfwXATXqSEzSFMU",
  "key26": "4HN7mYV6ryiNcipZ8MPugtF7tFRDVkyufYGCjEm29bqCoRC4CtsS1EurwTYV4F4YoQrs4CBrysrKhRkanzyz68WV",
  "key27": "2Gx2ygF6kULa1RyCamsK7JAT7vj7LQwhg6f3JVAqBQY2ajyrpwueZrtZrDJd7aD8dEa9sHXZvRKysV8wRCrvqvqM",
  "key28": "QMktTGRXMUxUnzyRHXyPzxVFEMt18nHkmVTFFEBAayUkoTeFfvaMV2ZgEfMKMN7nhio9a1jJ4pB21JJBcrxFdxM"
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
