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
    "fAYSRHj2p2Q2uDihtGLg957MdHUuxKdnX8Kz59Rnpd8xpCPLn2KQ1X6V2DNe3quQpK5drBVcE4zKQaGjRGPoYEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jSiaJEqiGXFT61khYQG4omD8N78H4bRseYQHr1P7nmSewLEAoKk5mWxmoeBn9GU4yBNMyyKa8rqPpuivBatcKbK",
  "key1": "fbNM23QNBuCFBKz6zkJVykFaEZwryJ5CtVw7c5ksVhZadfrts3jmt8Y18P6FSVLV5rnR73teSsEmb7WSqdZ9uao",
  "key2": "5YipSwbZLNkQez6tafbk7uY7pvmxRCAqf1UzZebTsPCUESmAAG535zg9LkZYAQ9J3mAQ55zWdQMb7EM922tkfApZ",
  "key3": "5qZp6FRbn3Rdn8B5LnkrxmV9j2Ai2ERsPUEbJVwS9rNBzoZ5pE1TG4a8dZ6qUb1UuHiLHn8bNrraL3KUuFtmUxs3",
  "key4": "2iHuDRxdW4nHHvGw1mNab5fc4e9NCMejvGCDKgbvPJzS16eMT9m9QPSnYRen7EVera16yZ7iLayVQ9c5BcL9i7Qy",
  "key5": "4YzfbHnZGSUEfYPyymvNXGnWBmR5FU2HrFuqd7hnoteJixED2Ja2RjRwEYeXH7Lvk49h9F8xowreeBrdEAHj13P4",
  "key6": "5VwSwfNfUiYpDLXDEqETiLQmWDfUiLi7uWwZCD8orGMc1Sf9uduk72tEtJvVinEq7FgwkxmZBUeXzuyoGwKV9Lf9",
  "key7": "4dJFzw7PZGsLSaVW3CDT7Em5LAQz5dib6sqDo72125p6hsseMLXLm7arzzZ66cGDxchRR6B3njk72HB58BW2goAU",
  "key8": "4X4RRsauab1SDACbDZpnAu3sdFQRtL2VnkXbCUG4MV94ixJENzDvRTyY4RuEKuvRKpdaSe3238TryuDPg1DUXRo3",
  "key9": "4STYTZBVtFAe5PLtH26MFdR3UnJj9c2AKdFDeNiCM5wnXCVktjyL6GYBAVgFt8mpt2KgagbGoPcu4eZmufb8DZWs",
  "key10": "4qZ4H7xrMJru1sqoj4rYLWBFkG2V7aR2gs7tRtCtyuyb6Gkb4vYix5sBqyHFqXjZzVaqTDRAf2GLPNsLC7J1sPB3",
  "key11": "n8Xr6BqF3VYvfw8qhS6mZcsgnLRt4g3uRBL4sxxwP4ZcqyhMnVNSmwiZQ93VUC6hW61ndcr1syoLerQTM2Ci5Gv",
  "key12": "2h8Y6yo4xmedXyDiYGE57AnLh5MLhWvoNZP8RKBH9zsjujqUsKZeU8Ge2VGgd1FbnNnw7NceXpRNThy5KvWP5KKB",
  "key13": "xq7UsZVs8GXFTyop4u1t6i7ML2DPNJVZah1wWGQDSwJ46bDyYZH7Ym4u91RwydBTDJr7ppA2QEmA6163T4QNuLA",
  "key14": "4g2DbHej2X1VbTsvRvn34XLxpTz3q19RadxrvqeXgUQHo5bhmuaUQMWcw4goCS1ZApJvN8Ar9x5yoybYsntKnWH7",
  "key15": "3iFs62GmzZMnrNntoeQpgdvKM254hJmUrKrPDJuZmb2eP9zBVJNf1A1c5sbyo3PLfv6to3RqiRcT9MnWvyJY9G6W",
  "key16": "2ijAvZxSBU1bwTQzG25U2TASFQRuhFENay64hcHJxHzJXC7Pic1iuCwxtyDuGLoBvas7bV74XXFdw2aQtiamRe2X",
  "key17": "34WeSp5z9vBSLWtAYNPQP3dLpufEcPRniHxG4q3iGMeDQqpaNwCWjh8QyHf4DrPJ22c1atReRLJ4Fdu2EqrDafEE",
  "key18": "2g5MQsrJL73srivFQxDyZ2TDPzXWyb7QC2Uu9pWm3edp2XjviAmthQJjZ6nfCEc9EfxsMWt577yFLbT9hpGL2zVo",
  "key19": "3HBmWxCbrBXAQSk1CWzsnTY2ATha1vLF6YGNGVMvwM5zvKjXg9p3pLRFx7nZyN89267dkXwusSz6HhBWbPvc2sFb",
  "key20": "48rjd1LZT9KRbT2ra1ZxycB4n1pJG3Vc9BX661sfXeU9WvE6boRxAfBzwWKEM7HcNtUZzwhx9oqguBUM2mgTErz2",
  "key21": "4bFjuPkbc5prh4iHi4GowySE1QKqUo59JPGQKaQuZjj1aFX9Tp3cxTBNKLaNTQbeU2Lm19msstrgCCvnbNgQn6dr",
  "key22": "2YVrcQNZrvjacwiTEx8xkhP6AottFq63wsrPa2hjxTJFA1ukWyuWGdBrptJc4g4YimZkKvcmWNRLdVHCAE5dpfmZ",
  "key23": "28YRTzzb7suk9fKAPG3eWaRf9dDf1pT6Y9NPiqMtEuKJjJ5GeNTj9yAH9BLgiamXKG5SvJpG2uMD8NKfBhpfpgRm",
  "key24": "hviswhr1KNxgSgaJY499Jxkk552v4w6jbFCgaJp9C5PNioceMcg66FWU4LgYVedqbvNZ8jgfZ7oZmbysF6mGYbj",
  "key25": "ituaZifDe18RdHuprGVLEfwxYqEa7ZFnAMwMoWo4f3LvK9puXpKVHuCCsu1p31vEtY8LZJvmWdSKRRE3nbTZfLK",
  "key26": "3Pbdz5MiQgbLkEtmkKRBMAWMf77dnJfHoaUeK5Zeah3Zhq2KZU172b1fwYHHYhJr5gtNjWoQHR7GJB4yVxVD9Waw",
  "key27": "5Mk7Bo3pH2MuetQq7gjNaAtiutngcXr4XbcWji5vuysVmxkYZz42tQ61GXYr7sw58FUJs4VznwtFwRc6ryauyeP3",
  "key28": "3ASPjWh42ySTZX9dY7cb5jST3dXvczn3fVmqFCWxwHoEtJfq5Mg7VRCsmDRrPwSdt18TcfZGWSuXsRogZp9ai6mH"
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
