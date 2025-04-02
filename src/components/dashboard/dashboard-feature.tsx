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
    "29gWThUs1y2bCgzpdTPgMfgTyQ7N5zAe6YartrYF69Rw5L7RgKCmhT3Dx8deuJ7xhE3idKQFZ3PiAGwHgRYtVRMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkenjJKFvor2wYgSonXZLmsSnxtWp3LDpdVMNu8sYXKJrVYijbwGTmet8EyYZsy5csmmgQKmAQ3DVhhH67xWpnU",
  "key1": "3nRZdxQRALQ28rxRSEwUd6R1Wr2ordMQ8yssUSNdYwTG8Lnzd6HYhhEF4ndWyjXnrufUyAMDdgpUQFyrkzrqr8Ry",
  "key2": "3X3k6YwS2k6fuALFXdA93R7UcvXShXk5Q8CwCzUBSDWcVqPHAUWstYLQk1xmdgQACV2S34YUwt6y2F3VZJWp4qu",
  "key3": "2J9VUTdvaKPoJZVjMtJ6nbbpGLhduhDq2kUR42UNNBYJaT98dEcpEEUbwCL5WBbcvQTseopfrmvWhgfaNRZW9UDt",
  "key4": "548wujvdWHytytuSyozgF1bfaEqWiyt92BzQorba9Eq5QkoBdvn55eM3DTrV6uJEncQZZf3qmtxVrgjx77obNVzk",
  "key5": "5XBio5MxKT98oGYSHwUgfupaswwkYUJgnNSgsMVYVGCtGeJjbkvbCY2Y1Zdb9y3QjRqGC2MjChRH9YBbDfsWfp8v",
  "key6": "359GSBwqeFEvNNSYbN68MQZVbh5gDrA5EsA7GfzgUZ4ydPZw8nYPfnc3teBk7svQ3EcEpvXvoXHp6Q2RPfFhE5Hz",
  "key7": "5SURfowj9Dwr1cusnKWnvTugEFCMxFZy236WvCrej1xVSj3MTyrmb8t8v4Q2DeBEoAHPyL6DX6At7NgpsB1XqVFL",
  "key8": "5nWSiso7A6xsZUKgS2cHeDvRke23VmB9fNwkMG75qE7gLgV9Hvr9GRD4LX21Mun42veqTcHLzQWvqojpwQjLDhKk",
  "key9": "3a9nYs82cZakbRwgsZdneiQuiRfPpe8LGWE9eotNyvWH2ZDEkdbdkxxqJWmQVHywQr1chXAbYU5onGiwoCNkJvTT",
  "key10": "21FCM5jR3zXVYe9NNgkRZ9pfizZcUK5nR3cHsVFappfvALdV1tjpz4io9rwSMiasFZao8m1XPKZy5oGhyrYaoDoR",
  "key11": "3Vd2BGXBsoCederoxcYw5UcrmMwAtDjN3HR2VThcj7wAFvxsmS6yRk878awMCAbvRnPCGcpgUVEZp1rL3ZpfB1nn",
  "key12": "3i5GLjRN1VkBEofHPteHb3nPkPRpuT6MaHu4ZtCGsUsYWfFTjawdorjG2tRkLChUycx6NWE1AfxGsxgG2rRLSyfj",
  "key13": "44VMab1aErBq8QENJW1T8dr8w16kwxPPCDAsJ8NdBx8LznfJ9GEkydkkcFje5qJoH9S71kj6NFNmmVJv8U3zn7N3",
  "key14": "8Si21icuWDWDqzDVea98AWXBtchm3FKbFWfWM8XeCxG4rZaQoigNLoW9HABC9fveKBLEAoKDabMgTTkrr4mTCkf",
  "key15": "3JMybeJJjfZEfDfBbm39C1Grt4SBL8dDGtD6aD2FX4YT7YbQz1FQ6P7XpEqBT8Z8aQtCPuRZYfbuDdXaKq9EUuuf",
  "key16": "2DbxZ2e2xaGamJNz7Dapy2NATvVVBu23ucX5cbAk5KBs2rAfTVRnnNdiUifgr7dpD39sw4kAwEF3iv8286Kjn1Nq",
  "key17": "5m441PkwEoNBQK43Ht4a1r8Ho5edqSL4wjaHHdCc4tCRViRHS6vDq9cp7tzam4dxAaNG1opi5NPVzfm8VJPPyZJu",
  "key18": "XMq9toyqRhyq1oJrMdh4P3rkKGLZyzjAK6nuuutZdRUT51Kc747Dnd8CAeeMik4aeBcfuBjTZ4L1radtBjv7Kw3",
  "key19": "aBfygCvj34XGMaUkTiWHhdNJRzxGpsYSDjVw5xehM2cXoT3BPU9y54n7u7cvXLrM8mpwnaJ2kaG7UFo1WqhqF9g",
  "key20": "5rR5S3dATCiYTNHUCZApvfXEhFUTybgSAdxKdh8MJC5A1NFQBqRivLpqk6QdpMvDPZaTUgqv3z1ammb8XwSMrYHA",
  "key21": "2MgbZHmpMFyAgea2TQFW1ayfFkbJmAKE2Dk1Jbu3qz2Dch9Su6eBSLcMShPLT2y5mFZycLbHvvm9ubBq2xJCMcwQ",
  "key22": "3v1SrPNZCAky2Ne4VFXqCKzgzmtBxWXeTBTUMYacCMpMAUGJJkXYBCq3jotgnmsgiwdcNAMHSm4a9QjmNoXTTCLA",
  "key23": "MtBrfhoA5PVFQoCWqbQCKQWtZ7mHFo9Hf7A6shTReu8DsgXtJbGhzpr1SEiX1g6v7xQkQTctJXdzSPnrBfCiSRA",
  "key24": "4MpPSu2TmfJ3QN5XmZStdLcVrN4Hncf2LSFZ2nyPFfCgB9HhqdybZxyinC9J3GZVpNiSC9sKK96xxwDhp3dw8Vp6"
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
