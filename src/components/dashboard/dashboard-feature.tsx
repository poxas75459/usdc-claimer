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
    "Utz5cw2w5AAiRRg2YRtbsLEiqiMtG5E2cq2CYfjYT4paj38t2a5nCYZZ5JkiQhzDV344SBuwC4i5boZmhP5hPf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41VtmqHS2kmj8MvKwxYRqNSXU6eGc3oQduGobMdTAqrdMg4QG5bdeYF8rCxd1DjBweakJpt9fJNJyTL6WnwAsjXG",
  "key1": "6NF1XwFmpGbYLXTDXpfANUmojwwekKbAWbASypDp9YgGUNrstxH9iQUHD4mmsgjWJygmbthMtKgDzENYLF7GqrY",
  "key2": "2AAqPGQ7VEPGw7x7rqb2Vv5fswVXfm76hmm7jBmtEJAkdz84UReTBq6aKt5j1qZcAbDJ9uq4f9ZDypDwyFNsF225",
  "key3": "35qf2Ec48cSJcaGnpPNwtonxvQzmaBx5uSfNs9eJn3iKazTDkFZzdkJLfxVsETxj1esGGDBRZkcP2rZDsvmZLvtE",
  "key4": "2aC4SaPa61LJizSyc3vKhrmkrQwiDHVGffLkKubTP2mbuQPC86QVmw1BirfudkdF45A1g8FBvYcYGpjSUtB99k9E",
  "key5": "2MUeMKMKmvmvYpCj19HaahUnbNWo225qDQLJCFR2jAJMMBKAZogsNqABym9NKBRrK8ockHqQcFMr2i89PEeaVKtL",
  "key6": "2UHEPHcT1s9LGmfJTizfo7F7q52am9oW94SNiosWxz9zD9b55TQnwGGCftGHQUfaTJSTU3Mm3WM2D74pj9go4AN1",
  "key7": "32vTjVH15qUAR1nSdvGtnAZiVpeXLqxoRWB7b1PhG22rjh3d15uqmLB9kjgKEDzFm88DREnn85nW8gZ62SPxipLz",
  "key8": "54335NcbR5JYFMHm3uFihtYrTVEoDoYBphiqK4JykHDUiMcxhnv65A4toJf1dxU5ySh2zUoxaP1GGv1GRqmHNAij",
  "key9": "omY4XczEZCWtq7Vxv1aWLgdCR7HiKEYX12r5YJqZgM41WyxvKRZVrU7yS4dWJygNbVc5DWUGTXMdDd22ozxQjn7",
  "key10": "59UgJAnNyTYDy6gomjKg5bzCFJSQyg2b6ARLjhuoRsvZ9e23Rg2Q89fBnH95Qr4BHqs54Pfojxxd2UWMkVp2zJn",
  "key11": "3yhjBFrWKh2X96s7zEQTLufFmFRmXsrMaspwtYa4fzPGAWHNxfsP7bjvXdVaVhboaBhhBd2j3qoxWyoceC4Ttskb",
  "key12": "2WM4V8ZBiRPDe4NMp4FjCYFP1isAre3JP7CaQ6UyFUD8e2h4WctokDM1n73ndXqjybYutnhP6kJa2HWNbWVKVahE",
  "key13": "3hQdSSnA63qkzV6iNUmMcoTPTTnhRQ9RK9BQavETCLeu8jJjXohmVm7eSYL8L8rSMJNuzdmqN8EJtCuGaKxqapB5",
  "key14": "64iG9FxJZpo1v3ee9yLKhKsVsvMCfsWF8KbiNXofx5XRn53FuMXYvzDhnGGLx6M3GkSKcyXxvA31PuXU6gyFjJHB",
  "key15": "23EeFHfLxnZwU9BMeUcjjdPSwfwxzha9fqdAgNC1CybZ9XPBpGTeV4baduA6abRW8mPLSen69baea9JuqmkNdeCo",
  "key16": "5PLin4ArDuE1JT8rXEbczHvgDgRExpNRKsocswipGNsQNEWgRFo6W3V7vuua9itFd1hXhZ9ZoFCPYh8LVuu2jxD7",
  "key17": "4EZ8i2aSBnnymWZve4w95DcYkWeYDhnDTkXYb4hfn8EdQgyDX5Qm1YpRj9tuxETYZbmvrCZoeVuaMLbzSmUpZShZ",
  "key18": "3vo71M8tcAB7ZgBR5zaa9uwM2sNi6oC4dMuSTDmLZsNqJP8bxXKyfX8oDYBZMvuKqWR9PMuRBQ2V8a4h1RA2WaYZ",
  "key19": "4tkQ3ZusCPtNGoNLgjCzf7NcCXg5Hhytzt3QG9mfPeXLW4EHsEhBHJvJrprj7wRUpWUh8qRWUugrqTYddDMh7jdN",
  "key20": "4kPgkRkEe6Tkf2dDZAwAAJ5ZhhQobBhf21GUEz56XkvpxndEeVTvpVmSYFmRtzmXcfni7bL3z4c1DiMDmSiBPwsK",
  "key21": "rfRSyh49sAaenDH37F3rAqZcufNkaL5nWFHvbBq94yuwcYmaRwNRAJB127QXX6C6NypDdrot1qgc46LWj3FWwci",
  "key22": "SnPbPPDLdUarUJT3wagZfVYaBNtnAvyag8c2Vp37zqkScTTs68F9BZ6f2qfGYgTDP1h5KmHvDUD77u1H9NuWNH8",
  "key23": "5xtEAaZxtKcurYRxDaV2VvpiNwKMRUL38Gjwy5NtuCQHp3suZSbzVEanYRFTB4UYi7VjJ12N8qGowbbdYJiPiWV2",
  "key24": "2Ta8WoyNdwKt7j7aKtDoLKbwBPo8YwFxSYBhYAYxvLHzWTPw7PkZcujw6hvnbjd7iL81QYfsJiLGffupd84TW5e1",
  "key25": "vYma8ejSha6tvDwqCWMX3iPT86ShAST5hLokMy7A164MZvCnQUiJKzvoDxiPJJ6vRuZtWMuqax59iuW3xeH3yLB",
  "key26": "J346CNbDtZAKJ1JGPLAGQ6a3qwWEweGEbnD3fDck4MUcs6PvritStdKHiWJL1qHnNkA9C8hBArXCdnyqfy4ZaMy",
  "key27": "uhLiwxY5vyHSzHywbU5io6XMFVqTRRVRCmqDTyv8nkeM7bvUZx7ZB6wCStfmQiLXoMkZSNuaEJA7TvQ1LeDu9u1",
  "key28": "h843uYFrf1KCfr54bcMoKfqhJGwCMEckwN31rZ1WhRBz67DKdbWc7nSguQ5iR1XYMFdkXdvs14ohbYRwYFP6B9w",
  "key29": "5vH55nJh2SiZ8JqdUbyuP78yPENnfLgjYcREHPwoQUPSHqXzULEg4wnFyMKbUMQTAUEAZTjjDUpEbKok1WsEek53",
  "key30": "3QjxgyvESs8cbSb5PpzpMENpFRmicK6KGbBgCyGwTWyFJqT6yCR8K3WhzgQhPyK7UWkPzSbotwLGTAcaF3uoC659",
  "key31": "5eNsV1h8oRJSFnirKY2yk3pPnoHCaEJ92vjVSfUnB845UeennEL41fqxYWiDqn9gsghtdcA9UgoobZAxvawP8H7N",
  "key32": "VX1zJy6j3a7Emx6UJthoHu4qfuRCVhhJEwrNyM6YndZAzy4zDEEz3s6FF7QJWua1CSii738R9aF6N2LQuGJgp5Q",
  "key33": "47YzUEDaWreMN4Q2ExZZffJyyC3gd9fxZQbpMZNBmE4PX4XrwdHK1BGVSn8Q5WpzvYhBRzYZh7y83HJgJ3kMwE2P",
  "key34": "GsguojuTVLCq99gjxCAU4nXkyNfHMZNhRQirUnvcwuK6AJr8q7fFn3oZQwgpjKjn3darjvfAfef2PoP7PPnH4tA",
  "key35": "2WWuVzPzwxatPVPgNANkH691t87yEX8r26vo3BGSzrJct8TSMS5ePqjPaNw1JhdtKyL39VZbDMFWA9p3jCp3aHDu"
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
