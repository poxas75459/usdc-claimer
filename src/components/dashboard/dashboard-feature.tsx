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
    "vaNc4WdxU4iPm5zrx6gXeVAFLMxnyiSyA2uuxJocKSd9LhSsJDJKbRnEpG8kiibgyBbVAKhfsNCxd1wFAY48o87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQeqAuodX8xd5ZFLXiSakjJA5spMAX1hxxjzPUMJi441suPQFkWWJfz5E3HzqM3cTWrvXhsLFGUNjEBmDpLJ2DT",
  "key1": "3ZdVTKg1AtJQ95v9MbWmdsKzohUrwBSyQAgkwCwx1tVUefzSxjuTnick6HRdt5MdCE9xUp7pEEoZVD9GUrXEokns",
  "key2": "2pqsBDQWCTJpYEsB5Ghqr2Fq39cKAPSgk88tu2njzi2Z6duPhNJAjg4D8K6wLEBX3r7DFQDkngG8jLMwc3Aob5iy",
  "key3": "2KrzfDWQqsR73qGerRWfkvb1tpTvmHBL6VRcVSm1qSicRTLWJobf1YgqZyVpumowomfzRagFnUHRX2qJaxociSJk",
  "key4": "25r97cYvBVFruEJYEasL1Ft1yEZbWg4V1UkywGU4EJCKDWDJHJTyCWSJr1ahAJsaGePNuQbC7y2gSxDzMGZb4kmL",
  "key5": "36KNaKBFSDvttwsH4cmi8uFVwRYUowq77sdfLyx6X4oZR4kbT2ncLXwDq12AtN9DjRzPVo7TfV6X2oHsM2DF32y6",
  "key6": "216ZZQhqUFSVHz5BeocGj5vbxcmRTTGAxPbC8ZwB3AGwMGMd4D8wX273AubFce5CLzEP1NDcG4t2qpTrxe3ePpf4",
  "key7": "2AMPVh9aeovzM6BfnvPsn4T8M5fnLy26MQczCHgYDYY9z6j9xon6oH92UZcHJM5oLGHj6tLCMjvVa1y7UciCssAo",
  "key8": "2EoTsutrANY97WWH2XhSb2mgW25pC3JhSGwFG6dctAXuFwzEUJ2kPsV4qsuQLRYtBKhjW3osgJwBNnMRzivJaNNQ",
  "key9": "3i4p4E1FdRcNRy9X8tGvcYB3iJH2SKzLGqwAk86iKphLerSz9gjR7BsUTrh4fMi9sZuJnsoD72jiG93hyPb9a7vS",
  "key10": "tbQfyjAMJHiPhFeg4BiEpvmqvxhaeCAtEh2nFuLipeojSnVrajj7gP4e25peZTmTHpfsPBCjNCSDVLftLrmN9wd",
  "key11": "5tjyvwJAnDEJz75Pay3u9KwAQCkWSRum8pU8AaSmZmSuk9hBBuJa8mWoTb5yNLzR1SPsdesjhEAjBnuLmTJsRAyr",
  "key12": "2aa4LdjKY1n3CdRyCho6mauozimt6dztDWccN2zoXYGi4svuCsyBi88xbMqDXcgw5vjKTwvpQMfN3ho5CLqRtocT",
  "key13": "3YjGNhGD7SHg8eNtDQ8fnvJYqmr26uWcp893z7xq9dKt5H3A8ky5ZV94zAEs9QdWfcgw3YuhCvpP8NX8UmTrfrSp",
  "key14": "vDSw1MbYVfK1HpGUznpcV4jJFy5CnBVkPVY5VUZbwMSYJb1ucSnMRT4ZZp6fJN87MgRnnBKSchH8tdt8i89yMJ8",
  "key15": "3LAEGJc1V9a9sCqTE7By5FnLvW2GnsDZkhe5BRJ31KaZx5yJvoxCrPhJ5dVYfJst8FhbXDgLtSy19v6rKtwBymdQ",
  "key16": "5z1SCqwxY7g9H3YrcgFgLjgta8yiWY7fgYpiRDRNJKebuJai9bNiAACBAbKtzzXgCvTpQEV3WZy8CZpWFNGAfW7Q",
  "key17": "4PvGJ6mz6s251ZbvtS8nAMXy6yhm8TJ5ugjJSA5vhc4e9uuhmKzpgNJoTMgWdCFGveHwYz816LuVKCABtSfRHQMk",
  "key18": "4eTDSv1kdwSf9KSKu6apYb7U9sio4CnifMoc1BcdW1v9Jv4fQteagNRbu5vomHGxyjV6KUaJVi8jzMY3t9dau2fC",
  "key19": "41mNhRbKeuTPBqBM1MMYCCrE8obk328qu5xyBcct4W7MU5SMqxAhMbH8c1Tr1LTBSaXnzGuEdy3Ykntc2X6rjYyQ",
  "key20": "2EazSugTk71rr55sALPpgC2FbFa2wajJZvSeV8xmLempYS9v6DT1oLibhLvoeMTP4jzHL2BHc8cxmaaou8cZ2fXJ",
  "key21": "5xc14P7tFEKbgZ8Y1EHWSXpDA8oSugxVKNvnu4BVBiUdSGuyayDHQXLgVDLcKby8ic75MuSvnurk5BdiGDQTXR1B",
  "key22": "3V5gJjmtiZyvp2nQvduuaU45Vk93gJytpahbjifcRR27rarXXvsgR1LkZPjuobzk7QZaB3cL92bxS63uAgwMK1TD",
  "key23": "2Ptobh77qNLCNNdoyP5mnjuEvTiGm444KvRp1ybfDSMFmJZi8VuUvDU3VqXg2fMC6z5M341EWH1qboPzaDsd2vjq",
  "key24": "3A8SH6p5HMXiqziesei8Tgw38TsLPQcEFFoBzPQzDphR69UPtD1JZTJQ87F8Eiujf7AQfwFWa6MEcYjdkbXsPz4H",
  "key25": "AG3U1TuJur8N3T4JTyEkWuLhUE6JPiNRzieBzAMvq3j7yg718pyNqD8GsPHhoY6CH39pxc44kySiziYn3UQiZWa",
  "key26": "4N7yKEzS2QyW7Zsup8cfzc7sRG3CHJNazasxAHYMqiemJ5LMsCCmdbp34GY1qpqANDeT7rvCVwvGytaAAwcp76pE",
  "key27": "47o4XtULr7hF6EPM83aXp1oinRNuGYGagRhRN4cwnfyLMgpSaGD9CEDeBKnMUbmxpYtAM9SanwZnenSbfkwCHRD1",
  "key28": "pyNNRHsNAHtATVJcUNqs9ear3DAGr3B14k54N4pH4NmBY4KcnRWMfwKqksXQWoMNmUePzQqQDTSmSb4L2uAxjvK",
  "key29": "5Nt2K84aAbEVavomxGK5YFedUdJE9gB8JBp7VMDpgw4p9nQ5E27obdSYSZReAREUnsqFXXAZSYyzRMFLSkgFmXDE",
  "key30": "5ef3UbCAMaZRSU5y2EnSPNMzSxNNF9pmHgpQV8W23CyLXQSEV7dwbzhRAH3tAyYAaiWgJVQ7xNQdVYTtDEvv3gkz",
  "key31": "3JBmMbHj3BnDEhGwX8A948EeB1TozYbCs8ArKaRL1T76g5Aj8eXcJaVNhL1wPYmFMTTZbuEPB9Dd5FGYpr6kEvK4",
  "key32": "5nhFTAzBWLekTsa71VCvMtztr47Lh71gVvK93V1ovgQ8Rr2hXmMvmjw62mHtv6nzH6iuvvNgK9DkMrmWNhdZ7mA3",
  "key33": "3UPWqvz7PGYwBf47kgiejyY8jwUuFXnpKFLENm4Nf2u1RHJmnx5PPQDyKBZAHRk44szoj5Vaj24pJp3dPrmMm65H",
  "key34": "edCP7CpozRKNJfePkYJCMN4tKt7L2f63P3wg2fQdo8tCRLDSRvT9mWapvviw8DnUnjuhS8jdFSG2DiA1Pd2AEpL",
  "key35": "5CRYHiHpKMjhFDj2xT8tdz5cmXCydUBdR3qdjPrFxtfCCTgtVRjCvy7rHjvJU4HHatJnZApFzHtqfvW6MMGAszgb"
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
