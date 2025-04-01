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
    "No8uqrWsjFfnVjpWMYsotSMJkvgNByZqpCtCu9DgSkUBLXucGs64Jo91W5nuabuAmgJjbuLkPSpBSDvoQYveSmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22C27coYxnrmc4K5YCPFSTKrZAMSusHYCP3bdoBYMUSjBgKDRBCXrg1d4HrEBWVCpwnn9dgDotbD1sTwuYzLv2Zc",
  "key1": "5T9mBrJuMG1sUB64aWQjeF4hDDPCNDAXAxEgNhKtfVN3uNk8SJUZ6SsvXyMCLJ1M9XWBMeHdPvwC1EWL48yYqDsn",
  "key2": "5sWShKxFF6cTNRoJgNUvQ9XZuEvkA4pqK9yZjdHAkSai8VaqHBsu1ksFfJNohUQZQMHa542bbbVrLn4t69XjMaT",
  "key3": "3UN8dmLixpUHoBQ3Fcv4Xh4xo4Kvo1EwnTy7nfTPNZ93ye7gTXrstst5rVX6mz48u7LysghWYjzDqTdahYps38DQ",
  "key4": "39BzPc8Cg1Apssy2xsWeHsQCE3kzaKyBnuDbZf1qBpVZPZXkkC7VCSeGS6tyKQLMmeqrjmqi8vahswm8gTmdseY1",
  "key5": "5vKLKr2yjWPn9SsKahnST1egjB9PA9LXTaahz495TQPTw53uSLGugiqwFpuAeJJ2oQ6QJ3RdB1P8whaw7HgCz4y7",
  "key6": "67YvcD112M8qu1RDZf7pyMXGHy9BCLAjzceSJkxTVWMJtFxdHxgXX5p97JdPPoaCM6PrabniesUmrK2w9rXH915g",
  "key7": "3VZVmTLxsyretSaUu6Ah2Rwj3MQbmwH3JkbyhdTkE23PbD7UbQRWbU4D4d1bgnknrMDU8sjegE9grEiyVBVmdf9H",
  "key8": "2hbBxrvLx2FiF1f76fNkr1kNZWhueogiBjZhzRSmWc8Q9nJxrcvzbChsHKobw94m4HmMZuvxhie7r6dp36hQgVgD",
  "key9": "3axNkKiGvn38g7dfULYnbhdsuVFjydiTyc5U85UcyemNTKh9RiXNhxoqZF6UMgW1YbjizPseYqxb1i8NPWh5ACk7",
  "key10": "4RUit49m3ZXLBUkj1Wq6cBfux69UAcb2wYm6sdKGkATezvn8zNrApf9oazsRFtgLPPcM8rDjVUVVPhTZaukxbe5K",
  "key11": "1XaAiiKZXxxpxrf22zBz2GxwgfVtQkrVxwP7RZPn3V9o88XFL4msZ8nCc2kGW16Fj1wtnMJcLU8ozSBXr7ocW6F",
  "key12": "3L7o4SvD3pD5rSCwDND9p52PoTUt1GWALkcDAFRHqKJYQYtZoSdUHKfBZJNneMYna9YkPwt3pWztJcKuh26FitAv",
  "key13": "5mCaX54MRRTwxDygepU6zXv5Tsmbh7AtQmuPgabd3HRsr5LTBgU1JTLyLoTgz3C4M8PmRM8LZgRwPy615unQ5vn7",
  "key14": "2caFkaw68acLk9iPB1QvwG3ztuwJ1U9Gh6vr4pcQZgL8tKeMXrcw1tNsvGB4MV1MTpPeNYjjQq9yk55avyghPebm",
  "key15": "2EZ9BTp8e3mvgSYbfv9qH85TB4wg8TA25kv3GAexRCtbnKSFa55tEGm77NHSsuq1mHMZc8yF8ETzTcwcQsQz6ZbK",
  "key16": "Ciz1qficg3x7igLMY4L5iCtqBX4Zvcvr9tvrDcUQyKLbzJbfPVYjMtk4cLCbPwdUa2L8yDwQaWXWusuNkahUEm6",
  "key17": "5tbPFMZwfLjjmyB1NJdGTX5yL2VUfuQBfR6NYZxW38uKU5QkSdRDdU2Yf32L1tgsuq6nbZqNruiFHfp6Qod6JGzH",
  "key18": "2nKfeU5pnRjU9ExBNpAo3petH8YyMT4ubgktLGCZk9DsxczYiwpsatt4NLnfqhUjYQ4RioFkoUD7fePaKGM1c8DZ",
  "key19": "1KXQAeefxZ4Z1E7S9x43Nvzjhoaa6QRwRdSiPfU5NKjKQdRd1Dd2XjYDQp7KQhAnkAZRY11ppTm65BLTWW9ZTc4",
  "key20": "5yWYzHpA9JmD6evsmFqNaptMorQPifL68ibDrwVyQ2V9kqHPvv3UJCJuFteY5dkcCBVD8V9uKuEsrVVYTv9H6c9y",
  "key21": "Beq4U2D4ejGSaMBAGFt2yMKhuXYx6fsKGptqcGipfNJb6WkS22xo3gbn6xWWnMmUkTNLVsEyPxyjGmScebStfkz",
  "key22": "3XXKuQgQpTFqn9tSrvuBK5NaJaqHh18YJu9xvhuiapA9v8KAisimH9LMeDt1JJfec1vbpRKvX9h6q2ps8cYkjs2c",
  "key23": "4gGRW7J5zf6ujcSUACYmH9puHrgu9aKL97X86ak3UrTmM7ehEaG7v4e1UXKbNcnRLhxXEx4ge3WDK9PndaL5rSdx",
  "key24": "2vhrYgVnhzQGkPCAPV6MPcH2VKa2P1JnayNCD8C6JFNvXYavsVut4tvDhgqdP2se1SzDV4XsH5FYRFF8BbWNDyZ2",
  "key25": "4y27avDwqydWD9QujXrSC3yMgQcC7y5XwGbqmbJ8XjrcDtnwqEonfZMjGnyXKtZLGnLYPzsaTioZUJLAs7J9EE9t"
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
