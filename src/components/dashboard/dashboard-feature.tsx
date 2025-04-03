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
    "4EPdMfUzT7HN1mFn3BKG5pYBT3QnwzEJ2n7NdMDUTUWvBFkhwgCNxWrDJNhBLc43jT7kZ9GimD8bt6W8wq82NKgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uoUEq2qRPsf8nHMxpDAHsZJcvPEqZQJjWqyGXDvLMxFVT98i3siVTm95npoa6iJMXWkxoNxNTHhXzxXr4NMN7FA",
  "key1": "3SKdzzaLoUBcmhrYuEUPZczNUHL7uhaoL21kj7uN8PzppRkXpGUEsRTU75mAnBDqmtwaJQkmpfDZeoa7P1Qo5qj7",
  "key2": "Bb68F9goehkCcdzTrhTKJcdaueTBA85bVE8qcpLwPcTACw2NghNaqhM5qRx2QKU7Q7HudwMFiRMcyi79ZgumDwG",
  "key3": "3xbN3H2F98mCh8zSV9wF6ZDnrdSrASj5jHRUARhzLUavwu6MPeCY9eH7ZbmhFSB3JnMLWjmkwPsWWf2WL1oaoFip",
  "key4": "3FpgHqXBLgkUSjnQoZv1tCWPwtbmqsmWu3iFYupUuaoKLrTVDpSrf7oZ8cNW76z9JfvwkoAJ1mGvVuYbcoSeEPGc",
  "key5": "4WGQinQd4G28aQjyEsYFVmzoFXDsyupgBD1fggPaXmzuc759RcfiMcwtnY6XMUEjGKvsrH3qraWdZYhSPGGHryKN",
  "key6": "2Jt2yb9JmrATSak2StqqWvziTxf8Kdgzcs3DK5HDjRFwgC6JxdxYwf4hZQdhhuJPzzEUXhB4ZddCPXa3cx4GohVa",
  "key7": "3wN53b5hR6x1PbaUArJrDJem4kLq6fyjFhu4G7SEmB3uXURJYZbupvq4ZAqhrfPEHM95P3fTTcPuzHtFu1qSyptX",
  "key8": "27J5AVQ5f5vDLeGxrvZXYkVGEBLL48KixGwCQQ8SUKUrmo4ziUkx9ghcwSksJdZqtR8zTLXSVsTEFTE2xW2wqi6m",
  "key9": "2UiAkoLRiS16MmSs1gUtrfYzxjyesdSuuYYi1c9t7poVgANrHTG1hyRb2sBWPUWniSWZ3aPTyfGvDSNTHMN8q1HR",
  "key10": "pbwoyTKvy1D6tpfYi3Q2FZMudmTWYmm1krhKBkdvoasddJiVKLJJwFk9vFAeKrCd5nczzrfNHmdknt6y4phd1pi",
  "key11": "364jEAFc73UFgbKUoN3EJ2VwL9hCXPi43THfiPMp2EeouxdZLbgUqy2C3vhzQGWi9ufedrZjJ8fRQsEwjDszAMk7",
  "key12": "teNvHZ1HQraH6qxztEncYqMBuphvGRMwgbbVzB9ZxvkwP3Xts2Q1VMxkgKQxftQ2BPrkuzqzAdbfTDta51Meqzz",
  "key13": "4vfpwCSDbrjj67Hpiu3vkTBNbLe3VgyrTmDKwvqepPZJZN7kPXscrf6EWeqxVG7mwBLEXWpy3Sv21mpjYbDEQpNK",
  "key14": "ZyavJaydixUwqfwj64DAuGJNeXNn3NFVsfY7juFqa1hJ9TzM5zwvyEZbXgB8Jco7u43Knw15qEEp8fySbwCgdu1",
  "key15": "ymf78nMwzcRiV19N1Bos9EL665eCcdar24nAJCtPh6NXHLvxv2S8vFshFWXAjLviKLaN7ih2kqv8msTb2Mxzu3s",
  "key16": "4W2jZxVjRkNaBogd9am1gnM1i9T3ZEZaZJn2Do1xNw3odex5vguWbxNaT1kFiEcHxobyEyPoaj24AY52YgEaMNGf",
  "key17": "2enkt15UVtFHoNtp33n1PfMAMmf2GhRDjiKZLWu9Q36tLTBtUDWuVbahe8cmSCoG6XDsZgu1dJz5ksaLHb6rP7UH",
  "key18": "5cVtsxcpuUbH5M8WTmRp6s78UW9ppDXnwSdgcWscrNjhXPjFnjyVTqWs3otvSnVYQ1R6sqaE8GcxfE1Q9ECpnfpo",
  "key19": "3jcRtouiEespJEsCSYvg1Coz3btghb5rsMtUbTuFBi9i5WYUNXdpTKmxAF6sfW1cLzYQiSSM7z2s4rGzRzbAEjKR",
  "key20": "oJbxV7mxUhMGoYvWFtMHMf2NH9KKYDbb9oDDDdsqAB4GpqV6tVxqiytFz9QdVAfuztZZvvmwVK2S7gAxDmdpuu1",
  "key21": "4VuyU1CpSsshd4kdY1edWrBRGrg62UeVUqwVfJXRS1BLFYmJs4juxLUHrMBC5Aqxd5BcfxfFiwaf4yRZi8kjmCxe",
  "key22": "235tP6JFMqqNfreXZ6BvaZf5j6ha4ZYnrVSDpoz4S7PTqm1ikY5JSrfyA9DL1epgLWm9CtJ4d5mMv1ywhkF9MYCR",
  "key23": "4ytGXf4EPrPxFPXLqqiQoBbi1gg6ZVeUmnqcvoCWGCgNjNPjvwruQ9j2265vzS2oiq94PEQhVV1wzQCBhx3ietqA",
  "key24": "4dmD2hHxR2kbRCsS48pEjB7hrvqeo8L51ZfaaAAiagRHui2joCTpuMBMSdYDpyWuVHsV6qpr9qLzBzAXS2nbFDoP",
  "key25": "5R61KUGLAurLJK8kSco884kHYHZhj8PreodXSyP6fQPkwZTeqak3vo7Lbae5rqrAL2ojXkTJfQNx9eDgMKnshsPZ",
  "key26": "m25ZgVCStBczM7U6LMPAJWxizukjxfBu1tamiyfoehvZPuc59oZNo3JKqZvoW7Snfnx7B2DMu5TXxK43fZPToaK",
  "key27": "3KM3d761NyH9RionwGzXZSKFyxKPNq9tr5D1cTVQVquTpZEVwWT61CGGqq31nLamZFS5PWnucLqwkNK1iuXWVdpc",
  "key28": "4BTnPNXpQSYhhZ3RskxJCKUxxjcafWBCJNxZb2b7MZFojXMKcg5BkyJMqvo39e6XkLXBXvGqvcZDY1tVJ6TDC2zV",
  "key29": "3eGwCk8747LrEhZK6dW64ubUBGK2EMW3A8sXrzDCM2AYM7GtQtZJk6WvaM2k3rYiGTwxAix6F2DBf1LBBN8Q9F1H",
  "key30": "362Hvb4uBeBwNUJgmjJzQsb85HTvEVErQ3chbn4V9hATGjbuxtBd1Uw9XovStXAMqdoFXt2mehfhPP6gVWkhnvuz",
  "key31": "3ENxvKEiDe5zWzNsnFr5aUuMx2hQ5nZAnDWriWsvKZgkzzQFoKwnoJ7XZmBkExRwLpAazYSN6Y8KXTHxRuMGAHw7",
  "key32": "3r1im5LtCjYaR7p3ZsvEDfFsbA2TJKKD29gHaBxyvqC3NBcCLxPzMqmdh2TTcEyNVKvsr8oXCVJ2rwRFVPh116Pq",
  "key33": "ZfrfEUrNxC2L9cXc25SoJPbmkngEiAh8zWwt9nKM6p6qt9SbEXigQMNhi82sWZVoxLw3D5Dc5uh859PB5QLtnWU",
  "key34": "xwFLFZdgAZUGqNdSqsqtjkvdVshD6aBfgdsbVrzjZ4gDABoNVZTKt9yjGwrT8nhmtNbzVcSBvsxNfrTZHR4QQsd",
  "key35": "2ZNLs9E7dNLvTJec9SZ4FgwvLStuQ8DfFyQVJzjfEH9Vm3WFkWFxVVTCSGCNQm2cZKMLRCtDwtHpdVH4KCibtLZt",
  "key36": "62XzKJbBKUAdJM2Rv8mqHkkaa4B7EHTG5K264TGsjGh1nwqJRcHMa2iLYHwuPBs3o2w8ndH5LZYN7yPkMzRLZRHU",
  "key37": "2jzYBPNQptxtKkkeGiLRTEoANnzY8hLdytJ9AMDmRN4sxWgTefuPp9DEr29vf6qhNryzadu5UhmYAjFyzcvyP3Pt",
  "key38": "VomJAinVAgxyTrqawiYkMcyQBX6TjXFcfDQKXsLSKCpM74muBXJjBYEopc5NQ58Sn2gbC6dPTNDGGvbCsngsCLQ",
  "key39": "2UPpx6YNxRxw4YLfks5ptt4ULFsZnvzH5TgjpaMZMGM6B4dqaMxKvNvtNPwyAmrnGkdhzNtpNQ9kB3A52fg43NL1",
  "key40": "8smzP9ZEZLDcHUV3UJNcoJeSd94NMx9CR4u3NvDdzU8pKhuLSoPwteLhaDLuMYbDQkVUGUzgDQpsGtRJcXkQc3Y",
  "key41": "5e5wjo9V5WUDm5vZap6DrUtJi9htf8miGkNeSiLPPebBkVUmXbVN77wcTR8cvae35L2kieuUTJ9XtpbU86J3cCij",
  "key42": "4ZEERTt1pmByxYdZNLCjcmCio1x4CvBASePnNCQ9E38tGbXKwv4BSnrGmywGV7AodJ4Q7WQZ1zx7ByWNKnQFzxRE",
  "key43": "6ijCSJgp3wS9jbVtMyucrAffbQRdYckegxanKacUivQDoJm7Kf8DMsyuuvgmcD6X1dHBLD866KbNsVCYYUqYhkh",
  "key44": "4KhhVeS7hjAfdCbafFesyg84TKtiBMcmJu4fYVmESFw2hwvyTD6gF1quAyjyheHEvnyD58uL3Ju9tVgCees3ki1a",
  "key45": "4Hm68hu5DhhiK6tBg1W6eqcbRoduo6FXA6vZBGJmzdKcFwn8VPTgLZki8EqdQgnmywYboqeCqaoGrzhEDGy2wmXs"
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
