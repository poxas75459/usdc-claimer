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
    "aajHA24TP1epn18P7uUWwbRRFpYLkqmMMGH9bTK3wYgYY3iTNmeSrNSbHdEoMD4NkK2WrtjHSmNDrfv58KNLs6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ukbm67rC9mDN3vYDAvZVcT12RmfgiHppDYMYbNaugKbaBi8cNhjH4qhcVYErkc9uj13rLRzghaGVCHWgE3N6Qp8",
  "key1": "3EWmdTvjM2RzAhmoHEHzyhH9TJVChcbHMiK3KJt4TLtHRnzKFsyj2waaq9dnFL9CAWnuvD7nLqRGqjpRiqAbbkKF",
  "key2": "35qgvJzBkhA2U3CQMknbpuZzx6ruXvydHMpvs2zEsSCSmGUVbzFpmGbzYeTV4vP2K9m6aaG9e8nkWnbb6RPp3BTP",
  "key3": "wQc5AX6PJXstWAwJBXZmB5XbBUWJXQiNkgC27Fg7ZeJLdXGda5oGRK3Es2XudLmdDoMqVJD6ttMSqahE2TMqYu6",
  "key4": "4eJ6v2PbqfjGEU8Gd6zB5NbptLLDrMVR5w2Rj1yBSFCp995nhmECSbHTQMhD7QHnEv9Nw726FWryJctUqycJneTe",
  "key5": "5czhPUJUnbRb9KUKMC1CFyoygEgCoSPQZZjCt4wMb7Jt6cDP21irGrw4kGBrzqKWuboLymFVGLPsNfXEzbE7Q6Ly",
  "key6": "29Fo5oLZAddBnihAM4qX5fYV7nyzXvHivhDmuzxPJNd6mvoi1sYTEffSTkZuBy8SzmmfWstqcYfQBjR21dSAXn3h",
  "key7": "5exJD88DqJ42X4pWfdHTSPsh7S41gADqmj6JiCy4UPus14PPxkVmytV1GUe9P1oME83nXWZJ41zdvrAs9rGAKYER",
  "key8": "5XhUYVjtXR1cizxP3mjSibizUcYsYvcx3MGZyfVQKJFv5JQxJA47CFREPGfxkxSt2B8bouxMZjbv75teyhUyvc9T",
  "key9": "aAwAZb9i6eR7KfJVFNr7bVWYUMmfztZtZucWc3ENGZYUvefiLQgiHadyNj9oHm2RG3d1ixecBysZPtP2WmxF3F8",
  "key10": "4MX2H43jCpGh1sCixoXvcbSF68VpJN3jcqNRXZVPVStcKvpJQ97vSN8MPJqpPS72ShB8yHJCbYvxWMzmkxnNMKcj",
  "key11": "34s74H8bpb88dv2mrsukwr7RGeeM3sSVxrkc84oycokPJHaPCYSu8C22ea6gXGL4TncW9bVFJVBa2q5BVuWGji2s",
  "key12": "fRLDEcpF5orcQRz5gBsKZqgwKQfKfXK9BxfndU6w883Tp6QsAX5Yu2u8hGzKWSkwrKmWJ9P1YJzUi7HLw8gseP7",
  "key13": "575xMKovXAsnck7RTPDD6TfoPZHn3WN7rie6xys4tZyMhqtVFEY1GoptWyGpLni7HyNVYXEYouahZseNVcTrQeMS",
  "key14": "47yJRuM9bp7y4tShN14TGBPYDPKLBoTXjs8UQxw2Dn8movnvhw17yV13DPtRgNR6pBhT1APwxReMptQfw6t6C6LL",
  "key15": "55YCsbjdpyUmKiDzDwD2EdpwbwHQzDoaMvkfAqJSArrzuEYJPJHFHDeFMRgxjdKqS8PXshW7iZPD7A25hjPNPXSN",
  "key16": "5TQygbS6eKWcdf1VDZZBaYALBqvdFFadop1XgZbTQavprqqaLD1xFGtPtFBtFBW7m9efe4wZfLEex2z6X5uMyUhg",
  "key17": "3KjMYWUAFdyHgky62VKxNyMsNPZCEQahZxLQYZMrVQTEjvy6wJoKq5mDGjeH1jK3GzkjiXstngSao6s99ZXVpvjG",
  "key18": "659kjYqR3bsbbvCKYu8HuVBRdn2m83oSBtBhbbohbD1TUvchuYeepxB3VddXpu4jDTSyf22ToEuwTfGtsEuwjSRc",
  "key19": "49dgPNKZM6aEHGAfZnrMthftjafwu8XpAi8KB7YaLXE3MkMyEPfzxyrT1CT5xzpc9PpNuatEAvDF81ydLwk9Evza",
  "key20": "2krPejVCN2raUFnUDvUkaaAYCfx1kStBRwxC8AKCm1bQHLktcdx3QimgcuWFdSJ5ovBX9Uj3wgBg9BwCo8uLbsWp",
  "key21": "2chkkNR6Q8wPDdtzZVTuP4jXo8zLhH1yYn955mbPwNTTKzfoU4y3pCaHZ2Ur53JG1Mb7qH1FaqyAcGmhQB7StXKy",
  "key22": "LN5VQfKhkJQQoDHWQa1iJBHbXDLMjDzSoqGFo4J7zJ199Depc8fecujv7vcL9T462Hg9UBUtvhoBv8V7TUyxXFN",
  "key23": "56MfDRe9nibAi1oCsZgVjDB592AvnHZVnZPcYu8ZrUADfawf7fsSRAiLn1YiXTsay9o5rwhgnLmdZxnht4sqHG9c",
  "key24": "4nL22VfowKemW2PDVvNXzbNfhGrxog9h9RFgRY6v5AG6sXsZrwXoGNehz7NewwVTADgEFygbjJqkPgYykko9UEai",
  "key25": "42hYewaw8G8GD8YYZxixGQXTeNuPPiFj63B8nVxdzCAvc97yTqMLbtXb99LzBbMwXdauCFK7143dNBoQEBeqGbBw",
  "key26": "3k4hkVkHYYz8tVrRaXsQJyfStmaXqr9sVvUTXCLpF4F6QKDUgiFearWFUZhkfsVVTnvyPoET4gMwkvF2PvoQC3iK",
  "key27": "27x5Ym8ipfCCYhm76adSc5PNRxLivd1onbTmms2CNVdLoP3XdXTtJ7QPkk6Co3W8zdwAjWGULNo4AdN9A7Pz58ju",
  "key28": "4XVkshZhwu3d7YMXX6fou6irheT69dL7oivEXJZgB9PvCBiM9b1RsDj21vVm5sgEYz2mR9w1is1yuiZCrrWjT7VR",
  "key29": "4VYS8E4LzAZk3gTGGF2oAR3dEE2gkWv9FWW1ybhri6StY54ZrDaa67S6nJZmMA9MDapYk7B7Rdr6nUJkLqqxU9uc",
  "key30": "5vsDAehT3t4gRXcKyrmR6mcMMLr31sYfDpEW41ihXBmeyuhjSAWewoAuMco1VuybnsfGdqWAr1EMKzqVoeWt2aYC",
  "key31": "3hDa3uvDw5oAG7gePPfS9KcL8z6rwyDdKbtcATN5myrLyTLVjfRuzVowuerk9iFN2MD2dcTgB22tmHUYWu6ZqfdA",
  "key32": "2vJVxzPcPR7tTMZ3UnE4xRfdZrA7LVyGeWq1sdnzT124ySiGGsJVxtfovwwMaALoV4WRTgQ9o2JokLL11wsMJeHG",
  "key33": "3qZXE2d9WjsY2R4AttYVoFHH37EVoMhkKuvCa3338JGhvHModftJgYFMz7jNo4D38gGqLJR2GicfaLz7Z3xbphy7",
  "key34": "2d6eHQ33ZX5vBM9CzaZuLKFAVL7snp57PJvfcbeuRedsha7GbfLDpxmqzWmEB86sbFFiQX7oVEvopotTDix7uT1T",
  "key35": "3dZjpZ2JECgZt8zgq3gHmFVpRjs31djGGKhX9e8zRacrhaywASVJYPSH6TXQvKVgw8Any22okbXXyjiS5iv88FK3",
  "key36": "4Gq8Y9PRUz9gchTUdRrorAoDzzRTR8DemRr2mgRicg2tCCoyzscW9R7G2ytUjhRQEw357anuRLqSDcxACLwhrDwY",
  "key37": "38zgu5KbrD3Wi9ocV51Nykb2f8CsABGP5sjRE9BCEnr7JiDiLTCvULFjKEBRWMpxqJoGjvehP7EVviJAA592mMJn",
  "key38": "3d4C7cNQe98Ga6pXEwWMBFSv7gainyHBWeVwNPxksGqoNr3VS5Wvr5fQsFFsy35EMRaHFs8eusodhk4nv4MWdk1M",
  "key39": "W2oq5mtQwxdyefVT4m1k3nob6ERGkip26kBxZYUDa4S6chMo2uzMWJnGtvUnESTi2BXXxdHYtmiXwtLQdzeWa4r",
  "key40": "521J4ytA5Kv9v1p8fdMbRvaNB3qDf4WHnbwC3Mj2LjEg9Rk8hYPDnLSAfKMNcMPDQ7P8jKrwSRtXwQdBAodhZBey",
  "key41": "45dN2BdEkVVR8ayJXWUHbu8T5RHdsr4s9HbfuxLosP82Eu3zktj9YgRwYqhYUpq2BrGzhbxrrJb5JtsK2c6RtVth",
  "key42": "Dbmb4uNuPtwe36ZDQUgAaZrRAY8SCT6GHiGZe2DrdHp4JmzWH3DkYJsa3GCS9Rkke8eiSdTMxnQjhJ5ugtQNEKG",
  "key43": "5K3xM9sbq3Msx7CnBEBFj2froST8H4E1idXr4eB3zJkaiHwz3q4yDnoPDywaWpWyZ5afnQArD9oVrXibWmDXJZ5o",
  "key44": "4yfm7BomhX5BtGRXsLiJyikR6vhbfKEJjHy3FF9tpE7D6gvcoKjxBzUGbP9XxNTf1Pn5DAW2jCegDppoHaxLaetN",
  "key45": "5zDEBgqgqcPCRovqrMJrpFRoBAcuYahTGw6vEaXQyaidKUQv5wyhMRmqDNei1odrAodKJfm1ySnDBBgRDfQHSwLo",
  "key46": "2f6HgWJYtubBzmpUrDY7vWwLgtPihJHLanync4cLSK9qTrhQXJFF3ETivaTdZedKfeC7CiKWVZxk2E9mLnYrVvkE"
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
