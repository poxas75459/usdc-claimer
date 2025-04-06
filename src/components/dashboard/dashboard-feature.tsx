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
    "5j5E8pv2wMY5bWNrQGwRY9AcPsBaWugArj5CyoJz9JQDQTrRa1KJkEJYDFc527YqERFZJXYiTLmDxvxHoRuJNQ5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NDZ1tW3xJfP2ckaBiAZoGEmpRit7axizLG96CZxHGFxBcVomJPa5AckdKzX95k4AMjd8EyYaW6xZA3MWfwLYosB",
  "key1": "4mUJWGfrV2w5q4Xxi4LWC6gDS7km66TDE7QvdFJi7fivyYWPw82XjyoBCBoKW196XZ7KZSUbVaraSbbitXwJxYiY",
  "key2": "3rmxJkTVrM49VkSut68eeAiKELNB8YAXoKid1fUBxZ6xh45uM14QicGUegMFbPPDLMd88B6CKgn8goBWAAsvspgQ",
  "key3": "JnwQdprzyUFphMyWxP15fbKQh1Xw7MRxpn2wkqs3JxhhtaxomWEt82PZ2NgtR4Z9fKmpFnEpXLJRaGMjCRDY2Yy",
  "key4": "2ro1TnJbJzgrAsfbf9t8a9qZrhu8UryBF8vW6vRnnwYtyY2TF9nHyaTgK4kNQUS4r5FcoQ8NN4JEfo1ZKwQ2fwin",
  "key5": "44F3Yv5bCJVysF9qB4FBm4xRBg1vyeN2nLNTmXbEYxnm9XaRLpcCfPw8Fooo4RWnczi3cPKSvRLGBjWTzoaBjAut",
  "key6": "4pt9mvXMMZZ1E9mHnkeDTUSaLQLSMmrpnyHFj5dECBoHVuuq8QBx9ZXWoSkCynZtP62xwQpBzcEsE6LA7hzKViL3",
  "key7": "LJADa2TM7gCpyBeAVVGcbvExgPJPakSM7JNYsacyD7aKhjddbAnyKy3o5g4DmNvYCMgMgNh8sJpCqX2LdFUZuvd",
  "key8": "4ULswkbnwGJFF43Muy3FTag2m78KGZecPz7LnQcYfymV8Hfgtbiu6kMmKTwpkqqkwCPCkXvRD8z78vqzg5hwtiH2",
  "key9": "4iYYyWPyTmcbWLSGX2T8B1toLxTDSmoZa6cwGruTtmQxH28cy2Qc5K5Gm9cWCBwvs9FNg1D2GgaEkqZZpvpPYzgM",
  "key10": "4ihWYtxM7keASy2Wvriw8v9DBRgziP5yNSLPEgejEgayqANE3EdxrP49irwXDUxUyJr8yDi9rcXqGNKsKTYnBh7U",
  "key11": "4u74RX1KFKj3MJcEuiCAxCTyYVrU6W94wbinLdMbVa7oYXc372kMvo8WRQuRNNE2b8kVf899c2HEa5jJx5pFcuKf",
  "key12": "xkq2vcWHWHJohcByZ7hLxykGzoyNwTcDHRHM2fog28vRRvgrEed5JLa14zsb1QLeLQ7HVMLt9j9ziSY3NgYo8DG",
  "key13": "2zxqMAMw5uD8HGX7vkdKoZyfCzrp1Pzd3cU6VFxeVFwbQq7Ddq9XWmUYt7zaGLPkgHuYffxFFapE2arnxNRYhR9z",
  "key14": "GqKfAoNVjmQHt2dv55oZRvKVqF72XLMaXEn8sg9t8afRSh8pa1MBpfmNmyjKnzK8QLMd543M2StNBQxuL9e9WCg",
  "key15": "5DXfykdfxQqFgttFsz6E3XS7SuDwQLjxc9DnjhmfBRp68b2YJwJimgs8pqgecbgFyC62yWG8ivzQjAqWGeZKqpQr",
  "key16": "3DVUjLGDiTZ8dDia3RuUVpBQ3FfuzKP799GPQXWGXkgR25FybZX1FbjDBYbTdeFwHjxe4jDd9i3LkrqPCSSmLkWE",
  "key17": "62tPsJ1yQu6To4XKMMSkanneXBkTnjbjENdx1MbGcghF953NeEEiyBMGUtHCTsEDJhEdSUKMk2MKnWPdJF1aH7P2",
  "key18": "N2JBHce6c3TqLTbAZnjDxAD1jw3YNffPW7RaziG1SzhiPv4YLh9oDXn5CtWamZaEthHLkb3cyp2Qrt5QtAfYsSq",
  "key19": "4CUJ4wc1Twh3pewf6zZ8VZbYXdn6E5ArdA2ujWzoBYDqECef6bDVbusxW7ev5sTLRnyj14LsETonz7dLNgCGh9pq",
  "key20": "3CEtPggc5EuNT6XgnPvdudoGJ8khYWuuDtdtXePPKzLq2mHChUWqEHGiTgzrvr8A1SHfZJqR1Lnu8VpNEna7sLJZ",
  "key21": "2zG92mzCUSqfd7L56uuqsstMUDvGZmWN3z8ttwECr9Zep8MnjcwEsLDDo9dwhYuhtBcpRizu5wasxE29fB7UPsL",
  "key22": "4fxDMAh1zSY12foG6Kae4eRCZVjqzaTGaLX2qP9BMxjDG6Wmjm11tfDH11WduB32i95xvVyhZf3iZ2SdVCq7mHii",
  "key23": "3pdCFK1jvbDotG9GVwG8QkrSdsXGn12BrgLQp9rrc4kyrRuYu6HShBEAffP1jvjB1fYMdSKANc2Fr2yKX2rnQVuo",
  "key24": "2iT1Lre1YvCSbFAyAaMLzQe6xAYm253kAfnymJdTiELqeUnafeyJBVcBX4gZaEy26DsLXNMaiQkxnnNTXgzKS9RH",
  "key25": "3JeQ7XpCb4yYs2At3zB5mL5DHPw19MBUBLpM1XuTKuGqmR1W6U71rWXzgj2phfWQoN9hXFPUU5CQ7LwosQ8qi6pn",
  "key26": "24LntfYkZaQieudzY4ag5g5As5HJNTqMhTSuf2gY2UJffCC2FZFJaxGwSk3JXLaxwXtukW81yUnZCne1A5pMEP1f",
  "key27": "hGGMYeWLYEUW4bRMKJEN3KHqgXjbDdr4JsqxEskATBWtYgnfiXMdwKpFaXtNXRLF4qfpwDMWDbne5FdoRs68NZZ",
  "key28": "z6Mu3zLWvASUZKFoBXaBfLqi8oKy4GmDy7NkSqAxm161ws3hLUXnbXAxXpdZq96CuoFrDkGTE6QKgcAQUMKi5HZ"
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
