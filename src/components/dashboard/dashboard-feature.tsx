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
    "2JgNxWFeS4NM1CnD7kWNsBjwMxKH3wDDMGAWeabT4ronLRFzJPgUVmd2sFN8CYpScRWCMPPKyN7fKyPk1PNFYe74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65GnFMW9bsQBfbnw7uNxoD6CSopDWf68dT3rMomS8sZX8mVg6gaC5iBk5MoJaUhnFhDAVknLgpYM59jsWKQ7T51a",
  "key1": "9hrzfsAKXtosKvLpXtDM845HBfvnDCmKt4TArRFuMnRDQ2vKx9yHZART4fqx5RPSGDi1VoDQUV9CpAo6iVCAhR4",
  "key2": "5NhwKywuwiRNMCSio4bPAcHxVqHEbiF6JxCTK3xBMi9wmj4Xb3s2tVQDq4zUJucP9dzQqASb4Cz1Lqzaet2SHksM",
  "key3": "PjxoNioS4HgjZJXcMeAx7xWQQ6VSiuJrXcaRWWWsiHytR8sShMDB62A1kBppLdgYeFhBiNpgDX9JW49Mq3VUQw8",
  "key4": "25Z7PvWJxqvWTqD7tRtoCvWFsoqMHdDrwEivXBK95hAEEFkBYgqsV1gBhHft2T2s6cT2ephUjDuu8Gn4GfBbCA2z",
  "key5": "45BKHmxEgZ6mB6jDcjXNJmwoCMPsavs4yGE9znBHnTGAHjm1MxF6n236FTiod7yi1wCU9DYHM75qVsi7aFLdcQya",
  "key6": "5LpKQ9BVNHj8if8NxtwSjW4SwYvjEmp53nNXs5xwWjb7X1Akm8fT5iJRNUv5DWdhGgK4dCqxDFSGybsRVRbKrB76",
  "key7": "2hzXwNcw8p2Hp9HD1FtB59zkHtQQhHHrADWvviWF22eF1jQpfto6b3nZPPimybS9pB43e7wS8fEXmosp8kdkfW8P",
  "key8": "24rqNC9bUJ23AB8MwZTKgnokAfQhyyZYLuWHYwasXJVGUSpXEjDF389FFEyjcgvMY3UdBN4ectSJvqJCd45fHf9B",
  "key9": "BPF4M8bYcswUcS55ZJ3JjR1UNmhDMGrm57TejFPwRb1GtUvYQKXJakETjVifYbgkbeDrsWAxhTsVejRNmEcTpUG",
  "key10": "4V43tKgSaSgtMroWS8cxNkZHaecgcbxskHoVC53gJpQRfguimbfB1BfFZ8RmUr8dHGN4z39DAXt2HVRaw2WtF4Wk",
  "key11": "2weTKa4P1weXEWET99Sb2tNAT4yV3Yha3BTBqpUGMfkiFTJqsBn9HsTs5MXhSCpphrdWpe975JmZodzUD5hJDWtJ",
  "key12": "2GKWCz9KKFdhahequ33pKkKA1V3dXCn4gfDyF6Vq142dsVW7yfQC3tZiXXaNr7rscmVNQ4TfS3S4YHk83RR4HzvL",
  "key13": "4BL6zMa3ebL3LVzCTUjz7pUR7UcpunU9sr2MC54DDwXfmS7ZLYtNYSr1u3hEsNR1zyz8vFexMDAW2usMd3p8y3Y8",
  "key14": "56GBMiR1k2HwELuy93DhGJmaf311cvJ2Uy6kfvPBKoXb491C97kTWoKtXanEzdVmPoqVHiKgLr23K3fGusEBT2gi",
  "key15": "4sJY6YvKqgMKi8GzbsTrUrWkCFhc7LvHLUJ9wyZwDR4tQeCeaTJetxQD2XNoGrKD9ycNBtuD1y7R6RQpwfuZ8N9E",
  "key16": "4Ys3AnAwYmbM1ZQWL127dkjQPJf7g5NN1fxBkWTPES6SiiZiC4eT6YszsLSLNc3f8kbxQEAxSL2ssUKj7GhQMXeY",
  "key17": "2chj9cip2cj8GLoGFh2QGAFk3P3ouf2LmuGbNXXvsT76TugBHVqXHKp3ZtRg1v2XAJZLbWHxtPXZzvY1zQDpmJ13",
  "key18": "oXSjEk3ugiQXWgxvyyzXAYyLLNV9jfonGzc6arVQqbBNczgvvF24Wvt113M2rZHFdkxR4x4Ljx4d1t2N2Dxtm62",
  "key19": "3TVQHY2VYfu4PdkBSTKcng65ythec1kqs3S9HXCUsuD6Psq24YCXmwfxvkHYfyNkZg3B1BF5kRjE33qkn2ku1Q7n",
  "key20": "ygxGV2AwCotBHqrHB9WFWwscdsJYNs39e2HQiVM99CSEdNFkAyVd8dCN4bg8tYij1UEGsYFUQTLTB66KZ9PUU2u",
  "key21": "3EVkvZvC43YPCVFSBiM4qKtbCEmP4ErN9WnCsnWgkktJsksZzCrkUGctQGFMM8TacBvmLMCX6FyPJMM36S6aRdx3",
  "key22": "5BR1q8w19ESoj2NuWQT6yGKNfedRx4G8dhzECBpKKuCJSTmHWmcKpp8QFxr88vS1YYZKEpDaBzd9g6dpdfvF4zD7",
  "key23": "2izN9k4XkeKHww98XukanEJhBbvJXozHRfReDeY9nDjjUeBhHe1JoEPUQGGq8pws5P4oVanVZ4GMpCUhpWENq1Xu",
  "key24": "uFDcsK5ZTEfxbZK3FX1DhfcnZGuax99wxwYZzUxSXkQDH9fiFz7KusjZ3xjXmxhuKeSxLBXc2NADaU4LBacd2Gq",
  "key25": "uGUcpBafSTtThtPtwZ42vrMTfrVcMReh2GbdQnz4pRA3kdt6j8t7Bt51jmB93Hs1vpKG2znsL3xD1Ry6jnPumRi",
  "key26": "46hj32sLjo7crNs6AJAJCC5hBE28asW9rz94ccrR2XCBmqQJ1bgetbvRmCkaidMMbSSWD4KwadeTKqvUwRDtBEPi"
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
