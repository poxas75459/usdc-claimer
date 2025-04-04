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
    "5mQBg3viUbqDMukyHzandEvEWwEA7Vbyy3fGBGynB2bCD91CzTowj3YHX4i42zZWWdQARScgFw59yJi64hwW7bCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31VRmJdNWBu7kkV6cGqLeSGKDkFBSGfij2buJc9Z3m7Lx2wLfCXQsL71qc7viZtx6EpjBUiK623anMn98uTKdGN4",
  "key1": "2Qxt1XEf9vh7U73GpiKiucXxEo9bfxSQZycQBtprDjHFpDZeiatD5LWoRppnP25pzNhcbpi5J3iQniyfmqBaaV2e",
  "key2": "3KJidXKwHrNgPhYUkWFqtundkXxD3cspCR72uXX526U9zpBjn6ZyFtNxYDvh1kWZVp4a2vAFrGuZebEXbKYgMjJp",
  "key3": "3RHaP3sxR928PbFX8Pw5XpZVcga6r1qoCQjCg269oRKVV4eLkkmEU8ZPxLjPzwFKVyRoNxYJZXB2Fx3iK5B4PPyS",
  "key4": "5wEVzwUyTeVGyPpmfudozA6qqrTgzrjMKZXjKYpusXR7V7Gyc47DDhRBhDVXSoKHmw35tB8aAxySHZm7KjF52NYc",
  "key5": "2TbRTMJrzqeHHpK5JYVTj6PHcU2da8z1EcF9fLr9GFKirCdJaE12nkCFPXGyN9UwzccVy7fakDoxLcAos2R1in19",
  "key6": "4fcfPe62TkVcenDMARJpC9qm4cpYpESdrcj7nxVFJU23WUZ9rrRTLr58McKh8s5Wp6agKNVLYnXYmzf6cb2AFA7u",
  "key7": "5MQ2ovZSoF1WqmeHbWubRyxt1fkQkgiPGD9Phisx3DdQcCshStKV7hzDuLLJkUKPkqghhsqfzdqi7stfMpJCeeDv",
  "key8": "DqoGZCPaMS8TnWw1A15Nm2RwBx7x71fXGdiuDcsqgJuxTX9tShNW9ziCPEBbdUpNFXdMpzfcR91HYYSN51xrStz",
  "key9": "bQo1Sg6wvFF85pZFRe8a9P9v91ZGioDpnwUsnxcac64ZvuFUGwzX9V5xxV84PECdVyd1GabonKVM8YiegzxRvRu",
  "key10": "4SbcC8uPAaw1qKUpy4RLY7yJYWt1vfFFUDpNGvJNhjuFsCc6vToujHmzbB77m1zsyCw2uCvi9fs8jjrC5CsSRxyQ",
  "key11": "2TYJSkEBKxNcQj6h2zrmokrpFVXSueWuNEXnhR6rZb8auos3szx2uv5mQSwx7gTmstcecoRgJrnV53sebzuMoRV3",
  "key12": "5yW5HTxrLmFc4TWmyDpHQv2Ujk6PUXxqYN3rfNnxwUKriSauSPH4y4wUzQxWbe5WF2xvbhAk6f1R2cZmcJ7juX5h",
  "key13": "5hoqsFpu5g8pWmfC2xJyMsoRGWVW2dSaC2PsqHu8YrRN655YKSKdoSUn455hWysXy2uxq6CJwDJVyvQHQUizTxnX",
  "key14": "gYekmbjNJEdPktCk8Hsw3cf3sEzUy9nzzvyhXBjfYGZe3Cc49pvQDPafoRcqjQmdC6mZcCj9BnAHCRLdAVaHVGC",
  "key15": "2riQNedCHo9jWmfhX2SCpX4jXBmg6M4vHwehF5zrTUUs9Wc2TjToMADQNXW6F33XfHTxpisQky755dFswy4p82su",
  "key16": "3DnReYY4GvKFJBf5mCsi3Rb16jHW9QVctH6kmJnkeorUfkpkXc2cAH4TWAw2a1idgEM6hYhJLGeKPDyYGDEqHhwN",
  "key17": "3TZEZ3ih7rQ3KMFsX2q2Pjss7wJSzkerBhau2aXS9eoXpLYJctyyRc2gsZZ87QemGKfrueAn9izvmPPXMNdUEbSu",
  "key18": "5Zouha39dFGw2rRcczH4Fzpvq9FT8RpbhzhbnzHpU9oHVSQ3N8awDhAfqkT916HuvRpcfAXCX3tsozVWHYWFUega",
  "key19": "5bg9yatt23VvpBVvFc4zrfEbvVz4R14HbVY85CswhZaaWu2qW3JFdZ2cbzvVPkPxewnsEFL8pZAu8SBYkvpE8k4A",
  "key20": "3TPmsn8cvssc5DDbWeVh8uz3gg3RYRdm2nQMgsJxDG9qCHWhRB1Da1w743ePMouceMQpboKZtQzF7afNCebnqFwV",
  "key21": "23FevZScxLudaZ7vdNAbdG4aCZukwhX59J9ebffd3rZnLzdJUK7WdGj8Bcoc2ANuJVfz1s518bXj1Lb4XEimgFQK",
  "key22": "5W2FsuvwFNcnP7gekGBdNjM7o4Rwzi3C2srMhYYRMRtqYCzh3UsYGwofuV2mUix5L7S5nZxxukXk5ANPBibb2myg",
  "key23": "a3qgv5RhBxNaHbJHSDyPNiw8E5c2oTjWH91VJGNfX2FPKCfQWofnMF4YDXEsaRFXRn8sZY9KiKaMEFCtAo57TiB",
  "key24": "Ppj5Ea6UxPXbua13hRFsa94tx6VcozTpx3eauK9PHY2FYY3W8YM7fhE3zJBdfj2FKCSRQWcBu3xzrVvgSxhygNt",
  "key25": "5eT2JHy7aev7uQmtxo4DkidH7uaBVbN2tbLt2zoyNKY9GmiAswmR6KG37Vq48JsR57AeDLz2PfUeqKaPmFcWuLDq",
  "key26": "kDHbejjjihSepZsSBVjJdPQVRxoAL7fdCdZ1J8X9vecLzFNXWAaL6nS2QLFn3y4P18SW8U7tz6LBUxxdEAheZCs",
  "key27": "5HiQSYQRHDHdjTMVh7PWcMjbBkVzYQ5s8a8kZjrvh2QTpq4hVUqv9n9c2NNYvcHHmE4xWEmm2hvxAGQXkracjgJU",
  "key28": "2LvEuZBQwfb4irbcsgFr6EtVhXzKg5K3cuVyyvthUao891aDZH8s3gMhVKvwS1GLh61VEDeiBCidFgTUmfcieRH7",
  "key29": "5bfAXRft3ZQ7Prhabk6kZhPCBSsznHwAjviq7xYW1GZk5xX4qdQNeLdMmCMRB62PxTTedhaSR1K2rWpq6N8dFkyc",
  "key30": "58wQZ4nq6y66de4qGVZUQoDQ3u8kqyUj6uBnEVmQXsWtG1MK5wK2m6D9hJgMG5NQXqNhcxaAT2CTBTqwXq8wPyzg",
  "key31": "2UUdMgkeDX8kKbpTP4aZehSVfqQpBFciADVrAPjgWH8NjsgVxrMKmv3D1TprQRxEP9YukbVA37H98w4b3rURuKbK",
  "key32": "5LbxpuF419hJivBDyk7UVThG3zzzB7kxGV3Si7F71hLFoq4rZzTTvdGycjqxvgmki3f2FdgWRf6TbtEpVsut7Qcu",
  "key33": "NuZpe6DFK1uk7Vp6acErMvgZGEnB6GhxtVVJWi4AyvXiyGcNxF2L35eeiXefjsYFATbbb3ocAfbzMmJUN3bYzwj",
  "key34": "4UcUNoGL97uWR3k5wnmH46vr8XjJHn6tuaNWxy7MoUB9bXkgkiAjRn46v3vGzzDWqZNaAv6UASUjeoFXfTshc4ot",
  "key35": "4HFqtjCt8YxjjXLXfKJnWoNwhSnminK32dUzyYJS9xnQryTnR52vnRNMs4TuTRc77L8r1bMDuNQq3b9uaWjNK2f6",
  "key36": "4mATwPsQoJ7zm6aUf6XibT7SZH1hi5Lt5bVpPNABALznFxVsrMFz5y6vBMeZbKqa6BQPEbXSQJezzusoewMMwY8P",
  "key37": "3NRTjvYoCiTFfaS71P8tkuEbExCZrDWik53DvriZkh8NWooaExXtvDCC5XoXGJn1ghZDA5shVwgknRqf6ayKDUiu",
  "key38": "bPAarn8R4JmDiT4QFBrTDxpyUyCGA3KYwB42CfThoVEHFQUvwTMoGsE7PrgA7m14H538ByUAcpFog4eepoPbJJr",
  "key39": "4WTSus8d5nuPuiNNGjpjTGKvpnVkPZq7AuqwERU9dpsBaiQ2XUWq2DvVALTk6Vq8QHm5CgpQgiEBziddJMGNjtvn",
  "key40": "Ju9oEsDLKBEtMEKcsqa19vs7qLUMnm4tGDCyKMfFAvXuzfjVzcrmS8LwW7ihSgAGgAeidexgTKnqWdxauhYvk12",
  "key41": "493Ae3i8TNMZop9eCaG9iz4Nt7Y53XxZjcmH2UDLBRG2GsFpMArdWpcxqyDUa1YaruMrgNB5LHRr3ZXzQMMsTwRt",
  "key42": "4GiCjQSXUCBrUMLQimaEYjpd7gZSudd1yCqLUKndwiCprQPb3EbAg6REYooH7FTAGRjpJCUJLz1FmdhbuhtbJRph",
  "key43": "589PERAroSzEH4TPCYNgZYKNTs3z2NkfrR7MXY7R91q44LtumCCRMs1UHwAHjSsDs5Lmi3WAgUTePsuFzrmuZcdd",
  "key44": "5yJKvXwzRqcDJrLgcoyyJwnBuekjJ8Tj3MvgLhus84mEDtsopBkkih3XJYNBD6b9E9dYREwz4pHnKpdXf7riBkpz"
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
