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
    "2MFSTMDxRowr7hEuKaUxVAQV5E14c5ZSWuDY4qp6TbUjQV75NNJaBJzWJADZo7GD23c7U4h3KQQ2JoW2rYK8afyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pUJPhaZAEXHVXnDo9zKbNyHHfV3RDXWMn7ho3jVnKGhDjY2y598rxjuEYfYmvBRCjifzTVYuahbjHpj423ApLAV",
  "key1": "2oFvJeTTSVhALgXnuef8ViUS2FKfCwMC1fHsLzen9jAVwfTdkHaw8qa1cZHZF7uGPV7ez2NJbXGW7LrGBdPXJRXW",
  "key2": "3foK6GDvdFthGMqWtqorwUZA1aReAGYMagpQF4acWsypkdy1ngSiNrVuYaW5FHRj7XmYA8RXcywzLF2X7hZAYECU",
  "key3": "5yvSt3bP11NYdRkW6LtzCMzZ6gKa6NmrerJFVU2VDXbQ4kP2fKU7j9Y59oc5Z9um6RuyLKMbFPGz4mHFSuLmVj99",
  "key4": "16vCU4cpo5yYRVhaUQinUUDG1MR1pLdRomA6FeQTRgjq879pPVVZCwkR2sn8wDN5gx9FevUPXtxR3FzLXMQfxc4",
  "key5": "221TntJJUKomdqk1ZHqki6r6MbheSXPHEMLGvFuZpL2Rsxj3BTNtKfn1eJsduchEEKPFeqLsjQK3XhvBTFAJQVKJ",
  "key6": "5GbXdBeZzkKPLjFXQFPgXvakm2pGDnMMqNftMkrhBzZyg2L7Cvq39wYDVDUy4MbwuoW1BSQSMWoFfsfp1P1JP2V4",
  "key7": "2eQrE1NKTrWKRmFyKkhmT7bbGzwWWcCi5iuTXpq63yRQcJ9gbNqsXr6THGfkkFFJcegLSMb8ymYrmmwY6W2Aj1iM",
  "key8": "4efQr6duGC4vKFJ2wK963HY4qLsUEXRpvLs9CxRFNJrTCzk8zPWSE6kh9SziTDwBvKHDAFfDtxsRHanbHsFK8C5u",
  "key9": "KXLWWkNxtK6V7upfETyqx8dy3eNxLaZd6yYL41MgGS7yoccyhL64DxkW7GvXhXBrc2dsnM4g5ESUGvAjVChRqiX",
  "key10": "3cAbytP8YNDUsZVycDphKRSDksWKjgAfsg72CpT8KmEvGyQxFJVtx2sxfN7nmFmjLBNgZyp2XJWqVSUCeuafbhz9",
  "key11": "3fo1B2d7zMt4CThfWr4vcG8dwjPnV9gJwg1fouGRWdkpNAGRRohpDntPhMEkC8jbPuULZahzdy9Ju1AkGdeC8GdZ",
  "key12": "5wKf6csKpKSR757NCm1GPsc4ffmtCq13zhC648ZmbE8k8sLHMAhS1hKRcbU6ksGDJDaV6Bg12S1pEu1eCaFWsJLA",
  "key13": "JXHvWTAP9pMXqi38QofDxqxF8q6ocWvyzee79njPX2bpJo1SdQ5o1PP3q1WT7yWjguu2UJQhHtw9DkBeVqWgTKC",
  "key14": "uwin71x24rYLMZEz87m3HefSNq4FPEXQ6cw5hnCL8FRmA8eZ8otb4bURGrLxo3gifRMzrCPpo12x8Mztz7NjhrN",
  "key15": "3zpUhVdoPFo2uEEWmbQvMm6hgJkkbPDnGMrQWnczD3afRTLvPu2PMSA1Vb7ntmmY6h6VjXu1gddUZ4mBK3PWJUcq",
  "key16": "2fhdkDAThWGP33ycVEBwc1HZ53z8qkCsppqnpWNmQLGBNbf2pzhMJvYNRJg33m8C4QKJEfpApjr7rwA8t9z1vRH3",
  "key17": "3bjg2SHqYxunXreRKfHAXCPeGqCZf1TVNGWAMDxADTgEXMTkpDVM5kZSLmZdg1py5TS462UvepLB35nhuNEJoQru",
  "key18": "2oZQoiYupnmt7cfYGvb1sZRyhZCRxvb54hviKDKSYgasVPnJBxm3yxwFCh41nRZPiSQur9PErjSB2qSwaLFSDrQL",
  "key19": "3FoqS5c5Jgmv6nnpRjvjPxy25u11ud2eh4RmKmTLFG2seJW5SYZ4fwvr62TE7vtfQ2AP5HRzL4eCzuLgu98zWp34",
  "key20": "66xn4hBzKeeU36Kci7JPtocJWBjf1BoLCtTWJ723zpyiqevchaLnWJa15SzchEGHUcj1Dfgagt3d2nYGyDa5RQ5B",
  "key21": "2i98dTz9YhwQ1324rcojCTNsaC54ExZRf1xsiEva9nbogUnbTZHvKH9zSdnBTwggmTondcaUBCSNnWXdySYU9p8K",
  "key22": "63EN6r3bCGBUS7hB6zrPTVbm5BiB1V5XGB8A5ukbCY8bErc63Kzmscuc8K4kYYWqDYCa3KJsdj7M4WBmpQsZQopd",
  "key23": "5HfWDxeYeRy1mW2EyGvp4QdPGUspYHxLAoNtzbx9V4RaXU3cfbu1t67pJodiQyvcFzXzShzu5p9PhMPvVaokZwRr",
  "key24": "216LykhbEGyvenp66bDMSwaEFbWX4V7YcRgW4vVJeHpqmcELXEfSYoW2b518DCtUJTN4HS2XKAJmue477bspxhqN",
  "key25": "cG3EJXXvmVby3e1EdfryDXMBGiZycgo8rZcMt4c9jN7inqjiqSxz9oUJsyKXNV9Hr4FvtFJHKNaMzW4344n1zvq",
  "key26": "51tyUmBPbU6gzSGpxKovDDWdd1zHABKbeHTff1CLwXHT6m68uNZYTm9quYkCzxSRvXkect5sgGhDzJhJ6JoA6h1E",
  "key27": "5pUomUBra2Z9pMMqcRfwE1NrWA9Unmzy3XirRU7C2JhHwDaJLiaSqqp5CgWJYyGN3qyTfQDRQq2Yhf7uAQHkY216",
  "key28": "Z7Hi8s2Q8vyYpKhGXMqreKhgP58Eaq862fCD4LstqNNnsUqWjyuBTAhTY9fFmiowkNdanQtfUohBu27P6M6igQm",
  "key29": "deBkazWNT39Rs1FE5AtbtaQLS2tfUVKi6FEp5wPcbbtx6ZryUiy1ZSwc4TBgo2P4XFxLVn2JgzRd2ZVdRWEvCko",
  "key30": "2pUu35ABjqcuGAtxM39cbyRaxd2fvEN7D2VDQe24RTiWJ33uZG3bkkhGakeRF13CzcGMWVtiiAjVoTse2P3GFLnD",
  "key31": "7m9Vg9keoUBKbdKo4GgHBLNadCHUX54uYgL4zsc6ct8LKYSvsJ71K4KjZqwEtPUJLrW8H1xqprG2GQA6akBm4VD",
  "key32": "3AFvkdSAxXdhYUdwjbqZrsdvWu1J18Ene3PehZaPRVsVRKNtn76wPXtNpq2fDjswuMfNAbD1sCmCkWTxPojsiNvt",
  "key33": "3JatBFYoTF6Km2uxJdu7Ukxchiq9GWJR4UokxnKYSJG7YENSJmzZEnHpPvEXYKnDaKwfFmUKpAutzXJFd7csGD5s",
  "key34": "2AZi9psTzKmufiRNEA5UzxkJmGvR6qnr5k3Qky2xq5xWScpQ8DThLJ5SfA79cM4WUN6CUrskY5uLF6QHhMsyfaUA",
  "key35": "3rBtAA2wDn7Yh8xE5b1Lv1aY5rMTp1A7B161CRvGhaq8QeE536oA47UWsqfSD35iHhtXwLTNed3HSQRfnmzekSAB",
  "key36": "3MdbTqyPfuQaxCgDhAGTHAZ83xMrwW1CNHFMfXaARTF4vB8SVSXDLrgwvH845AVeoTaoshWoA5sem7jnQYmn6ewS"
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
