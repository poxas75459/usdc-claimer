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
    "4pqM4kezvnnMY69UBxycw1xYq8ydhFsMejditZhbtAw5cNnQNLHhe97qjNhPrpnuP3QVG9H9bt5YRw1XVrmBgJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gjxGQSPs8F2vn84QBSB5ARo5oRdFNBaF1Ckn7HqjN5HvBLZeVxD85dzHAYJDmxu9t7eEuot3nzimKooZsQBdYyH",
  "key1": "53qNpDPWys1EmquSUP1Yug2BzuYMFDfe5PKcHw5fcwGuNHZVhYV64KNMAQbRTLj5vy6vibxMaKddaVr8WsaknBN9",
  "key2": "557u9VRx9YzmLaWfpAJMCiuDPR5ofY1zBTnfkkD6z3FBCwKhrrAEMUtb4vzDSxTRicdr1nj9krSMKcVXvHEknnGh",
  "key3": "2DuU6iz69JVLZevE74sYjGE7AjhPyCmTdaFHWvyLPuSSSddgtHz2tqiQ52NeZVUFBb5fiURGEQPaZR63GyJTJDUC",
  "key4": "321pYViDFnhxXgTYZXwUj2ewD8VJYF2CqrbqenFHxb85iaS2ZR88nWPQK6hYFuCvz46MgquZMnUtkAUrbAWXdQTM",
  "key5": "57EViaU6wjXQ7xcMHYb6fAzR5Ao3sYCRVagV3iRuFMWZ7VGKpHMmD4LozqFtRaEmqeb5YeeoFABZKjcSnARrzuLt",
  "key6": "3ZddvvjMCRXHbKCH7JHHeQMVDCLWFDeaAb3ZFK9HSdXa4yizPUAJGAJrwrweRPxaM6Fend2SMq7ee3cMQyqZKHH8",
  "key7": "2UC68w762PwNsXCSGoaSr866fAxNN4ei96vGxYCqakzvE36KTYQzspJvm5d1VFJHnY3tDhPKCaATCyHDaXh41b2a",
  "key8": "4gzWJ42LeyqEF5AZEgo7PdBLU4do8mBQsU99cDEkx4XwaNZ7hxuVzqAGQtQFgdyprd3PbXUcnaod8Y1mqxyraHt4",
  "key9": "3RxvD2goihcvW5xx26FYCynwGSi8jm7rcAF1UsGV7CsfiV6KHEnNjQGvsgSqiVssX7CGGz7GeZp11n1JrbDTDhq1",
  "key10": "49x1CNUXMVukd5QiKpmo9ny2YYdhy93xAd9VX54RmENm1prGBS2RGPPwR75phwTPdCxzkdKDHZD4NYs2AH2JYddC",
  "key11": "4rAes3rUcsb7pTgJeZ6UJiAkTP6GNFZhtkx5kSqX44B83D3ehfBkf2upu3keraMokNSaVMW8Uii36zSDhowMgA7t",
  "key12": "2hu2g9KfU6avERpLrhTb2nfPfVUeudev2azRSuKHXFYGmB7cEPtg4UGd1GcAunXgVC4VfwMVfRL8f6bL3onKFpSm",
  "key13": "476F1T7UWPeteCzKctx6KYiV58TffY1TykmGCmCTNf8FzuARG4HpSbF1jzSGX1g6Cc2mQZNSNdrjg9k3DNgCaubk",
  "key14": "4FeSbkanTWEqf5NWvsVinERHpY7vZdSpNDESDX2dkxiYQKkUEqeXZufh7rnQECx1642XfKGxtkbkDRnhxqGHt9rB",
  "key15": "3mjEZgYxcNRHhy2chqy5YXYz2oEvQHEckRLBx8BURNuAXdDTdm9otcKyPgxCmbonFKbiZJMpLoFxRMiiZ1hUVm5R",
  "key16": "68e8sgwc4fBYzwyAhqZsqh9MQveXCJNgivmwqgkUCvNr119n4Hryp2V3Xz9hhHvGEbU7m86Xhg92359FKmnQ5XX",
  "key17": "5kc4PJ1jTd4hmT6BthWLx2kaveezgzW83rEJFAc9aNzf8idK7fRhdACic2SftwHaq4nRpjC1No2bWoMwnoh5zPdM",
  "key18": "5jnpFj9eDZ9qsoXLWBepC4DH9C9Y5tZDA7wCdEyjRxE3X8r3yK9ek9DZphLFMs6WAeBGHoKdxs1eMpTuaX6Ccs8T",
  "key19": "4cWAascs9K7DGpB4tLynaTTaw6XCDb61M81qefPPSHWf1iZbWxQdrMhqS1ZmoFNKexvqQKP26M32ptPSTfab8F2s",
  "key20": "4YsmkpwmJHFPUTcDHpx3tpc9tsmSZrKFN6euGiYYU8EzurEA2pPmojVUH1XCDStaUMQf3o2MHVH2tRvt6WUjYBfx",
  "key21": "5fjczRwZx5RjyzVDTyU2CjQvzAgat1iimgdAYqfLEYY8ZBhrsnpa7qoeS3JwZUH4bQd21ecuDZhaWoxHjsoCziqU",
  "key22": "49VcWrNPxm52QkTj7vSGonVN6PMrUxUce42m4EsXis5G4L77VF5qyP4mRDETWb5u2p13NvKahGjdy6Zfe3m7Nn3S",
  "key23": "369jJXrJbtpeogowQYUEc7oBKBwJpVDv49qVDvjmDpV35UWdAfEhSB6euiSSFTXuE62AzxsP8nRn3NKc3LTFVTUi",
  "key24": "3CwaH9U8DiKt1SegnMzMkC7DoBuDMZPtXAEeS3s3p99q3EmQ84y3hdSnMCbWqTuF4brB3gWud74yp8xJkKoYFG3V"
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
