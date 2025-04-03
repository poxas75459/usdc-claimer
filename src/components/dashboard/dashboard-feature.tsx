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
    "22wW8r9taeAjcfqz4X9qfK3znJDSCDxwdRSzzHsJGa8eKXrUBGSCTrmeCg7BQT4Y9QfHvhd61KHJrMwNWqLpFPWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k2pKuqhnXGAmvmS2dHMcQakeFiW2ij7Te6vFLPeGEab1Aonkkszeh49Bd54SuspfVe3xbMARjnW5PacXQHYht5Z",
  "key1": "5JmsyC74zqLrm4hLcLHhJxvaNJ4PZFuhRYQn5wCjnBmnPsFbd7NPakaZ5jcTmfUsWrbYVzqY5GQptrc5Xc6N46fL",
  "key2": "67VF1y5UHZhDzghP7h2yCAU6EBFFTda3DYRBDUGz7CjEtdGMr2qgsGCXND5Be3KHFEqkcK2hoQDdhaRYyKAj4SHY",
  "key3": "25th6wF5gQhSW1j8vFuUFo9TH9gUAj73og2sCMT9fkhLAc6JccoXqSDzuSCybXsVQZh4zSH4botWXTsYKi6SfUAJ",
  "key4": "36MaGJ3UnpzsWYt5Cji6RfZgirXiBBJnedtXNCx6e6RwDkypEGvngueV3K4AQtFp8Qtkfs5PhESQ1kCBqsHcWEXx",
  "key5": "5HUcrnWdbacfWbeAJNvoYjR3WNc2Q9DWdM7DCXeYq6ejRzsdf2xRLpKUw5m1zMrU4KA4AwfC1rnnw7vmcwUaMQpA",
  "key6": "jqugWMcMqrX81tU7vkRx1WbQqUTwEMBg91sN7swipEQsgSJREjaaM8KGMHfx3Gqbq9fZ1TDgetFJqJorjKRhTDZ",
  "key7": "4DqZaEYfbCd39cEN6BKeMWu5N3KifRR3FBWR379brr2ctXyG3oUsfX6UMBkBUYhsMJjuss3U9hGqDGFMfqSpiEnU",
  "key8": "61djMuXYbB3d16uPVGM7mZBwtiGT4NPierweu2xUqEd4zyxbm3qrqsSuhQnGSTbViingUneK9KbjB4SvhbG4QkE",
  "key9": "TquCC6Gj4q6CHoLTBC53J44f3G7DNh6fbSVctEx4JBuRUnRdCqL7CSTa3kwP1Jp8dGxAzbZSJEPQGgYMHgqZtEd",
  "key10": "3WM4LyhYSW9LqrmZpu16BsNKCXCWxhs7DQYUkRW4mQhissY85BXHzsmreETPjBJh23vXQhZkYTpUhUhKPEb2HqkX",
  "key11": "21iRGDpaM2g5R4FfS2rZwH1d9u6n9m6W9Pbc11R5fZvrrsTaZ2uwcmzdiYuPr9ZF4VHBhZkesP7JDhtN69Wt7L33",
  "key12": "3HKjEkDszTWNCicR1JNjLC1xhms2P1ewY9WcvsjKA62nwHqx31D7tDrxewqkmENgw5RaP5WfBDLgbR6LXXJv7gUE",
  "key13": "38EkSabuAHBSSWi9kNsybCgtVZcduCjqTknpyyzB6wPhbDJHvwupProcGTcQxNQGh39xZ9bdjUu4QGzRVDoGHs6G",
  "key14": "3HxmxsQ3TAs7VNuDmeqvHLVPeqXB19RnsBnDzuPcqjHgVneJBozYfkUusuWL1UGQWmNPcDprrPvcen9RKrysLYhw",
  "key15": "2wz8S3mxwBaz5J9NJSDnq5FL46yuUEfpbqkhYL4rJh4Fy4XS1PQ85JaPjGkYqHxBdbFksejmdkBxyVLB3eAcppDj",
  "key16": "2ZK9VDPkQ9wMgGLJB8gsfu2zDEt5pb9nV2rYnAbmU1PkeUcfbCpKJPX69Aokg9KcQf4EeuSbfbmMjTNwAsF6sH97",
  "key17": "uFCyFYVKMgFCAAUAg9GKsLGUPhNGEvkPucD7qVhbz82i8tXWz35yskL57WirbLikqzd5fS1fLSNzaia2LJfUenY",
  "key18": "4GsPZeXTJWw9HCua9ufx8VkoenH8Jz2ZJcGDqCsYfUz3cP1b8wfGgMMB7UPGLpmThEDb4zYs5BgbCBHhwPVgGdxm",
  "key19": "NWSC3dvZZm1zcb39GUURThq4gsX5eXZaFZc6otS8VxbSADMe424zvCKzAtKYgCsnWkTLRj3mNfmDzNPRGnVGWT3",
  "key20": "5tMSofoscwyTLzmLmeUmTuWbrZDQnZt8FjzAdLMmV5iXG3W6sBUVVVukn8FKGnrsWAAzioycn1VrUEP4gcCZ7BZ3",
  "key21": "3K365fWQFTgSPUt8dGU9PZ5nLTWMD8u6XhsCFGEvL1CeYAC25NZizcnwWyPizkm5LkH4v1AEZnsf8nAANVNdNGBp",
  "key22": "3hhq4XoL5JvqcmeyaDBiyJBTDtHH7Gk8TwMifo7ATBUNKJZjtKFbWyR8RW3MvxyFG6PPAMR8qV9winWVVPANTxe2",
  "key23": "3XKsUNB535GPSKkzpCM7aHqsLGNwEvvBDMbjrPB1faKWV7TAki6M5irxNWrjaUsEKWkYrNFiHdATze4f4ZYx8kD8",
  "key24": "kmBMmbjn29bUnzxcp5oB2jvWxTgMYzTTjvyCpFWoRomTcQDCZC8RpYWMjXCBdrt1rZwbKYGDRy4ckccD1VsZiPV",
  "key25": "2gfLw176Vx1moHNckiQqReijCrPfAepD295hVKoVvTHae3HkXT39hL7iGbBuzDGpMkDG2LQtLDm7zvrzE7vB4cC1",
  "key26": "5x341VRasBiAjq7kYrtNbZ1AREzecNEtXbiqxavDSWAcnBrv3ntwqqodiX2i7c7BXg9rdviXVLzRcQ4ZWBtYF3XQ",
  "key27": "2Z3WMBB4XmNaGkNBTU4rEVSfXC26WT7pHKE1qmUKmW1FhmdTaxX7DnqvsSKMGWWCbq8dNtFn6HKvzfrBo6X5dbh6",
  "key28": "3fYVALX5RFYwgb98tXMMzmBMoUiZWo6v7NSC1QVs4tFQRL667BUgQw7ASmyc5yRzyYSsoXjYyZGbjMm2qYwYyNmh",
  "key29": "48PmhV7zU7DiQHVW1zAcyGDX2i51du4CA8uboxsxii8yeFG2iZnJRa3fqv9AG8sKabN3gokXDyrYfTLPFLaFP3Be",
  "key30": "6118zLtQdGFQArSxabBF8yEB7F7Y81A59QyWbQAausLEdQ4hJiNbmc4dXF93B2eM9vLQtY95Vm59mhu3j2fs6McU",
  "key31": "5C9SqzHwkNyXZo67LMnaUrdur4xQKjsYtbRHxBEzacbkkZzTuxKPypYi8ZcN5cAgYN4Fxw1wjbqZLFdU5tWcVq9R",
  "key32": "cYtWeWVGVLghAW4SC6moXQoj78vLcx6xD34RTbbVxf1AwaHtjwkQzMPjVb343jCeZCGoJBvSPEsHYyKuz9wQg2w"
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
