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
    "2kHugMNsmaRymizTJsEMeELHMCA7GhvTKYJMJRPKhdXHBL3VX1BccDFDMTUTBqwMLCWbPDShTTfW4ysame3WfV9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MmuVRECV81K5hyxNF11M29K1Ek4Fvt2219UbSDoK546vNh3qvPVPKcHqHxVTYnJaAQJ9D7373Y28B2ZhtxrHzn1",
  "key1": "3emGou6F7nAEWvqEvRBta5vmpnoSAqHsJQmVCsvD79GE6QWU7YQRvokt33NhSwcJ1z43YddsjrCzJZZmwNbmsoLq",
  "key2": "3up21TKE2b2VZDi2wUXZHe91DH7G8tyd3RYHqxEYUZEb9yvk1A1rFGPMVBXLr2TfVSxNHRkrZyPUqxosYh1FJUVJ",
  "key3": "26n5UwAXsyHDmVEqVfNFGgcGycQpHiPxb91H7spNQmq99ajpiWU6GNtb3H7nWSiMMP9DNXMvwugdbMSTHNonYMKU",
  "key4": "5CAiCRJJCLEEgd7gimpfzk5Q6xCB4kxNgmWeAnZof96TNs8wyWFDo5yq4b3L1q2Y3Y5gjzxAELKhFuF5CtRX5c8H",
  "key5": "5kW1maAwSL24GaEfGUiQiZTmF75cuTs2fxZCmMwrfoyN3rbhq84hBFUtgFmwT15duG4eGjbviDWP5KCf8QdqGqWR",
  "key6": "3RMPjCSM5thE65DFdV2NB3etA4186fvPP25zNYpCf529HACqHTdL6D9bMcH1rdRRd6DKbSyWyvFhesRsRDzhQsDC",
  "key7": "2FNXpiMuGZGoF2vEPAkP2Wakqtt3LMkNPKaohXoRku3QEoavJwFsD6PRUjWJDQgLY4aiSogoomLk3pNTJ5v43fQM",
  "key8": "3avcV5TDeWdcohA8LNTDbi72cjTajFUDvLghSErtQzvKSTnuVdjRkRpnHu7QwGVAHMg5TckLULZdAk3Cd4U3J3tx",
  "key9": "vAujdRikRLW5gCdK9QPCCzonoTqhicZVMd4iN4yg5YRW5mde3tTAP1LHQNhzKaLmemeNGVTUoJ942PKRDXQkpMx",
  "key10": "5bnnbG5mWod1YjX5u3QrYihzChN2XGRKS9fLPLqYPePgEQkucmkXT7uqXA1ZRLHpRP3GY3YLAbXvziRjnRUQrbCg",
  "key11": "5AbWdSoQZU6AvHScW2dPzVBrYG3PoqQnriRgqFvqmV76yEpCoJGz7jUNsnrQgdQxdujwTuGtuCAecF8KsGMRSfvY",
  "key12": "F7C1cNwwCtUnHXcnpe5wQvonybqzsFwf9vEBLPCQHuBPHq8gyHFHi7pAgiELMAUgtmkj9Kt5kjvJK1UGbRba1hB",
  "key13": "Jwhdy9mdD7PGFjc1mG66wACcLoYF9h17DnXaTWgfRUfxDHUeLVJiPzc98t7zTk6bLN5wo4iGn9xwt8PkpTXFKz7",
  "key14": "DHTByeNosMioGrHobT3VeSnow4VHwrEyPg78gEUUUr3fPtoLrum2U2JFELuvJM9FYsrYjGnL7UmUntkQjw7wFzS",
  "key15": "2sduYPhHNEhi5Xdz8kJGeMF4kSMhdtMXdYpQ5KBQShegu246pNB9D3eYdQu7F4RZJhm1h3cDE8tfQFHCdU1SV9yc",
  "key16": "5DMgepQZXyZXo11ioiDPTQCHMGyUpFsA2QkmnP6vFHUobxqnx6hgvLmJwrmZZioTtGQmWjXDuVbM7QuGaNUtaToF",
  "key17": "2mhTeYU7Agn2pB1iUbek1g6nJrkRpvRFQUgkgHqEZXLS7SGVYFtpBDMhqZfdo2xwkkVKgHpmVLkQVqj4Uzax2b7h",
  "key18": "32QXh5VjPfbLTiJDPKowHtUEUJPzGvkZBj2tSohBJJKE7e7Rg15vaxyY79JKozseB4GcToZGanAWCHmhSZRtukgy",
  "key19": "8op9wzDyD67EL3eiHZ4e9CtxXhXD7FMZWNt2rv6s9tvAxpqANN9EhC2kths9ucn9RuAA5XVjwpo8oKixwJzMi1Q",
  "key20": "5VNVqBUxigQeBrCrwv9uGx9GekUXngNYHApjZRbzx6h8Y7VKyQxQ2s7gkMqy7boAenRJiR2Mf5mQkWBFEw5W6dA9",
  "key21": "5sTQ244RBjtb6H4tHFj5rDkqD8GmrFirXNfcjpmq5dxpx9SmaVcuPXrSzGhtPN1HffWHW5GtsCVXmJwBN5iPY9MX",
  "key22": "26U92pNEFunARWPwDXRDkvS4FpcpSa6dn2ZPnXZ3S7mXZGX7BwmWUmPGsxchqu8sDtJC8xmB3LRHGShSKK7h2vWk",
  "key23": "QKhokBavYarzuHjfJueVS9rKQ3wYnhHN3aaWJQNVT9kzfbMpH132xHaEU5zmZHZ4QiKxVj3AMwUEGVT7HVvZw4H",
  "key24": "FpuFmqkqXyAsQad7mdHUziRcFnkdXsdZCaFDkJJoibB8peiY4vMHFuRxvHGkM9bsn1cQVWNXcWDQCVQy2MA1yad",
  "key25": "2qrqJUDHfhKiJdbzUHSYQiBRUmK4prm6Lt14Hz2x1t5psNVm65qvQWzmS4PZ7TtFRSKtKecndr9vB3b2kpQ4yue8",
  "key26": "4cRRagZuANtTXucR48JNZofW1QRmjR6diedRJXC9hs7rpMP5PNRgmD21EWyA4UaXBUTDjLq6EZwNU1x11U9hiEn1",
  "key27": "4t3KMSRuVF289C26pZJthdjBaH1u43LqG7e14QWstQjnMrKYRPq5afoPUEiocYxV1ZcLHWD1EgLENYQxvC62nj9b",
  "key28": "CXLwEu1mQnA7YtvjKofd6izv1xtUefSJkKutSrKvHBe6KTkGmSkj8PShK8tw662AsEqqTjpuCeeGob2TbZ9XyZB",
  "key29": "B9ZoKNBWF1v9UGi9FYatexQXb1Fb817dWn3tK5CjdGqiHzRpcwND5kAyigrQSgpb5YXw9DbKXab4XwEz5JyNnG2",
  "key30": "5rXfAmJ8KGceVPZAfp48zSTnwAZjBBqKrShDawZmuo4f6P2aUVjYiZYRhmjDmgAEQAN4VbBoHnbppXxUL765vsdd",
  "key31": "52YMYN3BUdnwJ8Pp1VrgHMAcvQHG3X53unWDa7kCh2dgdvTS85UMFwgMyKCBNudyg4Ydty1ZnwRCxsgKL3sofkFy",
  "key32": "3ixdNdmG6qatc62gNtMKBFhRj3YF8KVmYPfHxVYi67BAVCxBWUkR3xQVeQcbTXLEe5jAQwCFYPXwsYwb9MEjdtXq",
  "key33": "2sAfHWdLfh5RTCfa6zgs3egihjogcojrDPPMezLWDdH6ykgGAtDFjKA73XCHPvCuQm6kNptBrddnbKSPZPtMmW9Y",
  "key34": "GwycZjfUowKB1LWSfAwERu5SgfpwzcPbdhVAb6cPhrHGS5Dux4J7UdM8Y5v4HvBJ4RbhAjuiP8gWsgXV9EyuiV9",
  "key35": "3EmMeNHkdMyMhPmnuKt45fTYSmryF68j7aNCY9oKnTVgRyEjYQyND9UYeHaA3mhtgHbEGKyyfmCeHtwpHnByhcJk",
  "key36": "4YDJdW7CvnL6Kfvn4tGRNeaJ4HmjeQcLELZUkyXMFBeQuxtQFGBxHpr8fyn6P3vRzg6fHAe6A5qMy54g7oZhevtQ",
  "key37": "23DVbbVhkJXocuvuXnmaKjQDaLotiBtoZj6y3s4Tx9Af7m2ae9a4ZEPrmrYWMNhZHysc52p9ewCb41G36TyecVBb",
  "key38": "2iYGHNtMK9ajFdMh4EVH8mn5HBtLGp7y2mT9C9yUfLT9aJco1EmA9ipUdH8ePqe1c1B6dUCRaK6cq49WmSzKLhM4",
  "key39": "32xLUjVYAB7AZKTMTnV7Y4XdyopLzPmLYBhzFCqXt4cLWNtYSf7YA3iLcTWBkALJHiBnUQpJYzjWy3rYFidBCX4j",
  "key40": "xxEiZGwnramEWb71fUsT13oJ8Ygz42piwdMUPFxD7WeNvaEikfqSRN59KqmgdknVUfcRrJ1ZieaLwC8watzxjHy"
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
