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
    "22oSU1wsJFRFkFusfpquxVELFw8DbJZ2e6zu2joS3Rtti7GV3buq1ApQeWLD55fwLCtNyQjqn1SvZhbbUCRm2q2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pknkXNiwqKK51hGMwJLiLcKX6Ht7dAxLRGHja7BoBAk8z9u5uMhaaqaXef1VFivWeUvVVtmhcfxsV9jWFKBepY6",
  "key1": "5bcdJSu4mokeMt9k3GQ5qutxoCmwDTZPJxtNq6dPLphmRSzte22rDNXCpx6ppTFjbgj4gw4KEv49WYYfzH1KTerD",
  "key2": "4mgswVkiJL1ShUgsHa8rVZJwayXdQXbTdtH2xwA5HZ5ih1A74KeJNkRiXsLcSevd5UNwhuN5FExS4DqxMQevaHV8",
  "key3": "3crkompy4grrAMRGokreCsnZ428sJSye2fpmDrm98AhnNvotVeE9o6dcwo6bZMBXurLgtqZHsL9uvQLsFqsn27pD",
  "key4": "5xnx99PDV39N6b8FUukzhw642MZqGDZbcAajzZgr1mY4VsiDtySHbwzCHSHCDiAtDsXRKVZLtddaAwhGCdvNtBna",
  "key5": "NAC9MwByxzx8hRdSmprkksmNGwWqq7mWJCTRFuSrCqARG2fZjn2D77NHws4psAapeLBZwhGWWzoJcq9Je5QoSmx",
  "key6": "63xPHwu9F1MxVtuwmZ7KrT57Bvg4zyD2hUrmn3S963xGMhCfaJop2b1MGFJBa5qsLzdy2oJ2zQwaAwHQuXZTRwxo",
  "key7": "3cCyuYuWNcnetkk6Wukx3it7JDR9tadVB7MYFtrpAwesvfhYXuATaR5qhtbGm7gPh5AW1TFh38ULLXpMN4Bz3Hhj",
  "key8": "fg5KrayNmNmQU9a8XkZeWM96PXRAFXZwRSkHkWvBD2tq6ocFzzsRu7nvJ7vmFEadrwqzjfKLAxgG6Z1aG7J7Rdt",
  "key9": "2YGFNcWARDC7pZE1YvQkcshcpyB8ANetxYFDHZotcVycLjdYyXrSVwxTSmP8Qs5XW6CC9Us8Ak9HgnqbMebAB7qm",
  "key10": "CMgbPDUMXBXUkgLQMNBdABDAzoUY2Na1DXAMU8FzFFPpmULmUKUNGXV6ky4dLuNT53PRdELEexCXNFGP8UY8QEL",
  "key11": "4tvHmLKpbKHBuYvGpZfjmADYoMuRJxxufE15W1SuvrzEnLm9RhmTSSVEYb4UhSkVQ7kP8FVcKAxwGaoBUfB8X9tS",
  "key12": "2kKDGyuUy8SnheMjJTKQm4oa6XPk9cExxPHfSdWQPNQNCHR4RUUKTc426Bz1yLC49Vzgiy51CgDddtLwBxK4Rv3s",
  "key13": "31RXmRPLFdccTEUEQTJY4SeTpzzSGuiLY9B83qjRkQMWVajzYh7n38U1XqKnMFbhoKxV6hbThVPeDt6uWcS5ZVpF",
  "key14": "278keeoCM76CdyC6sSrNB7vdSdbfJ3yJiF96cFBHnhzTz2ZaKF2dQHvGZAh8hsvMfrjH1yY9Fs9iLcWv9ENTNUit",
  "key15": "nQwyMhZqpiLoMouVzoDTcZLVaYozjG84EuzXsm48oK8r55XMF8v2MnADgMSo1SSWskUWeSZRZieiKk5NFaycgG4",
  "key16": "419oXag2puAoDhuSVyqLRHoMhsdCpPeQz6jWSWe9zwZrzXzuwdqdZuDarVmFvdg9sZG7eQDTJvSeBCq4xoVF5QSD",
  "key17": "tMfDm2Ay8t7HYDSu45SA3mSLh1tJLHBSGFznQLz2cXeVTBF94XE2SqKXEhRxK3GJUz1g4VfeVzTjDiZxQFfUh34",
  "key18": "42fLKxim4kT6qZ6eJsJrrieroy5yyihpEH4jSJG4GEr6vShbzKs7UitPQdVb9rYk2MS7vSDsxfdtBphbNVVEB9XZ",
  "key19": "3ZwU9Ar9sQ7E3pVY8ZVJxhSwJjAVoCGThvm4DfgugJ3npuXQwzrCoZm3Z8AFoNBL2NjD85tZ5KUGuo6KVKHBCWBK",
  "key20": "4ZqQq8kTcL42Ujj1yycwBxf1tdUJvBdZe5u1xJ37a8SFaT2D5yYTcikajDoRBa8TAffb6zeDForj4aXCyDLkUcMz",
  "key21": "reCaCqEHAzhsn7Cvmk83UTbwPvRUzeKdQ4R48XCGQVnd9kkRuE1NfhqeLb35NP5BhJcL6PGx1LepHdk9GK4iYVQ",
  "key22": "4BzPz7XtEb2aNw8cGymD35RJkCnJbWcFZG7nBE7hzeNeAQvsJPgXviMbWLbAUDRgxQuJ2ecA8xMTBfJj3XVufK1i",
  "key23": "xrE1HsFpWwTZvoYZX7BmUJVYVRjQoESgJfasaJ8sJEJvhA9ZxEd8GS5Uv8YUdbWxGGAtGTUAecvx7pxTWRQMexZ",
  "key24": "4Jka87AsU5NQdSbYGsT52ssxFUV4Ksd8FDDmspeTZ8ChWddzeAz9bjwPAm3yr5eVgesDCwfQDP6yzVt3ucpjTiBc",
  "key25": "4a4PX91BhNVa68H5NxLG1G8xpCAjwrxcXwibBaQLDBGpzjQYJqiPFZgGi9mh6G1AzwMuZArr4wamZ4vrZufV6twv",
  "key26": "5YNYW3k5Rz2R2xnzp8jbk8WKusAdKDeDuWbcfQdrEu767Vdngux4KJCHrLxEf5R4uFiUQfD8hiFe4k3c2XLDZ5TQ",
  "key27": "pbkHvanLdKfX3FLH8PiQPXpSLoMZxK246coBSYcvUk7x9t56wjkgWvbXFYjkMAq4fvksx4hRYmPVnKd4XMeX51v",
  "key28": "bMoF8j4y6BKhZuNGgmSVZ4R4ys9ztMbnqphyjk33ogFMUpfL4A5JfsoD3o9CGaLhXVxE3iQssLNJAY8ykQJ5jti",
  "key29": "4RERjw4RZCNj8MuT4k4aDu3vLPheadTDwcfPt6mh1QHGToYbgoxqQUYiVTDtqganZ4LvbHd4NCz5AH25kMFtLFv6",
  "key30": "3eDrssNeRnfVFK9P7ziEwGsRkJMXVvyPF2woqfLJ4MefhEPD1khGjgtYaxfTgH6V9mkGxYq8wv2GFbL4NgAj9jVn",
  "key31": "VyJYMdf14wtJokFejiihtUgQRdzHEhKCdcDyk9MwBwdPL4zFFwsehVKta38Lrkoa9kXB7UUPp2F1oQWkbomcMW4",
  "key32": "2mE7xfD3UuPgsiNMx3zcjo4HBxmQJMnPAkzHZjM7CfaYwiEFXiKDaCeJch9UR6bsuoKAGLAB2E15zYWYPS4aSiM4",
  "key33": "5XK43tUpCgF2EtD6ps8UpgSju3WCAuwACS3T7kaj9grG9JgBTku6K7mtYBqY1ykKEZttVFgdjzrZXhJ5hq5rhENZ",
  "key34": "5dV1hhTDzttdAdKnALFquYnE9V5zWePgaHWXmZ8MeCHCRmDi2G6CUAyfb67jR75mTdsmrwY3Fc3thhZuEt3uh44Y",
  "key35": "2HqSvdcpyqL8x2AfDHHr7oQfkb4RnBxpnaVXwoo5xuTPaRWGDS9C7USCj27FvGwrpkwvMr9XJ9JLL3WB9jGjV418",
  "key36": "2QcV4oHrYAR42iQBM6h56ZD9huAnKQArTdJZzti4D6BJHYc2i3xSsZjcFfoSBeHKsJa8eJxkkEuMDLLGwXLeaZpg",
  "key37": "4ghR5fiKreJ7b72uNnZQfBLUUJA8bM2oCTXa7traGfUk7a4XEBmam1y4qcWo5rC73EFzwAeC7xEuwXBhm4uhRZNz",
  "key38": "3oyHD2FwBw6XTK1xWeeHw37hQUzZeGzRSsnkqbvvCDadhkM35QV5gH3yPpyfGFyznXGBWynN3CreRcYndTcH6xmK",
  "key39": "42ABs2YyoVY1Ybv6h8bhj4Bk32KfbE8UAD1HjQk4mat45B2eGUpPnRyCgY4Mgs1gju9GxBSxLpAVzkhrAQD25Kmz",
  "key40": "2BhM7YYHthmLX8Q6Mv19iX4CrWsF5ym7cig97WeF5k7aWXXQhjxwmFgMSTEJNiSNdaEFLzWsJnznKHDrGNnQWK2U",
  "key41": "4akbJmJaNSfgU9nSfmQhkcLVHpCqoYrWoto5JVWS5BCWjuR7qjgukAbqwXX9LmowtdpJMbbrndEwTBFz5pp6s1An",
  "key42": "5SQBgXx5P8yT374aDJkkMtbhQg3T9K3Fe8ZaCQNmaEHzkMAMRaLyz2LFDWC4ezHbNcDmeLujsZpgzgG7gZS1Emag",
  "key43": "4NeJvgP7R6cZ3LLG33mKP5LkmKPamG8d8kekLxBPeNw22XDaYDU87bfyLgbEsnLAF9HCz6972UxoVAFv1gVr61Vq",
  "key44": "2Hvap4D2yMJh5QqyPAd1Zc2DmnmrxpPGP5UokodZuW67mz5JYBp6to2uSNrMzYBT9Gtf3d1bZk2SbzfXrqGAF7bg"
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
