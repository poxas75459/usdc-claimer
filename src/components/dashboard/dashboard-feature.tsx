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
    "48yLzr5uWkkgtbH6CC9qkKnMtXxwvVP1G2A6WeaWK45wkRbWTWRTvYePyQiTL532PhRWGz4BqxQeTGNcXBubXHFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pvDvcgtdsANpShRYJ5XnRGb6d1MdAqMTxnCMRNiufwMiiGzDVt1zmnfH9whr9eQT3eYYWkgo1RTAGB4JaBT26Ae",
  "key1": "3vBXCnkGuAn37fC5EUdFB73sa5bASPbtiyoA4BumhfiLM3vD8QEQWiXXtog1qXVTPvWevgTA5Thk28fJYLkoNw4q",
  "key2": "3XekUDyvNC4kCW1TWYPCjzhJ1uDhBPsrEpYGFsreW9VSWMbiF41b4qsn6CMJ1BA9DLKimvNQevADN1RmpyG7QLnE",
  "key3": "51MhMGmvs9uuuWaqFMo6mMZvywWv9iDCXZqJCZW5Po874YdRkG6QhjYrG8VVk98VBb5LpWsTC7p3b3mrQsEvRu3Q",
  "key4": "2JYbRhPWs78QP3KqMiS2Ha3cfZsG5i5LyNZNRYkFdNgGxmuQ2jVkPG2g8aHq7o46NNZCWk7BuaT3PeJ5NtjEcaRR",
  "key5": "mQAqHEVbnhr8UHSiLxRYNktiKwS6wbM9hGHGuLwNf4MYbH8h2XVdffEbnapb33fy2nisxcAy44ZscwcJMsAN3hx",
  "key6": "27QQczEom4iSxWU52tMpukEeq75LaVKcBr8Fyk771tNgLvN78U9RpwhixDq3rKjSPkCziGrYqw3r9F35r9eJZSWj",
  "key7": "5JTdgfZgWo2RSVuEDjj99tPqMkhnNkp2bKjYjdUDMJiggHMPWkLaMuHnZgfKapnMeWJ5DVWn6drZ4z4KSX998ZZP",
  "key8": "313SgGgVxdTu81cqfSeuLLx44jCucHNXtqvck8czM5t4PyFe4ySgKExoGCk1XhGjQYYtz2mSjyapFjkPRepNTSUr",
  "key9": "heN2GmPGRphtnWByBXSKe9sDvYRwcdNE2dRMgH9uBCNGm17vnejoPStoU3JSGS47yJLTYPmnoc1SG9Chs8vMRUc",
  "key10": "465HsHzpvv6j6k2v1tX92Vgdm1Dxn6pdozWKRKLvwQ9w27hmTgVkbEMd3HeCNekDGY6tSU9z2xf7uSDc64dXGzQU",
  "key11": "2DDvMUvQYX1nAf2DkAUdNdbStxEjn8cWAD3xy2J1jJvn6gfCRy3peRgmMtggvUjyRLWbkhHi7kQYmgdB1zqkMPUB",
  "key12": "4FmfAD2n3u6XDEs2h6ipeKXim3GSRAgJeA9f9EzXR1sPjjsAXcbYPBFUP7pv4PMLWiDrZAxse9f1GfAgZfnP4EB6",
  "key13": "5eEtRoLQVv8gihXoyE77X57MQq3N1HCVrcFv35jQ5tdqYTGxDRsxrf2w4WGHZNmDvbpwc8gwXKrxXbdm2Vcppmo8",
  "key14": "4ZrRbswBjW8Bcs2zfdE66LxjRLy3efPFUD99iJXn8RNkCXXTLCzxFKdcKKBaQdVtCuR2LsyV7FeLPXEQJ755L7VU",
  "key15": "57RPFuPW2kWWmg3D5yC4FoDFx5tNotRNrwVT2DjAELTh5Br66hen5rtemRa2MY7DkJTgPnHP3c8REtw9eomsTGBX",
  "key16": "5ndmRdBMatuQtojBKagMp2HceVgBS8Fi29oykHuWACxuHjZs96HHzq5JET8jTgRC8yPr5Skh1RgQfSjxyW33TsMg",
  "key17": "4A6QPoRhZQp9YELSNSg3gdCde9qL6vRuaiUb4zmnomer23qiYTMN1bCZDmoEnjUtoRf1uVV6cT88HCquac56bshh",
  "key18": "3ZS6fPXE51w8uHu6nhuz4k11vDgTmghq9EzjLcj6QG4CVmMArMyspvnYhhSndhyrKhN8wTx3T1tc45WDT5fHi769",
  "key19": "5jBsQFdp1JSFYXAKoV1UXNd5ypZYE9Mm3KUYwwLYcWuzySBYUkpQp6tdhMXcG8EELXHXqxQAQA56AKXeHdeXNV4Q",
  "key20": "5SLZCP8iUhkET1FWKctL7JvLtag3JwGEBM7LWqvkMpenaYtunu2xNGnLz1ysLnq9ADknxdBBSLVvEEUxMxBqtGNN",
  "key21": "NTUqqfiSzmawUzy8KPS8jdPsALp8SNUMiS6N9HyLJG2AkFk3rumvu2jJBWKwiv7cUPV19oTYRzRZtb4iRaSsb5b",
  "key22": "4kBZuRR8S613UbjbW79roNkbHdmpvcqFr9MT5Pu7p3wqtfpEjLuNQzbqM1dkzQ4sFLRBpTFP3YzkxKMrwxfcaJzX",
  "key23": "4X7bZdLtwAMN3SSmGLzYucZT7ttqwD4weeaeEiPTD51X79YtsA6xpavYi9YBbLapMKS7fFbPgmaKxDaTnAoGyJDQ",
  "key24": "5qMGHv2wR6DNusKPg5dGvq9jHm3BcpfQpA1JuTNHD62bM9pTnwkRZ5XCUCKQJvna6r2gHtubnDVgKgeAsBncD33e",
  "key25": "24W1GgjKP8Q1imZFiqC74UnHpWtDwMWkCUsMHixKXKoQr2XUxtceQWPwjDUNtguWU4zS6cwr1fJmXeQuZ1ikPMcF",
  "key26": "37oHHopMiWoDtvqSPtddb5bJ8njXedMEShuKMBdQfUwFJcQpwBKV7Qfc2PoxWy7g58voXrenHhcvKaN2qvrjucba",
  "key27": "HfH66MSm2Z4i8FRzgYaTHpTtD5f7ehWocKQRj6FzkwQC5BaY7FTG4T2HqqiQVbZYBnQ616gMw9JGoFvxxakavNJ",
  "key28": "2aS6epx7hX7pRu3ssyLtEeFZ7HyzWnQCmqTXreeCphEiduYRyNGTqLNfCpzqC1FwNRs7sVjmzqmLCGz8pTuyCPdH",
  "key29": "5oYzFXuuSP5gVUbYzpgthP1VbdSe3VojiEDag3yG5HN4LzLv4wCr54Efop6w7x2hJeg3oNyo4DeLQoEheCAVDJJh",
  "key30": "3ZGve3EMWt54FY9Wj8EcRSXMYxiUTm7W11J3NfL6ARVgdmeqvqJ5Z2XkNTiNvCig2BwvwpvnTMFZH9uSXrmwS7NY",
  "key31": "2SWAhWDxTETL1UNJS6To8SvtgC3KpgRREHADyK1ZFs6uR9vEZXAB75nFYksGUvRuW6jaNMSKtz6nGQy4LqhsiMWN"
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
