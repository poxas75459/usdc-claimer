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
    "45QMYWmCN27eHnz5cTXB2J2jpsTdVkXvmqgkQ11s3kRBtCHuXPVyEJbveco5YpKciz3YWVG193V7iv1sguiBAePY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pfkYddfnebAKB4cmk42FA9t89o1yVfsPPqf73tweX58KTEYrpfL8A4oGJZihKnvpcHJs8BFKgBHyaZnjXbmP7uk",
  "key1": "4wJdgHetP8bHUifNtoXXC58KfSZrXhUpqhnn8J4i9BLQBbAo829MryMTBJeNnRer7wVbYmgW4kFCNyX2cnmViaw4",
  "key2": "4YNp1hosFPgpTKnBAqoS7r2eNdUYsH3yUV4WwZh78AnipxaCafA8x9bL5uyu16nRMbQnVZiDupSEnE1L9uGWmBmX",
  "key3": "5vcwT1siZJey9qTFjA4PcDQEdtkyNFZk8LMGMcF3j5Voh3jvovPoHcydWcuKvG1V31ScnGUSnHeh3hkyjjPr3TCZ",
  "key4": "456ZaeiZsorAHURRZnpWavPj4e3M2WEbSrQAn7ZjHpVqmxzxKKi7iabRVkWH4BdJaKFshCr8z2tzVsyTMhGyWAv5",
  "key5": "YsHKyNSCNMf6KomCSrg5YKvsFGsoUcHzhipapwCd7oGYkDUMZGoNws7t8KPxdPeDgDN3wHW5PcBPvwUekMNzuxY",
  "key6": "QpigW4LDRHhRRw6oHiEKTeLxkn83n7njbWgL74gXHRdLgqTGV8huoLSR6CjMkjNkuNYWGnYzavFnJpUAvCQftvJ",
  "key7": "5uZb3aYFdBRMVqgV2CH59swASpcXo7iKbNpAxn326LER6eb1F1bQZS9rgMt5dmy52dgQrJUPmPoRUuTtnHNqa8yk",
  "key8": "JekT9fYCmWtBAhDD8TuTxrzwZwMhabm1148kMNHeyT2MMkbKxxnne2MFRNUyL4SeEhEi3jLaebLT5nMTGwgG4VN",
  "key9": "2B4K5Nty9bYN2BMXiHriZDN4qZqjfBUVYPRxhMdCJemtY9pAXSG7Rphde18byqk8EHaat11WSW9V7fHdsaktbvEb",
  "key10": "2x2D2pkvUNTBa2Qw8MpftWB4XHqpciQd7cZbs8sEgbDNPwxLUW5PKyXo4dkLmgTF2jnqGU6KxCjj8G4GTQSzmodZ",
  "key11": "3jrazEUBrHSMXvJqPwmgdUJJuPLpxR8BDwubt92GWeFDTQDGQSN3ZX8Nh2siBc6uPZ825G6JeD8ekdcF3mqy9PgV",
  "key12": "4EqpwVSkozQJ5ohE2RRXZR893726YhjQjbBKanbKRPSgyk9NtzWXhUDvSowcjUVwJyVvoMKoqVangYEv9Rfuvwob",
  "key13": "4u8AKwtBvjUbjd9VdVwitZPWpW71bGwKWrPb4BAhRZLTHj5j8V46MahR3h8QwTkeo98xpPVEdA3xruCDKyscLmq6",
  "key14": "3PgeWA1HhSPSQLmPoxzzizywS7LProoCbd8Gko7ffDGMkdn9VEJoLpxtRYhAZoa2HoNNrcdPeAvYF9Nxsvaefo94",
  "key15": "2ZYWNudu64iYKQLsjEY4reW7FNNvDP5jupuEAquPKKU9qoBCfKsTZRbvFByuKuJvEkkSVLNj6UhPWe7HjZcgyfT6",
  "key16": "5U2LkTweWFoLuHyXiwV94XYRaoY129q2kMQFLRLbeUS1nudhEhhxMF1fW1EEheYrU3BE6ES71BsmmGhJhKbt3dT9",
  "key17": "4kNzC2gHNUN35bftsf9sVTQ6P1NczMBQyfELP4qwNHGYowfrhkopyU4Wz5FM9sDtsB4mCcoFXX9rzoArknEbgQBF",
  "key18": "4UhQzeEDqcbGuMD5XYhrtc9MWYVo3ELp5qBc9bEeBoFcV9xwKZ7fQ9LHkAXWDnQatX8DMpsjWvghTZTE2dL4taLH",
  "key19": "4Ts53MjNpqR6ghGGmf48AdhhASice2TwgMspj8yQuqzjuHV3swTeQdqCokAttW8bESqztNd7wb6uQBBWC1Hj6TZb",
  "key20": "4cNUUkVmjcwuR6nfzYg89P4xiYuLvzk8dvMkDPAKbdYVVVNxfjcHNa3hm9HgQH7si7BF71m2tRm1PWUrTVpoVpxw",
  "key21": "5XgrMTwPPQhRPApxc322fAzZnQ3CaYvXqCGbpHjVSFozpsmN4gbtJb6LY2YS6Eae9btPtmT1Bs4jeohK4iAAijx8",
  "key22": "61yZ3kthyBD6TVF5quUg9shzAz6Pduwyk6L1mwtDjXag6N3UvuhGoRApWE2q54FrttY9eQqkENTFpHoTisJsd8Cg",
  "key23": "41RQRLJ3Ge4WFAeEPFnkrb8JHLjhvr2U9u5BeZVBFtQZFCWWWk6TDuaPwHGFeBdzxGLU6UZZGRMbFNN6ErcrMAed",
  "key24": "2MFVVL9WjpB6kdCe68ddtV9ZXKUHVhJsoQJycHq6u1RzvsXhaZcLFHn67Kp7id4QDgVBQCoruB8ZsVEXKFhXmXn",
  "key25": "5AnFAYNiytx1BSCzr6veuenE6vSdUrdnPqyStj9dLadntgtdZ9qEpAw4na47BL4ihGSJLRK3RNWJRexcwHKL1nRk",
  "key26": "4BvYES2fRYt5aPXWH4EvidzrQ94xkFKEoALZiBYTpCUc4YidWGj2gTiegi1db2iXeTBcNhFLTm6k77JSKzUQx4K2",
  "key27": "5kBsG3y6Zaq8DN8GyMC9jtU3x46FMRhxv7EsZNkohuWWqfmWYvXPXLkNttSuJJZVTQ2s3HDz2a8eypRCP8i2pD4A",
  "key28": "26DAfMa4G39MN5tmkSgjhpAjmYzXaExtCsznRacBprqLMhxM1EKzvhB4EJZngA7m5Jcy3yRPv3F7rwNSxT7J4NVW",
  "key29": "2Cvsdgu9ux5AyfHuBeF3X3YSTdUx14QF8vrz6Ee1CHTcr7ngaJu7W65Si3yZ1hwX2iPLmSLhFSr1nMoyg5EhUEu",
  "key30": "5Rq2FWUQFUF2wrYucoqxumFP396x5idrSL1BnrL9mbmdzdQGwYggdMPw9T2jjCD55XuibQgzuKvC2eiV4UjHtBJN",
  "key31": "3o3gErShEqjyGFLvztk33Uds84nM8kMNBfojjxaqtpzWRrqiqyBftkubaD11kqmg7ayJoM9ktqj4Fm284vekDm7Y",
  "key32": "km4UPcCdvq7pucsA3raPZ1pcN8vZy34Lqk3Zm6DKCdJjH1d3qKnLMNTTjQXBSArJETfJHjCmsoJtcFMHdCz2NsB",
  "key33": "5EPDedDD3JjGJEfvxdat1MAbnywX9dkZmgW1tsarJUUATnJTuKq9viXDekxfKQGX9XpptiKTUokkMFYEmjFjCGxM",
  "key34": "4cD1kR4ZnEp2Gsfyyh9ia4H8hasKFrib2VacPKamrsbMEVoQNV1e7es6ZyUG8mLNHJEChBdhc32Zai3k7pwoBsd9",
  "key35": "4bWMBR3uqTx66hCJJn4aZkiBLaeyRh2eWkhnG9i4PBmgQCG1BBtYgheEyaWuWtJ6qC2HtCgL4fh3wgVfLR7Y1tcW",
  "key36": "AqBtRgaa75ow3FyJzvhnKBMkia1jNvACEUGhPBAJ5sT11S4Qm6HBG5S63tuu2nQ912r46MVTUuVAFzvhueKrjdx",
  "key37": "2aqYTRdr37s6LxnXhMv82qDEz83oZfneJo1A7fei43fP6YJx9GfMmzAYRgkqKkUgsWpUyFwwAYZ26TAY1Xu4P4Mk",
  "key38": "5okxnM6NieAZsKnYrM3SFEwpvDv1LCLno3LBxfBc9UArMTYz5BHmjSBR9HQaTuY73nq8KQ1E4s4YUHgMr52aDjpd",
  "key39": "2svKWgeJWiJRmkGjW4iZZZsPbTbenSE3GAW1t7gWPSsp8j2naTq56SGzEpGgwQgpXWt5znw85XaD9Jp34HiKUeLH"
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
