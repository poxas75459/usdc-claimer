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
    "gFqSPvWSmRvttFX2y5EcgFPf4GrSN6h3rhJu8Bs4SFTnrgcDrPD8qwZpyVruVzavME64EYGUQmXV1TwntWn6jD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27eAH7Zn8Dq4k6vn53ccXDBFR3unaNVHYY62xXnHHELkiFn1WMkWr1uKaqxCFt39Gci8KqD2A59jrfSuqB5RcFHR",
  "key1": "SPpAS8Wjzu8Qts3rpJ2QiAWGsm2f4ZNUX174jTkupPQbq9iiwXbVVqwhUMGp6QyuD6XUdheXsT6bRZVqNHJMBcA",
  "key2": "4iVw5L4rNGtri3LjdTssDxbyZvfuSwQnQfagzu44LXFTdkceSaoZPZCuJkvWkzd471HmYRinQurDVGhZ25FwS5H4",
  "key3": "2HkNAboivTCWaRXQ7V9akmiUon2Jfu5oZB111M6oasVQEjomUQtzVekCrxQkVedJhEzMp5vb37ztuDKjFg98t8vG",
  "key4": "MdiUbLmiDHpN8YVhyzHNq8SHw9BN9FV94GYPPk3LbcZpY5B3sYCyPCV3oVkKkeV2JifkTv2myAMeapSNqQ8AFs6",
  "key5": "2N7LxP5f1XtPbYgvmLPU5hWBcm63SzLGpSsA4sGnwsE1zdv7ZQU1o9Vyaq4J2WdS2NNUCV8hsY7FQjrSiMMx3GUC",
  "key6": "3JUcTz7c4T3BEwST8pJuqnofNQUPgDCXvyTYdVeTCdw34FGTJiXsg7KxiXjxi742QhMZeTJv9RKDfNkDa5u4rGP3",
  "key7": "2mxsdc3sMKfQaYW6y29YJTemb99k9tyqSzCMwhSNZmF8BEsuhDNNcwJHZYNVcc9zYfAVZ21TU9rbcN92fhfGB6cu",
  "key8": "62yBDr8Ut3YjWZKBReDDAzihvZJo5pAhE2YM9QTeJGbyYu93SUcbtFnqgh3rn58fXKcukT5DxB9Dzm1vTEoPMty9",
  "key9": "3ZmKQtoTPdSxV4A26e2hrwFYfTgF1xLBsMVMtXEYpicwruVrnVx8CQXJCDH73SzNhKXWLf3Fu6nzuuELu18WGQLN",
  "key10": "2EUS2siHLvKG3i7y6EhGkNVr7BJc41K2gzCV4x5xKakKJWp9Aov7m6VCF5KJ165Vzxw7yaZWrc8k7cX34VjXfKe1",
  "key11": "4dUc1mnGZ3BRUVWBsyXZoAEQEQAd4DBrSWAfTbb2csz3eLPz3RmKJUWGcYgSpAxMKycX1fMacd9oBiQp9zXYjbof",
  "key12": "2BruokSGJEKWMf43EyAGiztuxLVUiSKqpRvgcNP68uNhwDyCk19ffzsNWoSNABsZRT3rGqRWYSqxXzjmYMDdi5yL",
  "key13": "2gnXnTvUGsCCeEDvwCq2ZEi4ix7uZRCTYxxceajgsqnW7XFEQ77rCGYmBExVpm24M6uoX7CefTtsDgKmXhaEviyH",
  "key14": "4YXPrrbVNr7DmFzcJ4Mu4byTi7umgqpWK6Jm4kcWU71GCaKiCLVVQDz5VmgqJanaXJ8V77WaNmzvo29ERpSmKsTD",
  "key15": "3SwyLNfYmaMQajNSK2XAFyLAgHZpnSqqSun9uCTx347MBsscTcacmnaRbjRkRBVuSLhvvrEc4q7kXET5yZtNPtdM",
  "key16": "9oGMx2M4taERZcy17fgDt3kEChRGB421JGiKsQSNg78dJPVWo26jB2Lycdz53NeNQbWai9iTzpyU6Aaxgzz4y3y",
  "key17": "5i6c8QFkHUJZWfSvtjSPzWjuQAUq8kGsCJrRBWRyhqf32WQa2d1b8Drrs4ErUdYsqTjsybTvhDTsvFDY8bSDggh2",
  "key18": "35Ui4ZihURJmSDHTrjYbdqXtgXbJcpTRUm4L5ota6Gq7T8jLtVafc5jfzbRcEKVZWC6hyGWWqiGQLajMpmGcf14k",
  "key19": "3LdKRLcCGHj2PT5jJtUkEMXZ6zB8BLbYNnbBuk7emsgxUbQGCqmLc1g38Mz4csxr8GER91yhQbRWts83dDUR5K17",
  "key20": "EwXJhUFboX47Qatv6jv1zMigydVHxQ4R3wP2h32Yf3yDVJHrAsooJTzqimjKvsJynoWnX4YjT3BKuZbi88Dg6ef",
  "key21": "2rJzzPRY9vBUAkHGm2big5tTijsZ9QLDquNpALDxjVYpkQ1MvDRgs5ozggeRsqPX8pyEawMcLWjSPhnj9YAgemU2",
  "key22": "5TtPzY1ynWxPcLag4jk8TS3PC5KUvqptfia1gbyWaZrzCukfAdw33y5rkDLMsWmyCnegg5j6F8oAcsrHtT2vHgk9",
  "key23": "3mqDRigXABUpMN3TdMRKnx7NM3cfoibCpRQKMa6pqNJcPjqCsdqzf119cdaXJRYES6sqsdMtnx6PdM9vgPpFYtC6",
  "key24": "47YNkGBqY6RX1CcX6gjSYBRZz7yquZPARdvwtLyvXzfyyrVaCNfXyVdxHMUEbxb9duXBguS97BN754FYohxyiVA1",
  "key25": "4MmWmJb12WkK7whoFPohbpmD2tUfRKJWnTMGaM4JBJsnVE3FWsyaNxR1R61dtRu84L1vvJBmRJwU9c2KagbD6w8v",
  "key26": "WoTrw7kd6kHKY5DdYNAkcnk6TVB3ZKe3dDaS3pPAyFu2AyYxP6p6pzf5wzNruYidxr3WLhDHj5Bv9He44ySzysN",
  "key27": "5CCNxTPncN3gWwqnAhNrAMq2BRXY7H4xWEZ8UPYfPJT1TeEHhqCpA7TD24LMMPG5x4quXNdSrMn3nQE3ESS3TV3",
  "key28": "atpqtiNonXzuj85rGACk37jYVEeGdYBCLb5LBt1ySVybcDud1D6k8MvaosBMq2fkggRbx9eePTL142f6KUsfT4K",
  "key29": "32Wo3Moc39EspTYTP324ZVUbwXE3f5QYY6ypvqbwNDyvoT7skADJyQoqLJ8aWDEUJMtMBXUYzwz3gyEBzQEF62C1",
  "key30": "5moG8CQKEHrniiPhYH2DrycnUUrsjikqR68au4xzySPnXoB4CmbPuCswwSNHC9eJWdBnAJVrod9isXxqzQonDN75",
  "key31": "2fNbJmWdm6ShSEb1jGa85iGdJdaSfesPWso567Y3bgihYuk38uD6EpD5CoDHmT8SMSqYP1CncLiUHwHXT8yQrRTR",
  "key32": "41rxi6CyF8sVoHJQir5KnwAG6NeNC6EL7wzRoiVnV5RDdRSjwpAdMgF17ao7UbCMBoEXEXHsaY99PXRZai6thVDD",
  "key33": "4wRZfP6mHWrMREY1rwDLAe49WhbkRzWXbZY6F4vJBwktg8RY8cpnLrbJxktahhtpV5PsJ36CrTJRJyRb88hAecW8",
  "key34": "22oHPQpjifLwJKEFHZa2xAjFB2XjBSbqYpd6URANbVePiPZ554pvNiXmJPyCrHu1ZnDfj8pTXX48FT9RsCQCrXyd",
  "key35": "46HVa2SiwSqeaVHhfFyQsmzVvdp6JnLMcMUSrDP8dhRCCpyC4dM5Ck836Vm7b56biemfkCqnTinKy23G7NJM2wtm",
  "key36": "5en8wd5sxPzXVRZc5DeLJ6XxAaJr41PnY2WGHR4dykkpNrQfz6dSQYtQV67oVPwAkLtcJzqKZgYs1dZj3EMpuVST",
  "key37": "5DtWbk85sQokHph2MMDwQpM8GNTR7zdaKZuCqoDFAAr8mT6BanVupEGuFFrbAV7tuMyjSW2eeyGihHxRhRn2ewQ1",
  "key38": "MPVo5JGCBnj2uMXuEdsmWBqgDfYvo6KTADVovecWk3ExBD5wgmCccQuprPn3Q8kduz1ew5mHMjQogxWYKHpdEL2",
  "key39": "481uoDstKX2x9ykCGagqPfryRkbzzBMXCooCzxrQJSefHZf2jVcPJm7HRp9rtT5maWbYqTefhkCbPKzdihHUZVwd",
  "key40": "5o4HhT5ykNWzvFiKLpnFxrp2mx7etJVt3R2poKtPEcJVJJk7W49v68dSnRCHZjrMCQZqqr96UGhKLrjX4BBi9gY5",
  "key41": "5DDjdazZuSLLXYWUqaNJz87kFTvgH49kGJLSgb9c3vqmGYztjCyYbg9zjtVEyfzZbcmAWUVgg3no4cdGEra8HksX",
  "key42": "2fLAoAGMdYtHyCAvjX6ELBtFk3QmpUeLMPR4YZcosP3VQkZFVPABUrJHHjvhT9Cvt55e5B4z3qQrv2KKvbG9u4jZ",
  "key43": "2eymmBxgaMU3bRcvDBTW7xMnj4iVXProFGoV4eofCMpK6zt1jyX5NiucS9wCUiJs1XFsEhq1jUt7UJisQrYmNiGd",
  "key44": "2zytprXkv1uXcNefXeWhaXKirFezDftj6B2bcAdC8vcnde4pxV6X3RJ1csVChkqVrr2TE6i5gBwiEodE5VKmdsgj",
  "key45": "KZiP6u1s2Dx72Wga6BG3X2yibibmJBB1HipVXTucaQt3KQUA8q4achDPKBTjJTCmVPGNKqWLDQWd5awdEV4VocU",
  "key46": "5yBzeNzbFcmfiCdDYpTkroFQmzCRQ5JxwyapnmfCq4xvtPSQWDWZH9dASTGPEnh8GXQEWZBw9R2AoW4zUxwGipGL",
  "key47": "4HbmbaHuhTvfBGi1eANykgG9w4XoZmH8B8ncpvykMinmUQMKhFQQLjzatqBsP7MdQneDeDbhr9gTKTr3RGaRe9GZ",
  "key48": "5ftAuh9Qe43ZcyPKvdZNQmA6BPgDJdURwrKh66PpnRsRELyLGc2VWRWzqxnc2Vkbkiywo8AtK4Tb1L3mCELJU7xo",
  "key49": "2crxgy8xwrYbntA3nysurkpd313Pz9ZocncY3HuWpVUWweXqZedvSJmSFouZPfj5VJakXfN7nheUwAwXtgApHwdu"
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
