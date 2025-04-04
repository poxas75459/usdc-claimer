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
    "4eBYEGiT7ffe935vvfgVAUkhLmgMGStdLE2oyAqXEbph5fBwZ9tFimmXjkZfY2S1e8vp79YAHnzXu7aVVsYN4q2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DsgyuPs5SArWtdG9tyYQry6NyzXpkGteTkwgVuJkSaTXssmVrkWCihn7epMNKsdMcC1TDBsBmXgJSHcbPZ7iGGR",
  "key1": "5z4B3ZZm47CYFAKyiSw2NL4iybXZ6CNYfsJzGCBh2nCZUGWNbxV6nHB99YjPQK5Yo6WGzCGyH1DYWVzjLmn8kKvh",
  "key2": "2WFufpgG15Uhwo4U42L1P2yZCj9YsGRUnXUJwaXrAjRCCHeQAVB3icBjGDowPCEiCftQnDnk6pnuT3bax9gi4oAy",
  "key3": "4oYyNyzjyCGZBejBxofH67YkiPSUHFX8aFdyXgbknveZNVDQvAse5XwrbM6AEhR9T72ikPMp89cYTP4V9M1rA6oP",
  "key4": "DCunUiSVoWY6vUiP95sfFeMAkAHQkdFHhtqstByxRjZu1E1BFFGLzeh3CAsTzaYVhrphFLvL3DBp7qt66QE84Yu",
  "key5": "4bh537Edg2x7GecaRWduDuEudnbcY3n27GGX9j6QKzRuZpEuSWqNDm7eXSiETVfRShebjGscoKdEEYs83WjibwTU",
  "key6": "StrZsHjCmD8LujtkSMoyA5yBTJPyiK9UigDoLKLdQt77NzDLKb7eEKkYsT3JBxVMZNqNA31k39qsZguzCBzvgsx",
  "key7": "iMyGt8R6eYfGcuQL6ryjvb95GhiJU5sjctnsbNvfubZAvjHJVZezHXmSX4sxcZraBXV72sgXhaCcbhJkv96Masu",
  "key8": "22qSDnS97jfEYVbhqhHu8n3r8PvvSYgZSjF2sALmnzvztadrMAk68Z9zpf6bkftJGpoW4WAvHJgKH6Twg1zgk7GA",
  "key9": "NqR5GjH9CmmQ9tHcwED1oUS8vRtRzojiBu2KecmZWPWazHHFHC63SurbKsFGhc8vr6ynQ2PgqcdgWAGvc2rdshT",
  "key10": "2CpAUv4DKm42RkaNkhRnTmejDapkAeFtRqydVXoYf1soa4F58PHKcxTUfN6xqgxb5vdrVPkSi3ZPyyyNtgUB52Ho",
  "key11": "4WS92gZ8rT8i6xSXKPGpNQqxHtZv3kGy3xBE89vmAJS2aGRa7JqLYdmmaQpr2AKycE8NTdRrysbFRBu9hQ6LpBn4",
  "key12": "3h7uiGTofLyCibTMXfSLVXfT4FrWGGFxX78rnkAr8k4rZNduG5ThZcKwZssgy4dULQdrh3u42CWn1eazhCmbUe2Z",
  "key13": "YBajjPehv5GKpNiRR6j9nuQ4YLTfn7oAhcWEV2uC1aEfEeUY3FoKZUibCS6NiJYvVrgqJnrYk77kr9T2qgUX4fr",
  "key14": "3fGm1x6YFWJpM361NY2PTdVXAJrxpsUjCoQoTTNQHMcTTnJhwXMY8zLhodBC7Q3qM7BaNAiZjKZT7hJBNfC4pSuG",
  "key15": "NWk2w6UvdimW56seuyDQAFJA8hcS5J2AUFFVo74qNDQtbiCey9tXm6nb4ZEpUJk13kvzhimFUgdQoAhoK3jMdwS",
  "key16": "2HMbSfynpPgULFQnBskeEjcNZcziweBtyhH9U5vcpuz8t8MtqM69TiH1jt2oaascbyhygrfkc9fghdzH8tKXvkaP",
  "key17": "gzc6KUNdEh4ZLZyjcc865MMCypxQb3NLcTsyms4LvYPfTKYqUp9yCBj2UkDSaraMp2Zg3GMgudmwTW7BgzaHkGY",
  "key18": "JQznRDBiXd4cSGKLohkM33PerXX5yxE2wLdhjc2TqivyDtfA9QpGKfJyRjbbRiw9XBninwQehHAVAB8xQ8BPzzp",
  "key19": "451ToCGCD6Lbk5i4JhF1SUxQhNCQreuxNGuaNwgKWJu78sGPWbk9dkfH4wnuHNLLakNwQ7msEU4zUvo7sSD4c8dF",
  "key20": "48DhtFoxUBAtLAxs6xda5uGE55MZxMBHXyTn37qFaDkGZhYvypxMareUsuc7Z1N6byfrqyCnttRVY3hinZLjfJDM",
  "key21": "2NXgfQZPkmFcCt8aovuehXfqaf3TFnQZRqwaqUcbea5Yc8K7xkiuiCscELyQgn4FJ9LM9Dx3xFazUez9KDq4JYPs",
  "key22": "HquCRj5Ad3NC4WYzSwCzwHvNLidphHr36KhMHB22vyB9Qx2XiRTqrCidCTra9qTkhWNAJvgCSR8bNUamSKFxPNU",
  "key23": "Qb9kNxFNwgkYDr1Li7eTUKkhmsPc4kNqvy527NPZ9CbtTASKPatBuJZEm8RcSws2xmQeuPiVAd3gUcUZhYMWvT2",
  "key24": "67XmCfEo8AJFRq4wVL8c22HxWvyTCUe26B7hc1y7T6cKHFXbsM6PxvrsDPiUaugn2vHg6F8CqWPEuVYqXBo6uyoK",
  "key25": "44swS22gwu5P4TfQ82Y87u5HhSKnyFAMQxMMJtz6K4ViDTTozAg8piSdpWwiY5ZeXPziMKGj8v9JaxzNCpr7oZnQ",
  "key26": "4kwqijBbHLuUWcSuqrTTHCo2Fz1aDu1NKxSXinrESWmgaPNTd5GnThsLvW6KUsYLiSzxVSSkYhyfEJTrikAxLBzG",
  "key27": "61dacgSzX3xMXcdeJ8qdnPydDYpc27Ux58GK6dCJEZCi2krdk7rmmgn42WiyKLzp89jBvGnmvRWTwZJz2eZNv3Lh",
  "key28": "5MQpH56FvKXhpGsSDcerQvTUVPZU6fEv8zoQMmV5CceiVCsPtMGkUpDW7nM4uTi66SgXiMEtYnn2xgN1YA6R6znW",
  "key29": "57qWD4cPy66rhmxVgPPSPnTo5ARGSaVeRHnigAdWUpfxPdi5J95SKVSuMxbf9i2VkcjWi6CPETmB2WjiVMH1cw3P",
  "key30": "ybRH79yN57rceoQNFfXxGf1XXqEGpbQKbaDyNWzzCVeZUQwkEfT5B3i22Wr13jTytDn51VYWjTtUySsSHERFiVb",
  "key31": "3Fm5THgUaEUQGG7nadMKkBsYXHv3uh8CgMs17SrHV43UZBeDd2e5HK79TXdxGAk3nejYxX7FMDtDawDGiPKR13bd",
  "key32": "55xpjBfFsFaw78aVN8BmedxMcwcmFABXtTgYk9CUxuGT13S746UuKGyqBXu6h6VEwVokr3cqPib18PmqvTQ8eC5s",
  "key33": "66nVRJtMGoZpRKkGbENGq9bGuv4fDZ3QWMABLf9vNYCR69wx9SLexDPneQZETYE3ihrDntqQQunbNqdVp6H78bCN",
  "key34": "3orerqEUG77VaN4MMGYkVWsEKzFE6jSLpYunobiGukDpgG6UTmaAJbRz7HvoU8MjtC2nFV4EeiSYKQQGdTfH3gJo",
  "key35": "526w9zJQi4Vz9647DHwrRog5UXrLMUVoov2zwHwDgckde7ovV9qXvTh5W9A6kSXD9bzRQCt7yKGTJAyK8WpZ2NQ2",
  "key36": "54cH8RHEWJQAmoShX7SDuQLwP9Fs9gHcoeLHgnYGFd5nxiseT4WnoRW6E9umLy4WEGJ8MXwaoKgCsJ1G1zK3pFC4"
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
