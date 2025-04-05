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
    "5K9r5sGVNfxqBLiwYjQs94skb3h9BsVgoyX1HF6QY7Wii6SfEPMGRnGsqVc3sZVbg3P9TgqjxjosR6sy78oPjJSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PyZzaetHwhX26gDrWd2n3YtQEWxSTFYnh63q9MiApYqNmW2XFZuaFYFGvohjpGN3hFyrySLRZo4b7HQP7D2PAna",
  "key1": "5ZnADT73TZWydmQb1epSPwtUaNoVQG8yCJ8ckz5WpPfSssdKCKv8aRRDNkJRbxkf2RU4UCsVBVi9ZhKZcx9bSG3A",
  "key2": "52AB2rHLDDeG7Ryy3nxs4x9Y2BsBPEUF42sk6DBk3KyZXSvtw3YRCKSNAhiZgR5vn5bcq1DYgUuezE3RMWQqwdu4",
  "key3": "493ij82Ej32Jmzg8eJ1cVuNjKhbcUh22YnAEVJkQJYyyqgpet8sK6iWmJdFNegG1nTw77BqH9TefSX11J7Lgm9pJ",
  "key4": "9g91G1YucKhnNKQNiityY4DuJYScXmZCHupF4io7Y1NHkdzYpg3Tci22nmDU6TCGmLgreXMrhLdZBGKVH6659cL",
  "key5": "3qs5RMyJcRXLcA81pYN81J2noa3w5Y7sxQoNKJm7n7A26KvQjfmT8AqEMzSU9EPtEbTAtYE5S2u5ZJprmg9MPDvT",
  "key6": "4GgSBdpHyShDuh5LhcQftLc6o7BKuHNADLoU5QQf4x3UP9muRpMqFAn8uguqRBnnNXRJEYEF1sYSR4Lf4VMnnwXz",
  "key7": "5Y7pYKXKuTB2bboYFVz4ixg3KTCXkMB7cupdE8NERcSDA85CwjA8cTGsDh6XFsRUrWQNRWFzcxJZwEoH8yb7qtoZ",
  "key8": "2AuY4fQ2hca6PyZVD1vtQL7ZGTDnc59PUGzjj4ifjn2MWxgRGpMEzneYjbCjrAFRaWaXSimmE1GNQMogvCGfthr4",
  "key9": "5tcUrgngpcuRrnBAHBckTc7Yi6LytdFrJYHLTXe2yAmgc8Td5Rd38c6EcjVKFXSZ3vdCf26kkDc7JRFNJZVzVpMc",
  "key10": "D9h81jhKKMuNcEp6WMuGhuyoYziAUK1q3fhGB68txCnvHNAQR2q2fZy3MhBv6zYq2VxfVBQGQWuHszouoCUSHNv",
  "key11": "4ua23NkGaKB62yfG7Y6NNLms3vbbgBY3FCjuSUhiyCaMq8PTRxJQXo2uus3Pwbi3nvGxqq43xRG18SqvGykN1mGN",
  "key12": "4tcp35rfovJ9JCzx5PhuwBKQAYbewQjH89orq8oTj3srd9YRzqMRYd3Pt1a1ZxLMGmJYCyqJ7vWCavNgdcwZqrof",
  "key13": "4sUwTSzp4mt5Tv81ZBwBkciA4XNFgtnCzBFtcQnRpQrDRdzCFXW2G9E2A6bJAKVmFRYo7zpArp51FYVzrBdnR8nj",
  "key14": "3y6VQMTrGX3MDsHM4vwgQSNKddyQzrdNz4kZUNFkSeQ6x4DUrMcao2tVTs55foJMkC3ibiuDLjV8JgjX2vB3QgXY",
  "key15": "2sy9iQKf5ynWwjXwjqrwZMc1Wx1ayGcfMzYbK3sudrMefBJK531PXAwcRiD9WeLTB2DmzHNfanTpY5YaYuK7G1ev",
  "key16": "qVuHEYvgMfCEg6wpaEDuMMgMU2opvVyVzq4sTGX8urXUZzqkQ12eCyoqKerVGFyJh7mg8JXXMKPfaNUawJYhENV",
  "key17": "2L3GQyRvgZrEPyzwua5Z56EUpxV9ZDKjtgiJydSu9NMNCeFQvUj1M7ovSJ1Wxip1zMFSv22J5Z9gnXWgo6j8r63E",
  "key18": "4A17aVEvux5Z4w8bxxjTXxfoFkFhzZyrwmPLZedaMUzDiajwitPgXb7cUfA2R1qiLn767AYmTosqFq3rPXH8Lbx2",
  "key19": "hPPq6EQ1MscYNJnzg7BHTJPBHH3kJzWhgPVDpDEYsT3yRzaRsB4E1HsgT564dCb7nKrca7gc6pEyzULFqJegGv2",
  "key20": "4cEurebZmW1B7ABi24w377Wcn6CxjK99U7L7awSXvaiXpMEujbLdm9Sh72sLX3xGV16FT8j6nDkYuMtnSbVFmJMA",
  "key21": "3jK8jCDQsSZnfVe4FZrCt86QHh1uGESXbn26f9kin9t3XTpHMRTChF3CscKtq4fMuGxMMof6fdE2NfyvBTttjNUE",
  "key22": "Wgkgb7dqWDLUpjTJXPozDqrjD5UkUqEqW2hxYS3KPQmgsvjc482Z9d4A8NRUbSh75so5DaKyrfL1yf32y4fTGmz",
  "key23": "5wqFvEFfELANHFzZNZzixuiDNaDiGmgNZN9Z7XM9r7FBKkf4vTaSD2qvDx2seYcAbnbA4CMLdy8HRJ2GEmXEP8mr",
  "key24": "3ZXwN244qYaK4naUiy65TSXs9Mc6UTZ2foYrNRccga75yn3CAAiXXSSShkqHsrnv8U7sCEWWZQBCnUfzKRFoL9rE",
  "key25": "4TVZYBPaURS9gdakZC6RKKURopb1UxKjxE2w9oWU3hFdoVSEezT6BpT5aCBKKivThfGs5rkP1aJXPkMYnWUh4S3c",
  "key26": "4DhEhywFvB5MdQ31r2vq3AC3KsohpfM4mhqPmShzM2cTRTCqAEFbHjCZTN7ffNsVtYZ1mY7VFUcWp2Af9Ve4HPYE",
  "key27": "3LPAQs5xbRGFsDCVhg1WZ9918RgKs9PN8JofRej3eajMHNBmJcbrDxCGw8Bw7Y7M15c9Tr6iGp1488bDb7QDqENg",
  "key28": "2xw7eu76m1Pz1XrWxyq2BYvhVcsf7XZdq1iLqEoVT2NzyMAizDBPY1Nddy1GMy4PkwW5tbf9Ruukshco43qZeNx2",
  "key29": "4ns8rj569Wae4d7F8yEmiqArTWyqPTbVpSRLYQggTXtyAYAPWnthcHDYjdAyPUgHBi8RZLkponhzvAuAsjs8pzb9",
  "key30": "3mRCMxqMak6HZeCP7Y4EXsZ8sqhDyNRjXkvK5GBxF34cuPbVFafacMsg922HasP2GSYQLf8ioUNFi3f6U4YUFjae",
  "key31": "yyQpJXMiGQLTVH96QQW8AJn3NZuRRYZAtF5qDTCpZWBDToMRi8xvCvhPBY1DpWTK3goWH1NexP6GkYMtyYMp586",
  "key32": "Wfcjdcf7qkyT9RviTG83PcZgr5FZ9rWeGJUqHSGjnqgS7VWDGkwWMr7vqwv6qHRezBEZpbcTdzpUtq6RPBmpqPZ"
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
