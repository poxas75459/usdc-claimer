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
    "31H2DfzV1i8nEKLcG6yuh1o3gvmFe8ETKs6CywM4oTsqB8grhnmAewSgCzEqHi3a7AMCLWZWhTKqLZRGBA79o5La"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MCbbrAHJW1zH2VFLoGb4Qyw52YwLUNqvZJaoYQS2LMdaZ3QmEDeCsvTfs6piAfRbLh77sRsE7DTp2cgCmvJjHwG",
  "key1": "5bJqn91yoaRPLMwjpcG769n3FZ4EQBDEeTGjxG4XZqkV4zdfeHenR8G6QzUL6pyW5kCmqcuJbUXwESyfSFUxUyhA",
  "key2": "2dF5xzj3SPHU3f18Nnn6kyWpMFYSgGhiDq5myFwMt9ZCs8QdNLgfQ8qYwwWm18tdJARNhSGfZ3qFq3N7FkUx8oL4",
  "key3": "WmozgwwCGZSzUGXtbfgoVy3cPi35rhr8AWGs3sv9ga1pqeCVJ5hRFkUGv2JVRr9Ax4xXAeF3r1YAxDzGbBidrkx",
  "key4": "BU5TxHLxEZCw6Tra7c93CKowCVPATnqVMyh4ACqZjwpKLkqBS5cML3CNNa2DFd8eShrnGAdg9MKppWDYECeHffY",
  "key5": "2zDfZ2pjjwDrArh8PzMDHrfonEcPPeAxMCXEXGxizqVDKhE2eRLxgqtdz1Wc8kNyHea6VxzzWR2XwnGaHXzPFKt5",
  "key6": "5DLcugDLHZF7S6oQpowYzgSeYqzV1zkKhQUDX6eYbPxDaL31YSR4M4Fvg8FJ2nkEFPdtSqZzbBJXaeoEWFnXNkQQ",
  "key7": "2zvUXnxgdz5kUgMTvcCosbK2U6pNvXGHBLorkwr8QWg1Homuu5xqayWCp14FpBdaqgx9Ah8GDZRWD9jXqXiAFkSB",
  "key8": "4Ndv7vrbVSxihQjjADwQFdjFu5iFPbDPYrWFh4XXFPwxFVrQxcKsPPs93vCFAhJ22SzJ61tfssrLAtUMfdFgZ83Q",
  "key9": "2xyA2bkqzYpYfePxN8ioiBiDMJiGYb8PPAwfdxdyfcuL6PQcaghSnRJd3JRDBZ1eQggRXC77grxALAFfqGvP8gjx",
  "key10": "5TwXVH26Z6pqo5RwApAwPDgqdD6qehhsSKxgBjMeSaMPVuMdhqdsZCRgYBtFQdrRctmL9m1CP9oajEERr1wk4S8X",
  "key11": "2kcmSrkXsMSb9pqck8jxbe4dvW4AvoRr5fzRxdFKZTZUWowR7rDLQUmkJLYF64jPGVyyneYYQL6eV3sk3n5iPkXe",
  "key12": "4pCiMfcXho8jfHFpisdPTQLkNRgMPzkTVYSvtKKPutmFDP1wnUUTbZem53yF8aDxGbcaNrq1XdeBKXA8X6NmYuea",
  "key13": "xEyMMTr3YCvCeGz2cfyWyjuWDny1T9YPPrseeHoyXoyYNwWofrDqrwUs2S2hqMGcHDZBcAJmewJX6jna2fiJFjF",
  "key14": "4JPzEVTPEEeXTSapwxk45xAqgatC9AX7VX3iAbwkQgK1R7Rja5bauNst4TD6mW3jjZzU64RDKvEPLTp1BMuCsHgU",
  "key15": "3un7JNPhb5jYpgGTpAnf7VfVWGaxN2H3pM65cyhcusijbPDekdidLUUJouYme6x8UTHV3YuSp3k7mWzCPCejLmkU",
  "key16": "533oS6L3o582DGbqMCw3yPkcdkEy24aTpxRCuDDDGJmaAgAQvtPagoF6yp79G9UhHhUZR1JWueMdkgGhebvfrNYe",
  "key17": "3Jba5QGgtTt3WbuLo95V6KdjXzYJXgEcmNWx6SVjYAtvqzzvYLygaxeZn7uAP9CEDu3sN1a1R1TxtyhPjYbr67QN",
  "key18": "qhu88xjovMt3aQyyur19wegYgwZStvdhZpoYRSQk3cLSDDmVmidri7K9SaiKKU1AJTFvjgnFc74Xd7xeXX15qaf",
  "key19": "WfNx1tGJveu9Ay7qiA2KnPJRaiVfe3GuHVq7FnJNqBFiGWnsZG3wfStgAK6bj6XTB3vscsL2FEaCfuCtdkT2ttk",
  "key20": "2chtKS2BfF3c8FjygZqEZR7vLgRYPcSreBTjmJNYqgd7T1MJZpx2tmXFxUgSfRGUKaqFq6Si9X5ddNyXRCWuhB9K",
  "key21": "4CgBceWjAtwC8DUVWwJ3m1SWD4igwsajRHju7DcvTbFoSJCfRUVXEB99BddtmkSfpJM6hnqKiirZ6mG6R7ERhm3J",
  "key22": "4pjg7eJdjfNLiVNWykXFjfSPhioTE5HBsWTE3HQDPVupLYLpJfRQPH4mrzvv8cQGE8tkAUoAT1UQ7utL3r3b6wvw",
  "key23": "4mEorGDG5QUwB7HarMJWNdpewXDCpnTUCduVRWteKALtmPH5m28VLoRQX1KSDygcYWyLjfqKp5odWRYbUBUXsRjW",
  "key24": "5iWbRnpLKSL5MAuvotwudrj1vvphjoAmZpXHaveS9qucMHkZJxBRoT1BBA5YhoVgtYyWXPAENGofyks7EYbMNR3S",
  "key25": "4m51CkHG3n4rjQBeECfbBknSbwBXytAWNCy1Vf5Q7tw2gWKqyjzboGwhfjDNEstjRc3QtmMVek5dvry34S1KtSJW",
  "key26": "26C8zVZjZHCDqZ4Kz3jvYzhSAkzjRGSfd1VxYNaCEicFbxeHLhrBuxcqXbeEs1rqs3o3JSrDz1g3YDCuSTd1VZ1W",
  "key27": "BRiiyrCrDpEEN9QNr5B3fSNPTFpxzohgz5JqUYoxTy9VMAcdRxV8DnhA2SxTThhVpuoLFmRCa8WqSPZYP71xdPG",
  "key28": "3VsDUEbsSeCwQXUvQpKp5462FumTRJ3vBeHHm3RHpxp15LbCgr3MjEbtKvnhCtL6rETsL8r8nowHFkjhnuv9o5DG",
  "key29": "2pkepyXBr2ZSLmggKGwD4RNsFkzPT5PiEZdYATT69eB7YEE8gB33anC9JrY1iBPkrXWXXpEDaeCHBNQpBh3vyBSL",
  "key30": "2oghy7AyCvECdP3zfR2hzJjztfDJWKevUWLEiewmdRZXfv2Xh2Xxk8pCxAd8oWoJ8fSQpiktPcviyQaJsa6ZzPUG",
  "key31": "2QSV2a3WMeCZCuMQxRtXUmvtRoB583WiDgB9i9d8WfqZ93g3vtU1yNejhvrcs211x8qwRrcEGTgL1tnkToJxv1KP",
  "key32": "3Ekpo35uQiqZwCBXth9SbkMZbuASxhX8FyVgsgMSocCy3sco47UVKWfzAxmsGjJYJArKKJkHw5hwz1Ss9MQu9qVy",
  "key33": "2Bzn8xRWao5ux1B55Lex98vscRmqSbLsevmiWTfwtLh77nd8QBEbcRTmtuD8VzBmH7fXvRm453RYp3s2jbDjXofE"
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
