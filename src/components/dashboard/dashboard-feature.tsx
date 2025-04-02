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
    "49w4N1Mgau3MYLJLMgdeMkVc6fgBbdyXRJpaFkFKa9HxeHwxMfNfmywPtJBZ4fvtW3Bus7U9JvM4cjc2n3HCaC5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZGrHzjTBWpnDK6D1cgbZEZWsKZ7kGd529UDGVEeDdHxQFuoougmoKbRBZU3LyP6Lsiy1DKtp5KjkdnQugkJcLD",
  "key1": "4p71B3C3LTsJxgmCdrpm5Y2u7EG7K3uZKm4BgyNt1JBAAGhtYicpbSQSfheByrWHWjEfgC6XdXr7SAwYmNrmGVYU",
  "key2": "GSp7tfL9eTWRXuwBsQTzZYyeTSKYhUL5fR6RpAf4SNzpXrjCyZ1GYygf2p6qk49CAJTB1baFUf4NXqCuuA5VtCK",
  "key3": "4w2YKLTxuH8Qt3ojcPqLTVGtMFYYkPvAbVYKAbz3Gvpdsr7pHuNJ1foxocmk12dtbxLN2DFxwFi2LJYuStpc6YRz",
  "key4": "6BAFSY26fWhgJC9yvHd1Q2RwABYFguEQTbHF2r2jaFCxoCKJ2v8SFYNTe8JURC9ymnu52APn98YYWjTtNYANqRC",
  "key5": "ydNGaiMSj7Njb4n6fwcUdBDa4dWfxEFt4L9kDHeyxemu3BrA8cEUfxAyuZGFv86HiJHsN3qnjAQMPsdizJcShJU",
  "key6": "2BZKB79paT12QnMpBCbpzsFA8a8atDd5mEPkMtm3hwsChT2DBnnxgeApVxCepMWTAHbuvUPnMCK2wwrzuyQWdX5S",
  "key7": "2NWjowN4zhfPAZh31Z9rGDiSWTMU3Zd1geNpkrEPyQ73osauCX8cU6EBuTDizc2jtt7JwQWEM6BHJ11qDGAYKARe",
  "key8": "5rG4QgQReiQoQH98eycxNPTQ8vbiBpPytzm2dg1CUX6aaYmCod56zMCzSt19YbPvpvDYCf37n1EaBxfSTh5P85d4",
  "key9": "MCnRjgYUGAgU9Uzk7a7JaWRzUPZLzpBqQJ5x27ytCi5YZekEqBWk2xSfcT7Amm8eXw6cRsFyZJnhcwiWRuF7PbD",
  "key10": "tisaoVgcEEKc2fpqUb2XQ57CFg2ZqpHCio147urA7XLx1NLxQ2Y13uLbQ2JUDUKobWfMUWhdV3m1F6o9YFNRuoJ",
  "key11": "4XQgDW4SsJZ3H4TrTccDkUSp8pGLD6bSEF76fdKusYHDR9AXpQ6FUG27Ko2697i5VVdHnPjThjtEtbkZh26kReYz",
  "key12": "2zdoCX2gJ95KFHmRsBfkwQDW99EgF6oXpK8H3ALf5Xx26Qzuavreo11G4A7Bw23CYq8dhA3suvZhTapre7SxuQpK",
  "key13": "3VZKPRfY9LzYjfRPxChRRAQV4yYB2TKrzLAJtZFaKnrYpNnZjSroqYjMbVnaKECWs3d3N8C73472rHNT9vRJmr3a",
  "key14": "4o4vkzwNSp2ACgXpAtaWbQd6dNxiWXS7Gw5vHoStiDjtwrsDaDh9cqwwFvBudadUqGuY8cixT8WXcniDNCMCJRPK",
  "key15": "2RSrWTRSFd6zsjbgnSouSmzaKEvacEKHj5Lsu22UEKMFDdV4fvgksC6odzncdPkMJYgCDXoH8UHGVZbGfLHvWuaT",
  "key16": "58QsVR2gx2ivGPMx2ifrkukVb5buwrK8uxzaxC4myLBAhDyPJWaEpjdnext249U3YXWY4zhUSvRVHnDPQb79EGfM",
  "key17": "2QqxYYnK5hkboT6S9VBjuP2Ns8TmTz1jCVFyxkZUvjiUUv8deT6k33wU3eJrVjCJ3ZRKcrpHPWUPaBzqYU8DzRDx",
  "key18": "ZFGX6sE5zbJoiF2AiYrw4A3Qu6546Zw3EkhpWncpNXpuNw5xE3J5ncPqZm3C2QjPjPNfcBfZ2JWzN8QS6jvhrUq",
  "key19": "635SuwyQLyKnc749c6oudczzniuiKpPamxVbQV4jHLrvxFseU4zxnvb3vH1wYUtow5kmoBuQmDSHgP9GSWKwaJBm",
  "key20": "349Kzvr8DMFs3hHtiVjgkhH5GeQBvnyStsdNjmeTV5nFjrjMjuqzz2RDJ2YHAXNLRnYq8UUXMmUVnNKZTh3Yhr1K",
  "key21": "5qpR9KNyZcuN2kh3VaLeNBjnvyBJkB4x7SLEAv3fDFiiiXFad8JV7vZwGzar6pMDAr1t5HwKSUX2Z8ERrSziBng4",
  "key22": "3BRHrT6H1E7wFX9GrXSm46nkNQrk8SDVFPccmG9bxuqf6w4AsK9XYGHfSyT5bJcsvLmSrpXndMDsymHoaHozpecL",
  "key23": "5gr6YgWcsL8AsmdJ2SJYtM3griVMpasxVcMnpRoUdBmKyow736BwhfxX9SyCR7ixWK218gHhxKfmxvX5HhB7cyUp",
  "key24": "4CEVU1wwg3PLeEgD9XfQtVsfBd6cJsBZsazmGTSHtGUSka9UHL5nZ49x9kTS6JSQC82iJ4nMNDN6Gyyy4WQ4zFk5",
  "key25": "59TVp7t29Zzwf1oGKNm9knjJm116PDJvUGJX7s5afQaumquSZYFW3RYgiFBSMKdVuwLPcjbBaJrgqThtfu9eWkrp",
  "key26": "2bGeeEAQjyYgBUCvsmGz8wpVBZ2LYcTMoo6xGzLnKNMUGoNBonMCQ69Z6e3yqsirr2u1T9Ct1QrVydDTTinZXAPh",
  "key27": "5nT9pGSCQpcegKSaKQTsZYsvr438PvRCQttgKcdAqLC9xcWibKDwpGE8AvSJVjprMDFrPgpeqGSz4DL1CU8FQWkb",
  "key28": "423Nkat79rfQpX992YqPvHxn47mg1A6GoQmcX4Ytr5Q7QcaGrwDmbqiwoqY3mQ6D49bkeyFZ1f2Led7TpvAEEihx",
  "key29": "3Qxpa32geswCcDr9LYwvE8eX1ksQ4b5s6FAnNb2hVk4FnFYo3ow6VLzZPX1StW2Ahw4Rw4uqLtMN6HVNuCTqUAWm"
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
