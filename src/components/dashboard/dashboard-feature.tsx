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
    "3ECy8CD7mtZg4FmGWg2KWdoqGNwYxX7UuMt9bPyJySptjo4mkvCFwpdwigYeDbPzVQxBMktFLE856goYDqXohVNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FUmgQCWGMdpq4d8KbKfvynecc3NQeXNKLD3jiCZYA5P1LR8ok89DBeWw2o2uARieGfLeSYf3LxScgmo9ExVBhB6",
  "key1": "5JTRSw97WC1z9q8aoy8bz5t7N4shgHRdgfrbZoeuncKVjAxTFmhGrFCHhDCLRw56RJjraT1BB6XXby88GM3K2uw7",
  "key2": "hv9dZ8WE7bwT2ZLNz8kXnpRZi3hT5zht4MN8mq52sbyNbbKiRHfpKj2Bsu2qrraarBnYxDqPfNiUfTf3C8i4vwx",
  "key3": "3dQhWC3wAoxjgVdSoxzuCsaLewsn1JFhXHxBqSCCa6raPstY4DtSgMuSYEhRuDRFAUE4wuxzddZFjwPVACnafCyP",
  "key4": "5ifA3P6vEN8zy95SkftZbmzmiadrZfCaFmorYPGt8LKpTyWGXwk5Pg14pBbusPusBc2MkKVZuJ4ogBg24XvEbbSk",
  "key5": "4rpFTWhTsUv9sYycmo3SSZReDNsCjc29ZSZF46v6H6jcqv2qaT4zpDW6J7DTyuSrzag6ZTowh5jR52w5p8raVHQV",
  "key6": "4qh8B1Er6JG6Ndma5WqVLtJJtdsBa19vBkW5i3V1BRzXwSCg6z8NK4UzjNrzkEfrePB6D1yNuXFLKNcvS9AejKx9",
  "key7": "4eLefSKQ2XPZ1RAh4Pwp2bzxWmw8KjET6RtWLp7JxvsxJdLdp7uhKYxvx1fiPPtu6d3YEJFnCa9cupSm7uBkuC6t",
  "key8": "3obLWGCUSjbSU9WLYnRmormo9x3Vi6Grq7CfwDkeamcV7Gd9szXrkuvr3HhMJAUNALbDBeQQdd4EyhcFxMGGDFum",
  "key9": "5FKb1qbhtnuoR1z9dPYK4rfud4FzCGmP8g7hhkocbrQCrdJWeM1ML8CVdy53E8x1M5e7edj9F99kHEgGpLPJdDTm",
  "key10": "9whP3MsUtYyWQqnHBLJ5TdNvSqiFmXNxYSqaJ3dr4ZASQTXYbb8PAJ19rBTLAXZj9bSTtREShRZK3ARqRMwwo4J",
  "key11": "57oNyzn9yJ3YPArhPWGnkB8RZtbBaS7nEFf7tonB3UWT37wqFahygdoMAXTnD31RKRexRECepF89ibq7vvAWPj9k",
  "key12": "4ok9PmV5oBaF9nECuLRty7VRYZ4UYLruJVSxJ9vvXUzbbrMXSKFmk6puxjxfx9gj9ifSFxuHK2R8yCccZux6DHVd",
  "key13": "3KW21HWFs5kG15w6aiyeLREM4E4D71cGzSmGNsapiPqp36iGBtFMTyrGhGDTN1DBoAKeXajmWZe6QVDPiMSC1adQ",
  "key14": "7rN3d6seDN6CvqXoHu1xhs3zgivr6R1nUDrxtMhchF2iDE5ppmKmrREmqHKEXgeh8mFk1jzJxFzzMNGR9sWBjFA",
  "key15": "NHzwziLMS7Zkwdu4mYVE53CcmYgraQMpaw3BYW5U4KuEmyuwwzHXQrij6Pw8ehqmpYhfT1qPiYHQbvoN7Rrgp8a",
  "key16": "koYkxooV63ncLnEsNJvwXivYCKYfgdvRbZszR4iFaKZbsaUM3TD6KrVCTZHSCdny3kQYeTgMCGBhgZx6WefYhEM",
  "key17": "V2r5cFKeBa7xtSJdtoC93kX8CBHM3K29ZHPf3Zd157osBMFPKcFrxafVhgfUhJcsURJB8pNk8EHNiUK5ELicBpg",
  "key18": "3j9usxrHpQyRHLQatP4WXwdWJLgXXAHTYSUciZJLVQ5nDnX7sDhVj8bbsUwYwyJ5Rms343cbmfVDp7XxDXYGnfx5",
  "key19": "3xHkm69yzJWRft1E5WzmSc3DedmWNZi3AXqWmZWJCHK2c5TCB5fKQZt3DxMjvT9JQMAhzJLyMySHznit9hCGm3Gq",
  "key20": "zQ3iU2dZ1zhG7GfZZ2YLJ7zdWamZTgcTYzX3jggbpZ5VvXW6if4BVoPnP5DXibZBfhXUAqzPgD2XiQ6tFmaMJVk",
  "key21": "5JyS5jXHjKytcw5putBppSwEmb7oXQg8sCB1N7cr9rXqGkgi2BhbCsUMBSVN32MZpJpW4n8CiAvk5hW2FBK7QAyL",
  "key22": "4NJMVVVTVAbYrjy69hihU4ARwuhn4LprqMamp9uaB5aDdMgBhLx4kqFT8zqsHkCt5ynq4bYoziQeZrabXU2VhjNH",
  "key23": "CyosRFcmUvTPLCxVqrP9iu5mYUyieVyPDNn7G4n155i9SBTQrHfLkpEAqZiMU2HqgD1GGgvABFPR6PrjCKu3yzW",
  "key24": "4RY7diwY86FZwcMXFLxUKmXoziDDDZGkBFchjth1ba5CEMGj4d3dyvsy3rJ9SGmpKdHXt3nXPnUSxtoRzEzzJFSv",
  "key25": "2Ep1GvszBdXQAs1jRZGsQwZs8dPEKZMjqskfYExevAd6VD1bdzHkuKim3ymUt7FZL1pfxfDsUJbgXHjzKJWrbJ2R"
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
