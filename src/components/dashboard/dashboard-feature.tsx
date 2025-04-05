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
    "4fXkGsjiyov8UHHXaP8uc2EfdpFMsoaFehy8LhERbHe6jBYTXWGMViikwv4riXjFhJPfUcmQ8vCWQAJL1HeeruJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37wTmk4KRFQLz1t7SyzrT9irVNDAsZEMFCZ4Bm353DtZHJt9PudUgGxan6MhuKqt8kymMpkYrYQA3K8gncntw2v1",
  "key1": "2rWjzgPP5bcvxn2vUPGm4jSSReys37ugGibd5qbEsp6KjqGXCc7gW21zk6oc2Q5Swv9R2uoMJuPAtkpxd6h4qmGq",
  "key2": "2DqPExU2gGxVGDbHjKSrfm3bZfsGVX1KvhNPwcnC7hH2M6HVHb5N6wkVUVZwYLQrLXd3k9RQ7WmsiGfVi2CxtT94",
  "key3": "33rfwGpMWwM421cnxUL3qDFTCx3SrmJYHXGK8VkSymK1JNJdWKkJUtPYcagAVVLMiHEeXQfP7UenyXCePgM1vf9w",
  "key4": "3iQaF5Q36vnmQGiDc93nyvZYzgKq7Zb8yw8DCgLv28jAdT7t1R5kvJ3dAGLvGtGjKYV1jSYNNWRYwGGmwMR1bKH",
  "key5": "3djioGbFCWqd7Z1xcN7FL75kcQ83zpxZmNdgeqzb9s397eAyPrsMDAf6mczBWyBLptK2fJkhTDsskP8ZZMe6BdqL",
  "key6": "61LyS5kkKCcnxPMapAGPWVGrkeeKC2JT2viwz5vo45YkTiZAa6kBbPvqb73jihjmVSyCq4VDbMdZqGJWF19J4uNG",
  "key7": "3kPsHUJz2Fwt2KDnpZvKfj9dmNbFUKUxiov2SHjoUstpPDm6az2rked9cEwcEYUEjAta6HDzMRPC7ntztVuBehgF",
  "key8": "21fRnReHuM32kGUYFUBUSodMiXQz7G3g6S1fpeCr9VbySYyTW3MxduiZ2Vyke5cWvXZKUWAZNWYS8Rmvv852RJTC",
  "key9": "gp1MhrVpnEdujeijrnCmfE3KP6h9zgcNq6My9PX2oUEeDwMdwyZx8v9jdGUTriD1sCC4XChLgU8AmTpP5G658XX",
  "key10": "2LYAtV6aDX7amDM7NE7BCZUyX6W21uTWPzeBiJgLQwgLQcH7jM2SFygEP3eSCjcsYE6A5TUTXd1tR3g6Qka78T1X",
  "key11": "65v4hHcJSMpae3XwxjwBtHbGaD5DVGTRTZjp8u2fSyfvTqbax4Km7zeLR2C3uF2uSBJPRaQmfGU2t9pqyLUoxD1C",
  "key12": "65p7WkKBizv99DkBkw52HDefHu2eNgLaAVVjfoPcJmUeEDwkmhTrRjhwjD8JMuhb5zk7jxUm8GRSgcZy2go2cbSP",
  "key13": "gz8jSmqSe1AzVEMM5K998hCbLWpj8LVissJmV1KGAA2etjV3ETY71jZFS9fGSHtefVABokUjo9gk7dMCm2XEDtL",
  "key14": "oYFV22vNWqGQqsR68VvdifWpsqJMmB4mKbFyjPmYTn2s7gvFLRF8L5iXRVGs5juMksUryvanFYz8bXupeiNnFDz",
  "key15": "3ETn38ThghnNoVFLF9S6oEc4bYukQ3aiudrcVmB8AbcQEA6errRtbYcejB8y2X2phn99hcLBHJ6bw6WUAG2VYdqC",
  "key16": "2pCV99sBwnNp83zDNCkVVuRpW9T4MoRFqc6vaTaqxiWG6VSJG51tygQwHYAFFGhESbqKxDJ9K33G7qjicPjyLeW5",
  "key17": "4Un985XcFieajcYF9ogVG9q8EeSySSN23tB1w5pkrypryx5JtoVsNfpAWNRhQDgRnVNFSQYodFsuj7ksFPeYF9F8",
  "key18": "2WvWC7TQBRPW4dBmZVQHyBf9W9x65kzfGVgRYMF6vzhh8V9xzUoU5TxtWkMRZxRrWBoirZTTdm1n9tdeXhbZvoJy",
  "key19": "5sMq9ESm4gW7EoChGHPQgvFQjATMAnD7snEsKo3sTvvHjS6pD6Poms2onnXihjRRQtTxPXBnb3dSDUrfDew9ZdZq",
  "key20": "8LytnAE6Sy8R6rHxqsFDinQjW8PDhYJCR6jW2AeE1KPP7gFibfHRCBTzGaYxnNd4DekqNBdreEtnYHyd2No2rqC",
  "key21": "66eXLwiAR28QjxhwUSrMrPRWQipQv1ak8EBk2ZWXxnARAPLm8GKm3EuCXDy48eS3aYjm6nRqb4HvvuETRph285t7",
  "key22": "4wrKeystmi11JeGou2mczQZkBf6QA5XRG4FMYMzZHXW4iv8o9tUwwwBJoUFejeoserKYBuwbhuZRQk26RizxzxL7",
  "key23": "5az4eYZMCF466He93iTy23e4DewtocSh96Kvw5vtzXNCyU8esRx1UVa5v6kNuqUtCeDstptCT6NPqkNKcsCYf5ZG",
  "key24": "2H1sjkxTCiwP9e6NAY37KZD6tcvsewxuAcijo8DhW81oQx5evAoetJUtKWDnTbG8DyPiECp8AT6Qf4oBVpGNj25r",
  "key25": "5obzicideEzoAQfMHvXmSieYtJcBhKPZgx2AUTA8wutHsAmRBvH6mq7uH5jhJwUjBf3P65ggCZtbzi13touGbzrq",
  "key26": "3bA4TtyPv9QDxAiWuS7pgm3A6tjfbXSnLx3aNWBsbpE3z7uuExJYp23SniwZecK7CT6U97BqSCoUGmuGNRvAcoqS",
  "key27": "S5PmcDtkGKioBbZWjiFnHjop6Xd2XWmMnHnWbVL6TdfA3biGSRAYb4b8pU9afemu8RhBHCsusfcrHx4XViHxAQd",
  "key28": "3ZNSAirsVbxuUk38Y3YBXGiHTttFhEwfeF7A5VADcxYBRuYT2et1XzeqX2TpkrysUT2DPFNC5gb3JKgfnZ4gTky3",
  "key29": "2ZTGYRnRY3Q3ZsaEkegLyjV57WjntYtxtEwwKABQG4nzY3YNNxgdAMJm9vfcSQZmBNytvXu5eoSqWGqbYrnUXCED",
  "key30": "64vhHMUsbHAGMB87vuXHWhnnQGnYTBLuhfb4aUnrdmQGzsYdnUQw38QCqhy9F76k8yz1pKRPV1FocFszbR3fu5A4",
  "key31": "3Bh6MVovkKQCfhU3CPHcRx9g4aXPgrWRMCGPuU6FNFEwRTfrWfiuk7FdnSqkeiKsKy6fhEqUdKkyy2yCNvgYNLv9",
  "key32": "5RLUQUQRp3GwXMKbjrPZm2nXs5KG5WnAWQYaUPjKnWQRjoSnhVr8iXBFDFx5d8KpVr5ypywZ5Qi6dMKxadsNxV13",
  "key33": "Y3R7kDcg5pg6fFJKs5gPHuxPiiXSeAgVRdcr7aVLVAGpYKLxjwCtAc7S9sMzgLT3BD2wZWDCZqbYVfPn2F2Tfeb"
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
