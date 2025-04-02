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
    "aZk3RLXiFYC3LCc2VxGP9wUh2VgJmBU4okfpSTnnsJ4CrjDxKz3b6gpK7S5s2qmstZJtjTVtZ1SCZ6cnwDxBQT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zmdshL1vZyEL9yvguJ1h1pEvvEsqWrfNxQQegBhTCtK4S3eMjP72nGNoxpQRNui2JikuChrMqK1NYxLn8TLetLr",
  "key1": "u9ftN3rCQZmqVQP5r6t9eg4QfhizKsJUZUzdFi1EXMrdP8aty8dDyCLRmQnf1Bq4NnZWa24cyokH37DuSvvMtme",
  "key2": "216gvJeyd2cRDcZvZoRaEXhBKq3Rn8M9na7Fy96mNaZci9hve6HC7jUmYkg48daLovxNVtmsUFUTonsLqkXuvCmx",
  "key3": "3nyRHzsjUPfmczd2sKZ9J9mfPmS21jRrJVKAKrttBbBdfpjHwekpNMX5e5dPNnp6pT3Tr6np1AwWoA32pXs5XZXT",
  "key4": "3oHRNJE3Mr19LPTXHkoZLRbSoJjvVvARanecDDcciSrPqE4HAcFyGUVPaA9bDaoDzpaMqirnfCcUjaA1GSEx2qrY",
  "key5": "4vCSoQGdgCA8tqjuYcL1H7Yke2qoiAcwtGp2Gk7N88QHeFpR5qrG9cf9SR4ixiD6MPCx3deFibtaK6gANe8skdrq",
  "key6": "JgSy6Qvu7RzPpYAhD9H3X935mpFYwiRf36ZU5ZhdACwVR2GWFE3ryHGZsngTSfw5p5i8oa4y15w1vXXwPzWfGQo",
  "key7": "5vVg9vunxHHC8oDZAngVs2YyAGpVZKWzhMPDp4ZQKycadwLdZEvZZUXJj85Y9stP6BP8jGU5FG6JYEFS2x4ucugj",
  "key8": "4JsMSmzrpG5ttoE85SQoffWntkXmDR4qFpXfeeFECcYVkDumsoP3szee6ZaqF9XGfcJeoZVDsLPSHWbXhDUoxSAL",
  "key9": "mzFd4xQJmbxah7fEp2ju92QfkCduc29CZqEkxBL6oBWEuqPGAMWX45hNNmEYkpAhh6j4PzzQ9aKmdfk9NkLczYc",
  "key10": "kcnqe9Yc8sMQgxgjQoyCNRbS8XbPhDbDVQVwndXFcervmvWuzTsfJYxs2gQy7hf1FJFRrAMU2NLmgV6TLDwm1mf",
  "key11": "3fYg9NtX63BcjR5gcN1FNgVWuuRgpVfsrB6uAqwJzoZ8LsVnZ3nQ3Q9QhvjZ2ZM3j3U91vnK5PpDfJmi8KkgLf2L",
  "key12": "5oD6FSdoxToeC4Sphp7ptkdYQtAgohCUzi1tZsNUAs8x2rdm3eyJaHGZ9aNFRvAeeAXnBuuaR86MZ7PD2BDSehFc",
  "key13": "2RkDsJMG2MeTLHanaBgWkWv5Ygv2TTUfifS2vuJ9iq3j6VV3Ajg36Q5ZUJKBipmufjFPNqAENYBcgnHQUR912kq3",
  "key14": "5Z2V9mjcSU49zvQahCk1LNrR8mrf5mz4c77P7RR2gne3XrwzwsiQ7qCtCLuJDeWFcJUPj79isXYxfq5TGXFTbVhw",
  "key15": "2CAoTm4rzNkbca94PdWxLHc5H98HYMaVDc9s27LDGckf6nUFMUEvrurgUp7wBtZzzaodBvMwKJR1wZCfLcP8WnYF",
  "key16": "HiaKPZLwTHhNu1jeVdwGV28f9jMALEwwiue2BbpbD9GfSyN5kfYrip6pT3qoP8JyrkFWNBbM3tdBrrCtHS2McJB",
  "key17": "3E9tVr2t6bqHZgsthrcXtpkra6QWZ3xGM4Pr9MPqedA8NwmA6vdKdhnbcMiNemfjKhqK4q4H5j5abbLvytJJCMVi",
  "key18": "wyfbWxhyfZGo1fRz5otanh9tGufhagnxmU3zT6Xcmp6UZ9AouELrikd3rjHLrenqn6AnN87KVRkWD5wTro15rQg",
  "key19": "37a5inHr5XAAKMjpePx7jDSKzYTYZajBdsusguPuMu416ZSc1DJ2dwA5jzqmHrbFJG5AkbpPej6yuonNVE32myZC",
  "key20": "2PwbhKDEFwhLhkGRSDbjoU1HXZLNk1cSCXZXuuE1GzuCJ1jv9a3HsZe7aEnV2jrbdvpcLT4jpbvZ2k6D2tYcTS4H",
  "key21": "2spaCJWREFKbb8EmCM7AvS26ue1qGMctZ3NZX3KypZe3WwWxAxtmRZ9zdQdFgHhMWu5N22DFQLkyM7NmvFVKe9wK",
  "key22": "JR7WXwc5iAXzdrD3tmRBMKLZ439CyhWJja8sdoaULMtKFGK8kTGBNJZ1sM1huVXLo6hpPSWLAYVBFwMoRPTmznZ",
  "key23": "4NxS4oMX3KymnCJYWzNyUMg1q9puyBZ2Go8Y9kvxEPWpXPNb8apmvyMU55UjPCXupd2zP2uaZan9UNiLkcWR9JQF",
  "key24": "PNBgcPYuCwFAXREg28AcULJ3DJCuW3uz1Cc8Zhw44k9y84swZD7ahf6go4uofXRpwEo7MexA2eEogpH5TLYVFaQ",
  "key25": "LqGcFohczwragBGsTiLxuM8yVDZDeJ6eBxYSRYJXwhgryG3Ki2A94F6odUxsExpic4LtZZEnES1hykA3SeELFp9",
  "key26": "396WMn2F6d2fuRPaShJpQZt2MaEQWf8JbJ9AwBBhnPZZRoXVTxUtqX93UFKyZHvun4sEpz8inGJmumncd2SSF1is",
  "key27": "6BdotMa2ZhcSC7FwDZkuhBdn1YapAVNtNnrMrxk3TqVbUKzXGyzQSwuKZS8yRnPVmd77g32xJngR2JtvgVfMP1Z",
  "key28": "2aqhkLYx9gXJiAGxSSb33LCFtffm4ed6gbhnUbiohu9WFJEqEFnTPBWGdcK5CfquXQjXpMNV6oVJo1GBNJBS3n42",
  "key29": "5uHybk6Z7zfTnTBu2x5D1CpKt25Rs33WS56d9ksG1b2rXkXabnyCJgGyLGdEZABua4ei883FVHRj2NJ8QedH81Z1",
  "key30": "4spm4GcSmLyQiGySq8GGBPJYaTncsCCiu1YBoyfiHkt3C68DMw4KLGFc5PLsG97NabyaACxhnwFwUPKjRT3uqmCS",
  "key31": "59GNrbU9eznauTwCoYkyUcQBBBQhXzQHoei1ZnATdtfQae5NLQv3nHPJE7nN1e1PtoHkcRzqbAYByNgWov6MneLy"
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
