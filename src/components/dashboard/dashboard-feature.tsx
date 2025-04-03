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
    "4fGfVvNs2bHY8JzjJSGpa8yFKk88PBJUCZPLxpJDg246CEWE8QXYSxHQXnigbCZAnjDFPchg3tdxNBEbri518x6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mFvCfmCty9mrhNoZXNAxkEvYTfLemfUZoCy79XDrtSVDDEYAhZ1rpLtndi3euEMamQ2ismrN17sQ1kekjD54qGR",
  "key1": "35ehyx26H95u5u7U6GGjyxiR3PewgvwmzSz4EeseTpRh62UdGvMUZyuSKjssPx6GCBQGYjUmDmnprkvzduW6GxWP",
  "key2": "4GAcuUF3cYHNnXhSPesvDN7NaizypV7uoLht14zwFDVt1GNGTrtzPzyGLJhWYH1SrLCUnF1N1J3FnhiyXsZDr3Jd",
  "key3": "2i42Wnd48fWnzipVFnTThcv1te55BWCRvFzBeKgFTQzyoAFZEJiC3EP5bHHaTthgQ8HgTKkWq939CrN8NcYh7AVj",
  "key4": "Mr8r7e2RLfy5qJWJbRMSVniUrzcPmvURa3sCQKgWQKUNXYjv9DUGXuhjrxr5viUfR6Mo3mnysPAYVxqguxoZ3Di",
  "key5": "5Gycg3ksxpBVkq3yCJaWiaJDBZ5Cfdc7A9dDRxp98suzDCCzX8iUsMtzN7nzeYL7FAv1QEEetvJCqEaKTZwcTfn7",
  "key6": "e3Xs1fqZFpzRNKexZzhKjx71NGbpcRgCvbqeRjZVNgavinBbGy5AF8C65ao1QrtGMerFBN9w7iSzj5t97z1y8qU",
  "key7": "4wrcGFxbQ5J4XayfUFt5G37MD2gNZuHaxLNoZ38sxYMmHVyxji1SYFaY1Ujc6yzXsFeQiEdTG4aWyHD3xzJVcwqD",
  "key8": "nboANTRTj2Z2yJCZTcFHfQC1UnXuqfXzSZ9UtqLnzeEd8V2sDq1VmEEMV533anayWVAMstCT3gr4BPGKFjJjho1",
  "key9": "4485f6k3dHPqfgz5ExyZU1mMPkTG8GxUCFB6xPFfwVdV3YdRRJvhbGod4ADwE3ZfvYtpKrg2KBaePG9j6u8jHrMY",
  "key10": "4gWF1qrSMtgVcJSL8xdN1Rm9vwAojsz5f75sWR9sQeYQvL8uFuYUBQxBzV7jRYEYgg5ZfQgjvNEngxqUeKMn1xFz",
  "key11": "hkXdVi9aTLUYVsmLDrgrUzk7vxZN6RwATLyYpr8qDyNsZCyxGwXh5c8HGsrz24WZEA4Mts5mpnZXnLGp9BQG8e2",
  "key12": "4CPQaD13ArPPUSVqx6ftxTZbHuyCiem4Z7F3TznrHiKm3iTvozkwizYEcoPmBg1PJUeuqk2hEYDSQ6kYj1u2qQbp",
  "key13": "5fcc9gPiuh3pd5kAfmt6XdkhbXwMToafGZErtM2cQ4ucGegKxgofFVm3JwgwLr8zN8pecdzV97b2a1tVfHhyegRp",
  "key14": "35GkRjkLuDKeJgHjKRMrJEhyRuMctgtg2DGbwpotuSiqdNsDnfCywF5RQhzcYpAHb16aSsvMNMvNT8UbAEHsVtUM",
  "key15": "42X4U4YXBomNdoFUacwNgpRTzLzGexo6cGKZ27NF6VemAUJTrN51SHxYZvRJoFGqiiCDevFAjsMaFEpnrkQt27AD",
  "key16": "5DVoKqR8DXmGjufaQGgxouoZxfA4kuBc6V3XHKDgtrQzQJYKxCzjAZmoqmdCp1jM9u23b38BA34B1QRWF5vBuv1e",
  "key17": "BikFFoBwtwfxraRXKbKsfutYNshYv7j9Atu4FQLdZm56kw9PLLqD5Wt5Svip8f44WQ36Bmxwv99dX2Ck48mUcBJ",
  "key18": "5ShhmuZaQ6J8WzGAxryUkwsd51nbW8EqKP26sJHucHo6DnA5ni8zRViHr5fxBpv9Vb1ncP9rnaJY9fumrCzfKium",
  "key19": "4jRxxKPz28dQyXsLn1keHpG75gCsf25dBEuCP73RB4mZz5QrUfgDyHQx9d5qy7xuwvZ545g7X8u2uLCB25FmZH8n",
  "key20": "2zTzm78eXc99yXPmNS5XuX8SmgT4eZhq5xP6DEkzKaepMa25NAcDQPt5ZvoCnrj2sxZALTFaLFUrbcF6UNfJ6911",
  "key21": "4Bt1SoBLHJZiv54jq529jsAaCmyeFxNPFWJvinWRitHHDhmGbd8Mct72mLVHzax3e9jt5w88Hu5Wrj7bDzimfk2U",
  "key22": "4nM6hRWy5p41LTon9LjYn8VSbxKdSqisAoxZzjPsSYNHikG7gdx34pbobUxkZBJDDR2jNR1Wem4fpPmHQJnjgKtV",
  "key23": "5eKK87Q42iSdbVDQDTT1SB4wS4U2g2MeMdFtzYcNiVndyyqcHiYmuXbSR5CjBoj1Dyn5wTahzpXK6F5nWScD4hy1",
  "key24": "UZxFPyjWLYuhiTb98jvNwBsNCqJdBn8pA98L7KA7MCe5MM9hs4DFumBBeNRMsov6wYgHz1xsVaQmYHAXyTy4wpU",
  "key25": "2725yQ3Rg6pypGVKAC3XN5qtfgVY2aBJB2F6Bw6C654Mt9r2D1VzQnK4CQn295RqKreCiZ4BpJwaLizDFvFzyDvD",
  "key26": "2b6sbYEsxUneNpbf7vEMJEeZ3RRdUUHWGn3b2MQ4zcrQsZzgAoRp1vZRVaYxpzhnoR91qiYH9ShqoVqduHM2iWXF",
  "key27": "5UpfyBoSZG6o9yz3N1XmkYshnpT1BD3BEjJAyT7Wta17hZyB5qi9XsXLrrFgnV9sC2rbsJ4ThE2bGgS4YRD4nYFd"
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
