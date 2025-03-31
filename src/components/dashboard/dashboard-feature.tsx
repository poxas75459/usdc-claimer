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
    "3GGnXgqmcyggNTbDuGaT5NMZYZpp1GWfpRwbXhKGZgauZ1uNhWdsf7Hz1QuvvHsb8aWR4kmcKnjSY6z5J9EcSVvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sojYF3PTsNMAZzmfTMU7pitdjtyX4cYAk7nVvXLU9uLqpekJtjHfyc7rwsgiQCwRMydAp8XyofFJWBLBZ3oWiNR",
  "key1": "2KQ3oQv5h8NApAU3J8DmptLT6iG5YMZLCdCSyQn7YVqzy5MebpAyZ4giVagFMrd1UA27aqGJey226CfShsq9CSu2",
  "key2": "2MjbCnKY7gW57gGjcN48PYWS9D2j8FfT3QQhUNAUQ1V665MRkrWBm756cDHP5CVM94i92LPiTJBPv1gXdr5rckC4",
  "key3": "G3SF5QZRq85ocCXjbLqoVCJinq9dPRvPstfyCmE18mhZWpzn5jmNvgTviPkUrpT9Wg6C75T4VyM4wxc48PBpEEA",
  "key4": "2J6gBjakRnd6ZLgLfBumbX41reccjtTKftCKGe1g61gdq2GbRN5TGxaNJzkd5hK4CWwdhWYuW9NEqDQ6jdxW6rM",
  "key5": "4oGUh7KT5xo8LPp6x4S3MTwbcyxbDYFTDdc1K9a86qzxKi18kDRrsoWP5o8CCtXnd1mAx6giTyS2Gd7yaA51R2bV",
  "key6": "4ZhVoaWDx53GWanDW2qWJr74M2MgnR4F8FpMYmGKDLWLbVGPV5sf5qZEwYSircWgXVehu8BDLFcMsEe38bayb7MS",
  "key7": "352ofgEpMU2YALRtjp1WNm64smufh5LdCeQVF6UAUyaMS9MVpbkSkYEfhCEUYNph7iGhr4xwTf5uYrdSErdu1ckY",
  "key8": "293HSWpig1u3H6JV2EqhhnXd8pEph85vt72DwfBkwHVDRmYmjcQQeFKZCBemTkYb88LkTgDBq2whmkntgcSYHvoP",
  "key9": "4iTHT73vEec4kafTkGPazj8W6z2asNCoRB8Yw5w74ECPUTvXYPJzdsVPZeWsMMLmVZSvE9WCTdS7UGv6x75rN8vP",
  "key10": "4pXhuQ4aDGPCifGAMVRmMUYLZ4LY2E3Rt3eSMzGM2JMe94RFFzrbgVWxoexZ5ERQpKZdPRgkmWUGhTJwtxk3XJHk",
  "key11": "63ETESnkyyWpce3RmW6Z28oeE6r21SNjDHJH9aBare92F9zncnUNZ5ZBBW3vKK2wAM9dYaBd6AwwM75QWrkyZ3uD",
  "key12": "DdrW2Ye4qXumaPgSnGXpmFx7o8wy9qbjgLQSHVEgACSMyUNfV9gFeEL9so9Uiyv3q77JgUWCvBubNEmraZZqEwW",
  "key13": "3T5u4AePAyhaSBWKDAxtEwjE1w6TCpUzAjGfSRM8u3FGb5naEYFrmvPxL3zHr7imxdxmWBm4jMif4kaHYnm9Ykoa",
  "key14": "2zQXmacFFAx5dwfsiiLB4urmtdV1mgcs3afZg9ALfZNLJLyRFB5BjxfCDWstEKCs5naE6dTESYbrQ3SbNJmCXZVH",
  "key15": "QzEk29i9EqdqptwEuXaqn8hErizzm9LrdoCaPrsCLHVW63BhPSFt2tsZmb5NbBVUZu4ynMeiMMurXcTyi1uSnXH",
  "key16": "3SLyVCCiAA8Woo8gqp4V3sgyF86kCgAVAAuLKNKkGNuPWpHd9YfEUY2CbQFjnJgNcwAVHZDjmk79S8A8SXj9JsCF",
  "key17": "TZoDVmTGyNahCD2DKMfHY71AkxzU5VDH7WfrCP8reHvFBACPRU8Hhnj2iFw9ZbMfaBKBoH8S1MDc5tpjLRLQijT",
  "key18": "4PR9jhrhJ1Rq5fVzzCH8WuzUQwWNtaG28zSjedWiyJM4CFDUN9ZAvWEyeAyNXks6LkVGeRZPjQuFww3gDx7wFko7",
  "key19": "216FX4KhtZcy6eqiJ7X97Ko2Wpgt6Romx2a1vscyVn1tAkST1PtGVCjDG36EYkpxP1jzxXSU1xFaYAcJS6BcP4N5",
  "key20": "kbcy2iZTTwGkFn9vMTGRvpwbFjxF1zpYYLthMWiBmwk2PZLeGHPZQAdRtcmGh7YHWbirH2w3XgcyCekR3KaATYE",
  "key21": "2TYRnomddKaYjjNGQfpmjCfryJedZfu5mTgGq83DRPkLvkd6HuQfofZzsadpcAGxoGNLCzv1cogoZRWMoAsGfWH9",
  "key22": "4SasAPWWpeM9NayVcsn49e3jvjfqE1nXcPVG425abV4YWPnCMkUW386vGYhnCHaLmMHYq3QHUSGRjGkBmUUY9HNw",
  "key23": "2jVpJrASAaRMGUngQaTcJuVyYfWgDWSUeFr3Eb9Zyf21pyEtduZ4tQBQMxB3k1gu1863QcCoSg6fg9XYhH7T7nTn",
  "key24": "2XVg6ynkg4YLnGYK2nasxDniQQj4J8MgyvbHnJrYfXwFPjLxfeRkx4P5HBBWHY2asVRtVftC3618EsDNMPmKPQND",
  "key25": "KFsK2vLZMSoFP6c6Jx7Tu863SXjWMHviwVzrfvHPTJDoFAYN9LB9KNBHKd1oqFBEDj5Sz6xbHqs2FsVAqM16f9a",
  "key26": "2y2rcTN5MztMXsY3sXXqBLFRGwZiFbcQx9bgzwb9eU1k8GQ3ciz3rqCCK1ScW9bV9f8W7dw3JHCBq2e6k9Yf9XND",
  "key27": "3dmk7e16d7qpncbw2xeboLUmPpjBfABxGMj2nusUxPEpnsGTtDSW4ZrfSNqXZzJuDvcTEk4dPPj5vGtAohktrC8Y",
  "key28": "Setea2CfScTZK8vqAATfpiWhT61FncMNAoZf99YJ44WpuxCQi2N2uz6y3Te8KAXT1fyXgPR5C1GqmrWMurQZQSW",
  "key29": "2v14iBDmJmmkskASaJyLEMcq4UbjWazzUXMoHg2bwxDSc6dBeUFT25xrkgaqT2DPKCRTPSghjH5n67zRVDnA6ehe",
  "key30": "4JuuspRoUVFtu34tj86hm1Vp4PLF75MCNwpYbsRQDZebgQNDeGoruQTUE6tQCCDsoGSS6vuxGiEieVftF9ggFvvw"
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
