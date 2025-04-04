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
    "2r1sfJRaPuJ92LwDTUR459vVgmByTwc2UFobRgp2CD3gbvMSNPgh71if3u5FUWjbkhHnjn2Sq6s5iv9aXcUdDd86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vt32MtDHpGmdWLxTrENHLmAidj8NS51hCXVvsVgXv5MqLBBPBvHU2LxneJDMwCEstNkk2bu2mJLi1NjPhCsgw7s",
  "key1": "2aQeap9ZYVgzZyZS1xKJHRVwiR2uPFcnkG7taosVFo2YsCZbBSehw7vGaMX3o6bXs7PmCswg7rAcGdWAtXz1JuoA",
  "key2": "29CLn9VmRVuZQzmMK9S47ArCkSyUcHCiCPVdXRfkePm11s3f4KxoDhATgBWtGPSGmuEGmENL4ZgTbaiu2LAvKhVq",
  "key3": "4yJFaCQhJuAaDXwqyDWZypfWhkx6LWbvRmFhhymbX6oiqESHTSAaqqK3FBa6hdjC7hHnX7Qa6bfBpUekV9CM4HDU",
  "key4": "4wJAq1gMjzAL22HzSaCEVp1Xyq2P1PbiqYbZCkeJwvLhCEm5SpYhW81qx8WccJ99r7MuDLCqH8hVjVNRBMkG6oM6",
  "key5": "322TPNE8z8oFhjmJ4p8kAhW6rmX3Fv6TsNPzmXYvH4xAnA4hNBKctWm9o98521hdLkuEH1DwQHQ3ijKYbUkT9Af7",
  "key6": "4csHbqBoesH9hhUp7PmohgAbWMYqKSDYZ5W5C76a2cmgZUu5LwTqEk74SXx5oAzHFuL8o1aEW5BHtN71VGikNZpt",
  "key7": "5BAKoTNPhk33LFTMFq2K8fpzbxgSd2Rpoca2BGaCJtZ7euQrxVzGtM9MPEU3V2bjb7tFJYhYNcUZ3TzorvoFVbNc",
  "key8": "mVSWqHqeEo1xgWzTCJmSwXsjrUimQ62yz5QUxvQ92S7dgj3Yy3GHhr6RYMtPFY99TpjniE65G1bKi4HqNcnS2Ea",
  "key9": "LxyJoQcXqMGae4cQapPL7biDd8eZfYihu2MtSuxWsHYj7n7YPRhk11xpE1it4Ep614GWiscFwTpBcC3dktwtCAh",
  "key10": "4LEFRFMRr4TzrzsDdcqbu7DKXPdMKuhywzU9y8ss5DDWLUtpeWtrngr9HrMVpCSkCtwS8g9DzrmRcegqbBqQhrCq",
  "key11": "2znMjx9uU6iVoWq3aWu9DZns8BPA1XNMpFaMjXFF3sdg6FWfekrNTZMQMDdL2BNL9PyAPq9rXvGKE2VPusoWndbw",
  "key12": "5XDuwJxANgYetf8SR9Nh7wqquz8yJmjqHjzjAwgiMs1UhZs4vwVJG3xsfCVd1gFaUyjaYsoJoPex1ArV5YnGDsra",
  "key13": "3tRQy2khy36GxH6cUGYBwYB68JW3Q5uGMaTemoPnXccsgJHqnN8X9cQ5xrBfenHGkKgFvMzLhjzAhuaDyPEyvzdX",
  "key14": "4KNwQqWAK2f8RUMr6PXMZLhKj3NXwym5FmEAKcWyECukhDJREa3YTdNwQ5cPKTeSeazPU2UetVGxRkkannKDYRWE",
  "key15": "46NTeM4kjwXb83jE8snfxnDF8TBZabPbno9AvnQkw63rpRsp53dCknamdnLvcxkbkbUKzt551Cwcr8Sq5cBPX4Qp",
  "key16": "3ozWDTDbViK6niTBZodFDBxc2oNFtdiUq5ikhuFPBFgQyU6cEymxjmgAw5gZt3stB2Kc8JrJNRbnbYmyqQ32EKmY",
  "key17": "4DnxDM3GbKDVsY84vKHQktARGxRy93cpT72Pn69xB6sTaj6RBTdwUDtcjooXjmeXmiitCSa6p5rBayWefZjHHZQv",
  "key18": "2ShxMT4nLTBC5gCWipgNPnVrWSTvz48YarVfvBv7cQpZSxZfoqbsgZ6pTs172mC7fDTtSo3aSFfxDg6BwqfojKbB",
  "key19": "55WpVjcRKYHFu9KmqFoFZKsDQgMtmXg3UiYyiWKjqmYB9EPLrEH2pafB58tQPfSaaP1gDXwbQQRcosRDfdatMM5s",
  "key20": "259PhazPxmhW1Vvq8464EJaqt51U71JsPHuch3w5bXzvPAwd4zzbyZTFfhnZNNfp4g68aB4vGXwa4hifqaBVTvwR",
  "key21": "3mGaXbXvkGRUYS5mAd7LEK7tTJbNdfHUswLNdicJ5ZkVnyDrbSjDbgPsn2Ys853nzAqMAM2wjJmfMMBkxmcxkVSz",
  "key22": "5Bofd7BpyLgDDyWnGknbUKt8BPouDjb4zwu7qGWXHHGet3djyjVqi9QKqb6LjC2U6uGkXLVYa8KpJ7aKq2n6gASc",
  "key23": "2mFPTV5MNV99W9WpjPFmFNaJi2Wt5Fs6VhSyEZ9iwWS1pRFhGZ6Pw7JCgGujEztjeR126MRGb6yeeeEeuYSJkrUe",
  "key24": "5k1daE1pSx95v6X7BjqTXkUBnQfxDCTgvmifR2ckeztScXNGkVkfQZinof8sKcgaGyZ6dbbYUTg7YXtcY4yuykdr",
  "key25": "5tBYqVdBe4hJcHFSwjzvzg3b9D9yGSi6qhWPmujh1ZqCEW63GXs6DpB5tECwbdP1FhWKRoERNjxd4ufMTTmSrMDT",
  "key26": "3chGLrcveLsUxrKCgG9WChXXXGRdUf13N6UvmbDEZMQ3VzHob8wnnyis5rPvJr4ne7rKGsufxC53AuYAoFVxY9dU",
  "key27": "2wQmHCNijPKtBLDx6udymaSkY3fmA6TBTWnLmCxvYBcQx74V8t2syLJJLdCwdukmiTmi6qf2hTNVsWDea4iawf42",
  "key28": "3NrXoLBCaxzPeTocJJSFpsQAbc4QetYmzcAeXW6t3ErfWu543rJaP8JAqtybiXr5UgaA3cmX3roCjYWjTtnrJDYX",
  "key29": "36uYW4dA5FpP7NkdeJCGXuEY9gNFn7LskDfaKAijMpLn2HieiNU2h7nJ2agyf64LeLbewcDuYA3X3vemGbdXzgka",
  "key30": "5RRghgSgwAMwo8MqRNCVkEsC9LSiNHbWEyayHz3pQzEPY2wf11RTczBxN8W1nvERbdXBPrHGS2diWxPCsxJ4ZMrE",
  "key31": "4YHjnMhgBbC4U68E1Uy8thrP2EbWjjmQQCYa8mDwNgBVpUYXQgwCn7zRyzV5XKUmsMEo5pgqSfQXpsN2tvPYSprx",
  "key32": "3BfSVCDMeCXtWduwcrxoeGLvPc1TYim3LjNSP3HwGPSG7dLRqPtzdXLgj9u7ey2NVQHkZnXGLYaTqVVg6zbkdmWZ",
  "key33": "2dCuUujiw2pjFkgu9dHdgaW1atk1y99fPQqjLP91VYPSKSCt7aLs9MEQKGk2ZaLxK1c1UwDkzzuGRnrZe3gtsqPk",
  "key34": "xcbnMRaiPQXpnUgFBZiPMsf4oMCGSRgtGvEGZmaAiAFykB84LzNXz7wQCNoCmgAE837zKRdCD4fSE4baXL7JpzN",
  "key35": "4mJpfTTSeLYxonQrF42YSzKurAdJ3LyWGUgXsgp5yqSFLxZWykkAmC13xsDaXSRaTEHEV1CUchHexnZmWpKv4jpn",
  "key36": "2wjtCEVfP3dJHHvpkRro3odCweE8jFeVqnkujraeCw6VE2sQcfcyHf3Z2U1nFjSg2VRoNM9JD4XaTRiVmjC1Kahr",
  "key37": "nPkK4wVrxG58RQfvqXnoCkAKUvtbuNnAnNE8gptvyNeXuzwqQF7G1RGZnYApSBYxksS2M58Lthp1YLDMB9wNCTH",
  "key38": "3utL132LETzYxMSQmgxyAJvbQAZWpKTEERouH8gCgsD9aR8Kewjvm4ToyhgKy2ZNPSVZNMiRjN8oSLyJEFiiShZZ"
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
