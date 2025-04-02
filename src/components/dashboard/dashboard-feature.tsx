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
    "29Y9UD9HH5VSDb6HeUSnrA1LpxmhLjgBjkd2h9wehCcgHv33Hyc2ZQjLMrqjyD76X7UHG1S8wL4tf4Tcfzv6BXCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63eJnndayGXgBK53nzwRykMwCkWMMu3DwhnxhYwVkPqStJB4Gf1Zd4fn8gGX8uniwT7nZmUaxBGPxe59RWAoQ97M",
  "key1": "5ArDgywdZ57hPPt8wFPKXs77Kf33zJ8NfeJbbVBzpW3u6xP8yDkjWLnhyKLrFvUcTVhHpmpZBdqMvrRU76fZrX9F",
  "key2": "5ER5FByVSrz65rmEagH53PZFiB1kZqXpKM1PDjYpZfFa4sxPACh4m2jKXuJ7NhC21igGZfqeXw2jtYJGnvcYwbV8",
  "key3": "3Cjim5JmiyPhFePffgTyZedGVg4Y79gAHGLpGpEdgrn65regiBm2XgNXhGXzB3r62wmcmyYiCguro4TADib1cnDJ",
  "key4": "2kTDNCVqswD4LDEM2PXoAqcjJCmWaw7aGRBDDsGodaoXfsGFnJCHVAod4mKdcKrYUhkTM11hPFXprWeoj2FxHNqb",
  "key5": "53k1TzwjyoGRM9htemvLL2paAJKbzv8fG9UwonyXvQYXY5GHnPTwUdHh567HJ96ehcH3kNaFFvoGPUAdK92SDaDi",
  "key6": "2Fo7ZADtw99PQfdRS5FfrSbGXSrQtHGNn14VqELChGdGJWJsGNFa37HjmmdLmmeV9XpHkfUJtkDiE2VAcKir5pNj",
  "key7": "4e3672Ue8Sgn3wV5XosYbdaqyxxebAPmgCD5kAP19xf1Th6aMGMdNTQJqWe7hUUJUXGEYDU15YEZqcGzBovMeQEB",
  "key8": "5wxt3dXqXAmD6iExJweZREuLaCZTWskUrrSPLvD14Tt1mZ8fK57ugYYTED7SdDcBDLoik5vnf8cVW77xU8At3MUN",
  "key9": "59dJAYj5XHLomBNgHVcQgHPsnGjqFTcppKfvQHqQugKfQgozj6fj5e7tLgpwVk2DfqrkTvnLL8J2EcbBrE212s2e",
  "key10": "2xDRHSBTjoQKLWxGrgiA5We6EJwczrdevDnP4ryaNMVAthDpGHKUD2mJxFic5mAspAeHZD9JdgXomii8Xg8rSa7d",
  "key11": "58wCotyiUsAnDimDMBBdKuc3hTSDEZ2fAqrQEYR2Esut2e4pF6RaiJKkuSkyg6qkLpKWrQ5gvJizmx35qXkdTrLG",
  "key12": "2fVRNuUvZqSV3sT5gQhmrGHbD88gPH2sduzBpYfCwvCxRUKQPamDtNqbAfdQ58XpwTwh2rwE9YGRdjEBg4Nrr8Z2",
  "key13": "4hnicGHZ8k3dPUfGrsBGZQzeYfh94m5smcrGQUW9ihETrVRKiEAKMWnzKig6VjzhSeQNatPquMkeh9Mem9ZzePj4",
  "key14": "5hbkCx6APgmzB1kWjQAu5kDBtBvvjRhW6MUC6zrYyfhrAfxGTuRjewx9fazFqNX5P3JPitmdnJMddqNpEFcdR9sv",
  "key15": "2vV89zSkfNt82UzSraqAEAyNuFVKkPNCmEtW92TRpnFB5rdZRS8UfK2VoQtNxtML5FFq22zqy2hQ4AjnoWTWLaxH",
  "key16": "3XP65E5RWadnKgcSz8RPMyrh4KHGPt4kXmX8P8P1ekbTPa3eXwStSBkeEMbnT7g1XK2pC6o1Byj8Jq1BwPmi177M",
  "key17": "3TkCJUHnhyTZG9NvQRGw8Qt7obRzqDffgTfAsnCanQCysWuS5as7YtgzfZZ1Qw5sTpSAotUoy3UqtxACiFYKh3Pq",
  "key18": "5Thh5FaYyAAavGkmiCK8WG13YVjLoBw5o48GLZZjKKWoBUpvf7GjRvAX8jjpXzyWKSZHMN6LkVCe6xtnhUSsb3Fc",
  "key19": "9NvFikegDd8UPaA2Wd61v8nm5rWS5a9JnsadgXJF1fJk1MVBJ8Lt8fK4jTYVKwHuvmYNgCri9SB7nYiMYfRZar5",
  "key20": "3y6mobEw6tJ1xN2X7AuSBw1Wj7NQpzMtx2bJ4usfJofMjRZUfPzjVVHfFSZhs8nScYd9odBboQEM7Rj18zRq2wUa",
  "key21": "5hZzF36m2j9HsAThKpgqyUVxVpECvbHKmNUfpxEKVz21f71S2mGN5ck3NqdMN4EAjh35WHaT76umYwpgDsoBFuGm",
  "key22": "4JvjfoodZiU4SYvJDJ9QUw3ykbXfnzJXQ3P8ixta3PRuycFrCzovg16ZDcxQCzsDp5PVYHdkxh9Uie3X13QhBe11",
  "key23": "4Tmc8maFe8HXpv9BjTaW7UDwWUnViRTSxVq39BSujWtaa18ToiD3ZRFC5rAhMhCwZdMKoVYamfYxDKHLunp5TD9K",
  "key24": "dRL1hjrcqc44AxpbjoqnzqDwPGaC4MheCE8GC8CC41xz8ryxjvNSiyh4ciFc6iziSLFf3NdLGWrzCZDsevq6Jwv",
  "key25": "2xhiJVuh7w8M8WVVJk4aPHH8oLiDDz1BzPhJ2SpQkqorfio6fWTxgpusmfcWReTzwM5bbCS41QNfMwvMUN31UF8",
  "key26": "3oVBvqYxHj3uuP9xep7K1n5rEgJ6h9TAFda8W4LwdNeyC51oqhS9ER4XwperHPzKmV9rAuCoK3TQjZuz6yeHexyn"
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
