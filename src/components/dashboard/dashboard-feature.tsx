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
    "4abBUvknyxE2Nw2VZkd42HEWgxC6bvAwnTADtSciQ7ZSq2H51VpzqtDbu6BCtCWLqmbbLgG2fMCPaEHN6XmddXPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RLJMyTgz9RMz68NXPgSUTQD4TFhx1D12EKkWwswpiSruEhgkAJqGMmSGZqAiYmCA1xacEnDz3RGs3tLgTyhPWxm",
  "key1": "2AjFiSFXBgqFaEPcfs2AHfjVptpaicDpr88rQDkk5YCv4nrnjFEYQ6jYWSdYR8XQyTpZewmRBtaQnUV6BV4y9LwK",
  "key2": "436Urifoig5kQUUL1NUQyQuGvHpv1EavUEZZ7UBqMzGSt26AFpLtYs9A7BwwLRbVCQ16xaUotuoiErjcnPBRgiaY",
  "key3": "25sSgwdNHf1LqY2pBrH4pWWE4F2EbN8A8vbHeNngwJom9h6rBJhweAMsK8gJuKyFPYo9Kx2MdnYQr73U6LrxaE5b",
  "key4": "4tihw7k7LrEKDTjZZvEGQREqksxJEzvj8ZBqCtvdKMue9GbviZLsnddUhmtpjG9LyX8F4w8wSDuuGzqLULLhinBu",
  "key5": "2Y59VspypgW8c7uyDtV5qhiu7b4eqNineXMGSZCKZfHAhtQF6FaCCd5tg6JmSQotnU1FKAUs2RgxefowQjsjEfLY",
  "key6": "63yk1p9aV1AMteRyEqco5xGnMZQZH2dJf91wwmN7t7D2jrL21wRpQFgt7qkwvR8DPaoqMZT7GArrhXhoSUCtGUyw",
  "key7": "37dVKHGzDZqfa9E7LXHnYtRFUzDnyaHdWLkcFUrpC9vRpLUb3eFDvDTXsM9RcZbTnCLxezwespw98vXx71WSwykC",
  "key8": "2QscgwoDLH1u9KPfTfqF2jzrTMKEQz5E2RY4TUgTE6AeysmMhnqb5A7kyRY5m72tDiLS6s2uiNwZjFjJRjfAuevS",
  "key9": "5WR576dgAFztX3tYtuqBL2wXMBQi8YKxzQmnioNnpK4Q2mphAHPGkA4pusWVR5nThRJvNwe9wCpFQywrvrXot9Nn",
  "key10": "32UEeAUhV2rNZ3DxuZ6EpJPVkn6RWuduppCFd2ABP1z7CTJA6eV1mH3Z7VJphcpHxwFZY3XciG2aWR3UW7xKJBS3",
  "key11": "21mi9oy9ZjaEjkY11Acwyq7ki9GuThBWv7SYs6fNvTN8hkDf9aXA8KVFTGsDwmGWY12C5NvRDDPJ8k6NDQ5zhC3e",
  "key12": "47jWNipdupADJ6drhQJZED8LAQWwdB4S4inLZH1QhfswQgFHLBR5db4U69jVejSmuhgTU7tjjtUpCqyzbg7gBpq3",
  "key13": "3N6fgyuzqSe6XLfUyx8ampv5cPCPYfkFr1wC7id9CgBRhU3zu4xiGYzAKA7qajLN722foBzjcT1dT4Jov4A2ZkNy",
  "key14": "3mADjtxxCDqmqEfU4YhJZxmmE64jHnPCddCTMDfNFuuXtqELvreeV6NvzW9KVeWqQ7P5kZu5ebGLDaWy2wL1G6iq",
  "key15": "4QZ3JpBvyEcotDr8iPvkTq2cnTxK5zGY3aCeBNLY7tnqpzTthsV2Uqvd3B3GbSpW7ikG2gzxYEJADtX2XuLTFo8c",
  "key16": "5RMra63YHA3GrYXVkKdDxuqQFxT3ki7qLweBvSFPR5StBYz5YbcpuH7aCDkPqMDU52DcPBsXpwrCVurX9pKkQvKX",
  "key17": "3SuKrkB21etYZ4jybbazwJhG9pKfniWGYFiPMru1DFLcgm99pTRZ8j9kPPzgmNanRqJX3JdBX9r9SENJwnj4UhAt",
  "key18": "4rbvnsDeFmfx4PfLEeLVaUkLyrPXSMPgpuGd4di4yq9vX3GV64aUBFVXLcJvgaFUmigeQqjaw7zMwR7Hu3sCMaes",
  "key19": "2HjMzDn5ghyvvLxKDjBh5UnzxuRRcqDgg7mgtv2pxFSvir3WzDvMBP6hniah4fcA4qd8pXKPhyWND5duXgNbjgiU",
  "key20": "ruHCaCFqZB9nyWNNrDe39pNYA6Zff3CCALa4ADUeVwenp2uoV3Tdh8yqeU16e1fyxYsuitC6srKCYNMDuPYYgys",
  "key21": "3XBFRqVtfJQUCiWDQd5XmBjdNyW6edayJsySu3Z9pRns888ib9CVVwdodKnUSoemzQxpdMa24gN4k4SnTMKURnuG",
  "key22": "4qtrTuwh52fVojqC2szpu5VDDdsk2SNjYJGSYRscLqEB7xyj1YmSPRsVFRHj6S78jjUeUDqSLF1YAmRtKhxhVvc2",
  "key23": "9U6iwNzGoGJZiLw1NoWKzpjUmZBYfCZ9DsTF7JqfcySNymaMXBw3KUVAR2XEnzp8TDq3bEdVUDUCztFhmgc8KC9",
  "key24": "yamdqJbXsawnnovoLyTzs4HCa86UmrdvC2YRZivjZbqTcpiWkEsGf3pJeDtRY2YrFB3JcvNgFjU5F6c5Sv8UaQj",
  "key25": "3FnF8Mi6S59d2Lz3giukRLto8HvTKn1iUMJUSPAQT9aUwidQLkNyxAmsqsEqxBcncfU6t57HbJNWgDps8wbyzmRP",
  "key26": "z9BoymtZusJ9qKZW9JgRS83QxvkvwgxkeY441yZUCjPoCnYLnEVHF19GfPHi62XydeA83h46uujKzLDQSHtbqSG",
  "key27": "5A2Kagd4VDN5a4vgWmfwFatukr6msSfZyNTcz4venBoPCouqfJhna8L7umaNKitcnttZeLFN15dXJvwjRZF57Ff6",
  "key28": "34FUCpN688g9Mmir2RQTrNjaxMFqwrd1fSC28xNRx9Cay1Vmm88HsntCyPgMxk8AmJ79CMYVeqquKjQkXokavpkG",
  "key29": "21hRX1G5pDskeymgD1ooumHXFnVURqMBC8oq3M91zMtUXbWveDePGrHerG2pXeT4cyp3bb3JnkzEJFj1ff9YnXPZ",
  "key30": "3ERoFMxAGThyCSCFDet9eZPmkWPZCsTmxRyJXWLiRqHnJaDGUBvzyTSe98iB5mFhKbvQeBcs5c3gtWsNPKYHUBUU",
  "key31": "2c5yU6bRrpX5eJWzeCUME6XZvtT7Dt4Ps2yHZVExHeNanwodYQ2uAhMYbix9SxEZ2f9ftumG4hQ6w1S5U84pdLFK",
  "key32": "2V4RVfHLrhhctfxYM6mi2pGHmpAxp43m4PKPj6i9CXx8rftLT7U1mBMvZnJbw4MdBxDWAX3g5EPxFbMim9nVHwMF",
  "key33": "5U8TmgFt1txD492Jx9mM97fWkFeZpvriWdjzvF3ewG3aCEhziH3T5k7UbboDdt1wGWwgLgJ5zMWyyHpMtz1k7xtP",
  "key34": "qr6cTD9zcJR1iFU9HDmSVERhP5EPngCFuDkPHffv8rejucjzgkezZbq6ak3Cysdgmr9L8rFPRBDPsL8e65AoBWm",
  "key35": "Sy8W6tLdNMmjn9PVTkBTqxFeHMcwLJ3Bu7uXDmurCpdULM24zbKGweMBkNEay7EoecYAhK3nnN2NQ3m7iSjMd3c",
  "key36": "26FpijpZJdG54MDAADHZo9vXt7qTSDwNZtccrX5tB3vh1nQ7TVFZbkgzWxF81J3ENNosYQashnLRtcE43Y4MUGRD",
  "key37": "5KHqE2hS8BhxncTxvjrFKKQc8Nya5SJYfKH3oJsW4WXUZW4P7bVkKhXpgJNz9RgoT1qphkCTUijBkuuciwMZeZPo",
  "key38": "uQy81KrGcaRAoSRqhwsoESQ3mGPyputJQYTwW9Cw3VdDYHFr5jMUXinyym4hEBypZYWDfzWQfgQBnQYxkcjsSgg",
  "key39": "nfggmUFMGaRncx5jV47G3FdQ2ugW8JiqdKPf4Fk9Tsxwud77HgPL4GZ9Z5hrmKLLKe3H1PxCxT3751BbuQmPKuX",
  "key40": "36KFtbcFEWcFuR95u3e3bBBKSkj5WGKDn3QsX2Ag7tWaQ8tS4dAcpZ3vuqM26D7YzUg31F7YKMynS7vMUoFZKGk5",
  "key41": "Lb37HeFwz5omRZ1Q7yrdM1WdNp3Ue34p6TnrTa2H4CGoahFwGD4tYpo1aA7abw8doxNbwwMfZksZXtvS7MkLDn3",
  "key42": "253wU4gfiuzFxwnGJJz6JvnNeXByA6neL6eH3Sg95vjXFsW7yVwJVYvncWV4ho1knFFJdCzE82in7NBxQzUJDjvg",
  "key43": "5Kcnsex1uCN4fAr3ypUsLqVkvaxw2GbE28WMKZMk7q8ZnSG1svRAhtebK1YaaL3D3DUPNX426bRaAietCoCxEZbW",
  "key44": "5uqXvmuPmxmerLgUEe8CJA6kRDmNJPH8qLRSNUSUPSRQEyxpLJRqoquSAwzGERqHprW7Y68S6fb3PtVVvuiiHYG9",
  "key45": "3M3PZWgWNYbSMW4iyKHST3BuBhNaQtvpMfGiLLTx6pVPS6Z5m8L7nQpVmTKCH2Niaa3Y7nh5vfaKDgoCZWcL4pek",
  "key46": "3xAvQ1hkQwxsXDwpH3DSorv3z7J3zJE4d7CxHLXHoDogK9NkjGKS7UKd2eGkNfVbhPhpRvbcni8my1fyyjAFYDUr",
  "key47": "4eATSaUmFTWqeoiQdNFGKwRWxBiuoAUwLFePs73YtEBHMSj71atHDtj41MuyBn435NNBerYA6wJj7LTy14Y52SWq"
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
