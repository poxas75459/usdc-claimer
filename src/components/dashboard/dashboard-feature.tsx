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
    "rCaF4uCiYJiyzC1rbw4Co1ha46EHAapSjb6tkk1qtFkn7nYCj7utu7VcwX9Gk6RPAFvSRoVtnCt7dv1wKaDNf1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UaJ3kp6AfHwLrhhFGEuJpB3vGTQf39pb5c3YNBfZ6GrkZSkCJogy5qYCbYytPogS9LSVn2XehoCpwB17HR8mbkF",
  "key1": "29hupx2kHcqP3n4Pdty73Aq7xPorjB9iX6MT1hr1htsWgtZSDWXiqnDggbkXz9RkstNfj8RrpLnsKfM4khEpxhfx",
  "key2": "4hu5EQe5QncmTQ6MS1isiy8LJYPf9XYTabaiFHHcwZuLXJbNmbau2PeSoaN7gva3gQoxs9BJdzhanLAYCbwhGSMH",
  "key3": "4D8CfVBaY3u8TXzBoyaXTRu4cURKjYSrK8ke1TrRgrLifdMQ4b6iKDhAZVCs8wCeKT6c7jSdWN8qBximzTj9s2Vc",
  "key4": "54NwQJ4jwBf848eLtpjrzRZeEY5MgGcbDEhmPtkhyYZd8bNE7cfZzp1CoipXiMXRfiEsgzy2URCJCj6d2cjwedk3",
  "key5": "2jF99Z3LGqsvqAZrQehxtMPufWMkC3dG9xwmEysZAmkSkAavtYyHTC3NKemKkkqUobnnCQMpat7U2uhDUzZYMrJ1",
  "key6": "4UNUy59TSeibc83tFr4BibzAdoDhnRLAogXt2ipAnqKz95uZ6oTo4CWyv8pm9jh4by37Tv9kxswtsdX5f4dyvmE8",
  "key7": "5uTXBuYJKofE6J1TNZxEb8MjPRwBCnJFVqUUFYBoKVzCxHba2Suhv3EGraFueAzeep8dLJtgnsW6TYzFGLBXR9xj",
  "key8": "NPmt6rZ2Uxnb13Eqx271Yvbx4bDcKuyJfHhkYoNACqtoyxREmHfxBxeqDcKBP72N2ymRrtsbEhUBnxg8Qpqwy2v",
  "key9": "45MWCaKmeLE61ScVnAPaMF7Vqeme59X2cHWGQaBeNgugr2wJTuMvC9R7fUDyDBqiCwmtrc7L6Q9bxZxSLTZk6Mr1",
  "key10": "67FSn4a9i3rDoYxqinrkGoM3XYKmdU29NXGDKVv3vvuNjwmc2LhYfqiZuRavAYiqdy6V9rp8Q2mHU2TPNcXaoE7K",
  "key11": "ADsf3p3YanCpe5MQ3jsStxKzoriFp3ZxCDczZeXTwuSMZn6WzUa8FPkMBGgSFyaYeeqYm3kiEeYFUYpnnSdZUuv",
  "key12": "3TSergFCN9thpozTYUanjjHzbvxpsbQC8He6rmUbosX9siqPmehmW5sskJv9CSffvscYSpQ2B5uvzVjc3dmrGiM5",
  "key13": "2fx66rS2KtHZ1U3zdMERi4A8CA2hkwfnjU6VUdueidqpR5vp5WY49eSj7GBPMoXQprZRaeRfQLXSwb5zWMT1uATq",
  "key14": "3gTuf7kJmbtTi6ZamkDzbbw9h39QsTutELDJsjRZ5kWWdAJ6VW76hQgpV5UeMpdpvECu24jqeyKhKXPZNzHi6f2K",
  "key15": "48fRafTmLpjrnfFdx3n4Gwv14HUYwJ1wQr56MM6LsXzLdGBwrWiUujWLdbCRzEUK44Pu8HDU4wBDdiHQDPRXh9Nv",
  "key16": "WoCXbnNS5bTpD3ZxC2Dc1GTL5ayDgVx48QtX2MYqTBWPnTfVjFExtATJXAzFDLVUjzfX9LbtKH1xHwZ1rNiMEJp",
  "key17": "3NP649Uwti3F8mavrusGf1o4exosTDnJszcZ6ci4uRedXyG11Y9b25tyzcfKue3n15Kv8mptcFD8FhPJrBvPEJca",
  "key18": "5SiTL7Zd8J4g4WvD9JYAn6wBVy9sNPfaDEymEgzZcLH3gofmiPV3mKoqGDi6aPiyu4qn7ZYfi1SnDsGngaJr7ZKU",
  "key19": "3K8xnLXNDb8CWr1gVrneZQjKX2YbVxDdkGQJNu8ygHEYo4TQirXB9SgxLDXdkdAGfAA86KpPePAA4ECheoTJEtTF",
  "key20": "5coVeDPxVZd5sGj9EuYrHiTJ9GrZVMNshisv1Wpy5oE9yeEoQaDw1D8dRwUDvFeyEwvJ9Paxx4cRBwVaVWMREiQk",
  "key21": "4f1CdKPHPPFKrPnPdKkhmjhZWGBVpnETBbWPwAXbDqRc3QTS2wLfRNMkXbDbAFiWgQR3JTePFqs236JwuDgdNgJo",
  "key22": "4P9kvanANRb9WNSFCnCKXMhDqZCmvWdBaJPztRMA3mcdpd7AV4djdjWi7Kf119HLTf8gdD9ypWKg1sd8xiEmac3F",
  "key23": "2uQXxYSiDgqDZbEZc3Y2DKhDdmX1SFPNZgvvTnDimGRW9PGJCdUvC1Bw5KJ7f5Q3s3hJHtkoqRH2ScbE5Ai4dBPT",
  "key24": "55EwcGrYaPmvMBmDHMtMZ7pLkkZouFMMt4A2dJf1mZJhQjM7ap6cCEqLVruZVKVeGKCwwL93gmV7FuQgGEk7AerP",
  "key25": "WEcfkhyfMQeRFzY3ZZNhDLtz4BCg3SEnPHXpSJVntfXGDyLSTZeUBuHL8qviKx3hc2G3VnAzzc4JwzUV5ZxtLbw",
  "key26": "5BmhyiFuUxpjbwn6eL9RMsjKpCNo6MxbfoDX2z9ZrGq2REMYPdV45r6YyT694jocCZ7jGjJThs4uPALXQbqqreGx",
  "key27": "4E7U8N8mHxHftpgQt1NwVdRD2PBHRHBWnLmCmmvpovfBF5kB4L7G9DALVuBrGbEa4GKVZj8y3QEpUMsi114Ak56S",
  "key28": "66BJbt7UueZr4kLhUuaN642quRJDnhz6P8V5dwazmTM6pU5AzT5XSN6EWHRXBBgct5p6XnTonNZzvbQBPG9DqhLp"
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
