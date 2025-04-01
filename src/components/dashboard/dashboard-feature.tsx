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
    "pNAcHJgjRU5WrPBnaHiunY3LrTJkAjT7Ujr35raBbQEWuf8SR77VS4ADiDXtCGHczrapued3tfY7JcMEgDTU2nB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GHs4UucBA8z9LkGhkkskhpqdMu9ix75S9r9Wy93n2Zknc4zzmoHqvKe39uCofTcCRSJZFBhb6F65rsN9togSU9E",
  "key1": "2FDLk6cuXA2ttq1319x6AxLbC4PCvDYPZKBxmiVPupWFBczDYK7gR4o4NvQEaqX1bEi5EJUVpQ2v9x12qj29YeCh",
  "key2": "64wTrep3Mkyme66zK1CubLH1CxnLgttJh9uidwfzzNL5VFFbqspqKvoucziF8qYpuP72Zw4r1P4wGP4LnxmP9nMr",
  "key3": "4d1isUJC2UwXApDyGeup7v2wR4bi4JcBpdrterce9EhjV8dpLtb9BPsfMgh1pVV81XkYWP1Gjv17MrobREHN8n6P",
  "key4": "4oRHRejAY2GRFoARc9AAv2pD6PAak3KRQeraDjiHoVpPdBTso3jkLrNgn42gBbw83oGCSAd96AsEGdKYrrJzwC7B",
  "key5": "4Dd7J5GVssxSU3AdoTX1aquRssjRimXLaiPDrcYzKwnPY6aMXm1nUwEsjhfiaqXBSquAzyqx6V1qSd6HcX9yTbfM",
  "key6": "3Eaj8pE4yRDQYFhxVFgPbrZmJajurkT6R5gdXEGZQMJJqsXfc6px6aS6vPy8azNJ3y9PbQoU3NDZ7NFvoR5gqTG2",
  "key7": "LowcQSMBDE1EbfnxwUnZhaTPheHAcEe9gDYWU59xzh8JATQ4pXRbVGMaZsra1BQPvKaiH2H3cV7Y4BkHna2KWRp",
  "key8": "5yzSmzE7FYcG39Wh8K5jjxSDbQXsDAsEZF2imquCvFBDir1xrX7SB8R2fNt9PdCPSPgCe65funN7PVhmMrbsNAEi",
  "key9": "5AtPDPD4oh9NDJ2rcBpXFBRzVvV71pTB8VuTueqLc55xVGMKiTFzQEavL1HhRHh3d8dmbU57bWCSXaPBp3PUgyXg",
  "key10": "GxJamsDjQ3iy9i1M72HANrnY65WLqsutb117R47RdE5kFWXH5J7ZbBguRJTphLBgVbdtAnMvikcguzpD4LeifYL",
  "key11": "a6etQDcCpqe3BR2khCX9tPUbUuMBzAS7kTPVhiA6tV5R4QhQYXPKpjNkuPKJd67dxwWprQQEmM7gae1ieMwY5w8",
  "key12": "5QQHXDXXN5NQJKEjk9BqBSez9X6urkxsZamuPokNVBE9XcbMFupjC7NPfFjQdbv9HVZMQyup9T2HZwcMz2K1zRWp",
  "key13": "BiieQqPRUEPx2XGNCgqGJHP8dQAFDnDGB1uqfYU4hQKQGZMRea4Wt3EYtvGSYBStN8CvbugLbeFrWFUAJaTnwkE",
  "key14": "3y1R5PYAYrf4sruj8qkPvnGj1brVuFyq9MEd3BTLPnkGyk2b78hUAffQGgf2vBrNnzDHgwHXaEHUHop7GwHaUMU9",
  "key15": "4ECFeew6R4eMYyFHuBgdiMKFMTraXgJBajdX89nfj61HNJYPcE7FtqqhR2KSx43rb6fjcnro9nQDsh33y99r5A3R",
  "key16": "4q7iGGJW2JvNFqkJ8EVVk6MegK6q7Tnuv7hyctAeC6ozJv74RdLgf6mEzKra1WCQALCCx2bUAsLZfT9BmLPHYRoj",
  "key17": "nTnuxM7r6qWspdTZLU5eV1sFABxatEw7ajBZtrdGNZFFYP2WN7TcrxfDfEezX1QZUntSg3ozdZkLmZbFAztoqmH",
  "key18": "5MozbCn7vpbjaGuKcL4k2E6EQRUWvtsqoQHXXa3uLJpAJFJFNYdiAvpknWwWk1J9GdyNgptM9m1Hd3H4mRCHXWRP",
  "key19": "5iKBD2vvnmrrJrwpbGSDvtLNanboCypKKdZoij8yKx8SbRB4jRNfm5bQiwoaMXzSa4ZyQJnqyft2XEabT4rHaThx",
  "key20": "3pM3uE2WJVSBUQUHPnSz91WM59BrSn1pATMG8SisxP8MF4wyAN4kcFGJBBH8d42xL2QqiSjHopa5Wwj71D22dmN2",
  "key21": "41iaK1KKNjfs8cRvt2pXZnBHu7EhxeKfgoXipfPbj5gBUiRhvn87QErZVkuRpuojebd4FjNzM396foY22aw7dMTj",
  "key22": "3pMmJ5JS2ryo3bWDkgzqn2LEgZshF5F1XA7Wmnf1uttS1rxTqLTsasxFt513mM2UXJitBbauWDm5smDXCTVAXSdH",
  "key23": "nE5gViknRhLgvv1trPeovSerDjc89r2MKbv7h2fu6LcpBvkmJsRbYG1JbJuojSeh7ECcHSh7rYdsyzSDjcaPX3v",
  "key24": "3ngNRL3vsyhhCK3DQr3TDLCSnQTsqKi5tirfTyiEHfD6yvgDTd3Z99QfDxpGw76eXyNZ6AR5p5Hv9jCK48B2prkx",
  "key25": "YYmeMWW4SytqrJhwdAv8EQGLaMrP9GsjBzh2SN5zQJGhxwWqTdhwnAefmZSyveXiVr4vx1vQzzSBYbv63Bonz4Q",
  "key26": "2Pwb9Nmo1tKu4Jc8wsdwEVZFC3sXd4xAEDsHamCfzWHSUskuZ9HhGKYxH3a8RW7FmbQU7zfsxtNPxmtUh1tuiQxL",
  "key27": "5Xx84hCEUEh9Fq1k7FmL62xSgnTFZaYaseWzGRMR4wYJS36mAUae9mPDqMLw1xt96bXa2knvCwXCcL2p5roJKSPq",
  "key28": "8sLFYkmZ88fzvvFtt4cDtrFQe4GzHDBcEABnGizyxK9ZHxpJJkHcdFLkpz6stPRAZbMHPK6jh8DjvdUPAjiDvQo",
  "key29": "38fpNYoGfp2BsddgJdtPF4ybSqmS8tZh8aXSwp5bVs3nNfkFNRRVf7GNeEnKCRyaMmRWshtT4deqHQUqJwpXMp6R",
  "key30": "4H7D5qPXd8DKNQU7NreXsXs5viccxHdteaUbchwJxdaFij1y6tL7QbKThV8XM5uv5yqgVk76qgTVHp27Lf9oe363",
  "key31": "4g5fYJMXzqLvY7biEMVqgeXxQH6agvrEufakLq3KTXawiXVcRUhR3Th4EdELogQeS84PJbk9satH8p2eABYYPZjQ",
  "key32": "4PHj7BAf2D7bArRrXP82mBbnPxchUpLkZbihCJVguyduxyjjfE7S9DbNtvcgUyjWm28dM3y5g8px75hUoh818UTk",
  "key33": "2ST6anX4t7bPRzNcoaWPrQugDXQUjDAhR967WUmtkVJUXaeSLzVRchnYuQtRkJ7kymcegA3q95BfnLUgivbmK33p",
  "key34": "wHDWUsjEAVRFeHG7b7tyv6rA27AS2BoQ7667dj5pmbhakDDGP3ZNss54CoMHpMxtYXaN29ZoNYBa3jKP2WxHt1n",
  "key35": "jnSUB7YoLXQs6EDRiYyNeqmETLBCzBbbYyzapyLcmZo1sBYMHXRFBx9qgtHjLeKKQgBLHRHfooUaxiEibJo395D",
  "key36": "5c3zF71LvCWehXRR3u8tSvK2EDxQTAB3tDQ5RsMFaBdx6A8THzZSP6jgnUcJjTN32JzSAaTVe77zQjFqpoFwbkV8",
  "key37": "4BpnTaLuRv2Ka1E8FJaJara6mStV4HuXygdNEECxkAbhoshpNj6nP16MjYi3KjgVEnNmhpGuF7aC6zNLfah5JBpw",
  "key38": "5gXjAhTrZxeZYV4DFjH3o6nbkk6fZAWY3vE5HZcPtcXCHLdM85YsNT1d8XHVNLrixmy3dV3LGus8yYF5GnWN19CT",
  "key39": "3QtP8fo1AcQJhjHP1kukZGWkaB79z2sTQrnJTohbbNNcDDyUhZ5ShVuPKFgrWDK9nNeD5bGXnMo8VJwACv5j1CLs",
  "key40": "2v86USL9CSVGVDJyPgkSSrLYYiZooj9t82JDHTrvYyVM9KHMRJR7DbPTxVoHEUTLCgs8XnBdsW8cztgUWCtUQBed",
  "key41": "51h6KVkAk3EgtpfhAAhJXsnuUJ342bj7f9DdNEpC8KVoU1EGGP68bY1PCcBrUNtjNkJx2B36e9X8JdsW7eb4gh84",
  "key42": "3LRhhSyNvYLitrb7dw7CoJX4CbZJnvn7piwChKdtr8TRBSqy3demUBoMkBkiBiDaWKTzqCDaiqXKCXdf49uu28Y7"
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
