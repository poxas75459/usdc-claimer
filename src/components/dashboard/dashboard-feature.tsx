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
    "4PD5ebjLAsYKibPbb4cA9pYcoHDYBaRe3JHgKVFC87erfbChEwtBudkHRB32Sip5FTGrVPEMxt965WW859WgoTCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2drp5XAj17HGsJ3tVQSUQagBMj49tpPKf7tdU21m4g5KSDMnayy3tGBFJtVNsMoMrdBTmayUS5vcJs5zvyzeZGaC",
  "key1": "5iMotawkvuZUaSBJdnGUX9pFjEyx7TBE9bwMhTdqTPCM5Uu5C2HWuNECwpqtmvx1NskjsitceNYRrb1q3Gxs5V3H",
  "key2": "4mKLVv91EwQsAo9RKaYywSdFgdqmMY7bBrNAqYjNSiCw5RNjb55drCHVUyyZD8ijMHf4vyuQcjk185YZLgNmLDxJ",
  "key3": "5pahNujzXxFDtmHyPTFq5ntRgz1pkDGoxibxiFb6GNjce1AXGqx3bUTHSMfNWxNPLW6tudivmJX5vGKSPoFcmxHd",
  "key4": "5vpC5ZiDMJwvCvikdyDs7kNRxvr53AgbHBAZWpxpT8QoA5VM6iTcBUcRh1fFpeS4HzMZhDemaq4mXTY3JtcjrM1S",
  "key5": "4kCBcvivmyNXCeaPoJNqshX9wvxxw4ZFs9runeWXBVmVxy95m2NC2H97GbbAvpRgoGD3cVbn5gz5rAykP5ynQPVu",
  "key6": "5LrCi2vuFuKZ9iAEc6n8SaVKYEtiESJWXvqKbWkFfJhXukTXurMaoN33Ja6qP2HDjinR9eQeJiRoZCkV7tpBPYcg",
  "key7": "5FHkKJ9SRmqvvydYe3tUWB7GckyergmNf4iwoFCEh9vmpFpDnjA1DoN62AD6dgfr8HkRGwy2dAcgNT4ZFr1eZTwZ",
  "key8": "61ch8iB5qxCDykSmRucf4e49NM8R4YkK59jpiYjqZUmcsJ3TeH26KWQwCJNPQK7P1HNFuBNrhWjioRwGikLN9rmG",
  "key9": "4xDTSq2Ct7oNYoxDCj4PMhmbG45v1LuWMVyRfo66JYyvUdycEC27245qJMXuHhB4qbLRcLwaMwCJz1A4HAe2k3q7",
  "key10": "2S1bHe7wx3FhnG9K5tnq4nb5HFYJTe6m75U7TLkpmeXCfRqPbR9Vb3ey5NUobkQU13Divfqo7FCR8pVFT3NWAUJz",
  "key11": "53PCF7Gk7qDK415VJVZrE9hFQNUzp1TGwQfFYEntewLk5EoBMZf25D8xvYUV6xnMquaYBRZxCdiBeDbMbPqXqpLq",
  "key12": "4uFyPhjAqhxvYLaBMuNxKRK662urWPmhDZ6MVqcC9ay5ZRiwMxbcP4RBBjBtK9fuegh4LXv5QyYRxfUhmqS9qsQf",
  "key13": "5pdivzPNTbXpac3R2JymYJj1iEYDc9Q2uqrsyBjMiruWaDCHZbqVCNtC3aMMz5Da3RaNoqJJqgsvwCbXBJ33L2kA",
  "key14": "5BEtTEN5bUHiXnBhqEd2MqDsmMzKrT8GMXFJmUNarZPCwsELH43ecaS8Fq58wqVh5KNjE7KwDPaeyPKixkhcCh7j",
  "key15": "5xs33wq8eisovC1wTzy8VHr2Em9XyanV1Z2imMrbbA7dbZ4ejA2cmLCxjMY4xsnEf6DQbtjW4FLhf2W4WdVhuzay",
  "key16": "PqLaC3EuxXkLkdjGpktXpdXNyb3CWUYGHRqzD39sRJzWhUJV8qVgDPEyQGKwLn7moXoQJBovTkCqyZPCedQCLyu",
  "key17": "cheBbb8UaaYEifDvoDQCoxFrxuMtjQLTwBSXac9rNKMe11uapFd4pikHP5eFz8HQRcwZkZUBuVd9QcW3SQa6C6R",
  "key18": "5SGZqLjbDsMwXiPi9tYRpBRfPtiexLAEsQGXBUD37GAheMfb2WMHWXGcgbKSXpKf8d3L15YpLJUHb4ARsbX49HXD",
  "key19": "5gDKVNMTYUN6vKnzeu8Ftwh3YFPLXA3LeBmJncUgzDYnjqavYAWdRnEhAquMiUHKmwxQdAudMhNPkyKpzyGP7Mh8",
  "key20": "5MgLHueCQhGddFoaNWRpXTGon5cXu6ve2a3EWatuMaMrGHNxqQSpWp2QNHeKSEP5MHiJsk1H5JcmAXFU3EqQco1x",
  "key21": "yrHKERRCFYRF5TjDiHcYkoqWmRywCRzzxMhoSfVoeYf2pR2T3SURNK5DPicZPZUoZa5UPEGpFJQN5EVibAFjAys",
  "key22": "oPHukGJDDWFy119f5mD2ucx2AsFWPtCTKYgcywRc1Pk8L436pAXFFXNESCJFxAWmnUPUmWo3QqMuPs7y2uXRY73",
  "key23": "RNGZXhg23YkrFMXdsrMLk4jmqBKCdneh4QdxB1YE3cqbEvfBKCxZehaZJpZviM94MRXenKwCDcFA5fwmBj7g5Ny",
  "key24": "128mvFLYoUGzTY8BY7hSDCzzruhGAugk9bhyS8XAbeKBd6awXU2SeZP5xeyPQq6QvN7GBunPkDx4nx2Go4PL3R3g",
  "key25": "45JYTEcf6uhk1pMt2k6M3YpyuTWDHsJD3yk4Q296hFRoZmYAXWEQAudBas64F3fRUznUNmHycTyifQ3EtJbmzm4b",
  "key26": "5p1oWHmVZYCNxPQV5GmmW5hYWGa9CRzmJbDpSmD98N9YuwkcJCD23Uyqo4mDgYVux48zrFR5gNQjjUjuQ91P2rN3",
  "key27": "2oQzsRmHx868hgtJCGhPET9ccHessMrjaFxZHyyABFsxdfwyh3ZaHwHh7Zs6Vun2EbU4NnKNTMq3vNU8PBjRmWx1",
  "key28": "2giEi6Q8isyEZw8p4ZjWNTeCKv47iAz24UP2Ro212rm3o6fqhtAeBzF9UkDb2MvPcRQFYk3HyzZ5P2Pe58dJoduk",
  "key29": "5UbQGnGosYADDdvfEmVCoaDGGbosFzjDBF7V4GKhyoAnbVcTCS1doVr2QEu7sUJWpvR8B5sRq5wrVWV9vb5XVJKD",
  "key30": "2NtYkXFuv7EGcWELzBGcPLB56YZ1D9if5EqetNyRyhpKeMGQX3V66eQz8TnebXzKonrtT79vg5D2Gn7VzRjXZF5m",
  "key31": "PbRyqC54rC7gAwpP892YGKGbcvkEqKL7PETrCRb1y8na5NDpEHmWyM8W7xDJymKhcYj1DRXjJWVs9PdFRWZP47S",
  "key32": "4wCpqYxahngH22rqjeUx8hDiKnoGThbzPPUpPMpUc9cYETxfUNMfoxFU4pEoRkeZdDKBGZDCWSWTBShvofojnuYr",
  "key33": "2eCGgxGEpTHLsZ6CbfoSDvPggECYBDtSHHjpuBpif66h9RwKB2bBc59DgxbBACY8uvpiu8AbytBdhkqV6w2hC2KL",
  "key34": "kAYpSYhHDJznem4xGWsLeyriUKK3kA76WKfkgkx1xdTxycocRpXGgaGjRdCVLXdpMGsvPefBbPmLS57PdanEmg9",
  "key35": "4CRK8dpZ1ipjXt9UxG32doCSvgHWcCViRE1P7C5uTMukUigMTf1Z4akcCDLttQn9EYYqjxd3vuCuuaJjiFzFB5qn",
  "key36": "4XtHqNRFzRfLsinGJ2dAyqAHvHvpwt7o8FCgy1a1izBhjg1bnwd84oMFvau3KRQzsxTTGgiXKHgP5qrbumre4wYp",
  "key37": "2F6VvRLHrAdmNjHHTUNk86j5WxwdRVRdHgDZWfUbtU5v2NMpi9Gc9pNgQZXA82msNcrGYZftwMQxXHRRHY9WuEqH",
  "key38": "5pqoXcSDgvLw4BjYcaAwD1vjak38Cuqnck3mdFrPKEKWv1tFDYbmhrxyx5nNemJxgKh3ph7ANFu3DocWoahna6Y5",
  "key39": "4fwFzLdmFbGygELwGAGvst44YikWkq2QxZwerE5WzMXYg5EC8tL8cUyEuiZ6usDCtBou7WtuomgNny1gjmmFFxaF",
  "key40": "k92jHM7aa9h8PWcbALrcXCae43bMwzH3CrAZRQMZ6SPU5q96C4yNtTZEsgv7bhjVoUQs8pnUm9GYGQdEM5AkxPV",
  "key41": "3xNyAcrT6vkHfNW316P78UwASHhUVa59RfrDgvGciuRKXxsfja6Agquaj9sP1Te7QgE1fzGHfVhY8g72QBTPYBp3",
  "key42": "57nqdChnm9z1LcxcuSJmjaTaRRionnbwnUzJCwzcUiQbtcpHosPF7FYjQHA4EHPmBZKJ4yLtw1TjTz9L9QfNsWDE",
  "key43": "53YW9ERoCh4ifW9yi5SNxzjReKqq9CaEa5rLMJ4t6cn4K5FsBwuj8yKQUQPaCMsg6ekmVmSj21J4MAnmKxqSMeNW",
  "key44": "3S1ocsX3LsxmWTNNLLPJaC5Hg2ECoDZZRkYEnD8m76XmSJzA67pwNZcG69tjSvpDwocLQBmoJgczjh9uTopC9vvS",
  "key45": "5CbQhVZ9f47F7Jis49WpcQdWcNCRisMVPJRXXQ2712sdRZmuZtKXLGmPhhnV1aidcPFJT9auHcgfdtbCxUBMXkt3"
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
