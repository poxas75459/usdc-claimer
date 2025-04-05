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
    "3nACeKiy8KF3jRbN6ngDQeDgGaaNR5zxV5DgKHYna7Dq5wcJFs6KuP6LJnMavPVZpKD7h7q1TaUKGofbufYB459h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ohc3LxR5FivmN5HkuyxzhrqfydVR4SVWAKH7v5daQCGhdfoznYun2pUt3mpypXGsHnzhNY5honZMsa8f6sFcnUm",
  "key1": "fa344jULZbAftuBF48ngq1qpRz79eyBmdC76wFGrE81KZit5V7ipFwPf98SVyanAB4M2WX7vbHeuV1CjANaDSbR",
  "key2": "3UpUtcsEZGwBHDWdhJJVcsrKnu8PEoaQrdGrK35dJEQD46CKDHf4Y4WwJW3z1Tdkjif4ZZunguShq8c1WBtne2w7",
  "key3": "4B3PAu7ApkEsLVKwEyH1gpUNaEBd9aodkrmWNw9yHcnb6bR8bSoYhscAiwRKzUwfj9LstiRTNoyBL3rTtZyfY2UF",
  "key4": "YMLHK8QbQRqqbfDdptBzgaLYeoyRvQVehzrHuN7HkTN3XFqh4a2HQJh2foUFD9snjSsuWCqP1QGukupsZrLnHe1",
  "key5": "2uFd2VTjsGZN3CJLMmZk3nANw814S4EVeqsi58CGVyrpmMbTQb2ZBtBoJvPu6kTDG7GQS8vpG7DfRMVPXRNe7Cpo",
  "key6": "5LeQ6xxcxkHGLSEqyMNdJRfemx2Lu7jcMRA1XeTWZaof8KwSCTzC92axCeNy6CGT6jxt1ciF1ioCkXgRESv2hiHs",
  "key7": "aJ3nQam79QWPe6bm9jLG72VUvrsupUCZUj6Bcxi6JzkqSix3wi3egLzbBKrX8geDuWCmkxPo6ygBBi28EK5cupi",
  "key8": "64xZS86nVdaMdmGKrcYqzFCvVvG8HMRVegWgcYEvSVR1CjhygA9K3bJ1ArrKxAjpgVnBWuj76KfDrM1VQUvbdpUu",
  "key9": "4VEz1aWY38FR7EaKzJftehpLPEmKnPQohahoLNThauNhNb385sv7Ff6NByP4AK1RCSD9FNtbYaPBSaoU4FFGQKgw",
  "key10": "5eUHQCaZKPimXmVUvGWbYNiiDhYEggdyKrnmeeGxXtqbMfwSuRuFSTddWHeDZzH8oNxB4SvCqSh7PMXXsp1HNUJz",
  "key11": "etCsLwaQ7dsp3sxUgQKF32yQbNp5MS4c6k7Khfbja2ZhJ8fUDUmxjt9rZk12xnhMsWPcMUK8saaCwh8s9SSPpGc",
  "key12": "6e5pDzxnF4YgQaH9rfc8tKTWUVXWJ8DmRUjoTxDkspKo76ab5yiDhri6DCGVcaXUfceNCsVtmsCUmn96ugXPFo4",
  "key13": "2HPgerz7YvtPxP9au536BqWDuB9tybdA73Hw9ieiWheqdF3uDsKAQ8X9p8LtLJR6QcbonAm6qnHK4bPxhUR2fzt1",
  "key14": "37VempEmWms9kJFeW9NLrhuQ9ZwA1WE2rKcZdUJagFYAm75kaTwhdAREGB8ZX7mf2Jsmpb5JGJfwNZ2sXDqyh7r7",
  "key15": "32hbBbtM7gjDqipU2jyMRrBo4GgL4Cwr8cjpkVodfK64QZLjVo1Xpji5CSipK2sax6e8mZxw1dSdKC9EUE5GDZo8",
  "key16": "4XUWbRdBwTaLmrejCyaRWSsBvptNGMU7gYDkwG9bEnZWaEsYL4JWBY7CUogUNGScLNtLweQRJscZFqVyZm8rte3y",
  "key17": "DnsxRNK2JGm2Ub4Amezmdz2aAgjMLRtWFH7oBLyz3Zr382Ju2VonjjTjUFsmGPpNzmeVwtfjh8GsvbTDfSPGRxF",
  "key18": "53xgV4QWNZUTsi8ezZhEvMg7h63TkWa71BC3wwZXsNMfmvontn6Q6UihSjK5uLZcsqeFvo2qpL28qzqXNJQ3Zvs9",
  "key19": "3G86FkyUpHnz5mMTVBx65VQMfxUeguD9ievMXp7MB3A5iH5hB668AHAU7fRAKej7YKeUMEXJp5gUNCd2uC3z4EsA",
  "key20": "3EFRudmvHfqG4FukkSmxTBwHuva5f4MehbQfM4eGwSVvf8ESnWAJ5SHHC3zPFxwYseGzRmJw2XUPwoF1szrtBWqe",
  "key21": "2YH8eyXoraue3bzCf4eydMZmm8j3b3CdZXg9FYoj6yRcFmUkA7r75U3FkUx696sE2EZd1uzAGtPHnWKvDVLVDajW",
  "key22": "4JXcdULshvpSe8AnA8DMxPVStdHuWWnqhHygKQt1YjLV6XaFxuEowrrXzSM5BQSMAisfL7G99KcqdALEHsj3RmcF",
  "key23": "4wqnhh1496LSGJFKAXsL2bBmC9GXWbcsKrVpegDFuyJQAoSuZtFM1uqGVUjF2SUgcW8eDCAiG6CTsPb3xBmAgbji",
  "key24": "3Q8x9vYdMEwBp6rwWbWukPknmsEKZVFXyAhEqq38pej4ty4mJUKkg1Nn7w4omn7ieSUvrBtpxhNKn7bu9gYHNKmt",
  "key25": "5jRGNvZ5wTCaSr3ovWmAjJxgCr5VbADPPwrsJKaaguECSKfzzcc35mKPaVhjyhmaZbMc7h6a9EiwSNgAUS1W5PNv"
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
