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
    "3oavkUgK86QWM6XKrS63mg1C1j3o2irnSdeUFPZt2QFnCRL4xXVwYEtj724LxNXgCFizp2BVtbEejaGT347L4W88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cCHKySXtQcoZWweQhSySGrYEwQN51fAgdZZVrofi3TMGVw47cKUcuGFVnFLiHUDDgRbkDb4gQNqxDB76pxBdtYq",
  "key1": "4Zje1uwDhCysLbgEPsGEZ6aNQwUHW3A3ZFWjMCv6GsdEF9xSTErF4gGwE9j4t7inQhXU5jucj9SmEqemroZkFcUd",
  "key2": "4xd57t58yQs7nDHyhxEybTdy7hRPkpy29U2pCUpVBt7gBkxStwQ6HXuRZ6uJSUF8vRHGxw9L3DuAfZbf7Gw9BKPC",
  "key3": "3fWbcV2wXjuanMCbjaawscuUsrF6U8Pr5kPqLJcB46zrS8gWhBFxfJjVDjyuhE5e94SmBce6VURdbycmqDnvmJYn",
  "key4": "4vA3coJ3VkP1xV8z84ghuC32ayZy7ScE9AcUXNbxYaiXVzQYMoE2esPu3tKCvekqqYjBK98VZ5GHPD9eoh2bCHAk",
  "key5": "3qrgU7JFH72GKxERQe2EuSSSEn61r31uuiJs4ESh6bbDbTMDgtYwxCQq83eDSkhTmqKxboLuf1WdWeE4kzKVW6YN",
  "key6": "2MWMdTQD9DndrF3e2GCopkVJRYexiBKu32afybJtX3FapzmSkfRyG6bp4jaL8J4edgpXmLqMsGbibK8B2t2ahru1",
  "key7": "4BsDpYLUdVCXBVddpajchZvYSue6dgXeP8dH7gLHLZc7R3UEtRhoDADTt2FquPE1aMqcu3SbmaExQ4PRLzHxWigk",
  "key8": "3Fr943bVh36kyQpNNyh3TiAvrxxisaEqXxvguvKhXqo2D3LSeAy1EYSRBoeY8WDEXAb5pEGFqayWi5NejkRaeosW",
  "key9": "98dxKF43Y5YFdfnWHtnfLwWpiX8mpMeDmLboMXf9LudbTY1y2f66sMfqho52uwmgyuxjJ2A8Li7omhzQqm1bm7W",
  "key10": "18uBnFet6iZSXASDQTf3EJNsiiPMXsx5XtWkdYmcDSHHyTmRbzVkSubCHzHHr7g1pJQWNW2c8Ldsze7omweFdsC",
  "key11": "hkY7Fpse3s1zfAJHQA6XhAeXXgGwAKFhTnkgDoevmHvyMo4krRpHv3fF1Jxt3iAdgs5hzLh66M2pU9e5pHampaZ",
  "key12": "4D4uTTqEh3sCUpn9X3dPuibdUYrMRmX6dypr81XxB3Wmg9TYxuRvYfSbchXoARCX5c8oEJzdWfvAb9T5YdVP7xcU",
  "key13": "2xnwMd4c8Gxwwg6EHjYeTe1LGjEv5MtwQe7j37TKn6SLPs67AWYSXWqQzyPt8wfPGTANspCJMnqJWYqB5RAxGaua",
  "key14": "4ZfKuDX3SUbdEbQpDvRYmXV5MQ1vW6MbXvEu2tDgUhNoUxE2hqw8FhPrtV6aEmRGJZJuqZ7hGP7LeRD6MB2kJY6v",
  "key15": "KtWm4gvAKrhru1sVwuyJjub26br1riA2KgPvyxsi1eArHqdWGp8xG9KLzf73JqnmjiqZJGq25Q4t4wppUgLKv5q",
  "key16": "xXJpG5xZUm6wU1RG1ea5cyKRM7vtJck1TTAVegdpbJgxg2jxXyoopu4UfMJJkKuZtd3jVkiZEyiHET1UaaExHWP",
  "key17": "5hYMV5EwixGEQotQfy5Pt52ooRgCMRkVbdhiU26GMMShTM7RTjJVHDCduvcbWCS3SPGHwmiDXLWhcdi7fuB2LWdv",
  "key18": "7cYRkgWPbRFT1DXZJGXjcrGkUTqp352pheUfSMgPu4KBDgrUT9hzPXRcAGsriBCRMqsv5sSUp3rUb5DtKV738UG",
  "key19": "5Uc9GocoQjHpRf1A2rsF6hy39SHXieZSXzkCsdpAT68MbfDAQvxTgkudPRmdUtQv2TDx1xyQiS3mUuiEHgspyiUk",
  "key20": "3nvGeUSrDjx8jzfX2jCiS99HjFnzbDxa1a9xSkNMQMPtuGfSh1YRdk2yTEGm4GqYTY37N7DZW1GPTRFW9ywEEHnh",
  "key21": "5t9ahsjKeEtVEgyzEty1vtcpAhuwqGRMhCY6MhEjwvWd3rmr61mrAzDCj9MEGy5ayFs9hdfr17JZqkNuzzVKUgT8",
  "key22": "2U3xJEYb9WbD3duvAaavLv8chTcFYBN16ti8wRDLcDPbDLRzHmfJRSG82ziL8CWmPjPSC8SeX4Hf3ow5WQdjeEAv",
  "key23": "4QhfDjiobAefUJ1zMfB8hWfE8nFKJwxxpZEvKmUrNvn6azjmWNGxF2cM5MKrRxYwCg2vHXcjPfJP6XcHGgcddeeF",
  "key24": "3wUiVC8YWaHY5foRLaZu5FKmMbPi6e2jcZbQ6YiDqJGeZLwEKQd7tTRdfQYJDphHQJCy56Q2bBvFSENY3d1T1QX8",
  "key25": "3EsPef1UzDVhF9oVfx4cG2ZyS6VfPrTRrRsQkPFQ18QoYT6PMnqhKTvvVJh6mko1JyTAGS4mfbjYX7vdQfBMBM8i",
  "key26": "5FqFz6EtmJ4s11a2Eg86UiANhsYCBhwfRH5SVzSPGyPLZVmvxEmn5ri1zFoFB1Eb1Dgie81Z4ECk3HYjgZszTYoR",
  "key27": "3zz9XBND8V92pzEQeawbeDcijXxdedByrGRhGXxu9TibThgUgs5HR5oTBUFBvjX8trYNktTYphKPEiimqTCGhHkR",
  "key28": "3jmTPqZsKyctwQuyW8VoLwF7hKdC89tQZGzuKun2AVajbUHJvG1Q6YM8MHftCfFJj4bwe3v9tNhbbQWNSqZDa1GF"
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
