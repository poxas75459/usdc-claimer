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
    "5yRqFeQecDC7W4bmQXyZVzmUprYugVFX8zNCKjqUMH4nYJo8Vc3mCLWRAXbddddsDvAUDhvADtfeirxjpsRHTM5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rh36hb1PgZfjyA3fpr4SMyGhcesxLKgxCCLDZFJd7nk1ExCWYRq9DFbfGNZkZqV8uFhX7KFExn1eu12CogQVGmy",
  "key1": "4NdvVP1jcM6uzQgmGBpAd67p5WtwypNz1Bmzw2aryAwg7nkmg8Bx68QvKenUXTpsZKCgGrLChMLThE8hW47sKqX7",
  "key2": "4pQRsM2SPYkEmyMQP7pYeHEwJKYL4ELYNfuBhxWp3moHLz7hjwUEsrPFtbc6dU9FRHgFXGFBrDwQr5FihvsRXGJ5",
  "key3": "45QAx4NYjcWNWvsajPgER2yo89rcPjMmC3Z1ro7w8AMqNwBbby6YzYwU2d4EcMQTZ7Z6gp1JUJPQ6KrpQJe63u2F",
  "key4": "5xY885jK8P8pTgc1ruhkCseuq6wAVUcjEiJoS7uGHCkUZQTzti3Ub8bsueQ3neWDw8NrjZuGLiMKjL1f3nQuvGpR",
  "key5": "7FwGFar4bytNXQ4v6phJmoQUedqCWpokCZhWmi8rB14gQC8GU8gzMJWEr1GRv1hJ8H3QEx4drSSQ7A2WshztBQq",
  "key6": "5Zg9ansQdmgUTsNqfA1xbgdRanL6aZvPZdEedhVEz35Agx9w9fC83kcG3pWbLvdyftHJVgygv7BJNW557JDCvtJh",
  "key7": "5zo3cc775EssjTxSwCF6thr2Jfu3H8HQAetZGysP6gydxKvBzuLFK3SysxeKzZVQYZpstFU5yFUfCQ2fq8FScFJf",
  "key8": "3TPxYW72hpuYkQozq45Bfgz9fi5awyWdJaJR3sofb3vxCCdxVviXAyETwgutYkVWt3rP3wQZTD8dmGTqfgrwq8VL",
  "key9": "dnZEvqrEAJXfZnEjdQWPGuX2M4o21e36pAP3fvt4YQSTK3FR2yxmEuLwxwgsifYg8TU4iSxp1sos5qtRQ3QCmcR",
  "key10": "4tv9h4yLp387q8gzVhYifV5KiqfoGfA4r3yeDt3PRn7bhAKhMPA9Dpe5ngVECziEEdm4YGCuXCWhoFPimMEKkFHi",
  "key11": "yDDbUU4uh1yPti9MuMoFKYJAZ75seJ63sNJULMdyfinACXKBk64bBdXF7fQo8psxWxhpsXiav8rZy2oFnii3RUh",
  "key12": "5up9XYK1N3CcZrHP4sdkt32JWvwRFmLK7F3AxG4EJvgGHQ4B5C5p6M9Gtdn1jEq1NdFf2gaNryH8Sn51JAxHwxfc",
  "key13": "5rSi7fsiEa8xraDoRi7KBcirbLtaw6wqqYUzxno7PLmkh6e4hPfLDt7JKujd836WLGVmoz3wfyYN4vkPHQvvVVUR",
  "key14": "47Ar2V3NJAry5vECwfYdH7S5xfJk4LM4VAjiZ9hZgMQCMhQ7Fkw2pAxaserLY28nTYcqUmLo4CgmGnzeSQ7VD9f4",
  "key15": "w1bRULsQ7wtrRsTobYTzC6WyocBsorhVjysyM295NdZBfz2uS9JTMzHLaVxDgbHt7KwTbKQ2T27AVvvuWUMPM1q",
  "key16": "24HHdP9umrDnufyujPhTmCtN26Wh9JDECCzDRgcTngrn2HjCgJaFeixFThGTCTZfasjfGDLiX5H7pyTbDPK9GRpA",
  "key17": "3yoNHcc4R6aP87D3QSQV8UcwP1hF4fQDh9Rc2VuHnfSgEBU4H4zuuGu5k28eGM4FCUAXaBH8XXHLTPw2cpiJwC5C",
  "key18": "2qmKZSw2K2b39p7fSAoyy7XrxuWm2hD91T27cgczaEAi2gxwN4rM66Hyg8DsPj2e3dZaF6jz3RqpcgJ9DBG8SVJn",
  "key19": "4WtM44Pdg8HjoNmTUzdJFmEzqMYAbAn3HyxZRJMTErHNougouwmYgUHgZetLgn19WWtfKyisve6bmHYcBbP7MdZX",
  "key20": "2xrxp5bP3qmi7JgmbbeNZiJKXgBzYfkqh238sK3ZhPFcFUUWBgeYh4tgUAhrgup7E8xqrNEt8V1QXV8ed9Hz1HSq",
  "key21": "3tbiUAVq42mgAdBqEpqTJziSSUy3TFobC1tSgHZ7q5XErHciWvgs1nxJcrqpX9U9n555KSW3nNv7rJwWRp5LJ6D1",
  "key22": "frX9PeAU5wNUfjrvBYb5mdxdx55Rjm86dh3dq9ZQN6iYv8u9vkFBr8hz6UGoqVesaz9hfHpVZ8uzAqtkSUdpMaq",
  "key23": "5vXwdbhqwEm2oJyN4isTy56tvsZFwWQ1veQ8RL3BDUEKzgW3Gb1yYQm4pT4kcDEmP7Xz2yaaRMikQtpijXNN6JnH",
  "key24": "T1q4o2qw1MVMah6nVhg9mu5xUi9qkGBW9GFXH4mksF2SGPhS1E2SRMNokuQU7NV2FeYRoiaiRwKHnTZoJdnLQ1D",
  "key25": "492rsZbva5idumV4sowMMiC74Vf6tL2raboLsdrw1BSVFc6SfaBGSfGRVSovsmrSCAajFBJtNJvnMwE3aJyLckhb",
  "key26": "4FC3Vkiv8Aencdqz3QCnRmRRZ2Ty2VAyhsrCP7HirmgMMSAQ5dbfEDc6hHCCzrr71q1cPGy7iCDT6AdbnA2cuTdE",
  "key27": "4Yu2DExYgQQJNydteRP9jf9GSLGEHwk7Y8y2WMz5FKmHCueqbZrAMXYGcWww51xREtgRMDkPQzQztaH2mBuyRgAD",
  "key28": "5akAVEXjqXkGm5duYUhWFpgqcNGieq5yygwZ39hA2qTmhy3LE7hicn7smudpypGXdwEcLkKqL9mGJ56ygexhEeCP",
  "key29": "3RAaX6frTqy3FRyEsx4VjLtzifxuPwihG3ZkC4YqZej1uEvQqdKwokvm5tmGgLxhBYeQytuFC2en1frwoxGQJHps",
  "key30": "5JHkrxGCj6pmQQEz64P5XE3jbsvbi8hqYWh1fRKSjrb4QPvB5kaWck3UieBwD2WaUVbsS4r2jfAdt1wdMeuxnTM6",
  "key31": "2AppvpJcXB9BdozaB827BpstusoqHYcR5Wv6919Q7fkK51KiYQ5RuhhUHHe4Y2c9F7iEkW7ZjXSSNK9FxQ8ZBvLk",
  "key32": "4QGGgiaPmUhAie5PvHo8Rfb1xpzBCakyRX4Y3eeN171e678y7Xdn2oA1bxcxKPENw1xG6TZ6weqwXPkXbsDpEn8D",
  "key33": "382FCxeYFQPyFDFyBCS1XGyo3Moi4CJC9ohEor5kJxYZuAwxdP2nQYffNeJPTbcZU2K6zZXQxkQuaV5tYvxo5qw4",
  "key34": "4fFFhsgxzZgBHkKhDADHZDhJXig6xt3qSg4zdnT13nitAmaec5YiGDskP5oRSqAsYmheeDTj3zrXhy1dPe3FNU14",
  "key35": "2duMfh8BPNWxe8n7qDxB61ubZxRP8VCr4t2iE12ADXLuCq8GXytgoUmzQ1fAacthKHbayyU6vAawXzu8QEwcUY7M",
  "key36": "wGhDmVFCeqWMsvaXamwg7T386Yx9zc4pU7HwW8CGiokYnT8KMgNogLkktXHn8dxGq639TCpzdFtfWdcoGBh6Ak9",
  "key37": "3UdsCsphZCg2vXa5BYDZs2FqQ4KrYs8vJREezbiZ1BKVFmRT5t5Jn9zBxc3iu5swszEbqNvTapCPXbxNpx346pWp",
  "key38": "3FqBezvdpUseSoPsPCuMjH1L6gkg4bhfLSfwbia8yGw8ibTi2Xzdbnbx9mJTr4ZzdtJaTiuocJ8aKrm7xYHk2eJA"
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
