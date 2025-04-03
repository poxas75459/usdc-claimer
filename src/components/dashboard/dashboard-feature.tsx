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
    "44YRdNMvKJkCvosWLG661hTozZkS1iqe4nygzqfY6XQSbPYMHvSPJVTjrcHUj283dhRVfu6SQJLPq9ciTvwRd71X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iNhkU9MdUma5SgF9zdVMpWDkGsrTGXbTKMRvhCxvZ4nciv35MGXAH9cTE4CkPKozZKKsFXyskuJDSAiCiSR3bmP",
  "key1": "49vaJJ51C4zvRR366be9MxWchcPaDdkPStfBuUyEGByGs1okjyRn57A8RUUBA9UqXek1YLY45J7GdJ8nJerrXxen",
  "key2": "551ouJTH3jn9VzSNUGMU8bsY2n4ZzMLbprnZNQ3SpTKqNmnEztZXua7XmmuFSqBATLc15DHGtap8oVnTWru7MdtA",
  "key3": "VHRPCJvZgB5uKvoniATLj4XWv98ttPvzphRjJTarHWT4Ve45qymavoFSQPX9PVZoXYrAQ1pCwoYecMtxcDy1Lbu",
  "key4": "25CcsBfgG4R1E1ncvCDrcVwdK89XeeRGU3z5GWqWTDWucZWCVeMPCDNaBDj4VVmAwTgM1Db3idHyw1iZYVYR88xd",
  "key5": "2u69PbMV18X28GRfKFtVbbv1nUh2jKJqgccaBkzXJj941yQRMBHyWHsZHMvK7GWrrJQ6RtbZ2M85ncjQDBwaTPQo",
  "key6": "JWMQLnEGGnFL2MAP3HPRfEF7GwoU3K6Ksx4ih1Lz8rMDV1CvynzbbgK2SpdELPTP39EVgajUPKcYncNzYHbUN64",
  "key7": "wjSjzpqRpehqqtksrp3c7c6GL8onUqjhjXWD2kkJuHxCM8wosGNLw54vka4Pk1D7sq9NiiA5b5NSLwQVHWHE9X3",
  "key8": "3j1sRGVPm2XoZwRQJEP271g2JtBvDtpMGBFcVMxKzjS5twpzWbX5yGVfvJZ6heY1mEd93T7zSErBErkKjsmQEXTN",
  "key9": "RpBNca8yFKTwYNhivNhs5oCfUHMZYfr6ba1RkZ3YTTm9413aWFAfJVBKQD39msHCsTuHts1NFSzGbxeaadn8mJs",
  "key10": "5R9TtJQxUMvgpXCZHYH71jkYSZop9ZwxHBpoUMPFfBrAdmMsDWbMN66Qcbu19HxGUfkPnHxnbePNKav4LqeM79om",
  "key11": "5E9XKabMfUpVEMDKX2W6qv1yr45mzkGDG2xF82kcJCGWtm1hUXLmhPipbnEv86p5jvr7HKEpWmZrwKcdxHKahPpP",
  "key12": "4ok2DKVgLc5WsnZUUaYujmkx37Zsym1DgyAzt6BeT2jk78agm68YxDGF89m9gQ3PXv8rf6kuYoULCJUGGavr8Pw2",
  "key13": "3L3DxTSdqgHBmup3jzAfKmjKN5C59BGYD3gL9q4wVeksBjucfn79db7gJaaDKP2EcUc5eTcgsCek1vwUz6jBEwyZ",
  "key14": "3hFKMYKKrnmoRiPwPvSbcWEJsJ95G3NrzFH6DugTwXs7KnfftUaWzSYrTAZERfSEW8bNCq74kRuBBHyMRk8zy4DP",
  "key15": "4NbtNw8idBVzDWaq6GeSLtVBvtBgfZGXrnkgCtmKnqfSiSoPifwxSkFaVeM2S68itmoP4qDMwVNme7CP9Ym93BeT",
  "key16": "2FPJKcTj2EWb9YBkkSdm53cnL4hudLMmJ1vdCnJC2UTHwMV1eEYjSbM3fQee42rmUg6beQZLiurA1nxxVPypkhPw",
  "key17": "4aRWZMGJxtUt1dSbE7N3D7drw3mvMPyBd1wjatS5sozUEV7Hzedx23eSFAStBRhgeU1KXZU8J8m7JbXHeoFa6GQH",
  "key18": "5CYuBfVWcvPkYDAauLWEJt6XhUY4B582L1MpmrdpshenqF9J3wWCNapBh5BjaonJt6K4suqLtjYzW67XnVwPiuoM",
  "key19": "2RxBERmnnVRTejeTc952fCTZPXgei5UEdUmEGCemXp9jBZHht8jEUKujXX9UnjvSEXHoJo5KAj2bQG7eLKrDhAqg",
  "key20": "3V2SawN2X1gN1TFeWvVF8BKeiPTWqBwXCFHTppyRz2WTzevLKKRELK2paW19AAJr5XWRSZNvk427mg6hbx8zJJX2",
  "key21": "2YRTJHZyL4ZpuKh7jm5umnfQbB76EbpNuNAefnGnEWz1kqjybUK5RX7UAzku1twYwtsUWgWUFTu4QhMuFEYUHGcY",
  "key22": "3yDRe39dnLheb3J8QZgsTZxaVqT3cnXEyTaNK72giiog4KZuKZE3rGPPdNqVxnBeApBrGvhNY9wg1rNFcfVMyJuZ",
  "key23": "3bZQneUYhTXYswJzpoxhedWBnnpq1DWe6t4MC9LHxnPLPJdiQhhEhn5UaVckzUrbSwt8qSF9c7yM7KezUJ4ENXRw",
  "key24": "4X2w9aXvsJFrLGeJkZQEvAuuSxXJgN9oaBaKjTTQ7udNojRHtgGV3ebBRoJw9MqqRUFU23thZF7Kk5SkdtQVrnYu",
  "key25": "Njm7xUQP8JXuPgAuXCwgTskunVUNTB8oW4iidbdjv1hcWfom1x5VQFzhwmTeHGuNVB3cbCJE82qU9tbYLqpTfmd",
  "key26": "y3AV2QW8dkobacvf27A56S5TTTaKExUsBxeDasHvqqyWfegU9vgcoW5tnkEH2V2YmSggZzJfuxyoTfwqPbLvmwd",
  "key27": "rGx9pHQazWmwztXzbtmf3t4MWCAJcdbm5NsXKSeWAaaZfXy8E6vcL5ZZ8p2gtpShNYbRRNf6gVoQ7UHNkxoictL",
  "key28": "24kFJtXn8hHYRsrQKeE8mVs85r11vnUdDzeHPSNycWw2Z9uPnjPLKxBPZgzR364iKTf72UVughKuqCectMXQzBRM",
  "key29": "3ZxmMZE87jE9nTBRQv9o7o3FU7mLB7SsavKxSk6rDZfiNNjsVHSk5ipxekp7aScWBwPKJW4sgpdkPc3wHZDVnfnf",
  "key30": "3ofc9XwrHyJTx96fA9k4tpbcfjTVVE2oqEfEtxkh3cqAELT4uCQkUMXPt2RiNyiEQzPRPJgsZ48eJgbx9Q1LydVW",
  "key31": "2KM18x8tke5fCueAPmFyZxmywKanQeYFB6wBPtJmTgK34pmHqRKa3ZQtSoe99LgvhTjd1NDTgTHJ7MSjrnVbtp7g",
  "key32": "Z8Jg7JmFpxNqUBfTp2tE78TzfVqE2mmLoUGxb4T8cV2qFgQZYrowXWaUk4bAji38s7pHUhUH6EiJyRvyUjHMM7c",
  "key33": "4N5pyA3HtDf8A1zVJhGcyM7zH87V71yfmEtiQucrVJSCpWEpEGyPE3NnnEFVjHJkzzbLMZHShNw7gMoTxFRteA1v",
  "key34": "5QtmnNLz3AEM6YNF2yWomcdbYRVmdSjxEWYLAkvsYmgyrrY1G2gqtCLAxUV8Bsmxt8AWfg2qQ9Swmc3dz26XJLrQ",
  "key35": "5PFzCqHWiprcx4LL4GpjbYjPMxBgR5iJab81yLGTv6z2zKf5jpWx1UzPN1EprVcTqfRmdRtZvNtVmppks8yKntb7",
  "key36": "5DTuycUHQSaxFmnEYkLT8rsGNQYQDuiEfDrtyBo1tuTDd2aDRccsRGbk7v3huGBqKghGEBEHkbMQZfC1EFkWREsS",
  "key37": "2QtceZ8X4UbzbgCNjH11yg5BfDr5fuxzk5b9j9t7XhhtT6gDhznwcYfc8De1a13zNyevg3SvSZeeP5GpYWPz1BAR",
  "key38": "3npR9YHXWNFCRiqs3bzb6JgQzZfUFCBFt67vqG7sf6XDZrRkEdBoe1nwkXetCyrJXYh1NVtJtB4KAcokPNLxo3tV",
  "key39": "3Nq1Ewjs5MYCoqHuojq7u8PWFvDuRV1faMMZdib2nev9FaCnkhATSArmSATnKGPCwJumEkQdS8c2QR3HiAT3EgPL",
  "key40": "66jfkXkPjRQV1QJDQVEJwGAXJAXTnJPMFtBwxTbaP4faCiQz8PY73ra28g67N8fJ6szewHb2uZH1gNLfcbJCr43D",
  "key41": "5vY2AkJRvQsJpqvDiFbJejip88bQyh1Eh58Zq8DusfsXpsq6DuJajKJhtTu5NsvMpB82cXfadwMYUwy6CHZ1Hwpp",
  "key42": "2a47Lgq816CY1F7BtX2wHV8akNAUZJ62NHFyKbUABFBPYgoVPpGQ5mcJgnpFysHjXitgRkPauSLjMSahJqANwxeg",
  "key43": "4EeDYJScoiqaopD2iYrb9cek9Ftj3fpqcMTsBuXXV38GKdjkpEEdM3ih5hAx9yWJtAf58PJghU5GdqagP4NBaTZ8"
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
