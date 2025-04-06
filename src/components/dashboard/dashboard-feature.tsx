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
    "5kNsKewDPcuNGcA4E8s81qBiNaCAN9XZwFp7KHGYoGHp99tJS6t4Ds7BhymWdiYTbyFennHuYJpQkJv74xA1aByQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHhQbxz2feKJ5t3kprnnw4QGkny4sLsJ65fLTPj1WQ7EhKfewFmpi8wo9tMQAktU5Pn4ZBFbcKkiiMAk67ao4PT",
  "key1": "3LjzEeFcruUxkHCmXu1idptFDSv7m4nadeFxtvZc7mteejEWp2RTaAYnG4CBpUfXk8HTX5GP46bZaWhmMDn3HYW6",
  "key2": "3xim5FAz9K4CzAb5bd7ryVk6aDZweZmevXchR27j8up3yZ1P6AdieZkze6f8RYhGsRbDVXkXE5Qp6NKJrzGRMuKT",
  "key3": "5qJE5HDrhWskKtdpMrg8XNdCTGGNmfvowJ4GfYKnCqXziTEDbiVPGAuwh2CRVXT1FgxhnuXnhk6ehXAULZVZvBKn",
  "key4": "5xFarPsegQmSNrSz62nKPkNAs8rvUT9q6B8wkeJPuMkqjY6ESqAottPWemprPiNBkkWPcavvPxNWf7x9zxLJGpfK",
  "key5": "3Xm19BA2mzdWVBWjVLGgLY9Vo3Ctw91KMJvj8tsp4KXumLpUVHD4Z8CnuW2q2Tz2zBP39x9q9AQ5aF7yrMyoaxn4",
  "key6": "39fdNCCXoC5EyyCaiE25e4rAQg8AVWCuKNzsogrHCFT8GJArAKftMPEZ15CtGqwLRAPYhejt2Lypk66Dqrzw9XiF",
  "key7": "3BwcA7TmgnyoMJ7FCqwM2TAwuEKq5ThQJRhuMX9XG5U96EbD4DK91vTUvZz9YTmK8hvS6BV9m86BKXJV4TZw7B2m",
  "key8": "4JkbUmKcJpcrhsA6W6gYhKRZP2Qq72mhHqYSZaAPum82jkEFDrBuxrahXvYkHzppC8SwCiYkmUKqUQVknpd9aHDp",
  "key9": "3BjSe8u9oR9Ti99BUfwUDuMdXwKFTptBpWJRhmqjohQY9j3xvm9SMQ9cW5a8hYPKG3pfe9eeJ9Bvg3bdjWEWMfND",
  "key10": "fsEq5dURkPCnj2dJndi4BUAVstUrVaV4fSPgqHD65SW34w1ZGScki1adJ65ufYuzDT4eU2eBKZK8WUqbkxy4EPz",
  "key11": "22XUBCWxMebBgfAg4wRaRhBBq6pWs8qiRgbxodrPfHagD2A5f4Ay6737gUzgt95g8NadFQzd5hHRNEEkEugmpRDS",
  "key12": "23t1mxmmGrw4cNnRrvafe4FoPJZ9RtRtbjRW2zmtJLVLNReLTwAEzNYc7XEiSuXjWPasWWYN2Gbq9qjpZkYtq25r",
  "key13": "2YHvbQzpLnHzRmBTyno7ArUShoHyWBmR3hTWSQa4CuYC6nCuL4bEiQW3H86bXweN4Jfp3fecop7Vfamg4q3SqE9s",
  "key14": "4M6fnpwjeG4GgFA4GdAGxaqwiFKbo8Fre8Lc3LteF4ekqRBprwfyE3fmyYF2sV7CkKcEkQyASHBJvPEuN4fGzW9c",
  "key15": "2PiwEPGn4qnqmfBQ8XXfJjUNHSMyDnzjLS4rmJEGpBkqqEp4wbwBbYeMDWM2cy1iq6Nmv1uHDS5o4vxqvNpyAaZt",
  "key16": "45wffT5UDdgUW6GY8ksSoRhfVTdbmR5pzxcRD2YVfeYJX65b8YordTdtoKUQ1K7DTzTd2RGsWRog6W8K3yJAryDv",
  "key17": "5tMEWyQSmgNaNREEinUK7suJXgCAApqMQ1bEv2X2kNWQBuvHY28UX8wjiR2TUiMFkyEZAAmqm7RWj5Zb6nkcPFUu",
  "key18": "4xs7UZPvyLWdTiB3QaVrbJTVzZgzsNnmUJLogQA8qXN5v8TPGVrZYrAWykBZVvKDkogv1a3XJNiYu4jFxknGWcnm",
  "key19": "5Qgz1GJrpJrgxnT7Xdv6DPaupjhigtGqvcBwCPkdfXSsd7jJ8eQcg3WmWN4BZqGKSWYthCqoerjguVW2CU1AkC3o",
  "key20": "5CnaBhbh53J2wSQ3asBRsMHNcS167xRS1PJRAsafhN8axLta89xr1QwVKAcfLtTXmo4rYfw3CMJqUFZhPD53awyr",
  "key21": "5rqx7eDXZ2WXvV9dahuSyBdfb8jQH7S7xFYSyNekcyXjEcHifcBq6pQueEyZapk6Fvpxq2T2NpJq4xRa7Dbg2StT",
  "key22": "2Vp2Ghvc7cqTohrmjFgHQ2rft3aBuJ3kbhFKe1jbdDQ7dwrxS6hTQusPw2qhpNyn8ZMoCeXteiUWbFqANktGSPCe",
  "key23": "4RVSWcW1FX3fwdAJpAoPpiBc2jjZhbjPjJ9LbRxPqLWzZsdrTmxFeqv9r4ay85myi4ueiUvxxrkY9DVcsaRUfv8U",
  "key24": "9Pbnt4eEKH3dsaVDkCPRAUS6aXzBRJgq46CXB8EdX5o11HdnrUT1bCRDmnm1QhFUCCseMnfWghpZYv4E5mevBMC",
  "key25": "32ph2oNgdBvJQmttMJcwdCi1Hb3GerX42sMFBjKqa3UVaSnTjSHMyfmawhiEPXL1AMcuJJZK6xFLKPLC4n3UtcJE",
  "key26": "5X3NCJTXJqtne6PkGymLAwyzMXtvtEAA5HxLZFo7hKCWdUseapahbV95aC1urDY6HosGMci9rKje2idoBjVgMcgy",
  "key27": "5fRKxAwLkgMP9XWzWwYxXfWc9hHg1yc27gRHtAArAyuCawoLP6rcHdAdyoxZkBt9Qkxjs2hf7LHYmDuvGTPmxBt2"
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
