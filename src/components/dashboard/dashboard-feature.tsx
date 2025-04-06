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
    "3hNqW6JGZhJYbz987qNAemLX5asXfZRWSpepetNDnvhU4VYRCHHAxGkpfzZnDPgY5KacmzPdWmRCZpQVoEsxoRnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2se6je6eeJgu5AxsMFSMbX8ta3JzpL4YwUhvHNGs3oGNudSLyppSArvrDYMTEAxcH9dx6rkPBgbatnkb6DtDoT61",
  "key1": "5vsYaW6LxQMw5CpTdpRFSRGzQAyDDV8zv1HePZHqtAJpby139icnvs1cDGPS8Menuh7DgdFfoSEzGX8aHccydo6d",
  "key2": "5NBd7u8R6b6jt5UnmCgFcMn3m422DmZn7AbccnTh5bnQCjDHakKLCEmpDuB4S5bqrwpP89QquQdVir3kCCtqh8BL",
  "key3": "5e1jXfBKgNMbC4nyW2haS8hcKYqumhXzmnHfW9AVDKoqo95NiFucvd1BKWa64at7tAk7anYiambXbnbtvZjdNbvm",
  "key4": "5DRjHqX1wkTeUr5vnzW2JcLSuNAhSt9RYrszcYtK8SNSehSjYoD1r2iVkgbxjTgDmFRhaPMcz4rjf1vbTAu8JwBV",
  "key5": "5Hicae1qmY9585UehVXmPP5jTGDVfwxLtFvvUMt2qEp6VTVV8REXAu4W9mFN8AMMX3gmBZ4KHdJUwX5UVpPzSfP5",
  "key6": "EvbHfFgbEmPKfvfmnXy9NN5bW4uRNCPEbqNBTNiutkoG6XWXCvDR4vP5ioJuxjTvjBvxLKVnW2WDNTEZaa4Wnyv",
  "key7": "87cdwtfRazskRJRD6uyPXyd86Rxuw6ecXzYzvoSVjxvXAtzzVptFtxejUX51fcp6ZAqY82UnShsMpt8nNXXTTg2",
  "key8": "3dkDV1UQhNsbF6rTHrbKe7r2GaV9CrByQPAhpak4SBB2xC49mUPASSaoe8GrGzvHUofBi3cbxFzzz2GT8bYjWYwV",
  "key9": "2evhSAnAs3T6DHVkNmYTyyo6ZxZD8WzeBSLphXxaHs5PTuo3T3aK6KKCHCt85MJqoggG32SG7ZaQ1pVdjsKgKUCZ",
  "key10": "4B3TZRiX5fXpqqrw7sB3rngDVdoPB3F9X8JYwAAh354dTBzngXyns2ThsR1TV4m74k8NqA4cTUtmGhFpc2rMSLqY",
  "key11": "4zWYSGrYqkr9RKQKyaiPWvKxaBnQRbPHbVUp8wtRSgQ3z3cf7z2eHyGCVU6xAenNowWXw2bQEezWycDUytP2a4Pg",
  "key12": "45tT95fCpEh4HwJ1aKeNshR24csNeXKyP2YDmaDv6tLfPwMuko4jHVQBoKtLnXGER8UnpAzpuVqiW1us4Wm3ceEF",
  "key13": "4Ncv4PTCtpoRAvUeJGHuNoqCAmvXpfQTPUdWHZ1naRT2t91spL62bv8aq2jQEhz9257sxEUvAiur5CWB9YMi4w4L",
  "key14": "3GjXVt4JGXEHXep9UfB8Gq3UiGW8VbPhTh93UTsxy8VNwdaZbsaG6R4sETUYBKyvFgK8TvxXGTC7W1C7FTcuheVr",
  "key15": "26nXs9LNNy6Yru5zEEiuiZ6RhCezWskmzToYPWtbsjdRSK5usU6jQr5DSiU6fQ6Kq2YVKgcVABKqXHAdDuX5m4g8",
  "key16": "N4jAM3CwV9xvvMb1aPenkVnBHuENw7ZBvfEUkTu6yimWuQJD4C8FXv3MYqvsVxAtT6xg1juuhuTWL3djdivjKxR",
  "key17": "56XutFxmq6dongcLqEtzS1hxuPC6UfFcRtEeipB5Y7JTXMqXX9xQENtaUgvZbY7t9kggxMumyhY2LEVvwg6HsWK1",
  "key18": "58rknZJuiGLLRiHybWNHDD1kvL8EJmPBjyEz5qr9eHvpTiAk16U3WLJaSJotWDLovzttw27Nczcr7bCokNQeNQKC",
  "key19": "3efsjSrjXDVoyecwPQbexTVq9RPek9dUCoqQ7me73BwbBybvcPeKbEyi793zZqKbM2CKmg4qfVhRiX6PX6HnnWay",
  "key20": "4mb6LUhaTRQoWJBfZvfMynKzmYHRB1Kxt7EHWjw1rbsaND3A9MpLN2Gwaq6X8a3kXbVsorhipzMqgHFrTXfBM1Tu",
  "key21": "2rHEngjDg58mMiEtk3dMztPXo8132hkGUYG7u1YxtL7GATyVHhjKjcihZ1csRAg7Zaqjrts8iQpmAgdbUgS53CCG",
  "key22": "2FomZu7jTYKXRDD51ThBaNVm3TYe1jo6qB7FEciCEfafhynm2wpQ6VkGkPw4Yf1TiMXFScQuWf2S4ccVKaLvL3iJ",
  "key23": "5d3r4GjqTqYzzynKXmZt1ewEDazLb5iN9D8VFTx9gwRe11WURPqEqPoZhiRVfUAasF6Gu8WPuoAsKCsZhkFPotG9",
  "key24": "5hcHu8Y1DdvXsQyum3K24qG8LaaW4WmiCgq7P98GHtH2WvraiJtFmXRfNMixr7YmoKB1y8ApuGUvcSVJPGejbY9d",
  "key25": "3zr8EysoPZi43iQqkpkfemF1EcaHN5Gt5Bok61B2S6QeRhVJzmScK85J1UVou7WBK3zkn3Z4bRnxyGteZXAGWMhT"
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
