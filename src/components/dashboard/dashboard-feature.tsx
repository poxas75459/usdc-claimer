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
    "3DiacKSzGQVtHvRUeqyvrzZCWXF5FhrHTCtwkftCsrjGVUj7XQeKZmdoYLQCgcBY2zY5wUWTAfyRS2Lhy5h3XwEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mKPMsrsY4Sygz8fMrvLT5xvrVEjj6txAAuxJzLnE7Svp5VMhksMXxPr8cJU3yc67ER6PhwDMpQQkLw6sAVkYKa6",
  "key1": "57vvJ4Es6tMmKjvArgnBrD5VhCeS6q44peSJ9s2hjPaoS8jvd1bXGptXKNuXG6Kmhhy6XcSMLmotFdPFq6CXRRJY",
  "key2": "2qPffaqzr9vB34TVkY2HcQVtw4pBtnNDWyKE8tw4xm5Pxqeu8D8pmRZAETGF82NaycrBTmGNUgaM58gQvtHg4CQz",
  "key3": "4aCNaYF9pBbZdaFDEedgqANAS5D68xdXrZZXCXktmvjiBqPsHLZsbzxDBrrt6euvUqtaekUpPwU7t2W4pgsboehL",
  "key4": "3Lo4HcCq7m1DpFE6HpopV4w497sZwNrt7TAJcKwc55PLSB9JzhdohLJhxKTiSx6Luz2tFNFsJXRztLKetjbRHgFM",
  "key5": "2wXLWkLQECCP49KaJjBhMquzLM7bkixSHUg88qWpuXqAWs6Kc7MpnX4eYgrRgMTQ3qEj1Yi22u7nwutyuhG5Lgzz",
  "key6": "22bt6kW7ZjVwkFZTMCyNnEHaSkMK8bJf3Tn8uKUX8Q5WLFKSSuygKGLmV6QfnNwJHN45BSxi59pRebFoH4aFkDn3",
  "key7": "TeVkwVezKwA76Y8c94nz8nFqurN9FhDKcju8fe3NuoYxoniS6ziuCLdmC4LMeakQCARnCc6Xu3dXTb9SkhDgv8H",
  "key8": "373zrPozc1UDMus9iWJZCHCXhXwCSVszLnNixmQZpopyUq3KFCCdK6ak5PoLQw2NuS7LFkYS95aE6MdpJfRT9NeM",
  "key9": "TJ2AUmxJMATrKVWeX9hSUBXgX35WnZhzJaUD8w2BWzD4k2H8o6ev1Xim2scAFkBMgrHDtCKqMQ93ygLGaqp7BAk",
  "key10": "29g4AHng22hT7PcwKADCK6jouySZUHYLx2yVyzZg9xC1o58bsUrBu2k843kXkQsXpL3X6V4httHxxVKWW21YBvNS",
  "key11": "UFk1fz587gQqt4BfnMBFoLdbMELrC3qR6jVwwh6keBARmhQVoHQRadCffiiwUTWNbg5zPNLzQPUowMtYxKy6NVb",
  "key12": "s1VKwVDTdySu1RiaW9R6jqZs7uYidHDA4b9eYnV3txJdBBJUeb9sNrnyV98NkRoAuTjaVFMrbkNC2t9K9BxwM9k",
  "key13": "2dwWyn5o5zZqgQe3XK5CTMyzE4wj3Q6VDYxRgm2ZVR4HyQ9yQzYM8rUs53n248TwcVsVDCB41DE6cZtUT2WbqSbX",
  "key14": "2ZY4SB5wkSR4BU3CRG1P12YoVDpzuLuhwwVnKVvU5SRyxegM28Bw12iXvF1HKivC9hPibe8Sk81jATjmk3v5pkdX",
  "key15": "43nqsDjZPzYbWh1R1bJL8mMGsekfnmuBhWn4MEsDpbSfjMxNHL8odwDcDULjnxUqr1ttHyvxTMmjusPsMcu26oay",
  "key16": "3pr991ojKjDP3ceDVCxAysKo9w4WiEuAfZRZSK8KA1WixLdceGh1VqKpVTK4QTQoTqUZA4dLH2gKJsHAjAb6vUvc",
  "key17": "GfxDFrkQXFffJdVp1qhKbYWLzE3nbUTyFZFXn4C5QVGPYMViw2mo1EQz6K3dng5YYVfxgcxF5UwwypgRMXZobhW",
  "key18": "5AvT6iTEv6xR3VotRJHNTQ2AXH5JbMurAfApAuR5WPzWRHK6rqwzyGTxwDEmQ5TiENsJeckVqeU8wQzewnEhJdbF",
  "key19": "5a6VgFNtgfqXwqgfwJdJ555ExPLARxxqb8iDXBCjtq2WBFbnmPDYuJsrHcCiwm7DSLBZD8mxufpn5v82rw1qxuxv",
  "key20": "3Ddn1apYpTTwQkN4hP92fBNWe3auAimFVDJAM9X3qd7nHSxcECEa8hvSnUHXgNq7buEp2ubg1j9wL3C342xaLyUh",
  "key21": "5pKXNcGp3MF6TeDaDoav1BKp3VsFFrfF5FYYVveA3fu3DJ7cNGAHNhb7HGqzt1ThWqrQE4uFaSF2g75hyFef4H5A",
  "key22": "KWhP4RZ9r4QWxEraXeLUy7A8fraa8mV6By46F1caaHfdKiidVK3GVgjPrjRGrFYEHjSXMxwnbxVDqFRGB9dVzRb",
  "key23": "33tZo3RR7fWKdmPWgg52zZS1QErHp5oNTguV8EZ1m45qvfrZHvw5D1HxS6tC2P8cYJnipA1xAKxXnwU9SiWZKBqu",
  "key24": "2n8BJCygXfNYyeJQfggKuVyq6m8BHw1nujesymUuwCEsBmwayh3yhuLtMHgC8cbJz7wUT7ai9gusvqmv8tPvwsne",
  "key25": "a39eP5cF96zbUxKp6U1eaL51ischeBZbg2i2jLFd7v6KREj3PtYL3b5RCrYUud2xjmrzFbwkLnT8ZcPLongzHpR",
  "key26": "3jaFhXPCf66ftmTDQV8W9xYP5bGskzwvpsUkjN3hhFs6PnXGMUVg4LA8snCDyT1h4DtvHNboRctW9TQkXpFMR1Yz",
  "key27": "tkmJA9EVYCJEGhriBBSvgDBu4Kg9wmQbwhFEYKopBiN2Hoip5arZK7kNwpEGbRg2GtELC4UFzcGW6EVvcjrfWPJ",
  "key28": "5KqPWtqntPJHVRMUoK9fp5mzg3AfuThkqmqRiuacufDzLK89Q4dXDKfoufmMtgRDbGLjV11bRNA25BRNecR9Sm1Z",
  "key29": "3sha9BPw1qNkxMd8gjGbWTuyWup8Rbee4eb2hcvGE8Ut7NtQaZv9sMeLANnuJjLVpjZ7UKTkV1t7Wonn6hb96JV7",
  "key30": "2XZepcG1mVPWTd8SadbWbVaUfBcx4rbHZ1LTMb6T7pQiT5xjDrPT6R2u5qYPriUKLfQbRACi62aNJsExLUbPV2jk",
  "key31": "5u4HZaJJryYzKVNBczPcPiCLoxTVgztu8W93cett4ixCqMr2cHYbomMXs9Vk3BSFUyvJwoke9whWS4szGpVXJPUj",
  "key32": "5nAmC8A3xPHrTM4w7am4Yg9eHzjUMqJfRdE6gbsgA6s1a3MpDNtb4gYbqMpT5DRvtpEppVqH6ghp8rZS4fyLevuV",
  "key33": "4mMXnobsmv1CAcQRz7b9Hu9JTtKp8GdhyWv4kwnjqcXbd3pC6ke8wJKzACk9iz7yTZjM5dXFHQ7PEPu38wer512o",
  "key34": "4QvbTBoQVmjEL7N4Ygpa7uGGS9S1tBYE26NoHkPra2du164RoYakC32sTwUtZbCtXSSokTNWiQsHmhBALBonksMx",
  "key35": "54dxJ7hGHhyQMbN8ng8pzu2Wn1CwkisHuu1aGbvoJhRp86Ap968VCrfdtyVVn6GXHQAY9p2oBiqqfhHRrpq6gXtz",
  "key36": "351WEuF8UHbZE6tWuDUWQijcTmY7ZCaNtueowGkTS9AG8bPrg8d4qTuRZ9zozoWiNZXq8tpmA8CBvG4DCfnUHKoD",
  "key37": "5JFu3TtdYvEiAgfdqkUuts68CCovNdyM3192RUkv5xGhADPVs1Hq8CpkeytKuRmfVwSu1jVCvKSbmHzjnVezB9Nr",
  "key38": "wcMYGeSzrq9qCYBuHmfQuF8wBdqweEsnciZzKb8teeKqGL476VszkK3mHPGgESjivvbzhV3AzvZ71cGefVbMFuF",
  "key39": "3rdCbQUoMVp6CKfzpnuH6TMRTKRR7EBTS42T65HN5FmJWNLwoXZZ4ogUq7qQMBtfS4iA9Hx8NrtqW2X5Y7F84XU4",
  "key40": "3NFD8Bvwr6KrfHpgZhB1iJPGF11JKxAaPWumnMPNwMvVsnHt9ykPq8Qfnpa155ZXGrGNb8YqB79oKtdKPEyGery"
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
