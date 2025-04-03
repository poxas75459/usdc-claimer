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
    "36k1UvsPLbsW35US6Cdzb19KevhwMSAVE2qR2vmRXTPWrvnfHFRQUDn6Ru9U3VyBajXVhmTJ96AyrqBYDKT1eRL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PMSLuX7uMEW8F5wL52Y2pU1N93AGRVd67GHts3qdfHumNdzoygxxxnR7DXRKiaeoBXHujb9PW8KmxwujET42gn9",
  "key1": "5SvPbZbueAinSKggjM1fyHQwCCx1QRCUPNBAzxdyxXNQEJxmreyd1EuMMXDrvkMrz4tjZiVSTqdYgqvtGBmxxxYG",
  "key2": "4RyF1CA3UGtbnCZzimYTYCNYwXdH3gGM59Hxw3M2K4m9bvMoP9KgHg6udZAWMJo6wpaRrPZQcH7Ba81RdCZJZiDJ",
  "key3": "4LVPKDYo2qEcK3CFpxnRydfKsgLrvaCjwNCyQ1AmEaMMwEaNwE2eTL2Vs381HwJ8qHjMj3KeS6eFs72V1xMeLNHU",
  "key4": "2zp9sU59QKaXBMNisAPiGjrU1mUvKBCmf7ZZNBD6JpTKXwtw1WUwbCZVGUEYyfAHWaGbtzF1yaapXdCL9NrhEW3q",
  "key5": "deHgh81BdnLX2pRrKdLKpBfdAJXRvWVPcKJofCerC3qn7vXFzjhwc2WwDv8qDj6rzGGeCSK1eceq9vnkvkr3uiQ",
  "key6": "25og8Y5wjChYWe6vi2StF5v6ViSh33QuroWkbvkdCyxBRk1kYwGgaMMCh3VHDdoiAveM1BZccVRdEa49qa2gxx3M",
  "key7": "Qp7kVWEjq8XmQZ88UkuJSSuJN7KQ48Sui5fXGrUzWcxwJf7CPqGKtyEAJAUUbqeVGMq35pC5PhpTx4e13kycFNy",
  "key8": "2NWhfkvC5R7ZW9H4YDPb6eQRsQwZuSX9KZ17zcrosPzvejZW4RDsFPH1961Xyk8Wi5dDhVSEwKPmH7ZstnjsNgbZ",
  "key9": "PNv1kG3hKWQ9cHdWM7ZmpisaxJQLVfys77ZR3t8UxiAX4KiFTqTMtWQcEc3WiLwt56HxLTYS22EGVU5MuHQE5A8",
  "key10": "3Gybx45QrnimRULBCjqt78ANqrwh9qnAHnL8RpMWtjRs593pDfCcXWt3FeEKtyDSd2EYjaZ9JeVBQge9QugpQRKF",
  "key11": "42pGD5BBgor8JpQ9GvzCxonR4yabXAuYUyrw2HRqfCqsgMHSpeEJJQExRh55GqmA1YBUezWzynpBbGTdoQgZ7hmP",
  "key12": "4WdkWgp1ncfWSmtxQiXuZmk9jbQ3H5MT7wHg7G6E98vNmFJimTjU2wuy6AjcyKUY3UuHeuNGUqapjsWJjQVmw25B",
  "key13": "5u87ppyxdQfnWGcWho5uDiGvGcaWdcnc7H85NGsib6JTNgRzTvsfHXZJkkBhcW8otJhiFgkPmfZE2zWAR3Y88fCy",
  "key14": "2YyaRVez3pdDRmvuCFpXWpfUgd72prRgcPVEkj9yDXGRbDwTrmCmpSqx9pKGSnmL1qqrj13QVH4bwVtaL2xGcZcT",
  "key15": "5YN8qtd4S8sYbuEvgYCV3p6FSq2Ht4bfsfmhBGTaj2Jd4SLYas8m9ovCPpArFnpyaivyAb6brsoAxoLxbsNdSBSK",
  "key16": "5Xd2bGWvkhH8GEEvc8nhgpuU4RtfPnvJ2aPdDRzyS66gZfFE8tAutbJN3HSpRwxPe7FVKcpwU957LgzsExB3RpPP",
  "key17": "46DSCSpHhZepg5g2kLSRfhudy5QvyqRyd32BQCL3iPkrc6jSyqWqbEf3R6GkksoizRo2FAJjHwfrb93wfB1WuuBU",
  "key18": "3ZCDAtAjLNqEahtqTW5EGyxowRhKEfEoHWgF8NhpHzZtAp86c27kEeKAAmmkmp5UVDst176TnpLgXJdbAu7PkinE",
  "key19": "35L6qQ4HHUN6u1NHF3EQv26NySuzEFkmmFTMw2P51rrBz9daXka5LN6fv16LpCrxc7TrExaQNpxeQwD3qTBfT7Hz",
  "key20": "28xjaqxPp5ANpcR6U11tFjkme6LwstKPJM8wKKNZikuov1ME2vdNNT8eq6QFCkjHPR2LHTJCv93k77DrfrR7TYTp",
  "key21": "4GHLDcN9hRwmGumtapE3B5y7NK5rPuP4LH96EMF5hBuTqxD3Wm3pgpz2BHaAsDt7UHbrovAU9EBzhZwNLaFMQjFF",
  "key22": "3t7K2DKfKroT1c1cjchNyAjM2XE5HaaybXsFSD4hLuh9TxC27XH9BKSQ622T98DK1LKJCP46GsELuB4iqFaJAEK7",
  "key23": "4Wfd1naDHdUqLnyMchbyYx2w4WJmTxAEgjYuUW8LEBQ1isu1iG6HDcZ1MvnLoUYYdQLhNHL7VyNzCskM63HEr5ct",
  "key24": "3wqePFs8Bg3aryrQaJkj3Wghp98WYBd4ChjMk2TS2no5wtrNTLBLtQpcewwNSFkCtC7KjrmQFKHBejj2dz8zgsA1",
  "key25": "EBexn4qwibncd9e44uQtj863Qbn6rM5kgDjvf6wNmapb9n7j4raDtWVkWbkaaceYEdm5wNNw5aXiMZarQwk4EWo",
  "key26": "2Msho3831kiHtHPEU4g9J2TGtjYKJuBRQXCLbFYCLsrqRWYNvcojyp1eiLTfoaWMErSv4EGxqdhfL3vbFEP4TqxF"
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
