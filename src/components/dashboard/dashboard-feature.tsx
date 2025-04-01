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
    "PGnHNqc4ptwzzEmcWwAxpQ9BVTjjh1G9URabspgWoNW3z9mMZ3YGiZzo6w9xJoQWCFpfzX79jKikdVxAC85hzhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59wGGgMD3NFnz2VbZekXaVxAduGf4QUqV8mw778rUyJoKZUb9Hggpo6BgnmUHaurR4ti6D7vuo3oA5uLWPXEdUnh",
  "key1": "3G9hhvfCBeFnx69uZk1D1KbhGBfrThtXrxf2uJCKto9DYodpaBxGKvQT92RbBCagHJJCakwKZ8rayKT4BFHQDAD3",
  "key2": "4j6j1WHnzhAkAjDHVCNKsxgbgqjCeCySJmdGrExx71f3w2HNXtD16ii9ViEN7jW1tk8pJ6f37mQZKSUKxfNpkHee",
  "key3": "r9oYvNMUdXH8mD4FLzRYvzUtD3LeSrQxYnyVTcNMFaZFW8BmdJ3ysJd3AJM7b37uMqxZDQSyk4gMWdUqndvQe6q",
  "key4": "4r5yANprW7B81DuniDxak8KN6UtiRD3AtLN2gZ1d8GhEVjT9HtA7i2AiFDAzzjieiigq1ir6CrVjzvs3a7BSjbiJ",
  "key5": "4hjNVfNrBMbYfiEjQ9EXcJjGRbmnDoA99TFvGASi3gUuGN5s92i9RKqDvE5RAs36hCCPPTKfaMjTy5AF8M9BUZFj",
  "key6": "5qTiq8pFBGGDqKtcMwUJwkLt4WsSi6etdhATS6J2iPLj2TwgHk9gGiPrPPSXFaUoggv8zhygUYjY2RYtMGWx2QFt",
  "key7": "3jEtVC1rotBaf4TDvPsCmUozw36DSYtgrXoHJMWKHgKuNiuzhabEGcnN3pGdDmHUiPPmnWv9g3q8BGP88Yme4EUD",
  "key8": "45589U5hgV8rBf3KZMJrTJDuYAjbnUYCfxLDujYJpieaqJoBHHLQ6BmXSMEHQW5s5aMLJeyzRpJeoubMXh1hFdmJ",
  "key9": "5Wc8rJE95VvEm4ZxvxkBWeJuxSPBLSGg6VyqSLXMumLihuv6g2fFWAvFF3JsF6bRK7u96WE17M74apzNPX33kXyK",
  "key10": "3VtmrQZS69oJKxaz8yJFkoYgXpEp6ZZpNrAwuBQ12UZqZA7g5CZoMkaghjyKfDGc3Cw1igJgsBrPUn1hwjbfknh7",
  "key11": "4xEKd2BMYjKMWgstufQz6kEKus59CaaF4NzSGhGV8a9WwqQAq8AqaFw7BSiKEdTn4VFRg8gpYPX5i7XFjpNKpbet",
  "key12": "4fwMPqss3j4eygpFL6ed3gzs9HuE12VzhHJGDusjSPK9XFNFr2NUgfaCV9Va5QZb1R2KMktDKF5iZ2Cs4vhPi6zo",
  "key13": "3YekRA4aRU9wyY1ZqmPmvGW6btqXEGXSmp861jDooGNvf2J8hSxCcZNeHyCFcnK5q29ZRSyqSbfpwSnMLzLbsPrL",
  "key14": "55oGWfQuH1513hGmVs2qgtYcGkAGva2utSb3RnypxACmTZ42TzGo8qM4fStcWgnrp6PmQZGGdHSCayctMx7dZUDJ",
  "key15": "4e9Et2khAw2awPkUhdLWd7T8NbzTNGAn3tgG55sdCvyzYm9xrQf9NhmvKHz5GGH567w3En8959A9AknsDRDkznPN",
  "key16": "5UFBTSb2KRLic8n2UQ81YbRPaMUtGyyvb55hJ5bSvGQ9mTxRrDT3x8BDapGwLVZsDncKm9WYcrmvWUkFHgHtwJNs",
  "key17": "21kFbxXbmCLWCKEsmLVcvfoXDALFxZrqs1rDWVuaep7Fidrhyx6cCM5GtXsxLrJ4oUXYwangEH2QcW6ZXPRsdRiD",
  "key18": "2X5zyTChJLPfR6EMBuXZXGjFx6aiPyEY2ivNvschZxr3HebqRBuz3BVP9Ckpy5ZT1K39ddNvjHM3fn68CrcJvA3U",
  "key19": "763BwfNrAE4agFn6UmsC1VeMeEnvLMvu9kBkMF3ywDX83fd8PDQ1PEi6sZtG2eQcseTseXXZG4ngzRy17GrSWLY",
  "key20": "4oQ64Wk1giNfF9UWRcGijV5fbHU1L9Co5CPULQEEJUm5EEqbWqb2yaCbr28ciXu9VhALGcUKaWbPZ4aeB6smkVEw",
  "key21": "2dCAdiFD7cXT4774MsmgCTBiWkqutU8zb97H7JvNQNTCGF2SYN39oxZmYv8iu3BSUgXkskCDvddyS1m5NzzPkXXJ",
  "key22": "6UhToJASxe2CiqJN2jhSXhrUyML7jANHUGqyxjoSKsHr82EfQdH4WaUwUvKG7vVXMuSkKZmjfGsaBr9aqKXQP2A",
  "key23": "3pXeqjJaPkEwGt6nXS1oUhraysk1GPpUrQ2xSzWCtNnKNuq3T8snpYT8MqaJ7xKjMByDUi1UUBh3QDgfD2hzpyAp",
  "key24": "4Lv37mcDPpGmhCN5B8rRKVU8UuQRw1cVnEXtNQmC5tCTsa1e2pxFZf6wJ7ZwgZDkR9vtVdcYVqD3udxnFoXcMd5q",
  "key25": "2p7BdM9zYghtrQBoAJFsxTd1NrRPpKAvSBoSmrkbstQvxpX74gMe2FTrc54SEvP8XWmNWugW7QaYJnubizkBDcJh",
  "key26": "3bbDKRMNrv62ppcjetymf5PRQps6QoSTf14ESZHdXFERaiGNXmAhqsdtCAVpJTZLkWpPGHpM5Be3gZs7xYgEpcek",
  "key27": "5fmg1bENky5ynSTJvS289FcE86ZuLmfoxnepahVH96RQJvPZHg79VyXN9Kh3YJxQNaMzUvatXH1QehNh1F9LvbW8",
  "key28": "T2vFi5eKpobexoecWawVWYJ13b8EwfoxRuoXqZ7WKHq3njaSGhX2gowSTF53FdCPzbSNgacddjkwrTNXVUb4v7f",
  "key29": "pmd5Jz5XrVpc6TjW2RgftkJHyxT9etBBGMovYmCAo8B4C8RygUcdcg97Q6GYc3Ex53mbNWgH9WEukFnHwpcQKe6",
  "key30": "5v2MVNYT85dT2vX3vTLAQgJ1jioqPX988GrMoSgPoPVg17iVbHj5pV2RAX8Lzn4ATj4uDLdEWEPzoXnB5cPnYV6D",
  "key31": "4xRAbgmgE4HQs7EnGkQB6CGpPMSmYJpDHK6tbwB19EZg4sdxnuifmuur9EeKgeb36TEyAV67t3TQC69KDKRNQnQM",
  "key32": "3471xneTGJsCtz1PamLic7r3Gk9PUjKxDCaujpRZ69KiRm8kEfSpSp68jx2UgUKBpVEWHFutS6x87S5n9CpEZ8SF",
  "key33": "41xWkTnDc2R4JPrzizvra8dSWHyi5fPgYFTWtMeGSCcYnBzRTrXBAKEqKdpLYfFfVd9kQAKbCDanxkz5XqVXtwc7",
  "key34": "4TcctTFQbxqjknXe8WXh8isbg1YFNbwUGchgFF4JCfXd1ruPFgFehmtb5RgMk1iHALi72c9bTxSz9ZMucMK76wAG",
  "key35": "31Tvz7TKkeytnutEHZbVNyxKpJ8B7oP84vvYg7SwDju5aY4Xv8Y5n2HA7vHxxy5CF326wFGW37deCQPG8t7kJ41n",
  "key36": "3SG68veXqszStmLTfxRtFeLCSxGyuqHsGpcg2rThh5xmRtgijuDbXCCHxyGkhXuQF3HQaJ64oBPE9V4hUMpY2Qbb",
  "key37": "5TkcQUJC5ASs5XnTkKiHDxSDVy2tUR9fE8JV2tmkcToLuwhgVvNSCickMXTiycuhJtXvvMWsMa4DCkeQ4eLwEEgt",
  "key38": "5gVAcHs5uHVMyoV2C5ZLXG4xTLw7uVS7ZUjMacgj4pFQ7yaTNe1mdzSr23mUtSBR64ryAGrWde91JbEgjrkPuc4N",
  "key39": "t6kMWsTivdyS9gg6r4Z6j5R6gigqqdpgk8LUbMTYxMpgTTsJPzgNZteuW39LjFXU34pEWv3uw2sEH6nfYZ4KgQD",
  "key40": "5JqvEB2nQ3LBt8SBZ2pG3hhyfhKCbvy3bETGTELzSvKNcgFmEwLjNjU9GcQbeFFzGbTLhTMFVCwf7ZiDjXJzfsgR",
  "key41": "39mPEff3ditmxXVKRmENVnYfD5raqpqCVYB4PK5aPDbTEsKiFtaHtcCc4Cj2cmMCgu3zMs7w4eBtaiU53EtKrKnF",
  "key42": "4qCQ3VKzKfXfrU5RuEsR8mPWuErkaSGSiYy4zwccxNEtFf7mgyJWEYNm6uSQhYhWi8BUepxHJeLxEXwu7NPx7JB6",
  "key43": "8wSaR6Sq3pRS1hbgVj2uV6zXeFGVfEqbDfWXxYNmQHyaTh8WT4MamLCboXr5jf7SYfYZQq1VSyHZQeUN6FhkTJQ",
  "key44": "9Aof2Xv2nXyEN917p4bdq13xPLcckQoux7BhhH9qsQGBQdFFZKi9yUjEk3qHGjKYbi2pwpHWTkaZqn2cs2tGBNx",
  "key45": "4P5D2gCGEeWQXgZqG9mnVgyrxKno4iLaLxXYoBC8PqQABuApSiRfj7qhiNywbLZcbcg1GBunJtDi9ewWt5SPimcw",
  "key46": "2bCFEQKTnGzmH1suahehzrqQaXT6VrSEh1744YzZ7LbZzu8hCL9MBD5accBgDiBVbS82EcBpyF6SEuAKyDhDV9Nn"
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
