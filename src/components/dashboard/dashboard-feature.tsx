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
    "4oKYBujH8HAfpG7bc24QBhmRxXtF5w1B92Rsxu9abNtVwg8aiUdzLu1jS2658MkFfGSy6N6dBLx3mTfvtpvzjkMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wve42jchaNHJAwERLAGeiJd6qxPhR8XuBFfkrrFi3ZEth5mKwnUAY2N5UMmxjqKBQNLQseoLngP4dqtPJ5GN83j",
  "key1": "5sH2438HyQvyDy94MKq8zPzzfZzT15uTuj5vtytTyBTY1wctrJpXA3q7W4mxTN6R4SxaMhheJEWWm3PehULnqnkq",
  "key2": "35LfYYeanJhrSjwnTnSrrKz6jBTTiYpCVSc7JSuphM1xHuwJ8MJGmkDYSGv6qR8n4SXXJY6VC2d9dXDwubShvMpS",
  "key3": "4K2t1VXMC1V2Vpfm7bZRHUWBjkJ82n8GoSgB4m4PBU9g455wWVcWm1NsxiyoUeisy4Zo2XJA7vhUi1LgMMRVw8UA",
  "key4": "3QzJFLd8DqdJ3K2j5rqrSjXqwn3FSnEnCCw4KmQisJbp3oVTwWCEt3rJdNCZN87BYt1e7c69Wu7wscjM3h38r9rJ",
  "key5": "3ZKKTriCdPESKHrtWtCKSfYzwZjiZKW9MGLTUy125fuUU3ZjFBQN23T6HTRMo8eppae8GPJAkp5J2zzkQgkKa45m",
  "key6": "56sdtjrUDgTj514B4jgquBFQpJ4SVQvriXvfyX1hg7Q28SfFjjU7QFLUfmRq4XeEg3C44KQUvDcBJWYZxz9t1X5g",
  "key7": "SHjMRNgUjksFDGe7YkpyfoYGyi4yCEA99NyRGnK72aLt5bUkp2fAqLz3o6Kc4LGZw7VxMnTmpMrtnVB2FhJE5DM",
  "key8": "2HnQvrQGnBtJEM2eBWQgdN8vw5JotCWF8PXTuppFwfFFkKVa8wEP8rRTkR59E2kf7kHWQ6ybTANYd6NuESrr9dnX",
  "key9": "2m4jerGfqoCVLQdkH56GuPtRStY5djR2jh3wr83eP1unaTmPJvXanXFzGqT6C9f7wkhYQHtkiA2TBjasXfBZXgZg",
  "key10": "3f1Y92MppAWPZaSwZbwa2jz64RTHqTo7vL3dd6tXQYQ2kuT6pEZ4pX78xiXV2nVVXt1Z3iSqRXEQ8mcYzkGchLuL",
  "key11": "3grYHtwMVysAsE2XuLzS3xNjSWat4DCpJjwcDcKqgEzXEYYH7iu4xnjW5GiGdz1NM8uth11wmRqdLSieZBPig1i5",
  "key12": "3mYPKrUce6DFe7vAdFnSXCWci5M4o5NXmFzzukk3rtwFZKDW3XUBYPGzJaBbsJ7BrTWtkc6Qm1YN1aANyr4Bpdj3",
  "key13": "2eEvJvHs3U8qYFp7viMXFYE1Ab9D8DeN1FAjAfkgCk8rY2o5VHPLqEm5ZypthuY2C52DMWRnmwnzFn9Th93hnTUE",
  "key14": "jNBRgNt7eXeoZtnqTM3FaeWEsMF2ZGDsTgm3YDHtfhoZYYqDsQ63sKK92pZGkYvvQPaok7j4Gu7UYDemXR9PGmS",
  "key15": "KcdGVPm5knqSMCB9Vcwtr6DTQzttuYLHd9UGGNkFp2hYSTbxhaz5NWPjreMBcqsVnpSptYu7nD2yKyxdQi7Qw9v",
  "key16": "xotrBLYRRRg39F6DRWEqD78PDxHN1ewgXbH5rDKQXGyDpR4GXyZ5Zd9S9XYfBTzP7T46KW7Lpha6wcH8jF89AzJ",
  "key17": "5jxzV39mfH8p53CSVjgwiUYoSATpM25pwtkbLBMDnLsfN9DZyezcKVkjBkMFJDifrNXoiJ4TzPfcX46YhjFdETmr",
  "key18": "3rEVY9cuZGmxhiBiku1gAPDi7uAAHVuWejRL9CYheeigTAhyhCq3N2iitSPQf9QaV5groFnLgvukvsyd3faaRdtM",
  "key19": "4qjgtdc1hLoCL4BB6tg9meu1QrtotvAE3ihzmMZLPJ6hWW9ezk4UKwQazcR4ZnpE79Hchet4zB1UtaBotvWV5e2W",
  "key20": "3ogyxDQB3WfRSJQt7SA1pmXDKbcSP3ZmvdwgicrAjpPa7qCQAgdkeY3ojprVMJ43u9qZdqwJdPyG9qpSsW7hczhT",
  "key21": "2WNpTw7eLzsZV8nzv6B4hNJCTRVFeCbSD8kuPspsy3zXgThMFyCxm9166eVkKRSmJeN6n6ZcphaQGgrSQA27wX2t",
  "key22": "3sfTDiaTkSW45wbojaj4pCQJYMGEhVEVsv2zJBBnFqt8hWGREBorwjmRYEby9kqfzCyctztSxpxdTepNv2cM95bE",
  "key23": "RMs7ntaxxBC7KDeyDC9wcYtiVrqt4xWAj7RB23afV1tcwfZH9rhRjf6dFDgKDy4szBpPDJKwixFvUDMBL5brTrG",
  "key24": "3C9ncknmWWcv1521FpHNHdUsArWQoZjDy7acrp15KauwRaoe6yPX8kYqThKJvibWELrQNnWRipU8AxWC3xQWfpU7",
  "key25": "3PF8aTJhHPZ2FGByhMHQMZjyaT3nLnBur61DoJWdck2RCqjnSHsc1GsazXRtroWXThc6te7DXAJKs1BNvup4TNsx",
  "key26": "4mYywGNn9q7m7iioeDtfmv13HWYLhKXKDbmXatJZL4vKqpetX8AdDSZKqxn9XEboJEaJKrjRKg8DPqCD8KpsAf2i",
  "key27": "sobV6eYPRDkHtq4MvMzkCSGfDCyriAzJPUzCS3siR9BMhVGxb41r3JHZhNw73dRZ7RAiBRjhNYobEcDrrL8YDEA",
  "key28": "5xmuzPYQW76NQ1Bxy3kbadyaTw3jnEBPbrFUaDBjheVU87YBzDgtDpsnKxwtphE5D3nEEtsLDDFJTLSN69JBzU1M",
  "key29": "2yR6DP5ETKuFp47wzQiETRL92ie4Pcczc8t9d2yQN2WqxVQVYUup8sbQshL3dqxqANt8xAE6hmq7ki7HFJdf9XWb",
  "key30": "3bjWjHqCHJwEuK76UGFXvsyqiSQTyN2GVxaFf4c2bzDqnnXvoD2112JHXGU51bzggNvdsf4XdxKWTahchbkyYY25",
  "key31": "4twUJKw12RSpDZAqgpYRTHsnGzXGNCfGxH2sSBM7r7hGtjigkHfmxNZG1A76GyQ3yFxzF2EVSVsGUUgyUx7YPwW",
  "key32": "yDRdKvxnyiHUCfwQJjT8ko8LZ475E2RqpEqSWz9vxLwAFirXuQz94FvtLcrqr6PFiuAyhVhnHJDhU3asGj1Rz9M",
  "key33": "52ci2E2VSj5T6x8ra1b2eTSjbA9LH3aGJCVFuPLbm2zLfvfsSU56F9FaY4Kj9jxoEMrZCXpxfRYqsHkwViyjrn62",
  "key34": "2hoN1o4bUGKt7BfuEtLPCR9brvePnQu4VaxJzmzZ2JCGdR6r4BfYn9fjsD4EUzb11F3cmcwn5HiZGZ5pfSyyetu4"
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
