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
    "nh75EXmgcUBcUckmnD4B99eefWodmKGZGWgdBnJWocrjLf1x4kz9fweV6U4zp3qQYb8oF82AoAECrdQAmr8JXno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45MXg6bMcceYAGYUYC7wKmfSiHKr7TbLYz6ijwxj1W1qqPWY6Jsn3CgpYbADqhejmJZ4Kf1qXKxXFkPv4VJuPFK9",
  "key1": "4DfA1jWvu7b4wbgZcebrWREqiRq2oK9XnF1YemUnmXTnuYVXghpcT32rT5oUgz3pyDQUrDXc1Yor1dNeQHsnNukj",
  "key2": "31LBeg87TQApbr35RVgS2MEXGcojxLGUQ6Ws7Eoh3GQ8WdrUGXop623MbiiwqT411NkRqinZjs9pHWpHxz8qaDqN",
  "key3": "eghULcbHCTSi7ryF5xRXuTCHPM6hBvdDVXcywEdkEHUSuyDVQV9xcfsZh1m9njLaz4e3gzzUV4UTKDHd8PEALLW",
  "key4": "uVLyTjnacQ6Zt1TmfGMzRCNUVdGcSKqAnvyiYo67fVYw8WC7j2JsdYoJb51ks7KvLtF9hmySaJyMH9hYqKDNo6x",
  "key5": "nseah5fctTuRuRAZnorDdQzTLvmZubF9wY1KETDge3qacvqKq12SAtpwLRfsJc1YoSPyzYFvwpxUfQf1Sbu2kho",
  "key6": "4ybb4jU8qDeEH6HQ8bo1aGrCGYeSQcCKEBycBCBF6we8vvbeiKDyygS1TDG4oNYSiZBentBhSD8PaQQLH5hqP9Dj",
  "key7": "3ZALFzQDG1F3KiNa1EZSfvm9JJaa6w6x8aUt9UbSni48FR2z6C3VBGszuLxqbSSQQx6P1LGMhDK3En39BQDmRyST",
  "key8": "5vKtvzzQ9DuNhxyKCroj1FXaNW94m2LvueSUNzGbGzJqTp98xeVKSyafHhjbSSb5QSvTR36uvFSkdLhadqEpfsY",
  "key9": "3bTCaSRMgsG1gmtWuj4eiCPbwcJ46SnDNhJM4Bq9iC9CpDx9aCKkEnazdqTJ3VbePNNMMk5QZVEaFSDxA7px7qXc",
  "key10": "4T5dagiqjMMBL6P6rga3asgzjVgSJrsrtdEBpN8vp3QqACvwX8w8aP3jMXTFjQTy9HbCLQRFg2nrbfwdfeqY57nA",
  "key11": "2ThUcFGBFq2PhpNz2qLJKJtgNte7CYNZWTZkX8y4WNL38JBa4GywpRg91p7W3DHabunWMsSW6rBC7RC3qE8d4yMX",
  "key12": "4oEA1XuqdaEi1Xtktfs91sH6YuwLtZFifyJ7xQBewjeYSq3iCuW1KjTrjgf43ijFpxTk35qkAgPNWm3X72wPJATG",
  "key13": "3KVqrxcmZmNt5S6ZRYcDPEUJpwehMcaBNkShJS32mxKL5wb3Eon5HQaEWTK1p2jKfzqRofAKpbjdR5sDaHy5iCxk",
  "key14": "m21MevTvxDxQxPrYFygsLPPbVWAraXjKZyAK6gwwsyAsPES8K3kLagXgLJMR7AtPUmMDRSikE3D4ZrK8TNGAs4H",
  "key15": "5z8Em3EH8SpPbuVLatpB9vnYoq1MKZbau62WuZUGMAa5hdpM7UY4s1sQ2y9Jc2YJnVQbQKxAMXRNbsgRUJGfhi3f",
  "key16": "3PsNrJiyqGBvUBtr9YiVsGHSb6xmNiriofWd6XKNFJmyy2c93AqKnzM2KXf4heGdwjQGePAkt2CEpqagHdTMy9e7",
  "key17": "4ehhCk4Pg9DUEB3PfvS3q2iXGG3jc1YYusmcdNFfJcmcfHuTYNSTre5qrgtb9qLWZzAu1pAk5fgKRd3yNG2KpEon",
  "key18": "peRhooi2jM5cJpjP2TxixqdDYg1wJSkbkAXvn8YqDXjHLqg7KS9vmQ7MeoSiT6Jd3PWMJWEhRURsJJc4x5kJTfK",
  "key19": "KSUCh7xKN2dwUbJwwEXhSpfCWEbpkuh8MtghHuYPc5GhHZdCRiBQLf5oPc4kKisDZUHktdLaSCLdZbk1fRsZNTh",
  "key20": "5E5mhPhr7TN59r2HmZyreJa9J313Ap4NdYQnWeNvdbEUyuMXpzCqZecNcbVzxsgyZ8BSzfNSyLDxpe3fgHSiCnvt",
  "key21": "35gKkvW8zqtZ4bNEyPpEFz4UMoiubRRkbRQ9qUfJxfwoBthuQHRkeaLWbCy8QDBorzzPB1af6vFya1roTb9QFPgC",
  "key22": "GCYV2rQ9tPX6QiFkQR36h3SQ2GTyEzXxdTahSxP9qhmJWJPZ7VzuFZJ6PrU12PtqyfjhqzkBypb3FE9VeJ3uXbG",
  "key23": "2ca65s5QKBRdX4Vv7nSAyVZHoJ1DzAFjm5h9LG7YMdVC81hAs74WyQ2br896BVx1RnsmCeggoQfbFBceNSWHzars",
  "key24": "4ZzZB3pTQ8T6pWNDxb1dGLqiEHb47ankpG1KgK52N5Jtp62UmvigLNysgA2kntbQJRnWpiqsVoVW2tQKY6azDqoM",
  "key25": "3m4arnSocAAkGgMrutCyA6tPXJQnNSxyeqnyr3wUMJEUvCAh5w5qkJqAjQ8JqbXJYFEu6yvwsSxLW5b42Y1dg6TE",
  "key26": "SKP6Tpdq2aQs4gtykqYo2zp3jRfQztwiKEt6p41z84mhHPW5NwYrv5kX19rBiLtPUkj3fYonmxfd8Zpcq6d6cWd",
  "key27": "128XZyiP7W7Eyw7bKTybaDwXvndzAMatwDWAx8GUCKZnhJokSBoQvrdb5JgxDmstijgFq7QFuke9z6hdWwsA67MB",
  "key28": "2sh2HS3rEoGgTFFHfuhwRiS2HVkVveXWvmPpACgfzoEmmtzNiBp4ETWJDAqtdmh81JtAazkzQqy7JJQ3EzNEx4k5",
  "key29": "2x8R6kuuf71z7WJB3VvdXESKx4mbXePLsSwM3r4PkPMRAoqs3SE9w99eUinrBDb4FLp1Spj5JxJxwefdRMpUS9g9",
  "key30": "45ijWofF4o6HS8qATBJXonwy8CFTkkb1eWmeuxyPeeVfokEs1NuDp98FvC3KPHGvTtitat9K36Gw3W6JZqSt7Bc2",
  "key31": "3EX7aaKA9bTvB2AvNT4ScobbwRBrj7gQKbbEFnJoKDEPxW6XzRhnzPFs9wdUMfKKmtSHfSVmpNRY5XvHMWgzFkfe",
  "key32": "5hsifhCibLQpcGzdC828GxH49XbsQcHLpTwqEGFdG6uY3u49zoj9uoSix2sqy7Rp83JovEaMrVxxhSQakF1i3954",
  "key33": "fPaieNPfxPKWGBpK7Zx4qSakgTy3EZnCtVCXKp4GcvHE4pjashsGAgZr31VrZVXUsNv68YnnErUSQwCKRrXaUiz",
  "key34": "4zkkRqCCBMv4VqSTHVcwDYfxwtLi7kQfTSGqDUDdPQMo8dr3tXXvXVBiB1Q2BdfofqkDz2RoepmFD4tGYXTXsV2a",
  "key35": "4UaKWnNXXJ6QQYoS2nV4pUsdAhVySwcRwZQE3WmkTyt2YCgQP9YB4RMovhrHZhTtQfpajFfMrZsTqP7G54qNefaq",
  "key36": "ACXKi9YxrptGATSCn64G3XytyHHDgbiNUQj99bjwfq9poAXfuS9F4gguAfdNenf2KsQPVcLgUcxA6MxiVTg4xnt"
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
