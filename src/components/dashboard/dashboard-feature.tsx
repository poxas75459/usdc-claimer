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
    "mF291YQaLANJEKQfnUYJNfwtLPC2S1gqZtcLDLNDUiUavWFQ3sEVybomfx7MZidDh23dpeBk7w5AH1nCNF7CQWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W1ck7EfxnZaU5FKK5QMNtuUcErQ2SGZFJ3P62Azng1wG4HN4oF5HATA3nMZyb1EGuCkvVq9MMvfUqmEiUMUhUVZ",
  "key1": "RLTNg2sbFm7DLo8x6qYSNHzNTe3wj1EtfqY6sCxYTSjCwV31gyHotnvpvpzerCftDDrujhMfckL7jhbSYitZffk",
  "key2": "24sHVfwmzKVwfgKt5tktq8rr4Nd77e2mMsgHK31Hjk61LCY39rCKjRZUcC2JEc3hJWoASGxCbTaqEGFJyGoe7qeX",
  "key3": "3qZfQdsfCuKEsAVDs8V3W7MnouoSh4Ys3FEBDsFsMRby9qjyjU3VgJLmHAJBjNHJKMCwMDNEqB7wisHR68MoLZ2t",
  "key4": "zqkrqjXzYLfwJLzzqcuDhGQzd6in6LELzZy3ARazpUvZzYTtV54d4xByaxHB3DBmG93AZercja4LZVmAQvtocDr",
  "key5": "3T9Cx3ikZrCGGW4yCesnZuP5N5d5FR6XTVJGWp14wfWwcGzGv9WifEt7TSWGN3MKQsk3Zca2oohHHNQtz2NALbS8",
  "key6": "2QJiqWrxPpZMhg6U7TCLWEbD3tbUJhLX8c1PL9k3byt6PoDaqfkuuHRYMebeeDAPRUw6Dx5vmu8GD1DRHkbbjVQH",
  "key7": "225q64znk2EgX9QGMQvny7NxQ2ZqrS36F8cF6XJsGitD8pAKSU81kcwNDF7xgNAKsiaF1qKiQnpqQb1gXLkDuZkc",
  "key8": "5qi4APBnCNbGCeHerF6arfBKwZuNytTwX8uHNGJqee1Tez4cCc8BN914gMWXewqtk5EMtQdcSSq9k3PMuiarJeKm",
  "key9": "2EhGSNqRhoaQoYAR9sy22ExiPr7ws4JBfFE5x4to7bB7nqWk5iv2D65irvormU6QzfZRygm8YUp2FVM525ysdfE6",
  "key10": "4o1PPj1wNcVTsDMN7VAjVhrXDSx3bYEesSsb5u1NvWXWHWfXvg3gcemPagfRRmjKW6AEaJYxThBPmsJMyHMP7u99",
  "key11": "326AT2h4srfz9H3icybhqrT1gKw6hmThEWAyHrLDv9nBG6hw3uBeS8CcatJfogQPuLoddXQ4WTpJrQqnjbBDyuno",
  "key12": "pAtr4UZCgHccSagwVqmopm2qhZbG1q25YzVvWtnYhRY7WUw2rSYz67jNFjigrYNDwsGSep7nouRtuJU645sGhh4",
  "key13": "dEdPP7Jh9STUXT67QuY8icRGZCzB6W1KzAfGoa6j53Ubf6iTaJMHBjapuaFbFuTdzWjD3izZeR9HH1koxmuz4Jk",
  "key14": "4Wp4FSCv6NNt9EyHsLPyvsdWV3W37bMjRQTUAGqSnZVxfrWLB49JK7HwgyVm6BCV4VvJqmWTD4LiTyHSJzgMqZeo",
  "key15": "2ZAzLwreakD1VuvJj47MzX6zgpQwxJeDoVQXRdSz9pTnNFG8v4g731qCmifLT4VBMSPjwfZWw5QqzZysDTNRSyJJ",
  "key16": "4eHBn84W2PwVA4XLuTGnpCxNukqsg8m4JJfT49jD3RyGDE5onRakaQCGdSttMT1CXH6ddoAjBZ4GhGeFvC1Gy6Bc",
  "key17": "5LWFmWUNFsxE4fwW3orv61eN3T7BGLPHnFerrNAr2Y2kfQSHPQfZCQAD59CLqvf35Pd8WRGYmFf2XzGgkpMHy4Su",
  "key18": "5M2Jq6ZCb2a5dqCHBdRbEYNBxvAFQWq29933FGNZcRmsaJcqxZmo2aUeyQuRTNH6pYfYcbUWmUDYcCd65BbLGGHY",
  "key19": "5cNi5EwYNebyyze8Ygk9N5v2Fcfy6fKKMD2DgdJ7n6mpe7ftJj9zZKsM4e4y31DFTAubJCRW2L3mjTnJfucdEkqN",
  "key20": "5dbu6g289rxpWuE3h5y5okXAfps8mZeiKFQwvsnYYzqEexjpxFKDNv4BUGRoFkJFZoAjaibaM4yapJko3wrzTyMJ",
  "key21": "nV4WGLfwamb3pgNPyNDwx45JxosM8exHJixZCCsF5k8RhWGimx8TZbdCVP8oTJGJct921QQmLtLZQkTi7n2AMDs",
  "key22": "5r6WnApYQrvi35pNkSJqbXsnhMMDiQrDYkN392DxJA3kmeJGJRn1hBNX1iWhi45N9cZ7P9R2r5N9xABeGTr3BMWe",
  "key23": "29bKPGoctkBG3aLHKbw9wfQz16FfJq2GhJsumU3yZNk54WxJpDybb6U8ZYFLUU44e44o6dQRxLfAQ7g9iTVsnFbP",
  "key24": "33fKTCdfP5kHFEPnsUivECVRuNbrRm1RvtdRCQrUZESnp6eDeHCtuEzdH34ax3u3ePXzDvdfZGoQmjRnk6ei5Nic",
  "key25": "2oxD5us9eLWWc79ND7LJnLu1CgbL3yDVkxkLgXwTbJPthMLsh2Y7jtf1UTtQ7kUi5neueD25DU4BG9QrcGf1i3F8",
  "key26": "3RApayrGES5k8X6yKgpgZqYVNm3puigCtgiJciS4tb9JpiNaz1Jfqr5WrwhRZsTbmEZL9qK2jDHyEHM3jNt8wtJu",
  "key27": "cLjbpCVqaMJgd4BGE7GigBmH1n9AJxTuoDm9S2TW1xxpdBB14JRbFV1v8BKX8eQECwRxVY2DT1S65ZnPxFzU9Rc",
  "key28": "4CBVovLZvS7n1rPGjEq7RMirV3Y37FXLbUPFnUq3rwQxuJyCN161zp7fvuNhVDoiBwuDc1VE6GKmZu3q8JQcMBgk",
  "key29": "2v9P5umYexPkHx6Lmx5DUuHN8Z5VX6ijUaNChmCkURsYaP82156rXFHp8A2UVRBFYRFDWUmGms9RTudGwrmFQGdd",
  "key30": "5PPNfCUAYp6nmzxqH7y3DyQmFWkwN8ctsorkBmobmm4PH57onCHb2WRzYSVMVTex6J2MfGQgmCDwooQUa2b1xjkE",
  "key31": "3NztZufCtaWhYGhpges6wnV6i5em1cWiRpPLDv7wCufWZBbMtLuwnJuLseQzsirCUMGWFrgadQcawAHr4S3fM15g",
  "key32": "53BpQe4quBMdupYGrxwLuY9gVU82puFsyS46dS3jcEzq6EGUfJC6VCfXU2HyYqdGMuUUfX3FTiyQKE2J8U5sqfSe",
  "key33": "3ksd3A1D4Eo9fzcwYpNiFtmuFHPvnEscEHhjZXARk1bG9wDUnsz8ovyE4ugYrMJMYxR9LR2dYPekVJr2AMdGaubd",
  "key34": "L7aanqRx8AvZTVMi5Mpx6mLCoKQYhtBUhuxv8Y4B6fQcMZs9aYKpD2Y49JoMwPwHqhG61VgYVmqLstXrZrZ5ZA9"
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
