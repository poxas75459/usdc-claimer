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
    "qVtHioPQQ7JFgirPWEjeADedN42WgzeawJ3edHasVSj1J48Kw5bWnj4r3PUt1Ctb6PGtT4thCanVQ6EY89VweiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K16pHG41dPrv3Rp57n74LvpfxUs6c6JUygpA7bniGSmjt6aUZerjJWvt3GFz8XFhsmA5RnEZCNikTBW3cwkYYj5",
  "key1": "YbCQsivTEKPVZW3wsBnWNAD6WbeETmgsejCGb3GPG5bfW2CHSGKzw9U8mKnzwwnk47oaczWCoZL1yHcbSKo4sqQ",
  "key2": "221fiHEVFc8G7NaniP3c85pYnQoDFMKsKUjcT3VoW4C9Jh47NE5ZZsx2kGVQxjKe2dFhpbTGZmUKaiMVgtT58pXU",
  "key3": "3DwCdSKa6bgXSX5RUV3AyQLW9xycpJmHMR9vzxd2WnqPnbZycuHY4raX5QBvKEZchyNe5hB5KHVzCqa7PqvrnSjQ",
  "key4": "56547MNzbM2TAjnSx3DyguexvTC7VkXzaws5GW2q9YQTcTCcyQp1LfyS2Fh5xkestMBR38FZLmCUXJ146GTkU6BA",
  "key5": "4KvM42EjDDH4ZMg623cwDT8fnt3hQc6EmRZtKpd6SXXGcdd8dNSbSAiVYVZwBHKMDmH4MkUgHYUEvEo9CConS3f4",
  "key6": "2kigWd3rpTFaJHprT2B8pTJZ4CWT8FfURmgEF2TK3WZPXZTtjfpeNuqAMnNgZ63RKZ837oCU8ZfiCHXHwjtz8wCG",
  "key7": "2JRoRQTF6bsqCXvfUd3AYeon8ZVcn6cXDHLycCW1PWho3qioQmtdyEE892HoEwSoMRy2jCP9Y6a3hFJb9gJrRj7W",
  "key8": "5Swx26GDv1n88YHLP5NtPu2AaN7NWC6u47QndvMzYE7y6GYrFmR2p4cZ8Cbf58mNzW1U4dNFgGR8aGRvjKDPDXyx",
  "key9": "4yB9948Le846CH1tcNVjeDcAAKCfb5XoTwgS2iKUV7pGUrqsX86MbhRWEXwwPGfSNEQ381qwYM3b3YDsfYkyxqTk",
  "key10": "57tgVFixUzNWE8vmcK79nWsc8cJy7b1VqPfpqZVSjS7T16p4dwTGx8Q2WeqpnCuBmWenZdfAi2LobGv6V6Tc8f3v",
  "key11": "RdAb42CXXJM1ZjG8ZeSdTd8n7XmFxxS6kbevTXxPFJuz5VYLwVZZ6RyKynzSh8N7UjtDA34f4x4tNwrY3gD3hEe",
  "key12": "5gDyby4GEoVK5DJakYN83jTUyGSzrzYnnaWQBLzmiiLmPwFdVLKGRjF6dLVWkeYeXe3vB28tHLXZyNyoBqimA9Xo",
  "key13": "2Wt4cXcEXyBon7dP7RkqeR9ttkbLg1nUXC8PvJnNPiMKftMXozG42LdWafEGBcBZvbaMVSk3wXwGWTPWiXb8SGe4",
  "key14": "5jFNB37YzkKCxW2QhGfgRVK2RCKTMnocBPXPpgtbLvZsWJZ7aawXmAAk7sZ7k3PJtZBAB5gTdSgGY4UW8BGzbWaa",
  "key15": "31bkrwbKTcez9Jmf9LH44XLcdAKi2V1D3MPyF89GgpK3xdxRkZB8y1PnSE5LmZA3mgQyr2G8ZZvmqEhq7ccu4kfB",
  "key16": "4Py2Nq8n1aA6Fh6F9YqAizcVo7qGSePoSsWwRjtaf5Qzkiixn52fj1LkJ6BCpeyBVtofcUsLQYXsQXkNoUtLDBSr",
  "key17": "56zaZm2HJ6ZHsdfiLXaiag1pUTkLw3enriuNqPiBqCj1Gv8NGtKbxGXusqzk7icV1NH5Qgj78TJP68LtuEwF7H3e",
  "key18": "1hNGuyrrqbFbj1VQHg6ZbMHNrPVwggfxMYLpMXSmhgJ62Th3TG5H99xqVvuiGaGEHXaEnd4zuL39jkfTqVAmhMk",
  "key19": "5kTT82iicT7DnXyKvRm1gCupsjkomELyjHLtfCGqB6nRaNi8kDTT96oVqksr4NzX6apN9uDMT3maTK3155Fm7mWc",
  "key20": "4WP3B4z2y7ht3SJxnnaQXmcjrmJNFwJEARzEFhzp1a5wpG1Wo7xtkoMise6aqzuQGTVePWasMcH9gxTU8SYryiCu",
  "key21": "ZoLHiFsVnpXmTG6qacU7XBBgWGbAKCpYPf2GUmALfZohSQP8xT5GqujBXrmovFDCEEq4VG8uxbdQZe3BFWVg9ML",
  "key22": "3yjePLZWDhkZ4RrjrH56kQHuCuDkEcd549ri4PMKmNV2S2jcjEZiWxHfN1UJ6pyyp5D7BSxBW6M4KsfHzVcoDUCW",
  "key23": "4XKx9gi7g1pVqXPz4rEqMY5ZVoXFKG4EHYvz8zritPvL3KLmtQBWjHqFoJ9m3Ux5rzrgq9eN5B1tFCN1CisZwZDd",
  "key24": "5f6isoX995nRYT3rPr3VvmwyYaNh47SYSikBF3GEEY99RtvKLiUCWMwbvvNKXHH1fy3pVoX9YdEjp83BduWyucKu",
  "key25": "3S7o8aBMA7cfpWQxy31W6uE487WhqFGbtDmtktzhaJoDZxiUKNJFjuoAnwXhbEu6fGxc8q3RyrbLjWgYbwMGwzS1",
  "key26": "2DSyGDJGs3hg8FqUGPw8htCM7ejwRfqBeUtmY45t5qrUACLZ3FbkkAK7KFNcJs6SVikYgWRF4r6Mvos5DCuVvsYD",
  "key27": "2uemo3TFS4r1bpSzgifQWvWY5dD1RkBw5Kj4j6c6Q4VnEVMg7VP85bM5hAx9Xp4VGkp1361R6ATCtYC8nrLKDfbB",
  "key28": "5qqTTLRxJUSD7imaS7k72UkrviZnhXdow94yVYULJsiFDXTTS7mh9zc8158BjE2PC43zrFQ8AievcTB5rpzSPEsn",
  "key29": "3Xhz3K5UQZi1FHbEhYirtJwP8pHyrpgf8oAy9pnT9RXRgndGg7nZpqiMJkUv3hYTLTkKqqKEB89JkbeA2G2gj4jP",
  "key30": "5e2noCqSZTvmbNVC3vXYUB8zvFwjdXEfweCHpciQxnpMaY5iUsZUnYkSkdtAmQPn7NvroTF86EfDhK4RoSH1J7tf",
  "key31": "5JDXBfJ9gMLYEZM9W5kn3Z8WSzg3XS92QpDdZCbjYK7MFdnheijy8q6EkbxiakBXRhoeq4skpPMaXjex12R4J1bR",
  "key32": "2a1bzv64gpdycdeK1efd8xJx49pCELH3TH62GRVorEY5h4TYVCGUPn7h9NWTAShTnh3W8L5rrLTmhV5KdHiyPoYj",
  "key33": "28g4EUgffx5Fqo4dn5LrmHygecHV5DAbyJphW7v6ENjPz6sJxo36gez3fSknfbJdrYRziTZkr1SSE2FKE7npwE5X",
  "key34": "348dJa6U2DXT7Qm2ncVt9qmJMngS1RdREtaRUjSnU6VgvQfzxZTrJoJtraC7ueExYnaqT2AYMCHMG2fVjagNnDiB",
  "key35": "5TWmkn3m3zcQkJwqab6G5icSDWHqQbQoDWU174LeBG5iJnWKh7pm6r4uKiu37Ad1oM8v2ykRyYmRF1Mq8e2wrBHY",
  "key36": "4mXrx4KUsUMgcRS53WdzRrVid7xwrsUn6pyRQWQbpd7NYFcFSLzpiUJAtR49BvYEZb178xg8qn1UiHCdeaxtqPWz",
  "key37": "3kt8Bz4AoA6GGZcRVecz8ALuBhq38z7prQUmXY6odg7z4on7863aknEFU2PXCAF6q1AkfeEoFq1s3bimcWZp9cpk",
  "key38": "Hy17EpEMq1jXvgDgrMywAcBm9q2LLY2M1DkfryNZfqztaQmDi4tCuvwbF6vEzVD4YSB2w2GYK3nZNaSxwJY92DF",
  "key39": "4cgEfWsTqVrJmMZMoG4wwtAAkyhLeBuz554wNa9ySuurdhGCYBPukAS2h5UyBdNL9zYJDVwC7mnkmaidjgLZ8LsU",
  "key40": "2BBVVVxRNGjnqUoap5bUGopbXrcjyGaYVhru21DSMY9r4VFk3G3wRi8S16Lypw3cnE9AacR8XmVkgrJCncF9RfGR",
  "key41": "3uNZ2YDb1CNHhzs6Ue93VQZURhEbdijp1Dbys3jG3bXZoquhKD62PCVA5NF22TkRykmR64A3Q382bEoVYHTnW8H8",
  "key42": "Gwbu2PQLgjifREtMKcw3jXJ8ScRkMC5LjCY3vHfy4MFDmxoL6Z2Qz6GuuXFaDj7T3Whj62cnLfiB5zmXgMWtToi",
  "key43": "3PfgMgsy3mUwmg7iySdxh7GynL7XmxP5C6XVnirNzxHG2Ju3CLENpC6UvWH612MvTogsJwbY144WPjfoqx1WfL8V",
  "key44": "3NpWWVCz1hbGiqtQdiTav2kui3R5hZnuheUVnKMSsYNZjzFPNqnqxcXKSLzqwoZr8qkBJ5spAebVdeQme2HXXkcP",
  "key45": "2QM412zcVafzvTgzp3TFdLKn8GiSb2HSBXqHCQ7n6nomfP6Xjp6dmKxJCFvyUJcPzJGk9BK6cgUiJwaujjVu34AB",
  "key46": "2LzEnqFYahEgsDk1ESrhkCwebUGcFKCv6JfC7fQimcLzzvg971Y8KQJEqMwiZyxkgegTavTM61pB2NpDY7u2ttdP",
  "key47": "2AtgwJRGv1ebbPV26eSJoD6ykSeGL75gitRFfynqhJsej63twKfu5FC2wyDYZzJPMQcXvZy15xEPGLd7rPn6jPGx",
  "key48": "2o2dyjnZjfE8NqCddDLeytKFkQRdiNZJvA5eiJkF4pVWovoZ2NAYdcBizs8R1bVAoQpNeeb4hpJ9qYFgUJyzdg62"
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
