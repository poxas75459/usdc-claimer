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
    "5imbbxnvdZbMbLvV5WoRTAQTyzXcqWKgug95nq5Ts2JfwiJFfqatU6Wz2S9M1ZpVp9xtpoL15GyfvG5axsRxakpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K6u6hfohCD5HmdN9924NhEce9GVj39etUgBN3ViXSqTZPHBmyZJH6CbcH5kWLr6xcqN7jrm1ge97cp5G4svGAFn",
  "key1": "41xm9aAwRWcf73vgxstkzbhuiwb3G3odA28g5dudR4MmdSqihfQ1YCdcc6X2Az7diMPzrCA3NuVfbfSeK8EnCDFz",
  "key2": "4ozRPhVqC6tadiiEgKtU1w9TpNGuxQe81fih6am3ZLGqoZTmPNwwYHxi9ogMoWAZwXorPoce5725v7ozPiKZe48R",
  "key3": "29HGZ6mvvxhuTC74kQDZGwfRKPKqNUaf2VJvGEdDdkmwEYsZ2aM6secTKf8P3qdTkC8rzXQHTvQdxSFubTkZR5Sk",
  "key4": "2KVpvWr21h9F2y46oPQ93egmn8UYXW3i3kcb2koo7qzBSmepJPSHsGuQDgJkLTf59qBNdFZmHeoWspR8ZyYYwmd",
  "key5": "rmVbRjwtSnuCP1Ao5WQctMYmBwRgXjWhZvaStdgHGGr2Te5YM2JWrXsshv6ctHGRiT9QTZiUGa1dKdFeWx3n1kE",
  "key6": "4UQ2JFsw49JE67qBGANH5y417i7TrtCaikLcuZJcPEdvZeSyxhrSRSSK7eVbDNuftWr8o8PtPcXfXkuuACZNKHmK",
  "key7": "2jiDZdLvdy1QjiHKRi5TD25X1kjUkhCPZA55QVXjNjJBaC2Yhkr9bnAtEHKLr89B8ug96v8gjjHZHHPGHxpx5KU5",
  "key8": "4hybVBjNjNKYWEJLFf3psSQwbGKMYB17RXc9S3HxTNB7eAwPRUoRTYL9NbJqhTPUnT9AtATAyDSXz2sXgtCvSy92",
  "key9": "5JV9ATkYLx4VZgoTsbyBm4tdn5pnY7pXkTAWzozHvK9FDvtBWm8LtZGRRZRk8gKL39GrUSVEqAC3fJ3zQ3iuxNHw",
  "key10": "2X3kEvuu55QXRMTikRPakBVGEvXSSDxc4sRwpDri9mjb26BATdYhsGhC39r95te4qaYRPmhn6K5Wrk7dnvmm1PRF",
  "key11": "2Hbxghk8XgPDBdugAghkHKS9amFL6i3iZ79PoECW6RvtT66CDmBuEDimdd5amgd1XkKKpwAeaHzadXbUfPULNSiH",
  "key12": "3Gm2h9v7tEqc94F229TcUZv57QgwkUMnKPrGtHGgAbzZtrWbVwWGXc2VfBMd65L6YYWBn3YQAUsU4Ab9RohZ9RgM",
  "key13": "eF3NVnpgWibtKTUrMWc5krpHvbizpKBgQyaBENaCuWhsdDwNRa3XrejXeEzA2T8rC5RaqUinwCnEXGSWwee9st6",
  "key14": "2B1pZ7o13JcW1CgdKkUQoiUc797K87sG3WvdddZW4ycxjBPzbapR8xAUnNhSS5rwtmJdoTuATFrUja3mhSqXSVDh",
  "key15": "3TLuafwcpEfsn76JtADnsRdWjUsbJfwuezgCbSmfBiWdfnDJXzJopSpcCpNDMfp3WwYUNgHGj1KobeKPzFGVQSDR",
  "key16": "4NgcDRKDNQ7QhJjxqtKxaAjwALbSqHkjuaAkQ9aMYFFxVp8e8jdErtkXxd3wGi9PZrPWRvuj63rgGUHvhRPLWU6G",
  "key17": "BLNDL6NEebdcLvBQaNYbFGfmJuPAWnDUCMKFBrBGFnoXWDhT9cWVxPdBJQ3zss14WKmyM6jVWuPT8snRfLzPLEb",
  "key18": "bBhzr4AkH3Gs4RAueBgu6pb197Ak1bDduqqXG1rws8BbgGarUcqSxFbTgCH7nqPkd1XrpciQiu4VUqnArorawNq",
  "key19": "4k8GEPdnPpiCztayFwEspswmWVwy8KtrwepEvXnbNMZMj4bLPqjtRCQVNQFBu6E3km68L3eMmfeLZ7xWPsRQqsQs",
  "key20": "5T6S1dBZhGz3mbDcRvTbqenGJUqVZFm1vfsm63cd46XhsN7cq4e4xzMfr61bgpLKsAzsGC91uCpRmXyR9PNnV6nM",
  "key21": "58ztNwxp95vScHbF9YX7gN4YhnokHQ3r9sWV1sA4AiST6ya7ugTGRdbwwsURkX9L4E4ZeGJzNg1CihNBUR9iS5Zn",
  "key22": "5pRB2KiMfY4pLLmwLthTYMW83JJqK3hC5MRhnkLPnpkDdagTtYTRGR6AVQMpZETkS7nN6bBMwH6Hhq27YCgdjNgc",
  "key23": "5FPsDRAU8GmcTG1jrY8D6YBtSi4CC53dP7uLbuorACSF7LPM4yerAGHjhxj3To1FQoYSKp6RXaL54hjrenf2PKLf",
  "key24": "Q77pedHLVsCcNxPY9JUxzpfEsQGqCL5fJK2BdsKcAkYJg5n53zvn3ZXpoT861aCMEncmpM1nVxBS9N5HETEoWMm",
  "key25": "644rqZNsDR3zBEiDs3gAxqhF3EUvZtbtrF6bobY63vDkATmWECXHJACWT5uQqBgneg9Nd5GN784SrFe67Xaqx9P5",
  "key26": "2KmMqsgbF5CA1YYLXj2bFG9M2gCF5DBAC41XW3VpuEU2bUs52Ds3b3UfRCceSxw99SkMgpXczmey8xADXyXReDxD",
  "key27": "5aJff4eniE2bFecrwJmtrFYhHATY5M5yVV5KVBdH39e6EyXrB1XAkbuyk9pwm4FgakHL3ZzwQ9ds278WnF8bRtwo",
  "key28": "27f18aED22fWYw1mXY263pBupqJDX49iWBu5e6zu4FFx1euHaYvuFW7weR6GEHwYHgVx9WvHWvUzbc4cprNbLriB",
  "key29": "SJbKHzb37g5hkFgdE3d7TGT2UzSVaoZ4vcdsCcWuH2AFDV3HQpgCh8t5DemuxdtWRjt3GsjKAM4Jc8hkiKEKjEA"
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
