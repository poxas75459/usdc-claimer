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
    "49uKA9MW7u5peXkzkZpD6kURrZA26JLjnqMJKAqDcNvJVCpom81dMkaHYbednhonGDMprcxZCbsc3m5uH1uSnuue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "up3dqTPHRR71QF66bvdsXVEy5ytXbUpcdgNP1cGERXYa9tvN3v2ouKN1yuq7mBzRH1vGAuR6sMHn128jvVgoooT",
  "key1": "47UQUS31u1CewcZzWuf5v7A99qxTD92cmwnN5ySrm3nkTyviR5ackze1t4wtdJkDJE4SUPcHZVq3ZhSHsJy8Rw6m",
  "key2": "3m3Fj6ua5xnyKKMVBULFgSWSVcqmbXzZMRM5vWgNfkqF3jARyqKge8oYiQSTd8xYy6tjGQCcK6BZVviYsPLVYsuU",
  "key3": "3iKZeXq8mS2ZSo1z9UAwPLumzKpi2crzNkRMViWWTaeULBuSgMRJZeE6txp2FLXqEJ4ARnF4rTP1sRffnevWU3op",
  "key4": "4pKHqgDj9rSKiavRi3EABpQKZhKxWkNFwbKrm65hePPLoW4T6hqJWyYBE4Q49RiesjgWNAPdH2Qh7qe8pJ2H6z8m",
  "key5": "4DHWdJZDPbM2WymQxWNn6ccka4FDBcVc6BrWo8eaygBqhrusEbMkUxARtS89gheS9MdVcPcF6JpqqkRCK9a9fHpA",
  "key6": "5CstctYVkGuKfbjYXR8kpPUN1EkgwXRyTskaGWh2BkNbFfcmqFEu9evPsJkQR4EgEqx7meJyCXoAytshBCVmrwMc",
  "key7": "u7dTs9m7U9YLwWxJApAdb4LREPNtMQdEFHPo5nrESEXyege6LqxhBKSwaTEBiRrTQntJenUm1P2LXTrgrh4DsPK",
  "key8": "2c83abARJcCUGyNBSEtu2tjcfNx8Y7BMs1x9hWdrpbBVNa3LXVtuJJ2wxap1GDsYUq1bjmnBinqPYe1LaAoWRay7",
  "key9": "5VM3tUEaR7tBQb8Pfv7qsAXk2jkf3oSku8Z3Nfk2XWPSnGtjQ5ecApgkhNq2QgGzTG6nvMFkjsNLLrj8fHLGudVu",
  "key10": "2b1GCP5fxzQAdvwdGrijHJCG9BWejGCrJbKocinyzN6CSSVQFNEvXnND35oEuSu5ayVsjnw2fzdqUfxEiyTMGXMH",
  "key11": "4u6UBxoKTxZbU9967T3VN5Z5JA2aKghDnZLffNKuMFtf7fi9cyUjxdsugGgq1daew8xv6p1BmGNKZb885khqtHdh",
  "key12": "tZPehtxzpZ81SBS6QhmmVBbdwKscZ8uCv1q3hbN3CLaWHCJbq2tHMAKjthWfQAgmvzYxUbzarY7vTtcCFK1wvsS",
  "key13": "555GaZWsxhgNy6Ymu4odTnnNDEm9AG7V8Lt7Ti1TJK6RfAfapUtKB5gTFZK3JZ6AirsixFb3gn53g7dPrzHDowka",
  "key14": "3dTS8DR2X3etQrQenrL77JyzBdEbFCKTKiEfwimRSVcJUiRJBZBoryfq9jKyoJKSH9m3saaZXkGTpGJFvhjaL92J",
  "key15": "oz39XTZkmJ6Upt4B4ADSjMzgxnMfEUMLotSCtFusa16KiW9Z1S4hua3ArZ1UL1NT2fwwbYUkpqEoab8LFH9B1Rz",
  "key16": "33vCKdaWRA9Pj8yBYawmFtywLiHe9qTt9aFxDD9qVZKFQSzKhoTJU5TZiAxdwJjnGkrcGNED6Z9LFSWtLawg6caD",
  "key17": "313c8TiSFe4qVkANKV6QjCJkssiJiFWNvHNgJxuyyzn24TDXQ7reEnCmq3L4vME7sAkJ5qRU77ApfKT8j8gwwpKa",
  "key18": "2oX8RQtJW6mPhCPBrndUWC8LKPrtepkBZhpLQnkLwWg5QGvUfMa5YPLMnP4MMSwaA3XfyfurK8CoCtwTeTm8octn",
  "key19": "62pMVotDcqmt8F9YZj2m3f5DeQYa381EBd8bPgme8uSUPssrdUuunPuhWUpNZfTc9Uqbafaa5TFbaPLs8EmTDfFY",
  "key20": "54EbvZz6ajvyoK1jf5Q1Jzjb6KXXkwxWtmccuTTJE1CLPPZYvGLQDdSbzdpqgP32Ui1R2XR2LQML1Dyfus3L2BPZ",
  "key21": "3yRXewAVZSTGktHbi1hSRaGpXLFRDysV3hvj71TesiLwGQYBivJUpywaeZS2fHsqPXXsRmsRZMB6vsACbf8EqPFS",
  "key22": "3eVFdrFP2VqCt4HMLJevYTR7LzEmme3NDATK9mumXVxFbkbx9JVfqTgVbMimfHZqzNXAwt83bEYVi6gosqUrmJVA",
  "key23": "3HzN61y63JV7ZynnQzK7xgc1VvjF1N6uhfo4pAPukH23yUG44XmCT58uMzYdWyZYouQ4CBAXTPg2RkdT573N9JJu",
  "key24": "itNHFGhgu3hXca7WHjwZqdPGEJSsmRE4sZfyy8enYJ3L8sD1yFzBLr6bhfi99emuVYjwSSxzcnRLo2HR19fZUYm",
  "key25": "L1e9XxjPQjCALtwzMHdPQ43j717ZNjg2q8a1yG9qKuowwMjvBDYqkDyMV87RxmxPUQUJ3ceubY5u51mDBz6ti8F",
  "key26": "5Khii6WxDcS2ttKHQDfiJkn4tdUL2ct8PgCFVCsgWVzKbttBYiikpgVB1TehSyv86t9A97uQkXJTmVje7YuudBye",
  "key27": "hxkLXdDyXEtQw9VaX7gb6e1gAXmjF6x7vVkNECSLrZQp6M4X2yVi2jBrHFzMvUJzyCgeSyVyAhrm8USEbdkPxUA",
  "key28": "RFaAvf3Ww4AZ3sBezcMuwoigEuK3sduFtMrFdRfGhs2r8FrsGESaHRNetubwscihxTM3HQ5CmPoH82AKhuBcJvz",
  "key29": "5WsdvaLYbXVA2T4vL9U1Fjb5RyZWWEJErP3gFoZFseiQBsTPtQAaM3pDP1haw1xXRsAKB1H5QF3sBuPQCSJk6QuN",
  "key30": "KiHY1FxEEADCd8HKyRUAiazSR11mcXqbepiGvqgFAEcCjXPEnKHdoSSB8KgKYBwHc4n5aBK7z9XAfdn72zYTrLD",
  "key31": "3He1C2NsYZXEYq991HQwcvPeJD7gyAqZHV7zcxjW9xrBifNRwjjh8y4XY2oVJuRUXTwA4d1iswxSagA7zdBrVCA9"
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
