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
    "3ccqtabchcFaYeYqc2yNxvSVUWTVj9ExSfx6NKhYt4VpXy5Z55LZegXtc4ebW3KGC3LeQGyt2NsJwvcVrsRMajJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aWG56cqJHgoxwbJRrGdWA2HkQHQ8oaSUx4PNw36kTdxcLK41Z7nvDFbN5bGB1jhqVeQodepvMBS5XDRN7um4q1u",
  "key1": "3JYGmjCPnRKDC5p7hak1UZJtT4DQaNxscT9DKiYpdRX1YdVca8N28QjwVkrcmTfFYbcW89dtygva2VZ746V4ARCJ",
  "key2": "N8GWdugUExad4VHbawRyTNkxMbpSScLQANzMvVGjoSFCPQa2HNER9kQY3nG8mvvM3AV4mc9EAYkeKt4LDeL6LjB",
  "key3": "ZcMHDuNqJzdP3ZoVAjTtQ2K2RbeqRhZvEAZYRLQw7SDcY25QtFmuVustV6D9tu2FZt8AomS1HpV4vAddvmUK7Zo",
  "key4": "7mphfSEM3Wov74uvLvkBbQzr3LcNEfMR616GqQ6bhdNM8VsEQHEDEvDmJCj7vo55zhQ12cKyrGXGUGTNzfB3KZV",
  "key5": "4GaJLLFcJBywLLSnyFJ3xMcW1QYzH9Aft6PvU8hwrmdsddu6s8h5Buqje4mUrqoYS3CmUXSfat9j4g14QfYcsNds",
  "key6": "39ut1217192ALxdsy5a9w3rNfK7iVQqP3gB9kXLYJPdKZRDAFT7VULkBmVzX3kbBprrqiHgMESZ25kLw7XbB6YLg",
  "key7": "56A1nfHvkAycN9ZfcxqRLoHCGXiUxTbGzVHr2MCk5SwNpLUHt4KvyHvs3ZiAHqMHmKnan8vksSPNePKSBHngzzpg",
  "key8": "39XgrkBryAe41GxD59RdEULAVCX1kh4VD6v1cYhGarzjfgk3NhtrnA7bcqKpBAMpDNtuE8vJmoft1jA5c8hDCWbe",
  "key9": "3cJBWEuwaWipTw3NKdPybQanqcbG4qaNAh3BsMscKZctUQj5rRhHMZWeULRhGZ7rXUZVo5sqgckQ9rkNiQ5G89kp",
  "key10": "TPx1dpTQaWEwzD6s4ESHtHQd2TUSzLRRwqFJthL6thCAJtgRqvXaLw1csaoXiWzGDMCk2udyBwG3j3Uk1R2VLjp",
  "key11": "3aSpQDT62nWouRfHdV3bxHNanSDUiWgkfiduCJ1YzvduywqNq1ehcnEPdXaq3vKJd7rPgsYBhJyeP15MSTgFG9jw",
  "key12": "382pXVZ9Cx9KxmWhScRnEP1HngFwRZ4uVTGyHrybqd5ZNKoQ6cDD5wqhDekFbMKHQidLNcLAzCZbmX6g1JyBuP9w",
  "key13": "4Cm5TuYuaqgWCGh948KHHzvJN3TNx6GYMzixeJ5sJZ7dQPRJnRKu2tSdR9bP3gbHVrxiwQ9H8CkmTDkB9LHPUBJ2",
  "key14": "75h4q45ny39SDENsAKu9ZQ5d9kw2jsu9p2DMkmJgNkiGUjHprtKwm7xT7b2Y9ZFc9o9fcP4MGtigNuDHgzER9FZ",
  "key15": "2wkoUjufBFv6FictLGUnXTUnt1PopE4oxxp9EyKnNPLKCS5kpo9fGxazpLQkqbwhG9JMfC7Nf5BbnVhCC6Q9E5DY",
  "key16": "5Eh5nHLPahwe2S9GeMfieZbetmg9oJGi17UDQE6ZqHcGkKJBv2gJsqo2o3hPcNMGVbYTJyDShxKBc9FySyzYo6by",
  "key17": "B7DynFUWucai44fYp6wB4Dvifhmt3aSkp9LhgaMyW2DLPKPm7WYcMRMxM4XpUKWQtA72Nkeke85XAowv1zijMy9",
  "key18": "3gUworLjC2ae962BtABMN8FxDRUX65bZHGYUVNQH8qG67Wg5RTmwp9T52Q2urZcyxGyRj88scfE5mHBsg322dtHW",
  "key19": "2QHkvzcMFyASV42dncsVZgz2vHngs96Sdoybe9dFr6eVc29Vmm2sPCgEW9qa5x8ZNnC6hmbHXcjf4qenqNigSJN6",
  "key20": "28f9VMC1BNPmNioEQMz77SdHB4JFTEZ9jagYUpKzxNarfiuNJ1TpkVxG4jmFiuWE6pGo3kfWaRz8cRawpgLcSeeC",
  "key21": "5kk9LD2a68mtQ4b1v9zQnMZDWpF9KZ49MPxFSq1peeAtS3QyHyuD32wGgfe19ZeVVFVMSaNoPdvxe2QuB7DeSz2q",
  "key22": "4NxERvixix5Uz6Uc6nccdaUpSvM79U6f9dNWvFnjwXCDs3fHmAPaeotufDEJ1efWGfVwW9dgDUV5M1jjPeXik1ft",
  "key23": "558EFtCbgRvKHS1tYDtiCcDseM3V5jg9Lftj3P2oWa69TJbmRWrsUWoTWntwnijVqFASUBM4anRGjVeQMpnAJXns",
  "key24": "3KdcCGLHQjoMmu6BsujEPJLPz27w7pDyXUp32cVP52D612f19vTATuCQaKjwhHAGr4XC1xsrMutPRk3GmeBm1nFp",
  "key25": "3Q8DzMTnmo8xsLykusB1bnVk3uVpAHXbBySKqqe9Cb6meSVg7hUpBK2CLCrUsPqxD4SgXXiyE3M7dwLCVNeNNPbg",
  "key26": "2pAj5tTzYkeBVBA5UdV3QWP1cgT3afmgDM5JZZqoGGr2wdJr37SmP4X8XZzvaf5b3q6geRoZaRAVg5B35j6xrrAf",
  "key27": "5x94BciFssG57YNtvQLXct8D4kw99JzW6ioW9DyTfyTqYpUijqEwpxBMQAaNvCVRNV4Ypxefc8YuzxBkeXxE1tYz",
  "key28": "5MecJktfs7RTLpKPLCn6wAZzEXRBAGunNqUM4TBAFAitr8oxzDa1n9BqRSg4VVWVkPBsDu3vteH3mmqBMh7aSP5Z"
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
