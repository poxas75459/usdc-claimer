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
    "538tWuEkroCXSuDDBusz48HUajdFavmRB8XsrCQHfktgF23TSmpGLYpu5wVZtfkN8fs5rBqWzQrfRTqEyMTCbN18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YSorEV8SrsJtMh5susJJ5zPvBCMGScYnTTZUmSPijS46su4mfRHYpoGkQPaUC7YuRYafJHEqVjrTu7T15a3AgP3",
  "key1": "3cus1tjZqg9NsZBxHf2V3asnYs7R9prXghiNUzNdrKok5kcRmET8sCRAXxC7vYJCQLAPWkkMkvPTnS8Xao75MBXo",
  "key2": "4qLA61TC8W1C7rDuJjXswePBthJooqQ7s9B1U16kfvCrbRRFYKekMFKJKnQj38UECDZFdJztysXjVJuxei7fdsQq",
  "key3": "HPNGLq8Zxf9UVqius1JcQTnFCrF4jGjugGGGdctKsUq1Gx3AfRwPy7rFWSfp35NtDDsSHphK2yB78ekZ7iNSSTT",
  "key4": "2rhR9H9GHfquJy96pTMgMv6e6RzKpfrAjQQVJtjXozUm1UDdnoAykBfktEUAGmNG2HiMhdhSGN6iJrE8XaktMvUA",
  "key5": "5v9GYXyfNTTwZJGNoTCG62bapAvDA54Mq65hG85pJB6Qww5Assrcmw15z2ck63i5uxcxqkWkYBG8jhzjuwiPzv9A",
  "key6": "2VA3WfzjFJNtJCMGLhbUCbDCrpwJ2wLKcfpjj5ZEYFyJ7U1VRpDii41D5eTCfoxGWy9YdbB5A7BZxvvJUV6YXdWR",
  "key7": "2FVRTNMWjxzD4wKSteeXU4u8dqvHC6pQhLNRn1wV8RYKoGyNRRALNnacoHqt97QFcamrGtu4jdjLevRTJTF4Rtbz",
  "key8": "QHRitRRKBzGLMgjxoDWVTWzLRVR76hgMVmfFztiBR28gQWGUg1kQB3kj6ZL23aqei3fmToPb4BW18SaWxER4ca8",
  "key9": "4n8K8xZoen4N5LzdYapi7JK3gp1Kco5dfZbGsNj3t8nwr82aHWwWP2mLLeAzFouA2DfMZMyGZYyNqek5fp93NA62",
  "key10": "3MD3L8soskXudxGr4JgWdruF2kMzYkosQ1njXivznVr9HongDczNSWWFMoW3XSXi67wXMddVkW13qeMjjHqixdKU",
  "key11": "2ZwzgBKJaCgjWnmXEzd2ruFEVjuzVycc3yzj3K6KC6RqGE3qVyhwUJyDKBYWbQYbWu1LLPZxJy1PUMUfKr24esXu",
  "key12": "65ZJLdeu5mqtGv4gjofRmFo9uTxcAwEPuUDjqqerjQ83kukQjra2pwCci322f4ynGKzNPCayCTXreDEKtvqY8u9X",
  "key13": "47Mzp89VV48EnGUTCczYVFovZPZaKQTy3GqCs1pAJ6JHoAdtFJnU8qwg2bU96ADCnxi8HycP8LbdDRm7VyH2TQg",
  "key14": "3qeaZaQACmqzBuGdLszw7SfFn7wWhARvvtKF7jzdkg7yr7BpTziQRzkWYivGWaMPwyhukSSDhqanBXUMTR5SvVJr",
  "key15": "4k7uf2cpGPTggNRLcFsqvqZN3KQgZ6Eg3sAUBN9i1is3FpoGfC24W75dnWyqnizMDK7afV2B6ARwvGjeFZGo51m6",
  "key16": "4TsF5Q7TRuhZnbWjU3qB1FNmVbEck6r6XpEdXM6Vh74YFANFPGLaZWgnpbqfEvHFJ3nTo82knh4GK53nfxh5D6y",
  "key17": "xCPJZdsyqqkcf42oiGynAM51hcbSMttEPsf7Crmb7rjrogYKN6eRtcKgEwU6qCZqBRCuBhxoJUq28rfieoZotPd",
  "key18": "26vTdGjRDNMcVKS83aKGWs8D5BNN54iXvQEk5vDbSwwD3jcxAUyNYLEPwcYtqorv2gNMzXc1Zd8mk7dHj6fz6fWu",
  "key19": "62BrNxTnKe37BEkN1t1swzY7G8PvjJoBv3hjgi6PsddfEdJgyfvaQqmYcRfGnUA9wEBcTdh34HH7TABxFdT8z2c9",
  "key20": "34rngKcadmxdgCGPkcLWgP6HHYDVbDFw6NNoUkCrvRp9XpT5WJmC4JnPxHMZhyoKVjuf87CEpyZGj1XNzh6BfePv",
  "key21": "4v2a2BrtjUn5xt7HM7bwbkFVtRaXY3gPPnQYWZMUv5YiwXgXQk9iwqNRm8CdpeHuqdMgc65YVSk7wTFWikRDTrxk",
  "key22": "4548oU8xfcJVmU6z9syo4tRxniB4xbLiDEBwUjpjSDhQ8KXudKo8AKZwkbJAzW3UvNg1qgYJ8iUGAGqAAHduYNMy",
  "key23": "2xJHaY5TFFrmYQak79UjiZkCUfmxF4p3gkpfrwE77vc74M1sHFbCpEskDsKq8r9AyrdZvCT5QeiPckkoPnH1fvNZ",
  "key24": "32tKL58Nh5FAQRexj5QxEnCGS2UwBXYG2uvTM4M6DDx2EWkTDXxW7xQ3eViPbtKhkRQD32afwvQq5hsVvgcodCbT",
  "key25": "4htqgRWQ4ubM6EAJeNecFki5ebWEPFjy7ASEDUbXCqAcC3LJ2hLuFX5PCUmtjm9mPxvfx6uXcbJxtt62Pj8vw8pH",
  "key26": "4PN4ZrC7fc85pYoEQsZALe9PWDCMLnviax4BGBstEkiF1yAUfpk82WDRhC4bCDaR2sjQW3RkrHenZZxn4cmV132y",
  "key27": "5EkT5agZmZQeWbix42H8YBA2crKpZKuLEaydQqRPMKMYdeZvaeqhL9Zn2sa1JkkauLjHLN5pzvJpqkU62wmr1Ltp",
  "key28": "5mfMZgMSBC4yxZD4Sx8tvfTAtVNZ2PNoMUakhzNb38KCvzkBx7fWDs4V8yNKkyKbkRigJXkLhqWmD5YocTbSMPq9",
  "key29": "5q7q58jb8RfKFeTyN4nupdVZhXMUjaeagMAftS43XXBGosudcyBtrLiVKEzupuiJ2NK88294nHXSRy4sSNEM4Hr3",
  "key30": "4VAdNLyzv7GyHLtUSthxBFdojycaeCTgbgXK8DK1xYCoUSbne9maGCfw11jwWVsRBcJh15BvaTVqhSXKm6owt6ke",
  "key31": "xu67tAHWJRew4zkw93BEyg5gNRsJmnBCRmCMfC9Xp1gFambV23TGZX44MjQXu2spzXSLscRwRJuaMa34aiMr7tM",
  "key32": "58oHqfrv1XJ8tFURPghfdDfoZ2kXFFvvmaLGdFK6GjmrknU7bSGCEk1TuxLW6CpqRwYeQwCgvUwqTYqARZDdXoQR",
  "key33": "5NtWoepkdd5HtPfaVXm9iHcPR1Svop5c7bYsPfEZ5M1ZSCZiqBSAJfCHKi7aq2DRBY1p5Mb1woHZrFMT7VPjNiMM",
  "key34": "HWCL928seekanVBzHQgZ1aVWbVLoriwVHyvnmD7Ud3QaziaqEsofJbRPzdgCghKHqTY5idfwaERjnuthVsJZpfg",
  "key35": "51Le8ptaXGw4NEkHK6U8sYh5pFHyR5654ymGnHU9oc92nVu4PMc5x6XbumKFBtwueZkK6qV2jrsp77VX3jbHedfS",
  "key36": "48dPUHKMtvMYVJXwbVqBt9sURThKgoaCj9Z7iCmkwJ8LzfUs3gUvFg5ajZBDcAxUaYq7HbZfAraZoF14FhiEfZE9",
  "key37": "4hUxqDtHGtBjEEfFjtz99ftg5tpmU2Zxf2zXgF42EFkAKHgjQyAKfVMBobyTxzCNfViT7ttXVfdjwMGAQtMt8HKQ",
  "key38": "39TMN5tqYHpqc9A5qPZhbQ7bChADB9DLM47VR3QsaVPQ2vPKpL9J4itbEvQ6ju3kEM951AoQsETDcNtKkfiPJmsk",
  "key39": "2Ppj47GYJ7jYrnhWJpJRCQDUhiDYLSCzCYD9Yn3nKQvKppquhgA8dA2HoW649VFBzEw4RVQg1rxxsRT62h3Frt5E",
  "key40": "2Rj9a4gALkWZQgGnm2m8F4367PrUUN2ntDczpEntPeHTe5ac4BNknf5CHUzLB226Cbcqid2tKyMnQcePSPozGctN",
  "key41": "25cmRZaovfyRFA8cuYQqaJhZmkaYWt4QgzedvczSUGuHqaSNhs84v6E2wABxEPisdxJBW3je7vSWA9REugUzXSF9",
  "key42": "QU4zzgMXVGySkSTQjksXuBNCsrYe9n7NRt5kMSJQumU8k65e5jfygrEs9GJ6yK7s3tZXcPF5yh3zJadywxxqN13"
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
