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
    "2RiypzFHeUejbuFX2qEjbbvK184izGgB7XbxjtmCzqGZw5DRyMA9q68kVVQChmiUPqM8SkgjfLconfRQp1KH2NTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FLB3dzuozSj4ZAe7V9rURwLy6gkgkKv69mQ16fuQR3HhgPBeKm58ewVDHoaRZ8Hf64fzrVMfHPK32ScE3RgWaVH",
  "key1": "55EB3GnhDJ7JhztmzEicRUQHyW4hsACSQLojwCUYHqYmc2RnpwRHaBp1bjnWT6vZnCLiZovctT2fqbCVGLgfX46m",
  "key2": "4NZvu6mNXVon68SiTx3gaV7fQuQm2HWCRmryTiozKCWzeHEy5zi8BoWY8aw2DSFcnB1by9etLHL7uvkAy4PefDTG",
  "key3": "89U4Vvavw4Mqa1czJZ8Mn8jxYNv7ksKwx41gh2Cya8o4gUopfaqpskHftaHaAwAZYFdW25czQyvi5tKUjELcuYm",
  "key4": "4RRyu1kSMJVRzRAYtJBkiqncZSGrKYwAQKaRfvoPXCmzrA2rfpdaxLrp3h5pwAeQMN8u9BRsFVswGsR8s5Uktkgz",
  "key5": "5YJ8mtZSh34yt3rGJC2WJz4dPv8Qqjfdopdr7i6RaNgpp9upbG6NB7DJboqtKVj8qhWuQyeLeovxvqVJ778sKfZU",
  "key6": "3aEEvZwSPEVqQxmM5jDZTxVJoX2f88YmtUtonE2HnYuLFFKCeAk8rnScdsFtomGCNoDtHx8xpEWK3mQxyKMnysH7",
  "key7": "44MobYwPuJd94ibRBtDGqCidDVzTjRGoJVxa8xUs3eqDjQzfPxz54u4vDWTr6gLVf1GKFJHJfDQ8Cru1AGKDcBn7",
  "key8": "2uiYQyfwHMg43BAWkGDhxeh98yDn73PXuYo3ks7h7DMsGPZRFBH1KV5iVb5ceTQTs3Mg2KYuBoyJ42TL52pe17of",
  "key9": "5mVCQa8FYxQWDB5TpaY5CBp7A7fpRmb7yu5VKzVBQu1gUf9SSTicGjGssf4QnikqjbwbDhYAhgsS9DptSRDFH9RE",
  "key10": "59ZgHSTJFPkrJyWCwzsrStaExExMS7M6X3xdkKSpQmUJmfk7giP1gsLqP7XRpHHAkzu3baMi9DYHQZQiwRUbzRPM",
  "key11": "4yD5cgxaMSGTB7Bkj14TwQtGFQRCTWDs4hLMhniMLEbUutEidvhZncCFJZFj9oZJtufAP9r9VYGj1WXYzwmQG8Y9",
  "key12": "3wf6cj7TMvDT4NGhpyryj7UEvxWPacCrk7fU9mbjyeG6XigmuVagtGgi5m2qADnCtDgy5FdFe1BcDd5gGQ6UjXkz",
  "key13": "4t8GwNM6DiFUXTbe78XM29mJiFt7Sp1Y3sx8Ydp1e3t7Pg3pnby44Dnjz6JmrNu6zVQPsfis8BJcZPVAxvYnFtYn",
  "key14": "4uMW2dCbBegcDWjMCj8LDgauBoHm88Mb4sgUi9hWDpBfRKnfb3AFddraEUfYfA57XDDAjSeXFGzFjQNxaPXfTXD9",
  "key15": "2bJ6K3Qorws6g9yWMCgZnuQRgY54JwCTHkWoqprtJejfqeZG8TVoa3xNpmaC4qvBzkuheSmwTucnmGeuCFYAGUL5",
  "key16": "8JbF9wUZwUEHJiiLtn3STUDVWziRytBuszcE7JM5J78Pb6iqeP6rANsjzaHBmwJniUNLid1XcTSt4DyGUwDHmaS",
  "key17": "ps3D21odAoCNxnWoERYCc8b5xkN5rWeMkzx58CZznzDcqtVMnCUbVdQPrYq8GNHuQQitv4k1irqsoFG2xMs9uiE",
  "key18": "4GX1dM8s7pKvBDpfYNsbtAPDnCZSRU2f16sismnsVmKadXDTVBDJhc2MeobpeXqRsEheiGZ9CozWaTHbTJGb1oaS",
  "key19": "5kks6qG2qsa1JASVVvcU2BgryNoJGK5gh9ahu9ZKmd6LpnQcgXcegyYCRtNfEca8TGJmccxVSrPQKCsBsKv4tPrz",
  "key20": "2UsgpzeCPz4TqC1EnVp6E15ZcW7DrmiqBoFggcuGQXaejZsmptc99sXgpAhtbw5pLazXzhNWMsBjMyiwwV751ee5",
  "key21": "2dSADKDHSECeMryhmxzzkCx8bUiZGXzBq7woRT9AdSRjjXuo5fqenvULebJ1tkbsY6UhLtREdQjKMhAAhY2rzoPQ",
  "key22": "4MfHrmtDSuZ9cfSJE8W49EYNjGrXtxEDSLHxfTBWL1LqmtothAY6UnEX8xSWyggNpqWUSL9pWA8WUJXbaXL326cM",
  "key23": "3TMU2vpzWAF5YSm1QGy2GcVphqDso6qexySMqh6tuvAAyX6ssmpxQ8ucTY5iKhDRPdTJ5fARNxd2LqqU6G6w3eH1",
  "key24": "263o7DvwzvYKZpgZFwqzmhe7sNkeiv9UfChx3DWN5ZMW17LDebgVoTUNyWMPQF3jcboMdvyy72bkei5v9gi41rQ5",
  "key25": "2Erwadetv9zWvChZHbSaaSko2QvPkAirQj5FgmqXhKCDy61wrdXfLTmD1KGcMFX7NHbXGrCK8ZbL8WZGCffpfsWf",
  "key26": "3kpeCiZknaSYWPh7oMEc78ioc2s6SKuqyQU7effaRojBtiVcPLR9ZFpjVNA1jcZCSj3nL2hviWRbDbwzs9LCrdtm",
  "key27": "4ArzP9prhG3FgV5gNhuP13PBKsfqoCMztXRL7GZqD1to5y6wx45eMBAnFXMCp8e1mEW2YdG8YmpcuzQp3gWTGWg9"
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
