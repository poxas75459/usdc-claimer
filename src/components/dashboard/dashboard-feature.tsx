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
    "2DxPutd2AsX1SLjRtfcuVNRURDc2Lcoc25Jz5pz3jK8jRNtmFYWBkzpzx3VhPVKgucNj3TLTzCbKSnfnw7kbXr3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gdLQdNYo6vwzwEhAsGXZ6JYAbp9Ni6zx4v11crGtsQFTHVCvJz4AGhARDm2TDbuiZB3M4Crj1zbXT68fpJVqetR",
  "key1": "2FcrKTzzVGXp7jmuAjXCWfFguqKFTk18MZcGEJTfU5DZyobnpucdpyVzuJ7Jtbq7gpgfd169QkRgKzBvotkshLrw",
  "key2": "39uargV34rCjnr7Us6v4Znc2JVJWLzFUgpj9x7jBq82CkRhT41rG3StxjaAGLRNyoXcTJVNdgMa8prpwP4d1kAxw",
  "key3": "4qibbmrrXkkNNEUT3khbZWgRpBoxPyWesaVJvPFcN63kttJyxWUBaWa6bY1U66NdhLt5uCQYukt697YBTdyGgesm",
  "key4": "2kxvsfLqCc2HTtZds5foecArvBPud8iznLPJZqgvKVLBX8v83ST6A9Wu3jykXNAKS4ggUqBuk7YmwkuPGTeqcjDF",
  "key5": "2eA7c5r8aQMSKWcYRerSusWRsxtw9nNo44jBbA6tTkKvdbCjTJzEuVszPM4wqaK3GUZtNJxnfRWw65WWxNbhbvfV",
  "key6": "3YTEaotYUWTsz2zUUiBhXXXLdj98ri9w8dVsXtZ87eGFHXjmXpXTVo1qZNv2FFyFvLp5V1CeaGgtyA54TXsBb4GB",
  "key7": "3a5GhtuguDVpEixHQ8cCneaRxdSfDDWktHQMS46Cc7UiHryaaeBqpCLLuehWKwM5YFfUJpP4jfLVidDBFwXtrvWD",
  "key8": "21CD27SeKHseDwEzggrXZQMRxZLukBn54C81HkfELgUu2674dNTv4Y6Ve5183h6iJTPuVMR8JyeKboCs15Ks55FG",
  "key9": "62wfWfeJRt29yAkzJg8dKLZ8ikJFtttZ2jcVvSS6pG76uBNbMsdRjxN9nyiTbx1Es2BWJxJKERFiWwE81h8c4bNM",
  "key10": "4haMTDHiYjTxEZT35tiZ38v3xJmoKkDgVQzH3PHbzqT3JPkpgBNbbBFErYBoz6eJ23uAakJUMZCxRuWyYAkaUgEg",
  "key11": "5NdN3GUCBmKAFPEhv1BmnYdEsi8hD1Xq94wsGoYC8Y5t18rc6R1Em8UL8GtbNe1SQ5dwZCbRxkpZF1ZrL6t5ztSn",
  "key12": "4yiTNCdwJHh8QwBC9AtZcgDtDVzvmQH6mywVKHHTLb69ETyEyr9vZEWbKhY3E5GVoF3CcykMmpXxisx5hYWrvwYh",
  "key13": "4pKA95Fe2Pq1iHb7uUtf5GVkzK97QQXQV9KRn6uJpcef9wEanmHj9u72h3SmD9kSZBnE4zn2rfN4FmVS6YqkEVvX",
  "key14": "6YgQMosmZvfgQjVazAscG8qApspB3BAwf6toYUxzt54b2yM2pBHM9i692fLgsSq4Jyv8DGSzFCUhKk4J3zxyGdN",
  "key15": "5MUH1yMCueGHARYd4tTbuzPCJzpP2t3Jrzwr9pXJRoZ6BBbebgWKs1F1rE1hzRRPutzY1dBGiRL1QUK352sWMZ43",
  "key16": "2uaK5BGQ4JaLpAHiWtQ43prqXaqwTqrNQXCxgTyKVXeosQTNekN56X3WMXnw8kuZN4GCAN9dGj16b5bLLwdePppT",
  "key17": "mDj9mVyTVNquPEHNnPbhX46XaiXaRRWCAx1btakdJVm3FAjj96EtYCH8zA85HBKJokpfHRbCuvHwhabmUsRQPMi",
  "key18": "4eymVRqkuXSFrCKadDVFgVtnePAgzMDXH32mFdJ5rrnbE4gzzbeo2oaeUcUZdQJDC6PdJ8J8CnMNrE4Vsoje7pwB",
  "key19": "2XFkYJgDpFwfE9byXH7MFNZxE3Fg7ejiZuYeY3185FDRgCt6DhwJoZmsHHv1prBwimLFAhjmPWeawxJ6pyhwZRhc",
  "key20": "433qeVw2rhUeLpavbbBSJ3CtHv3fMyZgiS7jarjKatJRb6YoemZj6SxxjPSQYdkBkZCU6PTUVckwXhmNh3ffqxxh",
  "key21": "27KfiDYoL1jTLyhCFsg4zmc5pUaWaHD2wdeBDSvnE4Re8K9QWfaFXJ75E5hFCop71EUxEt1sLN4wrwjUgAmKjVao",
  "key22": "2PZLbyLuE8LXF7T8Trw4KsRZcUptkQH72tizXSrMutnnJV7zBDMaDzZwLd5dvmM9CzjsiHiGESZBEWfyzFM2p9UQ",
  "key23": "2h2nDNkiYoZGLkromtN3Je3ryY1fbAPyCQmnMcMRc7ZTkzsGAtLDhxi7bATr3BZC8CPxjVuzBRFBt7q7tQTGSNz3",
  "key24": "62Kgv7Xg73YZgoWARZR625YEJwhmzgoEcdtuzUWKrbKMEZsvz3xmdAiQ7tviGoFDahSFdptB1xVHthXvbNYiTQby",
  "key25": "5mU2rTYB3n2vS9E7Z7CysES4ZQ4etc7bMdYACEg52aF98BxunPUBZCCYQz9pAtxop9rzYyWSdsj6PsMQPVZALX6E",
  "key26": "tMdQFJLaQ24P9d4WBir1FXiT9WZ2CSNiyRJChLbnKu4nrb5BYDNbrsc1o4ZQQKwmkmnxLAGDnCncbR7SV3ULu9E",
  "key27": "5X14mYTVkLgwVboC2U84VtRyLHemjjydGKLsszG4guwJEoHX9YLDwXTyJapMTf9rFvfQDaqaFJsodSfneeUEH1Ej",
  "key28": "4skkWuTyffQgnpmiQW5ibkMFQPKGqQxkcZS55CWaqhJYCmLXFBFoe9gvtvhVXviodbs3MBgScqWMCwJHvYU15ZaW",
  "key29": "4YvP6URER9asCooHe8xWHJTVBgC6imXSwv4twEdSC1b59c57Mvo4K2ZsS8MWmu78LBftScwePqVM7zeg9crveahi",
  "key30": "3LeAi9ip3qeGDmevqHCG5gt9Kk9tvAxsUXeDR7wLZenVKRnQYYHAH1vfKRdMTmDsuFmVtaT3jWveQPxu8WXALsNT",
  "key31": "31oSLLsu6ufZPd1gsNEtUc8tkGscA2mfketLC5boBbBsXD2g9CBuTsdCLbCY7xVRFJe1Z5ptssLPWfgkLwh57KrN",
  "key32": "236jeVxa4siBcECGsSDabGR7fTa9bU4LRxd1eHAjayJ79Bz6miCYcoK8iQpPWH4v8f672LnNqLiv9HjcFUvdCUUM",
  "key33": "4dwpkePviTu9d5oVXbLq6tiRBNzrYsVd1oc8bgYKkZJtAuFzC6g1hY9GEU4tpsvV2py2zSxnhK9P8ZmsLVDjjud4",
  "key34": "4TgU2kG8ZfQiuXo8UxgiJgGkytLppSVbL55qGqs27pRgpA2KkH7HYewzzrLUvSrVV9VJnNqKiK7RSYG2P9wotCJ6",
  "key35": "2NKAWAAc6CtSEq3wAQat9u3fbTmYTBsuWTniHu6TCutKg1QTNeTgXP3AAc1GfxsiEGwJvQEvHgRj33WGL5spgLcc",
  "key36": "4NQmdoLrwPmCPP3kYvWxycJAgXoDx2FKFVkSY3oB39vZ5EJ1G38j6EF5eHkwC4rhyKCEcFF1ivZ7khJes6EiBepg",
  "key37": "2ZscZPk71syB8uVJqWmEunYptrD9yTHR9MbmjuKTirUQtfT8LyrdAJqsGaN4gp51A6TGQPfR2SCJ3t1uvQRBKx5D",
  "key38": "2QgE3EyWoNnDRkN74Pf2yeb862X3bCyPg7chXxoVEEjaWS4raCsSrSGL7apCGPHUC3m82uxXhp5MukSykSFNmRQT",
  "key39": "5mq7X9y78zFxiGAGWywZe19h124CkdmzfEjTFRsjaDfhxCLHb6u9squf33ksGWN9kDKpudSugepMSxPKxp9phhRT",
  "key40": "4Xiwt4UFNhvuEjeCag4F8h6YtC75zAoR74NKVG9WLZVWrEFLzY6xW7w8quufowApYKE4Gmit4bLMwCp8Tkoj2xcS",
  "key41": "F9Br7DVDwUJZnAVdufhAGs7EfgcvtHykcKKKkRNNdgxFgvC1q5mCNerGDkxcifpgqowR2uvquxJvZRbNoPo8km1",
  "key42": "2ZAjMW6kjyJDbUJ9kUQ8aX55ZykSBjx7JbcxJhc88RUHmSUUCu9KXcmgwF8eoqs5BVqdDVRRhygGVShPeRp3SDnP",
  "key43": "3eYZYAePNjWdH6hroDHtWcsRF2BAZHESvmboPndcrrWSiw1oiAWYZW7JLcdrjTQJtg2ZB7SuYrMZ7vj1g2HkKzmo",
  "key44": "hePL5HpjoCY7Qnr33rQb7ogDiwceaNc4c8UqNXMdp85kThj6aUp1VutL5PL6G5snFerynUpoUEWFugqMLwR7CQN",
  "key45": "sEwxTsUsRGX4eK5fC4DPUo3hW32ZkcntfZnFjFfndSi2DdDV9DH5C8qMK5szuCQdQGEWTqUynwhVWZY9UQz77me",
  "key46": "7Rz52xnvfMwAq4kJ2JJvAJdcTZZSm3K1qxWa4wbpacWxAdEuFMQ8uyiAXSa5hp3LYxUrUnJxEYUZj4GGyWg1MF9"
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
