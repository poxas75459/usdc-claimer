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
    "2JhXLEvPP7xsa68PCFQwHsSwTqxCDTcRtK1uRzKkAkHofpmdLAxkye4KFwjKMPixNDJd1YZnKT9bYMb9jbNtwZu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fC9utKEUxug9rG26gcPY6SW2ezDQzYKjMxJZkXhviPuir4oeBqZzsz94GerTcfWKYgsR8gUeNWVrSCmu5Nbteq",
  "key1": "2Via4ZWomQkJaKqCm3ivqCSjqs5xjUkj8ytYgZ3CxCzvHYosz5E6sfbaXMSRwyPJ86Ekjp2UcTkSU29pv9TubCHG",
  "key2": "55Xyz42tuZqYrQA3PgqreinxSMJ261ZQ4BJFqFGhiJPm2BEY8CdbXud9LNkPWWjceQpn3vvHNxrJdDwpFLWMyUND",
  "key3": "4uQEBu5ko7XRBCHphShz4xT15co9qgvK1uALU98wMX8Wf5mVZy8C64geY2df7K1MiZEeFYFpF79sg5E2ybBdfRYS",
  "key4": "4QmrcJXqLb4sJ84p6m8W91n4c26FcWH6AW1ENMnzGbjAoHFZ133Eq4oYYbarnNBFodHrmGarFdRtXio3yU3g2VSp",
  "key5": "59tzAARLZVujhm33szfHH4gkEMX42r45GQ8uR1XsFXJjrpNxH6whu27J1fzc6VtgLAG9SVjdmSpXcQb9XW6ur7Mv",
  "key6": "4X93bs4w3Zh7wxLnqBnPmT8m4LgTCBB3jaLw3XxkUtqd9U4GoBYK3og7ab1uAWYx8wJgGQiTevZnLo9hJFzDyC4b",
  "key7": "v4RvJTuQ8pSwnsxuDetYTs7Gy7TK4aYgnAAzoaSJMTczssFD6U22dt6PE75a2TJNGV6HrKqUbJ5iUMJypxFDjDS",
  "key8": "3FkubwmBQaFeZzecXYPBPDShv51RUAaxFuNS4RLja24QDHpVmVNtjpNBZj7FwWG8Zy4RBP7WGkPSHHFz5Bau9SLZ",
  "key9": "31RLmdePyohJqa6jyeGrrpvBypJV3jVmmQovcDump51VMsaiwshFRZGCPfJ7V9Hr4JA16xXdKLbrd65qDEeUoFMc",
  "key10": "5v65MXkcFkgF4vGM6D1PmvL4ZazTp6c4TbBr3obiTx3LjiJ3itzMzWEEWRzj2hEztNhuqNTfWqzVSiyybapz3oYL",
  "key11": "4sbDauhCAtD3Z46GZmgek3XUyDyXChcj9PDNJ32EUTksFa8YC8ievqie9sqM14pjSV4oAjc8sb9nMS2hcJMwnMfE",
  "key12": "drQ57Q127P4ery5sevfo5hrwrC7YytdreUb5siReNdTpQHdicjDLujpjKdmsHcZrAWCxyqWx32QtH3V6ZhpdvAR",
  "key13": "3mJMvfopFFYdTzzq3UTeHnNGr7bCyGxsGxFu7QLpB9kdR6mmuZiRczG8w7n4SDdim6wmgeGsPGkLxCnf43ucHo3U",
  "key14": "4wewmegBSLHVhdPjButyZHqxEz4AKwUBM6aM5Kz1s2V1XoUt1hrr1aeF3GAN8Tn2Zn4Qc2QMQ1CUX5Firs89CK8F",
  "key15": "2j8N6C3DuadGPQgr6g4zhRJ3zb8syZMmwmNFgbe5bCujNJdnwx1dbWADFsmfjQeiCfMwqCV3LTUSq2dVs78DbcXR",
  "key16": "3mDKNUzkCAfQvcaxXMCB1pNcnpptGKiZ7i2tEsRjG8TfJCnCxUb5JaDUGpSGsfA2sRiFoQ7YCsi4n7Qv6X3MzKD1",
  "key17": "4cLNKw8UBWN5iF8UgKcwznXAyoYVLezDVMGzky6LftvarqM25gn3wxLRqYir27bz3cuSkXLKPyaxmWeSCzRYQm9s",
  "key18": "4icMku7G2TCGADYhmMC6SCMjM6fVrDwJeciQ6k4n4mLnxJ5QSUWXcFvSGsSojqPSfg6RGqBP4qKfxomkNfk2B496",
  "key19": "4JTZQnDcEXfbkKNgpmHJNXnQEkSP865Jp7b6njRaCYM5kC7TPRDn679TxcMmdQxJHcRY3RruNnyQgRdpYpJELpB4",
  "key20": "5TgSXMj5GD1gJuQ1eM84WvmmSACCroqPfqybtcZoBzNCgnTSy5BZyH8vx4BdnnnnCbRTHMvqwMVDFFdSUqULEeax",
  "key21": "8744eUjfzmF7p3QEjUd3TkPsXDft8b7sEYRRtv8B1UmTZqfQumwTuxDQE417CB9GrRFT2wYU59GRCS6SdcscDTp",
  "key22": "LV15EiK32K9wZBiCVRPi8pZWJp7UUWN4v56swCNx1R61rHhUGk37kvHzsWbDnWzgzUU9YoMb6uwX4ziCGzoHb9x",
  "key23": "3P5GQmyVTA1c3YH51WZiKtuQMf61jqvXHWYPZWQXeprhDijm31paD58iZGi6kHv2Hog3f1MEvggGoREMh4CF7PWB",
  "key24": "2SrJbs2zWvHNkNMQKNygc4rZWLv3wjiWyCxciXASMrZ8eYF1Up4a8PUiWRxfNw7ZfBnDWKrjDhR2UX7E7MVgKhiK",
  "key25": "CZ1r9MC2J77hrXyV1FjdLspqG3Y24FZvCSha3pEX34oK6DT6ZRD6kwdRJnLpEqiV3496hiFy7hJZXvbu2iUj4Zt",
  "key26": "2sHxjTiTriRE59sAZZwvAMjBkpH1MWop3cgi666VDUZyTyv9XCEbmAWFwNUeDfAkGd4uBHyvYEWxXa2ksL7LTJcx",
  "key27": "5UZDwYq9XbsVgBbZtMxGZtwR32AQiCgEyqxc5Jtm9KwShPC5J9LQtA2LyhgpASvsrcSqphXoEoMRSFYxj1oPTp6T",
  "key28": "3BdNzH4HBWiDqZWw4De5pgx2XhbEf3Py8NQiAe4SuVWqhVQHHaQRMa46wxG4cwnfXJv3womogVHJY3jP5DEDEFFz",
  "key29": "4hBjnaSwXMeebGWFHjBAmgYEHhdxj4b735xhDrzSX6VvUus9xqA2kmcJapRUZ2Rtyxxne5JnAfWzNZLPfn3AHnhx",
  "key30": "3iNUJ5ncN5bnqVFUmK5v3EGCDhCwzHV4Yu7zDUfNkUCGXexd1H6nhHYdqFV978RLxMzX9CQRbEx8tnta9noi3MHk",
  "key31": "5dqPvXAXMunFQVtMYCTdXXW87ttM6WVbjsm8PRvguqYujpoPjRM9dNe4rBbS85JVufCNwKvjvAgbzEcDbWwSouwD",
  "key32": "2M6zXCZ4XpeNhVqxsjGvwDCzoo4AgCZTZNGVjTe2qjL4NfLQDGUEk1CLcCw4CB81DRYKfdwEsuXwcehWMAFNG1qL",
  "key33": "3qD1TCr21f11jL1oNJVQnYinT5z8BsJTHNwBUGBTMuThfJLHvmGFjkiCZGn9RiXv2WPtgbrQbzoMe4KQn8jfWJ3V",
  "key34": "yomwVhpMAGRU7FzdYJcEfbdqNVnqkD4yUbhtXkQ6axQswHXcMvpXKvSXNCmBvLh9HxY9j9C7vXm8sCdAtkEbhuX",
  "key35": "5CcaCVvRr5mbF9y4aDcMubu3GPub9sveaWiom8SFZVPAtAMxPVfdnzPA2XqKbWZ5RLB31Aru5b16fhkJHitQx2oA",
  "key36": "2Q9iukMjC2ZkfbiVBZrHDWZ71u1T8dp2wHR3WbgEUYNWuSPtCQsXqKHPVg5FxYMUdX6uZWnhUzHHzLbNf1Vg7FdW",
  "key37": "3f2hVpYK2HJjEYy12SwRpr8J3n6ApgZNwDFnRQW5gUdCNAnHzog1pEetKtVtXXTCbDMShivZ3CHgxr5pE6Dfb18f",
  "key38": "5bgrxJKyCCJfWGfjw8gzs7ucM94br5XgmGShC18R39yBPZQvutE61HqNR5TYxNRFFCLXKuSn4jJ1C16xfdbS4NCi",
  "key39": "3VqTa332roz5cGVjb96aPyJNc4QQxSgSF5bDWmqSRVnUMxqhoAWjMtqF5ULnCo5gc4kRgYRvNAbk5c4DpDvoax3A",
  "key40": "3bwFxUr6AY1xze3JtkfMLMRNxvXuNCzXJM2XTTnjF2kzPXJ6XGResh8ZS1dqb8nnT4794H2mYm19WWYhpDaVuYxq",
  "key41": "4HpDQGhSmrCiFgCJxR5tc2Aqp8TXRWxm8BGorCv48YSHtgS67wDxudcmQ6sMyNKqPZWAxrBR9dakuSEmuLhSRikD"
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
