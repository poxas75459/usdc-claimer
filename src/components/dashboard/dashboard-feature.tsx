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
    "5DRCAx1BnyM9TrEWqJTsD2mS1bgtBpVkMXoSCVNaCKVG94b1GHryj1ZjXKh4qQnSAiAp8GRGpuWSrQWxDTXxf465"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tQKC2Jxnh6KjHjJYr12c57vTrMX7CsBdepsgk5ZysB3aRL38yLyqRniMHeeRjFMsG3buzH1GmTpnYEs7WkupJML",
  "key1": "2AahQr1g784YGmAFcsxNT3kAUBs6f8fbiDRfouQ1nZcsZ6SZcBMZ386Tk7LP1uiETBwbV8NrxKhjTSe5e5ahyzq3",
  "key2": "569QUiVK9f192UjMG9hypcvBPF7myjoR8dVuxVX12wjk6a32UVeLbkuhdNq9i6M4z2yxgjr2kvDKkYZjUVT4rDwk",
  "key3": "3cZ98JqiF3RpB8Nd8X2UDD9ruM9ve8Zjhi333izLVtyiF5NMECScBZZQN7ePhkU2QhXCq6EC4R1wwMBhXUExuwcJ",
  "key4": "2uU2FAo57YmxuWgLmuoyAEbJGefKGJrrPLYCQrnTbhS1YW1p9TjHebLfuqsztoLi6SauAF5jR8CLfVCWryGae7VE",
  "key5": "5DDejqBSSWaCPBnu1E1JAkAQ4uLpAtPwhfEyYLuXHGKRfg8FWVif4fzAcQaZzF2tgknEgrFQNX6KqR2K11qAFpt6",
  "key6": "3wzeZyKdgDDP5o7A9HpbJE1osqGH9VJPPtPEPBiUaLtnmeJNeeRVPwBNokXkKt9DsGXNjVcTKnuSHK3DqEL3b4mF",
  "key7": "VVZjACnQZAA3WieBmrxVHPLuTmCZ2BoAnCa3KB8j8L5QspkozJxmF2zSm2GcNAyWm9KWZg2x723JhvMmuZpkWw8",
  "key8": "3Ay8hoU8ULQJNUwXK59UZb4sc2vrFoq72d5GhXyFsFp5db8Nsy5JwVFojfJmfFm6WTatiUkh3NbVBJz38tXTXGQa",
  "key9": "2Ue6P54aHKWVxCKZ3VuRHoEgr21toy76DftFPU2gCqe4GJP31fBkq2AxqWF42SsndDk3h1PRWsrtCqZFyotv25gb",
  "key10": "4HNrcgF6XuEANxrarEVwuLtvfYDQUSdx49p9m6LPVXk72UkLBQM4pC2ib1FnouNWdsqjJPLxohDH6VtkNadJYxSg",
  "key11": "5cHQSfaum1uTv3JF7PGvLWbRGHDDeE5tQ5k1qMSJk2VU9gh9JkGv3Kfg6gWSQU6T5EKjqJNLWUg8D6i4brQ5CtL3",
  "key12": "5m6HmyeNDz9Q7dMbrE7nrJsQ9h12g8vTYgBX4DLUeQxRjoGYjV4H1n9CSWdcUydZaVyh4uMbQAbFgJ6XQ7KDRfRU",
  "key13": "3bfWnfeii3FJW36SC7QpiHRazzQuge6W83oivYv4KGrdioEhbVC2kiuMpPx3rMchjNt9ZWmhP1m5w1YLqAbXLw8L",
  "key14": "28gZiDts5uRKXoGbDr5CTHou18iADzk6SEwWahyLR5XP1T79hms55h6GXhrWhFWt7TWVUo8QeAziZrt2JfHD55wB",
  "key15": "3fZn2E8fWgFpctMJVDy3sptLDWSFvgnE8akoQiFFUDmEf3tox2sJUmHxnFW5QVgnjHLsQdtxXHC8hWx6iMKdJ59X",
  "key16": "4o2URUTnhkys9uJdrgGzifRcN86nmAFAJdyqgeRnJUtoH5RiaHmJmeiFJ7bwfthYBJTPRdTf6J2NcH2xgaAgxkJn",
  "key17": "3aJWkja3Jdcp2sMp4kkeySxr5ri7nF5eprsevRtRkZ22haxcUzAJXxLVajWDFu8fUmxGYC4JxqJkq3oLTeP4R3xy",
  "key18": "5hzv2CYHNZ9rydRkjRNM7Y5VWTS6Na5wSffyBmXesYJieg15sgP5kbvDaDm4zjLoA9wkfNvbWdCoeFDZJEiFRChX",
  "key19": "2zpoRJofPPDLXhEqZgPxVQyZu2oBWwWcExkdAv5BpX1fLUiQSceU8w1RjTzxgtfFK6dWF1WLPVVHXKDWC58VFz2f",
  "key20": "5NfQfFyN5UV5SBBBMxtRnx1SdR8UchUwp6rnRYsr5BJ62EbBYBFpQ6YBB8z7jEWVCmcziL89j5zWKynx93ThXfKj",
  "key21": "ccRw7pAJqHECqwzDL8ZygYCvJC1srnkVToHPjJ9Tx3Lmihkdp5wp4yTEzxyYDjdS8vC15YQ71bxwoBfXhLjmqev",
  "key22": "5EVqWBL8qMk3ujGM4mZQMTqPSayYCwwy2CjYnNgKJtDxWnEiHkZDNPpNmeMnw8Y5qQ1phJGujEcw7CfzcJoV14VK",
  "key23": "5isYpFNDvKnRddmKLx1pcsJDajtxGJyMxcBLmhzZXKdxgrdscw62NBLcaTP4StwXHq3XuE48AbbiFYpqJRRcDeMp",
  "key24": "2wqYcAgCrXuLan2HHUWBQ5QSbq5gbRsWtKyJyR4N4kRoj7k1yAHVAPa4wrPAaBChgrCLJh4CVsWMMUKzcGBCHRFo",
  "key25": "Ayr1v3yVJXXQePS5syEc9yyPQQyR5QRVvR9fJfuvuBu7DFitmpR6qBAGupdhUeZxYzR9nBSpw5gkads68awDrXU",
  "key26": "2XTaRJ8xt3MxjpRAPZKUndxRaFFcuf1RiJ6LG6HFWqZhk5pwxK7N4TpKU2yUexGecPxkeL4kqJDqzig345ecQUQz",
  "key27": "4fXeGDoFSk3TMwFxu9TZSpQYMTPSShfCpG1vP18KgnfJy9odLmFDd3eweYoziEaDnVeJnRJd8UkpwsX5XScpQHvy",
  "key28": "3JxTZDdyxgYWGr5uAt8MupKDrktEdSFe7sjUkcTpuBCsNDuCA5b9p7hRcuxFE1denqVfnpYRAtpKEkFUKDVoU1oJ",
  "key29": "ZvzFsHGvWB9YmWHtCTK3tb3TwuLDwjw6M4bCJSFH4jWNYKCNZMwgwY5EauwgASDVYXobf1Pi1ytKNY2t5P86Jjo",
  "key30": "2FNJqPxLqXUKf17YJ6PRJLEjdTAPPFT2MvDvu8tnsVfKikVnFAXzSsb7BUF31nDqZd8FSauTuZZ2H7YhP8dUDTuT",
  "key31": "33bRjZDo3DuF77YKz6XKj8pzofWMZg6EFbxVHvc1eAijzPbuR3kVsDTgfeopFywr8C4srjY9htravJK9Mq5niJQb",
  "key32": "52LBTa87wLL2WscTwh9HcyiG5u5YK8jXDHtWQXDJMDqtudt3HCTJ2HArM29Neu3XQtujf66VqQ8rJtVvNKu8vMrK"
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
