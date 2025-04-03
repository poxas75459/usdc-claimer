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
    "2A2XFYmZpCwgYfRuLotoEmwY1LFh8FTYiBPG7dKHUJPe4vv1Dxe5dpfAGMawr8wSzLdjp52np3o5Ew9hXq6VgsRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aKP5JXmyv4peM6pfn8YHBzmX7RuaJHAiWgqDxEbMuGXyqHC7KkcnqDtRk9PiZHnhxsa1BXbe1sjEHhcEXQyc6YZ",
  "key1": "3RSKfSkdoLLmtXxBkqC355joBmb1ZLV2299wKgrMFB43SrXb5kCRLyEFZAN6o4NQTwrYEDDcVtzF7dLUNQRdYhKf",
  "key2": "5pmmisLo9TC5PFN58v3k1g7DRBYM4bWbrVYf3k6cEzbgpnpDP73HZrrSzontmiu3F5dMTAfXiTyKLPThqHucjDPW",
  "key3": "652HHjoKpoHg9R2wvQjGq3hvruSL3WZN9MXLttFt1BGdhxcFKQdVMxNPuwnYSfxZ5nfc6CqrxShDQWThDJa4fPiN",
  "key4": "2pZG1v54zYNcAFKcUjm92ppSYKkxgxc6wwmEgeE9yy6DH1BACRjA2X7SaESjAfdnuHVnB5UuAQQy1EeVZgT7bdWB",
  "key5": "2BzBWB2xk2pFSNCHfAuxKD9STkNK9wj4xbFRvgYyFNL7nNgLsoB3joB4EKe2vppQPGmitE1cERj8LZcoKUQC3YWZ",
  "key6": "2uJ8ZmcePkRDKS2Ldw4QuQ9gHDUzjtp6DkYyCd9XGR1zEmLFe2zQdWcdDKajPaKSwne83j9ftzkTrMHQ14iRZgQF",
  "key7": "34QGqfkvdBRjBVxS8B7ALdoBQxerM3ghnyibLXnJcpLa1Bp5rmygmSWvbPZJ7TcEZr9GsYmqTfKsMuGQpFviuyLV",
  "key8": "4VfLBBxHjGSzNBjPwTvwpNX1LqD6MDj7pymRSaoPkZRUdvCJ7K1nwU147d88S1kKTy94CqHWAmkP7ZRDHcE3oSz4",
  "key9": "aBjZeCNSfXzFiCRBdkULttNZsxUpF4Hgg3ZtWutfWSpKEDmPvNbs6LdGakaaAMtd7QsgJwZyiGXWUY65EeQJrcR",
  "key10": "oxzt7FAhcnMdNhKXHJxsxzZHHpiBxV3EnirCpDpGXnVEeoD9sYa1CA4brinGeesmG64M2x3zK7hZLTKGHsTm32Y",
  "key11": "3KxQhzDwD3A3b2ojwHXGLHB4Ux2zbXeJRTPNYsKFMPoD4MxyAU6FmT7imxCNu5ni3qmuDhpx97D6cinw2bTzLetn",
  "key12": "3DfLYGDhLGbPMaoJ5aCJFs4B8jVx3vnTTnNoKSsMMKU6xQtZCs8C6RgpBJzw4CDqT2f4gcyELYoQkerCbEg2cfAQ",
  "key13": "yd41Jf4PP73kQNKRFnRpoMRuuPXMYPpJ6zpwMk9un8D8GdojMkiWhJwkCpbdMk1fSQv5EW6yFSVeLJ9DWpxZuRo",
  "key14": "5grxuJEY12Y9x95JwpovekUvu8qkwrBFgcQg74uc2iY6H6KizTm1t1QCqtngbshocXkajVQfoiGuaTH6RhQ52SMy",
  "key15": "3if6hhiwHVozHgZ4HY3dqLgGFrAuxDmLug2YRD8ZBRczTUFcyam4KWfvwnPBjUcvgEPbnXxVohDbTyoLZqmTX8MC",
  "key16": "3cQfG7XRfjtCp2ZXVRyrBZYeS5BHYAWfCuiMLx43hibs542QmmjpVwXFemgv9LCVmA8rhhcqLLQVS4CMT7jS11SN",
  "key17": "3MKjqT7Z3ez2o5Ln5aun9bWbRJkxBWa6ho4uHEZighcZZKa1XXv3s54WD7Rn21Av62PKXg32HwFaxytpFiaJnkCh",
  "key18": "2x2rPHSae9uiKXwViZgnATipXtX7ZSU7Xm4TWjPfSsGiwpgr7uxjTXqzkQ533qZyj9M7jwPVNFhUNnLd8pG3e1xf",
  "key19": "2oNXP6Lc2eJPuyZNXUzrKi1CcVfok6sp2PRNEh962CQf316bwMjNWdHDuuPbHaGMWYH6hV12cBddUDZLYtGSAyxH",
  "key20": "49vZoYoemNVdmTrrmgWweVGQMGVwfSmSj1gi8i4fTtsBatttxuUFSNt9N8aTnRV4JGyG7NcJrZwWnCSB9bTUxLE5",
  "key21": "xmXXiwwrwPZnHnAgRc5BAuhtE2t7sjKL5X4aYFha6Y8FLjbubb9oh1HrNwgLLJvB75eK6yd13BRULS6bNhCsQ8P",
  "key22": "2JXJhL2umxqSteV2nUtMYmYAVsno3EdVVWCfnH2EmDwkeAkwKQ11hKTh1Epj4TYLa5hGbR5UQoBKTUKfV8H6fEMB",
  "key23": "2nSRLn86civ48U62VJAXmrrGDyCNd5WiB8ddE8QXTudM543sDgiKKr6ZY8SVGcgu8fHZTdRjc9dT1WMyzf874Cr2",
  "key24": "5c3jZp2NNhKR1MwFwA95dG48rezJa5qmRBxVPEHFNxdXCrcGya6x8PuCoo53oFXREU9Tt6HdRUMeg8Arq3847BeV",
  "key25": "2sAJJKNDhTNvqvSjNo2D57gVyfxEtHDXUfz4af2ZGDhFyLZHo7SDV4zE8fVdLt7h7nX17tRTeKwLbd2dVH27rcuu",
  "key26": "574XuumU5SxkesAP375d7fzQADzBr3f9Gb9yyZpuRoUPUdbLzjsAqpiXb4NPmModo6UPW4p3ytXFrKHh83VV7aLd",
  "key27": "46nXjwPYZS48yZGNGbNVCHWDyNrjpZRTijd5LT8hquxtWPZvbXxg6HkRKvZz9vYb9T75aCMQZCGLk2ApAaoxDw3P",
  "key28": "edi4fyGr4sNEAaAFH9899DcdmeoHvCHDsuTPGyZ6t7Bqpetqicj4LakQPyFwAcFHuDxUmMkT5z9RT7G2EBkULZM",
  "key29": "V5pLFH7btJwt8KZ419BijBxceeVwdWna3swbL1wZamY4R6MR46hv36DBam1ZfX3iXnvktSk58CV1b8wYjD514op",
  "key30": "2zG9DxiWzspX3BGbVyyzrBer3jgsehKhAF3zzzZ6AquftdYLvC2ohbPhZL21qn8RdEk3G552Da9WWKag6SWVios5",
  "key31": "vsf1C1VuUJMMeDnn1L9ufnbC5uBTduYjo2gSQ7QyhjwE485v5smFibmymq8fXwJ7HUXL5Hmo3E97oTvXDh2s7DS",
  "key32": "3QAHWxyUPS1v4pAvWBEDps9DdFc49Ux2jFkXar2WaSp68WZeMUrBFUp5kocJuG8drpVdi77iyfSigJLa16ZPXygf",
  "key33": "3NqKKcKpFJRBHnZ7oPpfnimNQJ4KEg3tVUrWfQ9di7QnqDRDgRQmgFE9jipryas3ciKuJTwzRh3LkvBaaTG8qAjW",
  "key34": "2yYB5sS9x1Q2A98gXrKM26q7FQPiXKGMh2F9BAFA1Gt1vi6KcJNHBs5uwwYWcbgCYsuvUbWQptggCMAfq56LTKhD",
  "key35": "bR2fR65mCLnCxsUJzVidNuSkzCn4VrXrFHUXbNuRe5zuYwGZamg32guber3fAa1Cd2drXrXZtBw8ZGY7CkZfRhk"
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
