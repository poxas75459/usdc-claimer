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
    "3EAurqYneEQx5ZcbjufkrKxpymij7JNEroy5hDrWvobc6dDw3HQvVf3mtRvrxPHi9CoqApq8ssjbuSccGcvaaqg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y2YJRzxwZDoxX1j4Juud49SZHz3xKyr966BAQaTTSd9dM2FVhqREBVBdmTA8ofBnNNXM45yTXvUGHeGwyWqE4xx",
  "key1": "59pSmneHBrjJoQxkj8UaDaVRnfbdNSmrV92Mibdby14H3gnuX66WptNeFA2ucmzfo8mwqHD91wmvAbuxBjhnfrCY",
  "key2": "36YV7mvpAkeVgyV446ay7YpESTijzGs4LY7vsL52GdBfpt2KwTny8BF6VbCBur3uCwARiELWK73vf488Gu28zrxH",
  "key3": "3VnqsMXUPLDpuavfuD3TiffErLMs3MvyJSUYgU3ZFhyoJuAoBP5Hy1Z2eQAK4VJkU335H1DPYi8Cv6nhMH7PYeZG",
  "key4": "4wwDzxQZw5ozxsf1H6FDz861U3VM8yrJ3PpMNgC8vSE3q2YjEVSFqxBe8Nq2hm4XKmtdfMZNpvao9JRrMAZW2qPH",
  "key5": "5o7Y3ckqX3UbrhFF45nxHaZ5NTFHtMeuT72Hc2omDwDtMCo8bi5xBGc93F6bLSWxZuesCfsxQwCdEbjmCTRWAm3P",
  "key6": "2U8AK3MKKGG6rEGxtq3VcHifCssHmGvDAtVsGYrFSMFkxbodA6iHKWgUn8voZzonb68ymgDogQvRynYafp2rGWMK",
  "key7": "66XN4aPPcAxHJmtjQwijcK4fHKtdoVDwKJMQecw1BykU6xN9EF41hmdozffCD1SatojhHZsVSvrWf1kPtUv2JSnk",
  "key8": "2E5Djg1v43kQSQV4yAgjj3a9gnp54MnErrHQxUse96rqc2CammBWuoEBXyewdQ46z8oQyxavqVQRUhKwJctK1dhi",
  "key9": "fyoqe6YDTqyVNtV9coSJ4nbt3FDrniZTE2V6MQdqhBHPX5pmqaKtHE6xSuTgwuXZmDdosmwJaYWFk9PR4sc13L1",
  "key10": "4z9j1YEHvaxb2S8PWSSc8AmCTsENnRimSG4LGBMb7DzevsTH2PJyV3YmhBhbMHvUXhMeZgL55HkJyGJnDEsw12QB",
  "key11": "31iCTkr1iHF1UuWSg5mawJEAVZdkoTPDoZRayArqdcPFRhXfR94ESk4sZTY7YM1YtPjjd21wuiWKVp3KXez12BpY",
  "key12": "HZrxt7ZhHAQ9MGGL64riopzdTp8TjTNv3xeqnGgqspy3tV4n9pGraFdh7WBk7U3oyxcowMBvVaW5y2XzPpANReC",
  "key13": "2YpmQJ1UVRtwWb7779VS9QCZfZ56cTRnEzLNpvBAdt17vSq4DpwfaD13pqFH8CHUMgRA6EsbCh3Em61a547yfDSP",
  "key14": "3q2KXT7SdHrUimcGi1PFdyBCZQHtdz5tJZw9Vgr9XV8e6mZN5DMGBtM9wz8eFkrgt8rLQVN6sk2F2dtxurmspgTu",
  "key15": "2UtYrry4ie7B56VtSGR3oDMfsdjoUKBZvDN2tob7KRjDmm97M9d6E5bnk43CCmKNrYMs9khPj6womE4JjF5y11hu",
  "key16": "2sRi667HPy3aLMzRdEgC8aFT9ozxovz3rEZ6KFM5rWcGzKRcBJkH8jLY5S31u9fQHYVr8FztHPnSN3gBNh3bmA4b",
  "key17": "36JEDFkrELPENbWtimS5FWWuG4Rr8FenJK1NV8EMBG4sBGmiuG747v4gMcLEt7naoKBimb3vfYAe5W4HsN1ocpVh",
  "key18": "5oyabRWwv6qhNeVugFfwrom8YRbeZu1eHCDuDn3jiVDjAD15bpJVnCGEpHfLqTsoGSqm4suATxJJBwAD6vXEF9jN",
  "key19": "2FJNBCocss51VetCNf1EhmGFfmhMAyUizsoauSVwfpKz74DGa2Q544jV3BuL1uZBNMZmWupsyC9FnxyykNHCytJu",
  "key20": "4Q73zdSDkKwp9Rhdfx2CvYURZ1oDx8AFrHKXGUsd77Cp2smuB5HN3WaLnzoPmHYi9rT1uA4pe2KbBYFAcLWKozA9",
  "key21": "4osURFvacyKsuS9YyGbvYKVUHzSPup7c94eu2ASM4fAP6T19zgfWDq5XrHkp4gvC3cKFRe2r8ZVb4pDQjs75Rtob",
  "key22": "3xSj3keYXBjM7xEoDzXxHkNPNvWimXgKnt6PqL9cTk73yf3wFtW2zuZPbbsx9TV444zVYaRudwZrhdR2NTHkyXMM",
  "key23": "4oB1vjVrK7V56w6qNXXp2iweSzcyvv6kHGGZxDsZrwHu5xsriTwcenHSN8bSKLkboeueP4JtMF9ihNy86WEp119y",
  "key24": "4BQTzHRvbSAUosidnXDidkg4ihai3vyyX1KxQR2DUqo8ufa2biMkK9ag8woGfGSBand5BZvTpPo7m45MmtiL3mih",
  "key25": "31BkDhn1hJgL4vgpxDXF8yizy9wHJg5WhTs5VeK2J7qj537BK6qBkoJrsh7DsRdnbXPhnFZ4tNspikHLJTZBDBf9",
  "key26": "5TGVyCZFoSSpLW4dDbnopfM2XLoHctMwUF5WZn1FaQLgctD3GngybuhrK2LcEh4w8So9rNwB8t8qDJoDfvhbVKL6",
  "key27": "2uczBQnTWpNLiux9iVfKeWWw31WiyPo51T9B8oW8Ycg537WHEWEhAwivGAyA8YrtXTvJpbZqhdtXcNbVCdxYBMNr",
  "key28": "3d1eV8ikbxEhTpgzPmqk5RHHYvJazboR48gVCFfjKahMXbyf2VcbVRkbX6Evw6zwwmGPMsTryusS9UirFrabus8s",
  "key29": "29dsWcd5J2HyJWbHRGHRBQ5v9BZ4ynQZkU7h8ySdXXxM7XzWjkUP5zXpZ1dW1GvMXCGqwYabj2s9TysUgAtQKzUr"
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
