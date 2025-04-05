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
    "46mAswtWukfCRXu32KYVLiXDYucNcb1ED483d1X5neL6db4EFS6eUi1bL4gLvxH1eTLdYmVBhEqWXND8kQ6QfcNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dvYqDHc2VFkv5dZLahka8gmr3gySAqqEYpgbiUjJoMnVKgNUWiZ7o8wea3i78vxFXRW8EwdDEMXRA7UtSnGKa7o",
  "key1": "5Rwvh6yRvjQCvUQGzk5XBhc3oSxiSUckKQD8mHZobHwZ4URPRcfAzhYTH1XKYMEps5LW4yHY2GgzkrNjySyWTaWU",
  "key2": "52RS3nL9eFTSg86rnXeBKy7Q1SmjzMDZ725hoLM9THpZ8JcCpJSWDjjgew1TTVSemmMtbUQ81KBHtQWA7fd1wqZL",
  "key3": "4VBfeDTe47pjZ8VfZxT9cqhXaRJktpqXbXgX9daQeKqHPnGPaTrVGYYQvpRpRnucQtMZcBoKba9v3rR6MqsDdH3z",
  "key4": "dN8F2SERfpy1LqLfmyD4b4BC56JqL2fQRLMSNNzynwTEKRLeE6q4EvfnQvQFPCJMhbr6jn6CYgVsSvz4CcFRVxM",
  "key5": "5obZXPsUMSPoaGPyvFXHzgwSmBruBwW9t4VGpxNizAT93ZhQZop5VEWJP5n9QkcJ1wsm4aJCDc88AZwkTpBMdhv6",
  "key6": "5SK8rToEJ1LkLBLqz3MdMUtNXKaVHs2MhYAeRZEvKrk37PqtZrcqmYdS96i8jYCnDp1RLd7xXetq1xg9YnLDVMEy",
  "key7": "51DamN29oRo9RUn1Z8swxAYAmmsR4M7yAKquQuRYetgE9MPokR1MGk48WQznFUsYSgE2qKSixNm2RjBRidFyVyXC",
  "key8": "2syaZBz64eMoMZtL3wL5jvE1WYGVvd3QjZG9zbSZ1bDF2oRxEJfWLQiHzMZhQLij4wzCfRr2UzxL3A1YhAcgJ8sh",
  "key9": "2Rm3d6aU7L8Vwr7ffX91SwFihHjYypDgiKdyZaULK8aN8mo1wX7qAd1u9V4AFjVuHUGSausEG9wLf2i5qC3cY6kX",
  "key10": "515ecfR25nxXuvuXxDawMi7YwQz4ZQfv4kdx4gs56Uo6EAsRcERdq7YSZw7KiBkgyBa5gyFjfyKWoWvAamzjTRhQ",
  "key11": "4nvjUXDJ9QLfPetrBTBtqADmude17bzRHzsQAnJGkX8qx18MgoCFBYesnAtQFuSjLrPjDqe7aLrLiF39iMyz1sx8",
  "key12": "3ifppWzKbBfQJTki1EGSVQJSHqHFuEDAe2ZyZ6m5Fixoym7nqwDHMBTNPTKWAn23oCQJYhrZyGagZvm2LvUw1ncC",
  "key13": "3QAMqVFEJBfn3VVx6QqzmcSxRvvRdCKuLqokB9iVPAHgnFtCNeMVYQV2vtFz7yVQWjU1c5bkVPJtmoXzvnDk222g",
  "key14": "ophsQbvBaJvvgNsWiBcRjfrjFyf2yCAnU2hWF6yUBRWYmWWsCsRmPLxxVjbVkqGBioU48avNAb9tNFnARgLdzHi",
  "key15": "4kBLKaBJMsYw2EMMVt2BNDwFfCZeaEmAmBKjMLGP1cJKgLnRHwBMFhaQXAGNnyxa8oDQr1UTVeTaApvvwCyUmx9f",
  "key16": "5B8tk791ZjWiy1ynyiWR23veG5mRqxMAKTdz5HwdUbmCLmG7Wxb6UbE8eo3kpJxc9SSdZjht725x87U4srUcMYbq",
  "key17": "24vXXdqHAb5PURcnKVcKmxZq2zoF4dKA3Zswn33uVFiP6JSu2ZKa4QkMrKqQUTywL4jGKufsyE1DmCM3jUHey1n4",
  "key18": "5RRf7UcRVrTmfhXZ89m9apuQ5JPi9DFXhrVNLtc4WhrEmwQvofZ4WUqECUYMZdiJwRHBLhvTTvChXyfvssBsSQMq",
  "key19": "4yfrreXFV2963qWAj9aoQVoL7icZPAjZHwnigxk7oxPaagBzBmNJ3CikyqQmSS4JJjZUSWECawDVue84eatsXFhp",
  "key20": "3oraX8pP9QZH8r58hL5z4VMY5Y6SL1GT9cLvHjU8zrPVA45z6htoSvqWVkpQrqfkmiHqHdcEUWQ2o8gs7aoLE4d2",
  "key21": "4u9jJjKaVCv8mjy6Y9zDNxoAJzsGJmt2DkG1L4oJGh7p28gqMkBXZFqk6kFDHC7kMunQQXYVMdXZuz8PdJtqukRm",
  "key22": "5C1RMfDoX6pJGRThmWX4w9q2XcWGa9yRxFsVJKcsVawxz5oGFs8rs8xVKrWKZuvTGiqJ9oER8yLQUXL5ntQnEMqj",
  "key23": "5KpUk7Lzo31fqtZ2vqBCxjqQeUb14rY8ADgSkZbpTodt6T5mqiPbJzLv9Wo3b6PquXgN4SPLMsBVwi2nBfJf4nyB",
  "key24": "4PiTb13rxkzY2Ap6hiRZUiRoMWyLqE37tMaBERWk27qezdNgDeoJar79XCvpgLCuRNbcNFjL7Sn3esoonBa3WQRr",
  "key25": "2XHJYUnEJHuYRHm9KfTAQm1e1coeAbQUCwy7ATS5yE9xKdatygCww2eroWNMb1FXzeRhEFDrTSZ7m8YeXTdokM67"
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
