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
    "3Tcv8vWPXQCZA9QPafhFWcZPBpKTiKqQiPS9QaBcviYzmeXRg97UmUz9GMLiew9QjMn8uJ1FwbGNPvntRPeMzwNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vgTaEbP2Kw1GskWgZmL28Ze7PL5ciK7rd39iWa1Jo5sWsi5Cxh3qyWRNHTW8o3wDFAQbjxbbtAqSU27bDbeuSdx",
  "key1": "5r96qFxpZnbwb42jb23J9VBfVaCLsAh2ZUVYG5c2Ze18QaFLFqRNaG7G9ps8AgoZStT59otNugTxytKbJKGwh6W8",
  "key2": "knpPmee3CGuccWEaruMvaNCvh7K6g7VQWop8AKpxsviUUZTDom963hbedKuaMrxwVsLwKFVeXCVFj6KdVZBnB28",
  "key3": "29ANPFPPxowjwP1o8vZ4HNTswZWFVda8DZ4hX9QBZqBBbYFU8c7wqsKqFdVD1weaB2VTjYbaoMKnyseL2UFLNtxQ",
  "key4": "3hgN9Zf4P7Wc1nJFKGirCDoxup6GeaorLCC7gCMmrcy9dSvyWUv8Rp1tW3tHkr2SfhCXBaKsMfd8V9qPoVRzTbtN",
  "key5": "g1mrPZv7SQL4NbFUEM6RkaPKgAwHNS4DagPPiJF8usbcu34LsVfH5Frcmid1fh8jey9tXBm3MHvanbtC9q6VbEL",
  "key6": "39CpQFUDSgFsrpHL1gsk2YHCgbTCe68vFjKKWoxVbszhGaL7DuqYsp13rC8QAH4RTUM9csCuaWPooC8jntCm7VFd",
  "key7": "54YfRK5AZvkT3gJemMsqLjRTd1GrFGBCVXg4LWYk59seowHpcvkFD1Ce6iuFHBYJksXvSmMZgdySz6jkyShBtaEK",
  "key8": "KCyqkti9zwu2ehzqRBHRuGujD1Mh3JQeheKrpgofTRygPMShoM4kFCeiaWrFe6vPzxJGBZQ9JyecXwN1A8hRer7",
  "key9": "KvDLaE8RWVzHzUv8R1EFtJj94UPcxFWAVybDj2KbRJ2EbSLwzkN1HdNjFgFEc1Md91zY4GxJ5TCdFVY5gCgTe3X",
  "key10": "3ZaAdFVe1eE4K5YK7Unao3xq22RyuGHRw2YNZp1V9gjxPhMhrZCsw8WJuc8mahUZ9VXWA3fWEqbGuYc3BiMuRcYX",
  "key11": "3cama3CX6p4XXCS5eaE1uYW3N7B73RKnoSneyaW3b2ucTbsy7n3K8aTT6nrKstEGS826s6VbJ8JovwxCvsYcsHwA",
  "key12": "cQpPhGKMrXyubyNojN5vU5Th8kGx1pA7fa4uNjo7wRydrM9MhRMCMQEi5ahpm4z8p8VPuzG9Sx8VVnuc4ebJo4a",
  "key13": "4HRoXJPzv8MHMdHgJSVyenzx84eBk1CiTkqdGoAK8v8TxagERkZS5QhHm5w4cC5n7jVxJNxCwd8BPMTRtd6iaHgq",
  "key14": "4spqDmJYrtEiw2p4Jh2QiVALbVSkau55D7ApQKnpJX2CwpB6ttBfARrDksnw6fTKZeqHNrstsjBMmfAVaprVvptc",
  "key15": "83Ba9sGXzdtAeJWX76gg9tYjWF33ToPRjwHFaqU1MaqS1YgM3SrFxBqDx4X8hrLiqBaGPGLbrk8Wk8VGi9AwSF8",
  "key16": "486KuKAceVEAsx4LKnxViZz9FjU7jNBGKNhNasbo8cdRMFeUGAFcjVFVeJNHY9zDVNv4JvEY2RCUvBoXdB1GEsfz",
  "key17": "5uT1Aa4q423H6zT3XNf6gvKre1JTDs9rD4YSUpVbM8TvjpK97o3nTLk7noY6JYp28gBU2nEHiU22G5SFteqhEbjs",
  "key18": "4WD89RBRvJryAWDCsvvtoZYju7tE6XbK8quCUHzBY368UNssGWhg8MsouTNzQyRMqs8YmqCG24G4RuFuUVysUkrz",
  "key19": "4tcKifBr6F3x7SDp3UpviR8gjyX1vp3EGDgYqy5GAuXpUiPMt1sTdhgoKYQLL6ykojCMGZQTzDrUxGgAxxXGt2DP",
  "key20": "4m3pHFTeZHfLB3nbR3hrb31hVYN8UrC1dDEGCxJBXpio2eXVPL9ZX5o1P1n3i2p4PiLeFQu8GXDkQ6zyo1ndfjqu",
  "key21": "4CsVsyRXAGLQY2oMHiSxv7TtZZsC7UyrkvRWdpw1QMRNttJMRsbQAd8oAcibU3d7JBJ1UnkxNEDRVpMZSyrSCiF2",
  "key22": "T9uUiZdwCEsALUFQifgGoidMBLhCcYs4UioP6PNs4EkJFJ4DcDxGMZBk5KLT1HvRcwhiV5jSm9peEpYXt9WW7XD",
  "key23": "3J8sYsVJrwjoSbi1PneDU7jXg1Ewji738aUprkN232U9nirmCG8ZUwxx1KZfbVFrWhmqriU2fs2RxHxSi9JcPN1y",
  "key24": "3ZSxgKLMEbYuGwraBZEAoGuRvPGiKbHMLP7pH6hMz5hBfoMD7wN6d7E53gmaA1FzfG5U2k8DoYkAMuXC9jSmEmDe",
  "key25": "3CXXiaxxnsFZkzmFurVy8Zsmcfx4bTvX5Xi1nWd5z9RXmnS2Tz9b7VtC6TJWZAfCUXKdfk9VX7Vom57SB98gZkhK",
  "key26": "3SBXYkFD82Q34ZSXiuwiHuidgtLkFr6JEPsU7eG2bA3W6rsPCWfrbKyUhGEPWNsV6SjwtCgw6rn8PHcMh8Jao9oV",
  "key27": "4Y3PbhkUo2FtnRC9ZMoZDXo6HoJH6ex49wrqn4EjuMqzbxjUQAp4Ht8P9nczx1qBoDzwskdKhrMu1pSrRwEyRe7o",
  "key28": "36PXQCEvPeAuVS51jUkf49fDqSWd2puqCm42LT4D7wnGxQShzViYhqA2Zu4b5nXtkbgnpGEXxqbaEq3J2MzFZfVB",
  "key29": "3NmB7ZC65y1Bi7SRFLGfd3uC6TGWCGw4zf5uHY1K3p2DgPBW7uRiuoCvVCx5XwdzddNSUVhYKwLZQ9DvtDg5oHbo",
  "key30": "65AnsPNWGUyVFoezGq9YoJrsSUo3PcTsuPehSL7T4ibp6diZGDH79uojZ4XpJM8MDyQWi5RGRuTxXJPiJcDfscJH",
  "key31": "2cnN2PAENUWGhP8iunTgfgrYjPCeu8Bj2cFDRh5eAdi7MsK8ivGkDA5S4aPZ2XDXUYfLXniKrugnUc5S8U33B91x",
  "key32": "2iBWbJVQ7xjJyDheke3PakUMTCqdVVUFFA5vkihGzLtZyTyUx6BUAghZBMJsVoY8uRd3azj7XDWzroV1oUsUHgjN",
  "key33": "3KvyEsgLwnm4MC6mAN8CiJ4HvJoExs5KjACK1M4dCiy6YMqQg66ecFaZA6UpXTQK7Ljj2YUR1LK8H5FAoCD8rtG8",
  "key34": "fp5A7UBFQ4FuJvRGtxbaG4ukrrBJyvm6F9ka65ia9n5duptVqswWi85CYhraJUL7Mkdh73ZJAPfaAbA6cd2wpFj"
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
