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
    "4oSVK7Smmxpt6oFVcjLzdxU1rmwt4qFY84LhRcf56QA1A7xyPX8STCd7mvz6vXCBLcQFTdQXy3pcCqBXc9zuMG49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PXhY3ZS5yvDdfugfod9Q9EQG7DrArN87W3X2rdqjEnCmNcKUZmbmWK4JQU7z1h57JKik99Ye5t2ijqoHBEmQgPB",
  "key1": "49W4uMGCau5TYYZB48jUzdvgfHuhETsxeciBJEJ86LbLwadM4rgzymCtWFjEgpfjUdqDLnxnEVqFMWANNUxcAM37",
  "key2": "4Z9wmEAQ6i4ZJDkWjEbKQcG2brFNPRtLFZUAy1SZAqu6thhLt27eMABHn8qA3XcwPDNmzkKACBdJgxaoUzJpPuxt",
  "key3": "3FwuZQCLx8PdFCmP19FdVarGituiPXB3qsGezQzRe1q8irPqb9WV6c24Ss8Q51kgN4XHnhHoRHdBWjN7jqWv8ssL",
  "key4": "4EEXFMVBBMzq3dpHCd9wZkwUe1CTTAS7MKH3jcuGoxCS7RyATsNXdjHdRZ9ZFBGTAjuks6Y1vjgp4czdAdAuzqt",
  "key5": "3GsbyQHgJtuTW6AD7QVahtwaqhc4Q5JkHt32KQ4gUqNcgWqrob1KpEQu7tA4ijkpxzSoUXxzvLMysxijrpZd53e8",
  "key6": "W6wbanPXM6sAdAKSLeSjeSU8UxxveM8KxkG6vVJZzDZpdFon3KBAwSD6KRvNmqYyrZpaPCWqKs6oy77saGwp2m3",
  "key7": "4omEgiNqhdzGUHb6k7WsueTds3nYQuoC6dFxEAND8PDsWBZ9bKvHBmqeUNmzSgnhN4wn5Jqw9wj4WBPWbWWTGS68",
  "key8": "571FXJYmfJ33gLX2DPH1Kh3BxcypVhPUo5jPah1FdjhNbmgehjpVootNyMLbuUkMvzGJHqipF5kou4ewY9uFjxvP",
  "key9": "44DRdCDRzgdniyHkTFJ5e7bL3rCbpvEGP8CGZyw4yeBnS9pgswnwG4jjiUhEZAotrPrh3fHUwUx4ATLz8wa4xuPt",
  "key10": "5Bua6n62vy31dfQsYnR2dWCEpk1Vbf9ZXWteN2XKE2BHcLnpYhnfN24vuFChbWuE7aXxJY42cmpNLsjyvAJS5LzP",
  "key11": "65qbptYWbve9J7e92jwu62cY64FEUNsiMApzPRS4kfJA457DNewbxMmkYToNViuDjsPNLTt7C9fu5tBmz7DmTWna",
  "key12": "5tqKAeQCPVtsrwcWzzrMCbnR9FC2y479t57tok8QS1kBvEg38g2ZutRhwqdSV1Catck7mpS6a8zY8hgXgjrSzWMe",
  "key13": "32qNHtrtUMdLt9mF2p1QbxsSLNuCdQxKA4HP4Y5ks8eN7ZSKNwtCPHcmwyEh6p3aNWSQgyrydD7k7kZ8aNG6Qtor",
  "key14": "35f9fx9KXEuYNkGDxo5TmYsXNjc3dLLLyco6QwgaAa8vVwDNf3r1DvD83C9Tp8tRftnNXSEsbhZSwBC1zykuD32m",
  "key15": "3vEa3dSh26fTr3Mgxg4wcUbwr2SkNpAF8XagcV31FGhxVsSgzmrLF7YRK8HyXJV3gTHXU1ZEbZj6LNrMeoh3Kuhs",
  "key16": "BtEeF6AX6ngPtpJvRXBdTHeiRcy3PicZjdSZwVZeFJr1tJuGyL3BfFMGspMqZBUveBr1rHFdydn641YBcF2ivmU",
  "key17": "3DtdF4eEm5fj31QdV2VmW6fWmmhayAdatpXesQndMWZc9Ti7D2oc2vJYAFAHh9Ap1J5AguvBoz298fEdsz8KY5iE",
  "key18": "4r4vnc1RKjCv2VoRSpC6AKeK4QJT1sBFjnUc9CgjySBNtDNJsSMt4NFdLVjRe7bfPi5qu8JZ5jyuQzKAe7dn6zzn",
  "key19": "Cg1mnBfgTMzUnF5DVoVFH1WPWpBUqK4ZNbhWqMpB9odYTZ3t1my8PQGM2HxYv1GmoZZpBz19j7p2rjdnG8SxbpU",
  "key20": "22zzhLyPMbowBiSL8vq4s1ryUFdwNr9nrpxLW9kErHwgRVF98GnDp9tioBTZHGKvDNZZ5eexP5Cu2GKWMq14TPHn",
  "key21": "4UTdqDD6kt3csZBWmgNCXZZPyHnC6RTjKZ1mH2Uw5KL71kCjHJZtbDzjkwBBLnGfm28n7WXYDDYL5yDLsaS1yKqz",
  "key22": "4SyoxhvTSU2CG6zSiBWRsJ8sWmK7bB3UCiTzM7xCusNcLKwPtXsxTnDQ9oWAJrurwZQtdTnnFSTuThhUPzin5B8U",
  "key23": "39yP1ZsUtTp2gXj6mFTaf2r9MxLCTJCtrM7SPsU8N7BGmLNFjdzP1d1F5Qd13RTq2nbZpGcFg71cZCtCayv96MAB",
  "key24": "4urU6BncX4aJHA7nTfWbCvia5bmWZyqV56ueFmsNmA4hjJto2bTiL599mguKVMwZzC6A23stiVH7uoVqzH1tVYqi",
  "key25": "5FSBetduraDmNJBA9HrcXSH8LZo3NFoYy2uPxaHHRtW5hBg56vrz9dy2CUNKm6NjfmcxT7RVeEwrX3BMDbyDRqPL",
  "key26": "49BRodJDdc65Rb5FeBPuHLy7cwSsaCsJ1y68fL59F7amWneam85uanmWqaNKcYzz7p6uoTLdk4xhaWkgDvR8ZUXz"
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
