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
    "4DXv7btX2rDaPJh7oeoqJMHtu8MnxVKRjbkPaDjLm1JCoMCaWyTAknKkoCCb17aXUWDTjWpJVye5JtMJBBf6Ptvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v12jMnAukAcesvHU2rFkAdKtzFPjBgYXADBcJymMBP8hStdq1ubptWxbK6ADnpp4DgGWZKUNkHbnN5xS4oKbuc7",
  "key1": "2MPyvVvsrXbB2b6SGRMcD4otU74ge6VXUAaoDfAYqwfSd4APqz9ZjzitGF4eozWUyzYP3cNYqSkerReaNqYiGF4H",
  "key2": "3ArfbN1gXBL6JQJBEBAbbGThasfjn55iA8gCPAJHng3YbtU9mMzXZ1ceYp9C6erUjE3UKUkRuZWJDubEwHDFiD35",
  "key3": "2CVo6z2beRRHgRsidiPrzdjLTQGCtYVdXha4HEqrBJ7PKumPHPFbX8K8NgtHHiP17fTspHvFF6fCjeJpSBFg7mbw",
  "key4": "PcPMckFXPz3HrrPi5vZjqXXkMB4dsj7NkmcvmhJGnsTpGL1tPpmHiXY6HRTBpVScGzvetqkVfXnnz5WVpvGj5gS",
  "key5": "1cnuzNvjxC5LJkzLe3cwKW5YmcxLrVyQEkk9YybYAJ37fdUZfnr5HC6cKQ9hWpUgCB6smBjHhrreEFCCkSt41HU",
  "key6": "5fguNeMtZjSed5mkef85D2q48CKfHrD44dLD3ZZsyz8HN6UTw1pgA42evuKXiDMrdwsiorXVCTQtwzps8wNm6Uwh",
  "key7": "52evxww99byZodaSQEJ39ZHYu2LzNYRbFJvyq6Qsw2oFJyu6Sk7iT6nXB3Dnx4qtFeRqDsFRj5MMg92tbRdF35cy",
  "key8": "p5s1Qrft5CqtoqSZayzywe6PDBYXW8ybv4Y31wYLq9zjEBkDr4iC1yoRBW5a8M433a2mxzeTs6pYGxPKCW4gyjL",
  "key9": "5tJrXzi5GBimtLesFUnWKAfy4MWxGzqkcEMT4NoFyzeJkPMigTkArEVywbAUGnFJPUsquYgsaEU672Lv8Z13sraj",
  "key10": "jQJe8TC87UyzerNyw7VpX5Y5tFZTQJVYNb5ww4ANkM8NiV7jQbqADyVgMWSQKuS6X3TzsvUt8jj5ScYK69GxCx7",
  "key11": "XfAL3tp7BpHNsjYCnqE8UZpKGjpT7CgdFCzwqmoBqcM8E9cts7ku9EdYWKF1VxbJeU2BVV2irio9yM9DwR2Agtr",
  "key12": "4d612YsJvNJqrYnMjoT5qivgFwjY2D99sPtQgj5XNaiVWKLthQrUP4ZytHE8D4k9R2AdUZLxY9nuNACs5fGghMRA",
  "key13": "4N9FJ857fJDcsmur5PoLTe4g9DxEnWrENm6XYRxT75xr4TQEGZdR7aPwSKspgrT8iiA5CouHDUiUo9fWQ9xg8Q7j",
  "key14": "fP8LkTYQjWM3M9e4M4LmBou2Xt9Xogh2F337toJyi41mWYZiyUEMi5Dr2Kvdz3ph9WrKuXKeVkKb4v3mneL6m1G",
  "key15": "43j5DcyirXx945JA8cAaq37RTB3s6TRb5gJWp6magTht3JKL9vSXyJ8k6g9adyx2cS2Q6F9n4mvV5ToeCdQFfJtv",
  "key16": "7zXwN3Kf5csh4aau96DpzrxBBZhgG1eqKNdH6hHYAtSqBBNAgweHoWxxTJnGEYBXF8mfc3hFhoYMyQMC4rtE4mo",
  "key17": "5QYHd956nUA7q5ECYhsmpDT1owmVpsS7cJzAfLapjgbpWcVwnxyyqsiGeA4ffr6WRivVT53nzdxvVcLRhs9fBmSy",
  "key18": "4tEtFpHeJdHEroPT5gNKn72WHYRNgRnux9tscmJobPPTTNhANfpofReV4BF9j4PJEVQiVHfh4kDBsHprFmVdaMPN",
  "key19": "3i1dtAiThEctYDWE8iVeobXGmFGscgYbpHo29Acdk1PUWgyoS2dYxm88cAUyhxRYna9qtM2JopohKeMiqmtRLLkw",
  "key20": "5N6YvAmj4JtDoEBiznDvqdsircyHMiVbtnpMEF9tfn8sEUtpWDbiXz37rt8sCGQjFpHEpGwqRoHZaphyzcPGdFo5",
  "key21": "3XwWVoA1kEhKnjmeELE64UxbTVZpVPRh3AmJFajKxBKrXzVAKjdC3Ne7WkopfNdEFcsmXoZP2UhMbGBdGkcce1rQ",
  "key22": "2wyX2secmzFpXo5oJm2SEL3ZXQ9NrwJjFjniDsnLGJwMmBmZfuoNXctA9e7Rsd7pUsesoSNwSwNqqrpsgwdovmCn",
  "key23": "3xaY7VZvs8hdXYjn9RucpaE6kHxUJGg8gxrs2L9JqXMy6TFVvaaZghHfHLNABRxu8r6s1qsBm7S2CBuZspme2xV1",
  "key24": "3pRrLfdz3b5w9Mou9BEtQNuQmzx7SS35ANrzhJycCtn7dWX1CbSJj6zwKhrWSD3djZp7yhRrWUt7iCJyuSSf61fe",
  "key25": "3dQ6TdBDdZkYmm5vQurbPC2ecxRNe2oWHLghiQVVGpn2gnX3sWRmKYtsUQCqoatoChyPHRSEDWj6xjLmmHmGicPW",
  "key26": "LqNMwXL7pWBdSwYgxg7qvopPQjbWbCUnaD9knbC1dFSNLiRorTDDrjFZbkAfGA2o9oXKfXiqP8gzctWYs2FsCc8"
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
