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
    "3sqY4Py6GzcCmtMcUbgUNgKhyB1X33jzwnWt91hJyMWB7RGc4JyxC2dRC5LD4v815mP91UDvGsFaNYRqSFJbETdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rVvsgGad2FxLkqEdecwxMhvPuf38vrgX2DzXXNh9GXPAoQGF7fk83BnLfUeQCijJCd8AAKRWsNVzVpDActApJ7A",
  "key1": "3X1rj8DbZLhGZPCqTQrQNpP4xwV435Jfy1qexDtyhz9ZgxNL6wJ4io24R8Cu1omvVFk7iCbEYKQVmS67svsy1wpH",
  "key2": "5kF9poCGw65iyen9GuZTRnu2WnPFdAYoF6sJnvPvMJvp5rqWZjtr8fXyFqBGBcwgJwGoDuoMCEmB8QjJM8YEAt8r",
  "key3": "6rLSmdjAjmoe1dJXKXXCacdePKDBJhntqBRGQpQyocq1AH77EHS9tYLQ1B52UH4pYWLm2Qdk3SmfzF3YNU1ikXw",
  "key4": "4Z5YLzzoK5ULVUwH5KC4FjH5eFJhS8HApZ7tqsASHbXFqMHNSgaUxoFFsTtegvJqft7ikN86ceCM7u5QEs5kNT4u",
  "key5": "3fG6ZVMRLRDSy5uiXAsVvcDtN4rfeZNZF9im8YqXFKqFaUw1yzTuwD1bmb5WKCGvwGRtHw8GRcSgbUHGpGM2fPgp",
  "key6": "3ugxrB3BVPBfFsj2V8W8V2ZY5XXT7qx8BLmzatqandcqM5omKea1ZXuoYEtYDKpkLp3yuwWgwMvTM363eqtvAdYn",
  "key7": "8dMfj4xm6XoJaPym3MntuRZogwe6AYDdjMpPh9x8pTacEnmaBXwss2gJdjjEFcutKQ4ZooeKYp6LQL5HSjUaJKN",
  "key8": "3PB2p3oS1BkjMj7QWrfSMvDrLExCJ3mxinLgmAgRexX7oB5RXn49GygxZxufaQc1Ruc8ADuPYexvSTEK3dxW23rW",
  "key9": "xtJxSZZoeEMgJPMus71YnfikFYWH2gELhPxMPLh2dt55rtVxg7dJLQUwoaDb8kaW5pECaR5rbi9We9Tdy9q3Vas",
  "key10": "2L3jtzfbbKDRoWfr1AMUBJWr3jeqbMmbt97SePZsqsXtriDMh3zCyioGZuosb6vJ86imCRhxApzqAUhLMr1aW9sp",
  "key11": "U2tHEMpi8Gmbe1GRuAGM5XaCRxbZygFeRBRA4GQwhWib6PjCXo8Wr1j4fMqcKEJMzuPM5dLf2BocjSuHiqhtCBx",
  "key12": "5yzXNitSxATK8tG5vBK2iufY1nKGyUaQJzREXKXZdRaNp4RoipUjPpg1RpatGqm5tYcWCLm2Ppd9VdeVMQotu5Xj",
  "key13": "533wESsC7EoCfp4AWGD5PaCtgrS8cqsfJnqXQeER4miTzx6hVBAgCcyMBXvN4riMoaSjR7umQazA5WkfKdTka9aF",
  "key14": "4S71fFoJzzSVvucMhcDGcW5yNK6UvzHBcnu3piogcpXfq58qnhu3S2QN9dSaRD8Epr4bwkS1VkWprYNzmNG26xfL",
  "key15": "5YMReUF2F7BZ6byrJN5jatBxKEPXpTj3A7L4Jh9uNhvEaHAdBjme6pKLTotvK68z47a83BoUWqZESW2H8sXXKBUK",
  "key16": "oUzUCGfHTV9ApQAbin31vt76KaaP1xX4Y834h2xq2H1TNdunaHJtYixy72E3teqnBzv8n9rJ7oBqoqvjw19L1Xc",
  "key17": "5xqKipMvBXaEzrfx3tUp4D7NSjCqW3MzVTKB4KkjrDUaZDPb7Wzz2b5Z9eb2rkcjsTrasSJYMzoRLJKs7d4B2vo4",
  "key18": "33TQgfQYpzZKhaygdUttZuwf5KGyjxVJMeZxhZB9VTKaiN86A6UCXeNc2qTuJMZPNqQbW3K4m5PoXXsjWaEfCR5E",
  "key19": "66uxp2QvZQLpgtuqUQJxWL4oM8W8AWBkeKbzQmfR669hc7XhyNnWsLYw4x8y6Hr84txZLNmKbQiYk7MxsbsjjrHg",
  "key20": "3VpwNyc9dqqH23LQr3a7okENB4B21wjcCrNDhTDLvxTtu6HcAa6YM8XWRtbvNUbt4L7NQ9MicZ1UpBNU6fhgkePo",
  "key21": "3HK4YbYcfPEVBLNVvXnY7nFcFoxtePX9BkahcmvAgvJgVEWsvZ7pT9RQ3AHJ9qdNRMzq3GX27CzmRgeTzAGVHLsV",
  "key22": "5Xgd5xZbVLvLd247MeqxmmMeXSiCuK5dpDwheTo6BsDAQWCb5ySFo6yRoxvctMd3d6TKFUtpSLnaytQsixyj3kiJ",
  "key23": "42sSKFGP2RMwbHiwd6QqBQBYdNTMyE3WZtmWH3ghFm6Y2RaMfVrxjEANTQr9pg68svN6aVdjanpfK1uFExVdq1W7",
  "key24": "kcFhgxth5mQ1yhWt4yQNspUfACFfKyxFL4srjSMNazuxvw4vJ91ZdBDzgL6kFPNmeZ89YhiaTukL3b1MogVRfxW",
  "key25": "3PWi5HsCrGRkYsT3A1pzYJWZqrbnBh2daELTYkZUAs2kJcR8MMJq7cgkYmv8AsdidqgSwGkvhU268Kin3i4qx5Zc",
  "key26": "4EzzTJcHHrjpJUU3HNF4sRWwGaw3CpP7ryYFfuiaLw2h7Ymm8oMwvVVtMuiqKFhvyR15FGhPRy7wcG2Ht3s9NSm3",
  "key27": "28ovHidPLqHLpZi2HsaHa38LjKwXVeKjAZaCb7EuAhLqqP7itFxqMRkW3BnQXRJ2MnKaecficRyLrGMBSDyZz9b1",
  "key28": "3t9Tj4w1cwoeWnQy9Kj5K8cHJk8tBEBYESCpjhiq1FbhAHdD5aPm12yukmyGCMk3DNv4B6S7EcBurLE5EMKsBigx",
  "key29": "EBpzjMjQBUpQQPtn7gfEHQKKHrSbr2fUNk6vXmRARt6bt7pVrURfbBaKEvEwTv6gP8ki7gXFfFNYNBca3EFKzTe",
  "key30": "2DhReEZK2T4UupyUnzjwze1f4gryr71qgzSE68WX19RTdbGYaPdaBj8ThYbaofjesvnmjpE2RaNN8bC4aBadzjkj",
  "key31": "37hx85CowJececwcdAYJzkHhRMYzKih5XAGBemrq8SPkWkmAgYwhJeFDt6ChmW3zR335nDiCTd8vLr3wUSxP7PAu",
  "key32": "5J5C7pe5xxd5YYNKtqrhXWEdeKosATN3FFtrY2RwjkKtRfoq5wdPsFWxXEJR1aPFwvviBjcu6bv2prgPDYyrREbh",
  "key33": "4Pwt9EsvSPugQrYYdYYYG5GyyuKRkDp6tg4dmqmLtMQq3QysA63k8s1bVyY9tF8XnQBVxC5gNzwwYFMUttXH9H1Q",
  "key34": "poDyN9F1LzSc3k8byKP4hdEYVf7NR3HiKQQcJvkhDNiNKKWqMYwYpWQ9pB1i6YcYjtpCTCWdoLvgSQV1n9VJfR8",
  "key35": "mfgWkG339UWKDuGXmVGtd2wCVkV6MkKYutpWs3dTMFhbnmiCzF7CNgk9dwSu7FW1FEfJxiwzf4Li9HRy2jQZwJ5",
  "key36": "57Z3w5zzfw6x9kwT5rvw4kzvJ2YPXG41dVcBM3vg4LRPp2uB3oNhtyMAaJBWg7Yi9a62UZCgUGTLmmzsHLo24mxK",
  "key37": "3qtH8newWhzThq75fHxsVFaj5GCph58dLopZk3Uayu81F6NjaxqD9QNxrAHV8DCHLRnKXtz2y5K8woJdzbnztAQ3",
  "key38": "Y2Q1YjMnXzbtCRzwATX3JEE2x8kmPrvvX6cTQHdPVpg1VF2u96kckVmebgDJwYkS7p3xBAk7PyjcqwwXhND6gWs",
  "key39": "5VyAgx234TKJjoGbMZLjX2ZrPXxXCfjaE7W7s6EybZppnMoEYMdirBdtTbmGbJ2qMdr5tQXmejJeEvmE8oCgE1hV",
  "key40": "QFiQHNzhLa41LtTpZNeVYvF6EwbDL3FPzXQCL6uYj9phmy8mWbFwnNd35tPhA2LZYtxPiWy1dNjEv2u7KxgXJ3C",
  "key41": "d6UQSPsZU9EZBzfRvVuQKqHtMiSFy6jx9pRxwmEou369BKbzTwSgFnR6c9UXyykPZvU6Xyv1KfhC9WCURJ4SknL",
  "key42": "2QA7gmrmJG7VYZ3A1VNXmH3K4CrYm1rD7Y1VNFas9brK6QZprA3nPdizpDQtQZDRzZbogG36VWoqZKspsfKSKMk9",
  "key43": "2FTXE6okqNfWDA98E11FjiwXL7J6ZovnisgEY4eUkBv63RYJMX9LaLpneCibMudgW5ZGSTDWxkWeGeEcD2PWmoWp",
  "key44": "2tCntnjsdXpchYYqa6urDupTzpWhc6Ai5MCUpFh28D9jnPzrfVbDXZdudiY7JyNySmCjmFx3AouknQmgktShnJxt"
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
