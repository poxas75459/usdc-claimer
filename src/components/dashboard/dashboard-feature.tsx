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
    "St3PSCrQPzU92uZ7FYSWKykvEkEX2i7GZgPoJmUZELoVxKJvY4o8TpJiiHx5GuxAp8dErHiqWp2qm4GzYkvKwn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n5GGau8n59jqAXv6vBBYDyT7z8x7YDA41teVHPmM5k35xV18DAdhJmdR4zuCevTUUyDRmDDVgr54mF8FaxTz6Y3",
  "key1": "4RSymfHpFuy9DdSnwYTzhuEhphPxnxrYuQimnNbsjE5eW6YSoByuRjop2HyerJhUQHjtmHwJRzxUvbQ5M7CpKP5P",
  "key2": "aydfAPWZx4PuQENMmcgEhRR8GJ6eEKm628dSfbSvkY5Z3EtFH1ZYYaHeRMnqby3Vv4kE6FW1oDxVLb9NRh1jbYj",
  "key3": "349qVsATTEy6zTLxE6tfR6KhQ4TDxdZ8xAf63ypx8giZMZeziztiNJKwQx8WyP7QmfcN7aF7pyexmTVX1F5qiFDx",
  "key4": "4FzoHTsqqcv72fzt9tQ7uctMTqmeMHPqwbWYF5j3i1PE4cPGuZtbnM8zdtxGium9Jwo3zXLDPZmYSxW1xPHDWQjE",
  "key5": "nYQj9JyeJjNKMFEidQcRc74KvbVkMnTE2zE4Yo6vSwg4DKuFQQzQMNYJ2G1Wmd8JaQJjucCj7RKfwJAF3eMKhr1",
  "key6": "93po5upaufPNVhoEc8nMM4NjF2APDVsGH4385e7jsmVtNY4A6B3fPBLdyTJfAgNi9fGKjHmsUfN8mXbcrDsedQ4",
  "key7": "5f6wrWFDMCYWe42xNN86i6RjEyXPR6zwWryzKf72Fzd7RwUq8XaXaJQsG826ZV8m2nDVKb3ygXsnKCeho5MBeCBT",
  "key8": "4ZoffkuRic29NBDPameUowQASr8oHgVBKiQ6bwN81qbomtwq94ezFkDpqiZSyabctrcD5nXREnnsXe8o2TAgTkQm",
  "key9": "5i92kwp3qyCx6ZM49UUnLgpNKbxFrrTNscDG7tjaFMftUA9w4ETefmWbLioxcKhjU6wryABemn1vMXFw5hsFMopd",
  "key10": "jjdKky4ee4uZSQxBSUok2mAi9c2cRPZHCWVMFCznSDAK7MCR27ywCBCVQ6XeEQZ7wwhzg7jMCnh42XTePDpxCUx",
  "key11": "3DKc5TVz5aVLF8ewW9kr3GgTwAawV4wTskMbrWccjMVXvCMdegLLULP5Gu1k8EMKm2YJhRKiBFYhD7BRBLDzL64Z",
  "key12": "4SgEVAE5a8qvrNZTfAbRVNVUphGuSGMBYtFAjxbAr82XQV38sYpwFLEQLhPwojgCM6uhJmhDd48Un7f9pCduy7Uk",
  "key13": "2CW256MmgibnRT2ab91zDwX88geEXapV5aXfGcCGUX3npq9xBiPn34sMNKgdt89A2fMKzXmS2bboZesw5WYcA6ss",
  "key14": "MpEFj6cpmV76BSN78ngcVvm7Md1YBkgLmeP9d4pHgBw76fMEpoTqtn6pBydc7X6w2javz4CEQGphjJJdgeCrEm6",
  "key15": "NUdc1LETuM3VPqLJgmKoszZd6jC4Zrt1MBSrSLvntAgZBuzZqrYk7xi1HNcQvFqrcD3XaMD88dhDxth6h4iu7S1",
  "key16": "25MQgvRUcqPaCLK1JCCVEEm7wCJdTc32AvB2stCKS8VWECjPYzJsGooBRqiC6GaE6r8jmYcqfDVEWBCyuMWF6zSf",
  "key17": "jn9UERugz1YmDxHH1hJskriSBy1hBdGmwQRpscrX6shdTGjZswUPkvYNmdoRSg2JgzjZPRqjuHkjTZNdQWPgp2d",
  "key18": "1Tzw8DDbgvczSAd71e6NHoUdEfnD6uNZb5wgyBRc5EbByU691n6QMnWXEyM7qQpR6Zj8ndGGesvRmyrS5XrXLWQ",
  "key19": "3TEQHds8Sa1h7SjPR2rX7ikUiAcCowNr8SXXatpQUvCrFNFzkuuTKEuzSqeVCZWZ1Xuir2TbQok2CdiuwV4LuTwi",
  "key20": "2iBsTbTfCDU8VfvTaijUxMip8QP92Scz2jPQKBoh68umwB7o9NWqLHz5Qqakz5zdsZ9ZCDm4eCWCXEcLqreZ4oQW",
  "key21": "cjytLUBGQnsdeix8DvxWG6vk1LHzMZCD2XLFbxXjDQckdYRTMy2EAcsjPjcBA2JAp1oatHszWf4gSLqLvvH5cyt",
  "key22": "5vgHgVa3gwC2Z6ZcUxJr7UGxZKjZ5a3LXFztFuUeyRx6YsZQZa5b6cEFZV5G3u3G3HDgLgB7YYcdTKutnRqRjCKn",
  "key23": "4fewpwzGcsHEzmmjir6cszbsWL1eXSLdHYPyMWWJsRLuPoaJeRLYM7dDD33eCEdwhLsTEJbmjf1dAje5bWer273q",
  "key24": "2pEtrUCMVdnYxbS6nKzMEX96bRJ1vbZ5r8CPTZB43BeeSwjbmW8z3H6c93XVGUTdRbwF2AaCgVoxCWHnW7k8h2H7",
  "key25": "YEBTTYP3ogGYDcB5jpFtVNwtADRSRfnnsXhD6LBR57WZA2QMftWfHeqaYYpL6m16E6QZcRq4bw7RMgZuAJKmm8a",
  "key26": "3NbmvhZtShjYccxsVrGTZzwCP3asEcrBckYDGaSf7r7EETDgmoiCeniSQDHxQKn8cqs84GwT3QBGYjMgPwm1KWWb",
  "key27": "2z8iZcrccknom5dMKLw2TXLNFdnCAv2F6jc66HGCS3guFzwQr34BLRC8H9wmAAJkaov3xiWN3Ltoz6Z62pG6atze",
  "key28": "28WVRpFJ3sgaLVQm9bHBoM6gBNTCyYRKnFkc5p8LCXoBUi1sWGAnadVzYHHRbu1tYH4wZyXUXpXwiripgvaJg8YL",
  "key29": "5c2AF2wAivqaAgpjTwxmfDGpWHarH1uXQ7Pb6C65ZoroHKyPPgey9KQ9NKcQNhCrBqjnqFGjJWjR5SETs5TdK56p",
  "key30": "3VghTAAccqQzB9zXEH9dpbJkPqG6W4cuheXAHBbRRnZRZ7psgzUiUGB3XBR7NpcHux7t7w3zjoqYEAzCx4Rgjvay",
  "key31": "eNxrzZrhP2CCcof2k2444h9Zte33qQZ4ndZJqo9qMeZM27816HMstciqhcT7dQSDe6bBVdTyJDNHrmjiFAEYsFu",
  "key32": "2gBtUmhGTGGb1uUWq9GewGMy7yEWH2VKW28Bn8CjRjuuJXjBtQccqTjYJtcbsc7gVSYgvWAVGCtBkcNB2Ygr4bsh",
  "key33": "64zoKQVKJwJehfR449XDMki7XPie5TNBWHq2Ku5X6s2xVPpeegVjDEzLTFRn4qZerCFXUScHhQNV6wc1BckUFNu5",
  "key34": "XTVXFxjws3oCZytL6J5BK3NXMae32BwZep6gbTZM6fEPNAUKu2d2zQmV7oUt8io1PrHaaU8z6ECk82FzGjLzwoQ",
  "key35": "52rsFCsJG8mMayRansH2xUaxKQyAgFLXeTpYDuHXSbNeGYfVzZD7XUyKmTRg5ta77tizYhEQpLU1DZ1DxYkV1Hwb",
  "key36": "4LHxjDGAXHfL6MDKuNLg3AiiwDNFfGbWmPavG6mH9Gpq4JqyphR8qMPS4j6nZjNdbmhczNkTZgVwUk2KqYTpvcWe",
  "key37": "3dPHTZFvU91J5RpHBjLcpkXHiJnAHD42ho6y238McC3Dj3RnSS58VA37sPVR4435uV45pjEYU1343U63vfRXfnLh",
  "key38": "52RakejRpL776EPujf3h9N8EouDQsFpa994nHuWhsRKS6pyqj3cMpk8tE7iiZ8DaNJCGu2JNrYnLJ8dCAF8maZpH",
  "key39": "2NVyEHSP3H5m8Fs2Q7b7AMoqA67xqmGGgiGyHA1cXz9HQAnNmbezSe1hXYYGp9atG41UpDheiyatnDPcu7gf5tQ3",
  "key40": "4ALBVTMSWn59TC1jnwDq1gDG89fjy5cdKJwfwrNXMBoaQMnxysJeM2tg4upN9o9BKB8tyszFi59i3xhoytXkKHgx",
  "key41": "mJC8guNjYJE81nsDV9AHCsP5Ls4PczLu3BHcYRrhS9rGupcTdpDUYv9TqhMAGPcrBexTUtbzaz3ZD8cJx29yi4f",
  "key42": "LKXU1XQYPRv9cYrTNBkgjMMk85Pkn8ouQvKT9iQMYjXJGXo2ogSADvtkWP2teekNvRYYReSVd31RvScLLrfoLuo",
  "key43": "4U8QrB89AQZn763oipLbcQvhGuc1or2d5E8qYZqXgw4AppVdiNcKNpoDgJCMFpRnfbApbZB7b9AjcE3TM7UvKaTJ",
  "key44": "3uXaRj5V6v881C1T2UCUyo6zua46DUBfyfUeKaRtGTQXQ3FVsVVq7mqWPCmBUKbPAesS5ZMwuwWFqnqnT1j4FiAF",
  "key45": "4vsZjtPnQSRacjNkbxZiQft69o1E1EPCztiTSWWK7NrbbUB8voW7P28qQKdYDM5k48UZmndZNAhoJ7PWEWeJctk9",
  "key46": "4kKFUJMNYeYXLmVPcjYg5ioP6eeDDxPJ5HFaH5TqsBZ7EcQXQxkoKx58ieCDZ3GvdsPDdrH12uvauzYR889Jig2Y",
  "key47": "51De8BoFrttnSMFk2HFeZVycuPYKXxDGVFxtAM6Ht6vQhruKcwJX3m9mCuBXiztbCFckkU4mKMRfQBHYVu2ZcYUt",
  "key48": "4HiDhHVuVP4pyc4gNgkn2L5eAdVVkxdnKkF2eDnH8uQnLrqWd28UVv3Zdy6RQvtvEbgQ1ntG7mYzL1gZThp3ExM1",
  "key49": "678EXix4mKpZoWdRPK6cjQyTGjbyDq7LaYaGQqLiJA7zxWJUQez2QRc7dDS1K4z3GNwGFdPNAsbxDUNqe9W1caNw"
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
