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
    "28sFnKvsBLXhq1sS3K6WL9D2DhYb2bNUR7HeVSaoGRoUXBLPVKK7aABHRMryoLHZ3JABXsfosMj4XVwWBpdzAiqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B3KMMSpxxddEMy2bBffTu5FpjoTnGSJba26ykUA5qb31kq2E3a5pVK9hN7b9cAzFNdZLp87Dcj9AdrwnFBSgpFE",
  "key1": "38K3v3cBvrmU2gt5iK1T1UvAC4sQ47oFuwnLQgr7GHeRHkgeyDUXuEDkpbK6Foumf3NTSY2HgBL3hDVsBkrqtF6m",
  "key2": "3jgkhFZtbAUhgVpXqcxZz59YH2BbcdZjViDzbNKDvtzs3t9r8cgXoURB8A4V3oV46bhPc2ZSbUckJaM5ziL8H5Yr",
  "key3": "4o3G2nM3ogPdeWwjfYuYGb1Z5p6XHgiSQ4RjeHywHpQBb6s9FY86geR26ed3MthLiHFaVVDfwV57e6xbGV5MFeK",
  "key4": "q6729Y4bKNGEucfprhKtX1bgzrLPssYN8dUd7DDeRfT4SrvdhuCYawEQkvTpFKjvzhRH1JTtKyv1WwzHksJ7GGS",
  "key5": "5DDDqCfZ3epT3dNoAadrGarFcsHjc39JWSknYMPyNEztgYgWRVMipruRV4yYxYCMbgVZ5wAeT279a82RvdAWZ3ky",
  "key6": "3p3yj9uW3Xum5VG2ipEdFqnH77tLUAVqXxNmVwnPSNi4PWpCkEePLXeGd73rdhj4cFSsTgoAzxR7a5d6jMEYdAgp",
  "key7": "3xPJ3VxTTgkbsC5vrPQrdqy6Lenp1Tf2kkZ8fF7223p1X9rYzkd1c79t6xqyA7J7FKHazdqemEMQphzV6q3m2gMA",
  "key8": "4tnwTVVxZ1NQoH3tgcoQcSa5em7xVTygjnDym8zcQUssFpr7ZJRALw5jRa7piHfp81ea8uBqtjNoWo3MLgZ8mrzP",
  "key9": "5DwCwDbxmRu6SY8c3soKb8S7VHffAcZYDF1TAbenpvKLixDAuergiWVrzQ1JyLwyotBYJKsNap39Bw4dAr5YwR5d",
  "key10": "5Pq1b6H1MHjjB49wGYbpDM4kNCn9oohFWpBe6KwGz7jai5rHyk4GG3ZLHUSiKMDY4sRuiYy3tr5zYG3pritxxMDS",
  "key11": "2bWftVzyr8Va8G1EsNZSPVV5F1QsDH8HHQZgCwPStTzwnX8ARPurWX1pf6gUwq8qN2AMXYPR4D8GdBo9Gq6gHUbb",
  "key12": "57J4MNGTKRw2s5haAeYcy3LU6Fb71K4Fok9oWcJuMCKq4JSNqRMpbB8AfvyBuF2ZjTKmMhNBGS6xdKiReyJb8cSy",
  "key13": "ZsRqWvKyEr6mrE62MvSavoasNzMnAD4qCW3MUEZzrmZ8LCwRaAbZQaVscWQc1kDhHEaUE7RZSJB4FtGr8ki8uAi",
  "key14": "2LDa7irFAppD2y5pPhRHpx6T3uz5B17ysZSvTUHG2RRemf1c1yV68mUHc7VdAU4oX5EbrwTSdH98XQgC6Bz4YDhC",
  "key15": "37zQ7sZ8Y7z4jfrHXov3rcBYsVzUxNcvpgL6MPvNTVs7269ZKpXW5TSDhjQxjPM1GBEQnqWuitCzFUvGQZqXqy6q",
  "key16": "2yYeKKWzNW65w1DH6F1ndyNZAG3DwJaN4riFZ2Td1nYiFB8CAC3rrHkwnhRdniPk9qKjZ3MCm7urmjqJZu73tG6b",
  "key17": "4FDbMP6WzUMgFR5F7F8HsRWo5oAFPNBohhkihv3RMiLpfemjt3S3To6uVKaKr7Q1gR9BrBRzngtPXyxGxywfrj3H",
  "key18": "3uFbbEUTGw7j1C74HhfsKi4myk1t8M7eSNFz6igm8oz7ujW3XxrpxaX7JHu2X5XSwYA9cuwDPHuu36HE1YLneiuQ",
  "key19": "2sBrXfhYc2HytZf3tFUCq4yNzWJZnNdzjaRd6R6VRxDnqTHkgw1p3ss9SJbrw1Z5nvPThHJX9TQxVQ3NTrLBh499",
  "key20": "aT88S4ac7bcMNzj6ghqdc57WZXbsXGZVtcXPuZLDvx2JD8vj2gE3ZfmbTxnNjERvax1Y61hQA844kbxpivdiy1j",
  "key21": "CEVfjzPtGnGFw6BtfknVAMFnpTiWo35qpDvjzExuTasA2B1HSMMYAoXw4FSsUe24PmEqQDAePdMrUeSaD2fGCm7",
  "key22": "2q8ednHsCeZRP6ZHQH5gMeGUvPnEBo11dFDyguGKxN9oDTY7ekpfLzNc8bCZf5yrtpWW28c1hEsfJfTQZS4LYkrM",
  "key23": "4e9YBmFLY63YYv3varJRE3asyurnwJxtgJMu9EG4Cjw4gWJq2nTwYRfjsjrZF8JTknm3MJKNHCXTftsuJKNPiwHA",
  "key24": "21hG6fVdnDS1yurjApX4vwqFzDDx4bye889YcvxfbaabVqQrosVhnDg3DbJ2MrVnNCmUPVth994hrY37vYNPzgNm",
  "key25": "eCgw8nfXmHGdLBFtWxoGaPK97NXjbtgSB1NoKGTCuXUyFQfPpLZ5AK6d6xe5eeQnvx2kQMTTBXd8LCYKKWpbDX4",
  "key26": "62yHiDTtBaY9yseWSaqoHyJSvdTgbzDXUaT6fMoUTEkmC8ybq3p1fu4pDEd25sz67FBXhy2LpPoP4VwLZkyxCrhi",
  "key27": "PznwDzzxqpACXgYVFu6z9Q7QarzX6Bi46z8bV2GBTmuJfT14L1o88RnEHscBSfkopdL5YDHie9DLbBbRbUjPYeA",
  "key28": "3WEZXUC1PnYQ9vDQbjACXV8nV4JLmtSe2VjxdewRBG3Jwzs1WiuhD3f4XvFokJRmPhDqNjq16CpnwJTRSethMsan",
  "key29": "3gxRgTBfh6jPpfQAkM1P5M1Ezj75Co2dVfNyytg2VfPjC43RsVSmkAqvhULHsBiVGVciUWpKGGJJdXaNoCtHi7hB"
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
