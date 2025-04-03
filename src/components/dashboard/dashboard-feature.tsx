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
    "3Td8FSLXUPmWkUUfAsa3tndan99KYCBqpZ1Qv1jtFdtvYxnUnEFrcuqFN7CqjpPW2MK7a5SV25NZsp7F4nvTF2QM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jPs2pDW4e8N7ErmPw5okCKZm3btXAjyoFjrJ1jnZ8uffuD9occaXHLVQchqCGgS7xzPP5Kk3Km266vfuRCJHF7o",
  "key1": "4jQZDS6oGR7A6iPg8RSoWmmfp9TKry1F2esSeHT9i68Pv9EhmsoAkbjmuGfyp4ZnDxwJZ1WUm9wKNRua8ce2i5yf",
  "key2": "3BFamXXdPytB2egL9tnWfwCCQLeao6RALDhvfWZbTEoCF1yCm7uq4oDrtg6BJ7juDBuE4qgHRbBdSq9K5BeJWfJj",
  "key3": "5SmGGps9jd4JZReXupWXJGpqPQV1Jz4bMVYF2j1arVk1Ytxd3hEayyF5dLNSq1MgngUZzHyigQcsHGhZ6RyYHg9",
  "key4": "5nfpgtE2ABY7qYMUp8A7VZWaR7jTwfZmcomUThF7n11LJTfSkPL6uTkERhmHZMtdk7tWh1xCtmhJcehYpq3kHnu2",
  "key5": "5qvTZErVBXzjsquKe3T6SiBuYc4dfx7ApjCw7EEHzrLYgPgoajCxL1oCptTo2mVedcc76ENtbyNDv9mDDSKieLCQ",
  "key6": "3m7r9aPkhGLJoGqKffDoDSLHU1QDxR8hNUqWkPbvwz7oJH9efkthSPzTKvHaE8MC17tYEJaxW8cwFwtkewhHjdJo",
  "key7": "2Vs8ynG1Y9ke5nm3cDHcY96cWyayKAEQX3UNpoZgRpjXzWMNeg4swZbKPpq3FhdZajzog8dhGwKea81ocEdBXGdX",
  "key8": "2wCBaKSTDfircqsM2872dDbCDDgzTfDEu8Ggryir156yU2e7P2Lj3RSHNBBL1Bh4oQUhD5cgNBoDbMf1bRH2UaBw",
  "key9": "4N3iaS8E5ZHJceDSaMbouFMSNjRKMH6fNGiTQ5GxzhQV5swh6hDKL44sy7PDifuNi2jXbjnnLHLnaShA9KFtEUN1",
  "key10": "3aU1X9UQRLjXwtoH2BpVN5i1gmwV877YaMyYkxeanndnqKqU54N9ZzCY4n6HLw8Yrd2mz1Ps5dbiP11RuwAzyCtF",
  "key11": "3X3Z8mB9mZ3mT6LATY5ULLhzyb7RwqjjmwcYowKXnRTjssyKbrMtkxL6yZZMGL8ZWb9Yu4F8uFWhaEjegTjrsYYG",
  "key12": "3bzvfDJstBj5ecQwtEQbtTneFxTs4rsjkaXcPdDeo3jPDCR47KPXKDA19RcNRXfexy3QmRkEHCA2cs4K62FUmkor",
  "key13": "58XmfkDDfEuVUUBUJCinu37rwi1Pns2QZJRMJbMsP4v2ZJUdiMZ6k3MDP8SunhRuQARHotVBChC6YEN6DzAEpSsA",
  "key14": "4T3SrXTA3LkY3FZYS7LacL48QYQKv4hhty4zFrAtePf6PckapzWQv4mFRDE9jEyVRaBURrWP3vxx36wgGix1PvML",
  "key15": "nSAMfp3wcoRfeVcmfa7guVvV6AUWbfqEHwBPgrF3A44Uz6Xe6mRpoNgxSo4ja2frrNzrYKn57mLVzVxBpR1wzKs",
  "key16": "3gTXjJuq6adRe1mmfGRcU26nwTmwzrm4a6Xeahw1BFShFiNsfbS8ek8kAZWw4C8ygaGwVjQQk8eCT3GVSEYKp1YK",
  "key17": "4dhXxqzKDDVpFLhStiUeYx1oL99x48Q5Ekmd46mKKuoE9tvaVaer8XrgPWjnoZsQ8wpGNi7g8t1aQetB2zV92oRW",
  "key18": "4wfQSvxFdnJaaSmgibnJTPwbbsuxvhrVFJxKWtFHowCk1mViGsPQWbArvg7S8Stt5ncXn5FU2H1PJGHgWVHT4yNw",
  "key19": "4hJUN6aMoKqUUTDDEa3Lu1Qkjtrnv85x86uVhLKiDwisfL2wGU5Kt55ezbcJBeDU2JZ3Pg7ijDmTsoDmEbtJ5qJs",
  "key20": "3pQ4mRjo4RF25sJzoovZqh99mH97pMS7KNcA5dFhPiykyr2C7Er6FPXcHDavwUfcpfxt8L7mn8HvuLnGFKSVzoSf",
  "key21": "3JY3MymMqjGmsLzxRsDtVwGuiN1foE9E9VBsSeysidjVjFHYBrqwKU4SSc8DACjjxL79jPr3LkRJmoxaaGXS7BWB",
  "key22": "5o1i457nSgZDZdJASo8hWJk3eDJuZ8wrk5SNZiE34XY7cffHjai9pFuZrHSBZtM35BhGBU2j2xDiBMuRZFdV94iw",
  "key23": "4Ffb4rBDmxaDE9d4cgPNsUWdgwAvHj34757XrQjZ6ADhaemxxKkCm5BfFtQoGod2vK6ZWjpuTJdXvYzY9gojXgLX",
  "key24": "4qPnVRLWzmsWdUoVb6mWrAzBAaEniYacwYTMdHAd67PzwvBtiyuvg6revgon3A5maR3XQXn7m3Hjfcf6iFRttusi",
  "key25": "McwzFCEp7UaxGTmwhpVK43DQnmEPToEsWbHyyBrT4Ni92CemsZqriwXNE1Get8mmLHALrTxSDAEcFkUVqf5VmUH",
  "key26": "ncri3gZEaVXjNfnx3KMhSngWmFDdF1qn3DkyWiNeVv3jfLsgmHtUVnuU4KtRVgVYRUUx1pCbqRf7JRc2iQ3gNUJ",
  "key27": "2UXa58Dc1i5UNXfDNxRsAdy1K9MAZB8JkiQWaubtnQo2pXRaUH6cbfcx3xsCwb1zgEweCYpqgMAPSDyonqzjckeL",
  "key28": "3fDpzhKbcWM8xADGq5cgenAC1BooaAXt5jKLsFq58HoFR59KCW8MorUY2rcoG9UP6kKJPwYd6FdopsD92YH8Yuhr",
  "key29": "yv4d14JrK5dbXpE1cEDTc4fB9cZC1dKAwzGV1r2HBASbJmQt4SvDbXPgdTEyJBQYVpG9mSdZdSnKX2e9XZpgAmQ",
  "key30": "2nn1nRGU2irwX5gs9NfxuidYtTDGiZpJkUR8brxLTjyGSYv1vJEH6ncabPUnqY69PeXb5ni4Jh4WMbu5Dy4cJd19",
  "key31": "5DkAjqfuryFXtjQyCfM5sAAcmQXrDmWnKhhubm32jnHLS5W5hxyVKgv9ys2A4XSXF42f418dotEmUTE4YAJ63XmQ",
  "key32": "3Yk3uo28P1pUmbzLhEedm1kCKNA9VqhYBGwhX7UTxAtFMqAH1nxFTAk6Kd9JugySpCaTzLiZS2w2XRwCe2QRqSa9",
  "key33": "BpEe7PsvZEurBsvsmG1uC1hRb3RrRrKdf2o2VxnqEuS5bqEBntWrap7nyZfAReZezc77HX9rrpycNCg6BDVU1K9",
  "key34": "4Kfx47CNv7Y5YuEWAmiRtpX2WyYvLaEwBEQqSNv45FJQbzzzpso6uchsXeEGBZd89qStVepBieCh2CWtAdAhcLFW",
  "key35": "2tBRcMW93U8z5tN7xCTMRaXXxXCMw9HMfhv595m8VPB79ymzY5qpXMh9yKEYTaFL3JiQTUyGtp5m2Avch67MMXXE",
  "key36": "QhdbpZtECRP98qxz8PNvfidcPPyrKeM6cxTtDgdmFMudwcCHy1cS7f7A6sYckdZ9Nv9HvCHFcRdaQnzTc85wmwB",
  "key37": "4yNiLNszcefDp5eEfveXAvuLjyRNResGQ6P3wvFC1QenadxzUv5cBPXxaA34HdKDUgfZ496nx6Ytn2Dy1h1KCrYz",
  "key38": "5xaDXRFUNmL2pmJyQh3L9K9PwMZcTRCX63WqdKcpRNqeZNVNZUpQxareew4zYYJwFmfeVyx4n5oSFBXGi6Nm54X4",
  "key39": "9P43Se3jEUPQHLmV43yayv6XyAm9kKXkh9bM9zEERA31VSTXAEHCuCFaSxzk6kJg1UjbHnQYrHLFhd5RwSSXere",
  "key40": "4bhTPN5mUPYoKWXYNixpMfaKQ4vrcx5LmSoziYL7PxgKdqqeNw6aDWQ5XkHUjJkytubc1pSXDyH4PRHKEZQijLWD",
  "key41": "3q85PHTAhFB3rEfwopmZmRSCAMBEC6T4edDRU9A1Z13YtQnX9drw1NPR7sbCkdvAEKtTLkNHSMVLbQgAtA5mNRpH",
  "key42": "3p6CP2H9kZnquWpo8NA3RBNsaAFvDcL2vJANjF3gZAByoW1jtuRWfdk2xGxeABe13GmdDj31FUbNw1BMy7G4Qqcb",
  "key43": "4sCR5VRiNKe8dDx1m7s9Hwpoo5kGTAN7GrgiavNsjoNus28y3EzYkracm2eBCH37nU6yY2PTst8VnbacS7ugXuWs"
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
