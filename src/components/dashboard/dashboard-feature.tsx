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
    "5vurvkQjCHzWRawGeBCmcEwqXbFAkkSgHwusY1itdX8dC7NBZvYFqrCjki1nmfscjcehmpmZ1RtTTacy2WDL57QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eZZUXZCsZ6PoaP1i2amroEv3RxhcrHC9oDXr3yFjRfv9eykd4GUea6BGibLg9THByqCky92yxW8i2L9jio1oMJG",
  "key1": "5FrGCp1RdxhnAH9Rvae3Hn7Fw6KoiqYy9okcWDTskGpz4xe1VFML1j7ThcL9fpxZpAYth21NpK5nS7w3rqUcy4fr",
  "key2": "65bVArX75bNkmbTxybY5HsforYYDwNfUTJWgQKNAPJfDxUFbFnBTNtKLo5CrWyhQRJ74rtBQj3W97oZZiEFGPfJu",
  "key3": "5xtECa81FmAKWbT4kprnokpZQskCnXFEnLGxP8N6knbHCn4hPbLMheBsTUPCHUvkRiiSfK6QingqvrFwqCVzbakf",
  "key4": "4yv2g9JEdk8bMs8EFCeVc2FY8X2s3vd5rqqHEoQN4Rc9iGHumWzQqpqNzonmiPQFRRvwSS7u1RWhxeteGKvJs6jo",
  "key5": "2BnTTRVHmDKQWrr246u5CiqnYHYCVtoVPq9en4PbtjkN4gfS2PZx1nmCNYMChRdtgwuhAizqmosHH2h4uBCY7JqC",
  "key6": "5qzCGEzpSHVhGCRPwyx7acEgpW5WhwTdRbYvqJLZmcM2d7Ds1zqrEejD12LqdvpZY5x7PM5y5FEb59betwunZyur",
  "key7": "4MPB6LveMkEfhVFWPbKSduV1mSQZcw8es9bLddFBsK4ciEjfgH1s3nSqCK1SFE2rYgPBFrYit94tPrtkzC1eJEns",
  "key8": "3BWrgzmJUyvk3nRL9t4LAsp37dm7sNusAUpVUpEDGQwxZEhBcgiSWDUkWLeoUZ9AJF8hCoj3dusNo8wcMAXqBPqV",
  "key9": "nd9eigbTgHXGo5p2JVz1MDphbwD8S6tT269VxNtT5x2EBBaJm4NcnDcLsMpdsT8fcgKNMzwLDRcCywUv6fV5ENY",
  "key10": "59wgueRhdnfij7cX48gS9UX7vP3cHcJfRb1D1Vkfi3TryUKbqGZ1DyJAueLTHZGnp5P8jUfmC6QAATx3gmd522Vn",
  "key11": "22QVfivwRi9frNhXph49CWkfoaFDahEJWyktujNwnyKLwqZCRZWyryGfiNjjmFzqXigM9BQSECsgfhxp6rFNixht",
  "key12": "zWLEuzPxwuEhvT2jB4XLBrHyWRRD9T6mUv4rxiDk1F93rFxK3BmrfiZMHHKiMZEwfbc88vtsbPpC2q3aV925WMG",
  "key13": "9RADnw8B4AsBrtGs8ucQJHosUdpoS8Rj5Ncb1Cuyq2x7Rm5aRnSoJo4tsy4kKxJbMe6wtLGDDQUKSfvLCVFEfTS",
  "key14": "5yjGESnEfNUe3cNLZTuJvrseKod13sVKjgPwXYKcopadikH4Y8cUom8ZxoH21ZZmefejDd4XyKWML2Mn9fbTnwrK",
  "key15": "5VHLfavz99CGiCtDv7ZPh848DY71NPvuNyHA3v1BrhLUTCTZ5mhNjMkYvNGY1uEKicBn75CprWDXRQDqnQ4Qy2jn",
  "key16": "23huwmaTHg6CtT42fH2Vm2DAfKZAmTmQq6XBpoMgK3sYqf2Y7YmL3HkMsUxM7pTnkrnzWwLaVWXGsE1azHRXqjXT",
  "key17": "45T2KjS5wuuVykPZusPmHmob1X2NaWyDqG37Dk7477UNYX1u2wtancNr5z6ATpqFPrbo9kk1AWdydxK7P8Wtk2Db",
  "key18": "2sXEhmwes7ZyBudHdtWez3JtY4qq9Jb5THFG2TsmRxH7gWRHMifdt9eFM49ZGeGc9GjXSxAumAn6fZErYqmi7weY",
  "key19": "t2gSeghLNMJfVV269J4tdaDatqp89Spdm2pn46joFWmBfCeoo3UCTw3r3jeCqG27SFLhaT4G7in4w2gBSDBMF8o",
  "key20": "3eoRyjSVGyigPpPWswftaHjzxkCgL7VbaZzo2ZJuTCkxi6MeJgHs1e2Ceot3xVnu3Q6kKAbUYukC9yQdwuAi3XWu",
  "key21": "52BEtqSvz5KAW4ovoRxd9e7E7vxJbF6rKYsNzKgVKHPRRaFQ9icyntZuZcBeweEz3wYsBGuyZ2YxQCjAti7XCXYg",
  "key22": "5MCRkq5dvjeCM6Qv9RNRdhYqWyVYPGRmF4aTfTRGHYo8jkm2H8oroi5N2KoVdcuUZiY2S2ewmkGe8REfdgrpgXnp",
  "key23": "639KiK6EBo2JYvnL5qfPfyDqcBCRL8VrrDi9StqtkNhbZMacyKMxnEKZEY2qRKC3LZfEZF7wJmHWrGEjsMN7T15m",
  "key24": "4uYcTskbbN514o7vtpo4yf9qkL4Zq338XuswNhCFuysTKCQRimpwCHLUvccAzoBdvpwP58388A1CqbQXiqVvU47Y",
  "key25": "3NJZ49Rn5tJZnzL7GD7aDaJ4q9oQBaqbNGb1pdsL77dpxapwnRNc2osRuCT3Ti8qgkxbQpqvRT2CG6Qat65rQWm6",
  "key26": "3djnvheQZbk2KwMSXbF24sDwcP3JFp55EDXwgu1JPkLNPrB2Rg8Pe3vrMTHhFr8cqPnzHwr8AnxBmsTnxKNTpyBr",
  "key27": "4bJbtfyuzXW7eioexrTC6CWqwWtkQZJQJCknnTjgx5dAr3zAKyjFsh1CGH2UGUbJTDWWdA8RqxruaDg4D7aZFkiX"
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
