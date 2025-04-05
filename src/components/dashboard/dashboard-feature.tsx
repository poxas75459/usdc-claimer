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
    "2P59WZiNKjTyqttkXVacbJszsVRdJ1ZV7X2cnxNupmZTHHBueFSRmekswNjWVZud4CvaFubamnCo6PRoCxnicaaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pLit1choVapZh4jadyYWCHAAXCpdoMxnYFJNdritVW1kbBvy7WeQnmaoFC6BbTFQ9GFv3xJXLYdQF5vvssgRpe8",
  "key1": "3k7PT4JWKDGH8zpChYHmWmpTF8GZfCiEvrYrnU7cU8kTXRpzfq1ZD6xw9fS6o1a5cQkyvGBFv4DWZ41wYcAJAmQU",
  "key2": "3wnbHgazkmKhppKPvTnrVf2jBerWdS9WJmgteB3SCpsdvRph2TypNm675dp5BX47YWe44zMtdRkqEAzb9DyqK7Bn",
  "key3": "5QTxMuTCBGXK52YB9cPHcgkYTf5271oCR9331MsZhfUFJVq5a4xr3ZqbwcFGs5MPcbR1scZeF17TvP9MQzP7kCP6",
  "key4": "2CdBQMLcvkuAQzZ2Fvmc69gweHoFw3heDsYUKmkBoFid7sX4eKrPchbJKZrsfYnR7pCySfVAA5SoFHpBUjKwMKQx",
  "key5": "5U7S3DvxA1nmLz9CbYFxVp5VfxgqDwXYwJXhxMNdoh2hva4nqdQYMf4BQR7yu29yKyHuhF6e35MvyaAFKafKxZJ9",
  "key6": "4tJ7PLobPTbUw7vS5hgphbBdErUnr18oYQLSgXWgrj3bCtY5E8QXRLTVgFSMNqwqGgTAahRanSpZRJFCYYQ8czaz",
  "key7": "2edAbz6GHvAWdbY81ZNRXbjZNETtqQHbMfZRjwJjhB36MgppVu8AURC3rv4fdFtpyG2F5yt9w8J5eLFCrErJHzJv",
  "key8": "4MYbvN1AtMU4iUFsvLJcwYo8XstaAqrjpuCCuuTf2bvm9DgEvFMXUZ1NX8VZsngEnLcbc6utGpeXockAwMzhExhB",
  "key9": "ybaiEf5goi5yhN78xCXd9c4LeBvAwxtb8DQQE4e8HD86jgneztAiaLuitva83A3RFHkd9iQxFkFKH6ZJYJU7Ygz",
  "key10": "3aT7JuVBAJAKJ3teXHvRVCmKioh2oUz4hCnacBKfkmwbW3VUk17rUu5evA9ojwAsvxxqzLZSiSWh1ovjGqWh8LrE",
  "key11": "5a9oxdpzhpthKrm9nMyz1oZuMAchp4jq1DiFM4LhJ3WhCybpP7RQUQsdQqoxt2iXmoNcm3jMDcdWb4RX1Wo96YQM",
  "key12": "y5v9ZMAe2wSmddrYLwkGA4zXdZkjhUFmhaDrTYodbJUXjDUWvDW5hVUnf7KLZ8FmkP1nWHj9XyjGAuZPiNY3y8S",
  "key13": "26SdAhdi32n4ouWSQqeGy7ZRA9TpXSHiJDgzpk7r5fTN7zAiojHQ7P5MVbzesTLQicDX3mUWEz9NGMQQF6BAiSZz",
  "key14": "4PStMpYN8pxMYR6VokLSpVVnV7mxnXBUgiMBZC8g4DWr9erUxvmbRCut5A7ow671NNDUgRnhCfpvitm3MzReAuf2",
  "key15": "ZBDBaCfCW1e9SyRQPQTkYVMHziLbgj7fGixrrfKY98uVzp7prPq2hxLc3pkikbATrPtt96MCn3tWphATdn7hzgT",
  "key16": "bUtZuSbYVCAL56fsL4yGprEeH3Zu3sXCeoh3enpBMfwrR3YAHa6GsYUMk8A7spCbKr1Z42wana7GS6oYkFXVu8c",
  "key17": "4UrNbsMQPS783uT1t38DJYwmwZujVGCMN6s7Fwf94Ku1SJXDSAeMndtsGwN7Nzy35RK1PRA1UapnhZ5oNyBkSQtE",
  "key18": "5Qdu9QaLhXQEMiqsahKWvGHjJEimThxw4foW6YPxM2hjcmgmYxCdJmbZWNNepsUEEUyUN6uGeoemAn6TsbCXkeEa",
  "key19": "2cQ3vr2Y6KEAQ6K8zkSkvMbimQdNU91XVRzLok9Fi7j78q2ykdgagLgVySuza9aQ51NmayTzrQue1g3Qk5SKkJ8D",
  "key20": "2tjfKXSGYCMbSYCXAuVRS22VzBXUNkPrk6V9CCB8ayseQrhD95iiyE26PsvNSSwGPDD679AoNTRSMK7gtCqsWWxg",
  "key21": "3E1CiwCKiUdFFag1zAvqekVwnQmvDLbf4P51ix1uZqALFrMRH59H36tDnCBV6XJs26vLXXC6UUjkpgZshykoheq1",
  "key22": "4DxfvRPs8aRChbiHrJw3nChULsVrRf1bGNGjVu4Z5V56bJeLAVSZEdS3FquLY8V91FLFkusd4hj3FjL6VHNn3h2x",
  "key23": "2GKFSGXpX4hbwvtmXMafo9yi3gKqHvX8dCdno3iPc4wzZY2nHccAoZXm2mrrYVqTFFeRaeE4MYGuRySouB8cCRFU",
  "key24": "4Z1dN5ZUirkeKoeeMdAvhXPDHAmLwdtMwv3FFhzzuU6PFWEaWYmWwHCkRW4oXpdhFFQyBquUFBS7PHkyPWjzCAMb",
  "key25": "3W4Ft6SZUodnacLhqFV5N3iZZhiRgQiRs337m4FWB1eRKEDgXT8udxGNSu6ud2UtuvUWdy7e4cFkZY37kZohVzGZ",
  "key26": "ydvMRW7NAs4EbQH1vDhJhAs2JWaMbTgY1fJ1rU15TJRgawKh78HPaEHQbTHxz7h4enBxGpZZuAVHKQWNpfatPdM",
  "key27": "2DvgVz9nRgA8uon4aiJwCfD1AxSC6vce8GwSaSjAgF61uw1m6XJ2hivGcc6JrFcTEGxPvk67JMrk9aaoKjso9A7G",
  "key28": "4LfXNZ31PCzWHJ1wn5dNPdk711tT1rwaQ3jGg3v7LFxGB16QYpqNYpngyUVKqNuQRBPcWHv6UfMJkbTKfAWDjmUr",
  "key29": "2UDiEkNVWDrNdaTHqSbmJewD1u5yhT1aQFq1Svwq2nG3KavSAJ8oFo4zLUVkBD3fM5S37rp9F4MhBifFwNExUKLN",
  "key30": "3eGmaD1vHfx6PqzvuJoXt5nzLueV87TiokwVuNRjCTPxrUSfYTUwCugZMpuUdScw5HPq2ydgybPPxGwxcxRiw7bq",
  "key31": "3fxysVCRyBNNPa6vGDMUYNXMsywLTCRBPJDSUwMLcuYVMY4KufBckstUwTbVaqXtwcB8DY4f7e6BbCYjm4FWEiSK",
  "key32": "33KttG5pfS1VVxtuXqwgp3mtRwKwd7eLuUbTfUpvgC83irv1AtQv2AdezJ9cqVJ8qNtYvdSQjgyvQUUKKx6SJm6J",
  "key33": "23JRBBEdK6bW89YFkgjxCcpEMm2RDFXQDLs4Zm9cYYBtPrdL4nwUpkm8dfZYSRjkyqNhaZ6bbiB7RPhTBCQB92HQ",
  "key34": "63GfufMXr5vbdFqP6QwEQZQHCWGrB3JrRWVqhXDZ72fUyAfQV8ri3Dm6EiWkop9o5mSMcG1aXg69M2G7xWC6Q1Wr",
  "key35": "5Uw4cuGvduMKaq8mDs7cXrJ5YBAcYofnJDd4bAhMb67akj9JC71eaNH8LNRQkQhEmNjBr1jYJRb2rBQkg3aL7qa3",
  "key36": "29ADhFBjQEVThq9FGEFoHBRbtvSJHoCxxNFJmqiCPZJjMXCoUsPM3WonM9JMgDfi9EPpESuKfkuof8kKG7eotcXB",
  "key37": "3kfVz9LfD5NkgPmqHsqRX98vXdK5W8B5ajcE67L1QDkdPy8rEfvqm53JPEfBy5JR6Fv27aeYrdMVrLUhQrhWoTpb",
  "key38": "3tdKfiuNcuYtFT1kiDPEXcKerg4sfYtP4m1yELcQUWGgHJQyyMaKzrQoWDQm7CwkKu6mJa6zKgoLRecTzujxQ6Th",
  "key39": "2wqN5hRzVmwjZFrgQB72qUg3nvg8YRipVpyWWJPgBWNcfocZGP5wL6GuJjjYcduUdvC6D8ux3ebm9ptsHdHem4tL",
  "key40": "59B1wDbbbCrmA3RxTUkNQ7WtbxGwi5PgWHccjg4ffQuKEWZa7j94rzK5puF156PMEjS2zV3AwrN7yvmTNtiqq6wA",
  "key41": "3e2GA2PFuJF1RRjowMp8F7PKdDMEbSZn3Zr33jiobjbCVkW9rggqXw6qnPvwCdfRM9DRTSeZK8c7C5QmdKJrgizf",
  "key42": "4uGFDozu75b3bjBoxAmTRADjyX3ugY5utAVa3dwQgZSSnQD36xFsogPHuuFmaVV1AgNxY4Vn2kABJHSeSt95YWRQ",
  "key43": "3qAW4yjLT851Fczjg9JZY5WAjwDqvF1bwnSLA4hkyxWrHESgcPpmeV7eMWg4z8xYuZkunxXYeawCzRfuaNGGJ1G7"
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
