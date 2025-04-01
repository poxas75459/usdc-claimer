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
    "sfWsE3tee2qYrZLUGsY2YyM7pLPrBuXkHqRaFVB5f5xbf7fTtWkMuGn8uPBv1SkyBo5Bev48jS8v2UeX99cUWtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TmTcaSkJLMWbXd1hfugWacqVcHkuZzbmS2ey3wiPJfjhH4rkTMYNvqUa3E6FiW2US5sK6zkMRUCFnJFbjSanstU",
  "key1": "3BdeNPBxiDS5TWySsLU2UDKBEkA6KZKheb7yEAYXXeT7fbRzpNr3kVnHWW6JXimBKfxgDshqjkDf5F9z1BpAhcGP",
  "key2": "56RYzPG5Gp8ZwVeRrG7PEBZfEp87RGeXPjuApB9VvfgsU5Q2tWSCiXn6zV8b5wqeWtDnZkVhvmHaNjSDdDCZhKHM",
  "key3": "3Kx733nSmhuoJm2jm1aq4sTpaS7e5EgGqMyHVJyri7DCU5Hwyif2YmH1YupGQxsxsVZ1bPT27RTFhY116P37zs67",
  "key4": "2YN4urMioEwjM5Fiub3qAz2TeYcBr1EWCoMo3SG21uPUCfGPBwJQGn4GU5kw9vNHLZzUr6HayMrqjuHrsMeirmsz",
  "key5": "3BUoGbqjQ2h6Jkf8QsnFUJmJ9pJAvrAwdQfdymED2qnXofhzFTp9XWGj4QHcmtwNxHu5RddAtPVEQARDuwW8r58",
  "key6": "3VWTDhsw1eVcj1TduG1EbPv3vmb8b1sH93F8WYsB9oZgRjBaPss8VWPs6WZQW8dsGpEyFQD4ajjLRwDX2SM6L1iJ",
  "key7": "54MiTEXD2HtCAsn7vL2V5wP9A1oSbvo98w8YQ33gPs7b7VR2zvbRmrxm1WVy9t5ajW9bBKMaq1Ps3FbShe49kuu8",
  "key8": "5pvS9QSvu8BPHkF6TAonTqUcroHbZ3JzsZcTdMKtPeg85grBGaJEEkuykMjb5Kv2YSUmWZP2jYvuqe2w8E7fAqP1",
  "key9": "qTFEPHdVj1pW9uj8rNk38wZXfXeP6whrXiJcAExBuYontTdBapLNYeTFMH7iHd6tvjXKEkXPRA7LZADj5HxnmzS",
  "key10": "V26vxso4y1GGrkzLuhrGNxJMsyjWum5mZsMAtiYcU75x5fymsuK4UwFpboQ8PgdtHnZfMRJSYQNWQR1psKdvPVQ",
  "key11": "xykEekpXYU95yRsvFdpHR5B6EEiSaL8tna3c75mpLvgTejY7mQMRTzSMTLa54sYhdnK9oFFD6abK18NPseGrpqH",
  "key12": "3XBEDXPxz6HteqmkYpeqjMkHzgh5DCkgVEYTYpVExdWAtZeZA3QCSjUkcakViy4dbt7ajYjUA6wKydMyH1SruCr5",
  "key13": "VkZU7H63efJNAGSMKqEHwsdWth1JZVuCk6Dwwvs2y2vmin4z61w2T2cc48M9e59Wz8q64RCgd8NJ3D2167zfdhe",
  "key14": "5S5JTmrWxLrXkoJdoJ9NL9GX7DSt4bR7qUUSzukbPEss2YBKwwxkMUTUd8c2AkCE19LGWeDk65ukamCzjTbdhrmH",
  "key15": "3AQAAj31LSnWGKpS9aNR2iET3rK2zPgzgkBYMNbWtVHhqkbTomMrzenYQz5tHwjKrdhUJ5zyzjWs8JyEDAc3e65c",
  "key16": "4zFha8FZUg2R1iXhCk5Wv8yw5bfQuU9DJ4VHvVmp7h5NLyX1sf9qUua3SBagmUZFhwpFZev4KatJRRxng8SaCyNt",
  "key17": "pWo8Pf6BGWkDhN21frqUKvhkaLxjPpe5eqbGWuiSawrewkXzDBYoYjPM8ZJziTzsmenYd3MQ57DzGXhvgN3Sn7Q",
  "key18": "5s8CazVnV3bM9WxPyJkWgbygeEvaeSmtDFmK4ToyB7WcXWzkf93MRXZDnpaqpPVMVtqU4DVNTrkN7jcRtqG4b1uW",
  "key19": "fcbgk2ocVMC2m2YY2hrfNrxN69ATx8ZXnjbweKo3FhRSq9B7mNEsAozCgMYXoNN2Qr1Jh4GdMzbxg1WonhGf2Dq",
  "key20": "5DHYBA2fWbcY438Pp89m9PFTX2uivAPwN43UoGt93VRgaS4kXTPUcPkpCBATwR22QTADUWrbzfgMdMPsfQDg3kgs",
  "key21": "5Bk9AvTkHpJegEf6tkeK4CSxRHwHWdAMAgzhR69M9teFmYa9gBauCPnzUeBj42AKWpzKbBECpPUXv51Ghfv9fs1M",
  "key22": "61Bu1SxmX9eyWpNLiq6ZfZNkciRsHdHWyYV5xNCm5ovGKjzSiXScAKiZGCEFRfMx5FdVjLFMYPGhWb9MQsJC8WZK",
  "key23": "3dQrzUNtwRkvd17TvMGkDHgmPveb8HNFD888v6czH9nzurcdFgiXSJub6LpNu6U3hj7tbJR2dJ5txsfyJ49oXFBH",
  "key24": "4Tw3taMw9xv7ExmV3az3qKLhWuqtsHWGBPs4BnH76USmyUjLdeWKhEdQmRXdDXnGG1RRCUxcCHroBkVM8xpYzNRA",
  "key25": "zEs3T2wGhSpBgBqK9fWGUy2XouBpkiVbVB4PUuPz1ofcTAeh7GmTWbPhEXw1TTMHMCDyf2StE4yKjEsW3ctTF1T",
  "key26": "22KxPafwZ3tAMEpviC5BGpoQuekMRM9mVSAifofnpfERC51aJ6qzYsY4qau6oQMJhzbHXLUCXgpXVYVoDCQgfCQh",
  "key27": "2EEg1Ggjp5s7su2UJBFiQ7HMkvkhvcJE5RbV4AuiZkBtEhmFCGXHHYNFpCNDgBRb71X28qECwdTM4fwRMxaQfdoi",
  "key28": "5XYU5qXhH5pCqEZ5tDmKUA8JAf52m2AYwLGFhR2j2vf2iEknCkw7m9EGWTC8G2hazr39Qs6hmNE6rNUVLUDgS8PL",
  "key29": "3c7Lt9zs5aEgoCFJepRdWFewHAf1vxBMaZ7t92eesBMrWCPEUr4RFpYJEvJuRUNPzrMabQfiHuC9Fzovxj9fxc6d",
  "key30": "1ufJd6vBAgVnnvQc4ftxv59UEcvQKrtGj9gVHLebRUx44odezhRjjhVpXnBtt1Lw4KH7oVLsJqKUPZQckMY4QAy",
  "key31": "3LEecwd32YJ26T5RZgaZrzHvLteVvEMWjeJnciH3XJCrJJ7Mfo9YjKJGVEwVCJ5k8Yz3DUsihxQPunfsPZf394gN",
  "key32": "5EmEurLwpPkjWZosrxHiobNFCovArQyUPBhD5UaWgjVHJ3YjqDGVcCjxfrvLzQpqNtG2q8t2LYa9RoMs41W1bUfW",
  "key33": "4v9f8ViV5weSciAPbgVyPHsHrf6XCwxQJqcMw1h9C8cVTN9QRUhogi5QERp7rDBLb1b9aZrNdJwnEwW26jhTzDVH",
  "key34": "3jqizDaS81a43VFCgEwZ4eBwJhLF7W25jMcu37mSpz57pf97PUtZuAJAFsr3mVNn8AQrF8AKLZvQPQWf3XC61Rci",
  "key35": "cUkfhcpScYbu479AmTTH5TZh9oUhgBw59jKovFq28qiVVYPtSb6dwkWt2tRp5LRiaBnXsV2J1TpiYupzeBXgKmM",
  "key36": "3m6poXh1u6kdarRG6qkm2pbnYG1VBc6Yzn5JZWPRy6R5jp6ggEif2tyNUdnAic1pFQ7zFPxcDxDFdZJWACehx2Yi",
  "key37": "2wfVeNRpejSR1i9nadkSteZekBuuRjVD9H5kfJteMGre96XqcQR6ZzVjPu7yVNbkUtGVXF1khTD3Qazz9E3Bu8dU",
  "key38": "4B3cpSrfwXy87U3puWmrFYP56V3WUPdHFRYs7MC83azdq6Uvujuh1Czi6jtbX3afGA3o2HUAir9kFYwKjDWc5yoa",
  "key39": "4yGTF7UMwaNVgfGFMYia43PWNqBxFEZZhWtoWEvDPqN1R4bRovpwLCY2cU2CncJ34LdHJZhYtCTNskiWh3VmM3Ju",
  "key40": "5bwj2Ecaidwe66Jdr4yiDXib9S3gXjvMiNhFTb1ykqz4gahYrAtMjSDDuTcnMu6pzx3SMzPYBpswrYMBvxzVHc7v",
  "key41": "5Ze9nhnsoToQzZFMLS58c5if43ZY5XEk2Lw7FRj6VoLiVLQTNntjn2aVBtwNf4EG7sStg3pr8Pc2i8vxcPFHcQ6w",
  "key42": "2g2PYafFZ8M6srGMAj81ZzyBZ1YJtBGhM9Bv4EUbddskKZAwv2MGiZwyHYitoDzypo6eYRm3kzgusuXe6hUW8i3v",
  "key43": "4TVoJvpRDSh9q1Wm5w5HfKfeMQpYY9KbqGztoriiMosJo9KEo83hB6Ld9k4GJdVJdDj8CbC4ruSrbixcuzcV5F3k",
  "key44": "3LsXZFtGPBS6Y96zCv4x6651nxz1n4nnLTeb5BwhyyfAbG3bYcBozhSe3Kn3gQAaEpYK7LiMgut5NxJvnP9qdVzH",
  "key45": "4uVxVestjdKgkFsccfe7PLBotJaAy5KXDMA7jjCtLQcBxyjTstKnzy8UDutosCH5y1TJ7nSoYYoLeMjqR99UXHx3"
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
