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
    "eBTuJWSMfqvw2hJeapDRhDhmCrhU2wCkkpAsN9EuNh2DcVddja21CCZE2o7tPvkUNWeDMu51C8iUqsT9jo3NenV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CbRx7A74YFKpRhndZkFMFCJqr5dCEm2Ya418ozaxymVLCQBMPCdxHp3q5mNbCiHVg2P3tcyvADLKvifKoQr2KpQ",
  "key1": "3vARVsYwbYjjWCLo9XyHDL3g6yv7jNwrR2ozSNgGW5kdq92AcUarX2ZWe57qMxSkWM9CaNnNqTPczoD1JH2mWybc",
  "key2": "3kBj9r1rmVJPiUPsNgHQs9CnDc9uHxJtffptCRjRk3avTKAkPny7HHdoCTxiAxgsCtJnavoXMVRDpJtKbJNZwk6b",
  "key3": "3cB6APgWJ7fmdU8kHvzUSrLneE8mTh9DVhhb9NkPDEA9p2KGCZjCvzE6nKCbwXfr9DRz1pNEYvhy2skNC7cnqkv",
  "key4": "2SHtWaEKkazNr47Yj3DCoRVA7WZVeZmMnmnSp2NZd1aUy7WKXKWuetdnxL9rvMkdenR2LBsdi4kf9ok8eNWpqzfG",
  "key5": "5URCnRXSynSERxtY9JLq8Po1U3aK29nmNqVoQcvnmCehTEztCPMfWVQpB62hnkwc96HBJn69JQd4bvEaddeVsjbp",
  "key6": "xBzr8VXEoi5KVxSjXaTMxVmDJZ365pFV81vH2nh71KuJofKrv8ftKBovm8mx551ghR9sMveJCkucRdJxPoc2m3y",
  "key7": "25igMk7Ns1gdfi8hzmhxX8yhzN4F3Y72EREoWzAszXj4prnaHPG3PjqE7ZJWBhycJsQPM6fqVoVduN5HyYLGLMT6",
  "key8": "LNGQmsCMrGee2Hjcg4LJgaQNR1cMBrLJULsXN23XiEttR7ErPRVYgB89GBfZnEgb6N3X1rFvJiNbYiEM9EutjiZ",
  "key9": "wZr9WRbbxduunxHTf8LsqXVBfcZwpF1cjNxwtGQDYdk7Fht6LgcojkhrBp4wT8mfeBgbqNVbzjz2C7UHe7yWHVK",
  "key10": "4FAvLwrAoqLyJupLjUZVxrfv6wNCsDc6CoJhxxVebtA92bmCH4BdajFio8sULYXd6FVu9f4LkF5JPYUDkTi2b8Fr",
  "key11": "5fC81HtP7C2w3WUT5LhF7ydy6ScnkLe5Mq6ZE6T9Q4wJEjtu8tU4eZsFBs1xm7GWxtwNV6iHwTPS26xR8vcYH2Wd",
  "key12": "3oqCuaXuP8C9RbhkrBpPp363SoHWJ9YMogHfAvDFD2BYc6HxmmgrJFefCFmL9zMMUYjZRGn3wWD6ZN9wgPkeCNf7",
  "key13": "84WyAo6tzomhKHkmQ7ih1ViHUnYYwwjo2ji6TN3RVhYG4kpDnk3BPsdNLoFxGbUe5HNFTDL9xsFbp181eUgzgNT",
  "key14": "2qwgvvjiP6XuLyiKhgDzQFaSzoATX6dpXMcEbcFpuwdPiPsmxVVPRFgyoLTX2KERAe7DjpSJ3W5cG9PLoU52wuxQ",
  "key15": "4TzQKWCQfAWrwVB8gyB7PiziHcdJt7iwu197Jn4CuLiX6EMgyUuUjuwnrmHvACF67b2h4y3pYZsccuneq1CVuPBj",
  "key16": "21yh6X2ovhcqC1HjAsXsfpoS3VUZC8i55PXPJaqHtRYCetDS4kRTkegpANs1ry7Vt9SbvV13k8xSdcYdrniVgMuw",
  "key17": "56gom5bhsprqehreWJbBcHQsRtRukJR3GDMq983bbmCUjH6KX1nuBsyh7WFpNW88oEkynuqbrcSmTs92r4oB3NT4",
  "key18": "3Ai98hEVmtL9FZ7qEF6E78zZzEMr8RNYtTyQWTjwbEc56SAR9e24sKEyaxBv98Bhu1scz2pSB3gjEtskXyUdmb3L",
  "key19": "32KFJExPQg7o6yJ4Nwm2HYbi8TtQDLYTXcv3yYXGu5pN63teU1rQc1gcG5hnZd5MY5Xt5sNAVpL36HJVpKJTNLwX",
  "key20": "D9pqs2bRe9SkoLdXXD46bbe5vHkbur5gZR6dMPTqfunrQfjoBydt8UfNte54HVs4dNCN1YMRCj4b2Uzge2aoNdd",
  "key21": "3ZWhYJ69xsd85mwyNERxNQfFLvZ2acnJS3biwdT9xtr9vpUUAY6hz4qoyaj3QHAngn1GqmFxvRPH6UFZ3V1kA8vS",
  "key22": "5mZ1bcVUYpJ9homz3UzNa1qteXegzHhXs1VwKzerSgH92d4fNVTTAYhDkpV4oCtb1qk2DMBk3r1WiYRHVGzXnfMN",
  "key23": "yZgaBvc3vBLLdhHe93ZaciB5LzefFrVCdzw8nqZ2o4MyjSp9BPYjfHAybkiZzpjdA3LmAwX8t2cEVXaj4rNjHvr",
  "key24": "56Vz6oTyFJ6uZJNCKzvHkWDWh1NM7VtwQNNUwDebHHovsQvGvfXtiHDnmEh6W5qHL9sodeqfMpE2xmg8nRTCk9M6",
  "key25": "3tmnG9Htr5k2grS38BxXL1csTyqR7byBMg3DCaUrx8mjHcuLTeYr4SP81ihaBaSuN8e1wf2B74Sfwoi8ogHd8xyr",
  "key26": "2JbnAVzDJqvLELa7Wcz3oAYAH8MxveZf86swH4Few8dyx5WPTtm8aNhUhpyrcUEt3XuhNgtkVv86u5uQEJAra25y",
  "key27": "2Nmw2FePKwrEv2B5Rkmhz3nNwb5QvD1GXAwWvajLU3mR92gWyHC9FeXzjtrWo1eJ2TLUssjUQm9ZZXKXBcmny4um",
  "key28": "TQM69ChUqkWwe1fyKrvXgkF1SLrjar8Qb4n9Kz4hgxLZaXavP5QvB7hoG5C7SfCW9SpTJg7nKV17qk6ipQZWfES",
  "key29": "62TZSSsSPvdDgyDgsPGRpGTAQoAXChmajzWZhXqmxXg4bKCMCGEnXYo78STKj5651cxGE3AxzUiqXMpCuaskNxcH",
  "key30": "4RDrGgC3ikQJFX4DUaw3jrRViVUmYFbvk3XM6yNEaWp6jGvHkWtfZVeMcGnRZfyLZFYKHkLasi2uHYYH4onuuifC",
  "key31": "3FWeCR9QcFj6aiZmGrPZ4qLxfTveEUpMtSBZzC6sXPb2pCmcZEFM47iw4Mi64ofEG7doCuJ7Je2xKp4eJEct4DsD",
  "key32": "3hXupvCc4wMzZotkrbo3phNdYH6cWd33RghaFAY7eHLVkAzymifu9wvTuxuDNpanzGNz132eXVd1DPjfqYkXRBh2",
  "key33": "DDGbRD5cU1uTVZR2Dy2fR2iDH1VW4oQP3XkewH71T39oYkkbBnpDpQesmm3gcQUxiMxqRChHswJLq913LEx88HT",
  "key34": "5pAmVV5eQqXknazrJVrmtBS6bSfdE8fdYbfdgUvfeu5SNQ563A44gDtZCG6d7RwVXwGWhfakqnMfdwsD8FUmUEWR"
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
