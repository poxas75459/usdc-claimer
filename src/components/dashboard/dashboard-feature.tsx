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
    "4vHjhMYbjEL7PuD1RXjbo594NCuandyn7Kv8J8HbmkjXZPwiymQbvgKPPiaAPXEYNtk1nbaDcyFRq1Gc7vhM5oZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bBcNjwtj62zRN6bspFF5mdZLMTb1fhxryiEfyjvVa3umDsRdXf4kTEbp7GtVjUaCU3iQazrJZs9Ev8KNYLmeKcX",
  "key1": "2hwut766ML5WfBzwq72GpcubnouVuMso1wgE3zUC1JgNETSXNEztZMuPur23KLD6VvoKnR3UstzYQMMh1crqP5JG",
  "key2": "SGAMMq9gpt4JDfYZX2bX6W71KtDjkopNGRFvobxopN4j2xJANEdDcEk42hQV9dCCXXf2RKaYHHTBZ7fHpEeBWWw",
  "key3": "ZSe4B8KFyuwPAdB9a2PKv9rpH1cjiqnsDbfZsktMp6P79wf3tPH6Tf8BtaqypkG4oQewVzs6Rq2D5K5mHdQhXZn",
  "key4": "5SHqgDyDoe4P3aEmpP2XqffhsmLkFU4sT74d9ntQA5Es5SDLtR1hgAeQgVz8N17caxeMXjY9ufWbhENB6GDQFtTV",
  "key5": "2k2pLmTCuaBNoYEw9qv3du2tTTAyX69fFB9d1HJWFyCyPMk8obG8Vi9jTHzLjzi2ebJ5KCeC7NpK9AUZhVMJSEUM",
  "key6": "3EvGG7DNwcFtTzps5iHUZj2vfppmxkiDkENLrUw3vJBjfA8SsA4kt83kXgTP3SH2UozWSmB9cr4rG9tkptbLsvTF",
  "key7": "n8RG2k2vbGVqoKX8mMYZ8yZ25E4YNpBPVnbypmi641q54EkpmNiiTEMRVLbXoTLxg9ULNCx6FLDRphvLMBtgND6",
  "key8": "3TYJ6zKpiGcTACihU6XVifyMzzh2vpLsdhnJoktPLgdJhiy6MGDSYPimBQk2TXa5pPx8zBpyZx9mATV6vjdJAyBn",
  "key9": "N2r1bv2gKSYbFWkDF3FMWiScWqVrXkTibnQFprS9H2V4QxCxhQ5yXxtvCSboaoBsSa6UCYAQ6zg85kAQFSm9XMW",
  "key10": "2Uo2jBpWBYYCskaksbA82ys89Lci8MYb54kByUR8FRnpCCPheDjXbD4NSrqQ4XcuD58uwhj58poFFwNEn9DGRR2h",
  "key11": "32F8RzEtg397CfLXe54rz3eb9EMmvxqvL4GXyaiWipZ4ivJufEe6Po5vsZFdFqcCVSSi2aChfxw3H2iRWcwaEg1t",
  "key12": "ypoSkgFP764Dz7EtwwKD3bV4D7Jffy25BT2Fj4LMpgVHC7Eh7STsTr3gwC9EHcZVZDMSYKeUnHuN7sYLzHdCu1x",
  "key13": "2FqAwLRXwTF5pvUzEoPkTURYDrBWJuYPNwBMnLPJKPnkPqfDqsz1UK5XnzUguVkVJ4bGbuBMNruafyFnvxSBakgt",
  "key14": "Qc5QcdJ4P2WZsx1aNE5szofRKy4QP2rJjZavw9jVLXww3XHjYXWm2pjjT27ND6pgLNyzLW2LLqbajfFjKUBgYSF",
  "key15": "3LpBsBPDWWkyhqTw2DUyGajftfEfjDj7tWyEdhQCBtqZb3cESW5f4Gw47Jah7fdsrPAkqfg8y3xcpGWTT67TBZgb",
  "key16": "2fJwHfZqouM3am82eD7Gk4vtRSEj3SiWH2eViNESzw9P3ZtRHmDfk4eyXgLqSTb3kag2yMp4WdJMg4cv7Fb7LGpX",
  "key17": "4iW56fNe6iHhUzhjrgh8LpLu4dUZKrJq8basCwbvy37wHTbg4ayhbK6jPnPkttyQE1RfGT89tDHp3JD1yxT24f69",
  "key18": "mRQXpwHqAgdBgCZcNoL6rydiapmmgCP4f4wwGyd4U8NPQXyqLnBNGivC4rqwdbwd9C9M2euJrqpLzwx4RzXXksF",
  "key19": "4W6dvq3xoGRScW3skprjsD5PdWwojSnDe3hRLsz4EC3c2quXdAKGq3HHYEjqmrkachVDAxFui3pTe37vpyiDbhMV",
  "key20": "2Z3rMcy3sM9kctyvEbLXcXnGkadN3TX6i5DkSi3KS7jyYu5cGjZHf4DobeuK1NMkQtcyZ3mrg3DMTqaYK8EV7tKu",
  "key21": "gLXahoNTZLQ3Uwc8LY85TgSNpVhVtzvyyBAWTeYjWtrfobBqV4isQRxnNoScZH1M1bu4mPGtdja7B2LYzoGbFwi",
  "key22": "5iAM6DrmL7RBeZNoigpZrYMEqipaWrNunreTCs1afkqhLFa33a3SBjFv75qgqCvy2FBwFXRtqHcfqrawqBmpioJp",
  "key23": "4X1kEuN6KS4iRXH8k2qPMwzGvrAM1YW9Mx1F5MT3WMerAF4uPgyp6SDLudJWKCstxt8cJXdzMySMaFNRWn3pnEuE",
  "key24": "3VRQLkvSW61zr7VbVfKvu4wbkWb6VWj1sHJjSiiPHWQdjXEYaHCmNTh4DpmR9CcvpT8tJjvwqHv4qtG6wuuLekiz",
  "key25": "4iYm22jWHuaweVE8eLcg5c2zoznf1wHNwSkRKwKSKFRXeDP1sGbhSuzWzJXkfmJqwqapr76vb1CQEMZwhNvxuTrm",
  "key26": "5sQNiQFzJr4MzEqNNehDL6hzvdTVJncxxjbcGqaVi7e4jDbfRPZHYrUWsG8fnZxpQQeMDQHZ1DiNDAXs14y6ef6P"
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
