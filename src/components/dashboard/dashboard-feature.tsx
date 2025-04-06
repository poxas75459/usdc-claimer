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
    "2uk1YUF3hBNdnfQUebb2K1d6jxUA19tYrEqjLqDuap8rzGaMJm7WU1guZvZUp7hd6Bi9ubHJbqQU9wWDRP98bvP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rDCzefHARwq4H8HgynPBqouNecJtNfSMztqrxcJBaNsnLJxiXvkXboavu89wAPsEZseCToeWocQcmXYwLCmPKrp",
  "key1": "3Ayz5TpSRPpAAyrzUUdyPbQfheaod7aqexWvoqY6QZcutkcFSeAjN4jpraVWuFVByuG7gHCyCwU9pYKBqS8Vrbfn",
  "key2": "2pciFPyVkWiRtbJBnasTNuu87JeEGv19XzJWHh3fvTmkADz3D21MVFZRJTZV5nndTBAkwGu83g3BLQDhrGezE1Dc",
  "key3": "44Fevnxzg8JAoABNwBMdNBgn6gBeZov5y7zkNPiav5k89wThwHGZZWzX745AJW7Y4C3TutGweD7MyX6RU9L1vyCW",
  "key4": "5q3kvxbunZ2dBHxwPkZ9FjNsq2Qzc3v4VUs4vRs4X6fCLAqiiotx79Ad6f2tfisxszGmQStf4W8P6TgY6hooE3tx",
  "key5": "5r8mbz1aZEgKg35XzkwTdCm19CVfDXqVNAALsEpBwWwPTRq6LqfoouvH5xbQio8aA9VHjYzpbE6XcrEFAFxgcK6q",
  "key6": "2UHvR1DjubKMH7UzFbzRyRbpB8kGyCT72TaYSvdLHdirFMAFcYDKFhZ76VkQwFhjaUdFs3szEkt3qtp61FrMG7Wo",
  "key7": "5xtimYKT5KUeXHp7VVv5VaAwni8m6VGEfbBWzgE9sWUun4VLvrA7K66W18U646NtG6Bz82LJCfvF6Gi7r8PgePs6",
  "key8": "EzWQkFhiWByEV6nvJUfJsYoqfPWMGvkM5xt6ABoLNPxJk8UiwnXS7tMz6PeUATowAYzLnecfFwNu4TCgPhMmm1v",
  "key9": "5pof6VEhgtHaHfp4mckVeCCvMUy1ibWR9yJ4C5H9KeGR9jZSdZutWMMpaG7aU8ZJd1raUAu22Xrp8RNA5T438aes",
  "key10": "4HYDgRZUq7srYf53gHByg1nHPPzjS1Q9XkVRdPQefcs94dSRVjUDDyhCkEgxbXXiM7kXzxhUvacD8NTUwnrMxNe6",
  "key11": "3rsZsv124ajDX4Uu55Wd5JeNZ8Lw2PaxjoMTthYn1zSum5cGzYteEXwEM4SmdsPh4g3w9ETaXXCHhgAPouoUjD1T",
  "key12": "4gkCCrGz94VooDy7FF4n6KJBTJciGmtJj2s3Ft7VkmbLySBaZuFmtbuJ9sDrgyBoTL5HYLvPQKb7P8iZ24kJAKYX",
  "key13": "9YiT7HsiSrHiYwJwWqosGyRBmMGVqeuxh51aJjQdKNNXKUVihV5yAsGYLJyd2QTbNj9FTXm6rNgVZeCd4DYoWvA",
  "key14": "4jNexbYCeiXSbSK1nrnrcV157bA3LR5f2RgQEKnHTHasXf88LTMdwqDgWViUKR9FDicwNeknWMEubSTZXcuELPq9",
  "key15": "dwUoSy2JdwA17eDZFef5aPykdNaqDv96g9d7DCjxm2L7gBHuea57jsnJ1G1uNokdozZRhmTH8m9bADJxxxwB4ay",
  "key16": "5cyZh5cC8oQN2d2n5dr3UHBZ6mk93ppzv94yEjEVr67wtw1i2zDgL2hLxg6p5NFjg6uJSJggL2Pr94dBEhRnGPdX",
  "key17": "xCyqY5o9yP4PToGHH16pWJ3iyWNkXiZYaVjERK3uVYhyL1Tiiw49wdr7jriuSrDrWC6gK6hPtipQnKNp4yNyXty",
  "key18": "5BTY1S8iFwoUHdfnDV6KADLAaL4eKjGFSbFrAxvAhAFJ1jgLDvk882S73rk82EGve8XPbWVTFEaoYy2zWKkY1c82",
  "key19": "2cxSBgMPatP53zD1SbxGy3goMoBRv2RkNQtUnSdF7ivuin6zaxhQD2MgELwGge73qAQyZGDx2DYK9UxhHC4V4exr",
  "key20": "5etNKeqvVAjDTLVqGyE1xeCQFuMs82i4TbzhqEiE4AeZfoLou83wdeP9MNNjUNna3mZVFdsNHw4k2zrj7Z5Pzyq3",
  "key21": "62xPVHV69JCNfohVP2XFhtAhsrtVegXTZnxrRZz1aXndkcFTayznPmyLn4n5MaVrvYYePoXotJcvL4EovQQLJnFf",
  "key22": "cipQxTDr9kUT1dW1HMcSUMtfFMM42j6ckQnzHxqjYe4waPN1qV91NDmYGbpkFPk1kNjVhk2UUuoem6ApPMFJypp",
  "key23": "5M67NmuJXaFWYjDDPhsWB96yPfkim7aVMpyptLLezjD1GyAhzqi8fWdM9UrYN4MJY9Ehgk9Ce7K1TTt8nmBj5fy1",
  "key24": "DMNRTaMjMebgQcUUhHAz3YkEjaWDQSwPLZ1rDfKwE3FxFfodh3QDS2mSzenMgeXYPxS78iM1bTcinu56Egxdsq9",
  "key25": "5CUGdMMmAJp643jcXo2T9vPkeacnhX3KJKaUytKbPTHHKfWBS86C9asZprsAr5BsYEbJejx6n7pec4C7w8bXyt73",
  "key26": "64FisUsk4WgK7oNuVoaUEncDJgv93ZWxSsNzPprgsaC8hiMyo66Cwp7fVELm71jZVQssfai5gRoXB9KhDECpr8iz",
  "key27": "33rcVmP1PejGLue68ibmKjYEVrXs1sxYTS6M1QYhHhRS57u9GZEuAsaDaXjzSaHd6cEYy8njWp6U8ey4xzUhFq8P",
  "key28": "2ZLp5vS75uJmfH1q2czoh2gRR327vRdHx383ZU31qnCRoTCjowwJBrWvZr6aMUL4wKcvXe5Xzu1os4yjDxZvJu1A",
  "key29": "3kqFvmJ6cFq2ZJoc3aYSY3kTPJpDvYkBbYzokRoXD3k4pjX8sLbfSfJBCeK7pnguRUTxisFzjZzAeMHE9hSogXGV",
  "key30": "2eWtiDscEJQWPY1nQsrFg8YdC1a2U3x4UJ8Wa5hM1a13EJ2bBpKEiztwCkiPgUh849KSEhVAyWsNKVneDsKgkTwp",
  "key31": "3GtKj3wW76yJSz4eYSDxpSd9GGxbcePD78CbpqVNgj1SpPbSHCGb49JGW5q7mYpzJTdzZtLPA779UEWLKoCEeoLK",
  "key32": "DsZU79gkvkBxvvAUL3xAQCiHuEV4RKMnHEJKNa99Uc2HxA5ZDfpra95Z56PcaMyG5DwT8Yn7vXxntGdq86DL6pK",
  "key33": "23eRVPB8AQ7CUpLZioRhY16XMMEb3Sbg1NUaLCPCSRmqugz5QKskuGURwJWoyjVsyF68LNRTLVdXE3aF9MZYa6d5",
  "key34": "35Xoh1Z4oDSKG8RdoSBNfDjJiTsprf8bVWgMz6qYnivuhHPtcM4GivZWReV8b4DY9e81r7ajWXj62E7zsCfv4EdD",
  "key35": "3F5ywm5bDxRR7Co7e6162MM1xqfsFa4DFL6wEydYuP5uW8UuTaG2KWoASyUX6XikWeg6STWn7oqqE7prwLNf8TaW",
  "key36": "61TdTrFJEL5NeJ7wpPczwvJoh8Tog7gW95PhFNKZJhe1rwDdhtv8rQ9vWsHdc77PPL6MfaseMsLeV23nBvfvcUpD"
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
