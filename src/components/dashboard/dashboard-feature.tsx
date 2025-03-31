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
    "WVJwgKNNAKkhJxdkQB1N3X4gEMXbtvs6sS42eVjY9UgCPRnJ1H9tHyyr2NGaU866maDpHwF4QyGL65AsCAJP3oS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42HxQi3wogLGjQwHQs1LdwGpv8reLeJrCLis8hX74J4jqPwQQJRsFF4e7XCavx6ahiK5D4M6kcWy5Uc2efuMRxoa",
  "key1": "5oGqNeAHU3ETHUjbJUwzwyvrH3BbqsSVe4Ahfgc6RFkfQDnMqh5mqxATMDTZe61MjcWU6YH8gLFATPTEaLrYq1Zs",
  "key2": "5gBzytYaXLLQNC16fMgA3t4NkVEVHMkttBd9RMso3jvyNmvL75iKRpuQwRKhjc7srnwSWnBtqPp4mRJP9WF4U1yA",
  "key3": "2L1ihQyeLKkXdhMS1fEXg9o11Z4MamZtw6sn6jt86miQTxQBPMPwCerSaD8TN5PRWqatezxt9HJyvU9sP5afgGKn",
  "key4": "4YodyAJegjmshDTqsSatBUyC9asYL3iAmA2EuaCmaxcZR8MW2Tu3cAPPGtZxSFzdauQwwdx9aMeX7bCVsLz94pNw",
  "key5": "R3tRvbMjkrNU9kpcDAK6HMA2WzPv4B7LjmgG36JSewKNoRqwbnPWYSS6BSMh1qjZLTLsRULHoLJboFt9H5Y8PPs",
  "key6": "3fwJgh34db9P2rjC6Ug6ibWrU3LMYcSmcRvBxXg9N7ksMiXUe4UYtkdh7Lxc2uRus4bdd9Nmawgejw71FjG6PT4i",
  "key7": "4UNwz1bojxXLhgtGfkeXJ2bBNodCGRD2j1SaGXzwKW68r3y9zNXyS53QMAPm8AMP5FKe9Bsm7oR1gyAYmoyWJ42o",
  "key8": "4U2K2oNLdLhCsLoRFsniJwAtA3qhho2SNrvBJs1hUMcYM5txjFAFhssnWog2AjT7TpkrxenejZzL3M8iixuot7Ch",
  "key9": "3Ta9q8DVzf7mJu1YgXzjoVP5M59g2g29ZjB77UE33tMByXbxosvAfURdTAphWnjvBYnd1EUbiNUaSJ8Xo4mq2PVS",
  "key10": "2w8qfGDdz1cSsDRjrXFYSoRk5wwp2gMNPoGmMTPFKZZcViKnK87rmb9qfSZBU7hhobjs5jPuuNWiuaeQAgFtkfoU",
  "key11": "4VyZcjWUJ99wn28mup8XoE2wD5DchEbYYPPZmobDcnacALGk1hCezsGtMbUxUuNZNPQtmpNkgQJvY7a3ACvjCda",
  "key12": "2WkCvTfVXrWL4YF3ube5jrPpaUQAoD3npUJ75iceLgMRQPHnuCEqadrmCWWWgB3uo1ysHLJ53fMx1ofVdbsBgU6a",
  "key13": "2rSvVUXy2SMTyJnKdayDugTrPA4wH6CcuMcGiMb4UhPxJ8fbpKrSunwQebjGKPpSh4h73CBboyoZeLbwoYQPdQqT",
  "key14": "5iGpMPFytZDfp9PpD5Twoj4kskJojm6agpzhtrF9EGW6WpoheUaacaF1LaQwRPCFoYDMxYTuucECHFeksw6yL92c",
  "key15": "43rHhoJXTWkQgzMjmfmfmyUhZytnGRhCq4AgpHM2fNJcyx8REsFz85SqogAjR2gzvNvH1yrVhqDxsQj5dGxTewv8",
  "key16": "48wfnaXRujwR6Z65XHfynmPHfcJEQJboGwbgLwyP3hZKDBkGDa4J6fhC8Jh6H4eJ4Ab7n3LP8QvapVkoGQsJzJNe",
  "key17": "35ieimK27XyiSD96UUzrzpBEBfnbEAANTNzRFBZLPzzP75YNeyNn7WTtbqeFmJuQv9z25WYkDxHM7wdzTFJbdZak",
  "key18": "Db84hsPLGPMorh7fubHfxbJK2fjXkpFGB1HnsxmS9NVmY1gm9VoQZHLahcvwUqWdXJkmGK5SYTbPGSMiHtmUaSz",
  "key19": "2h2K3LNTvEPxgBd7EVAk8Eb3jaaA8EqfMNQkT58rgba3tSVu9YP7zVReFvdddVDYNU5NVQARvBrbr47nUQ5vYkR1",
  "key20": "KEk3XPxteTYsFvMPNRvbFxg3jgsHkJpnb3MtdpGpaP5FcGBtcmuXnossaJh9BYuNzSN6qBYEd6ZukTfVMXUubdo",
  "key21": "44y11TngBGL61Dyo5wcBpaZY7nnRzerk7xJayynNf4oygiqNdxDSCPhpvFwL8gU1AetNYqemJ7Da4FySMZbPHuPD",
  "key22": "2VUsxUZ9kNfMXSqvwQqCLZRuUaH7sS4Jjj29GsGdbUQrshnjRgAKYt25Ryq6kMrCpKvDtUihYs9ynYGrhARPyedi",
  "key23": "4C464V1sjxJDgxYzaiKu2ZVCnFFfspDLMro9MrsYsNTCG66h4Vt3M7Lz21trLa615HDdwvTo3s9CAS6zT6xeUtv5",
  "key24": "3Gx2aQeCrGZf7v6gSCWwxeGxKrNcmdDz3HshZB3RyxEFWvyTbBJ92Z4uV4WWUyVNyY4HxdJqmL7zz31sutHCqBXN",
  "key25": "3SjLhAwefU2v8t5Frwi6cVCg8zEHp4XDjipkjhb5xU9PKUTyN1iPtGZcaRv9iR5Sw5Aokujom9jgNKQ8hBqZ9n4E"
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
