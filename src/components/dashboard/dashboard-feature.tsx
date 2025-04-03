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
    "5evzaNqDit35Wdj8fyAmBDWcExyQ2khTDNdWLcR7nMMeWECbmsgQssodtEiyhzvBcGsdysJKH3S4CzCFe4G5Nnac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YwySULi7P5FGxuVJZ7tVvLBwHLyVgHWwcVCLKBC7WaabXjzAvogQV2mjczknwyQVzVBueak9twZBVErxKMrz66V",
  "key1": "PBjpgjh658KcCDvRpDbcvhDgA1zdwtYmrVGqdxCSKkeArEcySGogfcooMtrNMZij2kTWGSeVDax9U6pFu7Jn1bu",
  "key2": "2SEWCeqWyr9kAWdtyk9gGqbfvzwtjXGK2S66LHAtixZDn7CSZnzgBPoqtB12VKPgXFk35jMMtF2bHSg7CjzwRFDJ",
  "key3": "4K5kKnHfiaePqou4HdjC4bzopDfoUK65Z4NkUYc3oLBdu4WwXn9JBFowZFAgRgGBReYJJHhq2PYnCryUTRj5LLUP",
  "key4": "2PTxwywWiX5VMuwVHdwGrKv81FWUCkMiQpTLLLh5Csj9m2ZaTqhMj13QK9X73xveNEAqigat5RV3TugHsYHNHLt9",
  "key5": "3BsuvJonJQte4MDMSQP8PRg3JUAZTrCDjhGm49WBbVgSZ7qGMsEFQi7uMLkSvudkpSUVJoqscTDwe5MFCw6WMqaK",
  "key6": "4rWbsiXj3yXPfpXDsQWYPNM9QdnmYhi1dzv1jU2cKmPzKPacKHBUdZuoHbC4yqi9xNvoCrP55adnxmvuZkYy2jNe",
  "key7": "3rKy3ZeuADs2nMEiYuW3eqNtKXsYreNgZXyncesy17zfehMkVq68tTGFxmYmtQo5exL5j5yMa6UfuqrRfGcHXE7K",
  "key8": "2VcWKyR6mFHWppU4TKDzCX2ch87TqEktM1LmR8LsbwDcPaboZV931o4CEH3D1mepxQV9DSxLyXCH7snKgJSVTdtA",
  "key9": "3pJFkFoBaee9T7NFcvwGHR2e9YrbYD1tjUYLUfHPp4dFGSfjhwWKTq7F4WZcTJ79EnyaeYX6mEzBtQn8oiYqveUb",
  "key10": "3pnxvaRJw96we9B7qaSWbhztGrUYLzUgkJm32MsqQPCVhJ6X1BPJXHnrtTsCmNb688TvnBCq81yJKtyA5WWu2LSs",
  "key11": "5Urz8sEpExbkdYU1BMUrzDHAYbWFobLnT1UkEX16Wba5WGCWsF1xqJWpuEW7qSb2L7S2YNg1rZHAjUgzgUpTULMA",
  "key12": "fmAkediZWqJ6kEA5q8Avz82zpJEK7GxGCvUpFYBbdixym3VKoHGMXQUhtYAeRSFW14JM4SYS8YfP83y7vT9gvJS",
  "key13": "2uLZerhq6xyuvjDYw6rvkNEWpWUTV1GTkawCNsH1s2bCQ1QxuT21SeefRLy9w4XoCBndjLqBSEhMjRkZGM8FQXaH",
  "key14": "61AYGhFY5wueFzKS8B3hxw6a6LSUHAbkGXvDcdADusBHuseW6j59TNRmRCx3rDG6WCfMKVBUfEpQkkb8VfMRe8Er",
  "key15": "4iWvei18jK1ucVZLNNhXvAWXfxTCw8Eykto7WBbr1qe4RJX3MkbJ8fZym85HxPTKxYKPZ1kHzN14AuE9nGuBx3mv",
  "key16": "4ZkxAfMFgEQCa1B8rEpHoJMjfSHGaNaGMAxa5kwnvLfbKBhgassHkiCgsJ631CHTfgTRcQqmJ4hR3EtrwmMAHLuj",
  "key17": "5PGo15sHzRFH4kpBrq4vWLBfaRoCKtmdXS2bGQpqpavFz3Ed1dYLKDviT5B4FLvnYgEsfiKFgWNAzXV7tKNenUgB",
  "key18": "hFvaRhRyNPnyCd4CbcD6JvWHex4sofZqSkqTF4FC3X7NvW2sx3VYT4F4fqMYswMXqs1A5fG1yN6w7X22h3W5BG6",
  "key19": "tqWUSqB62uynfGitfC2C1EA4c2GrHxWdNFuMxXhkUg1W42u1Z5m5ZYbpc6YpJJaSpcQgKxCVXRRXojJbFUrbP6J",
  "key20": "4cJA9scsFUKWEcsvk17njKhZXq4KovDSuQTHDRXcSqd2R9hEiJkV5M9SbrRiUkZvjEA1Bh8Rw6XmqyBMra2Dkq3g",
  "key21": "5fEU1C3X9orXxj7prPDX3PFARbdeAKz875ZKG5rxVpj4hM5KafjPtFp3SbmCrqyadMGAvzbumFZdrxjTMHsRdkvj",
  "key22": "4cRRPBixXqWKGVPXWVxaSgb7ayVFdEeayJxCxGAt2UadHz7jucGY8Agu29osd7c7TggJF69BF9tfNorZ3sEidGxd",
  "key23": "3kRs4suvFgwchRqwvNJEyuNHsYPPEgAHJYxJv3oPDPVaUUet2gKzWrrPPsfe78C85ZXBEhBT1DQdBKkYnnpS6VuL",
  "key24": "3qmEgKnMfhN6DhRPm4SkUQVD1EczwMEAx7QAZTNvstu8S2dx98f5BxmMGQP2vD5bXubtDcWdWPG4Ls3RAVheSTf3",
  "key25": "2XWJdC8BK3TtnYA6gyqGckg7Vfw9MNPLY9qTzmFpJkz5NKQH8QF8udA2pS4kXKAz6yyrvpLzijdxHGkVLua9Qtdd",
  "key26": "2CsgsTNELdycyHFQjEBQsW3nNgk8GGPJRmdyjbiYJLik8KBH12bP4LLtXMnLZfBMhs4ZN6VHyeiPYFv5nkckUoi",
  "key27": "5B3YJkb3Keka5up6mTkp2rqy4HBLAafPk29sTsMCHHc7XoKDLghu1sZPuFnhQZLEtnhKLjsb8H98XGEiqsyRnszH",
  "key28": "3T4JcfT3eV9W8zLybEwfW5rZGDvweLdRA3b74jfCBVL14en6J3qzMcQLdZjiy86Lvo6iMqoG43BRRZYsftGk9cHg",
  "key29": "5Qgrhpedw77Ame3wA5gcVhBJT6A3gsEtR1gF2fAvTMoNEZuLNcNhMz6hUi1eG1aakz2NPsbKTujxqBsfVzyhP2DZ",
  "key30": "4ViTycjoyeJ61zoaWLbuS6aW8REWyFGedUGjZrgk7tX4ySKCkHe1zvcV89dRz3hB6D7hcVtNUQcGVuYBqYcmdCMx",
  "key31": "24eTxEqYD44kTc343u1RNyQjx3L9HHhSsD1UWC8mzZ8kQGcis5op2RephsQuzmVwiFwe8TxFaNFbAJaALhN8uaBq",
  "key32": "4X44AquoW54Fu7BgpJQhyMYVxpYrZT3mJz2xXqHWD23DDwaMfxHcV9Mw4xdBZ9sHpmmLoiLFVZWh4154fkoPoGXa"
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
