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
    "Q5RqS58tjdXyL5CJsdZ1SN3fdVWwPWhu7ALWHmUfLpJy37rh4UABtbeRhETscmz481XVPAb8fBBw7EsrjZhaknP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dkCySmX9WcToF3WaKypSCDQ7ZcRUAQj1HXAD2DB9io3XwNDCN6ReGLqc4HAbGUpughr79koHXX1XACNXxgB2T4T",
  "key1": "5jbr8R6dBEoxrfdNbvgktBbd4c3Fz1jYyhxkZoULS2yELiRiAunvRcTZLzvNWdgb1PfsN5dtiAJff1PACYncGoe2",
  "key2": "2dYBuDFReRyKkFiJyrZ7PdjQXJ3XgG6ELi42CHYeoqYZ6PWy7TLfToAVXoA6gUYNbvKhrQdaDEgnLySNLjjmK23g",
  "key3": "kP61KyqXSXV7sPcE7ZjzXXMmF2idfK2eK14yBbczU59Cs13Ro9exuamVh9ktNxFsCFBEgRfhCt8uYuCCmfLw8i4",
  "key4": "67SyqLbLSSv5BZFq7ryt178dzsaCVjAAMPAhLXngKPTmrERcyGZdibzzYovpCLiJ4wrAnPTakpSXij75n9JMzdgb",
  "key5": "4nUkNFTpw3Wo1zPqGeNVwjnJsWsRCXKAYsy83qFcPeroWoYAvkmohGKxYnk3LiUQDYRLFpE3HnVB52ieGbaSTWda",
  "key6": "3HF1djg4LjZ49o8uz7sxfWE2r41gYUXezdnJf6duj5RENc9fkxYYgViMvyoiZd8cpN1LL24jzStSUoPhdm2sMe5v",
  "key7": "3Ysi1vjXtoqJVXrVswBm9SxeK1FLZdfLGeHMStZcTMiT8weXKGPgtai5nMHMfs6dKFowDvjtUYsc2Ymf5G1HyzAd",
  "key8": "4Rxix2NEWsYk58uSRohLZgG7M3NHQk4mnQyUQA7dwWwRCc7ARnsU6r9x8S97JWE6nMiawDXF2DtdzDP8V9aUt2mo",
  "key9": "3GvpYM56JNUy2vyUXufNkZvDVNjAd2HCm74XedZbrkKc4AWh1Sb5yoWJGZmNiYK2vqQ2s1ZFido64uSwp2Z3KnrQ",
  "key10": "3XzcuxwY8nNrL1BnwGq3yEWi1AmPi6yT2tiSAkY7zCxMyqBQuKsh18bzzHWScsjTLH1Qh1ycNbX6qTiz4eaYK87A",
  "key11": "35smjPjfecioW6kEW4ND8LqMBGf2xvqPfujonuyHHHpJ9fDKnMJqA7WJ1ge2eKGqKsaVeg2PeCJLrp7JzUJfcKT3",
  "key12": "QeafPTBxvhiqAZS3JA2MTnNsboMoesc4fyUDhQRyp7x1LbXTcb5c8PtuhkBvH8Hacopvuq5PrPRAmH2bvu9YNgb",
  "key13": "36gVKzGeP2YX4r7SkLGCVgtgD29tyfyoCqYetuQEt5RKWgLmx8JfdB3rWxPfjeESAqgdXqJFGbN3dgzGPfV4kQqX",
  "key14": "CSEocw8wdLBcGBYLsx13w8d2XnM3mqokX1wyEYDZmXf5Tw1BVhZcWZ2qPqiZpXYGgTmcrHwSarvEwDxX7fJ8hhJ",
  "key15": "5jDuephL3fRNgV6Dzv92dxkaTaW37ZDXAiqiGMt2ngibn2iVNe143AfuJpwxqKRjgfh2o7QbpfvZw2XMsaYVpfXW",
  "key16": "Zum5CQ7a2GP7yAAq7wJvugzXqGq29v23aPDgDVCp7givmoUeNbVPCyyiFwWbdLYjyKSJ8PZRzRS3WziJUWLft64",
  "key17": "5w55YxM8PjZ577nyJGyUytFRWqx8b1x2MfLpJgVTLnqy1TVsQtk4cedkVSZzQavWYsh41DhRfLHnQVhpkLqHjgoT",
  "key18": "4fQW4n9KodhYhsV7vDyfz4odwiQYqP6QnhSwptPRbAhueov9pbqE7vaGv3JLBexbd2WhKvAyRaeDgfcgFGchTPdJ",
  "key19": "RJr2LMtCjZujimpzw1ohXiHh7nw1j4Gkuj88PrcReRcemfSdDdt2e7wDeBxibDvaPY5SpfZ1KHv5UjHSLoweaNe",
  "key20": "4Zc5xUpUHFXrGuWDNMXscTDwirbfp98HjRF1DMhARc29gkqR6U9LpWxYFDwasfDHPY3ht8u7L26NWJ5zyNAd1tGx",
  "key21": "2RAipcgjhiK6hbSGMPTnkrCWCjMtg2HP6e1uQKu8rvh7PP8UMrKxiv3D1AJnDeEJxsqRvDp8atZpAdBJvzyrAdmP",
  "key22": "2xz67irxZE5jJs15eeaCMxRwcgAHE6C2Uc2qh3w8aMvemTGMTcjc72995youvmFJ7S4xuyFZvQJW6iKjsntGPBVj",
  "key23": "4xDfdXkTgKazx2SjJX5XYnziEi4K8xQMzxEWdoK5Ly2vTTyUmMubqkHRHAaRZxr57MEwFux9NK2FHgkiapTo1cmz",
  "key24": "3mveVeu7VVUBtiSnFW9WRpq6aL4owDUZQNF41ZjmZmdpsvrYwaebDWU1cbYBEPUBej16kXr3FqHS7w68Zra2BZ3V",
  "key25": "5YjrsC8uVPiFDoAdJ1AoF1nt8Pum8LLK8CQSi9UfM8o8rL688aQDvsp23yG2qt2YjEAsDYvfUA1t8srPfS7jMHKo",
  "key26": "381GfWTaXos7dZW3Z11XwFFXgZjZ2bo8JrtZMoKpWPUap4Es1wDewuVCAzyHjy2JXvXSnp8AfBAAGbNSNiAmWTAq",
  "key27": "264QNWFu7Q5pRnYR2LHpgYMo7uZGwWey2SztBpNUjTHYReteZpKNgdQRtSprZ9sdDDtdiKUFvuFHmQANg5NoUWcZ"
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
