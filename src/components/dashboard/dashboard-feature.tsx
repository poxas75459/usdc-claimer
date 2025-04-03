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
    "pP2BZkiMmR86Qjm6A1b43BWEjhWpbitUaz54gKASU9qmbwrSooE1GGYoKkdDmMStA2WAcNvnDrycYftQa8MskXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QeJLm6hRFkwPgvkPWpsLQMbkMrmrrBSvTBjbcCqESKjZoNABjNqc6JuFqaBDqFpfgpnkVSuLHBUY8HxLnzZcQZn",
  "key1": "2VksLWcwyo18YTZVSLj1i5EAs76zdE9GJQt5XLYmmySvAnpGwT2VgpxsKj5Cu773WWSok4ibCy8tMcSH3uzn2yH4",
  "key2": "LfeCRTXz6GSkPT3xgDsmrGvubMYkCZ81F1rEP64NFbAM67gztVCBJHtNCfCSYcng46PJqNx7it1g5ddWLpgy9Hi",
  "key3": "2TkZ69GWAzkfize35BVXacTeL94cwZ148CGrV67vjSfCHZ9JX6ozzuAHFG89iLwf1tGc84Ses1WFK3YfXsB4hHh4",
  "key4": "5M7T9RC3FvFJmYWchkoowGozY6KrBpdpTt6CYpmwhaPacs9PRBD43dh3Qc1KqhMvJiSSavw88wfkVYgHdg6sG8ps",
  "key5": "3T2GTo6XkDHF3VBQHt3gtfR8VHoFoRS9GVegv6ddcVnVfKrJTQYHGy59QUUQ7wMpgGTysK6dFNLxRp14srG2JXTv",
  "key6": "57cAH8tnWwuFFHq7hA5NEZN2p5WBrHadWWAjyxP3eefrfwyfCxyBfx35vNyNSNkiV8uxwx6oEukSZ2FCD6puLBr1",
  "key7": "h9TfsnqzmYZywPCXbU53qcYPmrqpzwgNWY41fZHoRiJupdshmRvXahKvG4wuUiQYkgTmUK5tYpVcRtZgkPuSyAw",
  "key8": "3paWY69NQABVmkpr9vsrWcPDFUmwQbb98vNeUQAj438taKG9jpx7XedmSUutT4P2MmSEanuPJDunxgH2iy9CTeSA",
  "key9": "Ms1dsf8aq7YPq4n6M3WgQcX7Btih4tK84hTJAFFtDcpMXJeC4ecApTLSwCG6jygP2muNAvkMVToQyBYCCbHme66",
  "key10": "5SiscYogyyBUHBu8Gz6mfCPz6WdGUTrLgaSmCy7HJvakDotnAc452rFzKCkvH92dkWPBJgfugP5JUf8UwhrF7NQV",
  "key11": "Sey7AkCKHC5kkuP75pUrAZawTjqGxha9tKYsKCtoX17Lwp6c5fD31tTwGyvSK6zuWxxSdMNnUmQn9mj3hUWjSGP",
  "key12": "4WGdj15dQCMVRygDVX2v7qD1MasqyJuWeUfCymbLQFwQaChdzLpg39sy6JMfgU55ySfFvsepFs7nD2ZfbYD9CmwS",
  "key13": "2JvbUnPWhyFMNR2SdvkSCzFDz2rLvQozrKr3WQS9FN5Gxp5E1DZkHHvEbQAn1988GRymEK7z41xXRQW7Ke3BfVoZ",
  "key14": "54ifrnBfHvDuLSmfkM467LmQZCXtZkTZj3f1Vj3cBwrkBDQBH3236U2aLgLsBBErjkNHyv8oBeyBByoS1quT9fLv",
  "key15": "3wYnsUAei315LYacWdyKHH3H6NeMtxmbXULQuykd9ru9SXEuGRKyoVVdGTVqipFe5XYwhdbwJd8JabFYf4TVz9N2",
  "key16": "1aCieH69Pz1TfbRsPyxHpiH74dEGsnccWsLcpngzrvxFi6KsAohsmtLqAh2YFWF38pfsuRszrx8GW4WTMvEM8rd",
  "key17": "417dBafQfSMxBHej1fFVExTMCUiDQ5Tc6ujXDN8Kiu8qt5SrioaiFzyo6qDMmK83UPxnsQLR7Y7BvRMmiYBTFPfL",
  "key18": "2QHMS2XrUpHTqwsF7oNymsZcL5Ldbkcbz7mpPcYkJwNN4XGs4182DqRhWPm4nDxVmnpeZktPo1dsAmUF49pfc4Qk",
  "key19": "4abyT2uNPJYHLHt45fMMktKrGLbaMeqeYDgq3sSSpXqhZ9BBmb3fFb7e1i2BUXCtnKtyWvPAfg4q7FL4WBK2waZK",
  "key20": "3NT5uc7Wfud6o8ArjFGMvffC5PP1g4tqmoVtRtrtrmk5hbusYCrUP5c3xZpgRV2BCnqVWcb4tjp9A5TSVCXVpc9z",
  "key21": "3hRFwUHbBzqwxLxmSMqeqP1xk2ou62XCgup3UuGk6CUWBTNpdkfnVJ4tXf4gN2msPM7CMk8aAsEFWHNqzDjRrAFN",
  "key22": "67bSit2HFZxgCkZQpcLLKUgWfY4HjMxMZhqdEbgbLfkNYBTGP3ogU4jp4x5MmtceVQ1E4jyNkvEhkts7kCicNKHV",
  "key23": "4mWWHMsM1Mv6hdocSgaGQWgGo3A7mGiqunZ4JzzvesoekZGn2EDfm75voGx7Nrozepf9DusQUinJiGPJ6wgxduR1",
  "key24": "2x4kryXXUWUo2H9VVkx8UC4wTx2XESXKzear1XM5boh1cCMKZimADz1ZJE3n1dM7VKV8tpYcKqg2wjDj8xYbVv5t",
  "key25": "3wKKSrREgVWWt1VVzJmnc53GiQgYB99XPqw8vjpC6qLuxGMeoJdit3yANjYQc6KqNQrkuqSuaoaH6RCUmc2moDaN"
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
