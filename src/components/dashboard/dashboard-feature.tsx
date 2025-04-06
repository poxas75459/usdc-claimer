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
    "4996tbicoH4yHtd3De8WHGkDgxr15sMPTndWbthX8yKnyFEtUfznrgc3TB5kLqBAgWGNF5FYi3rVrjYkqZ43ecQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjsyDsY1AYrs7u3nL5WbuHbmzDa7hCaPBRJUb4n6ZftQKz7JA8YQVtiVvB7ekvBovHuQnmcCRC8ZnXS41sJhAEQ",
  "key1": "4Qdf2TvN5qfANQ6DtkwVoQm8Y3Csoggbtqmr6x2PC2SLdJpsNkU9SZ2c5gfrYfo5V7hPq4u3AaqTehQasS8MTP2L",
  "key2": "kUHTMfTksA8KefQqZQ2SLN9wPRsBUZD8TRoYyAmkwMzyAauBYupjVuzurcjGNNCuiFLkUqNAcs6PWGBTUAEMJqP",
  "key3": "3YfEZSZ2qm48i14M8NZzBjHfTF4XB1cQwmpTYvDwHUM2RJRec3rAerLSq1UrZT6LRFsyFkGxfQgQZwQ4X52YWnV6",
  "key4": "2p4QywXK1oGntg5TQ223meAcDpbPgSaNqaeat7Wa8m5tfxWee91HEiiLbb9TXj6FNT6f62Uu8ddj8SEcmtg28vTX",
  "key5": "3oBbXBdLuKE63CTSDGmQsYV6c2BAZVuNQEQgKAuMKv5uWF8wuwecaokfiVyQUWc4ooiL96GWTypDMDCfbGZiTRpz",
  "key6": "3vpfFt7zb24qZFMgkrrjvmmciaRqEJNaekTbkXP1HBjNsDn5cpDKjHg8Ey3dwRPAE9TAUrF9XaVrd6ykZRg1vfkZ",
  "key7": "5F4ttXP3yGSriRMwxtU3o4k1MpWtrgF2Fg7fkWZxtaVa22QNSAjE64doDqAyCvY8Hp2RWTpsz4cyESUJDR9FHRdh",
  "key8": "2rdXGQUnGEcEm7mhXiwSgMyt5rmwCSid1Rxtd7c9FTvkW5BpkSnesSAdGF7sXRKwKdDNQ4Ut341cvz8eXP6mahCw",
  "key9": "4QZydGzL6kogV535ZfuQFxDJZf3cmi9t6uBLH2RfRL8uhdKaDTPzNm6E1wjvewx4KWjXmmqpYVF2Ec9AN48dF8at",
  "key10": "66hvocz8uFJyktmzEwQZ4q9bhEdkLCDzKaqypMmHXq1EMq4JppXQPt8Za8nik8ZRFPt6L5Vah3jd7nxKwkp72bz3",
  "key11": "4cd3xVBu35a7WDEGxX7DJ65RduC5GBaUuDB2xQsYBEyHT1USWL4Jjc7KdNAeho3QnYf32ucFhxSE4DqAHjv3m1EW",
  "key12": "F6DsQ7TDnrV2yoXBtBqLFwyTgcKg3MBXvaY9vLiWSLiCnvN5KPuYitFNCWX6nN6yQQJ3mFfkGovwMZRTrkiCjGJ",
  "key13": "k8uDHem7qnSAXp43om1SzGnD8Z8L5hSmYq6LFzpusMKTUSj11fFyE6AmExZm7s6mDBcCVE5UuFF31EGscDHKDsJ",
  "key14": "b7vnDKxxmuRFwp7KrXqsHyTWLZsBNgyAjr5ARdTDdfTnKmxQDKtBnMMAR81QhV4NG8GJkubaBpRGmawC5opSzFn",
  "key15": "myZMVx2aVPUfAzNQFUfTdZKrrtXfcX7MohWV7uF9aM53MnjJW6UCV34RKwpAP2hwDJmYKATZ6BeD7WoV15HDFkJ",
  "key16": "5fbmLa9vHY8MPaLhBK2Y8JKhZ9yv4BmcJmaiCLx8aTZMpCrEHnhWKGgAXjWdi4eTNM7GfRerutcbvEt4hjms4ScY",
  "key17": "2E6yPqJ8U6MCvJvy17NwCJaX3S2u1vUxczhLGDAc3wwavzrqBFU1dtBB4nMXzNEQFQQFeywm7nY1sYSYGX6WVCaY",
  "key18": "4iTdWr3CQMSLx3kWZYcZBgJ5TuFL1zvuxD6nMxdqXNc6rzJkabnpbFBPjgoYhsf4wr9Di4S6yLGk9tr56ifhC55p",
  "key19": "28UfK6i56CQrDL79J7YUCJNfPbGkadb63YiuDJTNE1Wm3SgXZQJfmmaQM5UN67rsXufQmkRCFhz1tmsmsJvij3nC",
  "key20": "2fwJALeJyemMvpnKxhzfNihcFUB9uPBsAvsjiVzcujQoEPji6nWzsD1m8UUUZ5RSATsHcKnz1XbSbRG1NTx2cNZu",
  "key21": "3bAEgGJ6rZ7NnuatKqep5rHSDDBaFedP5MXKfvCVkqscMBL7s64KBoZstifmC9WqkpCpt8Sek6ueHCRq6q34Zv6r",
  "key22": "4gtym5jPARHgQGXjSw9m2n5pNcBjVieEhmZBMTK7sjnmXFRygXYymkfe3gFUgbBJeX75bsPWLzs2oGqWKJmoNJsU",
  "key23": "Jqc5krMYrZ3oy8auN79Kx2XpUH6QWihURV5yGd5hg7grBDGEfJnQHFz581HcpRtkyEfCawwJtPJ6cqU6uJGsumK",
  "key24": "2BwD8tWkK3SMTMLxB3p52P76wQEsqXSTKVpa2WaLWfpBkqYSXQyCC2Trr71A3VzY5nidFsYzSqJq8iFH82nbvifF",
  "key25": "5K2rfwLTUtbYsSbUse3DT7f2ENuL92gFJy7P2P7zfp1ehqpqSe6kSwGUAg6xuBvNvT4cXnv3E6f97RkSYK7ipuCP",
  "key26": "DayfHoZ9wbxySMtQ7sHkiRVpNiqGHKFwMfhsjhcXYoKTRxFGkSz4sBvVG9qkd8TB9S29qZCTfrXsKvxHSJMLhFj",
  "key27": "3LdTmwrQrEodFFtxK1C9w65xXd1e7VJoryrHgy2A2Rhyw5VCFaFiVu7q9yQVnQRAfLaSkxUxiDvMabbx26sNk838",
  "key28": "2ARsCMKzWSn41xHYE3byP2BHCYt7nt4u8QSyy3aAdN1cavTpgSbUhLjqYP9vubryyNUmDPNKeihhPPTLsFbV7GMr",
  "key29": "5Chh9WBY4EY1Xu2Jh7gFHYwtq6nLxS2SNq7b2rNoJwWeYav9myj3N5Anhcr9dLUqC8pQeoysEzPg1rMHrsoRqzy4",
  "key30": "3ZbXyw7CXmdLXLq57L27rrb8M7nentJeH49E55fnTAkW4THLHwYNhXQ3crptQqfJmeqrVWpPeMgxkJhgTgPhaw9q",
  "key31": "4SQKbS4CyBkhgN2Uo5YKDiXqHWDRTyJy3xWUrgZHEp424JnTquuHLqfGgh6SQkBPe6rK9hYVewPKASuTf11VutTq",
  "key32": "4QLSSD6H3EXxRBMRBJ9rDyG92AJkTSuYwZkMNZ9efFwhVAL3EnhGXtBw9pH9xKsJqPbU5LoS5KCJuRBfBJ22CeaH",
  "key33": "4i8tsDhHMqQzAeWj418TXrJgc2TpWCBzCMnHHQjN45S6NMSa37htaampZowT7mzdd5zbwNQ4Ntx16V2q7GMBwgiP",
  "key34": "5c7ciWWKRt4WVJqeDAA8WCr6oNNFiV17oPDeogb9ktYytJsimLYkJuPBFa2YA4a2wTrJWAT1ehZWKTC1KR68AytA",
  "key35": "bBRgbWuhyYMencCp6TDuCoLu7rbGAkM7gxpva3ydgMtp6pBc9HEcy2N8187qwzQBzYJBeSrC4rZZZTq3y5MXU8A",
  "key36": "3Ybadarsh8Hu8mwpdX5NFepvuGdJPDNt71bwaJ9vKWuyxegVJTzybJuJ4rTxe6KyncnUiAu5YURwXWdpRXuc79JN",
  "key37": "TpTgPQ7DxkBa3zuiRK43LyVdATGAmgFD1KyVoWjx6ERBUfKbbL7NLKtLVmXJwDEEc6JiybPFMBb6U4zqZNACpUB",
  "key38": "Feq1bFzJ5g129ZxbfzvtT2BtZwzonhgRY9qUzvrjRfyyboWt1g8D3jAwTCaW7To5GpnGWNibU5DMWiigPgiB4BN",
  "key39": "3WNC1fj2zy82bV8JVcnZCgYKD1ekqnw4qzL3Cmomc5qnRjfGnFZSAcT5iKksC883kjjmSpEJYGKmeKkAmDYace1s",
  "key40": "62SSNphSaan9AnzFWNtSdcndL8A8r5DhtyNQsyyNoH6TGpbd8JdwVxZQvjsgy4RxVfyF2U36qgKkrbW7P9Cua34D",
  "key41": "3JeVdAiEz2v5mkX86bnv42drWgEnTF7NipMzedPg5st93JCAKR8K5Xo5vVv7e3edHgFUcxpDZ2saws6HAB1YMVF8",
  "key42": "5f4RkueLJYhRtDt8mHBXvoSDBLEqVhxVHUr1rc1ddwE5DYMxxX4oGUrBb9PxtszJbk4TH73FmKhzVGiRauLBpq5h",
  "key43": "L4GZHh4TT97h7zoZ1wkjs2RdoZczX5cMqagdwirbaq8Zt3G8qTQ43g2aBLPJqQSpXDJuszZHoDDPQUYHhnc7scj",
  "key44": "RZFdidmLck6zVrWLk5JRhCKFzY9rVzewi4arsYj3yxjEhNfuV8Px7YKCcNt84uZrqWu8bTL1xXm4XQLd8fheLRG",
  "key45": "3fKCqsdhN8XkmyTKFSYKX9upU44cc4RxgRyEFLocGGFcZh4g9w7XJzLqYzsvANYkg45TZZrbvKd9X45oT8tTdVkt",
  "key46": "46UgjGm5GVUUXYMZWRKbtKw24TGVsV6gtQ37dBAi8WYJPFWuhgTXwV5Gwyof4mQwFCwZPSvJHvnNKNePKgjN5ihq",
  "key47": "oA2kwHP5arRCpX1J8iarpxdMCNk4rEbVsXtw6jG2zMu78dp7cXVJwiNvcX1bKDNFmnHosWJ2nLWNszdnZgTFGFU",
  "key48": "2snK9FD2zAGA4ukAFnkaC8WHuFsmtKnH8MxANy3FTWmTbwny77XJgLwjaToEPhKY3jMfMqYoeVEKkcNKye1Akg3N",
  "key49": "2nYoE4zjawhjRzfjDCSPmD7gcequrWwNPcYDaNPUNTpCjByFJffeoLdGq4KsogqG4RtugJiHXPoPee6rstXBkJnT"
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
