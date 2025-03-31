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
    "3fex9R3ih5KnqJoT5eMnn58rW8shbUNRaszBSm4PMxQ5FjaZr8cxxJTM3ynjJw3w6LaCbF5ik7HGDky1FbvqjNzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29RnyVV5uHwUZHhrNyU1q4eGmyULhBqQAKBZeWwJ34hYH42XUyn4DNhaFhDRUEVsucSgMKMxrSZkkPDc4mQdJCTF",
  "key1": "43daaT2ZzWsibo9cidj1Abw4gCZVDAz6Ao1r7U6N1rLW9dtCmGG4y93cuwmBZUPSkgKAPM7dXHLdjkwdYrkbnseR",
  "key2": "3i5Pt2zz6CUu4qsw83KTRPLnDf54GQaNYtKE918VRRpdUZw5cABVJei9SZyHkaCrR2uFbpoMZvDeLUyYW9oPzu78",
  "key3": "5CY2quP9p35b66BntYcaRYqTd3BRqpRRF3yffeYGXoE34BNKiRbbKHAhYt98J8tFnvJeL7Z32adby5PLTxKXjooc",
  "key4": "5Upj8WCdtZUAc58eJdQiuMrEB4pc9PjX2LXog7aDAogGgcrUeQ2fb7CTaCexyKXv2n7nQCjwPddRoqKYLYt3argN",
  "key5": "37W6EwjqRLnKKgevEazkCpKsnKth64hyU65zHhB1kheQqCx9aRgXYmVTeCu2ZhPKvwQB2n4VPNxmyHorJvJBe7KV",
  "key6": "3kch4CK3yxQcwMeWLaNj4uk4LBFp3K5dpR9NTQ4Mrb6sLnobG9jrKSbBtVNR9uBgG5sKcKzPjTRPpnqG4VXVFQFF",
  "key7": "5sdMkfRGNVbRYPgrvqG8X1sPDQ5suMkFGipS4XxFYBbyQAe6BHJRDAEgWVnGpQhCYs8DwZpFeEzZj53ikCsh1YZ7",
  "key8": "5PpnT2ShCeoNquoVNztwcPC8hDCYJHYRj8kuiJyGWxXuveBR7PVCPifTrsHU8wwXYDVBi6ftTmLWctDT6xaXvNnn",
  "key9": "wkLFfsiWvMUVn2ncwQBbbDc7sVZbkwCYxoHEU3K7xKZcexyjHYqEWPZEZ7pS6PK7BotK9wVYH93ogdKCXaqHcyH",
  "key10": "47pTciJ371L2QurnpPAEArduEPhSkmqyebM4HKPAE9nt6auibCz9Tyn2WNV6LksUb3CabQ526GBam2zMbzh4mMPh",
  "key11": "4upb2hhrcyjcvd1rd1xdCxasb5Xhkbgmjz57K41EKTyqgcf94bgHnPkfhEr6gHJm7Dhn41XcgaroKTqATrDXb7Fe",
  "key12": "5JkF9URQdVUCdsxNueH3PvF26c5RQLyinzxTGvtwASozvmzpz4LCywCE7bgnUt7k9L3u53BaeVhvbp7EsQ83U7Wb",
  "key13": "5cKuHX8mDCSfcw4mxHnZhGqN9XGMgBAPbvg5c883de7mUaC7e5cJ47TS15pdCrfMJBQirJpsQZexeASLZyD8t2to",
  "key14": "59PGWyA9gMkkJWrDMsjLSaKhkEjeTb6o7hcUxqJUSFg2tSDK1zDuLJnP5e479K7MhQKo7bgwR1GdBYhvfNhpG5rx",
  "key15": "2KhHHdzEorTQ2CGfFmTvz4tJ3GcG5T1SDvNAvY1hQZiNJjpZR3rZGvPADNPvhHrAqNzwFABkJSGvjSNRYUMD2xQe",
  "key16": "4gX1zSkj5YmiT71K74N7iXyWx55NPJY4R7EfPocdtibkA8oqrUxHhLou8NdJqsdq95ZxWYN7qRyntgqNvV4DUs8M",
  "key17": "2xsdSQAeu9bwdViAZPKAunQY2xkEqfP6tpGEZtn2qnaj5yGfCN71Gre4DU26RMLQFcPM3bxfPgGT4DtEJTazKidm",
  "key18": "5kbNFaok3iNGnjp3eCd82iLqHbPzGWLdpA6esFzNZEu4ewJcSDH9h2YxaEruFRNVs1dAjxoazAA7Ro9p9WPECvoM",
  "key19": "AZgGN4fqKDrx9uxtHkveQ5X1c16dGGJoU1XtzuG8oswQQMz2JLhEK4171FZ7EJaeHjyicSb7xRpAhctQjPwJzGA",
  "key20": "2HEuF51uQjs5dWQB6pf4HMtJMbUqwY9QiyiW3xiAbSqJYEYPw8PVZ1yECh4cChEtxULMeymNK3GQr3RcQPwUvCAU",
  "key21": "56MEMUtgbLKNc6wB1oeMXckjrvRmTPGPaKXMATijVSwNSx7BCB3fKHrtcxXLqbVezEJUE1DSZ6z3jMm3mNrcCrFB",
  "key22": "obYrPvPdv45bB3YXHQv9H8hGyyunN65zR6FJgpXfd48JGS3Unc46PY8aEfz3EPHukASvnbF6e5XDpq2L7vX74J6",
  "key23": "bePueUYPfjc7mvd2J5bRDriPmWMQEFggXABorzJCngTciv895gEgdqBfAytvW5CkuwyppXW4Acddv6vyhS856hu",
  "key24": "2JsnYmKWwE8Jn2oASzp2GXtHJwNgrthYnQgtHMoWevmdyzfsDgxtJQcPAkTgkuSdTM3Zw4YDGreohwvLPK1kbPhe",
  "key25": "sYR3FjRmjVvw81VuRVvwpFDzQQuPJ1G3WdxWd4aFDGTtNdYuAqBd7iGoyTfRX4jaVGGfzqQtBAerBFA9LtLAZAT",
  "key26": "3nXvfs8sRMeguyDStFQGWwqNYyEdT7RGr3nuc2Fp8k8CTv8ymBn1rm2XysymPCa8n1Fh2Z3g6uSAR4wkq3coEcYW"
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
