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
    "35uizajLv5sjqsCYyPz7ghigTnjHWr4c8VYUWw7rpNMMSVjDiSVojtTrz7Mkmda8KGgvhbHTzgAPvJTh6ppJUpba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y6P2P9bDSGKfRa6PyGxpcTAiVQUBqxXr1i3j9g3vaXibk2JuahhtWSsKoswMzySK89BaPCh9QGsso6NrbnkVGZW",
  "key1": "29sgbaJh8aLTrHqjdj9UmD7VyXTAvHorLLhfAHiF5Qbvw7h9pQhkMt9rhJVA6vjLyfPAoHYRNBWrsNShoN4UQQej",
  "key2": "45guCMYEGYhA1gtq3vEYecVcPceuAbeTXC2HuNZ4iqQzMP5FdEedGpahGVUEDTxXdqkRZPPMM1Ss5X3tQdSsK3wZ",
  "key3": "4cg5aU6cnxXqBhkZxVQSSH5j9pHZ53rCTG5iQUtJMjgEYEVzBB6APKGeQdKUrjGHHq1x5mcv85NJEBDpzKs8RKjT",
  "key4": "4qPdzbgFep7JKLBsgGotgrJ857c2Uiqs8N3KoZMkgRPg8hX9heqeUB8udnjQVFFw4zo3hg29spf6eBQKpA3RrQqA",
  "key5": "5iJfm2Ea3aKpc7oXctCNNDM5w7tYBE49CxNBL4MutCSP6YWkJFF4125zV7FazvjN7JTcPDQRoAEK9hwBpP9ddXYC",
  "key6": "Bu2XUCQm7Ts8pmzBGESDui4k8dVVCLL5zQkU6FfYQLb4z8DaazMTbxDcLZdL3eCczj5W78ttE5joV5jDT7JZvsq",
  "key7": "4VhsrVMiKP3EfZGc7dXLeAD6kQ8kDjRZj8YfAw6GVqSmbEkuWutcJ4kdE5yPPNK1BpuUaRW8N6VCKxnntgFYxjmQ",
  "key8": "zcQjK6heYspcHMDuVWJXB66pEfH1MngknCUaXtRdfhgYgsowGfDE3scDBvxhRx4gGLaqiNQJK4HcAdFdfXngoWv",
  "key9": "KqToS7eiZVFgs2oJkb4Eoay3McZrAbosyHYDZEaFhcrDeQNspcFS89aCJunVWrunr27Mzp2Lsc2sioe8uaPopAn",
  "key10": "275pVpGpv3HSRNEjMAPwnWBXT3khrWixjjz7Q5R2B2w1VgYwasNQTHFSJArDpw36jCAFfWtifcCiKDk8vKUUGPdc",
  "key11": "2vds5hJaDSNomoVLSj122XFh5ChqdsF6qmS9J7qYPpGHG2fWsKNnH8Dm1Dqk38sbZFTdppbqj3v1QtReP9GFG55E",
  "key12": "3k9nCchL6wsmFWGR82VGXNosu5GLKucVD1zJb92MKQRrkr6NSEJYcdYKNaVaBKGrKwqUVhz1ur7BR68mUeqdnV1E",
  "key13": "G6SrjZA4BewyvrqkEW2trMHd9bQbb96ApERGC5kUgQ1i4EAj2YguSvSQxy3zAkHzcwjqeX6bcg1RkccKvMzA8Uy",
  "key14": "3H8qAv7DmhiE21cR577WLd4jw6XKWsHGJSsLVK1UsF9idHA4fDSxmTzUjshMLeLcV2ZuV1YY3u4gKniTjb7AqQXy",
  "key15": "23qA4cvyQ6avbe8wTZPzdjhRds2hgbKL3VtxDoW3R4ngeFDZwTywkFWUCKByYvHrreBforYpbHfNvtBMjDWiacAG",
  "key16": "43XBcbudgEVYsNLusouAPDtn8Wf2yWu2SKvzDuyoQHJQVqhNgRzuFD16kqm86QLz9AJiCDDyD3fBkaBothVTAcTQ",
  "key17": "2nYKPUWpQgVXMnAssc6NX3ef77YyR3uhmb7qxf2uYrayDUVVbYXcJZoYDF5yJWz1Z98gweRNqdr5urhX4R4fqBT1",
  "key18": "65uTh8Rd3crMdYiPfaCj6SL5Sn78VqVqwgKqA4cWLTbAm6euBZBHEpyhdZfRzLGKuFHuW3i9cKdunwobBg1nuGis",
  "key19": "LpKj9PqcDdstdKMjDqNLRWKCgzA38P5zX2SvHtDBXtSG6X3Ny75njeTk29rUQHm7T5fuBJb4A5KRQhixbb3HhDR",
  "key20": "4aXH6U1XKW12JRXMAdJs1x7dnP4iPrkSfJBAx8dLxKdbyWHL87Z9TxtrECXGkLbrLpPzkbUBW7zXoZMEPovXga1k",
  "key21": "3Ht1cfJKCaQxunJez9e5V958vouRaT74pQ31f1gdJN8cugatZ1kyoG9vAvmXiuw6TsWaBBSD9QMR2CoK4JrUT15G",
  "key22": "3ezA2DtbCjB7LWcgoFFouLrvDeJVKSoVxQjmPTHW9Q7MawAmYYjV3wk9DBsSf9pLPkjTsKtXwaeYvYy2oj9YAD25",
  "key23": "3CUHN1ChWiRev3iXQW47Sesns2HAjNRX1wiZqCHTZFtAeV638Q5CBPuzBqQn7LQnmUEo7gFyGsZWohH7iZnkc5x4",
  "key24": "2byrDpfgCEvjF9A9PteDZomXgiF2KLS8ew4wkUkUAMvNLnxBUFvRksDdEaiJKjiuUFQ4EzJYg8knauDVbs9CsdjV",
  "key25": "2wfp9CkDbir8Fc5Ds32XX6n2zoJijjBtg7kJLSvrrggDE8hhxQBLBub8vj8NR1dyqMmWVS4Xtsa6Ud1arJa6UMZ6",
  "key26": "wxSqGaHePk4GmoWiVye8txN7B171Ke96Q1Uq66L3WxgEHRu1Bv6ZLkfdehsrgWc9eJqTGa7x7gRa4n3LTyFVVKv",
  "key27": "5a3g8oos4F817aiU7bLapNkkhcFeZUN7wnu7vP4wXvBLdoi9Wz2YBQ4DfwGznmUYxak35eovhR3LkUVBfKjaDEQp",
  "key28": "56M7odzjQhQGJYfNrYghNsC5fdPsxdr2rPxLnpour5ozDQVvvmJePGKkdXgio6FdCyKd5ceHeeUBniEyfwM5ck39"
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
