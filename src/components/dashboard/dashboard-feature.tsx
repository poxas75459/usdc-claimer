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
    "3zdS4BDPv38r3t5wXdpHyCWM9spTayByhgj9dJ5AdEPUMCPkSfqyLEMhM4d8q37Pe3mBf15okPh897KXcSRR85KC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GD8HD99sfpPBV68H6ggDP5y5Y4XG76ewaDJDsh9CZRSPjB2PcHgvZaYdzYchoML3Y2t7V42r6SXv78uLRHm5Ycu",
  "key1": "3AkK8W8NFK8GnLDU2yaKD1j31eUfDAyhgCtvFwC5oFQ8k8KvuDpN4iyv4vcXSiWd3j1u7mDHJ31yXJKZf4QssVZE",
  "key2": "3CM1xdS7ey74m9rMGyfCH1By7fqK8Hbwsmyhe2HCPfXJbDpGSorVsiroKUuBBvN8ScZTtgydvDLJNc5x2mXqVKKP",
  "key3": "8qyVoxhbRFmcr3xTREhy9NkXe7RRVkHJaALoNtrJZq59BPoY2xyDBSPgb7j89wRggFVy4fDynL9KecVAjUst7HD",
  "key4": "c8iXMP8hgtqJZxHTBH9cBNASSRtfcU3rHw7GU5Vzn4bMYCbVsiZhgL1wmAEJmaK8Mu64pBzU3VHzKEJy6Dz6fYg",
  "key5": "5PFo7rosgUZBw3dkCwSuKsom6VYhd4RzxxCJFd4rCh1iura7GAkpYJiSrmDUxc147nEF7x5YpwB5BNh3Mh9iJDY7",
  "key6": "GhDQCrrhtxrEgUBvd4ty4BLK8iCtrRDA4WgW8LBsDseaGYuUEozHyTmjFpagBPv3yitUDRKd1kbavNMVvu7VBxc",
  "key7": "5JSYMVxFcXZeA9nDjjKzDg79rM8Tg6c9JQ9jA3YVfwQCQpCAmddsvKtzG8yaLy7PwdnNnXqa4mNcz4RkSu5ZNBsE",
  "key8": "5Hh1R1FvvFwKPg3jHCs8iBLVy3wPm2UoSgsam9Xoj2GEhFzcxPtMfU316Nopn24PxCeaHSqyUHrYJ3rix9uqVtT1",
  "key9": "5sKMkUgRMw1JeP8tHjBvaAwH9UioCb3MrEC1ykYdomB5DFWnzx35Nd5EFxbJvMumhJqqj3apQYtkGgRtjsqSpYyZ",
  "key10": "3bLJPzvawPyXRBt63oCmZRqWEhR44fD3VCCWzqrjXgXDjoMVGxHJSuEAuZzqXjRusichmQNgDs6jBah3fuF9d1PQ",
  "key11": "3J9yGZGUM28AWh2GkAK3dr5HuzRmMpJuPXbySicvCubFp4qb4gUehejhuyfikkygB1Z3J4SinwuUnQ54P62yenPr",
  "key12": "3QTxR6kZJYxagYKvzxhzhb9PLg3LcmdZ9rAm6qBFZkL9EqSSDqPDi5kVFHHajLzJVYL5sqSMtnWGP6zhfixjDx7T",
  "key13": "27rPBWANR3K2SfXz4oxgQQ3C5XctCbcHJVwHMiCFDDiWgXpBNwSbb7KxsHgvaaijizY3LUnDzjV8pv7miwcuygWz",
  "key14": "4H2V2PqDAoQKbPUPVL8DpFHXbYTVEr1jesWTZ7CeLPREJgkLAJToq7xb5phxDCeWRGiLs2BZ4cmHkQHGBkNR56Lh",
  "key15": "3B23KNxyTqGvzjNRbrmdQepLFuwoGUVKTuhv4MbHCuuvkyg3wa4oDSb2ZKpRVosCK84peaBdkb5dtGjoy3MHXS6d",
  "key16": "nb7eA4uScgb7Sb9CYoX8ARwUjhfbywJWyWMifmNhJYcGit8PjrET2kiQuuUpnW4vXw59hgepiZFX24PnruzTTRZ",
  "key17": "4oQs9ou87okWj2K84zmBPens95zKvijdbrVtsXgJHHUQzUqV1wVaWs5oP4FV49oL435cBxohR6titNdWkFhstD2i",
  "key18": "2qDkZGt9F5iSFYRsdKpEAPbZUHzZqCdytZGbe9ia1YS7y4oViLU4zw1p3eLCfLiqe7hgoQtp7g6S42qt8Jwe3ogc",
  "key19": "wooTA5Nw2CFEvVca5ffSxYguAp1JhYYwHoRc4PzTcXvdcSBwr8EdP32Qr9DTJJH8xDSRihyUqZErHb4Vv4DCoP1",
  "key20": "3855JzhdFfaNzjaErXqrs8Utjezk86apeGkvjcBrjKdJxSFY5oJiciJVBjt3JcegLq6cURkkKahrJMd7L5i7n2xd",
  "key21": "63fAmXv3UmA4kqYyrQvQo18YjF8Zb2dozWTUiV2ZMgHhEADVyukSQfZfTPHsGm19oJNFdCmx2qim83o7dwMHqxnV",
  "key22": "56XANN5NTvza7aR7nFGbZ4TpDXpZXprGEuFizmcRxrMfpr3MFtgwEmHvKDDcRJa9T8Vhs7jktAgrxve4fHAmrJAQ",
  "key23": "4Ve3NE3eHkjoWvJJ8LtgYngsD2Vq4fGp5QMvk4DRjFBJhJVC1J37Z52ptmBuFAUpEWpDEvUTwFtdRYnwDthL9TYn",
  "key24": "4kmPdkFNP3cPGacidGSsBMg5Qq7VY2LR8bg7TNqSDsk78ifKhgDVEQ139s1XPrZD62gh1HHfMvdPx5Y4s1XNkqjv"
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
