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
    "4ostP1uwgbcB5t26s9Xnq33WGD4GSHFr9S6SbQhyaqJrA82Qkvsp5gHdLRFstu5SevwcvEm7hu4RsUwzzGQrPJmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pSTt4y1GAbc67Cq1LJcXhNu5AdjbtyoRJh4q4kcwmuYd5zdm5Gr5wvfYg1PyKuYqZb1ofi3pozkYBkPWRi8NHfz",
  "key1": "B6sxQVmZjWjGviZgGq1YdcxnBqpbcJqH9dm4Mrxpdrpj5nGJTuKo3qbXMcw5uvynXNjRUTANVyn2iN43nZLUz6D",
  "key2": "wc735opMTUjpdkTceEjszitvEAb7J1sgonWyDJvTVyTw3jiZRDj5EuboNmZ2RbbiMnie3GeZpAjkmnNEzkag3GE",
  "key3": "2ZQNmHoFAQLBfFaUCh5b5iiSJNgs8x1n1pSiZoNTrFfVMRbWbQcQJoyGXssChpdjBQ4mWq5cmCiEE5YXzmU1opkU",
  "key4": "3EsYFBd13dpiUf2gJBPKofRVdokFGNDNn71uWn2iLi3qckSq5emcLR6mZ8nTuy957pNFLmjq4KMX32wUHrdbtJ5g",
  "key5": "226B5W48Dcju9rCjascT7i8ZKg73FEnioHpi4xpLEfqjMPPkLAPNDNuGScjegufLXPqhSZcig1hjmtLc9Qj8Jiu9",
  "key6": "4KyEgXaCfnmhTbdXFUFJA19wrKsB4GERiCQdAZp6aMM7R4q3sTC2ddyzR85EeN1EzjJtUDSbKJzXkLdkcyeFeMdM",
  "key7": "5PiTuqzvUMoGqi41jxKzg1d5bsWWaoP7kSgXPbRitHsqRbij3pSHRZcKYaQhuwfjzxtg3fQ4GUadUkp3dFZEzQ2m",
  "key8": "2CqPFNtcVSDi5t9u42ykcsTTNQ3U1r3685fkuKgtwykds6gKnTwti5ttaZVd8i9aQhL76B54aN7YmbfWxx6TLXSe",
  "key9": "3c9HYLnyfFzAmm5oacmwuToZbFHFGiees3NdVuEjvTVRR36EVwt1zVvxSgzf9bh65rUU94wKrS1YEZLPNi6iWRer",
  "key10": "jQ75hQuBWSuCRUmzJ8yxa4cd2ULpNriWNWpYNPbgfdHAcEwT4Jjams1w5QdK8tmMYjJjbe6DTYf9Nccu9AjsGcL",
  "key11": "3wu5bmXyzyAXwcu4aroXTNyocgwFTeYU5UQoeo1jPHpgjNognw9vwJmKKWCCencEFpexhWBotUxWrf77RetbzQbP",
  "key12": "2ToEZmTZPfjnv1acagLE8S2xeb3qK8dtuVR8wGR2gzfhovZPY22dQFGcz6u9eYncz3nGNfwSsyoSDFLM7yEWnpu1",
  "key13": "5eTkMQRUvzqiLi4ycpi8eNuppmjxpSFkXxm8ya1KGSSVEo9KUby5nXkK7H2Em1rqhCYCn53nAcPRfSAbmFrnziP1",
  "key14": "4JKiAPxuapS23j7zV5XgqdZrUDErNnpP8JXHsB1pYbr16RhcHi39DqXiJJ4g52VsmJ1WBKVMi4qHsCCfPdWMNW18",
  "key15": "3pHoiRUMaiGxRsoRYdwjwrLw62sNbQ9CfJZ2kXaiqWCcPksw7Z7WaWYYvSYE1KXmckPVTWqHbp3PZL8KzeHBXQe3",
  "key16": "c2znGEr6Rkddkg4viYRGpXPY2TjXmuBuFUX8ziH7g2gHdhw36tD6LjqBAdBSFPqSqab9qTTVK4VKPgeN6HX8YCk",
  "key17": "5SWVEN2ybLisAHYFz8goMLpkkxhjAyb4WJ9g2mdXNygHUJ4SUKcUtKwfLYTsVY8LYDqxwPentxKYxw94bFyiGCNV",
  "key18": "3jkAFnnDMSdS8uYC4qAkx8CZTsiRmS1iC4hiuJ4GLdEZcrqtCZLQsmfin95qvbRPbNGLmb2CcXg3VKPrCMQpZbtL",
  "key19": "2fN2jjddsLPnbKGD9vZy2anjUGZLFpezvi2SgNJ5zR2sn7fqEJyUNPnW8amfsvqojFNQVnqgDmvso3ZwYgai27Px",
  "key20": "2B5JzRoPo21b4UJpBibf1YUBMjfETk3C43wAs5Df3PPJGP4SbtdbZTa6pSWqqzXGdDEosPuMhoyYMiTatPyHUiZ4",
  "key21": "3vYZmgK6hcokbBPdYzVexCei54YVmE8G9YTxrUhU4vrDiYbF597pFBkiE7qPKY51x8hxweGjc9gMKJXRuhERbyQy",
  "key22": "4oSFwgHH1Yafn1DXeodZEQ2vFQm6e9bLxCfqeZdB2aPWqhv1vC8zXHszwHcNRqHMXix23RGo5sNwmzb3ii9K6W71",
  "key23": "125EmTKJNM59MEj1y4cpKm689qgStk6Y3X7iJdBuvpKGp9WFwg3J745n3AiiD8qv95YPVATQkk4biyNZHCDH1ubW",
  "key24": "3wZFimUZjkEDaMQ581UBcJNxKrzWhXtvXPhoY9aSygLrJ98Hx6wM4N5aExXMww6RL4uwhcTRSyCBHpxgK1uRPVhK",
  "key25": "RZaGPuC7xn85zu3RVadLkS2XvwZnAyZ2Gnat61V73hx66T2V5H1dasz3TkwXqXPa8pZdwhGdHp6YaVzRLqV4wnb",
  "key26": "3xh2v3isbFP1ZqeDfHCRrWMyEex6KBdzbYzapiS8XFhBZT7UmbLbiKoWuUJoWZ44SELFywpti3xkbWEtfnhsiAJk",
  "key27": "3pwVMbRG8ZohokNAvV46QYvj71ZmyJxc3Xf5tytdCpDjfLTGYtD3dr2XCZfAppse1QTsDdav6vU5XhoAXcX6YvRb",
  "key28": "5rDXJQYPFrpDeo5L41CSmR4ofDn9yF8NysUURx9n8WPyk7WqCtbGGzrE1sJnbxtVHjVvFo8XoTGySLrebBLgVDcJ",
  "key29": "2DVd8whLioZQYxNND7s6BskkVXAiEcW62EVmsbyr1UJnjiJT798McPaJrCV2nGEsgBfdPPx97JHHaMUM3uFBEZ2Z",
  "key30": "3yceACGkqW8G9uZuUw3khsJrRSTEu6yvrEQQzVhae87b3FzXs5FMvqEQYuVA3vVsXc9FgRm2MCgfEXqJoHvFnDQt",
  "key31": "5mgxnFyQs8maTx7Eh1xUWdRLtgM36NgysxdwYvxoBe3B4srAC6ccq9dWzUUGm3wsv7CxQcMEcWdpjKhvat3btxN"
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
