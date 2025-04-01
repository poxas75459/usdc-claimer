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
    "jSJQV2nAonnhPANBbX4F9Y6t9B3JT1jsjMNBBrZfh3FKsda5EqTHy5fus5cUNCBDxhogsGQr8BnxmoYXoP62TSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xbLwwQPWg2ztSikH7g1D4nfeGGytG7wLJCAWVoM41kVRgp8wAaUdRdQtBYMCNoAc58NCwmMuECtm5sidoW2dNvD",
  "key1": "2wiAcvFW5YFHUxR3a1Z3DX3pPnzmGJ8Y8Y7TiExTTMy9cPp9DUcdnEj9cA2fsAr1kxrFaeLewCbP54TWqvCBS5DM",
  "key2": "2QvewhZpt2UViABLRg63M3KNzRCsqhfdH9brsqEa1EJpamvtjKuMnm2ih4bonQK8ewcfphYfKhbfyHincU9PPfZ2",
  "key3": "5zZEdr35bpk79GraYvXKMY82MHtdE2QD5umnMQQWNKm8JJZWxxpA5BcoyhRn9C4yNKuy5PkzjDH7pu9693DshdCg",
  "key4": "49CjHM7xKfaKLDyMzqP81A5AwjmnLW8p8oLqAAgooQbJg4ipdKjAw256fahq1csejTx3m8LWNgo3r7txn9TeK6Xk",
  "key5": "56Q8uvVuKCtwPJpkuNxRsJEDogtNd3UBzoacu16q5E5F4ZsxJDcM2QVA4gmyvdj5HRds4fUF57m139aDK4dkrBj2",
  "key6": "hMaYR5u6iVHYdfdGKXckNRee7YfeNXNBt8eZzRyngtWnJt3nvrXEhpLD1P3r1e3mh57tyr8qGi7fmTPNy81ehza",
  "key7": "UBUQq7wLq2w11D2oZ9aT5zWSKFhobgCKVMmxXRojoFz49o2d16jB5cZETM4DUxmKsQW6uzJnRSDMpDHX5RU3xT7",
  "key8": "5ceR3MYw8LtGTR9SBAWAJ5zAvikQZBLXaWek4DHnyevV2sp84ecunXhhR6Y7b8VVrCm69x4avvjHSX1ZXamQTQge",
  "key9": "2FNqKB3HfRE87PTCShTLcWG7uRByf2R4ZTacEnSL4AArRHZaReWensrjnobdLcn859pjz7NYypan4FXYt2YVqpR4",
  "key10": "5Eq5jCuhsuYQVycerjXf7QRn4LBynKiXjMue6Q358kq8uXEKZzDgRfK2d6NngatypHCvubzgZBCvGwES4dmJ7R28",
  "key11": "5H4eFrGu14q24QsEitKdU6L7TKbHhHfACSFJ8hnKEkpFm23UBGNCuHE38Usud83oNfRMhNJ2U2RpdvtL8DWHrGAy",
  "key12": "3n4MAZn8aEyAU7Nk2gXcb3vMFsMY3QvwBDQV8knCAjvuoaTFLEgxGvR2YQ9pxh68qhLYaV2RXprBHoznXAHY6Mux",
  "key13": "5FanRs5iX7oFXaSZm3YqQVmHoPDSzKmr2LSPpmNS98BNfQs2idpydo4RE57a68onbMHwiDN7Sr35cm8SiymL8WeV",
  "key14": "5BmS87prjoy5WgsEDJVxct9AVrn1cZDG8fKM73EFXQsKbzdYzZwu2twRNDsK39YyG5MvCYaDXrZuz1gsGodqHHJa",
  "key15": "596vBbEBBrJqaBqSQQVLrwQqm6HzmnHdwknoTck24LsWsA7fQdEdd4CysqtBuzx4JnnV4Bph1Xg926yczy9q2oog",
  "key16": "HGcr897NSMyPiv4DNDpst2X4u7jX2AY1PjnN8ADhcRx4WfYecWyxGr7W9S2A8Mf1kdpawDRUW1SRYCWRMk285fa",
  "key17": "3WyNrNnHqJWRubjCZzL65rLnWChh3yMhf8ftduFEbDuygMiuAo25Ce5GEtnV1HecXkvLe34ehfWHHANHreb5BcjN",
  "key18": "5363wC9xUNxxpR7Kc1YvnhMMaPvi3Yq7qumXufD4sSY5AjLbmVx1WWZJPw5ByP8sJBX3wNruoSpohp7irHn4mP3e",
  "key19": "oyEz7S1Kmbb2LDkmsfaeaC7gvYTLxSiDL3JoohfyAAKuNAL7jS1iS5PcaqmMpHyETy2BqPkHmPiRoKWb232y2YK",
  "key20": "VqVKHTV8wgNZs33dVBRjhAy28w9qhjN5n2RBmBh5dbsJLvfVpNp77815ukeszQk5geq7pxBYBeCu6fkPQ1QR4wx",
  "key21": "kk6MTt1cwgHQEccRWNsWcABaQqGDi5MrPhRuYcPsxf2Vur4RgaxTH8ZCUGgWpVvCXgFuSkDowWMgRHdmd3m5USq",
  "key22": "4Sk5XH5WP4PFr9UWaK9YqdtNbMc3SZ9VHratLWko8hNZPu4Jj37JoF9prCB6PirWR8iXNxoCz4G33kVknUp6SiLK",
  "key23": "3TnHRPdEBnCcky2fzpPSBQwPrLPmxG2WX9BKDogdRND3BgFTp8WZAXWppGXeSEX6iKu6iSoYH4CyLiupoLNnLryz",
  "key24": "3JzexfXVNhsLdi9u1NgUbF3bTMhJevoenziYJAQgnJ86m3Fq2kJjphZcXarsq2sPsSWk4qzpmKomPtVaXggsZEMT",
  "key25": "5DnossMhCUcDLVigyCPSXkJAGjDjauBhUDazRX41vH4shMumYt1eR8hgDk6AFQoJEVDrtukpKp6bex4xYBXVFszP",
  "key26": "3hnrXabr9KWkT1qH48tqiKWpnUkbEsg87NFK3Qnq2TpTCsFHT5G6Jr9JvrxcXyFM1vQb974zLvTL2ku4ZW7jEza5",
  "key27": "4JYJyDEMzvXcqYqPTuY9DVRkJqeZDWp7cUForxnsQLuoy8pKCiKHXBEy23AH42xwhVzDHaQwjyutjGY1vQfrAJ2o",
  "key28": "3sCnwMGdoZDD1nK3TbnUcZEy9KxPmjspxpKAMNRnjybHj6PrSNBczk77zXGuPMtfCdnDL2ENvU7GRmELvDmX8UG1",
  "key29": "2cafwGqJGLWnoMwKEgxMLoUuMUTiys6C42YnBtwDesuBUErLnQ26unpgu1H1Tx5qo3k3QAnjPz2nZecVqSjJJKJ3",
  "key30": "22zSh5vhyEhYdCUNcXRvrJA3Js2M8ZZ9f75rC11BUh1UV8FFZnWU62coJgrvFV4cJGP5uaSMdnq2F9VXUHSzxdNT",
  "key31": "2wGo3Xpk3ZgTFX1csmdE9R9xFyahgEvgjKoLwxKS94CTPZZZScYHT3hVuBxEfo4xE3w94zuCaSjsUT6iJi4jqZdz",
  "key32": "2qjfyKUiYymFyohLwYykL8FHrkLuNf4t8XQiZxwULeCZomLPBbuCbRgzjbD5WdGDpsVK3UdjQq2U6DYPCaVVGrnh",
  "key33": "5xQM8zNPHJzsfLSVyYCmJkMvXi6aQ7aqkCjGtyD9NeySXf6PoXdtfdxpSRtLixTdSF1xVeKrapqcvYGoXqf1Sxu4",
  "key34": "3nEz9iTGfNDyBfB9yFhXGfTE9ZpoVMNH9dTZ6vPQVCEMMsRSEiDDWKjHNGDdCzzeZcaTDTa8R8f5Zt1A3oFq5fKu",
  "key35": "4BSTbT8YnBjhz5Y9nPt9ymxkAnxVK39ZCQsP1y54UZoLHZUtUsqHtZfJhjk32xLZPnpB1vhSFaKSDyV3JfkfQke8",
  "key36": "2pfr4qunraZY2j93RWKAJK6PZePvYgDg2qYFHdCvF4qcbFi2weTL6cW6u8GdZQhkCygbKFq96yRVMkNt6VwEYL19",
  "key37": "4GXxYcamHdCFRqApWvgPwU5iNFMgjKAMLm9gN1Z8nHVDSgNNjhvRf98ehqj6ZS9EgaNKx4dnmmAvHqQnsTDczhj9",
  "key38": "42CniRQuYThYEwEuBCknAWa9hKEdrhWjCEbc28iJgx8egNkbau44LfYBuRpHfJRZFW2mM699rWqBk5M29JgoTLaq",
  "key39": "4JZp1MGfPPMSx21TrDMZJ1uhYGdTrbnahz8Cz9bAGC1cfEDQ3cj7LDPMhrrwVCPSC9heRcj3GAinyhkFEChVqWYT",
  "key40": "4UQkTJ1iubqDfyt4excYde18ZkHjejKP8bexB7GXuQNZzvsKa2AFhC2yvpqXfUjcdwikXBcpktfrF2BZhAxEfU1f",
  "key41": "3do81ik8W3o9evmLz2gLhfX889gHsguou2ukQdBv5ngFtKu3tbV9mTQT2L6GgGmCzyeLNrTEFQJqoudhWyKNrR2s",
  "key42": "5mTZv8DWD4tV1ow18svHHTMZ1sjL1p3KmtP7e2iXzJFfCR6J4V6kcxfMxXgumtNwhezqJvhWeTRyXZKL9gSdNqTd",
  "key43": "42YsLKBURyRYiXP1abwS3ZJZ1KSQeS7XZ4fjU4J3vfFdydqA1r7KtqJXH5sTN88u8jZDMNmbTZn7mDpYrdb5ibaL",
  "key44": "4rHt1EANXqPpXJJwZb44EkRksmyJLvVR28vaP4AtTmsxhGsjtFEgXyiK1AqNKZ1KykyyDtg4gtA77SZ22uWRku7E",
  "key45": "5cQSkJrnSYiMhFtkZ7K95ZL4XfBs2axfXSgaLWiakuqzhw9PwnxnyYoew5M7GkahhSLXfJ22JHJhTxF2DcAD5cqz",
  "key46": "SXCKadYsQ6hFgYC9v7S439fCHNMZkGipbys1MK2uAa9thmdRvRmoQJXx4XFK5PztzBSy3XY348eX6PxtxBhoyWk",
  "key47": "3eF9U1N9MpqWeyJWCXmXKmtBqEnQV5s7hmrCFFi6jxUnhew7CreM5LFb9V9H4LzWD8pxszuz62eXTrFydaACbguY",
  "key48": "3g9471cmyDPopQ7pZEozx5FcUwozihHF1qKbwgy13z5Wp9o8ykSmisKo8eShz8Gq9yAEEpJKw1YAxqZWZte7xu3D",
  "key49": "2oHkz6m9o2qzgdwFVDY7TDk5DRdaUkLyq3rscpj8dWFPw1rGZufgJnPfCNNuUSU8GQk7CBFDR77QSy9NXoU5b3a1"
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
