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
    "dtvULibdGk8pVq6FLkJdW9oYNCZRsSfVwUaf5w5hEtrZhyTZqua7SVuZCDgd7xhZKg4BGg9XYte4b41du6wzPjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mX1ewGBpdYNnGhLKKBW7vhNteGAkDaVpAJgwxpW3rN2gmgP2B3Juuwv4of3JE3xrMAnaqmKSuJdhPJpwjceYAQF",
  "key1": "21HnUgZQoWRjsbtQJWVYx4NBB7s2TxRrBLPc89NVjRjfXJYAGKSNR5FSZPuGDY7ttA3zU6YHR2iHUBDARZewL1V5",
  "key2": "3jZPP6WZdonSFM4seB9w1pLTefkw9ZruZvisDJWQTfAHPfh25pQ7vfkQWfSHq7EgJDwxHx3eHCTYHtEedWru9oW6",
  "key3": "84Eqbdw4sD7NV8aaJAWb6LsACPavtJ5Tm982uQ7rpqcCJbd47cdTLdRxPDcRfWnYFAJB1Dszgf55AfzksupxWa2",
  "key4": "5hBzd6R64uC4bheWS7VKBSLKHuFKk9Cdz6m82zjTditVDPwAKVcCnpJg8mszryuPu3d1keoATYsUK5qKuzzDeGa",
  "key5": "3wuDdJSFwWvcL4YMCJAHsSxbxX74hSPpcJcTS1pPNG4AhMmpUQJ9cfqBgFtow8s6j6LbfR9zQtCzqRVa8vkYfX3R",
  "key6": "5bH6HmvLtGERpXJEgeTfdmPJLFwBLW3FBjthf4UhZudJ2qx5M15jevWd6YWeNYBvdTsVqaKdQwnTWmQ9WsrMBAaL",
  "key7": "5FFBzWtPEwAcukhHJJUh6UCzaLa3n46qN57UUg5GKnDSqNqLo9b35xgMuT1tetfTvXMPK4x9SDstJY9dECWnix4S",
  "key8": "3nMVboWNqVCidvGucim6ZkLybfVhR6RDvmne327LMrCkDkgGXuLovN7jZKo1kqrcq7pLGiZTApH7zaYAkqiVDtFR",
  "key9": "4SJXMT5WDgWyWF13f4DgSb5ywihStca495p2HHV3rzV6kVocQgrEV7hXqeNng8AcNiD5QwkSima4BaqvtXEmEtbM",
  "key10": "4EXzYo2aQPeieZyXK773k3aNEgGvuniKK5zYw8aHjt1wFYQtTk97oDSemBLMZdFnifjxLMHEiywPTj3nENjDKJyX",
  "key11": "4e3sHWjZH7ydEmV3y7x6p7mc5SQM4EVZqgkhY5pjeB7cL6TztV2uv5NhrbVcKobkmcJb5cD5i22xf2noVDf5sRb6",
  "key12": "nsZn7xcqegsRqTCwBcwJMTpPyAB9aMeizgsWqfUXqNbjvVXU49YV11FHwkT5VTrZTZcbivamZpfZpwHYzG4sUzQ",
  "key13": "4kJosJu6ivfho5UutWjSfp3ux5A1z9FNRVhw6bQPkvHQhwuoFEPGxpLDD2WYCUvZRE75TeGf2wvAQjkJsPfgsRnW",
  "key14": "29WEK3kxiJvbrCaCHL26emghtfKtBuLyf6PDZRzamTsY2EhS4eUmgGen1tyySXPNABSseCKgHDm2VY4MFwkwsyee",
  "key15": "5i5PvrBFEkPkktxquE7Bi4zeDX3tEBkxTuibmbYVt9AgKc63gRsiAyw7jXQxGFovhzjAo7ywyQYo8KyLeqo8SaX4",
  "key16": "36KyafN86iNnbw7pUhcyQWQ6sQVWFjJyh4yg1mf3iuVnfquLomkbTQBAQdyUf7g8dm6hrkKirBnyGZARcg9wAEuR",
  "key17": "5QTz4AnSCcwNnLE3ewQ7aimhMADQxtMUiH2pT1UakUrQi5rUbnjfotMijJm1GUQCge3V8YizS8GFjaLNkUsr9czg",
  "key18": "5rxi9Xznqh7QsZ1MRRxgXoJECv5ZXtNRdDVAgbvJUWkLaC5jHifkytg7z1bx4SiZcqTT1fq8buERHPaxRzwrWVzm",
  "key19": "3KLV7YZQFXt3yCAi6kbfCzagWz2TAyYWmnXqga2UBz4rwHDjJ8tFNEGL9hKCAZDXVSES6EMoFHHj4JbEibqadu61",
  "key20": "44n164ZMYtSRLaRZEt7uaJ3QHWFpwM83ECuVaDUMEhzoTmiQjztuTQMoYh6FkehJYaT1skpqbm5AeNmpnTRSpNVy",
  "key21": "2hTfCGj8LgbybFRbTgjft5JTDNmLnLUHMrp8sMgxEMBQiiSX3fTNxKipZFQ87wtu6TYdfdiPRihMdQriPjJ6oXYv",
  "key22": "4y8mEamHP6DFYFaoUwtnAgBZGCctAe5V7Riuj4pXQ25ibQRkE67Knk7fG1F9ykcgzgPpb1LD4hYkZLgSqu9NeK7f",
  "key23": "4A54PHRUgeqvZBgjzQJpmMggJhV6AZXoro8WTK1mUqraDnCapSBwbnWrC1pGAEz4zKtxyX3YQBq3TQyrZnkin9fJ",
  "key24": "4tqnZ9Jq712oU6tPpSkjfZJdxFheLktti3ooKHXjo2DtPH12bWyQ54bbYtPRn9rRJjUShJduVJzfvrFYXy88X83N",
  "key25": "313jS9Djv2YotstdDwXQgySQrRt5hVuW4VYsGy2XAPmedeJpMqqmgHngdMbLJciMJV6CTJfp7TamJnC2xKUuLBiJ",
  "key26": "2V7UkjfvAmLWAEddmsWcxwYf8JdTVG4WBHhsk4HuzmtoTWVsuh6sNasURAmcV4i3gqQyEo7BGSZHby7vVqAqZZWg",
  "key27": "5hBwUi7LkXwzApon3zZZtoGxSUy4UMcZ8JZF4bAnmitcB7RU6giPnA5dfEdgAVvX6xE6RdcDkcwtdrGq1efna1sk",
  "key28": "62muDK4yHBnvU3CiCfAb2y5baEzwqqGvymgjjGxa4HuoQzR9rCGTPor6wBfVvXvxYcP8AvVCF5un8gMCArbTVYFm",
  "key29": "JBvSZx13V2gFbCrc12vFf4BCQsagrbuXVHoSfhBbebYMiwYJLD8z3nc1ez4WmJqJtTyhUFVXdRvSrHzKPgyqg7T",
  "key30": "5jnDDJS9e6Adi9EmJir2ovEHui7zZ7T62wGhJpsaBtESn6DaY2F8hsYoBDdp5BNnNmkv5trompEQs9nMFmqF6hTm",
  "key31": "5oL5eRLk9r1wXEra2miyswqjcYzb5QEiza65RM2LGEgEEzw9hepKmnx9tYRZE3UNjUJbHjMvzkykaqGoDcjaXcSu",
  "key32": "7wZShfns2atUKPJy3MkjHjCfbgU3eg6UESiSGbSgApTtFbeRqV4rbFB5oae38KSGCPkuhgDQmK8HRSSdqiTFZD1",
  "key33": "fbCDZwSMdQiJXQGfitokT8PmA2Mh782kyoHsv9vkEQTE3ndajWY3ddFAcESb9qUhjDd8z6E8EuFjo1u7rcAMRk2",
  "key34": "2Z7oP1VBBKuknwPM19kQWeu2ASB7mQPjqtmw4o7qTs8He2SzvSdGNN2GxzBFmB4abZ1tj4DRbxZp6VNTqFQQj32E",
  "key35": "4zhEJRAyh4qmmMG4WL9owoQLC2SmJQCw8Lrd1Dcka9ZQggKMs29DbHWC4MzeqJrpSXf7xomZrhxf2ZJtrSK4CoY2",
  "key36": "5zhzQvw9JLtZ491MuptihPhMN5rqWVXk2JKAJJDGnVeebCkAwJoWdz4U41xw4CRaw6gPHvdPpbQJAbtKapMXXQBb",
  "key37": "2oJp2LjwkMFnjKQPfMiDn7qqMiNycTsXzExKhwKFFvAgtNgbFmLwDf5yYENSp9jPTjExMvrGc1VYS4nwRPSUpkvD",
  "key38": "VVw6dKJbZbUm1pGePSbJQVvM5ttCQqqVSJmpoS2mHRbTnGnzBHFvzqahCenzRDAYJ784B6FX7anMvoMp2TFrbCo",
  "key39": "4qyF2oBXpbnV1mfiBeN2EQqr2gxxZpez133YNPHAgNaMsMo28tsDqUo9zCUUwuVC6TytZxpEUxr4KFMULY1zuTNU",
  "key40": "3ZtyqT4xNMtbgFGGMMXGdPsgVuwDmuJtaxdyv2XY6NsRHcK29z8osGSCFsxWTJTwBxQzhiPoxSbaDtSkaU7ww2Xq",
  "key41": "3emvRf3sZG45cjpgshLPDhHk8MuBM1Ly7U2TPvUkSsa13rGUhipwgpfvwSTDZ3oJUJzRGfkUVGUAAQnKCihGWa5c",
  "key42": "2A3qVLhv3aRTrJJR6Qkg3d9giZF42N2Bbt3tkebYMnPzRxqS4AmFSvwwq2dBdcazefrMVXLkF2r2Xk2KHwiakyCo",
  "key43": "4GmWYodFCUjm6PkEBnyuu9kfE5kDKbeWc7i2m5kTHd3vXzYWswhw3nxgtaWQyZswwcGxWMWrWG4KVxas5c5CJejQ",
  "key44": "32zT2gXCcu26tcPc8NTNFEvCjrJSS2t9pfBezmtP5bTxRVZr6CNnDaSTj3TLpARtezbUPWUq549y6YHDVmCR2Zy6",
  "key45": "QZsc6tJtk4q7ifBGzSJWCptKn6sWqDCadDPgV4jMaxezF6scKTpbCpZ2sff6iZYnCPef38uXPwWY8E9uqM1boou",
  "key46": "3mT6AA2Fn8bYeALAHoTGUnmcT4SbK1QEAsBWAUcuvDatheWnGRYv69mBMh1fuGkAPNiKMLWzV2U1PuhyUHjZgLza"
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
