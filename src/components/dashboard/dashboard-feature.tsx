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
    "4SzcR1kQSPXB9bmVCyRCyj4pK1jQBN8K1NX6XKzXJKs1fAn32bjFLsPKsrXujKfQD1TvQnQarrgwUaY2VAyyjsBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xqCzPis4Ah8pbKoZSnUYeYjorN66VGpbcTZTPCqiS6iWTtP2GGTQGDwnbM7im9s9Wo3LCdvSBdskawVttQ5uTTt",
  "key1": "4xXPYSU1hsC2jPNDmAUfb5ojB6R7BdYWsA3vjSMz7dAvpNFDCC6snUa57frbZ1DDvf1xGrR4uC6bi9Wq8QeyPnYG",
  "key2": "5mN1zkzhmpT3bHzHnvxBvtA5veX5KFH5N3X6vfSwn5WA811Tsr4CKiDc9Jutt5Ls3CSTfzVBK8LToRxGg12Z4b4L",
  "key3": "V58KU7FDPgq7DJPHnufTYinf86UquQMXLJpdwtJEdWAvQdrNb2jasbZyoj2fdWxEubrviAfDFYHE9sYTrPzE8AT",
  "key4": "3CbHk5W896rDbUYBsKE1iPa3Eo3uUbrTi9Lrsm9L5pCmWDy93tmawVuGauxqo1424Z835bcj2xivV26n55E9vT4X",
  "key5": "HyZdWG62XYfnz1UDSE1XMPqTJ17wG6LRVo1RMBuBhjEi7xfaziGeTWswwnAH5UEKkeH1BEj4e3eg4TY72DAtpDH",
  "key6": "2dv6NrEXhsLvQru934Ju4mNUaGMkSTYcgkUDTwHodw5DRs13KWQc3wJa8LgaiMXs8p41Gtvgoz1gJfNY3kasoKdz",
  "key7": "4eo7w1ktJpNfJnsxQw9wGvGpYDBcLYyop1nShRQVYNrq81n4585b3wk5Cy1sVhFsAZnG3dfzbsUemGp2JWuUHXcK",
  "key8": "4jsSBGRPasH6qJtQXG5XbMcipEYwsz85TyviUoei5pMbhAgQexdJ2Tq7wz3AxrCoPTVi7vHvaveRDJWycK92J19Z",
  "key9": "26txtXTm5FmmiMMHYKrUKPpSFrKKiggCfTrVaG1sFMRgKazGcG8G9hRnU7uT75t9Ym4CnEqDFvyWkgYjcLezS3gv",
  "key10": "3qAFaV6JF4MjJfZoDrEX6HEt95YotxShtXZxtwSAuFCaQDJhdeebG7efAETg9otnERBghwkduE5y3UQEJ6hnhPzr",
  "key11": "W3BYQrdsuToNCWwsHno7XRtdhRhxCsAdqGp5xEZ6Crc77eQJMs4B597q9kpcMiC7eKfz725yjcosEe87uWP2cmK",
  "key12": "2Jc3CC8NwH2nWLsVissAUA3mK459KysPHyLET1FfuVTeZ7N3Z55xFcdTmowDNup32hajnqVTY9Lh6UwRSykZWGbo",
  "key13": "34wwNtchnUCdVnsn1ZJr6gKFJ6vhdt492UQ6PefF6wEM2ybou7g2BjQ4WfQFWQyjh2TSoHJQscYKHiNbVcpfEwFc",
  "key14": "28XcuBr9bgpn8dTeJUi1Wv6MhHkT8MtvDCst6iGNvw41VdQh6tzSw3kY1KahRaCfFyfxRZY35ECevsuLYR9fkY8V",
  "key15": "3cdBUXKqMMbTX6NkB6VgSCtNFE2NAtSXzccXmhdiK8hC7osN8uLdWEjcXeRV7aAHXteBcdfW8g1YgEcAyjBmXvmH",
  "key16": "dEQMXHdLF6FUhk92mEydRvECPaRpJ6vhbYCfrWTvEPkLeW18NhL9ypCJ3VrqUmEVwyMPQkHWwkVKa87U153Tzhx",
  "key17": "3zJpQ5qqAUKT6W4hwvhk2E4f8KRigVqSnXTvfQd38mVy1D5nTUNpZ2BW8ZFmT6esU4sKa1N7wocjbeVannn9mb4z",
  "key18": "5SaZAva9sukKpHtVCAopyVKkUWVfWBuUCh1fxqqvBQfTPsvEiEahGsNM4Ys97CYs2WL2eyYYWrVNhnYfPyKCi3iv",
  "key19": "4wyiWEKhnhKP7HXiGqy3H4PmgSGap5yZJCu8qD6aPTbrEWgjf93tXDpWpmowTyUocQJK15ZGdgfomMz7yT5b7BfL",
  "key20": "4tavUBpqUdAVagKuFkfNGa866nREbiAWB7a2zagJrs8KZ39PeNH5cQyG5tvMoWDyLkocjbYVsN7MFmf2GnFSzmvV",
  "key21": "HjfEt5utgkkRGcAqMBPH2T7nRQhQe33qz9PtB6DfGBQ14GUF9EXJ5WgnKVgrNmKTeFKtA8QREjHQV1KDjBfDvYW",
  "key22": "Jf2VDgDRKfoha2bKdVHUZTv7PhvQTta3a8B7GinULrF64aXxuEKZM5mXEkbFpmgEWLgJCXyNZz2ArxBHUWPk1P2",
  "key23": "kry19ngqmBN8v5gwcc4opwdGXpBRJmokcsYk9JtwwPgskr7vHus5fLKEa7sT7grvEs4pmF3qeoLgiN2tZnduWwT",
  "key24": "4Q7kJwpMgMmx1btRrJJVCRXmhDSAp3noD6yXReqvUDoBkxqYmAAXk1432RvpugKMhRCppH4rUtnYPUG7fxPX8KF1",
  "key25": "4e9ZDBEMrBfaHYfvTvuk6R4NAfrxHc1Hxrzdmm3XTNjZXkUvW6oeQv2rnrJBHibyo9GwkKEZwebcX1XykKDndHn2",
  "key26": "3XB6hkjWw3jx7gM9G3bDhH7b9ptwA4jKPHGqLyyCeStP5RTTaGE1h9PfRtZmA7NzUtacKMHAe9BEyhkSaxAbZeUv",
  "key27": "2imG7vPfYZ91QT2voSvfHAi1bGov5abrHSTcERpXZ33KcWusik6yU7vEShT7xCTkpRvMaGjWEiU24RmSAi7AvYTg",
  "key28": "2fadXEzbdn9htt5JeEQ34XpoQqUU62yLPFciFip9diBsjwePsAHBHShsep5yhLTBmHMBACsUfrJj3qHb5sWPBsvb",
  "key29": "2Yafwjs6cogKU4aBf9TmZpLR3X29Fm6jqkQXyVEdLXBTtw2JCZc2e935Af4A6WoD5u5zpad2gGZn83MRAvYU52vb",
  "key30": "4nzer71gdyFDBhn1vkMUW51J7FFamvZW2eTvWSz3iUyvCrS2PvYf2ZHz8GL9n33zGcwP6xiZJSxrXrXHym2vyoCr",
  "key31": "2g6NN3GrUwSRky7vEKmS7e4eZFnViwoe2Wa2N3uF7i9SBxhkbddhyDh3B9PsoKTpCNBvqB6b6KcU2Yqnf71VU54M",
  "key32": "3qEqs2o9opyp5FJ8BXZJ92dez8zqU8RTiWC75RSfSWUXjPpeyh15pKr2Z39nE3XuwwCWvfG6cX9BvbNvhPM6dfAu",
  "key33": "3j2Q1Brf4GAAf1VdW6dJb6y3HutVtp8qZmYZz4oEvmpnn1r9a424Me1ZB9L7ooribvbHcQsG5ou2WHCTFwbQkSPm",
  "key34": "nvVR8wCQnF7GBwDajn1N7grwDaRB72cFDkj8sT35F6QAaLBXjDUuEEuMrrJt1kZnnA67TswtQSyKST3JpfxKYcb",
  "key35": "EMtqkUDGmHXxyeWQsafb3aVJao7YYRiJbjvtz2U1yDdn8h3RXdmjU4PSbcBdKkiART4Y4nXJwjB5RU76b6SfhQB",
  "key36": "5He2Fd25SK6MtgiQZbDBFr2PuQDbsHVVKLEz6yogKf5oL9jq3q5qQgcnCP4Gx9zRRrHQEzzQ2MGRUV5w6VtC19gS",
  "key37": "4HKkafHJgVr6kFibWLvvUn9SPn1ZugzRdCPYxuxUzRffkGKfVjBzhho4iTxwvAHFgNRvLY9rd8UijEjNUtHZ4dk9",
  "key38": "3eDZcTowix8WvtA8ctqFXtfV5AKEYEUVmUMvSsXhB3XyUzhK3Vy884gJW2fkr6b9JwSYK86jUfKy7NDBeceW3Cbi",
  "key39": "3GCMc6usWXnpAqHTyncgAoSERif5FHPYSVXTG1cHAThT8KXBGkqZeDV7rVqGsQBauKPDtK7DT5pVYt5utMwzoGgk"
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
