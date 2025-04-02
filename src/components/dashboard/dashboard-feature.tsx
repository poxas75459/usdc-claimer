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
    "5QtbdR1EfMwtG8HxyLDkaYpyuuotzinieygZATMaYRGt2yaGPfpiQ1AioWqn2dJ1aSP8jJY57jVFT1dF4CtYT18E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gPsibia6EX9txgVjQcVbJ2CuN6xCa1LdAkXHhDj3wt9B8MVRd36qybH43ZDy2FbgfZ1gSWJFMjGDCXCwSWEZcKc",
  "key1": "iTRxBJknwNj21EU6ZwX4rzetpd2oFin2yHH37pcHyaBoK8w1hBjh3oNrHMk2nK1rjFp1Gw5PJxqHa2nAqsR4yWd",
  "key2": "3EGcJmWxak3xTSnbdFPbvZx1hsheSbfDhUGVp2dzxJ3bbvRTBtSvE6nhcxxhuMJ59g3psUsr8jrHxEf44czjWQx7",
  "key3": "3RneUTVDZrx1t5Cmj9L2r3mZydum15gPqpeKJuABL3DyLYicZ8koiyg87vNKvt3F2b5biSh5usRRJeHtBHQVwWq7",
  "key4": "124UhncRbMXrfu35SAdNwXTbGxZiU3RwDr5hd69Tpy7YBBRcRT2L9pb3v4CvbNPVyZfEFcqCF9LyaH9mUoHq3XKZ",
  "key5": "2mATvQ5SiSQQqV3vUNc4ZQbSKScguhiZhCeEb7qpnfmFjDdjJhRR3Z6mivEh8WK1VhuMmFgFK6Yn8jfb2s5ptRub",
  "key6": "4GTMcVwrY5AvngKjxxfQscvcbrwRL55mWKitE5iUnhogu35mmJ7VUFmFc9DH7f49rLiXVaGugE5rVCgcCoZYTuyS",
  "key7": "3Gb7Zop9rbpySaqiJrUBeiyZjBrYVRM14VDhmH4vfkvdX9HGrdKk8R9YkFTAEmEoUJSwvCPSg1p2mj61pfZc6ym7",
  "key8": "4NVnTJqkYJi7WFE7iwXyTp3UimJYutDTUMNypDokvwW6MvPYjypgtTkF57aoKTP9UYEimHKvRFEQ4rdp82pLrMJT",
  "key9": "5CrvSyfUM7Lrp69pyzq6NZorSyiv2h2w57fLGKebte5VQVtgpKZsQtUrjLo7KrFHxZUKiseHRPjuc1PFzjY9gj1L",
  "key10": "3fpS5qogLY8aoGWVUvnWzvX6VbqdgPfeMkG8UrMTy13nHfTjLjfmSaksAmSDzW5swLqMjuJZuRRinab97HKaMZ4W",
  "key11": "52vPdYBmjW4odaxj6nLJsWYqfuQoYnJ48HGoYSiUMCUunB4WBf9A2SrbR2E34DrtTNV6rG9Ku18Aj62qRFtuFfN6",
  "key12": "33rzdt1Lmf3ebEvL7N5NXR6uoq1RLKfz3yMNH33L1QMsmMdtQtf3pjtyFoFhHKGarqPSntUMWrk4UXKmEc3jYUKH",
  "key13": "57KZzsFrZQrLAoPfo2Zn51yaZCqd6fqWq52ZQaUYKHPD4vJxjddGs8pZuTZnNCEkqNYny4BGmg2Y1xv6VECFdTei",
  "key14": "2JGKfgq1ATssyXyGnwy9VyyyZQFzjFi4wLVXZPsx7d2PP1pq7WiP2wkk6tDCxJy4GLMqvgjoRD54zLWYiiUVzLSs",
  "key15": "tuzGHaNqkExzHmc2eZDvvjwyrJKWibT7wwaNMRtyMvypTjJY3a5zr7NxpA7XY2V7R5GgJTtUemifSRMRapCnxgz",
  "key16": "61HXtaYrR9tAoGYfW1UTdwbPXejtFWiReB8L8WhakCZjypQHzZ9JKrEaf4xV694ki2AEiVUKtn2JJ7NDpvfGAHq",
  "key17": "77h3Sbd4RCTtrd9wF7RF3jHA8M4b92deJq1HEu8B8cwecKohq2WSU5K4v5ujqmq5qfkcAtZfbDsCxJdxCdtjowc",
  "key18": "5b5RL75oCPCkJkJ19L9MPGr79EPo5HEVhrG4YYS9cN31XDwaZLsQ7FmfqsCGcwJZzk4CgWoZSnBLzq3ucqfTM9q6",
  "key19": "2LwSmq9GfMszuMmTvpm89t2smmY2gDFN1EGumNcoyQBMwZ3YKbaHAizvK5qxVjQF7WqgaDTmoackLN2ssWFgEuwZ",
  "key20": "5GFYLSGCUUtmwzkKLoPypqbGdEeUHPE6oDVQ4JoohAEjnmZLTGsEgm9JuRMTuvxb2wcZaFPpYcW3ri7J9PjkUAun",
  "key21": "2BrGMVpf6SLiQohJsj8XRNjTq91MLG1NYLFagz9tZtUyYzHkwH43Zh7SgFuR8UbrEQyR8zYWRZG2Z94moi6fgvWx",
  "key22": "4vRSJ2bprk43HqDskviDmHPWZqPP5EG9Lg49djw3oEaMnT5NHkD3qEzjHJ1UgnfL8GyCDJCCqjufQ8pBWCD3ZKsw",
  "key23": "49UixmsoHhAhUZiznwxj3gHKKsfPX5h4mdqnCK7JNyeo5MzADtYJiJji6RiGhrDpjRszbe32KdtrSnYRf16vLeMM",
  "key24": "5C8V7oNxGEvYj6oQrBR8gfZSH8vWCXWYV3kqB6hknZtHWLV3G7BF5QA3zkLMHQMxTRdbUTVWPP3XjVUYez2snjMk",
  "key25": "4E74aaTCof4EXmjo5469Kb6wVs6LQUmUZktwN9bzje9NE5vWF3bjx8xQvi5ru9GEHLivogG6B6GFVX2aGjNKzJ7V",
  "key26": "2UQz84g4TM5SXdbNLDDjbPowuJzDX7XTfYEpXthvd2Ttu2eBwjiAgyxfoMQUK4tNoxCQ9vWz79gz9r33ehVPcz3x",
  "key27": "2iV4ZH4Uqjdov9ZH9ebNSe4da1qrjoCYzhVxbXwSRdk37WtsTf5TH8BR5UDkiPfDrXAMSSUXN3Fa9eKKKLaEptYf",
  "key28": "iYV5VPKpAREvjUtkctwDwc8tb5HBUhGhcztcsgnVvVGfifsFnjebabNrMc9RcFNxJjgnWUA91yu3bkpwdvtM9nA",
  "key29": "3BriarPYmwwK3LSmr65Lw3H4EdoFuG6uCCi2g3C77AzvCityURcr8s7bsR3b8Jkrz4rwKSVb9LHTVcPtASaGJREU",
  "key30": "am3vZL3TT1bHWgp13VC88Uvgan5gPNd8osba6v5NS6pWP4xWvVNbk5bfPhWGUvLtemT1Gca1wwR7uyGKbfLurxL",
  "key31": "3ZBo511JHnktQ2mdrJFKe14NUi3dATrC1iNvpTpjKom8u8YWazmJABWrYxWs9RWqDmBzxVZAEHUqJXTsiVn2TYJX",
  "key32": "3U6GLo1e6SPyP2GYHxnxoykRhf946qTwwrMBq6qqENwY2N6z88dQXqjKjCq6h3xPfMbMNyVdDnfNfHJgvcCkiAD2",
  "key33": "5T4ZpDf6TA3dNnT8w6fgMfkobasyx759HCsSQ3b5NmPt9AykV3SPKiM4EkJjWhXEqsFjtDnifkKe3GGGMCL2T45F",
  "key34": "5xXVm7T8fiRF8yjvj251FYG3uHajB3zkj9T8DsJDdkWsGWU7EgErbAtzdZFAZiVhdK5vt8gSg2gYiMpujsUQqSzN",
  "key35": "596dtwiQieUVXL9oT35s43sfM7NxqJuFodneaGUzzWHbPED2BFxDQGoGQaFnueqtkBSo4fjvTUrGi8d9si5rUJJB",
  "key36": "X42GosAZFrCuz48w5jFFWcbaYvy9etHJRhTA7Jwh2v8SgrGLhT3XS6nKXHPGpCyLMcDQKeBEPoSmE1dZThQDFH9",
  "key37": "37cmT4G7qCJscKjwDytVfLTDPfgXDJeNcJE7SS1fZSjxVFTKZVhDmN6yJAQWnKjeCvRygyDDvJJBBTb6GhpzsP8i",
  "key38": "2iNtcibTnhTQKo8qQ7Eb2pPneEJ1sgqwsxNjpiLykDTVGgKBWw3uYzzn2hNWfbcP6pnBGQ2AgrQ8gKpHtgoiBw6c",
  "key39": "5fnQTg5GdYAXZia5i6zw3cN1fxLPrUGMW3jxWqypPsDQjBmb5MnBtsevvWfXyvLTcT8nDrLg145tvx9g4gvaG8cb",
  "key40": "5PNgGM2oqARQmpyiqKtj32W8TiM7GzCrj8LYpNuFKnZErgBz2hkWRaR3Zb4nGLHBd9PsHFB7mDUNkHZmRRmFfKnC",
  "key41": "26qZyNDmBY2A6Ycp17fsVYdeXkZXFi2h3FxgfFkeHXNkdAybaG1G4PwVBn4xUvtwm6bhAaHg8bh6f9FHXMqqZ4UL",
  "key42": "3txrAQcf4PWDHzuyAeD5sth8i5sDEeKyPx2R2JL5WFWMrrm16jnoKbywBbSDnDAYSDzzW5vhaaqHYrQsh7SmwDC9",
  "key43": "3D1uymcc5ZRF958rm1VCvzf1oJMNr9tZ11knnFcFJsR2KRiDXCdFtUJPYfSJgyP5S6y1cYmWBLuUWC1bNGq7oDAD",
  "key44": "4VPMCZD12ndGkUCWzHdCr2cLkduXuyqcbyvgVwertivwmzpJskWaPipdT5HWc4RXM7W2vqiB6YKkX8J2TeAkr2ej"
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
