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
    "3CzQ6898sxfbEM8iwFKS1uTdtcf8rLwDB53AE3UUrVQ8eDUnMg2efjEhwqfWtWpKGkSdND1cviNzbCso3Rx9EvzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56LfXxvHDcNRxgU6zeomy5VtzMAYaFZx8Erf1WQaex1NdnZ1CwPpkwZGcRK7PoiLpMT83GVrVxGAQKXs1sTiWLNG",
  "key1": "5MPxrZwVaPZU85jPDsqpZC71hW7sxZ2EeXDnCZhNdyZZBXmGPvVz7JG8dr8LKMUnEtBXu73W8Rgm7XZekDQsuU4H",
  "key2": "3dVMZxs5grRmnFbdCySUageLJr6ZrU3UZRUXDu7AJuuamuetuveidwrcCeeK36FptF4TJt2c36MJ7S9638pWDiJK",
  "key3": "c5gckRdm58cgi2NXZNYz1ADJXyQ3MUhmPy8oTJPF1XrhnhLcBavunEYBXRDaRxwfVmu8dhQEHSyp2W5g8mYatAG",
  "key4": "61FHpHn8hrS6TPCh6VLCVz3yKJmvHuADbk4kpm27PkN32MFnV9JgKwvqunmhtv452F27yZRUJ3XQTkGauSJWUE19",
  "key5": "4FqtFGqppEKgFMXQNABadZ2533xTzMz7r5z4K34L5KNoNdhbRTwd6pNFVDdjegZXmmW8UvrJ4L7La6jXPSvbud7a",
  "key6": "42k4sw3QceSTw2mq4hpQeoL5jMxVLUL4qSjD8yWVgavtc4Sck7owSVzTnc4atD5mg7AW3UW4DcWXFYDoAoJbQMFL",
  "key7": "VGkpLVudnrCNUmtZrTFFcuLXdA8KfkASEdBNhSjHc4PmNXZver3EYHUFg5wc9WckA8MDnHD1qtwb6UdTtTEMQL6",
  "key8": "4T55Q6D4dpPBeizYkCjZFPfpDiJhBz4KQdd1PbzvPAg9wNAWoorXTjdkgnmTjWbmdkbuhwN4r2ih7VgvBiUpzfva",
  "key9": "2TergsSUVCyBt6pJxpJYBJof5VCNpGmNMhA4prtLgRYMb2id5ahpvtPNqKWTZjWQrMDKMfbwRnNzehyM7qtfNF64",
  "key10": "66CDPV1JThs8VMUpXjzPkefwnb4k2PQ251nzMCgVoDUPHWQkFkzxbiP1tcEyuDJqGsxN633tbak1JSLrLFNEhNPt",
  "key11": "KhQwhhHnZmL3vgBZQ9auqcaWAGuEAXxrGnrukie6J6SLKhB4T8XZxSeujdTZd3h4MBQtLgfLT6vccG3THfPWqkb",
  "key12": "2TjFcKcHRFZNdL9EuG2S99eY4Eeou3wbB1wgHQ8A7pE7MQqMFeeAUKABscAEwBjcY8rMGc3bR7nXmdwiCch5pGfR",
  "key13": "5NZbpXxrTZfVEtGAN5rAr9F21Qb9GXynXsrnD4wR3Cqtgoc31NyeK5pCWbyHYdF1JCxGXnUT1pPtrTR49p649ZXt",
  "key14": "5R19QAaFH4yaLwi6HS5CEpcp9EfY3JiB8muxh8gphA5hqGvoWujdWtURGiA6Fy7zi3PVJi2TjvB8oAGziQCAKDbs",
  "key15": "3trbF1ig47mAn6bLbKbWT79JrYEPbDTLSe2fR7aoffcAnReW9JYF785az4GRc5J2BjKmwPPe9C7JopwDag2skjNr",
  "key16": "3A9HHkgavpEr95pGci7E3rbjXuSQy8b79Uiif5oSRx6i5Zexc9caPm9kFzXatwp9p4P26byz8MGu7KNS4o6dHFjs",
  "key17": "tiSoapWhRPPJTpbWYQpWLszEG393CgBDJTecV7RL21UCywFeFQo8AwZQmfPhjRttVUXaLuVB8HBjnyBEBWSVf7H",
  "key18": "2cmDJXboWskoSwZGqUsU88RQ5pDA6uXdCWT7NX7umFTpaEAno2MkXJa6sYBdGYH53hSv6orwpAgG2SY4K7yYz2su",
  "key19": "2ZHYG6ivAHR68bv6TgnsLmsPWpK946y4yK82Z1q4wGhjTjsBpsPpspSFiTvo2QqyUDxFyBXq3wfKakQzD5aWpt4D",
  "key20": "2BFu3HYhTBqUeuBVVzk6eqddyyd2CUfhSMGYwKe3XaxgYXL85oVBs8ShMGq68551ddrd4MxPEMQeHshSzJzhiTN8",
  "key21": "3X9NVBrJfEBFTK7ZzikCL1gFFSDh5tK72DogeGRBRqA4GD2mzt5XvscQtpGu7VSGQUBLXYtQLBPTmtToACyUsByK",
  "key22": "5zv7BiQcP55USiJXrWF7wa22bQvqNNehkTgfqXAXA1ycDCivY94Ln2GN3WvgpupJzrMvUoNQNWyH9JT9eR65e7t5",
  "key23": "4CqCznfEvzzbDUZENMhf1ii7GKEFZxKGw17Mh8Nss9na9idNT1QDmn4M6MPn6XJMQJghi2tzMa2bdWZBLaRJWQ4a",
  "key24": "3xKE6HXRE2USnJ4wemseLWVpnxaFohqjx4RRaqBRcCgX5YSnYcJemRgfW7Hh88S9gQi6yXgnrMNgoUFvWTDJVUFe",
  "key25": "61p66QUA33kK5QFp9LnJ4ru51eYxAWxC63oWJiFSpExwPMAVy227P27GviSLx5sSyrrbhN1ufqa9TZgT3SEjquhU",
  "key26": "3qPKoqiTAoZsRjije8jfPgbkxQByHWiTqeaAdMFiCoyy2bV9XKnr11Tr6dfNZJ5CC4yBBboHjxgv1QKHuHfdJd18",
  "key27": "5zvhP3FpFhNscQuxVMNv9hPZRQrPtur9topmd1GyLpyrNVSPtVb9CHa97bcSkHam6ZJMscDeeXdDRTuxFfneYUL4",
  "key28": "63mLGd8bhxTxq9gd1k5rDpkpEY7UwGCcQAKTfwTLTD9MAEJcuiBpzTcpDgcuyCT15AYMP8DnqdR2jkwB72sXo8EN",
  "key29": "63L12rc1qdQy941U1XSbM6Ecm2dBCbFoHxMTuA8tMiAKnZX4Gi97GwxDtdXmik9uM1w5YsE4xRW9w849YSfu4Tn3",
  "key30": "4Pa864cCVAjqgK1q9RL6yyamWT3eEUhABR4XSpupQz6qVb5cPAEh6mF2t9PstCg5NZXg6sL9YjqEgfr5A9sJvGMq",
  "key31": "2YzvDivVk4kT7nsBJycTVP128G2bVPS6iwR99i9RENefgGHNug9g523yb9pbNq79upi6rRhc6yQyjH6xXyX8haPQ",
  "key32": "2KvRdhSMWAdWH5wfQfdcJXVZT9JziEsqP9Z9o9wqcT8r1XHUFcJknyZgKe25xPcTPvaFge99EsDBGhmYp4H3HRGQ",
  "key33": "2YeMmR8ivMU9Uago9Z2c36GoQkXMHcthn6xdUXwYAJpjbLsqLZuPR6VopuDLxvqXYUyHTz2xTqaJRoKawiDGKPFE",
  "key34": "5x8NkLwQBXJMzM2ZRR1CVNTn5GAR48qbF1EhuMJsCHzqF3U1cApFLHkao7bLYXbqa66LmffuCom1NL69vCKFS1Ve",
  "key35": "4LEJyzaiShkvFvB1uoeCugy1uWGoLEqz6rRXLCn2XmPEGVD6EDkuwc4pRRSBSQpMm1H8aPUkmtGAW6cqZnymqacq",
  "key36": "4iYCvm1n626CnsWq6dKDcm3uNuyxKSDxcB5dYYXS7VJ6Awgpv6PAmKQhTYBbM2t9vvq9FyzaRo16caUZDHB3MMiW",
  "key37": "BmJ98of4SXVLGu6dvM9CAVtBXytcwMSJ3wdgwxQZGr8gaYhZAXGc8bCQNSxL5FWa1k7jmWTtgf9wWWXW5duTcjs",
  "key38": "2zBWK6ZP9G45aHBJuTumHTWjjZXe3fvSiv7mq6a19mhib4tovJGY1xtxw63oa9H2VvK7wjm6qwnuWh5iyseGraiV",
  "key39": "5f94yMaimhB1MPDWWjLJ55b6AQcMSMexsEDBnvCoAQBvva91qp4m8uA9q3SA6k9AvraKUmcJYVhj8ZmhSsy6fuq4",
  "key40": "PAuce3m2MsetPPfYX8B1syYpB33D8hZMDJJ1GGRs1hCX1eJEZbkzeYoqvvg3LMLhB2BL3AjwrpSuHdjaDsdbyV8",
  "key41": "2GkvJ1sFemjXBN2jEMKfwSvM24bBN512hnyaWeUo1664KUXahLenqZJHq2k3Hx2RFzFrGX6qqn7k5feiHMHfEqoJ",
  "key42": "2uykJT2oKYsznNi9RNTLtquVmt72j6Pn8dudPL9X1CS8xYeiApnzC9dZP6W2Dq64jKPMcqJC73oHZoxCsxcKs53x",
  "key43": "3n47y7Q8bLit4dfuKmigNCcn8dafPjqgZqWNixkjGTGJV6f5HCXchC1px4cTE6BJkCteLzKferAMm4pCwx2Kw77m",
  "key44": "4K8qsNoJLxUZ9K6fFTkfi9P3g4gWQ1rJ1Kj3MmmQqj9a6qr2SzMe7wCVAek2QmpH3rsLNTioBh9PirVDHixS8qrj",
  "key45": "52SnTWbnDrEauhkRfmK9Gj1RTaaxezBDQ5ApUA4LrMtZQD9kNu31Pk1jf5qKd7XQ3YQvnJAqxrBT5hqmvh1KVk5g",
  "key46": "3bk77CwsodweeQXp7UWv48714H9f34XtdRNqrXDTDDRP2Yaxntm65zHtxDLJg85H7GemKnrJxi9sh5SpazWSck2a",
  "key47": "3YvD3Q6Aj8xVNr5kAVTnhDWurf2FSF9XMKYMoZ1yP56efStovarj166gXKG2uZwitK6cJWx42PQ93B6UNtMq85KT",
  "key48": "4rBNrqBEsbNTbvYHtgpgMurp2S41QRAuxrAfyDR1acZBqsayH3cKZ2J7pJEesgvhVrXvfSBYUn5MwpYYkyxbSTC5",
  "key49": "5CcyATLUkG4Uq4rRWji25LA5Tfpb8a8e53thYTezDKjWAip8A4iGmtRpWzcxr5SzbkgGxRXiMJhMUNrmS8jnr5WK"
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
