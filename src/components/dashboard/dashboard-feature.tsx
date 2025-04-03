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
    "2Pj7ZJHakmYz21CmcMuL4H12Y1EHBhiJY2mwoRyBdsoK4ZbMELmPZrv72gxLbPN3fu4kh7JdQ1TjxjxgaUdRyNmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qEHhU6tNw2DPmfNvJLMNNMAsMEc2neJX6Lz7ch7ofQ9V9Q5FP8CaMkqfGmotEpdPv6W9Rfasff6ekd2rAhMkm8H",
  "key1": "2gfpkRzcJpxu2uPDs179LmXncD8SjWRP3fsu8suVafkUqvNUrPSPx9w9SVn7jRngUDbDxDJtv7iq7AJTuPH2u63b",
  "key2": "5n8hrCHhe4hQerEMDv63utodFGu5zLm1zzQiuCvXMy7drj7QbxYNwKUhEEqp5rFc3GjSRDur7ZLDZk9g8b9NFEFi",
  "key3": "iercQAQpmaKKQNytBJUtVWHUqxz6KuDiQcMkpmGbHuMqQpKSCZia1Su5HdRqagq5q8wtZZqsBH8ZzyMgfARf8g7",
  "key4": "2x5jq18hxm4RwMqPqfPJt5rXSX11nXEqJ64obFd2pqGF8S9kX4PwKWnKgBwkc84ryf88SRW6uUK6DZekvqg1Sgsx",
  "key5": "SF9cATnQEpktQRNjCQNyhcUpvJzdJ1G8thkHg7HeudD7MurubnE4ZEfa5wPEW1q9KtcjtijgTSaXkW6MUyyAmmF",
  "key6": "hvbfPKXJ9MTcvgkhAKBuEdyDksmphvVQy828jqXdW4enT64x2y4mRYhGU7vNjigiYS9QSMSkRjveTzp1bzmpy5R",
  "key7": "4ecMT47GqzjR6wC9V6qCnMcGM9VEGxgh8JEe5wsYT1Z7d3FzGhDaidU7hn1hVLrevyHWvUwSauBCBEcPVLkGvUjk",
  "key8": "5JagsWLHSFCuH5XGLsJxtioQbnZow9EeVMNb46xqGm1MxGtXiD7M2CfquhN3qddxi3THiPNYhoPacnvWAR3wbGJs",
  "key9": "53PtL7nnReQBMZFCSR3ASLMcuZS28W3qB1JaDPEeaDnEVMivPJpap6gwbXecjutX4XYzbPtWdpqMk1Kbm1NiCJGt",
  "key10": "2QcF5hdWch6RbvQfJ5T1eyHvAKUc961nULPAJdn4vNTFqYJFJH4L16Scr5tG3LGSoA3bEzjiwtRWzMseWgvqs2vZ",
  "key11": "3K1D1V4pGrxEytV87W71AxiT19NeuuzHZHWcRFqNv8Vv4EHvprnqzXdvJiSKSeDPSCA7owLR8qFyg2Fpky4jPFiX",
  "key12": "4XoP59nu5iqgtbaxjfLmUEym13eQppsF31HVrcV99Zs8kLhNfPXRXWQMi8LTaSk7sCt2QXipsCx3DitMND5EbdhX",
  "key13": "3oXkN18WjiMnJ9VgWBNeG7XBv1EjA4cEQTzr56FDckcewTWjgQLDisaCGRny1TMiCCjUo8e4u2SUJswJBE5fueKN",
  "key14": "4xFW1rCwQL1QG2Z4beghADvLfEaFk4Bomq2DNBPL9DCvpn31EVdwLsEaBemzcQ1cacrs2z1ekJW9nBAVD28jNg93",
  "key15": "5t8QTcRExZEdcXK6L8d7mVZMY8huppnEATqDxUWVGoGsYEfQY1RU1HtPHwv7xq7uoNYDz9zaoY5PiaRVVSCGcnYd",
  "key16": "5QbE1fhGdj4mrANQRY8JbJBD1Ziq8gAUQwc4Mi597rQ1eQQ3u61yHdpQhqi7Zknak2khwuws5TApan5JUpUgDz6u",
  "key17": "Wtqbp2NFbuZ3Az9EfSodiRaegqd5QFgFYrw5NpyLihy2QSY53fcxvJuDfidLKT8mrER8SRQVcAUij68fkRJi3G5",
  "key18": "5yzweRgbMLwbmgkdZGGBWUWx9H6od3Yxts6a2aFx81f8ZUAqkjgEsMR8QUPxDRWNn1dnRSRuQcDkerPd5Kz1m3oV",
  "key19": "2mgGNamqqnVPPB74YXXmLh4h5L3atzAq4bD3uaaY4GdtxDWZSGsevLWBgoLhAR7i1oeUJfoDhth4YLYQZ2PdKyk1",
  "key20": "5Cw2acTNASbwFG12mebV2GAvFJxQ1HHYkrmiy7RCiQ61YN5pzSWV8FXX3wdRaqFXf7KaZzLaWW9PeCrtdbcHhJQT",
  "key21": "3eLEAiZ2AhQA4Nn3joSiN8cdc6MCG7zfnzHiZyLbyVvv6wx4U4aBYZDXqkqQhN3H6G3HeyL5Q3K3ozo4p9ZfphCi",
  "key22": "3bQSqq8dQbzk5Z6gQCivQMLnPpj8dD2hCHvKU6cUaz6ZyqD6Ewmyiz1mgpwxwmgb97ciH8yvvW524PiB1xmhstSZ",
  "key23": "3gnDHbR5hXCdVbGwwxrQP49T7sejmFBnMMH2MudM9aNx1HPX6ePnH3yeEbCaUGuUYTJM1S115CmDLpjCcoVUwefZ",
  "key24": "33XSYkbBSmJ7wfDDB66q8BNbuTFeNBX5DAaCDSpo36JkkpHtY9hUVgSMwCsakEyru4gxXRAFGxLyW29GyxWSBJeC",
  "key25": "267ySdymVqLqFwq7m29agHw38ycPsMXhSRtBYkU8cxvDuUiKeQUG7XdMLojgcMxpNqVHPWXxoKKHdxKu1dmEEpxo"
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
