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
    "5izhffHqcP8KTxpFW9oGSwqBJZQm6YUFVS4BEhTHmn6dnoSffMAGMR2JacHN1uWN22yA5auo5Sm1hMUar2FZrYdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RWhzfKBXEQu7msXSfhH8HAdngychJZnGXZ3zWCkdaKh2VefivmpZ6bM7dLzVNjNDbLjpNQFbiCMQgnPQBjP6opv",
  "key1": "5xUwpnbvUFeLEnJ1q4y8unCMbWpAFnZoMM6MbZ2qZT421yDPMfbbkdiA8hT7iD5NXm1AegdvyqkK9EKKWhfeL5TZ",
  "key2": "CXdYoSo9thaqtawpH7JPZrh2hwPJTgti7Sjrh5qqGj8thjthMmg2mcfJVB2cuaE4JUBXUvNeGz3i1wJMWTumjkq",
  "key3": "45AbA2qa3PUeKwT8GSt6vncp8N6hF67AMovpoThHvdLYhgAtuLPsHWUS97zRZmCj4jJkFe4CEPJpe2RpEr67pL4x",
  "key4": "uHe9duKLxVD3aKUfo22w2WbvzsM5XgbnsqWCmz3LwUoiotek81mZ5HaZu2RLBTCSjxsQsshWNHr3pmXJQBnRJ3L",
  "key5": "3wfDhmPdyTeExPF9o6RDSH4Yi2cr5TYLntVdHgdxsfvZan3jQP5kBYeQnKBojiBtYGP8GmespEr7ujfYF33Ky8Ju",
  "key6": "4wBAS9rb2LT14reTb5PHZQthzubRqSSRiGjjBHDEvQzFgbdBdVPwRaRCj6qCMhQFQ76Sfhrb8TDj3eUJqiuptTqv",
  "key7": "4DqEfpRZqsGrCXoi2gMQEoR4BgSeHthpNhsKPUNZ4fgYNqZ7GRsifu2ZkibKitCdianiK5CGrTHkPaAjX5NQ2YDX",
  "key8": "3eaKv8PZGCGv3UB9KKpJDw1V1jm8fe7vRBUG1ey7BbFo3RpabqvPmXvziu21DrEeHjJnDA63udZ5CuFoxRPoGGKi",
  "key9": "4hZurw1yFASKiNbRSuC1VVsJXJqyebjqXq5h2iGdNoLic9pxDQRc2kD7fb4TTjpdcaeo4KKGukp1czKG9ibBJ64c",
  "key10": "4UXF18iyNyZ7NFbGw6KiYqYAnP83v4JjUaE3yM5TpPa49iFn6T5KBGjLfEjNm3W47PorKzasiCY45VWPz93s2hD7",
  "key11": "nd8YFNtNo4iSrGsRJEgv52PUyEKNEAkNRnSCjBx8PYUuJibsbpxwDmKUaQonVrkhVZq9dKKM4K1KAYu8RKpSSEd",
  "key12": "1iXHddAbTnH2JN5D1AXnmtf37HwkxVvN6gAJ5kaN3BTw5iJfdP4K9NUYUDHzr76iBiEjnw43aeJjyWXQGAXvP18",
  "key13": "2GoTyRf2KVsGVUpujrpJZDQFTubsDyoaBWprMrhPbXsW2KnX8K1syL8MprodwMfXyTCG7HTfxcX8p55q1VWe1cav",
  "key14": "53k7J4xfPoJMZm6gRCQwCdmZW2rtYM8CWp9W32sd1KkogGSMWjbbxLL1Hbk9T5kdWo2vrtQUsavWTP4AcvXwBGyp",
  "key15": "2teJoQBC3mRTYwdvK8gNEFNTPdbMjaYGfTU4LbG4PdwYvx26LR4rXEqfv9bA8P7TM6VDqWym2xg6js3opZswwhKM",
  "key16": "3yN8eHhscxpZ8zrfkuxsSTAQvxYcfzosY31cDDFpnApcnoCF95xVVCErREov6U2iooybDCmvUDpRQNQTMHvtJbVd",
  "key17": "598idPHJFFMaEx8YUJnLNALRjsUQaws22LNrZVoL1Kn2S85i2xQex68ihrWb82pvt1d3kqZw5HVcjw5iG35F1gEi",
  "key18": "jE3GCr6NLEkCRtG7UGQV3uB5SQBAnDq9AHUtAJqV836jkf6HKMtFB4gfMoSXrwxaMHu7xy3pyXc1jgAEGjuzBkq",
  "key19": "2itLsWmEXAMgTt289rSPHm1vrSYiDjyQCyW9DwSEMkVx55fNTBK2PZrhW1M2BnT623e21XFuCZZf7RuEBgdRuswh",
  "key20": "Qs4zPb1Lt4ragA8BHSUs4pBHsgMFQw2koaHN2Mv1EYetm8wiurzxBpRpDPkTczS3BRVo6vNhaGhjiLqgNGXKZMf",
  "key21": "fTPNTPKjrmgW8jRhepitt61cUNybqxrZCHTKHP9tYDc3XewCdTs9GtmXczQwjbsjvikac87HQAEmVAUag82TveJ",
  "key22": "4BjnHLv6pQgPWsvWVN9wqAwniNvbTbYfBMvasJY3CqJougrTgzmCLHpjMgunxYK3DZEKdFLq3mmt3dr8zXmAf7nx",
  "key23": "RDE8ViRsbJeuaDmG7vhcsjaMs1gnjhd3xwJ3rfZWbbk5QNaaE5Pgy7Abb9mHYvYTGXitWncUwcuP59YjiHuMkqo",
  "key24": "4ThSS5mN3sCbA4VHqKFJ7DuC3i2GiRUKTstJbQiMChiNmC3QzE8HgJufRu5FKFdU4o21f38Y2N46Qw8AzjXqmkjW",
  "key25": "3f2DAUgWY688RFLHQf5gTa2T7jeA25sgZN45UvCWyfxDYy9KZeTHiSokkQ6J2KX8YcYsjCGDAkRdtpRkSeSjL2kk",
  "key26": "5Z9cxgNGJM5dYDWeFT3V3hxmKU5ZJQW4dq1D79FJay71mwZDshPL7TtAU3Y3a1MtMHvhSQ51uWYHUqUsLyKub611",
  "key27": "ebevPYwjEGmLBGRhRPwY6PEJDqn5uYkwx2K6VeW5kebrg7FNkYdGi8uhNZXbA1TNLRPXByPk7j4a1FY5cp4aAjy"
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
