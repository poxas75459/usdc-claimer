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
    "3oyyxMA1v77TqJL9TbCAK5X8TpkV6Ge2AB55S8YESy1bDdshavjcr96igxXAFebR3PKR37TbB2LAb1KzHiUqgHWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q4iirdbUtgqerWxENFV3Lf3zecdZM2WZZ5kdJKaSABxTDFRgmMnc7Zb312U5RBrZioTfvGYjsgrcMCkPQ5pKmCM",
  "key1": "2LS9fQnfUyhcR7UwS6gxr8xdWUdfJCmbGNfyq1wmvYeyDQFRrsURmtcjKfyGs3YWNzAYP1FtNtZpdZ4KwRB3pG9p",
  "key2": "4JcfbGTunttGGS4WLLyUmdzcbaEPwZxA27Fpkqs6aHkm144EzRd4QmGBWK286o6eMvsSgMFHFqESXLyRPpiMRuAw",
  "key3": "3yCwx6Ad6atW8GNXSv16Mrn8LJWYCRMPL2EmUjNKmngSV8Nayhux34vXYy9TMdU5rYhsqwCKLaPBU7PCQKdoZkqW",
  "key4": "UjY51pvsvvjV3Kywash8ho9L2TDfBiWyVPXdULvc7cjiZRCvs88pesnDbEpYRgrpLmfKqSsbXVH75gsEckJbbst",
  "key5": "5Z5xB9RyBuVhKAMAA82cLQFodDTxRDe2xDjy1ypdwJ3AP3AU33EjU5FcxMqreKWsbHvRnkQ3cm9uFEMAeiiN6549",
  "key6": "44p6xw9wTVGoYXR3uQb9NSpM6Qdzg99WjypNPaz4SusCMoPQQUcWC8Cb6mgM3cYSo8kZqCVTJF7QA3HMyEhpHZ2P",
  "key7": "3pBxgqPmTT1a7LbNXnQcaTngS5pRXYoxof7jQJuUp2Ks9pivGG9uDa16NtbqPFDVUdgsNEK24eDp2spDXwPRbApv",
  "key8": "3WbM9ybaf1ppkyx7FSYHRHnvuC2QsXzMMgvSRQ7Qmzy4wrd7dxeTQoBei13SiqYbqtPyMD5HACmNnSvv2oVHsT2Y",
  "key9": "3zHkQobGNXhpP6emBr7wR58QDPycgLhqBuiiG9GYXgyQSiUQgXCksA5ZcfEWJdzPc7XdicjAEPPYzbxptso8w3QL",
  "key10": "3QkRV1oK7frXLDfjL24aZ5DMhDkr9PJQa3qV8p2H8MhAvqEKrVpCiy8oCaqycLyLkQKDXb15FGhdomLD17rWe9M2",
  "key11": "4fnJabFL6Y8uugDkCbjGojzd2AazrWqeLABNagcBLMrDPH3yrvBRv9S8TymBXE4EWgL5chX5yqTzkwJHU5r5kPGk",
  "key12": "2MtsZVWTkmk2WABrwbm1U5qqREAn47eYohwPSYL8F5CvL9mJGgj3SSBzFMQMeiLbZL2qtYVJLDV4QViCMHsubfaH",
  "key13": "nQBRADSWKM13am31WyUfzKyLdKYubtgigsM4VFM3hS9qTQdpfiDqtj3XCWR1Vsen7ntWVgJtYqkLEjL2WnS3cYp",
  "key14": "4bDWbCKKgSbLNbmzT3H86MNBmhhFZVmXCAQfQFw52EhFKq3QhkrZFSABmeyiApdLkBik1TWJ3eJVvo6oo5CGzNLX",
  "key15": "31akG6H4BRCKyCaL6X7dEA13Ns8DCfBiWEXrbPqFZ9XxgH7pS6TK7gtF8hUK9M4d9B3tSZhu91b2CYgY8U2aQiFU",
  "key16": "67iA2CyK8m2Zm4M9aTCDtQHfXKXtWf9wDdXesKJmA4cQMeg15kBDbtQ7RjqSbZivrLAMZS7Ro9gN85KY79haCBvd",
  "key17": "t2rz8aHFVJKe6qcwC16bag5fx5AyxWWDfaDLj1MS3mBZZfCHps5hGyRcyfxTmraA59LdG4Z7sqDqEatWniXZYdo",
  "key18": "29wAa2d48RKgM5fJBAb6zWeoKYNM3fFoCZU1A5dkxg2i8emM1KCU3dysKzDwr2jnZaYLJy3hpxDxepQFM3hqvbAi",
  "key19": "25oYhDJ1REcrXcDHgqMYgBcjG2sS2cXeuATqdDHgxeMC6MeFedJbED7tnucvr6uEidMKMRMD4sxZd7ND8HgoH4ZA",
  "key20": "2sNyobsT1GVo1c7JwVCFyzHLddGDVVTpibR6DhsJmvmqLdBgQttQd4qA4QJg14emwqznM2hvTugKbuLpDp4Yf8S8",
  "key21": "38oTHyaKs6tabexbNqr9o1eBZm6agkn8XhvrH78bok2yE4sFffh7ksSpLYkYYcSb1oPxLqhY9bYYLwjs7sM8yjBU",
  "key22": "VFm4aG77NcVkiTnZrRT3uyYkba1eJ2J5tdNr55mPZ1718WGwTyG4ohAruFaMcLxe6a1SKcdrtz7U6RZ8BRm3VTD",
  "key23": "2BrJ36eSTYs3H3gBzAGt6QzUTt7LUDyz13cJAREsYCBi7BsQGG7y2qH8web7xFNvRXCWhZJa3pJ8dHt6FFLHCNyP",
  "key24": "2hJmQVB4W6LwXar1UfWRFTgEGLYhgZou8hai52MMRsjT3AYPM5iNnE6PGT2uWXwEgzpr3yfMfTJmLUU8DnyKv8F2",
  "key25": "5N7ML2SCbWBN6UBzyompfTsjzByv4kNaqHscszHfvgmGA8d1DkNfnz5uKQRC9tZ9eqvjfBeVUCn8XgpC4rw79M5M"
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
