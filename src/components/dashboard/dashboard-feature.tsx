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
    "PxVW4xwXTvgAiUje6t5sr3E511HK37bBNmn4eUQWMuyaiFNFyBAsC9dJcrPbd1PkNt3uZN2284JiJfNU4oPfr6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w9jkGb5kcheX16dV8XQV6gjwCKPMkU7TEfNLLbXznN3sqAktfjHWC3kY3N1VH7uKWaUjzRmbHzvpy7bbNWhdgaH",
  "key1": "3jkoNtoQsvzC2oG8Brn6Jt5uv4dF87Tb9GAVKj2aJS4ZinZTRBz9W7ekdcvY4V8oS3Zi8VcicT2mbKkDiZte8Rpb",
  "key2": "2EHHnB5qneT7N3H1JU1SyeK97eKP4cE8Bkhmud6oMP3vyigDPsr9FBFZ8VFXJPpGY4MFwabeiCcdjgx8ujg6cTpm",
  "key3": "269PqABAbFNWBWy9PicUchUXkx5GBMM9zvVPtUERd9XKnRtmCrXg7ksa266YrNdaSDG7Q6e4Q8guUt8wWZB8kwNH",
  "key4": "4spZJZLY4WfUFpjxpQyQV1dddkc72zFmVhmuPVnb6u2dc1pzX2zc4ezW4aAxGtGoGKuyi1eB42AGrfu2Q8uGTzMk",
  "key5": "4GzFFPHjMHrwDTRvijtVs1sEmUVNuneSbtDfMeG5SA1Uhax5rU1Gi7iaXSPxMWSGVqi9oh5yGCDec2izS5Ry2qWK",
  "key6": "5StxRALYKfe4sLcLab7jUhCCAryu3ggGy5YK2mvh5Co3p3WHnB31rdJnLwNgMCdAz6dK1MAwVpMCeMKBTBjg1Cxd",
  "key7": "5nMHQMTuKTF9bRx17b2cjU8SxioKQh1iGKnSN8im1q1PouyPpVB3zFmypGRbZ7dpBjCPgZDtS2f3XoUPLkBjRZ33",
  "key8": "4VuNd2QgzVytw5xurmu8EaANdSCAmytcRk94qf55DNNGZ1EAJKQgihZMZVqJK8V8csNv3qCQFskneiPBekrfHxXm",
  "key9": "4TRbuDPSyMDXfgbM6xhgzn6FGbQ3qsnxsxY7GGQBNiRHDuHN5ws6cGJA1QwiJAmftP9NpNzgg3idBvck4fMMoKMM",
  "key10": "2hbiMV8u3j7QmPDy1WLEaadntV1vfzFpKxBNfCKx8QSc2LPgE7kPbzrDUyu57QfyyDki3kGsDsfasNWDw7iQ7vAM",
  "key11": "GRTdRaBt3yW8h9Z1mbYGq1Uq8DthFh4eD3YpZp3kfRvoUscvojhokmRJTrGNKzd9X7kZ3Lof3BmwcU9fChfcvLS",
  "key12": "32PXL7o1DndvfKiUuKw1APH7cUxwJpTqfbiuUJZewKreTJW7iKyHXrJbS1qNGCohh7NXeMtDbnnezLqg8hQNKLRC",
  "key13": "2zHpiPRjpk9WitRrSmvhiKx493fAnc2cuMsckXVT4c7KccpRKDieVjHafaAYcWFMafrDx19WebbmpuYudDz7HRW",
  "key14": "4ZpL4vYy4FqwAvTn3Fv5WDkDNB1AShrTh4Ahg1dMGyUqNEUi3yUEy9fzwDnZFvfBwrRyeLkeNdDkgdMNeeY48obd",
  "key15": "3Agv8UuSJr2VdpLJFfVHJapwD4PLmFX6JznU4zbzZQ2ntM6XuyksoojNwh63YdSJpZJgn72Cf5ab1cZxKrGerSed",
  "key16": "3JdQAgBQ2wxNnn5CEjEb993WXp2heSHxrBWo1m48dXPVEpeBw3S4dLMUf7Ki6dpHNS4TsiLy35LWz3vpfxdG4byt",
  "key17": "4uJAP4BzRLrbwi9xo6GbiCjKZ24waGUgFkjSTaGQu9spK2D9FvmJsrq8nMfnC6e35QgZwoCgRYgqdQBst4MxZbmH",
  "key18": "bdsqxD6egZWuicX6hVUBi2z1gsAgFp3G81tNu4qcGuRBymgGgsLwF3vTXsX12JdxPiyVRM7vTVmfwCTCMPTZwVP",
  "key19": "34bhRLQzvqYpHmE7Vko6fvBAvzE89FHsS4jjEzZuCqnTnFCzmYZJMFe81WcLHVLUKF1B2dmv7fQcZ8gPvFwdthnZ",
  "key20": "7oGUsdZcUVwYsJcrdvyMmaxK6RYmVLD9sKjUnL1GiqgtwRhraGMLjUvZckY8BKWmH4guSpcVyUrkiy3QgbnQpCM",
  "key21": "5uHsfBubF59HCPR5z5uxfsGY8Pw4HJ4SorjPazhyQFcUGB69Nuc8CUudWuZXr5Cs798NVj2igSaKcuwfiVcAyrn8",
  "key22": "3nwb1PKGNEu81t1Fy8oxhKLyC9c5wc7n9xqQ7gv5PdptB1sD8oR92GGSHfVmjeEkV1itZ8oN4JUH1UMKT85W7CQ4",
  "key23": "5EngzMUjXPSxtq7aRMqrdMjj4R98S4WdBQ3kFe9v2hnE7UdH94Tf6Qox8FJ6zY5CTFmuyR35QbSibivbnaDRyzrz",
  "key24": "48SD7XKyGgp7NcjhbvaP58mBASThd8zySCesHPqXdx1T1WamQiUxByEFRfKdPwLmwPEg5UKqHtAYYH5PuDHamRS8",
  "key25": "3KEvithrasgkMn5quVx1ecDRUWZLS9xsfbi6FLWDPZPwyAJxSbhhJ2nuZR2VGqRTuEW817Po1cYkjEN9M1PD9hXP",
  "key26": "2eE6i2wbdUDnBAL8QFtzmFjsyr1E1XGf82DHCTv928WkFm9KTrL4zVoCP7KzUhEAn3ZwjMpaHFHQdpWwidNzcoHK",
  "key27": "5SDsjwycxexQsA95TacFwPS5oP57PTu5nG6GCWKT1xewQBpaYgLkGHf81gw4nT9kReVSRkXtNTaB8itmKpbM67zf",
  "key28": "2cAQJhobmJmJu5RwVgZtp2z9zf6b4PYGE92mQEobssnDoguELibM2GaeVFLftqSeHcKm6tLtfuNgkzzxcmvoEq2X",
  "key29": "3PVbEMwaqyz4Du3uVpPMmM4fHF1yaM44Y6Y3aqns9M6gFCSxeBSNs7Jy9HgXowsQGJGosSU1yFnTca6NFcLTwgNX"
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
