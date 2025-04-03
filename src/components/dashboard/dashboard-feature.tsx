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
    "GD5ZZQQjvE6v6nK6PXHVF7ACeBVfvja5Y1fWYjTF2PC5HeZzH4K9ARxNteRuTv4kgxjo8HdscmzCRyKbPSdFv8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FoPnSa94hTRWg3mVac7z5Pb9WTmqancKs9taRSTnbnZ4he2AkyVu1yAZ72Cufoq21ZDWaV9nw6pn7XN96Zk6RjQ",
  "key1": "4chnjjsHb6QUwxvZ8xaAAUjw2ZpHTQS1AnmT3Rne2dWbRYiZN4oPCr5hXuG221kpop1XvuQ9JgARgYyqfGzkXjkz",
  "key2": "2RTkaUjxJSqqEXqXtqD7jwbCL1NcTeAFs9w8WhypZvJ65QBByeqy3nsaExQcn3eyjYRrGZiKqiSnUVFb8TmrqSBg",
  "key3": "4GDBz67gKnpM7kzHjZYAg12uhgUZQzH52NQqPgAzycckPPd7DrKTeKate6FhF2ndTkR68kxrow8pUcZTWmdZKQ9N",
  "key4": "57xUiHAFxe7PVRJ4Rgwbx481rCvFQBokD68qa6VszjmDUmo9FoyVQ1NHRZkQ2B2gZeFq28oGFXUsTLhfv7ngkpJk",
  "key5": "5b3btAmg7BRHK6HJmsm77MFiZZkkwmhfQpag3KNm9U1NY79QzcwgixScQCMQZdfwTGFBYw2sV74QGJJnMuwWnH3f",
  "key6": "2UGZLPFMUM4wqyuZc1DU6qiPGqcnnqoTLH3D8J4RgppQuVrXmXPwEp3ACFvFk1UGyeMKixYLGRo2JoD8QKrEK3Bv",
  "key7": "3LMojy2kjVzU6B1PBRR54cagDR1G2bKmxkWBSQcW8QPjumbtPTq2SMr7Km11UAbF8nRsYhcTta4MDA3QDeKhMXQk",
  "key8": "5HrfxUaQYbqHbViZxHDyYfJp7MAfJXWYMZJrsiyU4ZFGNAVcWdabFQpXK5V8CPrh88JZGPkgGGnN9osgxFsxqL1z",
  "key9": "5GYpAxKD4RNP83i2nzB2orRaxtHJGhsN6ntVZ3WWRYjBWASY6NripKYqr3rvdrqRxYiRaETYjxr1gQLx3qfw6XQV",
  "key10": "56ftgEBZqVT4HWuRAGUD93KZT5XMvtxXPkacXwc1yvCr9vnNsZGd9ViHQikfspVf1NfGzSezW2UcYbqogcC51kiG",
  "key11": "2umq7NaM3BUzdrLDTx8G5NFzLnAQW5ZYWY5VYaKZwJag3KhapZY4Aig3LfgYrsagv6hKnaXXSS9mgyagL4i6z2zn",
  "key12": "5VWtt959kEqegY9LEo7XwDD6JB4Jxoj8Fjqz5tae6BpHccSBMEFvg1t1VdKwzS761oLiWmXEJMYcr6zX1Ly9wfKz",
  "key13": "4ijYikKCshnv2kaRnyhx7Gx9c3RQnXoZQguonBcX8HXZtmH2JmzQdtqyYyYAWyzarveRB6iNZeYm1oBXw3VHMbJm",
  "key14": "5iaSeK6vhsrzq6EzCA6F7B7LrdjxjNdPxDEyRtUKzoYGrwVFJ8qrdwqZT9Z7cpt72p7yviHFZmyBWBGnrSqvmjqY",
  "key15": "2bQZzvNoX1iJDLyNfrddxzVoH5ZLuVwFD1NHUjL27LSDdnnSLHHx65TWXusM1jvoYNyzAR6vTTU3VazuM7B88Pey",
  "key16": "2QWweyr1NnUBN8KGgqya1C5XvAdfEtCqzvwPFmTnzJxCGchvkMnv56TeuTPHcitDaseAhqxC9GwC4J5ZJKkQBSQF",
  "key17": "59SeZQ8KjXNagq5C57pU54m83N7268W9GazaixetmAiEfX5MsDGVGopNUVdLhvSQYAaV5B22YqGMXdqKCyAtdjG2",
  "key18": "43YDyEXutwi6yB6D14Dt9YbNuwAN5bMhTfymNijggJ65TCSt1dM2UUtPGrTMfskXSkYPB7mdSH62j7yehq6jws56",
  "key19": "3quXsfumaoHQXMoRW5qXCwSGmj2UTknGiwrEg1E9mLF5ebAs48n1nLEqprv5G29XF7jYt5PdGQw7XaGy3M8mSHVV",
  "key20": "2RgJcewmZmmEBQjcPi58UA8vW7wetwaFWLVBEMfPZjBqmMTH5K8wr17RJJt18GtxuNt6hhUCSKd6Wufsxe47ThhS",
  "key21": "48EHk6GTscHKREk9YYEJdxPxet6JN8b3kEdSd28Ryo6DB9fFJbkxkyUu3Rk1Sw6RoBNWPxLnx5tyoqReN7CSd4EE",
  "key22": "34fgRzmS9GefSVfeEWgCmBGfQ5tWKzvv6QKNXYz2SgLEfvnd4NZ68qsS1Vq6cmoyTdsQnbfWGe1aHLHaoWn7ynAt",
  "key23": "5uca9Yjxgqn1kb9gU3qkWPqiJd5SKtGLSzHiwdjZDQwu46PZ4B8qPULqMwcspW9VWUEM2P8qk5sAwQfmZ29ggbpb",
  "key24": "2unoT48SpLBkqSgDrA5fhinsaRt6dXzJPwrrHKJu6jVmhCA3WXUg6MRJTmZCziY3kLbjzMLBK3AokPGP5darvN4P",
  "key25": "fbgZFBaHwJRw5QRrMTR91D33ymFwgwPtfJ7nXaP3EnbKo8r7YeSz8WxocbgfYty7oQApWiA1hSRb5kJwcMTg9zo",
  "key26": "95sEJBLEHxm5Dn4kADxjswGnW59S7K5cHHdPR7hUXkXGNDoXETQkkFdW5Gh4zmaZxDt3tngAcfFMbzH8Htvkk77",
  "key27": "2kXy3hsgY4oDNBkdUzdzLkKbkr9qcF5TfiCstuXReGKLrXsbAczhpAQkZ1gyDwxAjy3yjzGxVtV1Mw3nAiCGKhrb",
  "key28": "3zBaqtg5gnmf4RqPvuNrAKfRP2Nomdz9zRATeAs1gPn1EZqvFUqRVauCsk4PVADMiZiMvNfkLrksHFnrPZwuLsLT",
  "key29": "2haW85rZNcUE6WBuXYDzHHwoPYJyfk381QkidaQRNSefHLxSpYJshmkX11cweWo9KxTZJrgu2RFoPEc3qudTaz5Q",
  "key30": "2m7rxkG7BHMAmpCY3fdpY26PCtXYqzK9VixpWUZFhNwszpm8ba1VP9s9gb1uJfJDP64yEqPbA2YZegtsHksoZmDG",
  "key31": "4LXZaAu1Wt7RMA2pe9GM4ZmpxW3dM4nugNXRTFHMBxJAnriS176wrDf4s6ZYjQDcxqPkvmsyJj6c8rr9oR7Cxo6P",
  "key32": "4B42tQeH1r5PZWvvQjBwFLrVk5ZYfkvGxKbvF3AGLpCs2x7FMsgApxa7aTBnzojCQkubZ1yAXUrZ2vC7DC4GPDyK",
  "key33": "2kzscLevgpDidjPkXNVL6xeMccBKzx8YVKVKR5PcidBxMeebRmzcH7KRgSwUXb2bzptj3DF47skt72PWSKs4ULhv",
  "key34": "2demw71LdVjSdqfP43AKciv5mNYmNEVFPaqutdxJ5QYuCtuUX2okKmBFbhS8ne3217iP3DbtwtsCnG1cuv9pFRhK"
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
