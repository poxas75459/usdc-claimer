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
    "5kBs8bwsULQUdCjQ5Ynpuw5XsudSy64iqrCxWyTRfJqdR9qabV3i6zv41VhFXMCgpkeHSzFJirHXeMrx1WDVRfh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RbnRoEitAruKffPfdZ97V7P6vWpZd19bwspCH6WcTr1BFAwtnfqLcQCxPMQx4GrJ19HyEk9kyQ1Ygvp81jo3xro",
  "key1": "39RstkCMNYTFbC5kdfBPhPPNChweRc1KPGUbAyrUQ2seSwgivtoCXwveQGfqxRqSTEBTFPnPUhbo8yRkHZzqaJsM",
  "key2": "5qMkqenBNvVR3dqqzuTFodqzAphmkSEneVNeGA8ukYuUgyz54cr9HF8uzyp18RyhHfikqu1a85fT9PoHDk4MeWEQ",
  "key3": "2UWeHxhfva1FPha2DY47WP4FwMdy5qNyhxqx1thLERCKPgBH8AxUVUN9BAz6dEEV4gkfGuwM8hRBNVnqokAJnFmc",
  "key4": "agWNdzAjBZiBMwM9esARzsCbmZ3Y8EqnhsA2nojEB6TSXQqnVfuksNxPq49rd95tdrbTLk34a3TmVCoviX5f8np",
  "key5": "3z5kKxC3QoV7qeAwPQhUsC6AqL6YBxi981ag34HZSFGw5z3hA377fxm7SqDFWF1Cu3o7iGQ6BAvSoTemLLEE7iVy",
  "key6": "3P8pzfrYjek5b57SXLpy99XXWWWkwfSEfR85SJq3i8FQqFY7fY74KaXdPXQTfbyWBZDADpNipoU8WPcBpZnRGaMa",
  "key7": "3hFqKgCCHdwp9G8qt7LSc21tkr72g9KVY7dzrTwy2eTpC8EuHpqGRuaeDfAAMVH3RCyW1T6n6nFFsm1DzK1T4pkc",
  "key8": "2msoHwWx1p4ZrJ65RxZebt2FsGEDSVrtMjbCgYPwt8VZEheniD5pzxeSU7ZcYWUVmWMahLs9GXCNYjsK6JQGvg1y",
  "key9": "24P7Y17cybFHXHiZnwWJoThHXMtzwoFLrRAQeuwjhDhaj5Yjyhzhrc7WBp2fdYbe8tRD225XrzDuFr36CoiNbudt",
  "key10": "56RD9czUsauGEnWmTEWwBLbMXs9pY8tyVWEp1u2fqwbcHhb88XMWNPGLgxtL113YPYGcTC9dUnvmoKAgYqxNzXA1",
  "key11": "24zUaKbER9dRb8fha8sgVMUoD73fUkaDUSUwDYzJsuedfR7VJ4Wsx4ATtkdMmGbgoSvAkS75NHQZvQSnveBnhoRJ",
  "key12": "3LiWaT6qQW4eoRKkUw9uKCFvHcqGpVKRuz3MiagcMS1LWYJMqLaoUhGb58xGoCAFC45vk2dmpSfkFimXR4GhXiHN",
  "key13": "r6gho9ftxRMBQVZtbGXjttZ25QsiYZu5oj5MUrmJN99EAdFk7XRz5VjYW7EXDyrsooHLt6gW4maJCjPWxQ7dUoX",
  "key14": "5VigDM2RxNSATq9nFs72KmdjQmBi2QSB3cjgmCZT8HRwdbu8dg1Et7VPf13ehNfBumnWABDwdmmCzdH8CA2pzQwZ",
  "key15": "3Vw2te1AdqWghNcfV6WqJ9nEub22gJt77UqQCfGq3LbUDRvh8BmfAoM6D4MV1dUZ5grbbZrw2fk5vYK7LzBWfgvP",
  "key16": "4vPKpCyPDG6NG6Dr5nUQbiate9K9JGiffwZvVWXuvRRc5xhiC2QAeAbSf5hrFNGRLXEbCs9BHiHYNsErZu84v3Wc",
  "key17": "5sozRM7i8ovjzZaFxEDCcpfAexec7iVSK4XghpRojhTKpnbqk7kjrhvEdycWR7unFYWtBwzX7ATiwavUYWKorTEY",
  "key18": "31DihosCynGvt7qsfVR2QkwejScRgzLfdXDsoh6syhMJDVi4Hc6zAf8EPQMPmunHmqz3ZbyQq6iMGB67mTtrb6n1",
  "key19": "47bee9u44dBHH7R5ojQwPSMXfk5s6HEyhsjpnQPjy2NmPvfA1skmgRjyZ2cc3VtW2cWd3vbWD2YbjajpeMLpKZmb",
  "key20": "646znf9WzPnKv4FvnLpKGKus2TvX65BxmMpD6WoqvxBUAFaCTzHKCbRnhpe44zX3KoN9ksqMkkvHf7UDfkcYaegN",
  "key21": "2iA9vB54hgCwdbxrv7nzVQehfzkpvCejKpQE5AhLqDhpM51Scwcq6Scu41arhDvoucsEVngKyB1CfSzLccmrM24H",
  "key22": "61UsEsQcskxrUVgfBY49BadoDLnFQ7QviWRE5A6XUrhEjqPw5xeTW5i53GNnqK2BFcqvY368yVTNGWwJnesqcWXf",
  "key23": "3yKsXzqYsPiJSptFbBELDZMPQMZnqqN9Uswek24tczDgNjXuRgqp9xAQfQhEms9sbF98k7yR7TTE2UqZ6Bjx7YEW",
  "key24": "22zcPvZjRMmLRHrdWrT5Rr2Gr2mkYhvsDYt3UWf1gNp8mo2j7VRp95TZPSDjTrxK913nLBWmWxChvmyUS1A63Rwf",
  "key25": "4dM4XAFzNi32Ai5yn38SkHET7rftSVkXY9NwJpYvXgzuXU6oFuEVZdsNurCJZJ3xgZwny4GqogdQ8tCNyp4gDuEN",
  "key26": "51zdsmnkGn94o6pNWAncTKks5AoxBz9CxJbJsbMFfQzP3WRHuuJXf9niFZRBGViS3mWPF5zDMsQdDhehdzyfZ5qd",
  "key27": "5QUc5ATWerKjGCCDEooC1xUfjaPcxYvXUf9UDzWgjtgYox9eTRrvsHgjHV8uvug46PrfsZkFSU39N7MJAbX8h26H",
  "key28": "FkAcVRXzDXeVQ7r6H34kRn1eYJetdvy1crdVQ2ASqwKu2Ygdh9ywawDVp3jKLqGvmE57uxjsiEWSmwhQVfwzGfW",
  "key29": "4C9saaHSh6EKtbcEYeRsHSrhjWb4LyQsLBPMLgVi1JhjKXUM7CE58TRAdYJ7BkWEytY85HQejQApPfWxgYfKLgfz",
  "key30": "37g9yzep1A2QuCN1QpCmUFebd6eh4F2tiwYuobehrMYTa3e1dQFvFAKQoJQdjZxZWVnJzHfFSCkVxmFVAFsYoVwR",
  "key31": "4zhJ8cKvJZyVci6eDnTQDNo8g47sNVQgH9vMMTZAgKRh3YJna3teRuy2yFDYakFsi8yhky9e65xkKuGHEvwQYmqc",
  "key32": "45SHjo1tSUjA6LU9e1ZWER62UC8t9WVUfXe9fu6YZGSSH3pazLwxHrJgMHN6yP3tKbtaJwKAq7qF22ej91vXZuUE",
  "key33": "679nmizmZyjCtoeotH1zrDpdXtWSAxjKJLYqv96fv3435KJBQmLHf7Z2zXv2k68zNkVQE4aiLb4mu9BQywotTunV",
  "key34": "4vSCKz3ENYz4zuhppCv86AE3xUhEQaR9k8yivec4skdkPqz9tcm3gBzxJqEAg9rcKmAJGzkM7W4StwLqWdoLUKyR",
  "key35": "H1wJdE9XGuQr2RKFU1MBARWKY1VJMV5snvX7ZamdirUocazP1voHAtNHurxkk7Wva8uhy81DrNX7BHJHbok6PVF",
  "key36": "mALbQ8LaWTHHubjetKinWscrrPL5Txek7KgGbwWSrWre6wbDFauxyes1qKmjKUCG1LdLXvDvkTDHuLXhMwrdkCE",
  "key37": "U5FhH9Jj9d2yyihohetmenrBDjCoDqK2eBipJ8HZMfJzKD1vDws4nXgEZDrgFLa1h9WQ9zthAGogHcQU5ZefBVs",
  "key38": "5KnXEUyTrtjBUpBmAn64h6xKzWfRyk3VdSGGsgxxbwvQPbvXXjiG6U4WrceVocNoxr6HC7UWmpxYnhiProKNJhi5",
  "key39": "4CYr3m4pQjf75mGfaAEcMARAoL7x1fMmGVsahTQNK3svbk2LSWGbHVgtaSmoLgTUq5H5ojWANwPBC9sJGj1hgxmr",
  "key40": "2EEzjxbd7Lj4nC4yfBaX1wZUKLR3CMA2ySu8idKGJPZtZMggxXvd9HCbgEAaUite2mPFBy8NiPRZy869hQ7b5Lxi",
  "key41": "2S5WP49k8AZppxa8Y2uaMqZiioXq5GAFXwT5AkUiEaxuwBnHMYspQYuug4g3ThW1taDposdWN89WFBGnTqvvUfEw",
  "key42": "3xXcrvTcdXHj3cVvHegMbtVzpEJrHFB7RVSToaitaBwTK6FoaRqEhmhEN2w2oJZnWhSJVEFHAGMvtkc5jZhVpodH",
  "key43": "pejDB5Dz5C3wrsyY7SJqbvnFN7jTHaiCNa1KtYtkr6nux9ohUvdpWwnvWYiLmjctuahsQFV2JU2v1L21gEPnc4E",
  "key44": "2hecpKuuuFM2iEesUnpAdQ4yULmUMu8G1cNqNgeBa2TT3VN2m6yZayZzshbmYgoS7wr3Bbzh7WMm8YJLEvRQ7eVa",
  "key45": "5efEG1NJhq7ZL1RPJ6huYhYwogKuXvyuep4f8j3fs4ArWqu9e5SpBJKFXKAqYYdgaii88giQ7YFExKSNoiGLSyCW"
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
