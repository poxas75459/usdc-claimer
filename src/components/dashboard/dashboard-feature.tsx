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
    "28cbEav3DVuhjek4R8xzMYmkDXRMfoNg75p5k7WZ7JB5AjQ9V1mgprQGyDCKEgYsJFf9aWGxg9bnfUNLmBaHWv39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ya3Y6JKURSf4BAvnyoB4Z16DfqV7gNfoaUWcczU32czWnzxArbtLRjZ86erewAXJ4MvuGjMzAychXTExv63iCKz",
  "key1": "2KHdYJQXqnFiMF2gMZx5TP7zQAmpNefuerQua4nGBFkLnKcpCvs5W2gt9NSXZ6w6a1ib1LrKps3wpASBMYuvMa6R",
  "key2": "5ct66CZ59SfWtkqvhNQpbyxwkN9cZ2BUTts1s6Fc3BcuXhApDQc92MHtLaJjUmx9qsfPEYvwQSepu9taWcRWLJK",
  "key3": "CRMm1qyVxskiiCNrop8HdgG4TJwiz8rtpSkDnEj7J3k3d2kNLhpdPGHPxkK65qyhZxxhPoJMgKnZpypxBibY51V",
  "key4": "4kmRLUfPJVfPVrhMxMKGspYBBS18Fn1cccEX71re2k4rpXH6WoyuXsTX6R5N76MwWPMNYRT3RgWy7VU75abvHdAj",
  "key5": "422WLKsEE8ZEVu1MC8S2PBb4Qmi6Qcuat6pZpcQWM7TqmTs6cF6haCD1JJH1yt4Eck9fHst9riQShLGvXC6oX31A",
  "key6": "51TH3tKyfp9WhzdHd9emY3GMyBxr1LhFMHTjNWxtehfJJA2zto3VB1hKT7qw3wyYRQb5eddA1K9WbZaBdBNxinDP",
  "key7": "3HcM7RETe191EkaWBCnSoCCqWqQ4vWXQv6tPWsC9ENvMeEPSTsShYaFKxzanbqvqyhPsGgnSvez7YCn6AD6qQf6m",
  "key8": "5cYZ6BnGse3VgPt3NPDznikRW5KvxvCKBD9gaQgcqbmx2Q2GqUemTaLabUkUk6eFyeDMpjyqN1YVvuwmStMNuMFu",
  "key9": "2ddHpRmuSz8dwQDfkjtDLRnnV4fkXwuT2LPYxxQimeNwoVtJHryL4QMWstycEHb9wXbC77529xUp4GS9boiyiYn",
  "key10": "31uNVJh7dVq6i6xHgAAABxck7S8Crf2ugecjdbFgmdM98tLvbzfFjxiskPi68DH8WgQ2Vy4Dztd5cq5qwWjyHVqH",
  "key11": "4sDGmKgQ3naxb7MgBRPNDXuFgxaGNCPZtafi42jy6UG9dBRuQcFhCAFn4aGJ7w4L3sJhG8rFRbt7hJdEqghN988u",
  "key12": "5itcvjGgDb1JGmXyN6MS32QzbSkW4AQazcjMMgRDT7uTAQrKDSptCha8NMwTXd489MkgVYgLWAitBby2AEXnsevh",
  "key13": "5RortCw2rCrFutHjeb1cxJWorRVYTXUKYJ4W3NtdK7KZUJUn4Cns5dePtDjEyUdkp1Thh4o2ot3vNfsHp6gfzKLt",
  "key14": "3QxBsZFijfGrSsm3BJKEXLxadQyiAdLddJJ7N8cDdjzjZQwqHp4q4rG5Y7D7cfRKYsgH9M54kcm7QthiEahFLk6T",
  "key15": "kwr695ptfewxzrVoLU5vNJ5CGa9t9qfMYToZ8emeYoXaQhfq5dbRD2NaFKhQSS16eF6Utbbz51TLKRU8Aaa1oR4",
  "key16": "2aBtt4xnUuTbVeYLbvpaJC2KFMut2v4JuYWjS726SzWehiWatNmUmXa4K77d46PFXKFRovc16TUan6CqiXqed6j6",
  "key17": "znvudgHor1WuyomeWCEy1QXeUc1z9Xkt9gJt2THQmwnKJxQzJV8vK4fGVRCqQJ2rf2ya8Bp6NY3aSyY7tE1qPjN",
  "key18": "128EsVmjsxURe6ieZ9wKG1rw2f5VxNtBQL5m5ibtKzG6qjs3F6iphafKv33pJ4eazSVYSSHJ6i4P1RmmvpWUKZZH",
  "key19": "3q1kXeVwYdAdRkAjBrirgcEKgi48XQtcSbmF7vmznUefTnZeeuUzLqSP7JdcY6gZWwWr8AoUrZufHs9q1Pu57Zwi",
  "key20": "4G1pDy3khpVnCEbQA6JVxpUncdr7AXe7ZdfcPJjjZRS2y4S5GiM5G1xYcnBmYvZRnQXyKNb9TxPgAGCpi8n1UBdR",
  "key21": "4cgybRLmyeBzuqt52jNbg8DGsr1WRehLt6jcbWbU5UVKmfxbSZ4bLvWZdoc8py29zEVK9TebN1dfbqxFrbvvB6Mc",
  "key22": "4QMh7uvoQLa7HFJVcdPvh9PZ1nvgHgAhfVsSLJMwFzZnGrfon3dhdVmECAdEdknXASVWkagju3Jxsx6vYrvW6yXQ",
  "key23": "5QsC2mSoiY1AW1Zmhy4fSyW5VSrixY6PDuPVPErhvSCMw683gntvbACdoZm7c5tPTjzGkpBjCmd8ENt51aKNaCCR",
  "key24": "436xeYtdxsXNHvPMwP2opZQsVWhR6iL1XaPx6nhq4mrv4gam5vTfK8vdtpy8Bw1488yVfjmhNQvQFjsKU9VpFrHU",
  "key25": "gLqxnKQecKsDRuhSHyDHjtRZVsLM4CE27pgSjfNsMrAmZGL4Sa4CLktN5prNRFWoAnUxL16P26MqsBEQpJWYLoK",
  "key26": "5vYonke9HrcQFFiCxQnadfPJ8rLLuHyxb9Dtug7VubdQEB65AkhYCCujy8HhBoMxTc2RkcVnBsg9BTHKUFLphHZE",
  "key27": "2fZxh3kcvhvErk9q8TPDo6KKVPDYr32KsaTkPnk9YBeqvVXEvFC9tPETURSELTh9FYaH1SrAhqDY2imWmDds6CM7",
  "key28": "2v3TuVvBBMzUnRxrUvmHL3LDVncfUmQS9k4gW22SL4J6AGXKHzYZpHPMRBuAsNbhN3ExBMiFPvoGJ9fYTDetUQ34",
  "key29": "3c8u62XGmkrJBicWN84RSg2Y4hctKzFw7BmcUf1HXpvmvqyU8xcBQnq8hQ7AycdQ8MfKxV1TGiqdqC7V3XxKMnyp",
  "key30": "2vtuwo4qiVqYTSZKGLUMkz6XorQV28B8Lny6UDkFV97dTmAgUHM2J52AduzeNuuTVmZsqKGraZtnpWzdzy6sxbAg",
  "key31": "3W8M7B3UrCovjXhJYBW2VbQmGAwmEJGGmzCgNdFEwyJ923pxfttWemZfQE1Ky1cmMgX2PgBfHaFneA33HHiGUGKu",
  "key32": "53D1ssBHeu37b69xF3LfnATkaN9WKNAFZYP52kKs7VibSqCPXk5bjLzNrUcVhjLpR4SwYJvuU5qGjVf8CND5zHBD",
  "key33": "58VSSpNYrbXtFu58VUTmpYf6Tgm7bcJLB6uUJYZDJ7AzcQyLH8i4wEcx4UZk45GkxPhNUiJDX5wJknkEnULQkDQF",
  "key34": "2CFEeN51ecJkpYhZCbquQxLjVC4c5129Pq4igmgJZgbT1Uywk84a39fhytZHimuo57dKuToW2MhGZbVQD1cHaWqd"
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
