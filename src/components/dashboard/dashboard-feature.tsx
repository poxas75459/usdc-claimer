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
    "56GxdHxVPWktLxLrYjhjwiYeDaHpbv6pwLKYXcpgPMupryDpwHcmSE251zCFAqdSofAdUPxhVr1NMoUHjLLayeaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PdCJ9kjiEFV7ZfvKHhSwEdj32oMY4SHGja8nr2DoihtTGqKSYu366DnYUDuzrDLWTSW3xmij5DJxyHXsRCDodUp",
  "key1": "2fmQ7EyjAHKtNbd8BQEiYf8m2qFXLs64bdKFHxXC7vSCZoFVgLXuCnDjPWaiZm5nqLM2dA32ro44W5tafJkbwpS1",
  "key2": "3RQtMg73A6vBqKLaQ2G1cELfWxsGYZ2P2ZRQ1USkePPkP8vkUJi8Qv2FAXzeyeFuqnuAeaNo84axiYA4k2Vythv5",
  "key3": "4xK83nQYBVzSFEgjKeVukpoPRuyEroiJqKRTDsEe1HAAJFHeL8fS5f6Br1fJFstgg9YYH6PMTWNWYKYubTHpNKrt",
  "key4": "3tkSCn8h4WZTsAV5tHzgD7s8A7W6byn2htRTW48raYg1BE1V6MdQgVnGgvxP9n8z85hLKYbyyvKdUpK4M71J3xYK",
  "key5": "5Pgopb56tTodk44qQzyFLjEu4L2mhCPT6pUfdQQEe9khrzff395SyaEwtNcUWtdM6HbFVkfGrfKyD4kQDhhXeRhg",
  "key6": "456LJmHVhkcP8DbVPSzG8aUhf8QLPFsGeuzyDWRtaXXH17HWqkFaQwWQXsSQGTFTE8d5PHVLsgkhfLD7Ty4Jqesu",
  "key7": "4gGNEK6a2F1ipvRZjTjcGGU3NZcMEKwowRpfnxH8PRw3AMFSxAiBECM6ioPxrUdFxQ9TWWgiBqM9Rw9hEMDnDPfp",
  "key8": "3yZJCXNW4QWdCEDcsDwEFMuVo12JYjXNSZq5dL6niFGF3QQrriqjTgKyQM6JgfJFXVy9t6Y33CZP2Kwko63EQmvS",
  "key9": "57GFRB4iXJsnfrXkHadh9hTSggDd4UcbdZzQsoTXLnBCy4kQSVvdTVxazhjxH6NU7N25LAEP8rTwXRWo2G7AXcvz",
  "key10": "rSnvuH9QsgGYSakGswfU7EgUd6QibPTvQ6UdJgysBw2jguUBWsRh5z6dBKFJ3F3MbJKuUWxhz4dzRY35hEJPKVo",
  "key11": "3ygUVSztQio6opEpVYaZh4X1yMNB831QjBzV9RyRchyhSzBqGR923ZSnLWAjUp8oGE68kdRnV8AYnpi3yxhh8Uzv",
  "key12": "3dpeoFJUHpea1LM3MGGWTSCx5z4KADWx3xrfP9DZBsv4TQ8uueQByCPSbNkcnKEyaLtaV2tn9k32WTj7JUt387w5",
  "key13": "jzxpPGrmiLRpjTG8guyX5Hz2tDwXRQd82eL9peNjpqWvxj1E2Pxny8frfNA9URzrz4nNLoc1hFAZUdeb1NxjCMF",
  "key14": "2qJwn2XoggScNZ32ZWxamuyE5y41n7fXW3zPhdMirynTNVCwy1Hwo6jq6jPz5xzSMf1HVZ4cAoHGbLxa3Wnoo2pU",
  "key15": "vTxq7GediwKsAc1gua231Ahua3AG4UkDcY4YHKXH2Qq91eb8qjmgGrg7PCThqKhXQSAbMzjFnhmgXgv19JFSN7v",
  "key16": "3ySco8EzZdxYFaxPYMgq65XR7hkvT2mn6pJTsmA4xocLZdjniQfPjrEhV3YUfnuP5kW6nim5y8UzSCQXEvEYTnuj",
  "key17": "5sfrGToSHe4P5j46zED28EbKy9qxBrNdDLVwWZGnL3g9G2LtZDW7yebqi8ubu6HqdNgFH5xALwhxftVr4JDztfeG",
  "key18": "3YQcqvYyvAsTR3kdac7UeQPaTAE9fhU5qNYeBnbwDLQEkG1Q8gfTm3VYiDYcttF8WrBKEez3sfMMt8XtA8UWmKRD",
  "key19": "3aREoZ8hdeipwMyWvVNUEnkVavezGM1SBHvgZGsMfPpUP4jzrcZVj4bSmwPLVx55qw2AQho4tj4TdjezahvTH7SF",
  "key20": "4S2AHY6KGFxudsADvZWGbRQfa3tPBZVuMTuTdyoJQevZwaxaYZgwqAEbfwPaBy2ZiqyUq6c36cRsR5Aq273ir89f",
  "key21": "4XuNx6s5LZ8P7SRTQzM4mKCa8CvF9PGbqS6Cj3NS2BfQJ4P9FV4yG8iQnzGHWuxrVra9nzvNqAFSs6o1Y4zgNPLV",
  "key22": "22Ja7XW6moJa9jCgUGqyu4C73NQ7mtCi1WaYfgkNcv3hZ4dhDLyovFS6HMcz5U6fD6JXkfLUdov8NAHnhURGtPYE",
  "key23": "2HLXuKE1tEb5PooKVQNqkr7nzTGBuHXMhJRGivmoq1JZetRb7oXXefZy5EhqgsYBHSfChzegUFbhWCoRvxvsf1ro",
  "key24": "2ZKgbc6QRrRxAF78aRQqr9chu7UsBpELY6idsJLMEukx7dPcd1hpiE2U2pwhRf1d5vvuXYRZtRRAd3jpaKFSnmbE",
  "key25": "4PpRyYDNBPyR561bzxoqsvA1cJYvX41bsGPT6sT2FYQpYUDqvkk18jhfue4XL8f3kyhYr88rpKLUx1tUAz5krNMY",
  "key26": "2hyK854KDtbudtPe4VRMPMCD8rW1sEBbcx3Lmup1xQKsgqgcFTZmc8DesQXg7Uz999MdGxwyzf5hQcrghpDwreRQ",
  "key27": "WPCAZVc6LVopzoDNBrjc2yoScpdAxpZ1m6ENNtSz4HUGpqXRrQ4pPpWtJrr4neZpcj56tKWoqGAgEPQbv3cRRfJ",
  "key28": "2pg6xs7vbB4ZrDSTJVM8HkXzu3cgmEzzE6yXoEZAADdQkgH4XNJAR6WUyYiXBiozrENtqoJv8ur85R5m9idR2dbj",
  "key29": "4MSJu1Zw4Vge3sx1jvGgbYFByCgT1M8VmjomMnqVPX7yHZSTDbmGZNBQNQYZx52nzKMsvk8sfnSLxu98NAKmE68f",
  "key30": "Zx3iVHwiRQH7Dc2Y9Cn7EJ4rnFsc46ZMTnZ82LggrkavgHpRtWfiBEGURFwfzDbeQnXqkxsjYTuoAX8RdV3Jer8",
  "key31": "5ajycKUJkWEG4MGJPar2ahteKUDdMdSs7P9JoFpDDF15UGMCsQuVdKKLwD2qPYNJnn83Zs1VcWHbp7Vc93ercW4w",
  "key32": "3Wqro7xc1N22jmLdx9J2nr8manM5HVD68R9HHUXDhnSCPfaTAjf9T7m1N4PuzDfqgfoRfAwPRGrGdHtqrJiptAo3",
  "key33": "2aA279CnuhQU4qBhbqoJXQBaCrpkT6BHqLJuWApjSQLUivc77ySXFFVtS7xphPeN8VeAKWG33xMgCykARSW8yw5E",
  "key34": "22SJfiHEBDWoyW5N9Fyvi3y1CUG6tvVCLTUGSHGXvByYSsmGTzwkmHyqKe4EdjoRL49kVhKiU9MBgwADsEehuXMy",
  "key35": "4drujgaeiu4vBSSaJzxxiQkWZXFfczE8P3Dppw18SwFSZS5ZA9qcFLHediaig1vUxhr3eraWpRRhx2BUmzV9ua7V",
  "key36": "5fiScB7KYQEQt77PDaTh5ivD3yYreCELdjWpvvPX8U8dRhN4Mv5thRaLCBwTiVvpKcPJnhMsFyJuqSkAewd9RQZG",
  "key37": "SPW2PeVuap2xrAtFhiQFezuhKDyjvGozQ1LTys8ayVhyH3iXPx3YKRU255EdMkhGPqRY7ussJrVFe9jxDeFhG7N",
  "key38": "1bJzURSo5gAE2pbYdphXdcqhcr5c2aXfLShQqdFTAC6z9DKt6egBkF5taudch1yZPQheHnqs2sKBsAPvg75vU3X"
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
