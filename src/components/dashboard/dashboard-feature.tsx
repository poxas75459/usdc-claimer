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
    "4eW5x6vB8QQzmfhf5kmwgQStUHtMDtmL93z2mo5Q3KZMoMYeiQiXBp3qzdR78v6fJpPrBPBfsdYF4KSyCa4kjevi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UeHdSCqTif4HHjdE99nL9dg2VtApLi77fpsxaodQwDEvgRepq1qz7yxBK7dGdd1d96grvHxTPQ1ffzngRWt2WKU",
  "key1": "2NoqzmFVda8YEzcyzMSbHtYdkTVfNHjHeJFspmGkA6MjsE3sBwF4VBnHoQxhrae4cMHQ4j1CYdHtfPpioz1bnsg4",
  "key2": "4juqZ8iJYFpz38rcMGjcfKPdd9V63FfYXuDb3o4Sr8DczYAxX3pTLwNtv3QzTnZV6fj7tKXnitQ4vd75yEiXj6g2",
  "key3": "4MX5aR7bdLCwkXMokWXpDNfioMTu7LDM9AQqPBhfAJhsMa5qqNbjoRRLiu6L2kZo1rhxVY4wh7aEHUUR6Wamv8C8",
  "key4": "8XtdRDxnMSrkwakLcTLEmRbAYkFYYV4AHavGCPY86ZTAXQW8QA9v2Az1p9tvciMVGXG2k4xwth66NVvAumaiFTd",
  "key5": "3fFpPTaCftPy2bYaQ89oWGKLv8gsVZwYmp8UQpBdBzJ3xFCVW7jFQDKWj9KgyMnRa5H3yNv1cSkSbPsfXJsZcskf",
  "key6": "4Lohxo4KCjPGQog12ixqcFwVgoUCbJFsNDjYZKssaTv6G2LUwSR6tsePjuy26KSrpCs9jCL733hYGC3nivfLQbFc",
  "key7": "4juPtBWXKiADKrAtSrqykcakBXAbv2XxubkbsLHyGCV34vBWZghq9RPSME8iaRYg9fcAtzFoypGuuWUVCTAjYjSn",
  "key8": "21K8rrH11qSvfTiM7G5zhntcikbHpAJabgDJNLUiq5N3MrJtwKUwpovBQQF4ZX8qP16wWvueRmZYFfM6utqvXViF",
  "key9": "36HVJZB2jKfwvGn1QmtkN3Srb7v9dZy7x44DFDSVS7CQQNSbg11Hux5YrGp1DXFv38y6Sh65ZEbGbpvZ7x2tXbpo",
  "key10": "4Sxs67zjwjkcpqJ3EfMwSMvbHW7p3ebQAsePgdvFHd8p4e7gtaXCiAg5SRdPGrBiqRY1uB5pQuEfweDLFBvgqZZt",
  "key11": "564D5TQBhG68yre7WQfMACNBDD9KxzSwTX2qrijk4h67KTd45ZEtpAppT1nZf3aS1pPgxmX28rmJsRzcPRDsY9t8",
  "key12": "H6UajBdkkTPLjRhLsNBwMXS7JNY92md5RoG4LkDDhrAzpJwq81VURgbtQ8HWtK3riMFDA4MbSEwz74rXMNw4d1k",
  "key13": "4j1hAZmCbe4hW7gStfCf7UgqiN4u1H2QB5msj2Cjd2Pu5LqFB9DNzAoDnZCraM2BtCcEViNqZRRbrgGiViKhMXjv",
  "key14": "7itHjQ6Wi7fjS1WHsNXp91dPCR8kYvaDcFMkiGsFHg95TqiSVASXNm1wb4ghDAfvALceqJQa4fvH7LghtdeumRU",
  "key15": "3LbdP1i22wypB14DoCS9qQ6yS3oi44YCg9fXpyY1TgypZa4oGXSMZ9xMKRXrEa9J2sCtLqnhvJQTnFVUSoeBUhJS",
  "key16": "5FJA9fwCzbxN6uYTSsUf6xWQRsyqFXEq37LjK9zbyXAauYitm9XJ9MibZe5VgH8eJDtjzA21cNE7qB64WDy5v8vb",
  "key17": "5gevp6mxAsjRUkMrVyg8hvwGayv7fueixiGTmvvpaacKCV4UJ2mXMH8gt7wabzDy5avmDXriSH74arGFP3isP5a8",
  "key18": "4sn1otjFxD3a6zogS2Q8j2HRvLFjxbmoqdRvLPD8VgiwyTwTZ5XCyYs7uMeX2gNU8AviztNXEFFfNfduBwnqcb1V",
  "key19": "42M3QeUio8qpeqJsT21weNr7ADH8L2Ahj9mqMfJsquwCfkUiKeUJmbmsn1zKVFdZENCywbnTKQdQmXxfyrEkmCyv",
  "key20": "q23SjRowdntTBCik61mSZMP8UbPSBsFJtwMwiB281hC3pBgjHxU4Mm7xAPLWPDH3xVSWtYvi4F8H1pMyN7MuyQf",
  "key21": "5hGoXex1hvfFQwQ2tBQ5JJE5VpCFAZtuQjBcr5tAGyFdsWH2tUxVr5738e3s8iD2pTVGvphtzjMvAGVqaooeF7G2",
  "key22": "3mx2zuGvMgiU3vc4jqRCbCFf5hgLhH4GAHRWR9rf85V4KCNFsz8RqbPvoL6ZBmNLY58GXPJae5SUuxB4Yt6J5XdV",
  "key23": "5tnLnkhbWk8CqXYbiByXG6vzJDFpZYCuaRcGEuS6mrWdM5tBsDyzy1maAcQPKkmnZPuN1kGZyMMCnx33HtYZZfHy",
  "key24": "28MkvzcZERfDYauTqL31UAijeYy2Qnv2NPPD2LLYhP9yqASpiFzbYN2UgjZ6AfDzerrf2w3HAzWPUXrzGnxqR5t3",
  "key25": "2WXeAiQyZqs1Qd6LY3rS9PNGrPJgYZD6W2gZJbYNN7SzeNv8HuxC2oZ8GmAyzg7cvGfWGhC4KLyzGbZhBtc3nYfh",
  "key26": "2V1NWa5xSh41TXSAvJ3xc9GnF2bAmcuNFjMo567RGBYubxZfTcHx8frzwmB2TEiy6UZf79gBW2PsN6NRgSrXEnT7",
  "key27": "2pdmhQtYUeScLS8keNQyfTMW2Q47dtVwsXK17efebMJNZ6vQj9uCsMqpG6rtHsf4qb2pBkCVi92aH6KdPe9aHoV",
  "key28": "3veRC2XvUKRhKN39xYhCDRWLZ8LtP3CRpieTVspTkUNVNKMD3RzHcKi8bNbbJVfwg7dckz9E9aNErFLW812AdoMP",
  "key29": "4k1dzmN1RrNxuHcvR28iYpkrqBau5z7iHjXX2src6vyFX2gWEX9HqKufpCEKNJhS3szSk9cv8tm191Z5RxtzLgfe",
  "key30": "3hxkGacXZBC7NVQm52GbyKcESUPp87my1UkSXhsUwBg8HBz62t48jdFvTPEReh5nSmxcS2nmb78p9Z1UmoUoseuZ",
  "key31": "4ZT5SSSNKwb3Mpku64FdZg79LcfmZrLQ6ZUK9qM16bpG3XkvCp3yuGK64ScvqkXcN3pd7A7Wyk5bwbC9ABBTnpqC",
  "key32": "tBbAgEXCT4P2JxEyrbMRSAgRu2oP2dSCshEJTzKTPRntBXgTPMpDfLnWJArSPoEGphdXfxqkmrZXSWeVqq2zUfV",
  "key33": "4e9XQcaygGKqYcd5mtKkHn1VGBLLhuv1ZvQgmRSU94zsCLT7CVCBGkkLpqhmK5RBeUggFf8nxW3DTdLET9HH5899",
  "key34": "2F6cbjdrCip5XZeXxxPdWLeyDEDzcureJXwds7dNbmQ3ScaA4GKxmCuKcHNkkWQmnLZzJ6UVumJig4QfSAr9unus",
  "key35": "37P7B1SW3KYiCixocgteALqdmW6XgXWFokKVibpjcQDpQCCqpH7so8Gh5SNhGQ9QjMGV4YSEcQkskwghqwC9AgsJ",
  "key36": "GcoH7sBGtXisCK6tHM5YA7HPCDEyfUADdbKescsoUugxh4kS6EwE8XPxCt3bhqGLQfy6vaxKmVAoymoSX1SQakA"
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
