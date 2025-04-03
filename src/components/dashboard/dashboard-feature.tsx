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
    "Q2qSTmtFVsTghMkujcohMrRgmrxCXCa7UNhD9gBKmarNiUph4EijurSNeVEd8xEm4XwBLwxpYfzb13X1y9w7dVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "551JgwaT7egNr5nsVMS9DpQYc8YExTRfaZKVLNv8DBscDqoyR62ZRAXYhMviDKPfT39BZBuXkjjP3xEoNZexqXx1",
  "key1": "3x97zV4AGAZUM3nM8nyCRPrN1zg7tLtP1brp8miomZVxRxrEC7FFeRXRK5HzwHSc1ZZ3jNzDqufyWheTghcL8Cy4",
  "key2": "eSTBv9xk5KmfTKbQsaW9n72i5HdD8AcWrJ1BAtjS2DBcZxTdbCYQcu4Xy7fTqXAv6AvJE1PNoQoJNWkeuDY9x8S",
  "key3": "4WdKtKyqT712neD8BhbyZoiEWPnsq1pA1iWipsPZLqVQGLYuTVtDi9sjzzDpAfoS5zBM4JL6kpNGUAX6MbnKHCHt",
  "key4": "5TFyQr11wA1uvkn4BoeSfjTnNYm7VrcnosqZLdPVdLtf493XxAhBPn1YRNrPcLL4s3k5NREAaCpgbboKHEJissvv",
  "key5": "4Z4X7jJJXxsBjKYT9dh638u6BeGTVwaYYi9WKDS7BjkJ3oTJhnj1tAyADMeX4vwxPjgafCfHk2VX4wTsiD3nVupd",
  "key6": "4SMXpQRV8ZtWcuqSnxyS9t9x2tEv7T5zDigTXUz7Pfhf8hwzkj9Ld6VLwg6Dpo3z22oKoVDk3VoTQ8hPfY7qwHTp",
  "key7": "3C5Y7gKtjVnbUyL9TXXKELGkdZFcuFumsrZH8FZjbGJk2Mx9vaVRp5UAtLc4gXhRp42vQ9Zf3d9hVWUWiK3WCVHA",
  "key8": "4nuBhNgZ1Snik51FuvNYw8sr6GGrGcuYaHahkSxVvaNgsPVq4jguDy5F8C9NW7mwqdALaKmwKpTGC61nroHNcaxv",
  "key9": "3uTcdKHVERtPGv8LsjmkgiCQqYxLr9oHnhDhUkRQfNuHdf18oKyvdPrjE9WFDzdC7sosDtakRvxrWwSwvtS3uLeL",
  "key10": "42zQzGRzEmenwbE9ZP3oCN7c8JDYbF2y7XpSGZ4s979uZHzn5SygRzwxtdhaNRqKESvyEdo9mkz2fwkx17fW6hHd",
  "key11": "2krvUzYuziZw2M9TBW5RbgNFqRSZYmh4y2U4hZqjc3VzhQgoaPnyqxW7newg5e9mbGVXFQtrJWuktPC1XyRYccUt",
  "key12": "5r8wk7gVt55WWVvkN4QNTRVJLuMjMrxMkXrZAAsbrypmTHQsBQc33Tn2pMmEWjgYiZ3d9rwCccZQQXMEFXyFmqbq",
  "key13": "3z6Fcua5gUSvhTXtNZvuEKCitjd4yKjFKfAD74cL6qB2WNcBv8BcoAwGG5hpyzFwTAz8B8bkT6XG5SuZ4iFyVEWj",
  "key14": "3z7GSomQ7UR8mjCCoxqgaqpn6qhJQMydJMvSHDVJM9rhpWfAnsqczg16gcWN283Zdec7Ya4Ggf9o8DRoCCpMTeAH",
  "key15": "4pwduAtHEjbEaHumvCC4pCFn7wTuXjppNyUYHEofZkqbZgYuBA13xBoz1uqEGjejL73hTn8V5PZLf9jrcMVJA4cb",
  "key16": "4GJgJKMAz3GU3PVyCyDLkpaFBKrM2kMfEQuKVRG7R2syTdizoDQCLmG1zN5maG7s8YVDUwpwKrz9C4tdBK2BeBMP",
  "key17": "5frLnXTxwz1aaMWAMcin1stZN9Uxj31Rs6cGiF2Dy3STg8Dz2eEkLyqSf7c2JMhE3aFgz18saV1XLNf5BtvgGaTd",
  "key18": "2q7JHq7dmXEu4xGzvycSCSafu65QD6AuKUG7xgczdvg89PtxfS1iV7Y4GENXcSx2h4iTLnK5Ln53UiPus6VnJ163",
  "key19": "5hRT8pEaTwnJ4AEFTBFfK66pxecmkijmia5JZ5aw6AYLJyVCtuEQfKhbUANcAafpPSqq5f2GPz2JoMD45cn2h3id",
  "key20": "3fPhDq8jAchR6Q1CLNf7SuBnc59E2hs8pXgmbv5H3TYR4NvifeiqtpQaE1ERYzPzdLzQ5YK7151mJJoWtdEwW6Ng",
  "key21": "3hiM7FWwBSpqohLtVr2R4gv6Ga8NY94L1Q9DHWWSwgCXbyRcSJokJNSpPZnsyqj6pXuJ5GBx7z4ttwDiH36LShjj",
  "key22": "63XqzbRzZGdicjdaYndgfLEQtXR6vhVUFBzcYi3sm42Eub6WmkBPm4yw2egfecEqNxyagqpp7vxwnkUptrYX3GUn",
  "key23": "5Lo66kxey9RxfUHSvE4trHzHJoJtCee961qbLY9D2mM5snvR57Uc9RtGt75grwTPtUcnwiat3exR8upYHYEYWvEj",
  "key24": "AxYaDnBRr1U3hLXHRtm4L2p3ky1eNr8vrfjqAdiNXQ1sysRFQNR6KduU9GMNVRXSN5GFn23sSgNsDCAtEewYSUb",
  "key25": "3ouTxQzjsbunJQXNV626VfwRzYXZuw6K1zpzmrmyGvBkNHAPMJts8zDm3Lvq7ZTtF4EBGcFomw3yqMtFz44PiEQp",
  "key26": "39ZsdzpScB3ecWExqFTejc7LnLaFFbMgVHwyZw3vPq88Wa9F6kkn6CLZwWG7J8PdVVRCpmcVdceA2e1bX5eezRiU",
  "key27": "4b2LKgRXq6ezvgr3vS1z6ydWVJJYSCcCEPfgs3zm2r9NKaxJgKkiWChvojNuix58dmrWo2YUs13FQxAMebWctAyf",
  "key28": "3QWtFCTGmEm6UCftpnhAuBoPEVVE8WfzmvJjHNoVqzbtHq6BT886NRggthdWxkDUxSeuGqxAMfCJuHndDxzEj2Xx",
  "key29": "28osDezTr9NJduFGuBVEBiXR2sfhksVxgYXbvDg3tf95BCCydDaiP7LjJw6FcTFDmGAHtMhnAgC7puCqMbvC1jx6",
  "key30": "Lf7dJN7mPonyoSLE9pFcxz5tx8XwWAD4CT5avJCQrRhednNivDV5zr5eegMBX6oBtPms26TmJHWHRFGgTVJNCpN",
  "key31": "3Q6Dd15js5jXvtVYV92KjzEaLhjEsTfWk4RDH6UWEXNjfSCEurhFp8g3SzLXsoTAMiqngTDFuJYw8NSkEC154aQX",
  "key32": "33fPRVTDJwKMB9rA49G9FzfnKeU14w91ektUSkvyPg9NafnCf2nhESGZZNdj2Ur36UiRjL9JSasJmu1jhfKU8qnf",
  "key33": "deYuhiY5cH2ywShpeSPkYw6MJkMWaN9LA6bakTp14YLfeP6NhZyjnLwJrUNw8hVMmgtuDyFWGYjF9uZzjhJFQ4N",
  "key34": "9fsgwBurPDZLmiYf95hmMez6CCNzEwG4nWHoJaJcoTZPKSgJ6mu8M16QPT4FeAZi9gsqpcW7z4xKcNbS36pMb1m",
  "key35": "2QTn2TWnXbDjJbzWp8ggY776r22yDLukQCFT9eER6xuqTeipPr4nYgBrGqChw56yDUXd3Hm8pEcp8t6ivjLFETC1",
  "key36": "5kPC6P4SaeoeqgaRrPM4CvcC1nz7SsuHBTehxjWtKsfoAzBj9zS93VtneB3MKvArG3TCBuyzNu74nPeD2yXTKu51",
  "key37": "2Djwa6XGo6Vxd5E26ApKW6APffaGKopdhWvHUwgAEhvPxY6ch6EkECKtbCytdEhVXfDEsBBeoXfy7hpnFYagb8Sc",
  "key38": "4GvcLgQEg4Ew22tQoQWvgekXHBwGdxpt5ufgd2QaXVe7vKmfUBJRGvuNYz9mTZFY6MYpSKqaJT9HUqqtMA6a49DX",
  "key39": "2medDxPr8aXrZWWHRamQn37UpbYpaXW8VkQtEZUEHRGBJK3CWTwPvL3xY9Xfsoftq8VypYRcBqQ1CySHR8csMXLh",
  "key40": "3Hx5DZXxZYu5dHECEL2AQH1TRk9fwQZkdmwk2KKa7725WooNMnpX6Q7MhAeUMCEExx7kCa5FXGewvmuDYb6ZFWFu",
  "key41": "3vQqAqziyrk2aRpawQNPvCHvYVYQ7ScKRXzQT1ei5wYMH65i3MamHQMJV2V8Q72tV4P4ABtpyhKHrzPHj1F1JgwU",
  "key42": "2Nq4LeQKmk9j7FBZ6eohX1to6BH1Mjym68hjLJraBwVNysxPUyGUUo9SsGhknMxTVaVV8rojCDsTbRLVwwtsKbBr",
  "key43": "5yepsEzfEkfWbarE4bRB5FRCzBBaCgNpDwkAsWKG6zSwAGWv9fxJC5nr9tHVfbNEVQAKKjWLbbExsQE8pyyfC35i",
  "key44": "LA5jncaW8AqgCj6CjYkzgrZgD666bgfCwbq1VwTngJ9kPTg6iPhXqT5F6c8WBHLehMzxk87bYGZap6eJW7rqCSx",
  "key45": "3GWrdmH1u3dN5qnHtJG1Mtp9Lmm53e5RbQNrryGUNBsftA4bzYMiajWVRgyiAk9SatmJN2KsbNm23Jabfy4KfypL",
  "key46": "ewdgVcvmCSWfDgRSxNHrCPbwyTtbAPWXNFsFoUoRVT4UpEU3jdvVMgXMU9ZAHuUFCf3aubDnXx89YS1CVENeV9R",
  "key47": "27SUmw39YaBo5bhbmzWXKCei4cmoeZVCnCGXm3fsU5dn4zA2RwwDVRekLsPUK4fdyCFwF2vUaart7mZNDkdigTmp",
  "key48": "4Xw3ek5wbpDiVz11NzYNP5BDZTdSEgCjrUiD6YNe3ZAowCDe6LVGi1hBQifUntwJVDBPw3EVNRbAs71podDboZjP",
  "key49": "45393vqoGsa6RhhxQFrc194ixVzsuWGwYg4m5Sjk3NNP3bwGqcuTXFKwT6dbrWkDiAL8ztmWXVr9wzL3qbG4Q9YB"
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
