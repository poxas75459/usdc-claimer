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
    "4Z5KBVA4nmZeYuizTPaKEu1xnJKC8o7CaabMG2uWah2oBYU169DEtnscwvCWLVG3qbGtLSEYTANYdgBuJ7Gn2nz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4viaLLS4VTZWtAczrAyhEdBBQAp3vShFqgZDVGKjqjTHe9TVgB113wabjT3gqd7XrTMaPdCTsYSFv85TC7Y7rcKh",
  "key1": "4tFyEqQZV6RJA6jPiAeZFURZCtGGkV4AM5WDN9ZxptRGhTXuEARizpHrSAs97GpGX4tTwTAJFEj5vVoGgQ4i5fkt",
  "key2": "47NDzW75SxMqfL9ZpLTtvxaALs6Wy8Y2C23Z6JHhszgnQNUzv14JYyjBxu6j5Ndr6V4LRbTHApssaW9Rx5XACBcv",
  "key3": "5RihJpVwVYkG3geL6FX3PQaearL4sp46HWnCQji7kR8Co6tExcaEj7wyViQYPfgXyzxjZS6CNSn6GSW5gsP9AUNe",
  "key4": "5Ajnw4B2uiPZa9bDbHEtfhuUKWMTD2js5sM4WezViRYgTE6SCQrofft4dZsj3Ds2sgcsP5jcgpZErKr7UjWf1wAo",
  "key5": "4MuHwTSRho3r3iSooVaFpRwUhJc4XJaKMwKeYowKGBs2eP8wgg3tAdqGNSKgg6JqHeXeREphgyGCwL4R6gsEAn4x",
  "key6": "5nMq6AJHadyNjNY9wq6VK6wT1ZLvJ5EZrqFhw5ufCjBhpQvkQG1o9KrYvLtYGLCCMBcjyjgaxD8Z8XfwyTpKuaPZ",
  "key7": "2Jp1ScU6XpDY9cnXY4axU24T1Dx4Zy2mQCUSShWe2yu4DgW6wjAKvX7nDziEoKehz33UyxrMJ33apVniAauRbPek",
  "key8": "trFfXNde7C4hSBR78i16KLFY9PtC327zHMK8M3Mea9qomNuSDmnKn1y66hzmev4UU5RR4qPnLbFa9wwV1XvRkpn",
  "key9": "PbF4hBAaBaqWoXyaXXVSfyxGoUmi8XFoKV6Wa5nV476KnpSqtFhZRM4nFeWjB5aVKmdMdsLW7cipCRTvRWfFKGG",
  "key10": "2EUbVgby61C88WpWNSvo6Vr5GZxfHhfuCjzXF2kDfH7rrCoeEdLy9DnsEgPGKU7KGAdsWgRfHptBkWVbyYdqPmX6",
  "key11": "5bahkEh9dJBa4NEdobWRXwgKB9CXDuMHuvc2zCQ8aV6JEccdEH7Gumgx98SodewTfL1hULawjsBQm8XLDi7HxMHB",
  "key12": "4VEkdhtgttMU6fvgmuYkYqf2VA1hxLU6FZ9iDp336M7dJjU6utJ9gKQugpine3tyY3Na33uy2wkWA438ymtKPekd",
  "key13": "29hZ8whD5cZXHKRbAvuqqGx5e4qNwoFV1ePy4zK3qPmeanXqwMBy4mEsAvRzGSUaprGLtdHvbeJERwTPu7G8E7jD",
  "key14": "3FpeMfkZUDHBUS9LqVK2Df9t1awaWxzvMBH1eaRJU8bQ57gokzPZeGzSPfKsxnSdGyNvNvrFwzxd7qcUNtVUServ",
  "key15": "445b12nKNRVK6cahZewHYRWm2p4WX7eBCXHJej9eu4iWT5PSJgE7pmMiqCAnRFymxmeo7tkbjmxEgVBekAQtuwf2",
  "key16": "q4dKgRMA6bJNXMuzekEKRBwvTYjbkSXHhFaVk1tKFa6JfiQdbdL3KyL1pzu3kwHm6GmooE1TjVXkDFAtQe4L1bz",
  "key17": "3xiUHNKjDHExDG97MkRyb1jeDnzehxdCPiZTuRvvvdP2yPgLmq69Dy66HXe93faJgtaMaSWbd6iY9AYPUA2MnXz9",
  "key18": "4eM1ePUYLTMFNjQ7TLavJ5TRicUkjuyx8KpqNaYTbwHm2VMmHKZTTUj9JePJSe4iaRUnZy472Y4gixCob7PqkWVn",
  "key19": "2PDKaEmHhq1HQHSSkfdUtoUsuhjN9ugyzFKPWmAUvHjantzT2yJjVYtuk2mDCbRZa2586PcK66MFYJ2quATw5i3A",
  "key20": "2ukhynGDhgfDeHmYsSZFeNRTsAbx4mF4jWr1cz6T5KnaewJdvc79VQnSjXr1gf1MN9UPR2iaX8zzckfMuWqYVAYq",
  "key21": "4oVxBe91YrCFDLYErjfYJqvQ4H57T1anKGkb76VfQKAJJjmsA3pjpVDorJGn8CozyJuUZXLZXXFpsEtZxBGPKitG",
  "key22": "3guRTDD8r2Tq6VPprXc2ZwFJgEuxKtXoVqLiaHwdvqjWWTPCEmmJsW57zKSmtAZRK1TrWEKa6VNLphBiwTBH3X54",
  "key23": "3E5SPK13nitTgBWJYezpWHf2oY2uDn3UqcEqEhoeizCH1jLwCgRs6nb4DukSHNaT3KRZxdF99KsTKrnoyVxMZUWR",
  "key24": "sPzDgWfX53m7zo1oQ84mvf4CvR7a4QkFozETqMb6jPHLFt8xqAUaWsU3dT94qGYm35sjKN1NbhYpqiC6q7FUi9C",
  "key25": "4VmZuVQeaDDqPrq1ZcTnbJZ9bbUMT8pZiGLC96kgeho3SP5NKF5PNNuTLkcEnfJTwLVMsLb7AsPCbcWiFx9sVxud",
  "key26": "2DD7upP8nUyMJHABgoNZ3LnrQjwfA61jQ2i1YSr1BCwBmrKSg8zDecEm3ffPa8gwCUPFW96fXvH4pgAM9bi5bKdF",
  "key27": "2DfD5fncRY23wZi8s9WEPEB3JaMdNQnL6sZp4C1LF78SVja8E1gnUCmLt9Uz22ZFCjSVPQBbJJFTVYC3nAHH3kJX",
  "key28": "3x6iKDhDeXBQ54a679sfYNn6i9Z1xZaS9UfPrrpj2zECQw5cr9Knebv2FAy7e7kLgzmzQ4MFvjvFzA5fY2svtaRV",
  "key29": "QNKBRh3gmkNjkK5v6RHUiqeWXymZiMjPF564w5pVk1wxjjHshjMv65nP8vsqWhbRq1hXTiPaLLqt4n96be9s7K2",
  "key30": "57TueJv2dr1UMJxqTkjg8KPUwafUSNqSbN39Mr2StWoNhnDgYeC1CChm8rn1MyfYL2B9cyNn32VWzV8kuhAJMBLq",
  "key31": "3dUAhdwKuZchpbCiBF8y1jEEw32EEQwPVBeygCNBSPWdoVoVxSwAGuPMt9NEhXPgG4efhV3LZbjVAYcWhgXYqhDL",
  "key32": "7VSiECgfKwrnowETDDJE5H87h8PjXX2Y1ZJYroiYrF8W2zisstkZBxAPhgJW2qpgZ3p18HJh1Y3vNJVxXFvFqbF",
  "key33": "K9M7SYwodD7y2pcNFrpPHeucQHkWDXt2MZxQfdoGFANP1hZbXscCiRNxeXXLV3Ry48GSEWcHmqCx1g4MS3wZLFC",
  "key34": "5FefUtz69KrrAKuXGMpuC8padQTQxWsvXuMwUQqwMg9WH9jJEAEjoggNPLuA6DgyipSFHneoHYkVzE4fEicfnUiP",
  "key35": "4HMHq6qaTqWuh5ZqGfnJrEEufkVUYmHdgPdhKko8QYHGb4aBY6Qq9ri2CAtuxhpyYFm6X9oRU7bvwbRNNNJv3CAw",
  "key36": "34zWvAgV7E1ga6yzjm4i9WiUc48KwK6Tn5HQ5s7AGGLqHdLuPTLxSrBNeAK7oUN6MLuKmLmqgQ81SbXQd5Le8Gff",
  "key37": "5ZTVVxQUPZqRbvM8g9vA99Bk15L9AYVN8rh6SYqZhjVpTR3JJZxnuKRY2CapjtHnY4HAHB9PztxSZXzDhH5bYFxL",
  "key38": "5TfrTcgbwKK27ej7xeBo1ithUVgUEC46iS9TztVaWW9xgRT5EQ8qCzNQgPDm993o4Db7tpSx7RjHB9AXYpNA4HZ8",
  "key39": "46BAhY9HLB7D77nh9LsEyaNSRThKkayM1b7nQVF9aiFYmq8QJHnyqJWeB4a1iYCxiQC24hTDYwTBs1VbnF75dBpw",
  "key40": "tkKWkrbPmHitVhcVcV6NBMeRCCtpykqTQc3S3ADJCcVPreZW4vykycqyaCmcajKUi2ekYCkMHF9wvsCcfSKdeZ4",
  "key41": "3x5a4sJHg9THYKa6fZyYTdQTugDeKGvUpiczo3VMcnLdmWswRHQvEuv329NWEYgMYMwkDJJnHtzx1ZUdJb33jFQ4",
  "key42": "4KsZ292krH4ND5hawnTTm2TkABLNSfBpA5oaUqrpWtWCsj15rq9SRaCwFAa8856EV4msMXLHGDpTPHipXr9FwoZG",
  "key43": "3xiqihLDdpHpompnq5EByxTmvfPgpYtEadvXy1QTueHetkfyJ61yHWZE6U3cWUmU1hzu1MY1EGaKDTb7z9UEnH1w"
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
