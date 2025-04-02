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
    "H38t5fPP1tNqaVeMUwhyaiHpZzgvXJqRphhfVY6pTBY3LnpDAjxGeshuf8bqawrh9CeyfmRmhQoXACZiFdRWS28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V4KtBkG87sAMkgeAexmPwvQ9d1xcYnyszWj5F8u1bBxQsAwzJm9Cuc9s8chgaDBp2NfiqyxugRGsBVGPK2htyz6",
  "key1": "59ng9cFNk4vNV79gGY5MEUJXY59QUjREnb5qm6K5wSNxBYT8LxMxWwdNGxYDjhcpyiBVJreJ7DtyNk5uFUfe4XJT",
  "key2": "5WWs5YBRVcSsBZfFBJJvuVcbQ6h4YJLPaeaYmRjJNKnPvpEzZxK2Uwt9aSBTyggvjYdq6nWhtG2LA4c68JnxFJsc",
  "key3": "3rm782AeK6yJpgGeBRuCXqnGeGygdgbPsxiHps1R4ix1coWQweTeqUnR3K7GbHrzWg36n51cRJs5MFyjQZcLmcFq",
  "key4": "2TV9gFVPr5ruTS1Bf1SmWQTHQZwkWj15bW1MtTiSTst5n5gduUKcMnkpqQHgrvL17CqiJ223mixBNRgcGXewhu9V",
  "key5": "3zZppwiC7SuUQoCSi9iDtKByDaRpxsXaLV1UBRNzu7XQTiTPqqmAzuDWjVB5w8JT9SkSugovpHNdA1FSdR8Dd8v8",
  "key6": "4xXbzPiiV54E2vfnFwJNoHuXcZddMox1X2PRcZ1xsrE2F294Xnpejn5nvUNx1fwjW5LXCGRonWYv2hoscq5D1VWR",
  "key7": "45EQ929zTHmBJAqgUmAERXoGcK2TBQMK9jeTZXrLxcY2L1UMXrJWEYytsVjLNZhmeVxrrXvCt6FhR3VmSteVC91c",
  "key8": "2qJAESWvePPX9VP6QcLFQRJVtZLuB5XM6US9An4Rwd11XrZw3BkWXd4vrKbhhBXJ6QoH9xhhMn6LvuYYhag5kta8",
  "key9": "2gcXU9b3qStYp1xtYXs42NWdnr7vFGZoBuWBrApoc54a8o31dN8VVptaEAYt7ay5ACCyUQX7PRDEVTToKjiCb7CN",
  "key10": "22ng26aL2Ns1fWLrn8SEUS6nFw2CkYJTr1eQgDkV6vD9kWsNCdve8ev7TzZgh5ef4SXoc7HDV7kZQ9V3im2oonHj",
  "key11": "5SxJsbYFUFqQxtrywR4eNuTRJmiggaqvd67V1o4xD428LwGBPPCSDsZap4DSJhSvPuBm26fwRVTL2py9BuuUDzdy",
  "key12": "5j4Jb4Q1Ueh1hAftKjKLC7KxzmcTeP8txoKfTBpYUhUPKVUYtrwNqYg2o9RvH29QJMPuJgfprF6NDZYnErntfPVR",
  "key13": "3sVZXvhm8xbXGt3UWqZcMTvUsUz62epez96sMj1M8y13cb2rCwXkxmhATQCENgCAYwyEEVsJJQUL4k5qVXr9qGCE",
  "key14": "3yzZfQrBzTTnwKmhR3zUhknWmsmUozTwR4seDJ2jpFbpqbYnaHkLg4V3o4x4ihzDSdVEZfo1rAycDeFEsAwxPYKy",
  "key15": "3K58G25X7rYnQrnVhncE8qPk4kv8oKtWu6DhATXvaGSCAG7oDaafaZsqUSsop714ycJEXPnEofo6v4qKYjwxML7z",
  "key16": "2uqD3SW3eMj2kdogr4SvDNJ6bUkedPnB975m5tzpmcnLXyCpVg1EpwCDxL9DEf3QR3jX5gZVpgzovqEpduGv1W7d",
  "key17": "3ziJLtKWd5uNDVrWxLcNpCuKprKcrna9mgzyHPY4HWTLo9gkqLZ5X1TAUUwm34eGprqJv9wVwuvYQNYgZS7zaenC",
  "key18": "4826UnvEYMLBm9FkL2tdHxSoqF1Ym94qDLzFwABNTygyTXNAhUn9WtEuJzUXHRUTsVfpkhARMT1WFzCQmjBU6CZg",
  "key19": "UzXpVKcXmhYb54ibRsoB4CBCkSt4nQ4cRQH6zU6fDdtZGgPsMFHf2Lzgy4Sxg3cNDqKTzyxMsCDQs3M9nfCPNyT",
  "key20": "3uPmpmYhQiCYvNzdfYfgZp4tEyxyYmm5VNgkX9wCUqpDfKWQM4wJDBWfrfbDruysFcfxbQacczLDbTNUSSdX5EMm",
  "key21": "ABDJwQoU9zm4nf3kn26e6thndo5UJcpRvZrEZYYb9tyfiPjYj6Tb6C2AueJ1JicwuNLa55HHm25d3uMqbJ5iGCz",
  "key22": "5AiqVBvxCuNg2ohwYnxLoyStwen3AUayKhtj9FtXqrNBdVwU2YSSQBqRGq9knGbmANyVia4CPYS4jh2ECpj9g4ST",
  "key23": "4tHZCY4nRr8z5yuisaXXKDGaDdn1dcUbm42VdVhuhkqxSpj1amvMzEVn66wy4c27gtZocifHfNCY121C94wZ1PRb",
  "key24": "qMn5x9rGHjPXLosoRFFUBEt5BAP698UiuaZ5dCmjuAUKqrYAj5A6QwPk4EBUuh9sGx2s5CMF3CSmtkgMgYre25y",
  "key25": "3SRy5yYkc1hweTsFiXSkGTp7DFubqNwqUoENtgqtx7MfQMG9da84wMbXvm3T2NMnKU4gVuTXqnHPWisyyHixYJ4C",
  "key26": "2YVV7uLhjVHGpTNDKHYE3GTQGNqkAYSjHQ3affdvQ464DvmG71MZqoTmJRChAFUNstHnqbdJQQcffBf2kU7AdACF",
  "key27": "5ZACi7dMBAyh8hK5EsLiDZPr7KZKuoTb85EUPPV2LB9kpxgQifbNLU9w42ryvp32WzVWxA3eBDVgNox2jgjR5hGG",
  "key28": "3ybC3Zy7PbM9GLYkCCmkufEdktCifkEcX8HiPD7MtUTz1mUSu7PKTxUAGHxo2rdKU1XBMPRXvL3sLhjJSuf7vF3k",
  "key29": "DNNTWAvYRnUKESLnD4PLVK2neKs8WM2jWMN7XW59haG6F4Smyckjb4xmpmpMFhGWCVAU3SNtTpFkywbctNbC6X1",
  "key30": "2r68i3M6ZtDjuvVn7nmDwunCwQdmcoiGP2PLWW5fsLMR9Uj2FRASWghbeYE1suuUztY6RL4pRnSATweovmyfADXX",
  "key31": "5fjA7wu28SJL7aGpnbufXybf1T3CUGc2rGFkUcg2qEYdtrQNcQteyxkcT4ZWkRCys5HrWg1HZ9Um3w1hxYEQZFpH",
  "key32": "3AqDLEW5Vxa3dJPUsBvGWdb8E4JY7aj4Dh42vdkaT8a4oe5Mho5NstbfTAjj7VziQL5MQXq9YraYZwgmBLgto8vB",
  "key33": "qcvbUzeuyZXMBr3192eSWMGPbTuZxc6Z3S2MLvQAHVDmi6ek8nCqtGJRsMMfKtW6e4AWQvQVvc3VxoZK2CmPufv"
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
