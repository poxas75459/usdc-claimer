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
    "5p8hjT9VMrE4hsZxXxnA5UQACXrqDFSS6q8Vgfz965E4Q7ENM2JiQZ7gDFeGznoKMvUf87aiS2E7BU3xGvd9mroA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jiUezXtnz2Sxc1kZsU2uwb7iWALz8ZCkMuFRDUpZkaNo3pHjJhL1Nr7sWp3x6qCipzF47raFtizBnGM62iJbWek",
  "key1": "2arPuyJwUYoG5N9zVhMEj2z4BFFSvqchbxr8t8J33m7hnXSuypwqSP8RtTESuTfZ36aCQQjEZubkxAtVRpf2QzuR",
  "key2": "3v7d2Yw9VTknxsazA1BqeVpDRnC7LepPGVUM2ukZxqidpMzjTWgdaTAXpZrPyxoBoGvPzeG3JfXHNqti1p3TG4kJ",
  "key3": "3fN54PdL3Zx7bdjikTbLuy7LUuZhEc4z4j2ZRz3yF1DsJ8xt39DMw3V9oC1qoCtPVWdbuf5w4KVNSTJ796Na5WAb",
  "key4": "5pTZMZkJeNvCHVHUb8tHPdDgRcCRVH39JvzAXRaKGAXN9TM2RHZrFtfqmiUB1tJpBGV28eLxqREZA6C5Fav8JPZv",
  "key5": "4T6QpAy9C7PqwvHLjH7V383zLxrwUMSV1RpA8ExZXJCXiibiWMs7ErxqnGdFNck63eRzrPkftH996V6Pd5kp29B8",
  "key6": "48gZy1aEL7ze6djaJg3fMybJz39xvYJ5uTHorw7rHXa7THWj7YvWTLVLB66ZbPE3i3CcwTayhNSQKJk5AcwphPJa",
  "key7": "4DxEm2wjnthdF6UujxGLdMseceimzpDkSqubwnz9GZTVDe8R5EAf7GZFWTBdCULkozZgzx7bqXn65junRMpybnqg",
  "key8": "LY6E8cF7B2KRFWfkSFARTz4qiN3QfgtDH2EUzNkNtbBTC8NtbRKiugmycj3LampJpG5qDSQMogTCqYkiJLrALNk",
  "key9": "63N5E17NmUgk7Pr92QnZinM4rma6dCCyYbSJoYivKPeQv98pBhpRnTxSBsUfhpVFKkEQJjDXdFjnhfp3iHGRyFVH",
  "key10": "dzEb8xbHhWiYTuxT2gc2XoEmEgY8oFynqSx3Vmrc9qevqD3JyrpJGqXPRSZBcRLaiKRtboiq8TtJtBjVtigEvwQ",
  "key11": "24Z7pvsTUQQ1dEEYZMVRbptRCdaSwCHR5LePEvV5iuqyrtLyu7nnHBe1HuiBZDVth7YzZ5tYo6SAnVaj57WA96d1",
  "key12": "3sFLiKNNWibssy9qcU3ktbGN3KiT63Edx3NPtsYxxnLfWp7DKMyPvyansXTeh16ozBJafHYAmBuRVyctTHPkqwdX",
  "key13": "4VEFVsRdT1TXDhM6MzaNpaDhdjqfEZwW5HPRF3Cy2uuguYjJyMPSr6bvQpTECdoat8uF8cbuZcDMYeyxJTfYwoGy",
  "key14": "2GUVdbTgTnSnEeH6oFvggmzpQcCar3mKufnbWtjD1MxobGuUThzUjrimLRMJxFnV7hfhW6Xet8MkLAVu5jesYh69",
  "key15": "4xk4ysHwUcJQcuN37JF4HuvPh5rDV7sY4BpRKSUiMXZbKUGCA82wRVBX7fqnLHu3fGq3ZyR1oCrtEJv5fv8CCSva",
  "key16": "5mamJQSgNsBK3ZiU4rk4w1Tu3CgrJAyCox5JZWSQCjUnGe5wZVvJNYs7mUAmaSsFzh6EWgAXY1JMZfxU9SW2Cvj7",
  "key17": "5Tc8747abWDjqAwPcopvU3XS6QuLCX9UbF6eQLy1MhFwUr7bXhiy7nw9S3gDbbeZyMecLbmxaE2bS2JpLkUAcCg7",
  "key18": "3pKrcMS5KC1dqg2ek2F8c8dcPH4hnhnhZA8kTUmEeofFvRPRyYj8gXmREGukdCu8ThXjUK9TpkfSczn3PNFBoF75",
  "key19": "28FG4UCR4pwF696VwuaPRzPw466ytdVSb4aBEAYEwsVXTkk5ENZNHpZvFQUYTTBAQKxUYPBSHFxHzREcDXp7npL6",
  "key20": "5ha8SmNPdHMZJK5GqK86CgyBgwSomUVsa7gw9Uwj68ZEisdrMJ8sgeZ2a7EZweM4sn4iVAVGuNJmMJU61ShwEgje",
  "key21": "4ARVFQBmhoiqh6VN91HLiH7dyjwN88u97ZnchjrZjzUdQ4mNbCNwBCr73CScS3rtd9ZfGNy824rb1r7ZLix8Eix4",
  "key22": "5TjNjWwqrSVegZvR2HMZmKCUvBSGjr4Nbv6g3PZdN7dwgMHZacuYD3xpHUjw8fw26aE25BsoyG9BY5HS24c595j",
  "key23": "5TNhkk2G8uA5SCnmzXRm324HKNhpDjB6y2H57HMnMfuLKa2H6qEVUcejTraK15FW5ye2A7wRHFFtWyL51SwhTT5D",
  "key24": "222UL5paaNqtEYGeRkeoHFantTbhyvAvYUxjtNvzrC8tDuFc2PXLzx7j53Wpnfdvkf1bxt7ndDtS1NnNdFGpkhgN",
  "key25": "3AXmgG5YucDcLBJ7RZpESgpHbYJ9B5AYzdm7Msn8fAiT6vWixCVUoCvZ5EWSnD6wiszb7qekQBQphxBMZU2nqwVB",
  "key26": "5aC8rkFexYbGxK41KpLTXX6x4Zq67f7sR2tYYidYpTjv7at8hXCnekgrJWnrGmnobBfn8snXXuwwGPwi8HVPYXwC",
  "key27": "Fb3ZmiwoC1UtMEyvKaNXxLrostn5EbmLjnLEm7sHNNed6VhDLzoz1i1ekhgZm9qqV5ksQUdhx5cBYcmmUi4BWG7",
  "key28": "3tAJAwhiq7yUdMfCUHL87tyBVUbqzQEUD22YafcLG7RPNV3BmgpnC41ERnwY3cJaEGirkDNoDLxdSh5rnm19z4Dt",
  "key29": "E7qiCLaJsC7NxFNw8ttPDAXEPqHYce4spP7QVVagREjGJUGRXyRZGLGURE87542nSZdg9WRVuAYrTj65GANrw5r",
  "key30": "5jn5xkLEYhhogVkUAu3jEj2qjN45qmATtf3fLLkoCyGcVeNrnGHZvduZ9dtFC2cwAWpRRz3vgBDLjmzgtR885JYv",
  "key31": "2ubWYTpS8t1vfjLypfyzUcjwHCWwzQSmJ1MWhjqMfjX39W7mQUR8EHY5FmhvvtQDPQaB5FaByu59YjKmUp39uZJ6",
  "key32": "2PU8vofNfawqRr5KQKgCwbnnZhQJG2jQ1ryrPJuRGeF8YeuRQAdJ3Z2j8SFETjuVWVLnV2SiA5i11C2LH9Ege98",
  "key33": "YmAHjgdwv62RHkLbVcsE43seGKQ5p9CgC3B6QZEcUeR1xg5FFBcaExVp7oJRZo1oq8gMCrus6DiFxTxSZUoKH9N",
  "key34": "3mS6thK9WjzDmXB92W85GEWq2EYaw9jBDetmmQoCKNczwM76qbx4BfB9WMdzFGBeX63E3Ccv2R8pqYDHFfs11PRh",
  "key35": "5Yo9t8DDfFr9NATJtBjBgJKJRYnDRqngD2Fwpypj9zQk2umHwsKQMN2siZe5G4cZrbPBmbaMZD6WLaGGfeBu3Prm",
  "key36": "3N5Q3pgwoCJ1ompRuPqiszBX3QmCHBSgzvo5uXWYgDfpfBRbW7gv6sJ3pt31whd4P9QAXyitUNaEGNRGHJyjxhkm",
  "key37": "3ofqgSDqFEypttX17H6NjeVqJYujxLhsDf7Wmwh87gKmny714NeaqDeendovudz2vL42ku37u9r7XqgFYbkpaDLB",
  "key38": "4teos5QPhqF4EA58fs6yYJQN8dq5Y8yhuN28mHdW555kJuRrkkfAzsWTuWkjfmPN8cp7qLnVtkFeFq9LrgNpt8At",
  "key39": "3AmXE2TAUkDF9PqYtgkSbFnPdDcPFvb9KTZsBPdgh5SjZoUJWF2DQeyUiHk8DmzPVftNhSiHucDSmqNY8RNKSxDF",
  "key40": "3NbJu4R3tXbDx5FTXZMPa6jD7M5n2jJ1iXJwtWCu3zHYJWQixNJ5jtxpyqkvbVuB2mvY8DbzkXPpSSjF5MJ6LMAP",
  "key41": "pyVCz51ANcYhLH8sfa8rPcr2zJmXsTMXVU136DpU4EsiJjUHkSGXuhQLK83FtdbpT88EggVfNGNbhHTMuarTejx",
  "key42": "4CGK6c2s675HQu2TMq7FFAEcqqByznJnJsErUyggNdE4cVy9LhBPxhCeStMiemCqVdRnPA137LdEYz892GbUd18q",
  "key43": "59qnNzWtc51brm5cXCkTrBFKgwTH3bVKzx2FpoHvjEZFaegPLHwL9fmA4JrPxquLKEhDT5nJ1aKM4B2g899gBqtj",
  "key44": "5nGk24tTficjNTpgjab1scvUvr83b2PAiby4EexFHmkVS4KL2LQei1ABzTiug5w7ok4sgsAeS8mbyAEk5RGjsQfg"
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
