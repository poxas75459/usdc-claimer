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
    "5P8YUJDNTUWW1ZKHNMFCKBh4QsgrzJ46ew9TPsxtDr8x3Xf2Nag5mtvPc8AzsbvY8bXotNsSnRCKirfJ88nA1JeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EzEAN7cZ8rXeyvqVUrb1QxM2a5gShjdHrvjwsyH2eUxRasV1itkumQTv1DWY8Ros4wvyhUNJBGM44fsE99WoXVU",
  "key1": "Vw7w2Qkc2soU7233wjKxbQp5YAVJai5B5conC5JCViAVfbiy1TT8Fo4fQ2VjykfdDJ1fNCDEK6sVGmH4UWuLzvj",
  "key2": "5GBAR7QQ6zVNAsRacuboFa7tFZdddEtKfEQRTpYPXSnVTFwjrkd1arvKPN33fzyh1u1LktE6mmesc7PTX58d8zag",
  "key3": "48TX8x6LAqFa7LAJncQe4bcfYBX6V2GHcVXDdZGsFNMcVAYiJ2tMrfgLFyLv1ViQWtBuyigKnqeJD1pYZcNwfp35",
  "key4": "2msxpjdbYbkg34HyR44EpDVHRgxCvCqWns8n8xa5aXREemSnsRzFuEk1N3FZoqEz1ykVTGj227Cgm3LbxikmZ1xx",
  "key5": "62sFar9VmuQnuWSoT86etyezLNS8QbQGDGVMfD6EbB1GmzwY66DcW2i98VTvyqwvERWx3WazNF7gWPPob8NhYTxP",
  "key6": "4ZsGhxHogCvYAW8tbgJCDV7Q3jdssVm6gbLaKF5HDCRg7FwKfqLpwieAphHUT7UvYGDd8q27rY6miXzdnEJfV8xq",
  "key7": "5dQ5hnSzpoSZCKnsiUFoUcRbjisEw5ybo9fjZNXUkwzyHuChRMWCEAvPYBsZKGjx6ymwj5crHApN7Ym5SRSZA6Xo",
  "key8": "4QGeozGEEyZ724CV4KMamZWmS28CrcWihuDpc99Pz1CN3UpobECo1rJJdK1UqtK2caRBURfzDgYBQKfmKu28GDFv",
  "key9": "3yPpmtEWwW7XbY67cuqQhaG8DrM7bEDuMBJGPagwm2NPwg5hP5CHMyMLntHANHdraCRfTDP4kwMN8yFjMVL2SLkb",
  "key10": "2a4XpXx467BMKWSMRH63F5yPTS3CsYzXTbiQ54pG8Wq5yEhvuNKfRjAHNET5kRZgFonmjikoSbmk46Ad18vGyYuN",
  "key11": "5ZRdFC837KKe7CUK6qEd2Ez1YFBwwJ7brRJtT1LJLfRXFvHbpXzak3awhSH6YZ5Jp6K1ihFEniC6wTmrEoogxJBh",
  "key12": "4EBsdM66uTN3ksEKPBhe8kBGLQaMNeFcwuq5U4dSdLzCzmX9vXetRb8x9xhSxjGGY14xEPMVfjLjxfHmbnhm2Abp",
  "key13": "2B1VWfpF9t187MLEAz2yqbbwEsHTpDoL5NBXNMTdB77A4ALCoiC7iv9kagd4NZe5XEwu7u5dGuu4ag2cpFcgPe6j",
  "key14": "3EkD77cRdwRWowPR3evjWWwVT4iZFYEnfcN4aWdsmVpfY2zte5b4isLb9EKJEv9gZVfNZMZhwrjfYfV63vGyRLQh",
  "key15": "4Ymrt6pfjmXbZ4VA3A2c7gr99nwbX8QkVYiFFF95GymfVCF147Fgw9q4TkPzZVeRCPo5hEcw5m8Thtu6g73pZgtX",
  "key16": "57fDT7YwWykxw5iSj8s49FUt9DJj28EDtJLy3Us5rh6tqo8pSvETh956qhXegqe7TVQ4D892VVRtA4cVCYC7Z7ve",
  "key17": "rpuvkj9CVzPb4fQ9E16TxXkKe8jqYTkRbCPYBFje8AAW5oyZtPhFF6A5bp3wLqHA9gfN6e4ienHM7ab9zE5zoYE",
  "key18": "4vmU3UnC5GUqrJFpw7E7P9t9nUH36qcL96FdJUMGAaPjsKbSE3rU7tiUS3gmuSfEPiAvSuyZsndiaNkXcnmGtvUo",
  "key19": "4RRaxCuwLArQourZwLJp2RaEUeQFRLyJXprMXnFEG6sRRgbjV6Z4beTmfLbCQ75ujyzXDSuzSVngNauFFNYBK5Lm",
  "key20": "5EoSNcDas1pddcNbxV6iAduMvfH3T4ovJKKf8MLesHF2xbSfCHUWL37JoAeKJcDMwPSZkJu9fbKw22uQ6xTFpQrm",
  "key21": "3gYWDcTcFCnASKAcYiTZSNrdvxX32mmmfGWVF8y2rNcZevFu8umPd58HuMDcTrTnWA2AxhqLQ8acHqLx1H9F5i92",
  "key22": "29LEzouXpxHEqJGWzjMFjjHPyXizQpkDmeBNrsRpshgttFT5AbRDzUSe5XYAqJvmcyff935sq6BTvyDDJQo95nwn",
  "key23": "5ykj8YJryrFWeEEASVgtH1eRGerfTu2HBiyyQdhxPkNs3hSY62VnarJga16eWismR3HzbcZaDjdafhQVPTvvinjD",
  "key24": "2GfGmRV6vJ84QFb93axbUXaxGn2azdiN7qtEhQsTQ3gHZ8LvgS3dsq9yJetwMuTg2NrWpGKGdG5q2gZ9toMK6o3P",
  "key25": "eUgSahm3jvFCL3UnbF4T4Z8wcbpYnTaPsYAgvnM8GsbeUJpyxE8wVUpmVHkuNfZ3N4JpzigggfJHBPRYc9dgyxW",
  "key26": "3uzsSmQy7Hnbfmf8RdZ6Wx7xxtsedXL3qT5ajMb6d2DmkkfWHj6EYnXYZfjKrtCN8DUDBYd3P8Ff8RzECZpy8Ecn"
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
