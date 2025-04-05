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
    "4G4sbA5Z2AgZENUdigw4kmtzsR3zckH3MDk8oJdedzUeZzxZ9nLbeSWUV7tSLEA4EVWx316f2F3Lzz5WU3cvFjcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32eJu4VdZ17a1Rqy7Nwvv7CZFd7vXsuxB97Mg7R1X3oCKQFueHDjh8KmSTNs2HMmeyjZij3VULLAcrUepyviEmov",
  "key1": "5rjn18bXQhhNgzQYAHUiJCwvmpJ3xHHCNkpohxksXb9bvkM7x6yQBQn5TWKYTs87SQshnA37tK75dWj3aeUxUt45",
  "key2": "5kvXVgL8w4WvkSm9v4WD8yM4N5qmfyzFkBx79Q66FCKXjCm8Kd9ry2umJC2frC9RevgpMRe4Yh5QurCtAQvLHyoU",
  "key3": "2D3MrnL1PgRdbDmM6XUcn5iJqm41iUkq9b6F9m3aiRPmrw5gFy9veuBw9iegtV9WvrQXm2G2q8W8jo6bk3qZptkr",
  "key4": "5Ki4ke8zkKUWXwtZJ7TY66NmXo4SjCQmYex5s4yxjyWZVUCnX6knd2idcQk5s6rJ8pK5AZUGWc5tmuwNSwk911Uj",
  "key5": "5A3HSwh8Ddi4TyoEt8n3D2ksL2AffbBNuxDiMrSB7S4dN32kwKgFq2ZuLyQj2rbNT9oJTX3GWpLHAZZCWkujV5HQ",
  "key6": "216fg1xcopZkXKxd8qTibdTdnzacakKHu5MsHaYt9g7wcAZPAETpLUyvPnsJfQ8KqQL1NpZVVwRy8s8yCBd5GeZK",
  "key7": "iinPiVVt5tzXTqu33kdNDG7Dgo68Q18asPheD4WcjA8g6rUnAAvFVsgojkzJjjLvwcS666SYZxs9Fk2DqSmvk9t",
  "key8": "jPYWj5Ps47QbmmGTQD8fyyydDpKR3VzAHEb5V2YPS4dHZ2wbnGSnLDdy2iZq4eGK2Djw4RcfJ7mwuYf3gzDuCFU",
  "key9": "4ScEf2fcDKBjEyepAm4tXB75ejanq11F1kDhRAoafKnviaDSRotcMxUCjtKq2T2XLJJ4H9xA7DYRDdRJXsyAJS8i",
  "key10": "3jPH86Hdzrcu5MVDSk69wudGm6DYqfuhk18zbXQAcRra9qonQhhELX8RxGrFEGbQB5e8kezFwPHxJwBEmyaL8DXJ",
  "key11": "4LXh2udwUTg3RYuUiukYoxgeL1rUZ32X89FtndkxM5pxWPNDtY8G3RZTv2FPH1ZpLaLR3vBzPv44LmkPyMaVagQj",
  "key12": "3zfhWLRKrvfPBvycKZAqvMSvJMn4rB1mojpnpgPRw6CfPLW1odBKuEEotRc1Ebx9QPuadgtheEe4F9chQ8HCGFBQ",
  "key13": "3wZphBL987XZxrYEDNcUBk6rZhSeMQ9tfZpGoMa5ZJSfCr5ENXxuwnqbdtsWs3bZAKeCmfgn2PAA1hAZBatYqvF5",
  "key14": "4irHjAZLqJrAjJaPmnReQnsBmma3YwSMTbqdk9XVUrLfnWMMBpBaJLQuhyU2HvdrhyaEBBgxoY4YSpxjQX2GDEJC",
  "key15": "3w4cgEDk3SCudYCcRta4UBg17qMofEQJcsAQyo9WqhLDypa25gqgXG3NjXRVEwtinsm2rtSXzbzS44R2zZWE4ABH",
  "key16": "2eM5yX3pPuHHqVf4PUZha1nhUwMSBcdwN4m2kPnCDjbXq9SUUtUMooYE4pzM5fUS8ZJAHvNEctYMm82khwzkampV",
  "key17": "GGNdZhN6D9kB6C7eXkSi9zirWXNbWVWkzbPaAPXqbX7YUfdCi52Bx3N5hPKVre9ecPwhmqvTAZjnuFVF113k6Ju",
  "key18": "9gPrSYgppJJXJ5GQHsCNNNAuyW8j4XoGHbumALsd4nXWQamLba8t4eTLXYUmNXwJbWV3ZWe8hwvcskx7n88md6e",
  "key19": "2dZ6RXchnJyChMeEmiEbcuQBUSRFfoU3xWX3R76byDd94PcBhDNy8KNPYCuNXaTkpXXciKNrtyAVaE329rC3s6Tg",
  "key20": "37fNCFYEaoFtZbvNvisJ6ZvjDbh2CW789qeYr44o9TyxpmSJBThxSeUaonzBsMiTAYye7y48kGxtyZkfYEiW2vKH",
  "key21": "44QxoKEipGRuFQSn2qgx2MNURYADq9qHEYoF6NaLf5QPQy4NLxNRE56xku8XbwGCnWrPsk7sp5MjWjTEm42QCwta",
  "key22": "TC4fAgLAHjjSFwWj8wxnbDhCCuwDkCdu4TyaxPNYfBWrrrL3JmtFHE2EKbsado5T944hLv61uragBHdra4SHh2f",
  "key23": "3zyHA49syeiozH9mbaZqvXi3rdH3TU4uDZ62sNktMN6o94KstnGf5V1cADixt28ZgUnKwjCfKXiwaXJBPyqGDtb9",
  "key24": "3TUcgqYvauYMWUKkV4YUN8Qihedzz6vjfDDkZ3UD83at22qKgNJhqiPs2hmBzVKH3JGKpCZVpcFrfMyX5PT4FTvi",
  "key25": "27RNuvoRBWavHPoRmyrmL72y12f6TzjxcaWeNcaP4e83azGDyHm3EFnkhqrW3Fx7CwDyi4gqdY1rv3gJXK6qGKT7",
  "key26": "4SYzNTDiNnkfbKNzx1f4js3XuTsCetiyoghVwBhLqVenXcV1p6iTyEWY2KxZhBD35daduNv97FS7nw2gynyy49GH",
  "key27": "2irRmF7jMZ8cGbYraHG5eBKgngSnGsAPMg595bfNdTMzu8aaLaVZyZZ2MbuN5GRPcPSXL1PxZwgyAPU4xk4BQjie",
  "key28": "5ujic74pDEeWv9ENBB3UNFjW1H41zeJvNugeQCa1u53FrfFcv8vriVRTP5iCe8JyMDUpnqD74gEg4uCd6kiJXQiD",
  "key29": "5JKRg7UP4N2WxRBnjZRgRea4SjYgy4P3SpJbrP1hD9exqD5AnrtLifUTMF2sbf3fbkuo1heeEAETHuNkLPdxNcs9",
  "key30": "SJmt6H5GuEB4nEm6XjwdUeHpXEPrzGh6N5DPvZA3ozXUNqJDcHFgWD27zukHVQJpoKYtG6q9wCMvyjh5K87zo8w",
  "key31": "4pUuhd1XQyhgd2d4Zno1ymNhx6Uae31NikhgUsF3UQYGJV9oh7QsH24kPbMYpEaGb3jCawkCEoNJ3kv7TbZLDFMy",
  "key32": "498E5tFho3h8T6WYebrGGzPocgTPwex3Ey9TpQuhLKfwmCvrXhkSJj7qjQ7yhtFY5ish1uctkegznjsHofpgnUyJ",
  "key33": "4nGEvGNegCPDMmnZzdS5nnukd63arhaB9zKWsGZ5UJaLGdeAEWzsy5RmB6K6bhffbb6sYSnHQ5G3XELkGYrL5TYa",
  "key34": "5rdXaheYEyg4usCYrDWSUiUuXiCdDN3dQ9ZQxY1iTWCA9oehHg8fJURgsAqobpGXc7ekMJJ9iMeasotkKe2dY6ie",
  "key35": "5Aaqw5ZApZzBUkBQYWodtt3j5apHdVqPWsXs2EBTULJQ8FZMRtgAcc2f7NMwn8c7trHKdbT3ACw244AriPLPRNzH",
  "key36": "aGhgsaR6DaT2apZt4oeCb2xc5W1BKj9cwwaQ47YwWnkfefLfZxbgpMHxQhUPzD1YNB6mk2vCfFC33FoLCzMEStx",
  "key37": "4JSoXyVVJCMQPP4bZpQFP52HAqv5hCWzf4x9QAqx7K6MBgRL8i8AWwxtQ5nxJ5pbPyDB1P9aKA8u3GtQ75vARhjm",
  "key38": "25E8JYqeEe9roRBMvkxukbapbPCT1ES5BS8H4iaEzvp9WvurgNFqw4R4PNmCKTjzNJzGtxyakMqZsAqyeMxCfMho",
  "key39": "67EZn3KmjJYgQUcoTiGfpYTHxVbEj1DjxDzrqCYRb146Gw9kJNvSAyXHhPuv5xM7iquNnCPAe38GwJZrvYhSthyN"
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
