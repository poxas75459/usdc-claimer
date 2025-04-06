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
    "6qp1RnZ1acmFHkL1ef8RTecgD6Ds2vDYur21codiHKVDihVXrptA1zdKURj7hM9StU87CvXWp6FeEMrvNbz4Mti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RQLrb418gp42QjChMQjFovZmbXtYzMtyLx6a1xXmLNDWFij62LUGJqGQByQxewCL7LVAd4o3anTbhFfaEnmjjTx",
  "key1": "4Uqd8hRtXk7XAofdQjvT9MWiEUuuixKZ5TaWU6vWfoTqHRR3CxocrrLFRVJqEetJTzQSZdWbzCMkmgbq9pU9Sb13",
  "key2": "4Vvu9zupWU28nsTRdX2VSNmfcWoN4gRpJfnn2P2fTrpB7kf16XGiKnJmTMSZkF2a9DCYXFrKR8RyNJoEoxC2xyer",
  "key3": "22sKrCYRPkqsCnVf8ZPcV81JaZdVHrQ1iDTNdXTcW2rL6Whq7qfASqPBbLT3riMFY3LkHbX3aatAkLhPsXy8U2fp",
  "key4": "3ST2ARXXpBvre6XyBWayo8iEiwb3wHXwgF457uDttADLvYMJLbMXHWysHejhFGKz54QNjxa1h8EHJSNhQDLhBAKQ",
  "key5": "349DF8cvy7y7ccJs9ph46mthBZc9qZmuD1cVRiZRHPJ1wWoTsV1jCgwsaWBkG3RXJL2as9kfp16BSVu6g9AJEJs8",
  "key6": "52wssjgcPEk4F13eycqxZaEn25c9KD5omufnqqKhJUcxynjoYJzjaDTxc8rXuuHAeXKnwsCGnPvCXi97AEQ8gqSQ",
  "key7": "3KpcwfVEqXnG7XqqdUDQ8c8x7Eu2PjiDVDuUKdkMyysfN3tnQTKDBJAYqAHKMPcTygV7fvpLhpiLj1q1nZ4ti484",
  "key8": "5U6NNs72CjmgWr2pyjs1GLKXfkuRUqEWSa1vtcYAvgE4VCoREWDhTh1WqPKQAn3GgbA4qe25ccL5c79xxnaUTg4v",
  "key9": "2fehEJDq93SxWhDsrR8P5Jg9tSgomn8KUgxxcnkEn9D7CES3LBYLker5bVZqbmEvvHQmE1raGnL6dcqdhGQvoei3",
  "key10": "2noSDjgmWbyeypZT1e8TvE9mCCezYixbPwoevyuAdGLWdn3VZcH49ef4THnYW4piKLJs5ANjg54VWU9H9UGVUDis",
  "key11": "4gwH7XQWTbY8fY6Lac41Sn2E9WYfXVME2vNCigAVt8BUyptnsfeyp57NEXeGZSfRGm9Zdwr9SstTJwpiN1VREfmw",
  "key12": "5ShvmSms86kFUHCT3wscsURPR6WXr8ZGSJ2t1in6X4RByMhSUqGu78qXnspFP87rk6zNd6LEyw5FnKSUZZCxjBmh",
  "key13": "42Pv1sQbdEJ5LrsbRVTzoy3NMpPPhCcuZ9kcFmhsneiMY1VXdUgJuUSC17UhQPyEX9R73Yr9Lt52C5awdocjFgrT",
  "key14": "3HBKzXyLcNzpkmVjCdYSw4Rk173FLDgDM8sGnCRD6M1tcgnA8rzKzTRz5K8h7CVc1qgEgmGxkNSUkLG97rZME9ZX",
  "key15": "pFDYQ56JGBkQT6zHW24T8vjNcuvSxMqfxDLAt76XNkF9R51QE6opZx4hLcMz9rWc6FnhpSdJ6Gu3pnhgfiHgbJv",
  "key16": "41x7PgRu8WC765SLpBTQdioH3p3ktL29Xf7ZmexLViRQZLR2BQRYY552QTR2eAVyKo3RuTLxyajGt75QE7K4WpRa",
  "key17": "3c5zVdUGARer4TeGEA3tPMr7yanZQY135oUVVSt3h57YzdehayrprWSydAfJCvnLv2LkBf6myiG4HAk5gjt3tojG",
  "key18": "nCKnBhovKLjAxupG4QUhPZXTQFWxzbYjW7vWAKAPjXFSaLEnVddQGdxf3ex4WtxzTSUhC9fSQfRbSsqV6AUNhFh",
  "key19": "5fS31x1VEuYeikTmyjCXuUxNzXmyvPbvqMFEB7bjN7a4veQ6QgWHJt8PEi7KbadK6eKzLnsfaXkCBUqNAKSW6Eqg",
  "key20": "5aFt2UbEHj8dWQhxBg5GnwihaEJe1xQ1ME2AG5CUHSGRwXxRWSwGQm6WtQDkqeTNu9N93252SurfnqjVjxJAc4hT",
  "key21": "4rfswUZ8T6p6R1TsJrT6mHbmk6VKr7UmagHcYMM8knFVEtvEwYEdvg1qEcvV35L76NhxjWM7NxN7TvyNXW39kFof",
  "key22": "4JzKV4CAok3Bqq4vCZX2naU4qK4j9knMrEujsQ81GerGwGkrWFfaiXg7ALukHoP56FEwsQEhho2GzEcwASQmbKdq",
  "key23": "3tDmDuEHmoW7KTHpezrkAiCn9QYcKPbbf4WhEK3C4cextQ5xUM9BRUxet7KdFZahz2N9Lus33R3ZquyrKk9aNJn6",
  "key24": "5Vh4VTjFbqiBUr5cCwAaFFgbnWgHPeAZkW2ZJjHgN6zhC2ciNFtFZ863Vn9CbHfRRbAyd5pavcEvZiY6gNH4iScF"
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
