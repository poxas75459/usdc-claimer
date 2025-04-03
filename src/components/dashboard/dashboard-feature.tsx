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
    "4NYmd3YYxFj5jy6CW3jBaNizbrWZ1hp7fDuDTmNcF515zeQdqfBhfpuEX31QYE8txEJ5GZJVYh42m3GspQkBSEGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTvpH883VRTza2TAqmTFcSpZuepmuS7wrry4akcwKJ99cPT9mazuyEahcGZUvApNQ8aj14QZVKnKSrJc3Sdwrqy",
  "key1": "48Hz8Vyj2o9roQhZg2fnCHUgkjVbNpewq1jALEDx42Z7EB6NVmhH6qtq1UoVgwCyVKmiasUxJRrbfjHjkipHjQDA",
  "key2": "2Hh6bem4tt7jFpJHS8X5whrGVRvAHQLy4JSptCMaiTpbTJiEDe8cyLEYJVjST6gG1qoxZBKXbPNeitZxjBei536Q",
  "key3": "QSh7Pck55bDXnMJiX39fxcAud1CFRwVYZ79wyeqQaZuzDxjMr2NGUAEXYzQejP2Z5bNthTzq2p9epP7x42gVR15",
  "key4": "3kR3cRj8cjpzgPF3VpzKBtH7f3reGTNTw4Jf2UtVc8R1BGJs6QjLdyuNpVnbsDuFGNFCPP4xBs9LzBUg6KJYX6w7",
  "key5": "4jAXw9bkCEfCDKV1Lrnp3QskUc74AfoRE1Ts1WFk5814aP8ViSKnCeVWgaMmUrbJTwXLweg8FDKYh4uePMLkW5Ey",
  "key6": "3dbywe9DojiRLGFwB2fLZEsi585gdDfGXKwsDyyEYReXQgy9pdSJJDMpMCddRxSzdFQYSLxmK2kfuzH1hLGtkggq",
  "key7": "AHUJ77upwWrTzxWxZUtPyDcyK1r7nXbVr4isjhM4jrpHxBLeZFNmvpv8BL7NYQBUcFJFS3rooAad32Znh2vgthj",
  "key8": "5aeR8MGyS7LRxG17LCmYyb3eSDYvbLnhDxVccddtCir5gwTzPkNHHe9bTgWVPxFo49uKWF65MQKs2w3RiF8euLKm",
  "key9": "4nowbRBfNCCUuZQjWBRAgs2mjF2yiRmThFBBv8gjgF286Y3yfc8WVa47uWzsgsK8Q86ueQoWVNDu4dxWUFaMWkpw",
  "key10": "59YaTG6aYBB4Q3C9HgtR8Bq15HLn9pzjWW551VwWBjU1PgY4txbHwo7mJ2HSoMT6w1GDcC8f5qxCFnxxiLR9bJHG",
  "key11": "3etiPT3fh4g5LeKtyZyzGCrkKW9WtKNUvLntGMozAHUYV46REVgCv4YnKZCq6UAED658dsYbP3LuXvJdzt7ENKHZ",
  "key12": "5f11NDHT5DegSAaM5kVn2k4sopsttks3VxJ7ipiP6pmfY3YwusQe53JjV5GJxLiyLwDD6NN3aQnpY2qdQvi4BHcw",
  "key13": "zGxxsHwuhzSVS86RcN7imh59arpEQhC4a6qn239fJWAZGbSCo77V7kPtQiS8ZdPkMoibtaczZzJgngUN5rDZFhV",
  "key14": "AUjmC43gVvSd8FpXaYdpy3xSBpWH9NfjJVxGLeLh11ZA3WXenFisrXNmbhzyLThGXmMgYgfAA667eS4QWM7vw4h",
  "key15": "63NRMExWcRTEUmYGTLt87gHmGJVQYeV9Th5mZ1SgLXzMgcDYnsEV85Wyj81KRhkfhrnukmBoryW4LDghkorUxGnX",
  "key16": "2tJMJYpJDro4mUY1yVL5nS5zotvCGByYxoVJc3fJnhevUmW1fsGtYXbo7dCFqymqaEnhkjQ1VgWc1ukMRfLD1YE4",
  "key17": "3v5R4t51y3fEF2A3kkvpyBUE5Wm9omJBMnoPeVEYBQ94WJYChVaqPeBjNSajkb8zKrKbgncRQuqCEwoBLJKBpyJH",
  "key18": "28aZgNR7pNZEySeX2E3oRjAudqHFrNCw6SwWQhjwVopghVLoRg1jnWJXCFRTRAaaw7CN4PBKvz4GbGjx3NLWoas6",
  "key19": "3W6pc3vurKPz2fDHG4QTN9qLdR9iyCdkf224x8E69wsSoHfZUp4yzHAs4ypsHf7Jwb51HjdvzK7EqnFVWiYxtqGy",
  "key20": "5WPPszBewfUg9AMM6eVZbkFrAJd14SmzhD824rVKCAE5ebTgRUQMtkY3xpDPrYQWLjn7kYcNwLq63FCqLm7QTZsh",
  "key21": "5u3PvZgCjf2Vu1Ck3MJQN7mQCERBe5UAdnT2tfdHwTjroqrCgt4miHBkihva1mRjQxW59xo1Me4PpAJ7btgC2Uzn",
  "key22": "5NCNdrxC3owc1Yvzc4Umc5shMs2rs3QL2P1B1HtzcL5i2o5f3pCNHtwxYUZfDpuSC6zjV8Kbi5JKzh5nahFq5Spc",
  "key23": "HjhLeGRRvFxKEi1cRsSeyoRoWEqsQkB7vp3NBRvdDAyWbKrozKfNKMvEJhHEgvj4y8eM2P9GX5ipjoDiwXooi6w",
  "key24": "2ysLoj1QSeS8FrtkK3NQeCUjHh6Cxs9sQA1eszwQ4Pics6LooBgG6x7NYB1MbhZT6FFYTHazCYPr61ioNSg2QSDP",
  "key25": "3sAsyjPvJZ6boGYz3S6NQ54DbZ2TSaVRxt4FkKr3onZxdU8qkbuQANujPBrx3LtUZzxZeCVC3rAyucbKa5XKr1U2",
  "key26": "3fNioNdva9s9hV7XkusAahHM5upBKV2MqvKhnbgVKewFJqKWBLnYp6LHQUHmce31Pzr6oZrF3HStaXQfiTyc6sps",
  "key27": "4Bjs4uzQrsK2S5KhonmD2y1RHCkGza5ZqViCwHkFbYWqAggkAjumVoNwk5u1FXQeWG5Aj38k2KxoNMSeFCavENpp",
  "key28": "4ofncAiCpnPQJrZbZFCzFVA54L3bvdhyoeaGuD1eSJUhrkpXq1sVJD5rat3nZURdu5moAc7k2tSfrKQHBYeDffcx",
  "key29": "Vdfb5naA7RGbjhPsPVz9DVEtptay5F7kxLXymmaucUP1eDUN6JL9pZC2R9UnxUtxcVHm8nyXUSSTrzwkqGNaeMr",
  "key30": "4KnvSRguXA1XGK4R72jeFGTLJp5PKTAGz95ZpdeJq86zAZhVNPDUWHYY5hxQjLxVZzHmGQ9pWK84isgspuZAwRqZ",
  "key31": "2b6DRoXPTHj9P5kL4ArjX7mgC9QEL2b4AumnuBSVEUFK8jSoZpAqJmfUxeGwvTgivAV5sEqYYWFr2VB5gc8dt3qg",
  "key32": "5SRmRQbyjmwdqdVTy5QP92aFv1tA6YCXXBUPxgN8fBWVP6a7fkdvbaoDkANECLfbKLik5jiGT9NQbu3C462SLEBf",
  "key33": "T5UE5gD1pMxRQhvqULLLi7nzYyeCLoS9PMdMkqssSn3BFyth6pUgovcZpyhUNfkG8RpZ257a1Vq7hdaAaP5EjLL",
  "key34": "2r1SxgcADQrgX6Qh8UY5YQT1ToYdkFiACzvVgxdwPnbeA3K1d1mj65dR4GagiPzwPAkH3k9Sec9WPB1u6LRnLBrQ"
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
