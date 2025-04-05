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
    "5p6d8uYY8eHWbup11CPWq4Mc7ACRQjEcBbKewpGDpzgfweYnL8WyUUTY6w7yv6gk5cvBudRFFzVnqSkaQ2sGE998"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmy1pjc8KaKm6a1D644Svcvoe6ur9Y5LvKBHqhqqfdF3S2MLrrEMDvX5j6Zwy2Mtqy5deUcR7y2JsbmeeqELQAP",
  "key1": "51zkyebHTCXXLPB855t9S3od8MLihSg4xCCWfWfCptGcyPTqeQTjNzqQ3VLwfn6hzH9veJjfz7ueduSTNDAvyayD",
  "key2": "3WfSthmR9MpF8gwn3yrezrvDk93r4L9cg7LmMuBbtYRoq9vURPg6PpgESQuVriNUcnQuaFt3ULB6rq72RCs9juNQ",
  "key3": "4sMsGBoBp3sNeC5EQKJrCWEREUEbzaFsJg2XahHTmR3eTeyDfrtHyNhVL4eEc3Gw9QVkcem27zFJSXzJji41fe4A",
  "key4": "3srhNFeKi6Repm84skB6smbJJacV9sRnVY5oFBEookYzyWsG5B7iHY4uPT5QFLc6hwbfcAfCYsVA6LEAB3RdMeuz",
  "key5": "HE2efEFQE6ayDy1UgEorheedAf7NURDs59fzbVA2x6JFXBeu1H78eZZPNAr6tP9HdVwqpTTjSQx4rwPSGP7m65S",
  "key6": "4aLDda3zn5ARaDFyEdFEMHxRde2pDByvNm8KA45KVDX6mtpHE5N93mLozzq4jin2FX97En5A4B6CLBuhVL43MHWR",
  "key7": "GfDZKXgbo28FQN4owNx6knKaEGBdQ7SjEBHRJwXt5hs3jS7KZgd3m3FZTVUT7ctNnwdUqaLEJDTtJssMucNKuhj",
  "key8": "sAsAMYyRvtQ2kV9n7gi1Fbdd36QpiHZcEEzhtvLAPSZbfMpH3cdpNQbodAzHuGF6aZgJVDzaPrd4iJnMwVWrhMz",
  "key9": "4me8qa6hgxot4GvPsuAn9Jh9b8QW7zo58Yv15yKz8WfQfrfyR7ADb9EiwyyvqwBkA6ek3m8cDE2k9W3z2MndhSKr",
  "key10": "buoDbKN4rft6vTgPuL78QyckPD6TgVWx3ZMGYpv6FhZ68budsLDTNA7SiRzzHmizRNKic5gCB383tHTKC3zZ4r6",
  "key11": "2H3hQ5jRrCDKMRhxhBCBMsEqGjD6GoNUAFshaM2J88NBuWuP3kMxyszwD7VZerJqpg1kBc8TYQ72wu2vnvszzF5w",
  "key12": "2fWMyEw26U2RZiqBSwvCNQgSxg3poB23g9NXvNJaX8wJQNgxtmoePSGeMefVPx6BQ3pfXU2T8aWYFZHUpRLm7KsC",
  "key13": "qqYynUi1sPzLQesSDBZQ6fgZmLnhTX68zBrTCNm4sTu69cJyVMuc6yffpxFNwktAh2We6GH7zSwd4d9Di7YTbWn",
  "key14": "3U3vWTkpfwJcE4DjQcg6WXg31GaNTswXkLDEvmG85aCMojximMiSzJSUjyQi5DBLacsiG6DijTx7u6cF8h3TEB2y",
  "key15": "58onRjo1Aq9ptdteXgyaSozwsPYFxxBfTeFjSGZbnUCXhAF9KmBoigQcDNKGiYyb7jzrg1jUsBBtw68AoJgTiC9s",
  "key16": "27nf7SiQHv7Lxw17uj2EZ4j2F6QpgSCJgRUmyFesfQKQHyk97FRv4qc6KGCgZpRP9GNae2q2vnt2N7PV7mChNjSn",
  "key17": "5H8Eb5WVQUgM3tFv9DSYQceCpjJm6Sdb2mMTLaAxE8pHHcLWkwwuzetB6vgYwo7H7dDr4GnR1dt8iWnHtQrsggyw",
  "key18": "5JnYkXDT5HiL7xZ3fKHf7hENe51BmhQ9dyJxyH1sbvijiHPbBGQkdSyeT3oGSRjCR7FFtfoiot8kQyJyEQWedioZ",
  "key19": "3xNdG5bkm5cERtBTUf6nt3Z2g4xPsAAMbKF9gmb7iNutMZPQeh1bFZcYV8F7QPEWznE7J4RtvyEfHNMbSBhucBmC",
  "key20": "4WhvrnFqV5UtRdoA688bwP8nsQhJC5Zcs9oJemi7bueefvvcpvBBoKGsSxQugKXeKXrzGqtjUB56trydf8JWUbDR",
  "key21": "pqTFbW6NRDKruSwJswi4cHg2PqMxqApXAtdGFyyBTkAziGVRnxfmqfTyBQFqW3RJxAbD9incyjzrAyzhrNhaViw",
  "key22": "3irEBx61NqUpR1eoJ3MrdpUKFhuJ875pPEPJMZbgarEYPTcQkHjBGHTXj4kjnKZFCFMSyaCFoZR1epmpGSKSNQrE",
  "key23": "3TKDZyNUqi88TaYPfgVoZVkhm2hH98qqLXSKDSHym13W5zAketuxpj9kivCxQUuJBoefGaTL6mqxGD3cUm1buf59",
  "key24": "4YBExJQUMxLNBdZPv2CQy9oBnwUvvenTe7TM4r57zQRowgkjbX5JdBZwUSRCUitF62bnftroJGewHQXBBd6E5sLJ",
  "key25": "3bgH5dNan1naxu8xSkzao66WJWTRvJu1if2JEbX4QAMM62eYP4fbLFivSpUezpnuKb4yoWsNgZM62XMeJjFiUWzS",
  "key26": "2j4TLxzefRDFXtarVJNZ6NiME53uFhKA7WNrNdbJuJALpw8bHipXcf4kM1NsYgfzQBvjZcVVVzhJEUYFpt6BEotp",
  "key27": "5caCEaUnnB6Jn2Y1ttqd8YKtrPoBKruta24A3r18ujwahBj27LtCZUf8tUq2HQFGu5D8MjptxVYKfFG6WvG6pKAA",
  "key28": "kyHgdtoUyAYwAyipp7rtmT3PKBsKD8mkPizewf3BMntW9LoCjV1KWrdTH6pokWvR658dBnDuh1FqbY1CHeveWqm",
  "key29": "34JZvMqbep3rqR5crjUVKo3egR3kitzsy1LJ8LXEwysBdwAK81G2YBZCE6sy5TFmRwpJWrZ7B8REhYjEDMTEzwcs",
  "key30": "5tAQ9aF8xaAkZ1Sspejz6dMTNCftBnJbwf7zRjBe6Qn2AJViVoYupWeBA1QFoQZBC4V5yABrLp5SiUZ1utaFH7yF",
  "key31": "3wNN8z53S5ka2x4nwCT8JWFPfA2oaHvp1QZDLBRiU8Ch4PpRyTx5XqH16SURLjTuCtZuMaRdG58XMkwQAGMooTFs",
  "key32": "3TLNSo2dTpnfWs5A5NFj7Pk8En9LLBTDNC7rQfi2fgk2wYBvcEup6m6wLiMRYvwMKRD7sGhTpwQZewJ5bjmThLv4",
  "key33": "4xZBsrYqgL7Htw2ZhVrZVMbYKrxdBL8W7hrjFeXm9gEK1LDd3otQ1DvtZdCTJ9g3BbdarUG58CdWixPLFr7uHSy",
  "key34": "4s1LCCXMN6tB13Ljbpk5dUteduN5RUKe4oSQBc3YkWxFDoRzQUMdtxUh5GYxS2BWHfp1Nsn3jgz3hyFMrmoiMG9q",
  "key35": "3hEKMP84qZCacUvsy5yxYyDMG2yJJMMcyxbekhvGm2tA7w3KhyC6ZfpfsTjNKvkaGK2Vgd9uKFYRKvyJBVS4kaby",
  "key36": "ZfMXBFDcNSLUXC81soK8m1ZTSFwnjjDdfepniYzM8oZbsf9NnGZ4VPePV8j5ZjiJezNHWJYhQebUQTzC2Y6G1E8",
  "key37": "2iKiyK3C4X1iA4cAyBikdGQiM3iRoWbKYjSa38WSFirphBTUdb3qucyrS6gvDrVXye9vpPNqLf1rNRuysvNiaoQ1",
  "key38": "2YYBaHhKHfJgG7QzZixgMeqdg8tTfqRx3FWfATVYnY1Yc6X5yyESVqBif1dkYgmGcnWPGX1qbLuDR7eBrK4jrpxL",
  "key39": "2akKf5tab2qN3ooEwouNvwC5DxN7bCefgPhVzK2oHhQTTGePHarcHpKQW5yQq5gmVNHR2QcnjCtYfQEPDRdATQRT",
  "key40": "SGdDpW5659VppGUH4dERBj1E5hNiujncqm6YhoybP6cgEA9d7y4Ln4Jq3Psfs6d5yZDk6iekz5Hm1mYoGSf71eT",
  "key41": "3jJejVP6XT2AmEUbsYpxKYkhSJqbXhbxGf79EK2y1X4tDWzT8xF3MPK7kqGiVtVrUMU3FRGFSnkCGHdSeBYfzHf7",
  "key42": "5NuMqgBZdnFuGKy8CtZDcvuSvLFAuyWTF2KwsRrq9uP5tFgjRYgwmESMuXhEucHzPUe3dcZ9p7k64WY4vri2q5WJ"
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
