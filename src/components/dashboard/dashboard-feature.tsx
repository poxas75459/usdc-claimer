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
    "4G98G8QoutffwMCYr4ogj3qhtsCsxvj1jBS6xouRWhMSzbp18mEjoFXXL8xfDXxZZiCJPRta4CHuV7AHBKLBqvB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QgqvBN6jVC4AxwR4ym3A1LhnEDmGfA4mTnAVPDTz8h4YUc5XJ3L5N9KhfXrFXVcpCBPQZwX58njRpdNodyh2hVj",
  "key1": "67TrcNkSTQbvQ5Kc9MbssevVN1AqSvBNhh5s9AA9LTHFAL7dtiJHR8scCrAMe7wP5mdo4h4NPbjDXqBaUiZkUgr8",
  "key2": "2QU9qr7yBosDyUhLNvCCA48PpRZrp8zdzT1569ckytv9QwCg9niVnhV7RRjqsXt32iLenquQTY1LyMCGsY9Mahka",
  "key3": "24aBYPpU613Qypt8JyRafEia4LNN57FokqZjwy3E74eCqCi6Unb775EPjSqT3mUp7Gbo7BsJRhormja2z6KcwJeb",
  "key4": "4eykJjD2xwdtpHRSsZxDXMGigCQZgm351mUkd1YYWRx2h6GPDMBuS2JWW1ecndVeMPAeFHeRvSUnp1Zz5tAtMEQj",
  "key5": "37M4UZnTL8n24rYDUNSy737MFyJeZWBX5GqTUFMq5eFEbfaGDeccFo5GT8tPiA8NuUTRi7QdtiLsazCnefqLQKj5",
  "key6": "61JAapxxZQAYutY16xtB8qmj77yKDbgHPA8w69gYfDhWuNZLtNEATx4qdf7TLZMWSdAez5VBsPgHyzKWVGKBKDer",
  "key7": "3AdjYH1V8J7jCAv7GqJocVxK23HoQ2ye27R2TzmeQWaeKdcMPVQ4u25vrmrU33oHi2UecVRNTpdbaBKS27RPCQEn",
  "key8": "a89qQNR5rgKrhmuXeKHwU1cCPH4Wnr6rqSKAvDAyKmeX4JDNQ6KdQbcdj8TGJPdiXch3ENgfQDCoTUaV6qikxMs",
  "key9": "3Sx2hs6YHVkiHY9FsQArJvxRqbG6NQ7sUJsdFG9vJG3z83jnntTkvYyQfqkw3FHUzFFMC3mUVFLLjK7FnpeGdRS9",
  "key10": "2FndDFmnTLVzfFvQQCxJWEfTcgwzQncDpEfEtBPHs37DuC2hqMByqmQvWheBFdB3QFTGxAyL1dsBNRQHnWVxapG8",
  "key11": "3EnoXaGHr1HD2RfLBb998HUfvXEgPGa5SvyiHkwDrq8B9C9fWdnpAoPXHSYtSxs7HNAAAQP6KetpLQ1XFVw4vDPa",
  "key12": "38wueRcc1XzCPNWQWdEELM9cL7PtGru571k57DeAPR6nrv6Hb2iDk2bbFueBzkgALSCtLQ1NiW1omx5n83e98HcF",
  "key13": "21kUxeFfd6vEZm9XMWweokQwzMTUqzbPVF766B4a2Kt271Umu8EqF1Y71JMT2cLue5g75fEsqFDFSxswuk5zf7aR",
  "key14": "4Fov4Cgc42cdMmZkbxRscpDuYm3pfeKsGojcz3yYdEpjQdaitPcNuEzP4tbvaxHVkbPCtjFii7P9xH6yrNojRcL7",
  "key15": "619f88pCnhQrgYgnLMKUY21pSaUEKVBejW8LHwo9TCNm5ywbH6EvBu9X3wQfw81q73UMEWXBa9FqyiKToEr7vzKr",
  "key16": "646mpv9m2GfHHkCdJiaj59j9eDNptKiGwiA4CkJJo2Di8xHU4WAcRNVfCrTM7aFKFUEfgi7vtmjcdD9WahM1SJ4s",
  "key17": "4LmjWqtRkKnHB6kL683Wbn1Ra5XXi6pnz4FQeFEDDCgxVeuYJcFzi4iAJvv6rqe6TYcYJ7tzLvVrPjzQNHdZFQcg",
  "key18": "4Tv9ERp3pXEz2csPQBn7YC6xCVSFaSFYthZpFzWsxKpdEbAvMfwzcZvTSTt6TLrb9R8KTq2yfiuQAr2GAx3W49Vn",
  "key19": "5xTDq5qRjeL6Jp2WmVwDvZDMEuHX9aqkVoEt2VWc25s7wmSMtbkMocSW7vKXZJ2K1NQpFb4sPAjvn5RapA5ZjHt1",
  "key20": "3Etk9oHJBUNcJ7B6HD6J1DmVogCQqDEA3JyePnPoXctpKYXmdQMoi9BkUvrtuvDajUXyRvjqTRv2ZY6PCBmxVMeV",
  "key21": "4kpneBRemn9XktPQUHyEvBDJJ242ucENwS5TXmbmxGCvhB5AxkqZmoSn1my1jpP2fDT7T857R1NDZm57QE78BV62",
  "key22": "61M2LUBVgBKErKv9sbiAi3CJa72nf2dYW8xfEnEJPfBSPaz2crKfQrf6z5TmMh1fMb2qPsSb3aKbDLAToWnxaiyv",
  "key23": "2ZWMQnfcb5kXuDU5YxskaUjZt3SvQXx2F7gLhbF8v4zLnyW1QUqR1CjkoMvaeLSuj5MM3v9G3epi77HVzA7KhAp4",
  "key24": "5QT4WbbWxwNzQ5ju5NptKip5Xu6otEDD5xYk3QjxVSLFTsg7JUc8seupcJVMmLP1J71wpkpPd1zggk6cCqpjE5Jr",
  "key25": "4zjJVEGKHKztWBm7GZrdTivhzXn6gM7zZn5fFMyW2UaVQtKzamvKdcDeCXxBMve5ygiLbz27tw6VeKHuirGhMiZP",
  "key26": "3UTi9GQz921AkG1WECKAMpUNgGLjmUKizrugTozbjoebV3eAkBMUwdjSup9gX3cvFv75DfTyWEiN8FcYdsFtft6w",
  "key27": "3KMpEsxik1dWJzQ17F1na3xTsMHW7GmfMjUt8uj6FrAt3FNeJq7KegDpQjH6PoEMa4mvSF6YCcN7a8DoTwXMiR7M",
  "key28": "5YYxjzyQZXawwHNNzA1nVLgdpWzVyKRCAsFyC93ucaYRUqDgvXdto8XHHjZe6KeWBKrrGqGwdqUvhmLHu2HRaQAF",
  "key29": "5eqLDEUbUgzfqDWAEXrEaQWaUhgK66KhFLtubBCDxQY5GndiJEK39ZupVgWkmt65acFUMptXszPu9xZyBwQnjKx1",
  "key30": "5pZQEgfGcmBD44wM8ekZT6m8HahEhj7eniQbhpCgdQ2HVFWRTvESRwXQAnquqj9LM1ybADSGotQQoCwPP1kLwioB",
  "key31": "hnBw9xnt2DBByAmhKHnLqsUu4BgpVABWseNk3msfPXXBYpKVv3xw3ZLdxu3kLuaBysTeqzfxiuzRnugDrGCfKdV",
  "key32": "j4vujLfzYi6d3LBiTADuCq9K2DVLB8txUri38x2g19Br1fhMzoScC24eKgr2rxs4BQz1fm4r8U37af7NEZ5wakq",
  "key33": "3CKfdBpUHdnykF3GjMSfBpTpn2pWRHXnFqrmD77SrTqDB96sFvnmVhNHWQ11nm8JyPJYvjLeqGTLQsH4YMYbFsG1",
  "key34": "35zU5NKep83Gu7yhnrdxFvyafEPDZzwZaP7oULuiZa4KSALkpL47FAPVThcGojacvk1UzT8JJb6qYrzJGnTUxGhx",
  "key35": "1isGepMinwe2hFEqLPYhSFXMGW5byQjxcP9jRwwCZmJz5DE3e2oevpfZVa3CaKZ76Umbd2xquDwg35tLSnWtd3s",
  "key36": "38CNKfmmnRzEuaWLR6At8KdXSDtv16Hk33WjcwjijAfjbBgTUbteJRYcTcrGHKCbRkrLLKXeSYJXsasit5ydiUpx",
  "key37": "453jFt8yuzcPWfwE53tAQCGY7zkhmtKwM8KnTQ6f4DbW25cpsyRHtig3JNJY5kbBDTFkbs3SZwHMKUZNoHzH2p4Z",
  "key38": "64g8RcUFjoY4YV6QEYF61Az4jM2zZPWgH2XXwPJr2EwC73AN1HP3zmbuxLRumEAL8ZvVe22qH8HG3i8FQMd3nSg4",
  "key39": "2rhZ594A5XYghWTb2jgLCRe4mTkPUap9aBc1zkYnuwd8b191nKbXmbmcE4y1vZ8jbd3CoaUWvkCwQSQgk9E4d9Yn",
  "key40": "5Ah3fL8jiwYEd7iU2j6zKuCY4i7bETJ2EMiMft8SLBv1jArBW53bUoqesmeAUoJfoF4qk27Z8wvGFVvzyYjx6cCY",
  "key41": "2ZvBmhQecvftz7yPukJfFW9yqk9hZ1JhRPhT69YMr2i66A2y3bpvWXvgh1PLiuKCcQ6Lh6QU5VEFq6qpQvyLePEa",
  "key42": "t5KzmaG9cLk1Pm4jGxZv1qgZbRUxNhF3j2Fsv3ZFKSomFXLrUmX1URURizx1r5f39y5WagsXSwZm39vsRhVPHB1",
  "key43": "3FbsXo4fH91VJ8CCyKTbMWE8FwzSQCFktTqnEiTKbFd19psvRVtpEJ9eFSCvk3GXCz5N9hVTDS9AMqcs3Nrr6xuJ",
  "key44": "3EFMCoUAScz9ZrENj1jZmfkfsUB2Xjx7aFNMmgqk2vHLsbddsLxa4usHCYSBwfX6LwM7L5pBHv6xGw3Kyhs2cw15",
  "key45": "4jpxae69jDu9hK1jXatjFiNbHmywuDCAhqcxFvbj3GVpQB1fUuqxgA2h7Fvd7qVpWTpfyvf7brsckPPeZZV4YPC1",
  "key46": "5guaert6Pp7Z1W34R8uiZ6ztYz3z4Qv4fqsuBQixnQVGsMuiw7AyCEs2dRNWGPzGxYzHDkVaqsBWp3s7SjB3UXLs"
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
