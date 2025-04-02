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
    "2fBg5kgn8NYCeoUwnMdP2cSqZjAYpL4ZSkZWuvfkLrsQpXnaWN12DeNSZqBJhGCtHfZypRyhtMdJQsc3TUJsB8RB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hAmra7G9yWjdGAdAGdYBVf1xMPZkYRR12pr3vmp3aB9WyWXUheaMgWtbLbRxckCAc3HnwFySnJpETAp6HxJr2ZW",
  "key1": "4RgpeDrEkSjWtrTcaiuywdSCrgN3emxndNaKJmRoRuVyH4zNDf7ToMCDStBjc2WrvCkLH3rCS5NSsUopJcCxASpu",
  "key2": "GW5f4AfTmTbgh4uj4BQLftaJ6VKSSkHbxn1yu8165cAzcqheasqs56gyW29oPik9o2hndiDuPaRJVTE6xE3wmW2",
  "key3": "4MuR1GnxkvSy2fMypVfQaMXzAKPktVC7jT1r9pEnoiQBeiGAypuRcnp6uudwJEEvPm4oEABjUKCTix7uZgBLrCXF",
  "key4": "5x7HEGWM9g8Loyh6w2MfAU1hVYgKiom2KSK9i8nAm4wDQmgzzCyhVivTgzjb7tiHkASa1vcA8iM3bPdXRFCNruUG",
  "key5": "2Kqn88Qjuj2tXKqn52SPKLFe5zKLqZHhiUBQJVuazPKwH9wQfiWgivXngjCcEvCKwZiS2Xk8F7hFumQZvg62n9To",
  "key6": "4Q25K3zJMxLxRbbebKDFD6PGMCaXgKumsG6B4WmtTnjt3dYAYpZUwKTsBDrDNRTyRpBuFCVkBmbhgCVfDpqXFQ7E",
  "key7": "2yFuJZ1KpzcS8eEQGaC358Ju1Porxw9PP5CLvoSxHK6uKsDXyLoVMeyDBvDJicsVb7zLyydiZeUXPcaYmNgkQqLp",
  "key8": "4QXwLmKdsMhoxNxiAwypZL4hBG2M64SLroC8uBvMD4Xnwtsdxdg3p95ZNQdPKMnenVxCRTEG86AR3nnefbayofV5",
  "key9": "25UvyxpLoCbsFBZEJJx9io7UdQkSqPhCMJhFoy88m8pf66mJsjzePxLfJ8Nt32GDNcwUGt8U1SkinBfGvg4P8UYF",
  "key10": "35FgKPZ2hYCbrEC88PBrUNQWiqe2hL7L21wPHi7tA1o9a9Q727K3fZcE2Q7uAdVrnkSmV7KsbePCAY9aXAWtUm7",
  "key11": "3gUefvczEXAxxfzne5Q5ZjR7yw5AC3qgw47x4kcoff9HGnQcDzVhBHyorMcCELMjpyBUbwqkV4H2G5chKi2CQNYk",
  "key12": "2k38iGSkn9unXTNFZJUyTE8n1qALvxkgsrxN3ETnNJqKtC939YGPwXc6ijPrUDrMRPDUbBxHtnqbGCCwuLsjBsnc",
  "key13": "y1TpncsUJ7V22NTvkHqgU2y6VfMtP6odvbznXSUhETLNrgtT1T1rzKJsvv9Httcb4tTUHDNNASEnMie6BgcrJEo",
  "key14": "4xeF1EEhv19uqqtDRpU37pfxahk4L24PVDZSJZ2vHEK5VJLjtTxvCphzS3A8mrpwPaz9UK4kQkhASPkGQemHDbs6",
  "key15": "3ck6Niw5oVET5xtqvtiL39soPWQCqT93bCbj7cZ8xXeSu2mswzRwRng2Zzi4u1Sv6h9ThAN6SHBfEVD9M6swi5su",
  "key16": "39qKtuxvXuMubRZWCiAfSJe9ZfQwKAEhTrBqziG53gNDJ57YoJzYXh7GyTXfxyUckjzHUvvcj7kCpmdqY4KziU8d",
  "key17": "48XDxukfj2pxMYqzm4FvymvdANf5AUFUhha1CzMec7gbVzQarGQJ2kKxyiNd2z6Az5oy7Z81ezbGvk5Mcb1CAEHP",
  "key18": "4X4MLDcx1rHnUYwScyDmBq7V5f3TcGqq3n8dEE1eHixVqZLb2eemu4fSoYW1ngn4RL7ki51mFWi8kFyyZqjgmqqH",
  "key19": "2RA5FrXpZTZxZ9xre3eCy6N1gQWhLBci9Va4VwHh9RA54iZMiHvBT9o5yGMMiggEgV4JhWYiFGqAHzqtJYGeZGtB",
  "key20": "3zBx7DxgXx7KSGTvcJF3ZsM7gwk244RykwMoKRse9foSe28HtSsBhDS7ajBwQ55xnMYfUGFUX6srTsFTU4phBNjW",
  "key21": "4DFYFJN2rM317MjiTNUspXzh4fNBFnE91K9xcjjbCrADQGvV3r52CnGwaqzpXvTzzWJ9FVyBVmCKovvjpkfZ8biy",
  "key22": "4auPqx6GKQTc46qieCNDXkAS8uA9cKmH5fNQZyAVpiY3dbU4KP6F5wERoYbmnrxXWCd21s3ZdJBJmQwqzEgaVFnh",
  "key23": "4qx7ZvY6Vb1RhCe23Y3EW5g5oVygBNHi85QW2uraTjvv677QKBAQyGKsFUCadgBRCLZYvr6TdCyvKMtPh28XQ7pp",
  "key24": "5e2nke6dQinHUjUrXG7PuruR8f3V8CC45JbRKMG3n88XBhoz8Py4XL4EXfijQzqy38ESLhPw4ghKYbPbGzEfZVq7",
  "key25": "3Ad1Djrm3aqM64ZAAL443A8pdnVkiZrKFXfPWeiJiEXFwZX1eXLUD2QTLPiPihpekXADX48vFNdT8nNkYi6o6Kni",
  "key26": "5r1po1NXz4VyA3PeYWdQtNqFHKX2Y1eXgocc5ofeL9TQDTWTxhnJnrULUN3x5YNwYw1iuysC3NVhAfeUyDRHpzQV",
  "key27": "3QxodF49P989N3ztXnJDsSM8vY2d4j4RrGT62V1S9bz5stK5H45RWLLZmCVXw6s4rJAZiAP9JMd9aQJrCqoHz1mv",
  "key28": "3L5UWUfmC6eLFGdge7xxtjjX6PMTkppRhCzhJQSnEnyQdq1haaNfUWTR1p41UaFd6XkbKq4iCFfNzwS6n8HrtNAj"
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
