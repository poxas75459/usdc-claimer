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
    "2thwKXn8z45wYAx6uJx4MEVtqoxQMBZJKvzSj3meSACFsBdVDEb3dsL8hVzSi4gMVe9UJEa8114oAdeJ8koEvVk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jgCdkugBMqVz6W3hiYXQ7ccKxCSbxK9LgA39tUCt89e1p8412gW7REGnfS5BLP2JZ67Xq69DHkAiYGt7ESyDW4K",
  "key1": "5Wc67FHmfc19o3Tx9gG17qmAHCsC7VYuxRSaZ8eFFK66SXCnYCX7ZTqk5ahJKU7MYj7iMyXnaAVieYrX9yp6vEaE",
  "key2": "o8hMSqyoKueGkyAQjfJEoS2wvaseKgQm2CvTaioP91HjXXamJEMaX3Et5wZyTSYS4442UfWoKhsog8TyWHgF8kK",
  "key3": "5mHGXHkhKfow8eK6Praxt7ybx9YrD8JrWroQz87s6KNnU96VZXcqT7GvoZb4pxE9kjXPMvaandzDg6BqaQPDEB3v",
  "key4": "5KqMhbohT1wLQJdeSd8dMgEKvhkTKJQGnFLaTWwChkN8ume7r6mTyYhwEoWM6Hqmuj4J4GMshASwzMRtiUiyEkGE",
  "key5": "4pJZBZjR4JYeuQfCwrjTCXtkNZLsJMVMBzCpcUyXE32Arw6RmHS9vgeCNthhAZTH9WGSaYfUzofftn2fD5JzwiC7",
  "key6": "3vVWkCtczhWzoqoVYsyiaXMM9xDPxnYtnvGdX5oFrEuZEUSxL2Ng1gmg72PjGSx6oC37BNT3mdoZVrRwQ6SZ1kFZ",
  "key7": "3rAiity36diNbWWX4k9PFj7MVTabyJuszKSj9YBYtDifsdLBXFgg1B8GwAbAza3rbtkMx3BHPfP2A352aQ3sQocX",
  "key8": "khCs5uTydQePCB481Aj5dBKy4XAG15Z2c52J9zSnvQ1r4BWPDyPRe2iAGrX6BFDR4psf7zfa1EhkY96b1nvc18u",
  "key9": "eAe1nbyJCTbP9hvVkgBNSdVPVLoDrESbxYkNjE9DiyFVPisMHkyoFS9EpJ4hg3Sfao1KVtFqMj5daXV5e6KaXhv",
  "key10": "3y4jrMs2vu8WWZW9Sr2GaGHnkqJCx2PuBGHUPSofUWh3nLALQEkoyy4AAjbfitZ2y6S9gW7qG9oFCivxeCme3Twd",
  "key11": "3xa7wes2czvEsSczxZRx2Jp6qpn4uRhWAzcJjpoxTPKGJvRjgSUYRCTYrsTTbDScHgkpSuSSCCAedUKRdbDDdh9W",
  "key12": "5xoxhzc9SLSH8yBsTWJ76YPbTBPbozWCqk9eJWCivzUBZqeSkcVMRTp7x3GsGKChZQjj78XZpQzoxfLCQLetxHDN",
  "key13": "5kDJ9qNSx3vu2rWD5CLecojwYcWA8eGxmgFnXe4ffSLqEzqijmUae9FKKJrcbmJz7AKvLU5HRDqLrxkfN1w95pW",
  "key14": "5wMhwePnNooHt2ZY2ZT5W7QbUpWjohbK1Dqt8HMoRAydqLhTw38JR1jcadExyv36Fgffa2PHqQ6abyZcHZYX1etS",
  "key15": "4vd8QBJuwkHHDKVxfDXDj3UuYoCqy5Y5fms4SC5diD4vJwFNTsuzMbAPsNhGdBgLwDmCPoZeTdewpKQsFT5gaBDg",
  "key16": "4FGkS3oBC4oJWXUTkV3NFJ5fBKXpGrEubuXNkhJDDjB72j7KGYZvhapvzffxJyWrbazo8MPMcSRQfuFYHs16Evqc",
  "key17": "47SkcdJCa6XPXaU38HfYLy2vNG7LyDhpzsNmK1x252mDvG4drd8iWusVWs2LhdeFjhn578nh9c2K5Wy8PCWbk26T",
  "key18": "65cwGqrkCzJLwzbY62yXmjFreXmyyU7C2GRcc1DNLhB13uHNcbgjEzYEGnPYRNNEMJdsVqWNYWyh5uhuojg7EX3h",
  "key19": "5i4uAc5avYMnoGW5KNRAEJqwbt5oUbAcg739ARPfu3oEWdnKwtfw6U5p6PKzsFRj6ASzzAqT5Xxxt6WvcUG1e3GJ",
  "key20": "5QraQpKRExbCdkKVu1bJqU6gGzjBS2bCtwgh7Roa1eoeMRxExM6Pbh7TvtPrwD2nBih8rknuoYvEiBYLeZUCJj5V",
  "key21": "4Tb68i38vteDpRehK54zJJcY3tEcmTJVHZwW7qB1G35Cui1QeSzQgZkCYzhveRC1EE5Z2XWopizSwVno8FdqXqGs",
  "key22": "4nbQ8duyFxmWxoUAVhWHAgZcjt3rSe2m72XVWSNPVYGDNxeN6Uzof384MuGCEmA3GEXtanaQU2PV13UAu55AxVre",
  "key23": "3CngS8QFVzLM74vepUMdzStS2y5vraULU2ap39ynNrbTd2VovZQrRuoJGqZRgpBKzUnxxh11AF4EiyAbd2UnL4pT",
  "key24": "5FsC2jS98Un2SH5WJptRmDAcYdjJmUY65YuiAnMUu7fTL5aG4mBCZzdmf5avivuy9KvLygvnnnEkM1t1V3DnJCBR",
  "key25": "4gymmS7AgJ2HPyV1pszk9uq78EMSnYLskXoe4K9Kjypy2rvHt6kc7VHBmWCgZLTNtSGzdoqV98EA6pomBT4xMuXx",
  "key26": "41vLa1mFTdxEbTLwoAf4WUgMKQRZadb5puT36kmmhPZuvokhwz2nPwcPiVfCPsrH2yRG3j1S5szAfciaZ7JXZvx7",
  "key27": "3eXFhHAVAYWaQ3hgXi1PMmybrP9KqEeDWacmCqfrT4QHGNH7vr34U3D2YA4nr6sm8uMYXeW7gRhQbN9Lawc7WdBS",
  "key28": "5qiEMa5oJxth7HVFTuZzUEdvi97ekXmFctZEuXMEknCSaSifP49cMXL2ujBKuUCAWsfu2ZXCC4chfsFpjjtKoND3",
  "key29": "4f4ZVovzuJU579nuvxTkt9ygzJNyTh3aSMYj1n9Lsq9wY8wA5zANmYA8LUfzWyHr9X4hVmPBiPiPp6mo5inaStEs",
  "key30": "5sNKL2dSnuji543YWCSha2RDnURv89CyGRiKW4YPeow7pE2KRRhn7GNzPPojoaf3YfvEic482v89KBxTQ11ThaTq",
  "key31": "NMAqCBz9kiobbmS1CMv5DEuekWM5RJ3G6F9UDcSFTKGQ74VFL2JV7GEPCKbgqGHGKVayCz2V9KeGvo1mVLwn726",
  "key32": "3jHkb4FLu4cga1QeUt7uFW8ELmJjuvFPPqefTEQgvqA4S4dssFPRt2Mxy98PEPACexrBfTk1toyTGnPwEaRsFBWT",
  "key33": "3zpqiwnXpANgRbKts2ESBEdnY9B6X23rXCAM1EHHeuYNm1n9YXweADzxC3i9KXsdaXFfb6xQToZzzLzkiudJJeUq",
  "key34": "3fMdocLtSnu7Kjh5z5Xbzoo3Hw2wkTWon11NJaZdUUrKbMvu4dyJ4PaHfMV1uuZ8hvcMVnYSSiTVXVj4Un5Kh8CA",
  "key35": "CjrkgpPtnKyKBAZ3VccFays7oMWetwZrWUH3gCZV4gWEris5NKr9gEfigruwoSCrNc3qfYdNsKy2Cz5xh5wcG6S",
  "key36": "VvWYeZkoAnGKyJ6AegFwGPcXBQ49VRL3oeQbpLnFrU5WaqVM1Huv7pdZsqaQK4VhcMHzrzD5zNJZchMMsCGoALd",
  "key37": "5iyTu3gBG3vqm1oxTsGQ79VJTdqPNUKBtHtz2J9qJdjGMSAc2prKpQRD9SKvEY8mHX7aoH2UMhSmURiTkcYvgp7B",
  "key38": "3piB7HMBcVm5EFWm9KpWoiTajWfSP7vLFviU1A8NXLrkHgediGe3wvZ5QN8NUwbeq12YMZ6HmsSM8E4J4VC7H5cE",
  "key39": "65oDs98iedFpwHTxsFLVarMCY6hNFmLFRVLDwXxZ1zwQxKGgfDXEbbgf4Pwc5NrP73TJgm8kWFkC1ytkVMoL5563",
  "key40": "5Sf4qQKtGz3sxEaERaeZ7f1UprJyPUhf3wKYnyYQLtQT2HZucKrJMEDRSaziDEED8t8JvoFe3atNtSin91uPb6kG",
  "key41": "4uxijmi8x4RmUZXNJbSfXuD6sbxj6AnwaoaYL2TvKn6ejcx1cd6dWkGad1vbdTzYBqm93xGZu1pfNQ3aTu4qW9dL",
  "key42": "59UMHG6KEeW2JQaVzyRvfCxSt1WWdkn71DQ81iemVhsv1CVRpS4GavH24hcFmW4bsRVAJGTNbj3ZewtZw1EvuSEz",
  "key43": "5C3X8ChzLtvkV3LkQdGHoAty4pxyLWx9AbK2ZcEGSjiPD6hgT9mYL6qxNJFGQiBiWo3FLDZC9YELS7DcfyMq4QXj",
  "key44": "29uhfbuJQw9Rfr3NNsNkJbFVeiixRtWGq1knF7MFsf2KAxN5wrqFdQUjkPZ12RvuQCvqQwEFMki7jrmW97pcq99J"
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
