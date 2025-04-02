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
    "4VtHKsJzo6x9AdLdEcSDoYtb29HB8Jxsg9i535VbByG6EWphG4vTybiepdXdoLPTm2ZTneEMuzmLQQ9JpyFWbiE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EhVvSZ3GmwJktKVLb4Gp9hDof5kQjzKY9m4YcTGBmmTWZQTBvqYZ9diVVD7jYYJ3zJYfGnXfrYH2P54YrmxtvgD",
  "key1": "jbth5ELVLGfDkZp63hF2wt8DdmzhdQjwfVHYAfMXi68Z8JJqZAuZzwtE4uVx1ffsx8u5KQkn2yefkbKtMgQ4eb7",
  "key2": "fJ4poAk47DPbBv3LrdZwdWQYkxhNM9vg4dDpE3VSX4Vgo5QvTvpqScdmp8qQM1VBZLHQrX2tVXGM79GbSSZLXgf",
  "key3": "5wr9XoiJitvw5CGiTZmoqgZuuaCyXu7pj9qfzei6oWecJCqwsHy4DXPsiULaU5RkTLYmjV6q3SResaBiqNJjDMrR",
  "key4": "4iGLyerZZjwQjNz12TmikewaRRkmoLxcQLV3XUi5sJwn8xyy3Tk8UPM6g2jRhaujH15Y4GhUgZWCJ7SJC1pXquTT",
  "key5": "4ajvJf5qqP5XJpDS31cBozr49Ze9WrPAAF2TxndUrtVfPgyMPQuQ7MQTrqpkjrf2aqCtnm8UuxKUZfjCdZXfi4nJ",
  "key6": "4DULpeQR23Ei8kdEXGZEawTyYcZeByo4WoaqDSLs4gbye4Cvxmkm7Ci4nK3AHEYnkMErqqHZtAjpFNSaFhgH5Gat",
  "key7": "4zwsnFxwxBcL3usWmoj5Czdekc7ouLNsgpf3vf6LnZ1sLYUZe9Xb4NDiMs53TvGdBR7sPNwCMu81LqUXUBnCTrJN",
  "key8": "677YbzEeb6S2GxBsFes7V5W8VNWwhrQSeKpcWXKPTkBnqBa4wpN1MpLH7fxmVFcUXjKSBKqxMB7Y5pd9Aq2Lp8y4",
  "key9": "4qtQAMtNFfzzS6VMFKE4ytq11AaDgjTaHgPQhAVkNb3nXywhCQa313V7pgXxRebjuUWaqYcs8uakdhxgkjaKAkx2",
  "key10": "4WQXQmPttMB2ew7XPTsuwuiMwMPtxTWZiaNXgcLSgPbUyy6rf8znWKc3G8Ny2aGp2R65TrGEwcQcFQJeMqjT1v5",
  "key11": "5V8SYYj19aw5b2nURgUtLHod6EQWZ2u8U6wPJ72NDQRoY92MjT4LrEPLmJ1qjAVZFRX8jXsPbJ56wEeTBE1rq4Eb",
  "key12": "3NNgYDayE8u41UVioZjiqdCA3J7wLWiPq6A7Z5PaUCjpTWu2YJyiFZ9EneytJhAy1WirrpT5DPEMSzdyhauXeVYK",
  "key13": "YeYohiT7FYSXS4nJUKcKWM2fa7U4bGvYeRsHSpCfrob31cav4AsBHQ26RYog8G4wqHpVJGf2z3fn4mT5Eiu6exq",
  "key14": "VWdLrQ4CfnjS2cNQVQimeWhSh7aGZCJWzuAc8MEJao71KE1kuMnDu95dgEwt9PCCWpqqitRHQrLSYezPwSytEcY",
  "key15": "4zbGgHxAUXFinWXzCyD8twSr32fkLrpMx1CuUXBDGEZBMG4QCqRWY9JUZBevoWyENaH7aJv1Fv91HwFU6ppAVtZE",
  "key16": "4Z9zSfamfn1dLjwzW4UmCkiqM6YpM4NzYyupRFTCeVvfEGpd79LArhQhpH3in5To4izXKk4xk8humW2aUaqAA11P",
  "key17": "4uhYjpM3EC9BZwfvEgy6ciSCXxG2EkbgTnsKE1J3gGP5YmH1Xqbx1X2Ty3sMZNHTxzYYeDe8Pz2LrLx3MJ8zcCjN",
  "key18": "3iuFZapnG5idmZnYpza7CcPZ1RwSsgz2Ga6HNNewGNrdRZJyw7QLkwDBbKqTwryrabuJzKtw2E2HsuQbwHpWX4Y1",
  "key19": "4zLWTneYKBhGjyyetJMGyC2eBcWKENjSA7TSJ7sowQg4WgYzNScKAwCfJ4bro9nT2JUqfJpphwzxszhFdLAx8rb7",
  "key20": "41iyDedyhzzysQZBdzUXFFS3mnaReyUEUbRaK3RRi3qVXpje98KWsdnHDzBvgcTjGs8cLdf6aBnu83HK4a56WcYZ",
  "key21": "2SCN5tKqdFsafS418ogSaFQPeMwW7kiYKMfkGtM5EcaRHu7yoKpzoKUFXdRmukppJimfRViStqA9CvDop5F3MFgp",
  "key22": "2tBo989EdZEjV2M5k783ouUN8ps3VAsQD1E4P67q52dGnUhgZcmykMW6AXdsUpB2wEpYFpaDtKYJXrPKFhjzNFDV",
  "key23": "4ZzVUTyoiuVFR4hWtoqrLAbJFX7MwN3jYL2wjPGhJWYiqinXynA2VSh2uoN6bRvXZVvB3M8ATAxVpuMK98cFRX3v",
  "key24": "5bW45AaV3Es7XFnpZtHR4kYprWYrhN8bJYnR3Tmz3W5zVJK18Q2qWsju7iwNMzmMwer2DQzW2kmzmY1uknGAm2pH",
  "key25": "2mjjhKMbWtjVguXJZJd9jhjuGBSdvVLVhtdrcZhA63TM2Q111e85VuWszfkUospwrwfKXFcopb3PG1rPNWTc5WAU"
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
