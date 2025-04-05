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
    "2VZaShTobyex7gMayZyNGz6ocYVhoDvXRjxveUiut5Y7HqVAHtpMXEsFCJFcAUe95aL7dhjhtqmSTVdVpBtycvPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbrgNLawVuAep4jDhU94PqQ1sWYhUVgc8GqzUAM9a6uU8nRy5Q8DXM48xkPjU4SEzbQiNwSAbGQxmVj5nxoBXhw",
  "key1": "4VvZ6KVa8Gf6RqGNhaJ2KyCMbUSSQNGyV8SyXFf2WRh8LsaHDU6RMAz6zsAKHCM2JU34GSppewFqUVTHauU2ZLnc",
  "key2": "HbEdeGmmg72xRZa4AqGdqokptT8TsXN5gmGnYqJxmHffhfpNmUjrseW9BEK8vPbiMXC9UUs22JoHcHWhaDyfpMu",
  "key3": "5ShDWwBoFR7vQb5rEJhCo8KLefRxbXefz1HacV1p7T4GqCznjQedWSx1e3F8mbokZuW9rNzFXqXqktrdWehxRhMQ",
  "key4": "27kuAWzFAQMMuUEtTsMwndmmCiS4CD6P4CnwcY19MLB7RHPgF6EefNsUKbibmnNkbNmiN3evAuh3ZWVmhFDwUrRR",
  "key5": "2WkCmMmmyJoEfq62jAc537b3P3YStobdnjSy4DzkPDFqQ7N5imRtizmDtm6gKDJ7zBDmvuFKZSVXvAeARnnhZbfp",
  "key6": "2yLyZv5RCbD8VFkbvxdDTg3VhQa1mQQkK371TNhuYQaD9BoEvSc5tUBBCxgLRSVY8Fg2dbkgxbntY5Qx2Bzf37kA",
  "key7": "mU87caMrpRdy4SefJs2TpSxdHtZKmsyiXJwz3k6PRpPag2bsQ4RCn8cPQK512R3B3zxUTrcMwiPYD4Esdc5E2xw",
  "key8": "r4kmXqT6X1hUR5ag68Hs9QRVXHQwsVPCZg2UfLiTtCLgQ1PRiwc8sW7MURFEh81ZBN9WmKqc231k6iVmeLCMwJW",
  "key9": "4MPtH8GEXXryh61msfd4aC8ZfJQCYUsgULPHZkHVJup2KfcRp66w7HspqgipNYFkwrm6GRkyKtbzGv3oizppVTpJ",
  "key10": "mpgXMnH2oNhXkr7znUVxzRPajjDEgAzrNw95gFtiRpKT2dhhsRjoUzutu4XXuA7BG14j9kPKBuvJEDf9ESLUiUE",
  "key11": "3Q4aSnNQqGcMaNGDAsP2iWtTmRKX19GvxvJn4at87HVhjrGLHxZ6EJk5HhYVPWta4hD5hpg1j46TQwMz1VnxFfcz",
  "key12": "4vKxskz1WY2XoevVd9X1oK1d747Yiu85J2CTTTDc7ZjniqB6N3Na5eh1MW4Pch5FVCniTwKxgBsdXpdgUQkrkXSo",
  "key13": "3SwfnawmMJuNzmiE9TxxuFWv7weRKQMTtSFL254tufRMoEmVjKpaYyezSx9JscLJhv4fyVJyqy6ukZJ7izU8pWFh",
  "key14": "5S83JpbMsJz6tJEqU7vfiToJ4E78nH4gb7LCfiGq872yGLdgiRsRTLVeMmmSUQf9UCNHJMLwXg9reUzjnKxeja57",
  "key15": "5fiPy8Cn8zmxU1rPKErqMiawCucWvrS7urzNe7SgvYZvGxSmFAibxwfRddNrtbixCry3LmAjp3nVTmXGS621injm",
  "key16": "2LMTyBhUUoFFBZELHe6apVw4xs4QZGQaYp38GJcRBKN1LaaxGAyzzdNywrRQ4UgrCQtWWcSiSLycWGbaf2ZeE8zv",
  "key17": "3WhvS4Z7R4JsMnGiRZ3jsfG1Epj1T2CkMXE4EbhzGNN53HcPMCvTPKjstqLRMS3sjQ9GixCEcrFfZMnxNQUdupQs",
  "key18": "3gsiSFw4p7rSW6UNBSLg3YxoYxtkdtB5o8L3SMKvreEBqkFsEjZx6VDncxiYMPnMziz6TDAXLjKcRxKzorvgA6Sz",
  "key19": "2LQrbZwfv4PBUviXQotvNfb4458XvbhyFFJCSK5kBAffGCgTw75HFoxXpjU4iaSs7H4fXJsQve5x4p38QpQ1NNbo",
  "key20": "AZHqKPwGMQ2K1Y7zPFexeLaZ7hWHnNB9yUMd1dkwZZZKWsDYNCUriv9gTDeQWkiKw16P41eszzYcXpN2cLS7aFM",
  "key21": "3QcC49QdG3qqiV7J8x2e68pwLzar7b5Bk2yZbhQAtkxaz3DNvNDshppaLPqU82GhC9dFTrGbPc5E925oLSU4sWqV",
  "key22": "4oUmyoAkf92h6LvSJUGxg6YDRoKGN73djdthpBEHZGvj3J1zpHhD3aM6Yhzpa41itR9JPYroEGtNQiupaGKHXWfH",
  "key23": "2yDNzoL1GpWEFELccqXAgrb8MxGStbGV36XBixV52rkFrfggrqanwKDbtEvnxXEPHoTy7HdPMhoLipjvYMfpKjjh",
  "key24": "5i7JuirLhq24AEexQerZEY1XiZwPnRQJWVkkDeTYaLz2kwpUCGJaUWBbPYDb9KtKiHNtgr1VYWpzugB4ZC3GHKen",
  "key25": "5cK3JpXFZPbw1NifyJuEvZMK6iFdim8Ruy4HJTCgKi1eRBH6TAADUbJmnLCFuNqx1dtv5tuhZzxsTZCo6cEsGs6F",
  "key26": "wMeWm8UiD9ftp4mzfncGVzqZzoQoe819njrUB7cyn6Ejsfic9LmEQpdg7Qu9dgvcPZ3PG9fGBet9PX6tGFgRqzi",
  "key27": "4MsK8YJGpZofVmtbey2v2NQohpiMCmHLbB9aeiDmLzXy76pLnFvTMKP1QNtSsnFb2MYT7QpoWvsCPHcGC3Ha1s7p",
  "key28": "3GSTQQg9UGpDKR8fFUfwxdZyz9LA6Sv4pjQMuoxN75aPV7orT7G1bc1rMY74aXS7JaqRJAAet5nbjHcavKKiFH6e",
  "key29": "2mQyF4Yv7rSYrUDyJxBvbXUqMLRwD4J9H5Z9WBqDiypmy7Jm7tq7W9FufqNUzYfiogtwzcg95UD9FJ2Qx9wAkVuA",
  "key30": "4UhpyLTXEtyWJ5v8rzZeJbcknYku7aLHP8aUsD815CFZEnmiap5Jg9ABQ3APtidqf2trh58MzL6KEyQHoonRTnu1",
  "key31": "4Mud84SrxvmDvaaNSEeqoq6s9BWs68XK81mPRJZ7Mz79Zdbvbrfv3zLYMyX37MkinT3M8hh1Vj7ocNdJwWwe7rsM",
  "key32": "2fg1TNxgZ9RhcKveXwfQj9Bdg1vDQ6uDWH8PgVMyZ46et9qBsiYdAaLWvND4aRV5eXTtsQvygiiobEue9hACXuSZ",
  "key33": "3SKB6fuVAf9XXe2EUokqFYLMVGrUnBx7peKMxJY3BHGjH6r56oevsJkZjfLsS6aesRf6uUYLRvcdP5BzffqqQkrU",
  "key34": "5mqK96WExNo8Ak5goz1yy9b9shfnRnWGJzBSE1fx2qois4AsMwf8dFqGnarX8YWnkx3yhokb6L7bj2gY3KkBLJhK",
  "key35": "4hheXquinJExFNWVv5aH2Kwr4ZvNjKA1Dd3XkpbQw4xGhUgcXxtLJCtapxpaT5oLsXz4T4g9Aj3SGtNFRScdtLxt",
  "key36": "9jwftiQNDK1DBhAutmFWQ3t2WMnaZmQWuuEUBjBh42Fw6tVakTJhjNrVB7J5qtTpSkJHWNHDLZ88YLDDoydAkGA",
  "key37": "5JLzSr24B6x6f2dykgdQMCUwUZAX3GL8KRtpESHya8irrNzoNHBbzQdDCyKS6tpQpdMMwE4EG5jrjVk5BcXvabvz",
  "key38": "sn6joTLZDJiPa9zh93FnnnC6mpccp4ScNF7LJPMc7vLxn573Fq8ZCXYXPfvuEk52Y25miLaNNNzGHhFESqjJvhV"
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
