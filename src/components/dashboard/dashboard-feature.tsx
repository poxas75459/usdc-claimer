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
    "23S5ctyfkeq1fa9u1sKfDF2A8q2YG6NLmxeCXu64anFMVkN7TyND9dicKGJaudFUXLbwrz6H3pheCd1mX5FAkJEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SDq398NAvbtxkjn5cE3Pon9RwbdRidYPiewZLL5Rr2DbFq2QL49K8zi3MNVaA3o92nrnyiEfK87vGy4bdxseP2t",
  "key1": "mYSxSPWA9WgcSFg2NrUiuKQyy6SDkYNK3ShnzqyUxtitX8WEr84kgGeHkoVuUzocufgkzxfxkf47nWZSYt1UZ2X",
  "key2": "4UjhRQb79rHwQCF8uxLr1gRRoU8hCMkEFyn5jRUCDKZEdKd62hpSvHeRZ7pdBEBz9MuirZJe72zkt9BAdCuXgHJ",
  "key3": "3B1grdtjLp1XpfXffVJK3nsvyHCdUMooC3RiM5c1aSxawBij6z6YkYct5ySZjJexsrpcnK2eL7SGLoEc714qJsWv",
  "key4": "5Bpq4JT5Q7nLuc54SAN7ZxnsaX6Fb7bmeFETAPDf1Re4B44waMsspLkWAHWVm7PqeN1sHHZS86PzDX2WJLMbXifk",
  "key5": "2oTxfSTASQFV8KqUaVsbFUY5p8MXhUBf6mMHDRdmJWToy9HmvdN5SJeuihvr4FLAJQW8kFASpr9apnzbFkrbRgHA",
  "key6": "64GJLH5w8rqXWGuyKoxtgiiVzvE4RnjhMKosM9Y8NfcT3uh9XFqGSyNysRqKs1hu7KhjLjwe5NFLfR5fEe7iF1Lv",
  "key7": "vKBsKDAhaFj2b3BF65cCgNtfoXMiNwb1TX38kKw1LaxfWTPLPAHY1n5d33FTSXXxaNttSBM84FFkG93q13R7mDH",
  "key8": "34hkEsu3SVk11xzJjwWV3nvBkBoNcqMYb55qyoNFLRScqPN9G1DN6yXTk1AxbauFe9i97ysbjKTT61fHDn2h7b8r",
  "key9": "62XxeioZcLmFyNqZwK5LLV66icekKLpHCRmzQbahSTptqv1LeMFXZ45dVgG7YecDiG5FokkLPMtGBxrojgWXKfcX",
  "key10": "3eamFE8NBKGs9hAP7dJtUN4uN9NVL54Tn3sQGHdnMbB6313uJvHA3ic3dS1p24cQfwebyeRgrV85CPCEQKsHAKfG",
  "key11": "3yceYtrK9hCHuZ8wx2M8cEhcZMErCzLLRspiKmizd5ScwsTggcJQUwx5tRLv8vsMmpQNFkKePumyFmWieadshBuh",
  "key12": "32FNFpWu1cmgjUyfh45F88VTC97treNEfdQDNFNUPwL6R8rm8fczLVtq94M2YGjpS7ZDp8ftpzruevY2wQqkwxAT",
  "key13": "48whaPjNLwnPaHw9LMHHrbiZ9VBNnLrpAJnLqu2H2ijY91dPsdgRXVL3XS4BH7v24ce6K23SmgYaJZsFmVCkxRvm",
  "key14": "C1nTXt3c6Yv75Gor6AjG6T1bk6rPyUk16EDiW9datoKoCEyBBaRSuNUWKrjmkgBTXjeHCKusJWuDBKmTurJgLBL",
  "key15": "42TDvpVc2XovYvmoaDE2S5V531b57gLPTsKC2b4pZeEWdqPJ6c5z2LsyBBE4ttPxugPEJ7BYLsmDefhehj1xh2eG",
  "key16": "7pWXNuu3tWwDpw58fdCYAXxJD3KBpcofbRmqho2mFsUTPkXLFdarPAe2a2zb5FtcquxrwY8yfwiUribsQuRj22q",
  "key17": "3wZrFirmLPXUjjsPDNKp7KZX5GKFWSoqoWLccGZ7MZAzJ7Gc1ivMwu2XzJf3Vd7MxLcMNuXPcZfrEe57Z4S7u3uS",
  "key18": "3MN9dE1xcy8iAke6BJ1rfnXvKz2CbH34xFsFHiuguxwtU9iRvwfWC1jfqFP1SwxmWfEnb7WXRRBJ7DZtj8xwjzHx",
  "key19": "2nV4R7LbjmnsxQckbe6Vg2pNN6wLWL8tygFrhW1kc9ZrBxb47jBZJxBvZfhVn2x2LCPn4w2fbmT5CnV8hWThQrsC",
  "key20": "5Nn3SybEj83EWHAjk8GNcYPEfWi9HPjyU7eM3txKpmpLc8dBRnfsVU2UJapJg7myEDqdALKaKQRAo3s4ebYudmod",
  "key21": "3MgMWijuX8QyErFcMHE6LEPsQWtT9nkuFJKFS7HWrXVWCzt5kHgBzRizug49k6NmdWoCsCjKdwENKL55pfjLf2T1",
  "key22": "5LCAgESRWhyT7fNCAekPNRAEh589TpVJyYPfk8MHVJJeMKBntcqijERyXDZyf8h4245c2U2r6QGvFg6VrhHqLbLh",
  "key23": "vujBAcfWEVYTMtgpDhvBT7xg1BnKNuCfF5FTN763ppn1rRF76J2fQKyxqMnJ8vbf9y5TKicEzQiQRBSatXyhzHo",
  "key24": "618wvspSmcJtof5ATVd2emChhJtwe61EMMVQ7fm63kQ1ck4XTxanmyLUhxJgttC4F5WhcDvXRG7ft51Aoq7q1FB4",
  "key25": "MwdCkgwZBnD6sE8Po1DvYCJV173EmgMoMzfVsFP5CvBFLYicYF2A7gw8AKdx8z6Rspos7C9K2LG69GQ61iiQQhd",
  "key26": "24CUjhk8cK6wvJue19C4b6eLqf3m26SjxjtHMKu7Rm6gytZ5oRysTTzq7S9pBVBuzFicaMKuL95iMgbDwGYbx23k",
  "key27": "2oYQdfS9fN4Wy79aocENNLbNXj6ur43zBDgpCWqBZNTj7WueUvLhZwbLda3M83c6wBYzoHgRoaMzKaZ25BX67wRB",
  "key28": "4XdGyKqkHiADYQN2dGy6tamar23wdtMxMxFYVzpS1xCpVw4KCpGBtaFZ734crYqAXkT7S4rXe5AqYXyngxpqkjNX",
  "key29": "YE122aeuDxm8bhaGudr4UEZQwSr4PwstGZntgopBFgGojchhMC8sfbkTtZA4Q4rZJXuw7WNjNtYKGMKxFqh9UxU",
  "key30": "5qmcRNPuibXsZyp1hQXsgRtxrYxjnRuhP8MB9Mv6mpKPsJWXwj1WbGUtqxTkheKLSmD9wCqkFHWWBHJGVWmAFo3g",
  "key31": "67Wd34ExnKC2r557GtLesjqRXKHgNSQACVwsjW5hzuSeMpwHvoagDN3i4VZ6EoLZCZZcpeuDmX3G3JiW6S9qohrq",
  "key32": "NFA6cwJDxmkVKyakMr3q88CTYoUwVoTadBzcEuekvPUUTxFCVqRV22xWKicDoCKDtn2Ftafpv29BmtfmtTbHiLR",
  "key33": "39BDhzcMLfjRXnrAV1ckYvnG39xMtAhtqNbpuuAcu7oiq2hxM1FEsQ6QxH8YD57iHQgRBbdMrYzZYkoc4BsFutVv",
  "key34": "3WFJFZBjm8UVf4tHFZ7bLtupg5WF5iyfHHn35M4sD9V115s7eoByxaVvnbXbnUnyXND6w2d2joPvD5jaJXTJ1am"
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
