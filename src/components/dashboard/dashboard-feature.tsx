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
    "3uitV7NismLbBZNEbTaYSBNx9sXanCfZsoDwcJtAQ4Bvp6SHeXXH6vFDLgXNRc9CwDDDoy2qMj4VK7fMqfc7hutw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mtcqqPYouprQNrMHSREMAq5fhFWkJ4QYGnCEpQBwtin7NBVPGTWGGbK4EB3vzmLXfWmEPXhoqQ5R75XHWBvamog",
  "key1": "28bvDkhMMPfxwPFLWA2A1vMK1mx2jhJeXR89BVykkNNiF9qcf8eyFT4Rm1FKEiQtNr4CGNC3EKKcGi9byWYC81DX",
  "key2": "QMkA2zDgfdFtaTV1ySX34LaQa81prwgFMrZKcste9qaLWogaVxXMjAHakZ7FGadx8yheipAbmBGLUzh83VrrdDQ",
  "key3": "BeeHAPEuqxA2tAbBkDM2TeaKm6DnrhyrryuqVBQ8BxjdEwG2QRdi1CR9XJ7VPhxuRpCq3J6Mr51yyyzMosUH5y4",
  "key4": "3VjHpgoJQVrTwmQpSbg3Z7EVMM89Tx2GYpwhXyBEB5LQLXBeKxhphmx1Ecnx13WUpSVHYgGYDHAkq3bbRFkg6AHQ",
  "key5": "Nq72iFM5gwT5wKmxGj7csUkYKFL7WrnHmTKUhXXwwUR8N7N2GTCkAxWhejvhYvMx7ChKE797ZpjPAwX1P9ogmc5",
  "key6": "4PMdUiMELCE8VgzSKPkif6THnzNRrhGs6o7iZ1jRUkaZakNon5QK3V7sHR2KKGSPN8PE33ze9vjLsSryvHp563dd",
  "key7": "65ioyVQ29UpNrekEHTh8zDsKRY2qxeBhNekmCJDeTepoXx5vHs2jjjZWXF2EQQSYX3GyaqiNE8eSotsnDJ99SkTe",
  "key8": "3zNF5z2PgZZPR4MqopWwDubqez5Wyfg2MTPm3hZT6GAvZtDLipqS8DHgHDRqBrL9ri84CiTFJJT5k61PfhhQjBqE",
  "key9": "4qEq3C36JwYwCMyfZzUt2JFpCNaBiZJSggT5RbZBf8F99E3DfhJDjRSRHYj2yzYv7wAoZKwXzwvd9qtTYTENYjeZ",
  "key10": "5efG1kPnodvKXcRsAnfDF5bPyrKaFv9mmG9AR2zqAjQEdPB5gfxkk52nmwU9CBNCnhbaFF7uCo7aTTJL9Q7GwiZZ",
  "key11": "4HyugLftRPjTiwSRW2Lz9dsMN3PcoH1Bc6gVsVPPouPDvqJNwfLs7EJ1D6FLV6DXX8eVQSXGwE9n7n4F5fjVFvLe",
  "key12": "5udwpr2kZCw9CcNJp5FqBS1GaUwDtaQrC68rhvtBPoFhv4XW24SkX7PK4fF3K2DDipsCvR4nFwEZYVgTp4PFpVAH",
  "key13": "39cPgUUM56inU5BCxKjXPLTtu4S7HvH3BNx2aqmGAXktSmLFSgth2pnheHbAQySWR3fQS281DVh84rMy6NBMEYf2",
  "key14": "53v8w75qHegrAZ7X7PA7MceepckELSR6VPu9eor482y9CUoeGyukxscGrzLNxozXUj9qiVFytAg9hyHWzVH3HLUD",
  "key15": "2VZt8zCw1egxP8Dps4VRZvwikX2yeHzMu1ARdJNJdXddtUoFXh8CT6vjqiTBFrT1HDvbXRaGgv8TgZCgniJd11R1",
  "key16": "5csSWAzokU5edNyk3gSK6xjyUPqXoXMssr3oCEnZPKCHYsx8TwpXxJRaVQT4JNmV3zgpvNDg9Fqjtk9RYrv4ggvW",
  "key17": "3KSox392jZPDFNwEHNHxC5D7j1t9FTP6o1rRnxyWxHXGAZHVvB5cwMLosLnHxqsqt3YL3t1EtA8snPsWahqPVtCN",
  "key18": "UxQjVfC4jNEkpt5JjEuFL7oRVomrwuuDwFj9Fv8EjLd25Fvkcsjq8h1J6HMC68CPVP7XYXoCHyijjqBdad1mmwd",
  "key19": "3n9EyFV37Dr3w2W6DL4tuwKR3HKeTgU859SxjBC5S4Fhf4TuyAod1CSuH8za35o5oBgTp33ChCnjV2njbkbAJeXa",
  "key20": "4nCNpzsSCzW7dVS7WWC7MfbgGn8XkLDTbyoHPeGzEq8sgfCHcr8uJuT7bdkSDfDCWgiFccVumpvsEQk45XR517J5",
  "key21": "5kqWVPsG6Y4XmQp2y1yKv8aH2hRU5sAa3hHm6wizAHbwCjoyMHTViHUimNP8K2JQU7gtnC7mdWhvQBsQs6o9MGZy",
  "key22": "3auGTMjqauJYmkKzyoGam6jauYV9Mxz8Jt1JaB5WNgHKG6ZauPPN6WKVn4FZ8jK4FY1G1TuAbUxXbfFbwxep5ARE",
  "key23": "4QQ7Zphb6pfCKJP8euexFyX2URz6tZg6f48RpoypeCNAJVRqDS4hX1SyoteAXkRRgfmmnpsHz99Y9EuUhoDdPaye",
  "key24": "5QfyuCXEpiEL3BMnSKmYiagd8EEPSVA53Mruxw4P8khWYawjDiA6MxegrAY6hH5Y4kXw4f2CDKuMbG3Wofz8LTKp",
  "key25": "4QCz6rdxhXqXASGXScSJ2PL9SWYG68uSfeKpkBof5Xs8WSar5CohqzZGUV7nDbgpYSAnKRtABNJbNy3vTEYtr6vK"
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
