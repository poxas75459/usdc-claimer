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
    "7vjAMT5intKMpP5EdwwwLtj6aVmV5AHyYiU5Hj58E1MMGVhSEt4vnTe5xAUVeVbq9wEScex6D56uxvW8hCx5w5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S5hXJyWShiPbP49dS9Ktuo6FpVgWX8cuT68vLApEcvBRyjBWw7P6zRuM4zjnYWqS2QRqdwidUzyxPitQhjqyd5a",
  "key1": "4WCPfAWkXe2N8qoTCPd71nmeY6fBoLMAeVLv8oAxKrtDQ5FAh6ynQthiRk6NoivWqcafaBLUZGxYe4KudrubTiq9",
  "key2": "9oxKCuiAkqPQNEjh3Z76PmJhRov9PACGTZL83sFNS8dLrMY8ZxuFnw5N9xerb8yuP8zhtnG7fCAvQ3ktooGbAsF",
  "key3": "5Mmjo1Mp2bxSndgyWLotkKqY92dmBWbmh6FgpRYJGDLJq5znmNwjPNSHeqW2MTs2hTZuAg8cgFurouaWFqJGBwqV",
  "key4": "2Bw2CSNoxP9pnm3Pq8Zych7inymq5J4vyGL1h7ar98wkeXiFHMCGqbeYgUDyacES4nYfWUL82o32avJ7mz3FD68k",
  "key5": "2DQC8mzzFF8VqLgfAjLVvbCU6KbYcZgkyiH174VEmgzwYqVP4M1yisRBp6HExSsL8VKco7HnG2jExJRMUb8FnX7f",
  "key6": "4tuwnnuFQVP4nr23jecwifbMZ5Sko5twYvazBzSvAv7uW2M3ckvwys74234XGEc3SCiaF8e57NwgrX19WzKQKFkv",
  "key7": "2r5iyWSpdgcCUPgmktUzpwtmE2SjJYEkDQ9npQiJW5zHKkHY2pameJhCNmaLuzBVe2PzKTkHSWn9xj9Mu5BQcNeg",
  "key8": "4vm9bAdHnhKCB7V3yJBobC6yM62zofahWFLJYf6ceeWHD6vGnHK8ZBE8grVgW5CFQvZXav9ozmLZNZ26jjbsaLQ8",
  "key9": "3kvS9DMNM3gjWLW1qwy766LHzZpLoWKPZrnC1L8NgL3yVveDjyt3A5dMKnLa2wxitdWt8AP2f6nUandU1eeocV8n",
  "key10": "3dNnMupX5H5E2wX6xJ2k1fdZwuLJJH5UWAgk9JHptvDzph6qshHWmUbcT6akmQuLdrYAoPyjWcup5bSfwD7iHoNF",
  "key11": "3wDyX6KvEEWCia2nn48Cqaa2rf3LjWv4LsokfDNg9TVejrzncfDW3TTo2JyvB2wZpM5qaboeLWPsndS1riVa2Jp3",
  "key12": "5hw81LaYEBSTov1ppmbdgqE648de9yaLoDYww6FavPHjTWabkwQbRptL66bbFSYpTvRKFF8EbfMfyUDzGmtNZo7W",
  "key13": "5YXTBrwUZhd3S1hRHGbGA8CgfkGPy4EeF74MzAGgvmkHJhahUbWSDMWQW32cX5QnzUrQTpSaRQYYiiWeB9XuWX4w",
  "key14": "2a4GZdunetVMT3NNYUKDz3YfhP4yZkwgg6w8x7u9KH7VGZhs6Cyn5PKLrsLvkRL6WZJhxoxdr5uz6dxkewMeYrTA",
  "key15": "5FBXNz3n9PwkCH675XT9RiqX8Jrsodp44XiSpaBMidcaKNYb61cj4jvmPQHVtDEASCr8YWuA7xBLjESSh1GpVBH5",
  "key16": "3w1hPXfJLSASe16xDNNn94XcwScFXfjVCrbndoPHNJNaaVEaqSdYrBfamnSVU62yRXeYHthXZJaJp1eq63eajvf6",
  "key17": "ZZnaa7KVVzeQEcqs7KrT6AH5TPXnS5s1hYLDkvEfT43y2v4ZJNzfmVfq9dwSPGvqhZhMxVRYK49k1ZEMPYKDJni",
  "key18": "334kwmRi8wFzCJVUdWXUtRraeDPDtJEFCsrwE9ZFM3EyTRppXyMNar9ihpjSHF7JZgmeMLWQY6mLuz5DRkqWME4w",
  "key19": "5FEBCneSUk9QiGBusE6znAFKLhsj1R1hr17Hbu9pTpeyB2wCCFCvaipXwSFADq61oeXs8zdMg4RNiFSD1eurQ7hc",
  "key20": "5gHvKotqD5QnSrTLvD4u9jkKE9L7vmeLtSGWMuHqeDoMZnbogog3K3qhR3RpayzTenfDMyeEgTisx85wcCoepdCb",
  "key21": "378F5J2HvoseoK4oi3aNx1iQyGwXa5Gi9krmTjdnALoSehHrXuSxufS76Hjqyz9giAn3rPhWeSS3Nu9juLTi1R8V",
  "key22": "62xaSoaGyRFHMJ9FNQCSWHnqq8T4oySoGojWJdEMADthAitFFDPHekWpiksAzFBWLYZviCgnxSLatsGTGeUACJRT",
  "key23": "4AbqhbCR16yzEWkJUro6pi3cAv6bfXoLvV7ScJfSuxsrYW5bdcDvaGgMUwqbwJRDBxpJ886EgemxYVZVE7z6p1A4",
  "key24": "2MUTqHpvSWPfsfjppLqodieuc5uWcmVMqzfXZoFi8mPjzkEjeEDXHDjXjiSRsr4hHZvReiUAGmyJKZziRdmQKSjq",
  "key25": "5MZ5hgJXvC1yHYS7go5guFzq2daxASwpN4LoQaMXewQ9Mdw63q4PcHxWxb7ydxTJ9RPhEgSbeqcRcLAvqLL2GFGL",
  "key26": "2zbnWwZZ9pYhZwkmGKsW8SssycRs7Sciooe4MgzVtUZC1AUw9iVNZo7dUWmrgrT86sEEx3WzHVfCJtciT2R47zj8",
  "key27": "3bRMfp1mypLAKPMHmPirwnEUCWdg9tsSWAffqpABdLSDdV6ViD5oHXAMQGPfXcXjaFy9jgQ6FsFzA24EX57VXBwm",
  "key28": "2McxFuxS6RszF3PvNT1d9TvWFea4cu3NNFZ3M8ybm84paMo6Wdfy6TmWbmsietJsAWyyJhvFs9zKeJwcLPx8KFWz",
  "key29": "2JVmnemJ6KcYE1DQ6tF5sWqMg93JNNBBZy2X3ZVikRxKkyrhmKDcngDJwk3LCi22Cz77zBskHFPNtXs7QbDUk3FA",
  "key30": "2Vk6RkMrrtjaT9VEeMztCX9XkscsrF5VritdvWThot2TtxKKTWredf6BUMFkdZyVc9GpPJhMbobzsbKeuwJmRQE4",
  "key31": "4oSP7raqv3Z7LzVjJVM5TM9GjG79qcghHS1vDdQEk3H26Ekmw6RNu13CKrFWkKZsnm3Z5BpQo5MTc3Duhf1y5gbH",
  "key32": "3x25ApuakFHDx1F8xoB8WNexy5DhGKxVzMqRnmYoreuKWZVraPn1mCPgMPDxiQcaQj13A7ERai5euFgTaHkd5riL",
  "key33": "4atCDDdBffmXgA7BHBT2WzNSvNJrvj1FtkESYYjoUtp2fHnkNWoUusnmSrYMepddUKVLp4fTsUitb8rAxzSpsYvS",
  "key34": "3Fv1uNdSEQRS93GFeLsPZwJeMAXw3hcdtHBJcTBZm5Mi5Nv67uhyioBCzjYPtKEkxguQiDnTYfRC2CTEuEAt4B5U",
  "key35": "4NfBpnNjSFpgXKcEMrkqoTA4Bnz8iUiBUrD5FQH1GtxGqqKfxepXcxF2vYQQZS6dHYkTberrHPHAb11K2hZVexhE",
  "key36": "31qXQYL5t9aFmeYZmNiiFKiJ2NnDvgpnGZHXWXpp31Y2sdJuCsiTzNBb8nhLxPnXYBtNiE2BvB6JHAqD7pUwv4fw",
  "key37": "2zroyCKSrc9QL7iBfSEwKCyuY7t418VfZvJ23vfBcXWD2p4putVt8GKa2j6qS2mgCpnJAYRy2uQSii1PipUha9xj",
  "key38": "bTnskWguiviSTfKk5Di6fcHRrEpoA8HLk9YULPqyLHBPkydyhH8CDuJCQsx2S9c9VZ1EdfUu9ghfV6LeWxBVKgq",
  "key39": "kBYarpUcnDFmzFkf98SMrqHBPVj3smxkiBtF8ymMN4WfvtzqW2eZJcSQuLtygPRGMYx3Gf1TqFpGujQQXRRRLPD",
  "key40": "45BRKbkemasK4193F8DfiFxeBiVTtY5T4fS1DtFoEfAH6FUiuBFR7ZabMaWSTs8n81X1cPQTcEuHHrR3fmzwJdmG",
  "key41": "2be1LcMRymS28z2ksa9RuPGN4fzHbinpmekWBonq7xeCnXeU9ArgvWh4S9XV6TERPZNUuFK193Nb2ntkttRa5KPH",
  "key42": "2mAA3b2teh2eMgQampWSmVQuwiYfy4SE5QwVmSrrECfemqDTeANwLeNSDAG9LuECskL7iMsMLoh3vAznSxyeuZGR",
  "key43": "3bEMNc4kV648TYaBfwXkvabh1G39vcGuF3VkeZfpGaLiHxSmFxa3X3vqAQQxqytm5zm1UHyJs23HH7M9qzSeo8kg"
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
