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
    "41MF7zUeyxvKqNjBGgQtco29SsosM7CKheio2PdMAmw5tfbAPfjv8cBfVb2wgqogdwDWJ3QNLXT4HeFR5fg4AtKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSjkpHSdkABVqxSysfDHqorpbPCWQo5fRvmw46eeu6Ej632AZNM5Q1N9W5uWjcD5nLTQTh7C7hUwLk759UrVVu5",
  "key1": "2onsr1wqAsucQhU2ukTtXbVdFMJkGEoeCFhzHzrnbhQedKEFAxArZu78sGSFFstFCLQskrwL3xL4u6yBYqrCxS5y",
  "key2": "5yTT5Y1ya2p74ZQt3LqTS7U6HHfda7UxdAoGPhFQ3nFkF23o2xwrjAu7fspyobkJXy2FGZxVXkgYrquaN2Ykzwkb",
  "key3": "5Z53bah8agD8mtEdfkUVAJHxASF5A89n1oyqrCiiiKrbknv8PemVnyMhcomqWNDGp83EpvnDPAoBUmvkGjeWUfrZ",
  "key4": "2hb9jtzZZZSByVFmhCb9znLk66VXxiZAcaJgnuskLXpWXzn3KfhoEKpKgbPJ6GUWFYuDqMuutJTzhHM3HB6yTEYx",
  "key5": "2ZX28khmQMD3m72B9a4GaEE7NfmjbfQ4PXDJbqoeje3RYcmToJH9ksq1Xy7tHs56uythaiwaTCH7L66bzjMjmrGi",
  "key6": "HVfzM75vX188n3oxHFYcSZ1tLeqjXHsz9SKo5N8BZrnAFfagNUSpwZGVqVzKJBrbPQXLYrDrbhkLbGYtCyyHZpt",
  "key7": "3VG2z14BxXfWG9t36GjXnk28Pxh2HzpDM9VQa5LQiRGrLGNeL6A67T7dKNN1NPej9vFX6KGj95bU6RZzS25YZH9U",
  "key8": "og8cQ6jGM4x4qcUE54X9hkNuP5W3SYFQpcMuyDreNZ4qhCToo8RZ2TkMyRJ9gfTmU6MiQVd1ds6FNc1MyHEbvmC",
  "key9": "2m1WWbLWQB1m9ih2NRqEWYvuhqQvtj93nQKgFfPhkKhbDSkNiYC7mbPti4Hvfnfd6AWibRAvMLfhVfbNhEWibg3z",
  "key10": "5hnRo3V4YtTL5SswvqfEa8bvrU2TNfERqnhHQMDGLknmkYQkwPngemgmpJJ2BL44NVpr5A1jyP15s5G6fTkx9BtC",
  "key11": "5C3ttJQV555fnAahG4p6CTaxRboswTF89PDzopgkazUQrtChRoeRTktyE5ZZ5Z8eJS1f7U29KUpuqqjR2P7ujovS",
  "key12": "5EdU1mwwdtRWst6BFz4rB5NXcxC7R5FZ2MTKhQuNzDx519GeyqcXZpRNp381F16gK9QPjkLfMdaS2UmkToH1CETJ",
  "key13": "5cWTd6Xz5Jwq2A7Tq4VFSKKuUDYGkVDLiZHgnxVvLPEihT6UaSZUHW5wu7re1MgqheCFTyPEoR6wu2sQNY1mUiD6",
  "key14": "5gfzv27Mdovha4SLiUc4UPLADFpBRrW8jq1Yfb7QYpH2ageD1TYaF6scMsFW8C1hhgifczmF3AzZPYHDz2wECfoq",
  "key15": "33X68BaX278dCNtdicnF41yJ9DEma28dyLRHx3XBEHuJbgbKoScfUbpcpzY9B3ySKwSxemrcWbaJ6ZpuHnVeLKDw",
  "key16": "5KJwQVHUZqpc41yUAkWGtkpJrPFpvNTeTFdHF5rSRTL5pqSShXhrZ4erBoLVKFmhL4o6P7cjnnwsnRRDutcKbmSa",
  "key17": "FUFUoBz2jeHgXyAwoHrP4ooHnV67CNp8sZ1MEghizY5CdThUxGneXzcYhXndurEqFFaJQv9D6aguSJrATXHepud",
  "key18": "3Fd5xRZuiYEcGUygDjcuPp1ooFBhr1zsmquXqBGUx9Zxq8eRuZZrCYtpVesjZwDF5aW8FVh5c8LkFMu78sjn6eX9",
  "key19": "4NgPhQXerYhJWhfHbeLRzoVxerzg6Y7c2VoXpkVzkYTdtX15nGqPZZgPvydCxoueNdeZKZZu1HhqnZyfU4HEa3tT",
  "key20": "4pS7NTkfvkU2123mBJnoy7Wng9M5reMezgiAzb3kSLV73LcELg8xuAvw1KQvzePau5ahA1wVMSx7oyvapC2Z5vJh",
  "key21": "2jpoW5XvX1HT7EaGuZMLWJn6DwYr6u3wxzdQ8Low1UBbFSrXAdobEKLRSqR7uMVPAuDjwm1TCUciWmWGZTCVewSm",
  "key22": "SP6vgLsSHEFomMVbkGQeHvAbP8xda26KnwdpN9D9JDbZ54vR6hfThhcF823mqVVMNdYTRfXiKSKxujeT3rYrkKz",
  "key23": "3Lj3758AFbgMrpchs4xby63u6XAnbPb9LLCp6szkwxr23vboz7xY12hxmmu3aPRQkoXuVnduwfN9DpJUgMn7juTP",
  "key24": "3LFMV8bd6WWi2YS9aMYNhzBguZBJkt68MCgq4cwpBVLJzp8v4b8gqiKJ5N8gxvLjpDnNJg4WuR2N4Qt6pJ3u8VPg",
  "key25": "48JQ3cfRgw6QPGX9EbTMEXkhTqTLVJq6bdcV6583m9HWDTM6P11siietoLqW8nwERyfVPH8sXjHAxohaGJ2dnCr3",
  "key26": "KVVEuo6W8kM8kcNU1jzmmrU5mwPANHouEqCncyTHgsA7UCxj3fNg47znXCcC4MgiCKrmMQgiiUcKHfHCsCXJLTQ",
  "key27": "4CYdpUgRjbPbKBD6cWHte8bxaTwuz4QTC4oTg2nGnwiiQrVnDEETrm2UPLNatsZQGDpLrKRrczmzLRmVToS9CCv2"
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
