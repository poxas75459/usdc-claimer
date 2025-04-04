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
    "4Y3RjtEHihEHugYuVKowphUXUj2UgjaJwN2G6AkaGLL7yEZPhVG1Tv5wg7PSZSu5h5mi9gbZYgk5yTxrmSAaw1FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HwRaRnHreZYhAs7vRfdT8SSTW5eT3BaY8ieT1g2SSHyjY6QZHGQ8mQiy55L7riJEraki7UYyL5VaK621X5ZLzKN",
  "key1": "4z3MC47ihsxpyqQGasf6Q3Xc6zghEcUmRfa1oMkLiV3EjiMztXVgfFLGjUgFRxmFJH1Ei1FTvt6twqYYHVLkeSr",
  "key2": "35msWv1AFXdgLhCwHW2N6UhPcLEdnFaeBrf9NJ7NFMrj8pGeWEFvPzk1b46ZRhEvjEAMfuJSKPhi1yW8b4q2zin6",
  "key3": "38FtTgABuUKeJYiQVtbC5iTeNMgnp7TT9mc3LruemPPuAyXVdGfDHRdXUttpnUkHdk885qizTGwSCxsEkuugd5sX",
  "key4": "23o2hmWa7YUUqtFgJEVUX4cDvbShf1SARt3XGzPKccxE4TQpJDwFgakGG4HKo8XAgm8pYQZ4dJo25pYhaav3aDPj",
  "key5": "ycVdBTN8SHhQuSz452fQbEMy9PzuujkjKVcDksukB6AmHvnHvb4sYfauTG8w1nQdc8yUosg2EYbw1FmCgYBwPKN",
  "key6": "2rmYfyQ9PFMevAUyD8eaituxguknAdmCwYBk57BKdUMHmm5zt7dqDiBsvSnpRLdLEKhxpwRT6enUWKwhM7Dz8jHi",
  "key7": "CGABgkaaXh5bDZ1jvLkXS6vniTtV429CJaaWfAU7tTMmHMAhADQ1wTUP8ahquVw5ERgrKu1E8PjLoyXUKcJe2K8",
  "key8": "4fTAvxsfXiU5vQ3mHaxTTSqkscuiCLaSD2sQdpsg9JCUrDmyCPfW9UKS5uthrvpxp75JJoGkxXcfePGRJgLcMRbc",
  "key9": "43DXKCNqSpYEPDUNAjhN3gp96pBn7w1kqosR3PAn6sDNYDnP2vcT4M3gMof2s1hZ12quPXgLxYQ97TedTJjsFd6E",
  "key10": "26djhxtkEKyCG8PAnGPdnbS9BMCpJXKxH8r3WTqWiPoePjcFT3tzW1AZBVXU9qrJBz2KYP1SszFTrJwKYgLK5BNY",
  "key11": "3CR8jwA5RGu7jh67ZTEqyYV6sN8TfkxVZR5cfvWf8opmKyzHEYwG9p7bnMGgZzhfou7a848rc1X1ffR8JiuucBcp",
  "key12": "61UMMHTpLsFXW15UySKBQRvD7mMeoAWLPiFvaktuffgmise5ePuqeBGjQ4QekrEBMR7dXDhNpd5zqDVBiRqpXekL",
  "key13": "2WJhh1NXCyiD2M68DyJaxx1cWmcUb6zR6grtSQKLh3BCfno3ZQzbkT6LgNtT6qw5nQdUQTZLgrHUuAtD5WgWzdN8",
  "key14": "5AJRF9ucrgeHBLgNBL1QhJHufisyaHkjewmMrHv7edLuET9dsTzu8FdXCnARW1QG6gqzhEYLKe5WYsi9ounq632x",
  "key15": "4kYykLq119EN1tt6hf3F44bSqRw6jzaPcPdnpWR1xtwNQhnEYTZ8P59MNf3EyaTvzbmGppFafecXeUPC2z8f361S",
  "key16": "qiogSbAriGrGDh4X9hZsFNyCd3zfqZBHUm9yEm6ES1KJooh1umv8esJh2CmKtT8uKaNBF4JjTbZtpnSrS3KeWEB",
  "key17": "4FgjzNenoF53b5jJU6p39hwMvxuEukmkYGYHXhnt2zAK7rSVgaqwpagpbCzGvDQtrjj1bbGsy1UZN16ekj6yKPKt",
  "key18": "DyZ74VRoukfwUBLSHiqY1vpCCoyJGnDgnnPqRmNih3fXtsjt3Stv2yV2tKy6ntoxm59po4ndQiW9o3sgaA2zEw4",
  "key19": "2PSLDNETWhxgFqfaqgsoswgHW33b4uT5uhtDhipWBPdqz5E54B51depW7omFXyVWWog6BgfwcB3Cuwt3K8cCYKF1",
  "key20": "3nrwzKQJxToT72LuDTKUnGuaEB1PQadjVBueiJF5XK5kZwzx4wLr972pvDh15xPqA4j8xRsXNhmnBiWi2mt2T6xu",
  "key21": "57BVoTCuC3h3HJBHBDgDdcWqrgMfJoxzVhNyFZdJyRb8TUmR1DorbtnUb6dpkt6F5iXVzFCjiN1zWY4duJ68UEbV",
  "key22": "4BUceM61LPKEXDiGed95G54LGULg8MA7Xoap83jkGPWyVogWJTjbrvqfaowMiuydtu6MP7sGt21mTPBK1rjjkWgc",
  "key23": "3kvjcxyUrqPZ16oF3MedBXRNNigZ2ZsvUD5NpGBBRqSHG1j9SHLE7oXwYa7eFRcdoaYR4amM1sNagC4y19Lr29ai",
  "key24": "5cs2tC5duC7r7Cf3DPLMo6rnzxpwmKzvn5AdJbgmz3x5Wsvqvq92UrCfaMwdFtoVmRpPhp2aBvDU5SHYU2eUuq8e",
  "key25": "5CKrskXu7DVuJjUUXXeMdY5GLAM4fvQ11nH6FC8p6KjZERQZVQ9PgTYRYr4iTnpq5HwiQ5iJ29utXJkyhVvREFQu",
  "key26": "4R5qbqiWwq2qY46Ap32FS9E43Luogu1TUCKxHumgZiBGEUjyNq9DBHoZcrQJbFaKJZRbDScYFqN9T3e2P2UYAXsJ",
  "key27": "tmnfmr31enV9vAby2n4otdG7oMe4bQm1R24xg4q93DHN6xg2oN79nzU7H7rbgpS8LGEscur2MbyjLErd7EqtktA",
  "key28": "jDBdXaukTkn9K44U3bBeD9FB4JgkqczSTExXdYiSYaE7sGZMjgXUDzcYj1AfgNMWcKxBnagSHHj43o6VcVSohj5",
  "key29": "2KdmrSA6Apm1bNmc8KAYqHjPcRGZwT7VX54ap1Dmaky9jyknZRBEKRrgobsJsSgh8V2gB5W4rtfBaPEJaP81f5Ff",
  "key30": "3JN63NP1jhGm6ZXR9KnXZQW4Hd5h89JTtjrbyceS5jP3zB1vShNw2juMPT7K1Wf2nPEJJPUJh6ADz6TJivFyka15",
  "key31": "3xwHAApqf4JvnhacBYw6QvFfJCwAJz2yp5aVDtEeHoec297ignfwin5WQxXz6GyBAegm18uutkYfWeHtqTfYSmZm",
  "key32": "33eLczKFvvciYcHzWYHE2DdsuZbsGHfn9ATZ5P432hS2fQdUuPq5P1sboh2ZFZq19mCUgPBJYgpcFcYKUEpqDLL6"
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
