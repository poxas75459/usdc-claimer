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
    "r3nWpQuDr2z4GzMpzkxxfZPLAbLPSzocMeDED8DGsunhjaVj3W79N6TYuNHbWgHY9r9TXMYA3PCWzJY7qscD8D1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XxuCZGBkQvLaxnqjamuRmYVMasQ5G8YfUuNoohBdwzdS9yVBz3mfevE824C9iBpxA3eWLbNs7N8eyLWL3vXvg21",
  "key1": "5NHombhhcUVdNLw5T89jkoy1cob5YGxDpJckQ8Qt1T82vYT7bWmXBzhCzatXkuoPDxLE5iUEmNfSV6XkTwf52ApL",
  "key2": "5dqZxwPtKtLbeFv1nF2gm8DibBFHAAvdeBHJ5BFq7bSYeHmnSkc5ccykH6nVSM7ypEzEoxD8AiB4EjcwsWeZCyCe",
  "key3": "mjrAHeaGURpzuFKbJKHcYFixyt5j4pjt2mcVGnGUoQfUrjteVKrGgJ9sjpdNoiyfS8x1HwgiFp7JuzFEtxKja4S",
  "key4": "5xevGwzpgLDuGiG1UCq5Kwn6vScJfVKpqVbUwuXTbbSnnDu7wvXPAdCuVc8NnW3Xc3kWYKK2ux3Ru2Bn1hzU7du2",
  "key5": "2PA75x7bRCpoEbBiLYUZ58RWVPe2nPEtZVj7DRfUVXvtZ4gpxbUMZhBbbCNhroF1wrGGnfioxbwS69HLKDit4xdC",
  "key6": "28t4KBkU3J7STJhUBNLEJeCxfsDuryPcGqFAPUv5yMLfbH87btzx13cFsP4ReVQU9DiodX7jPzgoMuem9PDQYBBs",
  "key7": "2TSyMcHuYJnt1omASDVJsbv9JseWYFzBGRC7mfXkrmYrdcBUS2oKHXxXP3kjm1UZ9JAkRWm8hQ4WsnfY2BE151ed",
  "key8": "51jHywgrhcMn2S6P4msdP2VTrLKUQ5Xe6yyZC96gMDHzzZJ8RmagHPJ6sE4SP2MdJbYrNUNR7c12gAsojhKG5t4J",
  "key9": "5ZdTfJYJ7yzD3pVHLE9SND6JH3NLm143JkLBgN1JUyubPnkJ3QcWbaeZ2KZdTB6hKQh6ojDbT4SV1ssNU78fLWv4",
  "key10": "2SPo3FQrxRBqbq7jsqqAQWAHuUF9t8dcmQMsHzf76FSRETpV8H5doHGc4ZkAz9KM2poQvTtYHSTQ9AtEXZFLzDs3",
  "key11": "5DZp8gUVB5rEuNxhZyjWfq68NqBuZc1HmQcdf7LhNUQj5aqbmXa5V9CCmAgNNcixSdhNMcQZabRWDzBF4ZQqZMJ5",
  "key12": "3fraLNzj8BrfEnVcSaNQw7rqA6gyxaKXtxZeftWt6QmA1TvNYWATZtt9LWuw2jhjXtkZHkyrEN5BpucJH1ueT7nn",
  "key13": "39JewX8oDzLC5pUyw9AYXndQnqqpX78Kq2w6thHBuwduBvFXDE9LBAKAe25ZaU6QKntBVJxmeaBT4pxXM99PvjN6",
  "key14": "29iKAA9JYyHMVZKV63Jzt8prZmWkuLt1WLhLjfovaNX9cW6dMfUwf39dnRYb25zzAGtGaCrcR366QzKJ3DsEZwkH",
  "key15": "LSACosEzLPspN22sVxJuGoeVYryeBdqrnmGCAWuWZV5vioohZD7b25ExWG2xDw2aMrQ88PS13vrxypxcDkeev1R",
  "key16": "XyRPjEepexDGpeXC3tYHWRJid382o6joEMA8jFpYVsshyXZXMDZXMs3uXdfWSBEU7U2Fuzxh2SBw87Dtb8VBmZg",
  "key17": "kDysc1ygbAncwQfeW8aWQCyor8ma3SBg8dTQUDuBJPdTxz95Q2zGScozFzbBnhhXMY3HjZZtCvFg97f7kNnxjx9",
  "key18": "8MP7e2xrd7DVHRoHYFLamfDbFSQE5C8cJ91Sm9dWCCtsectnF1meqVkipSXge5xFxmHowbjpGJiQFXbiXnVXc7H",
  "key19": "4zBhNKt2RHYJzfk38wLarG2ugwduyvu628QDtijaTsb6b5s7uE4S9CPznSzqeK6Ws9ix5jWd1C3342V9qayuKKow",
  "key20": "2m1R6pPrCQVn8RKKWEoRR9KqTM7QQ8K6ZU3ehz1gH7kyRsjLi971WfLoUsFHMEwEEZ26Wsa6LkQCaamsv1Mvnziv",
  "key21": "3imNLNE5R5EsMKTd5e4sdsBvMAx1Dx3HaNEUmnLdEACUiJyaPeeMQxZoxCjYK9xvkwaU12TBfGSJ8gSgwRodbRzZ",
  "key22": "3qqMHEScNCVb4Vkt9DrqBVgXBvqMyqNbG3r83xPgHWZMGaEK9RZvLAvCmo6UZGPkYQNLo9qjYrmZKhZiifgYmh2a",
  "key23": "ftFNjKX2DRBkJSSo8HTcNBkSnvszqueujnyU8tcqR7GDqt5zPMEDg76vSFFxNUcihJY4CwLpacz64t8UoxVbPtW",
  "key24": "53MvB4PBXkx6VkrBrPeihsfDqDQ9Av9aQrn3oFohRfKf56ctF5micnzm953AEHpSkTUfvLkqHBQCt8ktV4dawb95",
  "key25": "29yihMQsEECGd58dWTqvqU5pGSbDBX3HnyzC4CVXSxJMK29df5uzeYETsPJSGymFUeBekTXg9ZrMGXRP2QnqicKx",
  "key26": "3sGAX7dQ6cQKjyK2fSC8Jh5oGTziG82mvRnyzdbXTmPuhuFsjEf7aARXB8VKwHaWGFmwNfXfUiuDZvBYfe24jDTH",
  "key27": "17Yu92ommAJsgJ8GJwyX9un5jAyMx9rkF3FhmFPkKrzpRiQYL382BxHXwd6CXuV8qBFy3UPTenZMGECMk3ENrtr",
  "key28": "3RA9TaxDVDEMsWkjENQtAKKvngAEPizZirQijrn12nwWieANMrU121rjcizmRBxzECQ2VF3H6HShcGRyV6Fmm7ai",
  "key29": "3kUxGVVcRYvPuEqjCePpAVQRdAcExssq2HFpkzCyLDn17MThSvADv35SqidmJfGH48baQsaNFoaFReqvvi4n8ihL",
  "key30": "4muAKcEA3sEnoJYDuFxQWqsRcdV5hKtUZHUKTvP7E1Eyugz4n8FCu48joMiuWFxhgEmongWvZ6aKuattPPxv4AhA",
  "key31": "4hfHwGmH1XBAd5wKhfir8WbTeUMvqwBAbfAN4pnuUFKHptEcjoq3hJoTvuMKCcmHQyoFjU3WQ5qAnpFpV3nMhvk5",
  "key32": "5p7cCkL8oNjMn4yh4S7BGSR7AkuKuH61cuE8d2d1r1VnV7Ckoj6jm5yaErbRnUweaoT4i6boWJ3Xd42zuxEYnKJR",
  "key33": "3EMDzc7NRDgKquLWyjSuWbhT9GJPvUML7VdAMjzg1eNmbuJh2PKuSe59SqCXxdL4jGHq5uqbqS5r9JVAWQqma1J1",
  "key34": "31MHEnYz2geXhJRnAKd8ZSkTa1SbbFvTYGGWQfU3cx3NthLwAy2i2mnLCeGxBhC5ePGrjrcynMWfXdqLu2J8HJE9",
  "key35": "3eq96WBgFVtm7SXdcH1ikGim6ieYiLXUoXZx11BccbDnogaaYcC1FKRiN4RGynCfjkNcwdUf6u7PGrVL9PMqKxP9",
  "key36": "4xmWjKeeUktNS64LZjvd4ajnn6mhEuwExYHyPasqVEvX22VDhcCuSrYFmuucHcNWro1d64p4gVUPFUyu87xVNGv8"
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
