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
    "5WCQLpseXrWM1pRa1j854TytdQY5naNvjrwTsG4fxJWg4eA5jEU8aERAZPdfrVps9nXNZNrBQwZMx9dpwACdGew7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "484SaTdvN3fUSst21mM8xamVc6n5KxkZBk38TvW6N7Ji7KP3967k4bM7jm44CmgeNsDmjX9ebGsx1BecaxsxeQYb",
  "key1": "3soXEn7Lf8Fvd8uDbs16JEuw7yYRfpMwfvguVXponhirPCYwkTJP9gbMHafMRTtfSKqed6FtBe2hc6en82yBtpXs",
  "key2": "2xrvkjtT6JxWVetCZEMjTW6JcrU3VSr69ic4uGLLTAn5cYMgYbUAALJvAdDJ7CUMAopbp44mgjb5Pm6eUSp4omTv",
  "key3": "6q1muJunmiyARhqqGvT2Li9xynTffY19X5UKC45AFxkA7bfZW9Y61oSHLxy9waeRzrmvuCaJs3Px93GjGSusHqu",
  "key4": "3KHAw5wRXHezXBm8mM849fv36RhWHAiqniyWPPNsQh1N8kLKDrzgeTXHGnQYH4keLw5d32Gr61XZtptEpZAXabMr",
  "key5": "qSmmLH1SNgj76gwoTeLM3ek4TkQThT1e8VwKaTiwytdJoHs3ywtvmaxRYiL36rV9oBsbrtKM3Sm4gxya5ge7vez",
  "key6": "gNMzWC5auFhBQvV3dXUuuZ2kpSr11S2jt9CF31wWcVDqjb2EMR856hqvxY2XvEKk4kQx8t7PgaSQV5n6iENRp4R",
  "key7": "4qvq4wNTKctVVW7ThAMhKNYg9Y2kf6fP4BdBjn27qV4Y2Eijs5dxj9ek7hSj3iNZ2UMehF68xBD8xZHk8B3Lxv2D",
  "key8": "4fwChYYzxAkHuHSJeKxisBzz8Jm6RU1XW8yhMGjjKRk43rWjYb9uSUf4WEtNv9eKc7sUALLHJ8MZvx27Dk5LtbZ8",
  "key9": "2HchFobm95Dgirq7uoe2JJxHSNhsCLWspAGDPG9ePgQ8ShichpU7n7w5KPzDVmVPvEtwcTsMB2rWAmxU2wKUzz4o",
  "key10": "r1aFJ9N5piUs5Govi4tXEdSVurRUbyk71kxeK9JmgNKUZAcZg99sNiycwx7YVFjYj3ya6XbUdYcPAXHvXWrQN8s",
  "key11": "2GrUhh2sM1ySWDBtmhezDUAWUoewWPNjKb1WxWWWX6SZYq2R2A8jzHP3PfPc6AoEr2v7E5dkVaUJvEvCXr7hTSFS",
  "key12": "5nFU1b7LsFuiReMQdEKvKhQ5U5vRV2vtDZv57T2etQNaMf3BGfeN1qBsbtDCrdki46iidkGotR5EEQxduZ2cJkrQ",
  "key13": "FNkw1NeHJPVQ3cbDK1VsC6yJyYQ8vgd3y84adomDpW261VT1J2tH3AESx5fXroyUxAyqYhsmaGagCjmkg1iHS5w",
  "key14": "4WxigH6UXY77hGHvzMyR3Sb45W6EwPQTZRnrTHYFoyGWDejG8SNcx54tsnmVSPVKpiiw5z1WT5akZCT6F4yPjKL",
  "key15": "3GkEXsz5BLK3WPz2Md6oCTVFdJAn3aCVsanJc9wviZ47PnAkP8hx5Dy9YC5YFCKAEQ4LAVgTXhhneGeL7FJbBKyP",
  "key16": "4pFRC8BFn2kX3akdkaCXBx4XC556AawKzNnqTrBM4drVLxPGh2zSGmHg7f54VdkPFQuX8XyrZtt3haFkKPeXrctY",
  "key17": "esvXFijQMZmdAMyiEirf5vaVfNjvphPt6yadLpGrWSVhJay69ceBy7wmp59rpJKc7w6qToej6iTxbbn18Wokm8R",
  "key18": "4vcAhm3R9GTEaAqyqF1TfJ8nt937KMWSVgDry8nRzqmHHVFTmQomZpBANetJbQsGmztw3oKkNcgzn4ppsnsFrj1r",
  "key19": "47e1A3ZDQUtYM9zKMUHVHXMMoUSvj2zx9nm4VcftrnpCye5TcQH1caXWVtCigxE9XgvuputVsN5m7HPcwCetyxbL",
  "key20": "2vneGZJTFM4mbuxrDaP3KMfNvwPjJSbSfhg9Y72DdfJX7uD9XNjvW1mvkuxpzxQCoaDbhh5aExYmyEVRbeGB57Ug",
  "key21": "2Dqo4ohGd4p73K1xQpJyC3ApHJarzBrNkVYomnHtYmjnfoupddyM8vNVsMxfPhZUoc4C7Q5PUezLeAkd3KuKpeWp",
  "key22": "BixSJWCRCeEphpDRAA4RSGMdaCYH3mrR9NubEqyeBpJS29DSmJrVfaV4uHnrXNi1F9ENKLihmooJxMeZMGcKVDC",
  "key23": "3zfjaWxUTPTX1o3QWrygCBbMUpBTvWcNtcbDaqWEVBmSr3hDVVX9hsty6F7E5CE8H5JbWnWGFGVtEaPRF6YRqUBq",
  "key24": "3C9H57JxRy8QnoHDrYrUgbLLaBngULfWUQgySQgKA5hKpPZieJ1aFwCRkdTbfcvhUsj1irQCcHViDQvmf8xbDQPZ",
  "key25": "4aFFzFgBWtENTYgMtxLTRvaPhMMrV3RVu379YdXEAEmrjL3WXFCAcLXLDKCXooqEGVKXwMR4KR6sXtMZa4R9Djwz",
  "key26": "29DWaCZpnJb2yPCf2MosnQborh2K1rY3d57XrDBdbTjSUDwNPCinrgGC9iFFmMDX4EpNp7gx7z1K45py6S6hZNgk",
  "key27": "3ZtY95HcQCu8QaWcyskBXKTAhRrQdr45A2YLY8c1xpZAP7HZTp9SEpyVY23eGMdcvPocH26JGPxSoNfxusgE7Ber",
  "key28": "3Kh52Qf9kqs6LzNARYKKPNQwwUWxrKdgyS1iJHfWvxfvixDrjruke5j3L71uMjm3b3H4idfUWxpy9jTodHRS8d21",
  "key29": "3whaF3HNDmyJoDAFyTHgowvw4rN8DD3VhV5ExR7L5b3eoQ2bZ1VusN74jkaaMfjh6DBKeqYBfcA7L5zQ3Mhpyy3B",
  "key30": "5z4jwBemLpBstnGPnTt9FZgLrheJ5EUqR46EDsjmbtuHBvERuvnxkhG7emmNkfdfCQptyhYCGBcadU4X9P2jpM3x",
  "key31": "hb7hS2atHxh8nmk6KwZ5VDFodAf744B2ewNg2DZ6wT1Xvbv7pVFFVGJwheJj6dTE1UYwGL1kio3sQpj8MWz3oYQ",
  "key32": "32FY7KhwszPJ4BNuMtDSVUbTF5wqF8s3EVknX3WHJSAG45dGxrS8xdfAasFZDgDaz7SUqfS5vw5yesyMGyeCTrBB",
  "key33": "3ESTHLMzhYG4YTpLVhw87smJNiiZmpYmxxheSbpn5ow1TAzh276zHCAK9k5cweQsUp8SiHx5ANduxMmMvMny52Y",
  "key34": "3kJdcgvk7Gz8q1sHEsCTsb21koCScsanT5NhJw18CeA3FuBDMXxWcr1C7xof3SWcMJN2X9ptHD95RwYWpzgHMM7Q",
  "key35": "2UqxZtQjeumwxp2SCiPDfQMCRz1zzJ7o37gzkq1hxSxY9jznzMUhuAUZPSFuBRpvBWpHDcf3VWax5iitFYCivWqm",
  "key36": "5hhAwVHSx3d1HekM9VhGeZBnmK6ZNfwgANZGyQJBNegpiGMEdEptfwohBen2JvzVfCEFc5bqBJjioJu6g4BGHX4B",
  "key37": "4rw5pyv2Y3bH2SjMAtb1bqSUp6YaVvxU7BbaDrJcsmhy6Sn8DcqiMntKjj3RjmYpS5P5H7bqXu9BqpWYh3XUoSzp",
  "key38": "5CR5nj1pFC8DYNGASL3LBFdw5mrMiUN8JXm86gK98ekMhaar8UWDtt6zWdbUHTFK12yetXJQ9CQqNFedRqzbFdwZ",
  "key39": "4bH5Y1S1dZrrmdeRBf98Hd2oMY3qkiZppgvBBBiRpWeFGnSjLoQnA9VnC6nx3aPd47DrNFgyvsG2NFWXNvT9TFG5",
  "key40": "3idQD8Fh6JjU931GxHR9t8qD8hmvzEMQ8ZoX2i1oXZaV3dt396XK9472pfHYxVdV5g32365aMzovphz4uu5R1z4R"
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
