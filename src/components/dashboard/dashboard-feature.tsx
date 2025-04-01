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
    "4gMD2xQhhMy1woE7daR4toJvRbzbDR6MWAHH95DYW5VRZfkMQkrQMYfspM26TbrMXuPueGidarZopkm236HutruF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WMRYzFtb7giFw528ySnBad5V6ZCrwN7azCP77tiN1EhpAYUFMnokh5h9iqbxZwhmTN8wdHM4W852L7HQEx1CgeZ",
  "key1": "3eVNwLMMBt9PWp2oSdgijmJ3BkXLMmyUJWQwYNyDfSqdk73NBdD34nqaEDTqtxxGmbRCkqfnLUseVGpT1o6dJcMW",
  "key2": "1yAHAtC1SuCCyNCGi28czJPoxzpFByTL5RfdKFfY2PCiHutjvTgdP2jnffGywg6BJHF15eQvg4arqHADSSVRCdx",
  "key3": "2XHZq39oVzd2oicvucNh51Ukf1U94rAgL2APnrRuCf2QR4swD3j62E3RMP6pB8BQ94i27ur9rF6tHzRyZgnYrTcg",
  "key4": "4GGx1aJu1iV7rcaf862MTS7iqmGTmNMJZB5K3eGbbb5LGAoxamqz9mFMFSAs3vWXKZyNe8XikbHj4q6yVBPex98E",
  "key5": "2u6nRovtwUpf5wWPGuR3YbYFGCJAvhEzXMcAybRnvLgJg4iETaJ9k88onKxXJnkSP35mg86sTRZVHfN22E8ETkSK",
  "key6": "36tUMdWVetCXCtVyGNDTkNKsJ63zLJHTQPapc8mPNGEWRbom4UH7j45mDK3pctJT3eveaJV8yoKDnXKTv3prCCEW",
  "key7": "2D72RiKwB6Z64Wg27eZhsKpq9HHth1NuKeggw4hWZJhda5vSYs55wctbuSazcx3gz1PQVpn5xMKUHXnc7KVonZPp",
  "key8": "331NfbQPmQcRRiNCfg7L6GJXC7ECYQKPSywVw3foxT5JRkL2B1AEaDrT3u5dEz6DeN5AZUMjFsKe8MpqzTTRc1f9",
  "key9": "2XG4DL9MNDCro6o38y9d8R8WoXnWQr7oyPS7z4W5cwRmUAooYJL3JCR2Z83GK7EZHq6BrgxukuW7fUC5tVPk5Y2s",
  "key10": "4tD8zq51mu8oXpDxBq5pnYznbnkoaU6x1K8VtDntFgeZM97DusYsYrsPsc8SkcKgtUjBu1HrjsCZaBHKvNQqU5go",
  "key11": "4iad8tBDhJ9GAq2Dt66tRhNx6c2ws5mS6mC4oP2NB4aqZRmUAvqCidrqdTqpRaQPRph8RV1nB8JocBFEiQaEVa8p",
  "key12": "qxKMbEnY3A8ZxAAncdHwF8kKNDpN3p4iEm2wUa93r4z4bp4HJVJEFXDsmnLL98SNmrnjjxTL5P9JNsQ53mnn9ZV",
  "key13": "59P33XttMc5KmwzbmeJJ7yBWrzJDS6KyiAyRPDdiwDigaQieLfnn6BVHUvRMDxYtx1iojJU59GMgHm9qTTuX1oD4",
  "key14": "369RpN6qTSbHT4AejHxGC95gDtNXNHA8ctmLDSxPzEbMQE2KCGx9U1D5KDzbyniHmVGjHHQ9sC7VmqbDpRbzFA5U",
  "key15": "2nVbaCeuRz3awYJRKNYhF9RTrM7MTpbCQqussb9TiqDRHPUNdg97FPWnNpHw5x1wBGk1zMFfTHbLLMYkhz4DaGeg",
  "key16": "5zCycQirqigRCnhHk1bY9bpcuX84ewvtbZcqBkFodRSAe3MnPoqTqAvFto3pdrhCaLVD1q36ZXPQTAQDqAQUkZEc",
  "key17": "5HuUB36Q8S3JgvMWtXn88MMmfWwEU5yEhqzLsoYxBJRgiQnPsBa9N8rR2G9y2tm6h59R1Hov4uXPsVnopA221XiU",
  "key18": "2iUBamQf9hFc5mrrUmjV9277ro8Nd2nRQnajLvfGPSxxd2CSnBdxXUZjSheBifGseUYR6Je8hJN5qMRLqpDLNM1v",
  "key19": "4BD6LJjLWhgdsHmuynSW4tsPoCXt31pVSxJUv9wfLgg1F8r4h9U58bHU9yFCSkcUGwvdQH5UT54g1qAQW2Wu1NfL",
  "key20": "4dWGwz1apnqbzvx4GDjciFrDDBD3bmZHUkdfR6JScKm95X4gVuSauWsYE9ovJ1vfyvrt2C3GXufCtbWUwadbygEf",
  "key21": "5j46sdx79N2GJiiBumHXPeqviFbhVAeXhGrZBmsdGdqew8vKmJC4tVpbj5RT3JMDvYeXj3gzabu5ayFFTAnjVDDh",
  "key22": "4hdnqcn55d1tgj3wBjvqsY2Cpx2xA8Kd9mJeYkShwK16j4L8J1naZvZyLZVwswqeeS3QobWRieEGqpsRbsjzNAkd",
  "key23": "5BRCm73vt3LnRJDERE11b8jVRjBnwuo863J7E6RreDzG6ZkMPyMHgDpgu1tURx43M2XzHCPJT5hfjwPG4iYaddB9",
  "key24": "2ogAbq8NATPxVDMturYZdqhiwxJLB3uHR4EHoQLhNUMmE3wDr62wgU2vQn2kJYKv5gxxC4KKgeQg9KuratCmGA4m",
  "key25": "4tMBUiXJn69HYHUgstrTj9DqLtidL1c31WTQ2BzLnHA3KFfxGkoxJx1T9Vb7sxzRBA7fskkMNrpnZMNP6bQkvkvH",
  "key26": "YiKzUpz5aaoNVbSYFcgBNZfXbXgqKFtb7AxM2F4egcXbZYKsNCfYbJMqajuyFpoXnBYpPi714Um4w4JNh38wYhK",
  "key27": "4bjC7CwzGwMNtoDSRY5FH4JupyMTKbNszfFchSjZNaCBWQyAmbHwBBMixKfdXNaavNAafHHMPBeVHERoJQxvtvk3",
  "key28": "rm8TUEciRXgexexEZhEJdiwtQafkwoXaZ8R1gmRmoXmq1pqt8vaNUnE9oQHokroXociQm5Y7HF1PD1sFTz4xRaj",
  "key29": "3fZEnmP3LfEYfWnHL53mWrLu7pXhjPVbQc9Kdbzkehzt3yiE4ERZC1Znt2PA4Zc1SBZQukiPSt9MQCUM46UUohiL",
  "key30": "Tg9Duu6MkdaRJnaqyVu2bbE1qvR5cXZEKHuBx9zU9Zmn12i3q6iQhiaVZ2XLybKTdzgbFnEJV91Tvxe5hUhneis",
  "key31": "2bRpxxyeep6fJ612kBwWED5QNfNNeq1w8MZ7jAjEPF1jkoBiHbjX6JHyVabwx2RgYYwqky1eqVJyAprCFWeEohE7",
  "key32": "5nuq959Kp7uod4RqXYxReRx5gT4tyBHpaL6AFpkd2ebjoukPN8gfHZY3j417q9QrnsiYBrRRYxmny8GWxFRLsCVa",
  "key33": "3ctxf1TpeuYM8pobPmFP828w7Jsv1T8kzvDbkQGDXGakxVkBBabAyhBSHWRszRNVEZcEgupmNAneG3PBpouaCTnt"
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
