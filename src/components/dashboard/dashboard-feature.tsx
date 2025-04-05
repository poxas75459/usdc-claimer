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
    "32q1yNxze5qvn5McfK2aKnYJid3bQhdKF9PpbLB3MX9r1xjybVz3su7suThAtrJtSvF7h77VpQyfKcfXsabAFmQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmFLbGrMH7w2KCm6g1dXgxMhGaHi9sM78NKigZvrnWkVbDD5sBLNsSPLRPsqzPCFVHHVyqZyDNmJHNu9cmDKM42",
  "key1": "2ihf7itC1vAQUQ6Zj7qYHvaidnbiRMXhHmUaWHmSdPF6JrE4fvhq2idieef2k5SKEmjcuXXWwMcKS6ciw3P1HgzK",
  "key2": "4Z9HniCQNVc6RwDVuUvjo8cckM5KETazRwZm8KQ4UoJB6RPp4ze9SkusqHQc9dwEMfx2TXi1bEUzgwfkzyJWvW2a",
  "key3": "3e2rNCMb51aiNiChbUUDCCmYKybztx46FtSHcCPxirzQkKGaZ25eEZY7jHsSKYJE5uLJkNnLuB43BFyQMqGgq6P3",
  "key4": "4qqyCvwFRtSM2rbKPSdxxVHsSPd3vWju4pzpuVxj9wvB5WiFwVtDFxksHQzbHbW7r78Ws8rcHUxKXUwXH5ybcqZQ",
  "key5": "32oAMP988HL1bto33LhaJ7TMtEPxUPEvKLNxQoup4KqrZxUD4pyCe7jowiby6YSP2zHRzcdAuQoSFUPL8UbF79Fi",
  "key6": "4pL9ab2CesqWKqVwi4nYsaS2ANgfst79xP7kzo8W7Crv1jA3pqiRrnPxSsegYhjyHYo1mjNQBY1yuTKeMm3GtQZT",
  "key7": "4Jt8GjUQnkH5zvSJGNSguSoyfpGP3xLB1NuU2orwLMeDwJVmRtYQ5VX3Wk5Ckqcbku6srSHUKfXDdnEEr1z99YnW",
  "key8": "5qL6mTnChQSp3ceTbg13Hvhh7ifcd4RnaYT35r7pEDDcY3vpDQCGxSd5sQbYVa3K4Syr6mH8Jo9PLzYKFdobZ6iQ",
  "key9": "2436rmvEXb2UFzSBS3SLyfsi5HYR1AAuNhqhVJoJHog5Ntw9s2d2dfLBEwUbnAD3sCV32AvaP6Tpfhr83hv1czEj",
  "key10": "5zVL1Q3Hjimmbk4jmcc29GNHVbrw6thCRV4p2eyFCKNy528rz9XEAdTJD3LfPbDTGaCviS4AT5NFeE7NFN1mnjSy",
  "key11": "1MASpPr7wSBQ7KhwpgwNPX86J8BNRcUCRo43afcD3n98XHuDGCF7i5x1teyXCLhveuMoqgVajtTpvayGDFBcp1j",
  "key12": "5U8rw7fVRmkWNzuJc3H65mJATngfjBLyo12TTzG2wrTuujcPsZu6T2bg2ELET9bpkxJTWbU3YDH6pDd9o16hzu3T",
  "key13": "4ttPBfiepuBfyx6o61X8VGk6CSxUnN53w5tmCUyxRtmd8bJWWZ9S3sJhasaubgw9hPSXsbmJ1GG2r2nbZrXsFcBE",
  "key14": "2jgBY1VN2tQP6AKe4A5sZdZ7jer6biVFbiji8Ehfa27e3EV39qaPndjZGxiSNzaM59knxRjpdfj7LTNGMtWAXAw6",
  "key15": "2PnMEetpLXn18o7f8S48bpxMvGyFH1zPfZ1mV58EEgGJKDpan9uJEXmN8LZF2Bc8zbjddreNWmkmi7DF2LE8fUV4",
  "key16": "471U9QkGvec6Q2wfJXpUqeLSNpz6mqdtPt3Jz9zaKM8iGao83nHfe9YmiWDAX2pG4oUPvKh8fWGWj48B7we2pQXD",
  "key17": "2yDRfAmgpBpBNywGW9fidcuWhN5kWYvTmrUPKn5jd6GmX6HXSNKe8mwn2wS2ncBgYrKyVs4jnMT5no642htsNh3Z",
  "key18": "5punNfVp3zwJdCkWd9KmCrKeVnJd5gaE2LPo22xKooZX5CWL2p82n3kMAnt5JAK2SVDxqW4QtDDyxTqyQvUTiqZa",
  "key19": "4hoX5RhFH12xW1Eb3uNmeVVrQnBg8FZCNW8Fx23nhS9huwNaxt4kUKvXrxbRTbenquMSpM8sojRiXXaNFE4yZq8U",
  "key20": "2p6vXXwJvWyHJptStPA8TmbSpcrDCdsCknKF5xXD7iRKpBrPs9L3nvBQkRGHq3Rcc5nFqgfPQe5ps2LGJqE5dG87",
  "key21": "5K7XbjnqWVMf9N9Uh29tcNUqoFpmpwBAEqnrTGNwEyGDF7EXkDQx4aVwodD9UrRCpE2BNVqoPeHsyEdDvi6ZqQGR",
  "key22": "2wxEk5vhUT3rXdb4NouH2uvNCJ1ZhazvWUMPMSxtapD53Fo63Qey9pBDFEUvRNTddAkfxVtRWYQ9ULC6RTHZVEEt",
  "key23": "667s8TgkMGCNJq48ND83aHgoHd4Bkp5mvJGLZVx3vWcmt9Ky7dDAkEHZHwr1n596e5QVF9bcXxqW88UKoiSFub5",
  "key24": "3U6vmTm3B3gQvByXPmta8jjdGhJgthqxLvbJh2FXZHuyC3NSLpBN2q3dCQcXAGzCSf6Rbpey36bPfTHuuteawExn",
  "key25": "5iyp4BgAYVFzRqXmHmi8wqdT2n41GwxmLzuDkbnojL8PvVn9bxCfoQ2YWGBE6C6XuUUSvmy6zXPyrt5Lw1bueApC",
  "key26": "39HShfXZ7w5DB8mgkhFFBEhbbqdprWVHvXwvAiFL1KfmUf2qt99Na3KGwPdLQnNN64owy2DzBDQQdUMRSKuATFTB",
  "key27": "ztpt5YUUCT8PFVE1j4KpJ8bGQUbc22GJVMNmfEnGKoUmtz6d1sG8t5s8SfMpwMcM25TyxpyXCMwNW1vrmPuwi9H"
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
