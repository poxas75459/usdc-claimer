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
    "3Fd2gfdgdm5ZPC5nFX3CX3Jqt9qSjcJgqFzjmHqTWc8n91LyW1HQopv8r2uyTNBp9ahSsDQBKyzmfy3dPSWGgpj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XvayKZ1rPdT8btPiSGbmZLLftxfCahJUFKbGJW3Z9eCRJmuZNmxtEKXc8YQD6XzuKDWUn9NsqaH8Up1x2MHfdmN",
  "key1": "2x9PcAGotJW37umdppzkkk5zZKpZqyL4ocgybLESVF85BGmb6fDaiqPA8DjoxoFFVrqGH4ob3bQ4oNnmjSXhWhwS",
  "key2": "4K4tz6umbACEhqkvnmZx1LQV6uveATwY4oKomwZrsMHcLA3LcgUwXtijtasuP7tCM9iAKpBSpT9oTdc3zuAv1EH9",
  "key3": "37y1JLx1LespQuisy9VQXu5Mue4ifyEiS2VE2wdCTzxYdvEJSuBBfowfBbmaMrv3kH5MQSgSRBdJJiUuLHVs9z7B",
  "key4": "r8SAsCn3SGaeYBHFWoeHZZTUTKc32WH3GGtPnwNYDY7rEeqoocsYCT7Jk8r4kZGVCBCc7D9JAVdJMSJ4zmUTAmX",
  "key5": "2nNw4fPMNpuSCDwM7tdXRbC7tDZG5Y1ktEgURfwRB3cz6CipqjtUerPc4D5YWYUewQpqCXusUKnZnhABg6zs5JL9",
  "key6": "2SP2hmqnAsMjmd1VNRfsh5qYzzht1dfbeoGoRteqEh1HbokECShL4AeZHz5EEyMCrCLdeSAF2QeqKopzMrLKYrBG",
  "key7": "xyLBFURvvgrkFSXVKMHeAnNYz2vmxPVNt8wm9SXexuKDFJbwV1bJrzYh4CasgjKscihsXVxUbbpzNvuxGLVCNsv",
  "key8": "4VwFEn6RZb75Pv37GHbNyLeZXKdoG1svz2RPc1xn41NhYbReajoG8nJanu8GSByqiQaJ7MXTcabJwTuGA8fqJduh",
  "key9": "fU9GsR7i3AMr8rY8A87KxJVmWgxbRLBRvun8hCX9Fu8PcyxG1MXtEX99uYqXAYfPchC8WMD5CNg2xkXdgJk7R3x",
  "key10": "3zb5LGC2y7WC1cFc78DJd41xdJBrCbzy6cSPdcmdrwVmMLGNv6ZF65GNQmNXYA83Gv82LJPnZHdTfPjhwAuymAze",
  "key11": "37ncoU91MLmdrLsHunjusTfJ4pBvvd6ZZy2ekbxJv8FauUoahHamHa2mk1L4Cc2n4D5CEkFWoKHUXSUMbnRSvNt7",
  "key12": "2Yw5XZPqL6ArRo7MXNLiXQJsk4mMobSgkM9RMeufdjVaoUmkTkFjLs8eUBbToS8gZKSdjrWRw55tZFBfvuHRrz2d",
  "key13": "5a29khCHv2BDamob7pGVJjtB3nCbzA56nmsSAjRCjLdYxS3LT8SA3dW42nm2QQdv7UyhuzXEtZsjsg2prraedAYQ",
  "key14": "2H1Y6DH2j3rhGH1s5pXVUCwj4w2DfSXofMhe3xt4EM3DjJNHq5pAgbjNczTQqWdjWGz8iFMSjVEchYShqqNYAqJZ",
  "key15": "4RPBb4keazQ73RWVhMZ4fbeRENcunuGRMpTza77aGmuB8XHRbjSZFcxMVTrNbmEbDrnVJgKjtZDkQEALwyLUUHEF",
  "key16": "53HhErLWRUZX4kuayYdjjR4LRGzAWg9nSoD1WPFfG5w5RwpTrtf3CX4FcZko5QxLYvxLciKmi6PrxVXkRetQpW9t",
  "key17": "2soUiBgFeJ55w39Zjv4Dmr1crJR8Pmg1V5KkiNCscGtxng822P9adKJavcWrTb52Sfx2SQCxt2X96yLCqGwYfZ2m",
  "key18": "4gWutfen3vDouYx7QwdiiKidBVZ9g1d921ixdq1MuwmGMe53homkC8rUNSi7fRUswTqT35AuRiSAkQQaPxseRB1T",
  "key19": "4CB1ptv7fYB9LZmfkDm8r46EwrMu4qsQpD8LfnpKnvCzLwLB1JBjU8KeKgw5ZYpFzcCPdn7xmbArqj8WFPhTgRGY",
  "key20": "3YBGTJJWVpYVMX4DBXGLFCaACWsgxLcDUWBAWwX79sAJtDLTBdKPQSCHVVt4hotQE2rBk2yiGnguU5coRLYwRpS2",
  "key21": "58sKjDyUQZnDPKmVsXebm4XEVqk8uT3hnoec5Y7qr8DFK6cq3w5rsJo3RD2ntZieYCwfmtBoaydJXMT2sybqNLGJ",
  "key22": "199Wz5UfjJj4VKixEcmW7Soc7BVcsYjzUhkvKya2vmdqe6HWfDHPqAxigAJtCygP92cTx1GibXPLLBt1TPzsGti",
  "key23": "3tn7FoLfTyHEtdRUgR3bgqTehBtrUGS8HcbvQCHyVJ1cxxra7vQGsZtgk33y3LN5QqgrWjwNvfsweXWBAeXzPHXF",
  "key24": "5H6HTt78nhjzNYuSkY7aNSras4K3eGPV16YwcfuVnm3mPhniEWWwCnDMdCG3yhsctXGw57ucSCD6Y7t18W1dywCR",
  "key25": "5xHDvYgx6Hcq73EfPBmKgaFA7mBJqkSBFJBvrhE9Vd6QqxW2xCBszdeypjNZZ6oCiUzVKLDky3qp4qR57zvDDW1F",
  "key26": "kRTpUskcNpnhSzrVa32iV4ea6pucjRX5QaxNRMkoyKG1L3GyEJ69kceHdPESW4TWQFtfAV5i3dJ8NADnvw5TPEh",
  "key27": "5qYK5qgFot9aPagGJveNphioWXMwuwuiievX3aamiZGEMevzjPwFbN796GXF9cXXDpJTneEgmoBRnDrBUQrZNu2h",
  "key28": "46LgJUMgENh7QxeRzjqfAmzYFmCsmELED75EdoMtEFCLPE8fWj58PtEMHBMmtU6tGn9Qi9PcPeSTnAQabB2kDAMM",
  "key29": "5NVRAjgrfEK9dhe6UdD4ut6d9QoJppMKZMWfP2ufZ2kcgyUiFVn15nNZeUhwQTjDVmkw9p6tbtb6dRZb9Rb3mZyc",
  "key30": "2rBM9S7YoUK4sx1aK7UCbG5Fc762EtvkeP4XFq4hBpJARCW6T9SGs2C2SzfCyvqgCJ1hchRUPQXTvcYTEHPRoQak"
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
