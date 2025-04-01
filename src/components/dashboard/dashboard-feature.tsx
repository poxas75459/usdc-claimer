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
    "i5pGNHoUMEtJam94LvZNbW4DZ95Uu7TgbQjJsDotdQyhRB1fQgEpXw49oxABmXBXMsdhC4w6RaseVeiF1bNVMwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "13w9mx8LjeHovoJ42YsPy5ffKu1UMSYde7gAGYMS8fm9G9CcVwGVBFzREMhEB6GTmx1mNApKze6MCVCXfN6qSTx",
  "key1": "2Yb7R8X1kzzUARvLCrGWzMUJkgq9w3nsnmfzv9uMdy4TvTpjh75tM5zNAzTP996CjDrdBvmXch4yRh58gTaXtfQM",
  "key2": "5Bdg1fHsi5prxYYb8i1c8KrWZDBk1Y3wcxMmMvzY3PsHw463avXk6e71ojeSTuiGS1t4GMS1YTG2ks68NTn1aEWE",
  "key3": "5DSyZ6EiYvSsSren2FJyJgpvP3UXoVoH2jyZCfaGAndS7ehjJ7x3aQo85ZPpURtdGgD8gWDhVZpURhfc2E1AYKT4",
  "key4": "4zNoD3g1B1Sy9VcdvBeKP6mKPJL9jE4arNymxGw4p1wfVPuqYryLSqjLi43EDW7veCojsjuPzxx5cNqEvqjqHJxV",
  "key5": "2pH9tk9zHDtU6VXterWRzGPLzhDqCrH2bkn8htwc3A5eyoQDVcVLgPcTwsHUQgLuWJmdmPD19pB555Z9h1iGqtWd",
  "key6": "2jZnHJyN8xbFoGStyCmrFsc3ak799NmydNdN7n3MpkjcKbm3tZ29Ys6e8iVQDFR94dvC5jJ3e4csd96Ju9GGJf1F",
  "key7": "2Qm3gvPhrT7xG25LgWcvuomgdkv3NeeyoroxS3gFooRX4fLqGNx4rJ55MSVs3ciLAKPohCLq9sEpkRs32ZiahMEp",
  "key8": "5aGeYJgTzj2cH9z2RFby4PS7h2Nr98exqa7LKKSfLXJN38yaaX9N4ioGvFDMbmMFyiuSUVAfMsZF9kDuvQQbSEtS",
  "key9": "5qQDHYBXPAfFg983X2F7qgXaCvf6FFyWc9EsnUPLJVMD7hrzsgXb8dh4me9tfpUi4sM1qeE21GHjwbSYER5fUkEZ",
  "key10": "hDkuvRwXze22Z77yV9csPmVhCgzoLPyYbC5D4CVjXnjSiZW3TFBDYVSxikKyZqGKBS61Gyoo41hFLaSnii8PPDP",
  "key11": "2fsm9Nq3QYTPffXCvpBykdVbjWW9Nji67KbrxP851sZqKGuPGQeiSbJQqGf9NKfRNNt8xgCs4ZE7garTecVZReb5",
  "key12": "5wYXm9iku9zbhgvk7JMToAiRLZTVn9KcAnwcRuhdoLmguCYK11fwcPsJkorZuEzB4tKpjdJqJqykWJSU1fDG7z6E",
  "key13": "46YuEWfqKzDUWXUMmWEtVMRG1BchNoqsoCbPTrgLT6DQ5qb6bbRpMEysuoYH5xS7Upc2w47hffxDRjyujHGTvb3i",
  "key14": "3PgSpznU7wRazko2Zx11PmG3TRHd6SyKmfas63E65po2eeKCr1SqudMFvCHzNTDyAVpqmdcphnTMCuJhVi65QqkF",
  "key15": "2YAjRwpESYP3t5jrQsbZsFoPsazuLAomjawx6GTfpDM2YHMqW23SGoNn1eeSJctP3pBKCsYLjTfZ2yHdYUyMT1qL",
  "key16": "21AC2zjH7wCQg7ZYgrMiH87QUmrUp5iG3r4QJ5fZUgMMV7PFNMwQiLPX9xcpni2986HrGEShE5eddMsD9wVevJqh",
  "key17": "3MGiBDp3PEa7k8hWiVUj9FbQUR5Ph3vbcSijiwxRmDrugw59G45VQYTsvcCMDZ4cNESrgS3Zy87QaUXfVGKF6BQP",
  "key18": "5CNKN951ZbQwyDeC7RVyxyHviFLBbRBB8ek3yMuktWyb7RndSV3fx3MnueCDvcmeSXQAnuzwK2SF5TVg2Vn1P6Kq",
  "key19": "4g2idKyShhgMPqtMRSWFJYXLmMNZTU1Y4StWZr4YHbSXJFcJ78qwijDPYWnNTQXKMFbESXMPUnu3pqi2M4DJLgXG",
  "key20": "4Wh9hPgxVDu3YE6SBGeCRg5LBoGsFaSoeaasjZW6a5c7kCg5d24ZJxJMr7nDPkG2NnzPTg6y8EZgpG5HUtSfx8SM",
  "key21": "23oXzBjnFS8UBnqRgDcJXRwfGhbsZnj6Ej29P2XfcSMub34w8JVv9dL4CZTF8BB4uZMBLuFuGfCqpNmx1e4GKpQL",
  "key22": "2JGsBRSL6gS2vK2pJ9xS8xkM5AkpG6LnFLGeXGfEEj68qiRo8bGB2vt4ZtcdqeivNDDSqSKArSYCpquL4jnx7Y21",
  "key23": "5YQKzrQ7dmM92qiUpjSCxU9uTzTyqXkWSBk5pHxdMEqhyu9vd1q5sj7kXyS9J72QTGwvDzLJbrkcPZbP4UKfWhkd",
  "key24": "3Rh5YAaptq5naVbcPYyNs5KMWPyhAKdDk42ybfoyMRCMpYgkZQSUV14v2eKKtHamyKCV55BPNvST8dQsVBaXdmLL",
  "key25": "3TaFeKBbpkguz2Eh45YBHxTuSyGm6imRJS86QkSJzDPcdCjawGZ9uNxWsbUjjZrURsgUHgUEp4FzXexoZ7jpVEmQ",
  "key26": "26tmc67jdfG8vWsT1d2JUXw3rfMNhLgvoABZa1g3DDcUrgkWW7HUiuePevmYoqaxKhGfWsWJruFESUCKVDKpzYGX",
  "key27": "2smWW43Yrqty3STz42UXQhQjWP6LjsLVB1mfJVs1ZZTkhS4xH74zSbj3HqCV73WwK6DRK8zWPSegbUcF9fNJDhBs",
  "key28": "4cjqMjBcsFhmGkZhbdxCXUcHbChPrjRGSFK998Ky37P1rzQoEzrQ8qpPPR3LWmE692m8JPP9SQf79auqhaAeWcLX",
  "key29": "pkoGQcR9uApiohxxNS6zUNgoMGFDZ1nVVC7VgMDsNKWbmuWgwqzNvg6HvTgQmDUwN6TP6FoeJkpaMXiQfcLshuP",
  "key30": "25UkS1wgUX2fYzRf2p3nP8Jn8zxtiabBPCae8gxRj3tHZjKtsUHM1g5iNDRLoYLTvEuJEbH41BzshEHNzbMjjZk3",
  "key31": "2z4FUNJENvgemFfZfqY7LEYNeK6rSkmfyPFZ3Wkv8n7Km8X69dsXFL3Ea6NkUYaUQbsutsHZ7q2SjykeC13gxd5a",
  "key32": "5dC6n2YF3ahKQQdarooTsNdxHCEotY2JujR4uF78252GGem5DLbYHjXkp43fiMhst78fZ4qdP2r3FU8w8Z6uxjUx",
  "key33": "23kvuG2juQPNGoLsSQCg2wrzBc1gx71N5ZugQ3wVY7JFBGwUMmibQkjNPUk2gHPBaWgo8ovXqujNs3Gw777CyL7e",
  "key34": "4iRL8FFrnh1nd41wMh1Nr1wafLGBrnjjwgDPgdZkpiGeQMYUYzvkVyc1cuyMV5oaGW8qX7W96GVexBh1gzSS1QBL",
  "key35": "4ddqbYDrsoVaN2XfwLDd9r6EXSAm4v6brNm7ExpcfpECxGv3xNRsw5iRoiWoCYFMUa6AbxnMBwNnAFYW5HkE19Pd",
  "key36": "59T1NdBbZWNQMFoiy2ynNTTcMS29fbJVd97ZAvWFyc8XN3FAFashfju9WintE5LvVtDppdz8dgKxEuToSKFLZt4c",
  "key37": "3SrEVjgMnJzSZWuR8dUjTyEX5JsdzPrEAxLdoPsSiAF9wD3WLF2vmAsjPMH1y6Z5HM2xan3kYUNLJCrnUxYqB3dJ",
  "key38": "2y8fchDkPxFBz7jf75mNGswQeeqwggMtj5mfRsBBMeAcVV3F6pu7qzGi3Rth31gYGxwHRLoeBMsyNG36k955X5fR",
  "key39": "3SHbuVqe2Uwg9HiLrpPE96CiopmDGW9GEAKZq5ShBXFfK7GZ4XQNDhCZsUTZ5hvTmexT7XipZ1tZucr5n6n9P5oF",
  "key40": "2tizxUpM8fJi7FcKYjSs3szEbbmboEW7s2g6KXpZogBVnzf1adrctXgWXaC3vDgmS36NVbsWEc5nzs7Hj5wBrWuc"
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
