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
    "3RRPLs3shCaMcXUGnny8o7mgoJB21JFEPBoJv8buidDceg6HWKKVkNdCqdcwCRaAxz7J9CmjAZBddVf15k9a91yN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "766S4n6pcn5HHEiBVrJGYCfYHgJgxGsvMkgrRsccZXUAh7MLQ8X2EhPMQhjqxvJKcWKkD58u4Z2FTxk4wRuBQWg",
  "key1": "3dY7SqzrvuevpLkCzfSLqyXWFkURBYVfJENtVNBQofpwSVqa23UWckddYprkSxKF4uP59acdhiAzpgnGJDSNqHzP",
  "key2": "4JeZB43Mo2muXbMPvx5qdti2u35ZTmGgRaFY27KT8EdRk2NJDpR92LFSig4QiFJm1qyhmC4Yyg6oeqG7VGiRveoW",
  "key3": "4Enxx5tY5MpndtJkehntApJyjGMx348DM5FQFQn1YCFRt46fybTYDAyqW1mrqnFAXPi23JSErNK8nrUHFVxT9sk4",
  "key4": "2hp8rosqv479XVwaoWub1qrHv35wVVmcYQGyACnUcJEmusZ8PDxQaE5bDRR9n4kfm6yecfH3gw4UJrT1cJN6stL7",
  "key5": "4QD5BhHJHAQ2czFAa1r3YewsX3ub6Nfwonjarja7DDLmWpi4sRD5ARguSxsoRoepjhD3nhNpnAbu9x2NkT29K8LG",
  "key6": "2a49JhW3SuMLFwpo2CazXiS5PMqZK5j9zrFdJ9hn59n8rC4MX5gCcpQGRonjTzdPtZPv9Bh7yv1sTqctWMWnU3fN",
  "key7": "5QZz5khZVCELTx7BoQszzUJmbNdTZ5UnRm3uED2paHFy3kBHffPFxHBbwaypyfzWkpxo1RyWBEATMFfFKCMUeDsr",
  "key8": "2TjGkEFVsKfsiERX5eA2yEMW69pywv2BxWMYBbX9auUKX98vkHHDHyxkkBYHGQSPrbGQqZNommSDBUcYckPS9TzU",
  "key9": "4zqRuC6YLawVaqr7tHrc3XScbNESx9cRJWVeEhs1zqEmGkefd92ozPm5bFnnMTB88gzqStSEsGhD1CaRV2rXmbCg",
  "key10": "4iDGxR8V7sMjBaGE14z5EAeVh3rfm2E8J4R9XKkTfTWY5RrThYcbQkKmRc63msyzSKvLtE4TDepyeLCn3qWAhxjs",
  "key11": "4zusCKEgjSSCVqS8FbVqhymRiYzrPkjBboV4BsgBgTuAqv3o3gW9oQMx2SSgtfj6nSAB96zEguhATUj4ZV6aEFNV",
  "key12": "2voaDBxxw49LtmTp6sSEsb47WXUJtiZCi1C6b4CiookfDJdFce8Bk8xg9B3jx3WLVDqY7czSGhWLPUL167mQ2xkX",
  "key13": "3nHmDdCKP423bfFS2F2SJ4rhWXq91M8jo9QfTPTcKMDjHm8CdrzorVmvTmimZNM27YMS17jo8Vvuu58UHKK4djkT",
  "key14": "3uFvFi6cpYVrWaCbLtXio4be2kj36Wn42EdLrrTwZ7Ne8GPgTsLcnYeANXk94nu8oGrJayM8Md4ZtK4ZBfcgh4Yg",
  "key15": "458wJX7SqQJy9iXbnk4TJsHoChEsAtFNpFF9D2jUTG15BU5hqgv6TEEeQti9Kmup3egWtcBoBwLwZiy38qupGYVx",
  "key16": "5MF67qTVbA4sBKVwrHQafPKtXBPq7p5CJFMUK3FdaUpnuFhUu5uG5Kb1LZrLat1YtkQGM7iaiHNjuQbiFkWEbrNw",
  "key17": "4QhqAtLFj64beAgjWDSsCXA17yCCNn84tFRTMiHiRU9J7Ho1gD4DLY6obc7Bg3hHmXT1PKvQkBYU3MZP6Qj3R2up",
  "key18": "3tjqFUyEgmDghzyuuufHcdF1v9dNEuMQCqrkUm2t4zZuaHr6h65LCPZFDZvjkG8nAwf1qFCpkKS25GGibn1iXPZM",
  "key19": "4YXWCHw59HwaskdxnvirsjEQQwjBk4T3rWZXryufQ4MCUCVrBFjQcf45V5EEwvkZAdeRSpt18o9n7w1JXKbrdgWM",
  "key20": "2eYAV5dGM3D3uCSjaTAJJiAf34j63zMd5WqZkrqK7VG4jy1RhJhmHDiAVs4CKwn6ppCdnsXrc7RSpxhqNB7xEjJn",
  "key21": "bFG5K1BVTW2M5jzb1v4gDZye9KTX8qoE6jJFRi58ekJxL7jw6YAQjaVixKmBPNUSdEJTq4oxSDzbteeohpy5aVN",
  "key22": "3AmGVYQe9MNYzGut5aBSH9dzNKiBwjYzmNteH2TAkeSTy77VWytPzEFnkVzGxT8FqvtHARmCWNChBV377JGLhJST",
  "key23": "2XBoaoKNhSiTMxoxBaX3zbaGgsRET2GG25WzvoHtQywDabtbFYHfBjXKhEhnczQL8hR6k16oo1u19bZT6jFSiR9K",
  "key24": "3c6p3duTBWXq9eQ4UWDfqbanSkdcRMp3aDdzeq67CJQKLt4iqKJ7w8TwNgpL48LJR6zohwqAwWgg4nsXujxHq1EQ",
  "key25": "45BezKv2mT34Kkzqfvv1GKigSLFyD51V5usFw2nZ7fX6RLZhHf53hssYxZRTMeFgCCsFCte8XckHkDmB3byDW58y",
  "key26": "3gYb2WTYbHQgTehcVPdmptrPesuDbueCteJ7oFYbxraG8LkcypPCpmseHh4gQ2KPzSPhhmf9CMNmjkdFEvRtMNAU",
  "key27": "2Z4inTpLe5Nhnkosg4rZXurVPQHa3RkxFBrijHSQLwohgyF7ivkbxDxtbjb5qk4bYCvfVuCmo4qSDuKHSw7evAgK",
  "key28": "4HaQ3pZuMbKdAfXdWjbh3qMYqEmFy1QJND4Jf4a5sBfeuPwJQ27MNURyQA2xFJySvp5ZhStC2BFcP6rNTYk7pJSW",
  "key29": "634RrHfbLhDVqjHQ7FCwJ3x5ciikKSnhrosDxGF3Qw4BoWzxak71Kn7dL6QpL4Xzqre2sh6kuANo99Ngn9tc8YrF",
  "key30": "24v5hsBnDTUx24uwsmMDBnp1cAryRt9iAJ5aoBs2eUS9dsJQuErXJHkYwJcpM2sEcKveqibLtVMVoNgEbK5AEHzs",
  "key31": "4TmS8rh7jjZaF2vdEPUr3oAyCAohWTM9UQrZCxpqbX1edvfCYgA99vdPT5xawLo4UyD9vXVQyxveRRLAYACUCY94",
  "key32": "4T6kNgvxqBKkKzYNfiksHPxp1TzwuSqNGBd3ZbyQ5MbmB2z3DpcmvxPPT8p5HFYvWoxUCh4tmadbAnzsg4SNMYc1",
  "key33": "4eicBUhRzXTwz7Kc7mNomPb7QqUY6mtHaybxowb5mQwshJ42Bi4myQxH8mSezKNveWroqW5VC7o8DXhkR44J2Lnq",
  "key34": "5oemiFz1FHm9aNBAuGJYrwkCPXBKtkefXFXrfY8xbPSLUmZ4q4mgjT2TMJ3H36x3sL6c8RuY7snfV6kJUG8scxxA"
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
