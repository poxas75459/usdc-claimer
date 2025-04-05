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
    "3UzPC7pdnJ1qSSogsQrCkbjXSEC9WEA31kv1YS9MgiAVJTNj4WYjpJUYnxEotSqFNZgpgFiUpXxdx4cpzBTfUh92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7WSFZdXAjCwkYMMJSJcf5udw2RJB5desxw2qWRHAfEdTkbnfrReiYE4bsVJuEM3t9SM3G3UQA2VHTbtwv17sTTM",
  "key1": "2wmakUz4nGRChGiVhd7f9ZnmAmj8AteX3H9W1WmPY9yNkNHEHA33kCw6bycdvQTbo9u7Qce3jJjk53nGsp5ubtnz",
  "key2": "3SXnK3De8uyGirNQoptXqLgCyx4E5BVK2eUEDvD11CBKengFfpre1mqDuZS964CSthzf5wVD4F2C98moBQDngk78",
  "key3": "5vpLu9L56Zv5YwWhNRRnoTjY9oQVDCrQA7MVzwUV6jnq4iiTKWzs4EW3pUhzRetu9PJ7LeXL4gyqu7tqqjwvp2NP",
  "key4": "LmNzU4o3D92wbjo66LWdsaBvzKnyxh6M3tb3d3Dn7zwroyDDgus37g6dDxPS48TdndEYQUYhebkFu56KcRSnwFE",
  "key5": "4Zc4kPAp8FsKQeiAgGjDpPZ5ui2RJBG1yfDZX6C4TiGtqqeSYCmJSYcMzF6sismfJiDPuZAHaXXc3YMGGgJvriG",
  "key6": "tUhvaLtS7KX7g5oT8vR6QJQsC9i7dJdpvEBvA1SHrcd8a754qvCXt4QP5qcK248Xi5mSLy4ts7P4VZT4WBh8b5e",
  "key7": "4caaDTfDGtyRdz4uaMeqxeWfoPehWXCC4CtuRDNF5TwuYenLu3uGczeSDabRBzrRVkx7vi1FwYgbfMKVQPeFfurN",
  "key8": "4TmS8Pe5TgoaD2PePoPVzcRJwbgELqPtDSjHDAF2FmD4uPwYPqcdhjLuVheqivs4EwQ5S32DUSdHRhs9XikjCsff",
  "key9": "5HgqZR3pATKYuFbF7f7eyuxMsCwNwdEAcgJaBcExRwCWRZnEkhsLBRKTvFX9Wp8fgB272bsZq4QUzpsGU8jDx2qU",
  "key10": "5ovM182uqVrUmq5qE8pDqrP6JeHDZZdvYVR8bjii5f3PmC6VQwCid89vwZnTmabeKB1nWhC1yXuSFQuaKwfwSomt",
  "key11": "2nLovHF1t9kesVDtRrP2n5k1uV4pH7x1pZFpkAcY7JiM2P47FCvYtnoyHaAdnCanEkjMG8nWX2NVKbRT1xrdWeox",
  "key12": "3CKQhSMjQnXtDYY7bpNANPJjfucxJDskZ61vJPkrh8vB9ktB5cUJxLvQPwVwQwWsMtPi7cLbRq1m3QYEjrvNA7du",
  "key13": "49Sd3whwY8w6AtjAudPMuZG9UExZprctGoNLTw9Ex2WKxUgPKCfvtdTgu4CFBTW3BWin6GGrzPMVwSAdaJoJHTBD",
  "key14": "4cW69QuNUUxy4ZaD9dtai6digmguEGkvGruPMMpLqQSNDzANcmgxW38e4bstyioV3AfRaAPfWzH2E1FSfw7Wod83",
  "key15": "27swCJSEfpvRZBVEfHzvaqGVL1zBhSKBiCmo8bS3V6nsEoBmqWds87Nfy2Qjn27zGXAe8RqQzgW5MwQ4UD8mW6bH",
  "key16": "4vRvRfzXYuxjzSUWF4qpmgboQEHjhVF1vnHcsh4ZU72z7YQzoi1YS4TeRh19zE7AGTMxC9kkB9ZySzyiuVmF86in",
  "key17": "RVgF7sLnSaJDBvWjTd5yZ8R9P77TCM15LUECrHCWBoV9v4uuk5tM84EGc1q9Vb2kHRJ3KNggWzJ3AaG8FLEM9FM",
  "key18": "5LdfsrjAYph8FPTMZgk8JXFZ9CsFGH6SXf3BYk7wLU4iduFgVHqNfQVjA3k8ESBN3ch1Z8Q3QBR7d41qZxBWhrXD",
  "key19": "hFWmxUF7qz2cHdU3gwAr7zsgv1WBbGhatXB7bqxarfWswK8NgeQmG5WtiJh51x9WSyNov3zkzdKfuCcaNt8npqf",
  "key20": "4k5B5YMN2AHeQc1cq9c9qiebBz13hc231ahnkEiruo9vqvRRjF3tepBk5S271xP2QBQ1RSSDGK41W1uRksrXTe5B",
  "key21": "3KTi7NXm1WJLyuyXamTqUP5nhhjGzRpvQyaQsRY6LtJ4eovnpFPtue55mUe1gu31pVu1PytaBCp9dQmXCf2oFjHh",
  "key22": "Zbk9JSXK9KNw9GpeDQ5huMzYTWa4LQMDT8Ce97fn58ySac2Tt292dd8XwYc4RAuN16HdispaCXxRDkt8a1xbcDn",
  "key23": "5cDKWBGUV8DzNV234XLrrRLMHpKCKfmxaawDzjhorkEESAcdcjxjTzihTZ1DAAqa4nvcwyHV4FucEKKmxJKLrtL5",
  "key24": "Z9ArHTNG6VZaVKe3Rrk296oSXuhFJsuBimdqZ8sYWZ8LSKKVMkMzf65NvcEtEmqE4eZxcWc6Sz1s3iuM7Jsq6ZR",
  "key25": "38QLv4og7gwvAKkexhPHLRuBhCuvPwR9xrLqw8Gv3qcSMWK1tKnJKMFqKjMV4w277VhjU7hKiyMDYfrcgvaY4cbe"
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
