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
    "4L5Ro1LnshbRMQKyWqsyZ2dToL7gYouAk3JujgSvnsSzrekd86Sg2Uw8s35iioKf5iDEo32tFqGBQYhxrNjiHVN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ZEah2fNVzxhUyXFR1t3B72AuVkMeooWT23pfaKCZbkkHHkMaJowQLNf9Rg3CXbxQEHYACbAbQ64QR9XS9mRcLS",
  "key1": "C5aGywsBeqTSJQAmhSmUoAx6vdq6Pt2o4H5otT7gq3MxUVWQ8rc4x3yK1oUT4Rfw9PqSBweLmcaw5HsNnZ6YQuA",
  "key2": "5YDAtsG2PTGiovSbj65zaKTnbeJPHqBjucmZVBzMFjhvxJfyqVdqTBnixbcoyivzFjGM51UkuQshxrCzRY7v6JMS",
  "key3": "5bHfEojs2tJVrott54sR68aMpKDNeWtZkPesrBxfZXamxM7jdt6YnZasvcgkwd8WZPjVa8zceAMVJMmMWJ7wNMYL",
  "key4": "4sMvVfMJAnAjiETtusDmuGLGiRC4o9vmeNoHjAaS7SBbwbgC8wz25Q5BVhXdonEitQrMAVSFjfE8P39N73CvBExL",
  "key5": "4Uy7xnPGGA5HUq2us43vzEEF3ujF6NdWExoLTmnmJeW7CUA9P3ycfbYd6ivFVWkzhuN7Cw2C2YyTKuQsoBfuFvW",
  "key6": "2jgWBaVguMfkYXdk3QRPAvv8dDgJZzUGExhcasEQKbFR2WNemBmbhYgK6eoKMeEeTxhRuTsjJytdjpmuETjWSBTg",
  "key7": "561oQsVdoaqeiXVnxkRCu7AjFfvazqo4NXdY6WfEXKcUt6mwQBYq4DRpnRCuA8tHCgKcHsCnwiEjbkEcxZCpeTHY",
  "key8": "3c2VfTcJittrvFVi2nSRTEQPTG7yVYcLdkGv7y2uA6e7SnhtZNjhJf5szY4f3LmW3k1dM1isEzeg7NrnrotipBTn",
  "key9": "q3Zz4YCDaDFE8qTHYvEZdNWnhybU6taeZdboU5A6ndpZf4hJZznywQzNLAjPvJsDrawg4QDL3xsTzUTH6pZg1wF",
  "key10": "5kFZRAfQ6fP7hHuAfnDXy118ovxKh7ovhx1U9zD6XHhWsQDmJQZLbnJ9myGVnP7depZHPfEjxx6sFRRfRaBRuTJF",
  "key11": "ZMdVkgLJPpHJfUpWBkywDjm9uZzcd2WZKTfCko5bLQNg4LUroM1fNzgEYHhhtuLx48LdGFRBk4HdE3mp9Ny5hbx",
  "key12": "3t1WrYXdba9dc1XsgspBqkdmiti9zgdPuuMCEpbf6ewLsHMYCAUtm5d2QST8tdhV8EaRWUZR9s9GUuJnF8Nz4LCB",
  "key13": "2BL2Zerta69TvpLLoQ9vbTmtmpXFutd5EDPvGcxLcaF3HYYsPbutnpDaKUhaF9yw6U1Q4WnZyZedr5m43PZkjGaE",
  "key14": "ZpJ6yic2HZbJKTNZJ9mheVpcQxzFRt2ikusE1EcRNVj28WpjhjaYMSm68JTfiFWo55JbVHBdbz6Fwi7PxoFqJZ6",
  "key15": "2EZv7ozLfC79EFpJuULp5dGXbhBry7JXyykf9oRVgFiiam9nLLtUgYSeQQ6xgz4bEW3R6gdR9UQAHRGkAvxLkLMt",
  "key16": "4qCrwWXawfnbs8or5uvP7uFiN5Dy2LtxZe3yGJv9kFVS5mruDen2mk3fbQcmqT75q6YPzmgwZFerFz8TEZ1HrDKd",
  "key17": "4QWtVzH2WQeuy5b2k9S4jW2zCmuZcUKtg45Gfxiu67Tndfunb4MjPLM4nNk3fWHJKPu5VcVe9ZLJjwXzpZPWTqBP",
  "key18": "5QH9LctUZiyNe6q7MKCj3d8eKpRcVLVkjQrfwZ2SMhZcoebMwyKacLpLVrsP2cKEAZjQvB1atTnWFc9tcFDsrFFr",
  "key19": "YqjzSzfWhhjTNQ7PzG9sDZ54U4QYT8Pem3Cb6zoe8cEpKJb9Qwn8N3AgrbHMseTmxGroYnHPpGnBDTagr8UtnEU",
  "key20": "2WMD7MWn5WwhpdnSywyBHquZkaiwE8ZRJSVZw2GGerUuqPvkr73bvbfRpe8RYZGWEtfcNF8N15gWbtp7ZZvyY2LE",
  "key21": "LRpprRhmCQuReoi5DnewZGeAxEYWofpsCYocvyi4xqQbw4dsWtbQgJzJK9Uw8DrGzDhsDBHnNFFFaZa8Bz63WwK",
  "key22": "2Hf9SQATQgyqooNEA7iQx85RQJGPtwE6FyV73ZvEaibR3umL9PipHRMQURuayq6aWskxiKdQ5RgBp6nUKSiM3X2",
  "key23": "TDzZimkyrjUUEjne6W7zZXDkGrBneCkZYHX6oPnXZmUT1DNcjdQpQfeU7dNbRkyRerRsRsAjZZSEnKDN7vkHzNd",
  "key24": "4WEFxvhtqZv6jY8k4wykHieXadVVwk9ZMRRYwn9c2y7SYVesH1FGsMGMUxsse3k3RMkFmpV7DPWDsVWriMu6RaAe",
  "key25": "61JKkzuDTQnR57LrsQybHkjQM8qrBjPtZoFSotxb1U7kXCWePBUs2h68BL5sxYbJarZku8rGYCea482xiMxP3fKj",
  "key26": "mB428Cvrhqd9YsT7dNttVetFtk9ZRbgPywR5gsntupYgSTynUnsvxaej3oz28J3HrXB45UnYiRjsxM8F7a8YaP4",
  "key27": "5S7dVNfJU3VL9RP6WomEv87mhAZRMJavbh2WwUZvp3PwaCpFSCA1DxFVNJDLzVrMUtz7RAjWDZaTNVpTQG8xS3Dg",
  "key28": "X9cNxD4ZgUWcANoZ1LSU2Kwa2y3Vgr4m8A7tZtva8sp2hEMPLB85q6GXbZapVqTKGnRqBvKtAjmBR1T4Eu9gzne",
  "key29": "29nehmSJDThm6dR7EPCz1Ln3CXk8FrcPJ7yhCKxgy5yUSdtXaREnqqTrvacPG7PmbAVZZpTEexoFB2nvK6Q91BBg",
  "key30": "d7Cd6yt2MEsTZTmpPquodfPfW27DK5czFnrmJDCcNBbbnu3VBYcNCJxBbUvJjynndbhbB5Fqspoebz7S1dNQ1Xm",
  "key31": "4hmsp31VzV5LPSzm8ybN5xFqirv4WPN93EwX2XTa8GWzMp6h29EHGarrkrh4VNWmPufp3MmnbLKtbhn18EgqSFWW",
  "key32": "2rnZ6FrvfwBxNyYxJj3LMg1v8S293P1YnQgC8jhZQXdvf9sKFb31paVHM9Je48WejM7ooS79yv1v7eXA6wawURE",
  "key33": "3aPEn2smwuvWVHzSbXpD6KNLaAC3Gsn6SZQVkkZthshmKBHUbThKXu1n55qz3SS8gPcyySPPbjeT25WwQLbyeVHm",
  "key34": "3j7CSEztHihti5Rqqw51tb6zYxz1tVF6NRnwXH1Hid1M6S9wRtt2gDipg27DuMgTSCNrx8WBg3GJJR4gEEinvXtd",
  "key35": "mgTvwRGHbJZEHpyHNoK4ow2Jvu6zEEDkBiAjDoK2M6gv1vJjGad25pg7dzDg3Zbh1cv58b17uoYQ51kzcP8drC7",
  "key36": "5JFu2d4rJFX2mg2y8p8rPNepZwhSrKRjfYJPkhBcvBwCq7db2a6gzcXDnniz7MVp7f4WcsrGsjQiT24uCCbmxEMu",
  "key37": "41k7H66QQSCNq6Kz76yAsV4a9yJKuTgRZ3wLdgJQoW3dSsoAseZwpfCwDAVP6bXjxF2p6G4Aj7PaBPK3YFB2dszN",
  "key38": "3ucy2Wyw3f5tKrDQUhqWZea2WyJNsthh3oBFS7dx9SniTD6rVJ6q46K21uDzRt4ZADr1rVZfi3aB7GRjQktKJyhR",
  "key39": "2NUWgjyUg8HGujwusyqGg2fGsoGNx4DouWHSViJPuiWAgSdXAXzg9t1d6M7hzF3uNUmvVYWEptkbii5TA7aYo1Wh",
  "key40": "5wNosKX66qnS5RnCmHxCB4YA1AxbCutiZ3eUoTythrA5sD2ZufuWwNTdoaFb86GNK6iURumqd2L4JKqw8EETNEAb",
  "key41": "5GPBU2GfNgBXeNgC1e1kZ3Jb9vMLsDhdsCTP5NRuHfje24a1hMcUnSTmY1BAgbU93mC6wJqiejTLxXVVY13F9dXN",
  "key42": "4NALFbXqaCtY9yngUFtWcqjVgRcaDRiLp18dgs1hauLKUHGCM2HTJjfoJbivVnSTaj9MAoQ23xNjxECpzkCsJHEp",
  "key43": "5yedghrzzm1J5PnVr24fXxyQcmk2EAsYMttpjrZAjhGrDxvjSFEnEeRg8KXWaCeYJeBnfBppvZnPbo8hS866LmXq",
  "key44": "hguhQu6XccNMSorzBHaEdxCdV9GzqmSgdgpsiQG9a8QtaYW14bepT6PGj94bcqxQF9hUhMSthLiFrozr3MTXZtz",
  "key45": "48wvRmk5vMpLrXGRvvwh5mr7Ee6XQgWf8mvg9CV3bh57obM6sUcrmHbsTGFWkvzbCiLz3s3ayHXTncKBCHwFwzii",
  "key46": "4UenTZkMVS1BvLLdwfXW8MPWpNCKHk1s3VqdVcynR1Srvppn4HyUmX9h4RdSLD97XuDjQD4pC3mj4955sQY7D5TZ",
  "key47": "cRdEKSdbQgd6PdVy9MjM4vrhL7fbqGzD3KDTKTgFRji7KgniY4u6nnuo2FGypJuyAkEYULzRfAAhi77PxjFwxAR"
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
