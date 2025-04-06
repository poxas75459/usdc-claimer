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
    "2JgzjhBPUWm3fzbt8G2kJRJLsfnjrkefHKpU9sYv7ph36PAxgBkpTiAEpZLS2HhM8UWBkJoJaxBDM1UZN13aVFbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dAoWLxameqtopDdFbHSqV2e8U1ZF8AczkR2AZKYqzPXaTFkaWHYUw1MqaUph6ATQeVuLtKzx6ZP68u5kXoFuTGg",
  "key1": "T6A8rU7yPfbKzhb6npYDqH9ZUBguTcfi5PgKRdSsaY1PGgPRXSvV6CaxjhBi4jpayhn4zdpxMyDZKrGUZ4gitku",
  "key2": "24NrnuYkmyGKc5BS3zw4u2q425fShYpBsgoSkPcsR3r5zBtCyiPNtqwmdMhs4RDft9QqUsZZN7StFsnQjGHd63pb",
  "key3": "NG1fTj2yjzT8zZ98q4ZuKViZsMnTi8iFX5cVuygSNScWH2GRy3qVh3UhJfDddMGVNHpupG2imWxHaw34D4rB211",
  "key4": "543vSaVDyvBdjSuvdohw1WFf3wnLMg8xsxmMk3fYeSgRsrkqUNjrWYUZapVogVqteCpC5mZn449P3cRJELbM2Vko",
  "key5": "6UPLbYWLc9h4MX6G3C49yhCUwPqWCt7wKXtJG5HX3Sfncsi6P4NYNkscQumz9Coj2DDxkTJ47P8hua7YWcaqUs3",
  "key6": "2MvfAaBX9Hc9SU2oDRBbSVXjJep5xgpGycZ6X8YXkEtfCQCW1EL8YXiEjdD8kZzPMez8hVosZfDmD1JEpibMdM5m",
  "key7": "2QUgKAnpv8awaDHjp4DsmK5dsJpbSaHo3gBdE3HPxXdMBkcnvaoJCNQqxPAKvdFYnyKjHi32jj8Wj3ZuncQCoNkK",
  "key8": "2RZCGiXjzzg4XLtU8KP8JQ7whSoW2VYeJieLH7HJNtXkcj9HfUHjGrbDcKX4XhCdjc1rJioPb7T5tAiiHLFbXFBW",
  "key9": "2ppd5PFgeBWGuxvCwjrNQwzTJLmSsfSGAedQNH1GmxtGbhDi27oFkdm3NBE2VCJ9FcwNtwpmkkCE5iktfx7HZATM",
  "key10": "4397T8hCEhFUnSdKCpGQ555UgueZdobvHJYhYQJmE8RfaCu9b2tK5eyxMVnkG7KGdD8Yjs59B1zWNxkiM9yPdccF",
  "key11": "4ehr1GkJAyRMKEJkcej7ucuuHMAUWCbcxvEEzN2FPJv7bEgF9AXuLuVC8NY4bpSzufaAahA7F7eMcR2TpcjnQW2v",
  "key12": "3GDpCTTU2Q1nAGDNKoRcbEtq8YGNvjoZ5FmBz3rebsXtiiQZgaUnvwr19PKpXj2J38AjgjBZRaEhTVm8r94MeCNe",
  "key13": "3SUWE6T6rjs9wH54JK6gDcXhLKbkqr5UhufxkfqFnRqDh2M1LkBfF1ayNfRC7pwPfgtWYr29BHE9nFD2a7DKS3YU",
  "key14": "3zkhHt4jFUePT84vce7bu8gVHjYiYgrHWbQX7mM7vwaCc6fUE2Xs1PfoWeNxebu8Esn3Md5kBXFeAoqGU7P6Hq9u",
  "key15": "4QsddbtAzGupYwP9Ztv8kXMsQPNA6FGbhEX8UFGVUFe5bmqhB4CyYn9Tov36iJ13DEWayyMCoHUXeuCyL1ssFggb",
  "key16": "57iYpKPaPtcceHC8dfYdNbX56Twdmo9V5JJrLTwij6tPCcqENEmgkv2MjcnCpBMDGjbV4kGo27fGwTphbe3Ds31F",
  "key17": "oV2smybPAHsESkjPamwK7drsBw31reoTvWMfSXy1ikjy686p1AwMQAqJXLqEVCiizh3z6HT8ZfKDtae43KrwRUi",
  "key18": "5j2PvhSgba7E15ivZupLdMj8PM21PggSG2Yuy5C7romQP3j2PGu66SVWyKmoz875KVBCLy3u1bfo7y9k2Y9vYi9Q",
  "key19": "fLT3xXpEuYSfM24LXkjPAjfVN92MAiSG7mFef1sXmm47ch63KLwbBoMcjv4TQSKjyJyWwJsGcMfHU1YbwEK2Ham",
  "key20": "jQb9hgStdeRwu5vcrmWXDsR3keKXtATTUnYKwedhYWSVEHMUfJThH8GmJBRqU2XRBnZ4nmXvSnxXrNwd6P95bBn",
  "key21": "4dszcxTqa8niNQdLJTGAcTye7Ap67aMPDcSUyYtML1aoA3Pmc8XbyDM81bJ24zUQcZtMRZdkqdnFybEkS51ZtAEm",
  "key22": "53EEJULHLgcwYspbn7Nu9Yf1WjD25aAJjmTFER5ov2JfPZs5xqdoUxihvVetFdyqea7apno9WfjSm3mM4exKJ1j6",
  "key23": "3V8FUop9RkN88dUrbtLFxACU2yr7MLf7Tk7sA6AvrZ2qoj2LyDdNo5RHHpTVAp69J96PQRNcQf3DR2oMACLaCzB8",
  "key24": "54JSJ8HnHcqL1rySPj7jZ8Z9VVyTHyqzJF3gjR9thmKJQKt2ZYhaCYjH3XN9Y6Y4bm4iHnwvc5iFH7LJaWUr8ydb",
  "key25": "2WLHj4PdHsGNhoXc2Kj8LfXBhB9y6pFz3kx3DM8QCbbLsKoe8jtRu75LvEZKtz7zRibbLxoU6nziwSAyD9fDhkcb",
  "key26": "HUi2dgU1WLsNneT7Kdhr6vabYyKYqxi2jP2wphFPZpS7D4WGdiKmsRxCzbyCdYCmGpXq28vMzFKFP2Z9E7J3sXj",
  "key27": "3tDe1CTTkEgDyDd6a9hdoBoe4c5ExeJQvQ5TV6S6LZSyZSP6dE27fGrMC5yHP2rCfs2qgqyxTDzUNidp8qnn9bAR",
  "key28": "33Vdanv2KUR7H2iqoN6HNVhVL52sfERZgp46LvwYVjfh2Nro4CjLVDac5nuWRiUtspH5HcxbPNENfKEXdeXncLD9",
  "key29": "2TLdCxdj5NzJvgNxDSQv5aQ7wiaoktV3YBondgds5mpNCkCrvaVqpuNv4punUyC454XQgpKasriQ7kkHc9T6dtLk"
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
