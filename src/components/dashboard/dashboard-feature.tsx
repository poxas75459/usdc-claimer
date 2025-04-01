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
    "3DMevyXERbCASrSLyJmQv4mwbsRg2veGK8X6nQtaYkkUZH71VFTGD3hHi6EKzQx51RGLAGhobVQarc5Kxg5zRRzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j8CtcxyRamLiSh6SzbYWD8SYHgCqDZPvJN9t3cBowSKod8JH59zMazmsECmXh86Ch5NtHpbFpbnfuR6PkGtBvX1",
  "key1": "4qdAtxzwuxWmNfk4h2mc36qQE67vzDydCUmHmqzbt5fRLGu5j58Y3XY7bnHHXxUbhYpLi1bcBS3gkveHR6uzGcBR",
  "key2": "5nDzopPyu1FBn1Tw8HScvAzikLaoknzjsiYkKKGpGYM4KRN5WbNgbVLwEYQstPiWe6iUnjfCBHxa4EsGrxPZaeNW",
  "key3": "4p4tieJkdqhkpbCWfoWwULabXdi9DqoHKHY6jcd3tdXHc4hSeXKd5d7ZRCRVfGSmbt3JynJs6b4AMPn4fenNLwtK",
  "key4": "WyyYE9PS925YFYLTyAZ4tWGZ41wQDsNPbKxT5J7jsVmZB2B2S5xYWKXoEDp8hkGvmVMANCork2i9sSARi17JTmT",
  "key5": "4L28DLNFLVuKM7PCGug8cHXx2o8Ac7VbtVJNcCF5r39NLNt2xrsnjKULKTZKc8EceVaC5MEQFfwpE54fMgdCevuX",
  "key6": "4XJcmWrjVfZSr1siGqaTZCBriVTfB5ECamRLnTpwVRvecYLmifnvsR8nfBsHPxy2BeCaYtLT3KzQzWEtefoNYLqw",
  "key7": "3BV87K4HzMnP69VYKRHwjmtwZQ4sJYHm56Uhh1Xvx93dGmH7LdJPzt9BSdrNsBLGsnorzYu3EahhkbTTsVLkJ3ni",
  "key8": "2QfesdMs5GN96ssWr2coiakqtBjysn99wsJotrHhkRaRbBJpk6rF7tpXCmhF1yTePkHaKZuyc3EEb5GzadqbV3SS",
  "key9": "3EiAheVor4ZoUQfEguPZ4Qmvzz6M5SzLEHjr4tV5ZwkiD6HDMn7rPXY3dXghKJAR7A2rw15wEmd3HRZugBStW5rm",
  "key10": "5LtyjbHpcSSgyuHxqMQ5i7FjQ6YujLGnA3bNH2TeSrPGMVKATPzR7YpA1PGjk59JKaMNZHSSkHsniqwccYNp4GCH",
  "key11": "4rTDmkZXWxniRmzfGikYYC29vakhsZhMDQ2gXxx6JzErhijun52uxeqMqFB8hVvceR7kEu3YXnyaE3TcQ6Zpmqhy",
  "key12": "4WmRX4EsyBXk4fdZAMoSzCpTdx67D2qWdVshaxaWeKh7Ba1Sp1HJLfjRXoVZGpNH6iJWdXobssYo7WQP1i4oABkG",
  "key13": "2vXYAwHDvZL7dBLiB7V5isfhqnnVKqZDj2DW7UFFfDgZ5uwrofGuTgxPsnjWzsbHCKweCVTucLRevcEw4pnEkDSi",
  "key14": "NPaLzMWRqp1XKen1WskLrBFqjx8qy9Fbh4NRzVL3sSkJZ52vZwnpv8u14MvTWi8hpFq3BmrERXyAvmbu5tBvYsj",
  "key15": "BTGVz7ZTV8oVX13VMb3axuBH9R2eQ7Bz4Wzodn6epVPaJGAuKoPBfgYhg4reTvScBXjijEuKfqHVfSgSCKuWV2N",
  "key16": "4UFUB7XXsZhtmZSYJiJ9mc7K3tCvHxni8kD3bLKoqQbhYUDrPsgbRv7eESMmnUizrvvDh51jJj3wHaoQPShNCxRN",
  "key17": "59kZqMYDqNvTvcSKu1DhoPax7648dW3TKmerVD7z1EzohCFg2XSGy4jXGhkkoyXqTQycwtHfanidKdrbHK25spGf",
  "key18": "5BRd9ntaVLWzgYggDEpemkm9L4dC9GGHTkDofUno9bmypRucSrUgYKxNcAURo8vUCDLzJz8axbWxtyLTmES3UCpx",
  "key19": "2ZMnnsNpmnH9sU4ks1F329gv4vFNYFYCNtsMRPxzpg7kT244AgDMyVMgBiyUG4wx8z3RbJKHnFei3r7Cso7GkJgR",
  "key20": "4kJeKRsHVjFGPE64wfBrbbWRUzoTsn1peTSmGUPkTeEkajTG1jLBsP9qeAdyqFi3TLN48UtETLW5DauovEjDeMpo",
  "key21": "smvooJFXGD1WQCSwgWoBSqBgFCJVcg1pAeK1zLkbtZagVy8GWb4KRLbpuy6MUpZ1W6wu3sWiJcWLzAa1gAp7e9H",
  "key22": "3vgT42rTJ9PpB4BfxAkRZVUMBSZs7F1kxaLiN9KJrnxCrEANHTQcDnPGvPj5ZECkJp9SNqoUqSQkwzawmXhycyDA",
  "key23": "2jLeFqU8Jjk4NkxobhkVq5UYfhn6X8YrTJEAd9SA8ndyEomuKvArS1GAVskWpd7JpSLA3fhbrADQHkfzxm6YDtM3",
  "key24": "3QQuzsqmQJBpxRVAGqeeManwBidzzvL1VpKAGAPm1TtnAJW73GAAxBoMo1UdtHpJvawyvFzeTcKvscMXSZ3YfVrz",
  "key25": "4KEtsdYZSLWfdASVXJ7Uj6Gdf4nLNvTQptEQZrcn9PYbGd3XMFTAtPrkfiWK8dJQVtvHsB9b5PUz5r11MJvQQbUR",
  "key26": "5R63dyaV9Wv59DkLDozwC7sow74oQ2XhpK5f4euHM6NSR4eFr94MUTpV2dKCMHyEK4SoJShsoZG54DufJpTMaZc1",
  "key27": "CDcZ29VkGUmHDxDNSxoNvrqMn7VYuqy2Kr2hTqLbkWdRoeByyF3nX4TGBh3xSBqs2tvuyeXAdBv3Ar82tekEQ4Y",
  "key28": "3JYaryA97REFiQPXEBeDxYAiXApxBuxWD74Gp5UwQnXGwAbLuwkzBJcR3Vg1n8YATQyqCVfANXeSwv3JyK4aGXxG",
  "key29": "21DunD6G1SmeaLwTnKZsVK68Ekd9KGYzHVGTJUeXafMHZkmCgafoGwXsJyZwHYt6K5LHnAXKmJos894fuWsP6X2P",
  "key30": "5QG8JVC6ieHzZch6MfGgNKySLzkvDQBpoHMTKM7Rhpw29D9XngvQTwnQb67eb95Xw5v7fvimZ9Dh8hAV7SBS5tQD",
  "key31": "jkGdrZBZE3z8W853nXaQSi7TcUughPgV6tCH4fhzP4b7GJZzPHspmvGKH1MZkYeXkpYV7yADF8ZP23mkig8BhB4",
  "key32": "44ZhrZZVgWrAb3gZ6s2CxpVmY5ut1UPmLCXxsexaQ94iYGikqUkLYBcrqkXgzcEdK6u57dVRzueAd6EmwZNkBivv",
  "key33": "Kmuck6ys5yzzf3fncdmE146zxD43Dxbpho2HbS1C3B6G89nAxA99FtMBvxAKAt8svvndfhzEhwZmapAG8SX9g5H"
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
