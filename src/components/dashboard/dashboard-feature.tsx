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
    "2VZ37oWUWT7x6BjxPAJ4hat4kwChknSMgsAHoiNZGcvDxSZb5oHgqhkfxstRXHDch1fRAG9vBBXwz6493Xy31VuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CucmxPpFu8rwXYeHPGSsoJMMhuFsnzxPPA37jUvgfCdFgxweKpQUBbR4sXj74MFQSFpdBKyHknVieefkf73yVjk",
  "key1": "2NiKqcfhe73wP2iuqZqch6eECWMHaj6ZqJuesc5E35wCAPT9C3ZjNwAPkKUPtBWABQPchXtZzLP2wsWCAfZmcBBT",
  "key2": "JWjiEpEUYHMb7UG1ubrP1HqGBDMb8qQ17GmSxCEbSbLWbZBQNFqHBmicyPzakgA3xX7J5mAv5UNQprVwunpgqW1",
  "key3": "2z3V9JZXTzB7D2WCLSd7X3mJbjSKUuirKnPamSKD3wa4v7juGtqErzmvG26JRU1sa2GM84VNv7zJXiYfSsmvtoZq",
  "key4": "4vbbHaUFGmtws7YyTZ5cXHfsZh5iWkHsbrjf3Jct2q6ebV89AVYXCCvyzp4rKDk71qW7XGbSXgxSWm47k2axXq5v",
  "key5": "2FijpssKEWTwWxi4VnGhQ7eKehxcAMdHgBEySzmQwMxv1aJMFEifcWBp9uH5113P4E7HSMtSE9Th6w2tx7RdvUsR",
  "key6": "2Lx8tBjEjpgNW32fGtQ7EBZ1rj8rgoFZuLmjSxyEGLZq2d72ZwSS3HbUM1ofWPGbjPVuABZPDjmc6kK4Dan3WgZk",
  "key7": "24jXdLsi6Vg1D7HHggELcTkzCsM68WsJxeS9nrhjfKnU5G9Tau1QHZ1vGK9c3XCVNFdVrrCuHPxpDxaCofBSBQZc",
  "key8": "2c45Hv1ZK93bnPsy7tzrU92GNPZuQui6ofmCWgqYsaTqEXRA1ABr4YVU9DJ695xiEENsKqUBU3JdyHwnosExktA8",
  "key9": "5R9ibWXcTwjV4cyjPMFqhxe7hT4H1rSm2qEjqobkCE6WgKhtZGdi7ttNXZCbLEmXWXpVoJumK92xCA7MP6ATkkKc",
  "key10": "2PFu4DTT5PrVUSHsqSogwbcTT4JZqGWgksW6zwy4FywmZnMMKPCmkXECnhy2jMBzhJwdCocBBQyUKHdN642imyuk",
  "key11": "59PejuME3PVw8T6MGNjkhmvmgAjiFVwW43jq2Vn557gmJDYFMjZZbc6pkGGVicstc6VQLJz6QfyFgLWVCR4fihfv",
  "key12": "5zq8JyXsWzpR6rSvda2g2HDjFN7yuWepbR2gKMZEZ5u8ZiiKNdtWvjPCjq7VKJfKoXDVYKamBBa6bLczgubFvaUt",
  "key13": "yw4zjwsEToaq45svNrhX5zyEhJ7HeXg43xgaHD9SDy2FTTiXGoZMwgmfrsVswWguEBuWTxbsUmPEsPXKhZ9uJ7Y",
  "key14": "5SgGNMeGRzUbKuB9roDzPSVryavY2So7njBHZUwnkW3x3HJoeAwMB8S9Ndf86p74tYszVNPJbG2wgPSK8etQkBCL",
  "key15": "oF8ktUAabJ5cWwRXY88ziYPLB248wVz3KKudqvSM6tyJYwLrHDVeSe9JhYZoKhudtNJyNAfNdznpJmdN7nFKo4z",
  "key16": "4mb12nBhqGwu25qHCe6JKxMgtXJ1boCwVCjk6MN2jkuCLPqyRXWCpdZ98oHStwNrzvDsXniSjjXXhAtKuAW2dsji",
  "key17": "4ay2Utpq4EFCLm4PY73cqjknu7eWJEcee3Le4CtYqnsrQGbMhgXyQpyVmUUpPeCt57e1GdhdKpduWsSxNSUAkXSH",
  "key18": "76PCR2xyYEx72htNVFfmevJv9VQT8FAUypMazBKb3mBEmGJTvfVSmPBzHSgddYjyKLw3eD35f3oVg1Ev1Riawo6",
  "key19": "HZysgBgxrHaink9i1kPFnKD7UrSpfZ6y9hrf3ExhWPv3jhivz2rPygFKVeLtBmakekEPVmWyqbQhxkqr1ku6P2f",
  "key20": "5M4gAYFfd7gxEGdFfb77BPTp3VgfRrFeqxTKUej5iQj9WLPKLXS8nhcAgejJW4UYPFFEruBYDZx4RvPx1CbzPrct",
  "key21": "L6HsyE9fXj1DEWbj2Y9j9HsDmLcrQugJkdQGTac78D8Qi7QzTuYX6L8BrbCHRcUCLYe5hpaiitzx7Acfdm4Q82Z",
  "key22": "72Pnty9Ti8bhkYbP3g4ZsCS3mGRqnUPKc7x3Am9sqtBXfgHpGwQgr4KFxaDoj2XBkYWenphCEQsTPWnhuJEaSg2",
  "key23": "4rWXdqgNFQk9QKtmTRGEJrN4Se54n6GuBGWfNQ4ezKVuHgPWEkGXxJU2Vnsdep1wNnaVXSokY2dJ4ErGNtCixDPp",
  "key24": "56AgYQz3H9k72igZtCjqF3mfyCaJrsxvMf2BzFiig83iyggGdzszVwcGUQM27RDxFtNtX15PgmmkpMVpsegF1p4t",
  "key25": "3xkuUi1jmqGPP8Nd5eE4Lh4bLWL4SWec8GuH71hhG5qEoS5VCHjDBdqoprrXCpQTtQVGM2jrj5qPnx6CW9qcyJsF",
  "key26": "5NNnv2EtsCZuDr8V9RPNvDuqj25sXxznw5WU5CxTeJGf7hazo9GraanUEoqEfVNxMT6MrHFarW1Jd78icgJf3UPV",
  "key27": "2DGvzTZGNTAxMopiXGMVuP6Qb8kZrZtyEmq9ewGZBvfjtMXLyH81yGVPPPYzVDG5jMtTXdn2251H31Yj4vU62RVx",
  "key28": "5uiP6Mj3V2jLHtMgsUcstGDEirqxSuyycpQEjxeypWp8QN5K4suHVh6fAbTegV7HCYzQJVyW3F2pRjkCmnpWKyZm",
  "key29": "5grmcAo79D9PDyVg2htfAT6r63yuWaeyjJAkqsNmBR3dKKbXKKkyrqzMx84LntvEu9qERmhKdQeJdjUvEPQSJvxd",
  "key30": "52c8MkLr9iHbZAn5RLK5PX8uLwi55y8JkMoH3NgyjafEGBPPADaa3ga1xFGnQeLvpUNrc1zfeNBMteKDqLf4YoLY",
  "key31": "5Kj5h6MKJ937TsH5ZEwG5ioGuiBXvM93NiahY5dshb4vxLL9GWRp7vVfhp945ABQ1Jhm47J41TCd9GNb4vJDPPNg",
  "key32": "28ELERFiNmTAV9bmAPKkKutYzwYEYFHB1XRSMfuU8d13VB6GD54pjBBZ3grbfDXdRLzMn6UaRmWw44NDLtCuy7vY",
  "key33": "4BZmPN9dMhbCRy8epdirohSGq9zQPBVUe3mnSknTx78DnDCXGKw8iHX2MU2E7T3axfiVhG16mQpWLXgAooAd1hjZ",
  "key34": "3CnZCgWZtWKjCQ7t39mc6FcUneXHceBuXKuKmsoBiUL4UTsiSXDvWyDeCyyY8YHFhyWwxE74ZUsyAa4NdV9Fzcu6",
  "key35": "57ZkaWrMYBCwVcSMiY6e7ddpPBR81QBT11jcLe333q4XoTc3kebtLFWEC75m5oSTRfXm3ajHVXbpYwBVRp27bxY5"
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
