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
    "4DPTeuefy5zTMv8sxK7Yf6JVEdkJoSxVztvNandiENkEB3K7NKEWL2iufxFHMVgW4o8cSgKx1v362YT2d3o1LwWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6H1ZnWMd7kUt2TzyomSNcthFyJJvgtvaxSEUetLUaNEwAN6mpd2aTSiFofHwra1Ftva3eStbuP7DvuSv1kSKdA",
  "key1": "4KavKpxoZ5WL2zKCkZ95CeoBJXuAHJkP6wU4K3ATGeRT7TfyyEDmCoGNu9to9iKTfbnp4o97xLJbi7vnrYucSbJw",
  "key2": "4SpsGNCNZuJGmvEgWsXDdPf6SkrTMvtYGVUSihGtYwcvJAbfDdvt6oBDKWjZA5pKCC5Rn4GepdFyuLp9W6LKLLis",
  "key3": "1aUrs7eafuKdDtZemDqW17Ktv5CpYp3SfiEVTPuMt7b41man7YojP4X7Lc5td32qFLhXRxcX7gogbzfEUeUnDUe",
  "key4": "5jTiouUmLDDwj4amGaboaQuKjbvJ1hD559ViWgtA1objQ1dbtAYqmdPRyFg4dhbAdeq6dmRQv5Pvk4vbGLCgFG5J",
  "key5": "3NktDsXp2DzJCQFcynZ4EpfF6ueMirEBtkJyzuTXDd1BZCh8k7fgE2mdLBwFGk8VjaLLwNEa3vgMCMGzs5MySn6F",
  "key6": "4jYe8ax5B1SYzsrJuM37nm5tsW8BJzmC7dTTvVXaBwvEf18T4pWX8FDQNyr5cQU6yJhhiPKP9SV6o9xWLt9y9Q5Q",
  "key7": "5E4yXu6x4bsdSnvDuZNge2QPoPfCZSCAd1mrXmgTrm39QdAhVJMDov8vHvCADgWoLdshA8GPsHcD9ZnbuXuhzJDp",
  "key8": "SFooCh4kXAJYB8Q77jNdygTSQsoQtRnZphvJ37EZ9Vmi77EHykCGNLGH5qTztmnWDQwEkE6WWkwzD1yPfA4uxkE",
  "key9": "5uowwdhpo6wimUseXhEhGCuTX4kAnBRvxS2afp7TPNGrKGkQbfVy8nhBrAfYktxYDGBzUrXvr7TURk1CpCqTvfCg",
  "key10": "4cwJ7ZmTgpdGiPnVCn5pvfAoqZmVkhgR5ZrKYSiAE3GEK4wQWZyEpxhrNpuY3mmkQJtUuXCyn9kQ3uvKn6zNNKzJ",
  "key11": "2M3j6u6pikotMGFit8PJmgjnUpaxNwXkHfFgxrjmtJ3u1MBb1KEdkXN9vPud41iSA3hfSuTymxS8kAQAhQvxpLry",
  "key12": "5WamjjSG1jH84gb4mghw9m9pBXnbTgE1bBzSzPcTgFHTdASWvzLwh5RkR8H8Z3pgSNLcET1RVXCThCQm5Mkp9tRr",
  "key13": "4CnBGeYLX9XEbqm1uPdmcdxp2vDWvmMk4CzgMQw2qH1XdABu6zGMcCt1zrw1oK7wGbsipDehgcKEcZj24JZnHMqr",
  "key14": "46xQ6u1vxNXNVqyWoqX9QCDptfZspQrppz6g5CUTZvY8CxQQNa1UrzkgR9mxwg19ynMHZAaGqbhHyFSA6BDFzGrE",
  "key15": "5uyiLGSW4vCp2A3erMmHXxQxP27eYy6YXjdFcnrMsp4uZgHCZ5ejcZ38fcR7VfrjFEuGVDCax6MxxgkAay3SBkVb",
  "key16": "47yBpDJ4Uivax6xHkRrSwJYCqFLKc9DvCdK7hs9UaP9e4b5ZohGJLmNo5Ts5jCA25svYUadYHkLo3xZ7n1zVUaKE",
  "key17": "4KpLUMDdQCqvmDWGGyMt1v6TrFfYZ34f4LVv5W3YEfthFUF2L6o48EcXmKy8xU4uygGaiFmwhmfr1Zkqs4qP8d4C",
  "key18": "4YiFNFCoSFmVyPGTrJRAgosK8PnZtE1xk8UkCZHVYm8GVNUAZ1rngW3mwwmrs3Qh21tjj9Gp8ZoGs797qfQC59dT",
  "key19": "32VUVpoLhgfuPmK8mNojjbnfVr5GQKCteDYyA7ffA7Ca4GvHezsCJ2NwMxYWM1qrrNFdgHBnsefeSk1hyahYXtLk",
  "key20": "Cox2Au1C2hv5oP8nrSoUAbGtfmUWXxBcrXWvG3sYYRi5vCL21LNAQ7EGbSbH1DKS9H153yvmwttxHxk9PRQDBDB",
  "key21": "3T16dRC7hywhCCpaAtemuWCWvQVUDLXFG5agydS4aJCmTSzaVASvNBewHMWCAfAcvteayhSEq2AtXoVprMFHXVdc",
  "key22": "2m4LWv7nDVRv5UqgE8KNRdEngQi423X4mFNNZrEA3F7Z6y8jcv8StMbwQBtDvKWpgm8fM2zvbwCNLVAz4aojSQZ5",
  "key23": "5fffFQtyuLkdmm3wJNbvaxmaujqJmMyBAT1AE9GDbyJ7rsV4AJruLAtfuzh23Jih8WhvnKU2AhbzYEMXCAPSWidK",
  "key24": "4b9vGZR4wQKhQz2Uuv84nCv3iQbEMsC5GbFKCiusSXAjyiaVtyyBeHJxVR8VR9HAYh2gKrkaDrVuHpvaaL4Y944S",
  "key25": "5cVnvX858uScPafQvzkaEz7zuYrZFNM5piWzh7LNvzW2NQoWN5ovJsCUpbduAKaSWUCpiTg3D9PgwtZKDrWe9zdd",
  "key26": "3k6hBdHukuziU8qeC1vTU9oqwcti7bcDYDiFNa5Me6zZhwdKXPQaCiGAcySaYtAMy8zNGBCMJyJcxiiJRf6RFY9D",
  "key27": "3ZCiNiXxotBoskN64KZQmhp1PFcBGcLWLvDRn4gTdrLE8RwfMW2YGnJXM6U7yvJvyZARgpBYcwwKJyGyT3E8VGCu",
  "key28": "51UVjLHqwM9epxmEYoZsYcBqovMPmiSKocskyW2iN5RbMdpNxE8Cx2gnuaxAooLk8hAJYveDA6oKChAs6YvjWZpA",
  "key29": "2ukR45aW6VK8T6xrxKTzRMnkCU2ND2qYDZCEKUhHmdjT7MTk2PJWE197cGzwGDC6r44RB67SBZm1qw8H1RtEv8HW",
  "key30": "3dc3NsqTEAr21bXUhUi6YkLz4QNswenymYxzPV2geGVE66FNBXsfpJ4NWDJxP2UrEiC37cHA7ezvAiiocpQ9bxxM",
  "key31": "2oDgtfgay2Eaca513FmxgCisxDJF42qj678rf8gyerMQDMvhiycDUigBXYHmu2WFAWUPxDKhSReYyU5HQs18EVSe",
  "key32": "37brub5Ag5KndxvSauER7oD33xzdpK6YDhwoxnS21APsedrCZJWxrNY275zsHB3vtA4wgkjCpEVpYxrvohT3DQf5",
  "key33": "5zwxKBuAmzXKSXKoR5RapMU1DEK6pmG4xiUr45ZHHuec47HML1kNZrVHpm6j1y3Ysm9RNevsaxCWcFwiSucwmqq5",
  "key34": "4tzDZmjCVCcWcudC7c8s6RoQjAAbSyEaW82q7HhnLrDUEh4PKdQTLjnacTrErs98o534ekVP7JMtvaL8h76Y7nMo",
  "key35": "Tino5gFV4icmCrPo9zkXpU1ZR46BrTNuEonw73S27d5W7nSmBXeHSDfrreZVVW5Hjhe9eLpy5pQVLoQECFyhWRw",
  "key36": "5y6QoWj57W5NcyGj1jDPMHPVw7k7Kwh1hSM1pdhz6L4Kwvw7fRG5J2K3P6kmuGWxX6miCodYdda89kGMoG5Ym3sq",
  "key37": "267Ccnp1YTo12HmwMRnhQBCdZ9fitoca8YZkQWTNxPCaeDSJttX3VRLoccYHmbBbCutEPRpKNsFsRLsJW1A3S8df",
  "key38": "5cVGKLyUg7XD4HoiPZx6GTpRanjR59gBcGrYTo39VvNLkRvWozAL5mrYtSLwG9MAyPShKbP2J4QxbuCGE4dzn62V",
  "key39": "2m2NZyJdh3pfy2usSZfnTvgF2p9KD9A4TWYay9ZTf3VejC1877Nppnw39krYBrqYeJ38C2SZktwf2Kd9xcvsQkum",
  "key40": "35Dox6qSuuVNZfPxHh9CFAtKL4UcQYRQt8guP5mi9tp862Csvpz2fRP9EMNe2N7GycEwLezY7zk3i6Yt9cnFAGt1",
  "key41": "2YKRixwddukHbT3kUfYFQreGPfuNA4aSzNY2YreCfHEZM7B9zgzXj73m177fpgj4ZYJbaxf5FapvkWs3tsdxWkYJ",
  "key42": "4rykboPrbAwHB2QDdjckzPESbaiweKbzW3N8MUkEwb9SMTpJsaMFsC1AoVrZZoTX1SJKzkqedxXv9MHSRRqbkGS9",
  "key43": "Mz2BFqkXT2xcyWzh3aMmbLFgrH9q77VoeaE2enCr9Efy4sQtmzhKbvL6ZE5g66SH52dGto7LEb67hh4i3sca7dC",
  "key44": "3U1fKc7wj8iDyrpKwBTSLBb642XtqNg6PyDL26uQcCuhukoYdk3eRsua7A9tQijDeRxLnN43ijXXLoZsLdvehJkW",
  "key45": "3LnY2CwvsddBNnDRk9vN7xQidXJBmuEc5uE9AkLDmWfv1Ne5FyGagqfhLEvCLxDEBRSkptdoQESnxL594t3k5vF5",
  "key46": "3J8ukkEhogYgnLrS8Wq53umYzwUvBjeNAQLhC4X7fYPAeCW6wbxM9rZruAjn3XbouoXgRDuZvv5iyVNyFBkvEpiN",
  "key47": "2wkgS6Wfkf4eHygnj8tncawur9qHDWQh3GBwxwC1bTDAnuY6SULDNevThdTfkafLetHzGxgNNGGTL7Up8oGs8hcn",
  "key48": "5ducqPCb2SP2ueHpE2oaxyQxYzHY1audcs94FqjPWr1v9LXuuht9Cn1rGSGzvGbn9BLb4kPt7YwyshhrYsqgFKUS",
  "key49": "oW2G47sxrC27mGuHZQfabWo9JHCz8XiVgBznj8uvyNwBj6xjvq241z4gh8rhSVoJrVm1cBSzYjsCYk6S8KVyU5Q"
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
