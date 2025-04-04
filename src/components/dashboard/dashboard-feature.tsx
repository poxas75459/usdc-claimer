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
    "NgkZM2nbfQkhGubbMBehPFMtyTzsmpu2BTavtpPr1Jsd4vL7BVzpuRyRZbybLYVL4SnMx5ad7th1ppCJ36eEDj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oBb7MPEYavvQ3AkLzpkNwiE2jE8ZEfKgtDixQiEsYDqXnKwoCVH8AcsJw32GznuFoEw4x5hEFtKS6AMJWyKWvbu",
  "key1": "5Ppo5KMV9KP1fHFFE6J9mC7kjcstGSGBDggLsuHd4Qt38ckjSGUsusrGBTX6EMbbSzM1TshxdzVpCtsZJBRibA9a",
  "key2": "Uf26wHHPM8oZ86QEWvAkYyrRVEZM61unfFCT1FEvV1EmXRSuA8gd7e9TifqYca5cZyThTTQ9DYLg29pNUSohnEv",
  "key3": "5vqfmt1q2n2NaKeY5LUXKwsQMKdpEYHjVEQXhwYv1CjqBG3nUmiWcpo1Sm6GxYYK4jyWwwqWLjp2cejY1dt3FZ6t",
  "key4": "55TscLk8tHST6qMEwDwHirgVU4Gvj1KzFAwobXkKyUYqvFDt5AhjdmvsHGqaWkWXi4fsmYFSFZBqy7ank2UjgKq4",
  "key5": "29BvfaMZcKxL95xZuHqLf1pgTszMPYggmaajnNCURtNeyqAb7xZBkx5t8TocP3gZ2qDUNW8JTtcFgmtvimiuiAMJ",
  "key6": "5ZEU4WQEKynM3erEF967uGoEYfARMjYsEv2P9gYVBNeBR7JtsRnnDeDVtg9RjBoxpGZVeDePgA9WmNiA4qEA7ccZ",
  "key7": "4AvQodK2kpGCXaZo9ZVx22Pnp1JjQgbKQQJCB6M1udcjdUWEh2VRL1Kmm6NrfGmHuWWDe4QthMxkkfdXKqWteXNw",
  "key8": "x7asT8BtafLAytLkL3cauxjPTNiFL4qiEAPQ8xdLz76P4q59fAbx81NmXCgriqZrPeWMBBWtwsuJ66BR95vLxcS",
  "key9": "tjDivsqxz6FPLHoXyFjKrQoayRyLEt5fbveqPujehTSKEJB1J1in6pRNx93uthM2wNdvNrPMmpZH4HSfjwraHwe",
  "key10": "EWbKa9HfwDdCYewCvVDrQubYqdiiH5jv9aajmQRFXrN2oCuYjs2TEoxr4yd3EHTqjQ1XMWLzKNA8aEBDbRdXhw4",
  "key11": "48KyPAG5zGTYkrivTsXeyV99RiMwNWedkPf6w6zZB8AXZoT3DsetBhiBkVrSWkSMVELTuc5K2kDooNyMUsab2bjY",
  "key12": "3mj1wJEvnQybfcmLorx4Jbric9ZeYScCW5uF9KhHpEpH6evDN89zpbmhsRhURJZKXjYTbumMdsx4HZa6NU2qLbrQ",
  "key13": "4Zfvj13m64vSo1rG8CNFpJz6ZDJN878MnGLdrVyTYEfqZqXp1zhU4Px4v7mgHidyfa195q427rWegGQeQkV1CFga",
  "key14": "ugLAyhjrUrW7SzL6JWEFo8e3iX1SGyUwcRJPStF5MtvpquGig2tr6Nhuf66okvED6agW97RckdS5uXNxv6CzPSL",
  "key15": "5ZoBWwgxRJdbABPu1aejEGc7Y7qtq8aveZRP6iCnJepPRMt6d1CUbJizc3jETyiqf4jvvBqTQjLPKMd7FAGsL2Lh",
  "key16": "4WLBCMEposJAKWuEne3fQbqJFSLgJkJPSnB8czutcusULLE6tn7sNVujXcF3iCr5dDPK4NBuJAsvrFHiP4wrkmTt",
  "key17": "2eVPFyQKpydZNPCEuSk5f2Uzsox1eUJcpddy3KgJV6bTNGdQAU3U6RWG8xp1wXA7BPADrHd8WYZRgcbntTP2SykX",
  "key18": "5A1gkLSMEBrzwBnB4QdqigdMSWU3PARYKsaLywjTvJJ2R5HnnWA9jHAMcgBTbmj14XKZEQo8K93Pj9b1mQMe4gEY",
  "key19": "4vJ1DiobLHCYoqtWb4GUYCmBJZVs6SjW2cPMYLVYrDkrT5zNcbBahiiDc9g2esLeXkrBewDenvRucSDLrMqNw1Hz",
  "key20": "2WAiTVn1EAd5F65sEBNXcw3oA2eqfuj2YrVK5QHE5yg2C3US6PTVDvLDP95o8AdHXWQiUZTYm1pzUsgdVAwUXDuL",
  "key21": "2buLxaXXZ9Rh3LVzNwq2MqhMokiJ6qMXGJBG1N3JskWiK5UziR5fvf1CtCfiViMoKrm2qjbjfpcCdnpKmobiNvyZ",
  "key22": "RJeNLkSYrSQsQzVk6giHWmtrLJC8iAG5aFXjupZdBBqBVuwZM6A3STxjPgPmh79y6a2US54vQCDYUosKnjM6SaV",
  "key23": "4q6Q1V743UqpdEGrAqbWwyP9sJUaUcLpaRdSogNoZf719JWnE5EANySMajrWWAdYJFtF14cqB8M2YwxggoaXE9eE",
  "key24": "4KaSGMRhwvos7uFHKcjjHfcvnwpLeHLXrN758geKz1NM5csCrXNcUq77PkgjKYv3MURPdnAch3fuzstzPhqH77G",
  "key25": "4ZWiijrXXqw5SQKektT1ZzJmr3wWnMUMnKDKXU85G3nJ73AjqmNbfPJmekVhiWFfU2XD61aBzh26LWmz81p7qNSD",
  "key26": "268uwWv7REvBCxfzz4g6w1M4QP2DuASUMXvHfuhUjfZggGsAmRhGGPugwMwJ9LqJFTcCLho4UbFSLUy3aGbJHcma",
  "key27": "5yWDKruLvgVcEsrrR4BgfDQfVCKKneFMnu7MUBmrDa3393QnWRTHvj8B8ZK9nLQMkRBwKZPi3JhMJsbsUXx8QfwT",
  "key28": "KzMDU9dpgG7SDGEcLc6sDdWSyakCa9M3rdXbkSNY8Ns1z3SY5SrDrdGnWxf43zQkzEGNk8dAXdqHTBFsibQGzBR",
  "key29": "TLTnc1tpM9LoG5RcUu5anc8vS8xSVjhic27qt6TP352eW1M59zMER6i5jc2dt2jaBCcJURvCsf571tC3y754v7j",
  "key30": "5hitNFy5rHipDDxxoecaVY4tBhFuPfR3AXKyihQUmcbLqmV7qcCsbAZeGLyzXdAK6mE5fQ9tW6hZ4uaxKfJWcVei",
  "key31": "LmX8P6tj38rtR7CWsAuxvb4v2kddt6dCshzCXMTTuYWdU9w2Vh3bLodof7BEEsyeLEdxCsL7ghvczD2DMpD1Xns",
  "key32": "h7hdYY3yeYgzR9soZzrZ4J3H2x7V188U9RocezKE1Wsd9WCbdBL6aWiooeZibvceeVE5k8XffQ91R5wTv9Z3h6G",
  "key33": "3wAXNs5ZnVtYngDqTEGaUx6ygojpJR747ZcCynkcLHNcxfiiYnR3umEeZBcr3qmFtsneyE2PykF6u6BoAbujtzWq",
  "key34": "4ciAowRkjZBsU4RRSebLAJLURLa12sZMootFM1jWSH38edMfBRZDSW2NvuFd9DHtaYkKg9BvJ4ZtQ7NZ8mEDRsRG",
  "key35": "256zRnTNCYaTeRapxvzSSXSGVhmqGpC5LnvDg6wt1kZPEcU1copRp4qsbCNLjjzEmYf99d4wW2VmWffT22gZ4oiM",
  "key36": "4HR38tqX4GmMPFUSdUbfbdq1DKpxsPM1hF95YGPBXTXQK6GXrBfjookXziBEX2jQjSB6zbSGubrboH41QPzeaprK",
  "key37": "43ncZZnpJqQtFG2JNMUZFSG7be8LLbJEXgFEoggjU6e2ArHHqQnmaEL9pvGJK4bc8m9gBT22AYh4piNfyxY9puVg",
  "key38": "56oL4tBKUsKmiLpwDL5g3kc1BKWkGSZ4ogNnDNzPWyyu5XixNoBmsdY45LZscDjUWLMmX2uBv73iTp3EU6xLqQci",
  "key39": "2juuCXgg1EEx72hGNMVcpWUbbkjUGjSfyH8Zr3sdPNvcsYXN8pFEx8Cbs44C29eSWyjPaXXvKV1GjGxxwrg9Rssr",
  "key40": "4XWjCbgXtjy2nip8G9wH4ZZZusbJSmyNCDfwP9y4GkmAj3ne1W27oMEqvcfDre3Fe2Lch6nUdzepZp7WmdqESKKv",
  "key41": "uwMKCsJircsQPt9gg1erau6VSFSTb8qcVHf6vsznmgrV28Zbs5EF7xBtaxtx3UCuXWXhoT29Tpuf9Mz3LkEmvVU",
  "key42": "4e3mvLizFUtny4ai3jLQLVPheCMBvw9HNpjVWTHUR5WvAdUfcL2XUvJ6PTryrg86HMAD6LHX7MUbn96cRszx8d5V"
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
