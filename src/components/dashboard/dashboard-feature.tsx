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
    "2iifrDaTVosE6KVDeoMR1AHJTNU6itXGsV21w7FdzsvtmdZdiyipLHgjyvEc9rux62e7r9hGKqHooT7UqtLiZbpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28AyZfJyvfNxdgHJ8dttyoaUnBgM5XJA2PkN9vKVbCTjYXxrrmKFhC6kSehR2KEikm7merXcJd5obLdHuN4dSWe4",
  "key1": "2EjvEX2pqLQYwdHHujFVH4a39s63mnPMQxven2TQSXMAvxyJccEhn6j9nEFWpjoAxrHTWemvvbbf3T2GK5exU5Ky",
  "key2": "sd1CT93db7KBHccrTQKPgCSWap78e4EzaBf5Rmv1cjGs3nfKLebc4GDR94zA1m4kZRqZFWThJKkLgDsJ1pgDH1E",
  "key3": "3g4YKM9f8D4zxsQ4s2X4XAnawiFdrABHfV8ozrWcEiDGDiFt8p3NwLpnwQconFsJhR63wcfe4AYvz2ZNes7p9xST",
  "key4": "2KiJpGayHxtDf63e7NfcuBTELLabYCEmNkpGNqVApfnhMcWFSgNV1fPsNTPSByemMqKYKHmJ7jVyej564wFEz9De",
  "key5": "48DtXpDLHUuPnaTsrdd7Sqa8fjavtGdG1u9SXCafZCrxwq9uiz7aob89PK52DbRqu9zfBme9k2dQWaJPzC6TDXvG",
  "key6": "4q3nLgKNt7iE2wujG9sFzDpzAD3tzEe7Sjm6p3uxMws5snRJJQ6vY6b16oQMXtu7mTq4GEfMf3yoQBTP3WoAyJrP",
  "key7": "aG2pAL8VqyN2bU3DfiVJqNcCq459ZgyDi5HNbLxn3wNbCriq4nTgYwokKyLkCtCgkG6DBBMLzinKyRZfbQBnvVN",
  "key8": "4zbh4XULJg46vEGiBBhqW8nMfSfreKR9rQozFh9dFcLi5mMEE7HQPu2Mo17pAeAdnhJiHdcG52FhMLNEdrH8CKbZ",
  "key9": "5ACybJV4DK2osHr8LYR7gff7Bcfv6SVao17aBiPmQqnqdvGDXKsxdnwsKsJpcJ2HheQSUYuH3duvAB9JbpT47wMn",
  "key10": "3MyNuro1S9MHiTmdA2jZKvjXgBsbTMSYA6weKAHjsUR2tYbkq3W3z78eduruNeMDCDjNX83cwQb57stBvitMgVvf",
  "key11": "5S84k73dviLjEFo7wGv6HXm8Bft4B5x4WhvACQfmjsPrbQWdeL81dzjdmhi3jaKGSWYackBeVn6ZcnRg8Yn3nBSC",
  "key12": "tRx2Ks1daQX6uCvsfodBDCWasWn66rMnCZPJip1b5WpNH94mgsXkUh8X8HHESukxbcQd6Td8jcmg4ZLLFwKtJ66",
  "key13": "3DSrDzGK42t1ThTAbAXQXspjkqMM57vgYsT7VQ618dsuc3pE3FDUE6Yij91vCYd66BU3xLon3fyHKcSxQDXe7U3q",
  "key14": "ZNeKmCSBBAC6ajDL8xyweBv5VRGycNS29GmmeMBKBKrqKQBPA5oXm8tK2D34Z6ijP1xSEphxtZAFmBF5Tm9VeDh",
  "key15": "556Tq7T1Jix77aS4mfsgvjEsxRHcrZ1ujXnrtNN4hrBsHqpUcR3o6h7EBNLdenXyETgP3eVVFGUPfRMj6BX5mtNZ",
  "key16": "3ZrFTmhhbew4HtBV5JEWcZKFppYXGKeR8K2LtZMygdnEgEZ6XPw12HWJ8mqwbrnwF5jWXgKf9wraBFTjMrr1SfaQ",
  "key17": "NxvjtAoLEuTaqoJDBqJXDLnUXzDjUmDeiCK9nw8nf8tKp38fCKqC37ySPvFxVmW1jSwPosofqRi4qTq3emqVGrx",
  "key18": "2vRdygntHG9hkxwpcDhd4xUnYoLwtoUcrTtggRsHV99bTQ22cHQXmsX9qPw1uu2xbkjvFtC3ThF9n3fm38mKC1kG",
  "key19": "2VhiLzRAjNToNk14szCqV5WEki7zXGUQbMaifiWKYk7yUGvmkcd7TmJC7j16UnA8VCGNZ8ncvCTJSrKxxbEAF3Fe",
  "key20": "2GH4RAkpZkDzeA5d3pqSiEAxjRmRT1pFr56mrZZnBXpSFWSznCnd9pDPm4wG1WdPSCaVrtbzeUz53EuytWMe6tJ9",
  "key21": "128S7uHtEocBX4JRuRhw9SFKnTFAK5REwNVRgVzK3PZp9V9GgthypGMyaAAbn9rDcgCpxMqDzNAdRD4uuf6LxDt3",
  "key22": "3ES39xxbuKmzteaeF1C3YJuD8VBoaWRoR6zVdwU5EPWEUvi4e9gnMcFNAmpX957gNt8MpVZEMSuUixmtStHmzAuE",
  "key23": "5pd7FMxhkgkrkciZDg7qwqXqSjMAvVCZgTB7P8qr5so2uACJq4pvbyfuJaCG9eor8gTQ1wq1ryQrTYSntBxmMine",
  "key24": "4dTS7ad6UR6PsofoffxsqiXW4G738YhQ2jsTASiHykqfG67mhRBCHhkLQyDb6bzqF659Fe2rL3PFdzaspPwgb6ku",
  "key25": "4XA1TX3FT6sZKE1rbZ1HKmx8e63Zsfqpm7BnFsaRMmV7ReV8ywKkBSzcR1183K4U2ou4JAXchYX8bcuPnQEM1MhG",
  "key26": "5gxHkKq771aLWK3txm7783DxmFDzJ1H2jaBgedDknj92F2gGyU7ZZM6hu7W9LSAis2EvZZWiguuyE2CZR1CsFize",
  "key27": "5UG6GQ8U9fdnAGmEtqoYnFU65SaqAHVVDPyYLuxQDQkvjAJhSzh3PstmRKNfn4akg9aWokwLh8zNgafCa6HgMhav",
  "key28": "3SDtrKm2z5wEVLK4JJspS9CeWuCCdU2fTJPqmbG3r6YDZYXGyYxzrFuvG5uAJ9WWVihTaKQzd4Hr6mNbuJodmxhW",
  "key29": "4oBTPU2GAFac5RafQZHrcoMchSMzkBGD7abenLJTRxvsxS56tiwYT41QvAiHAsrhH54yzaoVSNTLuMHnV5Vjhfoi",
  "key30": "27AYKnwQtauXkjZDTN5sHLSi5tXy9HSKUGFNMEQvfgYmCnUvePkuypwq6gAMBU972w2vo3DGkzreBQc6AybURc1m",
  "key31": "AHth9Vj4xUMXqD9JDSw7vrkvQEnA3CwqMpkDcunqdNWmTbyFPbghK1HYHHrb7QyUZhC2ZMsgxsSsYKe4kicWbmu",
  "key32": "5EPuEZmKey2MJSmrYEsdq7Wpm7WsGzD39cSpt2DmMj2KE7QK1SPiF1L8Q9Bmbf5et7Nqi4YKCu4uZNDdQSqjEF5C",
  "key33": "c8vVEf79LM7Ug2uPmAu3ptng1wZ8y2Np2i9mWfyo3Wi7hoESKhwDaDeC2uhbgoMqDMbrzjkPkep2bgrAoK4v6Gs",
  "key34": "4YwXtpDEFK6sd1RpQxPvqXFS8mY8w643w82VixMUnYkrjneetg4C1p4jH7RTwmVnW549XK6UrzNZLHtGxTWYJPJ4",
  "key35": "666UNcrnMfi4WzYkM2PER7J8kWgdNDF2re7KHkwJiyzeHi8HNtj7yunAVdV8C8xCQZ6kvTSzisaF6Cw9vhHnUB3e",
  "key36": "4f3Waqy4pMJuUN6vJcKDSh9cbLrWJt8sCJhgMooxaPhjLs8q2TfkcY9RRwPe6iv9nwYRUnFcCDzCe5dutftrYzK3",
  "key37": "5TPcCHBkBBZUhrK19TaQkz6MtyiW6uqT2QQ9aDDZmdRZMNDsJ7ztRq19BkZhwrHCCoGxYeLyvf1LSPYW5LaePvV3",
  "key38": "3UcwCa9Haq7SiGxg7F54DRZUCHVvfUGaWbS6mZG82MTfa2ziiCQF8Y1X7zzKU5agHs4dZBz11Fh6j3g15QzBUdYp",
  "key39": "3Q3HniMQ5oiYSjdJuXxrP3d7wConqwEnsyXhjXrenP3SzBxjtD2pBLVJvkFhfQo2NNK7ZNvEfBUqVgtTTANUjiLE",
  "key40": "2TL2DEtRp7xzuSL2fqemDSzQrwCUexWW1BB4jeFTtJBNh6FiyaNW99sx7qXmmYeEcUt5FNh1tZzKbL9ZvsHaZNWb",
  "key41": "5A2m79eDADxKqeFiMTuE6yZxavzzdHm8yD8W2uRpPzvLSbo71bAwdmgKP6zohhRYC46WCxrpLDs2JibyMSPtEzLe",
  "key42": "YqBipkcPdpBRYD7ESz9p1Ew7XAmr2eQKuvYdTdUzXKnei4piWuQNY37cLbMSbxcNiFxV6r7ZJTHBZ6KjBDDU8cS",
  "key43": "4GZQLarEtzsP3ybr94HixMhchy5dzHWE1cmZ62NLdV8a13we6vwqLjjFbgvGZmTBYY3wwoR1irUQamygHWQeLonY",
  "key44": "8w14Yp3Nb6kcMU3rmjApJ4JdHECiVSifhUN1LpwLnxhCNnpg38J3JTW8J7UMoyoPSYWrFmsJRQZBAn7oorGwBgB",
  "key45": "2JMY49LyfgftV3XBQczFCX5xZEUF5KAkEz9kovLugk4zaV7LrsN7CCBBu3jCJY6PVNQv3ox2Bp7bCAhFQRe51cuP",
  "key46": "2xs56AjUuW6GRp8FdShwWej3iBeJHpdWyFRz5WNgA5s1UVJGMofeYALvGSPK6KXUZiYzutvc5phARg4DWFq8HRM2",
  "key47": "3JEqPo6a6x5b1u9Hb1psXHUn4wVF6D9uLge9ss7ZdHr1KrMzmxqSrPrivPfKG9cagLraXfta5NUGskXyncoWEpBv",
  "key48": "5HbHVM8XunB7my3hyeU423JoyKyv7g1NQrak8pFsmNYtBDTNh9Nrxhwxk28cRV4GeufYZsbiHnYPrFZhwWgm9urE",
  "key49": "36D38LDwESJ4o3sfdn9EHBUQAY7iDzYyPi7c8Y9Yhcdjp3j3a4EucaHxbNwmGBc2cURARTWWHpU2mcN3J5Cef4W3"
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
