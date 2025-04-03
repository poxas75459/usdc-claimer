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
    "3mhTE8WbPobpWUccq7eWfTPKG5Av6mdcTSgUjZMLLvPBNujsgD3angYWMgySP2p4jJSUkkkLe1z9Mm3zAMmbSjWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58aiMzBPe18mPytKF6V4Uv3MuuudSV3DWLJMsersSoTVy7pPPMuKYjXPLvnv1Hb5djAcveVy44cUMV5cXnsACrU2",
  "key1": "3UPopuCZs3izdVWZK2aRtZcbMYScfcmPqHaFGwfgNeAGJHsTzN2HyHr9txuuznLv4vsWXtNF2pvpEaWavJ4jMyK5",
  "key2": "R36MH8DmEBuKEnipFzBYXJbBhm4dr4JBo1ZK91HML2DrnE7im71mabF55iCpsyxJSAiS5T2hrLfLC8EEjGzESaU",
  "key3": "1stY99cxD6xGJnBRiNWWxne2ZYnigjJBvTW9SuauvTrwQF3d2vGdm8nHF9VLcF7WC1TToLsy2UbGwUjAr8H7i93",
  "key4": "4wqkrU94bGwGaTvTkCF6LLfiGu7PngBsCEeh18WZvzPMrKVfuLKR9sbaV4pRpceGNCuNjK9jGFPYU6FKF5xL62Uk",
  "key5": "5j2Twt9hoLmCSdFJDidNgFFGAgfbhVZhXYTLr3NqWiWGFrsSmm4rB3Nwbtcd32jbyEdWspm6uHh2jA4p53BtT833",
  "key6": "2Zn9GbCSLqunhf4prXvmr7FRRMTDFbVGrUhs4v17WBQ7wSiRhDYhZJ2wJMB3kJMVSiQw1fxQ2R5Wm462AwCRbv74",
  "key7": "44mFvx97kqkKozuWxXfpz4Hh1SXWgkfdRuXJ9XDMbUiPKeyQqzsLooCsobH3UzbnZxyKN98yjHcvYhZnqXdrp4Yz",
  "key8": "26JzVp9ZT6zJTKYXScKnqXdHPk2M7yKYZ4GAMD61JvjC8Ruyij4uXbm8GJAke1Dwq15euptv7Xc15Ft27QwGNHjx",
  "key9": "4Da5MyLJySk1i7pPf2SZw6RJAN5AMFmCDMiXinNwaesqLZuy7hS2BK9Qnq4erDPevUCaLaRMGwmEMddSurKmz3uw",
  "key10": "3WASEer5tB7HhF2xiAgsAkTPXG8mz41mDXuK4QHfxAJapjaSd98WjoiEgJXfLnLNo2aFnKL7KWL9erqg7z7z1qjA",
  "key11": "4Qsc3F8LZozmmf2ukrpaWK1SicpzNneH1uu6Tebyy2ac7ZHGJankLPiNKhnhuBRedAGv5hi8fJg7ESbYB5qpMrg9",
  "key12": "3LQn8GmnDtoPBTTwKfenUtCQwdXJoBic5nAxJ9teLiJGywQSirc5ipSCyB4upLCXvVeQ3WZZE2iRNfeei9bq68xP",
  "key13": "55qpm8MZLT8Jo2QusQ4xsmLqbRR8dQVmJrsn4FjJUXW9EhJXuEYMVv48YscS7jYriWvbjm3jDpA3YT7SP9eDgWjD",
  "key14": "945EUPN482kMVeAiDTsxtvSNF7M6SW95mUe7zTyBMG9cw9GJUdHiCisD3iENF7MxLGSd21AYAgBjzu4b3E1AWyf",
  "key15": "4b6KpD1QzKEN7jMSZbkFU8w3aGgMHCL5Lrn8e754u2bsZA4X5TNVpue82pJpG8k9W5aptZdMCsrt1hRpAX6ScKg",
  "key16": "4Dz8Fogn9GKkeNRcYZAtjahNtRLfrGt1e1tHmXndp7g6dekhoGvKRgEr1HabFrmqsNyjiChSry1M6AZWqMTLKcfV",
  "key17": "5M5c5bZvcipwGa8yYTy6dheyLez7xMjzfz44Z5puyA4nfvhqv1hSLLouSnSPVaweEk57UoKszbFfsBsH2Nw8wYBA",
  "key18": "EHBoRVX6PkkRcmDDXgenZaQgafHpbE2kGc3wtXpz1YytgLoDMUp1AYkFg1aojm9H9QZcENCg3BWR513wiZff4jj",
  "key19": "25FiHQRJ2sHyTuLBBHBxMpewuZKoqFgEEMo6Z1xw5t1eenKuu81xmaBqsYBUBsqTeGptb2ZvcAP3Rp5SH7bjvDHM",
  "key20": "VzjDvZogurbTio9MVVkBHSS4f2ovSdzvgSGBCTaUzM4K9zVLruiLDuWy2uBYk5nXuYB9NXv2uupMFMXHXGigNAd",
  "key21": "4Y2AggSVUgYmV1HYgi2xMmgwMZyXs5PFUPZX7yvQkUWnT6xiaHeNqtcWiS53vkwhSQWCC1re1S85xoo7YXDBueFu",
  "key22": "m7X1zzoiMkyq8EtSzZbt2PcYEDNuhJuoB9MbqGVNx4wxWPDCiAC9F4pKNkuHPbRCHUXbzYfBTLmRrMBtSuZmCAV",
  "key23": "E65rPG11AohHetsHM1Dggf8K2WrBfK3qGJV2LejXnShtUWJwuYARfXzrdKiWv7Sn68t9quXDLCB7DygGdxdmGeY",
  "key24": "45nqQB6eWz3gawFZXC7FPsMCveXaWsdQVfGHp8dwxLSAtxD4kZy3MWVWh4dWdmudKmgu7Fk1yH34pJzA1r6VF5CR",
  "key25": "4g9iucUKaRtXTcnFMgqoeKRmb4rNj1rJEvGirhyFkvMA2B1GzUhHdeemUrCJyveZqXe4mC1fVn2f5WRRjyhEMrcM",
  "key26": "61gda8dXZ9VeRVHv8JeAMkLWDYqTuNAcy9m6tUo2HseqFg2Z7AAhWGn2cBWAedwvgcSoq9V1qCH8UwrYzNWcH2Ri",
  "key27": "yvCDSUXpw9EazLSwru2wG1bupo7gJGRqRodB5FwSiMbRjXTJuu6j3jm8nx1TScx8uC8o56R5WgUDF3UMvQKGd5u",
  "key28": "3tnhCutAVsEN9zDKXx31dfZs4w3okeLxGoSmmFRy9GvWfDh7izLWjRBz2kFGXXCXYxjLiVzMG2oz595HVwrwwuun",
  "key29": "2jGVeEksvnbEtFthu963UtuDGkdNfacfgaz7bmnkkDmkJL31eRCtuhcraAjVD8czxAFTyAK2Qi5pVsYaTRaXK8Be",
  "key30": "4RWD2imAUxqN3VsgohAgMWETBKFfMhrXPWZ7WEBmUrwqMxnqfcQf127iDe6TdLLP669mMTAaS1ZGi6pvfthABHkq",
  "key31": "4YvDq7btumo1fbeayVwczXYa2BocxEpRwtpuoFJX4ZXMqFfqBpvf8dSGCeyuFnmyYYxGDHL8kVCXn7unmTHLzLTM",
  "key32": "5MKhCJnWAQwvzMhwny82KxkqyQ57L5n6BZdgfh9zg9gkUy9QhfiCQPWiThKXQk8fQe2PKYbCvH3KKCsVycbZchS",
  "key33": "65q8vHmVCT8k5jMEaBSDE48jwntpXHJXAAYhxDoBp3JkpcpNQuHbXh6Ekv3YXP5fvonmnCXQ8vuZZYhsztn36h7N",
  "key34": "2DKzu7vvfB2HX7kLfiTCq84isf1MGQmMkKzmSZtjmjM2uQxWuxQZw8UJ1y31QmGFU5GL2uSKpe4Jvj59ZhsS4Lyu",
  "key35": "3bsYgajBUSPidtj76SC1GFYsC4pxPB3sJHYpYmDGNoKkZxZX3MvVWPE5pTe9EBLQF4tEvagGF2CKVfq4Ld4QwbEu",
  "key36": "43miysg7JwWW1FfjeQZDbFg8jEWPex2btv5Tawh4YmRrecC2vttyxcV5HgdA7nT6dmiTBvs2mNmDwMNrLfseRtYC",
  "key37": "4ZzfGyTXbnNFNRcdKeFmnYS8NQKPzD2iSwuxXr9ouwSE4dp2Gr9CcKS3Qp2qZACCW9m7kcktxUDVNgndKgcVCdSH",
  "key38": "48CpkDiWeNbCwuqDq7Mn17tyx2vUaX2tzpcymUZFuaV373G8JUZLTK83wwxkxjCLdfAJRLFUzLtAyqbgLcHnbek",
  "key39": "3B9iwYezivjQYH88VWSzSNARuTF94iVsAJKRZ6sHaD9jucjDyoF21yxFqg3YMPwvXnegq1MzYPgihVSSfJQYVrf",
  "key40": "49Zqmg6h5wrm9WzqvPEcxVyDYwaDpcExjW9K3Vvp2BrX5QehaWg9HgufWvBnm8EpVd3mSY3noJGbdTUzD1Tygwu",
  "key41": "3hM1BY3rygUiS7vommQfbECbbBKMmwqtzn5zusrcmbZ4VXZymuSCAwhnU1QBeadcwa6MofzhySFxcfJVHyXQmYvP",
  "key42": "2hDZ3i48E3vT1vTqZRwd8iUY9aNFoSXJZP4yGf8bDwuvFzFeWLj8YAUWL9de7ZrT2FcTo16DPUmHqqDP9cDPE9xd"
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
