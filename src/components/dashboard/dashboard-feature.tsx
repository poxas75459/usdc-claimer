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
    "3Zk2YU9WdpyreLBWERKxrAKXTVUubUSNE1JTdmudbfbAR47oiTXycFpUbZ4k87zqzrBKokTFS1BkkUFoC3kiEyAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mKLz3i5LTRy92rhj7HmGP9Uk5usevBP4fnC7Sbkx55nDB3PaWMiYMeKGVejHSUA9P1XNXFnesE3aR8NLVEL39Cm",
  "key1": "21X8NrnaqVJLFhE4AxfVgDw67a3rYVvHDHAjqVMfADJJRpNUmpZMCWuzCAE89XRAZ8y92UQEKUWJRjU3uAghynem",
  "key2": "4cgWZus3DUmCVEEeh7oSjLt5UdQs7xAMqNKke5AUxyVVBkeTGMAzYQxX8h5r4HJ8jweT5qFpL67V58xTVLNPZtWW",
  "key3": "4cbZcK6msDo5aPxPQHX4GBmnQHTw1DHX7XmRhTD4YvVxhPunD1DndTARWXV6tNSJ9AFFAiEz62cVZ2zU9JhXtfDz",
  "key4": "2Gvf469Lnk3dVsZU3eyGXfVivYVFuk6cqdKUUG4WH4NojheSXDGtBRAjsEctZRTm9XDZjzj5vemcpC36QozbhW7M",
  "key5": "2kgTJ5XeXFzGmUWwrnjH2BUDMwQe55WZqPoxbbU5NFToiBevtyhk8wXEftMc92WE2qGkQ5Nfs95RChUg7SKVa3Es",
  "key6": "4Yr2EtCgiCgVrtFhDY3FG9B9saaDYSE4uM1q91D1UYufzmxSgawsS2jncKMQfuVZB3h1MADm9ztGGUJKYwyUqnHH",
  "key7": "3uRiNZgLXNdWCKEkrCauDTPwjyJ2so6azgo9hDvxBJEHNjZ6bE5bNbSk3fB7Pt5M5morqnWp8z5xoYdtqfn5zQNj",
  "key8": "2g4nW3dKAQoSKqmtAtaWZNSUtxLpveS8pwJESMLQuGN6co2WmzGQwG3M92dxTGRN6xRQGaFhu61EF8tGoUbuzX5e",
  "key9": "4A7ciRJtamgE7fd7LrwafBEGSoTuGV8gNrz6Kjk6kjbN5pwC8FtDjXmPjL3aiZjrhQLMgt8efdfNqcKZ2b2Q7ywH",
  "key10": "31du9AuTnPQ87oSTgHZSZHEmJ43B43vU8Pkor1Qd83nFMKVW5DQyH2G4hpChaXBioK3AG7VGMiAsVo4pXyA2Bnso",
  "key11": "4ZbAfcCCnep8XHzsAFCoPeFDJB7zgSx5kU6pWBsQGCLJ6ifCtGc9Kbmy5tZjD5d3WbvVxPGibxtyxsfBn7rG5Nav",
  "key12": "53gCFCC7aBCLTRbvcX16W4A5DSTrDQfJZ24gHcMaQ9n7Ssu22w4d9AZXFiH2Urp4jN1bb9b1cRJV96NAgWAFknXT",
  "key13": "2tzuMZ5nBJPZfW2URVT17kzjk7fUfq2mxQdV7s6jgLDFVsUVrXYhkiK1EvyGNha7HCqZdYw86h7ckQ9LaNTzYpHh",
  "key14": "cEcW45BJQeB6SQ7ptVujAAzbkJfiJky5eiwLe6yNnne88MdDTzDHcD64G8w4e8vHePNk2P4zJ6Y1NkZRLBFgRUw",
  "key15": "3oHRxXyWy5WiA6FjgtCxSP2s1EaVThjfeD3aVRaYY2ALzptoNxUENc34x8LZDm9B24YMgrenHcnpri3paC2aovVi",
  "key16": "MpYugwXzbN6heQecuzPuU5btYXqGvxnme7LbRuSrMcLkjo8zQ9VDLnkL31setz1ExnoJMVozW7rtLHo8rVKKMWv",
  "key17": "5hJYrJrmSkFETxXTJ1bWRwUZ8KPoDcLSxFVQ5AiHDCtoP2LJRjkojaDdGiJW9bGwGNPrnnKeSgEfAR19EByjW68a",
  "key18": "2xppjSZs47bbmiDzgMFiqFTTiPNw35ux3aDg3jNhYMUTpswRyAwQvRUNmrTAEk7awEuL2JK6XAL89mgUCqpjo6yw",
  "key19": "V8FMiEsorRjxR1UxuNgPrdJ4t8b69RGTDA3wAh83kwyQwPJCou5FvVhj77eUZcqqM4NfWbdoCNkWk1v1FibeJRJ",
  "key20": "5knwRp9CwoY4nVnS39KboJgpMA5jDZNoL3hA2Mj5cohKVfyz7XgWb8PouUcao7Xjho5cGoRt9Y8SnLkzor7886Fx",
  "key21": "5gaNCRUEzBwpYmvBcNuxvg8kQ2PogQqAe13u6KsajGVi59ZEoHNfeYTopD4fpbGbcU5HbBC35VNBnLsjasA9BvCF",
  "key22": "w93hVhvtherc5dGLsSp3PdJq8mvZa1kYRW59ZFJPNrT7LfH3zT42LCkahxc6saZNEKEFJqFaF9oPh4VqAU2uY2Q",
  "key23": "3JqdJJBjzTWUXEytk3LfmYfvLuv6cbtVYQQaEkyKVgqTrQyPAkzrYmW6ozgBb1rc8ceMhzAvH1jCwFzTPioLr5pM",
  "key24": "3wCVraox6UEcctYopFoStP9N22FiEoEDNf2pnyhWuxDzfJukXb3Tc7L58PLBNM995vudwTDU5wWLVBbdkjADe9C8",
  "key25": "2bPqcFWzTToLkuSfszs7u3821C4N7YpMbehjnH6nJCbMn5beR2ye9oBm5Hq2jim6KXa7orcL1nHsMv1Uw3Cp217K",
  "key26": "5aqLfo8QQB9aj1oz1tFYHu5mhLbBWLcX5Cg8uyzvDsEEf9aZGBGMTayPRQQFL75Jc3DV2w4cJqcBD1gNLLAa9kng",
  "key27": "23iyNp9ZsA2UMcDtCEvkjxfEtUdv1yCKVQ7Kh5g4F3g1un9TNTbhd8FepYXUX8BS9MjregywrCaBfJDhgjkxGofe"
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
