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
    "66HcPDDX1qx4x1doisAeoDUQSMtwno8FX7gpdEFvU4EQVaSfYRyox8oFtqa4SVDjgV7ehsHsrvW5225ZnMBGRr3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YcwqEdcivSQDotNmMxr2h9vGLWeFxEy69esycH1oamRwb664aDZ4aH2GCHwayAdsGfgsagp4AMrjVhxNWP4tdS7",
  "key1": "49HAQN4jNVGMeiNKmmJqFg3q7FUAh39DV1MQ7o3vshcq5k2kTAa44L1rzCP9DcJcvFW7cRtdPtXzquVjhydhGA8t",
  "key2": "2DRxSFrLXJ2EnaVaRDg6NdnJ7zuSLmhA1GcbyuiyFEoPsRPfpJpWw2SJhhZyzugzdAQqQVGusdbJ8eZo1s8ZSe2E",
  "key3": "3GBXrfckVCcRYmLM4dbiruaJex7FZSRN6jpSEW2JDdoy8QUiAnmPtj1HJWYtN3wXkmdgZ6oAgUah1VonSKjvuJdj",
  "key4": "5QCfxE3SGccrMyHJYMV4Pk23GdYoj5VapDFYYLNEgSsAnEd5t2CMjbGoVSHgrdYS1bLV4bBEq9zM7vQQ3yDkbZus",
  "key5": "5bam6HbjZfvEB3aYE2zG48H7M2a58h7hu4Ai69XiuHkWq4XoqLjbiKcV8e8VRtoVgoTNrMVv1yofz4UV6Yro7nJo",
  "key6": "5NLpBAbKd8zt5EHtkexnxdDjLi8TGt9uN2xnXirdY1GjDaRhKkoqZEqmKMSbPxHJCWHATEzpHq8oudrfnCoqmQVU",
  "key7": "4D19XxHiB2EGpHWREXyQVzZf31k75K1FmgTG5ojQ3ZuXr1sHA1bEF48D3ZspGTKLC38gbU2HheADub9LBNcBvkx6",
  "key8": "65NTPgwj15PYpkTrTG8zgWKjkdNoLSC2L2MbkAQhigmdv1jR6arXsSzhSivKA5w7KEqYU9Sk9QtUmE36TjRyyKjX",
  "key9": "2tXHpHbU1opUm9ZpQZmGR6CgBR4xR2ec47MGmASMBCUUwphp45mN4ouTQJvVKAu1xxbs4wc1i1PW7TGC9QNUa2YH",
  "key10": "2nTTaSWSj4Djd7YyzxGWYRj387EVpt5hMFXiZ4Ls1PnJ5dEGoToBAc7Ffn8PQL41vgd4fYatRYegvEZ2W3q4PKtv",
  "key11": "2c9wfcD5QFnpAEkxbpk8vnnV7XoxH9UZEY8QT9gQHT6w64U41U11YSEEURcGJHBzMeCyRdx5zDeLkiLGtDaCVDe7",
  "key12": "25z71hagNRctsgfc1XFXMC2ZE6ypAT4VDsHLp4oAKcN7q4gB7egjyN44e2bAs4mvKzhe4uu7YgHrhgV93MmxzK3u",
  "key13": "3G1aW5qkvv6ZoTzWb3E1u2PwJq2xZ4RTvK5H3o9zjcZJTT6tL681xqMjL1eLkeTnUKismdvSFFpchZgJxBnF5TsE",
  "key14": "2v6D8BMUSPyWepa2eFhoS7jZtVTVTMhMhQhRt2irfcZhBgvkYyQXpS73GjeNF84KMLWcqCWAFtMpTdbfS6njRhP1",
  "key15": "3WPjuq99K5sdUD5SdbZTgVyXQM6S8K1WyJMFnY9dMVLNsT89gQqtmBGvXR11CeCCXo9bNCEV2Nsay3wz2C6ctg4o",
  "key16": "42436883NAmVwfAcmE1pksjE3mM872HQhvvRaH8nBv8ftywghV1Wk4VJ6JijtPZF4T4DE2FWdxxbGhEbY9i4n25Q",
  "key17": "5uVQnNzCQyf99UUzqKtNP3de2CXyvzjFxYnZHh6W9hSUwzrb3AyV59d4F8b2fdASBLNL71rGVVhNa36pMMdUVmwn",
  "key18": "3yUhiUKf8fF4aG1Am5vFc5FgiTBFNvpLpH1ApHCsgvoVm3S5MS9smUEvNzLwMHNPcXnik2euMXJ1DqM4Uq8oRcSP",
  "key19": "2LCNdQfZ49SDNwGjz17w2pJzPmV2K4MqcfWn3h8SWd21SQBCEz1fCWekSLofXbbmUspJmXQdBgMSAX1YVQMPKsKp",
  "key20": "3UXmYzyRg37gUyHPA9U2oJFaHbxsMeVifv5gy7Z3skxDaszukSzHr8kGexBJ95nYeyVRY2UJk5HmNmVpQBFcpEVB",
  "key21": "2cUrLsLrbvisnSpXPUppmzJc57ZRt9NsKHaQNKxR6nvVx15baYEvtHsCQE6h9w1cmMHRE6vuHM7kBHC9GpMiTpnB",
  "key22": "4JvB6CJbQz9vbjQBR9chJXrQ3kBshBgyuVHC5qLP5JEE2kAeGzhx5spTNMYhvPA1Lx5cDgF5MiMm1mn67FF57cSL",
  "key23": "4TjZ5hwauLoii4Gh19py6sTuyPENiN6SpYnFXMGcsA1sbjHgdrCdDhy36Z5qezaMnE7oFuCNU7Hmx88LrHm91ore",
  "key24": "4wfjRvVdSZBYm2wgwGASQuBX4CX5kXpMwmRZDyHu5LWa9QdtrBGF4YhoStPeXnEFdou2ctSg2gLqVhkUpoxqAnTu"
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
