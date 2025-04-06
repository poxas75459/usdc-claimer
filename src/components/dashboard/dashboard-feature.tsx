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
    "Dj7XWgmiY8LDqN5eZhMNJHWCqTpfrVC3PYC4BpNxprHaJYieGKh7m1qkLNpDNRqLTZzyiL2CPexXf9CQE5WaLLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35awihJEdz6TVQcSzyRXYdYt6sZk5eVivEgQpWxVfeNn95sHbJHnWXwEaK3ktWUjmoEBR6uaWMc52sd1PbxkiXC8",
  "key1": "4UjfVhM9XTzJ6Ep4CM1MtwnqzBsHGXu1KdAEQST5N5CxeyoUqgwQv7TKbQbLzJHvtHJYWXfPkUDaRZvWrbtM5DTT",
  "key2": "2PhkQCSD918eH23uEzP57TtGR41QUru3KREWRfV6GQ1a2wk7qqRgxy43vDxZotBge1pHd9mca1N7LpzcXKd8CZk5",
  "key3": "5SswMTTeZr9Ks55qt3ysEQbQdWfunBC3knAL6U82iKoWNJv13nUX3UpdMukDegPMdNpQEkSUJ8H6E94HLxqCigeY",
  "key4": "niKxUWErbUeGP8LgZSrb8ijAHhYgbJZCBpZbCpMXJfUdk82c4jR11bxAYKSCKWg67Leypejbx8Eq5ac6R8USSek",
  "key5": "3m2PwdNQPZDrH43CXvtJFddqx9NRDrWYADBvvD9L82fAWpcBuZCVbvRmD2rnoQQH3GHovLrRDgp6hoWUtqRx4N2N",
  "key6": "hnGsZLtmSfrjqP6VnAjbzpXPtvpqV7GKSRxyBvMVjeNaNT3HNNgx6ywubL1RPTj1Msg6hkwc5wAWfbEJSwJmGmY",
  "key7": "4abit1LuzQG2bamxtC1yX3S6Pkp9SDaMQYvLrQABVeX5Xkme1pDHBCPctVuSQum3eiUtgcU2kPmMy4rCP2szyb4o",
  "key8": "bdxF28rPvAf69hzuyKt2temi9oAC927G5nAwGsgFBtqANSudfH1wNmgSsmMHEfKMtUwQeiZyGeVCfpQSf5TAcVY",
  "key9": "5DuaBsyntG7SWa8shNcD3XBxwAMn2M5uNTKpLZ67q8zGNeE6MTtPopde1wZXu3eJmdoqn8pfemRCoEJMUvUUDHTb",
  "key10": "4nVvZykkWtTQdLcmMasqwdzgXwR8dqRGk8wLgVKMwjhgPYoz51rd5weyXoXzXV1goKoLTmNTvYXxcg495wCYA8MD",
  "key11": "2VSDLRY2fQ3Wo61hFjvtrmtLbAqv8bpNF6oz54Z2bAU48zHyP3BMP8ya8zugSagxgm7UJk2Abvs8CDbNAS1G1xnf",
  "key12": "25QBCZ6iso53aQ8Ry8srAe6tL9aJwcmuEMLBRRAT69DQzU1Fmih5sNLURYrZ129FXVoFJehPkfesDZS3Vw6eiSue",
  "key13": "2FVF5Cgiqpdu7PRoGX74iXsoBXYg5fhmMri8paAj6XUWxFVpXGiZt7gAmLK1Rxh7VMfwtiEZ75V6AwLsZPdP3Phe",
  "key14": "3b8mC2HfpebwUX47LN2HYkkHxNZ6nLhWpsayJfD99hCgBheb6JJQjetnPBH5hW2R3wrc4xQ1n9hsfbL2gkc75Q9W",
  "key15": "4Rs5zEK9rqPz58BL25x5JY7Bfz6o8fvbawJYaWXw9ZhAh683zpnHBKooRp3sTKmt6z6Piv3ZNiGxcc7HrjVRw7Vb",
  "key16": "4Kyo9K9eP92Tu6CzqJ8UeD9qdtuTT1ZACfd7uzreu8vVnPeUv31Caqaq8PaYXXW62QfyLoCZR2QUDmNmkMLXxw4j",
  "key17": "5HtrQE7efSnvREgNbTghLkfcTkRYJ6VEgwkXsEMcKjX9adoZ1WhrLFiSMvQ7nDRrT1bNBVmB17RfR3wtU5h9vkZD",
  "key18": "3tinZ3XttxGyZwx5oz6zmbaLTrW2EcAXFtHnKKh3728QDXoMR8LXSWaNgbCVLfYDMDaAR6qGY1tuJr9LJLKcwRd1",
  "key19": "5dofD1VWEta8tTTCJoXAnbLm9AY6MP9zqiJ3jbbEnHQTGC6PVb9npajtipBpXETkcNmVMVcCRMyT4jju1CwHvVxf",
  "key20": "4or1APR4sYfNtW3yAXkasbNFKuYRYm2PjbLKeZPmmbAh9a7joA1UU6B55K8c94AHJqNKk2sy7eDiQYw9mrSwguLv",
  "key21": "4mngRSr7qJWN7Xd6SsvM3gTV7YZePfowhbiMUoYZ5Lr5UjhcobC3jF82PywMfjWU8F9XexxrmFrwLpMtZb36j9wZ",
  "key22": "5tCcyo6Vzc7AMmEge6ERR4jdh1xp5rCrccHXy4AM9Rov5tofy4m3PDKwN52VPz7CBmwsMnk55Qb19fFNuth7gQR2",
  "key23": "ToBtMurpvUFn6FS2k7uo4R1jqypB8Gq6NK463YjZ2essM7mJLPCtcX5FxRC7wppsJXWmwKgap81vpEDn9xvZ5Hh",
  "key24": "2tDe9RpgF2uAwQ5JhQ9e8DAhat3zqr6FMVHssRU9KpY9octBUmmAd16tHsc8BUF6QhZKPdPyAeLFrfLNQTz2K6BP"
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
