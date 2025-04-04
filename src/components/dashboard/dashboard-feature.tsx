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
    "5HKsadkPea4aMpqAj725wRHejyLWTYQgLCU6fnhWh78GZCMYSkqSksCQgNHFfEJc6UNqwafAYYCaaqwasLftRPbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x4SSWK43EJdyQ4zVUUHVn6heL5HhfoWXRLSaHwE6hz718gGtMffybYUpsHLqmVpy2HobaG24m6wSyG9RoUBKrCp",
  "key1": "3C4GMzphu3gvYX5GprDjnntUeeFDWLytMXTSJ33Mcf8UMLRwmY5QKSBHkSEfnPsAXdtEai8vxwV8RPmuWFYLa6rs",
  "key2": "kcfYQpWp3epHUmfEYcdHt7DYwSpTgmWkMFmMvRJb8RjSgSttCny3uuXVEBsScP3YaJCj4AbCnvuuHirnHUHTPEq",
  "key3": "2CDfgC8kUp7kzEpky7fReqS6jTvP9an2RUftzbtM3TryeHpfqyKdWfXVBjve7qrkxKBi7VVo6XVzzUupMoW8SzEX",
  "key4": "3EMDxbHdd9uutRSFBtvEzKyJ5DxXtkobbJyvHiS9VHuNNrt128GWquLriX6H75F3YRisDE9ioo7JUvdpfn2C3fkJ",
  "key5": "2hCXRoiUtfokmHnsxGupoAWpLHQ5SGP1sajPH8wmvtaSKcwmEuh4r5mnMVd196XAivGLzfZDTTstnKQz4RPfg3Kp",
  "key6": "31SamCsWLUiM21C3Lm1t65A9JQ4ic54tgi6StsmnX1XcxjPM7evE5qfP1hKiFnf7qzjDqepcLYsozvLWnUyncERN",
  "key7": "1A9zzGh2deu4f8DXRxZhswDXVEqvjU4h8o8pcQaBd5Weg2zqZo3dWGVV5xtjf1XX8ogNXMdk4jvvpQb5iCCocQy",
  "key8": "5VzHrNcL8uMop6w5t9qsS7PWwHJMxSQMJ7jSPdpRAbDbPTYcpuzyHPah8VnjRk7huihSEfCYnUVQ4xKXZMp2HREb",
  "key9": "2Je94gYAyJHYZQE247aGukMjmycFAZiDPp2Lxnpc5oVEfszYArLJKVQ2yo2pYptJ9ZW4XgB7Qaj6FoDLyKA9xrjQ",
  "key10": "4q4v34CHDhR7KrA1KjXpbiK7UKXCcsEde6U3P7eWGHa5HaAprVFnzsmWXE3e4B4PC2o5fyJN2q96KSDgtJFv4yF2",
  "key11": "aLd1Xbh7Bj8Hz3MR7SoAJVj7SndSmwtkYcF1Wszgnc6W47rRe9PzJZjUKcmKvq5wfwKYZJnS3FJFdNYtP8nfMDq",
  "key12": "2SZvTmM2dACPuGYycbCqeGhgUFzSdA2nNBh8MgbCUZQmFWqAXvZo1H7JmYevfYrdSMUuBjYNCMfSKupkJNjYdgw8",
  "key13": "2CottSxareuQcV3Q61rBwHRQEkjEo3XNSBkm5pNbs4SNc6kbDnw25A5Nedo9JTyk3ekojAZ6gV8EtnWYH1xWYeCu",
  "key14": "4U5DzSCDdYzJ18Yap1qhbVYod52xRUzyeQgSQSpouJx4DzN69FFm72guPz8i1gotgcQfL23yJNjmH4Av3Wtm5Ma5",
  "key15": "36nA8DPNyiEqfTr9kMhDeCwGymHmatHvtsRwr3z5Fi8vBsUY7RAcdxsjKuTPxDKh1CseqtebTiBZfF2DWwXhC5qn",
  "key16": "8QLiAQkpDF4ESUf48a7vtvbD7XEjGV6sz41YkfXk2LECoef2hU91pDqE4xN8dKyABVZojTXKhSxLtNsjURxJ4pr",
  "key17": "5Lmgsnqw3tDbDzKPhtPupEMMAEQdmRwduxzR4w3r6rnutMM6sv4rc1MNnuEPpTMe624i8KENEVoBVwqHfLitvxBR",
  "key18": "4Po4C3igUAezM8rx7Q3YPhmV2dLzLVQaY8TqZ3aUKCH31y8Dtg4D3CmU9mpb2CGzksGChYLX7zAWstTPffJsQwwK",
  "key19": "5soGxLGAFXXmAN8gQ5XurJzbs1YP7GAybttgu3xoWH59DXDNxBR8dXys8KdN8sZzA9STgMuyhccvupmMGxyiPCLD",
  "key20": "2QWf8YtN6wza9s2ifQorFe9GZSbk7wfXJkSTHBtz5avFRnEa9hnDhDCedfCEkzussBGqGC9uQNypTEWEEPzZPvRF",
  "key21": "3MhzDNYtLG5frpbcMdGwqHjLknxyT88Hc38Rs1ugZ9AzbvVUSrjGdBHpxJNdgUHVAJC9bgFekMYd7jjMRx9VkhH7",
  "key22": "3Xy7iR2UMFLHms7WciB3P4gdEdat9MQ6EZzB9FFo1ydQJnNhDyfPjXc8DvuMhrFrMhzX1Lhee3CgwCBAzgpZB2bc",
  "key23": "58QmRbjpd6EAUszFPoicZgR6ecqvXmSLzWTtCn5NPBAsve3xdYeeoUbb9BDzWwSEiFsPs4voDeP4UrR1imLNCpts",
  "key24": "21Hifa9yts7MMnb3idojPJEpHcSJMXNwgyV9fUFbpLexKaQiBNeAnXePwDuCwuRcZ5ruucA7ujoG35XEwZpqBjKz",
  "key25": "4ZGP9daQu5U4YvnzxNTfa96FwSSq6QvQgWDfgkcyYa3ZVY9Tt7328HfXdgdRM99Gw4V8yeK6aDkryDJ86vL9WxYN",
  "key26": "5zgpM9bD7V7tuEWAihvwLdT3Eho3gEwJJfVWNZFJNLLR9xqd49mgcJwpSUokwWNPJPTkNfsHohYjkeujipwPbPMr",
  "key27": "5iT2zPG2cDeqQhyRyG7W6LRreiTfoziFYj9ZEHWCCfJhw9Zpgtyf9zMV7ERAwc64gi42jhmzbscak5v2zniuZ1rf",
  "key28": "253VWXkBwbJatCU3HwLf32f6deRr2JQopQikQQoapBVoErUJ8S1T2R9ZhzfPBLApqSwL6c6hdWPMDEmnLx1YhNwP",
  "key29": "r4HuFVME2BCKLQ5yRRnf83uAT8LKqkPcGdBKu3Hqj7kjvDuZ8F1wmtxu6s7rA38y9UZhp74PxnRV6oiipwHADTC",
  "key30": "4HF1VNwn87fzBrHxD61kHv1rcXfxVWyAqvppLBTSraufyvD5QMXUkibW4LaUCfie5q4AECavVMeHWHMM76jBaRnX",
  "key31": "4Yt84cLKYcmdX18tboaL5y2ZeSzBhhrrrx6T6aNRpkGM5hbpAuPjVyfR4tiXXGsq3zEWBKX7Q1bim5LfLn4hyH66",
  "key32": "4Xj2KTmfaPo5szjiMimHxTCPJqYMHmNZHj9iEAJHaqYemG4u1jpnPkNJJBf2QNqEs9UuH9gJF2BskmNkz9YHh3ew",
  "key33": "3JXV1XShzfRiZ8YrBCw6NxGY7jiV6bi4hSsCJ3WSemkK8EXdQoxtYTEZao1KfvWqK9kWWf3irVp7d4j495zk11Ve",
  "key34": "2KZdJe4moXXKJPdNdVXSf965avEA5sGPdcgXieskiUtKUpmbP4Z1WtqrMQmjFptRabMhfUyd9LQLBpZrvMiTuuJ1",
  "key35": "2nGZYh5XenVtpmWDF59kVmvsKNwa8AvxSVGQy6SBYG6WYrfchEE1yLGSJfZEAw7XgKbJ98g94mDV9dw4iSue2AcH",
  "key36": "62F29Ws7C3fdP6xCUHMVwqt8MyTi2FLXPD8bLM7Q5xhCjjwFSJV5TNQ2VLEeK6se4rgVv9ap3hNn6VUgLPZ1qef7",
  "key37": "5otRc6Eqp2BFbCppUTJbYopsHRZ8apwCE4qqB4hnrY44eeuLfmebjWudWN4ZJc6QC8CmcaUumdzmtSeAdASEPcgN",
  "key38": "4cKnB5K5z5sRmu1cUpsFdWmbMUERgKWuqvporL5cpdhS3VaHXpQa4QrtqcejkBmiW3iXqojyH7yyB7cj2uRdhPDJ",
  "key39": "RJ2RxqNhBnK5hL88SYf1zZKfcY8Fmv1Z4YLrhn6FeDdwiauw8Rf6xXFegdiUYZPCTwptnxyneroK1cpVhPwEDSd",
  "key40": "3SvcUTv1csDoTbZfLTDjRuyzdnzFATwR3Ha9GQ7tW4WyDXVfRgLytBkAC5C37sDqhrfkwhZKNTmaVyYD8xb11ZN3",
  "key41": "5dvpXfuQDNcUsBcV1Je87aAuGX9QMU1fjpoVihUeYmpvKALi72erzFrbeXVdDVpheAiiwEEyoNJ2APcrjNfCX9et",
  "key42": "2RXJiNp2L7w2GW3xvHCMULbxe7WFPeL4kxrFJ4nqsVAa6VVgqZojjQKuv8Wq3ut1VvZXiTdpUtgEL3jyJ9QZhH2x"
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
