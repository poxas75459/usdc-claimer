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
    "5bAYd8NctYiV3cW89uKqDahyqXhRvWNM6RnhArdJTfLf4DvCiPpAqTZmqrnPeJpe1VCuCbHMcRJEhz3aLxYFuaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HBRUhQdGhAPqtrEsCfZsTKCLtfmVyCDK8VhkJw1BG5VfumyGKyUTDD27anCvDxsiY1cafAbUDuhQChVnbh1tHEX",
  "key1": "E2Px6araQodHeEW8TNDwgMevP8esraP9r8oFf7MgBdz3QnAyRdHLKfp3WQCHV7QQwLYJZHx8CTXm6vcByaqsiBA",
  "key2": "21Y4wjABb7YWpqy1cpK694Qy6ZtEANStLtMPvJaC68nMMChwEr2xAtKHbYaWmaiwBf7D7hJzomAyusMsgCXCMck4",
  "key3": "2SEiUiDendVdnVJyeLkkkr9ZgX3jtas3wm4cCdF3oY6bKorDHVaJm67Zmv3wwNZCiQBFy7q7vKMMVEcks1Xr2VrR",
  "key4": "3M5TCNvGFV5o7gkcVieZFkWdQbHxDT6BC77Rf9JZSwbJTdfNg2WbcGVTjxQwtrynnrGcmpGpxq15AnAy3XMZJiks",
  "key5": "NLS2JhSAVZs4hFMLrhZ8tGv1HmNdV9S7RV8pBbDLughoQKiwYuvFCg5bwzXfYbKRjJDyZZSQAyUARup53YLhsdk",
  "key6": "4q45vXiQwVLGWU22XYEek7sno1qDXuG1iNAd3cBVHbJuTPXasDE3j1jQrVwi6Gvpv7bGrL7ZEdodi1RMeQeuLnP1",
  "key7": "b57TKYc8gUTwdTdMDCRSR8smpxBhJ3xsgExr4hxj279zmuxC9CsUjAHpGaB5gZKa3yTeffioUHuG86ahoKX2iDJ",
  "key8": "3asvYbufPrcE1me6P9z3V2b3thSTCvFSuRkrospzki5NkgkZqyQ8kKetqKpa2Wayvc72cmTmigcDpwkDi65fYYX2",
  "key9": "36rwBf6U1z2YtcbXgyTWcRkKnYRXiPTF7TLoRP3s8fee4QTw5RcqjrCJd97G6jK2kE4upzKruBSGzrpukhYLng5V",
  "key10": "5P6nNHJeM4XFCPTjLdueBt2a5SZp29eb9VenCfQ3MsbvHd5pdcjGFN58nvJTm5VundceH5Y33CKEribbhDd3Tdtr",
  "key11": "2SXtyLdQnwkM3UvaMQmfL9eESVHczvYHCnoDFNcbe7voDnSAGnd4U1sqoS3yVBdeA4ot8qBPuSo3RyiLF4fQ7yTB",
  "key12": "5gZUU2mwyYPTXWQW91jtPyJmKuKCsN7Vn4nFhZr9mb6xrnHY75vjfNgY9qXBXncGoi8AhjopKTwWNJToHWSrdQvS",
  "key13": "37fgStw4oo2uDztE9vikvUES4RS2EMv97DLhpCDAySav2CBK6yWSKti5ryadkBGEY7hhatHX7rB9x9i8Vpiae3xm",
  "key14": "61aabpTzYCR94kg5aLuYuauZzNXcyopVZUpfirjKQTjNefPsMJnjwcZw7iFRvJytnZASaTM6hd4tEzZiz537iUF",
  "key15": "63DHNEMLLnyxfk8z1rJr5ffgoRgCPygtBQDMZ37JVDf3AmdwYRUr3wFjEYTw2urGupHSs4D9gA3Jj4Ru8SW3EQRD",
  "key16": "2y57Nj389mFhnn4AHU5MgTyyj2iWRXMXS6Zw4uAMg6jytkfDyLx8m778YPEfeuU1rFhs3Qt6eetvAmqFDyR43KpN",
  "key17": "anvGC9eLsw7xz26LRng8nBiqC1nepajQmkCrUcSK4FeAq4eAS1B9se18EcGcrktvR5VVAg6DfB6hs4frc8WAry7",
  "key18": "27JtvYKKLPn1ea9WkCe81hpfwBpX7ZawuXePsUkx4AeV1VEoVy35o8XpU7LjtR9NkNJzPmKEmZm7smwGRdHCdmoL",
  "key19": "4fR521ihhA7o82Ds7ZW6eMN3hFfU9SpYQmwuYjfW4bHRcMXjWRubuathbmhxw7Azpkip1X7wpPWGC5L2457PYccc",
  "key20": "3R35UznQ1qTkNoANRaynpDFREj6E6sPKuLFvipkBxduF7E4bJAFzHbEXCDjYA4YTEawaAAKXHsf7HcUmoewFVnSF",
  "key21": "4CMbSu33QVo53zeziVZfEJuoamZbECD6jVwmpm3Q7ZyZqLfGKAb54NwEd3DPMzz5xMBGZNNcdDjYfRFWNLfAQa5y",
  "key22": "59ehNwg2EFq3y5is5QvWDDYF9uyne2kbwJoS19icKf9vdjoWBYB43tbDodRpLDbFtoyc7jfhb1vLn9K7X9vzC7aH",
  "key23": "5VVWChEzfTnAjbdzsvd14hh1uaQrt57AmkSdns8duTaQBgLaNm3mM41ejCvkfuUSHF33NmXfVaqYSYy9CTTnToBf",
  "key24": "4JUSKJZojyDzGXcbf7pAPgvKBM1ZLrgf1wdzgz3ajdfRoQKoih4yRrthuKwjRwSrkBEbp1Fa6u1JxsKdcSX3c2V7",
  "key25": "3QTjWkXwibEHUbAJvirGmd1c4uoHMu5wwxvkYLrnKUh84kRgcpqDJPAbN3KoBWSZJGaFYjH47M4r9JNhS64KvJGK",
  "key26": "2p4xSqbBjwa1B2oeTaDtdYEmZNmyz7R3hBBpTmaRKmvRx7PG6nmbKENYFqc35Z1qWeEog7yUZPVwPRVMcrw3oRiT",
  "key27": "5UtQxc1pf6auCRvLKzzz6V4yk5JQsbMYtLMiWw6r1xoTDvv3SAnH5CU7mzUgAjREj1r8waAs7rHahYyDXsGugMjY",
  "key28": "5xig1d8amGjNeWg5ontND41NxruE6oTxHKDhKcsk9dCVzCQgGjYzqxoMA6MbXRjkLsiBMXrNkCTYoHBgMG3DFU6L",
  "key29": "3FguUHkt1Ke2ALq5PXaAvz2sAewP96f3gj7miq9ycQFNwGR6G7QyQWNQTJUQMJyDZCGeDjW9cV883hiq18Dm8TWw",
  "key30": "CYgN4yc1HTZMm8T6BNuDkDoaiGzHcNRCEoW3g1XWD9LWcHoNUTV5pDrp8bz9mZFPaDL8BWvMyGicmvGiEyouHuv"
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
