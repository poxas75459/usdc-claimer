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
    "mRB4az2usKtAfu3QKb6nb8jM7VYdu9XKEzsda8bXXi9Fd2fUuSLSzpY5HoYfHeVgG3LNcwiwkMjvrLTp5GSowQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AjDthLEMiKV959NU6oYSHWJ1uejS5kzUmmoGg1jqFHhXLgVaKghFLSYtitcuLS3qX6FE2VWHWnvQz7UPm1uD69a",
  "key1": "4P7LbQyj2S42XFFyP2peBVvCsHRZhqieDH2jJo9Dy5Sa9wtd8c9YtXys9x456HEnbnM5bZGxdyBZVG9m1oKms8PR",
  "key2": "4pN3Hsr2GTFUJM5RfGuTbYqCSnchRBYVA4TuUk5gnGwujWtGwBE9W66LR9bf3BiNjZMe6oPfD7hfkfg6dc7o1vTg",
  "key3": "NTMK7MhokPYZ4j6kcHJFReMRJuda5PTGaR94h2zCNs5utkotDf67GsepfSk9hSBKjFY73HQrpLaATfWyEPT7kaC",
  "key4": "3j9ostyNDa6FpRbKRPiaFstUQZBA75hCKxDTQbbxU7efVoYRynvMRPyqEmDPsYgbk5uzmnaeyZfE4nPYvWL7jBP4",
  "key5": "4K6FmKzfGgd5RRJoP8kj1WLSBHykTwBzfCt8ycy3M7cXVMLy3Bp8z4s8hiX64kuhdsxbM6rTdbqxF3AwJk6FWRcy",
  "key6": "5YCsgzHrmMRaQuFAvTfiPBiYxapUQVhFbTH5bggqELBAAytbpzrgD66PbpkaJ8N1S23gHqZTaoNBskK7DFfQbTH3",
  "key7": "5QPagnuFA3yKb7f3bQcNa1Jb2p3vGMwoYHbXZQWvBr4JTukzSSUJrFZZ9JiLvWxet3Hv5va1hW8iBLw7NAu8ZyLT",
  "key8": "2zmcuANwLtBKhDatdj54igtayqjY1F5PodutHtJq6ktim1hy42pH24XMqp1rrjg6CzAaqjeQNAbBVdKXF5KJsbCp",
  "key9": "SXNhsDcE9gUjfZywguVS6vJkaXrx4HhKPkTCNWC4U2QbPCRYMwF1NkroDcYwD9mTSxCm4vDzqSA7qEd3jvvyTQJ",
  "key10": "5dNLQCfx8WjYYs8SCy12kKQbJPoyNupc9vZz4nUbJKVqBNAGhxqPYHvscAyiPi488b7dq64dwjfwhveYyz9PDLH7",
  "key11": "2AGZ8v4CVtp1ivQzfncGcf6UV1o97itc351StQCfThLQY4yPbw9nSU98qVs8xFdYNk7oU4KS7Sn52KauKXToF3Zo",
  "key12": "3fXUC7fza6tKV9bTMoPJ3JxXWzjeSqMHcUkvNLehFu5yg5KM3UV1aGB2Bnp1m4Yqq3Fyyu98q43yuKeVGCs3uKd",
  "key13": "477rNXRpY5jpeFHt8cxHEx5JncwaZn9B5NRfBf5txyKv1nw17LLzvqTH9NaDUf3tf1zME4ah4XS64yL5YYsLqwyp",
  "key14": "3Yq3aniTNnUnkELpJLqzjzBPF5adLYhkK2M4vSgTTngKXkgDDvyP6qKpNFHPWux3XfN1r6bRq55v3TN2EaYMYLdW",
  "key15": "4ZdEuDL57JP62X3DcWiVdyDST5nXSuX9EksuBTs8oK4ZWwqJFtKwdVPn8sxUMeYVoa4A654Huxc6Yi9FM7RmvHhN",
  "key16": "5aX9mrywWZt8mFAviAjF6H8NGGUanDBSxA8tf9EJpFQ1qutCbHdMK4srsovcv7XVi2xgy3ynoqkYJ2W9AkNTz1vN",
  "key17": "5iGFFSEGRQEYt66RLyZCDDCurCe6bQvQfr7EbYquVDoD8wMndgD4GyH3rxqzbhXztNErNyUePLCnMyGjoSMBTT8j",
  "key18": "3znYYV6T99TKwqJ7xnJi8h563LVK16KM4XjrSLvmTwZhhkmyEH4BBWhgFB2twti8zTWXANqeuM9wncj371xBC7xv",
  "key19": "257xn1XU6H5GEDRCAL8UQz1L2hjniMzzjqg4K5VumCma1iPQ9jtRQWHhVNbJFe7SWvd1QGkeHV4LxAAPnxi5jBWG",
  "key20": "5CV9Ff5P3KEUKDQLQzVCt1Z8nnNiLhsdPe519pd7rrqKz6QhhkZXRFEx77oKAxpsRprdXnfbnaAVwKQiL9Daqjib",
  "key21": "3pnGwvAM7ibhsNVaxbBj7khtT5djSFV43cG8E27iVzCLWLgUV1Gd3FkJW8VdPzfwkTKQVhJX7ZjW6sGNwFgFg3ci",
  "key22": "42SvmnLTLvmEYers6eNLHXgpwGWs4EKqBQh5CbdUEYrZpMj2p857cnig1WExNdC3XmvpBaBUrhu9r1JavLQNCLB7",
  "key23": "4Ya8XUjhaUP6Q29bXfrFwASCAr6qxnDfUxug8dVPoKF4QvvCMyFza9c7u1d6AC23Ug1zX1c8yrdRbVENkW5Pjqxh",
  "key24": "2jjthyWqFDXFwT4kZRpLKsReipgAPW6wxNjTjUMCBzPcqe2jC2wXvy4vwasC1DorLBA2g6qnP8RECB9P9qbmKJvP"
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
