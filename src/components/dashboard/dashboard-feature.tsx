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
    "59tkaieAUH9bJebJuY2ZJoKPhdcKxKhK8VCabMKwY4rx4rNPcxLAEKjVxYam71mYXyzH25tBaxKmrbGnbQJteSNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wXnCrDCHPYA4skoCGCFyGmZAb9NWsHrsBznF7aDjcawJxRohHrpY85kHd6XAfhdc7wS4JVjuLdkvRUXRfxvpTHg",
  "key1": "Nc4zpBVuM2sakeKAwuwHrHQHRgPt8i89Eahq6EMmAa7pf86Bo2BznC5NYQaT17cmBqwEXAiqEHdeK2fyoHuDHdy",
  "key2": "34KUWUZ4v2JLqfMRi6qW1DSxYTQoznUvfKRrXA1e3sQvTq7Sw8F759YXJfBtxFR22a4ShiWAPfGRDcr9RNPkSBcV",
  "key3": "316xD1wArTBq4XHrhwzmwkh7M1snL1tFTkrBLDPHZTFKvAAugqDm8h3LxDjPFNnVAUp8K6HxTWsBasWB48EkDCDF",
  "key4": "3EoVWJjn4Kv5febj8MMzugnpdJenokzB3LXPRm5ueBuR9F6Ze4T5NoH7sB77xePjNQdL2UZ7UrVHrGqYivYcBnvq",
  "key5": "3tNta2MZaxBFAi6PNQDZaPWBYYoG84vr83MFjjHvdLX5Vsfu2RYfT3XmWPDXaKB5QQVUAG32qi2xAvUXrDTD7mJZ",
  "key6": "4W54b47emCN7DEf7UN7w1zF5Fqs7R84giTd3y3366KbHLDpmpwCMy58xca4D9xZfpRQ5Df6tCkQw5BfJ1w4T8w1e",
  "key7": "366aynkD8XpEMyafiEqB2X3neNMnSz31HcWjNo65T9VkE9Uy478VK4owV2WRA6ikWMqj7s4YkxyY7YDCPh9f763u",
  "key8": "5kQC1f5jeZANkTHtet3vuotF5v6UFtRjkEWPSwnaXc9Q7HerHC7CK5zuW61NVhDYcLE5UQNF1ABPCsj4VNZ5YEPk",
  "key9": "473oy8ygr1q9U1Ec3PNTj128UGcMX7gPjPh184aegUiVqMJSDTTqvszaWMR9P63FVpNjDhFDBMJLEq5gBxHyuguu",
  "key10": "2CPpYM4Leg3ScpNHKHqgiEqXKvsJzD32pYLgpf2NQ2h5fcnLwQtHGHguxwsLFgZu7wnEWprMueyaiUsFwwCXJmcb",
  "key11": "48HTYSTJCMPq4Pbhx8jH5ZLvJmF7MtLT8fFTJLSNHFDB1yqTtY6r6ohqwFti7wKsammP5cSES7TGkPQk27Wmmhgw",
  "key12": "XuS3RnT1Jsec3vt5AEuwuT5e4sj7nGfQzErBDgzp7RSGyCdeww4p1tPQ6w5pSN5PhfbW6sJ3Mc1zYzrcdPRnSwH",
  "key13": "63nHNxNcJbZuYmiSCcGziryTWVZtMhwRcujJDAd2cBnU97nYYxkj7Cxe4S9KhD8n35we6jA26G2Kf8q4UuSZ14XP",
  "key14": "4wafypDXY7Sk1KSu8SaSUcGVhuG5AuYVyctRGwTCv1K5GG8PSASfNnK7U7bwaNzFfNW95NKNZjEiy1TLeKDE9jZf",
  "key15": "2GNgxqE37M42H28RNNxgh6nUy8zhJ5tLBmGVgMcX5riek3z3VwtDsSbmGaGWaaRbGFb5pZGJuaJEPQoK1SfGgNJX",
  "key16": "4AaJcsgkr9TJxEVM5xo4VpW9ZrBAhvj53KntYUad9rcs2eGiomm7cjsLGuYzRx8dKWNG2tsM7JNsC1LBKycwqDAn",
  "key17": "38guWJtA56KRjXQpRf1HMR4pG3YzUN95NeU2jsgwNnME3NXor1VqhNaemXEnfWt9br2oL2fNSorVXJ1ho37xX57d",
  "key18": "35kKMrrFakQMijnzHUCrVhQzZEfoWbqf8yaVZgn5JcjLe6HpfZG2kuBmi3Pfwo9k24spsEdWJ45ZHZBPiFiLTvSM",
  "key19": "aFCkP4VxR2KRBPBJgP3nTmhSpetde7uK2VVZWFuUHZn28uRVrTSduqVy9VMDrF7FJFpYwSBtCg9Rbjdn6Uhr4xY",
  "key20": "5V13bekTpus61c9YfVoqq5bmuoBLxzcQRaRfiBhPVfLTi3sJ4GbTA4kSjQCqPR24uEh4tJWao8D6TuogaBa9Kdyk",
  "key21": "4cbeeeALB1Ndt9N8tN7UtWtxo4qLnSe2wdVHynhM7jzVVWtW2yXx6vCeMi9feF8BYpWKcYXVEgP1q9FG7kRC1vCv",
  "key22": "fJyAtEyB15s8RRDmVsiCX4xsakKXgD6qNHCQX9zQLf3vqYqurPGrzrJ9K9719ihhLyJx7L2LY7xAmWUm8b8QPmr",
  "key23": "1D3wW3qNyFDHu8gMSQaNHktDpcfL3W5vckqGyNrWwZ61rA5zL4ATND27pKRTgjndNb61iZKDjHYpZZwczE1JMqP",
  "key24": "4Y8zT2BHN6geTRJvjKTiGqPHYYhRpNzm58aBM8uC8yHeDH2mAgkxYETZ6fGXwuw4tGj1pQXiHrqXPirGpiDw2qRt",
  "key25": "3dzHfgaouraWaJX3jkYtXuVdQgqdaxaaaih7P6JUBzrEahkEoPNuWFHCgZQyCw38h2jeJiVaf7nbk4kk4VGpfhSx",
  "key26": "27TL44DZ1Q63bLhQeFe3WYvbEvezmKQ7SSBwMw39kYLsVW5GckRtLGBq2av3TtKzCy7BALoFpfhPKqzvwWLSNKGW",
  "key27": "4w5zW19FfLexYhzzcJ9sSRHtzCaiyR3rhhVPcKGJAGERaDWBVnjGLQaGChB5EjR3jAsYWa8T7S8Z19n4cd4tDVVa",
  "key28": "4tBA9VLznJrmtdTGBUBcSpm5QxyV7e9mjZVALiCDEeieUQwtqrdX3T26RMiCmKD1aF8qam1PggnFsfvYoWPW4HDF",
  "key29": "2PpieNGRTp5JK33a98r3xhHCjqnUGGgTmyLoWLV1DNjgj61gXUXhCnCRLY4g5qsjPP66TpBTEduuTrUs2s9SsjSi",
  "key30": "3GtmwWBupgbr14g3danfGfPMVyoSfiJKw9YRrWEeucKSWwdxDypA4zbpmhXwR8jbPfKcw4T5TDJZx5u9jeezaUzF",
  "key31": "4EmsiazBXDBGQBmPGE22pQZvu2z57aiH4FV81qDeK7zH48oUwRhaUdPcMpKKJBVZQmzKbLGBRhCTsfaUENnZFoSc",
  "key32": "3cegRTnVoM7aQ4GYhiGex3n7QwjvkrqAsJVyJsBhWzYqTTP1V1sXSYWB8h6pS9XbEKbtHNLiyPFnYwU17MH46dDa"
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
