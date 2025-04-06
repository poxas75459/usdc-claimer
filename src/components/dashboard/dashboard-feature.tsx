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
    "PACzJYjRurbfFQUFdq9BSEyKpWWUTN1MCCtp4QnCAADGujg7jqtgSvhusEmtPESBVSn9xjLvyKLQVsGNrwizg4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uLiZsEkMbe75rfRQE8byaRmzM67Ue5mZtBcTxSYTSZrTABSLKEfAB4k8m2k5HM4VtFSzNgjgRrAMcJBgQKYWLCm",
  "key1": "3SyHYBEQJCQxKsAKgL8tJi2bUXwaRsQ3pfBMJViLJUfj8odnEsJGpM6tdrDXmAUwzBMg6x3mded15h8xRgqzrtXY",
  "key2": "31U2pfT4kiLa3PknNRdaKaVXN5Ag16rtgTF8pnqwuT9fgtMuw4cPTk6Fg3AJX21icXHBHngbQaqV5pGY3hon7g2m",
  "key3": "Z1DnBaiTc9PAyyJmkNM7EdkPHmzMF3sTCSUo3LEZt7Zv9WCTHz97zKpx5Ap3mPxZP4w7KrDNSTSd1LWac9sRWor",
  "key4": "XVMAG12awcm6xH5Ar4LVfSeibeypTFR5YgCTetH6qbdzhndRN7n5eSSdLVJAHZgqFexixeiC9arfPiMpATKczzz",
  "key5": "2VLkLuDd222qwHzyDLyRiFBUmT9doxgv2U5LqoeS9VUaPgxEUiNvbcfgCzbwpFWLct2xmzwdL7wGT9DLkk9REfM6",
  "key6": "yNsSQ9xBoAEzDwuj6tL6NXi93h1N853ggdgGNyAAPmApGq2ZKmsCks29i11eij8ReYxJkNTuWpVwzgiKCykrx7R",
  "key7": "3gTgHMgTUoJFxtoJfaiS5xVQfU32TMDK7UJ9SdCJbqYyv9BKbaxYodHeMZL7e6E57uzKCiiWUUHog8XC3tPws7eN",
  "key8": "2eXyuHfGQZBiucfnNSwihiSE8Q2boDkmWkciUsCpmDseYHf7NfJwV7LwJj9NbBkV8kdtRTbkNPekzJS6nQF1xT77",
  "key9": "67SVdMrHbE3uF6dbN61uGfBxj3wbPRjCJQJGeBgdxUZfD2d8FEtneM3i1NoDfXp6CLUSvUxgYhrtiNJ94XZZfPwU",
  "key10": "3WAD6U1EGt84hDG95QTzKuGuBjDGHPbFhpCKDmAayVqXtWBxdcbNEZvbmAefznDwQMwepKFrUMn9YWpweYWtfhLj",
  "key11": "jkuJLoAw2WC8awm5oz5Ro7JqxSsCWpq9yzW5d72bGUEaFpv5RAf1yrXP3vMLp7RpgLZ4Chd3xEzKWUq3SRwjrbm",
  "key12": "Fo3rmmoLamQjTMtfJSmmbGjwQvQMJcpFYMReWTzYn7jcSWeKLE45vs9CUzkfSMSpCfNQBiArqkrmRqC9boYn7Sq",
  "key13": "5tJEdBtDFf8fEmUw7nk5Mnewd75VRrdGaTMP7mapNgVEdKmybj1gHLzEaiPHzPS8VwzQF7gBEnrbMaDH2DXFmRHe",
  "key14": "3Kxbv8C76FFaexR91tWAiwREPaER9p35VexkfsBQL3cp2J5ZQzgV86Y4Cr2iLXoiqbjKPynq8LbT8miw617JT2Gt",
  "key15": "4XLZN7d4Cpr92UDFbrSuzvKS2WKfVVMVcodNgNWFBBJ1S9pC5m7HmvM4z4K689xtdoQ2ct4jYDorSFv3Zvr3cvxf",
  "key16": "3euVkh8e8Bykew5492XsdGKkUL8JQUKx873Pkr4mVsg2gifxHkMCnrpsJbYRvtiR79Jg9E3jz29xmhWeXybcPqg9",
  "key17": "4gUMD88q4Kom1xR6UEcnCz8cQotspkV4AE2Tu5Zo7b93S9syTZsZyHC2bjWgMwyVGx6dKGeoaZWFaKwvAB7iDvfg",
  "key18": "4RZuG68chYrKAhuqNfdhsKbN9DEEqNXvwzFQtsShco2McCkKFo8apP9bGcQ8af5CNbCRrerJyo3kGZfCT35KbHWq",
  "key19": "3Dob23XZEbUhgH1wqLUQGoGtUYQv6zcxAxkMFeYteUdwKx94TVDa1BurtbAPKpV8f7UHrdCBBcrNkYS4B6aeygqw",
  "key20": "yZjHHH8fwA9rH7JGc7atE2tLRu2HcDke3zGkC7GVpUk8JT9X4uZQA4GZtKiK6y9MZuf7mvQ5S6rcsy66MbwD1ga",
  "key21": "4aASCg7mQT4CqBf9bx6VTREKTNgDV6Qq58GvAZPLWLyjuNPdUpycEcsNtCLAGyaeDzqVjxEQ2JvXYNzazKpRbpiM",
  "key22": "2XgT5XuNRLFcudqp79YfSq8rmhkCXAYP57eGX3gfNN7Mw6W4Xy4ZaKNDZYazq1K6VUU4Q4fV9brKgtFEEQHWptqP",
  "key23": "6VUBYnuBXHHpswQMgPdUEvhc1zPymjmTS2uRiWCHazV52kgYcZhWM8bKj72C4TyqcGGJhyjozgCkkBtS58tQkCn",
  "key24": "5qUY6k89JjMkgSWzoRwdDjKMQYy6epsRUs2xqk6Z4MDhR9yg2SNvSZjqmUraq73zxA5GVp2ho91vNJhK9q2wLFzt",
  "key25": "4m8MVVSPBtaEXQFFov8PgnoWwCHzLwd6ZJdHV9RNc4ffFSAbUUdr5vgcPXaEz1n9vqyaTdu8pSR4hy47Anj6ToNE",
  "key26": "QyRguhMKdMXptLpYXJPvWGufsxEcbWWNNAdXNbFTXAx3uxR2f6abWNPVpMtPD2DDWqMEpowcQEBhs554jossoTr",
  "key27": "4KQ6zqnHkwY89JD3QSzJ9BcYM5Nc6vdn7weGNMpuRoftQa3McXRtTehWTFaZ6n9GisLwL7r8rwDRibaWY8H4L5EM",
  "key28": "5RaXMjc85ZvugCqMLuRzfufhFg5YHjUN6gqwQEyRAvVmYEfBTkqzaa3LKG1qq5uHCVVu9zv2rhrLhVEC64LYnmiC",
  "key29": "4UkHGne4gaXoPvjLNRBnr4ZckUw1Wfxt1RjcEAdFkWuRmzZJRHs1autD6BdJaf2oU6Eumuaw2F9v3kFD9wNTbWFn",
  "key30": "13BRHGu5y2NsYJ2XpC4MHFTzkajCak54LKVJ82hNa7YgGdHb3F1DqHd3ywupU1dLDyPqbNYxTUiiaXjAkUBeu3J",
  "key31": "4UTFKMHtEbDzFkAuDFLKyCjzdXCzkCqP7w2GJHYjxdiJDC2De5g9mmLCheNJ2g3htJQqAXwkrCCSeKyNrh4PKZWk",
  "key32": "42kjPtPT5FG4Wrif5mHTeUUME3awbKbLDbfUj6WZumcMWNNWfjxXgSmiusTB8LxcUx72wiN96REUTkt2FaEZ6hZw",
  "key33": "5S3h769J526VSTukk9s5S7x9kS7ofJ7asV6nMGBGPKDKmni8ygavX44psUuznpq5kezmFt6W8ECYdvg1mXxKiJvf",
  "key34": "35gYfpBWzWfvKCCCwCLJZ2GKxxfBaiuTqqqfMM7rcdgViGUNJipsWE4Tv9i14wDt2F7n4TKMQV8ztdtxFAc66Rxp",
  "key35": "FvKMssXNwhyBav1n4PiALftF1q87v5i7Ggy8WWo1xfyK3M1FBahud9HpLLnwLf5NcFvWK48tZeJpyTR23PyTCLX",
  "key36": "m5mAJ3LsBLVPgbNiX3rMsS6mxoBZuAZDd9LMWwvc7kJCy4kgm7fvBjSGCXEFFqi9nsGeRop3HGjh3j62NZAujiB",
  "key37": "pFZ5YUuPCdK2LfbiUKveZfJep2pG3XZxmEdaGGTcWTMjGpR98wiJwxqaHu9ANHyPbpKqKJH2BLu2KsXJaV5SgX4",
  "key38": "CJBDbT5ZwZxDpi2EkYHAD456h7zrHk6PwMZ1FJ4fkCYcLbEozG5ZKnAN5zTb9hBrFc5fkZRq9bfiKaCUBVBAu3J",
  "key39": "5btJkPBJwWX83tnhdLpyTLQBEcDao2tqz6h9kb8f7TTB8RFeLTPb9kqEZBnimPYFSh4CxTrbJ4sFrdVJujQWVhAm",
  "key40": "44h4V9ktsA37zyuHkiXWXZJQiGDv5qBf8D1DHjLjYnHM23XVjYKspsNyoDNHvLRsj29UBLe9SLVLrnMnmdRK319w",
  "key41": "ggChFMgx4F6n9JxCTx9FYFtC18onfUngqkZFRq49xC4K6tZwVUkQxBJzqXnRabEudkMBBXggJccCeKHeKHQv5mo",
  "key42": "3ygWnxnbzDdWtSnTVYNBUt4r8ctToBUQE8oxSypiS8JoqaqUoqNB7Mz6LyeNbAJwzfSidykBmewbCJGjff7QYTcb"
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
