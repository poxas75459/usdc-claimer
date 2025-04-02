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
    "41RTmavvD3enjeDGhsUsa2445ozDxFVyVekZuNmmuj66jjVZHZhMcJ37PRfVdQHYetB47K2NNJGY8HCSgHD5MVM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UAx24vrFh7HAhiWH7hZKXjNbZhMbcKRPvBRohzKBpqBMFktATao2aLFciWup65kcqAw9yMzifoCMzdzvhiZNJrm",
  "key1": "4Y9gwFo3oZaGx8dCsTTSYTrTohgKp5AVrE9UMGBz7zqp1XMBQaSTdJc1oKx1RKYaCwHRWP2VKEimQnAGoBbtV94r",
  "key2": "twSgK1g9LkEpXJi5kX3sh438BkW94Tx4wmymZL7qTh438TiwtZqFFWhErPpqKdURULWnLwsAJN2V622CtzoVCzf",
  "key3": "5L2TKqNz6M7TkoU53bJN8jYAT9T3yPkW5f6gkfQhKkAp1KhLLVbW4V4qKMcm4BYuAxK8Q2FRJFspHCkFgWMSrwji",
  "key4": "3aHc8HpyvjotgqXbyyHDGC24mZSeKHDyGiyGsBhfpeknMhbuupTniUkaG899nmNexoLTHmzfY22uLZZggqq15yFP",
  "key5": "vNxhT1dxXC6Ng1v5rdx3rmhaFBm3mFSAJ5qDXj49pAYEDxneCGzQK5yqMzxqEcemDM3FBNGrUEWZMgjA2xiBUDz",
  "key6": "zAj52quEnUi4g55XhKRdy7pgWKob9ZvK4BbbdA4C1SJXsx7LMqdjRjHfUWnbVthhKR5GgRFPjfGuK5WAc8WNQ5H",
  "key7": "5hhpTuHE7Qdkb7Ntsx6baEM5myaRx1PhnkqjRpT4QmnBWrZNH8CYGCx64EMXHxkKn3JKGnksnUtqz2UNNvy4gYas",
  "key8": "2oBDqMyfypscZkS4cYxwJBiAKiKtXyDAmb8PCLVTFGgjhypBSqwygNi1giqfYBCF8UifiTSuD88nsrTov5NL2ocF",
  "key9": "5fpDaAswwKtZ97d4oxM3VS6wZexZZeLGMcXAMdpMYWu6dshnjur2JAzSC26w9DRWguYhfEX7gvSyuQd7ZLbsw3dC",
  "key10": "2RQy4VUuKiPtFnVkLK7FPChCwwtkXYoYsrHnDCms8VmTmzmfp7Bb4wQDnuAsPLjA2LChVKoQWwFMS9s2EurHeRvJ",
  "key11": "wfQrwPuCgtra9pwdQQgiLVybm76J2M6tKGDmQTAPcxX1pbafrpgz5DgoioMdY2nHKAKnJLVgaYAEqYkmXHnfNpC",
  "key12": "4kgsiz1hZuzZMvsGpcPm7VDp6XwKmikYubtnVQgDsfL6vcxjFQ1C374SXARrQwxjPTJJshb3qJu9rCGkjX41r3u1",
  "key13": "2hg3Lgp5YdD8AYyT9eAfedNKr6q4wXPp8RWQjLY62ctZPrBtZpn9PcfW5wyRUwUFjWx9CAMwWWv7J2Q1wYUkxRJ3",
  "key14": "3e1qM57ZX9v55wHaTLc7ZceGxDSEqJa958hnzg6yfmTd2fF2NTGV7fo1wbSi137rEVLa2aeiUNisHHMJE7H5JpXS",
  "key15": "xs1HHH9nbSjSjazgBhw4HKHRXyWLp3zxYEDjhH47wPHASt2MmxMDroGukk1MkZdXC7EJnucS7ToZB9DGDRpHtAf",
  "key16": "V8uf7VQdDKfQVufZFKGGNq9nf5F77VMn4uNw6BsTUmMM7toPq2U6wQj1wDt4mbJSHaBZuFmTvJuACZ8bvDEV7Ja",
  "key17": "5TpfykCgC89W2gwHwxSYoZb23ezjiMDrangzGdBLC4BvQ2yQvLAwnYQkmGPcKC1UN3Kdc8bLvXn8MY3QnpnvgyDj",
  "key18": "YmZKzqzmKkzpdtBpCCZniy1poMevaeh3SikCnsEnpZJWAe5ejS1ADxe5yJxPbpkh7ieTRZgoYmRjZPcUxWNDZcL",
  "key19": "3KWqCkcRSDtFmVsVLkDAARy5AfMJkkewDH3pjXt6Qu4Bro4RXxCtoCUuYLSqBJzUWHifjB9NcZxbrcnA51PmuW8R",
  "key20": "65mwuptKRT5aST2FAP7Sf2JrRb84GLXjUVHcQ2acEfyzewzKhCXcS4AkEVoCbKV1oNbeBaXBiC8Kmvnkq3iVwZjh",
  "key21": "58fMCEqjsXYu7CBczdePG23C2ZXMbrhidMqfb2rb6oLqpw4ErSjV6Jz8dFejHmjZDHErocwibQZhhC2hKioRRtos",
  "key22": "iccYp9ctA9tP2R7xXTrZ2sCWvzcKBZWNErLPHYjKv8KEAueiKU4Yqk7UoSR5qUjUELLtGFepnJmdWCynJVLha3k",
  "key23": "3oHYzSXfLz6879RHuTRoqxQPvJj68q3ivxav8aqaRiJaU7vZfaUbFpd8UdhpbXemWDwwH6sMAyCFP5P3bDQmDTF9",
  "key24": "UVvvHRtQ3ZXpqFZqGneNzQRhBUMAN3vEYjT7FNTf7AiF9w4byf6Kxw8Y5CEtEYJxGyB6c7GqwoPEsopmPuxY1Ry",
  "key25": "xHfgvwnpj4SAxB7yeuZamuHm9ieegbVFVtco3EessaUNB9ptskQ4jh92uHtaDJxkzGLbRYne6bw9rf4S88gm8KD",
  "key26": "2vupziU4h6RKxRvYtmDYxPjZmFvDgbSdUyTio9WmCRDHpj72P5R31pPPZPn4uDL8F7u857WhQU59MhDFBSrTUQqs",
  "key27": "XjFD438vVwfezrT9SdfaySJ2w864PrJ8wgie3NBPaGZygq2Ry84cjQxKaTZKWoJuFHF7TR8gp75uxdoH5RP4Q2T",
  "key28": "RxhsxFi2tkWRvxNWZtKgku7tSp5sboP7Ab3fSqqtB7Gs6q224amULWt8S7F67J5JoWqBni9PgaPqffJrTeFmd1V",
  "key29": "2rcbLqcQjdU2HoMoHPJ3rCggBQf6hrav9Gjven3oV4oqNxqb5BeJc5wVNvekNeqmqhpdV5ZBQCpLLnZkAfAbNpP2",
  "key30": "3D8UdhHjwyAKWdaC339eQ5ZqKtf7MNehH7mQwvugwURqTpPdZ7geUdZpCgsAeoSDjLD8edAL3ShXwbHP6oqNCHW2",
  "key31": "3P81oERkhyP5anEK56F1C7U9BDYTuZ6j1x33NhKWDZBAKY3to89FETEf5uB2PktHg57TgqaLmaXjFBBdTf2hrpeq",
  "key32": "4qZS7sAdwuzHKD817KByLJfxfwrf2PVAAeALQadBqjcLjwkmE2sqZhx9xr2xwuUsWpgTdafywy6EiMjnk7ttiUcJ",
  "key33": "5Uxr12PJ7SosVyWyoYMHqvbdJqkuKFap4qfYmGJoch78c6ifuSiHM6c8dD4zy2t4Lhy57UqxwRbtm6qjzj2AYJfT",
  "key34": "64EJ4GFPSBxHJjvzY1FvKZgdx4xnrtAhNtWBZv3ZXrFaM6dZfr4gUxiuiDV5GTH2wo42LxRGyMYNqZpDgYQMXq2n",
  "key35": "i1zEDLpbG6uUFJBFWS58tX7L154d2AruWqVL4Xdz4AvHSBfwVzrTZ5oSPRJWRzT7v8XdTCA6bN4rc422GhJZyCw",
  "key36": "4XR6r76U7mZkJmMW6FJSKUnn8vHqXt8gZrMpTv3ie24s1vMHoVSMBnnr3FoQiRbyZLzyQ32SJwzWpkiudScjfAj6",
  "key37": "3jiXb1Ha2tFR1twNUuBsSsKCbM5XKGNMEMw5tzcGo15TDhte3cqLtXGKfpzH1Z9rexDPDDGPSUHxPPFLM2i1MTy5",
  "key38": "52cDnzr5bj98auCzkPtXDjkV81GoRswjQ1ebasiJvBiqHzzJXvn6dRkz7PYc1NosF7n3wJ5uwNhhdseTb3JMNXtc",
  "key39": "mkq6DvDS3vkhZF4E8LDqwnSuBnrQYBE92KEQkWjQHG91sRTfnXPV15rXShNw7YZPXKFZ5fnm1hpK8Wv84rJfQ5z",
  "key40": "4PG7AqgxMKBLRFoeFVZXFYVWsc5Vd62E7VGWKzkwbuY38Um6PSWemkwmRLXMxxo5iqE544toXsXn7xzPqqxgRHJR",
  "key41": "fEtVrYRGmPLKU7jvVyfEczcF4TpFpBuzfNoLfZjqvfoWN813WWLsvdjtdXXY8mo7W49nV9fKuRLnzjhTKEpfMzQ",
  "key42": "3wXvsGxsnTqp1pRXCefkwTaaj8M8BL5iB1cWstNv8e7gCsrGo8NJiSo69rXTuW7mTDjMrtffUuqhmXSj4Utax7M8",
  "key43": "3Hz26eJ43Cz59cTik33bian3LZZRgzUftKCqVwiKbDfKCMuWnph5jepWNWwFXriC7E4EiinoGEiVR2q1HAYP6ehs",
  "key44": "5kKacrFgPNKXwkcdWt9UF5vddMhW3BB4BfateA4VmVncSg8QBJCujB2pminXQqHS5w4m9LQjxpT9M8DcBWq4rgMs",
  "key45": "39yhKkDQc4rVCJoqFuGRVzNSsXVY9hfDbkpv8H9rv95XTTCnoZmowwAAHLNEeRCCg1ovFMFPBCfkA8vrxBm4eR9d",
  "key46": "3uhxQrNBpwuQ3LqaZVy4Hq6Lcyfxnzv4kWhNTUDr3YfKmDCzS4B3VQE6pm6JUkAb2GX45ns8nXXg4THSRSHRFeDm",
  "key47": "5agd429D98B9Bbi2rfgCaLMXf4pVvchSqNF8m9uq9swQJJN3LcZ71MvHZ58syQPkBudgCvAjbE2r6mV2AbgnBJCN",
  "key48": "2AsxTCkEm5zgdhd4Zn4imxZ9UreFC1UypJ3nXvzL4Lo5RKyGkGqrStjiJtmciK8TQ9yWjp846sieTd4WLqiGezMa"
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
