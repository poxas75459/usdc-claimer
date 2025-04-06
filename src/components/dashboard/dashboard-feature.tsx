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
    "3tRMLAVKeKVzH9kZTEDsJt2N4mQEDY3nuW4HLbC389gJFCBaU3j6SdJnazWPzd7DbcZZ3D1DbtnwC871FWVbbMQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53muETpNdmTgrNFSDan8ibucubQrWgVLT8CHt6T82UrJ5Ch21654tSz6ReiZVE4zcGyvxsfedCBpDwJVR1fNyLNw",
  "key1": "62vcaeUKncYJV1SD6Bds3HP32PAWh2vedczwtUZTBuz3n4NftNEWd5PvY52ZZAdLqmPYoy2fw1sXyHmZ8HezLG92",
  "key2": "5cdkzMH56BgJFTU9eD9G4izAy2XCpLcmS8KfZRJkhDqxpjUC3AHa8viMBKouTJqHkAVK6RDw8Des7Aimpbh32uYk",
  "key3": "YwzxJy7WdJY9xFogXKZ2R2XYaTh42MzerGm168X1BBSgJ7rAmBLmspGKv83r7SfrNCYiNsf1u69PmP8UwaJ8gwh",
  "key4": "3RrT4A4oNzoKmZqRfgGx4XB8Ag6Yb4tuVoBqiwipS6SPSX1hbHxNDm5KyP6ES21L4QCy9GT4Wi4H9V9gEe9ocvdv",
  "key5": "519kwoHgKHowPpyCXQBfExXHwYjzUYYQn71nE4aXVxFZjqjudakys5WgpZPNGdWQViq774nSDuZEfpHVr9rvnN1U",
  "key6": "2qjSZcc7G5XuocVS5yn9ozDF4EzVBTqFG2qStSjLLuCXUsgoKwm4uU5KBRBuNe3qF77EBw56kmxrLmAMGco9AFhX",
  "key7": "Hw5HWEPLv7RNFCKehRhJ7n2WzEPUNVbZpFpVTwwY9paxLgCYTpTFhCsAdjTVMtbYQQqqs2M2uf8zigrV1EQ2gRL",
  "key8": "GGejDBJSTi9moHxFP5Vke4TPMyyDBr5AnB72Cyf48xDzxt4Z5myVGXX1nD95ui2NJAzgHNm6VXqDdsNVRBHFHMA",
  "key9": "4Ntfpir8ijQ8QeZCXAFN8g1MWtLh2MegPtYwwzUeyciCZMnTRcqMLUo1vWqDPWUairHFBBVV8gfByjgaZGx1MZoV",
  "key10": "5wE2KeonvxmGbKkakRto3vLWwhhRWJq4oJfS7LcKbuedWcSxfQ529mxh7bekUpiCobhMHMHS5KHvXiN6EuUnXa3",
  "key11": "icrXS8pHusZp7TffvY7EoSo6PBHQhmhQmLYqMhCDMdxdLxvn9vNhXkkH5Vz4W1UqLBPKwZLhz1ekzh8Z3Roteps",
  "key12": "4XEtrsCoUiCt9uU3whJwrR6EA3VauvNn7sXD1y54DtrBLySY3RkE4mjuZffTe5c9Cf4Evd5b6LE4g8cTBC3mh613",
  "key13": "4sY1anV599GhBskp5skxb3vmKdC1U1mfvq92G1SNse38t1XvmRhoXmdiwFj1nyUi7NquqSBKfwSBd5aAKwTLUnRM",
  "key14": "3ZBiN5pHTe24VjxyzZj8yt9ZBKfnysCE57cNKq7FAxPYrHBf7aZ4CkgDkRQCq3m4EwzdKdkgcLmsMw5gg86Xd8qm",
  "key15": "5rkx1uR6gMK21GNEoHXFqM9Su1CfAeHQwv3jankPXEKpiswXCEXfvP3XdSCzAHEkB4hMDMjkRv8NYYM2CqZeYjBc",
  "key16": "2V71zzFSNEPHWpUssuHR5crDR2shBDZz9rxagE3hoQizqAZqx9u9L5JfWG7sJUWCQ99yYUfEdftSnhg8E9n3evVS",
  "key17": "2Gfpv1RLzr2PMGfMpU2BPWC42i62QHcQ4aACFR1hK6ZKfZjyPdwy9ftENBAkziPYxskQGoH7GMfL4JjTcQERpGxQ",
  "key18": "3QuNzmpzCddjxaGW28fWnMnZtS13Aza1NN6WdtBZozWxZp9h8ZXzQfXX8F8adjekd4BnN8Fr6wREkzF49WH445JQ",
  "key19": "3BgohiShwUQJqMJcYZaGhVF9NmrCMf1FG5Z49LAg1nsYDnvDrsCWp1r135V8xKT7rbkxRdDNRUHe8FpDByUCyqwm",
  "key20": "22DyVUkKKANomjtVZhRewKt6Pm1qiciCWUAK77oCKrG7JUHLdvw3myUfMvBK9vWprLrxMrmgEmmvZpkGaBjDGCUa",
  "key21": "2qvrM7Std9TvqqcwPegVJwjY96UbrHRdie78d7iiMYS6ZfEtywas3QyRotAADZ3LVkvJgLpHHEevkHU4gMfoFu8y",
  "key22": "3HcWD7QM6hKHskC3i78Rfqx5BV1TDauc8LYxdcVysaHXfZuTgs3VivoKjReqhhSKoyR1DRdyeSNnq4JTV6ZxdgnS",
  "key23": "5JVhJJ7izxZCp8iCwZsRRCrvcUkphXjrFB8HBmZp8q4ebFKbkoT6WhiW6tBxjQDzYfkUr1MRM76rPYUxBz94RoNz",
  "key24": "2zbAHw4cvbQGmYasccAgVKcHLhTTY4qWWcmHyYzMYEt3ikh5eeSqtJ9VU24poet3ELsHe4yEF62jr8UgWyidSY82",
  "key25": "2meKaPcxXvQfYkjfVibuDizEN6RuPrVHf1yjzo1rSQNaXGgA1wUPqAGLLEnB9ddh6btcDrJuicwWkDbR9yANgmH9",
  "key26": "GbWuZRwpujF1KJt9AhS1TzDZCDj3imifJrr4oNzLsP2csQq9DuxQe53tS1H2drFC6kFTtwXs7B8h2p1me5fSczh",
  "key27": "auCSoALjhvrdGUfhN9NJqy2RDXbnmu4TzvwaoTip7mbYMyUFtcb3ig3xNWhBJoFtxsVCkUMPqiaqa4GDmC4wgm4",
  "key28": "3yMvQCEvmi9HT91PnDp1CmN6NPL7nYnuec7v2vR7GdjG46BCu2SHZQPdwqNKbioizc3yBZxTQTLVpghX9HPMwhFo",
  "key29": "rLRYYo3BvpSdkE6kgF75xDeFjQcqcRdzX9uEHGWMAESB3HRoe7HExTQDMhzDpyNeE1NqkxqGUgkKHBgzKPgUdZf",
  "key30": "3nUeb9WDGovckk39CrfJbqBhR6nf8kKph9W84E5bC5NZNdsPqpiLiG3GvCLursntqYA381EDVtRPRkhovoAb3cS9",
  "key31": "DrYcP9BMDZjNrAYhdPdEqYZg3a8cY4QnSUiq9voRgy89fuuVnaSFYrNivQ98KBS45j6NASLsgC2N1hx2GfGYraD",
  "key32": "4EpH3inEBbrtsaK6BU8NimanXqkKqtao59tC8X98RinCSxwCAQ1m7VrK3mQCoJiCMF1BaJtqFXf5mTA6gQbuLhie",
  "key33": "2nA3fhuqvwpFwek7AKvZQZGMAaGBGJ9Cs5M81SU3STz2tQ1YpHW6nRKosqK684Qzt22xqvjxmX2WTcdi4oXEYfMB",
  "key34": "5NmNDodG51oQueqajaQmSTvtktGNXdzsHmkC4LaWRfcadsxGU71Eaf12oq8RXqp7Y5k7FhHFBcHazjrX8e7J2xQs",
  "key35": "ZD4A56fUBmdweqx9WLrLPmcEFyE6gLqoE5XHS5povbe51eJ8AUKkLDg5r9k4FdcikQV4zYLtkP4SeBtACyy9Aks",
  "key36": "5PdpqTYS6FX23t3JMzmjfyxtF5BXAAbYcGQSynZMhEZVrgix9nPHsbzyaAdjmifG73g1ZSurfGA4pJYAmr9MyPSR",
  "key37": "5wZqfD3DopPHugCKdkufQRmXRiHHbJUwTy2tCWPDa8JiVU7YCep6ZB3Tu6paWHvUXVfVNYaXhVDjWYtoDWeKj7oq",
  "key38": "241a2zkWVk8cpVskEfRdL6NtR6cpmmxKCR478KLuoMvheattJEYEncTesNNgezE1wwW7ZjaoXHn3PnpF5wNgHJWT",
  "key39": "32osK65y6aRg45m2jk6SzkWgZ3sy1b6FH6pqyiGv6K7jPcxSghrVKaRf77PKUWnguWvCPLd9SUC8Hb1fjtKPTNK8",
  "key40": "fjhnLfctkhKrwajNFJfUDnGYEJx8qosekM3exBe5drxGcYV98mBoDsxbsE97MC3Cfn2o6XYJsvGghWrPCmoewUq",
  "key41": "3VciGVd6pUeKrMvs5WdXDpCLwyaQowNo3aJCEnmeka4xY14MKMarmXghgPCkkDgD2ofYTXEMXohryfdcwbHSsY79",
  "key42": "38UxUx12EH7dqpP4NHtB3dapLffTpfZxoMEL4YwqtLGXwgyb2DeYQaKwa6jJHkoKTT6srfifHHDSZfa9T8S54G3R",
  "key43": "4yYRd7MAYVbSn66ocFhEhCPBg1su47VzAxgqxKuyfiuQmawfyeUAEqT4UaaT1z3KSjpGLQFrdv8kNSm4Vf2ETeZm",
  "key44": "2y97kbH8CmxVfvnX1xtMqbdJE6jMxUJC5yWUVhPqqyQYWUdbiKAEbQdVmVZbhL6QbTZxq7q4VKAn34n9sxLGhrtw"
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
