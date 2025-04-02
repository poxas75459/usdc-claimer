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
    "MFTDNCkqE1uufeEqPUvogUZ2kc2m7u85TgW84HmhoFMVTwxZB5PRhVxE67HLUpbWAm55AJ49EHyaJYRdT5zaREs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32d3pDjHQrQXRDa9DrTnzZywncjrZSkndtRPCnXiyZATuX7EZSbJnegiBLMJUBnk2cnNgZq5soWp5AkLwaeiRtMV",
  "key1": "25GrPMtJ5uFwBFxEudTASBjcs9uWyZBdgH7b1hp3KJ1r9ukGjtCBNdL9k1rKUv3VbGhjqroXNA5Vf2buMk9HQwDN",
  "key2": "5kbKByvy5EaK5wkaNSGjsbYovgi21vg4BZZ8V3CvR8aCGdAbFFXdXe9ARXy1sCwqytqpBYeaSkaUc9i7Y9ZgNP66",
  "key3": "3YafmZazYHaQsb76aPjk3Jaa9uRTMgHzktLKBtGTvXh7MG23YcCMW7CHRJZRRZQCbVpL2t1gXhZWn1RYGkTAj77X",
  "key4": "3AcSNsTj4m921hDAbHZptWNdJAUEnspWrXKFDpV2utTj7UesSFR4zS1eajULx8vPyWChu3BgKozMShwUweawoy4Y",
  "key5": "kqR9adgQkZGbPQpD9s91bvsES4qg8fnm2oKz8c1kUSq1BnouU1QtuBiVFWMDhoU6zLvpEWRotjdAEtJa3Svo6oo",
  "key6": "5X7uNy54RuNdqRCYrUX4VJfkVEBGSiHRYFFu2oNXTs9L93webeaY5wMQS1cPKzkgVthgEgzPKyDxAPzoQuA76142",
  "key7": "3DNfwJY6Kq79DJ9ryLRDGkmUgeBYbyMPdz9xUy1xt4JheNwFaCPNyAB9GSAPErhviGzMthq29ZBya15RsL2DpYP5",
  "key8": "4dkigJPX4tiGHPimH1jyZiKs5rfoGxxLtFeKwBbT2graW989N328FcDihypSD1K3uLU2w3Kp8j5zVxh1kT7w2Tk9",
  "key9": "LqyAkU5v5KL7fuPShsmt9caR1WAYQsBpmUGESPGp9K8rPFcKqyrDLHu5JWgT8tTtJSfCJiS3h9VNBCJVLrdWx6F",
  "key10": "jPQFq4gzGnpR8Nd5AvzAj1nB8VZthtCuNiMiv7FK1HXaiy6CZ13qPW16znfg1hmQpprV35qtx5S2p1SANud1aAf",
  "key11": "226AR4V62x5XyRTFdGXEtnNUr4NLUh5XfsH6p7ZiNCM4yE9Cu5tK9rkkkvT8f5ZrBVR6TaySZmZWrfb1T5baiopy",
  "key12": "3LfYcTTQvLq1UnpjeC3cPnrPzyeD87c89wo3fioTc1S55MN7HQhvtHsGTJLKGWPto1eXF2aKJy9nzRpXJCqcRBSu",
  "key13": "4MnaCtmADghLHZFJNcQpMq14STUdJq7eJKYrWLj2og5EMkMyGJfgZ3AtDpa7Jb7LEXwAHULV84HCentHYSpWjX8x",
  "key14": "5PVJPiHrXTa7YnMkCrd8vLKKAWh4UCRupAmBbRfFHLZnfPR2zANgVNK2XHUUp1tvorrU1ivWocQXrJjZnfYtnQxR",
  "key15": "2D6ibUhWSMA4KWjUZLmPghp65VjE93TZccaA7tQDAmJ8BTvZTFeaiiHW9En7cPT7w4nNowDc6LXxY6uPnuKiqVoM",
  "key16": "HYUmQS16Q65k2rqwhvGye17LeDWPMcMgmijcECKyT5SBG14K5mKn54hpT6g1mx88tdPP2BbpLbhfj3kuHebZcvi",
  "key17": "4FiBfm94AY87eXZWyPreS5rm5J3KJZvnwb2D1QCzHTnXLBGMbPPNLF6rTnknanRkqskuPWXCFfuTE2r8R36gVGRn",
  "key18": "1j3DQ4XUtFBnuRz7v4NH73Zxh8JcwP38RZrdRfXi7S2GUWP5pF1pQg13HpyMYExAuRzLtomyaaGUP3WVuhuc7M9",
  "key19": "b42p5seTa2Esnmw3PkcCnizAN1cYNzVB3tEtayX22znPC4yGVUbV8eLG8HGPHNq4pETGZsr4tF5kaUQnL1hZiSy",
  "key20": "3DoAbT8osJ4zfhKbScSr9EGD5KxSmzMjhifAii8rpEWadeDKq7RH7eAgXkcsoTPKJSFN4TBwutuRcAEHCoec4QaU",
  "key21": "37F5SSvvYuGoTEeps4uaNDrbphL4AkiFkm6EBGR8XyrurUbQh6MoKEoBGzYrugNC7FCFgw9hkWgnZ4AaKQuc5uUX",
  "key22": "3pZJj4EcS2nqCgxta35N49SehWVXG147PDkNHW92pGRidnwr5HsTkPpoJ5aDpPBtH4j5tMzGVk67gJyfAmLE2Rpp",
  "key23": "3uKdsskNxPAa7R9t1dZCXZmqZWwjDfHernxpe23FuaeTgh8gYWvBV6A5vJxjJsEvgP6upCrtZw2kqSvkzbzgMQMQ",
  "key24": "66z4t5hVBZ28v8sBxyyDr2KdxLF8io6mq4Ez6ycjqCsSjZVu5MfGzC2YD1eXQM1LGtaaFZqZ3JNZ7h3J2euKWR3G",
  "key25": "4thiyzV7ctcYJAtv3iB1bMigzGbiAtsj1n4xbpDzdjTuxLXMaQyYhnhBGHJ71waAy3WTcZpjEpUL57fTxxNnVbjZ",
  "key26": "4Ja74iHMMFP4esemFKrd58tqxorPnp9evkdLNaLPwMqRi9TrwuKtLDzftEvdDvyXqiCJRygYFYQStgApWhNmrMkY"
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
