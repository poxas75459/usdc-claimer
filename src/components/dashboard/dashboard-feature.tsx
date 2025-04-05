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
    "3i4qpzMEvUGXpDkpNUakYNmdWt7m4xGUqfAF8qRc7xL71twGHNcq1hvBZmesKVa3CmSXNvcRSWc8poK8eHrJb4F1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ybRnSWS9awcCDyvD6bBpHdpUXrnMUJ8NggGAEFrHD3vg4AL2bcjbDkArqLJuTypxH5Q8K1KxQszkAE9Bbe3p53M",
  "key1": "2Xf9ZrjqcuzDyDcGHUk2c7yPv3Qxz2NZTAgxzDXytid9ADsRo66wKrLBxsqfgGycBa83t5z9WggdA5oNVWQwib22",
  "key2": "5xGk8GTj5ux2GxUZH8tZTLGybF9w3vX2qz4w959LKDNbUeH7DFZ6BRqSMWLKcjVijmziMDEhwe3XWvhgcFYxwdmR",
  "key3": "5JFHv8shVUa7Zpn8nTdiN6tzyB9QKHvp9ZwWh9YyyUKETLTBLN3kM4eoywthSWF8DXu7tQ3ENh5jGS2NNTKvBiVp",
  "key4": "65pGyuj8JPPqFGveArqPaPzfs8MqdDb1hMT1xXuKtNjeXWUZP2kEDLh56VG24QB9WFy992DgNszXNyz2Rkqhjg5L",
  "key5": "212y6RRkZneS5D1oENwdXZi58MSwJmCV6cskjYGDe6Jzers1K4YcEtfPn8eGVQu828tGQjUxWVsC69yksMfepfir",
  "key6": "E7B5vAZRv4pNK1Rk7VzGr6eLPRaXHZap9iXRVZg3PjxZ8ueYUam5hwPjyonBXVfd79WJmrWEXLEJ3cth7oAUv6V",
  "key7": "Ky8cB91BXi6naJpgautqamRaX5gjj5wNLsqwZq9AXGCjVASirpPbyRq8UVuKEf2J7reZVYN6oHA1RBNVNik6zcq",
  "key8": "2YfJDB1rDTrjWKdZwvgxDznxAjkS6EKozu8tgokgckzUejeeJsEsFbJBnQZvmcbzVj6ojTSUUag8zQf534dRak7T",
  "key9": "21hzCmrv7nA8ouuP8ReH2F4s8iuteKtGxCbAGuLmy6M9SkaHSoa8ng9DARSKmJuRDB8RgPV5pHErH45zfQziGmnS",
  "key10": "3MMobV5HUwMKukZszsMRosQs5BBcHQkJjU3SWQUhG4wvJNFPVrGo6eUPq5wtwwC4FG55PFF2Xqr5CEaGGQ6Eu4mh",
  "key11": "2HMcWan97TcfFR7ZK6L2xcyVkrJtnPp7hPKLV7u3Y1pMFR5waKoNsXYDnKkA5m8pLzVkWUALWB2aLRdzEQv1ZRm",
  "key12": "2Ps4DAks8HLgCiS6B3FEdwdkBGovdmbLykcF8L1XCJeL5ub1RhExoerarM8dZ7oLPoLLoGS7WBxV31roUz3fT5Cv",
  "key13": "2TfM2rAZghVneTpcz7pF6GngrHefeLs6bX2QcA7djwmW4B72VVMTJsEeFqTUjpk6xHi8UgBm6L9pUFs6wBgsiR8G",
  "key14": "bBvSudPkqkDKSfC2EgFKnDFjHaR4UYEyMAAdgA7KtkQKoPrYNGfP1QBZVuL3pmfcbKVkE6hZPmFiqxTm3Tzi53S",
  "key15": "22u5Ggq1NT5ApdCN6pDpnACyWHKev1PLdMtnRjW2e1bXih5EXfq3QGkvA2t65Fc5uoAYQy8d2CyZSuudMtQC7EtX",
  "key16": "5iWa5Hs23fAzVJAxeZX1sK7sssyssF3oA5nJbC2P927W9Tx1rgX9MCZdUvD87oaaj9GxB6kpkaSysMqLEmE8FU8J",
  "key17": "2qMxainKbeJiSaNpxKsipvsSLfP94Gb4qaJTtGrnLXEbeMWGkruhPrWiWnDSJPuzVEX4omQNYzg7jw7w5YDFmiki",
  "key18": "4pPVq6169d6QeHfr4JokKCPVMWbQqq7cos1dQyjJRuacYX1jSMDLc55BHG3jx72wXUDySo52VzSUYxFwYYjpAPuf",
  "key19": "5DMxoi2Y1YeCGLXJosYwkf4cVkF9MYXPqKgMwMPZfEJYRRRcq9sLBt8169Kx8d9P4CWTmFMuMhg35Fvfm6pZqaWS",
  "key20": "3WZgCUgU8vb9e2L8p5vax56LzkgnLLQu33X71aSEEpvdxUskU9wCGeB4cUg281mpP8oMA3vVwgA9GqvNSEzK1mnw",
  "key21": "3vRp6XCbaPGfSPUPsxzzj6RQzSMNph69sUHArtPSBmK96mSLsuDEJt6sj7pZa72X9G14bR1eSjTSydLom68SEmwv",
  "key22": "5NNrQR6VCzsGH5GfoxDcHoTV53xFTEmFG7Hf4aHbCR3zbE99Wd15rbekCSWUhh5Zd6P21d8Mqv7Aewis5JEdtiCf",
  "key23": "5nDHqqU3yiVUStqUMAfZGK3gAv6aRBG96L4Qk11RMcZGk275VixoCdFV38FSMUzvEfzK4z4TtwspBSPRH5YyY4su",
  "key24": "25pqkGDwKpZr9UGqB9YXb2jtzZnshjWdyHaP9y4c4VzhhyALzAKdGyenxz1ebWaEoxx1fS4j8ZZD8p4hcApjr22K",
  "key25": "59WXBi6rmpConLTKCbVLPWi5yJkfbs6U5oThqjqEKzTzLTmebRvzxbMDDrDuPhaauMp3SaZ4MrYb2VEtjoZXUsRd",
  "key26": "4Qn65KfJpS5a6QgyzeQxPkCidCvLHg9JpYGf58xjdYk8iaCUN29kTyx7D6wNJUQG3W9KEMJZ8hxGK9i6Ko9W6RVE",
  "key27": "5G4fKyNXRqNsDhxrzfZQvFDw1oCTssUebPn8rnn7Ffdo5EYLDF856ueoqow9SQThyC32nhTtUA8EoCcJ4maNKQa3",
  "key28": "36fsbWPeL6EoAHBdEfJWE8eZb5fBVktgqvvxsg2P7YZDmdB44jWqQXBdkopaHdWLqcyTR7ZXvXm4pvBaBJhTpu9X",
  "key29": "4Q8FS2g3M4594gFJqVQUcLyq9uVLJhEsprQyEGym4NJ9pmPkrzKchwemconu3YHfymfJH5X7LJrGFfsAjyDMFQXU",
  "key30": "3NoPew7oBFwMDvLGbS7uSyMyWPWSGDHV9itMGmVmm6s5FjT7yfN4qH7zd78ngmEHHGkkc5JHPYApCnYuUzDjwcZ5",
  "key31": "59t13DVb4agE7JCvqUk4jgAAMqVKnbSFWDQdoeF814WmseMns8DoxNTXjWAfPymxDgLmDGxPKE9dXqfFv5tcKRz6"
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
