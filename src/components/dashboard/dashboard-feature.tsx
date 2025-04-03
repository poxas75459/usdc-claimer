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
    "4SRVR24vtjr6kWbKYEuUNPSsRD7zqpNyQLW2NQdR2k3zaAdUHjw9gh24CiVVagzbc8soQ11quGhqZm4taMtD663F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47LkCQCczojJcSEijrAAigpK8Dj5MipmQKSSAzibJATAAvo4C5g6jdYwJkc68bCBAVmAu19trXZTZZppKyNtv4DF",
  "key1": "jeP73Rj87Zc8Bxf9ZGMdDhRcPXGX1CRE3BgK4kBxKVAUZnPZB8wFC4owGTG2CcMK7mZQqLTC6pPWLjAqw7QBaZk",
  "key2": "CJYbcA98T1vKpAEDri6CizXv4YmucrdKbxh3MFe7bGoNeC9uoqXZNvcW3L7QtUwKpgpn6q7uHmqduKXMjJSJDf7",
  "key3": "4Q2igiuGP2LAbxmh8KjcfR6AiF7QgXaqY7L73T2M5tocM6RgTyh2asx5FEJYHJ8DJTNBZE6ZK2JVBJNN28s8RRch",
  "key4": "5Vn9czZQRkG6P1q6GEMpQDXPXhd7REqjrQVbrceg2jiZ8bS3hJeyF87AtxfrQZoBag77AFv3meBjNgqbh9KuwyuX",
  "key5": "5Srd6zkZypwGi1XaWLUfsePfUpT4GerK99DmCJmLBPGrR7ripyckwLsug65qdRSS7u3vqkwc1udawjJzbP76UnyQ",
  "key6": "3ACVxQVTWbdskzQFu4wjxxFim1BJCQ3ARckcSFGefDycaAT7SCacwv9QzMeYQRb4wRtJ9JNPRc9Hhqe6j4Ne9o9u",
  "key7": "3FHzkSgRqrmhYkysi5qkqYrg8dJS9yaEgmc4z7oLP6M8tBfak1jsViL1J3PciGcwyRBnpHW9v4LXtmvBFyvYZQyo",
  "key8": "5ipsNAb5pA4t8YPsLdrVrLEcYxDd6fKX71ZEpDGZbUUmN6TZDUPgVpmuFNob4FCFWr3JbqnRoyrPBiRRRTSEdGzX",
  "key9": "5hdFntvPzZyJv6CCSjS3J9FdZ3ggxANLrvq7twFvmwvpQmVyGoZ8HimrBaKenqYhndVngLXk1erMcow5Yko4wFHJ",
  "key10": "2zFmmA48nKpA1tzUHGGECAkFmTn2CtdyY4o6r2XpG8biCz4JTP2WGPNyz9gc6tLujxD9uUiHxYQnWXMqma8sJJ6n",
  "key11": "c2CdFBqDYQL2q7QyfX7eQKqhZj9areerbzAhgJBJNA9czKaPhWAUyAF5cmccqk4TXNcZFbPrzsB2qE1GNSCrECr",
  "key12": "3Z2uKbi1PYAothzK5SJqH98GGroeygYKcUeDaVbd8Kbe2mnqzKQYweu5bnoaUBwswokoiNL68JXPiHBS73n93qFZ",
  "key13": "37Ziuum6ZpUV68Xq5mLsfgic9gKbQP5ivBmgjsZVcA2K4GGjP1wJggkdhaVP7wMa3DbwgFa1aGEkbC8JNBVyJuiD",
  "key14": "4bBghKZUDCMinAV4dhfLeNvVpneUkGmttGNfWCEpzoUQiCjKpFvH7AAE9LH2GMFgTnjnqQPe5xLc8K7xtff7F1vd",
  "key15": "5PUuhEQBhMfCoPs1D6q7eXSa3evQGa5TTVp4Zyxaw4uPjje9xpgG6YemmtxxQn8p95q2VTWWkmvGHDjNKKYjoVv6",
  "key16": "2ARqoQRXHNy1Qu1kKFLGaqxm6kNEZ9iYfKJJyohDSP24L3aDiu5b6v2dJZtkCGBLdf91HAb7YWbnKYX1bPoWu5uS",
  "key17": "55K7c8q8TQtdFirFzwaoGxAQsYRx1aVKjAvKctbQmJx7BvayYjfuCgAbi1ZZSn3D1BNY5dCpdTgCnbNkCpdz6Z1y",
  "key18": "4Epqf7qbV3g9ntAJiHkxZPiYrTvLAfPRvGC8yQfgxUFusZ9xiXsoWGETA1quQu75tP8HCWbhMyKFtYXmZVrXw7aD",
  "key19": "5NV9pxFFbxgeShWWeeaYUngU8etUzhUbreBKP5iwzrkoE2D3xyeDUSbPLQcJR3hZwUHq1RTTvPqBx2K5U4LxUoKH",
  "key20": "5vvKDdN7cZ75wTCeSGzLb6fhzANrFNyxb95XDabbPBXA4cpPAEUAqSpJA1yDdZ2nf8c3QxyeHqNMLKmc8YWFyAgf",
  "key21": "5DK66AJcDkQvFvyN6z8ctbP2iEUurHUXFEopFY7KHNMCmuCSt1ANu53Cr9KD13n9xUPFVeRmDsyU9SoZxiVYnZ4M",
  "key22": "3iUm772WHF2n4rKFvdEPkiaeEsdjMJu8HCGFBcwD1ZJw53Hg7JKwzR1w6Mgz8Udsu3oNCGUm2LpavHvkFcjNZwf3",
  "key23": "5d6iXxgTuHcLFYhgyPi1sMjx2sRTXhZxxFv87cJn4Ni88eGt3wcsP66J9AS7thZrmyXCEtXHf17VbCDEmKFh8fpt",
  "key24": "3Jxf5xihKQ8MSgBoX6EkmYAtZWxCTBSwstL4fuuVQiZc3q56JxLhhMpd2sU3kgqiafGdttbYPiDfScvZZWAThEKN",
  "key25": "2aey1ptvF7pF2p649Vp2A5ku5aTv8L4Zz9kuoANsfJDvY5TB92SGKKN9aBVM6L74ZS9eca3xETYoZcburr4LKVRU",
  "key26": "42yZCrT4k4CyiCCe6PQyFUZ6xs5R6N86xLEymjTrJLF75X6YmStCJCgbWhW2dkDthcdg9NV7fNWx4L4kR4YudG5N",
  "key27": "V1DRRrvjbE3xXdnzUSWhBtixgTGQahbjr5GemzMenid2yhh2H1TaAsLpjBr3XmwPaCqMAUBwjEyCkn2ckTFfmAt",
  "key28": "4kJkKMVYsfFHZpCfnNpnzxx1Nq563ThqCNhDbENps3D5Yxa1Hz9EVNjubzyatXnJUAXLBWGdxhYZkQEfkyhiqxNQ",
  "key29": "5MGUWTAZLowbr563DqiXc472DsdbcoLM68P5uQEruFTK4Wun6wkqqpshsEhoXgooHitCsRWxnckHWPbwMRZtizvg",
  "key30": "5fgwruZxm6jppZ4h8qDYNcFuu92RFzw6U6oa6qxkoapQLdjySa6yipumV35h91vrGA2Un3F9PcRnV7wHWUWZitS3",
  "key31": "4seBdMhZz9tNnJCg6ZnuvhzmkDiRTcaZvZJpcSa8cSpipeb1pWznXJ32dXfTNgPcAvpJkwcxHGsRYLShLH13tFCe",
  "key32": "63GR6f2N9dbw3y5kRNBmZTLbygkTGbHsrGdNYnTv8EeHJXMR51NbGXFMuZnJzWf4PpsC6rsGxNexoupMK97bBvRa",
  "key33": "24rHiCxDfaZ32oRsxsKdKYXzS6Xj3DhA4SGnKdvtsrmEsRJLbcpo9cifei3Mo49v8iGHyZWzD2wfucW8AScJRtWq",
  "key34": "5ZDAeEsme7dk6g149QZLYXwp1uN5wCrtRcFWr5XeCLt7Ke8VwG4zWbmfaxrN8cTstumxBxhGp7ujgjcRQ1GoDM5F",
  "key35": "2oKUKkDu9qcKZWrYFPn9VWc9kKZ4vD2DdH9iFKf7Beo9rtaeWRm75gvKhoQVXVLdyBUQT6nrZKQTogtCjDoEcHsK",
  "key36": "3KTYcQU44VMGk1qPhWJZua6n5ARYaoBRMH5dne42458RFfWrxGc8hqqrnMLbBKrZcCYeE81zcRHb8ijNVimiu31J",
  "key37": "2w6353E1GUjBjSedQu4UVTWrQRmSo2gabBBVZTDF4JMXA1mpQBwMuSpQq16eGNkHpDThHeanApf95rbZUHD4DBgp",
  "key38": "52cS8pv6VSTsExmvbenUeEEPu9uohjndv5u2nS8dSLKNzLZwqm6qxsWixTkFALVqsXxs7sU3SLWLC8gyorcDVMaP",
  "key39": "3FND6kzGWgR6Ct1aWFrJwAiFFRZ9p1xmCqvFxJiBn6u2YwbaSnitUHLPb79RchKCaTL7GxCY9tnyWnqY3CBtChsq",
  "key40": "3hLExSDp88tSumZRWP7NcfrD1UC4C3gC3LbHNuPunQju3mV6rPmXBv1qB7pbZXssADnLa7J9eWTJcDmZRJfmRLQE",
  "key41": "2D6CqQr9pvsFVG8CD5hfhumvFHy8dBaAvrpDaMuzCKtdtXdW5X37xwGc87JgWquPtvN2FHdDu26d99ndaayjUqCH",
  "key42": "5HvEKJifNnmH7uurqDDNhmUr2M2tugajwimrBdEE5ZfR2viiWPh9oYPMW4uc7zU54mRSjbPn7TUxHyaiFeSvPT6q",
  "key43": "5ZPoxhRboakEc1nr87ZSeiQAnsjXL61sRzNa6W4m4RkPGEn9Za5Rj8N3ca6rrPJvc9jUfQhN94qv8XKRxaBGsFRo",
  "key44": "2k7Krsmd1L5vFQjwYNiJdA38siAqitPjoG1jAAW2B7Twgz1JwDQoW3vKyFjU7Lb6pK7tdtNZ9U6pAkxdWMNezLc1",
  "key45": "bWGFADtMSHwjj8TqEUeaYUJqBGFYNjaD2C639DfkTBZ3FPNAvN2kMyy8uBKE8VoHnte4SDigz2TvKs3A5YG5utP"
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
