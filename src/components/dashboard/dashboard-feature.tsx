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
    "47UGxwZ1RU8JZU3yqHKWjWCW44Uh6zxJ6KmYhW3EFnjJUtZ9cmFqhw1g9Np5EuukotGkQvAHsFa4HvrLrMezxSH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YrwPgPn96ZGZ4Ahmd6Fj84o9xEtvY1AQGfmhmtHiPP5rvqcihN6ANcVdmP91U2dhsUsdqyh5ws3B7vJr5aSnWfD",
  "key1": "5mabWR9jEZeBUNa3AGXqRXZr1YL5bHJPZAX2Cdvy3D8o7u59h3YDh6cwqyhBcxdVTfS15sd48EeseWJ6Wp4h8T4p",
  "key2": "3pV5CeAzJLMXGGNWBELvWW2mG3czntzY5qJxx44h4ZAvm7fces5hDWaAkraSHjdBtokK8v53i7k9XRVMYB7eDzmn",
  "key3": "28g425MkPUVijmDSt2hzPff36AWFT71zA2imZDPjMJSFg1JGxi4TFHVVEuokEAud5yL9wmJudGWjjbW6egEbFwxq",
  "key4": "2jjKjtwgQqX6bKbtZenkSK41Bgepbhd2f5R8W6syK9VHtnzqrWMkjWYCQoR5zinSjBPJXvndEQ612Awko1jH5yAb",
  "key5": "282MnsvdKTGJunQzeWF884GzyTHMiwXaZsV3FFpDqox1YsV2zwVdDzxqRscLLH2fZMYJtu2miyUyftcoSbowQYoJ",
  "key6": "2ipErNZ6DGahSe6mnZwERrRzKJMbjfZcxutvAR62w6faa6d6ayFFi1YKCgSJV9Dw8fKjEwZDuuKVnuqnZcuDCDBz",
  "key7": "t4FP4e29fHuqDeZKJc6TnvmUtLjXYZBYrqoGnBe962VXHktcmMkMwigPgLTRG7rsqvCsWHCw7ArCiNuUQ1YdGRa",
  "key8": "4DgVcx7iRyh66tsgcdR2Ep8M1kJQ97kaJTNrJ6YpfFQeSbf7T7ado4u8Qfgw5FqiRmZWm7TwbJpx1E3gNtCo9EuU",
  "key9": "5mVJrpptN5oFZxhaANTqPosSCgsVHLtthKUgi8JzzxYdo7L13fhtvtDpXq9JAaNsYmY1QVydMpQpRdBeAR9KvEoY",
  "key10": "5uA5y2NXHwyRrcEgBc5qzhAzhxP3oZcaCHXG69z8aMpiKCgYjWDmYAc7gUL8DeRNyjQEAMnKoPYS56NuqThme4tq",
  "key11": "2MLb9JKEpgQ25jdmwud13McbiwLFdG2vSWf3ZiT4zTwxy3TP9tf5XHHjMmdSrNJaXo7Thte3wyFhWo4eed37TYa4",
  "key12": "4GNmbqxqY73LFSyBj5zSqk8FSqDh5HjfFipD2BL5W8LwdWbQaW2qBx1kW8yfF3B5bZnTCmJDzUhgffW9Q9WfrQ64",
  "key13": "57Wkr2RgDuhrf5BVrbeQwbHqatadKgtX1L4K4QZQd2AT85DJN3kpZjXJNyz4UY2yMczqb4ckGU5ajonLJhDxxq2p",
  "key14": "4BUDMsTh2uZQjCccN8seYptwvXe4tpMVARKfz5881kjyvitxBt7ZFMW1br1eefbjHhYxiFwqeb57ARjpv5AMDSLq",
  "key15": "5zhZA5KtnqehwJjN92xatZuMBscvuzsKcKrPXUQGFhT33xEdgCw8kqEBAa2wPZdAB7KUcqHJXHvoDVxWiKcw1enR",
  "key16": "2wczRaUD1MQyiY6BQqBX9RrC7GkTZKDtU5VvSffqie5Ui4cU9SzLGuNX2adZ9PCBtSQsNQDpoamdmHLEnupAVeSc",
  "key17": "2fyLS9CkTzRX68wyQEgKFwjsmcndDyh49pMeetF4HtPUgPJWCJaVvyvbHkJq9QomE6iDeWp38F12D5vCXgaaT6yc",
  "key18": "p9ybKDYKWmCPpBnsSGU7qpkYnUypXCkYAPQ4pq91AmRG4fAcMm7x8ybw2tJXLLJ3LL1hhLeMXNjLhGoZcS9nKYu",
  "key19": "56eo6wfN7xciVjakMWZnuQm32VhJpuq93L5qh6wZqkoMo8qCvsJ2it7a5BXETPggJU5WXy9dZZVRWCCwbaBfuFxZ",
  "key20": "46eDo1ftpX5jQsQjUgnQiqqziGzC7m6v4LSp3wURLAgqTSgx1fwnknBt2VKruxW9jYE62vkCJQoFsg4ZMu5jiM4F",
  "key21": "2vxTcAcXxqLCA1Ctft2hLesE3xJwQhnMByLnpR5JsncVbZFzpx3mbmJ2VNDLGM8ifnmLynq2PzWKqp2Wm4Dgqa9K",
  "key22": "2ZmyE4ZGbUUdQ5HACP4fdtLWUxac5EjpbCJTsbD3HUMGSHhc3V3uQimSeFwtVV14hjvGcmLzNfHRLGwrf4CCEwbb",
  "key23": "4u46LzXA9e8PxNnFMH5PqrXfgkUZViLQ3cwy1qKQG42GQ5HPz6KTQJEoHWUQ9aFpPtc6MSUzJW1KGdmE3fC94xut",
  "key24": "JBGZ9dpt6nXnKkZLEsdXATm5rEKb5dtMpcjFs9CmAxwehNWqfUUUZxRwkEs6WS6BHtrmyks9Q5GMvGkjaZMePbT",
  "key25": "28TDXfaeCZ6x8fNapNk4gDLmS1dYCkELgLSXN8xeZLiQocdQgTimFPwMCyFdFWegV2ZbzUWqUhSX5WiwvpmxcXtn",
  "key26": "24b1yQaasWimJS3osQySHPKCzYG3eZvKNpRC5XuzUWCCZprMsngSaqaZXZkpQ4j8oQeSu1dkXu9Y1JS1drk95f6o",
  "key27": "Li3uJZwXMSCaVaK1Qi6BPM3htt6Ydztbzw4kTEM1v97PLtVT3h9UV7NbgnW4NMdPhRbvm8EMfLuHKmQtXKS9vuK",
  "key28": "2ed8jKqyrLFCY6UShaWtmTBVWFQdc8XYMb4TM4uJPg3zG2ZsYVHtBtgKzE7ci3pQqPbtFxgTrWwRwPaRBr2fCS4h",
  "key29": "4UvG73wXgcKQhLbzWFaB7ztggEdMdEjeS3Sk82VWhoVE8TLwJw4oD3KQVcDsvR2KTE2RUWmNCo9ik4pW2Dva6u68",
  "key30": "3SjVEabbFJoLMdM7HqADiCPTBxyqXtDQmw5Lm8VeK5sohFzMLtsUWxx9t2WmgqE63DsDW4oZzDoF74a27d1VXWsH",
  "key31": "3BBYrqVhPoHn5oc3j4QBBU7PwqBPBhkp1KcRhLZCYybHcEgkqoN4k3sYBN9wzdbQJ8acvLMMgxUHGCX8REM1NPPW",
  "key32": "2ZkdxvZFQWaNnDAFaxUqHwJKJwVXNRq7kwYUeTunQqJmFgJMJiaePe8kYCoRYcfjiyXaWkSPqVchFpJ9NKSP4mZP",
  "key33": "5PYFU1ww5rUJcQezcN68UtdMC2dt7yTu7avveSVu9WkshN6Sbe2y2Tk3ZAXVMeUXYE7foKzssZnWZpBPXHKQVNL8",
  "key34": "4Fu4DbxLtxfRvrbXxxKcHoQkQVbSjCAUBarS3cQxT4E2FwenBty71WC7Bvyzu8HvLcKVnP1rQEJbaELL54gRqxWQ",
  "key35": "5zmfyGW4k6SJQCZL9EvPA375FwbzCzhA188hBeefnTYvupdUGwBtcaun1wojxY6vi7QRXBEjARYxVj2HFuKBXtSw",
  "key36": "j2d5ESbHzhTrHfZQchAtvJxTfP2bCVtZTH6PgUk9Qs2yj7wA6VVb3CaFiR98hWRyMSjW5TeTjMGNwUpgYyyXVHU",
  "key37": "2m78ADWzkAT5XWYdwQbyqGqB8n64KmYeeBvX4zzpCH1UYXM4MxsawHcyRb8JwD4G9sujCdBMCWZTeUaZWemmYeGq",
  "key38": "g6FdC6A82nZE9MPPVKsXpcLU9BR2MS7ZgagDNyYCh6WxkGfe4dYLWUYgGxAVboiTJydBUJ97bLpTkNoweY2xpa9",
  "key39": "gcVMhWBnRqU4RALYJPvBVspeNsh74k7yMG1PW8pVumMkU47MB3mXvWxCkyVvEMGxDP9ai2YNHBwC1CtSRcdzTDg",
  "key40": "3Sh6YRCJd3aqQoHCbo1qJDG5SzRuxWxbF8hMRjew1ycVMkjCiPbrktR6Bz1qkvjCoqJrGV4ry6dt9hhSeQPT9VTd",
  "key41": "2DUkP2Vh1uoJMrs7U22hksTpdCZXW67vgTgnh8bQbBzQhSKZ2Uq9NvpBzNVXmHUFmBn8geNk22e1y94nup2RdSbZ",
  "key42": "B47bdH8oeoZ12XMZsMhmrhYP2n6WW8LSoL2NwjxG4yyUiBqmgUwixvEJ9qX4o2y7KAnmzpBGtNJRChRGqCJ9Exu"
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
