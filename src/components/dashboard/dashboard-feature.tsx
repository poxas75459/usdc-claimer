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
    "4jaVMDWmQLeeFszQD2ciDMJSJ21F3jkyBezyWXSqJgtr4RsEQZ7fVPSQhj4VPoytnwx5cQAXpm2wihD6VMi8c9pJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPufzkhbQLFR5BTkH4ccSwgLDiFZN2DRA6rpM5JH1MreGRf5P6CFM9Mxig58z743QsqyYMbM9Z8MwjLXRjPuaXK",
  "key1": "3zkNeYjgDbfZ4qXwwBB913o63Us7RQxTt4waZjxyKeJtgjkqVZjjUwMGxbit7GpBh31ggwtXeSFLUtrxm3XDYfMD",
  "key2": "4RtHLeEhp2QPNKUV63bJ9QNS9r6tuTGydg8WVCFkLronCoy6uCYcepk6hu4S7waJv8A9JmH5iuM1ha3RLQqnp2Aq",
  "key3": "CctsBvu7FDWRqrqiAsBv1DjnnMh93EnJth5HCWxM2WaJGAQqm2a5hV3ZGPRXSuGWY35fkPjYTNA8u6LufMCmai6",
  "key4": "21c3TwoK2kH3qsEcuAQYk9eu2G5grTN3zyn3f7exG5snLBYzB886R6XpMs4wAq7gxaNmofonNxFChThmmCPde9wH",
  "key5": "TBEtNyVbfV4v4fxdEJmVGDoN5xcbqsBhDJBqNtCawp3XSGBWfQPwCCCocigByLjmkYokkCCMRAoxzvw4v1inpXX",
  "key6": "5ui7jQv59xH63bX8aRhzepCySZiCrVKQ8nk68j1snM2WuEeeSonjPVrvRJ6Upm8ayrFG1ZYJGx3W3X8BbLVAiDQs",
  "key7": "4LVb9Bc7GutY2Yn3yH5FuSLNJbP8bgNdUyMWRydo1t6Kk7uKY6t1FRo6WN38Vx1BZQ6kzNiQyVqfaYZoJTW17BXY",
  "key8": "45kGfvRP3cbRQ525y4AyagYwv5DVR5NAQws76NNsVgCsn7vNpqCwU35v4NiKU9mHu6o8xAHQbB7FsYmQ6xZDt9dv",
  "key9": "4ndQZ1BQZiPNGEu26cZoLZwpnoSGWnVXd9RkfdiguzvnFPAvPywnadU6b8BF3gbwGbES3CBuE7S95gxHQg41HcLY",
  "key10": "tpdiqG7VKKfZyGhTqtbxbGHFjRaYx5XgNVQn9rSE6ZQ99vjCSChANNbgn3RFUaYMhzoeYyjBKheNmc3vvd3oM3B",
  "key11": "DpruKj291fMdBwyjVPA2uKr4B8hhHpi7UchmeL33gLhbAmte4JgALrKhUT4vKBQHMwR3qiavLr3ovhSj5x231AQ",
  "key12": "43ugPMmxANxAXCPzrK3mgRi7bYCKf2HbrwMGUuFUhDDQTSZVoY3C2wyqFzXX31sdcsRNdSQ7wHWbhd9vexCj2Xhu",
  "key13": "3G1KyjNpR9TKAszoYE1DwY9LzaWg5iiWpe5hDEk4vLj19iotXRr32UNyedDxwSrsz3L66jjCEhL8zgRKd7UKGH2r",
  "key14": "36Spsq9pVymdtJB1mgaUqSzrL8L6xzsVerr6YnXXP4WGbtxrVGJ49C2b4W8yehw2d5n3XPBoXXWxnrW5YvnkromF",
  "key15": "39AmLAsEYTgxHUAegGdkwPGQG1mUyVgUsQhQvnccKLje5VHMLkNcaUWySW9Jv7pyyFGNFJFAC2MdAu9cyqZitzDX",
  "key16": "RoNTE3kXd4F74v9FfXef1QL7NpUfHQXz8LN9xaFJ65QVtF8Tr4mrTeTCLNRKXQqTo9V27VJY1BuVnd1VxgzDAjL",
  "key17": "3HZvg12BSecWupzT18EgSsHmhwnzbNrqoXScoHbzQwNnLeYS4Snqb7e8C6qYPhytTQgiCx6MVGhJKuER3NJgdZ46",
  "key18": "2NyWSiUS1tzZoTcaBtMMZPxjKbLVcqeEChtWCFjvApn3PPBneU1xAmKeMuXha44m44jXNB4vcPi4kLNm1XNpocTF",
  "key19": "32rmekLbfPu8FQkXzCe9WE4qN9e4WS6rB4t27ha5UU7mz8byHnKmbo7XQAah8xCDbDMrmWNCxDAurxN1GmRhmcyr",
  "key20": "3XeynVvgFZjVfqZXLiNRZorm864v6YZqqY7SNrjfHxw7RyT7znVuuuFcC5mHFPmBpiKx4dJPWxYckEWUCLYfoA2G",
  "key21": "VMYiKUMgpCiUgYUTo33xK4abDPzoPbLgKndqSJhYYRYTZBqbH7xcpV543FBAyvE2YbFCuteMLgtpf1dUB2DpDhx",
  "key22": "35xbrxAHF4h6FYX9q79hpgVn9Z8xjJCj7REQzWthMxj4QM1FaoAgV736FEgjhXZFLcPcA2uEB7Pp1zHpDFykQWbV",
  "key23": "3kArAxhmQjWYvmb5BNU9GU7gewPGPRahLwmftxsmmz48BNQvM4c1mgjXxH2RmNd7AnHaxNU4dnQu8fEyutqwMKKx",
  "key24": "5QTmLM7w3wYoqxRyWxXLn7jy66qsKjrHasqSKXDkppdRbVgxcvQHs1wYHdbudpRzWfp5taTERPWbZfzhCdoPWiSn",
  "key25": "4PH6hyLvCVNk6tkXPVVFVv6H785djMx3FgbDBNteLv1acbBNrnm2u154D9PRw4uzEabMbjmSEZ7HyUpkh1mv4dTc",
  "key26": "5gWaKJNe1YMri6qVenFojVk375qgEajatZLBmsifhks14R5BF7cZUK5XPTNwSwaDvLmdWwN88pfrbzdqBcp3dUoN",
  "key27": "3163dhnaz15DGJFik1bEH6AE5vcT2wwRyLpv3K8Xud1wNsvrJ7ephC38dfNUvxnGkgWFG5ceeEDE7p8BqQns7W4c",
  "key28": "2V11ry9QmQKuASLjoVgB7pPzTmGvHaY5zqFGNpTC5rhFtsczkRvzjabfkNhxsjQxezUEiEkUWAeYV8rm6vze1qGH",
  "key29": "4tac4x1AbuJ1Y6pPTjHsXuNkGcYaazndCWCaqVLQjaoRRfuTSh8nBtZRuSsxqUCh7aUutibpT23XuidBGQBG1HTi",
  "key30": "RnD5c45YrKwKERHLaGFYUS5zMGBsZxYPwzrfZZ2KHSFi8j4L97oJkCxnyiERqeQUwgBGDBNs5bPEqAVEAfB1hUD",
  "key31": "3Gd88iCyBQFEuLK9TSJdZZbhumzNkWg97v41gWVqixwngbGhNgtuzyBX7XjUcaPmvMLoQYXUeUNMCr8KKnKK2NqA",
  "key32": "3wZTNMxS1y8jvHRYyaMLXbFw8jvoga9EcBFPWgY1P6cPqFUxo8zNyC3ucMWCXzwzpyEW7EqxUeQC6swUEhzc9Aqy",
  "key33": "mKLPhKUd6dFUZVJaWJiyGWVPqVJtG47CJnZmwvguABgr5Vvgv1N7KWpBGb1GxqVZyMs4eBsAT2LVfSNjKY2Jv95",
  "key34": "2kEKxCTZdue6o6KZpSjfsT6VnTrgxHfdtDunje5JC9TFFUcycfWwhCkG9k2PPNe4X3vsn5rzKzsoR1D7xiMcx5de",
  "key35": "4gHabdeoB2inz2egTaXEyp6Hoxm2AFVeSWV392aLNZwCEUjUFUmKhLe8jiXjPnRiWCxGAPpL98TUoft2epoAbtR",
  "key36": "2pJQb6qv2YUdAKcGd6AGyVdCccqrRtpW8TsU6YWYgr6fjdxY5hLk2gTzxJtpfAAQGueUXiQD4RuPoRNLSTHjV5dT",
  "key37": "KHdz9dS4LWYgtvMhXtTHjTjLz1TJLsKhbkBkhVLbwgyqV3SVXaTt3Amp8iZJG3cNDiv688ixYuHLhRzaxqXveRC",
  "key38": "5cJmUWi3bcEUWCsHWaiAampCgfdSYDkzhwAPPfAvhDcojvpkdmVayT84ZTGDbtCBHYHZMSJwFBosgPANtqBtjLyd",
  "key39": "5jugBCiSFEsLDA41sp2bHnbZcaaqcRR7oAkFvWhBSK2PswQjxov1ph2waj1NNz6pe78ak9MX5LfFREEqwoWkDXHE",
  "key40": "2eVrWbvfyVnpbR7sjcHKBAeqz6pNqf7WpVxo4YoeqbbTzGLuMx5kRe2V7U1WH4CBYxgtyZtpQg6QrZM1xvETjMRj"
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
