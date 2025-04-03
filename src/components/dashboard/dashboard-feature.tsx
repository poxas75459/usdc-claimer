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
    "4vvGiwqZAnEFNEqesJw4yVB7EFSYDZLMiinMhXNTTbQf4zDrM8n7vwkBKCPs9UeRb5gm2v3H7kKqSAabkGrtoqSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sbkvoCco5gtoo9M9EnM1vGngrqTyKNTYuh1YSWvziVQ4MLvJX7cZ7nQFv2WceeuJPhfABUinp3uRpYq9QjkbYuP",
  "key1": "fvHaqpzJSQuUkvQE4jGvs9NeLCFMS2AyAbHWq6CgbXrhhPE8vBQz51yG2XQ2D3XNyBvBQTRypMsZJXY4swbz71c",
  "key2": "4icjgK53CxDuJAd6GjifH9hLJqRpWNFUGEjoJEffgMk1EkRG7M2AR64Ugwoa3Z45qZriZpYpx5cXvJpB1DQmhQ31",
  "key3": "4r9A1GWJZyuYWKLbk1YkDdNqdEtcFTcHxYUwjgFjKYwi8csh5tG3PTmdKbbvzUDbqJKZKqW5YCvqUqx28pYUfBpY",
  "key4": "2jWzYm8RrbkLK2RGceBeNPqyS9J2GNF3cJW46zFwSJAPwkVpsC8ASUQBDYtyt7VnT7uQCDbN6ZdQXtxiXRqLVmcp",
  "key5": "5CbpNDQdb95R39VEnTfAbu7QF9aUrqi3J7FMgzhcAxgeuRqD7rc4nq2PZYrLsm31GpzdzEQ1tHpgWkdYDekstNft",
  "key6": "zzzjk4DbLREwcznbRgeZ994wdEchhXVXM1uvmgBdBgfsdAqE4NCPkaj3A4Gidq6N8oxXsPccbnEQPDeNY5rg4QM",
  "key7": "3HbJ7xaDts76vQMC3XYfPBFdBN4iJiMsQcfbXno5Pi8y2rf5Pb85XZRwaAFBwQWGrZbGcZhwQ6xtFSbrXmpH8i1x",
  "key8": "rePU3MMgCzreL11iNmo9TTG5KUD6phzbFFHR1zkNik3eGDaSY3YjkAQXxzD6ghZ11j4pKgSVj6WTSByPe2Sjtgf",
  "key9": "GDcguRNM1yy12QsMgXmYmGYrjREySguKjhGX9UXyddxjJHPPMiurxTzitzYMgbmG5cB4RvbqUBAHTca9vcvazjZ",
  "key10": "4Cvh8NiDLBhuWPf4ofKkPF3E9wW79oRPPoA8uwbEWnCVq91prLppAurWYH57VNB4ousNubr68R2rHKXabLcFQ3b6",
  "key11": "296BcXVuW8NvXRgsJPbtMdokUuhyXsgLekWNGR5p2CuWgZp6JwXHPYExbyvcqcdD1gxWgymNnL8VMGordEJXp5Bz",
  "key12": "4uABYBiELCZ5U4TzjduQJYxmXYmJ7egMmM9Hd3DiYT8GkLppDnDHP4pSF8TTScF39WFTcZQYtFyVK69ny7FjbagF",
  "key13": "4L7WYjAiXDJ5SxZ5DBzdvGrXgD4dPvx6Er5zfAM6GxfuW6uzcgkJgzzESQfSeHqedcuyURWnGeEQZMf2Lcc8pZiT",
  "key14": "2tsypeyVjD4E7ctuRKkubHf6KuzgcAMrf8CNwVepaix7aZEYR6D332urzCGAnFariska76Tro25bJkpDJUhMKT4i",
  "key15": "5igsQDe9zK6uFmmmzeKugEkCXeAmeCg1aVuFy6sZKZD9SrXU5gHeZEnPk4seoSPiR8HcdXxpgTMj1pw3e4pZCVWm",
  "key16": "56HjGfrftMUkoBhf6HAr3N3svBUEt9Xe4wW7tpStJcMyp6KSvkSkGznbqJ7iYFJLT5vbFh7WzvdCVvHDVh44z7FT",
  "key17": "5wjNPP16gMD9vyJownXCLQxWvxscoBBqesBhk96PaFbF93DX45iA1yVy3ahqi5bn6o3XVbbPCVND5y24jjFheJn5",
  "key18": "3yBHotVeDLTSheDPxA3tjy34KyLw5GwVzPbbfo9EzrF165QNVcEZu9vALdfAjkvkjxtyBfLJb2kEaRMmvEq8PhEx",
  "key19": "67qDngyek2cioWCijTfKWSBoZiCtFNT77UMyXv6Fm42EPe93q4B37QycxMJSVdocvhJDyNR8YzfffPcp6sS32kWt",
  "key20": "4usq8XbzGtxCt9c1oTeBJqmnsrVYPq5WAZdv6ztuaPah8swHETdMsfWVpkUTxPoDNkAGrxbE2sVdsGQcNNMhWuzW",
  "key21": "2CxoqdW5DBUewCzUVmKHVGdjUvUjdJ869YhfmZsyBTHys4tkoFHu9nzhVgsgUsqCQvrAU1EscdkMcA3oFiqA4voJ",
  "key22": "hmhNSHgCkWVKd6C6ceP5FXq2z7KW1TzVRn51wf6MX4mEYRT6yxVkgjqhGok5YCKVjMdBtsoAnHFL1HW3AGmnwFZ",
  "key23": "4E1bhE9EV1GvGZiBLZ6wZXBcQYEiRi3B77V8mhakoSCAq33d4oDhs3Har6hZB3QyeERxjUMXkikQV3EF6VoiZ8T8",
  "key24": "47JWrdR3CsPZkzX8RK6WnM8Sxb32AtzFT1ErXYURs9iDNDu8bUqK5CGQTv7Uua7zpkqACayTosGHCXjJgMEHXd3F",
  "key25": "4YnqaKT8iweHZG1NKMA3e6bnEGUV8iAKkP127fNaKZTTgCg74XDyV9THSvwHGTneg4Bzvd6UiyCxNBi3KPr5MuC2",
  "key26": "4ofhB3jhAragf5HRnnFGWagdtoz41hPAZcCpmxStTPwe6RbwrvvQMDEU4yN4jmtF8G6UrkAfSLyKhVi1oYzYsNDw",
  "key27": "4cjTjkFYUCc3fNMtnib5ek1c2x6AiuB2RAqqLuNMQ6X1n4TtU9U2uKFYy95HvidjUGM87gc6Z5XqUeVZ2xDfYZbu",
  "key28": "29MWajRjYmMMko23NYgnvFsgiekSij2RRwBFcHa9RF46pckgbF7awKDb3MeCGCD8o64mL2W84ndBEZJJX11usjUW",
  "key29": "24fyoh2jyLAhpKLkiyqzk8cGru16ZynMauxyMbsYGXDQeszQ7PAyZJQzNeDKf1WGcq9x79xcnoZDMr6j8M9HBaeH",
  "key30": "4BRLE98HBkreoS2C3QBdibR2oeqZmYrBNfXdXwBt5xq9zeQyKYtA88BGeHVVkRaXCAQK7cW8xgdR911LGWGqajh7",
  "key31": "3aASVcKtbM9Jhs1xPV3bmTM2iGYLg7Gr3RForX3Z4UtutFSrjAndrCmCtyrdAmFSGqV2CiRVfChpoLyz3kGWs8Xo",
  "key32": "2beszCd1eAKsWbBo7tUZdhBEGAq16EVANxjwuhu3vhCUwamF15NmxfDgYvBaDoerRPkdC8uB8AzW4E8AjoHFrFFZ",
  "key33": "2kTLRLQrroXf8stG8hGkggWEmEvSD97vnqckYmHSTsQUNkJzhQyJNwDo6zujK5DkTYvTZzEYhYQnHJJE9QpaZbw2",
  "key34": "4oUSgoKAZhuPsPy8fuz7k5yvyyv5RjNYiHxNXFTKyfryv4PGcHenbw8M8uMXPEUFPwuTdR297Dfde99GyfQD84Hi",
  "key35": "GFArhNN5ZeSC6GXfXi6EgXYf4A2JwTJG9Y2FCrdwMRKkgksKRSu6C6MsDfbeDyxskhMsktkFZfmZUvQiQF8LSyL",
  "key36": "2VoHU3bGpZ6ZeLrT3pV651pEvzj9zrRhESjborZDV314K3uheA3zr9Fp6o1Mi29TEFm2akhEF9nAMgjqktJjJ8Uj"
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
