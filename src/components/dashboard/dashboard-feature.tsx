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
    "3k3b8cRjxDUQomfrHiN8xPhHrAeQQu2wtMabF1zk6drMfTrUYdwGeyjAZ1MdDd1Bef1Xf7ZmhDsUABhP68zX8tY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uy6EJ3NY5HgfTMaJN2Ti8jYfSF46qdbdk1nJecQV8wGr7F18ReS9oEbhzuxqq9DXpY9bLiuE89FeRTVXUykYxir",
  "key1": "3aAi6eFKgtFsp1pv5TjS8T5WUPzhGTTdw9o6q8NMuCHw9TXCoZA2zHnJjniHZVdrivF9Gh2e88g3Rc5ktPTcHj1Y",
  "key2": "kv2FRTmEw536pVC3PeZ2EYq2271xvzaPUJJjcEFB6iYfQJjAE2hZ5q1Ge4AexHbWsD8Ced68oP6CHqxvHsEhULw",
  "key3": "4jrRMSwKKVgMj1sDy7ymBn875Apa11SdBrxogBh7WZ12BHBZtSy8RZtUqvgTZZtsmDCkAhqBGnBsxgBWLgyaox9L",
  "key4": "5LXJruSix6pJBMyc7mXJM3XyygtXsTM96nnJ8X8v3Ty9Aiv3jhUxCmLXZVFyS8C8d4HJ1LpYkbuFQtQgoUXA2bXo",
  "key5": "5mvoWMEJWioizL1cT8ATF2EcRiuKEw7atxrDGCjPF5YAjakrARmEEPf8TpbLgrdZwGeovqxrRZ6ZHMs6yKr2c41Q",
  "key6": "d6MKrZMczrZ1y1fPY9jFg9ed779JzbCgJMUWQLumx6j1Kw3dXv9zaFMjkGKFGMZ44711vsUK7bFdzTsFzwEQQPu",
  "key7": "HN5sBwh4HTsba776Z8vReqbXAzCvXtJCuFNjChAyMFgvosMxxmnpetLQUBTj4ww712pEapQcwyPh8tPxi955GBg",
  "key8": "4vsMfZgeDzzYFNHxRDtcDk78bdfVGmoEmMeP4ZyM7pujKi6b2qV3usrtbhE8GvczT4fHgiBsQtrUhGfMJwUUugWp",
  "key9": "2zY2Ec9UVnemDgiL1koz77pncqrd2fqCtbcMtu18wrpbcfN3RHUNbfFBPRbwUCrZt6D6PJELQASZJDvMW1i8cSCr",
  "key10": "e6eJzmUBTMp3nG6Pv36X2eM7h7s6KtqvyutDdcgYEtg69J3CpnzhsLYVXvrAv4YY8gKSYSMRi1taicXtUyXTmw5",
  "key11": "5UXgoQUUozZNKXEatbcMBBgkeAM4UxM4ndAzduf1DFNe2Ke4Sh4izMDFDSdawSaYQjSbWtmPsXUWGBhiUizEcCZq",
  "key12": "23BS3td8oLVtsgVxmTa7JYtZRTmJhkoUTRL6nyWXyhbWt3MGicbqesupPmGBPd9wG5MxhNPnkChtkmj5DWFcTprV",
  "key13": "2VoCPRVcMxKd5o7AjwR5kFNw7PjaeZsZJg6tBqCLyd3GurKc92vxr4pw1FrjuDbS7s5KQjFFYuScG6PL1PyCWtDg",
  "key14": "3bxLqEa14RPiYS1tX6fLGiZz4xoAyLDn75gKPv7ZpeKtqaJZPEXfEybjwHJ1TrQCDQ9U6ti9HvKsQKyMv8zCD8eW",
  "key15": "3B8bWg37qExkSMjwpxseXLYvQri3SDZxq6pV4nEeHYAGfz9a2dKmaKkePM7YF9hUjMyWv4qxoadjS5dnMGqzkTby",
  "key16": "3N36Kt4rzd7n9ksjw9zAYfVRVrV1GUtuyduXkvDL8ME1KoU9VydfAUcU8D5Ljw6JFFpUoiBGnDhaNqss2JtLWpEp",
  "key17": "w9K8hqVKFTKvGrpQPiwk52a3aMpN4K684GB55q1Pe4qHhKVydfrmWwk6zhiF9aSsXFy92h4GMka14xMXR4BPwK9",
  "key18": "4mJ9yoLXgnKwPAAZyAPGSL9qYctttdeF39KLigApGLhu5HAKLBkD7PcSHrP2BcWXpx5KswP5CTnVWKn7SHersMcc",
  "key19": "5j4yCwAhXo5p8zVTSpS5AT13x89f1hLRQLK8ogerTpLS2tuwjk36q7LUSmrspVHhmnrBmeMc43ZJ7H2YbWiNJxVT",
  "key20": "2HJ2rh82if9DZ9W588mnfUE7jC6AGYCNJhQrNfnNNn1BChFgFbgWhSvWAvDcPNkwCRJkDr9JJhU3DQzJdj2jJvXA",
  "key21": "2vPhPPoo2s7suXjvtWb4RkMoYVSJ9vsD8TpGPVLcmEDHPjmh4HCoSsoJ4A2gwVfAMHvKvVw6s8MNz82UPvj1uNLp",
  "key22": "2dAingmbvUXmQH7dwLWx65KbFWEhhXL2P5u4DJrepdehZj6jc975PJoaZvDJsHJxDGPKt9YwJrFdxca338vZVmPz",
  "key23": "4KyHwADu1yvbLERgPiFzEE8dpr9AgDGBPS1krk1Vk7Ma9egTCLUYDiobCv3TxyyLBb5wZzGStappfurimqqRumaY",
  "key24": "RKCfN2m2HeH91zTzCSVk9ekd9zvcb9ShJAK8CDzrZnchSyMoSVxCi2NHCqEY6zGqgPNToy4Rqyw8QaY9qSvunzo",
  "key25": "343pjhatMk5vQUMaLNrUcnU7xASQePUbVs85rcg2saxNVe2vWo8yhrKjqjisFKhsBHA8rLZpps3KvGbu5SkvtNSG",
  "key26": "2iSe6wzrFmjAMeumoW6m1U2HJh1SFVVJuB3EQuMEU4oFy9ke58ecRngN1xvdEaEdi2U9vUSrhbHxeXpBG71FjPMn",
  "key27": "3gTvLwMHWgeEFxkxPjS6uwSR4XWqkJaY5zhkiBiS4HTfRoPVvNhvBmwc22PQqemi47o5WX6MjsQ7HiYM3QLrwkXS",
  "key28": "5uiVUFd5K6UJW5kMCTyXyhUe1RvATJ8eThd1NH7RjyXE628Yo1CjLkuryfhivLV8bLTPDPzfgNFh9hiacesv52Up",
  "key29": "34NNtXqvYnvuNmr82VKmeK7tQ3nvbaDCwHJcqE78Z8nDPyKfKUQx9eTCC3gjwyny7FovUeA8996dpuj1rNZLYcWG",
  "key30": "37KCK64nnXiUQ8MQ4ssZZZuzF3YkBBDhUMDYxFmfmHhjyEMWdef7mXWRZzRVshQqSvaAx2G2gtz8imDET7h6cu27",
  "key31": "NvoXaMHgKxXd5FC97nLatHschUP6vjzLphPszVyXkNMieCs2bsD3XtGWAGizwE9zHQ1hrdWbExVZ5z4fcoyuGrX",
  "key32": "f8Huwi5MsQ6grNG9PD6dPpNF5egEty7mj2vwEJ5KWa7ikPViBzX3Ev5r4G3uLJjXXQHu1UdpVaewSTF6zY83t52",
  "key33": "5a2zVhD7DDGcFa4NXxZeCD2mEPbQMuyBBphktd2CXq6v3gWbj6XRoUEZSe6D2mfDLCuQ6scXEg22CqNh2xen37HZ",
  "key34": "5MipVfeb1T8QG7WJCDHVXzqxqRhJ9hiDzDtaiAqe2Ri9z3hQe3qTqDVdVoF73Ci2tyNoZkpoG28FiHFWHqG8kxHE",
  "key35": "3WMEBU3dDdnncsUyeMMKStsTQhgLBXMwjgxnbh3u89tsjkWHNtNzW8XRVaoiJMSZcvrNDXvNsHSbah6uHYnvJwE1",
  "key36": "3rcvsB4YuJ5H6jBkH29TnrCfXoycLL1H27ZPfKFzeC9GXG52p6UVWUDwxVMisris8kidxtpz7EFDczTmWJdRnQDa"
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
