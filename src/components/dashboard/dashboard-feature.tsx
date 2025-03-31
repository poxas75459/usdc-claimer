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
    "4L6f1vHffWeL7JT8DZJiLPPkKAzRCabyatEN63ujTCwT4qiyPrNitoaW5QsUgTyfPpoQE4EceF9svHssLrSbitSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vGWPsgvsY47cuoBwZSMfJbxEs8nv979KTHy32fRdByhfqNeDGeRTBgSuG3mJsosDBvkW5j18xtaS2UyMRjDiERE",
  "key1": "2wi7R2LMjCRNhwGAmqm64YUj72ManLsP7oiurBJzy65M9pk8wL5YxowHabKN4ofyq8w6mHB5ddhAUhsc8j1N7vk7",
  "key2": "yWjq9DwEpKjK9RNzen2kMT82T7sfWmf7DoC6RKpdtXqhRZrRz9bQ5PpUtwetnkSeJVkaYc1PLDej8cZhQ5jiTsg",
  "key3": "3y7nrwvsVScsi9WJe1hhrsfgLov1DQsvvbhUwPfhCqKj4UhjHEmTRu4wvyknP97GjqYwQVh6H5CraDBn2YKKJXYM",
  "key4": "2WW9T5hw9be4FH2kaUf8FKWCegmh5fXXVhesb9oX29z4AFunGFTwippMP7HenPZSiHAtBrJvzV73y4P2t9davY95",
  "key5": "3HDE3yL5uLS3YMootKSqDb5aRoUXS9ifjH87JNXWzy8Ej7rKWK4u2FfhLhHnuttHF91q6oQgkS8nNyFwnhUuz9im",
  "key6": "4WNbq4pUEAT6NhkdvDsKd4fejpaP7qJHQepzdHq31u4L87hDjkFkFXEjQTTfprxsKLkgQ1N8wrkc79T66acYbBQx",
  "key7": "43bMfutxjXHXV8oTyyRfMTYpZwSGi7SAtmiBPz1wCeuDegACZktw4XtoZTnrdYoH9ceGSh3RrwtTPeTDNrYZPBVc",
  "key8": "2aykBRK4Cx8kHzd9mXqs4BDNkC2r2ZdLXZ8faW6DLY2MERRg8M5jxBRUNBCpqiYKtJrKDNAYawDT4PMNvhyCf7jk",
  "key9": "24aCgxiX38DREkhJjpcw7NHMTnMQTNqz6Ni1UpKU2s6x2xcQ3FiV1SPWPWA4TC6CeFtqkX6SmUSgqZcTTUhPjvZh",
  "key10": "2XfziCUMWkK7veY9TaR3rkq8v8ji8cazAYzcbboTx4GaA9dZUBNw25ME83SeoQLN2F11B99c7gBP9N4yS6gMaUxz",
  "key11": "64LLgEfVjwtv1a759iZeFAnyVkceFpR6SARhoTWbqgh2zBj3YDnsZXLE7at7BvBU3VAy6YX7RK4W2ddvyHPw8jrm",
  "key12": "4GxgAS9VyH4j5ZVmZQ6imFHB5hZHFyUF2VuTMYsk6qhgi5LBs9HhM8LK8vHBvXNzG5SCb7mYTbLXwmDTH34t7NSj",
  "key13": "4eLeTF9sZa7fFNZzfsRLKq7W8C4drbwdjeJLQLFKvUKq4G3uEmdMps1B4WMYX61KGmbsLLKJ6bfonX17wArBKobY",
  "key14": "2DHmmwscBJDcn2QYLxiTbFPGotgzJGUnPEabSBoqRe4FpBnbv5x3De6UyafmuLXag8o7q3phx3WFdU3bnWDkaxPz",
  "key15": "TH7fYDniHJrSMX4TssyTpAaCnJQGrSwBMc94p421uTRfxak92t9wWUxmMYtQUsL5fdhoETYrdZkqZSfDue3McJG",
  "key16": "3999QL2sn92LqkDkJbAYVcDm4vn7MAT4gMcqySBy4J5Ld3QHsB78V2JP2styYqyveatWF7J5KUUfPzFNFnzc9PRF",
  "key17": "5idCFXTTLYJs3Wuhpn1q81vxL4TGahZAcB5Qyzb8ZwBTFPVD96Lhf5FgxwqwZ4GBeJgiRupTJrd52wDNFLhCd5st",
  "key18": "5efH2Kpzdq2tN7SswGYLx9ARi28sQpVjTtSNuwjzVdJP8Vpd1SEX4ysXkpLwQp9Xnq5n16E7Zcmc8ZCYcamjwkCc",
  "key19": "3LAqGaeoAkvWWiuT6vg4tHsZfRD2DwYeXXN2m3jjZGTtFn9z2P4Pk8fGHkTFbafArDACD2ChuvCi4PXUwsBb8YSh",
  "key20": "UBQRxe18E3RmADXwMKmpTXtmsTpoYfXTGmdUzpQ6brXSgyX4xyEF3N4JHGNu46m1u2Qa5Du4uBXJJe2azTtQLpc",
  "key21": "4xm1veHiWCZpso5qThuRoRwJoiCZPs1nnXivE6o5sW9rsLvwSiqmmYyC1jGAsV4CSn4F37pPwKXGyYq1ac9ayhu7",
  "key22": "65FMkBejdmZE53FEN7c4YxPnEyEmaVANmppegfxgkQza3KuK5J1FryVwxzAFV9r3k7rpVWXPDpkc4V4Afg8WKrda",
  "key23": "37CYWUBV42qZ7E9dYdvCiBcq1PqjVYgLkgpyWvfBb9TReXsysqTGKehvkoKyjy5PboWZ8N1LvSNC4ec19WrfSaac",
  "key24": "5BT9kqomvGXMW8gGC4EbVneCtjU1uHdT6vTUx6rufMYDCyhQZ4k3T51oqeXzRBV9FPJcG2ZCySD3oSFubDghXVJC",
  "key25": "44eWUkAvaE37JbAwbnSGbAgfQ3sYtSoEHFFHSVXFFtDF7GBgKGm7D2db5MHavbos5HJkfhY6mSe1Bfqnco3qrXbB",
  "key26": "4UG11sFE2uvvpFg1wAquBRmRi5pLcS4GcdzmToouwz52YvNDw6S2cMTH9ip1Admoe5N4TU4rbkXNvtFsxGnGVCAH",
  "key27": "PJxogr22hMNXGyvDSs4TpM1Uki2NDw5pMpPzFwhmn3HdwSp53MsY7pcgHMfxTACRNzKFHjAtabpTzwEjX1uyun9",
  "key28": "5uiKcd57KgaYLE5PXeDBMEwjhvgMKDcuhsZQ4KwrguGVhD7VppsgwPYwsYbnUUxbdLj2CHE2z5amQMF6x6R5i6he",
  "key29": "3Lw44fkS9Ja3Lp9K5XwF2HVfDcYhunoKDVLTxoKKf7HH9cnDzP1MwcAhypHAWzNoy8qJobybiucYYM9De8GfGMNe"
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
