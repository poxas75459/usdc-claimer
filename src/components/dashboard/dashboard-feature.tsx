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
    "4c2V6X79NbtR4NsoF7Z55vn8hYFXUfZECWzP8f78dJo3Y1Z1uSjohxP3EzAQJmx2WCXZibKjTTVWPJuoqVYtaLFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258JwN7CqjeTrvNLsk5er5w5Gx3KA8UcxFDAWocxcAca2rr8PZb394j3NYTCroxsi4mMWGHKZWhnjJqKFeqHjsJ2",
  "key1": "46ewAT52ff37GZzDFdHM8ViDv3VJd6yDapzFY98bFj5C6cEwLepLHcc7CCefry8MB3JkYsAk3ysN4RTYPNyoA6E4",
  "key2": "5guksberSVUESizgjF8cxE6yDknkisQ4cPAcQY1oZaVzCjN4mLcbeVfG36FDpb9D6SkrMhXEAMoFCQfAQGzebHu1",
  "key3": "4FqQbwkGFxXU9Ay6tu1WSgmTPGWfCesXcDK5r8snhM1429YC4bkfWn86dPa7WMmUetRMG4dwK3fWzU8Nc42sorHp",
  "key4": "3Ba7FgbTvnF2h8D2ZWB2M6Sa5RQEBPY236qxSXUPsznwzCG885sTeFtkszAyjovCrhHRQT7WLpXye7J4LYPyh3zx",
  "key5": "2zhL5TXJUjFRe5qirtucS1A6WC71WSukwAu9Ei8EpKvPMGrXzaAtbRCGphLFxhhJo2k1trp1HXSWsHd6ShNL8sEw",
  "key6": "2RV5XJuNE4Gg1oyUHzriyvByCW4QTNHEQqqtdyPsHmr4hzRiyJvyMriLcAEKpUQds6LK11nurfC9Xkcb5NXo9q1k",
  "key7": "7a6d5QKhVLPRyKdiFqjUr5rCczZdujoXC5DgNvBJQtbe3ZY56hC9C1r6gaNTtSghZPSoVAHHzT7MPD3T1D6aztE",
  "key8": "25FS5WXV9oVVCvArJhQHXymuaD74o6SVGjt6gGvGpVkZTSXvkv8i72c2usXYPA11vVqQB4isVj4G5XVGyHWotqRq",
  "key9": "4gdxTrW7hgaKtdEHHzoQBBBFBg99pAPX91Xu8NzvarnQoV15HvCGGwPP2h16bdmBz5xTnZ5mAFxMUnHZw4W5ZNff",
  "key10": "3ucxQ23rSN5q3cMivkqmEjgdriaxdTwMSMBdThjeBmKrn855cpT8Je5SifkZ1JfjBrq4CUc3GdVewBCcGvzePABs",
  "key11": "FV9VidwDCNJbH6dewkgdkrMDGy7Ai8tKjGXu8BtqPDpAe5pt59aLBa9qKdahnbpePUvp6nrNmGDQG8AmxsdNMb4",
  "key12": "638ZNvJWdyZr93ps8XMBCMxtC3DTnt4XZurpW6LHe3k7iFkQsgqeJsGc46G8BN4MfM2SzdsTV5wm5uUWMmLwCSKB",
  "key13": "5WQgfAuqPjJkBKWxbESFhWz5wVBdFaA6x5t3JfLAJLvktgk8WtNM4Chz8ytR81GM2by4ve2BL25VgfmGNkNpMk3Z",
  "key14": "5khkGkY1BNoBBNojtGQgvuxFjyuFk4NBWRu6VaQpBVUCJTjb9f7uUimeL7yHB2Enp3FAd7bMW9u6es9xYbaN7Qkj",
  "key15": "35zTt8FZ7Levx1SdZ1FGQRkhawEt3uC84VJficZiNT3HCM1kZLPDpMGkSkz6WfETQ6wMoxPtEmn8sbNKowpoADfj",
  "key16": "UutpjDxhDmNZhbRGhDPtMKEWZ1ZCRnKjuxc9U9RFpA8HvNUXRP3VJMjaL5XGMbeaPo55hg1DPfLCG2Aw1Q1FjgU",
  "key17": "2GQ7oxhzrixLft51x2zLHjaFLVg3U3wHvQSihk69EfwuLdVhin2dd53tBGCxetEHVj4mKpaLTTzwxRB31gLL4gsB",
  "key18": "3W3mrsD9wzUxBMA89oKEsADRG2FuS7uxpeTyGteFwydH2LMdDyUT4b72S2tmqrDdXhtin3D2nnD7rZuy2NjMZomv",
  "key19": "5HS6WfjickH1UCGtWyBV1rJX43XArMeYokHj3TKcPtAemZsc7UAf4qumKm6CEZs6sA7tWMW8bYoTH9JGt1ojB9ar",
  "key20": "3Uxk3UwEFhquo4vxvvu17djNRsPdQuXjNPvoy5H1MHPs7AzAnjBnwC3VybFW8j8yt86oQ3YBv4WF4xttbV9STBpr",
  "key21": "PpzABCPFTiy8zGVnUr6GRx4uN4g5miMJwbok7mPPGigdXFhaQA3G8viaCeDeuZPWWVV6peNYfKf84G6583gEEFE",
  "key22": "4wShV9vPreRZHFAstPWWCz9Z1aFRTaFFfezsYjYviHd9YQYJaNwTMwzGtVjoTAoMwdQqzZbDTr1wKY7WNL3caef5",
  "key23": "3DQDv3dmEiUmmZoZ5mQcyjbhtgxq1zJzj4fxRuGCrgq83sM2PwQNJJK5DthyBjAktRbLsRD9H7cewqFWHK63VDjj",
  "key24": "3Exm8wGtPmaf17Z1NJPYm6iRho8YB5mWMJeuRj6G9ZjSW87KxU67ixz1JXUBLivVo8TsNePB7V2YJgxQ4cAuWd73",
  "key25": "Ga3MGvLdi95oygxCgy8Dhs7iq2EnYaKLpqxHeWmEbwUsaTrVqnrqKksEU1yA94SqwgUXzhBkeekYLW6ous53FG4"
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
