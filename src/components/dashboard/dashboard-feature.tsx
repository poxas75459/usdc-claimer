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
    "4bnU4aGKuhGcfzcKaSaowSRuFFvwYR3MCdpCfpjnh9ewesttaNV7sxckz23uvs1bk6cyJncCoLWrmoUBCnMC1Az6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "butH2nSfBkJmJybaSGpGQi86ZMyRuyM7w6WWcHJ8ah65WUtQr1xzF23zx6EKCfUUL9V4RJiX3JPCdkxoyJk5pGG",
  "key1": "5sB1SJ32x354K2vY3n6Cm8bNk9niZ2STqGNFiyj5wsAyoy2BsSYJSywcbiHRD76TLSjAg2TVpbotFVhB4thGECTB",
  "key2": "2ZCLdyGPtscEsZFxG9aQ7ri3uwCS4e3Mm6kkf9uSS44p61B8mUbVnjNmhRt1vW2Qw5CZWweEAfhmw1gJG6RjWrNn",
  "key3": "kR1SikDhAp4fo3YVTmjRiqz9TbRLzGbXdUFFqTbuVgWYtsx8YyUhrLRGRhssY5xUnKsx4rsvu6wWbNEu5t8krtu",
  "key4": "5QpLiUvZPYwvxRsRXHhieWZvp1nGM6dbttA6PKktCe8k7KFAEh6EWUQrB5nBDdJJDm8YPRSSrFjghv51VjLvR4NH",
  "key5": "4fqRmMvLF1o7FdbCV6goLq49AhptmGrygV9RSt5KfiaFh5FCsUnda3BpjjtjSuToq227EyFF2PqJNKmwoZ1GWqFi",
  "key6": "5P2CyS3PMmYPNwyzcq1YSBcbJAgdHZ53noB5NLRdTgQVhjubeV1fXpi1RbnvAvYQi8zxidY5RPmLvx3vQrfMavd4",
  "key7": "667Lynx7mXmjzZkarr6sDdS3dXW2r2mAuQ71GcEeKQDHJCXA7oD2wwhdEj9LmC9KsN4uyizRuSvZWiXctv63cYKj",
  "key8": "3A18G4fdYq3ZUBQZ8GkXq9QMUijd82A8htfTM6sSWx5yWwr74xRUQRqmFVbxwmNbuXdxEotvUtz2CfgyoFvtMZ5V",
  "key9": "zGv1B4a48t5UiHWYzMiJ2N7YNre2BcPamb6ahzu1gfMEWkjCMPYutcvUMVR4T8SfuL1JrmPKiHM9AuPCDzLmmdi",
  "key10": "4DaoS9GVvNpnQo8cWzoTS8H2N2NvSF3KazDX7C2UK6nWjGEDjbckvUBecfnstWDTA6YMZqjUFLx79avKvra6516W",
  "key11": "5KM5DaUp1BbST5iHtJ6NAxD7nANadhvcooCmH13kGZyigKiubprVSeuamzYunJCrL2LKcpQGkC62noso2DNgXbrQ",
  "key12": "5FEXuacXhapVkMkEJj4ad8zqpTKSvd7NgiyDdkCC5ChnNnZ2A1e7xb6XkRiJo8u6Dh7m7zftdcu1axVP4SceS6AV",
  "key13": "4xKof1uvmm6YUNu8esZUTE8Wqh48nQBXfZrCoV99R3WcnjqruA5PXy2b4Ya8NNuDJoBSxLZLqo2Mp25XV7W7i8x7",
  "key14": "2C49nn5R3NeoGjbggHgkdSUf9MmTGhZhHcsjWVRaXmvGKqK4i6q1GbeV8kRXqVtn6PhH7aA3nFXShoX1V1L9Zf5C",
  "key15": "3irXgLptGXmxu8kiRaG37BkqfY1dCQHxa59SfGDSVnStZs5g4Baim98YRBurEpRdwcQUEtRAnbz9V8MLfRDDCat3",
  "key16": "2qgqBKyEUUnGSdKoNbyG6wXrBigLS2ZpqBWQjcUcXBQhFFBhLjevaTtxafKscuUirmDrMpJA8eNwcyVG3xzsQnaC",
  "key17": "Tuazh8KUigLoBS9u5RHHsL9XQMtpwPxtSyMTpxYLND7muVwy3k2CptZhPnjXZs5wwP79hZ7GemiC81gpe7xA3Gs",
  "key18": "5wrHvLQzpHGxEAdBdxVVQRybd3ovVtfFdJxFvpPWp7CKp3bfoQSTqos8b5KNmbYSV7qqYm4EhB391yRh2wGTFM51",
  "key19": "31peh8YBGCYiEwkoSNYeSgmhrGuFcLiEic4zetrAEf5GdWKNsdnHYvHziYyHt14m9YjxXaXAztFdw1fKM8sKzsdg",
  "key20": "2Knu8kJxKR9484eeQeHj6kEvSiM5My8nxBLn5yWc624NoZPUMUZ87xbpZU75gdTYi4fHR1VePQ59oazHw8quhUaS",
  "key21": "4Cmh8VnGhKv9K5MvXDS6caUYTsrwMQBX7EQpSvh11NtpBzvzZWCUSN4yTjxZTcLqugvRLo9xZfUVG7s5duLVZ98q",
  "key22": "61yTAdUFNtg33DLMYApnR1idGQysPgn2Q9MGZo9Dnf7yxrsaM98H4DGvxqHVX63jNKr8Gt5tL4t3ymrwWgbGfNvi",
  "key23": "25dmUpFAvoRR6UWYpCNHnjKkW2KvXsBreh728Y5GFyEuj3tcyHfBcefLjjbiuQcsF8gdT8F56VNQQ3dDwa5MTbF1",
  "key24": "5kHF4hfR2temBnLy3qoioTgKwsexLKbSibJAgsWwFLMEbvEMRPGjUSMMpuDZCztcXEhqGmpjikDVPkisgXyurxZF",
  "key25": "3ZHxkaUokDFnYcVgPf9HU3Yecp42sivAMbVkSVzYLYyyxs9MsPqg3WEEheuavZa4HjBkdoVePwFB8riK3JC52mQA",
  "key26": "3JkEWefYk3aBCmZAtzTDRfQQR5T9cThVv9Ro2X7k6JXYFivGUAqhEFKcLgvPSg2mw7ryX5iHSiAuermnidNRy6qV",
  "key27": "22fLq17rCLHXkNnozmAHdyFzThVw1XCocVsA6X7e6rLxjP2DiB3PYXFimiA8Qc66zNBc89zyX7kB97d3Z6KG6ygD",
  "key28": "5VtfrDjXY23fpJZC6Vhm5hc6AazbmgaLAP7K4ixhJc6oNoEBfLuqKK7YjGZmrgzupejGCFydiZwSqV53QJrHGtbd",
  "key29": "3kJXyBfD3dEP2FmftGQFbaVShMcKYGyJsAraD7q8pvTk8F1AQQT1uUT3MLCEpMrXE6DwKAV82hCiBisJYWMY2JXG",
  "key30": "2pYNhQZBDQ8AwyYmx7MZmAQ1gvcL4cSn6H6q6v1K12ETw9xcVroMVT8CErE2S135ipntpgbNdAatGu3C4BbPZLhJ",
  "key31": "3z6PoBw7jtfntB9cMfD3PNHtK6DowTga1D3gMVp2JbPJLMtBCoVHZkgyYrghkbdqSTsysznw5mDdZKyECee2MXEB",
  "key32": "2zcWgisfiWWmzSm4PPRrT7SyssYnphzTSBQTCmuE87QLnkLQoqC5DvAMqqBf9545gX73VUW1T5wtuqekgqKbHfdp",
  "key33": "53Ar2aGdvnUnfQvXVDvEiRMcwm95n7YkLnKJAmJv699qk1SxJtxHyF5TAe199cm1gnVVi2YjHnb6HeYVhfZx6DQ4"
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
