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
    "3jsXWxxEpgEvxmcroPyXMTxCzfaJgJFiRmuN736F5ubvaumajWHAyMXCch6mUr9wXu4ywXMzQYUQv33BHJr2bbnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39PyEQWj5cCLznmiwoBGd8DCjEPs6mfKdKe6ow3HJY6RzvMCoxdMW4qch88BS6NXbJJZM3LXzbhDspgJ9PhqMfaA",
  "key1": "r439AiZM79v3WsNCkwdNr8efrLHRhsggH5noG3ipbEtQvEXT5hFTCxZ87DEjJ6pdEiSJmBCufbLtbzRqqMaAjP1",
  "key2": "3Wit6H6QZp7GxwoEmant3xb6DokRa7rTTLKZmP34sM6CFnFLvj2AgtgzJJ9aRBpeXATbvfJtK1KioT6HofRuWXgf",
  "key3": "3MPw3mS8Fbe3vejih4Jmw27dPZiHpLTQVhtp5Rr7N13E1wiubSGd9NBCrFSz6N5MvuNE2JVrRfomUUbGquKNUoRc",
  "key4": "3tfAyuVe2Hh7meAvnokXBnSsUb2mUrgz7giGp9LrviupqFyeM74DPq3yXrzY7W7R1RGaf1jRKYxaoYNV8yi8P6dR",
  "key5": "3veqWXUU42jbQvEgrWMj3TxoHcgr1e9PtjD8TcxRYF7WrtPN2iuBSMgNNqSas8Lx2c2FKFU56nq875dUd68rLLf7",
  "key6": "23dsnzuhkJURovM1RfG1Uai8KiyTFCCevUNerz4H8taPKRqf4hpwiE5sphhu3unTnopts5T1cjKZcaYNmCTDFTQ6",
  "key7": "5GEWsJbWk1yS9FGemZZA5WK6qyS4X1YFchLEVxbteRAxX2oBqdUvmKXJbKrrxb5a4VaGXZk1kkZjY5797emsv6Cn",
  "key8": "3p2gDRhhjCycDBQq7ToikyhHjsFeLQbQgHwfA3oCp3AVqmfxodYVuGbk1ZA2GnL3sXGt98un89sTVeZZoWHfZdd8",
  "key9": "3GtjFQRCZasmmywDv2cnsk9ThpvPswjQm6tdcV6gfUWPAxKPm3icbDjbjXKt8yrgat1wZmLjquuYX7onWfaUw2pM",
  "key10": "hvgMfqueKavuvq8kbVNauL5gHhRpazMnBR7N37w4VNUgSJq5833cZ5JuJqKPTM92Zp8GwKrzTinx2vynPU38a8M",
  "key11": "2D4kdpMp5LpH9NyiZ5gJjDGHFKuV3kqqBNgWYX2kw9T1mtDq2G5rUD7Q3F3DhwUgEK2rH7QMj5JLmrYHFFbRDLEU",
  "key12": "Tz12pT3pijfgwgszmF5Efzv75N64fUYwuLJCLXBGC7dLAm6TPPbQJw875sbxi6LqSm7SoDbfcncpWuwmceTMChq",
  "key13": "23Qr2ZVgk6oGM6y18u8HevY17bocK2SMnpdtK7de99E7crUS2KKkZVgPTSj21qgZ1LXVV2Wkva2Zurp7QpRRKYGH",
  "key14": "3V1RE4tCzqHGPbxfnZfXF9CHhC7cNqEDtECSKNBBQgBnC158i5sjY8SifVehrd4z5HHdqkDmidXLZDBKZmYnuynh",
  "key15": "RokfUsahSxGdB73ugE1myQKe2SgTriKC7BUC1H9D1exdRb7uCdgEtZcEEG1NdMpNpZNT5BWbXwj6ryxUxzWdVic",
  "key16": "5bso3GtqU6nYsDFbL5erdXD6pHkbhqqEF9Y9tS4x81GCdEGGfWuUbGRN8EEuWHuvTLGwhygQFiFMpe16XFiJwcgA",
  "key17": "4y644FVG1A6rH9PZpvJXDNKQ881wh3ZqMibDpqEKdchH5vqUgURgf1uLKtftywaDVXTd2eQTn2rw3GqLtwCh4aoG",
  "key18": "2gL8YnXYoKkyaakur5M5VK6mi5WoEGGAgmWwAn7aQUQpcVAHwTSYzPEujkaty3h1HPtdrQcQBZEBrWXUpvgnuu5h",
  "key19": "oBpBephHvMLMWuMJUgTQnBkeTzXuvuaAuwtDtRE2s6icGotV5yqwtkEtz3vGCtAtP3PaB6PBCwZKBx627W1gzPj",
  "key20": "5Whx3xbUZmN5MLkBMWqbz9nfHgw6rqX94fSHCqgpLtKKPyjetkZkmPouzzNCGFRMqjAk7it8CkR4fruh3sde8wGb",
  "key21": "z2XnNEgddviGDWvc5g9uhqv4th1mWSC2dJCu2mUm13tWfayJVecQCbHuNm4GFLrGRyRVZFv2vusyHVZZz4hzkHk",
  "key22": "32LzGBsMasrYM5EoRykrqT7xxtF81QVD3KahguhrE1G8mWSf26WdfnFSXqYTpPczcC2pcT5V9kRwRoPB9uqhVYX3",
  "key23": "3NYrcTuFb4LtfL6xsWUs5Z5TqYpC1kRwr7DMGbnFffSLrFq44Zs7LoM3hy3UwdE57AFopP1DRE3RWxUe8uhhgSVM",
  "key24": "3w4RxkZdGD31fiewuVsUV1bVvhCdkrkcYc1qSS14wDr7zebAtBr4FV1dLQ2RMSQ32JJuNRJ9eUxNJ4fYrmV8akAo",
  "key25": "5PYXG6DZMWwqYwJZWYKeeXcsmfbcJZ2f245jU6kz7Sh2SyEsgWaTEtzc5ErVBpsb54BFkSsZjswUjVSDTnXcavxP",
  "key26": "2CCVbz5kiiVt8ShteZuCJ4fn3AA9a7RLDXsP1vfdAW457g7pGAcEYMDmck1uDZwtBQcfjnpbWUvhaaGco9vYvBum",
  "key27": "5yk1cEFusuXBiPbwwKM7nvEFAeYmFA3toGro1tSpTVsFBnPnSbMzzBwizCSudGHSTfsEfU3UHwTSdAut6rsS9yLU",
  "key28": "2yEwN81mQ9rVggerSvDPGhyDjoiSAbHk5zsiDsB5Njt78fuTfmYtpKwDakB517BQNJge6vwi5yePsBCjrQvc6iXd",
  "key29": "2DSmiPDnWdh1pEk8ii3cXswt4m3ZzNQg67VyB5ocQsZQRBJe2ecLWm1eSNwts6WbRTgCsbh61Y2mUHhYMqe1ZCbK",
  "key30": "2NUmPgf7edWdaCYjrpvXnRFvDnkGdEyP9XDpX9gcKeYGqiuGgEC2XxAqSjVfQ1YRGaDQ47aXvSSeKSGhPGxqKQge",
  "key31": "H4ZtS6bG52E9JSwXA1gdmEiAkQNeDm16Adww7nhpHD9iDjanb2nD1VJKeqDsa9W8hnb96VXvtZ3jftqseVCdxrd",
  "key32": "2nnkwK5kXwrM4AzJpcAfJn4SjxHAWYpHZjVyCX5LcdpoT93gzJ9JQo7RdyL9aY4nivSoRYpqT8cDhYSfJmBVBBCJ",
  "key33": "5mXLpMnB3W9wuhDGjmmnBQFwpkANLoZ4pYSx34eBMG2iDRYfBqPytc9KPxfFvriiPRLZLD6K8i9oq12ncgykSUKw",
  "key34": "x69TkKbGFQbckgKzpj4vhWvgfAQ2nu7Cd8ngt3FYiK54ZfmskMQJUjLpcFsDJE1UA3CQypWdsRzzbwzS7EcL3Kg",
  "key35": "4YznjDPtbDb6FzDbu7y5ds7nZEBApt9f2NtgZKa41NikbSJRHa4UnJyXgrpuFFp55USQRRwrzD1jhDPmgvD5Mg8t"
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
