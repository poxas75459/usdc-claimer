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
    "3LzC1GBAFVZP1NuGNAB2itVykc64pevxby2SjCk5459j5XuTUQSQ6hCGRxh1AUigs7rvigBxppMwkQGR69MgFgmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WuDC3HfAKs3vca3Zfxih96McyU572xJj9LtDin52seAjT39UywFhgbkengozT9k44EtuSirDJD1unMQy724Dh6y",
  "key1": "2SpZGVWKFoBDj5G6FGSmHYQASX7Bqckwg6GGWUdcsJEpyakZMw2EEc8JgusgxqRopYnituDKy6QH3CGHk2a9cPUB",
  "key2": "3VNGToP2bhHGNGsEt2eDq5gwWvhsJco3utssXqqFmjnm5rzU17yyyRkdTknKaD8LJXgKrFjwZqNdcghMXjN7rTWd",
  "key3": "38yYRo62Z4AmwdLkgfLWxk9mf8ubj7QX2p24BH8okKvuLHV9oxB5DWiBwHULjTL7Tuh9F9dC1pyGVJD6EdiUFaWv",
  "key4": "5wVfJfYawCC9bBN7UgtwV8xncMKQo4igYgN1s1nUdJo49S7sKzRhnUGN3zdR2QVjv6i3V8ZJ1sxDVa9tMPS8nEAN",
  "key5": "3CHCE22TU2EECnXzdKHbKSzdKrXhph1gw5S3jRUbQAGJ8pZG4dQsRBJGpjUyqxqv3zhidqLt6MBJEZquKCPTFrQJ",
  "key6": "48Yi5frkX2Uz7VDHLPnBEezgyJEfTyK5fKVuABNwVBAnnmMnSwxqBHDFRAH66Z4CRuSPSbiUuWNGP3nue4kpYkML",
  "key7": "4VyA25tFj3GaXcD3pWT4p4F8cEebMtohVHE7LVykKoABPzWqRM2AwsBFgTjBmSDEawc8VLjBXZu616kZ3gArBka5",
  "key8": "2K4TsnYJoWwt7qdYW7BhUMGqeZbsYjWwJDNU72n7sXHBBpmLFewwAg3bcQLCHLczddF9wqJoCwq7rgQwPQ72zGrL",
  "key9": "goARKstrxdT48EDRum16Q73JNGCTnMKQe8uoNM4kbLdqDieuyhq7ooFpX1YSyW81EB4WhBdmZk5cWS5EW4axgt2",
  "key10": "3iioCZT1RQaYsopbWyCpBSZdFoh4i7X4NrhjqgiLvcX7Z72Ua6M65PNsgrSCRKd6XDJrA6E2z163FfwLehwbjp7q",
  "key11": "9ABgtcZGkZaHbJTbiqfNHbTCXNmpj9XQHUachGvk7Z9chtkcH5xAUWsgmz2LPfDXgSPSvwGbjKcXkW22adM9BMt",
  "key12": "53aVSoufieoqxg6PZ8u5beYoqfv69zuZqyrRU6QvRuAGjjmPxXNke2LsBsHXBEaK3YdRkNGeKxVo8kzkuYDQh6y4",
  "key13": "FKeuCm4FfaP3rr2mTKPpX1jUdqEpESmnbR2n4yVoQ2NJcskGEwZVyGkTUZqE943mWxzf9mqQh4JMiub3si3aaRn",
  "key14": "794sm7nQ8QpSftBZFkeQn1XHBrzo5saNzeGESKEaHnWdqAEJu1etQkfp3xCznoo4LyaShwC2xbTvUpcYvJQBGmk",
  "key15": "5yB2UznzTnUYtHfe3qadMCUDF37TTC7yvaXXYHtqKCNiy6rea8dDT9YtfLKwzqAWmwFzNuYgRDpurxXFVZ8B8ZdL",
  "key16": "4QYtdjgdr79pjqQN3c29BZBnxyvMPJAwWuxGAKu7tzcvHaawEN2HUq7r1o5PAijFa3aHTSNyWXExEmh8eLRLw9VX",
  "key17": "5bBtVQVvE6QXBXyBtpr6nppaqET1q1xvtCZjnFHZvXCfiTFc5gAwXVkt8tVG4MaTXCeZb84xkCgW5RrdpNBYkFqq",
  "key18": "5e79xNyUMSxM8qR13ZyM9NoZfy5RGQg6assa3hgPbuEsXJPjkHcVopu1wDG5RNV3tnch4nPdQbuhvWhzwP2m2SaB",
  "key19": "5c5CNe4UmUUsW12fMezM7RZBx3ZTfcWXTeV3G9CWTWmUyETiRE4xsYsLLydPu337m2p58YtCtYbsZmcVjzMBDCiB",
  "key20": "4rPHBb4KBnikdJ5XhDiAof2x8Y24a7T6ZrJcqNo7v77MsxM9La9cmSLKGRRQDuRLc37dogZHPnugi9PZ1hH32Gqt",
  "key21": "YCwPPQBhWToA3dTe1RjSpvDrzKEvnrp5Psbc5jGSPZK8YSkPxgwgdAPLkfc1TBYEwer2ksWPcQwax4jWdbjnEfo",
  "key22": "5rVimntCb8wgUeHoaN8j9m2rtyYh6kbgSZdFdySsygVGEfVWJoeomzBcU2yUhVpLNF64VZEWjdrfzvQmye3wANdN",
  "key23": "n8KFMKVFzyXghM3936CVskMXN2kZMFAKj6kq45xnNsuuYxgkuGj2ggs2WCwbj2whT2Q2eqEzuL4f2vCrrdJw8WV",
  "key24": "5nDVamRs7g69gtrwdubGksgz5tXLeV6Tr1ZA8C6yra79bRwMK66qKXRGD5qMhbjaip9EK1XAjYWZfpfqaKufx2ww",
  "key25": "RC3U15MWjfFM1vf6zK3V33WennAHKVsmcfxVNcjyHFWtgTMYrcBTvpgJyFYEmPSmpf4LQGjVQH3vMRodLDy3odf",
  "key26": "2SdamvemYpTpRu2zas2EqaDXJahJJjNmqeu1vKCX9VDn7t6LCZkSQJTDigdSt2VWzH4NMeE7hFqXcbUaKVqwcPwP",
  "key27": "54Y5znXLM771Nk2NLz7jZ8PRSrJY48pJQ6aCEMPpNh8imGV4Cp2mXYAPByqjuy7QNLHvGjMEBTQDNf4jPSzphMUc",
  "key28": "4wu8yvahmC96xyiCyy2BLSWSL9Dr9DTR4tnphKjRhP61bVJvdwwdcmstZadBsmXJDD8Q9y3Xdjcf3XekXC5j4aGM",
  "key29": "fvVuPQEC6nEzsJPi7jauNKDtj22K8AvLhEMxW7ZX5BSzPxb2gjDEV3n2aPcD361MyCpHBExqBNQNX84k4SCkQYZ",
  "key30": "42jSUNhthE6fPbVBKTQuB1DWkUqSTaxvusBxcBB1x42kddnDzpuuoq2hu5GKh42YnvgFGxkMbFXz9ZvaBtcXZHRn",
  "key31": "3aXJnHFDLs6rrJTETk7XenmGWsrYVuCCMcKwKQfmyewM9aCABVQGyC81iVAoZ2zKccMjvjYZ1RHSVjPpgKPmbYAL",
  "key32": "4yepV6GbHVBYfZRqGxvHcCvncVTrVHZNvEzdny1RgJEDh6aMAeFaenBFjQU7HKZLm3tmSJ83DSiWP2kBWss4K7q5",
  "key33": "2HyatcJzNythPZKZD6r8XEyvYvP92GZvjDecyzNfCNyh34sPhbu2t13gTCwN9jqauXWuo7PHrfY8sJvZsMJDVS6U",
  "key34": "453bANvi9U6FrixNaejg1YjpsSk9Dvkfro2g5Hb5PibVF54ofyrXn9Tx8iZRFtGRWTYm3renUjZxu993d3skgUCC",
  "key35": "3wnPngSk14tfngqDKVhjYHXe9S7mg3NwJLvComp5sweUsZQoHyvebkxDUJbsHFzoWkcgxt3vjaCZ8dNky1psQFeK",
  "key36": "39Rh63Da1Di3Yk9wzAkCnDkoECxcjcBh33RBEYgPTYT3PWmSU7BZe42k1vFCta9bd48em6rV2FseuoirEy24oYCZ",
  "key37": "61777yWLppzJ35Mm9eNfpkEFhArMWPcSZbAC2QicLonPBefy1DoH2isMsXr2nCqu41acW6QrsKdjPgj6sDAjzekn",
  "key38": "3PMBFB1bhd5M7sApDDPsyLicia4Q2vaBE18QpjcUkHbDSg8P9HX5uxPH3D1NBxnWoocWKkkwbVWcBCPVX98sy14r",
  "key39": "JR4bWW9FLcZGR3syHCPCf7G2MS1yGfwi1CyLX1MaJJEi9562iB84wM4g1JvkeN6Z1Q9RfxoneXHCs67NUkHq9RU",
  "key40": "2THrHSrJPw9Qc1HR3a11aFgMV4G78U4Lqpeo1fqnFEHEyK3vHJM4vmZPuNruoKxnkK5eNrWfNzZyx54PMN7KyRUs",
  "key41": "2ynkWD79oTWm3sgB1BKVY5m5QaoqxREqEuwnFuHJE7a2fCVv9eMEhARxGEoxi6Jj7BnMNBs4XYLvmoDPsVx9qS4E",
  "key42": "67KMEFBKnqB7CEhXhQwKE4fUUEwr7KMd4UdAh7QMGMDNnHuxZUes4W5KcWoiWQQsd4CWkqXhYKpscm3V49XhnAFu",
  "key43": "4QcHviJRjExa75Ua7jPkHUjBsKMLgpijpxa4Pwb71dFs2UZo1rBJxa9mjSBFqxQgJXDEJUJEWSPy2cVsAaJ7x552",
  "key44": "3U5dDR94mqL6fJg8rpesYwgxeRWRtkUZPPzKe6Y9AEP3JTdeRW8oGAemhz6H4vkhaA31MnTJmSassMFP3aG6o2Y6",
  "key45": "249qS26RxByUEp6wdUEqNrqehUQRNxNx32pjgKdtKusDNWbi9tNTXuazZSaHmVG3Dq7XvEwvh8EdfoPNfC6F54kb",
  "key46": "3V4QkCaLiuRfWdTeEBdCM5u9XoVNc1VL72s5szVGojLhLZttRDrCXaHKAwdGjuhSqBAKtSnBiyV2gv17pb5vFiDW",
  "key47": "T24jkEgqqzAyPVpDPwzrmtdqkFZV7a31err8pEgP6zrfSmLqzWaM2xGunf7TMXu9HkddXzPHiYK2D8SFyiLUmNR",
  "key48": "45yGUyV8ihvPd6jC8AgcuNGm6NZrEXemJ9jXxy5SdjPJBkBYXhcEMJyuvRgNLB7trEVYniLRHZzxonMtYegAdwGN",
  "key49": "5rBMPPtacsAmZYkzB7V79G18cbhprRbqrGKwCEGnPfD17ArPE6MHMyEf1tEHgXX73BLoTbDm2uFZbJbma3V6ou66"
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
