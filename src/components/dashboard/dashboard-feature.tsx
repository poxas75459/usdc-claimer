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
    "48f8UiBNnuPMLNFoAvct5mMo24DkCGbUnxosSyQp2VRVZM5Aj8A6u7gmprGr3mv4jHXv5N8f9uqkLxnYQsmHPk6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2899qERWmMDRdd6ChErgYt2tk69oGr5YKCVSjEdGMHvAy1KbVZsHnbGgwyK29XuLCSCMJw1reF1KWvN5djSSZAaV",
  "key1": "2HuyHXduGB38dntjtyFbte3uFuLH2fK7J2y7u9X3eA933Lvyb3G3syTrLsbjr33wfsrMeZKDK4c62byQnYXCEejr",
  "key2": "3xkBsxpxiTpWJV8B6M6GDqr4Wha7DUT6LgHuYmSGTB82QMDWVVxkW5kqoLAtBTxLxe4oW1gV2Fae35jW3gJE5Syy",
  "key3": "2cmGGYgcPe5HtiXkfYVcyDJgw123THadsUoTgAJASUAokG13ox2zPtWtJ6shL8eqNDGfmkRtGdPbfWgTyoQovcoK",
  "key4": "3KJFziQnQoh9pTTjQKrpuCAALttubNcu6r1kW9Wbo6hX8EYdqiwzNzZM7TRCSyybdYWztphaiG6tUkiAmNPnQcNu",
  "key5": "64uR6LFMFYhCFAhye6JYhbm1ja8EKGWNqAw3xMwX2Tr2E1JJ7U7DXp7ih843PdWBWQr83YgRsvUdD4dwc5J3mH31",
  "key6": "qnaP1yB4u8xmaPAjADNmKh3ps3Fs3XoMbqzyWrDpuStz7pqKpUeBnSZ4SyZVj4xtBfyXsQHM4pZS59vbxdnh7Eb",
  "key7": "3xMNBDTXKwiHDJ5VA64kvzpaw1vtVuXmNtq1xeNpmCXtEHQVGyqc7sjfJaVEUwLytVabdYiveVHVomUxM9e55agH",
  "key8": "qW8QVa2GMWdbMfqdD6wysLSbRuPVVFwsBHAikBP1791hEdFQdQf3mD4g9SNz32DnvoEkEch4p6BnWw58Xe22Zo8",
  "key9": "23JBgaFEuP7Ku8Lf5Xo6NdhZp4geiB3QnVU6A5z8R3Uurs4jebi1ngSj8xx9wFmSXPrc22s7FQan3ZXvfj8EtqaN",
  "key10": "4WtvquQGrRfZm1b2P1coacX7qiKraagFMc4qnJap8Cdwosyq6d9SVH3vYxuYrXCjNFtMD5HxG5kFuUa6xkipvNGf",
  "key11": "eJkAqgvsy2u4biBiiQBYEyP1swDcRERXFA25VoynhhNzxcuxcmCUPaGTFvRwSeYYXKYRe75NdnX91QgToyp3qR1",
  "key12": "5zyyntuJ7QSAN4ySGj83bw5DmdrYzpNkNE5epEnX39krHpDPwt1AxAZGcfxv2xRUYQwje8R1FtbGmKXVGZVbjKar",
  "key13": "4kPLywqekE61d4StwPqk3GJZPF1by5u6yAUyyMZMCC9FTUg23KxMHZMXXqybN1soancZab4cvGtSSVcz9Jk8G1EL",
  "key14": "iSYa8yDXAkw6vvFXRbqiWHhTM1qsAvStPhFALadUCDeHjhUXXvfYuDJqk8aSgKkAdoX7acZT1JtNCasj72ng8G9",
  "key15": "4WDjTmeSNmp44pZpKzQcu9jjruu6q4ccCrTEeDJtzMmHMXEaAEWDeBkorcXcu6wmqh65pHGqpvLoVCCJGWD8Ps3z",
  "key16": "5b3JrAWEvXAhv6rdpcbT9XvnryvBF5HzGfuu6UuizUbtNpRDwee1S6FM5qhBGbja4EjPo63CkrQHv4q2uVxyF83h",
  "key17": "4ddY9N9c5WDRd2TQGAU1i4CBeJag9tHEu3pLLo3EhzeLYGDBkYhbAnCAWFYgqc6CzrhVwAGrDqqngMc52aYJsW8z",
  "key18": "5qefiJWPwNDSAZgfLg5iZBmmSK33MUDr6qAq8uQeoSNCyxtnu3TFXDT7hbnoV5QT7YPMCuktt7zSEqXhpGyoE4bR",
  "key19": "2VHrsTkoXjPSzNqdodLAkSng1Di48LTDJxRVFwzBvW5uMCJSETBPUFFn7Rdc8ebKrT6xXJXGVbdtg7GHVdmhsu3x",
  "key20": "3yW1CSKdnnqSS25dzysqCZKPM1JxephRLLM8SookosMpR6uhZtJzYugU38ZHb9zotFXrVXRp3Cu3MS1T3zsT8RAH",
  "key21": "2bhwCuXb2hjGvqwkHAuKnEF19ywEd9jYdyz8naHkb4PjKF5263Fn9KGPUcZoS6dF7Ltr92e8wQ7U4SvhLwmKLXXe",
  "key22": "5nNCt3JE7uQxAP9kHMTz3rvNMv6rLutGMfoB9pvGJ5FWrpHXnLHASPZq1CfSZK9zU8d6XhaUF28nH6QxmYvKxoYP",
  "key23": "4BdbjPfnwww39sGqegXdQBeWzbVikNsJwEbWtMv1vvnDXMBoKtYd65HThuunKEoJzudTBSk5nDWT6KBGdwfuYGib",
  "key24": "4nfRJpma6eHuVoinXDD8KLVMyxshgiyTYUaPE1baSTckRE5SWnKrWXWeRzmomE1XeCAGThvmeRHEVMT4xEYWFGg6",
  "key25": "2UNrTo2KxH3vY4RaenaejM4mFNPVZDbjnnZ6rYSpbcYcEghy6ERDeZUQuxWdFz9K1UkxUVbZb55Z3cczucfbqZh7",
  "key26": "94gj7LpKPj4XbJxRQc8icRQfo3XEGuMoTtT1qAmH723ztrxkeQAqukFfSHWxENaqbzBrePBjCBa6Y2VUe8UugxN",
  "key27": "2wC1dtWGaAhAwh1nSJh4T2FiHD6XwSdCcxCVDFiBXcHEhySbvTYHfiDd6Stskue1eANuVG38YTAY31qA2vm1nWVx",
  "key28": "2WygvZarC2TLCuctKehiMVrBsu3HqcKmss4hYXLbSaZLSc9Jjs3TViYtHxyqa685FrPbxxoPKmYhG72zqN7EE66V",
  "key29": "UTKyTxc4uGxvZ9Fqb3ZkfaU8sasFPjQT2KZj1f6U3GbGjDyVRQbCTLkX56ACaEGGZFeb8sfCCgcBpaXBzMCy9Cj",
  "key30": "3aR9w5GakSM2qPEairxptiWyAm1v3kGFrKA5sj4CRtGqfcKkiXXr57Ufh6hqeQnNm7Fis76foePw7TsTsu8sSkrQ",
  "key31": "5Ky26KhGThidnMMvsqsYudLXKjA1EVLWn2ijo2MPHNkcoRRnMuvN9tT2YMEaKtYGKHmmvHhBf5AFnYWAqcGbJ364",
  "key32": "egUrPY1AnPuNU7YfniGVjL65ApuRiZxT7izA7QUYJaRgzb2s4vVy9UkEDtKzwiMCGtpnaA2z3meXfRSKJuXEco1",
  "key33": "61tFeSgw91eMDeAhNRNi9o1iiUXVVDKWcW9HSemy17d175k458nbB4jyyci9Yi8eTvtQ1zmKZm9qLtwVsfR8vg7y",
  "key34": "yfBXhFMhZTwzHmzDbUeVAMgwuPqoqP2GT5pYQWYJt1NZEH5qRzHu965W7FdnceDBjwk3YwzqKZGejH73YLSQioQ",
  "key35": "2uMjsLv5mXMW3mmHG3BWExdP4Q8PB8rvEy6oBqURcqJodqMdRyBg1JDJL1yGJNqW8fZdJpUSggJ1xAbMRpf4b94J",
  "key36": "3tcQnvCNUjX8VLcJRrK9817X321JURyVY718TpLHCmZj6JghU4Yyje2aaaDFGFSoM2RUkDwY6mn4RxiZy3kr5tWe",
  "key37": "c8H1SLCXNzmDBW9AR9qbnxLhmR3TtQRfjVZJzCaLmTJdNgoQsURjBjwv1XP8v2x6p3oPmAfaHHpYnqjyMVi9jmf",
  "key38": "h7asrvtfjoWur4EQBQ6fbHTHqLgLH4DtXSWs7ZJpasNPrTiotKv3bUFsoQKCMWTuEmZNh4k9sfcHGZrAXg5Emqf",
  "key39": "HN4C2U5gk27Fw3eV7kcKxhy9XFeGnLJxh5BcS4Hrvb4MBvUF2vjCXSkRjcRZUVeD5AQWwHRdG5kJmh8YfTZe6ej",
  "key40": "4E5dfcApdh61V9p1ucNFUUEFZzTZFKRnxSr3f4KmxszYE84Kq6TihBZLAMDQsXa4pMnqUrNy9kCEvgMtZ8qVkAUP",
  "key41": "2BFcrgtHUkXJjUfWGd9m4ZJX711gNzrKnDNeSe4jniE4LxANz65fV8wu8icZUBuN1iaTj2aRN1ZLqD4KRev6FVsP",
  "key42": "3GFrbHQLCqV7iRg9rCdoRcnnMqB6ESxyXWK2248DgqpsHgbaSFyzXxauSXNJLTGGHKkt6Xy9nGKfppHqAi8YqXNW",
  "key43": "2kKUCFE5b8SvmmqTwH42mQBzCtPo2FBceoVpT41CGTNjGeR83DQVYgsJGvNcBguaNDz3MXzY3W6B7a1RzdGDYqUa",
  "key44": "4UbiSTPf6pjF5Bo7RegWeWBkzfJ32ARU5wxWP3g5eaXb8sNfujhbNrXcjtmo2qYMJz2t1kmmSNC7LwjL9C6GLh5X"
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
