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
    "4dJB8rGvjHMfuQ38VLLovQ2D88mynBGcbwvcFngwNtxri1nKEXwX3HiUKUPEaKTG7nHUAziz1EE6PtcTwY38BcVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kGTA71DKM4tUPakSNZDdmwpFedgDABqyTwVNTDSR6tADGMojPprH8KzHEKXD46AoqL6DJ6Qmu1Mif93LgihB3G3",
  "key1": "24aLeppozhmhT1h6ZhnJhVwcUDbUcM9bmAajbiNMaQGqcbJEZsKXc8pcZki71hfggAraYvFsjtwUiWjBfVjjkMZ2",
  "key2": "2NNUuGLhMkAfs42bnzj9AUFc9tLkuqfntuTTGxK18dkbvzY7ZvJad6szYM6yGWy3ExxNeSELquY4PWrn2Re8dYd5",
  "key3": "NbdR9BxQLfYZ1dJiyVMFqs5yVgAYKUqfEFbShV2CYvCBh6PkPw54XcwTDhzPtAq3nQDw2mhtRDomipjb6kEEGTz",
  "key4": "63M4zquRzaYZMybtfzynxm6v78WSV2oNCUe4omrJ9bVsDuVC7m8wsWeSxfPkpaPPg9aVpNxhQyas1tAfEkgwqnfc",
  "key5": "53supoFFoPAxeCjU37nSRN3L8QHBMWsKyvh4bKzC5CmNfXHDYUN9opX2sdEnYeob7tQbjN4GkN4vxf82b5KeYATU",
  "key6": "fYNzBRF9kx9L9mJzGTAiWw1cBhcYJbEydP1roQ4FgejcxsTFcEfytpWR8zdGuPmTYJ4SLdhRtoZmp85Ygj654QF",
  "key7": "2T1ZJYu6nWEsK9sbwQx7vLBTUa5KLyd5EXtKhweeBAP9Tvnb9HcKQdxrMRcgBmtYv6GVh8XtfLcPLuWZrw128wSh",
  "key8": "65KYRoZpxLje2nJQCCUi4Em3PQf5u6WMH9DuEWpxxXxguGxZf7isnZVfeWqpsad9WUnPWUZbDUk28PZa7qJC4pTz",
  "key9": "22K6xSGjX6dXGpwrCT8JDTvaB5DztwqUvxN2YKV2oFDMuANRcoyYeLb1RFWc4KKB13f8GbEm8QUsFxobiKKyEixN",
  "key10": "2Mh3kg8vmrZBBq9eWNA3pniFvCdG2CvdeDVEonfkwuRMewGngV279bJhSegKidVTFHNTUE7HzPDZZQ9Qtt6bAoM",
  "key11": "2z8hyS9MdxrSXufEzdzxTz86Mx7957wXttsHoHYzF7MewFxDZERmvLW7CasskerhUpSb3e2qKxHnPw5J2h8mBLMF",
  "key12": "k9j5XNdVovPDwwjy2PM6EHcnBh3532E3ovaSk1D9RY846EpENTSgBWWPjaqccismb9rgMLEdZVXNekMheKsxgxq",
  "key13": "4w2jBRY4HW8DdUtRn4sBJVEYNCkqbj7d8AZpG9HXHapAXv9dC1XHdFMgXCtGsigQZcb6QEVLPub4tJbMQUWTaq4h",
  "key14": "3chX9RxyFs5bwGxvSx4mtxf7bbUdNVtzunJ5hHUv8rwNcUsN9K3CPfmFZ5Jd5MCriuAsinCvQmCreJom92Yv7R6F",
  "key15": "5QmZRAufaQw4DDJ9JdoBfxXGz8fxWRegRZRkZwAxsaYDMTACBdm8Tokjfrerpq2SJksWRccdPoRnU8usDBCMD8bC",
  "key16": "2jA6UWEZxpCvHRb1T31MjNqRzQrVoUzzUuBQFC9QJvvvwhwuhPfY8gAXS2Yd6FHsdBNRxG33sWRcTvQv8URkkJXK",
  "key17": "5xjXBR7rsaKpPcS4sshFj7EoK9ppxZW1BFNu6LtawDnQBvck3exgmqZgYmPFf1yHj7885H7sDYV9FK2q6SKkqNBb",
  "key18": "KU6Z1QSh32H2jK3XBP2DT2Tp7vcyXE3qmP5JeuF1wqLcRS17nwCuSST5iwZLDGCGLEUY9riUoVkupNRMThJgzYi",
  "key19": "34aoe3wh4W6TYgXGuC3ip6oHba5sXNnkhDWfrmtAQEXmUg2RRuxoFCYHnMx2F7ieuc58R1KkLd7sQR9Cf48FSuVE",
  "key20": "3JPDgfMSxE3qDe5yLoDsAhfiySE7qidkTpuVt4KLX6QP85TfSz2524myeGtokc38ef2GRf8kMonnSXxxEVSjtSnu",
  "key21": "BEsYgS95ckMNLXPbKrcmDFv5o9UWXuWkbwXFvANPphqXmxKUVEBau6sKsjzH2nQ2jdteDyUzucwEfozmgFo3AXN",
  "key22": "5ExzB8NGN1aoVkvdTVneA8xgEVCEZ18h44ukVsiT9H6PJJnK4a9HmPhoG63KhXP8v5d8UVUtHSENetqQ4w5aNVYn",
  "key23": "H12X5rCpWHxXtMPqhbtngytpD8qXjiFJ8LhBt3tLasdmwrYuUBV2oF7WZGLuBQBFu3J7gTzZJihKhsiYmksKMsg",
  "key24": "5noxfD6R5ret1aneH1HnTEvQaHVZ1Vhv3jB1ezHAwetU8zBMQsLX3pAhxBvciARAjgVBiC23z59mxNFjz1Fdxc4p",
  "key25": "fnAU7i4Zz9NYBjmUBWn6UU93EiQRx5U3Mdb2qEbekRoaC4UP6JzhpoopFVSyJq3YgaVUip9KstseXzotQoos1d8",
  "key26": "vtvgvpWnLWuUhfZ1aDNJAVxu7FSvo3ScY3Dqt57UTzy7rtTBKzegmwAYPZQyXHzEmDCXuRAfQNn2fk1CBd5W8ju",
  "key27": "3aU5VKAm4W9vrPot4tgGTscT7Z6StqDt5F8e2zrST4Nqas5c5HxMjfZLMm28gb8bdEbymzq7hCQr4B3VHn9ywFP7",
  "key28": "SxZNEAdoddqnErGgHuz4NjhrrrZL18Ldq7CtXfoD6YWBnyEDSgUAyhkxQVQ89dYrTjJkodDkhnPrqPBdm5yv6yJ",
  "key29": "h5hUvwKez3Egqtkx6dQgZFyYqKEBaFAmdkg1zGftgXKUb2uLuyijMi1T841SGrMRPkLCfhhoGDBNyVSMtWypw2W",
  "key30": "5zdbvo1rNLFjxiUzEa7UooMzg8LHVGsL9a37fzjwTDuHviEXxynPZp1sQpx3PigjToQAsbmMHAMZ8quqV4VuipMJ"
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
