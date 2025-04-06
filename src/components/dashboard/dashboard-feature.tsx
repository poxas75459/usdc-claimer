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
    "3uw3fEaVe31b64Cjd2V8yMur5okoB13GwkaAdtnSwmi6Bh8D53fsH4W51YxmmyHprmjZSNYqWnmCHSWtQXa2LFMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ko4dwj2wwctZ4FCrpYtBe86R1utNroUc94XgDVBvRZHjXRUe18hkcmPSsJtnd3mdbEdXqGMkfnkLQfNB956Spxe",
  "key1": "3N2pdr5P86NFzTsPvfQdpNwrCTXeMsZ8Zn4gojZgb25CXSErqqXhonvWQgnbunWNMi7baHnzF16afQezVwEZ55p2",
  "key2": "2Yw5KKAvBFxaxfUd4qZqeJo9Y8p9uTEhPi2oY9iJFLnpt78dgiy3MGzMphEZEQgS83bJtT9HBdKq2y27ftkTTPfb",
  "key3": "3C3Q4fNddq9kwkTsq8M5QzG8uJcNUnAjqFb6Jg1AVJPonEGkgB5LSLV9eKFEGbPCoPBgAA3ZJSHaJKuu5ueZqEUr",
  "key4": "4YhtBPRnEpdRr2HbJbzcMP6EhAkYDjgv1ECWUEAcATtnS5Nwz7Aq5zxpTJzwsAszxzwtUs8jA5vzcvkx5dGQyQh3",
  "key5": "3DFPBFeEgniN2czZ3tGxk5ipzwt6EYx6EvuwyqhBcnUNMuUSnggwKhbnTfLdr8xxPRqGnz1JXAZra4m8VmSiVrN8",
  "key6": "5GAWy3mCiMta2q77UfD4kcxqhkfsPqoW2sRCt8tW87cAj5imY5LcND3Dd1H6YpcCpCzdVx5G51tZzYbZ2Adk2hdN",
  "key7": "4Nfydw2J34xVX9mErB7E37ugETunvyW46eEpyQMpk5wqE9tUZALvfMk5CWzhnuSe22jzouZDDEY9EKcudKM3Nh1f",
  "key8": "9TCXiriyG2EAhjT4Rw9StPs3sBmZFa1zkWSbnseY3R3KS4BGxbDpGo6iYf4MgfWm7cZhMYpQ27tKQmZs6YRNrJK",
  "key9": "29FaWm4xfZ8whiQpymmEf9RoUEATocgoKGBe6zG8TkYLFDW2M4yLnD754kBxxh62cwcCtrJuRJPhPkCL6YCGD5GD",
  "key10": "MumaDBxnDJ5umwkFyHrpfkT9iQPeadHzuYaT3YWHcDFctS6uSGSkExp3XSuGXQxT7uXoTAQrnuC3XTqQGMS5T4W",
  "key11": "odTrSbvxA578QWHkcEAUfP3rLknhQ3wvvWYoeuStaMneGqpDA3aevkpFzu24kajnuN2UJ6EZDPStRNebYKpxCJG",
  "key12": "5VtU4ZimVLcYjLBNr2KZ8pPPvpn6Rtn6i2gYjpaSxoF8o75Vxpkv8bi23e2Wt8e9RSmRFUTRnwdf38bDVvoZC3DN",
  "key13": "5DSFLm8aCnHdUQCnjjaW123WJkcmwMP1EkRcVGbNyHeAEg15At5dcYY7vrQQUKvYpPtKXBweNekC7U7ZLw6LApYq",
  "key14": "29zMZDUeesSAW5Pc4ea9TTGNqUC7nQ32E1UevEaCVW5V5NBXzmG2fHs456e4zu85wBt4CsH8YgSoPNEwGjhz4vy3",
  "key15": "2V5Jx3AxRu18UQjTD979wfwTTVfwThaC6d3bketGjDhsNETXeeAZQTdb3U5kxfWqHMRFguLkTT61m3M5VAmZy4fw",
  "key16": "25ZmgfHDBdbpvn5RhiLuHALfDdNoRy9zkUju6QdwUYQxNS1CJQaqnmfBfmvqArVrFeRwD2z7CKYJm7f6WS51xgxk",
  "key17": "36zRHLataBucZsZyiKgz7FefcKPJ5EbovqYpNAaDGB3CtZ2t6gFknhfEqHVSpj1kNfURXezE93LDKLyGDoLcJhCR",
  "key18": "3cS9yuvnP3SqXTfHssEcxKxBPFVpuhyupga3Eh4oe5tKnV5dTK5JrMdM9jhggaGCWuCxHjwH2X4cbAZUfW7wWDCF",
  "key19": "4wns4DSW6syWs113dJDNvYM8jZhgY8UoA78AqvHeddc3EgzRs13rNtQmK6RXhb4XKqAq9Ptp3zQLDx3DJQj1yE6V",
  "key20": "2YuFZikWfMVR8EjDejAcW1uv4XbpVmJasr3CqM44UrVVqtTRcbdjVjUrKDVncpAjn6CNGuuCEpbYtZ2mhG3DFRVc",
  "key21": "5LSBrVXNs8942Yfn1Tpe1npJkav3TLPz7UrDSxLc8mMn5gviBpa9e9DeNMCUDvtJ5RtrERZHrWkzguGzQswipHLW",
  "key22": "5hXJQamMf5EECKW8J4kCbpXVC7oKWHHFmvxrBmpwn47x6GoByQCzX4uEfwBT2KzJdhzhWnHuRZtAHX9jbJBW4DDe",
  "key23": "5i6Qq536dCGYqk9ayB7hHj5JCDt4RPxcdo1P3XYb3JoNKQ6DgP4fRDpkmLGKYu4V1PUBP6ET3t2H8HPJMC2DXERU",
  "key24": "42UPr3RwLFx9g25Buv6Z7oDrSvMYmd6uYPXvKQUdkdu6q5xYDGjFMrcyhzipJ8YBKGYTt1AWLYhSH1QR4xb57PRd",
  "key25": "2nLZAQX4oYYr4sHZLkpY4AtMuLp5YxqhnX59aZzHdKaorzNXT5q6X26jNW6njSYu68w4NLeXCpcWaBFe6fq2g5Y5",
  "key26": "cvdrTkVfpF8TwX9eFRanuHhyU6WaPSReUo3S31oGrouefYURxzq3hNRi7J6RtaUtmFXh5Xk6F3SneCDLtf78SaH",
  "key27": "5sLqxH6zc8urPJFMFupJRraPF38o5Jfk3Hf1wDfiLQ4D39cBx4zKs2oCPsN7xChceYJNkBvhsdiqPnvn2ZV4MJUP",
  "key28": "43SgkcuacRVqQxig9adFkNJT1vJTPSFrb6Nha6Kjm6uR6BwMqAqZnQKL7DVEf8WrbFJYVjw9rLpUNVfWeoJeRFNF",
  "key29": "3dR3YExo1W6Ef7tfQTVWfoy43aQfDQPhuX3UyyNcxQvWYLUWowiqsmhvRzQy2AyQ95vksxDidHSvkJXAmrDzNwDx",
  "key30": "2Y5JMLfS2XCaTfNg4LzE6CFHGk1jyD3S65aYnVU2Arb3uEByqaHS273TuoqakXbe5MERT7N6vZWqjmdTT8TV3zXV",
  "key31": "3PmaqBrSt5dACTeQmcCi5ebQ7j3FnpbSZJqtsP2r22yqsewZKmjJCvDHa41Tdp4dYcfVHL39SF4e1qZjG4EPscQY",
  "key32": "3L2zMR88ar5bbxYLaVbokx4ptt5o1CCS2LfoBaPZBYSdcGTzBAsYEfQSmvhFbAfXfmDU8bgQLaNzveQHPc2V2sMc",
  "key33": "2xsrNhFAiqRs3EuxriVwFAXYi87YbjSvmzLRLkFE7oqEhgLDwMfjdSenNeavQ9mXXW17Zaw7cSbXgy4aANxSFZZt",
  "key34": "4tsSSGyST4Fs5hnSQrh5KxyunUGMRXrFYn5KvyMWVpKdHkZAbamoLqqR9qFDXKgGDNw71ZSBXyVPq2AvWXibGttC",
  "key35": "2khZ7URLQ6ze39v8vM1qWcEXzPnqE3D6AWqsjk6s3TfbHadB3K456KBRDuDfT2obSM7TwZV947i4c8kXB2Uuzu3s",
  "key36": "CwcNjED9HaxLDnwi48DkCoav7up21komnVcrRn2uUEMH1KVXUbTagAyfFj7bvaNq6GPh7QeHHfsARjmPQThF2ec",
  "key37": "4jcUf5ipnuLhb2WFJdzi5FZqU322fMn1vPBDEdn5NRZtbkCXCxrNcGLmHDSnbvowLvvB5heBLeZNeeGzbbwDVMVx",
  "key38": "G37XiHDUnTrR8d9MRxgmJPGhLLXjyTbTrXT3y9xvDUKDpVqTP9ZAYeEE2Bj1UYcb78iEaQcQnZ4XkDgwdtDydsu",
  "key39": "PW81KBimryxk96drD6iFpL2wNicph4zbEWPjZ2vtnG2eSpunARngFpnUFWw5Bo7UbKYVEgcU9Za23WJTvHmijro",
  "key40": "3EKtFgZ8cJr3UscTMc2TX1qhvrnkQSCE8Ax3PMVEGDNb93roDfkQTBCZJ87D9B2J7tFp3rm9ZAe4bCpXgdVeuEr6",
  "key41": "2XAfpELvfPTpkQD16VFVuxxDLLRDi49VSPmKp3zYgucGEMKWBWaPeVrdJsmE9WiDyDfPhxJk8hAtKjTr9bHeDjUb",
  "key42": "4f4EsmkTsTELrfSoN68XwrxyQrGhfNNSJGu1xPA8XKWZeTXJEvL4bGMzXuUVyMdF4bBxWD11C9UdRVk1Fzk8SEfz",
  "key43": "5pQ6Fs2BzANrcizAyZGRMCNiE6DRUJPjCop9d65YJrGwwqBrmCajdbHc8URtKzyf1d5ShDMTgXCFaTiTtXFQNxBW",
  "key44": "4qDdVGjyW16jqDrnauLvrvBsWh2PV9xxrJQ1c7xfDhLLNftATUrDpDBtqyVdUuE7pkS2FkBVcxB4fJgjnxpai36v",
  "key45": "bnPKhqFkmT2458WzMo9aWBrtbJFWmGCzqiYDL9GJqcN8vhSBSzEgeVxgpSsdMxD7eMUj8wVAuLdHiaKTgUBUViv",
  "key46": "5LhwuBACKJoLmJTpwRT6HASKEnkkcBvenno3JTrUAvQAXpFfrgE9YZittZ765opfTGD73dsawDbLGCcvJUGic7iB",
  "key47": "3zFNvm4eHW6yXzTs32BcawK3fW1DUVqPw1KVwox19KJ5UabtYpxVuW31uwZy77b3hrUXsZMBb6g2WAtNoGVzFnEd"
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
