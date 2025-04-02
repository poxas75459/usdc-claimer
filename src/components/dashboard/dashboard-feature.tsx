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
    "5Fde5A3YgGAH2H3Pm45uQCz4Bt4eS2L3rjfU1RFHXJkFU44prbgetYyd8A5ZZS2dv8hPzRFxCDfSHkgbdXqWnNNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eDQRr6rjbU7AxynM18Sdrs3YX7FUEm3QcV9byB1DjiVrfYMYsxpGBFas4eHqTGZ4Bt7RDdNJ4D2WTggTCxE8sUU",
  "key1": "EDrHobYuSeUQzEczYwozaXUhZJXuHwaswZ3QoCwq9FNckL9Lgb3DP1XoNuNinprJYXFiLJv4VpqoFLJAxfrqXSx",
  "key2": "5Fcepj2uJm3ZsdizqwmdPhXWyMjUjcBTJFPQLWFBfN4sJmDoKRVxD5xwLDdGHSFavJVp7TS4N2oXDKTYWtcTjWQt",
  "key3": "4pHTsDEHAgNDH1DUVo1NqbwDbPAc8UNsPYBs7U2tQCcHD4XxQxbeGnRAdk5d89BKKxDs63tLTnZYJUai4QJNHTC9",
  "key4": "2iWa6untbfwhKr2WVTLvj59rMmXnKDYaS1LWCFoGLgpZTMQjDogoaLdUNM2m8m8P5nRrAdLhCvDEt1ZJ3hGE3dFG",
  "key5": "n8TyJ1xM239QENoHzuhXGAwJcrR6QY8yxNQq89NLoTm5JnFhjQvZBHBsmP6GMZRsa6T6FTtoy5iKRcok5ZcqbGk",
  "key6": "4HVYncqVDSdPFGhE6kgAaCqUDgfCjszGMhT6D87QjXuwXHD9ca29Cu2QVaSHCCxg27V2GCA4U6azCDjRtEvDGrJN",
  "key7": "5Mi2GQ3NFJmjJgtWzwSHHF2W218cZpz4QF84c16Pu1Ebstqddv4ZL31i1uf9BnGLZXCr4D5ezRGSi6fwPkxJoMbR",
  "key8": "3iAEXwVGw17ig2MM3vqi4pv9vZakAy745GLWWkw8mSn6hZTDeX7Qy4TYsmg7bZLUUxXqooUi9JMykiTdy6ismqZH",
  "key9": "4hMR2UCFEoZmC5iXzypm5Yo5sCqLgXR6N3gXmwjqKfPLJckhjf8YuwowgA2xQu5GFEaoUb4zQzDsRfaPNsEDiEvd",
  "key10": "5KN5VDxSaF6B2r68qUEYJcampT1ZZAd17btVq2c9rceQc2kmhFtXaKwcfefFahCuEtMESHeFV2rTmJd8v5x5Effg",
  "key11": "4tWhD1tNrGDM3ZAq4vecTuyrUPcCFggMxfXerogQAtxnkfETowoQdftGdUH2L1hmpQP8gwu2G8m2wdRCfe3AjE3p",
  "key12": "3WDuRobzL8BTgkdMXcr9gsW1u2gdzoySc2NvgxbSPKbHohVYdvKRgtGk5FxW86517WNHAkRX9xGu1yW2sNymwPFs",
  "key13": "5xDBAGWW4MKSHDD2hYQTtQWZvoguSMAhLjbNp5XSR3RPcYid3RZyyMsDro25AnJXu6RgitnQ5ToHiiVhjVJPWEGc",
  "key14": "5ARHdg7rP2pxH7McXcU6ZTnr9jVzsveDgQFxRqnpBHD7izPLj7DtoJEML2E9VEM192TBDXdx5QgGhjHPxNFF9Qo4",
  "key15": "4ogAeVjqoqc9n4U738o8jsxpysg25TAtAeDgqSCs2wyj6TvWz1Dq7HxFk3tZTavKZ1z8gTS7qnaviY3pCv584tpr",
  "key16": "3Nr4k5TnjSkr3QtmjjBqbtdcxRYZh6kTzoU4gBCiaf82uuT7nCXMpHu2KtGNBUPgcQBHuUwRKWhni2QiAHg1NwXd",
  "key17": "2iNn75nHaActnB8FvVQKidUqZuMwBMiR5rhCph3dezfYj3xCmmHQXp9acyBXtixwbSRKFSLHv3BPXndS5fUV43Ut",
  "key18": "36JBT2ymFwg71eM8AYL2k5XyyYvZJAFUbrgg9L6BEdWzyynGFoETFFbNv4N7GRiDL5aPChaThtDJXHe1aCrHzc7R",
  "key19": "3436MLC2L6MbQCoVRiTA9dbUQRCBQy6x5odH4JoAhiRpkkpWPyoHcUdhMh6bmUD3qsUp7TekR4UVthS8Nny93fWQ",
  "key20": "4niXf73p4DqRc3E9GGBw3PM79iinBK5MW7h7447CSvvRYpMhbBagv72ZPJozqsARos2U3kVaYzCGMmEH3VTemgvv",
  "key21": "2jqHNGvX92mauswmkexy5QmRSJk5wv7mjsQDpmqRKsvghGdrzSAQsPLHt6omkrR5zthiygsQd5KDj9htoEoSM7LM",
  "key22": "5M96SXKUpPHCQrnHqzTJZXbncDd49GofLVECKs7HFLFAkmN7E8k13wzcvMssvGnUNRSZ1pCt3a2M5Kbzum2hZ9Ai",
  "key23": "63voJpAjHvxQuKkBxJ2keGxXaFxuh7aotsP8vysGTeCEa3RTcpfTjvZbc92sCBxootTXRgK46wGkuxUuWTfB2NjD",
  "key24": "4gYoCVPQvWdej2EJiMxmDKqsrSDsxxtmybuCRPqrUojWhJghxMhWk1tt8pWkjgfi6iwaY6nHqHUtSYmGzV1SLwkS",
  "key25": "5ycQ4iRWVroZY7Gn5Dao5VAeqG5XUfboYyk8RTBw5fuVgb6G8yjRoJPn4vX2Jb9RJEmb9hdfjKCCDvAYSrAMSKDY",
  "key26": "3Ue3zrjgdNuTXBWPhYGFPTZBEchW44WrvtJL436BRMY2a8YHUiJF98N9H6L91cYgx4xgHFNvmYBnYS5eZcbcf2dC",
  "key27": "3smM1mQjXTq43CLff2hkm4GMW2RVcs6dXFfpR7RnwCoXbBg4emR1N7G1fHLpecQkmnPqgundNDiDLGxe1JgAhAQg",
  "key28": "7YT6U53RWCZ8orJzyy39XNPZ5ZDYrnKyEzt1hz6ocX8LXA2o1nXXay7tbN3BMdrBmhvMGRtHS4xc2zvjEacehVK",
  "key29": "651mkcnVJLy8ARBATCDStB4vSvY8zAZjzHcooXvh3MXkgHDtXX9ezWDf6JU5wKeQHdAjJhMSrkw264HS7646rbC5",
  "key30": "5Sjzu2DoxxqgEyyUAt3N5P16HW7qt4W3MrvGq9JuNXyvrRd5zJX7YbGhd1Yq7Sf4DL1PGg1vuEpVQpbumWMd5Son",
  "key31": "33dixtHJTLY76SCozbgUzW94o9aepmu6WrD2gMKurVpxdD9uansu1aoae5VGPdDUTb7EwnAbLtkmUSnBisZ9CeYK",
  "key32": "3SsYuhpUGbECe4Kth87LZnXdPwG1Tacx3sNutkuSPRH97YAtPQN1RFaE5RJ13AbSLVD5LgeXbppYRB85SNUfeKZm",
  "key33": "2WwjJVXJ6XGMcZb82CMsrdNDKQgams1fCj5ypEhjJ7AkN1HGX8WMfruhrAK8oar9j4ZxdkNEHrJJsyWLCgu5HnPH",
  "key34": "5NzQgTuUeyLm9YPnRcJZ3CkZ78i8hKCtLcHc4aUCAppfMhzN5jc56RNcBQm3QTBEGk3ezoBUpKysL3wLsdqfcujT",
  "key35": "557De88awNCaNqgf5aeP9uz3HKYSnX4M64VTKwSyDES8gepgXeLgWkmQaxWsgP7mYc1gkdn34dKev6ndSsy1WD2s",
  "key36": "foph1HhZYshN5NT8yWmD4e1QBSS6HFVzyxJnsGYYJqRz1nt29czn2fTLFRso5GmnpbCB8HitUTp9kFP7vm9RQyP",
  "key37": "UP5NPa9ohDET4NLtb3pGADgjKxDDMjWpZUQ4oQcCQ9Pm8tQHEqsR69atNJGyviFNWDDr4KHcfiGG7jtYYwLuV2Z",
  "key38": "3N4MrwavVk8CXrpeSrLWb8vc8Q7hvC8BSzAsHxSM9sPmtFh1A7Xo11eVz1gt5ZpHgdoLfBkJyeAjip5rxoJnwQPW",
  "key39": "5cak3xU8W8phR9nRsbkG9wJZVheUyuNzsifQPAgYNcrdA5v2cpje9xL9YPD4DrVUajGuaP9d7VjcvQa5pbff1o9s",
  "key40": "4fAowMPsimJL9iqstSiUoj9sdRvdxAaneseD8jmuUcXivMHJqzyMqtvZBJfZDh4vVr3GhBFvWtvnVmawEe42LkGN",
  "key41": "2GTnxdDTPj6mNuagaxKfokaKxmPTV9XY9WRsk6r779KfJ1RUd2vp5836JPvYV2rrZZATyqBHMpNNbRB6C2uek8Pr",
  "key42": "2iRGFKdpZM3jKTSSJSWYUdE9wfQY5q5Xebpo9XteABVSzDFGks74231MXeHLnazdaCPC8vPwnrppQn2xEnmF3Zyb",
  "key43": "3rKQHLYGhCwwjWnPkudJMnZR5TzsdoUpHbRZcxhg8s532wE4uGuWGSoy7ysfS4Lz1sJF1GnSKPzcWWqWBmnChE7D"
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
