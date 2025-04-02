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
    "2qgG9TMEurKP2bbjx1cjKTwwwJgrX8XaUJ8QCUr7rxRhbyyPfBZeerqXYniXcMGn7sRqTLS47UvzLLs3rdk2DdRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UrFRmugW4qABypDvtrnEh6szukNFJskcuswHweMbsJZ7uxXr1DosAA83LqsayzvKZXH64A7YL9L5oe2qB1kJEwZ",
  "key1": "5XMfm7WdS1Xta22GdbsnSidSyUxsVYpZeveqvWPZxwByavLuUGheEUmgo4peyVe7sYEMxWnSooV6yKKeQWwL69NB",
  "key2": "3aFiHumyYz818mhBvGSs8tbLRDutEVubQJbEM5RAENaMns8bzgjK4gQoUhNkVYPrJ3stJzYdWJGRfvjyGJ7mnUyu",
  "key3": "2ycCbJajxRA3AGwVdgNwRb3P4WHvwfcN2CHvggi6ta9f9nAiErCBkq6VBL7bnHc3bvX9jx5KFL8CJA76KmoYCWSv",
  "key4": "1QZrA5DJm8UJoU7saa4ykeQgRWUSBSmVg54SAndJJe7A7RBWiczXU51HTBKmuTeXkZpnDwwLiZvj8GTzxSWVz2y",
  "key5": "4aZ2YpscxH7GnNdMuzjFhFJjQEJ9nzubsAWBfnSmPY8Kc89u56BPD6bRBPqVNxq61C6hHKfy4JEwABpM1LmQBuBr",
  "key6": "5YgYs5noh9XRKdx8YV9TYL4aX2eogjrZQ5tUPP34RLTxK2NE3FZBfMbCssyQkvmFnpWpgfP8vr9q6bw2b7k9gSXg",
  "key7": "4izqb18wmaNoPSQreGHxALPRaTsB6yaXb8X2hAQFr1RZTqzkboHc2KBTns2qRwhVsBRxy3LnHMg15UbecKjKjmpT",
  "key8": "2vudpC14cu3RXADU51dbiJatE4q62yenw52zfSBU7W6Pq6thMNVsuSnL517E6Kg5DTg4WQ9knVBurpDqn6YY2Maz",
  "key9": "3CiDpeSKWXasTTd4XMEUxRZ47U1VebUkkLoagVKYjFYqLQJMxcxEpiAkEvUgB7BZRyWELzsFv4c6JRS7i5u61WXF",
  "key10": "3zVoSb4jUP9f8jiGbCgMR6yr7TeAbMe9yEKAeUUBPW7YXA5spT2JYcjkbL44VoJrw5Nmp1kLKYtat5tzXJPGRTyd",
  "key11": "4LQCaCmxdGFgRc7EzTkUytc134m3EPgHER7NKF2CBj4kSEuDMfh5UXfDiyFdW7vU4HiXDFnoVMBAuS1MTs3C9U6o",
  "key12": "2giS3Vskk53gSg2kzwnjcZXQNiLwDSZPep27oM4qnyK7NRzxbVZZB8pHpDeo9eUpC4WGvspJcCKSVki9nciZwasF",
  "key13": "2gmuDZhyeCXFXKZZgtYobphukXvXFsP892kfD9gUThs1Vdac8bhjkTaW5ucX6YE7jWuxxE7t9Gge2i9a3wfXwvJJ",
  "key14": "5zb5L15AyRPURZgspy7LREUocDrH3nDXAK9FnPRMaYc7iVGS6Ge4jDBscxEasPA5ZebVT53VKWuogrbNq7fiynvB",
  "key15": "49R16rcCUBiSi5kjizsDCH7PnSx8yiE12jGSCctR3xGeT1uex4Sx9HtDoYRAJ1A35yGhm8FTgDBWckVBFXVxguFw",
  "key16": "2KzFbW49V7VAHiqRQ2NW49HU3T8nRAfxyFR6hR1o1R3gaY5v4bPakWPfKjsGRw9CuTfpUiiy3YHZHEk2tBdYVLbS",
  "key17": "ZU9CVt474DNt1oBgV5XosSEbVyCrMiXaKbarQ9y1SqipPtzkvUigFC8MvvemUZypPDVs9JAgDiSLneF8rsd2zDa",
  "key18": "3tQDjccVAAAg18suB8CWuG1mP3Kiq6GnT7kbX7v28XVzV5DdWHtKRR8fLHQ37zg8JadHwTuMHUMEuJCbxG2izSoF",
  "key19": "4zRwHD3a2zRgcwyQtvX69FNWNk88qL1JvEdAHwYDhP8MdPVxPU2fZ8rnyyfhJkugSZBLMmfbBuTBtb4vu2CsCg9f",
  "key20": "3DQpahetRFYV22FMU7k2KST6UYxsKysDbnPiRUY33MQ9fsyQqkUVFebuj46BciPBMJHps81radRgqRe89r25yxyX",
  "key21": "4nbkmNoJTtTpwuW3FN8XHyKYCeAewKU9oi5S6zc8uVxQVCB2Z788W3xNB9cEJVVzcF3rvdYKvsmpJ3x5QP3ojaQB",
  "key22": "2xQrc7wcHJVfMUWAcRz6LhaHGVoLFvr8SBmd8CGbupsBcK5p7g3EN3D5EtXFonjxQ5BEsMBmza6jyw8cBovfD2x8",
  "key23": "43PgyfWESmYRYV1QMq8u9bKui2vnWqVNLG1B2TwtnM6KcUQdtG2FhbV7XDK6G48Yok5hi7EepARCV5RhNiCWThyJ",
  "key24": "aPrG9qpScjvdkHBNfvHX3o3Ld7CGzGDj3B5RD4xuf6TG15YTaxwCY9LTApifPWxrHVo6QGoaxBnx4EtYZNLuNRF",
  "key25": "5tfDZbMJ635Qp2Kgw9mjEUnHVELUnFgN7sCsvR6UHxMhXvdoBGqxptsf9rE6HpkAd3uhadQ1T9CzwjmBqHUxN4FQ",
  "key26": "cQN8rYa7NYTkHmMjQZEqL5Yuu7VNdT2LrxPbSGU7ivub9PGfroPMsaN2UH8iQTRX4Bws2NMqWPTKnWPpkAX6QDW",
  "key27": "5LEc1LjorGvMJcryryfzxEDajSFiUHUCDfAy9U1RWJohjbX411svsDzp4wcJ2sx2PFcC8biatRH48c5dZvHXsHDM",
  "key28": "4i43Dsapp7NaCkhA3apx6UNvuP4rU77GWCRxsiMQidxfR4LDnEFGynqWW2YjAqUcSCekEmeTvyjqM4mzSH2CcMZX",
  "key29": "3PLbWYNQqVkjSwKrBVXT2nPgYZrjthNtUUAEYnP7dih4ViSfW6wRAdL61VRU3pDjCHv5Ygi5v7bBcDuqKNezhsQC",
  "key30": "3jeiQKKm7nUscDRdKHAMWggFQBU5miebd6vFtBJVAJb2DoPFqM9jKwJz761qDXwWCCALU61PAon88Ft9q4yfBv1w",
  "key31": "4MM1pTRMnRsV6WFmb7AKNTp1ohgSvJN9dLyTo5tDiyZfnxZveaxxFzqBrQcjySLgckiZasmHeZFE4E6Mn32gBf5n",
  "key32": "65goNE1wULa8HGDjXKzhmKDtqzEoYBWeUqHfX36n2QFmhjQokq2b8rxjWdvFyr2KYVgGrpnKUjxzex7wkLkjpCTq",
  "key33": "4kkKaX25Y5EfZVdCLwx8SzR5vxZddSHz3xB1SSrdfpcQAtGkBDEguKrkEKWpgKRxLW8KqtekNyqdgx6aZjiihasC",
  "key34": "4VjNjD3AKoBCvaD24rzfSBiWJd3oU3aLMaDCQWrcr7FHKcDdQKu1AmJBm3u31WhxESmJQzRnu9cWeTbPbXBp66PJ",
  "key35": "2fq4eMLxY9ccFP4FTjYNiUprJ2LruMbopibFcqGXQ7MmFFYufbEmucx49SuwNFiegcJzFXyg4Nzw9KYuvmvyHhGJ",
  "key36": "5caUwSjtrKGPKVesDyRXBFYryL1LUnix27oCGECyg5YckMRpYFk9B9LHh46aXTfgrJm1GXcuhAMhEqYGqa5xHNMB",
  "key37": "34VjSjALbWoBniYMg52F633NuiB4PjDTZjNRCBdFmBDZrEUMWRwaqi84Bwuu5ZhKQrmDgVKWHhFvj5Q3vZJkLUfF",
  "key38": "2ECXQgDpNuVfqzp7JRKm7romETpQtx4PJ6kegppFEeKfsFowkGdDRv1haTP5tEKczeKmiFL6nEukTvur5SxFuq9r",
  "key39": "4xHtNTFM9cejfgrvLcKzHogJ4LiE6KGZdfcm3UqoxsjD7AtQmjMPqvj6wp2Rmzq86dxVi4QjFZnGh1WHY1GVTAuv",
  "key40": "9rjBS2XEDbFQn9Wt47YS5LfaGQ6U9PzPAV4EkreMt6W8dgvVU1Zf8xTo5CNePzkVYEzMqtZALwpWY5aAL485iQc",
  "key41": "2DC3eMtipQ7Ux53oCSuBCbVDFEkxJdSpRYjjXCjTwht67Hokybr2Df9RTTCX8KaUvyviLmXqtzUT2vGqfxvpMCoR",
  "key42": "2b8zavpvwcjjEqg5qm5LRdeLjMiY8tzaXx4KahYM5hAU3iecZti8BfGuZ2SUFDg7GA8BLBVbZYkh3PPr9j1e4pMW"
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
