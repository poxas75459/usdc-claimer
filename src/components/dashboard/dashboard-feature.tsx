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
    "5kQWUkE6gUU4svA3Vv9t1YE8BgxSqUdmVTZtRCo4nAd72dB8gTxqqonA3F41aBuoUuWve8RKpvcxz2T1uirAcBrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Gib2hUuECnGQDzm2gHDQeZG1yh9S4Bucwod4Pep4goyx2sRgXX1DEjtRgqKLJXD71pgVR4AtfQaVJb4QwmCMR3",
  "key1": "5g9shkGJ55RBiWys5GFQFBGj5p5tPJgAQxigBLuZWiEeum3T452bGQGbfUbNfxHrfsozponbbNsY1xoXKYSZDeiV",
  "key2": "2SndrKiWSovvoXsZFBgn3BiS8hxx1b98K1aELTMeo74WExTKx3zNbRrVsoERidhxmowpbcTkshmwGAqgH2s7G4gQ",
  "key3": "3FGaEWFiJYNHXyV5znCom9yq8UtMxegLXxcULrFHsYoFXdfTHfmn7iWNGfPGVgURMxjRC9zDtHWsrnsVDC1vLFAM",
  "key4": "5JUNkUJmeP6wkH7puK4Wfop2r2bMpGteWdGpBdWhpEb811nMB7rr3ecivCrHAoAn6ASMJsfBTGJc5YzEoFGPD561",
  "key5": "2CAiwzLqGaoXAwmFZjfRUJN95xgk2cp69ZKr5mGZPo5MphPGqYFfB4RLA1WhjDHtFGkhcUkKX3TRSPBH1v5kPMU8",
  "key6": "2HT4221ZS6ozCeXAGF3PRD8EctpeYD5ANRvByv1vcNSFhMwJNqHGDfR5XLt2DPBzvPWzP3i1SeWnNVHrSsMBFSyp",
  "key7": "3rM54EeWo4UgxWq646JCDe5FH4PfUo25nSZ8uAuQPMUj2uCoKBTsRHgRxxMKeBcKsG68RqEuTHMkrdDDS2Wr6nax",
  "key8": "3Sz79LBaiSSJRt8cpycHUPB7GzafTCBRV79iSW4A2D4B8M22ie6gRJ4V2VNvjsQTkLNknCbpD74T2vsRdvsZDhgR",
  "key9": "2YJwDTLMm2QT8gaEaU5HPNN2VCfv6c2bmtk4GjqzGTfcVkaiRfkdjdNChqxewxeh8Pezx4AP66UmyYp79P7JdHBw",
  "key10": "3WkpzzvjE9NB5GrKa44VSiEMxMw5V5fAo37oSufMUD3REwcvRMQpmWYm1jjdmBZvMv8qdwjWJrYouKxxf2TbU8CG",
  "key11": "kEhkF6tmDoSMFEyboANwYPXczeNuZfojq22Zs9buh2i1rkk1S3pYuU73WfntNkm5wwqnYaf2gj7XN88d6AY3ZGG",
  "key12": "482VWBAQDQTXaK4vFSp4LeTMf8wGGVRpDFEYRtX585CzL8oprxA3pHUxG7D87zAu2mLwLcgMfskEzxW4zR2Q22Uo",
  "key13": "4fq8GkfCAHVEA9PtCEgVD8dDGK1unpprCrvMJZs1dRa4u7hSBeqtNbToJyH1JCvgLxydU5V91qCvhLMvqSgzrKsV",
  "key14": "5Fh1Es5oCbPAef9CHBskGu4dvpSH3ZyEwPdE5hFKDC7eCZCS9TrupZRpDUeCeTzezqRnq97BsKCgUBupWdqkYUcL",
  "key15": "1RCs5J3j7Ls3k9zwzcrbEGih3149Uri49BXAKWXVvWddtUCMhAS2fANREN5XiYwiVvgKxsFJoPaTKMb7cTvGR4E",
  "key16": "3nKHkRJCMwViBbATj7eB93xehzNFqAEGLBcLdupuNBcM89y9wbAbaNPD2NwM68oCxpS3JZSuZDugubzkdwaMaRHM",
  "key17": "3RyTe6ZiKtFjysYHXvVGnVBsurE29QZKKhU9V9Q3T9nDqqQyB2xU2CchiANSCaTmiQPMTQ3h3S8Z3HvdwRt4EjTW",
  "key18": "52Letcz4jQdjp2Hm1fhByJi926GFtQqibvQCnJUD9ZrCVWUrw8AdJg3CJVUKVjdZNJwvxV83KaBTQHzoeshB35Um",
  "key19": "3EtmHW89adeRWpL79wBgYaCivH2hW7vtcqgNALvRcWghocEcvSvyf2pjXtCEur99EuPpaLEyeLpmXZ8uY4QuoVtX",
  "key20": "5QUydAer4GDQ3n8F9BGkCgMeGgD4ig2ZYEme73FHkJAeXo7fM1eqqdJZfuJUZK6BoGLo6Nfc4ueW9dSkcS5W293Z",
  "key21": "ipCqj4Stx2XUeGgTcHuxuuAKpY9JzAKRvWLtMuLP16yRh6ekCkkwcH3PXxxYiMBXQroB4g4TGyryQ8iQ5Xibo8A",
  "key22": "33sw6DYouetqd5yXVqTg56zszhB5aCBFCormcoRXnzSDTK7NeYLvioHtBhWEJRLVifNJShm1zkrfFkQEaq4sX28L",
  "key23": "5nm7QQfpMAtrhgZwi6FXoi3iNJGFCczdLVPR2f3ZXU5Bq6YebeHFk995U6DB2wqgkp3wDPHK12HLhqNFT9Lazh3h",
  "key24": "3nLXGQGJSJ3hnCBtNtMHFZhdqz4uYsaVu9Z6RyFRdG7dYTwpo9UBuVVfUNa2pihpp8BAccFc3kPHsBXyyNFRkWES",
  "key25": "28BNGRrntxvBvvp6oiby34HDcamzyJ7m7F9NG1fvfR7AHp8hLUuCLAKFGPLNHX55CsJiAYdWRf6MpCnPCzX2Pw6m",
  "key26": "46SL1sX9Zy7ZbKyqVKNa2TZ58YwmUaRciUHbGT47mNf1kzFikvSAVTSgkVNV7Lm5qn8BdtRRStg89MC22vE5qSz",
  "key27": "4eTqbW2BdySnp2r8VSNn9mf2KWQ6uKx16KiueD993kwG8LFrnvEbejFtBEud2sKXtsrTsPDsbpsoyjuGr8Sjc9ad",
  "key28": "2MjZbi7QhS4QJ1mF7kvJC8r8yJS64Ag3MfxonANSJpoGbkA2gTeLbJBLNY3U4sJYiXJSnBY3UaBWK5jyx3D8VNko",
  "key29": "VUmgBNc8GusZM5x3w4F9dhmhinxhTxqqSrwBwwqfuNSry8owP3xe1TcFwAckTtcYMxXHXLNDNBu2X3Qvbi74eHG",
  "key30": "65i5T1zxwgwPqhqN3cNjRcT1FB822qHMNCBbavrM9qvwgrudr64j3gYWNZA3XMtfecAUqfmiJU99YF6CUZzxSakg",
  "key31": "NuyZcMGiYEhDWTHkPdtXwZ3Ye6FZtxpYqixmN8nqBH39zYQPdFeUjrFMzEoDvyd19LBjkGu7j3RKPtddq4V6td7",
  "key32": "3WX3sw9NvUbERVBCR1DKekeHhMyKSPtxb8T86kmofCgde7isQ4ccu5atGdn5KfZ54b9cQaisQ9RVzcoZghjBS9UY",
  "key33": "S84kyMoYsTVNHqYKdj5qGGa3cjSEuwhmRsPamTaFa7TWXCVCZVJGwaHQggnvCBPbUhLaoAMkKvtH2cooWveRbAG",
  "key34": "65g5AMVU5fTTSbSL5rBxW1HAqsedZV28Lpd1JmKQk26NMrsEtp3YQSzFeEWsSCzR5EtbKz3rPkh9jET22SXTvJVh",
  "key35": "H2YZrAkWMCHkzgvYWCAc1B3cgn9Aotkxwy7mpUFrcjaydpcM6tt66b9t4SSAWMXBovxVxKG4fP9un1baVQsE9kX",
  "key36": "4LNPNn5YKkMUSs5resbJURWtSC7DTaMvK78wfEi9JkhJvEh2jocaNr4WGmmb1iARdukcJgbZRjqBH57XTjMHRnKP",
  "key37": "AyQoeEAWDAbSyu5M9ykfi2MYn4cug7ER8bN6A3efraGRgJxvwJsy4RXVQEbNi73LGxqLefAPbmV8rX6g7DA9xbv",
  "key38": "4ELCPfkPSfs4QV9FiHwNNKCkctqWyWqLoZsCYJRuF9t9CeqAE9ACgDtXJrXC9KgMMXZirUxHA8QHRtUzdKY5EATm",
  "key39": "61FNRZiWks8JL3HC29ejihJtk4wA9HauEbuqrqNGaFzKGQat6UXE2KbQMcKWxAEM296q2p3khs3u8fh3B6GkvfoK",
  "key40": "122EoJYgizkyw89UvtmszELKwCqSQiRAJRpzoKuVpagPWpZkNcwdMpr6hEQ3cJxqFB2sjkxcD7hFFnpiM7CMhUhe",
  "key41": "2gtwdfgfvHNJ3pzS2otzjZqzSuPrjurRFwtikvUC1NAKnduCB6im7VoDn2GzvGnYisFUuxs18YRDSBc2psVRrZvD",
  "key42": "4VvBiBZNVd4Zu72ftZSqayY4tochU8mbbj3D6t48mpcMmr45HWBHaGaxmpcPjdssNFwZa7ZkH9mDP4sKi8RuKW5W"
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
