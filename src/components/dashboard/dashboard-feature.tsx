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
    "4RNnCBFtqEZgJoqUZfVJhcjURok1ACuLCjS6TXpYkokZEV6iqDUiHRHonGvs3jMGo4VEyK9NrS5AWGp2Kq4veW1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dBdntMHuTr7S1FrPhUbJmEJAXwMwH3eaYbZd1YQ3x1AS7wYre8ttu1aN7WgnQYTbQWDtp1LQGkHamawCUPVSJES",
  "key1": "5Zx5fKLEt35GEetEBzQjtgwqj9zhKepfMFzned2Fk65DTqek3Emj9o45dya4yd4QPeAde6HfhqrzCQFP7o927igr",
  "key2": "mrrHu7haUkck28XZ4Urs9MLLcwBsGAVzbyuqVuKjRzgbMipUDnSkqdpKmeGnQuLy1Wngyv2ihUGB6xxBPVr8avM",
  "key3": "iSVm5FLdWvi95CW8Nm78m8adHxBQCDrTNc4PebyLzZwDwzcY2Vv32hFzg1wWowD35jnujKrAYypiA7Udf6kwqLK",
  "key4": "D1KvQ3KZop4LGXYrQEpDRvt5oQN3vi5jgZU9LFu5BLM2FugHDQp5ykgyBrMQ14Lcux5Vz92gi9VHxwENRkmBTZF",
  "key5": "4hVX5Bu88aaCRkuCP2rszrYJFiR26SB91e4oRDmoHYhXifyDHTw5bthq3dxLXFpbbEyXin4DRByspnvbAXxuFsiD",
  "key6": "2DkzRA5WAWA2TbngZMt8scnv5QMG8a3Kaum2Thx3qPTwdwSTMsgmG6YkAqT5dV1NxpYV8y64VmeQV2MmRH9bXhDK",
  "key7": "5Ci3byGCfbTDK2k8hi5TkQddRE8dhJTbxrJeKfmFRN49tz4oeDXp6hMraLWyeFN8KuiamR8vew5SgtKYu4ET9o5d",
  "key8": "5EY5fRjL1fn4xuon4JuVugJr2XYAfLyq1DaGLC3Le2QebHsduwLUsJ1xHEe8TLyn1jNSEY5C5Q6SX9WyoTSJx5ab",
  "key9": "5ZxPPWGUBCBtAu3pdTyMV7xsWiKjUHg2nhLQFzExiS937mX6cS6RwaGCiiCg9krewCyzGR62peGyu9APdBJjJRVb",
  "key10": "3s1t1Ek4AHaYvwk1QsD8mXVtPnmL1tFSiCUEmiB1bX8cccx45cmTRh7pZsFnyQ4yrtMEPZpQfgoCtkmMuNDfmbYx",
  "key11": "4gH7wAguoAp2KHBUNsty31RwZ8mg6DHhqmjeF98oohD8Z3v82rWtXv4wrBUvjA8m8twgophzfkXx2VLUQDEnjMdW",
  "key12": "3GVCQKkdx7HkwwbC26asJc5YTuReqXSoCXtdH3v2ht5nxa21WeVrrgDeY2BbnnK1NwFDFMa37czaoNQYPTez8Q8z",
  "key13": "5s1oCiJFv3BuSXCiJbMyc1Gvn9kZacXWQd5Xh1jEwKSLDig7wxiZjuGLNicUFgsbJJVSAFim7HVQ6x55jfWwY367",
  "key14": "oeX7Rn5ysMioyyQHtzNdi4NQF9uj55rAhbv1rtLKfT6mrRsrnxzxFFWB53cL1jMVpHMTbNQutKowG4Dasz6NXMK",
  "key15": "zCUS2uGZfJSgbSUpRsoVocj8ShzajHx5CeAW4zxPB1yPz5Q6Us1PUtXzotWNJhUxiFwBA6cvmALcb3Ut1YEKKCv",
  "key16": "UfG1Ky1yc3cL3K433nF2GTa4TgjGdpmL2NWxsPprbkneRihrfgzJCaLcsKW5vmydjG2Ndq92KeBm46XfqAFS6Nz",
  "key17": "5rfh3UjGLmoGyNCDFLTaR3KjTk22kSLbAQrXUcfWvGHnrojtQEmDtfNbjVuYdKndq6N6sVBUGchehwEdA7zP3DM9",
  "key18": "2ScNoWrNG1JqZCiGjxsefA4GN77XzpaLBXqxP7yuZDiDotfLVzoZMd7XXzHzFX5TGcPW9yL8M74KSnB5WVUwF2yC",
  "key19": "5ma3QgDbQXSz1H5SJcWeTqPRUVdCPahkQvyJyfFacLfmmxM5XiMdP7zHjzRL8Ku44U6SuyYxANUZcd3fpcyzpz1c",
  "key20": "49yQ6keC7GX3oV9Uh7Mpk4Kj8AieggX3mLxapHjPiDqLzpECi7ALaaswNe2YZXJehdYhocK2z1LTgzvg9Dajejc5",
  "key21": "X1eKbk1toVL3qFUQqne2bufZTyjaELvQnHLFrKcxt2HruSvhSf584Y9Qqs6mxMgyVJiBnPXrBARRTUYvdUVTs6a",
  "key22": "3a655Z7WSaymUre3GUrFYggSMqkx5nyTFy98qsiaK2fC9HUUVTyeBHLCrKVFcYHSWPbUVzQ7YSo4qUvwhXUsZXf",
  "key23": "4gSw7VTBbMjofd1p5Wovpz9P8A3EAfNo8ebwXtSsEYzXuvf321hryg79MFwXxYihUFXqtDkGPXtD8puWcxe1oEJB",
  "key24": "3akkZg23zhCyJHSUD9ukf4pfjV6oCCi6aoYUeXaNE6udK2Ke5jBGh3piv9VmQpZfaB3Rg77G9A3MeJrwgw6evCP",
  "key25": "4n7txwxhEfsXegt5yA6xuZd4vMJpoELWbJ27nXE7C1NurRVnquLELFrvxGoQ6YkKdLABgoeTQzDjw8fPJFVUeX9o",
  "key26": "5B4YHHxtjZeaUsSJNBZ4Np6Gc65fK9F4Em5NiDdpstQ1CGnHdn7U9Wt32UZAcHDbw454xHsnUSkRhKHFW37Q96yr",
  "key27": "K2hcwKgftcHRHBHWD1FV6rjPmzaUeobayqHb8AVGjtVDPCG6DnHnKvNJRhbTLJwg3WdJDfTqB66xgXtx4QvNRXc",
  "key28": "4wgQjfze95png11ZU1shLhpei2wTo8L16kT9Dp3po1LsCWg4SvSCSJNbshXrPKSHMxX8RjP7Kq8zaWZzj2aHxG1Z",
  "key29": "41y8WGWXgtvz5W9HxbTftooQyyRmdGxEwXY9qc6U2zXrst9YBMJwor6qsyQKtD771Q4CJTordu9yQaCTnQDq7djY",
  "key30": "4EWPgLkotTkhXtnPihyJeRzximGgQrsyjMdw2T6GLWDF6m2xQJdxPDf6vsCRwtZ2HStUXa1QSJiagfx6EitCMQZ9"
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
