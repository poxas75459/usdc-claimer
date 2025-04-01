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
    "4mRNzcaS7PDTgWYQoPfSvLacXqZikryQyYmgG7bYoDQ9DmidE8C63zbxbh8TeS7njFHxPXymRvzJxJjh9fomCMA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EijbMfhx3S1C4VcyWusKvj91cPNdXyPj1YH5X5Tiisu3v7CNQYbQfGKHq1Jm7qo2cV1yVoTN4PpEhmBt3D1oeWN",
  "key1": "22jSyzrrq8M66jaMciuHHZFx1VCGUPwEwAkY7uvJkofCuNLH3484F6sqYF3GHLRVXYCspK4qCknCpKAaeLMU7oVq",
  "key2": "4WBuk4bLeJFTCVjPVyE395BgFwsBPJsuVtVi1avB6NrfaRsKy54Kq2CSGWjRRJrDxTC3KbYbvdRvx1J3Xbohwn4G",
  "key3": "4SazjE956WHrEH4JuXr9dHyoizVsR6nhAACwknKpGwxr8bsiFDmqbTSaLJzPS5AbbvEs8dUpPU35XYqKdxKxWzYw",
  "key4": "2VhJq7hAaqx7VAs5bhgj1egou5VCcRoCTYNZqVHyDSZV4wcggCLALzduDQBp7ZtGX8hX7fG4m59wRzCQ2K5HYEgh",
  "key5": "35r5swosvzoCWysA6cAchbQfDGVo9u2qsrLubLay66QR2QxWTaKS7EtgsKGAuM37Tn5Xu3eYC1Chy63uYqeP7ixf",
  "key6": "YDKCzkd4ryJhP17dttHFLfrRGkKSU4qxS7doF77wgJF3P42ZgHsy7hRBKpuh7TSBYiuDZUzUdHJ9Fx2i6atUkaj",
  "key7": "4Swh3VZHiuocDXxNuYAHVkkNmUhVyT3GPQmVfDELfbyfXW8jRCEK3NRucdu73xGKGKk195mFpfhQurAL4Us12S4w",
  "key8": "292iimMq6MQUYqKEh79EweeVtqfaBa8NQxtugtAuuDJQbb5kvWuoWzk4iqV8XzowaGzaJokbrwcws4chqnwR3tzf",
  "key9": "2UYapcLPxBNj6PR43SVhrgUoLFTCsoPz3NYKunMdGasgd9FWHqqU8jYTPcQ5tfZUXLQb5JfamU5JtvocoTnDnJQr",
  "key10": "2QHHiZUPUvg9ZDnEBnDLYrMSXbbUSygmRTLx3qDFMPj1dqddiN8UL3gsge1m4XyDkLfSrZjXRnJV8XBAVbRtuEg5",
  "key11": "xemdX4v8Xx85QXQUq3whwDrv6YuyUfJHMV1nHMpRQqC9iWG5UF73kCq6grXJgekPsyMAAhXBRkF22JRJjHSCCYX",
  "key12": "38BjD9EMJdwTEpfcAVSTb7emwwo1JZoy6kpxeLM3ddzvbkouJ41M9yuEhk1B4zSK1pGHVmT3bkpGETfFmzDyaJhc",
  "key13": "4vfKU6Jqn1dH1vsWMj5VRueTuuK7NQFGxjsRfDy3pPw24Yip18KzvR19fZokjTQSBuzrtjACXwm241MrLWAsYZJG",
  "key14": "57fDcQfhuxX3Nf379HEwmz4HH6ikNzsZpbmM5r7Cuo1dWiQ76itoimibBknaNo9wyBGbrzxZ7Mt9j61P26uRVxhW",
  "key15": "4uXa4QHNK6Eu7QbXpEfNrP2nsdvshz32jtHGb1pUtu8zFrtQfgiTiDvSNkbv9JNwY1kUc5EuHbAg8DUt8yAQDVhJ",
  "key16": "23VmPoVL85WGkD71Dr8JGX7YM8j8NRv2Y2HATkNxit6aNgpg7ub1jejMJUe37xh1v5T9zebaibQnXjvybPHScRaZ",
  "key17": "b71Pmt24hukiH7cVf9k4Wncp51Z2576K26ssA8c4FHsMwwi7yLAQC4w3dmhu38kyK1G33Vj5viakSMJjJqieoga",
  "key18": "3TYm7sWbHNL7cNqP6UdJMAFycAbHXfkQgZcekgkoFnUtsL8mixHUNfz2vX6saorA18SXdavfBmGMqAJqWUr8rWkt",
  "key19": "qKZPqbBKgfrSDgSkRcpnS3HQtHMkxpYZiAF7sydXg2PivXtoYNeW6VVfCojojqhEVs9s2U3iAC8q2dwXcrSfSmU",
  "key20": "2kdKaUKkrsufkB46Pwb1ujfWTMCSgaFG8Hb5ZdnGca4CADpiH4qaSEyn3J7GpdreFKjHiXgwWFDCgkzW9sWbtweh",
  "key21": "3nqWaCmromTSCWtDUfH7H5sHiVdfih3ahnvgniZMyXSQKk4MUkexMUcLaBKV3toEBQ16VivCubyZxWiXp3N43qAZ",
  "key22": "31xNY6SnLGzj71goE4Sga2GHVdsowVnYbgdAwBzUhazmpnwP51qb7FS7DTbSHNauB2mtw9bx1D5G2wWvuEerfWEQ",
  "key23": "2qBN5TjayxknnVi6kY5trmN3B4Jx87bbRuLJuENsgvQQmMXeWY65PJu4KZDFNXwbrfvVX8Vz7xd6iv4mAUR99rtk",
  "key24": "nq2g8JzwtPGxbTUnuLUEE77RKr6UbAFLYEJqPu9A3o1rsp3LKPFnuN9hEjzaeMG2oBghRsFnBi1V72iA4UQBnmZ",
  "key25": "2ZEv4cPFuyJgikQtLCBAtBp73snykwumaqTFzNuFGWTpcXPedqb1TK4bNc8vZGGsxEfEa4sspEykAtVa1Brw48Fa"
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
