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
    "4ogzzqCk8uF2vkpKfJ2PiadAki7nyV7XVovofkK5vTQKEpJGG685YT2TWryoZLtMUWsa9fzMakHGksvj3taQ2cZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35PMj5wa8Y4sJErrSv92y3LAE6xyPQWBc7VveDn1mVauZ6QYg7qzXcSxBC7FMYkDHgvprcY8VCX57DCYJMfgEESo",
  "key1": "5XmZA55xCTXWVbCJJsuJraU9z3zWzVhcUJMwMrJfSPq5uXmFLsJHk5AdzbzsHUEttixjhUAdmNHT4ZQ1Z3Pm8TgC",
  "key2": "2zk9ffYis8oL31qjfHkgZhBMXDr8YQimcM7CH5nVGJQAoyimMyfr1Py5ZA9nMyTgrj3oHUxcGZdY2kSaSrZYb6Ff",
  "key3": "4QYfmjTDuKFHCjZWc8LqeCc4y31QrEtbWhqCMUkKVaNWK7yN3QTmKjoPFMHvmcp823Ww7GjpkhNriCyyXtLsK6tk",
  "key4": "3VyQbKi1xk7DdQoUf2yBz8kzx2XPzgvPZjcMs6kNkjjwy2kn9pPqvyHNMqZjaXgs7HopvULX8wWu4XkWKaNtivFn",
  "key5": "pjGeJaHoEGfjgPj3wKDCeQAzhzjmdUaK8Fzgzkb1Fzftd8jSNwrUU2LwUdhX9uGGnZ3TmxvfP2ZrvnPZeFiWqbU",
  "key6": "3TkPMq5v3VZaWMnCaKtH8TeySCzVRtXcmrPYL3mwsPEnpbmptXHGb9Xo4px8MmjbKk8yBj2MhpqwrPyL1kGe7A2r",
  "key7": "3AS4mSceNjqunzJkstjYkVbdGW9pTspkNtMcCWHJHsjcDwXiqVvknDmSNnDtvFofrrk8utEvQucNPWRZPpkuakqQ",
  "key8": "261H52szyiVNkFbRrrdZtKJFM1FeJLA9ZEf4dRvhwH1b4TXugMxdviY2v4BsaMVormit445fZcW7h47quS1XuFCT",
  "key9": "JjCzg3aXaHKhRbQHSyg2sFCewX12PJnvorLqm7iHMpnJ3N4z9MWmFbAcUZDVjVRQsugtaBGH47qGhzGerpLNEVs",
  "key10": "SMMmj8AZwMMpaULArDLhmKpdsQWpdvW829jnteLiN9hLXH8k5EBpeQ3ngERRr1KvKtpoxzjPcU4kcw4vBN4S2zK",
  "key11": "K6t5VhvkstmCSpBaU8ZmPy1Jocs8JPdZ6SKGLoZUHXkQTCCftwUYf3KoYNz7cR8NRqss6szNVMknghvJ7Bb8oLZ",
  "key12": "4WZaw1a7e9AANTJ5J1eihokUsw5GoPx6okkTRPrQWFNWRCMAcXvmvUE7zDUFqie6FxLY3tS8exocYTpuUxfAKJ3T",
  "key13": "4it9Y4G92UxaKcVMHZfxePK1UELbiuTaTJh3fsga174FCBoir8TuZTVDSPWPdMb6zWB8oZMMvFyga6vqFNJ22jUD",
  "key14": "2CPRBHdfpLy1CQ2xCyNkVcVZega82TWP4AUqgxvHnJ4NAjExBQaAauVeXeaM351gd8pe26f1dhAfE84jX4wQoYG2",
  "key15": "66wnHiusBaofReycQ1nQWPVkVVEhAeyrZZ4zyuvtgzotxCcuzpVHpbJ65TevHyitSS9HjKpDoff5PLbqgFsPuYCe",
  "key16": "37swtDdsoyGUYh63TdBSTqXThPXGJBZCcXiMUdZaf3iFV15G1ufE6tG5yEJbcatfjjQQymYTumjAeUk1eKt5vZy9",
  "key17": "2HXrHkzbTbqqozjgCZjaVMMMBXALMmJCMGAAekxDykirdUBFJed1K1A7wGWDWVR6b9SZ3X35pA9MwnY9y5fQnUh2",
  "key18": "5Hrv7Yfdik9iGQZEGtA4iLegZkaPw51eKpyydBUuW48RyNbALRscnAakNRvaL4edqpNaLC2SNY66TuoRaFh7zuXM",
  "key19": "5WU5YN29ASpQXewq1AmdhgdB1NNiBL7QC6LZnDvydK4uNSiaUZm1872nyfdF4H8igk9Khe3e6fmgsburNcbQvHFP",
  "key20": "2NxL2ZAaSRYAPYyhPfhZ3ysHVeogn5grUxKUG3La1UwRnt1XKGXdHrvdcCrd5myGhToJ6mQ7cfPw3LUie4wPXPRD",
  "key21": "vcgxddamiR95PWCfrdFDDkjNQ9z9rwm7pYD1pYubfpUXRzzUsgWJy5KpNh578NNDds5f6RmeTmr6fL5PTSHPKgc",
  "key22": "5Hoj44QVetZuruQr8wgovDFFDArm1TKAR7ZLFZEbd9DPnC76RbrcycaTQ6fTNXHGdAySsdcVgbPbGUixCosKssbh",
  "key23": "283D6bJWEXejtr7DnWmC4phewmwZGDD23z9R3tuTBpyhT6wgP9dx8wgRR8Lr4vY69xFVst1x5CQEDVRiMSmwy4n8",
  "key24": "4u6h6bAxHDemzddPVRnuVG1z4izt8zdQ5jj44GFDxfcrEJPaUTWngvCmm4qHm7zxSvg5PJYA816qjS1XhSkyvzUD",
  "key25": "5rK9gFUEvhoL4qjqYN8UzrSHQhk38DFMDR2buHqHyvT1MbyEoecpB3uMZbruKE4MLtbsADnch9BC4Qh9TmhsNVbi",
  "key26": "5yVjQTja2RPNhsqqx4AhkS4QdX32mBikFLipKpusxFJgEcgaq7ZYQeaAyQX7PVka1t3HP4MtHx1fSELct5c1AFrT",
  "key27": "53HsjzkciDgFKRezDFuddSfxQDvcU2oFzyDdCBDf8yPy13FuVRsJ79zbXXSv5TtzKKdjWC9ZSyRE7wWmQ3YFLMyG",
  "key28": "ocxTKZtXy4gBkngcvmQ3Mh7majydcHwbKggY8Av2wASpEWnubfg8aZTt2m5soyRoTsy4UreGtB2PZbPgbPxz112",
  "key29": "51dw1PVQKySKEvWwfSg3EvEjmGi8Gdgcb3Kx8cp8LizxEfEextWr3T1GtYsCnAJQG48EYZ1Sk8RYL8fdobXoyzVt",
  "key30": "5CBCVnuLDG7g3BnKxNEyRC5M5rDNeLypRkJ3zp9PigJu6K22yNTLJd3U2bBivBU1FL9ZGV9KjsH9HDae1nWdNbTU",
  "key31": "2YgVffqjTLXacf1PvgxCCujYnbqkXoBpnoBBMZ1z8388A1aNQTRfsCRyHAxLTnn5AEXZ3P6vDEUVcprzbHfj22f9",
  "key32": "DBgJzM2b3AGMJovyMVYVscgrgVacKfdZj5owWobzqFZN5S8nvZdzrLS1CJTffU6aM9DJPmarKAcCGEkTY6rV3BQ",
  "key33": "2nxnpD5e83NR7VGLhJMB59dxxVPWZPyxdTwNkwCNmD9CAmiJKiRszckvoZ5kyW7WsbseYrjb4SwfqasEhYTdt57t",
  "key34": "sKiAFeNBLUwDxNWffDZVGojWaNuCYzudposySoF9mWJNKwTizGSHiVxffGEmdSBk5QiYAtZKusBzUbeQZdmZa2k",
  "key35": "d9HyvQALPN4u6Gqys395yDXc6qQ2GRp415EwxixDrjghyGQgjbES2otoipK6Cw5GK5ZVQyq3m6rwEbEA5H8WVCc",
  "key36": "4L8bzQ6SF6V7QQC8M8hZdPZFHQsDJ7nJcK9cPBTAXR22ok1aSNX3TxAZ9scKRsonY6suT74xK6hbue8YbbvGmnos",
  "key37": "3BwntvVNitCfHMLNTKw5kjCscJiJN3zkiXGdsWZe5iMn8CdgyDdemzsntrLMrKJECHvgfN4AVRk7ZSiKG9Bkbwgj",
  "key38": "238b3sgye2SNQsUGPFfVmPQpYBEbCvxS6b3YRFDzGniwtJC47VfqDP2gX6Y5PhnUnWgNaJANuVZNe45azfeks4oJ",
  "key39": "3W2rbFQqc94Hdm14JF2tqY1yz4GYnq8CZmJNsTb5UJt5JC6endC68C7HT8agZyZTpN3VEX4DZwwrFFzmFHm4RLET",
  "key40": "RHQhgZBitpzQjgCZCB5YMf8G7x5WFyBkVNUiL6D9Gmdm36mVqgvQaPQirzGW4yNzb4FpeRR8RTgAtESP67NzGC7",
  "key41": "2jsnYg9dpB1yQrAaQEDDjik26RuvocvTujn68EJXEwBegzAw96nQ91hvB8fZQjHxtVk4JM7QxMmVCrASmFoegz3N"
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
