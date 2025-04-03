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
    "3QM3qjx8nqQbcwwA8VDozYo9XDJcYojXLXJkVXkzdpn34x9gUwpxHQyypxWbof2e21NEUFcMpF5JDusNrd9mTxkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kKiqkBfaMWExr4dfkKK9p3fvR4cpeAtyvGnUTwB6BsgFMhTg7Dfbub8yhcxnVBqhwWR68HsRfQ76v6pCHMUwWYW",
  "key1": "JxMJQCeogbWLiBaumjL192j3w4JGPteAPCyvW5wWWocSauqViaxB5i1Si16TaKUoa4rbxgYt7dskebE2UPo5Phd",
  "key2": "5RVcDKaHhnGPpBRB2Zz1kkVrJ9LrPvEJFBD4oMCsLxqh5u4feA9HACUkquF6YmcHgtvuJWbhtHeNZDjrQ2rCbkAD",
  "key3": "5LY5XiS27qe3fGAshqCWGSZftoi4D9JW9qpjXvrgSZ2TE2S3EDbUXU27xUG6Y4c4s2mVURooemnw1hyvqGB5Q4H2",
  "key4": "F12jKxxoqGB7ZEj68rRxrAwXgki6fv4hHia5Autxg7d3SZB8oPpqpc9EDfxDV9BZYP4CH3KJuBezLn5dtT11gaq",
  "key5": "2w2DXLHmK9MJRHFvpc8ivdfFBrC9htWdbzPViSwwN2c5TDMASFUpF3bZq1q77EpuUAr5Tz9bVdXE4UYz1tk6GLW3",
  "key6": "2Szkk5f4LPB6J6y7TSK5iXmyxkR8KK1eVu81N8pTxjiTwaGDwmc3auHv5Smv1cM2Bx3ycdgSX69ozZkztbMvXiUc",
  "key7": "3tsVfG4CGFa2LsgRM5zSKkqQkoYssrKqw6eJKhSLC35xL4D8GnBsdACq7ySF3Tu8AXUd3eAoY734DkYkwcVTZqbL",
  "key8": "4LDbqGtTUGxFUufUifDwSstLMCq5Cxb1LJvUWitm9yYeR5GsjJpHvXC6AiXGqiCUZHE2fnggLY95VKiEDAzEkWba",
  "key9": "KgSEh2Eu7hu55nsjVUJLCtsGfHhQYLvFuRCTzZ2mZM2dAcp2YgZSHFM2GWETjR3ihua5m2g2opQYubeDdBpe2WB",
  "key10": "4pqU9fZcvZAuEYQcz1XXmbekUx9x28pn3TzkKmYkoiUuCQA7n8BycVyAjvz3Nyq4nbZbn1B8BSVGmn3nzUbyE5Wm",
  "key11": "2ig5B5JfGu1HwxfNKnDZUPd6TFPFSx6jj8791zXE9WVeJN3z2FLwsv18kdLvcvgKUUrgd12cF8A8K8BBiThBwMbc",
  "key12": "29E5gp91mcBJXPVKX3hPvpaGNhTohsnj2vhdXzcYQNEYQ7vA9YLw6rSKHgT147brbWzCEwhTPDGxU8biQSv923it",
  "key13": "5xF5yJLn2t3fZKYPVzbMZ5HicSTY1Jpq61BH6PsNkiCN8KGhVnZm9pTMg2XxDFcM3SG4XRQa5GnHCoVetSsD7422",
  "key14": "TDppg7qCT7D4QgDf7BhkCZzUrgrwVdfSxnr8gNNs5P6RzUukSCt7YoNUpGQx2sgsk5SeSYYNYXR23oKhCdCmz4M",
  "key15": "4wq6cjEd1bCkrrR6x1JLS94XHyJxWRZpm2BQnEHvGyEnSXMGzJbgVSc8kjiHZzGXmJWH5ztm7DEiSAjSrXiieddr",
  "key16": "2djLTFTmKRrtQid8Jrgv89iDnXC2SKMh5PFFNukgaUY47AeHsoaKtHFfRe8GrWApNsWbv4PKikvokiy5DfnRM5rp",
  "key17": "4ZyHcti2nHMbWnVzpNeZ5UUwuNR8aMA8EonJ1HPFW1x7o6QcAr6neQa6FU5CrUXNofVTJWNkX5PtpY2UR1TkBD3B",
  "key18": "4Mc6Zy1EDeExgw4SsSW2oPLgsXYTmcPz6uGQjZWSz53stahPGV5tH3HS3gYmbLkET9X3ZKnbauas6Jmd6HTZfReX",
  "key19": "hYU2XyYWCPinPpPB9ZHD3UST3NVRrdm9pL3ipecvtQLXWcTyjRKbr2mVjUxybvn4HxLJF69bjmnBetSaKBcfWKQ",
  "key20": "3UiDLZBzrgTjnhtE4Zejn5tPkgY6XPWUiiwVBJddkNEzLwJcLp1QEo5cD3moXZxZ8Am9Y8jcHUPNVyUpatJaWdXv",
  "key21": "36jr2Lcq4PFuZa12pkCh6RhiDicXrWi3APA7667jXdv9EgaCsXtQFxLqTaowVgWCa4Wic37GNmbBaex13n1KPFB9",
  "key22": "5bvvqWAVChKfNj1vmFw3YxJCDDqVQXZRGoiZUgVTM688dFVN8TCUFqqLu1UZJv4EDM6iNGJWjrnCYiT9sSsBhpw",
  "key23": "WXR7QKcxrQm6HU6yMNjYBjXwZhqcsAveKGAsu1AVs2ggBWbRuSwhojwYhpLvQwj5Tm7i3GUq8fJwbn2d6WqfAxr",
  "key24": "22fndkhFvLTLrBdMdJKmTsw1qGH1d3TrY2MYpSrUw86vvyfdoSYrsu9FHRzcUmMdXJQTD6V475juU62AzcJVnK5Y",
  "key25": "5kXW5cAYvQ5y72bZ1JdowkD98eyxqqJJNoDUWo9KtVdY8K5djc7yrhtjVtfLF3HTr56TWxDAFWXgwWcdHNnxuLet",
  "key26": "4MgGpBbytgY9J3zrnqKEdUs8bRfXEYCndgZdyfjyH7G7W7MddVi6r9xZiuGjZdrBkbRHJFxZZmcp7fktxAH2KijM",
  "key27": "3A9LoJygFDEaakjoVUMX2We715f2GrDZsa4nFg3oeSyGhqsBHMiP6DbREZkBQTA8H1e1Jc6MAhw9cCVHg7sqsJGa",
  "key28": "4QtDbWStSCq8BihUTw9SimP896NrbLZ6ppJQSNoyW5hraaWM7Lo8ZkGrgPEsERyCyxLnvJmrtRMWAznDsASPoNDb",
  "key29": "3nMnBQeKXGJPuKyoGDNoJAu1ZoZHYE9QofHSELvtriLWf5eF9MTkKfcYv1G14EzL8eAck2u5BaqVJtTQtu8p8PBY",
  "key30": "3MNFp3tkoegLL728uKYuEvdteu83WRZMLXty9JfGV8npqzR19NSAfGMbammhepM37UcD5c8FawJR1Hy6Ni5gs2PV",
  "key31": "2yNvCDmJq9SiAZVqBrTBCDS2jS9grtYq4Zi6bFPqKqwCebGpgqRE2m9Rx1RK2CX4Sz8XzZbZQrkuQt8zhoEoRf5M",
  "key32": "2PEeG63D5T1vfgeTwhedVPhqtygdDxrXbkKbLqgopUJ3CjZL3eVJemxANQrAL9FF8pYrioejdWXjL8jDjyQ115ux",
  "key33": "ohXghehk7m2ZMYQAfZuWUFQEQPNF3Tm6JVKXkMsdJenZzk91kaHjgfoPd7WkNFZdAqxkkiLx7BDErJ9PBarjiGh",
  "key34": "HY39HA9jxVVc3gfPND8w12cyU9d3LCPchJph9vgqoLcuqSZiUbo2aykzvSUGUESaChnSwX86481DjZzor9gMwJu"
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
