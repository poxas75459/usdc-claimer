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
    "4fuZz8YEGvAwNgUPuPrkunk37QXpPrL3PBNis149ftoUT9xgo5RZqLceEuprUppvgpihdzLXoTvhM4rLhYe6Cc9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sEadChvV2jCkC4GqZywuzLMV8kXGRqzXyv7YwRepMh5badEYv5iZjKTjRLEqs5YqJUt4dexwoikCXjKqnUxscts",
  "key1": "vLR5BqR5LioMkeBsmXkpZscJeBHAEmRoRsCM5GUQqmggQ38XKKNB7s7NjSH5ebFh8hPWK3nj19A2BmDLWPj5hmM",
  "key2": "3SWXNcS2J2JYrQquVar4NWCusHNx4wq4njPHWkSJGKhs22YhVnD1jZhKcrbtvQa2FXPKnzYciF8kUGtoXczgchxc",
  "key3": "4x4yQzsEAwped1cnL8RtTZB8EjoVi96xrevKdThe7kMdASNVddXzcAPFn66vyrt2jzACphntxE9PKBGMrSCb28zn",
  "key4": "3BDu4wGsSCehhtjKqp8hjVQNU8ndaFoMNUjnwVmN7thYmRCyUxHM2t35LDEkbpejNx8beoyoqb15VxiEQjPCTKde",
  "key5": "4ZSxWuCFiywgvtNT95LmTEata7zuYy2i9YsgyBAd7vDF9r5WUDY5imjo83UvEMS3Edhr14v6P1ieGKcLBXJUbekA",
  "key6": "2Lh3V6XNTsSHhyqf2hQFgb31kYgXLXUnSsPoqPrJZQfXY79JvysBuxvcLqmEgBJyw4C4KJAfqyVHT39QaKnUT1Sk",
  "key7": "3wm8My6baQ2tRtLs93shuTqtiJ6qCDTmxerM9RM6BUpMj9urerVfQkemKXU85t5dukTk2xQBsUEAonkChGnxgi4i",
  "key8": "4CTsGDcCeC3ZxCrmKLxXBQz51gWpAyWRyRLc8QeKGhAJoPfFJDLN5P5GVF9AiMRG7vdZEsydXMXtdKTwH2A6ESoc",
  "key9": "jk7wavF5RAAA8dPFXgYcrX2y92opMZQdtGwnPaS4rh7mmMYdUKatKoDtfFxD1SEnmZ56iKjr8To7f2m2Z2WEFSp",
  "key10": "2bisieu8KzVtsVhR7t9SoXWfdmmBDrH6HmjtFdjYFcDn4yURSSDPs98YGEf6sWYRSSJxMHctRWqQ9MDqjo9wfbiJ",
  "key11": "5JJRdZymEWAA6ovwHTR83qtfRzNTddT6Eat21PbiateCJ4W5ddtZZwq5iAwz67aWcKRr1FFMHJ34vxB4vTzHHEAN",
  "key12": "3SoLLBj9BqtkgFiBepqKJNZmS4xytGg3eyX9W88m2Eeft5iQXnuJ83a9qfgEqXMXrQPntzmP5fr5i8k1gcpvYcnK",
  "key13": "59N87gQhkBERQLUFE1AKE2VjQxrCfNPK1svuV91vMphefFP4dTSAa7n63gE3UA2zE9WBgAGvRQ6GaE37B8yKA9jZ",
  "key14": "5vLTvyj3LznB9B4Qrs8v8zehftb2U7VPrF1yLi5rXRZwQr5S8x1TBZdMPXCerMCSNs42UKzgFicxRyEu9f8jpjTK",
  "key15": "4H9YVV7a2nAQh2t6WGmbAtD8D5vKLg8t51PNsb7jhFtRXHXF8YyChTUULGz4TgqRJEzLujr42SznCuyfpYvTNCBK",
  "key16": "5NSE1pp8gqdjmxgJVcEpxogyA4RA3onpXYPPE17ZWwNiidWy32T9iniE3f5UQAMi5xdU8m8Jh7Tb5c2tuACdgKck",
  "key17": "4CwV21UvUKsf4qi7nHwvJTQzwVd2dssD5kJE9PUUYZ7MVzCiwm6FSwqH6dt1qybupvXqfaN4z1WHA4Vm2V9RR9He",
  "key18": "4Y3KGhkaPMCLbFanVTTf8CgS72TB1CJv9RzhNUR5Nap3Ue5BstYdmExgy2McdYWTovaN14ypi4YSquWqB6eLf8tG",
  "key19": "JayGg8e7HExgE2Wtnvz1bC25S74B2z7j8KyMTmQ2wRPYDyshR29zLReF3TLjSuVYYSDGqyE8rDKdHNKUTxpEapM",
  "key20": "2SuvDCDHWstm8w2QkXXab6Ch2vpVSwkQQ6o7tJKwucYSvf5g46zm1hP2nn8mjpKqjNGRrsfWNJBaL1MqiY55TsC4",
  "key21": "qtogE1tiYD5hBH8qi8bpEz9engUE9evSCmuL3o35ynjGhKoCQp5PWfUXYbAL476q9V3RXPGGxF19epqPh338jAa",
  "key22": "5PUgGaSPswcZzow1VhFDh9xjKyZRdKLG6EN45Q65hKFHdjApdqBz8ki6AfaV7SqohPo7LKMT9v3CCFkowJaHUYMi",
  "key23": "2h1Xq2cZw8XFpjM24fhTZv6XVPsABVi6QcRkZh85wfznxSnbip2b8KD6c39rn91gHsvZdqgSDjCpTTHPLstMGE8a",
  "key24": "5CMpiwbsQwDVKNkkAmKKWrGC4hu2wvGTc3QJ6fqsZoWgjp3jeVE5zA5xmPbxo11CgFPuLu4MifWTYVESq2ASWi6w",
  "key25": "5dhnm1mpD5gBaEAmLzMJcfxfuZ9BrJaadz74yLSEUaw4FaVSNmhsHDXdiJPoBpczni9akhkAYo2qrQinuvrST7pi",
  "key26": "phb8BKDkEAAkQRapQUFJVd6eFzqQSnUn8CvAQgUp4djC9aw3MoHpSizDZ6rPyidazXtLmN78XH1iv3HQgC5M3H4",
  "key27": "3WvTtXCKEPuGjYg7JxNaQDeRGLkb3NbG5ejnWh4dBYAX2uzskESNR1jbdhSJegF9Pp3yECtAb2Dwur3QcUhgV241",
  "key28": "d8K3cxiJunjXjxBBDHNNQa6q2dvSedTVrxNhP4KWqefBb7iZhxL9gFyVQ9boLUArCuSaVMX8yFN8yn7BFZZS6C9",
  "key29": "E8jtUVHT8NB1D92Vj2m2GmWoc19ZqyRthi7Jg1bE3f7E1snynVJQS86qC1FxLmrUnFSVKCqtykNiZXcZi756BUf",
  "key30": "21WxTBrUkkZ5ed7nZoTg2EHm7Cya41LRcfoV1eNQFsfEBiY1PZzdPtheg2V7Vgw513LoHAkgEGVu5Sriky8FXCpc",
  "key31": "4JpjNrEL3ZvE1nkUXdQHCVruc57C9WSzZV5Te1nCNA4wBaeuFDXhLuwytbfw6GJK54UKQstgvitERPmjguvKe9Xh",
  "key32": "3aFHEAGvb1bRVmzz7BJ5zMhcRLjViaaDKamDBSsBYLmyGQ5vVpv96wgzFzkLZ2HJx49tSvZ8YmMKtXStmGpe9Cpd",
  "key33": "27P1hxK5qFirZ41qJVyhjAytFV6ym5kNgtXzrLoKPPPy45RhimhAxggGRuuBrijKUTKMzewFsCbwvbSq5z2wwgdU"
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
