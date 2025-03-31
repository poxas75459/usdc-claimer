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
    "4waRvTP1ej5xz1zzAiq3NhPzVbQP2YBjpXigoi5UNaQbaC55zVM6wqhYUccoJwf7dehXFyQHEdQrEvXhVaSLNyJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CCGZ8D98cfZF63q1XdGE6H58MAvKZUMRaehp7ZFSBDEaBCnnUnVDEVYN8bUEgFzTiuHMrg9RELT5V6BSCesNFoa",
  "key1": "5swViDQnJnEEc6bfPoEypiZHWaBqo5X1ET9q45d4dhq1MxNj8brcrxbcXcez5UJ8kTLoqnrBTUAXx9qqxa6LyzcC",
  "key2": "27qAVwowKSqEyheXex7QDTU7ZSgfGZkQ54R1c5X1wkMd6z5vXUhYjqbnh1Xp64oNNoaS2Nhkv2ZJub1GCJJdAmiZ",
  "key3": "3ZnqMr9HYmfwiGe3RHLn9CArm56Rt3SiUgVi5k41PEa8SpSTEVrSEU1C1R7rZY6yc9ztzReytE1EtvaizryTcZdu",
  "key4": "3ZCRCjJsf3U3BKJTAsW5WQM7iCvCBa4c98QSLBEa3BYEA2fzs36ZT7j9q4dQvAq9wtkAXGsFA4asaFvYicxBH56r",
  "key5": "H8KBGFTv3U2aooxTSPd2CyuzfQZYx7QxjWcBpwaLEMvhDEQ4FksvAArXADHjF9tbs1XfMTgcfg41fyt3MmyQCxD",
  "key6": "2ncJfccPtB2eoEetKPegEJB9MFeY2NgbS2o6sUqSRBQvbryWj2etDM2BmSCDSLwFgtZFCTu1TG6yGYyQ7SsLsgWr",
  "key7": "3iwPzGxqPr6hfJspCJdM64JFfQLyC2JASoERqjaCtRsZUSAomDawm2D1egPhWDhXdtnYJ6xZY9H5yCr6i7ygLNg7",
  "key8": "3Povct9MHF4o8m21APR75AvopSf4RHxSCQHrbXyyVJykyfwEUjuSxBdjAiQniJ55jGYGHFfDGtcHg34FGhU5ZZpP",
  "key9": "25r5cvsU42WVSEGzR7dKxSGrBUsGUo4ggRgpvFF6WFzaR8nvmQobd9EC9maXodyx2UXNP67arukNyKXnF3qToZoN",
  "key10": "4XBjbXX9iZ6w2t6RUfsXS4hZZo4mqEL3mDnz2sgGXgzEV5XkiuUUKAB85ZqdPNDaLiMPnUGbYMsqhVPUdgqTDAMS",
  "key11": "34VFkdmSd3ZFALhBFwfcAUU9zXASMAXXuWvCnYipmVfuuZ5jWMxfkxv1Q29mFsK7kVKPfo417cCNGaJ79VuYbaT3",
  "key12": "SrJQfgnbKudeNMs8BMby3dkWywQpNpSSmhUmbipQ9QcP8kS4jWovZDrYCGV7SCzBDAVE7KfnZjKVRVnriES515K",
  "key13": "2Z8vGYWXaBYYZkr7joKYVQqRnzVqzoqqESNKo3bJm68p67gXSgbxQkrfRVoi5tqRKCqmLzCJksBQZ5qC1GE97cL",
  "key14": "sMSgMRg2HqVeR34Pw9G3uoUZKvPiezaRuhEUit6LNeQrJspj2HQwMM8QYJgFQEPWSUUGqwD3mx6rdW71ahS8S11",
  "key15": "4HJ4BVfHMwVfhA8c3SU2sNRFKkHsPntoRMd8MY35xTXPfvTrZjtn4szm8a3rd5H5b5498Wnx7fxV4gSsksKQUvM1",
  "key16": "reaTRHhxATV6LeAQVYZbUoANgBS6UpAmgztBTdbi8gjhPZrTn3Zvjxx9nwqC55H8Prob1wWQhfygBnbfSr1KWrg",
  "key17": "664grLV6qGwizfAjC1UoBktLnA99qasQ7YnqrB9JfySbW8VeHnmwzWoAyKfEAxiYXJKeNpcr41YibRpfyx3F41fN",
  "key18": "5gAmup8aqPx1yB2mAUHqLRUZYrKkUaERJhfSDwFA9uKNCMqJgP3q2zmNnY4Cbqb7MHfAwPBhW4HZtAiENZrvXgsJ",
  "key19": "2jaeyTqPYAqBZh31jbS1njA9Yoytgcgsci6NvLWQi3W2MZQjXa92okVFbSAmNhULcz7wP4PnT4bjReUkdmSjUAFH",
  "key20": "67M2TvawMbP6FPNBYinPYF6NqPnGVxCiASMbNREydnhMKNk17iQuPiP8a4a7fAMrio4z8LDoHyqXttBoWKMMzDPB",
  "key21": "2A23pPyfucMq7XtbHya1tAmm3ub34n9jc9kziDHVH6oVTviuPg2LG6GeaEEpkSLwjhKcVWqLD9JuuFPGFNACJMHa",
  "key22": "gHxkCUPYXgJhKxfrmhVZmPCXLRHEstj8W3Ea4KMocbYTg9n8rCkjDULvZKGUt5y1XevuXodo63RG283CnRt6gzr",
  "key23": "2rzzcgBij6mbKJ47WhZBWwrUq6kSRwvQw7cbaYrMvBGZok6VSEhvBFmFighR88XEsLUbFH7LSxZyAWUDLqK4pMZj",
  "key24": "3KzeQxMCzRW9jKruMRxHeC93mrcCBKA2bQuW3ZgPMhb1kDsx1CS4uHFgYss8vceZ7rJGeLnaZQ7RyQXyiQFbQVvT",
  "key25": "4J92qUyuyHxbBAKbdpwsoU6aaHbLnDPJsSdyDVZX78h7N7SsSDcsbRzWwqFqWER574cWnr6jK1xfBN2XCRqbAkEF",
  "key26": "59v4yT2PhTEu9QTnrVCcMWZehEDHvpfZkUGYQGiGKQBJgVu8gqZc8WzT6TEZWZfEPYGEsbSoSM8qQLK1dCxnWQci",
  "key27": "5RfMN58mZNBgVcc7novCHRndYAmnWRErxyc6kMyYtszQwtLarh14ctmNm6ke6ndEU2tWhMtHt5JMYbrFVocqMxdU",
  "key28": "2GWFwkxngu2jf3JwiSUSmcLeerEshCBFHeV7vayy6Byq2FHWZsAve3PcqxPPKSi352tkgkrs35k6UH1SEMJJwuUz",
  "key29": "5UV5EscsqsuT6zocN1bwXdKKNMnsDsAJAGPkLTGsDK3FJcvBWo87b5qMzXQiLx8e5C889Gv36rmEH2SCRwXfvpN2",
  "key30": "5DzVsPr2yhtxhTJ5ANLaEgnZk19b6EZhWGfKwiuPaeUUBwkk2yDZdGieyGkP3kv3evqjqNLwBbn1MQfyAdbwMofF"
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
