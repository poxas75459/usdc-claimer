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
    "SQCqSoqgGQ7D6GXbnmYuVPsLroTntK8WkqH7QqBBHCPdvoLwD6kHJhhnqFgwNFCAoTk9WgxGyEarh9EUszQLYLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5owpXXPa42fmnaBMEQ2PA4wveDPAHWbwSJakotsRnVqp4CRN3YcqunMDkXt8kE9x9wN4yxXqCp7q2R75f631AWBo",
  "key1": "5rHEtxDa3JvUKUrHQfAMTvtNWBv7VxVoT8o599s8r6VNWe5F7UAAyLCKx7VE731hgkbEgvDSL5Fi49qzcSDL8X37",
  "key2": "2uDsG98ZRPqsHYGBVbhRasm1ospesDyfYxdKPAN7X32szdgCggUNaqUMsMDWw4K9mzRAAiG5BeGsr4WV5SZrK39q",
  "key3": "2dLmMBYTH9m53BAmbuXwomUSSpM3PP6ZVt23u9WCx2kRo8DeatbUYr5L6p7CfEUjo5DgvZrCodv4FMpxBxETdJSN",
  "key4": "5ixLP4CKHXtVW65myMGyUiYQgpMf2pEa5kuvkntSuWqHctVC2Ed1JWSxJZQE3jZFNspSXjYq6awQ9f3EfWd2QN7S",
  "key5": "2ARzKGEqL5rXhgcwZRDdFFYmavE16Ypv55RRQwcgawe54scsuEHeJ5CGc5QVAhyEij6CKUb6yBGKqB7dRjZUpxBa",
  "key6": "BLtZnJmK8RXACZbw49gvrAEHYzWyFEccF4sGcDGoLGSU7sGzRqUWCEZgXkuGpbVGNZHUEhqibNiDFTwxGnRJ5fT",
  "key7": "5ihXvewbqL6GNHoRefBzQgSFWL95dQsPKZoeZaj3h336gnWf9UJGceAeAmRjvNJrGpLBUwpDn6E7qJLShmvyWrzn",
  "key8": "3AsLYTqHjtu1bnwNMyXzqWjgim6R9Ur8367u6rjXtgbd4KiJACKB5WxWUox7VGnkNLJX74tX5RnsJPrKC4sWvgso",
  "key9": "2ZfDVRCEoFzuykUvEwBXuchtDa2TGJ7XTMfCoSXSUVjQN98aW6AsyHh5fgieBBLTP4pcYoNAhZJJmDgVjAyodx1U",
  "key10": "435Bw4VCKAuVtYGcMA8jyq4cWMYCuo8dgdYivRXSk21wCANdNUd9nbANmjEixFdJxeGEysGTjYGM1peyq8hHkubd",
  "key11": "4UyAB3wRk9W27qijkeY3syHd35RMF4uUCQ4sFCZaMQAiWCyz7YR3satofoyYLwC1cbcgcTdgK6SGUtoMPPgnMpWu",
  "key12": "65HtxgNMfiTrLLpU2JedHnmGPcwtPfMuCKqiktqNnPhLA8wvH8ewCc7vM61iTix3rXDQkcMDFDvdrPfxD3tdYX7j",
  "key13": "3FjVepD941DrS75LdLsAdHEbmLkpxn2ZGYNKRjBACqbqJEH85z8sNDGvAQsHqmNx6iHz2KKRUJgowjeGsRPrttUe",
  "key14": "3WPptzKDXLpfHx6G3pq6E5B6rjqeKAWhjXTZLvEEwkTGbf2iwEVTkXq2Ch1N2AfSXVwiV4iJTWrD66GbAnNV5PTK",
  "key15": "3jXzD9Fv4UZPA5i6xUVNN5TzU5rn12ij8QaxCrR8hGQUYsW2MZir9785Fw5JDBK1vH7rETFxajteuwMG9HNPFZiP",
  "key16": "33cdmGZtu6sddhmd59VpFeH9rEwqzKsyJobjMeB3JRgWRarAseXFztYV4gzLSqNXFxekZ8bfY9v34zVn1TxKKCF5",
  "key17": "2Q6x5cbBedWbBQgFEGZGMS6DsdPeKPbEyKr1zM4qag93t1e2FfD621NqAk1Mf2W6uZhN1t82mxBZWP229VHzWthh",
  "key18": "7dn1p5272r3CQKrYFwaPznxyqhWoC66W9dKx5DMQ2f4gu78TT9yzFBBbHcVHXGnX3DVGXzHgemB8HEHLV1LDQYQ",
  "key19": "4YbaTEYqGezsPELoHEeknhku8XTQE4HwFYPLuUGPMVVXJhYfbZYyHJkVeuccvgBoH9FdszBTT9f4mUk7r6qKabGM",
  "key20": "2VzVRZ6CdBHQ6a2owsCbvadPYTvkU6zCUWU6EdU1syUrCHcNX1ufboZzpqQtsF591UNWNzrRkhXrL2rz9QExx4KA",
  "key21": "6Kze9nThFPzc3qprHGzsmHNDPJZnSXBmXRM2wyK1pz4GRopX2giiWYVmz5iNzv3CaJYsLQ6tY9omg9GTprj2W3t",
  "key22": "3tnBLHVMMwL5nqTs7c148NaSh211MLBS3ZfyWHxErNo222mFH2oAG3gFhL2iQiYqCSEZrKT4k9eHg4LDy2pWQSNn",
  "key23": "4MUXSyMRL1GWXRT5zQccdZWjANEVaXkLjWuzNY7VBDe77kqNYY2pK9934L57rA6VYk1Pd1m9c5JkjtwDbEcvCDPS",
  "key24": "2XT9rNB4SmayF5iXL71qUq49ZdabkJDbcHCyQsZiKnyyW28BjoM42aA4tsYD2ftNy9NPrPG1EPB4SCskXon2oH1Z",
  "key25": "3UxayZqW66exDi2xNeP82xrmbZbuK7whFNP55t51ZBXUTdoja68UicEjqY5M6tfrW7pmN6trCRpDqH9ZeQQP6mux",
  "key26": "3dWgeTFuW2cEUbwHQex9d2wT4VpfnstDED73xbaszmFqKbfByrpoP4hkuL5E5N6BPeGzGsRVDgfigRvPo5wsVAnK",
  "key27": "2De2qgsJohS1REnaNgRKS9NSVkzehX8mnMTBXXmAj8pPWe4rzqsfRKGNQz8ryDGs2RtLCWji3MMoNXJerc6dwfqb",
  "key28": "3eJbAKnxv9e61eoSzZ8dySvMjv2rA8R4aEUFGpi6pXb6kCFXCXEn99mHNaAQE59HqTMyAwmfugBE66cWZbMXh13o",
  "key29": "2DYB67S5E788fZNQAqPzaFvqJSTPppMisBtseWaykaNN1eefmu51yEL3m4KBGN84CC3Mvd8maXzdXgiHteSDV9Yv"
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
