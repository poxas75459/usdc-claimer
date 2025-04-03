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
    "48ZssuSo9L5N31fDEaeUiBdAgmwhhd5KnGUTuPZ2QCh1ot3xXrTRvT14a8cPXKzdSMmaToncdASR6y8NxCeJ4ygE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34hEmpU97iTiynVoe3aop4VBVA6omnS3dtAQKzeSAni5eSaffA39D4p4gjhpVy4u9bYT6m37434hBVxNqrv71Jpt",
  "key1": "2tqoMuTDgztXs1XevyqyNEWrDmzd2YqRiTYHgeuXHVAApAWZjdT3qVEeBwF4Xn6J3KXKVk2nEkKbDh1Dm22Jog76",
  "key2": "8Liw6iwYQpWBkRkEY8c2FNeTmUw9mw3M3wpogmU1QTfE7TqjmeqyKdTHJGBmxNFF97xuNyRkFyXYbjadvJrx4JS",
  "key3": "5QPmR1fiijWBkwTPiCm4UY51vjWGMkBBdgLiWDKZUV7bjFiXkbWnPCzrJWStcEdHY8c5LZ1rtuNYgMBUCEepNbs7",
  "key4": "KSRXxCFJnQJhvxpBMFTqTJ9R6ttfKRmcWZk3y2dA1DwFHHBJm5NcykR5EYwrfHx55YEpHwsk5N8sbBuK93oibFY",
  "key5": "MtTNdQ86JbKdTd3YNVocnb3vHRo89T3NgEx7x2tWj8AmoCYs21NvwYNS84yCj2qyWZfxGgVthsacmbdZrzPjmxx",
  "key6": "4Gm9V7XJKXJcvy2sNcb5mn68N1DUM2ezVZFfY3LPiijDDnyK5K8VBfejPkkVzchu4iNAJbyozYenAnBWk4CMsL2q",
  "key7": "4v427yJwqwUfFCUYMHT2tQKhvzqFRe5BroJLgUMD3sdcnwrsXPDRLW1SKC5Yxein1TyCN7fEa17qNaVjBXE2xTXh",
  "key8": "3ZRttbxcqjynCPqKwevx9NkLfptfjG6e9zuHznRafd3ajSc5JGMmSaY29oHMYTNcbyv17i7P5cXVNezhtN49MoT4",
  "key9": "2SQPU22zn2ShaaWoexjwukSvmn3QrC4BsdZwuosXBggNPDvcAuA8Sm5yChE4zM8KMEoUuyHo9cVYYQJoZ6i1pvWD",
  "key10": "fR5aGdHujDwoDGNH5QeH2QRyMEDUP16iw7jDheYdKDk2Lad1DHbBGoUJtgW34MyRGqRh6gL8yBMjVXRrcFYWCaD",
  "key11": "5Ti5R3tsrhNwpWmnmNHyPtXDFj3w1z6Y9YA4iey5cNBykMKmGM7Vy5W3hu1gN66QCf8uhdPdieA6v34gRj2kErht",
  "key12": "8dCXPEbUgo5T4P3Kh1iVTZS3r7cManVxsQuPLooBrKpY7Wybk8yssA238dwGRtC3zdYmeV4oLqSYkYjpgjRq67Q",
  "key13": "ChE74R9zgsFXUsaLUatQygpEwtnEau4uq8SB81L3PGBg7EByQcE3WrRGBmabpdRPWYbajRwhZK1t8pNWGzbXt9W",
  "key14": "5VBUmPcFEHGn9qDbpC6aPWEENcRdZefXScYLf3jqJ71aibBwNb1A1nkj9ZQS44XVkoAtazSH4Hi9sxtxPJMLUfu9",
  "key15": "5isXvtqZYEgeVVNYgmBGqRWWQDBXPHGnPwiNbDBx4eq1TkMJnQ4JgoBPC4ag1stwdk84DDmZkvcrQPvhCd5iHX8s",
  "key16": "4SsC1rHvPfZLSgrNbKsRNghAZigzYRvvWE72rBGCKb7QtJsjxmRjqpSiZMMz4Y7njU3V6QLBdvmCHbZj915kqbWW",
  "key17": "5RePS73E5QPMH97s1Cs4E6WviCdAW6XW4kCwxiVqjL1J1zRdqWks7qQKENNXv5J1EDjpSm1DP2pPmzFogRb5whnY",
  "key18": "2Pmw5HGqciTFH2GfRuD2UAmQQBjqJnNoeKdVWwpBrgQzuPEWE7PE1vKqQKihtHra6d6xHUaZTzaqmvQy9DswpcuW",
  "key19": "3UPaafUV1nhmqFpUyUwcxMytb5sruoNkJpiUvqBpAHgPzwEj4iDMhGe6TJo9WQG9yCA1omWrywgmWjvRGKVsPQzj",
  "key20": "3kxWDBGQNsUScqQ6n5aAaRrNFypPE32QH9X9ujBpzGzAX9wxt3dW6FumyNPEkvgJ1H2oe7GYw8jktDTRYoyQWnmU",
  "key21": "5Dt2pD6T7SG8CwiTijANNYELpQn4do4WqSbZu5n1JT6g7k1uBkYAgXhXM9a3AHPzSevSxqLAPuno1YR9G5gaHSkd",
  "key22": "4EwUhAAEgtZS6Eq6enfwYhwxSCfT1VyDx5wg9AdwGGaWCfbJcg8YUTgHe6AKYW4XLbzqfSJE1z1dpwHaFP3ECByv",
  "key23": "2dLEW1Y3p7HT4BPQebgnhpTvpRAwyZjStQwfrYPPFgkPaXg3aF311F3TsA82Z7xGRzDEcZyWbPWjk7hacxoLsW4d",
  "key24": "hpwnYbZqnh4fD2UP7dACy5ytGPUSJ6f9VVcctrWe1Hn88nMMSs7wZeSgcyajhxTBnAv9pVMumnEfFonyzPTgT1R",
  "key25": "5KczaMzrCWPf2y8GNdFUY5U5qwQAk2qG2K96BGbbh93nPiwvQcr2pBT7o364iMjfTeDRxbu9Hm6KLWWrGBodRUPz",
  "key26": "5Na3DK9A5WAgo8iLvrABRsWcpzFjX5xeKus6ymkmtNPQjK7LtU4TMKw3aDLzCuwz59gwonjsWxUPf9KLsgdYVm12",
  "key27": "2axSdZzrE5rNmLrew364rGDduqoqP9tkV1xw4LD3fiNjur48hVwPkp4WkoCMPA8XEGEBoGyyJLeahxGVvbZs4QPS",
  "key28": "3dCF4eHX3BbUT1pk99bZeBU2BDY5jdeggrQxcPurbtdNMCeJHR9QirCh5pxAh1vNgH3JFrFeXA46UZJ21gSnJgoL",
  "key29": "Vpib3txCGZphbgu5pqtg2By1LGkNiEa5aDKMpmp8dRFXqqCQBTAv4JgXikrvKaphCLNyXDjrj1F8J3RYWhDaRFY",
  "key30": "4vcZ5RpHU2JwwnaLHRx6qC5AMQnE8zgPHt8DKLoxWNvpmXMxriWy9igyoeRm8Ct5acq6oaTBRyH4WDKTfksd6zn",
  "key31": "unnA6cgPsrruURk8tU9xbxdvTkyPHzmJBbUVzaHM8PwwRVVNjJiwA1gZamWgkxCwiqxrxpUQBeL8LV8iMfUCzGR"
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
