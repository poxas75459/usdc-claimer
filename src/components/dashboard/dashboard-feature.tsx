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
    "4x1imxvJqhMGrRZp9agw1awwZwS1WAd6eg78idssQWEB44Bp4ZviB9K4GvkbHGUR6ysXxHipq9WLR9GuETvarW4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JxPvNwyf6iev6FV9PAz7eGMEkLC8nyaiHr2B1wscrXirVLRbVLcnucRK2AbNnC65sgtUiWwLs88bKjrhXi1X7Bb",
  "key1": "48XW8ipgVUn3KKdevBWQf5D6bDDus2YR2ow9STvuVKuuNoZnk8REVcXLvKf5Km2vWE92f1k9LJmwoqcNbhdAnBQB",
  "key2": "2YzR3AKGGYSqtnabV514CD5W45ShWbVidZnxDEa74dY4KeYKDXU8ZMRM2BFwi4LfVoMsRULxy74gEcjGLjj6sxuF",
  "key3": "6iwx3FfgibHsfmyQ3k4P6qYmgS7MDPvcbMstySocp8JyQPGV4mUU3sVaYCCAyaFGNY6SxqWLvG3b3GdfCuYeP28",
  "key4": "2dA6GQMSkQmfeEtEhUyTVJsDoXspCq2K8SGsHMwRDqvdzMvtQcLu3mjNQ8PDQDj5cgL9UgfZx9AGQtACZaGgavL1",
  "key5": "5jMicwSzFqfD4NVoZQuuJqfCh4rxuAGVf7pxQpSw8zCR6qG37UaoTvNH8cdsataMK5U3CJcqNgkQzxyJDiVv68Ju",
  "key6": "h4VmdA2YxJjC81CP64vMpSmjf4wCiz3qoA4SUix6HZ53J7zegV7Z7Qs2pPN2DiP5NsT4DomPfoTpL9feaEsyajW",
  "key7": "2H4fkHT9BAK9Tsp3zUZi5rLUevQWFa2hLqZ1PfZWydz3FQtMq3mTQz47uZTo8YND6x2ErMZq4YZgBrBtFDcortE4",
  "key8": "2kp7om6Mzhg3vGSrhoE5rDsjL1abDfd3jGACBtmRCDFCUYHyp6wGnnRqQz3iRYFzLqjomYuuF2gmUD2iaRbp8Mt5",
  "key9": "WMa1YkFFNt2d5SYRU7Zn3WBiCVPsN15U22ShGBzt6qiuD57AoEy7meECTx9h9S54ezmig8gpFqZKQ8Wa6XhPpQF",
  "key10": "2T1yYSfUhBmqT74rtwfbcGZyrd8pCri51N9enVfcgmP8NmbPrTojpDetm2Fj8JB5BDadxY4Evr1Vb5Nt1iFoUijB",
  "key11": "5SGyxAjpV3yfe6co1wpR3ZciGQJo1Ab6wjH6YUYd5ZkMpAWEG7VjuXSYxDzscCE5jsUMSJ2snr27ZmzSu191q7vf",
  "key12": "MUXth5SpEDBympKMae72iAwJzawYjU6r6gEk7SEdzZKjuRe1Zwq5RYDJ7QuNff6FBqxgghHG6ZZJMGd8rrn3rWY",
  "key13": "81fbEyApNfH3Vhnk3jn1iAp52FW24bbwbRdSZEe2LyVxhhCWn17FDtUXkSKJR8G43y29cpvhVkGV1jQCuT245kY",
  "key14": "3TdqWzMZZEAbHJVLJyEN1DDE2zBCz2n6kB9wFXCpjJo995vUyT6oJV8aNqftp8ZbwoZSh4WGY6ZiPCcPLeMHgy9Y",
  "key15": "2uSNPy27bES2gXEEJ14tZ1iFiycmgo6ekCph246vSAnKh5P21Ay4G2PzzE5YDvy1L6ZNEcNYp5aqQ5rJ3PwFCh9o",
  "key16": "4rw1XLGJ2ppQ2B1BCoaAVZyQCDWiRYACDczmk2puhiBCvMoK4q6kXm1jaCwAgvXbyrTJkiqXibh8eiRicAzkdW4n",
  "key17": "65taKNTxY7XC1MWW6YMadSSDP99FUvgRqdtvJDbHvtF5yqzWCt9BZKuvZznuMhjouPrGr4gadAJdRJ3sYdmRASsF",
  "key18": "5nwdEc93pMEbZS6rsSFTCbpPkcjdt7DvPLycuqsTBrh5Z78vGDU824ygdvK3NNGXxXKLh9zgaizcE795BeBi2Wzq",
  "key19": "3k8N3LgdEur5JbLCkAnMR996RqvfC5JTK1Bq2BsMY8ArEVXBCx3b9PgFzv1CkVpghHNs1SGLaWzeJQuvUQNFwBJV",
  "key20": "666KK2f4rVBkJ6h4EjoWJns4MHh5N3KCHuzbXNYxYKUL3X6FVXPDBn1nMiegzDRFjudDPQBn1w6HTZHmxCsfVT9y",
  "key21": "5XXVsMnAaJgTzbkkUsSjpcawYnWjJ1wsUHwTPDJrhc9n3GE9vD9PY37P46LieFsLREbkYqxt9SbXxVtJJMV86qh8",
  "key22": "2B17tjRMZQDCrg4JQLbgRqF4T85ZcwxiomSTSF3y3usfiTWHRczVmhyMM3skFJ8aCFYvhW6ughcRt9xfB2jWhHCN",
  "key23": "5zMawmRcbseJvWK1WvGoAqRQRV5LujCBAUMipwjsUyzz94JRtQP2qsGdLRCTVH3Yv2W7c9PkoXK3VX96RVyQd9v3",
  "key24": "3FLpZRKfxRxaWyWk5tBD1g8uy3VxyA1rXWA5dsqjzH16zBJa5tEmSJ9Y7GEu3aKBpgvu5N916aKbRZ1iq8n3pAfk",
  "key25": "PkcSUtxzqee3FWGFxZizKtz6C5zfpMiwvFbtJK4FdB6tCkuaNfVhmKD1wG1gHpKx1DUiLmW2StVR3rf8wM3uK8Y",
  "key26": "tX6iQ98za1HkhviVHNTgYFh6KMAG1QBbo7g8FQXJeUzCNGohfvsxQ17PpCrYiASvaKRs8ksvrbjdMV9pstMz6Ra",
  "key27": "2hkDygwn2JN7ZwdzwGvuL5gjyY1z7uqF9Tq8NUZqk8suCG7CG2i2rBU41E3sF6afqbc5djK3Buas5eYVm4VTNuzK",
  "key28": "RM3Y4LS2BLP7oqdEMp2hd9wSFUAAXb87y6bFvYcKsNV6hKrxCJirf2FEEYKy1yHEFqi7Y9jNRWM6EZHaCNeUPoA",
  "key29": "3YoYkdCsGgrNCzWXa9jakyGvsCNwfUZVie7hjgA4a2PC4aGG4qJqxgm38DKaw9oKc765X8ynA9o7ffSNeX12KKPB"
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
