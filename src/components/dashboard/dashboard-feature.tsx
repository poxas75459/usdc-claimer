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
    "64fhX9vv45Uaqz9cJMSRCCZazii6qDA3vu88kr4WqerHJ5cjHo4V13ySDHNznvy7J7ngV5EnC5kWtZyRQqbvVJPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f3pWR1Q7ptHnxNd1n5DmfrqAcnAWfNLfxvwzfVviGwX5HR1wwKixGs378cLk1XyrCoYs4MVkPZthMDauttJnMST",
  "key1": "2A1j4vJAbJaLEMVFNzHkv1NLNdweYGhpLoXzmdyyYb3oSZHDQKY8m3HiifCCReo4Bhimu1bPYBpLaFEnrN6fWURT",
  "key2": "3Qx1HQqAVSZBs6UgJD6XbtT3oRiEw1UogrsrhcSx76fEViN9fxAaYUV54xXicqtoqdBwwXHhJTBeiuHJfAYGeW37",
  "key3": "v21kSDyScsjEqhVs1EqxryBHyBDeegcSRq47HmSc9HD5LQCrT1mQP9TxUAJVg94VV1Z8KA57m3YR2u5jH6JQRvP",
  "key4": "5QUopAWaLmLef8pnLZiE75ibeijhnF1Z7W4FGSv7sixKMzuyznQdngWNdo1qziSFEuXweuehxLKZ1i5JVYYCw8Gr",
  "key5": "1ojSLueFugeQ7gLg5QduMcJDHJ1mbqK1SdgG5ndysYgiVMsHdconRZDpdt3mN9DxaqszWZWNxCoSM1imHV5A8Pc",
  "key6": "5PzVbUzaanEwiDq8WPVAE4fQnutXJNnaDcy3vZ4cb8NHUujg5ZFRCn46cHyD6tzZroXf7nydbAf8DUGVMQQ7bgfZ",
  "key7": "criPdcqtfXx7pTzYRkBTg1esA4gs784zqgf5vCpwF6jaHFuSsQPGdiXJhFdyi46nyEeH3P1kAWmoNzcyVEJ21zs",
  "key8": "7ojK3AyddffTCtAbfG73CbfXDqafC9iJm2MJZBezt533yo6nPSqjuaydsVXZ3T6jgqoSX7FVMkaHY8wkY6HxXmp",
  "key9": "4GWhKtSFg3VPyMLGuRYBKddMStyoLDwcQ3tBXMRKbs29GtLDuLsjuh2NAvjSnVM38fGFhd8BKkMkoVroxwMbAnb",
  "key10": "5GDfVYCurcj4xHiN6yFKai5oJ9q925n9tqb1Lb41KSgkENV2qaL8P5BQKbUat5Vj9Rf4HHrQzwH1DVDyUdvC9zez",
  "key11": "5oCYQrgEbTm9kBNcGSTmGTk83CQGm455Ty8nEEMoahUPNpBaEo38CEWcvHYnGkCXf5ZfQpt2qUtVZmPvU527HjwN",
  "key12": "61VhWnjGDi2D2XPaHvqRmcFPsiHg7n4RGbjhUAgfjkDSg7p5Wm2xXoUzRJnYoeTDZC6g1e5DyftLjxyNUwLixVvP",
  "key13": "2xteszDE5xNCTgUWmsib5uzDT7Vi9zt8CQcL7kMZoha4dPYJiDd8YtKY2Z9j3xPqmSua5Ts6vaWxqvdYrEQUqdP6",
  "key14": "4TmTwjeQLLhS53YxF6bYcSfpHSLCSNNFJPEHxBKBbU8izXD8FX7TCuYMtPuCPYzQiVamqfDmNJCPqgDo2GSguXmw",
  "key15": "4U9UfE3iUzZE5fuHFMS97K598p32wFYYrbkMUma6XJKcjoRK779E9FPQtmMmDpxgoN4xGADwCAstJVgpcH8wcfLu",
  "key16": "2VcBkz6FPQFJ9y62CztYDG4EbEuTUUahq9xEW6ZCo3iX6LJSFroy1tEg1dSEtKKAi8HA5zGd8irFhpbyLnQupVwz",
  "key17": "3WoSA3FGpN3DmdVmD7bPZF2NTtT1QgquyeuHmXyHPkRzo8KAsuReZgCV6Ai5VJUPMKC7HNjhRAGXbmWD9MPXZiai",
  "key18": "QhpqzGi2V9cZpUVSniNXmVT8zNXS2cFRAYNLigEDxcxKcizy2KMTiPkrpABoqtVj7bDGWVVM9ZN9C6N8aDcVVKh",
  "key19": "25FweFCEt9FBYzu9a2eCXUQ9PgCLQgJfRDUF3dCiA9qb4NDNNfT2AD3Zf8YCgEe4QfpEXGEBsRhyzgY7AoYHQ5xb",
  "key20": "4t6WHXrC3Ao3x2zzkepY8cRmfvbQxiqqs3pNz8wyo7RHT6Xpn3uzKxeLUosNc4G5RFiGwe51ho7GcgCaEHiY5ZFK",
  "key21": "4svjMNBRS6zDz3jS7udi48uBMXrmbwz5rhPe824UfLRJE4gjTMmsJiLLkBzLmcdiwtq1ezEGRo7TSdUvyuzuHuXX",
  "key22": "54ZtYqQStkFgjS7FTFvLFqcf9ZWPaCeHQ6qTPSaHkqC5sDgpSwEGxPpkCRyLCVX4cto9AVU3zRdf8yBXP3QdmAs6",
  "key23": "4ewKbJSedyuD6zL8Ya2iaNntZFPkqcj4ZbutdZHUx8G5G9c7BZ3s8MWzM48AL6de8jaZPcMNyhuQkDsRqJf5Fvks",
  "key24": "4iRppA3AQvPPVGr4JXAShbzPDsikjzNZqdiJMbEogEpphZKCMbvnUnjaATr7EQcbXfJZfi2andZ24kuB3H8MELNE",
  "key25": "2E1h2iUAaU9ZszzXiCPBGB1f2KsoQg19Ds5bEeUcaKKUv2XeQNv5RfQKgrdT9adw3LhroZJ64KPUMMRkPQRLFZL1",
  "key26": "5EaVNXuhT3aGjaZS97VNfx62YPUvCvSXWzoRSC4MMBd1E95TkBWqnqgD9sk28pGRzhB7578TVqPuiNh3V2bFWDN7",
  "key27": "38BV8F3dEZNE4xHRXdeb5Adp3bN57pkeiFd6mAkmEwzMtYs98wynSdHWgUAw6RB2Rqv1P883EXBasuCWLBQvpVS2",
  "key28": "3HntrGgL7JXbvqWUyftyV7hX38An1D9TNjY9w4fzjLp45oKbQV9VdxcCoCmjez5TrgDtfCYG1CYubsgRSGjEjrcg",
  "key29": "4JVF6nuoWbFDJixyKKmq6ccUr3w8VUTdMLAhy5U3huAfFfDubbEBZCAQzVtrhqCwq7KPffbNuivBy4W435s2S2t1",
  "key30": "SYaLgDegaNZjHsLTRvv5r67HcorAwBP98Vsug4Zw4Njr2NSsCcCi16YWpPaN17MKxnU4x2iGDMttedNNQt2ZNFU",
  "key31": "5hmtG3iBZ1JwdcpqxJCgG1oZ9hG1bXcxzGmRvCcjZ6ZdCqYvy3ebCf1myfe6FJLoRcjjCf9TZGbjgqEgEShHY7YG",
  "key32": "5YpfxqkeCRFEtQxRLcc83TsvsnihxPFe2b16TxdxkvCqBSLPYG1so3VGeWBKStJ6nWnSwf9TDFqGweXXrpCpipJA",
  "key33": "3yY74Rk9sXYyiqHVZ4RxBPyfmUkmFSAn8FAvswZrxJ1GRZ3YXv2wPv6M8dVkE3fQ59perG7oCHxd5YfJHTJ2JX8E",
  "key34": "5Aqr4hUkKAd3jsmnNZny61D8UAGurQgsmzZ2mwVr9u8cYjz975UMXCyXobJoJwY1L8KxJ8TZaRmsYhwKLr37MoAx",
  "key35": "rV5SmaoCusiXDscoakb9BZkF38wFaB6iH2uhg4QxmkTNMLn2w7LPXCKbPAgRD8cVb6BYHHS8VWQbamYgCJkyCtP",
  "key36": "24pH5xmpB3ftEZRm9YWeiU7ePFKHhVg2xnQaFQP7tCCzo7gRuXGEXsdmiupLTY9QdgfKTbu3rRQkNGNxJF6vNCje",
  "key37": "3msELyo2aerB4HJVueyeZFnhA92U3LYw7tFsUKMPhnpEp2q5hmR8eRUPdj6QN2YyVBVzt7etBNv6MngNCi73jMyn",
  "key38": "4cxrfw61h75U868zYoZfx84LaSJrGR2PtPhhQps1J6rTNnHYBGKdfLxN1ekRp4ff95TdRdnrotoCcVdcpNuMatkj",
  "key39": "Hp9ruc6ASw7MeyTqSu5Ybq1D52pAq4vrNXMCfnzrxts6UYZ5ezMYsTKLuCJZcV8DgnAdjDBgHeRQMXmc8aWyRt7",
  "key40": "Cm1RfLqUrDCiVsRUE9JT1km3ybQS3Z6rAtoqB8H9M4N5rfhDj3Tw7ZpRjzRjdnkX7mpFLM8ypzTojra4SavSPYN",
  "key41": "3gbe43JLMvUTYTD2RF7hnHPMD3LACL3Y35KPQVe3Z4Z6UMpzVsLwqGgQtPpoFMjFJHe8KJVi6PZV6xWijR73rCvj"
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
