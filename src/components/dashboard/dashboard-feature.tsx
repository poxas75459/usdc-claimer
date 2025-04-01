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
    "1MNRR7XCbxyKjW2uc58w6JoAQ7xqFYM4NJbodMDgLA9Eh5sJK6qui7LKt7VkSAzR1aEVrWCakLk5FAyTNR5wiqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bqf5c2GHM69ajBZR9iL3cGhhY2J7TMJnkumzkBnHX1hkHUcUFwKfDwbcawNVRjeFCwgh76SpvbrLBsoi5g6r97w",
  "key1": "5w4cPQ4AaTP4USv3DfoBaH838NAanhjahggxd66hCqoBkqFGvFebBBVYqDwu3Ekt3eujvQxzLjWCafZQq4ys8yM2",
  "key2": "2P9tZUnfoog19yndRY5BiWJ5Dmeg7A7hrzBiH6Xp4umbmrBggCruYEwVczNAnKeYGe3aRN46RsC9iBB6yVRGQFAB",
  "key3": "3kmP4fa9nnJtLn4W3wBXJcsxRHE2XEcTUdHFbi4MmRanS2ZJU6e4dqsMKV86iYtVDo16k63LofmdYDSaQujgxEAi",
  "key4": "3pm9jXPFWHreGmw7cWSDv27Zo2C1zK2mz2rAcogfVAYGRVLRFbSQhGkwj4CSBfEtC6auayt9xZYeau3csSrPvj2H",
  "key5": "4Scp8WxEx5jWCY8jqFpPDgFuRu4uyo7kwm2tgyKdUMcKQJPKKbSDJdosTa2xtdpuohKX7kmkeS1webQh7G6d7LT2",
  "key6": "4kGcWdV6pFZ9Zn3KKAvrKetYrvgwDKJoosahmheYEy8tC6h4293x2FZJNBNZ4EopwUCA4LbZeeo7CP6LRm7YGKSX",
  "key7": "5BXeHhfd3PKzrWm4FTf921AiJKY37U1HkR8HzFyuYH1QbqZGUqd6CzMteh98CjbEE5jTDc2ayWP4nszeDFoMoJ2n",
  "key8": "4X6W29UaYgHMWeyeohvxezfRy9MqZfNa7URWAizrT1R9stpqejrtVgEkMHjiNSSs5YYBGPHitff9YDr45e2QRJgC",
  "key9": "5PCVp9nqJJJZHTyKUhFfuWdMHZ4kxdXdUEPDjcfqVJbcx7wBbbxGFGVoihwyuoU8DSPijEBnYPhLefZhZHDFbMWX",
  "key10": "2NzXiGE29VrVSdVF2UVeZYZ86SKo6fRuRMF8LyitscWNkdAq9aHkXt5gDM9udHmDCgJyY9oRMWpLDXrPLLhJk9eT",
  "key11": "5Jq2L1MjM9yweAzah6CFM4LkjaxtQF1mL9fni7a8YAWPHdHA86tW11PvKe57VhTXt1QnJocfPBQWMhmakF9GzYsD",
  "key12": "4UGk4nYRfTP4iPQqPwVCrqt7tnNycJ19SvzrwaZR5bESDV79N5YB8d6aXSNGjqwmbinfzoSLoHMaosRTqLpink7T",
  "key13": "2u3jxA3rDUodymD8whLHg6LvWGqFKpzpnkWsQN9rEi83Lk7R2Lju7g7bqtF7jPzU4ViWvzKLRshGJ21Ushx7W6XN",
  "key14": "4zEfuTjkaZ7AXs5Y7RKVZ5GVbippsinGMUou6AupVtsGSGv4n28NUr8JHvfdzHzjJwbe7iWAuQqTMTzMuG2HENzs",
  "key15": "xEJ9eQ35Sca1SkCGnU3QUzYMyqjyks5qqFryfFhihc3A4pwygE6SyXW7iKJkc3HzPfgVPGfgGe2nGhaHZSJezux",
  "key16": "4SR8tNoYad9EXGcEWHUFq1cufDMbh7DHaTSNmjmQLjzhTC4oSuepBix75MWDwwqQjQ5ZFNSnYjNaZ3WkdMVWZg8x",
  "key17": "EjYp969fGT5AnCaFq11vfajtprFYSRii1N6TsAF4ky7iMMpfLmvKqNUExxLfCawcvS6V3ymzaXb7f1vxYWKJtvu",
  "key18": "5qtrCwPGfSTVsWFbARX56fvnH8xT3yJGTnE15dF3tS5LTrpNGRd9tA2Yyp5EU4bJpURTNxg2ZCPSb4UbEwYdTW6g",
  "key19": "2p1KhRkFnCCd2hWMGzguRtJuBsuP8DHcKk18t22A4bYcmf3chANR61NFvoxk2XVUcYosn51gHT8Sc7WxSfEsAdFk",
  "key20": "3HUK9YTeTihLuUbDpbSDpp4wz3dzrz65xBXnH5LLSqVLf41PS61ShP4MHEhDkBjea2YKUoLm36o4QFztorjNjwLE",
  "key21": "4SXQqZ7cxxyEy65zT1d6TcnKFJq7LYBRjNPP7ihBJQ9LWJr82dTdWyPi6z2Nd6TUComURXLCZUsH39XPokoz66b2",
  "key22": "5hdB8pNKDPzUjhrecxnVmd2YXAKfUAtvzNt2vQtCHFfHmLv7R1eFFMxChDRR9WYXUv8vH84qKhrGH4b7dPFmwk2z",
  "key23": "7CaSKq1aRrEH51BFPwZjB69my3EzzmjizzKj9m5wX9ud9qCS6Jy7gHiJVSUX86NQmD14tU8Jy4uGDhPMrtbu9GF",
  "key24": "4witn8jjsG8ap9AU2GAfAuVxpaMWq8YbP5gTVLNFrNgMAFnZSZGCD9nY4WtdadSvRnwLTkdJuTqmVkMNfaBwVxva",
  "key25": "614vJHL9hKU9TMQ3bBGc7QsiE7gnPC1rCeem2RtvPpocGSHvqrZoEv368U8MckTsEFvhy7M2cwzWRpd2tHRBJo6q",
  "key26": "3t3yHPGNb1dzETnhqrGKgMLgkuzPu9D8A4cpqNFM4EzvjF1VTeJ9vgn2W2mXiAa8aMgArWSVmMr6TMyjFHA9J2V8",
  "key27": "67deDJiE5gEqJaTvys1wdt6tMcUzi1zTP5QqekFV9GPGhv3G3mHofESqroMTposgEZtMNkAnkHaKY5ZgMN4HyV8T",
  "key28": "9k38XTiFUDAoU5sunC18BomAbQeLdxG9vrSR6NbVZ933Tydq6FPRj4gAsnZ4u2ihT1FBBwNAY65S4VCvbBjETA2",
  "key29": "Q5gG7sHcaWjiQ6gH76khtMRGxNUVt4HqFnbtsvGgMWfabjA6isQmUjUzo6dB4P8UuxbmmQwBP7EPos4fdyrhDYN",
  "key30": "2k2cDnaUeB9ewGFR5govntkqUVn8gpyb3kNZQHCuCdtD9nGnjhVYqHmTtX5JR35EaYSXr5brJS1C6X74VHDJpHSw",
  "key31": "4KEwABP7M3KUbZhGLhcyHaQjeDiHDepQfh6bFZKUNjAaxA2oNcFJqyJvrs78pgPK2aRZTbuMyKjXuK4k1UJxqWyu",
  "key32": "5JaS112ncEoKMDTSwxpuoWvZRpo88wT4EKJMJYkiJwRkwibyqT4KSczyZJVcXKfUcShjHvruucBJwDj2zXZimc2z",
  "key33": "3JRHFV9f79nQaiSgSQuBvD53dspi5tUrWAcAfetW4UA8AiXQA5B85qvJyruMHZtfkSt5En6LSQSDqR59iXxryndF",
  "key34": "3r3Gu1TyjH5FVBEtaxGERiLVmZcapArFnCGrNbwQLREjezYxuHuHpuQp7z4Vp2eboKdTWRPKeMhSXcf2uWKZWWps",
  "key35": "4Jj46z6UPALX5zsk7YU2VGQxSK7k9BfSuy93WVhZ1KA9Bzpif641ag6rsD4ffg42mE3aaqWH6SAcdRDw5iqGJr32",
  "key36": "3U4LVxGST6vuS2atJJLhuAoPMSZiQyHYzL6PhnmT9LkF83VcYgE6G9xAiW65LRrr3MwGN2fCHDusnE9pKcFYQXWE",
  "key37": "2M7ZSpdgKpvwvXbWoqzmBzuNJXGwsGBTa2h1ppAZsBwZtwf4GToFGMESdDmY9uJFfwkoBC8Rs8XmNenVCnBJR9Bx",
  "key38": "3knmfTwbVtUMBNrGtbMMGQTFcKXeqqFsNf47YxaL51Bkijq4o89TsWzQ6NS57rJ5hskCFykH7k2tR7wZJP7NJ1yp",
  "key39": "2STXK6HWMx2Bq4Aqronp8wYBNHzTcvxQqf4kePYyfpyaJJdLnErD6w8gWHbSZEHFdrzJWaugVesMooAvMuXNi7kT",
  "key40": "5pHcVgwy2L1PVZKTYoY3ynKEw7QjfBJLsWKusxiMapjhkcPWZDcmFFYnvie2nJdq7YG3yaxzz5baA1bcx7eHKVTc",
  "key41": "5r69GJ8ajf7c9Xn96U29Tq69Kb3BPPvxxjmLXEjUc4e6H3REX4ERyWcuTbXS34bJLt8rUXFMfNck1Czyt9M4ad33",
  "key42": "Dj8fKeFqcMw5FiFxme6jTCQqQPenqVNGHYSrGAVuB2cnYL7h5j9sgbbFznJvW8ggc7zjCALq2TrSiABts2enxyC",
  "key43": "3fiassjxpmjgCQSFVnUhPdvZ6N2FB5aVmJpYBAnRpwzVvj14HzWASUQygJbapaEUEnwV5cb31aZWEqFnGK5M4wEq",
  "key44": "2d6G9n7tHvYaMmKu8QWmdPtY6Ys7yNuJf2F2U1xHX1VjiP4XFE84LSgTBiDNHrCkjvLBoo7ReU6LfxuVagZtxDvY",
  "key45": "353b1aN79heWvNiqJqvzRpzd1ZW2Gn22BvGZSbCotinug1kHNWrUJnx9cM8yUr7GSMKpaoCVXAJkKCXV5TbUzvJ5",
  "key46": "4aXwvXX3zT9bxB8Y8aBrZNYyTX54YeDMXDWY5nKWJNBXZc19oj4ho8oHJt5AMcJG5exo6BU9wPWAx286ZonzBHwK"
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
