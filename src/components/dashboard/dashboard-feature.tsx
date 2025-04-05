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
    "kmjdsneYZv8vwup95mmGLH5NceYfxQxEnceRNJTqHXcFwQHuv1GTMfdEGnwGnnkP2xXAoDrWj4f5HP3MbBT12gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QQ3kgDjLbrnyJddLRk1Z5uj3oYMADHb3RteMCAyuago3p1CNZoX9S6JzHSeVRvi6kqWh1UgnFR62KWQh98kWgY",
  "key1": "4pmi5x5BGmt4t7WaBX6XyEQMNnRLejvgi6HpQrC3p3Qh5A7LESSA38xr7LHYVS5A4RDLY3fnwgNyAJmTfsXepbCk",
  "key2": "5fShoXBKfSCs8ttgAV55quDpzHenEMGz91cLv65FtafRMXqn4QWWDTVDg6v8GpoEZsVPPVZepu1puY4dNo9RPrhy",
  "key3": "5SZbr2ra8yFPhvgpNHwHosBnnpZSzhXJDuwt4U1Q9r42yHyWmhvpjvXi9fGDcsmi9qxj2cfGMjKudxde8Nz1PWMC",
  "key4": "3xAxMWPGuRtWeYST3vCybL2QnfigwNX8CemiCJ3nJgMH7cbYrULt8mn5FTubBPQkjocEysW8jgLvdjDJZETyxB7p",
  "key5": "3StjR3FUbGLnG7NQ8nShE59La5QPBmu52foX5ZHtGCWDTmydFanemxFSNV2Ei8dV5dd8xGCLppi86mhsQcWNc2qS",
  "key6": "3ejGEAHM2Q3D9JfpWFN5x83vRfiqbZEJ6QM9RsKAFp7AMHWSHCee6hMSymDMuYcRRZno4yXy6WkRBSdwUKcQPFcx",
  "key7": "4baq25J2aWDMK2dCyc2aRN5sxQzAVu9HChvi1XTZ1njfPmgVMMGFrsJip9Ur7bt7BacY5xbjePxAmugFvZ8JevSt",
  "key8": "4wQeUPXyd8TuD4PDLyUooX4enxbiMsBVbBDLNu5uWb7Ai67SYUa5mAzUHry8ueaRhRDa7z71USwXfZvQ6CuKzK7G",
  "key9": "3dE3GEj7dNNHo6XJFjBCCxSw1pSYR1SZYzZgQqRrZfTS3nTD1cZYh2DWRwauUzwjsM9RgwBfKc2WBteGfchrj7eE",
  "key10": "4EZrmNEGsjZe2HT7xpDTnnnNZNJphX8ngAXyBg5DimCTe7MEyJLYPqVhCGpSeu1Cvkrt29MtE2pAFfagz19Y5sks",
  "key11": "5kbb7jXPdujzdrgY7nC2u8nAyuRQYv9U7BMiDu6amnXWaiZHxUg6aW3Reo9PEmm9noBv9HPuN2EB5CoJ1KkUL2Lv",
  "key12": "4cpM1k6rETFmTY24w4SgZGTJ4A4BM8oNuRRvsfSnCW2cR9FZLEm3sdWi84Eh4TUYnYjKffFdpQAXrMHT2CyFRzcD",
  "key13": "5fPAsEcuX3GTm6tBU5FRBYSD1mFNyJge3Qjnc1LwNVPE93fTwkS9tw2c1A5yBK2dnH3DewFTtjfg5abvZdvLcZu6",
  "key14": "2WcJxhcErpcBkPenATGPrrWcgoMrtNE5rtceb6NsAGSqPJcYmm7VbtwmNLztWWfxCzDNEfTNbHXvYFX14sBzr29U",
  "key15": "5vwGG2mewNgKXevBvf5TcsoHVJZW7DM7fZyubFnV5wyZWkdUgn4q3mjUuZ26fQzoEr4UDJgUJFsayWzfUndD9aeE",
  "key16": "3XcoDbkvhr5sXSvT9r7YNGJmNMqieTPsvRnVCaAxDwoe2fhSsReewf639zTkQZc3YjyCfxcvbrE2RzmwLGCuhH4i",
  "key17": "5t5xVQ5Bb1GW5crhg8PqFhVo3ecdyd5f1hJq8CdVMg8383Qpng41gGFxpFTHB8jrncvR4f2gcquxPBvdBteNv4cf",
  "key18": "5CAQFdRc8VdoBmGd3MBTzQ8zELDv5MjBVzb6KHL9X2eBTCFUnzWWeBGihmaPJSVKXS59rE8FaY2jyw6Zv77Jr3q1",
  "key19": "3xipCX3KTgrrg5sTKfFzH92y3zEo22JeyNmBAEUAFjZoz3TKUJwAtpXuibe76VdkN8B2K31URkrrfYm7RbPDJg82",
  "key20": "4E2QVcx71aQTVvZeow1U8FbWKMU3YrsCDYdaGP72RGN7ihrPhGiLnVZTj4aynbPoh1F2kNRKPxcytQZnstoJgVJG",
  "key21": "3XQ82Ys9scji9dNHeoNvdxbbBo6hbdzW9rySGik7gGC2846nJAwCjevJNEVo58myoJnZhqR7rJSU6CCUC6KhwuUj",
  "key22": "vGVSXWaTCPMFTnUBAfAYDfgBaEyTpWwJKhpyNVvCL8PtGK2CpJtoswTirpRhp5RQaB72Foz2RhbCRXkBs8NXYmH",
  "key23": "hGXbXyJ3By5GQpXhLUvd6Vxgn5ACGoqhWMKEQXjjakBdRqQGx5Ho5X5gPmHFWA2hJmvz8n7cxYQd9uk4t1UV9FJ",
  "key24": "y8vA9bLnq95zzhNL6hVzRK4yYF6ScHSCP9tx8JaU7SE3jNTFc19rFgcksCickeUnaTGA34fh2EZd4LWnVVRShKV",
  "key25": "5tRS7xGReEwmNVeGnrjWq1WPMJSLK3NEbLRuGkM51JqLiBcth9TLrCvvFUAaRWQZjNnShHWofdseeRy1REpiuY5B",
  "key26": "oYD6KsycQkKb8puoSbSWuvSiwy4smyqT4woCUphaRR8FxPMqrQkRmudT1n8kDrd3NMKazZNCLCFCM7iQ9FeoQiH",
  "key27": "5RLR4fTWVJrqsyy4DKfoQHNS2hTPFLZRqkStCwHHv58cgdmfL6uDX6wBmkAvyvmckaWPLetoq4XudL75DFqFUZCv",
  "key28": "4TQHEGCRi4EXJ2idpHf5e3TrAe2A8KBQuNeq73EytoKs7qQpYMSL2wH6rmdFEHQ5vG6vd35tzVrQ4KDZ3Xrp39sr",
  "key29": "2mTfGfxPH6wmUrE4m8d3itF4vcbV7SwrqLcskh5JsfFv1MHWr6VEDoQXiwBWPLNdGyU7U6D46rzVqWBeqEKamNBm",
  "key30": "5V3VVSqrM1LmN2cgGK6b13qeyZtQZdgVyuf9x8MQ3w7DD8d6NBr158vmC7UhVs1zsxTd25oRh2Mg8mHqcEevkhn7",
  "key31": "2wSoHh4nB7C528k7f7da2ArVHTiqxgNXinokFfoEaMKpfuNwVQQY3uWrzSCG2PCGppFyo6yJzzCS6LgcaMCcu7ae",
  "key32": "4ndUdVnicKXNq9es9fDXJa3dsAZ1J6NwBGb9Awmj6ki19GW1CiUvc77MaMr4fbvrLkLHR3sEzevsB4zA9T1hidsF",
  "key33": "5wesXQ6hhxCEdM3cEqFHQGrkdAeUgpwigUQ1uocZTjL4FJhJ6pU6H6tUEuLd4DynZm1RMnyvqT5VygteC19RBTnV",
  "key34": "3CDwACS9LCumyG7ydF3UkpTECEbtQsKJBbkSv1QGAcCwys2Dc4MqMNyVD2rHix2JZw7RuXau2nZVwrA96TteS6B5",
  "key35": "3gtvDoqpiW1hA6qHdKDwRqKB3awqNwQFNa1dz6gV2P9crzVjq7E2jwNCfk8QxhkqFM96MaVikRqKcnP6x52iSQBv",
  "key36": "5xRbVb63NRcpCfQ9ksizRAec1bFnaC9ysy3qLGTR5CcFXQXjBBaXi4e4V9LBUVqWiS7C6TtQEbG1ZK3f1Qu85UgG",
  "key37": "JzxwG7tcKdysFkq7oUdGm81xxASPTLBvYt4gGky8TXs24iJcdP6aNwRYQV6r1sod1ev6bMgn6JZMAw5gCMq2XcX",
  "key38": "267t4vXbARqD5duhos4kBwcZ8M2vVr4Q4kTRNz6JrdjkzZ5WDh1jw1WAkoL826nTLEmH8wbobu4XzB3RmMmSSoie",
  "key39": "5B6dtJPUhdhBZZNNFJcMUYzhPf6PGzA3j9AkMrsckBxeQb28zswLjfZb8uUMDWjoK3SSqzs3oYVwRE4foyMxv6WE",
  "key40": "ziYAJ2a7Fv3mF3L9ZVcwqK9meUVoV61nRY1MipUkE6hPTfUFNrDVneRA5jrqbr8Dgok6JvR1ZyDjpQv6xdB2kib",
  "key41": "3wVFqZeWL5MGkN7hiTnmDDXrQRdiEDUaqERFoUJg1PUp1F1ZEfSkP4RTP9yhwA34Wb6eqKyjryu7YuXRpx2kHFtQ",
  "key42": "4B3JuFaRNQ7zwrtAn6w3GUzdFsibCifJCq7DPiwAFeUXdqpk2y1t263TvGVnaixZFLAnn4S5bGgirEgy9JjEVf2U",
  "key43": "4pkAQPdstUMUQ4cC6B8cmWMHbdWB5K8LfgoWgyCTNDsLf4j9pLsqWPYKW6D2StetZGqi67fMV9FQUiaqP2HpsnFg",
  "key44": "5xw1u7hA4FxSB9YV1iGgsm2wfDSwL4f9zTjoWd3zMF1UY7f9UaCsMpUwyiY8D5yEwwoJH7EK4U46PjW2kmrtxupg",
  "key45": "4Sfc1NfJMY7GMy5DfXyZ3KCD1SV4Xd5hB33cehEo1LH3iB7uVESszdohBtZq55auQJ7RAxxKUcw5xryRUAfTkDx"
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
