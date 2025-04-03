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
    "3YAfMXcmNGMwJSEnA4s3vp2BBamuJTm5ekDui7fyR7iHVFHtWTTwf7dDJT9287dke2Qr2AjPhbzcVJvyxKhKnsPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khD9TzSQURhKnMrq773s8fYKKhgrMs95f3mJLDA9kJH1q2vFaWKkASCTwvec6YWJmLEZnjTCkUPBJC7YfjJyvip",
  "key1": "32fuvGUbWaUpNbLFanYoR2HrFtGSxBNkCapATB15fKGRdSU4ofdG4JtBt7CAjnbSp5wCzu3V3mqp5QDvVJBf9uvj",
  "key2": "r5XrwU8zYmUvKjyFq2Lq2KpCsLY2RSfY2tEmzT4gKaYwiBiWipyR9YJUvhbeBXVjZCF5b9NpZ9sQVJqYBBeVymT",
  "key3": "2wmxd7X94ytBBJEavPZVfUTV4rd9bq9GvBhQ9cV3MHcm6CKqCF9bHdTpHCwSwd1hTJv78Nt3C5pcRGK6ARu6XreK",
  "key4": "3yxoMWzcDppLZCN1oCRmf5AkQCmn4nEs63XFE5oM78tLrUAd4b6RocNetdJhR8w9hPH8FNST5bn3FzNU9F7xJYVv",
  "key5": "5ZEnyTcphMb7MM5EutsC8trLWTDbj37E4a8BbsV1LNtt4qjkancH9iBTRvihoo28Z21ojffDWPnaQBjcZMrgL9pM",
  "key6": "3NZYRLUGLm6QKU4tRTxagGQqvazzhTDyvS17w3gvkFA128zSnWtYutgKnTSYmAeLtK7SCunhXnFSjcfCPHBRfw4k",
  "key7": "2GzS9eWkEE52R16Jc9UHVLWiuSUzhPUP4XHBYXSQjWETAMFbJQ5N65iL2J4XL2CFTTK9xM1kYbjdMtLkimHkb6Cy",
  "key8": "3UeteQRPNQTSkQwWRy7zDRs1Gb8sFLYwXFwQf5B2jgyoLH7uo8Tz1HUWMfFDLce1CK8otq5r3rDRSFho2fa4arQb",
  "key9": "5UyMiGJVYAH4EwsZwjtocR8icoGxxTcuJVH3c2dLvrXxoMM9TBQkuN94wDT5NbL9czCftMsdvV71hRxkZDoaLvqG",
  "key10": "5RKZMUBM4NyK3D9kGNUSULe1PCAY4AFkJcmqETFsPKMjP3KspSjKfuKNb6EsHVeSzEkUjTS61NiPup9EH2px2qb9",
  "key11": "2EozViUBSLCKQdYU8FDEfPvMWGCE3Q4iFhM1LyzfCV8y6PznFKKdv8dTeFrEey2XdwQEiwxRTGff5iEsgWVVyR9a",
  "key12": "3FiuqucGqpU6jDLVmLFB3sc7w98yGwab9A6yeGxFFaHZPhjcYfuxrbmePs928BaNeGNrzHj1rPW6u2WNyfzj261S",
  "key13": "3UUrHXsCNme9fsvu9Ktp4Y5XyooKWZT5bjHWcCsgGiL9QfBxrmhU2oTpEbustCcR6RZZsav49aofY5WcuyqxtSnn",
  "key14": "3zB2JnPYZiGz4oQun74gSfc6HAwP7Fxkd1kFNrpjM3fD8M4dzUDXjU81zUvmijrzCMNxnpHHNWN1pnKPPLArPZvn",
  "key15": "62Est918LfMAnGb68kvgSAMLRtWJzk1JXELyAUxnwQbSu9JkcHJJxKBCrCCq3guspQkyz6S2cDh9vLcVJwhfJVyX",
  "key16": "5dQ7W2kfe5hSXk5P4wo8ishcAiFF4n6vvkZffWeomoEm4sb6scSZyomG7AWxzuDfdTEwhNT1H669dXpt3ps6cXVC",
  "key17": "fjX4g9rcEvK6mfqzH6mugtjDyxEGcqKEBR6vJ3Gw1jxVC6cy7HxR7Lq1kWw1qmdGK48iQrnY41ZNKaxn3Dn871J",
  "key18": "sPdStDWELexTmsYVzvfc1ybWTi9RLd83HsceyhT5oUj2QwXW1cnR5tiDvzxqzPeZbdwPoUg3Ps7rQbZYNtYQ5cf",
  "key19": "21jzStDHwTma69qHqrF9S86uzD1Qdx7gBmRBMsp9CtyHBwAwJTCvC5Lsqnozo8jjdgdcJiv9RwcWxKuhsqrgDisX",
  "key20": "MsUsXDnf9i26sQL2ymxyLnFUskWNQcReiH2wYsRVFbjfzhh9Awyps5M4VgdMU6gMa4kutMYRP1b3S5tSPhP1cj9",
  "key21": "tcjUroMCXfbgru1nJmY552U9vCCZ4EqjjXh4MwsjjbaVVuNNRMbzmxD9gDwAmi6jME5xd3yZyY1k2zNsow23p8F",
  "key22": "2TGvTd6nxPb3SF7cvqnh2e25QfA7S3ZwedjEoo9E3Lpu5rSHH5NosZS6rGHjZKo5PLat6Mu3J41rxRp2XF4tJN2g",
  "key23": "42DbLSMekFn6eyjWyXW9nFRj78J2vP5Hn3dbr6KtffEfcKK3xVhAdKTzUG5BKQv4rRA1mcBNwqicqXjhmuwQPT8U",
  "key24": "53Gze93awVV8XGJh1eZKaRucqTh4o2VdQrKwWjoZ7GwVFjmspiosMKupByAk1VxuhDPTcZzpPBsTmPtayZjSvQYs",
  "key25": "o7QtwidXtu6phHQfV3wX9AkHHC4zazoRDhVmoibZouShjBNLoCuk2pnhM6cVAaALTYoxmmoJXTRmRddCJeUrZXA",
  "key26": "3phpKvLXcfEoBcKqRFvuhQjQkoqvducZUmC67z9Xhc81htBsPmbEz2m2m5bnLrktiGF89L7h59dabnxYr6YgST7p",
  "key27": "2KpHVpsrPxd6CVTrdXsnX85DMaWmTHCHpXp46ZUeaJRtwqpKcrb62vxq8XKux1RVtRMLAPysfrfT6LC6u9BWh8S3",
  "key28": "2dU5XWj5CXpCFTpgz6F1q7Q65dd5Ci7rhmLKFVwzgMyQMcxeUghLk8SWooJDYHe5DuXqZRiJQKNWz3nKHLLG8dVY",
  "key29": "p9ngWUuQo9xTMyKzezVqRWsSmY762VFyD5AHnW6MT1nQymHBCstfujubf8V6ViKE1ctyE1eh9aHvHRfxfeJLVbD",
  "key30": "3CcDUDr3UyKyxfuv8ZKDEeCFa7wj5TvEwQfZFH3de68XtzTDFCY5ag4rTRby642nHFq3Q73MoKL945tDkNtdth2c",
  "key31": "482WifeLGrSgXM2QSMhPX3ygNHkJsAseHV8265zx2ayEmQ2VjkkHo49SzDS888A18kbGdcdcMA7R5ex6HEPNNNYe",
  "key32": "2PEqfuxLe1i5gdxcAFd6aRgd5sZmxrFfttQCHJeMYdRF8wirTWg4BMxL1r9zVsMcM1x1aBWgDWExYhWFjkA3u7Mo",
  "key33": "XWNSyh17hj6WG65mvicQxqvZwYpUuZryoKHJqwtEuvGjBHanvD1jXoXJgTRt5qaVvNJd5buep7TmKR5Ue8i3452",
  "key34": "2UrzeLdm5LYvPSucXCnL8kZwFSzLvYnVBnnL2Pr424c9nV7Jiz8o4eCZgQseYwJxrCsrEZxgm9Ytjojha5wEYkRU",
  "key35": "4TG1GfcoMQViGqvwbaFdC5WBpxnFQBn81dN32Vg9UTquK1MhWDYgEw758tS7K3G3v8Da7ujmCX96LWaanszvgAuN",
  "key36": "3BrBTKo8hgisasKAtUNd9E4GUVRTwFvfwcvNmTttrV6npv5FZFQUBmXGUjwmJvccZ7sFbZKK6oQcRff45q9Y937y",
  "key37": "5FediusW96WWRMSiBQ2A3RMZZowtd4vTy17gZMuR1AL3f2XqEb6KWVJz68DSfcshQcZnPr9Lz9Ev8vsfCQBtZLBV",
  "key38": "2DW4Jnw5dr5cH3oPKkHtuk7L1Zxa5RiEU8GDBBPtZ6KVnKtnj6wwecoCEYhAwgMKnSHmdiDa6kpRPm3CL85zRphR",
  "key39": "4aLxAknw7pruGGCseHNVuQgyGQvDz1WM1EXKanw8NPp8PPr4XnpamJhiBRGg2QiE91qrVZokKpANm1YmTCqvvU28",
  "key40": "3SWBTwdkk5Y37pJUEYPZk85RefnyagpKW2qAAjGdEJNTGVxKDSdc138VJKFE8skStUMwYxJJHW9S63NHwxgbDBYt",
  "key41": "4H9CSjRsVLnRBUC4QjUpYFCALZNHXWXpcb4YTWBagemsNB34w1VRxXz9yo9iFN5hCEVDn2cJTwTpqExvxyn3wtoA",
  "key42": "44fYao4v67Yxskdk57Sdog4nWwmtRttc9xTM8szwrpHHD9AHbKAnsQYKRdjyE61c4j1PcQyuzL4nvKRNCyNBez5K",
  "key43": "3oF6P1XdPyCKVyQQ2912cqbWNfmxBLDpAf8S83Vqnq8QmDH2iKxt4Hs51w3aUxnSMQPyEatnbFshBmPcCaPamJ8V",
  "key44": "CwhzQoxWiDGaU5aSPyesNgfdu9QvmvzzTDb4gWR3GM9UrshfZjEWSGegmxVzNyDmwYn2KfqoeNMzfd1JwEaDL3b",
  "key45": "3GXV9ghHSqo73Ha95NSXXHHD34FwrMs1NhGkZBUBUqN2JMzBu2JoZqmSp7qC78nRB2B8FX4kob6okZPyyEPoupkn"
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
