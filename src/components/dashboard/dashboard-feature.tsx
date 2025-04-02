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
    "3L4WhCrn278ALqu8muQLUyig8otygbwpE67bWxDabk55bt6HGqr6whKfJRzBCbBvfj34LaYkHC74t65sK1gvggpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JvdugVJ7ab1p67c5JpC2Rj1nHZB1vYC9w9XL7nBAnMHTrYNe2UBWiJ5ufkW1R4CAb6TKzWgad9H4gViJU6WnNoz",
  "key1": "5bXJHggJt7qM9hCJTwwAmtEMV6HEjJEHFQBreMJmFZ62jf6hKNCoz1Jj4FUbyrsKhmD5bzpC3s6RB1xyKDGci63B",
  "key2": "3NbaW1Pkxwk2ZLyb9eNbQRhKiNEk7xhr5Uo3FEvsrrVLrqy2Rntm9khGHz4o6WTPv2ootV1mNjWBAr1XQYjZA1Qh",
  "key3": "aEoEdujbofgoMhgH8yrczcMfegsdx8sgwMV5MhzjjKR2p72dPhXo7WSL571XU9YqVGy35wzDRUwBchhrRs9m6Nd",
  "key4": "24PqjZLYVRdd4NAnb5NaGBxjFCATpKzK1Qr3HogXEy3K4VVU2ZiWUvmw8MshWtrG2v3SaZvxQDnE3ezTAPUKtQA5",
  "key5": "54gXfD7xe82cEVz2HYHsEHZ5yQ8WWXuYh9nxJ5X7cqsE8jD9pJ7VvpeyNJnxzi1WenUSudRR2r7FyXkCTReE3fP6",
  "key6": "53n6qA2JhsUGgPg88YSqyxr7zyp5sLCB8VfProFD5snUKHVhsLWU2JTLzSg5RtB36LnfH3DvK9GoZMVNjmWRahfn",
  "key7": "3Rpuw2fetaDKdrQhBhGUTBQMEAnbBtXPqEjatVQDaqpDcUbK6S3YSu8reEcxY6mm28PHmn2U9N4BF12rc7VLuqc",
  "key8": "3AzVNxLQfqAhtknH7m6ErV7vNqADqa8g8C1jvJNmwrknGjdbTiX9p6UbGUirt7uMMUB97pqCXSeJ3UDNR5U15JTV",
  "key9": "48JGCbUpod4s4nhfxn2P7nwQ2AKNhMC2MWRANZG1RLd1KEczmFn5ztHCS3rm86frhfqH5rfvtUqxRr6HiXKpRBrS",
  "key10": "Wm1gsK3gLPhttCuYDrxaqmAavGUPwWNgc9GcJLvC8Bhg3XwGfdd6Mjd7vCxd3g8EZEaJwCyA1XLqafcvsUfEm1s",
  "key11": "2DUCutCxYF1wJJxs6ME5AoP7w5v46XmExa6vbFzxJEJxrr5Y4gBMojeHjstipPCFULNkWwAf5Car3xhMSLTEkXF",
  "key12": "21oYkwYS8E8VbNT3cN4xDZXTjvmPGy314812BZcQ6V3GgCsJ4XMc1uJiU8x6QLjUNXg1FLagz2WHzv8PAw1eBCfs",
  "key13": "3st6JhLMXmZodWwt7e8FYjM5Rfi2Cq1JHhdAT8hUWWkypxFEThNMUQ2Xb1bNAyM71giSBRYF5PcygD3KfiEngzoi",
  "key14": "T93hxZbypV1VbrN6brCfkcX4nhFQrtaR4uhdxjwopKyF4VFPEXvDNoFTCcGxFcZNBYakEwkc957hfi3GQngSMWc",
  "key15": "41PdUtYXwZkcj3CqPcHEobeH1DaFjqsWXT5uTWGx4DZMUqZY4ixdTBFN2JqsXupA1DMrSoehZ6Y42jp4hy9mnaX3",
  "key16": "5MG8wXkAVdnEp9tQJoq1Cr4AZde5saZGhGaNM53xu8Kh4ziCCudJvChgFqjDvpikBCsH2Kk992v7SjmFZGcGejiP",
  "key17": "5uqt6KeRuQiCT8xzC9ojfSJFEqS2pxVxwt3p48DLQRpifhZPmvvwFyndNFVFKLsSDVm6Tcj74RTp4BAFHSdToUAR",
  "key18": "kD1x14JP8j2S9g5AatPh5ju5xjbo4jtLwp6XD7EwdEVL1E6tnm97G2NzqrJZ4DtiW2QaPFszE2rAhvwirFtii99",
  "key19": "3mZwyF9PNFUWtbZZwt6Wg48cz3dRe9WYfqUBFyzsEs17ukh7kfTCtowxwkWTEmDqjSbW2A6dRoMz1Di1PfxgCAxn",
  "key20": "2sDy6VAD5oXo5X52z2rhxcW6AKm3NfiGWjrz7U52VZowidxSnXEC8pEf7jzHHdG4FB9uYpmNoPjuTBav8Rbf4Ans",
  "key21": "3e1DHkgBxSggoXPHiyG5GQ8fMnURDPiH1knhrRGihzJsWsS95fPVKSoQAEvMtw3YUxSor5mLMPwEigswy1di5DwG",
  "key22": "w9bwmWa6rGSSPzPkZN1ZiLziD7EGTSmCesc7jdnKYSJKX3S7YprZFwhoAujPFcAQKsLdToGxN8hkuFfHAxohQZk",
  "key23": "3hVCPgnc8pter9re3Cins72ZoLDrAuJzMjrRkWTS2Dd3GHbEeeArzMEjbQ7w2ndE2k6xFZAWTfvbDg4HdycwLjJu",
  "key24": "4iFYUMnTS4unUyy9J48gDhevinLwDbvAmYQPgBRAXCjKwFdvUkhdv7ezbUg6skhM1o5NcX41r4RhmBrApCnuLQiM",
  "key25": "4mTdo3tSxGEXvCFQjRVufh4Co1BwDiLRnRsXCssjp8HVSS1sMUqrJr3YJRA6tJbJznRvfRDPtyF2mThggrkPFWEJ",
  "key26": "2mpJ4ozGgL7nCR1p8btxMV61eqdMXQ726h41EYA5kNDyv9ovLKa8wPKH5wYrvpbwGyGtLHkiroqmLJG946GNmMht",
  "key27": "3aU3XrfxPym57a7tH41aPz47DqH3a4F2oAT2gxLJX8Y8WYDpwtNfY3GAY6utw9CxZj8sMhgTeFpPU4T2oXamtzRo",
  "key28": "2gD9D2WoXEKbTPse9BHBvVpDvnGuBB3jkDVJes39TWwkZVN8N8eswxeVKLp97rrnYeEkiJD83FB9e6rZNTkq9mmL",
  "key29": "2LC68wMeVFNxLNB1ufs1SoPYtYwHKSnDGmf5k6FhSxuyi3AkS8BCmdeQKEBsstt9RZPYGVkbN3ufyQeLtKhmcxz9",
  "key30": "3KzzzCe4yhcBpH4wexeRggdhF6JFdmiw4hvYzLuhA1ZbSkzhqPK92abSPDRQUReEKJ79DngxHL2R88d8CcKmUkc6",
  "key31": "5Uqp56qDjEM6vKmrhLKTVMQwqF9B7MimzRMf3e5oRo333LiQmPK6TnHr9VBWpf8dQoxTu3QUoCvs15KCPSZkgbc8",
  "key32": "KoUFJ4oiU2GgDMXxahD5jsTmVMEZ5MaXEnV43VCLe4ZGkMxJKUkoRBxsZvKP8gB7z7mmxM8bvJzhkgThMCMWmHM",
  "key33": "5JtzWR99Y7rFL2jSFn7zp3Bbg4Lwrpn7WuU6LZhfZ2ERLrphHmtxQB9VzRd8RMMRbt3Gyuz2WfNyakpBGd6bJriR",
  "key34": "3iw3Bbe8Zh7ekyJiLcDMc4AAoxtyERxYvfJbE6oUgHJ1FRQU7MFQtUX5Dmf33TX6kjomubcYDfbkvkdiP8CCEUbG"
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
