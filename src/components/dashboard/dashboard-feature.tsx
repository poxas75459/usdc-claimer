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
    "nDrk2BKAaEwbSyhuNHTrz1PCrws5TBD6zZiS8KZ9GbU49rAiMecL57W42GkZuUYtEeqvrbfNgCKdmBcbe5CFPfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22daNvSno62CB82sbbehzet37sfbGkFoUMHGUp16pPP6QKnEeaAymSJBXs1VGxutwtQmcxxJWAagHqC9h5u3UAyD",
  "key1": "5mAyAZXGRBb4Bij7Cy7wsb37yBv2Tb8NyvneTsVcpVW9WPQJLCA7rASFy8GnRdjq5cePHjYUWC7pgysxx9H9BwKR",
  "key2": "5guJjg2RxwkkKkKrJSMHzPoaAiJkrZ65RLX9uBaaWL57uSs5vJEPZTjNs67vtpeT3ASxjUu66qvnju1KBoLbZUeR",
  "key3": "3a7z4uwmugBpuWoYysgxNZgGeC5Y5U38VjgnokUDvPjK9sU8438fxH4bUsEwdTC6quQTDavVZGT1P39oMzChAiDG",
  "key4": "5cZunmdV7SEpGiabChSnuxH5emQMpcE4bp7FbH4PAuQG9XPoqTPdP6ygcKvSXCBBfGYtJgeugEtsq1Xgqgt1uyV6",
  "key5": "WLB8m9E7wF5P7wiW5j8rF4ZxMBzduxzAFUVNensjG1ibZetaRepkQMzy3QaDzTLDXm2GnmquCs2JXcc8bedxJvZ",
  "key6": "56LnRWokyqww17d3Hnemcqyc4wLNaPhrz8s4V8NHKxE71gtD7tdeiMk9aaTqZvbXJ2YmDbLRkgfXGPK7skRKmCdK",
  "key7": "5g4cn2H1AmSrSV3XNeGN7d2dwxb5whZgCLXQD9N5MiL1HKqj4vFxB1kgofdx8Y2BmtCcSAt4iC13mBxMZqRga9Fe",
  "key8": "47F4YXa1CtdRz1Fx8cN5jN8erXK5cTnVtoRn2AmTEGtZjNWAJXzZpPPrZYCdgqk5mZZ1BK2EdSWq7RNxibhGKaNX",
  "key9": "4dWPexzz4MivRToWXtRSazWcHGFTKyj3J3giQRkDQUgvDgGrgEiQZMqjwDX2g2znaHKUiVJgXFujxJJajQF9NL58",
  "key10": "2SDuVLLvQ1vfmzTWgVLfthg2KPGbGPs7VYvskaYTFZn9FvNiyXCJsHYP7wuFAeXzPhywLU5hieF6C9FUfuGDq2Lh",
  "key11": "3FsVuXjugizq9cCmCNQFEsQtDpxn5Bsci95DK47hBdE3sZiJhwmfn2YPZf6D434fofYkLF986tY4u161nMzqYQYH",
  "key12": "2tApKj3wJTPRzH3niwRgfpzHVezWcXAgKEMnfDRJSo8P3V6TVsiM1yVyBSgtKxo7VjzwPDjzurviNXD6G89A3iSU",
  "key13": "5soK55G8MFsojv7S1wPHbs9bASkyF9ZGnSsHEh8Sfn4qCGJnraT19zW1PDgsqwD3Gt9q2mwSwmDAL4AycBsCXr5v",
  "key14": "9YiRkm1hUzPcVyZRnhg1CaS6766bm6BG9x6XrefPxEfdXNJMmam8p3CYSnhwVNeFGpu5483TX1GaKw6jZCffSNP",
  "key15": "2XypD7aWJWCw3ww2d7aUVPNgGunNaPK6huKvDsaectkNMPm5yZsTj8GQH9Ragfv62N4hitRoiYnx8aFadFRWkjJi",
  "key16": "2op9WWu2tD1AuBUgAGo9f1zRsnxeg7R45xB1tsWhg3qr7CteF4woATa1VW7seK2YSQRWGaBLv3P3C5vAdeemCxJB",
  "key17": "5qpsBqRVEcaBFqdeJ4i9x4WEf6cpXxwZteKrdwxiDf7x6ZgKYPxKn9dfhwwyKyj1ocKBfoX47N2HKbTxpuF5R75",
  "key18": "5X9V8ZWrdciTqRBSuAHDz2RvWq9NLpUZBVJwgUnCJgqwmxaz8p8ERtFP29U7KtRsmYTgVHyD4wGv67ZF4nAio9Zd",
  "key19": "288cKVBVLpNNo3v2K814W3BjrYoTWiodu4S8kKkbfwuF56Ga7gBbYqhzrgEiuRhu53Q1tfK2HHcgsswwWua4X8J1",
  "key20": "jL5QngzL1kxmaH1UCdwPX5rZorzFhm1vBpScb92xuDyvH2KiqwZTA9LAgm6hujcrrRhiTDJTZYZMkMPdY9P2WEv",
  "key21": "4849cZ1Kd3B7FJPLMsdovh6wyDTTZa6qDggnHAihKi93SiUG3WQQfefWTZfJbw91yCGEvgK9d7Z69VwKiY2TpUaw",
  "key22": "MFWqZaDNicADLtzFHToFBYgvmF3HbzWR44tLN5AwPxPFrGRbh5Rr4PpGc5ebDZ98LuxXWpLxvgC1zyjSiy5eBwb",
  "key23": "5bsYd3i7ewWfTHrqWHi6w9ktEPEaAeBC87JEWf2MGc4mEhxb5LYWHgts129kXCZ3MxpbEgRsGGuudEEh7D54ti1s",
  "key24": "65kD866xvLZHTb7bmxnKdThnR8cW5gSzMnYEDW6zARMaodcJpJmbNjDhZEx5xHMd3deHLzkasbqTeFA5yTjaGTVg",
  "key25": "5KLxjywQfaaP1DFPZUSzipMaT1AXsGuVUThMh9FJS79rg2uUjTKwj6NcggwtJpmSygMCkCEkiL2NMwyodwZwPQkm",
  "key26": "547WdFCJEyCGN9eFKdZGtwef6PxtU76tZHX9EnwDNQKMW3917byZerFrbznnfhraKbESvSRHJFkRGjUCLYaKKT96",
  "key27": "P5Edx6KxJfsrCrKAUW8PDpZJGNCwiowyj4GETPYcohjMs84AMCABQeG4zieEm18CAtfa47djr5HxSB73jsLpZuw"
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
