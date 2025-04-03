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
    "2fEsdg42zByYYpmqcJiCQwXPdtfHQ8AmL12NYaFSz3giEigkN6AQEKgi973CFtVu2BZVQgnAbXSabacu6cMLrWTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQHZiCFMorGpDM2TVKawF5B71MCiLgBdiHNwG2vMqVRxUNoPCuCASGUuYurTuDziJRpgaoJ8eiEMeoR6oHZR3H6",
  "key1": "3yWogmH2APhxzTSgNxcGwf1bw6ktpmFiwii2Lv6t11EZYm6x1DfhyKoyhRgjQb2UGmYhejmR1uYp56g7TxgeBM9z",
  "key2": "DKUDjUM7izX2CcdzSKdrqc5waCMg1Qbq2zZDsEGfnSHSM7rFuWG3kA5w6D4kDiFcqodPVnxzPhZ9UB1jNX5jCxw",
  "key3": "tJCn8y7k1JQd2Ua8yFVHVgMavCkBc93W7SXNGpAxqdNkeycEcGioma7r4pcbLZexKQJS4Xy32BbHdnZXz4gM9iJ",
  "key4": "2hfYzAaXshXawVHBx1HfioWr7KM2zQDwHhzSSA2dNhbRSnHN4MLMMw3N2oj2VM8P3fUAPTp6NN5qyEDGSUpJ4sKD",
  "key5": "NKYunNBPVN4phF9JAYRk9YgrGUgzamNr1n8qgR8kyqMY4UCnbJGDrCQud3LXduW81HMf8xNn654U3EbyfzfK1BH",
  "key6": "5vcsGLhdoJWR2fAtciAtQceS43tWDDVxhpPXCKrvoyVMfjMFjUqStZjwHmg9XLiPD2tjvqo4gqGy8ViXCsAiPMSs",
  "key7": "61BKNN1buFkTyEA2znV28jqtQYHhDbkHuPDNMRFC2vavDqTjaXJUikUHAvNotEzTwy4BLvP9z4uZZkVv44fvzTgi",
  "key8": "4v3KRxURMgd2ghErLKfKb3gVCWn86F24c5cVsKEDvNkPtDaKwgCQYAHN4kGnEBQnDkT6PbyBWCYbQJ5w5pHBzPuJ",
  "key9": "2E5EerUZDqdGCk2iwn3NeApKF4WwsqfroqQaVJh5RMT1jU81btzmTHVBvsBiUar3zkoWUGUcHAKQWbkhBjr25dR3",
  "key10": "4vNGfZXUQuYK7VjiCACUrAqdiy1Hz7kFYZybM8ZcMJoX1UVatqV1q3XrbqyHdzZ274uSk458ARaHstsWpAScduM4",
  "key11": "WyTKqhsdXPK175o98RGWPzd1jGYQxWhw54G9KdfSgP5Nsjn2LyBfCPhi3om7PUccTKNxq6HrMaSLbudh3CMCP2r",
  "key12": "3XLrbG3WseP2uzH87Zt7jy2erbXbnN1ef2GV4SaVFDV9iePGLmWL8onsvmn2nubqCiubw6SZfDBAydAdB58dfuKY",
  "key13": "5kDgqdeBaXsm5H2ZCvBaFe8ZKkGYcWeJxrCqGWZWR8GLu1Rk484hGiVRowtYbVT8U379eLgFKyFTfndFdvwy8dQF",
  "key14": "5oK3tb1e5wYBnxgi2HVvLydup16SqG8U7okuHgTdaHuf2pbfdqKmEsdjF3a7YTjKP9bremRS8ukWy8CpYcteHhzN",
  "key15": "5g2Ne5uV5m3DX3a6F2oaYjwxxQKwHpiFpvDUAenLAQ29PkCpqqXDTtzXGopVjpq3bW3n3SoxATSGh7A49xex1j52",
  "key16": "5Q9JC9nM7HoL4LYi5pn4NKpGrxhYrygKyqRScKsdhQ5bzvrY37SpRqVhubbwRuovpD7E8KfXAiavNVeGxP9Uyrs4",
  "key17": "45qHhcMR1RfgYZqtiNVwbUpSmfkyh33yqETd99e8MXU61KDx8QQeihcRuxpKgiKei92C6FPc4u5mxtqxrTEimdSf",
  "key18": "2DYoj8MT9jw3QUSCsbzAFDQuUzhGnB3Pcg2T8DBxQZjH2v2viY3Js6mos4HF2JnWSRyGgYucpVHxjTCD64t6jemC",
  "key19": "5c4FJmefqJa2diq3eMJuijMunuLZQcuHJ59ectjXVhNM4ycvFhdj4ffyuBVB6JX61S6AR4121Jh96iXZHG3zKBsU",
  "key20": "3gkfJj7NULuJFv7EpYtyLUcJ678iBskm6gLdK951RDsoL2DsUSPzBRqri8GbKNL8ZcDaxmsDGKrqT56WW6tX9m7z",
  "key21": "3YUBNzEeqPTkDzoXJ38g6AAj7ogfj3MyVNNaGVV329caKdeDjkmueaaF3L5Cr6VU6bUzhoNbwrgc2EMiLaMbMDsh",
  "key22": "5Jj7dKdrkibLZBGow4GNZMg8mVxxYbKGcEqwHmHQ2QDv7ZDe2aBUJWZ6GKbT9jnnb32BMnCKDxgUmCosvfnjLwGs",
  "key23": "5ouaoLcvRUcsFtBgxrfvC4rtoYmAuK7RukTbwEMVhxoBHPYqYGEYxDGPjkqTutD5ku1faHzVMTbNd2eymmrSibX3",
  "key24": "2EDv993TipGvrWfZN9JMxLzspiDsxMtsMKASGkujYvCfCy8yUQkFDZEzt7DDzg8Bp5fdghVvuqACkRwqJwxXSir2",
  "key25": "ctFPjAdooPXJU7wsAowCoEGdHiM8tuZiof22Giq1k9m6L7JUrjs3xgxuG8VyCMZ5QwXL5EP7LZhzoxyccWZN6KC",
  "key26": "3vc5GAvvrNmbvReMPMTSnvBqWZXwYnJt3xJzWtDy8ScAi9TXPVoCG37mW3xKDH2g1acLaGCWtsMv73He79Ssrwsj",
  "key27": "4tnsfkBuQwSMM4Z3wk9ZyZKbvSwUjZy7yQWsy8H13H9p1jdrPtGLT8U3bwN1BCdGco9Yq72ABwRXNR1Hy3nY9GEc",
  "key28": "5SeARj2Tm51ywTcfSGtq7bpTKmjN2Kfc75Nj38GNWNDZ4737vQJsNE9LMoYPfP9TAPxTMHdpQjcg7VF7XtNHU2Yb"
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
