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
    "2QjH7VmYsTYEoJjAbYurgpdA1AoZVnBGVS5vZv4BEwWJsbeeycJ1EDLwXkycUem8ZZQR6N53zSW2A33MYAiYHZJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rioaWiA6ZXUzhvwYtHai27F8ecCJG5MDiGY4M41hY6MaEwETDVzTUP67a2qbiqVurLAyWfkiLcHaoReE3JuNmCP",
  "key1": "4VWvqjbba6ZQctohq6HE2odo4eg13R4gq1ChDvGH1JHLsBWwVkFSHujY96RNmQQEq8pgbHxgPDK7gUHdoo36To5P",
  "key2": "2JgGkFMmuckxJFbxBgMSN14wHdJyHHAARLU9dyvnMUjxv7EqDUENqJeKdtZqKq3TeHjqTgFDBYTRWS64wbedRddk",
  "key3": "r8y9ozn39Pirj2pChbJUJ3yM4x5UCsWkip7rhHCmszGn9G5mXhRWHQUQMb5oCrYEMDSrY9UxpMqZwBNnc2V4HaJ",
  "key4": "snEgukRvq9qNatxdtLTiUdtGKBCSZshDZqdgXdBQaNScLjJMwNTGQtvAViRLmrMBxJJDHhou3hQ8RLeaPSBdrV2",
  "key5": "28Um9JZiw1gH1FEEK1qL98xEezpicmaqSquDqqq9kTDDF4jxt6xdiZXNsnxQy4dsPCws8E82XXr46XBBJWkSFzE6",
  "key6": "2334VxXDbj53AxJHhMHb2iu6wR5oVs4rrwYuhbsYxF1726dLQFf1P2UNDR5Szj7gNNjwMziWczmizFVGBbXnZGUc",
  "key7": "4qsAkhKN3u3U65ounLx2pdnpFx8KZrndHHqBBCVLRexZ6scdDoZ7aUUHaPcFuetXYVti98D2u9MFHXMaVhrci61W",
  "key8": "57PwTR5SkJRPcG1UeN487broc5fbkcKWwHnWBFrDNJaow6xcMqndfVZRVyF2SqaKoe6GGYzDUcReKCT88knQgSgS",
  "key9": "4cSUweXxujNG2TAg69VGpzhk6vQ4VYWQEKDvf9ciAQg2YxQYMrmCvFC4D4sHNnuySv6Qv1VXtW1jRvw6azqhdHm1",
  "key10": "2oiCkj2YfLbMxQ9xRapQEhMJ9n2KEBRDKBBS9o1KqBURhjfgmTmkNZKHNtPWa6Akr4SuNjEkbvuX7v3W8GM2cuLY",
  "key11": "5ufQ1W4bNWkXZqoLP9b1GQj28QdzeJaKXxPXBezLDGBhfjNeBCChzKdU3qGAeGCo2KdSitfRrgWksY5PhAvijoBk",
  "key12": "2bvkQvXbk9RddvD8KjhphhtBEoJaY4UYoAintfSrqr3YjdXifj7Q7edcrHZxohao17fgHaQpBkcD7z12t6PoxStc",
  "key13": "juve26uLyvBQAGNiv2PbDjYtjmeCes2CSCE2k7yPBJhVo3jqFFGQSLo2dzseibGVk1NiZoSbKQimQ4ZNxY6fxfD",
  "key14": "5MtALSEVw4suSj6JdFF3fAndaYt5bCgWTqRr8TCh5TnaxCCaJRJSNJjjSWBxrhi2ieps1ADKtwYgRpyKnG7BvWVh",
  "key15": "4sdt3rbmhGoFapcB23kCfjoRPGH92PiFEThAxswSiAnBrUaK6BxKAx1PDWf8BxE3mvPFhRTzbhR1Ec6FkU4yD35G",
  "key16": "7kdYNkzTAr4gxGiU2EB4x4xwoEJKkuFtTkybJtrcodPU65NnAZK8XTWan7i2FYQhhVLRPsx4L39KRa7njUhNwuL",
  "key17": "3gkf38ByA83iXUxjXrZcCZFCUMmaMdnUXFrXqivma42S92ZRE8x5V7sAoAiGTBdGVYnqvTCsExDKCa4RqukG15Zc",
  "key18": "dFkBCpC8dSgL425wdkGEC6zs61LcnBjDeP13RKoc3jNYShQz8jXw23CrDHfSFp99vNnbRwZWHJB6FXXZNA1HUd8",
  "key19": "3QSDFYuEKf7f9RQR2ZT6b218nija5si9DFLFDKkz2QnHDbgAXmf9Yr664EQkC7NRiafJ8M4FJfbTD8eHa2RiwFtX",
  "key20": "3ShFALkrM9wVZ1Uwa8CHqpf54FYYYKZeqkDs48psbgbam4oHbkj4dNoxDhJJUF142A9BCzcu13Xufk2aoHfrs489",
  "key21": "5r3Mx8RznduRLUoW4tbSx2UrtHZeFpvCUke72cxFhg6B8mbfU1oaE9UxzQDHKyA4HETixVZbKtbg5Cgj8kVAuQBc",
  "key22": "4xbxsFzDHjFPTQiV2ykH3yRW2C2Lci8ihqZuxCVaFsxfPSdsidFB4MFwbxxfQsxZBRTLZXSZDFqbsbYEtEsCWKQn",
  "key23": "2X4X75CUFf3nYyNKgiQ2aC2yViuNkAozNRt7HMjBCfLBnjG9RdHrKyHJjr3MoNGzsB4LWnv6xPftKDSEicNRRFhd",
  "key24": "2dzztB4nUE1ppyhjaoNAUxM5wXLo69U15hcfndUEBFa1QLXy3dnN4UL4aoeH3uqLbjjwCV7XYJt7Dr5hKNnjDkUx",
  "key25": "4AZycv1dDffQH3WrCe6ibSEs2V9xz5vERvVBVHnGsay1VFZv7yEM3AzczmRyV1zdo8AfKohaNAqWyoa5N8Suk56i",
  "key26": "cwXuTdzJPHbybSF8ejGBtoiLRP3zo772YRwzNHnxPpt44UC6KpgvgTMe8Qp6Puvy1nqYf1kUsvBtiik9vNaGUhe",
  "key27": "4EedKnxSDfGmJXrpJ68DuZHoxUfwdBdCyB2dyyddo8VFe3oq8h3HeLxtzg3SJzFC8hrzKP4ZZKwj98yechPchPFA",
  "key28": "3VUg5SVGdPjxGNX6iMUFTTWeedytZPhqzLWRPurzGdPzgiq2zYKGBZzrBrWwpmfdYUfEjuEfoEVP3bEkSmoFQ3sd",
  "key29": "4RQcP56LsZYU97ez74hDRtnNnaxCU3yja978EvBkXRXqQdGKuugvUUcoBzPiXBRNQAJxAxtxBwfV47dVqfAmahtK",
  "key30": "5B3dAyAuboQLkbG5Q4xyA1p14Dg5W1c2kyWrCaCh9bGUQngqA3VFtUCjWowf8YM9qbvQjMuJJ1Fdgfjq9g4A8bDj",
  "key31": "61bF6fTMzZpdxz1vs59iVvTTHLDJAMsdX8gDhxPoywfbXyH2zBDq294o7waYLDMo7GBsLkCNiNiayVkE1FkjKfoP",
  "key32": "gqUdTjjTvsJxn2eZTv2AaA3pxaA93HxQYmFKC5mvUgw5syGjBzFwaNTLTr44bzQMQJfQWdtVXdcwAxQxFyazJ8Y",
  "key33": "31CRWLCCUU3qipyoABa121G5Hwze1map84UnfawAPNEmqjoA96eDConjGz6hqWQoSMDdU1q2bJXeLWVeKgEaimSC",
  "key34": "3Qd4QgWXtgN5jA3kvprVAxPXcKSutHWQpYPrecS1b9ebsFpnKXsBV6Jsqec6V6YRb8Nd36YvecCHKugzg5JdVpTj"
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
