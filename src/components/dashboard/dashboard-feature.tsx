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
    "5djVjBoqfdM9rgQj9Y7JTz4Hb28Um5haXDbKtqK4xx4TSnheZ9BxgjHT4mfqsecKG4tZbvVBHJMDmfPXvRmaSTgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uupCY1tAZBJrcHRgAhfVJ8JoSqJSeKfERgpUdR22uvCvHibahzq5GRgqjxQmWZ9B8kdhQeUsw6e3gY9hkdNCri8",
  "key1": "4VWs2PJLH9SY3Gmg3stj7nSn1cnpsZAJyRc9rJ5n7SRPvGXLP3BFqjU1ei6E1Vn8neYNFRXaVxQyCeFy3KrroaB3",
  "key2": "BLm2CWTXwSQMqLbFRevsonexke1LYt6VWHLc3enjJmncK3grvQ6ttiFs95yWc98ctmLztsk8i4MebzxYBJD6uN7",
  "key3": "2WmurJy8ZPheN1Exm9zEYTLGHC1FfSMUgZzjdULphWCNLhS6JSPpeze6m8bxA9raocErwq58XbguMAiResGVxnoo",
  "key4": "4CxPAsxaBNewfj7D6ENT5BsN1suysMkBaGXrmA3mF1J7FLdMjccJMdfcsYrmGwQxUNFL2Lq3xYAKMuMzK4Q9RXx2",
  "key5": "4f44Q1sQREweT8FNLpjjBGnM9MSHh5J3oG6QyCwxLrKp41N33kh4ctnYep31fyJVoHSaqf4hs24nQsXvipRKcWkh",
  "key6": "3u4PCGnAMUBoFAdn56oKVY9VNMDonhJgdhvCTnhF1jNQc5jji17wA49m3gbZK5rbcDiv7MGhLoJruq5cLzF9iQA",
  "key7": "4Ty96htfBXJho9K1mDy95Q9Cg7FNdjANA9f9cPNda3r1nUfbrQj5VKYw7A1EsAzV2RcJRfyA5pvCHUxur7un2iVN",
  "key8": "3vsw6TCXDABuwBTX9v7uTX29ZP3bSuJPxR28zG3Y59ZhR6b3xxCtJsSZ7o1bT6T5PTSNyeZiULGqzW5FRU9K3iyC",
  "key9": "5L4yw7WaPrfo3Gsp1AqSeVRSpBuwYtzGDBhBNZKkgfSUMRHHdnkB4qb5Aa8y3HPLpH87SZoGe78cmAeJmA1demt5",
  "key10": "3ZLt1ieUf7Se7vMd86JUth5WZgSnbeg6c78aNibhfPGGem3ax6v6psW7NCq5EEMULfFRfcqKk9hhTC1y4qCLfsaC",
  "key11": "4hqjDjHoBiAF12JVXbTzS9LwsarDhEjgK7FY5AGkDyBVAeNE9R5cubp3YGz1V8AsR57W5UFRdwDDSZ4xds34qEVg",
  "key12": "3U5jstYdfMhFZm2mt7oUuYRBcqJN8QsnoJmkeL82gSaYHJGoijMbtVrCnaCgGqfzwDFd5yReRbB9Efb1MxD1UYbP",
  "key13": "2BKwHFhKfjhukepDvd7TQGDBGHTmU9noCDongcjvajEkt2at7s4SeX8Q14dExt8RSFfVMgM8mk4k7184fqUUFkuc",
  "key14": "fZR3EVPJJ17QqacDUoG4uqWgo4bUVGcLV2CLJmvktMuiK4Ssni9JDpS7vf6C5to2EFCgDDi5Uw3MZFHXSTToAhd",
  "key15": "XMwQk8eB6VvRAh2tTHgHi8YwEfDJHEpXcG3VXL5SGNK8xWWMa3t1QAwxTcE3p8SmHav2HmyxKanbBxMzdy6oKY8",
  "key16": "5HWU6CT75gLn8U4UosA9wsvpvAGfW847vJQieeZPjJUkdVZRwdtDet3LqCgYXP5rmnQiYJtzoCa4XZiNnyh1xR2M",
  "key17": "2YNX5wcN6HCbpmpqLrkJZMb9HNYkhJnoPnABJLMfj5d9NCZF1gZ9BNqB2pE6TJmsRu6zzwAf2F3F4ZheWZo7pasA",
  "key18": "45DwD58RVVg98p1VYu33QU1XcSy1CxVn4EtziV2sXSYSzgzVukeKFodR7o21sVxZueP8rFJwYQQ7J8ymyb56mcfk",
  "key19": "4MUnTvmgYnaMRNoenHdYRw2UzRjwggdd5rxQ5p4PoiYFVa3WvzZ7PKsJwJV72BxhKPJfjsPy4AvqTtkxCFXErpoL",
  "key20": "2yekYq6C7wyuKNEAHaoC7pzLp2dSo1MEHLyLaisx44bJFCdCLzx6B9cJ2GBGYkrHjca3fGuKBqekrbxY2c6WvF8C",
  "key21": "2ermaEacy5rf8JXxLaUnRSkYsC1nXqumAkdr8M4EbXJZ6EmDjKdtuVB6scvFz2W8nyVBuG35PYJQj3hJKkc3WRNU",
  "key22": "5CX1CQrh3pe5jQQXouTbBPpe9tGnuYyKwMANdRMtWnhysbhVC749p7ZqsLc97hypXpwrXYkU1Xgp22CkvtwBsjVy",
  "key23": "5SqvqgNsvg5fDGFS7nsf9YPdoxA5AxuyNAPdJizTS62eMm9HxS4jbAp7LuxsXB8zr7W6RSeXFKHeHB8am15PA33V",
  "key24": "4mUo5EDxzFUZPJPmtKoEM4dLYgn42CYw4y9kicRXGqSgNkVshqr6J5ahR15SmTEaJkmetxVY1gkCmVznjRRwLmdC",
  "key25": "2AW2uDuo9yXL9S6KmF4DqGyxdL8naJtuBn9PSkBXaFhQBQNEGtp51nWY3zhtqtuWZMhL3k3B7hTFX9Xem2vrq4fp",
  "key26": "5Az3HksxzgHQLq45zhaLixnM5r4qkbwD1j5Dstn2ngpMrzm2rhMRdCa9mj7MCgXdjz45tPKJUv6KNmP56iaJbFTu",
  "key27": "4MwCq4HVEMPZ5No79k2upYRAN3fNyuuZhFmRLffRcMkG2TBMjm3Vs9mAW9TT5PwY1vxkaKLAbEaz2XfPtv4Pd4jU",
  "key28": "F4Ywgzi2rCfAaCD9JYgu6nHp26gFAyDYKoqdhvzL3AzDH6T5xbNxnsu4sar5JjgSm9kMp4KbCUM4uQA4bDsivk2",
  "key29": "5N2tqJGht2LBq5kARz7NmwGZuAuRSF6vLSmEJ252We1x6rar3QSRiSQUnyneyt3CjBHbGbKUSHhcZgmN62rmwzLk",
  "key30": "5p4zHgucddzGt9eN5Rcfk6xJzCfK6L2vbV4jDv19eHcMKjphQjFHXoGDutL3H4NwnxuUevRBZKpeusa4NTNUrGHC",
  "key31": "v9nSQsiE2vHMFBHuAxigabZQwTn6p9CLYak1rdKp6LR8Vi5th72hcdcW4RJMWqexhd4qGCt2dxYnEqQUW5dd2tQ",
  "key32": "47dsv4EC6WyZp7GmTx36jUmGVGAVGDsADUUfvFsMwZXuT9e12LaEc9eYPBB7o69AXkPHtRaJU5FpUB6juM2TL9UE",
  "key33": "4Ka5SsEVwBp3zhwCPZJyG1GHuZ668f4vDJ9hZ3Awfn3P9JPUuDzGiQusuVjUvxnMYTbzwBaUKrgwez2mnbR49BFu",
  "key34": "bRcvsyQAYuicZVzjtPZKCLXbU6xWJ8r1tXFHZUDfZgov5LSvvKMuqBYdwSZ6WXcFtoWm2PnP2tAkkYsnrQpGZoB",
  "key35": "31BVvhSm4V8PVrWfvzB8FQsyaETsBfpkT6HToyKJLyMTcmFYd6cSD7ihSXSXXfh2hQZL5UDW9zKHCK4AYoTE5iPi",
  "key36": "24dYeVbnie1LSHz4ERAKzFUbjr9pGzf1AaV3b2c6vN4msbH1D3FprcJg1SnmzjdkHWox8jcF76TrD2i7rpUUWozb",
  "key37": "5kagogdtj63kJ1BMzNfSfEsG9frgAAae6Y4JwZViuAnvD3Ui4TZU17yEifVoGjhQyBY6zSVQw5Gbm61uoaiBfQLJ",
  "key38": "58yqAeDHVavkv5tePDKUxLaDdicLFVEivJ52hSNuicVqRqwp2aDjVBPMyMWXkzW78fF1Kqj4GgxGjEpVszd5mk8S",
  "key39": "5xEHuUaAVCiunbUCBwSBwfpvqME2JsFQ3YTF979Q5JkhvsQHk15qkUsqctGgDj57Y8FDQ9aKLxrigaMyKNCZ7oFy",
  "key40": "66nda1NRgRTRK1Hkf5Jo2H4UBXWQojyYk3KWE4uZbPLtrCCJFYN9wCo3fMauRhGsWzcLtpHygW8CPHnHiJmYgBew"
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
