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
    "x3ZtoJY9sT9zeKiuqkog4YBrARSqVGbgv2tDDoaVPSddC7zLWKTBymp5ufZVugXkXfsRRks2GKJTMBRhetYU8nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zixGJnAcfmqSKgT1Bz8CECAXMcu6iYfvdrEjDcjLfRfVyaHo6uVvCmuAtry1NQ4ZuLcPhYoukcDt2XWvAYkcK34",
  "key1": "2B7Fm9gKbwfC1UV5HjtLy18r5pFiPDM5ZBVvfvM2YScWNifezNwXn5GmWjYoi6tgvsMAiN6TFCiLd3jbcM2RYPqZ",
  "key2": "67PfH35VWuypqG7kxYd9cAtXSyc6P2CQhpjHBBJnkgv9FKwVov1vjpzpQFBijcZ5ZhjqPmcU94KD3RSUrUNKzxBD",
  "key3": "2tqSnZDMxwhPcctGGrywPygSggZH8JzHupCyxr69VvB71PgQiR5YCjn8NxjqYj3h5U6FyrUyrCYARFLNfYVatD8z",
  "key4": "LfNken86mpm5MRgPV9PP8Gu5Z7kKD77T9gXcFS7uJafPayfgzSPRcK7eUgEbU9qpyZbLoM3LVkepXP7ccTksaxq",
  "key5": "4TE1gC5ySoqx5mjoCfMEdvkYhRq32S4wc7Vg3GNSYASUaBn69SdR8sepVTCe66b937e41WE86sgMFhhsf52Ky7Gc",
  "key6": "622QmHeLQRKg732Mui1XUYY65G5Prhuzsu1FVWu5UhbZb8pub7URguDxbMrFnP14eJXoEM83Ykwss5an9BmbhK7t",
  "key7": "5dncroThYRRVXdMDLoRSMpChio8S5qiDcXN3GG57GiPMGHdR4ueykukYu2bWLuRyycscDqFTJpV8FJecW2Z7awZP",
  "key8": "5J6ZoZeWuGRcsvYRqjm7Wx23CFW87jFAceAcSiTJ8FvwRLeBA2bVZq2xofh5pbwCeTgaTWrVbc6bNngc27HzSC1u",
  "key9": "3WmA53u1hUbNSyVGdqW9Bucq8WmqmRdyL9oJbeaRXERGmnECP9NaxqAtHSkcDLFaGDETvEXipNJQcRv6mVsJDmQL",
  "key10": "3W89TCq3kpErb2NXEhWH6zEmRpqkV7QyqqsYvEvHmG9opXnv6gPzGKox5GueMbMobjwohrPDbbWhpg4WMdGQA58A",
  "key11": "ZY2CQPQJhLswboEn4uvsMRQvDHW2DXMR5BKSUxDo8J4jjbZR1o2dR5ek4MQxhLhm3cak9Q3G2crATeZmY5kCiJz",
  "key12": "4vDA4cwXKNrd8hrr77F28aRb6cEZkvB93v4vdF4onGyWE4SG1i4mMiCMpxTMa6TjafZZUC73pNCcVN1nNfY9Rthc",
  "key13": "4XDhu3LQVp4T3LmLFDAQzK1k7kt635Mfw7MzR9E9hVdsqNDvsQoV7ERbCnkWnLqYyH46o5T9xe16ZNkBPrPpo1Rt",
  "key14": "57MaKBzCn5oyMougJDCw8T4WbW2dekoV3Rvyu9zw7qp8FEeURE5QkmLF5heNhMwvh2ux5XSMQUCYUifz1xhtMeHx",
  "key15": "4KJfuqRdriNCg71ifjnWzv5LVj8Bc6yxLCJYWaoQ9k5dJ8bx7ZrCmk3JQNVVv3CRnQhbjQ7vV7YdvSpdMjgU4rXp",
  "key16": "29egNpAHLT6knQPzwbbi7qtj6tnHgD9W2vFDAbBdjJFHYrpivFMeTmk1rgV5e4K1vtfhPGknyHJzkQswg6j61uGj",
  "key17": "v41q3iWGD6zQwRCAp1RVjkT2trfAvuHVTLqxzFQVMZXA3UJiJZ1fAyXCpQ8AkypFra9AzhdmNx2sbWbf9F1nGcW",
  "key18": "3kLUZFJGS1nDy2VRum9TQqrDNCTiMTAd5ffctgHaQEK96voZwhVgmgWjtqgqf3BLrT2DaHgEH6rwnhNMpkzPQvXY",
  "key19": "F2bb2S242ziThDHxpTNGEqHCs9PTsfDAALZexbYmD4kdBrxLwCovTkk11RbxRzimd9Y9re46TSj18DRqfVm9T5K",
  "key20": "5123YtvmX3e7kf5JQaL4S4vjFbcHkKhbaqM33B6SRM5gNzRykwZeHzbGzKiZc4QXuL75TGFLjjfEMKT2Dh4cmgyt",
  "key21": "2wH8Jq4rM1xawXvLKLJmN5tJthGWkbxdsMXTaaKtYLhWtcwU8VnV3Y9CUrqCvmbDqcjn4Cu54CVU2fT2CWZhSxxb",
  "key22": "5CF2pyGAYXd4S87MkQSP9Y5use94RDnY5spsAe1YCdySjXHcrdCVuaG292FP4VDar2S8JdptpM85aLLvKZ5PSsQi",
  "key23": "5iYuFtzpdcdXoodDEsJzKsFnzmtaiFnhAwDtEg9GeW5F4Cic89aP2LhHXHdQhJrwYEPXf5hLug15EctoEAM4d4tp",
  "key24": "5U49soEnrp6mn1q9Y2a1LfX7oEXEcGDKfc21a8D1hopuyUz853jxu5RovN5RhFeMvAtLLuvpy1GvxVXS7XHrtYBH",
  "key25": "GRDZ5PQRVMbDLMajgKWnovzvMHB4xtXUYJjyA44ixNktz1jfSudosrDs6Jw4R6qfxj4i4ojYsuxRhkzpvAAJmq7",
  "key26": "3136J7KcSC2x2U5HTpNn7Qy4bmrd5CoR1JyUQcbU5E3KDygdpo5hYosn7FrKV38XQRjohH61jtL2eJiZJxbYXToK",
  "key27": "4ZCYokMjEDudVqZiNrkc4ab2KzvTXnHBmVDUfDdqdZuAT61BbohUis2LFyAxzw4iJMogS6j3HJeoEgLc2n963ptb",
  "key28": "5fHxs41FrqnjMETpCYaPjBonouHzKyXAPSPqnToUrgS67McXC7uGa8PPeyF3FCBxajhF4ziVqQp2CgYiStB7Zeo8",
  "key29": "4YxCuPhRkU73BsSUnfirrxFVReA8AB3VQ3KFKdsY4QS4EZVaJAgr3aVqcDd9v9ue8FnWpW1KFjnqsuuSqbcA6HkZ",
  "key30": "4vurg81Lb54e97KPBxBbA61AFr9bjtK9si1pRQX1Mi1PQx19fzmnDzeJSzaK1KdH9ZkSQogBAVRHQn8EstWNCua6",
  "key31": "3BXTDnx2DEeRfegU3MDZEaYrpYo9Qv1UYQkZCVEBK5dXPAM2gXVvZs63irMuoLcv6p3YH5z4we7TTukSZYdYeXXn",
  "key32": "4zfGyg2mTz1tqJ32iLpKbKKFSnoMXnp2y6oouc4v3ne3NauV1vhBcXpXttEagKhTybatXvi8cziZzaiJpozaUfcT",
  "key33": "67kgajfzgPgGH5e1hTNjRbfuCi2VkWdxY8J7k7LCHHPNqgnkauMFuEb5xNvqiJAnMc5HcEoF3NSfE1wvXHDXVxa1"
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
