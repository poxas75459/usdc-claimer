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
    "23QmnuQo1PxgzA2DnTtaVsvZVBncSyHBzmUfsXmxWv3dDrJAaqyqucqfQXse8tVx7aPizmNunhhM2tyv7aJLWMuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJrTm8XzTp2ijFtsns3KEf64isVAunSY5ivTnGPw31aDzQ91C2L68MgEAeyEiLdtBzYEJWpPYrB4271aERWnsYm",
  "key1": "qFzuHkhZjALCy9kRNKnG8oUSjxaeBWjTsfGXrV6LEoKWKnu8qsEWgexAAJaaRGhi2ugq1qkLHE4yLhpdfenEhvL",
  "key2": "2Ab7jExx6Ut9u4GdadVBvKsuqH8vdYx1B9e9xfVvB2RD452MzeiCfFzaJqNvgiXZxnqVeJ2snS1X5mKC1BTs6hwg",
  "key3": "2BtKn5TUBKYd4BtDpFYLndyn5z6Ek9dEYviumYJotKsjj64XHDRchyFNzyoo9oCYZben86dnNQmWXZ8FJKjU295P",
  "key4": "53wRaNT9Wzsi79RSEcBwDH9EBET59kM5hrNjMU7u9LxE2ptR3YveFfVK74rjcAFswz6VAo3gWnrdivfxMZykdo84",
  "key5": "2SUKYpBv3XU8eVPNPvRoxqYh9LbpDPkXXiwaMDec49x5NJnmeknoxsqRZwGByBV61eMAviP3LWJs1cPLrgQkNGbp",
  "key6": "4eM2zPQ44ERdbN1u81AC2zrHv8wmXnjJc7LgtU83vwGtePRo9f5q2pEsrAgcNtJfwKvb3HpVqbBxXSjqyxAfk6r1",
  "key7": "sfsTWQRiVyfcDmFZQQxo5Q3mGN9TusE3gtYpJJxQiHbVhmkKX3adEA8Chmgo1Xv7ozjA144xGepN8FhWXUAKdga",
  "key8": "2uU9MVP7STkStiJoDH8mgM3SyFjwr6d9aTU1vPZwxGBqerH4YA4uFCcwXRysPhVAG7qkJ59M5tSBHKgZ4cZT8KA6",
  "key9": "5CCLTxF8GjYYzoVSnDHjUiUG8ZhTd34Ph5D7NwLweYe1AMKPUEDjNipFUuu766SVytLPYZvrPsencQxHbMoPyWnR",
  "key10": "detdoTNFcYJ1ND764bYWD5xw5dGQXrWdGoFGZ1CzHowPPEiJoFiVxbj9V2GiDPRFBTy7ZKKiuux6bY614GRaanQ",
  "key11": "5rwDshewyHnK8CdNckVdDgsG7Y7qUrtY5pkherGWArxXq9ac43y8URTcYNWbANaLhAY9Ssmve1KuwPssr66zF3Ug",
  "key12": "2Hc2EadbetEQ2ShTMd74CWMBPoKoWBMT15r9kq77r1ga3rq8hghBG5KaWV2wu9hg16cYPUrEaA3N3aUYz7LWrKfv",
  "key13": "3d2J9g1HwWTL52xXeprXQPTGHXHTeHdWaqrPXcgbuEzP6PbpV9qzbiAN8DLbz9prr2CeFD9TsXoJoZFHHSBJ6vmN",
  "key14": "yPYdggsQvj1fNn7mefcveuTPSrApMQcFsZAoXsyrZa3KrKEmvJXjGGF9H3yzLy4yVgVU32HKqNGsA3oxVTes8Aq",
  "key15": "4npxxB2rsfKg8LjiRBJbLxuakGW9ojizzWYYQFnTVM8mQvXSeZeJ1cvXDcsGLkXLJ5E5mzNTCVsP5n4ToDvy8H1B",
  "key16": "2UdGtQrDBRQ3ozBexZPEkgeHB8R3X4dR3ew7zqtZ965jZ46v3ZQmf1kh4rHFp25psJsnZgdUjgwu7XFfcL4QhCDD",
  "key17": "6687utvF7ESAwkhq57cidHe1BDfDt46pgi3dkAoWEHt6CmMDC5RvHQ9JHnBQrF5hDzpN6VhcMg8mfqS4twSUsKcK",
  "key18": "2eiK9cyvtTmoPa8aGWXi8yc3ZxAvpxDd6A7Co12pYCAoYsNfnviH8wrm1kWynUBv3Apjy1dzPCYo3pJe33JTNfon",
  "key19": "62Rz2YVjyZye1n8SHyNYHH55BUuNZng7ZaBGccywY6CzUkdZr1cceGiywwwX48jZpikHWDotKZTEpXW7zuQFBuHy",
  "key20": "2cXP9XqokX5n8wSRVRcTjanDwn875ut9SFPaLKSJcSw5NJFE4gWUAdarxd7mw2jB9PFjaTvY4CV64B5Qo2oW5fST",
  "key21": "2yApD3Z927jSTfaeQPvvhbGckGJGoUHicU86UMHGtkX4PWdTW1p5oj83thzxy9rBRsk3MTME67ycxBk1nrcs5QH2",
  "key22": "sjqSmLAKmBNSZzNyKdRK1V29fExnojALyfnFkfpXugDgks6ni8nda9f1EDLht7687gKjdapMB4U9jNMuT1NLXip",
  "key23": "3KgKuHxy99CwNNkEzHuH3DxSkL6mNMeBtzH14Sf9mgfHoJJWwcM6YFU7Hph9K25QBGVJfTWdnmL3quKiARfnaJrr",
  "key24": "2jazWwe1o6jYz1yEFPjRPFummQopULDxsSREKsEbDVPeUpor2SFpVtSGHjEi4BJSzTDaczxfyMtGe5JHTYc6YsiM",
  "key25": "3nhgRrav5nHerceuhwpiX1x8MFfdg1T7GZAXesmome2YqJ6e7rzyP714FgzVREJMkAWVZjFvSaS5TMmGumre5uGG",
  "key26": "46y9WFp1zDcfdnyKeAN7pDvM5HZN1ZPnvewqVmcifhkyH1vWAvW74j8XJ1rnDR6PPBMwLL4dGU7LVi66p2VwuoRc",
  "key27": "RELM2wLZXUgqveCQA6RfuJqm2ugFmB2B4YrurLF8haxi3TYL7Hvpmhwrnx29EEhZ4ixKBh6dceoShsyNS8F6Ftm",
  "key28": "4dvUx5UFHZQgJGcYW5Dwe17rZr6wwUXB76ei2Njo8DjsyJxKhfLzJaSi9PUxdw21W4YwfGFTtpdA91DsKUU16929",
  "key29": "4vo3Yck78QNJ4eSCgQu8RJUEu6McXAtgqmJvHAfpWzToxFsqp6wp7EcMFwQcppfXa5sbHVmt5t4FvXZeBZhjwi2L",
  "key30": "rDPRYLbFxKfGe7EJYHxkEt7QTCVV8huusnqBYxfh71o213Dp8wxBpYVmy8m2AjiksLucfdSfjDYtkQMSqRjftNW",
  "key31": "3hteCfHCBk4gUBAxGYYu28D3TNiD9EkJeMWefErpiHes6NwZnUpvXVpaVgKapGvnsnnss4QH5Xxk4FefyMofMZ7s",
  "key32": "5HrLZbBGgvHc8fjaoz38x1Bn7VFC8vTJxpAKmVvWGwBgvFXSxtE2skon4GckqaxzgxMam16e7RV3xQ1BqrhK98bh",
  "key33": "629Bxr3wSxoNhHUXuaFxqKDyrNhCyo5QEdfVrux9T6RLvet8uVhy1GHsnaNaMkEaKXnuq33YxT5HePcmvnr6XQGS",
  "key34": "2MnKfEN92paHrotCTNuH9Z2wFL7fJdsS9EKuRDt7B8WFp7o3C8t2ULreHpMpKmZL4Q1E7NERDKad6WH6iZCSPVSA",
  "key35": "2RTniHMgQSBQ5JEJs5wZp5DJvjRrzuXpyDD4QsDsY6Z7NsmmpVULb5kwHrmSNtgQsznyGTeZGiF8Woi9txyVXWUs",
  "key36": "2t93xQUiC5hQkjSfT5974zirtyHWmQPC8SB9DbuyP7nEgEiPqzgUfUYACD7q1zXgq5XZ8ymq3QVaRGoaaZWN3NVX",
  "key37": "4FXVcqi5uCbzp7UkHTueCAojnYFscCpA612WWx7eNkkf4oqnnf9PPxvECPMZn51MKwinc6mCKNakQJXV8k7bpWWs",
  "key38": "2bmMQbgQjW6fqngCHnLo8vcgioUVjtjXuK9itgKSSvMfnTpocmH1Ez5PU9vkemj3ayrqrkNvuG6MH2so9gbbSVuM",
  "key39": "vivBgTvKj8A3ZYEYgYWXKPWA5J79pYCM1SYyASAjE1oyRupWfmh1UjLqGqX7cWKxH69t7rP6GpGNXcZUtqTRgFo",
  "key40": "3c92CQTGE7VAcYKEBT97nY2YMXMNbyW4MXrGxr6AgyA75a9eL7HmsWLJtQChZRZ6Z9kiNYMmYk7Zjod3PYVwsVka",
  "key41": "2H9k1sb9hdGEp5qYzHgK1aJ8kHZhBA21yywUmNLki6hjY67pLB9bPbJP5s2spX6E7YDGShMHejEymx3GM7FsZYcF"
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
