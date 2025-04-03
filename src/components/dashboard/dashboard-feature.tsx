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
    "5FHx5hy9QxaQzXcA5jxt4frp3p28sLpraVBj5hhU1GLJHjcJuz3oaeueUjPEPnLNsWyVZu1fkVXrC3k9usoQZCgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DzYUyBSnNNHoV7UGiKf27wqswmsK3qS1PB9eGG8Vw2yvKM6wBFyqCmRYgoUTWnT6FPM1zHb6jskR5WKTTog7Q3w",
  "key1": "2c12XDx5xpkAfa6kKW95ovyfKfgkMyLLjZYM6bHLoN6BjQRxyQZ48WHXPFpvnzHWFkWaeQAGWUNPt4Wemsc9JkH6",
  "key2": "3R9eZHe6tyqBUCHUNU9AFWzbiLXeRUHbjM49jgjN2o3S42gPsS8hGRaMBF4f2BXWtk1fyuC1xj2pebfRH1Vr3X5f",
  "key3": "45EsA8KaD3Hsn91fwR4cnSBG1gV9RUknsWRM2ZQLE8epiXLFPAkVXnra6k4KA9ubFMHyesPwjkpu6UDuiMW8rrQR",
  "key4": "4CatcQ9VMtqk4XMFSBdTCaBvs3xsk6ruaKoRG1C64MF37WHT8FK8jG3Dpc8k3RuxFGZFic1vVyMGTb8LtEDu2UaZ",
  "key5": "5mu1XUg83NTq3ib6o66wSvqbrAf56pXs2VpQi6A32LbtXYei9NX8qZDAmMgetdn1pLFfA5jx2Tib825mqk5Y4n38",
  "key6": "RvU3nRsSyNXVjN4S3vz3VXWJPM3bwisaRUUTHzZZRznDivVAs19r68uGbejZSogUw5p89i97RYrkY6MDP331ezg",
  "key7": "3QAWmjyXKa3hG5sAG7ian7mrJgaHJtbWN74jihBnoqSDzmeztvnfnqQM5ue6WeDP2NuEstaTZaaTLcfhB4FZ3TDj",
  "key8": "3dVb2JAe8B7iJXB8N25kqQUMeY66SkPSjj1iNvuRNsYe9MDjng8ACWWw3yjbXXwmeLxqjVLni4Dj5gEKrYKZ4N4Z",
  "key9": "5eGw8wgGHRJa2RoRe2Faiixevw8c15UVKqPooiosgtQtMoibcHoCFy1ocxCBc56ziVzCxER8VBp9HX1ChpFB3M5E",
  "key10": "5h6deejMnFgivsmQKKXDAJ7r6GkNxxcReUmCoqZFZD8XDxgcorhfGRpSnHK37Zx3XgiMB8ZYsDDvgADs52immhFp",
  "key11": "5fXg5yCzpBmpsobwqwn8p6k9JBvrSteCSqjKePaszfeY484u3gvuaceo2mREaji3w4KwatQSUTdMDibLMv9CyS5Y",
  "key12": "3zxjZeWMDuFR8kbpQ4z7czATfeEnKEQqkByBNenUJEbiEYs5jL1iRJZ3T9PGnorNc2ftz9PN89PMTLdBN5LPVsfm",
  "key13": "5tmC1on3Re23W4mGfhF1k2AprPc5M7iPrSSxNyK8fwuq9AMAcERe6hLB5vc98mYEFXd7fEsunnxdxtcHj2HNsP8C",
  "key14": "26mddWpfDRnqLSoQUbbiCRQeT8iMk5nqqAdE4aVsufAYXYMjjSRhX5B3gCZp6f53XHgJVsoLqJyVCbTmAUw4s3K7",
  "key15": "2dAYPrZc4z5NkQptFa4c8TUwHxn94wQPCkbQCPiu1L5et53ZDrCyRUfG83KgZBv6C6TW2z2P62kir3ivJhoE3aFm",
  "key16": "46K8nP2qNjFn5iBQa8CSGeVYFDFAueFM1eCcNpNkvbtx1g6Ea4wTq9SoPKvDi8ZmegF34Fco7h1UF4LopsiC8pKu",
  "key17": "5MJXXNzXfcbo3ZcJtDhgXTacSMqi93orkgN1dfBAwyEg4e784trhwi3n1KTPKV6vekJVZvUjrFZAxdiWuhR3MiXp",
  "key18": "TDeA3LejQ6GsLrA4ky2RYfVuyMZZuU11QLYh1C6iXwqS8fDr8MR4V5KarWVGSsDGeBDUHiXnzfkXL1WXLi2iEqA",
  "key19": "4dwayzy6qVhAqPNixELFstktHHUvdfwPPZ6aNpK9ijRA4EzhfKJtFjymZr4tSGmThgy1JSAcd6ZKdjzXq25QR4vk",
  "key20": "3CQRtK5584wnCkHuia8Azu6a7XF6FKrczwaTykxB2P6Cph6CxKsg1zXShMpw7eZYq3MFvRM8HtwU2eG3aWbLBkjM",
  "key21": "3CXe41FWxUBmvSJBDmCxEFMD7FoadeSWU3E8fy6se2shC1oCTAwAZWazQUtQnDFQzWHVSdDDY7nZ2c7xYvNjF7VG",
  "key22": "2nv3Ffdpy8Hz4LMKaQCetLecLhuBwYJwUQWMuZxDBTkperqShzeGd6AjAPiqwA7Mwh2kqMWvQAPf3rf65ZrZ6WCi",
  "key23": "5TRtmXRG9rtwzjzpiYbnzL1fAGEZ9eq896oNZCbGKMV9fRRPgkMBe7kyDEMs4xG9ZzSHumdtEXevNvsa5fp2NuJM",
  "key24": "36TgR9MHkJhDao6AfkXmjTM1n551J1WZsoZDTtLNa9EdafCGqRc9mCM4FZdnprk559YpRA5V519Y8gyZWkpbSqH9",
  "key25": "dHESBEVy6kmKuA6GBcsELHvUneD5nx3JNEUHLMpkDBrYkE49AAvwumrngpV2qrrdmsVmBn9VzNVVU1XfQ2P2SPu",
  "key26": "vDYNmZhbapLfYiLv1hL8ANAwAebEaUMHoXUCUpg42KKehwMYiAQN941osBVkpVG8dL4gvCxLSB8kHUcSg7sSFwz",
  "key27": "3nGe27KpCPT9s3KyCEbt8p9fFAix2KDjxFPHsT4Fs8v3UNivJnPXrsjGiJq2tLfvjwrMHbvzXqPbynKHHvhU5Adi",
  "key28": "4ahfRvJ4ibhJ1KfmheGHcJGnSjUdjVMVhcDcHJu6ch79iCHz7AESCGCuvEvRNmPgq6VuWru5QjAxu6TvWatzEV8d"
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
