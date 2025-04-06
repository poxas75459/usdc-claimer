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
    "w2TnMwbQ819nmqx1ZncwPLvXQHcYNXA4BwruP5KifsV6drYqNDMD62w44jL7WBrPTKCVH8HcrwEY4FYr2WAackF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EBZ3Hg2B49Xy41MkZc6RfGAVfzYtHFXvRg6Mf937wJESXcbxbGc3gf4uVskF9XHmYv3h6KVWkJPcXqH1H515HFT",
  "key1": "3JrcknHP2ezmzvXNBPFjNG3LTJrgskd2U5tqkRUKQcvYctKa9jJsa8TautYvvQXpEpEKoF6w4TRWU7ehojZiod3V",
  "key2": "4B37kRyVh2ieigQeDSNvir5ihZTM6gSRxSE8Nc1MvS4WLdYnxRa8ttiemnBdm384VZ8MrfwiQq1CE9c21HuB2yVC",
  "key3": "5q2ehnGeWQnotTKV4CWwL2vC637yvsPMHQ64oVg1yoES947ASUBypz1aZT8PcUTAxNrf8FK17CjATc49w7P4E8rV",
  "key4": "4xETzNmmVNeRkf8U6qxhr7fHRk7k4U54FgB4LoGGiopWQR7cNJsmSFb3CAjzKbT6EP6KdE8sbVMTGBac1mJAHXr3",
  "key5": "3N6Dhfwk5LDMqeZFmhyQ2iFTZrvfPZTn41rxCskBH5ZQ4UKCxAq73ChSgdf7DMFPegbtEuiYdQvvbqrJEQMPrw5k",
  "key6": "25RkgEprBc9rAyQpfvPLdVs4peQspQV9gXG1Es3VV3Mfw96Dmzi4EAsKxe3wXGJTn5xQs595uyeg4QEQZam7nxVd",
  "key7": "2wfFDBrwAA95xzCSZxhuyzXjrAzmguTSkzDnEYxPF8rx4yuGYyYbNbLPumJoNKj7e2bP4DwXPTbtAYPBWUtysAeY",
  "key8": "3nVeMxH55WJZgp2ULJNBZDMimXVvTY4A7Y4pBhXEr7Dcbfv4UNTwFNmNH2EB4RrYTKRS8S6jfs8kdrHF7YgEQh11",
  "key9": "dWXiozFr1kMj14zrpnJUseUZ1ycsTaDGzd76q61NPHK7wbcXVuwg452NrXZ8npmBCbtgK5XJfS1WpUFxnAmyEwe",
  "key10": "2RVY6r2bSnrAngmb1jpgSu33gGMDwje3XsrSifAcEN12w3BCNPScsuzRCD6pi5TgGUCa4NFLCjuoVhbFAMCRGg16",
  "key11": "5ykwWBDaqP2uy4XwwYR7gjypGhGStKcr1Q3eRAVsQghUnbfgHVPhajnsUkf3kbZfP5KMGCdwZUsiy4auXLe8kT7A",
  "key12": "4R1Pi14QKFA4PqL8BYXf1t7p94CZccsABzQrqJqjNPWPkhjGSzit2W4HgX6SnZH4LQgLoX6G47w5xQMnvZG4YAVf",
  "key13": "24TXoJeJHY4ZCLdWQsMUMgQxBSbgbnoknMXXxSVXGZ8cb95YfXWpPvZPZw3aBA7pnwZLL959vFG2fV2jjSwj7TLq",
  "key14": "2NPuDwgsAAPTN9vHMgAMQLtqqD5nECLSYUP6M2YLCCtTR3QkRroEqVbFehSvwTWeJURLUYC7ADrp2o1m1QZTGibL",
  "key15": "4zF4mYcFWFxAx4xLG6ctpgzW82zqZ9jSJ9U7FP1rhrrChE8D9HdNKeVHBCyyPcFfmDcKjKuKyZwfdEDy86rkAMUt",
  "key16": "2bV2QZzXwqkNAL25BX2XsibtidkwjNRmy4ubX5m3n8Ligjz49LtKE9SVi4WyECMCDidFQ85xgd5hbL5Y6w75UW2v",
  "key17": "45y9T5T9FenP4cGpdgbXG8oJ2Nr3pos4mQAv2oykmhpMy1ory3ouLyrr1kbijNPgvARWC355paiXNUCZaqwwgacb",
  "key18": "5Z667YuftMNjFRK2rHe7jXPjvoXXQFgf1MXQpmnD8DApQNEJSCNaPwRRnF5BtDJB7RVRAZMBVsNtgJeT1r6USvRD",
  "key19": "4rxp1gXCpbhaWfhvaW7EEVvpNHSYMgqRS9sDFPLGtRkMWSmUMDkGkMkH6xg6V59wpYp1PYdAKhmbtzav94HxYf3u",
  "key20": "5TKpXhWRekyrbQvCVJQyWgVLEW6bjtQ526PWaDf5gwahUqJV2LoR1A29iQDea77ZP8tJzdgSjrmicmGgJiswAvoQ",
  "key21": "ZMaSQgJ2d5f7YbeUXCJWcHAQcaAATv9KUGuHCB1fTqeQiRvAj7GjWhwHmGMSsz1FRyDrZHwx1aWk43LDf1feLs3",
  "key22": "2QLSmip61ebYNHe7LV5VnAFYWSLKm4hyzGZt2FXt7Hnaib6WA96HbETsWKG9XmRpYFmwe5tpXjKegqmy4uoXKb6N",
  "key23": "2PK8M6tpigQGqA81cumu6EVbiBotwpbdSkLpMdAZa3iqcZdBW1eSXVA9QiQ4xGVyXRar3eZvmUNf9ergenWTqer5",
  "key24": "5qpU6WdsGH2jRHtGN9UtUdqDZFzBHjvmNwWkkwW6GU4VftJANwdAkWv4feXa1PnWp29eJieEhDWCma7Jamdr8gZr",
  "key25": "39fWvSxkeALH7Rv2b9t3wy5LamAnsZypn7Pmihyu1x9B6qhYeKAuhF5agXUSaZvvigguUHbEsNpU6oYK2h2iQJp",
  "key26": "2HxPztjJ2UygnXTCfJ5d2mPWA2TmRyQF4CxWScRvX9g4UzB3uJMcbPtEtCLNVNSn9T6qNax4Ftb1SWT2qMUceinA",
  "key27": "2FjTn8L9gNirjMhb6wuT5T8Pdp61uCKg6McGW4oHiJSuhjht52r1X4XBkDn3pMg67C5DqzQzAqkhNfFkPaStHF8H",
  "key28": "4UajA8kCRgaVJTz4wxHTrytscYAb8q1CAeyKuoYJPcWiPCitVGFvhrEBrYEz1KqrKywFCozJ8Xjxb15FS58QUVos",
  "key29": "3RgKQiNnTcKdkye6z46vdtCJmvYpwuMgfjupwgKzHpHixfW4aYAQV7Sa5Rsvd2Tyjvi2ihsjNF6Tx28AF8szUeii",
  "key30": "3DeKpDsiQMUTzEwtdVDYXNmSkKzt8rSygSYihc58ndH5MDLVwKYHgpzTso3dsdrmQDB2kH7DdA3ZDuSHtyXc2i8v"
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
