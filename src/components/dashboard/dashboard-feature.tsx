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
    "5R26ax1CarXBxnypJWuSfw6edPbXRt1CeSvqMfAG7fbTyPwGmb9ifC2vUu15xcSy3JNyKo3zwV4VjAgLV8c2jBMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u1i2e37x95hSisdqBLejwhntyQvjotByvDYaWVWp8Db44WBp4sSKHF6GuXwuArUgFhdcAGVmvffZBomxnyJ2FhU",
  "key1": "ATxyXi3zrT8WAWZq8EtTvRwDPuinZ6j8aDaHrNAN4CKbQD9LGcM2NzSNLGz7KCFHgisnEMAvt8Hnm83yd65qdcG",
  "key2": "4jcLxDW3qXCyc8igqmAmxgpDrvhi4ZG6W486ksBrpzJwtA5pdB8DhRfCbCWHna9KhUpPevvSk5VvRyaf65rJYamG",
  "key3": "3uyfUKw3aYgGTTr7PVSuYoLGSNgG4DRwjrvSTWqewKetjFpZCzch9JrHuStUU9obDRBQsz12WouvSoMQanefdjUr",
  "key4": "4gHvjrMiiwy3bWE7u3KdvYcyMaJjyvfF3fJnLHmc4CcyGgyBbWPNBdNRCBGBTaXFRbZbCxTga71iG5ABYstEsAYe",
  "key5": "4Yrb6KEpUnoRKDpXQbjLkoFt3XB1N6Vpps3WLsxNG6URa2J9JBKV6Ui8Lydv7WHpkMoMoPjEzMxVTrV5EX1sNvSS",
  "key6": "GCoQz2WoDiR92ur5yKmGVZbbpzh9v7nF6LtjAikd73YKFRnsTp4HupNcrSPstAwcuKvH3XdT9SFnfAERfc3KZpc",
  "key7": "xhZw4X2DXW7f84fjGots5VKvPS1KAMuAAPCvewhTWCzCY5Ec6NJhMpN3wr43iLo7jtqokHjnGz6R3bLbC6HmfyL",
  "key8": "zMXFB6oWxj4rUW2bELkBDAUyHoge6SNRPFVGxyK51CLe8b6x3b477BP3yWgzbbFwHKeHMynzKH71WQ6fJGEe91X",
  "key9": "5K5mNbcwmNh17Hw2oAuEqevtnwSQnbJYuXM3qkex4s7XrSph241WLMrXdNC1k29XiVX46Uq3Ssy7UuJsoVYs7Sxw",
  "key10": "2mPAYfCK9kiUBBCqDvieTYJFYXVaSUyu1CmwVkYvzik4nwtb8woezTs5gcxJrZ1DEuwEXf4bQwrM5GENPAhPeZiE",
  "key11": "3L4iy6dTvvATQigSxiKDF7cnud6hLAEWswKfTjqndod8XddQXp7Ye5wfuoR96ktXE1JHk4WEU8sbf6P1Wxd8tCwk",
  "key12": "4rJSRUioEhT4SoPqzvg739gyRwYBny3ogGP93KQCsCKQGM8DBWQztNBujHd9sSwbuVCsN4umeCzrZKrLGGa7BgaW",
  "key13": "3eRja53LfQbv9NYQWrruVJE6Ran5PcLsbmt1yq5iCdx1zfPDzLjd8Txq348mTGskaWeM8T4Cxk8UPgKdUCzsfWaU",
  "key14": "4z1ouFa2hf2Vnrp5BxESTyJcziReZDy6QFScDsuvn2W717RBXcS6ZHPcczZPJ7GH7CF1fhBbC1776UME11cKm1Bd",
  "key15": "5CktuZ7fcLRGUbGUQZV1BA9xV8kqJgBN9yqUH6UfB9SMAdzGkM2xVFto2EzGUv2RioeRn5TpPXoRPVmDNy1YDLzw",
  "key16": "2fsQmpe2bDg5Lq2jANuYvKY8m8r42doDgEEtgfJ2J48FEfuxsozD4WMLqW4PNMeL3VkjNzKpRa3iQK5tFnzpjLJr",
  "key17": "49YRRGCRBYuJWRbXxcZaujKWTnKcCbuYuKWnjunZjaJwZp2P2RHQaLXg55viGDEpVsU8zxcY7BDBya9sq2pHw6dn",
  "key18": "5VWAfJ6G8tKd8PDGeni86Vo1EimaszTzTpXLK68TmXzMUtPgqGfhM3Bhsfvs1pHUPyiBCa3Q462GVPFgMYtRP7aA",
  "key19": "2Lh2cE4CfdJmEG3HyaQnxL1XGuhvv7Y9HfSdeUS463qGQ6WBXNoFYQDojrFbcmyCGZn7HeYm5f5k7FwbGtSTS6QQ",
  "key20": "uqu2kvHgsvFqknBPpU54fV99Yw3eHoAGh53tcRu7Xs2FPn2AsG7wGjp9TN2HWsCSrta7JyFRBvg1utwbh2AhoDr",
  "key21": "3d33RB4zipEXxZV4PWGVKtpHGtY1ExuMD2GdHyYTfCiNSHBKeeiPsqBz6aDpZTEGSK92Hz9cnePoYdRH47gb6em7",
  "key22": "5fj39oiTtGGUNKs2pSA9UdExKsxTyUHRLiNXR5fktL5Lzdse4E2R3hDxgN1MxDXSYmiNsg1QVA6xrkkmvttn3Ct",
  "key23": "3QWERtYenhzzVhGj73Sp2ULeD7uEiaBYoVvNsrUJfcHPMQkWP8SMSC8nmpCrKwuzfhaa6EbkGUUdcpAqxBKcqHw",
  "key24": "2W3Nx6J7P4ZcrVv9HfFN2EnBSWAivZn6Kqge9xggsJ3fBpVR6UumwgFjjAVvhy9zM7capAho4rMdCodyRgpW4dhv",
  "key25": "24GhuFgVBTtwrW6MUcCT2PvrqxkqvWUGn3TfmpUdirvwtq4tLywaHcZYim7NgbsFPryEwRA2BYmAnd8WS6XkUgwd",
  "key26": "37FBV1eiqgpsyDWmTdRRAhCQbiaYjPxgzWsfWy35GrLTLGggkxXXMx9yGBHa48ExS2QYzqWwo6xeAAk1z67Xyu1d",
  "key27": "4ogy6SnfXxZ8VQBVQNX2GmAyZV8F7329oK16zbxgSPNgr3x5VrVZGcDEfferciuAT92DYy1MUgBDaqgCrYArJSk4",
  "key28": "4cubvoZLj9qrVwGfwYExov2JqT9SibvpYp8n7cgMfFZY9n7BmtPc7G15bVwJQfo3DoPPX6cpn4pMHCmqBybgoNx5",
  "key29": "5Y89PjfEq6HG66phMsEByy47FgktQGaoyJ6bHKrfXXMumCMtv1aqfwtiNcP94cti2CQJDqS35twUiz7k6LZysG1Z",
  "key30": "37y5iL43EHT7n9p12whR8szY7Fd1sR9xoZ1XDeW68vJPN7ThfHor7UVpqJS2ULvngaBM62zZywfFFZCbbgBcYpti",
  "key31": "2GkrCXVNb6ddKPgMJwaxXKnWyFeAX5XKpHeW9qv7Q1XkN84En7RPUmUno63qrCxLxcqfbAw1RAwzq6iSDqkT8Met",
  "key32": "4MYW7HajXyrHwAn4oJ6fRPNo6Qcf4nh1NAqxwRQLCx6ucnh4Asfor6iW9puRRGyhbZ4ggeVM2zFRBasCqPG56xtz",
  "key33": "4MZWfuRZGpDDDwE7tmH8WbtdP2rTb1rsxmCYtnQAHbuP49Fur7Nttsf2wYFvR5sYjaEfV3tXT44zTkkPevWwPnSU",
  "key34": "sRJSpSoczhGSqQRjcwUHJcD6P655rbEsubtGifRgdpRQdFKbzKNq1VryJgjo811d1Nvf4ypFus1weHqpsphdS8d",
  "key35": "55hoXjJd8zt1rdRXVCWmrZ2h9Y2XhyztC81J1YwUkbrtSK1o81eLs3sjvSLBJycjEWgzDD2shuyvUCK22T2pmDnf",
  "key36": "zLmL32JC77L2kSF4h68bKfUGEXFTJSB34m5TpHVjKm85QTYNBAc1fvdHk7cToJrjbEEV2KEQZsyHmYzyJ9UCx5C",
  "key37": "qPm7optmDFAEBt6bpJ6LhvZNEDB9UwcbkA8uw85drKYYqrg4gmTpArJHsMdRGMB8E2dyW8W4KiXs5k1tPZJKtWx",
  "key38": "3xDS7BzkbRsm5cvAa7JuevPS9R5sqYBftdWf7MvZ7XShGNukdehbUDzRiT7EEKd2J5Kr5MrYB9tRreY2x9gi2KxW",
  "key39": "34oQEkTP6pwvmz6i9tPTyGv6hv453nGnoks2ETwFtDRvDY31zkrWtmiQD8C2JjtbziuepTcUx5Q5ay5MSbsLAFCV",
  "key40": "Em3SGPE9bb69fugnQaHaEL7xYLbYgqBAFMQkT8erdAJtGZdPDK79oRzCW756FujYZ2dJzBjrAGdRuE88hvYfrmu",
  "key41": "92UDnRj1eQ2rEgm2c5CGiYYc96qU87xa6fSFXJsqFstYRS5w9FFzZJG6dV5bcgKQHHqogn1znmJnfv2px7pcrSv",
  "key42": "UB3dsQKELQnyvEfciAj4BC5M2ZXtEJHqpAG3ZZM71Z4gVdsxyL7zDsSXjTp6cpFw6PDaGYqYj3dfHgtAc39s8dw",
  "key43": "3nW4ScZFoepZW5DdaaytCFk1M9dn6o4fJV7GHrZ8uS6tqqCvu5YSXZb3KRXqyvDhyiRaVSry932YxC5ELJrVkpd7",
  "key44": "2KgoV1VMPL2yfzVp87bHCB2CszLLgMYoJWstsijDZtLJjVxGjEV1K6MtWPiTBeYDLffXT1saD1c3EzKnfANd3CW3",
  "key45": "5gDdqWWUd8PELLVXMuAYmjswDEVyofqAUe971p5b9vZrkxnBVBrwPNHoDLPYPF1n42eKMb33aYiZQ73ADy4BqUNu",
  "key46": "2kkr8soZhYRWo4kWFyoXKJSpVnQWeFon2YFdKv4HSHffVspgLFLc3CGJCwRdyZ6d5dFoLp6cPYP7TdjtayyNYoMW"
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
