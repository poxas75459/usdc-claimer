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
    "5wxGoo84fM1nzAEswsM3oY6JknTXbBPBnsjwTx4C6Joy5RgHdL5h4aqUfHZQUdPSa644Rtbdo2qPUVdAmBAH2Lmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wpqjw3bHBq8rJfbeiPMZR2vPXLh44skz8YhREJuooLgJ9ifHTJAzS5WQmFF667bLkhwjuhEjCRdDMdAjB7U823J",
  "key1": "Kuc2S1D7ST3xiEDd5c4MQUrKWHLN8dr3JixTp7hHLwT9PCAa66T4zaNqzmDKVA5Rbpto1CsjUDYJTstcU7GVCCK",
  "key2": "2qXMUL6bDA3suP5hfH4237dH3QvumPyQCxwBnPSCx36odUuesBLCwxWD8JxMnUhviUtpZe9MztsfhErbiSd1GeT7",
  "key3": "4F3Ae7Ytk21LM329nZQAvFn3iaCFkWauKGvGrwou5ZPsK2u298HqF4umzcE1KDrBnQPLnwuqJv4D8hZpukwXgqfo",
  "key4": "4f5sLq5B9qZh2uQJeL38obSrA6w1T6pXV3w2bGugvV8ztWQ3YX3Lv4xXp2fkTDhFcnbW6ssuJNMTaWYS7Pt4RBic",
  "key5": "RddAMLRhj2H1a8QkitgwskaktCqxVnQMn6x1w2EyiCcYBaMyza1SAwMT9zocbjkbxv9qxJeoUwDN9AG5pxML47t",
  "key6": "36aeqmSRBR4KthPSzJpKzsfP9sYoEm1GrHsgUy1jXJQaUJnH8gzjQR6tjpue6AfskgdJBcxG2MeGKauSf3Fvp7CH",
  "key7": "2PS1zcKcJokKXCVAD8JuwXGpTYyyj4CUpf3PS9t3CuGsgeTwj6ua3MirDejHXntyBM7SBZwcwpwz1pT5opqehDeu",
  "key8": "5j6AtZreTy4pCqcfo5eoTCe6opEpCd1sihjkArMsN4pmruJnijScYDSdSfUssD7z1j534YgVEXaEicHdd5kAj7eU",
  "key9": "V4Ska5LEpX3ReauCTczcuxu1nT69L9VsDCM9qVNdu2m2o4yvuzRe94UZrG83w86sDr3woJNg16YptVpz2ycdWKK",
  "key10": "3SSHjXu9tJCdGJCCR4QzGPT4mzBGuPZdSCUjLasYvtHoS86TrFymGwXwuNatWLPCAF7pEuzUc5SyVBKGQbiF4p8m",
  "key11": "3euYqg3mf4DLp1Y3KecBwj3jDHRp7ctFH1kXbu4dVTQSdzTYqpeQ24mrxG6SdY6VNkSj2EoJ5mVEtS9rdGNP23ai",
  "key12": "4oEUQrgdid6aXzSuPmzA5fFN3yepFBMWyjg24WiJC8sFNTmLVo8YNS8vy1S44La6KjrBCp41UmUv6mmEi2Rc6fsG",
  "key13": "33iaR3xdSB3ErPMAg8vsQ4wZ74izDXDWLxvD6aRs5FeNujCb1kzkDGJz2VSVSPLzKy8otjvLvpoHCQ8NVy7i3Mxp",
  "key14": "43KG4C5GSmPYBx85788fpFPU6fVaYKKvPyWzbayv3ahB5WteeuGXTwf8s81K7gZYwCgypa3GiELVoNBM5otfTRHX",
  "key15": "2JYCePLFz4Jh29vbtkUN3jtc6dhERFvnq4Ruhmgmv18D4cvnyeLAuUx4R7JVmPGNmCxPGP9UWQM2jnmFd3LWmBmX",
  "key16": "3cLT74BS9jLrSNXb97r3bZi3ZihUZn5yGmVmyUzLd9g9eVfQiGM1WHt5vwCAybS8by77CBAa1xSHZKqsEzXbmSYT",
  "key17": "41MPB8VP1uQ2ao8fw4GTNHHSSqqydNkyzAixsLjyUxAZ2g5g3wGV5UXUHhEgHTevcTtqygs8ReLEWMD5r3SeDMxx",
  "key18": "3QZ9Xr21ww54fTb5ZPdezJvRgwSJpqTWWqRV6e3yjbrChoSgMngw6VUBRKcdQkipce6MAzfwrr8nhGxRG6r3yvHg",
  "key19": "2cbXfqqCuKksHxEarsWu1U5BJp9WAYWihhnPHtor8AXZDDVUfSF2Ss4LZGRautKvHqcQEF4fngdPMFM5N91KWmy3",
  "key20": "jJzTDVwNA82LMwLiMA2EDw1rJjDoFHRhBqgYBXAJW6NJrVZpF9SdgCd6FY1nD7U4YqPPtEfMNZ21viumUrEPaE6",
  "key21": "ntnFe2Ja3m1w2jygZEr9iXj25TPCQjQXTMUHrX3uATscN17QEbfXeZvd5fwCqiPX5ZwC9NjTSZ23PWxQnBDr7zn",
  "key22": "4EVwSmHZmwnfa7Pd9zt7Guuhr97gMkVjvYNVvZffxtRRWQMpe4VxKBCq15RLk76aG6Qmq4Vaiv6LfBGaJAhwmcb9",
  "key23": "23UGXkvZ5kUpTphbH29XggeSHecGqhcCE36oQoXuNbELRmpvoeQdjRSNeS29bvf7m6TBrxcYtAPfDHtM6be6cCKd",
  "key24": "4GVRWMqyd6pnMBxr5i2i8dJVcpRU7jgdA27ttR4AML4WbafMfDznwPCSHwQxKY3hb86JX88Ci7UkiCm5fjwDFrc8",
  "key25": "3y5wSovmRL56t35rohZb5hFs3fsQKhita46DtiHeLvWMHyE9EBzQe3qfDtoVmNG4knN9fkh4b4LJrWy58TtSVVo2",
  "key26": "RMQ13UkzrMnVA6y1j1o7gaNGNAKZTsu8nHdJwCUsEgj4b5r3NjvN88gAeoHXqtE2bE477U6vXRKCFLBnmbdGRLF",
  "key27": "3gYLW2Y3oC43rcxrWfuN1AY23eX9yXoKqqfMAHTmBs1eTXpz16GNkYwxkWJ7MLXWXyaFQYFKG5yjiJXbps5wXdYD",
  "key28": "3nzrKG1cL6x94LsmN5Pzh8R8KLLQfMrLXZMaqNvyZB33RcbKZzBpnhAoVPctQ5WQ5rsMhdRUnzu2JXGJNtFnhAEg",
  "key29": "38S93Hk15cARqNY7GjZb9s7JdTMXAniqi9cZnVFH5qQd5FjwVvuUGvhkBVPm6aCa95VdjVoaAXyesDEwzVLBURPv",
  "key30": "2ZSQaKQao9trmknUWTha6qTLvWfU5jFW9Yjr8RUXmnuqUNrnAoYyteF4k9bzdsg4GbEGARsnQ4Q1cZ6bKS88x37G",
  "key31": "63AAD46s5A6oSUWnfEvdsqvfdjnMR4Zr5PXiJBw6b7Nqjd1iZiv2KrrhccWFgdD7A5LbWywgJmW1g7oECZptPKfV",
  "key32": "555dDVdWHXJd42f7sQ3og88oE1CaMcLqbyRE9kr5YCxPVzFt7pUTy8hVzJMZr1Cap6KyTwv2aM1qucKdDgjejEXv",
  "key33": "3JwDnTYjuCVNTSvWM2ZLzEeUqXYzGb6uwV6Vw5iAQBtaw3693k9AWUnC9LskowZHkKWJT4skk1bJxPBfXHyKykFt",
  "key34": "5atv3az9S1e1qp2rJxErnxHTkQ89BgCt5k3hJgBbyqvWNfr5CW1upufmRWr4LerYAAJNu4usyU1bUZrfKc5Q5NCy",
  "key35": "2b1t8bvi2Bpnkn3f9DEicqk4CTnXX9RGk8oSQf5U3CSFzzddmPDvst55bgSh79NPHgVQdWdyu3qEgkbDQLe2vMvf",
  "key36": "5EMpGT2nqbhM33erTA6ndxT7XRnYcGNizm9Gu2LGEKuSBnA2gyqVBmiQ7Yo7h4Ph4UCVqDFaBhi8jViQgL1oYgJF",
  "key37": "34PZ1jz4hePLQtc3qaTbeGbr4A8SFgRiGzbDCbStxAkHJ1bvB66nHftdAMwTs31zdAtddDBy6fAbqBBRYZSsrrZU",
  "key38": "5CXo6zzkeMCndFD1qWpUTeAJE6XRS3EzLY5AfduSa7pmihgHt396CCqkXQNMY3VymHstAYTRqDH7QboDrWZwkKTg",
  "key39": "2vDLRTyyC6UhKPN6ZPbSaUYDeCkHvETue6gqJkEqTRMFvAa4UTbyHWtmZgUQYYpXPp6uwHUjzrZeBcGtdj8BGgJk",
  "key40": "329Vy2qY5CLTP7gtASNB8efHRsKiLyXpvdfkyQCtsUFmUZPcegW9T89mK8BkHRwTA1SM94dVDrUr1xWsArum8UjW",
  "key41": "4TQkAFP4Zod9zgNEg6Hb55PLSnVK81skuWoLicdmX7gC2A8fif2hmmMjEuFZJHJgry387uxVwi96B1WHT3w93CVm",
  "key42": "4qtA24f8fGKkHfj9YTYFhexJib4UeVtQiLqi3ceet2wGVgTsMzkWUSUvpzMjfC5c9C9kivfErY7pCfnr3DJfZETQ",
  "key43": "PH1ciDn7fkDWeuKuKgBtSDMvyU9qDoghEAexEyzDHfts7JLvruiSQqJRt6J21624cNLtQy6XhD7Wxd3dc4uMDGQ",
  "key44": "S93VkifTABb1uoA8QPW5aSYdJTRRdyhHgSpemt4vpy1cqnEEdgGxvaPeWouBZJCSWcY5LMytfpdvkDdi6voXzps"
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
