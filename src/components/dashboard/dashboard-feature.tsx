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
    "3yJ3BaZWHzvdxmfcR4t2TmjEVGKo6TUen8uG4G98WeXEhYxgEoTXEbU3wRFkZaaWwx7Xg4kfXnkFrygzCDtpfAfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPwyFazXXncwFFErfRtkZbEuayU46vnZmnWvucPJT6UjBYeqpSQkvypjTZtrJqLVyvkwqeN6qUDjNQi8Yt5BSCo",
  "key1": "2av1UuQgXPhipVLeBL672hq3Tueu77vcWqHXhq8ckt2fa6fEhgy2qeZwfxzhZEbF1PNxJjJ4q5bpNXZHk4zPytQb",
  "key2": "3KX7Q7Qo1Qq6TDS4iQtgLRJjwwqiz4AFyTGbP9HGPS7itV45XhKtSZJ732qWChEoVZMUYcWswQVohMAojsMsDK7y",
  "key3": "3zahM3gb5Aw6NREgfALXwxvXndAFNiGDxxfgpnztcZn6zdv4F7QhSVeFNrvo8eS2VfSLyKYTgP4b8nqh98nAyuUo",
  "key4": "3qz5EMqsSrNP54rjnMi3AqGwxH92mNJYJcqz6CxTjsM1Y8d7fru7XyLkqSC4othGVauWUuNDxa5hvyTryfXv7ysf",
  "key5": "27BWuXJMcDNnRASG5VKu27o6wSZJq7VqhfJu4Vv2zciWEt8DgZ2Cv9K2V1EkeFmW8qnbWnkkzZpZeor7Vvojzh8p",
  "key6": "3Rp6Ft3NWjudzhTrxiAV4FBEoPQVW8gww4SzVHfd1UueQBeTJ8T3qy5AjtrHjHb3PnSXZv5pt6sP2GJdXXeRJaB9",
  "key7": "591NdajYtYaG8Lut3a7K76rew2qnskkGnDnj9HBKM8XVj7nrCXx2Z3cT9SV4gtZJMMuNGiGtjLDeXnDHHrRiHMrM",
  "key8": "2Zqs4UzC8VvYPt4iqQ4YceCLW3fkCKkXtv7PrSx5jU9gG4rSZVsPTEfMZ3hkCEqveGKvFaEsNr6hxnWkVefdYq8n",
  "key9": "2xkGEgXurbo7wsMrvPrieoLyX41Tmbyv1L8jEPP86Eg3pk3H9oWoLPRSVxRk91LnKYy9JWYRc6d6aDiiV6Xkdms5",
  "key10": "5oQGvuMHCxnQEpYZu7yqc3AEUexejJVRDuMTnFgHq37VieWCM5E9ZkMEbpp7UZ8MnP6wpW1PNtPQvvgwKS8j55Do",
  "key11": "4qLcV48g8aTia5j5v7dWp4JEwEUs689mjB488quNWsXML8wdKvcsokHzVJ8zwsY36jT2GWuZxyrhifxaHP3VPCos",
  "key12": "sVzzgmFwqTWbozc2hiopR2A524yBk7sFxquywPcDJZyQwCGFFKChS57iobdfquHM1x2JunnFVnFLWWpqxtZoMS3",
  "key13": "3CSyxUqg4NvFVa3fY97DsgENBGH5Azs1bWnGoST9ia7mxE2gMmn4j3hJsN5xUuMDKY1nM6vfLmCouhc6uAuqxsm4",
  "key14": "fC3bWHqt2H4c79NDh3HHvsTCrnCZYGXDGgTGJMzFEaCvTfHgWAoZwm4gnHDsTM68xE3wdGS22Mx8aBZCe16nmxn",
  "key15": "2Z2PEn6xqcBC7HM7R5Foog2Bm5SG4gamdVXDzEmzzfK1roV9c8p2hUGD4TxbSBd7iCB3JJCTmc6o9N5y4EvFxZqd",
  "key16": "3j1b4SJSEG1A8rRnMASuswzKa4EgxZ9vKiDFc2YRBacGyaGtHPavfJUu7VHnjFtTN5Tr6PuhiheZRiQLGR3Bbbf1",
  "key17": "2SGoRfZtchviMNvzjeeFcHRnLRzp2GDofLWiiJcA83mkEmqzTkAbVBfNdX5dJ1hZRQvXmihBRN6uDNu6mnfR8L57",
  "key18": "5CdYZRHzK65ULKMi6w2B8pThiRoNWSQmNFQdLGz3X1GPZ8it4pbZzr9rm4yaUfY4QN8t53fZkfUsZj3SfUnkZAHf",
  "key19": "3KBq6bJgyXAJAGiteUvNCuHw71WuT2CoNXWm6XrXCphdHmMR5zPLWmqCTEWfE2VDP6zrmBvyuzw6mMzf9h3QQeP9",
  "key20": "63eXZXcEae7iGxKLLCyp4euAm7ekCyCJLHh39x5sKmB4UZrDZXPxVCWs6Upfeg7dzm1vHT44twND9Q2B7pkErUG3",
  "key21": "2yxUVVrX1jT5Lx33Hnk2v5eptkwaZv4r46dbCG4uWems1X3fGdeiKLeDeB8K837b2cNYVyYonQ6MVFmE1qd8MoCT",
  "key22": "5jmLN3Zii1jHDAaYo8Cir3RAVpgoCBHq2HHVNRimvoJFrc5K6bHudG2tjPZfCKMYheY9fk5wo8GLwSQsNZkZxAGy",
  "key23": "58CKdyzgeA16hiJ7YemPZpJiVmU4AGHMDWmHdEybkUWwtvPtYKZFM9u4XmCEi8139dzofZaX1AcHPPnRbywqkQCc",
  "key24": "3YmrnBzp3XU2r4LaASdEzfo1W6uRjVhbdAUrwJdgMkq99ZNdGVK7Z71Hw49tTQnAPWfdyEMnC16nbg8MuUwSsaqs",
  "key25": "35G1K7RGoU91EbMiYZyXvXL2yWK1VVxphjDiMN8H1RSzBJLggxM5Qo7H6rmLHd4qeAM1HiKuAp26ozrLXP6JLXrK",
  "key26": "2ZxKpLhk9TSw9RAMNRkk1PpMnTVrmr7noeJuSMYcqP2irqzBsxT8s2XQBrpNWZcbrBr7aVMgXkDxt7jkJsU7m7NC",
  "key27": "37MErahhMCLqhySgooXVkPv9dsK2cTrKy5exsv4ttbiGEYVFr9eJM3y9vs7jubSp2QYS76u2nNpRdK7oApwwzQNQ",
  "key28": "2qDVkk5TZ7LCfNZ8L1W6Gr9kZfzCr2KAbAQVZwCSVbTaFJjFYi5RPQHRFQrhPe2uEccaWkE7GYqv5kkb1CZU8LUZ",
  "key29": "43CEpKhyb4jcsLDFUsURgGhSBpKn6wYJvDZYpQEXzEM8NL3G5FznVTFuf464rFDFGSRR7eVR5s36vNGAxqbDVgx2",
  "key30": "5Y9Hqj4aTSoshZTLQJ8fLJvxjSiYPKEuDyWRXvLogSM4C7heKccnpLeiAzWCuWSW4Liy6oXoHeNg68bueFuBGoSJ",
  "key31": "3JdGZ2ocXgoBd6END5pPpudj4igJF4r5t3b1Z1jCAPfRL38CjwitqDUhHUJpKVbervfF7XruiZx5DyLCQExyawx4",
  "key32": "3J7gGexp5GqRPfWQrrpNfNNodpABLSNUmtBnwyjukUtaZQrKAVhgEeoPvhpNtX4oUVRGrq3tsv1AAjxp79HYCXDP",
  "key33": "4ZBicf4N3VfKhUzcC4ury2np9v9wDw4b4aMoyq3euT6g3qawtXiYusSHUTYjtTSujEppy4Vrz1sgYowm69sxRvbp",
  "key34": "5fXzcoC12EHQoeNVLTRrXnk6Ed1igHcDJgCocUjNxLqjFBedq2iGrR3mWvyysZ1wrTnrapFrwTkhbdtSJF7jg3LQ",
  "key35": "2NLWBmj895M5T1d61qCXUgewteXurxN1Y5G5SmDzJBjkeV9BUA43ZQV1bm1P4SefkDDs5b7kyQdtLXBGcwbPcjXP",
  "key36": "55TZ5iDtMVLnMHnajDJ6To1Kr7rx89ConDG1aeDpKYWuCS1e4A8noeNnnaHQVop87Z8mJxmAKFoGB3TTafefa6Pm",
  "key37": "4znLLpRDJPTeRXAQLoZKjcR8SxYKnbYXEc1Vv6w8Mg7v8u62Hxe3UWhaDKjCqSrzKDSF7Jv18c9B11u7jYEbqyrH",
  "key38": "gShFUPssenP5s9EVNgTxuRr8jM11eUeMqnAGcmsGjHrBYBVGjrZhA4XdApRY3ZDYQ5wWN9X53Za76yBt8YVYq1V",
  "key39": "4bL8Z59pEJZhVTWoeE3CnoKunV2PMsQRgiwcmi9hjgA6wkRTsYJgLFBAmDLNFvqHXisUpQzjd7wXu9qL4pkcjVoE"
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
