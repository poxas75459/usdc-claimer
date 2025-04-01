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
    "inCJb73y9FF7W4ZGDehxAuTYMVaTdWY6RgKGqro2hC1YFcWzwaX4ggXoco2EWvfsKiE59BywyZxEc4bYqtYeKxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rNmeQ5qnKHftb7Gw27whTaVBeCTyiQ62FahBDjzdL2JywGhThfeNvefVoieeghngM6FNpHMPM4BsY7VJewyYtCh",
  "key1": "2ezs7HnkHY6ZctqcoDgK8hKb86AaSAsfzpKcV45Sje4BhDbNgpPyUwXSJQtas5Cz5YLpcLxFwP8GpkQtYj7nGCPU",
  "key2": "2y2t6zCXSbVcNMZJk5bKHhbqSXb2CJXtnssTLnHwTM1DZTGybNcFMcaxq8nzR5SVx8sh34vj6i8bKrUT4HSibjoD",
  "key3": "3JGUU2NjKjT8pwe82sCTjhRnerbBsHksJqPCCLKy7mo39Qa5oB58bK8JEpA6bAKM4qr49otm7jmc3cWN5QBDQPRf",
  "key4": "2rZVK7L42aoz5SZuL7cMVVHibdjHXpxnShgaFLBXaUmmUgSiski4HAsPCwdYm6cLXSzLTVLpcfNeY61c2esPz1FB",
  "key5": "DSUwbjHG3xHn2ufjKi7VEBfRtFSBKFuEca6jwouAYBrg79r8ZvcdUbYAoqz2S2vw8feyn9eVXpkuZ9xCj865Cdj",
  "key6": "429ZFGj3486bLQF87KmGwRSn1xNu1xR2igsEWsmvWgU2HBDQVeNaDB8jKc3BwLcemjjHgr38shfZ4mLu98omercD",
  "key7": "NvTSrpcytPhMPqxFhxtmeTrAHchyEm2e3xUppjFFEPM3Gn27mSCS9RquwN8PxceCfw6AQ4CFjWxnp6ZXF7rTMRs",
  "key8": "SSw7uAWWCpLdH6foQHFLUjKRBcWJ3HosMci5XxmzMZwScJrS9eBZt8x3dWzMPY4MQMdV1ZhUzebKN1Dn5VsjZjb",
  "key9": "2Z7JwgJCKBjK3bLCSrJHWjg6biyZ38NDo33ZZSmha7yt941DBejGeX1JpX1Gp8fPAcJR3s5q4YmNF6ZuhdCHaePE",
  "key10": "36EU3JvfTYW481hPpHePqTVbwbjwan6txPS2dn7JBNdM3PBjFFWNL6BFQaUP2mfCX7TVnofSfvnjpCNNWzHa9tLr",
  "key11": "5iDKD6a16c4VNJmWeCgZsHQ9DLHGMuisq2FAwVy3p3d3zr6iKvCZBRMzCWYhVaBH5q7nQHjjrM5zLGsfKn9j9aoj",
  "key12": "29QMLcx7vNhS2DJCK27CH9Fuu6txKTn5xBxQA3CuBYg7auwSmrm4rY7SdLkEgdKYzVATJMZBtJ6qLV84vNgeh3Zh",
  "key13": "2HCz4DNec2tBM3ugJBABdDHyobRo5GuVTjL96RsFX9tprCGzDdKian977UcUpEZMNo1t8aSkEUK3j3eBKpKbG4iJ",
  "key14": "2BG9k2TYq2X2cHMyKF9Mb8VJzUN9C7dLbKG75ZxdhnyXdAoJVGbsb1WqkmPFEkyNAaom4CSZaTZbGmkXUwDqYA8k",
  "key15": "4TMdMgrC7fS5qJjQ77ULxYvByKghxAhGNGN87u8XNUMJwj2VPzEuFBn5zfFhJS98fj16P1RMrgPgqfQ58ZmMJuX4",
  "key16": "4PGsQFYMG9WbVZqYtVZ6ivr7u7X2mn64L6dFXvszBjj7kjguW9uRtj3QeXEj2VDGCSFs2XfUaQSpck7NDT4TGTXS",
  "key17": "2n5RVJ3oUwfXe2v5AXkFWKs4SC5c481D34r8yUkBguArwTEtB1SNC2tkNz45x5bjtmhLNvDQKsN5gPryBYPmFyvk",
  "key18": "ncq2FRwXyeJFcotkbMShz3Be3cGANEE25Qar3p8DEyNvqjku9hvuSVSR66APYCMHjWiDhmcc8NJJEcKARjiPQno",
  "key19": "5QMxqKRKjmQBLvFtnQcLPRpGykSubZysfWUavKf5ZPeaKDDqHqapwAxcbfrRWRmFDmZHSLQhxzLCYY39uGSQkexX",
  "key20": "5w89TGJD9tWpqiEvKk4JkH1ZBehw5vcEJxL8XtKQ1FbvEsxixiBHsBxj22BKQeXrEAkNF9EfLNA5KTb7BiyCCnDA",
  "key21": "3SRSVvcsGrKhcMRH59nGxuDyj4rvX9zCXQLD7M9L99Va7AkyRBkZCDEew2PAB89wvCVFZfR3kkY2x36rJec3yPbh",
  "key22": "33Me1W1BJfdEtymF5A1uCGrr7NAX7GAoMXEcBadA9HPbZAv5NwbuLy5wpsDJTTUXkVDrnUwdRtKPt6MJpSubasDY",
  "key23": "5EjJhRV7WvoWBLAC62yc7kWp2wFE3dF2mvmNrnaxxovANbXZ8AworyzHTjMXTMKJV7nLnarTLk7ZuQQQdHAa44s",
  "key24": "4JNNA2oKDegGc4w9KMrhXWsPkFHwB5CN5zoqmh7jKXPA7GV7duQyK9wrFSQC4bYNeFEfjwaukG3LstmA1BXP5Quk",
  "key25": "48XWjMrQq2Uw9Uop5w5xEpMtouG35Xqxs19EZWWH39c3XnbLiDfexmMsrCn59ethpN5dAG62cLVjpr2RR3Yt7PQA",
  "key26": "5TKGt3d9ny8PFz39iJF2Mdv87i1Yxuod8gjAwtmgVepkEixQJFZeAU6on4dv8uNmoAxWSuVwy59AuUkVMp1NNyyw",
  "key27": "3CnnAdEeEmB6uwxWRGHFbacUwGQsTCDPAwss9fH1nis1UKWefENj1VrjW74DPJcy12qDFvnRNAAV3JxXmNVhkyGw"
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
