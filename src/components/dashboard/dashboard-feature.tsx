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
    "4n3pbF4SiKaamawz32iw79E23y2VooDvFvZGdRRP7QxWGabYsg91ecvMmojGPJUBqZM31NMBoT7dMTeinm9TF9ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VFatuYhBDDekQRrbqAonoZ32c4aFHfuHkUfvNXJVNZQbETHdgPrmRUTjoe6VJZPveTFvNzRWTJ5bPGkygJbbWUZ",
  "key1": "5vdxNY35TjZQXxQPEtVoJu6zdspHG5F9xRoNYB3cJ8S1AbC2rv6XSzGcoTbCXXjUZijTQbrUVGZkQUqqQY8eWUZa",
  "key2": "4341jiAYRGapsxDa9gxFVN7oRkwQLRJ4NPEuvWbdkJ5hEBcHMtAj2iPXd2whQfuuFAKEj21UVFGdzFvpK6QiuTHQ",
  "key3": "53Y5zsEDWqydP1HkErAfL6UemP7ET74VypoeLnGQbfivxtxYZLPGMWNio1EEQoHbA2rxr3C24bqnvmYLXnF1fBzh",
  "key4": "TVW4r3ojp8RX9V7RyUUtGXALALmJSKRzcbre5gRtBF3JdWVboRN6xiCWrH2J23qQA3PxiqNrVKWKDRNNZQERiVL",
  "key5": "3M2dWTTuZGHxcSefxb3iC71fSyViyQALEvJHJPJD9y4jUwkdXvJxG7heKbTYzvpCmg86nrkBC6XpP6xStpJhnMg6",
  "key6": "sLfvCDru1GeU4faMDATw6g1yipaMv8BbDL9Tb8PobDApC6TXNr97ufQgoKMtpTVKGjR6KfP4BUUTZ1WXBGCiwrX",
  "key7": "65BpJ8JRfUmsWd8EDEFxXZjW1a1ajgBesdRJmi4Gt9GG1We3xGJx8JKnWx7k5PAthVU1zxogkBGTXFH1SzrB24Pg",
  "key8": "5DuxAMdKGxfPmDsY3P961bidVmHUNKpPzxUaDu31a3raAnxgtEXtLqqG1U6jcbHCHencafga1Se4UobtF1mLD3P4",
  "key9": "2wk343nq9rh1n8TfJ3nMTGQsu9BZuo9aVB3ozkNbqnbthrdqFbhHDE9yMWzzoqvCdkRbjnXQYTGVrnd3LhFNRYuZ",
  "key10": "5Y29Fchxm192XfWXXpKGap725LENNcHdSv7gWjP9ecVMpgZej1P62Yi8Mzz4QocHjkmfZkSiUnYJb5WqZ9mZe9iF",
  "key11": "APwmDq4uJf4E9VWRLcmRp2YnMMX1ocGpjsv6M538zsy9Qjk7GtUiYoMgUvdujWFZkpjSweyDe3ygAfD4Xs3eUgZ",
  "key12": "2xbMQUDZQ39eTE3StL31dV7iMkifCAaNtvXcZ8CHr5HXEveifrRoZhiDAdqAUMwuQcmCi9jUX2SPBJQbJrj6YnX1",
  "key13": "5L5qqm5fu1SPM8GYmTZpyvcpvwNj7dpQQwscXfSzGcsEXg72UoL9voezuXPKpC3bWyPBLtS6A79iRxAPPuccfZQR",
  "key14": "4Li5qNPzbFPdL6XrJXz2DM1v9S1k44xpJoMzsPmTe6EWmL62ZDNeovRAFjWMKwBqAsSpM1mcEps741c2PLMD9eog",
  "key15": "NtLoNXJUUuZqZRD2TZPAaCSAU6gNWicdnnMrfnjwSZDSBbMJXZkxiaJ9evqyNRFL1ai4tE8ZW6WVfTf99t6x9LR",
  "key16": "5k7SnF2S3aARRkLtEPi2jEPyRP1oqn2S4eq3Lz5vUp7cTv5iFDbt3maWPJBXDXCSHguJBtop5Mcg73yEdxXmC5yD",
  "key17": "afRteixjLMmfTzcEvTuJW2bGGfodZacNsGZiYDeK4biZ4L4uzuG3Svo3Rxo8JjsDogd21TyYLkRh4oAn3p9YBAN",
  "key18": "26zZJvGNVsEj6v9QmdqNV3x4jZxDDWZMsX5Qk6PWP21EBprGTtqyv5H2kBVBXkHx6yGkeRPZcKQsWCTSJ2BFg2DC",
  "key19": "iy9AXzSaerbtdbWSmspdc7RpRnrNf4VSrdXfboQvnE7pdtDJzxa7NA3CjjgU4fxtWsTgMnA4i87BTXjGyYK1Cd4",
  "key20": "3btY866ewpLUaKMy89k9hAHd5yfEJNHeW2M3Y4s4ve7vmwrF8vvxuiaQJymWorgQFrVGK28c1z87WyBpn48YzNJJ",
  "key21": "4LJhzrwYQZs82H5zRXJFRK35wisuKRtMows1MuxuYjrXxJSUwAXbLNLKQ1iXMBhaMoq6KKmV5ZQKjbxfJjfCirGb",
  "key22": "Co4jes3Aiky4dqtCuR9SR1n6GcwpVsAsRFjXDdzJGNXoLu9JbtB4KdGqWYdNLiuSMLgYMQZkEscnYq1qEnqyFEi",
  "key23": "35jxwhDB5PnZcbqpdW5xxp3XvP66p7nS67Tb9GA6FNpcEgDmozyc8MW8U9BxDCrpgXV94XQajW9BQio4yG9pekcN",
  "key24": "3u7n6QYQPp6wokqfq8LbRc6mDC7A3UWrrktcPRwLUoo8S7cUXCnbxSb1TdRgaHD1M6V8TaueuMe6rWBi1aUwQf1B",
  "key25": "4HrpVrAxk9uPWGMqCN4Pqb9pC7kPvDaQxzFZXaHx6yM7n37P4NeBJBiENgZa7FZtY5LZ3gy2yTTSNrnxZDhz6kHx",
  "key26": "3KaqX1yrai9hbnrnP7JmH5jFiNyrXoLYrPXUCRE7P9ZWtGCtDhi93VqNmpApgxUwEPowdrvcXHtpZ5HWDvpzFLJV",
  "key27": "FUffCYasETJwaq2C4SemR8Gi2hhGQyhVqi1zC8M2iNotoFubBVCh2PRa27fWSmh8EkQSM78wjhjEc59ZtX9DZYT",
  "key28": "4utGmDyhKzUtwSXLYmm5fkaHE4pntEVdwfM1dda4da36GLTWAhoprAN82saU9VN8XpXCRiTj8GXM5YThukZn3xW6",
  "key29": "3jCKfqKpUGhcBpYHgSpJuD2cHguq8bHSMsbKKfVeyE8VBJCrjmXAw4G9v1nc3pGdwnQHfj473gGCivoJrPbBFUTU",
  "key30": "4Nfpm89Twmhs1Rv5tDPX3ucVCnoD7pJDTzaffEdDChKp8NUHZvsQMHHMdQzmRs5sytZEorMPU36pR6w3evCKrfQL"
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
