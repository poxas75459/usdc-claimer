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
    "3krQVL9Y4dHX9rEmCj14uuKRZiQy79dmrZxGSPrCNw7FPUoEVn6h9Pocz71MeaeLeJ3XLCYv3y9Wj2kjqPxNrBM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j6ho6HrmZTyuazjEf3NqHT93cmTWuKY4UZbiZwf8dEh8bJNpBvs52v8mu1GkmzSWjRD7XrrZpqFXEVPBwGr4wYN",
  "key1": "9nHCayy1hekjWhKVnuzHgiMcadVv4Miz2ZSYMZL8fU7HxRaxECfHEXDrgdGyubMdu9d4v3J8UTUtjiiFw5sNZyz",
  "key2": "5ndmYNJ7MwWiwRXC6ePwypwKk79h6qk8YLH6bG4iydpiJpfHTpyNpk4MuReWqT7dZc555EbguzLJ63Co8vMLs2Ym",
  "key3": "4BMwaYU1bZ4eDfowi8J9VmJLn6vjdW21zzU6oYR6hkS1abRbZXb1ZBnYyJkgQpmd7Nvv5R18Y3xaSCyVzReCipvc",
  "key4": "3vwqep1pAAvyb6v8BS3iBCqQ38nunhKMWJRXFfGFBQZeTqAiRkciR7TtHumGTFTf7A66rsrFDpU7kUU2CdmNSqm5",
  "key5": "4tMuM779cbfxsuAMNkLC9mfWqyTXnAAofJE5M7Z8GUvTz6fXKm2WPzMaL3LEa9mshmXAAp5h2wkFvG2EY8ra1T3d",
  "key6": "65m24nVQz9QsUFmSbxX1ydi8QkfuD9S4i6x9QWR68ZWiDmm2DRC16b2tn3n74D4jvzb6C6zfeMmUfQGtrx7rHA5r",
  "key7": "5CLCTchU2nknCfQFuNxZWAJ3D5qBBe6TKBVR39QoLJqLw3xYBBe9hJY4KtB2GZeAWsz9ekfNGnpfhMT8NDYXjB48",
  "key8": "5YBEHt6SqdbFmyXTg2p7JkrfMe8Re4CC7XsZBzs37AyC6jCt8eaUhxUShqJAfhEoY3VJ4iiSZvtH6j6Dd1YuJtWU",
  "key9": "4XDtfrhukFz9jP2sFzrLUSbE2W95xPFSCaDAzvVrNanv2jHmTHoxgad96KQVxrn8cqiykJVbuG3ZH2aWnb2oMSZG",
  "key10": "4Uo5VdF1BFdkqZ8wwaVg7DYH2PonvEKWbn2UEdNM2uzxbPe17RDqDC3sa8bioKPtrLhTShW5mzA9V7vfcrCM3325",
  "key11": "5MtpRAmtorEWqsYiHdaduPbGUVZShhUiqq3wcRDi8g9pHxwjmQTnu9TKfxGuPpLDFQSzbfdxfTF7CTsWnXaoAXcU",
  "key12": "4ZJUukp5aMaqnMew9MB61Bp7cH4KHXME2NgB9YjmhHSzdjXhkqNnD6FLQK8C5brdQL3YjvFmisXEwXfqkQ8w59Lx",
  "key13": "3b7Ro6DFqQE9XxXmXD2k4mr2uEq8L7cJyb1Yrqk4TXrpVd1z1VXwyLX1FFXeuJwoa5t5ChyfrEHhyDsavbJSKKRx",
  "key14": "41CAc9DXWJnMmo2fMfJD6MGAZgtkdgfMppzsA7R9zFZcqRu1ievGheLvQtUZm76PDMQNU6UKc9CDLLPRoahPPGop",
  "key15": "4YJd8pq5E6NgyCrymeDQT3AGZvGUUMfwMKY3Yqb2SPo9ufPcyovAJQBBZuipNzbqKaicYWCqZ8XCgUfgxe49K6jg",
  "key16": "4ia53AvRTT6jCa2tWsg28DaTwcJMvXDECUHQfanjQVaBvreJvbAX4dzmQ7GuLYYzzdVz268MvYEdmP9kAhE4LagU",
  "key17": "NbzLVyaQvWbMYTVz2KKUtBnvyEvUjyLEVkHXpYCGWPg4w8gxLZX8D2d4MJUxqgQzj8wG7iF22gbdhSp4EKsfr3Y",
  "key18": "3p92ncEWcyMY3Hj6miTkDMaMJ1p5hjzgv5p5QaiJFuJA1aJEU1M7soGFVvsL92q694HABKWgomzY52qVuxLTyfkU",
  "key19": "3BsYEvokVPbL67EopkCeKbrWmCF9zg3bYTBPuf6uK7E9vhTNUDRg9Wc9EcME77nkV5F1JRZ7S4GCszaoBcaLdmoM",
  "key20": "5knqybqgf7rLcmzXAaGNPYPde8mjrtMZVoj3CKqFRpAuv6BLEMaU7jE1Q5BiPTmEn7TbbvwF39nC3VLRMss6BCFf",
  "key21": "ZTDhbhp9yT4EvvBKVHnpad72Hqp1WHMP5FkBuPqebkjNvFcVRDb4KjsUg4UdSjacbesnrCA8vst6g8Ggpv5oFB5",
  "key22": "2fybKjyAo9Kprs4X36gnbAcHVaCknRctSvmxoG3SeCjrbGWnP5W9qNtfGqQMiB17iefAX8RZEXHBPnxubK7NuZ1J",
  "key23": "2eT78T6As2SXkQbJsBXbAL4WDNkBaKe6PJbSWCRfTJGrJpsckQ9uMbdeqEHWbwhEzjT1etH6xyMRLVynzMhww83b",
  "key24": "TUDPHG58vamNkPpYFQHnY2EGj3KGMyp9MYYfiGBBrxSEr2U5VNb4cjrssHuukhVQce844R7nnfALkexBEvpv71e",
  "key25": "4p26qTUwhNpp7jQZQS3DGrjBP9C2VNdVAvZnrqio7Y5L8upTiF4Zq8QPF4ytWxjb7aXfPuCwvp79JVMsdx9kM8zx",
  "key26": "1Za39P615vAc8KnUyagb2HHZ6w8hR56RkSwWgoSyCAczmYDKTTeJJGkJ3PVfiGvwdzF3zKudgPXMeboHz8GFCD9",
  "key27": "3uXar13rCEQVqciHXevRh8Ycv5kwMBatp6F5qjmSq45txktrshjHZq44TEWYDhWeUoedUgWGSV9tXMAHRsSh7pvk",
  "key28": "4LyvTf3biDXRbaqm5h2du238m1DuxUtKZVGAX5m7uZ8ZPUiKUQ9JgGVFkx8zEeZXJh1afjZZN43opeAaAHMHFTik",
  "key29": "2bifCPTNRggVqzdGsf88NZsTwbQBa8RqRJG8rPN85M5PgJZAJWHCE4Pffis92Hg7DNNXcLMWTJmfqaQ3Xv4nLJLA",
  "key30": "34626gyTPEFfcYeHy9ogN3owXadDXx7xVyfqgLBDYqLCx7bBdiSWbZxYG7NCfjfnReiYHKWPLBKQdT8w5KqxZ8oS",
  "key31": "3XRbN3w834mmFzn71d7vz9mB2o2oMtph2ah51Z4ySsDFhMQuJE7vM6TNDo3LCaX171mEcjoHNEkU9D6xXB5Hidmd",
  "key32": "Nav8GE4yeNcD4h2pCw5meojPE1KDaoARrMeE64kn4raS2ikTv4t1XbScxRJxu1Sg4wYL5wLZBKhRaFcT7YHyTzd",
  "key33": "2mYZ53ECqR68KPdRiryTuhW8Q4MuTFdXgiUr24VK1QD8dTghGm2Vu65bo81nNAMVfRzCn5gPNtrf3QSZWFzZ5J7e",
  "key34": "5LcDEFrMDszmK5JgHvEPu1L5JRPZzQ5eYKQ9xBFoGGGUQYrYF4UWRfk4gVLmkCbbwYt19VA6HgYTnyLdLcFn3ckV",
  "key35": "Db9r98PZQUXam3M1ckVCfcvrxuf5cZHJsDgiHZhSupExuBmNgVkf1j9mMsPk3U46U5bvwppAJVAZ4TgFotVQf8f",
  "key36": "26FMfYxBH2nLatdHFzVPc3VvMewghPDSf8aNmTmdhy1HcdPEQEkED3YXBU5sQBQzzops647xrRQFnj59j3oZrehi",
  "key37": "3Cw2xaSDbXMxcK48jWfMhxpuvJEhwdVKRvpPmkXpubfd8RAbsyAEu6Efa6wrGPZVdrptPTCch5bpFWsD6CDyLYGS",
  "key38": "4FEn7mjy5NeNsDb2dHDFCGyrNSM9nFwonMHL6NVFyT4Y4mDPZsneZ5vmuT9WyXuk9r3xNH12oejyvrZwc4efqsqo"
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
