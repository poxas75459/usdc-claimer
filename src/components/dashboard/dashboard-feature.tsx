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
    "3ZA41Eb3e4R53YWKtD5BCNbR8xfg8AxxxjvzGKUULj9ntjgLefDYNx9XmkYdovYJXuhG68RKWNVFQkEtmJCWFQuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "484LDTR7nxtviek6oDY697zxbYegupofkVVRz1sDukwJQYDzSUTTSjqzuzT6fQmPBi5zCfh2PZjgi9hQKgi3XzFU",
  "key1": "ameMHqH7ddS6jXywJ9Rd3kGnT6hN7Vsu8Htq2NzpE1SZxYVoBYPS5q21WAuFvsEzqYiNSV4znceFXSTBakMDMcX",
  "key2": "3nE8XA5zQQ3Dnzc5jMu9MQHT4676qLNeH6FeEP3SmBAvKeMku9ys4fShjYwac7xeapQY6npMx5FTuojorDptGwLK",
  "key3": "xH8cbuN3kn24ghzkhANg4MVh7Zy2y3Hr4JCATQHjeSdXeKNfsZtaSRaXH56GoRYyp337GEc5FNuWep39hCzKsg4",
  "key4": "1PJ4Y6EfMnoa3tyz9wPatCaia4rw1vmJ85iZ9orNECDv3XV2LYV5Az51ehUXVgXZhHcZ6bYNGJLduPebcVSYMs7",
  "key5": "3U98jLbZmSdtzHgSG5JbvfXxizGUxJosYXiCE2RKkqv2nB9oSpXnPYbe6pvFVHt5bmUdSJNPg465yQTCf7aswcMJ",
  "key6": "kgfU2UQu3caRiNPv3TfEgPwi75qeBRjcwXn6hnoqJKy7GTMZr89ZmjCnUehDsS7cyf8xybEvszYbx9Yk3HecE4L",
  "key7": "2szSxWLb7PnuqZ4fbMamk1J1NXekt93N6pg1PumJjYU9jxfbumNPwMKC9QeoYLAdVggDhtLUCtxZZYv5pkmGCExX",
  "key8": "66LvWqE45bH5hD2BJRMY1DtZSK13TsKdiT5Ce315YZBiwP1nRUkAjmJy8htePgeaC4BxmBfEn53em2YxZk4PPkmp",
  "key9": "52dwSYZiSfJpDb8Pr3aJRTN4RFiyBfin5vFcH1FXHH1zPgVFTc4UJChtUWvQfwPMmN9xY4yiVhTAuSBdseSuT4y",
  "key10": "6eL5oT7eK3a87GMFDv14nTLmwXFubQRW1dhKP6WTgvnJ3aLFkQhCboANzzopw6bHQixKrU7A6ABm3cDkgXuSdoZ",
  "key11": "3Z2gbGaJ1TFchrjieabkE61JM9opgREqiGroJsjdZYZ4S1pB6UjbMjYJ4N9fbQzJk117DQSPLnLun6GJ933nBkoD",
  "key12": "4heZpLtgK64nfv6S21rusiu3iTNDqd3bejqEzPsvBXTwupzHt3gLRfvNgFmNYqEssSNarho2CPAcESDQCefiEZKe",
  "key13": "1PsEKCyVScYbBJWxFTvxAhQstcZMrnW8ph2yL4YtCjKM58H2WYzq5KTXombndnc1PQGtdcigy5mR7gAENKb3c2W",
  "key14": "2GRekv7wiFCWxitsQWW4SXVekpPSeLzsonJTtXLZBA1WWBDZhyBqj7X6hWQpbhGteSMsbJ5Eetb7Vks5jsvU1M7q",
  "key15": "5v7giZcXjkvTjptJSZj66MTXWokGHYiUr58K6ZBcCbRPj5cjeVPyC2917aU6VKxv3jakWcJLvdAeigjqEXNnaiqn",
  "key16": "3kQH6my1by4KL7KG3eFePrbPtaisy2wF7w6hAoSWkscU6Hbxc2gYzdo47DA1t4BWLHCKZGyVaPmPb6iVUQfteqfe",
  "key17": "22bqcskvCRrPqSKaxCgnDczbHMsqVFhb8k7CqQJYaZTTUZ3mJWK9hHTfXbPATEAHvPfmogGsV3bWAiR3LKgUh96v",
  "key18": "3kCWDfJayXMjiH6hKLTubeXGFqHr8aKxhJUoBso3XsJfTsLmvXXwoDWxAsbLuoofy9Rb6mmiG3oenFaRtEjPLnF8",
  "key19": "5hjkWkmMFPEqhToRU99cUSHEaMHLMWrC32XFPtnifyC1Apfh2v5zLbmziSfeSSZeaiGM2qwuicrPdqyjP9EqoS8q",
  "key20": "5AdAoEhvVRXFoVXymhsWExDLnwsqentwsdyV1QhxGLTqcCKoYzjhakHWpBQryg1vgvF8FxeHWYdNuESEm5QJ1NPf",
  "key21": "3hm3RgW2X2HpUdJYhFGvQfZSFYQkm1Z5PvMNrR4nHsz7cL5mtof9tNfzSJAPBJD7icY1ykD2ge5eJRUJkYLHjiD4",
  "key22": "4gGpb9z7opb5LNXYGm4M7oUcULHP2zrmCVsddA1z6JBdxE3f9mP51Zqjc2NcooXuoPkTK1jJVNa2ZMdRUMPSitmJ",
  "key23": "5msoX8Rny8k2dFngMAgTKQ7EhLQAUPKU7yWBisc7xVEeGkwQ8mhTJivAQNsRBvXNnyus7j53Re1NrEcnNiTofe1D",
  "key24": "3ZLdMaZnwU2AgebzMm9ohqdJVKaeYzXY1rF9Qwwk7MiEDXnrYq8KXw1UWDT4zZFwaN6nqensXau7EoQRUFJgc9SG",
  "key25": "5qrTUHh8r8PZ7N7v4zoqtuVZ1bUd6azXoafhHvEhS9m1QY1SiA4fxNsnSsTAD8A2Z64bmWjjPw9AXsdCZ4fRFhoU",
  "key26": "3Z23sTz9Q2gBfV1eRUk4mkqhsBH6mvG7TVKUCKLoNxqryVpYwtRsXhWMh2jAeADWMy8zMmkpsxFspL1Cyf66nQi7",
  "key27": "SiYvg4dNNgcStUbSjby97ACkhtisHCHpioAfA2QRPQgq3Ea97UT9QF79gktnLRzngrKhUiP3zE4PHdhpDAK6bRR"
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
