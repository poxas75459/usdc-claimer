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
    "54jJPwpzcCG49VPm4vBbVxkR5FWJwRWoRk5Upr63mHyMG28DbUExhdtrLrhFDnKg8gSvKc9YCFX9SwKju5WRSuko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mX2VGsSqE2XDYFk7zchXeKEY6Fotw8JvQiBheBLfNCHw2s3Zg8Ni2mRQRw1qvZRf9XwNp3QdxMDH32Ce8PBP73w",
  "key1": "24BdFyuLpJoq8HkxayHf3UvQUj9Tc1r9nwBEp8uhkCpmJfj4MYA7e24w4o1herddUPjpK8fhvmsH3r4drvWpZnvy",
  "key2": "5nRg2XRg18v5j6N3KFdRggtr6xoyuWmvL6U2iqYjpnPg2C1qoLnWeYtXCFj5H8TtsoGU9q4aXFsKcDPeEdnJrdNL",
  "key3": "3yuMC1PE6BaTgFtA6W1Dn37nNacJzRVNhJcZzV8oNoUvZCWDhUzCeFREqoQxnhhMCLdLk7kyJfqFDSkc9jQpEJ1f",
  "key4": "3haR3RLARKCLS7oaPUH3NZ4kGCRf2uryhL2JgeSifxiZGySsociwz2suXFjVZb3R8d8V2j7sdg1RwerZLPdVNkbc",
  "key5": "4SWhVCbwCoqcFprysapq58WkStNDXSVynYFQUd3exSo4jdKRgbiA6FwTugSnt3mErcupaXY9zeYcYChf5faUPpTL",
  "key6": "sAmJVYwHNrH7zVwTjKb5E7FtGqrogdUD1kcA9LdfcV8JELiQGPjkMHkUb6MMVK3GvRmL9nRH7fZcSm3aivXYaMz",
  "key7": "3uNaQcizea4GNYNw7JSoAS8CAzUeh9aQ6z2245DnMsbZgwpyuSQztHxcDC4NAMx3J3LWsedtkpicx5hEGZ4PS4oX",
  "key8": "3naUzvL4VpaDd56R325TvSvnJoe1DXkDkUsVJm2kKNE6KWZYHYTZCdAyTuV5HHTWV4seNg7SRqBgerDAPtkK5dg",
  "key9": "ueZgKFU2aC9p9wDVgjuu5cXDkSuVsZHFMBr8bEQuPXzXoLTVk4K8DcHLFT9LFyVRJi1s97ytR51zwCDpkX6HhEG",
  "key10": "4aGX71TPdqNFc9rsis5x1zVFqEQjNkuHcLH9ZzRha9w13EPm3u4EE2ULqxMm6Twki9pp19bLJjozpiA1RX2MAn9p",
  "key11": "2FEUXMJo4Y4FEScW337F4ETciUtoaWSc8mj7P6SvocAK7sm99YgUvP8huQ5Bw826L8m7VbboiGcrQTGs6QJgiwyD",
  "key12": "2ps6CHgnQDr9i98PWNyEmkGMCQ46BgYhwqnncHNPjGrwyS7Cc3NJxwRePjt8Tuvzq8HygUrrKyZby4YyneGXvBUB",
  "key13": "5brdcHMBGVPJWWrPayMM2ecxHQQQZry6Yarkyh9fPbvia8AS2hNSxnv2RaX5ML1HPqQUatibzdwzYuW9gVHF45eP",
  "key14": "2ZJuWCzYiDqovMNosKwiXwdfpyyypZqpZ75WwdwMTYJ8U7EgVt7WKpbSRw5LfkbVprsRUd9eVAwrT4m7WpUcxwJy",
  "key15": "5HVFgwHMHrK11RnQ4NFvyuiVmFCHhts82zSJedj8Ys2mHnY3Dhnqe9jJpdxB3SYUEo2qFgEgzvb8oEPQAc76D8Uf",
  "key16": "2XMw8k19pHqMHr5u968jhDNkVe8deW7MT9vnZiX68aEevW2f5Nnem3L7WZoGet7YoMXDk6pDDixBqsUKViCSd5Rz",
  "key17": "7DFdyWpjvCZ1AxQJghngyFUxoabctyhqFvCktaEy9cKQqZAsuM2BHbo9RNS8zLyrNtQegGqiXkHaXHd6LkGCzdV",
  "key18": "5S9fR9GjPgYDzGCcWpWDQVmh9s4dgWBTnKLRJHgFT5JkYyuRM1Vpm8ASJ5nZ3oXNzJkvhp37PW2PQhzLHA397CGp",
  "key19": "3pz6bF5sRxEnmyadq8wssxoSSoseE6KmmLiswRBp7NX9z22ce3rECRg5gD666rrQxq58tB8arpo8uP6rxBuoT1dJ",
  "key20": "4T2MWx6caGZvw8vNUUcLsVfAvrPqUQhmQ6UbnXAbpH9AR2ZGVN394ELkHwN1MqtF7PDyRL8aGMtK8PcZkztYaF2y",
  "key21": "3KVmcVkryFjLa17NAqhzuvER8CJmVwXyqSpP3TnTjQ1uPzbQApzpHh3hBg4CKGUnQzaFaghpnu2WPhqodQVToVBL",
  "key22": "4gMiXKXJW8yS6VKXfR69uMVB9QVxV7QhFWLaoDB4gETduJnUzFWoq8s2ndccX6zrsXnnAr2H12P6TWbkVowi5CBx",
  "key23": "jXP6JtXb915mLDtFKtxJLAFVehoaYMnSfgZiPs74FGRgAX31UUTm3DD1S9tm3YYRmwvWmHxuzhkkRkkDRKxyXT1",
  "key24": "65AzAgeqhAG7Cw11N56khW7MPMxTK79JbAJqgB8AfE6ESAmXbV3K1wU86fu16KMYARSES8nQMXS7wNkfSCuntfDW",
  "key25": "2CGokK4sz9q5B1oM3QgHj3Un3uVNg5q7BGX4gFkB34e5p1gjQCjEfA3Qp7gYBDqBmZsq4jZ1HH4rgZ1uvFDj1jSE",
  "key26": "3wsfK3xCBBZntnnNkyTiRb59PLwTVCQF58pwkHueEmDuYnxPUjjzcr1b8adk5DrnCFpUpVuhC8U7U3e8q4b64Vm6",
  "key27": "kgSCMMHJUVekrdotpcvd7FrbQwh5YkMb4A1ukGX7qHysp7wsBR3oma6UqzaMbtSXru3588kxBPT2W1BgSbDdYck",
  "key28": "c2pEt1DURUjkWidMyYCyiNkSNk66kHZdjh1wrDGkjgnHPCPafkqcZCVRngiW85XmpAG5MB4tApkQw9VT1kLZXzv",
  "key29": "n1HjGbeMajkNbcPGmVJdGa1mRTFu16Kr8TRP6Q7mRoUYZ4KmKdapAMyrcvKC1eBnCPZVD8xJQf2zRDfPczMZ3u3",
  "key30": "9MYK8LxjFDph8ym3wjPnP1ZiR6nzJQcf5u2o2aCN2qtcqF7eZ1eWWMTgTjrUjSkTeiodP4ZDBEKcboPwpcSyWEt",
  "key31": "5infq2QgrmmTpbiFExsF2dzj53esP9vGhJU5vojUscnPirY7Z8auxp6JNewduwNpm2rowVX6NnYoQKRREHfbv1Vr"
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
