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
    "36AQyNNsfK26nEMCZa6KnzHFATbjTknYRz8v3ZP8BgUN3CQxWWTuyy62f7G4qtWH6wts2TbKzqZbmuMbnXMudodt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kMjE6Ai1YgK432s5MWifkqsG269i719LB99QuH5ZyrgMZ62kHCVCwkNxQeN2NkAmvfsj8PMzGC6huprzZesnWSB",
  "key1": "3wddcD7RKCkNVicg6Xqkyt99UBjSYZ5sPZEzKxZrMPa3ikTk6zQ4mzADAiEXeazUPj9zwuVaDR3a5TFAkr8q5w5h",
  "key2": "5Wz2CbWX24WuVbVRmnJNmYcML8cNkA7tBwC2CFSXkFctic5c1mLbY7PM8icKVWXybnRK3JyG5REKU7GqDfnUu9nQ",
  "key3": "2ngSYyQTYGFYSexw3URhwHRyBVMwChn4RpmJpLbgSeZ9prAMmv5afJ8GxU3bSQw3NFLsMYVYYM28LpkBSan39Mne",
  "key4": "2Fy8orh7isHT24bj6ace9gSuop5hYLGUhxVN594vVHDuVErffmqezEksUooreVMgC1EN4xN2iVEEfj5svPzBksda",
  "key5": "3ddm86qupdY2aGbNu8KCrFhRBgG7dL8oeSNvDFsnSGLjfXaxG5D2CURa37vGC1gj89xhFeMmGx4eKaH6wDeXmdtB",
  "key6": "672k2CMmyciHZR68PfnfGKuHHSUqX5cQBJfzvCHMREs5fcefYEFeLENiM1Y7LnFudrqRTZagiSo95s7ypQaZRS49",
  "key7": "59aksWKcbcLtwLVejaPx1vTe87dWfHpNK3PM5LG1YgaU8wEAaZBEzxuFY1QpqNbcoqRdJt7kP1gHC8btGcQ8RDhE",
  "key8": "29rekTfcUM2EiwZFiLwRvV2xeVkhq9j4u7oijqePZbRHtM1dJkZ85pDAGtTbhvchX9hQ775SLZN2WULVcvPr3wLh",
  "key9": "51WSPHCeRiPKDPmmSCdFSBWFYz8y4qzVVqfrCYy3xh6W2tc3Z6vedmDJpAK6WUHGRkPcecpowo68W74RjUzU8Zgz",
  "key10": "4ZtNMysscBznhThu8cxEx8R6Y2D6Cwmt2uyUc93megwDFP1MrPt85STcmUrF2aKzKkKfcWCtqek1qRcvkDgDNgRe",
  "key11": "4dVDEoe62hwbT7gQ4MujoKEsr3W21dokBA8EDxw9hVMVQXbwVRt9QWno4nqzxBqY9qAbkGiNmM8eWRMTcrzpUZAp",
  "key12": "5DAmqHPrsWR8v3YERj6FZWKCutrGA2ugYtdfRmwGzvHVKXgz5LEbXLDHnQAHTB8LB4gdgkFgBcB4nof9MN4N4czy",
  "key13": "2889jnqn12qfB6Bo4ioY22QVt2CK581jgFHhvnbDetatmrUiaMRUwj22vqBuk1GCr6cBFUNCcXVwVgEord3ducy1",
  "key14": "35U653ucetdtQBPH7bfCqKeZHn622u8KZaM41FY5VkaUfZFrGXiaf4T2Lmk85hUdgtSPK4VCyRbRm4iFZTM9HFEJ",
  "key15": "49RTXWZd2UsCq8rS54nWKphZB3HoNUC53qwnsU7UBJTRzsd5bbXPaT4TkSkpihczWcewe8d8dWRDmGXu67Ap3YKA",
  "key16": "5tVENcEVm5fuGn1xz8gwT2yBg9hMLpwBo3k8QFujp6C6eKfCWmiaWyviaNuPxiW59ZkkNFjPBSdrZuPEbcwAtaiM",
  "key17": "3np57TdM1PgVKMBkyTR82G1yiJuCgTXCh9YfWW4hJUDUPeZPdwfjZnxX8TG7UZoXpwwpzNsoXzQ9GqG7Wo7dy8wh",
  "key18": "3PAQzXhAJqC1aqg8MF3cKduyrvYoB7QhQFgqEyXJxkUcXGQ7mFJ58DTFM5NUPR7D8fTbYFDzovMxszj2FshQAxNN",
  "key19": "4ManjwLDQfw5XukXKnJJvr65Jy8mehrsnhevnxPX9PVxAjxpuf3xj8QwjZDt7npFXCQkix7zMjYbn8DXLxzGM5pH",
  "key20": "2yhVarGzocoSfHVhDBbYan8sujGoMkT6jWeuMZpjPBK37BFQR18N9SKSz6dAk3g5YiPBAtsdbk26tmePBShLG1Fo",
  "key21": "2WmjYv9BngNHZ3gGuXm4Jxb57H8TTFMgS3mkkyHwyxKBfDK9TRAAGmoL64dnxQmUZGYmYKhxxgkvSwZTVUvBTigv",
  "key22": "2CtoW1RvXAgSCegFGewfQweiNXJtDZ3j4DpZr8eiiDyPxcZHYmq4KiRCGxLufRwc7NRcMTQbdkCPSecUVY1sUXbL",
  "key23": "4RbkDUGkfoRkWMan7YNgtM5334ru2cJoxvpKFR4ggP8FMaYZBWuHDyKD2hSwtLe1srwJrUYi7ym11yzfbxvpRx83",
  "key24": "5dJWYJHCPHDb5HexLvBZjSvzRUsvUUi4jT1Hz5aVmsk3UabGKwnsU8LCp19xi9BFUGnQ7E1V5726Jsx98deAjdBr",
  "key25": "f2iqeBR6AHdUrTFfYgvudUcZcnqKbErENZv2dp5S8GRHE7KSkTQ7LiuMvdnZTmdReygb6nwE51r1LSWmCYWqYUJ",
  "key26": "2ZU9ScWdDDkA3j9D3TZBEf8T7zNHyxytnwEkR3Ur1PnU7eEqtyUuyNjF5zAG6VtuWN6PTszjaz8BxRB6yzUCGhTt",
  "key27": "5Fh9v5BQvouGb3xXtrqDN2aUWPKGVz2zqvsmhGVtKsZGQCMe2fDCYyw7C5DuwDB1o5oy2ah6bUmfset4ZBmBFmYQ",
  "key28": "2pFuxxMasaniFnSmS7dLamSJUgGPRzcHJsJgaMrFpmRZQqmKAdATutoWHNEu7Y5dsL7U7dTzA9wGjystMWNsx87Z",
  "key29": "4YAjStwHm4h88SEDj3RMAFPnduuKF4KH9RK3c7YaC4JTJS9xYVBitFK2mc1i56bnce1W6gPVFima9QSpBZUupFhJ",
  "key30": "EtuPA2dhCn9KfQQvDqEtWVk1yqb977UYK5tzFANuPnFztymL7zBNEHELYgJgRny5vvEsKi5fL38egJvFZ4KFqAh",
  "key31": "4TQZ2jygAoWqLXUEcK4BiwMuUHGZe1AXmpNDvU9zVgeSGSVHbZkckijwDENn53uoiXKnRCAg6zW1AivdRwyKc9e1",
  "key32": "3p7JzZaR6mhs8zDfUTYujDASosT3Dn1ppSnUF5AcjBViqfyEqp4hWHigjyTY1rEfU3c37EQQgiVK1rZ18RD2tJ1k",
  "key33": "4fU5Jpa6cwzPjTbBKmXhJmtnDbVFUV1xrjY5BUj6qHfnXEbrQMn76csrYRae2DijCpfoZxqCk9kL7qEJTc2gVB6R",
  "key34": "58iCABE4TmqfeUbwqvTeN9DRcMrnTtsb4jDRUTQndDLZAEwi2MF5EViT4iBqNXiRe4j1MUU1Z42rA59obPgnyvtq",
  "key35": "5K9nceJJYUmY48yekHvFjusx9WZHUUzEXjDjuifzk5QztagFNR3oVCQf1388WUQa29DT4hXFLWMxrZh7BoYMnaQu",
  "key36": "2MwfSoW8FDyjtQB8RjFJ8Gm4swy51Y44BEQZQ6wLWNcKmQd99vb1KU1L7d545WZMruD5V6Y8teKPoy5RHbTgsg2V",
  "key37": "2tKc8yJpNPCnW3p2X8bMUHbdsDvfYrCRhbeLktznZhP6Sb3YV8zWqotvyyFe6MpedwU6q5FK7EoEqDKEfR22XRZN",
  "key38": "53UnyBzQvx2bWTCR7UFANA5HTaTvpAh1oPv2rfufgcyv2dSs4QWtBiApHuNxzRFpnEY1WK5wcc3QaYS1GhrbzZD8",
  "key39": "5oBGRX1cB4pTzNWtWhhQi2ZQqR5o7XU6KZos9M7WMut3j9P2nZFRgSWSg87MbYu3HPCHmfi4PXVvkygJsLVfxSgo",
  "key40": "5s1f9SPXPxrrjSJ8hZraAeqMs2pbFcYTPR3S38yifmM6G4qugZDBuLHJVaqxQygnfFQtX36kYAHkxbM7jxCn5Wm1",
  "key41": "4MdY4UacS1NRfCceTxXFHu4bJ9MDYdCYZ5zbUv6DLjJWPPVjmAMqXRSd3fPikHuswUvgQp5zERqhqfpxca9MZAAo",
  "key42": "2q9ab3htNuosw8ebEQaEV4zES7fyqbm3qGDJG3ycVS3obCucdd1kDPdhCQpZoegAY3iyVVUsCvgSKmDSueDphTAY",
  "key43": "fQEr3pHVEfUHf1FPaHxAhPEBoMt63fnpXSXX1YwGDquR5rpRoVRu9DpLL4TKiCmcXqRiKx1rbRUq1LfKpsaV7Lh",
  "key44": "LBPZ3H3WcQqeWgXd6sbGK6jEMkoiM64cMwhvnf6yMrFRRYfqgKntGwnujcYqYUcnz29q2Beh8JeM1bSJN4Ev2LP"
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
