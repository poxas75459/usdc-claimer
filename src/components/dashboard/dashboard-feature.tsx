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
    "4ujGRaZ3x1vvXnffao9EvPRdobjiuC2T5sTXsyiTiBPv4oQJYserPKQoJMjaUCrW6uhZnSYpCwGPyT1TBfz5s4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4csdM6JGmfe1up5x3ed2opfFdq24YFzYmdWFMQo4dPx1g5QFzMPMjm9jxnpF5zr3UATUG9szo4YQsxygQ5RXYds6",
  "key1": "2tjN2vGtCtXEaV6jerTV8FyVWxvi2nQXkxFCHAmJW9mhxz4r6uCnTJX1pJfTN2i6wRZgWpFz1a3SanDhFcQCTaU6",
  "key2": "5pWDF1xu999L4WHCdgxMyW9bvPBtfnaHobZTX5ntyiPZRUowFBWUydAVD7R498mKvq9UJGVJCXpCvNoZrwY7TbGc",
  "key3": "Pzmyo79PoouFmBzqA6RfcucBUGpQXoJYhuYzwSMjSG1DBcvitsbD81NJJn1bZLkVd9x23YFFDMCsDtcWyxvrdgK",
  "key4": "4SJYwLYDYLryeyWFazTjRZMpHJHVNUeTAnLyNWvt6SQnPfxcsvNC9AZSfrEMPgMFYAoEafKabLXoSMbxPCQkgG2M",
  "key5": "KNEfZYeViLy78VR4hs2rSiRAinEmg6auMUxzBntUDizEuDFry9ph1NtWBEYK4RbyBb7Eyy95f7EFK7wZbaqjbmM",
  "key6": "3nTVJN4sege43kGH5VmQiAGbg5Uaqv7ccBKYjZos7FuvSAwfgViSB5ZpRd53E7GE4EMYA972BvB1tBrfPveacLvX",
  "key7": "5C15vGtnppXYmwsnQksYpdffYAdVryCubajuqr7Gt2XzyVc1sm76WBX8ewgMmnCXfMFNC8hHPgfLP9dNmM9Dptez",
  "key8": "224A6fJXTytMgmJPXfdpAnN2r1gXChV8mhHLjj926Ntx2M2DBuDFqmpLUHyPA2Mo757mXyRfCc7MKxXugNzjWWBB",
  "key9": "3RYHHTwUrucDGcCKrsZ3uF8wH4LiQamp3n3g9BpwzHZkPEqEPyNGN6eitkLZHgjqbZkv5MUHgCP51cGTxZCMzx6d",
  "key10": "2q4eZ8udtxq4D98127oMWYs3mGQkycQXbAwzs4rM3eiXN1rpwuw7RGEieK97aUqHmuXkx89W4ki6z6JveSwX1B4s",
  "key11": "555dsvgpKgWijefcuRbyWpx7M8dwArgNRLor5kYK3G9tcLSHnKwFRN3cRSJJUtGTEyUc5hwgWKTZYpw2TmJHm7Vj",
  "key12": "5qKoKEcXAFxvcLwPHXVYkdmGjqJixwJzo7uBD3GMEc3rJBxnAJNgsdWBwPz8cViTMXioWqRvCicC8h3N9fTLyQGk",
  "key13": "VkpL4Q2eJSfk3Hsf34UAJ64GVdN2hYMDi199f4igdv4Pnd5Sv3jFXyHgcTDZvWDJwGyAy8VLKShUrEgXwZkAnv7",
  "key14": "2nK2ZGZiRpDAvnjdHvFUdmZERweGb2fh83B5QGVRPMiaJDTc1ucdPvdzvtqpGVuyJH8gBLBABtjL1TwRLzVGu6pG",
  "key15": "4Bn3pWH86HE28Lr44Bbu9Rvho2JcUXsZ6gyUUVqC7NDcSyNCH4qiQ1RVncnjeHaYSn1G1ag2uz1DPUVeCtAJMt5x",
  "key16": "5JmqWQaoEMpQx4JWwZAtJRCn7eCW9jX9bi8tTphkTdjgH1CMy6LGv67Ucci6gLuugVWHivcUXWEvWDYBU3sLMD1x",
  "key17": "2oFd8cpALoVkqHNfwXvqyCsgDAVhgNCjK9J2QeEkdZjTTt7iYZB5DTvXirCA9AjdeNUqMf3LJ7EaNsm2HRNAfwMz",
  "key18": "ayhzf9t9T8Km43FfX1HTUPvUJWSbCPZxXmzmGyxdFcnZbL4bXUyU1gzF4YCXeEw9VS2JDB1UM9StS3Z7WWLzqKj",
  "key19": "4FgEFvU4PT4xyN2kGiorVs1AnUbp5hwd8atJ64NQp49RLMyyh1UWXR6T8pB64gFSmBpB7A4Sjjn8YN963s36xArH",
  "key20": "5sbrGjgMTADWeqNgAWvcFMGcLQ576bqJVJvuabCPToMB5nswLFTzTRTRd6fLsGHYHyZqcP92fsHcPZczpZr7tkLF",
  "key21": "aSRMmcBftLA2ucSAnKTWyXg4tPJzJPt67St55Kggz18WDNpkRor29HB6cGNsz4GXethCpzcCQL6ZR8VYA8eUcdj",
  "key22": "5RQSboe9pHMKfzL3sMkT9nT8Nq5mcbMmxdyWPDBs1tDTPFkCZREvK3x1T2uhMibjb52vtSgxToyfT4re2z1hkqVf",
  "key23": "dC2fg19KJmxwEpS9kHxFHKvbW28XUaf8MpWBZn6f87RogxAqjtUHQwMFvb1BPpqmzEpnUHVNeRrtCphsCCAFGWz",
  "key24": "3BuMGYaEM3Tv5RT5b7zTxFSH2AVVeFJNAK5QCRHezaqAonQHBUFs7PqfxWtY8zA9EifJwPgNRo1z5AMmakKkfaKs",
  "key25": "552DPB4G5iwED5TpTKJHYMMTHfrNypcpAS27LV2EBqnf2awHePtY6D8UGUaJL7ktMsZDAMa9dQschnnK5uQe8ASj",
  "key26": "24iYLM1UXv4euAHspwjKkYM3XmsovaxresH76CsaYfcQM6ykKqRns53XAsPXmJ353PVXgzyAnuuAJzvcjNSYRYcn",
  "key27": "5YiJkywEoXN5skFqE94R963E7Dx6BySAXEdgt4zaiH43gLVvAoYHMQyJBRx2BQxAY28kP487YUjeSuxD4x9Puo2D",
  "key28": "pxuAtWxnY3Ee98W25uUEeVraLdgxRThKqfq57pvCCTxdLBmPjJ9kknc9dQPy3BUvTEzYzWLaTSbJXrunQXCWzLq",
  "key29": "5D8PmKYytoURbJocMrJXfBkte2ygr2rFKDCHudXJSwh9S3Z3mS2u4Qf8XnVaTP2PNFzi9NTvY2RUWmY9jAXDWgxR",
  "key30": "4XL5y8mNYPvwPVUCCmc9HrkA4m6cBQiTAnKg5rcuaCPghzuHR6oyJwXtNCJEAjBtD2dQADNERrnGfoRkjyXwPjpT",
  "key31": "4cdxaNZ1T6kDjaVsg8LuDDL8EbRM7qoAKfSPbCscnceHaMvmiUBMPcpTRiQViJqR81yM8PkGMtXeZV1W3Dpp6b1D",
  "key32": "5rCQrbYZ8r1QZGHCuwaPmMErPZW9Samqm4u4LaTHoVXq6eJ9arBoGsfVaCYCL6tdE5TefD3jiePYXKhxN7cPF9Fo",
  "key33": "2fuwSbEHF6oBsDBJc4A8DTnUpBjBmK4bFexcAPPoKkKB1RGqs54Sb76vBVkUtv3X2NkRC2WHfzGCRUdwjK2Z9Sxt"
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
