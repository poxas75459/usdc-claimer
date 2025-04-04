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
    "4Li4G3mDY3Cpro3cTatkA44tqBn1zdBWeYx6Ux3ExBvbqCKjwhBtCsRjVNmJrTx5HjAqCNficEzsDBsWbDW3WNcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vyJpNtGhsTtKmoDExxdkKsghBXdwbrqDZQN3JXTf7CX7AChuQ7U3zmJjh6RJsKoRbwpcETB8wrRUUs2PRfoqQgK",
  "key1": "224zfKWg1Qj8LxXeMGwZhHGMgjet9MmeBdNy9HSas34qH9oTmbdYeM8dBarwJguUcn1xzgEedAimsyYN3qUVaC4i",
  "key2": "2dAvmcn48Fc4KEwt6DHaREhqsKUYokNErYkgE3RdyquXFrJHP1GPQZkZenrYggq13mUgMCmbVQ1yukjJbFasPBdk",
  "key3": "A3RHZPu7a1ZYiCn1Y54Hv3dArtkudbErq1cCNjrVq3TkKykc5EP8sLbFdDS1CJ5k9ERT9rbrWZqaSbgnYo6aPFX",
  "key4": "3sduZbv58MMbzmTnckBfcY5qWLDty7iQaYmXdSA1V5MdBZzfP16oJXZivtXiyQkieADsWYEfuycayKoMaPdVx6Ln",
  "key5": "2HpudXVtdZnSquMXCgeinGNiphRcXfbE85tnDddTr4V1AP3kxMG1E8a64BEyQ1uv2YRZTkLC7bVLjx1QXGt81f6B",
  "key6": "2oKsGiNqFxMy6uzxkuEApjDQ13G6yKks5QkUzdp26G3MdeNuLRpvmKttzGBA24oTJnBaqPKCo2Rr7UXrYxuRn8p2",
  "key7": "5H1cS7nwT8kTm16GgPhx4vbX3Mzxy9jmA3AXhPsAn1DrRQyHoHBXVohFuA7s21BoPVD3p8zeRrqnXZCDaenhxseb",
  "key8": "vhjFek1u9EAT7ser52dLQ1VJX4FcmqDLDTiCGtbbKjGayspFnhCyDdEMWz1L8bDPDuyADCvxwcyM6pjbb6w1BcS",
  "key9": "4vuCPtC5h9QqDYsVSozrv2UkJRVG2C9MajNcPd78q5wujPM7RXG5oZcGQxMgr2eGCiaKZCStJvoDhXAdtkEyT9T7",
  "key10": "3ik4LujKYMoDVcFLsSTiWgZgKhCXVGqZpEbFEP49QHd8FY7MTHgxcJDeiPTpdmM7f6poBDzJQ1X32KcjPc4SZE9J",
  "key11": "XjXWE46fUASKLR9ms12XnX4eyBba8wt1uaqHVRCLH2ksU9jMrQa41jpWLtFL4En6mknLBneECgZPJCNWUU3WaYc",
  "key12": "21eZm1LCzBmn1QyYQX7ED71cf9JvnxeBATVuWrtBFt7g5W18vKUk4Fphm1RbTW5BxrMYqLSDNMo4Xk1c9a8hjvDW",
  "key13": "kMY81HbuhVX3ijzFpJHwVfdLXQ1qxQ9Hw4D65DfKJjTyC9Cudc3wzDvFPyNznmdZ6gCUSznjbFm6Vi7umaigkek",
  "key14": "WFowL5SLfHPANWTFr3nsUcffabuZycRrLaxdZyvfqhxG9VcWEMRaCDnnJnjkMkBgzzxLZMBSWb9PJDCgm8Q73GS",
  "key15": "5mmkwmmZfNrzQAcQaTuW79zWZXrAFwyqRK7pqWnyiqEHpHZbeaegx9tUDVuUjBAS1NWYaC59dp1BTVugW96Kj6Tg",
  "key16": "jok61UkBmXpEzKBxgaUkUgcoDpokBaKUg5X7PcvzVn1uFP7Nz6itHcNu7nQ6A8EDmGkG1mymCuzNTfUzrnWmuRt",
  "key17": "3o3HQqEdLhwzCYQXPPFMCAMQYLSv87mussBoSBjZyLyoFzw2LyxBk9p7Kav8qYtTUUeGvRNq7v3gtjoodCAsZB4g",
  "key18": "FCEhVkfbiTjGfv9nMDuLmAp2Xyz8Z8DRiTqC5m6edkop8p9ZBhMSSM1ZHdZBp4jLUJ18QGEACnwgGmBRDSMsTSb",
  "key19": "2q6CmqmjLRx4RF3JyykpGqkkENW5zgr6TqNjbcMz6qbupYBxi3t8J6PpN8NynxmyM9Tifr38SkAFCnvVaFuEbB5m",
  "key20": "4WPku5SZt5vb3AWUFQpZpP3vrtzBTkZKYTqKZErenkf8yWUtAZMirnLasQ2m9EcdtbYqUrJ9EdiS6JnseukjneK7",
  "key21": "4r2g4vophntKqjhQDSd66KCFH846s46wzmyPEZhd8LiJSUgdxCiFA1vp5asgzibzpPp1pUeE6MY9dh32R6KAMuzX",
  "key22": "4H25W67Uo5nNmXtUNVyjFebFLhPxYKH7EzSNaF9x3G697a4MoKg4dwfjgAckgyC8PMuLFx1sLfZ9txx6N7fNZ5Ca",
  "key23": "4VrMmvwz3REUYMjWrpHn8UEfZFRoAy7Vz2n5ip2JUkZFXy9NL2pkmXLvWsoiXuWi9JXdbpre11EtDHGD8DKGwY2N",
  "key24": "5P74913Wf6bJWHAPNPswmzaV2GvYRNSnSde5TNYTQA5TbwJGAKGcNSjneeZgAmoLebc2GGo2fzfmZCeUyUA8vtZi",
  "key25": "2KC6Bx2nLD3ffQRfbyvV3wFc18CeZBsFYLjbMu1LE4CtNSMw6am5oz98poV5kzzTMhbzFbD7HfkM9qLULFv3FhNW",
  "key26": "3gHHxAvuAoAnuzmmHoohfj3fU9NfLPZj5HE3wDdRJPQzsK2H65veJxsyBZgJfrSptYYBi76QDbwD7DY28VVZxijy",
  "key27": "4fXFWvCcAs3EB4nR1sfpJrXwraup1GLBZT3E1QqXzhC1BAoeYhWNWrcR8nzjt5rAAd7v2aUoA7dGJWyhBi67RmS8",
  "key28": "5YBtEmP4PzPDjQJzvbaS6VJbojzABRQUta2H3xtHxUTMwTEkBBUyx63JJxWk8hz4YWV1CSpYQZoAzJPw4YBvf6GY",
  "key29": "4yZqh7xbX7AXdqeDmePajmPTjmbuGcxLCGwnkZifWz2zADyDtEgh5VCafGRqEFbmzXo8UNwXpuCVLAvZ7LLXJx3U"
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
