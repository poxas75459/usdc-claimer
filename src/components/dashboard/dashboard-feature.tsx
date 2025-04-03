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
    "5JoDjWv3KoPivrm3N89pJFNyJtwsuRxV3HUZRWcm9NW4qtnhW6tf684b4TJSCPupSbmsUdTojTqjnoEmUCyr2cjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y3FakeDZybK6TZVfFCLHJZeAAfyS6xA2B7UKfTXnEgBQLsdM4iotPVj7LfGx4SmszgnMKod1fYAxa6p65gizyEH",
  "key1": "3SANZFUxYnwCzo7R4GYXBe7mQ4wPCZRfayH148UFx4QwQyzVTqfuJfEqUq1mgQAKf61QaUyrikV3vNKZvz1vaRGr",
  "key2": "37maRwP8oxornbWbTUgQaSjmNzq8pVYLqAm1DJeFBmiQ4FiSPBBwgQmhKyWtLW4UB7goCqNWdhdrrgvZKVaf5WgT",
  "key3": "3H4H4RcsxMuBDSF9YnSJriXRxNJjmoXYdXSCL4SRKcbJT93BF6J3o3A2xKrrne3Bre4vfTd4hbzVaqkP7D2sMvbA",
  "key4": "ZMYV5rDYq3M6encyhWojCr4eSJJ8i6vKf4dsijLuS82nbqxA3BPdgsraZhZS72D1mnf5WkSoaLCwgWNDjA1Jpt3",
  "key5": "5t33geCc2yLTYtjjCdRog6rm1c6DTdaSKZwgWgA5i59aDGswN7PVkhkEZ6eHij44xRy1QJdjPTTcaZ2abijGKyny",
  "key6": "4Nyc6yvkvrQJr5yMRbMAcnGHoUpbyPAP5Ck6eTmRPmocywtvVGxSuGJdy4t3FCMJygu4THr1NDeXjRSDcrR25zbc",
  "key7": "GRaYavcVkD5vo97SV8SeuspixwQ1bQPC6NCs63oSG3FSQEseWy21Eu6kk1ovnCEpqY53gQqhu9WJk1JQsHj9Tgd",
  "key8": "5WNEEMKB2wZzYKhbFaqzgDTTCmGKbBFjysZDDWEkNj7iJdqn8TmAnHerhJnAxF3R5SrxDMTi1RiY7RfaBViAESoY",
  "key9": "RRQfqr53mCjX14e77rXy8c9d81WaN5QX2rKuh2hvrmZ3LtBCQ2wbdiat8fDVB3ySkbc9wUT6eADf6MAjSwvTq7Q",
  "key10": "65GyxTwqrLSz8Fp9uSreMMYhs5fieosH9E87jng3NJgQ8b63YcM6n2y1MioqjayfqvJSHxj9nfru8VWteijbcKnv",
  "key11": "5J16v9qpRLpynv4XEm1ieR8qBehu27Qa8Q1wj3j2WvVuwzHfZKTzfmhqEwD3aySYsVXTQmxWYhTcrsYp4N83fG1B",
  "key12": "3c2bytTugAPDuhKUimX6tuQBtw14cwWDwdXWWz4QvkUX7GgX6V5cJkmxQccHAshNGcbx7AjS23ZeefWUkqsFcWDA",
  "key13": "2hbxoP85ipCyPGMpbcWNLwNNfjD2dt5gYMdd4vgr97mzLbUS8PkEEKRQoAFPRP17h8rd13ZRpe4HMcK1awmUivsY",
  "key14": "352YnevBCps4eETuNuTbriy47gcrVBmk2UYnRxdjr7dFpfzqJp9m6UootXKkQ2MZn6kFLSVgZ3r3zA2bXKpy2whV",
  "key15": "5PCPraptdkL19PZUKjqW2WdBbvkZiaxMX3tdw4Fqogs9Z8Jjwait8jTGgfp8hSh8aajkvv8nfHFC4daKkdufQrD5",
  "key16": "2TmW93R2owFVy6euTTc7Ub1t3vju6nhf93W9nESJMZEJejHwSXaxaKLwkf9gbp4UHAQJgJViGzQoCN2qzCDGXnGD",
  "key17": "2VAE9c7Ve8Mxj4BasYUkN16t6ZmY75nYBH1MTbuMy5Ac39RnMUZFHyPJgfRb7hzjBPnPpn3yxCZ41BZ1FnyamZsn",
  "key18": "4F21fBpnCraiSMS3ST9VCofmEpEjizKAhSNtCQwrAAxHRGAg5gwtLpq4SsvV28TcATEaXiZ9nYQiVd4cLfasMwfE",
  "key19": "54D7yAqYiqCEq1fet6DqgXMviFWzv6nnaeE11zsTW6yXZ2cHEU34DjB2krWyqV1ccL8E9qxxhZS2VVb7BifDsS3V",
  "key20": "2FCFpH498BvFovQtDhsb9wGo3Jq1fVqkXM4MXE8n4wWcpqw9Wo6WeQNcHUXbpG7LbjkYYrjr1PVQx1VgjWZ1ciW",
  "key21": "3kdGPYxNq78F5asa1JNn6T5uQ2rcvcsXfi4pomcAVhRXHEeQcjLUexcDRyi11BPurqPSWENijNoPNoNpG6RNwvEv",
  "key22": "4JNZWKydyvo3qjsKcN8pXc2NuYkcSDoc3U8DdRNz8JqUdHT8KCJZK6NceHLmJ7dzErojKddffFZteHYqitA6DWJC",
  "key23": "2jscYCkVkYcn9oY8dparFb3h3x3LJPdM2guWXcxQooYHQ6M5b7LZowGMw7dBzPJMk9cQNH8uwiCDPQmqEnUszcuy",
  "key24": "3jhvHrAHD5eyJMUL8XehxdzZ6cpzG3q5tEY5btxbEyq2DZkpkP6sBJWpG4SdSRo7CX6V4jTtWfLE3H8tfsdQgKLE"
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
