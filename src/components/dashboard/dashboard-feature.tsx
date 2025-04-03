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
    "4zheuBtQYfVxB5iB6R8c2jc3RezsVEyn4NUNWWDDfJaHB9nxLCvHAHriyTuP7wtGoaav4jdpcYZnRwPBrhw4nSwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BrxLb172A3ecNdGom3yEyxLanpW3jW2ppn6HWyiaB8KGRER2Qa64dJYAVJEWtA1G8NHEmhsAYZB996G6SvSa4hd",
  "key1": "2Ba4EnhMCYh9dJgRp3gn3JbHCySA2bMqTHsw4ozqdcJe14TZEHPxdWux4wawGB9ysQsD7FydBtD9zJvrc936k3GW",
  "key2": "3mLYnJwWprvWaSdAcDk1bZBHMMqqDPApYnSt77VM2Edtkig9FD5LR3fpzqFHHv5p9t5BFd7mB8p66swBpXe4ahm7",
  "key3": "3fv3MeWmo7rYPC5LWFiPFm1QS2iGRbHhFAgwwiq2pgHfsqaRBNTNpXXYztHpagqQsyuqn11naorPuAcZDczjM2h8",
  "key4": "2QRUNHRwFZ1yz4AdnUu931rqSwPmMRAfC3HLJG1JG5VtrsEbELo73mh7BTHQqAfqpdKBhKKHhc7rF3aPy3jHQ8bB",
  "key5": "3ZX9ZVydH3Zs2QjafiX5BCzHSZuUUtrKE6qyRGgHUKQFXqcq44wtKZzrJZAmacBFnZ8UXiYWRsXghqqcPNtokv2p",
  "key6": "37kYCan1vmbF9TivB941EKSgSnvE3dkwMcKduQ6UJQr8QmaSwxCSVojdKoJaS9LfMkjJRCqnNyMEC3hkLVuADGeE",
  "key7": "65U9UprtB5cuVYxX1DTCStyXP5ervqgxCBQfqkD4j79XNidz99NQ2h3whcm7T9U2Lz8zcsqbZUB3jkv1PT4udFUd",
  "key8": "4Sgz1pGE6uiY8ScXVFV5mU5Hrt1fNSxyDHAiZxU5Y16Ep6zws6Dm2cGUdBhYogRW3XjmLeshvAP1MtWoiDpT9TCF",
  "key9": "4uGXCasUmPrHrRujuHK3X7JyJ6qpANxG7r5nhMYnJj3rRcH45FeLfRQiJ1q7qZaVxpQP6GomworgUNDkt2bhnatf",
  "key10": "4QzotjccwJcvYsZL2duVMQvDEnm4ye9ozyEZiNfhtTyFUcz1EdQ1ADZowitth94fWfpeggufUnAN88KoHJ6rq9HP",
  "key11": "tCwEKx5nb5RdjdnzXfkGsShtpuTxXNkRWeUMTA32GQVaEQjtsa6Z2j2Y8Ym8fF5jooMQfw5mYdMPpnf88CqhaKg",
  "key12": "8Ucbcv4gSFgTGuB1rNs32YMMzcM3DpekDWNmWPiR8dM24nqs593JpPuxyCxTD7QDXGKzNvJ4AQAGtvLcfijoc34",
  "key13": "2yDGpzW2HhrbgxE9CM2smC3K1zq9fVx1QUrFoS1dJuNc1H1E8coH3UFf6pHEMLW58yQhmcbmS4YP1fzbtUeTzS2C",
  "key14": "4YDJ4KXUZ6LtuYQunA8aezvVr8SpSNkQZPFviJC2F7er8omn7EyofpL9T3BHPLJJNGGKmN6HUFbKC1AceniXgPHu",
  "key15": "5tqFMs7E2XwMUG7v5YbcfmxHwuAdRTmKHpsmsLoxxkJaTT1ZbA3pdyuMeFJePf544Mv8x69kAerhi263n3KSYeRN",
  "key16": "4Y72kH4y4VzAfeVwLGNq3b1nQrthyphbL8ULGm9cFwggrNCXh3b4JpyUZSXgVHDomXGg6d6YWf9H8rgUdnFZqbgd",
  "key17": "3P58BC54sPN1yNtnp78BMmbdNfjBBM7WzBKeedVASVn9UsomcZAFhuNAZQuXTawBWoa2mHDQ2J2EJPqtfLthHQkk",
  "key18": "4ysnkTtHj2pzZK5J9jK7ydRZqGDnK2h2c4KhBpxWtYJz6cfin1fQ4mEwmQwqUNAzv1dM8XzNe29qo22krN5QXegT",
  "key19": "2ucbcQE8k1FS95hW4qSyqRG1N3RA6JVw5V7eHJZaM86qjywqfC7XCymq1EMLCA41hYF4FfqrF3AoZCfVwm3eD5ha",
  "key20": "44DGKqedAtKE6z3BYAAibPNKNVzU4Kp2zc2GYj2oXU8vzbjTdNxxVuPJZaqDR5FdLBE4D3Ho9JZaHKcvvqEdGxLB",
  "key21": "53Qf1KUyKzKX7hPYGaXWVK6WWZoF2EUcJywH4NYccHVLDiFd9TU6tTVn7RAibVWj16Zqog83nALMKPnNcrsvj3Yg",
  "key22": "3VWh8J6U97ai7Wj7v7FjmpU98a7TcgWaabkPjXTjqbmPcLi56eEMedW3vKpCg1o9im5NXGG98TZV6gPCGbanqmbv",
  "key23": "49ox2SKJKTUmXi5PsuXePAEFXF2ZPFjqEGV1A8Qg6qsNybDbJnDYQBQY6XBqcCE9L12T4FtXEVETRpxfyD5LzE83",
  "key24": "4tVg4MgGKSjYFLP2nQYNnJoJZchZgchzK5AhL14dws98XCEH5wqGCTbZY7LapXCutHYFD36sNZcwMj6o1db4Gmba",
  "key25": "3dEeVuNi1F8ygZufw4E1E7RAbd5jpNkq5Frre2Y3kC4sTHaGtXz1ymLdtgNgESN9b9WbJw5b9HwppZMvx3jnWmjb",
  "key26": "2LQBYMFYDN1Wptraro6hMGWpNj9YEnR9kaQUbnCETaL9kuYv7NKCe1KEGpzJ5hS8nrZfekNM9ac179Kop9aWVLxz",
  "key27": "3DTCfgzaAFb1SZogXtQCoMHDx68GfANtgqHtXyA43ZmqvTvoUR5BjJqK4tbztjR3oVXpWxKfbrBXTyonCE8rREyE",
  "key28": "2oZZ2b4AhoW71mWkucveMJ8765w2RNiPwVy3dgxtdEZZjveseEWmeZPzEFaqsKgnmPHTfaa4uBfwtfocA24GfzMb",
  "key29": "3CdgBKULid1QdDdwyEfTDHepmfmn2n1hSJnxiSSCEdSSHp6EyiFTBf9ExbC1TD8qvnUxipx5jVz5goBeMd35VsF8",
  "key30": "39BYWC6UV6CNBnGovMc7KMHyeW6e9ZwHN992tq6UD19iESoWKAZfmZnQtSgk9aFhwjf99j6JQrDVb54hn8LZ1vTU",
  "key31": "2hg2L6DVyfZyEwgqokzCzAxvAKfQx6WMg1xXBbJgBnfFWBCC2w2BdBEm7E5EcfUSUvgz8MUtwqdgsKABqP6yob4A",
  "key32": "3KMqxNDrrZtTyGSgKus8X7A8RYVYt6eXWZ51zyiV5XMgrfYxeZRcVF7JfVodJfVS1HHeVk2okCo4LEJRjKaToMiV",
  "key33": "ZAiVfGruKWQ8Sp15e55bTLcSbePE41z1y99Dx2Yyao8twyGuiVyJXwFdkN1gMwxwXQcJdJJj2sizpUiXimSHa6v",
  "key34": "5nuD1fFMkraTcsUKKjSey3wQw66BPxJjDUehEmFPPR84cu7bVmv2bFWU81mopwo8p1fq2Q4kFGVnDDU81ELsVVee",
  "key35": "2APWVPjWGus2sdBvsuW6sqM4bCPkuvC5kie7TaFxpjqNYVgpPBnWM2uAAYVfkzh4rCuKn9wqAxgWrLtig7zrFUmD",
  "key36": "58sQNxhUdLpyrcitsFj42cFm6NpbdL3yfQ7J8jKiuSPkD7UxV1GtCFWr5HZrK7qa3uXbb4gF19KDWMdGEqZfEAMY",
  "key37": "2EcjxbEJUszEjXPUSepH9zStkZwj1joQpbEAbGXGdT8VToijSjZZH54JbDQWZhLvdAJvRq4rJwaBRvJCd9FmTWY1",
  "key38": "23sJxG2Db9UojJwGoUcwi7uPy8YxWddkb4SLhB4UiAqrx62anpDhQgd48xH8eSfFH23jEzRvS8jD6N47bSGAHA3R",
  "key39": "Tjn5oob7MSg4BMZDvufkkEpaYiHgNUcwfsEF4v6WtUssFdkamAkoMiDRnp1YTpwCeUCYBoekEApVudBNE6hw1wL",
  "key40": "5rB6Cs9gkavRN6vj49FPPgNTgbUHbuxUH2XuPfLnWKtBLCWjj1EA9NRbxTfoFUMwMBsoraTJNpPihXKnMXjfPFkd",
  "key41": "32hqDVaobsC8QGRWuG4D5Loj2vCyWs63ksjK2a7Tgp1ip5z2odSS2xsh39npkGBANAUYoiFErAgxT8brvKR9ijCr"
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
