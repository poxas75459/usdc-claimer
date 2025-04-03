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
    "2Zu7D7qxG2ygGPUCGoB5Nxgnoz1qw5UsaErQ7psSkc1XERdrBgDhpEWUBPNa18pizENLLGwtNZxuyGm92FvtUFVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zubPgdmS4GMR2ToLv7xR2NPNmwAJuX9z3ocThw22jqyiznzzgUGNjMhM3BSKn76Y4L5Hta775hf76P7tbzhLFZE",
  "key1": "5MZtByzEKSWdHJX7fG9YVw1gbMCtRvN99wzyRH4TJhxxLFeEqfSJXn4iLPENkqGvYA4XhSxc3JXUg9wvy6KTZanb",
  "key2": "oLDLxjScAQS4rTpwYVexSA8fAyMtRmUt6FWMuNmhrQofVbLpCRLfAgqrUKp48RT96HzNPA1BbGpK4fo3pmdek7i",
  "key3": "5zi2vRBxhKEB92i55UFxJF4Af7AztCaaY4ZZuMrTnSu6TSM3bCTdgXHym439XDQ5rsHYH42bfiLykJAZZ4ZcESGv",
  "key4": "4L4tnhmHczCQuXTPKcymnEFtmaarQCys7s1Ws9rpJChoiSSxFGX9XygckW69gvHiS3PBgczhbtpGVEPvBjYM9FGy",
  "key5": "5yagEomxAWuvg549QubJcD1eAXyYf436n2tDRqYkTqaD5cTo6ANFkKTYfQ5zZ5TTw99j4rsuygBqZrZENEwGf7sG",
  "key6": "5NmqqduFj7Bv5Yt6MDAAG5ftQB8ou3SztHUa4hfHeqCvtqpv3YdnukH8Q4W5J775WPBeb9zSw3BhsUt441Kpa1oi",
  "key7": "2TGEYZgCigAYF3pVRyb1qYns1k531AcBGdrCSAqXFZqCeHRRHCcmtERCvGoy2BCGTUwRKnpN49YDwRAMpJ5t2JN5",
  "key8": "65j5b7zrSTBsk5hanNY9zaB8pgj3MVgcsT9HweiRnHa5WDKBvbfciFhHkRTYGQD58Z8F56N56iuVeAKXGZt2PGd6",
  "key9": "2jQrSF4PXHZYGGbPqV1Kzfhx8YiL8raGhkEWzTPvYvedL5h7fucETVFFrxEZouBnyCC919nVKFdUGRGkBhwDgV94",
  "key10": "5yhvQUcq36zwt7vppV4i1Lk1k6ynUX3rneVFZSbCK1DMpvBv23SHCwao6oYnoqJEavYUyiSBvEXMZrLajCLTcfP3",
  "key11": "66uiwoL2QG9kt7qKg4pbBe8moYh7jWc66AUh98icKeuMTnsFbXXTKUcFyJEmVAuvoc48Ri8tZyXqpGyCpeLxNLzp",
  "key12": "5uim8GCKS12Tpmuo4xbw9ACShKpV598GgLEepd1hQ2HHNPXgTTy8gBdhBEioeEReVoEF2LaPgUHFHrtBr4JzB6W2",
  "key13": "4mB4XdQtdPuzeyya7Y3xmXBTBHdVBxKjnGuh1cwuWuHM31s2iJEEDq85FJXg6iXhkD1BMMnjPFEFRnn6ywhvz9fA",
  "key14": "WntskTtWo8boRQ1nTub36PQbTr74ScG4uP67HYPnNXmuEcqByrw4PCcJqAbPoLsaEHJ25MUyptE4soFPqzauTwa",
  "key15": "fpdanGTsr95oZnB1i89Y1cGDpxAyszNCpiuzTVcPKTZfwAcN7Ut9Hz2Z7t2C5QzUkMbyAwtLUdu1FFZJFv2Udcf",
  "key16": "4znLTCPQRzE3mQvHjY4EVSbvyTpmEFDAYv741wcGTbUo3Htze3KJR6gS4t9PajqZNbtS5oFKMZQV3RoMrLYjKeKj",
  "key17": "4JZsfbMrKL72EsJwvidBnbDpqafXuGrbWwD9MheTX2REURSVAcNWu2WykVasZQDW63Wgo64aijsQmUBn5j7MgrCP",
  "key18": "4ieEwCGoxwsb96c8Z58GcEkNMvjRuNx9NKoxvUbwbrfDNq7naxDN3Wq4Gqr297U5bSie6knXjx7zW5MYGEDa1UU3",
  "key19": "3vKysH7ZbyM5E8op8Mr9Fp5vFFQk4pcJhNv8PCxCzyDxtiAcsbT9NqRJXS5GAUX1jKm7QacQW8vsz6PxmAJXUhN6",
  "key20": "3rvRhbDvXCJbpgHv58PZyv9T242QCd9CP2ifAUv9Edkv5fwwU489S3UwVLYzUW8WyNNetDSehD3k7KHP2oqYNY67",
  "key21": "3NVvFS34J7mDmWLdP7MAg4fgmpTB3XyPtwygGGv5axoBC68PyatRHDdRxabSZitzLrgw53ShKhSUWxjgWxdDTsMw",
  "key22": "2w4yQmoZptKL3PXFwsYjsa8FtRTMsAWS9nYp7X3CdWJMbrmdzX1nxnXtTxg2kU6Ue6Wp8zs4tsQwdYYSvX9QmPPe",
  "key23": "RN7VRgYXUFtLzWdciwANKcYa8TBTDGXNXJrtkMB2L3Fg9CtsjSCzpKRXUymeGKFf2t7BmT1tZsugZkjhWHfPvPz",
  "key24": "5UwHpnopHYArvvXVgiBfuBdm7E8ng2ToZux512HLrQAcgFKp62KgXZ3CzKYjzzYMpnXL1WP1WsPCrTuCAXD7R7W9",
  "key25": "2WtPhE12ocGEJSidjwcVEwLb3bUv4V2Dfou3sBs2JjMLnvWa6mop9q4jDpLknejos46keEcHKBVVcENkQcXyyb3W",
  "key26": "41KcwGdFqE4fhhB7B87BfUyuAYtDgXtCVGFmwi1VXY6vTAcQwUCPbDF5yWhiJeoJzb51YTN3cp4yCidgf3QbGLMB",
  "key27": "iDeDmJS8S8NYD4srzzv9MBn4hdVHfY1RCjxkZrqTnMzC6QjXqQg7k5tobqgwJB6oBwQa1aVRdkTgjB9SWaS7s4y",
  "key28": "5BHzfWa5nQwNwcnSzp5Vuc4CmzXV7rDqQBd5yJqBDuXbaBHniigLtnyH7JgS7LCWSyCcse8Bw8o6Y95zzyQ37cia",
  "key29": "34uM4cvmK7Gr6XWbm896SovPMraJWapQVj1QdiYnV8HGehE59VnrHdRHtkMMp4frRLtqhNYJtQw8S74ojJjrkqDA",
  "key30": "4GThCbFwYHuWKx2fQb6qP175vrsSmLTKjVRkNm7qdJcyrPMPVfKPtahBFPiqxctvexjoFjCmds8rvBwVN1ZeMFMH"
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
