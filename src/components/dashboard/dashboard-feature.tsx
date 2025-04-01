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
    "yzvcBNBcRvFGVQ6fZTSbrshFSNqa1UKXuN1GWNvev817y28BN2DdEhKjgcZxibB8dsEvnFYYPfgV9sCic4dEu1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bhYHHZtYj4HJS8WyD3ehK1yj7rfEL9FW1DYi9EqkvyRZYtdHugLUpnkEAFNsaYfC1kczXm6dEwTkkcsUyspHDgZ",
  "key1": "tANuHZFYiBhBbAk859cs6kyeJ6gQJRMBH5K4vwUNQycUg4GYY59HvypWU8cNcGdt3Wh59rjBRjnKPJikGReZrBD",
  "key2": "5A6fyTBFgwzCeWjJUxbdnSZc2yL22ZSzRVRFUp75qoEKkoRz3GMQ7EiiGqd6TzP7KjDBEE8GjqXJpWrmpEFnu9oC",
  "key3": "4FEHRKf2YWPRqSRrVL8yLKYXBAnBFA3rhJNc1MLXSiTdX2Skj2qVwrBjELZc9UXhP12kdynfyvvHsqdKkpggtgby",
  "key4": "4XTAtQNPQMauget1xVbFSgDk6ah6iBqyUWPiipjWE5XNVT2Q1amqZQoTZ2FbPWPssoZ35BUPaCbLPELWfnKrgNzF",
  "key5": "V6JKe4nk4wWZim8YzYCHghcDupvnL1J42XjWesBcVBk1t74PZAB698G6upm4q5zdQDpyNL4n8PwhPBVsrrQF2Vu",
  "key6": "3pvBWQhSydV1SKb9wg22jytu2GDpW9mg5Raos3x9gsDehKfBpsHWDDnkvEwWtsg2HYnYrzvVBTeRu6ms5jzqbmA5",
  "key7": "gbBUVC51SVYPzusGkm8zT22oMPMgoQjNxRATghbgVKGjb3FYCr8ujjTgRrTwN1U5GKxyZdAakvSwfv7jMHnxRuo",
  "key8": "95tPNLfx8X3vgP8iPvcQEazv6kXWiW5gvw5tPuNSzA5U8x3Xpp9r7U3ubPuu3jvdk74RZYKFCDzGCDqyqy178dZ",
  "key9": "2Q5KyFsuUDS8jpZzJC9DFgXkXmtTsyYUBzwwBguwndkFHFWW1nmmCykpv3SgZJf1gAQbUX5azM1XWiS7YnyPRZaf",
  "key10": "4ahBaLWeqNdxEJHSL3q6ivNRTNk9R27zs1GrBW3t2btX1znDqrkQ9kLx8gGp8oThemDMzZXoBB1FT851KY5ksgb5",
  "key11": "3SUkMjLF8DMvPBiht4eMsgkGBZz23awLKr3tKRqjdipuB1qU9vJoA2V6wThARL1EyhUMPSHp6KcwKw1nWjH8SD59",
  "key12": "4f9cWZj8PwT4rMh1mDwRMowdoLHqddtoJsaKTUQABCxvSi42awmsh8igkD4madECEaaa5U9hGcEQRQXCxf7PZa2W",
  "key13": "44QAexGVSQ49LxkE2k349c8WYCfne8hJVhWFXb59SPYgV4i7xCwTgsNtPBmHPjP2UEwAnGqNnwAyfvN3inkuUs7t",
  "key14": "Go1BoWNXfbSpwMAQjbjKMCqwHCRYKc8UK6CFCRzcRVaBvwU898W7X8aRP48PobWXnNjS65Q1pfkUHK1pP8HBWft",
  "key15": "4SbsodNiPhEFS4h7f8EUbANN1mTu693ccDZwbRSFtfk9748CQM2yWFwzX5zobq5FhdqmXWNkQnb2E3jxGxZZDFYk",
  "key16": "MEVLchqwzdETNTAjPUvYu9uqSnxbWzaVYutoQNVv23GqWEv5QPjmnvJgh9CPVzewuvzViJMvVNQMSS1vGTzMYdf",
  "key17": "3FhzCVmgxLy5LtYANNmXJ39JbUz2FKPpwzuCt7Lsv5UeX5noRALqhfN43ibT4Gn9uiFasnguRHpoxcQT1fhvGb25",
  "key18": "64qvXPNA4VZPXEnDv514n7tw9whbYyLDAWcst9BsQZrKR9BMyDZbj3HXcd61aAKPAULsYhNCfYpYpCkWpzYS1Y6v",
  "key19": "3rRx74mpMxazefeWmMBRDzUcd7aMy122nx5VFJqjRzFa6CV8sJgDDc8UnT3aDi4Vk6U5YnaoGH7aY5CUshCSpNt7",
  "key20": "5hUBtjHpH1DLGVE2GFX3JPAhwsN2HRHSgXuJkwA7bit3oVNS3tsj5GMhLtU7KpTmvhmv9sjxAPixNYtmfyqy7xeS",
  "key21": "3J7Q4E4rxpubyDnr37f443wHWTW2PMNpqKgjsbSvhqJJ323kFEYHbRTkpk2FBJqi3ujT6PshA2Kv6ftVbdPCdXew",
  "key22": "2Fs54grbobKw88fuAsiD9R3RgKfrAmvCkHBDLru41HSjzCWfror8WZgmLxxDynSrxTKouZDhjnHQ3NFMj1drxAmP",
  "key23": "4AZkbfZzbQvsK8JV26b6JbaznsFN3eKgCkzMBQuY3bmHkAqejvnVWbS2pgU9V7JEutsaUrgD6HHDsuYbCyne26go",
  "key24": "7QJTgenDE4Kkh5gkZZY4EK99BBeop9bScUP3BtixQMcyaLURMYPhzeXiDF8CawsZKJeX2wcSPSMWnuESY2bGUHz",
  "key25": "kVwkw7PgrqShRuANCSaxQWcP68jtzfYdYnBkUenVPkx7QwhByGqJgnsRv6fE5rKdNys2sMqxiHPuvh3VW359fGn",
  "key26": "7ji5pzvddWurrnsVzaxBn4sj4ir9PqPDe5xdqazfBPB2e8orrmKQBT4qpZ39a3EwMTCNbghW6mw3fc3CyQJENmm",
  "key27": "5pFywq4Vzn78wkuvB8r6YYtQRKoKiSX4GGvwarfv4DU8kmoq7g3Ee4neb5f2F1Coy3U6BPRAtZ498b4TfrjzhTb5",
  "key28": "xnAACZj72h5QR8ACpRovg53fsXrxYEmLBkE2rPPgtMWbwAt4rzuCHsp8fNCRSQz8hiimqqYfwSMJe9nkFKVG6oh"
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
