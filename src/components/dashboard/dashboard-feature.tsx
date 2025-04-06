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
    "4thmmVcYrDbPXNzsU9hwVNjkFzbfFwxCs1RBBMbvmy9MMe2CdggAJfbBWPpyFzUhEVLPrSRe2NZ3Lc51B9WBsYd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iMUuYUm5Fhtwv6YZ9NCjR3s5F3LeNc97Jt99muVgiNwa3AT5eBa1DLyjot5f42vk6s7ZAcCVtEHFWAwzMs5zJDq",
  "key1": "BFnHhL1u35FvBSELG1BJRy5aXDnenTdEQmrw6i2CFw175nzZYv8ebTAE6pB7QKaBzgCdoWDCUMFTTfEAivDbtV3",
  "key2": "3XDVp3A2baEtELjp15ETXvcPMkm3RHUm5cyWArMDNd4jSaACDh6ajRveMFxViwFTa6AZTdeoBUbH31M4QyfhqXaa",
  "key3": "G9UGtK2yonKV1P7fydKL5M1x4pJimUwDoqmGsr4zFU6Xb9kBq5qYdbvQWHkn1yMU1eDjxuKhkVoxqwrdFLWVuPW",
  "key4": "ueawShbo8PyuGAZJ7ZV19mgTDc7qt96oKTjVDKRfsAJL33eu1WrDEna45zw3GuSMq4i94Q8fyEXawUw5AC7CXFr",
  "key5": "dvPemTo7LYdP9ocfDbyQQZZ8nYemuAimB47AC6N1ypKrkGPPwVA3J4M3Fyk2H9PmMaBhSNTS4ktP1zENgFTxUe2",
  "key6": "4BsYr4kzztJaJUsymuxeQTmeFUhnP5NBHSWzS7b45xCroe4CaZ3cfYNtUVbnFLrQZmSRQvhq12crKrTHpfZ43QGQ",
  "key7": "G2Zv6Cb1Czgh13UxgtukapmvhsomDAyY1rTPptnVJWUr2pLdLbxkX8Crk1s3N2jvd2tQ7mwE17jo4SopBYmdRW3",
  "key8": "25gBLUzzH7h6QHHXk7xRdWQT8aTyZ1BFtaV4HQQ89n5CViJPENDZQBLyQQNAum444TFiPFxUnedbGMY29okuAPe9",
  "key9": "3SFififEqKqxfX8c4Sh1RfHo4jheZh7vedNBbqDMD9nPmVfyk1Ez4x3sJQxG7YoK8LTnmZQ2CDgkhgXkxxKgnAFL",
  "key10": "4cn1dbxoTxQCXjUWS64vKpQUCWXsk12Anup53QK8BnwZUUcDjKjmSrEtvyD4Batw4g3LE79LozFXpSibkMUTnZhy",
  "key11": "2sJKjqMzfMr6qobbfp4CGgMTjtnCDDMJnU4Zxi1494HBttgYkKFBAarCFoZxDmWcXSctsc1FLdzAvMAzt99N5VwB",
  "key12": "5LmUn3hnARgWSu8q31wZ9JD2LSayydRhyJcJx3aDJU4z62WoQ6S2pZ4n8rxNxrDGqd4X8NFdRCx4khT9KfNBBZB9",
  "key13": "4FPEexX4RwsiTK8CMwoWajLrKnNFC7iJawvxUFiCEVjoXQXtfZTHpyM1et5Qoyb8piHCCkpudTp7Vvz9F4PCi62L",
  "key14": "3AzkkKPj4PXjWZHicipmw4schweQnCz3Qs6qUGYzw6W4jf7M19vsAuTbL8cccVcLtk2K56U873LW9kw6d1LWKrhJ",
  "key15": "5iGemac1DahsYZVi45Mpwt2jqQpGcxX3WvQZQkpwxYfWQdvzfk8SjyYfDdimqLcS5JHjKHvFVPgUHc2CVoBDJxQM",
  "key16": "xDajU3rJUWM7XXEjnz3iXR8CyecNBf2z5NEocW6pSiZ3Gn3Up5b9qYH6v4jsg1zHiLniSifcLeKSy8M7yuDuQMK",
  "key17": "4TticqszyJPuZ5cuoVXpF46rQEQvV1YSweAeziVKKpY8Noi8n9ppmBxkeuUyQePq84Cxx6bsjud8Dn2GAF5xr7bd",
  "key18": "5Prx2X2UVupmC51hsxBK8Ndy9HWkSoSiQrEzGKEtywNUDh24543RMD4GxZDQsChJ2BWc2VRs6YV1RgfCW5WguURU",
  "key19": "5xkfL2TJ46ZvVrWL8tnpBCogtBzzcHSFKX4nmDJENmcWJ7QhKRXaCshiSEWsSCPF7S5tHqUxEYby1BGJB9a5eodG",
  "key20": "4qxWYx3j9YFzmP9XQZ39NLqzfAuBDKMbJcHVrUHYPZ6AANmyoi5w9eM5Z82D4FgmnQ4E3bc6omhyB18SvPcARNR5",
  "key21": "5MjUXowLZ2DKZ5faC78amNT8X9qDoXVaHgN36pAhrkj7GAssHsY2eXbYaDPU1Vft9HfX6fMbt9worj4SfziJ4Kqu",
  "key22": "5Gwr16gMJJ2qaVTpyf8jZHvoRHM6gnDY769zkqjywyN8vbHiqLRLABh9A3dxSM3Q7f8jvY7p2XCeAL1C2LwuPL9m",
  "key23": "2r98vzc1jRryobVkLpzUd5qe4sKfzMBzQqiSD1JAhp4n2rHt7TF9to9DFwAoux8uzqZBm2iJYy4jbSu9ixZdDQa8",
  "key24": "5zGzinJnbY2P9mTNehYyKr58J6VRcWbXiToSkRoSrHTmBgKJCTYnvK2PKwHVxhouQyNcZDGD8Nm1ZXvrN7UFFwdJ",
  "key25": "34soH1Y82XJW8Lw2fBTM2GySZE66FoL4v55VfoCy7ay2cwT7mxcCYJu7rwbRynpSxYETS1WzqAPXM9LoFqTywEgZ"
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
