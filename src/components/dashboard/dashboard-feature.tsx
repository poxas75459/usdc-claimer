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
    "241FcvjY6y1HGy3ShtpxV12DJhg44HUBqW3qWZATgxB7hhZr5eARbNsbqVgg5Z2U4D8KWWxHxtaC3j5KeTmxgLNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33SPUp5cKKSzjXdj6HEG5P7JvR7DUha9sfydijB93MnxvqDjbe6QomyM2Lc6eB8AWEViJnqmeosFM3Y1pGnm4Ju2",
  "key1": "VDzSe2DR54SNcqecpnnK253niCzcZGWp6Z1uFgU4C8km64PJEoRDdARTGVPgphZWHGN9p2UHspquG6wA7Cr1EjC",
  "key2": "xXGZX7obyQt7M2euMoSi8UQfvNo5eoBcTpVEgCqtnqtAKWh1tbSY3NFNcwZMkRAh4t5EKgKcSzPXjiHAvqcvN2H",
  "key3": "22zK1YYSYEFnDf5eggXAemqUAdowuK95YcypfU39vKoAFvzRK58qZQkbx9PRcnEXeomzLCEWQMJifxxebErn9dbi",
  "key4": "525t2KJmuMh1QxsKZCDum4t132bmK9xzokSBARhT6WcrU1Y8qqXZCeJiDv5YNUhA9S6iKeawaYg7hiWPPK8FBbxH",
  "key5": "4Swync8ZCHzo2qQcx7PUvucwkNPNQqo91sQeJaiq2iYiMs9im1iuebjyoR8k8DLqJdvqmDiXkWMhH5TbMY33jeYu",
  "key6": "2DD1q357HCdJn5hGxzRKosgNtEjBmqA6HBvCJZ1yU1nVB4r9djTjXp6e6tWmMzDbp1hPgwDtbu4vCu5JKvgTxVRA",
  "key7": "3cRjic3RJGCwsLkA3gjJ8BVuCZDEJXonLD6WTne4u1NFcoNhZfm3mMgq8FseoH5nqtVN7YWvRyn92MJ71wgE1yb6",
  "key8": "2zu8jVp1p3UzhY7iCBBdar7dXgA5QgxAZSRNoR5rxE89mquSxmfkPzieVuQLT13MYcNCvXZ236gce8MAW6LKhHh4",
  "key9": "57oC6iDaq7JGJVFLcJ8t6pwnT3mXjLmYBJgcxE2Y64BXg7bDNSfuZViruwsGF4jFfbaNjpZ8AMUs3qJ9WHhyq5sX",
  "key10": "2ESHemvhnj9RHDa6MBivZL9ahnpwU6owvJfg2jXht3MWWG3jQLHARLbNNNnSTxk1xQYxUjC4Xy6dBuPWGw6fuxEQ",
  "key11": "4FiouULWjJg1YFSe1XkcnFEJY5zEwfU3X8RjuDLFvAjkifweyqFE1ofc2AzdfrFmN9fubreyKd9gPhsEkHBk8kfp",
  "key12": "ibnBfpj7sUaaBn1kYCnoXqid2Ev6PPJkmYLw7XSapBLyY7kjR7iL1CrwnE4iyRUDzfvnDx8wKmtM81qixgQ86DN",
  "key13": "2s8fPRdnc3mJUhGrcMxo3A1Zrz4tbXvvXUosuv3D93yefpWbUdtrWAXaYTBa58yxbMnTNhkdtNXjYZvwQ1XqYuWm",
  "key14": "48Agc5isgXXQ5KkrhMpHyJZTKqmdd31RLzgmokxJ99gvNmEx3s6ab3WnfteNXRRM9DkBooQCrNG9PmJ9he1ShrUv",
  "key15": "2ksuoLYQ2No4tCja1NxtqGYni9wJc4dbcZsbgcoMSmfrbEaLZ6fpAFtvQaFgcNmUMMo7gT9bvXCG9qfiAKYHT2pD",
  "key16": "5sFDJcDZKL26fmrEuGnvhv4APispTpM4whEknepwDCEnzz3sRak6x1mT1mJXXLmG21hzS2mcThVDs7dFzWXs68Dd",
  "key17": "51HLxTSLWWCnDobcjJLqRK9JxdXApGLDNhnSH89rj2DnY8gBL1YkKWDvHAabeRj7KCX1Qo7h2Ey44LyPdxAi2CsG",
  "key18": "31hZ248xFVE91Mq4RiLtMmMWVMgTzF82BYyZ6ynTd9h7T8FDGFFkGYgkjHDmn3S8jde1W3LYWrh3kVcCjgtoV6RT",
  "key19": "56RSHaW9rMUe7mBgVr44abqrA2EnthWyvW4EgEBMgZNPniqWDATvtEaLrhcDqgzwhsewDp7ZzsUoa1GPYTm7BxSY",
  "key20": "2qZjsvtJrhWRpgToZhVBi139zJTAiNtzVr4KNMpmA8XforFuq4svZP9gPsJGx45Xp65KLJWcn2qQ1y968EHZfaY8",
  "key21": "AdjWnpo7b1DJUVAVjbR3DYKgjEdDWMNnn6YCJNwqyG7dLRqFazB4YCoZzk1EEn1a1sebzuwrJUrDEaMtP9vfbze",
  "key22": "3bFfKsi94PEEz5bUEcD6rSmGoFDBcHfBHFVbxyEJMLQxBT7xTNzaPKk7vk2VRSBPU41nd392P4Y8gRx5XAzUZZ9o",
  "key23": "39Hm5H2vdgrRLtnFZzPWAhQwB8WsgxvP9tJNAba39CJV2CtQzzgvMLnsXyoyMUg9eYFTwhLicrS7g2JyVjbo1ybf",
  "key24": "mFMYgbgExcMmZt1fNBCPzmd3BnzMBujHJ6pFNWgBmSwqTCBgpokcJBzRFkF9YWW1M1uuiJsieKvEDD44bsihfgz",
  "key25": "4rbHvE3CNXLdM9BTi5RVghKHrnHxcVy2QSMYiCQZ39MTsjCcsJbsWGhgwp1hy5Yi4mfKbyxnnsvRbPEaJmMyfgkM",
  "key26": "uhj2ji7fqvq3DzSs8YWN3yreCoeNTtFiJaDuizccpzCmmWUVXU9ZEagiXMsEkFhQT4iVoowouogyA7j9oS7AQnt",
  "key27": "5jD5gD4C2nG1nrrp5cpEoYNFaxvYdPaFksHhmL46vVvFZXoqTJMRubwEGHwNUWeW3jh8g4sbmVyKe5kK5ha4PPPM",
  "key28": "319aQmtG9u122T6tbj6A3Ey7DxzykCbMroBmachTeBAytFA3tGpjWxnayZryubdiz4mVsndge7FkjATNqWfdyr3Y",
  "key29": "5FfpM2R8EyMuE9XS1WhHUFgZorYLy42CG58L8iMa9HtrE36dqZPKiQ1EmARMuP9GppA2ZwaofxZXxe5Admt4ohd8",
  "key30": "3sYT4hLif9kL3o3S2B1S1yK3e8s5os2Jnneo3NeXvHuycAKaj9d2zMtf4vEwMw1RJhgQNeSxXdoxf2v4KHJJnDo9",
  "key31": "JETzcraLzdqMQbpQr5LVyDCHPNdUuBbnAEVhE1GW68Ds3vDPJ6juUhh77oQASFsHpA9byborMiTmqLaeA512wYa",
  "key32": "5WtQnRyUUG57n4H6snyJGDfQ4Dzexo6ouTGPpHFCGwqXndVFmeVgZ7rL1iE57ZfWpyffzeZga7YWs6nHRWfbNxjH",
  "key33": "Mk6weGjNdTMWpmLCe92huMdFsfReFs2e4rLLuWEVq9vvAmV5AtpdVVaxhRQyuPFaDn6PiWn2VUVAQs7zQwvuXSE",
  "key34": "c58z9qpvm4SP2Tqc7gDDRuwaDJWvBaWqSdBySSjoTYXtMR1EMDC5hEBTMhhCnur9j8NcJ4EqgpVYVoSi3vVTPA7",
  "key35": "2DoJen4rARv4JX9zhJgFvP3gW47qRmZjegQRG3mLs43UhcLn9nwyndwrPQXKqfnXhAWGgUE9Xxu65xTG9o24g7ab",
  "key36": "2P2X4D9bvKwoKpM2u3s71AGK76atH2DQDaboDpvRizPZA8W2i4DgeE75CZfvq5szZY6w4YwMAf2FgHAbTjsB5vqG",
  "key37": "BX7WvrTRbusHsnAqPkPr4ksvtbjkWhe2iXDs96WrQJ9k9jgKQCoV8m2QqAsYLM84aaH7wTjDEksqF8S3iZ83Bav",
  "key38": "5njkegVR9L8skyFcJojG3wonA5UxYu4NHNfvpEPK7oU4sfcaBUfDgZREy6BapuGSmTUxwtYhV4MUTwv5zgs6rvYL"
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
