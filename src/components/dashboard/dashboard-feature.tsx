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
    "4Na9HX3Fdy8g3JF36jxpJWWoZfhvhQnzYXbrMiGA6sZw65Q1MRcN7hKhtB5CtDQQVx5JwtVhsKMTZyiFFRJUy21q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SE8Mq85AYGJXAoLrZKtsuWuspf7dk982Zcn11m8kDwwtDiG8Gcrpv5huzbxcAjZsjy7vZSC6npCMuQSmQyBVSn2",
  "key1": "5Jrf9z8Gizdr9KtEtZyYsZYPSk6TKN9Zf1HdS9GxpqDe56oYSmcpJJ6y5Yw81f2qUUzG8r1VUBwVUxBz1QcKUhN7",
  "key2": "4bA5edD6ohFws5ciDP8rg8j4n3izeYKG8X5x6Jf9sRVio3uAb27j3pPsLJFY9ngurPMVD8hj9gxDppLSuBMRVPLa",
  "key3": "4HvvgN9MwjK8YzyZ7JfpzU8TnhafyP5ns5sxeohqwpDbEgwoyE28icehSD64NhRYwRetorYSH3cquGWKsiCrmLdF",
  "key4": "2Wx9hByBDMU6Yz7WwQYaknAupcyfBok9ZjtVSR7WJadwqzQg9gydLuvnmNhQbNNq25Ef1pMubMLGuTTaSvhgw421",
  "key5": "4nefB2LhsH6b1o33suwRnCACXsVPgrazMwqf5thMVRizvvCmRRrLnEavHN9H4CZrMSA2dUS1BbysPG2k4RrtG9Ho",
  "key6": "sNjhCqor5ouDSy1ZhBhQtxuCqPXXkgAsViDrckFP31FHxZ9f8GrHdttmMbm675u6zAHojRZhXPo9TrVRK3dYtVj",
  "key7": "5z4UXJJ3gZimK9ErcWtmg1d3Z9ckdF5KM94Lgp2C2cfoavcsLwMbigM4Zuuwbt2isRH9qHrXRDUkHPPPtVBeqZF2",
  "key8": "478tNi8JpBASeRrXZaWMviUFZQEqbSA6RGwtT3UQvvxJ2aMATeLmwjdxiQw3TmtAhhsXiFFBktR5bruN2G3jqHYD",
  "key9": "3rBAjC2JvezXcm7QpbPCvkw3fg4Hb29Yz2GjFxP366ucgbARamGYfijEJ4bVdYxDsyBto3ADNXMXNyhHMQunMLp6",
  "key10": "4L7niuWPVWktLtUVY4pb66vTCqQZtZwJfmBAnMCxHBKC3LtSZzYSDnLBxoL7kctaReXBTnX6XGaoTCVHYXKyEoYH",
  "key11": "43QSFFn9HwV8fgHvjF4pJ4Fyd9CQp8yftv4M1do84DZKaZnt6R6xrEpkkcEGPdC4sPV1GAFevFZciUn2x8gZ3buS",
  "key12": "fF975yoKLK9twKBEE34wJFfaMK6D4XmXPuhxi6hbF3y1RDAH1oJf2zSfq5PF73bAr7ZFtS96Kzd4yVpqAViiiyG",
  "key13": "4pExJwqU5hkjxTqYLdCVxgqngGFVDG3y9gerwrXLqd9qTaM96egt9Fd1B4MzhNTFdk8ibgoQy8bbJozWqJrjAayS",
  "key14": "5pRKKxSgm913yE15gvH8w9Ema53vMLNW1pbj8ctNTmA2SwQj6pNFaBqMNrkEGvu76VpkFHwjNCrejBR8DeaJxUpH",
  "key15": "2U8PXek37aEyhhH2RdzHQ3x7jfiUhnu7xp5zvya6VZffNTmkfogdFy82v9f5HXsVdR86EZKjzAp31WwJRMo2yTYW",
  "key16": "4PyEdXpo7iJo6U4uRY48wpWSuyWBKysrCVqkZNGtouRKPKcoxWpb8byEsvGbpzUTHY2sUqvZokUuapWXsAvFSWYv",
  "key17": "JAhLPDWuUDFEqLpzKVXWCYqSWycaRbV59WeGo4szcT4MEswUyzMoTCqv1qSLntGUN4f6uQGdoZCSxVUgu7BWYGr",
  "key18": "3JdbkYVuMEmeLbb2vYo51V4w39aEyCBgCYt98M6x15ugaE7t4NSPZGzYdFiCV2pFznaXbTVhc8oGf1E8xCYkjjGp",
  "key19": "5w6ABM7L67E5wASBJhZ7fiNxdMxKv8HNvMHB5KcUa6DSQEQ6fpDbNedyxnWojJgx6jWB3msHB3DAFmcEBFh4WfPi",
  "key20": "21HS4PiqZp9Tog3X2UqWtZcWxS6bcGLt21X11BZJ9eXbdF8BAPF5cwfwTtqtLcMkMwS1jUgypBGdoCVpfxW1qU33",
  "key21": "63716hf2thx35kvJTU7soeQGRpP7WwwdKs2KT87YPUKmy8jPkzwjrstxgtW5rXVv8z7V55vJe435afCT64Zehn46",
  "key22": "8gngz5S31zWQJ12vuW8d59YAMgAfB19qJFxvMQTuDD8bL3AqQ1m88j4UMFixW4uvTQXiMbzaQ8BxXzZsEkCLs7Z",
  "key23": "2MrhHg9QqwnucJyPtpkntAfAyGGWeLHeYMM1GqhR7wsDJf2wcrZy56oREKj5yjBETxcNRqNYsCj634s5ZvCcRArT",
  "key24": "2UGZN43tYuyUKzDXtSDakiA3XHfHsoanYuFdwnytNJ9W2pH5jmQ6pdovbkAe2SX8mfCynFQpEk1RDQrGXfAPrfLy",
  "key25": "Ng2hyKkTQM6EZiGCKRcmjWiKLGg7MgTfCdD3iuwLedQ25J9Gg7ryhZurLbJZHyPWgpXNZqwbCtZidADFsMMfxQH",
  "key26": "3HAPn77N3XzvcadVAKWfMRSHshtNPubYti75vMpyiSPGpBKtJ7hZ4eBcnUQ32PDpkSvKQSqxcwDTkkkfeBWGGKAt",
  "key27": "2vVjSDWw2SqSbasNiKzH2rHXYvtLFECrPy5erKeyg4gmMthW1C4J1n6aZEZqdCeVoN66QG33pCauJ24jU6c69xkY",
  "key28": "2rZk5yAh2WDf3mUxAwrhci8TpVRXTsiWhp2maRbP2BcxMW5v21FDc5YVkUFyJhhvThJPXgg3AEJ18ZfqkZ2QydMB",
  "key29": "PPGwgPfvXa3BvLkJ9TjhEsB47xdfRw2KTY3wxb7TLLBkDrB5PvPeMxj9T6S1rVvjmqAfVWhVh53eHnEWnnX2Hwg",
  "key30": "3ec6RfJJeGqWWcqBTYbaisEVybhLRpSm5TTrWntBbB186q7XE2FHx2CtuVJtzHYr1PbzBHk6MjMEpaQZQAvvEvGM",
  "key31": "4P5J2o1oZ1j8v5z2VEck1dEiQV11kp3WGrxV8Q92kePUQGPkADjMoTZu5uB7TrnfcxB4pZwMkXHVHD7kiBLxYney",
  "key32": "4C2o9XqHJD593tpvYQxjEdTTJd5QHRTiZF43mpysPDASV2cPmFvVgcFRs6sjUEeRERpcnsDGTLKua3STNRdVYZfM",
  "key33": "34W7sEt6vYuS2bUoQwTkp8c1dWs7UwF8bQpC5XfRaGjWDLgmP7EEBACMw6LHrvRpcJYgZRFWrCae8dZrRqVEagRz",
  "key34": "2ixsfmwxfQacAUfrKT23PiNvmrPnzAeXXVEhnH9q1xCEDj2cjt8k8XrbRRLFqKeLpxRceQaNaxqCyHvAizwXRtB9",
  "key35": "d94S3ZnPyzRRcnfhabNgADqDZnzrB1jbtFMgerGfz7KgqmuuYQbxf8WPqFoBnA1YSzrE76aMDqMMM6ejcJQoUB6",
  "key36": "2CP1CjNGVFoKepq7tjNVWUy7QKBoGqUvqd7EpzrexCToxZhpM1jHqFsN71y1gcFehFP2KTaGUNbx3YAtVAzUMiY4",
  "key37": "4NeCmuziHKX4Vxiv7JABcSC5TmQcdZWEVd9vYyJwfg5dj3NwKsB5gVdQKGwkjYNrZwpQsYSa9rkZJ5poj9LDNASE",
  "key38": "EEfdMskSiwntSoxUc9KtqPGpmtDgoQnCwzFarYfMTSPabrL7u89QaXpw2yFFZ42Gs879n71VqyA685oxRDhmtGw",
  "key39": "3npzotBuyBkkn8zkNXHWETsWHTuTz3QkyyKKy5XiefmSxUmL1542kWX9gr486byRLk7SetQhHUUnGASzm7WDy9Kt",
  "key40": "2y5zmYduNNHdU6TgL4F9Qt3LVnVpwpvXpzszXPgsL5U3D17ZqcS6MYc2YcxSFUwaURNQNoJDU73wSPGrv2wmiNeP",
  "key41": "3cuab5UHwSwHQLZLSmTHkNKwZvQWNp4PbumKhR4ehHePwY8vowgicsfdoM63PLyRL3mqMYAELsYjAew1cTey8jSW",
  "key42": "4UGqyNMwaXvez7RnxdBmTigBekLs8D6G7YxbXwSnDvvXPtzDDWcCt4ZkuDCkhsEMVTRkZquEAV7GRnkryF7LfL8Q",
  "key43": "3vW8io1C2S4FKM9XmZ3Hk5riqZc7YwpuPWLi6wPbFdsTb9GYkYAo3Q9MRth2ok72kPAUAdP6yFyPXEiJBrWegibk",
  "key44": "2GuzBqHm73nTNd8vA9233zzkQtjJsFUnu9C998SuzbHmeFrsUGiXJqGXqqDUhvXp5H2ij8gUeUcTYxn7hknJRqE7",
  "key45": "2h6Bd5N5j6qrg41M5BBQ1pfpY3pbt9iLu9JgJQEDkMoUJFkf6RLLENG1r7tqBoVSqNpf9AHrXWo1R4h8tZXa1Unn",
  "key46": "4BisNiGUYjkhy2D1CyiqaTnxjMoRrmyG8xNp96EJBDURG9r2HM3UNhPymF1PZG1XZFmexK7q1VwpHPUNaYrqNwc2",
  "key47": "248trAazPsZD8Aqyxfp62NbMqnm7U7FWKQhzvx5z3AhgazcfQsx5miU9kqqBj9s7LG5crLdV1kTpCnXr9d7gtSJo",
  "key48": "2CYcxSV4NdYDEE2MEZUuEizJuUkYcFFKXCCJRcdymNyz2aHH2rCQoYRS6uXtTxaQErYKVTvredPTPYbLeFrzeJMW"
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
