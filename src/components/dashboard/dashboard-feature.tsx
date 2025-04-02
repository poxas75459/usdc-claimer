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
    "3e54eQDtSWYu9qnJyGrVradYERiuwB2x2KxpF2wkPSMgN61HAJXdbcRvuK8SDBxFqmeqUcoCoRcUchSNkNUmGEJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xh3f8UiiBfC2xuSyWT2Zah3iUbSci98SnyMy4BVP2yEzeJUZTZhFZ3hBNFCWGuqi4unAKiZWXBmtrSp9z9KnN76",
  "key1": "UyQFGWVbVAYWzmEXm7Xyz7eFcPRS47wsaTMJVLHeWfMpGcELbFNzQFekmtEgYdUidceYsAogYsuLcX8N7kLBba9",
  "key2": "57ntdi4xD8aRXCsaJJ4MeB4afwmhSTHtmAaDQQg8wyPhsiPghe8sWMgnmmqytJcUW89de4nfiAyDrnc8sitDGgVW",
  "key3": "2pt3fuvT5TbfFNVh1nncuYudFunq5mKQRH57nJtwMzAQhXTzobxQmbj3SHhdcPfXPya9i3ecVZTT8KUPQCTsN99D",
  "key4": "4D62K78ob47KPB7EiFcmbaRLcDbLQfgs4yhgkeoiYSP7fYTyoNi7iYiEMsa3XVm7PFqRASFA3MFyUtX3Mty3CfAi",
  "key5": "5T4LiaFKj4vqjy5Ca7vWokJmPSURSEqxYbhQRKVKu6Z41Pz142qzCvhmDkKxh6kNCvjsxJ1b8Ci79xccgSvR2g32",
  "key6": "4TBpe422vA6uqCU372y5ppuLjVFX7p9hHJg8VgzWRgiagiKfTo3QM6AsWidPahR3KjT3jmzEQ7NiFCAZrrRzRkAb",
  "key7": "61RSEd62xfPTeKD4DUSsy3DZS8yjhLv17R74y1M3ixGTFYZ2rECscePes936UHSWWakdRxw76YKfCZrjA9vfqRnp",
  "key8": "3KYbtGwga68U6b1iiZyr3ccxyruLp1wXGEZd8n9Ac2rPsxQBX9bq7EMYkCU5mbF2Scq8ndfpwXcGonqH7XQxaJy4",
  "key9": "3RxHTpmQwmxUdCn231rnSUrTuZxRcvcXX4Cp1yQtP9VYJMYop9QDzo5Xo7ExQd8mX34sg4Qdf63TEhscZp8KfPeq",
  "key10": "5jmha6LRh6EtP3uJoVpv4J1y8bDJkf12rrseKmtsVXShrqrjWVKBAbezrWR2259txiKY88hpb9ZwGdxEXYQRReQS",
  "key11": "3y7zy8WjsySwZ6rqFTPZ9yvzqqiuTkt5ZuVAEaVNiHTFaNNarQxupC1MyzJetBPG3jM3qDw9ZCy6JFLLhe34QKHD",
  "key12": "41HhYwdwvJzZuyBjf7YbTDsXPxyquCtHKqHWSiX2U9myGjkjuWyPjtDoRMc1aFZpFiJ5XDEmpBpXvPCRK8toCG94",
  "key13": "s4HD2d6R8bxyUw81VGtuNStuMgQtLy7ZrZr6MeFNN8FLh4uhYPpqb1mgDvhUXdRbMFHbHCgiggPEpbcYuqnfgFf",
  "key14": "5km7HdpjDWXm2mUN2yKAyfi5kXcgxFhZKT8Jeb36wANNTjFdLbiT7o8FoAqQui6KrVdBJm4mUfWZXx2MV6EJFbeb",
  "key15": "1fBz8DWAyewnrh3R1poT6122JHC8G3gEQbHTzqVbMdhS2PFBnuiSXK29LBUWZ1bgxZeKtcZniyXuXEhvWsAZhKJ",
  "key16": "4kHZa3J6HP2C7hsmmYK5bMFhYffcbpNK6DA9p7nF7RQcUcT9cpojqPPhtHGh269WsP1RYoXTU2jFLhwcU9byTSbd",
  "key17": "66ThGHxQ14chW5ZQ7RfrSsR51g9Yqi24NGzfRoYqsy5W4qcj6JkTaKkYpbf3v2HDsK3tr9L18MWkYySAwMo3EVcM",
  "key18": "4meuZbwvuie85wxvEpKNUwLTqX7mEDFShSC2Xv3RqPFm2mPVgKKA79nTRcuaVvD3y1Xum8N5CWjKUHukKtN1NUNR",
  "key19": "4BPiMWEPza7fqCmL6FvMHtRAb9qdgfk8eYGBynhX7ks9Zao7275XYNRRhyoLgGRA8sojxtjspGTpLJyfUN1YLZ4A",
  "key20": "5iJwbCJ8RWYF6nFtiKz8xPAn2e2N7pNY6kPTy6zMPRPDeot93L89XMLKpt7bYX6FSe1AjZEcaz6b6etCY62tiCv6",
  "key21": "3vHuFzAeVhg6th6NPwBhr2TJCi8osnBwjKoeZ72NkQ2Mn2E448eux97G1qpzen5uTphueNBQY5NoG51LJhced5tg",
  "key22": "32XiTWzouSUX8fNnyQYt4ouQHmdCgKkNYEbutWx7xxhH5BQty965eEyReL9sovvGDbg9QvAjqxXij6wscCtPxtt6",
  "key23": "5qNEmjMqhnyvHkYVqEEBvJuGMS1MijaaNmWTmc6t5KtitBxbZK3KA8JQL2phn1QbGgwMJHvrR1MsA3kL6UWxLDnU",
  "key24": "5Dtx3FnSZiisGNnAihC54w8rYKaHXXQEkrwq6LvcBTsmkwi9zhEM5fHc2pNHr9Af4wmKm48b8EzNXk4KUGZyKma8",
  "key25": "2WArRmsAaCZrWD8eoUHdsUARyz6VsUybkW1V5pbBgHgAiMb7DuWrNQikHUXoJjP9gmhQNGBGW6bDyXZuz6qnm2wA",
  "key26": "3HMvLFipHu6wDtLiaaH6XtbNxNjncMq9YdWB7MzKvzPnqm35vqZ24QzYQA5XuayWTM96uEbddNLzMz9biVYKecZ6",
  "key27": "3h4xhQnMYZ73nwpSJ3Cum4eRpwQiqKufWL52V86zKrj4GLoKDUWa8DLfEqg83cDR2DF9kg7iXmJs5NDhZ2xb2ZWi"
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
