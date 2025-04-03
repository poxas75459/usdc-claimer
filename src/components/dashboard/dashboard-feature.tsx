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
    "4aLnf7prgQCcN6gGY9f58rAjBB8keoZFH8iRRgv2dD5mSFegZb1etCCEThLb8euZak6NeXEWA3Seft6EXX4DTbzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52vd64rjRSmkodS5umfUUU9ye2kBJ9nBNquatoqnkySqugtcmp5PvAxMEohGXRyVg47YP4eG4cnWE1kENpw8Q3xG",
  "key1": "3n3A6F9jKTQMN4zzatmhXLU2Pg4Gb8o2c7dC4uopEAonp12UaeeHcTQtTPnNtaieyksgoTntewDHzvEMGdfpHSrv",
  "key2": "sgJSc1p2V4CgGAvrr8yvgP7vfh1dk1kGZGQ1vkLn3JxMAj6bKZkmKMhmG5JGsr5jQinQqcuWKwkmdeFkqT8P7YK",
  "key3": "5Efxb8tZnmfrMMHgeJV5BLsCkY3PVtSZgWZe2YHxZqeVV6qw4wWQJFoopKHTNyWzFPhp1rVQj7mVg7cytVk7SGsV",
  "key4": "5N5y3vhV42J3SDfXtMuwiSggzi6KWMhusNg2iFxSpLbcpyGkt4tcZykZq3T34PHnGfdwHeB6FJ44Yi8gBPBzHiT",
  "key5": "4D7dt6kYkvYME7pKBoFgcu9Q83mGfbmGEsirfMgTN63QzCXsiB8fGS6BDxNL9tWfspewU3y3DXafP8uPR6xazG33",
  "key6": "2RdrXWDHqokvoVp3nAjxAcHpQGiQf1sDJDZwL159movzvBvo5LdJyBDaDbCcN4G5HdXne8WtJimF1ZHWnarzjGwU",
  "key7": "5Z2TMYCsfCHBBLSnyDEYxQZ8Xis7gi5A3jHE9MbW5PKSmbLoDdhWyhqTdJdXebenF93Gw6xBPU4MhUKEJLN32LPW",
  "key8": "3wBkee4wqAnGVxa19VmcbuUYdwU2BtcTqdC3FNn9rWWptwfA7LYWghhU4FtpEPXxEdCWnwBSihsPB69E8565FAKS",
  "key9": "5pyfKPcNxkUJMHfmpNEzsd2VqiHdLsFbF61yt1qvWQU5RwC4PgarKLRj9Gu8V2p4NLC7Lio6smrZbd5jMktmKYcu",
  "key10": "2B2ZkjxTYJRVfkEDPGKBp799KzVSnF3UgMKhVgSXtxJaWjkHcniALdZtgyj6KY3BfYZgm8H2tNeKD6xLzz2XjBUf",
  "key11": "4VdRzBqeQfyhXp8qNGwcxUqDWrhzfodyMu8tcwBGo9ErouAjxY7YZchgFFZswXhyeWoSsDjSor5jinfs3Zag3SxC",
  "key12": "2kGtzoxdqaqyk5Bn8iDe3zbp832MkqD54uvK7kRpneGQsw56tF3SmHmTpWJaQAXEAGHrNKkpPVwz5gvmrgpdELjp",
  "key13": "2FRs37SpeUGkRDv2bP3gsoPkNcJcf2kn6AaRGWgoknYgvEoiXNQZaZiZS9iED1sdjRXygv6KbZdxe8sK4RzzXCo2",
  "key14": "3hBL77okHbSmXZoaMzmD8VUY1vapRW3JRBJb2qYNXHvDpLxCJ4A6kRhGT7P6tsR1xBTXyTrWNiUtwQJp3dXBsiXn",
  "key15": "3phNtuNQBgWmbVchLuvTQ1fcAKCN2duWeMFHcqrEkBBsVTA4B32jvVdNzC7nzZ4XDu8bvy6Wkmrdj3zxR2vXyeqJ",
  "key16": "uLaZyJD6P34ovxWSq1aBVPZkWYBp3rci6HPEq7RSY8wGjHVZcD2Nv7eP74cGfrKU59MePgZhbfozavR7gc43Ato",
  "key17": "4XZDE53bkwHMVhgtyn6hNkqGL3LZXsQZV6Mrwe3VhjwwRrv1WxcUArjJ6dhewfSWNRQEsoxpy7bDLgCA9TKa795k",
  "key18": "bpyNEXSQToRHHhgajCTemB3zTHzkpysNPGPvFbF7Rb8YFi9KLKpbG2w3YUb11Uv7PobsCVuJKFbsMAWXvujn9GY",
  "key19": "3U8AZHMMqKu7h3vRJvKuwRRpQgEYeEYh7BnVWxGzqd17HWHG9AAZ5WyTj7TxL1D7Rzryp1NRkTffqMRh3Cp7FiLy",
  "key20": "3NYbytmGgj6bNBczVgXK6zj59uHS7oHBtZecsU8SNkzu7mvrPpRndktkg4CTFutAy9dyLd3QzNLG1FX4VjcqjUzx",
  "key21": "4njNDcEAnBirZCtpL3W9zht24qj8AwzqqoB7zemaxbUdFTZdrf7R4uL4nzbwChvRyqU2GimwKU1Y5cNfefyuhNK",
  "key22": "ctXmtM8J85vEM8F1hFikTR3xmFsmNXZ3pvEsN8btCXjKHAP2a31WnKPN8isW5hheL31WCjQjEiefa3Ym1FZ4jAX",
  "key23": "4PRdBeaMd1dMCjB2FGdbnEyBqmkGDNgHcC7KEw2KwjrWw56rNn9BM9Yur2ZqHBJEcb9vueKcEGs4PfwGWA2VXXUv",
  "key24": "3CaCBPar2bF6Ga38DjRGdWnBtudMiiLMiVLu8T8v7vqMkNuVGBCFnU9bHZc9eH3cEZtSEgj4G1DV7bXHxu8DAbC4",
  "key25": "5MmY2EXMUurfwT7L1kYcakRtx2GQ4L7vsmji43NxSxLa6ADWjnVZwoydUVMLvyDfQGQmbqaA3RXvZYm8YjUsZ2XF",
  "key26": "2aeNJUTcGVP42nrawuGBVsKcRo5dgX3R29vYJ9mS4E5qJBSRfz3SXsK9j1EX5smwcgdA6GAgRfYJX9qZiPCyiXyv",
  "key27": "4zFuq9HGJZjt5JFvFpF1Z71GxYSqCcKACLPzEGYR89ofA5Y5yU5yUkHcWpfQLemAabJ5BR9CeyNCJYTxwsBRXhPU",
  "key28": "4S2pC1txCj1s4pcrwZRDh3EjbdT94CiJnb8RXWwQ21MYwLbR8korzsJTbuaaPgEx31CkJLWDzExAVpEKJ1R9qbk1",
  "key29": "2H4yg5XsNWd31vzycSjPYbmsxZahVKkv6EbvwAdFHoYhK5YVeptYi4ANTLbESqJyUmbtos3L2aj3aVFdP7hVKPgN",
  "key30": "oGKdjpkkMa1CL7vSdqYeb1nB4cH7DvCypx6A9ak7Jd7CQktnMnE4jpySUaRXWAcJ39Bb8KAQL7faZfk8ySFh15q",
  "key31": "5ehGJ8sp2aXrjZjV7WbbG4anoAA9SPC2B3tKuGdvGHdQHJwXQVF2Gpd27FwADZ98ZLnXnpFbtsasHQpeidKBSsfB",
  "key32": "3jhfVW6RL4K1cX62EfCwi5PKHBBuW3yCjN2nzFUfUdtAvRjMAweudpuYAVcopP3XCGquCkHbLRo3hZzqfaD5MX5M",
  "key33": "V86U4JRfB4VwpNS7vusUUGtSUjam5LbYYwn9FxGKJ1dFgPTRLgo13LY6mdZ7AennvEgYsgfq2orRG4vYvFGpfvu",
  "key34": "5hXH4nZofhy25VTZLB2FwJmAXzZueXHESU258uut24J1iSpKCnpKWiUrVLGX58z6w9adNxZQNeYGHCrs7MA8KWeh",
  "key35": "mKBDsrvW4VQfuekaMPchZXY5eNa2yta5ZwFnrrjwtgLWNG8FvBzbxJgBWjjBtqLoSrP1yHR9Cs26PMkxEFa7cuN",
  "key36": "5GYc3DBcpAJqno63fUGoMtRoCZ8s1XVbZBUjiSsFxPEu4g2ZJzQgomaZpDVPgH7xxFDnqGTrwE6NWiqTM9a6SWbD",
  "key37": "4K936hxkQEa2mda1wwVfo16GqA5b8gbQmpv2cdBydeUk9RN8a8FxTE9p2xRbkEPEXVGbJoEpcCth5t8341n78Xwx",
  "key38": "5htbWnAtpLT4pXEC9FWNkk41Gm9KDNYDVFUTEZPmmhBdKYzaL3QaKskoJwcpRuALZL9zb6KdMfL65ZrrFRKVgbjs",
  "key39": "z2Jxrm1UWByMfH4Zw1nTxqoXFVdRJbtrms5AGxoRrMi3hqx2fYbKorWbdfhhkXQKAmEdAr6kQmF6pq4Q76fsUXw"
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
