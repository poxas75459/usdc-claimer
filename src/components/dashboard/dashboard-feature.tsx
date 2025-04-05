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
    "2ZpeXiBCmpogXzNJU9YhJXchF9fykT8ZDoqANa7seqoiN1KdhJAXZri1viuDy7SrrcuNh5yAtniSufTrMDyYCFgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bAVgyZij8AVfbnwwd96yWahLQA8faA8VsfjsF7pJGSUcrQrhEyhNwif7tAR4iQqAcDZMer4AxzTjbye8HSpN9LY",
  "key1": "2aoF8ufUEQXSbiAWcUYhqkt7wrLaPgNHa5BALSZzoxo2x77Pji4QnWpZtaBXs83Gd5uses1z1c1dasuCTDFC47Fc",
  "key2": "2mLuNCHbB9kKhx2GUgPiKBJgs61ojzHkj1xpu36FAfYZKob8kjSxspLcy6dTnNvbjRGodLy7iw3uDR4wwpBDP2oL",
  "key3": "GoW8rMkDPENgy5TVLEdrdVTwbJhaKdMXqAd7BVAa6QurN8Fx73JN1vcTGNc1fS71ksSx4rWRFN38anXGsbJFZ8i",
  "key4": "2KNhZQkSy6Bjzbm6t9yZwXnmXucdDyu46ioKkcvCycT62WzJtHpXb6QVQYBEt5wmcoE9NZC175BXyrFvUCGQXnMp",
  "key5": "4BGLs42HQrZbC4Lp5qXiLzMycFwcALU62VEqMKX2sZA3iKpMGS4JoTBkmVZ3cKyM4queau6TmeCox3UiHUqWVW1A",
  "key6": "3REZqCBP8YoEWFQ9KhDkcN2Cus9CcaWPrxsoyCTYpfMkSeEmvv9ajRMXySA51jNUHaDV62a2LhXkn3cLDS3RVodc",
  "key7": "3E2SrftQKrewL9bopt9VYCsqc5Y6EZJPXvQQpCEfcATX3mJ9MMAtJaJoUziguRCzMiLs6eRkooZhqgwM4UJj5uf1",
  "key8": "4yoiGcZGfxxmL63gooRRErGAA35Esh8Qvv9AzMtyuPH26cpo2BpjHR7EozMKvyhzBNHQPctauuPYw5GbJPnzFqPf",
  "key9": "3ue7GJk8fzUFcQnf4sE28oo9Rmp4AN7XxV1fbQ8uYLyyreVBh3Gfnb7TiuJd2vH7T8VXEEDGDvA9MXUwoGPVFf5t",
  "key10": "eEemENstJCWqq7udMUwcuu2KLX3eHL7zVGxwNALcAPaWadSd6LmKq4cZkvxeXU4hBMEL92yAbLyPZKcBLeitozf",
  "key11": "4uRVS1WeUpeP4gVANhc3pjVX24uDfdLphg2C3xegif6wDBaGDyF7RcNqCRj43AJGemQPYBmk5utPJmvNPVViivJU",
  "key12": "vZLqmqh6mP7sYJN3wDzU2M7D5xZUZUEbUVT5oRAWTaxi6DbxVzc1iJZVshS75n7mkJ9GcqUMBEzTf7kVRwUMVGo",
  "key13": "jjdfMLeipw9BrMJfoB6gS67NKG5myfzEQo7ZEF2sgViigJyZix22dvR5Cp3J7DwJ71Vy5Gh9HKcfy3Z1FfRMz8w",
  "key14": "5j5DEFK3htWobx7giY7EqJZseLnxv7tREQKvBuA87jBWUZqdu4HzfkSuyWXQrQq2rQYYYnAEQYuS2QrKtEhtwvuR",
  "key15": "46yJgUPam9yS5crzbdvW9gYk4uDPsnh8aTbQY3m264mWB47Fkg8wbipfY5YTwJdh5SFnaRgq4seYy16btoRE2gzk",
  "key16": "NYjFawr9jP7dRaH4VF8M3aEwLQBaY9HShvNCXnrRLHfTHcypKuqnXkhfTS4KyQSHg2k4RoAmi1r8XL19pfVmskn",
  "key17": "2TRLMot45GAJ7fvD32QsNWsHgJ7QYahUzf2FrErRRgTqT85WNEJ2PyWZFR8Znz6dMPESv9ihvyoPX5xNZ7sak1wX",
  "key18": "3bNiyg96Bt8P6As14z8DiknirwdBRWw64RKpSsBcXWsQVhu9MpvXDhqRN48oXf8xN7v9E6pvXUQu4dW2Gxt5wx1z",
  "key19": "3pgpaCvPQmASozaJ4n9z7uotgcVyw4ByedNpjHVFodkGN2smL1CWh4mbxMMNxuSuJpM1pmSELPEB5Xg6PGRuYUs1",
  "key20": "338bqX5tU5nJKCkxg4MjHGhdsJ4F6eCGZyNTnAyJ7Nm87dGCRdrVde4nRuiA8pQtpvcjqvycoiuoWm9cgooax5fT",
  "key21": "3BJmRtMut62ZHMEApU6DwLDNyQRwiTdgtjdaAWHS6h8GoycXt9x6tebNJzhqjrQRbUWbKeQf4b1m1f1xKtiVDcuo",
  "key22": "2PmPDURA7JjVhrLTn1Zi2tPhcW4XuJGqe5crT8LmcFzo86jfSTKLTwx2pnxvVLdKYXt8z2Q2BUFEiodZfNyWd1wJ",
  "key23": "37bQcBuzuUBs5SFUhmuAcbohfoFKkranaH4Z8Z8w4D2EYKgiByTd9xyqP4xQNdyPFL8vgjFuFZJc6Fa6Fq1pHrG9",
  "key24": "48YDBvimC6Zg27Roj53cC8kkK4FWWe25DbLdMjxN8F7w9HgabBNW1x2nEbjqe7aApxKgZCZvkzjLwbNLLa4ZjEdp",
  "key25": "5f4hZ7xj6pNA54uYwSbp8ndPRibgU2Yn5ToGMWvprYfUajmszL8TNzryc6o1ZTuzWW1PLqsqHkxNthk9zKtfXEM1",
  "key26": "2sbQ6dVdf5eiqU8zdHeT46kb7WC5eb8AcRWgukqGzMjCZVocc7uaijrHwd38eUimu9NSfY7uEcN3AZVhmNp3eZug",
  "key27": "PXRobYUUsBEjBo5mjrcbkArynQGQDdkLYe2xyon6RZQ82YZGr9KeE4sR6ygBfYfXT1SqJQivx7XrNFhhtrHXoJa",
  "key28": "5Q7mwCNgxDDwy3z47CFG1faDLKMoLyCq1ci7uYTrfPgBhXzBVuuG3g64zk1dtJsckZkjFnh1Yf1K1sfxttXuxMaG",
  "key29": "5mvz8fT26SUCqHg9T6baeFDRN3AbJkEYmZFKMJzao3xT7Kmm5Z2nwdpGLfM4vtN3xE5xoCf1JLQrZNcVz3WBkEF7"
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
