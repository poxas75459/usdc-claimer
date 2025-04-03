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
    "4xhLSEkLnn7725qfeWLGhjcKaGgQmRC93ABuRP24SrgnY32hHhDRwRYL818VLYbCBiGe88QXJ5urKHwWgkdy9LpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZZEPuqQNCBhLmxzwGfuthmjayH78c54hiVrTbyqGH2DpynK3eW9kYpan2Zv4xgBntiJZgg5Nqt1YpAzTafsXHmB",
  "key1": "65y6b56CpffiNGSMSYsT6MZUPMaiw3tJwBEPQ5ijwRgJ7YHQiQsXBjUzSBnLA6MCh4YinFGGv1GQtvoMFPACHL54",
  "key2": "s9jnPZ6niYiMxNabmR5iWu1mUqn5WPT3mjxtKiUGXGKcBnBUfrgTJ7ckx9VpvW9gks9n4ocoKTEtR8qj1dPbsWx",
  "key3": "4vQV4esEdJjBQKFa17khxeMoFpNXkwhb1fkKmPVszJezN8ixxBiVHvGbYFpKaxothrdAS1oKTWjrdxpSDKWma2Kc",
  "key4": "NdD1rS94B7kJX24pTxEx3qgfeQ5paZyag78JoCE2hJVPcH6H6x471tZu2kMGm1LsHhDmC18rqwCvMq58CXwnmgR",
  "key5": "53QTFpn9Q6YLYhntmSioMqa1W34msBUo2iioa18fFJzdvnqjyH6bfRGksjwiyUhkBA8qF8QhvUVZ95xTaz5X6HWr",
  "key6": "48EF9G1XyLbfCs7MocGz9WF1v5oUYf984s9ds54LaiDp7yWAn6hFq6oAtfYhd1o7KGps1sAghTGJ72mY5uUHCro8",
  "key7": "57x7dLZAumZCGCZ8jt8jip7m7YmbtrcW6iH2GoWEAC33yEEiLLxyxv1fVcsWKMq5TNC9XEsAQZThd5yXaSNSae9g",
  "key8": "5JnN91hPBDApaguf2fxJm19RZZEDZQeMvco1XURUHzVJ7V5LDgTqP3c79wPmjXL9jB4NYK5SBFfFzrMCxamATeq2",
  "key9": "4wYYmfDMoR5VPMTkQri7XGGRr7JNsRxX4cWFNAnrFp3EDdbfV892cZMS7ZyrQR8545dwMuWjUHn2aZWxvJvpfmPp",
  "key10": "5eARWVAQMh2T68VkFoNPAhGehfAfbP3ik2mht8bWyDsuBLFudnzx5JLRHT3faC4gkT5gCPizWZbp9F5Zun3pi5g9",
  "key11": "55zpERyu6iSmc1Nwacu89LRnKfnwka3GdXf46ThjiNk34Q71dXsXLSFGjzauFhTj1D5UcFNxLXkJ9mBoxcqspL12",
  "key12": "214VZFyZ5yy7DPH42dGC6nQaZx9PaszSrs5XkwUnz6w2iM9CkfiXHci927CBZYuXFnJQ3wd3rmpoyjVAEk5oqpw6",
  "key13": "53MBy54m9p7h9BBCz4xaDhTzY5u8zg2wWpd36Zg5yF4KynXouVLfzWv3HCt3RRqka4DAHZLLR3pHpnK5fxve1hm5",
  "key14": "42kp65a5RMxydZLWtnKA9ExpyPcuU881TAvKNuKPSYAhxf3aZQA5DHDkAW1qxnYzTQ6rVk27EcthhHY3aLR838nB",
  "key15": "x4EhCEnM1cXf6uSHKQ6DJ7jaX1VfU919MD23e6teDLyRkmCG8dEDne1xgRgzqZ2XcFCCW3XWRvmYX8vYYV8JAbg",
  "key16": "3FGSTMPRRwoGLy36o2BdtPWzktuVfg2FTuHnpuWdS4PJrQEsNHdrxXM4hUy59YwQVgKfSE5cTqzsi5kx5w5aGzE6",
  "key17": "4kj7NMP68MgpbudswAD9JYQbaSGeBhcdRVyTPgLG692SjKj79neermW9S7poseds9Egiv9QwUqVDmxv85aoNRKKg",
  "key18": "3NxDnFaqJP34WvH1MtSWaZF99Dzh4AGTCoH4ebUPgfEkrfVhiA4Kx4Tgu65sivs1kuLsS2tXeKzg8DBNMMKw4kGg",
  "key19": "2Wxq1Sb4tP3BPbuQMFJCFEMmCxiEWSFbpfdxB24ZgcRywmwBKNmKb4WnumSgbaeCaZeig4vPVUexwKu7Lqu3My4S",
  "key20": "5eUjVyNtUWVg2UTiQSSoxryt254nkpEcQh3FdQGmQwCpBKmvADSV2k7GLGQxzpHx2u9xFgaAtukxdFK5g3wFJA1i",
  "key21": "4X3VVoqB54c6AN4zxtLTVyGTduAaVcds44Vw95Lf1FfUPX44NLQQJJiEcoNJRoXecda3GyGSGyFGKhVy4cVZhfFj",
  "key22": "3edz4BHyfppG2Y89LzoiZHFijidPKZXv3brLuBQxP4AzhbjJwAnszhNJ55BgjamcATpF5kcerHFvTG39Yv3fPjGM",
  "key23": "3eTiFjQa2gxfh5Np5GuTBPtqegrgzVLCPGXZEEdRyjDMHFLdXe2H32CT7whiRGhCryouivg74X7tJu4P8n3tvYfB",
  "key24": "5rPQy64pBRYbrSJPpLPDazHuZAktFbti8jtU3oH1w3a9DZHbSyUg2ZA6yb9cmS3DNTA56UvuQUQ7NnUMHyk1YymE",
  "key25": "4yq1VzG7YMrCESLLvWsDGMeA8cbFyY1es7dsDhREjNs33UqXxsMkVaPwjWzpj4eoq8zrJbdnrb7hS4upHH3Juy7E",
  "key26": "4rY7oJ3b21XoSXdPTeDJPc4XgXbrmazY411DadMKkyyhVck6iuvxqsQSobmoWsCnJe5D8ieM176QjpbqUrE9fB4B",
  "key27": "scmBB9Boi29GDYSUTpWri1xmMg2stbdb6SisL4qVLBKQMC6zFw8mF8dNthuPjuSiPz7VAwL2eh5gR6d8R9WPGxw",
  "key28": "5XPoNvK32HYjMZ6T8oeH62QvXsWwffznj2GhtHkJw6C5gDS1Qy567icndXpw5EG97isjmLHidikjfARQCrEEH8Ld"
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
