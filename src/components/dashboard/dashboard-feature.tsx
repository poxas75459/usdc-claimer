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
    "4YBvFLmWfK82jy6ex7gAabXfFhv1fffYKVJ9uFLLFMj3mEziAcANx4ZaaMx6JRV2EhzKsXnYpuFmUxAuikh8wqPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QpjoiJqwVBaVLzEeMDm6wHaZoRqJdBmZ8wDEmAPmb4TbR9WneoV4HqKhN7TJD4Gx2KNFrUmKtzFkDaWPZPVdcn2",
  "key1": "4aLDiCqg2m7iDTyYT7Vz7bcrWz3Y5sgEF1fp1Npq3VdpfRWX6eiFfST8aTtc7wKvdvWHMx9g2F3DkMJ1oePWRArp",
  "key2": "3ZnX3wWx2tHZfs9C54zw3JQgrmQuevmYEGXSqeAbk6gr73e9m7oeg73EsQstMRNFDPqo2uwqXq9kQ4NswS83WsyV",
  "key3": "2uWPj2CDF2fJXpFNQESe8f4edSVND3kHmMaT5jhwPavj688DgxEqBkEncqcp1QkT5Em8KckAErevQRqza5pz6rVm",
  "key4": "5AqcVgamdpg9j9LRUDUxzSRRuNmiMGLizd4XJyf7rkrqanWEgsesxEFmYHXVfoL2g2rM6iNVYsmZUiCjbPPnE2YU",
  "key5": "2jAbz8GWUVTHMMvQWGxH4eHndoytV433Q1e67HEwtUNubZDuLTbJbBFTikarU33qCuYMVxc4E4WKwjJLEafv6wsd",
  "key6": "2L4Fi23XGo1D7UYMdZ6GfcHbBFdnVjoQdqHPh2c1PN1oibeYmfj7jZkHkxtjYbyJexBWB9Yg57iNZioutkAbDAES",
  "key7": "2N365qkGNCeTXBU6BTYoooANv5F8HmEDSgBNEtN5qnhXRyx4BwFUtnJuvrJxN8tLwkpANVPyTsQkfVJcmzRaNE3g",
  "key8": "P9q53Hso59Ssoyak77U9sEfGB4wtj1QDACJz86eoyHQ4YsnfvCXSDx4mphva8FHTTHdtXV2AkBQzLzVZVQjxAj2",
  "key9": "3ZVj29hByJgHcqA3RkyTgNvSNGEzAnDwkMm29JrHJLwjRrMNbcqKETTE1XXoSWeLL2AxoC3dGwcz81uNpiLN3iHw",
  "key10": "4ZsKM7frKU3J7YLA5f6jostLPacAZXfaSVBs9R6hkSHXPDfV57NErofGimpnph1hA2b9ZjCZ8wsXnqsSGmDwHCo4",
  "key11": "4Re6E45xrQTGTBxpkt2Min6r4uamrLuWAQAuqe7fkJWsexUjNjGriyjfdkegbGtUZ43yaYPr4a5DRH9oxL4joCdj",
  "key12": "64Ub3igA5YPyZAkR1BRhe8Jbuxfv5VisyjarmUAQkRRm2feLT5DzmrnjuA9cWjiv624xfiiVMtt1GJ8YatXc8yb",
  "key13": "32kELk8fLRsKWXKipdyp99uJpfb7Dr1ARELBtaDwwL9TNzfrteKhoDKXucmc1hchvMVWjDEx1KXkByXHVYqm3cCj",
  "key14": "48CEgQYfYPC5vRkf6BDPxW88G3W8Z9zWuKx85bJEebr2hdYPRf4cz6jP3VzRkmTfBEbnBGuCpYA6G8YjqVMoXGg",
  "key15": "5FjcVZkBBkrqwFe8y5CRgmse2vcb2zdU3Tbi3f2dhmVR2mCg1RVYTrEYaWG7DcjQ57rBm1gSnbU6n3GPovFtY6Tk",
  "key16": "2ygueKJWsy58S5pxAxtrEwkjW3g4pKbRpMEc7PENfJHxk9MBArrQSWbR1oCFjXcYEcL9jciz2283AoSrJs6JrmYt",
  "key17": "5N53sY61SDxTTAVAgXxUQzFPtgvDJrJXwsgWt3tYQGXEyj7i3isZYQbuskSSWpwPMB4eoVQcqvfx9jVz1eCQBaNu",
  "key18": "3VuiBfBqFypAFxjAyrdwxJwefUSdtGkMc63vW8p8nsQLG2jt1LiEN2juMT47g72QJF3sLYo8cSi4LBUeKijThZD4",
  "key19": "2UUaET7hNooFBWUqCw46ComBTFCUHSPh7M84xRvRdyrPZsFW6Y8HTpA6uAjBLVcHaFW5dFLV5UtC6YmotEPTF8x",
  "key20": "4yG8knhcRwYCkVYyQzf2EW5vfnMJ87VxLywtGsENQmMASabCdKnfhbrkmZSeTgy4kudgFWU8VVThV6WQny4Spy3n",
  "key21": "2NHosWqAkLC2bt2RRNPMaYDHaMS52Bs8wRmTd1GCXyH6e4XwqjUpoB6DXJZyWfXEbG6yFbghnmoT8NjTDQHxJt2m",
  "key22": "ks9gGbJxaQvpqFnXrXv8pvEgVf3eXgq21KTX5RcVukr2vfnN8LpEdSxzTj8VXBLqNfwiQfLaVNACM7ZgXvxzXUY",
  "key23": "5NkTMGiaMs32QDBj9twgPwCtUbJxqQ1KULDC584NFXcXxcd9C4a39yZMeiQW9Lgt6ZGQ8x1AVVk6CXfYQnn6whWp",
  "key24": "5LPmQnZuWV7Dqd3GEN2jgoVaA5chTgFDxefNoifp5BYrcgyqzbV8jMheaGmDWm2YKN9pUfMcrTiawBHun6KGPLof",
  "key25": "4LqDoBtto6pNCEisj4huFQmqGEqo9KphaVkkhWLX3UpPqKXVGntPcnY1DYBND81bcbUDBMZJqobLbu3G3z7fP17R",
  "key26": "PJkX9kNGxTwZsDFMA21kga4Uy4ir6H1q24i2HsVrBjcjryC8mnR91nzDaZKCgNSyEB6dinaoBGmSq6YpnLEmJb6",
  "key27": "2mF63XC16XsMBmHXBjsAAvi51qaVyr8XaYbyL6jKqbq2ToiLU5Ak82PfTGkGCnbebyz8VgDA41ATA7RoguLvRkna",
  "key28": "5KAbisXU3aM2AFw12AVZCtzEzU8itwwmwpepTzzJ5mgGyTNEJPvm1T1RV7bz1CEU29ubghJezVcPEMuAGeon4gyc",
  "key29": "62UgsWWPTURqSZMKzraNU3Y1jr6MQrweoD9J4Vw2JaZV5Fd2UiMD8ZcJV92LDUsbBUYqT6kNA3aEgh3TyYkR24Sc",
  "key30": "3M814W4iMhdXuzjKBuayWfqmF1DhLWVrRhKGucJcDVVyULUmWpSgPCqRD8ucaJ8mynLWhLMBvKDDVDhbtFgmrcQ3",
  "key31": "FCJm6BAjUfszVJyCFoEY1Mc3hTVmcDQnV9ksXU9yETKNn3AZn9tqqa3A9hbQvMBHLQrJ9cNomUWXfePL1nKGcmB",
  "key32": "3nxvH2ZEr2ArpYppYBGX7oBmeyoR6CS5oCdsXM8zaqrQWdjUuWPHUA6BLyS1J4iTDtszg4SBajmLnYiLH5rcoTxB",
  "key33": "3KndZfvuDi84up33KhCc2SyoD9k6aiggSzs8VbTr8ziL4L3WhkBpn3tc61bSYf3cLeLPrrssKigLUQSFe5cwLL2K",
  "key34": "4RJYtPZAbMeJta7uBapjiFUvYLdX3TvspJnJGZnNM8P4rEcBtXaEiH93dsSqHTdi9DDaQhi5wztmHnTgrbA82ogX",
  "key35": "2ohwQLSsU3BXAkX52RjvJJQaiqMcMMJtyUuP4YAeoKiyLvCdmCD5E5j7ks7uJA6VwQvR1JbWTpHbYVTJmEKAUP8W",
  "key36": "DXa1x297Zc4aBv7Qyz7LxnA9qyReKmX3LmiDyuhd8TikNxd9vxeA5qFow8FensUohjnWMp3dTCvLgNN8Hsy6eco"
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
