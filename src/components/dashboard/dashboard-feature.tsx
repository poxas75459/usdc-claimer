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
    "EPxafziv2NeVygDYmSGoB3HJqbUexPjc7FATw7DHzQWwNB36jHadCCKksNa3dUx6JMB1tL8h7h6jokJdsRiw55K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h9zENzmZhHUf1jZqqdvYoMocGadSpVuU12yk7n4CqUtJZNkEn4KqDCDCbgcBiAtABjiGVBEoieA8h3vjGAEqtyt",
  "key1": "iNECLH127SGhZvbX3bHG3Jo5zWJxuW6dYCafsXk4yrF81Q1xPNqFwFV4HB8nrdqDDjRenfVLKvSrfa81LXBcqJ2",
  "key2": "4pLqSQQQ6HLvfeViLXhdJ25kDK47faA23mQ3EKu9KgB6ZiGTBMQm9M9idxZuTxd8DeGT5GiQKTyVSSDsTNazEtg1",
  "key3": "5mk3vnEy7GzwHiscybwgza4mzk8W7MEy1GSywS1ikA2ScTPZSy8JFJjHdHAGUcJGXSChx2LswZmSrnZEMQCBSZ3q",
  "key4": "4hazMDYvWRxB78Jr4o1KdiGb6quEcGz7TXVByndq9TBxRTedNapvSyu7d49HAEiayKanpr1YeR2Kgd6SFKMaa7gW",
  "key5": "21Rr2mFHc1akAdAr1EXssMNpWLKgFUSTShMF9gDwj2whJJxQ49p2XWruaf7HSouA6obWwvVhtPpvQRCWRMDULB8f",
  "key6": "52esEJVPKi9XYAQrmrGqKpPGtsYgak9F8dxRs5VwoQbMiWVqR3J5pp9XM8crjL6tu5UUu1ArJMDdz7zc7bK7uSwX",
  "key7": "4DQsurj2a81wqzfJTUvLtXUuwFvD2zURxjfCQsxPbi2cbffmgDjFwVoR7gGsz63pV2iL5fGgf9xwVBzN7Jea8Dtm",
  "key8": "5H5eyyvv1jReNGjVc5tgAcvkfHAiMeS7k12YGbNv9UCi1PVpCPcFoez4f2DXgbnTuDtULE9F6jtg4Tpg8kh3Vr6Y",
  "key9": "4X1drBhvNncxEjhp1sfVxioNifQWzbvd13FSyi7YmDdu2jiRoLumy2uKZmRfTFkFS4GFFKcVbHoMpdGqDrAAgcbc",
  "key10": "4qpC6skVP5nMqWtNndCYDCjnaBCo2ZAjqT8UPu4gw9WjiCRXWcwxQRYea2ByH3aDwpHkHCSpa2FF5DgKXGwBonva",
  "key11": "48KTekAs1kbMyHw3e6NGr4EQygwFpWrTMaUwjihb2xTSvYEAKmtuKha8jDgNJ7JNEbiroCiGVG9DnfSzE72imy3a",
  "key12": "23Vp9gWEQPMhK4atBEADBHL7eYcjJm58rCDcqgasKzykcRxRhe58rGoDk2JH6MRuGa7ikTjW8V2188vpwsfDpPPd",
  "key13": "476cPsHLjMw76SJX4ubEwafWv5D2K3ieCJPPGqpmXvifB3uxrT4aG7Xq21UiaxVxFMpntcTJMnzpWcYzrtuzGsD",
  "key14": "Y4uYwcsJDE9vLsZ3JwfsnHEVM2AFkaQX79N2qbHZPHT6GVPzGpQGqKoP3kNrCk6J2tC7jrXwpWfg7YS3ESeuGdd",
  "key15": "vu4BntQRRdZFMsMuCwYwX8mvtdXVT5umuXjokwrHJdvRtVzDp6xrF4pMHEW371kUmN9u4y6dR38QE5EGkoTDdCF",
  "key16": "2wb1AMHDAqF8NuTxpwM3jMmKF6yuhy4QL8QFCmTBdVFSBy5SnxesnrUKnYeCKm4pw1R8dUJRdPwTAi8f8Nc8BpeF",
  "key17": "4DAEnTqwPAtawestz5XXKwdBihsScigLKA5LurrQKvpmK38mqRWr4YBVsLUvfU7BPQ84MAuaU92oHRqes46Vz9ev",
  "key18": "5jahWJGb7vmXSvvhxADPd6216rxLVcnVd55UDkTpnaRv4VM8dFEypA6k6NmodnY545FGfWhbkodPuQcv77wFkUiE",
  "key19": "5zag3TzvmKbCsYVioNJAJaKyJgc8dk52mjApkdcJLyMU4hwRmHCkQQcZzLsMmhF1LbJnDYK4sRHdkwjiz7KDWFt9",
  "key20": "2VgGLJkTN2QmUnTKaTcr36qTBegryQzf5eQzYuzqHTH9tWDkPEH6z14EoQiUGYnnyfLXUrHdmsLww6ochQ3knQTC",
  "key21": "Av5BJAuRAm1rKenhHVjc7C2ucMiKLFw8hjFthsjVRmmJy1qTY9djyMWfajnv7JBpp47dAfa6wEghrTdYAEAxo7i",
  "key22": "56gxRiBrPJzXt3zUxwDwUaFrhwyXgitoBWUbG3Ph1vWnsFxUFSRdzhHTcMKfC3wWTwCSFtyZjMpH4WbZhD5Szp2u",
  "key23": "2JFPtGXHuTzSewNEDSRa3ZC6UiCVCWA3ikjDmKHyB82fG5eXZHdDv3aQbNzn5z3SToiwgAq9PqPbTve4Pf4j2hx6",
  "key24": "4oTHorJiX6mGTyo1ciK5dyCNZaDUW9PBfoZfnYT3GVJEJfNtg6zGeVKZCF4i9Vt8PnZGYQc7GRvZohpboMVEyfmo",
  "key25": "5tVCfKNnnsgHMu28WGLVzPnC3ncJEq2aa926p6HtgbLq595peTacmjPjvPaHNEDHFG4CQYTMCMNnnZJjMphKPiMF",
  "key26": "3skT6c6uPGWc7EMbXxQ8wrKQBizmphzP6YrE3xJu1vsawKhfHcKp67PxveQaoQygWTSngK7yP751oZY88t5icfNj",
  "key27": "YunJSPqqHdbAJvZsfuaYMFixhQiE2KhSK1T8NAPHFiMt28ZbBzEUah1De2UNuonHZT7cCM3YEuKXLUYzEpF6t7d",
  "key28": "2MZA19oHTd6fdpDSc4f9w1Pufv1GeMApp2HbNHKpFFeagZv621Ni76pCdxaeRLgS3WReoA4HXFMorb7KcYR4gRd",
  "key29": "hEELV6i8F643A7NCeauazvBn36S8VqAq5EaC76yjo2X2W6JmyxXLBuko8Bf4RwpxxkWJbzxaXorysUkWup3j6wo",
  "key30": "2XYEHhGvn46obtzc6QURjBob6Q9BvCskoRozkaUtKwwywxF8JH7UQfFApNPVgoo2U5oxjqCKqLy3Uw57JxzEHFqP",
  "key31": "4BwBDg21vncjxooD72a5Ln6BhMPYfUns28hCMhAPuPFA2TVFxExYHEn6N5gWiV59jHmGVSiERRscJwxc9Nmkt9vr",
  "key32": "5erJiFqPbZQYKry4oiGmkkHzNkdQmWSRcqwWuv2j2GAth9fMGtRvaV1MABzC1WGTqQ3xn3t7eqVhQq5wroekAruC",
  "key33": "M48t6GpAQNSeinchR5sPsDQG36WjW6ivaa9mwq9N9CFhYfzhuzRtuB2FZJwuUShYebLgWKoRooCqU7QijVbvL1t",
  "key34": "3AZeMqFBWxBcAdaBM37CfSifsSe3yt5YwgCjVk6doHFkBrutag5gntZbFVvteycEU4tHKp4MRbxdaECQ7DGAi1Ku",
  "key35": "26Xbbqh5z22u6PymjJybBSc7Pr8FQYtijcBFqUGNzidL4pYVfyh7srM54TdTU3Vj1c9CNw6oqkNjynY78bo1Q6P6",
  "key36": "2YUxnLf7vcf3TUK7eKh8BbXE32rQwcJ43h767nQyacKmrXvQPPobbAj4FLuvPiWzJhQY2eArXHZAQy86z1z88oRw"
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
