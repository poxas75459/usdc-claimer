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
    "5k3zWy3VopDR4YbA1ZoVUQNuqndFKvQnCHm9RByiHwT93TGANGuVwf1B8Yut2RdFZJmxncc45tnQTQ4pABQrVruh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E8NSThSyA8RxZ8qcj3vjtMKydUBecRU2eVMFca6ASj4bkbJJyvqsWrJB4jgHAxbiTRdySgi372nMhneLVzcXua8",
  "key1": "368s4aFd5JwfCBtE9Y9mavKgqS7VtBQCosrgnJEw4RgqB4XYnYZyofDxzUjSCHCxEzQ2DDM59usE7vJT66DHX8hC",
  "key2": "KgggoQD6fqHMmtmsh6LBGHPvjieqb4LanBBKWzJwtn64pbD1t9XYi7iz8bVioLBMxXmwSgdP4CB5uf8C5ZvJMU7",
  "key3": "53mGmDz7MWzXUYzeKFTJhWvbjhSKSyekPEquT8z9oiFs7L66eCUgo15eGzb45pARjm4QQP1seU2zrUXWgEgsdwgg",
  "key4": "22C11cJSUQBwHVb841rkdqVEP6Xc6xw3rXa53aACA8Z8rB6Ta1okABKteWQM7ZvMVBAMDh33UZD4QFeNxTFXqzdk",
  "key5": "ejW1F8Vd4vrBPmy4riQuwaRjGhC3vdv1Zvs6GhkFzcZa3KufY6TZPpSL2peKwbCBeAGmymGJorv3sHRd4yZkLt6",
  "key6": "WyvnP9RDCMWnRenu1AB3nkoCQyhSiNpyqiYpCWpb4tPJLBHCRgWZfNj3bX7H2Ag82MxDtyWyLU9wZwwJ78g5QGk",
  "key7": "37bPbTFVZnHa1iejzXCSb6TVVSfs9SMqTiL2WCJ9fE3XcMiM2A4mCPnrsJucAgkbgh8NohCs8WrSwGMyvqYVx1ry",
  "key8": "5u4ToQ1qS3kigzPTv7o6D7v7zSPpxfjVJB2LRHvaxov1J998h6H36bBW1HPChXADjFyyiMZdFgymxJtf51Nk3v4a",
  "key9": "2eYuRtQZ4wPNE3D29N8bkW56PnxUREyfSD9k3TuW1pgY2vgZgiXodeRy9UsigpQF8HkCv5YrZ5AhC2HZBvHngfnF",
  "key10": "2Fg4K7zvXnG45ePVGfPCDmMZft4fUUD87SBjoU2cAPNAowj6vatXoSKNstGiXmCj9aAS62Qpo1vwLNSvPSsegW1b",
  "key11": "XUNoG6mcE4DyNqLUamf7DeqzneuyKv3RwfWHFvnrcU4CZqLGB8hwyZqupWVu1rdE41exHCkAZsHnVCQZNM8MM1S",
  "key12": "3HZiFw6NHSrWj1SWVo372finPR2Jiymi8v5yfcEz72rKLNwtKfpEVFEoFX2ctxx7rKMJR9EdpdUQPNJgoNrpn2zx",
  "key13": "5UNQcDnUaGjUvPCWPwkCTuYDC6awE3JN5FjSGBRwe7v3Leeu7NW8AKm8vUFy3qMvpwZw1Ee94R2wuTCLu5EdGJym",
  "key14": "2xnsRFFjTtnwCw2Q96NYQDBbCcSG9SDmMED3gSRu5DwaTQqXBFU2zR5zVPXB18imWnwCygbc4HTufVjfUrffrdt9",
  "key15": "2aEMLjPrjinuQMygHSBWpcucnqDMdKyujUGjZtCqZdGPYA1xTkLWxLZFXfGQgwNHhNYTvSuyEYyE5xtwg48W9X1S",
  "key16": "31aikV3CTHwBpZcxw6rS6Z52t9rjg2CHFrAhKYNFRKJa6nqYRzzocXDsfCYWKiS1oVJGaovxDBDSM4EvcbsLiE5X",
  "key17": "4w5evLmfJKv2kGrZgLZevQ7HaiCpN3tSP7srhqLDfgKxtDH5jNH9ynmEysepfgFubvkAiGxnr7wCCaYjRmMZqVdc",
  "key18": "jUtNatBbJuQBjgcpTvFxcbHUemkPQzTZhEdtoe3aLVji796o1W7tA5uTE7Bb71F5ZHH1Ecw4FA25JxsmV5Ekoc5",
  "key19": "5EyJxSfFdkkWg8Bp6KQJVKrR92wZFeztoAtwT5jS9zDs5QueQs6a1r3bqUYM1ghGCuYsx6Vk3krBgz35J1R9Fh9i",
  "key20": "3yJ5WauQCXyoo7HYVv2m3m9oRMuKyRS5U5ByJ1J8P5V8XkazZeWmgbihSsBe5Cgf9WTd846jBTp5PTpaiFwKPZyN",
  "key21": "5fxTmTqYpCNYchFNvSmM4m54oSQWiMT2SQgQvzrSM3QsAF8hDT4C1DAUBMgrZ5Ey9mMXKpUVz85X9uiVQnYvQBvu",
  "key22": "5NGR9GA5Rd1ds9VMR162JB9bDLsDUoasEHzWHWTh1RrAG2ACehPqKs39BbFJXBr3cP4TsGV83mXWfUrphJerDeQn",
  "key23": "2xdkMk7t8n9J1MLwa3nBFy615pEjHYBQrcnjDkzdZ27iMnxMRQGwtppTBUPNGqVRRdno2n5hMa8bLz8jsq4RPMgQ",
  "key24": "3kMpnFzjbQKLvK5vrWBHsgnmt131h3kF15n74eZYhWpvBfcEyGjd9SH3pRJ7Hnve3JMZnxsyLAS59smQeSeePCTf",
  "key25": "5MowVxyw2BbK4ZQYrrv2jps9A7Gq8qG4owG79kygUXMks1quqQpV1x1uarsJRjc5c7Ptgywb23xdKNvCEkhxDGdg",
  "key26": "51mws3GpMcCQBTYsnb8J3xu5Sojde75TmiAKtpPUN1EQFBGYButgFbSZ2wQ4rJ2aRKWN7CL6qAZ89cg3yenJiAgw",
  "key27": "4eSEj8RSWtXvYBgAQk3gFbJ7raFXihG17XBxQzaLkRacmJHhHP2KWmfWzVRaoGoRhPzF6mAiHbPxwLednfXmeTfr",
  "key28": "A5ZuYiqT9Kkt3z5BYQQun2UsmRaWVyusV3pNZDLcSRbcQSM3jBPtxgE6pCmjhTKtgmrzkxoYEsdix3BREB4cDR5",
  "key29": "5DNxamJRfJJnG5mQix9MJyDhB63eBYS4G33sBcSDZu5dDP7PiEMNHT8ryZzzua941WemoPxhXq58H5RW91Hgr75p",
  "key30": "4wJ8nnt3T8DZ8KsoQ2HoQudRBgv4yKnAJWbXHJyFMo4pWBKaJN5R2po8pftLvkCudENqt8bpVnNDYct64YS97Uwo",
  "key31": "4UcYBAcFP9faE2GczpYWVRYTReZwfeq8EDGhJuMxGxTpF2rTdrRr3qfXb2SEzg5tdgDk4rgSpySeDQGmrXDkUwUq",
  "key32": "tYboMXqiupLrzwHLWsxjypTKkGF5UUj8sjwjENiTX78WjxrgF6uhJe6EHbiAqwGxHLzW599RqdXmvk5Utou9EXo",
  "key33": "2VQdy14n7berEs6qS2odpc5qjdwCtJRkhgpYe1NoGgHMMvWEytAvYjqsyppoakWmjotGrrS1rt9FAcWFRm1PAwNG",
  "key34": "bUp15KdQxVQ1bFYjhqdrAksAyt1KXiPPD15nw5fdQPDb8nLGtqxcrn3V5mY2Ns1yce9Ugsd6jEG2QFFTFZ7j6rH",
  "key35": "FrY5J9LCsbTQdkQNqAhLdgvqPMwj5TMe7pxi4QMYa8c1T4Ndv5UAu6G5KBdngJmjma6Jy9u5Eg2KRasjgACq2kE",
  "key36": "3pDUc2om89XyY6sTHRs52TuHpjyDmu3gUQzeRgZVLokBWaxPn2b2rotXPwXisYwm3R4YU9MuvHCJoiSzTkC1yyvW",
  "key37": "WY6xzuCa4z3oBMmj1MpYR1AG5nPq5Xc4ADoVUZBMUxiyBf5TcKTMM8WJdAKLzjC7V868D1x7WyXx4nscJi8cWfK",
  "key38": "W2ochyLvWXsKMRAACBX4cPKjNq4VS8WG13RiNcPXVP8CCUDxBDEzbLV7PFMpGqsRqZpWdLWHpCWH2p1iK3BFCtX",
  "key39": "31JyEvP9fZ7x12924GukwVTA8MMzSmFUC5kf2iLaQocYRg5evqLdNCprH9vtJsXR5iWy7aJAyPNpJr4Bw8tX5mkA",
  "key40": "44iobsRckAALaCEu9BEyxkuVkGJTPAvobm6wGHrTnSVyW7yqBApnXMkAd7mRDHEL9c9tFLbatRRv8tFNdEf4FbCe",
  "key41": "2wnZUVXLTYA7wpBPWahZqEVc4p84ym4kXm3s39iyZhV46HNBuXXEqw8ccPcDcWcwfbu7hLTdqzBuZncymKZASo5u",
  "key42": "RBqrodGwF7fzZzikBDnvR7wgQ7W7Yg6vnA9srvy14buzW6Qs7aYQpia85vgxP7yikUxh9VLh83itR4WMMw5x9UN",
  "key43": "5BkboczGRoHHF2Mdrry9NQNjSPegpDRgt6pYZcNqoqzWtHcENHMtJnPzzGw364GuZkc1Kegr9AprXiBzet5W9Auc",
  "key44": "2PPDysUXXNW2RuvZmUzZLGFNRn94qV2VJcXh2VKDoDU7ar1aseyaQGmjPCbCdWkrToUQErmtkM1F8eQn3Hrb2Q5z"
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
