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
    "41JkDTqYSiyWjkL1xFRrgauVJZJFTGXx8aaMc2iUvmzbvGGPmH63LEsL1Wu9hY6C5vmaXHfkh48ttWmW9jYGS71y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ddicPRT83kXUsWVurRE1KZKcKUYFfxLijp3pjbXQyCtqJMPwpE8qm47gk99XkTyjrw4WeX3VAdnshDCBNN5s96g",
  "key1": "5wqZDLiboXYTzyB8kp3sGcuiX5CfmTZ6R9KDoonS1cm24U4pL3qqPd8KHRhytvcjnvcQBJmiC78agcgRszHUjq3A",
  "key2": "3VyCLMrXkcK3Gdcbfvp2EuWZUTmp8Cev1M9LhWJsWJYE1Vv82xLDoxCKmyaBuFKSJSJATyxEM6ZkwYnUCBkenPRU",
  "key3": "5VgndoxmhkVKMSFzbPVgesQ2mdEkDBH7N7BXUq2QsYEn8Rtkh7YAPWjYUEkiD544n7XhzTB1ocnaNLkd5YVem2wo",
  "key4": "42pytezxnwazciXhjTqF5hh7hX8wjerwGV6M1xjHeiTp7XreTeZVdqh68BQ9yNB84BkoDZ343ASahkoftgqFEFMu",
  "key5": "5eiKVnwWSZFo8RsZoGrWNhGTsjDudVchxKhSXfR4GEcG3F6sYqvjW2d9k3mfvuiGmFgS3a6BHhgaJVfBiuYncmFR",
  "key6": "37WgZw3vvkvZe7TgRLxsykW2e9J85y9xSTpg3afNjrQU5DuM2qPbpV14ZoWT69opeWKz62J91rnqPvmSRyMuyLeB",
  "key7": "2CY3n1mbp9hJZ9YwzsTUcFwPhHMQ8gkTDLAFqwkRkyB7fQBSh6rj5twmn85xMXQ7ejZKDaRMeHVo9wekvAtVVXJM",
  "key8": "2CJxMBVPjhNzdKpV2tqE8VjAFSAzQJ9yyDLyNLEAP5Zi11jihRu1BDoyd69aXG72nSLcJPoosyifPX7Bow2j89Xq",
  "key9": "22DnmtmoPyq46X7yq8BEPV8uqWAH6AEC4ynVnm1opMfJdLg7oub3Pv6DSzvqjhzGjaitfWZKkS67SqfB4AXeXjn4",
  "key10": "T8Pa6K1gLwmKmKHWEYVhD48QBu9akbB313EdoxBkkX37ELqMvtfdxHcp9AvCDw8qbcVfPy5iNDZin6V2YxWDo86",
  "key11": "1gWA4d6jwRqekwVKr5vtB3qh38rn2L8fho5kMiTsoDdeKQW2Fx3fzQD6oDBM4x8PW6MLQEhZFjRmb41fohkWT7H",
  "key12": "39dzzssLYxkX1W9EWv3v5hxyhF7WVk7Xy4eFNiH8WNnbDEZsViyw4xZ5Hhz1LGwF25r7GJ7tdtnFfZvMNryCDTYw",
  "key13": "3vu4r7omDJLVuMCzSbu9U2aMbk5feSdn3FSg3a92iNcWgbsSHJpy3JaQdiN2Pp1ox1CSRxyQxCo9FaqWY9bXm4Xx",
  "key14": "5RLMgTjuGDXqXSnqqNEGCCBBUqNbhGaDMTURfaDEzSa3TTLRKRya1wiX8tq6rWAV5urduhGp8vAZoCYi54TqFeBt",
  "key15": "4d4aHdFvPE7reKDkFmtF9crSYapAMNRHzvv6Tus3YnmvbGsnBESf3FSAAYdi2BMvYB8Fmom6Kd6pzqNftEtfEzVt",
  "key16": "rK7KzrydTokN4KdMgjQUSbrimh7JqMNHMSjhb1QFDoUm9KtCmoCiRmopnfNnbiTs4EAytx2A2g7HA8MVdLrszV6",
  "key17": "LRpVAPAuJErfZ5YN7U4gRq9cmk3mEty5JZUCGRFbUFYizvVKMF9Y9YiCJ65B72668KET6eEqdaBrnGnEC4KNLDs",
  "key18": "5AxPWi51CaX715Z4a49t46f5CHGyt3hng4y8TBQxYdCTdHk7272hXnf7277fDu4xV7RNj8JhrbdzZ2PUSxNRt4Yi",
  "key19": "2Y76jd7wy7VGksdjxZ3mC6rigVCy7pnQmPeNDtNeLuhqdCVA11rkjqQTvuFkr5AtFPspzjJU2b1qiThap42As9e4",
  "key20": "3eyfTAZR26G1YnjAPum1jcMXggCxmPDjYXbGPHCe44Hn8pq8ui2omX9tsKuinJ25BgbQfrHaRJA4SW4Bq93pThC9",
  "key21": "4KiAf4aCPbGW4Xhgfq1UHUjw7oFSjzqETSFEgoetkRr5d6YuiBof2eygLQagSxfi73FWP3Z48qo2kgkbzeRudKt4",
  "key22": "5t9q6Z69vFAbym7LEtk8b3PUDEKHsBystV3GwNdN1Y4FVi4JUWJqr8DKLcQnJbxciwriBjc2R9TNTeiFZgsYMkSz",
  "key23": "2wxjcrvcj45cAqcsJG3hZzzNCcv9DXZ6qSm6FpissnLGpApiHYb4b3yeqV3tqvEbdJXJs4sCJgfESJ6iSGdRN7US",
  "key24": "323QcbGj2mfpzGgyoqhe1BX9gnRiNYQ2daRphnL7oLN41HK6WnJXQZw1pATrQB2o9Be8FH4iUMznC567yaEcYg5W",
  "key25": "3TpMVXYYGP16sPbGfcYo71LH6YhdW2PZ56rQBKt17YBefVVR7oFvaKtaPQqyS49BsL8UjPvGmZpxZopGx53KjkyU",
  "key26": "2iffGJNMnowfzWnskwZVCtWktpnazs7niZN7HDQH5SnfX2Gn63VX2eFUQYqGnJu9QHD3uRirFMqQpLDXdWKVS3UL",
  "key27": "KgVTh352myoHQPMzx9zsSJTh2WhokKqxAxK4CL8XtTSLLdjHx5VKGJepasiB67fNgufrKAVaujPQMqw3xbeCq3z",
  "key28": "2mCNdBXdFi2XLZPVZvtNR3Gghuu72pWkj73v1Coyup18mNaFq2P5PDm7kyzC3KDsgkgpWZmB5figuFLrhZ44Dvs",
  "key29": "5EkGB7m9GyAmwXs5Pk3PoPbmQaYJV3iKncPVS5z2iNDJH9TuTfksNyDrGnPz1b1nTSzN66y7N4sdpY7XK77MZ3GF",
  "key30": "4j3dWyN1A8p5fMmPPEYWo7QLtACHkbboMFKiUCuZ4JpaNVXFPfrwpi88NkfTkaaX3BXaCa1jHQyoRmmrxDfD481q",
  "key31": "3jBxSTh8ki6KYqmeeapAdz5raYFGn1EMhmPsQRG1Zr4pFiv1YZUd4KxQwuj3nxJqRmtsDpkQUy1WLdgYcap8fiLo",
  "key32": "3NEtMXWkah1MG3uQGdjVRRg5MbBq8E6zKkfnKqYXuwe32RUpErSVmtEZEVXYnooqS4nrdg1wn2m2xK6f2gFEUWA6",
  "key33": "2mthBLf423woNU8UuAh78wUVnsvrDBeceGmdb2D8JMCq368PNsSBZmNbNgnwUSoYrhorqaXtpHupggH49vbUXbXw",
  "key34": "32VuRnL6qycgqwXyyu7UpxryGcWADw1LdsfG5adMFD1fFH1YuxnDpuAyqf9Xk1fyQxxhs6bfDhFkoE1wMT3mCP1Q",
  "key35": "2Sc9iP1sXY2Sj5JLvPTtEEj2EUocd7pYhiBPy2h1gQ2zJLNmYuovo8iuxQ4GxSZAfeGi9EkH6MWGdKckLTKf8jDM",
  "key36": "K7S4qMLHfkaqukfLzhdZ1v3NDDd493dgFeBFyhS1GayX6bgYPiD9EMBHXUNSojqeEGXPPdWKQhCYSooarDPHPxm",
  "key37": "33mQjbUaf8nNUt8JyymjspTLg2D235GTkJxVUAA41u2GobmqF16M2PKaWPnyBtPouV4p56S5az4jDUbn7htGULvp"
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
