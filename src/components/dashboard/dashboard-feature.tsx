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
    "3DjziwQz5Szj9HA2VnDEHbLhkQXheHLQBhjmGjAvmBgxYNbFZGPC6H1VMfM9bcwmGJ2tn3jv9KFAS3tg8fmVxzf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n9egrKf7VkUr5rrCNwTE8GAmiWZuetig8FyNo1P2pcj2SEvqkY72zeYaDtfCeEsiQg3A4GbXNk9Md2WVmf2j8i2",
  "key1": "5fM4VM7SJ6PYsmQNNxHqL8Te3LzSfJjUbSVCuQix4w2xLtx5q8mNbLhuL1ea97RPzc2yJP53JFthx7Eb9acVpx76",
  "key2": "2W9UcYj64S1iedtVzdsRWuJNNVKzgD2zdy236XRzFjn2shKsSXNr5YoWRym2rH1qN2jtaHWk8bDQpfhw24uyjHop",
  "key3": "4YYqnZurV3VPCVy4Qp5aSxqqQNUZsTftpSeC8P131BsbUhHXZBanotaK9czF3EeSR1V5rcowRDyKCd38T4k9oxJy",
  "key4": "2h3tbpB1hr2pJmzMpan4sJR1Xh6ag1WSgGBWtnzJAP7ZdKshVKcNBRaSHTNmnPzizGqfSE8tdhdpnwo5npajeLrg",
  "key5": "5u1jRFGxc8KJA36MizBwS7wr6oQcCUthR1umVsz8EV5GrenAWwhwvia6o6sszMq1Yj8QtZucR3aRkjLKyCwoxVvD",
  "key6": "5tu58qBPosq9Cq6D2G2VLrSTdVCm24mZQANXLkJ8mzR5546DHxyTBixue2mPziE2toUzJePT5xAGCHudYqorwut9",
  "key7": "5J5JgJA9J3HvEN9UCoZczb35wEQuhXExbWwPe3EVoTNV8s1K2nupWLWJ5oAvuRwXesAuwVPy6pybAVKqxJpffrQ8",
  "key8": "5DoADooHw8a2YGNYVZX7sYs5Bid2YWwgMimjxiMXFDUmWbJCZD24KguHPeBZsAN7CKU4efL1rz2s5EenQkXerhnD",
  "key9": "yUZCGNM9EfjoS7y1RNLq97uyd99ppDBkqVxdBe8YWLCot97a25JjowKWU1sBMeDtnUNsdvtvMVP8BQx2x3sg5hq",
  "key10": "4c3XCswB32f5qLfVZfXdNkKJKYG6VtqGNYm1aSfgmNpGnrSH8SQ4wkYURyEbiAr9tmPGYgBUWcX2QK517bG1F18S",
  "key11": "43pgGpj71M5Juuz1LQ3XpT4EtdNEvDT1MqxjaKBvwrkJ1ccc3RWkGReL4h8yGMH8dm2xfA16At5c4pt9JQtwRguH",
  "key12": "4FzmBoS5PnUrPLpGHjiky86cj3EmaetSMtFPJPf8HeUEU415mkmtSGWv7wwnLtNS67CewRtaJw5TC4ULaVox4AjM",
  "key13": "5T5B17EkXDghVppAeR5MkZ1YoaBJr4u1z6Exe1iUxdcDEsDC1Be24yfjUjC6F5GRH62Xu7X324y8o9vZaYBvS326",
  "key14": "26tQdBcfETyUypb2r5JhW73b2k4CgsR9Pef7U18SSWAegYNd4QGCBVZbZxNbCGMdyoSfFRaVHrSfDHZsGEk7PQn3",
  "key15": "boxKWCVevm3Jmhz9bC4K9xRufiBfLVBTrgoKgzCxjPBmTMaA6HRHPYvQrUuhiWVUrGP29WC1KvRXfPfh659kNPh",
  "key16": "NGV8x4CL6Pdt91vhXZ7P8ggRFqknafaAsvEBMAtRErZc8mo1hsRdgR8C9p9Q168t3EMFWUneNFoEoG39vY2RcaR",
  "key17": "kgqWfBFfZJadRyzaMbcr5VzvnZhxH8otkzaq3n7jk9TBXWPQu1FpXRxCnh3sU4YAJEyK36aDk61EY2rxieFmsiR",
  "key18": "4Loy7mnC64MdYAqD6r5Rp98nxwRqkTejPWKLsFmiGW3Y737e9ged8KnGdCV2nv2h27dbi7ythBL3XwqKc7pQcEgT",
  "key19": "TN2BrTWV7xQtettVgRsLAhbJtjYHjpf1NcMbVVQTaoeddk7SXL7iTuAMfCBRBcd3RHUpN3QEFvLgWRBXoL312Du",
  "key20": "2vRqdw8m7PKvqEDhrzWxMQE9w4iNY2tME5TjujQnw2tAJ1Q3apPLxrDGtWvBVzLr13ms4fTLxoaDPK6QmAschghP",
  "key21": "4tB2H3TkMwVGZD3ncyhsFzjHGR619BGZHbYCSWP7uPzFmVamJDPfj36K3JKgVmzmh2Bc9z6bSTS5YELmzwyR6AWF",
  "key22": "2wD3Ra2YZLHGwBr1qejeA2jpzUD7JX3fsFiMc1qZHJW7dFbqJsKx5WW2Th8oQgQTzmNM9uGuXbCGDahhXM5g9QXc",
  "key23": "PzzHSAXqYeSrj6VMSC131VXWkGMnuyDDZLAsKGpjhy4aDvMypVDzzQqbmhaddMd2iLLhFKMVJmkz8fNH8fDPBwt",
  "key24": "vERR5HoCpvzrrDZUTJo1dz7FCT4afgvjodmUfDkDbE6xw9a773WQMaHh83VSjsVXzCHhqFXyBr4iS5yvCHQ4FqL",
  "key25": "3gRANcPd1D5yyxRKZ1bAremW3doAQYhwMBjVUjHKoJY4uT9euwsCL84BpZmgpAQjeM6sG8qz2Fep9dTTmfWjAJNE",
  "key26": "4UJSrMyDTwbkpW4UP17g3QrZn2b8W4Dh9pAa8gsJqKPh5W7RWB2oLjBDViCbzoCzbankTtgzaafdiYqUEeFev2o3",
  "key27": "LmExDQLL2KScWKNZFUQoivSEofYngDga5c4kajRUckdWv576Pwmh3g3kexNcWK3PRmKr68TYuChrtXQxJd2E5sQ",
  "key28": "4bffYyTvBeJ8QdncP3afN2NBKNs4VA4QggkgzLS3eFGDJ47xJGYxJpHngbc9ogiFPQkMPVxw5ihfVzEUymHHiLTr",
  "key29": "5Ad4n24E9P25gyFLx7JBcmPn3UWfwptqfcLWGzgktrW278x6veKtriWT6qLQgUSXKczeFbgoiMN9BFd1VU97ZLwn",
  "key30": "2AXpC8Z9pm1qByRnQdiGGA8JW9WXQq6K5y2NqrdY3oo7zuJCWZuSFYvR5h4Gsg1hqGrwdamAcjEXfzL8ZHYDeGAg",
  "key31": "3LsG3q3754KxM4Ai619vy9JVVJp65kmSc628Kptd3UcPDUDRfKuRNzpufb59gWd5cZ9Af8TPPtpBiATwghuE1VxE",
  "key32": "48uAVMhG9qBpVhRuhmytM3PEWn8dnwr17vDTCHydGwgoBebyKt4SeGYCBFHFM39Jj3cwgKdQMQwHTASgiEcA2SVe",
  "key33": "yKU8Pg3ZtuuSsyze59qCkPxTo49E5FRnPY1W2FKhqCe3LQaNgCm64nK59svBUvzjAq5ttaqVTHjyhEtTAk6iSG5"
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
