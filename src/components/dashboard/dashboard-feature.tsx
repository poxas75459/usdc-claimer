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
    "3yDHCFpz6oPKhP1N1Q9rvx41fKqZMiCAyAZRGkAP1YkfPh9ypgmREpuboWXZB5gAtm2egzC1vC5MC71M2L9YzaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39H29C1RXh9bVTykS3eMdxGN8eFqBt9NQ4pUALgUDV6BHXoEYpSeDbCuLHP18uCLhxR3r7PfidsjiRjXQN4iSqkQ",
  "key1": "N8y2Ez8XcczZM8UVAjc7kfmndSMXHtc4HJ61eKSCW8VMHSovoA7G2eERj1Udh1YQ7qa8DcjHPdq3CBWTMFyER9q",
  "key2": "2bgTMZs2RytYdyifdsmDfisPUsCJvfcs5WQ3pKPm6xGhDYmTHZGr4SyPWEq5MtcGCd8weVEgJDwMhygxWEA1bLpo",
  "key3": "2aownSoV95KtVrngEHoH22XpnFbqSyPsw7Yk98HzuXg6mtc2yfwHs3wH5pZLkMNQYge3DntCLFu3vtexnU4ofn8k",
  "key4": "4AV3rEW5wgKB3Quh2fPFFNT1NT2KXW8S8djQJCeXPbZQf8mMNFKPz1NbLWB63EMe3oajaSvEUR7JBAzDDipyx6qT",
  "key5": "4VF71G73aup2cBfj5oq62WErBM3FpF6dMK5qs7HoUkz4YADcCfyhZQ1nfFWBdGJ3Y2eQqfLb8MeCXUHcg9FmeQky",
  "key6": "4z7TRwDoXRFuEXJkAyAKvNefVDTLdyAhtogjKsZg5m1mte47YBCm4Vk5uTgSq2tPXtuDNv55cWq3ZX589r7pG5dR",
  "key7": "26tumCDDbhaRHafZpD8o5rtB2NGQh4ryVTGF6fsbJfvuRXqu5NKMW5HJuwnfnzuj76615KaqHHjEWYcxVLd83fzS",
  "key8": "4eQbmSLDGL6GtswwjoAUfUektG5SMy47pUW54c4s5McCKrgtcrLyAiDeL7Hzif94yLLitNNfzZS6pBUKocRGigiZ",
  "key9": "4haXWZyvrSRqsJdWdy39WCm8wqyHjr3WhUaSS5hFHrxRLBuCHSyqK22bNptEKuivyPTEC3h5LLfvGq2G8oeHSuur",
  "key10": "2ypEdQdXgpieDZJoStNGgzymsy5JFXCBbB4tkyH3F4CoZbVA2DgMWKpp7Lf56E7V6WNDQAdwd8uWfTGYCqFkVUkB",
  "key11": "3sMjZxs1ERsyU77w2V3fGLGYogncKB35FbMkvfSCzyrnAgyNaWQP9FwD4vGeBp74tgbrhpuSEDs8NpEpVgn6jSXC",
  "key12": "5nmd4bNf7ammTiiLTDv7rMjCQHT582cPV4rBgJBjHxggUdfbAhh5xE5sKQEGCksCpz8HkqPPyJkGF1sXvdJN4C7K",
  "key13": "22F3bdRo2HCxJsBVsR1knpPWt8rXx9xwrNx3FCgR7c6XuJhSmgaPPwh2FCGUjF2abTh5LYwWkEAADoTvQUSG4FFp",
  "key14": "5zvTYEBxUojtrF93xuX9dGxWH9HSXSdoUoyc5RoQmxmBPZwi25v6iTqt3VQXWEGPwrcwPP5PPVfrQ2cn1zCBY1fA",
  "key15": "4dFze4mmnRHUhJfg88Qb7ctebCKiNy2p1jq7ktzbTLM45xkvFV58XceSjEz8EtyeuSH2PZrPMjT285CXYzVJCZKz",
  "key16": "oZAbhmwT5ieuZDEUehUcbYzWLbCoQaHCmNAd5fCJEJJa1Fsg6bfkUddX2wytgwXJeUE91Ry8whqCm8RsxFPArGS",
  "key17": "38doJbi7PGwT5eGhH3hTdHpKLD4FyR7p4144R9wFPYdXbvgg9SmSebWTyGWFFj2dkULFnJ76gftYG76DSRnfShLb",
  "key18": "5prTxGVUqfsksKvz6wLXTTGi1wJmCFUv9VHHyWygEHtEyinDDdBbTuV7xY2uE55B46JdaNBB19iECGHzhmu3QVSb",
  "key19": "3ZH9yn3KPC16A82Aa6wxQq1X6W9TWHQdMwh3Kj4MA1koUkHQiHypVwx72z9UiZfJoUwixZ8xhzUreCLnZyuFu1wm",
  "key20": "5zMYkXft3d5jEn9ABF9KD8FgAD8J6fAWL9MqebtXva6okVBKKmcL8qgguUFmz4YkzjigNsweDgS6ZvVtd88Ckw6F",
  "key21": "3RMvxcXbKoyFtg2bMRf2e2m8RYYpbZfrkuCCppk3t7kCt4ksrfafMDJ6NqsHsXwJqpMkNwnQazqh2bA9pCWBYmyD",
  "key22": "5AiLcqQY7FC93QvPzteXZpsX35rwHDJZNFmRBThXhs3bjs4emArFeA48JwHnPCPDydjGYhFuJ93mAJqKQYvBCDJj",
  "key23": "4FjQtzBm8X3NuzDdRc64fuWUNNC42NPcpytjgCtM1p5BK9iyYwvvkPfNB7JQ1hT1HjGDgPn1zATcpZQbye7e7ep6",
  "key24": "oyS9tznRK6WYj2Jz8cA89B9AyQSXNtrSAR5Bq8srDZe4pj1VWu5rpoFDb1Rs8KNyBXGSvquNBhjorCKqKW5NLET",
  "key25": "48nJyDtna9REcj1yUfEDQwBjzPyN691X6W85fCR6Giv99CG2RcWiMcDFGSLtHb9r1Etav4xbwmsFxxA9hGa1s8Zv",
  "key26": "3kzVwrbA2Sx864hQEH3pZXGjsvbEKeHTv3RQg7uKo5Ustqc61DgyVHnoP89GBi3mkuaJZJE87DAQ4j3zrc5XkuuG",
  "key27": "TYPXMX3nhgnDZcGiDYk9mVqij4ZB5rzZpVvprDDLXcTDx56dbssSjfDiHPLRWzzQPab4uYzparsQuVUBNuucQx5"
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
