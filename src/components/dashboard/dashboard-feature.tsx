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
    "3ANKPdLbFGoCXomYFpGpc6ccb3evNtCRo8jPSBfjeZDQsjxFkAjRVY6gmNomWLFHN649MsGqpvY2CyByzNkMKzW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o9AkWRVyf4QHdWaVBvviyXHjQAWv6zTZar8ea8kyNxkRtWbAr3yQSYspJ38ztKhjGt5DcvS6YNnEC9VRgzqYLGn",
  "key1": "4sUGipos2N5mkCkKB1CHNP3zPcCwgLYA8NuXtoEodzpyUswhHkc8M87LGsaiC3BZwt4TuYf5XyAzywddAPn9zXgT",
  "key2": "5c7oxFH8nwebxnY3DYy1qjRzio8vAJJjw1GF4B2fWny5FvPaUB6cF5cxAemAsWYaoj8Ld9UcQpbbzxtabUNnPA59",
  "key3": "4i8sD7EsPS6jeW1RaukUCRpVvCTccK92VpmY9uvtULSBBd9SPdLWFMvvsT3VnCc4d2ptpzLwRa7TN8sMPT5k7HuQ",
  "key4": "3617TicU6chaDuzC5QoN7w6MsMxxB62m55gkk3VnAWGH56AvoZyGYhsZ2qT8rsyV8anvCasquF7C3FtV6txeVXTe",
  "key5": "46rpfcBXPH4Za3kZBYm4AdyQLy8pC92wow2Aaew3ZfQZgGGDPoUk2YUW9ZgbGmVHFVcwSQAmr2k9PTuDvQap37SU",
  "key6": "3cACnSRRahzpWhZDxTdConmh9zYvrqNPQZ5RStubneUod4AbifaEkSgcPLa9k368gDz6pjHfsYuHve7BwjotHwJN",
  "key7": "MbRYJgjRm3gJ6zQB42utdUthV6GHguftD9vFHS3t4d32ZMKJfV3ueQEUcMQJ2DWfCCA4spLW3ioCKttCUDoX3Sw",
  "key8": "52aq8qhdiAmJakefdTDRkAvhCRxGijfDy8wcGg1G6HKgXhb2HaWjrJ28zM877Dy5ZYzuMxssYbh1YN7pR1J7Htqp",
  "key9": "3LTQ1YaTcxZFcgv9UPvSjBx69zeD7tNBG5r2bEugn4djkCrDcipqpG6k5wodcNGBc1jdLvZGQ4TPsVsvuYq8BPCD",
  "key10": "59mHeW6KxrhAYgw3weEzn1YbEubm3DXceSBGkUSjKKAxs3aNstnGdqghQMEzHJEFn8Pxfa22XfQgGcyevwBDfLTP",
  "key11": "Th59s3aPmVauwNBKCg6UuP7dYGirZN1cWLJeenbHxE3GcNVb74cgCEjxqoSs1pkf2q5hLwpEgTNipT9NCKfRNZ8",
  "key12": "3RnYreRGqDLNB6eXBX6eZCt55nzv6dWUEMxRYR8vxZfPAggMaHMcUQbojJo8pPac7spDCnTLtrDLXHB7iojU7t9i",
  "key13": "aEDDXBgrNhEqfzJu9UhDD4hjKEPBr1WeLMzD4q21XSTkJa7ymHS7LxBpwkUSF42i3PxJ6c6oYmHoM6ghQfy34rD",
  "key14": "2TeLjnfZbUFCGZ2yCahtfxwGHLdu4Ja35NogVhT3VppNC3p8AZC1MTPp2cbJpsGndKWEkjFJGSoVMdib7oYFXbJK",
  "key15": "4fQXuhz47NANDrPVLVtg5XMUsnPYRoqsM1kBmAByWPcmDYD9hivx4UUDwaYDqxRubHmfob2gu1ZRLRPpnfY7BCkh",
  "key16": "3ckZTv35BciGGCQTjpYf3rRKLXnGRJh2sAYnKJQPTWKNTcVrUMTh7sV9Nne9LE6BDDk4iJkT9LxrZAbb7g1saCcp",
  "key17": "4JawpimyBswEM6qDBkWHu9RKkTMw95Lt62Xbz9vCw6r7fnsLEg3RgM13qvYPdUWQkSACoTbri5KPT8Vc86LwKoXn",
  "key18": "XuCuJcBoKcg5CQwofcGFZuvsqW2sA4ZjhbcnDTyXXLMGYDZHxGVghakEJRNYqi8KoVmj41D851TDEgDr2jzmjYV",
  "key19": "2ASfpv72yysTHbrsmvRj2n7sFyQR2yvdEgCSNmS43MDsTbakMq4nBdFzVQsCRpJdumbiJ27LiygphkaRmfMXTZ5U",
  "key20": "RVtiGWpiLFihHu2E55RJC52q8PGXdoRhUzzdwW7nejv4gEpv8q1XuNFGsa5vzArEbefFHAwuLC1SMz7y6XcreVD",
  "key21": "2vFJxZoBSa9bbFveykvmy3RH69FEZXMaxUzX3WqmwPTr236WhdV3x6EQ64MG8uW3hMgFsmwJmD3wEahMSa3GJYW8",
  "key22": "2JxYXzuL6EiK35qZ5ABvWWr1UhoioMFfBWd37sm5dTtHEiEaJ3peUY7yb3nZigPhFWgPTnd9kSF1yH8fbqXjg4QT",
  "key23": "5BNMH5tNR5oynYi3rwricEjQSs8SyCvfYUcvBpw4FK7w821ywVpRw5oZ82FAupNyLr5XFjF5o1oSZDnMELN51uTD",
  "key24": "4eVXjTkNpRgHGaknMwAndavRKYJeoGMcHkkHukt4AQpprPaZDeCko7H79mMdpmLVPNRqiDoiWXQhSskCDEKhquP6",
  "key25": "2DexXnSM1PVC9mMCjKtah2wKQ2mivWPGWJfygwxRD1Kjbm33wSKgfaJn8rC42LmFVmurKgAo75X82fureSkMw1eT",
  "key26": "o2s5XCV3WYeTAnFQzER5PtWT1wU2oM6vnhjmu8aujZjTRVfWm8dAC2ctifq35Wksfq5a2TEsLpQLpbKBuLEbs6X",
  "key27": "2hH96MdpW5UJF1TEM5ZLXGFQrK51Wt7o5wbgEn55AuT9VR27AxwtadRVaXTskttyect3HdevB9RrmiGsxbwXmbrt",
  "key28": "4otxvfr4tw1YNsQmdLXopdCVYRq973BcMDhRSqMjuUu63fJDkKtB3jSsPi9WFTQ2gcfT71oQH3pvqVwRZK3ZTLU4",
  "key29": "3TmAZi4YFsjwMGhUeE8SZho5MeQoKgGQQUh1qBY7AsmRZx8GXfGrwyoa68KeBse3MtP3ywDx1vRMd76TJ8bj4EKu"
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
