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
    "4FMGQkGiZ3RVpQ3Yq3oc5rkE4rZHdFnUZ6VjqY4cZDLWLu21QPrVF2HHJExX7v7pwFeRUiC8XPyJKFVynYynvzk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wZgSDedCuQp8WDeUtcvgBLdybKvSmsgZjfFm9oPzurHumhMynRnDKCfLehgEfL6dGMUE3Vo9yo21ncJips4y9tH",
  "key1": "3Ew45SvtGRSEmBAh3GqhsYrj4esuaxnjDPt2L69Tu1TKuYe46Am4MLfVBqVJm4Ke221wurEh6NbvAjC6c1V6TwNi",
  "key2": "67PkNb7Hr62GB3W7qTBpsehdyQRh7bnGYAUsuEkpH9rQuUuvt6rEXwAkujTZF5jphN5owUA7vLxxnjLbShRT6b2t",
  "key3": "3zCabR4vLdUHHwp29bEnhW9jNbPWSnaWk1cYrMdeTMK8fUNEHsYt1ip7DZZ2NEqBCpg1692hdnY83kzoQ81JeeQN",
  "key4": "2Ah9FaV2kq2PZ8JWVK7dftFmuXmpvZFcVDEphRcdpeLdKKBXZfPPdftfaDqn6NB6NYAYrpomri4zgyJbfdrpzVgk",
  "key5": "5TbtCBJvLrvhVrpVsUP7WTM9DKLUCho2NFkuE5BFXDcFp7GN6dL7qvQgcwKYdFk9SweLJKgAek1Wg6xj9tz1riMJ",
  "key6": "nCr1kTY6acj8NcJXjW2momby6TfjZFXeogiXXkrahmq39meGeR7DHsYF59DqVSyCPGPfX1kzZfCztbQ4csenYoz",
  "key7": "4aM8za8834HY4twPEf2kpnPpJexzwxxLRRYQUBTRaDcFFMnAVuGEqy1m4G8JW8SU75KBxXFyfEhByJ2xq3DwFcZc",
  "key8": "2AKsoHrTYsHr5oW7XdFqmFreaA2ht5yeKqG6kgLHbcnnACMuCiK8gv8fAM73DgT1ZbDRjfs54mfun4mRzmsNBYsm",
  "key9": "eKAFQ7hkFZsctTaz5fu8YSMKqTqw8nQXoNpnNa9t2Ty4gePtStin4WMn9hFq2mnYauxGxKYEZdfF3FC2JN3W3hq",
  "key10": "gUXivTVbYroHFtsyDquy9Mx3ReNRP8aaBH5iAz8UqBNyMSbFDS8jjo3dPs5fuHWeQLGnL6gi2HEpWuuQFDBfXqu",
  "key11": "49R75ieZuak1aYA3PSo7eVrzW1yVVLe6RTPqVXMAfQWfsw8tz3GGJcSVX8jL3ZCnvvgG7nye9D7JbZHauQ1UbD5p",
  "key12": "A3ZZuTtZjfTrMDBrkuuvZUsKnZgVvBP4DWXNCkPhkJYMh4nPrva33GjrkuNoDwNHSXj7rGwjobD9PG6NbC22K56",
  "key13": "2prDugtKAv8GQy6NTkTxKVQzL9kFnk6i3Lg1grEREexoksprBtS3LuG32fPQM6c1rW25L1wgDEnkCjj4ADRMaQPc",
  "key14": "5sEkd1b2rASTM9uWu7CyNH6EkCE3x2AiMioeCMsj42Z8RwybWtR1kPWxP7WSVt6D6CR9CXDpafVM3XqEq5qwYdEs",
  "key15": "57eaNLELXB2monAe5vThsD9Yzd3uWWqqUDogS6nsZtryLyXPSPPuD5JeeKjbFZgc1JwiswErPEaXMj5Dg93fp8EN",
  "key16": "59Avja1vdU4c3QfUPMe5bXYxce3mUrz2jcXfcEejJUvujJjgJmjFrQKAjPJNGj5LVHrzMf6MFM15cpiLTS8xPH22",
  "key17": "5dCFdtetovxXxHmdXA3dotX8HqR9CirUmEDb8kVsppvPQDqbGjfcxA48mQBhMQtP1fFW5y9PnuLUAKJkRndgdwER",
  "key18": "bxw592YSnxjgFW7dKBLMuzbrx3RruVCkdsmbPF8p3RKdbfZiMUWoWC2EevgRkHejR79491sgG2WuhWxa14GAvXH",
  "key19": "KJB2BzkAEHZoABZdXbBxQ8QGcuEbVjUHmsQFrYpX36eHznHB7ZdnASrt1iHLUQhuBXMSa5x6YpbzbFLyTzp4NR7",
  "key20": "4m8q4hFWNgLXi7KPcwNEGkTnPGmQCdmRU6JeE6ZXtXjiGGuxiyCsNKBGfiTWrN2E5R1BgYCociMwUpckKB6ZBtj5",
  "key21": "5Aryp2b8F25WHC2VrzbEQBad78KJzdXhUrMV3GZ3CsUyGRbsWQtukCgsF4EFA3hZrdVBvSh7ikSC68eyLCZ3j8b2",
  "key22": "2DQw7ESV3Kh8w1FmgKhDMLZ9TRYpKipobRGQ3ZobaqVYw49MtLZTxuDRb9U5km9UPVhwF7EPW3CnyvkthD44jz7x",
  "key23": "29f5uB9knnppcv2bgwyJUh4XjFZZGSXKyvGnmuTtFo2EtoqJ3siUyVrJWcAScevfZ5UrdV8mWrE8RKXX7c7a5gkJ",
  "key24": "3ytQq991t6CYpAg6GiB9KaxbYW5WWXd2VMH3DRQHJX8iC75WTZ1aYSsUgjHKN3rmbYXW9Pps7udTxuMBa89oL77x",
  "key25": "4er6nQnSSM1FGKrNDc264ppHQWKCQ8teeH8fYoMSRFJsRP8RcL7pTjB2cVCD1GhC6cmraSZp74UiCwNnV5B15azD"
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
