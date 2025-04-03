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
    "5PXCMhzTrsLNoSbc8wVouQSX8uvBFyy5ba4JXF7L7n6yEn5DqidpnWuDKENzWnYrychRGkk5LbDSd3RmqscL26bd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5saCWCUjCtd5LVhcqSsLFXm7qaT7x26vu5GnF5vM29jQEHbH39jgSNRdSWnK3abYMPmzZTF1X52sHweyugFzo2Nf",
  "key1": "5sgExSLfAJia1coHhiFV6ZU5BSZX6JzFV2Chuy9RbGhVMEohVjetxwWu5RhLA8STk4yU7uEBgDmgtDCh1z7iNMHr",
  "key2": "3q6sCP3mTwPdKxrPj5YM4eQXqmoPBzACBTYrpb27mFFrvbypaPmBi2meEYQYqKQbEAFgyBhchX7mMsKLk4jFxTQk",
  "key3": "4L4ivPtdtPiWPLggpu3sodp24wngVpHWW6S7LdhxUFvT9NoeRbpBhg4WTEHGynuB2piz9iswJ5KPV5X41sZrGtC4",
  "key4": "5Gtc2nPYxZojScTvj2fWFiAskY48RUm8Go6dL5bX7xwU2anCsuDzTs6sMemJSvbb1cSFTnneww6rNEt8BFjiGBZ1",
  "key5": "3bZFhAueTT3k8cHA5vweqZHSGUbbvLC81eBUr4vyQu7X2phG4SCDQZkoGPqYzww7YRZGix6kTk8cfvMp3LksXKRs",
  "key6": "4HfkQCyB6DMnxVoVzLuF9omAsAxKqm1bSvEz3JxZKkFD2Pii5iiamsSKZsykqYounRgywVVpnZdo4Bsc78DYgtLv",
  "key7": "5PTPDAgDYmi7nWpA72ydag2rcFTRpMvyuqMUwKWAouTvdCJe5JNwbBCBcGe8ehwmcxRsf6h2Ktnc6u4R1eWG2921",
  "key8": "4uPTZK2SoCpHgdUp1buvsXR73bBRZaTtahRzGeSrTiJnPtTiUhaJxy9EsQka5r9fsQuUR736Jx35QCWViMMpg4Vt",
  "key9": "28wZgihEquu6Rvw8dEvgUm1bfSu5UmscDENs52xP8J9MWpD1r8NBuf9b2pyZsJHgGLN53URVTuUDDXmfLm5pREJw",
  "key10": "2xwaFKtyAkpqxFhdonPnrxUhabsA3GihxS1TtGWKW24rxYGxroMNJG283rb9iAtLMcRn7wS34BckQoRoL4XdmKcV",
  "key11": "8t4opanXKY3LFBNn9em3ciDfjno4NTyWhU3sFZGh44NJBgna6s465PiFPUTfe47XJgQ1CdFAaX8EHjSCuFMdwRL",
  "key12": "jWkXtmoH1ZHu9rchpQ3WXsEXdENwqHSdwJjXfc1SKuuB7JAPMzTgSpUkjf3SdapM5TPp4DNjRcZ4cLXHLxikhVH",
  "key13": "4tZWw3nYrPoxcFcrwHq53P6PJURbKGdmNdxrvwsHxzAaaLDpPH5D7ANALWgZtjiDbJXhaNyDvV46zoxodXLHQ7m2",
  "key14": "3DiBAne5Mnwu9i9DBzjRdVqAjFNcCqyDHU865y2B4XDPas8gJZotoACQxbYD4uicpcikDmnhDe61rjUB8P55AHaU",
  "key15": "ae6VDWgC3uHobKhuWNY2M8UgxmmgF1rJNLzj3cAj66kRQPCVdGy6wwunexmN1f3hoT5U2rY2PWBoWnB38MiuBzE",
  "key16": "4JruWKYgYCq7FDQC6ujn4MvDbjLmXBniy2cGegT1yewpDmD3LoWLjgu4o8z73K4FVcpDysENQUrM5UyPA8FBkmvg",
  "key17": "2mKq3VyxGffMXsjZBg54bKKSZ1q7HeUWzhoTGKYUQMSxiRt4bWubMcCWEZc865W6nSqbve3Hq8Uqd552Kf7SG75W",
  "key18": "3yN7ep9XcFLnfQKhzgNPRu9DgBk5uiyJ5RouyYFBJnD5amEzodb6Fx71QayNjoXVFRsHV81MRioDkJWntVdDj6KJ",
  "key19": "2DZuK3178jJoMTJZSeS7EF2WF6Bvb1ymd4ypW4ui3FpPLGeuPqbdnXhessntRBCmp8paSKw4QbK5fURrF1qhYvYp",
  "key20": "4wDhkZCaTV3jNV4uMyk6pr7JNPfp3QffMSDUXa876iBx7yHqKefPy1piqWVRmCVUvhEp5acwQYa3skxvzvU9kteo",
  "key21": "5ABUReUrMJ3DEc19Br968GDyrMgfoV8Q8D2yKwFKTwkNcXnJXEdZCUamEFTWm3t4QvjYYn3XoEVdHkqDxnu2Xvy4",
  "key22": "3m9GvYaKd6CnkbBBfvhkc6R7fKzJcuRj5jQmFBB4DFMZNhTUnSwoiaooSuc4Q3h8T57dQY2UYFFwNzWsDcuvsJwc",
  "key23": "255y9UXtz3vumTp6WeDSgwmkcvQvJG62EsU9cpr33d5r8jYV2BpZkonEmfSoe6n4EFXoF76SBFGUWXgF5LiUzAnp",
  "key24": "2pUasqZwNySUsSMiY2HEFbYCvARP8QoBvknSiioeGdf5DjFcg4t5zWKCBjy1XxuNpVtx4hHxCRdd5BiavWPsUCRK",
  "key25": "5gHaCFE6jkCWRNUVdcboUCMoopaTDKLfJNiMfphw1JV7mHi6PvCtF7ichoRZJSFfmSbrhEPMhekV5RqMYskPvFH4",
  "key26": "3xfNS8Ksn7dtNc73GL4zAuziLXenM7VohHz3h1SADua27zXiP3721qkvy3cZY9aeDFeYgjMEALC9TUbKa8PQcbAB"
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
