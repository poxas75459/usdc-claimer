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
    "5RVrQBkMi8iMCwMDCom6RMEUWf3QGTzqTmvCYZ2M2tLk5kwnbLrBz5VB9hPpTyEfQRBHShgKEieHcrKjZ7cCEs3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PdBgUxm8bruekpUAYjopRLuhNBo3oPDqoWU6xM8KPG2tBWEqT8zpPZi14sybiKumpBGgguGZygEkUnCpH9YBSHR",
  "key1": "sfBvhMLFWHVYzhVPQEofq54HnQbH6SrBRXeb9XTZPoH6YhKbkmyF3GeEGfvRAJKakSihVVrKEFbA7rD5nmwdREs",
  "key2": "33t56qX3fyE5Mqmz8imnPQckgMsRMAHboU4Y8yXBnXfJ9wpKA11crPicFKQxJjABJZ6TK4B2VchSUw78JHoKuPUW",
  "key3": "3Dr9GX6uE6BnHcoSHjTiyMruMqtNdQdWtEuu7AsuJZPQXpDDFDVMi2pG5c6JC1QXW8YtbCTC2kRJs7FKkfYctxLc",
  "key4": "5s1N6i3JCkR9aqfRd4kNmVcvSZLJieQrUgZTcL7kw4eDDDzrZKujMnVwswzHhkTP31PFDYx7Mya6UDMRZZeqpHJM",
  "key5": "4uYddX6NDYLUezwfzRwHEpy4zfUvYhMmjv4xVRPkepPJjF7DAmjXW3LNhjDtD8RKgS9R5mNHF39vmcApbBHUNQbr",
  "key6": "3SHFVANpuq5z5U1bb6KZMfhCxtTp2uRJZWvjTo5dgWJjKoVznQa6EBQ7JFdJBWUAGLW2Sk3o1nYJn3n5SXJwbZhG",
  "key7": "brznn4QCH5dmbfzghQPF9h36ZexnAHpNiX5NCMoYe3EiSdv9J6wasRNNbjhPCWY5eBZUeVGL2RfJsfdSzVWDRi1",
  "key8": "4XP3FpNV15ruedavJ3ygjbu7tjtimEZsXdgqTT9MBkxHWHCbcxBzsPjYimE92bSHAp1rmehSwJrZKxfL8wXn1aAo",
  "key9": "27cumzkW7pMvG2Xpf2c615V2rARztnDMHpA1Zae49XeKHtkTMa6Nqwg8TAnGYfQAFuHUThh8apNCzR9aGo4vat8t",
  "key10": "3jhAEwxxMzMxfrNrYhBGEgSfdAJn2SL66ZX25FevuL9KNxduaZPnUA7oVubbto2of6jvu91RBy332GWjzBb1MoKa",
  "key11": "3DCkYUEVtdZbTX31ZBK1qjWTckLdnidKhWXDfCPrkY5E26mLikKaYCKHCuBGnVFcXZzDFboYjqaoozTeygBqqEef",
  "key12": "3JLqouBzi2LMLYnFjw6uxd4vBiFiQUrXnHcpCrQfxDaWpCM1kt3QXDqF9JMyHc6t2KdLyBnaZkjLBukqAyajRyzd",
  "key13": "yHznsgEFPcywySqoKgpDvPz6yxEncdu5uLZWJ8hj61aaTb12fY6bXd92kvRBhgbxF8YE54UEgkPboobfMjUScho",
  "key14": "4M5jAAWFgD6jWNmBrk95YPPHpJdYNBsmAKkmAWaHP1vdJqtCD81xvmXbgK5AApqok8H5KrEyZtnd5baf94SQ2z2N",
  "key15": "3jxqSCLFQszPdzybW3XrsgJo4vcsPUCtd8ZYix5wRRVKaa1fRzH8xw86Rjd4q9GFmj8XfMAQKxBzM3w4ymTrVQbU",
  "key16": "5HEKCYrFtXSNcoE9rAS8sKoxduN2i2gQ9t5TjDXFzZiuE8y17UuhByK8ujQzwZMyXSgYEXGjZMvqE8y33fRUtaX8",
  "key17": "3R2FL3vYWtCwQWRSyxBVB4XY1x5mEYNr3vVtuCTSdQ7xoKjhV36VvZ3jBrupc8hMuYhCfiEcw3AbtzPSgR28mQqQ",
  "key18": "5Vm1t533mn47mxHiKyZAyNRpAGR3K8LWxrTwnTPyyFeZy6z7D434NS1mg1oRsjXRdyfkwz3MMMDZ3N2aDm5HMFpi",
  "key19": "4B2iFqvYdxx5DdcYqyyHqSCJYns2Fh3KSs8Q4SjX7DG51cqJsDv3koSVbQz6UekPN1CahurK52zfFUBGueuK7zMo",
  "key20": "4WiKWFa3Qo2hx4Bmj4XumEifEGcKpVgitewqPuHe5MUgL4KPAKyKYAxXUvLMQRYfsgFToffMeaPKXkFrbsZxTiEv",
  "key21": "5LUe6nLbJXNYRn3xxfmcT14cZ37ndzMZntESd1YaoQMSXWY97DcgpmN7ShhxUBCTT9dNug1QR1SfTWCGzRqSiAWQ",
  "key22": "38FU5tf9CvcasBR3pXD4yEMEL3k7samz9zKU9NHwanAsYDdvNwM5ZbK5yULgAy4GVcdVZwZ2LfvvrtqPETxcfEmU",
  "key23": "eRYSYKbKv65pVTW9upUcYRG4h7CqkUpTSanjGRCqChePqKR5zf6tKefRfK7cd6hTxJL1AnpYFuaUDPZaJXdF4L6",
  "key24": "34S8jWATo4MFWdmuDSrGXMTM6uGS5s2EGopqmSoKUrZX4pbkUUbR3pVC5HfNc9sNRYuZ8NJxZyxYAMN9VvYExsRC",
  "key25": "3ZJy1ac4NzSUaoUvTDzTuRQiUk3o9SFs4e8CDh9M3QTtb7Dz1PNgRNh6LPTpnLrUA9TJYGNRKhFMCTyFeHd8YZnX",
  "key26": "4TJKeaVzShHrHgweXqdesi3AJgWy1Gq4knD6uYg3fQPuHBQkFhPAfHb91ZMyFRgAVtCoSn5tyqZVCLAeihuD5aMw",
  "key27": "4LdNieQkxBtPdystdNdiGpzzpo7D91JgMQuyBLZU4TWwqYjhW8ym5YEQFfjcouQVqXcygFhz1HkX4JZrcyMPTWNq",
  "key28": "3E81iKKtcpCGQssdMG4FowEHeKtRV2FdzxwPreTWnH9iW2PQt72wfk9rsX5k95JjGVnjscGTTKBwatNzPAngFrwG",
  "key29": "3RtwTFJAhPdRLrQdKe7w8ACwCYma43G8TFMnrqKMvAN17rLUVd88wS21DsYejAbR4oBYFes6nxomT9k1xUvE2urc",
  "key30": "5qoiueBHw7pfAUULZcnX44qtkkYDS6kTABGNqXsDfNs2PbhREY1sJt1TX3aqeKV4dyWsbNvGHQEKbz8xGTbjbZBv"
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
