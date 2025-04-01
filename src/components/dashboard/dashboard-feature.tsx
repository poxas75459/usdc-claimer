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
    "3ZG5VLe7iCh4VfhWe4ZuQ12aCoRMJwQKod1DKhYpsYL4NhQ94afn59iXrtBEYQ7wH76Q8179c6NTXwVEUwK2DBGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpYRHDBp9A4t3pyGHEfwmyPRtSC684wt5NmnocaZtwFukWpBnHGexAhFucxqJ847hBARfkhixU5mJPjMjC2HTQk",
  "key1": "gBaaa7rnbEx5TAKMh5CX8TNdrnhGU5KzyDVgL6A5pvm5etQCmRWvtq7NqbP6ZRqVg9m3mm29gqNRCDs2RjaUSF8",
  "key2": "4SbFXJHvu8vJwFQH9YJS8iXLVFwyxKUsGZ96YZBvwPMxC9GtAQbVyrsuWmrmAa18eSPJChYjA8WwuDKLJL9fHE4E",
  "key3": "65fJz29ErG7Cup8WS1fG8Tb4goAbnXSGL1Z8ahUXQtSVRwTc3xPcahPFMLRGZY5WBmFsPhfjS5xxgfdmNC4Sw7fq",
  "key4": "59r3hoKhn7Tav7AMtFsyZJpqGW7gLBJnswafuaN6iwQsFPxVPYPeErFEJEWDAum7JWnwZboMrom7BMQpmjziUCwQ",
  "key5": "4M9Tgep42JruvNWbigt1hPdjHNbQpSqQ8tFg4xwGoHBJJtyB2JXLjsCy4usT8Wbsp9MpQhoGwvzoL18HGz6CMNwV",
  "key6": "3s1gsbaTyizbadwjTzwYJKzgA8rBSoeSb8oNo6L3qhhVqxDxKyJbXhHBpLAe5isfeMVSa85ounsjcyCgPJx35N1G",
  "key7": "2T9mjg963yLD6sXCfLJghoNQrX86pV8YLNn35zQV7jqJNVndrcQKrgoTSFNMrf528igdkHKv2oCVAgrA4cHfeUJ5",
  "key8": "4jbcqJvHXZvjW9aFxMMcM2Lvo2L3eHTQV6D5JWyLN2dVRCHU86jb1t13UgGH9QS3XBqD7utrHzEQF2RzLcs2twoP",
  "key9": "2KCYshbjoZXUkHJpFwrZEYvvgPMzKdmW7T6ztemrRZzRKa3nNeLg3zJw3UjjBVPiKgnbreQpKewW6esgSjhe4NgH",
  "key10": "3wyGVeBGkkG6Dg8d3rBtSsAZZDn6S81APdTcawboKVY97jZjShQ7xdyxVq5dLtrmr9KgoRzLbydrwxMsKwff8D9S",
  "key11": "4dJLB6qiFmDEEXcziH4wTGstoGKm37op4Ns179cmkFXULCY9pGTfY5L1Vcm3BPJhhZcJn9ZVdHZY9MGgJkp51SRS",
  "key12": "2Y5Dyckvi2kGXzcftqkaU9JKmdDgK4LGRv4xSRuYDiWnUaKwfeaLaq9TK1D9eEEBYRgFRbTuyt5AdeuX7jjeqQ3P",
  "key13": "5QW9AG1WYvAnsXERc5rwZdcbX4ZTGLnuBmi1BBw1ivhdn6MW9FB4Aq6yjtF28uMgfRvRWsiZ7Bv6zgvCLWa5RgRB",
  "key14": "2xB36V88wzzVaBEQAwTe8oXoYWRMPSLxYqG99H7aEWfoFhTWFoHfY1H2buGjCQKzYx4LSaJHY8jrk68dwZES75P2",
  "key15": "3R416oEteCHAkdnnXtaJCuH13i1Z2ug48wHKb6rg5rM6ZZBzyayyGDT99sVuenABB3aZYcyuFLnaimy1uK5aLJjR",
  "key16": "4kGBj4HnpR6pDJEnZ6WaEKweeyYxwTesaVZVa2BbKvQ3E2CFQPsgYc7Bfsc2yY69TcYPBKxvXCJove1gjEHLPdoU",
  "key17": "4gxS8TEbac4gPoVCyKsPrKDK3f7ZSr8WYWfbQD7oqoht5Z41KB7dUGUFHX4sbbTJScA6gK5suKHb2LNkxK4VXciK",
  "key18": "2912eJUVArbJ8tuF7kDzWk5UyCzeGcsnSnWs4xRXGd7f5vwU3PorhRG6fKToFX7aU5qPsUdBDp7hooDtTXs5xSAc",
  "key19": "1XekhXtUsCBFBjF2r6kjLiWrDTAHW8pr6u7FSRKYVCbbTnvQuWSvL2rdUoraZoqqPhwZUfWXLGL5ABLvXgXgDLy",
  "key20": "3gz4mxRYLjtC3aeTfEs9psB7EPTDjSuHDhg9MvE9daxhZKzE9g1F8GNvAV5S4RYv6mUiCZVfGk4RsUQyTU64K84o",
  "key21": "3Hpqiq8JvS9RPPfEGFe4cWWb3sFFn2HbQQH4jnHjTd4Ajz3qsqbtKFtvh1jWVBdGxJ9sohmRTrdjnxLtLCskaZEw",
  "key22": "41zRfc1vzXaDHnZq4tzZmcyiJGBVDsJVdoWYHcGSdMi79zCYGJXnQAfs8eaAzuvm1tdpZBT1kr85FACyLoWeukYu",
  "key23": "5NQm3m6nFj4eQ6f9KBd4Dhq1cBjiegRYkeHZnq5kWKckjzDtqNp3MkcrvWLQALY8jU2jFFQHnuNNJYhYqx1gmxYf",
  "key24": "2kiaH2CYa6uC6EUUWvgCabApc2FhTTKrT1agsSpGUhurVD45YNYRiwg1qhcWQx1iEhoStFVrTsjwEXuzSfmskuTH",
  "key25": "4Rea1JVNZt6qYiVBanXA94eG9ECE5kqhJNwuACehxwukqv5TzSHmLnSYNaYLRSeh8EwMNc9YrVMCbrxpVTccemQa",
  "key26": "28ju1fe45c8zMGQ77oX52vjwgrSQXvB7c7MGj9eqLGELGzn3Bod7eFBNRiDsMfXjjHeChNqVyTHU9DWfMr3KDtyY",
  "key27": "2VkG5DgAgLQk933B7JT9z9by7NdEEN6Jr2GWjpXuzYqnUu59S1xMcCKR5GLbZS3LGwfGng19uD7xhH28v5ifVXJ5",
  "key28": "66jjGAS7XJPfUe1prkUZRwwbPsGreRpXrA4Sim9NsByczzFB9zVscsCxErTeX2FioiX2VhAaDmPRr7mYqTmCtNXE",
  "key29": "8x17ZnrtJi3927Am2psmwGadN3es3usf2JfJykyzL8EQySDRKQC7myD4aKA1Uke5DE2F5bP1dpQtbeRZP9u3Wyn",
  "key30": "2KuoddHv3nd2MNxqx1zQZWCqExmMziaPXDXtepchacd6UVE5TTgJpX2x6NvF3YWqcfCoKxZxLNb3eANbQcJ1D9fF",
  "key31": "4yGDJSyga6NkHZEdG8QSyvWifgmjUB99J5AKBLrBR2LcnaGA9FZaQPopV8At7cmW5Z8j8CUzuXw9ynuyxn2PGzfw",
  "key32": "5eaXna6SqvJQCaRdUnMBvTP5ZwEQwNWsNuz3Y659Wjdhri27ygiheP4uN9LTHL2nmAq15rastx2pnKSrYJxwQUxh",
  "key33": "4Mh72uTk9xBWm4haPZc8LWBHEQDScHzMZsgpauCCKQpBLS82KacDFuytSjWotFP8QTQUBMJkDxxoBf85BUXukf6i",
  "key34": "4PfKYHMBRa1JhmVG5bPGKQ1Y2kHHM5VefRoL1UWXGd1d8iKbhdkjDJM9ybWmyN5WURpdUErC4unEJQRkUye1cbWk",
  "key35": "2HNzMgnR1UGnrK93Uwc5mTz35tcTqUX1Sas23fDSomxTHBCW7e66BRQcrzFiigRdVMR95dcoZBoZbGkQ114dKdzB",
  "key36": "4jP8J1rvCLZUg5JA6qyRwcoKRLRLEMwiKGeDNUb6PTcUYbqYrMTN3RYBi5JdZnbWqwAUUg1bA5UZKpE2e8eS3WSn",
  "key37": "43BFJ85qVJQ8BoSVHhWDYqXNZsfgmFapXzJ4AGduzZ3eRT98QbQQ7H7SQBhayCKZ6UjdEJZ5YkyrGfBrTEewJDZg",
  "key38": "2UBwBvTR4ad1xo8zwX4ZJGigYWeks6WBSVdBK84eVkYDYSk8SrXf3XuZPfLXabu9ni9hdWX6Skv3m3ZKHyaxijok",
  "key39": "Q4QuVBjMKiJvnYtGHhu6qt2wzfAYAW8h1K4QGiPFB3xyfAsksGppUt34a7invXkbFWhRqftL7rJk8D5KGBjV973",
  "key40": "5gZ7UXV6HepWRQ13SD58xLX5yDRh5BLhz8J3UJatFJAZXkK1DvJ7ysid5eyHKpN2LSDbrtMdmEQV9t1Kbnd8y1jR",
  "key41": "dmVnJaSD1Xr9MMrPvpb95UbtY45znTy8UvbDwgavYwxmYKQ7UkpVkGpG6k7oszPmvU4P8DyCdinsxMg4vtA6SgV",
  "key42": "2bsGSW5yNRxkh2i5vbntWgyH44YfGaJZmsFAEiF4uCrxu4kichGW3iB7HFkSuVnDUR4iNXkNg9zDWW8r9DaamXaC",
  "key43": "46dxzg3wcgyWkQFcCdG8CGs5M1KAbhSZMPXLVxVdisxWVnDc8SjZ9xwttYrJ9dKTRETJNo42BbHLJBUm27ZYVytb",
  "key44": "9tri34J4DckYnLHpcqhoY2PFqLBxd5Ekk7WbJkdeXxB2y5Bnanu8asM6xXEbRMezuvJdi7DqEVARuVXj8W2YPzR",
  "key45": "531d4ZywQu5YkujNErWVEvyqHUrNpHv14TuR3umzQa36ryFACjKqwbMip4xYpbbBX3qcNEkMdjUPyN52tfUJXgaG",
  "key46": "E1k1Lqiu7D1U9D6V3nKsEGtVtdxUFf4iBcjidYvmjA1kNYE2JwWvH5zME9UGx5mtRjsnExXpgwr4z2VCdFpCrEH",
  "key47": "59A6ADDD5ThiyKv92zP34KTu6xwdnVfuJCu7oL7focV91BmtYgrn7Xm1HSS8MjkNmLYYtZZbGmoKW5P7cxRNuk5t"
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
