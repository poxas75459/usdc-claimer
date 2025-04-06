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
    "2BkvWoyWutJNi29yxiVdkq6YySjwUBXC1oQbrujjstjmaifs8PykbhrCi7P6kzR4cbCGofU6naoqwKaFhRni5xzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61U5xM9V3RsLpevHgpGoW287XdwsgpoBswtKkqWqFwEEqT93Rphz81NXHxUB7Knfw2VCVyVftHmDoGN7AeD9kiHV",
  "key1": "2LfKsLR9cayggXYUVqCDPtahNJ5ehgypuvyVMRRmqpS1BB8HX7mhrguwjUaYzVEqCtk1bhjySzFTyVupkvZGmMRq",
  "key2": "5euMR2SWPS7YVQEqBBSAi8RE8LR2BPQgHxB9M8d9Tg1RYyiLhZ86ctnZnmYLsE2xfVkiNe7iZqeBhFmNanWPjmau",
  "key3": "5WF3rfmQyJavpTdzPafKPvLFgi4muAmRSaGsEQLvN5MuKxZr1X5VR6JS1Npmvk39Kkc4yUN4JqmevD1dJbjNutpi",
  "key4": "2QUK8BeF8K9WGwBetrMSmSKyQUntCqpDdkeHvKd5PZa6cN8Cc19s4WkH2VL1hwGtGGdk7mMAFoWbiHWL34N4UoWd",
  "key5": "44KxnRhpwDsYy9WERbRmRkDwGDXvvU7AkxQGDemVVntLAKnWVJwUjzDYcjf4LAKyj8PWP1MMFEdgmhBEmV7KgG9W",
  "key6": "4jcmFiV7PmtWVDSLnXBJAiUpFKbe266zPZDpHEFSemWG7gEUuWSa3wEhN2uRmCe4jwG6mZoSx2qDLmiaoTb85Qgm",
  "key7": "66Crg75ARmQ6vzSfRhz7pUCoWB2XktD1unxCni97TGoAuTxioc249P4XTV7VPxyMCYeM5k2f4xCuQZnsm2V5Yn2C",
  "key8": "2xVgBSmUX8V2y5u27ekzPeZTVLpcXhqvJprrQbJndWVycigMsn4RbV6x7SBejgJjaexb7R8rgmccNdi4PWNkHFT",
  "key9": "3nELK5VGzLGNt8fkVzHphfNExZjbowW3W3EebDqN6wY9GPiNGBmfhmNhkfBNdGnsnarLYMZqrbV2xBFtJZDDmTEW",
  "key10": "44WQ1XdgkVZiSRZWa3iGytjLRTPAqEd5xPSvMCmerFXCggCz2k2JpagYXruWv5g73GFpAwDnMcHSkEpqJDA4e2bY",
  "key11": "dYUGxGKFYPxzGYZxfNP3QNb4gaEpqkkXQgXmDinNtKMCTu5fzHTFK3T2EjVH9hkmm96HrXACAiAee4s4gBHvXzj",
  "key12": "2e4UYBfHJUhsPXwewczMnQguJyuFrjgFUG68BG4gYjZJRtwgTXC8cCWsXiF77DYrkwXBg4ChqRKi9E5HeonNxt72",
  "key13": "zg5NdEuDL9qXAt3nSAtzpaTmidJbfk382roeMBr1Qyjht7Vb8g1LraDwA96s7FSM2bgaDsivWvkdLf1CxHKzwvy",
  "key14": "5dxnQi9tYEw7kSykKhHjZUYDQFZCrS5mTvogHqcNoHhu6h7mCbBXa1MYLxmM3Rw9G4EmSgQiyUbDD2CSAgVjjS6o",
  "key15": "jpPagDjhZRearuqCTaLML2joUW22C1GAFeJEu8KYQ7iEnaS3gquXRC42hJ4WDLxHphCHasgMJto1bqxE9V5UMeF",
  "key16": "2coX5ifNRffNGeDNAnY6ZcScvPjgJAp9AfiyW7DbUav357SfbPFYpdWUm3MdE529uVxnyPTsHRmtcWw3trvUa3Bt",
  "key17": "3cwwjngNmY9dkan5uRYyQbeRKnLa8ZRdGNFzGX6rgobmUbMEYXcQa6mUKgo9g76dmex6XwWXtpdn9LMzyn2AyQ7o",
  "key18": "4FDpSzPTDN1Vc7LzLjhR2Sc7cikKd7uqXW7fxrKPeC7EBdAvpDwnJpQkoHEwwxNKdtKyiWfQzbG9oexPXCqKBYog",
  "key19": "4v7Fim6QmHWJxaZnSxAhyYCLZMYNZYcNhr8KeKsKjasDJBjaixtmFDRZr67jfnyyGYAeFaaHRAL17HUCW9BwNrPf",
  "key20": "2psMu9Pk4ZzkEEymvQy5Mu9fuewrQX7rgFgBNGUFL9MAgXRDojEZX8gDYPCVu1pPj2ncJSnkEs9R9a6YJqxZKYEp",
  "key21": "5zYsd9V5LUTxcHyBhyVPEfiC6fsyrkJz6XboQSAZtJyZzg6vEJieDgBeBSPguAJG3Vk5QvqnNBC7ji6tcogMNoB8",
  "key22": "JWN5FS8kNQkBZaJWexPqZfVLfe2Rw57C9gbBbKdAqiX6DrowKAXCLaS3QKTruyiCPMX97vpWQvuaXKtab7tUYea",
  "key23": "4sEKbrdGujzvopkUKqcRsd5avcZhQKXfYbfyKjfGmiUyCSVejTiBiFYanrsMVMvF3xe4nsqH3nCVwhhZHDX3uviL",
  "key24": "65Jav53LGT5BQgr8jx735RbHLanZVCiXguWDKtVpdvxSzM3YGxpgSKS3nCdj8SacoKibArGQgwuU4tH4W54a94cw",
  "key25": "4aHSt3cket6mTLbVGEZzodcmU2Q9G7MqReKRYTiJEeD1Cc3YZzyc1DAxjXYLMC3sE5dDkxPMWimMka16qS8aLaJD",
  "key26": "4HQXbmKsgcATCH2McZ8ywkJfKvmR8A3TaTnvqd6p7pqTs3QwdMp2tqkwo9p9TkkhVfsrgYJmEANe4E7vtGRU7KZ1",
  "key27": "3XS81KELrPzRCPyQMikgN54m5trbpuwYKzAdq7HAzbGQ5sTYBSmCrsXSEqcX6eqPhZoPFdLVk6HAfFGCR4NnMCni",
  "key28": "37V7bP1aLmhzpPxeBnj1myPBtXGsSFyM8mbakUXoyo5xdGFfUnRVA4qaq3Sh3VZxKPX4iSBMPDn21dNAyDvyvCT2"
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
