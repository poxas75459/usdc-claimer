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
    "3FC4rF27qENcDbAmB9Gyy7Sq2FwnhpjYRWL8wRVe5Dt7epQkVTemG2qadaSP8yohjXQbYoZhcHekQcxaSTUL1X81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rxEKsJ3uwNEMB4kvZ7YpVPbmkqndiQ2Rqd1cHRd9Et5W4zMaLwjLRqVK5sTpVGdojQGALCYuWDCjZD543JjkYdz",
  "key1": "2mWFsGtTAASYP82hN82jjmFKmpNWjTC8tw4KBkxESx97v8qt1VwbBUrmZUW67E13wK6RHKTt7a2x2EjB9JwyEWYA",
  "key2": "y79P7KGEj5KtfCFbA2H9hLuWnKqshDuJ2VkwSgCyLac2bPpoCbCU1FvSn3MzDwRtkVPKHrYWYKYiyFYJpgQ6sv7",
  "key3": "59BsUsrQNVn99wpJaJwvQjxZFgMw1iMV7HJDFXYRNADJKpiszG4NwgV1ip59pfCHzXYXAoGf6Zy5ztyFfKe1vDEb",
  "key4": "HkP76AbdQZFPfD6TkNCf13ur4NTgU2JjuRPeRmXc68bBGEHXMNiW38FNKykeyk5t24s3y8x9qSYcXX8A9aH4x4e",
  "key5": "3oBuZfoumSid3GoCnJ6rGy3UnLHCAasuYC4RwoeABrfkGPXgAkmw2RC9j2fE4ywuxMM6zRuPJRnUyRLa8iAZNGkA",
  "key6": "3pdya7gXRLN883D7U15tsYgjPXb79ABkXFiPyuCAbnytCP8J2hLVuse9MWi3SdgMpbiRqryTDj7Vu14fU2kDLSEv",
  "key7": "5r1kKbepFjSAL8R98GPWEVLiYxYEmoRmmLtFxVLtCLVV4YvfVZCX933u3uHpbJeW8tPmVJhnusMedZ48iLUMWA5G",
  "key8": "3QsXLUkxe9LYZX8cBHUvzuzK141F9APdPi7bz4BmUMQsa7oAwQyLJNDvJiMJcV522xEj9zzdTHPK23JAjJGLH8J",
  "key9": "52FY3FCrmdRyq3b8TdHNxwNnt4VcGDAEaPWy8z1inLcYQJ1WadMqUJihaYBXiKR8RTobeuDtLpAXi8WHBmviE31A",
  "key10": "CzC6EjfpuvQ93a49oVsKwLbDJ1LD7B2JAWaE7ksg7XytovR3gyLr3Tuk45kXdio9u9ETVVospXP4C7JwMG2YPWy",
  "key11": "3N3tm2xcJmEud5HTfH52fDJzPGNgzADzFXW3jfaKRuxphqPRzT77fkLgG5Qi2E2nWrTYRbgq4ifrjVGiNmWDufJx",
  "key12": "65dc3oLrKqRK5tK2aN3g5ZzKR19wXKjYfhbAgpesgsxTMWYEbFLrwxJ2TPgg7G4WeyemSr3qwP4bXUuxxNuEBibA",
  "key13": "2uHtzVWv8Ytt1NGQYC7jtv7cq7pmUT8XTMrGu7x3rhg8JKcjsg5UxTu6zenBGLLUDQNLtmpPJuBVbxGHFq4VzQmL",
  "key14": "2F1P3pJhm1Ni3QUTzgoTiCbADsKBVhxwwEi1DNjqcUb5Bxd7L8k9nnm3p7jHuRyH78H3KQgsP8P5qS9KAMvnCuSA",
  "key15": "2P6PfRfTrskKeqp5wfhWjycSqryAykBYqvBpSSb7cMCaXmHyuVYPuUXQRaCzSLPSNDammy4FzY4iU5NR8p7ML3rH",
  "key16": "6Nc5tUh45tYrz3Zr2PpfYPaydMc7tsDgWFgjT9YKRmvbCPSBKFb137X4csXgPMh9FD1patWWqjbthiWrCrRHF2J",
  "key17": "3mCWzyhqgxTTFwDtoQXDqeVmgDS3hjzZsto1qxok77HeL9RVVaNRJM7CgNDjjvV1kf4p3nPoMBhkuPEC3djgrX2q",
  "key18": "2hnxozp1Xx1jgntBUYqgEv5bmSc1TJLu7xEHDvZzw5LLcV94ygCtj8UruvA69Z4HFfX889bZAfpqocrSSEdJio9o",
  "key19": "7pmtyK8NATRQGXNreAogqsbSbXGQ1u9y7RdHgWQtCre6T58PfDQojdg1D6qCN1ntKVWHAGTdnQo7suRGD2Dtzek",
  "key20": "2MhVVMaECcorK63Ttnx1orMvsMMZxatvBRRJocM69wLXCegpvmh1gZMVtmoJdSUH4ooowPanyXvn8M3P7TRu7UMw",
  "key21": "3RDeUfsyWPybquBRMPXsi7zycvBXLEa3fTra8CSidZEDPaozY6wABMdtLwh56jP4tBmmS5wyRUdFZhdRbNSYU689",
  "key22": "CYX43pF8joMc4gSbxcwq6FYj52qMfyXBBRqoYhbFXoVtyWUmyDSs9LyJn18XmLCXCA4AU33LaiMPt2ghJ1iL4if",
  "key23": "3cuvBeaZPvKiPeC2Zsbs49ednnn9WKu62SXkevhSJQwyq7tRm2Z85XGNJfS9NXj8D6ztXhJCq1z5As2xUzkRmh5Y",
  "key24": "mSJbeJMngL8o82iZ871Udt1AjMmUen3ksXEuVexenxoPt6xAEUWuohAkMbFsTNyD5viUUk9ADCDfysqgRfevdMT",
  "key25": "3TAHF8UpAeFwowDjNg56aHN58W1Fw4oWUq4k52NkTmywnaUtc9g6dK68bcrwcNjzR4y3sb8yaeujXyRfbEtkMc7y",
  "key26": "5XfqsG5qDd52hHFJfiVk6dWdMePAKRsjioQFV11C6gnqDcXHCC9W2hm7L7qh9XDSVXzwydMdtbt8B4nYsUQ69KGb",
  "key27": "4n7Za7NQwenVoDPcdhmQbFDwuJxAkrY2JfEQjUXU2TmNz2wvP1DdkwzGyuYwkkUgqMZRuyMW7ajDH6RRm9GAtKJj",
  "key28": "2LwmM6tn3gFcWBBXoXAGP6cvPxev2WY5oKRvTMVcuv2cTHUShsdtLe9ZnMtQrPyYq4dHqTzWxWdKcjTBNVPfuPKQ",
  "key29": "4NZWDV5RvRMLygSWxdFvEoNJzcH1PLRvDYC8MhmErtAiNGReoMHanGQpSfu4MfWieFBPn1FmwKtpAjsLU5TidVkr",
  "key30": "4Rau5YX2fYMXBErzQAaqEAT7MUgPz5cPMTag1bgucgVPqw8DwGfG51HYSAWgc7tCyXXC1R4zfurGJUC4Gq5KqMWz"
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
