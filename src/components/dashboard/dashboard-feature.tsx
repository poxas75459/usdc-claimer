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
    "22EGUDghT8ggitdwhuSPP9oYDAjtp1eVeEdbJWaa1h3yZNDWpVoqQpSZ2njGNBEyXfDM29yuwM2AK17ACdMiTF8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "irTMErDNrvNFoYu3dLtf4fsyieqeKUtYHvBkdR5MyXSW53qkqKutVKjCEQSh4QKKkyDgMATzEghPN4d5ktSdNDC",
  "key1": "3ZVfTUdEiDXhfQhnZVYBbVJLyKJ2zo74AiiUsDP5HamPv6jsyJj3WMaMaZ3oR9dsYKUmCxQVLbFGFTytw5Vte2y4",
  "key2": "4EUShwMvG3nAmzC8gxc9MaHHoA5txisUrcJPUCUXde8LX3xtnRADGMSu8L5bwrnCpmaLqP1tZE9f9qKcuGBki74A",
  "key3": "2vMgdJJhWKHkTB2XEHprHZaGMxtUBVjSd4bWXD8mGW5U2Q4wnuJuMEVCVznufoPdbn6mBJaGo4sEcFPjXfz4TzLJ",
  "key4": "4d2U6XyTku1W12ur8Srn99xwbNri6i3sMV7gCWL1gM2kk3D2Kn7Fxz5b9LPcp9LLvMYVaXKwj1CvrFZ4p4VhC6G",
  "key5": "5KWAVEEEgj1LQecJ9xBmPvdAkYtAZgXSjjQxLLLP7HiZnPnADc1iNk98DFCkPhY6UpmrxXxntxPtpzehkixzobh7",
  "key6": "2P5jyqCKCcphNVvJpdkFatigG5A3EyLj4XDDfUc4CREY7VehjUmYWQRLHFgw28zdJCpCXUXLYhnYZyqrC9FTKtkg",
  "key7": "u1zCxNJJwPLeWQbiy64CgUHmdZWP4TMr5Wg9yg99CzonPMsBxoCeHuWSL1ajygFXaDc9dmvP654s3mScSAcYjsk",
  "key8": "2gvVW9BBz8JX3SwN5TnL1CER7po2WmtJ24MKxcVYQpTRVbcq9uM2Rpcx19bgcDCKhf4sL222Fpku2C5nFpRkHTbJ",
  "key9": "4T42RZprJB1WFXxW3pJ3PTJMLwodUk5fc3xehwU5ZFk7gcq9G3KCEVqLuuzcRHNAXmvmpMgE5YXp95M7YVh29M3m",
  "key10": "2frfk7Lrp6gXDEtsTT1zPypmBkeeXWPuEoq7XkbMjra4VqrFBExUXNbkuPR8a2kUAtYSfNygHskuX9ejCu8qMX93",
  "key11": "jW7cUukucb5gaXc83Sw9iEpqQe8xkjU6QTwdN5gS3bznYMyjRjUmEwc9PHeZKzJsWjHSbM5jMbVVh9vrN5MCpme",
  "key12": "euCVB1Vbe2ABZgVpwAYAzja1tzsWdvgYCz8zemsayW8xpNVSENwgpJHuP9HLzutpRnPWxjKvNdMxZytfeSm5Yh5",
  "key13": "5jeR7tfNf86yCry9G9c96kFZN4ijTkBuUGCAGfa362SgsyQNQHPzNZU8yzJLopLW1nAdy6cPEq78KPSYKUsCp9zb",
  "key14": "3eFkMfzP7rAWDZSdkJe77DJcPLmJJ4n1q5cbzeUs8jBQmvUBgwktAoz9pQmr35V2ineSGs6ux1PDNhV5EHZGFc6a",
  "key15": "W82iiK3SzazksYNwUqawrrHfGx86eVdoqfJRNUbtXthnXF3WSUDy511QCF35mpabq9RFoFqPWrfqTGsmbaQ3di3",
  "key16": "4JSXBYePjeJFfA6vXziU2XgHyxLzqUeKSYcnrWnCx6VhyXZQ98VqbAugF22oVXpQucGimG2RCqFc4DuvF1wajhMe",
  "key17": "4EvUV6B7bkJpGodttvEB3ADnU7vYMfNnUaDFHoxDPvDmVhWBWm6T45PxvmySjon9hFoHVdrRP37RzcSSb7Fa7syf",
  "key18": "4VKY2WTF8KUw3FGNVJuokBD7vYbsj9tMPsdEavR6xBFbpyB3hEoFeQsy4pturJti4y6LZRsXT8ZyQKFMRtPQKfML",
  "key19": "4KyFkeFvrE4MmS6CtVuv7X9iaW6HtivhpbuGyeZJKkxuJSDPMN98QCg6G7qNdPrcB3c2ts7tfyKhQjnENAoYGpov",
  "key20": "cqdXPSPcvTWKWqKFS2rXdixJkXr6HhaTDaQ5EqmcncdA6c6sTSsUm1dLCxLqwwN3CJtoXnuaVwneneP1pyeXF67",
  "key21": "3NzbHZ6L17CqFPAWCojYy7w4KzbZwBaW8eLjjhuriWpUXe5KBtD5NfMrToyDj5dLsQRU2uQNkVdUzPeNTEAaPuNq",
  "key22": "75RTAz4rfKbdvuoG7SF1GQyh5JLpkVMN9LgppaMaJxKPG2S6ddwpr8R1zMnLSoykvKhen2izcwFTVfBAyovGE1D",
  "key23": "2FkJmHUXXxzG4UWz18zewCoxaQGuoxup4Eo2x578MdAyXrv5Y5miP3LLtN44qVKUQLKSJE89hXkvbYC3MMRFgNqY",
  "key24": "59eVFW6ntNB9LhPMWyihnUjvwypVzm4cbev8sQeTo5DdxgzY8AjHNB2NcuSCt8WTY5weRtTNeK14AZAeSqxnr2Ar",
  "key25": "3gZWM4ycPH6oCTgfcHxmzsR8ioZjt2rcUE1nsHwfEcbUBZ3xEkrChhbZxtV3NoeWHFmLFrmy5bipjQugkfkKAzJE",
  "key26": "2VL7MY4bqCBybAbV66z3ekvDNiLVfPj9Mvzo1uSvQkLMwmaTmJtLrgdfH134UdSqh4PSTA7z55ahbV33KY5zPwZX",
  "key27": "oxHtrRKbifTtiG5bRQyTZASeBNBn4wUVkFAKt5Lrf86vaQTJyCR5vDHxD3dYbxT6Zyvrs5hMZ5tuoHcQU2ooP7X",
  "key28": "5Ncu5yrLy8KRHkZYtvN8ehn4aHqtzXRkTEPhoaAYT1Lue12Yztt9uRR64BUWNxvqiDhjJiCHgmtx5UwBwufybi8c",
  "key29": "2pAEMXCTNpoGrp2qyhzbj7ysoZ4AVskrstDkTSmLHYgXUyTmsToX5X93Lfp8QaeEqyQigTKKcVcKi4kjksVeDkr4",
  "key30": "JUHYvVcSotwSvq53zWVkAwFgpr8sDY5kAEBS4oEoaua8JFfatJmjXzfRRJ37AT56xxGzdFve7AEvSVkipGwqteK",
  "key31": "47FVmbmyMcvKnjGWMkidzP5PdTrcwLuW2ZEAYx5baJWWQbnTtNeRKvtPCcYMpsjkKUJv4Xgqq6f84Ueok1DiigLy",
  "key32": "4wP9fr2g4zUXma2bcQK4vQ7qTwp5CDdHJMKabhxZjRfRWGgEj95t1nJJ2a8bcsn3ysa3ZLfKD54AgjgARLrP3GP8",
  "key33": "3YzuKQvFp5otjUNuU8BarfsAZXBxRHPX2TtWyekTUikSBLe4ADHVSLxqpXFDU2NnkZZVPJWJKA5bdfpPqNkmcjYo",
  "key34": "3XimeGX73oeKhkX1UPD2xbUtK8Gjfs1mqC1TnRMrFqq9opXBGvRJopmL1aeDEFLNscxeSkBBsMMkMCZKbtfnVmKZ",
  "key35": "2BbkYTS6kkhtfb7ZfrMszg1FnJ45JTkromCc9dtJ2Xp4tB8rgfXSa9Sc2yrAKJ2mrSHCg6PzDLwYDcLskmRxyKhm",
  "key36": "VrzcuDHpQq8EuiYyCxDRifXzHHecD7M3ACoFLpkzwFNLt7CpEgXHut6ToxUP9UFkeEVEd5rhoXxsL43yKtXShwT",
  "key37": "3xQHZiJJqWTHiBwR3ztW99rQzxaBWuHV5AVQF7ibgsFZuPtTJrsh6xFC4PYsp5Aw9cWUcLi5V1vHYAXdJihFGh6t",
  "key38": "4hgBS2phEzQ2zRr55UPJeBpzBGverUWzGkkt8tzHm5nE5R1kPmiAB4kktxCSkMGiAZkiWgXUFM1nnMinJkJ1wb2U",
  "key39": "2tKrHFPPwWsLuzjfkRqGBTUk8hY1ncomUgiodkFueQBMtv9fasTJqANxKKbyP7bfeMwuy1ConhURqjkdbQdyYSE",
  "key40": "5qik7Wk71LKvFGWvfmWEZKd7j2PRH2wpH31VmBSFqUCjjAhGqKdMt9d6KDk1c8jLqUffYdHJvP8fFwVqxh12KHSX",
  "key41": "2YciFHmexAYrM946zHSM3pWW7sGMTTbMddV69Kxt9KgcPjx2XfyjiKumwpYuLhELhbuP3gjLUoYX3b3KSaPn5s4j",
  "key42": "LhvGXh9tEiZQuaok5vtVWjQpFdcZ2siAsN9upEEp3PUgCWn9SxPQ7NtXAoRspjMKUCVj9RmRj71NigNuRbx2Y9T",
  "key43": "3vCwfbVqRWYcas81NbV68TQqizv9ntS9pStyg9ndDcToVtWggjonPJyr5hmNuJJ1ruc4aHDEk5XvhJkm45j4xTL9",
  "key44": "2osZKWbm6ziV29whTRx8U6k854nG6yXnsRdu6sKRpEvRwMLLtiKXZ5V7dEFeFqV6M6ChLVdDhsEWjmh3U3PsJbvj",
  "key45": "5DnN3mnDUUfQ3DXNBDQcEuWMV4NWBvtXJxk9KGWsYkbS9asyDmDLBatYZnfDz9ZWwtw1asRvBYUtmWqFw1DWPCX8",
  "key46": "3vsoGhJEK7TcwhProvcUzy122jxLFnkzyDvwRhQz8am1xb4RchyXLEtLzdKDAMfpvpF2HfoVe5VgGrVyFiQrPDR8",
  "key47": "4EWjQVdgD9Z6DrbVUmZ4NzAqDbJmp7heku6UhT5E1TNueii26kmMKpsborEQ3pmgsnoia3dTt68cyEj8QDGnS84Y",
  "key48": "3SnmCANG3pAdDCeZmWNgCLWggbK4eeGxxTsyP2tLKd11QVimAZNAgxteHvXrZ4ZdkVxL5hW9d9cDRuGWtaKqDL5D",
  "key49": "5Yb3hXRPoJpeeci7HyMDPwkmjV7xtivPgwQ1VrfPr15wRiShNCUzn2vmJHENGyZ6E5dckmBQRkuFQXDYcGHm4yf7"
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
