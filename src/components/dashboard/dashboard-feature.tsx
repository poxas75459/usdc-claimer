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
    "5oTRdwxJmSkGJfck33bDsTGvNBaTW5soSwrZNJvc63x9K4kj4bxBg77tpQ7V3JVMXhdkNecNXj81iAWnz7F1BorV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EyVsBrehbgmpS8ckNZe2DBENwfaSG8kBD1SByzPSZzM4PCDp7yGmPoxx7WSF1jJwoFg8tk9Nsgdj8u76p7hG4bD",
  "key1": "uU7qMfZM3D5uJrNf7zdKVwJtx89RBtmNwrU9THj3jEn9VEueDH6Co25j5cZRaznBuXkaYid8kM9mGj1JKbygtjA",
  "key2": "3EEWpRBRGasbSznpsHZ5seFUDyfMzktfFsyUj5g2VfJTShGt5NVtfapCv1Qvm8nEK5E3RNp7QzYvHDrqHa7TN1zD",
  "key3": "5BN3QwoTuFny3icA735vPLXDPgwDrGANVDsy6u9ADNVcGfvR7CWZdnaaqUJn9cheXhCcTht5ctD41vVrNpTTyTYh",
  "key4": "2XCfTeLTzBKVbQrXAunXczHp5SaXryuxZVDQMGk6iXiVz3mwJ1621FgWUK2eSzzJNcHF4MPLEkAet95UmRhGW2cT",
  "key5": "3aVuhhQLCfJ9PQb6Fx5FxhujY3mweaiZi4JUEbJEZnovtHfsziSq2mnEgUUaUrmvv65C32YTFezaH2xCGBskvjjg",
  "key6": "5dhSAvg4JHMpEx4ALZWXRG15MGCYjNtG3ZmDgj8YfXudo5Dh6i8i6xwYwNy7QGc4S82Uvbu6m6XEA8hV87uYfH7S",
  "key7": "3kkz1LbvVkVxgTSEpTc8dGewxbKb2La2Ap43GqGtoAtn9AdRXu1KPFnvwQVNEYKsXNnY4LvDSAn1MbtqNpaxtvU7",
  "key8": "64m1yyvKtSGmMF5bJCU6PLnEsrAa5N6SvMG63gfN2ETbjqPre5gkfr2WHCas5ZM1P3ubuRpz66WqeWC8SXEzqjzf",
  "key9": "3DGk7BVUHs94BJfZgA37EKhgRyTt6fq89Eo7s8aRVkvAuuamsYfy4zEgCBexrXSnw3MPScSdnWp1dqVKRJGNS8b5",
  "key10": "4QsT1eBSYsmfHaBrATrpU5qPNRxxpTuHtgGiCVZom4waEr96815k4zgpDrxZLCVKoTRevvntzDwsXzKDbgXJsHqK",
  "key11": "4hSbDUHahyme1CM3szCKR6hD2nQN7k1fEcrSwdxP9ak4ZEnnLgYvULKMWCnL4BtUrUytZ2pZJMA2LzXwCDUx7JYe",
  "key12": "5X6M13dy7SjB2Khc3PmxzdH13qno6tW9L9xrJHLDFVWppYcvud5CHRB1nzQY6iNXXHW68UcuVQ4PbsXSMDmPkqnn",
  "key13": "5JuoUdvEGbTK8N7NHYp3NQzVKUeCjjdoYWdyPdmUAvkSPEfGSERYCkcUbNrQXua7GzhJ5qeiaALGh7gxEwHL1zBc",
  "key14": "64EvDQraAmMdDHCi9LACYyu9azyJnfiuehze5yE8GwjutBfBM3rzDKTuPnj6G2wFeo2AAahvCSHRoSWJVdiRyuNW",
  "key15": "2LP2ypFFQLj8gcJBWcdE3qUPZZxZF8pwMPQ5NfKe1rNtjgxpCugNKpESfw7e9zkPDdTw8uFhtPur2jV3bgjzDRuk",
  "key16": "4GEqAmrZmQ3mrSA78pFRXcgTAUhrzDsB4xRzq9xfSStb2c5z2HcJWyysjdBiMe4jm99GCPJm4MhHVBnRuhQuRa4P",
  "key17": "2TW3umvBEuurLD4EcbaWUpk2jMaMZWbYwNAdeif8BNpzaQRnS4BtcEi5n7zGah8pCdyBsEufB9bcBfCCu3t6JpD4",
  "key18": "56UcdjaiYWKtYcUehj9GGUr92N6yAnyVLaFKo7EWDaD4KzgJeUeZEC2SrNRh8rJcrVPwNZHYTLou6RiRmrPFvGvW",
  "key19": "3XDYsQDHNQp9Tygw1GWMXQxiwwV7YAzQnTZVBaZpDpdjmETBtVyMY35HcpQS7v9DeGed18Cz1cZR5soqviqcmTyX",
  "key20": "3vuEXybezMnFCgVYGdPCDoeHtCqNc3Mh6HqqPJNN9zBy1xnJJa3p4MwE9jEqdjZGDzisY4yRXMJFR6SJ5XF4JJR4",
  "key21": "5CHXQjTdSfsS3P8svQKinir4nxaPNUaKpNUKJd2gqKDPKbnE65wh3eJn1Zo5bLaHdW8c1N7GtJzoxPgFCaKtgUEW",
  "key22": "5Fq6JvzjSJxsgRQeuv95dPtXqyZM7dxCu86QtKe5Ygstp6ad4LLBvRkvr7c2b5Axd64y7SpoeuYn8hPNLQ7ygP4w",
  "key23": "489T16i6QW9HxLLgog1YDAxVJZ19J9Ccppr2XZR8agXdyDGCE9RLDchjBUymp4HrYyzoRc1jpzLhGPEHYzitpxBG",
  "key24": "Ww5ssACAbxxKUGf7pKrqKXczkd4g8idrYSugrz19v2soKGBBMphbeAwjJBUgLEYzGhbMcaAnLXrehF5ZgFHry2h",
  "key25": "5WHLaJzEYedd1Pi1THMYtKSzCse7tfqd2aBJCpHs1VziGufs1GZ876Haeg21B1EDj1Y8vKmQnJgbGnBLRWj7AGP1",
  "key26": "2usk6AXBGQYifKViTCHpMuCQeRHJPjw1ZzoaFXFbpybSx52M2AzLZdeAHwnrYT95UAsn5wkTfkBpRqu3MR16XvZA",
  "key27": "EREFJyk72qKN8XGM4bDYmq4obtFVUDkZEqtgfM8TpuddqbBxZSBp76kipQFWEe33oKeEQQzrRryEGMFtMNWVQy7",
  "key28": "22FF8BaBjj7z4WakDVhFBCqnpViijpznvER3yCbmEbeH4vxzcdABDFsL1N2Euw1ZDiSrbUpkhavL1S5ysrvbihjZ",
  "key29": "4L39aTnoXjAnGZj5NFyMbn8PN7WMSpFKFkF7xnYAY7KQSGiffh65Q744onGu3KTJBZWyHSSdZ8z5r5CF5C1v4afA",
  "key30": "B7WbsssNH5zmT7Sg9XZVLXuurkimCxF8CXfyHfMa2vTdpBKfAXwvVvxuosfA3uFxf3mNRxtdmukv5kJeohgbxwc",
  "key31": "4eHTsEKFAa66yxDQRX2P7YLPcyv3QLsN1yPBDS35A78Jg4vC5fY2tVY4q7E3UMNRN47LP46uunvviMfYkjXVXjwj"
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
