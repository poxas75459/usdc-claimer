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
    "4RGBUHJUCfVpbxBixRia8n3CyE1cRnJNrpowRYN8pve2iTu8Yv7FVAqTy77A3TMmCmC2PPSNGdkF4wgJ2x3jNm59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aRr3wPuwTPME48ndFtFJoucwPnNs4er98UB6pTYm3cUKpgpNVm5yJJMyrmNqCRjnEz8LphmxBWAgiydWQ1gepbf",
  "key1": "UNj2X9kBHsaDAEnnxhcBq9Rp9rxDdgoMruVviSyDfyBi6tb17aHMwbD1eqE8cP3oqGXEkQMcFnPr7uk1sSdgpHD",
  "key2": "4NiFdZyDT9LmiptyqvLWZavmt4DsnuUJx8D7N1cngArsQxkFJDMz7N1uMYpUZPVsKHtzHhAJndZmtzjX9SkwS9de",
  "key3": "b1hPpiEHuW2QG1qBwwKwcnF1ubpZvykwqaRvEnrh29mgTFqzRBp7jsKqMsbhzVu1nG7561BRFFNHkyYCUxwah3b",
  "key4": "2iKdfgbFvjwzUwk27reJm55ZZZWHZJeY8G4imjQ88ZAaxkQnSPcakNgzLUcQA8i8DHgbJY7myGv6txxEHL5n9AZX",
  "key5": "2eUkLGfyooykcrPC24HjtMoDPm5WYmvEV7mi6xT351rogkvhP3SGx3k2ZhWgnW38KeM5ggLKigWDUxAHBLfur8cu",
  "key6": "4ht7rkDNnduKxzfnRDyAkVbcag83NGEv5WkdLNzBQcRTyK5a7yADBmaSZ6cMA21yZaaCMQB2W3sxya6jqTASXcx7",
  "key7": "UAQHEbQvt4Epo8pBH7GcfA8zcuSzV42AezRQnKXjchLNBnuWDtVFPffaJV96QntnX4z5JJ5fytTXwYdtUxa62rT",
  "key8": "GLqeEuTsZ51tWFovfewxHbFSEQu1KJNVAhgNLr3QK8US5UYYQTCEx3xX17ZA2ofwxSh7oED6dAKbaqmhex8qCiT",
  "key9": "4WCDZtKrGzedoE2qZHw5a67w3LLswsW3D87jwca17a3phhzuU6dMTR8gNXaPjKoXtqqETESy8LaxLQtRgCHdybcS",
  "key10": "QCynPh7zytkQofc4mE1bPiun6UNz9nJQ7Ar8LZGTzdU2pt5vYLscPXpY4SDUHEh9gpvvEpwp6QJNMMKSUZuLZiQ",
  "key11": "4iLZaPrjDv6e29nAbYo8Q6DKy2P1TdAS4aT4zYAzEYAbwcnbdKWeKRvE4W9SMxKZQVQE74FVyBGCFRq55Px4a3Sy",
  "key12": "4NAZfDoJqo8trQZhpbw8qQfQQDp8cEqXjrskojZQzR5vyKKonKbEqCYPc6HbHHWuuyNLosRZBuE6sQ6SK22q6rYS",
  "key13": "2131MPSfZBYPTDJBvQA3qUS9JZfW3CdHCYak9fXGR16LgTP6Mo4oXyLede3NwfDm63X6C2shrUaX61BFazcJjVrC",
  "key14": "47jg9smkTgWWHvwZseoqE17eDRXaVLtwYSWb5GJuHBcV8RB6Q5d3V29FQW3aaeZcHzJ95HMikCpthqCrsuUWWyMA",
  "key15": "xu4ssKBLa3HUQBGswpb4EUPKFvxh5DhUahdSR1YDvfc6ETUUwAzCbyEL695SF8GweqKsjDkxQcg5P38dhJGRoqu",
  "key16": "9evR4DJENPw2uKwvAWAHqmaN5s6Qh7oDRvaR9Y9Hp98YPsEd9FtK9Ks5vhGVgJ55iXNo9FFhkeaNCeZQ55A1raK",
  "key17": "3Z6mWc3Brdd2U1xRppWkU1TEpy51uMSLN9DLcdmEc8uDddU3iQXUyrxwEjmWgDyiMq8KHR3m9qiY49aixsbMWGUv",
  "key18": "4g9QQM1VbyRfFMk2WPxvhSk6HnDdbi1zyXWykLW8RbBqYoer9m7MD8rivMRB3jycQBDsThECQJDDE6jmSYrJxUfK",
  "key19": "4XtNs3MTvD5qxfFUgjrDPoPXgWJMbfWk2RRYPxY65oZV55oDT26WvXkb8k7ut3rweqodV9oegaiEVi8gD7NhyNF2",
  "key20": "36KCRBCrqYmyuF2rvkJQ1DGobvA3Gpz7zbLLGXW7AAdYxXxDk78JaJiJp1SrUwfMXAe2A9LwQYergHtv6aQJtpj8",
  "key21": "2E2o4cjAHe9QtyKwFA9iyMBuFNqh2cygjh2udAmi9qtsdSvXKhsZE1bfk31eVhrbBfa5mXDHMrGPk5UdM91ze8Lv",
  "key22": "4wD49uchdGuuwCMiJ4xxP1FmJ9Gwa4ZJHhsf5z4Mgz9JSdt2NWcabDNBWE6QP3YT3RcH6BXBjstTNBcCCY5E1G8v",
  "key23": "4ALDHqV1awePGoYCNzgRrthWwWnMrji5AEaD62cf1JpPms3EoXZUnPHcrjx6LALEk48GKuzeJ4gAYLw55BY3oyg5",
  "key24": "F9ia7jSbtLa34mgmj6bqE5quyuTnQNeEVXVWqfuo2kXsvMtTLJgJLQDMYyC6DJDmpFwQwhk4nccdEp2xGwforz9",
  "key25": "2WgxAVBjoCxtMH2nnK3198NThPrDQsyoDzqVE92NnChqvTE9kstau1L52QC6LRs9gKEJtEKbUrofcM5GWRKAz8As",
  "key26": "3dU8X2eneeUrvKejuAaBpwdiqhnAdDoJDCzVfVxpu1E1EEjFDb6cf2XcHeEeeRUMYYcAAkoaFUn6cCaJn9uxN2x6",
  "key27": "Df6kTf7B8DUnaSbcugebmFgMUfchtfoUZkGw7o3dKnQPxwwygPKWHngzLs7GvFCeLLB6XRrTD7D1SdXEHQ4sdQh",
  "key28": "8r1bgCWioHsS8v4krVgwjzHhV884ACrQpG5n2QmhRVjvYrB1WNLQDmQqj4GCJpAyF1DgyVvb2ofax8tYiSMKiRJ",
  "key29": "4oX89nTTZcm7nTzGDAqHAWMiUtx2XLw8uYoYjdMNbQQUjSz4JmByWw3vHEbutS2rseTabNgK1KbaUKWtFDxbk1mC",
  "key30": "55kmE7f4MuRSppBYoNa1KJPCDktSn4FRHQxv5omREMsPPZXDELSfzPxu2ojWwgTNdoSWRE8cVa38oed8Wkm7GmXM",
  "key31": "TiNK6Rov8cCE13ySrtvVjSTk79RaL2Pt3NAEWUqYKHnSMCEcXyhmshrX3d1XFq8K4eM4w5rMLyfDzLbAWL6KnYg",
  "key32": "3LgQmbo54XLmQZdniS8Lf77zihdWj3y4WictWiVeTpRgttsHn2xZs6J7g8GbNUBeK9WmnwPybcqvY76JLKHoyRkc",
  "key33": "2Fypdfry7m3A52PrvMdX5kBRQDdu26c6WWHArZFRWyvAAmG36vw6JUDX1TKhL2oPbQDd3owF6xXPLRtebUu4MgzB",
  "key34": "tQU2PFcW2ddD7ayxSx5giZCaD6niV9oU18vse3tkdHvs1rBzChQokQad3ZnjTPHdf8zdMzyxqMWAbDckVVMyqfF",
  "key35": "cki5W4i1Nb2PtxLTuArR8EvRjYwB4JUJEmQr8w5Vi13yyr8ePjmUqBWowakui1r7znukoQTmudmoEUy9w7q3xAk",
  "key36": "2NfWTMuCJRZsB5BD69TPhS9UA22fQrei2oAQDk9HSkfqQUrYqAWrGqZAgWyfWWJtRKD2Gm9qkkroap1JzvZjhXGM",
  "key37": "27ywuJ7wWV18MuJ9AWAqqNLTVYjgPNNMGWgky45pxDFEUqk1rrDT9j5ZckGA5JhPRgwotGixquWcnaxCxy2VDfUH",
  "key38": "3ZUcdnT7tJHGzHGAur7TAKsRNqj5txnMTnDtzWnGUdLyEb429wnVEE1HYcnKkdkoY5vnKrcTRWbSacTAFPzsMAL8",
  "key39": "uvfDnnZEwijdxeGsGrVieymodoGZXCuDtenVxEuVzGroa1fiQ2v9oThjTY5EExyg5cmpQ1UCTx2r8JuyfW3DMDu",
  "key40": "44Ft2jmn7vXMxtbMDuuyuxYUGGJbZBNv7DY9ASpGrcSJ9xzaCASHSTAxnnZ9JRZKu8yqnfT5KenQCXeZUcTjwYPC",
  "key41": "27vn2Uwr3EgV8TpGgkg9Nkfq39rs4su7Xyg15qDGw4SUgvEbz83GuDAg5qVheDLod9rVBEobWKj7p9VyrDsWRuW4",
  "key42": "p97Wvjw7sM7q21vT4yDJq7LbwqRbaah4FszbQsfcg2wyHVJ5d4LszSvTWxzYFTpjtwVJVUwr7cvj1mNgVzVZqa5",
  "key43": "3XRX7uEM2KAqNvv5gKTp5TAcShxsUvpKFXKAkS5dhDyi3aRfdXbsgtXXUszSXSPESzigiBnngTvNozhzWhJYrVH7",
  "key44": "2A3Bhu47gaAdj96FzEydGCQiF26CmZFLw6g68ipNShYv5tcr3aoMAqNcdCL5eopMZfkF4xp3rj3N8raU6T4dXyXp",
  "key45": "21MbUgKgpFkvQcGU9p4zsrY6YKrcfBEXroUp7kY5KPwWCAw7qbybtNak48uGUeSW2XcWySy6mhDDWvsPdZAryp6v",
  "key46": "4fdTY9RiFyFq2wtNZ9MNszaXvBeSW9ybd9rwjx2B5FMKc4WFBx3dNkCjooSSTB8RnSKhzFK7jkqNbkxDKuvVerYi",
  "key47": "cJ6j5SFH1etSpC2p1EyYc9ENyAJ9HpJmzpLYeyArduZo7HyfKVbLicEDdcuC4j2uWCLny7hF49Pa2pku8E2qN7K",
  "key48": "5mn3w9sd9EGZubR7AytZaJsBhF2A5STYBU8b5DFWNL5XfvojqxkbH8QHnFP3JzE2Yf2kKiKwXCeqFrpYr7u1v1eL",
  "key49": "3Bx4Lf8DzL1xJKyZ6UmXmFUW4zeZhpsA7YTknYy2wcvGM8fSg6nxUvvDAw8hng1LcXE6Zw49voDSkRedNngE48L2"
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
