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
    "2Kv3WPKGeMus54GXH18ArSCZQQgnApENg77bdo83kc6YUqPR3unX3wA1VCvDc6qbJhVui4nezKwHrnwxQxzf5mFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5umdC1oG51HwHoV4Ydi2Y292a9NRiiQfHGC7f8Be8bJpd4zupPL2LL8yHDysbu2iFyogZ69MjSzS1pZhZMb5MowE",
  "key1": "4N6w8dXwEca11S3EK5JTakU1MET5LmpbZZcw6HVAhkcXqEz9hWKk2CV6uvGuZEd1PArvEg26RFYkTaVPWjWjYs6s",
  "key2": "2uP6Mx4vA3tykmMACzuqrHzD5TcbM3g3QeEgEi9i7JYV1my2KaD3MVAYovKRrEdf7MDhAZC6LeXpbZt8WaebwqGk",
  "key3": "4YP84X9bEV7x94tgo16ax8ftzmkn1JWvKuYC39B44jXdF5QMxfUApgExGpCc2RjBGWXUVWZYpSx3XvaxDLJsX1VV",
  "key4": "4zhSoiZ592DoikSRBvZituMWy3kFkeWyDgVJ57WiTkJTsmwbkqzMpns3839VfTqt7jxf9vBj5g4MYCx6a3V63jCL",
  "key5": "4rbYXakPz2vsmWHjisxWcPKNqP1E3yADJnTC3iW2RkscrBytYUQjQzhhM8axMM1qYbNLPcS7C7AoT9cV1R1ZBJ72",
  "key6": "4k1dCiSvUWLuuDwrAfiv9veue9kHyNW7L7KAE9AMYAW7wLZHfHouGZvyLvgfki5ryfjpvwVBfdHWh1jMpJhgW5UV",
  "key7": "2DDNoYAjYYMZsm3Sf8hmRXPddgVp7CFjckpDNgmuz7wdZa6mCnfXtCB3HEekiv5ogrzXdd2K1H58q5dkYdroqu6A",
  "key8": "5a3wgqh3Aubjb7QGM4xXGQngzNE4wDLt7C2M71v9vR43rM4nhgBXJaWV64vx8Eb97HgWHasVK2x7MudMnjpaJm3c",
  "key9": "3dEsRieJcECumrq641Xr3DtXGtjh3SVK2kfnRbgLfqhBStJTBjk78YDFFfr4ksGMCKXZNAB7UaM2L9czRPPUxjZr",
  "key10": "5Pt4EmeuZiEuBHTJCfVeQURgQs2BAAcb1HKpRY81YA4L1Nmwrzci4GYFacY92HEgDzhiptSrvRUgDbXNLJDNUin7",
  "key11": "26fFRbfmetCbSAzQD5hZHZ2DqescjGje4JazuXQcyEoKbgVf7ysjmdEqYcYBB4GKHPF5hD9KbGaKZK18XuWkvCj3",
  "key12": "3Fi9xyg1J5FTsxtQhbZDco4qceyBYoXYyY8Z1TP9LhKzgB9g1EGmeQixmYzxXGGnsRHwsNa9M7v1PVy6PZqHtFNS",
  "key13": "3JDXwfApSPavKoaGaou2GLwuZZd9mLFnMTDZxEJQNjFeKJi8bCptrz9ZHAoPumL6YHgjrb6TKwpMydyQjVQtKLRZ",
  "key14": "2gTzwzcvgrf1EHRKk1hFjgSxgyN1MEyAXCxk538tHwrtVsXNYzZYHddoUpkJbMb7RSLTJKFnTa4dyvx1M1cwJpbK",
  "key15": "3VACGHGMRb4MQ1qqPx4LyDAvvz9Hebr3D47cMhWxK7am4oE3JS2V84KjkmiGSEY64MrEJ6q2ZbGcDZzPrr97H5eo",
  "key16": "2bvuao1qrZ8cEHxaBMjVKpsiNeWP4wdsg5gwzHDRekfwnUCnSckVJcTbGYBBpjvcDirc2Jo1UwsNP1pwym4BXfZP",
  "key17": "4w5mgs6FEqUaw4JVfSSStZk58E8cwn1KB8baZByo8eZpFcgHVuaGZnEor94Cz2wwpBmTHgUDqhNdR6tedp2sdqFJ",
  "key18": "4XLzLyCUDxMGFUbsFyJAFssP9DtkCyRiYpUdaRhRTvfYrsXaRbwFXKqBVs3ySDvzqe5YFZMkXPpRhq3WtFXdnMf9",
  "key19": "NSjwSx1KgypxXqkQhiXJdjEY62MDmkGurVv1sdYdLRVnY5BZHHVMKAdA8rSo13yJAtWBsRrbWx4NPd1K3rrc5kB",
  "key20": "3gkoAeUfmwJ2cvDbfmrgUHmW5ku35ZF3BETd8fFJKWDMsUwcJnUu2UVxLLABEHi2A2hxYHjs1aAzzZzGjzeVBM1G",
  "key21": "2nfBye2L3UVe2JsuP8iDTfvfyctgEzHypEdLVjZRcYPepDEwqu4jtDraVbnQtYnHHT5ZigCF6d2napFN4zWj75VS",
  "key22": "HSKhv61LKamzM9XcuCArXzPgji5x8WxYjQ9avChoBhrkpgp6f1L52YSBkVCDBGQukwkQHskTnhj78qQL4dxfR6R",
  "key23": "3yK9D1DUynYWjnwMzQn7nQbDcXogcnrWk2nU3TzHA4CB74FjXCVco2e2hH1UvZeWtvY71XrieKXaUA1D3vCNUiPZ",
  "key24": "3Mbx49DjPqQNYPW5Gd4XxYWHRxEZ8hzCXuWnUHdvnM7haukxuNPMgkcPq24ERv5i9KDnuxEEKbY14LU8tyyww6NQ",
  "key25": "5yjr5jTk56AbygkCHGromWjW6jafiwEsMWwHuLzVdHSMA135EnnsXTMzYgJTEnWp4kVx3dABxZqs8Zfhs6GXfJLS",
  "key26": "65ZsS6DPV4he3mAT4VSn6VamXqE3P6tnRdszrrFYkJAhhq7zAufLaPaBRExGZY2Y22AXPYe4cemvvXyVX6iwrKCu",
  "key27": "65mSC3De9iAg5gov6hwRSRzjLeZNotvfqQ8BWsVeSgF3wjpzUK48o34PPHQ1F1hibE8kgKgGLspKsTjNCfbWhkLr",
  "key28": "5waHyUDSUfJRoz8DRpGmRvpH24tbmNwqaJ6iEzVx8wyosG8nw6jWG3iYkExZAoo1oVRJPJjdhxLpi7BsVYCnsKNA",
  "key29": "2BmceR7qtmDeoy88HQBm8KFC32LKVmVYw4SGEGA4GSbwkBbnJNzgTbgUahhH9f6cJwCPDA3NnTzJxYNNtB65uwaQ"
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
