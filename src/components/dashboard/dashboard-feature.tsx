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
    "4w6WFAYNLmuRPxfx9LcnaW7iqB3vLaJExHVyBj848A67BnbfQLLZZuyqiaJDrmwq6TUcWtXYydvkWR6beMHx5BsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cU5yVHFRFtxPeiVARa4oyyMdV4gBr86sCAKhru1LLVj9mugUsxoX1CWvXbnWfTexyHkjc1urWroQhtKvJArmkxu",
  "key1": "4Wb9RTgdyCBfiwGGmSW8tsvJUUGvpCBevWNjzUqAq6xoxD3fNtygwcNgBFX2ro7rf81a7Srue2kFESQ9pHiheXUN",
  "key2": "57MD9bMyb7Ekt1SdaFdvYvTwrF2ECYvqtP6GTxMta9tbKpTVLc4hpuJEUKJjsZvxvM32TXbHKssfMb6ddJPBDERg",
  "key3": "5t65VVhxa42NHs7SsTpyA8QDKRc3m4mhty9zGPp6Qz2s2bfwJsD7TQzQ9Hw59bdGEbNzUFgu9CyAjVcbaXsx7MRV",
  "key4": "4vJ1D95kndjNDTBoHsS8jSL4XBXBuDtLopAnN4gLFJuKrKDSLvuiWK7JqLXAuV6fffejnhHEAFgeLzyyiDafSHUB",
  "key5": "65kbsGRFLjF8D7TYKDTdjahCExMN2DLSwaqRAFUWDNeANyrm7bs9XTRkdcwJCpyqm2suoJrojfcvkUanYTymXM6q",
  "key6": "2ZeHRPn3Rd9QqDPsYtBXUbhXtbPExTr4VAt14tpBS4deZd5NsdJxdoR21hKL8xFHKaKwmj7pjEFnoEFGNeNgyJRi",
  "key7": "3eqAgwUj2hj1hCLRvKMNhrS52thkGLxtAQG2jJn7zpwjh7j2p4w4SMiJNq3bqERfRsjSdSRWtSk6QLRJ5azPLPYZ",
  "key8": "33S9u68heEhBVNSfGGS19RHPr7GCBYNwdGk4cKqSGgXpocdK2hNQ7vZ7Ak8xc1xr6NrwpBT3Xu7Ry6kwN5Me2z9S",
  "key9": "27VA7rKGGi5UkEzt9qRK3fDiVxxDjAP1eiiQKYqVVAC4BECv5Lt9V4suZWWY5JHNs3QU6DBHqd6nDEkGqH1j2yhL",
  "key10": "mmJ4kXCMdj5WzAfaSkpjFRk5yKD7SRTWnFF2FsSBWBbpvHsgDfNo9UuuGLRydRds2h4ByVN5udeFGRrUivt13go",
  "key11": "4xE9uH6FD8MQx9WoddE3fKjffAG3HrucVeGyJW3DJmei5WXUPJNTC2J72L5Wwdae5UrTdBTeDEddnNpkrxr2ksHG",
  "key12": "4ZL8SELKqN7SiHEnC5QByakj2A9g3jFgHH8WK2TypH5DKiYHk4MyZz6xbeSsZfvu4A6CysX7uPS4r8BwewU9B7o3",
  "key13": "cWiGxJdBFZWDh9bieiycf3GfGpuXFHdmU9G6p79kgP3X3dT34nxYVkkrpTNNePKDGgiyfC6YR9HemXzg2rFgykn",
  "key14": "2J6udXuinwYY1e49Uxt3KAvMhSAHMseiu8FQCPYJh2nC17wKWjqX8Bvsx1XJzWC2ULKWJFx9qpNaaYKXKrvEcEdV",
  "key15": "4CkuhARbduASXy923DNVvxie15JsMyAGZcrdCyTzxRm8YLcnWGhZubbc2tgHnWGx8bM8cULThu7DkqrvvhrZ4P65",
  "key16": "3DQqF3MvaAd2zbvfw7HZWBWZCfRSa59L3zPKJks9a1JPZfUXvcevNReFokkrRTirPaTQ38UoLMYwbSCU5vH3yzEU",
  "key17": "ojncXjSzaXZSufBbJUnxG1fgaoYrRBFrWpHZUB25yNWaJxyi4Zr7AgGa23VaqTVUwn8qHdF9jzURxvB2zbLcNsN",
  "key18": "2eTeXJnidEu24WKDj8mEAHLFgZZLFqSPFxYhcT5BHA4hdXKuyP9LEBy61p1KeSuVZffTeup4z3K2dsBndUM69bFV",
  "key19": "5fHTPnuPCT6rJTVXsHRTduX3crXxeFBPWhv6DeAFgAokskKh7XArNCiA4i6TdtCngdDroJNCwyWB1uvpC4edBgg3",
  "key20": "R9C6BJ6YTE54Q8YqjYMcPMnErd4XW8DNpE5f7m81d9qj7s3wYnF8cQ1HXpJHToCK41oiHiJrc2QbLqu2jgptvKj",
  "key21": "633PZfUP61xC6CMCjgdxXQUfmtjvS4gYwpH8b8oZmoQ45pfHHjQtDhzpdFB38wJZE4kSwwebHMQydaHM9jRSJmUa",
  "key22": "uCRz4msAaoMceFuweyjEBvCaDFdyjEtWixyG3JFGbXtEpJJfTNApfGLNRC3mvEJwyERyjWAfnxicEg21DpBHm9F",
  "key23": "646k8Tiyd7eR6jk5WkoJztxj62z2i3VRctWzrGkoCJKyQ4vDJdtyGQGzrefbsJUtmjtSKqTwGrgn8BcmT9hPkEDZ",
  "key24": "4CdDQHyL9u1qZvrRA1AUDQLZ7Q8ZX959DCjYcGt6nvS3PkrbSR4C8cSEtRtMB9KRBsc1E16CHbQp6UyFsPcs4da3",
  "key25": "3rhkavqqFLMBhmokLnA6XHi7NLdgp3pnvvThSGpWb366HvdHJ9Y5RSi34Tx3QRfS8hpcF8VHxSRzQpVZxyk9pTGd",
  "key26": "5xsPmmYywMb2wuvMj2HmcQfsBrm6M54UhJuQbGWtx8Gtj7ys5FUiuD2TQHfcJVpYxe7hkB7i7M1Du2sAug7iUrCC",
  "key27": "4AjuJNFm4zT7jD2mZgzW6JHzh2CQJ2YAgKNZHKdpjx1JxWieWntULA3f71sEfayh3A5DVSXWbwdXDXnn4Lyeu3bP",
  "key28": "5iJcrn2TbJoH2UuPCVCWh4sbNmGduJFV8s3w1aqGsWAqCmDShJRnSrAvpr9PYHkro8YMPinZHPftujhhKPCaSabU",
  "key29": "3YoyzAVygcY3pcb8vToEm13CTFEKyTWrof8JVdoXTfwPM3MAftHMedBypwfxVmb6rbS7yWBdASkNyeLdqs5RW4Bq"
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
