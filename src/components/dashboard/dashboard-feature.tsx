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
    "5oYhkh69pbWhMFbSPwebNjc26aNRaKz3rykUMCafisTCce6LsyfigcEZ7Ji3GoDnZ8pfXKRDxHFsjTy8f7C4SdJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YCgnFabhwrgdQSv3mjGVMyk6fSMWDwKqvQgSDZCuU1z4PWMz3ko5MSh9piVYHPLsAc6Qvyri1Vh5pMTmAHbKb6t",
  "key1": "5RLKh6QvEHB4FScDFiRmoXQMKYmqT5doo34WWdWSk2eCGb92BA4f2VfD83gS4mTWNFfAxNiX7WM2BktqApMyRgFN",
  "key2": "5NgPs6zywXqoMrGv1xyqJHMuG5SKPDPLxdhjcFHUQeehPKJZHf3TzEq4SALNgcigC4t5YEn5P53wYt3m5HQ3yEE5",
  "key3": "rEp9zmHH5ehWHfcRJ6PUirY2Qb3Rf6fe6o7vRRKBZFHXZPPPBa3Z81K8etrJyP1Ham6JmWXA6FidHkmkvdi3kB8",
  "key4": "4Vsp4vjbsDEtEyxxHT3C13hJoV7Bg8wgp4uLHY3LPzZqA5RP71R89jH1CWpuDAq3pbeDC8PFyJMyJB6eTX9VdaNV",
  "key5": "4qsiAhSKiikUUd1Fw2dSUbmLrtTEtu77eUdih4EwvgY83zFGg1fdGej2VXiQpqXzteND7Q3qpvbRWiL2rCVQrdqK",
  "key6": "4x1UUngfEDADNMD8QdDLVzEeNrQn8CEGRGTaCdXEiv7jxssbJNtwepnDCmHZ5XjLBQ5EXzyfPzRcqcZ7FCm1CZ83",
  "key7": "2H34drk5ugfMbG95oJ7QzMvk2nTFh1CzbL2S24mnYbV8gc5UPfM3tbSCB38qCkRoBFDCKjE42h6tzjQxtxXppkdH",
  "key8": "363j1KU5UBb1vuNHrDeYU33TpW5pDrnYGN62YppUzSWXhPaLBtKRwG22suTHS7fnj9eaXXyyjdsqmUBSwXpAyJiZ",
  "key9": "51SJhbHtmpZMQhN4u8qq8ngaRwhjvrq1XaowXeXirgEXPgw4UeChR56DRrpTM7WcuFHDs4cGcAnrRMz7TGKqhK1j",
  "key10": "5wz3DrMxH3ezDutZ1ED7aRakM2HmcLCMquvcSFN8yqaZoEPHL61DYe4wkYotFt2NKo4udXptw8LeeVWSELYUmqtK",
  "key11": "2J72Q51ty4X5MpmMEg87u2Dc8USkjy47iwukrrLUkKXAeHeGzpEr6BzfCNYNfAb6b9qj8wTbAJZvHHPaBSAM1zgJ",
  "key12": "3aKcxMd6w59AGhFM1rKX2RwVgg6vpQN9jtiGrX8UVrU8Ezc6djePz7PuD5gSUGxNkR92puo9bzXYALgvrDbq6x8q",
  "key13": "5TX6r9HkhjLmyNxTidtjS5mYKZ1Z2JwSzHii1dL2d5BgygnU5wFaF6fdTKwmg17VTSdhkbzpna4qjqrvXGjiz6tY",
  "key14": "5Tpc1R9bnhHq5FuvC9DMkE4oySzUpf3H8sxW3QZfuUVnskYF6AnFDhmDuz7M4J4bAJv9QWZoSQzoWqxNYEVdSEuz",
  "key15": "3bW4sHEqYx43URTP2wbEp4hKeat8PZTxFidSWR335SVxpYeSMKwNM8TPKqmGKyP2t8dHT7dK58NfbCuR5RX8mvvm",
  "key16": "2XorkLsGJ1dCGiK5zvTzN6E7rXraD9EpK5uRALsapvFt6hPoQFC3buoSfrcA6Q5nDRnxijP79iyV2dT3PHgjPaVs",
  "key17": "4vCZTiMtWX6uvimu31U91eUHpyhZBkCn4RNkBPmU6RgJmP9hcfFsFXjdpdNeyWCLQWdoo3VsjQASoNDYz9cE7yY2",
  "key18": "2CFGsgedSR65CA2kWkvsdDE2dZeHy66jLq1UNdud3SntutKeuWyr3Z6ThbZBHvsgLGK6LRxyF3cPXyrcFNUKDE7G",
  "key19": "264m6JqkmJSsHBZ198Z9jdXHLxosjN6nag8WpHd1ZZCGguFibC1hXJ19D6dcM13VmXumcdSVgDNsLHCJEBbg8cVN",
  "key20": "4MT7u7oKsFsVrgVczZbXyguH3HJvBS6zAhdqVmTt9yMud2ru3ogHPBgW3m48HycDgcj8DyBUscPWTZmv3qtkZNZg",
  "key21": "2C5c2mRF3mzRjPWjAnMYgVuuP2bMgiWvkFpCHeQfpiK7PNMapEj3FTkBxPadKVDKpuQkLEoLF4HN3kvE2nMTgVJL",
  "key22": "4BeyhAJHprP5EBdfdUmgynZ3kvthtoUPvRBMHH4gQ6aj8ozSjx83Kbq4BrgVAbGEKt9sT9dg5e8FQmxJjPiK9unp",
  "key23": "3pwnp1P7SUz3gfZBDW9V3ZrpJVxi192sWdWNGBCnsC96xBBYmor8xNgRXtsnfUzbqBXpMmfh64RMEvipcLpy853i",
  "key24": "25VRMfTWdFsrWCNXRLXn2q7MFjSEQN14Gh7Y5nuq3FHokK6RAg8wKNhUFm48328hNEgHqSZz2BcqAbR9yFCGFahi",
  "key25": "3ZNTeHYWJDhcKeK2HduevDqmYZuCzi3cgxwYvhvtHgvtGUvJcbuBPRBN2cjxvgLsFg3V45L4Nd2huYgbvgk3Y3Ea",
  "key26": "38YBLbfgo9RJQsk7ESuKtZVcpABiDTwXJVGphKbeKU7RPp9JR2AdwhaqxQrLEhwPm1wsiBbhsLMK5pAvLBYTgnEF",
  "key27": "4PoHJJy9Hb8gWjNn1wvYLYyYoa1JG454k7kXxPEafCVyH9ayEcVH7DUhzxvm6zVMpmqc5y5o3KNxkN4ZsVWntGyZ",
  "key28": "2Zz7Z8G7XeAosWXwpgckfhfHRb9TM5vjnTdTMjCymED2TkDkedei3nHEW5eFs2aAn31tJuYfrNK5bVn7tUFMbWg9",
  "key29": "2yTTq8eMFfRME24Syup9DDzeWB1s9sH2gDmXXkSTiwMDgrSbxXtSEuXQ8g496ovTR9MgF4MHDRRyNrzBVNYbuKLR",
  "key30": "2icu6LcxuqBV6J1onyEp7Q9cf8W3btGNXcfM7nr5jmofmGhKZZgWgXFEHfy9uYvXUaXGAT2pXvWFPPGjyRRGdD34",
  "key31": "4zn5joGNDgrDr3NPUhNQAztRV8WvrpHx7sMjSboJaK9bCdRDzDsLm8XiHkiCTj764VDg1rFrYEC26Ws6NFjvVM8D",
  "key32": "47aozsE5frWJWMtvBujeHxuvfEDEYNYJEBJQMH3s98nS9eiFr9DQRbbjShVodBs9m2nANWZLP2GDc7DsDnWrDAR1",
  "key33": "34iAuehhQk97fC6NaPHkUFkLJoSiqRrsGhBY9KrtAKLQwDajiutgDW1yNTrHbSS6jGa5N7KgUr854QfAmH2KpuW3",
  "key34": "3FgPyvvdQ8P4WwaWnMtdMC57LxmU5kYPSU6n4PBgeK95Bm2j9HBHEw9peUG4civyBgMihfSCZ3rRBmCbZN3sKCfC",
  "key35": "62ofJpXGt8S68WbM7qfMnApKYesVzwV15HZtfJmMjwQg8K9VwweZMwXwXcMbeCFiPh3S5UEqGia8wKq5rNGoV7gC",
  "key36": "3aJW4j4puU9ydotXnN6JrEcHExzucuFeA3HsdtKPNrbTG9iVuwRiUuo6qw7rwdmnDXxkdcU9faCGHFZvnnyfp16X",
  "key37": "3QS7haLk2vVSbpnGXiP3ctACNG3MJ4mZ4tK27PRaS9gjU5vxUwW45tBJwaDuVb9GuZYcZoshMH4VQcEmxM4JYaz2",
  "key38": "48JUE4uvnRetjpPo6VqiFCmGTszpwETQamqDrRHCrWFLzSjSrYa7z5vVrTkXG6J9yM5Aide4N8keL3RUmybEYuCt"
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
