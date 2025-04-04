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
    "5kudneaJ4r8mxdZqxwXqGYwqgdDWhsghNjnkqXtsPxpNx49bJSG1KrxAprzYfccCvM6wxbzbT6VDmcmCAa9fuhGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Mg2tkNSkPxKLRBbc63p3iab2rb2pPfRbRvichcxXDJP9xc4iZviWF1QLuwBNGXbPejfxKqJjv32Q4RLJN6DVnP",
  "key1": "5jDNvDKwnMKNAH2hJ5zVJ35T3r2pdzSg2r8XCMwWhnFtMcPa7wVLLqpjFRVEwhZwjwuDq8fWRUhDKk4NQHYCqW32",
  "key2": "4vk78sLyPuUeJg6ocJw8RjhqPPd9uY432jtHGZJfWwBZTCPRs8rLfXe4YX9Qpj59xybGJucM4QJRCet8X24bNBGn",
  "key3": "vqMEBCTiS7YrDtMB1WqHcHAXDG1pJVAbyX7D1KbiC4fPjzrbX7kDMskv9KMeR6HoVS4um2KmM9USM7o4hFjVrLX",
  "key4": "3DNYEtzx98huuAQGcDNNQkBw6ZNbnGjaEqC1eqaYo8Kv7UbX764TCLuQaQFDurwcYfggMbyjUqUt7vkz1zepiHrR",
  "key5": "46odg3VpVDx7G69LjZuX7piAJDGchNV1GXeFPXdQXxNUuY1REhVCoPKrUd7wkCj2FA1xPVEEptRii1zCQzjYgrX4",
  "key6": "2Djs2sxytYexCvrcYnHAapByzPfRHdYpP2ojYxCsbmnN9KrCEeqxhc6xYekA9m5vmgYhvJvfxhkprADdbjidZpA6",
  "key7": "2A4jLnrkm6Dr5fNZHSS1fZDpYaKYAxyep32g5KJrJrmFoHYYdJHAAHkCEXkeKcKxQfJtsjJJnMCf93YAyhQZmWMa",
  "key8": "63Q7kp6JXbXfbJiHB8MsABwMTF7WaMsopNGBqDHLPZz7jXaYeLqQBZWPQyy9RSvBWpfL1zbxQxbwMLZYLxj16MtJ",
  "key9": "3v9PwpE2V6kdeehG1JM9Ffxph2FDAtQ5ekjDwZ7DuY4gPq4arHj68hSxXm4GRLdDaViKYPesWLphDbo5yGVALZZZ",
  "key10": "52yWxoZT816c8EgqK4nX9T1Le2xB2pSuQTbTpVFwbmBZbc9RWNQUeQaXC2ShixoskZ2v5p1LTBcu6PfbBVuH5xM1",
  "key11": "5Aecpqj9Fwv2KVYAU1N51THBYenWSu3jY8WA94utv23pyZo3oz4FZboPEwZcQDS3AxFmRQmVmvB7UaLiytZY4gpz",
  "key12": "2hLWu4hahGJqThoX6zAAr6VGh1DtN9VDntffRAH3a49gorCDapijAFvmhCzDQiNJfy2e1BsViiDSji4We8TbkXeA",
  "key13": "dyK9wdJBRzhy4QarJ7V3CP9Ss9Km1j1xNHhyZjPpBCZbx3tEUEUvZa69GTWvaKGUAoSM5TYv9gMkjWRdJuBexGb",
  "key14": "4vojwecuj4rfwrMCKPErBEjAFBS4WAjgge1VvCTRMJjE5U7ZBL1k2zZP1nRY1QVssfNSLGXdKj3mNcTYm1pEM665",
  "key15": "33mgHF1gAbKDxbUjPeXrrMQy4enEuZwgfDdKwXUwzgzGfyg2MhawHqvwAqVWMjSaCoNAS8i6bhrSNJCkcKWJgor3",
  "key16": "4FjAFayTVTUAa5ofymHT3xwdznYDQAQP5JZhFfwyXu1gyemHoHfdLXKx2hx4WDUAPsDaARtvtqovCg4ErVtbyd1y",
  "key17": "5vxAXcV9FabzAXpJvJpxn8SHu4GrWCQTs8h7jGcUk8LtXbZsNpeMun5wuTUX3oVsc6KwRXiHFSStP2Jas2dhDfeq",
  "key18": "5wKyZxaCGsRtUDSEQjDA3u99fHriMguQodB9H2KuzSbApzAfnJNgdGddxDTf1dQjvTSDFbzYcHynbT1GHno3t6of",
  "key19": "XjLEEhQSgw2E4nkKJyLP4rPYgxd22zmfopbSYG9QV3xBkyQYCzVD7K3QJKXD5VUSkiydFidFnwDqgrniQQLyPze",
  "key20": "3waR5Fc16zBzMv4t2NmLyC371fn1KvSwg5Aosix8Qq8BmVGpFNpu2hWv2g1cUnF6k7ogxjA17Rjtym3RQ21pzG2Q",
  "key21": "QRVX15sx4i5oDBkD8WFzmnJWPkNPanCZBCtGAWeWduHxmNZTfb4j1WvFCrHhRaTnrnBCRFJFFua5RbEGsUKyPvu",
  "key22": "3aSdadVeXwXeMnfNtv8j1md1R5bcvttuot7vkeEamju3tu7vM3DgedBGSpFVrb65dEmcaKZzt4UUxDPnmAoHQS2P",
  "key23": "47FYmhwtHjT3KicYc3diotJ2H2s6DLPbYTxokYacbRzWUf6c8kwNsjMzQr4ExXUCqRFcLz9crBnVmz7FwAEkegbi",
  "key24": "3Kz2dhfEaFd1kp8owBQpKkZ2iZgdgt6gCHLE2u8Dq5kZzKzxvJjPAbUKccGAuAPXmM4SmMv6eeqiHyWVoLPSjSfc",
  "key25": "2WLTShyS6sucyJmKv3MCrhegKxabzEJ43Hn9tWonK1GqLmCQZS7yzsHNDoRg83bW2T8tZrwWKYCcihJUXBb7iyhU",
  "key26": "2GcFhtp4YhwfCbg4Ay3C6azTYC7n9RwS2C2BWEYZ3XSCbNR18Lwnenp4Ai2zc68jjKwLoZxGQbJ8qhmXC5p1NDfr",
  "key27": "3LWF4PXWHJoABCKjiL8ZWG7huQDhmN2GL6H9VuHTZXKircoEDM1fDFCZhAYvwYTcxrECak9hfncJkks56617D34Y",
  "key28": "2xhuCCddViiB28iCtt5yhxfMFr1hoJT7kMSXRr8oBeGNrWvnBkEzMB2GrJyvJy4KTQwsfxuSDG7R79fbSow9gnTR",
  "key29": "2VyZhkcG2gsyKWNoFKKv1S7cUxUY9xXftg3tgYSsbdr12kavK97cnu56Hsc2P6XZ6hEVSRf1GSA56SWtfR9Sm987",
  "key30": "e2oGUUAKmmaQCkEgsATTJej9AQy2nkp2TBkn5383anmBtHVXm4LgkuazLg4gv4dY3yp6WxotdttK5mmhQWDp6VK",
  "key31": "4XSEiQuUPy5vnCY5zGfnwX6d4suJ9fNp3r1SWnAM4gSaUynF5NTf3fFzvyKtoReXXRefkpCtu4KGYYAUHBKGSUN4",
  "key32": "2jCr2p2HxaMsgVAwDcfYZndVJ2NnAJxUo31AiN7cJqwzGi6msawMeKdsTqjYqkekbRKPS8HedhfHgHYPEPGHBjxt",
  "key33": "KmGRMkhShkfGmbbxMtQMHvckNxKpsE999YqQHgEyWAXyt7Zst3LFK9p7z5iKwLzRK9986TXhvU8fFwgKHWCPKYq",
  "key34": "2xzLYW2nL1ahxHTs3sE4zJQaS8HSHmgAJQL18CvC84Coj211iKYfPXb3hc6E4n4mwJUbKWwqkHS9hDSvvUXfSBqh",
  "key35": "53cVnvL2K3d628yWN3TmNHMfcEAFPkQreoFnsdW6Uah3rEFVZrkZ3H7vagVfV8Hgr8SSpqY4P2z9p6yDjdC3wMfs",
  "key36": "52RjdA37AkFHwvZBLc4MzZYj9voZLm1y4K2C47VhuAaLAMmynnFJdxQ3Ewcx7ySHLFLPPHnBaNaXn8LK1LdSZYuc",
  "key37": "4Ch8Jt4r9CZ8NNKrMxfRLJ9FXiCGLMv4pm7Hwn32yrM2G5TzQHEBivg3NpKH83sKcPZiCEiK3u6wuvGkiZ7W2fwb"
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
