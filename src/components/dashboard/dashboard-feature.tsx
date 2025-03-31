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
    "2NXvtB4Q4sW1QgibMWmsvzt64R2tbGzY6ezMuQzdWHBHxMDXpSnQd6PhciLNCPKjeNTVn2VMY6Ai3FB3VK9Mpf99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BoS6kzfo72deB6sb9Ucs37UDAhetVRYzWcRiJBQZStEKpGcTFBVCQQ6sVFSKXNDpprtNqZb7LFauxD1KAcmHvCa",
  "key1": "eAUivsBugheT7RP3XRE8LZJ29DxxensDCt3v6nFFAbLnuXAB8VLmB1Axm8N3X7pNfQQEwXd3urXekMHX2yG3ymH",
  "key2": "XM7QX2TePUvz46UUwVh5t2ibaxeiUoa4R3S9AsxwWRB1CSifcC4BkFs25BZwQZbSeaPv8ee8pZdAkVg9gMMh6Yx",
  "key3": "4FBVLNHFcHQkrxfD29Fmi8kw7HWTY6Evb5CbxAWJKLTM4aYemLHHvRZmiNzsceHACrTec2REWD1JoyMcrVimq639",
  "key4": "ntntfJbkMT4ZgsvkKr4naLgHDZg7t3UDJVfDpMuWn4YqBMb1YDVvAxVGZMF9BWdfmgutV4VZFTpaj5zVNTWxhDz",
  "key5": "3pvwKr8287XWJyyVP2uBmMyVH5qJoQdAjgP4Nm1mCXY76yPA2ebe5gMauSj8qS4kz3KxuVCk51MLoqxQwPfrt8cA",
  "key6": "5tquJ5eJB1xP1XbUJEvgediazFzEPRsVVLTPCEfNsiF4i1d58Z5bgUBrcc6ufKAegUyVffmoJTv9ddWdKrc4Sr4m",
  "key7": "5UNM4XobELhyq1sD4aYrWHwXjoNQkAMREWV59uwjqbV62vq5rfju4e1JAMmtdFsjStVMHUojvCj5Bc7gewdeC4vq",
  "key8": "4u2yS1qDH1D8gNnhMWyEmW6oz233tuvzDnamV86xB1iVAcoH3jpYhza5pRMD69esd6N1MovzGseDZmet4wkCe44R",
  "key9": "2Whgmbd3qmJFS85wezXEAzjTSRhjGiNHbjMae9ByhLbqR4gXBPMCgqM2xr7Wrd17XkGdcCP41wCGgLvkby8JCwe1",
  "key10": "4ypkXLGg5gc2atsj9xZVb1SwYyfsu3mwXmLywdbeA97CBM5a5Fe5NVxGzY5x99FRYA2xUiLD66ey8TaeUbbvgf3j",
  "key11": "44P1PJjEDrmVLMzBhFbPJ6rq4cfvqh87x7cFrV7cpFRiXJRioThi8RKEhY82bdaUxbkGhNrTXjkQPwJpkazQUoZH",
  "key12": "5CEAELopSKNTciMYoNFzzNqA8g4y2x3xKPsHySaHkDos8rgz2fdq78BChgWaTUmvXZvYeL1CezrgLRZn9b1WLfd3",
  "key13": "3hSVdECr6wcNBsUZ5LfAr3NQjvN4GfnqFvAwDWzqpi2fiDiEEJitoR2HMCnvyQm5P28QAw5AmfLRv8Jx7qj3kMz2",
  "key14": "5tAK8aTcHRyBmaYFyoopuG9ciPE8RD4SV6YNRDhnHsCZRZr7WdWwA4sVKbQdpKApvEtLVn2UrCEoN9NtNK1NbCNU",
  "key15": "3b4HzRjjxamrzj9mqZr1y8Ywg8qLZVR77Tp5wQe3RPVghj2BzCoJ7uoEGJ5uNdboKEfARfLYZ7KHPaWzgY5ZHuK6",
  "key16": "2E4UBLPzeeQ2odj2t5DsfnXuk9LNAvQQSZmKQSuotXVoFNgZAaroHD3WjKT2L5BuCs3jEyB4toUopcpkLgoWiGhE",
  "key17": "8sLEGUoixWM3jqmY325QCPAdG3KLTpPAFYDSqWbRVrjRd43yJfVUbS7gRREWoqbRzKuLnWBNZntsAS5mSESfapP",
  "key18": "3XHqZgvLTq6APsYTg6bB4UxNWTReCZUerXCwePPBZ63YPvvU34iKengnKRaRWeF9x2yCsQtdCFUP8MTkh3ssYiUU",
  "key19": "5p7ec5oiSGsAZKkoRcs8Pn1BPCdHLYEGY96TjwG47UnAPjgoGbuhgXvExnxMN8VhXmN5v5eCoS2vhAxCtT5xgcQp",
  "key20": "3ssucVtU2HLbVRRQr4p7GMcdsoRuPA6jjtCQr9R4WABoVXXH4w8siRThL9KuibVN9ihjYtddHBFYc4182xuCAQA8",
  "key21": "5P2TTPM6EqmYBdSaLdF9DNmd3XTEsmKpG28j6mpqcGnjqxPcasHh7xb9RhmnBoCQGRC8LFVzfiJigaP5h7de4HKE",
  "key22": "ntaCZg8SvcyyVtaGBneoycxn3fqDcNgsCjigDgEzDVCN4m8LBfcR5umbuAxDuExFxcT9CwC4xNLUsEvL3LrpX8E",
  "key23": "CFB2jRTHqrS7135fyv3JFGfckPFY1D1pyAmbJdoz9ysKopGJf3u1FFjQjnaAPYaVyNDH1zXTmjgbyLSMmGN54uS",
  "key24": "5Y3vgX983MWRyhWYnxBdXpLzaqYDtiWjnKZT5JTj6eJSWofKAV3PdLXCZyf458Mrf3MjRgbfVM4zfPN9mg5a3J9d",
  "key25": "2UmBAsDsBRtQBZWs5rNjz8JfDZMjd6nuuaM39kK8yvQ3BfG9BTz7eHqrvug5dx3FLegQoWUtrQmyhtNvxEVmuKQA",
  "key26": "24em76dod3fHxmFmoJzLyesHJNXXiu7eFYfdDhYAYHUGP3hETYdY2DDzgAUXyBY2MexDaxrkVDfuBzWhUiSoBxGy",
  "key27": "L2gZivZtfikgKf5sAFk2EXBg6BLHJMeDkk3hLs6SVdpnPx8npuyamP8Qxn6fWur7AdNNNG2zrP9DJwcth4d732J",
  "key28": "4MkbnimWMRjxVw9oThcqVXTZDZj5Y4HsMfuxchZycewCKPFAMZrK3cRqUG6zj6ZaN2X3p3vxkhg31rZU216gwXLJ",
  "key29": "3abtryGuUsMXccVNqZHbVzooLgSqJJTG1nM6RUuvyXKJn8WLbY7zrESbGDuLzhfzyk6aKi65tX5xbCQpVWcvctVJ",
  "key30": "JgK9CV14KJ1fPNwvBef8kU1nKYZXPsXWL8mQuk2oNJr1q2vLyQWfpiTY2kdgoCM9mqvDtbHD2smY8PFpQeX9uQz",
  "key31": "4ZMdgT7cR8Sgj8N8MEyYk8utE6rH2ichxhRHAWPugzWTqF7JBL4srjw1gVysYfC3s7LKc2Bdv7cmVRQ2Hjn5E1VA",
  "key32": "3H2dCdQikvpKQD5J3MMpMsUxwTo8cPNRf1PGtUp2tYPeuGxZqc6erNPywdBi6X1eyNiT6VsWb3deQYbYGGmpfNh6",
  "key33": "63B9hSHCJej5VJNMfk48xNcA5f6sbbEHBTisTVdiu7bzfqNq9vuLU8pKRoAvoHkm3dW76Bh92xHEEPpYjuna7qCq",
  "key34": "4YyyW4thPAmkd82X1FAeTvWtvdPApDUx5sSs8tFcKcnr2KzrBADJ2QJiYVRCGmL7a7TakALTu2uEaGcd2GTiBdMp",
  "key35": "2p3qzUX4b9rG6LEteQ1Ki9UHhqMqJKsQaiyjNrZAvDWViPfVQyHNeo3CBFpWTVtjrRyvpbPvvFneKVmMxFPZRr1f",
  "key36": "5uXSyZ87N5RWgch9iFJW26AmwN9Aj1ZfF5edFZT2BBaC7RqJRWkGzhpEQ96TKxV56qj2wqzLNEB5fn6HzCZHy7Cn",
  "key37": "5e9XWPCkx1YrgMrvgKeUSfjYfFCCUYrbCuTDteF73SZ6sZkkZ93yUawtjwRWUmteJxFqxwwU9xRLiZrqSTUXvYEP",
  "key38": "z8BDehPjNJcUK1EpNMouzKhefw1kR2VK45zkjkxiSnkK72YnTT9bZTH4Cpb4SXZWR1TEX1BLSBGjmMMzc1NNzLT",
  "key39": "2PAWRqbqgjbLNsSxGRyqWwJRdJh3njPvxY1fuK3RdF8WyKVEsiRURMSpKTjNUcqGCL2rX5qfcfAXbsgwuq6oj4ZJ",
  "key40": "3ykXYT8BjQjgVpHu9daqiJht3n6uHwq5z695pnZCrxpx97bzNNz561s2yLQ7iydSAXupGvHFLuEw3gTJJLcyJTdz",
  "key41": "3cpCX9Y2ruEoVwm4gH3SjKCyctTa8gKdkJuZ8mwtKqVwFc6jFwtL6k41Td6Sz6eBJ4tPK7RAbdkJiviv5M529uLE",
  "key42": "65x164eaKsbjfwsNt3FUa7jkwdUSE4edfNSYqMLH8jeXG1p4YcX2M74E8prGb1V7dBWEV6VvNdf4nrRxrBhZ8ncV",
  "key43": "sHNkQ1XzCRmRmN3BYRyVZSx6MrYcT6prJ8LggkMWmi4RDQA9TffksCT2VdTLeCBf9TohxVr8CR9Z4WWADZVschb",
  "key44": "ZvCdSBvzFBQnkha47bebrCcjsjfHqjYrqFqnHdjmpwikPrvq3XYP14VqSbpHbTa7UzWQLU2JBd4FaGTBWP9kfdN",
  "key45": "2XKVWZBDcUobFELWDCtGu1prpDCsN8yYoyVeLv6SFe7qk3yqDZu5FHNgRwuqAcvZf5dCucf6zgT9qJWwr1uugaTJ",
  "key46": "4EUGJZvaS1gj1hb9V1QNNMRwCvh1xF62isHbUbyDsHnwCKUshmDfkuG6r2GjRVFhsUk3mV5kHg2o3AiEwULeWeS9",
  "key47": "3sDzQsuF8uarZCLdhyC7ds469Q2CgoNnZZQroFSa1ZsyPGnPVzz9MS7DnfxLzU8nwFsAFsVcgCzRa4e3wMUgbLow",
  "key48": "2NZDHLutm1zkGnypGhShihCd5DWLH6pU9gBtA8NrZ7hTH8ZTEh4wqKe4C99FAyNwndahB6W1bGWLucDRh4twqHke",
  "key49": "oeNm6aLKN3zjhsCTotUAwZtu9gxVW8wMEKL2a6keqQ7WUdiB1VYMV7B9ZzeVyEqCDUogy1ug3gXT6DH5TvnyCyZ"
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
