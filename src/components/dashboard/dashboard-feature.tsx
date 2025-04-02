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
    "5HGBNdJPxVTXhk4aswGaBeg9rvwPaFpDNaaveHBDmE7ZRuMPLy7N4FR39MkX2UJFPU65GePpF6h11BBFvzZRvXE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DF73LWzJAwKAwx1bQqTjwBVuFMcF9zEJHw3wFfNrJ9ekYu6qhDQcRbKqwVzsYvkkRriDYgZNa5p7bTqXqrn65s6",
  "key1": "3FHYs1N2mJhxE8xfMQfswp6A3THtTA6gqBD1jggwbTnGqPE7nc9mydoKnLnBmBHSgGtNg3ZRF8ytuPx9FdCNHcS2",
  "key2": "4n7wXaHVKGP59Xj2gM5o4skjJQLRRS3EKQq83jyhXdhkufafkqw7mayVkXmGHndPKJreWngfXQud5NejxPFx3xjj",
  "key3": "4VwBZ9fPsocvQL3X5zhYZocAE2bnE7DoZZw443k1h4buJwhxzzUTh1cBtwbutKyWGuXgyeVNRSxW4CKNrVaZqbRP",
  "key4": "3FdSNcGbjjbtvJVQw3N7mLVUyHnCUCXJRU1eonG99UcCkzouoG37QdNNuMos4sWtgzHm5AFXzxjNkYb5Eg3sXTe6",
  "key5": "3fQh3bsAuHfrQQusbxdSshcH5K3EotsfADGK65USYE8fVDXd9JgBocnmFDrXs8zLnhS77QUaT5uVvXAwQwq8XxJM",
  "key6": "48RhZLRpcDiNgZgPFYmuvx4drMFmJbqSqoopHpr2y7E13tpSKsRmD7bR8EFQEuAEayFdSriMygBCC929pvwXP32Z",
  "key7": "izKxvC5ahqtrztkbUG7dBVYVTLquqYo24UUNjYg9j6YnPeJPSa7EBhfVpr89TewR5DHLzciECU8mJMCd4oCyWJp",
  "key8": "3PeF9GYQmXirYj5moi3FURe88Va4tQxVNBHbDyW75keyVSz951JwoEChz1wjhKJj8u8NpAcN7Q5YBfgLk7qZqhtF",
  "key9": "3uNuaUBot5WS48empRbmdjkUXnUfhz6p4E5ArMJ561gjpnAhAj7YE4SK3SLR7vGxZXDK9FKVpRGgaEL3mBTMiVUZ",
  "key10": "5hnRAktZFegY598XKzd39TUstEa2Z5eUhVmutbCtpi3Vq4TBajHRmc5hG3tnHJzxLkmmnw6krz8i2Qs68uDSpcqu",
  "key11": "2FBSCAevvip7sR2ZWjxxrdL3WsrR5RqA7KH9R6VMRN2gcZvBciePSXiEW6cJaDGTbxv1VPySGjNwnjh8PsP5YJap",
  "key12": "3CLbEHtpr8Rsmxpa5iXrfCtMSiTum3ihTjfnwwE9ieWEiiemSQt9GXxBXy4g2S1mEfUthovKy7c6wBPo7K3sR8Xy",
  "key13": "TVArPuYVsd4qAUt5Jo2SfnbfrUBd2BSrBn8tVvjp7uyz7KaGiQ43Nap7i7qkjwsgc655EhnLV9b4seEVXkgty5g",
  "key14": "3fqPLnYTZrtRGkkiUoeKc38esWaB9SjiZbdKvRgRi9FwFgqRAsqXD39RL9yJ2FpV859xhy4tLW11i8haRSTi5G2t",
  "key15": "5hPZpixFNhZEnQBoWfwh1QX8FdQxJdhJHrcwQgJXLejS4g5vszGfnCCVgnBuxv9HLZkGMRFKrzrh7uY2titt6eS1",
  "key16": "5cjntEEfpw4i1JiuePiYvRUepqhD8bfpFgcApVJ5QSPPTwVtShhtqwyEg8Red1PHup9dUspH2psyCi6e1jmpSWG8",
  "key17": "5sxpJ8jfNQKaC5rRv2hVzJhCm73G2JE8QQAjZV7q3G9iXxGpW6VhGbxg1orQwYMPfKW8PpKnRXHw8UJFiai4TZca",
  "key18": "ia3C93tpFz6AMg7CrM8HuV4PmL8857Q5EoyBUK7fkgAQJeZR8k4ys2pJoJGfXzaA6jAzs2NM8a9v3yxkUejtTYp",
  "key19": "2yeapbtGiQGgC1yP1dvFLdxKqMjKo71He2zkBQRoCbfVsKxPEUvz62PgHDbeuS5nB9nXUhZAp2qrZALNoTTd8qL8",
  "key20": "j1NqB2kpBYyxjNj78uEcgtapCQgs6yZwb7X3AhZD1kQ7Ju1EGufy1VN7Pxav9s63kjXf2d6CL7EDE2oSJp9zQjq",
  "key21": "2WUtje5MByDzMwwR9fpYvXVvTcYV3MD2eFrrRMn7TEgxyx8NTw1PkJxote7UrFRpz5JxmgAvMxRy9VBfefZ5Zxqk",
  "key22": "vi8Hac2Qk3XHKFUW7JMzEVaSTwyuGVrsxymrdy7dz7b5iiAwTmnKExxxEGEzXjdwupdjxmscHbxkQLZEaqy1qgF",
  "key23": "YjsTF5ASpVdifcNdD5kuViqBNdJVqsUMZjz7emET59G1hDwskzPRQCNuFsczChDhYqj5ecwbscH21NtEKmVcVmF",
  "key24": "5iTaZyhhCTd2rhgXzKtgEnba86z2SwcVVBrBScsTZsJDQjso4ZpkLoSJENK2ZDsBWSNSNnXVcNemEcXfxf82uu8P",
  "key25": "64JYQ59rAHc966jL66gxK2TGqETzV4tPXp18A7DVdnHPLL5h1mnhb1Hno8ew34jrjQ1BTcPConffjSHzheoGPLRa",
  "key26": "5Hn8NtoYPJ2oxDFMPVjw1zhyWgkreCn2fVqqgJH3bKzH9wjScH4Dcu2hSRxgyfYytmgVkf4oCsbwLH7YZhBPkoD9",
  "key27": "5m4VFWCDDnnJxaQDsS6rz2hYq8MDNQNNnKMXrEtxkyhA4b9z8MAekXecbKjceGrzKv5W6TshHVuz8AiFSgFyAu1d",
  "key28": "2YCurCNwvZe3b7J6mMrgNWNcaGsUPwcXQt3wjDB2b3DY3cUnjFgH5qZrEEsGy5kBn1KTqPfFUvB2e7KtvUGpULnm",
  "key29": "2768w9ScfDX8GK3QuMieUBPk5cFbdVe2SAKMDuowWjKUA7XYBQDLZesLRrRMVcYjXH7GFksVBbhcZxFa29sAgqvS"
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
