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
    "3XFxwHnxAX8YzKRVHhJAtBtTQC25turjXGc51SHsRXKbaBKWh6qSeQa7gMpULmcwUFy4fkgBHT5BKxEyqfWmDf75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Thk83bAyjRJngPdnDH8TSbrhL8nfrSVY9kwzy5yRcyEr62rhVrw8L5PfsmzHocq18i6rbCEFpbzgYzFVCG9dmeK",
  "key1": "3u7p8qbjCT9q3YYuNnscQpAUtF2Fmna4QwqzvakDgpThrintVzvSRYqktwH38xTJM6S5cxGxCqqKJfjewAMZPSnf",
  "key2": "3Uwcdp2qCWExrGFt19PJdVg6EdyJRD9K3gCuf6irG5qaE2tL7p7NSfoCxmPtYPHmzbLsrnGgYWQ3hL4JE5Kehn9H",
  "key3": "4xnonF7scVChwcSR5TfYccwvCdK6w5Wj9MXL97LdphriJ5Pezxgi5fu11nXorJHa2tjVaWXn5hhLDh26SeMDbTGW",
  "key4": "3M1WoLaC1Ho3tNW74fg8rnSrczCXtTTUBQHuKHoQz6o5TTPHqimqhcUBXsMuBvMzC7qUacfHdRdj42YuXJracSbM",
  "key5": "3ydEjR4fwd27FeM5bUx2FJHBtSgjY7YKYKaXq4o1RZXynZk4P197y6TKhC2cANsgk5r3V9j5wELHn5Fq2Jho3oRa",
  "key6": "453Cxrf2e39cJQQ3rxrQGs5M2R2731s1ATaRSXjTbJ5T1tcy3BsCjed692phPynrFzgHBvPRJTXV4jcQT6VCBoUZ",
  "key7": "2CwgAHDncVXNaiVAy3ssPFw4e7rQPmRy2HeqsBKz2Y1v32bnqadJ9kyXtWQccn5aDwwzJXpeVAxVxGZUxMAAsCEu",
  "key8": "3xXWntKiXtV6b8uPw7zZ1QodZtLUzHUcpmBhhSHrAvJrPAKF8bjUryvq9BKv19FjwfJtATCXYjJoohQxuhp7WkVC",
  "key9": "3Je8PfjJPzY322MnGJ7DXxuVG83opt4KsvxWnqQL2cfrn4VfqaU5tfW5LYLqGk3ZZxztB1vQLKLjqoRomGBknUuC",
  "key10": "3BiQXXDqvZ54P8mESGRm47tB6pi6w6Gs1kJ45XpPLpUvDBMQFgUnSq7UgsicRjwkznpWJMdtPKoHMtfMsRi5xaBr",
  "key11": "2QwUJ6e6wVMbWJHfTSCN1EVJUP2DuTTVdPor5dEG6fbSFmw4pfXvPXVexdSMVQT9r9uaif6kAo86pW3cm3bQMMmg",
  "key12": "q4RWroAf2WC9wLnCC23kZigSbUERhumE8CSihWR1Vgv2AuCWpx9T5FmBYLbMdWynXUntEF5vco2jNxuZEfoqANR",
  "key13": "2hM47H1iZg212bRhGS7615JKjbqBYH7AqrwTSJsnw9TQHJVqFTxK8KXMjR4x2YywW6eUuiBGW5aD92iSKHEnpxWm",
  "key14": "kC8YKTQtHYDDEStJhiZn7mJ35XpVdVxHk1xRt3iwWbznecYWSetVzwSkC4rCWm9QY4E2LMc2ffRpX3JezuG8qRL",
  "key15": "3vAGt8jPMuHEUAr4oJgFogkPDavWBFeBBimnSPoWZre5LjbxMzNbvYRQ1DDHs2cgoKD4BV25tKia3sx8wGAVYW8Q",
  "key16": "3b2Lrq6uXHsKpZdcXKfPozVRNEQ1Y1DTXLJntryvgx1NAWanZeF8iF5zop7F5RibYmQoYo6YCu9FqgVBieVbMEE4",
  "key17": "5Hj6gQ7fnHScmvcySTpwdxm5GX2FDeEAtMYbxj5AtarQ26pFqv3SGL2M4ftNqccoHNhtwQbj5X5P5gyZxRLHS4ek",
  "key18": "3xwEnzkEpmprFwpS2XqFFZqxnobHNsYYFacE9bA3pcP97LzUxjj1vkcMgbhcLPeiyG8uh2vPaBmn3mwzWSpXVjng",
  "key19": "5CGtXBtW727bUydS4MrutqBK4oNzPsn1SChTafBevDwUcGRZm3TLjHC3mewb1Rz6EWopt5MKFMaa7XmKpbro629M",
  "key20": "5Rivqixk3ifbau3grzBTD9cuv83YeRkdVTQwktFBNt2f85hjNtHLQSKLrdq186AFbho6uLrxwR7hN13e1e8cJKVm",
  "key21": "4Dbyv29cs4SW3kAxBvdYMQiUzToHRCnnDNLU8AqQ82rFSsKsrsaQWMo3cHCMb6L8FcFPahq5za146XG9tXJa2mwP",
  "key22": "3c1reLis9dS9yqLa9D7jsrm2t7gU2QEyUzJGJuPoiDi3Uumvndjeiz6zd7uqEqbqtYTofN3nu8JLnXVcGJtbC9pD",
  "key23": "3EY2npMBG9mzet6CaEAwEqkYj4i1uFwcbJrnkFvQsH42f7vRw9GCj2ax7rYPrfU6xRyrsykngyZeWaBRM3xqvJkA",
  "key24": "4hH9kz6kFcygL7WkDDqmxSc8AHx4HaynDbs7RDqtGZYgDWyxsLLUMp9XgFrHkQd1o3DvwXF7cEJdc4zdT6AMtQMP",
  "key25": "3GvkWbgoipL5bWSDag3bgDvGiGYFv9F9jUwviFKgn2Mx9tnMK7yQ7BEoTF74WMxMxsEVFUqrfsFaUHM2k46pr6Xi",
  "key26": "5J686k3Z6pUXb2n94mp6BpRcos4ZFqwKqhP93vPLW49nzQ8Q2ZyVPn1jsg7fTR4cyZueP4Sti5ey9cnZSW1bwqB2",
  "key27": "5SEtFwnM6ALCc6KVefnn6TiQq9qwxvKip9JFw1sAV1iCPTDXrNGg8nvFDFCjUHgxTZgp2bpuwQeZANCze2kSNLdr",
  "key28": "33rv6VnV7NASdCiuWzhQbmyz6EgtHie8xKdKHqWAwUNKipeV9UFbSign2SgdtufRS5YGo9nYHd2SfNbz4X935gM6",
  "key29": "5vJno4YZQwkLK3x5aEoSVtzYsKfN3jj3vGgEPwBPK3RF1CQbLX3CGtwp8VYfnMKYKkccJvSj5x8i4NHBj43a4JDx",
  "key30": "66bofNuuvM4F5RPkyqZWhUtMQ8YfhgJQrQUdg8hXrmHAh5pALyD29h9wopR6hCxADXiVjuaRADPqM2fDykgkVRKi",
  "key31": "2MzgaWk6ZCq5xLaXZnjec3HV8eJ9kErab893ftTJq2ZFbm4H2vemUQrf6ikrsbJEcHjr5EWj8XGu3zwDgm4koAM1",
  "key32": "4vad8ednYwGYyj2XF6whheViGtCEJT5zDDLfyTPmkXNUARuhW2Hx9PGaiZrLeLnZcaGbcFEAL1ViY65JdBUekAn2",
  "key33": "bjU7QmUfcsM9dRxKwVxASGeihhmzzC4XepmuXxYS8o5oNFLzcMGwuqZ3JKN7Kjd5YsPAviKgJYppd3MMS71odz1",
  "key34": "JWdqVUZaB1zUtLDvLLrVcQbX8DfhDptE8tvn3XyJ4XwujY1AZBasQCEK36JkvqM5HpHtoVTtp2pPok91TMw5TqU",
  "key35": "4Le7fG5FZ1nKnffuQVsydCbNraVZXvtB7PnSKTcKUrGV8pUdR85Ps5L44ct5dNPTKep4gPtTDhXKzrnFsaMYtZ8G"
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
