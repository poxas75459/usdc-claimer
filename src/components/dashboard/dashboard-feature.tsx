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
    "2nxY1G33Zqq53f2j2HXt8dWMWQxgRWEHttRY2aptGXf5gm5DrsmxGDSu8C6xwqTk97WZQbpz9MLNgbLzf7jkhe7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zzUb1mYGk8yYgJC7vgo1XBTU4QwUDXNvQt1bxD1EY8j5jkhrnATrambwNetquJ3N57uYrCtQVzbJ43TKaiqEpFu",
  "key1": "2ZqVJDZ5aVEb1peq1Xq7xxQttBgPHzmCZbzFfPvPiDwoF69WyzrPTtXjfpQVYYdkG1n5Y8FJQJrKyj5LWh324QPX",
  "key2": "4EcoghuAf6Lejb6xjz62K5x2dssP1ezbd41bMaPpKFeLrErfW6rV5LBHbTDEKHoJ8KYmNCLHXjJdqoazd8dE5sbD",
  "key3": "5DjsMj6bzB8vPaqouS1pqGL8pKXyQNgkLCxWcDtJV8aVsQH7BYNgWpfAQzcbUjpxDCxUJxqxbjjwEF2nbD4d4mj2",
  "key4": "5fLZxGtyGMoC1aLLqeuzhebzedef3yWWHEpJ2rGDzXuYNfdu3ZqAgXLrEmgDVren1DNhbVCCeb3Ds7ynDvtodE9J",
  "key5": "xNnJJw4WHsVuoZh7tCijPkdRuMempW6wJq18mbrNCAZDDAYBYFGLSVyXWCx3gHjohdrefXJqPEi6jTEwrQKSoiX",
  "key6": "3by3Aj3sc92BpeEQUdTEdUAE5L3uvG72KJWsQ1uU9eVPcyEXBRwZA4Scd2DY2Wvh5EgAYM8HepzGMsuMKynsvLur",
  "key7": "4647tCELs9a2ANHSpVLN7zavZaQZ6VJ1PT2KbSj4AqJJvtrs4gHfPDFSR7ViGw99z5Fuh6jmpcPMxfss2epPkvPc",
  "key8": "GJwtTcxqzbR4bM6448VsXFVzNzaLUqPjb3WBFiXDafZSKykWBRdvuVcdv1xTQad68Cw1YAZ9FzR6bCJ1Fm1JZMG",
  "key9": "4r55u2HEwrG8NoAikXrjJZ1Crbid7Jz5SUNYnTGSFXYm3QA7y61ajdLa9XFzzvi1ck4B4VdKQwyDrHzL7V3WXH2M",
  "key10": "39VhaACZFBtqwdkDmUq9up6aK75u7SixYWfqgCdArQ9F1ETSR1Qg9WFkPjYRE8iMp49s44s6qQDWoQGppJrTgqX1",
  "key11": "2gcHEVaoWTwasianVXTEP5nayDvP4td3nqD5PxFbwqxLj68hWqVSAmDUPCFhjTTRj6tu6tHsHoewUV4qb12NdU8X",
  "key12": "4M9R2Pix5r8yB25ZADVYhJeQ1dgzmVzWXnHGb1nc9YRCJDqtczxqp8XaHqFxzVdWa4Aq94ArjdooE9hrjiNPJVEb",
  "key13": "3ZzYE1ASGBi2U16PJdRDCstuj1L6x1uzpvybGWCfNYdPaAWwXaDzKaCnuwYucfQXi92iyJXgp8GHfCxEw9xSK8A5",
  "key14": "5tdyAtx5d82zSdm8WdbHDHjLgY3ffVPGAJqdRhigqDmWfEkkKX5KVQAAswxYfyAiHzxYJe1LjrpPh7DA5rRiXFXr",
  "key15": "291ZqpsGxVuKRrgds3u4RAukHLLb78Con72j9Xh8kTpjAQXYZhas1jJ4BgjMcmkNSiRMzo5ZFm2FyvxPXcQu7fsp",
  "key16": "5d6nf79yhbcQtLXkM73LD4bfQS2DWE1PeoYgZunECjs6y71bjcMmRYR1MjSgSLSubXSFxRZKc8YusHK33ssSd7bG",
  "key17": "396nMVDJxtTL3KqufRJrmtt4oDhYKKtBk22bxbyBd3QqqDd1Me8bUZiC2H8q4NUZ3doEPzv4gYPmvBZuq4KRptxn",
  "key18": "3B2LcwCXZFC5FgWytSjQgY68sxVh9j2fhkLabNpQXTVQU1YVb8fvdw7hcGLmbU9ZBu9DYbWS9B4F7trZ5L24Fj8p",
  "key19": "5TsKM2u2GEubeCtBW1WtSWLSiSVGS1WFAHQpq8CoQHeVfTotwMSMg9a5haYLHcTBbyduvhgNYajr2fL6P13LeaS5",
  "key20": "64QoNkQdGB6YPjDmRDvU1YqVH1rKjiiW3UpBM2y5XsxBjkond1KY8i8U5cdVwAEd8dVWFMt2phXJyr1MKK7DdZ3y",
  "key21": "3E5ouXXXnBYv1fZF9SqFvHY7F5L6k4gx3eSsBgQ2N3DFHTe5V5CVrxPgtjA69KtfpsZ75LwTX4Qgx7YdZyCqPEKZ",
  "key22": "4hDQ6ZfPx9FJciB7Dzvu5CFoHAwJpEyR2hsUu5nogL1VbEfYXLu1yi3vS4rDvD4vkpHyXErPsw47CvWNz8jyh6UZ",
  "key23": "3AgK6foCPoZtv7NggZWqNfdDZ8iRfG8X32uuX5otm7XKKWqrZ41HgfjVNTZDkSS25nMZBD8DwGMKoQ66aT9ot5XZ",
  "key24": "5UyCsYbSivMbscrA49dcMuuMt7vVqxc5wKfCnW6ey4EEQU3i7CpU7Z98MYDqs9s32wFd2nvDm8HRpHg6VtGEYFjr",
  "key25": "2MGUA4TPqhP8GTnGn5o6TMUJkedqgKYFbJiHExMwXTkDg7R5g61bi2UA1vEWc9ub6A5R3nNNhKJwpYd4cvPaWsLZ",
  "key26": "4r1qtLgbTQzb18qcEBqHQpsa1fdXngpQXJs2Z6Xjr1zSHdRQuvwiyZGGj8eQNNt79cy7Y9WibT2LCQ9363ozHRhg"
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
