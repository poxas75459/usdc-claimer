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
    "5geNHh3YtMrVCaEfGhNT9CggNnxjV6ky4VkEe96rzixe13kJSoCPDajwCkLs2ijTF8PtXWBjedtdpnHZZgyGXvkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ZgJnwPzyNwDBUztjL3DmzMx3pKpvSpyiMFCRrtZE5pxJDLE46krZLMyaReUZCz8Z6AmFXCQSQujFABTRSdfMBn",
  "key1": "4offPk1FDX9JqMSNnR5EobfyKF9dGWkg14GXkuyn9EXwQFCnncfsSNgfRQBUCaSMtRcPLSEcLy2Wt6W7ZPfZKw7j",
  "key2": "3tpZcMJgEV8ZAmgxDGhgMjYWYBR7ULKArCwKpWQL62Xv9mwgeLVhuFkXK2QKHXfDVdvrMGXqokPH5znTHFHdSCxS",
  "key3": "4kRomuTSFq6Hm7c2fyptZ6a7VRPsxT1RStvgRzoRoRH3P81icnPXHCmUYAEc2ZsTHSjRjgp8Mgye4zq6ebSNma4F",
  "key4": "LAD7XFiJZj1pwH39Q2bJtbzXHXgwhJYKSsxJyUrn7w82ScbEQvX65E5XCFb32aT4dMMdbkNtDs5a1ZssQ95uUfd",
  "key5": "4jQCRTLuQp72LGeDajenXCMd9AhVeFfjAnNywFUP4DREf5pgg6Q6qtDC8jybt7RKVXzdV2DrkwgH2KopqfJCuq8G",
  "key6": "7eNe8aCum5S5GvcHep846ws3LUrJG49zhaiLnDFB7QWBueHUWMufxFAWn7zBEei21ixX7yRyDBENLREJsz5CtLf",
  "key7": "2QD8gVDAx5Ph2R4F3f9m86icD53aUzKfECaE1wVguBGnz5hBRbKG9BaVCYE8SpisbXqagK8tQk9212ScZruh54Hu",
  "key8": "3uBVYUEXfqRsAvaUCPcTRDNtQwnFweCiA1NzDtzg7T8vxzFfCdPfeAbPppoAmZEpJfLRrYxN4kDhtLivyLADsv7A",
  "key9": "tHoLSvQhNzxxi3X4txtLj3Wr7TfmKHxKoWFimLwfCq5kZ5qtVjzyf2mpoFeXz6DzjPvZr1B31MFETgFMnrtFScL",
  "key10": "4vMKpGMuCwgHQfGyhXdxryHQRmE4CiDx1Y2btYFnixUxvBdxDNJM6HpYYVgFMc3jyVd4ZAQHWUhKXCDVWzDM2RC",
  "key11": "4HiXZW1ExtgA2rC9ioftBwD7K5z1AnVmT1Lpdomd4Fvdm5n7CRF8vKq5f9ErKZamHvtubDrsii5PEA3ZaFhKr2ZU",
  "key12": "2i7ABbAHCYW9AmGrCsPVggaB6NB4aL5ezntkMEpuovgyFjptRXCGnLGPA889X46HB7GHXYfmESZZDZmjXK4tbAyD",
  "key13": "2d3pRqX9URWw2ydAs37tU5cVBo21RqcVrXA9EKj8eBJZPc2GWTi9U7feLjFbYp8LX1JgBpLkQZT2suzRDuGtn1UL",
  "key14": "2FMmZHcLYVNe5GGxrfk8X3x6zraRDv2Agh8tDQR1DnqDXPVioA7tCedqayCS9rk5db9jVPzHuzCFaxPsJfsLsHXb",
  "key15": "54fYr36j52FkueiEaVnoibxSWQz1bJza8xPCWHkMXeEAeZP6u3KDcmz2YEhjLB5YLJHu9EaCoFAbuVgJffT4kZdL",
  "key16": "5JT6HTqYbjEcz9UqtVfDWkZtw5UdWGuYA7wdtEzLqJU2MuoiNrQ6t2kBDTGhFBo2J194AFqfrjXdFjCyT1yGLuzR",
  "key17": "3h24vrP5YH9BNs4Z4Jehq2rxBSaFhmvw8kiEp95HCesxdWkB23NZZpamFNXGZdTUTsPbSBtS2BKaPiC2Yo1JuVtj",
  "key18": "5fFZfDAZJCdMGcEm5zjz6xhxpvzhekMty3psKjjFmr5oKpAM7QrgasMWhEuhBXwwsLN8cQM2aGaS5EzqqEfpSoJj",
  "key19": "5YTWF3jJvx4mqKUECBJt32uyxFMhRnBKuhF67jf5YvRzvhNQC5BLgX7LQAYccgR4mUg76zCRFN7gWiFENgKfk7As",
  "key20": "4AvfUucxHn4N8sqQhorAcHAi6vmaPSYeQmqHhyhY4QgfMkSoF5pEDe9m41eKBzEc1MyTjiFqJyRE7DrwsrLW2iTQ",
  "key21": "3XbCxSnvG86e1JbBMhpq6kantQbhWJYM9T5LPtDuUJj14SaCpeTk47GqiA8M9Zf4zd9XeEHgyXmVLSSQjGo9RAMK",
  "key22": "8UThdTfb9CQeGML9piKTsmh5vBRRJwgy9L4z56qq3LVPb4PNWzEPsAqNbRoXK293Pz5yMvM14kJ1AEHo5wUzrnM",
  "key23": "5TH1k9ooxmetkJuZ6j8jh4uYoTd2z5qKF8hYarRMFuMiimjsQP2GnRvz92PSovr7t3BKT5x7ozdkiPaM2Usvm2XD",
  "key24": "32q3FQNGHkYDxRkKhBwPgsm8AaAgz7BuNCGnYddCQPTW8oKQEqgyaLYYTXHh4DV2T4cVVem4H4MbSyuiumdrKua9",
  "key25": "2KymkAzWnpwvXjjCTgh9VhneZNX7BTrmTdxxChLaBJRA6sAYPJu25yWmVtBDa9tRBk5rDJDqoPPMj8HgyoSiqwhh",
  "key26": "33uBULqtVTiTLE1nbxkGCHE1N3gChfFSSrBif2aKCmByjLjQPAMEV3bBoozHj49gMZG7rMH9hX37wiKi6ANSSgdn",
  "key27": "2HSTSH8hCrxpAuQXeS4Bz2MVXuB37CWnV4jMScz3BNGXSbng8cSHBbPvjKe1NJoM1bPdEYtbHdtMak5ASMvcM8Lk"
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
