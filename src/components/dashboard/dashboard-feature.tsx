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
    "67QJyiuPSVhWzr7yZBd4iLEw8dhxLXR1ZpSHh5KrMuLoCaQeZ6XusXLCHYK7v5YkwAcTkT5ZMj33oQYqcdCosGP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vfs1QfzzhVFvoz4u5sDaxtm8NbmJHjVYhUdrrNCgtv7SWri36ZMLoqJ3eGz9xkfE9sA9Ckr2aoeBuW7gkvAC2j2",
  "key1": "5Tjk9Ff5GkCtEF7mwTtxdsNDCQkcDvvKqXy1y8TivydYpfvwaLAJzpH65aajx4xnhKfJ3n5xCGQhVNYM7nnAdczJ",
  "key2": "2GK425mSRxaZ3YSZr1aprjNNf1rnZoS9nUbKHHv6ssiD7Q87s6xfmCCxWu5D1G6ce6EPvDXeXsMDKjkWdx6oq16r",
  "key3": "HWZ4XpwBRR2qMokCQeYekGkPL2eKxvNgptnhTbhFwRJmxHnJvz9rNGdVzx3za8hZzupe6bcD6f3XL9yTtyU5THT",
  "key4": "4TGoPca4eJ51fC5W95qDgaqVP5qSdya3YPDq9basN1PMP5RrGzU1uMsk86zQ5w4H7MQZ4nuGEay9PXHySLzyFyxR",
  "key5": "BaqL5yxb9HU7pM81baoGZUbo87GXDawTfwn1Y2i79dm9fXdkvMnJzDuKxZnibxC5aNQsXxcPw27LRJUsRHTkvAq",
  "key6": "4Lk9DBggYB5mqHzBhnSRCrVehuzCmkDjtrAttyH8jbrEiagAbLNtKYuuEYG9d5ivDXvLtk2GNp3UJCLfbgGcURqK",
  "key7": "4Zb12m7RTKTHbb85ZnAq2GoUX5mrXpYKkQitSWbPQBjFY56VxTMfhYVCEB64EteBam45VC7dN1hCFL3TwcWXmCJ4",
  "key8": "2GrNPnm17KmET8sB5Bq3kNHpnpoNzvKu3tsY8vjeLvZuAuTSsDWvLWLGJfmSPhwQtxA6hyaXrepj8FEHZ9e5crzp",
  "key9": "5YVVAhQfFoyuZbAQKcAneAS7yAC4R9aWcp8rRsiGYPUTTLGcbApNc4fK3nStYjoVBo3iyHPeBSo53ByevwCjwPzd",
  "key10": "2H3UC5ZAwUA8Nq6UZ3b135gbcVeV7qX7YMG4L4PZ1zLQMnzkwnLwpma7Fs31U2qT199Ms23x3jNZSVGr9RLrc73v",
  "key11": "zfYQk9fiuC4mQF1tR33ynmiGywWjsgJfe37mrbuGetAskaZaz2DDtLVBd5EReUzDp5HsdkGe2929QbHRZxRncTN",
  "key12": "5j5kVcZvskV6Wu3aFnUWN9KzS6TfyAaeUx5eidaBqdp6PastgX2VdPB3PyXjCitn6fEkouZs3HiZRZCy49gGbd24",
  "key13": "5aosLAKQUfp61ZZY1H6N6VhSKwrCE9Rjbb2R2DtXFtjd9rrhkYwvpf4adLrmW18riSxwMX6LeQkaoJkjifMqEJWB",
  "key14": "4QmyTtUBaJdDXYVdnw3uVqGVC7eE2cSA4tNuh5PDbPSg81WokN75MWd56gf2iq39eSxfJuthvKv6V8kLaJzjpczp",
  "key15": "34neZHNAgKa2fwxM6U7ChbxDAAs8TvsiwoNw8iuGEiqiRFuHkd8bMQzXMwNzwygdYU1M1DTUinMCWuPDezmopgqM",
  "key16": "2uoXejkqqNBvxHuMKF7tAbJyJLnjHFTFXUwnkRV4yehWo4p218qY6Pwwif1PbPbEVhjveFQL1wNiPzRMvpiCsMub",
  "key17": "4HAXHTtxdELQEuEYDqAeYneERtskXvEH2acBMkFWsviMmPi7yLcZsUgw86eYTn68zurovNodPj4thV2xXZ8qBKuB",
  "key18": "4vM4so5JtPCdKScGxAiMrzHmP4C8ZNF97rspFnEgPARkx2w6gAYrbPKyryQtpexkT7u23fXeBtXdPoFBK4YbKEnm",
  "key19": "23gmAGXkodjk8BoDj8Dge8sThR5znJbJgqzDnXQW8QPRVqGanvYWyVeQSR6rKcHptL37PEjhmbaSXKanfHrsySqP",
  "key20": "4gRQAvmgxERoMbFiHLKz2hTAeSQAMisefAgHAKRKWePQQB2XWa6YZcLSN4SuruXpDhQ1x3StVLAwmVA6i4NuhUX",
  "key21": "3LxqYeqZVoAMZbwMfoV4HAL5hHLQVgfbrNWYje4cicY5zpeQF3vuRGyoBzgDHbfdeY4bMn5hrjfENHp8kKGHSRqb",
  "key22": "36B6azo4pFXkqaAWcHbo6ysEpnTr9TqvT75M6g3oHEy6tyLBMA9VZTxCLau5eBZGCxmJ4DrYZs4jx4nWmwjcaydv",
  "key23": "2eExkta5cnYSqeWxnUBsnWmQsLKpv8u8g7mP7gXEd7pD7RzHTaPADgNgazSsQU2kWfgBukWvBY5RGyW2UJpGYMgc",
  "key24": "3CsJ2yHA5rT6PfNEAp7E2ctSCmJfEpH3MM3mxvv9SesrgKNCq69vv2S2tyqy4rRs5P43UdQESajfYYHQvXHjb8EK",
  "key25": "4EFmR2abGA5fhkHNgZp4LpFpvWJJHLxLA9YUC8QfZe4jpkfYDzQFUGGfqVfkT6ZmMUgZxnDzxvDw7eB8ohDsjepB",
  "key26": "37xHN9br9RgpvsAT3yACSyknzFtq3VTUszzu1z2K5AeWdRKxTstGxegCof6VMY4QNVt7vrZptiasSfCHz5pmipaj",
  "key27": "UDe9uVY1sh36J4N2vFEZ54DbDfBoZ6nSc4BvpEi6ptuW6TDSBUENUEsedChDwhf1umKuajDMSaFfLH8QZihVihz",
  "key28": "4zJScAjYDnQEdgJGvmZX3VZ4bJMaMLxycerRdoPkBemVP3chXaoDhx4ii9sn3EGrx5LRB8KntCtVzRVVgrRGEnjg",
  "key29": "2ovnQvNdyvP4BceG4gYC7Lp2q4gr8QvrvgjpLCDJB4JgSjuvEiB98qusNnkjBgzbGwCrs7DWJ5MsupRB5DV9FVmS",
  "key30": "QQhzfMkRmytZXUfeRNPiWrjagEvrA8Tkop9JF3huFn4xpRGraAHMMfAfFKEL3KQ8muMEdsqGzzULjbbT8mSYAyw"
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
