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
    "2HeH5YQkBoeVynrAhzzYSk9o5mvpfEboQrDpV6wu72PDEFQQTtXHRQ8dMheFnrYv9oyne54T82ooz3L7UkN1p2tX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GuDhA7tBu4m3a2qvcACj2ytaYofMLitrr8JqQ1CCWSMwEV36d9jyFUd8GQQUEn8a9UosysF1zBxuAgUmVJETiEE",
  "key1": "3oAniELFSfnZAfwkXdoHFpvJLXqneVdyQsPAE5LPnVDTqZt2Y1Uxqa1uqjoj3eT1kx9sSdkzNo3hCsjW8nv6yVPF",
  "key2": "2Yg2nj3kKWdRnFgtkwcDWWPTs89wmLVW2U5FnC7gqzAkE61vVUXgaYewJkkAJXYNrUSfLKed92kpRS8pVeQzvyg8",
  "key3": "5GjDe79idA1k6Uh3y4BruFHVqJwP6W1C3comrE7T1T37dwRcibm3vHxXg6NuNw4BHb8xNTPBDGFWB4bBAePozvjx",
  "key4": "3RGJVudjjq3hABzbb7B6J4dkbBfu47HpCFfhcbNDvZzHBB2poynhXMpZv9v8R2yDeJGzuh6r5GyGvouicCpPdyug",
  "key5": "3aXnbmxDtPsfFqMdwMeKZYagwBao9tfod4cdDPM3yfCmFc5jPQkQ9FQ3b9ZSkz677ps61aGJcDkseV82HqDawirJ",
  "key6": "65MM5d2bgoCQ1Uahhn9Ld42ob3A3rzYLU2ze3uTuLgXUafjqnhVkTeb51eMVETGPqXMW1TwQY2TYJ7vCnm7kyMMz",
  "key7": "65sHtYgUfPsFKDsVs3a6Q32CSmNN42Tdj4D68nELx8VD66BiGgfZLwT5Y6vJ2NSDtjrjMbDCko8WNGHKdrgj53jE",
  "key8": "5Yz3QvTSu9NfANNadWw2Dd7wUPrbnQiWeHias7JbJEL4VeEFCA7rVs8vRPZDXSYKEgu35qwJfbv61f795TieqAMo",
  "key9": "41m5s7CLhQfEEPZDuU5NBrXH7u9KXsbWSyh7qJA8yfsPmWvq3DinqiQL1VYDHjeggrSmCDpgCCS6dZPimhpXuUPz",
  "key10": "2UQ1oEkUifa8E1k3sVFUuDsSEFLhC92c4AqiFZGNsukRMLgyT5BzYCgjhcsqXZFW7e3Q6myFPdbuZ3KzRyZin8mU",
  "key11": "2izKeXSGRqRM8Q1CtBJwFd9NYZgERWoUiQWAFujeEwY3h5mvVXhd9t8SUvk7w2S7GEw58YCdwL3FigaiTcdHDVA5",
  "key12": "66TkedA2CcLNi8zjoFz8KPFt3Prq3vHYxDjkiiE7rxNwgBvwEuKXDWeeqqZbbHjVZj4BcdReJd4nUfhaDE3PpAEQ",
  "key13": "5fifRXcyhb5r8GTjfM7UQDza22YJRNLv2Ys8u36Ao1hCT5Q5YSNww5iS9hpVtUtoF1i6zPpnacyZXLwn9RpyaW8k",
  "key14": "3wEJe4hjcWHLVnrmjrUX1pbCbLJH2YP95JkD8qs45urdY71DitbHve3D8fUnNW9S1DhUY3B9rFapPBErKBpcJzHD",
  "key15": "HjtvDAD6PB9ZbQKjRGSotkPyXWcKLa9EuY2Ez2J1762Jk8nCiagChywnBUWVyQFFRFvps2jKUfMTCkuG37NViAL",
  "key16": "34mpdMAwBrzifypWRZhU1ixWzVFa4WT1pE289GRpkBvgaiTPdjU5cBYtkUW9EJxFPZ6gCaxta2WsAL1xGr7Qhkxi",
  "key17": "2nyjMpjGeW2CiM8B59pesHgsWbxNHqCAots663vmhvL7KwUKLZYfk2ETyKHgKmHve9BykgMcXcXRH4KRJZoRtf3V",
  "key18": "QB3kU1iURLZ6tbTf95fWZRfEW3nAeUD3SK8FyifYf2ySBHx1RBA9y9KHEtP8msEwthiLrdNNQFDMiPmd8NLHQT5",
  "key19": "Zu2TFchd2ECRDzNgVbWWNQTJeMNxVtfVwVoe2NUtY6i5nxdRgKMCTb3uHbcoYkWxRSyQExTDADqcDKg21k6Ecb6",
  "key20": "hyyfitoC92LFeDuSiUYFrX1fVQFWsBKDttH7wwUPreqX9i7335nU5VLtieTY6rsFuhh56RgvnQaYhHdx5MxuA8h",
  "key21": "57GaHmaTkc4fRYZfn63HwCRUdEfvgfq9ZjruMXFh4655XEqs83K1KphjtLjurnMzVA5Qyo6SpNyvoM7VzgmYArVB",
  "key22": "4rK4k73tJGceQ53EPEGWx2H2yoMBAmirk6ryN2NApSyTc3J3A2gkdLDDeBN8Fh21sTPmEoRCx7rsAAKmLfKQtX8Y",
  "key23": "2QfWQJ3Tr3fNoDnbCL9vZwkKnRwZjSF11ZXym7ezNSZ1HB4wJhqJF6DUxgN1brZ4CMHq2RPFAhbEm8ct9c4z5qNG",
  "key24": "3nXwXrTyjpZBm8FkLskFhnL9u6K71KnkwZZNnYb3BLxVUJJjfjMey5LByMWMS9mavqPt8hJKEuiuMFZNAaPDQEDY",
  "key25": "Qw2jQWQT8HkmgaHwHxHUxTDkY5DJ8UNpEAq2BXyVqLB8X5vbdxPFDrdJpEVpqPEYbyZAXp3dRQpNntKvgaEgkWD",
  "key26": "3Ktsq1EhLzFWreGfxWQWePQ4RcBzDc41gv8aLdXJ6YNJhaUJpFtuAaoedBDT7VUdxYoTaTK6NR3uv5Myssk5bvoJ",
  "key27": "3QHJyZ7sDJok1vV2nQowsgmm3769ve3gA9Ttg8hS84JWLqWUu9YF9NDMx3nsBKdjfumngsXrFyA7LdbkzVx5zqSt",
  "key28": "9PqJkMtk5BFuETs8q5rrnGCiELNkhH3opojm6vmEFvEwRHQruz8cSGgXxTMSwARTRT1T42PMcbnJt4QCjwXkmEt",
  "key29": "2YD6xRrJX9jEqht67MFPC1DUQUJgwS3d63d5F6ptW43veZa9Bi8HecmWSEbF8RGRT6KyPoVmvXwM3fXttUSrmx59"
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
