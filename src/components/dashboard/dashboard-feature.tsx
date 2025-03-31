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
    "vEk5c9AJ37tnn7QKqagkwQGBMg1AcqkhLi1KBWUFeyHVvDSALXbre3epAsyggMWki1SkrCq5kyVdcfYbnsZtsSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZY63Dgi61g8bx2rHwVhvaoFkFsFoBxLMJxCnjBkyTPMXoVbvLWSrdARM9mu8CuzbL3JZjiT1vRPufTATX8dDhB2",
  "key1": "5bFKKayHkGHkBLxAS9fFua9Rm7iDauPNTsqb17qFmSuKatj7tBVZ3zd4szXr7V51Q6whqK5ku71S6WmL8VFDyi3V",
  "key2": "3YACsiGu7icmLTG1PQ6t4aKxe8bmqKVevxQjrnXtJCqXWXCp17SnWQNZFkn3g2bJf9PsFDdFR1eQoVSy4wKEu1wR",
  "key3": "4XPNZHdwJx1sG279y1d5h73iqkVQsJMdgCdeeafGabx44BoKYgwF6nejuzZFooq5AyEiXAVcK6eryyjkrf2RTGjL",
  "key4": "5qrZY31bP9TvwxSdmFnHRxqpqWLeGJB4a1CxPC6ejcLRLh4gAwVtGssBhhyemeFBm1a2tfp3BCbAy58JQ2g2CfLM",
  "key5": "2MjnUNaWhrV7kKZmaBJMSgmMX8U9LX563hX2oTb87siJe2bfGUStSP8AZ2EvbFgKErvA59dxYUTMx3kS4ADhUmt8",
  "key6": "5R18uuGtAYuCfdBNsp5oWcvtF2Nx4FPaYn2Rdihx61QiRFHVR4x9RyspbqVkMYkt3KeUNnywAYjUBCQor4swb8jD",
  "key7": "QcYhXgYUzbHMQZhMcpRbQFuk351q3YWXHM6sfNe4Jy7U8mKu5HMyt2cLASzQA2Mjjsj7MeH8VGh7sT2pMeSGi7k",
  "key8": "32j9T3y9w26FSMEausTJZUXAmUeJi5q81aBKE8hZGk9iZCg3T81sBnCn91GEXQurNzmsFThNs3VgLRs119S5mS6t",
  "key9": "2yu9CZPs7CrGxrPk6JZG5S69weYpP74o17L8mVDKpHGFoE8H8DzrTGMbDTx3JVmFSvyJVrJ9c1xd4LbekUdCqXpM",
  "key10": "2cHU6v7MgHuCvupKUVcjPcV9dFA1j5qUnGyvnpvCk79W33orXiAjJ7Zc58YXbc21aN377mjrLhbtLaMRxBkA4WgQ",
  "key11": "4pwmmF2NWV1RhFg51Zr7R7mRzRq9yDdgBjAd9oMdrbBUs2DyqBX81vdnP81D5Xm96Lmq9rMFcKMCstPMDLQUWui1",
  "key12": "2kGrKin7DkL1bW8DUB9bVDhYV3gBtyZeoHpomQ5d1nwSK3DSGopySTgjKFv5XBN57rBfLk4D6xPTiLeDcYaStfSj",
  "key13": "4yS73ReZ7uc2K8D2chiMtumeuS4nFKJHqyxLaYyYryyTc2kDSMjfekJTcMtQgPbCFWJ2EbwSGFksSLDTMFhBsYJh",
  "key14": "3ydDZAjYa62c5EBbFiBoytEhWY7TR6kyxUUSa56EGYuFrYinLz2seibwnZ1c9UKj77zinR2WFjqcMT7u9nFMtWeW",
  "key15": "29DPYdyHZR1AHbiRt7ZdLefo97wdJCDRCsLGN5wPcb7rNFhwqnvYdTF2k9VGmUtT7w8Lh3BREXXP2FRsE5YpgTcp",
  "key16": "5kJ5rQyQPRrRHr5MNMUSDD52cvXkpugFGPBCHQ78oEihFxooWnSZGrW9oN63MtjYa16r8SdsqZ1viymBr1Kr1rKY",
  "key17": "4N8SVEvETobgHRLUg4bG2NsDK5Gvr7aZXxkJDH1djHy4jvMRWeQtfrEqy3w3KFGSzoTjGtaQTt9u6PCKPuUmfk5k",
  "key18": "4LYT7nJxSjwQ4uMVjUJpBC92DkJvQrf15b8pwWw8etoPVoNvXUvqzNqgu3Ur6VpyTiFW1B2FeGERc8cHygFFqBT3",
  "key19": "3yHYB5w56mPqSBFoazbzsmngoAgMGgJrwJ6wbz7zEKms3rFUCHMKdBXtJ1BLTx2WfKDSMsoWY2ZHAn2bESpfvtr2",
  "key20": "4YyRp9cDv7HW83t5LmgYXSPoTPw2pjZmdtPogwZDccGEQdtXRo1tC6kDHMiEt4KKfbFQs6qnJDtR2dfLZr5td6Mt",
  "key21": "NiiVh1SE9qaQEth4LPAs57JWTXYMXYjx7f7o1poa8QKSViBc2FrJpqW3fr7ct1d3vSZP3greGab3XcaPia8nXkk",
  "key22": "4FKABzUYNJET4mrjyb153mYocje7nFZhNQ6vYVeX9qN33poyoVtTQaEpffhCeAQNH21hV4th2Zg2Ca7FZGffvFY7",
  "key23": "4MQygqej74B8AM7JSUSedRcW247fqMBqcEK3zBqABBcoaFo4KBiEn2avHjQwKCtuP7ps4gzG7FCpARWMbpbeRaW",
  "key24": "4utnNrVEbAkdbE2surdLBEpkRtbrwBD4A6ybtkVMxaxKfybr5zqSMbfYNWibjtgL3mB9cLzx9XwzpQojCk9B1YaK",
  "key25": "2BNLbyyq7r8nu53Etef4X6XuEmKcqwGj4iCryhWXMCs67XyNfsDEjZK96K3GB8pT1poQmaGSgq35VHpv8vdHFttd",
  "key26": "2eZmgeegWB6KPv79bJo7VffcBruN8gf7WLoBruZK3ko9kUWdGWyVTNJUYTVbaByk7Uu2hLWMuVkgk97nE39UVGtc",
  "key27": "5jt2P6bfXBEHzwWkCrEvQF7edFwkHy8iKr6gJ6ZnJhoeT2X5ET4t81n3N9i9Rv5pqg2rF8B8JXESXtAk3XZpKAFR",
  "key28": "4Q6rsYA3GTU1jCb9S8Ya9A3C2DJSoMDWdjFcoSdxvMGiapkMWpSUtwKLnBoWVkVbePXionYTFzLg9eSS9FXHJEXc",
  "key29": "12LMXgVemMF3yaCydE8XML9TR1cuYqdm7tHEmfK4ZbDpjQQyZd9H1FUXQrSy6iC47m9fbKrGR6Kk7ACKm8zRh8A",
  "key30": "3sToJLFr1uxKAbHbWyea7UcEXCb6dYTdM9rLBmUFZ4fnfsiHtgs8WBUpW3SAfL4MNogSUGjnTUsLDQ7PnUGYg1ox",
  "key31": "FHHzr7odgJfUxh3waTPLyQjmkAQVMZuwUiL2uaFo2MZPgyBREY6kreYvcyU9T3vFZyA1wnRXCtu1pndo1EsYo6h",
  "key32": "33mXVU84QnX4w1hDJ6Y2XN2EJLn61z5EemD2HmmZKrvHNtGEhSumzKyXfxA6DSkG6gAMYUNDk16UJ5AvQ2XeYSpd",
  "key33": "2c8uwf7cDhJc8hgLzBNfSuAKgt7L5LErC2ZNmivJiZ5UHHqXMeRG1xB5T5D69euwPWfiM8ii53hYJGRV5nCPCXPJ",
  "key34": "GCoytPUdqQnXpkK3oAmHhL8rU2HSWV8p3N4aUwWmYXvw7zxv168bM4foGpyNNp3g8w1rP7j41gGwWHW3pXCoGhB",
  "key35": "5iAmqoMECDpUN66Ra5wbBASpbPVDfDwNDzFufEEcf5wuLxW3F9EGfDxL96qJoHXAqaQpnanwHMLKEHL7NCcWJ6M8",
  "key36": "3HurGua7aa8pYZxHKRSw3z51ckViMTgmaagY1o8MLShrPnBdN9hoq62io8iRJwF4g3tDwhbT8amcYNpFWEKLp9fd",
  "key37": "yciccnbCYGHVG9QYGwAkePmZQX8mvuey9s4t6d9XgJ2aU9rREpJkmKXUmppPDkirEUH3Bjjgow5A611VzYazAxd",
  "key38": "2M3j9qZHM61GfZYCHcttphQM3K7s7T8BmUSqDxTuURxvk66tm7ZwZyrvhMFpYeXtNfQdB9jNiCoyQY7rCcuEL9G4"
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
