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
    "41whUEoBv4aMoHBf63Fir1CTHb35wnagGvDD2SzsvDTQRUP3yaiX7A5TxEQFCHGmeWje5agPUWzCzmMcNFHguewb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YUFUU8JhLdxiaNQbhrjCRkD7wCHgW172DVVjWwUQ8iH1iThydAFa6ihhSWn8xLRrS3YCRqUSHAG47Pi8j2WrH1e",
  "key1": "haHDTFD4JohVpJy61B6yis3EnkKuHENTk5FzsU6m6m4axUW6FeaysRUHFUYoxpSe9TgEMe9cDJWtLBJUUWtCJnE",
  "key2": "4Y6EAitoWS9XmnmQSVasq4psxtSFjaU2uUq8JMhFHwQUaycjLBSbcRjpeVmLDPAa5fncj9EwMj32qYT6TkuC2Whz",
  "key3": "4joqH96ugxB5KDBGho8Cc6VYFuaFCYYZemweM8339CbbUBKJPNutr6tJKnkdNwZJzT2aPJzbC3MJrfA9Y6udAWpW",
  "key4": "3Z2gXH9jRLY5maaBq5yW9tEatRcEMTybps7Mm35yqQfVufowWsg2QrMdbmbcLj3jenVCVKCN8ieisaGmjJ57zxcV",
  "key5": "4PFqtm5yiW1D84ZkEWxRabiozPgu8m6BcYGALCGBWbczFVrn6Nsr5jrx2iJ4FfMRpBYL2hGoSmdfvW15GrTDfGKV",
  "key6": "5rENmXSaP1nSbdATTKtP5xC5GHSLmpRMhhm6kyAWrUYTTZDZfdfEkTitLLFjZVstjaEte46Kz9Zto6JDDB6JPxPS",
  "key7": "4jNTzyN8qE7H8WViLfUCxFAjL8ohqwym32BsppVjqaL8AgiVS5Mq2L6ogpVMbHXD4DdRY3iDugyVQxeTirEkSqxR",
  "key8": "3dt1PVGQaUwgoNyGRoh6GvegKqaUeezceuBx222f5vKrsF9bkSXVMNgipyJEnDs4QPgjPuk87uMUqDhs35o8EYGj",
  "key9": "2VjrbEMaWe5XwjNfn5iUsvABi5fYAroyLK8CiRFh8NUzQPyTVMEbah1SYWV8YgCTYEqqxmG2LdFTDCwkUMrxcoh1",
  "key10": "5x1TTusAYMWUYbVXNVBoaQKwFmrpHshHeeodLkT37aGLQJxLeVfsDDg4fPeJdsKUHXVZdAPzsrc2iTYYYt3ZvhEB",
  "key11": "2iTmPfrVgcyS2FVnUfwP7NsH5dojuT6xiELxyYtYaCseycrsV5xbp1YopjvQUs1pTS8jvdTddknYUujGwj8u19Un",
  "key12": "4Fdk9DELHsdM8rE8pbaihTDfcCNvzTfw9DsBji9WFogKUgcddPmhMEtTCugkAsCoHScZuP5vycoMhJjQyhrSU493",
  "key13": "67gi5PhhgVWzLntdWpatecw35E76mMWWrKiNJFHcfuKZzJ7F5hNvC15FyFcXA36kVFGRTx6286YMWnRMKgXio13L",
  "key14": "5BkJZXZGsFKybjbK9cUCnULJVZUNDVLzsKbz5z4djE3U2E7HKQicfMYzMbknxJbmPTZ1m7qEoJSKaN9c1hUraj1w",
  "key15": "rErTC5VAFfEMj84RtmSBvcRbGBtLyzxfpuLn1AejJqNxkUhisvzX7evKznxcvFwPmv2RWCZ31V1hEPtqfcrYu5e",
  "key16": "2KMufAz7jvhCzQWsQg2egYmT4vnHkJgZ17kN94pd74QeFfgVVKJSM8Xx9iTMLgnrZ3aiX8rmqTNK5nHWgaPrwbw6",
  "key17": "2dKaDtQknqwSa6NL2dAFFJEVniSH2Fuk1MaWx5sCLR8MNNWQ3syrLVz54yXZFtfvurGMGguMLR9BQTEXM1sdQRpL",
  "key18": "3JesVvPrz82ohiuJNdecuzd23DtQZ1o2n89em7TEtAF5QCU5ox2RymjDt1TZSvJ4ZHmMQW56xN9T2A5iy5WDBSZe",
  "key19": "4pV75DVW8qHxk97dn4NiB4KKexwDHikNPKbjadi6gUz8nCpzXMUhse8dGRUWTTtW9gk2KW7zzR1bJ5jPrZHFc3rk",
  "key20": "FVzQptnJsgVrDMAnAGzbSDzaq5LW7odKk9cKbHH5ANFGVbPdeApH1aidwrTMLGEAnACwkFU6VzNy8Xbetx15JXC",
  "key21": "4nPFdzYSJdJZTqoJPvK1s5vszavSFE2MTRpzxs2ap5YJXpGKjsvmN5T9G2a6xQJSMedMecJw7SFV7R9MfnzdhSPA",
  "key22": "2GQazwwycfFkKJv7vRhBok12QJ4qGtZ7xSqswrtpNtZSnuaXGndcGMYUy9ShxRQyTsPS8jJwvPn2i6kJbQ9kKnc1",
  "key23": "5kioHVTU1W1MPhbqKGbNn7vWE5PCP8Zdtzmpdwa64SZgaKTj5UoNrqENhkLqjjj86EtV245cPJh1wVvf4Ci6mUWE",
  "key24": "iQ8yVcVvHD8AVWFV6iVmKc3wNYnc2kaPw29QZTqusSfMZGyUjQ2jDxhi4RvdnYefQSAcMbtpFSATvttjUxGyQru",
  "key25": "rq51pAqHTyysnJxXKc5M19uy3egXsRXCfqJRwMs8DQ7wPc9d8RqNQ8CkMYdB77v1Qbb1Wdbsh1LiX4kg9dMdhMu",
  "key26": "PTH1ZpFXkDaBxTRUq1Tkdri2eMhbm4v8fxZkgYiT4uVu37dADv8qzhPwHQqBUDDAjFZhxBvuiyUTSgxGTg872ox",
  "key27": "5Q39MKybQryv9NVGDW2voraKSabiz528p1oUoggvy5n3jRwGJNLmDj88ykU8mhAXtNnwU1XgS8A68QdiKXo3wfG4",
  "key28": "3Jdm5AHgqpT48Earkia2CyfszMt9XBKA9cS7QfqVDzGswcXh5L2H39x5emoRa3eEt1pZkLAW4McCpUFQpKG3aJV6",
  "key29": "26eWWx9vcCiXbFS7jCaJZm6tPCs58wb8L4ChuYq1fnJrZjjnZKEPwcTyZTg4puYUgGzjBrbpeTGxehwmSDdHBsAm",
  "key30": "LpvQRBiSLBhP1nVUJYm83uFizfwyfoPLeag2AC8HSDrgGinfmKjGuyYHE4BEWMPVpQLHz38zhGutbubAiX9d7CU",
  "key31": "4N9YbjeeajyMyvMTydpgzjAxGdnbAAxQVx4Ggwc9AEcfHdrzfP7z7H1NeryKAPydwM5opaETy93LFLo5hUvC5Gta",
  "key32": "pWYJEYTz2VNzXKhKLhWz5oaeyanQ4Kp7vcF8EezLjoirg4uWJNFbGcoMTkkWjNDUu9R9YQmP4XV5CY87thHBULY",
  "key33": "3w3YdXQEgT7kWEAXPkJYigkMe1kuowo9TJo5JqSNdN59HTk1PDWgA8aJrRcWUU3TiqnSa6KAbvqPyYkZWeFBy81",
  "key34": "32Em3C7wDrKZsYZQ1KuMpkE4748Rw6RdaiNPXquikWJ4oB5Xkq3KdJf9cpLYLqovoM45b1gGinZe9RwkqqWKAWq9",
  "key35": "22mLEBN2UpTHHCAsrUirrcKq6pRPW5tCHW5CEcedxdNoy2tatGWAhFxFVAwNJPBt9oNpHv8CqpprUTBgZZ5NsyMu",
  "key36": "4gX3EsHZPXF8LaXmPG2TJsDS9VA8Vq9sw6k61wgmiVJQZoxQzZhLdLg78kz5gwrPfFDoXRucJPFNrLZxjd3AjUdH",
  "key37": "4pYgbaNVV5zd2YAgNeZtkz9vcsAG4ivgpHhPRLnT4Evt1zXNvWFaJGgVgvwBNufHDpTEZgMUsfe3GEyMjRYwG1eT",
  "key38": "2iKxAQQvwiUP7foKvp2NXjXZFSYSjuvFtNG1UqnTEqQAepwfkp98PQ9MGee7HVcAwBrk6qZAkrKgnbdvBK7preLM",
  "key39": "4z882Nzk28zexYm3kCMgBbngm6XsEhMN5ytU53rjtLFBZTymWmmTNtPAmCJTgRurD199jRRLojucJ6orvtNeptht",
  "key40": "66eUQEsXXLJ62BNn9hWFPRVB4DkgfSN7qxUQYdu4HCuVvY8qzwQHMHde3oWSfB3hFnoqkvLuj5NtBk5FCvS2NucS"
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
