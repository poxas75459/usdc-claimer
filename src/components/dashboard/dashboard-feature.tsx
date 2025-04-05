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
    "5EHjTQp3PPUc1uc7AtFzsZaFC9REya57dBEtdRKKqtvcPJuS2NtciJ5CPwbCv51BkRvsbYUbbxvWgYRvo3uGikpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nN5oWa7LHs9yyzT2Wvwe2pXiNzepeddcqVay47sHA4k5UTbXaaibqaKeLxG4MXUpEXZZPAZ2Ec1MLYPt4LB3v5y",
  "key1": "4bxQMNTrkeZHs3cUscZS8BCVpaGoPTKjLpEkN9Szr3cfKSgS4utYrjVtoqYG7wEo9RQR2hbLMbRK6QGXLDzWuHwm",
  "key2": "5GuWHSj88er3nsZ3BxhKyoSQHc42C27cobo5UfdhXN1Jpwz33QHEJwqoUQvfX36aMcxD7iVVKJv41zSpYdiPfyXT",
  "key3": "5PVWrYb5AQ5FUR4QhN84HJQqqnLAmGmw8FWMgpGGPFN1gTyMzZdCqRmffFG3A4bUVVJVPiHDugJRWr6pLTJEST59",
  "key4": "2BU4YP5ftYszxwCfNAj74yXhnNznTkv4YXf4pnKXuo9RajJuEjwdUZvWZm97Fp6f4nAMmXfRWPjswtvwasqfeM8U",
  "key5": "4SatMUdsBFxerqCFXBPGGLxbefFPUBxkncUsPG7CCM8r2NCjPHbTWyQem1ZCMepT5q398hSkrCDpDMocNrTyzot3",
  "key6": "62SYBFWpQREKLps3q6pGyJWtquT5eqjxvg2R94oJXaDVDkkLW3Kt5CnGRmtHuYkkVgapwW3bVt59LGRZUv9o43kP",
  "key7": "44ptcSKSkp4nDMRdRNvrC9YBkrV8v9k1Uu44vpKe8BCdTj8BvHpweEuDk9x5X2rTc6pZQq84TsS2HKN4poRsrD3y",
  "key8": "5wSa7xPaRUSNZ5iaGqZF12nfweB6qfMkKN3NvPVipnnspeFiZdLx336VaEX5BL3K1V5dDdL8Gko6b9qBMEGbiwBo",
  "key9": "5MZXvtWscRXs6Qb3tLGtigeeN6cTVqv8YC7mqPAHuSyTeYaijQcRFXeeyir5ZzSUuoFCujkGgjNsDqGAYjVrg5sR",
  "key10": "3tqSzeFc9DctM2J8o988rxHguj1zAtQAe3AKiVEtN45LtMGmL2xEVzydXXnDWoZNbVcVrYM2meBuov2EkD9vN5ps",
  "key11": "5mgmPXxxMe3XzZcMdsu2uVsNkQ3ZaFddJWR31qS7Ejrgbton5H9xSRGqCrGXbUkLFehgyzkvUPG6R6QNNKDws8Pe",
  "key12": "43V531maYZ4BqCbgmVkK5R5HApamvNQrN3E1x1GBvMfb9XKe3MZoezsBgQjT45hcGi3HckybGcqQDEeJMG6cQRzm",
  "key13": "2vkDdvZoiQugw914CkgtwKFTPHVBBSdwkhubiKLyLe1cHK7vR5ASLDSLaajK8Y2jEyMf8LNXzPe5s8oDH9i2QQmM",
  "key14": "3kdpox7u7dCvSeBjpamHot2o3kDJQ8ZLBaxYoKq7VehFkgJ5rKSyKkcoqtZS1bXYpnUgWd7LJWnVhTN3EoGonRi1",
  "key15": "4sPQ42B3BJnJVUa1SM6RhPTciryHMAyuxtvbJoFhDBLzYpm8cviFr5Ckprf9hDJYFvmygN5LHxY45BMMDYgEhyVY",
  "key16": "59P3nSNZ59YNNNYczxQjYF2MtK9mi9iDNNdpGJz1u2NB8HcvEHvMGkNLBjDe5HJabCFZ25K88iduVuAstiFBCRx9",
  "key17": "5My5kTqdS6P72xHYrcVnuzCQtNHsmVXp1wLGWzeZam6rAeTvFoMUGjMPp3W9jf3eFrrMouNMfciddfvSAPrZcoRZ",
  "key18": "2d9yTfBLiFupRRKXXv6x6jS4WcXdJGBbyKuHoN8WsrPAj9Sgrq4e26bBZpHBrX1HzTYpAxdMCESN3EvGwcoqvej9",
  "key19": "4ux8TAqP7XmJ959U6H8Yj8rxgHaZCZswY2iLTT8Y8dr3qpJKhvWEz7NFA3DsqCA6DxnApVzgnxisZsiVsoA15YtN",
  "key20": "dzbPciRQhEiiETxzKhR9aA3WtFKSkKFqWG5kCs6YLLrYapJiqd53i39vrmebQ4CoqccjZ6obowP6BgdC31wM2cY",
  "key21": "4PB6yH9YNjiBXDfCYP6HgRtgt8J8cNyXQogfFNgT81XkeECFhvkTzKFATkTPJsyyjEotfWdZRWKCEVPVzff3kxj7",
  "key22": "2zwZ5nsF11L7VqKB3Pp37JvBq8PrfysJE7cEXP5XYVRGReEnQiLv4wN57QqQ6wxaKivbvhJ2xi4oNGeMTLJVEzrz",
  "key23": "5BL38kDxNfQiQ9aBUfhuyTWhg8Rw1qgFLzfKc2vbQggZG3itdHEXBTp6qEPBeZJSPKfDuar4guCPfAMCJNFhAnLA",
  "key24": "3k9gEcFZ2F6KjjiTGizM9WiLNsrFkdaneTBi6Wp4ksoiFBoDb9pLx9KQ47zDEGB3K8Kcc4cSBLdwh9yFUsDgqP43",
  "key25": "3KLwD5EagAUPeRKNaGhGPiSkxvLjhM6f8Zx2togZ7AwUse5nUSwxJh549XUyZGjo5unsBRdckdBocVywhpj1NJPQ",
  "key26": "5gou1Xg2KnyeBMSaChtdTwdkN1tjf5YTTw8ws39twLvDGoA5ge1yddko1P2XSpwV5PMjefby7jj7puBLqFrkHZWX",
  "key27": "2safEmg2kmMN5Xf3fcHVqEQDRMrFdUNLVBjsupT36AYMftyVqsFNYcaFy8FqPif4ZfkD6mcSX8oeqBNoid8Eaqpb",
  "key28": "57SzoGU66V268k5iw5EnpmtXnKUdXMMb3GMvNFisqNj3kGpQSdcD2tR2rnPujcSvGCYn7CoGtRVHPPoXjDscFfxa"
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
