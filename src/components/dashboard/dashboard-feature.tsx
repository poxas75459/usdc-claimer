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
    "2Fpb38XQeRQKZ9BtA9GEDNavwp1FtnPBvaoRy9yZG7S2jp3EcsJ8jwLBDrZm87CuLoYG3zn2omQLb4PJP4DEGhMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FWoyvWL1pwf88B8amwvV87vwCUCuC3CL5cJ6rAjkpVhtkbUZK9BGfSyhMf7j7geT9GhXdpHcHYLWQPX8bpxXNQh",
  "key1": "2kVmUyrTYb8YRm5YAC2XMxhKNUvodnVRhXwidzfkmyniWbNGDbkUujzz1wLe2ReANCVNYFmmTXieftzEkwyQ6aM",
  "key2": "Z6z64GBQya4WVCrpRW1HaZTi3Sp8ofMUpEuiSA6xoa5YWHpcj9yp4coSFqkCHFdeq86dibdGZAG2GnM7NiCN8iG",
  "key3": "2McyZSY76kggY72D9MTiidZcLTtSdhHDtFEnn4E3yxZvUhG4BSLFjXmdNXeNoPxzrFGox9Dpk49nRb7iFgoMYQAU",
  "key4": "2gLYaFNrKi9atvJSvscN3uj76LnzY24CQJGwcwLTpVUyNoHHmxBQSUX7opu72ccsKohhsP5RaS7xxGpyEUdmDPmh",
  "key5": "4RF5k6PcNCt9mZNx8HuiH9UPyQXKg2mmBkJba8McWGmbUWLAT4J6M1BoyFV86LQDkeBAphtFdNmsqA3bSig668yR",
  "key6": "4RiANWdHMSC9tNtT7JejudXBweKNpyn3TsNdA3cryzF21SmH83gHbZbFNvq6qoMETXP9hzK7Nb1d3Hbc4dkdS28Y",
  "key7": "634YkssvY97Wes2hxt2opAq6rLkrDhc6GmmvEuTzK1F7ayRaN7eDtCPZsP9T5kCx2Cw8AFabqLj8G9iM16DPD3EH",
  "key8": "2BqajXGUsVgbBAEpWi43jQnhgeEkRtgQuNEUTVLpJFAgAkMawXgaSRs5DwmCNWWWXroP4ZUhyW2hN1FCYw5oDPea",
  "key9": "3Tp3vzekfk6En3dZEH9uqgkfTqwXEmBYcqFqoc5HKiL5CKYggnJAurNhWzD9UxLJivttGLjKNJx8AG6ea3f28Lka",
  "key10": "3EELi8DcYE4VWHUpnNhxhZvpCfEfh4txsTm2zeLSYAecDzjat7Ck9aLrGAnGzawt6myasr6FYxXB7GTBHhFYqCz3",
  "key11": "31Z6agJbyUQYoWzxWYpWQ28KzTmB93xXMvVHj5Sse91avKvGRyTr4d844KWrsmYK2bo8viXrzzbBnjXDCNynitYY",
  "key12": "45oHG9379a4iYqtHsBpLJv2YDbUUvXGHHbY86Z5pLAYvoh3aEyyfkqPdxKGycs9uJ5Z2H3ZvFSKjn1yuMbuZg5HL",
  "key13": "2qBvmwUytcrDx5FqnwTLVXT8vpf5f4oq7GWPL7yCx7uCAGrymNwfvt4CtpxWNNG4aVyfTgeCZFFwM7P4wyfxwSYh",
  "key14": "5nNoLeZX7FtvrqfDQJNGRGEzE9qZRTXLinLKByvmRiaPUZgfK1WfxjLtqAkrUaviQSK6KiP4qLBWujbVbBXSbiZi",
  "key15": "66CDmyoJmiuXqbDKUjgnHj4isarrT8946iFtZrSHQVMxz58bqhXJRgitFjn3HiftJFCM1HbY7wnnGH1Su1yLs5BC",
  "key16": "naTWVRj5AifU8FVx6bLNfhfjUr3V2Jb6P6FLLJgLT3Btvo5DXJzsXEWrDywCPrYq3ZoaYzfJUp2c4eibtEcmYAS",
  "key17": "3bnL242NLCWYXJCe3hU3TnLrc7G6MKUkogxLwmKseeiGbkeScUmXn7BDHJpxcZmoPyZJsqAncHJqMPvbincshsCf",
  "key18": "36GSTohqEnXNxibz13msz5bCzpYKu6ioTfQNMUWZgiLsFLxdGSn7wUR9SNpRm4h6HDfswnvLki7Pewq3cW7X7TJL",
  "key19": "4ncGtuAqjZFH39MvJHgVLjKkvPuupVxEh8BFR2jvNsz9EZBZhYTfsDp3d8G32d6s5ZNkV9MfC5rYgmhg1M1HsXka",
  "key20": "3W1pTM4EhvFQEa3gh6ELHTNcAdqEj5at5YMe7YTQMNrHyjRiaNWejeQ1PG6Ty2tUmwmMQVtHBGyDUMZ8HaCcKb8t",
  "key21": "62TomkYiX64wi7xTW6txFA9QfCBpSbZoGJY9fT7LvUpPsmBBLYAX5qmdsko7fxdfxAYWN4QMHm4uwHUGsezCJG3i",
  "key22": "55fdEhmrv8rVQwDk88Qm5fJ4ZH7UYTQxRNnxYv26h13iGfFe3KMrQCPjMDhmsu32wdhkdB4Z35F56QeFyJVEqKub",
  "key23": "3LtW72HJEQCfXs1WJB2kkbadGfJJw67Qpuo2tCRPjJozBfBs7HL4wNtKuVgEgkfWxcM2EFShaKN5Ymv4MMZTdatV",
  "key24": "mUjz3CyZeFyUemCWSpigqBdDi8LEckLHtgCijTpJvBZS65SdET7Kyu41MeEmwF55jgwd9qPAeby1LbC9ioEqPej",
  "key25": "4CtvPQFHppjGk1ztF1QathBqEkSpJeu41PL7bSVNy3EUZwaj9tun43UB7L24BXgeW51MK4f7jbSGRHmyJ2Pk7kef",
  "key26": "215jjrCcTcsF62MA2Pzd4uZ3WwVoLpXMDF4sF1nrR8aU2ozELTNJL8LDxeJKAUArXwr6wSZ8VFY8LJbCvjs8jxKT",
  "key27": "2dxDNGGjePVNxeeErt6jbwT2BYCoH1Ftwq137sme5GTbqEwXgu8PaWnJjJSw7pf4yz4TLJJCx1dr4Mbi1vZ3TS4f",
  "key28": "4XLHPj4HL14zo9kUVg5vMgfvngqqnXai5NUxgYFVYsS2kZ2vmW8tbpe4di8tGr9aRM4PnxadZFhat4QMG27BKaTR",
  "key29": "5vEFoWMB7yN1PsbSYWC4dkCoFZfyvMLoNN6VzaHjrwB4rn82RV1ici29fJfEWe5x3cdhU9PecVaRymsSZTCrPwSa",
  "key30": "5C8C7Epaq469KRAFcVExCJYAbzkYpLHYAbVFS1YAGWKGVcJUtZ6ZJiRUwb4VNKqiFRysYKkjWNyE8TjrrkNxWkHA",
  "key31": "3X1DSFzSUoiqZ7qwGv5F3HS926Ex2T8nTxPhQ1BZj5cNPf9teAMQAXQUWhuAz7YtRbxS9x2RPRmTh2VzYsC21kTN",
  "key32": "2QAEa4F5R7pbt6q7c4SwjXXd7CLu2VeqPvChiL8FuJShjECChFp823HYEfaDaqvkDTELrxUWNAG1zw4PYeRXYUPb",
  "key33": "d67bEh512R1zYm6L2JF7HmKqUNGJwCzbYb9XtoXgoJt6SU6jC1EFwYJUSgwjLxXjWDkwTBePAaRmtapuHXimvE9",
  "key34": "2WwfkzFbpyXeBsQXxrBp3BAJZU3pyRRkR4JUSkghP8C645EEw93coeTKJYoyJXRibRiNcwaTZzgy9aVkoKD4M5fT",
  "key35": "52D2EQZp3hzyxfvnQHnBvnzSQCkWkR54EGU5CN447KeTAGhU3FuVR5o8zqTCMyYckinvTbEnmHQAnxKpAsBSXASX",
  "key36": "3mY2dmDN5hXsvDTkSFuk8gWK1myD5cgBUgypgs4NoW86RAu4fxMyYLDgrYruHZtzgnnHiHsmtC13K1wa3tZyBqyt",
  "key37": "57bwQUozeoA4YRAbsHFw62h1dVUgTYGkfy3qEwoam7Xtkhpe1xxdgXpcvP6sM7JzTCvXKKxuyVNuqexWKWjWYHsK"
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
