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
    "374hQFD7Ctx3HFC3g175kBJTE4Qfs5YwmyCZ5iipCdKfH8MLdyBrFTaJqiM5hb5TMt7o3vJ6Rofw8wSBawo7V9EF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pUXkMzk6pKmXZctD24b2qPM6czVRBTfRuxcSKKx3TbuHruysakiFXeMEu4GdUYCmH6hW1Q9j1ewXuRPiRoERh9Q",
  "key1": "4wPDvof2zLrqNvp88nxMGD4RUmgLVKZdbo7EUZUoV9t951YqJtriKRvyXTx3goCSKVt2T1jEFkcqzjB2Ho6LQ5su",
  "key2": "64LtbMLC3WFkdH3AHJAQzsHVYd7x7gNQAXQYyhAETJM7fugFuhoHC344xRxWcpMN1GmQPSqbR36jZLWbMRDvf66J",
  "key3": "5yJTpfKkv7NDaTUZ4Vkt3gyCRjx3fAPoe9PxwY47KSmdGnVACzUaEVk92nAJpTDWpprQy39UQMXb1fbWbYKK7y3s",
  "key4": "62ib5N26aFM1MREX8dCyfPiBdu8ZtFvr4hm23eaGT91QKAMnDLGe9dYAaf1sui4QHpU59Dzeb5imiRTvPyGKFCvc",
  "key5": "AweZu4m4z8fjiYJ3T2ZQf1QCFZDhjMAbR5mDuHe5MuXGyDxqEWyfrfyoRJwjx23wR5gAZJQZkJAc9cpjr76CsAC",
  "key6": "3DfSaTgURMBesHiXNS5FANKstkda29J2VEozCreDwtfj2bqXDg2CNoZnsXSw7bpbYQUqEr1xw3WiJzb3y7iPdt6s",
  "key7": "3gq7YhU6T7yXc2KZacJp1SsUB5NcFtYgMf6nDzcSBSRdJLVcS64H4Z5uWoSmaEHSUnSbt8eW2uKS3nayuCg49xtU",
  "key8": "5XGarzfhhrR4MULyNdADtycX1jT5y7Fzx8M6Lr9r2pL8NNPe4hWnM4Myh86xTWhP947M3EdHys1S6LLFVFwQ64HF",
  "key9": "2fD7RAByLvJAAveRUwpRiga9t3kvymLUXmZMwMVVDhr89NYEKHfdbKisM1H6iJxH13MzrEJ1M3F8hfaAEznm9s55",
  "key10": "4xsdq8Xb6xRC7qG3bHJ3f52PrfCs7Ag3Nvu6fEc5Z9ioox797CSEP9jjNDgzTEtLyAWtXAwxASFKaHXyQKeyG9JF",
  "key11": "3eoD4oXa2iFghd3sWV2y4YtGjCrE4aJSHbJWHjL8V4XdVPQJF17DRHS1hdaEuiv18ZP1b558TC2Nx1DbyUDv9bYN",
  "key12": "2BvbpfzrPRe567AkCrPrR1efUk43iT46xScapQ54rCLyXp7iyTbFiThmjoQsoXqxJURo68P8Ebi3rwM8CTgH7GLy",
  "key13": "5MzMJGfwGrcRCbwE6LZGyeFM8HzqmqU5gAvTb7xePHmmu15r5xrBqmDqeyDNfPVj2re7pUjLuqnuGVc2a23tqhZc",
  "key14": "4Py9XzwrduYuWAFAgsLodQWefEftGtKgy9MQPP3a4fH8s1taKzZjBuFJAfYwsYzuqt6RarT2AVttjbbTSMTiBuem",
  "key15": "4VBZKx5otECJXpipNzXwUbg9EBF9zWKH1NSVLXEn8GZz7bvgxycSP7LAZLExmKJY7FKKk9R9NBPcw3bcgAjYYZEh",
  "key16": "5oXQvcqhDxBXtJugZ3PcG9kAFwTC5U7eLLxNXYWqBnegpL4JAxxx46GUWjd5ztVHJxdPexkyNTMb1KPzLSAjo3JF",
  "key17": "2gc4VFriNWPLjfgsY9CcZx2MJsGourQjm43sfdQXszRHko2xF4n7ovGXF9jSJ7aWkzYKE1yjfjZDeNrtvYetAWMw",
  "key18": "7cSnSiGAbQKyLdtgFDDtf5v7p8azfG883exMnHze7189X7AJirj2r1wxhoSLLgxR6oXTdJjpPnifBPyMJtXZqg2",
  "key19": "3bVxJ1tqwoovvs2zRL82ShhLT6c4FiZz4Hx9V9NUZ4BCWLkJgNmvKnTBcvkQQLNWEbz3ReEM3Mw5EeUJm2GZomcx",
  "key20": "58vVgsR6qWykH5nJHfh6AeWabHRzQWTZu3x89zXkqpGRWZsvVvupeix8qaSZEqNa4G3p1kmvjDY3sszUrKCxXekb",
  "key21": "3tDGQNZeGVDfdKARQUmEcUiENdGXEpeZbxfjhno2gw8z4wKia2qkmCKNoEMSN56n8zxM9kU5Jo5R5i71UL1zgCvR",
  "key22": "2ivkCwKZJAYnhGLev8hNxs7Sw3bZuTuR4MRuGdHFANW2MZjTs9niBEGkJfCZPytQnAy8g3NKBaeia2QtkrmKSV8Y",
  "key23": "5GVtSAikoV4NeyqEQJA9PvbxxHjTkKFsfvfSXGBCnSTkwfBs7zB2kppnJ9az24BWe7kCkvPFKx852P1uAH1Kiybc",
  "key24": "2GQBLW9aRAWPdPwXoD7rMW3rG3ejofHAv4GaqT1Na18Lgqccdc3FdDB8aPLrVPBjj7bZ4fS2LhS2zFxxtE2keaL1",
  "key25": "65of6JeeK38Tysmg9RkZhkHmoSD9PCfWVDqiazA6JXhYNBA9sL2acFnESMVodB3m248UWrAgvKpbiWLCsEvErZ5r",
  "key26": "4pcrFFsTQGGy7kC2JeuXEfNdoMdkk8apTgket4ktYjMtSS7ydTouJ1tVJkAwCtuJ9iDWPyoS8o25Dgmm721ABc8S",
  "key27": "4dfXoNB5VosMvZtRQRo1hrNUEgRZWGExYzrpZ5jEvdMxmYE5aHnXPunhVp74qV537bkeawfxvZWYx2zrnc2PUNAr",
  "key28": "5ovcRxh6FuhK6nMyyBSjyXdmUQSwythJ3vqm6U1jHyFBT8FpAPdvq6pJkumhRC6jjLZxPC6a7SWFkq8cWwuBXzq6",
  "key29": "5s7R6km1Rfqx2FDQcXgJPPVXtXLgfAYnvNbs17L3yiYegqxZP56grv2XBQ6XLVppx1YPrfQCAHxb6woV64RwnMbX",
  "key30": "2stqFF7Q9hbGzNxdXx8o2gDGpv2BxMk7xujLPiPLa25JbPh3ctJLTpTbCRJuf9naQGHgMYvnrX7G2bjTmDSiJWUc",
  "key31": "2ZykamruMKUqJSfCXqjHA42vcCsGgPxJvvz4cPaNZdTssjaF8pFv9gwb7LiPppTEY1UZxNvzx2hZsSt6Aryiqqcd",
  "key32": "xmkKqrs78U5QNmoFGBq4h9ywmzJkBXJZSXnxtiUvSs4vpJvie1w8CjmhvkXoJGm5dHGgVpr6vdEhGGCWgvRggoc",
  "key33": "GGtf2ywCwMjMn9Zmv8gkvvtvRYNc9skSRTBAj6P4hwniDMdfBCJUJHiYtNCcKdBnHD8ZWBbP1a1j7RsspPpXYZZ",
  "key34": "3muMgXuPHPYVp53FpVe2hRVME2NmDQfcEe2S6zu8SMS1PS7YkRgm1MfFsxpXTYstsWrgH7E8Arx7CBorqQPSgvXh",
  "key35": "5x63uhDRBagVHv4RoP5gvrFxFQYR3G8StgLZtMLTfYF1t16RAfvEBS6GKrwL3VB66RkDcaiEtXUTfcKfECksWnUR",
  "key36": "3wjhMqrM772NZpesuQz5jtUtgkgsv3esRub5o5UhnYBkEcJGikQq7KKdMWYa8vfPWNYARknPPq9E5CfofRoZsHke",
  "key37": "w1rnQonoKwVzxSsrUiB2GEehe6HFpcAiVinJ1TyKuekuKB9osoUMome3kegf8GnMb24j3XQvQr8pANwuAdzsFuQ",
  "key38": "4bLzWLqAMCdYmRf2F6Qs5hfqP9mNg4ny5W4sLhV6XarVLwiJ59q2j5oCXcvxRZgzfYiGg6RaToBP9ZVJwSKBKrQP",
  "key39": "4nTPQfGFXpzv36cyGTQoMKNyURwvwvtrBYiyTxFhTWouNKcNPxGeFf7SN2CH1haKwumqxQTQRhB4JV1DXKsCT7SW"
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
