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
    "sF1EVJL7PMuwNAY7weNKSbLyfD31tjX2dFN5DgVw3Grnpy2m67QELSWEDJ2CYGneEQSS8LP5pYAZ6PHZfzzVAWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UEYAZiocswkMmVJLvpx1kqdVb8o1YatzZyizZ5fxEdp84VxiJhEA6N5oLLq3vdWP47H32dFksfaQoJQn4598JaJ",
  "key1": "GrTx5CadCWck4U1Q3HoP6N71opd9VvXGdZ1BWu673tMmaQoeoCwdSeTxfngbB2R9nhCNPKTLth27mJp4V6R3aun",
  "key2": "2rTGVcoMBE1Abwbtgo7yHyBYSVq8AwRQqoX79msyv76Wt4e27G71V5jB9wWjCjPjey8ioJ4VxXecsi92j7mMLA1d",
  "key3": "2Kxoii285MyrXzGSTQPHbLJUErdPrE7wnny3zYLyagoW7gEk7UE4GXU9XMfi4xh2Wad6Z1Uav24GBLToyjhRFJdE",
  "key4": "3JiE4QspEqpCjUenEAZtexR9rvaTEf4b39hJLRbz9qr831CkBhsM8BabM3a3k7i179DwomxBsHdwTmrzCDn4Lo3t",
  "key5": "LFHtAkVoVRLqdCLAJnjKzps8z1yRkB5YJusQd1xmyCw2nTQHkf7PQ5U3Hrn268S77VRdZc8cqu3U7BR5FEmX53m",
  "key6": "3bNGopLGmTTJ9oERVRGkgHy6sLPPMFZUsqQRQeqK9ceKfL3XHJkqJhvWAXLtuXMPJtAL1ZeF4MeYmTr2NvFL5Jfs",
  "key7": "FkpfvJczwFGG9wNWt78StLycqbMbSsSDKfCSny7XDAK3jNR3fb7x2pErQN9mbc9zGipH2sn4cTiptkLxbLYtSED",
  "key8": "2cqpY1r9Z9324tzfQs6UPVptU3G1y3LUwSUhng1FecVZe8pJ7SggLtdKqTrizmCounbKkM1DWPTxHMqWrouKeRRh",
  "key9": "5bHUfidnPi9YhLm8PEbSRvJFPFQWQ74M5p5QVM6Pdvnqrcdi8c2hxiYoeo6XM2pSu5px8WuUCLchNVZDVHurNiX9",
  "key10": "1YeHFXSWuwxTF6jctFCP11r1m8zx7aWkZkwjUYqDT9whY2QsXg3Scf2JPSctixG2N48HGdXUb6MF5V75yasCDL9",
  "key11": "9vfbtnkYb6sLETHyUykZ8Em3gcdT8P2h3jbB1EkBktdbGM3bJodGLkeEJChq2JMZz28C7mQoiipC3VWFsvFS84m",
  "key12": "3M8JP7CXBYaG7N21L9trAPjMtNxT8shP4JZQJ5MnesaZtbeCY9XzQ2QUqiDpAT29Jo7EtUr8gy3DzeXnL4DS9gVy",
  "key13": "a85XLixH2KUF71A5ne9MssmaNJSSf4E8kwk4UnTDQ6yMH3cGu6qK876hDR3TRpoSMTc5cGGf8dk64GQDpMYspFJ",
  "key14": "54dcNUx4Js5VBcn4UwF1HXUthJvDEsEVQAifRo9S6sL6JqfKex62Ccx8FRKFpSYDas6bnhD2dstL9m5VYKFdWHwd",
  "key15": "21FT9qnW5snUufxP4HBGjk9C7kFLM4apiWb6FnnNnJWThjA3Cc5D3ke4PkUDiX8NrFeN3AjHtfLip1YYSWZ1Ke8b",
  "key16": "26zFfKWupsKCTqkeDSLSwbGspzZNQb8rNud5TnhfHCVqxKSQpht8HMsrEaVyVfK53AhJWUccyuuqovYfnQgzmtDF",
  "key17": "5wWQT2sgZrGkPsbkwB7XWBezZMUYvZRj7kK2xnhjw2KKvnJQhi82gDmAatCt2mhGePuh2UA3S6xqFXQGTL867cU7",
  "key18": "4hUNibeZZYw2xqYewrStF3zJaJcoAuwUFPeZrEj9rVNSng46zR6jorfp5H6U54ouoY1tKNUZ5B2uNJz2THWTubpK",
  "key19": "4nXW4WaMLMNipL5GH8VsXqoybqacDbtc58AhWapPyTEnwfJKuerSL8R1pBtkcXmCnxe5T4yF2kJ5PgyEXh2n46fE",
  "key20": "u7n3fFbtUT55AN4kTkmArViNsZqjBXuQz6NCs3cUxL1U5XxQ8qVD394ZWsiiMopq2okkKk8ctdnYA2aiEJ8ECCw",
  "key21": "2anToMn48wFh9Eu6Hx2Pzzakx5Kx68AemqZjRAHgKHTGxV388pSrAVUJvmZEqKfR699i4jK9arNcERtqj7SrZwgu",
  "key22": "5a8xHoPcWH4FuwPnsXMaArx2kze3PtBXQfDF1a2EXBKzmR4WxZny9cmZNz4DqG9Ey4AQXjsWexoMSJoiQN9PmL7h",
  "key23": "4hjuhGiD6f6uoyqm4r9Wj1YEDuXBWZWXAupRT6wpMpgpRYQfT1gesCn9CX6p1HNp3dsRjYuPZi6LaJJoggPhULbs",
  "key24": "45CDjXppnPES1xz1cH29ZVZr7EoxHGT9RsqXFhSm48LEMpDfZsrkEEKeznyZ9oAmDxGcPpMiQ1TVNTQ12xFLrg9V",
  "key25": "1hj8SS6tGndbzYqeZn9BXfvxLbTwDYjzDcmaqjZbQN4mgmXkS4QBN6RiS2fuC4rRczV6ZAN6yzZkAjyxB6so2eH"
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
