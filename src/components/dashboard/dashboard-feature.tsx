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
    "4WfyTNE7rPadD8SoWdYe9nSUmQzNYmHRRvZVtsFwPxCyQaE23xaGtkjgZEeLbEb2X1TUYRK2LREwLUUcpCpFHrwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3878oy8FrW5GyBYyiyRGFi6TM2qFocGh92gN9HVvSBLW4AMEhsvaxrgnvv3xgHZRif3jhGB6gnhqXJpRpoxZJGuc",
  "key1": "3nc2nWgDFjAoj2dhsbH4d1D5XrwckdbKoobMbrTnBrEspoZBygmshfVCvXahQXbnqd3H8JTZL6XgkWw1HRpncAhk",
  "key2": "5LhmU2qboLcxhPXWvWeqSFXAAQNy7Z3NStv5jNWGhG9dxSoa8VswsNVSGAKGwrpnExkyQwwJcbWNARY91cmcT6LN",
  "key3": "5ibv8ny5kM2wct1GdDstJKm8YmmmyYS1EjEJ8d8Vns2mJdotLpFzwqAJDK3gWvgvqhyydRPSNCZRcHSwuKUXXkgS",
  "key4": "3puGmgu87FN1fK7nixx2nanPeYaGJr69ST7HabggA4Zyr5rNhUsT58N3CW2b97zxvbeYyfWHuKVUfk58Csymtv6E",
  "key5": "5gLWA7P8HaJbAPQsQ7V3C9PUkk9SkxRgTDtSUSTZ3wymG4LVBwBy9GHP1Rp7CJag5SzUe3R9cc4hdsj8Z4RwZ4pN",
  "key6": "3Ufsi4vNqNpFPAHxxaKk8gvABZ3ayc4dV6bKQEpKSoKhFwpBuMXKce8ApSDxYhf7gdbLZmn6u8KS6WBne9knjiQv",
  "key7": "XtNSuuK6KmQbQqMAL8VvVDrZpS5gHn8Rfw7HzM6whzT5uv6inGrVw7mV4AHcfDB4aKZeGYMsaQs8XXKmqPeewsY",
  "key8": "4YGsmTTHwGtMvwRQryBB82uEFRcs5siUuSp5HXHzxYZDg8cAtfa8YsSnBYkeTDW32cVCNawtYnfbRKfMDjo5RoYn",
  "key9": "2Bx2g1JmwHp1HPBYgjCGTELtbQYDyPwSBPeHJaeZeKbMwGdM2QRvsiVzNSLQQk9Zvfmv93WD9ZwHYPkE4DtDAHFp",
  "key10": "4wduqVAcBDRpG8KMZWzN96Bn92AKZMsaQkhqsGwVtRxhWGWWpRuLHXkjndnhZFKSq5PQM1W3R5gwaEDx7EWub2pT",
  "key11": "3ENDQVK3LoLtUxmTCzxXMKYgh9rBvwartzq8XfPMqkNNmRcRRR2nfdhVgEjBpSB2mBAXoj3zvsRSNyvZGgJUr5Ao",
  "key12": "5RbW5Wy6ytCznaQSxPPJMJKaAWV9Hd2ZSdCz7XoJyD5uag9vcei7tJgcBtrTkSi2NADYgH5BzEehLJkpJ9QcjfAG",
  "key13": "4ettopxBN4Ty7EHD6rMzuUBtcP1yrPbUPzL2yDq21dNMWkVX1GBgZqdQ1yrWnmmJ4vdaufeHobkzxUdRR8Jt9uyy",
  "key14": "523zoUg71TGiMHduCcyrKeTH8Yokdy18Mify8wqYXunptQRGhsJ9PLbDA1XWc29GxFQ4gK6rA9PATGnYttmmoisJ",
  "key15": "b7CrfmxK8qpMZDHhHKaUoUPp64Ych4yZ8E1nqvngyZYdXWNZBqcifDPJPZT7sDDXWjNykbLEZaeepejsxyuygB6",
  "key16": "3A2Bf5nr8qmZUJFmq9TVKj6u6kH32xPE5LHwtXimCsTaR38LeHDETjCmWX4EhiCtZ2dszmm43J4K9ZPUFQEbznH4",
  "key17": "4m2ALJog3ocSQyQH6hR8fJ8VkkgqbbxKPMKpUVzWjAVPwCov4gYsWNAAqWZVgVEkwJ2C4su5qEjRPXYTAQHCwvhi",
  "key18": "3SQbQGwFizdRvB4Zj5BA2EBigJFRXEp1q6Fh5oxPui1ESDnGStiNeHpELFL66gzvJMjNfrT4r7G5uju6kCDPKjqJ",
  "key19": "23GpWJ5ZYqEtxppZ6EkkyN3eUD6TymicxUjg5sLfQAYuG4qoi5L5DsWM3381XuSxCtrEUksYVSeuhmirNtb1sXxm",
  "key20": "3QT5M85aUsLzhFmeZVHajtJek8SsNS6imT7FpGXFcQQm7rsYTQf4FyeQTDX6dYsXuGJzAEpHEF4brFZqELZKbse9",
  "key21": "5kCaRJbD5VWaXLBEHE2jNLtrxtDB7dxDg775hjPfv2vuQKzsu1gc6NBQHqzX6kKfUvc8bFFTbMyF8WUKmNhmWxtU",
  "key22": "4kFFuwVXPeHYmAM1XJBYWtKeL4kPNpeQfeBkWcv79NspoF5jK9zzVVjZsSL5tstfEzznfwWTHbCcM8b9jEs4GNQR",
  "key23": "61cVXWgM3B33xseX1ThwXKNdJXSRLXoMpjedexmErec5aC5BRQbyhMP14pmsn4HmsSHeNTY5mghjsDGZu9m9o4zj",
  "key24": "JXcQkXP4HdAK7BWtPiVPx5Pj1bFRJr3QqUdBoKJttwmd45ECybAt8m8rXEFuTa2HpuJozzNAFPiymDaCDRVVXHD",
  "key25": "3eCQuaAaVacPGURYJRZEZRg3V669nbEdDwvLFx1TLDprwBo9okxbZoTMS9tvjhdwsTYnqmzLveazdcHzhyb59vWg",
  "key26": "2rLHESGNcWQwxN9N27TS5D928bonjxMGizEBfEHMCHvKQhjDJkAi4LEZWrc5fQPJMkHWAaCSritcxcuFBsoXttuo",
  "key27": "2vX2HUpYssPdanxkx26Rj8J6XCb9X3S9t8vKK9svWKn3MuDavABdALiiMGx864hsEsmZTDiTCcVU5KdhVs75gfqM",
  "key28": "5rnsttVbiXYi1jXbinzNxJzvsu9nVUc3TypoL813HYZV5QW75EnAK19Ab87cgN8WMpcbebYtGNrFJhecKfwp1bEB",
  "key29": "4NspCdN7WH71EMDWhw6acoz1YJNzsHQyPUG3quiXqQ1sZvWDcRdQkFY9jMsDJkNkNHUXjWpia48v3s1kGfyh7Loh"
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
