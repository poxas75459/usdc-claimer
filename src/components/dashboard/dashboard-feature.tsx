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
    "283fbmKkdjYXLodKPbv6SGw8SdVuea4hpyEp1jR7XSGwsNvbZ7D2p18zuPkAEkmMeK1aTSWaLvvJVXzVGC7MjuMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PVuQsr3Mu2XwKviCTYSbLvaMe5K8uphbVusbgVK5oyXv75uB5td1V584L7JiV8DjeJPCHopBsk14qwwABnPy76D",
  "key1": "4DrFKtMNe9rW7dUy3FGcMEtpjYNnx1eDaZ5i5EeWjEAxDEnd3YJNjHTnuEgJPLSSvGxS9ctnf5Aq1SopLsLQk8ka",
  "key2": "Bj1vWc24hFukheaV5NghCGLhz6kUziktVrriC1GcXmrruGWXv3oxmsGm6mx3eUjBEQyckCTa28edHULnPQMxZZx",
  "key3": "4TWhmnwWiHEknVW9vsDqSYqxNNnwioK4hyXEodiTFUbA7HkVPQp3Uc5FRE2c8Tfu8vxYqqT5AGfGnW7zHKMyymZ2",
  "key4": "28XQazhMrey1tRcDtb8ABbveQZMUSctDEDSvqUp3jfzbyoaX8Leqt4vrMvxqC2DTLiZmfmK5xeXJWtSFMD9s3n2m",
  "key5": "AUYiAs8xkGg4sLigtYQTpKzqbpjjjerZh95taEPP9nAtFy3NeZ1SvaRUPoDeAEZ3GrhUS37thEQnLSrdLCMkUSx",
  "key6": "2fXbxCinMKZbUC943LQps46fuS68z7BFNASZUstB5wVjWLp3gRRL3NALVcw36gAmwQhfzMN57Ckq4xzk2S9yZ9tE",
  "key7": "5t2CXM1v7ByKWPhnHiSfr4tdY6UTZvqiNNVecZPiykf14BMBwz7N6by3QvWgkfwzQM1ubte2EajrS31Ssvcgv99v",
  "key8": "4tZvNinC1Yy4kH2jUFLQzZBk6H4VEbE6GTm2miPYouY5JYyU985fMTodHhW9erkF2J7NiM9cBatS3vevXRYN7zHE",
  "key9": "3nxNY5AgasL3CLnArCvzK3hCVvX4gZYxfX9iitNCxaEn2TVnhcp9vKqiBhsFq7MYq71T87ZH8577EekTtp2Dpmt",
  "key10": "4xq77wds8tPrjSAqVyFCCFgkiaUfFozvHvu33uXUUfvpZ7Rfzep7tpShWN5QSDrjqP18CXiHQnVtQfEEnHbYD2Rt",
  "key11": "2syWuf999qyocFFKUDt4vfe9orF8yxt6sgA8tUvpnHZK2wyZRN4u68Qyv2NsiqHVWLff6xnacjD8ThEG9t9Z1mhu",
  "key12": "2oXE6kCm5kRoPfHwdRbxgcCM8ZLChosWZENqWxM9kSAmm2y4CwhwsmWesJbUnSc21Hp8bjS4ApNceJGHKtq1SuKq",
  "key13": "2amk5u9Advapvx9vFycHtVcK4qZf1uorhJpA6y5qEsWRxbH3AzfwzTmrdsfx5AFrBT6Y3A1YGVZtQqSmS5drfBjD",
  "key14": "q2c8n8dqyA7XhWTHXBfR5ct7Vr3D4ZMKjUB91qpQ43PMjytyex3CJsoQ9EWmpqDi3rrA3kov913163wBVvKDYWY",
  "key15": "5uzKYhSbxaRTzRTeLxAfUkoipT29rqi7P8dTUGufthw8yWvgAga3dTAccXqRsb94fvsuLCdMNYR955rYe1EpghuJ",
  "key16": "4fYcHqUfBF5E7pcAbHcySYxEyUT7ADzEMhwA45Zp3mbaDWccjvcL6rsGn4gqxe5fGENeRrAnKZPd8iagwQuFKrsg",
  "key17": "24fey8xTyeq4u7scXTr4KN2tDeEGAFQEQ6kBZ6FahcroHF8tnuh7jpcs4xUgMNHUguX1DHg17PBg87oq4a2McShA",
  "key18": "4AdWmCdUY7dgiMgDCkh7YTFbbPCzQLYYLKxo11LZW3MT3zuHkN36vcQb2xpUQaKuUWzhVbUE5ovcn6vkimLmu2UF",
  "key19": "2JepkaHR9JUDG5BijmKeLTAd41arNwateHhQqDTFuDdrAVXVEiTLjMFz918hRa4HsPZG5A6ec1QvJdn1EkMbcS9c",
  "key20": "mprajz4rcizDZjMvGxZTjK2VJWSdMYAs92BeMeW7uenxvnq5CQMZczGzcBR3LTMCyPBvk9KZRmdGYhSoYB9dA1o",
  "key21": "3YSxjKNXNrixb5txvfpn3jvfAnG9rthyGedoQeJhdRAPmeSEoLKAnFmEq2cwGHZ94FeNB7ZmaG9m6hGnYZZko8pL",
  "key22": "MUJaKFZzhTMNjqhGhtNN5Q6npeZqS4wf73LwFukyTtVxwhpEx6noPcyPZZPkEn1FzD6pyiY15B5AJUBPr991prg",
  "key23": "3a6QpAPcrv5jytXegXFMBUz2erapxSpmUYzyGUcqc2uK4joo7yPULS3Jk5TCMzNbQKcy9tu9uCcFCCpxeDGPuCdE",
  "key24": "4Dch1EiErQeBYiwNXqJxi1NVCzbwFG1K6MWTr2kVHceJJTgSQfYR9kd7nxEXt5s7jDvEuihMV36LD44x2j5hzpYx",
  "key25": "2oE6xqr4kDyZMW3ZReUvWEzNAL1sbTvuQQ3DYDBnLAaZgaFK3PHQXVqTGWqNRhfApCjLcXy2NvTTv9ikwt9FFP2o"
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
