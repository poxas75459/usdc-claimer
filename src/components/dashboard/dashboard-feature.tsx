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
    "5YgouxZPaUocUTRm4jkAn3Fv1Hyuu5UHKMWGZmHQboW3A3Xmgn34qg6anaFBTZb4XgvvNoxFa8z3aYhEVyhxf8jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgGqnRT6intkc5gf7piqzxGQbohkfnTYbhQRVLEs9wvztYPsw3jWfws2r1Fa3D5RKEmcUVNS5Q7Nfw8mYF4Y75M",
  "key1": "3WWZVWKqvRNxBtPEDZvU7Nc3C62veSjFmiimRvWedDhZSWtFDRMmtUWD3VEpswv7n7qbhs4wLm4zwM4wu9t38Heq",
  "key2": "4DsnjcogZbXSJPjtLpC9gfFebvg3a3zWResaH31HSPysrUJrNvscETFNBT1rgMnnvCgc7uQmTpMnZ6cjHxxs8Ngq",
  "key3": "5grAnsVKkYpWw4z8GN6AyoxgfYtE3BKLKviPNXs6qJQrZftPL6Dp1TpL6uriPbv6vi5mfe8TwURp1TjTnDU42Sqe",
  "key4": "3jGAayUuuTcebzMhjibPEXYKEkpFNJYGSxbJFwDK9QXpdhKHwF1tM7Wxa7y3o3hppYuSVv95Af7DVwvfRnqMASZ2",
  "key5": "3M4HUusuyGbkXvwLWDAQzNWAVaV9rrzrLNyuiMcVST6mdfJLArvpFS9BuGQNY6dQQ75nJ6TK9MujvQsVZZCbN1Ey",
  "key6": "4TWziSFa9981f9vLi8Y8gSjPQcarpDMbydRxZkHRd8V8pjjiYBHw79cFnNMQkGvdZGDwb8rYEwRGVwB7CUMfFRUU",
  "key7": "4RcSmuCmiC5pLENn8pjZr4YQKRdCeiGkBeAq1seBWZDgjkrMTTVUw9BctSSF9RS4KJgnrSNYcH7vypTTPt16GeHu",
  "key8": "5Ckj88aqcpSa3sqetPWE2QAxi2mwfiehz3TnLbVh2qJo3brf67NDiYHgRLQtnfvsixjzYpBoc89u6bu9mnnyNhxS",
  "key9": "2SZjGC7f5JKcXvYy4zutxNV2HXaZEL8wRaNYiEaB18PckjHU6ZipGfruXULqijTmnozBCbKam1BmrgTW1RUrjtm5",
  "key10": "3Bp6JsvEuRSeicDLZ66M5RSaqtCiXixv9s82SHgdUtuFMBsfHEn4STn834PntbhuyocscvXBBLxiHAQg2NAw2U3P",
  "key11": "2SZrT5uF4VZSFGXLNokotatYhxwoV8tLjhY72vwD6V493XcbzkzxMpNjtiaVd6Z1ATxvF3NrAvzyz9WuSEHitqVP",
  "key12": "5NEiVzxizzrRgWMUA5w3XiBQV69ThmxmqRc2B882XGWKktNJjbUXxyDqNLpqtERoZD6DwMYdvPLw81kpgCcBj71X",
  "key13": "5UiHQT2ioUjurkrW8iEXNWMpHCXqmewcCmBKxZ4BtY3oMPydbLB2fS7MRqcHppwJgpFKQWwoNKBCqF2Hgi5hskTv",
  "key14": "3Q52aiR3so8FA3cGjY6rPhm9HKmcSfsCAhrcJGyRcef2zc1v3Hn4fKwLepJdtkBtrbuT1Gp6k2ZQwBCEqPoyVBvm",
  "key15": "2KXBwqRdqTZ1ZRcSwZrgqNXwSRpn6uJSXmvGP2k1f4wACq81megxXcGjuyFi2BwsuQU2F6CjusnPF7kmmwEJjdu2",
  "key16": "RcKFmmwnauY1UFCHqUv9JFdHkY1Doj9Wq6f65eKva1KvFEHBmQY6TmP3UdNG2gNWLpC5vNqFKg3rur44TJA4P7w",
  "key17": "5kBpAVLGmMAPJMUf9fbuPNdPDKifYa6K71MhjgPv3NkoT7FSvNonNo5TfqfBQk5vMUMph34Tg78ryrYmaxwKkfeW",
  "key18": "4zTim5qeUB6PqA6SFzdZe7cP7Vvr9Jz7UATSHPTGRmTc4BKURom56QHUe9a5qUjpzdZUWURYxNWiPzSkqnDCbQs1",
  "key19": "2e1xz3C9fZVJ2F9X2BfF4dncsxj5Zsb3okc6LPjwCVP5tWMSBtxrmVbZRU8LD2ncGrk8FM5ZDbRc2JbB1goeZvQh",
  "key20": "5fxojQkRsvAVsy4vZo5qBgL3eRz1TnLnac5beo6AxpCd2j4d8VSVsZcAPembM8u3yicT9SoUa1dtjZBz4KA8VExD",
  "key21": "Uk3nuZrj86bLsd4gzjALFticSWypsW47hXW8oFGQyhreT9aFsctgtvhASfneWdPffWyUuJewBq6NY44NZgsBcWY",
  "key22": "3SCr5qQxRkZZwVhUrTcPRYt19gLnH94763AMJrzJRf2xQDsy8No3QvDmiQvJ4tfsKQwFvzgwcmQCH3rNLCDyLydM",
  "key23": "4KyiG51ajWZzHBuQM2T743vgJzBqxzceMyYwfRrG2mxehvGd9k51zhU3SkTYQFGVzTMfqG8iHM7z93Fv8qMsk3DT",
  "key24": "54y8KDSSmzxsaWkEdtLc8VP6Dhm82KKxKYYYU2qyLbXRQGhZpkkzLsF4rUkEeG2SL9Zkg4g9BzTntid5JqMz9HCj",
  "key25": "64AdiD1XtNuQCVaBBtz93fF65b7sxK1Pozs6zhdxZbRrhMvqTLsNRPj4QQKhbgRghcC8tXDhEWcZGebDzennpmZt",
  "key26": "Ygag5emqA1UKcnpaGTYPEiVQ25z6dzmZiwqjDBFm95PD3muhxNMLNWsFGqB84Qb6vQukNShdntuTCfub4EBQtBF"
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
