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
    "2jwjhMwsQQGex6eQSyzh5pRgVD5TDNxWLSvrkFBYCAxEN9LQFXCaCohNbRisT1GT16U2RaX7FdgayY1pY2gbxVqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fyZ5LqbC1uc72PcAjvDEhK3eNkoG1RVZJ3M7CJhazzwGj8ybKU42jBwz6VzokQCZYjCuUUBU8z6Bx99MX5YUuUN",
  "key1": "28BHKreremPczbMp25v353FeKZTuK52TNygQEqc4wTjukaMSzreB3s63UfgvhpF7MoUJjnsBTQLoCMMW7Jqh1Nkr",
  "key2": "yxsJ9YagL8YvfAKuNmv2BbGKfmrE4NFARHzuXYJZxKsnp7yQhRAMSr3SYk5sJbzdFzWa1anL642bCVRFu32ch8b",
  "key3": "667qg8PJfT3W23TWzhyTYpQtSay3P2QuBw4hax7t7yKJZW4jcPpiqAhzEu1AWLQ7bsVggVEoYnr1rBbBZ4QUH3yQ",
  "key4": "4EaGgkgtXxdU9HCNDTw7EKCUDqXqCpLy4Q95y6e2oGGVJDfLPXXaDDKBTskuH6yK6zTmPZ5cBmYNxQqTxZoo3Msm",
  "key5": "5AfLPLrT7vYK1kxRzr7zXHbzPtzLC5r6H69hjWvk11ww1UwDYzCnc9GiaCWGpjuSUuTaCUogahD2p4WDLakrj532",
  "key6": "5EjYrKa1StC48ERqLgh72Q1Hoc78c44od91vy9UjAfG8FwiU1gsnEsTUgSYy2kYyjxNv14viv6UUvPTYirpZxk5j",
  "key7": "2xubw7dS5d2577YrYNpMJubQ7bKMXqwenNsobHWxQsRakjSZspvrch6gih6r4QD417ksSFWqi9TQDSfiEXkbQgpQ",
  "key8": "2wo1RV1ctT3CfZWRRKsXfYSCwXxMYuoP65UKuvynBwH6b36YAohbn6aEwd1N9qgL8hYAyX1bP2AVBZq2rjxEnWJL",
  "key9": "2ktTJCuNiYPwDHRGBfZ8zmSUUNkhkeFVEopwQFp2mM8r87aP3RtUUNJmCG37TRnfrEczFxdaQNn2GAN8JbPBsGNo",
  "key10": "4peDviAb2PQdEA4kxm63D9aTKuDnPEeHKfY5KvYw6VDkwqwQicPZhphHMvNS1HZbaWnVjXuhTnWTjtJra2UVeX6",
  "key11": "474y7emALmxXkH1zfGFabt9dZevaZeDcZoRXSWdxRJjQcYJN2QkznqjiQhE5H8DRJJGVNHSiLhJXTvNddUNPax24",
  "key12": "2csqPi53e6JSb5tYurAvo5xzrZkr4dbiYARyHpwcdJta6QQLX5f9TGbz9GiKxU1UNLwPAHUWHeP4KRD2u49ezbRK",
  "key13": "4ZTqdxJ88S7KrGEXiynGSNRMyCnsYTs7hCBLyX2W11FQYtGpmxEPEb5TXDStBhTeYdwpsGokzgFJVdk2C9SHibG8",
  "key14": "4mw7rabpNh4HsDvxCzqD7LertHtGd4jyQdBdDQpDQf6dwA7HDEYsvLiwkWL4ADcN2jmURKTfVUS1ZxyDDaWdGtTC",
  "key15": "5iL6xc6kf9ySwhoJJTg9NWMpGhWZKLYw11eLLtsuiNqoTKxKU8RqGZRfF2kqGnNQjeLcXC2XtUTyzqJKKdNTtdLg",
  "key16": "3kfoAHi1ZNXFknJnoygUFyAeZ8jajgWjquDnFgbAbzTLx6Kr868H3XgRhvGhXNmNii5ft2y1HYFwg5JgkSh76c4i",
  "key17": "5F7o7dmC8Qpx3SbBNeMx9UnbnwYnNpA7vFEw1t4PMQCZAzvmw8e3DLCnMnAAzYJYzrPw3Ugyvz8SufKRSr1muUch",
  "key18": "DZqYVDvC193TwQR65YcYdmTKDkesX2dUkNS5LNULBrnNwQysfFpaTE1Pi8ojSCedLMNudGETtUec11j8PvTaSDR",
  "key19": "4UdNd2nu3W8Rha7rTs8TwcgpjWHdEx5hSn6SmT46ynZng76AEUcu8mu6szMC3M1172y8NPosjFQhWfffK4Usw453",
  "key20": "iMvBgDpQXontem67xppc8nbzXMt686B7YoyMrgzhA3ZRkXK8SSQPAGsTyCP7aT8hvxfGgjXnYWE539R6NT2jFwH",
  "key21": "4VhmJ4B6hH17uFR4PavAbrfBVVBucBdSTQrC46M5GGywKYQnCzKDGUrbLxQoFoj2tRoq3ffQQQMEJeGreL5bny7E",
  "key22": "44YaR8ja6y2p3Ko75C1mNrhH5PCw749wrVz2GDpW7zK2HUZEZapyjRwVk5aZaPRJksmKbCEfzhss5hMtfFMUoscU",
  "key23": "3vyVGLRnAykBSxuqP18fNhSTkRF3DJjJPXKYGcjNJrSzAg2N96qbi4XK2yNP7ogyMpohepW1YWU9nRqXxjsugZm6",
  "key24": "5TN8dDwnwH5d8tVuhPzWkvet5gGzX1RexoyoZuvxKQBfNcv4H7zazwnkWCspJtiF35rMfQrEku2zi3F71iJfJDFR",
  "key25": "5e38kAGsaZyyMYuPqEf1qpsVeciMNqndfsAxEwuMjVwcjkAJUcAyDeW9Yq8HRbLpY7FjJv6aFGbzsLMb5KTw7HP1",
  "key26": "5v38Q1S8grnvivkBK3EyWPDuMG3esKG8uUURLRFrCvQVE8WJdSr7m2UoVB9BAkWsRwcFHvuQH2tV5UJ7jcHd2hqm",
  "key27": "4xbaL6GmSfpaUooYpFY1RsbTsLADv5nxsbKxSb6W4vMFc4NturiyeGim3Kke2beMyXZG1vfS8hUeA5KwjwL1TeUq",
  "key28": "MJBYyTF9qU8vX8PLwjNwqbcH6in5qBanVxvt8YXhnrT126bniRLJqFFQN8sKrDnsjJqfe7z5mvC4LT3S3A5SbC4",
  "key29": "124kR5o1LETvXUi6maHYWt5PVSMeiTxXVXU9F2HV69tW3zEzTJK84K3VvffLfmcgoQBxztaFDyz5xzqsaB8MhF6J",
  "key30": "yY24HaSokGFoSMyhjqx63HhK3qz3qyA6gbTQVrqaVXoteWkMzRQndNRj89zWH9kjYoMmC1En45p1M8ZqFCneth5",
  "key31": "25CB3oWEX7PA7nc2mUQw4xZeGd1Koz4xuLMYcS9fHELwf3kqGcJ1M3qeisUq5idLre2Uw5AU7RxQoi2WzQ6fGSMa",
  "key32": "5aTH8gVXCSyeDK3igNumHn78wHfbeuUiU8aexRpNUHzTzCondAdq83saQMU9vp3qyRdg5jN9TqvQYkazB3QHHFS4",
  "key33": "2bjStr9f4hMbDeFJTP6pvf3EvXA7jFcV9nhuXWPeb5phs8NvHbtue9qvzjogh8JLDV3apDDDXEa5JkjSm31TBkRe",
  "key34": "3odpuekahuMR37Y3zdPVxRsmLovESTyg48DxuMrC1SsyL76MK7fTWcQ554bb8oiejkxzZVfxxdKNK2v7zEX2NygY"
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
