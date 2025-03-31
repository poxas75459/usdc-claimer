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
    "2JeGUtB4kidhG9X9KnJLkGpZ6Gm7M12vwY2FFmdw1xwJUR8FnVypA5Gnqj9WiFkZeA7WQ32SLgq9aBg871NuFJH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JXS1xm1gzrLzP7fsQ6rrtv32m8oh5R1bpXWGJKAJUFTP3xXHYTQRWZKvaA8ZfZi4LY37G7uVEtcDFpU4euvbZKk",
  "key1": "2EbnPfSV6v16PEADXq36dBntyvnme2X9rUi3Px7EmxtLmTNpBX5JdMuA9jvnPRyqAPkKbtU138Q4yk4nXBuQrb7a",
  "key2": "5Fkikk7B1ucXbL5Xngy2YYE1shtkz461ExyA9NrXdgUMWMsM6g2TDGPuv3n9BDqJSjtQYCK8kMLk8rpLXniCmSVh",
  "key3": "2DMYVUHVXjPAhCAfocSvDFkrk6n7ddPDjvwnVadZfmLuLgopoyiv8ckUPWYvuPG5MC8RHzxanygoQiKE3h6HB8Vx",
  "key4": "5ckuHaTqxfXSRKs1rdfBNcjSiHcDuX87jDu8GmknrtXyv73sv1EtVbWH5t91WJuze5nQPP4qGoiTipXHya6VBbCG",
  "key5": "6ciiBUX3CEoMk73SJ4MJQVsnkQfWMoMwKSHJ6j7wYmfnpTZ7vp7xFVq1CAcpX1kkosDFgSd6yx3JP7Eof5E63A9",
  "key6": "9VJNNEdFLcZpFrHxrmxL2xu3UNyqAh22e8wmZTNM8aePodo7AzonPQ3MucJD9vuaZpec767WrohtGsAXMEB3EBH",
  "key7": "31BQc2T1hhTRB9JeFtNFSaE3GSb8CNtNfVTWUvJG63Z3h8XDP4MbDWUnLzUBnevvZBUDnBqvfekUdQMMKk7Ziktc",
  "key8": "3w1BBc6xaxAuZDdoXi5Z1BTHNHvu4bY8LZZBd4tYvcZCge8TJfTuZtUt8WcuFEZqqND6HArdv48Sm1RH6YP8fAiz",
  "key9": "2rYDZpS1PVBsEoM2BJzFcPGWJgp32ekmTDJ9uPcjggpd5Gw1brk72rTfaQYEtXJhpb9Kstj6qp7L5wV3hTjG1SET",
  "key10": "2sStrvKrQsNFs9EGC8XjCdvaMCdJCEoE2uZ7jbt63ubtiSu2sKR1JP68NWWgxZFkzRUoQK3uXf44dqF9faW1L2vi",
  "key11": "3AyPbQrGgxkpHXWoqpegu6CFcSvnrHYrwierbgoJowFN4WguHQBwjuK4BiJdWmKezhZSeNcztrnzuZB8Tu7afGAS",
  "key12": "5wYD9dpJFT3rUSJQzqx8BH8aMRcVcmLdvgj2sAFbpCvSkJpfnCBXZgeSyAqwFgNLvqMMkXsbya1Cju7hy74Kr7kE",
  "key13": "4WBjTXffrVdJ1LcVURTNc2BeDQ628zuRxDxV2kCJoBLSDcadunnD24AUkrebZ195FzeFf1ZCPBxoNYeQFo8TPyYM",
  "key14": "5sgCdfQiLkreGpCHdntqktKBmyBgUbhWT3R9zU5HCtHaAvZUbgMaTWNrHS496p7cJMaDKyXMtfCvWPBRTpwwN8X9",
  "key15": "2Peu18gANbYxTo99cTjDp1YwxPnQUfr37uht6TgRTmFSURhSL8petwCg8WXk3b6yHEzpDrXH3iWu3ZGxKc6NiG4x",
  "key16": "5vCoTZTZgqd5wE3wSRFoGMDeHkeUn8WpU9GiAhb1vzVEJuPaYx5tLKuRY1k3j6VfbdZ8avEFxtEaWCRnUyt5JaoC",
  "key17": "3Uh1GwEpuAd2sGDqU2F3EPoEhJTxKpjAa8gtVTkoEJwWjMCdi38zekAUCgGHyghvdpZs8gwxT2TDAEA2wzQHV4k6",
  "key18": "CDjUhASYfp3exRTD2BTLcZBxYaQLySU8oNSojhrPxvvESoaA2DqosEXuvnRzd2GrQnbvmTDwLby1EGuLr9iuKEL",
  "key19": "TpSjwRkxjQRAfDmUZ7yrmJip7sWxZqNkiPyYWbJNU7Skcikg5soiwpMD6mp7YaaoFRNGBSevqD8qmycP9UJxdUT",
  "key20": "4z6PHhgTR5NUjKr5GkYCqZhTEMKmRTwGPJHo4ZXGjvW1VYGJSCn3riyGZHnRrH7LuMijshkzp4551RtV9vjpmVAn",
  "key21": "2Qxd71VbKriMRrK4Hb7bJ38kwYXTREL8NvxFFGGXuHGoovSScPKP5MBeBRS4ZRxg9PXYhuYdoKyW4GcKQkvKXrtA",
  "key22": "3C7bvDtW5NYKwZiJa5iN4V2kvy1oz2b4Mx7R6gv3yevK3h7WYz9fYLa5p2VWumUkvDBm4rkTbpQpTBe7GnYazaCu",
  "key23": "5KygAG4N9AcWYGYMqXZqPJANypfRhtUXsmDqiJ4bDTuMBnPwkVQQ1NwCuvvznQYZz3snaGWGVBUNwsrTF1M1Kqbk",
  "key24": "544JSMtXPj7xh3zybYZsS7rGjAD7xsHBuE7mAUqPGV2vtD6vQnpsSB1nMQwJiHvDHHqVYNeXrHMHxgPFPRx5Zig7",
  "key25": "2DkMcU1LkJa7Dn1DLdyMVbGRC75xgaFbybr388fouDJsNMhekkyAM44hosyga7bjogwXu1W6YpjES3DmYksFVruP",
  "key26": "4MSpwV5aM4h2MMBaT7T61Zq7pmRbcnFgitzMaRADo6JXKsP8LuLBnmR6RXcPpLJdxqJSBj6u6fwSJeGNLt5Q6KZd",
  "key27": "2zpBR63ufEf7gyX7J7iPBtwajCe5RS4UundU1eCATF9WLtMQkkYnxRpBrXRYheDRM6NRARSyNYtWDyWucn72FEmS",
  "key28": "28FAyqqYQDSBDTzPLpcme9Me238spnMeB4Xe5L7pcFWfjYyTAx9GBJWAye31qmVnFczYV3bB33TXXpSUp1vaq5iy",
  "key29": "4Xom6aEgKouEFU2fHPatC4JLVkEhNEJjMc4FfbdCFzkFKrRhQu5vW6H9NfGxxrkyPDpXMEXcMPjRBBCijqD3cwai",
  "key30": "4EZw8DxC4Fw9knpe5umTmM6d2CqPfJmU22ZHYdV8NgngCkVpTAhbh7VMaju2WJCmsEgSuGBDUNYoFNo6a3N44wUq",
  "key31": "3uWkLS2ZvAq7CaA9D4nbGYQQrrqzRiQfo4W7i94Qyt9uCRyHChyTaFdC1UYkbprkeDGHYCd4jBc6cnywL7qusVWH",
  "key32": "3U25vviRsKXtY8gSYdp4ySVMYar1H8MnoGSy35eKhiaHuh5YWMQZZmMqryLiNs7qmA1BHissmKwyxYEnXYXooBdU",
  "key33": "46G1ApcnnfsbJz3AM8HaEyUePjvwGwK6VC5g6PHAHPomorQiS79wkfNfy1UawenriNTyj8JhXdwcwmjgHXoMbDxp",
  "key34": "5PJh1JREeGsc4L4uabwKnYjXbf56ccPp1JJjBKj9hr9v7DgZ7M3BhgJs22XWtjtvhohFL5cq23jSg1CmMvpKkHTn",
  "key35": "3XfJXUiSfjvFxD9FypXtWfieVTe5Cm6y17WV5PGL68sVXN29bKTzmYc9iudoqjXq53YEgWd9nVWJJfzwpE5gE2VK",
  "key36": "31TgsLa7tHf2Xp99g7KFrQSEmfMaiPmj72JxBUbTh3GvrwyD4CoZ6hjswb2PGRgzcVEmsyTPWA52N927jdpBgrTN",
  "key37": "53NCJUQotvdcooQEGkw7UEJYZLSjw8HUajc4yiAp6oDjPEuXDdG2jUr2GwjeFCapgJyaBF6t9dcbXmdqSpcXELZC",
  "key38": "C3pwANAKSNE7yLWqQmhE8TSK9gqFnFLLS6cM9kdkUneW7Jsf3AnSu9vLmpzZi7H73X3w1a4VfY32c4RFg9ZKkfZ",
  "key39": "57oww2gdZ4svfXkMrCKxBJf5s2Ya8Lqy51evSaQCL7vJuoMckkXNbVFGwcTm7FAcxaAtFzrgMGVfxWu3KX2CpiBk"
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
