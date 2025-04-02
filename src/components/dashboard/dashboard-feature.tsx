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
    "435fRfqyM1Q4iAKkgFF3esd8PpWUtGYL2EUwjcRuEnrTJBEW93aviSZDKFxQrdHFCWWC7QSbLACVSDMepm5svXju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VW3YtSQhXPVBqxxtRZeBTjcjXh52yX92cMz2jb791UNw1CA9HfK7W44vitwrScznmEcg5gJLCZyvxMFXvyrLD73",
  "key1": "3HQyg8XvFX9MVDSuSFUDDZXiQ7P1XcqMYpArvvhesq4axTqGdp3RsqwTmF2shLNibCbtc9urizahZGz9NNLdVYV6",
  "key2": "2SLtnfMY4dCRuBjqBoQwJNfh2tcnEPtggTgn4NCHiS8DNE6AtMJ6JymMBLgDTyrNYBb28vqXqRqfgh5XT1vvccpw",
  "key3": "2cpDhEtsBpgbdG2XBE1FQPLMqhdVQZWMBEcbLAbadAyCkwRN4uNrpxoPPYSPobGak6Ut2nXygbyUTLPew8PwEWDU",
  "key4": "2crso3voDXNR483omLBhe3sYBEJVtnjVNhDJJqRffcbKS6hjkCGqU5rjginvrvBkDiPoiWPmUPT7JBV1fBJHvYkA",
  "key5": "3Qjcbs79ZqmK4zsSE6qs91vCm9y9YjDbqaAEDe6BkALtsthzeGwbZdj5igTrxWK52BnB6HifsWebjYKxjJTHEGbu",
  "key6": "58kZaS6NWKRz32uWJ92TdjEouxU8vfS5WytgeW1Pmdmc5Bbef8ArrnM5Bcr3x76s1tbJB5onABj9TAcbCjDkjzRP",
  "key7": "3KQudoBH3j8ZsTAXbCuVUsUZWFnRHJ2Xmv28HZpRBxawNGze7njCfzDxAjyySuAyiJVVAM4PZpHYiMz6tQ8pGwZ8",
  "key8": "454ADN87NiFzbXW1a1bAZS5AushcBoTwrtmD2xKcHcDXjmCVYgotPtvmbdgJQLDiq4pb3okjPj7vb7ACE77yjRvb",
  "key9": "3PcpZQd885GVBUgM1w9xrCpiGT4CzCFDiU9BZikMw23fuqzxqgV2ZwbrLGxR4UP9qkLrwJYVELYhCQfXD6p8fbJu",
  "key10": "5i7K3CRjzkqEnrKLBfWH1DWigVEFnrqf62LX1SycK5hy5XKbsQf3g7H3VSVxtoEQpd32puXihQW86zgsqf9Ukuq6",
  "key11": "dk2Da7p6PFFKXfeKGmCtQEG4MC5mf2e16Y6o2iV3H8iyoWWefPjGw913PG2am2kyrWWCd2Xt9pK2NoYqDToJqeT",
  "key12": "4PN4NCy8iwsRzdp85KwLB4h7Gb5jNUaoEfBxFT9pvprnktsTZhd9ofPgjAz77h3XqyFfG3yYF8EHqjU4EbeEskDG",
  "key13": "5A2BnECLrPwzdEVmWAit4Skr2R6peuBLAbeiKUZretYjDyiZJN2iCf5M75gRuKqdtgHAG75go7YXm8iZf2manzJB",
  "key14": "46bDRb6FEPe6YLbVuC6MqifuipCAFRHwpNptPtKJhyPbEBcxsEJQmXtj329w2Xn9qXA6em7AiLTwEidMrcemocC3",
  "key15": "5qDmdQUeAxe4vQZvgyXPpRMJLS5Dan57zDbrsymtKz73u1YPJzHSfjPgfkKR7uZLz6tFMCztz5zfEw8Bd3cUVm8L",
  "key16": "5xGmMxvEGsgYvJR1sD9p1YqjLXXZxMJRSdpVXwFXmKSnJSD4wHiSVxcCPyLivmuU4pRcV6yvgYqWBRHw9pexuFq8",
  "key17": "5t6aKs9cbkYe9cJ5Daayx5vthb9KuNvgimdQfbqK27p8f9DSqpVDfU9h8mULq8uGkpqfwKDL5Xd85EV6xV9ar6Eh",
  "key18": "3EqSWZpqKkAVoSnDLxnRzvkqVDRkVE8eh3VjHyq7SDY29CQh7MNF2bRdCLSUBFPVu7J1qGKKbmKKn71CNFqCFidk",
  "key19": "2juB8LNSLRDy1YD88HEbYmPrwwAJvGUDFREmyov9DaSd5Yo3X3mrXq11jkAR1AAJcMvfAbHXy7jVvJca1o4eqhsM",
  "key20": "376h7eFSVCUE26vsdzntme85Ly5cJwGLKfDAV1KyVZkhsD3ECMTBhA3F14KoEDVtWPMkx1ZkVBBbzzwD15DPo7qN",
  "key21": "4vNLpa6xqvXvJhRysJRHfixtfQ2NgMjWbwfAJpY7Daix3XY7T77L5JuXAJA9kcv5jgabwzsDqSc5pe1teqVTCNDt",
  "key22": "4vD3PmoVqEsTpSQrzG2j1sTrazbUra2uB3F5Crmm6NCJoxbjqNqwcaEkStQmQyrwM89WRqsRGYvDpMYoXTNNJY1X",
  "key23": "3g9EdKzGrFMTJV5WzW88rmgQbvQeSJg5i1QhH4NAXg9R627zXWiwTzX5z3fVHEfEcczKhyfVtc9JynxXameKzxzF",
  "key24": "618gbSFWUyFS7ThJQoRPr1z2FVV81FDmv15Q529jjdL2ATmx5rEWsBVR4dus2Md2fEW7J7QGNyw6rLieQQNFhx1c",
  "key25": "43NfBGYWZgKTtZ76sCUpmtBr7SqPUSAFSDCgfXqDCrapFio8NuryZdLtrK4yK63grdgpYwGTGj1ESps416twZ79s",
  "key26": "5mefWWRS7ZBQjj5atXYzQD84wRsrCed9zSMX2EpW8gxypNck1rUCWjuB8VodaiqpeCQytEwVyY7KSvoRsK5r16qw",
  "key27": "5t9bDwVWZs1UWCyULVaUBvux3CyML96XuqG7FusKuQJW9ME2bRBboWFbmgpRo2RJE3HBJM7vfcv7Q4erWxR1wTMJ",
  "key28": "5rcFUrDAhCGt87TD96QLa8DsgmTtnNgb6qDmeAvj19MoKC2sBDB8GbJBCajF7tzzG8YGDNU4WVFfTYKSvKH8Uj3Y",
  "key29": "5cMsqo3qn7C8GgHMJQLEvahyvy2ZN9Xpj3zCcTmk6zpndbjeqGPNgr2FsTtGyyCPsV7yzomU9DFmaeAAxv8ERvQN",
  "key30": "ZNwQkAGvdKAethPGbiCYaY7cpJwe3UXJL23wnRMuUDs5RBPq7XaB5ke3pU9gfW7f1EfrDEdQEnLgXBcuVNaNNsu",
  "key31": "LJwGihK1Zc2fwhG9jAGq7c7byD2RWcf5E5r8iZ1ugtH2ewBv3ox5dgqAU425VYb7qjikWXDkFPtAx7PASH7Fb7r",
  "key32": "5VNB3zy5RtB8Ci9EAS3darTfEz8TAV6bbsrqsqWRJaSXZJdCsFoFswhkT9speA7yuiiSQwhS5FvYwfxWA2JQCZC6"
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
