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
    "96nmc7ZGcbAgv75vUmEFZLZhNytfHR1PDJjDMVqq9xkWVWHWZWJDFmfoJrcBMQv7Lx7G8P9x3ooTSayvR2zQZwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iGaQRfzp3oAAaz3aHkehEuhXreGahRKi6cTcidFi33ubArEiPkFquaSKEhoWk1MPFsb9HhUCTMSidfigweped9J",
  "key1": "58LxbgcuPXBKrbvtzvTvBhDxaePvxG6K7etbeQwcCgE4qMMUEogkWFvBZFXz6dkkYAn5PP2uTZfc5Lpwmoir6ddB",
  "key2": "3JGSncUc4EUPgGtgN34k2a4kKu1pRDaKaT2FJm1jph622KFtx6yzcmcmpVmRCGvdhWJ1nm2mHzdVPqR6ySoZZuAm",
  "key3": "5wku54M8TbpWHxsvRppEH2gnatM5WPddtsemigFKECzSe57GB4HLEUAnpvaGK4RxK27xAsPYmZE2qqEnbw6L41Ta",
  "key4": "67X2MTMhvr9Mr3tdza9snNhDwYdKaYZ9e7HzGFkrYtPmYhpW62fxKZs2zRCMKQV9dTvXcfg846T8LmFDg1W1Q8zc",
  "key5": "5TiXcsV2KrmdR179KYcNGtSXQJpzsz7edJ7fizdd4Af5R2q4MRXZtJjtbBgHEK16FTEPVpkgu9AEAKS1g8fda1kp",
  "key6": "cPm9tPEuzfrREKwBWFKi4cgiASLG4vnxk8T7aaUEWTAVgGmqJoYYUoTsZYwZ89AbobYdWoGTuR5hW1yAr7KJR2X",
  "key7": "45Vpmsd9Aps9nv1cK4NkNetDscYjxJToLEZ5skaUw6YbfQjq54aNgB2hDLtjMEjifemLMJspciwPaMP8qy94jUdv",
  "key8": "2rdwjzDWKuAqv4DacSwF3zRPdfwUeB8bwcz8zmXvtKpv5LY1hndWbUxUZBbBEtuvHC43kesfrZZ9B8Wzn759kawE",
  "key9": "5WL1r9S9fPAvRGSe3xR5Hw91j82UkKdKxYfAw2Re5FWvrBLZFU1w6CkQvCchm6tSjFMzXTBnhbFiG32t3xcMYKcT",
  "key10": "JrM8w8mCL2tQdpC3Ct3SYVheJhxKzoQjBGrroxA3XP4asWzSXekdPNuBkGh6iBqYwyigXbRVAPaeyFrYWYoq6o6",
  "key11": "25MrxzknEq756NBpRid38iPFKJ4e1rhbigyfXxP7o57ZykqESBANNyBN9Z5mTtv5Mx8SYPC8NgQAe31w7PaK8jbi",
  "key12": "5gNvDq71dDsM38MFuVkpWXggerw1nXKePZ8BczHmupoEQGosm6nERk6rd9H3JqKGQWkMok5obGTLtDp35VENuQhL",
  "key13": "3PwK4v8uJ1bqMgghTSCmRy171xE6RocQzxhUK5WQA1wCdicTHezstdvvskKhig6WHbpnnyLqW2rtPkAgwniQxQrF",
  "key14": "m1nJy1U8knubtsSj3hCG2NXUYfGNqHQrWvZEP7yGtbtizuZreebrHjQXeXHDRWH7cjS2KdjFboAHuyHR625FcJa",
  "key15": "33u7SqCvYoKKAbo8n1LJk831WPnoNrkL9gZJQk6M4CQiGeZ4x7UJ9wogDqb61L9PRGxQmhZMebSvxD9qPYjY2aQQ",
  "key16": "4udez8fFajaA3hmqUSsh4vURt3oqDki8hAbUR5prqVF77dfJmMgQJAukQKb8JsmXoQC9FdYziZnybexCmVe88juQ",
  "key17": "4pFxCR3Q9daf1yg5BPE76T951t3KFw8hLiaCtzsgy2W96vLaimgJQjrHKBejGiNJsNxvcgKRZTxwGBJ2j3qvp8dM",
  "key18": "45MAKnXpa8GeqgWs8aBSFUsnjY2ZBpDuTsbx95kwB4rJYtBfqDmkirPk7qPJ2ndocojGFbVzaBmr2eZC5xc1SRGn",
  "key19": "25b2m9U6vNCMVnLfDJS4fP4kkuGUcwWkLYBGAMkFMPvxLdMu6G4eQ73KwhmpVi4kD7BkfaGfop7RxYpPbsgb65gN",
  "key20": "aSB3mtypDnD2wr7kPabpGnBTtiqVqgWfktVWSPZqRwHf8fmX5Usbq3WvhdZ7pS9wKrPfCAjtbw7DzQVqvWfNuBh",
  "key21": "4zv3hjbKzpGn6MmoFHzmUuuotx3pefzUCPeQB8xuknSQMr9F8oRWpp9DPdCM2zcn69Z6fWxwZzLYxMxy34PPtJVZ",
  "key22": "532eRGmQ3mUXeQ4CVcK9g533bPctBsUurM1c77tiopyg9keZPyARSv1T4nh1EouPVeDRDwA4qG7rJo6zSxtMg1nm",
  "key23": "2sgStUJnMP8UTvG5i2Um6EF32u8HUCDbeYGukB2YtSs3WjUEMrq1Enx5g7S8ZqmZtYRXf3tfHfGSHYawmNbfUQzc",
  "key24": "4SXZLNzP2TZubVjatyh7xa5KafetgvTDoWw812Ji9xwYNTcFJZe8atxvVQ5inVaTvKeXiqd7LvHTTGhD4FJPVvX1",
  "key25": "59NGoynC1WwrHoPtBRnoP7TCFsTJksbs5K94BTt6AeMQBZwBtfgiYMHVEYRyrqgA13zGN2FhRyadsKtTj9YiWD7",
  "key26": "3F2efHwFfYY1uRHKizztxM7Ak4Eif6S1wcE8ZXjsCtGoTEdKS4ZyPzVjdyYiTqwLEFwXfE35kgPxkzuauQDBpPUL",
  "key27": "4gRsCi1cFaXYwBD4YauinTnHMPYWkU88VTwKUh7wJjQA6nF6c7pXzy48yeurErJXhbKAXygz9arRDMotC79eEpx9",
  "key28": "BweJC5ojYkiNDpsqhJFsjNCXhQ45tFGXLatWZJwY7shAUDUXC4BQfsGabBiYRsGx7QFSNAuP1gbH1FmKjf9jBNg"
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
