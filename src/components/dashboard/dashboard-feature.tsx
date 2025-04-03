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
    "fnvHudahvb9jr7dgCMUXWMVMuWiQMb3DCcQuuv7B1kRu5SL1BoadEK1ifKeXzLhRmLhQkZZdb4nJJWBbiDVrzUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Aj8Tk1FkS5JUcaFLHR6mTczfJntyxu93sXgxLmyP8rt3Q3asu6JRdfhyT9z7BQmVLvdDGrpPngCC5g6U6yEigfN",
  "key1": "4BKL2XdJQLwBWhs5w6nZQcT1axEbCKfidbtBnTVwgJA2GA2JF97EpzPvLfATXVTMMo6XeYPdkPXfMbhHzKMQhY5n",
  "key2": "XDFgnkE9ozsqofgWefs16dZnnroH39vYFcpMP6j4EoVowVTDpMdo4AVbxJP7xrmEKvHUNA31jfpEWJCgfKHZLon",
  "key3": "3VMZdpn16fEhh2tNzVpLWdQf9UucGJiCYjc3ukkg79gZUQ8QThV2wddJdfhtAj4yPWQUsSLjGVVpgnYBCjmexjoH",
  "key4": "2MLChMUJLZHtN15mNcySePpeETKMRTDKwLGEVqAw2CUry2V2b6XfhcXbrHQcfkUM7i5WXJxtFgtP4w31UPWtjPvv",
  "key5": "57FsvZz327pV32eLFGcCYeMmi4V48BLn576wLFMKYhGREDiLRKMX3C43ryKPToMGVehvx2Fduxnns6ZgxRy99E4P",
  "key6": "XuK5Ma7soS5EXCE4A8GVemeGLUHBJC3yAzZxnbtkkkN4cD1yMXpsdmvuAVjee5nTPBA6Bnzpy17WqiNTMJUA3vz",
  "key7": "24v5r8uHvFHV3EULgtXzwvkwu5346dNWemkj7NVaUThK88KULJ8NpDWSRx1B6YLEs1F7NK29icj847gNW7jicZPD",
  "key8": "36mhTnRhANYS77CPPSkuJckxWnugpDQMTiSsinqPFxLiVmvbP1juLddC8SL9HgZv6iuNXxGgruPvHu9fDQjvxAHm",
  "key9": "5W8qhg2FFsuetRUK3cwTZieFsL5GnGazXNVY12EjWfza1jxu3eRYwdwj5ujg5CSAzr2qQocua4wT2cime8feix51",
  "key10": "9ygemRkjXEq3Y7qy2nbNxJ45NxXiEq4BgBNUhDD43zdjR65K3VrjxrNQbwaSvEHSxxA2QhoocHobNLGULfJf1tx",
  "key11": "2wi3RTKGsrcMJa7eykB3Exu21bVhvUL7guML6r5n9iL5Jisg8P24enkYtianBC222wL7vo8sqxsmBCLscWkfTRLC",
  "key12": "4EakUMhTKegEV5gspH6emUAiAQ351zkE4gpTuq9hNo9yt6ej6iZKAywotHdtaxCb1AZwL5T2hSNzHCHRF9Mx1z9B",
  "key13": "4BSW8rVESCdusBxvgdQ2uMhSctdzJFV5LZC1e9bEZMQeKRt8k12FFdszp1kcocApqmMKzo5h9g9Jqds8wPqqRRyG",
  "key14": "4fFpEbLPXN9SrLFGRqbJx6NvmHsGU21KZfhbwCaePUevDonWhTfyRiNSqEKMzzRSrq4B3TGNSggN39midZyi1aEk",
  "key15": "2pGoc4vkqy6TnWzDvcMNs6oAGMbeW9VZYVsaZVhhNc2z2fz3JSEyKCBy82nZNiGn8gtuvosspywaMJVs1aFER3xi",
  "key16": "3r22H1cGtJLJ5VJUffVDUfx7X6MLDyKc83YcirryYHLfavBD9eXGMBBCmwTqVRTwJJ3UvxLYw2fKLBEzjYA66hqa",
  "key17": "5YRpcfBHdVJm3gKjwQFg7VUEkkMA7pjFGxoyseMM6oSAk1XJjy9cmo62kVtcxMjNUVY2Mn1rTELkBJAPoncfEkAg",
  "key18": "2hAN1ZVa5kUCdofhvpFzqQW9cTUmX2xRTSQtuETQdCUfcHY5YYrJsBM92nE7B4m6J1pZA5BnYfveZWpYQ67Yt7xX",
  "key19": "431B4Re6zEtpDBCFAj9HLC8AeNaMj13FdbUcdtQqu1F2BY7oZe29mxXjwC6GPPXZYc5pXtUSEXVAx56sCXQK753o",
  "key20": "4WwAjcQzn1Qf2NnoHQFJnyzwYEG77CYMcia5YravUHUZiLBf7Tx21u4EdLhc5r69Lsv3AVwxtpBkZPX9GpZq6vZQ",
  "key21": "zRTYg8eH2MfGZTjvft3xqiSs9eG9wQSxKgAJwe5db2zLr3N5kStutkwopTp3jEDgHiXeCwj6jjEBsyDhwFE4MCw",
  "key22": "3r5kiQ4iQ1JzHv6PQ2TEwXHmeqMLxHrE3guPHu32gv1QaGGzFWB2etmCfz3YxPFxJNSaaGKQgskK2xY5F1RkaB6",
  "key23": "3taKVgCSs69EFMkLbSDXju7PsiqSaxSvAoGQDXUefYoAfw9dMMxyBt2gJdsu5o7oVu7dt753B1xo7ZD7CeNskE8J",
  "key24": "4nUrJMasT44oepMoMZQBTHh5J3Hhy4dK6UU2ya713WFbdHFU7XSgjENaKvZejmEJbRhn1rCBmCr4XFJvPmGquh1z",
  "key25": "QKqoXt8KS4my2GLAroWmsxAeLSjuxzNAvvMeM3uLivkB6F4aGpECrm4mz4nWZAtmnpeZTnS1tRGbdXFnhejmckP",
  "key26": "Hsvn4ikUV7JKLs6JEdK2ran1SuaagRTNHCRuhwp9qf12vbcbjL2TexUFxjVxZEhCZnSaok5FcZ6YxdoQTmzbjqs",
  "key27": "sJhBHS8uX27x2aJduVuSYuv8xU8RrPa4KiXq9WMXth6hJposacmpspaUGX2rXciew7L8mVeV7yA3sUz1mqY2gym"
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
