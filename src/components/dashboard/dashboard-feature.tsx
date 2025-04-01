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
    "5ndqem6U9TVfvdc7poRC3zEyMhRy5ZNMkv1iH2b5TPjchkVjaSA5bDU51idatQoqqk9SatLxbBiWprfJW1oYa4VQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GKGDxf54tyxsf9a8KfXPTEdUXqskEQAZbaS6kNj1uc6c7JaZHnBrmWim5ZRfzrY2xmMvkysq68cntNZH7evsBcx",
  "key1": "3X17ShsF8ADbY5JXd74YUhxt88osWyLRKZgDrjjcwE9tuDdZzcummeZjCPX3MKXNZDLHHB2y1QA2BNZhvK1HBGkN",
  "key2": "3KuFVJcqvZSzUw2Jmx2yn2kUjBepeXnHSQ4aMtAnawB6Z46AfGnqyFa6YcDLq3sg4oBqw4L29PVevuhyeJaBMHSJ",
  "key3": "3aRrJLXpTcaWf92RgYs2MwHh12LM5EV9NAQYtK7KAxEwL6UJY5bxkaDVopU3vGDpNqmTyaCfMFqPDwdkhihgqAjw",
  "key4": "3dJNRm7MyVuBGpNRed9rpotbwSzDaycjRH1t2Z8KUncce2wCRMotJJgFVb2ysuRmuQPoucHpVkNfn2JKXefYDGuN",
  "key5": "r3vidCc2qogTfu3GUghiTWYbCd2RcXuAPdWfNCYMbdurEwTbH1ef8v5J5GawmDib73HYkanU92VSkWKbfrJiYrW",
  "key6": "64euExHFwzZNc6Q7SjtGvWQhv7vxAU7U4bXPGHrD5rjZtMB79KeKpt5PEK9maHA8EFU8N6Jn2cFDExqQXYfFtAR6",
  "key7": "2Lx3eHHC99RUx1p2sYJJhFt6QGsAFh6NE11mfqtdzqubQL9Pd65jHmWKnMbLL9YwpAm3Xnn2qRPfwbwTpwZEgv5b",
  "key8": "3U1iQKJk55JsqmzTaVaaLqPgn4mGX3tbZFLEc2z5x4YiazswRpG2pvowro3WpynGzMp7KXgqwRFRQ49SSepMw13e",
  "key9": "e76t9fdJDtxEX13ZtnGKd9gix2VRtkB8d4Uuu9fAEtT2dTZZgtAq7fJ6MSAs35MV9TGRfbwKfRDc5rXqUS5qYm9",
  "key10": "4Qkyt7vk7L4Xn6x48vU6UPJ3uw3zG8kiBU7ygVfvBnhk9j26kdYdsKEqcVh7e8F3Mn2nfGz9nBdmvhAUo2ckMoH2",
  "key11": "5BAvAhxn2N6B9ickMyyYtkjkDzPYTfMJTQ7YkG4VDoHdo5vHfp5Pp2xqAMLV9mQBTkCmbXiTt4bmHZyQyHA9zXUB",
  "key12": "2T69oTNKnNPvPpYJtaFLKoyhAmkuCqdEyCh4qRaSMn8sFPJbugHaL9YaNFzXGnsiwCEoi7GSkBYQ3G4jU5ydEPuC",
  "key13": "5oszv8xeVPbCXvJEcD95mRpsa7ZoQ3jp9xNb76B2aMCUtrWQeWVRnUrwsmFTfL7XVZ1xXmMSi5sepMBcHpr4B6Go",
  "key14": "29rXbqnYxkxjDo49QGQBNvHkVFadtMn2UCDgAjYXEDG4EDK3BuFvSThjC27tF9DUxGhBkR6Vk4hTJ6pKzVj9qWwV",
  "key15": "Z5GPfmxqnzWXYHP5FfQcgW1SWysAeb2TZsvJRCQvUMESBdkEwaD3WMFrhv9ZB7XNpABCWBpjhCafCR78brbVSos",
  "key16": "5bxt3LH96oEz9K4DL4sqwrAJE5Z1GuAjyLkEyyC1ExYfTJUmuxzwrCMfLzpTStrgpiVpDXHjS74V6M3cuzqiPdBm",
  "key17": "3xfbfwW6jA6gz19mgCSTsngajm7WgMnwuzt8PFaAEHNEeDQtosEfzWmEMsW5sZZw4yomqSayBoUaEpdmFCyS1oDo",
  "key18": "2wrx3sgkWs2DXMCx4isNYdtm8ZX1EypryVFr1mja591DnQH5dh3ntw9iNrkAjqXUJtHWYH6pWV5TCLGHJfPbRKYq",
  "key19": "2wds1Ss1cKhdN2nXzS6noeeeeNKyXgdkFntCPvUKKJ71LoyrGeG9gLC6kzGsh1dh8WjuxUaiUPSM45UkSdMLgYnP",
  "key20": "4ZgrEXPFijF2RoaBVTWGYYBuZBGivHCgMZEc1N8ZPNv3BVVq9fUcuyobQeCjY4sYFZi4N8TdpgwMYxF7PadvWtgQ",
  "key21": "5JQXM4yvvb77w9AvuecC6MipfcYMzEaA7cF9x4bKCdh14n3hJ8iRgWg9oyMisY3ACehqiVCbXkPVSqqDPhBHcXSM",
  "key22": "4K6U3sd2t1y2p2wHnhNnzQff3KvUnyNLC5jpShYfcmo4rNeqX8NWRP2hB9uwH1fSRCEQjwLySCndeeR1QLNdBGQR",
  "key23": "2PvHLpE1VQwDSS14coWx2U7N7KwvqWU4HirSqCy3WYfPqQxLpgriYjTB1BTmPuL8T36uhJuzUEtQZYc5rpTJBYoR",
  "key24": "2TcwGrKMG1p65bkWz5K6h3dE93djYdbxeFbqoDpJG7tjRFmvDH23fBU7LwgtLefkiWcRSigGxmG1PuS2FTGYJBJC",
  "key25": "2sFG1on4BJoQdjaxXsn6jR1AcX3ED26tNZexjRJrrDAqyRZ2dHwzkFonacTQgBh1zsboXM9XAxqeCYX9SUZNH2NQ",
  "key26": "4Ke5uUHprRWykUtzfuZWXwuACrAvTsajswcKUQYyQnvYcYVEDrmmcts5FNYNHZWbPuauqZ6CLwZppn3zXmZ7n1WC",
  "key27": "xBVAPgGJsfgmXUM8Ant16xmzDAE6hDR5pMfuz7mAczVnkXZCdkoxgumSAXjQtVamX5wo2snKT7BR4skTb6YLcrb",
  "key28": "3ccZpergNKhbqQLBMhVnHVjQtyYxycQiyKwQATh71cto5R7GXeF4eUvmsUaLEc1GJ9RK7UYTao7C3RVipFhnbL3m",
  "key29": "2mVb3k8AWLTqoKft6wbGnVBpAoFhguSmAAtchwkumfa8vVDpcTj9SXfcadrhgGswkUaC24KeVX13E8vFVD2oGg4e",
  "key30": "2x2m9YevCvBaoAsi68pNzCn2zpZYUTqpwXugM5c7G7iphk48EjRyBoLks7LKYtGc9MiAqrGaU2xbeR21vNPS7CUC",
  "key31": "2fu7DoiQB78QvupaHQqUYqnKG4w6a5V7fMw7L5MFyyU7xfNXLFnkQdwuL47CMsSgMrWtamj3izSeN2JCHJNQxgLV",
  "key32": "4MHTGfefvdSd9heSotnVo7DUpCdHgspJRwSKuQkJQrdt2y8iQ6HuDjfT1ChoSh8puD5kYsCy3JeXGnyNjrySqV84",
  "key33": "4gX2if3iA5G1kAV7dQnVoPaybJKo3mfvZpXt9ta1yJu2iTv9gXqPLMBTxMZBkr1QzwSMXfcgAY61odaoT4EavgKD",
  "key34": "3Yp8Vfy6zfEHDRX2wtqV1kzdV958bBXNFJGuJi3y9XyvznRghCHpPQhJ6Bce8WVZtk51w73LmnBU1FBktHWQphdz",
  "key35": "5cT6P8TD6auWpXSHNg82Ce32k4MWwcWAA9Ckghi1dwnp7JzAxB5H3ytiNv3Ycacpvewq2aJtkUHKYcQhVdMDhuUD"
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
