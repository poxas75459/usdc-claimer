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
    "2FXWp4UNwk55Ap42tNYTPi7sc4RLdsMQpCCZS9X5M4c4uUNT92wotXNoVtXWusk2sfrNcYNUYAZ2siSFkYyfYC8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4knLoHdne8AXCFuEyq7Z68ak72XDyTNdTjB72HcEq2SBJps1e9ZuYzBtcH6MxYmBRbdvaQFc7qMR4ofjLKJGZ5uj",
  "key1": "4mBJm13CRLnvpfhB41XUbjyG7FXBJvnXDTFqqcC6C4VcSduFKS45jfXfDS3kZPCNowPrh8HJwvXn5gJBBFY9Y75y",
  "key2": "4avS1QVZptWRbTrdb9zGsViyEjGQn1LLxw3HR9Usz9YJnekWa72vJWFaAUGB7cZYLuZyuERFNreyCUgKP8oooq93",
  "key3": "cE27E8mqLhUYYRjqSKQ9xBQQHmEji3Ffb1Fy4V1Hmd9qqxkNtNZJjgcjzy8hm7K1dY9mDNLbQQWBW5o4M7zYezr",
  "key4": "4LzL4FFtguZL8GhuoWXi1Sk2jGXQeFRBT6qCFF39omfKBVTFVdgXfiHZuRxe2hMMjqJ2DbTK2wJwPHak9MV9fb9u",
  "key5": "bHn95GWNP1NjxvTqFMhtDDsRocYqm7MHkqicmHudCwwnyhvv5RMhDfhBTnU9nyukyLmWHG1afGCfRDo8twSXMbE",
  "key6": "4HZdMvCeYXReZsipo6FexMoP5yvhmmVsbdUp7Tdxi7L8FyGruWmqA2HA9tqq4tojMBi7p1QDx3Pzp1ajVvuAvpmX",
  "key7": "37fAUMUMu1qJu4wVTXAVhLc6Yfs9w6zgLGWx4rNKrAmsieExvjNkZoognNg1KHofadJA9bjEzCESqAgDyVSqNpVK",
  "key8": "4vcxjzcmyjzN6bS8z6mRddhjTJmfgjwhWVdVZtRkmg6grJmczbaqkLKzfD4Fsj4LvoDr4QwrETivL2hpWboPjDZx",
  "key9": "5FTajhuKemDAMhxDaiPXvfg1HuZz6pUdk72aYGSu8oESXAB9taT7ZvceRTMxoAXJA3odfNCZP8DBELkhYmWpicU9",
  "key10": "5SfVWfjfKYsGQMdh7npujUPyzi867aPumC2K8aV5P2VQBffK3WPTwb924iVYfYbqR67Gk4KDj7k49HxeBozVx7B9",
  "key11": "3mX63XPo3Nr78X38jAYX9jgdGUa9YzyexjpxWgqwyD5fVqcnVC8d4aSxsSRaptQdq5fHWoLHTqQWiCMgbGTDo5sq",
  "key12": "3Camv3WDZdfzKDKtHxgcPD3oGutb8sMn3RsUiaPNeH3GYQMj1bLtrFniZVyXo8xH4UU5fth8sTaWMj5f1HzQVys7",
  "key13": "5HDEXBjzLtyTYc6c2VpMFZ9yJA74zeptqrMEvzYAYiC1CZ6LSg8Xe6jmgo88G931jYebx8STnwGhWNp4Qd78mPgW",
  "key14": "21ebnydcX2fcYnT3fdpZWD7RiDsG2zL2Cz9gAJj6XZcpEECorZb5am1qRGA6cgZidramHKiPpuSjk52UryjrjTke",
  "key15": "59UL7sbKCVFSFQnBhQxTzXHgh7mLiWTCFJDWV86rWMd6NV5eoJMcB6kTkYguMQHMaavw2YNkyBQveR1bfXFFuhJB",
  "key16": "3zSmAAUNMRQkRhEQBv3mAoHSqXA5mFtwEctM4nDyK7t4KSZ2uNMknuDVzkqRQrrYbzjSFan2pmPKj6D5JtwdSRM",
  "key17": "3J8JoWbL7Qr7mbQR3DP8KZCxN9dKKcuTFCc7YPSm6aED5TafE92BnrvBhQzfCaNVzPyZzCNK7vp9zrKf3DgpY9xX",
  "key18": "51JPArEJzkLAXDXQdVpNpSdLiA3z6Rmp1SoNN4gQq714QJTrGVXY6qZJPSgF6LZpDggi4dFdbUAiMovhhKtFKW14",
  "key19": "4TAooXejUByrB7SFc4doytjVNxcXD2DKkebpjQT76yk552jiZfYxZ51gqMi8vUfdMKCSvA8KEvofNQqLA785ABe8",
  "key20": "3dwumKNcKChCVoeNhgbAcAuE2iRFAoJC7ZFF2U8oiGLDcvgfFXUdTWKTA9JqpfsRgb23HYsHVrC4ZxjF5wChtZ5P",
  "key21": "2e1Wwcn4sF5FXyaP8uTosyKMKqmeXbSmCeHed8QNKqZNU3mgCXiDK6LgmiUAoukvhD3TA9ULMAtKHcrUKWwZMrKS",
  "key22": "2PbPLpRS2VNuq9qipSVTJYHtZiPjAfovdNMEe4k7bFYWoWbY8pY4tq3ZeyxMPAoNFaJeFcFKe9XbbVDXcBGHmGAd",
  "key23": "41zxFRMDaHWuvDEuz3ZtGEeB9jkpYaeAszSMnH3TfVVZ33XR2DEGtdVReuo4oGCFzu6GRHByD4cFjV3YHewz1VRu",
  "key24": "5C2r44AXjYGsNYzFB1YuJaydQVNr7wkvejGhLF4oUcRgcCpbySkd8HYq24NYiKHMCdRkGJthZhDPEkxtJMbr8D8m",
  "key25": "31yZYHF511oWoTEZ6upgVPiLXiaFpkNcAfQM6ez4JJjTQmwKUET7QAXVPDVpbU32FUdt67hwaDdgibjD3bsX8Tut",
  "key26": "498sELEwptdNjYp3dffHP9o6gerf5roN84FCVjUZjF1LRsxg7xcXMVhRtKUsnE81eVx7NtdMDnzeHwqJmqpqYZmW",
  "key27": "4SnoM33xvMEAodWZo3GgY6HN9m68XXwbPmqYbYkbQMFuFVAzFgfAMwW7zxcV6aG3JaSArANmb7CHFe9vyCXUjufg",
  "key28": "4QD2tho1i8fFbzWNo2zDXCeUu38bPc3cRybpgtx4gG4XVFix3aMPK9hsLycDkWtfCTJcSw1t5mVEvMuTazJPQAZH",
  "key29": "5m7nzCd3GuXU24wvVRAa5VobezDowDdvCnaFL1Af1WQMK5uwLpbfVq5UVtyrRFXdXHvfKYqqAze4L3c8S5a8sMB4",
  "key30": "3UyRY3xjPuuMSA6sAWQvg6uTndSJ5pnUtw2iyKYbtgXDyFAL8E7KE4bGVxLtnx78rzgSbFYp1JhNnQ3tUi3xgL7C",
  "key31": "3yZd4koUNbL2aE2CUcN3pXN5FkpuX5FWrKWXnETPHGCdMpXbhsnQa34msVm1ExqTmfRNL7dL2oykgVdrEwbDWcGi",
  "key32": "4PvCqj391McXthBmbzJCn5nj9yTrwHpZQRrpgtbcbzdQ6JaU9ZCSdptU75SrndboijZE4AJijYNVRxM9XES65hFq",
  "key33": "3bQkNhau9162qe1aDp3KndMcJ6qP2z8hvHmUXHcN5tU3Eb9wTV3YnHxNspHqS7GhKqNhz7aTrTaTgmBHyNroxNJu"
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
