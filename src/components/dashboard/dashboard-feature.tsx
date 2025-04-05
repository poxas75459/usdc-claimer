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
    "5HHHTU8wn8QDy8TFc8gQZHLNgibtnJUm4jHHoFuwxTwcj3azsgqVcSjL21vYFUvjrLBxVebXvhGBo6XijpMUmGLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44LtzJuWG5DmkjeitZZcp3zNMK7ot9Drzkt5vVk5ySCb2kvix7jgubpiYTUAHJoVEvHVRHdAMGMLu4esUScjs8yh",
  "key1": "3Ercc3N9aNbJEuKZtiGwpxMWuPeD9cdnB9DiGWKeDiiAmbYNYNujvDshPucSZgdgMSGmfdrCmn8sCZkqXaq7pfxT",
  "key2": "2TJRBUikWwxJyo77xpSDdMS5BDSvLtmRgH2PFVoam6xrdEiuArTmjGPzW6oY6VaQ64iqmKCWqzRaEznDiU4bQWCc",
  "key3": "2Sjh5mYPipKAfW9WnqrCU33Bh6eCXZ21mLVqn4Y9JVrZvhUA9uq2SpwpexYAF9fWpEBLrW99KYrL5Whj1qGCvMPb",
  "key4": "2ZyZbZ98ewH4DzRbckPLMhLnKws4ed9TFKQct8aX3q5iEXsXQhpkQQRhzt37WR74nkFiPEc4n6YGHvGZG6fwKErm",
  "key5": "DpxsewwKrAJNDXwjYb1gKzsUovDx53PnD6RT5YHhwEK9H8JDLQR4ffeEr8GH1uY19b3xCPGq2N9aqjZ27yp9rrE",
  "key6": "5G64E3SeTDH51MDBaTF71b9GvhEhSJccgHWmUNQY3KHWYvUh6zmpMyL3s2Bur8hRLxc8xFMCpKh4jtqEBuYaCJUn",
  "key7": "5h5H2CiVK8DPaYLRjm9NeeZvh93z7zHWPvNkknXBGtpp8hR2N1L5qU6wmgpSmyNkXaFc5S8Q3LTVooZ3wp1g2f7C",
  "key8": "3cYmJSVGAR85LhqzNC8TsC39ajKVod3Ez8qBATJam4QRBWS5uSi15iW1kBzXLUDFovMJmRnisRcuTYF5ERa3HyYE",
  "key9": "4ZtuRCTNyAiyPrioC4j8HGRWUGRqFqPFHcTfbtNh8fMLh1X4JEm4R4YfGK6o2CogAdSKVtkZ4o1LdRaeKxBFiqfr",
  "key10": "3Bdy6EsbCQ2PFMA4iAmPDQQdts6EnNVDu2vagkbDCyomqA7SQ5tGaYATtcfQYV44XHotNpHsLdd2mdWVU4CTK7ee",
  "key11": "a2dA7ughys1p73dnoYMqo9wxt5t3pYxA7oF4N1WSWABinqPK1c5F796prZyK2SDxiim4eSawkAzTxHHpi2LUfZH",
  "key12": "4RzG1U8n5PNM1bp8CdE2SRg5LpSoUqQz2LLCKPx4cj4QxucfE4WNRM4ghCrV7YsegrDf8yLU8FXiW58GnkKdZvme",
  "key13": "5MGeTAJ4GHc5B3m2BbCMZ6DKEviuvW8AHNy3TfyKgBj3iMafwMFWee2BGmREeNihqg9aNK8UJjiedpVPyGgwzHsQ",
  "key14": "yMp3mYzmaQg8UBiRaPc9QCkpytyQ8EGKE1CJjgn6BztNvB5R4GqQ6maGjmA3KS6snHeGEcY55haG59a5AQuNTgD",
  "key15": "3cRetC4yaRexCzhwrciRBf6vJ8ahr2dWTJQ9o9JDghGPjMwtJrhtcndLwFKmfxRQyo7usQ5tb6xQeVQHunRsjF5t",
  "key16": "4R7giL2mu5MCRwutSWfGdyuEAJybcozFSVLZVAqqqzfL9JR6bzjcgz9gDrQfYdbixtYczshdgLf7xAuXmjNLZFB6",
  "key17": "5ATRARWQpFR1zmm2U9VU4HGkZtaYzdyLip2zHfuCTszrgR12GbtWdvGxYEcy46525avd7ibxTYSJ82JXUanWFsaj",
  "key18": "5aPKriLKiyW6yRZwi3uRc51hn6kjYwq8C63Vbs9AzG9GD17tmTFZkvwxYx8CkTtsWsvbdUEv3zn9VWUfhrkz36bn",
  "key19": "2K4DB8F7219rBh2Ww563tCVhRogXdFYXiKVEp5E2rLPsZtFqZ5W1khuz3HxgHMdPG8RGoW9wsYQ1hk3EAs1BQRDn",
  "key20": "2J2gUmbtCkJENPxonpsX6ckAHypEM62RhJSiKGvmXwPaHv3oV3rzjBhb1LDYXox7CSCJrUE2z3BRfvn2Bbw5pP94",
  "key21": "T8gqqwdru48r4QRa96cBVYsfZfcMZsa2zqs42eH3TApyMV5cFzZBnz9xUX6MFqcy9tBqVZZawM8tJRWoMhb1q3G",
  "key22": "3ssWMH34ziqowtgb6kHCsTREESabhk8Kq1jXDCQ6V47pPohXdQfK9kvGyoWo8MctK8kNXHxzU3Jo53uCHv8uToS1",
  "key23": "4v6qE5Xp2N2YYLjpXLiEPCbvtzvU3gUajp1KcxYnHhBS1FkHCgUEzmUZS4yfTbUUTEGqV328YNWboyJWM3xXf5nR",
  "key24": "skH44i3ZDsvf16mTJ9vksbtumjKWoBczCFmRFgU5ZXhAmUsfHewth5p276CCDcoisXvekYriRUSRHF2jt81ppQj",
  "key25": "u3M8qXii7WE8ScrCD9MobJb1iY8XWxzU9Ui1Yd2pDpP4TMdQxiag9T5xC3q9Gf64tiNCP3rYPy7nc5ry4rfEoKC",
  "key26": "3o9LYi2w8WXPmAn4eBg1A7R6yuQwzndJLsEfs2fmjpuLvNL8NpQCovCMwXgmxMqMVBYroC9SYbpeoMNonQGAJ9h9",
  "key27": "TY6tc3WVM2Dvb2xkWgS7c8Ny7iHNChq7VeEYvUPttVKXsVyY9aFnxYeaSY5dgdR6teSPN1damcsFbcfRy59LtKL",
  "key28": "4b7c2RaCgjvwn2Gd2t1MgZ91tY8NFN9rgPXsgHBmRYMzgdBSnQeWTZAj22fQPS5utaP82NHtX9MV7Fikgbt6iwXq"
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
