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
    "5xdqqLFhRZsd5Nfi9fH2LQZv67XGAWYiWv8EUWxNtfrMftuHdwNTapLRDZbuq2hD5ot8KgXkqoTo3kjhJGGr1Pj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FysGRFuEDLXbbzUL8P6irYus1vDFrD2NUnud5DdrQeZcinvjqxuqzEdjZoEGfMZBDFBdRukpgkaoJNtgry1bKAC",
  "key1": "NQMPwensrDsV1mT4YZMmNgakTxSUfD1pG6VsFgsk3ydxiyx3yuj553YizmWcr1A5cofNj22ihQYBSpHnhsmgPib",
  "key2": "2knozptwhR8db2kpoR2ZdMzF27FgLVm9k1xrEykXXie3CUMtG2bFV9e1tYVT6ZmayFr2pCjw2ADBHdsazfZ8Aznn",
  "key3": "21YhxkaqiF312U7X3YVbMjpMJ1WjRkBCHvg4EjsL18M9yKMohWTzuFRajdgjRcJPmxZvQLcjnZqXFrSZxiBweqjo",
  "key4": "tzhkLKmzLdrXDNftnqmF8FNdbCkSDRLsMSqPppVbUgS2uTqWqQXuPJUdn8fzN1a8ESvjMvJNAd3fpqzQawZw38j",
  "key5": "KqVZgsFRJVcqJBK56rYJNfzaV3TRxDFbMposgM6Qnj3bpZHfycNfrH6iMsLThJLua43TbsANXBKXRKa29syXUe1",
  "key6": "3XStQtHSEgxzBfgvxDTcQPyXbGNEoHd1XRNJ4wBpBkF8BojGqUm3U36eLeicybigXsusBGKC6KPDXKVp3ndp6vCK",
  "key7": "5AX4SiU6eYj9gCs6dkkWYguvSbKHrtfLG6gf3VfDX7pHvE2WqcdUm5LKmwpdLnRptG9nX4xw4emdcrdxvMV51G4w",
  "key8": "2zjUrHwAB24SM3BWp4ruZMzfYNtt1Qfu3D7WvGqvcvxMNzJFHMgaGEmi5KvbysuGiCaBs1ZoFxQ9cgDNHjHxnUa1",
  "key9": "vk2MfZBgRGVdjSZmATn5Sigbfjn5kzKa51RzQu3YFq8hDha8gu4rAL9VJXHjnGb9HKFLb753dvZ46PvcG8Rfxc6",
  "key10": "5bvkbg4Fy7x9naCVJ3a5kxuekgBCa5KxddP1CJvGjLNFL22ATcU5A7PydhaHasyGf3rjBGkg3mS4WBxm4cf2zTvD",
  "key11": "36vr2FNkF3NC4xLA6nXDmB5GHmjytsRyJdPE6uga66uBGCGKNjyy2ahC1wxKiE2o9FWsXUbuNbAo3XRdTAYhvho1",
  "key12": "32M2X2LTdkimcwxrqU5kAGc9FK7tvKCzE6N425sofaYAFgKH9XibnrZVXwkSEt2DbpACS96CuaRrT9mzfBeUnp8w",
  "key13": "5WS2WoMU5gWCrLbKLRgNPEJv3825J89VveaxqQknMU9iyHXy5NXVY8Y9fYhpZKnhNhPTaByPdJQHeoS4ESNFAuBo",
  "key14": "2g18r1ECTkkTzmnPaXGTy3XjY7DZarbfiiEqpL9jjoSG7gnKBfnLZVrYp5gWuLLZsckAVJchtwmiGMxD7pELtVoz",
  "key15": "5iftgJVK85HahHikYK9VR3ibawQX9n1fzMrYQgj5wcrtY3v349jW5jVAmBdD6DbBVUcTpboELHjGUQ9MKWwAwqFS",
  "key16": "5Temc5vKQ1uQoR37wqvHoHhiDk9ehsooj7cCez2Mfq8WyqRKqBUVKHjMzetGo1hTFw7ejKbWD3Q6C5Jy2f58hheQ",
  "key17": "ZAfV4de9rTPNxiaacLgtyj1MtmzunxM3kY55Vuue943UhKax869xNXqDNmBhEN6eF6NRQpUFznbKGrg9sKUa6Mb",
  "key18": "3XpG4AFYj1Y3efqfSRK9PHnHu3TqdvphgFujyHUtXLjcQPszgtakRWnHqRAjGqEz9tVca6UKKGrReyaMesrtFztp",
  "key19": "21nJcLnQ8ZQsRPow9iZxXm8YMZR7rGt5mJ4Nce1BzqSwjru9mTVGeZkC2ks77xg9WsvHTMMkSGuLufkVXoCTJcL2",
  "key20": "u74azk4ThzMi8ArkdCojTPQYEA7PqUk3PGWNzZrvU3dhbuV1pG8riTzTgEnPWWHiEfHXb6E7ijrRymX2WKzKL42",
  "key21": "4naURXZaM8Goeb9AXYK8R8RZdUgXSeJdNY7g4DDF353rPyfF8i82dR6dBX53vc5sBnmreSGirpBSCgcPFmJpQvwJ",
  "key22": "2shR8bZsvqooaRKjA2mo3UyWiq9gbVjYzm4rKmc8CBPmRTDVs4TWbytSenYxSxmiC4Wh6hAMfJWnRuinCgaS2YbG",
  "key23": "5mp1J82wEjgYPvmXu32zNpChvRhgUfKBcfPphn6UfKnQLNTzKbAwQt78JS92rbCWiqTZ1aAGZbbbgzqngm6tTYRS",
  "key24": "643MrDNd4VVAD6rs7Bu9AQPkyHZH57REq2mjQx6ieZ74tp1hgwuWosBeiMPCU9bNkSLU27ma8CW1ftMwaYJTXF47",
  "key25": "2T1ieywfAurXwENK2TeCWRzFapD3Qiugf1KWzsYMCv4kJbBKoMutN5FfTbiy83sLFHR4nLmaYm99rZU6iFCm9Zkc",
  "key26": "2v1uWUUiiMwhkXHMPnLcE8VjscWs8X4X6MpgorHFitBvR6YYDAB4bTWZz5p7VEWA6WtSZRC41YXhCM9JjZHPJDSQ",
  "key27": "5Ph4ecWQPGS8sx25WAuSzUALWbCgcngpS5JiWVAbSBefBVqNHGobzGtvHWTH4Jr6hxciHEmSWXg1M6f7XxW9Scq7",
  "key28": "2HddAn7XDkFmihKiHSHpfcXqtQfQ8H7NfFFiBboKqxHNaQ6HSPWUpwRadNBmbh9NRJsjBxpvGXpTP2joFTXh3f5n",
  "key29": "2XEQnDxr5T7mAoAUntm4YcN8MZ6XwzHrD6NMQf5sopyuy6wTWjSnZxfxA6iCnVVf4CpDetdBG6hbctJAcJoH28i8",
  "key30": "41PyH6S9Yn9oKBFBkA1HFYnZ2yhyXahQuggNFQFLVHm2bpQNF42HrbDjA2bVaVFVtyWk9szQTy9raDVs5jaQtLxg",
  "key31": "35xoNfEtTGFkJcdqrg63RYj7kaiJC3ruRCkfwwqPp3BEtg1PKyk9E2XWGB7BrY99uadkBoNgmHWZjDUoq6PHdiNe",
  "key32": "2g13QSTZMh2aShhmak3LDjG5kCDtFUyHdoAXWzNofjiqd1M5Xrrc4ymRxLWPTDCDUxdm8RyCnBmLio98CqFqKV8x",
  "key33": "2zEbnrWjiJQhUnzhXRLHLeE7NS4s27Tb3M8ashiffzpGS7466rpTUWLyuS6YBRhxdBvzUCiLAZ3Qg9ms29a3Hc28",
  "key34": "uqFZysth4T11e37YpU4PiU13f2fA8KUY2knnzW71Yy7iUBgobbKkF7TkA47ZrzQTnLp36gcZgVWivimFyLpx2a5",
  "key35": "5dRYt2vRBtTPFSaNJfGJC4jeP68sPCDrwjx4gw9zfueGjiwN9fwiMaNVpnvuwLSEmTmMNH8DLdjwB286VsEdgx2o",
  "key36": "5HmZfEdv7xaMNBW4JQCPwG5u6bsZDNvvvLQLDCbXMHga8YRsGSDT4EJei2Exp62aaniEbgdbgicJdQvEdDkuV9zC",
  "key37": "4CjMCd3JXcXxqkoL91Ea2dhCBg1R12sP8hQb52fe6RQTfAadPoh9TvK2RtdvihgwYpsNEFKwTFVYin56YmrP4MF8",
  "key38": "kFYQZwLd5Bo8B1mE8iirnQ4cHLH8B6D2JdFWpCWf2tXqZGEkwM76fhwBnGjSG8Yyw6Z2jHWmLuvaVmAHGchzb97",
  "key39": "43sQGMVAcCxEeTP3aT4tLA2E1hYmRhTFXRpXcMswYZF93u1z39NqTRbVFEVqSGEmMs4f5T3BY3E8HTFFfgpEwkFa",
  "key40": "2nTbqAYdqB1ZXdVJJBqT5CeoQ1tpzcC8vyAGRCG7dCQbcdR6QwWFmPuJhkVFL4iBqL1TTHTkq6jYJ54BWDA1JMx5",
  "key41": "32LE6BeGqhWmrfXrBX7qsGERaWWDumEi3gPxz8K6BjqBWrM2JLL7gsbAr7FzGYtUr5h11LrgaAF84NVmfLukLSj4",
  "key42": "2E6h57ZPptz5QGkmbde8wN3bo1vqxz7nC1WKNg88vnqC99XiVpydQXCfzDH1PRjVx4QpAbqdZNSYq9wuaofQiL55"
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
