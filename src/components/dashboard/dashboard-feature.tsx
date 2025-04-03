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
    "uhgS91nipySicYRcJhrTSvybZg2YMUAHpP5NGXvDmFD9KNGi2ine7gKDEkAGXiA8sedGxW6S7hHGFDFFXckxyGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XACB1Uf1UQ29dLPcweZg4Myz5L1KopxbPPBjs9smYqzKkDVg72ogD8N9tubmdnnukPggLZNEe5D8bXBseTVWkgq",
  "key1": "5kJtmSmuqXqadDCXEgxqnDYmB7TQbVRdzXiSTrx1ov6uTkMpgxQskNmBEDpqm3S1G5WDVYy2HjAUTrANbW7XNQcq",
  "key2": "LrnBRhJRcAFQYenRoi38bLcmtVuWTr1EWSgLu6mHKL95HLrFW8NWrtN4qN2jKLePEzUEncPXpZWaYKtZjHKNLic",
  "key3": "4tStVfP38zKCrHAEqYmgvNkTWXkSKn647cM5GzSeL6F7S5BZsXq5HhPGQVi8bf1y1xxGKGrzcfmPTZcbRHcYn5Gk",
  "key4": "5VB1Tmw1QfMtbasWNAwcJncLrMhDNkeNh7Cb2Avsr116AjFFwwinwvKY6csbj3J1hAxfY51x9K9BhpiJWde2KSh4",
  "key5": "4nozvfqijyhWLZKdzA6TrQ2mPfVKnBnvL1zovZmtGr8nJQTTBwKzkb95gTDv6h3uHKCWV1cv3RzmeLRNWLDpWtTq",
  "key6": "4nEUQYYJStQ8TL1KEfTiv6TEKv9KxoHj92EozekMwptfGAJDycKgSTDiUeHUf4p6wGxDjd1HScLYzE3yf7BWDALs",
  "key7": "2sLYbdo36BG3TkVwoqLsr8rDxRMz75gScBf4wzXEqtTwbHQv14nAm1JRmFWcYbDK579yjN7nsBqM96SSe3FMcuei",
  "key8": "2HU5AbHe4ktFfGaAXZmuX1cvqTUtxoh6gM2o9UdkPnf8ETM72EVSG2c1yT1hMn86hgeeNKpPfCpKBvhHtAKKMr9h",
  "key9": "5aYo12qHxBAEGdCwztAeoYBBdfHZmk3tFXVmgG9z6Rr9nEABwN8AYPjbHHZ2pSafaBPRvAN2Nvh7YLks1BS5BVfT",
  "key10": "49Aa7mGSh7VvzaMLWhYFJT78bFzDK52h8npTNGPiy6LVM6tKqB2XEX66X5GqDu2wUeeYzc5aNzGUM9MBF2YMW2aj",
  "key11": "3vWZfXF6xMJUfYhzhjCZyHygjgVDhkyBVtWWVWdPWrdHK386a4GkVUWP4FabTDDRvsH2mSUvivwUcPcV3bdifhH7",
  "key12": "5Uef5xMiZU4cUQPHTwoQjfV8f1Dt26XiduyFw28mi4q3TD5TaWS5cWMwohZXaDCCYBHs52E4bz3cJpWtrQ8wuW78",
  "key13": "4WJhAhJnjih37d4ibvEU8Y5kwPPUu8NXTcKUMTVTUWBSLMTq7ujBbf3GkAsXGSoYAqYELe7QKWsNEFJ8ntqA4M5r",
  "key14": "4GMVx4QbXZxyH1p5b9vQtdc2cJLJHq1ne67qud8VtCGNGLGT9u8bmTo11sGsyZ17V35xXu79LNPGB6iFrzFsywsY",
  "key15": "67h1G1t3uBPFm8ffURwFPVCCqeuKsAoHvF4S1JYh6dyhihDUMjpaqyr79NePTGZ24v5GKTxMgFUkP59QupdYa2Yh",
  "key16": "spSeLdqsJuGPjiJkG4gf6GYX9d8q5E98f2AEGxiqRbo769CLL9sdfyvscS2kys89ZDiYHgL9CdGsFsvWw9FhD7E",
  "key17": "5bfZRsoAXnN1CUdHsf7KPqLNJAZ9xB2yXf9xAPDNRj7vaMsUZTPZmJqSp2Rykvo7RvW75oqHu6WzUkbTmFGMYXwT",
  "key18": "2ztLTm31fbGuez1rTTgBpya5meGM6ctuE5KAygorMX2DVieWq5wXsgM8HquFqQkpn7n8x4wP88kJWB65wwBybsfK",
  "key19": "2QbkLmLBRT8W1qrCr7wdgYHrMkUCoXWZx9tnxAvsRVXstyHFNX27MFZdowYpSJHaUrKxuyRD1pEdWLXTyevY46ej",
  "key20": "3Tbi2G892viQcC3cxP2Sr9gmFB9DgwWYUzszc11LuaGvf8AbQDUDCtugPFTZo4W1gb9GfC5658LwucywDgivw7AD",
  "key21": "2v8B1GxkSocumiNFvy8TVYdaGE8BXxZeh83G1BfwkDgdQ96RoUMWByZF6iH2ZQcoP646xDbYjkj9kL66WrrZHeAx",
  "key22": "GLdTXE51inaYCPRCpWscsb6JRGd8DVVCi9Z1THvBH5LbdpZbmL93sa89zpYEQH2cHKUzCtT37JMiUf7XR5YA9VE",
  "key23": "3VhVtRHWu9RsZum9JVnHbyKpMXN3MZtBcrKMQCLL8FVdKNtUZFGyRbStJ5kvc9U8FjL1NEa8uDdghYbGVXXGTq4p",
  "key24": "574EUnsUscLaoWgu9vLrDAcPhZNsQyse9FyXrLqxHcKB2SDqsaD83g1qydhY3AUmgLQVK5ERFEbPgoT7rpR8Qy6R",
  "key25": "2HcTF4YUqkbo9VdCD8bHxWMEtYovoLjqDAb2cwmk6RG1ywMYcrNSrv3igRv6fLkeWUgkEy4Utzht6s9Q4NHpM3gY",
  "key26": "3mQ8W7gtvpFc21na8cvUUuibJZEzeBv9A4h1vA8r5YffZRRgjomdWNVP6JPHsZew4tfMzcNQc3YBdWwRu1NZ1erM",
  "key27": "2fv8ugcZxgs2PFPMyrdBVu3pdMMbpBMn8W39dA83Z4CUSaQrtTqaaYwQ6VkyvYdt2ccE2npgscqf2bZFwgFKgxVY",
  "key28": "4tQBQFDceeNpQFMi24J3rS4qgU9Pz9345LkefF96n7K6RJt7cTTpPTsa2rhKGZHZCPGQskx7YsQTTVVo9KktgP4c",
  "key29": "4uNKe4hEY6aNpkMYXc2xxhAiHatf6Fg3k4vQqTBrVigq4t5TciaQWggu7yDPGYete9bvwyaCagr6oTKKyEqB9ngJ",
  "key30": "3jUpGyWDqyvjzeGdK7zKhPo4MujxczpLmMvarEpcoXUdZN39ckHodqYN6n4v74NxkvHofzm6rBMbSdNwmzHtPXxw",
  "key31": "21oGwoa4Qd89dyCdYNHXCNBxAn3WN2pXQ722U5VK38goRp4Ep8VbSuWqFeAGBjWm5nnTF1T5zHFN578Cmmc9F1Em",
  "key32": "5UzSzgLV8yy9RbUM7t6U8DrqA2dyjb3D7FCJoR7C49kQWAWgNiWXdfdridq8bj7uGFTeRE6tBUg8ap8wEKTDAUsw",
  "key33": "G7Vqw4Gn1T327mjnJD2D4DaTD5dRLEXeggR2sAoseH3xerQvwi6VKh5PuHAi71oNiYvNJbqMnhYrRnQavkRLUcU",
  "key34": "4E94MNuVRNhfee1uuve1j36JuiCN2yfKb4p88mXVpxoBy34vRW6HfVaEynvb421fqARXtU2R2CT5KXB65H86ogqW",
  "key35": "3tVrQPgqHGuTXTg2B7mDEHJGKc5pw8CcSfqT9tBQ4SzmwjiKeBroUcAVSXoBr2Fq18VpPtrdj3WrZD3SsdNA1NHr",
  "key36": "544JpkZxEjxMxXQMpdf1hiXLwa7TJ2JXxTe7epFJHaRLNzZve6uEzbZ1r7W7DRBUmS8AkNkTUV8vmgd4DuXUcE2C",
  "key37": "3QSUSHwV21STqYYNn6Am8gMFXkpuEnoEgV513xiQo2aUed5kmGPDSii9H3XVAjwLcKTqFLgmj4Rdf698FpxQu9ZZ",
  "key38": "4WUPgPvgy2mD4qxDonPHPXzMavYEPadfPkdyZVyZACTc5PX61FivjgeHJ8a5maqcBH85y18V4tzbMV6MM6Y4zqNr",
  "key39": "2VCQLvMvVncPrrkkPpXLuZVCyNzpVvJGdxmDRUx78V1ZiwdCgDoDG8GtVBa74bUukHhUBxpDiMAha9jkMmLnfDaF",
  "key40": "523LJ8z8RW5mhqLuChbR8H7GiBn2frG4grEJV8PYWAcn7SR7PcLPcr1Fke3hj8ioacPkSfkjQnJw5jEzEz4YCai2",
  "key41": "4zaHqjuRUvyu2Batd4zDYoTcx9Hn6JkUf9F7FqCDrH5BjuYAWrVgWqynCoHVwy2CfZMnbnmJpJJqK8nAnnpSoh4T",
  "key42": "4MKuBy5duuo6nR4qut1n9NonhRxcLTMnjA4PFVFhh4i1eg1HHoqU9g2r8jC9rwNqJ5bZxZZ57erePZD8uVvgQ3x2",
  "key43": "C4G6dNfL2jPzxagDm9YgZSyswP2TCQbDntERrFGT41j5cY73nuvm7Fxtonrd1L7WvaqWPcD1GTrvxQTLX394aKh",
  "key44": "zfogEt9h6p6hfjJaWoH3h8jGAQ4o5Rt3LcYNPWWqsXm7iQx3Xh7P8kKHXzpYiHscALzseAB5SaGRat5PrzfSy9Z",
  "key45": "44C69L3YhR9e9f3HhiZtYZM8W6wmX2NcE2QsoYtA8nxFye1ys93Fjj1VQG5jY59ABFGCfQLactFXusxHGxa9tRmz",
  "key46": "iC3vViRXAteQWWCwZ6R9e25r2usgW32xsAabrBuT3WJ3to9u63V6e8pFnmkkcwJLTRKzxQftpVDaa7DDP4x4fFL",
  "key47": "2QTZz9sjDKfkg44E6hmk6sraxKrFZpSnQVtDXwgQ6nB7ZGkoLCY4Sm9Kt3mfUQpFR5z9aPo5HSH22BxQR9ReTvkZ"
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
