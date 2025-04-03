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
    "33tu5Wt9LUcqZknKn22vCuPh1XAthnNRxKKWGYthU8W9aD9twDQd2Ud9gPukN3V1kLuEM4TjWLZ3zq9h82wWoSky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HF7qwfC7hstiGZqkNaVteiWfu2HXobUAJBASXhsFBVnQ62soBBZzfDYmo6UJmW2wZ8QZTGLBwcBtFQJqsLBnQMW",
  "key1": "2DgHL4EYRpCYGVouqufYjmiW1eV5gb9EQ5RabHGxRJAEitSLhE6aK4Mq2QgTNXcLGa6C4NySusrcaoSgeAhuB4cb",
  "key2": "5e7JAsMubDdvJXN1crUaXFYEjETCqa8JB2v9sbDDaA4iRnZGZFzUATGSc7aMQBN3iFuGELKDtxzN4YjEEXTHEAQg",
  "key3": "5C2y67gFgcXUdszLutCf5U7yCrUY4o4kYYhYGvjRgnCnsciGZwkrQzfapaAYKZpQkRhba8DD1m6c67iCoAgSd5wV",
  "key4": "3p9EFptPwsmmt78m2L6sxtU3N2wMW8HiouY871itXuUxjCXgZioLBsd6mQUvWULRun6HZUDBghB7vYtQR6rEMr7V",
  "key5": "8sXEVCdG8QowEau1wfFSWH3FVbfMipRRzqDeuy9SnjPsj2HkAo6BbH98oda4KMJdq2CztGo5Ckxofufg88z63nF",
  "key6": "5sJ8UnVqgGNJG2Cs6rMsKabdpQUdnYPNVsnV3EETMpc2AaDousDsrXdU5tvonoPFNiNjhKb6N1WULGezJ7eJ5FAz",
  "key7": "2nGLBKBKujZK2w3Ee3gyvGviPtzgDNiQjnFH2hPXSo9LTnbFyWceCDCK4ibeGPWMvWmSBXNR5m2P6dAssYmGjzBn",
  "key8": "AYx3YRJyPaY6SB6wXbPcGvGvTwBVZVjDRcCSQzbx4ZweXJkjThV2chTzUpVjsWKgYZfyWCgqPKx4utj38RGQFeN",
  "key9": "2whuQxgJ2ZhCRQqLMM5rKAghs7FkjhYqLHToR7GtWB39hd2ysHjrgM8vAyqdX7UQHupL7ArbZF8GRHaWzh796Aen",
  "key10": "4hzQuyJfnR5fQapzRWznaar8axkAf1EgTnFreNYC8akvGUAz4nFbRLrGFUbVoZXnazBRTiogktUkX8NsHNeCoyG6",
  "key11": "pYVh3pwYarN9nG6XDreVRbJtWofD5Em3B6geQcbbFkvN6kjgMV4V3Yoe4o7XUhzV1kYeFczpatceNYBnWzbdm1S",
  "key12": "EECo3MNxFVRX8K1DSpFDjkhYoYnip8vqDsudk43ufkpPV48DYvUMt9daziovJ1Wh5wngYVtUpB3KdWakTND2nQ6",
  "key13": "ES6q366dX5G6HCV16AZERPj8Tysuxw83E8JY5k43ydmuzXNgxqXBgaNnro2TFQfWaTydsjeD1iXUNtbPLP3QB4x",
  "key14": "2RETaV8wVx1aoAeopXPxR1e9AuRUjM1v5ZzjG1cYNhFTzqtLrpvX9tGgRH5fB75TcvPCMphpXfhffj2p27MQZMRY",
  "key15": "qZKwdkAyZqo3bqm4Jj4tbTUFpQFGmuN4rr3zH11Scvcy4qhhc5W8xmGZDzwQpF9AfDBPXZQVRVyucACtL4cWKce",
  "key16": "5P8cLCJKWdw6LvCBDjgcQ27CaL5doi2Arvozw7nse6awqxPjXk5WNWHuw42JGm2kR6UcLQDoQpKfzLFQXH6SvVvq",
  "key17": "3Eg2SkpiMyWAcmSrLhjfrUwQLSueoNWydEPs76khF2iteRSk9xj71qQP6LXpwQQ15jvgefzLpcFrW3qytPowipEv",
  "key18": "4HWEUXAt7TWSZ65YBRBxSz2dw7PZ53YYou8E8NsWNQ7vf8FXJnBugeB58bs7tNPEitxjDccVQyFXu2pcNG1Dyj5P",
  "key19": "2BP6FVNiSDzGP5DvifhJuqL8jhEysXEctAqBwyzmPs9TM5dcSnVuUmoS4hxWTFDKtgNStgRVjFfkBhUXqUWCuaGq",
  "key20": "CTr5asWxA2jGfoy7bkWFqUDDKATLidDDBZvubLjJWU2wsT8Vp8RqdvfkLUKkWuYQAgwYkzyEav2ThvJWukAbofH",
  "key21": "TkhrVUcseUbSbX5kg4gjFXBehdDk3TiWGgzEf1k2RofyNhCdZZwTWi8iDDvSP4rEE26iiYdbFirAcT7HnVJJndF",
  "key22": "3KMMiWrWbwFTei4KgR4Fv9gFs55Ht8RByzNP9QjM4xkinZuziYa6J9WDpVmTsQ7HoXy8UcL5t8p9SUJAKLn2qkjD",
  "key23": "2yn7hbo6CjskNSS16TL7ueBMXjroWD5knsCsxeQJAU2zXBDtGPb3mestwHWaRmy2vLFfhprwhXLYP2JtWZvhZmKJ",
  "key24": "3RmekQQnxZk3QYZJWGZMbAeXKWvXcS34fqeSeAGzH6YBSyig4mUwob1B6wr37s3GbUcAaJbN5oswrjjMSCXVmW4D",
  "key25": "5PdMjMvU5KBYBfRAoVymHSgDLns7mXCWateq2EVC9kVVTtRLzs5kURyBeJKhPg625jybNCXxEeC7T5QCxdXkbrL1",
  "key26": "4fh9cFDVtCi1ZdSsSZsTcQ2KjMcdpEX9aLgMnmKt7Z1vHNzA9k6owX3CVpcRTamFwoQuSaZZdT5bAtYaGT1smq9h",
  "key27": "2mFW7NNtx7A7xRAb52MEqZdxiBTCHZKLXRPxomc5tjw52rJ9BhjoARLpPituwYU2s5SiEwvqhV27ZwNYuR2uD2a2",
  "key28": "3HWPjjGe2FvSuuLPUWEPzkhWsz7XmuMBPjvUS7DbotsZgJeFcArMmN7yELwcxhLg4BpFwpaSCiarJsxqXKPe8ht3"
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
