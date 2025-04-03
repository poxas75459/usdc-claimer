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
    "4Lv2F9tJG55tnwBhXsbswszXW2pgQo2sVAVmddQEoo2DSMMtqzyVVyTxg556VTMqkvnWxdaozprZXD6ncvbUeSJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uWmpQBM7Skwc8vjCEsA67wwokoBC2rDsPSxE76Nycnj3WdwvTDUc1W378DwMeth8csGwz1uK95soBrMeWp7saop",
  "key1": "56KmbhJbPXjRukDW84rpmNBwkALmra1jy3AkBgtbTyZzz46f9wm8stokL2rSYjRfG1Ui2BtAuYMFK3STHFbtwabC",
  "key2": "MC6mFjLDc695dH7g8f5tpW5BRfmdaHHCrFD8ou3iXpPTYCQQhrAYjrg3tzwp1GiKiWySY5jLxwUM2aMswewXaoN",
  "key3": "9dWtKykDVYkqtJ7mmQ8mdGkiJsJwXLUJk8TjnH2eMAzoh2pgAv5G5vP23aK3346DzmV2Wa8PKHjvfMpWWrxRhQe",
  "key4": "4ejZctfxxmAJWXsYTjp1EhTgCAgyCgkSiAoAbodw7qtKCXLDzQeZJhtBiytphRMiTTu4NrMTwVWHLm9dYNC3mK99",
  "key5": "2BeNE5KcVBG5uwqcjKtAfhBvkpvkEHJPtt69uSHny4tBLKy26AzmHnr42MM3GvVGjF2PZRDYyPV7qoS3g56Yvc46",
  "key6": "2SRgUyFXvJAjACV84bSs5GzKURkHoWWVFzK5AsfAPuLH433nnYNj44SySRdfpm62HXheMaMMzNXkfhVMHtiEjz46",
  "key7": "5BjUAnVPXaY9g7Dim83km9j7EdHjru29vdrpfHsrJrsEsw2Yn5KR2puW2cuTdg3NzjNyTcDBRt8FZvvpLWSDNE7g",
  "key8": "5EBXHreRPCj5dBLTu9exWvbR7PmNMiTRqQ7TzKg7WwQgWnb3nwx9UoLmf1XqBmJg8KuF1e9WajNDuyUdGWVMe5tu",
  "key9": "2qnwxNmGe1SkmHdbWSWp3wxDcTcpHYVhGESNBKTX8Zw46wTpqbuD5K6SmhkL257sxCSQzudnogf2fXqbx1cuBZNa",
  "key10": "PpbVPCuv8oeLGM7kj8TUq1JbZvxw8kawugr321FVYDWQPMT1xfiG89MQAf853xRfbBkuHaq9fEgkCqi4YPVra5q",
  "key11": "4vqx7qtcFDAwuQvChqupaxvXZ2Y2DFpmm1Ahz2sdf2TyXiLSZ8BnGtXuqu9qrz4RiAGcy4fTTd5uGL3HdgChj6Ct",
  "key12": "3yAUThAQ7zp5H5UptuqYAWTsth5K4sUVj4MA6q2N16jwkKUJ5CchvXHd5w2RHs3aXX9xTjJySz6qCJRLdNPQfinG",
  "key13": "2gn9adygdVRWENJ7uRbbGLs9HxLJoUgxoKPFKipw86nmCq43emiDXTJ3rz3RcJiDW8PXdqZo2nDEVXmvDDg88kSS",
  "key14": "49fwR8HGwNG199CdPvaPKxePfY9B2mo23Mk4PsZrdvC6cLyJYG7Lix48ArUxtGr2ytugpy9yg5aGDVBrSDiLYZZh",
  "key15": "5zetkxuhtzBYJpdmxLYafxtBk5hSUps46nqciQ39DfcAVBujdLF7QLWo2bDMzov4iB5p7ojTiR4oxsn6v1KixrPZ",
  "key16": "3mzP2zrja1attmN3Z81qDNGVWhajoXVu55Lh5eVArQhCvqKRFbQQN698ifAhJMhKLGLnb7fwfRf6LQbDaf8dp9oy",
  "key17": "57zQF4sN5AczkeSr5FHb7r9Ma5Yr4iBYytgeS2ex2ZzcJxJFPP7nLchHheMeRdgVXhtoLkJ7S2JELCu1yUcYDWYA",
  "key18": "4QGXH7LVHrHdb6FdR7D1S9oSj58pHkhRCqFKyeD4zCdDq1MZjBPwvxGBFj2RHPLfHw3dc5cWLxko9VGvevENwjQY",
  "key19": "4K6hYeXMdq9LeRx7HJbYZzSYwUzrnbH78Ntq2Y4Moxza1RdxyNKa5nHq9N7ei9a8ddFuksM4gPVdstNFbm9qb3kg",
  "key20": "4R58Rgvm955oMXZRRgiRAKEDsMqptVk6n3W7HVC3SGgH8joYXQDRG4iRapi5vhLq1ufh87PwcYmjiNntBf66q7kk",
  "key21": "5EkNnrxNeQuShUz8P5R96xmXzQsxKbzkjA4zPHzKWxyA36C2YCwL14xL9EKRZsHroeRW7nnzpPPwE7UxMZcepwzM",
  "key22": "UUojEN7snomArQWPA1S7mFSrY7RpGzYYhiEa3TRmUNo3Lbu92Q7Ru2S31trkzZ2pE3iPcaG2yLW3HFWVYyeK1eK",
  "key23": "44eUfDkzPuAM8Bu31mht1aHMnp7pRAKXFn4TidG252atNfPDosCxbs2MV5MoRVtW5ZymjxjtqdUH8FhGjvdHfdGp",
  "key24": "5y1R3HEhNA1aV6Q5FFE8JqipU5GGEou8ZcVu3Spxma33DnSD3qweZL1XvubPE33YbH6cLKncPdsw9HuisWdRwjGx",
  "key25": "4Z1E3q2peNwy7g92hCvmcPfJJkUYkL78DW12QCPXyiXB4VCWvrqBdXHC4yqAQq53NCHnNKiEiyTLkD6GhSHVjVE9",
  "key26": "5SJLULjb9wVqGH8wvF7CxiCGNGwYR5NGrGTPLVrdsHwthQA4vB7awasxY269CWv7xdobzLTjQjVHMSSmg1sc4MSA",
  "key27": "vrQ8r6n4us2Ji3Rt2mNgQj5gsXa1opG1rcRo2iMN9aJwvfp1fxi4wUmJJ2NV9YvZim3mZoqVgfncZM1vr9tCUPr",
  "key28": "65STRPPEa1UsR7mApDfsh2Lipg3abrdpk4mVbtngpg4qYMxa27c4ZFwcVr2vCdSwyhrPgjnmHscJAU1wntW4tg29",
  "key29": "64K34Y3vMaz9cRAM8QHnXkrBqWXtSp8H26u9sqnsA5em3g4h2emo2K84Vz25w7kMyFyMywn8jkkeKazk95JZr8gT",
  "key30": "41A25HD7ufivyiwjchVnAqDStEtZmC3rYGMUfQ2qTv7a7N9uy7wbtkzq87stkD56m4A5YJtJUXN8LtYbnvnjanBw",
  "key31": "2D1vvQecwSkFyaxB3rFSb9PSqr86vdghCVhe38S1CeK2inaPKsqJTQ6obHWH4AhiQU7iAH89kUgWvZ5D6Ec6cHEN",
  "key32": "HEs6QuTA2PDbLL4dWov4Uz5fnXkLK9iGCe4et9LA2RtgDc9FNwRYEN8mnLFDUAewxBj3VkRL6JZtYNvbW6hcjTW",
  "key33": "4P4cnCxNnsT56F9gcgS2aKChTRtonw4AFEMCoxTKehhDscKTWsP3V4uAANU2dbndMMhyDLZVnqMD2Ldnvnceezs7",
  "key34": "w1F8F47JujLjeGP23owZdX2vn4fsUjBZzPoQYVZj2rmVATVRyoVtLztK3PnEGX817TacGDCtqBxYDQRpWjJDMTK",
  "key35": "2HY3byNfXBC6wiZs1Gf8d2doiJtE2dzg96dmB6JzssEE9G1YKw2xR2FaRww9YiTC75vAniWk698rhTYhCX87YPdY",
  "key36": "4wTg6BaxbK3Zwu3BXmQz4Tz5X5wK8Y1fcUG4CYjPrS2X87KFyvQ8DWp1bPt6bKo43zA2eNvUDWQTiX5mtBG57wud",
  "key37": "4wmoAtsNrZ4itEJAcjjLfgHg11TCGRCVbdv5x9rE6TQ6SdoAGg5rGXF2pN7VfxeLBDSeGJuEmzBfoLacjXWS1LKe",
  "key38": "WBQ3WezW3WGSgybMtjaismcfDtxmbi8WJVy9EKCDRhy4raudKjEgTS4bTfhSDLZzAkn4zzFTyFPgBuaQ4iJ6yTM",
  "key39": "2x5uRzXRHU8dsbvj39efUGwap4LVrDNM1ukhsDiRkYqNsNn4zXa7JnjGWpqB9CSS5MqsZxwGhxaJaFpzV8jMN8na",
  "key40": "5gXQMG5drdo6vUyQmiP49fkfyh79TTsZ6JiqAaYXU54yLGS1xfewgNVZpW6etzyjHP3Ro454ZtLft3iuGJQfPwrA",
  "key41": "5aEevxiQn7F8K4a9ehuySenV9ADzrYQoQBND5jLQTMFa8fTmcDB7J8QJH3eovBvMCYm85SKYnKUuCojvbFLtBsT4",
  "key42": "2YGH9PZ4yegtQAyUm1JjDeg7KUwZgY8E9qAjSr32MKvS7fsFyteTnQs9HwvNPvnX3CgAUi9fCumhbNjQdV9HJB7J",
  "key43": "5xiqXY9N5RjqKqsnvpTpVL1vuhpgeSmpeMtKjodgPz9SRJdpNxHgPWSodnn3aVuq5Q1fuYowsmDU6rM3nZxy9FGZ",
  "key44": "E6VonkczwcSaSZzwEeqZFv9msYzSafGEEYMK41zeiWBngyo9NBBVUB5BcrZHXZ8Da3Z7biedFPVFmD45goUSX4j",
  "key45": "61qTv4kkgFRiMJBDGQNoxGnTSDVzUMRV1unDiWGTA7i9aEsv72gaRgJ6UXJKorLeW44HhPyTbrssD6RaVEmupr7m",
  "key46": "4cpa7cP5wFPKXDspPVoegC2T2f5Gwex2h7oZdiSKvP4KZ1xdN9PKaiyVnaU64tXuhSgzVViYpWPBYPpXLG7WTU7b"
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
