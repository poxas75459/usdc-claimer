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
    "2PBEHEFkFf7FCu8Je8FxAPHPA7PXhioyMyRFxjS8qxoXsPjWBPLGdJ6MC8K73daZ6aN4QDacYAmJe2VNHD1uszvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZ86VwRmNPxdSUaAwK9oLUz8PjTNTz6H42s8H4cmTX6cMMSA8gtJqzt8SdkxvHx7cELRP51rDSBSz5J3xrsXwK8",
  "key1": "59hqqCqkcQfT3NcNa4XW8yDEpnUKMLpUaZAfTNSxPfvhvk41FBttWjogbbpFdu1zFjds2Ypovusso2yaR2yAaBop",
  "key2": "4U6NjFB8va9TTduaUaubhhe5gFEmavnnyX2yYd9yZUZttoSnvPy5EBZYQqCiu8DfnGNMBrmsZmUJiCaNUdHmP8XK",
  "key3": "3neDVRTQJ5pSu5pWLgjThWB7DD6Bb65f4yaUUkKDmbtnEBpVK4Xbc5qxiSGVEVcfsbTqHSWSi3W85uRZU5miHZjZ",
  "key4": "2WruhNxcwqTkPcFNg6Q8KBRyoAbnKssbJecNSDjX9ZgrRdn97LNsMPRZgsERTpZ6haMa1NMRdE5YeYg1tCTXzGYx",
  "key5": "CYCqkFTLictHJvuqhGYzsGPKgHwJo2Lq8DfNSC7Vasx4cdBBjSXDeL4FbSeEgfcfLWyCTdi8kUrES5XbuAe3h6K",
  "key6": "ctL4Q7W9adxkz2nhmjCL8aSTvjzjKdhsCi8Vf97HU6BqVog1RbAMiRczPstCMdoMYbc7Wjo9RZmNGGrgDVYBBrS",
  "key7": "47RVq27fdoKU3kcwpBfxNNynjEmcRWLBP3HaBPAvuzzmxGy8wmKCixf3Qh8CVrGoQreRx934qN9FtxLyAN5F6f3k",
  "key8": "35tsSGmXEFikE4vV9kZJUKhNjpD46S1Cx2t6HAe3EShAZD978t7GFQzuLnf7DCadJYcho3ZTE1rFcfY441jg1mzp",
  "key9": "2AFE73p9gf6akE9FHscsNZfj9yFKicfZGTkFVZAxZUTHwevDMm4MrAF8RT6cuWFhGtWbWDjbCrtXDdK8uerCCHo8",
  "key10": "5NuJ8yCVaRd6GzA2T4mwFgN1Tj3bAkXpKRZtQmkNrXU93TMjhzHBLj5gnWceDPa4FT29RGKjz3Mm6vin2RCGH1EC",
  "key11": "28H2BMgfUKHDEoRABywR1L7NsQYKBjiQV8hHbL9L3ZhbDmDznzSQMyoAXXHNtKWWBte2cXyrLtnair6tanapqm6p",
  "key12": "4i6AdUVsbdJfm7ztYcaePZRX6LNvjHWkaeVXbQ4E1f7FNY8XRXLm9SCXyTc5oxB9kadnQoUDUteTPzjZjYcnRR4U",
  "key13": "4CMyH6onpMHQgppKQ9KZd3TbWerbWUyiFwRRs9zHEkTgRvfnPwU9Q4TNGkcBh67z3uHQufbgTmKmJvKgddfmPanY",
  "key14": "5ioVFiL4k6AqUidqMvDs9cjJG3CW78qo79ywLfr9kjQtzt1XpBEBn87buHMXjjqSeNFCvwJPzun4Pm5nyiAxe6dD",
  "key15": "394fZWYW4ktyoSoNHLfNJF3S558JJVcPouvdoZGCJan4WobTqERXgGiP7F3gL4smTQX9fG19Lr9CXYvSMothMZo5",
  "key16": "2UdFdr1Q9XvNjePCP2v1qzMvnFjTL8TX7fcef9QAZRvxn5ws3VxjvVfzvDH7TSZqgEBAPKohyomsGvLMvYiLnPp6",
  "key17": "2tZ542sywGVG8TbHUyq8q1YLVijas7PjhkcRRz9GDFfSXTjDSLj5RxhrJeVv9MYz1mBDsSbodyrzNxDPnzWqryF8",
  "key18": "45vQbpMTgcPsZwore1Jco2fcDjy93vFT1bP1iqdUckzKfaJPoKwB7n7YosyyLnU7TXKLUcSbuKTrb2Esrc868fKp",
  "key19": "2P7TuBUKeiJ7k3hc1wkTti8PNFNoZRbAMnPNvG5z9jBWkzkkTA8MQjJX2a1Cs8WnW4ZskyZGEHzop9HKY2xSLbj",
  "key20": "5yvBgh8v2QrTJEUnpUqY49zSQh3GUtrkG5qpESfoPhC13uKg2QfeF5sHfvS7j7nYR7Gq6HXUd9bAbLzCTVCThfkq",
  "key21": "127Pk1aAjdjjWcWGeawZAtsDWAGTHvi7m3msQkb8Agnojsftp842dXCxSB98ikWWkJAdYTjcaymdtyxY2KfAiJXR",
  "key22": "2HjLcbUyVhigC8ddPFvnXmuRb8SjtDm14Gr49vwEBhba8iE2sR9hDmy3dQHgLGcixaVHGgdX2ss7arAP8TDfRQpz",
  "key23": "5nrKsvrXhcXHADaSHjrb7ytnEw5vkBKtj7khY7QofC7Fs2XqQGgw98RHohMUNPDBtjsouHj73NtvocpemrKZPeaR",
  "key24": "cUT7WPCJLJbxPqwstQotozJRU2ZsEdeEbrtpLzD1cTwX26fcu52GgSqGm564f4jZjaH1wQuTRLFtKLzfGNeBFPA",
  "key25": "2ew9Mpsx4ZZYF2tjnfuNEDmW99h5odFxjz9CXtnumd3wPvoqJJKExLh69rZ2EHEySwXMSZm6vDf7CBQ6Q7dquH9Z",
  "key26": "38zBg8uhmvd2JdGSUvsTiD5hu8kCqh4jjAAibbQ8zdmLvdY4P9HbLmHsn9FnL2YQevLzTazinrfxpxkXvLXrunGi",
  "key27": "jG6TA9MzwidXQesfkawmxKpuxFeihEZtEAS5mLgfgNC6hFpGpNdxyU1veBJVMbhJfRevqetmxwffL7uy7fiW5JW",
  "key28": "5yvnsKgQtdzFkfNNFHY3xhSqMG7REuFLEC3Wfv1eibieqMWJZNm7i8eWKBfcHnnSJwCEDEcdSsH4sx6SS2pRotGC",
  "key29": "Ebnt4ijV9CyHsJuxkwYS9kEFAHvh3nydvb8g2H1yfrPFDgJgiq8FpgVosCuE82b72x7h9bsDYe9dNKkBKSCky8w",
  "key30": "3fYEK4uQarccfe6Lfx5u555Nd27wURecVqwpUtcZZEifaVa1X6n1XJWncT9CtttZDmQ66j7Z8P6PYhUdXv3Gviv2",
  "key31": "4943XZejiHgrF2ckiMNY4vUeonpzm5KNzbLTjvZQZwdzuyemVTWub3ng2ymMHhguRZgtB77QAcDTSnpEWPYEPkTG",
  "key32": "3RpZFMDNeLqXEq83Agc6DqtR5kJR2pwpjh3uAztW5WmrvRtRoKVgXNkh9U7rDE2CAnDUaa6nSQSyFHaXUm3qofUz",
  "key33": "5J1RHwW6pVmu3bm6pNRw5sLYGtnTZZDRUtavd4cTAMEbKiuvWkiMuJsaozJfKmBS5ug8Qi8NtcSGzZBtayujNzKW",
  "key34": "4pFNVxh2g3AaLRf3skRyRgopyVDabb8gE62xS3aNxKkxK7ZHdaZVwZua6ay2ELpTqx9wGAyw3ECyH2xX6paAx9rg",
  "key35": "aWj5UE5R8Bhqu29gXURReCg2S4CRPPBjJKw2QpbbAg5rAPEQHNkBnSokSect22gATpqbacRVujXQA7NaZNMXbwB",
  "key36": "2jQrFV5ntagf9oqmAdf481rHMQagpH4LprkMM2CKu4xgkyekpZshH6dXQLCR3nPdhWMyGj85jRmZo35NcY8cXj55",
  "key37": "5UjWdWM5PUFR4ADFRZ7VusUHSNZsAJA2QcWRM94rdrjD6FHJmBPeUDN88RLcfidgaqNq7A9TheJ9tWQL2CtYx45c",
  "key38": "ZXNwHEAW1vwSxW8fcmWJCr73N8fVo2zSXJ5TiRpwcxJuaLE6ZTA3h4cN3ZQ5c96YGsG8MmJ8j8aQbuccR1vRHdk",
  "key39": "2Ws6ebDxsiCgvE857PtiGrm2yTTLZNodi6h5w8ixBf4H4jFaGzNgoh4xMge2bzC6k4xLsnFRDYf1apLxRi7U7iiU",
  "key40": "2cevwEGKfjfaPbB1gVEYFK39VhN9QMjHmNAspLLmAk6GZJtgbe5WRqdgX1qVhUv14EzLThbNACC44XZz4BLB1ETo",
  "key41": "4JBFQ28DF33PKheS1tenDStwBtDY2SFzMeD58r9ZTWcbNBUhVf1Ff4GdccmeEVqEaqPGQe4KnXnNsNLLzLZkDmqS",
  "key42": "5ynk13LazfZWyVQbJzySCMVf3LX6W6BNLoZvkBj4fuhawPGAniim4Fpk7EaBmgyD8th8o2aPcgWWsSE6UdcL8oCU",
  "key43": "BLFpiEPjMxsZ7eUf921KGZpUybKT1CK6KEitWtKfkNt9b1K9WDtq4Hs6TccdaVaNBQTDKejHccWULA933NWZqdf",
  "key44": "2kGsNFfrF1ZXNBk2x9PcGEd4zZPoNkG8d2boBZtgYQQ4TumMLHLe16znMGVC89177YCWmQkMAUo5Y8kFQMLk41pj",
  "key45": "2zEL2p62wxxQgLM3VE1Wq3yPiSeVnmZiU3nLDBA27VKgLczgaSzBt11mt4fr2UuQauFXuRbhMTFcxGLWkFo6JHft",
  "key46": "3JCTcjJ9UCVi85iprkoDkS6HQfkZVF3c4PqS7zfXcCyPPp9KLkzKAGbi9GxwHTKGj8dV371NYPNWruS9yHeBhCnz",
  "key47": "641zdma2ed7ex9vqHBnCdxG26VrDnDAsQ61ECc9VwdrqAFftfH755db49AZK2jjK74xggqHY7nMuMiLW3nbQw6Cf",
  "key48": "2R7NYsfyqCA2K6ny3hGuAzaRTAQLhc7nPk93symjDRQvcsyEtCV7ah7ZLHu2kzZ6xktBidZZnknU9pPRSRXGBgb2"
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
