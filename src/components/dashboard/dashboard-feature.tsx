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
    "2WPku3NnCwd9aDEy94oBS49hJvCPgVitaMK9BYNPquNTAZD4iq28gHaW76vGiLnuWBZhULCMSrHTasGDc53ktwRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n69bXCcwBSP4hPVtmDPeJNZCMMe1HCJScSTMx4NcVCq4MPuLChPGoCvLdsoLfQ5CDJcDqZvwLiz3p9fXNHHPmbE",
  "key1": "36g54B3Lq1kNLcDuvLt5YcJYrx5y7KKDbyck8V6MRBP8gy19FBu7LahyVzQ3cVEvsJB5G4ktko8nMrS9Hg5vC3aR",
  "key2": "5cAh2VTppPMgcbZXyJixSmA4Jcw6hL9zrcG7UukYbSbUB3vRFw2mqf4JHZqgoJ7hqurdy6qyG665PwcDwph4YCS4",
  "key3": "3e5HWWfHDAtMzLijQMoSxhFcLGrUQoY1bUbvznBDVca8Vyga7GmbwgFhxJvfSaaGnNJLqpZXqVjSEp1Mw3V2eXxx",
  "key4": "27krSa4uieXe4FiZDj6DYXZsJHkQVY7Egt23CbFL6XJd6rjoAwL7k3veV8rdtcMDttD5NptRbffmsA3MHpK4PjxB",
  "key5": "3LrN4vpuHmqpa8hvnpYEc7em3DVfTpKV1jEFiWNqwUsGGxdcNCK4Y8A2zYtWYiDctaoj5qN9B6kxDDGBjPmM6J5L",
  "key6": "5PfPYqBNCHTc5qGjbQdkgGnChT81MJvY2inE5qXomv7ecYKtaNAUQmschZYFYPwzqdrg2qaRrV5WYVQSN6F5H1FW",
  "key7": "1KZXhgo5KgzJzjUVSjSaFWqip4MibUgCE1yr3A6J7ejqy995nYmskYZSpX24TtFPywcsaeyo38AWPn7svXeLR6y",
  "key8": "5oGj5Qe7GjuqQYxHepVyN7itX2tz8VWXB43LzCiga6hP9DThCY4Lp8fce27RuNA14dKwmpXuLdyBzghmhfUetobk",
  "key9": "2pZuwcuN55tTHiphSDWpUQoDjxY7H3JPbjUM3XheP1bymJ65EFniPhhF9UstzkxKa5T94wVQD3LrfPSta5Rv6VEY",
  "key10": "3CnerMDVN6R45TuGvUWyENRgBYvVEw545j6gnpj5TTNQZreFSUKXeJhtTXjj4RTB41vwq251MLEGU7htabpmvpMw",
  "key11": "45aQtiXeP22qisA1T9RHC2YehUmh6w7e5YZ2wXGFBtNdG6JRiM59xepBb8soWBtKYfYnQfCC6Yd5EQRWA93px1JA",
  "key12": "4MrDdXFXFYWMVwTA6GzU2GKQzRizPJzNSSTq4CGEa8NQxYxrsKmG5Yw3gANxm4hZuuX95MhvupArNQp3J7jk5dn4",
  "key13": "4ZwVoLUHYJDYxpY7dx8AzZPGpQzhiJBTNwzZHDCr23i58htsdxs53nGyhAvnfdisRtrVXXABcuDZqGCMnwXCBhgj",
  "key14": "2mosnoHGHrrQ5127kfFPQvGVae35y6ZCrDkGakVxUg6gLvNm7S3aMSE5Su5Xy4aSzCY1JAb52UaQ8TnY1c75xja",
  "key15": "61T1VuotKWNQkTERoEZacdSS2JbxmnAT54L4qUVkejU74pJBzvvZ1tceEGvbuC49KZpfT65LtTSXLYfJkc5kVKYB",
  "key16": "4Qc7krASod1dZmmF97ZKXNa8h5oPzEpQqwGXsEumMkjJL2atzSc7DVuqfeEJJckYq6rTdAkvNAvFRJrWKWGUEJBa",
  "key17": "446RZyQH34sV5aoFiQTiA6Q5UD1CQiKY85F1aQgxrDz5tsWB7RjcjcQ32Bt6GtUDbsWGnxB5mXuCAkuxfjjwKth3",
  "key18": "2js6yuxget6ufwK3K8BWaKs8JtPQf2aCxbDhix2w7VR4DnPWcXmerrpj62yHmmtv8y8PcMDG9r9RP5utWftZSFZX",
  "key19": "2L3fJww1zjSf6dS65aobsFgJR5kqWJiCdpNKkC7DRTEw6hqsBx72zDaJqkCepCAwUKXVtquQ23oakrno37sXWtYa",
  "key20": "66nkvnwEdUQmAaEwfHeGXQTSVGYuxPoZWVmrEgA3JUvSjS65B9WF4QtHFPA197NgiWiNa89M7zwPz6ChkQzL31s9",
  "key21": "8w6mp1FTYQQ36t6jEX9ARAL3wajLZS4u2Epr3Gk8MmRutj8PUYck2GBi3VnBWu6zzyrGMGn4n8tZxPwRMmmzZbv",
  "key22": "5P3mFgR7B3Kpmq6Twkk7v8u34BHbgiWtFxTxsF8vRvpkjKRdSw4pfFQ91TGYxwgWNZBET4VXuLYroMHzdqzBk7zd",
  "key23": "4YMYejQZzqkeYqLTeFr9APxHtJwbT1WQ9Q5eAbGHqB21wKZFnyD8Pe15Af7z6fsS26VC57zEht2GCM8GiGetrsUe",
  "key24": "2hXnTg5NYpdXXVWnemE9JCxC7BruY2eYUuMhEMmtcVeUz9GyYeuqjXRQ4e77NPq3VYEYvUhnU34hSVXLhS6zRmbT",
  "key25": "5WsAbNaptFxg53CfmaLinS6bScDXkgxYBYzL7t43syNfpjj6kLkhSWkJnkUVoCMdsG5sLzmVQC9uQk3Fq9vmpmdo",
  "key26": "63p7w5eGxhMvAx27w8hokSc3NqWqh1B8YyLd1xBX2f4PwybPDgV4zCCZp1be7Xv3RM4aDGLBNtvKeHriEK7c8yBP",
  "key27": "kNX4h8d3p3ihC8z7Dxpjces7a9FHmwGtzpCYxnj2HVNQSPsybQvW4ejEbMkaMi3s16z4KMhoDjtXu46PzqZgQ3r",
  "key28": "3RucTkAL9QNgALTg7ozX68qTniFKZ2iBT3EYzK5w5ZrwooRAFNxRBoagztzAyh68saxPHNGPZz89tYwEk5XBx9KN",
  "key29": "5ZWa4Y6h4c2nYrbPUwqRjXhH1e2WxzCswhL3A2yJSdYXejuBmJobMYQbGqYbUDvarx5LALYJKwWr4ws7bAjtrFyX",
  "key30": "2iAV5u8QVHYvUbQKQ2WrymLiDW1CT4pcvwZ21NG2yLvi1dX4oKxP2v1WjdvBunW8z2HT7UGGCbrfZByrL7hrekCR",
  "key31": "2CrPXmBnKNrXhsDKJgJw5mHub26cNycNFyBJpndNDt4kzWDwx1yeS9PFZcR17chtbSx5mMXKJj1i1BL4ywV4fXsY",
  "key32": "2tXhU82rApMKkc8DLBvvy7hqMgnVR3ZtR3AZ3BVbSckjBmjU7bDFFu3NXyziiDf1Ef7ys5egbTbLH1ScioUtiogu",
  "key33": "61N13Wx8U4MTA7pJnqntdHZCHC6eDPJyjNPpP9nTAzTsoJsmaVPBRQAxoNiaxumvh8eSFWtZkocNbcH6WTW6L5gY",
  "key34": "mBjNty6tm824Ydf1zSp6TATV4Pivc3m15EwZgTb6NTZ9wnhUkc7Tsv7kMooZ3oGZJGVkikUcwS7ibd8mos8sCW2",
  "key35": "254b2AWFnKUGhUu36sGzza7KTjeExR4aUqMBrHTibnS8aWPUiF8PAtqCJC1u18tpetqsR8Zuc4uKQaZK6baHvo43",
  "key36": "5bsfEaDpJYxH9c2cK92DzfPe23yqtB9563hVTznTPsgeqQSVahpe7UVP5X76k71q6ULhQHMCkvFaVAPwcFG5tk8P",
  "key37": "64hoD7pG338sDL7XAR1AUxMRJph2353FALtcssJgbLQUiAdy59D7SxSwHMXVznMhGLHz5zAhUijbCJJLK77BmVk8",
  "key38": "4kCMfeFd6L4ooDcRJ1QGkZqgDtLyUU7bMVb1Mo7kBavc279ZAZ9wzFqsNX3X2jaHhzBjyir17j7bHbpBFSa65KKU",
  "key39": "4bR1rwYtagJ8EB9JGQdxUHLtBJHgfAV9DAa218tdaS382fMt6PVjhR3JnYBVSA6eiPzHtaGLpfzpg4oziUX9d8UD",
  "key40": "5eqYmepzUCnjU38gDf7LBe8tp4VqfFsciyBUCV1DhWKnajeKCs1X8mordcrW8ZUPdhhhkao1oCzPAgNomJpYn6Xu",
  "key41": "2GRVtrCWHfFkzjPuEzkbbAdZZS8Cw6n96Nnzd7qQg5x7UkfuiuwyafjmfYW84y4GdaWSdVV8DdFdXiFGVWkrQAMa",
  "key42": "5baqSE7TYqxdaaufHiLaQ1LMSzZS6WYWHQrXvUfoFcbo2RecU5bugktiHBrBuRUUd3FnSTG5aBAxbNM7eCEChkF5",
  "key43": "3R8gdd2QYaYfxG8WLFY26ckRGZfuhTXy7HKJjLE6bYMK2YSAaNLb2CmEieka4YA9G4SDmHsDZc2vJL9Ys51Z8q7e",
  "key44": "3rSCo7BpLCg6BU9i3G8SDohA6aGCR1AEzD1TVmyJH377mG8yAWGR45B7WqKHKeGXtuZPGJEUJSN4wkYAhE2ppFVE",
  "key45": "539yJcJp3qfH437KgNgnd3CFpcAxpa8Q7axWKdkPGxE2G9YEx2pBhUkkY3dc7y9GwyWaqG17cAiAdrtZdC7ZqWKh",
  "key46": "2t2bdbXTEEQg2CxDDDydNWVrT7uFABoLisMmDZkAy98hBMf5esKbw2uJvRaVHBjyMmcBoaw74BmxqztqDbmuCkts",
  "key47": "65jtZVhTaCaJL9xQQ5Ye7czT6K5nBjsvWdtZGGGBztxGQ3X1DZXHaH8GSsMfJT8rHw28M3yKeQKZw1BpCTRA5o4v"
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
