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
    "4hJzxMTHrn5Te5TH9rEbQXYkWk6Hn6SbA3Mc7cbU8bpUNZvpD4oPStjNSoYUXoNmBRsNoUuxjfdgBKvDXi8oFvQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mp6HfmdGBTR1i6BXq4e1dPBwaZqYAaFRq1Mi1Vsb9cGNhyzjav3UJxqfFpdosCXsFE49sfEnhCGXo6KxzzuoVjM",
  "key1": "3N1vWM6fCebcED3v9t3GgAHaqN7Q8CB9cZG3GAFiqBrSzzxWqafGUBZqqCWprVwrwPUTM1Z9phSMdwXDM37tynLF",
  "key2": "5bWkeaZ8hfGVdxYmvvGyR4Ue8oknXGt2bzoKEL3DeM3B36pLu92L9DgNJiqs1GFW9rFGfzwHtWZfMgxoLQbNxiw5",
  "key3": "5UoqFEnvafBSnrBEK9xRijAchYkXa7WN2UA36qu13hs9FtG7F3p4v8mgAVBhC6k6GumUrt6ZZDz85dzKQbVXX9fz",
  "key4": "tQNhcqpvochErsRacWLziMhPhxa2iEtNHS4DUgXADSr4Afjqeos65mfNoGSmTztYP4FwCxn4nD3oHAXkKKtKhht",
  "key5": "H8MVuVu4UVsda9q5xfkD3gd667LYx2if2zAWpG135Ktt4JPFuhqkomLPHBzaRGPGz1vjNWmsP7gviHv2b4wcjiw",
  "key6": "56HbPGnzc1moFWTWWMBfetDXXfZPfbuhRNP9su7GnmG76NHVtCp9TV9VuxqP1Rs8NeVJxZKk6UXcZoUQ9fDVJHTX",
  "key7": "qgE483R9EFuHKodyECRKuu614G8KhmuEXvpJhLXJQMd5DhbTXg8ddkjvYEHhRRN1Mwv6wxdS4kHb5jeW7b7o49y",
  "key8": "3Bo8iA7pnVYfuvyEmNZzJquTTen8hGEtC813VssZkmRhUJH5xKfDnKuKQjPX42xkZioPthgycjp99JwxvAhsnX9e",
  "key9": "4MDhyw3WAyZFxnMgY9LdYvMjU29d2QQfuopJzsgZMgMuBy1Veo1i8pVe8fmeohpFG3A6dzYxuQuRm4uzTh1Gjde6",
  "key10": "2XRfgpnBgq5by4AKNNmRNjNqC2mwnUJ7QZTVTtFNbRzj37zdUTNqBw7EmDSnPdhTPT3m2Xmh6moMLqj16PeUNAKF",
  "key11": "Mvq5WBEsaxi44SsRzj7FBESjQ3W1SSfEynAy2ooP3zYWQ3knBkNL1pc1GfUBqyc36bgXF1rafW9L6Tp7nCurrsE",
  "key12": "VUn14obhc2Ly93WStaYurt8c1zvgNZfjcrbJxttYDsourhbFXqpVTo5wQZYq5srXqLgDW3wwiUoYWWnkTX1imJt",
  "key13": "41DkcA9PazMTRDvPj6oyQymVKvemaLQMP4Lh5xPKmkeuyGsSBb32v2xE9ZY7EEoBD2UpcxypmVg6zKPxBQqMxjaC",
  "key14": "2fBzZyHnMQoym1PcsjV1Zkk5KzNtUFEmg4N4WrEs18KYYcoRUQekq7uHU5DiC3mEr8MomHj5om18SRA5cnT7jAdy",
  "key15": "65ZC21GjU4sP9uks82QMMR75jKiuGNTjDzejGRYv3v2jd7WfZF3SWnSFNfWv7j3FQAuhsGEK2rU66oU1VzGLHWqE",
  "key16": "5qdtdkmWCJVYyvVP7D4Zo3HQzu3cYmw7C3Rq3bca8Br69992Vg4KmCixPFipwhRzpbhZHJgXG2G4rsUx33uV5cGh",
  "key17": "6wCsU7tRSzfkYLhEEj1i9TAzudEv3gLYcwt8PuiV3ws6sqvnrkX8XVFspJnKx86wNGhFph5Row7XJ68Fm5TfQR6",
  "key18": "T7JJSThDN3wtdpHbhNxgSJsf523LD7pL3PU8cchhMtcDvyNv1jKPKzc4eazdR2y15667ShkcsBUsicER5fwXATa",
  "key19": "3QjyYvrXaGHfoK4MwgAckqZYpKMBFzJuJB37WbSizXkLSexUVwrkLK6KiGLFcqqPTosrU9vPiKKUayZWPzzYyiju",
  "key20": "5FDrjSYAWXuULvy2K1cRmfkD4ZCbm55Xfwq4tpnJ7JaM9DXr9j35TPejWRWEKakeKAVir99KhheQYF9cmCabJAtn",
  "key21": "64Djp7xjfFHEyJ4SP4Rgc9ZftRNGKksD8ePLKgitYYZ3kFkCqDYdi8iPv991oWYGTjs1Ec64pbDEQfqQDXTt22Rt",
  "key22": "5xy25XFRWfQ4sJPVXaTiJne51Kt8dWMYgYadPy9HVX2CPfqtf8aYvJmQEJEdKinorFr1ZrY4nrurB9gLcLwwvzDw",
  "key23": "2QxKNGzLFm89SpxkFh7n3dxsTVAvUag1BK8AJox2h46fAa22Lqpa2w7jZcXPASk29tcGHdB6DmEeX8or8Eru2xFG",
  "key24": "3Vp4XUwbr7Dk8nxno8ijnLNPb9KFKKBiFnwfqynUsdXV1Z4ydP74eFdyomTsiu3Cx7g3hYfXBYiQxhKLJZdeRcie",
  "key25": "2cexqQTdrURHDALCn6FLRGUZhN5AyN3ctv5WzAXpNPyJL7nkiLqnAAdPDbRkoaefRUygxvLm16wkmH3urCRM7rxA",
  "key26": "4H3EF4E5XYfWhJLZEow3bgVc2Tp1TfjyZhP2ecSVECGHtCVnXbHA34YBn6eNbSGUmGBkAP2K99u5eR1UP5G4sqWY",
  "key27": "5my2iJc6HQLrnem1kEgAEUD5mBsLQic5VrfonrmYHX2Bb6G82ui2woLvicnt84t6ngFpFyGYX85RhPnVXvQ6A4XT",
  "key28": "32T68JbSFgG7tnMScwpyUMR7zEEfrXDSPruCFXvMo8LrEmTuaxGHgzh9f3aVEuRZwH25MJQ93L7vebdgbVi1YtzG",
  "key29": "FB9KoHuuBUwcR5kRvexfVJeDn2NuLYPF6N2csg9Q4rrFAmmLyp5SG18pLcNZjyxNEKvWKVaSTfPMHW9Aso11NzX",
  "key30": "5YbqER1dgmUyCiW81JW4T4Sd2X2gYGpyshHTdPFcmoBajLhY6QMJarK3VRvtc2tbqWmXNYfTPjt7FpaYgyhTQCgk",
  "key31": "4kV7wPG673gC3FcUwm3JP82qs7g7ErULJwRapCz73NwVxaU1AZ8eScgZJkV3MTRkRG39p53oo6UtZ7PucpMycttN"
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
