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
    "4bJS4sf53kTeE33nEbCD5hwA92aN74to2phgE3uPiKranRvkRvV1EaaA2bZGXmgZ9sXUyV437K1LovevPQzFcD8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NtDadJqcy8dpFDti6fU5B2AhkFLyvHdbZGweCX7cJUseS7vu9iJbx5T1ReMXvSMfXePnoMAy2thzY8yHdxYLu85",
  "key1": "uXtrwzr5W9krMhYMLkbE5Tktj57yU6ug8v1CK7w1V4Z3DorczHDMkY2iJ21vfvmWZu3A4JSCnZWeLoWoQRVvuqk",
  "key2": "5qHSKo61Dvn7u3AeSJNHwwBUJ5pmMMSk9dCFj3Lsqu9foUKpGqxRV8X5nmkS6b58mYbb9ADFuXpWRCm35vaSE8PQ",
  "key3": "4Dv7PGz6YP2YLoWLijVdoMqccy3Pvc6aHKTUv3S9E3HetM1dZCLKPrLsMDVL4GWLnoZ4Y4RJWJKkTQLFxYvFSag1",
  "key4": "3QRj7fwWpxGmSvUuXJzfd18fX6npC8STXSnSfArLijR8paEkMVviiTFDDRtXSmeUKnquLHhFLMRDKgkh4qTgGUqW",
  "key5": "3SUamVJC8VmuJGMF5z5tEPFUAjYKK5kmd6eNvfH2kpxu2PSCFuRn4hn6oetQHiez3W3UUvFy17fCnqhD2fM6C2Qq",
  "key6": "2mxd7dk5uXCSEsMDV4r4UbPkpunsWRj9f17xDqopi8BtFYdaz6K1Ttp9bnkpNCoMyH1Jcf32HnKCQgCpDESCi9pe",
  "key7": "3yqAZLmDedC4YuDB4XwiyMCENLJDn4Pm4P9URW8Prc9LEXmTpfeD9RBpsAvpmS1ysm2Dk5bPZhuFtJiMLfMx6GUV",
  "key8": "498rE1o66Upy55YzyWyT8P3VWV15ogqXLFN8RpqxfjHwrtcD4KsZBrbnPAAVJTnbMAtt6GqKTNm2SXNnzXcCGuNF",
  "key9": "D1ov3AbKnhDgYfKGNvNRpd4KpvhWerveETNjV1EC8ax1fMdAcSmfxUQTrerQmc7k5HNM1Lw8evZkNrtXfJ5PoE7",
  "key10": "W7mr2Yzm8SLEcb3gMR8WxZucgmiuuEUju38wybS5pVRXn9pvhrEP4yThfJGq2g4m9JbQPXWeJ3Titvk4tsUXssy",
  "key11": "4zakwnogfgyVEAm25DAGiUwdu12T4phC4foeoXULDRfGtbmuFCvK5Z868TKS3wbjdsSrPHxPLCDaJxcQDSF2Nna3",
  "key12": "Se4ERG3ig6rwvvumMrqKpd3Aoh9Eq7rDRXyuugebvbhxLBtVFi5amwhCjpgTaV4LjMw23FHc53jRSvhHfEtwGyz",
  "key13": "4pGCWU5JSc5VonsijYD7F4frKgEtyENsTxgwN7PDFGcVQbbfFRPW9P1tBW2KEbq7DM7smNTFRvDneJRH56qH8aUf",
  "key14": "dak2usJu3JFcccGEtQgzzzkHP3CQK7ENcShrerQVqFtDg75bxbAB9Zfzq1EvhWGAihvq3uazHwQDnzgsqoPvZ5g",
  "key15": "2mmfWRyDyKWobfM5dW5Pi9inRMC2uanCAkQGFZnCHZDR2hjHG5Vt2CKjFYnCpbFAXgrTvjS7sdvihTQu19RqwXJC",
  "key16": "5R5wmXzN7sfVhqLwVo8FTmaeeoQCCru3GVD9YgY2cX4huaQaZPbFes6xmm8CAfKHhngX4eUBrSYgeDuoSudWMNJ1",
  "key17": "bxRmi5tJdRUhGuzEfZBqcdaPLKoVbE5pD41mLKUZzPquSwYjpbSdczFjS5anaY4yE4a8sfUZjgMuEAJmEQ32umL",
  "key18": "57tmLWiJ4DFfqEnYjhFhVxqLbfpyHe9mnxRaQWE5QC8TzzArdKUwY7RUu7H8zvyQnuKRNQUsasRm14edieRNUuJf",
  "key19": "V6ZaGLzM6dMCzHWgX3KHsf6hcr573vwAdUX58aTonRnqrQPekr1UaRPJmm5tBLVf9huGzUddx3rqj8QKVzmbQRD",
  "key20": "64xUALPWZCPHohsKt9rpsxH8Yg9LJ2Bhu9JfXrDAJ2qmRjXh11gtu6UiuvZLkkM1MeYNkJra4zVozx3tDCFjm2eH",
  "key21": "DXz84X69uhg2X97TeDYXnpgUbfmD2JLNTruGeBDYwqEHJZBXEQcwqMykZTptaCagBGWdcXgrXoFx3diCT6xU7oi",
  "key22": "5HsqJVS8tynMHfsqtBX7hJiGc7dMTwfkRAjxDUsDidvXeDiosqLKbPt1H3eYHkhqbLLaqqLuysgQxeMoTDQNJx8w",
  "key23": "4G1yvEeyiPtrZ2PyDbPGDUehp31fViys2t4LdVpSxM5C9UXybctJPMsazt33AMVLBkM9gMZMpdzHdNkedZCDpVx7",
  "key24": "3DDvoEAzwgJF4Q7prM8e8Z2XPavixhtueRPw6k28bf523suyzMfuDr5sQj2UwTy98WqQSR7UPwMkV79gpgqqehFg",
  "key25": "2JdLVjim2iaxwVwAwv2vYJiYyD3RyvDgpg89NML7TcFDLRu7EtoWnHxGXNFMNNB9MVEBsFQjuLJfZeXhRgN2Xe8N",
  "key26": "4J8oWFEc2j8MUWdbUMXRkgxVVXtSnhNCusPxoXBoDbp2dqu9QpfS817JFBQhQfckH1p4UWwEYiF3cnfraq46PbnR",
  "key27": "4LWTx8qaeCf1SQSgyt11VQMh5SkfDTdLqLHfGUjSw8jer2LrmYJTdrptbXNVxc99ytAm1skzqSFYfCJD2UmiARKH",
  "key28": "124hi9Rs19ErgSg6r9HZZbRwFWqJQpA3bArVLg8mLrg2p41dfpP9Cgt2NcbEqbUWVbkjbRZno3Ssx2cdUUseHJ92",
  "key29": "4aP7TEZNJ2hdJzCPgX83KK2qkn5gRYshpyyCQ616zn5x4RktZ52hQnvjBfpkKcfZrgCVkebJbWsSNod4VJg6v4oY",
  "key30": "62hnjhwHnXtKR3wDieed48R1WQrz37pzhe4vVQyoQYetP6BYuWStfFjhHxA3WSrArtnSg7uFEfdd2o1tgx5p5Ljt",
  "key31": "3ZjNPd2LgK8cZiaGwzg18pU1pzzNQ2ALfL6cqo3UCR1YcNuC4MMysm5KPZmMnQwqoCah6dr4doRMhVPsVHWHTY6h"
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
