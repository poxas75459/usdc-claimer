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
    "4yvV972FQh9UFAGp55VYtwm4nPqASsswSJd8csVGmFhv9jUxWTrfMgPmFqXm21udSRtPfMvaSqVxX5KdYo7CFwQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fBewfpw5uc7tRtoLSWtBYtZA9UXjYff3cauRKcFJJ5e8SasSWMMKSFCT9xSpFnKf3Sv9YS9RRCfDMKvQEFUqdFn",
  "key1": "5M5qEnRYvAg9dbpo1yCzPzX11RVPZkbHToNr2LCcZXzLTJHDNC1keFwNnC3A5AowDjiuU6wWwn7rqsSri2RTnikP",
  "key2": "2oK5qJnD6d8dmDZyfgiqWBDBWznGaEqxVcFFnaT6sb1aYegcR8TMciFYpT9bRAf9hpcJpUp3YgVbeGG34XMkPv4",
  "key3": "2M8yMY41wn3MPu9DvXboLgJfLGxJGdTDLuNWvkrHipF36H6PMyDBZnp8HkZhEU7nQAtsti8GCnSJLg56kYeGgHog",
  "key4": "3bkJcYeBkshxoGFrVpXzf1DXS5ZnDswgUjkMT8z315RQs4mvo3QTvGH9yvxC7epeW9ZJbNBjcY4hhsFTtZMrRxor",
  "key5": "5ByuQZYTkrDSZYf7Ncq1JUMbuAKRQy6WHRenjR12zkuiXrFJa1CLCyrEvQCdggmbGnurgf6FuGgMZ56iSYqU6y3p",
  "key6": "5HdvwJnP85smToyyrqqeyopfi14eYGESyBrtvKSzR394xNugbrS5NRd9MV31ePF1FyoWsN6CZif1tpbqd6ebdeva",
  "key7": "2cVUDCXvub317XnUvLvTRfW9rTMY7a6mnB7TyFWdzt8c4cAaTaDmpEdQPMa5Zt15gd2HdCPMs69Zwvm3AptJqhSf",
  "key8": "2B2Uj7G1EoZPJPQjYgZtxNzgutzxgd8Xxo2HXFBf8MCnxczLQLn4bowG4MDQnGB74t6Gg2rfR12CKCHKhhQtvfPi",
  "key9": "5hygd1JEaFdt6AvtTSvEwoajhmZ9teDKsNBbi5wd22Q3L9CGbaWtx8J9dyv2J3A4zeMZWEcbN2oHsvs3Xgb3nr6B",
  "key10": "3t41z2Z8W9gpB8bqc6ezV68EsKYJcsE1paLyNPuLtd5pJxe46N922a4WZTses7ubfrHm8SouwBxYtguF1czfJw5g",
  "key11": "3x4UiK6a8fBQ23fjBNtu2oDEpEfCk7sLordjGUvvvgkG2uDPg8KsoEeK7a74yC41TQR12VgTfuuMpYxsEEkN9HF1",
  "key12": "2kkbAaVTGKtZUf7rRGW222B7DRSWSAECWLJWkXabv6csRgeLRzPkZVYnTPyYiXMdn58MH7iAonDUUfZ8dB7F6rjB",
  "key13": "3VakYzxmwHQpg5TzVxeTVL4Vgou7AuM9azfdFy7YCiHw8U8ep39E3FxbkZtvtWwDfiwCyP4WMC7uW8VnVZSp76LC",
  "key14": "26USZK7Fdgfh5k6RqAdbTFBWAiT15ez8fokLh8yETFXMdhM96adRqFqCuQ5ojMcwbHctp5ih86xt9Yok6YKUNYnT",
  "key15": "41FwiUpPdKr8hD2WJuTo24NnufDhs436ZdV9rj8UMfqoNxph4S3aT8YAJvcj4fn4CwNoCHmdpo5RDFfPjdasJqcu",
  "key16": "ubDPGqxKbTYBFbosymZ9meKVP6DQZt4LGiwnpaseTt5gYVqvXzFUq3axYy5au7dqd4eZtwZv3YqicpaYppPyhdc",
  "key17": "LCvvxpLDKb3fG425JiKoLHakAE2CHLLvy2RTxAozmS3CvJFLyNpgKod2wQoKUWsdTbsRLpnYcFtD126PLobgNCc",
  "key18": "qNADbZ8n9r4V2TxYp3e2xofMe8qt9mzq23AWdZ3kzET9ies9RtPxop12yrLcyYfpFyijFY3GWWAM6nacuVN2vEx",
  "key19": "F5J1SutvunmZjKDQoPViWd1tAJJ7X9xGzu2ZFVBD99F4D1UCt61GnrB3cSNixPY55i2bMCTEUqaN6iFiqgCd4XZ",
  "key20": "4swQaqgx46kfGejJFuTgCKut4htpLgDN7KaC6SRE4zu4QwHmCw16MpUCDuJ4gnP5cKND69xxVyMZ5mher1fFvXS4",
  "key21": "4u3AMENytHkPFtsa4TTXf1bCH2MeAXiX54DbQJBpNK1nqFen9XBVrQRDZoDQy8u5SYHR14Fv5f5s97JeccQPWASz",
  "key22": "TUKDkTHmNdKqLnt8ZHuDYV194ncdacV8W3aSZmCtWXGSmG2XDwfU3XjAKyYBWmVSSLyoC2LhkN75a6DbhZotag6",
  "key23": "21n5fWY2umpvdSsJUPTeEZSXz2mdHtUVM8iJKzkJ1u87ur4uE1xXwQMpcCAFMk73o7wvunrveARiRBPD7hGe3kRh",
  "key24": "4m2aXAtsXo6qoBjkRSjFEPrXMPQs6nkZJnvxrmDtNhMXm7jvWBJ51geZeyzaKW3FfiARHQJZF8N3SWgwwcdjV3DU",
  "key25": "DkqiE77gSjHajow6wNMm5WAVSkN1NAaVzkA4uks28tjNw48gHXwpcFRPv9HNnSkoAwVbdi4WxoFd8xMr5cYSoke",
  "key26": "2hQ56U1BXciPSapQ1xyJyBYj88wmpxM6jvWanuK4xpdbcLSn4pJM3qSWx35batK6yroeB4VAaCmJSNEpeEeHJL8t",
  "key27": "3XB3fjECSdTiMfWZ2eRLknu2QDD9An5jyPSx9tuyt8rXjENWD1dAjoh9MkexNdJh7mEDhsgMmxuEeWj6c7Ew5q7w",
  "key28": "4yr8BHAZQtfrvv4MXuEm9QCbJrqUD2wUqyyGFVkkdKTkinZYMAmNUuVpZp237fCEYwULEGFJdf2mBwLZrwR4gWkG",
  "key29": "4iLo9RnwKANMwguWyiV6uomB3jo4wCAnoLdQaHNrdJTCkumcVTRAsw9HNQ3yfV6dmDyUARxmb2nFhWjopYB31u6k",
  "key30": "avwR71botfDCypS6nPxLGgQfkY2F79UK4gDgLgWx2WkNYdrBBc3DZ2Ep66zARQ6wSQ4mPom2T1wtnMfHJ6RD8Az",
  "key31": "5UWiYgW9h1ydVesvKky2ykbS3t6x5n4xj22pCNSRoBtQbRuEK2B6CQEqp36uqqz4bZfWisBhXCAztwPRFrY83NgV",
  "key32": "nJ255eCC8C84y5cA6PKHZ2yUMXiuEqqvMfr9YTDqtSkSF9U23mH8JA9UmXLCrP8cTuyEqyY7T8RCT5FWVEaNMe1",
  "key33": "4CAdeGQDkGSBCgwBJFHbftXPX2NTKHA5ZpA7B2M5ykqvCGruPHn2qRRPzUpYdGPPqzmPcCLoYMbwLSdJpQ6VCMAu",
  "key34": "2yeukJQ9iXE4mYPyEq3rR6ZxVsuhKFfXqPjgtGsuyjJuQzmSuMb2f8CASB5Jy5ocSKeMZgwq824xZ9nxHq3j3XCM",
  "key35": "qerVQs8nuBDwaRE3NkpPrgEwWAbgtxrMhV3yuEnHUHPVaxqcCZ45oSYaURFWVr9q9yBNfiUBmVvPqBCgqbDY8G9",
  "key36": "2cdUawNSjE2EEJyB4XoYGjLjfwMFgAmN2Rtvz3K917cwY7PgGArWx5EkETJxFg1T4apkvpPuD3qJgizgFCbuxNLu",
  "key37": "3X7vCx3E1V6N7D5fiA4qNooKVobywKezCFzzKUoq5vpCMHfARKrVB9YUxPVfgiJnYU4kVuFPcw8L4Sbjwvj1kJtn",
  "key38": "2zuGzNQsPR1mw6wnFvuL7oMpjDCokdAPdvXcMtykLx4BfN1WuAE1WHdyifVs75DEtQKeEHPzRnUSt2iZL1X2adHM",
  "key39": "56WxitnupEeHG1tdGrLSoLjVuJ1kG8XSfGSs5iHPVh55hQ9FJjfpXtn4tSrvQfuMDUk9QvFMXkWuJBDiQV19hhGT",
  "key40": "E9KHJLVakvVdcixHp7LAabVUEmGcUqrH6EhLUpqvheUXL8BFQwNY6DtJgZSYe9zrKvSjio9Q1ecR9AD4qd8kKse",
  "key41": "afY9F84gJdeaNhi2oHJ65bXUboSGEhrCazfvCjxftaJjVX3eSLKj5CDNXr78nDXjtfKQUQagraERuUQGswZPFEm",
  "key42": "fcwwRT1wA1zBPZTy3ZBdPqDFQg4o2PngJHSp1AEWNRFA5yctcjqauYKHSXSwoM4LHAQU9dBJHRgDxx7J2NZh1AZ",
  "key43": "3YBW6eVpTU6BWs5tYgvgzcz9Z1DPanm1fgixNwGS4ZZDSxUQptDW28oUSvA5A1CXTUJ7T45iDYJPxinDgfRV9rSF"
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
