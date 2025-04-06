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
    "5rZmakGR4mu2nf8PidyG7sSLr5T4r4fKepN56D1STDH65th9c8j2ncLRv1ch8fewsrxLYcXMX1p5iGXDHaDvgiJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wRF3cptrDr2rDd1pewxYdJ4wCVvinZz6tY6gXrxCaCVCXy3rj3No8iTDAfhEGWTWdVc2TkMGNY13bX48CwE2amH",
  "key1": "43EpYXF7VtFfmGYmGDa7UWCVjwHUcFo3n9DM4qPejKodHQNxUsiaKnUtyUT7efjfczfzTkpdnRF3maSRRbZyyH5B",
  "key2": "5SZ3FUtN3fyfJqPFiztFsMFtsesvXqdEBV4sQyPbnKyZc78si2Gp9esozxiMw4iMN1uTgGBiXZS1tGxJKoTJxaCm",
  "key3": "5r2ETcsRgicBLy9nZ33nkSvkfnn7z1r7DFXVkp1dibSGSbaiSE4emXsGqJDWcVP5SjYdU9aSr8Lzs6zoGygeECM9",
  "key4": "29eXshS6E8Q7yYb9Ag1aAPBZY25NsPJ98qCHhVr1H26DwAY1ih1kf5pRz9aNYBWxjF74BBqby2EHDMrJmJPejJwv",
  "key5": "5rTu2gacMuZmi51bM4Y8QVFPsAguBwpioEMPSwd5MmgJ4QB2tQ7m2dM4cRKrfbsxZrEEDzqaYCs7cNpx3vv6NASz",
  "key6": "2h9tPpD5FB7HBP5ryufMuQXox7hERWQhEMTiAuGCni5w5GqfPurM3YzazsVrFimKYbr62ruvu1LhYfVx76THGyYJ",
  "key7": "2WZq2nT3rUhpnN8thCQWEW2k2QGC3jXbVodT1BKcVGmQBeANKSuW4FShjsA3r8c6ixPVmTBDcaxmsyGM5QD6AdRT",
  "key8": "5ScT9fpAaxcBRWmn9dfAdRy1PSrKk6hFthakt8gmtCiF6e2KytRVUheSKM2zTv4S73AZgj5GCns6TtQh6asG5hUk",
  "key9": "3qVXPsPWXnCFLs4LKh14CJw8zqJMcwHF12RWAjeRTbhagJdBdHGGZCtxem3r1AsDJXUbrUZcTsxfDLoymjguV71o",
  "key10": "5sSPssBcKHko4qhME6xokqHKcWmY4qgdKtU2wCxB7cm6BnwgGQFPQ8AynNib3HEV8Y7z8K6eHHqTnTFdvYQgsNN1",
  "key11": "56VZrTCSjbaBsZbTd4uCteY4jZApf7iyzAENqATLzLrsAb9WbVZbVt4NhHCrC6oThPLRfqFUsT5Ghjzx9mCd4tGn",
  "key12": "PZrqtrmJRn4r1HjRTH59Vavdprz5aDnJPWremsMgzjgD5e3qLdMHZLuLJSfRLz2HiFFJCR7EiaMR8Q8MmDArWJq",
  "key13": "2mzywwdbh29FTcbsPzVtZck88hrNmUNXConqEuXXQ6e7ArQj77if3bF7t96gVHpEhpmtBLpmLyv6ztiSR7cz8dxP",
  "key14": "31ugD9SaE6jn3QmRz7trThodrqbL2qHUVNgJfBxCYZCvcCXeSgCegfqz6tVsBwmoXG5EVQLTsqgdqtWLD5RrASTA",
  "key15": "2sDgLjYpZD3aNieSpb7fixbxvSyR4sE2vwsQ6GiJj4s23DtoVwvFzhYHBG8EWnLWoPkMDtXm3n7ukLP8ph7juHMY",
  "key16": "tn4AWZ7YFyWqfPSynDdbZjmHcht3HRHiQbQDYPdHcuCcAueHBbhciR9zgEBRLuUhYs4aP8ah8iVLraPXPT9L475",
  "key17": "2AsLb5wwFCVq4x9FkHpheuFXSAufA2fsqBmtsVdVxY1YXdKENhrfkyohHTwvo1SvAXZNHJMn6PxQopGqtfKr7Pm1",
  "key18": "4QQ2x18EAujEv53Coiuv85mgXV4N948KGJ2V2PaMGtux1SxuoL28ZwJTgnPxWRA5isLNeneyjrgfUWM5CGciBWFY",
  "key19": "3wCpTngGk87wiXs9niZF8F7rKhmMJkK9C21cjtzsJXYfMgnEQkghKJ6RTLVXwoE9VeqWU6KEu77DLLi3mptyuv2G",
  "key20": "56aLFh9uS1core5pTmKHnLVAjjEhHoqcGnrD1JZ4d9TrQVPXCMKzxxMFNtg5HZfKXbY16dhoQ8HXagpj6rCUbDgF",
  "key21": "k6WGk13BjHYXtBsXTSNjKqjBmaz3t4wCo866F67zdRXTH9NBPiHsNkVpUq13imzoydG5Ps296iv8CJ4VkeWcV9X",
  "key22": "311aiMCb9XC6aMeVmKYBMd7KeMC4hnKqBV4ZQUTtHWhWNqEUv32hb834yA9hfYA3ZELTAMcvuuy2dNQCpA8k7m5p",
  "key23": "4XSXRTd65NGivjr52J868NkLzBgM1sK9EQGVjgTy2uooMkqUMB18NoBsuimyRihfaKcGqF8AbyazZFEDX5Gn295e",
  "key24": "AEc1Avhbw19jddGvM2VnoEoFaJmVjpQ95mtfXrPBRsmkTwvJ5nbCgRzdLXP9n7hdRiQkzCnpNMymcHGvL4Ddeaj",
  "key25": "3Jq5yV1mwt1XxG3hcDVpHURFDLphgud9wK9w4nDLTffTRFTVtqucMuTEj2Xoewcc88MSK4quYQSCqByKLNaHD2rb",
  "key26": "2KqWJXgk9X7BftyVRtend2V6KQG8fwbYqzJHCJjMbFtHbqjmm6a2HgmroYjforXsqV9vHb2hSZ1qGwczTqDNbU5i",
  "key27": "34bSoWFP5WMpHz8aEZP8nrJZe9eeeFuhWTBFy7tC6Te2G1CQPdnhBx3zo8rdr7DKUcpDLhAEDu7zq1MQ4f6oiTBh",
  "key28": "2Qzj8Gqu97mWYmbdAQ2Xq5SzTE4ftYuJQZk7JnnyVfVZoBhREsqWbmvxsZTUGKUpZAdciN6hryUbbAUvGZMye5J4"
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
