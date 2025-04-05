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
    "5R9icSQcVTznbYJ7svXvReG4KiWUcWW5PdnsKmguNvyFAFjKMVEJGtwNEmUvTUVfogPBo5EJJSRnPBBBxzkf7rJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65M2UUxNhW4kMNzMjsKs7iyHR89PEuVXWb9kxznDSwaJ2xQFjRxpGUKx5PzDF864DntuUhyRjTWG6eZsDsm8Xkxc",
  "key1": "2VC9N7ArZVaaqwYfgYQhGQnDY58ktSy5pCHfEgV6z7FRpCaPFyn6ufRBoGrbDuzqCF4DGDsW713jghz3NJig7kyJ",
  "key2": "4WaX4Ykun8MQ3wL9NJoe3ubqUDo6YrPJKo67cPcXtP7WVhdRVZbNArJGaEvkkrf2Mqeisi5uwCtBmvJ2K2oKaeHe",
  "key3": "317KeEvZkz86AtALSoZusshpv5nZoe2N1tWxjcmBaMqo6EWAxKdVVrB2C1e7zpKgPcfbJ8mQTo7RDag6dSQ9zDXj",
  "key4": "4XKnWgfAeWsyfYz3vvM8pnJt1Y9zsdBFm2NPoTXmewm8vr63xeVWnLxMY8bNmEhW12S44kRArrkNn14F2dwznvCh",
  "key5": "TttPCCk9feUx7wJdTJWLbHeq46cgpx6K15YwjGVd6GkY4262iLEGiX1frfGVrL9MWAyn4Tw6RUc7TMN3F1s7BtM",
  "key6": "5zTpMM8ySnNqVKJ7HE1m71tgUmCAFAWehwzp7VubY1zDjbs4Wqz6uMVdyfCnDqzepwso4E7QEX9LxxCfsTFNgrQS",
  "key7": "5ADZ1Y1Jj5qvsgVFmtMZ77Nn6wMFHfYoGumrGdmk7uRRVWYx24gw6gvKcSxXhHPxV7ukFhP4hXZPPvH6LN5muLtP",
  "key8": "3PiQVeXaxMp7DGMDPoi3C1xMQgNqwZTb3Vixx1vvWu8dMTboDnv4evJJePASsJG7DDKkFt6y45DWPh9NiYwVhHzH",
  "key9": "51ieYfhd61UKa47eZZzoz9Jma66mHATLqMpmL7NawXZicbs9YMJjrQBR6dDcAGHLUjpjFe6iuptqAnj6kfWa2cso",
  "key10": "3nXvd4m6ksNHJ2oooUv6Bk4baTGG91tZqTKwcxzKWJavDxG3VkSiDMfhsMvjp7Z7RMemKvj5e2TCpkfPFba23LdS",
  "key11": "5eXmgzB3ESwF2UHCzqwWpu1J5Cv8VSABnZrZXg661BSsm6AMCcQ5KB6ws3yzabqajKJ6ptYmqxTFoUZF7wCiDpk1",
  "key12": "5EJhcCaseVshVvTK7Wmx4W7UxAsFHe8jDU7RxGxKgdensGcsuzS3z81NbWTdxsoQYJRnSCkUCSaaanSLve5kALhW",
  "key13": "4YeB2PAkNWjPj2AwevviUGZCvgpLbZKG5gJ3xRPk6Vasw6NC8i2yW1qanH3ic5rF6qy9mgDR6CqjyqtdwU2nei7i",
  "key14": "3T3df9tv4iUouinjJjsfFz1W1XDqKSMFkj5ojd79h38nbyvgBBN7qchq7KP1qct8b8bF6suUX8WMMHcciksBLCc8",
  "key15": "53AwQTudRzZsVZDpdGktu4u4FchmubcsxFrcQXnua1khKRRrQ9xzgxJ7wHtcioiLqUMVBGrBP9V737kEnSmzKNSJ",
  "key16": "5HxE1JMcLPmpUqyrwKAPoanrxwgMjzpJtSt7Cj6P5msqzFoeMUT17iYZL4PxyY4nZHLQbpiAtQZNuPQjcTh2xBU8",
  "key17": "2tv38YrcmdwtkULc6h7vweWXPmLQNZuMH3C44MDFGkRbGQmvNEDDofQNgkow6JEKWNjL9mcXBeH7QEnMwuPpns4b",
  "key18": "3HVK5PxkGJkT3e9bkwRcWYPC1hR6HkZaKrFaF9KKUNJr6VCYXeKSDdW7zZQjJHHy679dhgEoN9LnsU7XuzupVFxq",
  "key19": "5J91p5rZM5wq21sXcej34ixhE5mC9B9YcyzzPugSusrK5P5HECWBPBzBbYqNa95DJ1bzv7fj8UsD6o2rcofUrCJn",
  "key20": "33x9sspTcu2trQnHPb3QXbKqZqyuLnFJvQJA6Giy1ZtBjPz4LAKQnkqtp6fZiB12JWYPmjznueDrFuSPsQ8YsZj4",
  "key21": "4ueNeo92G1fSGUsjZqD21h6xZnUf3mYMpzVBEntaRZFnDzdDkeUb65WEbLjjf6NXNhiQKGKoacxDFRDiAHD2YrZo",
  "key22": "48t3rrC4he5uJxgUHqshawiBRejuNybX8ESEBn2fnyuBEtdUUUC5YDRMDTAqinVFC6ikkTPy6dy1KD5ETAmBh8Px",
  "key23": "4vy9zSzFrnfcpTrG3SJNR2Lw5ER9Uyj5ay2RsyWW5czMUa4sarT6Y7XvxmEkST2XtTG5RScHg379nfgb282wMuYg",
  "key24": "3mvJrqQBhnp1QVpVWRfG4hf2hjixf1dEP3ATuyB98LvKZjjVqEcJvYMtYdDfUxX86mp3JoQdQQMb3MRmtE7sDCWi",
  "key25": "DmKp4ASXJbYoEJ8pAmqGdzxJUeo6gtfFpjokK5qB8gP47LVeWS5pDDUVa3HKmuVLVVVaVodvnwoLHfaY6ypDiUM",
  "key26": "2E4kJ8rfxsFbiL2sWgyhH3YzoisauWU8gKuVUJESDu9Y5k3n6Lt9YiGieeQHw1wMPqJnGs5KyRm9b9J4fMoS8CFQ",
  "key27": "3WFmygchSVp1zZAmHiUfyrVeMYVGSgPATaqLPLMQjaLmNRi5q2zUShvgYxqyWpwh6p5K76Xd9dvPGfTacaWs9uCu",
  "key28": "3YtHRX5we9ihrY3Z2sWijKQ8QNcamJ4Hcb8kRhFKpai1YAivkmHxBWVrzgVNcTYSfMDe8F2TtMYrXhaVLiFcS8Q1",
  "key29": "6BM6QkUhHMEdk5mfcWNPf17qBCfQXqDsesw6XofYswcp45u8jfYE526Kr2q8F3tDza7jDNsAnHscUznW2xNwmJz"
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
