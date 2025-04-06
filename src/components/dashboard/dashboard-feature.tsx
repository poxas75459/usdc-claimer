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
    "22Sf1ENMKzQT3GTDjmXeYFVcjdbKEyTHVZvjyrS95XgWNaX4agq5cU6yQc8CtaiNxdLz8KRMaHtP4TUymDzSd1vW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bn6hy3FwELVYGkCyWvjM11myDoRWMvwU6AXcaYbQT1AGJdCdPmLSWyxJXUsRnM81isfq8Nb5AJ46icvwanDNMPD",
  "key1": "2g9AfpTxLHRtEMdQreD6wuJv65wTKeU77j7HMGxWdA4Qp9R6VoGmii2hquNgUHoxW9ZG5RwdX9AM7intoGDQXG86",
  "key2": "3ysWLewGSM8F7sSTgc2rGPmeQvZw88gnCEvWtjP5PR2cbtBX8HeFuPieW7E9U1VyJSe9EGSc6JxSnmkqbrQdVS6y",
  "key3": "3drgNUej7kPBLbk7aY4XgHS9CrqesJ47hdxUK5pYETyJwzPoq49VxpcjWQGUBTGbKmgXbSZPCLZpvjZAdPcwbGv5",
  "key4": "2K1za7oSp7FGzbh5TkrezgwFB55bP1yk5YucDtHryYN1vccbrQwtZ2d6yoUkDZyVNafG7paeJcT3jmVMpzZCF6hd",
  "key5": "3nttLMrB9YyV44BfqHKjKHVD4dHiVADbrupkQctdisYDKGNewJbeeeY1VyPbXz9cauFXt4CsXwzrNEJRWniuG6WV",
  "key6": "2nKgsHTHcr3n6XhiyxKy4MRTJ4UsNfPqzpa9VRvqBNVQSLdzuZEQ69QuniD4vGCmZ8M5G6NxpSKWs5NWXzuKZ8u3",
  "key7": "2hrkuVcowLLfnXPSMfN3BCj9sy4xojYoPp3Xra9LCC9bbQpgp3swHVsbdCZYmQBWPRx3SZwNX2SGPZspkaodq3J9",
  "key8": "46jq4RyzFt1Wwzxoiyxw61Ut5SQojrpPaoqcN2f8GHBTznWG3ENMvRf5LW8WcJFGFs3M3k89A2hXp6hJjuckM6mz",
  "key9": "UpEMgsiW5scS3NX27am628wboaCQgTsWaoAjiWKQKjnxoqy2dkGisnc8YdxpsWDFnWD8H1nQYdmiNVjGWXsVVJt",
  "key10": "wRRCufpuAk751XVXfAy3smuyWJLGGK7HydaB8MaYtptTiE9ZRDh4d6RCnfqLvcTNAWWUJAofEzf7jjbL86Zt1xs",
  "key11": "636hVXZENX7KMULSCrxLXdrQgaTzLCqjQwtBJi3Sdr6bNpw3UtJbxPWARmUwJ4XKJs5dqRHURzgfXGNSNpzGn8XS",
  "key12": "WAJGbKgRFPJ3PoaoSFR6EjN7z5NoLZVfLJCJRdf8eN2QJPydQFTpnC2gSka2nbzv8XfhHMw5ptmbVip4UXvtaD5",
  "key13": "ufzm5BXJD6PVBxeCbyqfuJkABn1YewvWskCaRfcKvGReritQGMWaxx9S2DvHeVf37myFvYDcqCjwmaLg49FLt1r",
  "key14": "52GgBWUeQhJRLDfchQUuJZphkvBZrDgtAm1Ewi8KGZjAen5bJVPLdR6qtwVimb12889igZnz6ELZWLgDDviCrgbn",
  "key15": "4cfWV4kjXB7BzA83vhusTRqcWoswqBHkTdz3WTkJqwZxwzP1JkCNnTjA2VWxY6REVZRiogyBe6FtDFkV9EUERAZn",
  "key16": "3uPAVd7QZRt5r86pPhrHkzPPsGNYeZ1mkcVzqu7yPNG8hDCUtSmGEfk1VkQZ1kvA6MixFoWQBUoavJmACrQyCTvW",
  "key17": "3UPryga6rdbPETUA3kUdyVd5xPhzEWdpJ6fhoAz5DeWqFkZa1MqYFUcNdQbovJ78pS2Pd2212vL9iDpnx8CiRs5z",
  "key18": "5TuiSR5PNKuUUAphzYHrRkwVbBk8mx2qAZfzQbzQ2FqLx92iMsfigLo5jHDC6cqWGheXRs8H4VV52p3yunZ1YCZV",
  "key19": "3ASbYUiKco1P7sqKKLVDDzYC1t1DCRRdz92tcoZR77ZiAoYZXRaMfabg41UKkJMSPSp6ebcYvNMK9PvaWkpABPb4",
  "key20": "2DaQqHjGdrKq9gMF2JPHTSanPXyWzARZHgnqsMuEpXGrvpTEpiuB4JGsmdzdVAQReKbKXbNptrBDvvhKeEFvY535",
  "key21": "53drH3jtBBWE8hrUrvws3sgiRtNF2aH5RD7BKCLyqQuE1RSuVTs3oSsSXXSNMFofcjufqwDZNz5xujwK7rjsDsj8",
  "key22": "5vMKSRe5KfnveV6DMrmcYyWgao3153iEam7KnBvxVp1Cc9uEPc4jfofV8APfoE12GGojCb7EHQKapJ9kehddCqWp",
  "key23": "3AeK2s7KpXkeMrUi5Kx5QgvPgCDtDN61Nz18yE82bGHGVvW2KJpdd5XKE8DhwgBDhEMFR7cSZ4UAdZXmgCHvirsX",
  "key24": "5h8GZdcP147QNETudPcE2ne9eWyvJMeTg9jL7X4tB2bcYuRakXZkB7tqwpqwfx63mSSs3xmvjCgEcpjV1LisxeNh",
  "key25": "kYJcWQgTnKhNztXE7gDeSPAmPPoLU6zgnhdEg36mfF2fLrKgFoayS4Xx8SZ7GY6YxomSrezWYRevFyFVv3mEAiN",
  "key26": "2nX4XwqdLoWRafMjpRjqoc2TTXunHre1jycWobXfckwSwE1fnZrayvdLwLFPb9sXoiiDRXuMDk5rycC9MMFKBQp3"
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
