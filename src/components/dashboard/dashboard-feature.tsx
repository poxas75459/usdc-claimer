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
    "AD1PFnNLrMwoZBw52RGbkKZztfXEHopanonkKBESKvzaN63WwWRgEqP3HKdwhTybjojMDUSxrxNttfVnadg4vAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5onqHMm7xTmAhvfoAbwwbgerGeZNoETcWnQJAxDQiYunHooj4wJTA4oUz3mpikMMmzCzwDpsR3NCoWmZpPA168R3",
  "key1": "4pUKVhXhQ3upTP75SiKuRg1JKaj7xMftuVZxEgX9RE5Dopr3Rft3BRhBaiF26LBGKbYMEsRwjttQBDtamGekf2Ph",
  "key2": "2cFRKFKQjLEFUoADDVYDt318NQi8vdJAvH2jipooT1iQkF4KhfSpxpBShw4qX9km4jA9dwSYcxxhyMeZC7A3zWzD",
  "key3": "3yEE1SB6qsYv8aeVwu8nnPNemudvkyouAZmnzNbKAduLa3ek9jAGeezqYekyycHt1eVmd7AdUCHzYMsHeZK7HREu",
  "key4": "2Ao1asgG9Zuzp9JEbp7tLhsVpdw83nJe5Pn17Pm9kSLopriX3X9C5KouyeKNXghLpgzJ5NERt64uxKpWXkE3cN3V",
  "key5": "7yobsryUbhr69Qd1RzTk9fZKH84Z6bxkX2eAdByDkGpgBDwt8ysaCVQCh1R4ggR3QCg8hV4gpJ3xv6PfbtESFph",
  "key6": "41yS5AoQavVTryPf2cwp6mxSJY1k6ymr3Yirh4fDNN7MmjwaCF9bFoSXNhaRjMtv5hqZnhkTAtZmBjcig1QJAMHt",
  "key7": "5jzC8JJniPzGDkAicqbX3whHnYVJAVC3xmAiaqNUT3tPZMenV28pQhN9y5z5Dqmv3caEQt2jr9QqWCcRjzZceMG8",
  "key8": "2DH6us6SypokhJE2jw1e3ig3DKucrvuPyoyFTEQCc2opuaEeGvgD7ro3Kr2JfbV4Nqwio2qLk3WfruEu5bbw8sjL",
  "key9": "9EoptNjWaTZTR5ut1rADVcgZC6ands49S85RKbd22Wmk41Y73qtFiqrRsi44GbajYSg2dGjnrtZ8Sfg8iNDBfSZ",
  "key10": "2bCmMenxe3aMR3NuNHnqWDDnSmUUyMowkSwyaLXyjsgfB2a8EcinN17TZgdayMD33zLwspH6VtWrt3uwZ1yy3MKs",
  "key11": "4krocAMgekoVV1L1PmzFWTFrwyoygQkvVjYXQk3fryrYpEKMeKFc3cxtcRwiQY2okhMsJGb82JpGhRv3mY3hukRN",
  "key12": "3Hx2HYZQfeeqVNczxaPRHChRnMBngmDeMjoBmABF1VFeSEsQV8oGS7iJAqDwzN4zPsp9zPaqVE2zUnWuoEEDSS8G",
  "key13": "mMsGP2McSuFkTik9qM8hYkHt1pfnpAU64wvGuaVy16RN3uTN6MiNFrqQm3ejoXSwNcrCKr38mCCWJGGSAe4ZU1E",
  "key14": "3txeAAG1QrLC8HwY3BEWcQVUr1oNADQo53wiHVqKR3eZ59AYykaVuQpVagN166rZBSJ5jC1fBh7EPhZNckVdJVhe",
  "key15": "2WzYJWqQvwpP7eZWCPiqibWwJceq18Fqbi4GwAiNhaEvYZaTjMRWaH7tUDH6pRhWpsJ6bNzHYW6aA6rDfxUNnPgT",
  "key16": "29DdZr6JejPV93XmLqPeUyjNej1qv5u41nhc4EXztdXpJohogR8kz9Jk7xbTU1P8dZoSMfPTM1BjouPXgmfeL2VG",
  "key17": "gbCtCfnJnEhHuBAYVRoyCxQemyih3tdsm7WQUANiwhAzGx1KxvBmresb4AV5iZHa6CubGWimYSev9kNMwzEGS7v",
  "key18": "M3atQFq6TBso5Q6sW9bHX8e494zHZ9TRA2SxzuQEcEuTYgA2r7q4nzQPGjYAfQK1zqqUvPDTXMM5eEfEUEjwaxb",
  "key19": "A59RFUSeWmZFYTV9TvQixoKiAC1LDL3MnxqC6wn6FHUfdc2axf3WmriRa58xYUHix5PSnBSTwX5mdkQNJDGde7d",
  "key20": "3QXz5K7WPnGb3LqaxpiEW69JrtLgPbTfXxqWwoLF9cQgRioQCJ8aX4eR6AdR4iZ9tifBY8LDEkhYB6YaEcHBEhAa",
  "key21": "Kdmw7PvNaY1e96XApZArCt6zKAZuSoUuNhPJ6dNTZmtpyQRJSvtHNQ3YJqAnX6hnfic2jQd29iNEU2jebvEZzc8",
  "key22": "4md4NfdndbpjDi5bmArfukSqtf7wGsGLKFb1ofyuUBHfBnCAr23t31kiecRH1VizzcXxxmLZCpsgDjvRxsuL27Hg",
  "key23": "2ecPZEmT8nND7xMf2Cxvv1rA7MXWCC2qV8LNptoyF6Rs43gbSsJMh6bRPTUibDUGscum7yPr19FZpKZncvyhexmh",
  "key24": "4yrPtRPmoLVtiidziprF33Bf44RLrTkxNd8v4C6gdVMq5hZDgHG9z49Bo3iAqdo8t2owsFEFa8atdb2iYeNLw7hd",
  "key25": "2BRmMw63SUPnykhRPfMGUw48jWu8bw1sZ1qi47ZfAfq4n3rLbVLWsT73SfKQLqJ4iDEqXdBiCudX5MxZ98e7BVqD",
  "key26": "3jZyj6j5JwdeeE4MiN5Ah5JXYbJ5mcntNh5kkUbZH1ZYxvWoBK1ZKpFF2sJn9938pQJjNNf9s1Svbkd2WqAyiEup",
  "key27": "2XjRtm6y5pYvgtSXqbw9UjsThegd7kAS7asoe13zZeqaBsweLhMETDvpXi2ijbSBXTM7S6MqvzpASy29s9TD9VBX",
  "key28": "2A3rEG8joPbTRJ2Rmse4Wxgkj1EN6EMdRbiAW2r4BiXVBeUETfEyUFHPcGvNYkSXSPWXo3sSdkAURKj3ncDfqDx9",
  "key29": "5GFjz3FgPzUmpyhKeJPKnCqz6sfoyYX6Ln63LuG7V1ZHs5QCDnqAfefejE2Zqdwptskf2qZYPqkuW5W91gRKyewy",
  "key30": "2GDt88kheL2cSo3vo4TyAW49hZePiYVrst9LMz2MvG8MugrbmuYL1shoZbJmPrRpkT8nx8pFrc6pjJi5ipdtZ679",
  "key31": "2eUYHduS2M7p6xPQoNSdHsgsSygP716T3dRGAkFzai6wQjNQnNbArvaznAJWiEdpt3yiVHBmK5zRpdHFK4ayJ2cj"
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
