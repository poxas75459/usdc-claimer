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
    "4K5y5fT7jiNGeiYpX9DbNXJXxVb9F9vSN4CsqZrSYwgu5qbT3gS2woJKkrREA3FghuBx6mYxMmzcSj5sHjuMdeAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnGVNh5BU5YnH4yAfqJTfs9P1bdF6mcL9hS118U32t4am8FMXKHJSxBgeU5p3GVWzrw9t4dBV5web3f21y6BSvb",
  "key1": "3Dp8HAwBe6mtKRK3QKsJ1pk1SwUcCdT8YUxCMmq2SbB3ueBMjgyiuoBqQ6K5DgDtMQoiRhPwTXtWebn9aT1oE8W1",
  "key2": "5yheGaMXC8XYL1GPXrc39cjWoAn9nkufaxFkuuPEKDp9nD2R9UEEMcp2re9MKhbdcpsqrTKCYJzVACqgYPsq61P9",
  "key3": "5wPesqwXQDaM9Emxk57ZcN2Hhaej98vfGy8TNBdNUGmejjUZro4WfZGYcwuRM3hkRGbz9RPGqzCB9ugiutkcHkAc",
  "key4": "yxbMtijQyMJoufSXxXLsCSFirweWb9xnM8tgvJ1MDcio33b8JLBarr3qY5pG5kAypDqXKRHiALNbz5QsoL3Cg7y",
  "key5": "5Wh8WyLEcfyijtLvgEwjPQhFzDC6BGAxmGHYswFtsgkFAyZ5SBUai32KNzoRYfT2c5gTkEQdzV3DqXpxfAmyUSwT",
  "key6": "3rxwN3BTaL2XGq7g7EtSpiUDWgU3MfruJtH7dTKmPQhR1qVVhVJyp94vZ5W1QicpvVQzHMaXB6L7FFuNR8f7z6KQ",
  "key7": "314RRCJAjSkupNqtZyCdLz1QhgydErD9t3vgMH9qFZA1rZ2Wmaj8JKr9AcnukptgpuY199YaYWWjCm29bfvdVvoQ",
  "key8": "3Yxh2jPH5PTrYT6crqi1kHE3cAyLLn8h8RqGkg9o3CRMwNhDtF3Kp4KSXdMfyBv6TJUTSrAYa9zWxYxcfbTRcMs6",
  "key9": "2dphu2yENgkFxSnvwrnwFjt39d4Ln4J7ZMahr4CS4Ja7tmwjfdzoTrNuQQTTVHPsAQHXNTEE3j5vH7XdG7zbSD3N",
  "key10": "2X8dcaFYEZkSNugxgdxuhh4pZyMwSP6Svtrt8Q9jV5GMW54bV97PkeEQvYQmv8tGBxCKefpvURjtADD3XFZXk111",
  "key11": "2kEMByiSBhicBQfcRLTCrVkShLy7kmcWy7EqfY7dmmWFy4dsszbrVUwksoxdZKEHnWQXiBPuA2iGQm6dahKGiFch",
  "key12": "4CijauU1MfuT24CWwEJcH6YogNjLzzEv2v3jMx7hQNg1W1GbTwqLaV5Nwr2eqFNcpEqpoaVzRdynbPHSyzU9qTbC",
  "key13": "5QMtA4zsC4WMQnxpQHAoQWiTPsHPmgFXttRP3Wtz6apww9Y8U9hBXGbCWCbBpns3BPR3AsHv6sJFKv19WcZmeAEN",
  "key14": "3xupsxd7hq7ABBPrFSbKRGgqy4GDqX6KeEyd5vqXt7izH9aon4NBA6RZajf5fjt6YD893dBbGMvdSVds2hfJy15z",
  "key15": "4nEtq6akUCjmpmmitzeTSmJ8i6fBPt1Un6LDDU5pnS8iet2TTsYNPv33bAnRZdZcjJMkWwgUGtqPeqPx6VBqGApW",
  "key16": "4hofkmrWrupWPvzwtCwGDL9FMrR1hyG31eT52dHgbedUvBsEzp7Xc2J2AkF8ho2ujA1RmTDkepJGVzuhBzbMUhcu",
  "key17": "5v4WgUbhetc9XWNYfu7avFovmwhfcoPH4YZX9o9kpHvaSrMLi3A2CYC3vq3Z4S4NsyGb27XkkobFtCs97vpYG1rw",
  "key18": "3JmUHEasHkbq53QtfHm1g5Ln7MYnxVY7ZutwBA95HYw8qqHgzP76uYC3CZxCNkWwN38A3Dvq5nwW9A44Gd4ivhQH",
  "key19": "KYf5wTmJoFKyx9jq2HGiYpbToknmxFYBr2cuuatQP7kBk3f6dKSHUYUNUWYD2Dj8pEHRDvRDBHnQnpoXpNL2HNK",
  "key20": "2Za84WKFqBwUPsVffvGDcpa5doZBxbodUmFc8SYxFFwzsRsSC9bYoCqWC2zzuNixziEQ4WGn39ehEvasnsPVCVVs",
  "key21": "2jCQ3TEoMSoV3mRsuVwbqE5C1JEoraXpXRNGuHzCsR94Huxs1ocF8piVgoJuhQggKyBEXkaFfDaJ1mqKHaZymTie",
  "key22": "3jb99CDbnqrkdRH5D9fr6Gk3RbVNmNT5bTvpWtVST4L9s5acMD9eiArHPH8w2a8aS9tdKaVxgzb6jRApi2D8sAWA",
  "key23": "5pACnFYhTtkoUZMZxwbWwkqTVTySw9FWzd5mWbq29MbR69RAQv2xgYPVfAHSjwrWGvd19uqe5TzkkZikCdzb3Xg5",
  "key24": "46zwn5P2vQfJjos7ZqeRAaFvNj7uT88GRsbjfDfAb48KvTKfz8DjezPhs599Px1TUo2ouHCo5KZs86KGRuAeiVi2",
  "key25": "3YR1ocJdiLNi7hVEfNW24NrSLuZnYVxpEdiFgFeHa2HjwGWNAexzoCxFNi2KRoqPoghjZ1pScVFostmnwbkBANYs",
  "key26": "2vwq2XbsQNVMssrqnwZYfkw5s9kYH6oKBnw4oQ6TkTtDbVoBpoCrTeNgwaLG79912hKCmM6GxCSKSzhK7JqZM6yZ",
  "key27": "3icBB8kT83UQWvRRcRgmTeXh16a7YQs47uMkfzE3uiophbj4a4hPGS6Ppb5Yr5dLzfJLj6ZsUQ56CtwvJuZc4CP5",
  "key28": "vERgXRN6QsFgwaE4oyv7fbC3rSgWeCN8gRcWThbvEdWvGoJsRpLW6HUDHuyb7cKmxUbEgpvcFxytxMfiH4nfcVa",
  "key29": "1UtkcVeUqNMMkyJtCmTDhnuVZoui32a3m71rVRfiNCMKoLnQosqgGYHTy7aALBHZArajW8rfeuJh5m1tHUho5Pc",
  "key30": "5oSbJvuPttTT65Hf3dvH2rGWsPwWcQgoYH9w3Zx9u7RQSywt8aAWGCBSNBx2853AamM1GgBeQnWdsY5g8WqSAS5R",
  "key31": "58Mx1DFjngu9coXmQNthDZCZGdaHCv82DtgzHwC2gh71mWn5vkksHjNhEzPQ31VQD1WVNWRQeG26pfYxG7B559yM",
  "key32": "3ouVo7qUrvXL1qqBmAXw3zmiF4YSJCwPd58vVeRaWCRV5frYLZ54fSBBMD8tnnUf1P6bxZdodcWGGzt5TYJgheNc",
  "key33": "2x4PaYVvEcbZW99tD2kYiet9ZGWGNnVk4TJeJ45AALPErVrFNKy7xojboZyY1agPw6gND3t9cugFUq86vNvc1atU",
  "key34": "5gaDtgSMskKVqJcYSJdR5rGd2nYEJWQB1VBigDGiDwEnJu6DYEkuWqCRmXfX9N2xsJT4BpwCVQAwqCpqaczsNDek",
  "key35": "2jUEozPhqvrmqVAoehvhgD5TQQb4ocvcgWpM7MmXvmKUAZgtjWyTZUzZez2QTFdBXDd7DU3x9HX6gxLyeo8VAyLP",
  "key36": "4D9A2kqobLQWqTnPsBt4cLp7NY1cXTitNBfkC4gWMQ3v33EC3njnc8B7fLP1MokjHfYdwPfQ263bxzW7UeHpErmc",
  "key37": "BEKyBEi6zMqzEpycCb9Yjt9HocveWscvWQHxuUNnjYyz6YsRJQj4eUNfx16qVHzCWRjLEp33dW5JeUQZEMuL7dp",
  "key38": "2QPbdQhf5eSmP2sreT3TVwPXGGhX8wd3WH4czc1tubk1yyGuLpMX3HpEGKpzi5WTuPtSc7is5wKwyp14CBD1H7s7",
  "key39": "4WnVZRimk6hjbDh8RFKwApQHnM4217TQyK5QMWp9NMTMeuTGMDFTNeJp67tgCDNYA29CQ6Kx1kT3UWPLbJS7xBKB",
  "key40": "5TpRCPgMVDG694V1CqNuibekTYBzvZxohhdyQJvuMosLP68YKdZ7sB6FkRbaYT19n9bBdgWUssVKe2kMonGNHDxY",
  "key41": "4kCYqBw2Yuk9tjPs2fNQhC1Job9RnWrxf7m6gKBi6gaMW8zkBTiVT8EbuqMFrmY1PEkVrcG7WUZQ1826ykwFs45y",
  "key42": "eqhhyQTHiKV7sYjDHLteTtKZzjwzpbm5DtJKVpGU92d4Ab1kNprs4EPpNEpzJnSE5QYapyFr3GJ7sKUVneedMoj"
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
