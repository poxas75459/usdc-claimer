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
    "48qZdmeJjo3aDEXvVVEbzCa1YbLzdNHN63XyrSysdWvg6xLhZgy3YMrs3Nyhf6ySYU2nXRqJxfitmHGi49rGZeov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5soKaNmSoVqPcvgMrH7rbSsiPZmf174nVmFqFCMFASP4xdfXh31XpmrVHk6dhkzV8oLTr58VXtuUSsc2tGtk1yg9",
  "key1": "1FNTN5MJkVd2jqx3eaqeymdzsxMBKMV6Ye3dAkpo8vweZd4yM5kD7fomLe1dhBo7DUeX2aRtYaiZSv7udWrvvsC",
  "key2": "5rXakxHy2TiuMLP766rPP2n1UzGQjnxWgZhaPgXGnjvuSAZyCVfsxHSeit4T8H2x4yiL4DjAvqEa8EsFYG6Fw3hG",
  "key3": "zQEKZsMv9fMjv9XeqNENhuAp7z722KiWhq5XmfLzpyFeFtooru91znqJnD8TTLrU4zrsiMJ7q6U4kGQZm9x1NFn",
  "key4": "4yyWroFsRAA8zXxXFr1WYfsBZrRx9Fk7ysE18pCEnQ6Nmc6CDYx2e6sysyqvMxeywAb3zozvitCs6aHCREZNT3kr",
  "key5": "2jzkFPwr9BtYtWTTNTpGCRUCgn8BzQMi3USMaECxs4f8j6VMVTdAzC5CSMMXgvytRyVoEw9x6ki7ZSQnKizcJNRk",
  "key6": "2RZNXF44ZVyK6q6dCGTRw2rwgimLACjaGQjyJ7MUD3qP32o7vc1XYZvjbWbnwBYpTwz5QMvKJGRVRQzcc7jG3kjE",
  "key7": "3adgN9bxRnUxvo4H9sKxLb5489e4KuqmCFF84bBKXwkEbyx1kPrEqZDzC7tPjoFHdYAnRC3kTNiq1ctpdvJrLbn8",
  "key8": "5g8SsWUGeQ1Q5VhdQHQNzhWjxegvPQrH35cDQpJyBXaQAkGMgwcWE24drmh5SyJ8arNhuuuEAGYQ6fYqGF65r1NG",
  "key9": "REDHbYzMXriKisgisS4PdtBKUfs8TtxgEfSgxnAiwQJtMfhKP6faBAJGtSwisUAPaM5PT3mJXCxvo73x1L9d7Lz",
  "key10": "XQrvk2eMbZxbTQ7ZPwrjYTzB2ZVHATCtqBFakR2qxojttZ2ySTqegfsSTWFpUgTJwD85vdoRjmAfuwhk7Lojbum",
  "key11": "5aFhqCSDofTAzVRpa6Qh2VyRBzbALdfQNHNc53CjHnCaAWKEpKEVusfkCbYsjzPoW5WHg2tHQqdKj5dxneRRNfoF",
  "key12": "GJL28rbtZZoGWJXvC6cCXXqzkGQPmLyc18DFTZw9dxZL3mZrZTmj1VEEZDMAAVhyaY24tXaehDxdijUvWbo2Jjp",
  "key13": "3Z7nkRxRTxRQpFQSq1kZ6mps85LZMUYZTjTxTg4mxF5hPzY2gsM7WQfGvSBRkweybhbLr7bGFcHF4jk9i3TgkiXr",
  "key14": "4KQk7AiNcmebQHgyqVK1SDyJjYmskJZhCfLgRbbajynd3tP6x9f5QFFciG6CHdKqZCLoPLhJdD6muaupdw6PqZn",
  "key15": "yk3FqMZWSACqimjhG77EB1BRXx5krni1udV8cBMh42trBk8rPVFgLWsjkVTrXoAuck8PH7gufJC57n3UPYcg3ae",
  "key16": "4tQxShGMoV5JmxDHLMFodPvdHW3aKnc94Ruj1NNu8BYwqeJw6w1oebboYkN1U1NnU1tkDbPmudAaGhxVrFYtZn5g",
  "key17": "4452ikqWwoGirAeRTfD6eRoB4pjcvB11ZGVTeAv7UQW9ZdgaU8g5is2tLD6V9CVV3bJUzWdVPnDswY7zjccd31V8",
  "key18": "3XrQSt6X6WeRk1s9xbUoGLcDt1XwvzKv3qGtGzK4ozXpBzSC3rpRgRbMfLd7LwmesAzRtdWjickimnqoL5bu6Pd4",
  "key19": "38Rd2dgxEh3fq39QuhU2c6DxF65fYainuG3nR5PXVU4eqrvAXdPeqzYK7VurvguukiKGahhXjMniRXsPTR5kAmqW",
  "key20": "2AVGMa3foC3Penh1XR8DhvimWRYH5ihVtbMmBY1L955eR7JWobJgEQm1qaZH2M6BohZXaFKVGRGxMTvqydUJo6Pv",
  "key21": "39qMMsqfYWy8KAL1GJD25Wu7A3pPxjqBxdEXBWskfQc67DUdzLr5qd9ouJMieXJoy6HSJE8tXTYa8B5HUkkeGZJt",
  "key22": "3j4FLpv5T2RNCyhVhVaiyfZSQCyJcNxXJZaErauY7dSeftTKkNrZ1FqEQWE7hGgo4WM5aJTnBURniSEgk7ErBKPw",
  "key23": "2gaKwathpfmzR73qhTgx44SnjFDcLxyPvQxD651q6iQD2n9zWPpgEC35K3Xyjjx1Yjxpo1EoQWFD2s81ExW559wK",
  "key24": "5ZN111zPV2xv29P7pL4HZmLaDchbsQxE2277TdvcE5UYg6oL8tvfh4YYRArCZxcs9AcSmVVbVwgWEodbxfZCSax",
  "key25": "396HJge3rhVFsxaH2gjNCzaiJug1jbn8Mmzxwf5oZiDKNHjFWK2EfX2RwJ48WTzBJQ8sSjpYMkMoM43P1HkAA3Wk"
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
