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
    "3uyPnoPFWdjitmFdMR2oGN8wy7iiqvHSjWNWryL5BsQq8oMYrPLDpvvdqYp3MsNmqZEvZTTxVezrRE848BN9rbNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jSbS1fwr39euMDBKUASRSQb4F3jiBB5eiyDSSpEQKLqrSQMney1iotJEaiMbStMANTzv5Th9NkuBgi213Q2TfMq",
  "key1": "517aT3dQEZaxXW7v8TaKoJpZUD5y7UEgznHiEVM3epTQZPCoStYSoF2ooZuk6GCJhQVC5af2XCHJoMi4Kx7p4dHS",
  "key2": "2vhDUduy6zzerfWgzcDavxeJr6DoQf143U5X3G8PtCqQg5VsjfxmuoaSt8ULZocFXs1UEx6M1EYkg2uE6JsvUzS4",
  "key3": "4iaCHKcHVcsgrG8HuXBzNFQNhDofdouHi2jU9AesUTXzcMynVPq85PWJochsfhFoMtyCrZy6udVTT9wJYrmhvMfb",
  "key4": "3cTeaeqPBrDeX7d6Gw4CkrDeosdtsWgkLcwoYkEQjpLPQPjVfUZwdc32NX1xjB82qLMGRFRCANufjJq3ydqhM88e",
  "key5": "51ZpqyLQdvSXMnKpyJzNTB356iijc973T38MxCarQRsZcK4bJiQbGtNmyVjNwpDEPaqTD62HH81DRU5tBJHX51n7",
  "key6": "2pkj5NmUzKC73E7phtS86rjh2U6YWRZsZuCaEw6pttJPvGWb9dVkk3qPNTSQ76kmRboNe2XhT1H1SAvuK9YbUXZd",
  "key7": "4XkNTV43A9iBdykyQQ7rX7HopyGKsQ2ox52mh1pGUdUR9WXC5fsQ1SRyEZFtx32Las718nLihy6SUsPB4BQy5ZQp",
  "key8": "3aJksCMaAbjnezLQ3pYJfApdJQtczfekfHpmG4xmqxCeusSWibRLcPmwKekt2eK8gfSapKQiEpaR6tbX8THL1Uz1",
  "key9": "4Rs5YSbWafoPgVXoFXfy15ZgQhoiTMj3RFqYpovGik1pXigBSrbyvDiNTxj2mE2cR6M3C5AyUR3KDKDsivNTX9yR",
  "key10": "4r4tKiVL6MgWnXUgeyprxAnyT1WRjGeuYzqWx16NKzbgoUVVnED6unPWhd5mWy92ApujfsLD6iW3S9oHzGLnSLge",
  "key11": "QYeqA2EQtKawRC2vWjD5VvDC5iJ6DQpwUK1bW8nXmYFN2xcp9vBo2CKEkfbAb5gksZ3QMVtbG3bmAwpmnBh1pPb",
  "key12": "3P2riCsxmsB2B542zYSGfZKfU3vtZqocpjkxyhoUDf1FoiCJeUtWDuxRYTyUSBGupNDtuzQCB2md8UcKcrxnv1DJ",
  "key13": "29KdFhaahhTEqRwh4r2kYMtztZbPnynVubaCD9WEsiZdBTqCqdLCAsMxKNfmPoqG23ym7c6n7GxYzhCKCaereyia",
  "key14": "yA429gL2Agjnxv6Gurf27PshAHnc5PdaYLUDqwYLA2sxbHoe3qSYjbdsxgoQjoLQeNuri44P9Zsnmo2R4xiEqwD",
  "key15": "2wEVZJ7BzdP9PB1CRx4SVqX6qVuxbKP2QVLQ2nGebStkWKKDdfhzz44E49mMQk6HMPZGTfeap3FednMP3yzLTqca",
  "key16": "2guwp9ZNFcEtt8frCCUUsPRPY1zYV1EC2ZgGJA4pGdybemR8TrQNUYqXBH8Ni5jQ7Bt9gYuYZwSUMd35oji2RPVx",
  "key17": "5AdGVZ8o4u3338yGxbCiTmyo7nBkZ6upxeoHFxQLHFairkUgXZFmEcasAyLBgZ5VppeQE8kLT163qgmL6T6CEHTQ",
  "key18": "5Li5rgduSLrN9PGBSJiexnRWEgveptYAZi72S7FF2mhvpCZZvPzGnwG4dPdNmvqTzGm3uiJV6dLqpdjGmwTdfYgD",
  "key19": "4TL6hx8bq8rLbsbrrpm5ZGF3jWVnbE1vK5aj9Mbh69i5BcAFWVap1hfsKki4BuGz2JGeXbWRw1zoGyReJX5cBLEj",
  "key20": "4SBrWEdi4B6mTPHERVhF6Sp4UDqp6R7nXgdytPp1t2557ccTuMnw2AYebK8Y5JVnimifkhkdQwpKYC8KcqakkRcA",
  "key21": "4FoexasYxBfPQXYSoPP7mRZzs3ypyHMRpdDQWui1LANtEys7fu5hQFxmHwi3Fz2EeqNuZFERUbis4GZ3sTtQaqH3",
  "key22": "3JnYQWrRKPSJHxN8rFAuYfGh1THLH7bEqG9BVyhePcKL6ymKsudWvNCk7HgzsdK4hQ9XzhRSiSbrxrWuAfggBL4K",
  "key23": "5S7tLipzBg6yMqvoYXH6wqhzcWkYFEckwCdQaehvtPK8XtsFjb6a39gj3B1e1aTiD2QzxijnjgrFPN4zaaNPNpyB",
  "key24": "E7eDWtYfckCK4LZHL8VrJPHX1YPvxbihrDawhgYwHmPFoSbmUp82ji5uVfxX3pGim3dzbk26rQcCeXm7KoK7ek8",
  "key25": "3vRiu87M22BFhRy3KRCfmg8uAWLofLUKdvq8XLMfFcee5pPQAvcUaTLo4bg2sWwkLj1d9aHE81rVovhNbnK7Sqbm",
  "key26": "4gBekeBU1ZCNBJ5H22umQ2Sb67ZGYewD72iYmTXf4Wg21VTrpRBhWAzbMPCpptieMYp96e3VBLFKESokoNxGMBVz",
  "key27": "5RW8eTHEjASLVf7Xe1Rgpw4RsM2FongfwLoXcDvTjrf2Mxos7xXy4ZzkPy7GZFR6BkXNV6eu2rh6XiZWdA43KBQ9",
  "key28": "26R4ionGSBVq8NPkYAa1XNLwWkWMcPy3BaPhW6x7ADzUjmUScv3qP6MgFa9WQ9YyRoq2162LGcgeyx1BwXQAos76"
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
