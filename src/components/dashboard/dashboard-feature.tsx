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
    "Q3imWxwW5BbKr4d72yu8XTf3P5XKxvcCVFcKMXg88W3htFyt6Nc37TstTQobiX2kPCNUPA4GQ9zrc76py7E9k2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JV6FvEa8BaHUn942jAH9Jf6SUE3PnaCu3NfayhP6CfszYgt7RmB5xyhDKa2KS2zL9cZSETU4MxaHgqroZFWBBhj",
  "key1": "3zS8xsiGipM39Tmm8LAQ9nWuNBgwXDNQbBYmopZqqpkvx2h3pFJir7SDXQSg63eL8kHJATEmigd2xZ5zpD3Xkd2n",
  "key2": "5KRuBRPFCznRZxxNqUbN8TGc9BbFuUq6ZRSMDgeeZvQJASFPEmXaRUN8zHTfh2JAETmbcB5zC9KHvEowPkJtVX7v",
  "key3": "5hyWCBJFTPKMxoaYLrPK3S9EJwvPHCdVsV4qYWR6tiYA1bHXEoXP4U4x9peHNQ7WszovUeaGv9WTVm9o3DKmJ1DV",
  "key4": "TJHjfXgefe9QyVtVaV8UAEdYfXeCDUZqJDF4qabJM7JZr1KfZWdJTpDs7woW1E2FmX6nxgFL3orQHUQ7Z1ski5V",
  "key5": "5mP8AfRRzG9PdueF1n3xhf2HxKSAZ1Kihmebt3rcnm2rxWQziHF5J4tiSqUX4BaEdWpa8kuErSfgX1f9He2cGQf1",
  "key6": "2dGJ81Y71wqKGsHy7TsTN94S7bKzWouPvhd7xmqGEfHsPtfVbfxf977hJNxD7dBSxQQQbEaRnC362b5ZpNARMfio",
  "key7": "2EVxtVcaJPoSN62udBK8Xbk98ao2EwJqD3ghnnbb1MzvP2UJfhu7tJ4v7QxVV1WF8x1ohBGzBcQ6DgtuBw9i1Aj5",
  "key8": "42XBFJUoFPNeM1kWNEJrdhrNnqrYMK3R8N8EcXwtKSmoKtou4smU85j6bJKEWe1DqKPkEG2gjvf9VEjec4sjksft",
  "key9": "nhpTPmytihHzNDFNxYJSK4dsW89sL6piyRuE5o2iH9PSWNm2jaPt6tcQxUHc5WYbRr8G8fAgT3ocViE8pQi5zr4",
  "key10": "5kHuEb454sfsu5XZsYQ2Amm7dJH8Hv4WjXkCXetqECboLvg6Gx9dveXR5WfVzXnfAjHDz5BEFL3yWuVhCvQiJikr",
  "key11": "4Ykzq7rADrTEw1rqPW6zHk4ZtAkRSVRfkx3bHymAAqyJ65Juv3SoG3swQW8wRwRgYH1vhXzBeBAim3z81WPDEnv5",
  "key12": "ZLhk1oBPm1r9N2k4o8hfYfmBrtPMnPngwNifCPVyaD6jjEuRzvU29guqPhU8W4NmySpzGGwj9HMwcFjspSfy9HY",
  "key13": "4EVFAZNywoHjggVD9DdaP9gHgasPaVppAXtPQnDrfn3DtfJJd565aSdDMVsT5GFsFW7oKGwF5RSPA3Z89agNzkkQ",
  "key14": "5AuNhuCkvLj2cSujJBFeA19GkJVAAo4g6uhYPCGFmbq3gwfiZz8ELDgoexsEUsnFYiLCoo2WU4Q1RLueUnA1NTyT",
  "key15": "277nm6QDPH457vCN1F5XFiCBBiZTDmwkgnRSKxvSWn6LDKrPbPqYMBDQEPAWFXXwGKhFEmCMQsM8z4nu2c6wnf4U",
  "key16": "FdJXrEJhdrWWmmsGUTSMaA1bgkUMozHo7JpaupDyyfDmHmVz1EAvXPQy7A9ydYWc67VHKdRCr4TJmx3Zi1c6YvU",
  "key17": "2Aw9MyHAssuBzzcc44sVwBJ4C2bmVNDm5DuWAzzuUmSriVvEUzkVWgJjwWPqPYe5XoNDDvqDjj29VBoQtUvWLncG",
  "key18": "2m8PMncH1yGErqP13MP1PyW4TpG8GDazoCdtwapb5NvL9TwPFscVhmN8RLKn4ckPn6znQdGAZCfsFRWpDfmEkKgH",
  "key19": "2vctGsna46H78Dv3XRiUmGKwxWBj2dk45en62CTuUPJ65Z7fyBWi4PzKFcuECiBWy8qhB6iFSHmD6bJcfvcSLsF1",
  "key20": "2XQqaCPBk7Sf8MTTF4DPzZfBg9zCwHCdZwRThundQSM3XHKDRewjE7ShXSHdUqko49z9c2kdynP1d7fFTC2wtBCL",
  "key21": "4baaghZbczo5sgw1Ff31WFCon1MwZiV5eksXYtcHTDy7fm9FsrEsvcL1nu4MLJrVvm9ekrofr5rWxTAccnj3Ws5W",
  "key22": "aH1hjBnhYBecpVCaEoBuaLHwLpeRv5BAy34cPiTwgFcZoxcNUTtzzJcnocSnKzAgzYNrU1hBSydcVThFs8xAT2W",
  "key23": "5ZbVseiT6PLy75xJUA6ZKqjA7jdZSgH7Q6J16VuZjvKzcpu1n77qw5JPx6mavhSbMDi5P7RMxrP9WbnRHRSfV74p",
  "key24": "eU8bpHt2DiydGhCAEtpb5fqWtP6EC6ARGS1snALULib6C4ubBRCRm744S2f1HUgnEtQsnn45x8vMswXZcAtbLjg",
  "key25": "3E7JD6rb3avV3jFEhhZ5Vk9DJ2UueTBotTQL2aDwFbkUXSr7bYSGook71fvWhjQAtpfg6vXoHtoW1pAZQvYRCNET",
  "key26": "3KeVJnh4cEGvijJcbPtoqfsEgP2fkswaGzfKr3r3EudHiubG8edenUaiDkzqez9pDLccaf9rbWgXJULAnku238ud",
  "key27": "4ncQf4yW3s2taTsPd5p34PZvZM7w4Pvci3fhWAQQW9dvTbPM9GvdjBYqZRoDx4BLZWpdBSSzsWPhTJuogdawt4jy",
  "key28": "5gZt8DRDa8K14QHqG4tapaBTLMuvbzwDKv5zwih9uPkKzV8JHZVft6D4Beab3EehaYB5dveN5EU3WbWRn2K8iDVt",
  "key29": "5pZTgxBEm6YuLtpLi24qwpDt3LLAnYU1tJg5vyVuxHxyRB8f49er4r2HigXNvVgojgG2FpL9wpNDrmgQcHaS9RGX",
  "key30": "39akU1toLsSPw1K5Yhg1iqFSPh5GUGK7KRNiXfjbgrmo7fueamKcDXuGPauQYCLwBEvq3dTUj4vDVqAQahVatvtE",
  "key31": "2MHPCYATcV4s5sJnBWu1FfgGdQMigfghB7i3L7viXCo3SMWxxUmyRPYAxZaXpCXsxzRMQzJz24HhdwMWqLvT8F5g",
  "key32": "EMTmg7D2HzSMNQ5d3entbyxZfHEPLmGT8ctF6UKLcpPaDsWQEPA7zZZWGBE2GXMPdYbdTYQhGRfCmEe7Spiibc5",
  "key33": "5nww6J4pQjb7ApdtW19NntQvVRr2ePnStWPcU9Hi8PNjz3QuytPBV43qy9FkUhKy7Do9kBx4UaYvjzCvdCZWNSFv",
  "key34": "54dvPuAPrm3gCTkchEzrADmsh2tm39D6nq4nKxxtf5w9urmvBPecFnDkF51hF5Vaji7VwZzTPiCXVXFpLq86zRLz",
  "key35": "4DQTN3bFoGLKau5kEL6VPcvBCxy171VUxVJaUmBnZPnezZZH1p4s2XModMqL64wBnFPSKpswAxrBQNcn3WTUZNja",
  "key36": "3ZG2s3R2am6GQZV4M2DfUETDexFY83yTJNeGd7i1hAzqnepY59wm4qLYBQccVDs1qCjSzi9XvUJaVkHutmU4HMLx",
  "key37": "21Nvvqeodi14eSKUN3qQPbPDXdW7VY64Swn1UGbcDfj2gxW9XFRkXRUhzjrVDLG6LHRvwiVdKmbTLhzNBPfoSZZQ",
  "key38": "5PwDYa5jDroetrEFPYrL7fSR16o5bBCjugj1cnumfxyVveLGHHzbsjoLfSPWcQS6nVacRZZJNWHn9BdqRSXRWWL3",
  "key39": "4KmEELwZtiMidocGm6PqSoP5LFftmbn8qvjRhsSomoLfqfAMtXTqZMGnFEwf38aaXrY8h3fdRxqk17gMsAdJGVHV",
  "key40": "GsmQPJZhgQB85gRGvYVrxstKfLVckuW19j5GSb7dZsEWDaMNNibwF1kUuYT2RE5n3d3SkeBLPpmToWuDLCkWkLB",
  "key41": "XrqFv2aNQiqPHX7HqqbuK5G9xHV5a3DPtam9waDDSUoJKQ89eH7HhaxhHxwgdrmsuDURBzGhvEDv5sRkUpU6Nus",
  "key42": "3sSi8fo1APcm4jM2LJAPm5n6rXwz9AXJ8G9WrucVLTtLBF1i4tb2HwUj9zXNVsBaM5EpEVbcCiuGkrs7cHY5XEHv",
  "key43": "4q6o9XKtFVsJfF3honqRP7PUYJmtqk7m4sbVMyJUKFtsPhZHNDy2qvtRvUCxM3WyTYeVFZj7C1wxbGNgcnNMYfpE",
  "key44": "dXgxy4mf6VbXS7PziJr8DriRSgTjKF5Uj2QFPbLUVa3iwZYKd9zhxcUV4bKfKSEtrb8uerojKfXGCz1sc1RMhxR",
  "key45": "ZoBiyq9y7ryaLC7Jbp25DGk3jf8SXpyJMDMaXRoPd99H8tJxLpR12HVawjs5wiD9NQ2HNMVX7PR2NNpE1d5TXbM",
  "key46": "4v78M1Eca3sVTHZmYVRqFCBJV8nA3icyP1TEQFYxr14Bam3szQr8amm9NxvqmzLbBUdT9USLpBnoKMAHXhaPMmw",
  "key47": "4vWwdE3NJJNN4URNXv94SeGz6EuD1m4jyGSyka73G38FVAfWUzJCNEVb4PCbi9nCSGwDhHJyu6Ho5UHVfRbNhwmw"
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
