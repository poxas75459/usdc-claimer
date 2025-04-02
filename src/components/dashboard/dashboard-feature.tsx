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
    "3tukYEQ2B5C8k8MgojF4LoM7idadJZ59qcptPcjzzV8vBmgc9oQq7GrNfYBuwZLGtM8VUUXSJvFJRYNEPuDwBTex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZAY5i6vkhYaWAUT5C51EqWo4pUxxWuuHZX8Tczi7iTgVu85uSa6shz5x3qh9G14uoDwGAGxtXaPqCcNmfoeiXfr",
  "key1": "4RJEFGwCs9A2NoUSnUTwRPBz7bUsCxfCpwCYNvUedStpqC9nurACo55VB7rnKzKPJkcDPUh8ucdjd3Laif4YbucZ",
  "key2": "4LuBSH9KQinRNBQJZvGieVMMNd99NviiLvdGHZYF6MtQ1ga93QbiYQD1vMpF8UkpaTwWkuaL8JoWFwqB65Zpn4qa",
  "key3": "62yTsZAHnGD5dkc8qjNKWwXwRP3RtfFPAK2WPsFqwvAhM8dZ3VTqFer2bgkR8j2mbseTG9a7NAiPWWi2aC6gmRVn",
  "key4": "5bfxpny25v1qZczTNwnd8rbCjZdVJzBhBD8ukuVjiewxTSgAS9Y16yjqKSef4nQhhYV88nemGgtxR9uqxuf9eyWy",
  "key5": "3VC9FRTE1waw89XBRc4MgYXRXUDzPTRs3uUU55thKvMDxSarbLBujLVtTCMiKY5fg12SD2YzuNjEKeAQSrqMQqoD",
  "key6": "x7mpeveCrHfk1ygrJzLndhxYp4zGbUFN42tDt6NxdWR1UhL3RwpF8R7MHn2hQ6uHVqX465DQgRGo82zjC8h8SVC",
  "key7": "3Yv3bD9hQjyGWgKvUEBzUDJYFDDQkdw9wTbsHMh7u1DTJ14WqnsYHHhY8d1eqYwP8L9G5RbxRtxGiFmYmvA4Qtc5",
  "key8": "2tAStxr1c6Ch1QCnvMsQx8yY15C2AnbC2hEPsMzGeUEuHfdyiWxoNPfLJjSDeeQh981Ut7TB4jCxBDHcBiiST8zp",
  "key9": "D5ptx29qsuztvopUWWpZ4f7X3RSP8UkbzgZxm2Aw8p9UTjKdchik6iMYDxfPUJRjue9b8NqBc2RYALrcVEqGPt6",
  "key10": "JWnjhsFtrBTx9aFYtqzuVncnFU8sa4ztWaWynUXBM6myFDorrYndrNgRrJE4tpheLrP47aTfKVaGBevgaNpShCf",
  "key11": "5DR82nd6zZ8cmrMS2JxZeM9Ae5ggCiPi338V52qnqEaRzjcfCZ5SBxmjsAFuq1mgCPJ7Wa3QbhgqPhh4ZNWmuAXd",
  "key12": "3jqJ8eCeyQsQDNehUZzcY27o5kLrtCYtqzfKhCRSs5q2pbED9aZsy3Cwy2PUSY8NjmJXgRckugF3hS6nABVDdQvX",
  "key13": "3oWeGhBXMTAfNsRNZAjrQonTasd9Tz5jk4FQomr1MSGecirJuYi4og26JwetrKQdSYeWEBVCzPvEMPBarif6LsED",
  "key14": "oRXgGZyrDxxQU3oLyZMtshMP8xy7JHczuJQ25AH9S6jdYU7X9t1uFshmC5dR1ntHnv3uyLuKYvfMZSy5tiXAAGp",
  "key15": "2LkfyXKsPFi8YAuDg5Uc7GRLSLj7kEe5L9XhQmxG9Rpv7TDpLiW5vbvfWYPrgRgiHkiRuM9Znb2JB1364pF97d7x",
  "key16": "9c1VfQyLKZNya3qeHDnSSqVDAykRpCeELuZDTJhaU9d8fkwAN2N3zDTM5x8B8fDqN6jxHTcoFnvcB6pakg7XbGj",
  "key17": "4ks8jANMVz3UGv9V27LB2t8j92rrA4q6SwfppbmpVxYytpwcSPiScx5m6eB1HAyuScunKfzq7AawJAxiXyoEiCpT",
  "key18": "2HYTFLay26o1EwD4PEFGCkscztM1CALdbTvVdwMQrmFmS18ugzYKAG5NpQ8nniygF357Udsp78hxsf1a8kk1kaBz",
  "key19": "588uERJPCUE5rCu8WZnfCfgotk575o1jLKvq94Ui8bcYEggmXi7sHs68Ds54WCQR4qt1bdBtQE51nABbtJgE8A1y",
  "key20": "2L5wjNBW9JnxmAD9LBzaZsDBs3eyDVqPr48KkjEAecV67yoJod5NyJR1LwxWXnh4RUFhTuWMvw3mg7SuqF49jJW",
  "key21": "3h7ey6vmxnugZ9Xn8Bdok8pcVEqS264jh8Q5N8LbuCxULZ42oGdfG5Y1W5CqxGnKQhvBg6HnRD3tDnsRxPDjj855",
  "key22": "5xsEp5CCW9ebJAUYHb8kP3KSbdFQEXPsNAqq3L3DGiSAzw4aUf1riEfGp3Uqo6D9EW92mFUBvPg2YWrmq4hpSoq7",
  "key23": "53o5ccKiWduiRxFcDhnhERJikh9jxConDSyQqS2z7GhvX6PLZeq6rTw2zS7gZKhMNWSreqZEby3cfCRyqnUtxxtX",
  "key24": "3CbAK88PYZBRh6sNWsF2ao81KDViAWkUJDhuN8YhfP3LUTiUG62ismgdmLjBKSNGtCNNFQcRUN7L4birYuzfiAjN",
  "key25": "4sQXYX8p2xuUtkpPC1seS9avQbSoFn9xTD2QfSRUMwQZrVYco8xDt4wUSLjzVjsjcvkNTaX4CkrHdUfygaCRL79p",
  "key26": "2RMqxiUQECuysL71apVPSCuBcdLAUG83hBev9fB6P97fkdrmXmCgcuMrFd36H4snEYxjrxnaiGY9TZVGZ79wwuTv",
  "key27": "2nqNRaHFKiJCgCZPgmH8SVY8zvJ5fEUf9hmjxZVdDqneYVtiXSeHhUYqQDuTdgrWXwxypA2AWpwqg7MJXPt2WKjg",
  "key28": "3MQmZa9L3ByxTY1WGenerfv3mfB4wfqUdRHZkroRUVaiFW1xzm4Gssf2ZcJxW6KheV59HiYshdGeStjnqDrsXnGS",
  "key29": "3Xa4UxhVbDSgJqyyPAfS8aokmWFWEcTgA9UcEbYub3HFr1bfEhFKLXSJ3Lnm3xa5FY3vb313kNBgk54WRb34A2tT",
  "key30": "63S6o6LjpZpFPsWM9wx7sC6urV7o78LPw6e1AoFdzbnpZKcYGk5pcBzFdzBM1SFiT5xTmS2Grsnj2vrL9jKu1itx",
  "key31": "3nWTe7a8Ctrrhk349bazrfuKTeBCFkmTcQ4VSy5matcCH5BH85ZiwdcSLriyVxoAFtEhUCsLPyU5E1CyK9Xuvx3N",
  "key32": "CpY1g9dcy66hmYttJXiLkALcmNRQUBia5kmvwDpgSXJDxNRzKpHkZWkDsorQpkahrTqhe5DiCV1rNfQ51mn5wtt",
  "key33": "3zzS21T4kNhcQjhCY5eqJ3z9YFSUDpL1FtvjrGfJzAZZFwhFMAerhLgwhotVUhD5uLqV82J7yeNDBaPP7d3tovqv",
  "key34": "f7QJvcZZbeiszjrogypRs2cTxtJ1Q5btE2jsmcgeqm1ZPPqccPFJwEtKaX35AF2hZTHf6tfs8PMz36Q1sztPkWT",
  "key35": "3wZTvytejw5dP6eYsDsuKXB4C6JhowCyF3V83EkoRdUvv6DeBoAXtiGjMJrgPxfLiaae6CbwT4tx1uEPrAqqRvNB",
  "key36": "uGKgSHVT2jgwQ1GwVDSbfPFYrHWLEUuxYBxfT3BwxJhzMFk4JFeEa6c8hL32wcUV5fXWEAxXuLVMeqvJmpHMvwR",
  "key37": "2DhwuCTjogiq8ucqi6n2z2cpknzzML7JuHcpDsyLGEBrtDpcAyYW2b17Gj3z7GB4ZXmKNSFpf6nM2SfFNxKnM3R3",
  "key38": "2khJ322sHLjQFmEAuC6bzAFqqKNJUDx4dQbPqBpxYToVM7iWRzRJ9qxe7w9VUrqTNNC577staD2AvpxcJrjKgeZx",
  "key39": "wuZw9PbW8ibhK1kKeJE56uwBvQTjmvmAA6UUs6J4taZwXSjtBCgbtHMdE7NXYz5vD6hCUa5sS4CkAEHr2mXGFzZ",
  "key40": "38qWr7KxeWL3r5km6CGnZCi4iE55mrQzWL1LX5LGTKfyuM9GLEMYRg2QkwJomyG3DNpsUX1QTHJAqoBL3AeVMevr",
  "key41": "5dAKmRNBddkJx42tEkvzmit1yvJxz6EtRYZxxGxx6GeakPvgksuT9yhibTZv6kS6eNCXfpoyK9SW8uejcoDvk627",
  "key42": "5N9H4gFEQ61yzQUgUn9jGk2eAUdioP81X8eCbkyV74WvJW8U44vCQyZ4s7RnH8qQvVB5VPYKqU3F5WRC6adY6oL3",
  "key43": "3ueGq5VMkwsvsn3YKx2RChxfLg5mNtP5dUGQm7gF21PNUH8AvaK56HFJ9kmnkXR7MsMMni8xhZMDdjTnwCBTv2hp",
  "key44": "3Zj3DYFRsh7NHhJ4dQCvUaTZkUMofTHzsGgppPBcrdBQN8PjFTdhxoNkdGmxqXgKKACsY4TLR5TYZ6hHYUftjZah",
  "key45": "2KvuoFk3acwBkSUBVdXY81P5xvh22yNLbKtMsNdreABNyhRGeGNppE1UDWutggU727AphBfhk4WdZn7614qrRfSU",
  "key46": "4m8LX8Wbwys4G6unHR6iHZSwA7qaM1kA22zvciNJqsLJhrP7pdYPisLrYFD7vmbCv8XFQJdSn2DGviuho7s2NRcV",
  "key47": "35Sjy2y1og7cjh64u5BDmwxsF25kp2SUpD9UZinDYrQMziKVUKvqyUqVUK4zPMZrt59XbMP5pxatpLYTdXEEHDtg",
  "key48": "4frNdEe1PDdzuTA9n9TmyofspvejhvWswA27wX4B9hAwfNcWWSdRsssqct7KBydePBrffjbtG2RBUJu4CKKkLwAf",
  "key49": "2VySd7mo5BS8TQ62TjoWJqMPYDMnbMHBhSaf7dt1BiTP821Xkf9FSSiWMBfon9J8zVCYB68wjDxt87aCrcpYg1TG"
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
