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
    "2JgQEQcS1gjwWdKpDttMFmUG3KddxWG4acdq7Pz732GLpFvxi8TLk6zsskeXzkjwMipoyTgC7S23CrNJxCjkXSwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g5XFDuCEcHYKxzNCMVvY2Bp9qS4jhx7mwa1tiSofGuevwTrmV2XtDJKzSQBBarnpLMjjJ21rZgN7MJw2aZ4UeGn",
  "key1": "5uPoJVokGcQKTrssFuxDaHm9tfyPt2FpKkBbABSuDUj4hwf4AQ25QqiTUZtKPGir65jCmdVAK2nyy9uFV9EDoM7m",
  "key2": "4s8FWnRBirC4jFaWBhwvXWFuUEhiUGQfE79CXuQJPzgDvJCFtvJhQv74FQ3Xd4VoBkc7ESutHRR5GLu6NB2ZTn2x",
  "key3": "4mZtS1iHKdgBDk3Z7d1tT3tAcf8qzZjbWhgNg62G9g8ig1kN4gYdbEYSSuJdiVWoDNGb5YDxaCrzYai5hjroJCVe",
  "key4": "4cTXNkTNYwQaUrrJNKka8NHPN5gwuaV3BMb3DDNJcA7iPEjSqm9ow4crPvqVBRNdDrPZp2AyuGCuTFzjv2hKzHZD",
  "key5": "39mqABBK9e472af9nPsw7Rp7QKoXAJEuCtyZHPGAqa6PLSAT824Gs6hNrAo1u1HuAX6wVD9fP3EoSNpo5vzftuce",
  "key6": "3j1HTakzzRp6nRfrawA31nnjDhKnySV7AfxwKsMYBViiBqnsHunVkbq1qMv4PPTFLKsBdhdVGEzMhNRuCnvXXBh6",
  "key7": "55muB5sLEnTVFx9uyQMVVxbfo8UN9ymBFMwEN4PtkDeRmogUXVewAQb1xoNbG3qdHgWxktDbaPta7KN5sV74C2LU",
  "key8": "3nwKDHgvaLEwP7RMn6MkMihJF4ENzzWB3MFSCZNomGB1Se7HvQzQa82KyKxBbSXEVGWQxjWC8yo6mt3mpGnEPqMR",
  "key9": "2z2WSkcHYhX2zMuEy77akvyJa42LQ2aVN3cgzUu1A9BMeTW9iXRwqUnXG7DFWJJMMmK5L9MPQf8rmj6FZPB4p7dy",
  "key10": "3zjjC9DCNRoZJcQs1LtaxknnSwiN9wLTRpr3PsfEP5g7hRThaaJVQHeWvi2ftcHw7yQbZ7wp32pXYvHs3GCpspFX",
  "key11": "3k8ARePyx2izffmoux9UPmf7b7KAqAc3w4AwGBD3Wz37EuaM6w56iFcD4YyY1zsgdYcnoPRvCKb8FbJPjN3mK9rX",
  "key12": "4QPxDaiVL9MhkULhni7oMbMwpTwcbZqTDYWk9JWreUumvgeHUC4BTyAuVUJDTcJNsvVauiHdr8PUgPKZTcBmqS4R",
  "key13": "3TNLKDV7rD8ANe5JzxDNdQkYb1HkqBhyjDeQZFA1CqbPFGw43dE7u9vA6C6PtS6qB7h6e8ovKhZVkSb1m6GgjjDQ",
  "key14": "5kqNTw9sFi8P6ytEA3WReJwMzcgpZNnidUAJvgkRRvwdub8Mj89BeLGJnM12aUDZJf5g6nHqiEMrTrjymrSwSNAC",
  "key15": "MrKYLbPHfH2GewHyoTYiYhas1gSTMWYndHzbxyfK7Tvf7BmErnNvgnDgYuJV486ooZvtuhv2PpxwPgYc9pQtEwk",
  "key16": "DHNf7C5o5G9rJqQMz9YZEviC7k3qDzCzF3k7g6EtCtn2FmHH5WmDJDcTMh99VsrRa7qCbTqTfaTGoVdVSkQzJLf",
  "key17": "4DqyxR5qCLhY1Tj2iags9bAnG6JkRGR6EimZbyyzeVQtNovvCxAQVDe3b6rU37X4UdbBQEofdaeg811AoUuTBwd8",
  "key18": "3LA4TNsRFMe1dVA9XoLCtMDibCSdzfanS6URaiF6kryjYznZRAnMqFnNt8zYNcd6CV79bcZ2RcxbCUPWYvFp9HyN",
  "key19": "3c7iD4jgV7v5Ehj6VNJDSUZ5idvEmz3tm5qR6gEksG5u3Tx4x9yxi8VcFH3osg1hvFipEATmirs9zusDF2M3Kfv2",
  "key20": "3XLS2j7yZ1AEASfGWNf9zZ9oMYEpMUXB2T11M7RmhY8WTt8vJwejgBuNZRB53m8e6gFfahEuA2Gn6jU9Nyepky2B",
  "key21": "33Vy58PkhShTbFwMvAG5Um6iciqNgiqrPEHbSgQfkXi56RQSd6DXyAGjK4vKFLnKxVb2ZiyRrBgm5L315oTvnsRA",
  "key22": "2NHNamNTXFknW36XYDn4qLQajHsMtRyaVuXpaAFVAVTZYmmYxhXcyZ4HeLbEK8qZmwYtV6LVdBycXY3Z9NE1VbcD",
  "key23": "53guo1ht5M7jmfYRUPcozb9eSpiGrUqNjSTTVoDthuy8x7DfEXNnEftrQ49yHttdrAYb2kqFUvexYzfViJNEfcyc",
  "key24": "3pgH3t6gJSCnBvybSeJ3Sjx9bQoTCXtuamwPDFLZpuF9LNMTo6MZkXCApX64ZpiCjdQCKaL4GKsi9dbnTWEh7zss",
  "key25": "3F3wML4xJYTTrNfyxqBjFEJbCANU9w5hMXsmme5jzushirtv9ALoHXZ3LwxF6dWoewmSzePpjLzF8QwXdMq2aojt",
  "key26": "4fqCB5ndLbPo65vLz2Rz3KDWaFY51FRbBsun7aok2s5Kb9GnohV6dWMVVV6SXHV42msxdnkxY53vnWcGaeXCzPHc",
  "key27": "dfPs5Z52o7v2p4NecEMZiCvT1NAEyfExSD5a5XKejZpz7T8K5DqWUjerQMyZjVt5Wyy6nesvGLhaCLi2NE2WXVh",
  "key28": "39f2bq811LHzQ6wgwD2j2XBMXjA6gwRprg18U3wsC4kKqBKdmAznQfypCvGRahg11EtiKrNNQqzJRuMBdzU4FADP",
  "key29": "5E6xpswwApivaV17cKYhszH9qAwuzohxbaZ4orb3WKb7uyoY27QXuU8Kam9XJF934dhp3himXStzSknVHeXFg54S",
  "key30": "pH6Z9huw2EFUEabUcpxJAvwijypvWR5Ju7qx1fCdNtsRT5Lmh2YUjj2j2qDhm3DvS8fUzkDU3uHfAJt8dGrrv15",
  "key31": "2Nm2uYhHY1v7Lpc1mwZnUy7sHaBFX97gbsb2Hdu38WoW3hCb2GXuQLoQLoQdzZ7dMskdZHoETwayiNh514DM2hw8",
  "key32": "5Ve9gZUKx4rSkbFUN8SmT1UxJr9nhTjvKRPAGHtj2AquQsaGQQdTcDnrERKqdAoYVLiYatHLNFAyAAf5SrxUjWKB",
  "key33": "38RUH3aAkpLhaxhsDX6sbaNLKxFpjq2UufETfRmBMx3PYu6HkjYfeRh1RvXe1FD448wGiKynSUgFDkGU6bw3Wzay",
  "key34": "2kzbBzQQU5v7JcHesTg7aYRZF2NsVRCxwxpifgMSLjTmXzybKiV1dZEbgEFMXpzwgNsnQ16oYfJKkbfrGorPDqi7",
  "key35": "53rwptuvuM9e6yegZxacAZBqujznZiq5dQqie2HcdyruHfSxVE5owtyur9kpWKeX5SvyZ7c3gme9DrUvYKidajfp",
  "key36": "2Svv284C7J1w8ZwsfnbkJhM5uZzsubKonhYMerKvR3wrZ4LLCWqy8YB8T5EzSLRSuVzwGKzhakc4VT96ZqSspJkP",
  "key37": "4YF9bfz5jUMSDowzbUdNc2Axbc7Q1b1om8fmVcdkKZxpUsvQLezjyN9CBJiQjJ1yvhxLrmcfdeQGuP9jG6iagPup",
  "key38": "5RCyorxvA7vThbTi1z2scXopb6uzVbhnnEDEeNUhAdM8EpBE94Rdw5CQ6Nt8kgKemjHafhVX2rCbrKXghmxCzZeT",
  "key39": "GSsZ9pheYWKDzFUFL28L7FPrTkXj1qhUrmYWvnVC3wmMpeNWaJBToBgwZV7pRYBAsvfJPjvE3Dhjf4nkZaoS2KX",
  "key40": "3Pd3bougEwqLQiuMr3oAmapZfdENZkLrobwvhsJdGfidCWuMiPHrWmG8qC7yhivDpF2HQz6X4K7FMccsXPJuGbUs",
  "key41": "3qaj8ZhCFMwNz3QWz1WFEXxXJdZpUmfatYXk8SteaZFML3mqXJAtG5JnDsiyjo31H2ZQQdtWLETvgh9tqV2QVhgy",
  "key42": "3u3MaUAVUaB3rxDm9t6es3WaDzNC5EtdYJXcBxVqcnWSYChUo9mRrNMx8yAmw8Zdtb42GZiuU8Vv8dsd5dRvxwXR",
  "key43": "4xtv3NVv6zkFaY8VJQL2oV3TR6LNvBmr29WFFeFMNqicUbqjFN7VJ6ucgvCpvahW9a9Yr1D7WFBDZbAt3A6C76Gd",
  "key44": "39ywvbff48PVh7CPNYv1q5okqf8G5x9saYTqw2xwF6e7q4ia4ob57ni7hCGCXVqoDXuSgLW8os4DQxex2kWbLDvK"
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
