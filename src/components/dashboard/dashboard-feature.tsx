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
    "2hAtAZW7HNMiskB65PrzhQaytRjAvYW2hsfqWuJpSveeANWUFyEbVV43AULkpkoqQskvryQSVH8ExH76UTPPJuPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wdfj3VVXhjJLYiin3QgBVMQqXsNQ8xjqRQyk78T1TRoX5VVyxtiBVhGMUZyZEb3JJLQ6pwt2jsUWHeQ39YGxZsL",
  "key1": "4yks5MJWytf68urEyesc1Xf6qrXxgZBC171Mz3F98erDTLFhs7XNtnTZZRQGrMH3SnHap7BAvh8MaVaWDucxanji",
  "key2": "W2iTpQh1L1zPqQXJWDVETYbjGNbUWcwEtCV1wsCrYfybcNUfZfbuNTSugZ6S5hvPwU1LW9achDeAWeLdbVAfmpJ",
  "key3": "tZHV2uyPnczUxbaYpi9Gus6NPocp3c5Epfo9VAPmM9TDLg9dwhVhc9kW3oSQp3KsNBqAxM4khQNs7deNiiA1aMQ",
  "key4": "4Qa2wiMzmYE94du2fz7Nf34E13W5oUAUY9RYnwUekSSFcs9NGJzBCN6QcKdiRsiGE9aqKyd83LLAQZNXmuwUyFmp",
  "key5": "S1PFDFZRfybwVC7GtTXBgCaRi2J6fzMwz93qNBZVZnJdVu9famoJrbE8YVU5iB1Ebfx1USNbWzuAmbDwQzQw7uY",
  "key6": "2kcE4gqogFkSLEHtwuvGL6CytvwacZB7tYywsFSTbTkRiWcJKY66KTJjZCLhtUxmaZpeSKWt4NWFASi1crKnmDdb",
  "key7": "5DekSiMK3LqwVkLshx8zKNK1wogBdQYXvpCzB2NzVFFabZ4WDzSTjgVx6fL71JWVQnjUwBpuEWBrETs9XNnABMUW",
  "key8": "4rBqwDLvFDJBP7sF9p35V9Fd3pbMge9q1TuDpZPNdkUG13w2GTozU8ZtSMxDvvfbPLFswvqzdF6vjhkdEtbSYTt",
  "key9": "5Qwhc3hHqnmN95AmKnsz6pq8MZ2BZmHNpJU2EpUxKot8JCaG3bB5sZyYw31bbDgoueADHCSWQuhGWXRVhX9ZGc5L",
  "key10": "5xwUab6W6scA9kR2pnRFoaKzejYyJmVZK2tzutLMFZpG1vbPWhCxsKFciwyvD8Chv7YqbkKzFnCSBcx7yeSNWcF3",
  "key11": "4RfSc3eaFZ2tbpcc28X17AYKQBLSwhkEgCiKEd2tbWd6TWBZuW8dmXLtpQmcN1oovWJ6GkC5MtP3dW2Y9kr3tM5V",
  "key12": "3cbqnBGUPtTyxj9JwqGmzZbf48cog2xbLLALr34m7TiW6MNqc6s2ZuTapvtKxYkZSWuSeGRbL1aEZMhdwckrZS4Y",
  "key13": "2NFNRbKSQMuFsFsoKaAmLK8rbhrCQ2voM4CSAQ22T8pMC12noMRBECqkm8L9Bih1wHRRDcDJQcMWA6imgika5WFk",
  "key14": "5CbbaPzV6QuofnTLaR8SUhHo2AkX4gyxcXNPmgX3S3VfGhfDRZdC8qUbMUnkVz1bo2S4VGLVfijgtAxabbGbc5kd",
  "key15": "57UrDKNRg96cXZQ1Nuoj1R4HePf31L2MEWsHui6eZy8oZegh82otUJLYCRgwhFrPRWMCGHJXyBtSKWqeqoLfqqw",
  "key16": "3dt96RETeadmVUj1n2EsPRcqYWHMr4HB4qp5aoDPp1NSEq23XiivUSs23duJgoXmkvLTfpRbEKvzKbrT9aTE1jnu",
  "key17": "4cXKBhucVdQCkbQimwnXCSqWvsPS2iYDe37BLZ1fE3tMjZvq2cx3EKkcyet9qUrP2sbfswDauwpQjQUJTNMN11XG",
  "key18": "3Ujj6Nm5CFn7SgdmBKDMVFWHg98bhrDtCKwr5J3J9NRe59tzPyJ4Zfx7upBoM2kPGX95xcwqqyjxUJqTdferWbMA",
  "key19": "2NQJzrswbBTi8KxLpv8fxdPgLkJR7f2D6obQuSxYneidU5t8zpz4h5A3Ztkyt65uB1Cp9mR4YYA4AyjLDny8fzH5",
  "key20": "23qya6rWTfSGNjUiozQcEzNHzXHpZHyTzHTBzomwUux3gHYcBJN1hT8BgbHNjgXV3WmDuKPzsYt65W2AYD77GvoP",
  "key21": "4p83HrMqWHdtBQu2Gn33fpcrqNCsQ9WbaJhMxhnNhcFcUZAir1AyCkqLmDjFRcxSYtnAtigtL4p12ZGxYpDkSTdb",
  "key22": "4fqu41TidaTwvJ6mhUKPckA49ZiB1b9NojJPnB5AdkCunhiUMrGktDBF3TBK9KVRxMYUsYTz3uMkDohwPmjN8zNV",
  "key23": "4RPPRUzhAUyE2ixqaPBhGc2iqW1Ym6sP7tcFgUQ9CkV7dLeudG5XRacFkLx46YfLb3Adbh2LsLJ9SguYzxuM28Yc",
  "key24": "2zzWXn1PHHVBXVkhm1RPGgfnQSygUoFYzUZ5vxeibdFrt8fJuqKdicivCnpEc5Md6TLVcfsKXEbN2Yx8EQouaiyu",
  "key25": "utjRTzfEmEK1SNnM399wCNPZ7JzwGfV1EB7ZnYiC95Ktw9vmR7d9RX2uf8GszL9Aw4NzhPg9yYdetEvq43GEV9e",
  "key26": "4G2m4YaxJ6L1uSnxvqzPVi8mFcxeqUCKMRKBFGEvTomDusZ3fGNR6sKRWwWMkDkKLiXDbgNqzhsvcpWNRrKyeLNR",
  "key27": "QcPU2HLE7QShuDdXtPN1GnanExk2qKtedCcZYU6BtQQ1wWhqKgu19KRy6BYreb4K8oEFqfCB3WHFV9nniY9cCyv",
  "key28": "3SVVCpu7cSnr97NZmqq3V3uaUDbzXY7cNxx8xqxtFEiaXFNUmbJuudCXKQnqPLSra4niMUF9T41uq1H6Auiu6b8D",
  "key29": "5XzV9jqBFcTV98kZ2bNLP9H2nJk2JkEbek2BMvxj4tvhAX9B6KFHNtPNrZqjgRWfJSs7iSsXBaYZZCYvFjCsHacF",
  "key30": "3aPpGhDPEUfe2qoh58k7vrWAzzXNiXHFpXNfCddwsgn2ADcAjVgBHuRq1F63rxPY1Vap27EVWgGgEp3b5Q2QQfzA",
  "key31": "j7b7nFD3Km8hoYz2Tt4pEQ7f5iwGx4Xk2jeZWYKgZCE1psJwVAoK8iTRpNaE7PoZiF4nfufHQSwYL61syo1c7bR",
  "key32": "J4c4XrFtkbcVJ2X1XJdR8J5hkbQvahL6YDXRxZHVtiM7iqYfw6uAYyY2F4LXARMemJST8z9FMwP336UmQc7uiLJ",
  "key33": "41tiKGCFgwENw2SpTmS7R8qNZA51JssXYXRTd2b9tmJV1FmXMPXDXk94dvRSZvrScMgfFjHMZdcKd2w1Qjj5zLkb",
  "key34": "44Ff9y6NvxH8TdURaPrjzBQuczMCHBL3PYLK3gmU58nt9qwiqF2vjmMyQ2xXEPtyCczc35gHQ9jJrjmrSQ1Dzs4t",
  "key35": "5kQG3FcYXuU4pxR7Y4Xf9oifv8zMZ2VFzArjMvBEP3c6MZaVzLADgWTZJduFXkpVkg55aSkTHvH71by87x4SkdPn",
  "key36": "384iWk9oShC2XRSRJAhLRvjrdVHfuqfq3GrcY5Nb3TrgZsfNkh7YKQ1EjRVYpfMFonxjWP8Vhn3RwCK9dMw2TwfQ",
  "key37": "5eWU6s6XNT77UviHYNZpwK3KpvMzrYXVwj5EGNAwzgN19iui2hpCz7AfWFnfQUEPKNtKziVKx7mXguU1nsCBQeo",
  "key38": "2rvW8J3kE1t84sQuNsCcviZeYKdWtDDmMBVE5fdnU1rk7Kgvxhtp2adBSoP6xE5quY1DKvxH7oX4NNf4NMUUfTbH",
  "key39": "4PmbYuDwna9yfsSbYyJhHihJ44UDbxG5wZctM1oKiw2ZQKbK3tiUtF3FLnLx8MPnUqWNdQCsVJH7iMUZMrX4Bozg"
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
