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
    "5fMAWr9xeJF2Ee31xYBGpXpPNwn213n3f7WCT5hTaYt6Ja3DbfwfsaMrmdGjqJJrvVemm5qxENCvdZFLGFoGBHHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EtgCGwZE36x7UCE4ynGgLd63u83KjK74bvPNqg9VRJ9EJcUY4viH3sWoUUKanNhhLRFMpFwmpANwUzTT9LBABmU",
  "key1": "4SD4GeJUmzhpEH9aa4yG5XpJeE9SFznkHYUn9beMyf6hydu2DC9s2snEjsEsa9wDpUu1EVVFj3bYxjPbkftFhU5t",
  "key2": "2UGkiwooyTfk2JNxfAd9QXhAvRPbMQaF6V1rKG8UgFGCfmseyqrEy1xCZi5KGedJYnZkRjUdoR3CBiXFYXjXVef9",
  "key3": "5Y353A24qMhzo58mBxJhfRAYwEM3X222uGVVsNgzrGih8dAujLQvjqukRSXWpqqkEga5o1uTkXGowfPLaFfjcsJe",
  "key4": "6pG7LuvCMKYgBZt1juhw3qj1prgK9nLL25F7XYNGnYxAwb73BWNsp1z2zmcXsMkTfUTs3N68bpkie4xDC5xukpo",
  "key5": "hYygHDMHd7Y4KcuHLVCUyX2sMMfYxsoxUSqkU7HAg79CiFTvF38SJeneFxaT4wY1vQqa7qhuythoepLkjDpK7Ra",
  "key6": "2QSGCb8GQ8xxGhUHPoVVTBUc4h2YhXNsSy2kLp57dJVBumKGjTbuGRB53BgDb9ANNZ9hAaQo1iw5s13A2VjGDGfN",
  "key7": "5nAuBExvWz5T2ovVJH3ca4mVS5iX831r5ERos4YWydLsPPd1nh716WZyK5vhyWt73FCqJ4Ccv6NRmuWQbHdVQPmF",
  "key8": "pKSGAWwdaSsiFSJp5sQ8H4bo4jM8BaRgom8Tn6kTTT4vc1KCRLRP6CG68GUfiCtcqFz1UrbkmiBSsX5p71BDXEE",
  "key9": "4mWCVHpYFendpk65T7FCBcNP469HwVywBaCHp2gowZoFgBTyf24xUPe72XfpEcPs54mtjVQ59bDDJzLWcNdG4hwx",
  "key10": "MEvfkCD1eXmg5PAeqoco256bqx4QRTiArgpPaybQ54NTNMGqsJjjaBUhVPqEFcNPtBLcgjasZyKvL4w9Ek1bXpt",
  "key11": "3k6UmTEnGoSAUqdBdKCeE6bafNVZmMEittDaf7rDfHaErB2vxYmFgnL4ELrnvbFFnREuDpcKWWPx9gXonEv3q7ai",
  "key12": "3GtqrPHUD34KP7TTKBCeggSaWwtf4PRMZXQfJkztmxwyRaqpTNHhAzG1HoXWxoVQMJTTargdmVp1W5jNsDfJdHBN",
  "key13": "4YefxmyaN32hyJqahW7obUqk2vL6spQ7v8V4TYrDXrNPc6q64BH4bVstq2P4UTeBjXYy27as6x8j3qJDTVSkdpS5",
  "key14": "kEsZCCiUdAxPEB5Bn9NveKWT9s2TMyqpaEwNb8b3ogsSYsx7sBeo1fMtZQq1H7BzWpNceVe3P9ukizVrEdgUbW2",
  "key15": "3WtTisXyzK8kJgpX1EP67f6J8dVBo7VW5BBpS1roAnRHsciRCbawDfSC3hCuzL3eogVLQUPqRLzdobnm7puHh7Q2",
  "key16": "2J6ZEGvcFr99ypuX7eDs1qrY3g5FTNhs7iwAS3tXufq7RiP4ieab9Khork1ER9wksVCLvWcnqxphbDQZhTJkNZtP",
  "key17": "5AnwyBZzNqsvKvRbqLm8RHwM2XydkE8bYoqgunCbzGD9y9F1pDJDiJtsuyfreCYQukrBjrukXtviYb9rHA3C96bF",
  "key18": "5vWzRrjesrUmctBDDoR3Xw65725PhCm7EE84r7TV1Cv1TkuBFiiV3i4L48JRNEbwYq68GDgSdsFhX2cjmSvdK9Vn",
  "key19": "2764dnf9Jbfc2rkx33tJyBBGio4xhwnrTi8qCzxuPqXqK9kCZfnzpfXfC6BcNGkmEtwW1YnTi1sXEwrHrdNoE5F5",
  "key20": "5XCYV2AZFEbwmX7iNymLbFyhmeCjhqFWDbifdonRcE5ngQS1NRVfPBaCKgWSiaZ6tuR56WrF6wfGUUDXLEWbATrG",
  "key21": "5Fsreb8VPEbYRWYEYNeVtqwEY2SFYYjEzMNvy8ZJWDfoHXERHktK9SAgFbRCrjsiwftFrFsaKv9hu1GpdWY8o8r7",
  "key22": "4mjLSHq4JGmNHKatudjzAFUyAJyGDXC6oa6Fhnh2yiagDhDGfezevkSscwbqaAtNW1719ohHnHffK7cCvdDqPLD",
  "key23": "4N9QqSPzYyPLenS7URiEV21buKiCWRC9jT345Gazx2MdHCXVmSdXJtvrLS9w6xQMRDGBNbLUjBKtNfDf6wQer1Nx",
  "key24": "5UNWpYQmYJMvtirb22pEL19YDME5GC54NStfuitWLuWx8zaKY1cSmzHd6KSPSXsJy6ZEssTRzs59n7eRh28bPYNp",
  "key25": "ujwBFFMg4nBY7qKyG7NaZUbisUv18XNehrUVf235RmtzAp8Vm8Bdf26wPYJTjTBSayqCsWRZZwHgkrLwK2F89HB",
  "key26": "3DxvF4WuJYp8x46xWgA55sm5ePLkzQyS1zwyX75FrAHUiPamcPAw5Fv4bkoi77Bp2YxWDURvqkkfbWzALf42hEZb",
  "key27": "314EgeZQdqsb3MdXVbgeNnh991gM4vT2HuLwGcVYieaGpduBLkqU1uHh876uw7jKBdvtaac4TAp4Qui7KybQEZxy",
  "key28": "4DKaeerNjpXUAoo7kjugRcgLv2oAXykHsTxw6yeRbxHbLpdMW1dweR42h3662Bb3Lw382QFjNuiSS2ZmbDFes6G3",
  "key29": "kyYFToNws2JHirVVYTqAKEGWQ3rKsH7eDUMLSTgTkqPhvYpZg5MLZ9qZGp7CDsYNiypDTAodiNfn9cqUNGN5wTB",
  "key30": "2bwGPamGfjaB9HxPcLCBMCKcRwNxim74xhM2bpkDvTsXHAwMgX8DA49ED75eaM2BpmqFAbjVgcqQMY4we3yX8Agp",
  "key31": "5GzKGpGh2ueTvwunDwEkqyUmbWpbUgV3tDDh3vzrKQYjiJNP5mKnJjTRtUrZYJpDvinLHtFeKopGXGuJcB4maYt4",
  "key32": "5ZskT8RKhCNhAJmW5mdqjhgR2Mnvi53ytRB3vQGFk7JGifmRGDWiaitD4h18a1H4o1YWxUBLL9pZpDXYxYxZLNxe",
  "key33": "3BZJskg1K9x9LFgwWHfH8J5ovyK9UUBefH3h2GKN8xWAzTFFhc9S1PGPeEnCEiKyyGKh8CYiXoSv7wqS7AnKBYc3",
  "key34": "35y4jXpK3y3odmaEdQzsWnG2j2CiX8g3CAAV2PmMHqn7qM59PvVCCuuSbdjpny5uLF5dS4zixFSpN8oWL3UNDhNG",
  "key35": "5WeDAE2fGTLmiZotLYdpj8txyh31gpGvcPURt6NQwVyiKcg8wNMgAMANfiKXVMLhGtcYgtwLVDDzEe32VbUEhZqU",
  "key36": "2q4bE6QGESopmoEg1BC4Ff41oYD6cgpaVqwpdKoWHvisJkNR89RtEQVpxLipThY54uEf47JGBFaDhNa7w5FJT5nT"
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
