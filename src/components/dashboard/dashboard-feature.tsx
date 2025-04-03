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
    "3ogJiQc5ob8ncAiz4R1nnoXpr8YBqgeAEuYnTSzENCCLocUaTqqhkhsjRUFe6sH6D4BpsmiRrsGTtgxF7pnJx9Cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7j1UMAip2xqMEnuPUBUgmf1ghwNFUANGpPYEJuaQUipog5cKiHYViFUahpUmbqTqhfin8EW6RVpt559CWvXMKS",
  "key1": "cKCXX9n9FiCpLAU5ypVYx3tukcJZv77U5qXpfQcBumgaQicFCGwB58h4xx1k83mapySY4PS3tgM7UV4zoYzhdrs",
  "key2": "4EYxo54ACeV7AxnmbyfHk5m5g44aQ8MEE2eyJojtnFEoqT9ankgGsQCa3gk5M2nH7Kmuqw5h3Y8ePXcHyXkzh3XT",
  "key3": "5fUph1xXdZxMaawJ5a26msyTxR6pDz6Sdo6QfkmikfJfa2a56u2oECBzYea6yBomoZMcPE8LTac13A4MbsbBc3tQ",
  "key4": "5hEi5QxYnjTv4kyorqyKLgyCcZSskQCqTHqvvadpgadzivjSpYLVe4EMFqif1HEJQrRRJRat1tzxqML6SxJ2YZMU",
  "key5": "yXYnumACnrJDdv2Hkk6BpTi9jv3nmSSyVt8AbtE5pzhX9iVCGuFWHgouc5FiWqSMsXdtSMBJWatAWjtVaLpMw5t",
  "key6": "2NGYLZv6bJinm8SngQCihix3HKx612RYxvLbWJcQps6CiytVkNdD1pydhqMB84MupSTBvMLc3cy5Nrx1rSrqYawT",
  "key7": "2Kvbm3WnfwtMPQdL6kwGUUffaGbuPRURDnvd1219ioFvVrB1BkY3V9z456uwTuC7UDoeKBkMhdrZo2MzvQqULYiU",
  "key8": "3m8Wwtem3isbtTeGGyXGRm5Rwh9pBoqmE294op4SpVQpcghpJ1LNVvnVhDbDfbpZ6GaVp8xfxD9RjLEY8JkNGVW8",
  "key9": "5Avjm8N94NwXUWwXKCqYEaZJReeAkLyRn7m8LHcTL3rTW8zDZUyt64XiWhWKbuAQrWbPbt9oHvrpFoUhmvGcwAyL",
  "key10": "WHtsuVpKWEEiFcFsozNLRhVvfFZo8CRQ76ENnSTvoKLgLeDVjVvjvyPZb4gs2kn4DChoFYEYB7J7eLApMZ3cG8T",
  "key11": "56MeTGizUgKeGANCuzqvF3ZY3Azw795VMtYFkekoN1GLFeUn8HxVi4ajsJ24qX95bYJCMy3N3QXfUx9rJ82d3qhQ",
  "key12": "4FSzRL5VbaZg7Qn8ccZXaCnb5Si6gDiwNLJPjva9sx2baGo9UCwPBcBdTNDCAFeKq1eV7Js7bEYg6XTpdPzSQn1n",
  "key13": "3Zsks4tWjT7XLJfzFa56NNRhg5FZG8inMDhZV92JCiLtE5qv7VquQCARWFkQ1X7xmBBGAWKxf4JwrNpCmvfskBWN",
  "key14": "2HZyPEeLfc5k62Y43bQfM37PdsR1qTzXnEZuJj2RCE8qsh6aZxZDWq4oNRtMAp9gFMAvx2BM4xYfAe8pbf8rgzS6",
  "key15": "4Nf9P5aty6bPphNk8HHL21pdnj4nWNPJJGmyMCS2P4yxF7MJR1eAAH6w2oAEXrVkfhnaRaPCTJz9uXsE2AgsnSeX",
  "key16": "4gS7A8VpNXYtZ69QW4KsiSK6RZBMQuLtZm1VCZbfvu67q2Gr7Lopim2Jj6tL8Ziz5jMoZmLtXmZGWU3iRtowhZPp",
  "key17": "3exazNtE3vLCJs8VHSq5smDZrScproqvdQLMC7gPCV3Bkv4zWavXqY9i9U9hdFRoK3QubyvnrBmiag9wnyH4nsho",
  "key18": "5sR3vBa6Xk9rRaHwPFkPjeCcSoeYcmgyyrC5BeqjafYmjwXh44SoZo9LftTSonNPdDr8yyHjotTug2ZL4JGCyheL",
  "key19": "5VhDCdUvYJ8ZiekEgHrb8mLDoyLdWn5duGtiEt4a9tLLJMfBaspaJ7y9UgAXJjycDsTK76EPJZ2AfTYvmJQqudQu",
  "key20": "3KgTdWvak3tEBRTXq5sZh4rQSxBmVKBPCwJ9wWZiTHfbqfqLuSYeuWYc1NULrAt2kcBgAuZoNyBWrgunFnXFsFfk",
  "key21": "5mrXCK3KWayNPwPrweNTQMMkivNZC512coN5VPDM1nr3xzT4RFfzgKXzw8fN676aw8zuqgTups2gyaue3ZV6XRG7",
  "key22": "4TUn5si5G5fGGCt76euNGVphnYdhkuwi9md4b8HbcMsAhj63Cd91yWwrV8oGFxPRL98AFMwxbq51RbimfDbBXzLc",
  "key23": "5xU4M4gre9czrdtt1eHYeoZZ5ooE7Rt8bk7ptTcrmcdT6geaxx948c94aAQZSnwstLSP9YG3MmjkHLo8jFjemNXc",
  "key24": "3GMLuJ4gg8yZyDTvX8ghyZn5e8EhDCmVaRUyaxH5Tt7BPP19XYPSN6MESEenwyrsdcMLteZFhfowEs73vP7tYjZv",
  "key25": "4xgakn9wVsm8pfGMtcPcinqP4taukurp82ZBDCYYXAC48VQapNypgf132PznTXuHahJ3cCAftWPyZH4iSPeaYrNX",
  "key26": "5JehRwmvcEiRGLnjgkdwqfgqbCwpD87fFnZstN62XZGL781Ukva3yWR6JbFphVRuJ9oWxGxJas99mESqApp8HwtL",
  "key27": "3P8t5fzCXhiGivdXSkkH21cJGS381Ct88g882eNfEdrLi3UQH6ctKzvq1qjywUe7qK8Lxk5gDe2qT1AQDCFgcrCk",
  "key28": "rRtePV7KB27Xcq6d3S52dZkWWjsR6y3wf6U5GRBs9yUoDkCcbjQYaoNp1PUSY4L2STyLF6sU5C4eRqU3cSXGDBH",
  "key29": "41kruG6rKmsqUPKxmEbGLkEu34ei33tnoKbnE3xLNV7u4x8ZHNxkFk8CaY2t5EX2WtSfN63R1BMXYYqbVRm1mWP3",
  "key30": "45XgpTbm2g762V75KVsomXyapu8ND7LXGaxJ77mhzBEFZQJbkbCVUR6E3pxC77FUm6Brohew9LS3HGtWKwctC73G",
  "key31": "5qhc4FVdTukLmFEQaPpJ9GMJuJCNPeBNp8FfbFnAQuqQ2nugeZiDGwuYbtttDdexJoifaUN1LAZTPkjqQY2sMjcY",
  "key32": "1285Hf5EyYezho6WqMNWSFUxBzMgavoRkfiZn1355pRMRVzB3LkkwzqpWN2yDBRrvmZVR5dXQruEA91guxTNgRf6",
  "key33": "3NwondezsALzR6N6XBWvAFCV9s95tAN2sBQRuToC4uNZnwRxM7AKBTqn5hFC4Wmm3QFjA3UaazQJAmRu7dkWxppY",
  "key34": "3Y9oqGBruELQ9LC1rgoa38YCFfHvVsj1pytQ6CBrfCSQn1SB6L64UNRnccPtzse1gCfrpKm8Kj1pwSkz8xNWW3QC",
  "key35": "4zEEdYFM3huNGGJvJXQ5x4Y9S7VxKWjaNQor1WAjnXWeEoMt3ngHqKSgRCQ6ZfUE47GCKVcGFVKn7XawEVCh83J1",
  "key36": "2D8ZngmEUnszitG4sorGtotF3K2DrNSZfTBrNHx6p1QdbzzhkS3HRikqb8DQx8WPTHJ2QBgF9AVbjyYEGQ3uwaoe",
  "key37": "gRfSkhCUwDeaNcKLYtfTdrrZHD9sfRSb8b6MXc3a4CfVMELkJeKQbUtZHUeSZimdCmYCwRJTDuEPTyW7kGPJ8DZ",
  "key38": "MhPah2FJA2PjtMFYZoeeATADQxRs6PoWorNuvKcQzouXzJLs3xcLqYJQRnWyAH9xqyeqnmPNkhS9ifh3w2xAYGZ",
  "key39": "5twM2fgS1QmFTMTMUf1URKhSSoCSQKy7JiYXxHp6Ry32q5Cz3mzt3C3Z5oweXHUNFusZXo3paUR9pD5XZYEPNUN9",
  "key40": "j1tjAWGtp83DjwmaRtukWYRoZUKpYohbqNhx8YuorCvK1fjYLEkZS4GbJXX4YBsjDvuPbVRCdoJUu69C9JNaPAE",
  "key41": "Wsfi39h6ZpkjGkiEkYP9Tzv4LoLHd1PE2LgdLtr3oCvXtNrYjNVgZWxc3JVmbYwrhLZWahrdDxQBQYazKasWF7Z",
  "key42": "7DBKjVJTtYdE9DDCHVfGk1PcwN8p7oLunK4zCsaxa1B5ft8UxPm17FpLCnoR7PswtBysXyuQxXEJ3D7PsHyfVnr",
  "key43": "i5aSbSS7YML1cD35v3HqcWuHPmULmjbX1qHLAWkw2EFEguJ6aprXxQKJ1zqGr6EE11Q75m4Q5ZYrbFfozgWDUJS",
  "key44": "2RRbzuPfmw6mUWpEjmv2qLedW6xHRHhrLicbVCHVwSBD1mYHGtGFYvje17vUdDmgwjuZhMDnJZR1CeNe6fiMHwp3"
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
