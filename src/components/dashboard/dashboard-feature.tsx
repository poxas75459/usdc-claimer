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
    "5TVWxDFgyHW42kzuwjefzfaXT1C6qggUvwdqFiLjTT4uWzRmPAasRcG6RAXuVinL7vXDcqXMdvHaez99Cq1Etgst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1iEvy8nJZiFbzizZ6nxS9GUnqfXwA48KQ9oQogSDh9QZnQCxCpua9EU7K3RE6wcqRMTqhxbeNhS15ogooAWCxp",
  "key1": "5hGwnM9pm7NLSbQfefEsPNgf7EgeFB4gScG2axPRGYpJ7dUtUr73qnNRSUoX2XnQbVY7rufYn8ZhY9BjdNc9hLCd",
  "key2": "4X6JYd8gkWDErFMNjhbdDCY9j9BtY5G59YUc6YNfPGd8U7Kv6WGBU8YThaMLAU9CtiRCehNinBeozgnotXhLHvUF",
  "key3": "2q2DeVKEgKJZfmUhNiKFpMrCBBdr1CGqPDn719iqVoq755QW6WzFfaopaf6Qthw7xiybALajTnwfsQtyeAzEtfVv",
  "key4": "3tBbaysrCWKLzEwXy4ZPsJnz1eTyWCshD7BHZMB5T4ruqK1hE43rBizFCA6WFZSTsTaLhD79rn33TbUNCHkeVNWh",
  "key5": "5YdcQEFGnS2E8JAfiPAPewbTQriWFs3S9dvrJresvDGm1HUHKdUjo5eVwP8aiJrhGY8wQE3kJFRAv2oxn6Z6cemh",
  "key6": "3y1yzkRq3PihEMHp7MPRXuVbcnc8YsjUVWQvz93wbNM1VyqowDm8d8HdwgmuvYAbU1ZrNAHzmPvJ76LCxzvoFDLU",
  "key7": "duEY6nBXnkLocbH16NJFfZWCPKTMJ9gjH67iLMAEhQ6rUWLRc5JBjBvLuB2vp1jhaaVrWDtFbeicySF1z9D56Ds",
  "key8": "euH2TTGnwt2D61qjKmpxCEcWzhEviaFs4rUjw1fnwTKbZsKsvx6rTPDN6dizzujNooEiWWuf18YdqZjwxaZenxh",
  "key9": "5poCs69phwdTbQf95nq3kcEGcw6pBDxx1JqgpgjKVJQau9Gxnu4X4kF7NEtFbtjLiR9u3E9nAJpsahNGYmQS1iCS",
  "key10": "3fjjWtx5UdSZ6vNbwfkTuWGoUMJ9VZHV9NfFXofTpnh3teBfJTrgRX1xuSVCBZhrWNrKYyaEgW7NWNgSUzdqa9Uu",
  "key11": "31R28qvKVhmFUpC9nysE31aguFivmM8QcxsdYwebis9FtwFr7oA1PidXai3mXRM7G2qbLULQqvjoGMfBvRkQ9suB",
  "key12": "3LqmLZnXhsk91VAEze3i8s3ENNx16ViFVdocdGTLWny9DZFfvDyGhNL5NQUiZAZ466TkJoUbkU1a2ggtKRgDdtNr",
  "key13": "62FftmGN7MN2qSGgKkCaTc8VRiW6ovkQ4uyixLupHubyKp9kFECv6Q6Rg6gW1zpbDG7E6tJ6WkR4nAraA8SEH2P2",
  "key14": "2nr3wGV93JjzrqCKL79k1xTnS62jHJ1WhwWbQwMAmdFd1KBEUxTuARvbt4vQN7MBp8GE46mXHEF67EfGTneJeTMB",
  "key15": "2hckhnmAyBASeRzEjoTF1KXT879JVqyeRMSChR3AWC3ZjkGxboquDYkj5SzPfkAWwGoiCfki4ori6fnLk8KZEGMu",
  "key16": "2xHcLeMrnkrL7v1u5J8joQr8btxALgs8gh8BSWhEu4xX4L14Bf6p27bZxq8R4Y9x5xx35LGaoRq4zXFferKvPgAD",
  "key17": "5rG1rJcMxEMcNaDtqrhmYn8hE8v5ZpRLFd7xVo3g2at6pdRVsfmTY6HYy3bMsqqnemx4U7nRZrD3HLLRBVVyLt2z",
  "key18": "5JACeadzEQwQkCeNLFf3ayFU7TZVZcR8LXKCZgmbK2jE4EsvDexv3XxLYTtor1NRheSg3No17EHpeDNQU2LXY1S7",
  "key19": "5RnMKj6X2HPjPNNoWgVn2pxLVUXJGFNstudLiQHLKSJM1FFcJLZKBkYgr5bt9AfjsxAJDjU7smgWuSG9jMBDH9uE",
  "key20": "347NrCTLmchgC3FtBzfb2LHj9uoofi2AgSMKqN5myiGnuKVLGMprjFwjrMGBFoZS2qZkvQ6g7QC3Z8QHF6wsW1BY",
  "key21": "4UGzkhLxzq4oCxaYbUpCuuygpjk9g2q5J5pv35M2suCeVY37ThmKviAv6LSZozb6zSMWzpK2UhMtpoMjadJpnqMQ",
  "key22": "58xTG5tev7QUT6YWgzKdyRRT8aWkaWNuVXANqRLBZHncGvHPmXNEt2n6pWAuEkVH9ycf5PHdQaP5k1H1UzAh3KiF",
  "key23": "62qXmBUeyZiUXVgeGWu1oNz5gsLVHW7Kvs8Vng9XAnzJahntEZj2NiG9q393D9U5KPdzGwV5XvgeHNviAhguZXBU",
  "key24": "5VmKQpoNtJJ1ncpX6JjPnRuBFRLRnxEn3QyyzETDn2ua8mBmQsnSDLzreRn9pfPgQ2wLtuHBxSRfJojyUUZA87v9",
  "key25": "5QrPxAFpXTzxagjj381goRBS5tvebMPv79q5kvpoeSpVHc49zySV8euJCEiwQi4ELJgBg58QBhCuBLCW8h1U2oV",
  "key26": "V6trPNJAHV28o4KhxFuLKhquEhYssQb2AdvMK9Yj9PqkrXC2pecbTTRLGoWquQ31G3XkwPiPaRcqPWhe9GC32Sz",
  "key27": "4ZL9yYMKTZn9s1dLzWqALY3nhscsVUpzYhALfRPvBF2m56BFU97515GYTVUkP9KvD9q9QMeoeGj9p1VXNpD6HbGy",
  "key28": "4DYXhwARuyUTTbqHnhG1nQVzJQZoczGZv7RxKyor68DfHfjZiRmvM3KVnAyi6BmH3caF8gNsqBbDYRmzMLmtvYPU",
  "key29": "znwz2KGi8kTjZa2BCZ3sY1XQdktPDKoErxv5x5KiLT5kf5fHMRtx6yEv6KFcmuuS6T456ubG4MpA91mbgyqoGAX",
  "key30": "3nAbArj9MhdKKoEA7LHftwHdhVPwKpMSBo37xR6iuRS6WV91BtZvFM5WN7jVxWUVXQ6KA3WwhovR8A5xWScVGe7X",
  "key31": "LUrUg7dFAun5souB58NYXnrfMKA5MUi8xGrKVWxa5xWDxdeqbVb6KHxATQDx6w8Ns6BJX1jN7zCCDbxwwonRpV6",
  "key32": "3B9MC3oh7mbD1fNX2cyK7frrKscC4eZ5XknBG1La7TZsj3F8C6C6XyMm2kTRNXnjpDM3GgAdWP5XQnprcCDxuopZ",
  "key33": "4n8JSvjmZVdUukYVmnL99rR5yEU7EQeoBex6ehmJsUBGR8LrojQfeq1NDzpDLk5yi9qkyeajiuNkMYFJGvqx8RGf",
  "key34": "HFr3qtzoB4vraRUPgUPZf1fwAXMe1xr3Qi83dFgZ3oQdVM7UeMEDqnfqs19jN5Eiq8tFDckFJZVctDTqMHd7nVo",
  "key35": "3eLmyU87PkqAXv8kVwTkU1TWbnEd6qYGeosdfEz6safNTqkGUbX7d6cJKitgqWxQ6ZjFtNcuhooc8sBnLVNsbhxR",
  "key36": "A7nKwTrg8Y77kQjQFQbWSsHmKwdTveTfh9WeSNbPEk2n2icDSBaLsS2HSy17CoZHcgVRaFQyXPx35mdeqNk8FrG",
  "key37": "3wC4EJqB77kCsKRtpGLXgRNQDaauobSdjtu39MDuEJAWnYwjMiptNkUnAU1etPCUZzZhk3ByLHBsYEziVHqh73Vz",
  "key38": "4yUMr1jRntwnkY85Jq2WZkoSy5CjeSMLvPaGYfNFD5JBkqmFtWVgNgHL7LuRn76XmMyAFbwLmnbe8NUx4cajbGoK",
  "key39": "3PQnuhmQggbQ4qxQ9Ae5L4SGry7DXN91Qmz22GrqCuY3Qvt3cmCg2QMeJuCeQwhx5uj8BHSbr4SBxScLjnBK1jEE",
  "key40": "oHKgvET7b8iefdNLnHTRerYf9HNZdHkDQef5Xm6HBVPoTiWsGV1i5GiBiFhu3kc8C9BnwEVW1wxaeL4hkoSt3kN",
  "key41": "4282VS8TNwh9ry2sR2RXBPAYpUgVchfL5TifinegWacbMBkYPJZtxSRL49k6nN1kaSyibUghNSsDk51FxLqJGpD9",
  "key42": "3Vymdq1ErxkefXAoQxbbE2uavKkDuMwHirbtfJsmD69yMCpoFPomMdaXn4vBvkStsnT2oscKtekq4HGQRr6HgU54",
  "key43": "5ah3LSJoSV18KMfbiYMDK8rufwxVPjkmbSPk4s2zudoiWH83HZutQ27DHZhgjvM593Q9sAuBiFiZG67edC9VKuPy",
  "key44": "3KLSvX3KcJNbZdsjaPrM6BAouBrjVNJZsoyBNz1WMwcAA43roZ6DBb85NUS5fhyM9iUoyyrzBmFpFRoFGorfEgHJ"
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
