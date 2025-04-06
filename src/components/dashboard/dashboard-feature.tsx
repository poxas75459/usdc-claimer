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
    "pGUcwFjFBqGw1HndgMfeEib7rCFhdPiNSCkHDPkwpagQsZoMd5dn7bbSxciBm7i2jXcDRoxih8xTB54b4qdww4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jRp6cTfS2bttJiKKFJkkia92n9yy86WNRkbPf1Y8QpjfV3i55Zc3C3qHGwRMdcVwr5X7GYoP5FrRxSSXtG5B79g",
  "key1": "63dUoJew5aUX4VHEyq2gbBARa3S2aUkQoW43mpDg5wWYykhDPp9x4kbQM9cafu3gwfF7bmexN3cfNhQAiCbMeh37",
  "key2": "JWzi7c5aSPNcEPmFeXMHnrEPmn55ht6vYMFkoKhd5u2c2PzSe6LzwMd2Rp514EYnyaEWCPEGXP1wSRfutTacmBT",
  "key3": "5iKweb3pPLfRMuPLJmavH3wmQQ7fENAfPieJH8KuNAAwZ3TJsJZ9gj5tDnxs1kLSH72xpUHa4YPugU5oBHAYbXs2",
  "key4": "3quHjXT8EkLMEspNLADTU9DYfRMRUm1wUW43LNkcJukfStT8PAgbWskfTapBzYpyZv9GQZCwQ5hacCYwAoDSePp6",
  "key5": "3uvSH1jqNv2CymMTXMKebGi67bxR5fYK3k545R6nuy7ttH2JiqfCStV7vLAQ14b3y9sj6s9xzGLsoFS3mjpMeitg",
  "key6": "4n9iaZ8KVZfhxVwvPfaMwcgdTBDN4NE7ZXAZBvvxzP1K9BQ1DfY9Q2SG3kRKuZRRNMYNhEv1kVtceNLH6taRSwc5",
  "key7": "2j6QUrVSDhPMGMbHshtKN79daugyNY8fkVHW3WduY2H28ErFLfcrbtWVchUa3qdzFXtTnoBv8o2Bzd9BCpYPc2u6",
  "key8": "24meFBsGZwZhHrNREtdSwthUvEMwA6BDFS4JaKQ9Pm5Qo4koGd7Gb2jRzFyPf84oysokLBtZnxJ1Gy8x8HwvjZoz",
  "key9": "25vGF64vD1LrckTEeJQmQsGvsMMNRMSYAqxPS7ik9LkcXHPfDdwV3h2HLTceiuvdwJesE8E5EhPqdDmvKv1FZPws",
  "key10": "5pdBe9KUDaLmdSjvqbhyQvn8dKdU6spj3vrNTrpFVAXiAe91GW8KJPZbxgvoUL5ELDdZX23a1grRr9KXMokD8JUv",
  "key11": "5kY68u3EP7MFgAx56LMyR9q3fiw27ChTi9ecxbUEdVUtDk8LfQoXahmtjhMV2eLTGy9DtuMqRRU48STA7BMQEJGM",
  "key12": "PWnBzPenPsUqJnWbnvKsrYjacyk9bPksXUxxKazbRLBM4iEqsHtMYtex7q6WJAbd2a3J6YXU4wsfjdhzgFM4FG3",
  "key13": "5A1QC19x8SGJJh1hHNUpjHYGUzarmsESMjHFNjgSKLUtEMDreHQGBRxCeRE5TyEJ6d9SLZR9d8CmuG7rcwGc3iTR",
  "key14": "4NCdyc7ZiLHZcfV5BYkJJ6Qic4qWAo4Ksg5VxMfoBNawvcofLNRPNyBqCZphNMN6KZ3WdUKCTfZJM3XBp3xYAqo5",
  "key15": "2xtPPP2QpWkMvvn5SvLfiBk2sEm2TDxU9zrdchEEUV6JRG29dHvc1sk3JXwHRFWixj9dzoY4xkT1GADsgqutX3H3",
  "key16": "2puGebLnSRrB47V4tTfVwrBXoCVPozztypGyqVyB2UDT1QFRSTzx1GwhK8i1qZBMo9DSbsWCjVDTirb2YNtCGNq4",
  "key17": "5YYip1vods7XtixXZKTNVd7jGmiY7ik5mkqcMZ4YGCWgfk7bmmPaKok3juqWmE9NCRzzduW3ymJ1ASPR6NMNmCXU",
  "key18": "27wWgL9kmga3ckYLxAMjUYPV4hneNN1shoAMCyASgfGxHMa3XjCxBMRAHSK7UjFavP8EgzDpSZwm5DEe68E5vQQ8",
  "key19": "4oEspx28yg9arbZ1jeuHenuPk57vuBvt4qcQdieDXgPmra5rb3rNjGdciKBJZDcxKQZBD93k47uW76AVb3DigLkP",
  "key20": "xg4y38QWqJTHtu27bv81WmZfuDYGV3AGeXrVEBgDcD73riiaNncHrLMfyuQfQocCGQ8JvNUuXZnkNkjE3rtkk2M",
  "key21": "Hp1a1UUwqbrLwhsZCdM1KrSJ6XGFVEskGCxZdaE7KorSiy45TzWFvcgth5XLdppZTY566yHkx7yGpHGihWxDH8D",
  "key22": "kawFThncs9mUthaaNbYzDPki3ajBKV5pcxJtLsTNmdc3zjNDwgEE1RTYsJ6jNXdmnABoeAhUPX67TvqPpd8uetj",
  "key23": "3iuRi7gL7UcERSgHABbco6Hv6z1G3YAw15auSy6KtNkK6FszMqTAjEgcUqP6w8jDc5xq7mRzTvb1H1jPV1zHWSNX",
  "key24": "5tLHECHpXrnQriERbcK3oA6YiRAsoKcK7YBmpkwEmNuBLPFknP8W6H3LLFssbp49n6YtG2M2su1P3g6Bmcb3VppE",
  "key25": "4NAfEFweiWgHTdGNQGFzFS4qTGvSiZwoKTLvC1BpWAjUAQS5rW7xSAQpfYb2dG812Xqt7fgK9PTRdam4s9jvNGLG",
  "key26": "3MrcJCC5Zc6AwiMKY9Kv88WYMyzpeuPxC5h9PGTRPCNisEMYwTvywoxnm5kBmYw3DJSXKf2Y6qg3iuAmY34jndvc",
  "key27": "2p92P1zbgkT6WjUR2Rz8rNv9JmuZ87kfG5GFDGJDjk83BtebPHL1PZAN39stEkNWUcYWoLeAnVbD9NkjSxBNxfik",
  "key28": "3c7iueQYStepzZYfbSX6BFrzxSzh9MbbzBeTqwJPs9G2WrtLVXRZbwm7L9iMUaEiHWRvNx6DT5Lg1wg4UnuE4Esx"
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
