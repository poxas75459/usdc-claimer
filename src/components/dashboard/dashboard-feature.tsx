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
    "3WjQu5bS19Kxt1Ph3vjhM4Xbizf8hN6gTLzV3ZdCQYdCMQms7CabW3D5hQyAZf3ZaMppwKs4DtN9GQRJbGVUbgmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z28Zi54upEcFGNBYjV1a9TLYDeBdXDJGQZmRSGf4n4hTMHbjeNM1h8ym9es2oeVxuoYTgjduDVLi6oqEjEtfHar",
  "key1": "57GaEyagoKWdLvBZ63kTL8EUU9AUwnnMr6Ag3CpgD8QbRzRJBhcHVvXjE8GHNtphgreJZLpzpLRzY7BivTRKgG9r",
  "key2": "4aasyT6VcTSsdMiGgLQAWBibtwW3Lb176HmC4bbPqc53qePSDTCDhB3hkgD3U4V1bXrgNzniQ9GYwdZFLgd6un72",
  "key3": "2WiCpAa7ybPE43Wpkgs6kM1tZudsmoh43ZPc8E1hmaXTaeUt8pPtnAM3jZukkJGBDamKYs8arAYPPVHqWwBN8XK2",
  "key4": "3fvYQpHVwpJ5yZhmWbF7eb993LohnE7PhBzmWPM2GVs2vk4SThFVNXTmgKHRXLr4sX52RJ6bnog1Ymo9J8UVmtCm",
  "key5": "2oDEsPubVi4rxXRA4vWDUhEub9j5NRykqJ1BX7QbeFJrVSqVJwmpW9us8LKNwRSfNyaLa5WiuYXjCG9m6qBDkz7C",
  "key6": "3VX2bjansdL4xf9zkLA3QmjLEwUe7u2ChJ6AUcHg8QVE7XD1SXxz8pAMrC8ck8tFV7opMAMRcqrwVwv5v6Zpo5kC",
  "key7": "4hv374KzaeyEWL8GrptMpPywyqWXT7PYWnsrfJhoP5qHwYSfiEB8eMJrPUrvY8Wk1ZZzfvrB9fEk7WmZpR1ySs4K",
  "key8": "86WytQ8jBtf4tku4tRgW3vhkmdNwbKNU1fwQyie2tVBWvwpRAjnFEHC35NfgcecK1ho21cnw4zFY8WCevsN3JpP",
  "key9": "2aMHbDSiy2UUagGpXJMjKGYLonAduuLmngutyrGroX3L4B714NxJoF7Ki7AGNE5SwMvX8oitwjGQY63o1NwvNqMN",
  "key10": "4hTnGzPG6gBMFApQNt22zCWeFQThQJTFzcwDjF75ankMJTmZqC4iTEgZWi8SpxLGpDAym9LL6gUZgDYPJvd5ZYzB",
  "key11": "2xo97hwFfViwjJvdHDKLEKeQ34H8WdDGjz1zojbzbyySeRfTEC3Wc1fZ9YZkPU9bAuRwY2TvTES613hqZrikXEX3",
  "key12": "2miPccGzkCEBNcQASzgGQPCopDyMDXSbjJ2n1QpV632HSEzC4YjkyaHf3AjEmRXZUhAmrrVfYoNdau2AeE2nsaqH",
  "key13": "2G7DteHLtohBLgC1dFTg4UYrSRyH5eyVpwWoiXk5qenHt1KUyp2c5LTSqNPPHSvAHYZeqsHcVrziZbGJAEYw7hv4",
  "key14": "jNhTLswdgJ9pHoaRFZpuEaYUu6KVzLSkpge1Qt52ZQ4x3u88h9pgxHK6AkhGbnSbjzioSNwQe8e78WFfMnR5fqq",
  "key15": "2JAzjD84p22eTSji29SoC8TzmLJCjkoYcWkuM3gJ8nZyHVLHX8jkYVoV2UKmcWTXW8fvqPTbnqbq95Dt5hteUpf9",
  "key16": "54RZ1EdWkMbjmMCkia4XNxy6eU1khia5ZioeSdRFuq9qp1uqUiM3Y2M3Eoqti97JSTnCF7HTPwSJxCHNVSXQwC8d",
  "key17": "a29Fu5WseLw9hgsxfQaZYCjoSRpsPQXhgayLXapQwGpuDFGbXwWPHzL3Ly1cyueY1fXTcq6KXQufyQpe6PbHpGJ",
  "key18": "5Piiq4SGGhVhEQ5isdZvdpiuUis5xhHPrm99xFkeX9dR49USRmoGxfiBht6HNL1PZmesGNid537wLhrTmR5gceNm",
  "key19": "Bm4i8PiM5kzJWPkgpAYqd1pskDss4tXqbneMXqg1oCeMSAGQaoT5AnCqYwJL1WmzwaS55uBnSu8o1d7t9rG98Fq",
  "key20": "3EThMWQHMcsNRYoNZhh5e4PrtR5ogNsd8PBWcoYEtgotLGxZZdmLfpRKBGnxi3i1ypVX3V9WcMERDsceWqrkoNk4",
  "key21": "5oR6jvpp7gT4313HbuGgik9ze2cUYM8fktCyVS3viSVJoipC8c3iE56ZAgAPcwZPxM64NqYRRHZ73oFeDcrgtCqP",
  "key22": "4LdT7DKVL175NG4PVEiRutPZfQj1quR9b7RzfE2WRgZvc6hfrry7XFA4AScis9QuVapdDL2Wp27DdB3an5MpzKWp",
  "key23": "3x27YV8iwRDHiUE95Ly1zYWRQUuXM3tcWsyoNra29bEHKkpPJbw6RTY5uHXSLhapU7E3HoTtwbTjY8kFz43hcnj8",
  "key24": "UpVMmMX4V7vGY7ATUmdL6k5yc2HgLwAfBL2FnQgM8H3jFNYGWU7XoXLWH4bKwccNbKuzZvyytyMX9pNgpUb2eyu",
  "key25": "2wVTDUSr8TG1r59W1bQ88wGHqJacq1MnXQuWL31AYEQ7MrqRMaVwQigFRmB3ynneDSKoTtJShhbKgLAHbbLStdyd",
  "key26": "4oB46vzsrujoVLa3nUgaWwpdEkwwLNQi8CpGSusgJ9tmvEA8tKLsBk1STPWJgivRw955xfmpfr2aAUqumU5Ux3N4",
  "key27": "gmjCudeGehYnGTsMX3WBCn43bVM2pRhk3matEZBiEWga6Cj87bRjreaw4A3NYoBMREEsQDZKteCuYW3XvXJX6Qo",
  "key28": "54gs6ussnu787ghVSnNsSpnvCuuLXbioyu81GwiCPqbEPGJek9JiypS5JpGDAmzetxR7xvmU9Ee6v9bp1mg3q17p",
  "key29": "ofKkZ7aRg7QpnCnbejwQXzzMb4Qh5y91nQJ4LDnM21i5dDCqpXVqNdHT7xtLL61zVaUEU1SUXUHtoTq8oJF1ygs",
  "key30": "ATxtxE4o6r7qGFazQ7SybftyxHp93No2SY4kcKBHrN2mcc8WddqmLsLCB4u1bwsDERqtJrYBSySVHguJJG2qWGz",
  "key31": "5zJAAX9ihLLfskkeBJTTyD5wx4ky76nLydrDzWWhs3cuWxtzMgAWqczf32SG98FQDMDopDRtMTmaXpR23rRm7EE7"
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
