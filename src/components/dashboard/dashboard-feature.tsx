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
    "4Hv2YrvBDapJNZqkKnt4pA1kabhqFK6ZGfCjQCSeVo36BfUWnodpxcYH2LYQg5p5M9YQDMBFkV3NrBQ51d9cyPKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "387Rz7PR8HtgYXn5dCoPHQKcMWnnUrDeYNQtF3xT8urS46BC2cHaYGA9cp715TKczeVoZ9R7TKN1wV9s99nR7sZt",
  "key1": "5C59azUca63pj6C72ynpknLNxmT9gkLY8JrJZM1YF8jzmuooyeH6MxAiq6zesRBBveV4yafbkvtPUJPMLhXZo965",
  "key2": "59XduxHNfVgZcCSZKwjYVhWCsgVpHarmcYb6mLaSPtNVFDux3miGFiZBreFtYHaxj4bEL5MxxN17QidvfWFMrZx6",
  "key3": "8weGh5NtLKaUXFxXi44gn8akUocwS2t8insy7hmNVKqidHfwCQDpPtgH3qbv3wJHacMqzjXXWP1T2AuLbtbBvdX",
  "key4": "2bhBcmrZNwhQBSSHWeUCYZQkEte3nihWBbyGQxeNM26b7UbdLineNxTHdTFJFJgxG2aiZM1EjepKiF2evdusfXSx",
  "key5": "h5w1BbT3r3TbxhvFfzey7iSbZWnq9vVBXcacJPMAdXWrnJCYH2BoUM2sp9eKYEwKRurRJxUerH66RadjxUoYmxm",
  "key6": "5Azz7KnA7Hvwf7HoUoCRTS5oJYe9FdF6KhkbqPiiHe12FQuQXjMfaJRumom9hJ6F1gDLhZdffUUDPyLqRn5kCMp2",
  "key7": "3p8KBhmu9w5atYh4ictTm5nmqrLHLfWtt4KDhYANrpWrDsEtzBfPz7AgHR6cPU1mWHVxCamAW4nrG79t9jPXvWmw",
  "key8": "43nmF4WgFpgoSGhUibQoG7eBCHZvu1a67pyneM2kFVQvqkfcE7abhXqsoutRG82XPe893wQrosWvuMvxz8Xzi6Vm",
  "key9": "Tc6T8Q6bgUkXThv4offVvm5Svjm99rZCa7wkCZHoiRAMhEFzpLmJSMfhXkU2Dw6xNMxDTiAVpw12jrqPtNKn2iB",
  "key10": "4geHmNun7HjqgdsSQo8n6i3PSxN7mhQS7SSAva37m37iZ1mHLQfq7qb5bsM6NCQeHh6tW6GH5AN2iJXKXdwh1iGD",
  "key11": "3xoLBGWfZdtVtDrafTEKUNV1t9fdCbLnNnLtwCRD1E5fBzoSUgy4wjJc7GbNBdxiZZu1Dxu3LqPJMwyaB3Wp5zec",
  "key12": "3tvVtUMi4DXMoG9WJCi1wU2KAufPv9L1whVru8yekscWqySfqFHLjYzT7QBh6DrcG7Yq9Uf76FdvRk4QwBrNzs9H",
  "key13": "4L2KLT5HUstUQcfqdn9LQqLpXkdiNUoidJkhwjLMkoybQtFNKDY15MyHTMR3zVE7xrGZtLxJas17nLji5itMEC3M",
  "key14": "4UTNrTHWsUHKXtw6SHmFvRMMGGu5uSqXQPXeSBJFEzVPeGA8xMWquN4pszugr1cKujiGmrR5SzJYDvxv4om5Zdd8",
  "key15": "2SVbTLHWCDkFDvre24mGME8mgEi17SBcsn3bp2UrxJGPxdKA2Rq6bNmZPm8ELzvXpBYmeXqpdSLxNvx74TN3fBqw",
  "key16": "3CxqAH8HKB33NaX1DoySyxT3WrHiWPDh7Sztb9SgM7r3h7PcD4Bc1QzJuLpwKMxorDouAA87yRistmVkBvb2e4PE",
  "key17": "jRgX72zREBuaoUg6kuzPVvVrxmdCpPwscFUo5oAZwN5Bfje1Wpvd3JDCuUV9K4sC6qn2z8HZqq2CmqXGBicCuLQ",
  "key18": "43cgp4SckQ8ESYZkNZFgS8scEtmEFQM2AZ5WCMCHTBuoW7JQtU8CzjyiEoDZCP1xDWHBu7R1eyPyysbZwrD7zqcr",
  "key19": "3fSNPBSbGMNKzj36x59WaEuXZnVTvATSAGmcdrHjmx9xwXmutEw9i6Qes3QEhszcMrCu2gNwfut6rd3eSeap13gV",
  "key20": "3vSjNY4JsDWMyUFTmhswFJwv4X6NaTKu7yr7F7MVe3czVMsKEHjWsqo25GkCD9JegFgcjFguVV6DmR5bfm6mcihx",
  "key21": "5KbEwXFgAvBT1aagYxHXhMzjvfynBPyx1cVB3LPuC7V7K1tBnsDXwJ36SYmwRRCzv8sZD3rHHGibQR9HJnusu2QQ",
  "key22": "dc7DLkJB6Nws5W7QykX74idYT3SDuYAhXfcp1x4C54n82uqTp7oGYomEFtHkq69A8gauWXtNuRZXsoyLJUgdNuu",
  "key23": "55DBYYQPai6wJTMDJ7xU4harKUXtTW5TsupdCFN1TQGRCwDRPnndHuUdACTY891pxvCqwnhCPYA7PZ4FY99fhFTv",
  "key24": "5AJrQhcyvm352L4KDZLBFuWSanrnahLgFaxSGHfRcMz4gmi8tz8j6BGzvW6NjXbS54F5PYEaVXQHAsA5FDJbZsr4",
  "key25": "5XURBR1TYSemTmL5KYG4Y45swrXUx9EdarBFYiE6GGBW82z8L3FhJEiRYfojc1rxjMbUnggfTP9dwzrUEgKRdhYL",
  "key26": "44AgbpaNsjj5UupjML9EkHYVCytqXMfyH3kVqUoRduCe2RHD6eCoPjTo4yEHzbNWKcYXTancNRxUr72b7bwpzAQq",
  "key27": "3CJdeTUT14KPCgNeQdGreKx8qYWGgK7LehhLr13p3ZnfUoZ5D3atJY3doGgTyhgrv8w9TusBHiRFa7Y78zaphPpM"
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
