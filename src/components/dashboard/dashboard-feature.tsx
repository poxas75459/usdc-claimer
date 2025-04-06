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
    "5NcnAfZMUnAiQR7doh5mStJsbEvQAsTEt17KnY4fTik9mu7b2Mh9byurLQzFdtpyFfTJxA6PDRwnSDDW3pVNAQW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CTNewd67qXYeSrPswNqZ9u5QYoxHk2715bPwrJKPZ8sCGWTZQeWa5bSC1k87mHHuJvvWGcTGiFX65JPeisVYnP4",
  "key1": "5mg5E54sHyvVZKGDjPAAUeWRETMxLjrZnAwcXjZebEVPe2DFtqVZGNVhbJbfGaionANV78LaL7DL82NoRLD4xMri",
  "key2": "uGrxeZ5zv3MZ5w1Zy3WzASo2rCxzzXQWVMLsxycbUWq4eW3FA7grA88XaV7CHfXCkjjJke6wYHjfiRtxgW4fKz4",
  "key3": "5tUcvmZJnxVmtmfN1JMMp23svEMjQqhGn3kxDymVBes6jAqvFTNAUyKXFPnbc2KKguYN77XCVaaQoqL1QVWEUhkB",
  "key4": "4Kz6JShvnS3mN9Ak4HsstuKxyRjkyVFsJJk9HzyeEr9rfdqwxbPb34eD2Edeg3zxFvsbkjDVX9uudNEc5wRGz1CM",
  "key5": "vmDqoDz7xGXAFn2R5D3PALoioGdodCj52XZePU7eDwXcrDvdToDV5WW9AgfUknLGDoXiH5U2g9QTLqKLLhqwjxm",
  "key6": "ffMfS3y1RK5ptb7TUbv7uNRvp6z7zYVsKokyMeaV9DxaTaaRsTkfwdQrnMTvjWNDxBfxkv34NGyY1Ap7XJx8nMc",
  "key7": "5M5kfYvizwdVtbiVsr6oqWrAqHmTuLU2wv5KgbfNRxpdqz9aPuvjr3d9P8UNem1ALuXjBY8JtKchWu7gosViUgL1",
  "key8": "4NQJS6wygtHgbTyPywpGWHKPPM1b9JTHppRvFipt5cijcvdnTCfqhjUwvRZLZcsT5Xhyv1PYAb4ZHLtknaVb8U73",
  "key9": "5MfJUTyRcVKsnQmkvtDc9ap2B1rYj3Z9ehxXhLnFDnoxPEkcMQh8zBQCqp5ocD4eN1pp57SFkfn6dxEunfWqigqC",
  "key10": "4tpQYoSLQ5jtXkB4uM7kBzPgYREuUCJNQyDVS1BogZnfFLdPdTuaCS3BtnWsakBeJPFbXaE1ozBkioYv9bRbBm3Q",
  "key11": "4S3BB2hD6N6YybgNDeAdnP5g6A8z4ZXBs217qLuYkvsXP8QiPmzQTxbgjFEwctEBDwsVzGKxCrcXo4vYXQoQcQg9",
  "key12": "4rcwJK9TtNbFk4cdmdK4PLuzthJix437YDXJLymT9iLxLcgmjRY2zkrHS46gkvFWGggWbSNSfNDvY1NWCrkGKaNU",
  "key13": "NcnH93a4PaosFu9hGzjnU1i4PWB1bAGUcjmuFPoFx8TXiDPogRKSW4wu62oGBunvUZbYVv1W7d1UYGSibWHnEZf",
  "key14": "5vV5d1MF7GnD214Rp94M9dGz2iDvcpqhviGAZsoHGo76RMy44wzy6nui9rsrbwBowjsWnECpBxJreaCtpxb8TXt7",
  "key15": "zTtJ6jbRYD3frYuKe98UTCXJHPY9aGHSFhPYsMyqRix1fomedWj5AYuSkwCnHJFzdZHxCngoUkqYJnE5J1KiAn4",
  "key16": "2vhKDiAyxuVMCaugZWSYoYzw69iJrqvQEjuEcuNhKHkdKbME8AHi8rvZoHNuqc4TZSePX57nZCk8UT4unTad8pRi",
  "key17": "29hGFt3Wpw5b7V8cz7GZsbWgFTyDbKFKkwgYGoXBP6rLR9E5hDCr3dt2QCaxNjTBR6DrbotUwjMeCGcAeEN1DEbS",
  "key18": "4oM8oBtYxdAucGPzmyJSExVh39jDUMKRp5Hq7mp35pnJ9TNS1z1GhPXujmXY4eyjbePZoC7vMF5seDdaRpgEdiJC",
  "key19": "2nkQrGkrScghUUHnWofHVLLgZKMkH2tr3tzQz9jn48Wo8cTGM1xuE1Ag8mRthk9WfCkuEL2RKw5bKSkZakUEqahw",
  "key20": "2z6S5RiZJkaczxeNL3zcHFkNsgM8X9PX5wVU4Eo2BAUy1gAjPJHts2MFwhqDhhUQLX53SJ3CNoiz3CKdex4VEmaP",
  "key21": "UTWqBSckxAn84MUjUUYZZiDhYmonXEXkMxEYfacNQs1kXQLnBGANbLgcVKBSTMzbCMhHU8GA451CHoLHaT9fCaD",
  "key22": "2FceDdoBNorGt2BYLHUvVwEWP6DGTYMC6RcqxTPuDZoLvDv1fLKrrfaFxK3jcjJrnYXfyp2cbiceJYtKi8sHSLgm",
  "key23": "37Z6LuovBzPN6HNSMhtv2EavnTaggWVFxswsuDyZWM9wbM1nU5jfqn8b5g3kng1ijeSTGcgag1sTJwsPa8zjRtgy",
  "key24": "dHTZjtSLd9bzb4rn4Ltg6yEqBiKSKXhaXAqFUPnh9JPC1fZBLcUFC4xWKomvzp7f5Ur2jBAzPatuZxPsGCd78Sq",
  "key25": "3LYgeVeZuwKQnYpgUb6H8SFrK8Ys4EBxcNJzEKteJLk1ViXFRbvqUdUw4dYz8mHQrRskJttAUj3zTfiXcMScEW33",
  "key26": "4isNxC615Rein9E3oGngViX5jxibBuYER26FeMqNFYeTQ8VuGsEeeTf2pZcyAnmm8wjsB71X3F2AW9hXFwnu9x17",
  "key27": "36pfwYPfVN6U9tv3Wv8DijPAkiJT9MNgaFPDxLrir2AFbWLtzkRH77qBLzirEpF7BTYzfHktrYzpYD6TmAA9RqiA",
  "key28": "5gj87PKiBxsUMxPSdpxpx5VHSrPMEAPMAz3i3MKFmimNKqmUkJ3xkDFym67RniRAmqeFibeNb9NczEG5Sqqh1FtN",
  "key29": "4AT4e5s4Df6eDuP5PWVuKKvvbFjGhoDGuAQUTQoXuNrYU3n8SgRf4bHqJHvV3geNMCYFzdRu5StJmSo6eS9N3M5n",
  "key30": "2DDXsQdyVpGqfmfus46Yzpf5AemqdbgFwrBgjdnphuvaH7Xtv5sR78dxv4S39FAYzdrzBHGoLQ2MkTH2Ps1bK5Px",
  "key31": "4FdVTCUniiuCtDSx2HaQV4iNmJVv315U8Q8sN3ec6MjDmV2RJbMhogXJgYa9JSHBWKYGK1A1astaHLtJ6v65dUF2"
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
