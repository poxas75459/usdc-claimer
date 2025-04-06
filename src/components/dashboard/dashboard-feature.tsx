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
    "5n9dUdbSsNBubSCeMXN5vk8wL344V1WheggpY9Z7NLNtLqscZ5X8qaj7VFjbzzSet49zNcYFfeHec2DQX71etB8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rqprP7DkMCa8LqRo23fcmEDqQZD4N7wqG5SFwgC58biT1wsQNqxE9Vttx53WP1TBnCyCo2bxCd5CKHDP98JWvc2",
  "key1": "3fr37pwrShHGaUe2o7iFiwTonfvjehwoStciWqzBHY9NSNcCsoiJnBrBzZtpMiK2LrTLDy8qLvrdixcvJCrq8cUf",
  "key2": "2qd2rzCx5MTvt1kkkqbwiUpE7XHTXAyDqDmC4QdVFHS2SSmTcFqCuWDCxDtmNYY9rBJRJLQJxUPPpgJ7brCW1cEX",
  "key3": "KCSYEqo6vJR9qAbhtpdEaGNi2owMvwDCpXmPUYAKpRwdJ56XMAWjpfaBqwkRUivYaquTFMqmx5QStSijhdjA33q",
  "key4": "3i78T78ca8WRq9b51v8ajUAfD4Qc1AaV1fNcZ6v1K4tEV9p3KQ1FWX4hAcPcBq53wtG7cshdJvnbCP6RwNMo7uLn",
  "key5": "29Y2qKQkazNYTywoHbdN919gJhb7EN7Ya4jpHpt9eGv92XzemyJDsSxxBJv8mxxK9BSfg8dLsTcDp1ScQWGqTcW3",
  "key6": "4orSXcZtZEJV8fz6tdE8Neio1JHAmRvQycA2hCFU1nzdsef3WMZUccwCM9y1WaYPJufEiAc2fnLb9dSx1VvAfsom",
  "key7": "5LhganxKrEbiNLDYfU71i9YzazKkmCaaEDMvnUT3GwCwqJcF5v4fVxMkok71rWypJ7xnTvHhrirprDUoDyUb7Zyf",
  "key8": "4goRifDa9rm23Ax2NVTk96smypTKj9t8WcZ7gKkv6qSUDfW4DLCwhfnbLzbeFJt4hdXwJSKFQo8ZsYoSjCTzwesU",
  "key9": "5xCxC8gZq1A8nbEPxPzLR4NdG66X1FfTjCqk3wmmQue4LZnBhJ8ko4gM65QWscRQPMGMw9D9JMkcHKAsVeQ5cy3R",
  "key10": "22bYK3Bh8V4c4Q37t2pRbfk8QKH8J3sBUvhB2CGoU9HcxkoPE1bSGQFvS83QbNivxewQgQ8ynSHcjBd1cxJDiBUR",
  "key11": "2JsydpL3S9npmqg8raFJm9UHxVuZQqRfLXzZE6TZyoeCG2icdm5hiXMWkLoxk7ggX6EbtKF9HU6BCdgVXkyhCHrN",
  "key12": "4WqV1zzFiNozgmRqSGzShvMqAaGnmGR18B7TsvmeLB4L3RbEBqYemwwX8VEeKvvpqkcMig8VWsa7uJRWUKSBzMRm",
  "key13": "M48afvMmycsXfC58qLnhPTfZ7dg9J8QYt5cH1L52gAajeXfFN1JFpVTznbqkjiz5aodBJNe853f1ksEETwt6ux6",
  "key14": "5XeNhDSnXghyarWuBWcCb7BRjB1xk6K7niZKfpuG4GWyNCCHxp7opVjD9GfwRevUxwY4L3pw56BpahC2gekPQ6b8",
  "key15": "2x67QobscdxfvdQx34RTvCNaXasNBQVTNr4qWesFpniNsxEo4srLL3iY9aAEtZkuqDV69HGiDeogeVY9Ddhv6Pwm",
  "key16": "5W9DKKH4Ej9CMtdbWAjybSMVkomNarXQt46nze2z317YZSrS3H45crgHomBFwajYJiQNGHoMBDZ42oQBVqvmbeNk",
  "key17": "3jmgfbRWjrsvh4GG3y17KgR2HVrboHWED17XCECkxLjRwXCcVq11fovj52KyqGVkwiuehYa2Z5vyksA5fZYAjzap",
  "key18": "3bsEzjtDdjUJYCPhHU9q9KTKCmd3wmdh1Ngs3bcdnWifRVHgjMUmZb9JRs4iXo1EGC8w148yeQD9XNBLH54U7kfi",
  "key19": "5S3rCGTNDzbxpVnqQTEfB2uSftFmzWANuSuAcCXp8TH7PM9vJt6NMpYRrUosTrDvMzJWJHD79Y3XukdzCa9a4wGF",
  "key20": "4A4rVd8oc5zeCWfEpMzQFMwGEHrpH5eh9DuR3hovX97gPh7LodTVDMm7WumPJmpwdxVneeebgjmHSyaqh1gVoazs",
  "key21": "5ixqefPtTjZM1frrR75e7p9egdJUqBVy8QRWbWCHM58Rz4vbuHmAAAeSXvXT9KkChEyPnfLYFqDyyvr4HQpYgke2",
  "key22": "4NQdjpekCbPGeLXdn1CdtfgPJjKgGe5tNN356BWZG4Zaeb9SPQgoEjfW5G69qTNbJxR8hCp3kySMXyRpqQVjbFhc",
  "key23": "2KAWCkGoU23xu4QyeyqH3GMovSztXbC3MUwLciMbjEGWYLVeeHJTk78WB24SyUQFgz921eCw32DdbCxxgjFEZEwC",
  "key24": "4Xxbhnj3YP9PNsxbwrTHqyw1UrfzawW3mUS2FK51q8W7aBHp5atUCKBUFKFLyJMKMMZh4VzyggeA51PkaQ6hNMm1",
  "key25": "5S2KdWZFP5NiSXXhR2WZBzNN8VV7szRAdtJGwnVrDPNtneb6B1B4A36b8HjbdLibFHeXBgkN8Ed84BpFxzSQDLcj",
  "key26": "63HExGxTC3uGWtpGbDLhe6Kq78b5WGTXQ7n9xRPe7p1zvdCbrLzyUhuz2ACuBGXwtNDTtkvJGK1vVcDynvJ7Kfxz",
  "key27": "2U9B4QNqc7cmnUYtsaPH18dv6HAayE3AtTCBp8bAtNVAcmUcYGFZHHkGc6kJZb6E19bKRTeiSasJLZGAQgqNH6si",
  "key28": "2Xh4kHL5Z1fJ5KTfk7nDiqpPpFtwSV9zvXKZoF4PP2qqyRdzmTUW35GVquFamKjbwjCEtRS9DwanMk9MmskSFD4H",
  "key29": "GsNfrtZ1RSbJBLYEUWfvmyo1ym6vZn2RkKLpky88XaWsZLjXfWYYezbFcGNGKX8J8rRRceLNL1E65fzxGLCrAQN",
  "key30": "2c2s8athJ53bpXUdJvgYnS9Fa2FPzi8iL5yJrh36S4mr59F1hGpAU1B25o9sCNiyAtEuKeszgBu1UG1p4zoaXJjV",
  "key31": "g1TczaJrPoDobonw2hLkYuoasHnkAirYjx4iaRJ8wyHfTTR9REea4e6WPnW5UziwCheTCrj9rHMZfymB4r2wL97",
  "key32": "4tZbt6D8k9hAQZymyDuVWyqbF3FocNTNYQLiN2HWfosSLBEZ1NUErf4XEHSZH6BijMVdbs5EyZYjr5AmyR6KziLS",
  "key33": "5GQrDKycr1vrHS6etHEXT5N17ntxDPZysqrGXwNHpBr3UGGgsw6BGReG1uMkkisLHhEcjv4CHTMpYf9Dt4jPMgfj",
  "key34": "5bxoNy9maXMcvpoctTXLcAKkrkV5zfmyjFx8te8U3HjQ1Bopd52UfnUgE9WneAF4AetdYuhtTADq7memvUm7pxaN",
  "key35": "yHTRSGYAuLHUyDUQ7zWEvXWi26eVf6CF98zskXLKJmptYsDAFA2WDmhY9A1Wieh1GGxWFB33UJ6qWEZPsM1xN2a",
  "key36": "254N5VTEN2KUBiRVNhqXpqdZ4v1FgBmU8uBMCyjbfmVWjF7NFSJkNBFivFMW79oVAfPYxK7f7kgKKiNWXPxSxziK",
  "key37": "5XMr21JbkRfVYwqFh31GE8fvDYCP6GpZstp8EogDkbvesg5y5ih74XhPkvPZrkyPDZfZDEZGmN6NF5U2vAXJmT8p",
  "key38": "3gdQw5zwAQPpy6wTut6k279f6MxoRwHWP1ZYjn4ZRYaUJsSiejqVGL6HXsijDjKwWDAZib9DCR4PfMdJ2nQVqf1Y",
  "key39": "4LgrcUWxrvLD8zHhsGkkkGswqpLTmNkpquLTHruHR7HV1UpNowPr92redwhaJ7puhWXCL5TWW3yikVa6ZLbg9PeU",
  "key40": "3hT2Px7PtVtx56emy1HcxitngKx1XWaf8873k2mo1EifeypNDq1ExUzsweYi6is2hPotLcTYHFTqWAABzTu4RWbd",
  "key41": "5A3K3TdEt4AUi1EDfEyGmAmoFussrFtssfokiYbkVvWWjvy959gDL7pueh5Dct3e1U4LqVx7SjN2We59LL3LdRSw",
  "key42": "2BDQYFzQJsVECHD5qYwnEBRHLmX7mPDwVVeQEQjxGrPv5uc76iCLsoAX7QSqAHZ5xNVmQMDRWXhJUUsFWMc6ysbA",
  "key43": "4C2JRxQGZJ4PCvDZWEunT4z5AHxNnqwepTMh4gSo84J2neu46bWG4BrSJb7xjVGWfTGKBANwghmBPuTYx8LRNDcU",
  "key44": "4D5prKGZYd63oXZ9hrVCH72rS9N9HWnsWKx1PtqVSAueZc1GmRCya7GYWKP1W9waeMu7KfhrTseww7tiMrSrDqj7",
  "key45": "3z73TZx7UgzxhtqvB1DXb8SQJ5qs8ipzCL6RPYZM7pbyFRXMXjkstV54usL2GTUCEN8FxXYaf3T4tJRTpxSash8N",
  "key46": "3ba2Fpxw3RbRSf4YwLT8FHfFyWUGBe7pQSGJvoKqhv7oANFgMovLdj2QPqMh93CfZbMKbkcDSyKn6Wz5Dwpjf4ew",
  "key47": "YTqavwxHEFs7UDaeark2dS7f3iHcF6Y2ctuf5Ag6sjc8CKb4LpHAYfu9jCKMiJBT77s3VPUE8k57nqD2oDEiSg2",
  "key48": "2ZUEcBbsXywh6xbWfekakbijF3bNrScFGpFy9ngPLLbKis7K5aQgKs15DYfRXZC8fUFNDQe2WeYqhd8k4qBbDuWF",
  "key49": "2zeCrV1kkCz5SdPRanzD84m5zYghtFCHqoV22T4vTbzQMWmDRSftvHk1Q67CgXwwnfgVwb7hxvLsiwLKvUBU2CHh"
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
