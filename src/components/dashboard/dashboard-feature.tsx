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
    "zbxMRkb8Sv64SumD1LmbJhHqZmADBmRXpJKKBKErvnmaHts28FHDrcGEP6jMyyVfiBQf5F86v2nfZhYBAB9nnKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4caV9e93jBLFXcmUqRp8g8SSE56wJi6szhwXac1vaesZqrkkysjC4WYMrxvMz1c26rki4GBz3DiKzA2d9fqhhpwM",
  "key1": "31ohPogs9NBQK284PDdcnsSBg43DVQAGpVtAyNic8Nq9LJKzihEAFCxv34gf6Myot6gyvnouJbLMgYEPFceAk8xg",
  "key2": "3fFF22RgFGU6A9XnaWSrmJK3fQnBEztEGYA7hq8hWtFXBKS5DiaLviU8sk1a9exXTN3gfyRHS5QoMogPUVM4gNgD",
  "key3": "4DQpfWynPwVS7EU37XkAzrd8L48fSwSFjLVAvon6BX3qGMiqU6tkTR7RAEW11mXLnzTjGWHoMBPU8Xf8d3T6DqHm",
  "key4": "khPott3HfYLmiYjRArRPCXHVovvb1uZMxJufMjb9EMv13UvTPtTuKYBTP3ji6Mtck9W7xgx9VMUSUp4AasP7GoQ",
  "key5": "4BGd1Yy1NPFZD5i6AfwsCCwW564dVS3iDL3qRoAo5WUtSmfkgr7tSb4uwSiQ56Rcy2NpAcRDSMXcwJRv41yjPomz",
  "key6": "3gjnqgDPbnEcRLcUh99gFc8tEMsD8VsKS5GPNjhBSaSPyxPocdaLPPkfcLWS5AHFSK4bkPf8WDKNLipnSbtgQXbd",
  "key7": "3zsRPhmEXLnqyemvQ8KaPuSNHruP5SYafHNXkSkNiZC6ppZUnuzHZbeFLWJ4oTrqxPqGtM7zg8pJr8MxF2pTxTHk",
  "key8": "2KgpmufEqrUJqk6TddXRn5Bf2rPHhinnDiPz5oBbu89w3WmxTJoaf8n7Vrk6aRm56EJpHgw576UXCAz5nPSQUs7G",
  "key9": "4b6Ysu9qVA8CjW4Jnq89Z3JzCEnvJs9P93u6juy5ptHz73oQXT6Qsr38UDidGbWq8Uuka99Uf1Fm1mrxLRp93XLF",
  "key10": "2pTCWye3AeuArdYv87VY27K5639pohpfpJPqq9ig18L8g88V9mYHCzWVY5xSzdSEcT8bT19nwo1yBrKy4sKqP618",
  "key11": "4K9n9m6N7ELFBFrQdRNsn5zTyi8W1JbzHKamm6sxA8p57rVbBPFpiEAzYYW6G3YNKTeEubLBYWjRRvcHcf4dWxXw",
  "key12": "zZ85z13S8rRKsLGfK9EgptibL5pZe6y4M1L3hRWs4UCvP8Pn7qoNp6gxSoT4T11A4YwdeQ8PkoQ8Nwy2ppVWZa6",
  "key13": "54vJM2jwc2o1AKpHaRgCReLsaMgAbGNkJT46aVVeAoLLAmZx2tCxmcC78TdeeTZdgaPciWitSzvSggkTeM1j6djx",
  "key14": "gZ75corXhcsiYBmAZbWFQzsFP6pFaqi5PLjfCbt1HFzHgQHhsBoGmML8WB2UnEijKXuhoQCx4bVuqxVjpETtz3D",
  "key15": "4iCSVssAN3wwWNgXzFpQfC4EtRmtkk8gb9CtHzgFFUHgkA3fkbodcprixmHok8zDgKrud39CSvtnD2qdn4wPhwCc",
  "key16": "5sKp5ZXV9zWF6spJCpYk33tDVr1Zg1gHHbrXTJwCduqHU3jaVZJ4cSRdfgahF9oxYNBoAS2h52ShBN3qTxNp1aJh",
  "key17": "5XYkRA4PfreYzuKwqE1waiDtkHFmPj3YQLZxsWEGgnXv8PDkeMvidZP24qZmasGpXa8FaLGmZBRiWdhBXLuok9xt",
  "key18": "31h8JN5HK5tp4gaVoMLLu19416S1G56PthHfueYWQ3SfXHNjvyksv9X8iiKk4egRFMdyAwmwx3rpqCo11JnLgVLu",
  "key19": "ZxVc3ykgwzBdEbfavTxiiDrc2kuWYVcNWj2BtxuNMeaEpaFawvu3R1a3a7WxwbwGDoenRFpmqQqBUAmrmaqu3fF",
  "key20": "2xZEh3rgSrQuH89q5ToBN3Gva94kT6DH5QAeAW3P3y1KyYAqkan9LScjEvjKT1kKJtwoLfVCFQvyrn36KekMGgho",
  "key21": "3ZZ9EcpFdp2qimX9PBhfLi8VMUF1ob2HrszdMogTUW85yJbzLQFgWpzShSZCkg7yiVciyo9gTuraRRh9LZ86ktL9",
  "key22": "438TZ39NQzJAxrMgVkgfGy4UFiVtGXPFbn5h3gDFfubB2aL461sDBvoacgz5EmVmrZ2SxMGnJHnD9Q4ijgb2XaP9",
  "key23": "5VKna6QPjBst1YMfiJNXiGxKankh3gufKbVhax79JR8PT1DLnHmdzxXTTipie9y5du8rfDu9YMqkfBGveS26bvBx",
  "key24": "2pVkHX41YfooEsvmvBygPQykERztufFgf7JhuNzNDjPfKAvLuGfD9J8jqm9r2mK4NgdQrWT7p1z9NsGD4xFkCXPd",
  "key25": "KJAEzkAwLwfa9wFHXL2RBb8RzL2vJMQmQ6TUeUFAJhT3UXmW4MmgV4WqgEu33pZv7mTcJVAXLajJWKaJ1R7su5b",
  "key26": "Wg4PcmHQ9xtAb25FvGx87fWgcqPfwRcYPdMuuUUFoWXBDXvrFeDT27XhhjUxXntfKPr89QhxNtk4QMA4SRCRTqC",
  "key27": "35yYAeBRGHMzxVufDcexNWJTjr7vS9839PkZ5XZcSmdf774XUKXTxQBRH5N916ZvpMnb2X47q1HvKgkDVoR9VXFp",
  "key28": "5HF1xbFbDGYxdUmvCKq2E7uR5Xas2pTmpNTnwCCptqBYd7PKMxRG8rT7DkYirNV79n9PtKXqXwidiSAFiTQkVoau",
  "key29": "4ZQpsGinnLKJorfrPP2FWJb1fiGUoBaA3mS7p11AFYW4sxzFcsVftpKohwtfTir99xLjine4Svjd16yhnxFmqovv",
  "key30": "2XPbRjLLAkPSWWGfzPsHRfkP6itMqqAyM2ufowVWVCZJ7SvrppR6Dx2WLrczsGW4RFr4DamcRuPQA8G1NFcLGUwW"
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
