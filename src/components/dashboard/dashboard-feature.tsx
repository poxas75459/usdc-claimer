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
    "53wRBiAwKnqLTAzjYiLfpWU3UwqwbyBfz8mXptjU7f3Zp3M3tvgv4iGK3UJDKCAPSfnfVAWvNHcTmVdWGRFAuBDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YtAxUqDCzNoMr8heQuGfKUuuEdh3aPti7JZVwM4YC1WiksCuJTW8EdAtqbRiff87SVWuGDifK22GDooSKfW8Ewa",
  "key1": "5GgjSK8JwTG968VXxAxFpQ68GTPVroQdbkB9vF6NNbRVkCFuiN5yCe99CzQGsng5sjddtzEQ7qXVsqgZtGoB5HGi",
  "key2": "5Txhn3svQsbHusKQjfQWF7kjX7tumcJS23eSaVBsu34TpvaDqccJofCB6HoRHQLBRkcyJbEsg2g5h9gprP8otB2Q",
  "key3": "3CQKmLU6aiJ1aWqFq18UTE3GcEU3cNV6xACmHLnKWRr6LmtFbDmHWBeeyCDvXGiXjWdMynVMvAC5QpUWRGMJ1a6V",
  "key4": "5jzSZAFo3yCKnu1ecXjLqHPLQNsPRHuxNqi4gaMNT3AsNTpC8VBRWoZmsVGZJmd4TJozYiD5VfFgWyWZB1A5iauE",
  "key5": "4KXnboVQTdf92Kv64C283wDWKTaAsx57zBGaNPk5yYugRQ5ktnLqJs2rird6WkjpnrU3RRTqMpX9mgUg2graqMK1",
  "key6": "33vNPF4pPNPdSNWBXBAnrdiQ8Sk2AnPFBxxfvrcpRJzVsdC3z9Dc4oaooYremHGYB9ajAz2meszSWYaCmTSHhsBS",
  "key7": "nFyHLWmP5dgy2VAb6ZafigykPPXoKw6k3XHJxdC5Mczw2dbezRmkeCk2Q6U23447o8DjPuDaZd3gLtVhJZAqnwo",
  "key8": "4tihoApVg3gwdWKweJ3K6DhkuEstJ4RqQQ4rMXbqrBhtayUk1DsdMkroEtgRoh3WieVug883fFwJtJmkffXnJhU2",
  "key9": "4KwEm4t97tt9wKbrbX6j2ATUZDAmR4c6QBkdFaj9qk44HW6ScMbUUrnmEdcA5oTre5yAU1PMeS5gbKvyYaf2EWEK",
  "key10": "4EvB1Qd1NYm5E6nrcm9zqQMZxemL6cuD9my4iY8RgtFD5jrTax2VCsw54PEhfs9sG1BCFxFKZhL6QhLSXhmvESbf",
  "key11": "5RGVmdbVfWtbRb991NY9N3RGFbZrnBndmXvPGFdbAb4qNwoL4DP9Ans6QD3pPnFg7BPDmKHf8kyLMcJghakH4x59",
  "key12": "4LfuDP6a2o8tEPd5Wp87dyPoxPUMCjxL6rtD5AuA65pHKyQrnjZcPK41QdqmXunjuqJcMuD7MMk9vH6nW7XyxMv9",
  "key13": "4a6ieB1uBcmFdvMYKkfACGHVZxU3SDKB6bjcRb5AzxDbUZwDcZNgAtY44WjbhHDWSZTZS6Nrmv1VFPXTWeLskdxe",
  "key14": "5N1T93cr2pjEsPYy3h188jLsjx6Vf5ZHcTJXaaZrS6EHa51c9ZByhkqzWajLnV6kzPu1tBdymgHTM55fSsceV4Lm",
  "key15": "5An1LgLkQskA7pS3zbdeGngKvDbr7tbbd8KXmffdA2FC3xcpN5WRgo63L1fUytbnmJfUm28AvJ2aPDqnJtBr9VTe",
  "key16": "3ys687k89MBdWnA9sohmobc5h4iv4Fn6E7BFDZrUaw219fVxWc33AnE6NEwnUTfcvgntT5PW91eTw8Q5mt3fQ9Bu",
  "key17": "39AfxLYyUd6jRH3MtgjYX4wyfhTFXiMweJ1Cb1n6FTThv9byY2CvFmD5xtMPTGfUxACeJNvV7DCro4JUBfp1njAo",
  "key18": "42KBUcNLgKCSS18csjoAKvtkJfCviAbsZFTF7ABgWDMHLKpcjr69tAm4wK9pkpXbbsPSGAXxzTm7i2NfLpSzx1L3",
  "key19": "YUAfx4qBYQi73n6bTa8YDjwuAwuXKj4x72kiBKwZmBuDsbMzwdeUR8YvP2pGuhS38mNjGzujSUpAinfmMvtgPgR",
  "key20": "4wq9KurmUALsWSiGC7JsmV3cARRA9GtKRcPuQJtnhLnrhgg4Qp1XMQhU9eeQFtMG3pFe8f3Cx3Wjcvuc8U6SWruK",
  "key21": "5cE1i7mAnxC6TJuW1bjCCZ4SagyoviFHgoanrsK3dosbW1xPsRZ8yV3Hy8eDGhUHynJiM4AmymZHfEX6DswH3gpp",
  "key22": "iVt22aa1WSTghWk568oC6eZUTjHLJ21TdfyPXaDdaBBJhyjaP7TfLpTnU4pDVr2Sedo4DWewsynS9xF6sHC6YGF",
  "key23": "wvGxVPQP2BBLbUFXxhiEZ2S4qpM4kcDcXukDZ1ppzrQ4JASaD7Jb32bWsCod49MWyEHxwhFVGk78mHkeLXNMGkB",
  "key24": "5LNwssSvopawBh4YrLY4aVqx4inScoRM22eo3rGU5zM5pkGQxLoypE32btZAvvZ6gkt4syKfvVvNAUczrhSwpXak",
  "key25": "3vgjXRd7gfVqJ7axmsi1sc1QuuEFacKDorqbH4Lopy9T8qyC2gMAFgjtGWFxDHZytRX2Wd85xq1BBwiTfvb9fPqo",
  "key26": "5zUpPNhqYcHXKpG9bAEDW9PkVcjHemq9BRbkTKcpoYXPRVD8sFfBbNUFro8gddxGz4DkX1D3BW1dmEutdNoGHDZQ",
  "key27": "5uKTSECCAHbGxfUDLqQ3GWwx8EchH2A5WrmCU7GvSSCsScALVnxGEpziKcT9G5Rt4HM31ZELx1uXj7n9ar7fczDB",
  "key28": "3Vc7trpEowyAvtbaoFUQ53mkd5WeDFAUbyeizvAgc1vt2rzeA3Av9SYgqXxcaWBQq6wHmLAaomppddrPu89vSo9m",
  "key29": "3oBsBn9ZVHomcfXBwk6qCgxgDQyqJUbkeEjBmzJGC8qYmHFwkUgkSWQLDWhhJketh7wwHocXTaaVBKepo2XXn6Nk",
  "key30": "AsDMwYLXD7dxieXeoqqDpH2KS9GfPchzLaq53o3oCPx7nNQrv2ApWXeT9cQHcCQbZ21d5H9tFkcpCsqusLZRLwa",
  "key31": "mDcHhaJWL9rgtLKoA2iEAcjyev3RMhTpH37ZWBj68VKiKGRnmMAwieAC46bZRgBLfvp6btAHE8gXPUNqqMY9Ua1",
  "key32": "59YwSoiD7s2Mosj8oYVhLyWjzPBrAwi1BSyS9zqVybpqdqSiTG49Z8GoY2XUXPRBfJdX8jGzA8MyJD7R5bnkCrgY",
  "key33": "h5Ka24j9pY2siMTCisGwaDbuX3S4PitNKVaS3Cx4WRzWMKtthsfvEXEGKro6mmYDSZhahsKiB7oQe6FqYuAxNTb",
  "key34": "5kz94ukDrg6qsCXn9mephiYFEELq91p7KEw5nKMzkwhRGzwE2uYNF9ePwdZtVrGdu29C88SUEdU7M9EEzgTSNL9W",
  "key35": "4pdLcxnsLUL7ZDevF7nXTnaSYe2obVegeZhsXDs4rjDMhbsfZ5n8sLPYaweQuiz3wWjyCw3C21ximLpcpq3yV2NX",
  "key36": "5AxJQ1LKJvXbvoD1Xk5dNPFhE49jJDfj3owvJZawbyrK1GLWuHWZHW8iD7naBEdiiogEiJxjdHx8JLTkdUUnM65B"
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
