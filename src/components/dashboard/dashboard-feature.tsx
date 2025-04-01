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
    "3qxoKB67CLC3SeivvoJZU5C5HjNsjZ7EBnoc6Rki55tHb6LoyK6LVU1nSN8nNaY9hB2RxDKCov58QNnqCAu5ysV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3njHkpWNkJRQX2GnWbZGZEr2qvh5KQjGpAajkmmui1YsZtdsGXZdPZpjk6H5HNqskeH6KrfiHPQcaSiBj7v5wzUb",
  "key1": "5YkFh9BCfkgdy3KpdWKRK8tV3mQ2fLvTrfkSaVk2qcuE6SWLPev6cZtQs3uVkF4Ba81bnhpm53Y3NXwr2pX8WAbs",
  "key2": "4jJCDhqrUkvwyJWQahAiWzcv5aqn35Ay1XDSVRZLGvTke6zhzGFVrv2gBe5y1c3p663dWtFDYMqH7wRVmBfAtacE",
  "key3": "5HCpQQ9Pjm54iFTr98pqqQfhmb1J3VrC4F5feetuaYGhPoDGRDM2GRok4JjdasbpVzHYWwRVv2uvet4mCACiq38b",
  "key4": "2V5KBpTfqq4nyP1xBispw4eHTJdLPRa5Ynqb8xcxAbEDDY8j3BXUf8DCsn3hBiNc5rubxPGfbmzMYM5B7ob2GoQf",
  "key5": "3ydsvanVv28L41XjNaoaxkgrjA2HBRpDJNvgqwuLrnkbXSCyEb4uj2PEqdrtJyrLtqYqHLNxMpesd2XXgFWmZq4k",
  "key6": "3nL68fxRz4YdqNCvq7ipRSVLchaavhhNYJjrSPcV9CTxTLwzQ7ZtXhhHuwgMETsbE3uVSs4mdLyXmTnPJ8XpBjsm",
  "key7": "5zHMaRq2vgPwK8EzS6wi6UKytcUSPAuPjCjw9UnUhoATQoYRCCMmPtW3WL3fN5eadNLbqhiLTP8zS3cFk75ajf8T",
  "key8": "4mhitAcFRp5buDFVLmFKE2Kz4w6NyCZVpeyNHau29hMXQdm6jyKtjAotpnpR9qTfJr9DTzaBczxgRyuG1GowY3G2",
  "key9": "4fbK5VwAtQX1HL4qn8R2Ydvbdi8Th2WFQDcnXeP5TXCXDe7s1dKkdxhm4huHHTeAUbyRX8VwqLBQm5PXMzAjswKd",
  "key10": "2KngL1bt16J91Y9rnwTtCt2UfAFz2xs5NrbFseJhn52DzQYay9NtU4tFtAih9gJVVbE8L2BCiaC4Jaf4QcAsy45V",
  "key11": "4f9WusZdFwcFK3eKA6frnEWz99v2aZPpew3xtXL9CzjFUxyFrktKTrxneYxGBQPV7jrm9qEggUnYJ8yd6rahqEGg",
  "key12": "3HuVQNkYrFyob5fTSPmDXrh8t81vfEkR3TeHZBq5WwJ8emCiFAzHxqwzMBEWwSpsbSmDYyBgHkHfe6tB9i4Ja335",
  "key13": "4vqoQ9rEbpUc1qSZVzUbu1LF6BfUh8MSAWk2eSZ2ZZDiuxtgMmtsJvC3rSTG1wCTpDQRL2yLacprj2nq3DiGrUMo",
  "key14": "24C5bTDHokpjrTrPxbBumVkhyMAUCWLVbECnh2HMNLMag5j5XBnTq6c1AR1AyRMNDaymdk3WhEeFwVMLjfTRnbV2",
  "key15": "4b7TNGDZoVgmQqkkusSKESNqnNrNWrZcEw3U6H3fRpUNnhskDVMoMnTVu6sbiMsyYxYx4aGSEfbWvdeMvtWvpCPH",
  "key16": "3iy27hLhJaQfo8MXFaQkAdi9dzqKeyYXGr3DRTTrK4bnRe2XeSdj5BFxNFAs3N9D8cWZs8Yfdq2vM2fwAPfhmHD8",
  "key17": "4jAxi4Ng9Qm2oKCV5Xnc2dV6tKgrGk3rnCQdYir7xxsuDobCmQY4chcHgMzThSihoc5suDXsndrUaCYvB62YgA5S",
  "key18": "2ZVnGbWPFmXdoKr6dzHvnfYQFPJNFTP5hrfhEmffChJv8rF9XZmGG6CfBHMwLwCk4PzY6etVN8APP8D3RyhVLoFr",
  "key19": "YRBAQi6hzTKFPm7xg3mphhbPx3ksU22Kmej7jiavhspfJfWotjpmuCa5mKWhKUcbGnVEuA3HRKE5Bhcs4iEJUA9",
  "key20": "56HUun7QHJjYYWXRTHMgT1YubszP7rjSLA8Kqi3kwogLyMmthiJo6Hfmd8npvQ8cwBZCUUG2fmfcDviq4dXLvkEU",
  "key21": "5W5UMbT77YqD8F61XyjCWeRvFA221yhUZa1QsFNKzo7tusmaLaND5p7mfojUPsiP77fpxJTbxdBoAq9X73zbVRz6",
  "key22": "4DS7soapY5J6UW4bcjEojgfKVabj8ZRQQXCYoJgjA4D1CNkarXARrtvfwpZR1SmNyPqXPm5fftTao1e3TcYz4g9y",
  "key23": "2jhynaExAgpB2QLSLJ79ZpWN3R8HfTxSCwEVtPzQph9VZNLPVNMNN2a4FYayc7usTVJbHprGkSDBYpsrT9Skwdd6",
  "key24": "3iR9Vjr5W5pLx6SnPZNuxFfu5vUtYbbs9fJ8pLfzHXRuyawPkaZQcxGT3zeMJtxwGKKZD5g2fjyKSKrGNatMcveK",
  "key25": "3sd1gvoLLxAB4n4qPbEQa3YN745GXoLY5NtY3d2VrS7cnCawm98a2xebJ53zqcD4cBQxYK4tdPqQrXEHeLbgpuQR",
  "key26": "5rcJi5oAjF54fzc9XvrphGGz3kRoAoXSLqxQmvziMnWUhiHRYVsGU31U3ENTETFtxtbzDZtZJjdVmTaqSG9NS3Ww",
  "key27": "5Cx3teCBMtNeZd2Hw8qM3VPAvJHGmdtqyJsj6RjBTU6YpkbPQ9ymXJLp3JDfggT9kkww93jykW8WSK4gjGsDLgy9",
  "key28": "4Sj4VNURWkynisHb4eXJb6D1b4vbBMwXQHVRUmXpxNVayNQVSR31g7x6QtYxNWjca4rU2tPkbGZ2efGP269uiqCx",
  "key29": "3mZfduiQTE4y3GTvbXspfcz3NG2uDzsobRst9PVmJHptfgmyfBFKNAdter1iBtuoLod6ieGKeRwrQYkW8RhHtDXp"
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
