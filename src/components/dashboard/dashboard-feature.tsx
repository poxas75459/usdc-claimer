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
    "EpUyXm8ZKpbjK7DzrM2HPJP5DrLb3LRoY6Y4zFULJX1m52aNpnAUb8So83xhymQqTUYL53qX9eMUAx2QwgdfT8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6GsTPTAGxPouxQRh3BLrE2ux9nQ2sRdDFidABR1xbQLgUbL4xH8Wd2twB7NCDbA82T8efGVJu83MizPPYvEcpAw",
  "key1": "3sh4aXBwJsSgfz1hy4G7RPnRKS65MvgS7eUGpMLiuepP2zD3KXYZg4KrsDB5N3oZHad47EyGSE22YXijQcpu3qEJ",
  "key2": "3ShXEaL4Mh38Xxbur3VTWCYe93eMPJBvyjxVvHuBhi7Zwk1YV1DbL2iE7UNLkBr5TwC4VCEDr1BgvUgCCDMGGRWR",
  "key3": "5ByuXuTSEm6SFSDfLGNuWsQA9nBYNRcPvou1RY8iCgRZyWzh9qYt99EV7EhAPus9Zdk93JuzFs3epnnZAwWWwRcV",
  "key4": "41GuyxF8Xkv8JUYX69c4b2q8TNmFeS3JuaQrZnVMpRCinS75tQJD7UDy68FgbeCBrzLcGJGeGyjADVhtxG1aMbSg",
  "key5": "3FyCQf4JCLvbgFaw5UAKz9NzuHx6mmeW7y2GZTf7FZLgVmBwAb7Ge3WtknRvdpLAt9LPEjZGKLMv9nfcg4PgboYx",
  "key6": "4KukhhxAiRSBDsCYNoNacfNLBctJgTz1URCinTo8hhd58MWyTP1oyGMouopMg7XnUkhrdqY2Rp8ntWE1F3vPGXYK",
  "key7": "2h8xxDQYuWkXNLWZP1EkmYPdbekxLEbVjzUGopXxHSwCnKqmsbxjFhJiTurvkGAzrjnRfLX6zEpPv33HZPZsusz7",
  "key8": "5Tg64vsyhWJpZNoykd5B4uWnBfGz6rivN6Dg57yfzwgTUaVXSSTNnbY6N9exxDhEMruvKvsuTyirsRwaHkeChyE8",
  "key9": "4MMW4g2xdCrNaDAF3RBqwmoJAxZoFS59qNZKmepZi4Mykvuj4D3rWLHrp7sp1kQQPoJGhREAvXG8yk3xjKgM5x8S",
  "key10": "G5aKVDpxed3cV6gUSnztbdSPy63ZKCgnGPhZrEw6AwukyrnYfvRLjA59zWrBYUSNWgHZfK2sYfT6uboM5Qf3dav",
  "key11": "rjWVpAfoUK9rHJpW1CXSbhy8vJG8aAsMca2PrFjJpwUPoK3eGWHqjaTFgCHA7Tc9WfDFzXi2rboT421ZmwV7p2S",
  "key12": "4LzVyFfwPm6tStBvArcaezemSkjk9Gwsx9pv6vEvCe19HENMFsArHebD6buvrtrwhb2qSDPWncStx3s9Mt9Hkr8w",
  "key13": "4FWgDr4CosYV64Lbn3TMEZWP1eLTutp9rqG9ffQYYDAZvEnboLhFdd1w8J9rA9QU1ytZjoSmHwW9EpHTNADZuERw",
  "key14": "4ZiwAxSUxz3yRp1HKZdzH1EhijmBMCPWc9K31FDwFQHx9okfcMhWCXvFEnWLHoVMLiSYveWeA9MC5HNakwWCpkd5",
  "key15": "3sUGayqY7D6DAZ9cRoeAV3fhdpvGQJWUmMeJS4AfpEvQSfAcdv4713FM1Dzfcub1j4Uueu4iwYB51mWsU1igrAjk",
  "key16": "4MbT53UyanMrjPpBWLnKaD1uziDE389Mr29EF4Kroj1373S2FZtCorDfocoDT4ZYXkuS85ExWaExvGXP68XcUS7K",
  "key17": "EHBwjqHqHxJ17qAzdJMPdGDfJmaKjoNdXeV1Q15cAovWXjZmKtYjBKNu4qvV7KK3WuwsVBTz2whoF461SgsGnnF",
  "key18": "4xzKvTCr6tEVRzMDrsqzRzS6KDZNGCZx2MD6DLjfPoudRxmgE2SNgRC9dvURkBthvZYuEdwPDVrnrz98Qt6sj8Xm",
  "key19": "64iviTSFmMPBHzdAx1DC42zsbUuByAgNuxu2gGxvptou1sqAk26WG6witxU5ggeJdcsbz45pBCTgqYfAiNbPEp8o",
  "key20": "hvQRE4hFur1XN98qGG2AjH9cp6vF5eQw1SGCTYfp7T194mhBFzo7X28qXXE9zFcbJayynHqFr6Cd6dafupm1jHw",
  "key21": "53r3FWcVNN3WS1cTeyLoiyfVSkngmjxoqf4QiNLDcxro8uKE1641HSiy2BLgsbeZJ81FqETggPXEA68yrd4aBCKx",
  "key22": "3ujxv9uHDjstdZmuAuVLQF17N7d7KXDDAfnLN8NVrDHJAuSzJAyr6DhvjwuQKFhugNXbC8y8tUonMNScq6NT5EiS",
  "key23": "5UhYyBU5a2Xg8iJFW5JCzNd3fdCvM4w28fUmCQiLGdjSwmePqabXtmTiFKavwmfSMz9TSzbJrVg9ohmLvCnAifEQ",
  "key24": "5awfwLJ8rXgwePeWUHT6ejqBJ5WGYaL3i8kXDzbjZAowkvbeDDF4NAWnrx6BUV2uBB3MoKY13SnL8pVJZy1kJo18",
  "key25": "3boQj8ZPRq5zgXkhhpLvrcFYBEyRczRB845Afyfb5Ltzpe1aoR1tq5kzy7tgWua8Ci6Kyjtxb7sCnE9ctggbS8Jn",
  "key26": "2hic79fuzFUfDrf181DkRwLmc2AznnvephjpR1SJWh48cd6sH6bTG9DMEoBZzyW4bKZhkFBbq7HMBBBFhRniwm6J",
  "key27": "2GvxnpUtPbNZtpBuqDFtSx1TiHNMjyNZxWpdqfoL3KRLRvhJMG3dRWkXPcrUYRykxy34t2Ucr6hbLtM4ybMKfcSn",
  "key28": "5ApS5pcAWqy5iYgW2p7amqDogsXYudd5UcSjSGTHoS53xJ3R9uRij2FT73aRCb5RavRtu6jArPyCJSRQoB3Av6jo",
  "key29": "3Uf7hrBwDEb5Qg8Qmm3AdKaHBLnkioszd3cdiUNjtExcDfE9T2p3J2qYGnJVgZfQ291dE51rwBf7SscJbQEo7cFY",
  "key30": "dxCmJdhyFaDXMNbgjPqA91brLJRyxMFBU2qkD4VRE5L6zm33qbtB2SjVLzp2L3PR8kpMorjUq2zeX4DHbyqAaNX",
  "key31": "5hSyDPs8JSLkRYB2tXZHeAo1PrgTMJ8EdUFJS3jg4RqzQCFYgwQ4pNBRbb1JAgmrWtRc7EEzxXRwaB8JqFC3aKEm",
  "key32": "2jtsxr4azqYzvCE9t9kiFBJYYH4p4JQM48eT2reAWXdeGNeMUcaaAxz3JkSkCkMpcR6297d9D66PEtFPBvyMgkcF",
  "key33": "5B8yaJ7DKV2LruqwceCeHADKyBxb2Weppj9jYk1KxQ4rznzD7otoHPAEy2HbDgnmsFgFKUueiMeuadcEt721G5UE"
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
