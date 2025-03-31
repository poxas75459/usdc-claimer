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
    "4e4F9ff8YEhfbsG3ZFjfTzrTjXKaAMEpQrhE33ufFcF29aGAdvXU5jnefnSMR2Mp291e25Y3F1ZQSVazxu72vzXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zcdapbKenKbNasymrF3UeioVn6P365tFqZKHrEoWqASNs8BLby74gjMqM2UCNCgZJiWCP7bVL1NJTce54kTe1Z1",
  "key1": "5su3Av77cbBazKTk6gBErJGdp9BLFiVn7pRs3TiKEfk7GmT6iC7onV5vNp4UNQ1XN4AsrWnNNhFmbbh8YnwUVmM",
  "key2": "65v1VX6ayqGvapVZ3V9LhsiJxpHVnntPGdqbNnxH9fcE2ctQ88SiyFKWcKER7kN5E8KATCz5JAKx1N2yVK7Ns6ox",
  "key3": "5FhDRZ1e9uGYwTdYSJHsVoTHvnLoScy3pUyeHU9oNyfXiLiskwNJpspuEpxJ9RoecmU2k4K75N5MhfzkJWpH6Gf9",
  "key4": "4uTQYMUcXxrufMsEcpbRe8AyWitFAJEqmzceaUFp8KDR2rtKwwu5XgFgMc7BU4CDhmUTBzNtbiWjXH9dN7xhsv6b",
  "key5": "63uEkPjPVVdUJsJ2A89HaW5fpWQUjPEkNtbxhsBmEdMd4pmmkLYsyNPhSm98uYSE2xkDKS9AVmfmyhJvs7MMCDFY",
  "key6": "58F7oUauNGetxSn3K1tLXMk4n1B8oj1jKYuNcLfGzFWzxR8sECHExXC3v1FnKU2XbpbgWQ7TwSax7b4jMwo1CQhR",
  "key7": "4hfJeXFAew3Rww69M12XhiguudhSVNGK1uKDUNw66zK3A7kaaEY2AAK4AHekjbPdHYQzq9DD5Wxqwo8esujucMVm",
  "key8": "PyPkcCwakH7PK6LhwukVVXk7zYbn1oTaZ8kdncpxxXyLRruE6a4J9tDYkpV9LQXFHv6ts1N651nakdh2bZQgHhX",
  "key9": "5D8JvvwGwMJbtXhN6LPktFiKcSqLHBSBKx1Lqnj2vkRguW5umcLrf4t1w9pWSUZ5BKRhq3xYf2crtXTUThjsusiD",
  "key10": "42pTJTA79t7t856erp8ofWPybabxyy2Cc1ULZs337ajYTNdSeAx2pK3r1EnVdpCGzUuHCHZA6LFmiDXxT5WntuwA",
  "key11": "MWkL1348MgLadWmRMMiBz6kY9wEpsAcF2NKMBtoJPJHyEDhbWWERQfHLjY1cADkF3D8NtDuGjKrbwHkSEH7YBxa",
  "key12": "3mavYKc6r3ENZWoW9rNz6sTfTtwcBg7F6zqZp9SQBaF48xbmoFHGjz6VzaVtRSUCV2T4w3oXxku7iWmcYrxgfCgs",
  "key13": "5hPjpnvqH9S11JCEvkZVVp1twW1BbRgEhyaY7JFR6BXcUrF9iYg2RS7SGg2U7pt6CD4fgiVHYgGKZaVUBhDJBywj",
  "key14": "5cWKrTGEMdcgdpm7CZvQuunxnodZJLVjuQWhuioQaVjDaKDM98tComvbMNsEDqebrSSh5MbbEAm3LwQitmebqD6S",
  "key15": "2CUNyT3s7WsUjd7Xt8egCxRFRb6tDGHXwcDcUDXLxgXP8cdBUFWV8R6bXZKNUFkgy7NX386Tr37YpQ2EYq2PfpRK",
  "key16": "48gkqkq5wEmcK1WH5g1mczrhbjHAukcgRbfJiMVXhBWRWVV4ewNG1YVmfX3GkSZjzW1bjTBgGnB2SxhZxxkVRAFt",
  "key17": "2tzTCNHEpepK74zrnsjrh2wkcmh41pzx8q6KGM2fc2DoBh94wrTM4MC3MYurbrLeHwDuQdXkN1SrxqwryFsgTDbY",
  "key18": "3n7Qh6yXJkMSzmG71eU9kmMzh1PuhXxJTVCE3PpWUN24c1wTYWiEBWx6nKfhL7HaZqyAL8mBucWcon6C6tRR9hRZ",
  "key19": "2dE37YArqLMwzHJhoQgEC5KfYN5Um8DSLbRXU94HEhmmtxDfPNK4QGbGJhwF7q4hdJSPShj5V1QzJnrqCSJpq66m",
  "key20": "2agx7b3EXkzJwAAxiq5tqQU1M7wTjnJ1TtxkafwUGf4yVkcsDPDBcvxQjxigKdedpHYgKR8vRgsJkhdxw6exd3xr",
  "key21": "fruatZVqDinVw9YtUgCkeM5JwAPiTCzWc42JZ8DRxoW4xGJ3Nc1aPaT69v7CKRzJ42puJn5SpjatxeBYhGpG9sq",
  "key22": "2bzhkBa3j5eYVKZF4PEdw2T8jeUGK6grRYjUKYaDJVj9ydgDh4zzqJb9sJ1rg6ByvgEKSbiZT9kGgWjUh9MJoHiW",
  "key23": "4AkzsQxBorCczGree6DudE5x52mEKhDBrDx2YDhMntT8gE3seBstQqohbMLsWVW2id3fG4Y6VWuYB3F1HoGR6FuX",
  "key24": "4NhHTTuj9SadXKqTLgUVN3VvnLjXbgG6LXtwM7uZrANpm7YfZjTKkw34Z9Tdc4HjCze62idA83doQrubV4poN3DY",
  "key25": "39vsNSnLo2pGiYsxU84tW2ZGMsMJyXecSSbP8rCB7tVVuvT5yopfqdjqZ1QbxEjFPT9NCDYoi6xNGu1T1dmzs15M",
  "key26": "kA1SoSixcuMGodWi4pD1dALkwWPV5vGUH6sq3cN8Y7hjoRGGW297Rt6r2Fi79ic3yYqVW8FKREs3px7xgYQhwBa",
  "key27": "47DiWAxYeNvsc5ssxht5JgtJW411P5BfP8smdt53PvKtFCJBddXVriZYkENmNZ4e5gb5RKwLuEdMWC8Tg7bfvcHN",
  "key28": "5yUXdhnjipMejtJBWUiEDTbHVJMinCqLWJNVcEeWoCjJ9BZrRJVCM1NMbxvF8xfF2kgK9GnvHg2oR4CjqbVAkFJV",
  "key29": "3VttpvXEgMxUdhDTjMyL1p3jaJNpuuQnyeT4dTR3rkZh51fekeQHi6hLiTnaAn2Qrmq5q7oyWVteM7dXCi3yeMP",
  "key30": "3LWwESn9u1J2RsDBAArAXdbtnwDdgJn9zCdwWxWKJHbmra6aYo4zM23qSvgmPTSKvUGDdGDeysYP63x9vhnjGdTS",
  "key31": "5n3Cj3xPmyKe3ATkMuDd8xJGK8ULZvJWdyDHhGnc1BiWpNwZD9s1Z49DbbU3MKQFF7FcJkTYC9X2ZTeGH7wXWcYf",
  "key32": "99qdDUCF8se833CzU6EaM357yMMw6b3HuLP3yK9yWemrtUA3LoumkPm81xX5788GAze7NpACgEoXM6saVZnmNL9",
  "key33": "iuwSEewiZer7ub2PrFR6LbByZPjKgggahhdV3dS1F33MxejWNPZCi1PVzsJf1WDnbuD18rc9f7SiVfjC5JP81GR",
  "key34": "gJfM7fHGE1oxSpeQSM3K3XWhBr889L4AN6ZoFZR632wM4AAeCas1x7JLGnH3ADJTjAWrerK5XbovhGzhjtNLBy6",
  "key35": "5M3e41umS4DNiG634cb4TxsX4U1CcdjutqygkQRRvgCJXofWKt18WEN1veDyziry61yhA81xKGgpUkA1PGQYTZ3a",
  "key36": "4j51gyUDXjWe6ZHEPFAxwQzMrWMx633MNqbDEDzRSUnSXHTrLHVZWt3QeBTpB12d2bWEVipoSuXX2nwo6x7x67pu",
  "key37": "2T2c3CkiVGM5Ywuxcy3wY8N1N7MwYWCKfnorqW2WuU52Zn48BQ6eibwKvUpVhcLfYPYcLUigJ9yHFaCtjhkxL6mK",
  "key38": "3CkkxNR17tYKyv14pbZppxHJhM3XnvPWKuZXxfB5HxYQrqFADetGm4N9fBvGNCo6RB93gZ7zhi56PRoGesrACWiD",
  "key39": "3ZnD8oUUTH9viLyS27zwXJo1v4n2oCDVaNCXuRLjUnWMn4XBvLK3FAVA644CTDBkGepGAfwKVWib9UU8gWY4eLP5",
  "key40": "51J4mMvrysRvU9gdJbKe4HJYNj2azBqCreFHserFh39LyREUZP5BwCvSq9hV4s1j6zqMGPUXiu6RqmHr6H4h5HAu",
  "key41": "5ZJEAMefoPYhydYei1XuLp7PmZRMLAuN55WDCpWdvhQbKnbCk7jo6S8ytLDetgva48kKLj9v7AGNvvZ4aDcpQHGA",
  "key42": "34AMABvZau5FjB4NYQdxkoPstBxRsuSB1G3kFSqRRe56sPa1SHWhEqudnW8MJih2nuhh3dFzi3J7c1148ZbMyouY",
  "key43": "ACwaivKuPhP3XteiSo4yzpJtWtPe6qxxqQXzKQRDe2gEdkD6q2mWgPhpWMMvEeWnMwndP52aAeTSnoTovG7VULX",
  "key44": "4Bo5SFXUDWVtivDyt5FmvRz2vKg2LB6Exwr2qcVKVthcr7iBuHN45pjVZJqHKYrdMf7m2gXs1ExUaZRtC7J37yhy",
  "key45": "J2KB4Mm7Bezkiy1acbzojYjdCMEJY2zwFBzr9yQD3L47DyQENgPC8cW5eHL6tbVvBDd7yJsJqQeHW8HcyEyqvjB",
  "key46": "5AC7YSiijYtjwWBDBnET5sKsLJa97gWnAjiMnmJ85346i3UUwx678xQmjQBukzXv8XG8iEUwUVz2rcqqdDBUmBTY",
  "key47": "5WNEzzyL5timBwpdFy7msnM855sVfYhGTai8N9b3CHoFMV53pGsjNZHHbvjAsKtcC6AXQsLheJPQeVCWhsnYLrUr",
  "key48": "2XKmVen2CsdCYtFMqRjA1VuAzTE3fgNFb9FcNLAJaWpMja9RGxNrunHsPanVfkhpSaQUjmi9iEbGAcDWSKfdsLGK",
  "key49": "5yfenNvz3d8n5asrGC6oTEWCp1Zwm1BdyrLCzrAMRhhXfqUeZSTVe9U3NqtuQoQYa5KjKToLWkJyEqFC9hMstSYb"
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
