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
    "2CTep42yH8NJ1egh2zgoEfSKAEcdYpwGYTvDBsrM6RuAQXv3nUTxfPCv5oVJ2XS3VN28PdAWm523bftKmmHFWKt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jjM2PFjbx9BqPefAHCVJSejZdvnKFUEjAu9Nr1Kr3NrEnSX4j1nWrSNztuupuZmUM1cWLTj8e4ryEPSraBdfaGm",
  "key1": "3uRtfvuZHEYaJgYEMaTeD5tFD8QaCrukeA3GP4d6xh6JVnsxS6FBBU4HY8XqU4pipkGNSuhLecyeT7bUyNH1u2Eh",
  "key2": "1BsZCWb9mCKrDMJwVPzSc5pz3xKu38yaiNTvsG6Uc6g166BMn73YSs9LJstU5Emznzms4gRptLc4GSMUXgzLLGb",
  "key3": "2eXYKCt9NzkrZ8adnHQBWvGDKv4vQkqE8PJs74wXU4MjEYHLTVwm5sHpJME6WGZ2cfkh4EbmYvTX3REWpnPmqSzw",
  "key4": "jUPKy5uyHBp7Vxx5a82MBSfqrAmCojFR9DTchWC9XyLB8t42suow1XW7sehCkiUuvi9p4fZ8qRpUu3HyHaQ5Fbi",
  "key5": "4cdC7DrbYhzJ5HSSxXSidyw6SozPw4ix8yMWttVSzS43R3yJ3jtm4mUQdY5UgmPg1wMFFiJ2iciH4EUhsMvDk8nR",
  "key6": "4yCntqmTg3R2UBr7MTFBRW2YVfAb442SyF9ZhKWwNxNx2f3JPsrTXGFt5XDXHCXkMDsuD8oq4LebkpJPndY2DjME",
  "key7": "cVfiRX1Qcf9vg41GYwfn4LeRRrtzmse5n9qgC2mGS8gvn2AoZkZckpxuFZynRNvtSpvoytx11XGpV88jMoX5Rf1",
  "key8": "5jEZNF2gk15eoisUAicEzHqdWqSLFqWUeApSouiNgHQTJaG6jB3m9JaFP3hDEdB3yAKLW4LzuTFsj8x5xAi7u3L1",
  "key9": "3usQtMAJc7UeyzMv4woh8qiNaqKpSzFdrUDuUHQe5bT3FwH7vh1NuNwEEp1AcQWHw2aye4wMSBgKvaoeuXA86xm6",
  "key10": "4Vobf8fWejp7XCcMdsmz36BNZJttr1aU3Msw3K5hidYwXEsv5E1qskJfmMuie3sjJkkQLRc7yTrDyQofsn5Yb8Nk",
  "key11": "5PVCcmW9Qt7aRnvW18Hzu6cmryVhW5MtEZmNZQ717p3d8cWEj4Bs27rFJEiW4uA4shLPKqGN1bKAmgZZhCPKf2DR",
  "key12": "fi1FKNLC4P2Z3q39ZczP77tJhn42zZQgEJj7mP2vorHuCxgQq8tfDNQsSiVsip6XEv2vynpKfvQAAzQddLK4YYo",
  "key13": "7owUCUjjRaeUu4By21tDVRhqwcQ9yyyoth7nZYbMJ8owEg6aDYqZLAqbaRQDvUMrgK5X4zby5xFHJ7e3M2A7cBJ",
  "key14": "bZGMGN5kFsLyXYXrV2BN2Ng1rudeKWN5DxXwr5pnVKDpeDuonuGy2u4y6ihqjYVKqQvqupkcbSUhEeS5FyGPv7T",
  "key15": "44ccVYC8unqrVYy48haLfPchfhFH4AkXJsCkjnP6XRSPcQHypBmspRSQfpvAveeYhND4sAaXLRk11u8GY1fmSgWE",
  "key16": "5FinEp8WCLdA3DkEAdvHjr2BWMv94p4eEXvSaCu1XyMgoygkg2aqgozaaENKSC2K66ooXE2d9MPu2yCz6MbadAX",
  "key17": "HKSqNHuG2vCmWnuEAKbLdcQeAp9uPNnvzzsycNmSbjstKCa33LRjVV1cB9eWUeMhLRVRm5THRtD4f8F9Z5QYkNn",
  "key18": "5d1XioTcwipPfjkmGhkydf7X9vj9guv5Zu8JgW6uEEwREHnLbnHRzL1sxw9THWBYmzvX5VVy65nbCH3BDaeuz2hN",
  "key19": "xEbXZt3xxzs1qM5uzuMte1hK76kJHCKkCjEUE6yo9gHncC3TyuYZGKNGjaRiHorBiSEpJWyndEb8Cn1J3xXFCUZ",
  "key20": "2Wk6CWYEJDeNCYeD6aebAqY8Vv4ingRJfkGXa84RGab3HSPFES9REt8YbvatTpubvQ9wDY3oR1oW69TmvBMKoxkv",
  "key21": "rXyGAcAD4MDpAckxHWaedmXNvCC9D5BNy7hEQQuenutd8fnBcmDRicqWRTqTfyawZjTzedrMayJFjK99TayLK6Z",
  "key22": "5u2KxPryiBZtrsAkcbYiwLPJRiC2N1PEHu9fsZq8WT1WsdECD4CZc5dLB9Uh85i84UzmdM3uqh6PZfshDtZk5X66",
  "key23": "21SGTFGYHVqyE8Pd1F449ReEFpNrhSikF2JP7qhor5ENqaLJAqY3VN7GS1GJhRW8bXwE2ZyasizuZJGGmkissWQH",
  "key24": "4pZHLXWxpBjVyMnEo9J7348QRptWvPNdkos83SCkNWrc41xbCVw8dhk6JVrgCKzBk21WDUEiwZ8jSG1DycnWionH",
  "key25": "yRgAhHyhZKcg8jz3Ndst7iU2rPGrY5w17qnpWa1n5jeKo9DszihKDZjx325qa5TxWiZjaaFh85j1vKeLyVQitHD",
  "key26": "gMj3eQZT7ZF3X1JafactSPr9hW2jeh48baFsqhjqvCSactq6AmHJvQDdmN3ZgJ1RDwr2tGUWce7ZbC7S3Zr3gSH",
  "key27": "3yWtscSAfWs3bnQg9SSXdh5NJmFvoFSAJ4T7fVAiu5xtXKZDMifeQnBxudRJNtSNRYbTcwXxtoNA3KsVTYr84Zom",
  "key28": "41oTC5o5qPeAwSL1GctaHb39WkAuSMoomAXZGrY9AJV6kahzPz9aELXKjy8woNJcGBJHr5ccrZEnpCNWwzRir9gb",
  "key29": "5avcMrnMQDr5YNseCdgP74aaqewiak3AbamVZgM96aUMXRKawtepbqHHNKH8B6qRXJpMfhLZYtVzeU9VXX1Z4pGF",
  "key30": "4xLnNHrTyHaFfK47X2DcD3y6wb6ot1KLc8jUPX3SirDAUsA5o6gdmMLrJUv2sC1hNiPB3YXVvw1FbPkwxm4DV7wV",
  "key31": "2XeULSx8yhbdCdAsHaJRj2Ja2YMKwmexqgzzgyG1afc6RfyZU17AfaaRxMbj9XXJs1poYoYKKftAPzu2XvNgvRGu"
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
