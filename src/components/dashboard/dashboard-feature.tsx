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
    "2DFAGw7UvqcBVsvQAGGDZ2ptDNfCb8p9puouxykJfef1rSzeMNehRNuGRkKMAphsoxm3tDLzi5UgVVtyAJrk2R79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SVW16H8q2m9XgHPH8GzvwkwZH6jjVoBdg2fqTd9VyTXitLMqhQzsn4kaYowybwneEyLVwGjFqgQVM8T5f5Ff4WQ",
  "key1": "3HPEfFryhdktFM5NrNWKMnqsXm6z4zZzvrULBqZmo3ZrFvzWhKLMWLBQpdxUd4afi3c6cKE5rajvaHJA9zC4L7CS",
  "key2": "32Pre4i4ZoASa2uDJeAc7zCzXy8e7Z75MWzAjoFAz7wanLbE8Esu8qDEw4GV9Fn7hiB3AK97ff93FLoiRWqBPHps",
  "key3": "5UYii1ZFxwPg2GNogP1EvUPNKGWjfSd296JNU9cbxjbMWWaFhMeGVkzmwYzoGstG5g5Eywjbx9fmEQ5pvfBWN5Jz",
  "key4": "3CiNFeoRK7tTrVU5oHFeJ2Su974DDxBbbgEPz2BocvHpevPdBV3Kx4RfCxkwKAuJBnDQLokmAggHusjvSE2zM4s1",
  "key5": "5XJCuux64Mwj6DS8XudMXSdcrehzGoVdYdR8qT2vdPnKUj82tiwvR9KfBMSErPaS54hEJxE5LkaDEkaYvYb9J7Lp",
  "key6": "2kh85RGg3RBJfWZiKCscFZPMjYZivWw79tVvLs9GXkeV2eXe3syxDmt51xgYbyGkW7yRFrT2cdhv4vk4q6XaNm2d",
  "key7": "aDHbdHDRxxPNR6fntHkzyp5MnSkKaacbTUHzRA2yDixPo45RKwKjau38LczrugcbcnHXUjtazx67cuQ3N8w7Fpv",
  "key8": "3CW9E6LNKrNgzw3AiFGmv9A1Mo6NgpXhV4F61sf21ezTazn96hvUzm1DAj8cGNvoLgqR9T4ohn4bBSrRu1Ra3eBh",
  "key9": "5yvUMdU9GuvShRft2Yw985WJZMWvHASPxsq3Mm8XfKdwom77cF3XL3NnHPepdwJPvaNGqcFRtJicxuVrZEMMXUu9",
  "key10": "5414pTgdqFKD3QdoUhaMVWYK33aLyh1xMXaMGmkk5e4F9N3mwmBm1gGbJExftdJeMGWPetvL3jJNT6KPeA9CQygm",
  "key11": "5QYHhWWanJNDwiGWGEaDCYueHZTdUG4bQ9C1KJrk6SXZPK2pGqSNj9T1LM5gWUUpboAHx2PdGeqyuu1oBdSDV7Uo",
  "key12": "4NFwcGAEEy1unfwvWHQDdtmkKPnvBN5fpcvMdVrX2Vch3pUbrTVFpFAPEJyPg4LZxbHTmtsr9zQRqoFhoM7iZEoE",
  "key13": "2abMMuhiftnhLyNHgibwHKduqszNCjwMHW1c1W6hfFJyLT4oHeGJvzhbUwGFNnZ4YbCqhN6xTovQ7jXtmrY8AR3R",
  "key14": "4qqe3BDza6YerqxYjWokNLP2Tv9mACgusP9ZJkYfrVVgKuRjc1CYh9D8UABjgvKC9M8o3zR4pYZ68xKekfFQLX12",
  "key15": "3mAX3AMacGcgaEYAJyAMfQAz1pYkTKVF2iJ1UynRPwTBARvyPtpm3yTW17n1FWKY79LjE5Q6gUDNNB7UqVqDh2A",
  "key16": "3QvZWcxSUioLgKkXy24EiS8io261kJjbESUgQYUvZ6rcZVr32g1F3XSFBeCmWiqn6rUnXcGETx2y6puMHGAkDuec",
  "key17": "2ReByjGQpHYfUPAY5bbiCeCkDMk7PnDMybWkyCn33mZymWEcSo8TEW29MbCVFGErZxRHkb8m15cERE66PRtHtnGs",
  "key18": "3mM4SrS8yndyR1vc68VTmcC26oVxaCjPRbsFQCJVD58APs2Gs2FzMq6AxvBPHaLkR1DAQJofsKJkC1gzDoQWuWFE",
  "key19": "xcvQEwaZUfhFGNUE75w3vwYh1ntj7m8JfSHHs3aq3aM84BCDNZrEf3baPLRvn3RNTho2UmNKmsG92zCZnyyJDRP",
  "key20": "4hMuJgsPxWozLxugizYSA3PhYs3WtzMjZMQVZasNumKTzVPZ2k7oaBZyuXmRTJzx31nHDstkqFFvsWReh2owC16R",
  "key21": "zmepBVHsADoma3iNiJ28m5M7pohvP93iVu1V7sx57EFr9dE3vyBMYDBRQjJgyJvBCq69TFDQ8YTRdENe99Lbf3X",
  "key22": "YNLCmdgYgaexXZjnboyppjsFGzqiN41fxJCyZsxk2tjqUsbk5XbRD4RSJQhPr4CLrGykkbF5PH5NVpueJXjmkHY",
  "key23": "4jN1gUdA4Bsjx8tBJbnCgQUf11FQ7UZgpuZJrCiz1Xqfs6ewPxUyDkZnh14yo9yoxJ8YPvHgyMJF5x6fUNjSPmMK",
  "key24": "415CoB5wLzr1msdCRJgaTrsLQ29GoNtptyiSwwGDAJJtHrTpMeN69BgyNYdUaMkSCSMvFHKfJAJJrtLyJ4KryHTM",
  "key25": "4G5JuLxszUTpZzweVFRzU9Za38ZZZzn5vjCBXRw7S5zcrmw6WX23CXA6pU11qdynSimDXapzDR6oz7maqEGDW22K"
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
