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
    "46RcQzZsjVwBcs4bRGNEY6UqvrdDFcGGNgniK9qpubmr73jYMWM7jd97TnKJJd5ddzpZQG2mdRRZFqcKLyJifonV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "596UbSrwtLfHpCsaLGx48Ze1UuusW8Cgun9PPZpNfu8ooaDuEcy5rASbbjGFKMrSYhqVM9Fqc1Ezy6J7gXEmbnkh",
  "key1": "45brWMVfoWmZtHNUyjNPUYQ1P3hyogVtkTuMUQaoVQ8ZQnbCerd7xDEYpdma4n5gSrk4oQM49oVbxnRh9qv9kuhp",
  "key2": "2GbynoaYmoTKeo3txj9uDKBfJUwVyJkSAK3QfoG224smY364V2sNUidZ1yLir96gAdntKchbLXRCtbPDMB69FsTn",
  "key3": "63M8TL6MfADwNCVoh36AxwQ6tCFH3WzHAGAg7iBHU1SozSvjFpdACdYjq4ArM2M9M6PicqaWHVUP6t2PGN8nEYKD",
  "key4": "4bfHDzHmWEsAS2SR5rfXAsT9faRT6VcHezUBRsFM93hKFcXSP981AnmZYQNVM7qy3H8kk6Tsj3EGwxe4EWhZNqPW",
  "key5": "2FzX15hJ9Ec9wc9dujRNKek57TvqTdd6q8YsDTFEAgRqCh69sjjgym5ZRFQEFoMQbRG41n6bjEUuUPnjPX6xAZMJ",
  "key6": "4hbrxp2JNwFzfWX97g6WYseKHiyTq1sXtYEPer2zaKnpFrVhKbQ2prJPzLJVySa7M5fsFKDmUXsVnWhqn7dqRvm7",
  "key7": "5ZtLWkQyH1KZzmXTa4NLPU3JmaUPvqNRhxSUvxh17hHuUr1gsK9x5mtSTCyswP1hmkh16k6zmp9wSuYzk5Pou7TF",
  "key8": "36f63acWdwv9F244K8TkZ1MSr7Pa6WfYjkjkqxFwRB6GcLuoUuSpYskGrTU6uAwLiNmMMooYY5am7HJ5ziNpdP2t",
  "key9": "3b8y4pUE6mkAaVqcizDZqYWXg4WK3XaN9kCPW2uuBTQHWuFuAFjF7WxV79Q3mUo85hepVChFZdvm1qxbrJnzss5z",
  "key10": "2CMEWgRVLbxxs4vHVtMJ8Sp2KDceYSrFz3nTtUayLu1hLR15Ain8zk7hSnos7KHU9pTtfSbhdZsGwwtAhc4NPEKZ",
  "key11": "SzRLSvD3d4VpwoG493kt5Gn2FdUCeKgYMPEaEY9U1MaEwPYbZ1v9GSCgu2Jda21xnX4CwoJogQm7hSbEMsJ1GiX",
  "key12": "3pGrKeN9bU2KbAz2Q8N4YAJ9G2xwGepCHV8eUZ82QfEoT5UdAiTRd6mkgnVPXwjJ1JQst3295QyXTKSGHXeDtK3c",
  "key13": "4puZ6FPLW3zQ5TnKdrJzcUD6QusGhTmxNvawEaMzdbaFatchYdheE9DhTBUjN3yiyHyDpqZqw95LiJSG9hmYH157",
  "key14": "ZKV2WYNLoYdsBqJFWsP1Et4YTtXVmgzciizupuAo6HH2fXp6jvuGUmqmt7rwyYddNoMfjMRXfSwh2u3xJKMU85Z",
  "key15": "4DHMeKdJjaTxo3uDCzVkx5VX42vuuzL8QkCnX4YpbvhQDL8pqv7uViJa7X3NWgGrrEwE6JYc14171CYdnRg8Qxq6",
  "key16": "3D3CPBCqTesjeFTkbc22ikivKtYg21v8Md59PVx8VBZ1CZXYg7jhf8wnDevRTWCRpYnT1gqzbuihuPGKReraKaWW",
  "key17": "WDVCZpA6VAyCG4TAxWAakEmtuPqRQY7Bn2byKgvfQfULkUhazV2Qvb8tQv8iMUcPNKggfDdKmbpryHR9srZfAPN",
  "key18": "YX24d1Lfun2GpVPF6Ehu3REfAbwa8YwMw77Y7FKixRXPJJuzxyazajaFkfuQxQwG4MRVzc8Qmro7RxmqA9RvTAM",
  "key19": "5nTq3tEUxHmeExr9hypJnutSXtSEFLw1h9CkGBSiLFqc2JmTZDxQYD49jf9tZsevBUBQ8D7Lf71PRNiZAtk6byA",
  "key20": "2TkvL6zA5qVngLMXb4ZZKyWdSUnL3gPwEP1NThbnxqrezg26DkTE51yqv897KSBdqwPZYcjEeVbywDrHsNi2yaBH",
  "key21": "e8QcNVLxafLcpKek6rFxgbSADaHJ51C3v68S6pc4ZEPMaNnqiugTQLkLS4D9iwtwwvfSbQoyKtrgLMDeEWzvRiA",
  "key22": "2gBfTmde3FCsHqKh7s5hpU6px4eck26Qo7YzsPkYtSitH4KLTSE1P3wiN2jBCxbEyfbndj2ss9YPjC9VbNFtKq9X",
  "key23": "49cQ3JFrC7MA3LfkRatCZEAYHsSyjwajntNZsnU7dwDknxQ54W3YjZsPLGNoKsa5NLJhJG57Pfr6xpeMpwoinwpB",
  "key24": "VpviWCNcuKhpBhkCqGFuHGV5Fviajcu78hUCwdBAd9B9vWvuwZGZEf2pkDSxoisZztS838kZmcCmpYVGA82ZScZ"
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
