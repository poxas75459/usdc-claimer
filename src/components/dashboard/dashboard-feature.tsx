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
    "47oohFi2oLYdxvKiRint6bDDtQyKELZ9tUPi45hMtq7Rjeb7HjHMDHKZffqog9wUMqkTBBRoXf6UYD6umsUmG3uM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GMRmwi3edxgsKDj56DX1f7Tm5wiRGEBJknyvvxc8SwhreDzT62EbDZq7BugTEEWB7FXPufQJ4NSjmGXYLBPUtTT",
  "key1": "yHqwZ5Z3G1L2Fjvvde8DBFNTPci7hd3JYsD6dQeHJ4UH78yzvrUbNYPmi3G64ww5mVqx64MtkE6QGBaaazw98z9",
  "key2": "41fGDC8jwZQ3yEWxHKWnoepVPZHd85EY36W2v8oE64tXanrX5JDN1AN4qxST8Vq2opDP3Ww83AUnWxqBKd3mySKQ",
  "key3": "VfukVzKsEh1tiNk5S6AoNNmzEWYLBbVBpKv8ZuSVus1cnF1ppZTgvyv8sKyH3m1JmPQ2N9MRLN6TC9LHPRoNjk5",
  "key4": "WQKGwQryCHkKsokMLa5pVnMuPpDBBqh9H5bp7WvJArwGak6sdov67Mw3tzehRSZvKSynZbw4tzSnbsVNwEruHjJ",
  "key5": "55MMHmrcPhouuk9MxYgEnkP8HUizjpTsx7CKaViYYUb6HQjxViJscktkgVvcEbGpQbF534jE9JyF7XpmsijTP466",
  "key6": "4nXrf1rStRQCWaHUV7bMsANrUKh9Z8QGPvHjuBnyeq3DYwfjqPLwuP44TJWkJUUmCt6zG3rUH4FyNZFNns6SC1Th",
  "key7": "2HNSgeV17tbrgpvvUtaSoDhsd8rpRDHG9UQKjHMCEuQnkRfTUHQQG98BQdUngmmbni8sAuprZi7fTq2ypRU7E86p",
  "key8": "JFons2Ry3uBf52P27RAqkGdxt1kEZ1TXYJzGTCGj3ynE6TdsmLCV5oXYuDpXUUnRFA1D39Z9LTBBW8qEX5KJfJ2",
  "key9": "pF6yAFxbKFh3k1i1BdGQG3GMjw3qPxmTJCf39fpwRUuouGTX5KYv7D3cYwDndcLAYY2hXwbpKPmdwVwExx2DEEL",
  "key10": "4NJcWRDwddxz2EgjuLkL459ZUeAYiL5AsqjfSjBp16zBCRX2pYKv165cTB6BeT9Tt5qESXQoJFqm7RHtiqueNYQF",
  "key11": "2cC8M2hu8duKRK49YRuyoiS6Gy4bpMfLx7nXxE97f7zZU2T26obP73jRRMkTxAguWF7v1JrpAk8oLquWUgTBbem9",
  "key12": "499k5Lvxkrr96aSCe4Y93pDMZFGcaQVZrv8D2j8xWusfj8HvQXViwVvwvvvZd9KqRgt2jYgiR3E3YjUUKC7bRW4n",
  "key13": "3nd9e1N3fY1gPVyVUofVQ9UnAQ9LDbxCPtw2yYrrv2BniKa9mFKyvDotLAUBLABDPn9qFdvkCwwFFEz7osTyVFZo",
  "key14": "4aWJWft1zvMRSaVorbSQu1eGKuL2FbPLe8PwoJtppPbKH6qQjqPCt1Xug5HyRa2Gq1KBH6kfZC4msr1UfBHpn9V5",
  "key15": "5pWPCjDoEYJcEktrsAu9RopZ23wesChvqBENeNCZ26GBe7hpjU2QWJ7zBDAirekhhS2AbwSgdXwWRnRjbzfbk7QF",
  "key16": "2N6eh1ZQsDn3GHs6p8FVUKzjKxPu1zbFd472oxFjb2kryUdZGXyHGfsEDsNFWuBk6bN8XK82CNDJDWjWwJsyEwG7",
  "key17": "2ZM3ZWHkJ8wEnew8FUmj5hedvPBDHTBKfsPWnSEkRxdZLGuyPPmuBebisKAeQ7yLYkWBGJFYAN7UAm4fuE2FDNeu",
  "key18": "3rL81akwFqSUtPvZeu7spzEmx7oW3CaYFttqkCxYEYpyRkDqecUGpjkRqpw5YCqBLg7wrK71t2XSAWmSxAJbd74W",
  "key19": "HQgfferqXfdNtJAppyGEJ2uQv8BfYgAVedYAZyhpHWmN5JXCwyuzFBKKyQpvZGoZ3wqMHTQHo4SzT8KPDUf6Uqm",
  "key20": "aEspf21KnKkbuumWkeg8XipgsL95TTYamkE5YYSLJD3Fq7xLWo7LaUiPtucQ3C1mRg46TyANUDH4hnBsdBwxc4P",
  "key21": "5AZB3oR1Ch3t9S7voJDhWN965SUrD9oriKjDjAkpyxUihBup39ut2uQzSEKHXH8k1vCpwHzE9zhskT4j3PuUX6Gt",
  "key22": "4UMMG6tusLQFdjU3p3ArNB2aUKtU44H7nft7NFu9NTAataU9VWSb3hk8tczutsaaxTTXDM1jR9u1SUutmRoWaNdC",
  "key23": "4kRAZ3XUMboJpNed4G67XNbF2rSvWGMpAXEPK4Az9tMdRwEMFi6hLJHUyHdwvmfzyJ41QgeEc4VWym3mGX9QqdpT",
  "key24": "37yB3Zr8VNWd1Y3zLt8rgtaZKhkFi6s9Cmo7ihAkXitnerx47WJCnrX1EeGSwiakFqp9xQgHUDStcYKdoRT3Nkye",
  "key25": "3pUajTmEFYpcxhe4rJaSinVhr6Ub388Pn77tTR1SCZUAEchJuHAYxhbURvqC6EezT4JJSuw4YXXXco1rfZozekZU",
  "key26": "5gW4z1yoR6CvcE9kkovoYnW23CFQXWxdfaZMuC49covF8H9fK5Dc9EUDytPA5zagZ74GTmdoiAso5kqASRK9bkH3",
  "key27": "2dV2X99EVURbxMyr8XRpTySDFHaThso3B7ciJRd5dutJ3BVrEJEUP3w3qHkKbPdszQr2NtZqrHvWsrJDva1KgxnM",
  "key28": "5TxgoapzHrp9mFxbv9mNDEfdb2ESHdyupqkdcRrHcAJ8mKwrspk3nNf2W5wPw9JYptWH21DSimGXutbRbFdB8ff8",
  "key29": "2J2AuJVANACGDASEWRJWy9NsNXZjX1HjYbxSyobUX4TGUWKGc7SvpbkLik7ZLyjr3NqxB24opb1DsyxotzdZh5Ey",
  "key30": "3vEQMxjGWaWu1S7t9En1cSHLrMicwAfP9NYxUHwniy843uQuGiUJ7sJH4tGbfzeQYXuquyj2U5kDzKMYs8iCn6mT",
  "key31": "5Bp4KDRzzFHw2wjkGmihfjJyEbbFaBkbaysVAv1GmSUpdiPbCXpkxaPnLuB9QzeTsTH6WU6iEYjSaPFLguVaZieE",
  "key32": "4kDDVQydMdezLGdxkmZFCBiDjaqacpPus7yrusTGn8VvL8r7v1Y3d8TRaYJ78eSLwAjeMUank8JFKRZn2nTpUh2k"
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
